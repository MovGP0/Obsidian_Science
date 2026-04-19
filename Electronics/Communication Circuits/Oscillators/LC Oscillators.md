# LC Oscillators

<!-- page-import:1540:start -->
## Kapitel 26:
Oszillatoren

Schaltungen zur Erzeugung ungedämpfter Schwingungen bezeichnet man als *Oszillatoren* (*oscillator, OSC*). In nachrichtentechnischen Schaltungen werden Oszillatoren zur Erzeugung der *Lokaloszillatorsignale* (*local oscillator, LO*) für die Mischer in Sendern und Empfängern benötigt; dabei kommen zwei grundsätzlich verschiedene Arten von Oszillatoren zum Einsatz:

- **Oszillatoren mit analoger Schwingungserzeugung (analoge Oszillatoren):** Diese Oszillatoren bestehen aus einem Verstärker und einem Resonanzkreis. Bei diskret aufgebauten Oszillatoren dient häufig ein einziger Transistor als Verstärker, während bei integrierten Oszillatoren meist mehrere Transistoren verwendet werden. Als Resonanzkreis kann ein LC-Resonanzkreis eingesetzt werden. Alternativ kann man jede beliebige schwingungsfähige Anordnung verwenden, deren elektrisches Verhalten in der Nähe der Resonanzfrequenz durch einen LC-Resonanzkreis beschrieben werden kann; typische Beispiele sind kurzgeschlossene oder leerlaufende Streifenleitungen, dielektrische Resonatoren, Oberflächenwellen-Resonatoren (SAW-Resonatoren) und Quarze. Wenn eine Frequenzabstimmung erforderlich ist, werden in den meisten Fällen Kapazitätsdioden eingesetzt; man erhält dann einen VCO (*voltage-controlled oscillator*). Abbildung 26.1a zeigt eine typische Ausführung mit der Abstimmspannung $U_S$ und der Ausgangsspannung $U_a$.

