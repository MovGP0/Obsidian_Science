# Voltage Measurement

<!-- page-import:1086:start -->
# Kapitel 18:
Messschaltungen

In den vorhergehenden Kapiteln haben wir eine Reihe von Verfahren zur analogen und digitalen Signalverarbeitung kennen gelernt. In vielen Fällen müssen jedoch selbst elektrische Signale erst umgeformt werden, bevor sie einer Analogrechenschaltung oder einem AD-Umsetzer zugeführt werden können. Man benötigt zu diesem Zweck Messschaltungen, die als Ausgangssignal eine geerdete Spannung mit niedrigem Innenwiderstand liefern.

## 18.1 Spannungsmessung

### 18.1.1 Impedanzwandler

Um die Spannung einer hochohmigen Signalquelle belastungsfrei zu messen, kann man einen Elektrometerverstärker gemäß Abb. 5.94 von S. 578 zur Impedanzwandlung einsetzen. Dabei muss man jedoch beachten, dass die hochohmige Eingangsleitung sehr empfindlich gegenüber kapazitiven Störeinstreuungen ist. Sie muss also in der Regel abgeschirmt werden. Dadurch entsteht eine beträchtliche kapazitive Belastung der Quelle nach Masse (30...100 pF/m). Bei einem Innenwiderstand der Quelle von beispielsweise $1\,\mathrm{G\Omega}$ und einer Leitungskapazität von $100\,\mathrm{pF}$ resultiert daraus eine obere Grenzfrequenz von nur $1{,}6\,\mathrm{Hz}$.

Ein weiteres Problem sind zeitliche Schwankungen dieser Kapazität, die z. B. durch mechanische Bewegungen verursacht werden können. Dadurch entstehen sehr große Rauschspannungen. Wenn die Leitung z. B. auf $10\,\mathrm{V}$ aufgeladen ist, ergibt sich durch eine Kapazitätsänderung von $1\%$ ein Spannungssprung von $100\,\mathrm{mV}$!

Diese Nachteile lassen sich vermeiden, wenn man den Elektrometerverstärker dazu benutzt, die Spannung zwischen Innenleiter und Abschirmung klein zu halten. Dazu schließt man die Abschirmung wie in Abb. 18.1 nicht an Masse, sondern am Verstärkerausgang an. Auf diese Weise wird die Leitungskapazität um die Differenzverstärkung des Operationsverstärkers virtuell verkleinert. – Da nur noch die Offsetspannung des Operationsverstärkers an der Leitungskapazität anliegt, verschwindet auch das Leitungsrauschen weitgehend.

#### 18.1.1.1 Vergrößerung der Spannungsaussteuerbarkeit

Die maximal zulässige Betriebsspannung der gängigen integrierten Operationsverstärker beträgt meist $\pm 18\,\mathrm{V}$. Damit ist die Spannungsaussteuerbarkeit auf Werte um $\pm 15\,\mathrm{V}$ begrenzt. Diese Begrenzung lässt sich umgehen, indem man die Betriebspotentiale des Operationsverstärkers durch eine Bootstrap-Schaltung mit dem Eingangspotential mitführt. Dazu dienen die beiden Emitterfolger in Abb. 18.2. Mit ihnen werden die Potentialdifferenzen $V_1 - U_a$ und $U_a - V_2$ auf den Wert $U_Z - 0{,}7\,\mathrm{V}$ stabilisiert. Die Aussteuerbar-

**Abb. 18.1.**  
Verkleinerung der Abschirmungskapazität und des Abschirmungsrauschens durch Mitführung des Abschirmungspotentials mit dem Messpotential (guard drive)

© Springer-Verlag GmbH Deutschland, ein Teil von Springer Nature 2019  
U. Tietze et al., *Halbleiter-Schaltungstechnik*
<!-- page-import:1086:end -->

<!-- page-import:1087:start -->
1050 18. Messschaltungen

