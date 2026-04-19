# Controller Types

<!-- page-import:0599:start -->
562 5. Operationsverstärker

a Modell

b Bode Diagramm

Abb. 5.73. Pole Splitting, Pol-Nullstellen Kompensation. $|A_1| = U_1/U_D$ ist die Verstärkung des Differnzverstärkers am Eingang.

– Diese Maßnahme lässt sich noch verbessern, wenn man gleichzeitig die 2. Grenzfrequenz erhöht. Das ist durch Pole-Splitting oder Pol-Nullstellen Kompensation möglich, die wir im Folgenden beschreiben.

Beim Pole-Splitting wird nicht nur die niedrigste Grenzfrequenz reduziert, sondern gleichzeitig die zweite Grenzfrequenz erhöht. Die Pole in der Übertragungsfunktion werden auseinander geschoben; daher kommt die Bezeichnung "Pole-Splitting". Der Grundgedanke besteht hier darin, die Phasennacheilung, die der Kondensator zur Frequenzgangkorrektur in Abb. 5.71 verursacht, bei hohen Frequenzen wieder zurückzunehmen. Dazu dient der Widerstand $R_k$ in Abb. 5.72. Seine Wirkung erkennt man im Bodediagramm des Eingangsdifferenzverstärkers in Abb. 5.73. Die Verstärkung wird in diesem Beispiel um den Faktor $250 \widehat{=} 48\,\mathrm{dB}$ reduziert, die damit verbundene Phasenverschiebung geht bei hohen Frequenzen aber wieder zurück auf $\varphi = 0$. Das erklärt aber nicht, warum die 2. Grenzfrequenz durch diese Maßnahme erhöht wird, denn die gezeigte Korrektur wirkt nur auf den Differenzverstärker am Eingang. Dazu muss man berücksichtigen, dass der Widerstand $R_k$ eine Nullstelle erzeugt, die den Pol bei der 2. Grenzfrequenz kompensieren kann. Dazu muss der durch die Frequenzgangkorrektur mit $R_k, C_K$ hinzugefügte neue Pol eine Grenzfrequenz besitzen, die über der ursprünglichen Grenzfrequenz $f_{g2}$ liegt. Man sieht in dem Beispiel in Abb. 5.72, dass die 2. Grenzfrequenz dadurch von 5 MHz auf 20 MHz erhöht wird. Aus diesem Grund kann man die 1. Grenzfrequenz ebenfalls um den Faktor 4 erhöhen, also von 50 Hz auf 200 Hz. Um den Faktor 4, also um 12 dB, erhöht sich dann auch die Schleifenverstärkung. Die Pol-Nullstellen Kompensation ist ein gebräuchliches Verfahren in der Regelungstechnik; sie wird in Kapitel 13.2.4 auf Seite 873 genauer beschrieben.

Natürlich ist es wünschenswert, die Kapazität zur Frequenzgangkorrektur in der integrierten Schaltung unterzubringen. Das ist aber selbst bei der verringerten Kapazität von 1,5 nF nicht möglich. Deshalb nutzt man den sonst unerwünschten Miller-Effekt, um mit einer wesentlich geringeren Kapazität dieselbe Wirkung zu erzielen. Eine Miller-Kapazität
<!-- page-import:0599:end -->

<!-- page-import:0903:start -->
866  13. Regler

$$
A_S=\frac{1}{1+s_n}\cdot\frac{1}{1+0{,}1\,s_n}\cdot\frac{1}{1+0{,}01\,s_n}
$$

*Abb. 13.3.*  
Modell der Beispiel-Regelstrecke mit PT3-Verhalten.

Für $\tau_1 = 1/\omega_{g1} = 1 \sec$ gilt daher in den folgenden Diagrammen $|\omega| = |\omega_n|$ und $|t| = |t_n|$; die erste Grenzfrequenz beträgt dann $f_{g1} = \omega_{g1}/2\pi = 0{,}16\,\text{Hz}$.