- **Oszillatoren mit digitaler Schwingungserzeugung (digitale Oszillatoren):** Bei diesen Oszillatoren werden mit digitalen Schaltkreisen zeitdiskrete Schwingungen erzeugt, die entweder als LO-Signale für digitale Mischer dienen – z.B. für die digitalen I/Q-Mischer in Abb. 22.6c und Abb. 22.25c – oder mit Digital-Analog-Umsetzern (DAC) in analoge Schwingungen umgesetzt wird. Diese Art der Schwingungserzeugung wird als *Direkte Digitale Synthese* (*direct digital synthesis, DDS* bezeichnet. Abbildung 26.1b zeigt eine typische Ausführung; dabei wird mit einem Phasenakkumulator ein Phasenverlauf $\varphi(n)$ mit konstantem Phaseninkrement $\Delta \varphi$ gebildet, aus dem mit Hilfe einer Kosinus-/Sinus-Tabelle die zeitdiskreten Schwingungen $\cos \varphi(n)$ und $\sin \varphi(n)$ erzeugt

a analoge Schwingungserzeugung

b digitale Schwingungserzeugung

**Abb. 26.1.** Oszillatoren für nachrichtentechnische Schaltungen

© Springer-Verlag GmbH Deutschland, ein Teil von Springer Nature 2019  
U. Tietze et al., *Halbleiter-Schaltungstechnik*
<!-- page-import:1540:end -->

<!-- page-import:1541:start -->
1504  26. Oszillatoren

werden, die bei Bedarf in analoge Signale umgesetzt werden. Die Frequenz wird mit dem Phaseninkrement $\Delta \varphi$ eingestellt. Ein Oszillator dieser Art wird aufgrund der numerischen Einstellung der Frequenz auch als NCO (*numerically-controlled oscillator*) bezeichnet.

Im Analogteil von Sendern und Empfängern werden werden fast ausschließlich analoge Oszillatoren eingesetzt; die wichtigsten Gründe dafür sind:

- Das Rauschen der analogen Komponenten liegt in der Regel deutlich unter dem Quantisierungsrauschen der Digital-Analog-Umsetzer. Dieser Punkt ist sehr wichtig; wir gehen darauf bei der Beschreibung des Rauschverhaltens von Oszillatoren noch näher ein.
- Mit analogen Oszillatoren kann man Frequenzen bis in den Bereich der Transitfrequenz der verwendeten Transistoren erzeugen. Mit entsprechenden Transistoren sind Frequenzen bis zu 100 GHz möglich. Dagegen wird die Frequenz digitaler Oszillatoren durch die maximale Taktfrequenz der digitalen Schaltkreise und die mit zunehmender Frequenz abnehmende Auflösung der Digital-Analog-Umsetzer begrenzt; Frequenzen bis etwa 500 MHz sind möglich.
- Die Verlustleistung analoger Oszillatoren ist wesentlich geringer. Die Stromaufnahme eines analogen Oszillators liegt unabhängig von der Frequenz meist im Bereich von $0{,}1 \dots 10\,\mathrm{mA}$; dagegen nimmt die Stromaufnahme digitaler Oszillatoren mit zunehmender Frequenz zu und liegt bei Frequenzen über 100 MHz im Bereich von $100 \dots 500\,\mathrm{mA}$.

Es gibt jedoch Anwendungen, bei denen auch im Analogteil ein digitaler Oszillator mit Digital-Analog-Umsetzern verwendet wird. Der Grund dafür liegt meist darin, dass die Frequenz eines NCO durch Setzen eines neuen Phaseninkrements $\Delta \varphi$ ohne Verzögerung geändert werden kann, während ein VCO immer in eine phasenstarre Schleife (PLL) eingebunden ist – siehe Abschnitt 22.1.3 –, die eine Einschwingzeit benötigt.

Wir beschränken uns im folgenden auf analoge Oszillatoren und gehen dabei zunächst auf Oszillatoren mit LC-Resonanzkreis ein.

## 26.1 LC-Oszillatoren

Oszillatoren mit LC-Resonanzkreis werden als *LC-Oszillatoren* bezeichnet und bestehen aus einem Verstärker und einem LC-Serien- oder LC-Parallelschwingkreis. Damit sich eine Schwingung aufbauen kann, muss man die beiden Komponenten so verschalten, dass sich eine Mitkopplung (*positive feedback*) mit einer Schleifenverstärkung (*loop gain*) größer Eins ergibt. Wir beschreiben zunächst die Eigenschaften von LC-Resonanzkreisen.

### 26.1.1 LC-Resonanzkreise

LC-Resonanzkreise bestehen aus einer Induktivität $L$ und einer Kapazität $C$. Neben den Werten für $L$ und $C$ ist der Kennwiderstand

$$
R_k = \sqrt{\frac{L}{C}}
$$

(26.1)

eine wichtige Größe. Typische Werte liegen im Bereich $R_k = 10 \dots 1000\,\Omega$, d.h. der Wert der Induktivität ist um den Faktor $10^2 \dots 10^6$ größer als der Wert der Kapazität.

In der Praxis werden LC-Resonanzkreise mit diskreten Spulen und Kondensatoren oder mit Streifenleitungen aufgebaut. Da diese Elemente verlustbehaftet sind, enthält das Ersatzschaltbild zusätzlich Widerstände, die die Verluste repräsentieren. Bei Oszillatoren
<!-- page-import:1541:end -->

<!-- page-import:1542:start -->
26.1 LC-Oszillatoren 1505

a Parallelschwingkreis

b Serienschwingkreis

**Abb. 26.2.** Ersatzschaltbilder für LC-Resonanzkreise im Bereich der Resonanzfrequenz

ist nur das Verhalten im Bereich der Resonanzfrequenz von Interesse; in diesem Fall kann man die Widerstände zu einem äquivalenten Widerstand zusammenfassen und erhält damit die in Abb. 26.2 gezeigten Ersatzschaltbilder. Bei der Resonanzfrequenz

$$
\omega_R = 2\pi f_R = \frac{1}{\sqrt{LC}}
$$

(26.2)

kompensieren sich die Induktivitäten und die Kapazitäten und es werden nur noch die Widerstände wirksam. Die Güte (quality)

$$
Q = \frac{f_R}{B} =
\left\{
\begin{array}{ll}
R_P \sqrt{\frac{C}{L}} = \frac{R_P}{R_k} & \text{Parallelschwingkreis} \\
\frac{1}{R_S}\sqrt{\frac{L}{C}} = \frac{R_k}{R_S} & \text{Serienschwingkreis}
\end{array}
\right.
$$

(26.3)

ist ein Maß für Bandbreite $B$ des Schwingkreises. Für die Impedanzen gilt:

$$
Z(s) =
\left\{
\begin{array}{ll}
\frac{1}{\frac{1}{sL} + \frac{1}{R_P} + sC}
=
\frac{R_P}{1 + Q\left(\frac{\omega_R}{s} + \frac{s}{\omega_R}\right)}
& \text{Parallelschwingkreis} \\
sL + R_S + \frac{1}{sC}
=
R_S \left[1 + Q\left(\frac{\omega_R}{s} + \frac{s}{\omega_R}\right)\right]
& \text{Serienschwingkreis}
\end{array}
\right.
$$

Die Ausdrücke in den geschweiften Klammern werden bei der Resonanzfrequenz $\omega_R$ zu Null; dann gilt:

$$
Z(j\omega_R) =
\left\{
\begin{array}{ll}
R_P = Q R_k & \text{Parallelschwingkreis} \\
R_S = \frac{R_k}{Q} & \text{Serienschwingkreis}
\end{array}
\right.
$$

Die Güte Q beschreibt, wie stark sich die Impedanzen bei einer Abweichung von der Resonanzfrequenz ändern. Abbildung 26.3 zeigt den Betrag der Impedanz für Parallel- und Serienschwingkreise mit einem Kennwiderstand $R_k = 100\,\Omega$. Bei Oszillatoren muss die Güte möglichst hoch sein, damit die Frequenz möglichst stabil und das Rauschen möglichst gering ist; dazu muss der Parallelwiderstand $R_P$ eines Parallelschwingkreises möglichst hoch und der Serienwiderstand $R_S$ eines Serienschwingkreises möglichst gering sein.

Die Elemente des Ersatzschaltbilds werden in der Praxis meist mit Hilfe einer Messung bestimmt; dazu misst man den Betrag der Impedanz im Bereich der Resonanzfrequenz und ermittelt mit einem Schaltungssimulator oder einem Mathematikprogramm die Werte für
<!-- page-import:1542:end -->

<!-- page-import:1544:start -->
26.1 LC-Oszillatoren 1507

**Abb. 26.5.**  
Beispiel: Güte für einen LC-Parallelschwingkreis mit SMD-Bauteilen und einem zusätzlichen Parallelwiderstand $R_{PV}$

– Aus Abb. 26.4 entnehmen wir $L = L_L + L_C$.  
– Aus der Forderung $f_R = 100\,\mathrm{MHz}$ erhalten wir mit (26.2) den Zusammenhang zwischen $C$ und $L_L$:

$$
C \;=\; \frac{1}{\omega_R^2 L} \;=\; \frac{1}{(2\pi f_R)^2\,(L_L + L_C)}
$$

– Aus Abb. 26.4 erhalten wir in Verbindung mit (23.4) und (23.5)

$$
R_S \;=\; R_L(f_R) + R_C \;=\; k_L L_L \sqrt{f_R} + R_C
$$

Für die Baugröße 1812 gilt $k_L \approx 600\,\Omega/(\sqrt{\mathrm{Hz}}\cdot \mathrm{H})$.

Anschließend berechnen wir mit (26.3) die Güte des Kreises bei Serienresonanz in Abhängigkeit von $L_L$; dabei erhalten wir die Kurve mit $R_{PV} = \infty$ in Abb. 26.5. Die Güte wird im Bereich $L > 1\,\mu\mathrm{H}$ maximal. Wir haben bis jetzt aber noch nicht berücksichtigt, dass wir den Kreis zusammen mit einem Verstärker betreiben müssen, um einen Oszillator zu erhalten. Wir nehmen an, dass der Kreis in Parallelresonanz betrieben werden soll und berechnen dazu mit (26.4) den zugehörigen Parallelwiderstand $R_P = Q^2 R_S$. Wir nehmen ferner an, dass der Verstärker als zusätzlicher Parallelwiderstand $R_{PV}$ wirkt; dann gilt für den effektiven Parallelwiderstand:

$$
R_P' \;=\; R_P \parallel R_{PV} \;=\; Q^2 R_S \parallel R_{PV}
$$

Damit berechnen wir mit (26.3) die Güte des Kreises bei Parallelresonanz und erhalten die Kurven mit $R_{PV} = 1/10/100\,\mathrm{k}\Omega$ in Abb. 26.5. Wir werden im folgenden noch sehen, dass für typische Verstärker $R_{PV} \approx 10\,\mathrm{k}\Omega$ gilt; daraus folgt, dass wir mit $L_L \approx 100\,\mathrm{nH}$ eine maximale Güte von etwa $50 \dots 60$ erhalten.

## 26.1.2 Verstärker mit selektiver Mitkopplung

Die Schwingungserzeugung in einem analogen Oszillator beruht auf einer *selektiven Mitkopplung*; dabei wird das Ausgangssignal eines Verstärkers über ein frequenzselektives Netzwerk auf den Eingang zurückgekoppelt. Wenn es dabei eine Frequenz gibt, bei der die Schleifenverstärkung (*loop gain*) in der resultierenden Schleife betragsmäßig größer Eins ist und die Phase Null (modulo $2\pi$) hat, baut sich eine Schwingung bei dieser Frequenz auf. Das frequenzselektive Netzwerk stellt sicher, dass diese Bedingung nur für eine genau definierte Frequenz erfüllt ist.
<!-- page-import:1544:end -->

<!-- page-import:1545:start -->
1508  26. Oszillatoren

a mit Parallelschwingkreis

b mit Serienschwingkreis

**Abb. 26.6.** Verstärker mit selektiver Mitkopplung: Schaltungen und Ersatzschaltbilder

Die Bedingung für die Schleifenverstärkung entspricht systemtheoretisch die Forderung nach einem konjugiert-komplexen Polpaar in der rechten $s$-Halbebene: $s_P = \sigma \pm j\omega$ mit $\sigma > 0$; dazu gehört im Zeitbereich eine Schwingung mit zunehmender Amplitude:

$$
s_P = \sigma \pm j\omega \quad \Rightarrow \quad x(t) = e^{(\sigma + j\omega)t} + e^{(\sigma - j\omega)t} = 2e^{\sigma t}\cos \omega t
$$

Damit sich die Schwingung aufbaut, bedarf es einer Anregung, die bei einer analogen Schaltung aufgrund des thermischen Rauschens aber grundsätzlich immer vorhanden ist. Die Amplitude nimmt zu, bis die Aussteuerungsgrenzen des Verstärkers erreicht werden; dadurch wird die Amplitude begrenzt und der Betrag der Schleifenverstärkung nimmt auf Eins ab. Dies ist gleichbedeutend mit $\sigma \rightarrow 0$, d.h. das konjugiert-komplexe Polpaar wird durch die Begrenzung auf die imaginäre Achse verschoben ($s_P = \pm j\omega$) und man erhält eine ungedämpfte Schwingung. Alternativ zur Begrenzung durch die Aussteuerungsgrenzen kann man eine Amplitudenregelung verwenden; dabei wird die Amplitude der Schwingung gemessen und durch eine Reduktion der Schleifenverstärkung auf einen Sollwert begrenzt, der unterhalb der Aussteuerungsgrenzen liegt.

Bei LC-Oszillatoren besteht das frequenzselektive Netzwerk aus einem Parallel- oder Serienschwingkreis; Abb. 26.6 zeigt die resultierenden Schaltungen und die zugehörigen Ersatzschaltbilder. Bei beiden Schaltungen wird die Mitkopplung bei der Resonanzfrequenz der Schwingkreise maximal.

### 26.1.2.1 Mitkopplung mit Parallelschwingkreis

Bei der Schaltung mit Parallelschwingkreis in Abb. 26.6a muss der Verstärker hochohmig sein, da der Eingangswiderstand $r_e$ und der Ausgangswiderstand $r_a$ parallel zu $R_P$ liegen und die Güte des Kreises reduzieren; daraus ergibt sich die Forderung $r_e \parallel r_a > R_P$. Wir haben hier berücksichtigt, dass bei Verstärkern mit hochohmigem Ausgang bevorzugt das Ersatzschaltbild mit einer spannungsgesteuerten Stromquelle aus Abb. 4.133b auf Seite 430 verwendet wird. Bei höheren Frequenzen muss man zusätzlich die Ein-
<!-- page-import:1545:end -->

<!-- page-import:1546:start -->
26.1 LC-Oszillatoren 1509

gangskapazität $C_e$ und die Ausgangskapazität $C_a$ des Verstärkers berücksichtigen. Diese Kapazitäten liegen jedoch parallel zur Kapazität $C$ und können mit dieser zusammengefasst werden; wir nehmen deshalb im folgenden an, dass die Kapazitäten des Verstärkers in $C$ enthalten sind.

### 26.1.2.2 Mitkopplung mit Serienschwingkreis

Bei der Schaltung mit Serienschwingkreis in Abb. 26.6b muss der Verstärker niederohmig sein, da der Eingangswiderstand $r_e$ und der Ausgangswiderstand $r_a$ in Reihe zu $R_S$ liegen und die Güte des Kreises reduzieren; daraus ergibt sich die Forderung $r_e + r_a < R_S$. In diesem Fall wird für den Verstärker bevorzugt das Ersatzschaltbild mit einer spannungsgesteuerten Spannungsquelle aus Abb. 4.133a verwendet. Die Kapazitäten $C_e$ und $C_a$ des Verstärkers kann man in der Regel vernachlässigen, da ihre Impedanzen bei der Resonanzfrequenz meist deutlich größer sind als die Widerstände $r_e$ und $r_a$.

### 26.1.2.3 Vergleich der Schaltungen

Typische LC-Resonanzkreise haben einen Kennwiderstand $R_k \approx 100\,\Omega$ und eine Güte $Q \approx 100$; daraus folgt für den Parallelwiderstand $R_P = QR_k \approx 10\,\mathrm{k}\Omega$ und für den Serienwiderstand $R_S = R_k/Q \approx 1\,\Omega$. Die Bedingung $r_e \parallel r_a > R_P$ bei der Schaltung mit Parallelschwingkreis kann man mit einfachen ein- oder zweistufigen Verstärkern problemlos einhalten. Bei ungünstigen Verhältnissen kann man am Eingang, am Ausgang oder beidseitig eine der im Abschnitt 23.3.2 beschriebenen Ankopplungen verwenden, siehe Abb. 26.7; damit werden entweder der Eingangswiderstand $r_e$ oder der Ausgangswiderstand $r_a$ oder beide Widerstände mit den entsprechenden Teilerfaktoren in hochohmigere Widerstände transformiert.

Im Gegensatz dazu kann man die Bedingung $r_e + r_a < R_S$ der Schaltung mit Serienschwingkreis bei LC-Resonanzkreisen mit $R_S \approx 1\,\Omega$ nicht einhalten. Die Schaltung mit Serienschwingkreis wird deshalb nur in Verbindung mit speziellen Serienresonatoren verwendet, bei denen der Kennwiderstand $R_k$ und der Serienwiderstand $R_S$ deutlich größer sind als bei einem typischen LC-Resonanzkreis; ein Beispiel dafür sind Quarze. Oft muss man selbst in diesen Fällen noch eine zusätzliche Impedanztransformation vornehmen. Man verwendet dazu die in Abb. 26.8a gezeigten Anpassnetzwerke aus Abb. 23.22 und Abb. 23.23; damit werden die Widerstände $r_e$ und $r_a$ in niederohmigere Widerstände transformiert. Bei den Anpassnetzwerken kann man die Serien-Elemente mit den Elementen des Resonators zusammenfassen, so dass in praktischen Schaltungen nur die Parallel-Elemente ergänzt werden müssen, siehe Abb. 26.8b. In der Regel ist die Schwingkreisinduktivität $L$ viel größer als die Serien-Induktivitäten $L_{S1}$ und $L_{S2}$ und die Schwingkreiskapazität $C$ viel kleiner als die Serien-Kapazitäten $C_{S1}$ und $C_{S2}$; dadurch ändert sich die Resonanzfrequenz nur geringfügig. In der Praxis wird meist die Variante mit zwei Parallel-Kapazitäten verwendet.

## 26.1.3 Schleifenverstärkung

### 26.1.3.1 Berechnung bei Verstärkern ohne Rückwirkung

Zur Berechnung der Schleifenverstärkung $(loop\ gain,\ LG)$ trennen wir die Schleifen in Abb. 26.6 an den gesteuerten Quellen auf, legen eine Spannung $u_e$ an und berechnen die mitgekoppelte Spannung $u_{e,MK}$, siehe Abb. 26.9:

- Für die Schaltung mit Parallelschwingkreis erhalten wir mit $R'_P = R_P \parallel r_a \parallel r_e$:
<!-- page-import:1546:end -->

<!-- page-import:1547:start -->
1510 26. Oszillatoren

a kapazitive Ankoppplung am Ausgang, am Eingang und beidseitig

b induktive Ankoppplung am Ausgang, am Eingang und beidseitig

**Abb. 26.7.** Ankoppelungen zur Verbesserung der Güte bei Parallelschwingkreisen

Anpass-
netzwerk

Anpass-
netzwerk

a Netzwerke zur Anpassung

b praktische Schaltungen

**Abb. 26.8.** Anpassnetzwerke zur Verbesserung der Güte bei Serienschwingkreisen
<!-- page-import:1547:end -->

<!-- page-import:1548:start -->
26.1 LC-Oszillatoren 1511

a mit Parallelschwingkreis

b mit Serienschwingkreis

**Abb. 26.9.**  
Ersatzschaltbilder zur Berechnung der Schleifenverstärkung

$$
LG(s) \;=\; \frac{u_{e,MK}(s)}{u_e(s)} \;=\; -\,\frac{S_V}{\frac{1}{sL}+\frac{1}{R_P'}+sC}
\qquad \Rightarrow \qquad
LG(j\omega_R) \;=\; -\,S_V\,R_P' \; \stackrel{!}{>} \; 1
$$

Damit die Schleifenverstärkung $LG(j\omega_R)$ größer Eins wird, muss die Steilheit $S_V$ einen negativen Wert mit $|S_V| > 1/R_P'$ haben.  
– Für die Schaltung mit Serienschwingkreis gilt mit $R_S' = R_S + r_a + r_e$:

$$
LG(s) \;=\; \frac{u_{e,MK}(s)}{u_e(s)} \;=\; \frac{A_V\,r_e}{sL + R_S' + \frac{1}{sC}}
\qquad \Rightarrow \qquad
LG(j\omega_R) \;=\; \frac{A_V\,r_e}{R_S'} \; \stackrel{!}{>} \; 1
$$

Hier muss das Produkt aus der Verstärkung $A_V$ und dem Spannungsteilerfaktor $r_e/R_S'$ größer als Eins sein.

Typische Oszillatoren arbeiten mit einer Schleifenverstärkung $LG(j\omega_R) = 1{,}2 \ldots 1{,}6$ (2 . . . 4 dB); dadurch wird ein sicheres Anschwingen gewährleistet.

Die Berechnung der Schleifenverstärkung ist hier einfach möglich, da wir rückwirkungsfreie Verstärker angenommen haben und deshalb die Schleifen an den Verstärkern auftrennen können, ohne die Impedanzverhältnisse zu verändern. Bei niedrigen Frequenzen und einem mehrstufigen Aufbau der Verstärker ist dies in der Regel möglich. Oszillatoren in nachrichtentechnischen Schaltungen werden jedoch meist bei hohen Frequenzen betrieben und müssen mit möglichst einfachen Verstärkern aufgebaut werden, um eine niedrige Stromaufnahme, geringes Rauschen und gut definierte Phasenverhältnisse zu gewährleisten; in diesem Fall muss die Rückwirkung berücksichtigt werden.

### 26.1.3.2 Berechnung bei Verstärkern mit Rückwirkung

Bei Verstärkern mit Rückwirkung kann man die Schleife nicht mehr einfach auftrennen, ohne die Impedanzverhältnisse zu verändern; dadurch ist eine direkte Berechnung oder Simulation der Schleifenverstärkung nicht mehr möglich. Man kann jedoch die Schleifen-
<!-- page-import:1548:end -->

<!-- page-import:1549:start -->
1512  26. Oszillatoren

$$
LG=\frac{LG_uLG_i-1}{LG_u+LG_i-2}
$$

a Schleifen-Spannungsverstärkung

b Schleifen-Stromverstärkung

**Abb. 26.10.** Verfahren zur Berechnung oder Simulation der Schleifenverstärkung $LG$

*Spannungsverstärkung* $LG_u$ *und die Schleifen-Stromverstärkung* $LG_i$ getrennt ermitteln und daraus mit

$$
LG=|LG|\,e^{j\varphi_{LG}}=\frac{LG_uLG_i-1}{LG_u+LG_i-2}
$$

die Schleifenverstärkung berechnen. Abbildung 26.10 zeigt dies am Beispiel eines Oszillators mit Parallelschwingkreis und Rückwirkung über die Impedanz $Z_R$:

- Zur Bestimmung der Schleifen-Spannungsverstärkung $LG_u$ wird eine ideale Spannungsquelle eingefügt, siehe Abb. 26.10a. Da die Quelle den Innenwiderstand Null hat, bleiben die Impedanzverhältnisse unverändert. Die Quelle erlaubt aber die getrennte Ausbildung der Spannungen $u_1$ und $u_2$, aus denen man bei der gegebenen Orientierung den Zusammenhang

$$
LG_u=\frac{u_2}{u_1}
$$

erhält.

- Zur Bestimmung der Schleifen-Stromverstärkung $LG_i$ wird an derselben Stelle ein Strom eingespeist, siehe Abb. 26.10b. Da die Stromquelle den Innenwiderstand Unendlich hat, bleiben die Impedanzverhältnisse ebenfalls unverändert. Die Quelle erlaubt hier die getrennte Ausbildung der Ströme $i_1$ und $i_2$, aus denen man bei der gegebenen Orientierung den Zusammenhang

$$
LG_i=\frac{i_2}{i_1}
$$

erhält.
<!-- page-import:1549:end -->

<!-- page-import:1550:start -->
26.1 LC-Oszillatoren 1513

Man kann die Quellen an jedem beliebigen Punkt in der Schleife einfügen, muss dabei aber die Orientierung berücksichtigen. Wenn Unklarheit bezüglich der Orientierung besteht, muss man beide Richtungen prüfen und das betragsmäßig größere Ergebnis verwenden 1.

Die Berechnung der Schleifenverstärkung ist bereits bei sehr einfachen Oszillator-Schaltungen sehr aufwendig, da man aufgrund der hohen Frequenzen die vollständigen Hochfrequenz-Ersatzschaltbilder der Transistoren in den Verstärkern verwenden muss, um ausreichend genaue Aussagen über den Betrag und die Phase der Schleifenverstärkung zu erhalten. Wir sehen deshalb von einer rigorosen Berechnung ab und argumentieren im folgenden qualitativ; dazu beurteilen wir den Einfluss einzelner Schaltungselemente auf die Schleifenverstärkung mit Hilfe vereinfachender Annahmen und dimensionieren die Schaltung anschließend mit einer Schaltungssimulation.

#### 26.1.3.3 Güte der Schleifenverstärkung

Aus der Phase $\varphi_{LG}$ der Schleifenverstärkung kann man die Güte des Kreises inklusive Verstärker ermitteln; es gilt:

$$
Q_{LG}=-\frac{f_R}{2}\left.\frac{d\varphi_{LG}}{df}\right|_{f=f_R}
\qquad \text{mit } \varphi_{LG}=\arg\{LG\}
\eqno{(26.5)}
$$

Diese Güte wird als Lastgüte (loaded quality) $Q_L$ oder als Betriebsgüte $Q_B$ bezeichnet. Wir bezeichnen sie als Schleifengüte (loop quality), um den Bezug zur Schleifenverstärkung zu betonen. Abbildung 26.11 zeigt als Beispiel den Betrag und die Phase der Schleifenverstärkung eines Oszillators mit einer Resonanzfrequenz $f_R = 100\,\text{MHz}$ und einer Schleifengüte $Q_{LG} = 50$.

Wenn man die Elemente der Schleife kennt, kann man die Schleifengüte direkt aus den Elementen berechnen; für die Schleifen in Abb. 26.9 gilt:

$$
Q_{LG}=
\left\{
\begin{array}{ll}
R_P' \sqrt{\frac{C}{L}}
= \frac{R_P'}{R_k}
= \frac{R_P'}{R_P}Q
= \frac{R_P \parallel r_e \parallel r_a}{R_P}Q
& \text{Parallelkreis} \\[1.2em]
\frac{1}{R_S'} \sqrt{\frac{L}{C}}
= \frac{R_k}{R_S'}
= \frac{R_S}{R_S'}Q
= \frac{R_S}{R_S+r_e+r_a}Q
& \text{Serienkreis}
\end{array}
\right.
\eqno{(26.6)}
$$

In den meisten Fällen wird die Güte durch den Verstärker reduziert: $Q_{LG} < Q$. Es kann aber auch $Q_{LG} > Q$ gelten, wenn der Verstärker bei der Resonanzfrequenz potentiell instabil ist ($r_e < 0$ oder $r_a < 0$). In der Schaltungssimulation wird die Schleifengüte mit (26.5) berechnet 2.

---

1 Dieses Verfahren wird in [26.1] beschrieben. Wir haben für unsere Simulationen mit PSpice die Elemente $LG$ und $LG$-Modus und ein Makro $LoopGain$ zur Berechnung und Anzeige der Schleifenverstärkung erstellt, um das Verfahren bequem anwenden zu können. Da das Verfahren einige Einschränkungen besitzt und von der Orientierung abhängig ist, haben wir zusätzlich das verbesserte Verfahren aus [26.2] implementiert. Es arbeitet mit denselben Elementen, verwendet aber umfangreichere Gleichungen zur Berechnung der Schleifenverstärkung. Wir haben dazu das Makro $LoopGainFR$ erstellt. In der Regel liefern beide Verfahren nahezu identische Ergebnisse. Die beiden Makros berechnen die Schleifenverstärkung mit Bezug auf eine Gegenkopplung, d.h. eine Phase von $0^\circ$ (modulo $360^\circ$) entspricht einer Gegenkopplung und eine Phase von $\pm 180^\circ$ (modulo $360^\circ$) entspricht einer Mitkopplung.

2 Für Simulationen mit PSpice haben wir ein Makro $Guete$ erstellt. Die Anzeige der Schleifengüte erfolgt mit $Guete(LoopGain)$.
<!-- page-import:1550:end -->

<!-- page-import:1551:start -->
1514 26. Oszillatoren

**Abb. 26.11.** Beispiel für die Schleifenverstärkung $LG$ eines Oszillators mit einer Resonanzfrequenz $f_R = 100\,\mathrm{MHz}$ und einer Schleifengüte $Q_{LG} = 50$

Die Ableitung $d\varphi_{LG}/df$ wird als *Phasensteilheit* bezeichnet und ist ein Maß dafür, wie stark sich die Resonanzfrequenz ändert, wenn in der Schleife eine zusätzliche Phasenverschiebung $\Delta\varphi$ auftritt:

$$
\Delta f_R \approx -\left(\left.\frac{d\varphi_{LG}}{df}\right|_{f=f_R}\right)^{-1}\Delta\varphi
= \frac{f_R}{2Q_{LG}}\,\Delta\varphi
$$

In der Praxis werden derartige Phasenverschiebungen durch Bauteiletoleranzen, temperaturbedingte Änderungen der Schleifenparameter oder Schwankungen der Versorgungsspannung verursacht. Eine hohe Phasensteilheit bzw. eine hohe Schleifengüte gewährleistet in diesen Fällen eine stabile Resonanzfrequenz.

#### 26.1.3.4 Übertragungsfunktion und Zeitsignale

In der Umgebung der Resonanzfrequenz kann man die Schleifenverstärkung näherungsweise durch einen Bandpass ersten Grades beschreiben:

$$
LG(s) \approx LG(j\omega_R)\,
\frac{\dfrac{s}{Q_{LG}\omega_R}}
{1+\dfrac{s}{Q_{LG}\omega_R}+\dfrac{s^2}{\omega_R^2}}
\qquad \text{mit } \omega_R = 2\pi f_R
\qquad (26.7)
$$

Wir setzen voraus, dass die Schleifenverstärkung bei der Resonanzfrequenz die Phase Null hat; dann ist $LG(j\omega_R)$ reell und größer Null.

Aus der Schleifenverstärkung erhält man die Übertragungsfunktion

$$
H(s)=\frac{LG(s)}{1-LG(s)}
=LG(j\omega_R)\,
\frac{\dfrac{s}{Q_{LG}\omega_R}}
{1+\left[1-LG(j\omega_R)\right]\dfrac{s}{Q_{LG}\omega_R}+\dfrac{s^2}{\omega_R^2}}
$$

und daraus mit Hilfe einer inversen Laplace-Transformation das zugehörige Zeitsignal

$$
h(t)=\mathcal{L}^{-1}\{H(s)\}=c\,e^{\sigma t}\cos \omega t
$$

mit:
<!-- page-import:1551:end -->

<!-- page-import:1552:start -->
26.1 LC-Oszillatoren 1515

a Schwingkreisspannung (linear)

b Einhüllende (logarithmisch)

**Abb. 26.12.** Beispiel für den Einschwingvorgang der Schwingkreisspannung eines Oszillators mit $f_R = 100\,\text{MHz}$. Für $t < 2{,}2\,\mu\text{s}$ arbeitet der Oszillator im linearen Bereich.

$$
\sigma \;=\; \omega_R\,\frac{LG(j\omega_R)-1}{2Q_{LG}}
\qquad
\overset{LG(j\omega_R)\approx 1{,}4}{\approx}
\qquad
\frac{\omega_R}{5Q_{LG}}
\eqno{(26.8)}
$$

$$
\omega \;=\; \omega_R \sqrt{1-\left(\frac{LG(j\omega_R)-1}{2Q_{LG}}\right)^2}
\qquad
\overset{\substack{LG(j\omega_R)\approx 1{,}4\\ Q_{LG}\gg 1}}{\approx}
\qquad
\omega_R
\eqno{(26.9)}
$$

Der Anfangswert $c$ ist nicht weiter von Interesse. Solange der Oszillator im linearen Bereich arbeitet, sind die Wechselanteile sämtlicher Spannungen und Ströme proportional zu $h(t)$ und nehmen exponentiell mit der Wachstumskonstante $\sigma$ zu. Für die Einhüllende erhält man bei halblogarithmischer Darstellung eine Gerade mit der Steigung $\sigma$:

$$
h_\sigma(t) \;=\; c\,e^{\sigma t}
\;\;\Rightarrow\;\;
\ln h_\sigma(t) \;=\; \ln c + \sigma t
\eqno{(26.10)}
$$

Mit zunehmender Aussteuerung gerät der Oszillator in den nichtlinearen Bereich und erreicht schließlich den stationären Zustand mit $LG(j\omega_R)=1$ und $\sigma=0$. Abbildung 26.12 verdeutlicht die Zusammenhänge.

Die Wachstumskonstante $\sigma$ ist nach (26.8) umgekehrt proportional zur Schleifengüte $Q_{LG}$; daraus folgt, dass die Dauer des Einschwingvorgangs etwa proportional zur Schleifengüte ist. Bei realen Schaltungen ist dieser Effekt in der Regel unkritisch, in der Zeitbereichssimulation von Oszillatoren mit sehr hohen Schleifengüten führt er aber zu sehr langen Simulationszeiten. Aus (26.9) folgt, dass die Frequenz während des Einschwingvorgangs geringfügig zunimmt und erst im stationären Zustand mit $LG(j\omega_R)=1$ den Endwert $\omega_R$ erreicht. In der Praxis wird dieser Effekt jedoch meist durch nichtlineare Effekte im Verstärker überlagert.

*Beispiel:* Aus Abb. 26.12b entnimmt man im linearen Bereich $u_\sigma(t_1=0)\approx 3{,}5\,\text{mV}$ und $u_\sigma(t_2=2\,\mu\text{s})\approx 50\,\text{mV}$; daraus folgt mit (26.10):
<!-- page-import:1552:end -->

<!-- page-import:1553:start -->
1516 26. Oszillatoren

**Abb. 26.13.** Beispiel für das Verhalten eines Verstärkers bei Übersteuerung

$$
\frac{u_\sigma(t_2)}{u_\sigma(t_1)}
=
\frac{c\,e^{\sigma t_2}}{c\,e^{\sigma t_1}}
\;\Rightarrow\;
\sigma
=
\frac{1}{t_2-t_1}\ln\frac{u_\sigma(t_2)}{u_\sigma(t_1)}
=
1{,}33\cdot 10^6\,\mathrm{s}^{-1}
$$

Mit $LG(j\omega_R)\approx 1{,}4$ und $\omega_R = 2\pi\cdot 100\,\mathrm{MHz}$ erhält man aus (26.8) $Q_{LG}\approx 95$.

### 26.1.3.5 Schleifenverstärkung bei Übersteuerung

Typische Oszillatoren arbeiten mit einer Kleinsignal-Schleifenverstärkung im Bereich von 1,4 (3 dB). Da die Schleifenverstärkung im stationären Zustand den Wert Eins haben muss, nimmt die Amplitude zu, bis die jeweilige Verstärkungsgröße – die Steilheit $S_V$ in Abb. 26.6a oder die Verstärkung $A_V$ in Abb. 26.6b – entsprechend abgenommen hat; dabei gerät der Verstärker in die Übersteuerung.

Bei Übersteuerung ändern sich in der Regel alle Größen eines Verstärkers, also nicht nur die Verstärkungsgröße, sondern auch die Eingangs- und die Ausgangsimpedanz; dadurch kann sich im Extremfall ein völlig anderes Verhalten ergeben. Die Spannungen und Ströme sind nicht mehr sinusförmig, sondern enthalten mehr oder weniger starke Oberwellen. Die Größen des Verstärkers werden in diesem Fall aus den Grundwellen der Spannungen und Ströme berechnet. Im Idealfall nimmt bei Übersteuerung nur der Betrag der Verstärkungsgröße ab, während alle anderen Größen einschließlich der Phase der Verstärkungsgröße konstant bleiben; in diesem Fall erhält man im stationären Zustand dieselben Phasenverhältnisse und dieselbe Güte wie im Kleinsignalfall.

Das Verhalten des Verstärkers wird durch die AM/AM- und die AM/PM-Kennlinie beschrieben, siehe Abschnitt 24.4.2; das Beispiel aus Abb. 24.53 ist in Abb. 26.13 noch einmal dargestellt. Wenn man mit diesem Verstärker einen Oszillator mit einer Kleinsignal-Schleifenverstärkung von 3 dB aufbaut, nimmt die Amplitude soweit zu, bis die Verstärkung um 3 dB abgenommen hat. Der Verstärker würde demnach im stationären Zustand – beidseitige Anpassung bei der Resonanzfrequenz vorausgesetzt – mit einer Ausgangsleistung $P_L \approx 10\,\mathrm{dBm}$ arbeiten. Die Phase $\varphi_a$ weicht in diesem Fall um weniger als $2^\circ$ von der Kleinsignal-Phase ab; damit ist der Verstärker in dieser Hinsicht vorbildlich.

Man muss demnach beim Entwurf eines Oszillators immer auch das Verhalten des Verstärkers bei Übersteuerung beachten und ggf. optimieren; dabei muss man vor allem darauf achten, dass die Schleifengüte möglichst erhalten bleibt.
<!-- page-import:1553:end -->

<!-- page-import:1554:start -->
26.1 LC-Oszillatoren 1517

a mit Parallelschwingkreis

b mit Serienschwingkreis

**Abb. 26.14.** Alternative Betrachtung der Schaltungen aus Abb. 26.6

### 26.1.3.6 Negative Widerstände

Man kann die Schaltungen aus Abb. 26.6 auch mit Hilfe von zwei Impedanzen darstellen, siehe Abb. 26.14; dabei ist $Z_V(s)$ die Impedanz des Verstärkers und $Z_R(s)$ die Impedanz des Resonanzkreises. Aus den einfachen Ersatzschaltbildern mit ohmschen Ein- und Ausgangswiderständen erhält man:

$$
Z_V(s)=
\begin{cases}
\frac{1}{1/r_e+1/r_a+S_V} & \text{Parallelschwingkreis} \\
r_a+r_e(1-A_V) & \text{Serienschwingkreis}
\end{cases}
$$

Mit einer negativen Steilheit $S_V$ mit ausreichend großem Betrag oder einer ausreichend großen Verstärkung $A_V$ wird der Realteil der Impedanz $Z_V$ negativ und wirkt als negativer Widerstand; dadurch wird der Widerstand des Resonanzkreises kompensiert. Wenn es eine Frequenz gibt, bei der die Impedanz $Z(s)=Z_V(s)+Z_R(s)$ die Bedingungen

$$
\operatorname{Re}\{Z(j\omega)\}=\operatorname{Re}\{Z_V(j\omega)+Z_R(j\omega)\}<0
$$

$$
\operatorname{Im}\{Z(j\omega)\}=\operatorname{Im}\{Z_V(j\omega)+Z_R(j\omega)\}=0
$$

erfüllt, baut sich eine Schwingung bei dieser Frequenz auf. Mit zunehmender Amplitude geht der Realteil von $Z(j\omega)$ aufgrund der einsetzenden Übersteuerung gegen Null und man erhält eine ungedämpfte Schwingung.

In der Praxis werden zur Berechnung und Messung die im Abschnitt 21.3 beschriebenen Wellengrößen $a$ (einfallende Welle) und $b$ (reflektierte Welle) und die Reflexionsfaktoren

$$
r_R == \frac{b_R}{a_R} = \frac{Z_R-Z_W}{Z_R+Z_W}, \qquad
r_V == \frac{b_V}{a_V} = \frac{Z_V-Z_W}{Z_V+Z_W}
$$

verwendet. Abbildung 26.15 zeigt dies für den Fall mit einem Parallelschwingkreis. Die einfallenden Wellen $a_V$ und $a_R$ entsprechen den reflektierten Wellen $b_R$ und $b_V$; dadurch erhält man eine Schleife mit der Reflexions-Schleifenverstärkung:

$$
LG_r=r_R\,r_V
$$

Auch hier muss der Betrag größer Eins sein und die Phase muss $0^\circ$ (modulo $2\pi$) betragen, damit sich eine Schwingung aufbauen kann.
<!-- page-import:1554:end -->

<!-- page-import:1555:start -->
1518  26. Oszillatoren

**Abb. 26.15.**  
Beschreibung eines Oszillators mit Wellengrößen und Reflexionsfaktoren

Diese alternative Betrachtung ist vor allem für diskret aufgebaute Oszillatoren im GHz-Bereich von Interesse. Der Verstärker besteht in diesem Fall aus einem HF-Transistor, der im instabilen Bereich betrieben wird und deshalb an einem der Anschlüsse einen Reflexionsfaktor $r_V$ mit $|r_V| > 1/|r_R| > 1$ aufweist. Da die Phasenbeziehungen bei hohen Frequenzen von den Längen der Verbindungsleitungen abhängen und eine verlustlose Leitung nach Abb. 21.34 auf Seite 1173 eine Drehung des Reflexionsfaktors bewirkt, kann man die Phasenbedingung mit Hilfe der Länge der Verbindungsleitung zwischen Transistor und Resonanzkreis einstellen.

Die Reflexions-Schleifenverstärkung $LG_r$ entspricht nicht der Schleifenverstärkung $LG$; lediglich im eingeschwungenen Zustand sind die beiden Schleifenverstärkungen gleich:

$$
LG_r = 1 \quad \Rightarrow \quad LG = 1
$$

Wir werden deshalb diese alternative Betrachtung nicht verwenden.

## 26.1.4 LC-Oszillatoren mit zweistufigen Verstärkern

Wir betrachten zunächst LC-Oszillatoren mit zweistufigen Verstärkern. Bei diesen Oszillatoren sind die wichtigen Größen gut entkoppelt; wir können deshalb die Schleifenverstärkung leichter beeinflussen und einige wichtige Zusammenhänge übersichtlicher darstellen als bei den Oszillatoren mit einstufigem Verstärker, auf die wir anschließend eingehen.

### 26.1.4.1 Zweistufiger LC-Oszillator mit Parallelschwingkreis

#### 26.1.4.1.1 Schaltung

Abbildung 26.16 zeigt einen einfachen, zweistufigen LC-Oszillator mit Parallelschwingkreis, den wir mit folgenden Überlegungen schrittweise aus Abb. 26.6a entwickelt haben:

- Wir gehen von einem Parallelschwingkreis mit einer Resonanzfrequenz $f_r = 100\,\text{MHz}$ aus. Die Elemente haben die Werte $L = 100\,\text{nH}$, $C = 25\,\text{pF}$ und $R_P = 5\,\text{k}\Omega$; die Güte beträgt $Q = 80$. Den Wert für $C$ müssen wir später noch verringern, um die Kapazitäten des Verstärkers zu kompensieren. Man beachte, dass $R_P$ nur ein Ersatzelement für die Verluste des Kreises ist; in der realen Schaltung ist dieser Widerstand nicht vorhanden.
- Bei einem Parallelschwingkreis muss der Verstärker hochohmig sein; wir verwenden deshalb als erste Stufe eine Kollektorschaltung mit dem Transistor $T_1$ als Impedanzwandler. Wir verbinden den Resonanzkreis hier nicht mit Masse, sondern mit der positiven Versorgungsspannung $U_b$; dann ist auch die Basis von $T_1$ mit $U_b$ verbunden und der Basisstrom fließt über die Induktivität $L$. Den Ruhestrom stellen wir mit einer Stromquelle $I_0$ ein.
- Als Stromquelle am Ausgang des Verstärkers verwenden wir eine Basisschaltung mit dem Transistor $T_2$. Wir können den Kollektor direkt mit dem Schwingkreis verbinden; der Kollektorstrom fließt dann über die Induktivität $L$. Die Basis verbinden wir mit $U_b$ und den Ruhestrom stellen wir wieder mit einer Stromquelle $I_0$ ein.
<!-- page-import:1555:end -->

<!-- page-import:1556:start -->
26.1 LC-Oszillatoren 1519

![Abb. 26.16. Zweistufiger LC-Oszillator mit Parallelschwingkreis](#)

**Abb. 26.16.**  
Zweistufiger LC-Oszillator  
mit Parallelschwingkreis

– Die Steilheit $S_V$ des Verstärkers stellen wir mit $R_K$ und $C_K$ ein. Ein Widerstand reicht hier nicht aus, da wir aufgrund der hohen Frequenz mit Phasennacheilungen in beiden Stufen rechnen müssen, die wir mit der Kapazität $C_K$ kompensieren können. Für $f = 0$ sind die beiden Stufen entkoppelt und wir erhalten $S_V = 0$. Mit zunehmender Frequenz nimmt die Kopplung durch die abnehmende Impedanz von $C_K$ zu; dadurch nimmt auch $S_V$ zu. Wir erhalten demnach ein Hochpass-Verhalten mit einer positiven Phase.

Wir verwenden Transistoren mit den Parametern aus Abb. 4.5 und einem Ruhestrom $I_0 = 100\,\mu\text{A}$. Die Arbeitspunktspannungen sind in Abb. 26.16 eingetragen.

#### 26.1.4.1.2 Dimensionierung

Wir verzichten auf eine aufwendige Berechnung mit Hilfe eines Kleinsignalersatzschaltbilds und gehen direkt in die Schaltungssimulation. Wir haben drei variable Elemente – $C$, $C_K$ und $R_K$ – und müssen damit drei Größen einstellen: die Resonanzfrequenz $f_R$ und den Betrag und die Phase der Schleifenverstärkung. Da die Resonanzfrequenz praktisch nicht von $C_K$ und $R_K$ abhängt, können wir die Dimensionierung problemlos durchführen:

– Wir beginnen mit $R_K = R_P$ und einem großen Wert für $C_K$; damit wird das Betragsmaximum der Schleifenverstärkung kleiner Eins.

– Wir passen die Schwingkreiskapazität $C$ so an, dass der Betrag der Schleifenverstärkung bei der gewünschten Resonanzfrequenz $f_R = 100\,\text{MHz}$ maximal wird.

– Wir reduzieren $C_K$, bis die Phase der Schleifenverstärkung bei der Resonanzfrequenz zu Null wird.

– Wir variieren $R_K$ und $C_K$ gegensinnig, bis der Betrag der Schleifenverstärkung bei der Resonanzfrequenz etwa $3\,\text{dB} = \sqrt{2}$ beträgt und halten dabei die Phase auf Null.

– Geringfügige Änderungen der Resonanzfrequenz gleichen wir durch eine Nachjustierung von $C$ aus.

Abbildung 26.17 zeigt die dimensionierte Schaltung, bei der wir die beiden Stromquellen aus Abb. 26.16 durch eine Stromquellenbank ersetzt haben.

Auf eine Darstellung der Schleifenverstärkung nach Betrag und Phase können wir verzichten, da man der Form nach immer die in Abb. 26.11 auf Seite 1514 gezeigten Verläufe erhält; lediglich die Beschriftung der Frequenzachsen und der Achse für die Phasensteilheit ändert sich. Bei der Auswertung der Schleifengüte mit (26.5) erhalten wir mit $Q_{LG} \approx 105$ einen Wert, der über der Güte des Resonanzkreises liegt. Wir haben
<!-- page-import:1556:end -->

<!-- page-import:1557:start -->
1520  26. Oszillatoren

Abb. 26.17. Dimensionierter zweistufiger Oszillator mit Parallelschwingkreis für $f_R = 100\,\text{MHz}$

bereits darauf hingewiesen, dass dies ein Hinweis darauf ist, dass der Verstärker potentiell instabil ist. Hier ist es die Kollektorschaltung mit dem Transistor $T_1$, die aufgrund der kapazitiven Last, die sich aus $C_K$ und der Kollektor-Substrat-Kapazität des Transistors $T_3$ ergibt, eine Eingangsimpedanz mit negativem Realteil besitzt und den Kreis entdämpft. Dieser Effekt ist prinzipiell hilfreich, kann aber problematisch werden, wenn sich dadurch weitere Resonanzstellen mit einer Schleifenverstärkung größer Eins ergeben; das ist hier jedoch nicht der Fall, wie eine Simulation der Schleifenverstärkung über den gesamten Frequenzbereich zeigt.

#### 26.1.4.1.3 Signale

Abbildung 26.18 zeigt die Zeitverläufe der Schwingkreisspannung $U_1$ und der Kollektorströme der Transistoren im eingeschwungenen Zustand. Wir müssen nun prüfen, durch welche Art der Übersteuerung die Schleifenverstärkung von $3\,\text{dB}$ auf $0\,\text{dB}$ reduziert wird. Zunächst stellen wir fest, dass die Amplitude der Schwingkreisspannung $U_1$ nicht so groß wird, dass die Kollektor-Basis-Dioden der Transistoren leitend werden. Da beide Transistoren im Arbeitspunkt mit $U_{BC,A} = 0$ betrieben werden und die Amplitude von $U_1$

Abb. 26.18. Schwingkreisspannung $U_1$ und Kollektorströme der Transistoren für die Schaltung aus Abb. 26.17
<!-- page-import:1557:end -->

<!-- page-import:1558:start -->
26.1 LC-Oszillatoren 1521

**Abb. 26.19.** Schwingkreisspannung $U_1$ und Basisstrom $I_{B1}$ für die Schaltung aus Abb. 26.17

etwa 180 mV beträgt, gilt für beide Transistor $U_{BC} < 180\,\text{mV}$; die Ströme der Dioden bleiben dabei noch vernachlässigbar klein. Diese Feststellung ist besonders wichtig, da die Kollektor-Basis-Dioden parallel zum Schwingkreis liegen und eine Begrenzung der Schwingungsamplitude durch diese Dioden eine starke Reduktion der Schleifengüte zur Folge hätte. Der Kollektorstrom $I_{C2}$ ist sinusförmig, d.h. die Basisschaltung arbeitet nahezu linear; dagegen ist der Kollektorstrom $I_{C1}$ der Kollektorschaltung nach unten begrenzt. Die Übersteuerung findet hier also in der Kollektorschaltung statt. Da der Basisstrom $I_{B1}$ den Schwingkreis belastet, ermitteln wir mit Hilfe der in Abb. 26.19 gezeigten Zeitverläufe von $U_1$ und $I_{B1}$ einen Schätzwert für die Großsignal-Eingangsadmittanz $Y$ der Kollektorschaltung bei der Resonanzfrequenz; dazu bestimmen wir aus den Spitze-Spitze-Werten und den Abständen der Nulldurchgänge Schätzwerte für den Betrag und die Phase von $Y$:

$$
|Y| \approx \frac{90\,\mu\text{A}}{360\,\text{mV}} = 0{,}25\,\text{mS} \quad , \quad \arg\{Y\} \approx 360^\circ \cdot \frac{(2{,}4\,\text{ns}+3\,\text{ns})/2}{10\,\text{ns}} \approx 97^\circ
$$

Daraus folgt:

$$
Y \approx 0{,}25\,\text{mS}\cdot e^{j97^\circ} \approx (-0{,}03 + j\,0{,}25)\,\text{mS}
$$

$$
\approx -\frac{1}{33\,\text{k}\Omega} + j\,2\pi \cdot 100\,\text{MHz}\cdot 0{,}4\,\text{pF}
$$

Die Eingangsadmittanz entspricht einer Parallelschaltung eines negativen Widerstands mit $-\,33\,\text{k}\Omega$ und einer Kapazität mit $0{,}4\,\text{pF}$. Der Schwingkreis wird also auch im eingeschwungenen Zustand entdämpft, so dass wir bei diesem Oszillator außerordentlich günstige Verhältnisse bezüglich der Schleifengüte haben.

#### 26.1.4.1.4 Auskopplung

Zur Auskopplung des Oszillatorsignals wird ein Pufferverstärker benötigt; dazu muss zunächst ein Punkt gewählt werden, an dem die Auskopplung erfolgen soll. Da sich die Kollektorschaltung als unkritisch bezüglich der Schleifengüte erwiesen hat, kann man z.B. einen Pufferverstärker verwenden, dessen erste Stufe ebenfalls aus einer Kollektorschaltung besteht, die direkt mit dem Schwingkreis verbunden wird, siehe Abb. 26.20a.
<!-- page-import:1558:end -->

<!-- page-import:1559:start -->
1522  26. Oszillatoren

a  mit Kollektorschaltung am Schwingkreis  
b  am Ausgang der Kollektorschaltung

**Abb. 26.20.** Auskopplung des Oszillatorsignals

Alternativ kann man den Pufferverstärker direkt oder – wie in Abb. 26.20b gezeigt – über eine Koppelkapazität am Ausgang der Kollektorschaltung anschließen.

Durch die Eingangsimpedanz des Pufferverstärkers ändert sich die Schleifenverstärkung; deshalb muss man die Dimensionierung des Oszillators nach dem Entwurf des Pufferverstärkers anpassen. Ein guter Pufferverstärker muss folgende Eigenschaften haben:

– Die Eingangsimpedanz muss so hoch sein, dass man auch mit Pufferverstärker die erforderliche Schleifenverstärkung erzielen kann.

– Die Rückwirkung muss möglichst gering sein, damit die am Ausgang des Pufferverstärkers angeschlossenen Lasten (weitere Verstärker, Mischer, etc.) nur einen vernachlässigbar geringen Einfluss auf den Oszillator haben.

– Der Pufferverstärker darf das Übersteuerungsverhalten des Oszillators nicht negativ beeinflussen.

In der Praxis werden in der Regel mehrstufige Pufferverstärker mit Kollektorschaltungen zur Impedanzwandlung und Emitterschaltungen mit Kaskode oder Basisschaltungen zur Minimierung der Rückwirkung eingesetzt.

## 26.1.4.2 Zweistufiger Oszillator mit Serienschwingkreis

Wir haben bereits darauf hingewiesen, dass für einen Oszillator mit LC-Serienschwingkreis aufgrund des niedrigen Kennwiderstands von LC-Resonatoren ein extrem niederohmiger Verstärker erforderlich ist; deshalb wird diese Variante in der Praxis nur selten verwendet. Wir verwenden ersatzweise einen 10 MHz-Quarz-Resonator, um das Prinzip eines zweistufigen Oszillators mit Serienschwingkreis an einem praxisgerechten Beispiel zu erläutern. Wir bringen dieses Beispiel an dieser Stelle, weil wir den zweistufigen Verstärker, den wir im letzten Abschnitt verwendet haben, auch hier verwenden können, wenn wir den Resonator und das Netzwerk zur Einstellung der Schleifenverstärkung vertauschen. Damit erhalten wir die Schaltung in Abb. 26.21, bei der die Basisschaltung mit dem Transistor $T_2$ als niederohmige Eingangsstufe und die Kollektorschaltung mit dem Transistor $T_1$ als niederohmige Ausgangsstufe dient.
<!-- page-import:1559:end -->

<!-- page-import:1560:start -->
26.1 LC-Oszillatoren 1523

**Abb. 26.21.** Zweistufiger Oszillator mit Serienschwingkreis. Als Schwingkreis wird ein Quarz-Resonator verwendet.

Der Quarz-Resonator wird durch die Serienelemente $L = 10\,\mathrm{mH}$, $C = 25{,}3\,\mathrm{fF}$ und $R_S = 5\,\Omega$ sowie eine Parallelkapazität $C_P = 5{,}5\,\mathrm{pF}$ beschrieben; wir gehen darauf im Abschnitt 26.3.1 noch näher ein. Aus den Serienelementen erhalten wir mit (26.3) die für Quarz-Resonatoren typische, sehr hohe Güte $Q \approx 126000$. Um den Verstärker niederohmiger zu machen, haben wir die Ruheströme auf $1\,\mathrm{mA}$ erhöht; daraus folgt für die Basisschaltung $r_e \approx 1/S_2 = U_T/I_{C2,A} \approx 26\,\Omega$ und für die Kollektorschaltung $r_a \approx 1/S_1 = U_T/I_{C1,A} \approx 26\,\Omega$. Da wir damit die Bedingung $r_e + r_a < R_S$ noch nicht einhalten können, müssten wir die Ruheströme weiter erhöhen oder eine der in Abb. 26.8b gezeigten Schaltungen zur Impedanztransformation verwenden, z.B. die Variante mit den Parallelkapazitäten $C_{P1}$ und $C_{P2}$, die wir in Abb. 26.21 angedeutet haben. Wir verzichten hier auf diese Maßnahmen und nehmen eine Reduktion der Güte um eine Größenordnung in Kauf, damit die Schaltung mit vertretbarem Aufwand simuliert werden kann $^3$.

Die Resonanzfrequenz ist durch den Quarz-Resonator sehr genau definiert, so dass wir auf eine Abstimmung der Resonanzfrequenz verzichten können. Mit $R_K$ und $C_K$ stellen wir die Schleifenverstärkung auf einen Maximalwert von $3\,\mathrm{dB}$ und Phase Null ein; die resultierenden Werte sind in Abb. 26.21 angegeben. Die Schleifengüte beträgt $Q_{LG} \approx 8700$.

Abbildung 26.22 zeigt die Spannungen und die Kollektorströme im eingeschwungenen Zustand. Man erkennt, dass die Spannung $U_1$ am Eingang der Kollektorschaltung der Spannung $U_2$ am Ausgang der Basisschaltung voreilt. Die Kollektorströme sind nahezu sinusförmig. Die Auskopplung des Oszillatorsignals kann am Ausgang der Kollektorschaltung oder am Ausgang der Basisschaltung erfolgen.

---

$^3$ Die Zeitbereichssimulation von Oszillatoren mit sehr hohen Schleifengüten ist problematisch, da der Rechenaufwand linear bis quadratisch mit der Schleifengüte zunimmt: (1) die Dauer des Einschwingvorgangs ist etwa proportional zur Schleifengüte, so dass der zu simulierende Zeitabschnitt proportional zur Schleifengüte zunimmt; (2) mit zunehmender Güte muss die Schrittweite reduziert werden, damit die numerische Integration ausreichend genau erfolgt. Da man die erforderliche Schrittweite nur schwer vorhersagen kann – typische Werte liegen im Bereich von 100 Punkten pro Periode –, muss man mehrere Simulationen mit sukzessive reduzierter Schrittweite durchführen, bis man ein stabiles Ergebnis erhält.
<!-- page-import:1560:end -->

<!-- page-import:1561:start -->
1524 26. Oszillatoren

**Abb. 26.22.** Spannungen und Kollektorströme für die Schaltung aus Abb. 26.21

Die Begrenzung kommt hier dadurch zustande, dass die effektiven Steilheiten der Transistoren mit zunehmender Aussteuerung abnehmen; dadurch nimmt die Schleifenverstärkung ab. Mit abnehmenden Steilheiten nehmen aber die Widerstände $r_e$ und $r_a$ zu, so dass die Güte bei einer Schleifenverstärkung von 3 dB um den Faktor 1,4 reduziert wird. Bei Quarz-Resonatoren kann man dies in Kauf nehmen, vor allem dann, wenn man die Ruheströme weiter erhöht oder eine Impedanztransformation mit $C_{P1}$ und $C_{P2}$ vornimmt. Bei besonders hohen Anforderungen muss man eine Amplitudenregelung verwenden; wir gehen darauf im Abschnitt 26.5 noch näher ein.

#### 26.1.4.3 Zusammenfassung der wichtigen Punkte

Wir fassen die wichtigen Punkte zusammen:

- LC-Oszillatoren werden bevorzugt mit Parallelschwingkreisen ausgeführt.
- Wir müssen die Schaltung so dimensionieren, dass die Schleifenverstärkung bei der gewünschten Oszillatorfrequenz (1) maximal wird, (2) etwa den Betrag 3 dB $= \sqrt{2}$ und (3) die Phase Null hat.
- Wir benötigen mindestens drei variable Elemente, um die drei Bedingungen erfüllen zu können. Bei Oszillatoren mit zweistufigem Verstärker ist die Einstellung der Frequenz sehr gut von der Einstellung des Betrags und der Phase der Schleifenverstärkung entkoppelt; im Gegensatz dazu gibt es bei den im nächsten Abschnitt beschriebenen Oszillatoren mit einstufigem Verstärker starke Abhängigkeiten.
- Wir müssen darauf achten, dass die Schleifengüte möglichst hoch wird; dazu müssen wir ggf. (1) die Ruheströme des Verstärkers anpassen, um günstigere Werte für die Eingangs- und/oder die Ausgangsimpedanz zu erzielen, (2) induktive oder kapazitive Ankopplungen verwenden oder (3) Anpassnetzwerke einsetzen.
- Eine ausreichend genaue Berechnung mit Hilfe eines Kleinsignalersatzschaltbilds ist nicht mit vertretbarem Aufwand möglich; deshalb erfolgt die Dimensionierung mit Hilfe einer Schaltungssimulation.
- Diese Vorgehensweise stellt sicher, dass der Oszillator schwingt. Sollte dies in der Zeitbereichssimulation nicht der Fall sein, fehlt entweder eine geeignete Anregung – die in realen Schaltungen durch das Rauschen gegeben ist – oder die Schrittweite ist
<!-- page-import:1561:end -->

<!-- page-import:1562:start -->
26.1 LC-Oszillatoren 1525

a mit Basisschaltung

b mit Kollektorschaltung

**Abb. 26.23.** LC-Oszillatoren mit einstufigen Verstärkern

zu groß. Wenn ein diskret aufgebauter Oszillator trotz erfolgreicher Simulation nicht schwingt, liegt dies in der Regel an einer unzureichenden Modellierung; vor allem bei hohen Frequenzen muss man für alle Elemente die Hochfrequenz-Ersatzschaltbilder verwenden.

– Das Übersteuerungsverhalten des Verstärkers muss analysiert werden. Die Begrenzung der Amplitude darf nicht zu einer starken Reduktion der Schleifengüte führen. Im Idealfall wird durch die Übersteuerung nur der Betrag der Schleifenverstärkung reduziert, während die Phase, die Güte und die Resonanzfrequenz gleich bleiben.

## 26.1.5 LC-Oszillatoren mit einstufigen Verstärkern

Die einstufigen Verstärker entsprechen den Grundschaltungen eines Transistors. Beim Bipolartransistor sind dies die Emitter-, die Kollektor- und die Basisschaltung, beim Feldeffekttransistor die Source-, die Drain- und die Gateschaltung. Wir verwenden im folgenden Bipolartransistoren, weisen aber darauf hin, dass man alle Schaltungen auch mit Feldeffekttransistors aufbauen kann.

Die LC-Oszillatoren mit Basis- und Kollektorschaltung kann man gemäß Abb. 26.23 direkt aus dem Oszillator mit zweistufigem Verstärker aus Abb. 26.17 ableiten:
<!-- page-import:1562:end -->

<!-- page-import:1563:start -->
1526 26. Oszillatoren

a Ersatzschaltbild

b Dreieck-Stern-Umwandlung

c Ersatzschaltbild nach der Umwandlung

d Ausführung mit eingeschränkten Einstellmöglichkeiten

**Abb. 26.24.** Kleinsignalersatzschaltbild eines Colpitts-Oszillators in Basisschaltung

– Ersetzt man die Kollektorschaltung durch eine kapazitive Mitkopplung vom Schwingkreis zum Eingang der Basisschaltung, erhält man den in Abb. 26.23a gezeigten Oszillator in Basisschaltung.

– Ersetzt man die Basisschaltung durch eine kapazitive Mitkopplung vom Ausgang der Kollektorschaltung zum Schwingkreis, erhält man den in Abb. 26.23b gezeigten Oszillator in Kollektorschaltung.

In beiden Fällen erfolgt die Mitkopplung über einen kapazitiven Spannungsteiler, der nicht nur die Mitkopplung herstellt, sondern auch zur Ankopplung des niedrigen Eingangswiderstands der Basisschaltung bzw. des niedrigen Ausgangswiderstands der Kollektorschaltung an den Schwingkreis dient – siehe Abb. 26.7a auf Seite 1510 – und die Arbeitspunktspannungen entkoppelt. Oszillatoren mit kapazitivem Spannungsteiler werden als Colpitts-Oszillatoren bezeichnet.

#### 26.1.5.1 Colpitts-Oszillator in Basisschaltung

##### 26.1.5.1.1 Schaltung

Abbildung 26.24a zeigt das Kleinsignalersatzschaltbild des Colpitts-Oszillators in Basisschaltung aus Abb. 26.23a; dabei haben wir das Ersatzschaltbild des Transistors nur symbolisch dargestellt und die Ausgangsimpedanz des Stromspiegels $T_2, T_3$ vernachlässigt. Für die näherungsweise Berechnung vernachlässigen wir die Kapazitäten des Transistors und verwenden das statische Kleinsignalersatzschaltbild mit dem Eingangswiderstand $r_e$ und dem Ausgangswiderstand $r_a$. Die Ergebnisse der Berechnung verwenden wir als Startwerte für die Dimensionierung mit Hilfe einer Schaltungssimulation.

Die drei Kapazitäten bilden eine Dreieck-Schaltung, die man gemäß Abb. 26.24b in eine äquivalente Stern-Schaltung mit

$$
C_{12}=C_1+C_2+\frac{C_1C_2}{C_3}, \quad
C_{13}=C_1+C_3+\frac{C_1C_3}{C_2}, \quad
C_{23}=C_2+C_3+\frac{C_2C_3}{C_1}
$$

umwandeln kann.
<!-- page-import:1563:end -->

<!-- page-import:1564:start -->
26.1 LC-Oszillatoren 1527

Abb. 26.25. Vereinfachtes Kleinsignalersatzschaltbild des Colpitts-Oszillators in Basisschaltung

umwandeln kann; damit erhält man die alternative Darstellung in Abb. 26.24c. Bei günstigen Verhältnissen kann bei der Dimensionierung der Fall $C_1 \to 0$ bzw. $C_3 \to \infty$ eintreten; dann reduziert sich die Schaltung auf die in Abb. 26.24d gezeigte Ausführung mit zwei Kapazitäten. Im allgemeinen kann man mit dieser Ausführung aber keine korrekte Einstellung der Schleifenverstärkung erzielen, da ein Freiheitsgrad fehlt.

#### 26.1.5.1.2 Berechnung

Zur näherungsweisen Berechnung verwenden wir das Kleinsignalersatzschaltbild in Abb. 26.25, bei dem wir für den Transistor das statische Kleinsignalersatzschaltbild aus Abb. 2.39b auf Seite 79 mit $r_E \approx 1/S$ und $\alpha \approx 1$ eingesetzt haben. Der Ausgangswiderstand $r_a$ ist dabei bereits vernachlässigt.

Bei der Resonanzfrequenz ist die Impedanz der Kapazität $C_3$ normalerweise kleiner als der Eingangswiderstand $r_e$; deshalb gilt für die effektive Kapazität des Schwingkreises

$$
C \approx C_1 + \frac{C_2 C_3}{C_2 + C_3}
$$

und für die Resonanzfrequenz:

$$
\omega_R = 2\pi f_R = \frac{1}{\sqrt{LC}} \approx \frac{1}{\sqrt{L \left(C_1 + \frac{C_2 C_3}{C_2 + C_3}\right)}}
$$

Der Eingangswiderstand $r_e = r_E$ wird über die Ankopplung mit dem Teilerfaktor

$$
n_C = 1 + \frac{C_3}{C_2}
$$

an den Schwingkreis transformiert; daraus folgt für den effektiven Parallelwiderstand:

$$
R_P' = R_P \parallel R_{PV} = R_P \parallel n_C^2 r_E = \frac{R_P n_C^2 r_E}{R_P + n_C^2 r_E}
\qquad (26.11)
$$

Für die auf die Schwingkreisspannung $u_1$ bezogene Steilheit $S_V$ erhalten wir:

$$
S_V = \frac{i_a}{u_1} \approx \frac{-\alpha i_e}{n_C u_e} \approx -\frac{1}{n_C r_E}
$$
<!-- page-import:1564:end -->

<!-- page-import:1565:start -->
1528 26. Oszillatoren

**Abb. 26.26.**  
Schleifenverstärkung $LG(j\omega_R)$ und relative Schleifengüte $Q_{LG}/Q$ für $R_P = 5\,\mathrm{k}\Omega$ und $r_E = 400\,\Omega$ in Abhängigkeit vom Teilerfaktor $n_C$. Der korrekte Teilerfaktor beträgt $n_{C2} = 7{,}2$.

Dabei haben wir $u_e \approx u_1/n_C$ und $\alpha \approx 1$ verwendet. Für die Schleifenverstärkung bei der Resonanzfrequenz gilt:

$$
LG(j\omega_R) = -S_V\,R_P' \approx \frac{n_C\,R_P}{R_P + n_C^2 r_E}
\qquad (26.12)
$$

Sie geht für $n_C \to 0$ und $n_C \to \infty$ gegen Null und wird für

$$
n_C = n_{C,\max} = \sqrt{\frac{R_P}{r_E}}
\;\Rightarrow\;
LG(j\omega_R)\big|_{n_C=n_{C,\max}} = \frac{1}{2}\sqrt{\frac{R_P}{r_E}}
$$

maximal. Damit eine Schleifenverstärkung von $3\,\mathrm{dB} = \sqrt{2}$ möglich ist, muss

$$
\frac{1}{2}\sqrt{\frac{R_P}{r_E}} \geq \sqrt{2}
\;\Rightarrow\;
r_E \leq \frac{R_P}{8}
\;\Rightarrow\;
S \geq \frac{8}{R_P}
$$

gelten; dabei haben wir $r_E \approx 1/S$ verwendet. Daraus erhalten wir mit $S = I_{C,A}/U_T$ und $U_T = 26\,\mathrm{mV}$ eine Untergrenze für den Arbeitspunktstrom:

$$
I_{C,A} \geq \frac{8U_T}{R_P} \approx \frac{0{,}2\,\mathrm{V}}{R_P}
\qquad (26.13)
$$

Wir verwenden im folgenden wieder den Parallelschwingkreis aus Abschnitt 26.1.4.1 mit $R_P = 5\,\mathrm{k}\Omega$ und müssen deshalb $I_{C,A} \geq 40\,\mu\mathrm{A}$ wählen.

In der Praxis wählt man einen Arbeitspunktstrom, der mindestens um den Faktor 2 über der Untergrenze liegt. Da die maximal mögliche Schleifenverstärkung in diesem Fall größer als $\sqrt{2}$ ist, existieren zwei verschiedene Teilerfaktoren $n_C$, für die die Schleifenverstärkung den Wert $\sqrt{2}$ annimmt. Man muss den größeren Teilerfaktor verwenden, damit der effektive Parallelwiderstand $R_P'$ und die Schleifengüte

$$
Q_{LG} \overset{(26.6)}{=} \frac{R_P'}{R_P}\,Q
\overset{(26.11)}{=} \frac{R_P \parallel R_{PV}}{R_P}\,Q
=
\frac{n_C^2 r_E}{R_P + n_C^2 r_E}\,Q
\qquad (26.14)
$$

maximal werden. Abbildung 26.26 zeigt den Verlauf der Schleifenverstärkung und der relativen Schleifengüte $Q_{LG}/Q$ für $R_P = 5\,\mathrm{k}\Omega$ und $r_E = 400\,\Omega$. Der korrekte Teilerfaktor beträgt in diesem Fall $n_{C2} = 7{,}2$.
<!-- page-import:1565:end -->

<!-- page-import:1566:start -->
26.1 LC-Oszillatoren 1529

a mit Dreieck-Schaltung

b mit Stern-Schaltung

**Abb. 26.27.** Dimensionierter Colpitts-Oszillator in Basisschaltung für $f_R = 100\,\mathrm{MHz}$

## 26.1.5.1.3 Dimensionierung

Für die Dimensionierung mit Hilfe einer Schaltungsdimensionierung verwenden wir die Parameter $C$, $n_C$ und den Faktor:

$$
k_C = 1 - \frac{C_1}{C}
$$

Daraus folgt für die Kapazitäten:

$$
C_1 = (1 - k_C)\,C \quad,\quad C_2 = \frac{k_C n_C}{n_C - 1}\,C \quad,\quad C_3 = k_C n_C C
$$

Mit diesen Parametern erhält man eine näherungsweise Entkopplung: die Resonanzfrequenz wird in erster Linie mit $C$ eingestellt, $n_C$ wirkt in erster Linie auf den Betrag und $k_C$ in erster Linie auf die Phase der Schleifenverstärkung. Als Startwerte verwendet man

$$
C = \frac{1}{(2\pi\,f_R)^2\,L} \quad,\quad k_C = 1
$$

und einen großen Wert für $n_C$. Der Betrag der Schleifenverstärkung muss mit zunehmendem Teilerfaktor $n_C$ abnehmen. Ist dies nicht der Fall, muss man $n_C$ weiter erhöhen. Abbildung 26.27a zeigt die dimensionierte Schaltung. Bei der Dimensionierung erhält man zunächst die Parameter $C = 24{,}2\,\mathrm{pF}$, $n_C = 6{,}77$ und $k_C = 0{,}0947$ und daraus die Kapazitäten.

Abbildung 26.27b zeigt die Variante mit Stern-Schaltung, die aber ungünstigere Werte für die Kapazitäten aufweist. In der Praxis berechnet man immer beide Varianten und wählt die günstigere. Wenn $k_C$ bei der Dimensionierung in der Nähe von Eins bleibt, kann man die Variante mit zwei Kapazitäten aus Abb. 26.24d verwenden; dazu setzt man $k_C = 1$ und optimiert die Schleifenverstärkung mit $C$ und $n_C$.

Die Schleifengüte beträgt $Q_{LG} = 50$ und liegt damit deutlich unter der Güte $Q = 80$ des Schwingkreises. Dieser Verlust ist jedoch prinzipbedingt. Man kann durch eine Optimierung des Ruhestroms und der Größe der Transistoren eine geringfügige Verbesserung erzielen, das Optimum ist aber nur sehr schwach ausgeprägt. Mit $Q_{LG} > Q/2$ liegt man bereits sehr nahe am Optimum. Aus dem Verhältnis von $Q$ und $Q_{LG}$ kann man mit (26.14) den effektiven Lastwiderstand $R_{PV}$ des Verstärkers ermitteln:
<!-- page-import:1566:end -->

<!-- page-import:1567:start -->
1530 26. Oszillatoren

**Abb. 26.28.** Schwingkreisspannung $U_1$ und Kollektorstrom $I_{C1}$ für die Schaltung aus Abb. 26.27

$$
R_{PV}=\frac{Q_{LG}\,R_P}{Q-Q_{LG}}
$$

Mit $R_P=5\,\mathrm{k}\Omega$, $Q=80$ und $Q_{LG}=50$ erhält man $R_{PV}=8{,}3\,\mathrm{k}\Omega$.

#### 26.1.5.1.4 Signale

Abbildung 26.28 zeigt den Verlauf der Schwingkreisspannung $U_1$ und des Kollektorstroms $I_{C1}$ im eingeschwungenen Zustand. Da der Transistor $T_1$ im Arbeitspunkt mit der Basis-Kollektor-Spannung $U_{BC,A}=0\,\mathrm{V}$ betrieben wird, entspricht die maximale Basis-Kollektor-Spannung der Amplitude der Schwingkreisspannung $U_1$, die etwa $410\,\mathrm{mV}$ beträgt; damit bleibt der Strom durch die Basis-Kollektor-Diode noch vernachlässigbar klein. Der Kollektorstrom $I_{C1}$ enthält neben dem Strom der gesteuerten Quelle des Transistors auch die kapazitiven Ströme der Kollektor-Substrat-Kapazität $C_S$ und der Kollektor-Basis-Kapazität $C_C$ und nimmt deshalb auch stark negative Werte an. Da der Substrat-Strom in der Schaltungssimulation als separate Variable ausgegeben wird, kann man den Strom der Kollektor-Substrat-Kapazität $C_S$ durch eine Addition des Kollektor- und des Substrat-Stroms eliminieren und erhält damit den in Abb. 26.28 gestrichelt dargestellten Verlauf; bei der Kollektor-Basis-Kapazität $C_C$ ist dies leider nicht möglich. Dennoch erkennt man, dass die Begrenzung der Amplitude dadurch erfolgt, dass $T_1$ bei abnehmender Schwingkreisspannung $U_1$ in den Sperrbereich gerät; dadurch nimmt die Schleifenverstärkung ab. Diese Art der Begrenzung ist wünschenswert, da die Großsignalwerte für den Ein- und den Ausgangswiderstand in diesem Fall in der Regel größer sind als die entsprechenden Kleinsignalwerte und deshalb keine Reduktion der Schleifengüte erfolgt. Wir haben zur Überprüfung die Impedanz $Z_e$ am Eingang der Basisschaltung – siehe Abb. 26.27a – ermittelt:

$$
Z_e=\frac{u_e}{i_e}=
\begin{cases}
(321+j\,70)\,\Omega & \text{Kleinsignal}\\
(462+j\,60)\,\Omega & \text{Großsignal}
\end{cases}
$$

Der Quotient der Realteile entspricht genau der Kleinsignal-Schleifenverstärkung: $462/321 \approx \sqrt{2}$. Die Reduktion der Schleifenverstärkung kommt demnach dadurch zustande, dass das Verhältnis $i_e/u_e$ um den Faktor $1{,}4$ abnimmt, d.h. die Basisschaltung [unclear]
<!-- page-import:1567:end -->

<!-- page-import:1568:start -->
26.1 LC-Oszillatoren 1531

a Grundschaltung

b nach Dreieck-Stern-Umwandlung

c mit zusätzlicher Ankopplung

d reduzierte Form (Clapp-Oszillator)

**Abb. 26.29.** Kleinsignalersatzschaltbilder von Colpitts-Oszillatoren in Kollektorschaltung

nimmt am Eingang weniger Signalstrom auf und liefert deshalb am Ausgang auch weniger Signalstrom an den Schwingkreis zurück.

## 26.1.5.2 Colpitts-Oszillator in Kollektorschaltung

### 26.1.5.2.1 Schaltung

Abbildung 26.29a zeigt das Kleinsignalersatzschaltbild des *Colpitts-Oszillators in Kollektorschaltung* aus Abb. 26.23b; dabei haben wir das Ersatzschaltbild des Transistors $T_1$ nur symbolisch dargestellt und die Ausgangsimpedanz des Stromspiegels $T_2, T_3$ vernachlässigt. Durch eine Dreieck-Stern-Umwandlung mit

$$
C_{12} = C_1 + C_2 + \frac{C_1 C_2}{C_3}
,\quad
C_{13} = C_1 + C_3 + \frac{C_1 C_3}{C_2}
,\quad
C_{23} = C_2 + C_3 + \frac{C_2 C_3}{C_1}
$$

erhält man die alternative Form in Abb. 26.29b. In günstigen Fällen kann – wie beim Colpitts-Oszillator in Basisschaltung – die Kapazität $C_1$ entfallen oder die Kapazität $C_{23}$ durch einen Kurzschluss ersetzt werden.

Die Grundschaltung in Abb. 26.29a hat den Nachteil, dass die volle Schwingkreisspannung am Eingang der Kollektorschaltung anliegt; dadurch gerät die Schaltung bereits bei sehr geringen Amplituden am Schwingkreis in die Übersteuerung. Abhilfe schafft die Schaltung mit zusätzlicher Ankopplung in Abb. 26.29c. Bei dieser Schaltung wird der kapazitive Spannungsteiler aus $C_2$ und $C_3$ durch eine weitere Kapazität $C_k$ erweitert, so dass nicht nur am Ausgang, sondern auch am Eingang der Kollektorschaltung nur ein Teil der Schwingkreisspannung anliegt. Durch die vierte Kapazität erhält man einen weiteren Freiheitsgrad, der zur Optimierung des Verhaltens im eingeschwungenen Zustand – besonders [unclear]
<!-- page-import:1568:end -->

<!-- page-import:1569:start -->
1532  26. Oszillatoren

a mit Streifenleitung

b mit dielektrischem Leitungsresonator

**Abb. 26.30.** Clapp-Oszillatoren mit Leitungsresonatoren

mit Hinblick auf das Rauschen – verwendet werden kann. Bei der Dimensionierung gibt man einen Parameter vor und ermittelt die drei verbleibenden Parameter in Abhängigkeit vom vorgegebenen Parameter. Die gefundenen Dimensionierungen sind kleinsignalmäßig äquivalent, führen aber zu unterschiedlichem Verhalten im eingeschwungenen Zustand.

In der Praxis wird der zusätzliche Freiheitsgrad häufig nicht genutzt, indem man $C_1$ entfernt; damit erhält man die reduzierte Form in Abbildung 26.29d, die als *Clapp-Oszillator* bezeichnet wird. Der Definition nach erhält man einen Clapp-Oszillator aus einem Colpitts-Oszillator, indem man die Induktivität durch eine Reihenschaltung aus einer Induktivität und einer Kapazität – hier $L$ und $C_k$ – ersetzt. Das gilt auch für Colpitts-Oszillatoren in Basis- oder Emitterschaltung. Diese Definition ist aber für das Verständnis der Schaltung mit Hinblick auf die Schleifenverstärkung nicht hilfreich. Wir verwenden deshalb die Bezeichnung *verallgemeinerter Clapp-Oszillator* für alle Oszillatoren, bei denen sowohl der Eingang als auch der Ausgang des Verstärkers über einen kapazitiven Spannungsteiler mit mindestens *drei* Kapazitäten an den Schwingkreis angekoppelt ist. In diesem Sinne handelt es sich auch bei der Schaltung in Abb. 26.29c um einen verallgemeinerten Clapp-Oszillator.

Bei höheren Frequenzen wird anstelle eines LC-Schwingkreises häufig ein Leitungsresonator eingesetzt; Abb. 26.30 zeigt zwei praktische Ausführungen, bei denen wir weitere typische Merkmale berücksichtigt haben:

- Der Basisstrom des Transistors kann aufgrund der Kapazität $C_k$ nicht mehr über den Gleichstrompfad des Resonanzkreises fließen, sondern muss separat zugeführt werden; dazu dient der Basis-Spannungsteiler $R_{B1}, R_{B2}$, der hochohmig sein muss, damit die Güte des Kreises möglichst wenig reduziert wird. Bei der geringen Versorgungsspannung $U_b = 1{,}5\,\mathrm{V}$, die wir in unseren Beispielen verwenden, kann $R_{B2}$ entfallen; die Spannung an der Basis liegt dann nur geringfügig unter der Versorgungsspannung.
- Wenn der Gleichstrompfad des Resonanzkreises nicht für die Arbeitspunkteinstellung benötigt wird, verbindet man den Resonanzkreis nicht mit der positiven Versorgungsspannung, wie wir das bisher getan haben, sondern mit Masse.
- Die Auskopplung des Signals erfolgt in der Regel über einen Widerstand $R_C$ oder eine Induktivität $L_C$ am Kollektor; dadurch bleibt die Rückwirkung der nachfolgenden Schaltungsteile auf den Oszillator gering. Wenn die Versorgungsspannung ausreichend hoch ist, kann man die Rückwirkung weiter verringern, indem man den Transistor
<!-- page-import:1569:end -->

<!-- page-import:1570:start -->
26.1 LC-Oszillatoren 1533

**Abb. 26.31.**  
Clapp-Oszillator $(T_1)$ mit Kaskode-Stufe $(T_2)$

um eine Kaskode-Stufe ergänzt und das Signal am Kollektor des Kaskode-Transistors entnimmt, siehe Abb. 26.31.

Der Typ des Oszillators – Colpitts oder Clapp –, hängt von der Größe der Koppelkapazität $C_k$ ab: ist sie deutlich größer als $C_2$ und $C_3$, wirkt sie bei der Resonanzfrequenz praktisch als Kurzschluss und man erhält einen Colpitts-Oszillator; andernfalls erhält man einen Clapp-Oszillator. Ohne Kenntnis der Kapazitätswerte kann man den Typ demnach nicht bestimmen.

### 26.1.5.2.2 Berechnung

Zur näherungsweisen Berechnung gehen wir von dem in Abb. 26.32 oben gezeigten vereinfachten Kleinsignalersatzschaltbild aus, bei dem wir für den Transistor das statische Kleinsignalersatzschaltbild aus Abb. 2.39a auf Seite 79 mit $r_{BE}=\beta/S$ eingesetzt haben. Wir nehmen an, dass die Kapazitäten $C_k, C_2, C_3$ als ideale Ankopplungen mit den Teilerfaktoren

$$
n_C = 1 + \frac{C_3}{C_2} \approx \frac{u_B}{u_E}, \qquad
n_k = 1 + \frac{C_2 C_3}{C_k\,(C_2 + C_3)} \approx \frac{u_1}{u_B}
$$

wirken. Damit können wir die Elemente des Transistors auf die Schwingkreisspannung $u_1$ umrechnen und erhalten das in Abb. 26.32 unten gezeigte Ersatzschaltbild mit dem Verlustwiderstand $R_{PV}$ und der effektiven Steilheit $S_V$.

Wir berechnen zunächst den Verlustwiderstand $R_{PV}$; dazu müssen wir alle Widerstände des Transistors mit den entsprechenden Teilerfaktoren auf die Schwingkreisspannung umrechnen. Die Betonung auf alle ist wichtig, da die gesteuerten Quellen ganz oder teilweise als Widerstände wirken können. Im vorliegenden Fall tritt neben dem Basis-Emitter-Widerstand $r_{BE}$ ein Widerstand $1/S$ auf, den man erkennt, wenn man die gesteuerte Stromquelle $S u_{BE}$ unter Verwendung von $u_{BE}=u_B-u_E$ in zwei Stromquellen $S u_B$ und $S u_E$ zerlegt und berücksichtigt, dass die Stromquelle $S u_E$ von der an ihr anliegenden Spannung $u_E$ gesteuert wird, siehe Abb. 26.32.

Für $r_{BE}$ erhalten wir den Teilerfaktor

$$
\frac{u_1}{u_{BE}}
=
\frac{u_1}{u_B-u_E}
=
\frac{1}{\frac{u_B}{u_1}-\frac{u_E}{u_1}}
=
\frac{1}{\frac{1}{n_k}-\frac{1}{n_k n_C}}
=
\frac{n_k n_C}{n_C-1}
$$
<!-- page-import:1570:end -->

<!-- page-import:1571:start -->
1534  26. Oszillatoren

Abb. 26.32. Vereinfachtes Kleinsignalersatzschaltbild eines Colpitts-Oszillators in Kollektorschaltung

und für den Widerstand $1/S$:

$$
\frac{u_1}{u_E}=n_k n_C
$$

Daraus folgt für den Verlustwiderstand:

$$
R_{PV}=r_{BE}\left(\frac{n_k n_C}{n_C-1}\right)^2 \parallel \frac{n_k^2 n_C^2}{S}\frac{s r_{BE}=\beta}{}
=\frac{n_k^2 n_C^2 r_{BE}}{\beta+(n_C-1)^2}
$$

Die Stromquelle $S u_B$ wird von der Spannung $u_B=u_1/n_k$ gesteuert und liefert den auf die Schwingkreisspannung bezogenen Strom:

$$
i_a=-\frac{S u_B}{n_k n_C}=-\frac{S u_1}{n_k^2 n_C}
\Rightarrow
S_V=\frac{i_a}{u_1}=-\frac{S}{n_k^2 n_C}
$$

Daraus folgt für die Schleifenverstärkung bei der Resonanzfrequenz:

$$
LG(j\omega_R)=-S_V R_P'=-S_V(R_P \parallel R_{PV})
=\frac{\beta n_C R_P}{\left[\beta+(n_C-1)^2\right]R_P+n_k^2 n_C^2 r_{BE}}
$$
<!-- page-import:1571:end -->

<!-- page-import:1572:start -->
26.1 LC-Oszillatoren 1535

Eine einfachere Darstellung erhält man, wenn man das Verhältnis der Widerstände bildet:

$$
n_R = \frac{n_k^2 r_{BE}}{R_P}
\quad\Rightarrow\quad
LG(j\omega_R) = \frac{\beta n_C}{\beta + (n_C - 1)^2 + n_C^2 n_R}
$$

Dabei gilt:

- Die Stromverstärkung $\beta$ ist eine Konstante.
- Der Faktor $n_R$ beschreibt die effektive Größe des Transistors mit Bezug auf den Verlustwiderstand $R_P$ des Resonanzkreises. Die effektive Größe setzt sich aus der tatsächlichen Größe – ausgedrückt durch $r_{BE}$ – und dem Teilerfaktor $n_k$ der Ankopplung zusammen. Beim Colpitts-Oszillator gilt $n_k = 1$, beim Clapp-Oszillator $n_k > 1$.
- Mit dem Faktor $n_C$ wird die Schleifenverstärkung eingestellt.

Die Schleifenverstärkung wird für

$$
n_C = n_{C,max} \approx \sqrt{\frac{\beta}{n_R}}
\quad\Rightarrow\quad
LG(j\omega_R) \approx \frac{1}{2}\sqrt{\frac{\beta}{n_R}}
$$

maximal. Damit eine Schleifenverstärkung von $3\,\mathrm{dB} = \sqrt{2}$ möglich ist, muss für den Arbeitspunktstrom des Transistors

$$
I_{C,A} > \frac{8 n_k^2 U_T}{R_P} \approx n_k^2 \cdot \frac{0{,}2\,\mathrm{V}}{R_P}
$$

gelten; dabei haben wir $r_{BE} = \beta U_T / I_{C,A}$ und $U_T = 26\,\mathrm{mV}$ verwendet. Wir erhalten hier bis auf den Faktor $n_k^2$ dasselbe Ergebnis wie für den Colpitts-Oszillator in Basisschaltung, siehe (26.13) auf Seite 1528. Auch bei der Kollektorschaltung wählt man den Strom in der Praxis mindestens um den Faktor 2 größer und erhält dadurch zwei Werte für $n_C$, für die die Schleifenverstärkung den Wert $\sqrt{2}$ annimmt. Auch hier erhält man mit dem größeren Wert für $n_C$ die höhere Schleifengüte.

## 26.1.5.2.3 Dimensionierung

Zur Dimensionierung verwenden wir die Teilerfaktoren $n_C$ und $n_k$, die effektive Schwingkreiskapazität

$$
C = C_1 + \frac{C_k C_2 C_3}{C_k (C_2 + C_3) + C_2 C_3}
$$

und den Faktor $k_C = 1 - C_1/C$. Daraus folgt für die Kapazitäten:

$$
C_1 = (1 - k_C)\,C \quad,\quad
C_2 = \frac{k_C n_k n_C}{n_C - 1}\,C \quad,\quad
C_3 = k_C n_k n_C\,C \quad,\quad
C_k = \frac{k_C n_k}{n_k - 1}\,C
$$

Mit $C$ wird die Resonanzfrequenz, mit $n_C$ primär der Betrag und mit $k_C$ primär die Phase der Schleifenverstärkung eingestellt. Den Teilerfaktor $n_k$ geben wir vor. Für $n_k = 1$ gilt $C_k \rightarrow \infty$, d.h. $C_k$ wird durch einen Kurzschluss ersetzt.

Abbildung 26.33 zeigt einen Colpitts- und einen Clapp-Oszillator in Kollektorschaltung für $f_R = 100\,\mathrm{MHz}$. Man beachte, dass $R_P$ nur ein Ersatzelement für die Verluste im Schwingkreis ist und deshalb in der realen Schaltung nicht als separater Widerstand auftritt. Beim Colpitts-Oszillator in Abb. 26.33a haben wir die Induktivität $L$ wieder mit der positiven Versorgungsspannung verbunden, um den Basisstrom des Transistors einfach zuführen zu können; beim Clapp-Oszillator in Abb. 26.33b müssen wir dazu den Widerstand $R_{B1}$ verwenden. Den Arbeitspunktstrom des Clapp-Oszillators haben wir wegen [unclear]
<!-- page-import:1572:end -->

<!-- page-import:1573:start -->
1536  26. Oszillatoren

a Colpitts-Oszillator $(n_k = 1, I_{C,A} = 100\,\mu\text{A})$

b Clapp-Oszillator $(n_k = 2, I_{C,A} = 400\,\mu\text{A})$

**Abb. 26.33.** Dimensionierte Oszillatoren mit Kollektorschaltung für $f_R = 100\,\text{MHz}$

$n_k = 2$ und $I_{C,A} \sim n_k^2$ um den Faktor 4 größer gewählt. Die Schleifengüte beträgt beim Colpitts-Oszillator $Q_{LG} = 48$ und beim Clapp-Oszillator $Q_{LG} = 54$.

#### 26.1.5.2.4 Signale

Abbildung 26.34 zeigt die Signale der Schaltungen aus Abb. 26.33. Beim Clapp-Oszillator mit $n_k = 2$ hat die Schwingkreisspannung $U_1$ etwa die doppelte Amplitude; der Kollektorstrom ist etwa um den Faktor 4 größer. Wir erhalten hier nicht exakt die Faktoren $n_k = 2$ und $n_k^2 = 4$, weil wir $n_k$ ohne die Kapazitäten der Transistoren berechnet haben; der tatsächliche Wert für $n_k$ ist etwas größer.

Die Amplitude wird dadurch begrenzt, dass der Transistor bei der negativen Halbwelle der Schwingkreisspannung in den Sperrbereich gerät; dadurch nehmen die Steilheit und die Schleifenverstärkung ab. Wichtig ist in diesem Zusammenhang wieder die Feststellung, dass die Begrenzung keine Reduktion der Güte zur Folge hat.

**Abb. 26.34.** Schwingkreisspannungen (ohne Gleichanteil) und Kollektorströme für die Schaltungen aus Abb. 26.33
<!-- page-import:1573:end -->

<!-- page-import:1574:start -->
26.1 LC-Oszillatoren 1537

**Abb. 26.35.** Umwandlung des Schwingkreises zur Bereitstellung gegenphasiger Signale

##### 26.1.5.3 Colpitts-Oszillator in Emitterschaltung

Die Emitterschaltung arbeitet im Gegensatz zur Basis- und zur Kollektorschaltung als invertierender Verstärker. Eine Mitkopplung über einen Parallelschwingkreis ist deshalb nur möglich, wenn auch am Schwingkreis eine Invertierung erfolgt, d.h. gegenphasige Signale verwendet werden. Abbildung 26.35 zeigt die erforderliche Umwandlung des Schwingkreises in zwei Schritten:

- Im ersten Schritt wird der Schwingkreis gedreht und der Masseanschluss auf den Mittelabgriff des kapazitiven Spannungsteilers $C_2, C_3$ verlegt.
- Im zweiten Schritt wird der Schwingkreis als $\pi$-Glied dargestellt.

Die Spannungen $U_2$ und $U_3$ sind nun bezüglich Masse in Gegenphase.

Abbildung 26.36a zeigt den klassischen Aufbau eines Colpitts-Oszillators in Emitterschaltung. Er besteht aus einem Wechselspannungsverstärker in diskreter Schaltungstechnik – siehe Abb. 2.82 auf Seite 127, hier aber ohne Wechselspannungsgegenkopplung – und dem $\pi$-Glied $L, C_2, C_3$, das den Schwingkreis bildet. Die Kapazität $C_1$ aus Abb. 26.35 kann hier entfallen, da die Koppelkapazität $C_k$ als dritter Freiheitsgrad zur Verfügung steht: sie bildet zusammen mit der Eingangsimpedanz der Emitterschaltung einen Hochpass, der eine Kompensation der Phase in der Schleife ermöglicht. Der Kollektorwiderstand $R_C$ muss hochohmig sein oder durch eine Stromquelle ersetzt werden, damit die Güte möglichst hoch wird; auch die Auskopplung des Signals am Kollektor muss hochohmig erfolgen.

a klassische Ausführung in diskreter Schaltungstechnik

b Ausführung für geringe Versorgungsspannung

**Abb. 26.36.** Colpitts-Oszillatoren in Emitterschaltung *(Pierce-Oszillatoren)*
<!-- page-import:1574:end -->

<!-- page-import:1575:start -->
1538 26. Oszillatoren

a Ausgangsimpedanz $Z_I$ der Stromquelle  
b Ausgangswiderstand $R_I$ der Stromquelle

**Abb. 26.37.** Ausgangswiderstand der Stromquelle bei einem Colpitts-Oszillator in Emitterschaltung

Abbildung 26.36b zeigt eine Ausführung, die mit $U_{BE,A} = U_{CE,A} \approx 0{,}7\,\mathrm{V}$ arbeitet und für Versorgungsspannungen ab 1 V geeignet ist. Die Schaltung hat jedoch den Nachteil, dass die Stromquelle $I_0$ hier nicht – wie bei den bisher beschriebenen Oszillatoren – am niederohmigen Emitter-, sondern am hochohmigen Kollektoranschluss angeschlossen ist und reale Stromquellen bei hohen Frequenzen einen relativ geringen Ausgangswiderstand besitzen; dadurch kann die Schleifengüte erheblich reduziert werden. Abbildung 26.37 zeigt die Frequenzabhängigkeit des Ausgangswiderstands für eine Stromquelle mit einem einfachen Stromspiegel. Für $f < 5\,\mathrm{MHz}$ erhält man den für Stromquellen typischen hohen Ausgangswiderstand; bei höheren Frequenzen nimmt der Ausgangswiderstand jedoch schnell ab und beträgt bei $f = 100\,\mathrm{MHz}$ nur noch $R_I = 2{,}2\,\mathrm{k}\Omega$. Wenn wir für den Verlustwiderstand des Schwingkreises $R_P \approx 5\,\mathrm{k}\Omega$ annehmen und berücksichtigen, dass der Ausgangswiderstand bei einer typischen Dimensionierung mit einem sehr geringen Teilerfaktor $1 + C_2/C_3 \approx 1{,}1 \ldots 1{,}5$ an den Kreis transformiert wird, müssen wir $R_I > 20\,\mathrm{k}\Omega$ fordern, damit die Güte des Kreises nur wenig abnimmt; nach Abb. 26.37b ist dazu $f < 30\,\mathrm{MHz}$ erforderlich. Die Ausgangskapazität $C_I$ der Stromquelle wirkt sich nicht störend aus, da sie kleinsignalmäßig parallel zu $C_2$ liegt.

Colpitts-Oszillatoren in Emitterschaltung werden auch *Pierce-Oszillatoren* genannt. Aufgrund der genannten Probleme bei der Arbeitspunkteinstellung wird dieser Oszillatortyp vor allem bei Frequenzen im unteren MHz-Bereich verwendet. Vor allem Quarz-Oszillatoren werden meist als Pierce-Oszillatoren ausgeführt; dabei wird die Induktivität $L$ durch einen Quarz-Resonator ersetzt. Wir gehen darauf im Abschnitt 26.3.2 noch näher ein und verzichten deshalb hier auf ein dimensioniertes Beispiel.

## 26.1.5.4 Colpitts-Oszillator mit CMOS-Inverter

Wenn man die Emitterschaltung in Abb. 26.36 durch einen CMOS-Inverter ersetzt, erhält man den Colpitts-Oszillator mit CMOS-Inverter in Abb. 26.38, bei dem wir zusätzlich zum Inverter $T_1, T_2$ des Oszillators einen weiteren Inverter $T_3, T_4$ als Puffer ergänzt haben. Dieser Oszillator eignet sich aufgrund seines starken Phasenrauschens zwar nicht als Lokaloszillator für Sender und Empfänger, ist aber der Taktoszillator schlechthin für alle digitalen Schaltungen, bei denen das Phasenrauschen des Taktes keine Rolle spielt. Da die Frequenz von Taktsignalen im allgemeinen sehr stabil sein muss, wird anstelle der
<!-- page-import:1575:end -->

<!-- page-import:1576:start -->
26.1 LC-Oszillatoren 1539

**Abb. 26.38.**  
Colpitts-Oszillator mit CMOS-Inverter $(T_1,T_2)$  
und CMOS-Puffer $(T_3,T_4)$

Induktivität $L$ ein Quarz-Resonator eingesetzt. Wir gehen darauf im Abschnitt 26.3.2 noch näher ein.

## 26.1.5.5 Colpitts-Oszillator mit Differenzverstärker

### 26.1.5.5.1 Schaltung

In integrierten Schaltungen für Sender und Empfänger werden in den LO-Kreisen in der Regel differentielle Signale verwendet, da Mischer mit Transistoren ohnehin ein differentielles LO-Signal benötigen und deshalb auch die LO-Treiber als Differenzverstärker ausgeführt werden. Es liegt deshalb nahe, auch den Oszillator mit einem Differenzverstärker aufzubauen.

Abbildung 26.39 zeigt die typische Ausführung eines Colpitts-Oszillators mit Differenzverstärker. Es handelt sich dabei um einen symmetrisch ergänzten Colpitts-Oszillator in Emitterschaltung. Die Mitkopplung kann wie beim Colpitts-Oszillator in Basis- oder Kollektorschaltung über einfache kapazitive Spannungsteiler $2C_2, 2C_3$ erfolgen, da die bei der Emitterschaltung notwendige Invertierung hier durch die Kreuzkopplung der kapazitiven Spannungsteiler erfolgt. Die Schaltung gehört zur Klasse der Gegentakt-Oszillatoren.

Folgt man dem in Abb. 26.39 gestrichelt eingezeichneten Pfad, erkennt man, dass die kapazitiven Spannungsteiler bezüglich des Schwingkreises eine Reihenschaltung aus je zwei Kapazitäten $2C_2$ und $2C_3$ bilden; die effektive Schwingkreiskapazität entspricht deshalb auch hier der Parallelschaltung von $C_1$ und der Reihenschaltung $C_2, C_3$:

**Abb. 26.39.**  
Colpitts-Oszillator mit  
Differenzverstärker
<!-- page-import:1576:end -->

<!-- page-import:1577:start -->
1540  26. Oszillatoren

$$
C = C_1 + \frac{C_2 C_3}{C_2 + C_3}
$$

Aufgrund der Symmetrie kann man die beiden Kapazitäten $2C_3$ durch eine Kapazität $C_3$ zwischen den Basisanschlüssen der Transistoren ersetzen; dadurch reduziert sich die benötigte Fläche in einer integrierten Schaltung um den Faktor 4. Die Schwingkreisinduktivität $L$ besitzt eine Mittelanzapfung und dient als Gleichstrompfad für die Kollektorströme der Transistoren. Die beiden Teilinduktivitäten haben aufgrund der Kopplung nur den Wert $L/4$; mit der Gegeninduktivität $M = L/4$ (feste Kopplung mit Kopplungsfaktor $k = 1$) beträgt die effektive Induktivität:

$$
\frac{L}{4} + \frac{L}{4} + 2M \qquad \overset{M=L/4}{=} \qquad L
$$

Die Arbeitspunktspannungen an den Basisanschlüssen werden mit den beiden Spannungsteilern $R_{B1}, R_{B2}$ eingestellt. Bei geringen Versorgungsspannungen können die Widerstände $R_{B2}$ entfallen; die Transistoren arbeiten dann mit $U_{BE,A} \approx U_{CE,A}$ bzw. $U_{BC,A} \approx 0\,\mathrm{V}$.

##### 26.1.5.5.2 Dimensionierung

Zur Dimensionierung werden wieder die Gesamtkapazität $C$ und die Faktoren

$$
k_C = 1 - \frac{C_1}{C}, \quad n_C = 1 + \frac{C_3}{C_2}
$$

verwendet; daraus folgt für die Kapazitäten:

$$
C_1 = (1 - k_C)\,C , \quad C_2 = \frac{k_C n_C}{n_C - 1}\,C , \quad C_3 = k_C n_C C
$$

Die Phasenkorrektur kann man hier auch über die Widerstände $R_{B1}$ und $R_{B2}$ beeinflussen: mit abnehmendem Parallelwiderstand $R_{B1} \parallel R_{B2}$ nimmt die durch eine Reduktion von $k_C$ erzielbare Phasenvoreilung zu. Da die beiden Emitterschaltungen des Differenzverstärkers prinzipbedingt eine größere Phasennacheilung aufweisen als eine Basis- oder Kollektorschaltung, wird die Phasenkorrektur bei höheren Frequenzen problematisch.

Wir dimensionieren die Schaltung für $f_R = 100\,\mathrm{MHz}$, $U_b = 1{,}5\,\mathrm{V}$ und Arbeitspunktströme $I_{C1,A} = I_{C2,A} = 100\,\mu\mathrm{A}$. Aufgrund der geringen Versorgungsspannung verzichten wir auf die Widerstände $R_{B2}$ und betreiben die Transistoren mit $U_{BC,A} \approx 0\,\mathrm{V}$. Die Dimensionierung ergibt $C = 24{,}7\,\mathrm{pF}$, $k_C = 0{,}025$ und $n_C = 2{,}8$; dabei müssen wir die Widerstände $R_{B1}$ auf $1\,\mathrm{k}\Omega$ reduzieren, um eine Phasenkorrektur zu ermöglichen. Abbildung 26.40 zeigt die dimensionierte Schaltung. Wir haben hier eine alternative Darstellung verwendet, bei der man die Zusammensetzung der effektiven Schwingkreiskapazität besser, den Differenzverstärker jedoch schlechter erkennen kann. Die beiden Kapazitäten $2C_3$ aus Abb. 26.39 haben wir durch eine entsprechende Kapazität $C_3$ zwischen den Basisanschlüssen der Transistoren $T_1, T_2$ ersetzt. Die Schleifengüte beträgt $Q_{LG} = 46$.

##### 26.1.5.5.3 Signale

Die Ausgangsspannungen $U_1, U_2$ und die Kollektorströme $I_{C1}, I_{C2}$ sind ebenfalls in Abb. 26.40 dargestellt. Auch hier stellen wir zunächst wieder fest, dass die Basis-Kollektor-Dioden der Transistoren immer gesperrt bleiben und die Reduktion der Schleifenverstärkung durch eine Reduktion der effektiven Steilheiten der Transistoren erfolgt. Bei den Kollektorströmen haben wir den Kollektor-Substrat-Anteil abgezogen.
<!-- page-import:1577:end -->

<!-- page-import:1578:start -->
26.1 LC-Oszillatoren 1541

Abb. 26.40. Dimensionierter Colpitts-Oszillator mit Differenzverstärker für $f_R = 100\,\mathrm{MHz}$.
Bei den Kollektorströmen haben wir den Kollektor-Substrat-Anteil abgezogen.

## 26.1.5.6 Eigenschaften integrierter und diskreter Colpitts-Oszillatoren

Man kann alle beschriebenen Colpitts-Oszillatoren in integrierter oder diskreter Schaltungstechnik realisieren. Bei integrierten Oszillatoren muss die Induktivität des Schwingkreises in der Regel extern angeschlossen werden, da sie entweder zu groß für eine Integration ist oder die Güte einer integrierten Induktivität nicht ausreicht. Bei niedrigen Frequenzen werden auch die Kapazitäten sehr groß und können nicht mehr integriert werden.

Abbildung 26.41 zeigt das Ersatzschaltbild eines integrierten Oszillators mit externer Induktivität und typischen Werten für die parasitären Elemente des Gehäuses, des Bonddrahtes und des Bondpads. Da die externe Seite durch die Induktivität $L$ und die interne Seite durch die Kapazitäten $C_1, C_2, C_3$ dominiert wird, kann man die anderen Elemente ohne großen Fehler mit diesen Elementen zusammenfassen, d.h. alle parasitären Indukti-

externe Induktivität

Gehäuse

Bonddraht

Bondpad

integrierter Oszillator

Abb. 26.41. Ersatzschaltbild eines integrierten Oszillators mit externer Induktivität. Die Elemente der externen Induktivität und des integrierten Oszillators gelten für $f_R \approx 100\,\mathrm{MHz}$.
<!-- page-import:1578:end -->

<!-- page-import:1579:start -->
1542  26. Oszillatoren

a ohne parasitäre Elemente

b mit parasitären Elementen

c Betragsfrequenzgang des Übertragungsfaktors

Abb. 26.42. Kapazitiver Spannungsteiler eines diskret aufgebauten Colpitts-Oszillators

vitäten werden zu $L$ und alle parasitären Kapazitäten zu $C_1$ addiert. Der Serienwiderstand $R_B$ des Bonddrahtes wird mit dem Serienwiderstand $R_S$ der Induktivität zusammengefasst und in einen äquivalenten Parallelwiderstand $R_P$ umgerechnet. Daraus folgt, dass die parasitären Elemente eine Reduktion der Resonanzfrequenz und eine geringfügige Zunahme der Verluste bzw. Abnahme des Parallelwiderstands $R_P$ bewirken, das prinzipielle Verhalten aber nicht verändern, solange $L$ und $C_1,C_2,C_3$ die dominierenden Elemente bleiben. Durch die Induktivitäten $L_G$ und $L_B$ erhält man zwar zusätzliche Resonanzstellen im Bereich von $5 \dots 10\,\mathrm{GHz}$, diese werden jedoch durch die Kapazitäten des Oszillators praktisch kurzgeschlossen, so dass die Schleifenverstärkung bei diesen Frequenzen in der Regel deutlich kleiner als Eins bleibt und keine Gefahr unerwünschter Schwingungen besteht. Bei $f_R > 1\,\mathrm{GHz}$ werden die Werte für $L$ und $C_1,C_2,C_3$ so klein, dass die Resonanzfrequenz wesentlich durch die parasitären Elemente bestimmt wird. Im Grenzfall wird die externe Induktivität durch einen Kurzschluss ersetzt, so dass der Schwingkreis nur noch aus den parasitären Elementen besteht.

Das gutmütige Verhalten integrierter Oszillatoren beruht darauf, dass die integrierten Kapazitäten und Transistoren praktisch frei von parasitären Induktivitäten sind. Bei diskret aufgebauten Oszillatoren sind die Verhältnisse wesentlich ungünstiger. Hier besitzt jedes Bauteil und jede Verbindungsleitung eine parasitäre Induktivität von $1 \dots 5\,\mathrm{nH}$, was eine Vielzahl von Resonanzstellen zur Folge hat. Bei Colpitts-Oszillatoren wirkt sich dies vor allem im kapazitiven Spannungsteiler $C_2,C_3$ aus, der aufgrund der parasitären Induktivitäten ein ausgeprägtes Resonanzverhalten zeigt. Abbildung 26.42 zeigt dies am Beispiel eines Spannungsteilers mit dem Teilerfaktor:

$$
k_C = 1 + \frac{C_3}{C_2} = 1 + \frac{10}{2{,}2} = 5{,}55
\Rightarrow
\left| \frac{U_e}{U_1} \right| = \frac{1}{k_C} = 0{,}18
\qquad \text{für } f > f_U
$$

Oberhalb einer unteren Grenzfrequenz $f_U$, die hier etwa $500\,\mathrm{MHz}$ beträgt, sollte der Übertragungsfaktor etwa $0{,}18$ betragen. Berücksichtigt man jedoch die in Abb. 26.42b gezeigten parasitären Induktivitäten, erhält man einen Frequenzgang mit ausgeprägten Resonanzstellen. Wenn man SMD-Kondensatoren mit einer typischen Induktivität von $3\,\mathrm{nH}$ verwendet, wird mit zunehmender Frequenz bei etwa $900\,\mathrm{MHz}$ die Serienresonanz der größeren Kapazität $C_3$ durchlaufen, die eine starke Abnahme des Übertragungsfaktors verursacht. Bei weiter zunehmender Frequenz wird bei etwa $1{,}5\,\mathrm{GHz}$ die Serienresonanz der kleineren
<!-- page-import:1579:end -->

<!-- page-import:1580:start -->
26.1 LC-Oszillatoren 1543

a Basisschaltung  
b Kollektorschaltung  
c Emitterschaltung

**Abb. 26.43.** Hartley-Oszillatoren

Kapazität $C_2$ durchlaufen, die eine Überhöhung des Übertragungsfaktors bewirkt; dabei wird der Betrag des Übertragungsfaktors größer als Eins. Wenn man die parasitäre Induktivität der Kapazität $C_2$ erhöht, nimmt die Frequenz der Serienresonanz ab, bis der Kompensationspunkt $L_{C2}\,C_2 = L_{C3}\,C_3$ erreicht wird, an dem der Übertragungsfaktor mit Ausnahme eines kleinen Bereichs um die Resonanzfrequenz praktisch den idealen Wert annimmt. Im vorliegenden Fall kann man den Teiler kompensieren, indem man eine Induktivität mit 10 nH in Reihe zu $C_2$ vorsieht; dazu kann man z.B. eine kurze Leitung von etwa 10 mm Länge verwenden.

Bei vielen diskret aufgebauten Colpitts-Oszillatoren mit $f_R > 300\,\mathrm{MHz}$ wird der Teilerfaktor durch die Serienresonanz von $C_3$ beeinflusst und ist deshalb größer als das Kapazitätsverhältnis $k_C = 1 + C_3/C_2$. Das eigentliche Problem ist jedoch die durch die Serienresonanz von $C_2$ verursachte parasitäre Resonanzstelle in der Schleifenverstärkung, die deutlich größer sein kann als die Resonanzstelle des LC-Kreises; der Oszillator schwingt dann auf dieser parasitären Resonanzstelle. Um dies zu verhindern, muss man die parasitären Induktivitäten so klein wie möglich halten und ggf. eine Kompensation mit $L_{C2}\,C_2 = L_{C3}\,C_3$ herstellen.

Der Aufbau diskreter Colpitts-Oszillatoren mit $f_R > 300\,\mathrm{MHz}$ nach Schaltplänen aus Büchern oder Zeitschriften scheitert häufig daran, dass die Funktion stark von den verwendeten Bauteilen und vom Layout der Schaltung abhängt und beides in der Regel nicht angegeben ist.

## 26.1.5.7 Hartley-Oszillatoren

Wenn man anstelle eines kapazitiven Spannungsteilers einen induktiven Spannungsteiler einsetzt, erhält man die in Abb. 26.43 gezeigten Hartley-Oszillatoren. Die Teilinduktivitäten $L_1$ und $L_2$ können unabhängig oder gekoppelt sein. Die Koppelkapazität $C_k$ wird zur Trennungen der Arbeitspunktspannungen und als Freiheitsgrad zur Einstellung der Schleifenverstärkung benötigt.

Hartley-Oszillatoren werden nur selten verwendet, da sie zwei Induktivitäten oder eine Induktivität mit Anzapfung benötigen und der induktive Teilerfaktor $n_L = 1 + L_2/L_1$ in der Praxis nicht so flexibel variiert werden kann wie der kapazitive Teilerfaktor $n_C$ bei Colpitts-Oszillatoren. Wir gehen deshalb nicht weiter auf diese Oszillatoren ein.
<!-- page-import:1580:end -->

<!-- page-import:1581:start -->
1544  26. Oszillatoren

a mit Bipolartransistoren

b mit Mosfets

**Abb. 26.44.** Gegentaktoszillatoren mit direkter Kreuzkopplung

### 26.1.5.8 Gegentaktoszillatoren

#### 26.1.5.8.1 Schaltungen

Oszillatoren mit zwei im Gegentakt arbeitenden Transistoren werden als *Gegentaktoszillatoren* bezeichnet. Der im Abschnitt 26.1.5.5 beschriebene Colpitts-Oszillator mit Differenzverstärker gehört bereits in diese Klasse und bildet den Ausgangspunkt für die in Abb. 26.44 gezeigten Gegentaktoszillatoren mit direkter Kreuzkopplung.

Die in Abb. 26.44a gezeigten Varianten mit Bipolartransistoren erhält man, indem man die kapazitiven Spannungsteiler des Colpitts-Oszillators mit Differenzverstärker durch eine direkte Kreuzkopplung ersetzt und die Stromquelle $I_0$ wahlweise im Emitter- oder im Kollektorzweig anordnet. Aufgrund der direkten Kopplung entfallen die Basisspannungsteiler und die Transistoren arbeiten mit $U_{BE,A} = U_{CE,A}$ bzw. $U_{BC,A} = 0$.

Abbildung 26.44b zeigt zwei Ausführungen mit Mosfets. Diese Transistoren sind aufgrund ihres hohen 1/f-Rauschens nicht gut für Oszillatoren geeignet und werden deshalb nur eingesetzt, wenn die Schaltung aus Kostengründen in einem preisgünstigen CMOS-Prozess hergestellt werden soll. Bei der Ausführung mit *einer* Kreuzkopplung verwendet man p-Kanal-Mosfets, da diese ein geringeres 1/f-Rauschen aufweisen. Die bei gleicher Steilheit größeren Kapazitäten der p-Kanal-Mosfets sind bei einem Oszillator unproblematisch, da sie im Kleinsignalersatzschaltbild parallel zur Schwingkreiskapazität $C$ liegen. Die Ausführung mit zwei Kreuzkopplungen hat den Vorteil, dass die auf den Schwingkreis bezogene Steilheit $S_V$ bei gleichem Ruhestrom doppelt so groß ist; dadurch kann man den Ruhestrom halbieren, muss aber das höhere 1/f-Rauschen der n-Kanal-Mosfets in Kauf nehmen. Bei beiden Ausführungen kann man bei geringen Versorgungsspannungen und passenden Schwellenspannungen der Mosfets auf die Stromquelle verzichten und die Source-Anschlüsse der p-Kanal-Mosfets direkt mit der Versorgungsspannung verbinden. Die Schaltung mit zwei Kreuzkopplungen geht dadurch in eine Schleife mit zwei CMOS-Invertern über, wie Abb. 26.45 zeigt.

Bei allen Varianten, bei denen der Mittelabgriff der gekoppelten Induktivitäten mit der Versorgungsspannung oder mit Masse verbunden ist, kann man auch zwei unabhängige
<!-- page-import:1581:end -->

<!-- page-import:1582:start -->
26.1 LC-Oszillatoren 1545

**Abb. 26.45.**  
Gegentaktoszillator mit  
zwei CMOS-Invertern

Induktivitäten der Größe $L/2$ verwenden. Abbildung 26.46 zeigt zwei typische Ausführungen.

##### 26.1.5.8.2 Berechnung

Zur näherungsweisen Berechnung führen wir die Schaltung auf das in Abb. 26.9a auf Seite 1511 gezeigte Ersatzschaltbild zurück, indem wir die auf die Schwingkreisspannung bezogene Steilheit $S_V$ und die Widerstände $r_e$ und $r_a$ der kreuzgekoppelten Transistoren bestimmen. Abbildung 26.47 zeigt die direkte Kreuzkopplung mit Bipolartransistoren zusammen mit dem zugehörigen Kleinsignalersatzschaltbild. Bei Gegentaktaussteuerung sind die Kleinsignalspannungen und -ströme spiegelsymmetrisch:

$$
i_1 = -i_2 \Rightarrow i_0 = 0 \;,\quad u_{BE1} = -u_{BE2} = -\frac{u_1}{2}
$$

a mit Bipolartransistoren

b mit Mosfets

**Abb. 26.46.**  
Gegentaktoszillatoren mit  
unabhängigen Induktivitäten
<!-- page-import:1582:end -->

<!-- page-import:1583:start -->
1546  26. Oszillatoren

a Schaltung

b Kleinsignalersatzschaltbild mit den Betriebsbedingungen bei Gegentaktaussteuerung

**Abb. 26.47.** Direkte Kreuzkopplung mit Bipolartransistoren

Da die Eingänge der beiden Emitterschaltungen mit den Ausgängen verbunden sind, dürfen wir bei der Berechnung von $S_V$, $r_e$ und $r_a$ nur die jeweiligen Elemente des Ersatzschaltbilds berücksichtigen:

$$
S_V=\left.\frac{i_1}{u_1}\right|_{\substack{r_{BE}\to\infty\\ r_{CE}\to\infty}}
=\left.\frac{S u_{BE1}}{u_1}\right|_{\substack{r_{BE}\to\infty\\ r_{CE}\to\infty}}
\qquad u_{BE1}=-u_1/2
= -\frac{S}{2}
$$

$$
r_e=\left.\frac{u_1}{i_1}\right|_{\substack{S=0\\ r_{CE}\to\infty}}
=2\,r_{BE}
$$

$$
r_a=\left.\frac{u_1}{i_1}\right|_{\substack{S=0\\ r_{BE}\to\infty}}
=2\,r_{CE}
$$

Daraus folgt für die Schleifenverstärkung bei der Resonanzfrequenz:

$$
LG(j\omega_R)=-S_V\,(R_P\parallel r_e\parallel r_a)
$$

$$
=\frac{S R_P r_{BE} r_{CE}}{R_P\,(r_{BE}+r_{CE})+2r_{BE}r_{CE}}
\qquad \overset{r_{CE}\gg r_{BE},R_P}{\approx} \qquad
\frac{S R_P r_{BE}}{R_P+2r_{BE}}
$$

Wegen $S=I_{C,A}/U_T$ und $r_{BE}=\beta/S$ kann man die Schleifenverstärkung hier nur über die Arbeitspunktströme $I_{C1,A}=I_{C2,A}=I_{C,A}$ der Transistoren einstellen:

$$
LG(j\omega_R)=3\,\mathrm{dB}=\sqrt{2}
\Rightarrow
S\approx \frac{2\sqrt{2}\,\beta}{R_P\,(\beta-\sqrt{2})}
\qquad \overset{\beta\gg 1}{\approx} \qquad
\frac{2\sqrt{2}}{R_P}
$$

$$
\Rightarrow \qquad
I_{C,A}\approx \frac{2\sqrt{2}\,U_T}{R_P}
\qquad U_T=26\,\mathrm{mV} \qquad
\approx \frac{74\,\mathrm{mV}}{R_P}
$$

Für den Parallelschwingkreis mit $R_P=5\,\mathrm{k}\Omega$, den wir bisher in den Beispielen verwendet haben, erhält man $I_{C,A}\approx 15\,\mu\mathrm{A}$.

Da die Grenzfrequenzen von Bipolartransistoren bei kleinen Strömen gering sind und deshalb bereits bei relativ niedrigen Frequenzen eine große Phasennacheilung auftritt, die man aufgrund der fehlenden Möglichkeit zur Phasenkorrektur auch nicht kompensieren kann, kann man die direkte Kreuzkopplung mit Bipolartransistoren in der Praxis nur in
<!-- page-import:1583:end -->

<!-- page-import:1584:start -->
26.1 LC-Oszillatoren 1547

Ausnahmefällen verwenden. Prinzipiell könnte man die Steilheit durch eine Stromgegenkopplung mit Emitter-Gegenkopplungswiderständen $R_E$ reduzieren, die dann zusammen mit einer Korrekturkapazität auch eine korrekte Einstellung der Schleifenphase ermöglicht; dabei wird jedoch ein großer Gegenkopplungsfaktor $S R_E$ benötigt, der eine starke Zunahme des Rauschens verursacht, siehe Abschnitt 4.2.4.8.2 auf Seite 492. Der im Abschnitt 26.1.5.5 beschriebene Colpitts-Oszillator mit Differenzverstärker und kapazitiven Spannungsteilern ist in jedem Fall die bessere Lösung.

Wesentlich günstiger sind die Verhältnisse bei den Ausführungen mit MOS-Transistoren. Mit den Ersetzungen $r_{BE} \to \infty$ und $r_{CE} \to r_{DS}$ können wir die Ergebnisse für Bipolartransistoren unmittelbar verwenden und erhalten:

$$LG(j\omega_R)=\frac{S R_P r_{DS}}{R_P+2r_{DS}}\stackrel{!}{=}\sqrt{2}\quad\Rightarrow\quad S=\sqrt{2}\left(\frac{2}{R_P}+\frac{1}{r_{DS}}\right)$$

Aus den Gleichungen

$$(3.11)\qquad S=\sqrt{2K\,I_{D,A}},\qquad r_{DS}=\frac{U_A}{I_{D,A}}\qquad (3.12)$$

eines Mosfets und der relativen Schleifengüte

$$\frac{Q_{LG}}{Q}=\frac{R_P\parallel 2r_{DS}}{R_P}=\frac{2r_{DS}}{R_P+2r_{DS}}$$

folgt zwar, dass die Schleifengüte für $r_{DS}\to\infty$ bzw. $I_{D,A}\to 0$ maximal wird und dabei die Größe der Transistoren gegen Unendlich geht ($K\to\infty$), damit die benötigte Steilheit erzielt werden kann, dieses Maximum ist aber so breit, dass man den Arbeitspunktstrom $I_{D,A}$ ohne nennenswerten Verlust an Schleifengüte in einem weiten Bereich wählen kann. Gibt man die relative Schleifengüte $Q_{LG}/Q$ vor, folgt für $I_{D,A}$, die Steilheit $S$ und den Steilheitskoeffizienten $K$:

$$I_{D,A}=\frac{2U_A}{R_P}\left(\frac{Q}{Q_{LG}}-1\right)\qquad\qquad (26.15)$$

$$S=\frac{2\sqrt{2}}{R_P}\frac{Q}{Q_{LG}}\qquad\qquad (26.16)$$

$$K=\frac{S^2}{2I_{D,A}}=\frac{2}{U_A R_P}\frac{\left(\frac{Q}{Q_{LG}}\right)^2}{\frac{Q}{Q_{LG}}-1}\qquad\qquad (26.17)$$

*Beispiel:* Für $Q_{LG}/Q=0{,}95$ und $R_P=5\,\mathrm{k}\Omega$ erhält man selbst bei einer sehr geringen Early-Spannung von $U_A=3\,\mathrm{V}$ noch einen Arbeitspunktstrom von $I_{D,A}=63\,\mu\mathrm{A}$. Der Steilheitskoeffizient beträgt in diesem Fall $K=2{,}8\,\mathrm{mA}/\mathrm{V}^2$. Bei einem relativen Steilheitskoeffizienten von $K_p'=40\,\mu\mathrm{A}/\mathrm{V}^2$ für die p-Kanal-Mosfets in einem typischen CMOS-Prozess wird dazu ein Transistor mit $W/L=70$ benötigt, z.B. $L=0{,}5\,\mu\mathrm{m}$ und $W=35\,\mu\mathrm{m}$. Das Beispiel zeigt, dass man trotz der Forderung nach einer sehr hohen relativen Schleifengüte von 95 % der Schwingkreisgüte einen praktikablen Drainstrom und Mosfets mit sinnvollen Abmessungen erhält.
<!-- page-import:1584:end -->

<!-- page-import:1585:start -->
1548  26. Oszillatoren

$L = 1{,}2\,\mu\mathrm{m}$

$U_b = 1{,}5\,\mathrm{V}$

$U_{DS3,A} = -0{,}37\,\mathrm{V}$

$T_3$

$W = 114\,\mu\mathrm{m}$

$U_{GS3,A} = U_{GS4,A} = -1{,}18\,\mathrm{V}$

$T_4$

$W = 6\,\mu\mathrm{m}$

$U_{GS1,A} = U_{GS2,A}$
$= U_{DS1,A} = U_{DS2,A}$
$= -1{,}13\,\mathrm{V}$

$T_1$

$W = 98\,\mu\mathrm{m}$

$T_2$

$W = 98\,\mu\mathrm{m}$

$I_{D1,A} = -100\,\mu\mathrm{A}$

$I_{D2,A} = -100\,\mu\mathrm{A}$

$I_0$

$10\,\mu\mathrm{A}$

**Abb. 26.48.** Arbeitspunkt des Gegentaktoszillators

#### 26.1.5.8.3 Dimensionierung

Wir dimensionieren den Gegentaktoszillator mit p-Kanal-Mosfets und unabhängigen Induktivitäten aus Abb. 26.46b für $f_R = 100\,\mathrm{MHz}$ und verwenden Mosfets des Typs PMOS2 mit einer Kanallänge $L = 1{,}2\,\mu\mathrm{m}$. Bei dieser Kanallänge beträgt die Early-Spannung$^4$ $U_A \approx 10\,\mathrm{V}$. Der Parallelwiderstand des Schwingkreises beträgt wieder $R_P = 5\,\mathrm{k}\Omega$. Wir geben $I_{D,A} = 100\,\mu\mathrm{A}$ vor und berechnen daraus mit (26.15) den Kehrwert der relativen Schleifengüte:

$$
I_{D,A} = \frac{2U_A}{R_P}\left(\frac{Q}{Q_{LG}} - 1\right)
\qquad\Rightarrow\qquad
\frac{Q}{Q_{LG}} = 1 + \frac{I_{D,A}R_P}{2U_A} = 1{,}025
$$

Wir erreichen damit praktisch die volle Güte. Für die Steilheit und den Steilheitskoeffizienten erhalten wir aus (26.16) und (26.17) die Werte $S = 0{,}58\,\mathrm{mS}$ und $K = 1{,}68\,\mathrm{mA}/\mathrm{V}^2$. Da der relative Steilheitskoeffizient $K_p'$ aufgrund der geringen Kanallänge nicht direkt angegeben werden kann, ermitteln wir die erforderliche Kanalweite $W$ mit Hilfe einer Schaltungssimulation; dabei variieren wir $W$, bis wir die erforderliche Steilheit erhalten$^4$.

Bei Oszillatoren mit Mosfets müssen wir die Arbeitspunktspannungen und die daraus resultierenden Grenzen zwischen dem Abschnürbereich und dem ohmschen Bereich für jeden Mosfet bestimmen, um die Verhältnisse im eingeschwungenen Zustand beurteilen zu können. Abbildung 26.48 zeigt die Schaltung ohne den Schwingkreis. Aufgrund des Substrateffekts hängen die Schwellenspannungen der Mosfets von der jeweiligen Bulk-Source-Spannung ab. Da das Substrat bei p-Kanal-Mosfets mit der positiven Versorgungsspannung verbunden ist, werden die Mosfets $T_3, T_4$ des Stromspiegels mit $U_{BS} = 0\,\mathrm{V}$ und die Mosfets $T_1, T_2$ mit $U_{BS} = -U_{DS3,A} = 0{,}37\,\mathrm{V}$ betrieben. Die zugehörigen Schwellenspannungen$^4$ sind $U_{th1} = U_{th2} = -0{,}86\,\mathrm{V}$ und $U_{th3} = U_{th4} = -0{,}77\,\mathrm{V}$. Für die Abschnürspannung von $T_3$ folgt $U_{DS3,ab} = U_{GS3,A} - U_{th3} = -0{,}41\,\mathrm{V}$; $T_3$ arbeitet demnach bei $U_{DS3,A} = -0{,}37\,\mathrm{V}$ bereits leicht im ohmschen Bereich. $T_1$ und $T_2$ arbeiten im Arbeitspunkt mit $U_{DS1,ab} = U_{DS2,ab} = U_{GS1,A} - U_{th1} = -0{,}27\,\mathrm{V}$ und $U_{DS1,A} = U_{DS2,A} = -1{,}13\,\mathrm{V}$ im Abschnürbereich. Aus der Kreuzkopplung und der

$^4$ Wir verwenden dabei die Ergebnisse der Arbeitspunktanalyse, die bei PSpice in der Datei mit der Endung OUT im Abschnitt operating point information abgelegt werden. Für die Early-Spannung gilt: $U_A = |ID|/\mathrm{GDS}$. GM ist die Steilheit, VTH die Schwellenspannung.
<!-- page-import:1585:end -->

<!-- page-import:1586:start -->
26.1 LC-Oszillatoren 1549

![Abb. 26.49. Phasenkorrektur bei einem Gegentaktoszillator mit direkter Kopplung](image)

**Abb. 26.49.**  
Phasenkorrektur bei einem Gegentaktoszillator  
mit direkter Kopplung

Symmetrie folgt, dass sich die Spannungen $U_{GS1} = U_{DS2}$ und $U_{GS2} = U_{DS1}$ gegenläufig ändern. Bei einer Aussteuerung $\Delta U$ wird demnach für

$$
U_{DS1,ab} = U_{GS1,A} - \Delta U - U_{th1} = U_{DS1,A} + \Delta U
$$

$$
\Rightarrow \quad \Delta U = \frac{1}{2}(U_{GS1,A} - U_{th1} - U_{DS1,A}) \overset{U_{GS1,A}=U_{DS1,A}}{=} -\frac{U_{th1}}{2} = 0{,}43\,\mathrm{V}
$$

die Grenze zum ohmschen Bereich erreicht. Andererseits sperrt der Mosfet bei einer Aussteuerung mit:

$$
U_{GS1,A} + \Delta U > U_{th1} \quad \Rightarrow \quad \Delta U > U_{th1} - U_{GS1,A} = 0{,}27\,\mathrm{V}
$$

Wir können deshalb davon ausgehen, dass die Amplitude des Oszillators begrenzt wird, bevor der ohmsche Bereich erreicht wird; dadurch bleibt die Schleifengüte erhalten. Die allgemeine, für n- und p-Kanal-Mosfets gültige Bedingung für eine Begrenzung durch den Sperrbereich lautet:

$$
|U_{GS} - U_{th}| < \left|\frac{U_{th}}{2}\right|
$$

(26.18)

Zur Dimensionierung stehen uns hier nur zwei freie Parameter zur Verfügung: die Schwingkreiskapazität $C$ und die Kanalweite $W$ der Mosfets $T_1$ und $T_2$. Damit können wir im allgemeinen keine korrekte Einstellung der Schleifenverstärkung nach Frequenz, Betrag und Phase vornehmen. Mosfets haben jedoch in der Regel eine deutlich geringere Phasennacheilung als Bipolartransistoren, so dass man häufig auch ohne Phasenkorrektur einen akzeptablen Verlauf der Schleifenverstärkung erhält. Bei größeren Phasennacheilungen kann man die in Abb. 26.49 gezeigte Phasenkorrektur mit Sourcewiderständen $R_S$ und einer Korrekturkapazität $C_k$ verwenden.

Abbildung 26.50 zeigt die dimensionierte Schaltung. Auf eine Phasenkorrektur können wir verzichten, da die Mosfets praktisch keine Phasennacheilung verursachen. Die Schleifengüte beträgt $Q_{LG} = 77$ und liegt nur minimal unter der Güte $Q = 80$ des Schwingkreises. Damit ist die Schleifengüte zwar deutlich höher als bei dem im Abschnitt 26.1.5.5 dimensionierten Colpitts-Oszillator mit Differenzverstärker und Bipolartransistoren, der
<!-- page-import:1586:end -->

<!-- page-import:1588:start -->
26.1 LC-Oszillatoren 1551

a in Kollektorschaltung mit variablem Faktor $n_V$

b in Emitterschaltung mit $n_V = 1$

**Abb. 26.52.** Kleinsignalersatzschaltbild eines Vackar-Oszillators mit Frequenzabstimmung

rung des kapazitiven Spannungsteilers $C_2, C_3$ verwendet; dadurch haben wir den dritten Freiheitsgrad zur korrekten Einstellung der Schleifenverstärkung gewonnen. Oszillatoren mit dieser Aufteilung werden auch als Seiler-Oszillatoren bezeichnet. Wir haben diese Bezeichnung nicht verwendet, da man die Dreieck-Schaltung $C_1, C_2, C_3$ in eine äquivalente Sternschaltung umwandeln kann und dadurch einen Colpitts-Oszillator mit Serienkapazität am Eingang des Verstärkers erhält, siehe Abb. 26.24 auf Seite 1526 und das dimensionierte Beispiel in Abb. 26.27 auf Seite 1529.

### 26.1.5.9.2 Vackar-Oszillator

Der Colpitts-Oszillator mit aufgeteilter Schwingkreiskapazität bietet bereits die Möglichkeit, die Frequenz durch eine Abstimmung von $C_1$ in einem gewissen Bereich zu ändern, ohne dass sich die Schleifenverstärkung stark ändert; den dabei erzielbaren Abstimmbereich muss man im Einzelfall ermitteln. Zur Erzielung eines größeren Abstimmbereiches wird aber ein vierter Freiheitsgrad benötigt, um die Schleifenverstärkung über den ganzen Bereich hinweg möglichst korrekt einstellen zu können. Diese Möglichkeit bietet der in Abb. 26.52a gezeigte Vackar-Oszillator, bei dem die Kapazität $C_1$ nicht mit Masse – wie in Abb. 26.29c auf Seite 1531 –, sondern mit einem Abgriff der Kapazität $C_3$ verbunden ist; dazu muss $C_3$ in zwei Teilkapazitäten

$$
C_{3a} = \frac{C_3}{1 - n_V}, \qquad C_{3b} = \frac{C_3}{n_V}
$$

aufgeteilt werden. Den Faktor $n_V$ mit $0 \leq n_V \leq 1$ nennen wir Vackar-Faktor. Für $n_V = 0$ erhält man den Colpitts-Oszillator. Für $n_V = 1$ erhält man eine einseitig mit Masse verbundene Abstimmkapazität, wenn man den Oszillator in Emitterschaltung ausführt, siehe Abb.26.52b. Die Dimensionierung ist aufwendig und erfolgt in der Praxis numerisch. Die positiven Eigenschaften des Vackar-Oszillators zeigen sich auch nur, wenn der Transistor und die Arbeitspunkteinstellung innerhalb des Abstimmbereichs weitgehend frequenzunabhängig sind.

### 26.1.5.9.3 Oszillatoren mit Übertragern

Abbildung 26.53 zeigt zwei Oszillatoren, bei denen die Mitkopplung mit einem Übertrager hergestellt wird. Beim Meißner-Oszillator ist der Schwingkreis auf der Primär-, beim Armstrong-Oszillator auf der Sekundärseite des Übertragers angeordnet. Die Schleifenverstärkung wird mit dem Übersetzungsverhältnis des Übertragers, der Schwingkreiskapazität
<!-- page-import:1588:end -->

<!-- page-import:1599:start -->
1562  26. Oszillatoren

$U_b = 5\,\mathrm{V}$

$R_{B1}$  
4,7 k$\Omega$

$L_B$  
330 nH

$R_B$  
330 $\Omega$

$C_k$  
1 pF

$L_{C2}$  
7 nH

$C_2$  
2,2 pF

BFR93

$R_C$  
25 $\Omega$

$I_C = 2{,}2\,\mathrm{mA}$

$L_E$  
330 nH

1,55 V

$R_E$  
680 $\Omega$

$C_{E1}$  
10 $\mu$F

$C_{E2}$  
100 nF

2,2 V

$C_{B1}$  
10 $\mu$F

$C_{B2}$  
100 nF

$R_{B2}$  
3,9 k$\Omega$

$C_3$  
6,8 pF

**Abb. 26.64.**  
Dimensioniertes Beispiel eines Clapp-Oszillators mit keramischem Koaxialresonator für $f_R \approx 500\,\mathrm{MHz}$. Die Induktivität $L_{C2}$ wird als Leitung realisiert.

reichen jedoch oft nicht aus; deshalb muss man auch die Länge und ggf. die Bauform des Resonators als Freiheitsgrad nutzen. Aufgrund der weiteren Parallelresonanzstellen bei höheren Frequenzen und der jeweils zwischen zwei Parallelresonanzstellen liegenden Serienresonanzstellen erhält man in Verbindung mit den parasitären Elementen der Kapazitäten, Induktivitäten und des Transistors eine sehr ungünstige Schleifenverstärkung mit mehreren parasitären Resonanzstellen, die meist oberhalb der gewünschten Resonanzfrequenz liegen. Eine Dimensionierung mit Hilfe einer Schaltungssimulation ist nur sinnvoll, wenn man die HF-Ersatzschaltbilder der Bauteile verwendet und das Layout berücksichtigt. Besonders kritisch sind die Serieninduktivitäten der Kapazitäten $C_2$ und $C_3$, siehe Abschnitt 26.1.5.6 und das Beispiel in Abb. 26.42 auf Seite 1542. Da der Resonator in der Regel relativ lose angekoppelt ist – typische Werte für $C_k$ liegen bei 1 pF oder darunter –, empfiehlt es sich, zunächst die Stabilität der Schaltung ohne den Resonator und $C_k$ sicherzustellen und dafür zu sorgen, dass die Schleifenverstärkung im Bereich der vorgesehenen Oszillatorfrequenz und darüber abnimmt.

*Beispiel:* Wir dimensionieren den Clapp-Oszillator aus Abb. 26.63a für $f_R \approx 500\,\mathrm{MHz}$ und verwenden dazu einen keramischen Koaxialresonator der Bauform SP mit $Z_W =$ 6,3 $\Omega$, $\varepsilon_r$ = 90, $f_0$ = 500 MHz und $Q(f_0)$ = 300. Die Länge beträgt $l$ = 15,8 mm. Da wir bei den Kapazitäten mit einer parasitären Induktivität von 3 nH rechnen müssen, müssen wir für $C_2$ und $C_3$ Werte unter 10 pF wählen, damit die Serienresonanzen oberhalb 1 GHz liegen; dadurch wird der praktisch erzielbare Teilerfaktor auf den Bereich $k_C = 1 + C_3/C_2 \approx 2 \dots 5$ begrenzt. Wir wählen $C_3$ = 6,8 pF und $C_2$ = 2,2 pF. Für die Induktivitäten $L_B$ und $L_E$ verwenden wir SMD-Spulen mit 330 nH, deren Resonanzfrequenz bei etwa 600 MHz liegt. Als Transistor verwenden wir einen HF-Bipolartransistor des Typs BFR93, den wir mit einem Ruhestrom von etwa 2 mA betreiben. Wir wählen diesen relativ geringen Ruhestrom, um die Steilheit und die Transitfrequenz zu reduzieren; letzteres begünstigt die erforderliche Abnahme der Schleifenverstärkung oberhalb der Resonanzfrequenz.

Abbildung 26.64 zeigt das Schaltbild des Oszillators. In der Schaltungssimulation haben wir für alle Elemente die Hochfrequenz-Ersatzschaltbilder aus dem Abschnitt 23.1 verwendet; nur die Induktivität $L_{C2}$, die zusammen mit der Induktivität des Ersatzschalt-
<!-- page-import:1599:end -->

<!-- page-import:1601:start -->
1564  26. Oszillatoren

**Abb. 26.66.** Schleifenverstärkung im Bereich der Resonanzfrequenz

Abbildung 26.66 zeigt die Schleifenverstärkung im Bereich der Resonanzfrequenz. Anstelle der Bandpass-Charakteristik bei Resonanzkreisen mit direkter Kopplung ($C_k \rightarrow \infty$) erhält man bei schwach angekoppelten Resonatoren einen S-förmigen Betragsverlauf und einen positiven Ausschlag in der Phase. Die Schleifenverstärkung erreicht bei $f_R = 495{,}2\,\mathrm{MHz}$ ihr Maximum mit einer Verstärkung von 3 dB und Phase Null. Die Schleifengüte beträgt $Q_{LG} \approx 250$ und liegt damit nur wenig unter der Leerlaufgüte des Resonators.

Die Schleifenverstärkung oberhalb 500MHz hängt stark von der Kompensationsinduktivität $L_{C2}$ ab. Abbildung zeigt, dass ein zu kleiner Wert ($L_{C2} = 4\,\mathrm{nH}$) oder ein zu großer Wert ($L_{C2} = 12\,\mathrm{nH}$) unerwünschte Resonanzstellen verursacht; der Oszillator schwingt dann auf einer falschen Frequenz.

In der Praxis ist die Dimensionierung an dieser Stelle noch nicht abgeschlossen. Im nächsten Schritt wird das Platinen-Layout erstellt; dabei müssen die Leiterbahnen so ge-

**Abb. 26.67.** Abhängigkeit der Schleifenverstärkung von der Kompensationsinduktivität $L_{C2}$
<!-- page-import:1601:end -->

<!-- page-import:1621:start -->
1584  26. Oszillatoren

piezoelektrischer Kristall

aktiver Wandler

Reflektoren

Grundplatte aus Metall

**Abb. 26.87.**  
Oberflächenwellen-Resonator  
(SAW-Resonator)

a Zweipol-SAW-Resonator

b Vierpol-SAW-Resonator

**Abb. 26.88.** Schaltsymbole und Ersatzschaltbilder von SAW-Resonatoren

Beim Vierpol-SAW-Resonator tritt keine statische Kapazität parallel zum Serienschwingkreis auf; dadurch wird eine Zunahme der Schleifenverstärkung oberhalb der Resonanzfrequenz vermieden. Darüber hinaus kann man die Polarität der Schleifenverstärkung invertieren, indem man die Anschlüsse am Eingang oder am Ausgang vertauscht; dadurch ist der Resonator für Serienresonanz-Oszillatoren mit invertierendem und nichtinvertierendem Verstärker gleichermaßen geeignet.

SAW-Resonatoren gibt es für den Frequenzbereich $f_R = 200 \dots 1000\,\mathrm{MHz}$. Sie schließen damit unmittelbar an den von Oberton-Quarz-Resonatoren abgedeckten Bereich an. Die Güte liegt bei $Q \approx 10.000 \dots 30.000$. Abbildung 26.89 zeigt typische Werte.

| Frequenz [MHz] | $L_1$ [mH] | $C_1$ [fF] | $R_1$ [$\Omega$] | $C_0$ [pF] | Q | $\Delta f$ [kHz] |
|---|---:|---:|---:|---:|---:|---:|
| *Quarz-Resonatoren* |||||||
| 1 | 3.000 | 8,4 | 400 | 3,5 | 47.000 | 1,2 |
| 10 | 10 | 25,3 | 5 | 5,5 | 126.000 | 23 |
| *Keramische Resonatoren* |||||||
| 0,4 | 8 | 19.790 | 10 | 280 | 2.010 | 13,9 |
| 1 | 5 | 5.066 | 45 | 55 | 700 | 45 |
| 10 | 0,1 | 2.745 | 7 | 18 | 900 | 680 |
| 20 | 0,5 | 126 | 20 | 12 | 3.140 | 105 |
| 50 | 0,2 | 50,7 | 30 | 5,5 | 2.090 | 230 |
| *SAW-Resonatoren* |||||||
| 315 | 0,16 | 1,6 | 20 | 2,5 | 15.800 | 101 |
| 434 | 0,1 | 1,34 | 20 | 2 | 13.600 | 146 |
| 916 | 0,06 | 0,5 | 13 | 2 | 26.500 | 115 |

**Abb. 26.89.** Typische Kenndaten mechanischer Resonatoren ($\Delta f = f_P - f_S$)
<!-- page-import:1621:end -->

<!-- page-import:1641:start -->
1604  26. Oszillatoren

a  Messung von Mittel- und  
Spitzenwert

b  Beispiel für eine praktische Ausführung mit  
integrierendem Regelverstärker $(T_3,T_4)$

**Abb. 26.109.** Amplitudenmessung

und als Referenz verwenden; Abbildung 26.109a zeigt das Prinzip. Die Grenzfrequenz des RC-Glieds $R,C_1$ sollte mindestens um den Faktor 100 unter der Resonanzfrequenz liegen:

$$
f_g \;=\; \frac{1}{2\pi RC_1} \;<\; \frac{f_R}{100}
\qquad\Rightarrow\qquad
C_1 \;>\; \frac{100}{2\pi f_R R}
$$

Damit ein einfacher Vergleich des Mittel- und des Spitzenwerts möglich ist, muss eine der beiden gemessenen Spannungen so verschoben werden, dass man bei der gewünschten Amplitude eine Spannungsdifferenz von Null erhält. Abbildung 26.109b ein Beispiel für eine praktische Ausführung inklusive eines Differenzverstärkers, der als integrierender Regelverstärker arbeitet. Die Spitzenwert-Gleichrichtung erfolgt mit dem Transistor $T_1$; dadurch fließt der Ladestrom für $C_2$ über den Kollektor des Transistors und der Eingang wird nur mit dem wesentlich geringeren Basisstrom belastet. Der Mittelwert $U_0$ wird mit der Kollektorschaltung $T_2$ gepuffert und nach oben verschoben. Der Ruhestrom $I_1$ muss klein sein, damit der Basisstrom von $T_2$ den Mittelwert nicht nennenswert verfälscht. Der Differenzverstärker $T_3,T_4$ vergleicht die beiden Spannungen, die bei der gewünschten Amplitude etwa gleich sind:

$$
U_0 + \hat{u} \;\approx\; U_0 + I_1 R_1 + 0{,}6\,\mathrm{V}
\qquad\Rightarrow\qquad
\hat{u} \;\approx\; I_1 R_1 + 0{,}6\,\mathrm{V}
$$

Mit $R_1$ kann man demnach die Amplitude einstellen. Die Übertragungsfunktion

$$
H(s) \;=\; \frac{S\,R_C}{1 + 2s\,R_C C_I}
\;\overset{R_C\ \text{groß}}{\approx}\;
\frac{S}{2s\,C_I}
\qquad \text{mit } S = S_3 = S_4 = \frac{I_0}{2U_T}
$$

des Differenzverstärkers approximiert einen Integrator; dadurch entspricht die Differenz $U_{a1} - U_{a2}$ näherungsweise der integrierten Regelabweichung.

Abb. 26.110 zeigt einen Puffer-Verstärker mit Amplitudenmessung und Regelverstärker in differentieller Ausführung, der zusammen mit dem Oszillator in Abb. 26.108 eingesetzt werden kann. Das differentielle Ausgangssignal des Oszillators wird über die als Impedanzwandler arbeitenden Kollektorschaltungen $T_1, T_2$ auf einen Differenzverstärker $T_3, T_4$ mit Stromgegenkopplung $(R_E)$ geführt. An den Kollektoren von $T_3$ und $T_4$ wird das Ausgangssignal für die nachfolgenden, nicht dargestellten Komponenten entnommen. Die Transistoren $T_5, T_6$ bilden zusammen mit der Kapazität $C_2$ den Spitzenwert-Gleichrichter,
<!-- page-import:1641:end -->