**Abb. 18.2.**  
Spannungsfolger für hohe Eingangsspannungen

keit wird auf diese Weise nicht mehr durch den Operationsverstärker, sondern durch die Spannungsfestigkeit der Emitterfolger und der Konstantstromquellen bestimmt.

## 18.1.2 Messung von Potentialdifferenzen

Bei der Messung von Potentialdifferenzen kommt es darauf an, die Differenzspannung

$$
U_D = V_2 - V_1
$$

möglichst unbeeinträchtigt von der überlagerten Gleichtaktspannung

$$
U_{Gl} = \frac{1}{2}(V_2 + V_1)
$$

zu verstärken. Dabei kommt es häufig vor, dass Differenzspannungen im Millivolt-Bereich Gleichtaktspannungen von 10 V und mehr überlagert sind. Kennzeichnend für die Güte eines Subtrahierers ist daher seine Gleichtaktunterdrückung:

$$
G = \frac{A_D}{A_{Gl}} = \frac{U_a/U_D}{U_a/U_{Gl}} = \frac{U_{Gl}}{U_D}
$$

(18.1)

In dem genannten Zahlenbeispiel muss $G \gg 10\,\mathrm{V}/1\,\mathrm{mV} = 10^4$ sein. Besondere Probleme treten auf, wenn die überlagerte Gleichtaktspannung sehr hohe Werte oder hohe Frequenzen aufweist.

Es gibt drei verschiedene Verfahren zur Verstärkung von Spannungsdifferenzen:

– als Subtrahierer beschaltete Operationsverstärker,  
– gegengekoppelte Differenzverstärker,  
– Subtraktion mit geschalteten Kondensatoren.

### 18.1.2.1 Subtrahierer mit beschalteten Operationsverstärkern

Zur Messung von Potentialdifferenzen kann man im Prinzip den Subtrahierer von Abb. 10.3 auf S. 741 einsetzen. Häufig darf man jedoch die zu messenden Potentiale nicht mit dem Eingangswiderstand des Subtrahierers belasten, weil sie einen beträchtlichen Innenwiderstand besitzen. Mit den zusätzlichen Spannungsfolgern in Abb. 18.3 wird die Funktionsweise des Subtrahierers unabhängig von den Innenwiderständen der Messpotentiale.
<!-- page-import:1087:end -->

<!-- page-import:1088:start -->
18.1 Spannungsmessung 1051

**Abb. 18.3.**  
Subtrahierer mit vorgeschalteten  
Impedanzwandlern

$$
U_a=\frac{R_2}{R_1}(V_2-V_1)
$$

Eine höhere Gleichtaktunterdrückung lässt sich jedoch erzielen, wenn man die Spannungsverstärkung in die Impedanzwandler verlagert und dem Subtrahierer die Verstärkung 1 gibt. Diese Variante ist in Abb. 18.4 dargestellt. Für $R_1=\infty$ arbeiten OV 1 und OV 2 als Spannungsfolger; in diesem Fall besteht praktisch kein Unterschied zur vorhergehenden Schaltung.

Ein zusätzlicher Vorteil der Schaltung besteht darin, dass man durch Variation eines einzigen Widerstandes die Differenzverstärkung einstellbar machen kann. Wie man in Abb. 18.4 erkennt, tritt an dem Widerstand $R_1$ die Potentialdifferenz $V_2-V_1$ auf. Damit wird:

$$
V_2'-V_1'=\left(1+\frac{2R_2}{R_1}\right)(V_2-V_1)
$$

Diese Differenz wird mit Hilfe des Subtrahierers OV 3 an den geerdeten Ausgang übertragen.

Bei reiner Gleichtaktaussteuerung ($V_1=V_2=V_{\mathrm{Gl}}$) wird $V_1'=V_2'=V_{\mathrm{Gl}}$. Die Gleichtaktverstärkung von OV 1 und OV 2 besitzt also unabhängig von der eingestellten Differenzverstärkung den Wert 1. Mit (10.6) von S. 741 erhalten wir damit die Gleichtaktunterdrückung:

$$
U_a=\left(1+\frac{2R_2}{R_1}\right)(V_2-V_1)
$$

**Abb. 18.4.** Elektrometer-Subtrahierer (Instrumentation Amplifier)
<!-- page-import:1088:end -->

<!-- page-import:1089:start -->
1052  18. Messschaltungen

$U_a=\left(1+\frac{R_2}{R_1}\right)(V_2-V_1)$

**Abb. 18.5.**  
Unsymmetrischer Elektrometer-Subtrahierer

$U_a=2\left(1+\frac{R_2}{R_1}\right)(V_2-V_1)$

**Abb. 18.6.**  
Subtrahierer mit einstellbarer Verstärkung

$$
G=2\left(1+\frac{2R_2}{R_1}\right)\Delta\alpha
$$

Darin ist $\Delta\alpha$ die relative Paarungstoleranz der Widerstände $R_3$, bei Widerständen mit einer Toleranz von 1% ist $\Delta\alpha=0{,}01$. Bemerkenswert an diesem Ergebnis ist, dass sich die Gleichtaktunterdrückung mit zunehmender Verstärkung verbessert.

Bei dem Elektrometer-Subtrahierer in Abb. 18.4 lässt sich ein Operationsverstärker einsparen, wenn man auf die Symmetrie der Schaltung verzichtet. Der Elektrometerverstärker OV 2 in Abb. 18.5 besitzt die Verstärkung $1+R_1/R_2$. OV 1 verstärkt das Potential $V_2$ mit dem Faktor $1+R_2/R_1$ und addiert gleichzeitig die in den Fußpunkt eingespeiste Spannung $V_1'$ mit dem Gewicht $-R_2/R_1$. Dadurch werden beide Eingangspotentiale betragsmäßig mit $1+R_2/R_1$ verstärkt. Wenn man die Schaltung wie in Abb. 18.6 modifiziert, lässt sich auch hier die Verstärkung mit einem einzigen Widerstand festlegen.

#### 18.1.2.2 Subtrahierer für hohe Spannungen

Zur Subtraktion von hohen Spannungen kann man die Schaltung von Abb. 18.3 einsetzen. Die drei in diesem Fall erforderlichen Hochspannungsoperationsverstärker kann man häufig dadurch umgehen, dass man $R_1 \gg R_2$ macht; Abb. 18.7 zeigt ein Dimensionierungsbeispiel. Dann wird der Eingangswiderstand so groß, dass man auf die Spannungsfolger häufig verzichten kann. Gleichzeitig werden die Eingangsspannungen am Subtrahierer durch diese Dimensionierung so weit heruntergesetzt, dass man keinen Hochspannungsoperationsverstärker benötigt. In dem Beispiel kann man bei einer Gleichtaktaussteuerbarkeit von 10 V Eingangsspannungen von über 200 V anlegen.

Ein Nachteil dieser Dimensionierung ist jedoch, dass sich Subtrahierer ergeben, deren Verstärkung $A=R_2/R_1 \ll 1$ ist. Man kann einen zweiten Verstärker nachschalten, um die Spannungsdifferenz mit dem gewünschten Faktor zu verstärken. Einfacher ist es jedoch, die Schaltung von Abb. 18.8 einzusetzen, bei der sich die Abschwächung hoher Eingangsspannungen und die Verstärkung unabhängig dimensionieren lassen. Die Widerstände $R_1$ und $R_2$ bestimmen auch hier die Verstärkung; die zusätzlichen Widerstände $R_3$ reduzieren lediglich die Gleichtaktaussteuerung. Bei der angegebenen Dimensionierung ergibt sich die Verstärkung Eins, während die Gleichtaktaussteuerbarkeit im Vergleich zu [unclear]
<!-- page-import:1089:end -->

