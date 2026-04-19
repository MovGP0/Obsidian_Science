# Switching Regulators without Isolation

<!-- page-import:0984:start -->
16.5 Schaltregler ohne Potentialtrennung 947

$$
U_{ref} = U_{Temp} + U_{BE} = E_q/q = 1{,}2\ \mathrm{V}
$$

(16.12)

ist. Darin ist $E_g = 1{,}2\ \mathrm{eV}$ der Bandabstand von Silizium und $q$ die Elementarladung. Gleichung (16.12) ist ein genaueres und gleichzeitig einfacheres Abgleichkriterium für $R_3$, um den Temperaturkoeffizienten zu minimieren.

Mit Bandgap-Referenzen lassen sich auch höhere Referenzspannungen erzeugen, wenn man wie in Abb. 16.33 nur einen Teil der Ausgangsspannung des Operationsverstärkers über die Widerstände $R_5$ und $R_4$ auf die Basisanschlüsse rückkoppelt. Außerdem ist es üblich, die eigentliche Referenzspannungsquelle $T_1$, $T_2$ aus der stabilisierten Ausgangsspannung zu betreiben. Dadurch ergibt sich eine wesentlich bessere Unterdrückung von Eingangsspannungsschwankungen (ripple rejection). Bei der Schaltung in Abb. 16.33 kann man die Ausgangsspannung mit der Betriebsspannung verbinden. Dann arbeitet sie als Shunt-Regulator wie eine Z-Diode.

Da die Spannung $U_{Temp}$ proportional zur absoluten Temperatur ist, kann man sie zur Temperaturmessung verwenden (s. auch Kap. 19.1.4 auf S. 1090). Bei manchen Schaltungen ist daher der $U_{Temp}$-Anschluss herausgeführt.

## 16.5 Schaltregler ohne Potentialtrennung

Spannungswandler (DC-DC-Converter) sind Schaltungen, die eine Gleichspannung in eine andere Spannung umwandeln, die höher oder niedriger ist. Hier sollen zunächst Schaltungen behandelt werden, die keine Potentialtrennung bewirken und daher keinen Trenntransformator benötigen, sondern lediglich eine Speicherdrossel. In Abb. 16.34 sind die 3 Grundschaltungen für Spannungswandler gegenübergestellt. Sie bestehen jeweils aus vier Bauteilen: zwei Leistungsschaltern, einer Speicherdrossel und einem Speicherkondensator. Der Abwärtswandler ist die gebräuchlichste Schaltung. Die beiden Schalter, die komplementär getaktet werden erzeugen eine Wechselspannung, deren Mittelwert je nach Tastverhältnis zwischen der Eingangsspannung und Null liegt. Das LC-Filter bildet diesen Mittelwert im Prinzip verlustfrei und stellt eine Gleichspannung am Ausgang bereit. Ein Abwärtswandler wird z.B. eingesetzt, um die Betriebsspannung für eine CPU in einem PC zu erzeugen. Hier werden große Ströme bei niedrigen Spannungen benötigt.

Beim Abwärtswandler fließt dauernd Strom in den Speicherkondensator. Daher wird die Schaltung auch als Durchflusswandler bezeichnet. Das ist beim Aufwärtswandler und beim invertierenden Wandler anders, denn dort wird der Kondensator nicht nachgeladen, solange Energie in die Drossel eingespeichert wird. Sie werden daher als Sperrwandler bezeichnet.

Bei dem Aufwärtswandler wird $U_a = U_e$, in der eingezeichneten Schalterstellung. Wenn der Schalter S geschlossen wird, wird in der Speicherdrossel Energie gespeichert, die zusätzlich an den Ausgang abgegeben wird, wenn der Schalter S geöffnet und $\bar{S}$ wieder geschlossen wird. Deshalb wird die Ausgangsspannung größer als die Eingangsspannung.

Bei dem invertierenden Wandler wird in der Drossel Energie gespeichert, solange der Schalter S geschlossen ist. Wenn der Schalter S wieder geöffnet wird, behält der Drosselstrom seine Richtung bei und lädt den Kondensator (bei positiver Eingangsspannung) über den geschlossenen Schalter $\bar{S}$ auf negative Werte auf.

Auf der rechten Seite in Abb. 16.34 ist jeweils eine einfache Realisierung der drei Schaltregler dargestellt. Als Schalter werden heute ausschließlich Leistungsmosfets eingesetzt, weil sie schnell schalten und mit niedrigen Durchlasswiderständen erhältlich sind. Allerdings muss man beachten, dass Leistungsmosfets eine Inversdiode besitzen, die bei
<!-- page-import:0984:end -->

<!-- page-import:0985:start -->
948 16. Stromversorgung

Prinzip

Einfache Realisierung

Abwärts Wandler, Buck Converter

Aufwärts Wandler, Boost Converter

Invertierender Wandler, Flyback Converter

**Abb. 16.34.** Grundschaltungen für Spannungswandler ohne Potentialtrennung

invertierter Drainspannung leitend wird. Um daran zu erinnern, haben wir diese Diode jeweils eingezeichnet. Man sieht, dass man nur einen Schalter steuern muss und den anderen durch eine Diode ersetzen kann. Davon macht man auch häufig Gebrauch, um Kosten zu sparen. Die Durchlassspannung einer Diode ist jedoch deutlich größer als die eines niederohmigen Leistungsmosfets. Deshalb verschlechtert sich dadurch der Wirkungsgrad.

## 16.5.1 Der Abwärtswandler

### 16.5.1.1 Prinzip

Zunächst soll der Abwärtswandler mit einem Schalter und einer Diode in Abb. 16.35 untersucht werden. Solange der Schalter geschlossen ist, wird $U_1 = U_e$. Wenn er öffnet, behält der Drosselstrom seine Richtung bei, und $U_1$ sinkt ab, bis die Diode leitend wird, also ungefähr auf Nullpotential. Dies erkennt man auch an dem Zeitdiagramm in Abb. 16.36.

Der zeitliche Verlauf des Spulenstroms ergibt sich aus dem Induktionsgesetz:

$$
U_L = L \frac{dI_L}{dt}
$$

(16.13)

Während der Einschaltzeit $t_{ein}$ liegt an der Drossel die Spannung $U_L = U_e - U_a$, während der Ausschaltzeit $t_{aus}$ die Spannung $U_L = -U_a$. Daraus ergibt sich mit Gl. (16.13) die Stromänderung:

