# Receivers

<!-- page-import:1278:start -->
22.2 Empfänger 1241

loszillatorfrequenzen $f_{LO} = f_{HF} - f_{ZF} = 363{,}125/363{,}375/363{,}625/363{,}875\,\mathrm{MHz}$; da sie keine Vielfachen von $K$ sind, muss der größte gemeinsame Teiler gebildet werden: $\mathrm{ggT}\{K, f_{LO}\} = 125\,\mathrm{kHz}$. Daraus folgt für die LO-PLL $n_3 = 10\,\mathrm{MHz}/125\,\mathrm{kHz} = 80$ und $n_4 = f_{LO}/125\,\mathrm{kHz} = 2905/2907/2909/2911$. Das HF-Filter muss alle Kanäle ohne größere Laufzeitverzerrungen übertragen und gleichzeitig die höchste Lokaloszillatorfrequenz ausreichend stark dämpfen. Dazu kann man das im Abschnitt 23.2 beschriebene zweikreisige Bandfilter für eine Mittenfrequenz von 434,4 MHz und eine Bandbreite von 10 MHz auslegen; dann wird das Nutzsignal um 6 dB, die Lokaloszillatorfrequenz um mehr als 54 dB und der Anteil unterhalb der Lokaloszillatorfrequenz um mehr als 70 dB gedämpft.

## 22.2 Empfänger

Der Empfänger muss das zu empfangende Signal aus dem Antennensignal ausfiltern und soweit verstärken, dass es dem Demodulator zugeführt werden kann. Die Empfangsfrequenz ist in den meisten Fällen variabel, damit verschiedene Kanäle, z.B. verschiedene Rundfunksender, empfangen werden können. Da der Empfangspegel je nach Entfernung zwischen Sender und Empfänger stark variieren kann, muss der Empfänger im allgemeinen Verstärker mit variabler Verstärkung und eine Verstärkungsregelung enthalten, um die Unterschiede im Empfangspegel auszugleichen; nur bei Sendern mit reiner Winkelmodulation kann man Begrenzer-Verstärker einsetzen, die das zu empfangende Signal nach der Filterung in ein Rechtecksignal umwandeln.

Wir beschreiben zunächst Empfänger für analoge Modulationsverfahren, bei denen das Empfangssignal auf eine Zwischenfrequenz umgesetzt und anschließend mit einem analogen Demodulator (z.B. Hüllkurvendetektor bei AM oder Gegentakt-Flankendiskriminator bei FM) demoduliert wird; anschließend gehen wir auf die Erweiterungen zum Empfang digital modulierter Signale ein.

### 22.2.1 Geradeausempfänger

In der Anfangszeit der Rundfunktechnik wurde der in Abb. 22.8a gezeigte Geradeausempfänger verwendet, bei dem das zu empfangende Signal mit einem HF-Filter ausgefiltert und, nach einer festen oder variablen Verstärkung, direkt dem Demodulator zugeführt wird. Das HF-Filter muss abstimmbar sein, damit verschiedene Sender empfangen werden können. Als Modulationsverfahren konnte nur die Amplitudenmodulation verwendet werden, da der zur Demodulation eingesetzte Hüllkurvendetektor als einziger Demodulator problemlos mit einer variablen Trägerfrequenz, $f_T = f_{HF}$ arbeiten kann; alle anderen Demodulatoren müssen für eine feste Trägerfrequenz ausgelegt oder frequenzsynchron mit dem HF-Filter abgestimmt werden.

Neben der Beschränkung auf Amplitudenmodulation hat der Geradeausempfänger weitere, gravierende Nachteile:

- Die Sendefrequenz kann maximal um zwei Zehnerpotenzen größer sein als die Bandbreite des zu empfangenden Signals, da sonst die Güte des HF-Filters zu groß wird. In der Anfangszeit der Rundfunktechnik gab es nur sehr wenige Sender mit weit auseinanderliegenden Sendefrequenzen; deshalb konnte der gewünschte Sender mit einem einfachen Schwingkreis ausgefiltert werden.
- Abstimmbare HF-Filter mit hoher Güte sind aufwendig und nur in einem sehr begrenzten Frequenzbereich unter Beibehaltung der Bandbreite abstimmbar; dagegen konnten [unclear]
<!-- page-import:1278:end -->

<!-- page-import:1279:start -->
1242  22. Sender und Empfänger

a Geradeausempfänger

b Überlagerungsempfänger (mit einer Zwischenfrequenz)

**Abb. 22.8. Empfängerkonzepte**

die in der Anfangszeit eingesetzten Schwingkreise auf einfache Weise mit einem Drehkondensator abgestimmt werden.

– Die gesamte Verstärkung muss bei der Sendefrequenz erfolgen; dazu müssen Hochfrequenztransistoren mit hohem Ruhestrom und vergleichsweise geringer Verstärkung eingesetzt werden.

– Mit zunehmender Frequenz arbeitet der Hüllkurvendetektor aufgrund der parasitären Kapazität der Gleichrichterdiode immer schlechter.

Mit zunehmender Senderdichte und Nutzung höherer Frequenzen geriet der Geradeausempfänger schnell an seine Leistungsgrenze.

## 22.2.2 Überlagerungsempfänger

Beim Überlagerungsempfänger wird die Abstimmung des HF-Filters durch eine Frequenzumsetzung mit einem Mischer mit variabler Lokaloszillatorfrequenz $f_{LO}$ ersetzt; dadurch wird das zu empfangende Signal auf eine feste Zwischenfrequenz (ZF-Frequenz)

$$
f_{ZF} = f_{HF} - f_{LO} \ll f_{HF}
$$

umgesetzt. Zur Ausfilterung wird ein Zwischenfrequenzfilter (ZF-Filter) mit wesentlich geringerer Güte eingesetzt:

$$
Q_{ZF} \sim \frac{f_{ZF}}{B} \ll \frac{f_{HF}}{B} \sim Q_{HF}
$$
<!-- page-import:1279:end -->

<!-- page-import:1280:start -->
22.2 Empfänger 1243

![Abb. 22.9. Spiegelfrequenz beim Überlagerungsempfänger]

**Abb. 22.9.**  
Spiegelfrequenz beim Überlagerungsempfänger

Die variable Verstärkung und die Demodulation erfolgen ebenfalls bei der ZF-Frequenz. Damit werden alle Nachteile des Geradeausempfängers vermieden. Abbildung 22.8b zeigt den Aufbau eines Überlagerungsempfängers mit einer Zwischenfrequenz.

#### 22.2.2.1 HF-Filter

Bei der Frequenzumsetzung wird neben der gewünschten Empfangsfrequenz

$$
f_{HF} = f_{LO} + f_{ZF}
$$

auch die *Spiegelfrequenz*

$$
f_{HF,Sp} = f_{LO} - f_{ZF}
$$

auf die ZF-Frequenz umgesetzt, siehe Abb. 22.9; dadurch fällt ein spiegelbildlich zur Lokaloszillatorfrequenz liegender Bereich in den Durchlassbereich des ZF-Filters. Um dies zu verhindern, muss das vor dem Mischer angeordnete HF-Filter so ausgelegt werden, dass alle gewünschten Empfangsfrequenzen im Durchlass- und die zugehörigen Spiegelfrequenzen im Sperrbereich liegen, siehe Abb. 22.10; das HF-Filter wird deshalb auch *Spiegelfrequenzfilter (image filter)* genannt. In der Praxis wird das HF-Filter so ausgelegt, dass auch die Lokaloszillatorfrequenzen im Sperrbereich liegen; dadurch wird verhindert, dass das relativ starke Signal des Lokaloszillators rückwärts in den Vorverstärker und auf die Empfangsantenne gelangen kann. Diese Eigenschaft ist von großer Bedeutung, da die unerwünschte Ausstrahlung der Lokaloszillatorsignale über die Empfangsantenne ein Hauptproblem beim EMV-gerechten Entwurf von Empfängern darstellt.

Die Lokaloszillatorsignale sind in der Praxis nicht sinusförmig, sondern weisen starke harmonische Verzerrungen auf; dadurch erhält man weitere Spiegelfrequenzen höherer Ordnung zu beiden Seiten der Harmonischen der Lokaloszillatorfrequenz, die ebenfalls in den Durchlassbereich des ZF-Filters fallen:

$$
f_{HF,Sp(n)} = n f_{LO} \pm f_{ZF}
$$

Diese Spiegelfrequenzen und die zugehörigen Harmonischen der Lokaloszillatorfrequenz müssen ebenfalls durch das HF-Filter unterdrückt werden; deshalb muss das HF-Filter auch oberhalb des Empfangsbereichs eine möglichst hohe Sperrdämpfung aufweisen. In der Praxis werden LC-Filter oder Filter mit dielektrischen Resonatoren eingesetzt; dabei sind zwei bis vier Resonanzkreise üblich. Diese Filter werden als 2-, 3- oder 4-polige Filter bezeichnet, wobei sich die Anzahl der Pole auf den äquivalenten Tiefpass bezieht und deshalb gleich der Anzahl der Resonanzkreise ist 1.

1 Ein einfacher Resonanzkreis hat zwei Pole: $s = \pm j\omega_0$. Ein Filter mit vier Resonanzkreisen hat demnach acht Pole, wird aber in der Praxis dennoch als 4-poliges Filter bezeichnet, da Bandpassfilter mit einer Tiefpass-Bandpass-Transformation aus einem äquivalenten Tiefpass mit der halben Polanzahl berechnet werden.
<!-- page-import:1280:end -->

<!-- page-import:1281:start -->
1244  22. Sender und Empfänger

Abb. 22.10. Auslegung des HF-Filters beim Überlagerungsempfänger

Mit zunehmender Empfangsfrequenz und gleichbleibender ZF-Frequenz wird der relative Abstand zwischen der Empfangsfrequenz und der Spiegelfrequenz immer kleiner; dadurch nimmt die Güte

$$
Q_{HF} \sim \frac{f_{HF}}{f_{ZF}}
$$

des HF-Filters zu. Wenn die Trennung von Empfangs- und Spiegelfrequenz nicht mehr mit vertretbarem Aufwand durchgeführt werden kann, muss man entweder die ZF-Frequenz erhöhen, um die Güte des HF-Filters zu verringern, oder einen Überlagerungsempfänger mit zwei Zwischenfrequenzen verwenden.

Man kann das HF-Filter auch so auslegen, dass die unterhalb der Lokaloszillatorfrequenz liegende Frequenz $f_{LO} - f_{ZF}$ als Empfangsfrequenz $f_{HF}$ dient und die zugehörige Spiegelfrequenz $f_{HF,Sp} = f_{LO} + f_{ZF}$ unterdrückt wird. In diesem Fall arbeitet der Mischer M1 in Kehrlage, da die Frequenzfolge aufgrund des Zusammenhangs $f_{ZF} = f_{LO} - f_{HF}$ invertiert wird; dagegen arbeitet der Mischer bei $f_{ZF} = f_{HF} - f_{LO}$ in Gleichlage und die Frequenzfolge bleibt erhalten. Bei Gleichlage liegt die Spiegelfrequenz unterhalb der Empfangsfrequenz, bei Kehrlage oberhalb. Deshalb wird die Kehrlage immer dann verwendet, wenn der Frequenzbereich oberhalb der Empfangsfrequenz mit deutlich schwächeren Signalen belegt ist als der Frequenzbereich unterhalb der Empfangsfrequenz; die Unterdrückung der Spiegelfrequenz ist dann einfacher. Die Kehrlage muss im Demodulator berücksichtigt oder durch eine Kehrlage im Sender kompensiert werden.

#### 22.2.2.2 Vorverstärker

Vor dem HF-Filter wird ein rauscharmmer Vorverstärker (low noise amplifier, LNA) eingesetzt, um die Rauschzahl des Empfängers gering zu halten, siehe Abb. 22.8b. Ohne Vorverstärker beträgt die Rauschzahl nach (4.204):

$$
F_{e,o} = F_{HFF} + \frac{F_{M1} - 1}{G_{A,HFF}}
\qquad
\frac{F_{HFF} = D_{HFF}}{G_{A,HFF} = 1/D_{HFF}}
= D_{HFF}\,F_{M1}
$$

Dabei ist $F_{HFF}$ die Rauschzahl und $G_{A,HFF}$ die verfügbare Leistungsverstärkung des HF-Filters und $F_{M1}$ die Rauschzahl am Eingang des Mischers M1; letztere wird mit (4.204) aus der Rauschzahl des Mischers und den Rauschzahlen der nachfolgenden Komponenten berechnet. Wir nehmen allseitige Anpassung an; dann entspricht die Rauschzahl des Filters der Leistungsdämpfung $D_{HFF}$ im Durchlassbereich und die verfügbare Leistungsverstärkung dem Kehrwert der Leistungsdämpfung [22.1]. Mit den typischen Werten $D_{HFF} \approx 1{,}6$ (2 dB) und $F_{M1} \approx 10$ (10 dB) erhält man eine inakzeptabel hohe Rauschzahl: $F_{e,o} \approx 16$
<!-- page-import:1281:end -->

<!-- page-import:1282:start -->
22.2 Empfänger 1245

(12 dB). Mit einem Vorverstärker mit der Rauschzahl $F_{VV}$ und der verfügbaren Leistungsverstärkung $G_{A,VV}$ beträgt die Rauschzahl:

$$
F_e = F_{VV} + \frac{F_{e,o} - 1}{G_{A,VV}} = F_{VV} + \frac{D_{HFF}\,F_{M1} - 1}{G_{A,VV}}
$$

Sie ist bei ausreichend großer Verstärkung wesentlich kleiner als die Rauschzahl ohne Vorverstärker und geht im Grenzfall sehr hoher Verstärkung gegen die Rauschzahl des Vorverstärkers.

In der Praxis kann man die Verstärkung des Vorverstärkers nicht beliebig groß machen, da an dieser Stelle noch das gesamte Empfangssignal der Antenne verstärkt wird; dabei können sowohl das zu empfangende Signal als auch die Signale in den Nachbarkanälen bei guten Empfangsbedingungen relativ hohe Pegel aufweisen und einen Vorverstärker mit zu großer Verstärkung übersteuern. Darüber hinaus ist eine hohe Verstärkung im HF-Bereich nur mit vergleichsweise hohem Aufwand erzielbar. Deshalb wählt man die Verstärkung nur so groß, dass die Rauschzahl des Empfängers auf einen akzeptablen Wert abnimmt. Typische Werte sind $F_{VV} \approx 2$ (3 dB) und $G_{A,VV} \approx 10 \dots 100$ (10 ... 20 dB). Mit diesen Werten erhält man für das obige Beispiel $F_e \approx 2{,}15 \dots 3{,}5$ (3,3 ... 5,4 dB) im Vergleich zu $F_{e,o} \approx 16$ (12 dB) ohne Vorverstärker.

### 22.2.2.3 Vorselektion

Wenn die Gefahr einer Übersteuerung des Vorverstärkers durch Signale in benachbarten Bändern besteht, z.B. weil in diesen Bändern Signale mit sehr hohen Pegeln auftreten können oder die Bandbreite der Antenne und der Anpassnetzwerke am Eingang relativ groß ist, so dass benachbarte Bänder nicht gedämpft werden, muss man vor dem Vorverstärker ein Vorselektionsfilter (preselection filter, preselector) einsetzen. Dieses Filter muss im Gegensatz zum HF-Filter in der Regel weder steile Flanken noch eine hohe Sperrdämpfung haben, da hier nur eine Reduktion des Gesamtpegels am Eingang des Vorverstärkers um typisch 10 ... 30 dB erforderlich ist. Da die Rauschzahl des Empfängers durch dieses Filter wieder zunimmt, ist eine geringe Leistungsdämpfung im Durchlassbereich besonders wichtig.

### 22.2.2.4 ZF-Filter

