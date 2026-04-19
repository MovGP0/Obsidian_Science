# Subtractors

<!-- page-import:0777:start -->
740  10. Analogrechenschaltungen

**Abb. 10.2.**  
Subtrahierer mit Addierschaltung

*Ausgangsspannung:*  
$U_a = A_D\,(U_2 - U_1)$

*Koeffizientenbedingung:*  
$A_N = A_P = A_D$

## 10.2 Subtrahierer

### 10.2.1 Rückführung auf die Addition

Eine Subtraktion lässt sich auf eine Addition zurückführen, indem man das zu subtrahierende Signal invertiert. Die entstehende Schaltung ist in Abb. 10.2 dargestellt. Der Operationsverstärker OV 1 invertiert die Eingangsspannung $U_2$. Damit erhalten wir die Ausgangsspannung:

$$
U_a = A_P U_2 - A_N U_1
$$

(10.1)

Eine reine Differenzbildung gemäß $U_a = A_D (U_2 - U_1)$ ergibt sich, wenn man die beiden Verstärkungsfaktoren $A_P$ und $A_N$ gleich der gewünschten Differenzverstärkung $A_D$ macht. Die Abweichung von der idealen Differenzbildung wird durch die Gleichtaktunterdrückung $G = A_D/A_{Gl}$ charakterisiert. Zu ihrer Berechnung setzen wir

$$
U_2 = U_{Gl} + \frac{1}{2} U_D
$$

und

$$
U_1 = U_{Gl} - \frac{1}{2} U_D
$$

in Gl. (10.1) ein und erhalten:

$$
U_a = \underbrace{(A_P - A_N)}_{A_{Gl}} U_{Gl} + \frac{1}{2}\underbrace{(A_P + A_N)}_{A_D} U_D
$$

(10.3)

Darin ist $U_{Gl}$ die Gleichtaktspannung und $U_D$ die Differenzspannung.

Aus Gl. (10.3) ergibt sich die Gleichtaktunterdrückung zu:

$$
G = \frac{A_D}{A_{Gl}} = \frac{1}{2}\cdot\frac{A_P + A_N}{A_P - A_N}
$$

(10.4)

Nun wollen wir annehmen, dass die Koeffizientenbedingung annähernd erfüllt ist. Es soll also gelten:

$$
A_N = A - \frac{1}{2}\Delta A
$$

$$
A_P = A + \frac{1}{2}\Delta A
$$

Einsetzen in Gl. (10.4) liefert das Ergebnis:

$$
G = \frac{A}{\Delta A}
$$

(10.5)

Die Gleichtaktunterdrückung ist also gleich dem Kehrwert der relativen Paarungstoleranz der beiden Verstärkungen.
<!-- page-import:0777:end -->

<!-- page-import:0778:start -->
10.2 Subtrahierer 741

**Abb. 10.3.**  
Subtrahierer mit einem Operationsverstärker

*Ausgangsspannung:* $U_a=\alpha(U_2-U_1)$

*Koeffizientenbedingung:* $\alpha_N=\alpha_P=\alpha$

## 10.2.2 Subtrahierer mit einem Operationsverstärker

Zur Berechnung der Ausgangsspannung des Subtrahierers in Abb. 10.3 ziehen wir den Überlagerungssatz heran. Danach gilt:

$$
U_a=k_1U_1+k_2U_2
$$

Für $U_2=0$ arbeitet die Schaltung als Umkehrverstärker mit $U_a=-\alpha_NU_1$. Daraus folgt $k_1=-\alpha_N$. Für $U_1=0$ arbeitet die Schaltung als Elektrometerverstärker mit vorgeschaltetem Spannungsteiler. Das Potential

$$
V_P=\frac{R_P}{R_P+R_P/\alpha_P}U_2
$$

wird demnach mit dem Faktor $(1+\alpha_N)$ verstärkt. Es wird also in diesem Fall:

$$
U_a=\frac{\alpha_P}{1+\alpha_P}(1+\alpha_N)U_2
$$

Wenn die beiden Widerstandsverhältnisse gleich macht, d.h. $\alpha_N=\alpha_P=\alpha$, folgt daraus die Ausgangsspannung

$$
U_a=\alpha(U_2-U_1)
$$

Wenn das Verhältnis der Widerstände am P- und N-Eingang nicht genau gleich $\alpha$ ist, bildet die Schaltung nicht exakt die Differenz der Eingangsspannungen, sondern den Ausdruck:

$$
U_a=\frac{1+\alpha_N}{1+\alpha_P}\alpha_PU_2-\alpha_NU_1
$$

Zur Berechnung der Gleichtaktunterdrückung verwenden wir wieder den Ansatz Gl. (10.2) und erhalten:

$$
G=\frac{A_D}{A_{Gl}}=\frac{1}{2}\cdot\frac{(1+\alpha_N)\alpha_P+(1+\alpha_P)\alpha_N}{(1+\alpha_N)\alpha_P-(1+\alpha_P)\alpha_N}
$$

Bei annähernd erfüllter Koeffizientenbedingung, d.h. $\alpha_N=\alpha-\frac{1}{2}\Delta\alpha$ und $\alpha_P=\alpha+\frac{1}{2}\Delta\alpha$ folgt daraus unter Vernachlässigung von Termen höherer Ordnung:

$$
G\approx(1+\alpha)\frac{\alpha}{\Delta\alpha}
$$

(10.6)

Bei konstantem $\alpha$ ist demnach die Gleichtaktunterdrückung umgekehrt proportional zur Toleranz der Widerstandsverhältnisse. Sind die beiden Widerstandsverhältnisse gleich, wird $G=\infty$; dies gilt jedoch nur beim idealen Operationsverstärker. Wünscht man eine besonders hohe Gleichtaktunterdrückung, kann man $R_P$ geringfügig variieren und damit $\Delta\alpha$ so einstellen, dass die endliche Gleichtaktunterdrückung des realen Operationsverstärkers kompensiert wird.
<!-- page-import:0778:end -->

<!-- page-import:0779:start -->
742  10. Analogrechenschaltungen

**Abb. 10.4.**  
Mehrfach-Subtrahierer

Ausgangsspannung: $U_a = \sum_{i=1}^{n} \alpha_i' U_i' - \sum_{i=1}^{m} \alpha_i U_i$

Koeffizientenbedingung: $\sum_{i=1}^{n} \alpha_i' = \sum_{i=1}^{m} \alpha_i$

Aus Gl. (10.6) ergibt sich außerdem, dass die Gleichtaktunterdrückung bei gegebener Widerstandstoleranz $\Delta \alpha / \alpha$ annähernd proportional zur eingestellten Differenzverstärkung $A_D = \alpha$ ist. Dies ist ein entscheidender Vorteil gegenüber der vorhergehenden Schaltung.

Ein Zahlenbeispiel soll die Verhältnisse verdeutlichen: Zwei Spannungen von ca. 10 V sollen subtrahiert werden. Ihre Differenz beträgt maximal 100 mV. Dieser Wert soll am Ausgang des Subtrahierers auf 5 V verstärkt erscheinen, bei einer Genauigkeit von 1%. Die Differenzverstärkung muss also $A_D = 50$ betragen. Der Absolutfehler am Ausgang muss kleiner als $5\,\mathrm{V} \cdot 1\% = 50\,\mathrm{mV}$ sein. Nun nehmen wir den günstigen Fall an, dass die Gleichtaktverstärkung die einzige Fehlerquelle darstellt. Damit ergibt sich die Forderung:

$$
A_{Gl} \leq \frac{50\,\mathrm{mV}}{10\,\mathrm{V}} = 5 \cdot 10^{-3}
$$

d.h.

$$
G \geq \frac{50}{5 \cdot 10^{-3}} = 10^4 \hat{=} 80\,\mathrm{dB}
$$

Nach Gl. (10.6) lässt sich diese Forderung bei dem Subtrahierer in Abb. 10.3 mit einer Paarungstoleranz von $\Delta \alpha / \alpha = 0{,}5\%$ erfüllen. Bei der Schaltung in Abb. 10.2 hingegen ist nach Gl. (10.5) eine Paarungstoleranz von 0,01% erforderlich!

In Abb. 10.4 ist eine Erweiterung des Subtrahierers für beliebig viele Additions- und Subtraktionseingänge dargestellt. Voraussetzung für die richtige Funktionsweise ist, dass die angegebene Koeffizientenbedingung erfüllt ist.

Ist dies nach Vorgabe der Koeffizienten noch nicht der Fall, kann man mit dem noch fehlenden Koeffizienten die Spannung 0 addieren bzw. subtrahieren.

Zur Herleitung der angegebenen Beziehung wenden wir die Knotenregel auf den N-Eingang an:

$$
\sum_{i=1}^{m} \frac{U_i - V_N}{\left(\frac{R_N}{\alpha_i}\right)} + \frac{U_a - V_N}{R_N} = 0
$$

Daraus folgt:

$$
\sum_{i=1}^{m} \alpha_i U_i - V_N \left[\sum_{i=1}^{m} \alpha_i + 1\right] + U_a = 0
$$

Ganz analog erhält man für den P-Eingang:

$$
\sum_{i=1}^{n} \alpha_i' U_i' - V_P \left[\sum_{i=1}^{n} \alpha_i' + 1\right] = 0
$$
<!-- page-import:0779:end -->
