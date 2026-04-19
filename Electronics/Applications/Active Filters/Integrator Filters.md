# Integrator Filters

<!-- page-import:0882:start -->
12.12 Integratorfilter 845

$$A(s_n)=\frac{U_{AP}}{U_e}=\frac{1+(2R_1-\alpha R_2)C\omega_g s_n+R_1R_2C^2\omega_g^2 s_n^2}{1+2R_1C\omega_g s_n+R_1R_2C^2\omega_g^2 s_n^2}$$

**Abb. 12.68.** Allpass 2. Ordnung. Dimensionierungsbeispiel für einen Allpass mit einer Gruppenlaufzeit von $t_{gr\,0}=1$ ms bei einer Grenzfrequenz von $f_g=518$ Hz

Damit ergeben sich für den Bandpass folgende Daten:

$$A_r=2 \qquad f_r=\frac{f_g}{\sqrt{b_1}} \qquad Q=\frac{\sqrt{b_1}}{a_1}$$

Die Dimensionierung erhält man durch Koeffizientenvergleich der Übertragungsfunktion mit (12.72):

$$R_1=\frac{a_1}{4\pi f_g C}, \qquad R_2=\frac{b_1}{\pi f_g C a_1}=\frac{4b_1}{a_1^2}R_1 \qquad \text{und} \qquad \alpha=\frac{a_1^2}{b_1}=\frac{1}{Q^2}$$

Als Beispiel soll ein Allpass 2. Ordnung mit einer Gruppenlaufzeit von $t_{gr\,0}=1$ ms dimensioniert werden. Daraus ergibt sich eine Grenzfrequenz $f_g=T_{gr\,0}/(2\pi\,t_{gr\,0})=518$ Hz. Aus Abb. 12.66 können wir die Koeffizienten $a_1=1{,}6278$ und $b_1=0{,}8832$ entnehmen. Wenn man $C=1$ nF und $R=100\,\mathrm{k}\Omega$ vorgibt, erhält man die in Abb. 12.68 eingetragene Dimensionierung. Eine weitere und auch bessere Realisierungsmöglichkeit folgt bei den Integratorfiltern in Abb. 12.74 auf Seite 851.

Aus der Übertragungsfunktion kann man noch eine weitere Anwendung der Schaltung in Abb. 12.68 erkennen. Wählt man nämlich

$$2R_1-\alpha R_2=0 \qquad \Rightarrow \qquad \alpha=\frac{2R_1}{R_2}=\frac{a_1^2}{2b_1}=\frac{1}{2Q^2},$$

ergibt sich ein Sperrfilter, das dem in Abb. 12.61 entspricht.

## 12.12 Integratorfilter

Mit 2 Integratoren und einem Summierer lassen sich vielseitige Filter aufbauen, die gute Daten besitzen und die sich leicht dimensionieren lassen. Dass man hier für ein Filter 2. Ordnung 3 Operationsverstärker benötigt, ist angesichts der niedrigen Kosten kein Problem. Wenn man integrierte Schaltungen mit 3 oder 4 Operationsverstärkern in einem Gehäuse einsetzt, benötigt man dafür auch lediglich ein einziges Bauelement. Der Vorteil der Integratorfilter besteht darin, dass sie sich leicht dimensionieren lassen und eine geringe Empfindlichkeit gegenüber Toleranzen der Bauelemente besitzen.
<!-- page-import:0882:end -->

<!-- page-import:0883:start -->
846  12. Aktive Filter

Integrationszeitkonstante: $\tau = RC$

Tiefpass:

$$
\frac{U_{TP}}{U_e} =
\frac{-\frac{R_3}{R_2}}
{1 + \frac{RR_3}{R_1R_4}\,\tau\omega_g s_n + \frac{R_3}{R_1}\,\tau^2\omega_g^2 s_n^2}
$$

Bandpass:

$$
\frac{U_{BP}}{U_e} =
\frac{\frac{R_3}{R_2}\,\tau\omega_g s_n}
{1 + \frac{RR_3}{R_1R_4}\,\tau\omega_g s_n + \frac{R_3}{R_1}\,\tau^2\omega_g^2 s_n^2}
$$

