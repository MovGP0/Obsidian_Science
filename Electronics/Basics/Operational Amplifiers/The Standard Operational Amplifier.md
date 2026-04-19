# The Standard Operational Amplifier

<!-- page-import:0550:start -->
5.2 Der normale Operationsverstärker (VV-OPV) 513

a Nichtinvertierender Verstärker

b Invertierender Verstärker

**Abb. 5.5.** Gegenkopplung von normalen VV-Operationsverstärkern

$$
I_a = S_D U_D = k_I I_q
$$
(5.7)

wird durch die Steilheit bestimmt. Einfacher ist es jedoch meist, mit dem Stromübertragungsfaktor

$$
k_I = \left.\frac{d\,I_a}{d\,I_q}\right|_{A P}
$$
(5.8)

zu rechnen, der je nach Typ zwischen $k_I = 1 \ldots 10$ liegt. Der Strom-Verstärker wird auch als Diamond-Transistor (Markenname von Texas Instruments) bezeichnet, weil er sich – wie wir in Abschnitt 5.8 noch sehen werden – in vielerlei Hinsicht wie ein idealer Transistor verhält.

Zur Berechnung von Schaltungen verwendet man vorteilhaft Modelle, die nicht die Transistoren der Schaltung beinhalten, sondern die Übertragungsgleichungen. Das sind im einfachsten Fall die in Abbildung 5.3 angegebenen Gleichungen. In vielen Fällen ist die Berechnung von Operationsverstärker-Schaltungen so einfach, dass man sie am schnellsten von Hand durchführt.

# 5.2 Der normale Operationsverstärker (VV-OPV)

## 5.2.1 Prinzip der Gegenkopplung

Es gibt zwei Möglichkeiten zur Gegenkopplung eines VV-Operationsverstärkers, die in Abbildung 5.5 gegenübergestellt sind. Gemeinsam ist, dass zur Gegenkopplung ein Teil des Ausgangssignals auf den invertierenden Eingang rückgekoppelt wird. Man kann einen gegengekoppelten Operationsverstärker als Regelkreis betrachten und die Gesetze der Regelungstechnik auf die Schaltung anwenden. Abbildung 5.6 zeigt einen allgemeinen Regelkreis. Der Sollwert ergibt sich aus der Führungsgröße durch Bewertung mit dem Führungsgrößenformer, hier dargestellt durch die Multiplikation mit $k_F$. Der Istwert ergibt sich aus der Ausgangsgröße durch Bewertung mit dem Regler, hier dargestellt durch die Multiplikation mit $k_R$. Die Differenz von Soll- und Istwert wird durch die Regelstrecke mit $A_D$ multipliziert. Aus der Beziehung für die Regelabweichung

$$
U_D = k_F U_e - k_R U_a
$$
(5.9)

folgen die Definitionen:

$$
k_F = \left.\frac{U_D}{U_e}\right|_{U_a=0}
\qquad \text{und} \qquad
k_R = -\left.\frac{U_D}{U_a}\right|_{U_e=0}
$$
(5.10)

Die Verstärkung des Regelkreises in Abb. 5.6 lässt sich aus der Beziehung $U_a = A_D\,U_D$ und (5.9) berechnen:
<!-- page-import:0550:end -->

<!-- page-import:0551:start -->
514  5. Operationsverstärker

**Abb. 5.6.** Darstellung eines gegengekoppelten Operationsverstärkers als Regelkreis

$$
A \;=\; \frac{U_a}{U_e} \;=\; \frac{k_F A_D}{1 + k_R A_D}
\;\overset{k_R A_D \gg 1}{\approx}\; \frac{k_F}{k_R}
\qquad (5.11)
$$

In einer Operationsverstärkerschaltung bildet der Operationsverstärker die Regelstrecke. Der Führungsgrößenformer und der Regler werden durch die äußere Beschaltung des Operationsverstärkers gebildet. Die Subtraktion erfolgt entweder durch den Differenzeingang des Operationsverstärkers oder durch die äußere Beschaltung.

### 5.2.1.1 Der nichtinvertierende Verstärker

Wenn man im allgemeinen Regelkreis in Abb. 5.6 den Sollwert gleich der Führungsgröße macht und den Regler mit einem Spannungsteiler realisiert, ergibt sich der nichtinvertierende Verstärker in Abb. 5.7. Zur qualitativen Untersuchung des Einschwingvorgangs lassen wir die Eingangsspannung von Null auf einen positiven Wert $U_e$ springen. Im ersten Augenblick ist die Ausgangsspannung noch Null und damit auch die rückgekoppelte Spannung. Dadurch tritt am Verstärkereingang die Spannung $U_D = U_e$ auf. Da diese Spannung mit der hohen Differenzverstärkung $A_D$ verstärkt wird, steigt $U_a$ schnell auf positive Werte an und damit auch die rückgekoppelte Spannung $k_R U_a$; dadurch verkleinert sich $U_D$. Die Tatsache, dass die Ausgangsspannungsänderung der Eingangsspannungsänderung entgegenwirkt, ist typisch für die Gegenkopplung. Man kann daraus folgern, dass sich ein stabiler Endzustand einstellen wird.

Zur quantitativen Berechnung des Endzustands geht man davon aus, dass die Ausgangsspannung so weit ansteigt, bis sie gleich der verstärkten Eingangsspannungsdifferenz ist.

$$
U_a \;=\; A_D U_D \;=\; A_D (U_P - k_R U_a)
\qquad (5.12)
$$

Durch Auflösen erhalten wir die Spannungsverstärkung:

$$
A \;=\; \frac{U_a}{U_e} \;=\; \frac{A_D}{1 + k_R A_D}
\;\approx\;
\begin{cases}
\frac{1}{k_R} & \text{für } k_R A_D \gg 1 \\[4pt]
A_D & \text{für } k_R A_D \ll 1
\end{cases}
\qquad (5.13)
$$

Darin bezeichnet man die Größe

$$
g \;=\; k_R A_D
\qquad (5.14)
$$

als Schleifenverstärkung bzw. Loop Gain. Wenn die Schleifenverstärkung $g \gg 1$ ist, kann man die Eins im Nenner von (5.13) vernachlässigen und erhält für die Verstärkung der gegengekoppelten Schaltung:
<!-- page-import:0551:end -->

<!-- page-import:0552:start -->
## 5.2 Der normale Operationsverstärker (VV-OPV)

515

a Regelungstechnisches Modell

b Nichtinvertierender Verstärker

**Abb. 5.7.** Regelungstechnische Betrachtung des nichtinvertierenden Verstärkers am Beispiel des VV-Operationsverstärkers

$$
A=\frac{U_a}{U_e}\approx\frac{1}{k_R}=1+\frac{R_N}{R_1}
$$

(5.15)

Sie wird in diesem Fall also nur durch die äußere Beschaltung und nicht durch den Operationsverstärker bestimmt. Aus (5.12) und (5.13) lässt sich auch die Größe der Eingangsspannungsdifferenz berechnen:

$$
U_D=U_e-k_RU_a=\frac{1}{1+k_RU_a}\,U_e=\frac{1}{1+g}\approx\frac{U_e}{g}
$$

Man sieht, dass die Eingangsspannungsdifferenz gering ist und umso kleiner wird, je größer die Schleifenverstärkung ist. Daraus folgt die wichtigste Regel zur Berechnung von Operationsverstärker-Schaltungen mit Gegenkopplung:

Die Ausgangsspannung eines Operationsverstärkers stellt sich so ein, dass die Eingangsspannungsdifferenz näherungsweise zu Null wird.

Mit dieser Regel lässt sich das Verhalten von Schaltungen mit Operationsverstärkern besonders einfach berechnen:

$$
U_e=\frac{R_1}{R_1+R_N}\,U_a
\quad\Rightarrow\quad
A=\frac{U_a}{U_e}=1+\frac{R_N}{R_1}
$$

**Abb. 5.8.**  
Auswirkung der Schleifenverstärkung auf die Verstärkung. Differenzverstärkung $|A_D|$. Verstärkung mit Gegenkopplung $|A|$. Die Zahlenwerte sind lediglich Beispiele.
<!-- page-import:0552:end -->

<!-- page-import:0554:start -->
5.2 Der normale Operationsverstärker (VV-OPV) 517

$a$ Regelungstechnisches Modell

$U_D = k_F U_e - k_R U_a$

$k_F = \dfrac{-R_N}{R_1 + R_N}$

$k_R = \dfrac{R_1}{R_1 + R_N}$

$b$ Invertierender Verstärker

virtuelle Masse

echte Masse

**Abb. 5.10.** Beschaltung eines Operationsverstärkers als invertierenden Verstärker am Beispiel des VV-Operationsverstärkers. Die hier eingetragenen Werte für $k_F$ und $k_R$ ergeben sich aus den Definitionen in (5.10).

und dort ein Testsignal einspeisen, wie in Abb. 5.9b dargestellt. Dann wird es zuerst mit $A_D$ und dann mit $k_R$ verstärkt; die Schleifenverstärkung hat aber auch in diesem Fall den Wert $g = k_R A_D$. Diese Überlegungen sollen lediglich den Namen Schleifenverstärkung erklären; zur Messung eignen sie sich aber nicht. Sobald man die Gegenkopplungsschleife auftrennt, geht der Ausgang des Operationsverstärkers wegen der unvermeidlichen Offsetspannung, die in Abschnitt 5.5.2 noch erklärt wird, in die Übersteuerung; dort ist aber $A_D = 0$.

Die Schleifenverstärkung lässt sich aber in der geschlossenen Schleife messen. Dazu legt man eine Spannung $U_e$ an den Eingang der Schaltung und misst $U_N$ und $U_e$ in Abb. 5.7b. Daraus ergibt sich die Schleifenverstärkung:

$$
g = \frac{U_N}{U_D} = \frac{U_N}{U_e - U_N} = \frac{k_R U_a}{U_D} = \frac{k_R U_a}{U_a / A_D} = k_R A_D
\qquad (5.18)
$$

Entsprechend kann man auch die Differenzverstärkung messen. Die Definition

$$
A_D = \frac{U_a}{U_D} = \frac{U_a}{U_e - U_N}
\qquad (5.19)
$$

gilt auch in der gegengekoppelten Schaltung. Diese Methode zur Messung der Differenz- und Schleifenverstärkung ist insbesondere im Schaltungssimulator vorteilhaft, weil man dort auch die Frequenzgänge darstellen kann.

### 5.2.1.2 Der invertierende Verstärker

Neben der Beschaltung in Abb. 5.7 gibt es eine zweite fundamentale Möglichkeit, einen Operationsverstärker als Verstärker gegenzukoppeln. Dabei muss die Rückkopplung natürlich nach wie vor vom Ausgang zum invertierenden Eingang führen, damit sich eine Gegenkopplung und keine Mitkopplung ergibt. Man kann aber die Eingangsspannung statt am nichtinvertierenden Eingang am Fußpunkt des Gegenkopplungsspannungsteilers anschließen. Dann ergibt sich die in Abb. 5.10 dargestellte Schaltung. Setzt man $k_F$ und $k_R$ in (5.11) ein, erhält man