Das Bodediagramm der Beispielstrecke ist in Abb. 13.4 dargestellt. Man erkennt die drei Grenzfrequenzen mit zunehmend steilerem Abfall der Verstärkung. Die Phasenverschiebung von jedem Tiefpass strebt gegen $-90^\circ$, die der ganzen Strecke also gegen $\varphi = -270^\circ$. Bei der zweiten Grenzfrequenz beträgt die Phasenverschiebung des 2. Tiefpasses $-45^\circ$, der Beitrag des ersten Tiefpasses beträgt dort bereits $-90^\circ$. Die gesamte Phasenverschiebung beträgt dort demnach $-135^\circ$. Die Phasenreserve zu $-180^\circ$ beträgt bei dieser Frequenz also $\alpha = 45^\circ$. Zur Dimensionierung des Reglers ist es nützlich, den Frequenzgang der Strecke zu kennen. Aus der Messung des Betrags lassen sich die Grenzfrequenzen aber nicht ablesen, weil darin keine scharfen Knickpunkte zu erkennen sind wie in der schematischen Darstellung in Abb. 13.3. Wenn die Grenzfrequenzen - wie in diesem Beispiel - weit genug auseinander liegen, gibt die Phasenverschiebung einen genaueren Hinweis auf die Grenzfrequenzen: Bei $\omega_{g1}$ beträgt sie $\varphi = -45^\circ$, bei $\omega_{g2}$ sind es $\varphi = -135^\circ$ und bei $\omega_{g3}$ ist $\varphi = -225^\circ$. Mitunter ist man auch in der Lage, die Übertragungsfunktion der Strecke aus ihren physikalischen Gegebenheiten zu berechnen.

## 13.2 Regler-Typen

Es gibt verschiedene Typen von Reglern, die mit je eigenen Verfahren entworfen werden. Man unterscheidet zwischen den *klassischen* Reglern und neueren Konzepten wie z.B. der *Zustandsregelung* oder der *Optimalregelung*. Wir beschränken uns im folgenden auf die drei klassischen Regler-Typen, die im Bereich der Regelung elektronischer Schaltungen nach wie vor eine dominante Rolle spielen.

*Abb. 13.4.* Bode-Diagramm der Beispiel-Regelstrecke
<!-- page-import:0903:end -->

<!-- page-import:0904:start -->
13.2 Regler-Typen 867

![Abb. 13.5. Regelung der Beispielstrecke mit einem P-Regler]( [unclear] )

**Abb. 13.5.** Regelung der Beispielstrecke mit einem P-Regler

## 13.2.1 P-Regler

Die einfachste Möglichkeit zur Regelung einer Regelstrecke besteht in dem Einsatz eines P-Reglers. In Abb. 13.5 ist der Einsatz eines P-Reglers zur Regelung der Beispielstrecke dargestellt. Bei der Regelung einer Strecke mit einem P-Regler gibt es zur Einstellung nur einen einzigen Parameter - nämlich die P-Verstärkung des Reglers. Das Einschwingverhalten eines Regelkreises wird durch die Phasenreserve $\alpha$ (= Phasenspielraum) bei der Frequenz bestimmt, bei der die Schleifenverstärkung $|g| = 1$ ist. Besonders markant für die Phasenreserve sind 3 Fälle:

- für $\alpha = 90^\circ$ liegt aperiodisches Einschwingverhalten ohne Überschwingen vor;
- für $\alpha = 60^\circ$ erfolgt der Einschwingvorgang schneller, aber mit Überschwingen;
- für $\alpha = 45^\circ$ erfolgt der Einschwingvorgang noch schneller, aber mit starkem Überschwingen

Meist wählt man eine Phasenreserve von $\alpha = 60^\circ$ als den besten Kompromiss. Die zugehörige P-Verstärkung des Reglers erhält man - wie in Abb. 13.6 dargestellt - indem man die Frequenz aufsucht, bei der die Phasenreserve $\alpha = 60^\circ$ beträgt und dann die P-Verstärkung

**Abb. 13.6.** Bode-Diagramm der Beispielstrecke mit P-Regler
<!-- page-import:0904:end -->

<!-- page-import:0905:start -->
868 13. Regler

**Abb. 13.7.** Sprungantworten von P-Reglern mit verschiedenen P-Verstärkungen. Die zugehörigen Phasenreserven betragen von oben nach unten $\alpha = 45^\circ$, $\alpha = 60^\circ$, $\alpha = 90^\circ$.
Zeitnormierung: $t_n = t/\tau_1$

so lange erhöht, bis die Schleifenverstärkung bei dieser Frequenz $|g| = A_P A_S = 1$ ist. In dem Beispiel in Abb. 13.6 ergibt sich dabei $A_P = 1/A_S = 6$.

