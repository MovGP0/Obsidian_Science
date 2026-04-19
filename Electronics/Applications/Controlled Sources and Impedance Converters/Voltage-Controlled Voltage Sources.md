# Voltage-Controlled Voltage Sources

<!-- page-import:0804:start -->
# Kapitel 11:
# Gesteuerte Quellen und Impedanzkonverter

In der linearen Netzwerksynthese verwendet man neben den passiven Bauelementen idealisierte aktive Bauelemente in Form von gesteuerten Strom- und Spannungsquellen. Es gibt vier verschiedene Typen von idealen Quellen, die in Abb. 11.1 gegenübergestellt sind. Sie unterscheiden im Eingangs- und Ausgangssignal. Die spannungsgesteuerten Quellen werden stromlos gesteuert, die stromgesteuerten werden spannungslos gesteuert. Ein Spannungsausgang liefert eine definierte Ausgangsspannung, eine Stromausgang liefert einen definierten Ausgangsstrom. Die deutschen Namen sind jeweils angegeben zusammen mit den international üblichen Bezeichnungen. Die eingetragenen Übertragungsgleichungen gelten für die hier dargestellten idealen Quellen. Eine ganz ähnliche Übersicht haben wir bereits bei den Operationsverstärkern in Kapitel 5 kennen gelernt, die man ebenfalls gemäß spannungs- und stromgesteuerten Ein- und Ausgängen klassifiziert.

Zusätzlich werden in diesem Kapitel idealisierte Transformations-Schaltungen wie z.B. NIC, Gyrator und Zirkulator behandelt. In den folgenden Abschnitten wollen wir die wichtigsten Realisierungsmöglichkeiten beschreiben.

## 11.1 Spannungsgesteuerte Spannungsquellen

Eine spannungsgesteuerte Spannungsquelle ist dadurch gekennzeichnet, dass die Ausgangsspannung $U_2$ proportional zur Eingangsspannung $U_1$ ist. Es handelt sich also um nichts weiter als einen Spannungsverstärker. Als Idealisierung verlangt man, dass die Ausgangsspannung vom Ausgangsstrom unabhängig und der Eingangsstrom Null ist. Damit

|  | Spannungs-Ausgang | Strom-Ausgang |
|---|---|---|
| Spannungs-Eingang | Spannungsgesteuerte Spannungsquelle

$I_1 = 0$

$AU_1$

$U_2 = AU_1$

Voltage Controlled Voltage Source VCVS

$A$ = Spannungsverstärkung | Spannungsgesteuerte Stromquelle

$I_1 = 0$

$SU_1$

$I_2 = SU_1$

Voltage Controlled Current Source VCCS

$S$ = Steilheit |
| Strom-Eingang | Stromgesteuerte Spannungsquelle

$I_1$

$ZI_1$

$U_2 = ZI_1$

Current Controlled Voltage Source CCVS

$Z$ = Transimpedanz | Stromgesteuerte Stromquelle

$I_1$

$kI_1$

$I_2 = kI_1$

Current Controlled Current Source CCCS

$k$ = Stromverstärkung |

**Abb. 11.1.** Gegenüberstellung der gesteuerten Quellen bei idealem Verhalten

© Springer-Verlag GmbH Deutschland, ein Teil von Springer Nature 2019  
U. Tietze et al., *Halbleiter-Schaltungstechnik*
<!-- page-import:0804:end -->

<!-- page-import:0805:start -->
768  11. Gesteuerte Quellen und Impedanzkonverter

**Abb. 11.2.**  
Modell einer realen spannungsgesteuerten Spannungsquelle

lauten die Übertragungsgleichungen:

$$
I_1 = 0 \cdot U_1 + 0 \cdot I_2 = 0,
$$

$$
U_2 = A_v U_1 + 0 \cdot I_2 = A_v U_1
$$

In der Praxis lässt sich die ideale Quelle nur näherungsweise realisieren. Unter Berücksichtigung der meist gut erfüllbaren Rückwirkungsfreiheit ergibt sich das Ersatzschaltbild in Abb. 11.2 für eine reale Quelle mit den Übertragungsgleichungen:

$$
I_1 = \frac{1}{r_e} U_1 + 0 \cdot I_2
$$

$$
U_2 = A_v U_1 - r_a I_2
\qquad\qquad (11.1)
$$

Die eingezeichnete innere Spannungsquelle ist dabei als ideal anzusehen. $r_e$ ist der Eingangswiderstand, $r_a$ der Ausgangswiderstand.

### 11.1.1 Ideale Spannungsquelle

