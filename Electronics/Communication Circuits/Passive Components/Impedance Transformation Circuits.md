# Impedance Transformation Circuits

<!-- page-import:1323:start -->
1286  23. Passive Komponenten

**Abb. 23.3.** Reflexionsfaktor von SMD-Widerständen

Die Parallelresonanz ist bei einer Spule stark ausgeprägt, wie die Betragsverläufe der Impedanz im oberen Teil von Abb. 23.4 zeigen. Bei der Frequenz

$$
\omega_r = \frac{1}{\sqrt{LC_L}}
\quad\Rightarrow\quad
f_r = \frac{1}{2\pi\sqrt{LC_L}}
$$

(23.6)

erhält man die Güte:

$$
Q_r = \frac{1}{R_L(f_r)} \sqrt{\frac{L}{C_L}}
= \frac{\sqrt{2\pi}}{k_{RL}} \sqrt[4]{\frac{L^3}{C_L}}
$$

(23.7)

Für SMD-Spulen der Baugrößen 1206 und 1812 gilt $Q_r \approx 100 \dots 300$. Bezüglich der Resonanzfrequenz muss man zwischen der Phasenresonanzfrequenz

$$
f_{r,ph} = f_r \sqrt{1 - \frac{1}{Q_r^2}}
$$

und der Betragsresonanzfrequenz

$$
f_{r,max} \approx f_r \sqrt{1 - \frac{1}{2Q_r^4}}
$$

unterscheiden [23.1]. Bei der Phasenresonanzfrequenz wird die Impedanz der Spule reell. Bei der Betragsresonanzfrequenz nimmt der Betrag der Impedanz den Maximalwert

$$
Z_{L,max} \approx Q_r^2 R_L(f_r)
$$
<!-- page-import:1323:end -->

<!-- page-import:1337:start -->
1300 23. Passive Komponenten

Standard-Filter ($D = 21{,}5\,\mathrm{dB}$)  low-loss-Filter ($D = 7{,}5\,\mathrm{dB}$)

$\dfrac{|A|}{\mathrm{dB}}$

$-21$
$-22$
$-23$
$-24$
$-25$

69,5M 70M 70,5M

$\dfrac{f}{\mathrm{Hz}}$

$\dfrac{|A|}{\mathrm{dB}}$

$-7$
$-8$
$-9$
$-10$
$-11$

**Abb. 23.18.**  
Betragsfrequenzgang  
eines Standard- und eines  
low-loss-SAW-Filters  
mit einer Mittenfrequenz  
$f_M = 70\,\mathrm{MHz}$ und  
einer 3-dB-Bandbreite  
$B = 1\,\mathrm{MHz}$

Der Betragsfrequenzgang eines SAW-Filters wird für den Fall beidseitiger Anpassung an den Wellenwiderstand $Z_W = 50\,\Omega$ angegeben. Ohne Anpassung wird weder der spezifizierte Frequenzgang noch die spezifizierte Dämpfung erreicht. Die Schaltungen zur Anpassung sind im Datenblatt angegeben. Die Impedanz der beiden Wandler kann mit Hilfe des in Abb. 23.19a gezeigten elektro-mechanischen Ersatzschaltbilds eines piezoelektrischen Wandlers beschrieben werden. Dabei sind $R_m$, $L_m$ und $C_m$ die Ersatzelemente zur Beschreibung der mechanischen Eigenschaften; $C_{stat}$ ist die statische Kapazität der ineinander greifenden Elektroden des Wandlers. Bei der Mittenfrequenz wird die Impedanz des elektro-mechanischen Teils reell; dann wird nur noch der elektro-mechanische Widerstand $R_m$ und die statische Kapazität $C_{stat}$ wirksam, siehe Abb. 23.19b. Die Größenverhältnisse sind so, dass die Impedanz des Wandlers nicht nur bei der Mittenfrequenz, sondern über den gesamten Durchlassbereich und darüber hinaus ohmsch-kapazitiv ist. Der Widerstand $R_m$ ist im allgemeinen größer als $50\,\Omega$; deshalb muss die aus der Kapazität $C_{stat}$ und den äußeren Elementen bestehende Anpassschaltung eine Transformation von $R_m$ auf $50\,\Omega$ bewirken. Abbildung 23.20 zeigt drei Beispiele.

## 23.3 Schaltungen zur Impedanztransformation

Schaltungen zur Impedanztransformation werden zur *Anpassung* und zur *Ankopplung* benötigt. Bei der Anpassung wird die Ein- oder Ausgangsimpedanz einer Komponente an den Wellenwiderstand einer Leitung angepasst, damit keine Reflexionen auftreten und die übertragene Leistung maximal wird. In einigen Fällen wird auch eine gezielte Fehlanpassung

