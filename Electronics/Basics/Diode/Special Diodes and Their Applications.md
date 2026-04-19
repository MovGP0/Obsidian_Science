# Special Diodes and Their Applications

<!-- page-import:0068:start -->
1.4 Spezielle Dioden und ihre Anwendung 31

**Abb. 1.29.** Brückengleichrichter

die gleichgerichtete Ausgangsspannung um \(2U_F \approx 1{,}2 \dots 2\,\mathrm{V}\) kleiner als der Betrag der Eingangsspannung:

\[
U_a \approx
\begin{cases}
0 & \text{für } |U_e| \leq 2U_F \\
|U_e| - 2U_F & \text{für } |U_e| > 2U_F
\end{cases}
\]

Abb. 1.30a zeigt die Spannungskennlinie. An den sperrenden Dioden liegt eine maximale Sperrspannung von \(|U_D|_{max} = |U_e|_{max}\) an, die kleiner sein muss als die Durchbruchspannung der Dioden.

Im Gegensatz zu den Spannungen ist das Verhältnis der Ströme betragsmäßig linear, siehe Abb. 1.30b:

\[
I_a = |I_e|
\]

Dieser Zusammenhang wird in Messgleichrichtern ausgenutzt; dazu wird die zu messende Wechselspannung über einen Spannungs-Strom-Wandler in einen Strom umgewandelt und mit einem Brückengleichrichter gleichgerichtet.

## 1.4.5 Mischer

*Mischer* werden in Datenübertragungssystemen zur Frequenzumsetzung benötigt. Man unterscheidet *passive Mischer*, die mit Dioden oder anderen passiven Bauteilen arbeiten, und *aktive Mischer* mit Transistoren. Bei den passiven Mischern wird der aus vier Dioden und zwei Übertragern mit Mittelanzapfung bestehende *Ringmodulator* am häufigsten eingesetzt. Abbildung 1.31 zeigt einen als Abwärtsmischer (*downconverter*) beschalteten Ringmodulator mit den Dioden \(D_1 \dots D_4\) und den Übertragern \(L_1 - L_2\) und \(L_3 - L_4\) [1.9]. Die Schaltung setzt das Eingangssignal \(U_{HF}\) mit der Frequenz \(f_{HF}\) mit Hilfe der *Lokaloszillator*-Spannung \(U_{LO}\) mit der Frequenz \(f_{LO}\) auf eine *Zwischenfrequenz*

a Spannungskennlinie

b Stromkennlinie

**Abb. 1.30.** Kennlinien eines Brückengleichrichters
<!-- page-import:0068:end -->

<!-- page-import:0069:start -->
32  1. Diode

**Abb. 1.31.** Ringmodulator als Abwärtsmischer

\(f_{ZF} = |f_{HF} - f_{LO}|\) um. Das Ausgangssignal \(U_{ZF}\) wird mit einem auf die Zwischenfrequenz abgestimmten Schwingkreis von zusätzlichen, bei der Umsetzung entstehenden Frequenzanteilen befreit. Der Lokaloszillator liefert eine Sinus- oder Rechteck-Spannung mit der Amplitude \(\hat{u}_{LO}\), \(U_{HF}\) und \(U_{ZF}\) sind sinusförmige Spannungen mit den Amplituden \(\hat{u}_{HF}\) bzw. \(\hat{u}_{ZF}\). Im normalen Betrieb gilt \(\hat{u}_{LO} \gg \hat{u}_{HF} > \hat{u}_{ZF}\), d.h. die Spannung des Lokaloszillators legt fest, welche Dioden leiten; bei Verwendung eines 1:1-Übertragers mit \(L_4 = L_{3a} + L_{3b}\) gilt:

\[
\begin{aligned}
U_{LO} &\geq 2U_F\\
-2U_F &< U_{LO} < 2U_F\\
U_{LO} &< -2U_F
\end{aligned}
\qquad \Rightarrow \qquad
\begin{aligned}
& D_1 \text{ und } D_2 \text{ leiten}\\
& \text{keine Diode leitet}\\
& D_3 \text{ und } D_4 \text{ leiten}
\end{aligned}
\]

Dabei ist \(U_F\) die Flussspannung der Dioden. Aufgrund des besseren Schaltverhaltens werden ausschließlich Schottky-Dioden mit \(U_F \approx 0{,}3\ \text{V}\) verwendet; der Strom durch die Dioden wird durch den Innenwiderstand \(R_{LO}\) des Lokaloszillators begrenzt.

