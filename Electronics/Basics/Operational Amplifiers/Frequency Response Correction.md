# Frequency Response Correction

<!-- page-import:0592:start -->
555

bereits intern vorhanden ist. Der Vergleich in Abb. 5.65 zeigt, dass man in beiden Fällen dieselbe Ausgangsspannung erhält. Man kann auch den Signalstrom $I_q = U_e/R_a$ trotzdem als Ausgangssignal über die Betriebsspannungsanschlüsse verwenden, da sich der Ruhestrom $I_0$ in beiden Fällen kompensiert. Diese Möglichkeit nutzen wir bei den VC-Verstärkern in Abb. 5.116 und bei den CC-Verstärkern in Abb. 5.123.

## 5.4 Frequenzgang-Korrektur

### 5.4.1 Grundlagen

Wenn man einen Operationsverstärker als Verstärker betreibt, muss die Rückkopplung – wie in Abb. 5.66 dargestellt – immer vom Ausgang zum invertierenden Eingang führen, damit sich eine Gegenkopplung ergibt. Mitkopplungen sind hier unerwünscht, weil sich dabei Kippschaltungen ergeben, die nur 2 Betriebszustände besitzen: Die positive oder negative Übersteuerung. Sie werden im Kapitel 14 auf Seite 883 beschrieben. Aber auch gegengekoppelte Verstärker sind nicht unbedingt stabil. Wenn die frequenzabhängige Phasenverschiebung $180^\circ$ erreicht, wird die Gegenkopplung zur Mitkopplung und die Schaltung kann schwingen.

Ob die Schaltung bei dieser Frequenz schwingt, hängt davon ab, ob die Schwingbedingung erfüllt ist. Gemäß (5.11) gilt für die Verstärkung der gegengekoppelten Schaltung in Abb. 5.67:

$$
\underline{A} = \frac{U_a}{U_e} = \frac{k_F \underline{A}_D}{1 + k_R \underline{A}_D} = \frac{k_F \underline{A}_D}{1 + \underline{g}}
$$

(5.32)

Darin ist $\underline{A}_D$ die Verstärkung des offenen Verstärkers und $\underline{g} = k_R \underline{A}_D$ die Schleifenverstärkung der Schaltung. Für $\underline{g} = -1$ wird der Nenner in (5.32) zu Null; die Verstärkung wird also unendlich. Dies ist die Bedingung für eine ungedämpfte Schwingung. Da es sich bei $\underline{g}$ um eine komplexe Größe handelt, lässt sie sich in einen Betrag und eine Phasenverschiebung zerlegen:

$$
\underline{g} = k_R \underline{A}_D = -1 \Rightarrow
\begin{cases}
|\underline{g}| = k_R |\underline{A}_D| = 1 \qquad \text{Amplitudenbedingung} \\
\varphi(k_R \underline{A}_D) = -180^\circ \qquad \text{Phasenbedingung}
\end{cases}
$$

(5.33)

Nur wenn beide Bedingungen erfüllt sind, gibt es eine Schwingung mit konstanter Amplitude. Hier geht es aber nicht darum, einen Oszillator zu bauen, sondern genau dies zu verhindern. Dabei soll die Sprungantwort der Schaltung gut gedämpft sein, also weit von dem Fall eines Oszillators entfernt sein. Ob eine Schwingneigung besteht und wie

a Nichtinvertierender Verstärker

b Invertierender Verstärker

**Abb. 5.66.** Gegenüberstellung von nicht-invertierendem und invertierendem Verstärker für die Frequenzgangkorrektur. Für $U_e = 0$ sind beide Schaltungen identisch. Dann gilt: $-U_D = U_a R_1/(R_1 + R_N) = U_a k_R$
<!-- page-import:0592:end -->

<!-- page-import:0593:start -->
556  5. Operationsverstärker

**Abb. 5.67.** Modell für einen gegengekoppelten Operationsverstärker

sie sich vermeiden lässt, wollen wir für Operationsverstärker mit ein- und zweistufiger Spannungsverstärkung untersuchen.