$$
\Delta I_L = \frac{1}{L}(U_e - U_a)\, t_{ein} = \frac{1}{L} U_a t_{aus}
$$

(16.14)

Aus dieser Bilanz lässt sich die Ausgangsspannung berechnen:
<!-- page-import:0985:end -->

<!-- page-import:0986:start -->
16.5 Schaltregler ohne Potentialtrennung 949

Abb. 16.35.  
Abwärtswandler mit Schalter und Diode  
(Buck converter)

Abb. 16.36.  
Strom- und Spannungsverlauf

$$
U_a=\frac{t_{ein}}{t_{ein}+t_{aus}}\,U_e=\frac{t_{ein}}{T}\,U_e=p\,U_e
\qquad (16.15)
$$

Darin ist $T=t_{ein}+t_{aus}=1/f$ die Schwingungsdauer und $p=t_{ein}/T$ das Tastverhältnis. Man sieht, dass sich als Ausgangsspannung erwartungsgemäß der arithmetische Mittelwert von $U_1$ ergibt.

Ganz anders wird die Funktionsweise der Schaltung, wenn der Ausgangsstrom $I_a$ kleiner wird als:

$$
I_a=\frac{1}{2}\,\Delta I_L=\frac{U_a}{2L}\,t_{aus}=\frac{U_aT}{2L}\,(1-p)
\qquad (16.16)
$$

Dann sinkt der Drosselstrom während der Sperrphase des Schalters bis auf Null ab, die Diode sperrt, und die Spannung an der Drossel wird Null. Weil der Drosselstrom zeitweise Null wird, also Lücken aufweist, bezeichnet man dies auch als lückenden Betrieb. Diese Verhältnisse sind in Abb. 16.37 dargestellt. Zur Berechnung der Ausgangsspannung wollen wir annehmen, dass die Schaltung verlustfrei arbeitet. Dann muss die mittlere Eingangsleistung gleich der Ausgangsleistung werden:

$$
U_e \bar{I}_e=U_a I_a
\qquad (16.17)
$$

Der Strom durch die Drossel steigt während der Einschaltdauer $t_{ein}$ von Null auf den Wert $I_L=U_L\,t_{ein}/L$ an. Der arithmetische Mittelwert des Eingangsstroms beträgt daher:

$$
\bar{I}_e=\frac{t_{ein}}{T}\cdot\frac{1}{2}\,I_L=\frac{t_{ein}^2}{2TL}\,U_L=\frac{T}{2L}\,(U_e-U_a)\,p^2
\qquad (16.18)
$$

Einsetzen in Gl. (16.17) ergibt die Ausgangsspannung und das Tastverhältnis:

$$
U_a=\frac{U_e^2\,p^2T}{2LI_a+U_e\,p^2T},
\qquad
p=\sqrt{\frac{2L}{T}\,\frac{U_a}{U_e(U_e-U_a)}}\,\sqrt{I_a}
\qquad (16.19)
$$

Um zu verhindern, dass die Ausgangsspannung bei kleinen Strömen ($I_a<I_{a,\min}$) ansteigt, muss man $p$ entsprechend reduzieren. Dies ist in Abb. 16.37 schematisch dargestellt. Man erkennt, dass in diesem Bereich sehr kleine Einschaltdauern realisiert werden müssen. Bei Strömen über $I_{a,\min}$ bleibt das Tastverhältnis nach Gl. (16.15) konstant. Dies gilt jedoch nur bei einer verlustfreien Schaltung. Sonst muss $p$ auch oberhalb von $I_{a,\min}$ mit zunehmendem Ausgangsstrom — wenn auch geringfügig — vergrößert werden, um die Ausgangsspannung konstant zu halten.
<!-- page-import:0986:end -->

<!-- page-import:0987:start -->
950 16. Stromversorgung

**Abb. 16.37.**  
Strom- und Spannungsverlauf im Abwärts-  
wandler bei Ausgangsströmen unter $I_{a,\min}$

**Abb. 16.38.**  
Abhängigkeit des Tastverhältnisses  
$p = t_{\mathrm{ein}}/T$ vom Ausgangsstrom $I_a$  
bei konstanter Ausgangsspannung $U_a$

Der Glättungskondensator $C$ bestimmt die Welligkeit der Ausgangsspannung. Der Ladestrom beträgt $I_C = I_L - I_a$. Die während einer Periode zu- und abgeführte Ladung ist demnach gleich den in Abb. 16.36 schraffierten Flächen. Damit erhalten wir für die Welligkeit die Beziehung:

$$
\Delta U_a = \frac{\Delta Q_C}{C}
= \frac{1}{C}\cdot\frac{1}{2}\cdot\left(\frac{1}{2}\,t_{\mathrm{ein}}+\frac{1}{2}\,t_{\mathrm{aus}}\right)\cdot\frac{1}{2}\,\Delta I_L
= \frac{T}{8C}\,\Delta I_L
$$

Mit Gl. (16.14) ergibt sich daraus die Glättungskapazität:

$$
C = \frac{T^2}{8L}\,\frac{U_a}{\Delta U_a}\,(1-p)
\qquad\qquad (16.20)
$$

## 16.5.1.2 Ausführungsbeispiel

Die Dimensionierung des Leistungsteils eines Abwärtswandlers soll noch an einem Beispiel gezeigt werden. Die Dimensionierungsgleichungen lauten gemäß (16.15), (16.16) und (16.20):

*Abwärtswandler*

$$
U_a = \frac{t_{\mathrm{ein}}}{t_{\mathrm{ein}}+t_{\mathrm{aus}}}\,U_e
= \frac{t_{\mathrm{ein}}}{T}\,U_e
= p\,U_e
\qquad \text{für } I_a > I_{a,\min}
\qquad (16.21)
$$

$$
L_{\min} = \frac{U_a\,T}{2I_{a,\min}}\,(1-p)
\qquad\qquad (16.22)
$$

$$
C = \frac{T^2}{8L}\,\frac{U_a}{\Delta U_a}\,(1-p)
\qquad\qquad (16.23)
$$