**Abb. 12.69.** Integrator Filter 2. Ordnung in Biquad-Struktur mit Tiefpass- und Bandpass-Ausgang.  
Diemensionierungsbeispiel für einen Bandpass mit $f_r = 1\,\text{kHz}$, $Q = 10$ und $A_r = 10$

## 12.12.1 Grundschaltung

Die Grundschaltung eines Integratorfilters ist in Abb. 12.69 dargestellt. Aus den Übertragungsgleichungen für jeden Operationsverstärker

$$
U_1 = -\frac{R_1}{R_2}U_e - \frac{R_1}{R_3}U_{TP}
,\quad
U_{BP} = -\frac{R_4}{R}\,\frac{1}{1 + R_4Cs}\,U_1
,\quad
U_{TP} = -\frac{1}{RCs}\,U_{BP}
$$

ergeben sich die angegebenen Übertragungsfunktionen des Filters. Die Spannung $U_1$ besitzt zwar Hochpass-Verhalten, aber es handelt sich hier für niedrige Frequenzen lediglich um einen Hochpass 1. Ordnung. Wenn man einen echten Hochpass 2. Ordnung in dieser Technik benötigt, sind die Schaltungen in Abb. 12.70 und 12.71 zu bevorzugen.

Zur Dimensionierung der Schaltung ist es günstig, die Eigenfrequenz der Schaltung nicht zu verschieben. Dann wird die Empfindlichkeit gegenüber Bauteiltoleranzen minimiert. Deshalb wählt man nach Möglichkeit:

$$
\omega_g\tau = 1
\quad\Rightarrow\quad
f_g = \frac{1}{2\pi\,RC}
\qquad\qquad (12.73)
$$

Die Dimensionierung der übrigen Widerstände ergibt sich dann durch Koeffizientenvergleich mit (12.29) auf Seite 805 und (12.50) auf Seite 827 nach Vorgabe von $R_1$ und der Kapazität $C$.

Tiefpass

$$
\begin{aligned}
R   &= \frac{1}{2\pi\,C\,f_g} \\
R_2 &= -R_1 b/A_0 \\
R_3 &= R_1 b \\
R_4 &= R_1 b/a
\end{aligned}
$$

Bandpass

$$
\begin{aligned}
R   &= \frac{1}{2\pi\,C\,f_g} \\
R_2 &= -R_1 Q/A_r \\
R_3 &= R_1 \\
R_4 &= RQ
\end{aligned}
$$

Falls sich dabei unerwünscht kleine oder große Werte für die Widerstände ergeben, kann man von geänderten Vorgaben für $R_1$ und $C$ ausgehen.
<!-- page-import:0883:end -->

<!-- page-import:0884:start -->
12.12 Integratorfilter 847

Integrationszeitkonstante: $\tau = RC$             $k = R_4/(R_4 + R_5)$

Tiefpass:

$$
\frac{U_{TP}}{U_e} =
\frac{-\frac{R_3}{R_2}}
{1 + \frac{kR_3}{R_1 \parallel R_2 \parallel R_3}\tau \omega_g s_n + \frac{R_3}{R_1}\tau^2 \omega_g^2 s_n^2}
$$

Bandpass:

$$
\frac{U_{BP}}{U_e} =
\frac{\frac{R_3}{R_2}\tau \omega_g s_n}
{1 + \frac{kR_3}{R_1 \parallel R_2 \parallel R_3}\tau \omega_g s_n + \frac{R_3}{R_1}\tau^2 \omega_g^2 s_n^2}
$$

Hochpass:

$$
\frac{U_{HP}}{U_e} =
\frac{-\frac{R_1}{R_2}s_n^2}
{\frac{R_1}{R_3}\tau^2 \omega_g^2 + \frac{kR_1}{R_1 \parallel R_2 \parallel R_3}\frac{1}{\tau \omega_g}s_n + s_n^2}
$$

**Abb. 12.70.** Tiefpass- Bandpass- und Hochpass- Integrator Filter in Biquad-Struktur

