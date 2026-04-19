# Systems-Theoretic Fundamentals

<!-- page-import:1044:start -->
# Kapitel 17:
DA- und AD-Umsetzer

In neuerer Zeit geht man mehr und mehr dazu über, die Signalverarbeitung nicht analog sondern digital durchzuführen. Die Vorteile liegen in der höheren Genauigkeit und Reproduzierbarkeit sowie in der geringen Störempfindlichkeit. Nachteilig ist der höhere Schaltungsaufwand, der jedoch angesichts des zunehmenden Integrationsgrades digitaler Schaltungen immer weniger ins Gewicht fällt.

Statt kontinuierlicher Größen werden diskrete Zahlenfolgen verarbeitet. Die Bauelemente sind Speicher und Rechenwerke. Beim Übergang zur digitalen Signalverarbeitung stellen sich drei Fragen:

1) Wie lässt sich aus der kontinuierlichen Eingangsspannung eine Folge von diskreten Zahlenwerten gewinnen, ohne dabei Information zu verlieren?
2) Wie muss man diese Zahlenfolge verarbeiten, um die gewünschte Übertragungsfunktion zu erhalten?
3) Wie lassen sich die Ausgangswerte wieder in eine kontinuierliche Spannung zurückverwandeln?

Die Einbettung eines digitalen Systems zur Signalverarbeitung in eine analoge Umgebung ist in Abb. 17.1 schematisch dargestellt. Das Abtast-Halte-Glied entnimmt aus dem Eingangssignal $U_e(t)$ in den Abtastaugenblicken $t_\mu$ die Spannungen $U_e(t_\mu)$ und hält sie jeweils für ein Abtastintervall konstant. Damit bei der Abtastung keine irreparablen Fehler entstehen, muss das Eingangssignal gemäß dem Abtasttheorem auf die halbe Abtastfrequenz bandbegrenzt sein. Daher ist meist ein Tiefpass am Eingang erforderlich.

Der Analog-Digital-Umsetzer wandelt die zeitdiskrete Spannungsfolge $U_e(t_\mu)$ in eine zeit- und wertdiskrete Zahlenfolge $X(t_\mu)$ um. Bei diesen Werten handelt es sich üblicherweise um $N$-stellige Dualzahlen. Die Stellenzahl $N$ bestimmt dabei die Größe des Quantisierungsrauschens. Abbildung 17.2 zeigt einige Beispiele für gebräuchliche Abtastfrequenzen und Auflösungen.

Nach der digitalen Signalverarbeitung entsteht eine neue Zahlenfolge $y(t_\mu)$. Um sie wieder in eine Spannung zu verwandeln, verwendet man einen Digital-Analog-Umsetzer. Er liefert an seinem Ausgang eine wert- und zeitdiskrete treppenförmige Spannung. Um sie in eine kontinuierliche Spannung umzuwandeln, muss man einen Tiefpass zur Glättung nachschalten.

$U_e'(t)$  
$U_e(t)$  
$U_e(t_\mu)$  
$X(t_\mu)$  
$Y(t_\mu)$  
$U_a'(t_\mu)$  
$U_a(t)$

Tief-
pass

Abtast-
Halte-
glied

ADU

digitales
System

DAU

Tief-
pass

$N$

$N$

wertdiskret

amplitudendiskret

zeitdiskret

**Abb. 17.1.** Digitale Verarbeitung analoger Signale

© Springer-Verlag GmbH Deutschland, ein Teil von Springer Nature 2019  
U. Tietze et al., *Halbleiter-Schaltungstechnik*
<!-- page-import:1044:end -->

<!-- page-import:1045:start -->
1008  17. DA- und AD-Umsetzer

| Signal | Bandbreite $B$ | Abtastfrequenz $f_a$ | Rauschabstand $SNR$ | Auflösung $N$ |
|---|---:|---:|---:|---:|
| Temperatur | 0,1 Hz | 1 S/s | 60 dB | 12 bit |
| Telefon-Sprache | 3,5 kHz | 8 kS/s | 60 dB | 12 bit |
| Musik | 16 kHz | 44,1 kS/s | 90 dB | 16 bit |
| Fernsehen | 5 MHz | 10 MS/s | 40 dB | 8 bit |

