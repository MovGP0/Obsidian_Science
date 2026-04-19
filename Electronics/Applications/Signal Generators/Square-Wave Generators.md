# Square-Wave Generators

<!-- page-import:0927:start -->
890 14. Signalgeneratoren

**Abb. 14.17.** Funktionsgenerator mit Integrator

am Kondensator bis auf $\frac{2}{3}U_b$ angestiegen ist. Das ist der Fall, wenn mindestens für die Zeit

$$
t_1 \;=\; R_1 C \ln 3
$$

kein neuer Trigger-Impuls eintrifft. Deshalb wird die Schaltung auch als „Missing Pulse Detector“ bezeichnet. Der Spannungsverlauf ist in Abb. 14.16 für mehrere aufeinanderfolgende Trigger-Impulse aufgezeichnet.

## 14.3 Rechteckgeneratoren

Schaltungen, die selbsttätig eine Rechteckschwingung erzeugen, werden als Multivibratoren bezeichnet. Die meisten Schaltungen basieren auf einem Integrator mit nachfolgendem Schmitt-Trigger, der das Eingangssignal für den Integrator so umschaltet, dass sich die Ausgangsspannung des Integrators periodisch zwischen den Triggerpegeln auf und ab bewegt. Schaltungen, die neben dem Rechteck auch ein dreieckförmiges Signal erzeugen, werden auch als Funktionsgeneratoren bezeichnet.

### 14.3.1 Funktionsgeneratoren

Das Prinzip besteht darin, an einen Integrator eine konstante Spannung anzulegen, die entweder positiv oder negativ ist, je nachdem, in welche Richtung die Ausgangsspannung des Integrators gerade laufen soll. Erreicht die Ausgangsspannung des Integrators den Einschalt- bzw. Ausschaltpegel des nachgeschalteten Schmitt-Triggers, wird das Vorzeichen am Eingang des Integrators invertiert. Dadurch entsteht an dessen Ausgang eine dreieckförmige Spannung, die zwischen den Triggerpegeln hin und her läuft.

Es gibt zwei verschiedene Realisierungsmöglichkeiten, die sich in der Ausführung der Integration unterscheiden. Bei der Schaltung in Abb. 14.17 wird je nach Stellung des Analogschalters $+U_e$ bzw. $-U_e$ an einen Integrator gelegt. Bei der Schaltung in Abb. 14.18 wird der Strom $+I_e$ bzw. $-I_e$ über einen Analogschalter in den Kondensator $C$ eingeprägt. Dadurch ergibt sich ebenfalls ein zeitlinearer Anstieg bzw. Abfall der Spannung. Um die dreieckförmige Spannung am Kondensator durch Belastung nicht zu verfälschen, benötigt man hier in der Regel einen Impedanzwandler. Der Vorteil dieser Methode besteht jedoch darin, dass sich der Impedanzwandler und der Strom-Umschalter leichter für höhere Frequenzen realisieren lassen.

Zu der einfachsten Ausführung gelangt man, wenn man von dem Prinzip in Abb. 14.17 ausgeht und die Ausgangsspannung des Schmitt-Triggers selbst als Eingangsspannung für den Integrator verwendet. Die entstehende Schaltung ist in Abb. 14.19 dargestellt. Der Schmitt-Trigger liefert eine konstante Ausgangsspannung, die der Integrator integriert.
<!-- page-import:0927:end -->

<!-- page-import:0928:start -->
14.3 Rechteckgeneratoren 891

**Abb. 14.18.** Funktionsgenerator mit Stromquellen zur Integration

Erreicht seine Ausgangsspannung den Trigger-Pegel des Schmitt-Triggers, ändert die zu integrierende Spannung $U_R$ momentan ihr Vorzeichen. Dadurch läuft der Ausgang des Integrators in umgekehrter Richtung, bis der andere Trigger-Pegel erreicht ist. Damit die positive und negative Steigung betragsmäßig gleich groß werden, muss der Komparator eine symmetrische Ausgangsspannung $\pm U_{R,max}$ besitzen. Dann ergibt sich nach Abb. 14.9 für die Dreieckschwingung eine Amplitude von:

$$
\hat{U}_D=\frac{R_1}{R_2}U_{R,max}
$$

Die Integrationszeit, die der Integrator benötigt, um von $-\hat{U}_D$ bis $\hat{U}_D$ zu laufen, beträgt:

$$
t_1=2\frac{R_1}{R_2}RC \qquad \Rightarrow \qquad T=2t_1=4\frac{R_1}{R_2}RC
$$

Ein Beispiel für die praktische Ausführung des Stromschaltprinzips ist in Abb. 14.20 dargestellt. Der gesteuerte Stromschalter besteht aus den Transistoren $T_1$ bis $T_3$. Solange das Steuersignal $x=0$ ist, wird der Kondensator über $T_1$ mit dem Strom $I$ entladen. Wenn die Dreieckspannung den Wert $-1\ \mathrm{V}$ unterschreitet, kippt der Schmitt-Trigger um, und es wird $x=1$. Dadurch sperrt $T_3$, und die Stromquelle $T_2$ wird eingeschaltet. Sie liefert den doppelten Strom wie $T_1$, nämlich $2I$. Dadurch wird der Kondensator $C$ mit dem Strom $I$ aufgeladen, ohne dass $T_1$ abgeschaltet werden muss. Wenn die Dreieckspannung den oberen Triggerpegel von $+1\ \mathrm{V}$ überschreitet, kippt der Schmitt-Trigger in den Zustand $x=0$ zurück, und der Kondensator $C$ wird wieder entladen. Der Zeitverlauf ist in Abb. 14.21 dargestellt. Die Schwingungsdauer wird durch die Zeit bestimmt, die der Strom $I$ benötigt, um den Kondensator von $-U_1$ auf $U_1$ aufzuladen $t_1=CU_1/I$. Daraus folgt die Frequenz:

Frequenz: $f=\frac{R_2}{4R_1}\frac{1}{RC}$, Amplitude: $\hat{U}_D=\frac{R_1}{R_2}U_{R,max}$

**Abb. 14.19.** Einfacher Funktionsgenerator mit Integrator
<!-- page-import:0928:end -->

<!-- page-import:0929:start -->
892 14. Signalgeneratoren

*Frequenz:* $f=\frac{I}{4\hat{U}_D C}=\frac{0{,}6}{RC}$, *Amplitude:* $\hat{U}_D=1\,\mathrm{V}$

**Abb. 14.20.** Schneller Funktionsgenerator mit Stromschalter

**Abb. 14.21.**  
Signalverlauf im Funktionsgenerator mit Stromschaltern

$$
f=\frac{1}{2t_1}=\frac{I}{2CU_1}
$$

Den in Abb. 14.18 eingezeichneten Impedanzwandler benötigt man nur dann, wenn man die Dreieckspannung belasten möchte. Hier wurde darauf verzichtet, da die angeschlossenen Komparatoren hochohmig sind. An der angegebenen Gleichung für die Frequenz sieht man, dass sie proportional zum Strom $I$ ist. Daher eignet sich die Schaltung gut zur Frequenzmodulation, wenn man den Strom linear mit dem Modulationssignal steuert.

## 14.3.2 Einfache Rechteckgeneratoren

Funktionsgeneratoren lassen sich auf einen Schmitt-Trigger reduzieren, wenn man auf den Integrator verzichtet und den Kondensator einfach über einen Widerstand auf- und entlädt. Dadurch ergibt sich allerdings kein linearer, sondern ein exponentieller Signalverlauf am Kondensator; das ist aber gleichgültig, wenn es nur darum geht, ein Rechtecksignal zu erzeugen.

### 14.3.2.1 Timer als Schmitt-Trigger

Der Multivibrator in Abb. 14.22 besteht aus einem Schmitt-Trigger, einem Entladetransistor $T$ und den zeitbestimmenden Bauteilen $R_1, R_2, C$. Durch den internen Spannungsteiler $R$ werden die Umschaltschwellen auf die Werte $\frac{1}{3}\,U_b$ bzw. $\frac{2}{3}\,U_b$ festgelegt. Wenn das Kon-
<!-- page-import:0929:end -->