## 5.4.2 Eine Verstärkerstufe

Abbildung 5.68 zeigt die Verhältnisse bei Verstärkern mit einstufiger Spannungsverstärkung, die wir in Kapitel 5.2.2 beschrieben haben. In dem Modell wurden hier noch die Schaltungskapazitäten zusätzlich eingezeichnet. Sie sind aber lediglich als Beispiele zu sehen weil sie stark von dem Herstellungsprozess abhängen. Im Bode-Diagramm sind vier wichtige Frequenzen eingetragen:

- Die niedrigste Grenzfrequenz $f_{g1}$ des Verstärkers. Sie ergibt sich am HIP.
- Die zweite Grenzfrequenz des $f_{g2}$ Verstärkers
- Die kritische Frequenz $f_k$, bei der die Schleifenverstärkung $|g| = 1$ beträgt.
- Die Transitfrequenz $f_T$, bei der die Verstärkung $|A_D| = 1$ beträgt.

Im Bodediagramm ist neben der Verstärkung und Phasenverschiebung des offenen Verstärkers $|A_D|$ auch der Frequenzgang des gegengekoppelten Verstärker für $|A| = 10$ eingezeichnet. Wenn man(5.32) für einen nichtinvertierenden Verstärker ($k_F = 1$) vereinfacht, ergibt sich:

$$
\underline{A} = \frac{A_D}{1 + g} \approx \frac{A_D}{g} \Rightarrow g = \frac{A_D}{A}
$$

Die Schleifenverstärkung lässt sich im Bode-Diagramm wegen seiner logarithmischen Darstellung direkt ablesen. Dies sieht man, wenn man diese Beziehung logarithmiert:

$$
\lg |g| = \lg |A_D| - \lg |A|
$$

Die Schleifenverstärkung ist also hier gleich dem Abstand zwischen der Differenzverstärkung $A_D$ und der Verstärkung der gegengekoppelten Schaltung $A$. Man erkennt in Abb. 5.68, dass dieser Abstand mit zunehmender Frequenz abnimmt. Bei der kritischen Frequenz $f_k$ ist $|g| = 0\,\mathrm{dB}$. Bei höheren Frequenzen fällt die Verstärkung des gegengekoppelten Verstärkers mit der des offenen Verstärkers zusammen, siehe (5.13) auf S. 514.

Jetzt wollen wir untersuchen, ob der Operationsverstärker bei Gegenkopplung möglicherweise schwingt. Dazu muss man die Schwingbedingung in (5.33) überprüfen. Bei der kritischen Frequenz $f_k$ ist die Amplitudenbedingung $|g| = 1$ erfüllt. Die gegengekoppelte Schaltung schwingt also, wenn die Phasenbedingung $\varphi = -180^\circ$ gleichzeitig erfüllt ist. Dazu muss man die Phasenverschiebung im Bode-Diagramm betrachten. Jeder Tiefpass bewirkt einen Abfall der Verstärkung von $20\,\mathrm{dB}/\mathrm{Dekade}$ und eine Phasennacheilung, die bei der Grenzfrequenz $45^\circ$ beträgt und darüber bis auf $90^\circ$ ansteigt. Dabei addieren sich die Phasenverschiebungen der aufeinander folgenden Tiefpässe. Man sieht in Abb. 5.68,
<!-- page-import:0593:end -->

<!-- page-import:0594:start -->
## 5.4 Frequenzgang-Korrektur

557

a Schaltung

b Modell

c Bode Diagramm

**Abb. 5.68.** Operationsverstärker mit einstufiger Spannungsverstärkung gemäß Abb. 5.14

dass die Phasenverschiebung bei der kritischen Frequenz lediglich $\varphi = -90^\circ$ beträgt. Die Schaltung wird also nicht schwingen. Als Kriterium für die Stabilität gibt man aber meist nicht die Phasenverschiebung bei der Frequenz $f_k$ an, sondern den Winkel der noch an $-180^\circ$ fehlt. Man definiert die Größe:

$$\alpha = 180^\circ - |\varphi(f_k)| \qquad\qquad (5.34)$$

