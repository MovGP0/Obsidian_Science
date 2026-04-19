# Oscillators with Transmission Lines

<!-- page-import:1589:start -->
1552  26. Oszillatoren

a Meißner-Oszillator

b Armstrong-Oszillator

**Abb. 26.53.** Oszillatoren mit Übertragern

$C$ und der Phasenkorrekturkapazität $C_k$ eingestellt. Diese Oszillatoren werden heute nicht mehr verwendet.

## 26.2 Oszillatoren mit Leitungen

Bei Frequenzen im GHz-Bereich werden die Induktivitäten und Kapazitäten von LC-Resonanzkreisen so klein, dass ein Aufbau mit diskreten Bauelementen nicht mehr möglich ist. Man muss dann Resonanzkreise mit Leitungen verwenden. In den meisten Fällen wird eine einseitig kurzgeschlossene Leitung der Länge $l < \lambda/4$ eingesetzt, die zusammen mit einer externen Kapazität einen Parallelschwingkreis bildet. Als Leitung kann man eine gewöhnliche Koaxialleitung, eine Streifenleitung oder einen keramischen Koaxialresonator verwenden.

Abbildung 26.54 zeigt das Prinzip und zwei typische Ausführungen von Oszillatoren mit Leitungen. In der Praxis werden fast ausschließlich Colpitts-Oszillatoren in Basis- oder Kollektorschaltung verwendet; dabei werden die Elemente $L, C_1, R_P$ des Resonanzkreises durch die Leitung gebildet, während der kapazitive Spannungsteiler $C_2, C_3$ erhalten bleibt, wie ein Vergleich von Abb. 26.54b mit Abb. 26.33a auf Seite 1536 und Abb. 26.54c mit Abb. 26.27a auf Seite 1529 zeigt.

a Prinzipschaltung

b Colpitts-Oszillator in Kollektorschaltung

c Colpitts-Oszillator in Basisschaltung

**Abb. 26.54.** Oszillatoren mit Leitungen
<!-- page-import:1589:end -->

<!-- page-import:1590:start -->
26.2 Oszillatoren mit Leitungen 1553

**Abb. 26.55.** Ersatzschaltbild für eine einseitig kurzgeschlossene Leitung mit $l \leq \lambda/4$ bei der Frequenz $f = v/\lambda$ ($\lambda =$ Wellenlänge, $v =$ Ausbreitungsgeschwindigkeit der Leitung)

## 26.2.1 Leitungsresonatoren

### 26.2.1.1 Ersatzschaltbild

Abbildung 26.55 zeigt das Ersatzschaltbild einer einseitig kurzgeschlossenen Leitung mit $l \leq \lambda/4$. Die Elemente des Ersatzschaltbilds hängen von der Frequenz ab. Die Leitung verhält sich demnach nur in der unmittelbaren Umgebung der Frequenz $f = v/\lambda$ wie ein Parallelschwingkreis mit den angegebenen Werten; für andere Frequenzen erhält man andere Werte.

### 26.2.1.2 Betriebsbedingungen

Bei der *Leerlauf-Resonanzfrequenz (self-resonant frequency, SRF)* $f_0$ entspricht die Länge $l$ der Leitung einem Viertel der Wellenlänge:

$$
f = f_0 \Rightarrow l = \frac{\lambda}{4} = \frac{v}{4f_0} = \frac{c}{4f_0\sqrt{\varepsilon_r}} \qquad \text{mit } c = 3 \cdot 10^8\,\text{m/s}
$$

(26.19)

Die Leerlauf-Resonanzfrequenz ist die niedrigste Frequenz, bei der eine Parallelresonanz der Leitung auftritt. Weitere Parallelresonanzen treten bei allen ungeradzahligen Vielfachen von $f_0$ auf; deshalb muss man sicherstellen, dass die Schleifenverstärkung eines Oszillators oberhalb der gewünschten Resonanzfrequenz abnimmt, damit der Oszillator nicht auf einer dieser Vielfachen schwingt. In einer Schaltungssimulation kann man dies nur prüfen, wenn man für die Leitung ein richtiges Leitungsmodell und nicht das Ersatzschaltbild aus Abb. 26.55 verwendet. Wir verwenden das Ersatzschaltbild deshalb nur zur Dimensionierung von Oszillatoren und setzen in der Schaltungssimulation ein Leitungsmodell ein.

Durch die zusätzliche Kapazität $C_V$ des Verstärkers wird die Resonanzfrequenz zu niedrigeren Frequenzen verschoben; deshalb gilt für die Resonanzfrequenz des Oszillators:

$$
f_R < f_0
$$