Verlangt sei eine Ausgangsspannung von 5 V bei einem maximalen Strom von 5 A. Der minimale Ausgangsstrom sei 0,3 A, die Eingangsspannung betrage etwa 15 V. Als freier Parameter bleibt dann noch die Schwingungsdauer $T = 1/f$. Um mit einer kleinen Induktivität auszukommen, wählt man die Frequenz $f$ so hoch wie möglich. Dem steht jedoch entgegen, dass die Schaltverluste proportional zur Frequenz ansteigen. Aus diesen Gründen werden Schaltfrequenzen zwischen 100 kHz und 1 MHz bevorzugt. Der Schaltregler
<!-- page-import:0987:end -->

<!-- page-import:0988:start -->
16.5 Schaltregler ohne Potentialtrennung 951

normaler, linearer Verlauf

nahe Sättigung

zu hoher Widerstand

**Abb. 16.39.** Stromverlauf in der Speicherdrossel

soll mit einer Frequenz von 250 kHz betrieben werden; das ergibt eine Schwingungsdauer von $T = 4\,\mu\mathrm{s}$.

Nach Gl. (16.21) ergibt sich dann eine Einschaltdauer von

$$
t_{ein} = T\,\frac{U_a}{U_e} = 4\,\mu\mathrm{s}\cdot\frac{5\,\mathrm{V}}{15\,\mathrm{V}} = 1{,}3\,\mu\mathrm{s}
$$

und das Tastverhältnis:

$$
p = \frac{t_{ein}}{T} = \frac{U_a}{U_e} = \frac{5\,\mathrm{V}}{15\,\mathrm{V}} = 0{,}33
$$

Die Induktivität der Speicherdrossel wählt man nach Möglichkeit so groß, dass $I_{a,min}$ nicht unterschritten wird. Aus (16.22) folgt dann:

$$
L_{min} = \frac{U_a\,T}{2I_{a,min}}(1 - p) = 4\,\mu\mathrm{s}\cdot\left(1 - \frac{5\,\mathrm{V}}{15\,\mathrm{V}}\right)\frac{5\,\mathrm{V}}{2\cdot0{,}3\,\mathrm{A}} = 22\,\mu\mathrm{H}
$$

Speicherdrosseln sind in allen gebräuchlichen Induktivitäten und Bauformen im Handel erhältlich; hier ist es also nicht erforderlich, sie selbst zu wickeln. Man muss bei der Auswahl jedoch darauf achten, dass sie einerseits bei dem Maximalstrom nicht in die Sättigung geht oder andererseits keinen zu hohen Widerstand besitzt. Deshalb ist es zweckmäßig, den Stromverlauf zu oszillografieren, um sich von dem ordnungsgemäßen Betrieb zu überzeugen. In Abb. 16.39 sind der gewünschte und die mangelhaften Stromverläufe gegenübergestellt.

Die Ausgangsspannung bleibt selbst dann konstant, wenn der Ausgangsstrom kleiner als der in der Rechnung eingesetzte Wert $I_{a,min} = 0{,}3\,\mathrm{A}$ wird. In diesem Fall reduziert der Regelverstärker über den Komparator das Tastverhältnis entsprechend Abb. 16.38. Probleme treten dann auf, wenn die notwendige Einschaltdauer kürzer als die minimal realisierbare Einschaltdauer des Schalttransistors T wird. In diesem Fall steigt die Ausgangsspannung bei einem Einschaltimpuls so weit an, dass der Transistor anschließend für mehrere Taktperioden gesperrt wird. Daraus resultiert ein sehr unruhiger Betrieb.

Wenn die Ausgangswelligkeit $\Delta U_a$ in der Größenordnung von 10 mV liegen soll, erhält man aus Gl. (16.23) für den Glättungskondensator den Wert:

$$
C = \frac{T^2}{8L}\,\frac{U_a}{\Delta U_a}\,(1 - p) = \frac{(4\,\mu\mathrm{s})^2}{8\cdot22\,\mu\mathrm{H}}\,\frac{5\,\mathrm{V}}{10\,\mathrm{mV}}\,(1 - 0{,}33) = 30\,\mu\mathrm{F}
$$

Bei der Berechnung der Filterkapazität wurde der parasitäre Serienwiderstand (*Equivalent Series Resistance, ESR*) und die Serieninduktivität (*Equivalent Series Inductance, ESL*) nicht berücksichtigt. Um trotzdem akzeptable Werte für die Ausgangswelligkeit zu erhalten, ist eine größere Kapazität erforderlich. Zur Realisierung schaltet man mehrere kleine Kondensatoren parallel, da sie immer deutlich kleinere Werte für den Serienwiderstand und die Serieninduktivität aufweisen als ein einziger großer Kondensator.
<!-- page-import:0988:end -->

<!-- page-import:0989:start -->
952  16. Stromversorgung

**Abb. 16.40.** Bei einem Abwärtswandler lässt sich der Leistungsschalter besonders einfach mit einem p-Kanal-Mosfet realisieren. Für die eingetragenen Potentiale gilt: oberer Wert = eingeschaltet, unterer Wert = ausgeschaltet

Die statischen Verluste der Schaltung ergeben sich überwiegend aus den Spannungsabfällen im Leistungsstromkreis. Dabei lässt sich die Speicherdrossel leicht so überdimensionieren, dass ihre ohmschen Verluste klein werden. Dann bleibt als Verlustquelle der Spannungsabfall an den Leistungsschaltern, die aus dem Transistor T und der Diode D gebildet wird.

Während der Zeit $t_{ein}$ fließt der Ausgangsstrom durch T, während $t_{aus}$ durch D. Wenn man bei einem Ausgangsstrom von 5 A mit einem Spannungsabfall von 0,7 V an dem Transistor bzw. an der Diode rechnet, ergibt sich daraus eine Verlustleistung von 3,5 W. Der Wirkungsgrad beträgt daher höchstens:

$$
\eta \;=\; \frac{P_{Abgabe}}{P_{Aufnahme}} \;=\; \frac{25\,\mathrm{W}}{25\,\mathrm{W} + 3{,}5\,\mathrm{W}} \;=\; 88\,\%
$$

Dabei sind die Umschaltverluste, die bei der hohen Schaltfrequenz nicht zu vernachlässigen sind, noch nicht berücksichtigt. Zusätzlich wird der Wirkungsgrad durch die Stromaufnahme des Schaltreglers selbst beeinträchtigt. Da dieser Beitrag von dem Ausgangsstrom unabhängig ist, reduziert er den Wirkungsgrad besonders bei kleinen Ausgangsströmen.