und bezeichnet sie als *Phasenreserve* oder *Phasenspielraum*.

Bei der Frequenzgangkorrektur geht es nicht nur darum, einen Oszillator zu vermeiden, sondern eine Sprungantwort mit gutem Einschwingverhalten zu erzielen. Dazu muss man von der Schwingbedingung einen nennenswerten Abstand halten. Das dynamische Verhalten eines Verstärkers wird durch den Phasenspielraum bestimmt. Man kann drei Fälle unterscheiden:

- $\alpha \geq 90^\circ$: langsames Einschwingen
- $\alpha = 45^\circ \dots 90^\circ$: günstigstes Einschwingverhalten
- $\alpha < 45$: starkes Überschwingen oder Schwingung
<!-- page-import:0594:end -->

<!-- page-import:0595:start -->
558 5. Operationsverstärker

a Sprungantwort

b Frequenzgang

**Abb. 5.69.** Sprungantwort und Frequenzgang für verschiedenen Phasenspielraum $\alpha$. Ein Überschwingen im Zeitbereich korrespondiert mit einer Überhöhung im Frequenzbereich.

Der Phasenspielraum ist eine besonders nützliche Größe, um die Sprungantwort des Verstärkers zu beurteilen. In Abb. 5.69 sind die Sprungantworten für verschiedene Phasenspielräume dargestellt und daneben die korrespondierenden Frequenzgänge der Verstärkung. Man erkennt, dass sich mit abnehmendem Phasenspielraum eine schwächere Dämpfung der Sprungantwort und eine zunehmende Überhöhung der Verstärkung ergibt. Bei $90^\circ$ Phasenspielraum liegt der aperiodische Grenzfall vor: Hier gibt es kein Überschwingen, die Anstiegszeit ist hier jedoch deutlich größer und die Bandbreite ist deutlich reduziert. Bei einem Phasenspielraum von $\alpha = 60^\circ$ ergibt sich sowohl im Zeit- als auch im Frequenzbereich ein besonders günstiges Verhalten.

Der kritische Fall liegt dann vor, wenn man den Verstärker voll gegenkoppelt, also auf $|A| = 1$. Dann fällt die kritische Frequenz mit der Transitfrequenz zusammen bei der der Phasenspielraum am kleinsten ist. Oberhalb der Transitfrequenz kann keine Schwingung auftreten weil dort die Amplitudenbedingung in (5.32) nicht erfüllt ist. Man sieht in dem Beispiel in Abb. 5.68, dass die Schaltung auch bei voller Gegenkopplung noch einen Phasenspielraum von $\alpha = 45^\circ$ besitzt. Zusätzliche Maßnahmen zur Frequenzgang-Korrektur sind hier also nicht erforderlich. Aus diesem Grund sind auch die Operationsverstärker mit Kaskodeschaltung in den Abb. 5.20 und 5.23 interessant, weil sie trotz der größeren Differenzverstärkung nur eine einzige Verstärkerstufe besitzen.

## 5.4.3 Zwei Verstärkerstufen

Bei Schaltungen mit zwei Stufen zur Spannungsverstärkung kommt ein weiterer Tiefpass hinzu. Als Beispiel haben wir die Struktur in Abb. 5.25 gewählt. Hier es handelt sich um die vereinfachte Struktur des 741-Operationsverstärkers, bei dem aber moderne schnelle Transistoren mit niedrigen Kapazitäten zugrunde gelegt wurden. Im Modell in Abb. 5.70 erkennt man den zusätzlichen Tiefpass bei $f_{g2}$, im Bode-Diagramm. Wenn man den Verstärker auch hier auf die Verstärkung $|A| = 20\,\mathrm{dB}$ gegenkoppelt, wird der Phasenspielraum $\alpha = 0$; die Schaltung würde also schwingen. Die niedrigste Verstärkung, bei der sich noch ein akzeptabler Einschwingvorgang ergibt, ist $|A| = 40\,\mathrm{dB}$; denn dann ist $f_k = f_{g2}$ und der Phasenspielraum beträgt $\alpha = 45^\circ$. Bei niedrigeren Verstärkungen ist daher eine Frequenzgang-Korrektur erforderlich.
<!-- page-import:0595:end -->

