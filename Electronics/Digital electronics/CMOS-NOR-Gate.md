A **CMOS-NOR-gate** operates according to the same principle as the [[CMOS-NOT-Gate]].

In order for the controlled load resistance to become high, one of the input voltages goes to the high (H) state, a corresponding number of p-channel FETs must be connected in series.

```kicanvas
src: Electronics/CMOS-NOR-Gate.kicad_sch
controls: basic
zoom: 3
theme: dark
```

The four input combinations can be verified using the truth table.

**NOR Truth Table**

| x1  | x2  |  y  |
| :-: | :-: | :-: |
|  0  |  0  |  1  |
|  0  |  1  |  0  |
|  1  |  0  |  0  |
|  1  |  1  |  0  |