**Abb. 17.2.** Übliche Abtastfrequenzen und Wortbreiten für die digitale Signalverarbeitung. Die Abtastfrequenz wird in S/s (Samples per second) angegeben.

## 17.1 Systemtheoretische Grundlagen

### 17.1.1 Quantisierung der Zeit

#### 17.1.1.1 Abtasttheorem

Ein kontinuierliches Eingangssignal lässt sich in eine Folge von diskreten Werten umwandeln, indem man mit Hilfe eines Abtast-Halte-Gliedes in äquidistanten Zeitpunkten $t_\mu = \mu T_a$ Proben aus dem Eingangssignal entnimmt. Dabei ist $f_a = 1/T_a$ die Abtastfrequenz. Man erkennt in Abb. 17.3, dass sich die entstehende Treppenfunktion umso weniger von dem kontinuierlichen Eingangssignal unterscheidet, je höher die Abtastfrequenz ist. Da aber der schaltungstechnische Aufwand stark mit der Abtastfrequenz wächst, ist man bemüht, sie so niedrig wie möglich zu halten. Die Frage ist nun: welches ist die niedrigste Abtastfrequenz, bei der sich das Originalsignal noch fehlerfrei, d.h. ohne Informationsverlust rekonstruieren lässt. Diese theoretische Grenze gibt das Abtasttheorem an, das wir im Folgenden erläutern wollen.

Zur mathematischen Beschreibung ist die Treppenfunktion in Abb. 17.3 nicht gut geeignet. Man ersetzt sie deshalb wie in Abb. 17.4 durch eine Folge von Dirac-Impulsen:

$$
\tilde{U}_e(t) = \sum_{\mu=0}^{\infty} U_e(t_\mu)\, T_a\, \delta(t - t_\mu)
$$

(17.1)

Ihre Impulsstärke $U_e(t_\mu)T_a$ ist dabei symbolisch durch einen Pfeil charakterisiert. Man darf sie nicht mit der Impulshöhe verwechseln; denn der Dirac-Impuls ist nach der Definition ein Impuls mit unendlicher Höhe und verschwindender Dauer, dessen Fläche jedoch einen endlichen Wert besitzt, den man als Impulsstärke bezeichnet. Diese Eigenschaft wird durch Abb. 17.5 verdeutlicht, in der der Dirac-Impuls näherungsweise durch einen Rechteckimpuls $r_\varepsilon$ dargestellt ist. Dabei gilt der Grenzübergang:

**Abb. 17.3.** Beispiel für das Eingangssignal $U_e(t)$ und die Abtastwerte $U_e(t_\mu)$

**Abb. 17.4.** Darstellung des Eingangssignals durch eine Impulsfolge
<!-- page-import:1045:end -->

<!-- page-import:1046:start -->
17.1 Systemtheoretische Grundlagen 1009

**Abb. 17.5.**  
Näherungsweise Darstellung eines Dirac-Impulses durch einen endlichen Spannungsimpuls

$$
U_e(t_\mu)\,T_a\,\delta(t-t_\mu)=\lim_{\varepsilon \to 0} U_e(t_\mu)\,r_\varepsilon(t-t_\mu)
$$

(17.2)

Um zu untersuchen, welche Informationen die in (17.1) dargestellte Impulsfolge enthält, betrachten wir ihr Spektrum. Durch Anwendung der Fourier-Transformation auf (17.1) erhalten wir:

$$
\tilde{X}(j\,f)=T_a \sum_{\mu=0}^{\infty} U_e(\mu T_a)\,e^{-2\pi j\,\mu f/f_a}
$$

(17.3)

