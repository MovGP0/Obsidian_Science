# Linear Voltage Regulators

<!-- page-import:0974:start -->
16.3 Lineare Spannungsregler 937

*Ausgangsspannung:* $U_a = U_{ref} - 2U_{BE}$

**Abb. 16.13.**  
Spannungsstabilisierung mit Emitterfolger

*Ausgangsspannung:* $U_a = \left(1 + \frac{R_2}{R_1}\right) U_{ref}$

**Abb. 16.14.**  
Spannungsregler mit Regelverstärker

## 16.3 Lineare Spannungsregler

Zum Betrieb von elektronischen Schaltungen benötigt man in der Regel eine Gleichspannung, die einen bestimmten Wert auf 5 bis 10% genau einhält. Diese Toleranz muss über den ganzen Bereich der auftretenden Netzspannungsschwankungen, Laststromschwankungen und Temperaturschwankungen eingehalten werden. Die überlagerte Brummspannung soll höchstens im Millivolt-Bereich liegen. Aus diesen Gründen ist die Ausgangsspannung der beschriebenen Gleichrichterschaltungen nicht direkt als Betriebsspannung für elektronische Schaltungen geeignet, sondern muss durch einen nachgeschalteten Spannungsregler stabilisiert und geglättet werden. Die wichtigsten Kenndaten eines Spannungsreglers sind:

- Die Ausgangsspannung und ihre Toleranz.
- Der maximale Ausgangsstrom und der Kurzschlussstrom.
- Der minimale Spannungsabfall, den der Spannungsregler zur Aufrechterhaltung der Ausgangsspannung benötigt. Er wird als *Dropout Voltage* bezeichnet.
- Die Unterdrückung von Eingangsspannungsschwankungen (Line Regulation).
- Der Ausgangswiderstand, der angibt, wie stark sich die Ausgangsspannung bei Lastschwankungen ändert.

### 16.3.1 Prinzipien

Der einfachste Serienregler ist ein Emitterfolger, dessen Basis man an einer Referenzspannungsquelle anschließt. Die Referenzspannung kann man z.B. wie in Abb. 16.13 mit Hilfe einer Z-Diode aus der unstabilisierten Eingangsspannung $U_e$ gewinnen.

Die einfachen Schaltung in Abb. 16.13 erfüllt die Anforderungen, die man an Spannungsregler stellen muss, zum großen Teil nicht oder nicht gut genug. Deshalb baut man Spannungsregler mit einem Regelverstärker auf. Dazu eignet sich wie in Abb. 16.14 ein Operationsverstärker. Da normale Operationsverstärker nicht den benötigten Ausgangsstrom liefern, ergänzt man einen Emitterfolger in Form einer Darlingtongschaltung am Ausgang. Der Operationsverstärker arbeitet hier als nicht-invertierender Verstärker für $U_{ref}$. Die Referenzspannung kann man im Prinzip mit einer Z-Diode erzeugen; meist werden jedoch Bandgap-Referenzen eingesetzt, die in Abschnitt 16.4.2 beschrieben werden. Die Ausgangsspannung lässt sich durch Wahl von $R_1$ und $R_2$ auf beliebige Werte $U_a \geq U_{ref}$

$U_a = (1 + R_2/R_1) U_{ref}$ festlegen.
<!-- page-import:0974:end -->

<!-- page-import:0975:start -->
938 16. Stromversorgung

$$
U_a = \left(1 + \frac{R_2}{R_1}\right) U_{ref}
,\quad
I_{a,max} = \frac{0{,}6\,\mathrm{V}}{R_3}
$$

**Abb. 16.15.** Prinzipsschaltung eines integrierten Spannungsreglers aus der 7800-Serie

## 16.3.2 Praktische Ausführung

Die praktische Ausführung eines integrierten Spannungsreglers der 7800-Serie ist in Abb. 16.15 dargestellt. Die Anforderungen an den Regelverstärker sind nicht besonders hoch, da ein Emitterfolger allein schon ein ganz brauchbarer Spannungsregler ist. Deshalb genügt der einfache Differenzverstärker $T_3$, $T_4$, der zusammen mit der Darlingtonschaltung $T_1$ als Leistungsoperationsverstärker arbeitet. Er ist über den Spannungsteiler $R_1$, $R_2$ als nicht-invertierender Verstärker gegengekoppelt.

Der Transistor $T_2$ dient zur Strombegrenzung. Wenn der Spannungsabfall an $R_3$ den Wert $0{,}6\,\mathrm{V}$ erreicht, wird $T_2$ leitend und reduziert damit die Ausgangsspannung. Durch die entstehende Gegenkopplung wird die Ausgangsspannung so eingestellt, dass der Spannungsabfall an $R_3$ auf den Wert $0{,}6\,\mathrm{V}$ stabilisiert wird. Das ist gleichbedeutend mit einem konstanten Ausgangsstrom:

$$
I_{a,max} = \frac{0{,}6\,\mathrm{V}}{R_3}
$$

Die Ausgangsspannung wird in diesem Betriebszustand vom Lastwiderstand $R_L$ bestimmt:

$$
U_a = I_{a,max}\,R_L
$$

Beim Erreichen des Maximalstromes tritt in dem Ausgangstransistor $T_1$ die Verlustleistung

$$
P_v = I_{a,max}\,(U_e - U_a)
$$

auf. Sie wird im Kurzschlussfall sehr viel größer als im Normalbetrieb, da dann die Ausgangsspannung unter den Sollwert bis auf Null absinkt. Um diese Zunahme der Verlustleistung zu verhindern, kann man die Stromgrenze mit abnehmender Ausgangsspannung reduzieren. Auf diese Weise entsteht eine rückläufige Strom-Spannungskennlinie, wie sie in Abb. 16.16 dargestellt ist.

Eine starke Zunahme der Verlustleistung kann auch dann eintreten, wenn die Eingangsspannung $U_e$ vergrößert wird, da in diesem Fall die Differenz $U_e - U_a$ ebenfalls zunimmt. Ein optimaler Schutz des Ausgangstransistors $T_1$ lässt sich demnach dadurch erreichen, dass man die Stromgrenze $I_{a,max}$ an die Spannungsdifferenz $U_e - U_a$ anpasst. Dazu dienen der Widerstand $R_5$ und die Z-Diode $D_1$, die in Abb. 16.15 gestrichelt eingezeichnet sind.
<!-- page-import:0975:end -->

<!-- page-import:0976:start -->
16.3 Lineare Spannungsregler 939

**Abb. 16.16.**  
Ausgangskennlinie bei rückläufiger  
Stromgrenze

Wenn die Potentialdifferenz $U_e - U_a$ kleiner ist als die Z-Spannung $U_Z$ der Diode $D_1$, fließt durch den Widerstand $R_5$ kein Strom. Dadurch beträgt die Stromgrenze in diesem Fall unverändert $0{,}6\,\mathrm{V}/R_3$. Überschreitet die Potentialdifferenz den Wert $U_Z$, entsteht durch den Spannungsteiler $R_5$, $R_4$ eine positive Basis-Emitter-Vorspannung an dem Transistor $T_2$. Dadurch wird der Transistor $T_2$ bereits bei einem entsprechend kleineren Spannungsabfall an $R_3$ leitend.

Der Kondensator $C_k$ bewirkt die für die Stabilität notwendige Frequenzgangkorrektur. Als zusätzliche Stabilisierungsmaßnahme muss man in der Regel am Eingang und Ausgang je einen Kondensator mit einigen $\mu\mathrm{F}$ nach Masse anschließen.

## 16.3.3 Einstellung der Ausgangsspannung

Neben den Festspannungsreglern gibt es auch einstellbare Spannungsregler (Serie 78 G). Bei ihnen ist der Spannungsteiler $R_1$, $R_2$ weggelassen und dafür der Eingang des Regelverstärkers wie in Abb. 16.17 herausgeführt. Sie besitzen also vier Anschlüsse. Mit dem extern anzuschließenden Spannungsteiler $R_1$, $R_2$ kann man beliebige Ausgangsspannungen im Bereich $U_{ref} \approx 5\,\mathrm{V} \leq U_a < U_e - 3\,\mathrm{V}$ einstellen.

Einstellbare Spannungsregler mit nur drei Anschlüssen lassen sich dadurch realisieren, dass man auf den Masse-Anschluss verzichtet und den Betriebsstrom des Regelverstärkers zum Ausgang ableitet. Um den Unterschied deutlich zu machen, ist in Abb. 16.17 ein einstellbarer Spannungsregler mit 4 Anschlüssen und daneben in Abb. 16.18 ein einstellbarer Spannungsregler der 317-Serie mit 3 Anschlüssen dargestellt. Die Referenzspannungsquelle ist hier nicht an Masse, sondern als potentialfreie Quelle im Rückkopplungskreis des Regelverstärkers angeschlossen. Die Ausgangsspannung steigt deshalb so weit an, bis

**Abb. 16.17.**  
Einstellbarer Spannungsregler mit vier  
Anschlüssen (78 G-Serie)

**Abb. 16.18.**  
Einstellbarer Spannungsregler mit drei  
Anschlüssen (317-Serie)
<!-- page-import:0976:end -->

<!-- page-import:0977:start -->
940  16. Stromversorgung

**Abb. 16.19.**  
Spannungsregler mit niedriger Dropout Vol-
tage mit Bipolar-Leistungstransistor

**Abb. 16.20.**  
Spannungsregler mit niedriger Dropout Vol-
tage mit Fet-Leistungstransistor

