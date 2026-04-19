# Generation of the Reference Voltage

<!-- page-import:0980:start -->
16.4 Erzeugung der Referenzspannung 943

$U_a=-\frac{R_2}{R_1}\,U_{ref1}\quad,\quad I_{a,\max}=\frac{R_4}{R_5R_3}\,U_{ref2}$

**Abb. 16.25.** Labornetzgerät mit frei einstellbarer Ausgangsspannung und Strombegrenzung

In vielen Fällen führt die hier verwendete Strommessung in der Masseleitung der Leistungsstromquelle zu einer Fülle von Einschränkungen beim Schaltungsentwurf. Um diese Probleme zu beseitigen, kann man den Strom am Pluspol der Leistungsspannungsquelle messen. Dazu schaltet man den Strommesswiderstand in die Plusleitung. Für den Stromregler ist jedoch ein auf das Massepotential bezogener Strommesswert erforderlich. Dazu könnte man im Prinzip den Spannungsabfall mit einem Subtrahierer auf das Massepotential übertragen. Viel einfacher ist es jedoch, spezielle integrierte Strommesser einzusetzen.

In Netzgeräten, deren Ausgangsspannung bis auf Null regelbar ist, können besonders hohe Verlustleistungen auftreten. Um die maximale Ausgangsspannung $U_{a,\max}$ erreichen zu können, muss die unstabilisierte Spannung $U_L$ größer als $U_{a,\max}$ sein. Die maximale Verlustleistung in $T_1$ tritt dann auf, wenn man bei kleinen Ausgangsspannungen den maximalen Ausgangsstrom $I_{a,\max}$ fließen lässt. Sie beträgt dann ungefähr $U_{a,\max}\cdot I_{a,\max}$, ist also genauso groß wie die maximal erhältliche Ausgangsleistung. Aus diesem Grund bevorzugt man bei größeren Leistungen Schaltregler in der Endstufe, weil bei ihnen die Verlustleistung auch bei großem Spannungsabfall klein bleibt.

## 16.4 Erzeugung der Referenzspannung

Jeder Spannungsregler und AD- oder DA-Umsetzer benötigt eine Referenzspannungsquelle. Im Prinzip sind die Schaltungen zu Erzeugung einer Referenzspannung auch lineare Spannungsregler; hier steht aber nicht der Wirkungsgrad oder der maximale Ausgangsstrom eine Rolle sondern die Genauigkeit und Konstanz der Ausgangsspannung.

### 16.4.1 Referenzspannungsquellen mit Dioden

Die einfachste Methode zur Erzeugung einer Referenzspannung besteht darin, wie in Abb. 16.26 die unstabilisierte Eingangsspannung über einen Vorwiderstand auf eine Z-Diode zu geben. Die Ausgangsspannung ist dann gleich der Z-Spannung. Bei den niedrigen Betriebsspannungen, die man heutzutage verwendet, haben Z-Dioden ihre Bedeutung verloren, da sie erst ab 6 V brauchbare Daten besitzen. Zur Stabilisierung kleiner Spannun-
<!-- page-import:0980:end -->

<!-- page-import:0982:start -->
16.4 Erzeugung der Referenzspannung 945

**Abb. 16.30.**  
Erzeugung eines positiven Temperaturkoeffizienten

**Abb. 16.31.**  
Übertragungskennlinien der beiden Transistoren

Eine wichtiges Merkmal für die Güte der Stabilisierung ist die relative Verringerung der Eingangsspannungsschwankungen, die durch den Stabilisierungsfaktor

$$
S \;=\; \frac{dU_e/U_e}{dU_a/U_a}
\;=\; \frac{U_a}{U_e}\,\frac{dU_e}{dU_a}
\;=\; \frac{U_a}{U_e}\,G
\;\approx\; \frac{U_a R}{U_e\,r_Z}
$$

beschrieben wird. Um hohe Werte zu erreichen, sollte $R$ möglichst groß sein und trotzdem ein ausreichend großer Strom fließen. Diese widersprüchlichen Forderungen lassen sich nur erfüllen, wenn man den Vorwiderstand wie in Abb. 16.29 durch eine Konstantstromquelle ersetzt. Auf diese Weise kann man sehr hohe Stabilisierungsfaktoren erreichen.

Schwankungen der Referenzspannung können auch durch Temperaturänderungen entstehen. Der Temperaturkoeffizient der Z-Spannung beträgt höheren Z-Spannungen $+1\,^0/_{00}/\mathrm{K}$. Die Durchlassspannung einer Diode sinkt um $-1{,}7\,\mathrm{mV}/\mathrm{K}$; das entspricht einem Temperaturkoeffizienten von $-3\,^0/_{00}/\mathrm{K}$.

## 16.4.2 Bandabstands-Referenz

Die Idee der Bandabstands-Referenzen besteht darin, den negativen Temperaturkoeffizienten von Dioden mit einer Spannung zu kompensieren, die einen entgegengesetzten positiven Temperaturkoeffizienten besitzt. Wir werden zeigen, dass dieses Prinzip dann optimal funktioniert, wenn beide Spannungen zusammen dem Bandabstand von Silizium $U_{BG}=1{,}2\,\mathrm{V}$ entsprechen. Deshalb heißen die Referenzspannungsquellen, die nach diesem Prinzip arbeiten Bandabstands-Referenzen. Die dafür erforderliche Spannung mit positivem Temperaturkoeffizienten lässt sich mit zwei Transistoren erzeugen, die man mit verschiedenen Stromdichten betreibt. Dazu kann man entweder zwei gleiche Transistoren mit verschiedenen Strömen oder zwei Transistoren mit verschiedenen Flächen mit gleichen Strömen betreiben. Davon wird in der Schaltung in Abb. 16.30 Gebrauch gemacht. Hier hat der Transistor $T_1$ eine größere z.B. die $n=10$-fache Fläche $A_1=nA_2$. Deswegen steigt sein Kollektorstrom schon bei kleineren Spannungen an, verläuft aber dann wegen der Stromgegenkopplung über $R_1$ flacher; dies zeigen auch die nebenstehenden Übertragungskennlinien. Die Ausgangsspannung des Operationsverstärkers stellt sich so ein, dass beide Kollektorströme gleich groß werden.

Zur Berechnung der Spannung $\Delta U_{BE}$ geht man von den Übertragungskennlinien

$$
U_{BE1} = U_T \ln \frac{I_{C1}}{n I_{S2}},
\qquad
U_{BE2} = U_T \ln \frac{I_{C2}}{I_{S2}}
$$
<!-- page-import:0982:end -->
