# Operational Amplifier Parameters

<!-- page-import:0605:start -->
568 5. Operationsverstärker

**Abb. 5.83.**  
Betrieb einer kapazitiven-Last mit Phasenrückdrehung durch $C_{stab}$

$$
R_{iso}=\frac{1}{2\pi f_{g\ Riso}\ C_L}=\frac{f_{g\ C_L}}{f_{g\ Riso}}\cdot r_a=\frac{10\,\mathrm{kHz}}{100\,\mathrm{kHz}}\cdot 100\,\Omega=10\,\Omega
\qquad (5.42)
$$

Bei Frequenzen über $f_{g\ Riso}$ bewirkt der Isolationswiderstand also lediglich eine Reduktion der Differenzverstärkung um den Faktor 10 $\widehat{=}$ 20 dB, wie man in Abb. 5.82 sieht. Die Frequenzgangkorrektur bewirkt auch hier eine Reduktion der Verstärkung durch Pole-Splitting ohne Zunahme der Phasenverschiebung.

Ein Problem bei dem Einsatz des Isolationswiderstands in Abb. 5.81 besteht darin, dass die Last außerhalb der Gegenkopplungsschleife liegt. Die Ausgangsspannung besitzt deshalb nicht die Präzision von gegengekoppelten Operationsverstärker-Schaltungen. Im vorliegenden Beispiel wird sie wegen des Spannungsteilers aus $R_{iso}$ und $R_L$ um 11% zu klein. Man kann die Gegenkopplung aber auch direkt an der kapazitiven Last anschließen wie in Abb. 5.83, wenn man einen zusätzlichen Kondensator $C_{stab}$ hinzufügt, der die erforderliche Phasenrückdrehung für einen stabilen Betrieb übernimmt. Die Unterschiede im Verlauf der Ausgangsspannungen kann man in Abb. 5.84 vergleichen. Man sieht, dass die Open-Loop-Technik eine bessere Anstiegszeit bietet, das Closed-Loop-Verfahren aber die bessere Genauigkeit.

# 5.5 Parameter von Operationsverstärkern

Die wichtigsten Parameter von einigen sehr verschiedenen Operationsverstärkers sind in Abb. 5.85 zusammengestellt. Im folgenden sollen diese Größen erklärt und ihr Einfluss auf den gegengekoppelten Verstärker untersucht werden.

Die Operationsverstärker $\mu$A741 und TLC272 sind alte Typen, die bezüglich der Aussteuerbarkeit und Bandbreite schlecht sind. Heute würde man bei diesen Geschwindigkeiten ein Zehntel der Stromaufnahme erwarten. Der TLC272 ist einer der ersten Operationsverstärker, die in CMOS-Technologie aufgebaut wurden. Da seine Gleichtakt- und

**Abb. 5.84.**  
Rechtecksignal bei kapazitiver Last. Vergleich von open-loop Betrieb in Abb. 5.81 mit closed-loop Technik in Abb. 5.83. Beispiel für $f=20\mathrm{kHz}$, und $U_e=\pm 1\,\mathrm{V}$.
<!-- page-import:0605:end -->

<!-- page-import:0606:start -->
569

## 5.5 Parameter von Operationsverstärkern

| Parameter | Symbol | μA 741 (bipolar) | TLC272 (CMOS) | OPA 388 (präzise) | AD797 (rauscharm) | AD8009* (schnell) |
|---|---|---:|---:|---:|---:|---:|
| Differenzverstärkung | $A_D$ | 100 dB | 92 dB | **146 dB** | 146 dB |  |
| Gleichtaktunterdrückung | $G$ | 90 dB | 86 dB | 146 dB | 146 dB |  |
| Offsetspannung | $U_0$ | 1 mV | 1 mV | **0,25 $\mu$V** | 25 $\mu$V | 2 mV |
| Offsetspannungsdrift | $\Delta U_0/\Delta \vartheta$ | 6 $\mu$V/K | 2 $\mu$V/K | **5 nV/K** | 0,2 $\mu$V/K | 4 $\mu$V/K |
| Eingangsruhestrom | $I_B$ | 80 nA | **1 pA** | 30 pA | 250 nA | 50 $\mu$A |
| Offsetstrom | $I_0$ | 20 nA | 0,5 pA | 60 pA | 100 nA |  |
| Offsetstromdrift | $\Delta I_0/\Delta \vartheta$ | 0,5 nA/K |  |  | 1 nA/K |  |
| Differenzeingangswiderstand | $r_D$ | 1 M$\Omega$ | **1 T$\Omega$** | 100 M$\Omega$ | 7,5 k$\Omega$ | 110 k$\Omega$ |
| Gleichtakteingangswiderstand | $r_{GI}$ | 1 G$\Omega$ | **1 T$\Omega$** | 60 T$\Omega$ | 100 M$\Omega$ |  |
| Gleichtaktaussteuerbarkeit | $U_{GI\ \max}$ | $\pm 3$ V | 0…4 V | 0…5 V | $\pm 3$ V | $\pm 4$ V |
| Eingangsrauschspannungsdichte | $U_{\mathrm{rd}}/\sqrt{\mathrm{Hz}}$ | 13 nV | 25 nV | 7 nV | **1 nV** | 2 nV |
| Eingangsrauschstromdichte | $I_{\mathrm{rd}}/\sqrt{\mathrm{Hz}}$ | 2 pA | **1 fA** | 0,1 pA | 2 pA | 40 pA |
| Maximaler Ausgangsstrom | $I_{a\ \max}$ | $\pm 20$ mA | $\pm 20$ mA | $\pm 20$ mA | $\pm 50$ mA | **$\pm 175$ mA** |
| Ausgangsaussteuerbarkeit | $U_{a\ \max}$ | $\pm 3$ V | 0…3 V | 0…5 V | $\pm 3$ V | $\pm 4$ V |
| Ausgangswiderstand | $r_a$ | 1 k$\Omega$ | 200 $\Omega$ | 150 $\Omega$ | 300 $\Omega$ |  |
| 3 dB-Bandbreite | $f_{gA}$ | 10 Hz | 50 Hz | 0,5 Hz | 5 Hz |  |
| Verstärkungs-Bandbreite-Produkt | $f_T$ | 1 MHz | 2 MHz | 10 MHz | 110 MHz | **1 GHz** |
| Slew-rate | $\mathrm{d}U_a/\mathrm{d}t$ | 0,6 V/$\mu$s | 5 V/$\mu$s | 5 V/$\mu$s | 20 V/$\mu$s | **5500 V/$\mu$s** |
| Leistungsbandbreite | $f_p$ | 10 kHz | 100 kHz |  | 300 kHz | **500 MHz** |
| Betriebsspannung | $U_b$ | $\pm 5$ V | 0/+5 V | 0/+5 V | $\pm 5$ V | $\pm 5$ V |
| Betriebsstrom | $I_b$ | 1,7 mA | 1,4 mA | 1,8 mA | 8 mA | 14 mA |
| Schaltung in Abb. |  | 5.25 | 5.29 | 5.48 | 5.20b | 5.105 |

**Abb. 5.85.** Beispiele für Parameter von Operationsverstärkern. Die Daten gelten für die hier angegebenen Betriebsspannungen. *Transimpedanzverstärker, CV-OPV

