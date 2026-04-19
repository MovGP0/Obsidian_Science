# Transconductance Amplifier

<!-- page-import:0553:start -->
516 5. Operationsverstärker

a Auftrennen am Ausgang  b Auftrennen am Eingang

**Abb. 5.9.** Zur Veranschaulichung der Schleifenverstärkung

Natürlich muss man auch die Frequenzabhängigkeit der Differenzverstärkung betrachten, weil sie auch die Schleifenverstärkung bestimmt. Der typische Frequenzgang der Differenzverstärkung ist in Abb. 5.8 dargestellt. Sie besitzt bei niedrigen Frequenzen hohe Werte. Oberhalb der 1. Grenzfrequenz sinkt sie um 20 dB/Dekade; der Operationsverstärker verhält sich in diesem Frequenzbereich wie ein Tiefpass 1. Ordnung. Bei der Transitfrequenz ist die Differenzverstärkung auf $|A_D| = 1 \hat{=} 0\,\mathrm{dB}$ abgesunken.$^1$

Aus (5.14) und (5.15) folgt eine nützliche Methode, um die Schleifenverstärkung zu berechnen, wenn $g \gg 1$ ist:

$$
|g| = k_R |A_D| = \frac{|A_D|}{|A|} \quad \Rightarrow \quad \lg |g| = \lg |A_D| - \lg |A|
$$

(5.16)

In der logarithmischen Darstellung in Abb. 5.8 ist dieser Quotient der Abstand der beiden Kurven. Damit die Abweichung vom idealen Verhalten kleiner als 1% bleibt, ist eine Schleifenverstärkung von $g = 100$ erforderlich. Wenn die gegengekoppelte Schaltung eine Verstärkung von $A = 100$ besitzen soll, lässt sich aus (5.16) die erforderliche Differenzverstärkung berechnen: $A_D = gA = 100 \cdot 100 = 10^4$. Hier wird deutlich, warum man bei Operationsverstärkern eine möglichst hohe Differenzverstärkung anstrebt. Man kann vier Verstärkungen unterscheiden:

$A_D$ Differenzverstärkung des Verstärkers, Leerlaufverst. (open loop gain)  
$A$ Verstärkung der gegengekoppelten Schaltung (closed loop gain)  
$g$ Schleifenverstärkung $g = A_D/A$ (loop gain)  
$k_R$ Rückkopplungsfaktor (feedback factor)

Die Schleifenverstärkung lässt sich auch anschaulich deuten. Dazu setzen wir $U_e = 0$ und trennen die Schleife am Eingang der externen Beschaltung auf, wie Abb. 5.9a zeigt. Dann speisen wir an der Schnittstelle ein Testsignal $U_S$ ein und berechnen, wie groß das Signal ist, das am anderen Ende der Trennstelle, also am Verstärker-Ausgang auftritt. Wie man in Abb. 5.7 unmittelbar ablesen kann, ergibt sich:

$$
U_a = -k_R A_D U_S = -g U_S
$$

(5.17)

Das Testsignal wird beim Durchlaufen der aufgetrennten Schleife also mit der Verstärkung $g = k_R A_D$ verstärkt. Man kann die Schleife ebenso am invertierenden Eingang auftrennen

$^1$ Es ist üblich, die Spannungsverstärkung logarithmisch in dB anzugeben: $A\,[\mathrm{dB}] = 20\,\mathrm{dB} \cdot \lg |A|$
<!-- page-import:0553:end -->

<!-- page-import:0632:start -->
5.7 Der Transkonduktanz-Verstärker (VC-OPV) 595

# 5.7 Der Transkonduktanz-Verstärker (VC-OPV)

Transkonduktanzverstärker (Operational Transconductance Amplifier OTA) unterscheiden sich von konventionellen Operationsverstärkern dadurch, dass sie einen hochohmigen Ausgang besitzen; ihr Ausgang hat demnach den Charakter einer Stromquelle, wie wir es in der Übersicht in Abb. 5.3 gezeigt haben. Es handelt sich also um spannungsgesteuerte Stromquellen.

