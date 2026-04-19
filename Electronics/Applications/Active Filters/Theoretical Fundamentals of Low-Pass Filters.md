# Theoretical Fundamentals of Low-Pass Filters

<!-- page-import:0826:start -->
# Kapitel 12:
Aktive Filter

Es gibt Filter mit ganz unterschiedlichen Eigenschaften. Die wichtigsten sind in Abb. 12.1 gegenübergestellt. Ein Tiefpassfilter lässt tiefe Frequenzen durch und dämpft hohe. Bei einem Hochpassfilter ist es genau umgekehrt. Ein Bandpass lässt nur Frequenzen in der Nähe der Resonanzfrequenz durch und dämpft tiefe und hohe Frequenzen. Eine Bandsperre dämpft nur Frequenzen in der Nähe der Resonanzfrequenz.

## 12.1 Theoretische Grundlagen von Tiefpassfiltern

### 12.1.1 Passive Tiefpässe 1. Ordnung

Das einfachste Tiefpassfilter ist der Tiefpass 1. Ordnung mit der Schaltung in Abb. 12.2. Seine Eigenschaften im Frequenz- und Zeitbereich sind besonders einfach zu verstehen und zu berechnen; deshalb sollen sie hier ausführlich behandelt werden. Bei den Filtern höherer Ordnung werden danach dieselben Methoden zur Berechnung verwendet.

#### 12.1.1.1 Beschreibung im Frequenzbereich

Die Übertragungsfunktion der Schaltung erhält man am einfachsten mit komplexer Rechnung, wenn man sie als Spannungsteiler betrachtet:

$$
A(s)=\frac{U_a(s)}{U_e(s)}=\frac{1/s\,C}{R+1/s\,C}=\frac{1}{1+s\,RC}
$$

(12.1)

Um daraus die interessierenden Größen zu berechnen, muss man $s=j\omega$ setzen. Für den Tiefpass 1. Ordnung erhält man dann

$$
A(j\omega)=\frac{U_a(j\omega)}{U_e(j\omega)}=\frac{1}{1+j\omega\,RC}
$$

(12.2)

**Abb. 12.1.** Vergleich verschiedener Filter in 2. Ordnung. Bode-Diagramme für die Verstärkung. Normierung auf die Grenz- bzw. Resonanzfrequenz. Hier eingezeichnete Filtertypen: Tiefpass, Hochpass: Butterworth; Bandpass, Bandsperre: Güte = 1

© Springer-Verlag GmbH Deutschland, ein Teil von Springer Nature 2019  
U. Tietze et al., *Halbleiter-Schaltungstechnik*
<!-- page-import:0826:end -->

<!-- page-import:0827:start -->
790 12. Aktive Filter

Damit lässt sich der Betrag der Verstärkung berechnen als Betrag eines komplexen Bruchs. Aus

$$
A(j\omega)=\frac{\operatorname{Re}(Z)+j\,\operatorname{Im}(Z)}{\operatorname{Re}(N)+j\,\operatorname{Im}(N)}
\qquad \text{folgt} \qquad
|A|^2=\frac{\operatorname{Re}(Z)^2+\operatorname{Im}(Z)^2}{\operatorname{Re}(N)^2+\operatorname{Im}(N)^2}
$$

(12.3)

Daraus ergibt sich hier der Betrag der Verstärkung. Allerdings gibt man meist das Betragsquadrat an, um eine Wurzel zu umgehen:

$$
|A|^2=\frac{1}{\operatorname{Re}(N)^2+\operatorname{Im}(N)^2}
=\frac{1}{1+\omega^2R^2C^2}
$$

Aus der Definition der Grenzfrequenz:

$$
|A|^2=\frac{|U_a|^2}{|U_e|^2}
=\frac{1}{1+\omega_g^2R^2C^2}
\stackrel{!}{=}\frac{1}{2}
$$

(12.4)

erhält man die Grenzfrequenz:

$$
\omega_g=2\pi f_g=\frac{1}{RC}=\frac{1}{\tau}
\quad \Rightarrow \quad
f_g=\frac{1}{2\pi\,RC}=\frac{1}{2\pi\,\tau}
$$

(12.5)

Um von der speziellen Grenzfrequenz unabhängig zu werden, ist es zweckmäßig, die Frequenzvariablen auf die Grenzfrequenz zu normieren; deshalb definieren wir:

$$
\omega_n=\frac{\omega}{\omega_g}=\frac{f}{f_g}
\qquad \Rightarrow \qquad
s_n=\frac{s}{\omega_g}=j\,\frac{\omega}{\omega_g}=j\,\frac{f}{f_g}=j\,\omega_n
$$

(12.6)

Dabei ist $\omega_n$ eine dimensionslose Größe, die bei der Grenzfrequenz $\omega_n=1$ ist. Damit lässt sich die Verstärkung in einer besonders einfachen Form angeben:

$$
A(j\omega_n)=\frac{1}{1+j\omega_n}, \qquad
A(s_n)=\frac{1}{1+s_n}
\qquad \text{und} \qquad
|A|^2=\frac{1}{1+\omega_n^2}
$$

(12.7)

Aus der Übertragungsfunktion lässt sich auch die Phasenverschiebung berechnen:

$$
A(j\omega)=\frac{\operatorname{Re}(Z)+j\,\operatorname{Im}(Z)}{\operatorname{Re}(N)+j\,\operatorname{Im}(N)}
\qquad \text{folgt} \qquad
\varphi=\arctan\frac{\operatorname{Im}(Z)}{\operatorname{Re}(Z)}-\arctan\frac{\operatorname{Im}(N)}{\operatorname{Re}(N)}
$$

(12.8)

Hier geht man am besten von der Darstellung in (12.7) aus, in der man Real- und Imaginärteil erkennt. Da der Zähler keinen Imaginärteil besitzt, liefert er keinen Beitrag zur Phasenverschiebung:

$$
\varphi=-\arctan\frac{\operatorname{Im}(N)}{\operatorname{Re}(N)}=-\arctan\omega_n
$$

Zur Beurteilung der Signalverzögerung gibt man die Gruppenlaufzeit an:

$$
t_{gr}=-\frac{d\varphi}{d\omega}
=-\frac{d\omega_n}{d\omega}\cdot\frac{d\varphi}{d\omega_n}
=-\frac{1}{\omega_g}\cdot\frac{d\varphi}{d\omega_n}
$$

(12.9)
<!-- page-import:0827:end -->

<!-- page-import:0828:start -->
12.1 Theoretische Grundlagen von Tiefpassfiltern 791

Schaltung

$$
A=\frac{1}{1+sRC}=\frac{1}{1+s_n}
$$

Verstärkung

$$
|A|^2=\frac{1}{1+\omega_n^2}
$$

Phasenverschiebung

$$
\varphi=-\arctan \omega_n
$$

Gruppenlaufzeit

$$
T_{gr}=\frac{1}{1+\omega_n^2}
$$

Pol

$$
s_n=s/\omega_g=-1
$$

**Abb. 12.2.** Tiefpass 1. Ordnung im Frequenzbereich
<!-- page-import:0828:end -->

<!-- page-import:0829:start -->
792 12. Aktive Filter

Mit der Regel für das Differenzieren des Arcustangens

$$\frac{\mathrm{d}}{\mathrm{d}x}\arctan x = \frac{1}{1+x^2} \qquad \text{folgt} \qquad t_{gr} = \frac{1}{\omega_g}\cdot\frac{1}{1+\omega_n^2}$$

Es ist üblich, die Gruppenlaufzeit auf die Grenzkreisfrequenz zu normieren:

$$T_{gr} = t_{gr}\,\omega_g = -\frac{\mathrm{d}\varphi}{\mathrm{d}\omega_n}$$

(12.10)

Damit ergibt sich hier:

$$T_{gr} = t_{gr}\,\omega_g = \frac{1}{1+\omega_n^2}$$

Man erhält denselben Ausdruck wie der für den Betrag der Verstärkung in (12.7). Dass der Verlauf in Abb. 12.2 anders aussieht liegt daran, dass der Betrag - wie immer beim Bode-Diagramm - doppelt logarithmisch dargestellt ist. Eine weitere Verständnisschwierigkeit besteht darin, dass die Gruppenlaufzeit, die als Steigung der Phasenverschiebung definiert ist, bei niedrigen Frequenzen am größten ist, obwohl die Phasenverschiebung fast horizontal verläuft. Der Grund besteht in der logarithmischen Frequenzachse; bei linearer Frequenzachse ist die Steigung der Phasenverschiebung bei niedrigen Frequenzen tatsächlich am größten.

Bei Filtern ist es auch gebräuchlich, die Pole - und gegebenenfalls auch die Nullstellen - der Übertragungsfunktion $A(s)$ in der s-Ebene darzustellen. Für einen Tiefpass 1. Ordnung ist das trivial. Abbildung 12.2 zeigt diesen Pol. Der Nenner der Übertragungsfunktion wird Null für:

$$1+s_n=0 \qquad \Rightarrow \qquad s_n=s/\omega_g=-1$$

#### 12.1.1.2 Beschreibung im Zeitbereich