Ausgangsaussteuerbarkeit bis zur negativen Betriebsspannung reicht, handelt es sich um einen Single-Supply-Verstärker. Seine Eingangsströme sind - wie bei allen Operationsverstärkern in CMOS-Technologie - extrem niedrig und die Eingangswiderstände entsprechend hoch. Meist werden diese Werte hier nicht durch den Chip bestimmt, sondern durch das Gehäuse und die Leiterplatte.

Der **OP388** ist ein Chopper-Verstärker, mit dem sich eine besonders hohe Präzision erreichen lässt. Zum einen ist seine Offsetspannung besonders niedrig; in den meisten Anwendungen kann sie ganz vernachlässigt werden. Der Anwender muss vielmehr sicherstellen, dass Thermospannungen an den Lötstellen keine größeren Fehler bewirken. Zum anderen besitzt der Verstärker eine extrem hohe Differenzverstärkung und Gleichtaktunterdrückung, die in sehr guter Näherung als unendlich betrachtet werden kann. Das
<!-- page-import:0606:end -->

<!-- page-import:0607:start -->
570  5. Operationsverstärker

1/f-Rauschen wird hier zusammen mit der Offsetspannung durch die interne Nullpunktkorrektur ausgeregelt.

Der AD797 ist ein besonders rauscharmter Verstärker für Audio-Anwendungen. Seine Rauschspannungsdichte liegt mit 1 nV/$\sqrt{\mathrm{Hz}}$ an der Grenze des technisch möglichen. Sein Rauschstrom ist allerdings nicht niedriger als bei normalen Operationsverstärkern. Aus diesem Grund bietet der AD797 besonders bei niederohmigen Quellen Vorteile (siehe S. 583). Das Verstärkungs-Bandbreite-Produkt erscheint mit 110 MHz für Audio-Anwendungen unnötig hoch. Es ermöglicht jedoch auch bei 20 kHz noch eine hohe Schleifenverstärkung mit niedrigen Verzerrungen.

Der AD8009 ist ein besonders schneller Transimpedanzverstärker, der bis 1 GHz nutzbar ist. Dies erkennt man an der hohen Bandbreite und Slew-Rate. Dafür muß man eine hohe Stromaufnahme in Kauf nehmen.

Zur Berechnung von Operationsverstärkerschaltungen könnte man im Prinzip die Schaltung mit allen Fehlerquellen exakt analysieren. Einfacher ist es jedoch, zunächst von einem idealen Operationsverstärker auszugehen und dann die Abweichungen zu berechnen, die durch die einzelnen Parameter des realen Operationsverstärkers entstehen.

## 5.5.1 Differenz- und Gleichtaktverstärkung

Die Eingangsspannungen eines Operationsverstärkers $U_P$ und $U_N$ zerlegt man in eine Differenzspannung $U_D = U_P - U_N$ und in eine Gleichtaktspannung $U_{Gl} = (U_P + U_N)/2$. Diese Zerlegung ist sinnvoll, weil eine hohe Differenzverstärkung gewünscht ist, aber die Gleichtaktverstärkung ein unerwünschter Effekt ist, der möglichst klein sein soll. Die Ausgangsspannung eines Operationsverstärker ist eine Funktion der beiden Spannungen: $U_a = f\ (U_D, U_{Gl})$. Daraus folgt das totale Differential:

$$
dU_a = \frac{\partial U_a}{\partial U_D} dU_D + \frac{\partial U_a}{\partial U_{Gl}} dU_{Gl}
$$

(5.43)

Als Differentialquotienten treten hier die Differenzverstärkung $A_D$ und die Gleichtaktverstärkung $A_{Gl}$ auf:

$$
A_D = \frac{\partial U_a}{\partial U_D}
$$

(5.44)

$$
A_{Gl} = \frac{\partial U_a}{\partial U_{Gl}}
$$

(5.45)

Legt man an die Eingänge eines Operationsverstärkers eine Differenzspannung $U_D$ an, wird diese mit der Differenzverstärkung verstärkt an den Ausgang übertragen. Die Steigung der Übertragungskennlinie in Abb. 5.86a ist die Differenzverstärkung. Wegen der hohen Differenzverstärkung reichen Eingangsspannungsdifferenzen unter 1 mV aus, um den Ausgang zu übersteuern.

Bei einem idealen Operationsverstärker müsste die Ausgangsspannung dabei Null bleiben. Ein realer Operationsverstärker hat eine Gleichtaktverstärkung, die meist in der Größenordnung von 1 liegt und damit um mehrere Größenordnungen kleiner ist als die Differenzverstärkung. Mit den Definitionen (5.44) und (5.45) folgt aus (5.43)

$$
dU_a = A_D\, dU_D + A_{Gl}\, dU_{Gl}
$$

(5.46)

Da die Übertragungskennlinien innerhalb der Aussteuerungsgrenzen näherungsweise linear verlaufen, gilt (5.46) auch großsignalmäßig:

$$
U_a = A_D\, U_D + A_{Gl}\, U_{Gl}
$$

(5.47)
<!-- page-import:0607:end -->

<!-- page-import:0608:start -->
## 5.5 Parameter von Operationsverstärkern

571

a Differenzverstärkung

b Gleichtaktunterdrückung

**Abb. 5.86.** Differenzverstärkung und Gleichtaktverstärkung. Die angegebenen Werte sind Beispiele für einen Operationsverstärker mit Betriebsspannungen von $\pm 5\,\mathrm{V}$.

Diese Gleichung lässt sich nach $U_D$ auflösen; gleichzeitig kann man die Gleichtaktverstärkung durch die gebräuchlichere *Gleichtaktunterdrückung*

$$
G = A_D/A_{Gl}
$$

ersetzen: (5.48)

$$
U_D = \frac{U_a}{A_D} - \frac{U_{Gl}}{G} =
\begin{cases}
U_a/A_D & \text{für } U_{Gl} = 0 \\
-\,U_{Gl}/G & \text{für } U_a = 0
\end{cases}
$$

(5.49)

Dies ist zum einen die bekannte Definition der Differenzverstärkung

$$
A_D = \left.\frac{\partial U_a}{\partial U_D}\right|_{dU_{Gl}=0}
= \left.\frac{U_a}{U_D}\right|_{U_{Gl}=0}
$$

(5.50)

und zum anderen eine zusätzliche Definition der Gleichtaktunterdrückung$^2$:

$$
G = \frac{A_D}{A_{Gl}} = \left.\frac{\partial U_{Gl}}{\partial U_D}\right|_{dU_a=0}
= \left.\frac{U_{Gl}}{U_D}\right|_{U_a=0}
$$

(5.51)

Den in Abb. 5.86b dargestellten Zusammenhang zwischen Gleichtakt- und Differenzspannung erhält man, indem man bei einer bestimmten Gleichtaktspannung eine Differenzspannung anlegt, die so groß ist, dass die Ausgangsspannung Null wird. Dies ist also die

2 Bei der Gleichtaktverstärkung und Gleichtaktunterdrückung wird nur der Betrag angegeben; deshalb hat das Vorzeichen hier keine Bedeutung. Um den Eindruck zu vermeiden, dass die Gleichtaktunterdrückung andere Effekte kompensieren könnte, sollte man immer mit dem ungünstigeren Vorzeichen rechnen.
<!-- page-import:0608:end -->

<!-- page-import:0609:start -->
572  5. Operationsverstärker

a Schaltung

b Modell

**Abb. 5.87.** Auswirkung der endlichen Differenzverstärkung und Gleichtaktunterdrückung auf die Verstärkung des nichtinvertierenden Verstärkers. $U_a = A_D U_D + A_{Gl} U_{Gl}$