Spannungsgesteuerte Spannungsquellen mit niedrigem Ausgangswiderstand und definiert einstellbarer Verstärkung haben wir bereits im Kapitel 5 in Form des Umkehrverstärkers und des Elektrometerverstärkers kennen gelernt. Sie sind in Abb. 11.3/11.4 noch einmal dargestellt. Gemäß (5.64) auf S. 579 erreicht man leicht Ausgangswiderstände, die weit unter 1 $\Omega$ liegen und kommt damit dem idealen Verhalten ziemlich nahe. Allerdings ist zu beachten, dass die Ausgangsimpedanz induktiven Charakter besitzt, also mit steigender Frequenz größer wird, da die Schleifenverstärkung abnimmt. Wie stark der Ausgangswiderstand mit der Frequenz zunimmt ist in Abb. 11.5 dargestellt. Wenn die Schleifenverstärkung um 5 Zehnerpotenzen sinkt, steigt der Ausgangswiderstand um diesen Faktor.

*Ideale Übertragungsfunktion:*  
$$
U_2 = -\frac{R_2}{R_1} U_1
$$

*Eingangsimpedanz:*  
$$
Z_e = R_1
$$

*Ausgangsimpedanz:*  
$$
Z_a = \frac{r_a}{g}
$$

**Abb. 11.3.**  
Umkehrverstärker als spannungsgesteuerte Spannungsquelle

*Ideale Übertragungsfunktion:*  
$$
U_2 = \left(1 + \frac{R_2}{R_1}\right) U_1
$$

*Eingangsimpedanz:*  
$$
Z_e = r_{Gl} \parallel \frac{1}{sC}
$$

*Ausgangsimpedanz:*  
$$
Z_a = \frac{r_a}{g}
$$

**Abb. 11.4.**  
Elektrometerverstärker als spannungsgesteuerte Spannungsquelle
<!-- page-import:0805:end -->

<!-- page-import:0806:start -->
11.1 Spannungsgesteuerte Spannungsquellen 769

**Abb. 11.5.**  
Zunahme des Ausgangswiderstands durch Abnahme der Schleifenverstärkung bei einem 741-OPV für volle Gegenkopplung

Entgegenwirken kann man diesem Effekt dadurch, dass man am Ausgang einen Kondensator parallelschaltet. Diese Methode ist bei Spannungsreglern üblich. Es setzt aber voraus, dass man lediglich Gleichspannungen benötigt. Außerdem muss die Frequenzgangkorrektur auf diese Betriebsart angepasst werden damit der Operationsverstärker bei kapazitiver Last nicht schwingt.

### 11.1.2 Spannungsquelle mit negativem Ausgangswiderstand

Mitunter benötigt man Spannungsquellen, deren Spannung nicht nur unabhängig vom Laststrom ist, sondern mit zunehmendem Laststrom ansteigt. Das kann z.B. dazu dienen, um einen unerwünschten Widerstand im Verbraucher oder seinen Zuleitungen zu kompensieren. Um eine derartige Spannungsquelle mit negativem Ausgangswiderstand zu realisieren, muss man den Ausgangsstrom messen und die wirksame Eingangsspannung mit zunehmendem Strom erhöhen. Zur Strommessung dient der Widerstand $R_1$ in Abb. 11.6; der Widerstand $R_2$ überträgt die mit steigendem Strom zunehmende Spannung $U_a$ an den Eingang. Zur Berechnung der Ausgangsspannung kann man der Schaltung die Beziehungen

$$
\frac{U_1-U_2}{R_3}+\frac{U_a-U_2}{R_2}=0
\qquad \text{und} \qquad
U_a=U_2+R_1I_2
$$

entnehmen. Daraus erhält man die Kennlinie

$$
U_2=U_1+\frac{R_3}{R_2}R_1I_2
$$

(11.2)

Ausgangsstrom:  
$U_2 = U_1 - r_a\,I_2 = 1\,\mathrm{V} + 100\,\Omega\,I_2$

Ausgangswiderstand:  
$r_a = -R_1R_3/R_2 = -100\,\Omega$

**Abb. 11.6.** Spannungsgesteuerte Spannungsquelle mit negativem Ausgangswiderstand. Das Diagramm zeigt die Kennlinie der Quelle für das Dimensionierungsbeispiel. Ein Kennzeichen des negativen Ausgangswiderstandes ist, dass die Ausgangsspannung mit zunehmendem Ausgangsstrom ansteigt.
<!-- page-import:0806:end -->

<!-- page-import:0809:start -->
772

# 11. Gesteuerte Quellen und Impedanzkonverter

**Abb. 11.12.**  
Abnahme des Ausgangswiderstands durch Abnahme der Schleifenverstärkung bei einem 741-OPV mit $R_1 = 100\,\Omega$ als Beispiel. Darüber: Ausgangswiderstand mit zusätzlichem Fet.