<!-- page-import:1090:start -->
18.1 Spannungsmessung 1053

$U_a = \dfrac{R_2}{R_1}(U_2 - U_1) = 0{,}05(U_2 - U_1)$

$U_{\mathrm{Gl}} = \dfrac{R_2}{R_1 + R_2} = 0{,}048U_2$

**Abb. 18.7.**  
Subtraktion hoher Spannungen

$U_a = \dfrac{R_2}{R_1}(U_2 - U_1) = (U_2 - U_1)$

$U_{\mathrm{Gl}} = \dfrac{R_2 \parallel R_3}{R_1 + R_2 \parallel R_3} U_2 = 0{,}045U_2$

**Abb. 18.8.**  
Subtraktion hoher Spannungen mit frei wählbarer Verstärkung

dem Beispiel in Abb. 18.7 praktisch unverändert ist. Ein integrierter Subtrahierer, der nach diesem Prinzip arbeitet, ist z.B. der INA 148.

Die Erhöhung der Gleichtaktaussteuerbarkeit mit den Widerständen $R_3$ in Abb. 18.8 bringt jedoch auch Probleme mit sich, die man bei der Auswahl der Operationsverstärker berücksichtigen sollte. Die Widerstände $R_3$ wirken nämlich als Abschwächer für die Eingangssignale des Operationsverstärkers. Sie reduzieren daher die Schleifenverstärkung und damit meist auch die Bandbreite. Gleichzeitig erhöhen sie in demselben Maß die unerwünschte Verstärkung der Offsetspannung und Offsetspannungsdrift. Daher benötigt man hier hochwertige Operationsverstärker. Die Widerstände $R_3$ müssen auf beiden Seiten natürlich dieselbe Abschwächung bewirken. Deshalb sind hier engtolerierte Widerstände besonders wichtig. Um enge Gleichlauftoleranzen an beiden Eingängen des Operationsverstärkers sicherzustellen, wird man die Widerstände $R_2$ und $R_3$ am nichtinvertierenden Eingang in der Regel nicht zu einem einzigen Widerstand zusammenfassen.

### 18.1.2.3 Subtrahierer mit gegengekoppelten Differenzverstärkern

Ein Nachteil der bisher behandelten Subtrahierer besteht darin, dass sie 4 mit hoher Genauigkeit gepaarte Widerstände erfordern. Meist werden sie deshalb als Dünnfilmschaltungen auf dem Siliziumoxid aufgedampft. Eine Schaltung, die von Natur aus nur Differenzen verstärkt, ist der Differenzverstärker, der keine engtolerierten Widerstände erfordert. Hier lassen sich leicht Gleichtaktunterdrückungen von

$$
G = \dfrac{A_D}{A_{Gl}} = 10^5 = 100\ \mathrm{dB}
$$

und mehr erreichen. Besonders einfach lassen sich Subtrahierer mit VC- und CC-Operationsverstärkern aufbauen, die wir bereits in Abb. 5.117 und 5.130 auf S. 598 bzw. 606 beschrieben haben. Abbildung 18.9 zeigt die Schaltung mit Transistor- bzw. Operationsverstärker-Symbolen.

Die Eingangsspannungsdifferenz $U_D = U_{e1} - U_{e2}$ bewirkt einen Strom der Größe $I_q = U_D/R_E$, der mit den CC-Operationsverstärkern an die Ausgänge übertragen wird.
<!-- page-import:1090:end -->

<!-- page-import:1091:start -->
1054  18. Messschaltungen

$U_{a1}=\dfrac{R_C}{R_E}(U_{e1}-U_{e2})=\dfrac{R_C}{R_E}U_D$

$U_{a2}=-\dfrac{R_C}{R_E}(U_{e1}-U_{e2})=-\dfrac{R_C}{R_E}U_D$

