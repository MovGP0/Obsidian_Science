# Square-Wave Shaping

<!-- page-import:0920:start -->
# Kapitel 14:
Signalgeneratoren

In diesem Kapitel werden Schaltungen zur Signalformung und Signalerzeugung beschrieben. Dabei handelt es sich überwiegend um Schaltungen für den Niederfrequenzbereich. Oszillatoren für hohe Frequenzen in der Nachrichtentechnik folgen im Kapitel 26.

## 14.1 Rechteckformung

### 14.1.1 Komparator

Betreibt man einen Operationsverstärker wie in Abb. 14.1 ohne Gegenkopplung, erhält man einen Komparator. Seine Ausgangsspannung beträgt:

$$
U_a =
\begin{cases}
U_{a,max} & \text{für } U_1 > U_2 \\
U_{a,min} & \text{für } U_1 < U_2
\end{cases}
$$

Wegen der hohen Verstärkung spricht die Schaltung auf sehr kleine Spannungsdifferenzen $U_D = U_1 - U_2$ an. Die Ausgangsspannung hängt nur vom Vorzeichen der Differenz ab. Sie eignet sich daher zum Vergleich zweier Spannungen mit hoher Präzision. Dies sieht man auch in der Übertragungskennlinie in Abb. 14.1.

Beim Nulldurchgang der Eingangsspannungsdifferenz springt die Ausgangsspannung nicht momentan von der einen Aussteuerungsgrenze zur anderen, da die Slew Rate begrenzt ist. Bei frequenzkorrigierten Standard-Operationsverstärkern beträgt sie zum Teil nur $1\,\mathrm{V}/\mu\mathrm{s}$. Der Anstieg von $-12\,\mathrm{V}$ auf $+12\,\mathrm{V}$ dauert demnach $24\,\mu\mathrm{s}$. Durch die Erholzeit des Verstärkers nach Übersteuerung tritt noch eine zusätzliche Verzögerung auf. Da der Verstärker nicht gegengekoppelt ist, benötigt er aber keine Frequenzgangkorrektur. Lässt man sie weg, verbessern sich Slew Rate und Erholzeit erheblich.

Wesentlich kürzere Verzögerungszeiten kann man mit speziellen Komparatorverstärkern erreichen. Sie sind für den Betrieb ohne Gegenkopplung konzipiert und bewirken besonders kleine Verzögerungszeiten. Der Ausgang eines Komparators liefert Logikpegel

**Abb. 14.1.** Operationsverstärker als Komparator

**Abb. 14.2.** Komparator mit logischem Ausgang

© Springer-Verlag GmbH Deutschland, ein Teil von Springer Nature 2019  
U. Tietze et al., *Halbleiter-Schaltungstechnik*
<!-- page-import:0920:end -->

<!-- page-import:0922:start -->
14.1 Rechteckformung 885

#### 14.1.1.1 Fensterkomparator

Mit einem Fensterkomparator kann man feststellen, ob die Eingangsspannung im Bereich zwischen zwei Vergleichsspannungen oder außerhalb liegt. Dazu kann man wie in Abb. 14.5 mit zwei Komparatoren feststellen, ob die Eingangsspannung über der unteren und unter der oberen Vergleichsspannung liegt. Diese Bedingung ist nur dann erfüllt, wenn beide Komparatoren eine Eins liefern. Das UND-Gatter bildet diese Verknüpfung. Der Signalverlauf veranschaulicht die Funktionsweise der Schaltung.

#### 14.1.2 Schmitt-Trigger

Ein Schmitt-Trigger ist ein erweiterter Komparator, bei dem Ein- und Ausschaltpegel nicht zusammenfallen, sondern um eine Schalthysterese $\Delta U_e$ verschieden sind. Die Schaltung und der Signalverlauf sind in Abb. 14.6 dargestellt. Wenn der obere Triggerpegel $U_2$ überschritten wird, wird das Flip-Flop gesetzt $(y = 1)$; wenn der untere Triggerpegel $U_1$ unterschritten wird, wird das Flip-Flop zurückgesetzt. Typisch für einen Schmitt-Trigger ist die Hystereseschleife im Ausgangssignal. Die Funktionsweise kann man auch in dem Beispiel für eine sinusförmige Eingangsspannung in Abb. 14.7 bestätigen. Man erhält nur dann ein Ausgangssignal, wenn die Eingangsspannung beide Triggerpegel durchläuft. Wenn man das Verhalten des Schmitt-Triggers mit dem des Komparators in Abb. 14.4 vergleicht, sieht man eine große Ähnlichkeit in der Funktionsweise. Tatsächlich geht der Schmitt-Trigger in einen einfachen Komparator über, wenn man die Schalthysterese $\Delta U = U_2 - U_1$ zu Null macht. Trotzdem setzt man häufig einen Schmitt-Trigger statt eines Komparators ein, weil ein kleines überlagertes Störsignal sonst zu einem unerwünschten mehrfachen Schalten eines Komparators führt. Man erkennt in Abb. 14.8, dass der Komparator mehrfach schaltet bei jedem Über- oder Unterschreiten des Triggerpegels während der Schmitt-Trigger nur

Einschaltpegel: $U_{e,\mathrm{ein}} = U_2$  
Ausschaltpegel: $U_{e,\mathrm{aus}} = U_1$ $\left\}$ für $U_2 > U_1$

**Abb. 14.6.** Schmitt-Trigger mit Signalverlauf

**Abb. 14.7.** Arbeitsweise eines Schmitt-Triggers bei sinusförmiger Eingangsspannung
<!-- page-import:0922:end -->

<!-- page-import:0923:start -->
886  14. Signalgeneratoren

Komparator

Schmitt-Trigger

**Abb. 14.8.** Vergleich von Komparator und Schmitt-Trigger bei verrauschten Signalen

ein einziges Mal schaltet bei der ersten Überschreitung des Einschaltpegels $U_2$. Die Hysterese eines Schmitt-Triggers ist auch nützlich, um die Mitkopplung zu verhindern, die leicht dadurch entsteht, dass das Ausgangssignal auf das Eingangssignal einwirkt. Dadurch kann es bei einem Komparator in der Nähe der Schaltschwelle zu Eigenschwingungen kommen.

Man kann einen Schmitt-Trigger auch einfach dadurch realisieren, dass man einen Komparator mitkoppelt. Diese Möglichkeit ist in Abb. 14.9 für einen Operationsverstärker dargestellt und in Abb. 14.10 für einen Komparator. Die Umschaltpegel besitzen hier nicht die Präzision, die man mit dem Schmitt-Trigger in Abb. 14.6 erhält, weil hier die schlecht definierte Ausgangsspannung eingeht. Wenn man aber wie im Beispiel in Abb. 14.10 die Hysterese gering wählt, wird der Schaltpegel $U_1$ nicht nennenswert verfälscht. Bei beiden

*Einschaltpegel:* $U_{e,ein} = -\dfrac{R_1}{R_2} U_{a,min}$

*Ausschaltpegel:* $U_{e,aus} = -\dfrac{R_1}{R_2} U_{a,max}$

*Schalthysterese:* $\Delta U_e = \dfrac{R_1}{R_2}(U_{a,max} - U_{a,min})$

**Abb. 14.9.** Mitgekoppelter Operationsverstärker als Schmitt-Trigger mit der Vergleichsspannung Null

**Abb. 14.10.** Mitgekoppelter Komparator als Schmitt-Trigger bei schwacher Mitkopplung
<!-- page-import:0923:end -->