Wenn \(D_1\) und \(D_2\) leiten, fließt ein durch \(U_{HF}\) verursachter Strom durch \(L_{2a}\) und \(D_1 - L_{3a}\) bzw. \(D_2 - L_{3b}\) in den ZF-Schwingkreis; wenn \(D_3\) und \(D_4\) leiten, fließt der Strom durch \(L_{2b}\) und \(D_3 - L_{3b}\) bzw. \(D_4 - L_{3a}\). Die Polarität von \(U_{ZF}\) bezüglich \(U_{HF}\) ist dabei verschieden, so dass durch den Lokaloszillator und die Dioden eine Umschaltung der Polarität mit der Frequenz \(f_{LO}\) erfolgt, siehe Abb. 1.32. Wenn man für \(U_{LO}\) ein Rechteck-Signal mit \(\hat{u}_{LO} > 2U_F\) verwendet, erfolgt die Polaritätsumschaltung schlagartig, d.h. der Ringmodulator multipliziert das Eingangssignal mit einem Rechteck-Signal. Von den dabei entstehenden Frequenzanteilen der Form \(|mf_{LO} + nf_{HF}|\) mit beliebigem ganzzahligem Wert

**Abb. 1.32.** Funktionsweise eines Ringmodulators
<!-- page-import:0069:end -->

<!-- page-import:0070:start -->
1.4 Spezielle Dioden und ihre Anwendung 33

für $m$ und $n = \pm 1$ filtert das ZF-Filter die gewünschte Komponente mit $m = 1, n = -1$ bzw. $m = -1, n = 1$ aus.

Der Ringmodulator ist als Bauteil mit sechs Anschlüssen – je zwei für HF-, LO- und ZF-Seite – erhältlich [1.9]. Darüber hinaus gibt es integrierte Schaltungen, die nur die Dioden enthalten und deshalb nur vier Anschlüsse besitzen. Man beachte in diesem Zusammenhang, dass sich Mischer und Brückengleichrichter trotz der formalen Ähnlichkeit in der Anordnung der Dioden unterscheiden, wie ein Vergleich von Abb. 1.31 und Abb. 1.29 zeigt.
<!-- page-import:0070:end -->

<!-- page-import:0071:start -->
[unclear]
<!-- page-import:0071:end -->

<!-- page-import:0061:start -->
24  1. Diode

$$
r_D \;\approx\; \frac{nU_T}{I_{D,A}}
\qquad\qquad (1.18)
$$

$$
C_D \;\approx\; \frac{\tau_T I_{D,A}}{nU_T} + 2C_{S0} \;=\; \frac{\tau_T}{r_D} + 2C_{S0}
\qquad\qquad (1.19)
$$

Im Sperrbereich wird $r_D$ vernachlässigt, d.h. $r_D \to \infty$, und $C_D \approx C_{S0}$ verwendet.

# 1.4 Spezielle Dioden und ihre Anwendung

## 1.4.1 Z-Diode

Z-Dioden sind Dioden mit genau spezifizierter Durchbruchspannung, die für den Dauerbetrieb im Durchbruchbereich ausgelegt sind und zur Spannungsstabilisierung bzw. -begrenzung eingesetzt werden. Die Durchbruchspannung $U_{BR}$ wird bei Z-Dioden als Z-Spannung $U_Z$ bezeichnet und beträgt bei handelsüblichen Z-Dioden $U_Z \approx 3 \ldots 300\,\mathrm{V}$. Abbildung 1.21 zeigt das Schaltsymbol und die Kennlinie einer Z-Diode.

### 1.4.1.1 Kennlinie im Durchbruchbereich

Im Durchbruchbereich gilt (1.10):

$$
I_D \;\approx\; I_{DBR} \;=\; -\,I_{BR}\,e^{-\frac{U_D+U_Z}{n_{BR}U_T}}
$$

Die Z-Spannung hängt von der Temperatur ab. Der Temperaturkoeffizient

$$
TC \;=\; \left.\frac{dU_Z}{dT}\right|_{T=300\,\mathrm{K},\,I_D=\mathrm{const.}}
$$

gibt die relative Änderung bei konstantem Strom an:

$$
U_Z(T) \;=\; U_Z(T_0)\,(1 + TC\,(T - T_0))
\qquad \text{mit } T_0 = 300\,\mathrm{K}
$$

