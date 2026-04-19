# Power Dividers and Hybrids

<!-- page-import:1350:start -->
23.4 Leistungsteiler und Hybride 1313

#### 23.3.2.2 Ankoppelung mit induktivem Spannungsteiler

Mit dem Teilerfaktor

$$
n_L = 1 + \frac{L_1}{L_2}
$$

(23.41)

folgt für die Elemente des äquivalenten Ersatzschaltbilds in Abb. 23.30b:

$$
R_P = n_L^2 R_L \quad,\quad L_P = n_L L_1 \quad,\quad L = L_1 + L_2
$$

(23.42)

Für

$$
f \ll f_{P,L} = \frac{R_P}{2\pi L_P} = \frac{n_L R_L}{2\pi L_1} \approx \frac{R_L}{2\pi L_2}
$$

(23.43)

kann man die Induktivität $L_P$ vernachlässigen; dann wird der Schwingkreis mit dem transformierten Widerstand $R_P$ belastet, der parallel zum Resonanzwiderstand $R$ liegt.

#### 23.3.2.3 Ankoppelung mit festgekoppeltem induktivem Spannungsteiler

Wenn man die Induktivitäten des induktiven Spannungsteilers fest koppelt, so dass für die Gegeninduktivität

$$
M = \sqrt{L_1L_2}
$$

gilt, erhält man den Teilerfaktor:

$$
n_{L,k} = 1 + \sqrt{\frac{L_1}{L_2}}
$$

(23.44)

Für die Elemente des äquivalenten Ersatzschaltbilds in Abb. 23.30c gilt:

$$
R_P = n_{L,k}^2 R_L \quad,\quad L = L_1 + L_2 + 2M = \left(\sqrt{L_1} + \sqrt{L_2}\right)^2
$$

(23.45)

Der Schwingkreis wird mit dem transformierten Widerstand $R_P$ belastet, der parallel zum Resonanzwiderstand $R$ liegt. Die Transformation hängt nicht von der Frequenz ab.

## 23.4 Leistungsteiler und Hybride

Wenn die Ausgangsleistung eines angepassten Verstärkers auf zwei Lastwiderstände verteilt werden soll, muss man einen Leistungsteiler (*power splitter*) einsetzen; er ermöglicht eine verlustfreie, allseitige Anpassung an den Wellenwiderstand $Z_W$. Das Prinzip der Leistungsteilung bei einem angepassten HF-Verstärker ist in Abb. 23.31 im Vergleich zur Vorgehensweise bei einem NF-Verstärker dargestellt. NF-Verstärker haben im allgemeinen einen sehr kleinen Ausgangswiderstand $r_a$; deshalb kann man am Ausgang mehrere Lastwiderstände anschließen, solange der zulässige Ausgangsstrom nicht überschritten wird. Die vom Verstärker abgegebene Leistung hängt von den Lastwiderständen ab. Dagegen muss ein angepasster HF-Verstärker immer mit einem Lastwiderstand $R_L = Z_W$ betrieben werden, damit die abgegebene Leistung maximal wird und keine Reflexionen auftreten, durch die der Verstärker zerstört werden kann. Daraus folgt, dass die abgegebene Leistung konstant ist und im Falle mehrerer Lastwiderstände mit einem Leistungsteiler verteilt werden muss.

Wir beschreiben im folgenden Leistungsteiler mit drei Anschlüssen und Leistungsteiler mit vier Anschlüssen. Letztere werden als Hybride bezeichnet und können auch als Leistungssummierer (*power combiner*) eingesetzt werden.
<!-- page-import:1350:end -->

<!-- page-import:1351:start -->
1314 23. Passive Komponenten

a NF-Verstärker mit zwei Lastwiderständen

b angepasster HF-Verstärker mit zwei Lastwiderständen und Leistungsteiler

**Abb. 23.31.** Verstärker mit zwei Lastwiderständen

Ein typischer Anwendungsfall für Leistungsteiler und Leistungssummierer sind HF-Leistungsverstärker, die aus zwei parallelgeschalteten Stufen bestehen, siehe Abb. 23.32. Die Eingangsleistung wird mit einem Leistungsteiler auf die beiden Stufen verteilt, und die Ausgangsleistungen der Stufen werden mit einem Leistungssummierer addiert.

