In digital technology, the problem is, in the simplest case, given in the form of a function table, which is also called a truth table.

The task is then first to find a logical function that satisfies this truth table. In the next step, this function is reduced to its simplest form. It can then be implemented by an appropriate combination of the basic logic circuits.

To construct the logical function, the disjunctive normal form is usually used. The procedure is as follows:

1. Identify all rows in the truth table where the output variable $y$ has the value 1.
2. For each of these rows, form the conjunction of all input variables; specifically, use $x_i$ if the variable has value 1 in that row, otherwise use $\bar{x}_i$. In this way, one obtains exactly as many product terms as there are rows with $y = 1$.
3. The desired function is then obtained by forming the disjunction of all these product terms.

### Example

We explain the procedure using the following truth table:

Example of a truth table with the logical function:
$$
y = (x_1 + x_2)\bar{x}_3
$$

| Row | $x_1$ | $x_2$ | $x_3$ | $y$ |
| :-: | :---: | :---: | :---: | :-: |
|  1  |   0   |   0   |   0   |  0  |
|  2  |   0   |   0   |   1   |  0  |
|  3  |   0   |   1   |   0   |  1  |
|  4  |   0   |   1   |   1   |  0  |
|  5  |   1   |   0   |   0   |  1  |
|  6  |   1   |   0   |   1   |  0  |
|  7  |   1   |   1   |   0   |  1  |
|  8  |   1   |   1   |   1   |  0  |

In rows 3, 5, and 7, we have $y = 1$. Therefore, the conjunctions of these rows must first be formed:

| Row   | Conjunction                     |
| ----- | ------------------------------- |
| Row 3 | $K_3 = \bar{x}_1 x_2 \bar{x}_3$ |
| Row 5 | $K_5 = x_1 \bar{x}_2 \bar{x}_3$ |
| Row 7 | $K_7 = x_1 x_2 \bar{x}_3$       |

The desired function is then obtained as the disjunction of these conjunctions:

$$
\begin{aligned}
y &= K_3 + K_5 + K_7 \\
  &= \bar{x}_1 x_2 \bar{x}_3 + x_1 \bar{x}_2 \bar{x}_3 + x_1 x_2 \bar{x}_3
\end{aligned}
$$

---

This is the disjunctive normal form of the desired logical function.

The circuit implementation follows directly from the logical function.

**Disjunctive Normal Form**
![[Pasted image 20260414194644.png]]

However, before implementation, possible simplifications should be examined.

Applying the distributive law, we obtain:

$$
y = \left[(\bar{x}_1 x_2 + x_1(\bar{x}_2 + x_2)\right]\bar{x}_3
$$

This simplifies to:

$$
y = (\bar{x}_1 x_2 + x_1)\bar{x}_3
$$

Applying the distributive law:

$$
y = (x_1 + x_2)(x_1 + \bar{x}_1)\bar{x}_3
$$

Applying this yields the final simplified result:

$$
y = (x_1 + x_2)\bar{x}_3
$$

Here, the strong simplification of the circuit becomes evident:

**Simplified Function**
![[Pasted image 20260414194720.png]]

If the truth table contains more ones than zeros in the output variable $y$, we get many product terms.

A simplification can be achieved from the outset by considering the negated output variable $\bar{y}$ instead of $y$. For this negated variable, there are fewer ones than zeros; thus, constructing the logical function for $\bar{y}$ yields fewer product terms, resulting in a simpler function from the beginning.

Finally, it only needs to be negated to obtain the desired function for $y$. For this, the operations $(+)$ and $(\cdot)$ must be interchanged, and all variables and constants must be negated individually.
