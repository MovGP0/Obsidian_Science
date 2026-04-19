# Adders

<!-- page-import:0776:start -->
# Kapitel 10:
# Analogrechenschaltungen

Mit Mikrocomputern und Signalprozessoren hat man heute die Möglichkeit, mathematische Operationen nahezu mit beliebiger Genauigkeit durchzuführen. Die zu verarbeitenden Größen liegen jedoch häufig als kontinuierliche Signale vor, z.B. in Form einer zur Messgröße analogen elektrischen Spannung. In diesem Fall benötigt man zusätzlich zum Digitalrechner einen Analog-Digital- und einen Digital-Analog-Umsetzer. Dieser Aufwand lohnt sich jedoch nur dann, wenn die Genauigkeitsforderungen so hoch sind, dass sie sich mit Analogrechenschaltungen nicht erfüllen lassen. Die Grenze liegt größenordnungsmäßig bei 0,1 %.

Im Folgenden werden die wichtigsten Analogrechenschaltungen mit Operationsverstärkern behandelt: die vier Grundrechenarten, Differential- und Integraloperationen sowie die Bildung transzendenter und beliebiger Funktionen. Dabei soll das Prinzip möglichst deutlich werden. Deshalb gehen wir bei den verwendeten Operationsverstärkern zunächst immer von idealen Eigenschaften aus. Die Einschränkungen und Gesichtspunkte bei der Schaltungsdimensionierung, die sich beim Einsatz realer Operationsverstärker ergeben, haben wir ausführlich in Kapitel 5 behandelt. Die entsprechenden Überlegungen gelten sinngemäß auch für die folgenden Schaltungen. Hier wollen wir nur noch auf solche Nebeneffekte eingehen, die bei den einzelnen Schaltungen eine besondere Rolle spielen.

## 10.1 Addierer

Zur Addition mehrerer Spannungen kann man einen als Umkehrverstärker beschalteten Operationsverstärker heranziehen. Man schließt die Eingangsspannungen wie in Abb. 10.1 über Vorwiderstände am N-Eingang an. Da dieser Punkt hier eine virtuelle Masse darstellt, liefert die Anwendung der Knotenregel unmittelbar die angegebene Beziehung für die Ausgangsspannung:

$$
\frac{U_1}{R_1} + \frac{U_2}{R_2} + \cdots + \frac{U_n}{R_n} + \frac{U_a}{R_N} = 0
$$

Man kann den Umkehraddierer auch als Verstärker mit großem Nullpunkt-Einstellungsbereich einsetzen, indem man zur Signalspannung in der beschriebenen Weise eine Gleichspannung addiert.

**Abb. 10.1.**  
Umkehraddierer  
*Ausgangsspannung:*

$$
U_a = -\frac{R_N}{R_1}U_1 - \frac{R_N}{R_2}U_2 - \cdots - \frac{R_N}{R_n}U_n
$$

© Springer-Verlag GmbH Deutschland, ein Teil von Springer Nature 2019  
U. Tietze et al., *Halbleiter-Schaltungstechnik*
<!-- page-import:0776:end -->

<!-- page-import:0787:start -->
750 10. Analogrechenschaltungen

Modell

Hohe Frequenzen

**Abb. 10.14.** Modell eines VV-Operationsverstärkers als Integrator

denn die Verstärkung müsste beim idealen Integrator bei niedrigen Frequenzen unendlich werden. Die parasitäre Kapazität $C_a$ stellt keine Einschränkung dar, da sie parallel zum Integrationskondensator $C$ liegt. Um sie zu berücksichtigen, kann man den externen Integrationskondensator $C$ entsprechend kleiner wählen. Man sieht, dass es aufgrund des Modells keine Begrenzung der Bandbreite zu hohen Frequenzen hin gibt. Aufgrund untergeordneter Effekte gibt es natürlich auch für den CC-Integrator eine obere Grenzfrequenz; sie liegt aber bei sehr hohen Frequenzen.