statische  
Kapazität  
des Wandlers

elektro-mechanisches  
Ersatzschaltbild  
des Wandlers

$C_{stat}$

$L_m$ $C_m$ $R_m$

a für den Bereich um die Mittenfrequenz

b bei der Mittenfrequenz

**Abb. 23.19.** Ersatzschaltbild eines piezoelektrischen Wandlers
<!-- page-import:1337:end -->

<!-- page-import:1338:start -->
23.3 Schaltungen zur Impedanztransformation 1301

70 MHz Standard-Filter (Sawtek 851544)

309 nH

14,7 pF 419 $\Omega$ 288 $\Omega$ 17,2 pF

248 nH

70 MHz low-loss-Filter (Sawtek 854452)

120 nH

100 pF

63 pF 143 $\Omega$ 60 $\Omega$ 23,5 pF

100 nH

18 pF

190 MHz low-loss-Filter (Sawtek 855529)

22 nH

31,9 pF 50 $\Omega$ 96,7 $\Omega$ 20,5 pF

10 nH

27 nH

**Abb. 23.20.** Anpassung von SAW-Filtern an $Z_W = 50\ \Omega$

vorgenommen. Bei der Ankopplung wird eine Last an einen Schwingkreis angeschlossen; dabei wird die Impedanz der Last so transformiert, dass die Güte des Schwingkreises einen vorgeschriebenen Wert erreicht.

## 23.3.1 Anpassung

Wir beschreiben im folgenden einfache reaktive Netzwerke zur verlustlosen Anpassung einer beliebigen Impedanz an den Wellenwiderstand $Z_W$ einer Leitung. Die Anpassung ist in diesem Fall schmalbandig und nur bei einer Frequenz exakt. In der Praxis reicht dies aus, solange die Bandbreite der Anpassung größer ist als die Bandbreite des zu übertragenden Signals. Als Kriterium wird der Reflexionsfaktor $r$ verwendet, der bei der Mittenfrequenz zu Null werden muss (= Anpassung) und dessen Betrag an den Bandgrenzen einen bestimmten Wert nicht überschreiten soll; meist wird $|r| < 0{,}1$ gefordert. Die Überprüfung erfolgt durch eine Schaltungssimulation oder durch eine Messung an einem Testaufbau.

Die Bandbreite der Anpassung nimmt mit zunehmendem Transformationsfaktor ab; deshalb kann man Impedanzen mit $|Z| \ll Z_W$ und $|Z| \gg Z_W$ nur sehr schmalbandig anpassen. Wenn die Bandbreite der einfachen Anpassnetzwerke nicht ausreicht, muss man aufwendigere Netzwerke zur breitbandigen Anpassung verwenden. Diese Netzwerke sind häufig nicht verlustfrei, da man in diesem Fall neben dem Reflexionsfaktor auch das breitbandige Übertragungsverhalten optimieren muss. Wir gehen darauf nicht näher ein und verweisen auf die Literatur [23.1].

### 23.3.1.1 Anpassnetzwerke mit zwei Elementen

Abbildung 23.21 zeigt zwei Netzwerke zur Anpassung einer Impedanz $Z = R + jX$ an den Wellenwiderstand $Z_W$ einer Leitung. Die Anpassung erfolgt mit zwei reaktiven Elementen, die bei der Mittenfrequenz $f_M$ die Reaktanzen $X_1$ und $X_2$ besitzen. Wenn anstelle der Impedanz $Z$ die Admittanz $Y = G + jB$ gegeben ist, muss man zunächst eine
<!-- page-import:1338:end -->

<!-- page-import:1339:start -->
1302  23. Passive Komponenten

a für $R < Z_W$  
b für $R > Z_W$

**Abb. 23.21.** Anpassnetzwerke mit zwei Elementen. Dimensionierung mit (23.25) für $R < Z_W$ und (23.27) für $R > Z_W$.

Umrechnung vornehmen:

$$
Z=\frac{1}{Y}=\frac{1}{G+jB}=\frac{G-jB}{G^2+B^2}
$$

$$
\Rightarrow \quad R=\frac{G}{G^2+B^2}, \quad X=-\frac{B}{G^2+B^2}
\eqno{(23.24)}
$$

Für das Netzwerk in Abb. 23.21a erhält man die Bedingung:

$$
jX_1 \parallel (Z+jX_2)=\frac{jX_1\,(Z+jX_2)}{Z+j(X_1+X_2)} \stackrel{!}{=} Z_W
$$

Durch Einsetzen von $Z=R+jX$, Trennen nach Real- und Imaginärteil und Auflösen nach $X_1$ und $X_2$ erhält man die Bedingungen:

$$
X_1=\pm \frac{Z_W R}{\sqrt{R\,(Z_W-R)}}, \quad X_2=\mp \sqrt{R\,(Z_W-R)}-X
\eqno{(23.25)}
$$

Dabei muss $R < Z_W$ gelten, damit der Term unter den Wurzeln positiv bleibt; deshalb kann man mit diesem Netzwerk nur eine Aufwärtstransformation $R \to Z_W > R$ durchführen. Es gibt zwei Lösungen entsprechend den $\pm$-Vorzeichen; dabei muss bei einer Reaktanz das positive und bei der anderen Reaktanz das negative Vorzeichen gewählt werden. Eine positive Reaktanz wird durch eine Induktivität, eine negative durch eine Kapazität realisiert:

$$
X_{1/2}>0 \quad \Rightarrow \quad L_{1/2}=\frac{X_{1/2}}{2\pi f_M}
$$

$$
X_{1/2}<0 \quad \Rightarrow \quad C_{1/2}=-\frac{1}{2\pi f_M X_{1/2}}
\eqno{(23.26)}
$$

Für Widerstände $(Z=R, X=0)$ unterscheiden sich die Vorzeichen von $X_1$ und $X_2$ in (23.25); damit erhält man die in Abb. 23.22 gezeigten Varianten mit einer Induktivität und einer Kapazität. Die Variante in Abb. 23.22a hat eine Tiefpass- und die in Abb. 23.22b eine Hochpass-Charakteristik. Bei allgemeinen Impedanzen $(X \neq 0)$ hängt das Vorzeichen von $X_2$ zusätzlich von der Reaktanz $X$ ab; dann sind auch Varianten mit zwei Induktivitäten $(X_1, X_2 > 0)$ oder zwei Kapazitäten $(X_1, X_2 < 0)$ möglich. Bei $X_2=0$ entfällt das Serien-Element und die Anpassung erfolgt mit einer Parallel-Induktivität $(X_1>0)$ oder einer Parallel-Kapazität $(X_1<0)$.

Für das Netzwerk in Abb. 23.21b erhält man die Bedingung:

$$
jX_1+(Z \parallel jX_2)=\frac{jZ\,(X_1+X_2)-X_1X_2}{Z+jX_2} \stackrel{!}{=} Z_W
$$
<!-- page-import:1339:end -->

<!-- page-import:1340:start -->
## 23.3 Schaltungen zur Impedanztransformation 1303

a mit Tiefpass-Charakteristik  
$(X_1 < 0, X_2 > 0)$

b mit Hochpass-Charakteristik  
$(X_1 > 0, X_2 < 0)$

**Abb. 23.22.** Aufwärtstransformation von Widerständen. Dimensionierung mit (23.25) und (23.26).

Durch Einsetzen von $Z = R + jX$, Trennen nach Real- und Imaginärteil und Auflösen nach $X_1$ und $X_2$ erhält man die Bedingungen:

$$
X_1 = \pm Z_W \sqrt{\frac{R^2 + X^2}{Z_W R} - 1}
$$

$$
X_2 = \mp \frac{(R^2 + X^2)}{R \sqrt{\frac{R^2 + X^2}{Z_W R} - 1} \pm X}
\qquad (23.27)
$$

Für Widerstände $(Z = R, X = 0)$ gilt:

$$
X_1 = \pm \sqrt{Z_W (R - Z_W)}, \quad
X_2 = \mp \frac{Z_W R}{\sqrt{Z_W (R - Z_W)}}
\qquad (23.28)
$$

Dabei muss $R > Z_W$ gelten, damit der Term unter den Wurzeln positiv bleibt; deshalb kann man mit diesem Netzwerk bei Widerständen nur eine *Abwärtstransformation* $R \rightarrow Z_W < R$ durchführen. Dagegen kann man bei komplexen Impedanzen $(X \neq 0)$ auch eine Aufwärtstransformation durchführen, solange

$$
R^2 + X^2 > Z_W R
$$

gilt; bei $|X| > Z_W/2$ ist dies für alle Werte von $R$ möglich. Auch hier gibt es zwei Lösungen, und die Elemente werden gemäß (23.26) durch eine Induktivität oder eine Kapazität realisiert.

Für Widerstände $(Z = R, X = 0)$ unterscheiden sich die Vorzeichen von $X_1$ und $X_2$, siehe (23.28); damit erhält man die in Abb. 23.23 gezeigten Varianten mit einer Induktivität und einer Kapazität. Die Variante in Abb. 23.23a hat eine Tiefpass- und die in Abb. 23.23b eine Hochpass-Charakteristik. Bei allgemeinen Impedanzen $(X \neq 0)$ hängt das Vorzeichen von $X_2$ zusätzlich von der Reaktanz $X$ ab; dann sind auch Varianten mit zwei Induktivitäten $(X_1, X_2 > 0)$ oder zwei Kapazitäten $(X_1, X_2 < 0)$ möglich. Wenn in (23.27) der Term im Nenner von $X_2$ zu Null wird, entfällt das Parallel-Element und die Anpassung erfolgt mit einer Serien-Induktivität $(X_1 > 0)$ oder einer Serien-Kapazität $(X_1 < 0)$.

