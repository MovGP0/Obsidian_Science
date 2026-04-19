# Negative Impedance Converter

<!-- page-import:0818:start -->
11.5 Der NIC (Negative Impedance Converter) 781

**Abb. 11.28.**  
Modell eines INIC mit gesteuerten Quellen

**Abb. 11.29.**  
INIC mit Operationsverstärker

Die größte Freiheit in der Schaltungsdimensionierung ergibt sich, wenn man mit einer Schaltung aus Abschnitt 11.2 eine Strom-Spannungsumsetzung vornimmt und eine der beschriebenen spannungsgesteuerten Stromquellen aus Abschnitt 11.3 nachschaltet. Die einfachste Realisierung ergibt sich, wenn man einen CC-Operationsverstärker einsetzt, bei dem man den nichtinvertierten Eingang an Masse legt.

## 11.5 Der NIC (Negative Impedance Converter)

Manchmal benötigt man negative Widerstände oder Spannungsquellen mit negativem Innenwiderstand. Nach der Definition des Widerstandes ist $R=+U/I$, wenn Strom- und Spannungspfeil dieselbe Richtung haben. Wenn bei einem Zweipol in diesem Fall eine von außen angelegte Spannung $U$ und der dann durch den Zweipol fließende Strom $I$ entgegengesetzte Vorzeichen besitzen, wird der Quotient $U/I<0$. Einen solchen Zweipol bezeichnet man als negativen Widerstand. Negative Widerstände lassen sich prinzipiell nur mit aktiven Schaltungen verwirklichen, die man als NIC bezeichnet. Man unterscheidet zwei Typen: den UNIC, der die Spannung bei gleichbleibendem Strom umpolt

$$
U_1=-U_2+0\cdot I_2
$$

$$
I_1=0\cdot U_2+I_2
$$

$$
\begin{bmatrix}
U_1\\
I_1
\end{bmatrix}
=
\begin{bmatrix}
-1 & 0\\
0 & 1
\end{bmatrix}
\begin{bmatrix}
U_2\\
I_2
\end{bmatrix}
\qquad (11.18)
$$

und den INIC, der die Stromrichtung bei gleichbleibender Spannung umkehrt. Schaltungstechnisch lässt sich der INIC besonders einfach realisieren. Seine idealisierten Übertragungsgleichungen lauten:

$$
U_1=U_2+0\cdot I_2
$$

$$
I_1=0\cdot U_2-I_2
$$

$$
\begin{bmatrix}
U_1\\
I_1
\end{bmatrix}
=
\begin{bmatrix}
1 & 0\\
0 & -1
\end{bmatrix}
\begin{bmatrix}
U_2\\
I_2
\end{bmatrix}
\qquad (11.19)
$$

Diese Gleichungen lassen sich wie in Abb. 11.28 mit einer spannungsgesteuerten Spannungsquelle und einer stromgesteuerten Stromquelle realisieren. Beide Funktionen kann aber auch ein einziger Operationsverstärker übernehmen. Die entsprechende Schaltung ist in Abb. 11.29 dargestellt.

Beim idealisierten Operationsverstärker ist $V_P=V_N$ und damit wie verlangt $U_1=U_2$. Die Ausgangsspannung des Operationsverstärkers stellt sich auf den Wert

$$
V_a=U_2+I_2R
$$

ein. Damit fließt am Tor 1 wie verlangt der Strom:

$$
I_1=\frac{U_2-V_a}{R}=-I_2
$$
<!-- page-import:0818:end -->