Bei Z-Spannungen unter $5\,\mathrm{V}$ dominiert der Zener-Effekt mit negativem Temperaturkoeffizienten, darüber der Avalanche-Effekt mit positivem Temperaturkoeffizienten; typische Werte sind $TC \approx -6 \cdot 10^{-4}\,\mathrm{K}^{-1}$ für $U_Z = 3{,}3\,\mathrm{V}$, $TC \approx 0$ für $U_Z = 5{,}1\,\mathrm{V}$ und $TC \approx 10^{-3}\,\mathrm{K}^{-1}$ für $U_Z = 47\,\mathrm{V}$.

a Schaltsymbol

b Kennlinie

Abb. 1.21. Z-Diode
<!-- page-import:0061:end -->

<!-- page-import:0062:start -->
1.4 Spezielle Dioden und ihre Anwendung 25

a Schaltung

b Kennlinie

**Abb. 1.22.** Spannungsstabilisierung mit Z-Diode

Der differentielle Widerstand im Durchbruchbereich wird mit $r_Z$ bezeichnet und entspricht dem Kehrwert der Steigung der Kennlinie; mit (1.17) folgt:

$$
r_Z = \frac{dU_D}{dI_D} = \frac{n_{BR}U_T}{|I_D|} = -\frac{n_{BR}U_T}{I_D} \approx \frac{\Delta U_D}{\Delta I_D}
$$

Er hängt maßgeblich vom Emissionskoeffizienten $n_{BR}$ ab, der bei $U_Z \approx 8\,\mathrm{V}$ mit $n_{BR} \approx 1 \dots 2$ ein Minimum erreicht und zu kleineren und größeren Z-Spannungen hin zunimmt; typisch ist $n_{BR} \approx 10 \dots 20$ bei $U_Z = 3{,}3\,\mathrm{V}$ und $n_{BR} \approx 4 \dots 8$ bei $U_Z = 47\,\mathrm{V}$. Die spannungsstabilisierende Wirkung der Z-Diode beruht darauf, dass die Kennlinie im Durchbruchbereich sehr steil und damit der differentielle Widerstand $r_Z$ sehr klein ist; am besten eignen sich Z-Dioden mit $U_Z \approx 8\,\mathrm{V}$, da deren Kennlinie wegen des Minimums von $n_{BR}$ die größte Steigung hat. Für $|I_D| = 5\,\mathrm{mA}$ erhält man Werte zwischen $r_Z \approx 5 \dots 10\,\Omega$ bei $U_Z = 8{,}2\,\mathrm{V}$ und $r_Z \approx 50 \dots 100\,\Omega$ bei $U_Z = 3{,}3\,\mathrm{V}$.

## 1.4.1.2 Spannungsstabilisierung mit Z-Diode

Abbildung 1.22a zeigt eine typische Schaltung zur Spannungsstabilisierung. Für $0 \leq U_a < U_Z$ sperrt die Z-Diode und die Ausgangsspannung ergibt sich durch Spannungsteilung an den Widerständen $R_V$ und $R_L$:

$$
U_a = U_e \frac{R_L}{R_V + R_L}
$$

Wenn die Z-Diode leitet gilt $U_a \approx U_Z$. Daraus folgt für die in Abb. 1.22b gezeigte Kennlinie:

$$
U_a \approx
\begin{cases}
U_e \dfrac{R_L}{R_V + R_L} & \text{für } U_e < U_Z \left(1 + \dfrac{R_V}{R_L}\right) \\
U_Z & \text{für } U_e > U_Z \left(1 + \dfrac{R_V}{R_L}\right)
\end{cases}
$$

Der Arbeitspunkt muss in dem Bereich liegen, in dem die Kennlinie nahezu horizontal verläuft, damit die Stabilisierung wirksam ist. Aus der Knotengleichung

$$
\frac{U_e - U_a}{R_V} + I_D = \frac{U_a}{R_L}
$$

erhält man durch Differentiation nach $U_a$ den *Glättungsfaktor*

$$
G = \frac{dU_e}{dU_a} = 1 + \frac{R_V}{r_Z} + \frac{R_V}{R_L}
\overset{r_Z \ll R_V, R_L}{\approx} \frac{R_V}{r_Z}
\qquad (1.20)
$$
<!-- page-import:0062:end -->

<!-- page-import:0063:start -->
26  1. Diode

a Schaltung  b Kennlinie

**Abb. 1.23.** Spannungsbegrenzung mit Z-Diode

und den *Stabilisierungsfaktor* [1.7]:

\[
S \;=\; \frac{\dfrac{dU_e}{U_e}}{\dfrac{dU_a}{U_a}}
\;=\;
\frac{U_a}{U_e}\,\frac{dU_e}{dU_a}
\;=\;
\frac{U_a}{U_e}\,G
\;\approx\;
\frac{U_a R_V}{U_e r_Z}
\]

*Beispiel:* In einer Schaltung mit einer Versorgungsspannung \(U_b = 12\ \mathrm{V} \pm 1\ \mathrm{V}\) soll ein Schaltungsteil A mit einer Spannung \(U_A = 5{,}1\ \mathrm{V} \pm 10\ \mathrm{mV}\) versorgt werden; dabei wird ein Strom \(I_A = 1\ \mathrm{mA}\) benötigt. Man kann den Schaltungsteil als Widerstand mit \(R_L = U_A/I_A = 5{,}1\ \mathrm{k}\Omega\) auffassen und die Schaltung aus Abb. 1.22a mit einer Z-Diode mit \(U_Z = 5{,}1\ \mathrm{V}\) verwenden, wenn man \(U_e = U_b\) und \(U_a = U_A\) setzt. Der Vorwiderstand \(R_V\) muss nun so gewählt werden, dass \(G = dU_e/dU_a > 1\ \mathrm{V}/10\ \mathrm{mV} = 100\) gilt; damit folgt aus (1.20) \(R_V \approx G r_Z \ge 100 r_Z\). Aus der Knotengleichung folgt

\[
-\,I_D \;=\; \frac{U_e-U_a}{R_V} - \frac{U_a}{R_L}
\;=\;
\frac{U_b-U_A}{R_V} - I_A
\]

und aus (1.17) \(-I_D = n_{BR}U_T/r_Z\); durch Gleichsetzen erhält man mit \(R_V = G r_Z\), \(G = 100\) und \(n_{BR} = 2\):

\[
R_V \;=\; \frac{U_b-U_A-Gn_{BR}U_T}{I_A}
\;=\; 1{,}7\ \mathrm{k}\Omega
\]

Für die Ströme folgt \(I_V = (U_b-U_A)/R_V = 4{,}06\ \mathrm{mA}\) und \(|I_D| = I_V-I_A = 3{,}06\ \mathrm{mA}\). Man erkennt, dass der Strom durch die Z-Diode wesentlich größer ist als die Stromaufnahme \(I_A\) des zu versorgenden Schaltungsteils. Deshalb eignet sich diese Art der Spannungsstabilisierung nur für Teilschaltungen mit geringer Stromaufnahme. Bei größerer Stromaufnahme muss man einen Spannungsregler einsetzen, der zwar teurer ist, aber neben einer geringeren Verlustleistung auch eine bessere Stabilisierung bietet.

## 1.4.1.3 Spannungsbegrenzung mit Z-Dioden

Die Schaltung nach Abb. 1.22a kann auch zur Spannungsbegrenzung eingesetzt werden. Lässt man in Abb. 1.22a den Widerstand \(R_L\) weg, d.h. \(R_L \rightarrow \infty\), erhält man die Schaltung in Abb. 1.23a mit der in Abb. 1.23b gezeigten Kennlinie:

\[
U_a \approx
\begin{cases}
-\,U_F & \text{für } U_e \le -U_F\\
U_e & \text{für } -U_F < U_e < U_Z\\
U_Z & \text{für } U_e \ge U_Z
\end{cases}
\]
<!-- page-import:0063:end -->

<!-- page-import:0064:start -->
1.4 Spezielle Dioden und ihre Anwendung         27

a Schaltung

b Kennlinie

**Abb. 1.24.** Symmetrische Spannungsbegrenzung mit zwei Z-Dioden

Im mittleren Bereich sperrt die Diode und es gilt $U_a = U_e$. Für $U_e \geq U_Z$ bricht die Diode durch und begrenzt die Ausgangsspannung auf $U_Z$. Für $U_e \leq -U_F \approx -0{,}6\,\mathrm{V}$ arbeitet die Diode im Durchlassbereich und begrenzt negative Spannungen auf die Flussspannung $U_F$. Die Schaltung nach Abb. 1.24a ermöglicht eine symmetrische Begrenzung mit $|U_a| \leq U_Z + U_F$; dabei arbeitet im Falle der Begrenzung eine der Dioden im Durchlass- und die andere im Durchbruchbereich.

## 1.4.2 pin-Diode

