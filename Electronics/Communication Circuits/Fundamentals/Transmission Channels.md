# Transmission Channels

<!-- page-import:1183:start -->
1146  21. Grundlagen

a Koaxialleitung

b Zweidrahtleitung

Abb. 21.3. Querschnitt und Feldlinien von Leitungen zur Nachrichtenübertragung

Drift und geringer Abgleichaufwand enthalten. Die Eigenschaften sind zum Teil redundant; so ist die bessere Ausnutzung der Bandbreite bei digitalen Systemen ein Folge der höheren Komplexität des Modulationsverfahrens und der geringere erforderliche Signal-Rausch-Abstand im Empfänger erlaubt eine Reduktion der Sendeleistung.

## 21.2 Übertragungskanäle

Wir behandeln die Übertragungskanäle in der Reihenfolge ihrer großtechnischen Nutzung: *Leitung, drahtlose Verbindung und faseroptische Verbindung*. Trotz der Unterschiede im Aufbau und der Beschreibung ist allen Kanälen eines gemein: die Übertragung erfolgt mit Hilfe elektromagnetischer Wellen.

### 21.2.1 Leitung

Für die Nachrichtenübertragung werden überwiegend die *Koaxialleitung* und die *Zweidrahtleitung* eingesetzt; Abb. 21.3 zeigt einen Querschnitt dieser Leitungen mit den Feldlinien der E- und H-Felder sowie den charakteristischen Abmessungen. Die Koaxialleitung ist eine *abgeschirmte Leitung*, da die Felder auf den Raum zwischen Innen- und Außenleiter begrenzt sind; eine Beeinflussung benachbarter Komponenten ist dadurch ausgeschlossen^1. Im Gegensatz dazu kann das Signal einer *ungeschirmten Zweidrahtleitung* durch kapazitive (E-Feld) oder induktive (H-Feld) Kopplung in benachbarte Komponenten oder parallel liegende ungeschirmte Leitungen eingekoppelt werden; man nennt dies *Übersprechen*.

Bei einer Koaxialleitung ist der Raum zwischen Innen- und Außenleiter mit einem Dielektrikum gefüllt, um die Leiter zu zentrieren; üblicherweise wird Teflon $(\epsilon_r = 2{,}05)$ oder Polystyrol $(\epsilon_r = 2{,}5)$ verwendet. Die Leiter der Zweidrahtleitung besitzen jeweils einen Mantel aus Polyäthylen; sie werden entweder verdrillt oder durch einen Steg verbunden.

---

^1 Bei vielen praktischen Koaxialleitungen ist der Außenleiter nicht ideal dicht, so dass auch außerhalb der Leitung schwache Felder vorhanden sind.
<!-- page-import:1183:end -->

<!-- page-import:1184:start -->
21.2 Übertragungskanäle 1147

#### 21.2.1.1 Feldwellenwiderstand und Ausbreitungsgeschwindigkeit

Das Verhältnis von E-Feldstärke und H-Feldstärke einer fortschreitenden elektromagnetischen Welle ist durch den Feldwellenwiderstand $Z_F$ gegeben; aus den Maxwell’schen Gleichungen folgt [21.1]:

$$
Z_F = \frac{|E|}{|H|} = \sqrt{\frac{\mu_0\mu_r}{\epsilon_0\epsilon_r}} = 120\pi\,\Omega \sqrt{\frac{\mu_r}{\epsilon_r}} \overset{\mu_r=1}{=} \frac{120\pi\,\Omega}{\sqrt{\epsilon_r}} = \frac{377\,\Omega}{\sqrt{\epsilon_r}}
$$

Man kann $\mu_r = 1$ setzen, da bei Leitungen im allgemeinen keine magnetischen Stoffe eingesetzt werden. Für die Ausbreitungsgeschwindigkeit gilt

$$
v = \frac{c_0}{\sqrt{\epsilon_r\mu_r}} \overset{\mu_r=1}{=} \frac{c_0}{\sqrt{\epsilon_r}}
$$

(21.1)

mit der Freiraum-Lichtgeschwindigkeit $c_0 = 3 \cdot 10^8\,\mathrm{m/s}$. Sie beträgt für die üblichen Dielektrika mit $\epsilon_r \approx 2 \ldots 2{,}5$ etwa $2 \cdot 10^8\,\mathrm{m/s}$, d.h. 2/3 der Lichtgeschwindigkeit.

#### 21.2.1.2 Leitungswellenwiderstand

Das Verhältnis von Spannung und Strom einer fortschreitenden Welle ist durch den Leitungswellenwiderstand $Z_W$ gegeben. Er wird berechnet, indem man durch Integration entlang einer E-Feldlinie vom Leiter 1 zum Leiter 2 die Spannung und durch Integration entlang einer H-Feldlinie den Strom bestimmt [21.1]:

$$
U = \int_1^2 E\,dr \quad,\quad I = \oint H\,dr
$$

Daraus folgt:

$$
Z_W = \frac{U}{I} = Z_F k_g = Z_F \cdot
\begin{cases}
\frac{1}{2\pi}\ln\frac{d_a}{d_i} & \text{Koaxialleitung} \\
\frac{1}{\pi}\ln\left(\frac{a}{d} + \sqrt{\left(\frac{a}{d}\right)^2 - 1}\right) & \text{Zweidrahtleitung}
\end{cases}
$$

Der Leitungswellenwiderstand setzt sich demnach aus dem Feldwellenwiderstand und einem die Leitung beschreibenden Geometriefaktor $k_G$ zusammen. Durch Einsetzen von $Z_F$ erhält man:

$$
Z_W =
\begin{cases}
\frac{60\,\Omega}{\sqrt{\epsilon_r}} \ln\frac{d_a}{d_i} & \text{Koaxialleitung} \\
\frac{120\,\Omega}{\sqrt{\epsilon_r}} \ln\left(\frac{a}{d} + \sqrt{\left(\frac{a}{d}\right)^2 - 1}\right) & \text{Zweidrahtleitung}
\end{cases}
$$

(21.2)

In der Praxis werden Koaxialleitungen mit $Z_W = 50\,\Omega$ (z.B. $\epsilon_r = 2{,}05$, $d_i = 2{,}6\,\mathrm{mm}$, $d_a = 8{,}6\,\mathrm{mm}$) und $Z_W = 75\,\Omega$ und verdrillte Zweidrahtleitungen mit $Z_W = 110\,\Omega$ eingesetzt. Bei der Zweidrahtleitung ist die Berechnung von $Z_W$ schwierig, da sich die Felder im Mantel ($\epsilon_r > 1$) und im Außenraum ($\epsilon_r = 1$) ausbreiten; deshalb muss man in (21.2) einen effektiven Wert für $\epsilon_r$ einsetzen, der nur durch Feldsimulation oder Messung bestimmt werden kann.
<!-- page-import:1184:end -->

<!-- page-import:1185:start -->
1148  21. Grundlagen

**Abb. 21.4.**  
Ersatzschaltbild für ein kurzes Leitungsstück der Länge $dz$

Der Leitungswellenwiderstand ist kein ohmscher Widerstand und kann deshalb nicht mit einem Ohmmeter oder Impedanzmessgerät gemessen werden. Er beschreibt lediglich das Verhältnis zwischen der Spannung und dem Strom *einer* Welle. Wir werden noch sehen, dass im allgemeinen Fall zwei Wellen auf einer Leitung vorhanden sind: eine *vorlaufende Welle* mit $U_f = Z_W I_f$ und eine *rücklaufende Welle* mit $U_r = Z_W I_r$; daraus erhält man mit $U = U_f + U_r$ und $I = I_f - I_r$ die zwischen den Leitern messbare Spannung $U$ und den durch die Leitung fließenden Strom $I$.

In der Praxis wird der Präfix *Leitung* meist weggelassen; man spricht dann nur vom *Wellenwiderstand*. Häufig werden auch die Formelzeichen $Z_L$ oder $Z_0$ verwendet. Da der Wellenwiderstand auch komplex sein kann, wird er wie eine Impedanz mit $Z$ bezeichnet; manchmal werden jedoch auch die Formelzeichen $R_W$, $R_L$ oder $R_0$ verwendet.

## 21.2.1.3 Leitungsgleichung

Man kann ein kurzes Leitungsstück durch ein Ersatzschaltbild mit vier konzentrierten Bauelementen beschreiben, siehe Abb. 21.4; dabei werden vier *Leitungsbeläge* verwendet [21.1]:

- Der *Induktivitätsbelag* $L'$ repräsentiert die im H-Feld gespeicherte Energie pro Längeneinheit. Die Einheit ist *Henry pro Meter*: $[L'] = \mathrm{H/m}$.
- Der *Kapazitätsbelag* $C'$ repräsentiert die im E-Feld gespeicherte Energie pro Längeneinheit. Die Einheit ist *Farad pro Meter*: $[C'] = \mathrm{F/m}$.
- Der *Widerstandsbelag* $R'$ berücksichtigt die ohmschen Verluste in den Leitern. Die Einheit ist *Ohm pro Meter*: $[R'] = \Omega/\mathrm{m}$. Dieser Anteil entspricht bei niedrigen Frequenzen dem Gleichstromwiderstand der Leiter. Bei Frequenzen oberhalb etwa $10\,\mathrm{kHz}$ nimmt er aufgrund der Stromverdrängung (*Skin-Effekt*) proportional zur Wurzel aus der Frequenz zu: $R' \sim \sqrt{f}$; dadurch ergibt sich eine mit der Frequenz zunehmende Dämpfung.
- Der *Ableitungsbelag* $G'$ berücksichtigt den Isolationsleitwert und die Polarisationsverluste des Dielektrikums. Die Einheit ist *Siemens pro Meter*: $[G'] = \mathrm{S/m}$. Der Isolationsleitwert ist im allgemeinen vernachlässigbar gering. Die Polarisationsverluste nehmen proportional zur Frequenz zu ($G' \sim f$), sind aber im technischen Anwendungsbereich dennoch meist kleiner als die ohmschen Verluste.

Aus Abb. 21.4 entnimmt man für die Spannungen und Ströme:

$$
U_2 = U_1 - (R'dz + j\omega L'dz)\,I_1
$$

$$
I_2 = I_1 - (G'dz + j\omega C'dz)\,U_2
$$

Durch Einsetzen von

$$
U_2 = U_1 + dU \;,\quad I_2 = I_1 + dI
$$

und Dividieren durch $dz$ mit anschließendem Grenzübergang
<!-- page-import:1185:end -->

<!-- page-import:1186:start -->
21.2 Übertragungskanäle 1149

$dz \to 0 \ , \ U_1 \to U_2 = U \ , \ I_1 \to I_2 = I$

erhält man:

$$
\frac{dU}{dz} = -(R' + j\omega L')\,I
$$

(21.3)

$$
\frac{dI}{dz} = -(G' + j\omega C')\,U
$$

(21.4)

Daraus folgt durch Differenzieren von (21.3) nach $z$ und Einsetzen von (21.4) die *Leitungsgleichung*:

$$
\frac{d^2U}{dz^2} = (R' + j\omega L')(G' + j\omega C')\,U = \gamma_L^2 U
$$

(21.5)

Sie hat die allgemeine Lösung

$$
U(z) = U_f\,e^{-\gamma_L z} + U_r\,e^{\gamma_L z}
$$

(21.6)

mit der *Ausbreitungskonstante*:

$$
\gamma_L = \sqrt{(R' + j\omega L')(G' + j\omega C')}
$$

(21.7)

Bei verlustarmen Leitungen gilt bereits bei Frequenzen im unteren kHz-Bereich $j\omega L' \gg R'$ und $j\omega C' \gg G'$; daraus folgt für die Ausbreitungskonstante [21.1]

$$
\gamma_L \approx \underbrace{\frac{R'}{2}\sqrt{\frac{C'}{L'}} + \frac{G'}{2}\sqrt{\frac{L'}{C'}}}_{\alpha_L} + j\underbrace{\omega\sqrt{L'C'}}_{\beta_L}
$$

(21.8)

mit der *Dämpfungskonstante* $\alpha_L$ und der *Phasenkonstante* $\beta_L$. Bei einer verlustfreien Leitung $(R' = G' = 0)$ wird die Dämpfungskonstante zu Null.

Zur Veranschaulichung bilden wir die Zeitfunktion:

$$
u(t,z) = \operatorname{Re}\left\{U(z)\,e^{j\omega t}\right\}^{(21.6)} = \operatorname{Re}\left\{U_f\,e^{j\omega t-\gamma_L z} + U_r\,e^{j\omega t+\gamma_L z}\right\}
$$

$$
= \underbrace{|U_f|\,e^{-\alpha_L z}\cos(\omega t - \beta_L z + \varphi_f)}_{\text{vorlaufende Welle}} + \underbrace{|U_r|\,e^{\alpha_L z}\cos(\omega t + \beta_L z + \varphi_r)}_{\text{rücklaufende Welle}}
$$

$$
= u_f(t,z) + u_r(t,z)
$$

Sie setzt sich aus einer *vorlaufenden Welle* $u_f(t,z)$ und einer *rücklaufenden Welle* $u_r(t,z)$ zusammen. Abbildung 21.5 zeigt diese Wellen zu einem Zeitpunkt $t_0$ und eine Viertel-Periodendauer später. Man erkennt die gegenläufige Ausbreitung und die zunehmende Dämpfung in Ausbreitungsrichtung. Die *Ausbreitungsgeschwindigkeit* $v$ erhält man aus der Betrachtung eines Maximums der Cosinus-Funktion; für die vorlaufende Welle gilt:

$$
\omega t - \beta_L z + \varphi_f = 0 \ \Rightarrow \quad v = \frac{dz}{dt} = \frac{\omega}{\beta_L} = \frac{1}{\sqrt{L'C'}}
$$

(21.9)

Für die rücklaufende Welle enthält man eine betragsmäßig gleiche, jedoch negative Ausbreitungsgeschwindigkeit; auch darin zeigt sich die gegenläufige Ausbreitung der beiden
<!-- page-import:1186:end -->

<!-- page-import:1188:start -->
21.2 Übertragungskanäle 1151

Auch hier erhält man eine vorlaufende und eine rücklaufende Welle, die in diesem Fall aber subtrahiert werden. Die Stromwellen sind über den Leitungswellenwiderstand mit den entsprechenden Spannungswellen gekoppelt; diesen Zusammenhang haben wir bereits im vorangehenden Abschnitt beschrieben.

Die Spannungen $U_f$ und $U_r$ sowie die Ströme $I_f$ und $I_r$ der vorlaufenden und rücklaufenden Welle sind nicht direkt messbar, da auf der Leitung immer die Überlagerung der beiden Wellen vorliegt; messbar sind demnach nur $U$ und $I$. Zur Messung der Wellen muss man einen Richtkoppler verwenden [21.1].

Bei verlustarmen Leitungen kann man den Einfluss von $R'$ und $G'$ auf den Leitungswellenwiderstand vernachlässigen; dann gilt:

$$
Z_W \approx \sqrt{\frac{L'}{C'}}
$$

(21.13)

Für verlustfreie Leitungen gilt dieser Zusammenhang exakt.

Im vorangehenden Abschnitt haben wir den Leitungswellenwiderstand für spezielle Leitungen unter Verwendung des Geometriefaktors $k_G$ aus dem Feldwellenwiderstand berechnet. Diese Berechnung ist mit der Berechnung über die Leitungsbeläge identisch, da $L'$ und $C'$ ebenfalls Geometrie-Eigenschaften sind.

### 21.2.1.4 Dämpfung

Die Dämpfung einer Leitung wird durch den Widerstandsbelag $R' \sim \sqrt{f}$ und den Ableitungsbelag $G' \sim f$ verursacht; aus (21.8) und (21.13) folgt für die Dämpfungskonstante einer verlustarmen Leitung:

$$
\alpha_L \approx \underbrace{\frac{R'}{2Z_W}}_{\sim \sqrt{f}} + \underbrace{\frac{G'Z_W}{2}}_{\sim f}
$$

(21.14)

In der Praxis wird meist der Dämpfungsbelag $a'$ in Dezibel pro Meter angegeben:

$$
a' = 20\,\mathrm{dB/m} \cdot \log e^{(\alpha_L \cdot 1\,\mathrm{m})} \overset{\alpha_L \ll 1/\mathrm{m}}{\approx} 8{,}686\,\mathrm{dB} \cdot \alpha_L
$$

(21.15)

Umgekehrt gilt:

$$
\alpha_L \approx 0{,}115\,\mathrm{m}^{-1} \cdot \frac{a'}{\mathrm{dB/m}}
$$

(21.16)

Die Frequenzabhängigkeit wird mit Hilfe von zwei Konstanten beschrieben:

$$
\frac{a'}{\mathrm{dB/m}} = k_1 \sqrt{\frac{f}{\mathrm{MHz}}} + k_2 \frac{f}{\mathrm{MHz}}
$$

(21.17)

Abbildung 21.6 zeigt typische Werte für 50 $\Omega$-Koaxialleitungen.

Für die Dämpfung $a$ einer Leitung der Länge $l$ gilt:

$$
a = a' l
$$

Abbildung 21.7 zeigt die Dämpfung in Abhängigkeit von der Länge und der Frequenz. Die Dämpfung einer Zweidrahtleitung ist um den Faktor $2\ldots5$ höher.
<!-- page-import:1188:end -->

<!-- page-import:1189:start -->
1152  21. Grundlagen

| Typ | Beschreibung | D [mm] | $\varepsilon_r$ | $k_1$ | $k_2$ | $a'$ [dB/m] 10 MHz | 10 GHz |
|---|---|---:|---:|---:|---:|---:|---:|
| RG-58C | Standard-Kabel, bis 1 GHz | 5 | 2,05 | 0,015 | $2{,}7 \cdot 10^{-4}$ | 0,047 | (4,2) |
| UT-141C-LL | Festmantel-Kabel, bis 36 GHz | 3,6 | 1,68 | 0,01 | $8 \cdot 10^{-6}$ | 0,032 | 1,08 |
| UT-070-LL | Festmantel-Kabel, bis 72 GHz | 1,8 | 1,68 | 0,02 | $8 \cdot 10^{-6}$ | 0,063 | 2,08 |

**Abb. 21.6.** Beispiele für die Parameter von 50 $\Omega$-Koaxialleitungen

**Abb. 21.7.**  
Dämpfung $a$ einer 50 $\Omega$-Koaxialleitung des Typs RG-58C mit der Länge $l$ für verschiedene Frequenzen

## 21.2.1.5 Kenngrößen einer Leitung

Eine Leitung wird üblicherweise durch Angabe des Leitungswellenwiderstands $Z_W$, der Ausbreitungsgeschwindigkeit $v$ und des Dämpfungsbelags $a'$ spezifiziert. Anstelle der Ausbreitungsgeschwindigkeit kann auch die relative Dielektrizitätskonstante $\varepsilon_r$ angegeben werden; daraus folgt mit (21.1) die Ausbreitungsgeschwindigkeit. Alternativ zu $Z_W$ und $v$ bzw. $\varepsilon_r$ kann auch der Induktivitätsbelag $L'$ und der Kapazitätsbelag $C'$ angegeben werden; dies ist jedoch in der Praxis unüblich. Abbildung 21.8 enthält eine Übersicht über die Größen und die Zusammenhänge.

Leitungswellenwiderstand  
$$
Z_W = \sqrt{\frac{L'}{C'}}
$$

Ausbreitungsgeschwindigkeit  
$$
v = \frac{1}{\sqrt{L'C'}} = \frac{c_0}{\sqrt{\varepsilon_r}} = 3 \cdot 10^8 \frac{\mathrm{m}}{\mathrm{s}} \cdot \frac{1}{\sqrt{\varepsilon_r}}
$$

Induktivitätsbelag  
$$
L' = \frac{Z_W}{v}
$$

Kapazitätsbelag  
$$
C' = \frac{1}{Z_W v}
$$

Dämpfungskonstante  
$$
\alpha_L = 0{,}115\,\mathrm{m}^{-1} \cdot \frac{a'}{\mathrm{dB}/\mathrm{m}}
$$

Phasenkonstante  
$$
\beta_L = \frac{\omega}{v} = \frac{2\pi f}{v} = \frac{2\pi}{\lambda}
\qquad \text{mit} \qquad \lambda = \frac{v}{f}
$$

Ausbreitungskonstante  
$$
\gamma_L = \alpha_L + j\beta_L
$$

**Abb. 21.8.** Kenngrößen einer Leitung
<!-- page-import:1189:end -->

<!-- page-import:1190:start -->
21.2 Übertragungskanäle 1153

**Abb. 21.9.**  
Vierpoldarstellung einer Leitung

## 21.2.1.6 Vierpoldarstellung einer Leitung

Abbildung 21.9 zeigt die Vierpoldarstellung einer Leitung der Länge $l$ mit den zugehörigen Strömen und Spannungen. Wir stellen nun die Spannung $U_1$ mit der Ortskoordinate $z = 0$ und die Spannung $U_2$ mit der Ortskoordinate $z = l$ gemäß (21.6) als Summe einer vorlaufenden und einer rücklaufenden Welle dar:

$$
U_1 = U_f + U_r
$$

(21.18)

$$
U_2 = U_f \, e^{-\gamma_L l} + U_r \, e^{\gamma_L l}
$$

(21.19)

Für die Ströme gilt entsprechend:

$$
I_1 = I_f - I_r = \frac{U_f}{Z_W} - \frac{U_r}{Z_W}
$$

(21.20)

$$
I_2 = I_f \, e^{-\gamma_L l} - I_r \, e^{\gamma_L l} = \frac{U_f}{Z_W} e^{-\gamma_L l} - \frac{U_r}{Z_W} e^{\gamma_L l}
$$

(21.21)

Aus den Gleichungen (21.19) und (21.21) erhält man:

$$
U_2 + Z_W I_2 = 2\,U_f\,e^{-\gamma_L l}
\qquad,\qquad
U_2 - Z_W I_2 = 2\,U_r\,e^{\gamma_L l}
$$

(21.22)

Daraus folgt, dass die rücklaufende Welle durch die Beschaltung am Tor 2 bestimmt wird. Für $U_2 - Z_W I_2 = 0$, d.h. bei Beschaltung des Tors 2 mit einem Widerstand $R = Z_W = U_2/I_2$, existiert keine rücklaufende Welle; man nennt dies Abschluss mit dem Wellenwiderstand. Durch Auflösen von (21.22) nach $U_f$ und $U_r$ und Einsetzen in die Gleichungen (21.18) und (21.20) folgt:

$$
U_1 = \frac{U_2}{2}\left(e^{\gamma_L l} + e^{-\gamma_L l}\right) + \frac{Z_W I_2}{2}\left(e^{\gamma_L l} - e^{-\gamma_L l}\right)
$$

$$
I_1 = \frac{U_2}{2Z_W}\left(e^{\gamma_L l} - e^{-\gamma_L l}\right) + \frac{I_2}{2}\left(e^{\gamma_L l} + e^{-\gamma_L l}\right)
$$

Mit

$$
\cosh(\gamma_L l) = \frac{1}{2}\left(e^{\gamma_L l} + e^{-\gamma_L l}\right)
\qquad,\qquad
\sinh(\gamma_L l) = \frac{1}{2}\left(e^{\gamma_L l} - e^{-\gamma_L l}\right)
$$

erhält man die Vierpolgleichungen einer Leitung:

$$
\begin{bmatrix}
U_1 \\
I_1
\end{bmatrix}
=
\begin{bmatrix}
\cosh(\gamma_L l) & Z_W \sinh(\gamma_L l) \\
\frac{1}{Z_W}\sinh(\gamma_L l) & \cosh(\gamma_L l)
\end{bmatrix}
\begin{bmatrix}
U_2 \\
I_2
\end{bmatrix}
$$

(21.23)
<!-- page-import:1190:end -->

<!-- page-import:1191:start -->
1154  21. Grundlagen

**Abb. 21.10.**  
Leitung mit Abschluss

## 21.2.1.7 Leitung mit Abschluss

Wir betrachten nun eine Leitung mit einer Abschluss-Impedanz $Z_2$ und berechnen die Eingangsimpedanz $Z_1$, siehe Abb. 21.10; mit $U_2 = Z_2 I_2$ folgt aus (21.23):

$$
Z_1 \;=\; \frac{U_1}{I_1}
\;=\;
\frac{Z_2 \cosh(\gamma_L l) + Z_W \sinh(\gamma_L l)}
{\frac{Z_2}{Z_W}\sinh(\gamma_L l) + \cosh(\gamma_L l)}
\;=\;
\frac{Z_2 + Z_W \tanh(\gamma_L l)}
{\frac{Z_2}{Z_W}\tanh(\gamma_L l) + 1}
\qquad (21.24)
$$

Für eine verlustfreie Leitung $(\alpha_L = 0)$ folgt mit

$$
\gamma_L \;=\; j\beta_L \;=\; j\,\frac{2\pi}{\lambda}
$$

und $\tanh(j\beta_L l) = j\,\tan(\beta_L l)$:

$$
Z_1 \;=\;
\frac{Z_2 + j\,Z_W \tan\!\left(\frac{2\pi\,l}{\lambda}\right)}
{1 + j\,\frac{Z_2}{Z_W}\tan\!\left(\frac{2\pi\,l}{\lambda}\right)}
\qquad (21.25)
$$

Die Gleichungen (21.24) und (21.25) zeigen, dass die Leitung eine Impedanztransformation $Z_2 \to Z_1$ bewirkt. Zur Veranschaulichung betrachten wir einige Spezialfälle:

- **Abschluss mit dem Wellenwiderstand:** Für $Z_2 = Z_W$ gilt $Z_1 = Z_2 = Z_W$, und zwar unabhängig von der Länge der Leitung. Wir haben im letzten Abschnitt bereits erwähnt, dass in diesem Fall keine rücklaufende Welle vorhanden ist. Der Abschluss mit dem Wellenwiderstand ist die bevorzugte Betriebsart bei Übertragungsleitungen, weil in diesem Fall eine optimale Leistungsübertragung von der Signalquelle zur Last stattfindet; wir gehen darauf im Abschnitt 21.3 noch näher ein.

- **Elektrisch kurze Leitung:** Wenn die Leitung sehr viel kürzer ist als die Wellenlänge $\lambda$, kann man die tanh- bzw. tan-Terme vernachlässigen; dann gilt $Z_1 = Z_2$. Dieser Fall entspricht der normalen Verbindungsleitung in niederfrequenten Schaltungen, die als ideale Verbindung angesehen werden kann. Mit zunehmender Frequenz nimmt die zulässige Länge für eine elektrisch kurze Leitung entsprechend der Wellenlänge, also umgekehrt proportional zur Frequenz, ab; im GHz-Bereich bewirken bereits Längen von wenigen Millimetern eine spürbare Impedanztransformation.

- **$\lambda/4$-Leitung:** Für eine verlustfreie Leitung mit einer Länge entsprechend einem Viertel der Wellenlänge $\lambda$ erhält man $\tan(2\pi\,l/\lambda) = \tan(\pi/2) \to \infty$; damit folgt aus (21.25):

$$
Z_1 \;=\; \frac{Z_W^2}{Z_2}
\qquad (21.26)
$$
<!-- page-import:1191:end -->

<!-- page-import:1192:start -->
21.2 Übertragungskanäle 1155

**Abb. 21.11.** Transformationseigenschaften einer Leitung

Dieser Zusammenhang gilt auch für verlustarme Leitungen ausreichend genau. Die $\lambda/4$-Leitung wird oft anstelle eines Übertragers zur Widerstandstransformation eingesetzt; dabei wird ein Widerstand $Z_2 = R_2$ mit einer $\lambda/4$-Leitung mit $Z_W = \sqrt{R_1 R_2}$ auf $Z_1 = R_1$ transformiert. Man nennt eine derartige Leitung auch $\lambda/4$-Transformator.

- **Offene Leitung:** Eine Leitung mit $Z_2 \to \infty$ wird als offene oder leerlaufende Leitung bezeichnet; im verlustfreien Fall folgt aus (21.25):

$$
Z_1 \;=\; \frac{Z_W}{j\,\tan\!\left(\frac{2\pi\,l}{\lambda}\right)}
\;\overset{l<\lambda/8}{\approx}\;
\frac{Z_W}{j\,\frac{2\pi\,l}{\lambda}}
\;=\;
\frac{1}{j\omega C'l}
\;=\;
\frac{1}{j\omega C}
\qquad (21.27)
$$

Eine offene, verlustfreie Leitung wirkt demnach als Reaktanz, wobei je nach Länge kapazitives $(\tan(2\pi\,l/\lambda) > 0)$ oder induktives $(\tan(2\pi\,l/\lambda) < 0)$ Verhalten vorliegt; für $l < \lambda/8$ wirkt die Leitung als Kapazität mit $C = C'l$.

- **Kurzgeschlossene Leitung:** Für eine kurzgeschlossene $(Z_2 = 0)$, verlustfreie Leitung folgt aus (21.25):

$$
Z_1 \;=\; j\,Z_W\,\tan\!\left(\frac{2\pi\,l}{\lambda}\right)
\;\overset{l<\lambda/8}{\approx}\;
j\,Z_W\,\frac{2\pi\,l}{\lambda}
\;=\;
j\omega L'l
\;=\;
j\omega L
\qquad (21.28)
$$

Eine kurzgeschlossene, verlustfreie Leitung wirkt demnach ebenfalls als Reaktanz, wobei je nach Länge induktives $(\tan(2\pi\,l/\lambda) > 0)$ oder kapazitives $(\tan(2\pi\,l/\lambda) < 0)$ Verhalten vorliegt; für $l < \lambda/8$ wirkt die Leitung als Induktivität mit $L = L'l$.

Die letzten drei Fälle spielen eine große Rolle bei der Realisierung von Anpass-Schaltungen im oberen MHz- und im GHz-Bereich; dabei werden jedoch keine Koaxial- oder Zweidrahtleitungen, sondern die im folgenden beschriebene Streifenleitung verwendet. Abbildung 21.11 fasst die Transformationseigenschaften einer Leitung zusammen.

*Beispiel:* Ein 10 MHz-Signal soll mit einem Oszilloskop gemessen werden; dazu wird der entsprechende Punkt mit einer ein Meter langen 50 $\Omega$-Koaxialleitung mit dem Eingang des Oszilloskops verbunden. Da die Eingangsimpedanz des Oszilloskops $(1\,\mathrm{M}\Omega \parallel 20\,\mathrm{pF} \Rightarrow Z_2 \approx -j\,1{,}6\,\mathrm{k}\Omega)$ wesentlich höher ist als der Wellenwiderstand der
<!-- page-import:1192:end -->

<!-- page-import:1193:start -->
1156  21. Grundlagen

Abb. 21.12.  
Querschnitt einer Mikrostreifenleitung

Teflon: $\varepsilon_r = 2{,}05$  
Epoxydharz: $\varepsilon_r = 4{,}8$  
Al$_2$O$_3$: $\varepsilon_r = 9{,}7$

$\varepsilon_r = 1$

$w$

$d$

$h$

$d$

Leitung ($Z_W = 50\,\Omega$), ist die Leitung praktisch offen. Mit $v \approx 2 \cdot 10^8\,\mathrm{m/s}$ erhält man $\lambda = v/f = 20\,\mathrm{m}$, d.h. es gilt $l < \lambda/8 = 2{,}5\,\mathrm{m}$; demnach gilt nach (21.27) $Z_1 = 1/j\omega C$ mit $C = C'l = l/Z_Wv \approx 100\,\mathrm{pF}$. Zu dieser Kapazität der praktisch offenen Leitung wird noch die Eingangskapazität des Oszilloskops addiert: $C = 100\,\mathrm{pF} + 20\,\mathrm{pF} = 120\,\mathrm{pF}$. Eine exakte Berechnung mit Hilfe von (21.25) liefert:

$$
Z_1 = \frac{-j\,1{,}6\,\mathrm{k}\Omega + j\,50\,\Omega\,\tan\!\left(\frac{\pi}{10}\right)}{1 + j\,\frac{-j\,1{,}6\,\mathrm{k}\Omega}{50\,\Omega}\,\tan\!\left(\frac{\pi}{10}\right)}
= -j\,139\,\Omega \stackrel{!}{=} \frac{1}{j\omega C}
$$

Daraus folgt $C = 114\,\mathrm{pF}$. Das zu messende Signal wird demnach mit einer Kapazität belastet, die wesentlich höher ist als die Eingangskapazität des Oszilloskops. Die Leitung der Länge ein Meter ist also keine elektrisch kurze Leitung.

## 21.2.1.8 Streifenleitung

Mit zunehmender Frequenz muss man auch die Verbindungen auf Leiterplatten als Leitungen mit definiertem Wellenwiderstand ausführen, um eine verzerrungsfreie Signalübertragung von hochfrequenten Analog- und schnellen Digitalsignalen zu gewährleisten; dazu werden verschiedene Ausführungen von Streifenleitungen verwendet [21.1].

Die am einfachsten zu realisierende Streifenleitung ist die in Abb. 21.12 gezeigte Mikrostreifenleitung (Microstrip), die sich praktisch nicht von normalen Leiterplatten-Verbindungen unterscheidet und deshalb in der herkömmlichen Ätztechnik hergestellt werden kann. Aufgrund der durchgehenden Massefläche auf der Unterseite müssen beidseitig mit Kupfer beschichtete Leiterplatten verwendet werden. Leiterplatten aus Pertinax scheiden aufgrund ihrer hohen dielektrischen Verluste aus. Mit Epoxydharz-Leiterplatten ($\varepsilon_r \approx 4{,}8$) kann man bei geringen Anforderungen und Frequenzen unter 1 GHz akzeptable Ergebnisse erzielen; dabei ist vor allem die Streuung von $\varepsilon_r$ problematisch. Im allgemeinen werden jedoch Substrate aus Teflon ($\varepsilon_r = 2{,}05$) oder, vor allem im GHz-Bereich, Aluminiumoxid-Keramik (Al$_2$O$_3$, $\varepsilon_r = 9{,}7$) verwendet.

Eine Berechnung des Leitungswellenwiderstands und der Leitungsbeläge ist nur mit sehr aufwendigen mathematischen Verfahren möglich; in der Praxis werden die benötigten Größen meist mit Hilfe einer Feldsimulation ermittelt. Es gibt jedoch halb-empirische Formeln für den Leitungswellenwiderstand einer Mikrostreifenleitung mit den in Abb. 21.12 genannten Abmessungen, die unter der in der Praxis im allgemeinen leicht zu erfüllenden Nebenbedingung $w/d \gg 10$ auf etwa 2% genau sind [21.1]; für $w > h$ gilt

$$
\frac{Z_W}{\Omega} \approx \frac{188{,}5/\sqrt{\varepsilon_r}}{\frac{w}{2h} + 0{,}441 + \frac{\varepsilon_r + 1}{2\pi\varepsilon_r}\left[\ln\!\left(\frac{w}{2h} + 0{,}94\right) + 1{,}451\right] + \frac{0{,}082(\varepsilon_r - 1)}{\varepsilon_r^2}}
$$
<!-- page-import:1193:end -->

<!-- page-import:1194:start -->
21.2 Übertragungskanäle 1157

**Abb. 21.13.** Leitungswellenwiderstand einer Mikrostreifenleitung für Teflon ($\varepsilon_r = 2{,}05$), Epoxydharz ($\varepsilon_r = 4{,}8$) und Al$_2$O$_3$ ($\varepsilon_r = 9{,}7$)

und für $w < h$:

$$
\frac{Z_W}{\Omega} \approx \frac{60}{\sqrt{\frac{\varepsilon_r + 1}{2}}}
\left[
\ln\left(\frac{8h}{w}\right)
+ \frac{1}{32}\left(\frac{w}{h}\right)^2
- \frac{1}{2}\frac{\varepsilon_r - 1}{\varepsilon_r + 1}
\left(0{,}4516 + \frac{0{,}2416}{\varepsilon_r}\right)
\right]
$$

Abbildung 21.13 zeigt die Verläufe für Teflon, Epoxydharz und Al$_2$O$_3$.

## 21.2.2 Drahtlose Verbindung

Abbildung 21.14 zeigt die Komponenten eines drahtlosen Übertragungssystems. Das Ausgangssignal des Sendeverstärkers wird über eine Leitung zur Sendeantenne geführt. Da die Eingangsimpedanz der Antenne im allgemeinen nicht mit dem Wellenwiderstand der Leitung übereinstimmt, ist zur optimalen Leistungsübertragung ein Anpassnetzwerk erforderlich. Die von der Sendeantenne abgestrahlte elektromagnetische Welle wird von der im Abstand $r$ aufgestellten Empfangsantenne empfangen. Das Empfangssignal wird über ein weiteres Anpassnetzwerk und eine Leitung zum Empfangsverstärker geführt.

### 21.2.2.1 Antennen

Es gibt sehr unterschiedliche Bauformen von Antennen; eine Übersicht ist in [21.1] enthalten. Sie unterscheiden sich bezüglich des Frequenzbereichs, der Bandbreite und der Richtcharakteristik. Letztere gibt an, wie sich die abgestrahlte Leistung im Raum verteilt. Sendeantennen für Rundfunk und Fernsehen strahlen normalerweise horizontal in alle Richtungen ab, damit das Signal von allen im Umkreis aufgestellten Empfängern empfangen werden kann. Auch Rundfunk- und Fernseh-Empfangsantennen für portable Geräte haben eine breite Richtcharakteristik, damit möglichst keine Ausrichtung auf den Sender erforderlich ist; damit kann man jedoch nur relativ starke Sender empfangen. Dagegen werden bei Geräten mit festem Standort Richtantennen verwendet, die auch den Empfang
<!-- page-import:1194:end -->

<!-- page-import:1195:start -->
1158  21. Grundlagen

Abb. 21.14. Komponenten eines drahtlosen Übertragungssystems

schwacher Sender ermöglichen, dazu aber möglichst genau auf den Sender ausgerichtet werden müssen; bei einer Fehlausrichtung ist kein Empfang mehr möglich. Ein Beispiel dafür sind die Parabolantennen in Satelliten-Empfangsanlagen. In der Mobilkommunikation ist eine Ausrichtung des Mobilteils nicht möglich, da der Standort der Basisstation im allgemeinen unbekannt ist und je nach Standort des Mobilteils und den momentanen Ausbreitungsbedingungen wechselt; deshalb werden hier ebenfalls Antennen mit breiter Richtcharakteristik eingesetzt. Die Basisstationen selbst arbeiten mit einer Sektorierung, d.h. die Umgebung ist in Sektoren eingeteilt, die von je einer Antenne mit entsprechender Richtcharakteristik bedient werden. Beim Richtfunk werden Sende- und Empfangsantennen mit extrem enger Richtcharakteristik verwendet; dadurch kann man mit relativ geringer Sendeleistung große Reichweiten erzielen, ein unerwünschtes Abhören weitgehend vermeiden und dieselbe Sendefrequenz zur Übertragung in andere Richtungen verwenden. Jede Antenne kann prinzipiell sowohl als Sende- als auch als Empfangsantenne verwendet werden; die Richtcharakteristik ist dieselbe.

Bei bidirektionalen Übertragungsstrecken mit gemeinsamer Sende- und Empfangsantenne muss man verhindern, dass das Ausgangssignal des Sendeverstärkers auf den empfindlichen Eingang des Empfangsverstärkers gelangt; dieser würde sonst sofort zerstört. Bei abwechselndem Senden und Empfangen wird ein Antennenumschalter verwendet, siehe Abb. 21.15a. Gleichzeitiges Senden und Empfangen mit einer Antenne ist ebenfalls möglich, wenn man getrennte Sende- und Empfangsfrequenzen verwendet; in diesem Fall erfolgt die Trennung mit einem speziellen Filter (Duplexer). Abbildung 21.15b zeigt einen einfachen Duplexer mit Parallelschwingkreisen.

a abwechselnd

b gleichzeitig (mit Duplexer)

Abb. 21.15. Betriebsarten einer gemeinsamen Sende- und Empfangsantenne
<!-- page-import:1195:end -->

<!-- page-import:1196:start -->
21.2 Übertragungskanäle 1159

Abb. 21.16. Ersatzschaltbild einer Stabantenne (Länge $< \lambda/4$) einschließlich der Verbindung zum Sendeverstärker

## 21.2.2.1.1 Richtfaktor

Als Kennzeichen für die Richtcharakteristik wird der Richtfaktor $D$ (*directivity*) verwendet; er gibt an, um welchen Faktor die Sendeleistung in der Hauptrichtung größer ist als bei einer hypothetischen Antenne mit gleichmäßiger Ausstrahlung in alle Richtungen. Die Bezugsantenne ist hypothetisch, da es keine Einzelantenne gibt, die eine gleichmäßige Ausstrahlung besitzt; deshalb ist der Richtfaktor einer realen Antenne immer größer als Eins. Der Richtfaktor bezieht sich auf die *abgestrahlte* Leistung; in der Praxis interessiert jedoch die der Antenne *zugeführte* Leistung (*Speiseleistung*), die aufgrund von Verlusten größer ist als die abgestrahlte Leistung.

## 21.2.2.1.2 Ersatzschaltbild

Abbildung 21.16 zeigt das Ersatzschaltbild einer elektrisch kurzen Stabantenne (Länge $< \lambda/4$) einschließlich der Verbindung zum Sendeverstärker; dabei sind $L_A$ und $C_A$ die reaktiven Elemente der Antenne, $R_S$ ist der *Strahlungswiderstand* und $R_V$ der ohmsche *Verlustwiderstand* [21.1]. Die Betriebsfrequenz liegt unterhalb der Resonanzfrequenz, d.h. die Antennenimpedanz hat einen kapazitiven Anteil; die Summe aus Strahlungs- und Verlustwiderstand ist kleiner als $50\,\Omega$. Die Antennenimpedanz wird durch das Anpassnetzwerk auf $50\,\Omega$ transformiert.

Abbildung 21.17 zeigt den Strahlungswiderstand $R_S$ einer Stabantenne in Abhängigkeit von der relativen Länge $l/\lambda$ [21.1]. Er wird für $l < \lambda/8$ sehr klein; eine Anpassung an $50\,\Omega$ ist dann nur noch sehr schmalbandig möglich. Besonders günstig sind Stabantennen mit $l/\lambda \approx 0{,}26 \dots 0{,}27$. Sie haben einschließlich des Verlustwiderstands einen Gesamtwiderstand von $50\,\Omega$ und werden geringfügig oberhalb der Resonanzfrequenz betrieben; die Anpassung erfolgt in diesem Fall mit einer Serienkapazität.

## 21.2.2.1.3 Antennenwirkungsgrad

Aus Abbildung 21.16 kann man unmittelbar den Antennenwirkungsgrad $\eta$ ablesen:

$$
\eta = \frac{R_S}{R_S + R_V} < 1
$$

Er gibt das Verhältnis von zugeführter zu abgestrahlter Leistung an. Betreibt man die Antenne als Empfangsantenne, erhält man zwar formal dasselbe Ersatzschaltbild, der Verlustwiderstand hat jedoch aufgrund einer etwas anderen Stromverteilung nicht denselben Wert; deshalb muss man zwischen dem *Sendewirkungsgrad* $\eta_S$ und dem *Empfangswirkungsgrad* $\eta_E$ unterscheiden.
<!-- page-import:1196:end -->

<!-- page-import:1197:start -->
1160  21. Grundlagen

**Abb. 21.17.** Strahlungswiderstand einer Stabantenne in Abhängigkeit von der relativen Länge $l/\lambda$

#### 21.2.2.1.4 Antennengewinn

Das Produkt aus dem Richtfaktor und dem Antennenwirkungsgrad wird Antennengewinn genannt:

$$
G = D\eta
$$

Der Antennengewinn vergleicht demnach die Sendeleistung einer realen, verlustbehafteten Antenne in der Hauptrichtung mit der Sendeleistung einer hypothetischen, verlustfreien Antenne mit gleichmäßiger Ausstrahlung bei gleicher zugeführter Leistung. Aufgrund des unterschiedlichen Antennenwirkungsgrads im Sende- und Empfangsfall muss man zwischen dem Sendegewinn und dem Empfangsgewinn unterscheiden; in der Praxis sind die Unterschiede jedoch meist so gering, dass diese Unterscheidung nicht notwendig ist.

#### 21.2.2.2 Leistungsübertragung über eine drahtlose Verbindung

Mit Hilfe des Antennengewinns $G_S$ der Sendeantenne und des Antennengewinns $G_E$ der Empfangsantenne können wir einen Zusammenhang zwischen der Sendeleistung $P_S$ und der Empfangsleistung $P_E$ einer drahtlosen Verbindung angeben [21.1]:

$$
P_E = P_S\,G_S\,G_E\left(\frac{\lambda}{4\pi\,r}\right)^2
$$

(21.29)

Dabei ist

$$
\lambda = \frac{c_0}{f} = \frac{3\cdot 10^8\,\mathrm{m/s}}{f}
$$

die Freiraum-Wellenlänge und $r$ der Abstand zwischen Sender und Empfänger. Der Faktor

$$
\left(\frac{\lambda}{4\pi\,r}\right)^2 = \frac{\lambda^2/(4\pi)}{4\pi\,r^2} = \frac{\text{wirksame Fläche der Empfangsantenne}}{\text{Kugeloberfläche}}
$$
<!-- page-import:1197:end -->

<!-- page-import:1198:start -->
21.2 Übertragungskanäle 1161

Abb. 21.18.  
Grunddämpfung einer drahtlosen  
Verbindung nach (21.31)

berücksichtigt, dass die Empfangsantenne nur einen Teil der gleichmäßig ausgestrahlten Kugeloberfläche abdeckt $^2$.

In der Praxis wird die *Streckendämpfung*

$$
\frac{a}{\mathrm{dB}} = 10\log\frac{P_S}{P_E} = 20\log\frac{4\pi r}{\lambda} - \frac{G_S}{\mathrm{dB}} - \frac{G_E}{\mathrm{dB}}
$$

angegeben; dabei ist (21.30)

$$
\frac{a_0}{\mathrm{dB}} = 20\log\frac{4\pi r}{\lambda} = 20\log\frac{4\pi r f}{c_0}
$$

die *Grunddämpfung*. Die Dämpfung nimmt demnach mit zunehmendem Abstand und zunehmender Frequenz mit jeweils 20 dB pro Dekade zu. Nach Einsetzen der Konstanten erhält man: (21.31)

$$
\frac{a}{\mathrm{dB}} = 32{,}4 + 20\log\frac{r}{\mathrm{km}} + 20\log\frac{f}{\mathrm{MHz}} - \frac{G_S}{\mathrm{dB}} - \frac{G_E}{\mathrm{dB}}
$$

Abbildung 21.18 zeigt die Grunddämpfung $a_0$ in Abhängigkeit vom Abstand und der Frequenz.

Die Gleichungen (21.29) und (21.30) gelten nur bei idealer Ausbreitung im Raum. Reale Verbindungen haben je nach Frequenz eine mehr oder weniger hohe *Zusatzdämpfung*, die durch die Luft, Nebel oder Regen verursacht wird; hinzu kommen bodennahe Absorption und lokale Einbrüche infolge Mehrwegausbreitung. Eine ausführliche Beschreibung der Ausbreitungsbedingungen in den verschiedenen Frequenzbereichen findet man in [21.1].

### 21.2.2.3 Frequenzbereiche

Der Frequenzbereich wird in Bereiche eingeteilt; Abb. 21.19 zeigt die Einteilung im Bereich von 30 kHz bis 300 GHz mit den entsprechenden Bezeichnungen. Der Bereich zwischen 200 MHz und 220 GHz wird auch als *Mikrowellenbereich* bezeichnet; er ist in 12 Bänder eingeteilt, siehe Abb. 21.20. Die Bereichs- und Band-Bezeichnungen werden oft im Zusammenhang mit Bauteilen verwendet, z.B. *UHF-Transistor* oder *S-Band-Fet*.

---

$^2$ Man beachte, dass die Sende- und Empfangsantenne nun als verlustfreie Antennen mit gleichmäßiger Ausstrahlung zu betrachten sind, da die Abweichung hiervon bereits durch die Antennengewinne $G_S$ und $G_E$ erfasst wird.
<!-- page-import:1198:end -->

<!-- page-import:1199:start -->
1162  21. Grundlagen

| Frequenz | Wellenlänge | Bezeichnung (kurz/englisch/deutsch) |
|---|---|---|
| 30 kHz ... 300 kHz | 10 km ... 1 km | LF  Low Frequencies  Langwellen |
| 300 kHz ... 3 MHz | 1 km ... 100 m | MF  Medium ~  Mittel ~ |
| 3 MHz ... 30 MHz | 100 m ... 10 m | HF  High ~  Kurz ~ |
| 30 MHz ... 300 MHz | 10 m ... 1 m | VHF  Very High ~  Ultrakurz ~ |
| 300 MHz ... 3 GHz | 1 m ... 10 cm | UHF  Ultra High ~  Dezimeter ~ |
| 3 GHz ... 30 GHz | 10 cm ... 1 cm | SHF  Super High ~  Zentimeter ~ |
| 30 GHz ... 300 GHz | 1 cm ... 1 mm | EHF  Extremely High ~  Millimeter ~ |

**Abb. 21.19.** Frequenz- und Wellenlängenbereiche für drahtlose Verbindungen im Bereich von 30 kHz bis 300 GHz

| Bezeichnung | P | L | S | C | X | Ku | K | Ka | Q | E | F | G |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| von, in GHz | 0,2 | 1 | 2 | 4 | 8 | 12 | 18 | 27 | 40 | 60 | 90 | 140 |
| bis, in GHz | 1 | 2 | 4 | 8 | 12 | 18 | 27 | 40 | 60 | 90 | 140 | 220 |

**Abb. 21.20.** Mikrowellenbänder

| Bezeichnung | Frequenz | Wellenlänge |
|---|---|---|
| Langwellen-Rundfunk | 148,5 ... 283,5 kHz | 2,02 ... 1,06 km |
| Mittelwellen-Rundfunk | 526,5 ... 1606,5 kHz | 572 ... 187 m |
| Kurzwellen-Rundfunk | 3,9 ... 26,1 MHz | 76 ... 11,5 m |
| Fernsehbereich I | 41 ... 68 MHz | 7,31 ... 4,41 m |
| UKW-Rundfunk | 88 ... 108 MHz | 3,41 ... 2,78 m |
| Fernsehbereich III | 174 ... 230 MHz | 1,72 ... 1,3 m |
| Fernsehbereich IV+V | 470 ... 860 MHz | 63,8 ... 34,9 cm |
| Satelliten-Fernsehbereich | 10,7 ... 12,75 GHz | 2,8 ... 2,35 cm |

**Abb. 21.21.** Frequenz- und Wellenlängenbereiche für Rundfunk und Fernsehen

| System | Uplink | Downlink |
|---|---|---|
| GSM900 | 890 ... 915 MHz | 935 ... 960 MHz |
| GSM1800 | 1710 ... 1785 MHz | 1805 ... 1880 MHz |
| UMTS | 1920 ... 1980 MHz | 2110 ... 2170 MHz |

Uplink: Mobilteil $\rightarrow$ Basisstation  
Downlink: Basisstation $\rightarrow$ Mobilteil

**Abb. 21.22.**  
Frequenzbereiche für die  
Mobilkommunikation

Neben dieser anwendungsunabhängigen Einteilung in Bereiche oder Bänder ist jeder speziellen Anwendung ein Frequenzbereich zugeteilt. Abbildung 21.21 zeigt die Bereiche für Rundfunk und Fernsehen, Abb. 21.22 die für die Mobilkommunikation.

### 21.2.3 Faseroptische Verbindung

Neben der Verbindung über Koaxial- oder Zweidrahtleitungen und der drahtlosen Verbindung gewinnt die faseroptische Verbindung über Lichtwellenleiter (Glasfaser) zunehmend an Bedeutung. Dabei wird ein Trägersignal im Infrarotbereich ($f$ = 190 ... 360 THz, $\lambda$ = 1,55 ... 0,85 $\mu$m) verwendet, das mit Signalfrequenzen bis zu 100 GHz moduliert
<!-- page-import:1199:end -->

<!-- page-import:1200:start -->
21.2 Übertragungskanäle 1163

Ruhe-
strom

Sende-
verstärker

Lichtwellenleiter

$\lambda = 0{,}85 / 1{,}3 / 1{,}55\ \mu\mathrm{m}$

Vorspan-
nung

Empfangs-
verstärker

Sendediode:
- Lumineszenzdiode (LED)
- Laserdiode

Empfangsdiode
- Fotodiode
- Avalanche-Fotodiode

**Abb. 21.23.** Komponenten eines einfachen faseroptischen Übertragungssystems

werden kann; dadurch sind theoretisch Übertragungsraten bis zu 200 Gbit/s möglich. Zur Zeit sind Systeme mit 10 Gbit/s im Einsatz; Systeme mit bis zu 40 Gbit/s werden erprobt. Aufgrund der sehr kleinen relativen Modulationsbandbreite (Signal- zu Trägerfrequenz $\ll 10^{-3}$) ist die Dämpfung im Übertragungsband konstant; deshalb ist der Aufwand für die Entzerrung im Empfänger trotz der erheblich höheren Datenraten geringer als bei Leitungen.

Ein weiterer Vorteil der faseroptischen Verbindung ist die Unempfindlichkeit gegen äußere elektromagnetische Störungen (optimale passive elektromagnetische Verträglichkeit) und das Fehlen jeglicher Störausstrahlung (optimale aktive elektromagnetische Verträglichkeit); deshalb kann man Lichtwellenleiter ohne gegenseitige Beeinflussung in Bündeln durch stark elektromagnetisch gestörte Bereiche verlegen.

Abbildung 21.23 zeigt die Komponenten eines einfachen faseroptischen Übertragungssystems. Im Sender wird die Strahlungsintensität der Sendediode mit einem elektrischen Signal moduliert, im Empfänger wird die einfallende Strahlungsintensität mit einer Empfangsdiode in ein elektrisches Signal zurückgewandelt. In leistungsfähigeren Systemen werden zusätzlich besondere elektro-optische Komponenten wie z.B. optische Verstärker, Wellenlängenmultiplexer und optische Oszillatoren eingesetzt. Wir beschreiben hier nur die Eigenschaften der verschiedenen Lichtwellenleiter und verweisen darüber hinaus auf die Literatur [21.2],[21.3].

### 21.2.3.1 Lichtwellenleiter

Ein hochwertiger Lichtwellenleiter besteht aus einer sehr dünnen Faser aus Silikatglas; dabei werden die in Abb. 21.24 gezeigten Querschnitte verwendet. Die Strahlung breitet sich im Kern mit der Brechzahl $n_K$ und dem Durchmesser $d_K$ aus, während der Mantel mit der etwas geringeren Brechzahl $n_M$ und dem Außendurchmesser $d_M$ nur zur Führung benötigt wird; die äußere Umhüllung dient zum Schutz des Lichtwellenleiters. Typische Werte für eine Stufenfaser sind $n_K \approx 1{,}4$ und $n_M/n_K \approx 0{,}99$, d.h. die Brechzahl des Mantels ist nur um 1% geringer als die des Kerns. Lichtwellenleiter aus Glas werden als Glasfasern bezeichnet.

Seit einiger Zeit gibt es auch Lichtwellenleiter aus Kunststoff, die als Plastikfasern bezeichnet werden. Sie sind billiger und aufgrund ihrer hohen mechanischen Flexibilität einfacher zu verlegen als Lichtwellenleiter aus Glas, haben aber erheblich schlechtere Ausbreitungseigenschaften und können deshalb nur für kurze Verbindungen und niedrige Datenraten eingesetzt werden. Ihr Durchmesser ist erheblich größer als der von Lichtwellenleitern aus Glas; typisch sind $d_K = 0{,}98\ \mathrm{mm}$ und $d_M = 1\ \mathrm{mm}$.
<!-- page-import:1200:end -->

<!-- page-import:1201:start -->
1164  21. Grundlagen

a Stufenfaser

b Gradientenfaser

c Einmodenfaser

**Abb. 21.24.** Querschnitt, Brechzahlverlauf und Ausbreitungsverhalten von Lichtwellenleitern aus Silikatglas

##### 21.2.3.1.1 Grenzwinkel und Akzeptanzwinkel

Die Ausbreitung kann mit Hilfe der Strahlenoptik veranschaulicht werden. Demnach wird ein im Kern verlaufender Strahl an der Grenzfläche zum Mantel total reflektiert, d.h. in den Kern zurückgebrochen, wenn der Winkel zwischen Strahl und Grenzfläche kleiner als der Grenzwinkel $\beta_g$ ist; es gilt $^3$:

$$
\cos \beta_g = \frac{n_M}{n_K} < 1
$$

Mit den typischen Werten für eine Stufenfaser erhält man $\beta_g \approx 8^\circ$. Damit der Winkel im Lichtwellenleiter kleiner bleibt als der Grenzwinkel, muss der Einfallswinkel an der Stirnseite kleiner als der Akzeptanzwinkel $\alpha_A$ sein. Abbildung 21.25 veranschaulicht die Zusammenhänge. Aus dem Brechungsgesetz folgt:

$$
\frac{\sin \alpha_A}{\sin \beta_g} = n_K
$$

---

$^3$ In der Strahlenoptik wird häufig der Winkel zwischen dem Strahl und der *Normale* der Grenzfläche (Senkrechte auf der Grenzfläche) verwendet; in diesem Fall gilt $\sin \beta_g = n_M/n_K$. Wir beziehen den Winkel auf die Faserachse.
<!-- page-import:1201:end -->

<!-- page-import:1202:start -->
21.2 Übertragungskanäle 1165

**Abb. 21.25.**  
Grenzwinkel $\beta_g$ und Akzeptanzwinkel $\alpha_A$

#### 21.2.3.1.2 Numerische Apertur

In der Praxis wird anstelle des Akzeptanzwinkels die numerische Apertur

$$
A_N = \sin \alpha_A = n_K \sin \beta_g = n_K \sqrt{1-\cos^2\beta_g} = \sqrt{n_K^2-n_M^2}
$$

angegeben; ein typischer Wert ist $A_N = 0{,}2$. Die Angabe von $\beta_g$ und $A_N$ ist äquivalent zur Angabe von $n_K$ und $n_M$. Die numerische Apertur ist eine wichtige Größe im Zusammenhang mit der Kopplung zwischen Sendediode und Lichtwellenleiter; ein hoher Wert, verbunden mit einem entsprechend hohen Akzeptanzwinkel, ist von Vorteil. Für die Ausbreitungsgeschwindigkeit gilt:

$$
v = \frac{c_0}{\sqrt{\varepsilon_{r,K}}} = \frac{c_0}{n_K}
$$

Dabei ist $\varepsilon_{r,K} = n_K^2$ die Dielektrizitätskonstante des Kernmaterials.

#### 21.2.3.1.3 Moden

Bei Anwendung der Maxwell’schen Gleichungen zeigt sich, dass aufgrund der Randbedingungen für die Felder nicht alle Winkel im Bereich $0 \le \beta < \beta_g$ für eine Ausbreitung in Frage kommen; es sind vielmehr nur diskrete Winkel $\beta_m$ entsprechend der Beziehung

$$
\sin \beta_m = \frac{\sqrt{2\lambda m}}{\pi\,d_K}
\qquad \text{mit } m = 0,1,2,\dots \text{ und } m \le \frac{\pi\,d_K}{\sqrt{2\lambda}}
$$

möglich [21.2]. Die zu diesen Winkeln gehörenden Strahlen werden Moden oder Eigenwellen genannt; ihre Anzahl nimmt mit zunehmendem Durchmesser des Kerns zu.

Bei einer Stufenfaser ist der Durchmesser des Kerns so groß, dass sich mehrere Moden ausbreiten können, siehe Abb 21.24a. Da die verschiedenen Moden unterschiedliche Wegstrecken zurücklegen, wird ein von der Sendediode eingekoppelter Impuls mit zunehmender Faserlänge zeitlich immer weiter aufgeweitet. Durch diese Modendispersion wird die Bandbreite vor allem bei großen Faserlängen stark begrenzt; deshalb wird die Stufenfaser im Weitverkehr nicht mehr eingesetzt. In einfachen Systemen mit Entfernungen bis zu 100 Metern und Datenraten bis maximal 40 Mbit/s werden Stufenfasern aus Kunststoff eingesetzt [21.4].

Bei der Gradientenfaser wird ein stetiger Übergang der Brechzahl verwendet; dadurch werden die Moden im Sinne einer kontinuierlichen Totalreflexion in Richtung der Faserachse zurückgebogen, siehe Abb 21.24b. Da die Ausbreitungsgeschwindigkeit in den Außenbereichen des Kerns aufgrund der abnehmenden Brechzahl zunimmt, breiten sich die schräg verlaufenden Moden schneller aus als die Mode auf der Faserachse; dadurch wird die Modendispersion stark verringert und die Bandbreite erhöht. Die Gradientenfaser erreicht zwar nicht die Bandbreite der nachfolgend beschriebenen Einmodenfaser,
<!-- page-import:1202:end -->

<!-- page-import:1203:start -->
1166  21. Grundlagen

Abb. 21.26. Dämpfungskoeffizient eines typischen Lichtwellenleiters aus Silikatglas in Abhängig-
keit von der Wellenlänge

hat aber den Vorteil, dass aufgrund des größeren Kerndurchmessers eine einfachere Ver-
bindungstechnik mit größeren Toleranzen bezüglich der Ausrichtung verwendet werden
kann.

Bei der *Einmodenfaser* ist der Kerndurchmesser so klein, dass sich nur noch die Grund-
mode ausbreiten kann, siehe Abb. 21.24c; dadurch entfällt die Modendispersion. Den zu-
lässigen Kerndurchmesser erhält man aus der Bedingung, dass der Winkel der Mode mit
$m = 1$ bereits über dem Grenzwinkel liegen muss:

$$
\beta_1 \;>\; \beta_g \;\Rightarrow\; d_K \;<\; \frac{\sqrt{2\lambda}}{\pi \sqrt{1-\left(\frac{n_M}{n_K}\right)^2}} \;\;\overset{n_K/n_M \approx 0.999}{\approx}\; 10\,\lambda
$$

Die Brechzahl des Mantels ist in diesem Fall nur noch um 0,1 % geringer als die des Kerns,
damit der zulässige Kerndurchmesser nicht zu klein wird. Mit dieser Faser wird die höchste
Bandbreite erzielt. Nachteilig ist die aufwendige Verbindungstechnik.

#### 21.2.3.2 Wellenlängenbereiche

Zur Übertragung mit Lichtwellenleitern aus Silikatglas (*Glasfasern*) werden drei Bereiche
genutzt, in denen die Dämpfung besonders gering ist, siehe Abb. 21.26. Diese Bereiche
werden als *Fenster* bezeichnet. Abbildung 21.27 fasst die Kenngrößen der Fenster zusam-
men. Es wird grundsätzlich immer die *Freiraumwellenlänge* angegeben; dadurch ist die
Angabe unabhängig von der Brechzahl des Lichtwellenleiters.

Das Fenster 1 wird trotz seiner vergleichsweise hohen Dämpfung oft verwendet, da
man im Sender herkömmliche Infrarot-Lumineszenzdioden (IR-LED) und im Empfänger
herkömmliche Infrarot-Fotodioden (IR-Fotodioden) einsetzen kann. Die Verbindungslän-
gen sind kleiner als fünf Kilometer und die Datenraten liegen unter 200 Mbit/s; dabei
werden Gradientenfasern mit $d_K = 50\ \mu\mathrm{m}$ verwendet.

Für Verbindungen im Weitverkehr mit höchsten Datenraten werden ausschließlich die
Fenster 2 und 3 verwendet; dabei geht man von den bisher verwendeten Gradientenfasern
zunehmend auf Einmodenfasern mit $d_K = 10\ \mu\mathrm{m} < 10\lambda$ über. Datenraten über 1 Gbit/s
<!-- page-import:1203:end -->

<!-- page-import:1204:start -->
21.2 Übertragungskanäle 1167

werden nur mit Einmodenfasern erzielt. Auf der Sendeseite werden Laserdioden und auf der Empfangsseite Avalanche-Fotodioden eingesetzt.

Zur Übertragung mit Lichtwellenleitern aus Kunststoff (*Plastikfasern*) wird häufig sichtbares Licht mit einer Wellenlänge von $\lambda$ = 660 $\mu$m verwendet. Die Dämpfung ist extrem hoch, so dass die Verbindungslänge auf 100 m beschränkt ist. Im Sender werden rote Lumineszenzdioden (LED) und im Empfänger Fotodioden für den sichtbaren Bereich eingesetzt.

## 21.2.4 Vergleich der Übertragungskanäle

Wir beschränken uns hier auf einen Vergleich der Dämpfungen, da ein Vergleich der Datenraten nur unter Berücksichtigung der Modulationsverfahren möglich ist. Außerdem ist die Datenrate bei drahtloser Übertragung durch den zugeteilten Frequenzbereich und nicht durch die Trägerfrequenz limitiert.

Abbildung 21.28 zeigt die Überlegenheit des Lichtwellenleiters im Vergleich zur Koaxialleitung. Da die Modulation beim Lichtwellenleiter sehr schmalbandig ist, hängt die Dämpfung nur von der Entfernung ab; bei einer zulässigen Dämpfung von 40 dB zwischen Sender und Empfänger kann man bis zu 100 km ohne Zwischenverstärker überbrücken. Bei der Koaxialleitung hängt die Dämpfung auch von der Frequenz ab; deshalb ist die überbrückbare Entfernung durch die maximal zulässige Dämpfung bei der oberen Grenzfrequenz gegeben.

Bei der drahtlosen Verbindung geht die Entfernung nur logarithmisch in die Dämpfung ein; deshalb erhält man in der halblogarithmischen Darstellung in Abb. 21.28 Geraden. Die drahtlose Verbindung ist im Grenzfall sehr großer Entfernungen allen anderen Verbindungen überlegen. Allerdings muss die technisch zur Verfügung stehende Bandbreite unter den zahlreichen Systemen aufgeteilt werden. Aufgrund der hohen Empfindlichkeit schmalbandiger Empfänger kann die zulässige Dämpfung bis zu 150 dB betragen. In Abb. 21.28 ist allerdings nur die Grunddämpfung dargestellt; die Abnahme der Dämpfung durch die Gewinne von Sende- und Empfangsantenne (üblicherweise $3 \dots 20$ dB, bei großen Parabolantennen über 40 dB) und die Zusatzdämpfung durch Luft, Regen, Nebel und bodennahe Absorption sind nicht berücksichtigt. Der Hauptvorteil der drahtlosen Verbindung ist natürlich die Drahtlosigkeit.

Für den Fernsprech- und Datenverkehr werden heute fast ausschließlich faseroptische Verbindungen mit mehreren parallel verlegten Lichtwellenleitern verwendet; darauf beruht die hohe Übertragungsleistung öffentlicher und privater Weitverkehrsnetze wie z.B. dem *Internet*.

| Bezeichnung | Wellenlänge [nm] | Frequenz [THz] | Dämpfung [dB/km] | Lichtwellenleiter |
|---|---:|---:|---:|---|
|  | 660 | 455 | 230 (!) | Plastikfaser |
| Fenster 1 | 850 | 353 | 2 | Gradientenfaser |
| Fenster 2 | 1300 | 231 | 0,6 | Gradienten- und Einmodenfaser |
| Fenster 3 | 1550 | 194 | 0,2 | Einmodenfaser |

**Abb. 21.27.** Wellenlängenbereiche für Lichtwellenleiter
<!-- page-import:1204:end -->
