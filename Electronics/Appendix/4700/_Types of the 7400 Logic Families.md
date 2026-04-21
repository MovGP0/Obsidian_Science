---
title: Types of the 7400 Logic Families
---
The 7400 series started as a family of TTL logic ICs from Texas Instruments and later expanded into many compatible subfamilies made in TTL, CMOS, and BiCMOS technologies. The appeal of the series is that the functional number usually stays the same across families, so a `7400`, `74LS00`, `74HC00`, and `74HCT00` all describe a quad 2-input NAND gate even though their electrical behavior differs.

This note covers both meanings commonly associated with the "7400 family":

- the **logic family suffixes** such as `LS`, `HC`, or `AHCT`
- the **functional device numbers** such as `00`, `138`, `161`, or `245`

## How to Read a 74xx Part Number

Most parts follow this pattern:

`manufacturer prefix` + `temperature grade` + `family` + `function number` + `package suffix`

Examples:

- `SN7400`: commercial-temperature, original TTL, quad 2-input NAND
- `SN54LS00`: military-temperature, low-power Schottky TTL, quad 2-input NAND
- `74HCT245`: commercial-temperature, high-speed CMOS with TTL-compatible inputs, octal bus transceiver

Common prefixes and grades:

- `54`: military temperature range, typically `-55 C` to `+125 C`
- `74`: commercial temperature range, historically `0 C` to `+70 C`
- `64` and `84`: rarer TI industrial ranges used on some older parts

## What the Family Letters Mean

The family code matters more than the function number when choosing a replacement part, because it determines supply voltage, input thresholds, speed, noise margin, and power consumption. The exact limits vary by vendor and device, so the datasheet always wins.

| Family                                | Technology                                      | Typical Supply          | Notes                                                                                   |
| ------------------------------------- | ----------------------------------------------- | ----------------------- | --------------------------------------------------------------------------------------- |
| `74xx` / `54xx`                       | Standard TTL                                    | 5 V                     | Original bipolar TTL family.                                                            |
| `74L`                                 | Low-power TTL                                   | 5 V                     | Lower power than standard TTL, but slower; now mostly historical.                       |
| `74H`                                 | High-speed TTL                                  | 5 V                     | Faster than standard TTL, but higher power; now mostly historical.                      |
| `74S`                                 | Schottky TTL                                    | 5 V                     | Higher speed bipolar TTL using Schottky clamps.                                         |
| `74LS`                                | Low-power Schottky TTL                          | 5 V                     | Classic general-purpose TTL family used in many older designs.                          |
| `74ALS`                               | Advanced low-power Schottky TTL                 | 5 V                     | Better speed-power tradeoff than `74LS`.                                                |
| `74AS`                                | Advanced Schottky TTL                           | 5 V                     | Faster than `74LS` / `74ALS`, with higher power.                                        |
| `74F`                                 | Fast TTL                                        | 5 V                     | High-speed bipolar family, often used for performance-critical 5 V logic.               |
| `74C`                                 | CMOS                                            | Vendor-dependent        | Early CMOS version of 74xx functions; not always a drop-in TTL replacement.             |
| `74HC`                                | High-speed CMOS                                 | Usually 2 V to 6 V      | CMOS thresholds, very low static power, often used in new 5 V or lower-voltage designs. |
| `74HCT`                               | High-speed CMOS, TTL-compatible inputs          | Usually 4.5 V to 5.5 V  | Intended for easy interfacing with TTL output levels.                                   |
| `74AC`                                | Advanced CMOS                                   | Usually 2 V to 6 V      | Faster and stronger-drive CMOS than `74HC`.                                             |
| `74ACT`                               | Advanced CMOS, TTL-compatible inputs            | Usually 4.5 V to 5.5 V  | `74AC` performance with TTL-compatible inputs.                                          |
| `74AHC`                               | Advanced high-speed CMOS                        | Usually 2 V to 5.5 V    | Faster than `74HC` without the large power penalty of fast bipolar families.            |
| `74AHCT`                              | Advanced high-speed CMOS, TTL-compatible inputs | Usually 4.5 V to 5.5 V  | `74AHC` speed with TTL-compatible inputs.                                               |
| `74LVC`                               | Low-voltage CMOS                                | Usually 1.65 V to 3.6 V | Modern low-voltage family; many devices have 5 V-tolerant inputs.                       |
| `74BCT` / `74ABT` / `74FCT` / `74LVT` | BiCMOS derivatives                              | Usually 3.3 V or 5 V    | Later bus-oriented families for higher drive, lower voltage, or both.                   |

