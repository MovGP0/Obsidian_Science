---
title: "A product-mix simplex tableau"
---

> [!TLDR]
> Put production constraints in standard form and interpret the initial resource and slack entries in a simplex tableau.

## Worked lecture material

##### Simplex method calculations

Maximize profit when all resource constraints have the form $\le$. A manufacturer makes three types of electronic components for computers.

| Component | Fabrication hours per unit | Assembly hours per unit | Profit per unit (dollars) |
| --- | --- | --- | --- |
| A | 2 | 1 | 7 |
| B | 3 | 1 | 8 |
| C | 2 | 2 | 10 |

Each week there are 1,000 fabrication labor-hours and 800 assembly labor-hours. Let $x_1,x_2,x_3$ count the components of types A, B, and C. The objective and resource limits are

$$
\begin{aligned}
\text{Maximize }P&=7x_1+8x_2+10x_3,\\
2x_1+3x_2+2x_3&\le1000 &&\text{(fabrication)},\\
x_1+x_2+2x_3&\le800 &&\text{(assembly)}.
\end{aligned}
$$

The handwritten variable condition is strict, $x_1,x_2,x_3>0$. The simplex formulation uses nonnegativity, allowing a component to be omitted. Introduce nonnegative slack variables $s_1$ and $s_2$.

$$
\begin{aligned}
-7x_1-8x_2-10x_3+P&=0,\\
2x_1+3x_2+2x_3+s_1&=1000,\\
x_1+x_2+2x_3+s_2&=800.
\end{aligned}
$$

The next page sets up the tableau.

Put the two resource equations with slack variables first and the objective equation last. The initial tableau, with the right-hand side after the divider, is

$$
\begin{array}{c|rrrrrr|r}
 &x_1&x_2&x_3&s_1&s_2&P&\text{RHS}\\
\hline
s_1&2&3&2&1&0&0&1000\\
s_2&1&1&2&0&1&0&800\\
P&-7&-8&-10&0&0&1&0
\end{array}
$$

The most negative entry in the bottom row is $-10$, so choose the $x_3$ column. Compare the positive ratios $1000/2=500$ and $800/2=400$. The smaller ratio selects the second row, whose pivot entry is 2. Scale it by $1/2$ to make the pivot 1.

$$
\begin{array}{c|rrrrrr|r}
 &x_1&x_2&x_3&s_1&s_2&P&\text{RHS}\\
\hline
s_1&2&3&2&1&0&0&1000\\
s_2&1/2&1/2&1&0&1/2&0&400\\
P&-7&-8&-10&0&0&1&0
\end{array}
$$

The final instruction is to use row operations to make the entries above and below the pivot zero.

## Source

Kyle Kabasares, *Mathematical Modeling (Math 150, UC Merced 2017)*.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $x$, $y$ | $\unit{oz}$ | Ingredient amounts | Onion soup and chicken stock per serving, respectively. |
| $s$ | $\unit{g}$ | Protein surplus | Protein above the minimum required per serving. |
| $s_1$, $s_2$ | $\unit{h}$ | Unused labor time | Weekly fabrication and assembly labor-hours remaining, respectively. |