Differenzverstärkung $A_D$ des Operationsverstärkers erhält man für den Ausgangswiderstand nur endliche Werte, weil die Potentialdifferenz $U_D = V_P - V_N$ nicht exakt Null bleibt. Zur Berechnung des Ausgangswiderstandes entnehmen wir der Abb. 11.10 die Beziehungen

$$
I_1 = I_2 = \frac{U_1 - V_N}{R_1}
\qquad
V_N = -\frac{V_a}{A_D}
\qquad
U_2 = V_N - V_a
$$

und erhalten:

$$
I_2 = \frac{U_1}{R_1} - \frac{U_2}{R_1(1 + A_D)}
\approx
\frac{U_1}{R_1} - \frac{U_2}{A_D R_1}
$$

Daraus ergibt sich der Ausgangswiderstand zu:

$$
r_a = -\frac{\partial U_2}{\partial I_2} = A_D R_1
\qquad\qquad (11.6)
$$

Er ist also proportional zur Differenzverstärkung des Operationsverstärkers.

Da die Differenzverstärkung eines frequenzkorrigierten Operationsverstärkers eine niedrige Grenzfrequenz besitzt (z.B. $f_{gA} \approx 10\,\text{Hz}$ beim Typ 741), muss man bereits bei tiefen Frequenzen berücksichtigen, dass $A_D$ komplex wird. In komplexer Schreibweise lautet die Gl. (11.6):

$$
Z_a = A_D R_1 = \frac{A_D}{1 + j\,\frac{\omega}{\omega_{gA}}} R_1
\qquad\qquad (11.7)
$$

Diese Ausgangsimpedanz lässt sich als Parallelschaltung eines ohmschen Widerstandes $R_a$ und einer Kapazität $C_a$ darstellen, wie folgende Umformung der Gl. (11.7) zeigt:

$$
Z_a =
\frac{1}{\frac{1}{A_D R_1} + \frac{s}{A_D R_1 \omega_{gA}}}
=
R_a \,\|\, \frac{1}{s\,C_a}
\qquad\qquad (11.8)
$$

mit $R_a = A_D R_1$, $C_a = \frac{1}{A_D R_1 \omega_{gA}} = \frac{1}{2\pi R_1 f_T}$

Bei einem Operationsverstärker der 741-Klasse mit $A_D = 10^5$ und $f_T = 1\,\text{MHz}$ erhält man für $R_1 = 100\,\Omega$:

$$
R_a = 10\,\text{M}\Omega,\qquad C_a = 1{,}6\,\text{nF}
$$

Wie stark der Ausgangswiderstand mit der Frequenz abnimmt ist in Abb. 11.12 dargestellt. Wenn die Schleifenverstärkung um 5 Zehnerpotenzen sinkt, sinkt auch der Ausgangswiderstand um diesen Faktor. Die Situation lässt sich nennenswert verbessern, wenn
<!-- page-import:0809:end -->

<!-- page-import:0819:start -->
782  11. Gesteuerte Quellen und Impedanzkonverter

**Abb. 11.30.**  
Beschalteter INIC

**Abb. 11.31.**  
Erzeugung negativer Widerstände

Negativer Widerstand: $\dfrac{U_1}{I_1}=-R_2$

Bei der Herleitung haben wir stillschweigend vorausgesetzt, dass die Schaltung stabil ist. Da sie aber gleichzeitig mit- und gegengekoppelt ist, muss man getrennt untersuchen, ob diese Voraussetzung erfüllt ist. Dazu berechnen wir, welcher Bruchteil der Ausgangsspannung auf den P-Eingang bzw. den N-Eingang gekoppelt wird. Abb. 11.30 zeigt den allgemein beschalteten INIC. $R_1$ und $R_2$ sind die Innenwiderstände der angeschlossenen Schaltungen.

Mitgekoppelt wird die Spannung:
$$
V_P=V_a\frac{R_1}{R_1+R}
$$

Gegengekoppelt wird die Spannung:
$$
V_N=V_a\frac{R_2}{R_2+R}
$$

Die Schaltung ist stabil, wenn die mitgekoppelte Spannung kleiner ist als die gegengekoppelte, wenn also gilt $R_1<R_2$.

Als Anwendung des INIC ist in Abb. 11.31 eine Schaltung zur Erzeugung negativer ohmscher Widerstände dargestellt. Legt man am Tor 1 eine positive Spannung an, wird nach Gl. (11.19) auch $U_2=U_1$ positiv und damit auch $I_2$. Nach Gl. (11.19) ergibt sich:
$$
I_1=-I_2=-\frac{U_1}{R_2}
$$

Es fließt also ein negativer Strom in das Tor 1 hinein, obwohl wir eine positive Spannung angelegt haben. Das Tor 1 verhält sich demnach wie ein negativer Widerstand der Größe:

Ausgangsspannung:
$$
U_2=U_0+I_2R_1
$$

Ausgangswiderstand:
$$
r_a=-\frac{dU_2}{dI_2}=-R_1
$$

**Abb. 11.32.** Spannungsquelle mit negativem Ausgangswiderstand
<!-- page-import:0819:end -->

<!-- page-import:0823:start -->
786 11. Gesteuerte Quellen und Impedanzkonverter

**Abb. 11.38.** Dualtransformation von Vierpolen

Aus Gl. (11.21) erhalten wir für die Gyratoren die Beziehungen:

$$
\begin{bmatrix}
U_1\\
I_1
\end{bmatrix}
=
\underbrace{\begin{bmatrix}
0 & R_g\\
1/R_g & 0
\end{bmatrix}}_{A_g}
\begin{bmatrix}
U_2\\
I_2
\end{bmatrix}
,\qquad
\begin{bmatrix}
U_3\\
I_3
\end{bmatrix}
=
\underbrace{\begin{bmatrix}
0 & R_g\\
1/R_g & 0
\end{bmatrix}}_{A_g}
\begin{bmatrix}
U_4\\
I_4
\end{bmatrix}
$$

Für die Kettenmatrix $\overline{A}$ des resultierenden Vierpols ergibt sich damit:

$$
\overline{A} = A_g\,A\,A_g =
\begin{bmatrix}
A_{22} & A_{21}R_g^2\\
A_{12}/R_g^2 & A_{11}
\end{bmatrix}
\qquad (11.25)
$$

Das ist die Matrix des dualtransformierten inneren Vierpols; die Übertragungsgleichungen der ganzen Anordnung in Abb. 11.38 lauten daher:

$$
\begin{bmatrix}
U_1\\
I_1
\end{bmatrix}
=
\underbrace{\begin{bmatrix}
A_{22} & A_{21}R_g^2\\
A_{12}/R_g^2 & A_{11}
\end{bmatrix}}_{\overline{A}}
\begin{bmatrix}
U_4\\
I_4
\end{bmatrix}
$$

Abbildung 11.39 zeigt als Beispiel, wie sich eine Schaltung aus drei Induktivitäten durch eine duale Schaltung aus drei Kapazitäten ersetzen lässt. Schaltet man parallel zu $L_1$ und $L_2$ extern je einen Kondensator, erhält man ein induktiv gekoppeltes Bandfilter, das ausschließlich aus Kondensatoren aufgebaut ist. Schließt man $C_a$ und $C_b$ kurz, erhält man eine erdfreie Induktivität $L_3$.

## 11.7 Der Zirkulator

Ein Zirkulator ist eine Schaltung mit drei oder mehr Anschlusspaaren, die als Tore bezeichnet werden. Das Schaltsymbol ist in Abb. 11.40 dargestellt. Kennzeichnend ist, dass ein Signal, das auf ein Tor gegeben wird, in Pfeilrichtung weitergeleitet wird. Man kann drei Fälle unterscheiden in Abhängigkeit von dem an einem Tor angeschlossenen Widerstand:

- An einem offenen Tor wird das Signal unverändert weitergeleitet
- An einem kurzgeschlossenen Tor wird das wird das Signal invertiert weitergeleitet
- An einem mit dem Widerstand $R = R_g$ abgeschlossenen Tor tritt das Signal in Originalgröße auf und wird dort absorbiert. Es wird dann nicht zum nächsten Tor weitergeleitet.

*Transformationsgleichungen:* $L_1 = R_g^2 C_a \quad,\quad L_2 = R_g^2 C_b \quad,\quad L_3 = R_g^2 C_c$

**Abb. 11.39.** Beispiel für die Dualtransformation
<!-- page-import:0823:end -->

<!-- page-import:0825:start -->
788  11. Gesteuerte Quellen und Impedanzkonverter

Abb. 11.43.  
Einsatz eines Zirkulators als Gabelschaltung im Telefon

Als Beispiel für die Anwendung des Zirkulators ist in Abb. 11.43 eine aktive Telefon-Gabelschaltung dargestellt. Sie besteht aus einem Zirkulator mit drei Toren, die alle mit dem Zirkulationswiderstand $R_g$ abgeschlossen sind. Das vom Mikrofon kommende Signal wird zur Vermittlung geleitet und gelangt nicht in den Hörer. Das von der Vermittlung kommende Signal wird auf den Hörer übertragen und gelangt nicht auf das Mikrofon. Für die richtige Funktionsweise eines ist es wichtig, dass der Innenwiderstand der angeschlossenen Signalquellen oder Verbraucher mit dem charakteristischen Widerstand $R_g$ des Zirkulators übereinstimmen.
<!-- page-import:0825:end -->