Die resultierende Sprungantwort ist in Abb. 13.7 dargestellt. Man erkennt bei dieser P-Verstärkung ein leichtes Überschwingen. Wenn man die Verstärkung auf $A_P = 12$ erhöht, ergibt sich ein starkes Überschwingen. Bei $A_P = 3$ tritt praktisch kein Überschwingen auf, aber eine deutlich größere Anstiegszeit. In allen Fällen erkennt man eine nennenswerte stationäre Regelabweichung. Bei $A_P = 6$ ergibt sich mit $A_S = 1$ gemäß (13.5)

$$
\frac{E}{W} = \frac{W - Y}{W} = \frac{1}{1 + A_P A_S} = \frac{1}{1 + g} = \frac{1}{1 + 6} = 14\%
$$

Wenn man die Daten der Regelstrecke nicht kennt, lässt sich ein P-Regler ganz einfach dadurch einstellen, dass man die P-Verstärkung erhöht bis sich in der Sprungantwort ein vernünftiger Kompromiss zwischen Überschwingen und Einstellzeit ergibt.

## 13.2.2 PI-Regler

Ein schwerwiegender Nachteil von P-Reglern ist die verbleibenden Regelabweichung, die unter Umständen beträchtlich sein kann. Die Ursache ist die beschränkte Schleifenverstärkung $g = A_P A_S$. Sie lässt sich jedoch bei tiefen Frequenzen erhöhen, indem man den Regler um einen Integralzusatz erweitert. Das Blockschaltbild ist in Abb. 13.8 dargestellt. Man dimensioniert den I-Anteil so, dass er die Verstärkung des Reglers unterhalb der 1. Grenzfrequenz der Strecke anhebt. Dann steigt die Schleifenverstärkung für tiefe

**Abb. 13.8.** Regelung der Beispielstrecke mit einem PI-Regler

Sollwert  
$W$

$E$

$A_I = \frac{6}{s_n}$

$A_P = 6$

PI-Regler

$U$

$A_S = \frac{1}{1+s_n}\cdot\frac{1}{1+0,1\,s_n}\cdot\frac{1}{1+0,01\,s_n}$

Beispielstrecke

Istwert  
$Y$
<!-- page-import:0905:end -->

<!-- page-import:0906:start -->
13.2 Regler-Typen 869

**Abb. 13.9.** Bodediagramm der Beispielstrecke mit PI-Regler

Frequenzen nahtlos weiter an wie man in Abb. 13.9 erkennt. Dazu muss der I-Anteil die Übertragungsfunktion $A_I = A_P/s_n$ besitzen. Theoretisch müsste $A_I \to \infty$ streben für $s_n \to 0$. Es macht aber keinen messbaren Unterschied, dass reale Integratoren $A_I$ auf die Leerlaufverstärkung des Operationsverstärkers begrenzen.

Die Auswirkung auf die Sprungantwort zeigt Abb. 13.10. Man erkennt, dass bei optimaler Dimensionierung die bleibende Regelabweichung zu Null wird, ohne dass das Überschwingen nennenswert ansteigt. Man sieht dort auch, dass das Überschwingen stark ansteigt, wenn der I-Teil zu groß ist. Ist er zu klein, wird die Regelabweichung zwar auch

**Abb. 13.10.** Sprungantwort von PI-Reglern für verschiedene I-Anteile. Sie betragen von oben nach unten $12/s_n$, $6/s_n$, $3/s_n$ und $0/s_n$ (also ohne I-Anteil).
<!-- page-import:0906:end -->

<!-- page-import:0907:start -->
870 13. Regler

$A_D=\dfrac{2\,s_n}{1+0{,}01\,s_n}$

$A_I=\dfrac{20}{s_n}$

$A_P=20$

Sollwert  
$W$

$E$

PID-Regler

$U$

$A_S=\dfrac{1}{1+s_n}\cdot\dfrac{1}{1+0{,}1\,s_n}\cdot\dfrac{1}{1+0{,}01\,s_n}$

Beispielstrecke

Istwert  
$Y$

**Abb. 13.11.** Regelung der Beispielstrecke mit einem PID-Regler