Man kann die Filtercharakteristik der Anpassnetzwerke zur Unterdrückung unerwünschter Signalanteile nutzen. Enthält das Signal z.B. noch Reste eines Lokaloszillatorsignals oder eines unerwünschten Seitenbandes, die durch eine vorausgehende Frequenzumsetzung verursacht werden, wählt man die Tiefpass-Charakteristik, wenn diese Anteile oberhalb der Mittenfrequenz liegen, und die Hochpass-Charakteristik, wenn sie unterhalb
<!-- page-import:1340:end -->

<!-- page-import:1341:start -->
1304 23. Passive Komponenten

a mit Tiefpass-Charakteristik  
$(X_1 > 0, X_2 < 0)$

b mit Hochpass-Charakteristik  
$(X_1 < 0, X_2 > 0)$

**Abb. 23.23.** Abwärtstransformation von Widerständen. Dimensionierung mit (23.28) und (23.26).

liegen. Dagegen muss man bei der Anpassung von Verstärkern in erster Linie die Stabilität beachten.

*Beispiel:* Wir betrachten die eingangsseitige Anpassung des 70 MHz-*low-loss*-SAW-Filters in Abb. 23.20 auf Seite 1301. Das Ersatzschaltbild besteht aus einem Widerstand $R_m = 143\,\Omega$ und einer Parallel-Kapazität $C_{stat} = 63\,\mathrm{pF}$; daraus folgt bei der Mittenfrequenz $f_M = 70\,\mathrm{MHz}$ die Admittanz

$$
Y = G + jB = \frac{1}{R_m} + j\omega C_{stat}
\qquad \overset{\omega = 2\pi \cdot 70\,\mathrm{MHz}}{=}
\qquad (7 + j\,27{,}7)\,\mathrm{mS}
$$

mit $G = 7\,\mathrm{mS}$ und $B = 27{,}7\,\mathrm{mS}$. Durch Umrechnen mit (23.24) erhält man die Impedanz $Z$ mit $R = 8{,}58\,\Omega$ und $X = -33{,}9\,\Omega$. Die Anpassung an $Z_W = 50\,\Omega$ muss wegen $R < Z_W$ mit dem Anpassnetzwerk aus Abb. 23.21a erfolgen. Aus (23.25) folgt $X_1 = \pm 22{,}8\,\Omega$ und $X_2 = (\mp 18{,}9 + 33{,}9)\,\Omega$. Wir wählen hier die Tiefpass-Charakteristik mit $X_1 = -22{,}8\,\Omega$ und $X_2 = 52{,}8\,\Omega$, um die Dämpfung bei Frequenzen oberhalb des Durchlassbereichs zu erhöhen; daraus folgt mit (23.26):

$$
C_1 = \frac{1}{2\pi \cdot 70\,\mathrm{MHz} \cdot 22{,}8\,\Omega} \approx 100\,\mathrm{pF}
,\qquad
L_2 = \frac{X_2}{2\pi \cdot 70\,\mathrm{MHz}} \approx 120\,\mathrm{nH}
$$

Für die Variante mit Hochpass-Charakteristik erhält man zwei Induktivitäten: $X_1 = 22{,}8\,\Omega \rightarrow L_1 \approx 52\,\mathrm{nH}$ und $X_2 = 15\,\Omega \rightarrow L_2 \approx 34\,\mathrm{nH}$. In diesem Fall erhält man aufgrund der Serien-Induktivität $L_2$ zusätzlich eine Tiefpass-Charakteristik, so dass insgesamt eine Bandpass-Charakteristik vorliegt. Abbildung 23.24 zeigt die beiden Varianten.

Anpass-
netzwerk

eingangsseitiges
Ersatzschaltbild
des SAW-Filters

Anpass-
netzwerk

eingangsseitiges
Ersatzschaltbild
des SAW-Filters

a mit Tiefpass-Charakteristik

b mit Hochpass-Charakteristik

**Abb. 23.24.** Eingangsseitige Anpassung eines 70 MHz-*low-loss*-SAW-Filters an $Z_W = 50\,\Omega$
<!-- page-import:1341:end -->

<!-- page-import:1342:start -->
23.3 Schaltungen zur Impedanztransformation 1305