## Practical Compatibility Notes

- The same function number does **not** guarantee a safe drop-in replacement. Check supply voltage, thresholds, timing, output current, output type, and package pinout.
- `HC`, `AHC`, and `AC` devices use CMOS input thresholds. A TTL output that only guarantees `2.4 V` for HIGH may not reliably drive them at `5 V`.
- `HCT`, `AHCT`, and `ACT` devices were created specifically to accept TTL-compatible input thresholds while keeping CMOS-style low input current.
- TTL families are fundamentally `5 V` logic. Modern CMOS families often work over wider supply ranges and usually consume far less static power.
- Do not leave CMOS inputs floating. Older TTL inputs often float HIGH, but that is poor design practice and should not be relied on.
- Open-collector (`OC`) parts need an external pull-up. Tri-state (`TS`) parts can disconnect their outputs and are intended for shared buses.

## Output Abbreviations

| Type | Description     |
| ---- | --------------- |
| TP   | Totem pole      |
| OC   | Open collector  |
| TS   | Tri-state       |
| PI   | Parallel input  |
| PO   | Parallel output |

## Functional Device Catalog

The tables below group common 74xx functions by what the IC does. The function number usually remains recognizable across multiple families, but not every function exists in every family.

### NAND Gates

> [!info]
> **NAND gates** implement the NOT-AND function: the output goes LOW only when all inputs are HIGH.

| Type             | NAND Gate                           | Output | Pins |
| ---------------- | ----------------------------------- | ------ | ---- |
| [[7400\|00]]     | Quad 2-input NAND                   | TP     | 14   |
| [[7401\|01]]     | Quad 2-input NAND                   | OC     | 14   |
| [[7403\|03]]     | Quad 2-input NAND                   | OC     | 14   |
| [[7410\|10]]     | Triple 3-input NAND                 | TP     | 14   |
| [[7412\|12]]     | Triple 3-input NAND                 | OC     | 14   |
| [[7413\|13]]     | Dual 4-input NAND, Schmitt trigger  | TP     | 14   |
| [[7418\|18]]     | Dual 4-input NAND, Schmitt trigger  | TP     | 14   |
| [[7420\|20]]     | Dual 4-input NAND                   | TP     | 14   |
| [[7422\|22]]     | Dual 4-input NAND                   | OC     | 14   |
| [[7424\|24]]     | Quad 2-input NAND, Schmitt trigger  | TP     | 14   |
| [[7426\|26]]     | Quad 2-input NAND gate, 15 V output | OC     | 14   |
| [[7430\|30]]     | 8-input NAND                        | TP     | 14   |
| [[7437\|37]]     | Quad 2-input NAND buffer            | TP     | 14   |
| [[7438\|38]]     | Quad 2-input NAND buffer            | OC     | 14   |
| [[7440\|40]]     | Dual 4-input NAND buffer            | TP     | 14   |
| [[74132\|132]]   | Quad 2-input NAND, Schmitt trigger  | TP     | 14   |
| [[74133\|133]]   | 13-input NAND                       | TP     | 16   |
| [[741000\|1000]] | Buffer for '00' gate                | TP     | 14   |
| [[741003\|1003]] | Buffer for '03' gate                | OC     | 14   |
| [[741010\|1010]] | Buffer for '10' gate                | TP     | 14   |
| [[741020\|1020]] | Buffer for '20' gate                | TP     | 14   |

### NOR Gates

> [!info]
> **NOR gates** implement the NOT-OR function: the output goes HIGH only when all inputs are LOW.