Bei *pin-Dioden* $^{8}$ ist die Lebensdauer $\tau$ der Ladungsträger in der undotierten i-Schicht besonders groß. Da ein Übergang vom Durchlass- in den Sperrbetrieb erst dann eintritt, wenn nahezu alle Ladungsträger in der i-Schicht rekombiniert sind, bleibt eine leitende pin-Diode auch bei kurzen negativen Spannungsimpulsen mit einer Pulsdauer $t_P \ll \tau$ leitend. Sie wirkt dann wie ein ohmscher Widerstand, dessen Wert proportional zur Ladung in der i-Schicht und damit proportional zum mittleren Strom $\overline{I}_{D,pin}$ ist [1.8]:

$$
r_{D,pin} \approx \frac{nU_T}{\overline{I}_{D,pin}}
\qquad \text{mit } n \approx 1 \dots 2
$$

Aufgrund dieser Eigenschaft kann man die pin-Diode für Wechselspannungen mit einer Frequenz $f \gg 1/\tau$ als *gleichstromgesteuerten Wechselspannungswiderstand* einsetzen. Abbildung 1.25 zeigt die Schaltung und das Kleinsignalersatzschaltbild eines einfachen variablen Spannungsteilers mit einer pin-Diode. In Hochfrequenzschaltungen werden meist $\pi$-*Dämpfungsglieder* mit drei pin-Dioden eingesetzt, siehe Abb. 1.26; dabei erreicht man durch geeignete Ansteuerung eine variable Dämpfung bei beidseitiger Anpassung an einen vorgegebenen Wellenwiderstand, meist $50\,\Omega$. Die Kapazitäten und Induktivitäten in Abb. 1.26 bewirken eine Trennung der Gleich- und Wechselstrompfade der Schaltung. Für typische pin-Dioden gilt $\tau \approx 0{,}1 \dots 5\,\mu\mathrm{s}$; damit ist die Schaltung für Frequenzen $f > 2 \dots 100\,\mathrm{MHz} \gg 1/\tau$ geeignet.

Eine weitere wichtige Eigenschaft der pin-Diode ist die geringe Sperrschichtkapazität aufgrund der vergleichsweise dicken i-Schicht. Deshalb kann man die pin-Diode auch als Hochfrequenzschalter einsetzen, wobei aufgrund der geringen Sperrschichtkapazität bei offenem Schalter ($\overline{I}_{D,pin} = 0$) eine gute Sperrdämpfung erreicht wird. Die typische

---

$^{8}$ Die meisten pn-Dioden sind als pin-Dioden aufgebaut; dabei wird durch die i-Schicht eine hohe Sperrspannung erreicht. Die Bauteil-Bezeichnung *pin-Diode* wird dagegen nur für Dioden mit geringer Störstellendichte und entsprechend hoher Lebensdauer der Ladungsträger in der i-Schicht verwendet.
<!-- page-import:0064:end -->

<!-- page-import:0065:start -->
28  1. Diode

a Schaltung

b Ersatzschaltbild

**Abb. 1.25.** Spannungsteiler für Wechselspannungen mit pin-Diode

Schaltung eines HF-Schalters entspricht weitgehend dem in Abb. 1.26 gezeigten Dämpfungsglied, das in diesem Fall als Kurzschluss-Serien-Kurzschluss-Schalter mit besonders hoher Sperrdämpfung arbeitet.

## 1.4.3 Kapazitätsdiode

Aufgrund der Spannungsabhängigkeit der Sperrschichtkapazität kann man eine Diode als variable Kapazität betreiben; dazu wird die Diode im Sperrbereich betrieben und die Sperrschichtkapazität über die Sperrspannung eingestellt. Aus (1.12) auf Seite 19 folgt, dass der Bereich, in dem die Kapazität verändert werden kann, maßgeblich vom Kapazitätskoeffizienten \(m_S\) abhängt und mit zunehmendem Wert von \(m_S\) größer wird. Einen besonders großen Bereich von 1 : 3…10 erreicht man bei Dioden mit hyperabrupter Dotierung (\(m_S \approx 0{,}5 \dots 1\)), bei denen die Dotierung in der Nähe der pn-Grenze zunächst zunimmt, bevor der Übergang zum anderen Gebiet erfolgt [1.8]. Dioden mit diesem Dotierungsprofil werden Kapazitätsdioden (Abstimmdiode, varicap) genannt und überwiegend zur Frequenzabstimmung in LC-Schwingkreisen eingesetzt. Abbildung 1.27 zeigt das Schaltsymbol einer Kapazitätsdiode und den Verlauf der Sperrschichtkapazität \(C_S\) für einige typische Dioden. Die Verläufe sind ähnlich, nur die Diode BB512 nimmt aufgrund der starken Abnahme der Sperrschichtkapazität eine Sonderstellung ein. Man kann den Kapazitätskoeffizienten \(m_S\) aus der Steigung in der doppelt logarithmischen Darstellung ermitteln; dazu sind in Abb. 1.27 die Steigungen für \(m_S = 0{,}5\) und \(m_S = 1\) eingezeichnet.

