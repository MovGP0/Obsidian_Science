# KiCad `.kicad_sch` Notes

## Format

- KiCad schematic files use a UTF-8, human-readable S-expression format and the `.kicad_sch` extension. Use UTF-8 without BOM for `.kicad_sch` files.
- The root token is `(kicad_sch ...)`. It contains a required `(version YYYYMMDD)` token and a `(generator ...)` token that names the writer.
- KiCad's developer documentation asks third-party writers not to use `eeschema` as the generator identifier, so generated files should use a distinct generator name.
- Common schematic sections include the file UUID, page settings, optional title block, embedded `lib_symbols`, junctions, wires/buses, labels, placed `symbol` instances, sheet instances, and embedded font settings.
- Coordinates and dimensions are stored in millimeters. Schematic and symbol library data has four decimal places of useful precision.
- `(at X Y [ANGLE])` gives object position and optional rotation. For most objects the angle is in degrees; symbol text angles are stored in tenths of a degree.
- `(pts (xy X Y) ...)` stores ordered point lists for wires and graphical objects.
- A `wire` uses `pts`, `stroke`, and `uuid` child tokens. Schematic wires should be stored as two-point segments; split routed paths into multiple wire objects. Wires connect by coincident endpoints; explicit `junction` tokens are used where a drawn connection dot is needed.
- A placed `symbol` uses `lib_id`, `at`, `unit`, `body_style`, placement flags, properties, pin UUIDs, and an `instances` section.
- The `lib_symbols` section embeds the schematic's symbol definitions, making the schematic more portable than older KiCad formats that depended on a separate cache library.
- KiCad's public file format docs currently describe the S-expression schematic format for KiCad 6.0 and newer; this repository contains KiCad 10 files with `(version 20260306)` and `(generator_version "10.0")` in files saved by Eeschema.

## Hierarchical Sheets and Labels

- A hierarchical sheet is stored as a `(sheet ...)` object in the parent schematic. It has `(at X Y [ANGLE])`, `(size WIDTH HEIGHT)`, drawing style, a `uuid`, mandatory `Sheetname` and `Sheetfile` properties, optional sheet pins, and an `instances` block.
- `Sheetname` is the visible logical name of the sheet instance. `Sheetfile` is the referenced child schematic file, for example `cmos_xor2.kicad_sch` or `cmos_inv.kicad_sch`.
- A sheet can reference the same `Sheetfile` as another sheet instance. KiCad distinguishes instances by UUID path, not only by file name.
- A sheet pin is stored inside the parent sheet object as `(pin "NAME" TYPE (at X Y ANGLE) ...)`. Valid pin types are `input`, `output`, `bidirectional`, `tri_state`, and `passive`.
- Each sheet pin must match a `(hierarchical_label "NAME" ...)` inside the referenced child schematic. The name is the connection contract between the parent sheet pin and the child schematic label.
- In the child schematic, use `hierarchical_label` for ports that are meant to be connected from a parent sheet. For example, a reusable `CMOS_XOR2` child should expose hierarchical labels such as `A`, `B`, `Y`, `VDD`, and `VSS` if those are to be connected by parent sheets.
- In the parent schematic, wires connect to the sheet pins, not directly to objects inside the child schematic. The child internals are connected only through matching hierarchical labels.
- For a hierarchical `CMOS_XNOR2`, the parent sheet should contain one `CMOS_XOR2` sheet and one `CMOS_INV` sheet. Wire `A` and `B` to the XOR sheet inputs, wire the XOR sheet `Y` pin to the inverter sheet `A` pin, wire the inverter sheet `Y` pin to the XNOR output, and connect both sheets to the same `VDD` and `VSS` nets.
- A root schematic uses `(sheet_instances (path "/" (page "...")))`. Each child sheet has its own `instances` block with project/path/page information. The path uses the root schematic UUID plus sheet UUIDs to identify the exact hierarchy instance.

## Labels