**Abb. 23.32.** Leistungsteiler und Leistungssummierer bei einem HF-Verstärker mit zwei parallelgeschalteten Stufen
<!-- page-import:1351:end -->

<!-- page-import:1352:start -->
23.4 Leistungsteiler und Hybride 1315

a Dreieckschaltung

b Sternschaltung

**Abb. 23.33.** Verlustbehaftete Leistungsteiler mit Widerständen

## 23.4.1 Leistungsteiler

### 23.4.1.1 Verlustbehaftete Leistungsteiler mit Widerständen

Zur breitbandigen Leistungsteilung werden die in Abb. 23.33 gezeigten, verlustbehafteten Leistungsteiler mit Widerständen (*resistive power splitter*) eingesetzt. Sie sind allseitig angepasst, geben aber nur die Hälfte der zugeführten Leistung an den Ausgängen ab; die andere Hälfte geht in den Widerständen des Teilers verloren. Da an jedem Ausgang ein Viertel der Eingangsleistung abgegeben wird, werden diese Teiler auch als 6 dB-Leistungsteiler bezeichnet. Eine Bezeichnung der drei Anschlüsse ist aufgrund der Symmetrie nicht erforderlich.

### 23.4.1.2 Wilkinson-Teiler

Allseitige Anpassung und Verlustfreiheit zeichnen den in Abb. 23.34 gezeigten *Wilkinson-Teiler* aus. Er besteht aus zwei $\lambda/4$-Leitungen und einem Widerstand und ist demzufolge schmalbandig. Der Eingang muss gekennzeichnet werden, da der Teiler unsymmetrisch ist und nur in der in Abb. 23.34 gezeigten Konfiguration verlustfrei arbeitet. Da an jedem Ausgang die Hälfte der Eingangsleistung abgegeben wird, wird diese Teiler auch als 3 dB-Leistungsteiler bezeichnet.

Das Verhalten des Wilkinson-Teilers lässt sich am einfachsten mit Hilfe der S-Parameter beschreiben; es gilt [23.1]:

$$
\begin{bmatrix}
b_1\\
b_2\\
b_3
\end{bmatrix}
=
\begin{bmatrix}
S_{11} & S_{12} & S_{13}\\
S_{21} & S_{22} & S_{23}\\
S_{31} & S_{32} & S_{33}
\end{bmatrix}
\begin{bmatrix}
a_1\\
a_2\\
a_3
\end{bmatrix}
=
\frac{-j}{\sqrt{2}}
\begin{bmatrix}
0 & 1 & 1\\
1 & 0 & 0\\
1 & 0 & 0
\end{bmatrix}
\begin{bmatrix}
a_1\\
a_2\\
a_3
\end{bmatrix}
\qquad (23.46)
$$
<!-- page-import:1352:end -->

<!-- page-import:1353:start -->
1316 23. Passive Komponenten

Abb. 23.34. Wilkinson-Teiler

Die allseitige Anpassung zeigt sich darin, dass die Reflexionsfaktoren an den drei Anschlüssen Null sind: $S_{11} = S_{22} = S_{33} = 0$. Wenn am Anschluss 1 eine Welle $a_1$ mit der Leistung

$$
P_1 = |a_1|^2
$$

einfällt, erhält man an den Anschlüssen 2 und 3 ausfallende Wellen mit den Leistungen:

$$
P_2 = |b_2|^2 = |S_{21}|^2 |a_1|^2 = \frac{|a_1|^2}{2} = \frac{P_1}{2}
$$

$$
P_3 = |b_3|^2 = |S_{31}|^2 |a_1|^2 = \frac{|a_1|^2}{2} = \frac{P_1}{2}
$$

Man beachte, dass in diesem Fall aufgrund der allseitigen Anpassung $b_1 = a_2 = a_3 = 0$ gilt. Fällt dagegen am Anschluss 2 eine Welle $a_2$ mit der Leistung $P_2 = |a_2|^2$ ein, erhält man $P_1 = |S_{12}|^2 |a_2|^2 = |a_2|^2/2 = P_2/2$ und $P_3 = |S_{32}|^2 |a_2|^2 = 0$, d.h. die Hälfte der Leistung wird am Anschluss 1 abgegeben; die andere Hälfte geht am Widerstand des Teilers verloren. Dasselbe gilt für eine einfallende Welle am Anschluss 3.