Man erkennt, dass dieses Spektrum eine periodische Funktion ist. Ihre Periode ist gleich der Abtastfrequenz $f_a$. Durch Fourier-Reihenentwicklung dieser periodischen Funktion lässt sich nun weiter zeigen, dass das Spektrum $|\tilde{X}(j\,f)|$ im Bereich $-\frac{1}{2}f_a \leq f \leq \frac{1}{2}f_a$ identisch ist mit dem Spektrum $|X(j\,f)|$ der Originalfunktion. Es enthält also noch die volle Information, obwohl nur wenige Werte aus der Eingangsfunktion entnommen werden.

Dabei ist lediglich eine Einschränkung zu machen, die wir anhand der Abb. 17.6 erläutern wollen: Das Originalspektrum erscheint nur dann unverändert, wenn die Abtastfrequenz mindestens so hoch gewählt wird, dass sich die periodisch wiederkehrenden Spektren nicht überlappen. Das ist gemäß Abb. 17.6 gegeben, wenn das

Abtasttheorem für Tiefpass-Signale:

$$
f_a > 2\,f_{max}
$$

(17.4)

erfüllt ist; dies ist das Abtasttheorem das Nyquist und Shannon als erste aufgestellt haben. Die maximale Signalfrequenz $f_{max}=\frac{1}{2}f_a$ wird als Nyquist-Frequenz bezeichnet. Wenn sich das Spektrum des Eingangssignals nicht von der Frequenz $f=0$ bis $f_{max}$ erstreckt, sondern lediglich in einem Frequenzband mit der Bandbreite $B=f_{max}-f_{min}$, dann reicht eine niedrigere Abtastfrequenz aus:

Abtasttheorem für Bandpass-Signale:

$$
f_a > 2\,B = 2\,(f_{max}-f_{min})
$$

(17.5)

**Abb. 17.6.** Spektrum der Eingangsspannung vor dem Abtasten (oben), und nach dem Abtasten (unten)
<!-- page-import:1046:end -->

<!-- page-import:1047:start -->
1010  17. DA- und AD-Umsetzer

**Abb. 17.7.**  
Überlappung der Spektren bei zu niedriger Abtastfrequenz

**Abb. 17.8.**  
Zustandekommen der Schwebung bei zu niedriger Abtastfrequenz für $f_e \lesssim f_a$

### 17.1.1.2 Rückgewinnung des Analogsignals

Aus Abb. 17.6 lässt sich unmittelbar die Vorschrift für die Rückgewinnung des Analogsignals ablesen: Man braucht lediglich mit Hilfe eines Tiefpassfilters die Spektralanteile oberhalb $\frac{1}{2} f_a$ abzuschneiden. Dabei muss der Tiefpass so dimensioniert werden, dass die Dämpfung bei $f_{max}$ noch Null ist und bei $\frac{1}{2} f_a$ bereits unendlich.

Zusammenfassend ergibt sich die Aussage, dass man aus den Abtastwerten einer kontinuierlichen, bandbegrenzten Zeitfunktion die ursprüngliche Funktion wieder vollständig rekonstruieren kann, wenn die Voraussetzung $f_a \geq 2 f_{max}$ erfüllt ist. Dazu muss man aus den Abtastwerten eine Folge von Dirac-Impulsen erzeugen und diese in ein ideales Tiefpassfilter mit $f_g = f_{max}$ geben.

Wählt man die Abtastfrequenz niedriger als nach dem Abtasttheorem vorgeschrieben, entstehen Spektralanteile mit der Differenzfrequenz $f_a - f < f_{max}$, die vom Tiefpassfilter nicht unterdrückt werden und sich am Ausgang als Schwebung äußern (Aliasing). Abbildung 17.7 zeigt diese Verhältnisse. Man erkennt, dass die Spektralanteile des Eingangssignals oberhalb von $\frac{1}{2} f_a$ nicht einfach verloren gehen, sondern invers in das Nutzband gespiegelt werden. Die höchste Signalfrequenz $f_{emax}$ findet sich dann als die niedrigste Spiegelfrequenz $f_a - f_{emax} < \frac{1}{2} f_a$ im Basisband des Ausgangsspektrums wieder. In Abb. 17.8 sind diese Verhältnisse im Zeitbereich dargestellt für ein Eingangssignal, dessen Spektrum nur eine einzige Spektrallinie bei $f_{emax} \lesssim f_a$ besitzt. Man erkennt, wie hier eine Schwingung mit der Schwebungsfrequenz $f_a - f_{emax}$ zustande kommt.