Da die Elemente des Ersatzschaltbilds frequenzabhängig sind und für $f = f_R$ berechnet werden müssen, kann man die Abhängigkeit der Resonanzfrequenz von $C_V$ nicht direkt angeben; vielmehr muss man $f_R < f_0$ vorgeben, die Elemente $L(f_R)$ und $C_P(f_R)$ berechnen und damit die zugehörige Kapazität $C_V(f_R)$ ermitteln:

$$
\omega_R^2 L(f_R)\,[C_P(f_R) + C_V] \stackrel{!}{=} 1
\Rightarrow
C_V(f_R) = \frac{1}{\omega_R^2 L(f_R)} - C_P(f_R)
$$

(26.20)

### 26.2.1.3 Berechnung der Elemente

Wir gehen vom Reflexionsfaktor $r_2 = -1$ am kurzgeschlossenen Ende der Leitung aus und berechnen den zugehörigen Reflexionsfaktor $r_1$ am Eingang der Leitung:
<!-- page-import:1590:end -->

<!-- page-import:1591:start -->
1554  26. Oszillatoren

$$
r_1 \overset{(21.41)}{=} r_2 e^{-2\alpha_L l} e^{-2j\beta_L l}\bigg|_{r_2=-1} = -e^{-2\alpha_L l} e^{-2j\beta_L l}
$$

Dabei ist $\alpha_L$ die Dämpfungskonstante der Leitung bei der Frequenz $f_R$,

$$
\beta_L = \frac{2\pi}{\lambda} = \frac{2\pi f_R}{v}
$$

die Ausbreitungskonstante und $v$ die Ausbreitungsgeschwindigkeit der Wellen auf der Leitung. Daraus folgt unter Verwendung von (26.19):

$$
r_1 = -e^{-2\alpha_L l} e^{-j\pi f_R/f_0}
= -e^{-2\alpha_L l}\left[\cos(\pi f_R/f_0) - j\,\sin(\pi f_R/f_0)\right]
$$

Für die Admittanz $Y$ am Eingang erhält man:

$$
Y = \frac{1}{Z_W}\frac{1-r_1}{1+r_1}
= \frac{1}{Z_W}\frac{1-e^{-4\alpha_L l}-j2e^{-2\alpha_L l}\sin(\pi f_R/f_0)}{1+e^{-4\alpha_L l}-2e^{-2\alpha_L l}\cos(\pi f_R/f_0)}
$$

Durch Gleichsetzen mit der Admittanz

$$
Y = \frac{1}{R_P} + j2\pi f_R C_P - \frac{1}{j2\pi f_R L}
$$

eines Parallelschwingkreises und Annahme einer geringen Dämpfung mit $\alpha_L l \ll 1$ erhält man nach einer umfangreichen Rechnung:

$$
L(f_R) = \frac{Z_W}{\pi f_R}\,\frac{1-\cos(\pi f_R/f_0)}{\pi f_R/f_0+\sin(\pi f_R/f_0)}
\qquad (26.21)
$$

$$
C_P(f_R) = \frac{1}{4\pi f_R Z_W}\,\frac{\pi f_R/f_0-\sin(\pi f_R/f_0)}{1-\cos(\pi f_R/f_0)}
\qquad (26.22)
$$

$$
R_P(f_R) = \frac{Z_W}{2\alpha_L(f_R)\,l}\,\left[1-\cos(\pi f_R/f_0)\right]
\qquad (26.23)
$$

Wir schreiben hier ausdrücklich $\alpha_L(f_R)$, da $\alpha_L$ gemäß (21.16) und (21.17) auf Seite 1151 von der Frequenz abhängt. Bei der Leerlauf-Resonanzfrequenz $f_0$ gilt:

$$
L(f_0) = \frac{2Z_W}{\pi^2 f_0}, \qquad
C_P(f_0) = \frac{1}{8f_0 Z_W}, \qquad
R_P(f_0) = \frac{Z_W}{\alpha_L(f_0)\,l}
\qquad (26.24)
$$

Für die zur Resonanzabstimmung erforderliche Kapazität $C_V$ folgt aus (26.20):

$$
C_V(f_R) = \frac{1}{2\pi f_R Z_W}\,\frac{\sin(\pi f_R/f_0)}{1-\cos(\pi f_R/f_0)}
\qquad (26.25)
$$

Für $f_R=f_0$ gilt erwartungsgemäß $C_V(f_0)=0$.

Wenn die Verluste der Kapazität $C_V$ vernachlässigbar klein sind, beträgt die Güte:

$$
Q(f_R) = \frac{R_P(f_R)}{2\pi f_R L(f_R)}
= \frac{\pi f_R/f_0+\sin(\pi f_R/f_0)}{4\alpha_L(f_R)\,l}
\qquad (26.26)
$$