Neben dem Verlauf der Sperrschichtkapazität \(C_S\) ist die Güte \(Q\) ein wichtiges Qualitätsmaß einer Kapazitätsdiode. Aus der Gütedefinition

**Abb. 1.26.**  
\(\pi\)-Dämpfungsglied mit drei pin-  
Dioden für HF-Anwendungen
<!-- page-import:0065:end -->

<!-- page-import:0066:start -->
# 1.4 Spezielle Dioden und ihre Anwendung

29

Abb. 1.27. Schaltsymbol und Kapazitätsverlauf von Kapazitätsdioden

\[
Q=\frac{|\operatorname{Im}\{Z\}|}{\operatorname{Re}\{Z\}}
\]

und der Impedanz

\[
Z(s)=R_B+\frac{1}{sC_S}\qquad \overset{s=j\omega}{=}\qquad R_B+\frac{1}{j\omega C_S}
\]

der Diode folgt [1.8]:

\[
Q=\frac{1}{\omega C_S R_B}
\]

Bei vorgegebener Frequenz ist \(Q\) umgekehrt proportional zum Bahnwiderstand \(R_B\). Eine hohe Güte ist demnach gleichbedeutend mit einem kleinen Bahnwiderstand und entsprechend geringen Verlusten bzw. einer geringen Dämpfung beim Einsatz in Schwingkreisen. Typische Dioden haben eine Güte von \(Q \approx 50 \dots 500\). Da man für einfache Berechnungen und für die Schaltungssimulation primär den Bahnwiderstand benötigt, wird in neueren Datenblättern zum Teil nur noch \(R_B\) angegeben.

Zur Frequenzabstimmung von LC-Schwingkreisen wird in den meisten Fällen eine der in Abb. 1.28 gezeigten Schaltungen verwendet. In Abb. 1.28a liegt die Reihenschaltung der Sperrschichtkapazität \(C_S\) der Diode und der Koppelkapazität \(C_K\) parallel zu dem aus \(L\) und \(C\) bestehenden Parallelschwingkreis. Die Abstimmspannung \(U_A > 0\) wird über die Induktivität \(L_A\) zugeführt; damit wird eine wechselspannungsmäßige Trennung des Schwingkreises von der Spannungsquelle \(U_A\) erreicht und ein Kurzschluss des Schwingkreises durch die Spannungsquelle verhindert. Man muss \(L_A \gg L\) wählen, damit sich \(L_A\) nicht auf die Resonanzfrequenz auswirkt. Die Abstimmspannung kann auch über einen Widerstand zugeführt werden, dieser belastet jedoch den Schwingkreis und führt zu einer Abnahme der Güte des Kreises. Die Koppelkapazität \(C_K\) verhindert einen Kurzschluss der Spannungsquelle \(U_A\) durch die Induktivität \(L\) des Schwingkreises. Die Resonanzfrequenz beträgt unter Berücksichtigung von \(L_A \gg L\):
<!-- page-import:0066:end -->

<!-- page-import:0067:start -->
30 1. Diode

a mit einer Diode     b mit zwei Dioden

**Abb. 1.28.** Frequenzabstimmung von LC-Kreisen mit Kapazitätsdioden

\[
\omega_R \;=\; 2\pi f_R \;=\; \frac{1}{\sqrt{L\left(C+\frac{C_S(U_A)\,C_K}{C_S(U_A)+C_K}\right)}}
\qquad
C_K \gg C_S(U_A)
\qquad
\approx \frac{1}{\sqrt{L\left(C+C_S(U_A)\right)}}
\]

Der Abstimmbereich hängt vom Verlauf der Sperrschichtkapazität und ihrem Verhältnis zur Schwingkreiskapazität \(C\) ab. Den maximalen Abstimmbereich erhält man mit \(C = 0\) und \(C_K \gg C_S\).

