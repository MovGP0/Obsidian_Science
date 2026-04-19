# Analog Multipliers

<!-- page-import:0783:start -->
746  10. Analogrechenschaltungen

**Abb. 10.8.**  
Integrator mit Eingangsruhestromkompensation.  
Der Kondensator $C_1$ schließt Rauschspannungen am P-Eingang kurz.

Beim realen Operationsverstärker können Eingangsruhestrom $I_B$ und Offsetspannung $U_0$ sehr störend sein, weil sich ihre Wirkung zeitlich summiert. Wenn man die Eingangsspannung $U_e$ Null macht, fließt durch den Kondensator der Fehlerstrom:

$$\frac{U_0}{R} + I_B$$

Das hat eine Ausgangsspannungsänderung

$$\frac{dU_a}{dt} = \frac{1}{C}\left(\frac{U_0}{R} + I_B\right)$$

zur Folge. Ein Fehlerstrom von 1 $\mu$A lässt also die Ausgangsspannung um 1 V je Sekunde ansteigen, wenn $C$ = 1 $\mu$F ist. Man erkennt an Gl. (10.10), dass bei gegebener Zeitkonstante der Beitrag des Eingangsruhestromes um so kleiner wird je größer man $C$ wählt, während der Beitrag der Offsetspannung konstant bleibt. Da man $C$ nicht beliebig groß machen kann, sollte man zumindest sicherstellen, dass der Einfluss von $I_B$ den von $U_0$ nicht überwiegt. Das ist dann der Fall, wenn

$$I_B < \frac{U_0}{R} = \frac{U_0 C}{\tau}$$

ist. Will man mit einem Kondensator von 1 $\mu$F eine Zeitkonstante von $\tau$ = 1 s erreichen, sollte ein Operationsverstärker mit einer Offsetspannung von 1 mV also einen Eingangsruhestrom besitzen, der kleiner ist als:

$$I_B = \frac{1\ \mu\mathrm{F}\cdot 1\ \mathrm{mV}}{1\ \mathrm{s}} = 1\ \mathrm{nA}$$

Operationsverstärker mit bipolaren Transistoren am Eingang besitzen meist größere Eingangsströme. Ihre störende Wirkung lässt sich wie in Abb. 10.8 dadurch reduzieren, dass man den P-Eingang nicht direkt an Masse legt, sondern über einen Widerstand, der ebenfalls den Wert $R$ besitzt. Dann fällt an beiden Widerständen die Spannung $I_B R$ ab, und der Fehlerstrom durch den Kondensator $C$ wird Null. Die verbleibende Fehlerquelle ist in diesem Fall lediglich die Differenz der Eingangsruheströme, also der Offsetstrom, der jedoch meist klein demgegenüber ist.

Bei Fet-Operationsverstärkern ist der Eingangsruhestrom meist vernachlässigbar klein. Sie sind daher bei großen Integrationszeitkonstanten vorzuziehen, obwohl ihre Offsetspannungen häufig deutlich größer sind als bei Operationsverstärkern mit Bipolartransistoren am Eingang.

Eine weitere Fehlerquelle können Leckströme durch den Kondensator darstellen. Da Elektrolytkondensatoren Leckströme im $\mu$A-Gebiet besitzen, kommen sie als Integrationskondensatoren nicht in Frage. Man ist also auf Folienkondensatoren angewiesen. Bei ihnen sind jedoch Kapazitäten über 10 $\mu$F äußerst unhandlich.

(10.10)
<!-- page-import:0783:end -->

<!-- page-import:0798:start -->
10.8 Analog-Multiplizierer 761

**Abb. 10.31.** Ausgeführte Schaltung zur Multiplikation und Division über Logarithmen

## 10.8 Analog-Multiplizierer

Wir haben bisher Schaltungen zum Addieren, Subtrahieren, Differenzieren und Integrieren behandelt. Multiplizieren können diese Schaltungen aber nur mit einem konstanten Faktor, der Spannungsverstärkung $U_a = A\ U_e$. Im Folgenden wollen wir die wichtigsten Prinzipien zur Multiplikation und Division von zwei variablen Spannungen behandeln.

### 10.8.1 Multiplizierer mit logarithmierenden Funktionsgeneratoren

Die Multiplikation und Division lässt sich auf eine Addition und Subtraktion von Logarithmen zurückführen. Abbildung 10.30 zeigt das Prinzip. Es gilt:

$$
\frac{U_x U_y}{U_z} = \exp[\ln U_x + \ln U_y - \ln U_z]
$$

Die praktische Realisierung des Prinzips ist in Abb. 10.31 dargestellt. Sie besteht aus dem Logarithmierer von Abb. 10.26 und dem e-Funktionsgenerator von Abb. 10.28. Die Addier-Subtrahier-Schaltung in Abb. 10.30 lässt sich einsparen, wenn man die Eingänge des Differenzverstärkers bei dem e-Funktionsgenerator zur Subtraktion verwendet und berücksichtigt, dass der Referenzspannungsanschluss als zusätzlicher Signaleingang verwendet werden kann. Die Logarithmierer in Abb. 10.31 bilden die Spannungen:

$$
V_1 = -U_T \ln \frac{U_y}{I_{CS} R_1}
\qquad \text{bzw.} \qquad
V_2 = -U_T \ln \frac{U_z}{I_{CS} R_1}
$$

Der e-Funktionsgenerator liefert dann die Ausgangsspannung:

$$
U_a = U_x e^{\frac{V_2 - V_1}{U_T}} = \frac{U_x U_y}{U_z}
$$

Man erkennt, dass sich in diesem Fall nicht nur die Sperrströme $I_{CS}$ kürzen, sondern auch die Spannung $U_T$ herausfällt. Daher ist keine Temperaturkompensation erforderlich. Voraussetzung ist allerdings, dass die vier Transistoren gleiche Daten und gleiche Temperatur besitzen. Sie sollten daher monolithisch integriert sein.
<!-- page-import:0798:end -->

<!-- page-import:0799:start -->
762 10. Analogrechenschaltungen

**Abb. 10.32.**  
Prinzip eines Steilheitsmultiplizierers

$$
U_a \approx \frac{R_z}{R_y}\cdot \frac{U_x U_y}{2U_T}
$$

für $U_y < 0$

Ein prinzipieller Nachteil des Verfahrens ist, dass alle Eingangsspannungen positiv sein müssen und nicht einmal Null werden dürfen. Diese Einschränkungen werden aber nicht durch die Schaltung verursacht, sondern durch die zugrunde liegenden Logarithmenregeln. Ein solcher Multiplizierer wird als Einquadranten-Multiplizierer bezeichnet.

## 10.8.2 Steilheitsmultiplizierer

Die Spannungsverstärkung eines Verstärkers mit Bipolartransistoren ist proportional zur Steilheit und damit auch zum Kollektorstrom. Wenn man den Kollektorstrom proportional zu einer zweiten Eingangsspannung macht, ist die Ausgangsspannung demnach proportional zum Produkt von zwei Eingangsspannungen. Auf dieser Erkenntnis beruhen die Steilheitsmultiplizierer, die hier beschrieben werden sollen. Für einen Differenzverstärker gilt gemäß (4.61 auf S. 344)

$$
I_{C1} - I_{C2} = I_E \tanh \frac{U_x}{2U_T} \approx I_E \cdot \frac{U_x}{2U_T} \approx \frac{U_y}{R_y}\cdot \frac{U_x}{2U_T}
$$

(10.32)

Die Kollektorstromdifferenz ist demnach proportional zum Produkt der Eingangsspannung $U_x$ und dem Ruhestrom $I_E$. Diese Eigenschaft wird bei dem Differenzverstärker in Abb. 10.32 zur Multiplikation ausgenutzt, denn dort ist der Strom $I_E$ näherungsweise proportional zu $U_y$, wenn man eine negative Spannung anlegt. Der Operationsverstärker bildet die Differenz der Kollektorströme:

$$
U_a = R_z (I_{C2} - I_{C1}) \approx \frac{R_z}{R_y}\frac{U_x U_y}{2U_T}
$$

(10.33)

Für das richtige Funktionieren der Schaltung muss vorausgesetzt werden, dass $U_y$ immer negativ ist, während die Spannung $U_x$ beide Vorzeichen annehmen darf. Ein solcher Multiplizierer wird als Zweiquadranten-Multiplizierer bezeichnet.

Der Steilheitsmultiplizierer in Abb. 10.32 lässt sich in verschiedener Hinsicht verbessern. Bei der Herleitung von (10.32) mussten wir die Näherungsannahme treffen, dass $|U_y| \gg U_{BE} \approx 0{,}6\,\mathrm{V}$ ist. Diese Bedingung kann man fallen lassen, wenn man den Widerstand $R_y$ durch eine gesteuerte Stromquelle ersetzt, für die $I_E \sim U_y$ gilt.

Ein weiterer Nachteil der Schaltung in Abb. 10.32 ist darin zu sehen, dass man $|U_x|$ auf kleine Werte beschränken muss, um den Linearitätsfehler bei der Reihenentwicklung klein zu halten. Dies lässt sich umgehen, indem man $U_x$ nicht direkt anlegt, sondern zunächst logarithmiert. Eine Erweiterung zum Vierquadranten-Multiplizierer, d.h. beliebige
<!-- page-import:0799:end -->

<!-- page-import:0800:start -->
10.8 Analog-Multiplizierer 763

$$
U_a=\frac{2R_z}{R_xR_y}\cdot\frac{U_xU_y}{I_7}\qquad \text{für } I_7>0
$$

**Abb. 10.33.** Vierquadranten-Steileitsmultiplizierer. Das Kernstück ist die umrandete Gilbert-Zelle.

Vorzeichen für beide Eingangsspannungen, ist dadurch möglich, dass man einen zweiten Differenzverstärker parallel schaltet, dessen Emitterstrom man mit $U_y$ gegensinnig steuert.