Für $f_R=f_0$ erhält man die Leerlaufgüte $Q(f_0)$, die auch mit dem Formelzeichen $Q_0$ bezeichnet wird:

$$
Q(f_0) = \frac{\pi}{4\alpha_L(f_0)\,l}
\qquad (26.27)
$$

Bei Koaxialleitungen dominieren in der Regel die ohmschen Verluste; dann gilt
<!-- page-import:1591:end -->

<!-- page-import:1592:start -->
26.2 Oszillatoren mit Leitungen 1555

Abb. 26.56. Normierte Parameter eines Leitungsresonators

$\alpha_L \sim \sqrt{f} \quad \Rightarrow \quad \frac{\alpha_L(f_R)}{\alpha_L(f_0)}=\sqrt{f_R/f_0}$

$Q(f_0)\sim \frac{1}{\alpha_L(f_0)\cdot l}\sim \frac{1}{\sqrt{f_0}\cdot 1/f_0}=\sqrt{f_0}$

Die Leerlaufgüte nimmt demnach mit der Wurzel aus der Frequenz zu, bis sich die dielektrischen Verluste bemerkbar machen und die Güte begrenzen.

In Abb. 26.56 haben wir die normierten Parameter eines Leitungsresonators für den Fall $\alpha_L \sim \sqrt{f}$ dargestellt; dazu haben wir die Parameter auf ihren Wert bei der Leerlauf-Resonanzfrequenz $f_0$ normiert. Die Kapazität $C_V$ haben wir auf $C_P(f_0)$ normiert. Ausgehend von $f_R/f_0 = 1$ nimmt die Induktivität $L$ mit abnehmender Resonanzfrequenz zu; die Kapazität $C_P$ und der Verlustwiderstand $R_P$ nehmen ab. Der typische Arbeitsbereich ist $f_R/f_0 > 0{,}5$. Die Güte bleibt im Arbeitsbereich etwa konstant. Das schwach ausgeprägte Maximum der Güte im Bereich von $f_R/f_0 \approx 0{,}6$ ist für die Praxis unbedeutend, da die Verluste der Kapazität $C_V$ noch nicht berücksichtigt sind.

#### 26.2.1.4 Praktische Leitungsresonatoren

##### 26.2.1.4.1 Festmantel-Koaxialleitungen

Diese Koaxialleitungen (semi-rigid coaxial cable) haben einen festen, für einmalige Biegung geeigneten Kupfermantel und werden normalerweise als fest installierte HF-Übertragungsleitungen verwendet. Durch den Kupfermantel und die Verwendung spezieller Dielektrika (low density PTFE, $\varepsilon_r \approx 1{,}7$) wird selbst bei kleiner Bauform eine niedrige [unclear]
<!-- page-import:1592:end -->

<!-- page-import:1593:start -->
1556 26. Oszillatoren

Dämpfung erzielt. Typische Vertreter sind die in Abb. 21.6 auf Seite 1152 genannten Typen UT-141C-LL und UT-070-LL mit einem Dämpfungsbelag:

$$
a' = 0{,}01 \dots 0{,}02\,\mathrm{dB/m}\cdot \sqrt{f/\mathrm{MHz}} = 0{,}32 \dots 0{,}63\,\mathrm{dB/m}\cdot \sqrt{f/\mathrm{GHz}}
$$

Mit der Ausbreitungsgeschwindigkeit $v = c/\sqrt{\varepsilon_r} \approx 2{,}3 \cdot 10^8\,\mathrm{m/s}$ folgt für die Länge $l$, den Dämpfungsfaktor $\alpha_L l$ und die Güte $Q$:

$$
l = \frac{v}{4f_0} = \frac{57{,}5\,\mathrm{mm}}{f/\mathrm{GHz}}
$$