Mit dem Mischer wird der gesamte Durchlassbereich des HF-Filters in den Bereich der Zwischenfrequenz umgesetzt, siehe Abb. 22.11; dort wird der Kanal mit der gewünschten Empfangsfrequenz mit dem ZF-Filter ausgefiltert. Das ZF-Filter wird deshalb auch als Kanalfilter (channel filter) bezeichnet. Es muss sehr steile Flanken besitzen, da als Übergangsbereich zwischen Durchlass- und Sperrbereich nur der Zwischenraum zwischen benachbarten Kanälen zur Verfügung steht. Besonders gut geeignet sind Oberflächenwellenfilter (SAW-Filter), die trotz extrem steiler Flanken praktisch keine Laufzeitverzerrung aufweisen; dagegen nehmen die Laufzeitverzerrungen bei LC- oder dielektrischen Filtern mit zunehmender Flankensteilheit zu. Bei Anwendungen, die relativ unempfindlich gegen Laufzeitverzerrungen sind, werden Filter mit keramischen Resonatoren (Keramik-Filter) eingesetzt; dies ist z.B. beim AM-Rundfunk der Fall. Dagegen muss man die Laufzeitverzerrungen bei digitalen Modulationsverfahren möglichst gering halten; hier ist der Einsatz von SAW-Filtern meist zwingend notwendig.
<!-- page-import:1282:end -->

<!-- page-import:1283:start -->
1246  22. Sender und Empfänger

Abb. 22.11. Betragsspektren bei einem Überlagerungsempfänger mit einer Zwischenfrequenz

## 22.2.2.5 Überlagerungsempfänger mit zwei Zwischenfrequenzen

Bei dem in Abb. 22.12 gezeigten Überlagerungsempfänger mit zwei Zwischenfrequenzen wird die Empfangsfrequenz zunächst auf eine relativ hohe erste Zwischenfrequenz $f_{ZF1}$ umgesetzt, die so gewählt wird, dass die Trennung von Empfangs- und Spiegelfrequenz mit einem HF-Filter mit akzeptabler Güte

$$
Q_{HF} \sim \frac{f_{HF}}{f_{ZF1}}
$$

erfolgen kann. Abbildung 22.13 zeigt die Betragsspektren.

Das ZF-Filter 1 filtert einen Bereich aus, in dem der gewünschte Kanal liegt. Eine ausschließliche Ausfilterung des gewünschten Kanals ist an dieser Stelle aufgrund der hohen benötigten Güte noch nicht möglich. Das ZF-Filter 1 dient als Spiegelfrequenzfilter für den zweiten Mischer, d.h. die Spiegelfrequenz

$$
f_{ZF1,Sp} = f_{ZF1} - 2\,f_{ZF2}
$$

muss im Sperrbereich des Filters liegen. Um eine Rückwärtsübertragung der zweiten Lokaloszillatorfrequenz

$$
f_{LO2} = f_{ZF1} - f_{ZF2}
$$

zu verhindern,
<!-- page-import:1283:end -->

<!-- page-import:1284:start -->
22.2 Empfänger 1247

**Abb. 22.12.** Überlagerungsempfänger mit zwei Zwischenfrequenzen

zu verhindern, muss auch diese im Sperrbereich liegen; daraus folgt für die Güte des Filters:

$$
Q_{ZF1} \sim \frac{f_{ZF1}}{f_{ZF2}}
$$

Nach der Umsetzung auf die zweite Zwischenfrequenz mit dem Mischer M2 wird der gewünschte Kanal mit dem als Kanalfilter wirkenden ZF-Filter 2 ausgefiltert.

Man kann einen oder beide Mischer in Kehrlage betreiben, indem man die unterhalb der Lokaloszillatorfrequenzen liegenden Frequenzen $f_{LO1} - f_{ZF1}$ bzw. $f_{LO2} - f_{ZF2}$ als Empfangsfrequenzen auffasst; das HF-Filter unterdrückt in diesem Fall die Spiegelfrequenz $f_{HF,Sp} = f_{LO1} + f_{ZF1}$, das ZF-Filter 1 die Spiegelfrequenz $f_{ZF1,Sp} = f_{LO2} + f_{ZF2}$. Wenn nur ein Mischer in Kehrlage betrieben wird, wird die Frequenzfolge wegen $f_{ZF1} = f_{LO1} - f_{HF}$ bzw. $f_{ZF2} = f_{LO2} - f_{ZF1}$ invertiert; dies muss im Demodulator berücksichtigt oder durch eine Kehrlage im Sender kompensiert werden. Wenn beide Mischer in Kehrlage betrieben werden, arbeitet der Empfänger insgesamt wieder in Gleichlage.

Der Vorteil des Überlagerungsempfängers mit zwei Zwischenfrequenzen liegt darin, dass die Güte zur Ausfilterung des gewünschten Kanals, die beim Überlagerungsempfänger mit einer Zwischenfrequenz von einem ZF-Filter erbracht werden muss, auf zwei ZF-Filter verteilt werden kann:

$$
Q_{ZF} \sim \frac{f_{ZF1}}{B} = \frac{f_{ZF1}}{f_{ZF2}} \frac{f_{ZF2}}{B} \sim Q_{ZF1}\,Q_{ZF2}
$$

Dies ist immer dann erforderlich, wenn die Empfangsfrequenz $f_{HF}$ sehr hoch ist, so dass zur Begrenzung der Güte des HF-Filters eine hohe (erste) Zwischenfrequenz $f_{ZF1}$ erforderlich ist, oder die Bandbreite $B$ des Empfangssignals sehr klein ist.

## 22.2.2.6 Erzeugung der Lokaloszillatorfrequenzen

Die benötigten Lokaloszillatorfrequenzen werden mit phasenstarren Schleifen (PLL) von einem Quarz-Oszillator abgeleitet; darauf sind wir bereits bei der Beschreibung von Sendern näher eingegangen, siehe Seite 1239 und Abb. 22.7. Bei Empfängern mit variabler Empfangsfrequenz wird die Frequenz des ersten Lokaloszillators variiert, indem die Teilerfaktoren der zugehörigen PLL entsprechend angepasst werden.
<!-- page-import:1284:end -->

<!-- page-import:1285:start -->
1248  22. Sender und Empfänger

$e_{Ant}(t)$

HF-Filter

$e_{HFF}(t)$

$f_{LO1}$  M1

$e_{M1}(t)$

ZF-Filter 1

$e_{ZF1}(t)$

$f_{LO2}$  M2

$e_{M2}(t)$

ZF-Filter 2

$e_{ZF2}(t)$

$|E_{Ant}|$

$f_{ZF1}$

$f_{ZF1}$

$B$

$f_{HF,Sp}=f_{LO1}-f_{ZF1}$

$f_{LO1}$

$f_{HF}=f_{LO1}+f_{ZF1}$

$f$

$|E_{HFF}|$

$f_{ZF1}$

HF-Filter

$B$

$f_{LO1}$

$f_{HF}=f_{LO1}+f_{ZF1}$

$f$

$|E_{M1}|$

$f_{ZF2}$

$f_{ZF2}$

$B$

$B$

$f_{ZF1,Sp}=f_{LO2}-f_{ZF2}$

$f_{LO2}$

$f_{ZF1}=f_{LO2}+f_{ZF2}$

$f$

$|E_{ZF1}|$

$f_{ZF2}$

ZF-Filter 1

$B$

$f_{LO2}$

$f_{ZF1}=f_{LO2}+f_{ZF2}$

$f$

$|E_{M2}|$

$B$

$f_{ZF2}$

$f$

$|E_{ZF2}|$

ZF-Filter 2

$B$

$f_{ZF2}$

$f$

**Abb. 22.13.** Betragsspektren bei einem Überlagerungsempfänger mit zwei Zwischenfrequenzen

## 22.2.3 Verstärkungsregelung

Zur Verstärkungsregelung wird ein *regelbarer Verstärker* (*variable gain amplifier, VGA*) und ein Amplitudenmesser eingesetzt; Abb. 22.14a zeigt die vereinfachte Darstellung. Der VGA bildet die Spannung

$$
u_a(t) = A(U_R)\,u_e(t)\;\Rightarrow\;\hat{u}_a = |A(U_R)|\,\hat{u}_e
$$

(22.1)
<!-- page-import:1285:end -->

<!-- page-import:1286:start -->
22.2 Empfänger 1249

a vereinfachte Darstellung

b regelungstechnisches Ersatzschaltbild

**Abb. 22.14.**  
Verstärkungsregelung

mit der variablen Verstärkung $A(U_R)$ und der Regelspannung $U_R$. Zur Amplitudenmessung wird meist ein Spitzenwertgleichrichter eingesetzt, dessen Ausgangssignal mit dem Sollwert verglichen wird; aus der Differenz bildet ein Integrator die Regelspannung $U_R$. Abbildung 22.14b zeigt das regelungstechnische Ersatzschaltbild der Verstärkungsregelung.

#### 22.2.3.1 Regelverhalten

Im eingeschwungenen Zustand (Arbeitspunkt A) erhält man $\hat{u}_a = \hat{u}_{soll}$ und $U_R = U_{R,A}$ mit:

$$
|A(U_{R,A})| = \frac{\hat{u}_{soll}}{\hat{u}_e}
$$

Zur Untersuchung des dynamischen Verhaltens linearisieren wir (22.1) im Arbeitspunkt:

$$
d\hat{u}_a = \left(\hat{u}_e \frac{d|A|}{dU_R}\right)_A dU_R + |A(U_R)|_A\, d\hat{u}_e
$$

$$
= \hat{u}_{e,A}\left.\frac{d|A|}{dU_R}\right|_A dU_R + \underbrace{|A(U_{R,A})|}_{k_F}\, d\hat{u}_e
\qquad (22.2)
$$

mit dem Faktor

$$
\underbrace{\hat{u}_{e,A}\left.\frac{d|A|}{dU_R}\right|_A}_{k_R}
$$

Mit den Faktoren $k_R$ und $k_F$ und den Laplacetransformierten

$$
U_e(s) = \mathcal{L}\{d\hat{u}_e\}, \quad U_a(s) = \mathcal{L}\{d\hat{u}_a\}, \quad U_R(s) = \mathcal{L}\{dU_R\}
$$

erhält man das in Abb. 22.15 gezeigte lineare Modell der Verstärkungsregelung mit der Übertragungsfunktion:
<!-- page-import:1286:end -->

<!-- page-import:1287:start -->
1250  22. Sender und Empfänger

**Abb. 22.15.**  
Lineares Modell der Verstärkungsregelung

$$
H_R(s) \;=\; \frac{U_a(s)}{U_e(s)} \;=\; k_F\,\frac{sT_I/k_R}{1+sT_I/k_R}
\qquad \overset{T_R=T_I/k_R}{=} \qquad
k_F\,\frac{sT_R}{1+sT_R}
$$

Dabei ist $T_I$ die Zeitkonstante des Integrators und $T_R$ die resultierende Zeitkonstante des Regelkreises. Man erhält einen Hochpass mit der Verstärkung $k_F$ und der -3dB-Grenzfrequenz:

$$
f_{-3dB} \;=\; \frac{1}{2\pi T_R} \;=\; \frac{k_R}{2\pi T_I}
\;=\; \frac{\hat{u}_{e,A}}{2\pi T_I}\left.\frac{d|A|}{dU_R}\right|_{A}
\tag{22.3}
$$

Abbildung 22.16 zeigt den Betragsfrequenzgang. Änderungen der Eingangsamplitude, deren Frequenz unterhalb der Grenzfrequenz liegt, werden mit abnehmender Frequenz immer besser unterdrückt; Änderungen mit Frequenzen oberhalb der Grenzfrequenz werden mit $k_F = |A(U_{R,A})|$ verstärkt. Die Grenzfrequenz muss kleiner sein als die untere Grenzfrequenz der im Nutzsignal enthaltenen Amplitudenmodulation, damit das Nutzsignal nicht verfälscht wird.

Die Grenzfrequenz ist nach (22.3) proportional zur Eingangsamplitude $\hat{u}_e$ und zur Ableitung der Verstärkungskennlinie $|A(U_R)|$. Damit die Grenzfrequenz nicht vom Arbeitspunkt abhängt, muss

$$
k_R \;=\; \hat{u}_e\,\frac{d|A|}{dU_R}
\;=\; \frac{\hat{u}_{soll}}{|A(U_R)|}\,\frac{d|A|}{dU_R}
\;=\; \text{const.}
$$

gelten; daraus folgt:

$$
\frac{d|A|}{dU_R}
\;=\;
\frac{k_R}{\hat{u}_{soll}}\,|A(U_R)|
\;\Rightarrow\;
|A(U_R)| \;=\; A_0\,e^{\frac{k_R\,U_R}{\hat{u}_{soll}}}
\tag{22.4}
$$

Demnach muss der VGA eine exponentielle Verstärkungskennlinie besitzen. In der Praxis wird die Verstärkung in Dezibel, d.h. logarithmisch, angegeben; dann erhält man einen linearen Zusammenhang:

**Abb. 22.16.**  
Betragsfrequenzgang der Verstärkungsregelung
<!-- page-import:1287:end -->

<!-- page-import:1288:start -->
22.2 Empfänger 1251

**Abb. 22.17.** VGA mit Differenzverstärkern zur Stromverteilung

$$
A(U_R)\,[\mathrm{dB}] \;=\; A_0\,[\mathrm{dB}] + \frac{k_R U_R}{\hat{u}_{soll}} \cdot 8{,}68\,\mathrm{dB}
$$

#### 22.2.3.2 Regelbarer Verstärker (VGA)

Es gibt mehrere Schaltungskonzepte zur Realisierung eines regelbaren Verstärkers (*variable gain amplifier, VGA*). In integrierten Schaltungen wird fast ausschließlich der in Abb. 22.17 gezeigte VGA mit Differenzverstärkern zur Stromverteilung eingesetzt. Er bietet einen Einstellbereich von etwa 60 dB mit der geforderten exponentiellen Kennlinie.

Die VGA-Zelle besteht aus einer Emitterschaltung mit Stromgegenkopplung $(T_1, R_1)$ und einem Differenzverstärker $(T_2, T_3)$. Über die Widerstände $R_2$ und $R_3$ wird der Ruhestrom eingestellt, $R_7$ dient als Arbeitswiderstand. Der Ausgangsstrom

$$
I_{C1}(t) \;=\; I_{C1,A} + i_{C1}(t) \;=\; I_{C1,A} + \frac{S_1}{1 + S_1 R_1}\,u_e(t)
$$

der Emitterschaltung wird mit dem Differenzverstärker auf den Arbeitswiderstand und die Versorgungsspannung verteilt; dabei gilt nach (4.61)$^2$:

$$
I_{C3} \;=\; \frac{I_{C1}}{2}\left(1 + \tanh \frac{U_R}{2U_T}\right)
\;=\;
\frac{I_{C1}}{1 + e^{-\frac{U_R}{U_T}}}
$$

Daraus folgt für die Kleinsignal-Ausgangsspannung unter Berücksichtigung des nachfolgenden Verstärkers mit der Verstärkung $A_V$:

$$
u_a(t) \;=\; -A_V\,i_{C3}(t)\,R_7
\;=\;
-\frac{A_V\,i_{C1}(t)\,R_7}{1 + e^{-\frac{U_R}{U_T}}}
\;=\;
-\frac{A_V\,S_1\,R_7}{1 + S_1 R_1}\,
\frac{u_e(t)}{1 + e^{-\frac{U_R}{U_T}}}
$$

Als Regelbereich dient der Bereich $U_R < -2U_T$; hier kann man die Konstante Eins gegenüber der $e$-Funktion vernachlässigen und erhält die gewünschte, exponentielle Verstärkungskennlinie:

---

$^2$ Der Strom $I_{C1}$ entspricht dem Ruhestrom $2I_0$ des Differenzverstärkers.
<!-- page-import:1288:end -->

<!-- page-import:1289:start -->
1252  22. Sender und Empfänger

**Abb. 22.18.**  
Kennlinie des VGA aus Abb. 22.17  
$f = 3\,\mathrm{MHz}$

$$
u_a(t)\approx -\frac{A_V S_1 R_7}{1+S_1 R_1}\,e^{\frac{U_R}{U_T}}\,u_e(t)
\quad\Rightarrow\quad
A(U_R)\approx -\frac{A_V S_1 R_7}{1+S_1 R_1}\,e^{\frac{U_R}{U_T}}
\qquad (22.5)
$$

