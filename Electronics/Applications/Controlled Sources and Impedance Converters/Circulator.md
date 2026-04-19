# Circulator

<!-- page-import:0824:start -->
11.7 Der Zirkulator 787

**Abb. 11.40.**  
Schaltsymbol des Zirkulators

Die Übertragungsgleichungen des Zirkulators lauten:

$$
I_1 = \frac{1}{R_g}(U_2 - U_3)
$$

$$
I_2 = \frac{1}{R_g}(U_3 - U_1)
$$

$$
I_3 = \frac{1}{R_g}(U_1 - U_2)
$$

$$
\begin{bmatrix}
I_1 \\
I_2 \\
I_3
\end{bmatrix}
=
\begin{bmatrix}
0 & \frac{1}{R_g} & -\frac{1}{R_g} \\
-\frac{1}{R_g} & 0 & \frac{1}{R_g} \\
\frac{1}{R_g} & -\frac{1}{R_g} & 0
\end{bmatrix}
\begin{bmatrix}
U_1 \\
U_2 \\
U_3
\end{bmatrix}
$$

Daraus wird ersichtlich, dass man den Zirkulator aus drei spannungsgesteuerten Stromquellen aufbauen kann, wie Abb. 11.41 zeigt. Eine Schaltung, die dieses Modell mit CC-Operationsverstärkern realisiert, ist in Abb. 11.42 dargestellt.

**Abb. 11.41.** Modell eines Zirkulators mit spannungsgesteuerten Stromquellen

**Abb. 11.42.** Realisierung eines Zirkulators aus spannungsgesteuerten Stromquellen unter Verwendung von CC-Operationsverstärkern
<!-- page-import:0824:end -->