### 17.1.1.3 Praktische Gesichtspunkte

Bei der praktischen Realisierung tritt das Problem auf, dass man mit einem realen System keine Dirac-Impulse erzeugen kann. Man muss die Impulse also gemäß Abb. 17.5 näherungsweise mit endlicher Amplitude und endlicher Dauer erzeugen, d.h. auf den Grenzübergang in (17.2) verzichten. Durch Einsetzen von (17.2) in (17.1) erhalten wir mit endlichem $\varepsilon$ die angenäherte Impulsfolge:

$$
\tilde{U}'_e(t) = \sum_{\mu=0}^{\infty} U_e(t_\mu)\, r_\varepsilon(t - t_\mu)
\qquad\qquad (17.6)
$$

Durch Fourier-Transformation erhalten wir das Spektrum:

$$
\tilde{X}'(jf) = \frac{\sin \pi \varepsilon T_a f}{\pi \varepsilon T_a f}\,\tilde{X}(jf)
\qquad\qquad (17.7)
$$
<!-- page-import:1047:end -->

<!-- page-import:1048:start -->
## 17.1 Systemtheoretische Grundlagen

1011

Abb. 17.9. Übergang vom Spektrum der Dirac-Folge zum Spektrum der Treppenfunktion durch die Gewichtsfunktion $|(\sin \pi f/f_a)/(\pi f/f_a)|$

Das ist dasselbe Spektrum wie bei Dirac-Impulsen, jedoch mit einer überlagerten Gewichtsfunktion, die dazu führt, dass höhere Frequenzen abgeschwächt werden. Besonders interessant ist der Fall der Treppenfunktion. Bei ihr ist die Impulsbreite $\varepsilon T_a$ gleich der Abtastdauer $T_a$. Dafür ergibt sich das Spektrum:

$$
\tilde{X}'(jf) \;=\; \frac{\sin(\pi f/f_a)}{\pi f/f_a}\,\tilde{X}(jf)
$$

(17.8)

Der Betrag der Gewichtsfunktion ist in Abb. 17.9 über dem symbolischen Spektrum der Dirac-Impulse aufgezeichnet. Bei der halben Abtastfrequenz tritt eine Abschwächung mit dem Faktor 0,64 auf.

Wie man bei der Wahl der Abtastfrequenz und der Eingangs- bzw. Ausgangsfilter vorgehen kann, soll an dem Beispiel in Abb. 17.10 erklärt werden. Angenommen sei ein Eingangsspektrum eines Musiksignals im Bereich $0 \leq f \leq f_{max} = 16\,\mathrm{kHz}$, das abgetastet und unverfälscht rekonstruiert werden soll. Dabei ist es unerheblich, ob 16kHz-Komponenten auch tatsächlich mit voller Amplitude auftreten; der lineare Frequenzgang soll vielmehr andeuten, dass in diesem Bereich eine konstante Verstärkung gefordert wird.