Abb. 23.25.  
Collins-Filter

#### 23.3.1.2 Collins-Filter

In der Praxis wird anstelle der einfachen Anpassnetzwerke mit zwei Elementen häufig das in Abb. 23.25 gezeigte $\pi$-Netzwerk mit zwei Parallel-Kapazitäten und einer Serien-Induktivität eingesetzt; es wird als Collins-Filter bezeichnet und hat Tiefpass-Charakteristik. Den zusätzlichen Freiheitsgrad, den man durch das dritte Element erhält, kann man zur Optimierung der Bandbreite oder zur Verschiebung der Werte der Elemente in einen für die Realisierung günstigeren Bereich verwenden.

Wir beschränken uns hier zunächst auf die Anpassung von Widerständen; dann erhält man bei der Mittenfrequenz $\omega_M = 2 \pi f_M$ die Bedingung:

$$
\frac{1}{j \omega_M C_1 + \frac{1}{j \omega_M L + \frac{1}{j \omega_M C_2 + \frac{1}{R}}}} = Z_W
$$

Daraus erhält man durch Ausmultiplizieren und Trennen nach Real- und Imaginärteil unter Verwendung des Transformationsverhältnisses

$$
t \;=\; \frac{R}{Z_W}
\qquad\qquad (23.29)
$$

und des Kapazitätsverhältnisses

$$
c \;=\; \frac{C_1}{C_2}
\qquad\qquad (23.30)
$$

die Dimensionierungsgleichungen [23.6]:

$$
C_1 \;=\; \frac{c}{2 \pi f_M R} \sqrt{\frac{t \, (t - 1)}{t - c^2}}
\qquad\qquad (23.31)
$$

$$
C_2 \;=\; \frac{1}{2 \pi f_M R} \sqrt{\frac{t \, (t - 1)}{t - c^2}}
\qquad\qquad (23.32)
$$

$$
L \;=\; \frac{R}{2 \pi f_M} \sqrt{\frac{(t - 1)\,(t - c^2)}{t\,(t - c)^2}}
\qquad\qquad (23.33)
$$

Das Kapazitätsverhältnis muss in Abhängigkeit vom Transformationsverhältnis gewählt werden, damit die Terme unter den Wurzeln positiv sind:
<!-- page-import:1342:end -->

<!-- page-import:1344:start -->
## 23.3 Schaltungen zur Impedanztransformation

1307

immer schwieriger. Außerdem machen sich mit zunehmender Frequenz die parasitären Effekte der verwendeten Spulen und Kondensatoren immer stärker bemerkbar. Deshalb werden bei Frequenzen im GHz-Bereich häufig Streifenleitungen zur Anpassung verwendet. Es gibt eine Vielzahl von geeigneten Strukturen, die in der Literatur ausführlich beschrieben werden [23.1]. Wir stellen im folgenden einige typische Strukturen vor. Dabei ist zu beachten, dass die einzelnen Streifenleitungen einer Struktur direkt miteinander verbunden werden müssen; die räumliche Trennung in den nachfolgenden Abbildungen dient nur der besseren Darstellung.

Eine wichtige Klasse von Strukturen zur Anpassung mit Streifenleitungen basiert auf dem $\lambda/4$-Transformator, den wir bereits im Abschnitt 21.2 beschrieben haben, siehe Abb. 21.11 auf Seite 1155 und (21.26) auf Seite 1154. Ein $\lambda/4$-Transformator besteht aus einer Leitung der Länge $\lambda/4$ mit einem Wellenwiderstand $Z_{W1}$. Schließt man das eine Ende der Leitung mit einer Impedanz $Z = R + jX$ ab, erhält man am anderen Ende die Impedanz:

$$
Z_1 \qquad {}^{(21.26)} = \frac{Z_{W1}^2}{Z} = \frac{Z_{W1}^2}{R + jX} \stackrel{!}{=} Z_W
$$

Sie soll im Falle einer Anpassung mit dem Wellenwiderstand $Z_W$ der Verbindungsleitungen übereinstimmen.

Abbildung 23.27a zeigt die Anpassung für den Fall eines Widerstands $(Z = R, X = 0)$; dann muss die Leitung des $\lambda/4$-Transformators den Wellenwiderstand

$$
Z_{W1} = \sqrt{Z_W R}
$$

haben. Der Transformationsbereich ist eng begrenzt, da man den Wellenwiderstand einer Streifenleitung in der Praxis maximal um den Faktor 4 variieren kann, siehe Abb. 21.13 auf Seite 1157; daraus folgt bei $Z_W/2 < Z_{W1} < 2Z_W$ ein Transformationsbereich von $Z_W/4 < R < 4Z_W$.

