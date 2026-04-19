# Behavior of a Bipolar Transistor

<!-- page-import:0072:start -->
# Kapitel 2:
# Bipolartransistor

Der Bipolartransistor ist ein Halbleiterbauelement mit drei Anschlüssen, die mit *Basis (base, B), Emitter (emitter, E)* und *Kollektor (collector, C)* bezeichnet werden. Man unterscheidet zwischen Einzeltransistoren, die für die Montage auf Leiterplatten gedacht und in einem eigenen Gehäuse untergebracht sind, und integrierten Transistoren, die zusammen mit weiteren Halbleiterbauelementen auf einem gemeinsamen Halbleiterträger (*Substrat*) hergestellt werden. Integrierte Transistoren haben einen vierten Anschluss, der aus dem gemeinsamen Träger resultiert und mit *Substrat (substrate, S)* bezeichnet wird; er ist für die elektrische Funktion von untergeordneter Bedeutung.

Bipolartransistoren bestehen aus zwei antiseriell geschalteten pn-Dioden, die eine gemeinsame p- oder n-Zone besitzen. Abbildung 2.1 zeigt die Schaltsymbol und die *Dioden-Ersatzschaltbilder* eines npn-Transistors mit gemeinsamer p-Zone und eines pnp-Transistors mit gemeinsamer n-Zone. Die Dioden-Ersatzschaltbilder geben zwar die Funktion des Bipolartransistors nicht richtig wieder, ermöglichen aber einen Überblick über die Betriebsarten und zeigen, dass bei einem unbekannten Transistor der Typ (npn oder pnp) und der Basisanschluss mit einem Durchgangsprüfer ermittelt werden kann; Kollektor und Emitter sind wegen des symmetrischen Aufbaus nicht einfach zu unterscheiden.

Der Bipolartransistor wird zum Verstärken und Schalten von Signalen eingesetzt und dabei meist im *Normalbetrieb (forward region)* betrieben, bei dem die Emitter-Diode (BE-Diode) in Flussrichtung und die Kollektor-Diode (BC-Diode) in Sperrrichtung betrieben wird. Bei einigen Schaltanwendungen wird auch die BC-Diode zeitweise in Flussrichtung betrieben; man spricht dann von *Sättigung* oder *Sättigungsbetrieb (saturation region)*. In den *Inversbetrieb (reverse region)* gelangt man durch Vertauschen von Emitter und Kollektor; diese Betriebsart bietet nur in Ausnahmefällen Vorteile. Im *Sperrbetrieb (cut-off region)* sind beide Dioden gesperrt. Abbildung 2.2 zeigt die Polarität der Spannungen und Ströme bei Normalbetrieb für einen npn- und einen pnp-Transistor.

## 2.1 Verhalten eines Bipolartransistors

Das Verhalten eines Bipolartransistors lässt sich am einfachsten anhand der Kennlinien aufzeigen. Sie beschreiben den Zusammenhang zwischen den Strömen und den Spannungen am Transistor für den Fall, dass alle Größen *statisch*, d.h. nicht oder nur sehr langsam

a npn-Transistor

b pnp-Transistor

**Abb. 2.1.** Schaltsymbol und Dioden-Ersatzschaltbilder

© Springer-Verlag GmbH Deutschland, ein Teil von Springer Nature 2019  
U. Tietze et al., *Halbleiter-Schaltungstechnik*
<!-- page-import:0072:end -->

<!-- page-import:0073:start -->
36 2. Bipolartransistor

a npn-Transistor

\(I_B > 0\)

\(I_C > 0\)

\(U_{BE} > 0\)

\(I_E < 0\)

\(U_{CE} > 0\)

b pnp-Transistor

\(I_B < 0\)

\(I_C < 0\)

\(U_{BE} < 0\)

\(I_E > 0\)

\(U_{CE} < 0\)

**Abb. 2.2.** Spannungen und Ströme im Normalbetrieb

zeitveränderlich sind. Für eine rechnerische Behandlung des Bipolartransistors werden zusätzlich Gleichungen benötigt, die das Verhalten ausreichend genau beschreiben. Wenn man sich auf den für die Praxis besonders wichtigen Normalbetrieb beschränkt und sekundäre Effekte vernachlässigt, ergeben sich besonders einfache Gleichungen. Bei einer Überprüfung der Funktionstüchtigkeit einer Schaltung durch Simulation auf einem Rechner muss dagegen auch der Einfluss sekundärer Effekte berücksichtigt werden. Dazu gibt es aufwendige Modelle, die auch das *dynamische Verhalten* bei Ansteuerung mit sinus- oder pulsförmigen Signalen richtig wiedergeben. Diese Modelle werden im Abschnitt 2.3 beschrieben und sind für ein grundsätzliches Verständnis nicht nötig. Im folgenden wird das Verhalten von npn-Transistoren beschrieben; bei pnp-Transistoren haben alle Spannungen und Ströme umgekehrte Vorzeichen.

## 2.1.1 Kennlinien

### 2.1.1.1 Ausgangskennlinienfeld

Legt man in der in Abb. 2.2a gezeigten Anordnung verschiedene Basis-Emitter-Spannungen \(U_{BE}\) an und misst den Kollektorstrom \(I_C\) als Funktion der Kollektor-Emitter-Spannung \(U_{CE}\), erhält man das in Abb. 2.3 gezeigte Ausgangskennlinienfeld. Mit Ausnahme eines kleinen Bereiches nahe der \(I_C\)-Achse sind die Kennlinien nur wenig

\(\frac{I_C}{\mathrm{mA}}\)

\(U_{CE,sat}\)

10, 8, 6, 4, 2

0 1 2 3 4 5 6 7 8 9 10

0,72

0,70

0,68

0,66

\(\frac{U_{BE}}{\mathrm{V}}\)

\(\frac{U_{CE}}{\mathrm{V}}\)

**Abb. 2.3.** Ausgangskennlinienfeld eines npn-Transistors
<!-- page-import:0073:end -->

<!-- page-import:0074:start -->
2.1 Verhalten eines Bipolartransistors 37

a Übertragungskennlinienfeld

b Eingangskennlinienfeld

Abb. 2.4. Kennlinienfelder im Normalbetrieb

von $U_{CE}$ abhängig und der Transistor arbeitet im Normalbetrieb, d.h. die BE-Diode leitet und die BC-Diode sperrt. Nahe der $I_C$-Achse ist $U_{CE}$ so klein, dass auch die BC-Diode leitet und der Transistor in die Sättigung gerät. An der Grenze, zu der die Sättigungsspannung $U_{CE,sat}$ gehört, knicken die Kennlinien scharf ab und verlaufen näherungsweise durch den Ursprung des Kennlinienfeldes.

## 2.1.1.2 Übertragungskennlinienfeld

Im Normalbetrieb ist der Kollektorstrom $I_C$ im wesentlichen nur von $U_{BE}$ abhängig. Trägt man $I_C$ für verschiedene, zum Normalbetrieb gehörende Werte von $U_{CE}$ als Funktion von $U_{BE}$ auf, erhält man das in Abb. 2.4a gezeigte Übertragungskennlinienfeld. Aufgrund der geringen Abhängigkeit von $U_{CE}$ liegen die Kennlinien sehr dicht beieinander.

## 2.1.1.3 Eingangskennlinienfeld

Zur vollständigen Beschreibung wird noch das in Abb. 2.4b gezeigte Eingangskennlinienfeld benötigt, bei dem der Basisstrom $I_B$ für verschiedene, zum Normalbetrieb gehörende Werte von $U_{CE}$ als Funktion von $U_{BE}$ aufgetragen ist. Auch hier ist die Abhängigkeit von $U_{CE}$ sehr gering.

## 2.1.1.4 Stromverstärkung

Vergleicht man die Übertragungskennlinien in Abb. 2.4a mit den Eingangskennlinien in Abb. 2.4b, so fällt sofort der ähnliche Verlauf auf. Daraus ergibt sich, dass im Normalbetrieb der Kollektorstrom $I_C$ dem Basisstrom $I_B$ näherungsweise proportional ist. Die Proportionalitätskonstante $B$ wird Stromverstärkung genannt:

$$
B = \frac{I_C}{I_B}
$$

(2.1)

## 2.1.2 Beschreibung durch Gleichungen

Die für die rechnerische Behandlung erforderlichen Gleichungen basieren auf der Tatsache, dass das Verhalten des Transistors im wesentlichen auf das Verhalten der BE-Diode
<!-- page-import:0074:end -->

<!-- page-import:0075:start -->
38  2. Bipolartransistor

**Abb. 2.5.** Early-Effekt und Early-Spannung $U_A$ im Ausgangskennlinienfeld

zurückgeführt werden kann. Der für eine Diode charakteristische exponentielle Zusammenhang zwischen Strom und Spannung zeigt sich im Übertragungs- und im Eingangskennlinienfeld des Transistors als exponentielle Abhängigkeit der Ströme $I_B$ und $I_C$ von der Spannung $U_{BE}$. Ausgehend von einem allgemeinen Ansatz $I_C = I_C(U_{BE}, U_{CE})$ und $I_B = I_B(U_{BE}, U_{CE})$ erhält man für den Normalbetrieb [2.1]:

$$
I_C = I_S\, e^{\frac{U_{BE}}{U_T}} \left(1 + \frac{U_{CE}}{U_A}\right)
\qquad\qquad (2.2)
$$

$$
I_B = \frac{I_C}{B}
\qquad \text{mit } B = B(U_{BE}, U_{CE})
\qquad\qquad (2.3)
$$

Dabei ist $I_S \approx 10^{-16}\dots 10^{-12}\,\mathrm{A}$ der *Sättigungssperrstrom* des Transistors und $U_T$ die *Temperaturspannung*; bei Raumtemperatur gilt $U_T \approx 26\,\mathrm{mV}$.

## 2.1.2.1 Early-Effekt

Die Abhängigkeit von $U_{CE}$ wird durch den *Early-Effekt* verursacht und durch den rechten Term in (2.2) empirisch beschrieben. Grundlage für diese Beschreibung ist die Beobachtung, dass sich die extrapolierten Kennlinien des Ausgangskennlinienfelds näherungsweise in einem Punkt schneiden [2.2]; Abb. 2.5 verdeutlicht diesen Zusammenhang. Die Konstante $U_A$ heißt *Early-Spannung* und beträgt bei npn-Transistoren $U_{A,npn} \approx 30\dots150\,\mathrm{V}$, bei pnp-Transistoren $U_{A,pnp} \approx 30\dots75\,\mathrm{V}$. Im Abschnitt 2.3.1.3 wird der Early-Effekt genauer betrachtet, für den hier betrachteten Normalbetrieb ist die empirische Beschreibung ausreichend.

## 2.1.2.2 Basisstrom und Stromverstärkung

Der Basisstrom $I_B$ wird auf $I_C$ bezogen; dabei tritt die Stromverstärkung $B$ als Proportionalitätskonstante auf. Diese Darstellung wird gewählt, da für viele einfache Berechnungen die Abhängigkeit der Stromverstärkung von $U_{BE}$ und $U_{CE}$ vernachlässigt werden kann; $B$ ist dann eine unabhängige Konstante. In den meisten Fällen wird jedoch die Abhängigkeit von $U_{CE}$ berücksichtigt, da sie ebenfalls durch den Early-Effekt verursacht wird [2.2], d.h. es gilt:

$$
B(U_{BE}, U_{CE}) = B_0(U_{BE}) \left(1 + \frac{U_{CE}}{U_A}\right)
\qquad\qquad (2.4)
$$

$B_0(U_{BE})$ ist die extrapolierte Stromverstärkung für $U_{CE} = 0\,\mathrm{V}$. Die Extrapolation ist notwendig, da bei $U_{CE} = 0\,\mathrm{V}$ kein Normalbetrieb mehr vorliegt.
<!-- page-import:0075:end -->

<!-- page-import:0076:start -->
2.1 Verhalten eines Bipolartransistors 39

**Abb. 2.6.** Halblogarithmische Auftragung der Ströme $I_B$ und $I_C$ im Normalbetrieb (Gummel-Plot)

## 2.1.2.3 Großsignalgleichungen

Durch Einsetzen von (2.4) in (2.3) erhält man die Großsignalgleichungen des Bipolartransistors:

$$
I_C = I_S\, e^{\frac{U_{BE}}{U_T}} \left(1 + \frac{U_{CE}}{U_A}\right)
\qquad\qquad (2.5)
$$

$$
I_B = \frac{I_S}{B_0}\, e^{\frac{U_{BE}}{U_T}}
\qquad\qquad (2.6)
$$

## 2.1.3 Verlauf der Stromverstärkung

### 2.1.3.1 Gummel-Plot

Die Stromverstärkung $B(U_{BE}, U_{CE})$ wird im folgenden noch näher untersucht. Da die Ströme $I_B$ und $I_C$ exponentiell von $U_{BE}$ abhängen, bietet sich eine halblogarithmische Darstellung über $U_{BE}$ mit $U_{CE}$ als Parameter an. Diese in Abb. 2.6 gezeigte Auftragung wird Gummel-Plot genannt und hat die Eigenschaft, dass die exponentiellen Verläufe in (2.5) und (2.6) in Geraden übergehen, wenn man $B_0$ als konstant annimmt:

$$
\ln\left(\frac{I_C}{I_S}\right) = \frac{U_{BE}}{U_T} + \ln\left(1 + \frac{U_{CE}}{U_A}\right)
$$

$$
\ln\left(\frac{I_B}{I_S}\right) = \frac{U_{BE}}{U_T} - \ln(B_0)
$$

In Abb. 2.6 sind diese Geraden für zwei Werte von $U_{CE}$ gestrichelt wiedergegeben. Die Stromverstärkung $B$ tritt dabei als Verschiebung in y-Richtung auf:
<!-- page-import:0076:end -->

<!-- page-import:0077:start -->
40  2. Bipolartransistor

\[
\ln(B) \;=\; \ln\!\left(\frac{I_C}{I_B}\right) \;=\; \ln(B_0) + \ln\!\left(1 + \frac{U_{CE}}{U_A}\right)
\]

Die realen Verläufe sind ebenfalls in Abb. 2.6 eingetragen. Sie stimmen in einem großen Bereich mit den Geraden überein, d.h. \(B_0\) kann hier als konstant angenommen werden. In zwei Bereichen ergeben sich jedoch Abweichungen [2.2]:

- Bei sehr kleinen Kollektorströmen ist der Basisstrom größer als der durch (2.6) für konstantes \(B_0\) gegebene Wert. Diese Abweichung wird durch zusätzliche Anteile im Basisstrom verursacht und führt zu einer Abnahme von \(B\) bzw. \(B_0\). Die Großsignalgleichungen (2.5) und (2.6) sind auch in diesem Bereich gültig.
- Bei sehr großen Kollektorströmen ist der Kollektorstrom kleiner als der durch (2.5) gegebene Wert. Diese Abweichung wird durch den Hochstromeffekt verursacht und führt ebenfalls zu einer Abnahme von \(B\) bzw. \(B_0\). In diesem Bereich sind die Großsignalgleichungen (2.5) und (2.6) nicht mehr gültig, da eine Abnahme von \(B_0\) nach diesen Gleichungen zu einer Zunahme von \(I_B\) und nicht, wie erforderlich, zu einer Abnahme von \(I_C\) führt. Dieser Bereich wird jedoch nur bei Leistungstransistoren genutzt.

## 2.1.3.2 Darstellung des Verlaufs

In der Praxis wird die Stromverstärkung \(B\) als Funktion von \(I_C\) und \(U_{CE}\) angegeben, d.h. man ersetzt \(B(U_{BE},U_{CE})\) durch \(B(I_C,U_{CE})\), indem man den für festes \(U_{CE}\) gegebenen Zusammenhang zwischen \(I_C\) und \(U_{BE}\) nutzt, um die Variablen auszutauschen. In gleicher Weise wird \(B_0(U_{BE})\) durch \(B_0(I_C)\) ersetzt. Diese veränderte Darstellung erleichtert die Dimensionierung von Schaltungen, da bei der Arbeitspunkteinstellung zunächst \(I_C\) und \(U_{CE}\) festgelegt werden und anschließend mit Hilfe von \(B(I_C,U_{CE})\) der zugehörige Basisstrom ermittelt wird; bei der Arbeitspunkteinstellung für die Grundschaltungen im Abschnitt 2.4 wird auf diese Weise vorgegangen.

In Abb. 2.7 ist der Verlauf der Stromverstärkung \(B\) und der differentiellen Stromverstärkung

\[
\beta \;=\; \left.\frac{d\,I_C}{d\,I_B}\right|_{U_{CE}=\mathrm{const}.}
\qquad\qquad (2.7)
\]

über \(I_C\) für zwei verschiedene Werte von \(U_{CE}\) aufgetragen. Man bezeichnet \(B\) als Großsignalstromverstärkung und \(\beta\) als Kleinsignalstromverstärkung.

Die Verläufe sind typisch für Kleinleistungstransistoren, bei denen das Maximum der Stromverstärkung für \(I_C \approx 1 \dots 10\,\mathrm{mA}\) erreicht wird. Bei Leistungstransistoren verschiebt sich dieses Maximum in den Ampere-Bereich. In der Praxis wird der Transistor im Bereich des Maximums oder links davon, d.h. bei kleineren Kollektorströmen, betrieben. Den Bereich rechts des Maximums vermeidet man nach Möglichkeit, da durch den Hochstromeffekt nicht nur \(B\), sondern zusätzlich die Schaltgeschwindigkeit und die Grenzfrequenzen des Transistors reduziert werden; in den Abschnitten 2.3.2.2 und 2.3.3.3 wird dies näher beschrieben.

Die Kleinsignalstromverstärkung \(\beta\) wird zur Beschreibung des Kleinsignalverhaltens im nächsten Abschnitt benötigt. Ausgehend von (2.7) erhält man über

\[
\frac{1}{\beta}
\;=\;
\left.\frac{d\,I_B}{d\,I_C}\right|_{U_{CE}=\mathrm{const}}
\;=\;
\frac{\partial\!\left(\dfrac{I_C}{B(I_C,U_{CE})}\right)}{\partial I_C}
\]
<!-- page-import:0077:end -->

<!-- page-import:0078:start -->
## 2.1 Verhalten eines Bipolartransistors 41

**Abb. 2.7.** Verlauf der Großsignalstromverstärkung $B$ und der Kleinsignalstromverstärkung $\beta$ im Normalbetrieb

einen Zusammenhang zwischen $\beta$ und $B$ [2.3]:

$$
\beta \;=\; \frac{B}{1-\frac{I_C}{B}\frac{\partial B}{\partial I_C}}
$$

Im Bereich links des Maximums von $B$ ist $(\partial B/\partial I_C)$ positiv und damit $\beta > B$. Im Maximum ist $(\partial B/\partial I_C)=0$, so dass dort $\beta = B$ gilt. Rechts des Maximums ist $(\partial B/\partial I_C)$ negativ und damit $\beta < B$.

### 2.1.3.3 Bestimmung der Werte

Wird der Transistor mit einem Kollektorstrom im Bereich des Maximums der Stromverstärkung $B$ betrieben, so kann man die Näherung

$$
\beta(I_C, U_{CE}) \;\approx\; B(I_C, U_{CE}) \;\approx\; B_{max}(U_{CE})
\qquad\qquad (2.8)
$$

verwenden; dabei bezeichnet $B_{max}(U_{CE})$, wie in Abb. 2.7 gezeigt, den von $U_{CE}$ abhängigen Maximalwert von $B$.

Ist der Verlauf von $B$ im Datenblatt eines Transistors durch ein Diagramm entsprechend Abb. 2.7 gegeben, kann man $B(I_C,U_{CE})$ aus dem Diagramm entnehmen und, wenn Kurven für $\beta$ fehlen, die Näherung (2.8) verwenden. Ist für $B$ nur ein Wert im Datenblatt angegeben, kann man diesen als Ersatzwert für $B$ und $\beta$ verwenden. Typische Werte sind $B \approx 100 \dots 500$ für Kleinleistungstransistoren und $B \approx 10 \dots 100$ für Leistungstransistoren. Bei Darlington-Transistoren sind intern zwei Transistoren zusammengeschaltet, so dass je nach Leistungsklasse $B \approx 500 \dots 10000$ erreicht wird. Die Darlington-Schaltung wird im Abschnitt 2.4.4 näher beschrieben.

### 2.1.4 Arbeitspunkt und Kleinsignalverhalten

Ein Anwendungsgebiet des Bipolartransistors ist die lineare Verstärkung von Signalen im *Kleinsignalbetrieb*. Dabei wird der Transistor in einem Arbeitspunkt $A$ betrieben und mit kleinen Signalen um den Arbeitspunkt ausgesteuert. Die nichtlinearen Kennlinien können in diesem Fall durch ihre Tangenten im Arbeitspunkt ersetzt werden und man erhält näherungsweise lineares Verhalten.
<!-- page-import:0078:end -->

<!-- page-import:0079:start -->
42  2. Bipolartransistor

*a Schaltung*  *b Eingangskennlinienfeld*

**Abb. 2.8.** Beispiel zur Bestimmung des Arbeitspunkts

## 2.1.4.1 Bestimmung des Arbeitspunkts

Der Arbeitspunkt A wird durch die Spannungen $U_{CE,A}$ und $U_{BE,A}$ und die Ströme $I_{C,A}$ und $I_{B,A}$ charakterisiert und durch die äußere Beschaltung des Transistors festgelegt. Diese Festlegung wird *Arbeitspunkteinstellung* genannt. Beispielhaft wird der Arbeitspunkt der einfachen Verstärkerschaltung in Abb. 2.8a ermittelt. Er wird mit den als bekannt vorausgesetzten Widerständen $R_1$ und $R_2$ eingestellt.

### 2.1.4.1.1 Numerische Lösung

Aus den Großsignalgleichungen des Transistors und den Knotengleichungen für Basis- und Kollektoranschluss erhält man mit $I_e = I_a = 0$ das Gleichungssystem