### 16.5.1.3 Leistungsschalter

Die einfachste Möglichkeit zur Realisierung des Leistungsschalters bei dem Abwärtswandler besteht wie Abb. 16.40 im Einsatz eines p-Kanal-Mosfets. Seine Source-Elektrode liegt daher am Eingang. Um ihn zu sperren, soll seine Gate-Source-Spannung gleich Null sein: das Gatepotential muss also auf die Eingangsspannung ansteigen. Um den Transistor leitend zu machen, muss das Gate (bei einem p-Kanal-Fet) negativ gegenüber der Source sein, also z.B. gleich Null. Aus diesem Grund kann man das Ausgangssignal des PWM-Komparators unmittelbar zur Ansteuerung verwenden. Es handelt sich hier demnach um ein negiertes Signal: ein H-Pegel zum Ausschalten und ein Low-Pegel zum Einschalten. Das negierte Schaltsignal erhält man einfach dadurch, dass man die Eingänge des Komparators entsprechend anschließt.

Diese einfache Ansteuerung beschränkt jedoch die zulässige Eingangsspannung: Sie muss so groß sein dass der Mosfet niederohmig leitend wird wenn das Gate zum Einschalten auf Nullpotential liegt; daher muss sie mindestens 5 V betragen. Andererseits darf sie nicht zu groß sein, damit die maximale Gate-Source-Spannung nicht überschritten wird, also nicht größer als 20 V sein.
<!-- page-import:0989:end -->

<!-- page-import:0990:start -->
## 16.5 Schaltregler ohne Potentialtrennung

953

**Abb. 16.41.** Gate-Treiber mit Hilfsstromversorgung zur Ansteuerung von n-Kanal-Mosfets

Der Einsatz von p-Kanal-Mosfets bringt jedoch noch einen schwerwiegenden Nachteil mit sich: Sie besitzen einen deutlich höheren On-Widerstand als n-Kanal-Mosfets gleicher Größe. Um die ordnungsgemäße Polung für einen n-Kanal-Mosfet zu erhalten, muss man wie in Abb. 16.41 die Drain-Elektrode mit der Eingangsspannung verbinden.

Um einen n-Kanal-Mosfet einzuschalten, ist eine Gatepotential erforderlich, das positiv gegenüber seinem Sourcepotential ist. Dazu benötigt man, wenn der Transistor leitend ist, eine Spannung, die höher als die Betriebsspannung ist. Deshalb muss der Gatetreiber aus einer Hilfsstromversorgung betrieben werden, die auf dem Sourcepotential des Transistors liegt. Zur einfachen Erzeugung richtet man die Wechselspannung, die an der Diode $D_1$ liegt mit der Diode $D_2$ gleich. Dadurch wird der Kondensator $C_1$ auf $U_e$ aufgeladen. Diese Spannung bleibt wegen des Kondensators auch dann erhalten, wenn der Transistor einschaltet: $U_1 = U_e$. Dadurch erhält der Gatetreiber eine konstante Betriebsspannung der Größe $U_e$ bezogen auf das Sourcepotential. Im eingeschalteten Zustand ($U_1 = U_e$) ergibt sich dadurch ein Gatepotential von $2U_e$. Diese Methode zur Hilfsstromversorgung funktioniert hier nur deshalb, weil in einem Schaltregler ständig geschaltet wird. Bei statischem Einschalten würde der Kondensator nicht nachgeladen werden.

Bei niedrigen Ausgangsspannungen im Bereich von $U_a = 1 \dots 2\,\mathrm{V}$ wie man sie zum Betrieb einer CPU benötigt, bestimmt die Durchlassspannung des Leistungsschalters und der Leistungsdiode den Wirkungsgrad. Wenn man entsprechend niederohmige Leistungs-mosfets einsetzt, lassen sich Durchlassspannungen von $0{,}2\,\mathrm{V}$ erreichen. Leistungsdioden

**Abb. 16.42.** Synchrongleichrichtung mit dem Transistor $T_2$. Jeder Leistungsschalter erfordert einen separaten Gate-Treiber: low-side driver, high-side driver
<!-- page-import:0990:end -->

<!-- page-import:0991:start -->
954 16. Stromversorgung

$$
U_a \;=\; \frac{U_{ref}}{k} \;=\; \left(1+\frac{R_2}{R_1}\right) U_{ref}
$$

**Abb. 16.43.** Abwärtswandlers mit Spannungsregler (voltage mode control)

besitzen jedoch eine deutlich höhere Durchlassspannung; sie beträgt selbst beim Einsatz von Schottky-Dioden 0,7 V. Um die dadurch bedingten Verluste zu reduzieren, setzt man statt einer Leistungsdiode den Leistungstransistor $T_2$ in Abb. 16.42 ein. Dieser Transistor muss dann komplementär zu $T_1$ gesteuert werden wie in dem Prinzipschaltbild in Abb. 16.34. Es handelt sich dabei um Synchrongleichrichtung. Dadurch wird gleichzeitig der Niedrigstromeffekt beseitigt, der dadurch entsteht, dass die Leistungsdiode wie in Abb. 16.37 in jedem Zyklus sperrt. Ein Nachteil der Synchrongleichrichtung besteht allerdings darin, dass man nicht nur einen zweiten Leistungstransistor benötigt, sondern auch zusätzliche Ansteuerleistung. Das verschlechtert den Wirkungsgrad der Schaltung bei geringer Ausgangslast. Wenn man den Transistor $T_2$ nicht ansteuert, funktioniert die Schaltung trotzdem, denn dann übernimmt seine Inversdiode den Strom. Dann muss man jedoch – wie bei jeder mit normalen Diode – mit Durchlassspannungen von 1,2 V rechnen.

#### 16.5.1.4 Pulsbreitenmodulation

Die Erzeugung des Schaltsignals erfolgt in zwei Schritten: einem Pulsbreitenmodulator (PWM) und einem Regler mit Spannungsreferenz. Das Blockschaltbild ist in Abb. 16.43 dargestellt. Der Pulsbreitenmodulator besteht aus einem Sägezahngenerator und einem Komparator. Der Komparator schaltet den Schalter ein, solange die Spannung $U_R$ größer ist als die Sägezahnspannung $U_{SZ}$. Die dabei entstehende Steuerspannung $U_{St}$ ist in Abb. 16.44 dargestellt. Das Tastverhältnis