<!-- page-import:0930:start -->
14.3 Rechteckgeneratoren 893

*Schwingungsdauer:* $T = (R_1 + 2R_2)C\,\ln 2 \;\approx\; 0{,}7 \cdot (R_1 + 2R_2)C$

**Abb. 14.22.** Multivibrator mit Timer. Die eingetragenen Pinnummern gelten für Timer ICM7555.

[d]ensatorpotential die obere Umschaltschwelle überschreitet, wird $R = 1$. Das Flip-Flop wird auf $Q = 0$ zurückgesetzt und der Transistor $T$ wird leitend. Der Kondensator $C$ wird dann über den Widerstand $R_2$ entladen, bis die untere Umschaltschwelle $\frac{1}{3}U_b$ erreicht ist. Dabei vergeht die Zeit:

$$
t_2 = R_2C\,\ln 2 \;\approx\; 0{,}693\,R_2C
$$

Beim Unterschreiten der Schwelle wird $S = 1$ und das Flip-Flop wird gesetzt, der Ausgang geht auf $Q = 1$, und der Transistor $T$ sperrt. Die Aufladung des Kondensators erfolgt jetzt über die Reihenschaltung der Widerstände $R_1$ und $R_2$. Bis zum Erreichen der oberen Umschaltschwelle vergeht die Zeit:

$$
t_1 = (R_1 + R_2)C\,\ln 2 \;\approx\; 0{,}693\,(R_1 + R_2)C
$$

Die Zeit $t_1$ ist also immer größer als $t_2$. Daher lässt sich mit dieser Schaltung keine Symmetrische Rechteckschwingung erzeugen. Für die Frequenz erhält man:

$$
f = \frac{1}{t_1 + t_2} \;\approx\; \frac{1{,}44}{(R_1 + 2R_2)C}
$$

**Abb. 14.23.** Spannungsverlauf beim Multivibrator mit Timer
<!-- page-import:0930:end -->

<!-- page-import:0931:start -->
894  14. Signalgeneratoren

**Abb. 14.24.** Multivibrator mit OPV-Schmitt-Trigger

Der Spannungsverlauf ist in Abb. 14.23 aufgezeichnet. Mit Hilfe des Reset-Anschlusses Pin 4 kann man die Schwingung anhalten.

Wenn man über den Anschluss Pin 5 eine Spannung einspeist, kann man die Trigger-Pegel verschieben. Auf diese Weise lässt sich die Aufladezeit $t_1$ und damit die Frequenz des Multivibrators verändern. Ändert man das Potential $U_5=\frac{2}{3}U_b$ um den Wert $\Delta U_5$, ergibt sich die relative Frequenzänderung:

$$
\frac{\Delta f}{f}\approx -3{,}3\cdot \frac{R_1+R_2}{R_1+2R_2}\cdot \frac{\Delta U_5}{U_b}
$$

Bei nicht zu großem Spannungshub erhält man eine Frequenzmodulation mit passabler Linearität.

#### 14.3.2.2 Operationsverstärker als Schmitt-Trigger

Bei dem Multivibrator in Abb. 14.24 wurde der Integrator in Abb. 14.17 einfach durch einen Tiefpass ersetzt. Wir nehmen einmal an, der Ausgang befinde sich wegen der Mitkopplung an der positiven Aussteuerungsgrenze $U_a=U_{max}$. Dann steigt die Spannung am Kondensator an bis die Triggerpegel

$$
V_N=V_P=\frac{R_1}{R_1+R_2}U_{max}=\alpha U_{max}
$$

erreicht ist. Nach dem Erreichen des Triggerpegels springt der Ausgang des Schmitt-Triggers auf $-U_{max}$ und der Kondensator wird entladen bis der untere Triggerpegel erreicht wird. Zur Berechnung der Schwingungsdauer können wir die Differentialgleichung für $V_N$ direkt aus der Schaltung entnehmen:

$$
\frac{dV_N}{dt}=\frac{\pm U_{max}-V_N}{RC}
$$

Mit der Randbedingung

$$
V_N(t=0)=U_{e,ein}=-\alpha U_{max}
$$

erhalten wir die Lösung:

$$
V_N(t)=U_{max}\left[1-(1+\alpha)e^{-\frac{t}{RC}}\right]
$$

Der Triggerpegel $U_{e,aus}=\alpha U_{max}$ wird nach der Zeit

$$
t_1=RC\ln\frac{1+\alpha}{1-\alpha}=RC\ln\left(1+\frac{2R_1}{R_2}\right)
$$

erreicht. Die Schwingungsdauer beträgt demnach:
<!-- page-import:0931:end -->

<!-- page-import:0932:start -->
14.3 Rechteckgeneratoren 895

**Abb. 14.25.** Multivibrator mit Schmitt-Trigger Gatter

$$
T = 2\,t_1 = 2RC \ln\!\left(1 + \frac{2R_1}{R_2}\right)\ \ \overset{R_1=R_2}{=}\ \ 2RC \ln 3 \approx 2{,}2RC
$$

Operationsverstärker besitzen eine interne Frequenzgangkorrektur, die hier die Schaltzeiten unnötig erhöht. Deshalb ist es für höhere Frequenzen vorteilhaft, stattdessen Komparatoren einzusetzen.

### 14.3.2.3 Gatter als Schmitt-Trigger

Eine besonders einfache Möglichkeit zur Realisierung eines Multivibrators besteht in der Verwendung eines Schmitt-Trigger Gatters gemäß Abb. 14.25. Hier wird der Kondensator $C$ über den Widerstand $R$ bis zum Ausschaltpegel des Schmitt-Triggers aufgeladen und anschließend wieder bis zum Einschaltpegel entladen. Man erkennt in Abb. 14.25, dass die Spannung am Kondensator zwischen den Triggerpegeln hin und her pendelt. Die Frequenzgenauigkeit und Frequenzstabilität dieser Schaltung ist allerdings schlechter als bei den vorhergehenden Schaltungen.

## 14.3.3 Rechteckgeneratoren mit hoher Frequenzgenauigkeit

Die Frequenzgenauigkeit der beschriebenen Rechteckgeneratoren ist schlecht, da sie von den Toleranzen von Widerständen und Kondensatoren abhängt und darüber hinaus auch noch Schaltzeiten der aktiven Bauelemente. Hohe Frequenzgenauigkeit lässt sich am einfachsten mit Quarz-Oszillatoren erreichen, die in Kap. 26.3 beschrieben werden. Allerdings ist der damit direkt realisierbare Frequenzbereich auf Werte zwischen $1 \dots 20\,\mathrm{MHz}$ beschränkt. Eine Ausnahme bilden lediglich die $32\,\mathrm{kHz}$-Quarze für Uhren. Wenn man niedrigere Frequenzen benötigt, schaltet man einen digitalen Frequenzteiler nach in Form eines Zählers. Dieses Prinzip ist in Abb. 14.26 dargestellt. Damit die Frequenzteiler möglichst einfach werden, bevorzugt man Dualzähler, die durch Zweierpotenzen teilen. Einige Beispiele sind in Abb. 14.27 zusammengestellt.

**Abb. 14.26.**  
Blockschaltbild zur Erzeugung genauer Frequenzen

**Abb. 14.27.**  
Beispiele für Teilerfaktoren

| gewünschte Frequenz | Quarz-Frequenz | Teilerfaktor |
|---|---|---|
| 1 Hz | 32,768 kHz | $2^{15}$ |
| 1 kHz | 1,024 MHz | $2^{10}$ |
| 1 kHz | 16,384 MHz | $2^{14}$ |
| 100 kHz | 12,800 MHz | $2^7$ |
| 1 MHz | 16,000 MHz | $2^4$ |
<!-- page-import:0932:end -->
