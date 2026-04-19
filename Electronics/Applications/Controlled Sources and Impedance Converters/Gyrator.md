# Gyrator

<!-- page-import:0820:start -->
11.6 Der Gyrator 783

$$\frac{U_1}{I_1}=-R_2 \qquad\qquad (11.20)$$

Die Schaltung ist stabil, solange der Innenwiderstand $R_1$ der am Tor 1 angeschlossenen Schaltung kleiner ist als $R_2$. Einen solchen negativen Widerstand bezeichnet man als kurzschlussstabil. Es ist auch möglich, einen leerlaufstabilen negativen Widerstand zu erzeugen, indem man den INIC umkehrt, d.h. den Widerstand $R_2$ am Tor 1 anschließt.

Da die Gl. (11.19) auch für Wechselströme gilt, kann man den Widerstand $R_2$ durch einen komplexen Widerstand $Z_2$ ersetzen und auf diese Weise beliebige negative Impedanzen erzeugen.

Der INIC lässt sich auch als Spannungsquelle mit negativem Ausgangswiderstand betreiben. Eine Spannungsquelle mit der Leerlaufspannung $U_0$ und dem Ausgangswiderstand $r_a$ liefert bei Belastung die Ausgangsspannung $U = U_0 - I r_a$. Bei normalen Spannungsquellen ist $r_a$ positiv; daher sinkt $U$ bei Belastung ab. Bei einer Spannungsquelle mit negativem Ausgangswiderstand dagegen steigt $U$ bei zunehmender Belastung an. Diese Eigenschaft besitzt die Schaltung in Abb. 11.32. Es gilt nämlich:

$$U_2 = V_1 = U_0 - I_1 R_1$$

Mit $I_1 = -I_2$ folgt daraus:

$$U_2 = U_0 + I_2 R_1$$

Der INIC wurde so angeschlossen, dass die Spannungsquelle leerlaufstabil ist. Auch bei negativen Widerständen gelten die Gesetze der Reihen- und Parallelschaltung unverändert. Man kann die Spannungsquelle mit negativem Ausgangswiderstand also z.B. dazu verwenden, den Widerstand einer längeren Zuleitung zu kompensieren, um am Ende die Spannung $U_0$ mit dem Ausgangswiderstand Null zu erhalten.

## 11.6 Der Gyrator

Der Gyrator ist eine Transformationsschaltung, mit der man beliebige Impedanzen in ihre dazu dualen umwandeln kann, also z.B. eine Kapazität in eine Induktivität. Das Schaltsymbol des Gyrators ist in Abb. 11.33 dargestellt. Die Übertragungsgleichungen des idealen Gyrators lauten:

$$
I_1 = 0\cdot U_1 + \frac{1}{R_g}U_2
$$

$$
I_2 = \frac{1}{R_g}U_1 + 0\cdot U_2
$$

$$
\begin{bmatrix}
I_1\\
I_2
\end{bmatrix}
=
\begin{bmatrix}
0 & 1/R_g\\
1/R_g & 0
\end{bmatrix}
\begin{bmatrix}
U_1\\
U_2
\end{bmatrix}
\qquad (11.21)
$$

**Abb. 11.33.**  
Schaltsymbol des Gyrators

**Abb. 11.34.**  
Realisierung eines Gyrators mit zwei spannungsgesteuerten Stromquellen
<!-- page-import:0820:end -->

<!-- page-import:0821:start -->
784  11. Gesteuerte Quellen und Impedanzkonverter

**Abb. 11.35.** Aufbau eines Gyrators aus CC-Operationsverstärkern als spannungsgesteuerte Stromquellen

Es ist also jeweils der Strom auf der einen Seite proportional zur Spannung auf der anderen Seite. Man kann demnach einen Gyrator aus zwei spannungsgesteuerten Stromquellen mit hohem Eingangs- und Ausgangswiderstand realisieren, wie es schematisch in Abb. 11.34 dargestellt ist. Die direkte Realisierung dieses Prinzips besteht im Einsatz von zwei CC-Operationsverstärkern wie in Abb. 11.35. Die Übertragungsgleichungen lassen sich direkt in der Schaltung bestätigen, wenn man berücksichtigt, dass $U_{BE} = 0$ und $I_B = 0$ ist. Um die richtigen Vorzeichen für den Strom zu erhalten, reicht im Signalpfad von links nach rechts ein einfacher CC-Operationsverstärker aus, während in der Gegenrichtung ein Differenzverstärker gemäß Abb. 5.130 erforderlich ist. Um hochwertige Gyratoren zu realisieren, müssen die Stromquellen einen hohen Ausgangswiderstand besitzen. Dafür ist der OPA615 (Texas Instruments) besonders gut geeignet, da er Kaskode-Stromspiegel am Ausgang besitzt, die einen Ausgangswiderstand im Megohm-Bereich besitzen.