## 23.4.2 Hybride

Man kann zeigen, dass ein verlustloser, symmetrischer, allseitig an den Wellenwiderstand angepasster Leistungsteiler nur mit vier Anschlüssen ausgeführt werden kann; bei drei Anschlüssen führen die an die S-Parameter zu stellenden Anforderungen auf einen Widerspruch [23.1]. Leistungsteiler mit vier Anschlüssen werden als Hybride oder Ringkoppler bezeichnet. Die an einem Anschluss zugeführte Leistung wird auf zwei der drei anderen Anschlüsse verteilt; der vierte Anschluss bleibt ohne Signal.

### 23.4.2.1 S-Parameter eines Hybrids

Die Eigenschaften eines Hybrids lassen sich am einfachsten mit Hilfe der S-Parameter beschreiben; dabei muss man zwischen dem $180^\circ$-Hybrid mit

$$
\begin{bmatrix}
b_1 \\
b_2 \\
b_3 \\
b_4
\end{bmatrix}
=
-\frac{j}{\sqrt{2}}
\begin{bmatrix}
0 & 0 & 1 & 1 \\
0 & 0 & 1 & -1 \\
1 & 1 & 0 & 0 \\
1 & -1 & 0 & 0
\end{bmatrix}
\begin{bmatrix}
a_1 \\
a_2 \\
a_3 \\
a_4
\end{bmatrix}
$$

und dem $90^\circ$-Hybrid mit

(23.47)
<!-- page-import:1353:end -->

<!-- page-import:1354:start -->
23.4 Leistungsteiler und Hybride 1317

a 180$^\circ$ Hybrid

b 90$^\circ$ Hybrid

**Abb. 23.35.** Hybride

$$
\begin{bmatrix}
b_1\\
b_2\\
b_3\\
b_4
\end{bmatrix}
=
\frac{-j}{\sqrt{2}}
\begin{bmatrix}
0 & 0 & -j & 1\\
0 & 0 & 1 & -j\\
-j & 1 & 0 & 0\\
1 & -j & 0 & 0
\end{bmatrix}
\begin{bmatrix}
a_1\\
a_2\\
a_3\\
a_4
\end{bmatrix}
\qquad (23.48)
$$

unterscheiden. Beide Hybride sind allseitig angepasst: $S_{11}=S_{22}=S_{33}=S_{44}=0$. Abbildung 23.35 zeigt die symbolische Darstellung der beiden Varianten.

Wir betrachten zunächst den 180°-Hybrid. Eine am Anschluss 1 einfallende Welle $a_1$ wird leistungsmäßig auf die Anschlüsse 3 und 4 verteilt; aus (23.47) folgt mit $a_2=0$:

$$
b_3=S_{31}a_1=\frac{-j\,a_1}{\sqrt{2}}
\qquad \Rightarrow \qquad
P_3=|b_3|^2=\frac{|a_1|^2}{2}=\frac{P_1}{2}
$$

$$
b_4=S_{41}a_1=\frac{-j\,a_1}{\sqrt{2}}
\qquad \Rightarrow \qquad
P_4=|b_3|^2=\frac{|a_1|^2}{2}=\frac{P_1}{2}
$$

Die ausfallenden Wellen $b_3$ und $b_4$ sind phasengleich. Eine am Anschluss 2 einfallende Welle $a_2$ wird ebenfalls leistungsmäßig auf die Anschlüsse 3 und 4 verteilt, allerdings sind hier die ausfallenden Wellen $b_3$ und $b_4$ um 180° phasenverschoben; aus (23.47) folgt mit $a_1=0$:

$$
b_3=S_{32}a_2=\frac{-j\,a_2}{\sqrt{2}}
\qquad \Rightarrow \qquad
P_3=|b_3|^2=\frac{|a_2|^2}{2}=\frac{P_2}{2}
$$

$$
b_4=S_{42}a_2=\frac{j\,a_2}{\sqrt{2}}
\qquad \Rightarrow \qquad
P_4=|b_3|^2=\frac{|a_2|^2}{2}=\frac{P_2}{2}
$$