- A local label is stored as `(label "TEXT" ...)`. It connects only within the current schematic sheet.
- A global label is stored as `(global_label "TEXT" (shape TYPE) ...)`. It is visible across all schematics in a design and is useful for shared nets such as `VDD`, `VSS`, `GND`, clocks, or other intentional design-wide nets.
- A hierarchical label is stored as `(hierarchical_label "TEXT" (shape TYPE) ...)`. It defines a child schematic port and must correspond to a same-named sheet pin in the parent sheet object.
- Sheet pins and labels use the same shape/type vocabulary: `input`, `output`, `bidirectional`, `tri_state`, and `passive`.
- Use hierarchical labels for subcircuit interfaces. Use global labels only when the net is intentionally global across the project. Do not use global labels as a shortcut for ordinary point-to-point hierarchy wiring, because that hides the parent-child contract.
- For CMOS subcircuits, prefer explicit hierarchical labels for signal ports (`A`, `B`, `Y`, `S`, etc.). For supply ports, either expose `VDD` and `VSS` as hierarchical labels/sheet pins or use intentionally named global labels consistently across every sheet.
- Labels and sheet pins still require physical wire contact at their anchor point. Place label anchors, sheet pins, and wire endpoints on the same schematic grid so KiCad recognizes the connection.
- The shape/type is not just cosmetic. Use `input` for consumed signals, `output` for driven outputs, `bidirectional` where both directions are possible, and `passive` for supply pins or ambiguous/pass-through nets when that better matches ERC expectations.

## Grid Alignment

- KiCad schematic coordinates are stored in millimeters, not in screen pixels or arbitrary integer grid units.
- The ALU CMOS schematics use the same grid spacing as `cmos_inv.kicad_sch`: 1.27 mm, which is KiCad's 50 mil schematic grid. Values such as `128.27`, `133.35`, and `140.97` are valid grid coordinates because they are exact multiples of 1.27 mm.
- Do not judge grid alignment by whether the decimal representation looks like a round number. A coordinate such as `160.02` is on the 1.27 mm grid (`126 * 1.27`).
- Wires, junctions, connector symbols, power symbols, and transistor symbol origins should be placed on the same grid.
- Aligning only wire endpoints is not sufficient. Component origins must also be positioned so their transformed pin endpoints land on the wire grid.
- For unrotated `Simulation_SPICE:PMOS` and `Simulation_SPICE:NMOS` symbols, the pin endpoints are relative to the symbol origin: drain at `(origin_x + 2.54, origin_y + 5.08)`, gate at `(origin_x - 5.08, origin_y)`, and source at `(origin_x + 2.54, origin_y - 5.08)`. Mirroring or rotation changes these transformed endpoint coordinates, so check the placed symbol transform before routing.
- Connector pin endpoints must also be computed from the placed symbol transform. For example, the repository's mirrored left-side one-pin connector places its external net endpoint to the right of the connector origin.
- Before saving a generated or manually edited schematic, verify that every placed symbol origin and every schematic-body `(xy ...)` or `(at ...)` coordinate used for wires, junctions, labels, connectors, power symbols, and transistor instances is on the intended grid. Embedded `lib_symbols` geometry can use smaller drawing coordinates and should not be treated as schematic placement.

## Local Observations

- `Electronics/Appendix/4700/ALU/cmos_inv.kicad_sch` embeds `Connector:Conn_01x01_Socket`, `Simulation_SPICE:PMOS`, `Simulation_SPICE:NMOS`, `power:VDD`, and `power:GND` in `lib_symbols`.
- The inverter schematic uses connector symbols for external pins, power symbols for `VDD` and `GND`, and transistor symbols with `Sim.Device`, `Sim.Type`, and `Sim.Pins` properties for SPICE export.
- The CMOS transistor symbols expose three simulation pins through `Sim.Pins = "1=D 2=G 3=S"`.
- The inverter drawing style places input connectors on the left, output connectors on the right, PMOS above NMOS, `VDD` at the top, and `GND` at the bottom.

## Sources

- KiCad developer documentation, Schematic File Format: https://dev-docs.kicad.org/en/file-formats/sexpr-schematic/
- KiCad developer documentation, S-Expression Format: https://dev-docs.kicad.org/en/file-formats/sexpr-intro/