$$
p \;=\; \frac{t_{ein}}{T} \;=\; \frac{U_R}{\hat{U}_{SZ}}
$$

ist proportional zu $U_R$. Der Subtrahierer bildet die Differenz zwischen der Referenzspannung $U_{ref} - kU_a$. Der PI-Regelverstärker erhöht $U_R$ so lange, bis diese Differenz Null wird. Die Ausgangsspannung hat dann den Wert $U_a = U_{ref}/k$.

Mit dem RC-Glied $R_3, C_2$ wird das gewünschte Regelverhalten eingestellt. Dabei ist zu berücksichtigen, dass der Spannungsregelkreis in Schaltreglern leicht zu Instabilitäten neigt. Dies hat zwei Ursachen: zum einen handelt es sich um ein abtastendes System mit einer mittleren Totzeit, die gleich der halben Schwingungsdauer ist; zum anderen stellt
<!-- page-import:0991:end -->

<!-- page-import:0992:start -->
16.5 Schaltregler ohne Potentialtrennung 955

$Tastverhältnis:\quad p=\dfrac{t_{ein}}{T}=\dfrac{U_R}{\hat{U}_{SZ}}=0\dots100\%$

**Abb. 16.44.** Funktionsweise des Pulsbreitenmodulators. Die Spannung $U_R$ läuft hier von der unteren Begrenzung bis zur oberen Begrenzung.

das Ausgangsfilter einen Tiefpass 2. Ordnung dar, der eine Phasennacheilung bis zu 180° verursacht. Aus diesen Gründen ist es nützlich, sicherzustellen, dass der Regelverstärker bei hohen Frequenzen keine Phasennacheilung bewirkt. Dazu dient der Widerstand $R_3$ in Abb. 16.43.

Das $LC$-Tiefpassfilter in einem Schaltregler ist verantwortlich für Stabilitätsprobleme des Spannungsregelkreises, weil es einen Tiefpass 2. Ordnung darstellt, der für hohe Frequenzen eine Phasennacheilung von $-180^\circ$ verursacht. Man könnte das LC-Filter zwar durch ein $RC$-Filter ersetzen; das würde aber den Wirkungsgrad unzulässig stark beeinträchtigen. Wenn man die Übertragungsfunktion des in Abb. 16.45 einzeln dargestellten LC-Tiefpasses berechnet, erkennt man, dass die Spannungsübertragungsfunktion einen Tiefpass 2. Ordnung darstellt, aber die Stromübertragungsfunktion lediglich einen Tiefpass 1. Ordnung. Diese Erkenntnis nutzt man dazu aus, um die Regelung eines Schaltreglers zu verbessern, indem man eine Stromregelung für den Spulenstrom des $LC$-Filters vorsieht. Den Sollwert für diesen Regelkreis liefert dann der bekannte Spannungsregler, der die Ausgangsspannung bestimmt. Dadurch erscheint das $LC$-Filter für den Spannungsregler als eine Regelstrecke 1. Ordnung solange die Schleifenverstärkung im Stromregelkreis groß ist. Abbildung. 16.46 zeigt die Anwendung dieses Prinzips.

Die praktische Ausführung der Stromregelung in einem Abwärtswandler ist in Abb. 16.47 dargestellt. Der Stromregelkreis besteht aus dem Strommesser und dem

$$
U_a=\frac{1}{1+s^2LC}U_e=\frac{1}{sC}I_e
$$

**Abb. 16.45.**  
Tiefpass bei Spannungs- bzw.  
Stromsteuerung

**Abb. 16.46.**  
Spannungsregelkreis mit unterlegtem Stromregelkreis.  
Der Kreis neben der Induktivität soll symbolisch einen  
Strommesser mit Spannungsausgang darstellen.
<!-- page-import:0992:end -->

<!-- page-import:0993:start -->
956  16. Stromversorgung

**Abb. 16.47.** Abwärtswandler mit unterlegter Stromregelung (current mode control)

Komparator, der den Regelverstärker darstellt. Um die Stromregelung getaktet zu betreiben, wird ein RS-Flip-Flop vor den Schalter geschaltet, das bei Beginn von jedem Taktzyklus eingeschaltet wird und von dem Komparator ausgeschaltet wird, wenn der Strommesswert $U_I$ bis auf $U_R$ angestiegen ist; dies ist in Abb. 16.48 dargestellt. Der dreieckförmige Stromverlauf in der Speicherdrossel, den man in Abb. 16.36 erkennt, ersetzt hier die sonst erzeugte Sägezahnspannung gemäß Abb. 16.44. Man erzeugt diese Sägezahnspannung aber trotzdem und addiert etwas zum Strommesssignal (hier gestrichelt eingezeichnet), um auch bei kleinen Ausgangsströmen ein definiertes Schalten des Komparators zu gewährleisten (slope compensation). Der Spannungsregler OV erzeugt hier den Sollwert $U_R$ für den Stromregelkreis. Der Stromregelkreis bringt noch einen zusätzlichen Vorteil mit sich: Der Strom durch die Speicherdrossel und damit auch durch den Leistungsschalter wird ständig überwacht. Der Leistungsschalter wird sofort abgeschaltet, wenn der Strom zu groß wird.

Bei der stromgesteuerten Pulsbreitenregelung muss man den Strom in den Bruchteil der Schwingungsdauer messen, die unter Umständen lediglich $1\ \mu s$ beträgt. Dazu kommt nur ein Strommesswiderstand in Betracht, der niederohmig sein muss, um die Verluste klein zu halten. Die Strommessung ist schwierig, wenn der Strommesswiderstand auf hohen Potential liegt und sich nicht einseitig an Masse anschließen lässt. Dann ist ein Subtrahierer erforderlich, der die überlagerte Spannung eliminiert. Dieses Problem besteht z.B. bei dem symbolisch eingezeichneten Strommesser in Abb. 16.47. Dabei ist es zweckmäßig, einen Punkt in der Schaltung zur Strommessung zu verwenden, bei dem lediglich eine

**Abb. 16.48.**  
Zeitverlauf bei  
Stromregelung
<!-- page-import:0993:end -->