## 11.6.1 Transformation von Zweipolen

Um die Wirkungsweise eines Gyrators zu untersuchen, schließen wir auf der rechten Seite einen Widerstand $R_2$ an. Da $I_2$ und $U_2$ dieselbe Pfeilrichtung besitzen, gilt nach dem Ohmschen Gesetz der Zusammenhang $I_2 = U_2/R_2$. Setzt man diese Beziehung in die Übertragungsgleichungen ein, folgt:

$$
U_1 = I_2 R_g = \frac{U_2 R_g}{R_2}
\qquad \text{und} \qquad
I_1 = \frac{U_2}{R_g}
$$

Das Tor 1 verhält sich demnach wie ein ohmscher Widerstand mit dem Wert:

$$
R_1 = \frac{U_1}{I_1} = \frac{R_g^2}{R_2}
\qquad\qquad (11.22)
$$

Er ist also proportional zum Kehrwert des Verbraucherwiderstandes am Tor 2. Die Widerstandstransformation gilt auch für Wechselstromwiderstände und lautet dann entsprechend zu Gl. (11.22):

$L_1 = R_g^2 C_2$

**Abb. 11.36.** Simulation einer Induktivität
<!-- page-import:0821:end -->

<!-- page-import:0822:start -->
11.6 Der Gyrator 785

Abb. 11.37. Realisierung eins Schwingkreises mit einem Gyrator zur Simulation der Schwingkreisinduktivität. Die Schaltung arbeitet gleichzeitig als Bandpass- und Tiefpassfilter wenn man $U_e$ als Eingang benutzt.

$$
Z_1 \;=\; \frac{R_g^2}{Z_2}
$$

(11.23)

Diese Beziehung führt auf eine interessante Anwendung des Gyrators: Schließt man nämlich auf der einen Seite einen Kondensator mit der Kapazität $C_2$ an, misst man auf der anderen Seite die Impedanz:

$$
Z_1 \;=\; R_g^2 \cdot j\omega C_2
$$

Das ist aber nichts anderes als die Impedanz einer Induktivität:

$$
L_1 \;=\; R_g^2 C_2
$$

(11.24)

Die Bedeutung des Gyrators liegt darin, dass man mit ihm große verlustarme Induktivitäten erzeugen kann. Die entsprechende Schaltung ist in Abb. 11.36 dargestellt. Die beiden freien Anschlüsse des Gyrators verhalten sich nach Gl. (11.24) so, als ob zwischen ihnen eine Induktivität $L_1 = R_g^2 C_2$ läge. Mit $C_2 = 1\ \mu \mathrm{F}$ und $R_g = 10\,\mathrm{k}\Omega$ ergibt sich $L_1 = 100\,\mathrm{H}$.

Schaltet man zu der Induktivität $L_1$ einen Kondensator $C_1$ parallel, erhält man einen Parallelschwingkreis. Damit lassen sich „L“-C-Filter hoher Güte aufbauen. Diese Möglichkeit ist in Abb. 11.37 dargestellt. Die simulierte Induktivität ergibt zusammen mit dem RC-Glied am Tor 1 einen Schwingkreis mit der Resonanzfrequenz

$$
f_r \;=\; \frac{1}{2\pi\sqrt{LC}}
\;=\; \frac{1}{2\pi\,R_g\sqrt{C_1 C_2}}
\;\overset{C_1=C_2=C}{=}\;
\frac{1}{2\pi\,R_g C}
$$

und der Güte $Q = R_1/R$. Wenn man an der Basis von $T_1$ ein Eingangssignal anschließt, wird die Schaltung zu einem kombinierten Bandpass- Tiefpassfilter, das in Kapitel 12.12.6 auf S. 853 genauer beschrieben wird.

## 11.6.2 Transformation von Vierpolen

Mit Gyratoren kann man nicht nur Zweipole, sondern auch Vierpole transformieren. Dazu schließt man den zu transformierenden Vierpol wie in Abb. 11.38 zwischen zwei Gyratoren mit gleichen Gyrationswiderständen an. Zwischen den äußeren Toren tritt dann der duale Vierpol auf. Zur Herleitung der Transformationsgleichungen bildet man das Produkt der Kettenmatrizen. Der zu transformierende Vierpol besitze die Vierpol-Gleichungen:

$$
\begin{bmatrix}
U_2\\
I_2
\end{bmatrix}
=
\underbrace{
\begin{bmatrix}
A_{11} & A_{12}\\
A_{21} & A_{22}
\end{bmatrix}
}_{A}
\begin{bmatrix}
U_3\\
I_3
\end{bmatrix}
$$
<!-- page-import:0822:end -->