Null, aber die Regelgröße kriecht nur langsam auf den Endwert. Wenn die Daten der Regelstrecke nicht bekannt sind, stellt man zunächst den P-Regler ein und erhöht dann den I-Anteil bis sich die optimale Sprungantwort ergibt.

## 13.2.3 PID-Regler

Man kann das Verhalten eines Regelkreises weiter verbessern, indem man den Regler um einen Differentialanteil erweitert. Dadurch lässt sich die Anstiegszeit verkürzen, ohne das Überschwingen zu erhöhen. Die Anordnung ist in Abb. 13.11 dargestellt. Der Grundgedanke besteht dabei darin, den 2. Tiefpass der Regelstrecke unschädlich zu machen und seine Phasenverschiebung zu kompensieren. Dazu erweitert man den Regler um einen Differentialteil, der die Verstärkung des Reglers ab der 2. Grenzfrequenz $f_{n2}$ der Strecke ansteigen lässt wie man in Abb. 13.12 sieht.

Allerdings ist ein reiner Differentialteil $A_D=\tau_D\,s$ nicht realisierbar und auch gar nicht wünschenswert, weil man dadurch das Rauschen bei hohen Frequenzen zu stark anheben und die Schaltungen leicht übersteuern würde. Deshalb begrenzt man die Verstärkung im D-Teil mit einem kombinierten Tiefpass. In dem Beispiel in Abb. 13.11 sieht man, dass die Verstärkung des D-Teils für hohe Frequenzen auf $A_D=200$ begrenzt wurde, sodass die D-Verstärkung um den Faktor 10 größer wird als die P-Verstärkung. Dies erkennt man auch im Bode-Diagramm in Abb. 13.12. Durch den D-Zusatz wird gleichzeitig die Phasenverschiebung in dem Regelkreis reduziert; dies zeigt der Vergleich mit der Regelstrecke. Dadurch wird die Frequenz, bei der die Phasenreserve $\alpha=60^\circ$ beträgt, zu höheren Frequenzen verschoben. Wenn man bei dieser Frequenz die Verstärkung des Reglers so weit erhöht, dass die Schleifenverstärkung $g=1$ wird, ergeben sich im Vergleich zum P- oder PI-Regler deutlich höhere Verstärkungen (hier $A_P=20$ statt 6). Man sieht im Bode-Diagramm, dass sich Regler und Regelstrecke zusammen fast bis zur 3. Grenzfrequenz der Strecke wie ein Tiefpass 1. Ordnung verhalten. Durch den D-Teil wurde der zweite Tiefpass der Strecke zwar nicht beseitigt, aber seine Grenzfrequenz wurde von $\omega_{n2}$ auf $\omega_{n3}$ verschoben.

In Abb. 13.13 ist die Sprungantwort der mit einem PID-Regler geregelten Beispielstrecke dargestellt. Man erkennt, dass der Regelkreis durch den D-Zusatz sehr viel schneller geworden ist, ohne eine Zunahme des Überschwingens. In Abb. 13.14 sind die Einschwingvorgänge der beschriebenen Regler gegenübergestellt.
<!-- page-import:0907:end -->

<!-- page-import:0908:start -->
## 13.2 Regler-Typen

871

**Abb. 13.12.** Bodediagramm der Beispielstrecke mit PID-Regler.

Der Vergleich zeigt:

- Ein P-Regler ist langsam und besitzt eine beträchtliche Regelabweichung
- Ein PI-Regler ist auch nicht schneller, aber die Regelabweichung verschwindet. Allerdings sollte man eine Übersteuerung des I-Zusatzes vermeiden, weil man sonst mit großen Erholzeiten rechnen muss.
- Ein PID-Regler verkürzt die Anstiegszeit stark ohne, dass das Überschwingen zunimmt. Das kommt einerseits von dem D-Zusatz, aber auch von der vergrößerten P-Verstärkung.

**Abb. 13.13.** Sprungantwort von PID-Reglern für verschiedene D-Anteile
<!-- page-import:0908:end -->

<!-- page-import:0910:start -->
13.2 Regler-Typen 873

![Abb. 13.16. Kompensator als Alternative zum D-Zusatz. Pol-Nullstellen-Kompensation.]()

**Abb. 13.16.** Kompensator als Alternative zum D-Zusatz. Pol-Nullstellen-Kompensation.