$$
A = \frac{U_a}{U_e} = \frac{k_F A_D}{1 + k_R A_D}
= \frac{\frac{-R_N}{R_1 + R_N} A_D}{1 + \frac{R_1}{R_1 + R_N} A_D}
\overset{k_R A_D \gg 1}{\approx} -\frac{R_N}{R_1}
\qquad (5.20)
$$
<!-- page-import:0554:end -->

<!-- page-import:0556:start -->
5.2 Der normale Operationsverstärker (VV-OPV) 519

**Abb. 5.11.**  
Einfacher Operationsverstärker mit Dimensionierungsbeispiel. Ruhepotentiale sind eingetragen. Daneben Kleinsignalmodell der Schaltung. HIP = Hochimpedanzpunkt

## 5.2.2 Einfache Spannungsverstärkung

Ein VV-Operationsverstärker soll verschiedene Forderungen erfüllen; die wichtigsten sind:

– Gleichspannungskopplung  
– Differenzeingang  
– Hohe Differenzverstärkung  
– Eingangs- und Ausgangsruhepotential Null  
– Eingänge hochohmig  
– Ausgang niederohmig  
– Geeignet für niedrige Betriebsspannungen  
– Keine Schwingneigung bei Gegenkopplung

Operationsverstärker kann man mit Bipolartransistoren, Feldeffekttransistoren bzw. Mosfets oder einer Kombination von beiden aufbauen. Für die folgende Darstellung werden wir bevorzugt Bipolartransistoren verwenden. Sie besitzen bei gleichem Strom eine größere Steilheit als Feldeffekttransistoren und ermöglichen damit größere Bandbreiten. Hinzu kommt noch ein didaktischer Grund: Bei der Schaltungsanalyse kann man von einer Basis-Emitter-Spannung von $U_{BE} = 0{,}6\ \mathrm{V}$ ausgehen und damit leicht alle Ruhepotentiale angeben. Bei allen Schaltungen kann man die Bipolartransistoren durch Mosfets ersetzen, ohne die Funktionsweise zu verändern. Wir wollen dies nur in einigen Fällen zeigen.

### 5.2.2.1 Einfache Verstärker

In diesem Kapitel werden einige Begriffe benötigt, die im Kapitel über Transistoren beschrieben wurden. Die wichtigsten Größen für Bipolartransistoren sind hier noch einmal zusammengestellt:  
– Temperaturspannung: $U_T = 25\ \mathrm{mV}$  
– Early-Spannung: $U_A = 100\ \mathrm{V}$  
– Stromverstärkung: $\beta = 100$  
– Steilheit: $S = I_C/U_T = 1/r_S$  
– Ausgangswiderstand: $r_{CE} = U_A/I_C$  
– Leerlaufverstärkung: $\mu = S\ r_{CE} = U_A/U_T \approx 4000$

Die einfachste Möglichkeit zur Realisierung eines normalen Operationsverstärkers besteht darin, einen Differenzverstärker am Eingang mit einem Emitterfolger am Ausgang zu kombinieren. Diese Möglichkeit zeigt Abb. 5.11. Das eingetragene Ruhepotential von 0 V am Ausgang lässt sich bei der offenen Schaltung nicht gewährleisten; es ergibt sich erst, wenn man den Verstärker gegenkoppelt. Dann stellt sich ein Arbeitspunkt ein, der zu
<!-- page-import:0556:end -->

<!-- page-import:0557:start -->
520  5. Operationsverstärker

a Invertierender Verstärker

b Ausgangsaussteuerbarkeit

**Abb. 5.12.** Einfacher Operationsverstärker als invertierender Verstärker. Problem: geringe negative Ausgangsaussteuerbarkeit

einem Ruhepotential am Ausgang nahe 0 V führt. Das ist nicht nur hier so, sondern bei allen Operationsverstärkern.

Ein weiteres Kriterium für die Qualität eines Operationsverstärkers ist die Ausgangsaussteuerbarkeit. Hier ist die positive Grenze durch den minimalen Spannungsabfall an der Stromquelle $I_1$ mit 0,2 V und die Basis-Emitter-Spannung von $T_3$ mit 0,6 V gegeben:

$$U_{a,max} = 5\ \mathrm{V} - 0{,}2\ \mathrm{V} - 0{,}6\ \mathrm{V} = 4{,}2\ \mathrm{V}$$

Die negative Grenze ergibt sich hier durch die Sättigung von $T_2$:

$$U_{a,min} = U_N - 0{,}4\ \mathrm{V} - 0{,}6\ \mathrm{V} = U_N - 1\ \mathrm{V}$$

Wenn man den Operationsverstärker gemäß Abb. 5.12 als invertierenden Verstärker betreibt, ist $U_N = 0$. Dann ist die negative Aussteuerbarkeit auf $U_{a,min} = -1\ \mathrm{V}$ beschränkt.

Eine gute Ausgangsaussteuerbarkeit ergibt sich jedoch, wenn man die Schaltung als nicht-invertierenden Verstärker voll gegenkoppelt wie in Abb. 5.13. Dann erhöht sich die Aussteuerbarkeit bis auf 0,8 V an die Betriebsspannungen, weil alle Potentiale in der Schaltung der Eingangsspannung folgen.

Neben der Aussteuerbarkeit am Ausgang ist auch die Aussteuerbarkeit am Eingang eine wichtige Eigenschaft eines Operationsverstärkers. Allgemein bezeichnet man das arithmetische Mittel der Eingangsspannungen als *Gleichtaktspannung*:

a Nichtinvertierender Verstärker

b Ausgangsaussteuerbarkeit

**Abb. 5.13.** Der einfache Operationsverstärker als Spannungsfolger (Closed-Loop Buffer)
<!-- page-import:0557:end -->

<!-- page-import:0558:start -->
## 5.2 Der normale Operationsverstärker (VV-OPV) 521

**Abb. 5.14.** Operationsverstärker mit Stromspiegel zur Vergrößerung der Gleichtakt- und Ausgangsaussteuerbarkeit. $HIP$ = Hochimpedanzpunkt. Dimensionierungsbeispiel: $I_0 = 100\,\mu \mathrm{A}$

$$
U_{Gl}=\frac{1}{2}(U_P+U_N)
\qquad\qquad (5.24)
$$

In einer gegengekoppelten Schaltung stellt sich die Ausgangsspannung so ein, dass die Eingangsspannungsdifferenz zu Null wird. Dann ist $U_{Gl}\approx U_P\approx U_N$. Man bezeichnet den Eingangsspannungsbereich, in dem der Differenzverstärker Eingang normal arbeitet als *Gleichtaktaussteuerbarkeit*. Bei dem Spannungsfolger in Abb. 5.13 ist sie groß, weil alle Potentiale in der Schaltung dem Eingangspotential folgen. Im Normalfall ist die positive Gleichtaktaussteuerbarkeit bei der Schaltung in Abb. 5.11 aber auf $U_{Gl}=0{,}4\,\mathrm{V}$ beschränkt, weil sonst der Transistor $T_2$ in die Sättigung geht.

Um die Ausgangs- und Gleichtaktaussteuerbarkeit des einfachen Operationsverstärkers in Abb. 5.11 für allgemeine Anwendungen zu verbessern, muss man das Nutzsignal zunächst bis in die Nähe der Betriebsspannung verschieben. Dann hat man die Möglichkeit, in einer 2. Verstärkerstufe von der positiven bis zur negativen Betriebsspannung auszusteuern. Dazu dient der Stromspiegel $T_3, T_4$ in Abb. 5.14. Der Kollektor von $T_4$ kann hier von $+4{,}8\,\mathrm{V}$ bis $-4{,}8\,\mathrm{V}$ ausgesteuert werden, also bis auf $0{,}2\,\mathrm{V}$ an die Betriebsspannungen. Damit ergibt sich eine Ausgangsaussteuerbarkeit von $-4{,}8\,\mathrm{V}<U_a<4{,}2\,\mathrm{V}$.

Die Gleichtaktaussteuerbarkeit am Eingang hat sich ebenfalls vergrößert. Die untere Grenze der Gleichtaktaussteuerung ist erreicht, wenn der Spannungsabfall an $I_0$ nur noch $0{,}2\,\mathrm{V}$ beträgt; das ist hier bei einer Gleichtaktspannung $U_{Gl}=U_P=U_N=-4{,}2\,\mathrm{V}$ der Fall. Die obere Grenze ist erreicht, wenn der Transistor $T_2$ in die Sättigung geht; das ist bei einem Emitterpotential von $4{,}2\,\mathrm{V}$ der Fall; die zugehörige Eingangsspannung beträgt dann $4{,}8\,\mathrm{V}$. Damit erhält man den Gleichtaktaussteuerbereich $-4{,}2\,\mathrm{V}<U_{Gl}<4{,}8\,\mathrm{V}$.

Zur Berechnung der Spannungsverstärkung des Operationsverstärkers in Abb. 5.11 ist es zweckmäßig, das Kleinsignalmodell der Schaltung in Abb. 5.15 zu betrachten. Die Emitter des Differenzverstärkers sind über ihre Steilheitswiderstände $r_S=U_T/I_C$ miteinander verbunden. Wenn man eine Differenzspannung anlegt, fließt darüber der Strom $I_q=U_D/(2r_S)$, der in der Schaltung und im Modell eingezeichnet ist. Dieser Strom fließt durch die Parallelschaltung des Ausgangswiderstands von $T_2$ und der Stromquelle $I_1$ und den Eingangswiderstand von $T_3$. Dies ist der Punkt des Operationsverstärkers, der den höchsten Innenwiderstand besitzt; deshalb wird er als *Hochimpedanzpunkt* bezeichnet und im Modell durch den Widerstand $r_{HIP}$ repräsentiert. Die Steilheit des Differenzverstärkers am Eingang beträgt:
<!-- page-import:0558:end -->

<!-- page-import:0559:start -->
522  5. Operationsverstärker

**Abb. 5.15.**  
Modell für den einfachen Operationsverstärker. Beispiel für $I_0 = 100\ \mu\text{A}$

$$
S \;=\; \frac{I_q}{U_D} \;=\; \frac{1}{2r_S} \qquad \text{hier} \qquad =\; 2\,\frac{\text{mA}}{\text{V}}
$$

Der Kondensator $C_{HIP}$ fasst die Kapazitäten am Hochimpedanzpunkt zusammen. Damit lässt sich der Frequenzgang der Differenzverstärkung berechnen:

$$
A_D \;=\; \frac{U_a}{U_D} \;=\; S\,\frac{r_{HIP}/(sC_{HIP})}{R + 1/(sC_{HIP})}
\;=\; S\,\frac{r_{HIP}}{1 + j\omega\, r_{HIP}\, C_{HIP}}
\qquad (5.25)
$$

Daraus ergibt sich die Verstärkung für niedrige Frequenzen:

$$
A_{D0} \;=\; S\,r_{HIP} \qquad \text{hier} \qquad
=\; 2\,\frac{\text{mA}}{\text{V}} \cdot 500\,\text{k}\Omega \;=\; 1000
$$

Aus der Definition der Grenzfrequenz

$$
\left|\frac{A_D}{A_{D0}}\right|^2
\;=\;
\frac{1}{1 + \omega^2 r_{HIP}^2 C_{HIP}^2}
\;=\; \frac{1}{2}
$$

folgt:

$$
f_{g1} \;=\; \frac{1}{2\pi\, r_{HIP}\, C_{HIP}}
\qquad \text{hier} \qquad
=\; \frac{1}{2\pi \cdot 500\,\text{k}\Omega \cdot 3{,}2\,\text{pF}}
\;=\; 100\,\text{kHz}
$$

Wichtiger als die Grenzfrequenz ist die Transitfrequenz $f_T$ eines Operationsverstärkers. Das ist die Frequenz, bei der die Verstärkung auf $|A_D| = 1$ abgesunken ist. Wir können sie ebenfalls aus (5.25) berechnen. Für hohe Frequenzen folgt:

$$
A_D \;=\; S\,\frac{1}{j\omega\, C_{HIP}}
\qquad \Rightarrow \qquad
|A_D| \;=\; S\,\frac{1}{\omega_T\, C_{HIP}}
\;=\; 1
$$

Daraus ergibt sich die Transitfrequenz:

$$
f_T \;=\; S\,\frac{1}{2\pi\, C_{HIP}}
\qquad \text{hier} \qquad
=\; 2\,\frac{\text{mA}}{\text{V}} \,\frac{1}{2\pi \cdot 3{,}2\,\text{pF}}
\;=\; 100\,\text{MHz}
$$

Es ist kein Zufall, dass die Transitfrequenz 1000 mal so hoch ist wie die Grenzfrequenz des Operationsverstärkers, denn es handelt sich um einen Tiefpass 1. Ordnung. Daher gilt:

**Abb. 5.16.**  
Frequenzgang der Differenzverstärkung gemäß dem Modell in Abb. 5.11
<!-- page-import:0559:end -->

<!-- page-import:0560:start -->
5.2 Der normale Operationsverstärker (VV-OPV) 523

**Abb. 5.17.** Praktische Ausführung des einfachen Operationsverstärkers

$$
f_T = f_g\, A_{D0}
\qquad\qquad\qquad (5.26)
$$

Der Kollektorstrom von $T_2$ in Abb. 5.14 lässt sich zusätzlich nutzen, wenn man ihn mit Stromspiegeln zum Ausgangssignal hinzufügt. Dazu dienen die Stromspiegel $T_5, T_6$ und $T_7, T_8$ in Abb. 5.17. Dadurch verdoppelt sich der Signalstrom am Ausgang und damit auch die Differenzverstärkung des Operationsverstärkers. Zusätzlich ergibt sich der Vorteil, dass die Schaltung für beliebige Ruheströme $I_0$ funktioniert, weil sich der Strom am Ausgang kompensiert, wie man in der Schaltung erkennt. Den Impdanzwandler am Ausgang haben wir hier nur symbolisch eingezeichnet, weil wir die verschiedenen Möglichkeiten im folgenden noch erklären wollen. Ein einfacher Emitterfolger, den wir bisher eingezeichnet hatten, ist für praktische Anwendungen ungeeignet, weil sein maximaler Ausgangsstrom nicht größer ist als sein Ruhestrom.

#### 5.2.2.2 Endstufen für Operationsverstärker

Man erwartet, dass Operationsverstärker Ausgangsströme liefern, die groß gegenüber dem Ruhestrom sind. Einfache Emitterfolger wie in Abb. 5.11 können zwar große Ströme liefern, aber lediglich kleine Ströme aufnehmen. Deshalb benötigt man am Ausgang von Operationsverstärkern komplementäre Emitterfolger, im AB-Betrieb, die diese Einschränkung nicht besitzen. Sie werden in Kapitel 4.1.5.3 auf Seite 404 ausführlich beschrieben. Man schließt sie – wie in Abb. 5.18 symbolisch dargestellt – am Hochimpedanzpunkt des Operationsverstärkers an. Die Endstufen-Transistoren $T_1$ und $T_2$ in Abb. 5.18 stellen den komplementären Emitterfolger dar, die vorgeschalteten Emitterfolger $T_3$ und $T_4$ dienen zur Arbeitspunkteinstellung und sorgen für definierte Ruheströme.

Wegen der zweifachen Impedanzwandlung multiplizieren sich die Stromverstärkungen, so dass man Werte von $\beta_1 \cdot \beta_3 = 10.000$ erhält. Um diesen Faktor erscheint auch ein am Ausgang angeschlossener Lastwiderstand am Hochimpedanzpunkt vergrößert. Der Widerstand $r_{HIP}$ in Abb. 5.15 steht symbolisch für alle am Hochimpedanzpunkt angeschlossenen Lasten; dazu gehört neben den Ausgangswiderständen von $T_5$ und $T_6$ auch der transformierte Lastwiderstand.

Die Stromquellen $I_1$ müssen nicht nur die Ruheströme von $T_3$ und $T_4$ bereitstellen, sondern auch die Basisströme für die Endstufentransistoren $T_1, T_2$ und die Umladeströme für die Kapazitäten (siehe Abb. 5.61). Deshalb darf man sie nicht zu niedrig wählen. Allerdings addieren sie sich zur Stromaufnahme des übrigen Operationsverstärkers. Die Ströme $I_1$ werden auf die Endstufentransistoren gespiegelt. Wenn sie ebenfalls die Größe $A = 1$ besitzen, fließt dort also auch der Ruhestrom $I_1$. Wegen der Strombelastbarkeit
<!-- page-import:0560:end -->

<!-- page-import:0561:start -->
524  5. Operationsverstärker

Verstärker

Endstufe

**Abb. 5.18.** Komplementäre Emitterfolger als Impedanzwandler am Ausgang des Operationsverstärkers aus Abb. 5.17. Transistorgröße $A = 1$, wenn nicht anders vermerkt.  
Vorteil: zweifache Impedanzwandlung am Ausgang  
Nachteil: Kompromiss für die Größe des Stroms $I_1$

von $T_1$ und $T_2$ kann es notwendig werden, die relative Transistorgröße $A > 1$ zu wählen; dann vergrößert sich auch der Ruhestrom durch diese Transistoren. Die Stromverstärkung der Endstufentransistoren bleibt dadurch aber unverändert, die Ruheströme $I_1$ lassen sich dadurch nicht reduzieren. Wenn man die Übersetzung des Ruhestroms durch große Endstufentransistoren nicht wünscht, kann man die Größe der Treibertransistoren $T_3, T_4$ ebenfalls auf die Größe von $T_1, T_2$ erhöhen.

Bei der Schaltung in Abb. 5.19a sind die Transistoren $T_3, T_4$ zur Vorspannungserzeugung als Transdioden geschaltet. Sie bewirken hier also keine zusätzliche Impedanzwandlung. Die Transistoren $T_5, T_6$ des davor liegenden Operationsverstärkers liefern den Ruhestrom für die Transdioden und die Endstufentransistoren. Der Vorteil dieser Anordnung besteht aber im wesentlichen darin, dass der Strom $I_q$ an die Endstufentransistoren weitergeleitet wird. Wenn man den Differenzverstärker am Eingang im AB-Betrieb betreibt wie in Abb. 5.30, kann $I_q \gg I_0$ werden. Dadurch werden die Umladevorgänge der parasitären Kapazitäten in der Endstufe bei großen Eingangsspannungsdifferenzen stark beschleunigt.

Die günstigste Lösung stellt Abb. 5.19b dar. Sie kombiniert die Vorteile von Abb. 5.18 und Abb. 5.19a. Die Transistoren $T_3$ und $T_4$ arbeiten als Emitterfolger und bewirken zusammen mit den Endstufentransistoren $T_1$ und $T_2$ eine 2-fache Impedanzwandlung. Der benötigte Strom $I_1$ wird aber nicht separat erzeugt, sondern es wird $I_0 \pm I_q$ mit den Transistoren $T_7$ und $T_8$ ein zweites Mal gespiegelt. Wenn sich der Strom durch $T_5$ erhöht, um die Ausgangsspannung zu erhöhen, steigt auch der Strom durch $T_7$ und stellt zusätzlichen Basisstrom für $T_1$ bereit.

Eine weitere Variante für die Endstufe eines Operationsverstärkers ist die Rail-to-Rail Endstufe, deren Aufbau in Abb. 5.43 beschrieben wird. Sie arbeitet ebenfalls im AB-Betrieb, ermöglicht aber eine Aussteuerbarkeit bis dicht an die Betriebsspannungen. Bei den hier behandelten komplementären Emitterfolgern liegt sie um 0,8 V darunter.
<!-- page-import:0561:end -->

<!-- page-import:0562:start -->
5.2 Der normale Operationsverstärker (VV-OPV) 525

a Transdioden

b Transdioden und Emitterfolger

**Abb. 5.19.** Impedanzwandler mit Beschleunigung der Basisansteuerung der Endstufentransistoren durch Ausnutzung des Signalstroms $I_q$. Als Verstärker am Eingang kann z.B. die Schaltung von Abb. 5.18 mit den Transistoren $T_5$ und $T_6$ am Ausgang dienen.  
Vorteile: $I_0$ bestimmt auch den Ruhestrom in der Endstufe  
$\,\,\,\,\,\,\,\,\,\,I_q$ unterstützt die Ansteuerung der Endstufe

### 5.2.2.3 Verstärker mit Kaskodeschaltung

Wenn man bei Anwendungen mit Operationsverstärkern eine hohe Genauigkeit benötigt, reicht eine Differenzverstärkung von $A_D \approx 1000$ der bisher beschriebenen Schaltungen nicht aus. Höhere Spannungsverstärkungen lassen sich erzielen, indem man den Innenwiderstand am Hochimpedanzpunkt $HIP$ des Verstärkers hinaus vergrößert. Dazu kann man eine Kaskodeschaltung einsetzen, die in Kapitel 4.1.2 auf S. 305 beschrieben wurde. Sie besitzt den Ausgangswiderstand $r_a = \beta r_{CE}$. Er ist demnach um die Stromverstärkung $\beta$ größer als bei einem einzelnen Transistor. Der zusätzliche Transistor $T_5$ in Abb. 5.20a bildet zusammen mit $T_4$ eine normale Kaskode, in Abb. 5.20b zusammen mit $T_2$ eine gefaltete Kaskode. Voraussetzung ist, dass die Stromquelle, die den Kollektorstrom von $T_5$ liefert, ebenfalls hochohmig ist; hier ist also ebenfalls eine Kaskodeschaltung erforderlich. Bei einem Kollektorstrom von $I_0 = 100\,\mu\mathrm{A}$ beträgt der Innenwiderstand am Hochimpedanzpunkt:

a normale Kaskode

b gefaltete Kaskode

**Abb. 5.20.** Kaskodeschaltung zur Erhöhung der Differenzverstärkung. $HIP$ = Hochimpedanzpunkt
<!-- page-import:0562:end -->

<!-- page-import:0563:start -->
526 5. Operationsverstärker

**Abb. 5.21.**  
Modell des Operationsverstärkers mit Kaskode; Daten für $I_0 = 100\,\mu\mathrm{A}$

**Abb. 5.22.**  
Frequenzgang der Verstärkung. Zum Vergleich Operationsverstärker ohne Kaskode

$$
r_{HIP} \;=\; \frac{1}{2}\,\beta\,r_{CE}
\;=\; \frac{\beta}{2}\,\frac{U_A}{I_C}
\;=\; \frac{100}{2}\cdot\frac{100\,\mathrm{V}}{100\,\mu\mathrm{A}}
\;=\; 50\,\mathrm{M}\Omega
$$

