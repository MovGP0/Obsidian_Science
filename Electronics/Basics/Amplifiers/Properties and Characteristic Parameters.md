# Properties and Characteristic Parameters

<!-- page-import:0317:start -->
280  4. Verstärker

**Abb. 4.2.** Symbole für Verstärker

Die Verstärker der Stufe 2 arbeiten mit vergleichsweise kleinen Signalen und werden deshalb als *Kleinsignalverstärker* (*small signal amplifier*) bezeichnet; ihre Ausgangsleistung liegt in den meisten Fällen unter 1 mW. Im Gegensatz dazu werden in der Stufe 6 *Leistungsverstärker* (*power amplifier*) benötigt, die Leistungen von einigen Milliwatt (Kopfhörer, Fernbedienung, usw.) bis zu mehreren Kilowatt (große Lautsprecheranlagen, Rundfunksender, usw.) abgeben können. Leistungsverstärker werden im Kapitel 15 beschrieben.

Zur Filterung der Signale werden neben passiven Filtern in zunehmendem Maße aktive Filter eingesetzt, die ebenfalls Verstärker enthalten. Deshalb lassen sich die Elemente *Verstärker* und *Filter* nicht streng trennen, da jeder Verstärker aufgrund seiner begrenzten Bandbreite auch als Filter arbeitet und jedes aktive Filter eine Signalverstärkung aufweisen kann. Aktive Filter werden im Kapitel 12 behandelt.

Ein weiteres Unterscheidungsmerkmal ist der Frequenzbereich, in dem der Verstärker arbeitet. Man unterscheidet bezüglich der unteren Grenzfrequenz $f_U$ zwischen *Gleichspannungsverstärkern* (*DC amplifier*) und *Wechselspannungsverstärkern* (*AC amplifier*), bezüglich der oberen Grenzfrequenz $f_O$ zwischen *Niederfrequenzverstärkern* (NF-Verstärker, *LF amplifier*) und *Hochfrequenzverstärkern* (HF-Verstärker, *RF amplifier*) und bezüglich der Bandbreite $B = f_O - f_U$ zwischen *Breitbandverstärkern* (*broadband amplifier, wideband amplifier*) und *Schmalbandverstärkern* (*smallband amplifier* bzw. *tuned amplifier*). Bezüglich der oberen Grenzfrequenz wird auch häufig eine Einteilung in *Audio-Verstärker* bzw. *Audiofrequenz-Verstärker* (AF amplifier), *Videoverstärker*, *Zwischenfrequenzverstärker* (ZF-Verstärker, *IF amplifier*) und *Radiofrequenz-Verstärker* (RF amplifier) vorgenommen. Während die Einteilung in Gleich- und Wechselspannungsverstärker unmittelbar aus dem Aufbau folgt – Gleich- oder Wechselspannungskopplung –, ist die Grenze zwischen NF- und HF-Verstärkern nicht festgelegt; oft wird 1 MHz als Grenze verwendet. Ähnliches gilt für die Einteilung in Breit- und Schmalbandverstärker; letztere werden meist mit Hilfe der Mittenfrequenz $f_M = (f_O + f_U)/2$ und der Bandbreite $B = f_O - f_U$ charakterisiert. Bei Schmalbandverstärkern beträgt die Bandbreite weniger als ein Zehntel der Mittenfrequenz: $B < f_M/10$.

Trotz dieser Vielfalt an Verstärker-Typen ist die verwendete Schaltungstechnik nahezu identisch, weil alle Verstärker auf den Transistor-Grundschaltungen aufbauen, die alle Gleichspannung verstärken. Die Einteilung ist vielmehr eine Folge der Kopplung am Ein- und Ausgang sowie zwischen den einzelnen Stufen eines mehrstufigen Verstärkers: bei Gleichspannungsverstärkern wird eine direkte Kopplung (*Gleichspannungskopplung* bzw. *galvanische Kopplung*), bei Wechselspannungsverstärkern eine kapazitive Kopplung mit Koppelkondensatoren (*Wechselspannungskopplung*) und bei Schmalbandverstärkern eine selektive Kopplung mit LC-Schwingkreisen, keramischen Resonatoren oder Oberflächenwellenfiltern verwendet. Abbildung 4.3 zeigt die Kopplung und die Frequenzgänge der genannten Verstärker mit den Kenngrößen $f_U$, $f_O$, $f_M$ und $B$.

Auch die Einteilung in Niederfrequenz- und Hochfrequenzverstärker ist weniger eine Folge der Schaltungstechnik, sondern hängt vor allem von der Transitfrequenz der
<!-- page-import:0317:end -->

<!-- page-import:0462:start -->
4.2 Eigenschaften und Kenngrößen 425

Abb. 4.130. Beispiel: Emitterschaltung

a Schaltung  
b mit Transportmodell

$$
I_a = f_A(U_e,U_a) = 0 \quad \Rightarrow \quad U_a = f_{\ddot{U}}(U_e)
$$

(4.142)

Sie wird oft nur Übertragungskennlinie genannt.

Wenn man den Verstärker mit einer Signalquelle mit Innenwiderstand $R_g$ und einer Last $R_L$ betreibt, gilt nach Abb. 4.129:

$$
I_e = \frac{U_g-U_e}{R_g}, \quad I_a = -\frac{U_a}{R_L}
$$

(4.143)

Die durch diese Gleichungen beschriebenen Geraden werden Quellen- und Lastgerade genannt. Durch Einsetzen in (4.140) und (4.141) erhält man das nichtlineare Gleichungssystem

$$
U_g = U_e + R_g\, f_E(U_e)
$$

$$
0 = U_a + R_L\, f_A(U_e,U_a)
$$

(4.144)

und daraus die Betriebs-Übertragungskennlinie:

$$
U_a = f_{\ddot{U}B}(U_g)
$$

(4.145)

Die Lösung der Gleichung (4.142) und des Gleichungssystems (4.144) sowie die Ermittlung der Betriebs-Übertragungskennlinie ist nur in Ausnahmefällen geschlossen möglich. In der Praxis werden Schaltungssimulationsprogramme eingesetzt, die die Gleichungen im Rahmen einer Gleichspannungsanalyse (DC analysis) punktweise lösen und die Kennlinien grafisch darstellen. Wenn die Kennlinien des Verstärkers grafisch vorliegen, kann man das Gleichungssystem (4.144) auch grafisch lösen, indem man die Geraden (4.143) in das Eingangs- bzw. Ausgangskennlinienfeld einzeichnet und die Schnittpunkte mit den Kennlinien ermittelt.

*Beispiel:* Für die in Abb. 4.130 gezeigte Emitterschaltung erhält man unter Verwendung des Transportmodells aus Abb. 2.26 auf Seite 64

$$
I_e = f_E(U_e,U_a) = I_{B,N} + I_{B,I}
$$

$$
= \frac{I_S}{B_N}\left(e^{\frac{U_e}{U_T}}-1\right) + \frac{I_S}{B_I}\left(e^{\frac{U_e-U_a}{U_T}}-1\right)
$$

$$
I_a = f_A(U_e,U_a) = \frac{U_a-U_b}{R_C} + B_N I_{B,N} - (1+B_I)\, I_{B,I}
$$
<!-- page-import:0462:end -->

<!-- page-import:0463:start -->
426  4. Verstärker

a Eingangskennlinie

Quellengerade  
$U_g = 1\,\mathrm{V}$  
$R_g = 100\,\mathrm{k}\Omega$

b Ausgangskennlinienfeld

Lastgerade  
$R_L = 10\,\mathrm{k}\Omega$

**Abb. 4.131.** Kennlinien der Emitterschaltung aus Abb. 4.130 mit $U_b = 5\,\mathrm{V}$ und $R_C = 10\,\mathrm{k}\Omega$

$$
= \frac{U_a-U_b}{R_C} + I_S \left(e^{\frac{U_e}{U_T}} - 1\right) - \frac{1+B_I}{B_I}\, I_S \left(e^{\frac{U_e-U_a}{U_T}} - 1\right)
$$

Für den praktischen Betrieb ist nur der Bereich interessant, in dem der Transistor im Normalbetrieb arbeitet: $U_a > U_{CE,sat} \approx 0{,}2\,\mathrm{V}$; in diesem Bereich wirkt sich die Ausgangsspannung nicht auf die Eingangskennlinie aus. Bei Vernachlässigung der Sperrströme folgt:

$$
I_e = f_E(U_e) = \frac{I_S}{B_N}\, e^{\frac{U_e}{U_T}}
$$

$$
I_a = f_A(U_e,U_a) = \frac{U_a-U_b}{R_C} + I_S e^{\frac{U_e}{U_T}}
$$

Die Kennlinien sind in Abb. 4.131 dargestellt. Die Leerlauf-Übertragungskennlinie kann hier noch geschlossen berechnet werden:

$$
f_A(U_e,U_a)=0 \quad \Rightarrow \quad U_a = f_{\ddot{U}}(U_e) = U_b - I_S R_C e^{\frac{U_e}{U_T}}
$$

Mit $U_g = 1\,\mathrm{V}$, $R_g = 100\,\mathrm{k}\Omega$ und $R_L = 10\,\mathrm{k}\Omega$ erhält man die Quellengerade in Abb. 4.131a und die Lastgerade in Abb. 4.131b. Aus den Schnittpunkten entnimmt man $U_e(U_g = 1\,\mathrm{V}) \approx 0{,}69\,\mathrm{V}$ und $U_a(U_e = 0{,}69\,\mathrm{V}) \approx 1\,\mathrm{V}$. Damit kennt man einen Punkt der Betriebs-Übertragungskennlinie: $U_a(U_g = 1\,\mathrm{V}) \approx 1\,\mathrm{V}$. Durch Vorgabe weiterer Werte für $U_g$ kann man die Kennlinie punktweise ermitteln. Ein Programm zur Schaltungssimulation geht prinzipiell in gleicher Weise vor, indem das Gleichungssystem (4.144) für die vom Benutzer angegebenen Werte für $U_g$ numerisch gelöst wird; Abb. 4.132 zeigt das Ergebnis.
<!-- page-import:0463:end -->

<!-- page-import:0464:start -->
4.2 Eigenschaften und Kenngrößen 427

**Abb. 4.132.** Betriebs-Übertragungskennlinie der Emitterschaltung aus Abb. 4.130 mit $U_b = 5\ \mathrm{V}$, $R_C = 10\,\mathrm{k}\Omega$, $R_g = 100\,\mathrm{k}\Omega$ und $R_L = 10\,\mathrm{k}\Omega$

## 4.2.2 Kleinsignal-Kenngrößen

Die Kleinsignal-Kenngrößen beschreiben das quasi-lineare Verhalten eines Verstärkers bei Aussteuerung mit kleinen Amplituden in einem Arbeitspunkt; diese Betriebsart wird *Kleinsignalbetrieb* genannt.

### 4.2.2.1 Arbeitspunkt

Der Arbeitspunkt A wird durch die Spannungen $U_{e,A}$ und $U_{a,A}$ und durch die Ströme $I_{e,A}$ und $I_{a,A}$ charakterisiert:

$$
I_{e,A} = f_E(U_{e,A}) \quad,\quad I_{a,A} = f_A(U_{e,A}, U_{a,A})
$$

Im allgemeinen hängt der Arbeitspunkt von der Signalquelle und der Last ab. Eine Ausnahme sind Verstärker mit Wechselspannungskopplung über Koppelkondensatoren oder Übertrager, bei denen der Arbeitspunkt unabhängig von der Signalquelle und der Last eingestellt werden kann. Für die Berechnung der Kleinsignal-Kenngrößen spielt es jedoch keine Rolle, wie der Arbeitspunkt zustande kommt.

### 4.2.2.2 Kleinsignalgrößen

Bei der Kleinsignalbetrachtung werden nur noch die Abweichungen vom Arbeitspunkt betrachtet, die durch die Kleinsignalgrößen

$$
u_e = U_e - U_{e,A} \quad,\quad i_e = I_e - I_{e,A}
$$

$$
u_a = U_a - U_{a,A} \quad,\quad i_a = I_a - I_{a,A}
$$

beschrieben werden. Da die Arbeitspunktgrößen $U_{e,A}$, $I_{e,A}$, $U_{a,A}$ und $I_{a,A}$ im Normalfall dem Gleichanteil von $U_e$, $I_e$, $U_a$ und $I_a$ entsprechen, sind die Kleinsignalgrößen ohne Gleichanteil, d.h. mittelwertfrei.

*Beispiel:*

$$
U_e = U_0 + u_1 \cos \omega_1 t + u_2 \cos \omega_2 t \Rightarrow
\left\{
\begin{array}{l}
U_{e,A} = U_0 \\
u_e = u_1 \cos \omega_1 t + u_2 \cos \omega_2 t
\end{array}
\right.
$$
<!-- page-import:0464:end -->

<!-- page-import:0465:start -->
428  4. Verstärker

## 4.2.2.3 Linearisierung

Durch Einsetzen der Kleinsignalgrößen in die Kennlinien (4.140) und (4.141) und Reihenentwicklung im Arbeitspunkt erhält man $^{28}$:

$$
I_e = I_{e,A} + i_e = f_E(U_{e,A} + u_e)
$$

$$
= f_E(U_{e,A}) + \left.\frac{\partial f_E}{\partial U_e}\right|_A u_e + \frac{1}{2}\left.\frac{\partial^2 f_E}{\partial U_e^2}\right|_A u_e^2 + \frac{1}{6}\left.\frac{\partial^3 f_E}{\partial U_e^3}\right|_A u_e^3 + \cdots
$$

$$
I_a = I_{a,A} + i_a = f_A(U_{e,A} + u_e, U_{a,A} + u_a)
$$

$$
= f_A(U_{e,A}, U_{a,A}) + \left.\frac{\partial f_A}{\partial U_e}\right|_A u_e + \left.\frac{\partial f_A}{\partial U_a}\right|_A u_a
$$

$$
+ \frac{1}{2}\left.\frac{\partial^2 f_A}{\partial U_e^2}\right|_A u_e^2 + \left.\frac{\partial^2 f_A}{\partial U_e \partial U_a}\right|_A u_e u_a + \frac{1}{2}\left.\frac{\partial^2 f_A}{\partial U_a^2}\right|_A u_a^2 + \cdots
$$

Bei ausreichend kleiner Aussteuerung kann man die Reihenentwicklung nach dem linearen Glied abbrechen; dadurch erhält man lineare Zusammenhänge zwischen den Kleinsignalgrößen:

$$
i_e = \left.\frac{\partial f_E}{\partial U_e}\right|_A u_e
$$

$$
i_a = \left.\frac{\partial f_A}{\partial U_e}\right|_A u_e + \left.\frac{\partial f_A}{\partial U_a}\right|_A u_a
$$

Der Übergang zu diesen linearen Gleichungen wird *Linearisierung im Arbeitspunkt* genannt.

## 4.2.2.4 Kleinsignal-Kenngrößen

Die bei der Linearisierung auftretenden partiellen Ableitungen, jeweils ausgewertet im Arbeitspunkt A, werden als *Kleinsignal-Kenngrößen* bezeichnet; im einzelnen sind dies:

- der *Kleinsignal-Eingangswiderstand* $r_e$:

$$
r_e = \frac{u_e}{i_e} = \left(\left.\frac{\partial f_E}{\partial U_e}\right|_A\right)^{-1}
\qquad (4.146)
$$

- der *Kleinsignal-Ausgangswiderstand* $r_a$:

$$
r_a = \left.\frac{u_a}{i_a}\right|_{u_e=0} = \left(\left.\frac{\partial f_A}{\partial U_a}\right|_A\right)^{-1}
\qquad (4.147)
$$

Er wird auch als *Kurzschlussausgangswiderstand* bezeichnet, weil der Eingang in diesem Fall *kleinsignalmäßig kurzgeschlossen* wird ($u_e = 0$). In der Praxis bedeutet dies, dass am Eingang eine Spannungsquelle mit ausreichend geringem Innenwiderstand angeschlossen ist, die die Eingangsspannung auf dem Wert $U_{e,A}$ konstant hält.

---

$^{28}$ Im folgenden wird auch bei der Eingangskennlinie $f_E$ eine partielle Differentiation verwendet; damit wird angedeutet, dass $f_E$ im allgemeinen von einer zweiten Variable ($U_a$) abhängt.
<!-- page-import:0465:end -->

<!-- page-import:0466:start -->
4.2 Eigenschaften und Kenngrößen 429

– die Kleinsignal-Verstärkung $A$:

$$
A=\left.\frac{u_a}{u_e}\right|_{i_a=0}
=-\left.\frac{\partial f_A}{\partial U_e}\right|_A
\left(\left.\frac{\partial f_A}{\partial U_a}\right|_A\right)^{-1}
$$

(4.148)

Sie wird auch als Leerlaufverstärkung bezeichnet, weil der Ausgang in diesem Fall leerläuft, d.h. kleinsignalmäßig offen ist ($i_a=0$). Man kann die Verstärkung auch aus der Leerlauf-Übertragungskennlinie (4.142) berechnen:

$$
A=\left.\frac{d f_{\ddot U}}{dU_e}\right|_A
$$

– die Steilheit $S$:

$$
S=\left.\frac{i_a}{u_e}\right|_{u_a=0}
=\left.\frac{\partial f_A}{\partial U_e}\right|_A
$$

(4.149)

Sie ist bei Verstärkern, die einen niederohmigen Ausgang ($r_a$ klein) besitzen und deshalb primär eine Ausgangsspannung liefern, von untergeordneter Bedeutung, spielt aber bei Transistoren und Verstärkern mit hochohmigem Ausgang ($r_a$ groß) eine wichtige Rolle. Durch Vergleich mit (4.147) und (4.148) folgt:

$$
S=-\frac{A}{r_a}
\qquad \text{bzw.} \qquad
A=-Sr_a
$$

(4.150)

Daraus folgt, dass eine der Größen $A$, $r_a$ und $S$ redundant ist.

## 4.2.2.5 Kleinsignalersatzschaltbild eines Verstärkers

Mit den Kleinsignal-Kenngrößen erhält man die in Abb. 4.133 gezeigten Kleinsignalersatzschaltbilder mit den folgenden Gleichungen:

$$
i_e=\frac{u_e}{r_e}
$$

(4.151)

$$
u_a=A\,u_e+i_a r_a
\qquad \text{bzw.} \qquad
i_a=S\,u_e+\frac{u_a}{r_a}
$$

(4.152)

Wenn man den Verstärker mit einer Signalquelle mit Innenwiderstand $R_g$ und einer Last $R_L$ betreibt, erhält man aus dem Kleinsignalersatzschaltbild in Abb. 4.134 die Kleinsignal-Betriebsverstärkung:

$$
A_B=\frac{u_a}{u_g}
=\frac{r_e}{R_g+r_e}\,A\,\frac{R_L}{r_a+R_L}
\overset{A=-Sr_a}{=}
-\frac{r_e}{R_g+r_e}\,S\,\frac{r_aR_L}{r_a+R_L}
$$

(4.153)

Dabei ist $u_g=U_g-U_{g,A}$ die Kleinsignalspannung der Signalquelle. Die Kleinsignal-Betriebsverstärkung setzt sich aus der Leerlaufverstärkung $A$ und den Spannungsteilerfaktoren am Eingang und am Ausgang zusammen; bei einer Darstellung mit Hilfe der Steilheit $S$ geht der ausgangsseitige Faktor in die Parallelschaltung von $r_a$ und $R_L$ über. Man kann die Kleinsignal-Betriebsverstärkung auch aus der Betriebs-Übertragungskennlinie (4.145) ermitteln:

$$
A_B=\left.\frac{d f_{\ddot U B}}{dU_g}\right|_A
$$

*Beispiel:* Für die Emitterschaltung in Abb. 4.130a auf Seite 425 wurden die Kennlinien
<!-- page-import:0466:end -->

<!-- page-import:0467:start -->
430  4. Verstärker

a mit Verstärkung $A$

b mit Steilheit $S$

**Abb. 4.133.** Kleinsignalersatzschaltbilder eines Verstärkers

$$
I_e = f_E(U_e) = \frac{I_S}{B_N} e^{\frac{U_e}{U_T}}, \qquad
I_a = f_A(U_e,U_a) = \frac{U_a-U_b}{R_C} + I_S e^{\frac{U_e}{U_T}}
$$

ermittelt; mit $U_g = 1\,\mathrm{V}$, $R_g = 100\,\mathrm{k\Omega}$ und $R_L = R_C = 10\,\mathrm{k\Omega}$ folgte $U_e \approx 0{,}69\,\mathrm{V}$ und $U_a \approx 1\,\mathrm{V}$. Dieser Punkt wird nun als Arbeitspunkt verwendet; mit $I_S = 1\,\mathrm{fA}$, $B_N = 100$ und $U_T = 26\,\mathrm{mV}$ folgt:

$$
U_{e,A} \approx 0{,}69\,\mathrm{V} \ , \ I_{e,A} = f_E(U_{e,A}) \approx 3\,\mu\mathrm{A}
$$

$$
U_{a,A} \approx 1\,\mathrm{V} \ , \ I_{a,A} = -\frac{U_{a,A}}{R_L} \approx -100\,\mu\mathrm{A}
$$

Abb. 4.135 zeigt im oberen Teil die Schaltung mit den Arbeitspunktgrößen.

Aus (4.146) folgt mit

$$
\left.\frac{\partial f_E}{\partial U_e}\right|_A
=
\frac{I_S}{U_T B_N} e^{\frac{U_e}{U_T}}\bigg|_A
=
\left.\frac{I_e}{U_T}\right|_A
=
\frac{I_{e,A}}{U_T}
\approx
\frac{3\,\mu\mathrm{A}}{26\,\mathrm{mV}}
\approx
0{,}115\,\mathrm{mS}
$$

der Eingangswiderstand $r_e \approx 8{,}7\,\mathrm{k\Omega}$; entsprechend erhält man aus (4.147) mit

$$
\left.\frac{\partial f_A}{\partial U_a}\right|_A
=
\frac{1}{R_C}
=
0{,}1\,\mathrm{mS}
$$

**Abb. 4.134.** Kleinsignalersatzschaltbild eines Verstärkers mit Signalquelle und Last
<!-- page-import:0467:end -->

<!-- page-import:0468:start -->
4.2 Eigenschaften und Kenngrößen 431

**Abb. 4.135.** Beispiel: Emitterschaltung mit Arbeitspunkt (oben) und resultierendes Kleinsignalersatzschaltbild (unten)

den Ausgangswiderstand $r_a = R_C = 10\,\mathrm{k}\Omega$ und aus (4.149) mit

$$
\left.\frac{\partial f_A}{\partial U_e}\right|_A
=
\left.\frac{I_S}{U_T} e^{\frac{U_e}{U_T}}\right|_A
\approx
\frac{300\,\mu\mathrm{A}}{26\,\mathrm{mV}}
\approx
11{,}5\,\mathrm{mS}
$$

die Steilheit $S \approx 11{,}5\,\mathrm{mS}$. Die Verstärkung $A$ kann mit (4.150) aus $S$ und $r_a$ ermittelt werden: $A = -S\,r_a \approx -115$. Abbildung 4.135 zeigt im unteren Teil das resultierende Kleinsignalersatzschaltbild. Daraus folgt mit (4.153) die Betriebsverstärkung $A_B \approx -4{,}6$; sie entspricht der Steigung der Betriebs-Übertragungskennlinie in Abb. 4.132 auf Seite 427 im eingetragenen Arbeitspunkt.

## 4.2.2.6 Verstärker mit Rückwirkung

Bei einigen Verstärkern kann man die Rückwirkung vom Ausgang auf den Eingang nicht vernachlässigen 29; in diesem Fall hängt der Eingangsstrom auch von der Ausgangsspannung ab:

$$
I_e = f_E(U_e, U_a)
\tag{4.154}
$$

Bei der Linearisierung erhält man neben den bereits genannten zwei weitere Kleinsignal-Kenngrößen:

– die Rückwärtsverstärkung $A_r$:

$$
A_r
=
\left.\frac{u_e}{u_a}\right|_{i_e=0}
=
-\left.\frac{\partial f_E}{\partial U_a}\right|_A
\left(
\left.\frac{\partial f_E}{\partial U_e}\right|_A
\right)^{-1}
\tag{4.155}
$$

29 Hier wird nur die *statische Rückwirkung* behandelt; darüber hinaus haben viele Verstärker aufgrund parasitärer Kapazitäten eine *dynamische Rückwirkung*, die sich bei höheren Frequenzen bemerkbar macht.
<!-- page-import:0468:end -->

<!-- page-import:0469:start -->
432  4. Verstärker

a mit den Verstärkungen $A$ und $A_r$  
b mit den Steilheiten $S$ und $S_r$

**Abb. 4.136.** Kleinsignalersatzschaltbilder eines Verstärkers mit Rückwirkung

– die Rückwärtssteilheit $S_r$:

$$
S_r = \left.\frac{i_e}{u_a}\right|_{u_e=0} = \left.\frac{\partial f_E}{\partial U_a}\right|_A
$$

(4.156)

Durch Vergleich mit (4.146) und (4.155) folgt:

$$
S_r = -\frac{A_r}{r_e}
\qquad \text{bzw.} \qquad
A_r = -S_r r_e
$$

(4.157)

Daraus folgt, dass eine der Größen $A_r$, $r_e$ und $S_r$ redundant ist.

Abbildung 4.136 zeigt die Kleinsignalersatzschaltbilder für einen Verstärker mit Rückwirkung; es gilt:

$$
u_e = A_r u_a + i_e r_e
\qquad \text{bzw.} \qquad
i_e = S_r u_a + \frac{u_e}{r_e}
$$

(4.158)

$$
u_a = A\,u_e + i_a r_a
\qquad \text{bzw.} \qquad
i_a = S\,u_e + \frac{u_a}{r_a}
$$

(4.159)

Der Eingangswiderstand $r_e$ wird in diesem Fall auch als Kurzschlusseingangswiderstand bezeichnet, da er bei kleinsignalmäßig kurzgeschlossenem Ausgang ($u_a = 0$) ermittelt wird. Darüber hinaus wird die Verstärkung $A$ auch als Vorwärtsverstärkung und die Steilheit $S$ als Vorwärtssteilheit bezeichnet, wenn der Unterschied zur jeweiligen Rückwärts-Größe betont werden soll.

Neben den beiden in Abb. 4.136 gezeigten Kleinsignalersatzschaltbildern gibt es noch zwei weitere, da man ein- wie ausgangsseitig entweder die Darstellung mit der jeweiligen Verstärkung oder die Darstellung mit der jeweiligen Steilheit verwenden kann. Die beiden gemischten Formen werden jedoch nur selten verwendet. Man darf diese vier möglichen Darstellungen jedoch nicht mit den vier Vierpol-Darstellungen mittels Y-, Z-, H- und P-Matrix verwechseln, da die gesteuerten Quellen hier immer spannungsgesteuert sind; es handelt sich bei den vier Kleinsignalersatzschaltbildern demnach um Varianten der Y-Darstellung mit:

$$
y_{11}=\frac{1}{r_e}, \quad y_{12}=S_r, \quad y_{21}=S, \quad y_{22}=\frac{1}{r_a}
$$

Das Kleinsignalersatzschaltbild in Abb. 4.136b entspricht der üblichen Y-Darstellung. Die drei alternativen Kleinsignalersatzschaltbilder erhält man, indem man entweder im Eingangskreis oder im Ausgangskreis oder in beiden Kreisen die Stromquelle in eine äquivalente Spannungsquelle umwandelt; dabei gehen die Steilheiten $S$ und $S_r$ in die Verstärkungen $A$ und $A_r$ über.
<!-- page-import:0469:end -->

<!-- page-import:0470:start -->
4.2 Eigenschaften und Kenngrößen 433

**Abb. 4.137.**  
Kleinsignalersatzschaltbild zur Berechnung der Betriebsverstärkung eines Verstärkers mit Rückwirkung

Die Betriebsverstärkung $A_B$ bei Betrieb mit einer Signalquelle mit Innenwiderstand $R_g$ und einer Last $R_L$ kann mit Hilfe des Kleinsignalersatzschaltbilds in Abb. 4.137 direkt berechnet werden; man erhält einen umfangreichen Ausdruck, der keinen Einblick in die Zusammenhänge ermöglicht. Deshalb wird hier in drei Stufen vorgegangen:

- Zunächst wird die Betriebsverstärkung bei Betrieb mit einer idealen Signalspannungsquelle, d.h. $R_g = 0$, berechnet:

$$
A_{B,0}=\left.\frac{u_a}{u_g}\right|_{R_g=0}=\frac{u_a}{u_e}=A\frac{R_L}{r_a+R_L}
$$

(4.160)

Sie setzt sich aus der Leerlaufverstärkung $A$ und dem Spannungsteilerfaktor am Ausgang zusammen und ist unabhängig von der Rückwärtsverstärkung $A_r$. Der Index 0 in $A_{B,0}$ steht für $R_g = 0$.

- Anschließend wird der Betriebseingangswiderstand $r_{e,B}$ berechnet:

$$
r_{e,B}=\frac{u_e}{i_e}=\frac{r_e}{1-A_rA\frac{R_L}{r_a+R_L}}=\frac{r_e}{1-A_rA_{B,0}}
$$

(4.161)

Er hängt bei Verstärkern mit Rückwirkung ($A_r \neq 0$) von der Last $R_L$ ab; für Verstärker ohne Rückwirkung ($A_r = 0$) erhält man $r_{e,B} = r_e$.

- Mit Hilfe des Betriebseingangswiderstands kann man den Spannungsteilerfaktor am Eingang und damit die Betriebsverstärkung berechnen:

$$
A_B=\frac{r_{e,B}}{R_g+r_{e,B}}A_{B,0}=\frac{r_{e,B}}{R_g+r_{e,B}}A\frac{R_L}{r_a+R_L}
$$

(4.162)

Daraus folgt durch Einsetzen von $r_{e,B} = r_e$ die Betriebsverstärkung für Verstärker ohne Rückwirkung nach (4.153).

Man kann demnach einen Verstärker mit Rückwirkung wie einen Verstärker ohne Rückwirkung behandeln, wenn man anstelle des Eingangswiderstands $r_e$ den Betriebseingangswiderstand $r_{e,B}$ verwendet. Deshalb wird bei der Berechnung der Transistor-Grundschaltungen in den Abschnitten 2.4 und 3.4 angegeben, wie man den Eingangswiderstand für eine vorgegebene Last $R_L$ berechnet, sofern eine derartige Abhängigkeit, d.h. eine Rückwirkung, besteht; diese Angabe ersetzt die Berechnung der Rückwärtsverstärkung $A_r$ bzw. der Rückwärtssteilheit $S_r$. Die Betriebsverstärkung der Transistor-Grundschaltungen kann demnach mit (4.160)–(4.162) berechnet werden, wenn man für $r_a$ den Kurzschlussausgangswiderstand $r_{a,K}$ und für $r_{e,B}$ den Eingangswiderstand $r_e$ bei Betrieb mit einer Last $R_L$ einsetzt:

$$
r_a=r_{a,K}\;,\quad r_{e,B}=r_e(R_L)
$$

Während bei der Verstärkung $A$ keine Interpretationsprobleme bestehen, muss man bei Angaben zum Ein- und Ausgangswiderstand grundsätzlich die Betriebsbedingungen beachten; die Zusammenhänge sind in Abb. 4.138 zusammengefasst.
<!-- page-import:0470:end -->

<!-- page-import:0471:start -->
434  4. Verstärker

| Betriebsbedingung | Eingangswiderstand | Ausgangswiderstand |
|---|---|---|
| allgemeiner Betrieb | $r_{e,B}=\dfrac{r_e}{1-A_rA\dfrac{R_L}{r_a+R_L}}$ | $r_{a,B}=\dfrac{r_a}{1-A_rA\dfrac{R_g}{r_e+R_g}}$ |
| Kurzschluss | $r_{e,K}=r_{e,B}\vert_{R_L=0}=r_e$ | $r_{a,K}=r_{a,B}\vert_{R_g=0}=r_a$ |
| Leerlauf | $r_{e,L}=r_{e,B}\vert_{R_L=\infty}$ | $r_{a,L}=r_{a,B}\vert_{R_g=\infty}$ |
|  | $=\dfrac{r_e}{1-A_rA}$ | $=\dfrac{r_a}{1-A_rA}$ |

**Abb. 4.138.** Ein- und Ausgangswiderstände des Verstärkers in Abb. 4.137 für verschiedene Betriebsbedingungen. Man beachte, dass $r_e$ und $r_a$ per Definition Kurzschluss-Widerstände sind.

## 4.2.2.7 Berechnung mit Hilfe des Kleinsignalersatzschaltbilds der Schaltung

Bei größeren Schaltungen kann man die Kennlinien $f_E$ und $f_A$ nicht mehr geschlossen angeben; eine Berechnung der Kleinsignal-Kenngrößen durch Differenzieren der Kennlinien gemäß (4.146)–(4.149) ist dann nicht mehr möglich. Wenn man jedoch den Arbeitspunkt der Schaltung, ausgedrückt durch alle Spannungen und Ströme, kennt oder näherungsweise bestimmen kann, kann man die Bauelemente auch einzeln linearisieren und die Kenngrößen aus dem resultierenden Kleinsignalersatzschaltbild der Schaltung berechnen; dabei wird für jedes Bauteil das zugehörige Kleinsignalersatzschaltbild eingesetzt. Abbildung 4.139 zeigt dieses Verfahren im Vergleich zum Vorgehen über die Kennlinien. Angaben aus der Schaltung werden zur Berechnung des Arbeitspunkts, zur Auswahl der Kleinsignalersatzschaltbilder und zur Aufstellung des Kleinsignalersatzschaltbilds der Schaltung benötigt.

In der Praxis wird ausschließlich das Verfahren über das Kleinsignalersatzschaltbild der Schaltung angewendet. Auch Programme zur Schaltungssimulation können nur dieses Verfahren verwenden, weil sie nur numerische Berechnungen durchführen können; das Aufstellen, Umformen und Differenzieren von Gleichungen in geschlossener Form kann von diesen Programmen nicht durchgeführt werden. Allerdings kann man mit einigen Programmen (z.B. PSpice) die punktweise numerisch berechneten Kennlinien einer Schaltung auch numerisch differenziert darstellen. Diese Darstellung ist nützlich, wenn man sich für die Abhängigkeit der Kleinsignal-Kenngrößen vom Arbeitspunkt interessiert. Die numerische Differentiation führt jedoch in Bereichen sehr kleiner oder sehr großer Steigung der Kennlinien unter Umständen zu erheblichen Fehlern.

*Beispiel:* In Abb. 4.140 ist noch einmal die Emitterschaltung aus Abb. 4.130a dargestellt; dabei tritt als nichtlineares Bauteil nur der Transistor auf. Durch Einsetzen des Kleinsignalersatzschaltbilds des Transistors erhält man das Kleinsignalersatzschaltbild der Schaltung. Zur Berechnung der Parameter $S$, $r_{BE}$ und $r_{CE}$ werden die Transistor-Parameter $\beta$ und $U_A$ und der Kollektorstrom $I_{C,A}$ im Arbeitspunkt benötigt; mit $\beta=100$, $U_A=100\,\mathrm{V}$ und $I_{C,A}=300\,\mu\mathrm{A}$ erhält man:

$$
S=\frac{I_{C,A}}{U_T}=\frac{300\,\mu\mathrm{A}}{26\,\mathrm{mV}}\approx 11{,}5\,\mathrm{mS}
,\quad
r_{BE}=\frac{\beta}{S}=\frac{100}{11{,}5\,\mathrm{mS}}\approx 8{,}7\,\mathrm{k}\Omega
$$

$$
r_{CE}=\frac{U_A}{I_{C,A}}=\frac{100\,\mathrm{V}}{300\,\mu\mathrm{A}}\approx 333\,\mathrm{k}\Omega
$$
<!-- page-import:0471:end -->

<!-- page-import:0472:start -->
4.2 Eigenschaften und Kenngrößen

435

Bauelemente

$I=\dfrac{U}{R}$

$I_D=f(U_D)$

$I_C=f_C(U_{BE},U_{CE})$

$I_B=f_B(U_{BE},U_{CE})$

$I_D=f_D(U_{GS},U_{DS})$

$I_G=0$

Schaltung

Kennlinien:

$I_e=f_E(U_e,U_a)$

$I_a=f_A(U_e,U_a)$

Arbeitspunkt

Linearisierung der Kennlinien im Arbeitspunkt:

$$
i_e=\left.\frac{\partial f_E}{\partial U_e}\right|_A u_e+\left.\frac{\partial f_E}{\partial U_a}\right|_A u_a
$$

$$
i_a=\left.\frac{\partial f_A}{\partial U_e}\right|_A u_e+\left.\frac{\partial f_A}{\partial U_a}\right|_A u_a
$$

Kleinsignalersatzschaltbilder und Kleinsignalparameter der Bauelemente:

$r_D$

$r_{BE}$

$Su_{BE}$

$r_{CE}$

...

Kleinsignalersatzschaltbild der Schaltung

Kleinsignal - Kenngrößen: $r_a,\ r_e,\ A,\ S$

**Abb. 4.139.** Vorgehensweisen zur Berechnung der Kleinsignal-Kenngrößen

Durch Vergleich mit Abb. 4.133b auf Seite 430 erhält man $r_e=r_{BE}\approx 8{,}7\,\mathrm{k}\Omega$, $r_a=$
$r_{CE}\parallel R_C\approx 9{,}7\,\mathrm{k}\Omega$, $S\approx 11{,}5\,\mathrm{mS}$ – die Steilheit des Verstärkers entspricht hier der
Steilheit des Transistors – und $A=-Sr_a\approx -112$.
<!-- page-import:0472:end -->

<!-- page-import:0473:start -->
436 4. Verstärker

**Abb. 4.140.** Beispiel: Emitterschaltung mit Arbeitspunkt (oben) und resultierendes Kleinsignalersatzschaltbild bei Verwendung des Kleinsignalersatzschaltbilds des Transistors (unten)

Die Werte für $A$ und $r_a$ unterscheiden sich geringfügig von den Werten in Abb. 4.135, weil im Kleinsignalersatzschaltbild des Transistors auch der Early-Effekt – repräsentiert durch den Widerstand $r_{CE}$ – berücksichtigt wurde, der bei der Berechnung über die Kennlinien vernachlässigt wurde.

#### 4.2.2.8 Reihenschaltung von Verstärkern

Man kann eine Reihenschaltung von mehreren Verstärkern zu einem Verstärker zusammenfassen. Da ein Verstärker im allgemeinen aus einer Reihenschaltung mehrerer Transistor-Grundschaltungen besteht, wird dieses Verfahren auch zur Berechnung der Kenngrößen eines einzelnen Verstärkers angewendet, indem man die einzelnen Grundschaltungen als Teil-Verstärker auffasst.

Die Zusammenfassung von Transistor-Grundschaltungen ist im allgemeinen aufwendiger, da einige Grundschaltungen eine nicht zu vernachlässigende Rückwirkung aufweisen; bei Verstärkern, die aus mehreren Grundschaltungen bestehen, ist dies nur selten der Fall, da eine Reihenschaltung von Grundschaltungen rückwirkungsfrei ist, sobald sie eine rückwirkungsfreie Grundschaltung enthält.

##### 4.2.2.8.1 Reihenschaltung von Verstärkern ohne Rückwirkung

Eine Reihenschaltung von mehreren Verstärkern ohne Rückwirkung kann ohne weiteres zu einem Verstärker zusammengefasst werden; bei $n$ Verstärkern gilt:

- Der Eingangswiderstand entspricht dem Eingangswiderstand des ersten Verstärkers:
  $r_e = r_{e1}$.
- Der Ausgangswiderstand entspricht dem Ausgangswiderstand des letzten Verstärkers:
  $r_a = r_{a(n)}$.
- Die Verstärkung entspricht dem Produkt der einzelnen Verstärkungen und der Spannungsteilerfaktoren zwischen je zwei aufeinanderfolgenden Verstärkern:
<!-- page-import:0473:end -->

<!-- page-import:0474:start -->
437

## 4.2 Eigenschaften und Kenngrößen

**Abb. 4.141.** Beispiel: Reihenschaltung von zwei Verstärkern ohne Rückwirkung

$$
A=\prod_{i=1}^{n} A_{(i)} \cdot \prod_{i=1}^{n-1} \frac{r_{e(i+1)}}{r_{a(i)}+r_{e(i+1)}}
$$

(4.163)

– Die Betriebsverstärkung wird mit (4.153) berechnet:

$$
A_B=\frac{r_e}{R_g+r_e}\,A\,\frac{R_L}{r_a+R_L}
$$

$$
=\prod_{i=1}^{n} A_{(i)} \cdot \prod_{i=0}^{n} \frac{r_{e(i+1)}}{r_{a(i)}+r_{e(i+1)}}
\qquad \text{mit } r_{a0}=R_g, r_{e(n+1)}=R_L
$$

(4.164)

Hier kommen die Spannungsteilerfaktoren am Eingang $(i = 0)$ und Ausgang $(i = n)$ hinzu.

*Beispiel:* Für die in Abb. 4.141 gezeigte Reihenschaltung von zwei Verstärkern ohne Rückwirkung erhält man die Kleinsignal-Kenngrößen

$$
r_e=r_{e1}, \quad r_a=r_{a2}, \quad A=A_1\,\frac{r_{e2}}{r_{a1}+r_{e2}}\,A_2
$$

und die Betriebsverstärkung:

$$
A_B=\frac{r_e}{R_g+r_e}\,A\,\frac{R_L}{r_a+R_L}
=\frac{r_{e1}}{R_g+r_{e1}}\,A_1\,\frac{r_{e2}}{r_{a1}+r_{e2}}\,A_2\,\frac{R_L}{r_{a2}+R_L}
$$

#### 4.2.2.8.2 Reihenschaltung von Verstärkern mit Rückwirkung

Die Bestimmung der Kleinsignal-Kenngrößen für eine Reihenschaltung von Verstärkern mit Rückwirkung ist sehr aufwendig. Dagegen ist die Berechnung der Betriebsverstärkung $A_B$ einfach: man kann wie bei der Reihenschaltung von Verstärkern ohne Rückwirkung vorgehen, d.h. (4.164) verwenden, wenn man anstelle der Eingangswiderstände $r_{e(i)}$ die Betriebseingangswiderstände $r_{e,B(i)}$ einsetzt. Letztere werden rückwärts bestimmt: der Betriebseingangswiderstand des letzten Verstärkers hängt von der Last $R_L$ ab und ist seinerseits Last für den vorletzten Verstärker, usw. . Bei $n$ Verstärkern gilt:

$$
R_L \;\rightarrow\; r_{e,B(n)}(R_L) \;\rightarrow\; r_{e,(n-1)}(r_{e,B(n)}) \;\rightarrow\; \cdots \;\rightarrow\; r_{e,B1}(r_{e,B2})
$$

Diese Rückwärts-Berechnung kann im allgemeinen nur mit Zahlenwerten erfolgen, da ein Ineinander-Einsetzen der jeweiligen Gleichungen sehr schnell auf extrem umfangreiche Ausdrücke führt. Man beachte in diesem Zusammenhang, dass die Abhängigkeit von $R_L$ eine Berechnung der Verstärkung $A$ mit (4.163) verhindert; die Betriebseingangswiderstände sind in diesem Fall nicht definiert.
<!-- page-import:0474:end -->

<!-- page-import:0475:start -->
438 4. Verstärker

**Abb. 4.142.** Umwandlung von Verstärkern mit Rückwirkung in einer Reihenschaltung mit einem Verstärker ohne Rückwirkung

#### 4.2.2.8.3 Reihenschaltung mit mindestens einem rückwirkungsfreien Verstärker

Wir haben bereits darauf hingewiesen, dass eine Reihenschaltung von Verstärkern genau dann rückwirkungsfrei ist, wenn mindestens ein Verstärker in der Reihe keine Rückwirkung aufweist. In diesem Fall ist eine Bestimmung der Kleinsignal-Kenngrößen $A$, $r_e$ und $r_a$ möglich, indem man die Verstärker mit Rückwirkung sukzessive in rückwirkungsfreie Verstärker umwandelt; Abb. 4.142 zeigt dies an einem Beispiel. Das Verfahren beruht darauf, dass man einen Verstärker mit Rückwirkung, der vor oder nach einem rückwirkungsfreien Verstärker angeordnet ist, in einen rückwirkungsfreien Verstärker umwandeln kann; durch sukzessive Anwendung werden alle Verstärker mit Rückwirkung umgewandelt.

Zunächst wird der Verstärker 1 in Abb. 4.142 betrachtet. Er ist vor dem rückwirkungsfreien Verstärker 2 angeordnet und wird deshalb mit einer definierten Last, in diesem Fall $r_{e2}$, betrieben; damit kann man den Betriebseingangswiderstand $r_{e,B1}=r_{e,B1}(r_{e2})$ berechnen und die Umwandlung durchführen.

Der Verstärker 3 in Abb. 4.142 ist nach dem rückwirkungsfreien Verstärker 2 angeordnet und wird deshalb mit einem definierten Signalquellen-Innenwiderstand, in diesem Fall $r_{a2}$, betrieben; damit kann man den Betriebsausgangswiderstand $r_{a,B3}=r_{a,B3}(r_{a2})$ berechnen. Zusätzlich muss die Verstärkung der spannungsgesteuerten Spannungsquelle von $A_3$ auf

$$
\tilde{A}_3 = A_3 \frac{r_{a,B3}}{r_{a3}}
$$

geändert werden.30)