| Type             | NOR Gate                                 | Output | Pins |
| ---------------- | ---------------------------------------- | ------ | ---- |
| [[7402\|02]]     | Quad 2-input NOR                         | TP     | 14   |
| [[7423\|23]]     | Dual 4-input strobe-expandable input NOR | TP     | 16   |
| [[7425\|25]]     | Dual 4-input strobe NOR                  | TP     | 14   |
| [[7427\|27]]     | Triple 3-input NOR                       | TP     | 14   |
| [[7428\|28]]     | Quad 2-input NOR buffer                  | TP     | 14   |
| [[7433\|33]]     | Quad 2-input NOR buffer                  | OC     | 14   |
| [[7436\|36]]     | Quad 2-input NOR                         | TP     | 14   |
| [[741002\|1002]] | Buffer for '02' gate                     | TP     | 14   |

### AND Gates

> [!info]
> **AND gates** output HIGH only when all required inputs are HIGH.

| Type             | AND Gate             | Output | Pins |
| ---------------- | -------------------- | ------ | ---- |
| [[7408\|08]]     | Quad 2-input AND     | TP     | 14   |
| [[7409\|09]]     | Quad 2-input AND     | OC     | 14   |
| [[7411\|11]]     | Triple 3-input AND   | TP     | 14   |
| [[7415\|15]]     | Triple 3-input AND   | OC     | 14   |
| [[7421\|21]]     | Dual 4-input AND     | TP     | 14   |
| [[741008\|1008]] | Buffer for '08' gate | OC     | 14   |

### OR Gates

> [!info]
> **OR gates** output HIGH when at least one input is HIGH.

| Type | OR Gate                     | Output | Pins |
| ---- | --------------------------- | ------ | ---- |
| [[7432\|32]]      | Quad 2-input OR      | TP | 14 |
| [[74802\|802]]   | Triple 4-input OR/NOR | TP |    |
| [[74832\|832]]   | Hex 2-input buffer    | TP | 20 |
| [[741032\|1032]]  | Buffer for '32' gate | TP | 14 |

### AND-OR Gates

> [!info]
> **AND-OR gates** combine multiple AND stages into a final OR stage, often to implement compact logic expressions.

| Type | AND-OR Gate                     | Output | Pins |
| ---- | ------------------------------- | ------ | ---- |
| [[7451\|51]] | Dual 2-wide-input AND-OR-Invert | TP     | 14   |
| [[7454\|54]] | 4-wide 2-input AND-OR-Invert    | TP     | 14   |
| [[7464\|64]] | 4-2-3-2-input AND-OR-Invert     | TP     | 14   |

### XOR Gates

> [!info]
> **XOR gates** output HIGH when the inputs differ; they are commonly used for comparison, parity, and arithmetic.

| Type             | XOR Gate                     | Output | Pins |
| ---------------- | ---------------------------- | ------ | ---- |
| [[7486\|86]]     | Quad exclusive OR            | TP     | 14   |
| [[74136\|136]]   | Quad exclusive OR            | OC     | 14   |
| [[74266\|266]]   | Quad 2-input exclusive NOR   | OC     | 16   |
| [[74386\|386]]   | Quad exclusive OR            | TP     | 14   |
| [[747266\|7266]] | '266' with totem-pole output | TP     | 16   |

### Inverters

> [!info]
> **Inverters** reverse a logic level: HIGH becomes LOW and LOW becomes HIGH.

| Type             | Inverter                      | Output | Pins |
| ---------------- | ----------------------------- | ------ | ---- |
| [[7404\|04]]     | Hex inverter                  | TP     | 14   |
| [[7405\|05]]     | Hex inverter                  | OC     | 14   |
| [[7414\|14]]     | Hex inverter, Schmitt trigger | TP     | 14   |
| [[7419\|19]]     | Hex inverter, Schmitt trigger | TP     | 14   |
| [[741004\|1004]] | Buffer for '04' gate          | TP     | 14   |
| [[741005\|1005]] | Buffer for '05' gate          | OC     | 14   |

### Drivers

> [!info]
> **Drivers** strengthen digital signals so they can feed more inputs or provide higher output current.

