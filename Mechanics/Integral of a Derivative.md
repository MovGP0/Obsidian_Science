Assuming we want to integrate the changes of a function over time:
$$\int_{t=0}^{n} {\color{brown} \frac{F(t)}{dt} } dt$$
When we expand this equation, we get
$$(F(1) {\color{brown}-} F(0))
+ (F(2) {\color{brown}-} F(1))
+ (F(3) {\color{brown}-} F(2))
+ (F(4) {\color{brown}-} F(3))
+ \dots
+ (F(n) {\color{brown}-} F(n-1)$$

With this, the forces cancel (i.e. $F(1)-F(1)=0$) and we are left with
$$F(n)-F(0)$$
> [!note]
> The integral of a derivative is the difference of the function at the endpoints of the integration.

## Notation in Textbooks

The standard notation for the difference of a function at two endpoints is either
- matching square brackets (`\Bigr[` and `\Bigl]`)
- a single vertical line on the right-hand-side of an expression (`\Big|`)
a superscript is used for the upper limit and a subscript for the lower limit:

$$\Bigl[ F(t) \Bigr]_{0}^n$$
$$F(t)\Big|_{0}^n$$

----

Let's assume that the function $F(t)$ is a product of two functions $f(t)$ and $g(t)$:
$$F(t) = (fg)(t) = f(t)\,g(t)$$
then the derivative of that product is defined as
$$\dot{F}(t) = \dot{f}(t)g(t) + f(t)\dot{g}(t) = (\dot{f}g + f\dot{g})(t)$$
when we integrate, we get
$$\int_{t=0}^n {\color{brown} (\dot{f}g + f\dot{g})(t)} dt = (fg)(t) \Big|_{t=0}^n$$
Note that we can replace $\dot{f}g$ with $f \dot{g}$, where the derivative is over the variable we are integrating, in an integral by changing the sign: 
$$\int_{t=0}^n ({\color{blue}\dot{f}}g) dt = {\color{blue} -} \int_{t=0}^n (f{\color{blue}\dot{g}}) dt$$
