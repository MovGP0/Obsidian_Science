In contrast to a variable in ordinary algebra, a logical variable can only assume two discrete values, which are generally referred to as logical zero and logical one. The symbols used for these are 0 and 1.  

There are three fundamental operations between logical variables: 
- conjunction (AND operation)
- disjunction (OR operation)
- negation (NOT operation)

### Notation

By analogy with numerical algebra, the following notation is used:

|  Operation  |     | Notation                                      |
| :---------: | :-: | --------------------------------------------- |
| Conjunction | AND | $y = x_1 \land x_2 = x_1 \cdot x_2 = x_1 x_2$ |
| Disjunction | OR  | $y = x_1 \lor x_2 = x_1 + x_2$                |
|  Negation   | NOT | $y = \bar{x}$                                 |

### Truth Tables of the basic logical operations

Since the occurring input and output signals can only take the values 0 or 1, all possible combinations can be represented in a table. Such a table is called a truth table.

Conjunction and disjunction operations can be extended to any number of variables. For these operations, a number of axioms and derived theorems apply.  

**Conjunction (AND operation)**

For conjunction, it can be seen that $y$ becomes 1 only when both $x_1$ and $x_2$ are 1. 

| $x_1$ | $x_2$ | $y = x_1 \cdot x_2$ |
| :---: | :---: | :-----------------: |
|   0   |   0   |          0          |
|   0   |   1   |          0          |
|   1   |   0   |          0          |
|   1   |   1   |          1          |

For this reason, conjunction is also called the AND operation.  

**Disjunction (OR operation)**

For disjunction, $y$ becomes 1 whenever $x_1$ or $x_2$ is 1.

| $x_1$ | $x_2$ | $y = x_1 + x_2$ |
| :---: | :---: | :-------------: |
|   0   |   0   |        0        |
|   0   |   1   |        1        |
|   1   |   0   |        1        |
|   1   |   1   |        1        |

Therefore, disjunction is also called the OR operation.

**Negation (NOT operation)**

| $x$ | $y = \bar{x}$ |
|:---:|:-------------:|
|  0  |       1       |
  
## Axioms and Theorems of Boolean Algebra  

### Axioms  
  
| Axiom                  | Form                                  | Dual Form                                |
| ---------------------- | ------------------------------------- | ---------------------------------------- |
| Operation with 0 and 1 | $x \cdot 1 = x$                       | $x + 0 = x$                              |
| Law of negation        | $x \cdot \bar{x} = 0$                 | $x + \bar{x} = 1$                        |
| Commutative law        | $x_1 \cdot x_2 = x_2 \cdot x_1$       | $x_1 + x_2 = x_2 + x_1$                  |
| Distributive law       | $x_1 (x_2 + x_3) = x_1 x_2 + x_1 x_3$ | $x_1 + x_2 x_3 = (x_1 + x_2)(x_1 + x_3)$ |

### Theorems  

| Theorem                 | Form                                         | Dual Form                                          |
| ----------------------- | -------------------------------------------- | -------------------------------------------------- |
| Associative law         | $x_1 (x_2 x_3) = (x_1 x_2) x_3$              | $x_1 + (x_2 + x_3) = (x_1 + x_2) + x_3$            |
| De Morgan's law         | $\overline{x_1 x_2} = \bar{x}_1 + \bar{x}_2$ | $\overline{x_1 + x_2} = \bar{x}_1 \cdot \bar{x}_2$ |
| Absorption law          | $x_1 (x_1 + x_2) = x_1$                      | $x_1 + x_1 x_2 = x_1$                              |
| Tautology               | $x \cdot x = x$                              | $x + x = x$                                        |
| Double negation         | $\bar{\bar{x}} = x$                          |                                                    |
| Operations with 0 and 1 | $x \cdot 0 = 0$                              | $x + 1 = 1$                                        |
|                         | $\bar{0} = 1$                                | $\bar{1} = 0$                                      |

> [!example] Example (Tautology)
> Proof of $x + x = x$:  
> 
> $$\begin{aligned}  x + x &= (x + x)\cdot 1 \\  &= (x + x)(x + \bar{x}) \\  &= x(x + \bar{x}) \\  &= x + 0 \\  &= x  \end{aligned} $$

Using the operations with 0 and 1, it is possible to compute conjunction and disjunction for all possible values of the variables $x_1$ and $x_2$. In this way, the truth tables can be verified.

The other theorems can also be easily verified using truth tables. The following table shows an example for the absorption law according to $x_1 + x_1 x_2 = x_1$:

| $x_1$ | $x_2$ | $x_1 x_2$ | $y = x_1 + x_1 x_2$ |
| :---: | :---: | :---: |:---: |
| 0     | 0     | 0         | 0                   |
| 0     | 1     | 0         | 0                   |
| 1     | 0     | 0         | 1                   |
| 1     | 1     | 1         | 1                   |

It can be seen that the term $x_1 x_2$ has the value 1 only in the fourth row, where $x_1$ is already 1. Therefore, the term $x_1 x_2$ does not change the result.

### Notes

The basic logical functions can be implemented using corresponding circuits. Such circuits have one or more inputs and one output. They are called “gates”.  

There are many different ways to implement gates at the circuit level. They determine the voltage levels in the low and high states. For the design of digital circuits, however, the voltage levels are not important: they only need to be compatible with each other, which is ensured within a logic family.  

Therefore, gates were introduced to describe digital circuits, which only represent the logical function and do not specify the logic family. They simplify the understanding of digital circuits by abstracting from the internal structure.

The complete standard of circuit symbols can be found in [DIN 40900 Part 12](https://www.dinmedia.de/de/norm/din-40900-12/2802551). Unfortunately, obsolete circuit symbols are still used in many design programs for digital circuits today.
