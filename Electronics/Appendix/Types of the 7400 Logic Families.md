
Die Bedeutung von einfachen Logikschaltungen hat abgenommen, seitdem man digitale Schaltungen mit CPLDs und FPGAs realisiert. Deshalb hat sich auch die Zahl der Hersteller reduziert.

Texas Instruments war der erste Hersteller für Schaltungen der 7400-Familie. Sie wurden zuerst in TTL-Technik hergestellt; später wurden viele Typen auch als CMOS-Schaltungen angeboten.

| Type | Description        |
| ---- | ------------------ |
| TP   | Totem Pole         |
| OC   | Open Collector     |
| TS   | Tristate           |
| PI   | paralleler Eingang |
| PO   | paralleler Ausgang |

### NAND-Gatter

| Typ  | NAND-Gatter                        | Ausgang | Pins |
| ---- | ---------------------------------- | ------- | ---- |
| 00   | Quad 2 input NAND                  | TP      | 14   |
| 01   | Quad 2 input NAND                  | OC      | 14   |
| 03   | Quad 2 input NAND                  | TP      | 14   |
| 10   | Triple 3 input NAND                | TP      | 14   |
| 12   | Triple 3 input NAND                | OC      | 14   |
| 13   | Dual 4 input NAND schmitt-trigger  | TP      | 14   |
| 18   | Dual 4 input NAND schmitt-trigger  | TP      | 14   |
| 20   | Dual 4 input NAND                  | TP      | 14   |
| 22   | Dual 4 input NAND                  | OC      | 14   |
| 24   | Quad 2 input NAND schmitt-trigger  | TP      | 14   |
| 26   | Quad 2 input gate NAND 15V Ausgang | OC      | 14   |
| 30   | 8 input NAND                       | TP      | 14   |
| 37   | Quad 2 input NAND buffer           | TP      | 14   |
| 38   | Quad 2 input NAND buffer           | OC      | 14   |
| 40   | Dual 4 input NAND buffer           | TP      | 16   |
| 132  | Quad 2 input NAND schmitt-trigger  | TP      | 14   |
| 133  | 13 input NAND                      | TP      | 16   |
| 1000 | Buffer ‘00’ gate                   | TP      | 14   |
| 1003 | Buffer ‘03’ gate                   | TP      | 14   |
| 1010 | Buffer ‘10’ gate                   | TP      | 14   |
| 1020 | Buffer ‘20’ gate                   | TP      | 14   |

### NOR-Gatter

| Typ | NOR-Gatter | Ausgang | Pins |
|---|---|---|---|
| 02 | Quad 2 input NOR | TP | 14 |
| 23 | Dual 4 input strobe expandable I/P NOR | TP | 16 |
| 25 | Dual 4 input strobe NOR | TP | 14 |
| 27 | Triple 3 input NOR | TP | 14 |
| 28 | Quad 2 input NOR buffer | TP | 14 |
| 33 | Quad 2 input NOR buffer | OC | 14 |
| 36 | Quad 2 input NOR | TP | 14 |
| 1002 | Buffer ‘02’ gate | TP | 14 |

### AND-Gatter

| Typ | AND-Gatter | Ausgang | Pins |
|---|---|---|---|
| 08 | Quad 2 input AND | TP | 14 |
| 09 | Quad 2 input AND | OC | 14 |
| 11 | Triple 3 input AND | TP | 14 |
| 15 | Triple 3 input AND | OC | 14 |
| 21 | Dual 4 input AND | TP | 14 |
| 1008 | Buffer ‘08’ gate | OC | 14 |

### OR-Gatter

| Typ | OR-Gatter | Ausgang | Pins |
|---|---|---|---|
| 32 | Quad 2 input OR | TP | 14 |
| 802 | Triple 4 input OR NOR | TP |  |
| 832 | Hex 2 input buffer | TP | 20 |
| 1032 | Buffer ‘32’ gate | TP | 14 |

### AND-OR-Gatter

| Typ | AND-OR-Gatter | Ausgang | Pins |
|---|---|---|---|
| 51 | Dual 2 wide input AND-OR-Invert | TP | 14 |
| 54 | 4 wide 2 input AND-OR-Invert | TP | 14 |
| 64 | 4-2-3-2 input AND-OR-Invert | TP | 14 |