Abbildung 22.18 zeigt die Kennlinie des VGA aus Abb. 22.17 für eine Signalfrequenz von 3 MHz. Der Regelbereich umfasst 60 dB mit einer Steilheit von 0,33 dB/mV. Er wird nach oben durch die Abweichung vom exponentiellen Verlauf und nach unten durch die Sperrdämpfung der VGA-Zelle begrenzt; letztere hängt von den parasitären Kapazitäten ab und wird mit zunehmender Frequenz schlechter. Abbildung 22.19 zeigt den Betragsfrequenzgang in Abhängigkeit von der Regelspannung. Oberhalb 10 MHz nimmt die Verstärkung mit 20 dB/Dekade ab; dadurch nimmt der Regelbereich entsprechend ab. Die minimale Verstärkung nimmt in diesem Bereich aufgrund der abnehmenden Sperrdämpfung der VGA-Zelle auf 25 dB zu.

Durch die Stromverteilung ändert sich auch die Gleichspannung am Ausgang der VGA-Zelle; dadurch wird eine galvanische Kopplung mit dem nachfolgenden Verstärker erschwert. Man kann diese Änderung kompensieren, indem man eine zweite VGA-Zelle $(T_4\dots T_6, R_4\dots R_6)$ mit gleichem Ruhestrom und gegensinnig angesteuertem Differenzverstärker parallel schaltet; dann gilt

**Abb. 22.19.** Betragsfrequenzgang des VGA aus Abb. 22.17
<!-- page-import:1289:end -->

<!-- page-import:1290:start -->
22.2 Empfänger 1253

$$
I_{R7,A} = I_{C3,A} + I_{C6,A} = I_{C1,A} = I_{C4,A}
$$

und die Gleichspannung bleibt konstant.

Für die Auslegung des Regelkreises nach (22.3) wird der Faktor $k_R$ benötigt; ein Vergleich von (22.4) und (22.5) liefert:

$$
k_R = \frac{\hat{u}_{soll}}{U_T}
$$

(22.6)

Dabei ist $\hat{u}_{soll}$ die gewünschte Amplitude am Ausgang des VGA, siehe Abb. 22.14b. Aus $\hat{u}_{soll}$ und der Grenzfrequenz $f_{-3dB}$ wird die Zeitkonstante $T_I$ der Integrators berechnet:

$$
T_I = \frac{k_R}{2\pi f_{-3dB}} = \frac{\hat{u}_{soll}}{2\pi f_{-3dB}U_T}
$$

(22.7)

#### 22.2.3.3 Anordnung der Verstärkungsregelung im Empfänger

Beim Geradeausempfänger nach Abb. 22.8a muss die Verstärkungsregelung im HF-Bereich erfolgen; dies ist ungünstig, da der Regelbereich mit zunehmender Frequenz abnimmt und die HF-Frequenz variabel ist. Beim Überlagerungsempfänger mit einer Zwischenfrequenz nach Abb. 22.8b erfolgt die Verstärkungsregelung im ZF-Bereich nach dem ZF-Filter. Die Anordnung nach dem ZF-Filter ist zwingend, da das Signal vor dem ZF-Filter neben dem Nutzkanal noch alle im Durchlassbereich des HF-Filters liegenden Nachbarkanäle enthält.

Bei Systemen mit extrem unterschiedlichen Empfangspegeln muss bei hohen Pegeln zusätzlich die Verstärkung des Vorverstärkers reduziert werden, um eine Übersteuerung der nachfolgenden Komponenten zu verhindern; dazu dient die Verstärkungsumschaltung in Abb. 22.12. Dies funktioniert allerdings nur unter der Voraussetzung, dass der hohe Pegel durch den Nutzkanal verursacht wird; eine Übersteuerung des Vorverstärkers durch einen Nachbarkanal kann dadurch nicht verhindert werden.

Aus diesen Betrachtungen folgt, dass eine optimale Aussteuerung aller Komponenten nur möglich ist, wenn alle Verstärker regelbar ausgeführt werden und jeder Verstärker durch den Pegel an seinem eigenen Ausgang geregelt wird; dadurch wird unabhängig von den Pegeln der Nachbarkanäle eine maximale Empfindlichkeit für den Nutzkanal erzielt. In der Praxis wird eine derartig aufwendige Verstärkungsregelung nur in Ausnahmefällen eingesetzt. Für die meisten Anwendungen ist die hier beschriebene Regelung auf der Basis des Nutzsignalpegels ausreichend.

#### 22.2.3.4 Pegeldetektion

Viele Systeme benötigen zusätzlich zum amplitudengeregelten Nutzsignal ein Maß für den Empfangspegel des Nutzsignals; typische Beispiele sind der UKW-Rundfunk, bei dem die automatische Stereo/Mono-Umschaltung vom Empfangspegel gesteuert wird, und die Mobilkommunikation, bei der im allgemeinen mehrere Basisstationen das Sendesignal eines mobilen Geräts empfangen und die Basisstation mit dem höchsten Empfangspegel die Verbindung übernimmt.

Zur Pegeldetektion kann man die Regelspannung der Verstärkungsregelung verwenden. Wenn der regelbare Verstärker eine exponentielle Kennlinie besitzt, ist die Regelspannung $U_R$ ein logarithmisches Maß für den Empfangspegel. Im eingeschwungenen Zustand gilt mit (22.4):

$$
\hat{u}_{soll} = |A(U_R)|\,\hat{u}_e = A_0 \hat{u}_e\, e^{\frac{k_R U_R}{\hat{u}_{soll}}}
\Rightarrow
U_R = \frac{\hat{u}_{soll}}{k_R} \ln\!\left(\frac{\hat{u}_{soll}}{A_0 \hat{u}_e}\right)
$$
<!-- page-import:1290:end -->

<!-- page-import:1291:start -->
1254  22. Sender und Empfänger

Abb. 22.20. Digitale Verstärkungsregelung

Daraus folgt für den VGA aus Abb. 22.17 unter Verwendung von (22.6):

$$
U_R = U_T \ln \left(\frac{\hat{u}_{soll}}{A_0 \cdot 1\ \mathrm{V}}\right) - U_T \ln \left(\frac{\hat{u}_e}{1\ \mathrm{V}}\right)
$$

Bei einer Zunahme von $\hat{u}_e$ um den Faktor 10 (20 dB) nimmt $U_R$ um $U_T \ln 10 \approx 60\,\mathrm{mV}$ ab; demnach beträgt die Steilheit der Pegeldetektion $-\,3\,\mathrm{mV/dB}$.

Diese einfache Pegeldetektion ist auf den Bereich mit exponentieller Kennlinie beschränkt und temperaturabhängig. Integrierte Empfängerschaltungen stellen meist ein temperaturkompensiertes Pegelsignal mit positiver Steilheit bereit; dieses Signal wird received signal strength indicator (RSSI) genannt.

#### 22.2.3.5 Digitale Verstärkungsregelung

Bezüglich der Grenzfrequenz der Verstärkungsregelung existieren konträre Forderungen: einerseits soll sie möglichst klein sein, damit eine im Nutzsignal enthaltene Amplitudenmodulation nicht ausgeregelt wird; andererseits soll sie möglichst groß sein, damit nach einer Kanalumschaltung möglichst schnell der eingeschwungene Zustand erreicht wird. Eine Möglichkeit zur Optimierung besteht darin, die Zeitkonstante des Integrators umzuschalten: im normalen Betrieb wird eine große Zeitkonstante mit entsprechend geringer Grenzfrequenz verwendet; dagegen wird bei großen Regelabweichungen, wie sie z.B. nach einer Kanalumschaltung auftreten, auf eine kleinere Zeitkonstante umgeschaltet.

Eine flexiblere und bessere Lösung ist die Verwendung einer digitalen Verstärkungsregelung nach Abb. 22.20; dabei wertet ein Mikrocontroller das Pegelsignal RSSI (received signal strength indicator) des letzten ZF-Verstärkers aus und passt die Verstärkungen der HF- und ZF-Verstärker geeignet an. Der überwiegende Teil des Regelumfangs muss auch hier vom letzten ZF-Verstärker erbracht werden, da alle anderen Verstärker neben dem gewünschten Kanal auch noch Nachbarkanäle verstärken, deren Pegel vergleichsweise groß sein kann; dadurch besteht die Gefahr einer Übersteuerung. Die Umschaltungen für die drei eingangsseitigen Verstärker in Abb. 22.20 sind optional; in der Praxis wird meist nur der erste Verstärker umgeschaltet.

Die digitale Verstärkungsregelung erfolgt in den meisten Fällen in Stufen mit einer Auflösung von etwa $2\dots 4\,\mathrm{dB}$ entsprechend der Verstärkungsabstufung des letzten ZF-Verstärkers. Die Verstärkung wird mit einem binären Steuerwort eingestellt ($n_{VGA}$ Bit in Abb. 22.20). Die Änderung der Verstärkung erfolgt entweder durch eine Verstärkungs-
<!-- page-import:1291:end -->

<!-- page-import:1292:start -->
22.2 Empfänger 1255

umschaltung in den einzelnen Verstärkerstufen oder durch den Einsatz programmierbarer Dämpfungsglieder zwischen den Stufen.

Der Mikrocontroller kann den Empfangspegel durch eine relativ kurze Mittelung des Pegelsignals RSSI unter Berücksichtigung der aktuellen Verstärkungseinstellung schätzen und alle regelbaren Verstärker in einem Schritt nahezu richtig programmieren; dadurch wird die Einschwingzeit erheblich verkürzt. Nach dieser Voreinstellung wird die Dauer der Mittelung so weit erhöht, dass nur noch die Amplitudenänderungen ausgeregelt werden, deren Frequenz unterhalb der unteren Grenzfrequenz der Amplitudenmodulation des Nutzsignals liegt. In der Praxis wird die Verstärkungseinstellung vom zentralen Mikrocontroller für die Steuerung des Gesamtsystems vorgenommen; deshalb kann man das Regelverhalten besonders einfach an den vorliegenden Betriebszustand (normaler Empfang, Kanalumschaltung, Sendersuchlauf, usw.) anpassen.

### 22.2.4 Dynamikbereich eines Empfängers

Der Dynamikbereich eines Empfängers entspricht der Differenz zwischen dem maximalen und dem minimalen Empfangspegel. Der maximale Empfangspegel ist durch die maximal zulässigen Intermodulationsverzerrungen gegeben und hängt vom Intercept-Punkt des Empfängers ab. Der minimale Empfangspegel folgt aus dem minimalen Signal-Geräusch-Abstand am Eingang des Demodulators und hängt von der Rauschzahl des Empfängers ab. Der Intercept-Punkt und die Rauschzahl des Empfängers hängen ihrerseits von den Intercept-Punkten, den Rauschzahlen und den Verstärkungen der einzelnen Komponenten ab; deshalb besteht die wesentliche Aufgabe beim Entwurf eines Empfängers darin, Komponenten mit geeigneten Kenngrößen auszuwählen. Da einerseits die Leistungsfähigkeit einer Signalverarbeitungskette durch das schwächste Glied in der Kette limitiert wird und andererseits Komponenten mit unnötig guten Kenngrößen entweder teuer sind oder eine hohe Leistungsaufnahme aufweisen, muss die Auswahl der Komponenten ausgewogen sein, damit ein optimales Ergebnis erzielt wird.

Wir berechnen im folgenden den Dynamikbereich des Empfängers in Abb. 22.21. Wir nehmen an, dass der Empfänger Kanäle mit einer Bandbreite $B = 125\,\mathrm{kHz}$ und einem Kanalabstand $K = 150\,\mathrm{kHz}$ empfangen soll, die im Bereich von 434 MHz liegen; dazu verwenden wir einen Empfänger mit einer Zwischenfrequenz $f_{ZF} = 70\,\mathrm{MHz}$. Im HF-Bereich werden zwei identische HF-Verstärker mit einer Verstärkung $A = 12\,\mathrm{dB}$ eingesetzt; dabei entspricht der HF-Verstärker 1 dem Vorverstärker aus Abb. 22.8a. Zwischen den beiden HF-Verstärkern ist das HF-Filter zur Unterdrückung der Spiegelfrequenz

$$
f_{HF,Sp} = f_{HF} - 2\,f_{ZF} = 434\,\mathrm{MHz} - 2 \cdot 70\,\mathrm{MHz} = 294\,\mathrm{MHz}
$$

angeordnet; es ist als zweikreisiges Bandfilter ausgeführt und besitzt eine Dämpfung von 6 dB $(A = -6\,\mathrm{dB})$. Zur Anpassung an den Empfangspegel ist eine Verstärkungsumschaltung mit einem programmierbaren Dämpfungsglied vorgesehen, dessen Dämpfung zwischen 1 dB und 25 dB $(A_1 = -1\,\mathrm{dB}, A_2 = -25\,\mathrm{dB})$ umgeschaltet werden kann. Man beachte in diesem Zusammenhang, dass die Rauschzahlen eines passiven, reaktiven Filters und eines Dämpfungsglieds der jeweiligen Leistungsdämpfung entsprechen [22.1]. Als Mischer wird ein Diodenmischer mit einem Konversionsverlust von 7 dB $(A = -7\,\mathrm{dB})$ und einer Rauschzahl von ebenfalls 7 dB eingesetzt. Im ZF-Bereich folgen zwei identische ZF-Verstärker mit einer Verstärkung $A = 25\,\mathrm{dB}$, zwischen denen das ZF-Filter angeordnet ist. Als ZF-Filter wird ein Oberflächenwellenfilter (SAW-Filter) mit einer Mittenfrequenz von 70 MHz und einer Bandbreite von 125 kHz verwendet; die Dämpfung beträgt 24 dB $(A = -24\,\mathrm{dB})$. Anschließend folgt ein regelbarer ZF-Verstärker, der einen konstanten
<!-- page-import:1292:end -->

<!-- page-import:1293:start -->
1256  22. Sender und Empfänger

Signalpegel [dBm]

min | max
---|---
-103 dBm | -25 dBm
-91 dBm | -13 dBm
-97 dBm | -19 dBm
-98 dBm | -44 dBm
-86 dBm | -32 dBm
-93 dBm | -39 dBm
-68 dBm | -14 dBm
-92 dBm | -38 dBm
-67 dBm | -13 dBm
0 dBm | 0 dBm

Signalpegel [$V_\mathrm{eff}$]

min | max
---|---
1,6 µV | 12,6 mV
6,3 µV | 50 mV
3,2 µV | 25 mV
2,8 µV | 1,4 mV
11,2 µV | 5,6 mV
5 µV | 2,5 mV
89 µV | 45 mV
5,6 µV | 2,8 mV
100 µV | 50 mV
224 mV | 224 mV

Verstärkung [dB]

min | max
---|---
0 dB | 0 dB
12 dB | 12 dB
6 dB | -6 dB
5 dB | -19 dB
17 dB | -7 dB
10 dB | -14 dB
35 dB | 11 dB
11 dB | -13 dB
36 dB | 12 dB
103 dB | 25 dB

Verstärkung

min | max
---|---
1 | 1
4 | 4
2 | 2
1,8 | 0,11
7,1 | 0,45
3,2 | 0,2
56 | 3,5
3,5 | 0,22
63 | 4
141000 | 18

$u_e(t)$

**HF-Verstärker 1**

$A_1 = 12\,\mathrm{dB}$  
$F = 3\,\mathrm{dB}$  
$IP3 = -8\,\mathrm{dBm}$

**HF-Filter**

$A_1 = -6\,\mathrm{dB}$  
$F = 6\,\mathrm{dB}$

**HF-Dämpfungsglied**

$A_1 = -1\,\mathrm{dB}$  
$F_1 = 1\,\mathrm{dB}$  
$A_2 = 25\,\mathrm{dB}$  
$IP3 = -78\,\mathrm{dBm}$

**HF-Verstärker 2**

$A_1 = 12\,\mathrm{dB}$  
$F = 3\,\mathrm{dB}$  
$IP3 = -8\,\mathrm{dBm}$

