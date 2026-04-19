# Applications

<!-- page-import:1658:start -->
# Kapitel 27:
Phasenregelschleife (PLL)

Eine *Phasenregelschleife* (*phase-locked loop, PLL*) ist ein Regelkreis zur Kopplung der Frequenz oder Phase eines spannungsgesteuerten Oszillators (*voltage-controlled oscillator, VCO*) mit einem harmonischen Eingangssignal. Man unterscheidet zwischen *analogen PLLs* (*analog PLL, APLL*), bei denen nur analoge Signale auftreten und ein Mischer zur Bildung der Regelabweichung verwendet wird, und *digitalen PLLs* (*digital PLL, DPLL*), bei denen die analogen Signale mit Begrenzern in digitale Signale umgewandelt werden und die Regelabweichung mit einem digitalen Phasendetektor (PD) oder einem digitalen Phasen-Frequenz-Detektor (PFD) gebildet wird. Eine digitale PLL ist demnach eine gemischt-analog-digitale Schaltung (*mixed-signal circuit*). Abbildung 27.1 zeigt die beiden Ausführungsformen. Eine Sonderform der digitalen PLL ist die *voll-digitale PLL* (*all-digital PLL, ADPLL*), bei der auch das Schleifenfilter und der VCO digital realisiert sind; darauf gehen wir nicht weiter ein.

Analoge PLLs sind in den meisten Fällen *mono-frequent*, d.h. der VCO liefert im eingeschwungenen Zustand ein Signal $s_{VCO}(t)$, dessen Frequenz $f_{VCO}$ mit der Frequenz $f_S$ eines harmonischen Anteils im Eingangssignal $s(t)$ übereinstimmt. Dieser Fall ist in Abb. 27.1a dargestellt. Dagegen werden bei digitalen PLLs in den meisten Fällen zusätzliche digitale Frequenzteiler eingesetzt, um eine Frequenz $f_{VCO}$ zu erzeugen, die ein Vielfaches — in

a Analoge PLL (APLL)

b Digitale PLL (DPLL)

**Abb. 27.1.** Ausführungsformen einer Phasenregelschleife (PLL). Die Frequenzteiler der digitalen PLL sind optional. Begrenzer und Frequenzteiler werden im folgenden als eine Komponente aufgefasst.

© Springer-Verlag GmbH Deutschland, ein Teil von Springer Nature 2019  
U. Tietze et al., *Halbleiter-Schaltungstechnik*
<!-- page-import:1658:end -->

<!-- page-import:1659:start -->
1622  27. Phasenregelschleife (PLL)

Ausnahmefällen auch ein Bruchteil — der Frequenz $f_S$ des Eingangssignals beträgt, siehe Abb. 27.1b. Digitale PLLs sind demnach in der Regel *multi-frequent*.

Im folgenden stellen wir die Begrenzer einer digitalen PLL nicht mehr explizit dar, sondern nehmen an, dass die Eingangsstufen der digitalen Frequenzteiler als Begrenzer wirken und die Signale $s(t)$ und $s_{VCO}(t)$ eine ausreichende Amplitude haben, damit die Teiler korrekt arbeiten. In Abb. 27.1b ist die Zusammenfassung der Begrenzer und der Teiler angedeutet. Bei einer digitalen PLL mit nur einem oder ganz ohne Frequenzteiler nehmen wir dasselbe für die Eingänge des Phasen- (Frequenz-) Detektors PD/PFD an.

Bei digitalen PLLs ist ferner zu beachten, dass die Signale des Phasen- (Frequenz-) Detektors und der Frequenzteiler zwar digital, d.h. zweiwertig (0/1), aber nicht mit einer festen Abtastrate getaktet sind; vielmehr handelt es sich bei allen digitalen Komponenten um asynchrone Schaltwerke. Wir müssen deshalb auch die digitalen Signale mit der kontinuierlichen Zeitvariablen $t$ versehen und nicht mit dem diskreten Abtastindex $n$ synchroner Schaltwerke, der sich auf eine Abtastung mit einer festen Abtastrate $f_A$ bezieht. So ist z.B. das Ausgangssignal des PD/PFD in Abb. 27.1b mit $e(t)$ und nicht mit $e(n)$ bezeichnet.