### EXOR-Gatter

| Typ | EXOR-Gatter | Ausgang | Pins |
|---|---|---|---|
| 86 | Quad exclusive OR | TP | 14 |
| 136 | Quad exclusive OR | OC | 14 |
| 266 | Quad 2 input exclusive NOR | OC | 16 |
| 386 | Quad exclusive OR | TP | 14 |
| 7266 | ‘266’ with totempole Ausgang | TP | 16 |

### Inverter

| Typ | Inverter | Ausgang | Pins |
|---|---|---|---|
| 04 | Hex inverter | TP | 14 |
| 05 | Hex inverter | OC | 14 |
| 14 | Hex inverter schmitt-trigger | TP | 14 |
| 19 | Hex inverter schmitt-trigger | TP | 14 |
| 1004 | Buffer ‘04’ gate | TP | 14 |
| 1005 | Buffer ‘05’ gate | OC | 14 |

### Treiber

| Typ | Treiber | Ausgang | Pins |
|---|---|---|---|
| 34 | Hex buffer | TP | 14 |
| 35 | Hex buffer | OC | 14 |
| 125 | Quad 3 state buffer | TS | 14 |
| 126 | Quad 3 state buffer | TS | 14 |
| 1034 | Hex buffer | TP | 14 |
| 1035 | Hex buffer | OC | 14 |

### Leitungstreiber

| Typ | Leitungstreiber | Ausgang | Pins |
|---|---|---|---|
| 804 | Hex 2 input NAND line driver | TP | 20 |
| 805 | Hex 2 input NOR line driver | TP | 20 |
| 808 | Hex 2 input AND line driver | TP | 20 |
| 832 | Hex 2 input OR line driver | TP | 20 |

### Flip-Flops (transparent)

| Typ | Flip-Flops, transparent | Ausgang | Pins |
|---|---|---|---|
| 75 | Quad D-latch | TP | 16 |
| 77 | Quad D-latch | TP | 16 |
| 279 | Hex SR-flip-flop | TP | 16 |
| 375 | Quad D-latch | TP | 16 |

### Flip-Flops (Master-Slave)

| Typ | Flip-Flops, Master-Slave | Ausgang | Pins |
|---|---|---|---|
| 73 | Dual JK-flip-flop, preset, clear | TP | 14 |
| 74 | Dual D-flip-flop, preset, clear | TP | 14 |
| 76 | Dual JK-flip-flop, preset, clear | TP | 16 |
| 78 | Dual JK-flip-flop, preset, clear | TP | 14 |
| 107 | Dual JK-flip-flop, clear | TP | 14 |
| 109 | Dual JK-flip-flop, preset, clear | TP | 16 |
| 112 | Dual JK-flip-flop, preset, clear | TP | 16 |
| 113 | Dual JK-flip-flop, preset | TP | 14 |
| 114 | Dual JK-flip-flop, preset, clear | TP | 14 |
| 171 | Quad D-flip-flop, clear | TP | 16 |
| 173 | Quad D-flip-flop, clear, enable | TS | 16 |
| 174 | Hex D-flip-flop, clear | TP | 16 |
| 175 | Quad D-flip-flop, clear | TP | 16 |
| 11478 | Quad metastable resistant | TP | 24 |

### Schieberegister

| Typ | Schieberegister | Ausgang | Pins |
|---|---|---|---|
| 91 | 8 bit shift register | TP | 14 |
| 95 | 4 bit shift register | PIPO TP | 14 |
| 96 | 5 bit shift register | PI TP | 16 |
| 164 | 8 bit shift register | PO TP | 14 |
| 165 | 8 bit shift register | PI TP | 16 |
| 166 | 8 bit shift register | PI TP | 16 |
| 195 | 4 bit shift register | PIPO TP | 16 |
| 299 | 8 bit shift reg. right/left | PIPO TS | 20 |
| 673 | 16 bit shift register | PO TP | 24 |
| 674 | 16 bit shift register | PI TP | 24 |