Ein Beispiel für die Dimensionierung der Schaltung als Bandpass mit der Resonanzfrequenz $f_r = 1\,\mathrm{kHz}$, der Güte $Q = 10$ und der Verstärkung bei der Resonanzfrequenz $A_r = 10$ ist in Abb. 12.69 eingetragen für $R_1 = 100\,\mathrm{k\Omega}$ und $C = 1\,\mathrm{nF}$.

## 12.12.2 Integratorfilter mit zusätzlichem Hochpass-Ausgang

Bei der Schaltung in Abb. 12.70 erfolgt die Einstellung der Güte durch Rückkopplung der Bandpassspannung in den nichtinvertierenden Eingang von $OV2$. Zur Berechnung der Filterfunktion kann man der Schaltung für jeden Operationsverstärker die Ausgangsspannung entnehmen:

$$
\frac{U_e - kU_{BP}}{R_2} + \frac{U_{HP} - kU_{BP}}{R_1} + \frac{U_{TP} - kU_{BP}}{R_3} = 0
$$

$$
U_{BP} = -\frac{1}{RCs}U_{HP}
\qquad
U_{TP} = -\frac{1}{RCs}U_{BP}
$$

Zur Dimensionierung der Schaltung gibt man die Kapazität $C$ und die Widerstände $R_1$ und $R_5$ vor und berechnet daraus $R$, $R_2$, $R_3$ und $R_4$.
<!-- page-import:0884:end -->

<!-- page-import:0885:start -->
848 12. Aktive Filter

Integrationszeitkonstante: $\tau = RC$

Tiefpass:

$$
\frac{U_{TP}}{U_e} =
\frac{\dfrac{R_3}{R_2}}
{1 + \dfrac{R_3}{R_4}\tau \omega_g s_n + \dfrac{R_3}{R_1}\tau^2 \omega_g^2 s_n^2}
$$

Bandpass:

$$
\frac{U_{BP}}{U_e} =
\frac{-\,\dfrac{R_3}{R_2}\tau \omega_r s_n}
{1 + \dfrac{R_3}{R_4}\tau \omega_r s_n + \dfrac{R_3}{R_1}\tau^2 \omega_r^2 s_n^2}
$$

Hochpass:

$$
\frac{U_{HP}}{U_e} =
\frac{\dfrac{R_1}{R_2}s_n^2}
{\dfrac{R_1}{R_3\tau^2\omega_g^2} + \dfrac{R_1}{R_4\tau\omega_g}s_n + s_n^2}
$$

Bandsperre:

$$
\frac{U_{BS}}{U_e} =
\frac{-\,\dfrac{R_1}{R_2}\left(1 + \dfrac{R_3}{R_1}\tau^2\omega_r^2 s_n^2\right)}
{1 + \dfrac{R_3}{R_4}\tau \omega_r s_n + \dfrac{R_3}{R_1}\tau^2 \omega_r^2 s_n^2}
$$

**Abb. 12.71.** Universalfilter 2. Ordnung mit unabhängig einstellbaren Parametern. State Variable Filter, Biquad. Dimensionierungsbeispiel: Bandpass $Q = 10$, $f_r = 1\,\mathrm{kHz}$, $A_r = -10$ und gleichzeitig eine Bandsperre $Q = 10$, $f_r = 1\,\mathrm{kHz}$, $A_0 = -1$.

## 12.12.3 Integratorfilter mit zusätzlichem Bandsperren-Ausgang

Man kann die Schaltung in Abb. 12.70 mit einem zusätzlichen Operationsverstärker so erweitern, dass sich zusätzlich ein Bandsperren-Ausgang ergibt. Das Interessante an der Schaltung in Abb. 12.71 ist, dass sie, je nachdem, welchen Ausgang man verwendet, gleichzeitig als selektives Filter, als Sperrfilter, als Tiefpass und als Hochpass arbeitet. Zur Berechnung der Filterfunktionen entnehmen wir der Schaltung folgende Beziehungen, wenn man für die Integrationszeitkonstante $\tau = RC$ einsetzt:

$$
U_{BS} = -\frac{R_1}{R_4}U_{BP} - \frac{R_1}{R_2}U_e,\qquad
U_{HP} = -\frac{R_1}{R_3}U_{TP} - U_{BS}
$$