$$
I_C = I_C(U_{BE}, U_{CE})
$$

$$
I_B = I_B(U_{BE}, U_{CE})
\qquad \text{Kennlinien des Transistors}
$$

$$
I_B = I_1 = \frac{U_{B1} - U_{BE}}{R_1}
$$

$$
I_C = I_2 = \frac{U_{B2} - U_{CE}}{R_2}
\qquad \text{Lastgeraden}
$$

mit vier Gleichungen und vier Unbekannten. Die Arbeitspunktgrößen $U_{BE,A}$, $U_{CE,A}$, $I_{B,A}$ und $I_{C,A}$ findet man durch Lösen der Gleichungen.

### 2.1.4.1.2 Grafische Lösung

Neben der numerischen Lösung ist auch eine grafische Lösung möglich. Dazu zeichnet man die Lastgeraden in das entsprechende Kennlinienfeld ein und ermittelt die Schnittpunkte. Da das Eingangskennlinienfeld wegen der vernachlässigbar geringen Abhängigkeit von $U_{CE}$ praktisch nur aus einer Kennlinie besteht, erhält man nach Abb. 2.8b nur einen Schnittpunkt und kann $U_{BE,A}$ und $I_{B,A}$ sofort ablesen. Im Ausgangskennlinienfeld kann man nun $U_{CE,A}$ und $I_{C,A}$ aus dem Schnittpunkt der Geraden mit der zu $U_{BE,A}$ gehörigen Ausgangskennlinie bestimmen, siehe Abb. 2.9.
<!-- page-import:0079:end -->

<!-- page-import:0080:start -->
2.1 Verhalten eines Bipolartransistors 43

![]( [unclear] )

**Abb. 2.9.** Beispiel zur Bestimmung des Arbeitspunkts im Ausgangskennlinienfeld

## 2.1.4.1.3 Arbeitspunkteinstellung

Sowohl die numerische als auch die grafische Bestimmung des Arbeitspunkts sind analytische Verfahren, d.h. man kann damit bei bekannter Beschaltung den Arbeitspunkt ermitteln. Zum Entwurf von Schaltungen werden dagegen Syntheseverfahren benötigt, mit denen man die zu einem gewünschten Arbeitspunkt gehörige Beschaltung finden kann. Diese Verfahren werden bei der Beschreibung der Grundschaltungen im Abschnitt 2.4 behandelt.

## 2.1.4.2 Kleinsignalgleichungen und Kleinsignalparameter

### 2.1.4.2.1 Kleinsignalgrößen

Bei Aussteuerung um den Arbeitspunkt werden die Abweichungen der Spannungen und Ströme von den Arbeitspunktwerten als Kleinsignalspannungen und -ströme bezeichnet. Man definiert:

$$
u_{BE} = U_{BE} - U_{BE,A}, \qquad i_B = I_B - I_{B,A}
$$

$$
u_{CE} = U_{CE} - U_{CE,A}, \qquad i_C = I_C - I_{C.A}
$$

### 2.1.4.2.2 Linearisierung

Die Kennlinien werden durch ihre Tangenten im Arbeitspunkt ersetzt, d.h. sie werden linearisiert. Dazu führt man eine Taylorreihenentwicklung im Arbeitspunkt durch und bricht nach dem linearen Glied ab:

$$
i_B = I_B(U_{BE,A} + u_{BE}, U_{CE,A} + u_{CE}) - I_{B,A}
$$

$$
= \left.\frac{\partial I_B}{\partial U_{BE}}\right|_A u_{BE} + \left.\frac{\partial I_B}{\partial U_{CE}}\right|_A u_{CE} + \ldots
$$

$$
i_C = I_C(U_{BE,A} + u_{BE}, U_{CE,A} + u_{CE}) - I_{C,A}
$$

$$
= \left.\frac{\partial I_C}{\partial U_{BE}}\right|_A u_{BE} + \left.\frac{\partial I_C}{\partial U_{CE}}\right|_A u_{CE} + \ldots
$$

Abbildung 2.10 verdeutlicht die Linearisierung am Beispiel der Übertragungskennlinie; dazu ist der Bereich um den Arbeitspunkt stark vergrößert dargestellt. Die Stromänderung $i_C$ wird über die Kennlinie aus der Spannungsänderung $u_{BE}$ ermittelt, die Stromänderung $i_{C,lin}$ über die Tangente. Bei kleiner Aussteuerung kann man $i_C = i_{C,lin}$ setzen.
<!-- page-import:0080:end -->

<!-- page-import:0081:start -->
44  2. Bipolartransistor

Abb. 2.10.  
Linearisierung am Beispiel der  
Übertragungskennlinie

## 2.1.4.2.3 Kleinsignalgleichungen

Die partiellen Ableitungen im Arbeitspunkt werden *Kleinsignalparameter* genannt. Nach Einführung spezieller Bezeichner erhält man die *Kleinsignalgleichungen* des Bipolartransistors:

\[
i_B = \frac{1}{r_{BE}}\,u_{BE} + S_r\,u_{CE}
\tag{2.9}
\]

\[
i_C = S\,u_{BE} + \frac{1}{r_{CE}}\,u_{CE}
\tag{2.10}
\]

## 2.1.4.2.4 Kleinsignalparameter

Die *Steilheit* \(S\) beschreibt die Änderung des Kollektorstroms \(I_C\) mit der Basis-Emitter-Spannung \(U_{BE}\) im Arbeitspunkt. Sie kann im Übertragungskennlinienfeld nach Abb. 2.4a aus der Steigung der Tangente im Arbeitspunkt ermittelt werden, gibt also an, wie *steil* die Übertragungskennlinie im Arbeitspunkt ist. Durch Differentiation der Großsignalgleichung (2.5) erhält man:

\[
S=\left.\frac{\partial I_C}{\partial U_{BE}}\right|_A=\frac{I_{C,A}}{U_T}
\tag{2.11}
\]

Der *Kleinsignaleingangswiderstand* \(r_{BE}\) beschreibt die Änderung der Basis-Emitter-Spannung \(U_{BE}\) mit dem Basisstrom \(I_B\) im Arbeitspunkt. Er kann aus dem Kehrwert der Steigung der Tangente im Eingangskennlinienfeld nach Abb. 2.4b ermittelt werden. Die Differentiation der Großsignalgleichung (2.6) lässt sich umgehen, indem man den Zusammenhang

\[
r_{BE}=\left.\frac{\partial U_{BE}}{\partial I_B}\right|_A
=\left.\frac{\partial U_{BE}}{\partial I_C}\right|_A
\left.\frac{\partial I_C}{\partial I_B}\right|_A
\]

nutzt. Damit lässt sich \(r_{BE}\) aus der Steilheit \(S\) nach (2.11) und der Kleinsignalstromverstärkung \(\beta\) nach (2.7) berechnen:

\[
r_{BE}=\left.\frac{\partial U_{BE}}{\partial I_B}\right|_A=\frac{\beta}{S}
\tag{2.12}
\]
<!-- page-import:0081:end -->

<!-- page-import:0082:start -->
## 2.1 Verhalten eines Bipolartransistors 45

\(r_{BE}=\frac{\Delta U_{BE}}{\Delta I_B}\)

Eingangskennlinie

\(S=\frac{\Delta I_C}{\Delta U_{BE}}\)

Übertragungskennlinie

\(r_{CE}=\frac{\Delta U_{CE}}{\Delta I_C}\)

Ausgangskennlinie

**Abb. 2.11.** Ermittlung der Kleinsignalparameter aus den Kennlinienfeldern

Der *Kleinsignalausgangswiderstand* \(r_{CE}\) beschreibt die Änderung der Kollektor-Emitter-Spannung \(U_{CE}\) mit dem Kollektorstrom \(I_C\) im Arbeitspunkt. Er kann aus dem Kehrwert der Steigung der Tangente im Ausgangskennlinienfeld nach Abb. 2.3 ermittelt werden. Durch Differentiation der Großsignalgleichung (2.5) erhält man:

\[
r_{CE}=\left.\frac{\partial U_{CE}}{\partial I_C}\right|_A
=\frac{U_A+U_{CE,A}}{I_{C,A}}
\qquad U_{CE,A}\ll U_A \qquad
\approx \frac{U_A}{I_{C,A}}
\tag{2.13}
\]

In der Praxis arbeitet man mit der in (2.13) angegebenen Näherung.

Die *Rückwärtssteilheit* \(S_r\) beschreibt die Änderung des Basisstroms \(I_B\) mit der Kollektor-Emitter-Spannung \(U_{CE}\) im Arbeitspunkt. Sie ist vernachlässigbar gering. In der Großsignalgleichung (2.6) ist diese Abhängigkeit bereits vernachlässigt, d.h. \(I_B\) hängt nicht von \(U_{CE}\) ab:

\[
S_r=\left.\frac{\partial I_B}{\partial U_{CE}}\right|_A \approx 0
\tag{2.14}
\]

Man kann die Kleinsignalparameter auch aus den Kennlinienfeldern ermitteln; dazu zeichnet man die Tangenten im Arbeitspunkt ein und bestimmt ihre Steigungen, siehe Abb. 2.11. In der Praxis wird dieses Verfahren wegen der begrenzten Ablesegenauigkeit nur selten verwendet; zudem sind die Kennlinienfelder im Datenblatt eines Transistors meist gar nicht enthalten.

### 2.1.4.3 Kleinsignalersatzschaltbild

Aus den Kleinsignalgleichungen (2.9) und (2.10) erhält man mit \(S_r=0\) das in Abb. 2.12 gezeigte *Kleinsignalersatzschaltbild* des Bipolartransistors. Kennt man die Arbeitspunktgrößen \(I_{C,A}\), \(U_{CE,A}\) und \(\beta\) des Transistors, kann man mit (2.11), (2.12) und (2.13) die Parameter bestimmen.

Dieses Ersatzschaltbild eignet sich zur Berechnung des Kleinsignalverhaltens von Transistorschaltungen bei niedrigen Frequenzen \((0\dots10\,\text{kHz})\); es wird deshalb auch
<!-- page-import:0082:end -->

<!-- page-import:0083:start -->
46  2. Bipolartransistor

**Abb. 2.12.**  
Kleinsignalersatzschaltbild  
eines Bipolartransistors

*Gleichstrom-Kleinsignalersatzschaltbild* genannt. Aussagen über das Verhalten bei höheren Frequenzen, den Frequenzgang und die Grenzfrequenz von Transistorschaltungen kann man nur mit Hilfe des im Abschnitt 2.3.3.2 beschriebenen Wechselstrom-Kleinsignalersatzschaltbilds erhalten.

## 2.1.4.4 Vierpol-Matrizen

Man kann die Kleinsignalgleichungen auch in Matrizen-Form angeben:

\[
\begin{bmatrix}
i_B \\
i_C
\end{bmatrix}
=
\begin{bmatrix}
\dfrac{1}{r_{BE}} & S_r \\
S & \dfrac{1}{r_{CE}}
\end{bmatrix}
\begin{bmatrix}
u_{BE} \\
u_{CE}
\end{bmatrix}
\]