In Abb. 1.28b liegt die Reihenschaltung von zwei Sperrschichtkapazitäten parallel zum Schwingkreis. Auch hier wird durch die Induktivität \(L_A \gg L\) ein hochfrequenter Kurzschluss des Schwingkreises durch die Spannungsquelle \(U_A\) verhindert. Eine Koppelkapazität wird nicht benötigt, da beide Dioden sperren und deshalb kein Gleichstrom in den Schwingkreis fließen kann. Die Resonanzfrequenz beträgt in diesem Fall:

\[
\omega_R \;=\; 2\pi f_R \;=\; \frac{1}{\sqrt{L\left(C+\frac{C_S(U_A)}{2}\right)}}
\]

Auch hier wird der Abstimmbereich mit \(C = 0\) maximal; allerdings wird dabei nur die halbe Sperrschichtkapazität wirksam, so dass man bei gleicher Resonanzfrequenz im Vergleich zur Schaltung nach Abb. 1.28a entweder die Sperrschichtkapazität oder die Induktivität doppelt so groß wählen muss. Ein wesentlicher Vorteil der symmetrischen Anordnung der Dioden ist die bessere Linearität bei großen Amplituden im Schwingkreis; dadurch wird die durch die Nichtlinearität der Sperrschichtkapazität verursachte Abnahme der Resonanzfrequenz bei zunehmender Amplitude weitgehend vermieden [1.3].

## 1.4.4 Brückengleichrichter

Die in Abb. 1.29 gezeigte Schaltung mit vier Dioden wird *Brückengleichrichter* genannt und zur Vollweg-Gleichrichtung in Netzteilen und Wechselspannungsmessern eingesetzt. Bei Brückengleichrichtern für Netzteile unterscheidet man zwischen Hochvolt-Brückengleichrichtern, die zur direkten Gleichrichtung der Netzspannung eingesetzt werden und deshalb eine entsprechend hohe Durchbruchspannung aufweisen müssen (\(U_{BR} \geq 350\ \mathrm{V}\)), und Niedervolt-Brückengleichrichtern, die auf der Sekundärseite eines Netztransformators eingesetzt werden; in Kapitel 16 wird dies näher beschrieben. Von den vier Anschlüssen werden zwei mit \(\sim\) und je einer mit \(+\) und \(-\) gekennzeichnet.

Bei positiven Eingangsspannungen leiten \(D_1\) und \(D_3\), bei negativen \(D_2\) und \(D_4\); die jeweils anderen Dioden sperren. Da der Strom immer über zwei leitende Dioden fließt, ist
<!-- page-import:0067:end -->

<!-- page-import:0981:start -->
944  16. Stromversorgung

**Abb. 16.26.**  
Stabilisierung hoher Spannungen  
mit Z-Dioden in Sperrrichtung  
Beispiel: Z-Dioden mit 6 V und 10 V

**Abb. 16.27.**  
Stabilisierung kleiner Spannungen  
mit Dioden in Durchlassrichtung  
Beispiel: Eine, zwei und drei Dioden

gen setzt man deshalb normale Dioden ein, die in Durchlassrichtung betrieben werden; diese Variante zeigt Abb. 16.27. In Sperrrichtung besitzen Normale Dioden keine definierte Kennlinie; es dürfen auch keine nennenswerten Sperrströme fließen. Dagegen sind Z-Dioden für den Betrieb in Sperrrichtung vorgesehen.

Die Güte der Stabilisierung wird durch die Unterdrückung von Eingangsspannungsschwankungen, den Glättungsfaktor (Line Regulation) $\Delta U_e/\Delta U_a$ charakterisiert. Seine Größe lässt sich in dem Kleinsignalmodell in Abb. 16.28 entnehmen:

$$
G \;=\; \frac{\Delta U_e}{\Delta U_a} \;=\; \frac{u_e}{u_a} \;=\; \frac{r_Z + R}{r_Z} \;\approx\; \frac{R}{r_Z} \;=\; 10\dots100
$$

Darin ist $r_Z$ der differentielle Widerstand der Z-Diode im gewählten Arbeitspunkt. Er ist in erster Näherung umgekehrt proportional zum fließenden Strom. Man kann also bei gegebener Eingangsspannung durch Vergrößerung des Vorwiderstands $R$ keine Verbesserung der Stabilisierung erreichen. Ein wesentlicher Gesichtspunkt für die Wahl des Diodenstroms ist das Rauschen der Z-Spannung. Es nimmt bei kleinen Strömen stark zu. Man dimensioniert den Widerstand $R$ so, dass bei der minimalen Eingangsspannung und dem maximalen Ausgangsstrom noch ein ausreichender Diodenstrom fließt. Ein praktisches Dimensionierungsbeispiel gibt es in Kapitel 1.4.1.2 auf S. 25.