$$
U_{BP} = -U_{HP}/s\tau,\qquad
U_{TP} = -U_{BP}/s\tau
$$

Man kann dieses Gleichungssystem nach den gesuchten Größen auflösen und erhält dann die in Abb. 12.71 angegebenen Übertragungsfunktionen. Der Koeffizientenvergleich mit (12.29), (12.35), (12.50) und (12.65) ergibt die Dimensionierung. Sie wird besonders einfach, wenn man wieder $\tau \omega_g = 1$ wählt. Dann ergibt sich die Dimensionierung nach Vorgabe von $R_1$ und $C$:
<!-- page-import:0885:end -->

<!-- page-import:0886:start -->
12.12 Integratorfilter 849

**Abb. 12.72.** Multiplizierer zur Steuerung der Widerstände, daneben das Modell für die Funktion

| Tiefpass | Hochpass | Bandpass | Bandsperre |
|---|---|---|---|
| $R \;=\; \dfrac{1}{2\pi\, C f_g}$ | $R \;=\; \dfrac{1}{2\pi\, C f_g}$ | $R \;=\; \dfrac{1}{2\pi\, C f_g}$ | $R \;=\; \dfrac{1}{2\pi\, C f_g}$ |
| $R_2 \;=\; R_1 b_i / A_0$ | $R_2 \;=\; R_1 / A_\infty$ | $R_2 \;=\; -R_1 Q / A_r$ | $R_2 \;=\; -R_1 / A_0$ |
| $R_3 \;=\; R_1 b_i$ | $R_3 \;=\; R_1 / b_i$ | $R_3 \;=\; R_1$ | $R_3 \;=\; R_1$ |
| $R_4 \;=\; R_1 b_i / a_i$ | $R_4 \;=\; R_1 / a_i$ | $R_4 \;=\; R_1 Q$ | $R_4 \;=\; R_1 Q$ |

Aus den angegebenen Dimensionierungsgleichungen sieht man, dass bei Hoch- und Tiefpassfiltern $R_3$ und $R_4$ den Filtertyp bestimmen, und $R_2$ die Verstärkung. Bei gegebenem Filtertyp kann man die Grenzfrequenz und Verstärkung unabhängig voneinander durchstimmen.

Auch beim Betrieb als Bandpass bzw. Bandsperre lassen sich die Resonanzfrequenz, die Verstärkung und die Güte variieren, ohne dass sie sich gegenseitig beeinflussen. Das kommt daher, dass die Resonanzfrequenz ausschließlich durch das Produkt $\tau = RC$ bestimmt wird. Da diese Größen nicht in den Gleichungen für $A$ und $Q$ auftreten, ist eine Variation der Frequenz möglich, ohne dabei $A$ und $Q$ zu verändern. Diese beiden Parameter können unabhängig voneinander mit den Widerständen $R_2$ und $R_4$ eingestellt werden. Ein Beispiel für die Dimensionierung der Schaltung als kombinierte Bandpass/Bandsperre ist in Abb. 12.71 nach Vorgabe von $C = 1$ nF und $R_1 = 100\,\text{k}\Omega$ eingetragen.

## 12.12.4 Elektronische Steuerung der Filterparameter

Möchte man einen Filterparameter - z.B. die Resonanzfrequenz - mit einer Spannung steuern, kann man bei den entsprechenden Widerständen Analogmultiplizierer vorschalten, deren Verstärkung man mit einer Steuerspannung variiert, wie es in Abb. 12.72 dargestellt ist. Als wirksamen Widerstand erhält man dann:

$$
R_x \;=\; R_0 \cdot \frac{E}{U_{St}}
$$

Darin ist $E$ die Recheneinheit und $0 \leq U_{St} \leq E$ die Steuerspannung (siehe Kapitel 10.8.2 auf Seite 762). Setzt man je eine solche Schaltung anstelle der beiden frequenzbestimmenden Widerstände $R$ ein, lautet die Resonanzfrequenz des selektiven Filters:

$$
f_r \;=\; \frac{1}{2\pi\, R_0 C}\cdot \frac{U_{St}}{E}
$$

Sie wird also proportional zur Steuerspannung.