*Beispiel:* Abbildung 4.143 zeigt einen dreistufigen Verstärker mit je einer Emitterschaltung mit Spannungsgegenkopplung am Eingang und am Ausgang $(T_1$ und $T_3)$ und einer Emitterschaltung mit Stromgegenkopplung dazwischen $(T_2)$. Die Emitterschaltungen mit Spannungsgegenkopplung haben eine nicht zu vernachlässigende Rückwirkung, die im wesentlichen von den Widerständen $R_{21}$ und $R_{23}$ verursacht wird; die Emitterschaltung
<!-- page-import:0475:end -->

<!-- page-import:0476:start -->
4.2 Eigenschaften und Kenngrößen 439

**Abb. 4.143.** Beispiel: Dreistufiger Verstärker

mit Stromgegenkopplung ist dagegen praktisch rückwirkungsfrei. Im folgenden werden die Kleinsignal-Größen $A$, $r_e$ und $r_a$ bestimmt.

Die Versorgungsspannung beträgt $U_b = 1{,}7\,\mathrm{V}$; in diesem Fall haben alle drei Transistoren einen Kollektorruhestrom von $1\,\mathrm{mA}$. Mit $\beta = 100$ und $U_A = 100\,\mathrm{V}$ erhält man $S = I_C/U_T = 38\,\mathrm{mS}$ und $r_{BE} = \beta U_T/I_C = 2{,}6\,\mathrm{k}\Omega$; der Kollektor-Emitter-Widerstand $r_{CE} = U_A/I_C = 100\,\mathrm{k}\Omega$ kann im Vergleich zu den Widerständen in der Schaltung vernachlässigt werden.

Zunächst werden die Kenngrößen der Emitterschaltung mit Stromgegenkopplung bestimmt:

- aus (2.82) erhält man die Verstärkung:

30 Dieser Zusammenhang fällt bei der Umrechnung der Größen an, kann aber auch durch eine Betrachtung des Kurzschlußstroms am Ausgang abgeleitet werden; bei Kurzschluß am Ausgang $(u_4 = 0)$ fließt beim ursprünglichen Verstärker der Strom $A_3 u_3/r_{a3}$ und beim umgewandelten Verstärker der Strom $\tilde{A}_3 u_3/r_{a,B3}$; da $u_3$ wegen $A_{r3} u_4 = 0$ in beiden Fällen gleich ist, folgt aus der Gleichheit der Ströme der genannte Zusammenhang für die Verstärkungen.
<!-- page-import:0476:end -->

<!-- page-import:0477:start -->
440  4. Verstärker

$$
A_2=-\frac{S R_{C2}}{1+S R_{E2}}=-30
$$

- aus (2.83) erhält man den Eingangswiderstand:

$$
r_{e2}=r_{BE}+\beta R_{E2}=3{,}3\,\mathrm{k}\Omega
$$

- aus (2.84) erhält man den Ausgangswiderstand:

$$
r_{a2}=R_{C2}=1\,\mathrm{k}\Omega
$$

Bei den Emitterschaltungen mit Spannungsgegenkopplung fehlt der in der Grundschaltung in Abb. 2.68 enthaltene Widerstand $R_1$; deshalb müssen zunächst die Gleichungen für diesen Fall bereitgestellt werden:

- aus der Herleitung für die Verstärkung $A$ kann man die Gleichung mit den Voraussetzungen $r_{CE}\gg R_C$ und $\beta\gg 1$ verwenden und $R_1=0$ setzen:

$$
A=\frac{-S R_2+1}{1+\frac{R_2}{R_C}}
$$

- aus der Herleitung für den Eingangswiderstand entnimmt man den Kurzschlusseingangswiderstand für $R_1=0$:

$$
r_e=r_{e,K}=r_{BE}\parallel R_2
$$

- der Betriebseingangswiderstand $r_{e,B}$ entspricht dem Leerlaufeingangswiderstand aus der Herleitung, wenn man anstelle von $R_C$ die Parallelschaltung von $R_C$ und $R_L$ einsetzt, siehe Abb. 2.71; mit $r_{CE}\gg R_C$, $\beta\gg 1$, $\beta R_C\gg r_{BE}, R_2$ und $R_1=0$ folgt:

$$
r_{e,B}=\frac{1}{S}\left(1+\frac{R_2}{R_C\parallel R_L}\right)
$$

- aus der Herleitung für den Kurzschlussausgangswiderstand kann man die Gleichung mit den Voraussetzungen $r_{CE}\gg R_C$ und $\beta\gg 1$ verwenden und $R_1=0$ setzen:

$$
r_a=R_C\parallel R_2
$$

- zur Berechnung des Betriebsausgangswiderstands verwendet man dieselbe Gleichung mit $R_1=R_g$, da der Innenwiderstand $R_g$ in diesem Fall an die Stelle des fehlenden Widerstands $R_1$ tritt:

$$
r_{a,B}=R_C\parallel\frac{r_{BE}(R_g+R_2)+R_g R_2}{r_{BE}+\beta R_g}
$$

Mit diesen Gleichungen erhält man für die erste Emitterschaltung mit Spannungsgegenkopplung mit $R_2=R_{21}=700\,\Omega$ und $R_C=R_{C1}=1\,\mathrm{k}\Omega$

$$
A_1=-15 \quad,\quad r_{e,B1}(R_L=r_{e2})=50\,\Omega \quad,\quad r_{a1}=412\,\Omega
$$

und für die zweite mit $R_2=R_{23}=740\,\Omega$ und $R_C=R_{C3}=1\,\mathrm{k}\Omega$:

$$
A_3=-15{,}6 \quad,\quad r_{e3}=576\,\Omega \quad,\quad r_{a3}=425\,\Omega
$$

$$
r_{a,B3}(R_g=r_{a2})=49\,\Omega \quad,\quad \tilde{A}_3=-1{,}8
$$

Damit sind alle Elemente des in Abb. 4.143 in der Mitte gezeigten Kleinsignalersatzschaltbilds bestimmt und man kann die Reihenschaltung zusammenfassen:
<!-- page-import:0477:end -->

<!-- page-import:0478:start -->
441

## 4.2 Eigenschaften und Kenngrößen

$$
A = A_1 \frac{r_{e2}}{r_{a1} + r_{e2}} \, A_2 \, \frac{r_{e3}}{r_{a2} + r_{e3}} \, \tilde{A}_3 = -263
$$

$$
r_e = r_{e,B1} = 50\,\Omega
$$

$$
r_a = r_{a,B3} = 49\,\Omega
$$

Es handelt sich demnach um einen Verstärker, der beidseitig an $50\,\Omega$ angepasst ist. Bei Betrieb mit einer $50\,\Omega$-Signalquelle und einer $50\,\Omega$-Last erhält man am Ein- und am Ausgang einen Spannungsteiler mit dem Faktor $1/2$; daraus folgt die Betriebsverstärkung $A_B = A/4 = -66$. Eine Simulation der Schaltung mit PSpice ergibt $r_e = r_a = 50\,\Omega$ und $A_B = -61$.

Man beachte, dass die Verstärkung von den ersten beiden Stufen erbracht wird, während die dritte Stufe zusammen mit dem Spannungsteilerfaktor zwischen zweiter und dritter Stufe effektiv eine Dämpfung bewirkt. Die dritte Stufe dient hier nur als Impedanzwandler von $r_{a2} = 1\,\mathrm{k}\Omega$ auf $r_{a,B3} = 50\,\Omega$; man muss dazu eine Emitterschaltung mit Spannungsgegenkopplung verwenden, da der Einsatz einer galvanisch gekoppelten npn-Kollektorschaltung aufgrund der geringen Ausgangsgleichspannung der zweiten Stufe ($U_{3,A} \approx 0{,}7\,\mathrm{V}$) nicht möglich ist und die Schaltung in einer HF-Halbleiter-Technologie hergestellt werden soll, in der keine ausreichend schnellen pnp-Transistoren verfügbar sind.

Dieses ausführliche Beispiel zeigt, dass man mehrstufige Verstärker mit der hier vorgestellten Berechnungsmethode exakt berechnen kann. Die Differenzen zur Schaltungssimulation sind eine Folge der Näherungen $\beta \gg 1$ und $r_{CE} \gg R_C$; eine Berechnung ohne diese Näherungen liefert exakt die Werte der Simulation. Das Beispiel zeigt aber auch, dass man bei der Berechnung der Elemente des Kleinsignalersatzschaltbilds sehr sorgfältig vorgehen und ggf. auf die vollständigen Gleichungen der Transistor-Grundschaltungen zurückgreifen muss.

### 4.2.3 Nichtlineare Kenngrößen

Im Zusammenhang mit den Kleinsignal-Kenngrößen stellt sich die Frage, wie groß die Aussteuerung um den Arbeitspunkt maximal sein darf, damit noch Kleinsignalbetrieb vorliegt. Von einem mathematischen Standpunkt aus gesehen gilt das Kleinsignalersatzschaltbild nur für infinitesimale, d.h. beliebig kleine Aussteuerung. In der Praxis sind die nichtlinearen Verzerrungen maßgebend, die mit zunehmender Amplitude überproportional zunehmen und einen anwendungsspezifischen Grenzwert nicht überschreiten sollen.

Das nichtlineare Verhalten eines Verstärkers wird mit den Kenngrößen Klirrfaktor, Kompressionspunkt und den Intercept-Punkten beschrieben. Man kann sie aus den Koeffizienten der Reihenentwicklung der Übertragungskennlinie berechnen. Wenn dies mangels einer geschlossenen Darstellung der Übertragungskennlinie nicht möglich ist, muss man sie messen oder mit Hilfe einer Schaltungssimulation ermitteln.

#### 4.2.3.1 Reihenentwicklung der Kennlinie im Arbeitspunkt

Abbildung 4.144 zeigt einen nichtlinearen Verstärker mit der Betriebs-Übertragungskennlinie $U_a = f_{\ddot{U}B}(U_g)$. Die zugehörige Reihenentwicklung (Taylor-Reihe) im Arbeitspunkt lautet [4.3]:

$$
U_a = U_{a,A} + u_a = f_{\ddot{U}B}(U_g) = f_{\ddot{U}B}(U_{g,A} + u_g)
$$
<!-- page-import:0478:end -->

<!-- page-import:0479:start -->
442  4. Verstärker

Abb. 4.144. Nichtlinearer Verstärker (oben) und Reihenentwicklung im Arbeitspunkt (unten)

$u_g = U_g - U_{g,A},\ u_a = U_a - U_{a,A}$

$u_a = a_1\,u_g + a_2\,u_g^2 + a_3\,u_g^3 + \cdots$

$$
= f_{\mathrm{ÜB}}(U_{g,A}) + \left.\frac{d f_{\mathrm{ÜB}}}{dU_g}\right|_A u_g + \frac{1}{2}\left.\frac{d^2 f_{\mathrm{ÜB}}}{dU_g^2}\right|_A u_g^2
$$

$$
\qquad + \frac{1}{6}\left.\frac{d^3 f_{\mathrm{ÜB}}}{dU_g^3}\right|_A u_g^3 + \frac{1}{24}\left.\frac{d^4 f_{\mathrm{ÜB}}}{dU_g^4}\right|_A u_g^4 + \cdots
$$

Daraus folgt für die Kleinsignalgrößen:

$$
u_a = \left.\frac{d f_{\mathrm{ÜB}}}{dU_g}\right|_A u_g + \frac{1}{2}\left.\frac{d^2 f_{\mathrm{ÜB}}}{dU_g^2}\right|_A u_g^2 + \frac{1}{6}\left.\frac{d^3 f_{\mathrm{ÜB}}}{dU_g^3}\right|_A u_g^3 + \frac{1}{24}\left.\frac{d^4 f_{\mathrm{ÜB}}}{dU_g^4}\right|_A u_g^4 + \cdots
$$

$$
= \sum_{n=1\ldots\infty} a_n u_g^n \qquad \text{mit} \qquad a_n = \frac{1}{n!}\left.\frac{d^n f_{\mathrm{ÜB}}}{dU_g^n}\right|_A
\qquad\qquad (4.165)
$$

Die Koeffizienten $a_1, a_2, \ldots$ werden Koeffizienten der Taylor-Reihe genannt. Der Koeffizient $a_1$ entspricht der Kleinsignal-Betriebsverstärkung $A_B$ und ist dimensionslos; alle anderen Koeffizienten sind dimensionsbehaftet:

$$
[a_n] = \frac{1}{V^{n-1}} \qquad \text{für } n = 2 \ldots \infty
$$

*Beispiel:* Bei der Emitterschaltung aus Abb. 4.130 auf Seite 425 kann man die Reihenentwicklung der Betriebs-Übertragungskennlinie noch vergleichsweise einfach berechnen; dazu wird eine Reihenentwicklung der Eingangsgleichung

$$
U_g = I_e R_g + U_e = I_B R_g + U_{BE} = \frac{I_C R_g}{B} + U_T \ln \frac{I_C}{I_S}
$$

im Arbeitspunkt vorgenommen:

$$
u_g = \frac{i_C R_g}{B} + U_T \ln \left(1 + \frac{i_C}{I_{C,A}}\right)
$$

$$
= \left(\frac{I_{C,A}R_g}{B} + U_T\right)\frac{i_C}{I_{C,A}} - \frac{U_T}{2}\left(\frac{i_C}{I_{C,A}}\right)^2 + \frac{U_T}{3}\left(\frac{i_C}{I_{C,A}}\right)^3 - \cdots
$$
<!-- page-import:0479:end -->

<!-- page-import:0480:start -->
443

## 4.2 Eigenschaften und Kenngrößen

a Approximation der Kennlinie

b Approximationsfehler

**Abb. 4.145.** Reihenentwicklung der Betriebs-Übertragungskennlinie der Emitterschaltung aus Abb. 4.130

Mit

$$
i_C = - \frac{u_a}{R_C \parallel R_L}
$$

und $U_k = I_{C,A}\,(R_C \parallel R_L)$ erhält man:

$$
u_g = -\left(\frac{I_{C,A}\,R_g}{B} + U_T\right)\frac{u_a}{U_k}
-\frac{U_T}{2}\left(\frac{u_a}{U_k}\right)^2
-\frac{U_T}{3}\left(\frac{u_a}{U_k}\right)^3 - \ldots
$$

Setzt man $R_C = R_L = 10\,\mathrm{k}\Omega$, $R_g = 100\,\mathrm{k}\Omega$, $I_{C,A} = 300\,\mu\mathrm{A}$, $B = 100$ und $U_T = 26\,\mathrm{mV}$ ein, folgt

$$
u_g = -0{,}2173\,u_a
-\frac{5{,}78\,u_a^2}{10^3\,\mathrm{V}}
-\frac{2{,}57\,u_a^3}{10^3\,\mathrm{V}^2}
-\frac{1{,}28\,u_a^4}{10^3\,\mathrm{V}^3}
-\frac{0{,}685\,u_a^5}{10^3\,\mathrm{V}^4}
$$

und daraus die Umkehrfunktion $^{31}$:

$$
u_a = -4{,}6\,u_g
-\frac{0{,}563\,u_g^2}{\mathrm{V}}
+\frac{u_g^3}{\mathrm{V}^2}
-\frac{2\,u_g^4}{\mathrm{V}^3}
+\frac{4\,u_g^5}{\mathrm{V}^4}
-\ldots
$$

Daraus folgt:

$$
a_1 = -4{,}6 \quad,\quad
a_2 = -\frac{0{,}563}{\mathrm{V}} \quad,\quad
a_3 = \frac{1}{\mathrm{V}^2} \quad,\quad
a_4 = -\frac{2}{\mathrm{V}^3} \quad,\quad
a_5 = \frac{4}{\mathrm{V}^4}
$$

Abbildung 4.145a zeigt die Approximation der Betriebs-Übertragungskennlinie aus Abb. 4.132 durch die Taylor-Reihen ersten $(a_1)$, zweiten $(a_1, a_2)$ und dritten $(a_1, a_2, a_3)$ Grades. Mit zunehmendem Grad wird die Approximation besser; besonders gut erkennt man dies an der Abnahme des in Abb. 4.145b gezeigten Approximationsfehlers.

31 Siehe Fußnote auf Seite 113.
<!-- page-import:0480:end -->

<!-- page-import:0481:start -->
444 4. Verstärker

Abb. 4.146. Gültigkeitsbereich der Reihenentwicklung der Betriebs-Übertragungskennlinie

## 4.2.3.2 Gültigkeitsbereich der Reihenentwicklung

Die Betriebs-Übertragungskennlinie kann nur in einem eingeschränkten Bereich durch die Reihe (4.165) beschrieben werden. Dieser Bereich hängt von der Anzahl der berücksichtigten Terme ab, endet aber spätestens beim Erreichen der Übersteuerungsgrenzen, weil ab hier die Kennlinie näherungsweise horizontal verläuft und nicht mehr durch ein Polynom beschrieben werden kann. In den meisten Fällen kann man auch den aktiven Bereich in der Nähe der Übersteuerungsgrenzen nicht mehr beschreiben, so dass mit (4.165) nur ein mehr oder weniger großer Bereich um den Arbeitspunkt beschrieben werden kann. Abbildung 4.146 zeigt diesen Bereich am Beispiel der Betriebs-Übertragungskennlinie einer Emitterschaltung.

## 4.2.3.3 Ausgangssignal bei sinusförmiger Ansteuerung

Durch die Terme $u_g^n$ in (4.165) erhält man bei einem Signal

$$
u_g = \hat{u}_g \cos \omega_0 t
$$

neben dem gewünschten Ausgangssignal (Nutzsignal)

$$
u_{a,\!Nutz} = \hat{u}_a \cos \omega_0 t = a_1 \hat{u}_g \cos \omega_0 t
$$

auch Anteile bei Vielfachen von $\omega_0$:

$$
u_a = \sum_{n=1\ldots\infty} a_n u_g^n = \sum_{n=1\ldots\infty} a_n \hat{u}_g^n \cos^n \omega_0 t
$$

$$
= \left(\frac{a_2 \hat{u}_g^2}{2} + \frac{3 a_4 \hat{u}_g^4}{8} + \frac{5 a_6 \hat{u}_g^6}{16} + \cdots\right)
\qquad \text{Gleichanteil}
$$

$$
+ \left(a_1 + \frac{3 a_3 \hat{u}_g^2}{4} + \frac{5 a_5 \hat{u}_g^4}{8} + \frac{35 a_7 \hat{u}_g^6}{64} + \cdots\right)\hat{u}_g \cos \omega_0 t
\qquad \text{Grundwelle}
$$

$$
+ \left(\frac{a_2}{2} + \frac{a_4 \hat{u}_g^2}{2} + \frac{15 a_6 \hat{u}_g^4}{32} + \cdots\right)\hat{u}_g^2 \cos 2\omega_0 t
\qquad \text{1.Oberwelle}
$$
<!-- page-import:0481:end -->

<!-- page-import:0482:start -->
4.2 Eigenschaften und Kenngrößen 445

$$
+ \left(\frac{a_3}{4} + \frac{5a_5\hat{u}_g^2}{16} + \frac{21a_7\hat{u}_g^4}{64} + \dots \right)\hat{u}_g^3 \cos 3\omega_0 t
\qquad \text{2.Oberwelle}
$$

$$
+ \left(\frac{a_4}{8} + \frac{3a_6\hat{u}_g^2}{16} + \dots \right)\hat{u}_g^4 \cos 4\omega_0 t
\qquad \text{3.Oberwelle}
$$

$$
+ \left(\frac{a_5}{16} + \frac{7a_7\hat{u}_g^2}{64} + \dots \right)\hat{u}_g^5 \cos 5\omega_0 t
\qquad \text{4.Oberwelle}
$$

$$
+ \dots
$$

$$
= \sum_{n=0\ldots\infty} b_n \hat{u}_g^n \cos n\omega_0 t \qquad \text{mit } b_n = (\dots)_n
\tag{4.166}
$$

Die Koeffizienten $b_n$ erhält man durch Umformen der Terme $\cos^n \omega_0 t$ in Terme der Form $\cos n\omega_0 t$ und Sortieren nach Frequenzen. Man erkennt, dass durch die geraden Koeffizienten $a_2, a_4, \dots$ ein Gleichanteil $b_0$, d.h. eine Verschiebung des Arbeitspunkts, verursacht wird; sie ist bei den in der Praxis üblichen Amplituden gering und wird deshalb vernachlässigt. Darüber hinaus werden durch die geraden Koeffizienten Anteile bei geradzahligen Vielfachen der Frequenz $\omega_0$ erzeugt. Entsprechend werden durch die ungeraden Koeffizienten $a_3, a_5, \dots$ Anteile bei ungeradzahligen Vielfachen der Frequenz $\omega_0$ erzeugt. Die ungeraden Koeffizienten wirken sich auch auf die Amplitude des Nutzsignals aus; deshalb ist die Betriebsverstärkung bei größeren Amplituden nicht mehr konstant.

#### 4.2.3.3.1 Grundwelle und Oberwellen

Der Anteil bei der Frequenz $\omega_0$ wird Grundwelle (GW) genannt. Die anderen Anteile werden als Oberwellen (OW) bezeichnet und entsprechend ihrer Ordnung nummeriert: 1.Oberwelle bei $2\omega_0$, 2.Oberwelle bei $3\omega_0$, usw. . Alternativ werden die Anteile auch als Harmonische bezeichnet: 1.Harmonische bei $\omega_0$, 2.Harmonische bei $2\omega_0$, usw. . Für die zugehörigen Amplituden gilt:

$$
\hat{u}_{a(\mathrm{GW})} = |b_1|\hat{u}_g \quad,\quad
\hat{u}_{a(1.\mathrm{OW})} = |b_2|\hat{u}_g^2 \quad,\quad
\hat{u}_{a(2.\mathrm{OW})} = |b_3|\hat{u}_g^3 \quad,\quad \dots
$$

#### 4.2.3.3.2 Amplituden der Grund- und der Oberwellen

Abbildung 4.147 zeigt die Amplituden der Grundwelle und der ersten vier Oberwellen für die Emitterschaltung aus Abb. 4.130 auf Seite 425 in Abhängigkeit von der Aussteuerung. Man erhält drei charakteristische Bereiche:

- Im quasi-linearen Bereich ist die Amplitude der Grundwelle proportional zur Eingangsamplitude, d.h. die Grundwelle zeigt lineares Verhalten; in der doppelt-logarithmischen Darstellung erhält man eine Gerade mit der Steigung Eins. Aufgrund der Oberwellen ist der Bereich dennoch nur quasi-linear. Die Amplituden der Oberwellen sind proportional zu den Potenzen der Eingangsamplitude. Die Amplitude der $n$-ten Oberwelle ist proportional zu $\hat{u}_g^{n+1}$ und verläuft in der doppelt-logarithmischen Darstellung als Gerade mit der Steigung $n + 1$. Dieser Bereich ist der normale Arbeitsbereich eines Verstärkers.

- Beim Eintritt in den Bereich schwacher Übersteuerung nimmt die Amplitude mindestens einer Oberwelle stärker zu als im quasi-linearen Bereich; gleichzeitig beginnt die Amplitude der Grundwelle, vom linearen Verhalten abzuweichen. Im Bereich schwacher Übersteuerung verlaufen die Amplituden der Oberwellen nicht mehr monoton;
<!-- page-import:0482:end -->

<!-- page-import:0483:start -->
446 4. Verstärker

Abb. 4.147. Amplituden der Grundwelle und der Oberwellen für die Emitterschaltung aus Abb. 4.130

dabei kann auch der Fall auftreten, dass die Amplituden einer oder mehrerer Oberwellen für eine bestimmte Eingangsamplitude sehr klein oder sogar zu Null werden. Der Kompressionspunkt $\hat{u}_{g,\mathrm{Komp}}$, auf den wir im Abschnitt 4.2.3.5 noch näher eingehen, liegt etwa in der Mitte des Bereichs.

– Im Bereich starker Übersteuerung ist die Amplitude der Grundwelle näherungsweise konstant. In diesem Bereich geht das Ausgangssignal mit zunehmender Eingangsamplitude in ein Rechteck-Signal über. Da dieses Rechtecksignal in den meisten Fällen nahezu symmetrisch ist und ein symmetrisches Rechteck-Signal nur geradzahlige Oberwellen (= ungeradzahlige Harmonische) aufweist, nimmt die Amplitude der ungeradzahligen Oberwellen mit zunehmender Eingangsamplitude ab:

$$
\hat{u}_{a(n.\mathrm{OW})} \to 0 \qquad \text{für } n=1,3,\ldots
$$

Für die Grundwelle und die geradzahligen Oberwellen gilt:

$$
\hat{u}_{a(n.\mathrm{OW})} \to \frac{\hat{u}_{a(\mathrm{GW})}}{n+1}
\qquad \text{für } n=2,4,\ldots
\qquad \Rightarrow \qquad
\hat{u}_{a(2.\mathrm{OW})} \to \frac{\hat{u}_{a(\mathrm{GW})}}{3},
\ \ldots
$$

#### 4.2.3.3 Quasi-linearer Bereich

In der Praxis wird ein Verstärker meist im quasi-linearen Bereich betrieben. In diesem Bereich sind die Amplituden der Oberwellen sehr viel kleiner als die Amplitude der Grundwelle; deshalb muss man in den Klammerausdrücken in (4.166) auf Seite 445 nur den
<!-- page-import:0483:end -->

<!-- page-import:0484:start -->
4.2 Eigenschaften und Kenngrößen 447

ersten Term berücksichtigen, d.h. die Koeffizienten $b_n$ sind näherungsweise konstant und hängen nicht mehr von der Eingangsamplitude $\hat{u}_g$, sondern nur noch von den Koeffizienten $a_n$ der Kennlinie ab:

$$
b_n \approx \frac{a_n}{2^{n-1}} \qquad \text{für } n = 1 \ldots \infty
$$

(4.167)

Daraus folgt für die Amplituden der Grundwelle und der Oberwellen:

$$
\hat{u}_{a(GW)} = |b_1|\hat{u}_g \approx |a_1|\hat{u}_g
$$

$$
\hat{u}_{a(1.OW)} = |b_2|\hat{u}_g^2 \approx \left|\frac{a_2}{2}\right|\hat{u}_g^2
$$

$$
\hat{u}_{a(2.OW)} = |b_3|\hat{u}_g^3 \approx \left|\frac{a_3}{4}\right|\hat{u}_g^3
$$

$$
\vdots
$$

(4.168)

Voraussetzung für die Näherung ist die Bedingung:

$$
\hat{u}_{a(GW)} \gg \hat{u}_{a(1.OW)}, \hat{u}_{a(2.OW)}, \ldots
$$

Durch Einsetzen der Koeffizienten folgt

$$
|b_1|\hat{u}_g \gg |b_2|\hat{u}_g^2, |b_3|\hat{u}_g^3, |b_4|\hat{u}_g^4, |b_5|\hat{u}_g^5, \ldots
$$

und daraus durch Auflösen nach $\hat{u}_g$:

$$
\hat{u}_g \ll \left|\frac{b_1}{b_2}\right|, \sqrt{\left|\frac{b_1}{b_3}\right|}, \sqrt[3]{\left|\frac{b_1}{b_4}\right|}, \sqrt[4]{\left|\frac{b_1}{b_5}\right|}, \ldots
$$

$$
\hat{u}_g \ll \min_n \sqrt[n-1]{\left|\frac{b_1}{b_n}\right|} \overset{(4.167)}{=} 2 \min_n \sqrt[n-1]{\left|\frac{a_1}{a_n}\right|}
$$

(4.169)

*Beispiel:* Für die Emitterschaltung aus Abb. 4.130 auf Seite 425 erhält man mit (4.167) und den Koeffizienten $a_1, \ldots, a_5$ auf Seite 443:

$$
b_1 \approx a_1 = -4{,}6 \qquad , \qquad b_2 \approx \frac{a_2}{2} = -\frac{0{,}282}{\mathrm{V}} \qquad , \qquad b_3 \approx \frac{a_3}{4} = \frac{0{,}25}{\mathrm{V}^2}
$$

$$
b_4 \approx \frac{a_4}{8} = -\frac{0{,}25}{\mathrm{V}^3} \qquad , \qquad b_5 \approx \frac{a_5}{16} = \frac{0{,}25}{\mathrm{V}^4}
$$

Alle weiteren Koeffizienten haben ebenfalls den Betrag $0{,}25$. Daraus folgt aus (4.169) für die Amplitude:

$$
\hat{u}_g \ll \min(16{,}3\,\mathrm{V};\ 4{,}3\,\mathrm{V};\ 2{,}6\,\mathrm{V};\ 2\,\mathrm{V};\ \ldots) = 1\,\mathrm{V}
$$

Das Minimum wird hier für $n \rightarrow \infty$ erreicht. Mit $\hat{u}_g = 100\,\mathrm{mV}$ erhält man aus (4.168) für die Grundwelle $\hat{u}_{a(GW)} \approx 460\,\mathrm{mV}$, für die 1.Oberwelle $\hat{u}_{a(1.OW)} \approx 2{,}82\,\mathrm{mV}$ und für die 2.Oberwelle $\hat{u}_{a(2.OW)} \approx 0{,}25\,\mathrm{mV}$.
<!-- page-import:0484:end -->

<!-- page-import:0485:start -->
448  4. Verstärker

## 4.2.3.4 Klirrfaktor

Bei sinusförmigen Signalen wird der *Klirrfaktor* $k$ als Maß für die nichtlinearen Verzerrungen verwendet:

*Der Klirrfaktor $k$ gibt das Verhältnis des Effektivwerts aller Oberwellen eines Signals zum Effektivwert des ganzen Signals an.*

Bei einem sinusförmigen Signal ohne Oberwellen gilt $k = 0$.

Mit (4.166) erhält man unter Berücksichtigung des Zusammenhangs zwischen Amplitude und Effektivwert ($u_{eff}^2 = \hat{u}^2/2$):

$$
k \;=\;
\sqrt{
\frac{\sum_{n=2\ldots\infty}\frac{1}{2}\left(b_n\hat{u}_g^n\right)^2}
{\sum_{n=1\ldots\infty}\frac{1}{2}\left(b_n\hat{u}_g^n\right)^2}
}
\;=\;
\sqrt{
\frac{\sum_{n=2\ldots\infty} b_n^2 \hat{u}_g^{2n}}
{\sum_{n=1\ldots\infty} b_n^2 \hat{u}_g^{2n}}
}
\qquad (4.170)
$$

Der Gleichanteil $b_0$ wird nicht berücksichtigt. Bei geringer Aussteuerung mit kleinem Klirrfaktor kann man die Oberwellen bei der Berechnung des Effektivwerts des ganzen Signals vernachlässigen; dann gilt:

$$
k \approx
\frac{\sqrt{\sum_{n=2\ldots\infty} b_n^2 \hat{u}_g^{2n}}}{b_1\hat{u}_g}
$$

In Systemen mit Filtern werden oft nicht alle Oberwellen übertragen; deshalb werden die *Teil-Klirrfaktoren*

$$
k_n \;=\;
\left|\frac{b_n\hat{u}_g^n}{b_1\hat{u}_g}\right|
\;=\;
\left|\frac{b_n}{b_1}\right| \hat{u}_g^{n-1}
\qquad \text{für } n = 2 \ldots \infty
$$

angegeben, die das Verhältnis der Effektivwerte der einzelnen Oberwellen zur Grundwelle angeben. Man kann den Klirrfaktor $k$ aus den Teil-Klirrfaktoren berechnen:

$$
k \;=\;
\sqrt{
\frac{\sum_{n=2\ldots\infty} k_n^2}
{1 + \sum_{n=2\ldots\infty} k_n^2}
}
\qquad
\overset{k_n\ll 1}{\approx}
\sqrt{\sum_{n=2\ldots\infty} k_n^2}
\qquad (4.171)
$$

Aus (4.166) erhält man:

$$
k_2 \;=\; \left|\frac{b_2}{b_1}\right|\hat{u}_g
\;=\;
\left|
\frac{
\frac{a_2}{2} + \frac{a_4\hat{u}_g^2}{2} + \frac{15a_6\hat{u}_g^4}{32} + \cdots
}{
a_1 + \frac{3a_3\hat{u}_g^2}{4} + \frac{5a_5\hat{u}_g^4}{8} + \cdots
}
\right|
\hat{u}_g
\;\approx\;
\left|\frac{a_2}{2a_1}\right|\hat{u}_g
$$

$$
k_3 \;=\; \left|\frac{b_3}{b_1}\right|\hat{u}_g^2
\;=\;
\left|
\frac{
\frac{a_3}{4} + \frac{5a_5\hat{u}_g^2}{16} + \frac{21a_7\hat{u}_g^4}{64} + \cdots
}{
a_1 + \frac{3a_3\hat{u}_g^2}{4} + \frac{5a_5\hat{u}_g^4}{8} + \cdots
}
\right|
\hat{u}_g^2
\;\approx\;
\left|\frac{a_3}{4a_1}\right|\hat{u}_g^2
$$
<!-- page-import:0485:end -->

<!-- page-import:0486:start -->
4.2 Eigenschaften und Kenngrößen 449

I : quasi-linearer Bereich  
II : schwache Übersteuerung  
III : starke Übersteuerung

Abb. 4.148. Verlauf von Klirrfaktoren $k$ und $k_2 \ldots k_4$ für die Emitterschaltung aus Abb. 4.130

$$
k_4=\left|\frac{b_4}{b_1}\right|\hat{u}_g^{\,3}\approx\left|\frac{a_4}{8a_1}\right|\hat{u}_g^{\,3}
$$

$$
\vdots
$$

$$
k_n=\left|\frac{b_n}{b_1}\right|\hat{u}_g^{\,n-1}\approx\left|\frac{a_n}{2^{n-1}a_1}\right|\hat{u}_g^{\,n-1}
\qquad \text{für } n=2\ldots\infty
\eqno{(4.172)}
$$

Abbildung 4.148 zeigt den Verlauf von $k$ und $k_2 \ldots k_5$ für die Emitterschaltung aus Abb. 4.130 auf Seite 425. Im quasi-linearen Bereich hängt der Teil-Klirrfaktor $k_n$ nur von den Koeffizienten $a_1$ und $a_n$ ab und ist proportional zu $\hat{u}_g^{\,n-1}$; daraus resultiert in der doppelt-logarithmischen Darstellung eine Gerade mit der Steigung $n-1$. Bei schwacher Übersteuerung nimmt mindestens einer der Teil-Klirrfaktoren stark zu. Bei starker Übersteuerung erhält man am Ausgang näherungsweise ein Rechteck-Signal mit:

$$
k_n \to
\begin{cases}
0 & \text{für } n=2,4,6,\ldots\\
\frac{1}{n} & \text{für } n=3,5,7,\ldots
\end{cases}
$$

In der Praxis ist das Rechteck-Signal meist nicht exakt symmetrisch, so dass die geraden Teil-Klirrfaktoren nicht gegen Null gehen.

Aus Abb. 4.148 folgt, dass der Klirrfaktor $k$ im quasi-linearen Bereich etwa dem Teil-Klirrfaktor $k_2$ entspricht:

$$
k\approx k_2\approx \left|\frac{a_2}{2a_1}\right|\hat{u}_g
$$
<!-- page-import:0486:end -->

<!-- page-import:0487:start -->
450  4. Verstärker

Alle anderen Teil-Klirrfaktoren sind deutlich kleiner. Bei Schaltungen mit symmetrischer Kennlinie $(a_2 = 0)$ wird $k_2 = 0$; in diesem Fall gilt im quasi-linearen Bereich:

$$
k \approx k_3 \approx \left|\frac{a_3}{4a_1}\right| \hat{u}_g^2
$$

Ein Beispiel dafür ist der Differenzverstärker.

*Beispiel:* Für die Emitterschaltung aus Abb. 4.130 auf Seite 425 erhält man mit den Koeffizienten $a_n$ von Seite 443 folgende Teil-Klirrfaktoren:

$$
k_2 \approx \frac{0{,}061\,\hat{u}_g}{\mathrm{V}}
,\quad
k_3 \approx \frac{0{,}054\,\hat{u}_g^2}{\mathrm{V}^2}
,\quad
k_4 \approx \frac{0{,}054\,\hat{u}_g^3}{\mathrm{V}^3}
,\quad
k_5 \approx \frac{0{,}054\,\hat{u}_g^4}{\mathrm{V}^4}
$$

## 4.2.3.5 Kompressionspunkt

Die ungeraden Koeffizienten der Reihenentwicklung wirken sich auch auf die Amplitude der Grundwelle aus, siehe (4.166); dadurch wird die effektive Betriebsverstärkung der Schaltung aussteuerungsabhängig:

$$
A'_B(\hat{u}_g) = b_1 = a_1 + \frac{3a_3}{4}\,\hat{u}_g^2 + \frac{5a_5}{8}\,\hat{u}_g^4 + \frac{35a_7}{64}\,\hat{u}_g^6 + \cdots
$$

Der Betrag der Betriebsverstärkung kann ausgehend von $|A_B| = |a_1|$ mit zunehmender Aussteuerung zunächst zunehmen $(a_3/a_1 > 0,\ gain\ expansion)$ oder abnehmen $(a_3/a_1 < 0,\ gain\ compression)$. Bei einsetzender Übersteuerung nimmt er jedoch immer ab und geht mit zunehmender Übersteuerung gegen Null. Dieser Bereich wird von der Reihenentwicklung nicht mehr erfasst.

Bei Verstärkern wird der 1dB-Kompressionspunkt als Maß für die Grenze zur Übersteuerung angegeben:

*Der 1dB-Kompressionspunkt gibt die Amplitude an, bei der die Betriebsverstärkung durch die einsetzende Übersteuerung um 1 dB unter der Kleinsignal-Betriebsverstärkung liegt.*

Er liegt in dem Bereich, den wir im Abschnitt 4.2.3.3 als den *Bereich schwacher Übersteuerung* bezeichnet haben. Man unterscheidet zwischen dem *Eingangs-Kompressionspunkt* $\hat{u}_{g,Komp}$ mit

$$
|A'_B(\hat{u}_{g,Komp})| = 10^{-1/20} \cdot |A_B| \approx 0{,}89 \cdot |A_B|
$$

(4.173)

und dem *Ausgangs-Kompressionspunkt*:

$$
\hat{u}_{a,Komp} = 10^{-1/20} \cdot |A_B|\,\hat{u}_{g,Komp} \approx 0{,}89 \cdot |A_B|\,\hat{u}_{g,Komp}
$$

(4.174)

Sie werden in der Praxis durch Messen oder mit Hilfe einer Schaltungssimulation ermittelt. Abbildung 4.149 zeigt den Verlauf des Betrags der Betriebsverstärkung für einen Verstärker ohne und einen Verstärker mit *gain expansion*.

Seine praktische Bedeutung erhält der Kompressionspunkt in Verbindung mit einer Dimensionierungs-Regel, die besagt, dass man für einen verzerrungsarmen Betrieb etwa $5\dots 10\ \mathrm{dB}$ (Faktor $2\dots 3$) unter dem Kompressionspunkt bleiben muss. Die Regel liefert eine sehr gute Näherung für die Grenze zwischen dem quasi-linearen Bereich und dem Bereich schwacher Übersteuerung, die wir im Abschnitt 4.2.3.3 beschrieben haben. Sie stellt demnach sicher, dass man nicht in den Bereich gerät, in dem eine oder mehrere Oberwellen stark zunehmen.
<!-- page-import:0487:end -->

<!-- page-import:0488:start -->
4.2 Eigenschaften und Kenngrößen

451

a ohne gain expansion

b mit gain expansion

**Abb. 4.149.** Betrag der Betriebsverstärkung mit 1dB-Kompressionspunkt

*Beispiel:* Für die Emitterschaltung aus Abb. 4.130 auf Seite 425 erhält man mit Hilfe einer Schaltungssimulation $\hat{u}_{g,Komp} \approx 0{,}3\,\mathrm{V}$ und $\hat{u}_{a,Komp} \approx 1{,}2\,\mathrm{V}$. Der Eingangs-Kompressionspunkt $\hat{u}_{g,Komp}$ ist auch in Abb. 4.147 auf Seite 446 eingezeichnet.

## 4.2.3.6 Intermodulation und Intercept-Punkte

In Systemen mit Bandpassfiltern spielen die mit Hilfe der Klirrfaktoren beschriebenen harmonischen Verzerrungen meist keine Rolle, weil sie außerhalb des Durchlassbereichs der Filter liegen; daraus folgt, dass bei Ansteuerung mit *einem* Sinussignal (*Einton-Betrieb*) keine Verzerrungen im Durchlassbereich entstehen. Wenn man dagegen zwei oder mehrere Sinussignale im Durchlassbereich anlegt, fallen einige der Verzerrungsprodukte wieder in den Durchlassbereich. Diese Anteile werden *Intermodulationsverzerrungen* genannt und kommen dadurch zustande, dass bei der Ansteuerung einer nichtlinearen Kennlinie vom Grad $N$ mit einem Mehrton-Signal mit den Frequenzen $f_1, f_2, \ldots, f_m$ neben den Harmonischen $n_1 f_1, n_2 f_2, \ldots, n_m f_m$ $(n = 1 \ldots N)$ auch Mischprodukte bei den Frequenzen

$$
\pm n_1 f_1 \pm n_2 f_2 \pm \cdots \pm n_m f_m \qquad \text{mit } n_1 + n_2 + \cdots + n_m \leq N
$$

entstehen, die zum Teil im Durchlassbereich liegen [4.4],[4.5].

In der Praxis wird ein Zweiton-Signal mit nahe beieinander liegenden Frequenzen $f_1, f_2$ in der Mitte des Durchlassbereichs und gleichen Amplituden verwendet; mit $f_1 < f_2$ entstehen durch die Potenzen $n = 1 \ldots 5$ folgende Anteile:

$$
\begin{aligned}
n &= 1 \;\Rightarrow\; f_1,\; f_2 \\
n &= 2 \;\Rightarrow\; 2 f_1,\; 2 f_2,\; f_2 - f_1 \\
n &= 3 \;\Rightarrow\; 3 f_1,\; 3 f_2,\; 2 f_1 + f_2,\; 2 f_1 - f_2,\; 2 f_2 + f_1,\; 2 f_2 - f_1 \\
n &= 4 \;\Rightarrow\; 4 f_1,\; 4 f_2,\; 3 f_1 + f_2,\; 3 f_1 - f_2,\; \ldots \\
n &= 5 \;\Rightarrow\; 5 f_1,\; 5 f_2,\; \ldots,\; 3 f_1 - 2 f_2,\; 3 f_2 - 2 f_1,\; \ldots
\end{aligned}
$$

Abbildung 4.150 zeigt die Anteile bei Zweiton-Ansteuerung im Vergleich zur Einton-Ansteuerung. Man erkennt, dass die durch die ungeraden Potenzen verursachten Anteile bei

$$
2 f_1 - f_2,\; 2 f_2 - f_1,\; 3 f_1 - 2 f_2,\; 3 f_2 - 2 f_1
$$

im Durchlassbereich liegen.
<!-- page-import:0488:end -->

<!-- page-import:0489:start -->
452 4. Verstärker

*Durchlassbereich*

*Durchlassbereich*

Abb. 4.150. Anteile bei Ansteuerung einer Kennlinie vom Grad 5 mit einem Einton-Signal (oben) und einem Zweiton-Signal (unten)

#### 4.2.3.6.1 Ausgangssignal bei Zweiton-Ansteuerung

Setzt man das Zweiton-Signal $u_g=\hat{u}_g\,(\cos \omega_1 t+\cos \omega_2 t)$ in die Reihe (4.165) auf Seite 442 ein, erhält man

$$
u_a=
\left(
a_1+\frac{9a_3\hat{u}_g^2}{4}+\frac{25a_5\hat{u}_g^4}{4}+\frac{1225a_7\hat{u}_g^6}{64}+\ldots
\right)\hat{u}_g\cos \omega_1 t
\qquad f_1
$$

$$
+\left(
a_1+\frac{9a_3\hat{u}_g^2}{4}+\frac{25a_5\hat{u}_g^4}{4}+\frac{1225a_7\hat{u}_g^6}{64}+\ldots
\right)\hat{u}_g\cos \omega_2 t
\qquad f_2
$$

$$
+\left(
\frac{3a_3}{4}+\frac{25a_5\hat{u}_g^2}{8}+\frac{735a_7\hat{u}_g^4}{64}+\ldots
\right)\hat{u}_g^3\cos (2\omega_1-\omega_2)t
\qquad 2f_1-f_2
$$

$$
+\left(
\frac{3a_3}{4}+\frac{25a_5\hat{u}_g^2}{8}+\frac{735a_7\hat{u}_g^4}{64}+\ldots
\right)\hat{u}_g^3\cos (2\omega_2-\omega_1)t
\qquad 2f_2-f_1
$$

$$
+\left(
\frac{5a_5}{8}+\frac{245a_7\hat{u}_g^2}{64}+\ldots
\right)\hat{u}_g^5\cos (3\omega_1-2\omega_2)t
\qquad 3f_1-2f_2
$$

$$
+\left(
\frac{5a_5}{8}+\frac{245a_7\hat{u}_g^2}{64}+\ldots
\right)\hat{u}_g^5\cos (3\omega_2-2\omega_1)t
\qquad 3f_2-2f_1
$$

$$
+\ldots
$$

$$
=\sum_{n=0\ldots\infty} c_{2n+1}\hat{u}_g^{2n+1}\cos [((n+1)\,\omega_1-n\omega_2)]\,t
$$

$$
+\sum_{n=0\ldots\infty} c_{2n+1}\hat{u}_g^{2n+1}\cos [((n+1)\,\omega_2-n\omega_1)]\,t
\qquad (4.175)
$$

$$
+\ldots \qquad \text{mit } c_{2n+1}=(\ldots)_{2n+1}
$$
<!-- page-import:0489:end -->

<!-- page-import:0490:start -->
4.2 Eigenschaften und Kenngrößen

453

Praktisch ist die Summe nur soweit relevant, wie die Anteile noch im Durchlassbereich liegen. Bei kleinen Amplituden sind die Koeffizienten $c_n$ näherungsweise konstant:

$$
c_1 \approx a_1 \quad,\quad c_3 \approx \frac{3a_3}{4} \quad,\quad c_5 \approx \frac{5a_5}{8} \quad,\quad \ldots
$$

Daraus folgt:

$$
c_{2n+1} \approx \frac{2n+1}{2^{n+1}}\,a_{2n+1} \qquad \text{für } n=1,\ldots,\infty
\tag{4.176}
$$

### 4.2.3.6.2 Intermodulation

Die Verzerrungen im Durchlassbereich werden *Intermodulationsprodukte* genannt:

*Bei Mehrton-Betrieb werden diejenigen Verzerrungen im Durchlassbereich, deren Frequenz sich aus mindestens zwei Signalfrequenzen zusammensetzt, als Intermodulation oder Intermodulationsprodukte bezeichnet.*

Die Anteile bei $2f_1-f_2$ und $2f_2-f_1$ werden *Intermodulation 3. Ordnung* (IM3) und die bei $3f_1-2f_2$ und $3f_2-2f_1$ *Intermodulation 5. Ordnung* (IM5) genannt. Allgemein gilt:

*Die Verzerrungen bei den Frequenzen $(n+1)f_1-nf_2$ und $(n+1)f_2-nf_1$ werden Intermodulation der Ordnung $2n+1$ genannt.*

Da die Amplituden der Intermodulationsprodukte entsprechend ihrer Ordnung von der Eingangsamplitude abhängen, sind in der Praxis nur die dominierenden Anteile IM3 und IM5 von Interesse; die IM7 ist in den meisten Fällen bereits vernachlässigbar klein.

Für die Amplituden des Nutzsignals und der Intermodulationen erhält man:

$$
\hat{u}_{a,\!Nutz} = |c_1|\,\hat{u}_g \approx |a_1|\,\hat{u}_g
$$

$$
\hat{u}_{a,\!IM3} = |c_3|\,\hat{u}_g^3 \approx \left|\frac{3a_3}{4}\right|\,\hat{u}_g^3
\tag{4.177}
$$

$$
\hat{u}_{a,\!IM5} = |c_5|\,\hat{u}_g^5 \approx \left|\frac{5a_5}{8}\right|\,\hat{u}_g^5
$$

$$
\vdots
$$

### 4.2.3.6.3 Intermodulationsabstände

Die Abkürzungen *IM3* und *IM5* werden auch zur Bezeichnung der *Intermodulationsabstände* verwendet:

*Das Verhältnis der Amplitude des Nutzsignals zur Amplitude eines bestimmten Intermodulationsprodukts wird Intermodulationsabstand genannt.*

Mit den Amplituden aus (4.177) erhält man:

$$
IM3 = \frac{\hat{u}_{a,\!Nutz}}{\hat{u}_{a,\!IM3}} = \left|\frac{c_1}{c_3}\right|\,\frac{1}{\hat{u}_g^2} \approx \left|\frac{4a_1}{3a_3}\right|\,\frac{1}{\hat{u}_g^2}
\tag{4.178}
$$

$$
IM5 = \frac{\hat{u}_{a,\!Nutz}}{\hat{u}_{a,\!IM5}} = \left|\frac{c_1}{c_5}\right|\,\frac{1}{\hat{u}_g^4} \approx \left|\frac{8a_1}{5a_5}\right|\,\frac{1}{\hat{u}_g^4}
\tag{4.179}
$$

In der Praxis werden die Intermodulationsabstände meist in dB angegeben:
<!-- page-import:0490:end -->

<!-- page-import:0491:start -->
454  4. Verstärker

$IM3\,[\mathrm{dB}] = 20\,\mathrm{dB}\cdot \log IM3 \quad,\quad IM5\,[\mathrm{dB}] = 20\,\mathrm{dB}\cdot \log IM5$

Die Intermodulationsabstände entsprechen in ihrer Bedeutung den Teil-Klirrfaktoren bei Einton-Betrieb, wenn man berücksichtigt, dass bei den Intermodulationsabständen das Verhältnis aus Nutzsignal und Verzerrungsprodukt und bei den Teil-Klirrfaktoren das Verhältnis aus Verzerrungsprodukt und Nutzsignal gebildet wird. Deshalb kann man die Kehrwerte der Intermodulationsabstände als Mehrton-Teil-Klirrfaktoren auffassen.

## 4.2.3.6.4 Intercept-Punkte

Um eine von der Amplitude $\hat{u}_g$ unabhängige Größe zur Charakterisierung der Intermodulationsprodukte angeben zu können, werden die Amplituden ermittelt, bei denen die Intermodulationsabstände theoretisch den Wert eins annehmen; dazu werden die für kleine Amplituden geltenden Näherungen in (4.178) und (4.179) über ihren Gültigkeitsbereich hinaus extrapoliert. Die resultierenden Amplituden werden Intercept-Punkte (intercept point, IP) genannt:

*Die Intercept-Punkte geben die Ein- oder Ausgangsamplitude an, bei der die extrapolierte Amplitude eines bestimmten Intermodulationsprodukts genauso groß wird wie die extrapolierte Amplitude des Nutzsignals.*

Man unterscheidet zwischen den Eingangs-Intercept-Punkten (input IP, IIP)

$$
\hat{u}_{g,IP3}=\left.\hat{u}_g\right|_{IM3=1}=\sqrt{\left|\frac{4a_1}{3a_3}\right|}
\qquad (4.180)
$$

$$
\hat{u}_{g,IP5}=\left.\hat{u}_g\right|_{IM5=1}=\sqrt[4]{\left|\frac{8a_1}{5a_5}\right|}
\qquad (4.181)
$$

und den Ausgangs-Intercept-Punkten (output IP, OIP):

$$
\hat{u}_{a,IP3}=|a_1|\,\hat{u}_{g,IP3}
\quad,\quad
\hat{u}_{a,IP5}=|a_1|\,\hat{u}_{g,IP5}
\qquad (4.182)
$$

Letztere sind um den Betrag der Kleinsignal-Betriebsverstärkung ($|a_1|=|A_B|$) größer als die Eingangs-Intercept-Punkte und werden oft ohne expliziten Bezug auf den Ausgang nur als Intercept-Punkte IP3 und IP5 bezeichnet.

Abbildung 4.151 zeigt den Verlauf der Amplituden des Nutzsignals $\hat{u}_{a,Nutz}=|c_1|\hat{u}_g$ und der Intermodulationsprodukte $\hat{u}_{a,IM3}=|c_3|\hat{u}_g^3$ und $\hat{u}_{a,IM5}=|c_5|\hat{u}_g^5$ in Abhängigkeit von der Eingangsamplitude $\hat{u}_g$ in doppelt logarithmischer Darstellung. Man erhält bei kleinen Amplituden Geraden mit den Steigungen 1 bei $\hat{u}_{a,Nutz}$, 3 bei $\hat{u}_{a,IM3}$ und 5 bei $\hat{u}_{a,IM5}$. Durch Extrapolation werden die Intercept-Punkte IP3 und IP5 als Schnittpunkte der Geraden ermittelt.

Man kann mit Hilfe der Intercept-Punkte die Amplituden der Intermodulationsprodukte und die Intermodulationsabstände für beliebige Ein- und Ausgangsamplituden im quasi-linearen Bereich berechnen. Aus den Näherungen in (4.177) folgt für die Amplituden der Intermodulationsprodukte bei Bezug auf die Eingangs-Intercept-Punkte:

$$
\hat{u}_{a,IM3}\approx \left|\frac{3a_3}{4}\right|\hat{u}_g^3
=\left|\frac{3a_3}{4a_1}\right|\,|a_1|\,\hat{u}_g^3
=\frac{|a_1|\,\hat{u}_g^3}{\hat{u}_{g,IP3}^2}
$$

$$
\hat{u}_{a,IM5}\approx \left|\frac{5a_5}{8}\right|\hat{u}_g^5
=\left|\frac{5a_5}{8a_1}\right|\,|a_1|\,\hat{u}_g^5
=\frac{|a_1|\,\hat{u}_g^5}{\hat{u}_{g,IP5}^4}
$$
<!-- page-import:0491:end -->

<!-- page-import:0492:start -->
455

## 4.2 Eigenschaften und Kenngrößen

I : quasi-linearer Bereich  
II : schwache Übersteuerung  
III : starke Übersteuerung

Abb. 4.151. Intercept-Punkte am Eingang $(\hat{u}_{g,IP3}, \hat{u}_{g,IP5})$ und am Ausgang $(\hat{u}_{a,IP3}, \hat{u}_{a,IP5})$ und Intermodulationsabstände $IM3$ und $IM5$

Bei Bezug auf die Ausgangs-Intercept-Punkte erhält man unter Berücksichtigung von $\hat{u}_{a,Nutz}=|a_1|\hat{u}_g$ und (4.182):

$$
\hat{u}_{a,IM3} \approx \frac{|a_1|\hat{u}_g^3}{\hat{u}_{g,IP3}^2}
= \frac{(|a_1|\hat{u}_g)^3}{(|a_1|\hat{u}_{g,IP3})^2}
= \frac{\hat{u}_{a,Nutz}^3}{\hat{u}_{a,IP3}^2}
$$

$$
\hat{u}_{a,IM5} \approx \frac{|a_1|\hat{u}_g^5}{\hat{u}_{g,IP5}^4}
= \frac{(|a_1|\hat{u}_g)^5}{(|a_1|\hat{u}_{g,IP5})^4}
= \frac{\hat{u}_{a,Nutz}^5}{\hat{u}_{a,IP5}^4}
$$

Allgemein gilt:

$$
\hat{u}_{a,IMn} \approx \frac{|a_1|\hat{u}_g^n}{\hat{u}_{g,IPn}^{n-1}}
= \frac{\hat{u}_{a,Nutz}^n}{\hat{u}_{a,IPn}^{n-1}}
\qquad (4.183)
$$

Für die Intermodulationsabstände folgt aus den Näherungen in (4.178) und (4.179) unter Berücksichtigung von $\hat{u}_{a,Nutz}=|a_1|\hat{u}_g$ und (4.182):

