---
aliases:
  - Karnaugh-Diagramm
  - Karnaugh Map
---
An important tool for obtaining a logically simplified function is the **Karnaugh map**. It is essentially just a different arrangement of the truth table. The values of the input variables are not written sequentially, but instead arranged along the horizontal and vertical edges of a grid structured like a chessboard.

For an even number of input variables, half are written along one edge and the other half along the opposite edge. For an odd number of variables, one edge must contain one more variable than the other.

**AND function**

| $x_1$ | $x_2$ | $y$ |
|:----:|:----:|:--:|
| 0    | 0    | 0  |
| 0    | 1    | 0  |
| 1    | 0    | 0  |
| 1    | 1    | 1  |

**Karnaugh Map of the AND function**

| $x_2 \backslash x_1$ | 0 | 1 |
|:-------------------:|:-:|:-:|
| 0                   | 0 | 0 |
| 1                   | 0 | 1 |

The arrangement of the combinations of input values must be chosen such that only **one variable changes** when moving from one cell to a neighboring cell.

The values of the output variable $y$ are entered into the cells, corresponding to the input variable values indicated at the edges.

Since the Karnaugh map is simply a reformulated representation of the truth table, the disjunctive normal form of the corresponding logical function can be derived in the same way as before. The advantage is that possible simplifications can be recognized more easily.

### Example

**Truth Table**

| $x_1$ | $x_2$ | $x_3$ | $x_4$ | $y$ |
| :---: | :---: | :---: | :---: | :-: |
|   0   |   0   |   0   |   0   |  1  |
|   0   |   0   |   0   |   1   |  1  |
|   0   |   0   |   1   |   0   |  1  |
|   0   |   0   |   1   |   1   |  1  |
|   0   |   1   |   0   |   0   |  1  |
|   0   |   1   |   0   |   1   |  0  |
|   0   |   1   |   1   |   0   |  0  |
|   0   |   1   |   1   |   1   |  0  |
|   1   |   0   |   0   |   0   |  1  |
|   1   |   0   |   0   |   1   |  0  |
|   1   |   0   |   1   |   0   |  1  |
|   1   |   0   |   1   |   1   |  1  |
|   1   |   1   |   0   |   0   |  0  |
|   1   |   1   |   0   |   1   |  0  |
|   1   |   1   |   1   |   0   |  1  |
|   1   |   1   |   1   |   1   |  1  |

**Karnaugh Map**

$$
\begin{array}{c|c|c|c|c}  
x_{3}x_{4} \backslash x_{1}x_{2} & 00 & 01 & 11 & 10 \\  
\hline  
00 &  
\color{blue}\fbox{\color{green}1} &  
\color{blue}\fbox{\color{black}1} &  
0 &  
\color{red}\fbox{\color{black}1} \\  
01 &  
\color{green}1 &  
0 &  
0 &  
0 \\  
11 &  
\color{green}1 &  
0 &  
\color{orange}1 &  
\color{orange}1 \\  
10 &  
\color{green}1 &  
0 &  
\color{orange}1 &  
\color{red}\fbox{\color{orange}1} \\  
\end{array}
$$

> [!note] General Simplification Rule
> If in a rectangle or square of cells all values are 1, then the conjunction of the entire group can be obtained directly by considering only those input variables that have the same value (0 or 1) in all cells of the group.

> [!note]
> Groups may wrap around edges of the map.

To construct the disjunctive normal form, as described earlier, a conjunction of all input variables must be formed for each cell that contains a 1.

$$
K_1 = \bar{x}_1 \bar{x}_2 \bar{x}_3 \bar{x}_4
$$

$$
K_2 = \bar{x}_1 x_2 \bar{x}_3 \bar{x}_4
$$

Forming the disjunction:

$$
K_1 + K_2 = \bar{x}_1 \bar{x}_2 \bar{x}_3 \bar{x}_4 + \bar{x}_1 x_2 \bar{x}_3 \bar{x}_4
$$

Factorization:

$$
K_1 + K_2 = \bar{x}_1 \bar{x}_3 \bar{x}_4 (\bar{x}_2 + x_2) = \bar{x}_1 \bar{x}_3 \bar{x}_4
$$

**Grouping**

$$K_{\color{red}A} = \bar{x}_2 \bar{x}_4$$
$$K_{\color{blue}B} = \bar{x}_1 \bar{x}_3 \bar{x}_4$$
$$K_{\color{orange}C} = x_1 x_3$$
$$K_{\color{green}D} = \bar{x}_1 \bar{x}_2$$

**Final Simplified Function**

$$
y = K_A + K_B + K_C + K_D
$$

$$
y = \bar{x}_2 \bar{x}_4 + \bar{x}_1 \bar{x}_3 \bar{x}_4 + x_1 x_3 + \bar{x}_1 \bar{x}_2
$$

> [!note] Device Fitting
> In practice, logical functions are no longer simplified manually. Instead, minimization tools in design software are used,
> which do not necessarily minimize the number of terms, but aim for an optimal implementation for the target PLD or FPGA.

**Derived Logic Functions**

| $x_1$ | $x_2$ | $x_1 \lor x_2$ | $x_1 \land x_2$ | $\overline{x_1 \lor x_2}$ | $\overline{x_1 \land x_2}$ | $x_1 \oplus x_2$ | $\overline{x_1 \oplus x_2}$ |
| :---: | :---: | :------------: | :-------------: | :-----------------------: | :------------------------: | :--------------: | :-------------------------: |
|   0   |   0   |       0        |        0        |             1             |             1              |        0         |              1              |
|   0   |   1   |       1        |        0        |             0             |             1              |        1         |              0              |
|   1   |   0   |       1        |        0        |             0             |             1              |        1         |              0              |
|   1   |   1   |       1        |        1        |             0             |             0              |        0         |              1              |

Where:

- $x_1 \lor x_2$ = OR  
- $x_1 \land x_2$ = AND  
- $\overline{x_1 \lor x_2}$ = NOR  
- $\overline{x_1 \land x_2}$ = NAND  
- $x_1 \oplus x_2$ = XOR  
- $\overline{x_1 \oplus x_2}$ = XNOR