Der Unterschied im Kleinsignalmodell in Abb. 5.21 besteht im Vergleich zu Abb. 5.15 lediglich darin dass der Widerstand am Hochimpedanzpunkt $r_{HIP}$ hier den 100-fachen Wert besitzt. Auf diese Weise ist es aber möglich, mit einer einzigen Verstärkerstufe eine Spannungsverstärkung von $A_{D0}=10^5$ zu erreichen, wie man in Abb 5.22 sieht. Die Transitfrequenz des Operationsverstärkers wird durch die Kaskodeschaltung nicht erhöht, weil die Verstärkung bei hohen Frequenzen durch $C_{HIP}$ bestimmt wird; $r_{HIP}$ ist demgegenüber hochohmig.

**Abb. 5.23.** Praktische Ausführung eines Operationsverstärkers mit Kaskode-Schaltung
<!-- page-import:0563:end -->

<!-- page-import:0564:start -->
5.2 Der normale Operationsverstärker (VV-OPV) 527

**Abb. 5.24.**
Operationsverstärker
mit zweistufiger Span-
nungsverstärkung

Gleichzeitig ergibt sich der Vorteil, dass eine einzige Verstärkerstufe auch nur Phasenverschiebungen von $-90^\circ$ bewirkt; deshalb ist eine Frequenzgangkorrektur gegen die Schwingneigung bei Gegenkopplung hier meist nicht erforderlich.

Natürlich wird man in der Praxis beide Kollektorströme des Differenzverstärkers gemäß Abb. 5.23 nutzen. Dazu dient der zusätzliche Stromspiegel $T_6, T_7$ am Kollektor von $T_2$. Die Transistoren $T_8$ bis $T_{11}$ bilden einen Kaskode-Stromspiegel. Am Ausgang addieren sich die Nutzsignale $I_q$ und die Ruheströme $I_0$ subtrahieren sich.

## 5.2.3 Zweifache Spannungsverstärkung

### 5.2.3.1 Gebräuchliche Schaltungstechnik

Bei den bisher beschriebenen Operationsverstärkern gab es nur eine einzige Stufe, die eine Spannungsverstärkung bewirkt. Wenn man eine hohe Spannungsverstärkung benötigt, um eine hohe Schleifenverstärkung zu erreichen, kann man auch zwei Stufen zur Spannungsverstärkung einsetzen. Bei dem Operationsverstärker in Abb. 5.24 bilden die Transistoren $T_1$ und $T_2$ wieder den Differenzverstärker am Eingang. Damit die zweite Verstärkerstufe

**Abb. 5.25.** Operationsverstärker mit einem vereinfachten Schaltbild des uA741-Verstärkers.
Bei dem Original ist $I_0 = 10\,\mu\mathrm{A}$, $I_1 = 300\,\mu\mathrm{A}$ und $C_k = 30\,\mathrm{pF}$
Differenzverstärkung $A_{D0} = 100\,\mathrm{dB}$, Transitfrequenz $f_T = 1\,\mathrm{MHz}$
<!-- page-import:0564:end -->

<!-- page-import:0566:start -->
529

## 5.2 Der normale Operationsverstärker (VV-OPV)

**Abb. 5.27.** Operationsverstärkers der 741-Klasse. Frequenzgang der Differenzverstärkung beim Einsatz von modernen Transistoren.

bewirkt. Bei den im Modell eingetragenen Parametern besitzt die zweite Verstärkerstufe also die Verstärkung $A_2 = -500$. Damit erhält man insgesamt eine Verstärkung von:

$$
A_{D0} = \left|\frac{U_1}{U_D}\right| \cdot \left|\frac{U_2}{U_1}\right| = 200 \cdot 500 = 100.000 = 10^5 \cong 100\,\mathrm{dB}
$$

Der Frequenzgang der Differenzverstärkung in Abb. 5.27 zeigt, dass die Verstärkung bei niedrigen Frequenzen $A_{D0} = 100\,\mathrm{dB}$ beträgt. Allerdings liegt die Grenzfrequenz hier wegen der Frequenzgangkorrektur lediglich bei $f_g = 200\,\mathrm{Hz}$ und die Transitfrequenz $f_t = 20\,\mathrm{MHz}$. Das ist also um einen Faktor 5 geringer als bei den Verstärkern mit Kaskodeschaltung. Bei dem Original uA741 Operationsverstärker sind diese Frequenzen sogar um noch um einen Faktor 20 schlechter, also $f_g = 10\,\mathrm{Hz}$ und $f_T = 1\,\mathrm{MHz}$. Die Ursache dafür sind langsame Transistoren mit großen Kapazitäten. Das größte Problem der 741-Familie ist aber, dass die Schaltung für niedrige Betriebsspannungen nicht geeignet ist.

### 5.2.3.2 Single-Supply-Verstärker

Der klassische Single-Supply Verstärker ist der LM324, dessen prinzipieller Aufbau in Abb. 5.28 dargestellt ist. Die Schaltung ist mit dem in Abb. 5.25 dargestellten Universalverstärker verwandt, besitzt jedoch einige Modifikationen, um eine Aussteuerbarkeit bis auf Nullpotential zu ermöglichen:

**Abb. 5.28.** Single-Supply-Verstärker LM324, schematischer Aufbau  
Differenzverstärkung: $A_D = 94\,\mathrm{dB}$, Transitfrequenz: $f_T = 1\,\mathrm{MHz}$
<!-- page-import:0566:end -->

<!-- page-import:0567:start -->
530  5. Operationsverstärker

**Abb. 5.29.** Single Supply CMOS-Operationsverstärker TLC274, schematischer Aufbau.  
Die Substrate der n-Kanal-Fets sind mit Nullpotential, die der p-Kanal-Fets mit der positiven Betriebsspannung verbunden.  
Differenzverstärkung: $A_D = 86\,\mathrm{dB}$, Transitfrequenz: $f_T = 1\,\mathrm{MHz}$

– Die Emitterfolger $T_5$ und $T_6$ wurden hinzugefügt, um das Emitterpotential des Differenzverstärkers um 0,6 V nach oben zu schieben. Dadurch beträgt die Kollektor-Emitter-Spannung des Differenzverstärkers selbst bei dem kritischen Fall mit 0 V Eingangsspannung, der hier eingetragen ist, noch 0,6 V.

– Die zweite Verstärkerstufe $T_7$ ist hier als einfache Emitterschaltung ausgeführt, damit sich ein Basisruhepotential von 0,6 V ergibt. Die DarlingtonschaItung in Abb. 5.25 hätte ein Ruhepotential von 1,2 V zur Folge; dadurch würde $T_2$ bei 0 V Eingangsspannung in die Sättigung gehen.

– Um eine Ausgangsaussteuerbarkeit bis nahe an 0 V zu ermöglichen, wird die Stromquelle $I_2$ hinzugefügt. Natürlich sperrt der Transistor $T_9$ bei Ausgangsspannungen unter 0,6 V, so dass der Ausgang in diesem Bereich nur Ströme aufnehmen kann, die kleiner als $I_2 = 50\,\mu\mathrm{A}$ sind.

Eine unangenehme Eigenschaft von Operationsverstärkern mit der Schaltungstechnik in Abb. 5.28 ist das *Phase-Reversal*. Dabei wird der nichtinvertierende Eingang zum invertierenden, wenn die Eingangsspannung unter $U_P = -0{,}4\,\mathrm{V}$ sinkt. Deshalb bevorzugt man die CMOS-Variante des Verstärkers, die in Abb. 5.29 dargestellt ist.

Wie der Vergleich mit Abb. 5.28 zeigt, ist der Aufbau sehr ähnlich. Die p-Kanal-Fets $T_1$ und $T_2$ bilden den Differenzverstärker. Beide Ausgangssignale werden über den Stromspiegel $T_3$ und $T_4$ zusammengefasst und an die zweite Verstärkerstufe $T_5$ weitergeleitet. Der Sourcefolger $T_7$ dient als Impedanzwandler. Ein Unterschied besteht hier lediglich in der Funktionsweise von $T_6$. Er arbeitet nicht als komplementärer Sourcefolger, sondern verstärkt das Signal in Sourceschaltung genau wie $T_5$. Dadurch ist dieser Transistor in der Lage, die Ausgangsspannung aktiv bis auf 0 V herunterzuziehen.

## 5.2.4 Breitband-Operationsverstärker

Um hohe Bandbreiten zu erreichen, ist es notwendig, die Transistor- und Schaltkapazitäten schnell umzuladen. Bei den bisher behandelten Operationsverstärkern ist der maximale Strom jedoch auf den Emitterstrom des Differenzverstärkers $I_{q,\max} = I_0$ begrenzt. Da $I_0$
<!-- page-import:0567:end -->

<!-- page-import:0568:start -->
5.2 Der normale Operationsverstärker (VV-OPV) 531

**Abb. 5.30.** Breitband-Operationsverstärker mit Gegentakt-Differenzverstärkern im AB-Betrieb mit Dimensionierungsbeispiel

meist die Stromaufnahme des ganzen Operationsverstärkers bestimmt, möchte man hier nur kleine Ströme einsetzen. Dieses Problem lässt sich lösen, indem man Differenzverstärker einsetzt, die im Gegentakt-AB-Betrieb arbeiten und nur bei Bedarf vorübergehend einen großen Strom aufnehmen. Deshalb wird diese Schaltungstechnik auch als *Current on demand* bezeichnet.

Die Transistoren $T_1$ bis $T_4$ und $T_5$ bis $T_8$ in Abb. 5.30 bilden zwei komplementäre Emitterfolger, die im AB-Betrieb arbeiten; ihre Funktion wird in Kapitel 4.1.5.3 auf Seite 404 beschrieben. Andererseits kann man die Transistoren $T_3$ und $T_7$ auch als einen Differenzverstärker mit npn-Transistoren und die Transistoren $T_4$ und $T_8$ als einen Differenzverstärker mit pnp-Transistoren betrachten. Bei kleinen Eingangsspannungsdifferenzen teilt sich der Strom $I_q \approx (U_P - U_N)/R_E$ zu gleichen Teilen auf die obere und die untere Hälfte der Schaltung auf. Dieser Fall ist in Abb. 5.30 eingetragen.

Bei großen Eingangsspannungsdifferenzen, die bei jedem Sprung der Eingangsspannung vorübergehend auftreten, kann $I_q > 2 I_0$ werden. Dann sperrt die untere Hälfte des Verstärkers und der ganze Strom wird über die obere Hälfte an den Ausgang übertragen. Auch in diesem Fall steht der Strom $I_q$ in voller Größe am Ausgang zur Verfügung, wie man in Abb. 5.31 sieht.

An dem Stromverlauf in Abb. 5.32 erkennt man diese Funktionsweise: Trotz des niedrigen Ruhestroms von $I_0 = 100\,\mu\text{A}$ stehen in diesem Beispiel bei jedem Umschaltvorgang hohe Stromspitzen von $I_q = 1\,\text{mA}$ zur Ansteuerung der Endstufe zur Verfügung. Es ist zwar etwas ungewöhnlich, einen Differenzverstärker aus zwei komplementären Emitterfolgern aufzubauen und das Ausgangssignal über die Betriebsspannungsanschlüsse mit zwei komplementären Stromspiegeln auszukoppeln, aber diese Anordnung findet man bei allen Schaltungen, die im AB-Betrieb arbeiten.