### Schieberegister mit Ausgaberegister

| Typ | Schieberegister mit Ausgaberegister | Ausgang | Pins |
|---|---|---|---|
| 594 | 8 bit shift reg. w. output reg. | PO TP | 16 |
| 595 | 8 bit shift reg. w. output reg. | PO TS | 16 |
| 596 | 8 bit shift reg. w. output reg. | PO OC | 16 |
| 597 | 8 bit shift reg. w. input reg. | PI TP | 16 |
| 598 | 8 bit shift reg. w. input reg. | PIPO TS | 20 |
| 599 | 8 bit shift reg. w. output reg. | PO OC | 16 |
| 671 | 4 bit shift reg. w. outp. reg. right/left | PO TS | 20 |
| 672 | 4 bit shift reg. w. outp. reg. right/left | PO TS | 20 |
| 962 | 8 bit shift reg. dual rank | PIPO TS | 18 |
| 963 | 8 bit shift reg. dual rank | PIPO TS | 20 |
| 964 | 8 bit shift reg. dual rank | PIPO TS | 18 |

### Asynchronzähler

| Typ | Asynchronzähler | Ausgang | Pins |
|---|---|---|---|
| 90 | Decade counter | TP | 14 |
| 92 | Divide by 12 counter | TP | 14 |
| 93 | 4 bit binary counter | TP | 14 |
| 293 | 4 bit binary counter | TP | 14 |
| 390 | Dual decade counter | TP | 16 |
| 393 | Dual 4 bit binary counter | TP | 14 |

### Synchronzähler

| Typ | Synchronzähler | Ausgang | Pins |
|---|---|---|---|
| 161 | 4 bit binary counter, sync. load | TP | 16 |
| 163 | 4 bit binary counter, sync. load | TP | 16 |
| 169 | 4 bit binary up/down counter, sync. load | TP | 16 |
| 191 | 4 bit binary up/down counter, async. load | TP | 16 |
| 193 | 4 bit binary up/down counter, async. load | TP | 16 |
| 669 | 4 bit binary up/down counter, sync. load | TP | 16 |

### Synchronzähler mit Register

| Typ | Synchronzähler mit Register | Output | Pins |
|---|---|---|---|
| 590 | 8 bit binary counter w. output reg. | TS | 16 |
| 592 | 8 bit binary counter w. input reg. | TP | 16 |
| 593 | 8 bit binary counter w. input reg. | TS | 20 |
| 697 | 4 bit binary counter w. output reg. | TS | 20 |

### Bus-Treiber (unidirektional)

| Typ | Bus-Treiber (unidirektional) | Ausgang | Pins |
|---|---|---|---|
| 240 | 8 bit bus driver, data inverting | TS | 20 |
| 241 | 8 bit bus driver | TS | 20 |
| 244 | 8 bit bus driver | TS | 20 |
| 365 | 6 bit bus driver | TS | 16 |
| 366 | 6 bit bus driver, data inverting | TS | 16 |
| 367 | 6 bit bus driver | TS | 16 |
| 368 | 6 bit bus driver, data inverting | TS | 16 |
| 465 | 8 bit bus driver | TS | 20 |
| 540 | 8 bit bus driver, data inverting | TS | 20 |
| 541 | 8 bit bus driver | TS | 20 |
| 1240 | ‘240’ reduced power | TS | 20 |
| 1241 | ‘241’ reduced power | TS | 20 |
| 1244 | ‘244’ reduced power | TS | 20 |
| 2240 | ‘240’ with serial damping Resistor | TS | 20 |
| 2241 | ‘241’ with serial damping Resistor | TS | 20 |
| 2244 | ‘244’ with serial damping Resistor | TS | 20 |
| 2410 | 11 bit bus driver, data noninvert., ser. damp. Res. | TS | 28 |
| 2541 | ‘541’ with serial damping Resistor | TS | 20 |
| 2827 | ‘827’ with serial damping Resistor | TS | 24 |
| 16240 | 16 bit bus driver, data inverting | TS | 48 |
| 16244 | 16 bit bus driver, data noninverting | TS | 48 |