<!-- page-import:0994:start -->
16.5 Schaltregler ohne Potentialtrennung 957

**Abb. 16.49.**  
Fehler im Strommesssignal beim Einschalten  
des Leistungsmosfets

Gleichspannung überlagert ist. Wenn man hier den linken Anschluss der Speicherdrossel verwendet hätte, wäre eine hohe Wechselspannung mit steilen Flanken überlagert, die zu ausgeprägten Gleichtaktstörungen in einem Subtrahierer führen würde.

Beim Einschalten des Leistungsschalters treten Störungen auf, die einerseits von der unvermeidlichen Induktivität des Strommesswiderstandes herrühren, andererseits aber auch durch kapazitive Gateströme verursacht werden, die in den Leistungsstromkreis eingekoppelt werden. Abbildung 16.49 zeigt ein typisches Beispiel. Die Störsignale können so groß sein wie der Maximalstrom, der zum regulären Abschalten des Leistungsschalters führt. Um sie zu verkleinern, kann man ein Tiefpassfilter einsetzen. Wie man in der Abbildung erkennt, werden dadurch die Spitzen zwar gedämpft, aber die Störung insgesamt verlängert. Eine bessere Möglichkeit, die ebenfalls in Abb. 16.49 dargestellt ist, besteht darin, das Strommesssignal für eine kurze Zeit nach dem Einschalten auszutasten, um die Störung zu maskieren. Dafür reicht häufig schon eine Zeit von 100 ns aus.

## 16.5.1.5 Pulsfrequenzmodulation

Neben den Durchlassverlusten stellen die Umschaltverluste die entscheidende Begrenzung für den Wirkungsgrad dar. Beim Einschalten eines Fets wird das Gate aufgeladen; dabei wird die Energie $W = \frac{1}{2} C_G U^2$ in der Gatekapazität gespeichert. Dieselbe Energie geht im Gatetreiber verloren. Beim Einschalten wird daher die Energie $W = C_G U^2$ aus der Betriebsspannungsquelle entnommen. Beim Ausschalten wird die in der Gatekapazität gespeicherte Energie ebenfalls im Gatetreiber in Wärme umgesetzt. Wenn der Leistungsmosfet periodisch mit der Frequenz $f$ getaktet wird, ergibt sich daraus die Verlustleistung:

$$
P = W f = C_G U^2 f
$$

(16.24)

Sie ist demnach proportional zur Frequenz, aber unabhängig von der Ausgangsleistung. Deshalb verschlechtert sich der Wirkungsgrad bei kleinen Ausgangsleistungen. Dieses Problem lässt sich lösen, indem man den Leistungsschalter nicht mit konstanter Frequenz taktet, sondern mit Einschaltimpulsen von konstanter Dauer. Dann ergibt sich eine Schaltfrequenz, die proportional zur Ausgangsleistung ist. Diese Methode wird als Puls-

**Abb. 16.50.** Vergleich von Pulsbreiten- und Pulsfrequenzmodulation bei zunehmendem  
Ausgangsstrom
<!-- page-import:0994:end -->

<!-- page-import:0995:start -->
958  16. Stromversorgung

**Abb. 16.51.** Tiefsetzsteller mit Puls-Frequenz-Modulation, PFM. Der Komparator muss nicht unbedingt eine Hysterese besitzen, da die zeitliche Verzögerung im Komparator und im LC-Glied wie eine Hysterese wirkt.

Frequenz-Modulation, PFM bezeichnet. Ein Vergleich dieser beiden Regelungsmethoden ist in Abb. 16.50 dargestellt. Man erkennt, dass die Schaltfrequenz bei der PFM bei geringen Ausgangsleistungen deutlich niedriger ist als bei der PWM. Das ist der Grund für die deutlich niedrigeren Umschaltverluste.

Eine einfache Realisierung einer PFM-Regelung ist in Abb. 16.51 dargestellt. Ein Komparator vergleicht die gewichtete Ausgangsspannung $kU_a$ mit der Referenzspannung $U_{ref}$ und schaltet das nachfolgende Flip-Flop jeweils für einen Taktzyklus ein, wenn die Ausgangsspannung kleiner als der Sollwert ist. Dadurch wird der Leistungsschalter eingeschaltet, die Ausgangsspannung steigt an. Wenn sie den Sollwert überschritten hat, wird das Flip-Flop beim nächsten Takt nicht erneut eingeschaltet. Aus diesem Grund wird der Leistungsschalter nicht bei jedem Takt eingeschaltet, sondern nur bei Bedarf. In Abb. 16.52 ist der Zeitverlauf schematisch dargestellt. Man sieht, dass die Ausgangsspannung zwischen dem Ein- und Ausschaltpegel des Komparators mit Hysterese hin und her pendelt, aber wegen der in der Drossel gespeicherten Energie auch nach dem Ausschalten noch weiter ansteigt. Natürlich sinkt der Drosselstrom in den langen Schaltpausen auf Null ab; dadurch sperrt die Diode und die Spannung an der Drossel wird Null. Das erkennt man auch in dem Zeitdiagramm am Verlauf der Spannung $U_1$.

**Abb. 16.52.**  
Zeitverlauf bei PFM-Regelung

**Abb. 16.53.**  
Beispiel für die Stromabhängigkeit der Wirkungsgrade bei PFM und PWM
<!-- page-import:0995:end -->

<!-- page-import:0996:start -->
16.5 Schaltregler ohne Potentialtrennung 959

**Abb. 16.54.**  
Aufwärts-Wandler (boost converter)

kontinuierlicher Betrieb

lückender Betrieb

**Abb. 16.55.** Spannungs- und Stromverlauf im Aufwärts-Wandler.  
Rechts: Verhältnisse für $I_a < I_{a,\min}$

In Abb. 16.53 ist der Wirkungsgrad einer PFM- und PWM-Regelung gegenübergestellt. Man erkennt die deutlichen Vorteile der PFM bei kleinen Ausgangsströmen. Bei großen Strömen verschwinden die Unterschiede, da dann die Schaltfrequenz der PFM auf die Werte der PWM ansteigt. Ein Nachteil der PFM besteht jedoch darin, dass die Schaltfrequenz mit abnehmender Ausgangsleistung sinkt. Deshalb ändert sich das in Abb. 16.4 dargestellte EMV Störspektrum mit dem Ausgangsstrom. Aus diesem Grund setzt man die PMF-Regelung nur dann ein, wenn der Ausgangsstrom stark schwankt und selbst bei kleinen Strömen ein hoher Wirkungsgrad gefordert wird.