Zur Beschreibung eine Filters im Zeitbereich stellt man die Differentialgleichung auf. Man erhält sie aus der Übertragungsfunktion durch eine Laplace-Rücktransformation. Aus

$$\underline{U_a(s)}\,(1+s\,RC)=\underline{U_e(s)}$$

folgt:

$$u_a(t)+RC\,\frac{\mathrm{d}u_a}{\mathrm{d}t}=u_e(t)$$

(12.11)

Mit der Anfangsbedingung $u_a(t=0)=0$ erhält man die Lösung:

$$u_a(t)=U_e\left(1-e^{-t/RC}\right)=U_e\left(1-e^{-t/\tau}\right)$$

(12.12)

Darin ist $U_e$ die Eingangsspannung nach dem Sprung. Der Verlauf ist in Abb. 12.3 aufgezeichnet. Man erkennt, dass der stationäre Wert $u_a(t\rightarrow\infty)=U_e$ nur asymptotisch erreicht wird. Für

$$u_a(t=\tau)=U_e\left(1-\frac{1}{e}\right)=0{,}63\,U_e$$

beträgt die Abweichung vom stationären Wert noch 37% der Sprunghöhe. Die Einstellzeit für kleinere Abweichungen lässt sich ebenfalls aus (12.12) berechnen. In Abb. 12.4 sind einige wichtige Werte zusammengestellt.
<!-- page-import:0829:end -->

<!-- page-import:0830:start -->
12.1 Theoretische Grundlagen von Tiefpassfiltern 793

Abb. 12.3.  
Sprungantwort eines Tiefpasses

$$\frac{u_a(t)}{U_e}=\left(1-e^{-t/\tau}\right)$$

| Einstellgenauigkeit | 37% | 10% | 1% | 0,1% |
|---|---:|---:|---:|---:|
| Einstellzeit $t/\tau$ | 1 | 2,3 | 4,6 | 6,9 |
| Einstellzeit $t/T_g$ | 0,16 | 0,37 | 0,73 | 1 |

Abb. 12.4.  
Einstellzeit eines Tiefpasses

Zur Beschreibung von Filtern im Zeitbereich ist es zweckmäßig, auch die Zeitachse zu normieren. Dabei wählt man die Schwingungsdauer, die zur Grenzfrequenz gehört:

$$t_n=\frac{t}{T_g}=t\,f_g$$

(12.13)

Für den Tiefpass 1. Ordnung lautet der Zusammenhang: $T_g=1/f_g=2\pi\tau=6{,}28\,\tau$.

Für Frequenzen, die hoch gegenüber der Grenzfrequenz sind, arbeitet der Tiefpass als Integrierglied. Diese Eigenschaft lässt sich unmittelbar aus der Differentialgleichung (12.11) ablesen: Mit der Voraussetzung $|u_a(t)|\ll|u_e(t)|$ folgt $RC\,\mathrm{d}u_a/\mathrm{d}t=U_e$.

Für Wechselspannungen mit überlagertem Gleichspannungsanteil ist die oben gemachte Voraussetzung $f\gg f_g$ in keinem Fall erfüllt. Zerlegt man die Eingangsspannung aber in einen Gleich- und Wechselspannungsanteil

$$u_e(t)=U_e+u'_e(t)$$

lassen sich beide Teile getrennt integrieren:

$$u_a=\frac{1}{RC}\int_0^t u'_e(\tilde{t})\,d\tilde{t}+\overline{U}_e$$

Restwelligkeit  Mittelwert

(12.14)

Abb. 12.5.  
Rechteckverhalten eines Tiefpasses für verschiedene Grenzfrequenzen

- - - - - $u_e(t)$  
_____ $u_a(t)$
<!-- page-import:0830:end -->

<!-- page-import:0831:start -->
794  12. Aktive Filter

*Abb. 12.6.*  
Anstiegszeit eines Tiefpasses

$t_a = \tau \ln 9 \approx 2{,}2\,\tau$

Macht man die Grenzfrequenz niedriger gegenüber der Signalfrequenz, nimmt die Restwelligkeit ab, wie man in Abb. 12.5 erkennt, und der Mittelwert bleibt übrig:

$$u_a(t) \approx \bar{U}_e$$

Eine weitere Kenngröße zur Charakterisierung von Tiefpässen ist die Anstiegszeit $t_a$. Sie gibt an, in welcher Zeit die Ausgangsspannung von 10 auf 90% des Endwerts ansteigt, wenn man einen Sprung an den Eingang legt, wie in Abb. 12.6 sieht. Zur Berechnung der Anstiegszeit erhält man aus der e-Funktion in (12.12):

$$t_a = t_{90\%} - t_{10\%} = \tau (\ln 0{,}9 - \ln 0{,}1) = \tau \ln 9 \approx 2{,}2\,\tau$$

Mit $f_g = 1/2\pi\tau$ folgt daraus:

$$t_a \approx \frac{1}{3f_g}$$

(12.15)

## 12.1.2 Vergleich von Tiefpassfiltern

Hier sollen die Eigenschaften der gebräuchlichsten Tiefpassfilter gegenüber gestellt werden, bevor die Berechnung der Filterkoeffizienten und die schaltungstechnische Realisierung in den späteren Kapiteln folgt.

Die Übertragungsfunktion eines Tiefpasses hat allgemein die Form:

$$A(s_n) = \frac{A_0}{1 + c_1 s_n + c_2 s_n^2 + \ldots + c_N s_n^N}$$

(12.16)

Darin sind $c_1, c_2 \ldots c_n$ positive reelle Koeffizienten. Die Ordnung des Filters $N$ ist gleich der höchsten Potenz von $s_n$. Für die Realisierung der Filter ist es günstig, das Nennerpolynom in Faktoren zu zerlegen, weil sich das Filter dann mit getrennten Teilfiltern realisieren lässt. Die Faktorisierung des Nenners soll an einem Filter 2. Ordnung als Beispiel beschrieben werden. Dazu berechnet man die Pole der Übertragungsfunktion, also die Nullstellen des Nenners.

$$A(s_n) = A_0 \cdot \frac{1}{1 + a s_n + b s_n^2} = A_0 \cdot \frac{1}{(s_n - s_{n1})(s_n - s_{n2})}$$

(12.17)

Die Lösungen der quadratischen Gleichung $1 + a s_n + b s_n^2 = 0$ sind:

$$s_{n1,2} = -\frac{a}{2b} \pm \frac{1}{2b}\sqrt{a^2 - 4b}$$

(12.18)
<!-- page-import:0831:end -->

<!-- page-import:0832:start -->
12.1 Theoretische Grundlagen von Tiefpassfiltern 795

**Abb. 12.7.**  
Verschiebung der Pole in der komplexen  
$s_n$-Ebene mit zunehmender Güte

Wenn man eine Polgüte $Q = \sqrt{b}/a$ definiert, die beim Bandpass (12.49) auf Seite 827 noch eine anschauliche Bedeutung bekommt, folgt daraus

$$
s_{n\,1.2} = -\frac{a}{2b} \pm \frac{a}{2b}\sqrt{1-4Q^2}
= -\frac{a}{2b} \pm j\,\frac{a}{2b}\sqrt{4Q^2-1}
= \sigma_n + j\,\omega_n
\qquad (12.19)
$$

Darin ist $\sigma_n$ die Dämpfung und $\omega_n$ die Eigenfrequenz des Pols. Wie die Pole der Übertragungsfunktion geartet sind, hängt von der Güte ab:

- $Q < \frac{1}{2}$: Es gibt 2 reelle Pole
- $Q = \frac{1}{2}$: Es gibt 2 zusammenfallende reelle Pole
- $Q > \frac{1}{2}$: Es gibt 2 konjugiert komplexe Pole

Bei $Q = \infty$ ergibt sich eine ungedämpfte Schwingung; die Anordnung wird also zum Oszillator. Dieser Fall ist bei Filtern also unerwünscht. Die verschiedenen Fälle sind in Abb. 12.7 veranschaulicht. Realisieren lassen sich nur Filter mit reellen Koeffizienten. Deshalb zerlegt man die Übertragungsfunktionen, bei denen die Güte der Teilfilter $Q > 0{,}5$ ist, nicht in Blöcke erster sondern zweiter Ordnung:

$$
\underline{A}(s_n) = A_0 \cdot \frac{1}{1+a_1s_n+b_1s_n^2}\cdot\frac{1}{1+a_2s_n+b_2s_n^2}\cdot\ldots
\qquad (12.20)
$$

Darin sind $a_i$ und $b_i$ positive reelle Koeffizienten. Bei ungerader Ordnung $N$ ist der Koeffizient $b_1 = 0$. Es ist gleichgültig, welchem Teilfilter man die Verstärkung $A_0$ zuordnet. Bei der Realisierung mit aktiven Filtern wird die Verstärkung $A_0$ auf die Filterstufen verteilt. Dabei strebt man eine gleichmäßige Aussteuerung an. Eine Möglichkeit, Teilfilter 2. Ordnung mit einer Polgüte $Q > 0{,}5$ zu realisieren, besteht in der Verwendung von $LRC$-Schaltungen. Im Hochfrequenzbereich macht die Realisierung der benötigten Induktivitäten meist keine Schwierigkeiten. Im Niederfrequenzbereich werden jedoch meist große Induktivitäten notwendig, die unhandlich sind und schlechte elektrische Eigenschaften besitzen. Die Verwendung von Induktivitäten lässt sich im Niederfrequenzbereich jedoch umgehen, wenn man zu den $RC$-Schaltungen aktive Bauelemente (z.B. Operationsverstärker) hinzufügt, deren Beschaltung eine Mitkopplung bewirkt. Solche Schaltungen werden als aktive Filter bezeichnet.