an $R_2$ die Spannung $U_{ref}$ abfällt. Dann ist die Eingangsspannungsdifferenz des Operations-
verstärkers gerade Null.

Der Ausgang des Spannungsreglers in Abb. 16.18 darf nicht unbelastet bleiben, weil sonst der Strom des Regelverstärkers nicht abfließen kann. Deshalb ist es zweckmäßig, den Spannungsteiler $R_1$, $R_2$ niederohmig zu dimensionieren. Man wählt z.B. $R_2 = 240\,\Omega$; dann fließt bei einer Referenzspannung von $U_{ref} = 1{,}25\,\mathrm{V}$ ein Querstrom von $5\,\mathrm{mA}$. Dann kann auch der aus der Referenzspannungsquelle fließende Strom von etwa $100\,\mu\mathrm{A}$ den Spannungsabfall an $R_1$ nicht nennenswert verändern.

### 16.3.4 Spannungsregler mit geringem Spannungsverlust

Wie man in Abb. 16.15 erkennt, ergibt sich der minimale Spannungsabfall zwischen Ein-
gang und Ausgang des Spannungsreglers aus dem Spannungsabfall von $0{,}6\,\mathrm{V}$ am Strom-
messwiderstand $R_3$, der Basis-Emitter-Spannung der Darlingtonschaltung von $1{,}6\,\mathrm{V}$ und dem minimalen Spannungsabfall an der Stromquelle $I_1$ von etwa $0{,}3\,\mathrm{V}$. Die Dropout Volta-
ge beträgt also $2{,}5\,\mathrm{V}$. Dies ist besonders bei der Regelung niedriger Ausgangsspannungen störend: Bei einem $5\,\mathrm{V}$-Regler ist deshalb in der Regel eine Eingangsspannung von $10\,\mathrm{V}$ erforderlich, was einen Wirkungsgrad unter $50\,\%$ zur Folge hat. Die Dropout Voltage lässt sich bei der Schaltung in Abb. 16.15 reduzieren, wenn man die Stromquelle $I_1$ aus einer Hilfsspannung betreibt, die ein paar Volt über der Eingangsspannung liegt.

Eine einfachere Möglichkeit besteht darin, als Leistungstransistor einen pnp-Transistor wie in Abb. 16.19 einzusetzen. Der minimale Spannungsabfall an dem Spannungsregler ist dann gleich der Sättigungsspannung des Leistungstransistors $T_1$. Sie lässt sich bei entspre-
chend großem Basisstrom unter $0{,}5\,\mathrm{V}$ halten. Um die erforderlichen Basisströme für $T_1$ bereitzustellen, sollte man allerdings hier keine Darlington-Schaltung einsetzen, da sich der minimale Spannungsabfall sonst um eine Emitter-Basis-Spannung erhöht. Deshalb wird der Kollektor von $T_2$ an Masse angeschlossen und nicht am Ausgang. Ein Nachteil besteht allerdings darin, dass der Leistungstransistor $T_1$ in der infrage kommenden Technologie eine niedrige Stromverstärkung besitzt und daher große Basisströme benötigt, die über den Transistor $T_2$ nach Masse abfließen. Sie beeinträchtigen den Wirkungsgrad der Schal-
tung. Diese Probleme lassen sich dadurch umgehen, dass man den pnp-Leistungstransistor durch einen p-Kanal Leistungsmosfet ersetzt, wie Abb. 16.20 zeigt.
<!-- page-import:0977:end -->

<!-- page-import:0978:start -->
16.3 Lineare Spannungsregler 941

**Abb. 16.21.**  
Stabilisierung einer negativen Spannung

**Abb. 16.22.**  
Stabilisierung von zwei symmetrischen Spannungen

In beiden Schaltungen wird der Leistungstransistor als invertierender Verstärker in Emitter- bzw. Sourceschaltung betrieben. Das hat einige Konsequenzen:

– Man muss hier nicht den invertierenden Eingang des Operationsverstärkers zur Rückkopplung verwenden, sondern den nichtinvertierenden Eingang.  
– Der Leistungstransistor bewirkt eine zusätzliche Spannungsverstärkung, deren Größe stark von der Last abhängt, die man am Ausgang anschließt. Deshalb ist die Schwingneigung des Regelkreises hier größer.  
– Der Ausgangswiderstand der Schaltung ist größer. Er wird zwar durch den Regelkreis reduziert, aber nur für niedrige Frequenzen, bei denen die Schleifenverstärkung groß ist.

Diese Probleme lassen sich mit einem großen Kondensator $C_1$ am Ausgang lösen: Er bewirkt eine Frequenzgangkorrektur, die die Stabilität des Regelkreises weitgehend unabhängig von der Last macht und er sorgt gleichzeitig für einen niedrigen Ausgangswiderstand bei hohen Frequenzen.