<!-- page-import:0596:start -->
559

# 5.4 Frequenzgang-Korrektur

a Schaltung

b Modell

$U_P$

$U_D$

$U_N$

$U_D S_1$
$\dfrac{0{,}4\ \mathrm{mA}}{\mathrm{V}}$

$R_1$
500 k$\Omega$

$C_1$
35 pF

$U_1$

$f_{g1} = 5\,\mathrm{kHz}$

Differenzverstärker

$U_1 S_2$
$\dfrac{5\ \mathrm{mA}}{\mathrm{V}}$

$R_2$
100 k$\Omega$

$C_2$
0,3 pF

$f_{g2} = 5\,\mathrm{MHz}$

Emitterschaltung

$R_3$
1 k$\Omega$

$C_3$
3 pF

$f_{g3} = 50\,\mathrm{MHz}$

weitere Tiefpässe

c Bode Diagramm

dB

$|A_D|$

100

$|A| = 40\,\mathrm{dB}$

$|g|$

$f_{g1}$

$f_k\; f_{g2}$

$|g| = 0\,\mathrm{dB}$

$f_{g3}$

$f_T$

$f/\mathrm{Hz}$

$\varphi$

$0^\circ$

$-90^\circ$

$-180^\circ$

$-270^\circ$

$\alpha = 45^\circ$

**Abb. 5.70.** Frequenzgang eines Operationsverstärkers mit zwei Verstärkerstufen. Die niedrigste Verstärkung, bei der sich noch ein Phasenspielraum von $\alpha = 45^\circ$ ergibt, ist eingezeichnet.

## 5.4.4 Universelle Frequenzgang-Korrektur

Bei der universellen Frequenzgangkorrektur verlangt man, das ein Operationsverstärker bei Gegenkopplung in allen Fällen ein gutes Einschwingverhalten aufweist, auch in dem kritischen Fall bei voller Gegenkopplung auf $|A| = 1 \,\widehat{=}\, 0\,\mathrm{dB}$. Dann muss die kritische Frequenz $f_k$ mit der zweiten Grenzfrequenz $f_{g2}$ zusammenfallen. Da die Verstärkung des Operationsverstärkers im Frequenzbereich zwischen $f_{g1}$ und $f_{g2}$ umgekehrt proportional zur Frequenz ist, gilt:
<!-- page-import:0596:end -->

<!-- page-import:0597:start -->
560 5. Operationsverstärker

**a** Schaltung

**b** Bode-Diagramm

Abb. 5.71. Standardkorrektur bei einem zweistufigen Verstärker mit dem Kondensator $C_k$

$$
f_{g1}=\frac{f_{g2}}{g_0}
\qquad\qquad (5.35)
$$

Darin ist $g_0 = A_{D0}/A_0$ die Schleifenverstärkung bei niedrigen Frequenzen. Daraus folgt die Regel für die Frequenzgangkorrektur:

*Die niedrigste Grenzfrequenz muss um die Schleifenverstärkung $g_0$ unter der zweiten Grenzfrequenz liegen.*

Um einen Phasenspielraum von $\alpha = 60^\circ$ zu erhalten, muss man die erste Grenzfrequenz noch einmal halbieren.

Wenn man eine *universelle Frequenzgangkorrektur* anstrebt, muss die zweite Grenzfrequenz mit der Transitfrequenz zusammenfallen; denn dann ergibt sich selbst bei voller Gegenkopplung ($|A| = 1$) noch ein Phasenspielraum von $\alpha = 45^\circ$. Dazu gibt es verschiedene Möglichkeiten:
<!-- page-import:0597:end -->

<!-- page-import:0598:start -->
5.4 Frequenzgang-Korrektur 561

a Schaltung

$b$ Bode Diagramm