$$
IM3 \approx \left|\frac{4a_1}{3a_3}\right|\frac{1}{\hat{u}_g^2}
\stackrel{(4.180)}{=}
\frac{\hat{u}_{g,IP3}^2}{\hat{u}_g^2}
=
\frac{(|a_1|\hat{u}_{g,IP3})^2}{(|a_1|\hat{u}_g)^2}
=
\frac{\hat{u}_{a,IP3}^2}{\hat{u}_{a,Nutz}^2}
$$

$$
IM5 \approx \left|\frac{8a_1}{5a_5}\right|\frac{1}{\hat{u}_g^4}
\stackrel{(4.181)}{=}
\frac{\hat{u}_{g,IP5}^4}{\hat{u}_g^4}
=
\frac{(|a_1|\hat{u}_{g,IP5})^4}{(|a_1|\hat{u}_g)^4}
=
\frac{\hat{u}_{a,IP5}^4}{\hat{u}_{a,Nutz}^4}
$$
<!-- page-import:0492:end -->

<!-- page-import:0493:start -->
456 4. Verstärker

**Abb. 4.152.** Reihenschaltung von zwei Verstärkern

Allgemein gilt:

$$
IMn \approx \left(\frac{\hat{u}_{g,IPn}}{\hat{u}_g}\right)^{n-1}
=
\left(\frac{\hat{u}_{a,IPn}}{\hat{u}_{a,Nutz}}\right)^{n-1}
$$

(4.184)

*Beispiel:* Für die Emitterschaltung aus Abb. 4.135 erhält man mit (4.180)–(4.182) und den Koeffizienten $a_n$ von Seite 443 folgende Intercept-Punkte:

$$
\hat{u}_{g,IP3}=2{,}5\,\mathrm{V}
\;\Rightarrow\;
\hat{u}_{a,IP3}=11{,}4\,\mathrm{V}
,\qquad
\hat{u}_{g,IP5}=1{,}2\,\mathrm{V}
\;\Rightarrow\;
\hat{u}_{a,IP5}=5{,}4\,\mathrm{V}
$$

Sie sind immer deutlich größer als die tatsächlich auftretenden Amplituden. Für ein Zweiton-Signal mit $\hat{u}_g = 100\,\mathrm{mV}$ erhält man mit (4.177) $\hat{u}_{a,Nutz}=460\,\mathrm{mV}$, $\hat{u}_{a,IM3}\approx 0{,}7\,\mathrm{mV}$ und $\hat{u}_{a,IM5}\approx 0{,}024\,\mathrm{mV}$, mit (4.178) $IM3 \approx 610$ und mit (4.179) $IM5 \approx 19000$.

## 4.2.3.7 Reihenschaltung von Verstärkern

Wenn man zwei Verstärker wie in Abb. 4.152 in Reihe schaltet, erhält man aus den Kennlinien

$$
u_{a1} = a_{1,1}u_{g1} + a_{2,1}u_{g1}^2 + a_{3,1}u_{g1}^3 + \cdots
$$

$$
u_{a2} = a_{1,2}u_{g2} + a_{2,2}u_{g2}^2 + a_{3,2}u_{g2}^3 + \cdots
$$

durch Einsetzen die Kennlinie der Reihenschaltung:

$$
u_a = a_1u_g + a_2u_g^2 + a_3u_g^3 + \cdots
$$

$$
= a_{1,1}a_{1,2}u_g + \left(a_{1,2}a_{2,1} + a_{1,1}^2a_{2,2}\right)u_g^2
$$

$$
+ \left(a_{1,2}a_{3,1} + 2a_{1,1}a_{2,1}a_{2,2} + a_{1,1}^3a_{3,2}\right)u_g^3 + \cdots
$$

(4.185)

Man beachte, dass bei allen Größen $x_{n,m}$ der Index $n$ die Potenz innerhalb der Reihe und der Index $m$ die Nummer des Verstärkers angibt.

Die Kennlinie des Verstärkers 1 entspricht der Betriebs-Übertragungskennlinie bei Betrieb mit einer Signalquelle mit Innenwiderstand $R_g$ und einer Last entsprechend dem Eingangswiderstand $r_{e2}$ des Verstärkers 2; daraus folgt mit Bezug auf die Kleinsignal-Kenngrößen:

$$
a_{1,1} = A_{B1} = \frac{r_{e1}}{R_g + r_{e1}}\,A_1\,\frac{r_{e2}}{r_{a1} + r_{e2}}
$$

Im Gegensatz dazu wird der Verstärker 2 mit einer idealen Signalspannungsquelle betrieben, da die Spannung $u_{g2}$ direkt am Eingang des Verstärkers anliegt, siehe Abb. 4.152; hier gilt demnach $R_g = 0$ und:
<!-- page-import:0493:end -->

<!-- page-import:0494:start -->
457

## 4.2 Eigenschaften und Kenngrößen

$$
a_{1,2} = A_{B2} = A_2 \frac{R_L}{r_{a2} + R_L}
$$

#### 4.2.3.7.1 Klirrfaktor der Reihenschaltung

Für die Teil-Klirrfaktoren der Reihenschaltung folgt aus (4.172):

$$
k_2 \approx \left|\frac{a_2}{2a_1}\right| \hat{u}_g \;,\quad
k_3 \approx \left|\frac{a_3}{4a_1}\right| \hat{u}_g^2 \;,\quad \ldots
$$

Wenn man annimmt, dass sich alle harmonischen Verzerrungen addieren, d.h. alle Terme in den Klammern von (4.185) dasselbe Vorzeichen haben, kann man die Teil-Klirrfaktoren der Reihenschaltung unter Berücksichtigung von $\hat{u}_{g2} \approx |a_{1,1}|\hat{u}_{g1}$ durch die Teil-Klirrfaktoren

$$
k_{2,1} \approx \left|\frac{a_{2,1}}{2a_{1,1}}\right| \hat{u}_{g1} \;,\quad
k_{3,1} \approx \left|\frac{a_{3,1}}{4a_{1,1}}\right| \hat{u}_{g1}^2 \;,\quad \ldots
$$

des Verstärkers 1 und die Teil-Klirrfaktoren

$$
k_{2,2} \approx \left|\frac{a_{2,2}}{2a_{1,2}}\right| \hat{u}_{g2}
\approx \left|\frac{a_{1,1}a_{2,2}}{2a_{1,2}}\right| \hat{u}_{g1}
$$

$$
k_{3,2} \approx \left|\frac{a_{3,2}}{4a_{1,2}}\right| \hat{u}_{g2}^2
\approx \left|\frac{a_{1,1}^2 a_{3,2}}{4a_{1,2}}\right| \hat{u}_{g1}^2 \;,\quad \ldots
$$

des Verstärkers 2 ausdrücken:

$$
k_2 \approx k_{2,1} + k_{2,2}
$$

$$
k_3 \approx k_{3,1} + k_{3,2} + 2k_{2,1}k_{2,2}
$$

$$
k_4 \approx k_{4,1} + k_{4,2} + 2k_{3,1}k_{2,2} + 3k_{2,1}k_{3,2} + k_{2,1}^2k_{2,2}
$$

$$
\vdots
$$

Wenn alle Teil-Klirrfaktoren viel kleiner als Eins sind, kann man die Produkte aus Teil-Klirrfaktoren vernachlässigen:

$$
k_2 \approx k_{2,1} + k_{2,2} \;,\quad
k_3 \approx k_{3,1} + k_{3,2} \;,\quad
k_4 \approx k_{4,1} + k_{4,2} \;,\quad \ldots
$$

Demnach ergeben sich die Teil-Klirrfaktoren der Reihenschaltung aus der Summe der Teil-Klirrfaktoren der beiden Verstärker. Dieses Ergebnis kann man nun auf eine Reihenschaltung beliebig vieler Verstärker erweitern:

*Die Teil-Klirrfaktoren einer Reihenschaltung aus mehreren Verstärkern entsprechen näherungsweise der Summe der entsprechenden Teil-Klirrfaktoren der einzelnen Verstärker.*

Bei einer Reihenschaltung aus $M$ Verstärkern gilt:

$$
k_n \approx \sum_{m=1\ldots M} k_{n,m}
$$

(4.186)

Wenn bei der Reihenschaltung eine Kompensation von Harmonischen auftritt, sind die Teil-Klirrfaktoren der Reihenschaltung kleiner als die Summe; deshalb kann die Summe als Abschätzung nach oben (worst case) aufgefasst werden.

Für den Gesamt-Klirrfaktor $k$ der Reihenschaltung, der mit (4.171) auf Seite 448 aus den Teil-Klirrfaktoren berechnet wird, kann man im allgemeinen Fall keinen einfachen
<!-- page-import:0494:end -->

<!-- page-import:0495:start -->
458  4. Verstärker

Zusammenhang mit den Klirrfaktoren der einzelnen Verstärker angeben. In der Praxis ist jedoch meist ein Teil-Klirrfaktor dominierend, so dass $k \approx k_2$ oder – bei symmetrischen Kennlinien – $k \approx k_3$ gilt; in diesem Fall kann man (4.186) anwenden und den Klirrfaktor der Reihenschaltung durch die Summe der Klirrfaktoren der einzelnen Verstärker abschätzen.

#### 4.2.3.7.2 Intercept-Punkte der Reihenschaltung

Aus (4.180) und (4.185) folgt für den Eingangs-Intercept-Punkt $IIP3$ der Reihenschaltung:

$$
\frac{1}{\hat{u}_{g,IP3}^2}
=
\left|\frac{3a_3}{4a_1}\right|
=
\left|
\frac{3a_{3,1}}{4a_{1,1}}
+
\frac{3a_{1,1}^2 a_{3,2}}{4a_{1,2}}
+
\frac{3a_{2,1}a_{2,2}}{2a_{1,2}}
\right|
$$

Wenn man davon ausgeht, dass die ersten beiden Terme dasselbe Vorzeichen haben und der dritte Term vernachlässigt werden kann, weil im Zähler mit $a_{2,1}a_{2,2}$ das Produkt aus zwei vergleichsweise kleinen Größen steht, kann man diesen Ausdruck mit Hilfe des Intercept-Punkts

$$
\hat{u}_{g1,IP3}
=
\sqrt{\left|\frac{4a_{1,1}}{3a_{3,1}}\right|}
=
\sqrt{\left|\frac{4A_{B1}}{3a_{3,1}}\right|}
$$

des Verstärkers 1 und des Intercept-Punkts

$$
\hat{u}_{g2,IP3}
=
\sqrt{\left|\frac{4a_{1,2}}{3a_{3,2}}\right|}
=
\sqrt{\left|\frac{4A_{B2}}{3a_{3,2}}\right|}
$$

des Verstärkers 2 ausdrücken:

$$
\frac{1}{\hat{u}_{g,IP3}^2}
\approx
\frac{1}{\hat{u}_{g1,IP3}^2}
+
\frac{|A_{B1}|^2}{\hat{u}_{g2,IP3}^2}
$$

Daraus folgt mit

$$
\hat{u}_{a1,IP3}
=
|A_{B1}|\,\hat{u}_{g1,IP3}
,\quad
\hat{u}_{a2,IP3}
=
|A_{B2}|\,\hat{u}_{g2,IP3}
$$

der Ausgangs-Intercept-Punkt $OIP3$:

$$
\frac{1}{\hat{u}_{a,IP3}^2}
\approx
\frac{1}{|A_{B2}|^2\,\hat{u}_{a1,IP3}^2}
+
\frac{1}{\hat{u}_{a2,IP3}^2}
$$

In gleicher Weise erhält man den Intercept-Punkt IP5:

$$
IIP5:\qquad
\frac{1}{\hat{u}_{g,IP5}^4}
\approx
\frac{1}{\hat{u}_{g1,IP5}^4}
+
\frac{|A_{B1}|^4}{\hat{u}_{g2,IP5}^4}
$$

$$
OIP5:\qquad
\frac{1}{\hat{u}_{a,IP5}^4}
\approx
\frac{1}{|A_{B2}|^4\,\hat{u}_{a1,IP5}^4}
+
\frac{1}{\hat{u}_{a2,IP5}^4}
$$

Unter Verwendung der Parallelschaltungsformel

$$
\frac{1}{c}=\frac{1}{a}+\frac{1}{b}
\Rightarrow
c=a\parallel b
$$

erhält man:
<!-- page-import:0495:end -->

<!-- page-import:0496:start -->
4.2 Eigenschaften und Kenngrößen

459

$IIP3:$ \qquad \hat{u}_{g,IP3}^{2} \approx \hat{u}_{g1,IP3}^{2} \parallel \left(\frac{\hat{u}_{g2,IP3}}{|A_{B1}|}\right)^{2}$

$OIP3:$ \qquad \hat{u}_{a,IP3}^{2} \approx \left(|A_{B2}|\hat{u}_{a1,IP3}\right)^{2} \parallel \hat{u}_{a2,IP3}^{2}$

$IIP5:$ \qquad \hat{u}_{g,IP5}^{4} \approx \hat{u}_{g1,IP5}^{4} \parallel \left(\frac{\hat{u}_{g2,IP5}}{|A_{B1}|}\right)^{4}$

$OIP5:$ \qquad \hat{u}_{a,IP5}^{4} \approx \left(|A_{B2}|\hat{u}_{a1,IP5}\right)^{4} \parallel \hat{u}_{a2,IP5}^{4}$

Man erkennt, dass die Intercept-Punkte der Verstärker mit Hilfe der Betriebsverstärkungen $A_{B1}$ und $A_{B2}$ auf den Ein- oder Ausgang der Reihenschaltung umgerechnet und in der 2-ten bzw. 4-ten Potenz *parallelgeschaltet* werden.

Dieses Ergebnis kann auf eine Reihenschaltung von beliebig vielen Verstärkern erweitert werden:

*Der Eingangs-Intercept-Punkt IIPn einer Reihenschaltung von Verstärkern wird ermittelt, indem die Intercept-Punkte der einzelnen Verstärker mit Hilfe der Betriebsverstärkungen auf den Eingang umgerechnet und in der $(n\!-\!1)$-ten Potenz parallelgeschaltet werden. In gleicher Weise erhält man den Ausgangs-Intercept-Punkt OIPn durch Umrechnen auf den Ausgang.*

#### 4.2.3.8 Betriebsfälle bei der Ermittlung der nichtlinearen Kenngrößen

Die nichtlinearen Kenngrößen werden hier ausgehend von der Betriebs-Übertragungskennlinie, d.h. bei Betrieb des Verstärkers mit einer Signalquelle mit Innenwiderstand $R_g$ und einer Last $R_L$, ermittelt; dadurch beziehen sich die Größen immer auf einen bestimmten Betriebsfall und sind demzufolge keine Eigenschaften des Verstärkers allein. Diese Vorgehensweise entspricht dem Vorgehen in der Praxis, da Kenngrößen wie Klirrfaktor und Intercept-Punkte immer für eine bestimmte Beschaltung ermittelt werden. Im Datenblatt eines Verstärkers ist diese Beschaltung angegeben. Es gibt zwei Betriebsfälle, die besonders häufig sind:

- Bei Niederfrequenzverstärkern ist oft die Eingangsimpedanz viel größer als der Innenwiderstand typischer Signalquellen $(r_e \gg R_g)$ und der Ausgangswiderstand viel kleiner als der Lastwiderstand $(r_a \ll R_L)$. In diesem Fall ist die Spannungsteilung am Eingang und am Ausgang vernachlässigbar und die Betriebsverstärkung $A_B$ entspricht der Leerlaufverstärkung $A$. Wegen $u_g \approx u_e$ ist es auch unerheblich, ob man sich bei den nichtlinearen Kenngrößen auf $u_g$ oder auf $u_e$ bezieht.
- Hochfrequenzverstärker werden angepasst betrieben, d.h. es gilt $R_g = r_e = r_a = R_L = Z_W$, wobei $Z_W$ der Wellenwiderstand der verwendeten Leitungen ist; üblich sind $Z_W = 50\,\Omega$ und $Z_W = 75\,\Omega$ bei Koaxialleitungen und $Z_W = 110\,\Omega$ bei verdrillten Zweidraht-Leitungen (*twisted pair*). Dadurch wird die Amplitude des Signals bei einem einzelnen Verstärker am Eingang und am Ausgang durch Spannungsteilung halbiert; daraus folgt:

$$
A_B = \frac{A}{4}, \quad u_e = \frac{u_g}{2}
$$

Wenn man die nichtlinearen Kenngrößen nicht auf $u_g$, sondern auf $u_e$ beziehen möchte, muss man in den jeweiligen Gleichungen $(2u_e)^n$ anstelle von $u_g^n$ einsetzen. Für den ersten
<!-- page-import:0496:end -->

<!-- page-import:0497:start -->
460 4. Verstärker

Verstärker in einer Reihenschaltung gilt dies in gleicher Weise; dagegen muss man bei jedem weiteren Verstärker nur noch die Spannungsteilung am Ausgang berücksichtigen:

$$
A_{B(i)}=\frac{A_{(i)}}{2}, \quad u_{e(i)}=u_{g(i)}=u_{a(i-1)} \qquad \text{für } i \geq 2
$$

## 4.2.3.9 Messung der nichtlinearen Kenngrößen

Wir haben bisher angenommen, dass die Reihenentwicklung der Betriebs-Übertragungskennlinie bekannt ist, und haben die nichtlinearen Kenngrößen aus den Koeffizienten der Reihe berechnet. In der Praxis muss man meist umgekehrt vorgehen, da die Bestimmung der Koeffizienten aus der gemessenen oder simulierten Kennlinie aufwendig ist oder die Kennlinie gar nicht direkt gemessen oder simuliert werden kann, z.B. bei Verstärkern mit Wechselspannungs- oder Bandpasskopplung, die keine Gleichspannung übertragen.

### 4.2.3.9.1 Verstärker mit Gleichspannungskopplung

Bei Verstärkern mit Gleichspannungskopplung nach Abb. 4.153a kann man die Betriebs-Übertragungskennlinie zwar messen, dennoch ist es einfacher, eine Messreihe mit einem sinusförmigen Eingangssignal (Einton-Signal) vorzunehmen und die Amplituden der Grundwelle und der Oberwellen am Ausgang des Verstärkers in Abhängigkeit von der Eingangsamplitude mit einem Spektralanalysator zu ermitteln. Damit erhält man die in Abb. 4.147 auf Seite 446 gezeigten Kennlinien. Aus den Messwerten im quasi-linearen Bereich erhält man mit Hilfe von (4.168) auf Seite 447 die Beträge der Koeffizienten der Reihe:

$$
|a_1| \approx \frac{\hat{u}_{a(GW)}}{\hat{u}_g}, \quad |a_2| \approx \frac{2\,\hat{u}_{a(1.\!OW)}}{\hat{u}_g^2}, \quad |a_3| \approx \frac{4\,\hat{u}_{a(2.\!OW)}}{\hat{u}_g^3}, \quad \ldots
$$

Da zur Berechnung der nichtlinearen Kenngrößen nur die Beträge der Koeffizienten benötigt werden, ist eine Bestimmung der Vorzeichen nicht erforderlich.

Abbildung 4.153a zeigt auf der rechten Seite den Frequenzgang des Verstärkers und die Grund- und Oberwellen des Ausgangssignals; dabei liegen die Oberwellen aufgrund der logarithmischen Frequenzachse mit zunehmender Frequenz immer dichter. Die Frequenz $f_1$ des Eingangssignals muss so gewählt werden, dass alle relevanten Oberwellen unterhalb der Grenzfrequenz $f_O$ liegen.

### 4.2.3.9.2 Verstärker mit Wechselspannungskopplung

Bei Verstärkern mit Wechselspannungskopplung nach Abb. 4.153b geht man genauso vor wie bei Verstärkern mit Gleichspannungskopplung; die Frequenz $f_1$ des Eingangssignals muss dabei oberhalb der unteren Grenzfrequenz $f_U$ liegen. Ein typisches Beispiel sind Audio-Verstärker mit $f_U = 20\,\text{Hz}$ und $f_O = 20\,\text{kHz}$. Die Normen für Audio-Systeme schreiben in diesem Fall die Messfrequenz $f_1 = 1\,\text{kHz}$ vor.

Mit abnehmender Bandbreite $B = f_O - f_U$ passen immer weniger Oberwellen in den Durchlassbereich. Für $f_O/f_U < 5$ muss man den Koeffizienten $a_5$ mit der im folgenden Abschnitt beschriebenen Zweiton-Messung bestimmen; für $f_O/f_U < 3$ gilt dasselbe für den Koeffizienten $a_3$.

### 4.2.3.9.3 Verstärker mit Bandpasskopplung

Bei Schmalband-Verstärkern mit Bandpasskopplung nach Abb. 4.153c und bei Verstärkern mit Wechselspannungskopplung und geringer Bandbreite wird mit einem Zweiton-Signal
<!-- page-import:0497:end -->

<!-- page-import:0498:start -->
## 4.2 Eigenschaften und Kenngrößen

461

a Verstärker mit Gleichspannungskopplung

b Verstärker mit Wechselspannungskopplung

c Verstärker mit Bandpasskopplung (Schmalbandverstärker)

**Abb. 4.153.** Vorgehensweise bei der Messung der nichtlinearen Kenngrößen in Abhängigkeit von der Kopplung des Verstärkers

gemessen; dabei treten die im Abschnitt 4.2.3.6 beschriebenen Intermodulationsverzerrungen auf, die in Abb. 4.153c auf der rechten Seite dargestellt sind. Die Frequenzachse ist in diesem Fall linear, da alle Anteile in einem Raster mit dem Rasterabstand $\Delta f = f_2 - f_1$ liegen.

Man misst die Amplituden der Grundwellen bei $f_1$ und $f_2$ und der Intermodulationsprodukte in Abhängigkeit von der Amplitude der Eingangssignale. Damit erhält man die in Abb. 4.151 auf Seite 455 gezeigten Kennlinien. Aus den Messwerten im quasi-linearen Bereich erhält man mit Hilfe von (4.177) auf Seite 453 die Beträge der ungeraden Koeffizienten der Reihe:

$$
|a_1| \approx \frac{\hat{u}_a(GW)}{\hat{u}_g}, \qquad
|a_3| \approx \frac{4\,\hat{u}_{a,IM3}}{3\,\hat{u}_g^3}, \qquad
|a_5| \approx \frac{8\,\hat{u}_{a,IM5}}{5\,\hat{u}_g^5}, \qquad \ldots
$$

Daraus erhält man mit (4.180) und (4.181) die Intercept-Punkte $IIP3$ und $IIP5$:

$$
\hat{u}_{g,IP3} \approx \hat{u}_g \sqrt{\frac{\hat{u}_a(GW)}{\hat{u}_{a,IM3}}}, \qquad
\hat{u}_{g,IP5} \approx \hat{u}_g \sqrt[4]{\frac{\hat{u}_a(GW)}{\hat{u}_{a,IM5}}}
$$

Werden auch die geraden Koeffizienten der Reihe benötigt, muss man zusätzlich die im letzten Abschnitt beschriebenen Messungen mit einem Einton-Signal durchführen. In der Praxis wird meist nur $|a_2|$ benötigt; dazu müssen die Grundwelle mit der Frequenz $f_1$ und die 1.Oberwelle mit der Frequenz $2f_1$ im Durchlassbereich liegen, d.h. es muss $f_O/f_U > 2$ gelten.
<!-- page-import:0498:end -->

<!-- page-import:0499:start -->
462  4. Verstärker

![Abb. 4.154. Rauschquellen eines Verstärkers]

**Abb. 4.154.** Rauschquellen eines Verstärkers

## 4.2.4 Rauschen

Die Grundlagen zur Beschreibung des Rauschens und die Berechnung der Rauschzahl werden im Abschnitt 2.3.4 am Beispiel eines Bipolartransistors beschrieben. Die Ergebnisse werden im folgenden auf allgemeine Verstärker übertragen. Wir setzen die Ausführungen über die *Rauschdichten* im Abschnitt 2.3.4 auf Seite 85 als bekannt voraus und empfehlen, ggf. dort nachzulesen.

### 4.2.4.1 Rauschquellen und Rauschdichten eines Verstärkers

Halbleiter-Verstärker sind aus Transistoren und Widerständen aufgebaut, die jeweils eine oder mehrere Rauschquellen aufweisen. Man kann alle Rauschquellen auf den Eingang des Verstärkers umrechnen und zu einer Rauschspannungsquelle $u_{r,0}$ und einer Rauschstromquelle $i_{r,0}$ zusammenfassen, siehe Abb. 4.154; der eigentliche Verstärker ist dann rauschfrei. Die Rauschquellen $u_{r,0}$ und $i_{r,0}$ werden auch *äquivalente Rauschquellen* genannt, da sie das Rauschverhalten des Verstärkers *äquivalent* beschreiben. Die Berechnung der zugehörigen Rauschdichten $|u_{r,0}(f)|^2$ und $|i_{r,0}(f)|^2$ ist im allgemeinen aufwendig; in der Praxis werden sie gemessen oder mit Hilfe einer Schaltungssimulation ermittelt. Meist werden anstelle der Betragsquadrate mit den Einheiten

$$
\left[\,|u_{r,0}(f)|^2\,\right] = \frac{\mathrm{V}^2}{\mathrm{Hz}}
,\qquad
\left[\,|i_{r,0}(f)|^2\,\right] = \frac{\mathrm{A}^2}{\mathrm{Hz}}
$$

die Beträge $|u_{r,0}(f)|$ und $|i_{r,0}(f)|$ mit den Einheiten

$$
\left[\,|u_{r,0}(f)|\,\right] = \frac{\mathrm{V}}{\sqrt{\mathrm{Hz}}}
,\qquad
\left[\,|i_{r,0}(f)|\,\right] = \frac{\mathrm{A}}{\sqrt{\mathrm{Hz}}}
$$

angegeben.

Die Rauschdichten sind im Bereich mittlerer Frequenzen näherungsweise konstant, d.h. frequenzunabhängig; man spricht in diesem Zusammenhang von *weißem Rauschen* und nennt den zugehörigen Frequenzbereich den *Bereich weißen Rauschens*. Bei niedrigen Frequenzen nehmen die Rauschdichten aufgrund des 1/f-Rauschens, bei hohen Frequenzen aufgrund der abnehmenden Verstärkung zu. Eine Ausnahme ist die Rauschstromdichte eines Fets, die über den ganzen Frequenzbereich frequenzproportional zunimmt. Abbildung 4.155 zeigt den typischen Verlauf der Rauschdichten für einen Verstärker mit Bipolartransistoren; der Bereich des weißen Rauschens mit $|u_{r,0}(f)| = 1{,}1\,\mathrm{nV}/\sqrt{\mathrm{Hz}}$ und $|i_{r,0}(f)| = 1{,}8\,\mathrm{pA}/\sqrt{\mathrm{Hz}}$ erstreckt sich in diesem Fall von 5 kHz bis 50 MHz.
<!-- page-import:0499:end -->

<!-- page-import:0500:start -->
4.2 Eigenschaften und Kenngrößen 463

Abb. 4.155. Typischer Verlauf der Rauschdichten für einen Verstärker mit Bipolartransistoren

## 4.2.4.2 Ersatzrauschquelle und spektrale Rauschzahl

Bei Betrieb mit einem Signalgenerator erhält man das in Abb. 4.156a gezeigte Ersatzschaltbild mit der Signalspannung $u_g$ und der Rauschspannungsquelle $u_{r,g}$ des Signalgenerators. Die Rauschspannungsquelle $u_{r,g}$ kann mit den Rauschquellen $u_{r,0}$ und $i_{r,0}$ des Verstärkers zu einer Ersatzrauschquelle $u_r$ zusammengefasst werden, siehe Abb. 4.156b; dabei gilt für die Rauschspannungsdichte der Ersatzrauschquelle $^{32}$:

$$
|u_r(f)|^2
=
\underbrace{|u_{r,g}(f)|^2}_{\text{Signalgenerator}}
+
\underbrace{|u_{r,0}(f)|^2 + R_g^2 |i_{r,0}(f)|^2}_{\text{Verstärker}}
\qquad (4.187)
$$

Man kann nun die Effektivwerte der Rauschspannungen $u_{r,g}$ und $u_r$ durch Integration der Rauschspannungsdichten über den für die Anwendung relevanten Frequenzbereich $f_U < f < f_O$ berechnen:

$$
u_{r,geff}^2 = \int_{f_U}^{f_O} |u_{r,g}(f)|^2 \, df
,\qquad
u_{reff}^2 = \int_{f_U}^{f_O} |u_r(f)|^2 \, df
$$

Damit ist das Rauschverhalten eines Verstärkers zwar ausreichend beschrieben, ein Vergleich verschiedener Verstärker auf der Basis der Rauschdichten $|u_{r,0}(f)|^2$ und $|i_{r,0}(f)|^2$ ist aber nicht einfach möglich. Für die Praxis wünscht man sich eine einfache, möglichst dimensionslose Größe, die angibt, wie stark ein Verstärker rauscht; dazu ist eine Normierung mit Hilfe einer Bezugsgröße erforderlich. Als Bezugsgröße wird das Rauschen eines Referenz-Signalgenerators mit der thermischen Rauschspannungsdichte [4.7]

$$
|u_{r,g}(f)|^2 = 4kT_0R_g
\qquad (4.188)
$$

verwendet. Dabei ist $k = 1{,}38 \cdot 10^{-23}\,\mathrm{VAs/K}$ die Boltzmannkonstante und $T_0 = 290\,\mathrm{K}$ die Referenztemperatur. Betreibt man den Verstärker mit diesem Referenz-Signalgenerator

32 Dieser Zusammenhang gilt nur, wenn die Rauschquellen $u_{r,0}$ und $i_{r,0}$ unabhängig (unkorreliert) sind. In der Praxis sind die Rauschquellen zwar nur selten unabhängig, aber die Korrelation ist in den meisten Fällen so gering, dass sie vernachlässigt werden kann.
<!-- page-import:0500:end -->

<!-- page-import:0501:start -->
464 4. Verstärker

a mit Rauschquelle des Signalgenerators und äquivalenten Rauschquellen des Verstärkers

b mit Ersatzrauschquelle

**Abb. 4.156. Betrieb mit einer Signalquelle**

und normiert die Rauschdichten mit der Bezugsgröße, erhält man für den Signalgenerator die relative Rauschdichte

$$
\frac{\left|u_{r,g}(f)\right|^2}{4kT_0R_g}=1
$$

und für die Kombination aus Signalgenerator *und* Verstärker die relative Rauschdichte:

$$
\frac{\left|u_r(f)\right|^2}{4kT_0R_g}=F(f)
$$

Der Faktor $F(f)$ wird *spektrale Rauschzahl* genannt und entspricht dem Verhältnis der Rauschdichte der Ersatzrauschquelle zur Rauschdichte des Referenz-Signalgenerators. Durch Einsetzen von (4.187) und (4.188) erhält man [4.6]:

$$
F(f)=\frac{\left|u_r(f)\right|^2}{4kT_0R_g}
=1+\frac{\left|u_{r,0}(f)\right|^2+R_g^2\left|i_{r,0}(f)\right|^2}{4kT_0R_g}
$$

(4.189)

In Worten bedeutet dies:

*Die Rauschdichte der Ersatzrauschquelle, die das Rauschen des Referenz-Signalgenerators und des Verstärkers repräsentiert, ist um die spektrale Rauschzahl $F(f)$ größer als die Rauschdichte des Referenz-Signalgenerators. Die spektrale Rauschzahl gibt demnach an, um welchen Faktor das im Referenz-Signalgenerator vorhandene Rauschen durch den Verstärker angehoben wird. Damit ist die Rauschdichte am Ausgang des Verstärkers ebenfalls um die spektrale Rauschzahl höher als die Rauschdichte am Ausgang eines rauschfreien Verstärkers mit gleicher Verstärkung. Ein rauschfreier Verstärker hat demzufolge die spektrale Rauschzahl Eins.*

Die spektrale Rauschzahl wird meist in Dezibel angegeben; es gilt:

$$
F(f)\,[\mathrm{dB}]=10\,\mathrm{dB}\cdot \log F(f)
$$

(4.190)

In der Praxis spricht man häufig nur von der *Rauschzahl* $F$ und meint damit die spektrale Rauschzahl in dem Frequenzbereich, der für die aktuelle Anwendung von Interesse ist. Ist die Rauschzahl in diesem Bereich nicht konstant, muss man die mittlere Rauschzahl mit Hilfe der Integralgleichung (4.210) berechnen. Wir schließen uns hier dem allgemeinen
<!-- page-import:0501:end -->

<!-- page-import:0502:start -->
4.2 Eigenschaften und Kenngrößen 465

**Abb. 4.157.** Rauschdichte der Ersatzrauschquelle für den Verstärker aus Abb. 4.155 im Bereich des weißen Rauschens

Sprachgebrauch an und verwenden die Bezeichnung $F(f)$ nur noch in den Fällen, in denen ausdrücklich auf die Frequenzabhängigkeit der Rauschzahl Bezug genommen wird; bei den Rauschdichten gehen wir entsprechend vor.

Für die Rauschspannungsdichte des Referenz-Signalgenerators erhält man die Größengleichung:

$$
|\underline{u}_{r,g}(f)|^2 = 4kT_0R_g = 1{,}6 \cdot 10^{-20}\ \frac{\mathrm{V}^2}{\mathrm{Hz}} \cdot \frac{R_g}{\Omega}
\qquad (4.191)
$$

Der Zusammenhang zwischen den Rauschdichten, dem Innenwiderstand $R_g$ des Referenz-Signalgenerators und der Rauschzahl wird in Abb. 4.157 verdeutlicht; dazu sind die Anteile der Ersatzrauschquelle, i.e. $|\underline{u}_{r,g}|$, $|\underline{u}_{r,0}|$ und $R_g|\underline{i}_{r,0}|$, für den Verstärker aus Abb. 4.155 im Bereich des weißen Rauschens getrennt dargestellt. Die Anteile haben in der doppelt-logarithmischen Darstellung die Steigungen 0, 1/2 und 1:

$$
|\underline{u}_{r,0}| = \mathrm{const.} \sim R_g^0,\qquad
|\underline{u}_{r,g}| \sim R_g^{1/2},\qquad
R_g|\underline{i}_{r,0}| \sim R_g
$$

Die Rauschzahl $F$ entspricht in dieser Darstellung dem Abstand zwischen der Rauschdichte $|\underline{u}_r|$ der Ersatzrauschquelle und der Rauschdichte $|\underline{u}_{r,g}|$ des Referenz-Signalgenerators; sie ist in Abb. 4.158 separat dargestellt. Aufgrund der unterschiedlichen Steigungen gibt es immer einen Punkt, an dem die Rauschzahl minimal wird; er ist in Abb. 4.157 und Abb. 4.158 als optimaler Betriebspunkt eingetragen. Der zugehörige Innenwiderstand wird optimaler Quellenwiderstand genannt und mit $R_{gopt}$ bezeichnet.

Aus den Verläufen in Abb. 4.157 kann man eine grundsätzliche Eigenschaft ableiten:

*Bei Betrieb mit einem Innenwiderstand deutlich unterhalb des optimalen Quellenwiderstands hängt die Rauschdichte der Ersatzrauschquelle in erster Linie von der Rauschspannungsdichte des Verstärkers ab; entsprechend hängt sie bei Betrieb mit einem Innenwiderstand deutlich oberhalb des optimalen Quellenwi-*
<!-- page-import:0502:end -->

<!-- page-import:0503:start -->
466  4. Verstärker

**Abb. 4.158.** Rauschzahl für den Verstärker aus Abb. 4.155 im Bereich des weißen Rauschens

derstands in erster Linie von der Rauschstromdichte des Verstärkers ab. Für die Rauschzahl gilt dies in gleicher Weise.

Es gilt also:

$$
R_g \ll R_{gopt} \Rightarrow |\underline{u}_r| \approx |\underline{u}_{r,0}|\;,\quad
R_g \gg R_{gopt} \Rightarrow |\underline{u}_r| \approx R_g\,|\underline{i}_{r,0}|
$$

Für den Betrieb mit einem Innenwiderstand im Bereich von $R_{gopt}$ kann man keine allgemeine Aussage machen, da hier das Verhältnis der Rauschdichten des Verstärkers zur Rauschdichte des Referenz-Signalgenerators ausschlaggebend ist.

_Rauscharm_ ist ein Verstärker genau dann, wenn es einen Bereich gibt, in dem die vom Verstärker verursachten Anteile $|\underline{u}_{r,0}|$ und $R_g\,|\underline{i}_{r,0}|$ deutlich unterhalb der Rauschdichte $|\underline{u}_{r,g}|$ des Referenz-Signalgenerators liegen. Der Grenzfall ist dadurch gegeben, dass die Rauschdichte des Referenz-Signalgenerators gleich der Summe der Anteile des Verstärkers ist:

$$
|\underline{u}_{r,g}|^2 \stackrel{!}{=} |\underline{u}_{r,0}|^2 + R_g^2\,|\underline{i}_{r,0}|^2
$$

In diesem Fall erhält man die Rauschzahl $F = 2 = 3\,\mathrm{dB}$; deshalb wird häufig $F < 3\,\mathrm{dB}$ als Bedingung für einen rauscharmen Verstärker angegeben.

#### 4.2.4.3 Optimale Rauschzahl und optimaler Quellenwiderstand

Der optimale Betriebspunkt wird durch die _optimale Rauschzahl_ $F_{opt}$ und den _optimalen Quellenwiderstand_ $R_{gopt}$ charakterisiert, siehe Abb. 4.158. Man berechnet diese Größen, indem man mittels der Bedingung

$$
\frac{\partial F}{\partial R_g} = 0
$$

das Minimum für die Rauschzahl bestimmt; dabei erhält zunächst den optimalen Quellenwiderstand

$$
R_{gopt}(f) = \frac{|\underline{u}_{r,0}(f)|}{|\underline{i}_{r,0}(f)|}
\qquad (4.192)
$$
<!-- page-import:0503:end -->

<!-- page-import:0504:start -->
4.2 Eigenschaften und Kenngrößen

467

und daraus, durch Einsetzen in (4.189), die optimale Rauschzahl:

$$
F_{opt}(f) = 1 + \frac{|u_{r,0}(f)|\,|i_{r,0}(f)|}{2kT_0}
$$

(4.193)

Beide Größen sind frequenzabhängig; dadurch ist ein breitbandiger, optimaler Betrieb im allgemeinen nicht möglich $^{33}$.

#### 4.2.4.3.1 Bereich des weißen Rauschens

Im Bereich des weißen Rauschens kann die Frequenzabhängigkeit vernachlässigt werden; dann gilt:

$$
R_{gopt} = \frac{|u_{r,0}|}{|i_{r,0}|}
$$

(4.194)

$$
F_{opt} = 1 + \frac{|u_{r,0}|\,|i_{r,0}|}{2kT_0}
$$

(4.195)

Dabei sind $|u_{r,0}|$ und $|i_{r,0}|$ die Rauschdichten im Bereich des weißen Rauschens und $T_0 = 290\,\mathrm{K}$ ist die Referenztemperatur. Für $F_{opt}$ erhält man die Größengleichung:

$$
F_{opt} = 1 + 0{,}125 \cdot \frac{|u_{r,0}|}{\mathrm{nV}/\sqrt{\mathrm{Hz}}} \cdot \frac{|i_{r,0}|}{\mathrm{pA}/\sqrt{\mathrm{Hz}}}
$$

Für den Verstärker aus Abb. 4.155 gilt $|u_{r,0}| = 1{,}1\,\mathrm{nV}/\sqrt{\mathrm{Hz}}$ und $|i_{r,0}| = 1{,}8\,\mathrm{pA}/\sqrt{\mathrm{Hz}}$; daraus folgt $R_{gopt} = 610\,\Omega$ und $F_{opt} = 1{,}25 = 1\,\mathrm{dB}$.

Im optimalen Betriebspunkt sind die Beiträge der Rauschquellen des Verstärkers gleich groß: $|u_{r,0}| = R_{gopt}|i_{r,0}|$. Dieser Zusammenhang ist in Abb. 4.157 eingetragen: die entsprechenden Geraden schneiden sich im optimalen Betriebspunkt.

#### 4.2.4.3.2 Betrieb mit nichtoptimalem Quellenwiderstand

In der Praxis kann man einen Verstärker meist nicht mit dem optimalen Quellenwiderstand betreiben, da die Signalquelle vorgegeben und $R_g \ne R_{gopt}$ ist; die Rauschzahl kann in diesem Fall mit (4.189) berechnet werden, sofern $|u_{r,0}|$ und $|i_{r,0}|$ bekannt sind. Man kann aber auch von $F_{opt}$ und $R_{gopt}$ ausgehen; aus (4.194) und (4.195) folgt

$$
|u_{r,0}|^2 = 2kT_0R_{gopt}\,(F_{opt} - 1)
,\qquad
|i_{r,0}|^2 = \frac{2kT_0}{R_{gopt}}\,(F_{opt} - 1)
$$

und daraus durch Einsetzen in (4.189):

$$
F = 1 + \frac{1}{2}(F_{opt} - 1)\left(\frac{R_g}{R_{gopt}} + \frac{R_{gopt}}{R_g}\right)
$$

(4.196)

Für $R_g = R_{gopt}$ erhält man definitionsgemäß $F = F_{opt}$; für $R_g \ne R_{gopt}$ gilt $F > F_{opt}$.

Man beachte, dass die Zunahme der Rauschzahl nicht nur vom Verhältnis der Widerstände, sondern auch von der optimalen Rauschzahl abhängt:

33 Bei einem Breitbandverstärker, der auch im Bereich des 1/f- oder des hochfrequenten Rauschens betrieben wird, muss man anstelle der spektralen Rauschzahl die mittlere Rauschzahl optimieren; dazu muss das Minimum der Integralgleichung (4.210) bestimmt werden. Der Verstärker wird dann zwar ebenfalls optimal betrieben, jedoch nicht optimal bei jeder Frequenz.
<!-- page-import:0504:end -->

<!-- page-import:0505:start -->
468 4. Verstärker

**Abb. 4.159.** Verlauf der Rauschzahlen für drei Verstärker mit verschiedenen optimalen Rauschzahlen

*Ein Verstärker mit geringerem Rauschen hat nicht nur eine geringere optimale Rauschzahl, das Minimum wird gleichzeitig breiter. Im Grenzfall eines rauschfreien Verstärkers wird das Minimum unendlich breit, d.h. es gilt $F = 1$ für alle Werte von $R_g$.*

Abbildung 4.159 zeigt dies am Beispiel von drei Verstärkern mit verschiedenen optimalen Rauschzahlen: Verstärker 1 mit $F_{opt} = 1{,}125 = 0{,}5\,\mathrm{dB}$, Verstärker 2 mit $F_{opt} = 2{,}25 = 3{,}5\,\mathrm{dB}$ und Verstärker 3 mit $F_{opt} = 13{,}5 = 11{,}3\,\mathrm{dB}\ ^{34}$.

Für $R_g \ll R_{gopt}$ hängt die Rauschzahl praktisch nur von $|u_{r,0}|$, für $R_g \gg R_{gopt}$ praktisch nur von $|i_{r,0}|$ ab:

$$
F \approx
\begin{cases}
\frac{|u_{r,0}|^2}{4kT_0R_g} = \frac{1}{2}(F_{opt}-1)\frac{R_{gopt}}{R_g} & \text{für } R_g \ll R_{gopt} \\
\frac{R_g|i_{r,0}|^2}{4kT_0} = \frac{1}{2}(F_{opt}-1)\frac{R_g}{R_{gopt}} & \text{für } R_g \gg R_{gopt}
\end{cases}
$$

Auf diesen Zusammenhang haben wir bereits in Form eines Merksatzes hingewiesen. In Abb. 4.159 sind die entsprechenden Asymptoten eingetragen.

#### 4.2.4.3.3 Hinweise zur Auswahl oder Dimensionierung von Verstärkern

Die Größen $F_{opt}$ und $R_{gopt}$ spielen eine wichtige Rolle, wenn man einen gegebenen Verstärker optimal betreiben will. Dagegen muss ein Vergleich verschiedener Verstärker immer auf der Basis der Rauschzahl $F$ für den vorgegebenen Quellenwiderstand $R_g$ erfolgen: optimal ist der Verstärker, der bei Betrieb mit dem vorgegebenen Quellenwiderstand die geringste Rauschzahl aufweist. Diese *Betriebsrauschzahl* wird mit (4.189) und (4.191) berechnet:

34 Für den Verstärker 1 wurde $|u_{r,0}| = 1\,\mathrm{nV}/\sqrt{\mathrm{Hz}}$ und $|i_{r,0}| = 1\,\mathrm{pA}/\sqrt{\mathrm{Hz}}$ angenommen. Bei den Verstärkern 2 und 3 sind die Werte um die Faktoren $\sqrt{10}$ bzw. $10$ größer.
<!-- page-import:0505:end -->

<!-- page-import:0506:start -->
469

## 4.2 Eigenschaften und Kenngrößen

Abb. 4.160. Ersatzschaltbild zur Berechnung der Rauschzahl einer Reihenschaltung von zwei Verstärkern

$$
F = 1 + \frac{|u_{r,0}(f)|^2 + R_g^2 |i_{r,0}(f)|^2}{4kT_0R_g}
= 1 + \frac{|u_{r,0}(f)|^2 + R_g^2 |i_{r,0}(f)|^2}{1{,}6 \cdot 10^{-20}\ \mathrm{V}^2/\Omega \cdot R_g}
\qquad (4.197)
$$

Die Größen $F_{opt}$ und $R_{gopt}$ sind hier nur relevant, weil man sie gemäß (4.196) ebenfalls zur Berechnung der Betriebsrauschzahl verwenden kann. Man wählt demnach nicht den Verstärker mit der geringsten Rauschzahl $F_{opt}$ oder den Verstärker, dessen optimaler Quellenwiderstand $R_{gopt}$ am besten mit dem vorgegebenen Quellenwiderstand $R_g$ übereinstimmt; beides führt im allgemeinen nicht auf ein optimales Ergebnis. Entsprechend ist bei der Dimensionierung eines integrierten Verstärkers die Betriebsrauschzahl mit dem vorgegebenen Quellenwiderstand als Optimierungskriterium zu verwenden; eine Optimierung von $F_{opt}$ oder $R_{gopt}$ als Einzelgröße ist sinnlos. Es gibt nur einen Ausnahmefall: wenn man eine Impedanztransformation von $R_g$ auf $R_{gopt}$ mit Hilfe eines Übertragers oder eines Resonanztransformators vornimmt, wird $F = F_{opt}$ erzielt; dann kann man den Verstärker mit der geringsten Rauschzahl $F_{opt}$ wählen, solange das benötigte Transformationsverhältnis $R_g/R_{gopt}$ praktisch realisierbar ist.

#### 4.2.4.4 Rauschzahl einer Reihenschaltung von Verstärkern

Man kann die Rauschzahl einer Reihenschaltung von Verstärkern aus den Rauschzahlen der einzelnen Verstärker berechnen. Wir berechnen dazu die Rauschzahl für die in Abb. 4.160 gezeigte Reihenschaltung von zwei Verstärkern und verallgemeinern anschließend. In Abb. 4.160 wird für die Verstärker das Ersatzschaltbild eines rückwirkungsfreien Verstärkers mit den äquivalenten Rauschquellen $u_{r,0}$ und $i_{r,0}$ verwendet; dieses Ersatzschaltbild gilt auch für Verstärker mit Rückwirkung, wenn man anstelle der Eingangswiderstände die Betriebseingangswiderstände einsetzt, siehe Abschnitt 4.2.2.

##### 4.2.4.4.1 Berechnung der Rauschzahl

Da die Rauschdichten der Ersatzrauschquellen auf die Quellenspannungen und nicht auf die Eingangsspannungen der Verstärker bezogen werden, können wir hier nicht mit den Betriebsverstärkungen $A_{B1} = u_2/u_g$ und $A_{B2} = u_a/u_2$ rechnen, sondern müssen die Rausch-Betriebsverstärkungen

$$
A_{B,r1} = \frac{A_1u_1}{u_g} = \frac{r_{e1}}{R_g + r_{e1}}\, A_1
$$

$$
A_{B,r2} = \frac{A_2u_2}{A_1u_1} = \frac{r_{e2}}{r_{a1} + r_{e2}}\, A_2
$$

und den Lastfaktor
<!-- page-import:0506:end -->

<!-- page-import:0507:start -->
470  4. Verstärker

$$
k_L = \frac{R_L}{r_{a2} + R_L}
$$

verwenden; es gilt:

$$
A_B = \frac{u_a}{u_g} = A_{B,r1}\, A_{B,r2}\, k_L
$$

Die Rausch-Betriebsverstärkungen setzen sich jeweils aus dem Spannungsteilerfaktor am Eingang und der Leerlaufverstärkung zusammen und geben die Verstärkung von einer Quellenspannung zur nächsten an.

Zunächst werden alle Rauschquellen mit Hilfe der jeweiligen Verstärkung auf den Ausgang der Reihenschaltung umgerechnet; ohne Signalspannung $(u_g = 0)$ gilt:

$$
u_a = (u_{r,g} + u_{r,01} + R_g i_{r,01})\, A_{B,r1}\, A_{B,r2}\, k_L + (u_{r,02} + r_{a1} i_{r,02})\, A_{B,r2}\, k_L
$$

Die Spannung der Ersatzrauschquelle für die Reihenschaltung erhält man durch Umrechnen auf den Signalgenerator:

$$
u_r = \frac{u_a}{A_B} = u_{r,g} + u_{r,01} + R_g i_{r,01} + \frac{u_{r,02} + r_{a1} i_{r,02}}{A_{B,r1}}
\qquad (4.198)
$$

Da alle Rauschquellen unabhängig sind, gilt für die Rauschdichte der Ersatzrauschquelle:

$$
|u_r|^2 = |u_{r,g}|^2 + |u_{r,01}|^2 + R_g^2 |i_{r,01}|^2 + \frac{|u_{r,02}|^2 + r_{a1}^2 |i_{r,02}|^2}{A_{B,r1}^2}
$$

Daraus folgt für die Rauschzahl der Reihenschaltung:

$$
F = \frac{|u_r|^2}{|u_{r,g}|^2}
= 1 + \frac{|u_{r,01}|^2 + R_g^2 |i_{r,01}|^2}{|u_{r,g}|^2}
+ \frac{|u_{r,02}|^2 + r_{a1}^2 |i_{r,02}|^2}{A_{B,r1}^2 |u_{r,g}|^2}
\qquad (4.199)
$$

Für die Rauschzahl des ersten Verstärkers gilt:

$$
F_1 = 1 + \frac{|u_{r,01}|^2 + R_g^2 |i_{r,01}|^2}{|u_{r,g}|^2}
= 1 + \frac{|u_{r,01}|^2 + R_g^2 |i_{r,01}|^2}{4kT_0 R_g}
$$

Beim zweiten Verstärker tritt $r_{a1}$ an die Stelle von $R_g$. Da bei der Berechnung der Rauschzahl ein idealer Signalgenerator mit thermischem Rauschen des Innenwiderstands unterstellt wird, muss man hier als Bezugsgröße das thermische Rauschen

$$
|u_{r,a1}|^2 = 4kT_0 r_{a1}
$$

verwenden. Das bedeutet nicht, dass der Widerstand $r_{a1}$ in Abb. 4.160 thermisch rauscht, sondern nur, dass die Rauschzahl des zweiten Verstärkers für einen Signalgenerator-Innenwiderstand ermittelt wird, der den Wert $r_{a1}$ besitzt. Es gilt also:

$$
F_2 = 1 + \frac{|u_{r,02}|^2 + r_{a1}^2 |i_{r,02}|^2}{|u_{r,a1}|^2}
= 1 + \frac{|u_{r,02}|^2 + r_{a1}^2 |i_{r,02}|^2}{4kT_0 r_{a1}}
$$

Durch Einsetzen der Rauschzahlen $F_1$ und $F_2$ in (4.199) erhält man

$$
F = F_1 + \frac{F_2 - 1}{A_{B,r1}^2}\,\frac{r_{a1}}{R_g}
$$

und daraus durch Verallgemeinerung die Rauschzahl einer Reihenschaltung von $n$ Verstärkern:
<!-- page-import:0507:end -->

<!-- page-import:0508:start -->
4.2 Eigenschaften und Kenngrößen

471

*Rauschzahl einer Reihenschaltung von n Verstärkern*

$$
F = F_1 + \frac{F_2 - 1}{A_{B,r1}^2}\frac{r_{a1}}{R_g} + \frac{F_3 - 1}{A_{B,r1}^2 A_{B,r2}^2}\frac{r_{a2}}{R_g} + \ldots
$$

$$
= F_1 + \sum_{i=2}^{n} \left( \frac{F_{(i)} - 1}{\prod_{k=1}^{i-1} A_{B,r(k)}^2}\frac{r_{a(i-1)}}{R_g} \right)
\qquad\qquad (4.200)
$$

$$
A_{B,r(k)} = \frac{r_{e(k)}}{r_{a(k-1)} + r_{e(k)}} A_{(k)}
\qquad \text{mit } r_{a0} = R_g
\qquad\qquad (4.201)
$$

Die Rauschzahl des ersten Verstärkers geht unmittelbar in die Rauschzahl der Reihenschaltung ein; bei allen nachfolgenden Verstärkern geht die Zusatzrauschzahl

$$
F_Z = F - 1
\qquad\qquad (4.202)
$$

ein, bewertet mit dem Kehrwert des Quadrats der vorausgehenden Betriebs-Rauschverstärkungen und dem Verhältnis der Quellenwiderstände. Eine minimale Rauschzahl erhält man deshalb in erster Linie durch die Optimierung des ersten Verstärkers:

- Minimierung der Rauschzahl $F_1$;
- Maximierung der Rausch-Betriebsverstärkung $A_{B,r1}$ durch Maximierung von $A_1$ und $r_{e1}$;
- Minimierung des Ausgangswiderstands $r_{a1}$.

Der letzte Punkt ist vor allem bei kleinen Innenwiderständen $R_g$ von Bedeutung, da der Faktor $1/A_{B,r1}^2$ durch den Faktor $r_{a1}/R_g$ überkompensiert werden kann; in diesem Fall dominiert die Rauschzahl $F_2$. Wenn auch der zweite Verstärker eine hohe Rausch-Betriebsverstärkung besitzt, kann man die Beiträge der nachfolgenden Verstärker vernachlässigen.

#### 4.2.4.4.2 Darstellung mit Hilfe der verfügbaren Leistungsverstärkung

In der Hochfrequenztechnik wird anstelle der Verstärkung die verfügbare Leistungsverstärkung (*available power gain*) $G_A$ angegeben; sie gibt das Verhältnis der verfügbaren Leistung (*available power*) am Ausgang des Verstärkers zur verfügbaren Leistung des Signalgenerators an. Die verfügbare Leistung des Signalgenerators beträgt $^{35}$:

$$
P_{A,g} = \frac{u_g^2}{4R_g}
$$

Sie setzt sich aus der Quellenspannung und dem Innenwiderstand zusammen. Entsprechend erhält man am Ausgang eines Verstärkers mit der Verstärkung $A$:

$$
P_{A,V} = \frac{(Au_e)^2}{4r_a} = \left(\frac{r_e}{R_g + r_e}\right)^2 A^2 \frac{u_g^2}{4r_a}
$$

35 Wir verwenden hier Effektivwerte, d.h. es gilt $P = u^2/R$; damit ist keine Unterscheidung zwischen Gleich- und Wechselspannungen nötig.
<!-- page-import:0508:end -->

<!-- page-import:0509:start -->
472  4. Verstärker

Daraus folgt

$$
G_A=\frac{P_{A,v}}{P_{A,g}}=\left(\frac{r_e}{R_g+r_e}\right)^2 A^2 \frac{R_g}{r_a}=A_{B,r}^2 \frac{R_g}{r_a}
$$

(4.203)

und, durch Einsetzen in (4.200):

$$
F=F_1+\frac{F_2-1}{G_{A1}}+\frac{F_3-1}{G_{A1}G_{A2}}+\ldots
=F_1+\sum_{i=2}^{n}\left(\frac{F_{(i)}-1}{\prod_{k=1}^{i-1} G_{A(k)}}\right)
$$

(4.204)

Man beachte dabei den Zusammenhang:

$$
G_{A1}G_{A2}\cdots G_{A(i-1)}
=A_{B,r1}^2 \frac{R_g}{r_{a1}} A_{B,r2}^2 \frac{r_{a1}}{r_{a2}} \cdots A_{B,r(i-1)}^2 \frac{r_{a(i-2)}}{r_{a(i-1)}}
$$

$$
= A_{B,r1}^2 A_{B,r2}^2 \cdots A_{B,r(i-1)}^2 \frac{R_g}{r_{a(i-1)}}
$$

Die Gleichung (4.204) wird oft in der Form

$$
F=F_1+\frac{F_2-1}{G_1}+\frac{F_3-1}{G_1G_2}+\cdots
$$

mit nicht näher spezifizierten Leistungsverstärkungen $G_{(i)}$ angegeben. Da in der Hochfrequenztechnik eine ganze Reihe unterschiedlicher Leistungsverstärkungen verwendet werden, weisen wir ausdrücklich darauf hin, dass im allgemeinen Fall die verfügbare Leistungsverstärkung $G_A$ verwendet werden muss; nur im allseitig angepassten Fall sind alle Leistungsverstärkungen gleich und man kann von der Leistungsverstärkung schlechthin sprechen. Wir gehen darauf im Abschnitt 24.4.1 noch näher ein.

#### 4.2.4.4.3 Reihenfolge für minimale Rauschzahl bei angepassten Verstärkern

Bei einer Reihenschaltung von allseitig angepassten Verstärkern mit gleichem Wellenwiderstand kann man die Reihenfolge ohne Einfluss auf die Verstärkung und die Rauschzahlen der einzelnen Verstärker ändern. Zur Ableitung eines Kriteriums für die Reihenfolge mit minimaler Rauschzahl betrachten wir zwei Verstärker mit den verfügbaren Leistungsverstärkungen $G_{A1}$ und $G_{A2}$ und den Rauschzahlen $F_1$ und $F_2$; die Rauschzahlen der beiden möglichen Reihenschaltungen sind demzufolge:

$$
F_{12}=F_1+\frac{F_2-1}{G_{A1}}, \qquad
F_{21}=F_2+\frac{F_1-1}{G_{A2}}
$$

Aus der Bedingung $F_{12}<F_{21}$ folgt durch Trennung der Größen:

$$
\frac{F_1-1}{1-\frac{1}{G_{A1}}}
<
\frac{F_2-1}{1-\frac{1}{G_{A2}}}
$$

Der Faktor

$$
M=\frac{F-1}{1-\frac{1}{G_A}}
$$

(4.205)
<!-- page-import:0509:end -->

<!-- page-import:0510:start -->
473

## 4.2 Eigenschaften und Kenngrößen

wird *Rauschmaß (noise measure)* genannt [4.8]. Demzufolge muss man die Verstärker entsprechend den Rauschmaßen anordnen: den Verstärker mit dem geringsten Rauschmaß am Anfang, den mit dem größten Rauschmaß am Ende.

#### 4.2.4.4 Äquivalente Rauschquellen

Mit Hilfe der Rauschspannung der Ersatzrauschquelle kann man die äquivalenten Rauschquellen der Reihenschaltung aus Abb. 4.160 ermitteln; aus (4.198) erhält man durch Einsetzen von $A_{B,r1}$ und Gruppieren der Terme mit und ohne $R_g$:

$$
u_r = u_{r,g} + u_{r,01} + \underbrace{\frac{u_{r,02} + r_{a1} i_{r,02}}{A_1}}_{u_{r,0}} + R_g \left( i_{r,01} + \underbrace{\frac{u_{r,02} + r_{a1} i_{r,02}}{A_1 r_{e1}}}_{i_{r,0}} \right)
$$

Die äquivalenten Rauschquellen sind abhängig, da die Rauschquellen des zweiten Verstärkers in die Rauschspannungsquelle $u_{r,0}$ und in die Rauschstromquelle $i_{r,0}$ eingehen. Da das Rechnen mit abhängigen Rauschquellen aufwendig ist, werden wir diese Darstellung nicht weiter verwenden, verweisen aber auf einen wichtigen Zusammenhang: die äquivalenten Rauschquellen eines mehrstufigen Verstärkers, der als Reihenschaltung von Transistor-Grundschaltungen aufgefasst wird, sind nur dann näherungsweise unabhängig, wenn der Beitrag der zweiten und jeder weiteren Stufe bei mindestens einer der beiden äquivalenten Rauschquellen vernachlässigt werden kann.

#### 4.2.4.5 Signal-Rausch-Abstand und mittlere Rauschzahl

Mit Hilfe der *spektralen Rauschzahl* $F(f)$ kann man die *mittlere Rauschzahl* $F$ (*noise figure*) berechnen. Sie gibt den Verlust an *Signal-Rausch-Abstand* SNR (*signal-to-noise ratio*) an, der durch den Verstärker in einem anwendungsspezifischen Frequenzintervall $f_U < f < f_O$ verursacht wird, wenn der Signalgenerator thermisches Rauschen mit einer Referenztemperatur $T_0 = 290\,\mathrm{K}$ aufweist. Die mittlere Rauschzahl wird gelegentlich mit $\overline{F}$ bezeichnet, um Verwechslungen mit der spektralen Rauschzahl zu vermeiden. Wir bezeichnen die spektrale Rauschzahl mit $F(f)$ und die mittlere Rauschzahl mit $F$.

##### 4.2.4.5.1 Signal-Rausch-Abstand

Der *Signal-Rausch-Abstand* SNR entspricht dem Verhältnis der Leistungen des Nutzsignals und des Rauschens:

$$
SNR = \frac{P_{Nutz}}{P_r}
$$

Dabei ist $P_r$ die Rauschleistung im Frequenzintervall $f_U < f < f_O$. Da die Leistung eines Signals proportional zum Quadrat des Effektivwerts ist, gilt für den Signal-Rausch-Abstand des Signalgenerators:

$$
SNR_g = \frac{u_{geff}^2}{u_{r,geff}^2} = \frac{u_{geff}^2}{\int_{f_U}^{f_O} |u_{r,g}(f)|^2 \, df}
$$

Dabei ist $u_{geff}$ der Effektivwert des Nutzsignals und $u_{r,geff}$ der Effektivwert des Rauschsignals. Folgt auf den Signalgenerator ein Verstärker, wird am Eingang des Verstärkers zusätzlich zur Rauschspannungsdichte $|u_{r,g}(f)|^2$ des Signalgenerators die Rauschspannungsdichte
<!-- page-import:0510:end -->

<!-- page-import:0511:start -->
474 4. Verstärker

$$|u_{r,V}(f)|^2 = |u_{r,0}(f)|^2 + R_g^2\,|i_{r,0}(f)|^2$$

des Verstärkers wirksam:

$$|u_r(f)|^2 = |u_{r,g}(f)|^2 + |u_{r,V}(f)|^2$$

Dadurch nimmt der Signal-Rausch-Abstand auf den Wert

$$SNR_e = \frac{u_{g\,eff}^2}{\int_{f_U}^{f_O} |u_r(f)|^2\,df} = \frac{u_{g\,eff}^2}{\int_{f_U}^{f_O}\left(|u_{r,g}(f)|^2 + |u_{r,V}(f)|^2\right)\,df}$$

ab. Der Index $e$ deutet darauf hin, dass wir den Signal-Rausch-Abstand aus den äquivalenten Rauschdichten am Eingang des Verstärkers berechnet haben. Da der eigentliche Verstärker in diesem Fall nach Abb. 4.154 rauschfrei ist und Nutzsignal und Rauschen in gleicher Weise verstärkt, gilt dieser Signal-Rausch-Abstand auch für den Ausgang des Verstärkers, solange dort keine weiteren Rauschquellen wirksam werden, die nicht zum Verstärker gehören. Der Verlust an Signal-Rausch-Abstand, kurz *SNR-Verlust*, durch den Verstärker beträgt:

$$\frac{SNR_g}{SNR_e} = \frac{\int_{f_U}^{f_O} |u_r(f)|^2\,df}{\int_{f_U}^{f_O} |u_{r,g}(f)|^2\,df} = 1 + \frac{\int_{f_U}^{f_O} |u_{r,V}(f)|^2\,df}{\int_{f_U}^{f_O} |u_{r,g}(f)|^2\,df}$$

Er hängt vom Verhältnis der Rauschdichten der Signalquelle und des Verstärkers ab. Der SNR-Verlust wird häufig fälschlicherweise als Rauschzahl bezeichnet; wir gehen auf diesen Fehler und seine Konsequenzen im folgenden noch näher ein.

Für den *Referenz-Signalgenerator*, der zur Bestimmung der Rauschzahl verwendet wird, erhält man mit (4.188) auf Seite 463

$$u_{r,geff}^2 = \int_{f_U}^{f_O} 4kT_0R_g\,df = 4kT_0R_g\,(f_O - f_U)$$

(4.207)

und:

$$SNR_{g,ref} = \frac{u_{g\,eff}^2}{4kT_0R_g\,(f_O - f_U)}$$

(4.208)

Der Index $ref$ weist auf den Referenz-Signalgenerator hin. Durch den Verstärker wird die Rauschdichte des Referenz-Signalgenerators um die spektrale Rauschzahl $F(f)$ angehoben; dadurch nimmt der auf den Eingang des Verstärkers bezogene Effektivwert des Rauschens auf

$$u_{reff}^2 = \int_{f_U}^{f_O} 4kT_0R_g\,F(f)\,df = 4kT_0R_g \int_{f_U}^{f_O} F(f)\,df$$

zu und der Signal-Rausch-Abstand auf

$$SNR_{e,ref} = \frac{u_{g\,eff}^2}{u_{reff}^2} = \frac{u_{g\,eff}^2}{4kT_0R_g \int_{f_U}^{f_O} F(f)\,df}$$

(4.209)

ab.
<!-- page-import:0511:end -->

<!-- page-import:0512:start -->
475

# 4.2 Eigenschaften und Kenngrößen

#### 4.2.4.5.2 Mittlere Rauschzahl

Die mittlere Rauschzahl $F$ entspricht dem Verhältnis der Signal-Rausch-Abstände (4.208) und (4.209) [2.9]:

$$
F \;=\; \frac{SNR_{g,ref}}{SNR_{e,ref}} \;=\; \frac{1}{f_O - f_U} \int_{f_U}^{f_O} F(f)\,df
$$

(4.210)

Man erhält sie durch Mittelung über die spektrale Rauschzahl $F(f)$. Ist $F(f)$ im betrachteten Frequenzintervall $f_U < f < f_O$ konstant, gilt $F = F(f)$ und man spricht nur von der Rauschzahl $F$.

Die mittlere Rauschzahl wird meist in Dezibel angegeben:

$$
F\;[\mathrm{dB}] \;=\; 10\,\mathrm{dB}\cdot \log F
$$

Mit

$$
SNR_{e,ref}\;[\mathrm{dB}] \;=\; 10\,\mathrm{dB}\cdot \log SNR_{e,ref}
$$

$$
SNR_{g,ref}\;[\mathrm{dB}] \;=\; 10\,\mathrm{dB}\cdot \log SNR_{g,ref}
$$

gilt:

$$
F\;[\mathrm{dB}] \;=\; SNR_{g,ref}\;[\mathrm{dB}] - SNR_{e,ref}\;[\mathrm{dB}]
$$