## 16.5.2 Aufwärts-Wandler

In Abb. 16.54 ist der Aufwärts-Wandler von Abb. 16.34 auf S. 948 dargestellt, in Abb. 16.55 der Spannungs- bzw. Stromverlauf in der Schaltung. Aus dem Anstieg bzw. Abfall des Drosselstroms $I_L$ während der beiden Schaltzustände des Schalters S lassen sich auch hier die für die Dimensionierung der Schaltung erforderlichen Beziehungen ableiten. Man erhält:

*Aufwärts-Wandler*

$$
U_a = \frac{T}{t_{aus}}\,U_e = \frac{1}{1-p}\,U_e \qquad \text{für } I_a > I_{a,\min}
$$

(16.25)

$$
L = \frac{U_eT}{2I_{a,\min}}\,p
$$

(16.26)

$$
C = \frac{I_aT}{\Delta U_a}\,p
$$

(16.27)

Darin ist $p = t_{ein}/T$ das Tastverhältnis und $T = t_{ein} + t_{aus} = 1/f$ die Schwingungsdauer. Die niedrigste Ausgangsspannung ist $U_a = U_e$. Sie ergibt sich – bei verlustfreier Schaltung –, wenn der Schalter S dauernd geöffnet ist.
<!-- page-import:0996:end -->

<!-- page-import:0997:start -->
960  16. Stromversorgung

**Abb. 16.56.**  
Invertierender Wandler

kontinuierlicher Betrieb

lückender Betrieb

**Abb. 16.57.** Spannungs- und Stromverlauf im invertierenden Wandler.  
Rechts: Verhältnisse für $|I_a| < |I_{a,\min}|$

Die angegebene Ausgangsspannung ergibt sich auch hier nur unter der Voraussetzung, dass der Drosselstrom nicht Null wird. Bei Unterschreitung des minimalen Ausgangsstroms $I_{a,\min}$ muss die Einschaltdauer wie in Abb. 16.38 verkürzt werden, um ein Ansteigen der Ausgangsspannung zu verhindern. Dieser Fall ist in Abb. 16.55 ebenfalls dargestellt. Die Realisierung des Leistungsschalters und die Erzeugung des Schaltsignals erfolgt hier genauso wie beim Abwärtswandler.

### 16.5.3 Invertierender Wandler

Der invertierende Wandler und die zugehörigen Zeitdiagramme sind in Abb. 16.56 und 16.57 dargestellt. Man sieht, dass sich der Kondensator während der Sperrphase über die Diode auf eine negative Spannung auflädt. Die Ausgangsspannung erhält man auch hier aus der Gleichheit der Spulenstromänderung während der Einschalt- bzw. Ausschaltphase:

*Invertierender Wandler*

$$
U_a = - \frac{t_{\mathrm{ein}}}{t_{\mathrm{aus}}} U_e = - \frac{p}{1-p} U_e \qquad \text{für } |I_a| > |I_{a,\min}|
$$

(16.28)

$$
L = \frac{U_e T}{2 I_{a,\min}}\, p
$$

(16.29)

$$
C = \frac{I_a T}{\Delta U_a}\, p
$$

(16.30)

Wenn der Ausgangsstrom den Wert $I_{a,\min}$ unterschreitet, sinkt der Spulenstrom zeitweise bis auf Null ab. Um die Ausgangsspannung in diesem Fall konstant zu halten, muss auch hier die Einschaltdauer gemäß Abb. 16.38 verkürzt werden. Diese Verhältnisse sind in Abb. 16.57 eingezeichnet.
<!-- page-import:0997:end -->

<!-- page-import:0998:start -->
16.5 Schaltregler ohne Potentialtrennung 961

**Abb. 16.58.**  
Erzeugung einer geregelten Spannung von 3,3 V beim Entladen eines Lithium-Ionen Akkus

## 16.5.4 Aufwärts- Abwärtswandler

Es gibt viele Fälle, in denen die ungeregelte Spannung sowohl größer als auch kleiner als die benötigte Betriebsspannung sein kann. Ein derartiges Beispiel ist in Abb. 16.58 dargestellt. Solange der Akku geladen ist, ist ein Abwärtswandler erforderlich. Wenn man die Entladung aber bei einer Spannung von 3,3 V beendet, nutzt man die Kapazität des Akkus aber nur unvollständig. Um die restliche Ladung zu nutzen, ist ein Aufwärtswandler erforderlich.

Es wäre umständlich, die Akkuspannung zunächst mit einem Aufwärtswandler auf z.B. 5 V heraufzusetzen und dann mit einem Abwärtswandler auf 3,3 V herabzusetzen. Es ist einfacher, einen kombinierten Aufwärts- Abwärtswandler gemäß Abb. 16.59 einzusetzen, der eine gemeinsame Speicherdrossel und einen gemeinsamen Speicherkondensator besitzt. Man kann drei Betriebszustände unterscheiden:

- Für $S_1 = ein$ und $S_2 = aus$ wird $U_a = U_e$.
- Wenn für $S_2 = aus$ nur $S_1, \overline{S_1}$ getaktet wird, arbeitet die Schaltung als Abwärtswandler:  
  $U_a < U_e$.
- Wenn für $S_1 = ein$ nur $S_2, \overline{S_2}$ getaktet wird, arbeitet die Schaltung als Aufwärtswandler:  
  $U_a > U_e$

Bei den handelsüblichen Produkten gibt es noch eine weitere Betriebsart, bei der für $U_a \approx U_e$ beide Schalterpaare getaktet werden. Man kann die Schaltung aber auch als invertierenden Spannungswandler betreiben, bei dem man die Speicherdrossel mit vertauschten Anschlüssen mit dem Ausgang verbindet, um keine Invertierung der Spannung zu erhalten. Man kann dann zwei Betriebszustände unterscheiden:

- Für $S_1 = S_2 = ein$ wird Energie in der Speicherdrossel gespeichert.
- Für $S_1 = S_2 = aus$ wird die gespeicherte Energie mit vertauschten Anschlüssen an den Ausgang übertragen; das ist die eingezeichnete Schalterstellung.

