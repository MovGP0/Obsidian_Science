# Measurement Rectifiers

<!-- page-import:1101:start -->
1064  18. Messschaltungen

## 18.3 Messgleichrichter (AC/DC-Converter)

Zur Charakterisierung von Wechselspannungen werden verschiedene Kenngrößen verwendet: der arithmetische Mittelwert des Betrages und der Effektivwert sowie positiver und negativer Scheitelwert.

### 18.3.1 Messung des Betragsmittelwertes

Zur Betragsbildung einer Wechselspannung benötigt man eine Schaltung, deren Verstärkungsvorzeichen in Abhängigkeit von der Polarität der Eingangsspannung umgeschaltet wird. Ihre Übertragungskennlinie muss also die in Abb. 18.26 dargestellte Form besitzen.

Eine solche Vollweggleichrichtung kann man durch Brückenschaltung von Dioden realisieren. Die erzielbare Genauigkeit ist wegen der Durchlassspannung der Dioden jedoch begrenzt. Dieser Effekt lässt sich beseitigen, indem man den Brückengleichrichter mit einer gesteuerten Stromquelle betreibt. Eine einfache Möglichkeit dazu ist in Abb. 18.27 dargestellt. Der Operationsverstärker wird als spannungsgesteuerte Stromquelle gemäß Abb. 11.11 von S. 771 betrieben. Dadurch wird unabhängig von der Durchlassspannung der Dioden:

$$
I_A = \frac{|U_e|}{R}
$$

Zur Anzeige des Mittelwertes dieses Stromes kann man z.B. ein Drehspulamperemeter einsetzen. Deshalb wird das Verfahren häufig in Analogmultimetern eingesetzt.

Für Ausgangspotentiale im Bereich $-2U_D < V_a < 2U_D$ ist der Verstärker nicht gegengekoppelt, da sämtliche Dioden sperren. In der Zeit, während der $V_a$ von $2U_D$ auf $-2U_D$ springt, ändert sich $V_N$ nicht. Dies ist eine Totzeit im Regelkreis. Eine Totzeit kann aber je nach Frequenz beliebige Phasenverschiebungen verursachen. Das macht bei der Stabilisierung des Operationsverstärkers besondere Schwierigkeiten. Man wählt Verstärker mit einer hohen Anstiegsgeschwindigkeit der Ausgangsspannung und Dioden mit niedriger Durchlassspannung; dies verringert die Totzeit. Außerdem muss man die Frequenzkorrektur kräftiger dimensionieren als bei linearer Gegenkopplung.

$U_a = |U_e|$

**Abb. 18.26.**  
Kennlinie eines Einweg- und eines Vollweggleichrichters

$I_A = |U_e|/R$

**Abb. 18.27.**  
Vollweggleichrichter für erdfreie Anzeigeinstrumente
<!-- page-import:1101:end -->

<!-- page-import:1102:start -->
18.3 Messgleichrichter (AC/DC-Converter) 1065

**Abb. 18.28.** Vollweggleichrichter mit auf Masse bezogenen Ausgang

#### 18.3.1.1 Vollweggleichrichter mit Signalausgang

Bei der vorhergehenden Gleichrichterschaltung muss der Verbraucher (das Messwerk) potentialfrei betrieben werden. Wenn das Signal weiterverarbeitet (z.B. digitalisiert) werden soll, benötigt man jedoch eine Ausgangsspannung, die auf Masse bezogen ist. Dazu kann man mit einem Operationsverstärker eine ideale Diode realisieren, die man wie in Abb. 18.28 zu einem Vollweggleichrichter ergänzen kann.

Zunächst wollen wir die Wirkungsweise von OV 1 untersuchen. Bei positiven Eingangsspannungen arbeitet er als Umkehrverstärker. In diesem Fall ist nämlich $V_2$ negativ, d.h. die Diode $D_1$ leitet, und $D_2$ sperrt. Dadurch wird $V_1 = -U_e$. Bei negativen Eingangsspannungen wird $V_2$ positiv. $D_1$ sperrt in diesem Fall; $D_2$ wird leitend und koppelt den Verstärker gegen. Sie verhindert, dass OV 1 übersteuert wird; daher bleibt der Summationspunkt auf Nullpotential. Da $D_1$ sperrt, wird $V_1$ ebenfalls Null. Zusammenfassend gilt also:

$$
V_1 = \left\{
\begin{array}{ll}
-U_e & \text{für } U_e \geq 0 \\
0 & \text{für } U_e \leq 0
\end{array}
\right.
$$

(18.7)

Der Verstärker OV 1 arbeitet demnach als invertierender Einweggleichrichter.

Die Erweiterung zum Vollweggleichrichter erfolgt durch den Verstärker OV 2. Er bildet den Ausdruck:

$$
U_a = -(U_e + 2V_1)
$$

(18.8)

Mit (18.7) folgt daraus:

$$
U_a = \left\{
\begin{array}{ll}
U_e & \text{für } U_e \geq 0 \\
-U_e & \text{für } U_e \leq 0
\end{array}
\right.
$$

(18.9)

**Abb. 18.29.**  
Spannungsverlauf bei sinusförmiger  
Eingangsspannung
<!-- page-import:1102:end -->

<!-- page-import:1103:start -->
1066  18. Messschaltungen

**Abb. 18.30.**  
Gleichrichtung durch Umschalten des Vorzeichens: $U_a = |U_e|$

**Abb. 18.31.**  
Praktische Ausführung der Gleichrichtung mit Verstärkungsumschaltung

Dies ist die gewünschte Funktion eines Vollweggleichrichters. Ihr Zustandekommen wird durch Abb. 18.29 verdeutlicht.

Mit Hilfe des Kondensators $C$ lässt sich der Verstärker OV 2 zum Tiefpass 1. Ordnung erweitern. Wenn man seine Grenzfrequenz klein gegenüber der niedrigsten Signalfrequenz wählt, erhält man am Ausgang eine reine Gleichspannung mit dem Wert:

$$
U_a = \overline{|U_e|}
$$

Der Verstärker OV 1 muss wie bei der vorhergehenden Schaltung eine hohe Anstiegsgeschwindigkeit besitzen, um die Totzeit beim Übergang von einer Diode auf die andere möglichst klein zu halten.

#### 18.3.1.2 Gleichrichtung durch Umschalten des Vorzeichens

In (18.9) erkennt man, dass ein Vollweggleichrichter für positive Spannungen die Verstärkung $A = +1$ und für negative Spannungen $A = -1$ besitzt. Diese Funktion lässt sich auch direkt realisieren, indem man einen Verstärker einsetzt, dessen Verstärkung sich von $+1$ auf $-1$ umschalten lässt, und die Umschaltung vom Vorzeichen der Eingangsspannung steuert. Dieses Prinzip ist in Abb. 18.30 dargestellt. Bei positiven Eingangsspannungen wird der nicht-invertierende Eingang des Verstärkers benutzt, bei negativen Eingangsspannungen schaltet der Komparator den Schalter auf den invertierenden Eingang um. Dieses Prinzip wird z.B. beim AD 630 verwendet, dessen Aufbau in Abb. 18.31 dargestellt ist.

#### 18.3.1.3 Breitband-Vollweggleichrichter

Bei einem Differenzverstärker steht von Hause aus ein invertierender und ein nicht invertierender Ausgang zur Verfügung. Er kann demnach als schneller Vollweggleichrichter benutzt werden. Dazu wird mit den beiden parallel geschalteten Emitterfolgern $T_3/T_4$ in Abb. 18.32 das jeweils positivere Kollektorpotential an den Ausgang übertragen. Mit der Z-Diode wird das Kollektor-Ruhe-Potential kompensiert, damit das Ausgangs-Ruhe-Potential Null wird.

Dasselbe Prinzip zur Vollweggleichung lässt sich vorteilhaft auch mit CC-Operationsverstärkern realisieren. Die Schaltung in Abb. 18.33 beruht auf dem Differenzverstärker von Abb. 5.130 auf S. 606. Von den gegensinnigen Ausgangsströmen wird jeweils der positive über die Dioden $D_3$ bzw. $D_4$ zum Widerstand $R_2$ geleitet. Die Dioden $D_1$ und
<!-- page-import:1103:end -->

<!-- page-import:1104:start -->
18.3 Messgleichrichter (AC/DC-Converter) 1067

**Abb. 18.32.** Breitband-Vollweg-Gleichrichter

$U_a = |U_e|$

$U_a = |I|R_2 = \frac{R_2}{R_1}|U_e|$

**Abb. 18.33.** Differenzverstärker aus CC-Operationsverstärkern zur Vollweg-Gleichrichtung

$D_2$ leiten negative Ströme nach Masse ab, um die Verstärker nicht zu übersteuern. Die 4 Dioden lassen sich als Brückengleichrichter aus Schottky-Dioden realisieren. Zu dem Widerstand $R_2$ kann man einen Kondensator parallelschalten, um den Mittelwert zu bilden. Der Verstärker $T_3$ dient als Impedanzwandler.

## 18.3.2 Messung des Effektivwertes

Im Unterschied zum arithmetischen Betragsmittelwert (Average Absolute Value, Mean Modulus)

$$\overline{|U|} = \frac{1}{T}\int_0^T |U|\,dt \qquad (18.10)$$

ist der Effektivwert als quadratischer Mittelwert definiert (Root Mean Square Value, RMS):

$$U_{\mathrm{eff}} = \sqrt{\overline{(U^2)}} = \sqrt{\frac{1}{T}\int_0^T U^2\,dt} \qquad (18.11)$$
<!-- page-import:1104:end -->

<!-- page-import:1105:start -->
1068 18. Messschaltungen

**Abb. 18.34.**  
Relative Größe von Scheitelwert, Effektivwert und Betragsmittelwert bei einer Sinusschwingung

Darin ist $T$ die Messdauer. Man wählt sie groß gegenüber der größten im Signal enthaltenen Schwingungsdauer. Dann ergibt sich eine messzeitunabhängige Anzeige. Bei streng periodischen Funktionen genügt die Mittelung über eine Periode, um das gewünschte Ergebnis zu erhalten.

Bei sinusförmigen Wechselspannungen gilt:

$$
U_{\mathrm{eff}}=\hat U/\sqrt{2}
$$

Man könnte demnach die Effektivwertmessung auf eine Scheitelwertmessung zurückführen. Bei anderen Kurvenformen treten bei diesem Verfahren beliebig große Fehler auf, insbesondere bei Spannungen mit hohen Spitzen, d.h. großem Crest-Faktor $\hat U/U_{\mathrm{eff}}$.

Geringere Abweichungen ergeben sich, wenn man die Effektivwertmessung auf eine Betragsmittelwertmessung zurückführt. Bei sinusförmigem Verlauf gilt:

$$
\overline{|U|}=\frac{\hat U}{T}\int_0^T |\sin \omega t|dt=\frac{2}{\pi}\hat U
$$

(18.12)

Mit $U_{\mathrm{eff}}=\hat U/\sqrt{2}$ folgt daraus der Zusammenhang:

$$
U_{\mathrm{eff}}=\frac{\pi}{2\sqrt{2}}\overline{|U|}\approx 1{,}11\cdot \overline{|U|}
$$

(18.13)

Die Größenverhältnisse werden durch Abb. 18.34 verdeutlicht. Der Formfaktor 1,11 ist bei den meisten handelsüblichen Betragsmittelwertmessern bereits eingeicht. Sie zeigen für sinusförmigen Verlauf also den Effektivwert an, obwohl sie in Wirklichkeit den Betragsmittelwert messen. Bei anderen Kurvenformen treten durch diese unechte Messung mehr oder weniger große Abweichungen vom wahren Effektivwert auf. Bei dreieckigem Verlauf ergibt sich $U_{\mathrm{eff}}=(2/\sqrt{3})\overline{|U|}$ und bei weißem Rauschen $U_{\mathrm{eff}}=\sqrt{\pi/2}\,\overline{|U|}$. Bei Gleichspannung ist $U_{\mathrm{eff}}=\overline{|U|}$. Es ergeben sich demnach in Abhängigkeit von der Kurvenform folgende Abweichungen:

Sinus: Anzeige richtig  
Gleichstrom, Rechteck: Anzeige um 11% zu groß,  
Dreieck: Anzeige um 4% zu klein,  
weißes Rauschen: Anzeige um 11% zu klein.
<!-- page-import:1105:end -->

<!-- page-import:1106:start -->
18.3 Messgleichrichter (AC/DC-Converter) 1069

**Abb. 18.35.** Messung des Effektivwertes mit Rechenschaltungen

## 18.3.2.1 Echte Effektivwertmessung (True RMS)

Zur echten, Kurvenform-unabhängigen Effektivwertmessung kann man entweder die Definitionsgleichung (18.11) heranziehen oder eine Leistungsmessung durchführen. Nach (18.11) arbeitet die Schaltung in Abb. 18.35. Zur Mittelwertbildung der quadrierten Eingangsspannung wird dabei ein einfacher Tiefpass 1. Ordnung verwendet, dessen Grenzfrequenz klein gegenüber der niedrigsten Signalfrequenz gewählt wird.

Ein Nachteil der Schaltung besteht in ihrem kleinen Dynamikbereich: Wenn man z.B. eine Eingangsspannung von 10 mV anlegt, erhält man mit der üblichen Recheneinheit von 10 V am Ausgang des Quadrierers eine Spannung von 10 $\mu$V. Dieser Wert geht aber bereits im Rauschen des Radizierers unter.

In dieser Beziehung ist die Schaltung in Abb. 18.36 günstiger. Bei ihr wird das Wurzelziehen am Ausgang durch eine Division am Eingang ersetzt. Am Ausgang des Tiefpassfilters tritt demnach die Spannung

$$
U_a=\frac{\overline{U_e^2}}{U_a}
$$

auf. Im eingeschwungenen Zustand ist $U_a$ konstant. Daraus folgt:

$$
U_a=\frac{\overline{U_e^2}}{U_a}\ \ \text{also}\ \ U_a=\sqrt{\overline{U_e^2}}=U_{\mathrm{eff}}
\qquad (18.14)
$$

Der Vorteil dieser Methode besteht darin, dass die Eingangsspannung $U_e$ nicht mit dem Faktor $U_e/E$ multipliziert wird, der bei kleinen Eingangsspannungen klein gegenüber Eins ist, sondern mit dem Faktor $U_e/U_a$, der in der Größenordnung von Eins liegt. Dadurch ergibt sich ein wesentlich größerer Dynamikbereich. Die Voraussetzung dafür ist allerdings, dass die Division $U_e/U_a$ auch bei kleinen Signalen mit guter Genauigkeit erfolgt. Dazu eignen sich solche Dividierer am besten, die über Logarithmen arbeiten wie wir sie in Kapitel 10.8.1 auf S. 761 beschrieben haben.

Die implizite Lösung der (18.14) erfolgt dann nach dem in Abb. 18.37 dargestellten Prinzip. Vor der Logarithmierung muss man zunächst den Betrag der Eingangsspannung bilden. Die Quadrierung erfolgt einfach durch Multiplikation des Logarithmus mit zwei. Zur Division durch $U_a$ wird die logarithmierte Ausgangsspannung abgezogen.

**Abb. 18.36.** Effektivwertmesser mit erhöhtem Dynamikbereich
<!-- page-import:1106:end -->

<!-- page-import:1107:start -->
1070  18. Messschaltungen

Abb. 18.37. Rechnerische Ermittlung des Effektivwerts über Logarithmen

Die praktische Ausführung dieses Prinzips ist in Abb. 18.38 dargestellt. Am Summationspunkt von OV2 ergibt sich das vollweggleichgerichtete Eingangssignal. Der Operationsverstärker OV2 logarithmiert die Eingangsspannung. Die zum Quadrieren erforderliche Spannungsverdopplung wird mit den beiden in Reihe geschalteten Transistoren T$_1$ und T$_2$ erreicht:

$$
V_2 = -2U_T \ln \frac{U_e}{I_{C0}R} = -U_T \ln \left(\frac{U_e}{I_{C0}R}\right)^2
$$

OV4 logarithmiert die Ausgangsspannung:

$$
V_4 = -U_T \ln \frac{U_a}{I_{C0}R}
$$

Die an T$_3$ zur Bildung der Exponentialfunktion wirksame Spannung $V_4 - V_2$ ergibt die Ausgangsspannung:

$$
U_a = I_{CS}R \exp \frac{V_4 - V_2}{U_T} = \frac{U_e^2}{U_a}
\qquad (18.15)
$$

Mit dem Kondensator $C$ zur Mittelwertbildung ergibt sich also dieselbe Ausgangsspannung wie nach (18.14).

Die Transistoren T$_1$ bis T$_4$ müssen monolithisch integriert sein, damit sie – wie bei der Rechnung vorausgesetzt – gleiche Daten besitzen.

$$
U_a = \sqrt{\overline{U_e^2}} = U_{e\ \mathrm{eff}}
$$

Abb. 18.38. Praktische Ausführung der Effektivwert-Berechnung
<!-- page-import:1107:end -->

<!-- page-import:1108:start -->
18.3 Messgleichrichter (AC/DC-Converter) 1071

Abb. 18.39. Effektivwertmesser mit thermischer Umformung

#### 18.3.2.2 Leistungsmesser

Nach der Definition ist der Effektivwert einer Wechselspannung diejenige Gleichspannung, die dieselbe mittlere Leistung in einem Widerstand erzeugt. Es gilt also:

$$\overline{U_e^2}/R \;=\; U_a^2/R \;=\; U_{e\,\mathrm{eff}}^2/R$$

Der Effektivwert einer Wechselspannung $U_e$ lässt sich demnach dadurch bestimmen, dass man eine Gleichspannung $U_a$ an einem Widerstand $R$ solange erhöht, bis er genauso heiß wird wie der von $U_e$ erwärmte. Auf diesem Prinzip beruht die thermische Messung des Effektivwerts. Zur Temperaturmessung kann man im Prinzip jede beliebige Methode (s. Kap. 19.1) heranziehen. Besonders vorteilhaft ist der Einsatz von Temperaturfühlern, die sich zusammen mit den Heizwiderständen als integrierte Schaltung herstellen lassen. Deshalb verwendet man heutzutage meist Dioden als Temperaturfühler, wie es in Abb. 18.39 dargestellt ist.

Der Widerstand $R_1$ wird von der Eingangsspannung erwärmt, der Widerstand $R_2$ von der Ausgangsspannung. Die Ausgangsspannung steigt so lange an, bis die Differenz der beiden Diodenspannungen Null wird, beide Temperaturen also übereinstimmen. Als Regelverstärker dient hier der als P-Regler beschaltete Operationsverstärker. Die Kondensatoren $C_1$ halten hochfrequente Signale von dem Operationsverstärker fern.

Die Diode am Ausgang des Regelverstärkers verhindert, dass der Widerstand $R_2$ mit einer negativen Spannung geheizt wird, da sonst ein Latch-up infolge thermischer Mitkopplung auftreten würde.

Da die Heizleistung proportional zum Quadrat von $U_a$ ist, ergibt sich eine zu $U_a$ proportionale Schleifenverstärkung. Dieser Effekt führt zu einer nichtlinearen Sprungantwort: Die Abschaltzeitkonstante ist wesentlich größer als die Einschaltzeitkonstante. Eine wesentliche Verbesserung lässt sich durch eine zusätzliche quadratische Gegenkopplung erzielen.

Die Widerstände $R_1$ und $R_2$ werden meist niederohmig ausgeführt (50 $\Omega$), um eine hohe Bandbreite zu erreichen. Deshalb sind entsprechend große Ströme zur Ansteuerung erforderlich. Um genaue Messergebnisse zu erreichen, müssen die beiden Messpaare gute Gleichlaufeigenschaften besitzen. Mit der thermischen Umformung lassen sich auf einfache Weise Leistungen und Spannungen für Frequenzen bis über 50 GHz messen, weil
<!-- page-import:1108:end -->

<!-- page-import:1109:start -->
1072  18. Messschaltungen

**Abb. 18.40.** Scheitelwertmesser

lediglich der Eingangswiderstand für diese Frequenz ausgelegt sein muss. Die Leistung wir dabei meist als Vielfaches von 1 mW in dBm angegeben. Der Zusammenhang ist:

$$
P\,[\mathrm{dBm}] = 10\ \mathrm{dBm}\ \lg \frac{P}{1\,\mathrm{mW}} = 20\ \mathrm{dBm}\ \lg \frac{U}{0{,}224\,\mathrm{V}}
\qquad (18.16)
$$

Er wird auf Seite 1736 genauer erklärt.

## 18.3.3 Messung des Scheitelwertes

Eine Scheitelwertmessung lässt sich ganz einfach dadurch realisieren, dass man einen Kondensator über eine Diode auflädt. Zur Elimination der Durchlassspannung kann man die Diode wie in Abb. 18.40 in die Gegenkopplung eines Spannungsfolgers legen. Solange die Eingangsspannung $U_e < V_C$ ist, sperrt die Diode D. Für $U_e > V_C$ leitet die Diode, und über die Gegenkopplung wird $V_C = U_e$. Aufgrund dieser Eigenschaft lädt sich der Kondensator $C$ auf den Spitzenwert der Eingangsspannung auf. Der nachgeschaltete Spannungsfolger belastet den Kondensator nur wenig, so dass der Spitzenwert über längere Zeit gespeichert werden kann. Über den Schalter T lässt sich der Kondensator für eine neue Messung entladen.

Durch die kapazitive Belastung neigt der Verstärker OV1 zum Schwingen. Dieser Effekt wird durch den Schutzwiderstand $R_1$ beseitigt. Dadurch vergrößert sich allerdings die Einstellzeit, da sich die Kondensatorspannung nur asymptotisch dem stationären Wert nähert. Ein weiterer Nachteil der Schaltung besteht darin, dass OV1 für $U_e < V_C$ übersteuert wird. Die dadurch auftretende Erholzeit begrenzt den Einsatz der Schaltung auf niedrige Frequenzen.

Beide Nachteile werden bei dem Scheitelwertmesser nach Abb. 18.41 vermieden. OV1 wird hier invertierend betrieben. Wenn $U_e$ über den Wert $-V_C$ ansteigt, wird $V_1$ negativ, und die Diode $D_1$ leitet. Durch die Gegenkopplung über beide Verstärker stellt sich $V_1$ so ein, dass $U_a = -U_e$ wird. Neben der Durchlassspannung der Diode $D_1$ wird dabei auch die Offsetspannung des Impedanzwandlers OV2 eliminiert. -- Nimmt die Eingangsspannung wieder ab, steigt $V_1$ an. Dadurch sperrt die Diode $D_1$ und trennt die Gegenkopplung über

**Abb. 18.41.** Verbesserter Scheitelwertmesser
<!-- page-import:1109:end -->

<!-- page-import:1110:start -->
## 18.3 Messgleichrichter (AC/DC-Converter) 1073

**Abb. 18.42.** Scheitelwertmesser mit Abtast-Halte-Glied

$R_2$ auf. $V_1$ steigt aber nur soweit an, bis die Diode D$_2$ leitend wird und den Verstärker OV1 gegenkoppelt. Dadurch wird die Übersteuerung vermieden.

Der invertierte positive Scheitelwert von $U_e$ bleibt auf dem Kondensator $C$ gespeichert, da dieser weder über D$_1$ noch über den Spannungsfolger OV2 entladen wird. Nach beendeter Messung lässt sich der Kondensator $C$ über den Schalter T entladen. Zur Messung negativer Scheitelwerte polt man die Dioden um.

Eine andere Möglichkeit, einen Scheitelwertmesser zu realisieren, besteht darin, ein Abtast-Halte-Glied einzusetzen und das Abtast-Kommando im richtigen Augenblick zu geben. Dazu kann man, wie in Abb. 18.42 dargestellt, einfach einen Komparator einsetzen, der feststellt, wann die Eingangsspannung größer als die Ausgangsspannung ist, und in dieser Zeit den Schalter S des Abtast-Halte-Gliedes schließen. Dann folgt das Ausgangssignal dem Eingangssignal, solange es steigt, und bleibt gespeichert, wenn es wieder sinkt. Die Ausgangsspannung steigt erst dann weiter an, wenn die Eingangsspannung das zuletzt gespeicherte Maximum überschreitet. Ein Beispiel für die Funktionsweise ist in Abb. 18.43 dargestellt. Zur Realisierung der Schaltung kann man das Abtast-Halte-Glied von Abb. 17.61 auf S. 1046 verwenden.

### 18.3.3.1 Momentane Scheitelwertmessung

Zur kontinuierlichen Scheitelwertmessung kann man bei den beschriebenen Verfahren den Schalter T durch einen hochohmigen Widerstand ersetzen. Man dimensioniert ihn so, dass zwischen zwei Spannungsmaxima noch keine wesentliche Entladung des Kondensators $C$ auftritt. Diese Methode bringt allerdings den Nachteil mit sich, dass eine Amplitudenabnahme nur sehr langsam registriert wird.

**Abb. 18.43.** Zeitlicher Verlauf der Signale im Scheitelwertmesser mit Abtast-Halte-Glied
<!-- page-import:1110:end -->

<!-- page-import:1111:start -->
1074  18. Messschaltungen

Abb. 18.44. Schaltung zur momentanen Scheitelwertmessung von sinusförmigen Signalen

Für manche Anwendungen, insbesondere in der Regelungstechnik, kommt es darauf an, die Amplitude mit möglichst kurzer Verzögerungszeit zu bestimmen. Bei den beschriebenen Verfahren beträgt die Messzeit jedoch mindestens eine Periode des Eingangssignals. Bei sinusförmigen Signalen kann man jedoch in jedem Augenblick die Amplitude gemäß der trigonometrischen Beziehung

$$
\hat U=\sqrt{\hat U^2\sin^2\omega t+\hat U^2\cos^2\omega t}
$$

berechnen. (18.17)

Bei der Messung einer unbekannten sinusförmigen Spannung muss man die $\cos \omega t$-Funktion aus dem Eingangssignal bilden. Dazu kann man einen Differentiator verwenden. An seinem Ausgang ergibt sich:

$$
V_1(t)=-RC\frac{dU_e(t)}{dt}=-\hat U_eRC\frac{d\sin \omega t}{dt}=-\hat U_e\omega RC\cos \omega t
$$

(18.18)

Bei bekannter Frequenz kann man den Koeffizienten $\omega RC$ auf den Wert 1 einstellen. Damit steht der gesuchte Term für die weitere Rechnung nach (18.17) zur Verfügung. Durch Quadrieren und Addieren von $U_e(t)$ und $V_1(t)$ erhalten wir demnach eine kontinuierliche Amplitudenanzeige, für die keine Filterung notwendig ist.

Bei variabler Frequenz muss man das Verfahren wie in Abb. 18.44 um einen Integrator erweitern, um einen $\cos^2\omega t$-Ausdruck mit frequenzunabhängiger Amplitude zu gewinnen. Das Ausgangspotential des Integrators beträgt:

$$
V_2(t)=-\frac{1}{RC}\int U_e(t)\,dt=-\frac{1}{RC}\int \hat U_e\sin \omega t\,dt=\frac{\hat U_e}{\omega RC}\cos \omega t
$$

(18.19)

Die Integrationskonstante wird dabei mit Hilfe des Widerstandes $R_p$ im eingeschwungenen Zustand zu Null gemacht. Durch Multiplikation von $V_1$ und $V_2$ erhalten wir den gesuchten Ausdruck:

$$
V_3(t)=-\frac{\hat U_e^2}{E}\cos^2 \omega t
$$
<!-- page-import:1111:end -->

<!-- page-import:1112:start -->
18.3 Messgleichrichter (AC/DC-Converter) 1075

Abb. 18.45. Einsatz eines Synchrongleichrichters zur Messung verrauschter Signale. Für Frequenzen bis 350 kHz ist der Balanced Modulator/Demodulator AD630 besonders geeignet.

Durch Bildung der Differenz $V_4 - V_3$ und Wurzelziehen ergibt sich die Ausgangsspannung $U_a = \hat U_e$. Sie ist also in jedem Augenblick gleich dem Scheitelwert der Eingangsspannung. Bei steilen Amplitudenänderungen treten vorübergehende Abweichungen auf bis der Integrator wieder auf Mittelwert Null eingeschwungen ist. Die Änderung der Ausgangsspannung erfolgt jedoch sofort in der richtigen Richtung, so dass z.B. ein angeschlossener Regelverstärker schon mit sehr geringer Verzögerung eine Trendmeldung erhält.

## 18.3.4 Synchrongleichrichter

Bei einem Synchrongleichrichter wird das Vorzeichen der Verstärkung nicht durch die Polarität der Eingangsspannung umgeschaltet wie in Abb. 18.30, sondern durch eine externe Steuerspannung $U_{St}(t)$, die mit dem interessierenden Signal korreliert ist. Für diese Aufgabe ist ein Verstärker nützlich, dessen Vorzeichen der Verstärkung sich umschalten lässt wie z.B. bei dem AD630.

Ein Synchrongleichrichter kann in der Messanordnung gemäß Abb. 18.45 dazu benutzt werden, aus einem stark verrauschten Signal die Amplitude derjenigen Schwingung zu bestimmen, deren Frequenz gleich der Steuerfrequenz ist, und deren Phasenlage $\varphi$ zum Steuersignal konstant ist. Der Sonderfall $f_e = f_{St}$ und $\varphi = 0$ ist in Abb. 18.46 dargestellt. Man erkennt, dass der Synchrongleichrichter hier wie ein Vollweggleichrichter wirkt. Wenn $\varphi \neq 0$ ist oder $f_e \neq f_{St}$, treten neben den positiven Flächen auch negative Flächen auf. Der Mittelwert der Ausgangsspannung ist in diesen Fällen also immer kleiner als im eingezeichneten Fall.

Die Abhängigkeit der Ausgangsspannung von der Frequenz und der Phasenlage wollen wir im folgenden berechnen. Die Eingangsspannung $U_e$ wird im Rhythmus der Steuer-

Abb. 18.46. Wirkungsweise eines Synchrongleichrichters
<!-- page-import:1112:end -->

<!-- page-import:1113:start -->
1076  18. Messschaltungen

frequenz $f_{\mathrm{St}}$ mit $+1$ bzw. $-1$ multipliziert. Dieser Sachverhalt lässt sich mathematisch folgendermaßen darstellen:

$$
U_a = U_e(t)\cdot S(t)
$$

(18.20)

Dabei ist:

$$
S(t)=
\begin{cases}
1 & \text{für } U_{\mathrm{St}} > 0\\
-1 & \text{für } U_{\mathrm{St}} < 0
\end{cases}
$$

Durch Fourier-Reihenentwicklung folgt daraus:

$$
S(t)=\frac{4}{\pi}\sum_{n=0}^{\infty}\frac{1}{2n+1}\sin(2n+1)\omega_{\mathrm{St}}t
$$

(18.21)

Nun denken wir uns als Eingangsspannung eine sinusförmige Wechselspannung mit der Frequenz $f_e=m\cdot f_{\mathrm{St}}$, und der Phasenverschiebung $\varphi_m$ gegenüber der Steuerspannung. Dann ergibt sich mit (18.20) und (18.21) die Ausgangsspannung

$$
U_a(t)=\hat{U}_e\sin(m\omega_{\mathrm{St}}t+\varphi_m)\cdot \frac{4}{\pi}\sum_{n=0}^{\infty}\frac{1}{2n+1}\sin(2n+1)\omega_{\mathrm{St}}t
$$

(18.22)

Von dieser Spannung wird mit dem nachgeschalteten Tiefpassfilter der arithmetische Mittelwert gebildet. Mit der Hilfsformel

$$
\frac{1}{T}\int_0^T \sin(m\omega_{\mathrm{St}}t+\varphi_m)=0
$$

und der Orthogonalitätsrelation

$$
\frac{1}{T}\int_0^T \sin(m\omega_{\mathrm{St}}t+\varphi_m)\sin l\omega_{\mathrm{St}}t\,dt=
\begin{cases}
0 & \text{für } m\neq l\\
\frac{1}{2}\cos\varphi_m & \text{für } m=l
\end{cases}
$$

folgt damit aus (18.22) das Ergebnis:

$$
\overline{U}_a=
\begin{cases}
\frac{2}{\pi}\frac{\hat{U}_e}{m}\cdot \cos\varphi_m & \text{für } m=2n+1\\
0 & \text{für } m\neq 2n+1
\end{cases}
$$

(18.23)

Darin ist $n=0,1,2,3\ldots$

Ist die Eingangsspannung ein beliebiges Frequenzgemisch, liefern nur diejenigen Anteile einen Beitrag zur gemittelten Ausgangsspannung, deren Frequenz gleich oder gleich einem ungeraden Vielfachen der Steuerfrequenz ist. Deshalb ist der Synchrongleichrichter zur selektiven Amplitudenmessung geeignet. Da der Mittelwert der Ausgangsspannung außerdem von der Phasenverschiebung zwischen der betreffenden Komponente der Eingangsspannung und der Steuerspannung abhängt, bezeichnet man den Synchrongleichrichter auch als phasenempfindlichen Gleichrichter.

Für $\varphi_m=90^\circ$ wird $\overline{U}_a$ auch dann gleich Null, wenn die Frequenzbedingung erfüllt ist. In unserem Beispiel in Abb. 18.46 war $m=1$ und $\varphi_m=0$. In diesem Fall erhalten wir aus (18.23):

$$
\overline{U}_a=\frac{2}{\pi}\hat{U}_e
$$
<!-- page-import:1113:end -->

<!-- page-import:1114:start -->
18.3 Messgleichrichter (AC/DC-Converter) 1077

Abb. 18.47. Filtercharakteristik eines Synchrongleichrichters

Dies ist aber gerade der arithmetische Mittelwert einer vollweggleichgerichteten Sinusspannung. Dieses Ergebnis konnten wir schon unmittelbar aus Abb. 18.46 entnehmen.

Mit (18.23) haben wir gezeigt, dass nur die Spannungen zur Ausgangsspannung beitragen, deren Frequenz gleich oder gleich einem ungeradzahligen Vielfachen der Steuerfrequenz ist. Das gilt jedoch nur, wenn die Zeitkonstante des Tiefpassfilters unendlich groß ist. In der Praxis wäre das aber nicht realisierbar und auch gar nicht wünschenswert, denn dann würde die obere Grenzfrequenz gleich Null; die Ausgangsspannung könnte sich also zeitlich überhaupt nicht ändern. Ist $f_g > 0$, siebt der Synchron-Gleichrichter nicht mehr diskrete Frequenzen, sondern einzelne Frequenzbänder aus seiner Eingangsspannung heraus. Die Bandbreite dieser Frequenzbänder ist gleich $2f_g$. Abbildung 18.47 veranschaulicht diese Filtercharakteristik.

Den meist unerwünschten Beitrag der ungeradzahligen Oberschwingungen kann man beseitigen, indem man statt des Schalters einen Analogmultiplizierer als Synchrongleichrichter benutzt. Dann kann man die Eingangsspannung statt mit einer Rechteckfunktion $S(t)$ mit einer Sinusfunktion $U_\mathrm{St}=\hat{U}_\mathrm{St}\sin \omega t$ multiplizieren. Da diese Sinusfunktion keine Oberschwingungen enthält, gilt die (18.23) nur noch für $n=0$. Wenn wir die Amplitude der Steuerspannung gleich der Recheneinheit $E$ des Multiplizierers wählen, ergibt sich statt (18.23) das Ergebnis:

$$
\overline{U}_a=
\begin{cases}
\frac{1}{2}\hat{U}_e\cos\varphi & \text{für } f_e=f_\mathrm{St} \\
0 & \text{für } f_e\neq f_\mathrm{St}
\end{cases}
\qquad (18.24)
$$

Gemäß (18.22) liefert der Synchrongleichrichter nicht direkt die Amplitude $\hat{U}_e$, sondern den Realteil $\hat{U}_e\cos\varphi$ der komplexen Amplitude $U_e$. Zur Ermittlung ihres Betrages $|U_e|=\hat{U}_e$ kann man die Phase der Steuerspannung mit einem einstellbaren Phasenschieber so weit verschieben, bis die Ausgangsspannung des Synchrongleichrichters maximal wird. Dann sind die Spannungen $U_e(t)$ und $U_\mathrm{St}(t)$ in Phase, und wir erhalten aus (18.24):

$$
\overline{U}_a=\frac{1}{2}\hat{U}_e=\frac{1}{2}|U_e|_{f_e=f_\mathrm{St}}
$$

Wenn man zur Verschiebung der Steuerspannung einen geeichten Phasenschieber verwendet, kann man dort unmittelbar die durch das Messobjekt verursachte Phasenverschiebung $\varphi$ ablesen.
<!-- page-import:1114:end -->

<!-- page-import:1115:start -->
1078  18. Messschaltungen

$U_a = \frac{1}{2}U_e \qquad \text{für } f_{St} = f_e$

**Abb. 18.48.** Phasenunabhängige Synchrongleichrichtung. $E$ ist die Recheneinheit der Multiplizierer z.B. $E = 10\ \mathrm{V}$

Häufig interessiert man sich nur für die Amplitude eines bestimmten Spektralanteils der Eingangsspannung und nicht für deren Phasenlage. In diesem Fall kann man auf die Synchronisation der Steuerspannung verzichten, wenn man wie in Abb. 18.48 zwei Synchrongleichrichter einsetzt, die mit zwei um 90° gegeneinander verschobenen Steuerspannungen

$$
V_1(t) = E \sin \omega_{St} t \quad \text{bzw.} \quad V_2(t) = E \cos \omega_{St} t
$$

betrieben werden. Darin ist $E$ die Recheneinheit der als Synchrongleichrichter benutzten Multiplizierer. Zur Erzeugung dieser beiden Steuerspannungen eignet sich Oszillatoren aus den Kapiteln 14.4 auf S. 896 und 26 auf S. 1503, die gleichzeitig zwei um 90° versetzte Schwingungen abgeben können.

Einen Beitrag zu den Ausgangsspannungen der beiden Synchrongleichrichter liefert nur die Spektralkomponente der Eingangsspannung mit der Frequenz $f_{St}$. Sie besitze die Phasenverschiebung $\varphi$ gegenüber $V_1$ und lautet damit:

$$
U_e = \hat{U}_e \sin (\omega_{St} t + \varphi)
$$

Nach (18.24) liefert der obere Synchrongleichrichter die Ausgangsspannung:

$$
\overline{V_3} = \frac{1}{2}\hat{U}_e \cos \varphi
$$

(18.25)

Die entsprechende Rechnung für den unteren Gleichrichter liefert

$$
\overline{V_4} = \frac{1}{2}\hat{U}_e \sin \varphi
$$

(18.26)

Durch Quadrieren und Addieren erhalten wir daraus unabhängig von der Phasenlage die Ausgangsspannung

$$
U_a = \frac{1}{2}\hat{U}_e \sqrt{\sin^2 \varphi + \cos^2 \varphi} = \frac{1}{2}\hat{U}_e
$$

(18.27)

Die Schaltung eignet sich demnach als durchstimmbares selektives Voltmeter. Seine Bandbreite ist konstant gleich der doppelten Grenzfrequenz des Tiefpassfilters. Die erreichbare
<!-- page-import:1115:end -->

<!-- page-import:1116:start -->
18.3 Messgleichrichter (AC/DC-Converter) 1079

Filtergüte ist wesentlich höher als bei herkömmlichen aktiven Filtern. Man kann z.B. ohne weiteres ein 1 MHz-Signal mit einer Bandbreite von 1 Hz filtern. Das entspricht einer Güte $Q = 10^6$. Wenn man die Steuerfrequenz kontinuierlich durchstimmt, arbeitet die Schaltung als Spektrumanalysator.
<!-- page-import:1116:end -->

<!-- page-import:1117:start -->
[unclear]
<!-- page-import:1117:end -->