Der Frequenzgang lässt sich nach verschiedenen Gesichtspunkten optimieren. Dabei erhält man bestimmte Werte für die Koeffizienten $a_i$ und $b_i$. Hier wollen wir die Frequenzgänge der Butterworth- Bessel- und Tschebyscheff-Filter und der Filter mit kritischer Dämpfung miteinander vergleichen. Abbildung 12.8 zeigt eine Gegenüberstellung
<!-- page-import:0832:end -->

<!-- page-import:0834:start -->
12.1 Theoretische Grundlagen von Tiefpassfiltern 797

$\dfrac{|A|}{\mathrm{dB}}$

0,02 0,05 0,1 0,2 0,5 1 2 5 10 20 $\omega_n$

Tscheby 3dB

Butterworth

Kritisch

Bessel

Frequenzgang der Verstärkung

$T_{gr}$

0,02 0,05 0,1 0,2 0,5 1 2 5 10 20 $\omega_n$

Tscheby 3dB

Butterworth

Bessel

Kritisch

Frequenzgang der Gruppenlaufzeit

$\dfrac{u_a(t)}{U_e}$

Kritisch

Bessel

Butter-
worth

Tschcby 3dB

0 0,5 1

0 1 2 3 4 5 $t/T_g$

Sprungantwort

**Abb. 12.9.** Vergleich von Tiefpassfiltern in 10. Ordnung
<!-- page-import:0834:end -->

<!-- page-import:0836:start -->
12.1 Theoretische Grundlagen von Tiefpassfiltern 799

Man kann auch die Pole der Tiefpassfilter in den Abb. 12.10 und 12.11 miteinander vergleichen. Die Pole der Butterworthfilter liegen auf dem Einheitskreis um den Nullpunkt. Man sieht, dass die Besselfilter eine wesentlich größere Dämpfung besitzen da der Realteil der Pole $\sigma$ größer ist. Dagegen sind die Pole der Tschebyscheff-Filter deutlich schwächer gedämpft; das erklärt ihre ausgeprägte Schwingneigung in der Sprungantwort. Bei den passiven Filtern mit kritischer Dämpfung erhält man $N$-fachen reellen Pol.

Es wird sich später zeigen, dass sich mit ein und derselben Schaltung jeweils alle Filtercharakteristiken einer bestimmten Ordnung realisieren lassen. Die Widerstands- und Kapazitätswerte bestimmen den Filtertyp. Um die Schaltungen dimensionieren zu können, muss man die Filterkoeffizienten der einzelnen Filtertypen kennen. Deshalb wollen wir im nächsten Abschnitten zeigen, wie man sie berechnet.

### 12.1.3 Filter mit kritischer Dämpfung

Bei einem Tiefpass 1. Ordnung ist die Verstärkung oberhalb der Grenzfrequenz umgekehrt proportional zur Frequenz. In der üblichen Darstellung des Bode-Diagramms entspricht das eine Verstärkungsabnahme von 20 dB je Dekade in der Frequenz. Benötigt man einen steileren Verstärkungsabfall, kann man $N$ Tiefpässe in Reihe schalten. Für die Übertragungsfunktion ergibt sich dann ein Ausdruck der Form

$$
A(s_n) = \frac{1}{1+d_1 s_n}\cdot\frac{1}{1+d_2 s_n}\cdots\frac{1}{1+d_N s_n}
$$

(12.21)

mit den reellen, positiven Koeffizienten $d_1, d_2, d_3, \ldots$. Für $\omega_n \gg 1$ wird $|A| \sim 1/\omega_n^N$; die Verstärkung nimmt also mit $N \cdot 20\,\mathrm{dB}$ je Dekade ab. Man erkennt, dass die Übertragungsfunktion $N$ reelle negative Pole besitzt. Dies ist das Kennzeichen der passiven RC-Tiefpässe $N$-ter Ordnung. Besonders interessant ist der Sonderfall Tiefpässe mit gleicher Grenzfrequenz in Reihe zu schalten. Für $d_1 = d_2 = \ldots = d_N = d$ folgt

$$
A(s_n) = \left(\frac{1}{1+d s_n}\right)^N
$$

(12.22)

Damit die Verstärkung bei der Grenzfrequenz $\omega_n = f/f_g = 1$ bzw. $s_n = j\omega_n = j$ den Wert $-3\,\mathrm{dB} \,\hat{=}\, 1/\sqrt{2}$ besitzt, muss die Bedingung

$$
|A|^2 = \frac{1}{(1+d^2)^N} \stackrel{!}{=} \frac{1}{2}
$$

erfüllt werden. Daraus folgt

$$
d = \sqrt{\sqrt[N]{2}-1}
$$

(12.23)

Die Grenzfrequenz der Teilfilter ist demnach um einen Faktor

$$
\frac{f_{gi}}{f_g} = \frac{1}{d} = \left(\sqrt[N]{2}-1\right)^{-2}
$$

höher als die Grenzfrequenz des ganzen Filters. Dies ist der Fall der kritischen Dämpfung. Zum Vergleich mit den übrigen Filtern kann man jeweils 2 Tiefpässe 1. Ordnung zu einem Tiefpass 2. Ordnung zusammenfassen:

$$
A(s_n) = \frac{1}{1+d s_n}\cdot\frac{1}{1+d s_n} = \frac{1}{1+2d s_n+d^2 s_n^2} \stackrel{!}{=} \frac{1}{1+a_1 s_n+b_1 s_n^2}
$$
<!-- page-import:0836:end -->

<!-- page-import:0837:start -->
800  12. Aktive Filter

Daraus folgt:

$$a = 2d,\qquad b = d^2,\qquad Q = \sqrt{b}/a = \tfrac{1}{2}$$

Alle Pole liegen bei $s_n = -1/d$. Die Frequenzgänge der Filter mit kritischer Dämpfung sind in Abb. 12.17 auf S. 808 dargestellt, die Filterkoeffizienten in Abb. 12.18.

## 12.1.4 Butterworth-Tiefpässe

Beim Butterworth-Tiefpass soll die Verstärkung bis zur Grenzfrequenz möglichst lange horizontal verlaufen. Aus (12.16) ergibt sich für den Betrag der Verstärkung eines Tiefpasses $N$-ter Ordnung die allgemeine Form:

$$|A|^2 = \frac{A_0^2}{1 + k_2 \omega_n^2 + k_4 \omega_n^4 + \cdots + k_{2N}\omega_n^{2N}}$$

(12.24)

Man erkennt, dass die Verstärkung für Frequenzen $\omega_n < 1$ dann möglichst lange konstant bleibt wenn $|A|^2$ nur von der höchsten Potenz von $\omega_n$ abhängt. Die niedrigen Potenzen von $\omega_n$ liefern nämlich in diesen Frequenzbereich die größten Beiträge zum Nenner und damit zum Abfall der Verstärkung. Damit ergibt sich:

$$|A|^2 = \frac{A_0^2}{1 + k_{2N}\omega_n^{2N}}$$

Der Koeffizient $k_{2N}$ ergibt sich aus der Normierungsbedingung, dass die Verstärkung bei der Grenzfrequenz $\omega_n = 1$ um 3 dB abgenommen haben soll. Daraus folgt:

$$\frac{A_0^2}{2} = \frac{A_0^2}{1 + k_{2N}} \qquad \text{und} \qquad k_{2N} = 1$$

Für das Betragsquadrat der Verstärkung von Butterworth-Tiefpässen $N$-ter Ordnung ergibt sich somit:

$$|A|^2 = \frac{A_0^2}{1 + \omega_n^{2N}}$$

(12.25)

Da in dieser Gleichung nur die höchste Potenz von $\omega_n$ auftritt, werden die Butterworth-Tiefpässe gelegentlich auch als Potenztiefpässe bezeichnet.

Um einen Butterworth-Tiefpass zu realisieren, benötigt man aber nicht das Betragsquadrat der Verstärkung $|A|^2$, sondern die komplexe Verstärkung. Dazu bilden wir den Betrag von (12.16) und führen einen Koeffizientenvergleich mit (12.25) durch. Daraus folgen dann die gesuchten Koeffizienten $c_1$ bis $c_n$. Die so erhaltenen Nenner von (12.16) sind die Butterworth-Polynome, von denen wir die ersten vier in Abb. 12.12 zusammengestellt haben.

| $n$ |  |
|---|---|
| 1 | $1 + s_n$ |
| 2 | $1 + \sqrt{2}s_n + s_n^2$ |
| 3 | $1 + 2s_n + 2s_n^2 + s_n^3 = (1 + s_n)(1 + s_n + s_n^2)$ |
| 4 | $1 + 2{,}613s_n + 3{,}414s_n^2 + 2{,}613s_n^3 + s_n^4 = (1 + 1{,}848s_n + s_n^2)(1 + 0{,}765s_n + s_n^2)$ |