## 5.7.1 Innerer Aufbau

Zur einfachsten Schaltung eines VC-Operationsverstärkers gelangt man, indem man von dem VV-Operationsverstärker in Abb. 5.110b ausgeht und dort einfach den Emitterfolger am Ausgang weglässt. Dann ergibt sich die Schaltung in Abb. 5.110a. Ein Stromausgang stellt das Duale zum Spannungsausgang dar. Deshalb sollte man den Ausgang auch nicht offen lassen; sonst geht die Ausgangsspannung schon bei den kleinsten Eingangssignalen an die Aussteuerungsgrenzen. Das ist beim VV-Operationsverstärker genau so, der wird jedoch immer mit Spannungsgegenkopplung betrieben. Bei Schaltungen mit Stromausgang ist die Stromaussteuerbarkeit von Bedeutung. Sie beträgt bei dem Dimensionierungsbeispiel in Abb. 5.110a $I_{ak}=I_q=\pm 1\,\mathrm{mA}$

Die charakteristische Größe ist hier die Übertragungssteilheit, die Transkonduktanz, deren Größe man am Modell in Abb. 5.112 direkt ablesen kann:

$$
S_D=\frac{I_q}{U_D}=\frac{I_{ak}}{U_D}=\frac{1}{2\,r_S}=\frac{1}{2}\frac{I_0}{U_T}\ \ \overset{I_0=1\,\mathrm{mA}}{=}\ \ \frac{1}{2}\frac{1\,\mathrm{mA}}{25\,\mathrm{mV}}=20\,\frac{\mathrm{mA}}{\mathrm{V}}
$$

Sie ist also proportional zum Ruhestrom $I_0$ in der Schaltung. Wenn man den Ausgang mit einem Widerstand von $R_L=1\,\mathrm{k}\Omega$ abschließt, ergibt sich also hier eine Spannungsverstärkung von $A=S_D\ R_L=20$ bei einer maximalen Ausgangsspannung von $U_a=1\,\mathrm{V}$.

Bei der praktischen Ausführung der Schaltung in Abb. 5.111 nutzt man beide Ausgangsströme des Eingangsdifferenzverstärkers aus, um auch die untere Stromquelle am Ausgang zu steuern. Dadurch erhält man nicht nur die doppelten Ausgangsströme, sondern auch eine stark verbesserte Nullpunktstabilität, da sich hier die Ruheströme am Ausgang bei beliebigen Werten von $I_0$ genau aufheben.

In den meisten Fällen werden die VC-Operationsverstärker ohne Gegenkopplung als spannungsgesteuerte Stromquellen betrieben wie in Abb. 5.112. Deshalb wirken sich

a VC-Operationsverstärker

b VV-Operationsverstärker

**Abb. 5.110.** Einfacher VC-Operationsverstärker mit VV-Operationsverstärker zum Vergleich. Die eingetragenen Spannungen und Ströme sind lediglich Beispiele.
<!-- page-import:0632:end -->

<!-- page-import:0633:start -->
596 5. Operationsverstärker

**Abb. 5.111.** Praktische Ausführung eines VC-Operationsverstärkers bei Nutzung von symmetrischen Signalen. Nach diesem Prinzip arbeitet der CA3280, der aber technologisch veraltet ist. Die Schaltung wird auch als *Operational Transconductance Amplifier (OTA)* bezeichnet.

a Schaltsymbol

b Modell

**Abb. 5.112.** Schaltsymbol und Modell eines VC-Operationsverstärkers.  
Die eingetragenen Werte gelten für $I_0 = 1\ \mathrm{mA}$

