# Pulse Generation

<!-- page-import:0921:start -->
884 14. Signalgeneratoren

**Abb. 14.3.** Abhängigkeit der Verzögerungszeit (propagation delay time $t_{pd}$) von der Übersteuerung am Eingang

**Abb. 14.4.** Beispiel für die Arbeitsweise eines Komparators bei sinusförmiger Eingangsspannung

zur unmittelbaren Kopplung mit anderen Digitalschaltungen. Das modifizierte Schaltsymbol und die zugehörige Übertragungskennlinie sind in Abb. 14.2 dargestellt.

Wie groß die Verzögerungszeit eines Komparators ist, hängt stark vom inneren Aufbau ab. Hier gibt es Unterschiede, die über 3 Zehnerpotenzen gehen: Von Nanosekunden bis Mikrosekunden. Allerdings hat eine kurze Schaltzeit immer eine hohe Verlustleistung zur Folge. Bei jedem Komparator hängt die Verzögerungszeit auch von der Stärke der Übersteuerung ab. Man erkennt in Abb. 14.3, dass die Schaltzeiten bei Differenzspannungen von wenigen Millivolt deutlich größer sind als bei 100 mV.

Das Verhalten eines idealen Komparators bei einem sinusförmigen Eingangssignal ist in Abb. 14.4 dargestellt. Man sieht, dass das Ausgangssignal auf $y = 1$ geht, wenn der Triggerpegel überschritten wird und auf Null geht, wenn er wieder unterschritten wird. Wenn der Triggerpegel über oder unter dem Eingangssignal liegt, bleibt der Ausgang konstant auf $y = 0$ bzw. 1.

$y = 1$ für $U_1 < U_e < U_2$

**Abb. 14.5.** Fensterkomparator mit Signalverlauf
<!-- page-import:0921:end -->

<!-- page-import:0924:start -->
14.2 Impulserzeugung 887

$t_e = 3\,t_{pd} =$ Summe der Inverterlaufzeiten, $t_1 =$ Laufzeit des UND-Gatters

**Abb. 14.11.** Univibrator für kurze Schaltzeiten

$t_e = 3\,t_{pd} =$ Summe der Inverterlaufzeiten, $t_1 =$ Laufzeit des EXOR-Gatters

**Abb. 14.12.** Zwei-Flanken getriggerter Univibrator

Schaltungen kann man auch den invertierenden Eingang als Signaleingang verwenden. Dadurch invertiert sich lediglich die Hystereseschleife.

## 14.2 Impulserzeugung

Schaltungen, die aufgrund eines Signals einen Impuls mit definierter Länge erzeugen, werden als Zeitschalter oder Univibrator bezeichnet.

### 14.2.1 Erzeugung kurzer Impulse

Kurze Impulse mit einer Dauer von nur wenigen Gatterlaufzeiten lassen sich auf einfache Weise mit der Schaltung in Abb. 14.11 realisieren. Solange die Eingangsvariable $x = 0$ ist, ergibt sich am Ausgang des UND-Gatters eine 0. Wenn $x = 1$ wird, liefert die UND-Verknüpfung so lange eine Eins, bis das Signal durch die Inverterkette gelaufen ist. Wenn das Eingangssignal wieder auf Null geht, wird die UND-Bedingung nicht erfüllt.

Der zeitliche Ablauf ist ebenfalls in Abb. 14.11 dargestellt. Die Dauer des Ausgangsimpulses ist gleich der Verzögerung in der Inverterkette. Sie lässt sich durch eine entsprechende Anzahl von Gattern festlegen. Dabei ist zu beachten, dass die Anzahl der Inverter ungerade sein muss. Wie man im Zeitverlauf erkennt, muss hier das Triggersignal mindestens für die Dauer des Ausgangsimpulses anstehen.

Ersetzt man das UND-Gatter in Abb. 14.11 durch ein EXOR-Gatter, ergibt sich ein Univibrator, der bei jeder Flanke des Eingangssignals einen Ausgangsimpuls liefert. Abb. 14.12 zeigt die entsprechende Schaltung und das zugehörige Zeitdiagramm. Im stationären Fall sind die Eingänge des EXOR-Gatters komplementär und das Ausgangssignal ist Null. Ändert die Eingangsvariable $x$ ihren Zustand, treten wegen der Verzögerung durch die Inverter vorübergehend gleiche Eingangssignale am EXOR-Gatter auf. Während dieser Zeit wird das Ausgangssignal gleich Eins.