**Abb. 5.72.** Frequenzgangkorrektur mit Pole-Splitting. Die beiden Korrekturglieder $K_1$ und $K_2$ sind alternativ; beide bewirken dasselbe.

– Man kann die Verstärkung für alle Frequenzen reduzieren z.B. durch Stromgegenkopplung im Differenzverstärker am Eingang. Dann muss man aber prüfen, ob ein Operationsverstärker mit einstufiger Spannungsverstärkung nicht besser wäre.

– Man kann die 1. Grenzfrequenz $f_{g1}$ reduzieren, indem man die Kapazität am Hochimpedanzpunkt vergrößert; dann bleibt wenigstens für niedrige Frequenzen die volle Schleifenverstärkung erhalten. In dem Beispiel in Abb. 5.71 folgt dann

$$
f'_{g1}=\frac{f_{g2}}{g_0}=\frac{5\,\text{MHz}}{10^5}=50\,\text{Hz}
$$

Durch die Frequenzgangkorrektur reduziert man also nicht die Phasenverschiebung, sondern die Verstärkung, wie Abb. 5.71 zeigt. Dadurch verlagert sich die kritische Frequenz $f_k$ in einen Bereich mit geringerer Phasenverschiebung.
<!-- page-import:0598:end -->

<!-- page-import:0600:start -->
563

## 5.4 Frequenzgang-Korrektur

**Abb. 5.74.**  
Muster-Operationsverstärker mit universeller Frequenzgangkorrektur, also $f_{g2} = f_T$

wirkt gemäß Kap. 2.4.1 auf S. 132 wie eine um die Spannungsverstärkung vergrößerte Kapazität am Eingang. Eine Kapazität von 2 pF wie in dem Beispiel in Abb.5.72 stellt aber kein Problem für die Realisierung auf dem Chip dar.

## 5.4.5 Angepasste Frequenzgangkorrektur

In den folgenden Beschreibungen wollen wir einen idealisierten Operationsverstärker zugrunde legen, der dem Verstärker in Abb. 5.72 ähnlich ist. Seine Differenzverstärkung beträgt $A_{D0} = 100\,\mathrm{dB} \widehat{=} 100.000$. Der Frequenzgang der Verstärkung und der Phasenverschiebung sind in Abb. 5.74 dargestellt. Seine Grenzfrequenzen liegen bei $f_{g1} = 100\,\mathrm{Hz}$ und $f_{g2} = 10\,\mathrm{MHz}$. Er besitzt eine universelle Frequenzgangkorrektur, daher ist die Transitfrequenz gleich der 2. Grenzfrequenz also $f_T = f_{g2}$.

Die Grenzfrequenz der gegengekoppelten Schaltung $f_k$ ist erreicht, wenn die Schleifenverstärkung $g = 0\,\mathrm{dB}$ wird. Drei Fälle sind in Abb. 5.75a eingezeichnet. Bei voller Gegenkopplung auf $A_0 = 0\,\mathrm{dB}$ ist die Grenzfrequenz $f_k = f_{g2}$, bei $A'_0 = 20\,\mathrm{dB}$ ist $f'_k = 0{,}1 \cdot f_{g2}$. Allgemein gilt: $f_k = f_T/A_0$. Daraus ergibt sich das Verstärkungs-Bandbreite-Produkt (Gain Bandwidth Product, GBW):

$$
f_k = \frac{f_T}{A_0}
\quad \Rightarrow \quad
f_T = A_0\,f_k = GBW
$$

(5.36)

Wenn man von vorne herein weiß, dass ein Operationsverstärker nicht voll gegengekoppelt, sondern bei einer höheren Verstärkung betrieben wird, ist nur eine schwächere Frequenzgangkorrektur erforderlich. Die kritische Frequenz kann dann auf $f_k = f_{g2}$ erhöht werden; der Phasenspielraum beträgt in diesem Fall $\alpha = 45^\circ$. Ein Beispiel dafür haben

a Universelle Frequenzgangkorrektur

b Angepaßte Frequenzgangkorrektur