## 27.1 Anwendungen

Zur Erläuterung der Funktion, die eine PLL in einem System erfüllt, und zur Klärung des Verhältnisses zwischen analogen PLLs und digitalen PLLs betrachten wir drei typische Anwendungsfälle, auf die wir an anderer Stelle schon kurz eingegangen sind und die in Abb. 27.2 noch einmal dargestellt sind.

### 27.1.1 Frequenzsynthese (Synthesizer)

Die Erzeugung von Lokaloszillatorfrequenzen für Sender und Empfänger m Hilfe von PLLs wird im Abschnitt 22.1.3 beschrieben. Abbildung 22.7 auf Seite 1240 zeigt dies am Beispiel eines Senders mit einer festen Zwischenfrequenz und einer variablen Sendefrequenz; dabei werden zwei digitale PLLs entsprechend Abb. 27.1b verwendet. Das Blockschaltbild ist in Abb. 27.2a noch einmal dargestellt, erweitert um eine optionale Teilerfaktorsteuerung, auf deren Funktion wir im Abschnitt 27.3.9 eingehen.

Zur Frequenzsynthese werden aufgrund der benötigten Frequenzteiler fast ausschließlich digitale PLLs eingesetzt. Lediglich bei sehr hohen Frequenzen werden vereinzelt noch analoge PLLs verwendet, bei denen die Frequenzumsetzung nicht mit digitalen Frequenzteilern, sondern mit Mischern oder speziellen Dioden zur Erzeugung von Oberwellen oder Subharmonischen erfolgt. Wir gehen auf diese Sonderformen nicht ein, da sie aufgrund der fortschreitenden Zunahme der maximalen Taktfrequenz digitaler Schaltungen an Bedeutung verlieren.

Wichtigstes Ziel beim Entwurf einer PLL zur Frequenzsynthese ist eine möglichst hohe spektrale Reinheit des Ausgangssignals; dazu müssen das Rauschen und die Amplituden der in einer PLL auftretenden Störtöne minimiert werden. Bei variablen Frequenzen wird zudem häufig ein schnelles Umschalten der Frequenz (Kanalwechsel) benötigt. Wir werden noch sehen, dass diese Forderungen konträr sind.

### 27.1.2 Träger-/Takt-Regeneration (Synchronizer)

Beim Empfang von analog oder digital modulierten Signalen müssen die Träger- und Taktsignale des Senders im Empfänger regeneriert werden, damit man ein optimales Empfangsergebnis erhält; nur bei sehr einfachen Signalen und geringen Anforderungen kann man darauf verzichten. Ein Beispiel dafür ist die im Abschnitt 21.4.1.4 beschriebene De-
<!-- page-import:1659:end -->

<!-- page-import:1660:start -->
27.1 Anwendungen 1623

a Frequenzsynthese (Synthesizer)

Referenzoszillator

$f_{REF}$

$n_1$
1

PD / PFD

VCO

Mittelwert von $n_2(n)$

$f_{VCO}=\frac{\bar{n}_2}{n_1}f_{REF}$

$n_2$
1

Steuerwort

Teilerfaktor-
steuerung

$n_2(n)=\begin{cases}
\text{konstant: Integer-N-PLL}\\
\text{variabel: Fractional-N-PLL}
\end{cases}$

b AM-Trägerrückgewinnung als Beispiel für eine Träger-/Takt-Regeneration (Synchronizer)

$s_T(t)$ = AM-moduliertes Signal

AM-Synchron-
demodulator

$s(t)$ = demoduliertes Signal

Trägerrückgewinnung

PD / PFD

VCO

$s_{VCO}(t)$ = rückgewonnenes Trägersignal

c FM-Demodulation als Beispiel für eine Phasen-/Frequenz-Demodulation (Demodulator)

$s_T(t)$ = FM-moduliertes Signal

PD / PFD

VCO

$s(t)$ = demoduliertes Signal

$s_{VCO}(t)$ = FM-remoduliertes Signal

**Abb. 27.2.** Typische Anwendungen einer Phasenregelschleife (PLL)