Diese Darstellung entspricht der Leitwert-Darstellung eines Vierpols und stellt damit eine Verbindung zur Vierpoltheorie her. Die Leitwert-Darstellung beschreibt den Vierpol durch die *Y-Matrix* \(Y_e\):

\[
\begin{bmatrix}
i_B \\
i_C
\end{bmatrix}
=
Y_e
\begin{bmatrix}
u_{BE} \\
u_{CE}
\end{bmatrix}
=
\begin{bmatrix}
y_{11,e} & y_{12,e} \\
y_{21,e} & y_{22,e}
\end{bmatrix}
\begin{bmatrix}
u_{BE} \\
u_{CE}
\end{bmatrix}
\]

Der Index \(e\) weist darauf hin, dass der Transistor in Emitterschaltung betrieben wird, d.h. der Emitteranschluss wird entsprechend der Durchverbindung im Kleinsignalersatzschaltbild nach Abb. 2.12 für das Eingangs- *und* das Ausgangstor benutzt. Die Emitterschaltung wird im Abschnitt 2.4 näher beschrieben.

Ebenfalls üblich ist die Hybrid-Darstellung mit der *H-Matrix* \(H_e\):

\[
\begin{bmatrix}
u_{BE} \\
i_C
\end{bmatrix}
=
H_e
\begin{bmatrix}
i_B \\
u_{CE}
\end{bmatrix}
=
\begin{bmatrix}
h_{11,e} & h_{12,e} \\
h_{21,e} & h_{22,e}
\end{bmatrix}
\begin{bmatrix}
i_B \\
u_{CE}
\end{bmatrix}
\]

Durch einen Vergleich erhält man folgende Zusammenhänge:

\[
r_{BE} = h_{11,e} = \frac{1}{y_{11,e}}
,\qquad
\beta = h_{21,e} = \frac{y_{21,e}}{y_{11,e}}
\]

\[
S = \frac{h_{21,e}}{h_{11,e}} = y_{21,e}
,\qquad
S_r = -\frac{h_{12,e}}{h_{11,e}} = y_{12,e}
\]

\[
r_{CE} =
\frac{h_{11,e}}{h_{11,e}h_{22,e} - h_{12,e}h_{21,e}}
=
\frac{1}{y_{22,e}}
\]

## 2.1.4.5 Gültigkeitsbereich der Kleinsignalbetrachtung

Im Zusammenhang mit dem Kleinsignalersatzschaltbild stellt sich oft die Frage, wie groß die Aussteuerung um den Arbeitspunkt maximal sein darf, damit noch Kleinsignalbetrieb vorliegt. Diese Frage kann nicht allgemein beantwortet werden. Von einem mathematischen Standpunkt aus gesehen gilt das Ersatzschaltbild nur für *infinitesimale*, d.h. beliebig kleine Aussteuerung. In der Praxis sind die nichtlinearen Verzerrungen maßgebend, die bei endlicher Aussteuerung entstehen und einen anwendungsspezifischen Grenzwert
<!-- page-import:0083:end -->

<!-- page-import:0084:start -->
2.1 Verhalten eines Bipolartransistors 47

nicht überschreiten sollen. Dieser Grenzwert ist oft in Form eines maximal zulässigen *Klirrfaktors* gegeben. Im Abschnitt 4.2.3 wird darauf näher eingegangen. Das Kleinsignalersatzschaltbild ergibt sich aus einer nach dem linearen Glied abgebrochenen Taylorreihenentwicklung. Berücksichtigt man weitere Glieder der Taylorreihe, erhält man für den Kleinsignal-Kollektorstrom bei konstantem $U_{CE}$ [2.1]:

$$
i_C
=
\left.\frac{\partial I_C}{\partial U_{BE}}\right|_A u_{BE}
+
\left.\frac{1}{2}\frac{\partial^2 I_C}{\partial U_{BE}^2}\right|_A u_{BE}^2
+
\left.\frac{1}{6}\frac{\partial^3 I_C}{\partial U_{BE}^3}\right|_A u_{BE}^3
+ \ldots
$$

$$
=
\frac{I_{C,A}}{U_T}u_{BE}
+
\frac{I_{C,A}}{2U_T^2}u_{BE}^2
+
\frac{I_{C,A}}{6U_T^3}u_{BE}^3
+ \ldots
$$

Bei harmonischer Aussteuerung mit $u_{BE}=\hat{u}_{BE}\cos\omega_0 t$ folgt daraus:

$$
\frac{i_C}{I_{C,A}}
=
\left[
\frac{1}{4}\left(\frac{\hat{u}_{BE}}{U_T}\right)^2
+ \ldots
\right]
+
\left[
\frac{\hat{u}_{BE}}{U_T}
+
\frac{1}{8}\left(\frac{\hat{u}_{BE}}{U_T}\right)^3
+ \ldots
\right]\cos\omega_0 t
$$

$$
+
\left[
\frac{1}{4}\left(\frac{\hat{u}_{BE}}{U_T}\right)^2
+ \ldots
\right]\cos 2\omega_0 t
+
\left[
\frac{1}{24}\left(\frac{\hat{u}_{BE}}{U_T}\right)^3
+ \ldots
\right]\cos 3\omega_0 t
$$

$$
+ \ldots
$$

In den eckigen Klammern treten Polynome mit geraden oder mit ungeraden Potenzen auf. Aus dem Verhältnis der ersten Oberwelle mit $2\omega_0$ zur Grundwelle mit $\omega_0$ erhält man bei kleiner Aussteuerung, d.h. bei Vernachlässigung höherer Potenzen, näherungsweise den *Klirrfaktor* $k$ [2.1]:

$$
k \approx \frac{i_{C,2\omega_0}}{i_{C,\omega_0}} \approx \frac{\hat{u}_{BE}}{4U_T}
\qquad\qquad (2.15)
$$

Will man $k$ z.B. kleiner als 1% halten, muss $\hat{u}_{BE}<0{,}04\,U_T \approx 1\,\mathrm{mV}$ gelten. Es ist also in diesem Fall nur eine sehr kleine Aussteuerung zulässig.

## 2.1.5 Grenzdaten und Sperrströme

Bei einem Transistor werden verschiedene Grenzdaten angegeben, die nicht überschritten werden dürfen. Sie gliedern sich in Grenzspannungen, Grenzströme und die maximale Verlustleistung. Betrachtet werden wieder npn-Transistoren; bei pnp-Transistoren haben alle Spannungen und Ströme umgekehrte Vorzeichen.

### 2.1.5.1 Durchbruchsspannungen

#### 2.1.5.1.1 BE-Diode

Bei der *Emitter-Basis-Durchbruchsspannung* $U_{(BR)EBO}$ bricht die Emitter-Diode im Sperrbetrieb durch. Der Zusatz $(BR)$ bedeutet *Durchbruch (breakdown)*; der Index $O$ gibt an, dass der dritte Anschluss, hier der Kollektor, *offen (open)* ist. Für fast alle Transistoren gilt $U_{(BR)EBO}\approx 5 \ldots 7\ \mathrm{V}$; damit ist $U_{(BR)EBO}$ die kleinste Grenzspannung. Da ein Transistor selten mit negativen Basis-Emitter-Spannungen betrieben wird, ist sie von untergeordneter Bedeutung.

#### 2.1.5.1.2 BC-Diode

Bei der *Kollektor-Basis-Durchbruchsspannung* $U_{(BR)CBO}$ bricht die Kollektor-Diode im Sperrbetrieb durch. Da im Normalbetrieb die Kollektor-Diode gesperrt ist, ist durch
<!-- page-import:0084:end -->

<!-- page-import:0085:start -->
48 2. Bipolartransistor

\(I_C\)

Durchbruch 2. Art

\(I_B > 0\) \(I_B = 0\)

Durchbruch 1. Art

\(R\) \(U_{BE} = 0\)

\(U_{(BR)CEO}\) \(U_{(BR)CER}\) \(U_{(BR)CES}\)

\(U_{CE}\)

**Abb. 2.13.** Ausgangskennlinienfeld mit den Durchbruchskennlinien eines npn-Transistors

\(U_{(BR)CBO}\) eine für die Praxis wichtige Obergrenze für die Kollektor-Basis-Spannung gegeben. Bei Niederspannungstransistoren gilt \(U_{(BR)CBO} \approx 20 \dots 80\ \mathrm{V}\), bei Hochspannungstransistoren erreicht \(U_{(BR)CBO}\) Werte bis zu \(1300\ \mathrm{V}\). \(U_{(BR)CBO}\) ist die größte Grenzspannung eines Transistors.

## 2.1.5.1.3 Kollektor-Emitter-Strecke

Besonders wichtig für die praktische Anwendung ist die maximal zulässige Kollektor-Emitter-Spannung \(U_{CE}\). Einen Überblick gibt das Ausgangskennlinienfeld in Abb. 2.13, bei dem im Vergleich zum Ausgangskennlinienfeld nach Abb. 2.3 der Bereich für \(U_{CE}\) erweitert ist. Bei einer bestimmten Kollektor-Emitter-Spannung tritt ein Durchbruch auf, der ein starkes Ansteigen des Kollektorstroms zur Folge hat und in den meisten Fällen zur Zerstörung des Transistors führt. Die in Abb. 2.13 gezeigten Durchbruchskennlinien werden für verschiedene Beschaltungen der Basis aufgenommen. Bei der Aufnahme der Kennlinie „\(I_B > 0\)“ wird mit einer Stromquelle ein positiver Basisstrom eingeprägt. Im Bereich der Kollektor-Emitter-Durchbruchsspannung \(U_{(BR)CEO}\) steigt der Strom stark an und die Kennlinie geht näherungsweise in eine Vertikale über. Die Spannung \(U_{(BR)CEO}\) ist die Kollektor-Emitter-Spannung, bei der trotz offener Basis, d.h. \(I_B = 0\), der Kollektorstrom aufgrund des Durchbruchs einen bestimmten Wert überschreitet. Zur Bestimmung von \(U_{(BR)CEO}\) wird die Kennlinie „\(I_B = 0\)“ verwendet, die bei \(U_{(BR)CEO}\) näherungsweise in eine Vertikale übergeht. Bei der Aufnahme der Kennlinie „\(R\)“ wird ein Widerstand zwischen Basis und Emitter geschaltet; dadurch erhöht sich die Durchbruchsspannung auf \(U_{(BR)CER}\). Der bei Durchbruch auftretende Stromanstieg hat in diesem Fall ein Absinken der Kollektor-Emitter-Spannung von \(U_{(BR)CER}\) auf etwa \(U_{(BR)CEO}\) zur Folge, so dass ein Kennlinien-Ast mit negativer Steigung entsteht. Der Basisstrom \(I_B\) ist dabei negativ. Dasselbe Verhalten zeigt die Kennlinie „\(U_{BE} = 0\)“, die mit kurzgeschlossener Basis-Emitter-Strecke aufgenommen wird. Die dabei auftretende Durchbruchsspannung \(U_{(BR)CES}\) ist die größte der angegebenen Kollektor-Emitter-Durchbruchsspannungen. Der Index \(S\) gibt an, dass die Basis kurzgeschlossen (shorted) ist. Es gilt allgemein:

\[
U_{(BR)CEO} < U_{(BR)CER} < U_{(BR)CES} < U_{(BR)CBO}
\]
<!-- page-import:0085:end -->

<!-- page-import:0086:start -->
2.1 Verhalten eines Bipolartransistors 49

## 2.1.5.2 Durchbruch 2.Art

Neben dem bisher beschriebenen *normalen* Durchbruch oder *Durchbruch 1.Art* gibt es noch den *zweiten* Durchbruch oder *Durchbruch 2.Art* (*secondary breakdown*), bei dem durch eine inhomogene Stromverteilung (*Einschnürung*) eine lokale Übertemperatur auftritt, die zu einem lokalen Schmelzen und damit zur Zerstörung des Transistors führt. Die Kennlinien des zweiten Durchbruchs sind in Abb. 2.13 gestrichelt dargestellt. Es findet zunächst ein normaler Durchbruch statt, in dessen Verlauf die Einschnürung auftritt. Der zweite Durchbruch ist durch einen Einbruch der Kollektor-Emitter-Spannung gekennzeichnet, auf die ein starker Stromanstieg folgt. Er tritt bei Leistungs- und Hochspannungstransistoren bei hohen Kollektor-Emitter-Spannungen auf. Bei Kleinleistungstransistoren für den Niederspannungsbereich ist er selten; hier kommt es gewöhnlich zu einem normalen Durchbruch, der bei geeigneter Strombegrenzung nicht zu einer Zerstörung des Transistors führt.

Die Kennlinien des Durchbruchs 2.Art lassen sich nicht statisch messen, da es sich um einen irreversiblen, dynamischen Vorgang handelt. Die Kennlinien des normalen Durchbruchs können dagegen statisch, z.B. mit einem Kennlinienschreiber, gemessen werden, sofern die Ströme begrenzt werden, die Messung so kurz ist, dass keine Überhitzung auftritt, und der Bereich des Durchbruchs 2.Art vermieden wird.

## 2.1.5.3 Grenzströme

Bei den Grenzströmen wird zwischen maximalen Dauerströmen (*continuous currents*) und maximalen Spitzenwerten (*peak currents*) unterschieden. Für die maximalen Dauerströme existieren keine besonderen Bezeichner im Datenblatt; sie werden hier mit $I_{C,max}$, $I_{B,max}$ und $I_{E,max}$ bezeichnet. Die maximalen Spitzenwerte gelten für gepulsten Betrieb mit vorgegebener Pulsdauer und Wiederholrate und werden im Datenblatt mit $I_{CM}$, $I_{BM}$ und $I_{EM}$ bezeichnet; sie sind um den Faktor $1{,}2\dots 2$ größer als die Dauerströme.

## 2.1.5.4 Sperrströme

Für die Emitter- und die Kollektor-Diode sind im Datenblatt neben den Durchbruchspannungen $U_{(BR)EBO}$ und $U_{(BR)CBO}$ noch die Sperrströme (*cut-off currents*) $I_{EBO}$ und $I_{CBO}$ angegeben, die bei einer Spannung unterhalb der jeweiligen Durchbruchsspannung gemessen werden. In gleicher Weise werden für die Kollektor-Emitter-Strecke die Sperrströme $I_{CEO}$ und $I_{CES}$ angegeben, die mit offener bzw. kurzgeschlossener Basis bei einer Spannung unterhalb $U_{(BR)CEO}$ bzw. $U_{(BR)CES}$ gemessen werden. Es gilt:

$$
I_{CES} < I_{CEO}
$$

## 2.1.5.5 Maximale Verlustleistung

Eine besonders wichtige Grenzgröße ist die *maximale Verlustleistung*. Die Verlustleistung ist die im Transistor in Wärme umgesetzte Leistung:

$$
P_V = U_{CE}I_C + U_{BE}I_B \approx U_{CE}I_C
$$

Sie entsteht im wesentlichen in der Sperrschicht der Kollektor-Diode. Die Temperatur der Sperrschicht erhöht sich auf einen Wert, bei dem die Wärme aufgrund des Temperaturgefälles von der Sperrschicht über das Gehäuse an die Umgebung abgeführt werden kann; im Abschnitt 2.1.6 wird dies näher beschrieben.

Die Temperatur der Sperrschicht darf einen materialabhängigen Grenzwert, bei Silizium 175 °C, nicht überschreiten; in der Praxis wird bei Silizium aus Sicherheitsgründen
<!-- page-import:0086:end -->

<!-- page-import:0087:start -->
50  2. Bipolartransistor

a linear

b doppelt logarithmisch

**Abb. 2.14.** Zulässiger Betriebsbereich (*safe operating area, SOA*)

mit einem Grenzwert von 150 °C gerechnet. Die maximale Verlustleistung, bei der dieser Grenzwert erreicht wird, hängt vom Aufbau des Transistors und von der Montage ab; sie wird im Datenblatt mit \(P_{tot}\) bezeichnet und für zwei Fälle angegeben:

– Betrieb bei stehender Montage auf einer Leiterplatte ohne weitere Maßnahmen zur Kühlung bei einer Temperatur der umgebenden Luft (*free-air temperature*) von \(T_A = 25\,^\circ\mathrm{C}\); der Index A bedeutet Umgebung (*ambient*).

– Betrieb bei einer Gehäusetemperatur (*case temperature*) von \(T_C = 25\,^\circ\mathrm{C}\); dabei bleibt offen, durch welche Maßnahmen zur Kühlung diese Gehäusetemperatur erreicht wird.

Die beiden Maximalwerte werden hier mit \(P_{V,25(A)}\) und \(P_{V,25(C)}\) bezeichnet. Bei Kleinleistungstransistoren, die für stehende Montage ohne Kühlkörper ausgelegt sind, ist nur \(P_{tot} = P_{V,25(A)}\) angegeben; dabei wird oft die sich einstellende Gehäusetemperatur \(T_C\) zusätzlich angegeben. Bei Leistungstransistoren, die ausschließlich für den Betrieb mit einem Kühlkörper ausgelegt sind, ist nur \(P_{tot} = P_{V,25(C)}\) angegeben. In praktischen Anwendungen kann \(T_A = 25\,^\circ\mathrm{C}\) oder \(T_C = 25\,^\circ\mathrm{C}\) nicht eingehalten werden. Da \(P_{tot}\) mit zunehmender Temperatur abnimmt, ist im Datenblatt oft eine *power derating curve* angegeben, in der \(P_{tot}\) über \(T_A\) oder \(T_C\) aufgetragen ist; siehe Abb. 2.15a. Im Abschnitt 2.1.6 wird das thermische Verhalten ausführlich behandelt.

## 2.1.5.6 Zulässiger Betriebsbereich

Aus den Grenzdaten erhält man im Ausgangskennlinienfeld den zulässigen Betriebsbereich (*safe operating area, SOA*); er wird durch den maximalen Kollektorstrom \(I_{C,max}\), die Kollektor-Emitter-Durchbruchspannung \(U_{(BR)CEO}\), die maximale Verlustleistung \(P_{tot}\) und die Grenze zum Bereich des Durchbruchs 2.Art begrenzt. Abbildung 2.14 zeigt die SOA in linearer und in doppelt-logarithmischer Darstellung. Bei linearer Darstellung ergeben sich für die maximale Verlustleistung und den Durchbruch 2.Art Hyperbeln [2.2]:
<!-- page-import:0087:end -->

<!-- page-import:0088:start -->
## 2.1 Verhalten eines Bipolartransistors 51

a Power derating curves

b SOA

**Abb. 2.15.** Grenzkurven eines Hochspannungs-Schalttransistors

Verlustleistung:  
$$
I_{C,max}=\frac{P_{tot}}{U_{CE}}
$$

Durchbruch 2.Art:  
$$
I_{C,max}\approx \frac{\text{const.}}{U_{CE}^{2}}
$$

Bei doppelt-logarithmischer Darstellung gehen die Hyperbeln in Geraden mit der Steigung $-1$ bzw. $-2$ über.

Bei Kleinleistungstransistoren verläuft die Kurve für den Durchbruch 2.Art auch bei hohen Spannungen oberhalb der Kurve für die maximale Verlustleistung; sie tritt damit nicht als SOA-Grenze auf. Bei Leistungstransistoren sind zusätzlich Grenzkurven für Pulsbetrieb mit verschiedenen Pulsdauern angegeben. Bei sehr kurzer Pulsdauer und kleinem Tastverhältnis kann man den Transistor mit der maximalen Spannung $U_{(BR)CEO}$ und dem maximalen Kollektorstrom $I_{CM}$ gleichzeitig betreiben; die SOA ist in diesem Fall ein Rechteck. Aus diesem Grund lassen sich mit einem Transistor Lasten schalten, deren Leistung groß gegenüber der maximalen Verlustleistung ist; im Abschnitt 2.1.6 wird darauf noch näher eingegangen.

Abbildung 2.15b zeigt die SOA eines Hochspannungs-Schalttransistors mit $U_{(BR)CEO}=300\,\text{V}$. Der maximale Dauerstrom beträgt $I_{C,max}=100\,\text{mA}$, der maximal zulässige Spitzenstrom für einen Puls mit einer Dauer von 1 ms ist $I_{CM}=300\,\text{mA}$. Für eine Pulsdauer unter 1 $\mu$s ist die SOA ein Rechteck. Man kann Lasten mit einer Verlustleistung bis zu
$$
P=U_{(BR)CEO}I_{CM}=90\,\text{W}\gg P_{tot}=1{,}5\,\text{W}
$$
schalten.

### 2.1.6 Thermisches Verhalten

Zur Erläuterung des thermischen Verhaltens dient die Anordnung in Abb. 2.16. Die an den Außenseiten isolierten Körper haben die Temperaturen $T_1$, $T_2$ und $T_3$; $C_{th,2}$ ist die *Wärmekapazität (thermische Speicherkapazität)* des mittleren Körpers. Aufgrund der Tem-
<!-- page-import:0088:end -->

<!-- page-import:0089:start -->
52  2. Bipolartransistor

**Abb. 2.16.**  
Anordnung zur Erläuterung  
des thermischen Verhaltens

peraturunterschiede ergeben sich die Wärmeströme $P_{12}$ und $P_{23}$ $^1$, die sich mit Hilfe der Wärmewiderstände $R_{th,12}$ und $R_{th,23}$ der Übergänge berechnen lassen:

$$
P_{12}=\frac{T_1-T_2}{R_{th,12}} \quad ; \quad P_{23}=\frac{T_2-T_3}{R_{th,23}}
$$

Durch eine Bilanzierung der Wärmeströme erhält man die im mittleren Körper gespeicherte Wärmemenge $Q_{th,2}$ und die Temperatur $T_2$:

$$
Q_{th,2}=C_{th,2}T_2
$$