**Abb. 12.12.** Butterworth-Polynome
<!-- page-import:0837:end -->

<!-- page-import:0838:start -->
12.1 Theoretische Grundlagen von Tiefpassfiltern 801

Es ist auch möglich, die Pole der Übertragungsfunktion in geschlossener Form anzugeben mithilfe der Kreisteilungsgleichung gemäß Abbildung 12.10 und 12.11. Daraus erhalten wir durch Zusammenfassung der konjugiert komplexen Pole unmittelbar die Koeffizienten $a_i$ und $b_i$ der quadratischen Ausdrücke in (12.20):
Ordnung $N$ gerade:

$$
a_i = 2\cos\frac{(2i-1)\pi}{2N}
\qquad \text{für } i = 1 \ldots \frac{N}{2}
$$

$$
b_i = 1
$$

Ordnung $N$ ungerade:

$$
a_1 = 1
\qquad
a_i = 2\cos\frac{(i-1)\pi}{N}
\qquad \text{für } i = 2 \ldots \frac{N+1}{2}
$$

$$
b_i = 1
$$

Die Frequenzgänge der Butterworth-Filter sind in Abb. 12.21 auf S. 808 dargestellt, die Filterkoeffizienten in Abb. 12.22.

## 12.1.5 Tschebyscheff-Tiefpässe

Die Verstärkung von Tschebyscheff-Tiefpässen besitzt bei tiefen Frequenzen den Wert $A_0$, schwankt jedoch noch unterhalb der Grenzfrequenz mit einer gewissen, vorgegebenen Welligkeit. Polynome, die in einem gewissen Bereich eine konstante Welligkeit besitzen, sind die Tschebyscheff-Polynome

$$
T_N(x) =
\begin{cases}
\cos(N\ \mathrm{arccos}\ x) & \text{für } 0 \leq x \leq 1 \\
\cosh(N\ \mathrm{arcosh}\ x) & \text{für } x > 1,
\end{cases}
$$

von denen wir die ersten vier in Abb. 12.13 explizit angegeben haben. Im Bereich $0 \leq x \leq 1$ pendelt $T(x)$ zwischen 0 und 1; für $x > 1$ steigt $T(x)$ monoton an. Um aus den Tschebyscheff-Polynomen die Gleichung eines Tiefpasses herzustellen, setzt man:

$$
|A|^2 = \frac{kA_0^2}{1 + \varepsilon^2 T_N^2(x)}
\qquad\qquad (12.26)
$$

Die Konstante $k$ wird so gewählt, dass für $x = 0$ das Verstärkungsquadrat $|A|^2 = A_0^2$ wird, d.h. $k = 1$ für ungerades $N$ und $k = 1 + \varepsilon^2$ für gerades $N$. Der Faktor $\varepsilon$ ist ein Maß für die Welligkeit. Es ist:

$$
\frac{A_{\max}}{A_{\min}} = \sqrt{1+\varepsilon^2}
\qquad \Rightarrow \qquad
\varepsilon = \sqrt{\frac{A_{\max}}{A_{\min}} - 1}
$$

und

| $N$ |  |
|---|---|
| 1 | $T_1(x) = x$ |
| 2 | $T_2(x) = 2x^2 - 1$ |
| 3 | $T_3(x) = 4x^3 - 3x$ |
| 4 | $T_4(x) = 8x^4 - 8x^2 + 1$ |

**Abb. 12.13.**  
Tschebyscheff-Polynome
<!-- page-import:0838:end -->

<!-- page-import:0840:start -->
12.1 Theoretische Grundlagen von Tiefpassfiltern 803

**Abb. 12.15.** Vergleich der Filtercharakteristik von Tschyscheff-Filtern in 4. und 10. Ordnung mit Butterworthfiltern. Die Filter mit 0,5 und 1 dB Welligkeit liegen zwischen den hier dargestellten Frequenzgängen.

normiert ist, sondern auf eine Frequenz, bei der die Verstärkung zum letzten Mal den Wert $A_{\min}$ annimmt.

Um die verschiedenen Filtertypen besser vergleichen zu können, haben wir auch hier $\omega_g$ auf die 3 dB-Grenzfrequenz normiert. Dazu ersetzt man $s_n$ durch $\alpha s_n$ und bestimmt die Normierungskonstante $\alpha$ so, dass die Verstärkung für $s_n = j$ den Wert $1/\sqrt{2}$ annimmt. Die quadratischen Ausdrücke im Nenner der komplexen Verstärkung lauten dann:

$$
1 + a_i' \alpha s_n + b_i' \alpha^2 s_n^2
$$

Durch Koeffizientenvergleich mit Gl. (12.20) folgt daraus:

$$
a_i = \alpha a_i' \quad \text{und} \quad b_i = \alpha^2 b_i'
$$

Der Einfluss der Welligkeit auf die Filtercharakteristik ist in Abb. 12.15 dargestellt. Man erkennt, dass Tschebyscheff-Filter mit einer Welligkeit von lediglich 0,1 dB bereits deutlich steiler verlaufen als Butterworth-Filter und der Vorteil einer größeren Welligkeit bis zu 3 dB gering ist. Die Welligkeit der Tschebyscheff-Filter im Durchlassbereich, die man in Kauf nimmt, um eine steilere Filtercharakteristik zu erhalten, lässt sich also bei höheren Ordnungen ohne nennenswerte Einbußen auf $0{,}1\ \mathrm{dB} \hat{=} 1{,}2\ \%$ reduzieren. Wir haben die Tschebyscheff-Filter mit Welligkeiten bis 3 dB hier hauptsächlich deshalb aufgenommen, um die charakteristischen Eigenschaften dieser Filter zu zeigen. Die Frequenzgänge der Tschebyscheff-Filter sind für Welligkeiten von 0,1 dB, 0,5 dB, 1 dB und 3 dB in den Abbildungen 12.23 und folgenden dargestellt, ebenso auch die Filterkoeffizienten.

Der Übergang vom Durchlass- in den Sperrbereich lässt sich noch weiter versteilern, indem man oberhalb der Grenzfrequenz Nullstellen in den Amplitudenfrequenzgang hinzufügt. Man kann die Dimensionierung so optimieren, dass sich auch im Sperrbereich eine gleichmäßige Welligkeit des Amplitudenfrequenzganges ergibt. Solche Filter werden als *Cauer-Filter* bezeichnet. Die Übertragungsfunktion unterscheidet sich von der gewöhnlichen Tiefpassgleichung dadurch, dass statt der Konstante $A_0$ im Zähler ein Polynom mit Nullstellen auftritt. Daher lassen sich die verteilerten Tiefpassfilter nicht mit den einfachen Schaltungen im Abschnitt 12.5 realisieren. Im Abschnitt 12.12.5 geben wir jedoch ein Universalfilter an, mit dem sich auch beliebige Zählerpolynome realisieren lassen.
<!-- page-import:0840:end -->

<!-- page-import:0841:start -->
804 12. Active Filter

## 12.1.6 Bessel-Tiefpässe

Die Butterworth- und Tschebyscheff-Tiefpässe besitzen, wie schon gezeigt, ein beträchtliches Überschwingen in der Sprungantwort. Ideales Rechteckverhalten besitzen Filter mit frequenzunabhängiger Gruppenlaufzeit, d.h. frequenzproportionaler Phasenverschiebung. Dieses Verhalten wird am besten durch die Bessel-Filter, gelegentlich auch Thomson-Filter genannt, approximiert. Die Approximation besteht darin, die Koeffizienten so zu wählen, dass die Gruppenlaufzeit unterhalb der Grenzfrequenz $\omega_n = 1$ möglichst wenig von $\omega_n$ abhängt. Man nimmt also eine Butterworth-Approximation für die Gruppenlaufzeit vor. Nach (12.20) gilt für die Verstärkung eines Tiefpasses 2. Ordnung mit $s_n = j\omega_n$:

$$
A = \frac{A_0}{1 + a_1 s_n + b_1 s_n^2} = \frac{A_0}{1 + j a_1 \omega_n - b_1 \omega_n^2}
$$

Daraus ergibt sich die Phasenverschiebung zu:

$$
\varphi = -\arctan \frac{a_1 \omega_n}{1 - b_1 \omega_n^2}
$$

(12.27)

Mit der Definition der Gruppenlaufzeit in (12.10) folgt aus (12.27):

$$
T_{gr} = \frac{a_1 (1 + b_1 \omega_n^2)}{1 + (a_1^2 - 2b_1)\omega_n^2 + b_1^2 \omega_n^4}
$$

Um die Gruppenlaufzeit im Butterworth’schen Sinne zu approximieren, müssen wir dafür sorgen, dass die Terme mit $\omega_n^2$ wegfallen. Für $\omega_n \ll 1$ gilt die Näherung:

$$
T_{gr} = a_1 \cdot \frac{1 + b_1 \omega_n^2}{1 + (a_1^2 - 2b_1)\omega_n^2}
$$

Dieser Ausdruck wird dann von $\omega_n^2$ unabhängig, wenn die Koeffizienten von $\omega_n^2$ im Zähler und Nenner übereinstimmen. Daraus folgt die Bedingung:

$$
b_1 = a_1^2 - 2b_1 \qquad \text{oder} \qquad b_1 = a_1^2/3
$$

Die zweite Beziehung ergibt sich aus der Normierungsbedingung $|A|^2 = \frac{1}{2}$ für $\omega_n = 1$:

$$
\frac{1}{2} = \frac{1}{(1 - b_1)^2 + a_1^2}
\qquad \Rightarrow \qquad
a_1 = 1{,}3617 \qquad \text{und} \qquad b_1 = 0{,}6180
$$

Für höhere Ordnungen wird die entsprechende Rechnung ziemlich schwierig, da ein nichtlineares Gleichungssystem entsteht. Es ist jedoch möglich, für die Koeffizienten $c_i$ eine Rekursionsformel anzugeben:

| $n$ |  |
|---|---|
| 1 | $1 + s_n$ |
| 2 | $1 + s_n + \frac{1}{3}s_n^2$ |
| 3 | $1 + s_n + \frac{2}{5}s_n^2 + \frac{1}{15}s_n^3$ |
| 4 | $1 + s_n + \frac{3}{7}s_n^2 + \frac{2}{21}s_n^3 + \frac{1}{105}s_n^4$ |

Abb. 12.16.  
Bessel-Polynome
<!-- page-import:0841:end -->

<!-- page-import:0842:start -->
12.1 Theoretische Grundlagen von Tiefpassfiltern 805

$c_1 = 1$ und $c'_i = \dfrac{2(N - i + 1)}{i(2N - i + 1)}\,c_{i-1}$ (12.28)

Die so erhaltenen Nenner von Gl. (12.28) sind die Bessel-Polynome, die wir bis zu 4. Ordnung in Abb. 12.16 angegeben haben. Dabei ist allerdings zu beachten, dass in dieser Darstellung $s_n$ nicht auf die 3 dB Grenzfrequenz normiert ist, sondern auf den Kehrwert der Gruppenlaufzeit bei niedrigen Frequenzen $T_{gr\,0}$. Diese Normierung ist aber für den Aufbau von Tiefpassfiltern wenig nützlich. Daher haben wir die Koeffizienten wie bei den übrigen Filtern auf die 3 dB-Grenzfrequenz umgerechnet und in Blöcke 2. Ordnung faktorisiert. So ergeben sich die Filterkoeffizienten, die zusammen mit den Frequenzgängen in den Abbildungen 12.19 und 12.20 auf S. 807 angegeben sind.

## 12.1.7 Zusammenfassung der Theorie

Wir haben gesehen, dass sich die Übertragungsfunktion aller Tiefpassfilter in der Form von Gl. (12.29) darstellen lässt. Die Ordnung $N$ des Filters ist gegeben durch die höchste Potenz von $s_n$, wenn man den Nenner ausmultipliziert. Sie legt die Asymptotensteigung des Frequenzgangs der Verstärkung auf den Wert $-N \cdot 20\,\text{dB/Dekade}$ fest. Der übrige Verlauf der Verstärkung wird für die jeweilige Ordnung durch den Filtertyp bestimmt. Von besonderer Bedeutung sind Butterworth-, Tschebyscheff- und Bessel-Filter, die sich lediglich durch die Koeffizienten $a_i$ und $b_i$ in Gl. (12.29) unterscheiden. Die Werte der Koeffizienten und die Frequenzgänge sind in den Abbildungen 12.17 bis 12.30 zusammengestellt. Zusätzlich ist die 3 dB-Grenzfrequenz eines jeden Teilfilters durch die Größe $f_{gi}/f_g$ angegeben. Sie wird zur Dimensionierung zwar nicht benötigt, ist aber sehr nützlich, um das richtige Funktionieren der einzelnen Teilfilter zu überprüfen; einige Beispiele sind in Abb. 12.44 eingezeichnet. Außerdem haben wir die Polgüte $Q_i$ der einzelnen Teilfilter angegeben. Sie ist in Analogie zur Güte der selektiven Filter in Abschnitt 12.7.1 definiert. Je größer die Polgüte ist, desto größer ist auch die Schwingneigung des Filters. Filter mit reellen Polen besitzen eine Polgüte $Q \leq 0{,}5$. Mit den Koeffizienten $a_i$ und $b_i$ der faktorisierten Übertragungsfunktion lässt sich der Frequenzgang der Verstärkung, der Phasenverschiebung und der Gruppenlaufzeit berechnen:

$$
A(s_n) = \frac{A_0}{\prod_i (1 + a_i s_n + b_i s_n^2)}
$$

(12.29)

$$
|A|^2 = \frac{A_0^2}{\prod_i \left[1 + (a_i^2 - 2b_i)\omega_n^2 + b_i^2 \omega_n^4\right]}
$$

(12.30)

$$
\varphi = - \sum_i \arctan \frac{a_i \omega_n}{1 - b_i \omega_n^2}
$$

(12.31)

$$
T_{Gr} = \sum_i \frac{a_i(1 + b_i \omega_n^2)}{1 + (a_i^2 - 2b_i)\omega_n^2 + b_i^2 \omega_n^4}
$$

(12.32)

$$
\frac{f_{gi}}{f_g} = \frac{1}{\sqrt{2b_i}} \sqrt{2b_i - a_i^2 + \sqrt{(2b_i - a_i^2)^2 + 4b_i^2}}
$$

(12.33)

$$
Q_i = \frac{\sqrt{b_i}}{a_i}
$$

(12.34)
<!-- page-import:0842:end -->

<!-- page-import:0843:start -->
806 12. Active Filter

**Abb. 12.17.** Frequenzgang der Verstärkung von Tiefpässen mit kritischer Dämpfung

| $N$ | $i$ | $a_i$ | $b_i$ | $f_{gi}/f_g$ | $Q_i$ |
|---|---:|---:|---:|---:|---:|
| 1 | 1 | 1,0000 | 0,0000 | 1,000 | – |
| 2 | 1 | 1,2872 | 0,4142 | 1,000 | 0,50 |
| 3 | 1 | 0,5098 | 0,0000 | 1,961 | – |
|  | 2 | 1,0197 | 0,2599 | 1,262 | 0,50 |
| 4 | 1 | 0,8700 | 0,1892 | 1,480 | 0,50 |
|  | 2 | 0,8700 | 0,1892 | 1,480 | 0,50 |
| 5 | 1 | 0,3856 | 0,0000 | 2,593 | – |
|  | 2 | 0,7712 | 0,1487 | 1,669 | 0,50 |
|  | 3 | 0,7712 | 0,1487 | 1,669 | 0,50 |
| 6 | 1 | 0,6999 | 0,1225 | 1,839 | 0,50 |
|  | 2 | 0,6999 | 0,1225 | 1,839 | 0,50 |
|  | 3 | 0,6999 | 0,1225 | 1,839 | 0,50 |
| 7 | 1 | 0,3226 | 0,0000 | 3,100 | – |
|  | 2 | 0,6453 | 0,1041 | 1,995 | 0,50 |
|  | 3 | 0,6453 | 0,1041 | 1,995 | 0,50 |
|  | 4 | 0,6453 | 0,1041 | 1,995 | 0,50 |
| 8 | 1 | 0,6017 | 0,0905 | 2,139 | 0,50 |
|  | 2 | 0,6017 | 0,0905 | 2,139 | 0,50 |
|  | 3 | 0,6017 | 0,0905 | 2,139 | 0,50 |
|  | 4 | 0,6017 | 0,0905 | 2,139 | 0,50 |
| 9 | 1 | 0,2829 | 0,0000 | 3,534 | – |
|  | 2 | 0,5659 | 0,0801 | 2,275 | 0,50 |
|  | 3 | 0,5659 | 0,0801 | 2,275 | 0,50 |
|  | 4 | 0,5659 | 0,0801 | 2,275 | 0,50 |
|  | 5 | 0,5659 | 0,0801 | 2,275 | 0,50 |
| 10 | 1 | 0,5358 | 0,0718 | 2,402 | 0,50 |
|  | 2 | 0,5358 | 0,0718 | 2,402 | 0,50 |
|  | 3 | 0,5358 | 0,0718 | 2,402 | 0,50 |
|  | 4 | 0,5358 | 0,0718 | 2,402 | 0,50 |
|  | 5 | 0,5358 | 0,0718 | 2,402 | 0,50 |

**Abb. 12.18.** Koeffizienten der Filter mit kritischer Dämpfung
<!-- page-import:0843:end -->

<!-- page-import:0844:start -->
12.1 Theoretische Grundlagen von Tiefpassfiltern 807

Abb. 12.19. Frequenzgang der Verstärkung von Bessel-Filtern