Die Phasenverschiebung von 180° zwischen den Anschlüssen 2 und 4 ist in der symbolischen Darstellung in Abb. 23.35a vermerkt. Beim 90°-Hybrid erhält man für eine am Anschluss 1 einfallende Welle

$$
b_3=S_{31}a_1=\frac{-a_1}{\sqrt{2}}
\qquad \Rightarrow \qquad
P_3=|b_3|^2=\frac{|a_1|^2}{2}=\frac{P_1}{2}
$$

$$
b_4=S_{41}a_1=\frac{-j\,a_1}{\sqrt{2}}
\qquad \Rightarrow \qquad
P_4=|b_3|^2=\frac{|a_1|^2}{2}=\frac{P_1}{2}
$$

und für eine am Anschluss 2 einfallende Welle:

$$
b_3=S_{32}a_2=\frac{-j\,a_2}{\sqrt{2}}
\qquad \Rightarrow \qquad
P_3=|b_3|^2=\frac{|a_2|^2}{2}=\frac{P_2}{2}
$$

$$
b_4=S_{42}a_2=\frac{-a_2}{\sqrt{2}}
\qquad \Rightarrow \qquad
P_4=|b_3|^2=\frac{|a_2|^2}{2}=\frac{P_2}{2}
$$
<!-- page-import:1354:end -->

<!-- page-import:1355:start -->
1318  23. Passive Komponenten

a 180° Hybrid  
b 90° Hybrid  
c 90° Hybrid mit Übertrager

**Abb. 23.36.** Hybride mit Spulen und Kondensatoren

Hier sind die ausfallenden Wellen in beiden Fällen um 90° phasenverschoben; in der symbolischen Darstellung in Abb. 23.35b ist dies vermerkt.

#### 23.4.2.2 Hybride mit Spulen und Kondensatoren

Abbildung 23.36 zeigt drei Hybride mit Spulen und Kondensatoren [23.7]. Für das 180°-Hybrid in Abb. 23.36a muss gelten:

$$
L = \frac{Z_W \sqrt{2}}{2 \pi f_M}, \qquad C = \frac{1}{2 \pi f_M Z_W \sqrt{2}}
$$

(23.49)

Dabei ist $f_M$ die Mittenfrequenz, bei der der Hybrid exakt arbeitet. Die Bandbreite beträgt etwa 20% der Mittenfrequenz. Für das 90°-Hybrid in Abb. 23.36b muss gelten:

$$
L = \frac{Z_W}{2 \pi f_M \sqrt{2}}, \qquad C_1 = \frac{1}{2 \pi f_M Z_W}, \qquad C_2 = \frac{\sqrt{2} - 1}{2 \pi f_M Z_W}
$$

(23.50)

Die Bandbreite beträgt hier nur etwa 2% der Mittenfrequenz. Für das 90°-Hybrid mit zwei festgekoppelten Spulen in Abb. 23.36c muss gelten:

$$
L = \frac{Z_W}{2 \pi f_M}, \qquad C = \frac{1}{2 \pi f_M Z_W}
$$

(23.51)

Die Bandbreite beträgt ebenfalls nur etwa 2% der Mittenfrequenz.

#### 23.4.2.3 Hybride mit Leitungen

Bei Frequenzen im GHz-Bereich werden Hybride meist mit Streifenleitungen ausgeführt; Abb. 23.37 zeigt drei Ausführungen [23.1],[23.7]. Besonders platzsparend und mit einer Bandbreite von etwa 10% der Mittenfrequenz relativ breitbandig ist die Ausführung in Abb. 23.37c mit zwei nichtgekoppelten Leitungen der Länge $\lambda/8$ und zwei Kapazitäten:

$$
C = \frac{1}{2 \pi f_M Z_W}
$$

(23.52)
<!-- page-import:1355:end -->

<!-- page-import:1356:start -->
23.4 Leistungsteiler und Hybride 1319

a 180° Hybrid

b 90° Hybrid

c 90° Hybrid mit Kapazitäten

**Abb. 23.37.** Hybride mit Leitungen
<!-- page-import:1356:end -->

<!-- page-import:1357:start -->
[unclear]
<!-- page-import:1357:end -->