### Bustreiber mit transparentem Latch

| Typ | Bustreiber mit transparentem Latch | Ausgang | Pins |
|---|---|---|---|
| 373 | 8 bit latch | TS | 20 |
| 533 | 8 bit latch, data inverting | TS | 20 |
| 563 | ‘533’ bus pinout | TS | 20 |
| 573 | ‘373’ bus pinout | TS | 20 |
| 667 | 8 bit latch, data inverting, readback | TS | 24 |
| 990 | 8 bit latch, readback | TP | 20 |
| 992 | 9 bit latch, readback | TS | 24 |
| 994 | 10 bit latch, readback | TS | 24 |
| 16373 | 16 bit latch, data non inverting | TS | 48 |
| 29841 | 10 bit latch | TS | 24 |
| 29843 | 9 bit latch | TS | 24 |

### Bustreiber mit flankengesteiggerten D-Flip-Flops

| Typ | Bustreiber mit flankengesteiggerten D-Flip-Flops | Ausgang | Pins |
|---|---|---|---|
| 273 | 8 bit D-Flip-Flop with clear | TP | 20 |
| 374 | 8 bit D-Flip-Flop | TS | 20 |
| 377 | 8 bit D-Flip-Flop with enable | TP | 20 |
| 563 | 8 bit D-Flip-Flop, data inverting | TS | 20 |
| 564 | 8 bit D-Flip-Flop, data inverting | TS | 20 |
| 574 | ‘374’ bus pinout | TS | 20 |
| 575 | ‘574’ with syncronous clear | TS | 24 |
| 576 | 8 bit D-Flip-Flop, data inverting | TS | 20 |
| 874 | 8 bit D-Flip-Flop | TS | 24 |
| 876 | 8 bit D-Flip-Flop, data inverting | TS | 24 |
| 996 | 8 bit D-Flip-Flop, data readback | TS | 24 |
| 16374 | 16 bit D-Flip-Flop | TS | 48 |
| 29821 | 10 bit D-Flip-Flop | TS | 24 |

### Bustreiber (bidirectional)

| Typ | Bustreiber (bidirectional) | Ausgang | Pins |
|---|---|---|---|
| 245 | 8 bit transceiver, bus pinout | TS | 20 |
| 645 | 8 bit transceiver | TS | 20 |
| 1245 | ‘245’ reduced power | TS | 20 |
| 1645 | ‘645’ reduced power | TS | 20 |
| 2245 | ‘245’ with serial damping resistor | TS | 20 |
| 16245 | 16 bit transceiver | TS | 48 |

### Transceivers mit flankengesteiggerten Registern

| Typ | Transceivers mit flankengesteiggerten Registern | Ausgang | Pins |
|---|---|---|---|
| 646 | 8 bit reg. transceiver | TS | 24 |
| 16651 | 16 bit reg. transceiver, data inverting | TS | 56 |
| 16652 | 16 bit reg. transceiver | TS | 56 |

### Komparatoren

| Typ | Komparatoren | Ausgang | Pins |
|---|---|---|---|
| 85 | 4 bit magnitude comparator | TP | 16 |
| 518 | 8 bit identity comparator | OC | 20 |
| 520 | 8 bit identity comparator | TP | 20 |
| 521 | 8 bit identity comparator | TP | 20 |
| 679 | 12 bit address comparator | TP | 20 |
| 682 | 8 bit magnitude comparator | TP | 20 |
| 684 | 8 bit magnitude comparator | TP | 20 |
| 688 | 8 bit identity comparator w. enable | TP | 20 |

### Decoder, Demultiplexer

| Typ | Decoder, Demultiplexer | Ausgang | Pins |
|---|---|---|---|
| 42 | BCD to 10 line decoder | TP | 16 |
| (45 | BCD to 10 line decoder | OC | 16) |
| 137 | 3 to 8 line decoder w. addr. latch | TP | 16 |
| 138 | 3 to 8 line decoder | TP | 16 |
| 139 | Dual 2 to 4 line decoder | TP | 16 |
| 154 | 4 to 16 line decoder | TP | 24 |
| 155 | Dual 2 to 4 line decoder | TP | 16 |
| 156 | Dual 2 to 4 line decoder | OC | 16 |
| 237 | 3 to 8 line decoder w. addr. latch | TP | 16 |
| 238 | 3 to 8 line decoder | TP | 16 |
| 259 | 3 to 8 line decoder w. Ausgang latch | TP | 16 |
| 538 | 3 to 8 line decoder | TS | 20 |