Selbst wenn man sicher ist, dass keine Töne über 16kHz auftreten, so bedeutet dies nicht automatisch, dass das Spektrum am Eingang des Abtasters auf 16kHz beschränkt ist. Eine breitbandige Störquelle ist z.B. das Verstärkerrauschen. Aus diesem Grund ist es immer angebracht, den in Abb. 17.1 eingezeichneten Eingangstiefpass vorzusehen. Er soll das Eingangsspektrum auf die halbe Abtastfrequenz begrenzen, um Aliasing zu verhindern. Seine Grenzfrequenz muss mindestens $f_{max}$ betragen, um das Eingangssignal nicht zu beschneiden. Andererseits ist es wünschenswert, dass er bei einer nur wenig höheren Frequenz vollständig sperrt, um einen möglichst niedrigen Wert für die Abtastfrequenz verwenden zu können. Mit der Abtastfrequenz steigt nämlich der Aufwand in den AD- bzw. DA-Umsetzern und im digitalen Filter. Andererseits steigt der Aufwand für den Tiefpass mit zunehmender Filtersteilheit und Sperrdämpfung. Deshalb ist immer ein Kompromiss zwischen dem Aufwand in den Tiefpassfiltern einerseits und den Umsetzern und dem digitalen Filter andererseits zu finden. In dem Beispiel mit $f_{max} = 16\,\mathrm{kHz}$ kann man beispielsweise $\frac{1}{2}f_a = 22\,\mathrm{kS/s}$ wählen, also eine Abtastfrequenz von $f_a = 44\,\mathrm{kS/s}$ verwenden.

Das bandbegrenzte Eingangssignal wird durch die Abtastung, wie man in Abb. 17.10 erkennt, zu $f_a$ periodisch fortgesetzt. Deshalb muss nach der DA-Umsetzung das Basisband $0 \leq f \leq \frac{1}{2}f_a$ wieder herausgefiltert werden. Da man am Ausgang des DA-Umsetzers eine Treppenfunktion erhält, muss man noch zusätzlich die $\sin x/x$-Bewertung nach (17.8) berücksichtigen.
<!-- page-import:1048:end -->

<!-- page-import:1050:start -->
17.1 Systemtheoretische Grundlage 1013

**Abb. 17.11.** Zustandekommen des Quantisierungsrauschens. Die Spannung $U_a(Z)$ ergibt sich durch DA-Umsetzung der Zahl $Z$, die am Ausgang des AD-Umsetzers auftritt.

steigt natürlich der Aufwand für die AD- und DA-Umsetzer. Man kann jedoch die Abtastfrequenz mit einem digitalen Tiefpass hinter dem AD-Umsetzer wieder auf den nach dem Abtasttheorem erforderlichen Wert reduzieren. Dadurch vermeidet man eine Erhöhung der Datenrate bei der Übertragung bzw. Speicherung der Daten. Vor der DA-Umsetzung berechnet man mit einem Interpolator wieder Zwischenwerte, um auch dort durch Überabtastung mit einem einfachen Ausgangstiefpass auskommen zu können.

## 17.1.2 Quantisierung der Amplitude

Bei der Umsetzung einer analogen Größe in eine Zahl mit endlich vielen Bits entsteht infolge der begrenzten Auflösung ein systematischer Fehler, der als Quantisierungsfehler bezeichnet wird. Er beträgt, wie man in Abb. 17.11 erkennt, $\pm \frac{1}{2} U_{LSB}$ d.h. er ist so groß wie die halbe Eingangsspannungsänderung, die erforderlich ist, um die Zahl in der niedrigsten Stelle zu ändern.

Wenn man die erzeugte Zahlenfolge mit einem DA-Umsetzer in eine Spannung zurückverwandelt, äußert sich der Quantisierungsfehler als überlagertes Rauschen. Sein Effektivwert beträgt:

$$
U_{r\,eff} = \frac{U_{LSB}}{\sqrt{12}}
$$

(17.9)

Bei sinusförmiger Vollaussteuerung beträgt der Effektivwert der Signalspannung bei einem $N$-bit-Umsetzer:

$$
U_{s\,eff} = \frac{1}{\sqrt{2}} \cdot \frac{1}{2} \cdot 2^N \cdot U_{LSB}
$$

(17.10)

Daraus erhalten wir den *Signal-Rausch-Abstand (signal-to-noise ratio)*:

$$
SNR = \frac{U_{s\,eff}}{U_{r\,eff}} = \sqrt{1{,}5}\cdot 2^N \approx 2^N = n
$$