Spannung, die erforderlich ist, um den Effekt der Gleichtaktaussteuerung zu kompensieren. Die Steigung dieser Funktion ist die Gleichtaktunterdrückung, deren Größe ebenfalls in Abb. 5.86b aufgetragen ist. Man erkennt an der abrupten Abnahme der Gleichtaktunterdrückung deutlich die Grenzen der Gleichtaktaussteuerbarkeit. Die schaltungstechnische Grenze in Abb. 5.25 besteht darin, dass ein Transistor des Differenzverstärkers oder die zugehörige Stromquelle in die Sättigung gehen. Der Vergleich von Abb. 5.86a mit 5.86b zeigt, dass die Differenzverstärkung und die Gleichtaktunterdrückung zwei sehr ähnliche Größen sind. Die Ursache ist, dass die Gleichtaktverstärkung in der Größenordnung von $A_{Gl} = 1$ liegt; deshalb ist $G = A_D/A_{Gl} \approx A_D$.

Man erkennt in (5.49), dass sich die Differenzspannung aus zwei Anteilen zusammensetzt: einem Anteil, der sich durch die Aussteuerung des Ausgangs ergibt, und einem Anteil, der bei Gleichtaktaussteuerung hinzu kommt. Da $A_D$ und $G$ in der Regel sehr groß sind, ergeben sich im linearen Arbeitsbereich für $U_D$ in der Regel kleine Werte, die im Millivolt-Bereich liegen.

Zur Berechnung der Spannungsverstärkung beim nichtinvertierenden Verstärker in Abb. 5.87a wollen wir von (5.47) ausgehen und erhalten mit $U_D = U_e - k_RU_a$ und $U_{Gl} = (U_e + k_RU_a)/2$:

$$
U_a = A_D\,(U_e - k_RU_a) + A_{Gl}\,(U_e + k_RU_a)/2
$$

Daraus folgt die Spannungsverstärkung:

$$
A = \frac{U_a}{U_e} = \frac{A_D + A_{Gl}}{1 + k_R\,(A_D - A_{Gl})}
= \frac{A_D(1 + 1/G)}{1 + k_RA_D\,(1 - 1/G)}
$$

Daraus ergeben sich die Näherungen:

$$
A \xrightarrow[G\to\infty]{} \frac{A_D}{1 + k_RA_D}
\xrightarrow[A_D\to\infty]{} \frac{1}{k_R}
$$

Bei dem invertierenden Operationsverstärker in Abb. 5.88a ist die Gleichtaktspannung $U_{Gl} = U_D/2 \ll U_e$ klein. Zur Berechnung der Spannungsverstärkung kann man wieder von (5.47) ausgehen und erhält mit $U_D = k_FU_e + k_RU_a$:

$$
U_a = A_D\,(k_FU_e + k_RU_a) + A_{Gl}\,U_D/2
$$

Daraus folgt die Spannungsverstärkung

$$
A = \frac{U_a}{U_e} = \frac{-k_F\,(A_D - A_{Gl}/2)}{1 + k_R\,(A_D - A_{Gl}/2)}
= \frac{-k_F\,(A_D(1 - 1/(2G)))}{1 + k_RA_D\,(1 - 1/(2G))}
$$
<!-- page-import:0609:end -->

<!-- page-import:0610:start -->
## 5.5 Parameter von Operationsverstärkern

573

**a** Schaltung

**b** Modell

**Abb. 5.88.** Auswirkung der endlichen Differenzverstärkung und Gleichtaktunterdrückung auf die Verstärkung des invertierenden Verstärkers. $U_a = A_D U_D + A_{Gl} U_{Gl}$

und die Näherungen:

$$
A \xrightarrow[G\to\infty]{} \frac{k_F A_D}{1 + k_R A_D} \xrightarrow[A_D\to\infty]{} \frac{k_F}{k_R} = -\frac{R_N}{R_1}
$$

Darin beschreiben

$$
k_F = -\frac{R_N}{R_1 + R_N}
\qquad \text{und} \qquad
k_R = \frac{R_1}{R_1 + R_N}
$$

den Eingangsspannungsteiler und den Rückkopplungsspannungsteiler gemäß (5.10).

Dieselben Ergebnisse erhält man auch, wenn man die Rechnung an den Modellen in Abb. 5.87b und Abb. 5.88b vornimmt. Die durch die endliche Differenzverstärkung bedingte Abweichung vom idealen Verhalten beträgt beim invertierenden und nichtinvertierenden Verstärker:

$$
\frac{\Delta A}{A} = \frac{A_{id} - A}{A_{id}} = \frac{1}{1 + k_R A_D} \approx \frac{1}{g}
\qquad (5.52)
$$

Die relative Abweichung vom idealen Verhalten ist also gleich dem Kehrwert der Schleifenverstärkung. Deshalb bemüht man sich um eine hohe Schleifenverstärkung nicht nur bei Gleichspannungen, sondern im ganzen genutzten Frequenzbereich. Um den Faktor $g$ reduzieren sich auch Fertigungsstreuungen und temperaturbedingte Änderungen der Differenzverstärkung.

## 5.5.2 Offsetspannung

Die Übertragungskennlinie eines realen Operationsverstärkers geht nicht durch den Nullpunkt, sondern sie ist um die Offsetspannung (*input offset voltage*) $U_O$ verschoben; Abb. 5.89 zeigt dieses Verhalten. Die Offsetspannung liegt meist im Millivolt-Bereich, bei guten Operationsverstärkern sogar im Mikrovoltbereich, wie man in Abb. 5.85 erkennt. Obwohl die Offsetspannung so klein ist, wird der Verstärker übersteuert, wenn man $U_D = 0$ setzt, indem man z.B. beide Eingänge auf Masse legt; dies erkennt man auch in Abb. 5.89. Die Ursache ist die hohe Differenzverstärkung, die selbst kleine Offsetspannungen so hoch verstärkt, dass der Ausgang übersteuert wird.

Operationsverstärker werden jedoch meist nicht offen, sondern mit Gegenkopplung betrieben; dann wird der durch Offsetspannung bedingte Fehler nur so hoch wie das Eingangssignal verstärkt. Sie wirkt deshalb so, als ob sie mit der Signalspannungsquelle in
<!-- page-import:0610:end -->

<!-- page-import:0611:start -->
574  5. Operationsverstärker

**Abb. 5.89.** Wirkung der Offsetspannung auf die Übertragungskennlinie eines Operationsverstärkers

Reihe geschaltet wäre. Früher hat man die Offsetspannung auf Null abgeglichen; inzwischen gibt es genügend Typen, bei denen die Offsetspannung so klein ist, dass sie nicht stört.

Die Offsetspannung hat viele Ursachen. Neben Paarungstoleranzen der Eingangstransistoren gehen auch Unsymmetrien und Toleranzen des Eingangsverstärkers und der folgenden Schaltung ein, obwohl der Einfluss der Eingangsstufe am größten ist. Das erkennt man an dem Modell eines zweistufigen Verstärkers in Abb. 5.90. Bei jeder Stufe wird die jeweilige Offsetspannung am Eingang zugeführt. Für die Ausgangsspannung ergibt sich daher:

$$
U_a = (U_1 + U_{O2})\,A_2 = [(U_e + U_{O1})\,A_1 + U_{O2}]\,A_2
$$

$$
= A_1A_2U_e + A_1A_2U_{O1} + A_2U_{O2}
$$