| Type | Driver              | Output | Pins |
| ---- | ------------------- | ------ | ---- |
| [[7434\|34]]   | Hex buffer          | TP     | 14   |
| [[7435\|35]]   | Hex buffer          | OC     | 14   |
| [[74125\|125]] | Quad 3-state buffer | TS     | 14   |
| [[74126\|126]] | Quad 3-state buffer | TS     | 14   |
| [[741034\|1034]] | Hex buffer        | TP     | 14   |
| [[741035\|1035]] | Hex buffer        | OC     | 14   |

### Line Drivers

> [!info]
> **Line drivers** are optimized to drive longer PCB traces, cables, or heavier loads than a standard logic output.

| Type | Line Driver                  | Output | Pins |
| ---- | ---------------------------- | ------ | ---- |
| [[74804\|804]]  | Hex 2-input NAND line driver | TP     | 20   |
| [[74805\|805]]  | Hex 2-input NOR line driver  | TP     | 20   |
| [[74808\|808]]  | Hex 2-input AND line driver  | TP     | 20   |
| [[74832\|832]]  | Hex 2-input OR line driver   | TP     | 20   |

### Flip-Flops (Transparent)

> [!info]
> **Transparent flip-flops**, more precisely latches, pass the input to the output while enabled and hold the last state when disabled.

| Type | Transparent Flip-Flop | Output | Pins |
| ---- | --------------------- | ------ | ---- |
| [[7475\|75]]   | Quad D latch          | TP     | 16   |
| [[7477\|77]]   | Quad D latch          | TP     | 16   |
| [[74279\|279]] | Hex SR flip-flop      | TP     | 16   |
| [[74375\|375]] | Quad D latch          | TP     | 16   |

### Flip-Flops (Master-Slave)

> [!info]
> **Master-slave flip-flops** use two internal stages so the stored value changes in a controlled clocked step rather than tracking the input continuously.

| Type  | Master-Slave Flip-Flop          | Output | Pins |
| ----- | ------------------------------- | ------ | ---- |
| [[7473\|73]]    | Dual JK flip-flop, preset, clear | TP    | 14   |
| [[7474\|74]]    | Dual D flip-flop, preset, clear  | TP    | 14   |
| [[7476\|76]]    | Dual JK flip-flop, preset, clear | TP    | 16   |
| [[7478\|78]]    | Dual JK flip-flop, preset, clear | TP    | 14   |
| [[74107\|107]]  | Dual JK flip-flop, clear         | TP    | 14   |
| [[74109\|109]]  | Dual JK flip-flop, preset, clear | TP    | 16   |
| [[74112\|112]]  | Dual JK flip-flop, preset, clear | TP    | 16   |
| [[74113\|113]]  | Dual JK flip-flop, preset        | TP    | 14   |
| [[74114\|114]]  | Dual JK flip-flop, preset, clear | TP    | 14   |
| [[74171\|171]]  | Quad D flip-flop, clear          | TP    | 16   |
| [[74173\|173]]  | Quad D flip-flop, clear, enable  | TS    | 16   |
| [[74174\|174]]  | Hex D flip-flop, clear           | TP    | 16   |
| [[74175\|175]]  | Quad D flip-flop, clear          | TP    | 16   |
| [[7411478\|11478]] | Quad metastable-resistant     | TP    | 24   |

### Shift Registers

> [!info]
> **Shift registers** move stored bits left or right with each clock pulse and are used for serial/parallel data conversion and delays.

| Type | Shift Register           | Output  | Pins |
| ---- | ------------------------ | ------- | ---- |
| 91   | 8-bit shift register     | TP      | 14   |
| 95   | 4-bit shift register     | PIPO TP | 14   |
| 96   | 5-bit shift register     | PI TP   | 16   |
| 164  | 8-bit shift register     | PO TP   | 14   |
| 165  | 8-bit shift register     | PI TP   | 16   |
| 166  | 8-bit shift register     | PI TP   | 16   |
| 195  | 4-bit shift register     | PIPO TP | 16   |
| 299  | 8-bit shift register, right/left | PIPO TS | 20 |
| 673  | 16-bit shift register    | PO TP   | 24   |
| 674  | 16-bit shift register    | PI TP   | 24   |