$$
\alpha_L(f_0)\,l = 0{,}115\,\mathrm{m}^{-1}\cdot \frac{a'}{\mathrm{dB/m}}\cdot l = \frac{(2{,}1 \dots 4{,}2)\cdot 10^{-3}}{\sqrt{f/\mathrm{GHz}}}
$$

$$
Q(f_0) = \frac{\pi}{4\,\alpha_L(f_0)\,l} = (190 \dots 380)\cdot \sqrt{f/\mathrm{GHz}}
$$

Die Güte nimmt mit der Wurzel aus der Frequenz zu und erreicht bei 10 GHz Werte über 1000.

*Beispiel:* Wir dimensionieren einen Leitungsresonator mit einer 50 $\Omega$-Koaxialleitung des Typs UT-141C-LL für $f_R = 2\,\mathrm{GHz}$. Aus Abb. 21.6 auf Seite 1152 entnehmen wir die Parameter $\varepsilon_r = 1{,}68$, $k_1 = 0{,}01$ und $k_2 = 8 \cdot 10^{-6}$. Aus (21.17) erhalten wir mit $f_R = 2000\,\mathrm{MHz}$ den Dämpfungsbelag $a' \approx 0{,}46\,\mathrm{dB/m}$ und aus (21.16) die Dämpfungskonstante $\alpha_L \approx 0{,}053\,\mathrm{m}^{-1}$. Um eine ausreichend große Kapazität $C_V$ für den Verstärker zu erhalten, wählen wir $f_R/f_0 = 0{,}8$; damit folgt aus (26.21), (26.22) und (26.25) $L = 4{,}6\,\mathrm{nH}$, $C_P = 0{,}85\,\mathrm{pF}$ und $C_V = 0{,}52\,\mathrm{pF}$. Die Länge erhalten wir mit $f_0 = f_R/0{,}8 = 2{,}5\,\mathrm{GHz}$ und $\varepsilon_r = 1{,}68$ aus (26.19): $l \approx 23\,\mathrm{mm}$. Damit folgt aus (26.23) und (26.26) $R_P \approx 37\,\mathrm{k}\Omega$ und $Q \approx 630$.

Induktivitäten mit $L \approx 5\,\mathrm{nH}$ sind zwar noch als diskrete Bauelemente erhältlich, erreichen aber bei $f_R = 2\,\mathrm{GHz}$ nur eine Güte $Q_L \approx 200$, siehe Abb. 23.4 auf Seite 1287. Da die Güte in beiden Fällen proportional zur Wurzel aus der Frequenz ist, erzielt man mit Koaxialleitungen auch bei niedrigen Frequenzen höhere Güten als mit einem LC-Schwingkreis. Dem Einsatz von Leitungsresonatoren steht demnach in der Praxis nur die mit abnehmender Frequenz zunehmende Länge der Leitung entgegen.

Der hochohmige Verlustwiderstand $R_P$ ist ungünstig, da der effektive Verlustwiderstand $R_{PV}$ des Verstärkers in diesem Fall ebenfalls hochohmig sein muss, damit die Güte erhalten bleibt. Die Bedingung $R_{PV} > R_P$, die für eine relative Schleifengüte $Q_{LG}/Q > 0{,}5$ erforderlich ist, kann in der Praxis oft nicht eingehalten werden.

#### 26.2.1.4.2 Keramische Koaxialresonatoren

Das obige Beispiel zur Dimensionierung eines Leitungsresonators mit einer Koaxialleitung offenbart zwei Nachteile:

- Bei Frequenzen unter 2 GHz werden die Leitungen für den kompakten Aufbau eines Oszillators zu lang.
- Der Parallelwiderstand $R_P$ ist zu hoch; dadurch wird die Güte durch den effektiven Verlustwiderstand $R_{PV}$ des Verstärkers in der Praxis oft erheblich reduziert.

Beide Nachteile kann man umgehen, indem man die prinzipielle Bauform einer Koaxialleitung beibehält, aber ein Dielektrikum mit einer höheren relativen Dielektrizitätskonstante $\varepsilon_r$ verwendet; es gilt:
<!-- page-import:1593:end -->

<!-- page-import:1594:start -->
26.2 Oszillatoren mit Leitungen 1557

Abb. 26.57.  
Aufbau eines keramischen Koaxialresonators

versilberte Oberflächen  
(Bohrung, Mantel, Rückseite)

Keramik-  
körper

Anschluss

$l \sim \frac{1}{\sqrt{\varepsilon_r}}, \quad Z_W \sim \frac{1}{\sqrt{\varepsilon_r}}, \quad \alpha_L \sim \sqrt{\varepsilon_r} \quad \Rightarrow \quad R_P \sim \frac{1}{\sqrt{\varepsilon_r}}, \quad Q \sim \mathrm{const}.$

Man verwendet einen zylindrischen Keramikkörper mit zentraler Bohrung, der mit Ausnahme der Stirnseite versilbert wird, siehe Abb. 26.57. Die Bohrung, die den Innenleiter bildet, wird auf der Stirnseite mit einem Anschlussbein kontaktiert; die Außenseite wird flächig mit der Trägerplatine verlötet. Als Dielektrikum werden Calzium-Magnesium-Titanat (CaMgTi, $\varepsilon_r \approx 20$), Barium-Niobate (Ba[…]Nb, $\varepsilon_r \approx 35 \dots 45$) und Barium-Titanate (Ba[…]Ti, $\varepsilon_r \approx 75 \dots 90$) verwendet.

Die elektromagnetischen Wellen breiten sich im Dielektrikum aus. Für den Wellenwiderstand gilt:

$$
Z_W \approx \frac{60\,\Omega}{\sqrt{\varepsilon_r}} \ln \left(1{,}08 \cdot \frac{w}{d}\right) \approx 6 \dots 25\,\Omega
$$

Die Leerlaufgüte $Q(f_0)$ bzw. $Q_0$ entnimmt man dem Datenblatt. Bei niedrigen Frequenzen dominieren die ohmschen Verluste und die Leerlaufgüte nimmt mit $Q(f_0) \sim \sqrt{f_0}$ zu. Mit zunehmender Frequenz werden die dielektrischen Verluste dominant und die Leerlaufgüte geht gegen einen Grenzwert $Q_{max}$, der je nach Baugröße und Dielektrikum im Bereich $Q_{max} \approx 200 \dots 1000$ liegt. Tabelle 26.58 zeigt typische Werte.

Die Elemente $L$ und $C_P$ des Ersatzschaltbilds werden mit (26.21) und (26.22) auf Seite 1554 aus dem Wellenwiderstand $Z_W$, der Leerlauf-Resonanzfrequenz $f_0$ des Resonators und der Resonanzfrequenz $f_R$ berechnet. Zur Berechnung des Verlustwiderstands $R_P$ mit (26.23) wird die Dämpfungskonstante $\alpha_L(f_R)$ benötigt, die man im allgemeinen nicht kennt. Wenn die Resonanzfrequenz relativ nahe bei der Leerlauf-Resonanzfrequenz liegt, kann man ersatzweise den Verlustwiderstand bei der Leerlauf-Resonanzfrequenz verwenden:

$$
\frac{f_R}{f_0} > 0{,}7 \quad \Rightarrow \quad R_P(f_R) \approx R_P(f_0) \overset{(26.24)}{=} \frac{Z_W}{\alpha_L(f_0)\,l} \overset{(26.27)}{=} \frac{4 Z_W Q(f_0)}{\pi} \qquad (26.28)
$$

*Beispiel:* Wir beziehen uns auf das obige Beispiel zur Dimensionierung eines Leitungsresonators für $f_R = 2\,\mathrm{GHz}$, verwenden nun aber anstelle einer Koaxialleitung einen keramischen Koaxialresonator der Bauform LP aus Abb. 26.58 mit $\varepsilon_r = 20$, $Z_W = 20\,\Omega$, $f_0 = 2{,}5\,\mathrm{GHz}$ und $Q(f_0) \approx 480$. Aus (26.21), (26.22), (26.25) und (26.28) erhalten wir $L = 1{,}8\,\mathrm{nH}$, $C_P = 2{,}1\,\mathrm{pF}$, $C_V = 1{,}3\,\mathrm{pF}$ und $R_P \approx 12\,\mathrm{k}\Omega$. Wenn wir annehmen, daß der Verstärker einen effektiven Verlustwiderstand $R_{PV} = 20\,\mathrm{k}\Omega$ besitzt, folgt für die Schleifengüte:
<!-- page-import:1594:end -->

<!-- page-import:1595:start -->
1558 26. Oszillatoren

| Bauform | $w$ [mm] | $d$ [mm] | $\varepsilon_r$ | $Zw$ [$\Omega$] | 500 MHz | 750 MHz | 1 GHz | 2 GHz | 3 GHz |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| HP | 12 | 3,3 | 20 | 18 |  |  | 920 |  |  |
|  |  |  | 39 | 13 |  | 800 |  |  |  |
|  |  |  | 90 | 8,6 | 600 |  |  |  |  |
| SP | 6 | 2,4 | 20 | 13 |  |  | 500 | 620 |  |
|  |  |  | 39 | 9,5 |  | 420 | 480 |  |  |
|  |  |  | 90 | 6,3 | 300 | 350 | 380 |  |  |
| LP | 4 | 1 | 20 | 20 |  |  | 350 | 460 | 500 |
|  |  |  | 39 | 14 |  | 280 | 320 | 440 |  |
|  |  |  | 90 | 9,3 | 210 | 260 | 280 |  |  |
| SM | 2 | 0,8 | 20 | 13 |  |  | 180 | 230 | 260 |
|  |  |  | 39 | 9,5 |  | 150 | 170 | 220 |  |
|  |  |  | 90 | 6,3 | 100 | 130 | 150 |  |  |

HP: high profile, SP: standard profile, LP: low profile, SM: sub-miniature profile

**Abb. 26.58.** Typische Kennwerte von keramischen Koaxialresonatoren

$$
Q_{LG} = Q\,\frac{R_P \parallel R_{PV}}{R_P} = Q\,\frac{R_{PV}}{R_P + R_{PV}} = 480 \cdot \frac{20}{12 + 20} = 300
$$

Für die Koaxialleitung mit $R_P = 37\,\mathrm{k}\Omega$ und $Q = 630$ folgt:

$$
Q_{LG} = 630 \cdot \frac{20}{37 + 20} = 221
$$

Obwohl die Koaxialleitung eine höhere Leerlaufgüte besitzt und die Leerlauf-Resonanzfrequenz $f_0 = 2{,}5\,\mathrm{GHz}$ für keramische Koaxialresonatoren bereits relativ hoch ist, wird mit dem keramischen Koaxialresonator eine höhere Schleifengüte erzielt; er ist mit

$$
l = \frac{c}{4\,f_0\,\sqrt{\varepsilon_r}} = \frac{3 \cdot 10^8\,\mathrm{m/s}}{4 \cdot 2{,}5 \cdot 10^9\,\mathrm{Hz} \cdot \sqrt{20}} \approx 6{,}7\,\mathrm{mm}
$$

auch deutlich kürzer als die Koaxialleitung mit $l = 23\,\mathrm{mm}$. Mit abnehmender Frequenz nehmen die Vorteile keramischer Koaxialresonatoren weiter zu.

#### 26.2.1.4.3 Streifenleitungen

Diese Leitungen haben wir im Abschnitt 21.2.1.8 auf Seite 1156 beschrieben. Sie können auf den Substraten diskreter und integrierter HF-Schaltungen hergestellt werden; typische Materialien sind Epoxydharz, Teflon, Aluminiumoxid-Keramik und Quarz (SiO$_2$, $\varepsilon_r = 3{,}8$) bei diskreten und Gallium-Arsenid (GaAs, $\varepsilon_r = 12{,}9$) bei integrierten Schaltungen. Der Dämpfungsbelag hängt von zahlreichen Faktoren ab, ist aber generell höher als bei hochwertigen Koaxialleitungen.

In der Praxis werden Streifenleitungen meist in Verbindung mit einem *dielektrischen Resonator* (*dielectric resonator*, DR) eingesetzt; dabei handelt es sich um zylindrische Resonatoren mit einem Durchmesser $d = 2 \dots 10\,\mathrm{mm}$ und einer Höhe $h \approx 0{,}4\,d$. Als Materialien werden Zirkonium- und Barium-Titanate verwendet. Einige Ausführungen haben eine axiale Bohrung. Abbildung 26.59 zeigt die beiden typischen Ausführungen und die elektromagnetischen Felder bei Resonanz. Je nach Material und Baugröße liegen die Resonanzfrequenzen im Bereich $f_0 = 1 \dots 50\,\mathrm{GHz}$ mit einer Güte $Q \approx 10000$.
<!-- page-import:1595:end -->

<!-- page-import:1596:start -->
26.2 Oszillatoren mit Leitungen 1559

a ohne Bohrung  
b mit Bohrung  
c elektromagnetische Felder

**Abb. 26.59. Dielektrische Resonatoren**

Bringt man einen dielektrischen Resonator in die Nähe einer Streifenleitung, erhält man eine elektromagnetische Kopplung mit ausgeprägtem Resonanzverhalten. Man kann den Resonator auch verwenden, um eine frequenzselektive Kopplung (Bandpass) zwischen zwei Leitungen herzustellen. Abbildung 26.60 zeigt beide Varianten mit den zugehörigen Ersatzschaltbildern. Die Beschreibung des Verhaltens erfolgt über die Ortskurven der Reflexionsfaktoren $r_1$ und $r_2$, die entweder durch Messung an einem Testaufbau oder mit Hilfe einer elektromagnetischen Feldsimulation ermittelt werden.

### 26.2.1.5 Leitungsparameter

Für die Schaltungssimulation mit einem Leitungsmodell werden die Leitungsparameter $L', C', R', G'$ benötigt. Aus den Leitungsgleichungen

$$
Z_W = \sqrt{\frac{L'}{C'}}, \quad v = \frac{1}{\sqrt{L'C'}}, \quad \alpha_L(f_R) = \frac{R'}{2Z_W} + \frac{G'Z_W}{2}
$$

folgt:

$$
L' = \frac{Z_W}{v}, \quad C' = \frac{1}{Z_Wv}, \quad R' + G'Z_W^2 = 2Z_W \alpha_L(f_R)
$$

a Streifenleitung mit dielektrischem Resonator

b frequenzselektive Kopplung von zwei Streifenleitungen

**Abb. 26.60. Anwendungen von dielektrischen Resonatoren**
<!-- page-import:1596:end -->

<!-- page-import:1597:start -->
1560  26. Oszillatoren

LAENGE = {v/(4*f0)}  
L = {Zw/v}  
C = {1/(Zw*v)}  
R = {0.23e-3*k1*sqrt(fR)*Zw}  
G = {0.23e-6*k2*fR/Zw}

Parameter

|      |      |
|------|------|
| Zw   | 50   |
| f0   | 2.5e9 |
| fR   | 2e9  |

Parameter

|      |      |
|------|------|
| v    | 2.3e8 |
| k1   | 0.01 |
| k2   | 8e-6 |

**Abb. 26.61.**  
Modellierung eines Leitungsresonators mit einer Koaxialleitung des Typs UT-141C-LL in *PSpice*

Die Verluste kann man mit wahlweise mit $R'$ oder $G'$ modellieren und die jeweils andere Größe auf Null setzen. Wenn man jedoch die Konstanten $k_1$ und $k_2$ der aus (21.16) und (21.17) auf Seite 1151 folgenden Darstellung

$$
\alpha_L(f_R) = 0{,}115\,\mathrm{m}^{-1} \cdot \left(k_1 \sqrt{\frac{f_R}{\mathrm{MHz}}} + k_2 \frac{f_R}{\mathrm{MHz}}\right)
$$

kennt, ist es nach (21.14) physikalisch korrekt, die durch $k_1$ beschriebenen ohmschen Verluste dem Widerstandsbelag $R'$ und die durch $k_2$ beschriebenen dielektrischen Verluste dem Ableitungsbelag $G'$ zuzuordnen:

$$
R' = 0{,}23\,\mathrm{m}^{-1} \cdot Z_W\, k_1 \sqrt{\frac{f_R}{\mathrm{MHz}}}, \quad
G' = 0{,}23\,\mathrm{m}^{-1} \cdot \frac{k_2}{Z_W}\,\frac{f_R}{\mathrm{MHz}}
$$

Abbildung 26.61 zeigt als Beispiel die Modellierung eines Leitungsresonators mit einer Koaxialleitung des Typs UT-141C-LL in *PSpice*. Da in *PSpice* keine frequenzabhängige Modellierung der Verluste möglich ist, gibt das Modell die Verluste nur in der unmittelbaren Umgebung der Resonanzfrequenz $f_R$ richtig wieder.

Bei einem keramischen Koaxialresonator kann man entweder die Konstanten $k_1$ und $k_2$ aus den im Datenblatt angegebenen Güte-Kurven ermitteln und dann wie bei einer Koaxialleitung vorgehen oder ersatzweise die Werte bei der Leerlauf-Resonanzfrequenz verwenden; letzteres führt mit (26.28) und (26.19) auf:

$$
R' = 2 Z_W \alpha_L(f_R) \approx 2 Z_W \alpha_L(f_0) = \frac{2\pi f_0 Z_W}{Q(f_0)\,v}, \qquad G' = 0
$$

Abbildung 26.62 zeigt ein Beispiel.

LAENGE = {v/(4*f0)}  
L = {Zw/v}  
C = {1/(Zw*v)}  
R = {6.283*f0*Zw/(Q*v)}  
G = 0

Parameter

|      |      |
|------|------|
| Zw   | 20   |
| f0   | 2.5e9 |
| er   | 20   |

Parameter

|      |      |
|------|------|
| v    | {3e8/sqrt(er)} |
| Q    | 480  |

**Abb. 26.62.**  
Modellierung eines keramischen Koaxialresonators mit $Z_W = 20\,\Omega$, $\epsilon_r = 20$, $f_0 = 2{,}5\,\mathrm{GHz}$ und $Q(f_0) = 480$ in *PSpice*
<!-- page-import:1597:end -->

<!-- page-import:1598:start -->
26.2 Oszillatoren mit Leitungen 1561

a in Kollektorschaltung

b in Basisschaltung

**Abb. 26.63.** Diskret aufgebaute Clapp-Oszillatoren mit Leitungsresonator

## 26.2.2 Schaltungen

### 26.2.2.1 Oszillatoren mit Leitungsresonatoren

Diese Oszillatoren werden fast ausschließlich als diskret aufgebaute Colpitts- oder Clapp-Oszillatoren in Basis- oder Kollektorschaltung realisiert; Abb. 26.54 auf Seite 1552 zeigt den prinzipiellen Aufbau. Der Entwurf erfolgt wie bei LC-Oszillatoren. Da der Parallelwiderstand $R_P$ bei Koaxialresonatoren in der Regel deutlich höher ist als bei LC-Schwingkreisen und diskrete HF-Transistoren mit Strömen im Milliampere-Bereich betrieben werden müssen, muss man eine Ankopplung mit einer Kapazität $C_k$ zur Reduktion der Schleifenverstärkung einsetzen, wie Abb. 26.30 auf Seite 1532 am Beispiel der Kollektorschaltung zeigt; dadurch erhält man einen Clapp-Oszillator. Man kann anstelle eines Bipolartransistors auch einen HF-Sperrschicht-Fet einsetzen, dessen vergleichsweise geringe Steilheit hier von Vorteil ist.

Abbildung 26.63 zeigt zwei typische Ausführungen mit diskreten HF-Bipolartransistoren. Anstelle der Stromquelle wird in der diskreten Schaltungstechnik eine Reihenschaltung aus einem Widerstand $R_E$ zur Einstellung des Ruhestroms und einer Induktivität $L_E$ zur Erzielung einer hohen Impedanz bei der Oszillatorfrequenz $f_R$ verwendet. Besonders gut eignet sich dazu eine Induktivität, deren Resonanzfrequenz in der Nähe der Oszillatorfrequenz liegt. Der Widerstand $R_E$ wird durch eine Kapazität $C_E$ wechselspannungsmäßig kurzgeschlossen, damit sich sein Rauschen nicht störend bemerkbar macht. Bei der Kollektorschaltung wird häufig auch der Basisstrom über eine Induktivität $L_B$ zugeführt; damit wird eine hohe Impedanz bei der Resonanzfrequenz und gleichzeitig, in Verbindung mit einer großen Kapazität $C_B$, eine niedrige Impedanz bei niedrigen Frequenzen erzielt. Durch diese Maßnahme wird die Auswirkung des 1/f-Rauschens des Transistors erheblich reduziert. Bei der Basisschaltung ist dies ohne besondere Maßnahmen der Fall, allerdings muss hier der Kollektorstrom über eine Induktivität $L_C$ zugeführt werden. Die Kollektorschaltung hat den Vorteil, dass man das Oszillatorsignal rückwirkungsarm am Kollektor auskoppeln kann. Die Rückwirkung lässt sich weiter verringern, indem man eine Kaskode-Stufe ergänzt, siehe Abb. 26.31 auf Seite 1533.

Die Dimensionierung ist aufwendiger als bei einem LC-Oszillator. Mit $C_k$, $C_2$ und $C_3$ haben wir zwar drei Freiheitsgrade zur Einstellung der Schleifenverstärkung, diese
<!-- page-import:1598:end -->

<!-- page-import:1600:start -->
26.2 Oszillatoren mit Leitungen 1563

\|LG\|  
dB

Resonanz des Oszillators mit $L_B$

ohne Resonator, $R_B = 0, L_{C2} = 0$

ohne Resonator, $R_B = 680 \Omega, L_{C2} = 7\,\mathrm{nH}$

mit Resonator, $R_B = 330 \Omega, L_{C2} = 7\,\mathrm{nH}$

Resonanz des Resonators

3dB

Resonanz von $C_2$

Resonanz von $C_3$

$f$  
Hz

Abb. 26.65. Schleifenverstärkung der Schaltung aus Abb. 26.64

bilds von $C_2$ die effektive parasitäre Induktivität von $C_2$ bildet, haben wir als ideale Induktivität modelliert. In der Praxis wird $L_{C2}$ durch eine kurze Leitung von etwa 7 mm Länge realisiert; zu Versuchszwecken kann man auch eine etwa gleich lange Drahtschleife einsetzen, die einen Abgleich der Induktivität erlaubt.

Abbildung 26.65 zeigt die Schleifenverstärkung der Schaltung. Zunächst haben wir den Resonator und die Kapazität $C_k$ entfernt und die Kompensationselemente $L_{C2}$ und $R_B$ auf Null gesetzt. Man erhält zwei ausgeprägte Resonanzstellen mit hoher Schleifenverstärkung: die Resonanz von $C_2$ bei 2,8 GHz und die Resonanz des Oszillators mit der Induktivität $L_B$ bei 155 MHz. Dann haben wir die Resonanz von $C_2$ mit $L_{C2} = 7\,\mathrm{nH}$ in die Nähe der Resonanz von $C_3$ verschoben und die Resonanz des Oszillators mit $L_B$ durch den Dämpfungswiderstand $R_B = 680\,\Omega$ unterbunden. Damit erhalten wir eine Schleifenverstärkung, die zwischen 100 MHz und 1 GHz knapp unter der 0 dB-Linie verläuft, die Resonanz von $C_3$ bei 1,1 GHz durchläuft und darüber abfällt. Jetzt koppeln wir den Resonator an und erhalten die gewünschte Resonanzstelle bei 500 MHz. Im GHz-Bereich verursacht der Resonator viele Resonanzstellen, die aber alle unter der 0 dB-Linie bleiben. Den Dämpfungswiderstand $R_B$ können wir auf $330\,\Omega$ verringern, was sich günstig auf das Rauschverhalten auswirkt.
<!-- page-import:1600:end -->