**Abb. 18.9.** Differenzverstärker mit CC-Operationsverstärkern

**Abb. 18.10.**  
Praktische Ausführung eines Subtrahierers mit CC-Operationsverstärkern z.B. INA326

$U_a=2\,\dfrac{R_C}{R_E}(U_{e1}-U_{e2})$

Er verursacht an den Kollektorwiderständen die Ausgangsspannungen $\pm U_D R_C/R_E$. Um einen niederohmigen Ausgang zu erhalten, kann man einen invertierenden oder nichtinvertierenden Operationsverstärker nachschalten. Wenn man nur einen einzigen Ausgang benötigt, kann man den nicht benötigten Ausgang am invertierenden Eingang des anderen Operationsverstärker anschließen. Diese Möglichkeit ist in Abb. 18.10 dargestellt. Dadurch verdoppelt sich das Ausgangssignal.

### 18.1.2.4 Subtrahierer in SC-Technik

Das Prinzip eines Subtrahierers in Switched-Capacitor-Technik besteht darin, einen Kondensator auf die zu messende Spannungsdifferenz aufzuladen und dann in einen einseitig

$U_a=\left(1+\dfrac{R_2}{R_1}\right)(V_2-V_1)=\left(1+\dfrac{R_2}{R_1}\right)U_D$

**Abb. 18.11.** Subtrahierer in Switched-Capacitor-Technik
<!-- page-import:1091:end -->

<!-- page-import:1092:start -->
18.1 Spannungsmessung 1055

![Abb. 18.12. Prinzip zur Messung erdfreier Spannungen mit einem galvanisch getrennten Verstärker](image)

**Abb. 18.12.** Prinzip zur Messung erdfreier Spannungen mit einem galvanisch getrennten Verstärker

geerdeten Kondensator zu übertragen. Die resultierende Schaltung ist in Abb. 18.11 dargestellt. Solange die Schalter in der linken Stellung stehen, wird der Speicherkondensator $C_S$ auf die Eingangsspannungsdifferenz aufgeladen. Nach dem Umschalten in die rechte Stellung wird die Ladung an den Haltekondensator $C_H$ weitergegeben. Nach einigen Schaltzyklen ist die Spannung $U_H$ auf den stationären Wert

$$
U_H = U_S = U_D = V_2 - V_1
$$

angestiegen. Diese Spannung lässt sich mit dem nachfolgenden Elektrometerverstärker praktisch beliebig verstärken, da hier keine Differenzbildung mehr erforderlich ist. Die maximale Gleichtaktspannung wird hier lediglich durch die Spannungsfestigkeit der Schalter bestimmt und nicht durch den Verstärker.

### 18.1.3 Trennverstärker (Isolation Amplifier)

Mit den beschriebenen Subtrahierern lassen sich je nach Schaltungsprinzip Spannungen von $10\,\mathrm{V} \ldots 200\,\mathrm{V}$ verarbeiten. Es gibt jedoch viele Anwendungen, bei denen der Messspannung eine wesentlich höhere Gleichtaktspannung überlagert ist, die z.B. einige kV beträgt. Zur Überwindung solcher Potentialunterschiede teilt man die Messschaltung wie in Abb. 18.12 in zwei galvanisch getrennte Teile auf. Eine galvanische Trennung kann auch aus Sicherheitsgründen vorgeschrieben sein wie z.B. bei den meisten medizinischen Anwendungen. Der Senderteil arbeitet auf Messpotential, der Empfängerteil auf Nullpotential. Um diesen Betrieb zu ermöglichen, benötigt der Senderteil eine eigene potentialfreie Stromversorgung, deren Masseanschluss (Floating Ground) das Bezugspotential für den erdfreien Eingang darstellt. Man darf allerdings nicht übersehen, dass dieser Anschluss zwar galvanisch vom Nullpotential (System Ground) getrennt ist, jedoch noch kapazitiv gekoppelt ist. Diese Kopplung kommt hauptsächlich durch die Kapazität $C_S$ des Stromversorgungs-Transformators zustande, wie man in Abb. 18.12 erkennt. Um sie klein zu halten, verwendet man zweckmäßigerweise statt eines Netztransformators einen HF-Transformator den man mit einigen 100 kHz betreibt. Auf diese Weise lassen sich Koppelkapazitäten unter $C_S < 10\,\mathrm{pF}$ erreichen.

