# Transmitters

<!-- page-import:1270:start -->
# Kapitel 22:
# Sender und Empfänger

Im folgenden beschreiben wir den Aufbau von Sendern und Empfängern für die drahtlose Übertragung; dabei verwenden wir die Begriffe im engen Sinne: die Komponenten vom Modulator bis zur Sendeantenne bilden den *Sender*, die Komponenten von der Empfangsantenne bis zum Demodulator den *Empfänger*.

Die Anforderungen an Sender und Empfänger unterscheiden sich deutlich, da im Sender nur das Nutzsignal verarbeitet wird, während im Empfänger das Nutzsignal aus dem von der Antenne empfangenen Frequenzgemisch ausgefiltert werden muss. Darüber hinaus wird im Sender mit konstanten oder nur wenig variierenden Signalpegeln gearbeitet, während im Empfänger in Abhängigkeit vom Abstand zum Sender extrem hohe Pegelunterschiede auftreten können. Die Hauptanforderungen an den Sender bestehen darin, das Nutzsignal möglichst störungsfrei in das hochfrequente Sendesignal umzusetzen, dieses mit möglichst hohem Wirkungsgrad zu verstärken und die Aussendung unerwünschter, bei der Umsetzung oder Verstärkung entstandener Störsignale möglichst gering zu halten. Die Hauptanforderung an den Empfänger besteht darin, das Nutzsignal auch bei sehr geringem Empfangspegel und gleichzeitigem Empfang sehr starker Signale in benachbarten Frequenzbereichen mit möglichst hohem Signal-Geräusch-Abstand und möglichst geringen Intermodulationsverzerrungen auszufiltern. Demnach hat man beim Sender in erster Linie ein *Wirkungsgrad-Problem*, beim Empfänger dagegen ein *Selektions-* und *Dynamik-* bzw. *Rausch-Problem*.

## 22.1 Sender

Wir beschreiben zunächst den Aufbau von Sendern mit analoger Modulation und gehen anschließend auf Sender mit digitaler Modulation ein. Die Beschreibung erfolgt mit Hilfe von vereinfachten Blockschaltbildern, in denen nur die wesentlichen Komponenten dargestellt sind.

### 22.1.1 Sender mit analoger Modulation

#### 22.1.1.1 Sender mit direkter Modulation

Den einfachsten Sender erhält man, wenn die Trägerfrequenz $f_T$ des analogen Modulators gleich der Sendefrequenz $f_{HF}$ ist; in diesem Fall muss das Ausgangssignal des Modulators nur noch verstärkt und der Antenne zugeführt werden. In der Praxis muss nach dem Sendeverstärker ein *Ausgangsfilter* eingesetzt werden, das die Verzerrungsprodukte des Verstärkers auf ein zulässiges Maß dämpft. Abbildung 22.1a zeigt den Aufbau eines Senders mit *direkter Modulation*. Die Betragsspektren der Signale sind in Abb. 22.2 dargestellt.

#### 22.1.1.2 Sender mit einer Zwischenfrequenz

Mit zunehmender Frequenz und zunehmenden Anforderungen wird es immer schwieriger, den Modulator mit der erforderlichen Genauigkeit auszuführen. Man verwendet dann als Trägerfrequenz $f_T$ eine niedrigere *Zwischenfrequenz* $f_{ZF}$, bei der der Modulator problemlos realisiert werden kann:

© Springer-Verlag GmbH Deutschland, ein Teil von Springer Nature 2019  
U. Tietze et al., *Halbleiter-Schaltungstechnik*
<!-- page-import:1270:end -->

<!-- page-import:1271:start -->
1234  22. Sender und Empfänger

a mit direkter Modulation

b mit einer Zwischenfrequenz

c mit zwei Zwischenfrequenzen

**Abb. 22.1.** Sender mit analoger Modulation

$$
f_T = f_{ZF} \ll f_{HF}
$$

Abbildung 22.1b zeigt den Aufbau eines Senders mit *einer Zwischenfrequenz*. Die Umsetzung auf die Sendefrequenz $f_{HF}$ erfolgt mit dem Mischer M1, der von einem *Lokaloszillator* (*local oscillator*, LO) mit der Frequenz