**Abb. 5.75.** Vergleich von universeller und angepasster Frequenzgangkorrektur für Verstärkungen  
$A_0 = 0\,\mathrm{dB},\ A'_0 = 20\,\mathrm{dB}$ und $A''_0 = 40\,\mathrm{dB}$
<!-- page-import:0600:end -->

<!-- page-import:0601:start -->
564  5. Operationsverstärker

**Abb. 5.76.** Modell zur Erklärung der Slew-Rate. Die zweite Verstärkerstufe in Abb. 5.72 mit dem Miller-Kondensator ist hier symbolisch als Integrator dargestellt.

wir in Abb. 5.70 eingezeichnet. Bei einigen Operationsverstärkern sind derartige teilkompensierte Varianten für Verstärkungen von $A_{min} = 2, 5, 10$ erhältlich. Darin ist $A_{min}$ die niedrigste Verstärkung, bei der der Verstärker noch einen Phasenspielraum von $45^\circ$ aufweist. Die 1. Grenzfrequenz ist dann um die Verstärkung $A_0$ höher als bei der universellen Korrektur. Die Grenzfrequenz des gegengekoppelten Verstärkers ist dann konstant gleich der 2. Grenzfrequenz, wie man in Abb. 5.75b erkennt.

## 5.4.6 Slew-Rate

Die Ausgangsspannung eines Verstärkers kann sich nicht beliebig schnell ändern. Bei einem Tiefpass lässt sich die Anstiegszeit aus der Grenzfrequenz berechnen gemäß (12.6):
$t_a = 1/(3f_g)$. Dieser Zusammenhang gilt jedoch nur für lineare Systeme. Wenn man den linearen Arbeitsbereich eines Verstärkers verlässt, muss man die maximale Anstiegsgeschwindigkeit, die Slew-Rate, aus den Eigenschaften des Verstärkers berechnen. Dazu wollen wir das vereinfachte Modell eines Operationsverstärkers in Abb. 5.76 verwenden.

Wenn bei Übersteuerung nur $T_2$ leitet, wird $I_1 = 2I_0$. Wenn nur $T_1$ leitet, fließt der ganze Strom über den Stromspiegel; dann wird $I_1 = -2I_0$. Der Ladestrom von $C_k$ ist auf den maximalen Ausgangsstrom des Differenzverstärkers $I_{1max} = \pm 2I_0 = \pm 20\,\mu A$ beschränkt. Da an der Korrekturkapazität die volle Ausgangsspannung liegt, folgt aus $I_1 = C\,dU_a/dt$ für den Operationsverstärker in Abb. 5.72:

$$
SR = \left.\frac{dU_a}{dt}\right|_{\max} = \frac{I_{1,max}}{C_k} = \frac{2I_0}{C_k} = \text{hier } \frac{20\,\mu A}{2\,pF} = 10\,\frac{V}{\mu s}
\qquad (5.37)
$$

Die Ausgangsspannung kann sich hier also in $0,1\,\mu s$ höchstens um $1\,V$ ändern. Ein rechteckförmiges Signal mit einer Ausgangsamplitude von $\pm 4\,V$ besitzt daher eine Anstiegszeit von

$$
\Delta t = \frac{\Delta U_a}{SR} = \frac{4\,V}{10\,V/\mu s} = 0{,}4\,\mu s
$$

Auch bei sinusförmiger Aussteuerung kann sich die Ausgangsspannung an keiner Stelle schneller ändern, als es die Slew-Rate zulässt. Wenn man von einer Ausgangsspannung $U_a = \hat{U}_a \sin \omega t$ ausgeht, erhält man für die maximale Steigung, die im Nulldurchgang auftritt:
<!-- page-import:0601:end -->

<!-- page-import:0602:start -->
5.4 Frequenzgang-Korrektur 565

![Abb. 5.77. Beispiel für Abhängigkeit der Ausgangsaussteuerbarkeit von der Frequenz]

$$
SR = \left.\frac{dU_a}{dt}\right|_{t=0} = \hat U_a\,\omega = 2\pi f\,\hat U_a
\qquad\qquad (5.38)
$$