Bei einer allgemeinen Impedanz $Z$ kann man die Struktur in Abb. 23.27b verwenden, bei der zunächst eine $\lambda/4$-Transformation auf

$$
Z_1 = \frac{Z_{W1}^2}{Z} \qquad \overset{Z_{W1}=\sqrt{Z_W R}}{=} \frac{Z_W R}{R + jX} = \frac{1}{\frac{1}{Z_W} + j\,\frac{X}{Z_W R}}
$$

vorgenommen wird; anschließend wird der reaktive Anteil mit einer Querreaktanz $X_2$ kompensiert. Aus der Bedingung $Z_1 \parallel jX_2 = Z_W$ folgt:

$$
X_2 = \frac{Z_W R}{X}
$$

Die Querreaktanz wird im kapazitiven Fall $(X < 0 \rightarrow X_2 < 0)$ durch eine kurze leerlaufende Leitung und im induktiven Fall $(X > 0 \rightarrow X_2 > 0)$ durch eine kurze kurzgeschlossene Leitung realisiert. Für die benötigte Länge erhält man im kapazitiven Fall aus (21.27)

$$
l_2 = \frac{\lambda}{2\pi}\arctan\!\left(-\frac{Z_{W1}}{X_2}\right) = \frac{\lambda}{2\pi}\arctan\!\left(-\frac{Z_{W1}X}{Z_W R}\right) \qquad \text{für } X < 0
$$

und im induktiven Fall aus (21.28):
<!-- page-import:1344:end -->

<!-- page-import:1345:start -->
1308  23. Passive Komponenten

a  Transformation eines Widerstands

$Z_{W1}=\sqrt{Z_W R}$

$l_1=\lambda/4$

$Z_W$

$R$

b  Transformation einer Impedanz mit anschließender Querkompensation

$Z_W$

$jX_2$

$Z_{W2}$

$l_2$

Leerlauf oder Kurzschluss

$Z_{W1}=\sqrt{Z_W R}$

$l_1=\lambda/4$

$Z=R+jX$

$Z_1=\dfrac{Z_{W1}^2}{Z}$

c  Transformation einer längskompensierten Impedanz

$Z_W$

$Z_{W1}=\sqrt{Z_W R_1}$

$l_1=\lambda/4$

$R_1,\ r_1=\pm |r_Z|$

$Z_{W2}=Z_W$

$l_2$

$Z,\ r_Z=\dfrac{Z-Z_W}{Z+Z_W}$

**Abb. 23.27.** Beispiele zur Anpassung mit Streifenleitungen bei Verwendung eines $\lambda/4$-Transformators

$$
l_2=\frac{\lambda}{2\pi}\arctan\left(\frac{X_2}{Z_{W1}}\right)=\frac{\lambda}{2\pi}\arctan\left(\frac{Z_W R}{Z_{W1}X}\right)\qquad \text{für } X>0
$$

Den Wellenwiderstand $Z_{W1}$ wählt man im kapazitiven Fall möglichst klein (breite Streifenleitung) und im induktiven Fall möglichst groß (schmale Streifenleitung), damit die Länge minimal wird. Man bezeichnet diese Leitungen als kapazitive und induktive Stichleitungen.

Abbildung 23.27c zeigt eine weitere Struktur zur Anpassung einer allgemeinen Impedanz $Z$. Zunächst wird der Reflexionsfaktor

$$
r_Z=|r_Z|\,e^{j\varphi_z}=\frac{Z-Z_W}{Z+Z_W}
$$

mit einer Verbindungsleitung ($Z_{W2}=Z_W$) der Länge $l_2$ so gedreht, dass er reell wird (Längskompensation): $r_1=\pm |r_Z|$; anschließend wird der zugehörige Widerstand

$$
R_1=\frac{1\pm |r_Z|}{1\mp |r_Z|}
$$

mit einem $\lambda/4$-Transformator mit

$$
Z_{W1}=\sqrt{Z_W R_1}
$$
<!-- page-import:1345:end -->

<!-- page-import:1346:start -->
## 23.3 Schaltungen zur Impedanztransformation

1309

auf den Wellenwiderstand $Z_W$ transformiert. Die Drehung des Reflexionsfaktors $r_Z$ erfolgt entsprechend (21.42) auf Seite 1173:

$$
r_1 = r_Z e^{-j\frac{4\pi l_2}{\lambda}} = |r_Z| e^{j\left(\varphi_z-\frac{4\pi l_2}{\lambda}\right)}
$$

Er wird für

$$
\varphi_z-\frac{4\pi l_2}{\lambda} = n\pi \quad \Rightarrow \quad l_2 = \frac{\lambda}{4}\left(\frac{\varphi_z}{\pi}-n\right) \qquad n \text{ ganzzahlig}
$$