### Shift Registers with Output Register

> [!info]
> **Shift registers with output registers** separate serial shifting from the visible outputs, which lets data be loaded first and updated at once later.

| Type | Shift Register with Output Register                  | Output  | Pins |
| ---- | --------------------------------------------------- | ------- | ---- |
| 594  | 8-bit shift register with output register           | PO TP   | 16   |
| 595  | 8-bit shift register with output register           | PO TS   | 16   |
| 596  | 8-bit shift register with output register           | PO OC   | 16   |
| 597  | 8-bit shift register with input register            | PI TP   | 16   |
| 598  | 8-bit shift register with input register            | PIPO TS | 20   |
| 599  | 8-bit shift register with output register           | PO OC   | 16   |
| 671  | 4-bit shift register with output register, right/left | PO TS | 20   |
| 672  | 4-bit shift register with output register, right/left | PO TS | 20   |
| 962  | 8-bit shift register, dual rank                     | PIPO TS | 18   |
| 963  | 8-bit shift register, dual rank                     | PIPO TS | 20   |
| 964  | 8-bit shift register, dual rank                     | PIPO TS | 18   |

### Asynchronous Counters

> [!info]
> **Asynchronous counters** ripple a clock transition through multiple stages, which is simple but introduces propagation delay between bits.

| Type | Asynchronous Counter     | Output | Pins |
| ---- | ------------------------ | ------ | ---- |
| 90   | Decade counter           | TP     | 14   |
| 92   | Divide-by-12 counter     | TP     | 14   |
| 93   | 4-bit binary counter     | TP     | 14   |
| 293  | 4-bit binary counter     | TP     | 14   |
| 390  | Dual decade counter      | TP     | 16   |
| 393  | Dual 4-bit binary counter | TP    | 14   |

### Synchronous Counters

> [!info]
> **Synchronous counters** update all counter bits together on the clock edge, which makes them faster and more predictable than ripple counters.

| Type | Synchronous Counter                 | Output | Pins |
| ---- | ----------------------------------- | ------ | ---- |
| 161  | 4-bit binary counter, sync. load    | TP     | 16   |
| 163  | 4-bit binary counter, sync. load    | TP     | 16   |
| 169  | 4-bit binary up/down counter, sync. load | TP | 16 |
| 191  | 4-bit binary up/down counter, async. load | TP | 16 |
| 193  | 4-bit binary up/down counter, async. load | TP | 16 |
| 669  | 4-bit binary up/down counter, sync. load | TP | 16 |

### Synchronous Counters with Register

> [!info]
> **Synchronous counters with registers** combine counting logic with extra storage so counter values can be latched, loaded, or presented in a controlled way.

| Type | Synchronous Counter with Register        | Output | Pins |
| ---- | ---------------------------------------- | ------ | ---- |
| 590  | 8-bit binary counter with output register | TS    | 16   |
| 592  | 8-bit binary counter with input register  | TP    | 16   |
| 593  | 8-bit binary counter with input register  | TS    | 20   |
| 697  | 4-bit binary counter with output register | TS    | 20   |

### Bus Drivers (Unidirectional)

> [!info]
> **Unidirectional bus drivers** buffer and isolate data lines that move in only one direction on a digital bus.