Diese Gesichtspunkte wurden bei dem Vierquadranten-Steileitsmultiplizierer in Abb. 10.33 berücksichtigt. Der Differenzverstärker T$_1$, T$_2$ ist derjenige aus Abb. 10.32. Er wurde durch den Differenzverstärker T$_1'$, T$_2'$ symmetrisch ergänzt. Die Transistoren T$_5$, T$_6$ bilden einen Differenzverstärker mit Stromgegenkopplung. Dabei stellen die Kollektoren die Ausgänge von zwei Stromquellen dar, die wie verlangt von $U_y$ gegensinnig gesteuert werden:

$$
I_5=I_8+\frac{U_y}{R_y},\qquad I_6=I_8-\frac{U_y}{R_y}
\qquad (10.34)
$$

Für die Differenz der Kollektorströme in den beiden Differenzverstärkern T$_1$, T$_2$ und T$_1'$, T$_2'$ erhalten wir damit in Analogie zur vorhergehenden Schaltung:

$$
I_1-I_2=I_5\tanh\frac{U_1}{2U_T}
=\left(I_8+\frac{U_y}{R_y}\right)\tanh\frac{U_1}{2U_T}
\qquad (10.35)
$$

$$
I_1'-I_2'=I_6\tanh\frac{U_1}{2U_T}
=\left(I_8-\frac{U_y}{R_y}\right)\tanh\frac{U_1}{2U_T}
\qquad (10.36)
$$

Der Operationsverstärker bildet die Stromdifferenz:

$$
\Delta I=(I_2+I_1')-(I_2'+I_1)=(I_1'-I_2')-(I_1-I_2)
\qquad (10.37)
$$

Durch Subtraktion der Gl. (10.35) von Gl. (10.36) folgt daraus:
<!-- page-import:0800:end -->

<!-- page-import:0802:start -->
10.8 Analog-Multiplizierer 765

Abb. 10.34. Linearisierung eines Differenzverstärkers

Steilheitsmultiplizierer lassen sich auch zur Division einsetzen. Dazu trennt man die Verbindung zwischen $U_a$ und $U_z$ und verbindet stattdessen $U_y$ mit $U_a$. Durch die entstehende Gegenkopplung stellt sich die Ausgangsspannung so ein, dass $\Delta I = U_z/R_z$ wird. Mit Gl. (10.40) folgt daraus:

$$
\Delta I \;=\; \frac{2U_xU_y}{R_xR_yI_7} \;=\; \frac{U_z}{R_z}
$$

Damit wird die neue Ausgangsspannung:

$$
U_a \;=\; U_y \;=\; \frac{R_xR_yI_7}{2R_z}\cdot\frac{U_z}{U_x} \;=\; E\,\frac{U_z}{U_x}
\qquad\qquad (10.42)
$$

Stabilität ist allerdings nur dann gewährleistet, wenn $U_x$ negativ ist, da sonst statt der Gegenkopplung eine Mitkopplung auftritt. Das Vorzeichen von $U_z$ ist dagegen beliebig. Es liegt also ein Zweiquadranten-Dividierer vor.

Steilheitsmultiplizierer nach dem in Abb. 10.33 gezeigten Prinzip sind als integrierte Schaltungen erhältlich; einige Beispiele sind in Abb. 10.35 zusammengestellt. Die erreichbare Genauigkeit liegt bei 0,1% bezogen auf die Recheneinheit $E$; das sind also 10 mV bei einer Recheneinheit von 10 V. Die einfachen Typen benötigen vier Einsteller, um diese Genauigkeit zu erreichen. Die besseren Typen werden bereits vom Hersteller intern abgeglichen. Bei ihnen ist ein äußerer Abgleich in der Regel nicht erforderlich.

Die 3 dB-Bandbreite ist bei Multiplizierern kein gutes Maß für die nutzbare Bandbreite, denn bei dieser Frequenz beträgt der Rechenfehler bereits 30%. Eine solche Abweichung

| IC-Typ | Hersteller | Genauigkeit |  | Bandbreite |  |
|---|---|---|---|---|---|
|  |  | ohne Abgleich | mit Abgleich | 1% | 3 dB |
| AD534 | Analog Dev. | 0,25% | 0,1 % | 70kHz | 1 MHz |
| AD633 | Analog Dev. | 1 % | 0,1 % | 100kHz | 1 MHz |
| AD734 | Analog Dev. | 0,1 % |  | 1000kHz | 10 MHz |
| AD834 | Analog Dev. | 2 % |  |  | 500 MHz |
| AD835 | Analog Dev. |  | 0,1 % | 15 MHz | 250 MHz |
| MLT04* | Analog Dev. | 2 % | 0,2 % |  | 8 MHz |
| MPY 634 | Texas Inst. | 1 % | 0,5 % |  | 10 MHz |

Abb. 10.35. Beispiele für integrierte Steilheitsmultiplizierer. * 4 Multiplizierer
<!-- page-import:0802:end -->