Um die auf den Eingang bezogene Offsetspannung der ganzen Schaltung zu ermitteln, setzt man $U_a = 0$ und rechnet die zugehörige Eingangsspannung aus:

$$
U_e \;\overset{U_a=0}{=} U_O = -U_{O1} - \frac{1}{A_1}\,U_{O2}
\qquad (5.53)
$$

Die Offsetspannung der 1. Stufe wirkt sich also in voller Größe auf den Eingang aus, die der zweiten Stufe jedoch nur um den Faktor $1/A_1$ reduziert. Daher bemüht man sich, die Verstärkung der 1. Stufe möglichst groß zu machen.

Wenn man die Offsetspannung auf Null abgleicht, macht sich nur noch ihre Abhängigkeit von der Temperatur, der Zeit und der Betriebsspannung bemerkbar:

$$
dU_O(\vartheta, t, U_b) = \frac{\partial U_O}{\partial \vartheta}\,d\vartheta + \frac{\partial U_O}{\partial t}\,dt + \frac{\partial U_O}{\partial U_b}\,dU_b
\qquad (5.54)
$$

Darin ist $\partial U_O/d\vartheta$ die Temperaturdrift; typische Werte sind $3 \dots 10\,\mu\text{V}/\text{K}$. Die Langzeitdrift $\partial U_O/\partial t$ liegt in der Größenordnung von einigen $\mu$V je Monat. Man kann sie als niederfrequenten Anteil des Rauschens auffassen. Der Betriebsspannungsdurchgriff

**Abb. 5.90.** Modell für den Einfluss von Offsetspannungen in mehrstufigen Verstärkern
<!-- page-import:0611:end -->

<!-- page-import:0612:start -->
575

# 5.5 Parameter von Operationsverstärkern

a Nichtinvertierender Verstärker

b Invertierender Verstärker

**Abb. 5.91.** Einfluss der Offsetspannung auf den nichtinvertierenden und invertierenden Verstärker

(supply voltage rejection ratio) $\partial U_O / \partial U_b$ charakterisiert den Einfluss von Betriebsspannungsschwankungen auf die Offsetspannung. Er beträgt $10 \dots 100\,\mu\text{V}/\text{V}$. Damit dieser Beitrag zur Offsetspannung klein bleibt, darf die Betriebsspannung höchstens um einige Millivolt schwanken.

Die Übertragungskennlinie eines Operationsverstärkers mit Offsetspannung hat nach Abb. 5.89 innerhalb des linearen Aussteuerungsbereichs die Form:

$$
U_a = A_D\,(U_D - U_O)
$$

(5.55)

Um das Ausgangsruhepotential zu Null zu machen, muss man entweder die Offsetspannung auf Null abgleichen oder am Eingang eine Spannung $U_D = U_O$ anlegen. Daraus folgt die Regel:

*Die Offsetspannung ist die Spannung, die man am Eingang anlegen muss, damit die Ausgangsspannung Null wird.*

Um die Wirkung der Offsetspannung in gegengekoppelten Schaltungen zu untersuchen, geht man am besten von den Ersatzschaltbildern in Abb. 5.91 aus. Wenn man $U_e = 0$ setzt, sind beide Schaltungen gleich. Am Ausgang ergibt sich dann die Offsetspannung:

$$
U_a \;\overset{U_e=0}{=}\; -\left(1 + \frac{R_N}{R_1}\right) U_O
$$

(5.56)

gemäß der Spannungsverstärkung des nichtinvertierenden Verstärkers. Die Offsetspannung wird also beim nichtinvertierenden Verstärker wie die Eingangsspannung verstärkt; beim invertierenden Verstärker gilt das näherungsweise.

## 5.5.3 Eingangsströme

Der Eingangsruhestrom eines Operationsverstärkers entspricht dem Basis- oder Gatestrom der Eingangstransistoren. Wie groß er ist, hängt davon ab, mit welchem Strom die Eingangstransistoren betrieben werden. Bei Universalverstärkern mit Bipolartransistoren am Eingang, die mit Kollektorströmen von $10\,\mu\text{A}$ arbeiten, kann man mit Eingangsruheströmen von $0{,}1\,\mu\text{A}$ rechnen. In Breitbandverstärkern mit Kollektorströmen bis zu $1\,\text{mA}$ betragen die Eingangsströme mehrere Mikroampere. Bei Darlingtonschaltungen am Eingang liegt der Eingangsruhestrom im nA-Bereich. Die niedrigsten Eingangsruheströme besitzen Operationsverstärker mit Feldeffekttransistoren am Eingang. Hier betragen sie häufig nur wenige pA.
<!-- page-import:0612:end -->

<!-- page-import:0613:start -->
576  5. Operationsverstärker

a Basisstrom

b Bias- und Offsetstrom

**Abb. 5.92.** Umrechnung der Eingangsströme in Bias- und Offsetstrom

Da die Eingangstransistoren mit konstanten Kollektorströmen betrieben werden, sind auch ihre Basisströme konstant; man kann sie daher als Stromquellen an den Eingängen modellieren wie in Abb. 5.92 dargestellt. In der Praxis sind die Eingangsströme zwar ähnlich, aber nicht exakt gleich. Deshalb wird im Datenblatt der mittlere Eingangsruhestrom (input bias current)

$$
I_B = (I_P + I_N)/2
$$

(5.57)

und der Offsetstrom (input offset current)

$$
I_O = I_P - I_N
$$

(5.58)

spezifiziert. Aus diesen Definitionen lassen sich die Eingangsströme berechnen:

$$
I_P = I_B + I_O/2 \quad,\quad I_N = I_B - I_O/2
$$

(5.59)

Abbildung 5.92 veranschaulicht diesen Zusammenhang.

Die Auswirkung der Eingangsströme auf Verstärkerschaltungen wollen wir mit Hilfe von Abb. 5.93 berechnen; dazu verwenden wir das Modell von Abb. 5.92b. Für die Ausgangsspannung in Abb. 5.93a erhält man:

$$
U_a = \left(1 + \frac{R_N}{R_1}\right) U_e + I_B \left(\frac{R_g (R_1 + R_N)}{R_1} - R_N\right) + \frac{I_O}{2} \left(\frac{R_g (R_1 + R_N)}{R_1} + R_N\right)
$$

Wenn die Eingangswiderstände gemäß der Beziehung

$$
R_g = \frac{R_N R_1}{R_N + R_1}
$$

(5.60)

abgeglichen sind, fällt die Wirkung von $I_B$ heraus und die Ausgangsspannung vereinfacht sich zu

$$
U_a = \left(1 + \frac{R_N}{R_1}\right) U_e + I_O R_N
$$

Übrig bleibt also nur der Fehler des Offsetstroms, der meist klein gegenüber dem Eingangsruhestrom ist, wie man in den Beispielen in Abb. 5.85 sieht.

In den meisten Fällen ist es aber nicht erforderlich, den Innenwiderstand der Quelle mit $R_g$ künstlich zu vergrößern weil es genügend Operationsverstärker gibt, deren Eingangssströme so klein sind, dass sie keinen nennenswerten Fehler verursachen. Dann ergibt sich die Ausgangsspannung:

$$
U_a = \left(1 + \frac{R_N}{R_1}\right) U_e + R_N \left(\frac{I_O}{2} - I_B\right)
$$
<!-- page-import:0613:end -->

<!-- page-import:0614:start -->
5.5 Parameter von Operationsverstärkern 577