| $N$ | $i$ | $a_i$ | $b_i$ | $f_{gi}/f_g$ | $Q_i$ |
|---|---:|---:|---:|---:|---:|
| 1 | 1 | 1,0000 | 0,0000 | 1,000 | – |
| 2 | 1 | 1,3617 | 0,6180 | 1,000 | 0,58 |
| 3 | 1 | 0,7560 | 0,0000 | 1,323 | – |
| 3 | 2 | 0,9996 | 0,4772 | 1,414 | 0,69 |
| 4 | 1 | 1,3397 | 0,4889 | 0,978 | 0,52 |
| 4 | 2 | 0,7743 | 0,3890 | 1,797 | 0,81 |
| 5 | 1 | 0,6656 | 0,0000 | 1,502 | – |
| 5 | 2 | 1,1402 | 0,4128 | 1,184 | 0,56 |
| 5 | 3 | 0,6216 | 0,3245 | 2,138 | 0,92 |
| 6 | 1 | 1,2217 | 0,3887 | 1,063 | 0,51 |
| 6 | 2 | 0,9686 | 0,3505 | 1,431 | 0,61 |
| 6 | 3 | 0,5131 | 0,2756 | 2,447 | 1,02 |
| 7 | 1 | 0,5937 | 0,0000 | 1,684 | – |
| 7 | 2 | 1,0944 | 0,3395 | 1,207 | 0,53 |
| 7 | 3 | 0,8304 | 0,3011 | 1,695 | 0,66 |
| 7 | 4 | 0,4332 | 0,2381 | 2,731 | 1,13 |
| 8 | 1 | 1,1112 | 0,3162 | 1,164 | 0,51 |
| 8 | 2 | 0,9754 | 0,2979 | 1,381 | 0,56 |
| 8 | 3 | 0,7202 | 0,2621 | 1,963 | 0,71 |
| 8 | 4 | 0,3728 | 0,2087 | 2,992 | 1,23 |
| 9 | 1 | 0,5386 | 0,0000 | 1,857 | – |
| 9 | 2 | 1,0244 | 0,2834 | 1,277 | 0,52 |
| 9 | 3 | 0,8710 | 0,2636 | 1,574 | 0,59 |
| 9 | 4 | 0,6320 | 0,2311 | 2,226 | 0,76 |
| 9 | 5 | 0,3257 | 0,1854 | 3,237 | 1,32 |
| 10 | 1 | 1,0215 | 0,2650 | 1,264 | 0,50 |
| 10 | 2 | 0,9393 | 0,2549 | 1,412 | 0,54 |
| 10 | 3 | 0,7815 | 0,2351 | 1,780 | 0,62 |
| 10 | 4 | 0,5604 | 0,2059 | 2,479 | 0,81 |
| 10 | 5 | 0,2883 | 0,1665 | 3,466 | 1,42 |

Abb. 12.20. Koeffizienten der Bessel-Filter
<!-- page-import:0844:end -->

<!-- page-import:0845:start -->
808 12. Aktive Filter

**Abb. 12.21.** Frequenzgang der Verstärkung von Butterworth-Filtern

| N | i | $a_i$ | $b_i$ | $f_{gi}/f_g$ | $Q_i$ |
|---|---:|---:|---:|---:|---:|
| 1 | 1 | 1,0000 | 0,0000 | 1,000 | – |
| 2 | 1 | 1,4142 | 1,0000 | 1,000 | 0,71 |
| 3 | 1 | 1,0000 | 0,0000 | 1,000 | – |
|   | 2 | 1,0000 | 1,0000 | 1,272 | 1,00 |
| 4 | 1 | 1,8478 | 1,0000 | 0,719 | 0,54 |
|   | 2 | 0,7654 | 1,0000 | 1,390 | 1,31 |
| 5 | 1 | 1,0000 | 0,0000 | 1,000 | – |
|   | 2 | 1,6180 | 1,0000 | 0,859 | 0,62 |
|   | 3 | 0,6180 | 1,0000 | 1,448 | 1,62 |
| 6 | 1 | 1,9319 | 1,0000 | 0,676 | 0,52 |
|   | 2 | 1,4142 | 1,0000 | 1,000 | 0,71 |
|   | 3 | 0,5176 | 1,0000 | 1,479 | 1,93 |
| 7 | 1 | 1,0000 | 0,0000 | 1,000 | – |
|   | 2 | 1,8019 | 1,0000 | 0,745 | 0,55 |
|   | 3 | 1,2470 | 1,0000 | 1,117 | 0,80 |
|   | 4 | 0,4450 | 1,0000 | 1,499 | 2,25 |
| 8 | 1 | 1,9616 | 1,0000 | 0,661 | 0,51 |
|   | 2 | 1,6629 | 1,0000 | 0,829 | 0,60 |
|   | 3 | 1,1111 | 1,0000 | 1,206 | 0,90 |
|   | 4 | 0,3902 | 1,0000 | 1,512 | 2,56 |
| 9 | 1 | 1,0000 | 0,0000 | 1,000 | – |
|   | 2 | 1,8794 | 1,0000 | 0,703 | 0,53 |
|   | 3 | 1,5321 | 1,0000 | 0,917 | 0,65 |
|   | 4 | 1,0000 | 1,0000 | 1,272 | 1,00 |
|   | 5 | 0,3473 | 1,0000 | 1,521 | 2,88 |
| 10 | 1 | 1,9754 | 1,0000 | 0,655 | 0,51 |
|    | 2 | 1,7820 | 1,0000 | 0,756 | 0,56 |
|    | 3 | 1,4142 | 1,0000 | 1,000 | 0,71 |
|    | 4 | 0,9080 | 1,0000 | 1,322 | 1,10 |
|    | 5 | 0,3129 | 1,0000 | 1,527 | 3,20 |

**Abb. 12.22.** Koeffizienten der Butterworth-Filter
<!-- page-import:0845:end -->

<!-- page-import:0846:start -->
12.1 Theoretische Grundlagen von Tiefpassfiltern 809

Abb. 12.23. Frequenzgang der Verstärkung von Tschbyscheff-Filtern mit 0,1 dB Welligkeit

| $N$ | $i$ | $a_i$ | $b_i$ | $f_{gi}/f_g$ | $Q_i$ |
|---|---:|---:|---:|---:|---:|
| 1 | 1 | 1,0000 | 0,0000 | 1,000 | – |
| 2 | 1 | 1,4049 | 1,1622 | 1,000 | 0,77 |
| 3 | 1 | 1,4328 | 0,0000 | 0,698 | – |
|  | 2 | 0,7969 | 1,1418 | 1,309 | 1,34 |
| 4 | 1 | 2,4920 | 2,3779 | 0,558 | 0,62 |
|  | 2 | 0,4834 | 1,1137 | 1,417 | 2,18 |
| 5 | 1 | 2,1056 | 0,0000 | 0,475 | – |
|  | 2 | 1,5559 | 2,0248 | 0,855 | 0,91 |
|  | 3 | 0,3163 | 1,0775 | 1,472 | 3,28 |
| 6 | 1 | 3,5582 | 4,5497 | 0,387 | 0,60 |
|  | 2 | 0,9851 | 1,7207 | 1,064 | 1,33 |
|  | 3 | 0,2223 | 1,0609 | 1,496 | 4,63 |
| 7 | 1 | 2,8346 | 0,0000 | 0,353 | – |
|  | 2 | 2,1958 | 3,4542 | 0,624 | 0,85 |
|  | 3 | 0,6662 | 1,5143 | 1,197 | 1,85 |
|  | 4 | 0,1639 | 1,0441 | 1,514 | 6,23 |
| 8 | 1 | 4,6515 | 7,6129 | 0,295 | 0,59 |
|  | 2 | 1,3796 | 2,6634 | 0,829 | 1,18 |
|  | 3 | 0,4802 | 1,3876 | 1,280 | 2,45 |
|  | 4 | 0,1260 | 1,0365 | 1,522 | 8,08 |
| 9 | 1 | 3,5838 | 0,0000 | 0,279 | – |
|  | 2 | 2,8222 | 5,3817 | 0,490 | 0,82 |
|  | 3 | 0,9310 | 2,1779 | 0,978 | 1,59 |
|  | 4 | 0,3624 | 1,2987 | 1,339 | 3,14 |
|  | 5 | 0,0996 | 1,0279 | 1,530 | 10,18 |
| 10 | 1 | 5,7587 | 11,5578 | 0,238 | 0,59 |
|  | 2 | 1,7524 | 3,8987 | 0,675 | 1,13 |
|  | 3 | 0,6711 | 1,8814 | 1,085 | 2,04 |
|  | 4 | 0,2840 | 1,2399 | 1,379 | 3,92 |
|  | 5 | 0,0808 | 1,0240 | 1,534 | 12,52 |

Abb. 12.24. Koeffizienten der Tschebyscheff-Filter mit 0,1 dB Welligkeit
<!-- page-import:0846:end -->

<!-- page-import:0847:start -->
810  12. Aktive Filter

**Abb. 12.25.** Frequenzgang der Verstärkung von Tschbyscheff-Filtern mit 0,5 dB Welligkeit