### 14.2.2 Erzeugung längerer Impulse

Zur Realisierung größerer Schaltzeiten wird die Verzögerungskette unhandlich lang. In diesem Fall kann man die Impulsdauer mit einem Zähler bestimmen, der eine bestimmte Anzahl von Taktimpulsen abzählt wie bei den Vorwahlzählern in Kapitel 8.4 auf S. 696. Alternativ kann man Schaltungen verwenden, bei denen die Schaltzeiten durch RC-Glieder bestimmt werden.
<!-- page-import:0924:end -->

<!-- page-import:0925:start -->
888 14. Signalgeneratoren

*Einschaltdauer:* $t_1 = R_1 C \ln 3 \approx 1{,}1\,R_1 C$

**Abb. 14.13.** Univibrator mit Timer. Die beiden Komparatoren bilden zusammen mit dem Flip-Flop einen Schmitt-Trigger. Die eingetragenen Pinnummern gelten für Timer ICM7555

Bei der Schaltung in Abb. 14.13 wird ein Kondensator aufgeladen bis der obere Triggerpegel eines Schmitt-Triggers erreicht ist; dann wird das Flip-Flop zurückgesetzt, d.h. der Ausgang geht wieder auf $Q = 0$. Der Transistor T wird dadurch leitend und entlädt den Kondensator. Dieser Zustand bleibt erhalten, bis das Flip-Flop durch eine logische 0 am Trigger-Eingang 2 gesetzt wird. Die Einschaltdauer ist gleich der Zeit, die das Kondensatorpotential benötigt, um von Null auf die obere Umschaltschwelle $\frac{2}{3} U_b$ anzusteigen. Sie beträgt:

$$
t_1 = R_1 C \ln 3 \approx 1{,}1\,R_1 C
$$

Trifft während dieser Zeit ein neuer Triggerimpuls ein, bleibt das Flip-Flop gesetzt, er wird also ignoriert. Abbildung 14.14 zeigt den Spannungsverlauf. Es lassen sich Schaltzeiten von einigen Mikrosekunden bis zu einigen Minuten realisieren.

Das Entladen des Kondensators $C$ nach Ablauf der Schaltzeit geht nicht beliebig schnell vor sich, da der Kollektorstrom des Transistors begrenzt ist. Die Entladezeit wird als

**Abb. 14.14.** Spannungsverlauf im Univibrator
<!-- page-import:0925:end -->

<!-- page-import:0926:start -->
14.2 Impulserzeugung 889

*Einschaltdauer:* $t_1 = R_1 C \ln 3 \approx 1{,}1\ R_1 C$

**Abb. 14.15.** Nachtriggerbarer Univibrator

*Erholzeit* bezeichnet. Trifft während dieser Zeit ein Trigger-Impuls ein, verkürzt sich die Schaltzeit, weil der Kondensator noch nicht vollständig entladen war. Dasselbe gilt, wenn der Triggerimpuls länger ist als die Schaltzeit.

Es gibt Fälle, in denen die Schaltzeit nicht wie bei der vorhergehenden Schaltung vom ersten Impuls einer Impulsfolge gezählt werden soll, sondern vom letzten. Univibratoren mit dieser Eigenschaft werden als nachtriggerbar bezeichnet. Eine dafür geeignete Schaltung ist in Abb. 14.15 dargestellt. Hier wird der Kondensator mit dem externen Transistors $T_1$ durch einen positiven Trigger-Impuls ausreichender Dauer entladen. Der Komparator $K_1$ setzt das Flip-Flop, und der Ausgang geht auf $Q = 1$. Trifft vor Ablauf der Schaltzeit ein neuer Trigger-Impuls ein, wird der Kondensator aufs Neue entladen; der Ausgang bleibt auf 1. Die Flip-Flop wird erst wieder über $K_2$ zurückgesetzt, wenn die Spannung

**Abb. 14.16.** Spannungsverlauf beim nachtriggerbaren Univibrator bei mehreren aufeinander folgenden Trigger-Impulsen
<!-- page-import:0926:end -->