sich jedoch mit der Verstärkung $A_{PID}$ der ganze Frequenzgang des Reglers in Abb. 13.12 an einem einzigen Einsteller nach oben und unten schieben ohne dabei die Grenzfrequenzen zu verschieben. Die systematische Dimensionierung des D-Teils in einem PID-Regler wird im nächsten Abschnitt beschrieben.

## 13.2.4 Kompensator

Man kann den Differentialteil eines PID-Reglers auch als eine Methode betrachten, um einen unerwünschten Tiefpass der Regelstrecke zu beseitigen. Dazu verwendet man allgemein einen Kompensator, den man wie in Abb. 13.16 vor die Strecke schaltet. Um den 2. Tiefpass der Strecke zu kompensieren, müsste der Kompensator im Prinzip lediglich den Ausdruck $A_K = 1 + 0{,}1\,s_n$ realisieren. Eine Übertragungsfunktion, die lediglich aus einem Zählerpolynom besteht, ist aber nicht realisierbar. Man muss ein Nennerpolynom – also einen Tiefpass – ergänzen, das mindestens dieselbe Ordnung wie das Zählerpolynom besitzt. Hier bietet es sich an, diesen zusätzlichen Tiefpass mit der 3. Grenzfrequenz der Strecke zusammenfallen zu lassen. Man erkennt, dass durch den Kompensator der Pol bei $\omega_{n2}$ nach $\omega_{n3}$ verschoben wird. Die Übertragungsfunktion des PD-Reglers mit Kompensator ist dann mit

$$
A_R = A_P \cdot \frac{1 + 0{,}1\,s_n}{1 + 0{,}01\,s_n}
= \frac{A_P}{1 + 0{,}01\,s_n} + \frac{A_P \cdot 0{,}1\,s_n}{1 + 0{,}01\,s_n}
$$

$$
\approx A_P + \frac{A_P \cdot 0{,}1\,s_n}{1 + 0{,}01\,s_n}
= 20 + \frac{2\,s_n}{1 + 0{,}01\,s_n}
$$

praktisch dieselbe wie bei dem PID-Regler in Abb. 13.11. Auch die Probleme des Kompensators mit Rauschen und Übersteuerung sind dieselben wie bei dem D-Zusatz eines PID-Reglers.

![Abb. 13.17.]()

**Abb. 13.17.**  
Verlagerung eines Pols der Regelstrecke  
durch den Kompensator zu höheren  
Frequenzen

![Abb. 13.18.]()

**Abb. 13.18.**  
Annullierung eines schwach gedämpften Pol-  
paars der Regelstrecke durch Nullstellen eines  
Kompensators (Pol-Nullstellen-Kompensation )
<!-- page-import:0910:end -->

<!-- page-import:0911:start -->
874 13. Regler

![Abb. 13.19. Regelung einer schwach gedämpften Strecke mit einem zusätzlichen Kompensator](image)

**Abb. 13.19.** Regelung einer schwach gedämpften Strecke mit einem zusätzlichen Kompensator

Die Wirkung des Kompensators lässt sich in der s-Ebene besonders anschaulich darstellen. Abbildung 13.17 zeigt die 3 Pole (Nullstellen des Nenners) der Beispielstrecke. Der Kompensator neutralisiert den Pol bei $\omega_{n2}$ durch eine Nullstelle und erzeugt einen zusätzlichen Pol bei $\omega_{n3}$, der aber für die Regelung der Strecke weniger störend ist, weil er bei höheren Frequenzen liegt.

Wir haben gesehen, dass ein Kompensator 1. Ordnung den D-Teil in einem PID-Regler ersetzen kann, der sich leicht dimensionieren lässt, wenn man die Übertragungsfunktion der Strecke kennt. Ein Kompensator ist aber viel wichtiger, wenn die Strecke nicht so gutmütig ist wie die bisher verwendete Beispielstrecke, sondern schwingungsfähige Pole besitzt. Eine derartige Strecke ergibt sich aus der bisherigen Beispielstrecke indem man die Pole bei den Frequenzen $\omega_{n2}$ und $\omega_{n3}$ zusammenfasst

$$
A_S = \frac{1}{1 + 1\,s_n}\cdot\frac{1}{1 + 0,1\,s_n}\cdot\frac{1}{1 + 0,01\,s_n}
= \frac{1}{1 + 1\,s_n}\cdot\frac{1}{1 + 0,11\,s_n + 0,001\,s_n^2}
$$