$$
\frac{d\,Q_{th,2}}{dt}=P_{12}-P_{23}
\quad \Rightarrow \quad
\frac{dT_2}{dt}=\frac{P_{12}-P_{23}}{C_{th,2}}
$$

Bei konstanten Temperaturen $T_1$ und $T_3$ ändert sich die Temperatur $T_2$ so lange, bis $P_{12}=P_{23}$ gilt; es wird dann genauso viel Wärme zu- wie abgeführt und $T_2$ bleibt konstant. Wenn der zugeführte Wärmestrom $P_{12}$ konstant ist und der rechte Körper die Umgebung *(ambient)* mit der Umgebungstemperatur $T_3=T_A$ darstellt, erwärmt sich der mittlere Körper auf die Temperatur $T_2=T_3+R_{th,23}P_{23}$; auch hier stellt sich $P_{12}=P_{23}$ ein.

## 2.1.6.1 Thermisches Ersatzschaltbild

Man kann ein elektrisches Ersatzschaltbild für das thermische Verhalten angeben. Die Größen Wärmestrom, Wärmewiderstand, Wärmekapazität und Temperatur entsprechen den elektrischen Größen Strom, Widerstand, Kapazität und Spannung. Bei einem Transistor werden die Körper Sperrschicht *(junction,J)*, Gehäuse *(case,C)*, Umgebung *(ambient,A)* und, wenn vorhanden, Kühlkörper *(heat sink,H)* betrachtet. In die Sperrschicht wird die Verlustleistung $P_V$ als Wärmestrom eingeprägt; die Temperatur $T_A$ der Umgebung sei konstant. Man erhält das in Abb. 2.17 gezeigte *thermische Ersatzschaltbild*, mit dem sich ausgehend von einem bekannten zeitlichen Verlauf von $P_V$ die zeitlichen Verläufe der Temperaturen $T_J$, $T_C$ und $T_H$ berechnen lassen.

### 2.1.6.1.1 Betrieb ohne Kühlkörper

Wenn kein Kühlkörper vorhanden ist, werden $R_{th,CH}$, $R_{th,HA}$ und $C_{th,H}$ durch den Wärmewiderstand $R_{th,CA}$ zwischen Gehäuse und Umgebung ersetzt. Im Datenblatt eines Transistors ist für stehende Montage auf einer Leiterplatte und Betrieb ohne Kühlkörper oft der resultierende Wärmewiderstand $R_{th,JA}$ zwischen Sperrschicht und Umgebung angegeben:

$$
R_{th,JA}=R_{th,JC}+R_{th,CA}
$$

---

$^1$ In der Wärmelehre werden Wärmeströme mit $\Phi$ bezeichnet. Hier wird $P$ verwendet, da bei elektrischen Bauteilen die Verlustleistung $P_V$ die Wärmeströme verursacht.
<!-- page-import:0089:end -->

<!-- page-import:0090:start -->
2.1 Verhalten eines Bipolartransistors 53

Abb. 2.17. Thermisches Ersatzschaltbild eines Transistors mit Kühlkörper

## 2.1.6.1.2 Betrieb mit Kühlkörper

Der Wärmewiderstand $R_{th,HA}$ des Kühlkörpers ist im Datenblatt des Kühlkörpers angegeben; er hängt von der Größe, der Bauform und der Einbaulage ab. Der Wärmewiderstand $R_{th,CH}$ hängt von der Montage des Transistors auf dem Kühlkörper ab; er muss durch die Verwendung spezieller Wärmeleitpasten klein gehalten werden, damit die Wirksamkeit des Kühlkörpers nicht beeinträchtigt wird. Durch die Verwendung von Isolierscheiben zur elektrischen Isolation zwischen Transistor und Kühlkörper kann $R_{th,CH}$ so groß werden, dass die Wirksamkeit großer Kühlkörper mit kleinem $R_{th,HA}$ deutlich reduziert wird; auf jeden Fall sollte $R_{th,CH} < R_{th,HA}$ gelten. Es gilt:

$$
R_{th,JA} = R_{th,JC} + R_{th,CH} + R_{th,HA}
$$

Wenn mehrere Transistoren auf einem gemeinsamen Kühlkörper montiert werden, erhält man ein Ersatzschaltbild mit mehreren Sperrschichten und Gehäusen, die am Kühlkörper-Knoten angeschlossen sind.

## 2.1.6.1.3 SMD-Transistoren

Bei Transistoren in SMD-Technik wird die Wärme über die Anschlussbeine an die Leiterplatte abgeführt. Der Wärmewiderstand zwischen Sperrschicht und Lötpunkt wird im Datenblatt mit $R_{th,JS}$ bezeichnet; der Index $S$ bedeutet Lötpunkt (soldering point). Hier gilt:

$$
R_{th,JA} = R_{th,JS} + R_{th,SA}
$$

## 2.1.6.2 Thermisches Verhalten bei statischem Betrieb

Bei statischem Betrieb ist die Verlustleistung $P_V$ konstant und nur vom Arbeitspunkt abhängig; dies gilt aufgrund der geringen Aussteuerung auch für den Kleinsignalbetrieb:

$$
P_V = U_{CE,A}\, I_{C,A}
\qquad\qquad (2.16)
$$

Für die Temperatur der Sperrschicht erhält man:

$$
T_J = T_A + P_V\, R_{th,JA}
\qquad\qquad (2.17)
$$

Daraus folgt für die maximal zulässige statische Verlustleistung:

$$
P_{V,\max(stat)} = \frac{T_{J,grenz} - T_{A,max}}{R_{th,JA}}
\qquad\qquad (2.18)
$$
<!-- page-import:0090:end -->

<!-- page-import:0091:start -->
54 2. Bipolartransistor

Bei Silizium-Transistoren wird mit $T_{J,grenz} = 150\,^{\circ}\mathrm{C}$ gerechnet. $T_{A,max}$ muss anwendungsspezifisch vorgegeben werden und bestimmt die maximale Umgebungstemperatur, bei der man die Schaltung betreiben darf.

Im Datenblatt eines Transistors wird $P_{V,max(stat)}$ als Funktion von $T_A$ und/oder $T_C$ angegeben; Abb. 2.15a zeigt diese power derating curves. Ihr abfallender Teil wird durch (2.18) beschrieben, wenn man die zugehörigen Größen für $T$ und $R_{th}$ einsetzt:

$$
P_{V,max(stat)}(T_A) = \frac{T_{J,grenz} - T_A}{R_{th,JA}}
$$

$$
P_{V,max(stat)}(T_C) = \frac{T_{J,grenz} - T_C}{R_{th,JC}}
$$

Man kann deshalb die Wärmewiderstände $R_{th,JA}$ und $R_{th,JC}$ auch aus dem Gefälle dieser Kurven bestimmen.

## 2.1.6.3 Thermisches Verhalten bei Pulsbetrieb

Bei Pulsbetrieb darf die maximale Verlustleistung $P_{V,max(puls)}$ die maximale statische Verlustleistung $P_{V,max(stat)}$ nach (2.18) übersteigen. Mit der Pulsdauer $t_P$, der Wiederholrate $f_W = 1/T_W$ und dem Tastverhältnis $D = t_P\,f_W$ ergibt sich aus der Verlustleistung $P_{V(puls)}$ die mittlere Verlustleistung $\overline{P_V} = D\,P_{V(puls)}$; die Verlustleistung im ausgeschalteten Zustand kann dabei vernachlässigt werden. Im eingeschalteten Zustand nimmt $T_J$ zu, im ausgeschalteten Zustand ab. Es ergibt sich ein etwa sägezahnförmiger Verlauf von $T_J$. Der Mittelwert $\overline{T_J}$ kann mit (2.17) aus $\overline{P_V}$ bestimmt werden, der wichtigere Maximalwert $T_{J,max}$ hängt vom Verhältnis zwischen den Pulsparametern $t_P$ und $D$ und der thermischen Zeitkonstante ab; letztere ergibt sich aus den Wärmekapazitäten und den Wärmewiderständen. Aus der Bedingung $T_{J,max} < T_{J,grenz}$ erhält man die maximale Verlustleistung $P_{V,max(puls)}$.

In der Praxis werden zwei Verfahren zur Bestimmung von $P_{V,max(puls)}$ angewendet:

– Man bestimmt zunächst mit (2.18) die maximale statische Verlustleistung $P_{V,max(stat)}$ und daraus $P_{V,max(puls)}$; dazu ist im Datenblatt das Verhältnis $P_{V,max(puls)}/P_{V,max(stat)}$ für verschiedene Werte von $D$ über $t_P$ aufgetragen, siehe Abb. 2.18a. Mit kleiner werdender Pulsdauer $t_P$ nimmt die Amplitude des sägezahnförmigen Anteils im Verlaufs von $T_J$ immer mehr ab; für $t_P \to 0$ gilt $\overline{T_J} = T_{J,max}$ und damit:

$$
\lim_{t_P \to 0} \frac{P_{V,max(puls)}}{P_{V,max(stat)}} = \frac{1}{D}
$$

Diese Grenzwerte sind in Abb. 2.18a am linken Rand abzulesen: für $D = 0{,}5$ erhält man bei sehr kurzer Pulsdauer $P_{V,max(puls)} = 2\,P_{V,max(stat)}$, usw.

– Es wird im Datenblatt ein Wärmewiderstand für Pulsbetrieb angegeben, mit dem $P_{V,max(puls)}$ direkt berechnet werden kann:

$$
P_{V,max(puls)}(t_P,D) = \frac{T_{J,grenz} - T_{A,max}}{R_{th,JA(puls)}(t_P,D)}
\qquad\qquad (2.19)
$$

Im Datenblatt ist $R_{th,JA(puls)}$ für verschiedene Werte von $D$ über $t_P$ aufgetragen, siehe Abb. 2.18b.
<!-- page-import:0091:end -->

<!-- page-import:0092:start -->
## 2.1 Verhalten eines Bipolartransistors 55

a Verhältnis $P_{V,max\,(puls)} / P_{V,max\,(stat)}$  
b Wärmewiderstand $R_{th,JA\,(puls)}$

**Abb. 2.18.** Bestimmung der maximalen Verlustleistung $P_{V,max(puls)}$

Beide Verfahren sind äquivalent. Das Verhältnis $P_{V,max(puls)} / P_{V,max(stat)}$ entspricht bis auf eine konstanten Faktor dem Kehrwert von $R_{th,JA(puls)}$:

\[
\frac{P_{V,max(puls)}}{P_{V,max(stat)}} =
\frac{T_{J,grenz} - T_{A,max}}{R_{th,JA(puls)}} \;
\frac{1}{P_{V,max(stat)}}
\sim
\frac{1}{R_{th,JA(puls)}}
\]

## 2.1.7 Temperaturabhängigkeit der Transistorparameter

Die Kennlinien eines Bipolartransistors sind stark temperaturabhängig. Besonders wichtig ist der temperaturabhängige Zusammenhang zwischen $I_C$ und $U_{BE}$. Bei expliziter Angabe der Abhängigkeit von $U_{BE}$ und der Temperatur $T$ gilt:

\[
I_C(U_{BE},T) = I_S(T)\, e^{\frac{U_{BE}}{U_T(T)}} \left(1 + \frac{U_{CE}}{U_A}\right)
\]

