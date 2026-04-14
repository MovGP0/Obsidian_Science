Any logical function can be represented by a suitable combination of the basic functions OR, AND, and NOT.

There are a number of derived functions that occur so frequently in circuit design that they have been given their own names.

The NOR and NAND functions are obtained by negating the OR and AND functions, respectively:
- NOR = NOT OR  
- NAND = NOT AND  

Thus:

$$
x_1 \;\text{NOR}\; x_2 = \overline{x_1 + x_2} = \bar{x}_1 \cdot \bar{x}_2
$$
$$
x_1 \;\text{NAND}\; x_2 = \overline{x_1 x_2} = \bar{x}_1 + \bar{x}_2
\tag{6.12}
$$

### Equivalence (XNOR)

For the equivalence function, $y = 1$ when both input variables are equal.

From the truth table, using the disjunctive normal form, we obtain:

$$
y = x_1 \;\text{EQUIV}\; x_2 = \bar{x}_1 \bar{x}_2 + x_1 x_2
$$

### Antivalence (XOR)

The antivalence function is the negated equivalence function.

Here, $y = 1$ when the input variables are different.

The disjunctive normal form yields:

$$
y = x_1 \;\text{ANTIV}\; x_2 = \bar{x}_1 x_2 + x_1 \bar{x}_2
$$

From the truth table, another interpretation of the antivalence function can be derived: it matches the OR function for all input combinations except the case where both inputs are 1.

Therefore, it is also called the **exclusive OR (XOR)** function and is symbolized by a circled plus sign. Accordingly, the equivalence function can also be referred to as the **exclusive NOR (XNOR)** function.

### Realization using only NAND or NOR Gates

In integrated circuits, it is sometimes advantageous to implement arbitrary functions using only NAND or NOR gates.

To do this, the functions are transformed such that only the desired operations appear.

This can be done systematically by expressing the functions in terms of the basic operations:

|         Realization         |                                                   Formula/Function                                                   |               Circuit                |
| :-------------------------: | :------------------------------------------------------------------------------------------------------------------: | :----------------------------------: |
| The NOT function using NAND |                                                                                                                      | ![[Pasted image 20260414203927.png]] |
| The NOT function using NOR  |                                                                                                                      | ![[Pasted image 20260414203935.png]] |
| The AND function using NAND |                    $x_1 x_2 = \overline{\overline{x_1 x_2}} = \overline{x_1 \;\text{NAND}\; x_2}$                    | ![[Pasted image 20260414203918.png]] |
| The AND function using NOR  |                  $x_1 x_2 = \overline{\bar{x}_1 + \bar{x}_2} = \bar{x}_1 \;\text{NOR}\; \bar{x}_2$                   | ![[Pasted image 20260414203910.png]] |
| The OR function using NAND  | $x_1 + x_2 = \overline{\bar{x}_1 + \bar{x}_2} = \overline{\overline{x_1 x_2}} = \bar{x}_1 \;\text{NAND}\; \bar{x}_2$ | ![[Pasted image 20260414203651.png]] |
|  The OR function using NOR  |                     $x_1 + x_2 = \overline{\bar{x}_1 \cdot \bar{x}_2} = x_1 \;\text{NOR}\; x_2$                      | ![[Pasted image 20260414203641.png]] |
If one wants to transform a circuit without calculation, one can also directly use the circuit transformations and omit the resulting double negations.