$f_{LO}$

$A_1 = -7\,\mathrm{dB}$  
$F = 7\,\mathrm{dB}$  
$IP3 = -100\,\mathrm{dBm}$

**ZF-Verstärker 1**

$A = 25\,\mathrm{dB}$  
$F = 4\,\mathrm{dB}$  
$IP3 = -18\,\mathrm{dBm}$

**ZF-Filter**

$A_1 = -24\,\mathrm{dB}$  
$F = 24\,\mathrm{dB}$

**ZF-Verstärker 2**

$A = 25\,\mathrm{dB}$  
$F = 4\,\mathrm{dB}$

**regelbarer ZF-Verstärker**

$A_1 = 67\,\mathrm{dB}$  
$F_1 = 20\,\mathrm{dB}$  
$A_2 = 13\,\mathrm{dB}$

$u_a(t)$

Berechnung der Rauschzahl

$F_z$ | 1 | 3 | 0,26 | 1 | 4 | 1,5 | 250 | 1,5 | 99
---|---|---|---|---|---|---|---|---|---
$\prod |A|^2$ | 1 | 16 | 4 | 3,2 | 50 | 10 | 3200 | 12,6 | 4000
$\dfrac{F^{(e)}}{Z}$ | 1 | 0,19 | 0,07 | 0,31 | 0,08 | 0,15 | 0,08 | 0,12 | 0,025

$\Rightarrow$

$$\sum F_{z,e} = 2{,}025$$

$$F_e \approx 3 \ (4{,}8\,\mathrm{dB})$$

Berechnung des Intercept-Punkts $IP3$

$\dfrac{u_a}{\prod |A|}$ | 0,56 V | — | 0,1 V | 0,56 V | 0,07 V | 1,78 V
---|---|---|---|---|---|---
$\prod |A|$ | 4 | 2 | 0,11 | 0,45 | 0,2 | 3,5
$\dfrac{u_a^{(e)}}{IP3}$ | 0,14 V | — | 0,91 V | 1,24 V | 0,35 V | 0,5 V

$\Rightarrow \quad U_{e,IP3} = 0{,}124\,\mathrm{V}\ (-5{,}1\,\mathrm{dBm})$

**Abb. 22.21.** Beispiel zur Berechnung des Dynamikbereichs eines Empfängers. Alle Komponenten sind an einen Wellenwiderstand von $Z_W = 50\,\Omega$ angepasst $(0\,\mathrm{dBm} \Leftrightarrow 224\,\mathrm{mV})$.
<!-- page-import:1293:end -->

<!-- page-import:1294:start -->
22.2 Empfänger 1257

Ausgangspegel von $0\,\mathrm{dBm}$ für den nachfolgenden Demodulator bereitstellt; er basiert auf dem VGA aus Abb. 22.17 und hat eine für VGA-Zellen typische, hohe Rauschzahl von $20\,\mathrm{dB}$. Für die folgenden Berechnungen nehmen wir an, dass alle Komponenten an einen Wellenwiderstand von $Z_W = 50\,\Omega$ angepasst sind ($0\,\mathrm{dBm} \Leftrightarrow 224\,\mathrm{mV}$)$^3$.

#### 22.2.4.1 Rauschzahl des Empfängers

Aufgrund der angenommenen Anpassung entsprechen die angegebenen Verstärkungen in Dezibel den verfügbaren Leistungsverstärkungen $G_A$ in Dezibel:

$$
G_A\;[\mathrm{dB}] = A\;[\mathrm{dB}]
\quad\Rightarrow\quad
G_A = |A|^2
$$

und die Rauschzahl kann mit Hilfe von (4.204) berechnet werden:

$$
F_e = F_1 + \frac{F_2-1}{G_{A1}} + \frac{F_3-1}{G_{A1}G_{A2}} + \ldots
\overset{(4.202)}{=}
1 + F_{Z1} + \frac{F_{Z2}}{|A_1|^2} + \frac{F_{Z3}}{|A_1A_2|^2} + \ldots
$$

Dabei ist $F_Z = F - 1$ die Zusatzrauschzahl der jeweiligen Komponente. In Abb. 22.21 sind die Rauschzahlen der Komponenten in Dezibel angegeben; daraus folgen mit

$$
F_Z = 10^{\frac{F\;[\mathrm{dB}]}{10}} - 1
$$

die in der oberen Tabelle angegebenen Zusatzrauschzahlen. Unter den Zusatzrauschzahlen sind die Leistungsverstärkungen vom Eingang des Empfängers bis zum Eingang der jeweiligen Komponente angegeben ($\Pi\,|A|^2$); damit werden die Zusatzrauschzahlen auf den Eingang des Empfängers umgerechnet:

$$
F_Z^{(e)} = \frac{F_Z}{\Pi\,|A|^2}
$$

Durch Addition erhält man die Zusatzrauschzahl und die Rauschzahl des Empfängers:

$$
F_{Z,e} = \Sigma\,F_Z^{(e)}
\quad\Rightarrow\quad
F_e = F_{Z,e} + 1
$$

Für den Empfänger in Abb. 22.21 gilt $F_{Z,e} \approx 2$ und $F_e \approx 3$ $(4{,}8\,\mathrm{dB})$.

Die auf den Eingang umgerechneten Zusatzrauschzahlen der Komponenten zeigen, welchen Beitrag die einzelnen Komponenten zur Zusatzrauschzahl des Empfängers leisten. Daraus folgt, welche Komponenten rauschärmer ausgeführt werden müssen, damit die Rauschzahl des Empfängers nennenswert abnimmt, und welche Komponenten eine höhere Rauschzahl aufweisen können, ohne dass die Rauschzahl des Empfängers nennenswert zunimmt. Bei dem Empfänger in Abb. 22.21 dominiert der Beitrag des ersten HF-Verstärkers, gefolgt vom Beitrag des zweiten HF-Verstärkers und des HF-Filters. Unter praktischen Gesichtspunkten ist der Empfänger dennoch als ausgewogen zu betrachten, da eine Verringerung der Rauschzahlen der HF-Verstärker nur mit vergleichsweise hohem Aufwand möglich ist. Vor allem beim ersten HF-Verstärkers muss man häufig einen

---

$^3$ Der Pegel $0\,\mathrm{dBm}$ entspricht einer Leistung von $1\,\mathrm{mW}$ am Wellenwiderstand $Z_W = 50\,\Omega$:

$$
P = \frac{u_{\mathrm{eff},0\,\mathrm{dBm}}^2}{50\,\Omega} = 1\,\mathrm{mW}
\quad\Rightarrow\quad
u_{\mathrm{eff},0\,\mathrm{dBm}} = 223{,}6\,\mathrm{mV} \approx 224\,\mathrm{mV}
$$

$$
\Rightarrow\quad
u_{\mathrm{eff}}\;[\mathrm{dBm}] =
\left(20\,\log \frac{u_{\mathrm{eff}}}{u_{\mathrm{eff},0\,\mathrm{dBm}}}\right)\;[\mathrm{dBm}]
=
\left(13 + 20\,\log \frac{u_{\mathrm{eff}}}{\mathrm{V}}\right)\;[\mathrm{dBm}]
$$
<!-- page-import:1294:end -->

<!-- page-import:1295:start -->
1258  22. Sender und Empfänger

Kompromiss zwischen einer niedrigen Rauschzahl und einem hohen Intercept-Punkt eingehen: ein hoher Intercept-Punkt erfordert eine Gegenkopplung, die eine Erhöhung der Rauschzahl zur Folge hat.

#### 22.2.4.2 Minimaler Empfangspegel

Der minimale Empfangspegel $P_{e,min}$ ergibt sich aus der effektiven Rauschleistung $P_{r,e}$ am Eingang des Empfängers und dem erforderlichen minimalen Signal-Geräusch-Abstand $SNR_{e,min}$ für eine fehlerfreie Demodulation des Empfangssignals:

$$
SNR_{e,min}=\frac{P_{e,min}}{P_{r,e}}
\Rightarrow
P_{e,min}=SNR_{e,min}P_{r,e}
$$
(22.8)

Der minimale Empfangspegel wird auch *Empfindlichkeit (sensitivity)* genannt: ein geringerer minimaler Empfangspegel ist gleichbedeutend mit einer höheren Empfindlichkeit.

Die effektive Rauschleistung folgt aus der thermischen Rauschleistungsdichte $N_0$, der Bandbreite $B$ und der Rauschzahl $F_e$ des Empfängers:

$$
P_{r,e}=N_0BF_e=kTBF_e \overset{T=300\,\mathrm{K}}{=} 4{,}14\cdot 10^{-21}\,\frac{\mathrm{W}}{\mathrm{Hz}}\cdot BF_e
$$
(22.9)

Daraus folgt:

$$
P_{r,e}\,[\mathrm{dBm}]=-174\,\mathrm{dBm}+10\,\mathrm{dB}\cdot \log\frac{B}{\mathrm{Hz}}+F_e\,[\mathrm{dB}]
$$
(22.10)

Durch Einsetzen in (22.8) erhält man den minimalen Empfangspegel:

$$
P_{e,min}\,[\mathrm{dBm}]=P_{r,e}\,[\mathrm{dBm}]+SNR_{e,min}\,[\mathrm{dB}]
$$

$$
=-174\,\mathrm{dBm}+10\,\mathrm{dB}\cdot \log\frac{B}{\mathrm{Hz}}+F_e\,[\mathrm{dB}]+SNR_{e,min}\,[\mathrm{dB}]
$$
(22.11)

Er hängt wesentlich von der Bandbreite ab; deshalb ist der minimale Empfangspegel eines Systems mit einer hohen Datenrate und einer damit verbundenen hohen Bandbreite höher als der eines Systems mit einer niedrigeren Datenrate, wenn beide Systeme dasselbe Modulationsverfahren ($SNR_{e,min}$ gleich) und Empfänger mit gleicher Rauschzahl verwenden. Eine Erhöhung der Datenrate um den Faktor 10 erhöht den minimalen Empfangspegel um 10 dB.

Der Empfänger in Abb. 22.21 soll ein QPSK-moduliertes Signal mit einer maximalen Symbolfehlerrate von $10^{-6}$ empfangen; dazu ist nach [22.2] eine Leistungseffizienz von $E_b/N_0=10\,\mathrm{dB}$ erforderlich. Aus der erforderlichen Leistungseffizienz, dem angenommenen Datentakt $f_D=200\,\mathrm{kHz}$ und der angenommenen Bandbreite $B=125\,\mathrm{kHz}$^4 erhält man mit (21.88) den erforderlichen Signal-Geräusch-Abstand:

$$
SNR_{e,min}\,[\mathrm{dB}]=10\,\mathrm{dB}\cdot \log\frac{E_bf_D}{N_0B}=12\,\mathrm{dB}
$$

Durch Einsetzen in (22.11) erhält man mit $B=125\,\mathrm{kHz}$ und $F_e\approx 5\,\mathrm{dB}$ den minimalen Empfangspegel:

$$
P_{e,min}\,[\mathrm{dBm}]=-174\,\mathrm{dBm}+51\,\mathrm{dB}+5\,\mathrm{dB}+12\,\mathrm{dB}=-106\,\mathrm{dBm}
$$

Dies entspricht einem Effektivwert von $1{,}1\,\mu\mathrm{V}$.

4 Wir nehmen ein QPSK-System mit einer Datenrate $r_D=200\,\mathrm{kBit/s}$ und einem Rolloff-Faktor $r=0{,}25$ an; daraus folgen der Datentakt $f_D=200\,\mathrm{kHz}$, der Symboltakt $f_S=f_D/2=100\,\mathrm{kHz}$ (zwei Bit pro Symbol) und die Bandbreite $B=(1+r)f_S=125\,\mathrm{kHz}$, siehe (21.89).
<!-- page-import:1295:end -->

<!-- page-import:1296:start -->
1259

## 22.2 Empfänger

#### 22.2.4.3 Maximaler Empfangspegel

Der maximale Empfangspegel hängt von den zulässigen nichtlinearen Verzerrungen ab; dabei dominiert die Intermodulation 3. Ordnung (IM3), die durch den Intermodulationsabstand $IM3$ beschrieben wird. Zur Charakterisierung dient der Intercept-Punkt $IP3$. Die Zusammenhänge haben wir im Abschnitt 4.2.3 auf Seite 451 beschrieben; dabei haben wir die Amplituden sinusförmiger Signale verwendet. Dagegen werden in der Hochfrequenztechnik meist die Pegel in dBm oder die entsprechenden Effektivwerte angegeben. Bei Anpassung am Eingang gilt:

$$
R_g = r_e = Z_W \quad \Rightarrow \quad \hat{u}_e = \hat{u}_g/2 \quad , \quad \hat{u}_{e,IP3} = \hat{u}_{g,IP3}/2
$$

Damit folgt aus (4.184):

$$
IM3 \approx \left(\frac{\hat{u}_{g,IP3}}{\hat{u}_g}\right)^2 = \left(\frac{\hat{u}_{e,IP3}}{\hat{u}_e}\right)^2 = \left(\frac{u_{e,IP3}}{u_e}\right)^2
$$

(22.12)

Dabei sind $u_e$ und $u_{e,IP3}$ die Effektivwerte und $\hat{u}_e = \sqrt{2}\,u_e$ und $\hat{u}_{e,IP3} = \sqrt{2}\,u_{e,IP3}$ die Amplituden des Eingangssignals und des Intercept-Punkts $IP3$, bezogen auf den Eingang des Empfängers. In der Praxis werden der Intermodulationsabstand in Dezibel und die Effektivwerte des Eingangssignals und des Intercept-Punkts in dBm angegeben; dann gilt:

$$
IM3\,[\mathrm{dB}] \approx 2\,(u_{e,IP3}\,[\mathrm{dBm}] - u_e\,[\mathrm{dBm}]) = 2\,(IIP3\,[\mathrm{dBm}] - P_e\,[\mathrm{dBm}])
$$

(22.13)

Dabei entspricht $u_{e,IP3}$ dem Eingangs-Intercept-Punkt $IIP3$.

Der Intercept-Punkt wird mit einem Zweitonsignal ermittelt; deshalb gelten die Intermodulationsabstände nach (22.12) und (22.13) ebenfalls nur für ein Zweitonsignal, siehe Abb. 22.22a auf Seite 1261. Dagegen empfängt ein Empfänger im allgemeinen ein Gemisch aus modulierten Signalen, das sich aus dem gewünschten Empfangssignal und den Signalen in den Nachbarkanälen zusammensetzt. Die Angabe eines Intermodulationsabstands ist in diesem Fall nicht möglich; deshalb wird in der Praxis der Zweiton-Intermodulationsabstand als Ersatzgröße verwendet, indem man die zulässige Nichtlinearität und daraus den zugehörigen Zweiton-Intermodulationsabstand ermittelt.

Bei der Berechnung des maximalen Empfangspegels werden die Signale in den Nachbarkanälen vernachlässigt, da das gewünschte Empfangssignal in diesem Fall gemäß Voraussetzung den maximal zulässigen Pegel besitzt und gleichzeitig angenommen wird, dass eventuell vorhandene Signale in den Nachbarkanälen wesentlich geringere Pegel haben. Die Intermodulation wirkt sich in diesem Fall nur als nichtlineare Verzerrung des gewünschten Empfangssignals aus; Intermodulationsprodukte aus den Nachbarkanälen spielen keine Rolle. Der benötigte Zweiton-Intermodulationsabstand hängt von der Modulationsart und weiteren Parametern des gewünschten Empfangssignals ab und wird experimentell oder durch eine Systemsimulation ermittelt. Wir gehen darauf nicht weiter ein und setzen den benötigten Intermodulationsabstand als bekannt voraus.