| Type  | Unidirectional Bus Driver                               | Output | Pins |
| ----- | ------------------------------------------------------- | ------ | ---- |
| 240   | 8-bit bus driver, data inverting                        | TS     | 20   |
| 241   | 8-bit bus driver                                        | TS     | 20   |
| 244   | 8-bit bus driver                                        | TS     | 20   |
| 365   | 6-bit bus driver                                        | TS     | 16   |
| 366   | 6-bit bus driver, data inverting                        | TS     | 16   |
| 367   | 6-bit bus driver                                        | TS     | 16   |
| 368   | 6-bit bus driver, data inverting                        | TS     | 16   |
| 465   | 8-bit bus driver                                        | TS     | 20   |
| 540   | 8-bit bus driver, data inverting                        | TS     | 20   |
| 541   | 8-bit bus driver                                        | TS     | 20   |
| 1240  | '240', reduced power                                    | TS     | 20   |
| 1241  | '241', reduced power                                    | TS     | 20   |
| 1244  | '244', reduced power                                    | TS     | 20   |
| 2240  | '240' with serial damping resistor                      | TS     | 20   |
| 2241  | '241' with serial damping resistor                      | TS     | 20   |
| 2244  | '244' with serial damping resistor                      | TS     | 20   |
| 2410  | 11-bit bus driver, data non-inverting, serial damping resistor | TS | 28 |
| 2541  | '541' with serial damping resistor                      | TS     | 20   |
| 2827  | '827' with serial damping resistor                      | TS     | 24   |
| 16240 | 16-bit bus driver, data inverting                       | TS     | 48   |
| 16244 | 16-bit bus driver, data non-inverting                   | TS     | 48   |

### Bus Drivers with Transparent Latch

> [!info]
> **Bus drivers with transparent latches** can capture bus data while enabled and then hold that value steady for later use.

| Type  | Bus Driver with Transparent Latch   | Output | Pins |
| ----- | ----------------------------------- | ------ | ---- |
| 373   | 8-bit latch                         | TS     | 20   |
| 533   | 8-bit latch, data inverting         | TS     | 20   |
| 563   | '533' bus pinout                    | TS     | 20   |
| 573   | '373' bus pinout                    | TS     | 20   |
| 667   | 8-bit latch, data inverting, readback | TS   | 24   |
| 990   | 8-bit latch, readback               | TP     | 20   |
| 992   | 9-bit latch, readback               | TS     | 24   |
| 994   | 10-bit latch, readback              | TS     | 24   |
| 16373 | 16-bit latch, data non-inverting    | TS     | 48   |
| 29841 | 10-bit latch                        | TS     | 24   |
| 29843 | 9-bit latch                         | TS     | 24   |

### Bus Drivers with Edge-Triggered D Flip-Flops

> [!info]
> **Bus drivers with edge-triggered D flip-flops** store bus data on a clock edge, which is useful for synchronous interfaces and pipelining.

| Type  | Bus Driver with Edge-Triggered D Flip-Flop | Output | Pins |
| ----- | ------------------------------------------ | ------ | ---- |
| 273   | 8-bit D flip-flop with clear               | TP     | 20   |
| 374   | 8-bit D flip-flop                          | TS     | 20   |
| 377   | 8-bit D flip-flop with enable              | TP     | 20   |
| 563   | 8-bit D flip-flop, data inverting          | TS     | 20   |
| 564   | 8-bit D flip-flop, data inverting          | TS     | 20   |
| 574   | '374' bus pinout                           | TS     | 20   |
| 575   | '574' with synchronous clear               | TS     | 24   |
| 576   | 8-bit D flip-flop, data inverting          | TS     | 20   |
| 874   | 8-bit D flip-flop                          | TS     | 24   |
| 876   | 8-bit D flip-flop, data inverting          | TS     | 24   |
| 996   | 8-bit D flip-flop, data readback           | TS     | 24   |
| 16374 | 16-bit D flip-flop                         | TS     | 48   |
| 29821 | 10-bit D flip-flop                         | TS     | 24   |

### Bus Drivers (Bidirectional)

> [!info]
> **Bidirectional bus drivers**, often called transceivers, allow data to move in either direction across a shared bus.

| Type  | Bidirectional Bus Driver              | Output | Pins |
| ----- | ------------------------------------- | ------ | ---- |
| 245   | 8-bit transceiver, bus pinout         | TS     | 20   |
| 645   | 8-bit transceiver                     | TS     | 20   |
| 1245  | '245', reduced power                  | TS     | 20   |
| 1645  | '645', reduced power                  | TS     | 20   |
| 2245  | '245' with serial damping resistor    | TS     | 20   |
| 16245 | 16-bit transceiver                    | TS     | 48   |

### Transceivers with Edge-Triggered Registers

> [!info]
> **Registered transceivers** combine bidirectional bus transfer with internal clocked storage for higher-speed or timed bus interfaces.