| N | i | $a_i$ | $b_i$ | $f_{gi}/f_g$ | $Q_i$ |
|---|---|---:|---:|---:|---:|
| 1 | 1 | 1,0000 | 0,0000 | 1,000 | – |
| 2 | 1 | 1,3614 | 1,3827 | 1,000 | 0,86 |
| 3 | 1 | 1,8636 | 0,0000 | 0,537 | – |
|   | 2 | 0,6402 | 1,1931 | 1,335 | 1,71 |
| 4 | 1 | 2,6282 | 3,4341 | 0,538 | 0,71 |
|   | 2 | 0,3648 | 1,1509 | 1,419 | 2,94 |
| 5 | 1 | 2,9235 | 0,0000 | 0,342 | – |
|   | 2 | 1,3025 | 2,3534 | 0,881 | 1,18 |
|   | 3 | 0,2290 | 1,0833 | 1,480 | 4,54 |
| 6 | 1 | 3,8645 | 6,9797 | 0,366 | 0,68 |
|   | 2 | 0,7528 | 1,8573 | 1,078 | 1,81 |
|   | 3 | 0,1589 | 1,0711 | 1,495 | 6,51 |
| 7 | 1 | 4,0211 | 0,0000 | 0,249 | – |
|   | 2 | 1,8729 | 4,1795 | 0,645 | 1,09 |
|   | 3 | 0,4861 | 1,5676 | 1,208 | 2,58 |
|   | 4 | 0,1156 | 1,0443 | 1,517 | 8,84 |
| 8 | 1 | 5,1117 | 11,9607 | 0,276 | 0,68 |
|   | 2 | 1,0639 | 2,9365 | 0,844 | 1,61 |
|   | 3 | 0,3439 | 1,4206 | 1,284 | 3,47 |
|   | 4 | 0,0885 | 1,0407 | 1,521 | 11,53 |
| 9 | 1 | 5,1318 | 0,0000 | 0,195 | – |
|   | 2 | 2,4283 | 6,6307 | 0,506 | 1,06 |
|   | 3 | 0,6839 | 2,2908 | 0,989 | 2,21 |
|   | 4 | 0,2559 | 1,3133 | 1,344 | 4,48 |
|   | 5 | 0,0695 | 1,0272 | 1,532 | 14,58 |
| 10 | 1 | 6,3648 | 18,3695 | 0,222 | 0,67 |
|    | 2 | 1,3582 | 4,3453 | 0,689 | 1,53 |
|    | 3 | 0,4822 | 1,9440 | 1,091 | 2,89 |
|    | 4 | 0,1994 | 1,2520 | 1,381 | 5,61 |
|    | 5 | 0,0563 | 1,0263 | 1,533 | 17,99 |

**Abb. 12.26.** Koeffizienten der Tschbyscheff-Filter mit 0,5 dB Welligkeit
<!-- page-import:0847:end -->

<!-- page-import:0848:start -->
12.1 Theoretische Grundlagen von Tiefpassfiltern 811

**Abb. 12.27.** Frequenzgang der Verstärkung von Tschbyscheff-Filtern mit 1 dB Welligkeit

| N | i | $a_i$ | $b_i$ | $f_{gi}/f_g$ | $Q_i$ |
|---|---|---:|---:|---:|---:|
| 1 | 1 | 1,0000 | 0,0000 | 1,000 | – |
| 2 | 1 | 1,3022 | 1,5515 | 1,000 | 0,96 |
| 3 | 1 | 2,2156 | 0,0000 | 0,451 | – |
|   | 2 | 0,5442 | 1,2057 | 1,353 | 2,02 |
| 4 | 1 | 2,5904 | 4,1301 | 0,540 | 0,78 |
|   | 2 | 0,3039 | 1,1697 | 1,417 | 3,56 |
| 5 | 1 | 3,5711 | 0,0000 | 0,280 | – |
|   | 2 | 1,1280 | 2,4896 | 0,894 | 1,40 |
|   | 3 | 0,1872 | 1,0814 | 1,486 | 5,56 |
| 6 | 1 | 3,8437 | 8,5529 | 0,366 | 0,76 |
|   | 2 | 0,6292 | 1,9124 | 1,082 | 2,20 |
|   | 3 | 0,1296 | 1,0766 | 1,493 | 8,00 |
| 7 | 1 | 4,9520 | 0,0000 | 0,202 | – |
|   | 2 | 1,6338 | 4,4899 | 0,655 | 1,30 |
|   | 3 | 0,3987 | 1,5834 | 1,213 | 3,16 |
|   | 4 | 0,0937 | 1,0423 | 1,520 | 10,90 |
| 8 | 1 | 5,1019 | 14,7608 | 0,276 | 0,75 |
|   | 2 | 0,8916 | 3,0426 | 0,849 | 1,96 |
|   | 3 | 0,2806 | 1,4334 | 1,285 | 4,27 |
|   | 4 | 0,0717 | 1,0432 | 1,520 | 14,24 |
| 9 | 1 | 6,3415 | 0,0000 | 0,158 | – |
|   | 2 | 2,1252 | 7,1711 | 0,514 | 1,26 |
|   | 3 | 0,5624 | 2,3278 | 0,994 | 2,71 |
|   | 4 | 0,2076 | 1,3166 | 1,346 | 5,53 |
|   | 5 | 0,0562 | 1,0258 | 1,533 | 18,03 |
| 10 | 1 | 6,3634 | 22,7468 | 0,221 | 0,75 |
|    | 2 | 1,1399 | 4,5167 | 0,694 | 1,86 |
|    | 3 | 0,3939 | 1,9665 | 1,093 | 3,56 |
|    | 4 | 0,1616 | 1,2569 | 1,381 | 6,94 |
|    | 5 | 0,0455 | 1,0277 | 1,532 | 22,26 |

**Abb. 12.28.** Koeffizienten der Tschebyscheff-Filter mit 1 dB Welligkeit
<!-- page-import:0848:end -->

<!-- page-import:0849:start -->
812  12. Aktive Filter

Abb. 12.29. Frequenzgang der Verstärkung von Tschbyscheff-Filtern mit 3 dB Welligkeit

| N | i | $a_i$ | $b_i$ | $f_{gi}/f_g$ | $Q_i$ |
|---|---|---:|---:|---:|---:|
| 1 | 1 | 1,0000 | 0,0000 | 1,000 | – |
| 2 | 1 | 1,0650 | 1,9305 | 1,000 | 1,30 |
| 3 | 1 | 3,3496 | 0,0000 | 0,299 | – |
|   | 2 | 0,3559 | 1,1923 | 1,396 | 3,07 |
| 4 | 1 | 2,1853 | 5,5339 | 0,557 | 1,08 |
|   | 2 | 0,1964 | 1,2009 | 1,410 | 5,58 |
| 5 | 1 | 5,6334 | 0,0000 | 0,178 | – |
|   | 2 | 0,7620 | 2,6530 | 0,917 | 2,14 |
|   | 3 | 0,1172 | 1,0686 | 1,500 | 8,82 |
| 6 | 1 | 3,2721 | 11,6773 | 0,379 | 1,04 |
|   | 2 | 0,4077 | 1,9873 | 1,086 | 3,46 |
|   | 3 | 0,0815 | 1,0861 | 1,489 | 12,78 |
| 7 | 1 | 7,9064 | 0,0000 | 0,126 | – |
|   | 2 | 1,1159 | 4,8963 | 0,670 | 1,98 |
|   | 3 | 0,2515 | 1,5944 | 1,222 | 5,02 |
|   | 4 | 0,0582 | 1,0348 | 1,527 | 17,46 |
| 8 | 1 | 4,3583 | 20,2948 | 0,286 | 1,03 |
|   | 2 | 0,5791 | 3,1808 | 0,855 | 3,08 |
|   | 3 | 0,1765 | 1,4507 | 1,285 | 6,83 |
|   | 4 | 0,0448 | 1,0478 | 1,517 | 22,87 |
| 9 | 1 | 10,1759 | 0,0000 | 0,098 | – |
|   | 2 | 1,4585 | 7,8971 | 0,526 | 1,93 |
|   | 3 | 0,3561 | 2,3651 | 1,001 | 4,32 |
|   | 4 | 0,1294 | 1,3165 | 1,351 | 8,87 |
|   | 5 | 0,0348 | 1,0210 | 1,537 | 29,00 |
| 10 | 1 | 5,4449 | 31,3788 | 0,230 | 1,03 |
|    | 2 | 0,7414 | 4,7363 | 0,699 | 2,94 |
|    | 3 | 0,2479 | 1,9952 | 1,094 | 5,70 |
|    | 4 | 0,1008 | 1,2638 | 1,380 | 11,15 |
|    | 5 | 0,0283 | 1,0304 | 1,530 | 35,85 |

Abb. 12.30. Koeffizienten der Tschebyscheff-Filter mit 3 dB Welligkeit
<!-- page-import:0849:end -->

<!-- page-import:0851:start -->
814  12. Aktive Filter

**Abb. 12.32.** Simulation einer Schaltung, die normale Bauelemente und ein Laplace-Modul enthält. Dargestellt ist der zeitliche Verlauf der Signale in der Schaltung.

ter sind die Simulationsergebnisse dargestellt. Dabei erhält man nicht nur die Verstärkung und die Gruppenlaufzeit, sondern auch die Sprungantwort (Transient).

Wenn man eine bestimmte Grenzfrequenz von z.B. $f_g = 1\,\mathrm{kHz}$ vorgeben möchte, muss man die Normierung aufheben und

$$
s_n = \frac{s}{\omega_g} = \frac{s}{2\pi\,f_g}\,\frac{1\,\mathrm{kHz}}{} = \frac{s}{2\pi\cdot1\,\mathrm{kHz}}
$$