a Nichtinvertierender Verstärker

b Invertierender Verstärker

**Abb. 5.93.** Wirkung der Eingangsströme beim nichtinvertierenden und invertierenden Verstärker

Beim invertierenden Verstärker in Abb. 5.93b sind die Fehler durch die Eingangsströme ganz ähnlich. Die Ausgangsspannung ergibt sich zu:

$$
U_a=-\frac{R_N}{R_1}U_e+I_B\left(\frac{R_B\left(R_1+R_N\right)}{R_1}-R_N\right)-\frac{I_O}{2}\left(\frac{R_B\left(R_1+R_N\right)}{R_1}+R_N\right)
$$

Hier kann man $R_B$ hinzufügen, um den Fehler durch den Eingangsruhestrom $I_B$ zu kompensieren.

$$
U_a=-\frac{R_N}{R_1}U_e-R_NI_O
\qquad \text{für} \qquad
R_B=\frac{R_NR_1}{R_N+R_1}
$$

Damit der Widerstand $R_B$ kein zusätzliches Rauschen verursacht, schließt man ihn für Wechselspannungen mit dem Kondensator $C_B$ kurz. Im Normalfall lässt man den Widerstand $R_B$ aber weg, weil der durch die Eingangsströme bedingte Fehler klein ist. Dann ergibt sich die Ausgangsspannung:

$$
U_a=-\frac{R_N}{R_1}U_e-R_N\left(I_B+\frac{I_O}{2}\right)
\qquad \text{für} \qquad
R_B=0
$$

Wir haben gezeigt, dass der durch die Eingangsströme bedingte Fehler proportional mit den Beschaltungswiderständen ansteigt. Deshalb sollte man diese Widerstände so niederohmig dimensionieren, dass diese Fehler nicht stören. Falls die Größe der Gegenkopplungswiderstände vorgegeben ist, muss man den Operationsverstärker so auswählen, dass seine Eingangsströme klein genug sind. Man erkennt in Abb. 5.85, dass es sehr große Unterschiede gibt.

## 5.5.4 Eingangswiderstände

Beim Operationsverstärker kann man wie beim Differenzverstärker zwei Eingangswiderstände unterscheiden: den Differenzeingangswiderstand $r_D$ und den Gleichtakteingangswiderstand $r_{Gl}$. Es handelt sich um differentielle Größen, die aber beim Operationsverstärker wie Großsignal-Größen behandelt werden können:

$$
r_{Gl}=\frac{\partial U_{Gl}}{\partial I_e}\approx\frac{U_{Gl}}{I_e}
\eqno{(5.61)}
$$

$$
r_D=\frac{\partial U_D}{\partial I_e}\approx\frac{U_D}{I_e}
\eqno{(5.62)}
$$

Wie sich die Gleichtakteingangswiderstände auf den nichtinvertierenden Verstärker auswirken, kann man dem Ersatzschaltbild in Abb. 5.94a entnehmen. Sie führen von den
<!-- page-import:0614:end -->

<!-- page-import:0615:start -->
578 5. Operationsverstärker

a Gleichtakteingangswiderstand

b Differenzeingangswiderstand

**Abb. 5.94.** Wirkung des Differenz- und Gleichtakteingangswiderstands beim nichtinvertierenden Verstärker

Eingängen nach Masse, liegen also parallel zu den Eingängen. Der Gleichtaktwiderstand am nichtinvertierenden Eingang bewirkt eine Abschwächung, der am invertierenden Eingang eine Erhöhung der Verstärkung. Wenn die Innenwiderstände an den beiden Eingängen abgeglichen sind, also $R_g = R_N R_1/(R_N + R_1)$ ist, kompensieren sich die Wirkungen der Gleichtaktwiderstände auf die Verstärkung. Da sie sehr hochohmig sind, ist ihr Einfluss ohnehin gering.

Um die Wirkung des Differenzeingangswiderstands zu untersuchen, kann man von einem realen Operationsverstärker mit endlicher Differenzverstärkung und Gleichtaktunterdrückung ausgehen. Dazu betrachten wir Abb. 5.94b und berechnen den Strom durch den Differenzeingangswiderstand. Mit (5.49) gilt:

$$
I_e = \frac{U_D}{r_D} = \left(\frac{U_a}{A_D} + \frac{U_{Gl}}{G}\right)\frac{1}{r_D}
$$

Mit $U_a = U_e/k$, $U_{Gl} = U_e$ und $g = kA_D$ folgt daraus der durch $r_D$ bedingte Beitrag zum Eingangswiderstand:

$$
r_D' = \frac{U_e}{I_e} = r_D\,\frac{g\,G}{g + G} =
\begin{cases}
g\,r_D & \text{für } G \gg g \\
G\,r_D & \text{für } g \gg G
\end{cases}
\qquad (5.63)
$$

Der Differenzeingangswiderstand wird also durch die Gegenkopplung stark erhöht, da an $r_D$ die Differenzspannung $U_D$ liegt, die lediglich ein Bruchteil der Eingangsspannung $U_e$ ist. Der resultierende Eingangswiderstand des nichtinvertierenden Verstärkers beträgt daher $r_e = r_{Gl}\parallel r_D'$; da beide Anteile sehr groß sind, erhält man selbst bei Operationsverstärkern mit Bipolartransistoren beim nichtinvertierenden Verstärker Eingangswiderstände im G$\Omega$-Bereich.

Beim invertierenden Verstärker in Abb. 5.95 sind die Verhältnisse viel einfacher. Der invertierende Eingang stellt hier eine virtuelle Masse dar, da die Differenzspannung $U_D$ im Millivolt-Bereich liegt. Deshalb wirkt der Widerstand $R_1$ so, als ob er an einer echten Masse angeschlossen wäre. Der Eingangswiderstand der Schaltung ist daher gleich $R_1$. Er wird durch den Differenz- und Gleichtakteingangswiderstand des Verstärkers praktisch nicht verändert. Allerdings liegt der Eingangswiderstand $R_1$ meist im Bereich von $1 \dots 100\,\mathrm{k}\Omega$ und ist damit um Größenordnungen kleiner als der des nichtinvertierenden Verstärkers.
<!-- page-import:0615:end -->

<!-- page-import:0616:start -->
5.5 Parameter von Operationsverstärkern 579

**Abb. 5.95.**  
Eingangswiderstand beim invertierenden Verstärker

## 5.5.5 Ausgangswiderstand

Wie die Abb. 5.85 zeigt, sind reale Operationsverstärker bezüglich ihres Ausgangswiderstands weit vom idealen Verhalten entfernt. Der wirksame Ausgangswiderstand der Schaltung wird jedoch durch die Gegenkopplung verringert: Eine Reduzierung der Ausgangsspannung durch Belastung wird nämlich über den Spannungsteiler $R_N$, $R_1$ in Abb. 5.96 auf den invertierenden Eingang übertragen. Die dadurch entstehende Zunahme von $U_D$ wirkt der ursprünglichen Abnahme der Ausgangsspannung entgegen.

Zur quantitativen Analyse betrachten wir das Modell in Abb. 5.96 und berechnen unter Vernachlässigung des Stroms durch den Gegenkopplungsspannungsteiler die Ausgangsspannung für $U_e = 0$. Mit $U_1 = -k_R A_D U_a$ ergibt sich:

$$
I_a = \frac{U_a - U_1}{r_a} = \frac{U_a (1 + k_R A_D)}{r_a}
$$

Daraus folgt:

$$
r'_a = \frac{U_a}{I_a} = \frac{r_a}{1 + k_R A_D} \approx \frac{r_a}{g}
$$

(5.64)

Der Ausgangswiderstand wird demnach durch die Gegenkopplung um die Schleifenverstärkung reduziert. Diese Gleichung gilt nicht nur für Gleichspannungen, sondern auch für hohe Frequenzen, wenn man die Beträge der komplexen Größen einsetzt.

## 5.5.6 Beispiel für statische Fehler

Ein Zahlenbeispiel soll die Größe der verschiedenen statischen Fehler demonstrieren. Wir gehen dabei von dem nichtinvertierenden Verstärker in Abb. 5.97 aus, dessen Verstärkung mit den Widerständen $R_N$ und $R_1$ auf $A = 10$ eingestellt wurde. Der Operationsverstärker soll nur mittelmäßige Daten besitzen, damit die verschiedenen Fehler deutlich zu Tage treten; deshalb haben wir hier die Daten des $\mu A741$ aus Abb. 5.85 verwendet. Die Eingangsspannungsquelle besitzt eine Spannung von 1 V. Bei einer Verstärkung von 10 ergibt das beim idealen Operationsverstärker eine Ausgangsspannung von $U_a = 10$ V. Die

**Abb. 5.96.**  
Modell zur Berechnung des Ausgangswiderstands
<!-- page-import:0616:end -->

<!-- page-import:0617:start -->
580  5. Operationsverstärker

**Abb. 5.97.** Statische Fehler eines nichtinvertierenden Verstärkers mit der Verstärkung $A = 10$ am Beispiel eines Operationsverstärkers der 741-Klasse

Abweichungen durch die verschiedenen nichtidealen Eigenschaften werden im folgenden berechnet.

Wenn man eine Differenzverstärkung von $A_D = 100\,\mathrm{dB}$ berücksichtigt, erhält man gemäß Abb. 5.87 einen auf den Eingang umgerechneten Spannungsfehler von

$$
\frac{U_a}{A_D} = \frac{10\,\mathrm{V}}{10^5} = 100\,\mu\mathrm{V}
$$

Daraus resultiert bei einer Verstärkung von 10 ein Spannungsfehler am Ausgang von $1\,\mathrm{mV}$. Der durch die Gleichtaktaussteuerung bedingte Fehler beträgt:

$$
\frac{U_{Gl}}{G} = \frac{1\,\mathrm{V}}{3 \cdot 10^4} = 33\,\mu\mathrm{V}
$$

Dieser Fehler wird ebenfalls 10-fach verstärkt und ergibt dann am Ausgang $0{,}33\,\mathrm{mV}$.

Die Wirkung der Offsetspannung lässt sich gemäß Abb. 5.91 genauso berücksichtigen: eine Spannung von $1\,\mathrm{mV}$ am Eingang ergibt am Ausgang einen Fehler von $10\,\mathrm{mV}$.

Der Eingangsruhestrom $I_B$ wirkt sich hier nicht aus, da die Eingangswiderstände abgeglichen sind; in diesem Beispiel betragen sie an beiden Eingängen $9\,\mathrm{k}\Omega$. Der Offsetstrom bewirkt einen Fehler der Größe:

$$
\Delta U_a = I_O\,R_N = 20\,\mathrm{nA} \cdot 90\,\mathrm{k}\Omega = 1{,}8\,\mathrm{mV}
$$

Hätte die Quelle keinen Innenwiderstand, könnte man einen zusätzlichen $9\,\mathrm{k}\Omega$-Widerstand einfügen, den man, um unnötiges Rauschen zu vermeiden, mit einem Kondensator überbrücken müsste. Wenn man die Eingangswiderstände nicht abgleicht, muss man mit dem Eingangsruhestrom rechnen und würde dann einen Spannungsfehler von

$ I_B\,R_N = 80\,\mathrm{nA} \cdot 90\,\mathrm{k}\Omega = 7{,}2\,\mathrm{mV} $

erhalten.

Man sieht, dass die Gleichtakteingangswiderstände sehr groß gegenüber allen anderen Widerständen sind, so dass sie selten einen Fehler verursachen. Hier hebt sich ihre [unclear]
<!-- page-import:0617:end -->

<!-- page-import:0618:start -->
581

## 5.5 Parameter von Operationsverstärkern

Wirkung auf, da die Eingangswiderstände abgeglichen sind. Dagegen bewirkt der *Differenzeingangswiderstand* einen Fehler, denn durch ihn fließt ein Strom von

$$
I_D=\frac{U_D}{r_D}=\frac{1{,}1\,\mathrm{mV}}{1\,\mathrm{M}\Omega}=1{,}1\,\mathrm{nA}
$$

(5.65)

Dieser Strom verhält sich wie der Offsetstrom und verursacht einen Fehler der Ausgangsspannung von

$$
\Delta U_a=2\,R_N\,\frac{U_D}{r_D}=2\,R_N I_D=2\cdot 1{,}1\,\mathrm{nA}\cdot 90\,\mathrm{k}\Omega=0{,}2\,\mathrm{mV}
$$

Der Fehler, der durch den *Ausgangswiderstand* entsteht, soll auch untersucht werden. Wenn man annimmt, dass der Ausgang mit einem Widerstand $R_L=1\,\mathrm{k}\Omega$ belastet wird, fließt ein Ausgangsstrom von $I_a=10\,\mathrm{V}/1\,\mathrm{k}\Omega=10\,\mathrm{mA}$.³ An dem gemäß (5.64) transformierten Ausgangswiderstand ergibt sich dadurch ein Spannungsabfall von

$$
\Delta U_a=\frac{r_a}{kA_D}\,I_a=\frac{1\,\mathrm{k}\Omega}{10^4}\cdot 10\,\mathrm{mA}=1\,\mathrm{mV}
$$

Bei der Berechnung der Fehler haben wir keine Rücksicht auf das Vorzeichen genommen. Die durch die Differenzverstärkung und den Ausgangswiderstand bedingten Fehler verkleinern die Ausgangsspannung. Die Vorzeichen von Offsetspannung, Offsetstrom und Gleichtaktunterdrückung liegen jedoch nicht fest; deshalb lässt sich nicht angeben, mit welchem Vorzeichen sie in die Ausgangsspannung eingehen. Wichtiger ist die Größenordnung der einzelnen Fehler: In diesem Beispiel übersteigt keiner 1‰ der Ausgangsspannung. Am störendsten ist der durch die Offsetspannung bedingte Fehler von 10 mV, da er unabhängig von der Größe der Ausgangsspannung ist. Bei einer Ausgangsspannung von 100 mV wirkt er sich schon mit 10% aus. Deshalb verdient die Offsetspannung bei der Auswahl des Operationsverstärkers eine besondere Beachtung.

## 5.5.7 Bandbreite

**Operationsverstärker als Tiefpass:** Nachdem wir gesehen haben, dass sich ein frequenzkorrigierter Operationsverstärker näherungsweise wie ein Tiefpass 1. Ordnung verhält, lässt sich der Frequenzgang des unbeschalteten Operationsverstärkers einfach angeben:

$$
A_D=\frac{A_{D0}}{1+j\,\frac{f}{f_g}}
$$

(5.66)