Ursache für die Temperaturabhängigkeit von $I_C$ ist die Temperaturabhängigkeit des Sperrstroms $I_S$ und der Temperaturspannung $U_T$ [2.2],[2.4]:

\[
U_T(T) = \frac{kT}{q} = 86{,}142 \,\frac{\mu V}{K}\, T
\]

\[
I_S(T) = I_S(T_0)\, e^{\left(\frac{T}{T_0}-1\right)\frac{U_G(T)}{U_T(T)}} \left(\frac{T}{T_0}\right)^{x_{T,I}}
\qquad \text{mit } x_{T,I} \approx 3
\qquad (2.20)
\]

Dabei ist $k = 1{,}38 \cdot 10^{-23}\,\mathrm{VAs/K}$ die *Boltzmannkonstante*, $q = 1{,}602 \cdot 10^{-19}\,\mathrm{As}$ die *Elementarladung* und $U_G = 1{,}12\,\mathrm{V}$ die *Bandabstandsspannung (gap voltage)* von Silizium; die geringe Temperaturabhängigkeit von $U_G$ kann vernachlässigt werden.

Durch Differentiation von $I_S(T)$ erhält man die relative Änderung von $I_S$:

\[
\frac{1}{I_S}\,\frac{d\,I_S}{dT}
=
\frac{1}{T}
\left(3 + \frac{U_G}{U_T}\right)
\;\;\overset{T=300\,K}{\approx}\;\;
0{,}15\,K^{-1}
\]
<!-- page-import:0092:end -->

<!-- page-import:0093:start -->
56  2. Bipolartransistor

Bei einer Temperaturerhöhung um 1 K nimmt $I_S$ um 15% zu. Entsprechend erhält man die relative Änderung von $I_C$:

$$
\left.\frac{1}{I_C}\frac{dI_C}{dT}\right|_{U_{BE}=\mathrm{const.}}
=
\frac{1}{T}\left(3+\frac{U_G-U_{BE}}{U_T}\right)
\stackrel{T=300\,\mathrm{K}}{U_{BE}=0{,}7\,\mathrm{V}}
\approx
0{,}065\,\mathrm{K}^{-1}
$$

Bei einer Temperaturerhöhung um 11 K steigt $I_C$ auf den doppelten Wert an. Ein temperaturstabiler Arbeitspunkt A für Kleinsignalbetrieb kann daher nicht durch Vorgabe von $U_{BE,A}$ eingestellt werden; vielmehr muss $I_{C,A}$ über der Temperatur näherungsweise konstant sein, da die Kleinsignalparameter von $I_{C,A}$ und nicht von $U_{BE,A}$ abhängen, siehe Abschnitt 2.1.4. Für den Fall, dass $I_{C,A}$ näherungsweise temperaturunabhängig ist, kann man aus

$$
dI_C=\frac{\partial I_C}{\partial T}\,dT+\frac{\partial I_C}{\partial U_{BE}}\,dU_{BE}\equiv 0
$$

die Temperaturabhängigkeit von $U_{BE}$ bestimmen:

$$
\left.\frac{dU_{BE}}{dT}\right|_{I_C=\mathrm{const.}}
=
\frac{U_{BE}-U_G-3U_T}{T}
\stackrel{T=300\,\mathrm{K}}{U_{BE}=0{,}7\,\mathrm{V}}
\approx
-1{,}7\,\frac{\mathrm{mV}}{\mathrm{K}}
\qquad\qquad (2.21)
$$

Auch die Stromverstärkung $B$ ist temperaturabhängig; es gilt [2.2]:

$$
B(T)=B(T_0)\,e^{\left(\frac{T}{T_0}-1\right)\frac{\Delta U_{dot}}{U_T(T)}}
$$

Die Spannung $\Delta U_{dot}$ ist eine Materialkonstante und beträgt bei npn-Transistoren aus Silizium etwa 44 mV. Durch Differentiation erhält man:

$$
\frac{1}{B}\frac{dB}{dT}
=
\frac{\Delta U_{dot}}{U_T\,T}
\stackrel{T=300\,\mathrm{K}}{\approx}
5{,}6\cdot 10^{-3}\,\mathrm{K}^{-1}
$$

In der Praxis wird oft ein vereinfachter Zusammenhang verwendet [2.4]:

$$
B(T)=B(T_0)\left(\frac{T}{T_0}\right)^{x_{T,B}}
\qquad \text{mit } x_{T,B}\approx 1{,}5
\qquad\qquad (2.22)
$$

Es ergibt sich im praktisch genutzten Bereich dieselbe Temperaturabhängigkeit:

$$
\frac{1}{B}\frac{dB}{dT}
=
\frac{x_{T,B}}{T}
\stackrel{T=300\,\mathrm{K}}{\approx}
5\cdot 10^{-3}\,\mathrm{K}^{-1}
\qquad\qquad (2.23)
$$

Die Stromverstärkung nimmt also bei einer Temperaturerhöhung um 1 K um etwa 0,5% zu. In der Praxis ist diese Abhängigkeit von untergeordneter Bedeutung, da die Stromverstärkung deutlich größeren fertigungsbedingten Schwankungen unterliegt. Sie wird nur bei differentiellen Betrachtungen berücksichtigt, z.B. bei der Berechnung des Temperaturkoeffizienten einer Schaltung.
<!-- page-import:0093:end -->

<!-- page-import:0103:start -->
66

# 2. Bipolartransistor

![Abb. 2.28. Erweitertes Transportmodell für einen npn-Transistor](image)

$$
I_E=-\left(\frac{B_N}{q_B}+1\right)I_{B,N}+\frac{B_I}{q_B}I_{B,I}-I_{B,E}
$$

#### 2.3.1.3.4 Definition der relativen Basisladung

Die *relative Basisladung* $q_B$ ist ein Maß für die *relative Majoritätsträgerladung* in der Basis und setzt sich aus den Größen $q_1$ zur Beschreibung des Early-Effekts und $q_2$ zur Beschreibung des Hochstromeffekts zusammen $^3$:

$$
q_B=\frac{q_1}{2}\left(1+\sqrt{1+4q_2}\right)
$$

$$
q_1=\frac{1}{1-\frac{U_{BE}}{U_{A,I}}-\frac{U_{BC}}{U_{A,N}}}
$$

$$
q_2=\frac{I_S}{I_{K,N}}\left(e^{\frac{U_{BE}}{U_T}}-1\right)+\frac{I_S}{I_{K,I}}\left(e^{\frac{U_{BC}}{U_T}}-1\right)
$$

(2.30)

Als weitere Modellparameter werden die *Early-Spannungen* $U_{A,N}$ und $U_{A,I}$ und die *Knieströme zur starken Injektion* $I_{K,N}$ und $I_{K,I}$ benötigt. Die Early-Spannungen liegen zwischen 30 V und 150 V, bei integrierten und Hochfrequenz-Transistoren sind auch kleinere Werte möglich. Die Knieströme hängen von der Größe des Transistors ab und liegen bei Kleinleistungstransistoren im Milliampere-, bei Leistungstransistoren im Ampere-Bereich.

#### 2.3.1.3.5 Einfluss der relativen Basisladung bei Normalbetrieb

Der Einfluss der relativen Basisladung $q_B$ lässt sich am einfachsten durch eine Betrachtung des Kollektorstroms bei Normalbetrieb aufzeigen; bei Vernachlässigung der Sperrströme erhält man:

$$
I_C=\frac{B_N}{q_B}I_{B,N}=\frac{I_S}{q_B}e^{\frac{U_{BE}}{U_T}}
$$

(2.31)

---

$^3$ In der Literatur wird oft ein anderer Ausdruck für $q_B$ verwendet, z.B. [2.5]; der hier angegebene Ausdruck wird von *Spice* verwendet [2.4],[2.6].
<!-- page-import:0103:end -->

<!-- page-import:0117:start -->
80

# 2. Bipolartransistor

**Abb. 2.40.** Dynamisches Kleinsignalmodell

$$
r_E = \frac{1}{S + \frac{1}{r_{BE}}} \approx \frac{1}{S} \, ; \qquad \alpha = \frac{\beta}{1+\beta} = S\,r_E
$$

Man erhält diese alternative Form durch Linearisierung des reduzierten Ebers-Moll-Modells nach Abb. 2.25a. Sie wird hier nur der Vollständigkeit wegen angegeben, da sie nur in Ausnahmefällen vorteilhaft eingesetzt werden kann und die Vernachlässigung des Early-Effekts in vielen Fällen zu unzureichenden Ergebnissen führt

In der Literatur findet man gelegentlich eine Variante mit einem zusätzlichen Widerstand $r_C$ zwischen Basis und Kollektor. Dieser entsteht durch die Linearisierung der in diesem Fall nicht vernachlässigten Kollektor-Basis-Diode des Ebers-Moll-Modells und dient deshalb nicht, wie oft angenommen wird, der Modellierung des Early-Effekts. Diese Variante ist deshalb auch nicht äquivalent zu dem vereinfachten Modell in Abb. 2.39a.

#### 2.3.3.2 Dynamisches Kleinsignalmodell

##### 2.3.3.2.1 Vollständiges Modell

Durch Ergänzen der Sperrschicht- und Diffusionskapazitäten erhält man aus dem statischen Kleinsignalmodell nach Abb. 2.38b das in Abb. 2.40 gezeigte dynamische Kleinsignalmodell; dabei gilt mit Bezug auf Abschnitt 2.3.2:

$$
C_E = C_{S,E}(U_{B'E',A}) + C_{D,N}(U_{B'E',A})
$$

$$
C_{Ci} = C_{S,Ci}(U_{B'C',A}) + C_{D,I}(U_{B'C',A}) \approx C_{S,Ci}(U_{B'C',A})
$$