### Multiplexer, digital

| Typ | Multiplexer, digital | Ausgang | Pins |
|---|---|---|---|
| 151 | 8 input multiplexer | TP | 16 |
| 153 | Dual 4 input multiplexer | TP | 16 |
| 157 | Quad 2 input multiplexer | TP | 16 |
| 158 | Quad 2 input multiplexer | TP | 16 |
| 251 | 8 input multiplexer | TP/TS | 16 |
| 253 | Dual 4 input multiplexer | TS | 16 |
| 257 | Duad 2 input multiplexer | TS | 16 |
| 258 | Duad 2 input multiplexer | TS | 16 |
| 352 | Dual 4 input multiplexer | TP | 16 |
| 354 | 8 input multiplexer w. input data latch | TS | 20 |
| 356 | 8 input multiplexer w. data reg.+adr. latch | TS | 20 |
| 398 | Quad 2 input multiplexer w. data reg. | TP | 20 |
| 857 | Hex 2 input multiplexer, masking | TS | 24 |

### Prioritätsdecoder

| Typ | Prioritätsdecoder | Ausgang | Pins |
|---|---|---|---|
| 147 | 10 line to binary priority encoder | TP | 16 |
| 148 | 8 line to binary priority encoder | TP | 16 |
| 348 | 8 line to binary priority encoder | TS | 16 |

### Anzeige Dekoder

| Typ | Anzeige Dekoder | Ausgang | Pins |
|---|---|---|---|
| 47 | BCD to seven segment for LEDs | OC | 16 |
| 49 | BCD to seven segment for LEDs | OC | 16 |
| 247 | BCD to seven segment for LEDs | OC | 16 |

### Monostabile Kippschaltungen (Univibrator)

| Typ | Monostabile Kippschaltungen (Univibrator) | Ausgang | Pins |
|---|---|---|---|
| 122 | Monostable, retriggerable | TP | 14 |
| 123 | Dual monostable, retriggerable | TP | 16 |
| 221 | Dual monostable | TP | 16 |
| 423 | Dual monostable, retriggerable | TP | 16 |

### Oscillatoren

| Typ | Oscillatoren                       | Ausgang | Pins |
| --- | ---------------------------------- | ------- | ---- |
| 624 | Voltage controlled oscillator      | TP      | 14   |
| 628 | Voltage controlled oscillator      | TP      | 14   |
| 629 | Dual voltage controlled oscillator | TP      | 16   |

### Phase locked loop

| Typ | Phase locked loop         | Ausgang | Pins |
| --- | ------------------------- | ------- | ---- |
| 297 | Digital phase locked loop | TP      | 16   |

### Addierer und Arithmetic Logic Units (ALUs)

| Typ | Addierer und Arithmetic Logic Units (ALUs)    | Ausgang | Pins |
| --- | --------------------------------------------- | ------- | ---- |
| 83  | 4 bit binary full adder                       | TP      | 16   |
| 181 | 4 bit arithmetic logic unit                   | TP      | 24   |
| 182 | Carry look ahead unit for 4 adders            | TP      | 16   |
| 183 | Dual carry save full adder                    | TP      | 14   |
| 283 | 4 bit binary full adder                       | TP      | 16   |
| 385 | Quad serial adder/subtractor                  | TP      | 20   |
| 583 | 4 bit BCD adder                               | TP      | 16   |
| 881 | 4 bit arithmetic logic unit with status check | TP      | 24   |

### Paritätsgeneratoren

| Typ | Paritätsgeneratoren            | Ausgang | Pins |
| --- | ------------------------------ | ------- | ---- |
| 180 | 8 bit parity generator         | TP      | 14   |
| 280 | 9 bit parity generator/checker | TP      | 14   |