Natürlich möchte man auch bei dieser Schaltung alle Signalströme der Eingangsschaltungen nutzen. Dazu kann man - wie Abb. 5.33 zeigt - die Kollektorströme des Impedanzwandlers am linken Eingang mit Stromspiegeln zu den vorhandenen Signalen hinzufügen. Dazu dienen die zusätzlichen Stromspiegel $T_{13}, T_{14}$ und $T_{15}, T_{16}$. Dadurch verdoppelt sich
<!-- page-import:0568:end -->

<!-- page-import:0569:start -->
532  5. Operationsverstärker

**Abb. 5.31.** Verhalten bei großen Eingangsspannungsdifferenzen für $I_q > 2 I_0$  
Dick eingezeichnet: Verlauf des Signalstroms

der Signalstrom am Eingang des Impedanzwandlers am Ausgang. Der Ruhestrom $2\ I_0$ kompensiert sich auch in diesem Fall.

Es ist hier wichtig, den AB-Betrieb nicht nur im Differenzverstärker am Eingang zu realisieren, sondern alle folgenden Stufen ebenfalls im AB-Betrieb zu betreiben. Dazu ist der Einsatz von Stromspiegeln zweckmäßig, denn sie begrenzen den Strom nicht. Deshalb stehen hier auch in der Endstufe die hohen Spitzenströme von $I_q$ Verfügung, um die Endstufen-Transistoren anzusteuern. Aus diesem Grund lassen sich die Schaltkapazitäten, die im Modell am Hochimpedanzpunkt in Abb. 5.34 zusammengefasst sind, bei großen Eingangsspannungsdifferenzen schnell umladen.

**Abb. 5.32.** Umschaltströme im Breitband-Operationsverstärker bei einem Ruhestrom von $I_0 = 100\,\mu\mathrm{A}$ in Abb. 5.30. Gegenkopplung für $A = 1$
<!-- page-import:0569:end -->

<!-- page-import:0570:start -->
533

## 5.2 Der normale Operationsverstärker (VV-OPV)

**Abb. 5.33.** Breitbandverstärker mit Nutzung der Signalströme von beiden Impedanzwandlern am Eingang. Die Transistoren für die beiden zusätzlichen Stromspiegel sind dick eingezeichnet.

Die Spannungsverstärkung soll an dem Modell in Abb. 5.34 erklärt werden. Die Spannungsfolger an den Eingängen besitzen jeweils den Ausgangswiderstand $r_S = U_T/I_0$; sie sind über den Widerstand $R_E$ gekoppelt. Damit erhält man:

$$
I_q = \frac{U_D}{R_E + r_S}
$$

Dieser Strom wird an den Hochimpedanzpunkt übertragen. Er bewirkt am Widerstand $r_{HIP} = U_A/(2\,I_0)$, der die Parallelschaltung aller Widerstände am Hochimpedanzpunkt repräsentiert, die Ausgangsspannung:

$$
U_a = 2\,r_{HIP}\,I_q = \frac{U_A}{2\,I_0}\,\frac{2\,U_D}{R_E + r_S}
$$

Für das Dimensionierungsbeispiel mit $R_E = 1\ \mathrm{k}\Omega$ erhält man dann die Spannungsverstärkung:

$$
A_D = \frac{U_A}{U_D} = \frac{U_A}{I_0}\,\frac{1}{R_E + r_S}
= \text{hier}\ \frac{100\ \mathrm{V}}{100\ \mu\mathrm{A}} \cdot \frac{1}{1\ \mathrm{k}\Omega + 250\ \Omega} = 800
$$

Wenn man $R_E$ verkleinert, lassen sich auch höhere Differenzverstärkungen erreichen. Für $R_E = 0$ ergibt sich eine Verstärkung von $A_D = 4000$. Der optimale Wert von $R_E$ ergibt sich aus der Sprungantwort des gegengekoppelten Verstärkers.

**Abb. 5.34.** Modell zur Erklärung der Spannungsverstärkung des Operationsverstärkers in Abb. 5.33
<!-- page-import:0570:end -->

<!-- page-import:0571:start -->
534  5. Operationsverstärker

a Normalbetrieb  
b Normaler OPV  
c Single-Supply OPV  
d Rail-to-Rail OPV

**Abb. 5.35.** Aussteuerbarkeit von Operationsverstärkern beim Betrieb mit niedrigen Betriebsspannungen

## 5.2.5 Niedrige Betriebsspannungen

Bei den bisherigen Betrachtungen sind wir von einer *symmetrischen* Betriebsspannung von ± 5 V ausgegangen. Operationsverstärker der 741-Klasse besitzen dann eine Gleichtakt- und Ausgangsaussteuerbarkeit von ca. ± 3 V. Dieser Sachverhalt ist in Abb. 5.35a dargestellt. Dabei ist die Begrenzung durch einen bestimmten Abstand zu den Betriebsspannungen gegeben, die hier 2 V beträgt.

Zunehmend besteht der Wunsch, einen Operationsverstärker aus einer einzigen Betriebsspannung von +5 V oder +3,3 V zu betreiben, weil diese Spannung zur Versorgung von digitalen Schaltungen in den meisten Fällen ohnehin vorhanden ist. Bei derart niedrigen Betriebsspannungen sind die alten Universalverstärker meist nicht mehr spezifiziert. Selbst wenn sie bei +5 V noch funktionieren würden, hätte man wenig Nutzen davon, weil sich die Aussteuerbarkeit dann, wie in Abb. 5.35b dargestellt, auf $2\ \mathrm{V} < U_{gl}, U_a < 3\ \mathrm{V}$ reduzieren würde.

Gleichzeitig verliert man beim Betrieb mit einer einzigen Betriebsspannung eine wichtige Eigenschaft der Operationsverstärker, die den Einsatz so einfach macht: Eingangs- und Ausgangsruhepotential Null. Man kann sich dadurch helfen, dass man ein zusätzliches positives Hilfspotential von der halben Betriebsspannung generiert und alle Spannungen darauf bezieht. Die Konsequenzen auf die Anwendung werden wir im nächsten Abschnitt behandeln.

Um mit niedrigen Betriebsspannungen arbeiten zu können, hat man die beschriebenen *Single-Supply-Verstärker* entwickelt, deren Gleichtakt- und Ausgangsaussteuerbarkeit die negative Betriebsspannung einschließt, wie man in Abb. 5.35c erkennt. Für viele Anwendungen ist es jedoch von Vorteil, wenn die Verstärker bis zur positiven und negativen Betriebsspannung aussteuerbar sind, wie in Abb. 5.35d gezeigt. Derartige Verstärker bezeichnet man als *Rail-to-Rail-Verstärker*. Ihre Schaltungstechnik wird im folgenden beschrieben.

### 5.2.5.1 Betrieb mit einer einzigen Betriebsspannungsquelle

Wenn man Rail-to-Rail Verstärker einsetzt, sind aber noch nicht alle Probleme gelöst, denn die Signale müssen sich innerhalb der Betriebsspannungen bewegen. Eine naheliegende Lösung besteht darin, mit Hilfe eines Spannungswandlers eine zusätzliche negative Betriebsspannung zu erzeugen. Abbildung 5.36a zeigt ein Beispiel. Ein Spannungswandler ist aber immer eine getaktete Schaltung, die hochfrequente Störungen an die Umgebung ausstrahlt. Darüber hinaus ist auch der zusätzliche Stromverbrauch in Batterie-betriebenen Geräten unerwünscht. Deshalb ist es günstiger, die halbe Betriebsspannung als Bezugspotential für alle Signale zu verwenden. Man sieht in Abb. 5.36b, dass die Spannung $U_{ref} = U_b/2$ im Aussteuerbereich liegt; sie kann deshalb die Rolle der Schaltungsmasse
<!-- page-import:0571:end -->

<!-- page-import:0572:start -->
## 5.2 Der normale Operationsverstärker (VV-OPV)

535

a Spannungswandler

b Rail Splitter

**Abb. 5.36.** Bezugspotential für Signale bei einer einzigen Betriebsspannung

übernehmen. Zur Erzeugung einer stabilen Referenzspannung kann man die Betriebsspannung halbieren und einen Impedanzwandler nachschalten. Es gibt dafür sogar eine spezielle Schaltung, den Rail Splitter TLE2426 von Texas Instruments. Für den Übergang von Dual-Supply- auf Single-Supply-Betrieb kann man die folgende Regel anwenden:

- Der bisherige negative Versorgungsspannungsanschluss wird an Masse angeschlossen.
- Der bisherige Masseanschluss wird an der Referenzspannung angeschlossen.

Diese Vorgehensweise ist am Beispiel eines invertierenden Verstärkers in Abb. 5.37 dargestellt. Abbildung 5.38 zeigt, wie man einen invertierenden und nichtinvertierenden Verstärker aufbauen kann, wenn man die Eingangs- und Ausgangssignale auf die Referenzspannung bezieht. Alle Signale werden dadurch am Eingang und Ausgang um $U_{ref}$ in positive Richtung in die Mitte des Aussteuerbereichs verschoben.

Das Bezugspotential $U_{ref}$ muss man nicht unbedingt zentral erzeugen wie in Abb. 5.36, sondern kann das auch lokal vornehmen. In Abb. 5.38 unten dient dazu der Spannungsteiler mit den beiden Widerständen $R_2$. In der Schaltung daneben übernehmen die beiden Widerstände $2R_1$ diese Aufgabe. Ihre Parallelschaltung bestimmt mit dem Wert $R_1$ die Spannungsverstärkung, ihre Reihenschaltung erzeugt die Referenzspannung. Die Ausgangsspannungen werden durch die lokale Erzeugung der Referenzspannungen nicht verändert.

a Positive und negative Betriebsspannung

b Eine einzige Betriebsspannung

**Abb. 5.37.** Umwandlung von Dual-Supply- auf Single-Supply-Betrieb
<!-- page-import:0572:end -->

<!-- page-import:0573:start -->
536 5. Operationsverstärker

$a$ Invertierender Verstärker

$$U_a - U_{ref} = -\frac{R_N}{R_1}(U_e - U_{ref})$$

$b$ Nichtinvertierender Verstärker

$$U_a - U_{ref} = \left(1 + \frac{R_N}{R_1}\right)(U_e - U_{ref})$$

**Abb. 5.38.** Single-Supply Verstärker mit Bezug auf die Referenzspannung als Bezugspotential.  
Oben: Zentrale Erzeugung der Referenzspannung, unten: Lokale Erzeugung

## 5.2.5.2 Rail-to-Rail-Verstärker

Bei Rail-to-Rail-Verstärkern erwartet man eine Aussteuerbarkeit von der negativen bis zur positiven Betriebsspannung. Bei Rail-to-Rail-Output-Verstärkern (RRO) bezieht sich diese Eigenschaft nur auf den Ausgang des Operationsverstärkers. Dies ist eine wichtige Voraussetzung für den Einsatz von Operationsverstärkern, um trotz niedriger Betriebsspannungen noch nennenswerte Ausgangssignale zu ermöglichen, wie wir in Abb. 5.35 gesehen haben. Ob man zusätzlich auch eine Gleichtaktaussteuerbarkeit benötigt, die die Betriebsspannungen (Rail-to-Rail-Input, RRI) einschließt, hängt von der jeweiligen Anwendung ab. Zunächst sollen die üblichen Schaltungstechniken von Rail-to-Rail-Input Verstärkern erklärt werden.