Die Differenzverstärkung des offenen Verstärkers ist meist sehr hoch und hat häufig Werte von $A_{D0}=10^5=100\,\mathrm{dB}$, wie man in Abb. 5.98 sieht. Die Grenzfrequenz des offenen Verstärkers ist meist sehr niedrig und beträgt häufig nur $f_g=100\,\mathrm{Hz}$. Der Frequenzgang der gegengekoppelten Schaltung lautet gemäß (5.13):

$$
A=\frac{A_D}{1+k_R A_D}
$$

(5.67)

³ Für einen Standard-Operationsverstärker ist das schon ein großer Strom, der nicht weit vom maximalen Ausgangsstrom von 20 mA entfernt ist. Derart große Ströme sollte man nur dann zulassen, wenn sie sich nicht umgehen lassen, da sich der Operationsverstärker durch die entstehende Verlustleistung erwärmt. Die Offsetspannungs- und Offsetstromdrift bewirken dann zusätzliche Fehler.
<!-- page-import:0618:end -->

<!-- page-import:0619:start -->
582  5. Operationsverstärker

a Modell

b Frequenzgang

**Abb. 5.98.** Frequenzkorrigierter Operationsverstärker als Tiefpass 1. Ordnung zur Berechnung des Frequenzverhaltens der gegengekoppelten Schaltung. Beispiel für $f_T = 10\,\text{MHz}$.

Wenn man hier (5.66) einsetzt, folgt:

$$
\underline{A}=\frac{A_{D0}}{1+k_R A_{D0}}\;\frac{1}{1+j\frac{f}{f_g(1+k_R A_{D0})}}
\qquad \overset{k_R A_{D0}\gg 1}{\approx} \qquad
\frac{1/k_R}{1+j\frac{f}{k_R f_T}}
$$

(5.68)

Darin ist

$$
f_T=A_{D0}f_g=GBW
$$

(5.69)

die Transitfrequenz, die auch als Verstärkungs-Bandbreite-Produkt Gain Bandwidth Product GBW bezeichnet wird. Der Vergleich der rechten Seiten von (5.67) mit (5.68) zeigt, dass man statt der hier angewandten Näherung von einem vereinfachten Frequenzgang des offenen Verstärkers ausgehen kann.

Für $f \gg f_g$ folgt aus (5.66):

$$
\underline{A}_D \approx \frac{A_{D0}\,f_g}{j f}=\frac{f_T}{j f}
$$

(5.70)

Dies entspricht dem Frequenzgang eines Integrators; deshalb bezeichnet man diese Näherung auch als *Integratornäherung*. Ein Unterschied zum exakten Frequenzgang des offenen Verstärkers ergibt sich nur bei niedrigen Frequenzen, wie Abb. 5.98b zeigt: hier geht die Verstärkung gegen Unendlich, die tatsächliche Verstärkung aber gegen $A_{D0}$. Setzt man die Integratornäherung (5.70) in (5.67) ein, ergibt sich:

$$
\underline{A}=\frac{\underline{A}_D}{1+k_R\underline{A}_D}
=\frac{A_0}{1+j\frac{A_0}{f_T}f}
=\left\{
\begin{array}{ll}
A_0=1/k_R & \text{für } f \ll f_g \\
\underline{A}_D=f_T/(j\,f) & \text{für } f \gg f_g
\end{array}
\right.
$$

(5.71)

Darin ist $A_0 = 1/k_R$ die durch die Gegenkopplung festgelegte Verstärkung. Auf diese Weise erhält man mit wenig Rechnung und ohne weitere Näherung das Ergebnis von (5.68). Die Verstärkung der gegengekoppelten Schaltung hat demnach bis zur Grenzfrequenz $f_g = f_T/A_0 = f_T k_R$ den durch die Gegenkopplung bestimmten Wert; darüber verläuft sie wie beim offenen Verstärker. Dies erkennt man auch in Abb. 5.98, wo Frequenzgänge des gegengekoppelten Verstärkers mit eingezeichnet sind. Die Integratornäherung liefert demnach auch unterhalb der Grenzfrequenz des offenen Operationsverstärkers richtige
<!-- page-import:0619:end -->

<!-- page-import:0620:start -->
5.5 Parameter von Operationsverstärkern 583

a Schaltung

b Frequenzgang

**Abb. 5.99.** Auswirkung der parasitären Kapazitäten auf die Grenzfrequenz. Die zusätzliche Korrekturkapazität $C_k$ dient zur Kompensation.

Ergebnisse; es muss lediglich die Bedingung für die Schleifenverstärkung $g = k\,A_{D0} \gg 1$ erfüllt sein. Aus diesem Grund benutzt man (5.70) immer vorteilhaft zur Berechnung des Frequenzverhaltens von gegengekoppelten Operationsverstärkern.

Eine unerwartete Bandbegrenzung kann durch die parasitären Kapazitäten der Gegenkopplungswiderstände eintreten. Dieser Effekt ist in Abb. 5.99 dargestellt. Jeder Widerstand besitzt eine parasitäre Kapazität, die praktisch nur von der Bauform und nicht vom Widerstandswert abhängt. Außerdem muss man die Eingangskapazität $C_e$ des Operationsverstärkers berücksichtigen. Deshalb besitzt die Schaltung für hohe Frequenzen nur die Verstärkung:

$$
A_{HF} = 1 + \frac{C_1 + C_e}{C_N}
\qquad \text{z.B.} \qquad
= 1 + \frac{1\,\mathrm{pF} + 2\,\mathrm{pF}}{1\,\mathrm{pF}} = 4
$$

Sie ist unabhängig davon, welchen Wert die Widerstände besitzen. Damit die Grenzfrequenz der Schaltung nicht durch die parasitären Kapazitäten bestimmt wird, müssen die beiden Zeitkonstanten gleich sein:

$$
R_1(C_1 + C_e + C_k) = R_N C_N
$$

Dann handelt es sich um einen frequenzgangkorrigierten Spannungsteiler. Aus dieser Bedingung lässt sich die erforderliche Korrekturkapazität berechnen:

$$
C_k = \frac{R_N}{R_1}\,C_N - C_1 - C_e
\qquad \text{z.B.} \qquad
= \frac{90\,\mathrm{k}\Omega}{10\,\mathrm{k}\Omega}\cdot 1\,\mathrm{pF} - 1\,\mathrm{pF} - 2\,\mathrm{pF} = 6\,\mathrm{pF}
$$

## 5.5.8 Rauschen

Das Rauschen von Operationsverstärkern lässt sich wie bei einzelnen Transistoren durch Angabe einer auf den Eingang bezogenen Rauschspannungs- und Rauschstromdichte beschreiben. In Abb. 5.85 auf S. 569 sind typische Werte angegeben. Um daraus die Rauschspannung und den Rauschstrom zu berechnen, muss man die Dichten mit der Wurzel der Rauschbandbreite multiplizieren:

$$
u_{r,eff} = u_r(f)\sqrt{B_r},
\qquad
i_{r,eff} = i_r(f)\sqrt{B_r}
$$

(5.72)

Auch Widerstände rauschen; ihre Rauschleistung

$$
P_r = 4\,kT\,B_r = u_{r,eff}^2 / R
$$

(5.73)
<!-- page-import:0620:end -->

<!-- page-import:0621:start -->
584  5. Operationsverstärker

Abb. 5.100. Rauschquellen bei einem nichtinvertierenden Verstärker am Beispiel der 741-Klasse.  
Die Spannungsverstärkung der Schaltung beträgt hier $A = 10$

ist unabhängig von der Größe des Widerstandes. Dabei ist $k$ die Bolzmann-Konstante und $T$ die absolute Temperatur; bei Zimmertemperatur ist $4kT = 1{,}6 \cdot 10^{-20}\,\mathrm{Ws}$. Daraus lässt sich die Rauschspannung berechnen:

$$
u_{r,\mathrm{eff}}=\sqrt{PR}=\sqrt{4kTBR}=0{,}13\,\mathrm{nV}\cdot \sqrt{\frac{B_r}{\mathrm{Hz}}}\cdot \sqrt{\frac{R}{\Omega}}
$$

(5.74)

Ein $10\,\mathrm{k}\Omega$ Widerstand besitzt also eine Rauschspannungsdichte von $u_r(f)=13\,\mathrm{nV}/\sqrt{\mathrm{Hz}}$.

In Abb. 5.100 sind alle Rauschspannungsquellen eines als nichtinvertierenden Verstärker beschalteten Operationsverstärkers eingezeichnet. Man sieht, dass jeder Widerstand eine Rauschspannungsquelle besitzt, die Rauschspannung des Operationsverstärkers wie die Offsetspannung und der Rauschstrom wie der Eingangsruhestrom wirkt. Der Eingangsrauschstrom des Verstärkers verursacht am Innenwiderstand $R_g$ der Signalquelle eine Rauschspannung $i_{r,\mathrm{eff}}R_g$, die zusammen mit dem Eigenrauschen des Innenwiderstands und dem Spannungsrauschen des Verstärkers wie das Nutzsignal verstärkt wird. Das Rauschen des Widerstands $R_1$ wird mit der Verstärkung des invertierenden Verstärkers bewertet, der Rauschstrom am invertierenden Eingang verursacht einen Spannungsabfall an $R_N$ und addiert sich zu dessen Eigenrauschen. Daraus berechnen sich die einzelnen Rauschanteile in Abb. 5.100. Um die resultierende Rauschspannung am Ausgang des Verstärkers zu erhalten, darf man die einzelnen Rauschspannungen nicht einfach addieren. Da es sich um unkorrelierte Rauschquellen handelt, muss man die Anteile quadratisch addieren:

$$
P_{r,\mathrm{ges}}=\sum P_r \quad \Rightarrow \quad u_{r,\mathrm{ges}}(f)=\sqrt{\sum u_r^2(f)}
$$

(5.75)

Das führt dazu, dass sich kleinere Beiträge praktisch nicht auf das Ergebnis auswirken. Auf diese Weise ergibt sich in dem Beispiel eine resultierende Rauschspannungsdichte von $u_{r,\mathrm{ges}}(f)=338\,\mathrm{nV}/\sqrt{\mathrm{Hz}}$. Um daraus die Rauschspannung zu berechnen, muss man noch die Rauschbandbreite berücksichtigen. Dazu muss man die Grenzfrequenz mit
<!-- page-import:0621:end -->

<!-- page-import:0622:start -->
5.5 Parameter von Operationsverstärkern

585

$B_r = \pi f_g/2$ multiplizieren, um zu berücksichtigen, dass das Rauschen oberhalb der Grenzfrequenz nicht schlagartig Null wird, sondern näherungsweise wie ein Tiefpass 1. Ordnung abnimmt, siehe Abschnitt 4.2.4.5.7 auf S. 480. In dem Beispiel in Abb. 5.100 ergibt sich dann bei einer Bandbreite von $B_r = 100\,\mathrm{kHz}$

$$u_{r,\mathit{eff},ges} = u_{r,ges}(f)\sqrt{\pi f_g/2} = 338\,\mathrm{nV}\cdot\sqrt{1{,}57\cdot100\,\mathrm{kHz}} = 134\,\mu\mathrm{V}\qquad (5.76)$$

Um das Rauschen zu reduzieren, muss man die Schaltung niederohmiger dimensionieren und einen Operationsverstärker mit geringerem Spannungsrauschen einsetzen. Wenn man die Widerstände in Abb. 5.100 um einen Faktor 100 verkleinert, reduzieren sich ihre Rauschspannungen um den Faktor 10. Mit einem AD797, der eine Rauschspannungsdichte von nur $1\,\mathrm{nV}/\sqrt{\mathrm{Hz}}$ besitzt, ergibt sich dann am Ausgang bei derselben Bandbreite eine Rauschspannung von nur $u_{r,\mathit{eff},ges} = 9\,\mu\mathrm{V}$.

Der Innenwiderstand der Eingangsspannungsquelle $R_g$ stellt eine untere Grenze für das Rauschen dar, da es schon am Eingang des Verstärkers vorhanden ist. Seine Größe lässt sich gemäß (5.74) berechnen. Zum Vergleich kann man die Rauschspannung am Ausgang des Verstärkers auf den Eingang umrechnen, indem man sie durch die Verstärkung dividiert. Das Rauschen des beschalteten Verstärkers erhält man, indem man in Abb. 5.100 den jeweiligen Generatorwiderstand berücksichtigt. Damit lässt sich in Abb. 5.101a gut vergleichen, wie stark der Verstärker am Rauschen beteiligt ist. Bei niedrigen Quellwiderständen überwiegt das Spannungsrauschen des Verstärkers und bei hohen Quellwiderständen das Stromrauschen, das an $R_g$ eine Rauschspannung erzeugt. Da sie proportional zu $R_g$ ist, steigt sie in der logarithmischen Darstellung doppelt so steil an wie das Widerstandsrauschen von $R_g$. Um das Rauschen bei niedrigen Generatorwiderständen zu reduzieren, muss man einen Verstärker mit niedrigerem Spannungsrauschen verwenden. Deshalb wurden zum Vergleich die Werte für den AD797 mit aufgenommen, der mit $1\,\mathrm{nV}/\sqrt{\mathrm{Hz}}$ lediglich $1/10$ des Spannungsrauschens besitzt. Man sieht, dass man hier bei Quellwiderständen im Bereich von $500\,\Omega$ der theoretischen Grenze sehr nahe kommt. Bei hohen Generatorwiderständen bringt die niedrige Rauschspannung keinen Vorteil. Hier ist ein Verstärker mit niedrigem Stromrauschen besser.

Man erkennt in Abb. 5.101a, dass nicht der Absolutwert des Rauschens bestimmt, ob ein Verstärker günstig ist, sondern die Vergrößerung der Rauschspannung im Vergleich zu einem rauschfreien Verstärker, also die Verschlechterung des Signal-Rausch-Abstands durch den Verstärker. Deshalb definiert man eine Rauschzahl:

*Die Rauschzahl gibt an, um welchen Faktor die Rauschleistung der ganzen Schaltung (auf den Eingang umgerechnet) größer ist als die Rauschleistung des Quellwiderstands*

Man kann die Rauschzahl auch am Ausgang des Verstärkers ermitteln, da das Rauschen der ganzen Schaltung und das Rauschen des Quellwiderstands mit demselben Faktor verstärkt werden. Sie lässt sich daher folgendermaßen berechnen:

$$F=\left(\frac{\text{Rauschspannung am Ausgang des realen Verstärkers}}{\text{Rauschspannung des Quellwiderstands, verstärkt}}\right)^2 \qquad (5.77)$$

Für das Beispiel in Abb. 5.100 erhält man:

$$F=\left(\frac{338\,\mathrm{nV}/\sqrt{\mathrm{Hz}}}{10\cdot13\,\mathrm{nV}/\sqrt{\mathrm{Hz}}}\right)^2=6{,}8$$
<!-- page-import:0622:end -->