Man kann die Filterparameter auch numerisch steuern, z.B. mit einem Mikrocontroller, indem man statt der Analogmultiplizierer Digital-Analog-Umsetzer einsetzt. Sie liefern eine Ausgangsspannung, die proportional ist zum Produkt von angelegter Zahl und Referenzspannung (siehe Kapitel 17.2.1 auf Seite 1014):

$$
U_a \;=\; U_{ref}\,\frac{Z}{Z_{max}+1}
$$
<!-- page-import:0886:end -->

<!-- page-import:0888:start -->
12.12 Integratorfilter 851

$$
A(s_n) \;=\; \frac{U_a}{U_e} \;=\; \frac{d_0 + d_1 \omega_g \tau s_n + d_2 \omega_g^2 \tau^2 s_n^2}{c_0 + c_1 \omega_g \tau s_n + c_2 \omega_g^2 \tau^2 s_n^2}
$$

**Abb. 12.74.** Universalfilter 2. Ordnung mit unabhängig einstellbaren Koeffizienten. Beispiel für einen Allpass mit einer Gruppenlaufzeit von $t_{gr\,0} = 1\,\mathrm{ms}$

$$
f_r \;=\; \frac{1}{2\pi\tau} \;=\; \frac{1}{2\pi RC}\cdot\frac{Z}{Z_{\max}+1}
$$

Die Ausgänge der DA-Umsetzer müssen einen großen Dynamikbereich besitzen, wenn man die Frequenz über weite Bereiche durchstimmen möchte. Damit keine Gleichspannungsfehler in der Schaltung entstehen, sollte man daher Operationsverstärker mit niedriger Offsetspannung einsetzen.

Die Dimensionierung der Schaltung wird bei den SC-Filtern in Abschnitt 12.13.4 genauer beschrieben. Die Formeln sind nämlich dieselben, weil es sich dort ebenfalls um Integratorfilter mit nicht-invertierenden Integratoren handelt. Eine Alternative zur Realisierung durchstimmbarer Filter besteht im Einsatz von SC-Filtern, die in Kapitel 12.13 behandelt werden.

## 12.12.5 Filter mit einstellbaren Koeffizienten

Neben den Integratorfiltern mit entkoppelt einstellbaren Filterdaten, die in den letzten Abschnitten behandelt wurden, kann man auch Integratorfilter realisieren, bei denen sich die Filterkoeffizienten unabhängig voneinander einstellen lassen. Zur Berechnung der Übertragungsfunktion wendet man die Knotenregel auf die Summationspunkte in Abb. 12.74 an:

$$
\frac{d_0}{R}U_e + \frac{c_0}{R}U_a + sC\,U_1 \;=\; 0
$$

$$
-\frac{d_1}{R}U_e - \frac{c_1}{R}U_a + \frac{1}{R}U_1 + sC\,U_2 \;=\; 0
$$

$$
\frac{d_2}{R}U_e + \frac{c_2}{R}U_a + \frac{1}{R}U_2 \;=\; 0
$$

Mit $\tau = RC$ erhält man daraus die angegebene Übertragungsfunktion. Sie wird besonders einfach, wenn man $\tau\omega_g = 1$ wählt:
<!-- page-import:0888:end -->

<!-- page-import:0889:start -->
852 12. Active Filter

$$
A(s_n) \;=\; \frac{d_0 + d_1 s_n + d_2 s_n^2}{c_0 + c_1 s_n + c_2 s_n^2}
$$
(12.75)

Die bisher beschriebenen Filterarten gehen durch folgende Spezialisierungen im Zähler aus (12.75) hervor:

Tiefpass:  $d_1 = d_2 = 0$  
Hochpass:  $d_0 = d_1 = 0$  
Bandpass:  $d_0 = d_2 = 0$  
Bandsperre: $d_1 = 0,\ d_0 = d_2$  
Allpass:   $d_0 = c_0,\ d_1 = -c_1,\ d_2 = c_2$