| Type  | Transceiver with Edge-Triggered Register | Output | Pins |
| ----- | ---------------------------------------- | ------ | ---- |
| 646   | 8-bit registered transceiver             | TS     | 24   |
| 16651 | 16-bit registered transceiver, data inverting | TS | 56 |
| 16652 | 16-bit registered transceiver            | TS     | 56   |

### Comparators

> [!info]
> **Comparators** compare two binary values and indicate equality or which value is larger.

| Type | Comparator                      | Output | Pins |
| ---- | ------------------------------- | ------ | ---- |
| [[7485\|85]]   | 4-bit magnitude comparator      | TP     | 16   |
| [[74518\|518]] | 8-bit identity comparator       | OC     | 20   |
| [[74520\|520]] | 8-bit identity comparator       | TP     | 20   |
| [[74521\|521]] | 8-bit identity comparator       | TP     | 20   |
| [[74679\|679]] | 12-bit address comparator       | TP     | 20   |
| [[74682\|682]] | 8-bit magnitude comparator      | TP     | 20   |
| [[74684\|684]] | 8-bit magnitude comparator      | TP     | 20   |
| [[74688\|688]] | 8-bit identity comparator with enable | TP | 20   |

### Decoders, Demultiplexers

> [!info]
> **Decoders and demultiplexers** translate a binary selection into one active output line, or route one signal to one of many outputs.

| Type | Decoder, Demultiplexer              | Output | Pins |
| ---- | ----------------------------------- | ------ | ---- |
| 42   | BCD-to-10-line decoder              | TP     | 16   |
| (45  | BCD-to-10-line decoder              | OC     | 16)  |
| 137  | 3-to-8-line decoder with address latch | TP  | 16   |
| 138  | 3-to-8-line decoder                 | TP     | 16   |
| 139  | Dual 2-to-4-line decoder            | TP     | 16   |
| 154  | 4-to-16-line decoder                | TP     | 24   |
| 155  | Dual 2-to-4-line decoder            | TP     | 16   |
| 156  | Dual 2-to-4-line decoder            | OC     | 16   |
| 237  | 3-to-8-line decoder with address latch | TP  | 16   |
| 238  | 3-to-8-line decoder                 | TP     | 16   |
| 259  | 3-to-8-line decoder with output latch | TP   | 16   |
| 538  | 3-to-8-line decoder                 | TS     | 20   |

### Multiplexers, Digital

> [!info]
> **Multiplexers** select one of several input signals and pass it to a single output under control of address lines.

| Type | Digital Multiplexer                    | Output | Pins |
| ---- | -------------------------------------- | ------ | ---- |
| 151  | 8-input multiplexer                    | TP     | 16   |
| 153  | Dual 4-input multiplexer               | TP     | 16   |
| 157  | Quad 2-input multiplexer               | TP     | 16   |
| 158  | Quad 2-input multiplexer               | TP     | 16   |
| 251  | 8-input multiplexer                    | TP/TS  | 16   |
| 253  | Dual 4-input multiplexer               | TS     | 16   |
| 257  | Dual 2-input multiplexer               | TS     | 16   |
| 258  | Dual 2-input multiplexer               | TS     | 16   |
| 352  | Dual 4-input multiplexer               | TP     | 16   |
| 354  | 8-input multiplexer with input data latch | TS  | 20   |
| 356  | 8-input multiplexer with data register and address latch | TS | 20 |
| 398  | Quad 2-input multiplexer with data register | TP | 20 |
| 857  | Hex 2-input multiplexer, masking       | TS     | 24   |

### Priority Encoders

> [!info]
> **Priority encoders** compress multiple inputs into a smaller binary code and report the highest-priority active input.

| Type | Priority Encoder                | Output | Pins |
| ---- | ------------------------------- | ------ | ---- |
| 147  | 10-line-to-binary priority encoder | TP  | 16   |
| 148  | 8-line-to-binary priority encoder  | TP  | 16   |
| 348  | 8-line-to-binary priority encoder  | TS  | 16   |