(17.11)

Er wird in der Praxis normalerweise in Dezibel, d.h. logarithmisch, angegeben; mit

$$
\lg x = \log_{10} x \quad,\quad \mathrm{ld}\ x = \log_2 x \quad,\quad \lg x = \lg 2 \cdot \mathrm{ld}\ x
$$
<!-- page-import:1050:end -->

<!-- page-import:1051:start -->
1014  17. DA- und AD-Umsetzer

gilt:

$$
SNR_{dB} = 20\,\mathrm{dB}\,\lg SNR = 6\,\mathrm{dB}\,\mathrm{ld}\,SNR
$$

$$
= N \cdot 6\,\mathrm{dB} + 1{,}8\,\mathrm{dB}
$$

$$
\approx N \cdot 6\,\mathrm{dB}
$$

(17.12)

Man kann diese Beziehungen aber auch dazu verwenden, aus dem gemessenen $SNR$ die effektive Auflösung eines AD-Umsetzers zu berechnen:

$$
N = \frac{SNR_{dB}}{6\,\mathrm{dB}}
\qquad \text{oder} \qquad
n = 2^N = \frac{U_{s\,eff}}{U_{r\,eff}}
$$

(17.13)

## 17.1.3 Spannungseinheit

Wenn man eine Spannung digital anzeigen oder verarbeiten möchte, muss man sie in eine entsprechende Zahl übersetzen. Diese Aufgabe erfüllt ein Analog-Digital-Umsetzer, ADU, (Analog to Digital Converter, ADC). Dabei soll die Zahl $Z$ in der Regel proportional zur Eingangsspannung $U_e$ sein:

$$
Z = \frac{U_e}{U_{LSB}}
$$

Darin ist $U_{LSB}$ die Spannungseinheit für das niedrigste Bit (Least Significant Bit, LSB), also die zu $Z = 1$ gehörige Spannung. Zur Rückverwandlung einer Zahl in eine Spannung verwendet man Digital-Analog-Umsetzer, DAU, (Digital to Analog Converter, DAC). Seine Ausgangsspannung ist proportional zur eingegebenen Zahl gemäß:

$$
U_a = U_{LSB} Z
$$

## 17.2 Digital-Analog Umsetzung

### 17.2.1 Grundprinzipien der DA-Umsetzung

Die Aufgabe eines Digital-Analog-Umsetzers, DAU, besteht darin, eine Zahl in eine dazu proportionale Spannung umzuwandeln. Man kann dabei drei prinzipiell verschiedene Verfahren unterscheiden:

- das Parallelverfahren
- das Wägeverfahren
- das Zählverfahren

Die Arbeitsweise dieser drei Verfahren ist in Abb. 17.12 schematisch dargestellt. Beim Parallelverfahren werden mit einem Spannungsteiler alle möglichen Ausgangsspannungen bereitgestellt. Mit einem 1-aus-$n$-Decoder wird dann derjenige Schalter geschlossen, dem die gewünschte Ausgangsspannung zugeordnet ist. Beim Wägeverfahren ist jedem Bit ein Schalter zugeordnet. Über entsprechend gewichtete Widerstände wird dann die Ausgangsspannung aufsummiert. Das Zählverfahren erfordert nur einen einzigen Schalter. Er wird periodisch geöffnet und geschlossen. Sein Tastverhältnis wird mit Hilfe eines Pulsbreitenmodulators so eingestellt, dass der arithmetische Mittelwert der Ausgangsspannung den gewünschten Wert annimmt.

Der Vergleich der drei Verfahren zeigt, dass das Parallelverfahren $Z_{max} = 2^N$ Schalter erfordert, das Wägeverfahren $\mathrm{ld}\,Z_{max} = N$ Schalter und das Zählverfahren nur einen einzigen. Wegen der großen Zahl von Schaltern wird das Parallelverfahren nur selten eingesetzt.
<!-- page-import:1051:end -->