modulation von AM-modulierten Signalen. Dazu kann man entweder den in Abb. 21.54 auf Seite 1194 gezeigten Hüllkurvendetektor verwenden, der keine Regeneration benötigt, oder den in Abb. 21.55 gezeigten, qualitativ höherwertigen Synchrondemodulator, für den jedoch eine Rückgewinnung der Trägerfrequenz des Senders erforderlich ist. Die PLL zur Trägerrückgewinnung aus Abb. 21.56 haben wir in Abb. 27.2b noch einmal dargestellt, allerdings ohne explizite Darstellung der Begrenzer.

Bei der Träger-/Takt-Regeneration arbeitet die PLL als sehr schmalbandiges Filter zur Extraktion eines harmonischen Signalanteils aus dem Empfangssignal. Bei einem AM-Signal handelt es sich dabei um den im Empfangssignal enthaltenen Träger. Bei digital modulierten Signalen sind die Träger- und die Taktfrequenz in der Regel nicht direkt im
<!-- page-import:1660:end -->

<!-- page-import:1661:start -->
1624  27. Phasenregelschleife (PLL)

a  Blockschaltbild

b  Signale

c  Spektren der Signale $s(t)$ und $s_p(t)$

**Abb. 27.3.** Taktregeneration für ein digitales Datensignal mit Hilfe einer analogen PLL

Empfangssignal enthalten; in diesem Fall muss man das Empfangssignal einer geeigneten nichtlinearen Operation unterziehen, um ein Signal mit einer entsprechenden harmonischen Komponente zu erhalten. Abbildung 27.3 zeigt dies am Beispiel der Taktregeneration für ein digitales Datensignal. Zunächst werden mit einem RC-Verzögerungsglied und einem Exklusiv-Oder-Gatter (EXOR) die Flanken des Datensignals detektiert; anschließend wird der in den Flanken-Impulsen enthaltene Anteil bei der Datenrate $1/T_B$ mit einer analogen PLL schmalbandig ausgefiltert. Abbildung 27.3c zeigt, dass das Datensignal selbst keinen Anteil bei $1/T_B$ enthält, während die Flanken-Impulse Anteile bei $1/T_B$ und Vielfachen davon enthalten. Man kann demnach auch eine der Vielfachen ausfiltern, indem man die Leerlauffrequenz des VCOs in die Nähe der gewünschten Vielfachen legt. Die Verwendung einer analogen PLL ist hier zwingend, da die Flanken-Impulse von den binären Daten abhängen und deshalb unregelmäßig auftreten, siehe Abb. 27.3b. Das Ausbleiben der Impulse bei gleichbleibenden binären Daten beeinträchtigt die Funktion einer analogen PLL nicht, solange die Impulse nicht ganz ausbleiben; dagegen führen fehlende Impulse bei einer digitalen PLL zu einer Fehlfunktion, d.h. die PLL schwingt nicht auf die Datenrate ein. Im Gegensatz dazu kann man bei der Trägerrückgewinnung für AM-modulierte Signale sowohl eine analoge als auch eine digitale PLL verwenden, da der Träger in diesem Fall immer vorhanden und ausreichend stark ist, so dass auch ein digitaler Phasen- (Frequenz-) Detektor korrekt arbeitet.

### 27.1.3 Phasen-/Frequenz-Demodulation (Demodulator)

Die Demodulation eines FM-modulierten Signals mit Hilfe einer PLL haben wir bereits im Abschnitt 21.4.2.4.2 beschrieben, siehe Abb. 21.66 auf Seite 1205. Das Blockschaltbild ist in Abb. 27.2c noch einmal dargestellt, auch hier wieder ohne explizite Darstellung der Begrenzer. Am Ausgang des Schleifenfilters erhält man das demodulierte Signal.
<!-- page-import:1661:end -->

<!-- page-import:1707:start -->
1670  27. Phasenregelschleife (PLL)

a  Blockschaltbild

Referenz-
oszillator

$f_{REF}$

$s(t)$

$n_1$
1

$s_1(t)$

PD /
PFD

$e(t)$

VCO

Mittelwert von $n_2(n)$

$f_{VCO}=\frac{\bar n_2}{n_1}f_{REF}$

$f_1=\frac{f_{REF}}{n_1}$

$s_2(t)$

$f_{VCO}$
$f_2=\frac{f_{VCO}}{n_2}$

Steuerwort

Teilerfaktor-
steuerung

$n_2$
1