Wenn beide Eingänge hochohmig sind, kann selbst der verkleinerte kapazitive Störstrom noch beträchtliche Spannungsfehler am Floating-Ground-Anschluss verursachen. In solchen Fällen kann es vorteilhaft sein, die Signalquelle am Floating-Ground anzuschließen und das Eingangssignal an den beiden Eingängen eines Subtrahierers nach Abb. 18.4 anzuschließen. Dann sind beide Messleitungen stromlos. Den Subtrahierer versorgt man
<!-- page-import:1092:end -->

<!-- page-import:1093:start -->
1056  18. Messschaltungen

**Abb. 18.13.** Optische Übertragung eines Analogwertes

aus der potentialfreien Stromversorgung. Dabei lässt sich die verbleibende Gleichtaktaussteuerung gegenüber dem Floating-Ground meist klein halten, wenn man diesen an einem geeigneten Punkt des Messobjektes anschließt.

Die Frage ist nun, wie man ein Messsignal elektrisch isoliert zum Demodulator überträgt. Dafür gibt es drei Möglichkeiten: Transformatoren, Optokoppler oder Koppelkondensatoren. Bei der Übertragung mit Transformatoren oder Kondensatoren muss das Signal auf einen Träger mit genügend hoher Frequenz moduliert werden (Amplituden- oder Tastverhältnismodulation). Mit Optokopplern kann man dagegen auch Gleichspannungen unmittelbar übertragen. Bei hohen Genauigkeitsforderungen kann man das Analogsignal auch direkt auf der Floating-Ground-Seite digitalisieren und die Digitalwerte mit Optokopplern auf die Empfängerseite übertragen.

Eine Möglichkeit zur optischen Analogübertragung zeigt Abb. 18.13. Um den Linearitätsfehler des Optokopplers auszugleichen, wird mit Hilfe des Operationsverstärkers OV1 der Strom durch die Leuchtdioden so geregelt, dass der Fotostrom in dem Referenzempfänger T$_1$ gleich dem Sollwert ist. Die Gegenkopplungsschleife wird dabei über den Referenzkoppler geschlossen, und wir erhalten:

$$
I_{F1} = \frac{U_e}{R_1} + \frac{U_f^+}{R_3}
$$

Da der Fotostrom sein Vorzeichen nicht ändern kann, überlagert man einen konstanten Anteil $U_f^+/R_3$, um auch bipolare Eingangssignale verarbeiten zu können. Wenn die beiden Optokoppler gute Gleichlaufeigenschaften besitzen ergibt sich die Ausgangsspannung die Ausgangsspannung:

$$
U_a = \left(I_{F2} - \frac{U_s^+}{R_3}\right) R_1 = U_e
\qquad \text{für} \qquad
I_{F2} = I_{F1}
\qquad \text{und} \qquad
U_f^+ = U_s^+
$$

Ein Nachteil des Isolationsverstärker in Abb. 18.13 ist der Ruhestrom, den man durch die Optokoppler fließen lassen muss, um den Signalnullpunkt in die Mitte des Arbeitsbereichs zu verlegen. Diesen Nachteil besitzt die Schaltung in Abb. 18.14 nicht. Hier fließt ohne Eingangssignal nur ein kleiner Ruhestrom durch beide Leuchtdioden, dessen Größe durch den Operationsverstärker am Eingang bestimmt wird.
<!-- page-import:1093:end -->