einsetzen. Bei dem Beispiel für das $3\,\mathrm{dB}$-Tschebyscheff-Filter 4. Ordnung ergibt sich dann mit $a_1 = 2{,}1853$, $b_1 = 5{,}5339$, $a_2 = 0{,}1964$ und $b_2 = 1{,}2009$:

$$
A(s) = \frac{1}{1 + \frac{a_1}{\omega_g}\,s + \frac{b_1}{\omega_g^2}\,s^2}\cdot\frac{1}{1 + \frac{a_2}{\omega_g}\,s + \frac{b_2}{\omega_g^2}\,s^2}
$$

$$
= \frac{1}{1 + 3{,}48\cdot10^{-4}\,s + 1{,}40\cdot10^{-7}\,s^2}\cdot\frac{1}{1 + 3{,}13\cdot10^{-5}\,s + 3{,}04\cdot10^{-8}\,s^2}
$$

Ein Beispiel für den gemischten Einsatz des Laplace-Moduls zusammen mit normalen Bauteilen ist in Abb. 12.32 dargestellt. Hier wird ein Sinussignal mit einem Diodenbegrenzer in ein Trapezsignal umgewandelt. Danach wird die Grundwelle dem $H(s)$-Element, das als Bandpass $(A_r = 10, Q = 1)$ programmiert ist, wieder herausgefiltert. Die drei Signale sind in Abb. 12.32 im Zeitbereich dargestellt.
<!-- page-import:0851:end -->

<!-- page-import:0853:start -->
816  12. Aktive Filter

**Abb. 12.34.**  
Tiefpass 1. Ordnung mit Impedanzwandler

$$
A(s_n)=\frac{1+R_2/R_3}{1+\omega_g R_1 C_1 s_n}
$$

Wie man aus der Koeffiziententabellen in Abbildungen 12.18 bis 12.30 entnimmt, sind in der 1. Ordnung alle Filtertypen identisch und besitzen den Koeffizienten $a_1 = 1$. Bei der Realisierung von Filtern höherer Ordnung durch Reihenschaltung von Teilfiltern niedriger Ordnung treten jedoch bei ungerader Ordnung auch Stufen 1. Ordnung auf, bei denen $a_1 \ne 1$ ist. Das rührt daher, dass die Teilfilter in der Regel eine andere Grenzfrequenz besitzen als das Gesamtfilter, nämlich $f_{g1} = f_g/a_1$.

Um den korrespondierenden Hochpass zu erhalten, muss man in (12.35) $N = 1$ setzen und erhält

$$
A(s_n)=\frac{A_\infty\, s_n}{a_1+s_n}
$$

(12.38)

In der Schaltung lässt sich dies ganz einfach dadurch realisieren, dass man $R_1$ mit $C_1$ vertauscht.

Zu einer Alternative gelangt man, wenn man das Filter mit in die Gegenkopplung des Operationsverstärkers einbezieht. Das entsprechende Tiefpassfilter zeigt Abb. 12.35. Zur Dimensionierung gibt man die Grenzfrequenz, die hier negative Gleichspannungsverstärkung $A_0$ und die Kapazität $C_1$ vor. Dann folgt durch Koeffizientenvergleich mit (12.36):

$$
R_2=\frac{a_1}{2\pi f_g C_1}
\qquad \text{und} \qquad
R_1=-\frac{R_2}{A_0}
$$

Abbildung 12.36 zeigt den korrespondierenden Hochpass. Durch Koeffizientenvergleich mit (12.38) folgt die Dimensionierung:

$$
R_1=\frac{1}{2\pi f_g a_1 C_1}
\qquad \text{und} \qquad
R_2=-R_1 A_\infty
$$

**Abb. 12.35.**  
Tiefpass 1. Ordnung mit invertierendem Verstärker

$$
A(s_n)=-\frac{R_2/R_1}{1+\omega_g R_2 C_1 s_n}
$$

**Abb. 12.36.**  
Hochpass 1. Ordnung mit invertierendem Verstärker

$$
A(s_n)=-\frac{s_n\cdot R_2/R_1}{\frac{1}{\omega_g R_1 C_1}+s_n}
$$
<!-- page-import:0853:end -->

<!-- page-import:0871:start -->
834

# 12. Aktive Filter

dadurch zustande, dass das Eingangssignal im Spannungsteiler $R_1$, $R_3$ abgeschwächt wird. Daher muss der Operationsverstärker auch in diesem Fall eine Differenzverstärkung besitzen, die groß gegenüber $2Q^2$ ist. Diese Forderung ist deshalb besonders hart, weil sie bei der Resonanzfrequenz noch erfüllt sein muss. Darauf ist bei der Auswahl des Operationsverstärkers insbesondere bei höheren Frequenzen zu achten.

Die Dimensionierung der Schaltung soll noch an einem Zahlenbeispiel erläutert werden: Ein selektives Filter soll die Resonanzfrequenz $f_r = 1\,\mathrm{kHz}$ und die Güte $Q = 10$ besitzen. Die Grenzfrequenzen haben gemäß (12.47) den Wert 951 Hz und 1051 Hz. Die Verstärkung bei der Resonanzfrequenz soll $A_r = -10$ sein. Man kann nun eine Größe frei wählen, z.B. $C = 1\,\mathrm{nF}$, und die übrigen berechnen. Zunächst ergibt sich aus (12.63):

$$
R_2 = \frac{Q}{\pi f_r C} = 3{,}18\,\mathrm{M}\Omega
$$

Damit erhält man aus (12.62):

$$
R_1 = \frac{R_2}{-2A_r} = 159\,\mathrm{k}\Omega
$$

Der Widerstand $R_3$ ergibt sich aus (12.61):

$$
R_3 = \frac{-A_r R_1}{2Q^2 + A_r} = 8{,}36\,\mathrm{k}\Omega
$$

Die Differenzverstärkung des Operationsverstärkers muss bei der Resonanzfrequenz noch groß gegenüber $2Q^2 = 200$ sein.

Die Schaltung besitzt den Vorteil, dass sie auch bei nicht ganz exakter Dimensionierung nicht zu selbständigen Schwingungen auf der Resonanzfrequenz neigt.

## 12.8.4 Bandpass mit Einfachmitkopplung

Die Anwendung der Einfachmitkopplung führt auf die Bandpassschaltung in Abb. 12.56. Durch die Gegenkopplung über die Widerstände $R_1$ und $(k - 1)R_1$ wird die innere Verstärkung auf den Wert $k$ festgelegt. Durch Koeffizientenvergleich mit (12.50) folgen aus der Übertragungsfunktion die angegebenen Dimensionierungsgleichungen.

Nachteilig ist, dass sich $Q$ und $A_r$ nicht unabhängig voneinander wählen lassen. Ein Vorteil ist jedoch, dass sich die Güte durch Variation von $k$ verändern lässt, ohne dass sich dadurch die Resonanzfrequenz ändert. Für $k = 3$ wird die Verstärkung unendlich groß, d.h. es tritt eine ungedämpfte Schwingung auf. Die Einstellung der inneren Verstärkung $k$ wird also umso kritischer, je näher sie dem Wert 3 kommt.

Auch hier soll ein Beispiel für einen Bandpass mit der Güte $Q = 10$ und der Resonanzfrequenz $f_r = 1\,\mathrm{kHz}$ folgen. Aus der Güte folgt die innere Verstärkung:

$$
k = 3 - \frac{1}{Q} = 2{,}9
$$

Daraus lässt sich der Spannungsteiler aus den Widerständen $R_1$ berechnen. Die Verstärkung bei der Resonanzfrequenz liegt hier fest: $A_r = kQ = 29$. Nach Vorgabe der Kapazitäten $C = 1\,\mathrm{nF}$ erhält man die Widerstände:

$$
R = \frac{1}{2\pi f C} = 159\,\mathrm{k}\Omega
$$
<!-- page-import:0871:end -->

<!-- page-import:0873:start -->
836 12. Aktive Filter

Frequenzgang der Verstärkung

$|A|$

dB

$Q = 10$

$Q = 1$

$\omega_n$

Frequenzgang der Phasenverschiebung

$\varphi$

$Q = 10$

$Q = 1$

$\omega_n$

**Abb. 12.57.** Frequenzgang der Amplitude und Phasenverschiebung für Bandsperren 2. Ordnung mit der Güte $Q = 1$ und $Q = 10$

Man erkennt, dass die Übertragungsfunktion bei der Resonanzfrequenz $\omega_n = 1$, also bei $s_n = j$ eine Nullstelle besitzt. Der Nenner ist identisch mit demjenigen von (12.50) für Bandpassfilter. Aus (12.65) lässt sich auch der Frequenzgang der Amplitude, der Phase und der Gruppenlaufzeit berechnen:

$$
|A| = \frac{A_0 |(1-\omega_n^2)|}{\sqrt{1+\omega_n^2\left(\frac{1}{Q^2}-2\right)+\omega_n^4}}
$$

$$
\varphi = \arctan \frac{\omega_n}{Q(\omega_n^2-1)}
$$

$$
T_{gr} = \frac{(1+\omega_n^2)Q}{Q^2 + (1-2Q^2)\omega_n^2 + Q^2\omega_n^4}
$$
<!-- page-import:0873:end -->