**Abb. 16.28.**  
Kleinsignalmodell zur  
Stabilisierung

**Abb. 16.29.**  
Verbesserte Stabilisierung durch  
zusätzliche Stromquelle
<!-- page-import:0981:end -->

<!-- page-import:1629:start -->
1592  26. Oszillatoren

$f_R = 97{,}7 \ldots 102{,}3\,\mathrm{MHz}$

**Abb. 26.98.**  
Beispiel: Dimensionierte Schaltung ($R_P$ repräsentiert die Verluste und ist kein Element der realen Schaltung)

zeigt das Ergebnis; dabei haben wir $C_{V,min}$ auch als Diagonale dargestellt, um den Vergleich mit $C_K$ zu vereinfachen. Für $L = 100\,\mathrm{nH}$ entnehmen wir $C_{V,min} = 48{,}7\,\mathrm{pF}$ und $C_K = 36\,\mathrm{pF}$. Der gefundene Wert für $C_{V,min}$ liegt unterhalb der minimalen Kapazität $C_{V,min} = 52\,\mathrm{pF}$ der Diode, so dass wir einen geringfügig nach unten verschobenen Frequenzbereich erhalten; wir führen deshalb eine Feinabstimmung durch, indem wir den Abstimmbereich geringfügig verringern. Für $\pm 2{,}34\%$ erhalten wir $C_{V,min} = 52\,\mathrm{pF}$ und $C_K = 34{,}5\,\mathrm{pF}$.

Im allgemeinen unterscheidet sich der gefundene Wert für $C_{V,min}$ wesentlich stärker von der minimalen Kapazität der Diode, so dass man mehrere Dioden parallel oder in Reihe schalten oder andere Dioden verwenden muss, um eine praktikable Lösung zu erhalten.

Abbildung 26.98 zeigt die dimensionierte Schaltung. Die Abstimmspannung $U_A$ muss über einen Widerstand $R_A$ zugeführt werden, damit die Diode nicht durch die Spannungsquelle kleinsignalmäßig kurzgeschlossen wird. Der Widerstand muss so groß gewählt werden, dass die Güte des Schwingkreises nicht nennenswert reduziert wird; aufgrund der kapazitiven Ankopplung mit dem minimalen Teilerfaktor $1 + C_{V,min}/C_K \approx 2{,}5$ ist dazu

$$
R_A \left(1 + \frac{C_{V,min}}{C_K}\right)^2 \gg R_P
$$

erforderlich. Wir wählen $R_A = 22\,\mathrm{k}\Omega$.

Anstelle von $R_A$ kann man auch eine Induktivität $L_A \gg L$ einsetzen, siehe Abschnitt 1.4.3 und Abb. 1.28 auf Seite 30. Man verwendet dazu eine Induktivität mit geringer Güte, deren Parallelresonanzfrequenz etwa der Resonanzfrequenz des Kreises entspricht; dadurch wird die Impedanz maximal. Bei diskret aufgebauten Oszillatoren oder integrierten Oszillatoren mit externen Kapazitätsdioden hat man die Wahl zwischen einem Widerstand $R_A$ oder einer Induktivität $L_A$; dagegen muss man bei vollständig integrierten Oszillatoren einen Widerstand $R_A$ verwenden, da eine ausreichend große Induktivität $L_A$ nicht integriert werden kann.

Die Ankopplung über $C_K$ hat auch zur Folge, dass an der Diode nur die $(1/2{,}5)$-fache Schwingkreisspannung auftritt. Da die Amplitude der Schwingkreisspannung bei dieser Schaltung ohnehin bereits sehr klein ist – sie beträgt nach Abb. 26.28 auf Seite 1530 etwa $180\,\mathrm{mV}$ –, bleibt die Amplitude an der Diode hier sehr klein. Bei Schaltungen mit größeren Amplituden muss man mit einer Schaltungssimulation prüfen, ob die Amplitude an den Dioden so groß wird, dass das Verhalten des Oszillators beeinträchtigt wird. Gegebenenfalls muss man eine Dimensionierung mit einem größeren Teilerfaktor ermit-
<!-- page-import:1629:end -->