## 16.3.5 Spannungsregler für negative Spannungen

Man kann mit den bisher beschriebenen Spannungsreglern auch negative Ausgangsspannungen stabilisieren, wenn eine massefreie Eingangsspannung zur Verfügung steht. Die entsprechende Schaltung ist in Abb. 16.21 dargestellt. Man erkennt, dass sie nicht mehr funktioniert, wenn die unstabilisierte Spannungsquelle mit dem einen oder dem anderen Anschluss geerdet ist, denn dann wird entweder der Spannungsregler oder die Ausgangsspannung kurzgeschlossen. Dieses Problem tritt z.B. dann auf, wenn man die vereinfachte Schaltung zur gleichzeitigen Erzeugung einer positiven und einer negativen Betriebsspannung von Abb. 16.11 einsetzt. Dabei ist der Mittelpunkt geerdet. Deshalb lässt sich das negative Betriebspotential nicht wie in Abb. 16.21 stabilisieren. Man benötigt in diesem Fall Spannungsregler für negative Ausgangsspannungen wie in Abb. 16.23 und 16.24. Bei den integrierten Komplementärtypen zur 7800- bzw. 317-Serie wird der Leistungstransistor in Emitterschaltung betrieben, weil sich dadurch ein leicht herstellbarer npn-Transistor ergibt. Die Funktionsweise der dargestellten Schaltungen entspricht dadurch dem Spannungsregler mit geringem Spannungsverlust in Abb. 16.19. Aus diesem Grund besitzen die integrierten Negativ-Spannungsregler einen deutlich niedrigeren Spannungsverlust als die entsprechenden Positiv-Spannungsregler.
<!-- page-import:0978:end -->

<!-- page-import:0979:start -->
942  16. Stromversorgung

Abb. 16.23.  
Negativ-Spannungsregler der  
7900-Familie

Abb. 16.24.  
Negativ-Spannungsregler der 337-Familie

## 16.3.6 Labornetzgeräte

Bei den beschriebenen Spannungsreglern lässt sich die Ausgangsspannung nur in einem gewissen Bereich $U_a \geq U_{ref}$ einstellen. Die Strombegrenzung dient nur zum Schutz des Spannungsreglers und ist daher fest auf den Wert $I_{a,max}$ eingestellt.

Von einem Labornetzgerät verlangt man, dass Ausgangsspannung und Stromgrenze zwischen Null und einem Maximalwert linear einstellbar sind. Eine dafür geeignete Schaltung ist in Abb. 16.25 dargestellt. Die Spannungsregelung erfolgt über den Operationsverstärker OV 1, der als invertierender Verstärker betrieben wird. Damit wird die Ausgangsspannung:

$$
U_a = -\frac{R_2}{R_1} U_{ref\,1}
$$

Sie ist also proportional zu dem Einstellwiderstand $R_2$. Durch Veränderung von $U_{ref\,1}$ ist auch eine Spannungssteuerung möglich. Der Ausgangsstrom fließt von der erdfreien unstabilisierten Leistungs-Spannungsquelle $U_L$ über die Darlington-Schaltung $T_1$, $T'_1$ durch den Verbraucher und über den Strom-Messwiderstand $R_5$ wieder zurück zur Spannungsquelle.

Der Spannungsabfall an $R_5$ ist demnach proportional zum Ausgangsstrom $I_a$. Er wird durch den als Umkehrverstärker betriebenen Operationsverstärker OV 2 mit der zweiten Referenzspannung $U_{ref\,2}$ verglichen. Solange

$$
\frac{I_a R_5}{R_4} < \frac{U_{ref\,2}}{R_3}
$$

bleibt, ist $V_{P2} > 0$. Dadurch geht die Ausgangsspannung des Verstärkers OV 2 an die positive Aussteuerungsgrenze, und die Diode $D_2$ sperrt. Die Spannungsregelung wird in diesem Betriebszustand also nicht beeinflusst. Wenn der Ausgangsstrom den Grenzwert

$$
I_{a,max} = \frac{R_4}{R_5 R_3} U_{ref\,2}
$$

erreicht, wird $V_{P2} = 0$. Die Ausgangsspannung von OV 2 sinkt ab, und die Diode $D_2$ wird leitend. Dadurch sinkt auch das Basispotential der Darlington-Schaltung ab: die Stromregelung setzt ein. Der Verstärker OV 1 versucht das Absinken der Ausgangsspannung zu verhindern, indem er seine Ausgangsspannung bis auf den Maximalwert erhöht. Dadurch sperrt die Diode $D_1$ und die Stromregelung wird nicht beeinträchtigt. Die beiden Dioden arbeiten als UND-Gatter für analoge Signale.
<!-- page-import:0979:end -->