Nichtlinearitäten bei der Aussteuerung der Eingangstransistoren in voller Größe auf das Ausgangssignal aus. Dieses Problem lässt sich beseitigen, wenn man die Eingangstransistoren wie in Abb. 5.113 zu Closed-Loop-Buffern ergänzt. Dazu kann man im einfachsten Fall die Schaltung von Abb. 5.62b einsetzen. Dadurch werden die Ausgangswiderstände von $T_1$ und $T_2$ auf vernachlässigbare Werte reduziert und die Steilheit des VC-Operationsverstärkers wird ausschließlich durch den ohmschen Widerstand $R_E$ bestimmt.

**Abb. 5.113.** VC-Operationsverstärker mit mit Closed-Loop-Buffern am Eingang zur Linearisierung
<!-- page-import:0633:end -->

<!-- page-import:0634:start -->
5.7 Der Transkonduktanz-Verstärker (VC-OPV) 597

a Schaltsymbol

b Modell

**Abb. 5.114.** VC-Operationsverstärker mit externem Widerstand $R_E$ zur Einstellung der Übertragungssteilheit. Dimensionierungsbeispiel für eine Steilheit von $20\,\mathrm{mA}/\mathrm{V}$

In Abb. 5.114 sind diese Änderungen im Vergleich zu Abb. 5.112 ersichtlich. Wegen der symmetrischen Signalführung verdoppelt sich der Ausgangsstrom; damit ergibt sich die Steilheit:

$$
S_D=\frac{I_{ak}}{U_D}=\frac{2I_q}{U_D}=\frac{2}{R_E}\overset{R_E=100\,\Omega}{=} \frac{2}{100\,\Omega}=20\,\frac{\mathrm{mA}}{\mathrm{V}}
$$

Bei den bisher beschriebenen VC-Operationsverstärkern ist der Ausgangsstrom auf $I_{q\ max}=I_0$ beschränkt. Größere Ausgangsströme erhält man bei kleinem Ruhestrom nur dann, wenn man auch hier einen Gegentakt-AB-Betrieb anwendet. Die Schaltung in Abb. 5.115 ergibt sich, indem man von dem VV-Operationsverstärker in Abb. 5.30 ausgeht und die Impedanzwandler-Endstufe weglässt. Der besondere Vorteil dieser Schaltung besteht darin, dass sie sogar für Ströme $I_q>2I_0$ funktioniert, wenn die obere bzw. untere Hälfte der Schaltung sperrt.

Auch beim Gegentakt-AB-Betrieb ist es vorteilhaft, die Open-Loop-Buffer in Abb. 5.115 durch Closed-Loop-Buffer zu ersetzen. Diese Variante haben wir in Abb. 5.116 dargestellt. Dabei sind zusätzliche komplementäre Emitterfolger nicht erforderlich, da sie bereits in den Endstufen der VV-Operationsverstärker enthalten sind wie wir in Abb. 5.65 gezeigt haben. Ihre Betriebsspannungsanschlüsse dienen auch hier als Signal-Ausgänge.

**Abb. 5.115.** VC-Operationsverstärker im Gegentakt-AB-Betrieb. Die Schaltung wird auch als *Wideband Transconductance Amplifier (WTA)* bezeichnet.
<!-- page-import:0634:end -->

<!-- page-import:0635:start -->
598  5. Operationsverstärker

**Abb. 5.116.** VC-Operationsverstärker mit Closed-Loop-Buffern am Eingang und Nutzung aller Signale. $I_q = (U_P - U_N)/R_E$ Beispiel: MAX436

Es ist zwar etwas ungewöhnlich, zwei zusätzliche VV-Operationsverstärker zur Realisierung eines VC-Operationsverstärker einzusetzen, aber es ist heutzutage gleichgültig wie viele Transistoren eine Schaltungen erfordert, wenn sich dadurch ihre Daten verbessern lassen.