Die Zählerkoeffizienten dürfen beliebige Vorzeichen annehmen, während die Nennerkoeffizienten aus Stabilitätsgründen immer positiv sein müssen. Möchte man das Vorzeichen eines Zählerkoeffizienten ändern, muss man die Eingangsspannung des entsprechenden Koeffizienten invertieren. Das ist hier wegen der invertierenden Integratoren bei dem 2. Integrator erforderlich, um positive Koeffizienten zu erhalten. Die Polgüte wird durch die Nennerkoeffizienten bestimmt:

$$
Q_i \;=\; \frac{\sqrt{c_0 c_2}}{c_1}
$$
(12.76)

Die Dimensionierung der Schaltung sei noch an einem Zahlenbeispiel erläutert: Gesucht ist ein Allpass 2. Ordnung. Aus Abb. 12.66 auf S. 842 entnehmen wir die Übertragungsfunktion:

$$
A(s_n) \;=\; \frac{1 - 1{,}6278\,s_n + 0{,}8832\,s_n^2}{1 + 1{,}6278\,s_n + 0{,}8832\,s_n^2}
$$
(12.77)

Die Gruppenlaufzeit bei tiefen Frequenzen soll $t_{gr\,0} = 1\,\mathrm{ms}$ betragen. Mit (12.70) erhalten wir daraus die Grenzfrequenz:

$$
\omega_g \;=\; \frac{T_{gr\,0}}{t_{gr\,0}} \;=\; \frac{3{,}2556}{1\mathrm{ms}} \;=\; 3{,}26\,\mathrm{kHz}
\quad\Rightarrow\quad
f_g \;=\; \frac{\omega_g}{2\pi} \;=\; 519\,\mathrm{Hz}
$$

Wir wählen $\tau = 1\,\mathrm{ms}$ und erhalten durch Koeffizientenvergleich der Übertragungsfunktion in (12.77) die Dimensionierung:

$$
c_0 = d_0 = 1
\qquad
c_1 = -d_1 = \frac{1{,}6278}{\omega_g\tau} = 0{,}500
\qquad
c_2 = d_2 = \frac{0{,}8832}{(\omega_g\tau)^2} = 0{,}0833
$$

Man strebt Bauelemente mit ähnlicher Größe an. Aus diesem Grund ist der kleine Wert von $c_2$ nicht optimal. Er lässt sich aber stärker als die Übrigen vergrößern, wenn man $\tau$ verkleinert. Wir wählen deshalb $\tau = 0{,}3\,\mathrm{ms}$ und erhalten:

$$
c_0 = d_0 = 1
\qquad
c_1 = -d_1 = 1{,}67
\qquad \text{und} \qquad
c_2 = d_2 = 0{,}926
$$

Wenn man $C = 1\,\mathrm{nF}$ vorgibt, folgt $R = \tau/C = 0{,}3\,\mathrm{ms}/1\,\mathrm{nF} = 300\,\mathrm{k}\Omega$ und die in Abb. 12.74 eingetragene Dimensionierung. Der Inverter INV 1 muss bei Allpässen entfallen, um das negative Vorzeichen im Zähler von (12.77) zu realisieren.

Das in Abb. 12.74 gezeigte Filter lässt sich durch Hinzufügen weiterer Integratoren auf höhere Ordnungen erweitern. Das Prinzip ist in Abb. 12.75 dargestellt. Aus den Ausgangsspannungen der einzelnen Integratoren
<!-- page-import:0889:end -->

<!-- page-import:0890:start -->
12.12 Integratorfilter 853

$$
A(s_n) \;=\; \frac{U_a}{U_e} \;=\; \frac{d_0 + d_1\omega_g\tau s_n + d_2\omega_g^2\tau^2 s_n^2 \dots + d_N\omega_g^N\tau^N s_n^N}{c_0 + c_1\omega_g\tau s_n + c_2\omega_g^2\tau^2 s_n^2 \dots + c_N\omega_g^N\tau^N s_n^N}
$$

**Abb. 12.75.** Integratorfilter $N$. Ordnung mit unabhängig einstellbaren Koeffizienten

$$
U_1 = (d_0U_e - c_0U_a)\,\frac{1}{\tau s}
$$

$$
U_2 = (d_1U_e - c_1U_a + U_1)\,\frac{1}{\tau s}
$$

$$
\vdots
$$