**Abb. 22.2.**  
Betragsspektren bei direkter Modulation
<!-- page-import:1271:end -->

<!-- page-import:1272:start -->
22.1 Sender 1235

Abb. 22.3. Betragsspektren bei einer Zwischenfrequenz

$$f_{LO} = f_{HF} - f_{ZF}$$

gespeist wird. Bei der Mischung werden die Summen- und Differenzfrequenzen gebildet:

$$f_{LO} + f_{ZF} = f_{HF} \;,\quad f_{LO} - f_{ZF} = f_{HF} - 2f_{ZF}$$

Der Anteil bei der Sendefrequenz wird mit einem HF-Filter ausgefiltert und dem Sendeverstärker zugeführt. Abbildung 22.3 zeigt die Betragsspektren der Signale.

Wegen $f_{HF} = f_{LO} + f_{ZF}$ ist die Frequenzfolge im ZF- und im HF-Signal gleich, d.h. eine höhere ZF-Frequenz führt auf eine höhere HF-Frequenz; man nennt dies *Mischung in Gleichlage*. Man kann auch $f_{HF} = f_{LO} - f_{ZF}$ wählen, indem in Abb. 22.3 der Anteil unterhalb der Lokaloszillatorfrequenz ausgefiltert wird. In diesem Fall ist die Frequenzfolge im Sendesignal invertiert; man nennt dies *Mischung in Kehrlage*. Die Kehrlage muss im Empfänger berücksichtigt werden, damit das Nutzsignal korrekt empfangen werden kann; dazu wird auch im Empfänger ein Mischer in Kehrlage betrieben.

Bei Mischern tritt am Ausgang auch ein mehr oder weniger starker Anteil mit der Lokaloszillatorfrequenz $f_{LO}$ auf, siehe Abb. 22.3; daraus folgt, dass der Übergangsbereich des HF-Filters (Übergang vom Durchlass- zum Sperrbereich) maximal die Breite $f_{ZF} - B/2$ haben darf, damit des Sendesignal vollständig im Durchlassbereich und das Lokaloszillatorsignal im Sperrbereich liegt. Besonders günstig sind Oberflächenwellenfilter (SAW-Filter), da sie einen sehr schmalen Übergangsbereich und eine konstante Laufzeit haben; dabei stört allerdings die hohe Einfügungsdämpfung $(> 20\,\mathrm{dB})$. Stehen für die gewünschte Sendefrequenz keine SAW-Filter zur Verfügung, muss man LC-Filter oder Filter mit [unclear]
<!-- page-import:1272:end -->

<!-- page-import:1273:start -->
1236  22. Sender und Empfänger

dieelektrischen Resonatoren verwenden. Da diese Filter an den Rändern des Durchlassbereichs eine störende Laufzeitverzerrung aufweisen, muss die Breite des Übergangsbereichs meist deutlich kleiner gewählt werden, damit das Sendesignal nicht in diesen Bereichen liegt. Alternativ kann man den ganzen Bereich zwischen den Anteilen ober- und unterhalb der Lokaloszillatorfrequenz als Übergangsbereich nutzen und letztere mit einem separaten Serien- oder Parallelschwingkreis unterdrücken (Übertragungsnullstelle bei $f_{LO}$).

Mit zunehmender Sendefrequenz nimmt das Verhältnis aus Sendefrequenz und Breite des Übergangsbereichs zu; die Güte des HF-Filters muss dann ebenfalls zunehmen:

$$
Q_{HF} \sim \frac{f_{HF}}{f_{ZF}-B/2} \qquad \overset{f_{ZF}=f_T\gg B}{\approx} \qquad \frac{f_{HF}}{f_T}
$$

Daraus resultieren ein höherer Filtergrad und größere Laufzeitverzerrungen. In der Praxis wählt man die Zwischenfrequenz möglichst hoch, damit der Übergangsbereich möglichst breit und die Güte des HF-Filters entsprechend gering wird.

#### 22.1.1.3 Sender mit zwei Zwischenfrequenzen

Bei Sendern mit einer Zwischenfrequenz und hohen Sendefrequenzen wird die Güte des HF-Filters inakzeptabel hoch; dann muss eine zweite Zwischenfrequenz verwendet werden, die zwischen der Trägerfrequenz des Modulators und der Sendefrequenz liegt:

$$
f_T = f_{ZF1} < f_{ZF2} < f_{HF}
$$

Abbildung 22.1c zeigt den Aufbau eines Senders mit zwei Zwischenfrequenzen; die Betragsspektren der Signale sind in Abb. 22.4 dargestellt. Der Mischer M1 setzt das Ausgangssignal des Modulators von der ersten auf die zweite Zwischenfrequenz um; dazu wird ein Lokaloszillator mit der Frequenz $f_{LO1}=f_{ZF2}-f_{ZF1}$ benötigt. Anschließend wird der Anteil oberhalb der Lokaloszillatorfrequenz mit einem ZF-Filter ausgefiltert. Die Güte des ZF-Filters ist proportional zum Verhältnis aus der zweiten Zwischenfrequenz und der Breite des Übergangsbereichs:

$$
Q_{ZF} \sim \frac{f_{ZF2}}{f_{ZF1}-B/2} \qquad \overset{f_{ZF1}=f_T\gg B}{\approx} \qquad \frac{f_{ZF2}}{f_T}
$$

Die Umsetzung auf die Sendefrequenz erfolgt mit dem Mischer M2, der von einem zweiten Lokaloszillator mit der Frequenz $f_{LO2}=f_{HF}-f_{ZF2}$ gespeist wird. Zur Ausfilterung des Sendesignals wird ein HF-Filter mit der Güte

$$
Q_{HF} \sim \frac{f_{HF}}{f_{ZF2}-B/2} \qquad \overset{f_{ZF2}\gg B}{\approx} \qquad \frac{f_{HF}}{f_{ZF2}}
$$

benötigt.

Man erkennt, dass die Gesamtgüte $Q \sim f_{HF}/f_T$, die beim Sender mit einer Zwischenfrequenz vom HF-Filter erbracht werden muss, beim Sender mit zwei Zwischenfrequenzen auf zwei Filter verteilt werden kann:

$$
Q = Q_{HF}\,Q_{ZF} \sim \frac{f_{HF}}{f_T}
$$

Die Verteilung lässt sich durch die Wahl der zweiten Zwischenfrequenz steuern: wählt man sie relativ hoch, erhält man $Q_{ZF} > Q_{HF}$, wählt man sie relativ niedrig, gilt $Q_{ZF} < Q_{HF}$. In der Praxis hängt die Wahl von der Sendefrequenz und den zur Verfügung stehenden Filtern
<!-- page-import:1273:end -->

<!-- page-import:1274:start -->
1237

## 22.1 Sender

$f_{ZF1}$

analoger Modulator

$s(t)$

$s_{ZF1}(t)$

$f_{LO1}$

M1

$s_{M1}(t)$

ZF- Filter

$s_{ZF2}(t)$

$f_{LO2}$

M2

$s_{M2}(t)$

HF- Filter

$s_{HF}(t)$

$|S|$

$B$

$0$

$f$

$|S_{ZF1}|$

$B$

$B$

$-f_{ZF1}$

$0$

$f_{ZF1}$

$f$

$|S_{M1}|$

$B$

$B$

$f_{LO1}-f_{ZF1}$

$f_{LO1}$

$f_{ZF2}=f_{LO1}+f_{ZF1}$

$f$

$|S_{ZF2}|$

$f_{ZF1}-\frac{B}{2}$

ZF- Filter

$B$

$f_{LO1}$

$f_{ZF2}$

$f$

$|S_{M2}|$

$B$

$B$

$f_{LO2}-f_{ZF2}$

$f_{LO2}$

$f_{HF}=f_{LO2}+f_{ZF2}$

$f$

$|S_{HF}|$

$f_{ZF2}-\frac{B}{2}$

HF- Filter

$B$

$B$

$f_{LO2}$

$f_{HF}$

$f$

**Abb. 22.4.** Betragsspektren bei zwei Zwischenfrequenzen

ab. Auch die projektierte Stückzahl spielt eine große Rolle, da man bei hohen Stückzahlen kundenspezifische dielektrische oder SAW-Filter verwenden kann; für Massenanwendungen wie die Mobilkommunikation werden sogar neue Filtertechnologien entwickelt. Dagegen muss man bei Kleinserien auf die verfügbaren Standardfilter zurückgreifen. Die Verwendung von LC-Filtern mit diskreten Bauelementen wird aus Platz- und Abgleichgründen nach Möglichkeit vermieden.