#### 4.2.4.5.3 Bezug auf den Referenz-Signalgenerator

Wir betonen hier noch einmal ausdrücklich, dass sich die spektrale und die mittlere Rauschzahl auf einen Referenz-Signalgenerator mit thermischem Rauschen bei der Referenztemperatur $T_0 = 290\,\mathrm{K}$ beziehen. Nur für diesen Fall entspricht die mittlere Rauschzahl dem Verlust an SNR. Man kann zwar eine verallgemeinerte Rauschzahl definieren, die dem Verhältnis allgemeiner Signal-Rausch-Abstände entspricht, diese Rauschzahl entspricht aber nicht der in der Schaltungstechnik üblichen Rauschzahl, die z.B. in Datenblättern angegeben ist.

In der Literatur wird die Rauschzahl häufig mit der Definition $F = SNR_g/SNR_e$ eingeführt; auch wir haben in früheren Auflagen diese Definition verwendet. Diese Definition ist falsch. Im deutschsprachigen Raum kursiert der Vorschlag, diese falsche Definition aufgrund ihrer weiten Verbreitung beizubehalten und die korrekte Rauschzahl als Standard-Rauschzahl zu bezeichnen. Diesem Vorschlag schließen wir uns ausdrücklich nicht an.

#### 4.2.4.5.4 Empfohlene Vorgehensweise bei Rausch-Berechnungen

Wir empfehlen dringend, bei Rausch-Berechnungen mit den Rauschleistungen – dargestellt durch die Effektivwerte – oder den Rauschdichten zu rechnen. Das ist vor allem dann wichtig, wenn man es mit Signalquellen zu tun hat, die sich deutlich von dem der Rauschzahl zugrunde liegenden Referenz-Signalgenerator unterscheiden. In den meisten Fällen besteht der Unterschied darin, dass die Signalquelle ein wesentlich stärkeres Rauschen aufweist als ein Referenz-Signalgenerator mit gleichem Innenwiderstand $R_g$. Es gibt aber auch Fälle, in denen die Signalquelle weniger Rauschen erzeugt als der entsprechende Referenz-Signalgenerator. Wir werden dies am Ende dieses Abschnitts anhand von zwei Beispielen näher erläutern.

Die sichere Methode zur Berechnung der Signal-Rausch-Abstände besteht darin, die Effektivwerte des Rauschens der Signalquelle und des Verstärkers zu bestimmen und daraus das SNR der Signalquelle ($SNR_g$) und das SNR von Signalquelle und Verstärker ($SNR_e$) zu berechnen; aus der Differenz erhält man dann den SNR-Verlust.
<!-- page-import:0512:end -->

<!-- page-import:0513:start -->
476 4. Verstärker

**Berechnung der Effektivwerte**

Den Effektivwert $u_{r,geff}$ der Rauschspannung der Signalquelle kann man auf zwei Arten berechnen:

- Wenn die Rauschspannungsdichte $|u_{r,g}(f)|^2$ oder die Rauschstromdichte $|i_{r,g}(f)|^2$ der Signalquelle bekannt ist, erhält man den Effektivwert durch Integration $^{36}$:

$$
u_{r,geff}^2=\int_{f_U}^{f_O}|u_{r,g}(f)|^2\,df=R_g^2\int_{f_U}^{f_O}|i_{r,g}(f)|^2\,df
$$

Ist die jeweilige Rauschdichte konstant, gilt:

$$
u_{r,geff}^2=|u_{r,g}|^2\,(f_O-f_U)=R_g^2\,|i_{r,g}|^2\,(f_O-f_U)
$$

Für eine Signalquelle mit thermischem Rauschen erhält man:

$$
u_{r,geff}^2=4kT_gR_g\,(f_O-f_U)
$$

(4.211)

Dabei ist $T_g$ die *Rauschtemperatur* der Signalquelle, die nicht unbedingt mit der physikalischen Temperatur der Signalquelle übereinstimmen muss, sondern nur ein Maß für die Intensität des Rauschens ist. Wir gehen darauf im folgenden noch näher ein.

- Wenn der Effektivwert $u_{geff}$ des Nutzsignals und das SNR der Signalquelle bekannt sind, erhält man:

$$
u_{r,geff}^2=\frac{u_{geff}^2}{SNR_g}
$$

(4.212)

Den Effektivwert $u_{r,Veff}$ der Rauschspannung des Verstärkers kann man ebenfalls auf zwei Arten berechnen:

- Wenn die äquivalenten Rauschdichten $|u_{r,0}(f)|^2$ und $|i_{r,0}(f)|^2$ gegeben sind, gilt bei Betrieb mit einer Signalquelle mit dem Innenwiderstand $R_g$:

$$
u_{r,Veff}^2=\int_{f_U}^{f_O}|u_{r,V}(f)|^2\,df=\int_{f_U}^{f_O}\left(|u_{r,0}(f)|^2+R_g^2|i_{r,0}(f)|^2\right)\,df
$$

Bei konstanten Rauschdichten erhält man:

$$
u_{r,Veff}^2=\left(|u_{r,0}|^2+R_g^2|i_{r,0}|^2\right)\,(f_O-f_U)
$$

(4.213)

- Wenn die spektrale Rauschzahl $F(f)$ für den Betrieb mit einem Referenz-Signalgenerator mit dem Innenwiderstand $R_g$ gegeben ist, gilt

$$
u_{r,Veff}^2=4kT_0R_g\int_{f_U}^{f_O}(F(f)-1)\,df=4kT_0R_g\int_{f_U}^{f_O}F_Z(f)\,df
$$

mit der Referenztemperatur $T_0=290\,\mathrm{K}$ und der *Zusatzrauschzahl*:

$$
F_Z(f)=F(f)-1
$$

---

$^{36}$ Wenn die Signalquelle im Frequenzbereich $f_U<f<f_O$ keinen konstanten, frequenzunabhängigen Innenwiderstand besitzt, muss man anstelle von $R_g$ den Realteil der Quellenimpedanz $Z_g(f)$ einsetzen. Da dieser Realteil von der Frequenz abhängt, kann man ihn nicht vor die Integrale ziehen; dadurch werden die Berechnungen wesentlich aufwendiger.
<!-- page-import:0513:end -->

<!-- page-import:0514:start -->
4.2 Eigenschaften und Kenngrößen

477

Da die Rauschzahl das Rauschen des Signalgenerators und des Verstärkers beinhaltet, muss der Anteil des Signalgenerators abgezogen werden; daher der Faktor $(F(f)-1)$. Ist die spektrale Rauschzahl konstant, erhält man:

$$u_{r,V\,eff}^2 = 4kT_0R_g\,(F-1)\,(f_O-f_U)=4kT_0R_g\,F_Z\,(f_O-f_U)$$

(4.214)

**Berechnung der Signal-Geräusch-Abstände**

Mit dem Effektivwert $u_{g\,eff}$ des Nutzsignals erhält man die Signal-Rausch-Abstände

$$SNR_g=\frac{u_{g\,eff}^2}{u_{r,g\,eff}^2}, \quad SNR_e=\frac{u_{g\,eff}^2}{u_{r,g\,eff}^2+u_{r,V\,eff}^2}$$

und den SNR-Verlust:

$$\frac{SNR_g}{SNR_e}=1+\frac{u_{r,V\,eff}^2}{u_{r,g\,eff}^2}$$

(4.215)

Setzt man (4.211) und (4.213) ein, folgt:

$$\frac{SNR_g}{SNR_e}=1+\frac{|u_{r,0}|^2+R_g^2\,|i_{r,0}|^2}{4kT_gR_g}$$

Diese Gleichung entspricht formal der Gleichung für die Rauschzahl, siehe (4.189) auf Seite 464 und (4.197) auf Seite 469; deshalb ergänzen viele Autoren diese Gleichung auf der linken Seite durch „$F=$“. Der Unterschied besteht darin, dass bei der Rauschzahl ein Referenz-Signalgenerator mit der Referenztemperatur $T_0=290\,\mathrm{K}$ als Bezugsgröße dient, während hier eine Signalquelle mit der Rauschtemperatur $T_g$ vorliegt. In der Praxis gilt fast immer $T_g \ne T_0$. Bei den meisten praktischen Signalquellen gilt $T_g \gg T_0$; es gibt aber auch Signalquellen mit $T_g < T_0$. Die Verwechslung von $T_g$ und $T_0$ ist die Ursache für fast alle Fehler, die bei Rauschberechnungen gemacht werden.

*Beispiel 1:* Der Rundfunkempfänger einer HiFi-Anlage hat typischerweise einen Ausgangswiderstand von $10\,\mathrm{k}\Omega$ und liefert bei Vollaussteuerung ein Signal mit einem Effektivwert von etwa $150\,\mathrm{mV}$. Dem Datenblatt entnimmt man, dass das SNR am Ausgang des Empfängers bei sehr guten Empfangsbedingungen $60\,\mathrm{dB}$ beträgt. Die Bandbreite des Signals beträgt $15\,\mathrm{kHz}$. Wir verwenden diesen Empfänger als Signalquelle mit den Parametern $R_g=10\,\mathrm{k}\Omega$, $u_{g\,eff}=150\,\mathrm{mV}$, $f_O-f_U=15\,\mathrm{kHz}$ und $SNR_g=60\,\mathrm{dB}$.

Wir geben das Signal auf einen Operationsverstärker, der als Spannungsfolger betrieben wird und die äquivalenten Rauschdichten $|u_{r,0}|=50\,\mathrm{nV}/\sqrt{\mathrm{Hz}}$ und $|i_{r,0}|=5\,\mathrm{pA}/\sqrt{\mathrm{Hz}}$ aufweist. Aus (4.194) und (4.195) auf Seite 467 erhält man $R_{gopt}=10\,\mathrm{k}\Omega$ und $F_{opt}=32{,}25 \approx 15\,\mathrm{dB}$. Der Operationsverstärker wird demnach mit dem optimalen Quellenwiderstand und der optimalen Rauschzahl betrieben.

Wir fragen nach dem SNR bei Betrieb mit dem Operationsverstärker. Nimmt man nun fälschlicherweise an, dass die Rauschzahl ganz generell den Verlust an SNR wiedergibt, lautet die Antwort: $60\,\mathrm{dB}-15\,\mathrm{dB}=45\,\mathrm{dB}$. Dieses Ergebnis ist jedoch falsch, da der Rundfunk-Empfänger kein Referenz-Signalgenerator ist. Ein Referenz-Signalgenerator mit $R_g=10\,\mathrm{k}\Omega$ erzeugt nach (4.207) ein Rauschsignal mit einem Effektivwert-Quadrat

$$u_{r,g\,eff}^2=4kT_0R_g\,(f_O-f_U)=2{,}4\cdot 10^{-12}\,\mathrm{V}^2$$

bzw. dem Effektivwert $u_{r,g\,eff}=1{,}55\,\mathrm{\mu V}$. Dagegen erhält man für den Rundfunkempfänger aus (4.212) mit $u_{g\,eff}=150\,\mathrm{mV}$ und $SNR_g=60\,\mathrm{dB}$ den Effektivwert $u_{r,g\,eff}=150\,\mathrm{\mu V}$.
<!-- page-import:0514:end -->

<!-- page-import:0515:start -->
478  4. Verstärker

Der Effektivwert des Rauschens am Ausgang des Rundfunkempfängers ist demnach etwa um den Faktor 100 größer als bei einem Referenz-Signalgenerator. Setzt man diesen Effektivwert in (4.211) ein und löst nach $T_g$ auf, erhält man die Rauschtemperatur des Rundfunkempfängers: $T_g \approx 2{,}7 \cdot 10^6\,\mathrm{K}$.

Zur korrekten Berechnung des SNR berechnen wir das Effektivwert-Quadrat des Rauschens des Operationsverstärkers mit Hilfe von (4.213):

$$u_{r,Veff}^2 = 75 \cdot 10^{-12}\,\mathrm{V}^2$$

Der Operationsverstärker erzeugt demnach ein Rauschsignal mit einem Effektivwert von $8{,}7\,\mu\mathrm{V}$. Daraus folgt für den Effektivwert des Rauschens beider Komponenten:

$$u_{r,eff} = \sqrt{150^2 + 75}\,\mu\mathrm{V} = 150{,}25\,\mu\mathrm{V}$$

Man erkennt, dass der Effektivwert des Rauschens durch das Hinzufügen des Operationsverstärkers praktisch nicht zunimmt; folglich nimmt auch das SNR nicht ab und es gilt $SNR_e = SNR_g$.

*Beispiel 2:* Der Sensor eines Fernerkundungsteleskops wird mit flüssigem Stickstoff auf $T = 77\,\mathrm{K}$ gekühlt. Der Sensor weist nur thermisches Rauschen auf und liefert in einem vorgegebenen Anwendungsfall ein Signal mit $SNR_g = 5\,\mathrm{dB}$. Zur Verstärkung des Signals wird ein nicht gekühlter Verstärker verwendet, dessen optimaler Quellenwiderstand dem Innenwiderstand des Sensors entspricht und der eine optimale Rauschzahl $F_{opt} = 0{,}5\,\mathrm{dB}$ besitzt.

Wir fragen wieder nach dem SNR bei Betrieb mit dem Verstärker. Die schnelle, aber falsche Antwort lautet: $5\,\mathrm{dB} - 0{,}5\,\mathrm{dB} = 4{,}5\,\mathrm{dB}$. In diesem Fall weist der Sensor zwar wie ein Referenz-Signalgenerator nur thermisches Rauschen auf, die Rauschtemperatur beträgt aber nur $T_g = 77\,\mathrm{K}$ und ist damit deutlich geringer als die Referenztemperatur $T_0 = 290\,\mathrm{K}$.

Für den Sensor gilt (4.211), für den Verstärker (4.214); bildet man den Quotienten, fallen die Unbekannten $R_g$ und $(f_O - f_U)$ heraus und man erhält mit (4.215) und $F = F_{opt} = 0{,}5\,\mathrm{dB} = 1{,}122$ den SNR-Verlust:

$$\frac{SNR_g}{SNR_e} = 1 + \frac{T_0(F - 1)}{T_g} = 1{,}46 = 1{,}6\,\mathrm{dB}$$

Daraus erhält man mit $SNR_g = 5\,\mathrm{dB}$ das SNR mit Verstärker: $SNR_e = 3{,}4\,\mathrm{dB}$.

**Rauschtemperatur**

Betrachtet man die Formeln der letzten beiden Abschnitte, dann fällt auf, dass bei der Berechnung der Effektivwert-Quadrate häufig der Ausdruck

$$4k\,R_g\,(f_O - f_U)$$

auftritt. Normiert man die Effektivwert-Quadrate mit diesem Ausdruck, erhält man die *Rauschtemperaturen* $T_n$:

$$u_{r,geff}^2 = 4kT_gR_g\,(f_O - f_U) \quad \Rightarrow \quad \frac{u_{r,geff}^2}{4kR_g\,(f_O - f_U)} = T_g = T_{n,g}$$

$$u_{r,Veff}^2 = 4kT_0R_gF_Z\,(f_O - f_U) \quad \Rightarrow \quad \frac{u_{r,Veff}^2}{4kR_g\,(f_O - f_U)} = T_0F_Z = T_{n,V}$$
<!-- page-import:0515:end -->

<!-- page-import:0516:start -->
4.2 Eigenschaften und Kenngrößen

479

Die Signalquelle hat demnach die Rauschtemperatur $T_{n,g} = T_g$, der Verstärker die Rauschtemperatur $T_{n,V} = T_0 F_Z$. Die Rauschtemperaturen sind Ersatzgrößen für die Effektivwert-Quadrate und können wie diese einfach addiert werden.

Die Rauschtemperatur einer Komponente stimmt nur dann mit der physikalischen Temperatur der Komponente überein, wenn die Komponente ideales, thermisches Rauschen aufweist; das ist in der Praxis nur bei hochwertigen diskreten Metallfilm-Widerständen, integrierten Widerständen oder speziellen Sensoren der Fall. Es gibt aber auch Komponenten, bei denen die Rauschtemperatur geringer ist als die physikalische Temperatur. Das tritt immer dann auf, wenn sich die Ladungsträger in der Komponente nicht im thermischen Gleichgewicht befinden.

Wir verwenden die Rauschtemperatur nur zur Berechnung des jeweiligen Effektivwerts und rechnen dann mit den Effektivwerten weiter. Es gibt aber Fälle, in denen das Rechnen mit den Rauschtemperaturen auf besonders einfache Ausdrücke führt, siehe [4.9].

##### 4.2.4.5.5 Einsatz von Bewertungsfiltern

Bei einigen Anwendungen wird bei der Ermittlung der Rauschleistung ein Bewertungsfilter mit der Übertragungsfunktion $\underline{H}_B(s)$ eingesetzt; die Signal-Rausch-Abstände werden in diesem Fall mit den bewerteten Rauschdichten

$$|\underline{u}_{r(B),g}(f)|^2 = |\underline{H}_B(j\,2\pi f)|^2\,|\underline{u}_{r,g}(f)|^2$$

$$|\underline{u}_{r(B)}(f)|^2 = |\underline{H}_B(j\,2\pi f)|^2\,|\underline{u}_r(f)|^2$$

berechnet:

$$SNR_{B,g} = \frac{u_{g\,eff}^2}{\int_{f_U}^{f_O} |\underline{H}_B(j\,2\pi f)|^2\,|\underline{u}_{r,g}(f)|^2\,df}$$

$$SNR_{B,e} = \frac{u_{g\,eff}^2}{\int_{f_U}^{f_O} |\underline{H}_B(j\,2\pi f)|^2\,|\underline{u}_r(f)|^2\,df}$$

Davon macht man Gebrauch, wenn das Rauschen in bestimmten Bereichen des betrachteten Frequenzintervalls stärker stört als in anderen Bereichen. Mit einem Bewertungsfilter, dessen Betragsfrequenzgang proportional zur Störwirkung des Rauschens ist, erhält man in diesem Fall aussagekräftigere Werte für die Signal-Rausch-Abstände.

Ein typischer Fall für den Einsatz eines Bewertungsfilters ist die Ermittlung des Signal-Rausch-Abstands bei Audio-Verstärkern. Diese Verstärker sind üblicherweise für den Frequenzbereich $20\,\mathrm{Hz} < f < 20\,\mathrm{kHz}$ ausgelegt. Da das menschliche Ohr auf Rauschen im Bereich $1\,\mathrm{kHz} < f < 6\,\mathrm{kHz}$ besonders empfindlich reagiert, wird ein Bewertungsfilter verwendet, das diesen Bereich anhebt und die anderen Bereiche absenkt. Dieses Filter wird A-Filter genannt; entsprechend wird der Signal-Rausch-Abstand in Dezibel A bzw. dBA angegeben. Abbildung 4.161 zeigt den Frequenzgang des A-Filters. Die starke Absenkung bei niedrigen Frequenzen führt dazu, dass sich das 1/f-Rauschen des Verstärkers praktisch nicht bemerkbar macht, solange die 1/f-Grenzfrequenz deutlich unter $1\,\mathrm{kHz}$ liegt.

##### 4.2.4.5.6 Bandbreite des Verstärkers

Die Bandbreite eines Verstärkers muss mindestens so groß sein, dass das Nutzsignal im betrachteten Frequenzintervall $f_U < f < f_O$ gleichmäßig verstärkt wird; damit wird auch
<!-- page-import:0516:end -->

<!-- page-import:0517:start -->
480 4. Verstärker