$$
U_a = (d_NU_e - (c_N - 1)U_a + U_{N-1})\,\frac{1}{\tau s}
$$

erhält man die angegebene Übertragungsfunktion. Alternativ kann man natürlich - wie immer - Filter 2. Ordnung gemäß Abb. 12.74 kaskadieren. Dadurch lässt sich das Filter einfacher dimensionieren und überprüfen.

## 12.12.6 Integratorfilter mit VC- und CC-Operationsverstärkern

Wie wir in Abb. 10.15 auf S. 750 gesehen haben, lassen sich auch mit CC-Operationsverstärkern Integratoren realisieren, die bei hohen Frequenzen den konventionellen Integratoren mit VV-Operationsverstärkern überlegen sind. Aus diesem Grund ist es naheliegend, CC-Integratoren auch in Integratorfiltern einzusetzen. Abbildung 12.76 zeigt ein Filter, das

Integrationszeitkonstante: $\tau = RC$

Tiefpass:

$$
\frac{U_{TP}}{U_e} = \frac{1}{1 + \frac{R}{R_1}\tau\omega_g s_n + \tau^2\omega_g^2 s_n^2}
$$

Bandpass:

$$
\frac{U_{BP}}{U_e} = \frac{\tau\omega_g s_n}{1 + \frac{R}{R_1}\tau\omega_g s_n + \tau^2\omega_g^2 s_n^2}
$$

**Abb. 12.76.** Integratorfilter 2. Ordnung mit CC-Operationsverstärkern  
Beispiel für ein Besselfilter mit einer Grenzfrequenz von 1 kHz
<!-- page-import:0890:end -->

<!-- page-import:0892:start -->
12.12 Integratorfilter 855

**Abb. 12.78.** Integratorfilter 2. Ordnung mit VC-Integratoren (OTAs).  
Beispiel für ein Besselfilter mit einer Grenzfrequenz von 1 kHz

OTA-C-Filter bezeichnet. Sie lassen sich sogar elektronisch abstimmen indem man die Steilheit verändert.

Bei Filtern in integrierten Schaltungen verwendet man vorzugsweise symmetrische Signale, weil sich dann eingekoppelte Störungen durch Differenzbildung eliminieren lassen. Derartige Filter lassen sich gut mit VC-Operationsverstärkern realisieren, die einen symmetrischen Ausgang besitzen. Um einen VC-Operationsverstärker mit symmetrischem Ausgang zu realisieren kann man von der Schaltung in Abb. 5.115 auf Seite 597 ausgehen und an dem eingangsseitigen Spannungsfolger eine zweite Stromendstufe anschließen.

Auch bei den Filtern mit symmetrischem Aufbau stellen die Integratoren das Kernstück dar. In Abb. 12.79 fließt der Ausgangsstrom $I = S \cdot U_e$ durch den Kondensator vom normalen zum negierten Ausgang. Der Verstärker selbst ist symmetrisch: Wenn man die Eingänge und die Ausgänge vertauscht, ändert sich die Funktion der Schaltung nicht.

Mit den symmetrischen Integratoren lässt sich das Integratorfilter in Abb. 12.78 in ein Filter mit symmetrischen Signalen umwandeln. Der erste Integrator in Abb. 12.80 mit dem VCOP1 wandelt das Eingangssignal in ein Stromsignal um und symmetriert es. Der zweite Integrator wird von VCOP2 realisiert. Zur symmetrischen Rückkopplung wird hier der zusätzliche Verstärker VCOP3 benötigt, dessen Eingänge vertauscht angeschlossen werden, um eine Gegenkopplung zu erzielen. Die Übertragungsfunktion der Schaltung und die Dimensionierung ist auch hier genau die gleiche wie bei der Grundschaltung in Abb. 12.76.

**Abb. 12.79.**  
Symmetrischer OTA-C Integrator

$$A(s) = \frac{U_a}{U_e} = \frac{S}{sC}$$

**Abb. 12.80.** Symmetrisches OTA-C Tiefpassfilter 2. Ordnung .  
Beispiel für ein Besselfilter mit einer Grenzfrequenz von 1 kHz
<!-- page-import:0892:end -->