$n_2(n)=\begin{cases}
\text{konstant: Integer-N-PLL}\\
\text{variabel: Fractional-N-PLL}
\end{cases}$

b  Kleinsignalersatzschaltbild

$\varphi_S$

$\frac{1}{n_1}$

$\varphi_{S1}$

$\varphi_e$

$k_{PD}$

$H_{LF}(s)$

$k_{VCO}$

$\frac{1}{s}$

$\varphi_{VCO}$

$\varphi_{S2}$

$\frac{1}{n_2}$

**Abb. 27.44.** Allgemeine Form einer digitalen PLL mit Frequenzteilern

## 27.3.7 Digitale PLL mit Frequenzteilern

Ein wesentlicher Vorteil einer digitalen PLL im Vergleich zu einer analogen PLL liegt darin, dass wir nun (digitale) Frequenzteiler einsetzen können, um VCO-Signale zu erzeugen, deren Phase ein Vielfaches — in Sonderfällen auch ein Bruchteil — der Phase des Eingangssignals beträgt. Damit verlassen wir den Anwendungsbereich der *Synchronisation*, in dem die Verwendung einer analogen PLL gemäß Abschnitt 27.1.2 oft zwingend ist, und betreten den Anwendungsbereich der *Frequenzsynthese*.

### 27.3.7.1 Blockschaltbild und Kleinsignalersatzschaltbild

Abbildung 27.44 zeigt die allgemeine Form einer digitalen PLL mit Frequenzteilern. Das Blockschaltbild in Abb. 27.44a haben wir aus Abb. 27.2a auf Seite 1623 übernommen. Beim Kleinsignalersatzschaltbild in Abb. 27.44 haben wir berücksichtigt, dass die Frequenzteiler mit der Frequenz auch die Phase teilen und deshalb als Proportionalglieder mit den Faktoren $1/n_1$ und $1/n_2$ zu berücksichtigen sind:

$$
f_1=\frac{f_{REF}}{n_1}\Rightarrow \varphi_{S1}=\frac{\varphi_S}{n_1},
\qquad
f_2=\frac{f_{VCO}}{n_2}\Rightarrow \varphi_{S2}=\frac{\varphi_{VCO}}{n_2}
$$

### 27.3.7.2 Kanalwahl und Teilerfaktorsteuerung

PLLs zur Frequenzsynthese müssen in der Regel ein Kanalraster abdecken, d.h. die VCO-Frequenz muss in einem vorgegebenen Frequenzbereich mit einem vorgegebenen Kanalabstand abstimmbar sein. Bei einer *Integer-N-PLL* erfolgt dies in der Regel dadurch, dass die Frequenz $f_1$ dem Kanalabstand entspricht und der gewünschte Kanal mit Hilfe des Teilerfaktors $n_2$ eingestellt wird; $n_2$ bleibt in diesem Fall konstant, bis ein Kanalwechsel erfolgt. Bei einer *Fractional-N-PLL* wird statt dessen eine Folge [unclear]
<!-- page-import:1707:end -->

<!-- page-import:1727:start -->
1690  27. Phasenregelschleife (PLL)

a  MASH-1: Spektrum am PFD-Ausgang

b  MASH-1: Spektrum am VCO-Ausgang

c  MASH-1-1: Spektrum am PFD-Ausgang

d  MASH-1-1: Spektrum am VCO-Ausgang

e  MASH-1-1-1: Spektrum am PFD-Ausgang

f  MASH-1-1-1: Spektrum am VCO-Ausgang

**Abb. 27.61.** Störtöne am Ausgang des Phasen-Frequenz-Detektors (PFD) und am Ausgang des VCOs für die Fractional-N-PLL aus Abb. 27.60

nicht ausreicht, um die gewünschte Inband-Dynamik gemäß (27.35) auf Seite 1683 zu erzielen, muss man die Ordnung des Modulators erhöhen; dagegen ist eine Steigerung der Dämpfung durch eine Reduktion der Schleifenbandbreite in der Praxis nur selten möglich, da die Schleifenbandbreite eine wichtige Größe zur Minimierung des Phasenrauschens darstellt und deshalb nicht als freier Parameter zur Verfügung steht. Mehr dazu im nächsten Abschnitt.
<!-- page-import:1727:end -->