Der Intercept-Punkt $u_{e,IP3}$ des Empfängers wird aus den Intercept-Punkten der Komponenten berechnet; dabei werden nur die Komponenten bis zum letzten ZF-Filter berücksichtigt, da nach diesem Filter alle Nachbarkanäle unterdrückt sind. In Abb. 22.21 sind die Ausgangs-Intercept-Punkte der Komponenten in dBm angegeben; daraus erhält man die in der unteren Tabelle angegebenen Effektivwerte $u_{a,IP3}$, die mit den zugehörigen Verstärkungen vom Eingang des Empfängers bis zum Ausgang der jeweiligen Komponente $(\prod|A|)$ auf den Eingang umgerechnet werden:
<!-- page-import:1296:end -->

<!-- page-import:1297:start -->
1260 22. Sender und Empfänger

$$u_{a,IP3}^{(e)}=\frac{u_{a,IP3}}{\Pi\,|A|}$$

Im Abschnitt 4.2.3 haben wir gezeigt, dass man die Intercept-Punkte 3. Ordnung einer Reihenschaltung invers quadratisch addieren muss, siehe Seite 456:

$$\frac{1}{u_{e,IP3}^{2}}=\Sigma\,\frac{1}{u_{a,IP3}^{(e)\,2}}$$

Für den Empfänger in Abb. 22.21 erhält man $u_{e,IP3}=0,124\,\mathrm{V}$ bzw. $IIP3=-5,1\,\mathrm{dBm}$.

Aus dem Intercept-Punkt $IIP3$ und dem benötigten Intermodulationsabstand $IM3_{min}$ erhält man mit (22.13) den maximalen Empfangspegel:

$$P_{e,max}\,[\mathrm{dBm}]=IIP3\,[\mathrm{dBm}]-\frac{IM3_{min}\,[\mathrm{dB}]}{2}$$

(22.14)

Bei digital modulierten Signalen ist der benötigte Intermodulationsabstand in den meisten Fällen sehr gering. Die zulässigen Empfangspegel liegen oft im Bereich des Kompressionspunkts. In diesem Bereich kann die Intermodulation nicht mehr mit den extrapolierten Gleichungen (22.13) und (22.14) beschrieben werden, siehe Abb. 4.151 auf Seite 455. Wir nehmen hier an, dass ein extrapolierter Intermodulationsabstand $IM3_{min}\approx14\,\mathrm{dB}$ benötigt wird; daraus folgt für den Empfänger in Abb. 22.21:

$$P_{e,max}=-5,1\,\mathrm{dBm}-\frac{14\,\mathrm{dB}}{2}\approx-12\,\mathrm{dBm}$$

Dies entspricht einem Effektivwert von 56 mV.

Die auf den Eingang umgerechneten Intercept-Punkte der Komponenten zeigen, welchen Beitrag die Komponenten zum Intercept-Punkt des Empfängers leisten; dabei ist ein kleiner Wert schlechter als ein großer. In Abb. 22.21 dominiert der Beitrag des ersten HF-Verstärkers; durch die Quadrierung der Werte bei der invers quadratischen Addition wird dies noch zusätzlich verstärkt. Die Dominanz des Intercept-Punkts des ersten HF-Verstärkers ist typisch für Empfänger; eine Verbesserung an dieser Stelle ist jedoch nur mit hohem Aufwand möglich und geht zu Lasten der Rauschzahl oder der Stromaufnahme.

#### 22.2.4.4 Dynamikbereich

##### 22.2.4.4.1 Maximaler Dynamikbereich

Aus dem minimalen und dem maximalen Empfangspegel erhält man den maximalen Dynamikbereich des Empfängers:

$$D_{max}=\frac{P_{e,max}}{P_{e,min}}\quad\Rightarrow\quad D_{max}\,[\mathrm{dB}]=P_{e,max}\,[\mathrm{dBm}]-P_{e,min}\,[\mathrm{dBm}]$$

(22.15)

Für den Empfänger in Abb. 22.21 gilt:

$$D_{max}=-12\,\mathrm{dBm}-(-106\,\mathrm{dBm})=94\,\mathrm{dB}$$

Der maximale Dynamikbereich gilt nur für den Fall, dass keine störenden Einflüsse durch Signale in den Nachbarkanälen vorhanden sind.
<!-- page-import:1297:end -->

<!-- page-import:1298:start -->
22.2 Empfänger 1261

a Zweiton-Intermodulation IM3

b Intermodulation IM3 bei einem QPSK-Signal (Intra-Signal-Intermodulation)

c Intermodulation IM3 bei zwei QPSK-Signalen (Inter-Signal-Intermodulation)

**Abb. 22.22.** Intermodulation bei Zweitonsignalen und QPSK-modulierten Signalen (---: gewünschtes Empfangssignal mit der Mittenfrequenz $f_0$; — : Signal(e) in den Nachbarkanälen mit den Mittenfrequenzen $f_0 + nK$)

#### 22.2.4.4.2 Verfügbarer Dynamikbereich

Der verfügbare Dynamikbereich hängt von den Pegeln in den Nachbarkanälen ab und kann erheblich geringer sein als der maximale Dynamikbereich $D_{max}$. Wir betrachten dazu die beiden Fälle in Abb. 22.22b und Abb. 22.22c:

- In Abb. 22.22b ist ein um 40 dB stärkeres Signal im Nachbarkanal $f_0 + K$ vorhanden. Durch die Intermodulation IM3 bilden sich am Ausgang sogenannte Schultern, die in den Kanal des gewünschten Empfangssignals fallen. Der Schulterabstand hängt nicht nur vom Intercept-Punkt IP3, sondern auch von den Parametern des Signals ab. Er beträgt hier etwa 42 dB. Da die Schultern keine konstante Leistungsdichte aufweisen,
<!-- page-import:1298:end -->

<!-- page-import:1299:start -->
1262 22. Sender und Empfänger

**Abb. 22.23.** Grafische Darstellung des Dynamikbereichs eines Empfängers

muss man die Störleistung, die in den Kanal des gewünschten Empfangssignals fällt, durch eine Integration der Leistungsdichte der Schulter ermitteln.

– In Abb. 22.22c sind zwei um 40 dB stärkere Signale in den Nachbarkanälen $f_0 + K$ und $f_0 + 2K$ vorhanden. Dieser Fall entspricht weitgehend dem Zweiton-Fall in Abb. 22.22a, mit dem Unterschied, dass nun zwei modulierte Signale an die Stelle der zwei Sinussignale treten. Auch in diesem Fall bilden sich Schultern, die hier aber im Gegensatz zu Abb. 22.22b in den Kanälen $f_0$ und $f_0 + 3K$ eine näherungsweise konstante Leistungsdichte besitzen. Wenn die Leistungen der modulierten Signale und der Sinussignale gleich sind, unterscheidet sich der Schulterabstand nur geringfügig vom Zweiton-Intermodulationsabstand $IM3$; deshalb kann man die Störleistung, die in den Kanal des gewünschten Empfangssignals fällt, sehr gut mit Hilfe des Zweiton-Intermodulationsabstands abschätzen.

In beiden Fällen wird die Empfindlichkeit für das gewünschte Empfangssignal reduziert, da nun zusätzlich zur effektiven Rauschleistung $P_{r,e}$ nach (22.9) die auf den Eingang bezogene Störleistung $P_{IM3,e}$ der Intermodulationsprodukte wirksam wird. Für den minimalen Empfangspegel gilt in diesem Fall:

$$
P'_{e,\min} = SNR_{e,\min}\,(P_{r,e} + P_{IM3,e}) =
\begin{cases}
SNR_{e,\min}\,P_{r,e} & \text{für } P_{r,e} \gg P_{IM3,e} \\
SNR_{e,\min}\,P_{IM3,e} & \text{für } P_{r,e} \ll P_{IM3,e}
\end{cases}
$$

Dadurch wird der Dynamikbereich reduziert.

Für den in Abb. 22.22c gezeigten Fall mit zwei starken Signalen kann man die Verhältnisse einfach grafisch darstellen; dabei nimmt man an, dass die starken Signale jeweils den Empfangspegel $P_e$ haben und trägt alle Pegel in dBm über $P_e$ auf, siehe Abb. 22.23:

– Die effektive Rauschleistung $P_{r,e}$ hängt nicht von $P_e$ ab und erscheint als Horizontale.  
– $P_e$ selbst erscheint als Diagonale.  
– Beim minimalen Empfangspegel $P_{e,\min}$ liegt $P_e$ um den minimalen Signal-Geräusch-Abstand $SNR_{e,\min}$ über der effektiven Rauschleistung $P_{r,e}$.  
– Die Kurve für die Leistung $P_{IM3,e}$ der Intermodulation $IM3$ hat die dreifache Steigung der Diagonalen $P_e$ und schneidet diese beim Eingangs-Intercept-Punkt $IIP3$.
<!-- page-import:1299:end -->

<!-- page-import:1300:start -->
22.2 Empfänger 1263

– Beim maximalen Empfangspegel $P_{e,max}$ liegt $P_{IM3,e}$ um den minimalen Intermodulationsabstand $IM3_{min}$ unter $P_e$.  
– Der maximale Dynamikbereich $D_{max}$ entspricht dem Abstand zwischen $P_{e,max}$ und $P_{e,min}$.  
– Die Kurve des minimalen Empfangspegels $P'_{e,min}$ verläuft um den minimalen Signal-Geräusch-Abstand $SNR_{e,min}$ oberhalb der Summe $P_{r,e} + P_{IM3,e}$.

### 22.2.4.4.3 Inband-Dynamikbereich

Beim Empfangspegel $P_{e,max,IDR}$ sind die effektive Rauschleistung $P_{r,e}$ und die Leistung $P_{IM3,e}$ der Intermodulation gleich; daraus folgt für den zugehörigen minimalen Empfangspegel:

$$
P'_{e,min} \stackrel{P_{r,e}=P_{IM3,e}}{=} 2P_{e,min}
\quad\Rightarrow\quad
P'_{e,min}\,[\mathrm{dBm}] = P_{e,min}\,[\mathrm{dBm}] + 3\,\mathrm{dB}
$$

Der zugehörige Abstand zwischen $P_e$ und $P'_{e,min}$ wird Inband-Dynamikbereich (inband dynamic range, IDR) genannt:

$$
IDR = \frac{P_{e,max,IDR}}{2P_{e,min}}
\quad\Rightarrow\quad
IDR\,[\mathrm{dB}] = P_{e,max,IDR}\,[\mathrm{dBm}] - P_{e,min}\,[\mathrm{dBm}] - 3\,\mathrm{dB}
$$

Er entspricht dem maximal zulässigen Pegelunterschied zwischen einem gewünschten Empfangssignal mit dem Empfangspegel $P'_{e,min} = 2P_{e,min}$ und zwei starken Signalen in den Nachbarkanälen gemäß Abb. 22.22c. Dabei wird vorausgesetzt, dass die Signale in den Nachbarkanälen im Empfangsband (inband) liegen, d.h. sie werden ungedämpft bis zum letzten ZF-Filter übertragen und erst durch dieses Filter unterdrückt.

Bei der Bestimmung des Pegels $P_{e,max,IDR}$ geht man von der Bedingung $P_{IM3,e} = P_{r,e}$ aus:

$$
P_{IM3,e}\,[\mathrm{dBm}] = P_{e,max,IDR}\,[\mathrm{dBm}] - IM3\,[\mathrm{dB}] \stackrel{!}{=} P_{r,e}\,[\mathrm{dBm}]
$$

Den Intermodulationsabstand $IM3$ erhält man aus (22.13):

$$
IM3\,[\mathrm{dB}] \approx 2\left(IIP3\,[\mathrm{dBm}] - P_{e,max,IDR}\,[\mathrm{dBm}]\right)
$$

Durch Einsetzen und Auflösen nach $P_{e,max,IDR}$ folgt:

$$
P_{e,max,IDR}\,[\mathrm{dBm}] = \frac{2}{3}\,IIP3\,[\mathrm{dBm}] + \frac{1}{3}\,P_{r,e}\,[\mathrm{dBm}]
$$

Aus (22.10) und (22.11) erhält man den Zusammenhang zwischen dem minimalen Empfangspegel $P_{e,min}$ und der thermischen Rauschleistung $P_{r,e}$:

$$
P_{e,min}\,[\mathrm{dBm}] = P_{r,e}\,[\mathrm{dBm}] + SNR_{e,min}\,[\mathrm{dB}]
$$

Setzt man die Gleichungen für $P_{e,max,IDR}$ und $P_{e,min}$ in die Gleichung für $IDR$ ein, erhält man folgende Zusammenhänge für den Inband-Dynamikbereich:

$$
IDR\,[\mathrm{dB}] = \frac{2}{3}\left(IIP3\,[\mathrm{dBm}] - P_{e,min}\,[\mathrm{dBm}]\right) - \frac{1}{3}\,SNR_{e,min}\,[\mathrm{dB}] - 3\,\mathrm{dB}
\qquad (22.16)
$$

$$
= \frac{2}{3}\left(IIP3\,[\mathrm{dBm}] - P_{r,e}\,[\mathrm{dBm}]\right) - SNR_{e,min}\,[\mathrm{dB}] - 3\,\mathrm{dB}
\qquad (22.17)
$$

Da der erforderliche minimale Signal-Geräusch-Abstand $SNR_{e,min}$ von der Modulation des Signals abhängt, wird der Inband-Dynamikbereich in der Praxis häufig für den Fall
<!-- page-import:1300:end -->

<!-- page-import:1301:start -->
1264 22. Sender und Empfänger

zur Antenne

Sender → $s_{HF}(t)$ → Duplexer

- uplink 890...915 MHz
- downlink 935...960 MHz

→ $e_{Ant}(t)$ → Empfänger

**Abb. 22.24.** Trennung von *uplink*- und *downlink*-Bereich mit einem Duplexer am Beispiel eines Mobilgeräts für GSM900

$SNR_{e,min}=0\,\mathrm{dB}$ angegeben; damit erhält man eine von der Modulation des Signals unabhängige Charakterisierung des Empfängers. Für den Empfänger in Abb. 22.21 gilt $IIP3=-5{,}1\,\mathrm{dBm}$, $P_{e,min}=-106\,\mathrm{dBm}$, $P_{r,e}=-118\,\mathrm{dBm}$ und $SNR_{e,min}=12\,\mathrm{dB}$; daraus folgt $IDR \approx 60\,\mathrm{dB}$. Der Inband-Dynamikbereich $IDR$ ist deutlich geringer als der maximale Dynamikbereich $D_{max}=94\,\mathrm{dB}$. Der praktisch verfügbare Dynamikbereich liegt zwischen diesen Extremen.

#### 22.2.4.4 Bemerkungen zum Dynamikbereich

Die Verringerung der Empfindlichkeit durch Intermodulationsprodukte macht sich vor allem bei Rundfunkempfängern störend bemerkbar. Sie bewirkt, dass man schwache Sender in der Nähe eines oder mehrerer starker Sender nicht mehr empfangen kann. Dasselbe Problem tritt bei Basisstationen der Mobilkommunikation auf, die Signale von mehreren Mobilgeräten mit stark unterschiedlichen Pegeln empfangen müssen. Die Mobilgeräte selbst sind weniger anfällig, da sie im Normalfall mit der Basisstation mit dem höchsten Empfangspegel kommunizieren. Die Blockierung eines Mobilgeräts durch andere Mobilgeräte in unmittelbarer Nähe wird verhindert, indem für die Verbindung von den Mobilgeräten zu den Basisstationen (*uplink*) ein anderer Frequenzbereich verwendet wird als für die Verbindung von den Basisstationen zu den Mobilgeräten (*downlink*), siehe Abb. 21.22. Die Trennung von *uplink*- und *downlink*-Bereich erfolgt mit einem aus zwei Bandpässen bestehenden *Duplexer*; Abb. 22.24 zeigt dies am Beispiel eines Mobilgeräts für GSM900. Die beiden Bereiche sind durch eine Frequenzlücke getrennt, die als Übergangsbereich für die Bandpässe des Duplexers benötigt wird. Nachteilig ist die durch den Duplexer verursachte Zunahme der Rauschzahl; sie nimmt um die Leistungsdämpfung $D_D$ des Duplexers zu:

$$
F'_e \qquad \overset{(4.204)}{=} \qquad F_D+\frac{F_e-1}{G_{A,D}}
\qquad F_D=1/G_{A,D}=D_D
\qquad = \qquad D_D+D_D(F_e-1)=D_DF_e
$$