Die Ausgangsspannung ist betragsmäßig genauso groß wie beim invertierenden Wandler:

**Abb. 16.59.**  
Buck-Boost Konverter zur kombinierten Abwärts- und Aufwärtswandlung
<!-- page-import:0998:end -->

<!-- page-import:0999:start -->
962  16. Stromversorgung

**Abb. 16.60.**  
Sepic Konverter

$$
U_a=\frac{t_{ein}}{t_{aus}}U_e=\frac{p}{1-p}U_e \qquad \text{für } I_a>I_{a,\min}
$$

(16.31)

Wenn man höhere Durchlassverluste in Kauf nimmt, kann man die beiden Schalter $\overline{S}_1$ und $\overline{S}_2$ auch durch Dioden ersetzen.

## 16.5.5 Sepic Konverter

Eine andere Möglichkeit, Spannungen zu erzeugen, die sowohl größer als auch kleiner als die Eingangsspannung sein können, zeigt der in Abb. 16.60 dargestellte Sepic Konverter. Der Eingangsteil der Schaltung, der aus der Speicherdrossel $L_1$ und dem Schalter $S$ besteht, entspricht dem Aufwärtswandler in Abb. 16.54. Hier wird eine Wechselspannung erzeugt, die über den Koppelkondensator $C_1$ auf den Gleichrichter D, $C_2$ übertragen wird; die 2. Speicherdrossel $L_2$ schließt den Gleichstromkreis. Der Spannungs- und Stromverlauf in der Schaltung ist in Abb. 16.61 dargestellt.

Zur Berechnung der Ausgangsspannung geht man davon aus, dass, wenn der Schalter $S_1$ geschlossen ist, die Stromzunahme in beiden Speicherdrosseln genau so groß sein muss wie die Stromabnahme, wenn $S_1$ offen ist. Daraus ergeben sich die Beziehungen:

$$
\Delta I_{L1}=\frac{U_e}{L_1}t_{ein}=-\frac{U_e-U_{C1}-U_a}{L_1}t_{aus}
$$

$$
\Delta I_{L2}=-\frac{U_{C1}}{L_2}t_{ein}=-\frac{U_a}{L_2}t_{aus}
$$

Wenn man aus beiden Gleichungen $U_{C1}$ eliminiert, erhält man die Ausgangsspannung

$$
U_a=\frac{t_{ein}}{t_{aus}}U_e=\frac{p}{1-p}U_e \qquad \text{für } I_a>I_{a,\min}
$$

(16.32)

**Abb. 16.61.**  
Strom- und Spannungsverlauf im Sepic Konverter für ein Tastverhältnis von $p = 0{,}67$ und eine resultierende Ausgangsspannung $U_a = 2U_e$
<!-- page-import:0999:end -->

<!-- page-import:1000:start -->
16.5 Schaltregler ohne Potentialtrennung 963

**Abb. 16.62.**  
Gleichspannungswandlung durch Gleichrich-
ten einer Wechselspannung

**Abb. 16.63.**  
Zeitverlauf. Beispiel für $\hat U_R \;=\; U_b$ bei
idealen Dioden

Darin ist $p = t_{ein}/T$ das Tastverhältnis und $T = t_{ein} + t_{aus}$ die Schwingungsdauer. Für $p = 0{,}5$ wird die Ausgangsspannung bei einer verlustfreien Schaltung so groß wie die Eingangsspannung. Die Spannung am Koppelkondensator $C_1$ ist unabhängig vom Tastverhältnis $U_{C1} = U_e$.

Der Sepic Konverter ist in der Lage, Ausgangsspannungen zu erzeugen, die sowohl kleiner als auch größer sind als die Eingangsspannung. In dieser Beziehung bietet er dieselbe Funktion wie der Buck-Boost Konverter in Abb. 16.59. Ein schwerwiegender Nachteil des Sepic Konverters besteht darin, dass er 2 Speicherdrosseln und 2 Kondensatoren benötigt. Das ist viel schlimmer als die 4 Leistungsschalter, die der Buck-Boost Konverter benötigt. Die Leistungstransistoren lassen sich auf den Chip integrieren, die Speicherdrosseln und die Kondensatoren aber nicht. Ein weiterer Nachteil des Sepic Konverters ergibt sich aus der Tatsache, dass die Schaltung aus zwei gekoppelten Schwingkreisen besteht, zwischen denen die Energie nach dem Einschalten oder bei einem Lastsprung mit schwacher Dämpfung hin und her pendeln kann.

Wenn man bei dem Sepic Konverter in Abb. 16.60 die Diode mit $L_2$ vertauscht, ergibt sich der Cuk Konverter, der eine negative Ausgangsspannung mit demselben Betrag liefert. Die Schaltung besitzt dann dieselbe Ausgangsspannung wie der invertierende Wandler in Abb. 16.56, benötigt aber im Vergleich dazu eine 2. Speicherdrossel und einen 2. Kondensator.

## 16.5.6 Spannungswandler mit Ladungspumpe

Ein Nachteil der bisher behandelten Schaltregler besteht darin, dass sie eine Speicherdrossel benötigen. Es gibt bei geringem Strombedarf aber auch Methoden zur verlustfreien Gleichspannungswandlung, die ohne Speicherdrossel auskommen. Die naheliegendste Methode ist, eine Wechselspannung zu erzeugen, diese mit einem Koppelkondensator auf ein neues Potential zu übertragen und dort gleichzurichten. Dieses Prinzip ist in Abb. 16.62 dargestellt, Abb. 16.63 zeigt den zeitlichen Verlauf. Als Eingangsspannung verwendet man einen Rechteckgenerator, den man vorzugsweise durch Herunterteilen des System-Takts und einen Leistungstreiber realisiert.

Allerdings verliert man bei der Gleichrichtung mit Dioden 2 Durchlassspannungen so dass die reale Ausgangsspannung um etwa 1,4 V niedriger ist. Dies ist bei niedrigen Spannungen besonders störend. Deshalb setzt man auch hier bevorzugt Synchrongleichrichtung ein. Wie bei den Schaltreglern mit Speicherdrossel gibt es auch hier 3 Schaltungskonfigurationen zu Spannungserhöhung, -Verringerung und -Invertierung, die in Abb. 16.64
<!-- page-import:1000:end -->