### Display Decoders

> [!info]
> **Display decoders** convert binary or BCD values into the segment control signals needed to drive numeric displays.

| Type | Display Decoder              | Output | Pins |
| ---- | ---------------------------- | ------ | ---- |
| [[7447\|47]]   | BCD to seven-segment for LEDs | OC    | 16   |
| [[7449\|49]]   | BCD to seven-segment for LEDs | OC    | 16   |
| [[74247\|247]] | BCD to seven-segment for LEDs | OC    | 16   |

### Monostable Multivibrators

> [!info]
> **Monostable multivibrators** generate a single pulse of defined duration when triggered.

| Type | Monostable Multivibrator     | Output | Pins |
| ---- | ---------------------------- | ------ | ---- |
| 122  | Monostable, retriggerable    | TP     | 14   |
| 123  | Dual monostable, retriggerable | TP   | 16   |
| 221  | Dual monostable              | TP     | 16   |
| 423  | Dual monostable, retriggerable | TP   | 16   |

### Oscillators

> [!info]
> **Oscillators** generate periodic clock or timing signals for digital circuits.

| Type | Oscillator                        | Output | Pins |
| ---- | --------------------------------- | ------ | ---- |
| 624  | Voltage-controlled oscillator     | TP     | 14   |
| 628  | Voltage-controlled oscillator     | TP     | 14   |
| 629  | Dual voltage-controlled oscillator | TP    | 16   |

### Phase-Locked Loops

> [!info]
> **Phase-locked loops** synchronize an internal oscillator to the phase and frequency of an external reference signal.

| Type | Phase-Locked Loop          | Output | Pins |
| ---- | -------------------------- | ------ | ---- |
| 297  | Digital phase-locked loop  | TP     | 16   |

### Adders and Arithmetic Logic Units (ALUs)

> [!info]
> **Adders and ALUs** perform arithmetic and logic operations such as addition, subtraction, masking, and comparison support.

| Type           | Adder and Arithmetic Logic Unit (ALU)         | Output | Pins |
| -------------- | --------------------------------------------- | ------ | ---- |
| [[7483\|83]]   | 4-bit binary full adder                       | TP     | 16   |
| [[74181\|181]] | 4-bit arithmetic logic unit                   | TP     | 24   |
| [[74182\|182]] | Carry look-ahead unit for 4 adders            | TP     | 16   |
| [[74183\|183]] | Dual carry-save full adder                    | TP     | 14   |
| [[74283\|283]] | 4-bit binary full adder                       | TP     | 16   |
| [[74385\|385]] | Quad serial adder/subtractor                  | TP     | 20   |
| [[74583\|583]] | 4-bit BCD adder                               | TP     | 16   |
| [[74881\|881]] | 4-bit arithmetic logic unit with status check | TP     | 24   |

### Parity Generators

> [!info]
> **Parity generators/checkers** compute or verify a parity bit so simple transmission or storage errors can be detected.

| Type | Parity Generator              | Output | Pins |
| ---- | ----------------------------- | ------ | ---- |
| [[74180\|180]] | 8-bit parity generator        | TP     | 14   |
| [[74280\|280]] | 9-bit parity generator/checker | TP    | 14   |

## References

- [Texas Instruments Logic Guide](https://www.ti.com/lit/pdf/sdyu001)
- [Texas Instruments Logic and Voltage Translation overview](https://www.ti.com/logic-voltage-translation/overview.html)
- [Nexperia Logic Application Handbook](https://www.nexperia.com/dam/jcr%3A851f7c27-b0e9-4627-84b9-13b132388708/Nexperia_LOGIC_Handbook.pdf)
- [onsemi / Fairchild AN-368: An Introduction to and Comparison of 74HCT TTL Compatible CMOS Logic](https://www.onsemi.com/pub/Collateral/AN-368.pdf)
- [Wikipedia: 7400-series integrated circuits](https://en.wikipedia.org/wiki/7400-series_integrated_circuits)
- [Wikipedia: List of 7400-series integrated circuits](https://en.wikipedia.org/wiki/List_of_7400-series_integrated_circuits)