Dabei ist $F_e$ die Rauschzahl des Empfängers ohne Duplexer. Daraus folgt:

$$
F'_e\,[\mathrm{dB}] = D_D\,[\mathrm{dB}] + F_e\,[\mathrm{dB}]
$$

Für typische Duplexer gilt $D_D \approx 3 \dots 4\,\mathrm{dB}$. Demnach nimmt der maximale Dynamikbereich durch den Einsatz des Duplexers um den Faktor $D_D$ ab; dagegen nimmt der verfügbare Dynamikbereich bei einem Betrieb in der Nähe anderer Mobilgeräte erheblich zu, da deren vergleichsweise starke Sendesignale nicht mehr in den Empfänger gelangen können.
<!-- page-import:1301:end -->

<!-- page-import:1302:start -->
22.2 Empfänger 1265

Der verfügbare Dynamikbereich hängt auch von der Sperrdämpfung der HF- und ZF-Filter ab. Wenn z.B. das letzte ZF-Filter eine Sperrdämpfung von 50 dB aufweist, der Pegel des Nachbarkanals aber um 50 dB höher ist, sind die Pegel des Nutz- und des Nachbarkanals am Ausgang des Filters gleich; in diesem Fall ist kein Empfang mehr möglich. Auch die Lage der Spiegelfrequenzen und die dort auftretenden Pegel, die durch die Wahl der ZF-Frequenzen festgelegt wird, wirkt sich auf den verfügbaren Dynamikbereich aus. Deshalb muss man bei der Entwicklung eines Empfängers neben den hier angestellten Betrachtungen noch eine Vielzahl von anwendungsspezifischen Nebenbedingungen berücksichtigen.

## 22.2.5 Empfänger für digitale Modulationsverfahren

Empfänger für digitale Modulationsverfahren sind prinzipiell genauso aufgebaut wie Empfänger für analoge Modulationsverfahren; sie unterscheiden sich nur bezüglich des Demodulators: während analoge Demodulatoren das ZF-Signal direkt verarbeiten, erfolgt bei digitalen Demodulatoren eine zusätzliche Frequenzumsetzung mit einem I/Q-Mischer zur Bereitstellung der Quadraturkomponenten $i(t)$ und $q(t)$; diese werden dem digitalen Demodulator zugeführt.

Den prinzipiellen Aufbau eines Demodulators für digitale Modulationsverfahren haben wir bereits in Abb. 21.70 gezeigt; er ist in Abb. 22.25a noch einmal dargestellt, ergänzt um eine Verstärkungsregelung. Als Eingangssignal dient das ZF-Signal $e_{ZF}(t)$ eines Überlagerungsempfängers mit einer oder zwei Zwischenfrequenzen, siehe Abb. 22.8b bzw. Abb. 22.12; es entspricht dem Trägersignal $s_T(t)$ aus Abb. 21.70. Daraus erhält man mit einem I/Q-Mischer und zwei Tiefpässen die Quadraturkomponenten $i(t)$ und $q(t)$, die dem Demodulator zugeführt werden.

Die Tiefpässe nach dem I/Q-Mischer bewirken im Vergleich zu einem Empfänger für analoge Modulationsverfahren eine zusätzliche Filterung. Deshalb erfolgt die Ausfilterung des gewünschten Kanals bei einem Empfänger für digitale Modulationsverfahren normalerweise nicht durch das letzte ZF-Filter, sondern erst durch die Tiefpässe nach dem I/Q-Mischer; sie werden deshalb in Abb. 22.25a auch als Kanalfilter bezeichnet. In diesem Fall hat ein Empfänger für digitale Modulationsverfahren bereits mit einer Zwischenfrequenz bezüglich der Filterung dieselben Eigenschaften wie ein Empfänger für analoge Modulationsverfahren mit zwei Zwischenfrequenzen. Abbildung 22.26 zeigt die zugehörigen Betragsspektren für den $i$-Zweig; sie gelten in gleicher Weise für den $q$-Zweig.

Die Kanalfilterung nach dem I/Q-Mischer hat jedoch zwei Nachteile:

- Die Verstärkungsregelung kann erst nach den Tiefpässen durchgeführt werden, da das ZF-Signal noch Nachbarkanäle mit wesentlich höheren Pegeln enthalten kann. Zur Regelung werden zwei regelbare Verstärker benötigt, die den mittleren Betrag

$$
|e_B(t)| = \sqrt{i^2(t) + q^2(t)}
$$

des komplexen Basisbandsignals $e_B(t) = i(t) + j\,q(t)$ auf einen Sollwert verstärken. Eine analoge Realisierung dieser Verstärkungsregelung ist aufwendig.
- Die Tiefpässe zur Kanalfilterung müssen sehr steile Flanken besitzen, da die Frequenzlücke zwischen dem Nutz- und den Nachbarkanälen sehr klein ist; gleichzeitig muss die Gruppenlaufzeit im Nutzkanal möglichst konstant sein, da digitale Modulationsverfahren sehr empfindlich auf Laufzeitverzerrungen reagieren. Diese Forderungen sind mit analogen Tiefpässen nur schwer zu erfüllen.
<!-- page-import:1302:end -->

<!-- page-import:1303:start -->
1266  22. Sender und Empfänger

I/Q-Mischer

MI

$e_{ZF}(t)$

$f_{ZF}$

$0^\circ$

$90^\circ$

MQ

Tiefpässe (Kanalfilter)

Verstärkungs-
regelung

$i(t)$

$q(t)$

Demodulator
mit
analogen
Eingängen

$e(n)$

a mit analogen Kanalfiltern und analoger Verstärkungsregelung

I/Q-Mischer

MI

$e_{ZF}(t)$

$f_{ZF}$

$0^\circ$

$90^\circ$

MQ

Anti-Alias-
Filter

digitale
Kanalfilter

$i(n)$

$q(n)$

Demodulator
mit
digitalen
Eingängen
und
digitaler
Verstärkungs-
regelung

$e(n)$

b mit digitalen Kanalfiltern

$e_{ZF}(t)$

$e_{AD}(n)$

digitaler
I/Q-
Mischer

$i_M(n)$

$q_M(n)$

digitale
Kanalfilter

$i(n)$

$q(n)$

Demodulator
mit
digitalen
Eingängen
und
digitaler
Verstärkungs-
regelung

$e(n)$

c mit ZF-Abtastung und digitalen Kanalfiltern

**Abb. 22.25.** Empfänger für digitale Modulationsverfahren (ohne HF- und ZF-Komponenten, siehe hierzu Abb. 22.8b und Abb. 22.12)

Aufgrund dieser Nachteile wird ein Demodulator mit analogen Eingängen in der Praxis meist in Verbindung mit einer Kanalfilterung und Verstärkungsregelung im ZF-Bereich eingesetzt; in diesem Fall werden die Tiefpässe in Abb. 22.25a nur zur Unterdrückung der Anteile bei der doppelten ZF-Frequenz benötigt und die Verstärkungsregelung für $i$ und $q$ entfällt.
<!-- page-import:1303:end -->

<!-- page-import:1304:start -->
22.2 Empfänger 1267

Abb. 22.26. Betragsspektren für einen digitalen Empfänger mit analogen Kanalfiltern nach Abb. 22.25a (nur i-Zweig, q-Zweig ist identisch)

## 22.2.5.1 Empfänger mit digitalen Kanalfiltern

### 22.2.5.1.1 Aufbau

Eine für die Praxis besser geeignete Ausführung erhält man, wenn man die Kanalfilter als digitale Filter ausführt und einen Demodulator mit digitalen Eingängen verwendet, siehe Abb. 22.25b; dazu werden die Ausgangssignale des I/Q-Mischers einer Anti-Alias-Filterung unterzogen und mit zwei A/D-Umsetzern digitalisiert. Die digitalen Kanalfilter werden als linearphasige FIR-Filter ausgeführt; dadurch werden Laufzeitverzerrungen vermieden. Die Verstärkungsregelung ist in den Demodulator integriert und an das jeweilige Modulationsverfahren angepasst. Abbildung 22.27 zeigt die Betragsspektren für den i-Zweig; sie gelten in gleicher Weise für den q-Zweig.

Die Anforderungen an die Anti-Alias-Filter sind vergleichsweise gering, da für den Übergang vom Durchlass- in den Sperrbereich nach Abb. 22.27 ein Bereich der Breite $2\,f_{ZF} - (B_{ZF} + B)/2$ zur Verfügung steht; meist reicht ein LC-Filter zweiten oder dritten Grades aus. In der Praxis ist im Ausgangssignal der Mischer zusätzlich das ZF- und das Lokaloszillatorsignal in abgeschwächter Form vorhanden; Ursache hierfür sind Unsymmetrien und Übersprechen in den Mischern. Das ZF-Signal ist in den meisten Fällen ausreichend stark gedämpft, so dass es nicht mehr störend wirkt. Das Lokaloszillatorsignal hat einen wesentlich höheren Pegel und muss deshalb zusätzlich gedämpft werden; dies kann auf zwei Arten geschehen:
<!-- page-import:1304:end -->

<!-- page-import:1305:start -->
1268  22. Sender und Empfänger

$e_{ZF}(t)$

$f_{ZF}$

MI

$e_{MI}(t)$

Anti-Alias-Filter

$e_{AA}(t)$

A/D

$e_{AD}(n)$

digitales Kanalfilter

$i(n)$

$|E_{ZF}|$

$B_{ZF}$

$B$

$f_{ZF}$

$f_{ZF}+B_{ZF}/2$

$f$

$|E_{MI}|$

$2f_{ZF}-(B_{ZF}+B)/2$

Anti-Alias-Filter

$B/2$

$B_{ZF}/2$

$f_{ZF}$

$2f_{ZF}-B_{ZF}/2$

$2f_{ZF}$

$f$

$|E_{AA}|$

$B_{ZF}/2$

$f$

$|E_{AA}|$

$B/2$

$B_{ZF}/2$

$f$

$|E_{AD}|$

$B/2$

$B_{ZF}/2$

$f_A-B_{ZF}/2$

$f_A/2$

$B_{ZF}/2$

$f_A$

$f$

$|I|$

$B/2$

Hauptbereich  
$(f<f_A/2)$

Aliasbereiche  
$(f>f_A/2)$

$f_A/2$

$f$

**Abb. 22.27.** Betragsspektren bei einem digitalen Empfänger mit digitalen Kanalfiltern nach Abb. 22.25b (nur $i$-Zweig, $q$-Zweig ist identisch)

- Die Anti-Alias-Filter werden um Sperrfilter ergänzt, deren Resonanzfrequenz auf die ZF-Frequenz abgestimmt wird, siehe Abb. 22.28.
- Die Abtastfrequenz der A/D-Umsetzer wird so gewählt, dass der Abstand zwischen der ZF-Frequenz und den Harmonischen der Abtastfrequenz größer als die halbe Bandbreite des Nutzsignals (= $B/2$) ist; dann fällt die ZF-Frequenz nach der Abtastung in den Sperrbereich der digitalen Kanalfilter.
<!-- page-import:1305:end -->

<!-- page-import:1306:start -->
22.2 Empfänger 1269

a mit Serienschwingkreis

b mit Parallelschwingkreis

**Abb. 22.28.** Anti-Alias-Filter mit Sperrfilter für die ZF-Frequenz zur Dämpfung des Lokaloszillatorsignals

Man kann auch beide Verfahren kombinieren.

Nach der Anti-Alias-Filterung hat das Signal eine obere Grenzfrequenz entsprechend der halben Bandbreite des ZF-Filters (= $B_{ZF}/2$), siehe Abb. 22.27; deshalb wäre für eine Alias-freie A/D-Umsetzung eine Abtastfrequenz $f_A > B_{ZF}$ erforderlich. Da das nachfolgende digitale Kanalfilter alle Anteile oberhalb der halben Bandbreite des Nutzsignals (= $B/2$) unterdrückt, kann man in diesem Bereich ein Aliasing zulassen; daraus folgt für die Abtastfrequenz:

$$
f_A > \frac{B_{ZF} + B}{2}
$$

(22.18)

In Abb. 22.27 ist der Grenzfall minimaler Abtastfrequenz dargestellt; dann reichen die gestrichelt dargestellten Alias-Komponenten bis an die Grenze des Nutzkanals.

Das ZF-Signal und die Signale nach den Mischern enthalten noch mehrere Nachbarkanäle; deshalb kann der Gesamtpegel dieser Signale wesentlich höher sein als der Pegel des Nutzkanals. Damit die A/D-Umsetzer in diesem Fall nicht übersteuert werden, muss neben der in den Demodulator integrierten Verstärkungsregelung für den Nutzkanal eine Verstärkungsregelung für das ZF-Signal eingesetzt werden; dazu wird die in den Überlagerungsempfängern nach Abb. 22.8b bzw. Abb. 22.12 vorhandene Verstärkungsregelung im ZF-Bereich verwendet.

#### 22.2.5.1.2 Dynamikbereich

Der verfügbare Dynamikbereich des Empfängers hängt maßgeblich von der Auflösung der A/D-Umsetzer ab. Wir zeigen dies für den Fall eines Nutzkanals mit der Leistung $P_K$ und eines Nachbarkanals mit der Leistung $P_{NK}$. Abbildung 22.29 zeigt das zugehörige Betragsquadrat des Spektrums am Ausgang eines der A/D-Umsetzer. Die Leistungen der Kanäle entsprechen der Fläche unter der jeweiligen Betragsquadrat-Kurve 5. $P_{r,Q}$ ist die Leistung des Quantisierungsgeräusches des A/D-Umsetzers; sie ist im Frequenzintervall von Null bis zur halben Abtastfrequenz gleichverteilt. Wir nehmen an, dass die Leistung

5 Die Leistung eines Signals $x(t)$ mit der Fouriertransformierten (zweiseitiges Spektrum) $X(f)$ beträgt:

$$
P_x = \int_{-\infty}^{+\infty} |X(f)|^2\,df
$$

Dieser Zusammenhang wird Parseval’sche Gleichung genannt. Wir verwenden einseitige Betragsspektren; dann entfallen die negativen Frequenzen und die untere Grenze des Integrals wird zu Null.
<!-- page-import:1306:end -->

<!-- page-import:1307:start -->
1270  22. Sender und Empfänger

Abb. 22.29. Betragsquadrat des Spektrums am Ausgang des A/D-Umsetzers bei einem Nutzkanal mit der Leistung $P_K$ und einem Nachbarkanal mit der Leistung $P_{NK}$. $P_{r,Q}$ ist die Leistung des Quantisierungsgeräusches, $P_{r,K}$ der Anteil im Nutzkanal.

im Nachbarkanal deutlich größer ist als die Leistung im Nutzkanal; dann ist die Gesamtleistung etwa gleich der Leistung im Nachbarkanal:

$$
P = P_K + P_{NK} + P_{r,Q} \qquad \overset{P_{NK} \gg P_K,\, P_{r,Q}}{\approx} \qquad P_{NK}
$$

Ein idealer A/D-Umsetzer mit einer Auflösung von $N$ Bit erreicht bei Vollaussteuerung einen Signal-Geräusch-Abstand:

$$
SNR = \frac{3 \cdot 2^{2N}}{C^2}
\qquad \Rightarrow \qquad
SNR\,[\mathrm{dB}] = N \cdot 6\,\mathrm{dB} + 4{,}8\,\mathrm{dB} - C\,[\mathrm{dB}]
$$
(22.19)

Dabei ist

$$
C = \frac{\text{Spitzenwert}}{\text{Effektivwert}} = \frac{u_{max}}{u_{eff}}
$$
(22.20)

der Spitzenwertfaktor (crest factor) des Signals; er liegt zwischen $C = 1$ (0 dB) für ein Rechteck-Signal und $C \approx 4$ (12 dB) für ein rauschartiges Signal ${}^6$. Demnach hängt der erzielbare Signal-Geräusch-Abstand von der Art des Signals im Nachbarkanal ab. Aus der Gesamtleistung $P$ und dem Signal-Geräusch-Abstand kann man die Leistung des Quantisierungsgeräusches berechnen:

$$
SNR = \frac{P}{P_{r,Q}}
\qquad \Rightarrow \qquad
P_{r,Q} = \frac{P}{SNR} = \frac{P C^2}{3 \cdot 2^{2N}}
$$

Davon fällt der Anteil

$$
P_{r,K} = P_{r,Q}\,\frac{B}{f_A} = \frac{P C^2}{3 \cdot 2^{2N}}\,\frac{B}{f_A}
$$

in den Nutzkanal, siehe Abb. 22.29. Damit eine korrekte Demodulation des Nutzsignals möglich ist, muss der Signal-Geräusch-Abstand $SNR_K$ im Nutzkanal größer sein als der minimale Signal-Geräusch-Abstand $SNR_{e,min}$ des verwendeten Modulationsverfahrens:

---

${}^6$ Für ein sinusförmiges Signal mit $C = \sqrt{2}$ (3 dB) erhält man aus (22.19) den Zusammenhang $SNR = N \cdot 6\,\mathrm{dB} + 1{,}8\,\mathrm{dB}$, siehe (17.12) auf Seite 1014.
<!-- page-import:1307:end -->

<!-- page-import:1308:start -->
22.2 Empfänger 1271

$$
SNR_K = \frac{P_K}{P_{r,K}} > SNR_{e,min}
$$

Daraus folgt für die Leistung im Nutzkanal

$$
P_K > \frac{SNR_{e,min}\,P\,C^2}{3 \cdot 2^{2N}} \frac{B}{f_A}
\qquad (22.21)
$$

und für das zulässige Verhältnis aus Nachbarkanal- und Nutzkanal-Leistung (verfügbarer Dynamikbereich):

$$
\frac{P_{NK}}{P_K} \overset{P_{NK}\approx P}{\approx} \frac{P}{P_K}
< \frac{3 \cdot 2^{2N}}{SNR_{e,min} C^2} \frac{f_A}{B}
\qquad (22.22)
$$

Die Größen $SNR_{e,min}$, $C$ und $B$ sind durch das verwendete Modulationsverfahren vorgegeben; deshalb wird der verfügbare Dynamikbereich in erster Linie durch die Auflösung $N$ des A/D-Umsetzers und die Abtastfrequenz $f_A$ festgelegt. Während bei Audio-Anwendungen häufig die Abtastrate erhöht wird, um einen besseren Signal-Geräusch-Abstand zu erzielen (oversampling), ist dies bei Empfängern aufgrund der sehr hohen minimalen Abtastrate im allgemeinen nicht möglich; hier muss die Auflösung erhöht werden, wenn der verfügbare Dynamikbereich zu klein ist.

Der Signal-Rausch-Abstand realer A/D-Umsetzer ist aufgrund vielfältiger Störeinflüsse geringer als der eines idealen A/D-Umsetzers nach (22.19); deshalb muss man in der Praxis anstelle der Auflösung $N$ die effektive Auflösung $N_{eff} < N$ einsetzen, die im Datenblatt angegeben ist. In vielen Datenblättern wird anstelle der effektiven Auflösung der Signal-Geräusch-Abstand für ein Sinussignal in Abhängigkeit von der Signal- und der Abtastfrequenz angegeben; daraus erhält man mit

$$
N_{eff} = \frac{SNR\,[\mathrm{dB}] - 1{,}8\,\mathrm{dB}}{6\,\mathrm{dB}}
\qquad (22.23)
$$

die effektive Auflösung.

*Beispiel:* Wir betrachten einen Empfänger für ein QPSK-System mit einer Datenrate $r_D = 200\,\mathrm{kBit/s}$, einem Rolloff-Faktor $r = 1$ und einer Bandbreite $B = 200\,\mathrm{kHz}$. Die Bandbreite des letzten ZF-Filters soll $B_{ZF} = 1\,\mathrm{MHz}$ betragen. Für die Abtastfrequenz muss nach (22.18)

$$
f_A > \frac{B_{ZF} + B}{2} = 600\,\mathrm{kHz}
$$

gelten; wir wählen $f_A = 800\,\mathrm{kHz}$. Bei QPSK ist bei einer Fehlerrate von $10^{-6}$ ein minimaler Signal-Geräusch-Abstand $SNR_{e,min} = 20$ (13 dB) erforderlich [22.2]; bei $r = 1$ beträgt der Spitzenwertfaktor $C \approx 1{,}25$ (2 dB). Wir nehmen ferner an, dass der verfügbare Dynamikbereich $P_{NK}/P_K = 10^6$ (60 dB) betragen soll; daraus folgt durch Auflösen von (22.22) nach $N$:

$$
N > \frac{1}{2}\,\mathrm{ld}\left(\frac{P_{NK}}{P_K}\frac{SNR_{e,min} C^2}{3}\frac{B}{f_A}\right)
= \frac{1}{2}\,\mathrm{ld}\left(10^6 \cdot 10{,}4 \cdot \frac{1}{4}\right) \approx 10{,}7
$$

Demnach wird ein A/D-Umsetzer mit einer effektiven Auflösung von mindestens 10,7 Bit bei $f_A = 800\,\mathrm{kHz}$ benötigt; dem entspricht nach (22.23) ein Signal-Geräusch-Abstand $SNR = 10{,}7 \cdot 6\,\mathrm{dB} + 1{,}8\,\mathrm{dB} = 66\,\mathrm{dB}$ bei Betrieb mit einem Sinussignal. In der Praxis ist dazu ein 12 Bit-Umsetzer erforderlich.
<!-- page-import:1308:end -->

<!-- page-import:1309:start -->
1272  22. Sender und Empfänger

Dieses Beispiel ist typisch für Empfänger mit digitalen Kanalfiltern. Es werden A/D-Umsetzer mit vergleichsweise hohen Auflösungen benötigt, obwohl der erforderliche Signal-Rausch-Abstand $SNR_{e,min}$ im Nutzkanal sehr klein ist. Ursache hierfür sind Signale mit hohen Pegeln in den Nachbarkanälen.

#### 22.2.5.2 Empfänger mit ZF-Abtastung und digitalen Kanalfiltern

Wenn man zusätzlich zu den Kanalfiltern auch den I/Q-Mischer digital ausführt, erhält man den in Abb. 22.25c gezeigten Empfänger mit ZF-Abtastung (*IF sampling*), bei dem bereits das ZF-Signal digitalisiert wird. Da die Bandbreite $B_{ZF}$ des ZF-Signals im allgemeinen wesentlich geringer ist als die ZF-Frequenz, kann man eine Unterabtastung (*subsampling*) vornehmen, d.h. die Abtastfrequenz $f_A$ kleiner wählen als die ZF-Frequenz, ohne dass die Forderung $f_A > 2 B_{ZF}$ des Abtasttheorems verletzt wird. Durch den Alias-Effekt wird das ZF-Signal auf eine niedrigere Frequenz umgesetzt; Abb. 22.30 zeigt dies am Beispiel einer Abtastung im ersten, zweiten und dritten Aliasbereich im Vergleich zu einer Abtastung im Hauptbereich.

Bei einer Abtastung im Hauptbereich muss das Abtasttheorem in seiner gewohnten Form eingehalten werden, d.h. die obere Grenzfrequenz muss kleiner sein als die halbe Abtastfrequenz:

$$
f_g = f_{ZF} + \frac{B_{ZF}}{2} < \frac{f_A}{2}
$$

Bei einer Unterabtastung im $m$-ten Aliasbereich muss das ZF-Signal vollständig in diesem Bereich enthalten sein 7; dazu muss an der unteren Grenze

$$
f_{ZF} - \frac{B_{ZF}}{2} > m \ \frac{f_A}{2}
$$

und an der oberen Grenze

$$
f_{ZF} + \frac{B_{ZF}}{2} < (m + 1)\frac{f_A}{2}
$$

gelten. Durch Zusammenfassen erhält man die allgemeine Bedingung für die Abtastfrequenz $f_A$:

$$
\frac{2f_{ZF} + B_{ZF}}{m + 1} < f_A < \frac{2f_{ZF} - B_{ZF}}{m}
\qquad \text{mit } m \leq \frac{f_{ZF}}{B_{ZF}} - \frac{1}{2}
$$

(22.24)

Sie gilt mit $m = 0$ auch für den Hauptbereich; in diesem Fall entfällt die obere Grenze. Aus (22.24) folgt durch Einsetzen des maximal möglichen, ganzzahligen Wertes für $m$ die minimale Abtastfrequenz $f_{A,min}$; sie hängt vom Quotienten $f_{ZF}/B_{ZF}$ ab und liegt im Bereich:

$$
2B_{ZF} < f_{A,min} < 2B_{ZF}\left(1 + \frac{B_{ZF}}{2f_{ZF}}\right)
$$

Für die digitale ZF-Frequenz $f_{ZF,D}$ am Ausgang des A/D-Umsetzers erhält man:

$$
f_{ZF,D} =
\begin{cases}
f_{ZF} - m\ \frac{f_A}{2} & m \text{ gerade} \\
(m + 1)\frac{f_A}{2} - f_{ZF} & m \text{ ungerade}
\end{cases}
$$

(22.25)

Daraus folgt, dass das ZF-Signal bei geradzahligen Werten von $m$ in Gleichlage und bei ungeradzahligen in Kehrlage umgesetzt wird, siehe Abb. 22.30. Eine Kehrlage muss
<!-- page-import:1309:end -->

<!-- page-import:1310:start -->
22.2 Empfänger 1273

a Abtastung im Hauptbereich $(m = 0, \text{Normallage})$

$f_g = f_{ZF} + B_{ZF}/2$

b Unterabtastung im ersten Aliasbereich $(m = 1, \text{Kehrlage})$

$f_{ZF,D} = f_A - f_{ZF}$

c Unterabtastung im zweiten Aliasbereich $(m = 2, \text{Normallage})$

$f_{ZF,D} = f_{ZF} - f_A$

d Unterabtastung im dritten Aliasbereich $(m = 3, \text{Kehrlage})$

$f_{ZF,D} = 2f_A - f_{ZF}$

**Abb. 22.30.** Frequenzumsetzung bei ZF-Abtastung

entweder im Demodulator berücksichtigt oder durch eine Kehrlage im Sender oder den Mischern des vorausgehenden Überlagerungsempfängers kompensiert werden.

Aus dem digitalen Ausgangssignal $e_{AD}(n)$ des A/D-Umsetzers bildet der digitale I/Q-Mischer die Signale:

$$
i_M(n) = e_{AD}(n)\cos\left(2\pi n\,\frac{f_{ZF,D}}{f_A}\right)
$$

$$
q_M(n) = -e_{AD}(n)\sin\left(2\pi n\,\frac{f_{ZF,D}}{f_A}\right)
$$

7 Diese Bedingung gilt nur für den Fall, dass man das gesamte ZF-Signal digital verarbeiten will. Beschränkt man sich auf den Nutzkanal, kann man ein Aliasing zulassen, solange der Nutzkanal nicht betroffen ist. Wir gehen darauf später noch näher ein.
<!-- page-import:1310:end -->

<!-- page-import:1311:start -->
1274  22. Sender und Empfänger

Abb. 22.31. Digitaler Empfänger mit ZF-Abtastung für den Fall $f_{ZF,D} = f_A/4$. Die Schalter werden synchron mit dem A/D-Umsetzer umgeschaltet.

Daraus erhält man nach der Kanalfilterung die digitalen Quadraturkomponenten $i(n)$ und $q(n)$. Der digitale I/Q-Mischer wird besonders einfach, wenn die digitale ZF-Frequenz gleich einem Viertel der Abtastfrequenz ist; dann gilt

$$
f_{ZF,D}=\frac{f_A}{4}\ \Rightarrow\
\begin{cases}
i_M(n)=e_{AD}(n)\cos\left(\frac{\pi n}{2}\right)\\
q_M(n)=-e_{AD}(n)\sin\left(\frac{\pi n}{2}\right)
\end{cases}
\qquad (22.26)
$$

mit:

$$
\cos\left(\frac{\pi n}{2}\right)=1,0,-1,0,\ldots \qquad \text{für } n=0,1,2,3,\ldots
$$

$$
\sin\left(\frac{\pi n}{2}\right)=0,1,0,-1,\ldots \qquad \text{für } n=0,1,2,3,\ldots
$$

In diesem Fall treten nur die Faktoren 0 (Wert wird unterdrückt), 1 (Wert wird übernommen) und $-1$ (Wert wird mit invertiertem Vorzeichen übernommen) auf und man muss keine Multiplikationen durchführen. Aus (22.26) erhält man den Zusammenhang:

$$
i_M(n)=\left[\, e_{AD}(0),\quad 0,\quad -e_{AD}(2),\quad 0,\quad e_{AD}(4),\quad 0,\quad \ldots \,\right]
$$

$$
q_M(n)=\left[\, 0,\quad -e_{AD}(1),\quad 0,\quad e_{AD}(3),\quad 0,\quad -e_{AD}(5),\quad \ldots \,\right]
$$

Demnach muss die Folge $e_{AD}(n)$ über einen gesteuerten Invertierer geführt und anschließend mit einem Demultiplexer auf die beiden Ausgänge verteilt werden; daraus folgt die in Abb. 22.31 gezeigte Realisierung eines digitalen Empfängers mit ZF-Abtastung.

Für die Abtastfrequenz erhält man durch Einsetzen von (22.26) in (22.25) die Bedingung:

$$
f_A=\frac{4\,f_{ZF}}{2m+1}
\qquad \text{mit } m\leq \frac{f_{ZF}}{B_{ZF}}-\frac{1}{2}
\qquad (22.27)
$$

Daraus folgt $f_A=4\,f_{ZF}$ für den Hauptbereich ($m=0$, Gleichlage), $f_A=4\,f_{ZF}/3$ für den ersten Aliasbereich ($m=1$, Kehrlage), $f_A=4\,f_{ZF}/5$ für den zweiten Aliasbereich ($m=2$, Gleichlage), usw. In Abb. 22.30 ist diese Bedingung eingehalten. Abbildung 22.32 zeigt einige gängige ZF-Frequenzen zusammen mit den zugehörigen Abtastfrequenzen für $m=0\ldots4$.
<!-- page-import:1311:end -->

<!-- page-import:1312:start -->
22.2 Empfänger 1275

| ZF-Frequenz | $m = 0$ | $m = 1$ | $m = 2$ | $m = 3$ | $m = 4$ |
|---|---:|---:|---:|---:|---:|
|  | Abtastfrequenzen |  |  |  |  |
| 455 kHz | 1,82 MHz | 606,67 kHz | 364 kHz | 260 kHz | 202,22 kHz |
| 10,7 MHz | 42,8 MHz | 14,267 MHz | 8,56 MHz | 6,114 MHz | 4,756 MHz |
| 21,4 MHz | 85,6 MHz | 28,533 MHz | 17,12 MHz | 12,23 MHz | 9,511 MHz |
| 70 MHz | 280 MHz | 93,33 MHz | 56 MHz | 40 MHz | 31,11 MHz |

**Abb. 22.32.** Abtastfrequenzen für einige gängige ZF-Frequenzen

Zur Unterabtastung muss man spezielle, für Unterabtastung geeignete A/D-Umsetzer verwenden, da die Analogbandbreite, d.h. die Bandbreite des analogen Eingangsteils und des Abtast-Halte-Glieds, in diesem Fall größer sein muss als die Abtastfrequenz.