### 5.2.5.2.1 Rail-to-Rail-Input

Man sieht, dass bei den Single-Supply Operationsverstärkern in den Abb. 5.28 und 5.29 die Gleichtaktaussteuerbarkeit bis zur negativen Betriebsspannung möglich ist, aber nicht gleichzeitig bis zur positiven. Deshalb liegt es auf der Hand, bei einem Rail-to-Rail-Eingang einen Differenzverstärker mit npn- und pnp-Transistoren parallel zu schalten, von denen der eine bis zur positiven und der andere bis zur negativen Betriebsspannung aussteuerbar ist, und ihre Ausgangssignale zu kombinieren. Diese Methode zeigt Abb. 5.39. Der Differenzverstärker mit den pnp-Transistoren ist bis zur negativen Betriebsspannung aussteuerbar. Bei Gleichtaktspannungen in der Nähe der positiven Betriebsspannung sperrt er; in diesem Bereich arbeitet aber der parallelgeschaltete npn-Differenzverstärker. Die nachfolgenden Transistoren $T_5$ und $T_6$ kombinieren die Ausgangssignale der beiden Differenzverstärker. Die Realisierung eines Rail-to-Rail-Eingangs setzt natürlich voraus, dass die Kollektorruhepotentiale der Differenzverstärker am Eingang dicht bei den Betriebsspannungen liegen. Der Spannungsabfall von 0,6 V bei konventionellen Stromspiegeln ist
<!-- page-import:0573:end -->

<!-- page-import:0574:start -->
5.2 Der normale Operationsverstärker (VV-OPV) 537

Rail-to-Rail Eingang

Signal-Kombination

Impedanzwandler

Abb. 5.39. Komplementäre Differenzverstärker für einen Rail-to-Rail Eingang, Prinzip

zu groß. Deshalb setzt man hier Stromspiegel ein, die einen niedrigeren Spannungsabfall ermöglichen; sie werden in Abb. 5.40 mit normalen Stromspiegeln verglichen. Von der Stromquelle $2I_0$ wird hier der Eingangsstrom $I_1 = I_0 + I_q$ subtrahiert, sodass für den Ausgangsstrom $I_2 = I_0 - I_q$ übrig bleibt. Wegen der Subtraktion des Eingangsstroms wollen wir diesen Stromspiegel als subtraktiven Stromspiegel bezeichnen.

Normaler Stromspiegel

Subtraktiver Stromspiegel

Arbeitspunkt

Arbeitspunkt

Abb. 5.40. Vergleich von subtraktiven Stromspiegeln mit normalen.  
Jeweils: Eingang $I_1$ links, Ausgang $I_2$ rechts.
<!-- page-import:0574:end -->

<!-- page-import:0575:start -->
538 5. Operationsverstärker

Abb. 5.41. Praktische Ausführung eines Rail-to-Rail Eingangs. Beispiel: LTC6261  
Dimensionierungsbeispiel: $I_0 = 10\,\mu\mathrm{A}$

Wenn man für die Vorspannung $U_1 = 0{,}8\,\mathrm{V}$ wählt, ergibt sich ein Eingangspotential, das lediglich um 0,2 V unter der Betriebsspannung liegt. Das reicht für die Funktion der Stromquelle $2I_0$ gerade noch aus. Der Vorteil des subtraktiven Stromspiegels ist also der entscheidende Gewinn um 0,4 V für die Betriebsspannung der Differenzverstärker im Rail-to-Rail Eingang. Wenn man an den Eingängen in Abb. 5.39 eine Gleichtaktspannung von 5 V anlegt, ergibt sich an den Emittern des npn-Differenzverstärkers ein Potential von 4,4 V; ihre Kollektor-Emitter-Spannung beträgt also 0,4 V. Die Gleichtaktspannung kann daher die Betriebsspannung noch um 0,2 V überschreiten, bevor die Transistoren in die Sättigung gehen.

Der Vergleich der Kennlinien zeigt, dass der Ausgangsstrom beim subtraktiven Stromspiegel mit steigendem Eingangsstrom sinkt. Diese Vorzeichenumkehr ist aber bei Operationsverstärkern unkritisch. Dadurch vertauschen sich lediglich der invertierende und der nichtinvertierende Eingang. Schwerwiegender ist der Nachteil, dass der Ausgangsstrom beim subtraktiven Stromspiegel nicht größer als $2I_0$ werden kann. Den Ruhestrom $I_0$ möchte man klein halten, im AB-Betrieb aber Ströme übertragen, die dem gegenüber groß sind. Daher sind die subtraktiven Stromspiegel für Breitbandverstärker nicht geeignet. Es gibt nur die Alternative: Rail-to-Rail Eingang oder Breitbandverstärker. Man sollte deshalb einen Rail-to-Rail Eingang nur dann fordern, wenn eine Gleichtaktaussteuerung bis zu beiden Betriebsspannungen wirklich erforderlich ist.

Natürlich wird man auch bei dem Rail-to-Rail Verstärker in Abb. 5.39 die Kollektorströme der Transistoren $T_1$ und $T_3$ nicht ungenutzt lassen, sondern sie wie in Abb. 5.41 addieren. Dazu kehrt der Stromspiegel $T_9,T_{10}$ die Signalstromrichtung von $T_1,T_3$ um und fügt sie vorzeichenrichtig zu den Strömen von $T_2$ und $T_4$ hinzu. Die Größe der Ruheströme
<!-- page-import:0575:end -->

<!-- page-import:0576:start -->
5.2 Der normale Operationsverstärker (VV-OPV) 539

**Abb. 5.42.**  
Modell zur Berechnung der Spannungsverstärkung in Abb. 5.41

$I_0$ und der Signalströme $I_q$ haben wir an allen wichtigen Stellen eingetragen, damit sich das Verhalten leichter nachvollziehen lässt. Auch hier kompensieren sich die Ruheströme am Ausgang und das Ausgangssignal erhöht sich auf $4I_q$. Bei Gleichtaktspannungen im Bereich von $\pm 4{,}2\,\mathrm{V}$ arbeiten beide Differenzverstärker gemeinsam; darüber und darunter sperrt einer von beiden; dann halbiert sich die Steilheit der Rail-to-Rail-Eingangsstufe und damit auch ihre Spannungsverstärkung. In einer gegengekoppelten Schaltung, bei der die Verstärkung durch die äußere Beschaltung bestimmt wird, macht sich dieser Effekt jedoch selten bemerkbar.

Die Spannungsverstärkung der Rail-to-Rail-Eingangsschaltung lässt sich aus dem Modell in Abb. 5.41 berechnen. Der Signalstrom beträgt:

$$
I_q=\frac{U_D}{2r_S}=\frac{I_0}{2U_T}U_D
$$

Der Widerstand am Hochimpedanzpunkt ist hier sehr hoch weil eine Kaskodeschaltung vorliegt:

$$
r_{HIP}=\frac{\beta}{2}\frac{U_A}{I_0}\ \overset{I_0=10\,\mu\mathrm{A}}{=}\ \frac{100}{2}\cdot\frac{100\,\mathrm{V}}{10\,\mu\mathrm{A}}=500\,\mathrm{M}\Omega
$$

Damit lässt sich die Spannungsverstärkung der Eingangsschaltung berechnen:

$$
\frac{U_2}{U_D}=4I_qr_{HIP}=\beta\frac{U_A}{U_T}=400.000
$$

(5.27)

Derart hohe Werte erhält man hier in der Praxis aber nicht, wegen der niedrigen Kollektor-Emitter-Spannung bei einigen Transistoren in der Kaskodeschaltung in Abb. 5.41 Die erreichbare Spannungsverstärkung liegt in der Größenordnung von 100.000 $\hat{=}\,100\,\mathrm{dB}$. Bemerkenswert ist aber, dass der Ruhestrom $I_0$ auch hier nicht in die Spannungsverstärkung eingeht, wie man in (5.27) erkennt.

### 5.2.5.2.2 Rail-to-Rail-Output

Wir haben bisher am Ausgang der Operationsverstärker symbolisch einen Impedanzwandler eingezeichnet. Wenn man hier einen normalen komplementären Emitterfolger einsetzt, würde sich aber kein Rail-to-Rail-Ausgang ergeben; die Aussteuerungsgrenzen würden um mehr als $1\,\mathrm{V}$ unter den Betriebsspannungen liegen. Eine Rail-to-Rail-Endstufe lässt sich nur mit komplementären Transistoren realisieren, deren Emitter wie in Abb. 5.43 an den Betriebsspannungen angeschlossen sind. Durch den Betrieb in Emitterschaltung erzielt man eine Ausgangsaussteuerbarkeit, die bis dicht an die Betriebsspannungen reicht. Als minimalen Spannungsabfall erhält man in diesem Fall die Kollektor-Emitter-Sättigungsspannung $U_{CE,sat}$ von $T_7$ bzw. $T_8$, die bei kleinen Strömen nur wenige Millivolt beträgt. Die Ansteuerung der beiden Endstufentransistoren ist allerdings schwieriger, denn sie muss mannigfaltige Bedingungen erfüllen:

- die Endstufentransistoren ansteuern, deren Basisanschlüsse auf völlig verschiedenen Potentialen liegen;
<!-- page-import:0576:end -->

<!-- page-import:0577:start -->
540  5. Operationsverstärker

**Abb. 5.43.** Praktische Ausführung einer Rail-to-Rail Endstufe mit eingetragenen Ruhepotentialen und Ruheströmen. Die Schaltung auf der rechten Seite stellt ein internes Nullpotential bereit. Transistorgröße $A = 1$ wenn nicht anders vermerkt.  
Beispiel: $I_1 = 100\,\mu\text{A}$, Verstärkung: $A = U_a/U_2 \approx 2$

– einen konstanten Ruhestrom durch die Endstufentransistoren über den ganzen Aussteuerbereich gewährleisten;  
– einen Signalpfad zu beiden Ausgangstransistoren besitzen, der gleich lang ist, damit sie gleichzeitig auf das Nutzsignal reagieren;  
– bei Aussteuerung oder Belastung des Ausgangs definiert den Strom durch den einen Transistor erhöhen und den Strom durch den anderen Transistor verringern;  
– Ausgangsströme ermöglichen, die groß gegenüber dem Ruhestrom sind, also die Endstufentransistoren im AB-Betrieb betreiben;  
– einen niedrigen Ausgangswiderstand bereitstellen, für Operationsverstärker mit Spannungsausgang.

Es gibt eine Reihe verschiedener Schaltungen, um die beiden Endstufentransistoren anzusteuern. Die Schaltung in Abb. 5.43 erfüllt die obigen Forderungen besonders elegant. Um definierte Ströme durch die Endstufentransistoren $T_7$, $T_8$ zu ermöglichen, haben wir sie um die Transistoren $T_5$, $T_6$ zu Stromspiegeln ergänzt. Dadurch wird der Ruhestrom $I_1$ des komplementären Emitterfolgers auf die Endstufe übertragen. Um große Ausgangsströme zu ermöglichen, haben wir den Endstufentransistoren in diesem Beispiel die zehnfache Fläche $(A = 10)$ gegeben; die Stromspiegel besitzen dann eine Stromverstärkung von 10.