Auch beim Sender mit zwei Zwischenfrequenzen kann man einen oder beide Mischer in Kehrlage betreiben, indem man die Anteile unterhalb der Lokaloszillatorfrequenz aus-
<!-- page-import:1274:end -->

<!-- page-import:1275:start -->
1238  22. Sender und Empfänger

Abb. 22.5.  
Sender mit variabler Sendefrequenz

filtert. Wenn beide Mischer in Kehrlage betrieben werden, ist das Sendesignal wieder in Gleichlage.

#### 22.1.1.4 Sender mit variabler Sendefrequenz

Bei Sendern mit variabler Sendefrequenz ist die Frequenz des letzten Lokaloszillators variabel; dadurch kann man die Sendefrequenz ändern, ohne dass die vorausgehenden Komponenten von der Änderung betroffen sind. Die Änderung erfolgt innerhalb des für die Anwendung zugeteilten Frequenzbereichs entsprechend dem Kanalabstand $K$; Abb. 22.5 zeigt dies am Beispiel eines Senders mit fünf Kanälen. Das HF-Filter wird so ausgelegt, dass alle Kanäle in den Durchlassbereich und alle Lokaloszillatorfrequenzen in den Sperrbereich fallen. Alternativ kann man ein abstimmbares HF-Filter verwenden; davon wird jedoch in der Praxis nur in Ausnahmefällen Gebrauch gemacht.

Bei geringer Kanalanzahl und geringem Kanalabstand ändern sich die Lokaloszillator- und die Sendefrequenz nur wenig; man kann dann einen Sender mit einer Zwischenfrequenz verwenden, solange der Übergangsbereich zwischen der höchsten Lokaloszillatorfrequenz und der unteren Grenze des Kanalrasters noch ausreichend breit ist. In den meisten Fällen muss man jedoch einen Sender mit zwei Zwischenfrequenzen verwenden; dabei wird die zweite Zwischenfrequenz relativ hoch gewählt, damit der Übergangsbereich möglichst breit wird.

### 22.1.2 Sender mit digitaler Modulation

Sender mit digitaler Modulation sind prinzipiell genauso aufgebaut wie Sender mit analoger Modulation. Der wesentliche Unterschied besteht darin, dass digitale Modulatoren primär die Quadraturkomponenten $i(t)$ und $q(t)$ erzeugen, die mit einem I/Q-Mischer zu einem modulierten Trägersignal zusammengesetzt werden.

Abbildung 22.6a zeigt einen digitalen Sender mit direkter Modulation. Er entspricht dem analogen Sender mit direkter Modulation in Abb. 22.1a, wenn man die Kombination aus digitalem Modulator, I/Q-Mischer (MI und MQ) und nachfolgendem Filter als analogen Modulator auffasst. Dasselbe gilt für digitale Sender mit einer oder zwei Zwischenfrequenzen. Ein digitaler Sender mit einer Zwischenfrequenz ist in Abb. 22.6b dargestellt.

Bei besonders hohen Anforderungen an die Genauigkeit des I/Q-Mischers wird ein digitaler I/Q-Mischer eingesetzt; dadurch werden Amplituden- und Phasenfehler zwischen den beiden Zweigen vermieden. Am Ausgang des digitalen I/Q-Mischers erhält man ein digitales ZF-Signal, das mit einem D/A-Umsetzer und einem nachfolgenden ZF-Filter in ein analoges ZF-Signal umgewandelt wird. Da die Frequenz des ZF-Signals aufgrund der begrenzten Taktrate des digitalen I/Q-Mischers und des D/A-Umsetzers vergleichswei-
<!-- page-import:1275:end -->

<!-- page-import:1276:start -->
22.1 Sender 1239

a mit direkter Modulation

b mit einer Zwischenfrequenz und analogem I/Q-Mischer

c mit zwei Zwischenfrequenzen und digitalem I/Q-Mischer

**Abb. 22.6.** Sender mit digitaler Modulation

se niedrig gewählt werden muss, wird meist eine zweite Zwischenfrequenz verwendet; Abb. 22.6c zeigt den resultierenden Sender.