Abbildung 22.33 zeigt die Betragsspektren eines digitalen Empfängers mit ZF-Abtastung für den Fall $f_{\mathrm{ZF},D} = f_A/4$ und $f_A = 4\,f_{\mathrm{ZF}}/5$ $(m = 2)$. Man erkennt, dass bei Einhaltung der Bedingung (22.27) kein Aliasing auftritt; deshalb wird das gesamte ZF-Signal unverfälscht digitalisiert. Man kann demnach auch die Nachbarkanäle empfangen, indem man anstelle der Tiefpässe Bandpässe als Kanalfilter einsetzt und deren Ausgangssignal noch einmal frequenzmäßig umsetzt. Dadurch wird es möglich, *alle* vollständig im Durchlassbereich des ZF-Filters liegenden Kanäle ohne Änderung der Lokaloszillatorfrequenzen zu empfangen. Die Umschaltung der Kanalfilter ist in der Praxis besonders einfach, da die Kanalfilterung im allgemeinen mit einem digitalen Signalprozessor (DSP) durchgeführt wird; man muss dann nur die Koeffizienten für das Filter austauschen. Dieses Verfahren ist vor allem für schmalbandige Systeme von Interesse, da nun eine ganze Gruppe von Kanälen mit denselben Lokaloszillatorfrequenzen empfangen werden kann. Im Extremfall liegt das gesamte Frequenzband der Anwendung innerhalb der ZF-Bandbreite; dann kann man mit festen Lokaloszillatorfrequenzen arbeiten und die Kanalauswahl ausschließlich über die Umschaltung der Kanalfilter vornehmen. Wenn man dagegen, wie in Abb. 22.33, nur den Nutzkanal verarbeiten will, kann man ein Aliasing zulassen, solange der Nutzkanal nicht betroffen ist; dadurch kann die Bedingung für $m$ in (22.27) weiter gefasst werden. Wir gehen anschaulich vor, indem wir die ZF-Bandbreite in Abb. 22.33 so weit vergrößern, dass gerade noch kein Aliasing im Nutzkanal auftritt, siehe Abb. 22.34; es gilt:

$$
B_{\mathrm{ZF},max} = f_A - B \Rightarrow f_A > B_{\mathrm{ZF}} + B
$$

(22.28)

Setzt man (22.27) in (22.28) ein und löst nach $m$ auf, erhält man die Bedingung:

$$
m < \frac{2f_{\mathrm{ZF}}}{B_{\mathrm{ZF}} + B} - \frac{1}{2}
$$

(22.29)

Ein Vergleich von (22.28) und (22.18) zeigt, dass die minimale Abtastfrequenz bei einer ZF-Abtastung doppelt so hoch ist wie bei einer Abtastung der Quadraturkomponenten nach analoger I/Q-Mischung. Die Ursache hierfür liegt darin, dass das ZF-Signal *beide* Quadraturkomponenten enthält:

$$
e_{\mathrm{ZF}}(t) = i(t)\cos(2\pi\,f_{\mathrm{ZF}}t) - q(t)\sin(2\pi\,f_{\mathrm{ZF}}t)
$$

Man kann demnach eine ZF-Abtastung mit *einem* A/D-Umsetzer und der Abtastrate nach (22.28) oder eine Abtastung der Quadraturkomponenten mit *zwei* A/D-Umsetzern und der *halben* Abtastrate vornehmen.
<!-- page-import:1312:end -->

<!-- page-import:1313:start -->
1276 22. Sender und Empfänger

Abb. 22.33. Betragsspektren bei einem digitalen Empfänger mit ZF-Abtastung für $f_{ZF,D} = f_A/4$ und $f_A = 4\,f_{ZF}/5$ $(m = 2)$

Abb. 22.34. Maximale ZF-Bandbreite bei Unterabtastung

## 22.2.5.3 Vergleich der Empfänger für digitale Modulationsverfahren

Der Empfänger mit analogen Kanalfiltern nach Abb. 22.25a wird in dieser Form nicht eingesetzt. Von Bedeutung ist nur die Variante mit Kanalfilterung und Verstärkungsregelung im ZF-Bereich; die analogen Tiefpässe werden dann nur noch zur Unterdrückung der
<!-- page-import:1313:end -->

<!-- page-import:1314:start -->
22.2 Empfänger 1277

Anteile bei der doppelten ZF-Frequenz benötigt. Diese Variante wird häufig bei einfachen Systemen mit einfachen Modulationsverfahren und vergleichsweise niedrigen Datenraten eingesetzt.

Der Empfänger mit digitalen Kanalfiltern ist weit verbreitet. Er ermöglicht eine wesentlich bessere Trennung von Nutz- und Nachbarkanälen; dadurch kann man die Frequenzlücke zwischen den Kanälen sehr klein machen und das für die Anwendung zur Verfügung stehende Frequenzband besser nutzen. Die Abtastung der Quadraturkomponenten kann mit A/D-Umsetzern mit geringer Analogbandbreite erfolgen; dadurch bleibt die Verlustleistung im Analogteil der Umsetzer gering. Mit zunehmender Komplexität des Modulationsverfahrens machen sich die unvermeidlichen Unsymmetrien im analogen I/Q-Mischer immer stärker störend bemerkbar; dadurch nimmt die Bitfehlerrate zu. Ein sorgfältiger Abgleich des I/Q-Mischers bezüglich Amplitude und Phase der beiden Signalpfade ist bei komplexen Modulationsverfahren unumgänglich. Dieser Abgleich muss temperatur- und langzeitstabil sein, damit die Anforderungen dauerhaft eingehalten werden.

Der digitale I/Q-Mischer im Empfänger mit ZF-Abtastung arbeitet exakt; deshalb erzielt man mit diesem Empfänger die besten Ergebnisse. Wenn die Bedingung $f_{ZF,D} = f_A/4$ eingehalten wird, besteht der Mischer nur aus drei Multiplexern und einem Invertierer.

## 22.2.5.4 Direktumsetzender Empfänger

Wenn man bei den Empfängern für digitale Modulationsverfahren in Abb. 22.25 auf Seite 1266 anstelle eines ZF-Signals das HF-Signal als Eingangssignal verwendet, erhält man einen direktumsetzenden Empfänger (*direct conversion receiver*). Der vorausgehende Überlagerungsempfänger reduziert sich auf den Vorverstärker und das HF-Filter; alle ZF-Komponenten entfallen. In der Praxis wird fast ausschließlich der Empfänger mit digitalen Kanalfiltern nach Abb. 22.25b verwendet; dabei muss nach dem I/Q-Mischer eine Verstärkungsregelung erfolgen, damit die A/D-Umsetzer optimal ausgesteuert werden. Die Verstärkungsregelung für den Nutzkanal erfolgt wie gewohnt im Demodulator. Daraus folgt die in Abb. 22.35 gezeigte, typische Ausführung eines direktumsetzenden Empfängers. Abbildung 22.36 zeigt die zugehörigen Betragsspektren für den $i$-Zweig; sie gelten in gleicher Weise für den $q$-Zweig.

Beim direktumsetzenden Empfänger treten keine Spiegelfrequenzen auf; deshalb wird das HF-Filter nur zur Begrenzung des Empfangsbandes mit dem Ziel einer Begrenzung der Empfangsleistung benötigt. Die Bandbreite des HF-Filters muss wie beim Überlagerungsempfänger mindestens so groß sein wie der zu empfangende Frequenzbereich; sie kann aber auch größer sein, solange die zusätzliche Empfangsleistung den Dynamikbereich der nachfolgenden Komponenten nicht zu sehr einschränkt.

In den Ausgangssignalen des I/Q-Mischers sind neben den Anteilen bei den Differenzfrequenzen im Bereich $0 \leq f \leq B_{HF}/2$ auch noch Anteile bei den Summenfrequenzen im Bereich von $2f_{HF}$ enthalten; hinzu kommen Anteile bei $f_{HF}$, die durch Übersprechen in den Mischern verursacht werden. Diese Anteile werden durch das Anti-Alias-Filter unterdrückt.

Die minimale Abtastfrequenz der A/D-Umsetzer hängt von der Bandbreite $B$ des Nutzkanals und von der Bandbreite $B_{AAF}$ des Anti-Alias-Filters oder der Bandbreite $B_{HF}$ des HF-Filters ab, je nachdem, welche von den beiden Bandbreiten kleiner ist:
<!-- page-import:1314:end -->

<!-- page-import:1315:start -->
1278  22. Sender und Empfänger

Abb. 22.35. Direktumsetzender Empfänger (*direct conversion receiver*)

$$
f_A > \left\{
\begin{array}{ll}
\frac{B + B_{AAF}}{2} & \text{für } B_{AAF} < B_{HF} \\
\frac{B + B_{HF}}{2} & \text{für } B_{AAF} \geq B_{HF}
\end{array}
\right.
\qquad (22.30)
$$

In beiden Fällen bleibt der Nutzkanal gerade noch frei von Alias-Anteilen. In Abb. 22.36 ist der Fall $B_{AAF} < B_{HF}$ dargestellt. Man kann die Abtastfrequenz jedoch auch so wählen, dass *alle* Kanäle im Durchlassbereich des HF-Filters ohne Aliasing digitalisiert werden und die Kanalauswahl durch eine Umschaltung der digitalen Kanalfilter vornehmen; in diesem Fall muss $f_A > B_{HF}$ gelten. Das Anti-Alias-Filter wird dann nur noch zur Unterdrückung der Anteile im Bereich von $f_{HF}$ und $2f_{HF}$ benötigt.

Der wesentliche Vorteil eines direktumsetzenden Empfängers liegt in der geringeren Anzahl an Filtern. Er ist besonders gut für eine monolithische Integration geeignet, da nur noch das HF-Filter als externe Komponente benötigt wird; dagegen werden die Anti-Alias-Filter als aktive RC-Filter realisiert. Gleichzeitig wird nur noch ein Lokaloszillator mit einem RC-Quadraturnetzwerk $(0^\circ/90^\circ)$ benötigt, der mit Ausnahme eines frequenzbestimmenden Resonanzkreises und einer Kapazitätsdiode zur Frequenzabstimmung ebenfalls integriert werden kann. Durch den Wegfall der ZF-Komponenten nimmt die Stromaufnahme des Empfängers deutlich ab; vor allem die beim Überlagerungsempfänger benötigten leistungsstarken Treiber für die SAW-ZF-Filter und die nachfolgenden Verstärker zum Ausgleich der relativ hohen Dämpfung dieser Filter entfallen.
<!-- page-import:1315:end -->

<!-- page-import:1316:start -->
22.2 Empfänger 1279

HF-Filter

$e_{Ant}(t)$

$|E_{Ant}|$

$B$

$f_{HF}$

$f$

$e_{HF}(t)$

$|E_{HF}|$

HF-Filter

$B$

$f_{HF}$

$B_{HF}$

$f$

$f_{HF}$

MI

$e_{MI}(t)$

$|E_{MI}|$

$B_{HF}/2$

$f$

$|E_{MI}|$

Anti-Alias-Filter

$B/2$

$B_{AAF}/2$

$f$

Anti-Alias-Filter

$e_{AA}(t)$

$|E_{AA}|$

$B/2$

$B_{AAF}/2$

$f$

A/D

$e_{AD}(n)$

$|E_{AD}|$

$B/2$

$B_{AAF}/2$

$f_A - B_{AAF}/2$

$f_A/2$

$B_{AAF}/2$

$f_A$

$f$

digitales Kanalfilter

$i(n)$

$|I|$

$B/2$

Haupt-
bereich
$(f < f_A/2)$

Aliasbereiche
$(f > f_A/2)$

$f_A/2$

$f$

**Abb. 22.36.** Betragsspektren bei einem direktumsetzenden Empfänger (nur $i$-Zweig, $q$-Zweig ist identisch)

Neben den genannten Vorteilen treten beim direktumsetzende Empfänger drei zusätzliche Probleme auf, deren negative Auswirkungen durch schaltungstechnische Maßnahmen auf ein unkritisches Maß beschränkt werden muss:
<!-- page-import:1316:end -->

<!-- page-import:1317:start -->
1280 22. Sender und Empfänger

**Abb. 22.37.**  
Abstrahlung des Lokaloszillatorsignals beim direktumsetzenden Empfänger

**Abb. 22.38.**  
Direktumsetzender Empfänger mit Zirkulator

– Die Lokaloszillatorfrequenz entspricht der Empfangsfrequenz; dadurch besteht die Gefahr, dass das relativ starke Lokaloszillatorsignal über das HF-Filter und den Vorverstärker auf die Antenne gelangt und abgestrahlt wird, siehe Abb. 22.37. Um dies zu verhindern, muss der Vorverstärker eine besonders geringe Rückwirkung aufweisen. Alternativ kann man zwischen dem Vorverstärker und dem HF-Filter einen 3-Tor-Zirkulator einfügen; dann wird das Lokaloszillatorsignal an das dritte Tor abgeleitet und gelangt nicht mehr auf den Ausgang des Vorverstärkers, siehe Abb. 22.38.

– Wenn das Lokaloszillatorsignal in den HF-Zweig gelangt und dort reflektiert wird, erhält man einen Selbstmisch-Effekt (*self-mixing*). Daraus resultiert ein Gleichanteil an den Ausgängen des I/Q-Mischers, der den Gleichanteil des Nutzsignals überlagert. Da eine Abtrennung dieses störenden Gleichanteils nicht möglich ist, muss der gesamte Gleichanteil im Demodulator mit einem digitalen Hochpass mit sehr geringer Grenzfrequenz abgetrennt werden. Dies muss so geschehen, dass das Nutzsignal möglichst wenig beeinträchtigt wird.

**Abb. 22.39.** Verlauf der spektralen Rauschzahl $F(f)$ der regelbaren Verstärker im Kanalraster eines direktumsetzenden Empfängers
<!-- page-import:1317:end -->

<!-- page-import:1318:start -->
22.2 Empfänger 1281

- Die regelbaren Verstärker arbeiten als NF-Verstärker im Bereich des 1/f-Rauschens; dadurch ist ihre Rauschzahl erheblich höher als die eines ZF-Verstärkers. Zwar kann man den Einfluss auf die Rauschzahl des Empfängers dadurch vermindern, dass man die Verstärkung des HF-Vorverstärkers möglichst hoch wählt, dem sind jedoch enge Grenzen gesetzt, da eine hohe Verstärkung im HF-Bereich nur mit mehreren Verstärkerstufen und vergleichsweise hoher Stromaufnahme möglich ist; gleichzeitig wird die Übersteuerungsfestigkeit reduziert. Abbildung 22.39 zeigt den Verlauf der spektralen Rauschzahl $F(f)$ der regelbaren Verstärker im Kanalraster. Eine Möglichkeit zur Verbesserung der Rauschzahl besteht darin, nicht den Kanal bei $f = 0$, sondern den $m$-ten Nachbarkanal bei $f = mK$ als Nutzkanal zu verwenden; dort ist die spektrale Rauschzahl kleiner ^8.

Ein weiteres Problem liegt in der Einhaltung der erforderlichen Amplituden- und Phasengenauigkeit des I/Q-Mischers. Die Anforderungen an den I/Q-Mischer eines direktumsetzenden Empfängers und eines Überlagerungsempfängers sind zwar gleich, sie sind aber bei einem I/Q-Mischer mit HF-Eingang aufgrund der höheren Frequenz ungleich schwerer zu erfüllen als bei einem I/Q-Mischer mit ZF-Eingang.

Die genannten Probleme des direktumsetzenden Empfängers werden zur Zeit gut beherrscht. Man kann deshalb davon ausgehen, dass der direktumsetzende Empfänger den Überlagerungsempfänger ablösen wird. In diesem Zusammenhang wird erwogen, auch den Empfänger mit ZF-Abtastung nach Abb. 22.25c als direktumsetzenden Empfänger einzusetzen, indem man vor dem A/D-Umsetzer nur noch einen Vorverstärker und ein HF-Filter anordnet; man nennt dies HF-Abtastung (RF sampling).

8 Nach Abb. 22.39 ist die Bandbreite der Nachbarkanäle doppelt so groß wie die Bandbreite des Kanals bei $f = 0$. Diese Kanäle enthalten jedoch zwei HF-Kanäle, i.e. $f_{HF} + K$ und $f_{HF} - K$, die bei der weiteren digitalen Verarbeitung durch Kombinieren der Quadraturkomponenten separiert werden; dabei wird nur die halbe Rauschleistung wirksam, wodurch der Faktor 2 in der Bandbreite kompensiert wird.
<!-- page-import:1318:end -->

<!-- page-import:1319:start -->
[unclear]
<!-- page-import:1319:end -->