reell. Damit die Leitung möglichst kurz wird, wählt man:

$$
\varphi_z > 0 \quad \Rightarrow \quad n = 0 \quad \Rightarrow \quad r_1 = |r_Z|
$$

$$
\varphi_z < 0 \quad \Rightarrow \quad n = -1 \quad \Rightarrow \quad r_1 = -|r_Z|
$$

Die Strukturen in Abb. 23.27 sind so ausgelegt, dass der erste Schritt der Anpassung durch eine Längsleitung erfolgt; dadurch wird eine räumliche Distanz zwischen der anzupassenden Impedanz und den weiteren Elementen hergestellt, die die Anordnung der Streifenleitungen auf dem Substrat erleichtert. Auf der angepassten Seite hat man bezüglich der Anordnung weiterer Elemente kein Problem, da man hier eine Verbindungsleitung mit dem Wellenwiderstand $Z_W$ zur räumlichen Trennung einsetzen kann.

Die Anpassung mit einem $\lambda/4$-Transformator ermöglicht nur ein eng begrenztes Transformationsverhältnis und ist bezüglich der benötigten Leitungslängen nicht optimal. Bessere Ergebnisse erzielt man mit den Strukturen in Abb. 23.28. Wir betrachten zunächst die Anpassung mit einer Längsleitung nach Abb. 23.28a; dazu verwenden wir die Gleichung (21.25), aus der wir die Eingangsimpedanz $Z_1$ einer Leitung mit dem Wellenwiderstand $Z_{W1}$ und der Länge $l_1$ bei Abschluss mit einer Impedanz $Z_2 = Z = R + jX$ ableiten, und fordern $Z_1 = Z_W$:

$$
Z_1 = \frac{Z + j\,Z_{W1}\tan\left(\frac{2\pi l_1}{\lambda}\right)}{1 + j\,\frac{Z}{Z_{W1}}\tan\left(\frac{2\pi l_1}{\lambda}\right)} \overset{!}{=} Z_W
$$

Durch Ausmultiplizieren und Trennen nach Real- und Imaginärteil folgen mit der Abkürzung

$$
k_{l1} = \tan\left(\frac{2\pi l_1}{\lambda}\right)
\qquad\qquad (23.35)
$$

die Bedingungen:

$$
R = Z_W\left(1-\frac{k_{l1}X}{Z_{W1}}\right), \qquad X = k_{l1}\left(\frac{Z_W R}{Z_{W1}}-Z_{W1}\right)
$$

Durch Auflösen nach $Z_{W1}$ und $k_{l1}$ erhält man die Dimensionierungsgleichungen:

$$
Z_{W1} = \sqrt{Z_{W1}\left(R-\frac{X^2}{Z_W-R}\right)}
$$

$$
k_{l1} = \frac{Z_{W1}}{X}\left(1-\frac{R}{Z_W}\right)
\qquad\qquad (23.36)
$$
<!-- page-import:1346:end -->

<!-- page-import:1347:start -->
1310  23. Passive Komponenten

a  mit einer Längsleitung

$Z_W$

$Z_{W1}$

$l_1$

$Z = R + jX$

b  mit einer Längsleitung und ausgangsseitiger Kompensation

$Z_W$

$Z_{W1}$

$l_1$

$jX_2$

$Z_{W2}$

$l_2$

Leerlauf oder Kurzschluss

$Z = R + jX$

c  mit einer Längsleitung und eingangsseitiger Kompensation

$Z_W$

$jX_2$

$Z_{W2}$

$l_2$

Leerlauf oder Kurzschluss

$Z_{W1}$

$l_1$

$Z = R + jX$

**Abb. 23.28.**  
Beispiele zur Anpassung  
mit Streifenleitungen

Für $R > Z_W$ ist die Anpassung für alle Werte von $X$ möglich; dagegen muss für $R < Z_W$ die Bedingung

$$
|X| < \sqrt{R\,(Z_W - R)}
$$

erfüllt sein, damit der Term unter der Wurzel in (23.36) positiv ist. Diese Bedingung lässt sich besonders einfach in der $r$-Ebene darstellen: für alle Impedanzen, deren Reflexionsfaktor in der $r$-Ebene innerhalb der beiden, in Abb. 23.29 gezeigten kreisförmigen Bereiche liegt, ist eine Anpassung mit einer einfachen Längsleitung möglich.

Zur Anpassung von Impedanzen, für die (23.37) nicht erfüllt ist, muss man die Strukturen in Abb. 23.28b und Abb. 23.28c verwenden. Bei der Struktur in Abb. 23.28b wird die Reaktanz $X$ durch eine Parallelreaktanz $X_2$ so weit kompensiert, dass die Bedingung (23.37) erfüllt ist; dadurch wird die Anpassung durch eine Längsleitung möglich. Bei der Struktur in Abb. 23.28c lässt man eine Parallelreaktanz $X_1$ am Eingang der Längsleitung zu:

$$
Z_1 = Z_W \parallel jX_1
$$

(23.37)
<!-- page-import:1347:end -->

<!-- page-import:1348:start -->
23.3 Schaltungen zur Impedanztransformation 1311

*r*-Ebene

$j$

$-1$

$1$

$-j$

Anpassung möglich

Anpassung möglich

**Abb. 23.29.**  
Bereich möglicher Anpassung mit einer Längsleitung

Diese wird anschließend durch eine Parallelreaktanz $X_2 = -X_1$ kompensiert. Wir gehen auf diese Strukturen nicht näher ein, da in diesen Fällen Freiheitsgrade vorhanden sind, die zur Optimierung der Wellenwiderstände $Z_{W1}$ und $Z_{W2}$ sowie der Leitungslängen genutzt werden können; dies geschieht in der Praxis mit Hilfe von Simulationsprogrammen für Hochfrequenzschaltungen, die über geeignete Optimierungsalgorithmen verfügen. Die beiden Strukturen werden häufig kombiniert, um weitere Freiheitsgrade für die Optimierung zu erhalten.

### 23.3.2 Ankopplung

Zur Leistungsauskopplung aus einem Parallelschwingkreises muss man einen Lastwiderstand an den Schwingkreis ankoppeln. Da für die Güte eines mit einem Lastwiderstand $R_L$ belasteten, ansonsten aber verlustlosen Parallelschwingkreises

$$
Q_r = R_L \sqrt{\frac{C}{L}}
$$

gilt und in Hochfrequenzschaltungen üblicherweise $R_L = Z_W = 50\,\Omega$ verwendet wird, muss man das Verhältnis $C/L$ vergleichsweise hoch wählen, um eine ausreichende Güte zu erhalten; dadurch wird die Induktivität bei hohen Resonanzfrequenzen sehr klein. Als Beispiel betrachten wir einen Resonanzkreis, der bei einer Resonanzfrequenz von $f_r = 1\,\text{GHz}$ eine Güte $Q_r = 50$ besitzen soll; dann gilt:

$$
f_r = \frac{1}{2\pi\sqrt{LC}} = 1\,\text{GHz},\ Q_r = 50 \quad \Rightarrow \quad C = 159\,\text{pF},\ L = 159\,\text{pH}
$$

Die Induktivität ist mit $159\,\text{pH}$ unpraktikabel klein. Gleichzeitig ist die Kapazität zu groß, da die Eigenresonanzfrequenz eines Kondensators mit $C = 159\,\text{pF}$ im allgemeinen deutlich unter $1\,\text{GHz}$ liegt, siehe Abb. 23.5 auf Seite 1289. Man kann eine ausreichende Güte und praktikable Werte für die Elemente demnach nur dadurch erzielen, dass man den Lastwiderstand transformiert; dazu werden die in Abb. 23.30 gezeigten Verfahren zur Ankopplung verwendet. Wir geben für jedes in Abb. 23.30 gezeigte Verfahren (links) ein äquivalentes Ersatzschaltbild (Mitte) und ein vereinfachtes Ersatzschaltbild (rechts) an.
<!-- page-import:1348:end -->

<!-- page-import:1349:start -->
1312 23. Passive Komponenten

a mit kapazitivem Spannungsteiler

b mit induktivem Spannungsteiler

c mit festgekoppeltem induktivem Spannungsteiler

**Abb. 23.30.** Verfahren zur Ankoppelung eines Widerstandes $R_L$ an einen Parallelschwingkreis

#### 23.3.2.1 Ankoppelung mit kapazitivem Spannungsteiler

Mit dem Teilerfaktor

$$
n_C = 1 + \frac{C_2}{C_1}
$$

folgt für die Elemente des äquivalenten Ersatzschaltbilds in Abb. 23.30a:

$$
R_P = n_C^2 R_L \;,\quad C_P = \frac{C_1}{n_C} \;,\quad C = \frac{C_1 C_2}{C_1 + C_2}
$$

Für

$$
f \gg f_{P,C} = \frac{1}{2\pi\, C_P\, R_P} = \frac{1}{2\pi\, n_C\, C_1\, R_L} \approx \frac{1}{2\pi\, C_2\, R_L}
$$

kann man die Kapazität $C_P$ vernachlässigen; dann wird der Schwingkreis mit dem transformierten Widerstand $R_P$ belastet, der parallel zum Resonanzwiderstand $R$ liegt.
<!-- page-import:1349:end -->