Zur Analyse der Endstufe gehen wir zunächst von dem Fall ohne Gegenkopplung, also $R_3 = \infty$, aus. Im Ruhezustand werden alle Ströme in der Endstufe durch $I_1$ bestimmt. Bei Aussteuerung des Spannungsfolgers $T_1$ bis $T_4$ mit einem positiven Signal $U_2$ fließt durch $R_2$ ein Strom, der den Kollektorstrom von $T_3$ vergrößert und den von $T_4$ verkleinert. Die Stromdifferenz ist gleich dem durch $R_2$ fließenden Strom. Das stimmt sogar für den Fall, dass der Strom durch $R_2$ so groß ist, dass einer der beiden Transistoren sperrt. Aus diesem Grund ist der Ausgangsstrom der Endstufe $I_a$ proportional zum Strom durch $R_2$.
<!-- page-import:0577:end -->

<!-- page-import:0578:start -->
## 5.2 Der normale Operationsverstärker (VV-OPV) 541

**Abb. 5.44.**  
Modell der Rail-to-Rail Endstufe zur Analyse  
der Spannungsverstärkung

Die Rail-to-Rail-Endstufe besitzt wegen der in Emitterschaltung betriebenen Endstufentransistoren einen hohen Ausgangswiderstand, also einen Stromausgang; ihre Spannungsverstärkung hängt vom externen Lastwiderstand ab. Deshalb ist es bei einem VV-Operationsverstärker notwendig, eine interne Gegenkopplung vorzusehen, um einen niederohmigem Ausgang zu erhalten. Dazu wurde hier eine interne Spannungsgegenkopplung in der Endstufe über den Widerstand $R_3$ vorgesehen.

Das für $R_2$ erforderliche Nullpotential steht in Operationsverstärkern nicht zur Verfügung. Deshalb muss es künstlich hergestellt werden. Dazu dient der Spannungsteiler aus den beiden Widerständen $R_4$ mit dem nachfolgenden Spannungsfolger aus den Transistoren $T_9$ bis $T_{12}$, der als Impedanzwandler arbeitet. Die in Abb. 5.41 und Abb. 5.43 gewählte Betriebsspannung von $\pm 5\,\mathrm{V}$ soll hier lediglich das Verständnis erleichtern; in der Praxis wird man die Schaltung häufig mit einer einzigen positiven Betriebsspannung betreiben. Dann steigt das interne Massepotential auf die halbe Betriebsspannung.

Die hier gezeigte Rail-to-Rail-Endstufe stellt einen CC-Operationsverstärker dar mit einem stromgesteuerten invertierenden Eingang $U_3$ und einem Stromausgang. Über die Widerstände $R_2$ und $R_3$ liegt eine kombinierte Strom- und Spannungsgegenkopplung vor. Sie wird als direct feedback bezeichnet und in Abschnitt 5.8.2.2 noch genauer beschrieben. Die Spannungsverstärkung des Rail-to-Rail-Verstärkers lässt sich am besten am Modell in Abb. 5.44 erklären. Zur Analyse der Schaltung gehen wir von $U_2 = U_3$ aus und wenden die Knotenregel auf die beiden Knoten der Endstufe an:

$$
I_2 - \frac{U_2}{R_2} + \frac{U_a - U_2}{R_3} = 0
\qquad \text{und} \qquad
\frac{U_2 - U_a}{R_3} + 10\,I_2 - I_a = 0
$$

(5.28)

Daraus folgt für $I_a \approx 0$ die Verstärkung der Endstufe:

$$
U_a = \left(1 + \frac{10}{11}\frac{R_3}{R_2}\right) U_2
\qquad \overset{R_3 = R_2}{=}
\qquad
\left(1 + \frac{10}{11}\right) U_2 \approx 2\,U_2
$$

Die Spannungsverstärkung $U_a/U_2$ der Rail-to-Rail-Endstufe sollte man größer als 1 wählen, weil sonst bereits am Eingang ein Rail-to-Rail Signal erforderlich wäre. Man sollte sie aber nicht unnötig groß wählen, weil sonst die Schleifenverstärkung in der Endstufe so klein wird, dass die Gegenkopplung unwirksam wird. Wir haben aus diesem Grund hier mit $R_3 = R_2$ eine Spannungsverstärkung von 2 vorgeschlagen. Den Ausgangswiderstand erhält man für $U_2 = 0$ aus (5.28):

$$
r_a = -\frac{U_a}{I_a} = \frac{1}{11} R_3 = \frac{1}{11} \cdot 1\,\mathrm{k}\Omega \approx 100\,\Omega
$$

Er ist also klein gegenüber dem Ausgangswiderstand der Endstufentransistoren, der hier $r_{CE} = U_A/(10\,I_1) = 100\,\mathrm{k}\Omega$ beträgt. Die Rail-to-Rail-Endstufe lässt sich nicht nur mit dem hier beschriebenen Rail-to-Rail-Eingang kombinieren, sondern mit jedem Operationsverstärker, bei dem man lediglich einen Rail-to-Rail-Ausgang benötigt.
<!-- page-import:0578:end -->

<!-- page-import:0579:start -->
542 5. Operationsverstärker

**Abb. 5.45.** Kombination eines Rail-to-Rail Eingangs mit einem Rail-to-Rail Ausgang zu einem RRIO Verstärker. Beschaltet als nichtinvertierender Verstärker mit der Verstärkung  
$U_a/U_e = 1 + R_5/R_4 = 2$

### 5.2.5.2.3 Rail-to-Rail-Input-Output

Zur Realisierung eines Verstärkers, der am Eingang *und* Ausgang Rail-to-Rail tauglich ist, kann man die Schaltungen von Abb. 5.41 und 5.43 miteinander kombinieren. Man erkennt in der resultierenden Schaltung in Abb. 5.45 zwei verschachtelte Gegenkopplungsschleifen: Die eine, die mit den Widerständen $R_2$ und $R_3$ die Verstärkung der Endstufe $U_a/U_2$ bestimmt, und die zweite, die mit den Widerständen $R_4$ und $R_5$ die Verstärkung der ganzen Schaltung festlegt. In dem Signalverlauf in Abb. 5.46 wurde bei einer Betriebsspannung von $\pm 5\,\mathrm{V}$ eine Eingangsamplitude von $2.5\,\mathrm{V}$ gewählt, damit bei einer Verstärkung von $U_a/U_e = 2$ die Aussteuerung bis zu der Betriebsspannung reicht. Man sieht, dass die Ausgangsspannung bis dicht an die Betriebsspannungen steigt; sie bleibt trotz einer Belastung mit $1\,\mathrm{k}\Omega$ lediglich um $50\,\mathrm{mV}$ unter der Betriebsspannung. Trotzdem erkennt man eine leichte Abflachung in den Scheitelwerten. An dem Signal $U_2$ sieht man, wie der Eingangsverstärker über die Gegenkopplung versucht, die Ausgangsspannung auf $\pm 5\,\mathrm{V}$ zu regeln, allerdings vergeblich.

**Abb. 5.46.** Der Zeitverlauf im RRIO-Verstärker zeigt die Signale für eine Eingangsamplitude von $2{,}5\ \mathrm{V}$ bei einer Betriebsspannung von $\pm 5\,\mathrm{V}$. Die über-alles Verstärkung beträgt  
$U_a/U_e = 1 + R_5/R_4 = 2$
<!-- page-import:0579:end -->

<!-- page-import:0580:start -->
5.2 Der normale Operationsverstärker (VV-OPV) 543

Wechselrichter

Synchrongleichrichter

Tiefpass

Abb. 5.47. Beseitigung von Nullpunktfehlern mit Chopper-Verfahren, Prinzip

## 5.2.6 Verstärker mit internem Offsetabgleich

Wenn man hohe Präzision benötigt, muss man Operationsverstärker einsetzen, die eine hohe Differenzverstärkung besitzen, um bei Gegenkopplung eine hohe Schleifenverstärkung zu erzielen. Außerdem sollen sie eine niedrige Offsetspannung besitzen. Dabei handelt es sich um die Spannung, die man am Eingang anlegen muss, damit die Ausgangsspannung zu Null wird; sie wird im Abschnitt 5.5.2 noch genauer behandelt. Ein Beispiel für einen klassischen Präzisionsverstärker ist der OP177. Hier wurde ein konventioneller Operationsverstärker für diese Aufgabe optimiert. Heutzutage ist es aber üblich, Verstärker einzusetzen, bei denen die Offsetspannung intern periodisch auf Null abgeglichen wird; ein Beispiel ist der OPA388 in Abb. 5.85. Derartige Operationsverstärker werden als Autozero-, Zero-Drift- oder Chopper- Verstärker bezeichnet. Sie besitzen intern eine Schaltung zum automatischen Nullpunktabgleich, der z.B. 1000 mal je Sekunde durchgeführt wird. Die einfachste Ausführung ist in Abb. 5.47 dargestellt.

Mit dem Wechselrichter $S_1$ am Eingang wird zwischen der Eingangsspannung und Null im Wechsel umgeschaltet: Die Eingangsspannung wird zerhackt. Aus diesem Grund bezeichnet man solche Verstärker auch als Zerhackerverstärker. Der nachfolgende Verstärker muss jetzt lediglich eine Wechselspannung verstärken, selbst dann, wenn das Eingangssignal wie in dem Beispiel in Abb. 5.47 eine Gleichspannung ist. Wenn die beiden Schalter, die synchron getaktet werden, in der unteren Stellung sind, wird der Nullpunkt regeneriert und in $C_2$ gespeichert. Der Tiefpass am Ausgang bildet den Mittelwert von $U_1$; seine Grenzfrequenz muss sehr viel niedriger sein als die Taktfrequenz der Schalter. Deshalb ist die Schaltung nur für langsam veränderliche Eingangssignale geeignet.

Heutzutage setzt man in Chopper-Verstärkern eine Technik ein, bei der nicht zwischen dem Eingangssignal und Null umgeschaltet wird, sondern zwischen dem Eingangssignal und dem negierten Eingangssignal. Dazu dient der Schalter $S_1$ in Abb. 5.48, der als Polwender arbeitet. Der Synchrongleichrichter $S_2$ arbeitet ebenfalls als Polwender. Dadurch wird das Eingangssignal in der eingezeichneten Schalterstellung nicht invertiert, in der anderen dagegen 2 mal invertiert. In beiden Fällen wird das Eingangssignal also unverändert zum Ausgang übertragen. Die Offsetspannung $U_O$ wird dagegen nur einmal von $S_2$ invertiert und erscheint deshalb als überlagertes Rechtecksignal am Ausgang. In Abb. 5.48 kann man verfolgen, wie das zustande kommt: In dem mittleren Diagramm wird das Signal durch eine positive Offsetspannung nach oben verschoben. Dadurch erscheinen die positiven Halbwellen nach der Synchrongleichrichtung um die Offsetspannung höher und die negativen entsprechend niedriger. Da die Offsetspannung klein gegenüber dem
<!-- page-import:0580:end -->

<!-- page-import:0581:start -->
544  5. Operationsverstärker

**Abb. 5.48.** Praktische Ausführung eines Chopper-Verstärkers