Daraus lässt sich die Frequenz berechnen, bis zu der eine unverzerrte sinusförmige Vollaussteuerung möglich ist:

$$
f_p = \frac{SR}{2\pi \hat U_a}
\qquad \text{hier} \qquad
\frac{10\,\mathrm{V}/\mu\mathrm{s}}{2\pi \cdot 4\,\mathrm{V}}
= 400\,\mathrm{kHz}
\qquad\qquad (5.39)
$$

Diese Größe bezeichnet man als die *Großsignalbandbreite* oder *Leistungsbandbreite* (*Power-Bandwidth*), weil bis zu dieser Frequenz die volle Ausgangsamplitude erhältlich ist. Man sieht, dass sie lediglich $f_p = 400\,\mathrm{kHz}$ beträgt, obwohl die *Kleinsignalbandbreite* bei $f_T = 10\,\mathrm{MHz}$ liegt. Oberhalb der Leistungsbandbreite $f_p$ ist die Aussteuerbarkeit gemäß (5.39) umgekehrt proportional zur Frequenz und nimmt bei $4\,\mathrm{MHz}$ auf $0{,}4\,\mathrm{V}$ ab:

$$
\hat U_a = \frac{SR}{2\pi f}
\qquad \text{hier} \qquad
\frac{10\,\mathrm{V}/\mu\mathrm{s}}{2\pi \cdot 4\,\mathrm{MHz}}
= 0{,}4\,\mathrm{V}
\qquad\qquad (5.40)
$$

Dieser Zusammenhang ist in Abb. 5.77 dargestellt.

Wenn das Ausgangssignal die Slew-Rate-Begrenzung erreicht, wird es durch Geradenstücke ersetzt, deren Steigung der Slew-Rate entspricht. Dies ist in Abb. 5.78 dargestellt. Man erkennt, dass das Ausgangssignal bei nennenswerter Überschreitung der Slew-Rate dreieckförmig wird und außer der Grundfrequenz nicht viel mit dem unverzerrten Signal gemeinsam hat.

Zur Verbesserung der Slew-Rate könnte man aufgrund von (5.37) vermuten, dass sie sich mit zunehmendem Strom $I_0$ erhöht. Allerdings vergrößert sich dadurch auch die Steilheit des Differenzverstärkers, die eine größere Korrekturkapazität $C_k$ erforderlich macht. Ein Vorteil ergibt sich aber, wenn man zu dem Differenzverstärker Emitterwiderstände hinzufügt, die die Steilheit wieder reduzieren. An dieser Stelle bieten Feldeffekttransistoren einen Vorteil, die bei gleichem Strom eine kleinere Steilheit als Bipolartransistoren besitzen.

![Abb. 5.78. Auswirkung der Slew-Rate auf ein sinusförmiges Ausgangssignal. Links: geringfügige Überschreitung der Leistungsbandbreite; rechts: Signal mit doppelter Frequenz]
<!-- page-import:0602:end -->

<!-- page-import:0603:start -->
566  5. Operationsverstärker

**Abb. 5.79.** Modell für einen Operationsverstärker mit kapazitiver Last. Bei dem voll korrigierten Verstärker in Abb. 5.74 ist $f_{g1}=100\,\mathrm{Hz}$, $f_{g2}=10\,\mathrm{MHz}$. Der Lastwiderstand $R_L$ soll gegenüber $r_a$ vernachlässigt werden.

## 5.4.7 Kapazitive Last

Wenn man am Ausgang eines Operationsverstärkers eine kapazitive Last $C_L$ anschließt, entsteht zusammen mit dem Ausgangswiderstand $r_a$ ein zusätzlicher Tiefpass mit der Grenzfrequenz $f_{gC_L}$, der in Abb. 5.79 eingezeichnet ist. Operationsverstärker mit einem einfachen Emitterfolger am Ausgang besitzen Ausgangswiderstände (des nicht gegengekoppelten Verstärkers) im Bereich von $r_a \approx 1\,\mathrm{k}\Omega$. Bei einer DarlingtonschaItung und bei HF-Operationsverstärkern sind es meist weniger als $100\,\Omega$. Wenn die Lastkapazität klein ist, liegt die zusätzliche Grenzfrequenz $f_{gC_L}$ über der zweiten Grenzfrequenz des Verstärkers; dann verkleinert sich der Phasenspielraum nur geringfügig. Bei einem Ausgangswiderstand von $r_a=100\,\Omega$ ergibt sich:

$$
r_a C_L \ll R_2 C_2 \approx \frac{1}{\omega_T r_a}
\qquad\Rightarrow\qquad
C_L \ll \frac{1}{2\pi f_T r_a}
\qquad\text{hier}\qquad
= \frac{1}{2\pi\cdot 10\,\mathrm{MHz}\cdot 100\,\Omega}
= 160\,\mathrm{pF}
$$

Bei größeren Lastkapazitäten sinkt die zusätzliche Grenzfrequenz $f_{gC_L}$ unter die zweite Grenzfrequenz $f_{g2}$. Ein Beispiel für diesen Fall ist in Abb. 5.80 eingezeichnet. Man sieht, dass die Phasenverschiebung oberhalb von $f_{gC_L}$ so groß wird, dass die Schaltung bei stärkerer Gegenkopplung schwingt; hier wäre die minimale Verstärkung für stabilen Betrieb

**Abb. 5.80.** Auswirkung einer kapazitiven Last auf einen voll korrigierten Operationsverstärker
<!-- page-import:0603:end -->

<!-- page-import:0604:start -->
5.4 Frequenzgang-Korrektur

567

**Abb. 5.81.**  
Isolationswiderstand  
zur Phasenkorrektur bei  
kapazitiver Last

$A_{min} = 1000 \,\hat{=}\, 60\,\mathrm{dB}$. Um den Verstärker voll gegenkoppeln zu können, müsste man die Differenzverstärkung bei $f_{gC_L}$ auf $|A_D| = 1$ absenken, also um $60\,\mathrm{dB}$ reduzieren.

Die Lösung des Problems besteht darin, einen Isolationswiderstand vor die kapazitive Last zu schalten wie in Abb. 5.81. Bei hohen Frequenzen, bei denen der Lastkondensator einen Kurzschluss darstellt, liegt dann am Ausgang des Verstärkers lediglich ein Spannungsteiler aus $r_a$ und $R_{iso}$, der keine Phasennacheilung verursacht. Die Phasennacheilung, die die Lastkapazität verursacht, wird durch den Isolationswiderstand bei hohen Frequenzen wieder aufgehoben. Hier liegen also dieselben Verhältnisse vor wie bei der Frequenzgangkorrektur durch Pole Splitting in Abb. 5.73. In Abb. 5.82 erkennt man die Rückdrehung der Phase durch den Isolationswiderstand.

Die Dimensionierung soll noch an einem Zahlenbeispiel erläutert werden. Ein Verstärker mit einem Leerlauf-Ausgangswiderstand von $r_a = 100\,\Omega$ soll mit einer Kapazität von $C_L = 160\,\mathrm{nF}$ am Ausgang belastet werden. Daraus ergibt sich eine Grenzfrequenz von:

$$
f_{g\,C_L} = \frac{1}{2\pi r_a C_L} = \frac{1}{2\pi \cdot 100\,\Omega \cdot 160\,\mathrm{nF}} = 10\,\mathrm{kHz}
$$

(5.41)

Damit die durch die kapazitive Last bedingte zusätzliche Phasenverschiebung $45^\circ$ nicht überschreitet, wählen wir $f_{g\,R_{iso}} = 10\,f_{g\,C_L} = 100\,\mathrm{kHz}$. Man sieht in Abb. 5.82, dass die lastbedingte Phasenverschiebung dann bis $1\,\mathrm{MHz}$ wieder abgebaut wird. Mit (5.41) folgt dann:

**Abb. 5.82.** Rückdrehung der Phasenverschiebung oberhalb von $f_{gk}$ durch den Isolationswiderstand
<!-- page-import:0604:end -->