![Abb. 4.161. Frequenzgang des A-Filters zur Ermittlung des bewerteten Signal-Rausch-Abstands bei Audio-Verstärkern](#)

**Abb. 4.161.**  
Frequenzgang des A-Filters zur Ermittlung des bewerteten Signal-Rausch-Abstands bei Audio-Verstärkern

das Rauschen in diesem Bereich gleichmäßig verstärkt. In der Praxis ist die Bandbreite meist größer als die benötigte Bandbreite, d.h. der Verstärker verstärkt auch die Bereiche $f < f_U$ und $f > f_O$ entsprechend seiner Betriebsverstärkung $\underline{A_B}(s)$. Diese Bereiche enthalten kein Nutzsignal, sondern nur das Rauschen der Signalquelle und des Verstärkers. Damit erhält man am Ausgang des Verstärkers ohne Beschränkung des Frequenzbereichs die Rauschleistung:

$$
P_{r,a} = \int_0^\infty |\underline{A_B}(j\,2\pi f)|^2\,|\underline{u_r}(f)|^2\,df
$$

(4.216)

Da das Nutzsignal mit der im Bereich $f_U < f < f_O$ als konstant angenommenen Nutzverstärkung $\underline{A_{B,\!Nutz}}$ verstärkt wird, folgt für den Signal-Rausch-Abstand am Ausgang des Verstärkers ohne Beschränkung des Frequenzbereichs:

$$
SNR_a = \frac{|\underline{A_{B,\!Nutz}}|^2\,u_{g\,eff}^2}{P_{r,a}}
= \frac{|\underline{A_{B,\!Nutz}}|^2\,u_{g\,eff}^2}{\int_0^\infty |\underline{A_B}(j\,2\pi f)|^2\,|\underline{u_r}(f)|^2\,df}
$$

(4.217)

Er ist geringer als der Signal-Rausch-Abstand nach (4.206), da hier das gesamte Rauschen und nicht nur der Anteil im Bereich $f_U < f < f_O$ eingeht.

Die Rauschleistung $P_{r,a}$ spielt in der Praxis eine große Rolle, da sie bei einer entsprechend großen Bandbreite des Verstärkers deutlich größer sein kann als die Nutzleistung; dadurch werden alle nachfolgenden Komponenten der Signalverarbeitungskette primär durch das verstärkte Rauschen ausgesteuert und unter Umständen sogar übersteuert.

Der Signal-Rausch-Abstand $SNR_a$ ist nur dann von Bedeutung, wenn das Rauschen außerhalb des Bereichs $f_U < f < f_O$ bis zum Ausgang der Signalverarbeitungskette übertragen wird und dort tatsächlich störend wirkt. Insofern besteht ein Zusammenhang mit dem Einsatz eines Bewertungsfilters: man erhält den Signal-Rausch-Abstand $SNR_e$ nach (4.206), indem man in (4.217) zusätzlich einen idealen Bandpass mit der unteren Grenzfrequenz $f_U$ und der oberen Grenzfrequenz $f_O$ als Bewertungsfilter einsetzt.

## 4.2.4.5.7 Äquivalente Rauschbandbreite

Wenn die Rauschdichten des Signalgenerators und des Verstärkers innerhalb der Übertragungsbandbreite näherungsweise konstant sind – damit ist auch die Rauschzahl näherungsweise konstant –, erhält man am Ausgang des Verstärkers die Rauschleistung:
<!-- page-import:0517:end -->

<!-- page-import:0518:start -->
4.2 Eigenschaften und Kenngrößen 481

**Abb. 4.162.**  
Äquivalente Rauschbandbreite eines Verstärkers

$$
P_{r,a} \approx F\,|u_{r,g}|^2 \int_0^\infty |A_B(j2\pi f)|^2\,df \;=\; F\,|u_{r,g}|^2\,|A_{B,Nutz}|^2\,B_r
$$

Die Bandbreite

$$
B_r \;=\; \frac{\int_0^\infty |A_B(j2\pi f)|^2\,df}{|A_{B,Nutz}|^2}
\qquad (4.218)
$$

wird *äquivalente Rauschbandbreite* genannt. Sie gibt die Bandbreite eines idealen Filters mit der Verstärkung $A_{B,Nutz}$ an, das dieselbe Rauschleistung $P_{r,a}$ besitzt wie der Verstärker. Anschaulich bedeutet dies, dass die Fläche unter dem Betragsquadrat-Verlauf $|A_B(j2\pi f)|^2$ durch ein flächengleiches Rechteck der Höhe $|A_{B,Nutz}|^2$ und der Breite $B_r$ ersetzt wird, siehe Abb. 4.162.

Als Beispiel berechnen wir die äquivalente Rauschbandbreite eines Verstärkers mit einer Übertragungsfunktion entsprechend einem Tiefpass 1. Grades:

$$
A_B(s) \;=\; \frac{A_0}{1+\frac{s}{\omega_g}}
\qquad \Rightarrow \qquad
|A_B(j2\pi f)|^2 \;=\; \frac{A_0^2}{1+\left(\frac{f}{f_g}\right)^2}
$$

Mit $|A_{B,Nutz}|^2 = A_0^2$ folgt:

$$
B_r \;=\; \int_0^\infty \frac{1}{1+\left(\frac{f}{f_g}\right)^2}\,df
\;=\;
\left[f_g\,\arctan\frac{f}{f_g}\right]_0^\infty
\;=\;
\frac{\pi}{2}\,f_g
\;\approx\;
1{,}57 \cdot f_g
$$

Demnach ist die äquivalente Rauschbandbreite eines Tiefpasses 1. Grades um den Faktor 1,57 größer als die Grenzfrequenz $f_g$, die in diesem Fall der 3dB-Grenzfrequenz $f_{-3dB}$ entspricht. Abbildung 4.163 enthält die entsprechenden Faktoren für Tiefpässe höheren Grades für den Fall eines mehrfachen Pols und den Fall einer Butterworth-Charakteristik mit maximal flachem Betragsfrequenzgang. In diesen und in den meisten anderen, in der Praxis auftretenden Fällen ist die äquivalente Rauschbandbreite größer als die 3dB-Bandbreite; sie kann jedoch auch kleiner sein.

In der Praxis wird nur selten mit der äquivalenten Rauschbandbreite gerechnet; man verwendet statt dessen die 3dB-Bandbreite und nimmt den vor allem bei höherem Grad
<!-- page-import:0518:end -->

<!-- page-import:0519:start -->
482 4. Verstärker

| Grad | $B_r/f_{-3dB}$ mehrfacher Pol | $B_r/f_{-3dB}$ Butterworth |
|---|---:|---:|
| 1 | $\pi/2 = 1{,}57$ | $\pi/2 = 1{,}57$ |
| 2 | 1,22 | 1,11 |
| 3 | 1,15 | 1,05 |
| 4 | 1,13 | 1,03 |
| 5 | 1,11 | 1,02 |

**Abb. 4.163.**  
Äquivalente Rauschbandbreite $B_r$ bei Tiefpässen

geringen Fehler in Kauf. Eine große Bedeutung hat die äquivalente Rauschbandbreite dagegen bei der Messung von Rauschdichten; dabei wird der interessierende Frequenzbereich mit einem sehr schmalbandigen Bandpass abgefahren und die Rauschleistung am Ausgang mit Hilfe der äquivalenten Rauschbandbreite in die zu ermittelnde Rauschdichte umgerechnet.

## 4.2.4.6 Optimierung der Rauschzahl

Wir beschränken uns im folgenden auf die Optimierung der Rauschzahl im Bereich des weißen Rauschens; die Rauschdichten sind in diesem Fall frequenzunabhängig. Eine Optimierung außerhalb dieses Bereichs ist erheblich aufwendiger, da hierzu die Minimierung von Integralgleichungen erforderlich ist; dies geschieht in der Praxis ausschließlich numerisch. Eine Optimierung im Bereich des weißen Rauschens hat jedoch im allgemeinen auch eine Verbesserung im Bereich des 1/f- oder des hochfrequenten Rauschens zur Folge; deshalb sind die Ergebnisse tendenziell übertragbar.

Die Optimierungsaufgabe an sich hängt vom Umfeld ab. Der Anwender integrierter Schaltungen steht meist vor der Aufgabe, das Signal einer vorgegebenen Quelle möglichst rauscharm zu verstärken. Dazu muss er einen Verstärker auswählen, der für den vorgegebenen Innenwiderstand $R_g$ eine möglichst geringe Rauschzahl erzielt; er kann dazu (4.189) oder (4.196) verwenden, je nachdem, ob im Datenblatt $|u_{r,0}|$ und $|i_{r,0}|$ oder $F_{opt}$ und $R_{gopt}$ angegeben sind. Im Niederfrequenz-Bereich werden meist VV-Operationsverstärker eingesetzt; ihre Rauscheigenschaften werden im Abschnitt 5.5 beschrieben. Bei Video- und Hochfrequenzanwendungen ist die Aufgabe insofern einfacher, als hier mit Anpassung, d.h. mit festen Quellen- und Lastwiderständen, gearbeitet wird: $R_g = 75\,\Omega$ bzw. $R_g = 50\,\Omega$. In den Datenblättern sind die Rauschzahlen für diesen Betrieb angegeben, so dass der Anwender direkt vergleichen kann. Für spezielle Anwendungen, z.B. Fotodioden-Empfänger, werden spezielle Verstärker angeboten.

Für den Entwickler integrierter Schaltungen stellt sich die Optimierungsaufgabe auf andere Weise. Er muss eine geeignete Technologie, eine geeignete Schaltung und einen geeigneten Arbeitspunkt für diese Schaltung finden, um ein optimales Ergebnis zu erhalten. Wir gehen im folgenden auf die grundlegenden Zusammenhänge ein, die diese dreistufige Auswahl beeinflussen.

### 4.2.4.6.1 Rauschquellen in integrierten Schaltungen

Das Rauschen integrierter Schaltungen wird durch die Transistoren und die ohmschen Widerstände verursacht; Kapazitäten und Induktivitäten sind rauschfrei. Abbildung 4.164 zeigt die Rauschquellen eines Bipolartransistors, eines Mosfets und eines ohmschen Widerstands.
<!-- page-import:0519:end -->

<!-- page-import:0520:start -->
4.2 Eigenschaften und Kenngrößen 483

$$|u_{r,T}|^2=\frac{2kT}{S}+4kTR_B$$

$$|i_{r,T}|^2=\frac{2kTS}{\beta}$$

$$|u_{r,F}|^2=\frac{8kT}{3S}$$

$$|i_{r,F}|^2=\frac{16kTSf^2}{3f_T^2}$$

$$|u_{r,R}|^2=4kTR$$

$$|i_{r,R}|^2=\frac{4kT}{R}$$

**Abb. 4.164.** Rauschquellen eines Bipolartransistors, eines Mosfets und eines ohmschen Widerstands

## Ohmscher Widerstand

Bei ohmschen Widerständen verwenden wir bevorzugt die Darstellung mit einer Rauschstromquelle mit der Rauschdichte:

$$|i_{r,R}|^2=\frac{4kT}{R}$$

Damit wird allerdings nur das thermische Rauschen eines idealen Widerstands erfasst; reale Widerstände in integrierten Schaltungen können je nach Ausführung eine geringfügig bis deutlich höhere Rauschdichte aufweisen.

## Bipolartransistor

Für einen Bipolartransistor gilt nach (2.59) und (2.60) im Bereich des weißen Rauschens, d.h. für $f_{g(1/f)}<f<f_T/\sqrt{\beta}\approx f_T/10$:

$$|u_{r,T}|^2=\frac{2kTU_T}{I_{C,A}}+4kTR_B=\frac{2kT}{S}+4kTR_B$$

$$|i_{r,T}|^2=\frac{2qI_{C,A}}{\beta}=\frac{2kTS}{\beta}$$

Dabei wird $S=I_{C,A}/U_T$ und $U_T=kT/q$ verwendet. Wir beschränken uns hier auf den Bereich kleiner und mittlerer Ströme; dadurch entfällt der dritte Term in (2.59). Man erkennt, dass ein rauscharmer Bipolartransistor einen kleinen Basisbahnwiderstand $R_B$ und eine hohe Stromverstärkung $\beta$ aufweisen muss. Während die Stromverstärkung durch die Technologie vorgegeben ist, kann man den Basisbahnwiderstand über die Skalierung beeinflussen: $R_B$ ist im allgemeinen umgekehrt proportional zur Größe des Transistors. Demnach kann man die Rauschspannungsdichte im Bereich mittlerer Ströme durch Vergrößern des Transistors verringern. Das geht allerdings zu Lasten der Bandbreite, da die Kapazitäten des Transistors zunehmen, während die Steilheit gleich bleibt.

Abbildung 4.165 zeigt die Rauschzahl eines Bipolartransistors mit $\beta=100$ und $R_B=10\,\Omega$ in der $I_{C,A}$–$R_g$–Ebene. Durch Einsetzen der Rauschdichten in (4.194) und (4.195) erhält man $^{37}$:
<!-- page-import:0520:end -->

<!-- page-import:0522:start -->
## 4.2 Eigenschaften und Kenngrößen

485

*Abb. 4.166.*  
Optimale Rauschzahlen $F_{opt,T}$ und $F_{opt,T}(R_g)$ eines Bipolartransistors mit $\beta = 100$ und $R_B = 100\,\Omega$

Die Differenz zwischen $F_{opt,T}$ und $F_{opt,T}(R_g)$ wird durch den Basisbahnwiderstand verursacht; für $R_B = 0$ erhält man gleiche Werte. Zur Verdeutlichung ist in Abb. 4.166 die Rauschzahl eines Bipolartransistors mit $\beta = 100$ und $R_B = 100\,\Omega$ zusammen mit den Verläufen von $F_{opt,T}$ und $F_{opt,T}(R_g)$ dargestellt. Man erkennt deutlich, dass $F_{opt,T}$ das Optimum in $R_g$-Richtung und $F_{opt,T}(R_g)$ das Optimum in $I_{C,A}$-Richtung ist. Für $R_g < R_B$ nimmt $F_{opt,T}(R_g)$ stark zu; für $R_g = 1\,\Omega$ wird nur noch eine Rauschzahl von 100 erzielt. In Abb. 4.166 erkennt man auch die Obergrenze für den Ruhestrom.

Für Ströme im Bereich $I_{C,A} = 10\,\mu\text{A}\dots 1\,\text{mA}$ gilt $R_{gopt,T} \approx 26\,\text{k}\Omega\dots 260\,\Omega$. Bei größeren Ruheströmen muss man den Basisbahnwiderstand berücksichtigen. Als Untergrenze für $R_{gopt,T}$ kann man den Wert $\sqrt{\beta}R_B \approx 10R_B$ ansehen; dann sind die durch $\beta$ und $R_g$ verursachten Anteile in $F_{opt,T}(R_g)$ etwa gleich groß und es gilt noch $F_{opt,T}(R_g) \approx F_{opt,T}$. Die Obergrenze für $R_{gopt,T}$ hängt von der geforderten Bandbreite ab; man kann $I_{C,A}$ nicht beliebig reduzieren, da die Transitfrequenz $f_T$ im Bereich sehr kleiner Ströme proportional zu $I_{C,A}$ abnimmt, siehe Abb. 2.44. Der Grenzstrom, unterhalb dem die Transitfrequenz abnimmt, beträgt:

$$
I_{C,A} = \frac{U_T}{\tau_{0,N}} (C_{S,E} + C_{S,C}) \approx \frac{U_T}{\tau_{0,N}} (2C_{S0,E} + C_{S0,C})
$$

Bei einem npn-Transistor mit den Parametern aus Abb. 4.5 (Größe 1) beträgt der Grenzstrom $100\,\mu\text{A}$; daraus folgt $R_{gopt} = 2{,}6\,\text{k}\Omega$. Bei einem pnp-Transistor ist der Basisbahnwiderstand üblicherweise geringer als bei einem npn-Transistor; dadurch wird vor allem bei niederohmigen Quellen eine geringere Rauschzahl erzielt. Allerdings ist die Transitfrequenz eines pnp-Transistors selbst bei einer komplementären Technologie geringer als die eines npn-Transistors. Bei Technologien, in denen nur laterale pnp-Transistoren zur Verfügung stehen, ist die Transitfrequenz der pnp-Transistoren um bis zu 3 Zehnerpotenzen niedriger als die der npn-Transistoren.

*Beispiel:* Ein Breitband-Transistor BFR93 mit $\beta = 95$ und $R_B = 20\,\Omega$ soll mit einer Signalquelle mit $R_g = 50\,\Omega$ betrieben werden. Man erhält $I_{C,Aopt}(R_g) = 3{,}6\,\text{mA}$ und $F_{opt,T}(R_g) = 1{,}5$. Für diesen Arbeitspunkt gilt $S = 138\,\text{mS}$, $R_{gopt,T} = 180\,\Omega$ und $F_{opt,T} = 1{,}26$, d.h. das Optimum *für diesen Arbeitspunkt* wird nicht ganz erreicht. Wenn
<!-- page-import:0522:end -->

<!-- page-import:0523:start -->
486 4. Verstärker

man fälschlicherweise die Gleichung für $R_{gopt,T}$ mit der Bedingung $R_{gopt,T} = 50\,\Omega$ auswertet, erhält man $S = 1{,}55\,\mathrm{S}$ und $I_{C,A} = 40\,\mathrm{mA}$; daraus folgt $F_{opt,T} = 1{,}8$. Dieses Beispiel zeigt, dass man bei niederohmigen Signalquellen in $I_{C,A}$-Richtung optimieren muss; eine Optimierung in $R_g$-Richtung führt auf eine höhere Rauschzahl.

**Mosfet**

Für einen Mosfet mit den typischen Rauschfaktoren $k_{D,r} \approx 2/3$, $k_{G,r} \approx 4/15$, $c_{GD,r} \approx 0{,}4$ und

$$
k_{I,r} = k_{D,r} + k_{G,r} + 2c_{GD,r}\sqrt{k_{D,r}k_{G,r}} \approx 2k_{D,r} \approx \frac{4}{3}
$$

gilt nach (3.50) und (3.51) für $f > f_g(1/f)$:

$$
|u_{r,F}|^2 = \frac{8kT}{3S} = \frac{8kT}{3\sqrt{2KI_{D,A}}}
$$

$$
|i_{r,F}(f)|^2 = \frac{16kTS}{3}\left(\frac{f}{f_T}\right)^2 = \frac{16kT\sqrt{2KI_{D,A}}}{3}\left(\frac{f}{f_T}\right)^2
$$

Dabei wird $S = \sqrt{2KI_{D,A}}$ verwendet. Diese Beschreibung gilt bis zur Steilheitsgrenzfrequenz $f_{Y21s}$, die normalerweise größer als die Transitfrequenz $f_T$ ist. Die Rauschstromdichte ist frequenzabhängig, d.h. es gibt keinen Bereich mit weißem Stromrauschen. Wir werden aber bei der Untersuchung der Grundschaltungen noch feststellen, dass durch die Beschaltung weitere Rauschquellen anfallen, die das Stromrauschen des Mosfets in einem mehr oder weniger großen Bereich überdecken; dadurch wird die äquivalente Rauschstromdichte der Schaltung in diesem Bereich frequenzunabhängig.

Durch Einsetzen der Rauschdichten in (4.194) und (4.195) erhält man:

$$
R_{gopt,F}(f) \approx \frac{f_T}{\sqrt{2}Sf}
$$

$$
F_{opt,F}(f) \approx 1 + 2\frac{f}{f_T}
$$

Für $f \ll f_T$ gilt $F_{opt,F} \to 1$, d.h. ein Mosfet ist im optimalen Betriebspunkt praktisch rauschfrei. Bei schmalbandigen Anwendungen kann man die Frequenzabhängigkeit vernachlässigen und für $f$ die Mittenfrequenz einsetzen. Dagegen muss man bei breitbandigen Anwendungen die mittlere Rauschstromdichte

$$
|\bar{i}_{r,F}[f_U,f_O]|^2 = \frac{1}{f_O-f_U}\int_{f_U}^{f_O}|i_{r,F}(f)|^2\,df
$$

$$
= \frac{16kTS}{9f_T^2}\frac{f_O^3-f_U^3}{f_O-f_U} \quad \overset{f_O \gg f_U}{\approx} \quad \frac{16kTS}{9}\left(\frac{f_O}{f_T}\right)^2
$$

im Bereich zwischen der unteren Grenzfrequenz $f_U$ und der oberen Grenzfrequenz $f_O$ verwenden; daraus folgt mit $f_O \gg f_U$:

$$
R_{gopt,F}[f_U,f_O] \approx \frac{\sqrt{3}f_T}{\sqrt{2}Sf_O} = R_{gopt,F}(f)|_{f=f_O/\sqrt{3}}
$$

$$
F_{opt,F}[f_U,f_O] \approx 1 + \frac{2}{\sqrt{3}}\frac{f_O}{f_T} = F_{opt,F}(f)|_{f=f_O/\sqrt{3}}
$$
<!-- page-import:0523:end -->

<!-- page-import:0524:start -->
4.2 Eigenschaften und Kenngrößen

487

Man muss demnach nur $f = f_O/\sqrt{3}$ einsetzen, um die optimalen Werte für eine breitbandige Anwendung zu erhalten. Auch hier gilt $F_{opt,F} \to 1$, da die obere Grenzfrequenz $f_O$ bei vielen Anwendungen mindestens um den Faktor 100 unter der Transitfrequenz liegt.

Aus den Gleichungen für $R_{gopt,F}$ darf man nicht schließen, dass die Anpassung an eine Quelle durch geeignete Wahl der Transitfrequenz optimiert werden kann; die Rauschzahl wird nämlich nur im optimalen, sondern in jedem Betriebsfall für $f_T \to \infty$ minimal. Daraus folgt, dass man $f_T$ maximieren muss, indem man die Steilheit $S$ bei gegebener Gate-Fläche $A = WL$ maximiert; dazu muss man die Stromdichte $I_{D,A}/W$ im Arbeitspunkt maximieren:

$$
f_T \sim \frac{S}{C} \sim \frac{\sqrt{2K\,I_{D,A}}}{A} \sim \frac{\sqrt{W\,I_{D,A}}}{W} = \sqrt{\frac{I_{D,A}}{W}}
$$

Mit zunehmender Stromdichte nehmen aber die Rauschfaktoren $k_{D,r}$ und $k_{G,r}$ zu; dadurch nimmt auch die Rauschzahl oberhalb einer bestimmten Stromdichte wieder zu. Die optimale Stromdichte hängt von der Technologie ab und liegt im Bereich $I_{D,A}/W \approx 0{,}1 \dots 0{,}2\,\mathrm{mA}/\mu\mathrm{m}$. Im Gegensatz zum Bipolartransistor hängt die optimale Steilheit eines Mosfets demnach nicht vom Innenwiderstand $R_g$, sondern von der Technologie ab.

In die Rauschdichten geht zwar nur die Steilheit $S = \sqrt{2K\,I_{D,A}}$ ein, d.h. die Wahl von $I_{D,A}$ und $K$ wirkt sich im Bereich des weißen Rauschens nicht auf $R_{gopt,F}$ und $F_{opt,F}$ aus, aber die Lage dieses Bereichs hängt von dieser Wahl ab, da die 1/f-Grenzfrequenz beeinflusst wird. Wegen

$$
f_{g(1/f)} \sim k_{(1/f)} \sqrt{\frac{I_{D,A}}{K}} \sim \frac{1}{L^2}\sqrt{\frac{I_{D,A}L}{W}} = I_{D,A}^{1/2}\,W^{-1/2}\,L^{-3/2}
$$

wird man bei vorgegebener Gate-Fläche $A = WL$ bevorzugt $L$ zu Lasten von $W$ vergrößern; dadurch nimmt $K$ ab. Minimales 1/f-Rauschen erhält man demnach mit geometrisch großen, aber elektrisch kleinen Mosfets, die mit hohem Strom betrieben werden. Auch hier gerät man wie beim Bipolartransistor mit der Bandbreite in Konflikt:

$$
f_T \sim \frac{S}{C} \sim \frac{\sqrt{2K\,I_{D,A}}}{A} \sim \frac{\sqrt{\frac{W}{L}}\sqrt{I_{D,A}}}{WL} = I_{D,A}^{1/2}\,W^{-1/2}\,L^{-3/2}
$$

Daraus folgt $f_{g(1/f)} \sim f_T$, d.h. bei einer Reduktion der 1/f-Grenzfrequenz wird auch die Transitfrequenz reduziert.

#### 4.2.4.6.2 Vergleich von Bipolartransistor und Mosfet

Die Rauschspannungsdichten eines Bipolartransistors und eines Mosfets sind im Bereich des weißen Rauschens nahezu gleich, wenn man gleiche Steilheit annimmt:

$$
\frac{|u_{r,T}|^2}{|u_{r,F}|^2} = \frac{3}{4}\,\frac{S_F}{S_T}\Big|_{S_T=S_F} = \frac{3}{4}
$$

Nimmt man dagegen gleiche Ströme an, ist die Rauschspannungsdichte des Bipolartransistors aufgrund der höheren Steilheit deutlich geringer:

$$
\frac{|u_{r,T}|^2}{|u_{r,F}|^2}\Big|_{I_{C,A}=I_{D,A}} = \frac{3}{2}\,\frac{U_T}{U_{GS,A}-U_{th}} \overset{U_{GS,A}-U_{th}\approx 1\,\mathrm{V}}{\approx} \frac{1}{25}
$$
<!-- page-import:0524:end -->

<!-- page-import:0525:start -->
488  4. Verstärker

Der praktisch bedeutsame Fall gleicher Bandbreite liegt zwischen diesen Grenzfällen. Da die Kapazitäten eines Mosfets im allgemeinen geringer sind als die eines Bipolartransistors, ist die für ein vorgegebenes Verstärkungs-Bandbreite-Produkt erforderliche Steilheit ebenfalls geringer; deshalb gilt meist $S_F < S_T$ und $I_{D,A} > I_{C,A}$. Unter vergleichbaren Bedingungen ist demnach die Rauschspannungsdichte eines Mosfets mehr oder weniger größer als die eines Bipolartransistors. Ganz anders sind die Verhältnisse im Bereich des 1/f-Rauschens; hier ist die Rauschspannungsdichte eines Mosfets aufgrund der um bis zu vier Zehnerpotenzen höheren 1/f-Grenzfrequenz erheblich größer.

Im Gegensatz zur Rauschspannungsdichte ist die Rauschstromdichte eines Mosfets im Bereich kleiner und mittlerer Frequenzen erheblich geringer als die eines Bipolartransistors:

$$
\frac{|i_{r,T}|^2}{|i_{r,F}(f)|^2}
\qquad f < f_{T,T}/\sqrt{\beta}
\qquad =
\qquad \frac{3}{8\beta}\,\frac{S_T}{S_F}\left(\frac{f_{T,F}}{f}\right)^2
\qquad \xrightarrow[f\to 0]{}\ \infty
$$

Die Bedingung $f < f_{T,T}/\sqrt{\beta} \approx f_{T,T}/10$ ist erforderlich, da wir uns hier auf den Bereich des weißen Rauschens beschränkt haben. Für $f > f_{T,T}/\sqrt{\beta}$ nimmt auch die Rauschstromdichte eines Bipolartransistors proportional zu $(f/f_{T,T})^2$ zu, siehe (2.58); deshalb sind die Rauschstromdichten in diesem Bereich bei gleicher Transitfrequenz etwa gleich.

Aus den Verhältnissen der Rauschdichten folgt für den Bereich des weißen Rauschens ein grundlegender Zusammenhang:

*Unter vergleichbaren Bedingungen ist die Rauschspannungsdichte eines Mosfets etwas größer, die Rauschstromdichte dagegen erheblich kleiner als die entsprechende Rauschdichte eines Bipolartransistors. Daraus folgt, dass der optimale Quellenwiderstand eines Mosfets wesentlich größer ist als der eines Bipolartransistors. Deshalb erzielt man bei niederohmigen Quellen mit Bipolartransistoren und bei hochohmigen Quellen mit Mosfets eine geringere Rauschzahl.*

Es stellt sich die Frage nach der Grenze, d.h. nach dem Quellenwiderstand, für den ein Bipolartransistor und ein Mosfet dieselbe Rauschzahl erzielen; aus der Bedingung

$$
|u_{r,T}|^2 + R_g^2|i_{r,T}|^2 = |u_{r,F}|^2 + R_g^2|i_{r,F}(f)|^2
$$

folgt:

$$
R_{g,T\leftrightarrow F}
=
\sqrt{\frac{|u_{r,F}|^2-|u_{r,T}|^2}{|i_{r,T}|^2-|i_{r,F}(f)|^2}}
\qquad
|i_{r,T}|^2 \gg |i_{r,F}(f)|^2
\qquad \approx \qquad
\sqrt{\frac{|u_{r,F}|^2-|u_{r,T}|^2}{|i_{r,T}|^2}}
$$

Die Grenze hängt nicht von der Frequenz ab, solange die Rauschstromdichte des Mosfets vernachlässigt werden kann; dazu muss

$$
\left(\frac{f_O}{f_{T,F}}\right)^2 \ll \frac{1}{\beta} \approx \frac{1}{100}
$$

gelten, d.h. die obere Grenzfrequenz $f_O$ muss mindestens um den Faktor 30 unter der Transitfrequenz des Mosfets liegen. Durch Einsetzen der Rauschdichten erhält man:

$$
R_{g,T\leftrightarrow F}
\qquad
|i_{r,T}|^2 \gg i_{r,F}(f)|^2
\qquad \approx \qquad
\sqrt{\frac{\beta}{S_T}\left(\frac{4}{3S_F}-\frac{1}{S_T}\right)}
\qquad
\begin{array}{c}
S_T \gg S_F\\
\beta \approx 100
\end{array}
\qquad \approx \qquad
\frac{12}{\sqrt{S_T S_F}}
\qquad (4.219)
$$

Es muss demnach
<!-- page-import:0525:end -->

<!-- page-import:0526:start -->
4.2 Eigenschaften und Kenngrößen 489

$$S_T > \frac{3}{4} S_F$$

gelten, damit die Grenze existiert; sonst ist der Mosfet im Bereich des weißen Rauschens generell besser. In vergleichbaren Niederfrequenz-Schaltungen ist die Steilheit eines Bipolartransistors aber meist deutlich größer als die eines Mosfets und man kann die Näherung verwenden.

In der Praxis ist die Grenze $R_{g,T\leftrightarrow F}$ oft nicht von Interesse, da man im allgemeinen durch die verwendete Technologie beschränkt ist und diese nicht nur mit Blick auf die Rauschzahl *eines* Verstärkers auswählen kann; vielmehr möchte man wissen, in welchem Bereich eine *geforderte* Rauschzahl erzielt werden kann. Durch Auflösen von (4.196) nach $R_g$ erhält man eine quadratische Gleichung mit der Lösung:

$$R_{g,u/o} = R_{gopt} \left( \frac{F-1}{F_{opt}-1} \pm \sqrt{\left(\frac{F-1}{F_{opt}-1}\right)^2 - 1} \right)$$

Für $F > F_{opt}$ erhält man eine *untere* Grenze mit $R_{g,u} < R_{gopt}$ und eine *obere* Grenze mit $R_{g,o} > R_{gopt}$; für $F = F_{opt}$ gilt $R_{g,u} = R_{g,o} = R_{gopt}$ und für $F < F_{opt}$ existiert keine Lösung. Ferner gilt $R_{g,u} R_{g,o} = R_{gopt}^2$. Für

$$F - 1 > 2\,(F_{opt} - 1)$$

kann man eine Reihenentwicklung der Wurzel vornehmen und die Reihe nach dem linearen Glied abbrechen 38; daraus folgt:

$$R_{g,u} \approx \frac{R_{gopt}}{2}\,\frac{F_{opt}-1}{F-1}, \quad R_{g,o} \approx 2 R_{gopt}\,\frac{F-1}{F_{opt}-1}$$

Für einen Bipolartransistor erhält man:

$$R_{g,uT} \approx \left(\frac{1}{2S} + R_B\right)\frac{1}{F-1}, \quad R_{g,oT} \approx \frac{2\beta}{S}\,(F-1)$$

Der Basisbahnwiderstand $R_B$ geht nur in die untere Grenze ein. Für einen Mosfet gilt bei breitbandigen Anwendungen:

$$R_{g,uF} \approx \frac{1}{\sqrt{2}S\,(F-1)}, \quad R_{g,oF} \approx \frac{2\,(F-1)}{S}\left(\frac{f_T}{f_O}\right)^2$$

Hier ist die obere Lösung $R_{g,oF}$ frequenzabhängig.

#### 4.2.4.6.3 Optimaler Arbeitspunkt

Im Bereich des weißen Rauschens hängt der optimale Quellenwiderstand sowohl beim Bipolartransistor als auch beim Mosfet in erster Linie von der Steilheit ab; dies gilt prinzipiell auch für den Bereich des 1/f- und des Hochfrequenzrauschens, wie die entsprechenden Gleichungen in den Abschnitten 2.3.4 und 3.3.4 zeigen. Demnach ist die Optimierung der Rauschzahl in erster Linie eine Frage des Arbeitspunkts. Beim Bipolartransistor besteht aufgrund des Zusammenhangs $S = I_{C,A}/U_T$ kein Spielraum, d.h. zu jedem Quellenwiderstand existiert ein optimaler Kollektorstrom $I_{C,Aopt}(R_g)$; dagegen kann man beim Mosfet wegen $S = \sqrt{2K I_{D,A}}$ das Verhältnis zwischen dem Steilheitskoeffizienten $K$ und dem Drainstrom $I_{D,A}$ variieren.

38 Für $a > 2$ gilt: $\sqrt{a^2 - 1} \approx a - 1/(2a)$.
<!-- page-import:0526:end -->

<!-- page-import:0527:start -->
490  4. Verstärker

**Abb. 4.167.** Rauschanpassung mit einem Übertrager

In der Praxis kann man den Kollektor- oder Drainstrom im Arbeitspunkt nur selten ausschließlich nach Rausch-Gesichtspunkten wählen, da konkurrierende Anforderungen bezüglich Bandbreite, Impedanzniveau und – mit zunehmender Miniaturisierung und Portabilität moderner Systeme immer häufiger – Leistungsaufnahme bestehen. Tendenziell sind die Verhältnisse günstig: mit zunehmender Frequenz muss man die Systeme aufgrund der unvermeidlichen Kapazitäten immer niederohmiger machen, was eine Reduktion der Quellenwiderstände in der Schaltung zur Folge hat; dabei muss man auch die Steilheiten der Transistoren erhöhen, was eine Reduktion der optimalen Quellenwiderstände der Transistoren zur Folge hat, die demzufolge den Quellenwiderständen in der Schaltung tendenziell folgen.

Im folgenden stellen wir noch zwei Verfahren zur Rauschanpassung durch Impedanztransformation vor, die bei besonders hohen Anforderungen, vor allem im Bereich der drahtlosen Empfangstechnik, angewendet werden.

### 4.2.4.7 Rauschanpassung

#### 4.2.4.7.1 Rauschanpassung mit einem Übertrager

Wenn keine Gleichspannungsverstärkung benötigt wird und besonders hohe Anforderungen bezüglich des Rauschens gestellt werden, kann man eine Rauschanpassung mit einem Übertrager vornehmen; dabei wird der Innenwiderstand $R_g$ in den Bereich des optimalen Quellenwiderstands $R_{g\,opt}$ transformiert. Dieses Verfahren wird vor allem bei sehr kleinen Innenwiderständen ($R_g < 50\,\Omega$) angewendet, da es keine Verstärker mit entsprechend geringem optimalen Quellenwiderstand gibt. Abbildung 4.167 zeigt eine Transformation von $R_g$ auf $n^2 R_g$ mit einem 1:n-Übertrager; ein Zahlenbeispiel findet sich am Ende von Abschnitt 2.3.4.

Die untere Grenzfrequenz ergibt sich aus der Induktivität des Übertragers:

$$
f_U = \frac{n^2 R_g}{2\pi L_{\ddot{U}}}
$$

Daraus folgt, dass man bei NF-Anwendungen Übertrager mit hoher Induktivität und entsprechend großen Abmessungen einsetzen muss, was im allgemeinen unpraktisch ist; dagegen sind Übertrager für den Frequenzbereich von 1 MHz bis 1 GHz als SMD-Bauteile mit einem Volumen von $0{,}1 \ldots 0{,}5\ \mathrm{cm}^3$ erhältlich.

#### 4.2.4.7.2 Rauschanpassung mit einem Resonanztransformator

Bei hohen Frequenzen und geringer Bandbreite kann man anstelle eines Übertragers einen Resonanztransformator einsetzen. Besonders häufig wird ein $\Pi$-Glied mit zwei Kapazitäten und einer Induktivität verwendet, das als Collins-Filter bzw. Collins-Transformator
<!-- page-import:0527:end -->

<!-- page-import:0528:start -->
4.2 Eigenschaften und Kenngrößen 491

a mit Induktivitäten und Kapazitäten

b mit Streifenleitern

**Abb. 4.168.** Rauschanpassung am Eingang und Leistungsanpassung am Ausgang mit Collins-Filtern

bezeichnet wird. Ein HF-Verstärker enthält gewöhnlich zwei Resonanztransformatoren: einen am Ausgang zur Leistungsanpassung und einen am Eingang zur Leistungs- oder Rauschanpassung. Abbildung 4.168 zeigt eine Ausführung mit konzentrierten Bauelementen und eine mit Streifenleitern. Auf die Dimensionierung gehen wir im Abschnitt 24.2.7 näher ein.

#### 4.2.4.8 Äquivalente Rauschquellen der Grundschaltungen

Bei der Berechnung der Rauschzahl haben wir bis jetzt nur die äquivalenten Rauschquellen der Transistoren berücksichtigt. Dies entspricht dem Idealfall, bei dem die Rauschquellen der zur Schaltung gehörenden ohmschen Widerstände und Stromquellen vernachlässigt werden können. Außerdem haben wir nur einen Transistor betrachtet. Im folgenden berechnen wir die äquivalenten Rauschquellen der elementaren Grundschaltungen, der Kaskodeschaltung und des Differenzverstärkers unter Berücksichtigung der erforderlichen Widerstände und Stromquellen.

##### 4.2.4.8.1 Verfahren zur Berechnung der äquivalenten Rauschquellen

Jede Rauschquelle eines Verstärkers kann in eine äquivalente Rauschspannungsquelle und eine äquivalente Rauschstromquelle am Eingang des Verstärkers umgerechnet werden; dies geschieht in vier Schritten:

- Berechnung der Verstärkung $A = u_a/u_e$ bei Ansteuerung mit einer idealen Spannungsquelle ($u_e = u_g$) und der Transimpedanz $R_T = u_a/i_e$ bei Ansteuerung mit einer idealen Stromquelle ($i_e = i_g$). Wegen $u_e = i_e r_e$ gilt $R_T = A\,r_e$; dies ist von Bedeutung, da wir bei den Grundschaltungen nur $A$ und $r_e$, nicht aber $R_T$ berechnet haben.
- Berechnung der Kurzschlussausgangsspannung

$$
u_{a,K} = A_{K,x}u_{r,x} \quad \text{bzw.} \quad u_{a,K} = R_{K,x}i_{r,x} \qquad \text{für } u_e = 0
$$

und der Leerlaufausgangsspannung

$$
u_{a,L} = A_{L,x}u_{r,x} \quad \text{bzw.} \quad u_{a,L} = R_{L,x}i_{r,x} \qquad \text{für } i_e = 0
$$

für jede Rauschquelle $u_{r,x}$ bzw. $i_{r,x}$.
- Berechnung der äquivalenten Rauschspannung

$$
u_{r,0x} = \frac{A_{K,x}u_{r,x}}{A} \quad \text{bzw.} \quad u_{r,0x} = \frac{R_{K,x}i_{r,x}}{A}
$$
<!-- page-import:0528:end -->

<!-- page-import:0529:start -->
492 4. Verstärker

und des äquivalenten Rauschstroms

$$
i_{r,0x}=\frac{A_{L,x}u_{r,x}}{R_T}
\qquad \text{bzw.} \qquad
i_{r,0x}=\frac{R_{L,x}i_{r,x}}{R_T}
$$

für jede Rauschquelle $u_{r,x}$ bzw. $i_{r,x}$.

– Berechnung der Rauschdichten der äquivalenten Rauschquellen:

$$
u_{r,0}=\sum_x u_{r,0x}
\;\Rightarrow\;
|u_{r,0}|^2=\sum_x |u_{r,0x}|^2
$$

$$
i_{r,0}=\sum_x i_{r,0x}
\;\Rightarrow\;
|i_{r,0}|^2=\sum_x |i_{r,0x}|^2
$$

Dabei wird vorausgesetzt, dass die Rauschquellen $u_{r,x}$ bzw. $i_{r,x}$ unabhängig sind; damit sind auch die äquivalenten Rauschquellen $u_{r,0x}$ bzw. $i_{r,0x}$ unabhängig und man kann die jeweiligen Rauschdichten addieren.

Abbildung 4.169 zeigt die ersten drei Schritte dieses Verfahrens am Beispiel einer Rauschstromquelle $i_{r,x}$.

Im allgemeinen geht jede Rauschquelle sowohl in die äquivalente Rauschspannungsquelle als auch in die äquivalente Rauschstromquelle ein; deshalb sind die äquivalenten Rauschquellen streng genommen immer abhängig. Die Größenverhältnisse sind jedoch meist so, dass jede Rauschquelle nur in eine äquivalente Rauschquelle signifikant eingeht, während ihr Beitrag zur jeweils anderen äquivalenten Rauschquelle vernachlässigbar gering ist; dadurch sind die äquivalenten Rauschquellen praktisch unabhängig.

#### 4.2.4.8.2 Emitterschaltung mit Stromgegenkopplung

Abbildung 4.170a zeigt eine Emitterschaltung mit Stromgegenkopplung und Widerständen zur Arbeitspunkteinstellung. Für $R_E=0$ erhält man eine Emitterschaltung ohne Gegenkopplung, d.h. dieser Fall ist ebenfalls enthalten. Zur Berechnung der äquivalenten Rauschquellen verwenden wir das Kleinsignalersatzschaltbild in Abb. 4.170b, in dem die Rauschquellen des Transistors und der Widerstände enthalten sind. Der Kollektor-Emitter-Widerstand $r_{CE}$ des Transistors kann vernachlässigt werden und ist deshalb nicht dargestellt. Der Basisbahnwiderstand $R_B$ des Transistors wird im Kleinsignalersatzschaltbild ebenfalls vernachlässigt, ist aber in der Rauschspannungsdichte $|u_{r,T}|^2$ enthalten und erscheint deshalb in den nachfolgenden Berechnungen, sobald die Rauschdichten eingesetzt werden. Die Widerstände $R_1$ und $R_2$ werden im folgenden zu $R_b=R_1\parallel R_2$ zusammengefasst; dadurch werden auch die Rauschströme $i_{r,R1}$ und $i_{r,R2}$ zu einem Rauschstrom $i_{r,Rb}$ zusammengefasst.

Die Verstärkung und die Transimpedanz kann man aus (2.82) und (2.83) entnehmen; unter Berücksichtigung des Einflusses von $R_b$ auf den Eingangswiderstand $r_e$ gilt:

$$
A=-\frac{S\,R_C}{1+S\,R_E}
$$

$$
R_T=A\,r_e
\qquad
\underset{r_e=R_b\parallel (r_{BE}+\beta R_E)}{=}
\qquad
-\frac{\beta R_C\,R_b}{R_b+r_{BE}+\beta R_E}
$$

Die Berechnung der Kurzschluss- und Leerlaufausgangsspannungen für die Rauschquellen ist aufwendig; wir geben hier nur das Ergebnis nach Umrechnung auf den Eingang an:
<!-- page-import:0529:end -->

<!-- page-import:0530:start -->
## 4.2 Eigenschaften und Kenngrößen

493

1: Berechnung der Verstärkung $A$

$u_a = A u_g$

1: Berechnung der Transimpedanz $R_T$

$u_a = R_T i_g$

2: Berechnung der Kurzschluss-
ausgangsspannung für
die Rauschquelle $i_{r,x}$

$u_{a,K} = R_{K,x} i_{r,x}$

2: Berechnung der Leerlauf-
ausgangsspannung für
die Rauschquelle $i_{r,x}$

$u_{a,L} = R_{L,x} i_{r,x}$

3: Berechnung der äquivalenten
Rauschspannung $u_{r,0x}$

$$u_{r,0x} = \frac{R_{K,x}\, i_{r,x}}{A}$$

3: Berechnung des äquivalenten
Rauschstroms $i_{r,0x}$

$$i_{r,0x} = \frac{R_{L,x}\, i_{r,x}}{R_T}$$

a äquivalente Rauschspannungsquelle  
b äquivalente Rauschstromquelle

**Abb. 4.169.** Verfahren zur Berechnung der äquivalenten Rauschquellen für eine Rauschstromquelle

$$u_{r,0} = u_{r,T} + (i_{r,T} + i_{r,RE})\, R_E + i_{r,RC}\left(R_E + \frac{1}{S}\right)$$

$$i_{r,0} = \frac{u_{r,T}}{R_b} + i_{r,T}\left(1 + \frac{R_E}{R_b}\right) + i_{r,Rb} + \frac{i_{r,RE} R_E}{R_b} + i_{r,RC}\left(\frac{1}{\beta} + \frac{R_E + 1/S}{R_b}\right)$$

Für typische Größenverhältnisse $(S\,R_C \gg 2,\; S\,R_b \gg 1/2,\; R_b \gg R_E,\; S\,R_E \ll 2\beta)$ erhält man:

$$u_{r,0} \approx u_{r,T} + i_{r,RE} R_E$$

$$i_{r,0} \approx i_{r,T} + i_{r,Rb}$$
<!-- page-import:0530:end -->

<!-- page-import:0531:start -->
494  4. Verstärker

a Schaltung  b Kleinsignalersatzschaltbild mit Rauschquellen

**Abb. 4.170.** Emitterschaltung mit Stromgegenkopplung

Die äquivalenten Rauschquellen sind in diesem Fall unabhängig, da keine Rauschquelle in beide äquivalente Rauschquellen eingeht. Die Rauschquelle des Kollektorwiderstands $R_C$ geht gar nicht ein; sie macht sich erst bei sehr kleinen Werten von $R_C$ bemerkbar. Damit folgt für die äquivalenten Rauschdichten der Emitterschaltung mit Stromgegenkopplung:

$$
|u_{r,0}|^2 \approx |u_{r,T}|^2 + 4kT\,R_E = \frac{2kT}{S} + 4kT\,(R_B + R_E)
\qquad (4.220)
$$

$$
|i_{r,0}|^2 \approx |i_{r,T}|^2 + \frac{4kT}{R_b}
\mathop{\approx}\limits_{R_b \gg 2r_{BE}}
|i_{r,T}|^2 = \frac{2kT\,S}{\beta}
\qquad (4.221)
$$

Durch die Stromgegenkopplung wird in erster Linie die äquivalente Rauschspannungsdichte erhöht. Dagegen wirkt sich der Innenwiderstand $R_b$ des Basis-Spannungsteilers nur auf die äquivalente Rauschstromdichte aus; für $R_b \gg 2r_{BE}$ ist dieser Einfluß vernachlässigbar. Man beachte, dass in (4.220) die Summe aus dem Gegenkopplungswiderstand $R_E$ und dem Basisbahnwiderstand $R_B$ auftritt; deshalb sind alle Rausch-Gleichungen des Bipolartransistors anwendbar, wenn man $R_B + R_E$ anstelle von $R_B$ einsetzt. Allerdings ist $R_E$ im allgemeinen keine unabhängige Größe, sondern über die gewünschte Schleifenverstärkung $k_E = SR_E$ an die Steilheit gekoppelt; eine Berechnung des optimalen Ruhestroms ergibt in diesem Fall:

$$
I_{C,Aopt}(R_g) = \frac{U_T\sqrt{\beta}}{R_g + R_B}\sqrt{1 + 2k_E}
\mathop{\approx}\limits_{\substack{\beta \approx 100\\ R_g > R_B}}
\frac{0{,}26\,\mathrm{V}}{R_g}\sqrt{1 + 2k_E}
$$

Die optimale Rauschzahl nimmt durch die Stromgegenkopplung zu:

$$
F_{opt,T}(R_g) = 1 + \frac{R_B}{R_g} + \frac{1}{\sqrt{\beta}}\left(1 + \frac{R_B}{R_g}\right)\sqrt{1 + 2k_E}
$$

Deshalb wird man bei einer Optimierung ausschließlich nach Rausch-Gesichtspunkten keine Stromgegenkopplung einsetzen. In der Praxis muss man jedoch häufig auch die Aussteuerungsgrenze, gegeben durch einen zulässigen Klirrfaktor oder Intermodulationsabstand, optimieren. In diesem Fall kann der Gewinn an möglicher Aussteuerung durch die
<!-- page-import:0531:end -->

<!-- page-import:0532:start -->
4.2 Eigenschaften und Kenngrößen 495

**Abb. 4.171.**  
Sourceschaltung mit Stromgegenkopplung

lineariserende Wirkung der Stromgegenkopplung größer sein als der Verlust durch das höhere Rauschen. Ein Beispiel für eine solche Anwendung ist der Empfangsverstärker eines Mobiltelefons, bei dem je nach Abstand zum Sender extrem unterschiedliche Eingangssignale auftreten können; hier muss man Empfindlichkeit opfern, um große Eingangssignale intermodulationsarm verarbeiten zu können.

#### 4.2.4.8.3 Sourceschaltung mit Stromgegenkopplung

Die äquivalenten Rauschdichten der Sourceschaltung mit Stromgegenkopplung in Abb. 4.171 entsprechen denen der Emitterschaltung mit Stromgegenkopplung; allerdings ist die äquivalente Rauschstromdichte hier durch den Gate-Spannungsteiler gegeben, da die Rauschstromdichte des Mosfets vernachlässigbar klein ist. Mit $R_b = R_1 \parallel R_2$ und bei Vernachlässigung der Substrat-Steilheit gilt:

$$
|u_{r,0}|^2 \approx |u_{r,F}|^2 + 4kT\,R_S \frac{k_S=S R_S}{}
= \frac{8kT}{3S}\left(1 + \frac{3}{2}k_S\right)
$$

(4.222)

$$
|i_{r,0}|^2 \approx |i_{r,F}(f)|^2 + \frac{4kT}{R_b} \approx \frac{4kT}{R_b}
$$

(4.223)

Dabei ist $k_S = S\,R_S$ die Schleifenverstärkung. Man muss $R_b$ möglichst groß wählen, damit die Rauschzahl im Bereich hoher Quellenwiderstände nicht deutlich schlechter wird.

Eine unmittelbare Optimierung ist bei der Sourceschaltung nicht möglich, da es keine gegenläufigen Größen gibt; vielmehr muss man $S$ und $R_b$ möglichst groß und die Schleifenverstärkung $k_S$ möglichst klein machen. Bei NF-Anwendungen ist das Minimum für die Rauschzahl nur sehr schwach ausgeprägt. Ist $k_S$ durch den zulässigen Klirrfaktor gegeben, wird man die Steilheit so lange vergrößern, bis die Rauschzahl unter eine gewünschte Grenze fällt. Man kann dazu die untere Grenze $R_{g,uF}$ für den Quellenwiderstand verwenden, wenn man den zusätzlichen Faktor

$$
1 + \frac{3}{2}k_S
$$

aus (4.222) berücksichtigt; mit $R_g = R_{g,uF}$ folgt:

$$
S = \frac{1}{\sqrt{2R_g}\,(F-1)}\left(1 + \frac{3}{2}k_S\right)
$$

Mit zunehmender Frequenz wird das Minimum immer ausgeprägter; man verwendet in diesem Fall die Gleichung für den optimalen Quellenwiderstand bei Breitband-Anwendungen, i.e. $R_{gopt,F}\,[f_U,f_O]$, und berücksichtigt den zusätzlichen Faktor in gleicher Weise:
<!-- page-import:0532:end -->

<!-- page-import:0533:start -->
496 4. Verstärker

a Schaltung  
b Kleinsignalersatzschaltbild mit Rauschquellen

**Abb. 4.172.** Emitterschaltung mit Spannungsgegenkopplung

$$
S = \frac{\sqrt{3}\,f_T}{\sqrt{2}R_g\,f_O}\left(1+\frac{3}{2}k_S\right)
$$

#### 4.2.4.8.4 Emitterschaltung mit Spannungsgegenkopplung

Abbildung 4.172 zeigt eine Emitterschaltung mit Spannungsgegenkopplung und das zugehörige Kleinsignalersatzschaltbild mit allen Rauschquellen. Die Schaltung ist hier ohne den in Abb. 2.68 gezeigten Widerstand $R_1$ dargestellt, da hier der Quellenwiderstand $R_g$ die Rolle von $R_1$ übernimmt; $R_g$ gehört aber zur Signalquelle und trägt deshalb auch nicht zum Rauschen der Schaltung bei. Ein zusätzlicher Widerstand $R_1$ ist unerwünscht, da er die Verstärkung reduziert und die Rauschzahl erhöht.

Eine Berechnung der äquivalenten Rauschquellen ergibt:

$$
u_{r,0}=\frac{SR_2u_{r,T}+R_2(i_{r,R2}+i_{r,RC})}{SR_2-1}
$$

$$
i_{r,0}=i_{r,T}+\frac{Su_{r,T}+SR_2i_{r,R2}+\left(1+\frac{R_2}{r_{BE}}\right)i_{r,RC}}{SR_2-1}
$$

Für typische Größenverhältnisse $(SR_C \gg 2,\; SR_2 \gg 2)$ erhält man:

$$
u_{r,0}\approx u_{r,T}
$$

$$
i_{r,0}\approx i_{r,T}+i_{r,R2}
$$

Die äquivalenten Rauschquellen sind in diesem Fall unabhängig. Die Rauschquelle des Kollektorwiderstands $R_C$ geht nicht ein; sie macht sich erst bei sehr kleinen Werten von $R_C$ bemerkbar. Damit folgt für die äquivalenten Rauschdichten der Emitterschaltung mit Spannungsgegenkopplung:

$$
|u_{r,0}|^2 \approx |u_{r,T}|^2 = \frac{2kT}{S}+4kTR_B
$$

(4.224)

$$
|i_{r,0}|^2 \approx |i_{r,T}|^2+\frac{4kT}{R_2}=\frac{2kTS}{\beta}+\frac{4kT}{R_2}\approx \frac{2kTS}{\beta}
$$

$S R_2 \gg 2\beta$

(4.225)
<!-- page-import:0533:end -->

<!-- page-import:0534:start -->
4.2 Eigenschaften und Kenngrößen

497

a mit Kollektorschaltung

b verallgemeinerte Form

**Abb. 4.173.** Praktische Ausführung einer rauscharmen Emitterschaltung mit Spannungsgegenkopplung

Für $S\,R_2 \gg 2\beta$ bzw. $R_2 \gg 2r_{BE}$ ist die Rauschstromquelle des Gegenkopplungswiderstands $R_2$ vernachlässigbar; dann entsprechen die Rauschdichten der Schaltung denen des Transistors und man kann die Optimierung mit den Rausch-Gleichungen des Bipolartransistors durchführen.

Kriterium für die Wahl des Gegenkopplungswiderstands $R_2$ ist wie bei der Emitterschaltung mit Stromgegenkopplung der zulässige Klirrfaktor. Die Spannungsgegenkopplung bietet jedoch den Vorteil, dass der Klirrfaktor auch über den Kollektorwiderstand $R_C$ beeinflusst werden kann, und zwar ohne Auswirkung auf die Rauschzahl. Zunächst erhält man über den optimalen Kollektorstrom

$$
I_{C,Aopt}^{R_g>R_B} \approx \frac{U_T\sqrt{\beta}}{R_g}
$$

den Zusammenhang $R_g=\sqrt{\beta}/S$; Einsetzen in die Formel für den Klirrfaktor der Emitterschaltung mit Spannungsgegenkopplung liefert unter Berücksichtigung von $R_2 \gg R_1$, $R_1=R_g$ und $\hat{u}_e=\hat{u}_g$ $^{39}$:

$$
k \approx \frac{\hat{u}_g}{4\beta U_T}\left(1+\frac{R_2}{R_C}\right)^2
$$

Man kann demnach die Forderung für eine minimale Rauschzahl, i.e. $R_2 \gg 2r_{BE}$, einhalten und trotzdem einen geringen Klirrfaktor erzielen, wenn man den Kollektorwiderstand $R_C$ entsprechend groß wählt; optimal ist demnach der Einsatz einer rauscharmen Stromquelle anstelle von $R_C$. Da eine am Ausgang angeschlossene Last kleinsignalmäßig parallel zu $R_C$ liegt, muss ein Impedanzwandler, d.h. eine Kollektorschaltung, folgen, siehe Abb. 4.173a; dabei wird das Gegenkopplungssignal am Ausgang der Kollektorschaltung entnommen;

Abbildung 4.173b zeigt die verallgemeinerte Form einer rauscharmen Emitterschaltung mit Spannungsgegenkopplung, bei der die Kollektorschaltung durch einen allgemei-

$^{39}$ Die Größen $u_e$ und $R_1$ der Emitterschaltung mit Spannungsgegenkopplung aus Abschnitt 2.4.1 entsprechen hier den Größen $u_g$ und $R_g$.
<!-- page-import:0534:end -->

<!-- page-import:0535:start -->
498  4. Verstärker

nen Verstärker mit hohem Eingangs- und niedrigem Ausgangswiderstand ersetzt wird. Diese Schaltung nimmt in der Praxis eine herausragende Rolle ein, da sie minimales Rauschen, geringe Verzerrungen und eine ebenso einfache wie stabile Einstellung des Arbeitspunkts ermöglicht. Sie ist für kleine und mittlere Quellenwiderstände optimal und wird nur bei hohen Quellenwiderständen von der entsprechenden Schaltung mit Mosfets übertroffen. Ein wichtiges Einsatzfeld sind optische Empfänger für Glasfaser-Übertragungssysteme. Die Foto-Empfangsdioden sind zwar hochohmig, jedoch sind die Betriebsfrequenzen so hoch, dass die Rauschstromdichten von Bipolartransistoren und Mosfets etwa gleich groß sind; man verwendet dann Bipolartransistoren wegen der größeren Steilheit. Eine vergleichende Darstellung dieser und anderer optischer Breitband-Empfangsschaltungen ist in [4.10] enthalten.

#### 4.2.4.8.5 Sourceschaltung mit Spannungsgegenkopplung

Die äquivalenten Rauschdichten der Sourceschaltung mit Spannungsgegenkopplung entsprechen denen der Emitterschaltung mit Spannungsgegenkopplung; allerdings ist die äquivalente Rauschstromdichte hier durch den Gegenkopplungswiderstand gegeben, da die Rauschstromdichte des Mosfets vernachlässigbar klein ist:

$$
|u_{r,0}|^2 \approx |u_{r,F}|^2 = \frac{8kT}{3S}
$$

(4.226)

$$
|i_{r,0}|^2 \approx |i_{r,F}(f)|^2 + \frac{4kT}{R_2} \approx \frac{4kT}{R_2}
$$

(4.227)

Die praktische Ausführung erfolgt entsprechend Abb. 4.173; hier muss allerdings nicht zwingend ein Impedanzwandler in Form einer Drainschaltung folgen, da eine Sourceschaltung ebenfalls einen hohen Eingangswiderstand aufweist. Diese Schaltung ist optimal für hochohmige Quellen, solange die obere Grenzfrequenz noch weit unterhalb der Transitfrequenz liegt. Sie wird bevorzugt in optischen Empfängern für Frequenzen bis etwa 10 MHz eingesetzt; Abb. 4.174 zeigt die entsprechende Schaltung. Der Gegenkopplungswiderstand $R_2$ bildet zusammen mit der Kapazität $C_D$ der Fotodiode und der Gate-Source-Kapazität $C_{GS}$ einen Tiefpass, der die Bandbreite begrenzt; deshalb muss man $R_2$ in der Praxis nach der geforderten Bandbreite wählen. Da die Fotodiode hochohmig ist, wird nur die Rauschstromdichte wirksam; sie wird mittels der Empfindlichkeit der Diode in eine entsprechende Beleuchtungsstärke, die sogenannte noise equivalent power (NEP), umgerechnet [4.7].

#### 4.2.4.8.6 Kollektor- und Drainschaltung

Abbildung 4.175 zeigt eine Kollektor- und eine Drainschaltung als jeweils einfachste Ausführung eines Impedanzwandlers. Für die Kollektorschaltung erhält man:

$$
u_{r,0}=\frac{SR_Eu_{r,T}+R_E(i_{r,T}+i_{r,RE})}{SR_E+1}\qquad \overset{SR_E\gg 1}{\approx}\qquad u_{r,T}+\frac{i_{r,T}+i_{r,RE}}{S}
$$

$$
i_{r,0}=i_{r,T}+\frac{i_{r,RE}}{\beta}
$$

Daraus folgt für die äquivalenten Rauschdichten mit $SR_E \gg 2$ und $\beta \gg 1$:

$$
|u_{r,0}|^2 \approx |u_{r,T}|^2 = \frac{2kT}{S} + 4kTR_B
$$

(4.228)
<!-- page-import:0535:end -->

<!-- page-import:0536:start -->
4.2 Eigenschaften und Kenngrößen 499

**Abb. 4.174.**  
Praktische Ausführung eines optischen Empfängers mit Fotodiode

$$|i_{r,0}|^2 \approx |\underline{i}_{r,T}|^2 = \frac{2kTS}{\beta}$$

(4.229)

Für die Drainschaltung erhält man entsprechend:

$$|u_{r,0}|^2 \approx |\underline{u}_{r,F}|^2 = \frac{8kT}{3S}$$

(4.230)

$$|i_{r,0}|^2 \approx |\underline{i}_{r,F}[f_U,f_O]|^2 = \frac{16kTS}{9}\left(\frac{f_O}{f_T}\right)^2$$

(4.231)

Beide Schaltungen besitzen demnach näherungsweise die äquivalenten Rauschdichten des jeweiligen Transistors.

Obwohl die Beschaltung eines Bipolartransistors oder Mosfets als Impedanzwandler praktisch keinen Einfluss auf die äquivalenten Rauschdichten hat, werden beide Schaltungen nur in Ausnahmefällen als Eingangsstufe in einem rauscharmen Verstärker eingesetzt, da sie keine Verstärkung besitzen und deshalb die Rauschdichten der nachfolgenden Stufe ebenfalls voll am Eingang wirksam werden.

#### 4.2.4.8.7 Basis- und Gateschaltung

Abbildung 4.176 zeigt eine Basis- und eine Gateschaltung in der für Hochfrequenzanwendungen typischen Ausführung mit Wechselspannungskopplung. Zur Einstellung

**Abb. 4.175.**  
Impedanzwandler

a Kollektorschaltung

b Drainschaltung
<!-- page-import:0536:end -->

<!-- page-import:0538:start -->
## 4.2 Eigenschaften und Kenngrößen

501

a Schaltung

b Kleinsignalersatzschaltbild mit Rauschquellen

**Abb. 4.177.** Einfacher Stromspiegel als Stromquelle

Widerstands eingesetzt, z.B. anstelle eines Kollektor- oder Drainwiderstands. Im Kleinsignalersatzschaltbild einer Schaltung wird sie durch ihren Ausgangswiderstand $r_a$ und eine Rauschstromquelle dargestellt; dabei ist die Rauschstromdichte $|\underline{i}_{a,r}|^2$ erheblich größer als die eines entsprechenden ohmschen Widerstands:

$$
|\underline{i}_{a,r}|^2 \gg \frac{4kT}{r_a}
$$

Deshalb kann eine Stromquelle die Rauschzahl einer Schaltung auch dann erheblich erhöhen, wenn ein ohmscher Widerstand an gleicher Stelle keinen nennenswerten Einfluss hat.

Abbildung 4.177 zeigt die Schaltung und das Kleinsignalersatzschaltbild einer Stromquelle auf der Basis eines einfachen Stromspiegels mit Stromgegenkopplung. Eine rigorose Analyse liefert:

$$
i_a = \frac{\beta}{r_{BE2} + \beta R_2 + r_i}
\left[
i_{r,RV} r_i
+ S_1 r_i \frac{u_{r,T1} + i_{r,R1} R_1}{1 + S_1 R_1}
+ u_{r,T2}
\right.
$$

$$
\left.
+\, i_{r,T2}(r_i + R_2) + i_{r,R2} R_2
\right]
$$

Dabei ist

$$
r_i = \frac{R_V (1 + S_1 R_1)}{1 + S_1 (R_V + R_1)}
$$

der Innenwiderstand des linken Zweigs. Wir beschränken uns hier auf den bezüglich Transistoren und Widerständen kreuzsymmetrischen Fall mit dem Übersetzungsverhältnis

$$
k_I = \frac{S_2}{S_1} = \frac{R_1}{R_2}
$$

und nehmen ferner $R_V \gg 1/S_1 + R_1$ an; dann gilt $r_i \approx 1/S_1 + R_1$ und:

$$
i_a \approx \frac{\beta}{\beta + k_I}\,\frac{S_2}{1 + S_2 R_2}
\left[
u_{r,T1} + u_{r,T2} + (k_I i_{r,R1} + i_{r,R2} + (1 + k_I) i_{r,T2})\, R_2
\right]
$$

Das Übersetzungsverhältnis ist im allgemeinen viel kleiner als die Stromverstärkung: $k_I \ll \beta$; dann gilt:
<!-- page-import:0538:end -->

<!-- page-import:0539:start -->
502  4. Verstärker

$$
|i_{a,r}|^2 \approx \left(\frac{S_2}{1+S_2R_2}\right)^2 \left[(1+k_I)\left(|u_{r,T2}|^2+4kTR_2\right)+(1+k_I)^2|i_{r,T2}|^2R_2^2\right]
$$

Man kann durch eine Betrachtung der Grenzfälle ohne Gegenkopplung $(R_2 = 0)$ und starker Gegenkopplung $(S_2R_2 \gg 1)$ eine Näherung für diesen Ausdruck angeben, der in den Grenzfällen exakt ist und nur im Bereich $S_2R_2 \approx 1$ geringfügig vom exakten Wert abweicht; es gilt:

$$
|i_{a,r}|^2 \approx \frac{1+k_I}{\frac{1}{S_2^2|u_{r,T2}|^2}+\frac{1}{|i_{r,R2}|^2}}+(1+k_I)^2|i_{r,T2}|^2
$$

$$
\approx \frac{4kT\,(1+k_I)}{\frac{2}{S_2(1+2S_2R_{B2})}+R_2}+(1+k_I)^2\frac{2kTS_2}{\beta}
\qquad\qquad (4.236)
$$

Die Rauschstromdichte nimmt mit zunehmender Gegenkopplung ab, da der Nenner des ersten Terms mit $R_2$ zunimmt; die Untergrenze ist durch den zweiten Term gegeben. Das Übersetzungsverhältnis $k_I$ wird in der Praxis zu Eins gewählt, um die Rauschstromdichte nicht unnötig zu erhöhen; bei hohen Anforderungen kann man auch $k_I < 1$ wählen.

Für $k_I \leq 1$ sind die beiden Terme in (4.236) für $S_2R_2 \approx \beta$ etwa gleich groß, d.h. eine weitere Vergrößerung von $R_2$ wirkt sich nur noch wenig aus; der Spannungsabfall an $R_2$ beträgt in diesem Fall:

$$
I_{C2}R_2 = S_2R_2U_T \quad \underset{S_2R_2\approx\beta}{\approx} \quad \beta U_T \quad \underset{\beta\approx100}{\approx} \quad 2{,}6\,\mathrm{V}
$$

In der Praxis kann man den Spannungsabfall an $R_2$ nur selten so groß wählen, dass die Untergrenze erreicht wird; deshalb kann man vor allem in Schaltungen mit sehr geringer Versorgungsspannung keine rauscharmen Stromquellen realisieren.

Ohne bzw. mit schwacher Gegenkopplung dominiert der Einfluss der Rauschspannungsdichten der Transistoren. Man kann in diesem Fall große Transistoren einsetzen, um den Basisbahnwiderstand und damit die Rauschspannungsdichten klein zu halten; allerdings nimmt dadurch die Ausgangskapazität zu. Bei mittlerer und starker Gegenkopplung ist der Einfluss der Rauschspannungsdichten der Transistoren gering; die Transistor-Größe kann dann entsprechend der normalen Skalierung gewählt werden.

Für eine Stromquelle mit Mosfets erhält man:

$$
|i_{a,r}|^2 \approx (1+k_I)\frac{4kT}{\frac{3}{2S_2}+R_2} + (1+k_I)^2\frac{16kTS_2}{9}\left(\frac{f_O}{f_T}\right)^2
$$

$$
\underset{f_O \ll f_T}{\approx} (1+k_I)\frac{4kT}{\frac{3}{2S_2}+R_2}
\qquad\qquad (4.237)
$$

Hier existiert für $f_O \ll f_T$ praktisch keine Untergrenze, da man den Gegenkopplungswiderstand $R_2$ aufgrund der geringen Steilheit eines Mosfets extrem groß wählen muss, damit die Terme gleich groß werden; der Spannungsabfall an $R_2$ ist in diesem Fall intolerabel hoch.
<!-- page-import:0539:end -->

<!-- page-import:0540:start -->
## 4.2 Eigenschaften und Kenngrößen

503

Abb. 4.178. Rauschstromdichten und Ausgangswiderstände einer bipolaren und einer MOS-Stromquelle mit $I_a = 100\ \mu\mathrm{A}$ in Abhängigkeit von der Aussteuerungsgrenze $U_{a,min}$ ($U_{CE,sat} = 0{,}2\ \mathrm{V}$, $U_{DS,ab} = 0{,}5\ \mathrm{V}$)

Ein Vergleich der Rauschstromdichten einer bipolaren und einer MOS-Stromquelle ist nur auf der Basis gleicher Aussteuerungsgrenzen $U_{a,min}$ sinnvoll. Abbildung 4.178 zeigt einen Vergleich der Rauschstromdichten und der Ausgangswiderstände einer bipolaren und einer MOS-Stromquelle mit $I_a = 100\ \mu\mathrm{A}$ für die Transistoren aus Abb. 4.5 und 4.6; dabei wird $U_{CE,sat} = 0{,}2\ \mathrm{V}$ und $U_{DS,ab} = U_{GS} - U_{th} = 0{,}5\ \mathrm{V}$ angenommen. Man kann die Aussteuerungsgrenze der MOS-Stromquelle durch Vergrößern der Mosfets weiter verringern, allerdings wird für eine Halbierung von $U_{DS,ab}$ die vierfache Größe benötigt. Man erkennt, dass die Rauschstromdichte der MOS-Stromquelle im für die Praxis interessanten Bereich $U_{a,min} \approx 0{,}5,\ldots 2\ \mathrm{V}$ geringfügig unter der der bipolaren Stromquelle liegt; dies gilt auch bei einer Änderung der Größe der Mosfets, d.h. bezüglich des Rauschens ist die MOS-Stromquelle immer geringfügig besser. Allerdings besitzt die bipolare Stromquelle einen wesentlich höheren Ausgangswiderstand; deshalb wird man sie immer dann bevorzugen, wenn ein hoher Ausgangswiderstand benötigt wird.

Abbildung 4.179 zeigt weitere Stromquellen mit Bipolartransistoren auf der Basis des 3-Transistor-, Kaskode- und Wilson-Stromspiegels. Die Rauschstromdichten unterscheiden sich nur bezüglich der Untergrenze bei starker Gegenkopplung: sie ist beim 3-Transistor-Stromspiegel niedriger und bei den anderen beiden Stromspiegeln höher als bei der Stromquelle mit einfachem Stromspiegel. Die Unterschiede sind gering und in der Praxis unbedeutend, da man nur selten eine derart starke Gegenkopplung verwenden kann. Ohne bzw. mit schwacher Gegenkopplung hängt die Rauschstromdichte auch hier von der Größe der Transistoren $T_1$ und $T_2$ ab; dagegen gehen die Größen der Transistoren [unclear]
<!-- page-import:0540:end -->

<!-- page-import:0541:start -->
504  4. Verstärker

a 3-Transistor-Stromspiegel  
b Kaskode-Stromspiegel  
c Wilson-Stromspiegel

**Abb. 4.179.** Weitere Stromquellen

$T_3$ und $T_4$ praktisch nicht ein. Deshalb kann man die Stromquellen mit Kaskode- oder Wilson-Stromspiegel ohne Gegenkopplung optimieren, indem man $T_1$ und $T_2$ zur Minimierung der Rauschstromdichte groß und die anderen Transistoren zur Minimierung der Ausgangskapazität klein wählt, siehe Abb. 4.179b/c. Bei gleicher Aussteuerungsgrenze ist der Ausgangswiderstand bei der Stromquelle mit Kaskode- oder Wilson-Stromspiegel höher als bei der Stromquelle mit einfachem Stromspiegel; die Rauschstromdichte ist jedoch ebenfalls höher. Deshalb muss man genau prüfen, welche Größe im konkreten Anwendungsfall wichtiger ist.

## 4.2.4.8.9 Emitter- und Sourceschaltung mit Stromquelle

Abbildung 4.180 zeigt die Schaltung und das Kleinsignalersatzschaltbild einer Emitterschaltung mit Stromquelle; dabei ist $i_{a,r}$ die Rauschstromquelle der Stromquelle und $r_a$ der Ausgangswiderstand der Schaltung. Man erkennt, dass die Quelle $i_{a,r}$ in gleicher Weise auf den Ausgang wirkt wie die gesteuerte Quelle $S_3 u_{BE3}$ des Transistors $T_3$; deshalb kann ihr Strom über die Steilheit $S_3$ in eine äquivalente Eingangsspannung und über die Stromverstärkung $\beta_3$ in einen äquivalenten Eingangsstrom umgerechnet werden. Daraus folgt für die äquivalenten Rauschdichten der Schaltung:

$$
|u_{r,o}|^2 = |u_{r,T3}|^2 + \frac{|i_{a,r}|^2}{S_3^2} \underset{S_3 R_2 \gg 2+2k_I}{\approx} |u_{r,T3}|^2
\qquad (4.238)
$$

$$
|i_{r,o}|^2 = |i_{r,T3}|^2 + \frac{|i_{a,r}|^2}{\beta_3^2} \approx |i_{r,T3}|^2
\qquad (4.239)
$$

Die äquivalente Rauschstromdichte wird durch die Stromquelle praktisch nicht erhöht; das gilt auch für den Fall ohne Stromgegenkopplung ($R_1 = R_2 = 0$). Im Gegensatz dazu ist eine Stromgegenkopplung mit $S_3 R_2 \gg 2+2k_I$ erforderlich, damit die äquivalente Rauschspannungsdichte nicht nennenswert zunimmt; ohne Stromgegenkopplung ($R_1 = R_2 = 0$) und unter Annahme gleich großer Basisbahnwiderstände $R_{B2}$ und $R_{B3}$ gilt:
<!-- page-import:0541:end -->

<!-- page-import:0542:start -->
4.2 Eigenschaften und Kenngrößen

505

a Schaltung

b Kleinsignalersatzschaltbild

**Abb. 4.180.** Emitterschaltung mit Stromquelle

$$
|u_{r,0}|^2 \approx (2 + k_I)\,|u_{r,T3}|^2 \qquad \overset{k_I=1}{=} \qquad 3\,|u_{r,T3}|^2
$$

Für die Sourceschaltung gilt dies in gleicher Weise.

Besitzt die Emitter- oder Sourceschaltung ihrerseits eine Stromgegenkopplung über einen Widerstand $R_E$ bzw. $R_S$, muss man bei der Umrechnung der Rauschstromdichte der Stromquelle die reduzierte Steilheit

$$
S_{red} = \frac{S}{1 + SR_E}
\qquad \text{bzw.} \qquad
S_{red} = \frac{S}{1 + SR_S}
$$

verwenden; dadurch nimmt der Einfluss zu. Allerdings wird die Rauschspannungsdichte auch durch die Widerstände $R_E$ bzw. $R_S$ erhöht; das Rauschen der Stromquelle ist in diesem Fall für $R_2 \gg (1 + k_I)R_E$ bzw. $R_2 \gg (1 + k_I)R_S$ vernachlässigbar.

### 4.2.4.8.10 Kollektor- und Drainschaltung mit Stromquelle

Es gelten dieselben Zusammenhänge wie bei der Emitter- und Sourceschaltung, d.h. die äquivalente Rauschstromdichte wird praktisch nicht erhöht; dagegen ist zur Erhaltung der äquivalenten Rauschspannungsdichte eine Stromgegenkopplung der Stromquelle erforderlich. In der Praxis werden dennoch meist Stromquellen ohne Stromgegenkopplung eingesetzt, da die Kollektor- und die Drainschaltung im allgemeinen als Impedanzwandler bei hohen Quellenwiderständen eingesetzt werden; in diesem Fall hängt die Rauschzahl in erster Linie von der äquivalenten Rauschstromdichte ab, so dass eine Zunahme der äquivalenten Rauschspannungsdichte um den Faktor 3 praktisch keinen Einfluss auf die Rauschzahl hat.

### 4.2.4.8.11 Kaskodeschaltung

Abbildung 4.181 zeigt die Schaltung und das Kleinsignalersatzschaltbild einer Kaskodeschaltung mit Bipolartransistoren. Da die Kleinsignal-Kenngrößen der Kaskode- und der Emitterschaltung praktisch gleich sind, kann man zunächst auf die Gleichungen für die Emitterschaltung zurückgreifen; insbesondere kann das Rauschen des Kollektorwi-
<!-- page-import:0542:end -->

<!-- page-import:0543:start -->
506 4. Verstärker

a Schaltung  
b Kleinsignalersatzschaltbild

**Abb. 4.181.** Kaskodeschaltung

derstands $R_C$ vernachlässigt werden. Die Rauschquellen des Transistors $T_2$ sind ebenfalls vernachlässigbar:

- Die Rauschspannungsquelle $u_{r,T2}$ wirkt sich praktisch nicht aus, da der Strom durch $T_1$ eingeprägt wird und die Änderung der Stromverteilung aufgrund der Kollektor-Emitter-Widerstände $r_{CE1}$ und $r_{CE2}$ sehr klein ist.
- Die Rauschstromquelle $i_{r,T2}$ wirkt bezüglich des Ausgangs wie die Quelle $S_1 u_{BE1}$ und wird deshalb über die Stromverstärkung $\beta$ auf den Eingang umgerechnet; dort kann sie gegen $i_{r,T1}$ vernachlässigt werden.

Daraus folgt für die Kaskodeschaltung:

$$|u_{r,0}|^2 \approx |u_{r,T1}|^2$$

(4.240)

$$|i_{r,0}|^2 \approx |i_{r,T1}|^2$$

(4.241)

Bei Varianten mit Stromgegenkopplung oder Basis-Spannungsteiler kann man die Gleichungen der entsprechenden Emitterschaltung verwenden. Entsprechend gelten die Gleichungen für die Sourceschaltung auch für die Kaskodeschaltung mit Mosfets.

### 4.2.4.8.12 Differenzverstärker

Abbildung 4.182 zeigt die Schaltung und das Kleinsignalersatzschaltbild eines Differenzverstärkers mit Bipolartransistoren und Ruhestromeinstellung über einen Widerstand. Die Kleinsignalersatzschaltbilder der Transistoren sind aus Übersichtsgründen nur schematisch dargestellt.

Man kann den Differenzverstärker auf die Emitterschaltung zurückführen; davon haben wir bereits im Abschnitt 4.1.4 Gebrauch gemacht. Daraus folgt, dass man das Rauschen der Kollektorwiderstände auch beim Differenzverstärker vernachlässigen kann. Die beiden Rauschspannungsquellen $u_{r,T1}$ und $u_{r,T2}$ werden zu einer äquivalenten Rauschspannungsquelle mit

$$|u_{r,0}|^2 = |u_{r,T1}|^2 + |u_{r,T2}|^2$$

(4.242)
<!-- page-import:0543:end -->

<!-- page-import:0544:start -->
## 4.2 Eigenschaften und Kenngrößen

507

**Abb. 4.182.** Differenzverstärker

a Schaltung

b Kleinsignalersatzschaltbild

zusammengefasst, die vor einem der beiden Eingänge angeordnet wird. Dies ist unabhängig von der Beschaltung möglich, da die Rauschspannungsquellen direkt in die Ersatzrauschquelle eingehen. Im Gegensatz dazu hängt der Beitrag der Rauschstromquellen von den Quellenwiderständen an den beiden Eingängen ab; deshalb wird – gleiche Transistoren vorausgesetzt – an beiden Eingängen eine äquivalente Rauschstromquelle mit

$$|i_{r,01}|^2 = |i_{r,02}|^2 = |i_{r,T1}|^2 = |i_{r,T2}|^2$$

angeordnet. Der Einfluss der Rauschstromquelle $i_{r,R0}$ hängt von der Beschaltung am Ausgang ab und wird getrennt behandelt; er ist in den meisten Fällen vernachlässigbar.

Man erhält das in Abb. 4.183 gezeigte Rausch-Ersatzschaltbild mit zwei Signalquellen; daraus folgt für die Ersatzrauschquelle

$$u_r = u_{r,g1} + u_{r,g2} + u_{r,0} + i_{r,01} R_{g1} + i_{r,02} R_{g2}$$

und für die Rauschzahl:

$$F = \frac{|u_r|^2}{|u_{r,g1}|^2 + |u_{r,g2}|^2} = 1 + \frac{|u_{r,0}|^2 + R_{g1}^2\,|i_{r,01}|^2 + R_{g2}^2\,|i_{r,02}|^2}{4kT\,(R_{g1} + R_{g2})}$$

(4.243)

(4.244)

**Abb. 4.183.** Rausch-Ersatzschaltbild eines Differenzverstärkers
<!-- page-import:0544:end -->