Nutzsignal ist, ist die Amplitude der am Ausgang überlagerten Rechteckspannung auch klein. Sie lässt sich mit einem Tiefpass am Ausgang herausfiltern.

Vorzugsweise gibt man dem Frequenzgang des Filters Nullstellen bei der Taktfrequenz und Vielfachen davon ein. Übrig bleibt dann das verstärkte Eingangssignal ohne Offset. Operationsverstärker, die nach diesem Prinzip arbeiten, sind als integrierte Schaltungen erhältlich. Sie verhalten sich im Einsatz wie ein normaler Operationsverstärker. Allerdings lassen sich die Verstärker wegen des internen Tiefpasses nur unterhalb der Taktfrequenz nutzen. Die Schalter werden dabei als Transmission-Gates realisiert, die in Abb. 6.34 auf Seite 637 abgebildet sind. Aus diesem Grund werden nicht nur die Schalter, sondern auch die übrigen Komponenten der Verstärker in CMOS-Technologie realisiert.

Eine andere Möglichkeit, einen Zero-Offset-Operationsverstärker zu entwerfen, besteht darin, regelmäßig einen Nullpunktabgleich durchzuführen. Die beiden Schalter in Abb. 5.49 zeigen die Phase, in der die Offsetspannung abgeglichen wird. Die Ausgangsspannung des Verstärkers setzt sich dabei aus zwei Anteilen zusammen: Aus der mit $A_D$ verstärkten Offsetspannung und der mit $A_N$ verstärkten Spannung zur Nullpunktkorrektur:

$$
U_{N1} = A_D\,U_{O1} - A_N\,U_{N1}
\Rightarrow
U_{N1} = U_{O1}\,\frac{A_D}{1 + A_N} \approx U_{O1}\,\frac{A_D}{A_N}
\qquad (5.29)
$$

Im normalen Betrieb als Verstärker werden die beiden Schalter nach oben umgeschaltet. Dann ergibt sich die Ausgangsspannung

$$
U_a = A_D\,(U_D + U_{O1}) - U_{N1}\,A_N = A_D\,U_D
$$

Die Offsetspannung wird demnach kompensiert. Ein Nachteil des Verfahrens besteht jedoch darin, dass während des Nullpunktabgleichs kein Ausgangssignal zur Verfügung

**Abb. 5.49.** Offsetabgleich mit Autozero-Verfahren, Prinzip
<!-- page-import:0581:end -->

<!-- page-import:0582:start -->
5.2 Der normale Operationsverstärker (VV-OPV) 545

**Abb. 5.50.** Offsetabgleich mit Autozero-Verfahren, praktische Ausführung

steht. Dieser Nachteil lässt sich mit dem zusätzlichen Verstärker OV2 in Abb. 5.50 beseitigen. Er verstärkt das Eingangssignal ständig und seine Offsetspannung wird gleichzeitig über OV1 abgeglichen. In der eingezeichneten Schalterstellung wird die von OV1 offsetfrei verstärkte Differenzspannung zur Nullpunktkorrektur an OV2 angelegt: $U_{N2} = A_D U_D$. Damit ergibt sich die Ausgangsspannung

$$
U_a = A_D (U_D + U_{O2}) + A_D A_N U_D
$$

Man sieht, dass die Eingangsspannung $U_D$ mit $A_D A_N$ hoch verstärkt wird, um den Faktor $A_N$ höher als die Offsetspannung $U_{O2}$. Um die auf den Eingang bezogene Offsetspannung zu ermitteln, setzt man die Ausgangsspannung $U_a = 0$ und erhält:

$$
U_D = -\frac{A_D U_{O2}}{A_D + A_D A_N} = -\frac{U_{O2}}{1 + A_N} \approx -\frac{U_{O2}}{A_N}
$$

Das Vorzeichen spielt hier keine Rolle, da die Offsetspannung beliebige Vorzeichen besitzen kann. Der Verstärker OV1 in Abb. 5.50 gleicht im Wechsel seinen eigenen Nullpunkt und den von OV2 ab. OV2 steht hier immer zur Verstärkung des Eingangssignals zur Verfügung.

Um einen Eingang zur Nullpunktkorrektur bei einem Operationsverstärker zu erhalten, schaltet man zu dem Differenzverstärker am Eingang einen Zweiten parallel; Abb. 5.51 zeigt das Prinzip. Die Transistoren $T_3$, $T_4$ bilden den zusätzlichen Differenzverstärker. Welcher der beiden Eingänge zur Nullpunktkorrektur Gegenkopplung ergibt, hängt von

**Abb. 5.51.** Operationsverstärker mit zusätzlichem Differenzverstärker zur Nullpunktkorrektur. $U_{NN}$ und $U_{NP}$ sind die Eingänge zur Nullpunktkorrektur mit Negativer bzw Positiver Polarität.
<!-- page-import:0582:end -->

<!-- page-import:0583:start -->
546  5. Operationsverstärker

**Abb. 5.52.** Kleinsignalmodell des Operationsverstärkers mit Nullpunkt-Eingängen

der übrigen Schaltung ab. Den nicht benötigten Eingang kann man an Masse anschließen. Im Normalfall macht man die Verstärkung zur Nullpunktkorrektur $A_N$ kleiner als die Differenzverstärkung $A_D$; dazu dient der Gegenkopplungswiderstand $R_E$. Sonst wäre die Spannung zur Nullpunktkorrektur gemäß (5.29) genau so klein wie die Offsetspannung.

An dem Kleinsignal-Modell in Abb. 5.52 sieht man, dass sich der Strom am Hochimpedanzpunkt aus dem regulären Anteil $I_q$ und dem Anteil zur Nullpunktkorrektur $I_{Nq}$ zusammensetzt. Damit ergibt sich die Spannung am Hochimpedanzpunkt:

$$
U_1 = 2\,(I_q + I_{Nq})\,r_{HIP} = \frac{r_{HIP}}{r_S}\,U_D + \frac{2r_{HIP}}{2r_S + R_E}\,U_{ND}
$$

Diese Spannung erscheint dann nach Verstärkung von $T_7$ am Ausgang: $U_a = S_7\,r_7\,U_1$.

Ein Nebeneffekt des automatischen Nullpunktabgleichs ist, dass dadurch auch das 1/f-Rauschen des Verstärkers reduziert wird. Dabei handelt es sich um einen Anstieg der Rauschspannung unterhalb von 1 kHz, der in Abschnitt 5.5.8 beschrieben wird. Es wirkt wie eine schwankende Offsetspannung und wird mit Autozero-Verstärkern ebenfalls ausgeregelt; den Vorteil erkennt man in Abb. 5.53.

## 5.2.7 Verstärker mit symmetrischen Ausgängen

Es gibt verschiedene Anwendungen, für die man symmetrische Signale benötigt:

- Schnelle AD-Umsetzer
- Netzwerk-Kabel
- Video-Signale

Zur Symmetrierung eines Signals kann man einen Operationsverstärker gemäß Abb. 5.54 einsetzen, der als invertierender Verstärker beschaltet ist. Eine Einschränkung bei dieser Lösung besteht allerdings darin, dass das Ausgangssignal $-U_e$ wegen der Signallaufzeit durch den Operationsverstärker verzögert ist. Bei den genannten Anwendungen kommt

**Abb. 5.53.**  
Reduzierung des 1/f-Rauschens bei  
Autozero-Verstärkern
<!-- page-import:0583:end -->

<!-- page-import:0584:start -->
547

## 5.2 Der normale Operationsverstärker (VV-OPV)

a Inverter

b Spannungsfolger Zusatz

**Abb. 5.54.** Symmetrierung eines Signals

es aber darauf an, dass die symmetrischen Signale auch dynamisch exakt symmetrisch sind. Da bringt auch der zusätzliche Verstärker im nicht-invertierenden Signalpfad nur eine gewisse Verbesserung.

Ausgänge mit gleicher Gruppenlaufzeit lassen sich nur mit einer symmetrischen Schaltung erreichen. Dazu werden in Abb. 5.55 zwei Operationsverstärker eingesetzt, die mit vertauschten Eingängen parallel geschaltet sind. Zur Analyse der Schaltung kann man die Spannungen an den Eingängen berechnen:

$$
U_N = \frac{1}{R_N + R_1}(R_N U_{e1} + R_1 U_{a1})
\qquad \text{und} \qquad
U_P = \frac{1}{R_N + R_1}(R_N U_{e2} + R_1 U_{a2})
$$

Über die Gegenkopplungen stellen sich die Ausgangsspannungen - wie immer bei Operationsverstärkern - so ein, dass die Eingangsspannungsdifferenz $U_P - U_N = 0$ wird; daraus ergibt sich die Ausgangsspannungsdifferenz:

$$
\Delta U_a = U_{a1} - U_{a2} = -\frac{R_N}{R_1}(U_{e1} - U_{e2})
\quad \overset{U_{e2}=0}{=} \quad
-\frac{R_N}{R_1} U_{e1}
\qquad (5.30)
$$

a 2 Operationsverstärker

b Symmetrischer Ausgang

$\Delta U_a = U_{a1} - U_{a2} = -\frac{R_N}{R_1}(U_{e1} - U_{e2})$

**Abb. 5.55.** Subtrahierer mit symmetrischen Ausgängen
<!-- page-import:0584:end -->

<!-- page-import:0586:start -->
## 5.2 Der normale Operationsverstärker (VV-OPV) 549

**Abb. 5.57.** Operationsverstärker mit symmetrischen Ausgängen. Beispiel für die Realisierung der Gleichtaktregelung am Ausgang mit dem zusätzlichen Differenzverstärker $T_{10}, T_{11}$. Beispiel: THS4140

Ein Beispiel für den Betrieb von AD-Umsetzern mit symmetrischen Eingängen ist in Abb. 5.58 dargestellt. Sie sind meist für eine einfache positive Betriebsspannung vorgesehen und stellen deshalb eine Spannung in der Bereichsmitte bereit, hier $U_{ref} = 2{,}5\,\mathrm{V}$. Es ist zweckmäßig, diese Spannung als Referenzspannung im single-supply-Betrieb zu nutzen: $U_{Gla} = U_{e2} = U_{ref}$. Dann ergeben sich aus (5.31) die Ausgangsspannungen:

$$
U_{a1} - U_{ref} = -\frac{R_N}{2R_1}(U_{e1} - U_{ref}) \qquad \overset{R_N=4R_1}{=} \qquad -2\,(U_{e1} - U_{ref})
$$

$$
U_{a2} - U_{ref} = +\frac{R_N}{2R_1}(U_{e1} - U_{ref}) \qquad \overset{R_N=4R_1}{=} \qquad +2\,(U_{e1} - U_{ref})
$$

Man sieht, dass die Eingangs- und Ausgangsspannungen wegen des Betriebs aus einer einzigen positiven Betriebsspannung um $U_{ref}$ verschoben werden. Im Zeitdiagramm in Abb. 5.58 sieht man auch, dass die Ausgangsspannungen $U_{a1}$ und $U_{a2}$ symmetrisch zu $U_{ref}$ verlaufen.

**Abb. 5.58.** Betrieb eines AD-Umsetzers mit symmetrischen Eingängen. Beispiel für eine Eingangsamplitude von 1 V und eine Verstärkung von 2.
<!-- page-import:0586:end -->