### 22.1.3 Erzeugung der Lokaloszillatorfrequenzen

Die benötigten Lokaloszillatorfrequenzen werden mit phasenstarren Schleifen (PLL) von einem Quarz-Oszillator mit der Referenzfrequenz $f_{REF}$ abgeleitet. Abbildung 22.7 zeigt dies am Beispiel eines Senders mit einer Zwischenfrequenz und variabler Sendefrequenz. Die Zwischenfrequenz ist fest und wird durch die Teilerfaktoren $n_1$ und $n_2$ festgelegt:
<!-- page-import:1276:end -->

<!-- page-import:1277:start -->
1240 22. Sender und Empfänger

Quarz-  
oszillator

$f_{REF}$

Frequenz-  
teiler

Phasen-  
detektor

Schleifen-  
filter

gesteuerter  
Oszillator

$n_1$  
1

PD

VCO

PLL für die  
Zwischen-  
frequenz  
(ZF-PLL)

$n_2$  
1

Frequenz-  
teiler

$f_{ZF}=\frac{n_2}{n_1}f_{REF}$

Frequenz-  
teiler

Phasen-  
detektor

Schleifen-  
filter

gesteuerter  
Oszillator

$n_3$  
1

$K$

PD

VCO

PLL für die  
Lokaloszillator-  
frequenz  
(LO-PLL)

$n_4$  
1

programmierbarer  
Frequenzteiler

$f_{LO}=\frac{n_4}{n_3}f_{REF}$

**Abb. 22.7.** Erzeugung der Lokaloszillatorfrequenzen

$$
f_{ZF}=\frac{n_2}{n_1}f_{REF}
$$

Die Lokaloszillatorfrequenz ist in Schritten entsprechend dem *Kanalabstand* $K$ variabel; dazu wird die Referenzfrequenz mit dem Teilerfaktor $n_3$ auf den Kanalabstand geteilt und mit einer PLL mit programmierbarem Teilerfaktor $n_4$ vervielfacht:

$$
K=\frac{f_{REF}}{n_3},\quad f_{LO}=n_4K=\frac{n_4}{n_3}f_{REF}
$$

Durch Ändern des Teilerfaktors $n_4$ wird die Lokaloszillatorfrequenz und damit auch die Sendefrequenz eingestellt. Wenn die Lokaloszillatorfrequenzen nicht durch $K$ teilbar sind, muss man die Referenzfrequenz mit dem Teilerfaktor $n_3$ auf den größten gemeinsamen Teiler (ggT) von $K$ und den Lokaloszillatorfrequenzen teilen und diesen mit $n_4$ vervielfachen.

*Beispiel:* Der QPSK-Modulator mit I/Q-Mischer aus Abb. 21.82 auf Seite 1220 soll zu einem Sender mit einer Zwischenfrequenz erweitert und für eine Datenrate von 200 kBit/s bei einem Rolloff-Faktor von $r=1$ ausgelegt werden. Als Referenz wird ein Quarz-Oszillator mit $f_{REF}=10\,\text{MHz}$ verwendet; daraus erhält man durch Teilung um den Faktor 50 den Datentakt $f_D=200\,\text{kHz}$. Als Träger- bzw. Zwischenfrequenz wird $f_T=f_{ZF}=70\,\text{MHz}$ verwendet, da für diese Frequenz preisgünstige SAW-Filter verfügbar sind. Da der I/Q-Mischer in Abb. 21.82 mit der Frequenz $2\,f_T=140\,\text{MHz}$ angesteuert werden muss, wählen wir für die ZF-PLL in Abb. 22.7 $n_1=1$ und $n_2=14$. Bei QPSK ist die Symbolfrequenz gleich der halben Datenrate: $f_S=f_D/2$; daraus folgt die Bandbreite $B=(1+r)f_S=200\,\text{kHz}$. Wir nehmen an, dass der Sender vier Kanäle im Bereich von $433\dots434\,\text{MHz}$ mit einem Abstand von $K=250\,\text{kHz}$ benutzen kann. Aus den Sendefrequenzen $f_{HF}=433{,}125/433{,}375/433{,}625/433{,}875\,\text{MHz}$ erhält man die Loka-
<!-- page-import:1277:end -->