Man sieht, dass alle hier gezeigten VC-Operationsverstärker am Ausgang mit Transistoren in Emitterschaltung an den Betriebsspannungen arbeiten, um einen hohen Ausgangswiderstand zu erreichen. Daher ist hier im Prinzip keine besondere Schaltung erforderlich, um einen Rail-to-Rail-Ausgang zu realisieren. Die handelsüblichen VC-Operationsverstärker besitzen jedoch teilweise Wilson-Stromspiegel, die einen minimalen Spannungsabfall von 0,8 V bedingen; wie in Kapitel 4.1.2 auf S. 315 beschrieben.

## 5.7.2 Typische Anwendung

VC-Operationsverstärker sind von Natur aus spannungsgesteuerte Stromquellen. Deshalb sind sie für diesen Einsatz besonders geeignet. Man muss lediglich – wie Abb. 5.117a zeigt – einen Widerstand $R_E$ anschließen, der die Steilheit bestimmt:

$$
S_D = \frac{I_a}{U_p - U_N} = \frac{I_a}{U_D} = \frac{2I_q}{U_D} = \frac{2}{R_E} \quad \overset{R_E=2\,\mathrm{k}\Omega}{=} \quad 1\,\frac{\mathrm{mA}}{\mathrm{V}}
$$

a Spannungsgesteuerte Stromquelle

$b$ Subtrahierer

**Abb. 5.117.** Einsatz eines VC-Operationsverstärkers als spannungsgesteuerte Stromquelle und als Subtrahierer. Hier wird angenommen, dass $I_a = 2I_q$
<!-- page-import:0635:end -->

<!-- page-import:0636:start -->
599

# 5.7 Der Transkonduktanz-Verstärker (VC-OPV)

**Abb. 5.118.** Einsatz eines VC-Operationsverstärkers zum Treiben von Koaxialleitungen

Dabei ist interessant, dass ein VC-Operationsverstärker die Differenz der Eingangsspannungen bildet. Deshalb kann man ihn auch als Subtrahierer einsetzen, wenn man am Ausgang einen Widerstand anschließt. Dazu dient der Widerstand $R_L$ in Abb. 5.117b. Einen Impedanzwandler kann man hinzufügen, wenn ein niederohmiger Ausgang erforderlich ist.

VC-Operationsverstärker eignen sich auch zum Treiben von Koaxialleitungen. Dabei geht man davon aus, dass ihr Ausgangswiderstand groß gegenüber dem Wellenwiderstand $R_W$ der Leitung ist. Dann kann man die Leitung, wie Abb. 5.118 zeigt, an beiden Enden parallel mit dem Wellenwiderstand abschließen. Für die Ausgangsspannung erhält man für $I_a = 2 I_q$:

$$
U_a = \frac{1}{2} R_t I_a = \frac{1}{2} R_t \frac{2U_E}{R_e} = \frac{R_t}{R_E} U_e \qquad \overset{R_E=50\,\Omega}{=} \qquad U_e
$$

Damit $U_a = U_e$ wird, muss man dem Stromgegenkopplungswiderstand den Wert $R_E = R_t$ geben, wenn der VC-Operationsverstärker auch hier die Stromübersetzung $I_a = 2 I_q$ besitzt. Der Vorteil der hier vorliegenden Parallel-Terminierung besteht darin, dass die Spannung am Koaxialkabel genauso groß ist wie die Ausgangsspannung des Verstärkers. Besonders bei niedrigen Betriebsspannungen ist das ein Vorteil gegenüber der Serien-Terminierung bei niederohmigen Ausgängen, weil dort der Verstärker die doppelte Spannung aufbringen muss. Dass der Verstärker hier den doppelten Strom bereitstellen muss, ist bei niedrigen Betriebsspannungen meist kein Problem.

Eine andere typische Anwendung zeigt das Bandpassfilter in Abb. 5.119. Auch hier wird der VC-Operationsverstärker über den Emitterwiderstand mit einer definierten Steilheit betrieben. Im Unterschied zu den bisherigen Schaltungen wird hier jedoch ein komplexer Emitterwiderstand eingesetzt, um einen Hochpass zu erhalten. Das $RC$-Glied am Ausgang wirkt als Tiefpass. Die beiden Grenzfrequenzen sind durch den Verstärker entkoppelt:

$$
f_u = \frac{1}{2\pi\,R_E C_E} \qquad \overset{\text{hier}}{=} \qquad 100\,\text{kHz}
,\qquad
f_o = \frac{1}{2\pi\,R_a C_a} \qquad \overset{\text{hier}}{=} \qquad 10\,\text{MHz}
$$

**Abb. 5.119.** Passiver Bandpass mit entkoppelten Grenzfrequenzen
<!-- page-import:0636:end -->

<!-- page-import:0891:start -->
854 12. Aktive Filter

**Abb. 12.77.** Integratorfilter 2. Ordnung mit CC-Integratoren für hohe Frequenzen mit Tiefpass- und Bandpass-Ausgang. Beispiel für einen Butterworth-Tiefpass mit einer Grenzfrequenz von 30 MHz und dem korrespondierenden Bandpass mit $Q = 0{,}7$

dem konventionellen Integratorfilter in Abb. 12.69 entspricht. Es besteht aus den beiden CC-Integratoren $OV1$, $OV2$ und dem $OV3$, der als Impedanzwandler arbeitet. Zur Berechnung der Filterfunktionen kann man der Schaltung die folgenden Gleichungen entnehmen:

$$
\frac{U_e - U_{TP}}{R} = \frac{U_{BP}}{R_1 \parallel (1/Cs)}
\qquad \text{und} \qquad
U_{TP} = \frac{U_{BP}}{RCs}
$$

Daraus folgen die angegebenen Übertragungsgleichungen. Man erkennt, dass sich die Resonanzfrequenz und die Güte unabhängig voneinander einstellen lassen.

Durch Koeffizientenvergleich ergibt sich die Dimensionierung nach Vorgabe der Kapazität $C$:

| Tiefpass | Bandpass |
|---|---|
| $R = \dfrac{\sqrt{b}}{2\pi f_g\, C}$ | $R = \dfrac{1}{2\pi f_g\, C}$ |
| $R_1 = \dfrac{\sqrt{b}}{a}\, R$ | $R_1 = RQ$ |

Die Eignung für hohe Frequenzen zeigt das Beispiel in Abb. 12.77. Mit der eingetragenen Dimensionierung ergibt sich ein Butterworth-Tiefpass mit einer Grenzfrequenz von 30 MHz. Bei der Dimensionierung der Schaltung wurden Steilheitswiderstände von $r_S = 10\,\Omega$ und Schaltungskapazitäten von 6 pF parallel zu den Integrationskondensatoren berücksichtigt. Die Schaltung arbeitet bis über 300 MHz mit guter Genauigkeit bei dem Einsatz von CC-Operationsverstärkern der Typen OPA615 oder OPA860.

Das Filter in Abb. 12.76 lässt sich modifizieren zu einer Schaltung mit VC-Operationsverstärkern (OTAs). Sie unterscheiden sich von den CC-Operationsverstärkern lediglich dadurch, dass der invertierende Eingang hochohmig ist und dass sie eine definierte Steilheit besitzen. Der innere Aufbau wird in Kapitel 5.7 auf Seite 595 beschrieben. Die beiden Operationsverstärker CCOP1 und CCOP3 bilden zusammen einen Differenzverstärker mit 2 hochohmigen Eingängen, dessen Steilheit durch den Widerstand $R$ bestimmt wird. Diese Kombination ist aber genau der Aufbau eines VC-Operationsverstärkers. Man kann sie daher zu dem VCOP1 in Abb. 12.78 zusammenfassen. Der Operationsverstärker CCOP2 lässt sich direkt umwandeln in einen VC-Operationsverstärker. Die Übertragungsfunktionen der Schaltung ändern sich dadurch nicht, auch die Dimensionierung bleibt unverändert, wenn man $R = 1/S$ einsetzt. Die resultierenden Filter werden als
<!-- page-import:0891:end -->