$$
C_{Ce} = C_{S,Ce}(U_{BC',A})
$$

$$
C_S = C_{S,S}(U_{SC',A})
$$

Die *Emitterkapazität* $C_E$ setzt sich aus der Emitter-Sperrschichtkapazität $C_{S,E}$ und der Diffusionskapazität $C_{D,N}$ für Normalbetrieb zusammen. Die *interne Kollektorkapazität* $C_{Ci}$ entspricht der internen Kollektor-Sperrschichtkapazität; die parallel liegende Diffusionskapazität $C_{D,I}$ ist wegen $U_{BC}<0$ vernachlässigbar klein. Die *externe Kollektorkapazität* $C_{Ce}$ und die *Substratkapazität* $C_S$ entsprechen den jeweiligen Sperrschichtkapazitäten; letztere tritt nur bei integrierten Transistoren auf.

##### 2.3.3.2.2 Vereinfachtes Modell

Für praktische Berechnungen werden die Bahnwiderstände $R_E$ und $R_C$ vernachlässigt; der Basisbahnwiderstand $R_B$ kann wegen seines Einflusses auf das dynamische Verhalten nur
<!-- page-import:0117:end -->

<!-- page-import:0119:start -->
# 2. Bipolartransistor

![Abb. 2.43. Betragsfrequenzgänge $|\alpha(j\omega)|$ und $|\beta(j\omega)|$]( )

**Abb. 2.43.** Betragsfrequenzgänge $|\alpha(j\omega)|$ und $|\beta(j\omega)|$

$$
i_C = (S - sC_C)\,u_{B'E}
$$

erhält man mit $\beta_0 = S\,r_{BE}$.$^8$:

$$
\beta(s) = \frac{r_{BE}\,(S - sC_C)}{1 + s\,r_{BE}\,(C_E + C_C)} \approx \frac{\beta_0}{1 + s\,r_{BE}\,(C_E + C_C)}
\qquad (2.43)
$$

Die Übertragungsfunktion hat einen Pol und eine Nullstelle, wobei die Nullstelle aufgrund der sehr kleinen Zeitkonstante $C_C\,S^{-1}$ vernachlässigt werden kann. Abbildung 2.43 zeigt den Betragsfrequenzgang $|\beta(j\omega)|$ für $\beta_0 = 100$ unter Berücksichtigung der Nullstelle; bei der $\beta$-Grenzfrequenz

$$
\omega_\beta = 2\pi\,f_\beta \approx \frac{1}{r_{BE}\,(C_E + C_C)}
\qquad (2.44)
$$

ist er um 3 dB gegenüber $\beta_0$ abgefallen [2.7].

##### 2.3.3.3.2 Transitfrequenz

Die Frequenz, bei der $|\beta(j\omega)|$ auf Eins abgefallen ist, wird *Transitfrequenz* $f_T$ genannt; man erhält [2.7]:

$$
\omega_T = 2\pi\,f_T = \beta_0\omega_\beta \approx \frac{S}{C_E + C_C}
\qquad (2.45)
$$

Aufgrund der Näherungen beim Kleinsignalmodell und bei der Berechnung von $\beta(s)$ stimmt die Transitfrequenz nach (2.45) nicht mit der realen Transitfrequenz des Transistors überein; sie wird deshalb auch *extrapolierte Transitfrequenz* genannt, da man sie durch Extrapolation des abfallenden Teils von $|\beta(j\omega)|$ entsprechend einem Tiefpass 1. Grades erhält. Im Datenblatt eines Transistors ist immer die extrapolierte Transitfrequenz angegeben.

---

$^8$ Die *statische* Kleinsignalstromverstärkung in Emitterschaltung, die bisher mit $\beta$ bezeichnet wurde, wird hier zur Unterscheidung von der inversen Laplacetransformierten $\beta = \mathcal{L}^{-1}\{\beta(s)\}$ mit $\beta_0$ bezeichnet; der Index Null bedeutet dabei Frequenz Null, d.h. es gilt $\beta_0 = |\beta(j0)|$.
<!-- page-import:0119:end -->

<!-- page-import:0121:start -->
84

# 2. Bipolartransistor

wird eine Kleinsignalstromquelle mit dem Strom $i_E$ am Emitter angeschlossen und $i_C$ ermittelt; dabei sind Basis und Kollektor, letzterer wegen $u_{BC}=U_{BC}-U_{BC,A}=0$, mit Masse verbunden. Mit $r_{CE}\rightarrow\infty$ und $\alpha_0=S\,r_E$^9 erhält man:

$$
\underline{\alpha}(s)=-\frac{\underline{i_C}}{\underline{i_E}}
=\alpha_0\,\frac{1+s\,\frac{R_BC_C}{\alpha_0}+s^2\frac{r_EC_E\,R_BC_C}{\alpha_0}}{(1+s\,r_EC_E)(1+s\,R_BC_C)}
$$

Die Übertragungsfunktion hat zwei Pole und zwei Nullstellen; der Betragsfrequenzgang $|\underline{\alpha}(j\omega)|$ ist in Abb. 2.43 gezeigt [2.8]. Im allgemeinen gilt $R_BC_C\ll r_EC_E$, so dass man die Näherung

$$
\underline{\alpha}(s)\approx\frac{\alpha_0}{1+s\,r_EC_E}
$$

verwenden kann; daraus folgt die $\alpha$-Grenzfrequenz:

$$
\omega_\alpha=2\pi f_\alpha\approx\frac{1}{r_EC_E}
$$

(2.46)

#### 2.3.3.4 Frequenzgang der Transadmittanz

Ersetzt man in Abb. 2.42 die Kleinsignalstromquelle mit dem Strom $i_B$ durch eine Kleinsignalspannungsquelle mit der Spannung $u_{BE}$ und ermittelt das Verhältnis der Laplacetransformierten von $i_C$ und $u_{BE}$, erhält man die Übertragungsfunktion der Transadmittanz $y_{21,e}$

$$
\underline{y}_{21,e}(s)=\frac{\underline{i_C}}{\underline{u_{BE}}}
=\frac{S-sC_C}{1+\frac{R_B}{r_{BE}}+s\,R_B\,(C_E+C_C)}
\approx
\frac{S}{1+s\,R_B\,(C_E+C_C)}
$$

(2.47)

mit der Steilheitsgrenzfrequenz:

$$
\omega_{Y21e}=2\pi f_{Y21e}\approx\frac{1}{R_B\,(C_E+C_C)}
$$

(2.48)

Die Steilheitsgrenzfrequenz hängt vom Arbeitspunkt ab; ihre Abhängigkeit von $I_{C,A}$ ist jedoch nicht einfach anzugeben, da die Arbeitspunktabhängigkeit von $R_B$ eingeht. Tendenziell nimmt sie mit steigendem Kollektorstrom $I_{C,A}$ ab.

#### 2.3.3.5 Relation und Bedeutung der Grenzfrequenzen

Ein Vergleich der Grenzfrequenzen führt auf folgende Relation:

$$
f_\beta<f_{Y21e}<f_T\lesssim f_\alpha
$$

Steuert man einen Transistor in Emitterschaltung mit einer Stromquelle bzw. mit einer Quelle mit einem Innenwiderstand $R_i\gg r_{BE}$ an, spricht man von Stromsteuerung; die Grenzfrequenz der Schaltung wird in diesem Fall durch die $\beta$-Grenzfrequenz $f_\beta$ nach oben begrenzt. Bei Ansteuerung mit einer Spannungsquelle bzw. mit einer Quelle mit einem

---

^9 Die statische Kleinsignalstromverstärkung in Basisschaltung, die bisher mit $\alpha$ bezeichnet wurde, wird hier zur Unterscheidung von der inversen Laplacetransformierten $\alpha=\mathcal{L}^{-1}\{\underline{\alpha}(s)\}$ mit $\alpha_0$ bezeichnet; der Index Null bedeutet dabei Frequenz Null, d.h. $\alpha_0=|\underline{\alpha}(j0)|$.
<!-- page-import:0121:end -->

<!-- page-import:0137:start -->
100  2. Bipolartransistor

**Abb. 2.56.** Transformation des Innenwiderstands eines Signalgenerators durch einen Übertrager

2,5 = 4 dB. Nimmt man an, dass aufgrund der geforderten Bandbreite ein minimaler Arbeitspunktstrom $I_{C,A} = 1\,\mathrm{mA}$ erforderlich ist, erhält man aus (2.69) $R_{gopt} = 620\,\Omega$. Durch Einsatz eines Übertragers mit $n = 4$ kann der Innenwiderstand auf $n^2 R_g = 800\,\Omega$ transformiert und an $R_{gopt}$ angeglichen werden. Da das Optimum mit einem ganzzahligen Wert $n$ nicht erreicht wird, muss die Rauschzahl mit (2.65) bestimmt werden: $F = 1{,}26 = 1\,\mathrm{dB}$. Durch den Einsatz des Übertragers gewinnt man in diesem Beispiel also 3 dB an $SNR$.

– Die Optimierung der Rauschzahl durch Anpassung von $R_g$ an $R_{gopt}$ kann nicht durch zusätzliche Widerstände erfolgen, da durch diese Widerstände zusätzliche Rauschquellen entstehen, die bei der Definition der Rauschzahl in (2.63) nicht berücksichtigt sind; die Formeln für $F_{opt}$, $I_{C,Aopt}$ und $R_{gopt}$ sind deshalb nicht anwendbar. Die Rauschzahl wird durch zusätzliche Widerstände auf jeden Fall schlechter. Die Anpassung muss also so erfolgen, dass keine zusätzlichen Rauschquellen auftreten. Bei der Transformation des Innenwiderstands mit einem Übertrager ist diese Forderung erfüllt, solange das Eigenrauschen des Übertragers vernachlässigt werden kann; bei schmalbandigen Anwendungen in der Hochfrequenztechnik kann die Anpassung mit LC-Kreisen oder Streifenleitungen erfolgen.

*Beispiel:* Es soll versucht werden, im obigen Beispiel die Anpassung von $R_g = 50\,\Omega$ an $R_{gopt} = 620\,\Omega$ mit einem Serienwiderstand $R = 570\,\Omega$ vorzunehmen. Die Ersatzrauschquelle hat dann, in Erweiterung von (2.61), die Rauschdichte

$$
|u_r(f)|^2 = |u_{r,g}(f)|^2 + |u_{R,r}(f)|^2 + |u_{r,0}(f)|^2 + R_{gopt}^2 |i_{r,0}(f)|^2
$$

und für die Rauschzahl erhält man mit $|u_{r,g}(f)|^2 = 8{,}28 \cdot 10^{-19}\,\mathrm{V}^2/\mathrm{Hz}$, $|u_{R,r}(f)|^2 = 9{,}44 \cdot 10^{-18}\,\mathrm{V}^2/\mathrm{Hz}$, $|u_{r,0}(f)|^2 = 1{,}22 \cdot 10^{-18}\,\mathrm{V}^2/\mathrm{Hz}$ aus (2.59) und $|i_{r,0}(f)|^2 = 3{,}2 \cdot 10^{-24}\,\mathrm{A}^2/\mathrm{Hz}$ aus (2.60):

$$
F(f) = \frac{|u_r(f)|^2}{|u_{r,g}(f)|^2} = 15{,}36 = 11{,}9\,\mathrm{dB}
$$

Die Rauschzahl nimmt durch den Serienwiderstand im Vergleich zur Schaltung ohne Übertrager um 7,9 dB, im Vergleich zur Schaltung mit Übertrager um 10,9 dB zu.

– Für die Optimierung der Rauschzahl wurde angenommen, dass das Rauschen des Signalgenerators durch das thermische Rauschen des Innenwiderstands verursacht wird, d.h. $|u_{r,g}(f)|^2 = 4kT_0R_g$. Im allgemeinen trifft dies nicht zu. Die Optimierung der Rauschzahl durch partielle Differentiation von (2.63) ist jedoch unabhängig von $|u_{r,g}(f)|^2$, da die Konstante Eins durch die Differentiation verschwindet und der verbleibende Ausdruck durch $|u_{r,g}(f)|^2$ nur skaliert wird. Dadurch ändert sich zwar $F_{opt}$, die zugehörigen Werte $R_{gopt}$ und $I_{C,Aopt}$ bleiben aber erhalten.
<!-- page-import:0137:end -->