Im Vergleich dazu sind die Verhältnisse beim VV-Operationsverstärker sehr viel ungünstiger. In Abb. 10.14 ist ein VV-Operationsverstärker, dessen Modell hier eingezeichnet ist, als Integrator beschaltet. Für hohe Frequenzen stellt der Kondensator $C_1$ einen Kurzschluss dar; dann liegt der Ausgangswiderstand $r_a$ auf Nullpotential. Für diesen Fall lässt sich das Modell vereinfachen, wie das Modell für hohe Frequenzen zeigt. Der Integrationskondensator wirkt jetzt als Koppelkondensator und überträgt das Eingangssignal zum Ausgang, anstatt es kurzzuschließen. Die Schaltung arbeitet in diesem Frequenzbereich also lediglich als Spannungsteiler gemäß $U_a = U_e r_a/(r_a + R)$.

In Abb. 10.15 ist der typische Verlauf für beide Ausführungsformen gegenübergestellt. Man erkennt, dass die Verstärkung eines realen VV-Integrators wegen der beschriebenen Probleme bei hohen Frequenzen nicht wie bei einem Integrator erforderlich absinkt, son-

dB

CC-Integrator

VV-Integrator

$f$
Hz

**Abb. 10.15.** Vergleich eines CC-Integrators mit einem VV-Integrator für eine Integrationszeitkonstante von $\tau = 16\,\mu s$
<!-- page-import:0787:end -->

<!-- page-import:0791:start -->
754  10. AnalogeRechenschaltungen

**Abb. 10.21.** Ausgeführte Analogrechenschaltung

Damit wird nach der Kettenregel:

$$
y'=\frac{dy}{dt}\cdot\frac{dt}{dx}=\tau \dot y \quad \text{und} \quad y''=\tau^2 \ddot y
$$

Einsetzen in die Differentialgleichung (10.15) liefert:

$$
\tau^2 \ddot y + k_1 \tau \dot y + k_0 y = f\,(t/\tau)
$$

(10.16)

Im zweiten Schritt löst man die Gleichung nach den nicht abgeleiteten Größen auf:

$$
k_0 y - f\,(t/\tau) = -\tau^2 \ddot y - k_1 \tau \dot y
$$

Im dritten Schritt wird mit $\left(-\frac{1}{\tau}\right)$ durchmultipliziert und integriert:

$$
-\frac{1}{\tau}\int [k_0 y - f\,(t/\tau)]dt = \tau \dot y + k_1 y
$$

(10.17)

Auf der linken Seite entsteht auf diese Weise ein Ausdruck, der sich mit einem einfachen Summationsintegrator bilden lässt. Seine Ausgangsspannung wird als Zustandsvariable $z_n$ bezeichnet. Dabei ist $n$ die Ordnung der Differentialgleichung, hier also gleich 2. Damit ergibt sich:

$$
z_2 = -\frac{1}{\tau}\int [k_0 y - f\,(t/\tau)]dt
$$

(10.18)

Die Ausgangsgröße $y$ wird dabei zunächst einfach als bekannt angenommen. Durch Einsetzen von Gl. (10.18) in Gl. (10.17) ergibt sich:

$$
z_2 = \tau \dot y + k_1 y
$$

(10.19)

Diese Differentialgleichung wird nun genauso behandelt wie Gl. (10.16) Damit erhalten wir:

$$
z_2 - k_1 y = \tau \dot y,
$$

$$
-\frac{1}{\tau}\int [z_2 - k_1 y]dt = -y
$$

(10.20)

Die linke Seite stellt die Zustandsvariable $z_1$ dar:

$$
z_1 = -\frac{1}{\tau}\int [z_2 - k_1 y]dt
$$

(10.21)

Dieser Ausdruck wird mit einem zweiten Summationsintegrator gebildet. Einsetzen in Gl. (10.20) liefert die Gleichung für das Ausgangssignal:

$$
y = -z_1
$$

(10.22)
<!-- page-import:0791:end -->

<!-- page-import:0803:start -->
766  10. Analogrechenschaltungen

ist in den meisten Anwendungsfällen nicht tragbar. Ein besserer Anhaltspunkt ist deshalb diejenige Frequenz, bei der ein Abfall der Ausgangsamplitude um 1% auftritt. Bei einem Tiefpass erster Ordnung ist $f_{1\%} = 0,14\ f_{-3dB}$; das kann zur Abschätzung der 1% Bandbreite dienen, falls sie nicht angegeben ist.
<!-- page-import:0803:end -->