und dann die Polgüte von $Q = \sqrt{0,001}/0,11 = 0,3$ auf $Q = \sqrt{0,001}/0,003 = 10$ erhöht:

$$
A_S = \frac{1}{1 + 1\,s_n}\cdot\frac{1}{1 + 0,003\,s_n + 0,001\,s_n^2}
$$

Dadurch entsteht ein konjugiert komplexes Polpaar, das in Abb. 13.18 eingezeichnet ist. Eine derart schwach gedämpfte Strecke lässt sich mit einem PID-Regler nicht regeln. Man kann jedoch auch hier die unerwünschten Pole der Strecke durch Nullstellen eines Kompensators unwirksam machen. Allerdings erfordert ein Kompensator 2. Ordnung zur Realisierung auch mindestens 2 Pole. Damit diese Tiefpässe die Regelung möglichst wenig beeinträchtigen, ordnet man sie bei hohen Frequenzen, also kleiner Zeitkonstante an. Allerdings ist dem eine Grenze durch die damit verbundene Rauschanhebung gesetzt. Ein doppelter Pol bei $\omega_{n3} = 100$ erscheint als vernünftiger Kompromiss. Der Kompensator ersetzt also die schwach gedämpften komplexe Pole durch reelle stark gedämpfte Pole. Dies erkennt man auch an dem Blockdiagramm in Abb. 13.19, wenn man die Übertragungsfunktionen des Kompensators und der Strecke ausmultipliziert:

$$
A_K \cdot A_S = \frac{1}{1 + s_n}\cdot\frac{1}{1 + 0,01\,s_n}\cdot\frac{1}{1 + 0,01\,s_n}
$$

Die Strecke mit Resonanzstelle verhält sich demnach mit Kompensator wie die passive Beispielstrecke in Abb. 13.16 und lässt sich auch wie diese regeln. Das Bodediagramm in Abb. 13.20 zeigt die ausgeprägte Resonanzstelle der Strecke und ihre Annullierung durch den Kompensator. In der Sprungantwort in Abb. 13.21 erkennt man den Nutzen des
<!-- page-import:0911:end -->

<!-- page-import:0912:start -->
13.2 Regler-Typen 875

**Abb. 13.20.** Bodediagramm der Beispielstrecke mit einer Resonanzstelle bei $\omega_n = 30$

Kompensators am besten. Ohne Kompensator ist die P-Verstärkung in diesem Beispiel aus Stabilitätsgründen auf $A_P = 1$ beschränkt; ein D-Zusatz ist hier nicht möglich, da er die Stabilität zusätzlich beeinträchtigt.

## 13.2.5 Realisierung der Regler

Zur schaltungstechnischen Realisierung der Regler eignen sich die in Kapitel 10 beschriebenen Schaltungen. Damit ergibt sich der PID-Regler in Abb. 13.22 mit der angegebenen Übertragungsfunktion bei der Normierung $\omega_{g1}\, s_n = s$. Zur Dimensionierung der Schal-

**Abb. 13.21.** Regelung der Regelstrecke mit Resonanzstelle ohne Kompensator bzw. mit Kompensator bei der Dimensionierung von Abb. 13.19
<!-- page-import:0912:end -->

<!-- page-import:0913:start -->
876 13. Regler

$A_{Regler} \;=\; \dfrac{U}{E} \;=\; \dfrac{U_a}{U_e} \;=\; \dfrac{R_{PID}}{R_1}\left(1 + \dfrac{1}{R_I\,C_I\,\omega_{g1}\,s_n} + \dfrac{R_D\,C_D\,\omega_{g1}\,s_n}{1 + R_3\,C_D\,\omega_{g1}\,s_n}\right)$

**Abb. 13.22.** PID-Regler mit entkoppelt einstellbaren Parametern mit Dimensionierungsbeispiel.  
$\tau_n = R_I\,C_I =$ Nachstellzeit, $\tau_v = R_D\,C_D =$ Vorhaltezeit

tung macht man Koeffizientenvergleich mit der gewünschten Übertragungsfunktion des Reglers z.B. der in Abb. 13.15 und erhält nach Vorgabe von $\omega_{g1} = 1/\mathrm{sec}$, $C_I = 1\,\mu\mathrm{F}$, $C_D = 0{,}1\,\mu\mathrm{F}$ und $R_1 = 10\,\mathrm{k}\Omega$:

$$R_{PID}/R_1 \;=\; 20 \qquad \Rightarrow \qquad R_{PID} = 200\,\mathrm{k}\Omega$$

$$R_I\,C_I\,\omega_g \;=\; 1 \qquad \Rightarrow \qquad R_I = 1\,\mathrm{M}\Omega$$

$$R_D\,C_D\,\omega_g \;=\; 0{,}1 \qquad \Rightarrow \qquad R_D = 1\,\mathrm{M}\Omega$$

$$R_3\,C_D\,\omega_g \;=\; 0{,}01 \qquad \Rightarrow \qquad R_3 = 100\,\mathrm{k}\Omega$$

Bei der Dimensionierung der verschiedenen Reglertypen sind wir davon ausgegangen, dass die Daten der Regelstrecke bekannt sind. Wenn das nicht der Fall ist, kann man die optimale Einstellung des Reglers experimentell ermitteln. Den Abgleich des Reglers wollen wir anhand des Reglers in Abb. 13.22 erläutern: Zu Beginn schließt man den Schalter S, um den Integrator auszuschalten. Den Kondensator $C_D$ macht man zu Null; dann liefert auch der Differentiator keinen Beitrag, und die Schaltung arbeitet als reiner P-Regler. Dann gibt man ein Rechtecksignal auf den Eingang $W$ und betrachtet die Sprungantwort $Y$ des Regelkreises. Die verschiedenen Schritte der experimentellen Einstellung eines PID-Reglers sind im Zeitdiagramm in Abb. 13.23 und im Bode-Diagramm in Abb. 13.24 dargestellt.

- Im ersten Schritt erhöht man die P-Verstärkung mit $A_{PID}$ so weit, bis der Einschwingvorgang nur noch schwach gedämpft ist.
- Im zweiten Schritt vergrößert man $C_D$, um die Differentiationsgrenzfrequenz auf einen Wert zu reduzieren, bei dem die gewünschte Dämpfung erreicht wird. Dabei wählt man meist $R_3 = R_D/10$, um die Verstärkung des Differentiators auf $A_D = 10$ zu begrenzen.
<!-- page-import:0913:end -->

<!-- page-import:0914:start -->
13.2 Regler-Typen 877

**Abb. 13.23.** Experimentelle Einstellung eines PID-Reglers anhand der Sprungantwort. Zuerst wird die P-Verstärkung erhöht, dann werden die D-Frequenzen erniedrigt und zuletzt wird die I-Frequenz erhöht.

Bei kleineren Werten wird die Wirkung des Differentiators zu schwach, bei größeren wird das Rauschen im Regelkreis unnötig stark angehoben.
– Im dritten Schritt öffnet man den Schalter S und reduziert die Integrationszeitkonstante mit $R_I$ so weit, dass der Einschwingvorgang möglichst schnell auf den Endwert geht und weder von unten noch von oben dorthin kriecht.

Ein Kompensator lässt sich am einfachsten mit dem Filter in Abb. 12.74 realisieren, weil sich dort die Filterparameter direkt auf Schaltungsparameter abbilden lassen. Die Dimensionierung der Schaltung soll an dem Beispiel in Abb. 13.18 gezeigt werden. Die Übertragungsfunktion des dort benötigten Kompensators ist:

$$
A_K \;=\; \frac{1 + 0.003\,s_n + 0{,}001\,s_n^2}{(1 + 0{,}01\,s_n)^2}
\;=\;
\frac{1 + 0.003\,s_n + 0{,}001\,s_n^2}{1 + 0{,}02\,s_n + 0{,}0001\,s_n^2}
$$

(13.9)

Der Koeffizientenvergleich mit der Übertragungsfunktion des Filters ergibt bei der Grenzfrequenz im Beispiel $\omega_{g1} = 1/\sec$ und nach Vorgabe von $\tau = RC = 10\ \mathrm{msec}$ und $C = 100\,\mathrm{nF}$:

**Abb. 13.24.** Der experimentelle Abgleich im Bodediagramm. Zuerst wird die P-Verstärkung erhöht, dann werden die D-Frequenzen erniedrigt und zuletzt wird die I-Frequenz erhöht.
<!-- page-import:0914:end -->
