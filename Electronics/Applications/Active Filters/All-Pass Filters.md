# All-Pass Filters

<!-- page-import:0876:start -->
12.11 Allpässe 839

$$U_{BP}=-\frac{s_n}{1+\frac{R_1}{R_2}s_n+s_n^2}U_e \qquad U_{BS}=-\frac{1+s_n^2}{1+\frac{R_1}{R_2}s_n+s_n^2}U_e$$

**Abb. 12.62.** Realisierung einer Bandsperre als inverser Bandpass

Dabei muss man die Verstärkung anpassen, sodass $A_0 = A_r$ ist. Diese Methode ist in Abb. 12.60 schematisch dargestellt. Ein Beispiel für die Realisierung folgt in Abb. 12.61. Hier wurde der Bandpass von Abb. 12.55 mit einem Summierer kombiniert. Das Dimensionierungsbeispiel zeigt einen Bandpass mit der Güte $Q = 10$ und der Verstärkung $A_r = 10$ bei der Resonanzfrequenz. Aus diesem Grund wird das Eingangssignal ebenfalls mit dem Faktor $R_4/R_5 = 10$ zur Summierung verstärkt. Das negative Vorzeichen für die Subtraktion ist in dem hier verwendeten Bandpass bereits enthalten.

## 12.10.4 Bandsperre als inverser Bandpass

Man kann einen Bandpass auch in die Gegenkopplung eines Operationsverstärkers schalten, um die inverse Funktion zu erhalten. Dieses Prinzip ist in Abb. 12.62 dargestellt. Dort liegt ein Bandpass mit der Güte $Q = \infty$ in der Gegenkopplung des Operationsverstärkers. Die Dämpfung erfolgt hier über den Gegenkopplungswiderstand $R_1$. Dadurch ergibt sich sowohl für den Bandpass als auch für die Bandsperre eine definierte Güte von $Q = R_2/R_1$. Dieses Prinzip wird in dem Universalfilter in Abb. 12.71 angewandt. Dort stellen die Operationsverstärker OV2 bis OV4 den ungedämpften Bandpass dar. Der Vorteil dieser Schaltung besteht darin, dass die Sperrdämpfung nur von der Güte des Bandpasses abhängt. Bei allen vorhergehenden Schaltungen ergibt sich die Sperrdämpfung als Differenz großer Signale. Deshalb ist dort bei Verwendung von Bauelementen mit einer Toleranz von 1% lediglich eine Sperrdämpfung von 20 dB zu erwarten, wenn man die Nullstelle nicht individuell abgleicht.

## 12.11 Allpässe

### 12.11.1 Grundlagen

Bei den bisher besprochenen Filtern handelt es sich um Schaltungen, bei denen die Verstärkung und die Phasenverschiebung von der Frequenz abhängig waren. Im Gegensatz dazu besitzen die Allpassfilter eine konstante, frequenzunabhängige Verstärkung, aber trotzdem eine frequenzabhängige Phasenverschiebung. Deshalb setzt man sie bevorzugt zur Phasenkorrektur ein. Besonders interessant sind Allpassfilter, deren Phasenverschiebung linear mit der Frequenz ansteigt, denn sie besitzen eine konstante Gruppenlaufzeit. Man verwendet sie daher zur Signalverzögerung. Die wichtigsten Merkmale von Allpassfiltern sind in Abb. 12.63 dargestellt. Man sieht, dass die Verstärkung für alle Frequenzen konstant ist.

Zunächst wollen wir zeigen, wie man vom Frequenzgang eines Tiefpasses zum Frequenzgang eines Allpasses gelangt. Dazu ersetzt man im Zähler von (12.29) den konstanten

.
<!-- page-import:0876:end -->

<!-- page-import:0877:start -->
840  12. Aktive Filter

Verstärkung

$\dfrac{|A|}{\mathrm{dB}}$

$1$

$0$

$-1$

$0 \qquad 1 \qquad 2 \qquad \omega_n$

Phasenverschiebung

$\varphi$

$0^\circ$

$-900^\circ$

$-1800^\circ$

$0 \qquad 1 \qquad 2 \qquad \omega_n$

Gruppenlaufzeit

$T_{gr}$

$T_{gr0}$

$20$

$10$

$0$

$71\%$

$0 \qquad 1 \qquad 2 \qquad \omega_n$

Sprungantwort

$100\%$

$50\%$

$0\%$

$U_e$

$U_a$

$T_{gr0}$

$0 \qquad 1 \qquad 2 \qquad 3 \qquad 4 \qquad 5 \qquad 6 \qquad t/T_{gr0}$

**Abb. 12.63.** Verhalten von Allpässen am Beispiel eines Allpasses 10. Ordnung
<!-- page-import:0877:end -->

<!-- page-import:0878:start -->
12.11 Allpässe 841

**Abb. 12.64.**  
Pol- Nullstellen-Diagramm eines Allpassfilters 10. Ordnung. Pole als Punkte und Nullstellen als Kreise

Zähler $A_0$ durch den konjugiert komplexen Nenner und erhält dadurch die konstante Verstärkung $|A| = 1$ und die doppelte Phasenverschiebung:

$$
A(s_n) = \frac{\prod_i (1 - a_i s_n + b_i s_n^2)}{\prod_i (1 + a_i s_n + b_i s_n^2)}
= \frac{\prod_i \sqrt{(1 - b_i \omega_n^2)^2 + a_i^2 \omega_n^2}\, e^{-j\alpha}}{\prod_i \sqrt{(1 - b_i \omega_n^2)^2 + a_i^2 \omega_n^2}\, e^{+j\alpha}}
\qquad (12.68)
$$

$$
= 1 \cdot e^{-2j\alpha} = e^{j\varphi}
$$

Darin ist:

$$
\varphi = -2\alpha = -2 \sum_i \arctan \frac{a_i \omega_n}{1 - b_i \omega_n^2}
\qquad {}^{a_i\omega_n<1}_{}
= -2\,\omega_n \sum_i a_i + \ldots
\qquad (12.69)
$$

Die Phasenverschiebung nimmt für niedrige Frequenzen linear mit der Frequenz zu; um das zu zeigen haben wir in Abb. 12.63 ausnahmsweise eine lineare Frequenzachse gewählt und keine logarithmische wie es im Bode-Diagramm üblich ist. Unterhalb der Grenzfrequenz steigt die Phasenverschiebung proportional mit der Frequenz, darüber strebt sie asymptotisch gegen $N \cdot 180^\circ$, also in dem Beispiel für $N = 10$ gegen $1800^\circ$.

Die Gruppenlaufzeit ergibt sich aus (12.69) gemäß der Definition in (12.10) zu

$$
T_{gr} = t_{gr} \cdot \omega_g = - \frac{d\varphi}{d\omega_n}
= 2 \sum_i \frac{a_i(1 + b_i \omega_n^2)}{1 + (a_i^2 - 2b_i)\omega_n^2 + b_i^2 \omega_n^4}
\qquad (12.70)
$$

und besitzt demnach bei niedrigen Frequenzen den Wert:

$$
T_{gr\,0} = 2 \sum_i a_i
$$

Um eine konstante Gruppenlaufzeit zu erhalten, verwendet man die Filterkoeffizienten der Besselfilter, denn sie sind bereits für eine konstante Gruppenlaufzeit optimiert. Durch Hinzufügen des konjugiert komplexen Zählers verdoppelt sich hier die Phasenverschiebung und die Gruppenlaufzeit. Es ist jedoch zweckmäßig, die so erhaltenen Frequenzgänge
<!-- page-import:0878:end -->

<!-- page-import:0879:start -->
842 12. Aktive Filter

$T_{gr}$

$N = 10$

$N = 1$

$\,\omega_n$

**Abb. 12.65.** Frequenzgang der Gruppenlaufzeit für 1. bis 10. Ordnung

| $N$ | $i$ | $a_i$ | $b_i$ | $f_i/f_g$ | $Q_i$ | $T_{gr\,0}$ |
|---|---:|---:|---:|---:|---:|---:|
| 1 | 1 | 0,6436 | 0,0000 | 1,554 | – | 1,2872 |
| 2 | 1 | 1,6278 | 0,8832 | 1,064 | 0,58 | 3,2556 |
| 3 | 1 | 1,1415 | 0,0000 | 0,876 | – | 5,3014 |
| 3 | 2 | 1,5092 | 1,0877 | 0,959 | 0,69 |  |
| 4 | 1 | 2,3370 | 1,4878 | 0,820 | 0,52 | 7,3752 |
| 4 | 2 | 1,3506 | 1,1837 | 0,919 | 0,81 |  |
| 5 | 1 | 1,2974 | 0,0000 | 0,771 | – | 9,4625 |
| 5 | 2 | 2,2224 | 1,5685 | 0,798 | 0,56 |  |
| 5 | 3 | 1,2116 | 1,2330 | 0,901 | 0,92 |  |
| 6 | 1 | 2,6117 | 1,7763 | 0,750 | 0,51 | 11,5579 |
| 6 | 2 | 2,0706 | 1,6015 | 0,790 | 0,61 |  |
| 6 | 3 | 1,0967 | 1,2596 | 0,891 | 1,02 |  |
| 7 | 1 | 1,3735 | 0,0000 | 0,728 | – | 13,6578 |
| 7 | 2 | 2,5320 | 1,8169 | 0,742 | 0,53 |  |
| 7 | 3 | 1,9211 | 1,6116 | 0,788 | 0,66 |  |
| 7 | 4 | 1,0023 | 1,2743 | 0,886 | 1,13 |  |
| 8 | 1 | 2,7541 | 1,9420 | 0,718 | 0,51 | 15,7607 |
| 8 | 2 | 2,4174 | 1,8300 | 0,739 | 0,56 |  |
| 8 | 3 | 1,7850 | 1,6101 | 0,788 | 0,71 |  |
| 8 | 4 | 0,9239 | 1,2822 | 0,883 | 1,23 |  |
| 9 | 1 | 1,4186 | 0,0000 | 0,705 | – | 17,8656 |
| 9 | 2 | 2,6979 | 1,9659 | 0,713 | 0,52 |  |
| 9 | 3 | 2,2940 | 1,8282 | 0,740 | 0,59 |  |
| 9 | 4 | 1,6644 | 1,6027 | 0,790 | 0,76 |  |
| 9 | 5 | 0,8579 | 1,2862 | 0,882 | 1,32 |  |
| 10 | 1 | 2,8406 | 2,0490 | 0,699 | 0,50 | 19,9717 |
| 10 | 2 | 2,6120 | 1,9714 | 0,712 | 0,54 |  |
| 10 | 3 | 2,1733 | 1,8184 | 0,742 | 0,62 |  |
| 10 | 4 | 1,5583 | 1,5923 | 0,792 | 0,81 |  |
| 10 | 5 | 0,8018 | 1,2877 | 0,881 | 1,42 |  |

**Abb. 12.66.** Allpass-Koeffizienten für maximal flache Gruppenlaufzeit
<!-- page-import:0879:end -->

<!-- page-import:0880:start -->
12.11 Allpässe 843

umzunormieren, weil die 3 dB-Grenzfrequenz der Tiefpässe hier ihren Sinn verliert. Daher haben wir die Koeffizienten $a_1$ und $b_1$ so umgerechnet, dass die Gruppenlaufzeit bei der Grenzfrequenz $\omega_n = 1$ auf das $1/\sqrt{2}$-fache, des Wertes bei niedrigen Frequenzen - also auf $0{,}71\,T_{gr0}$ - abgenommen hat. Diese Normierung der Gruppenlaufzeit ist in Abb. 12.63 eingetragen.

Die Sprungantwort in Abb. 12.63 zeigt die Verzögerung des Eingangssignals durch den Allpass. Um das zu zeigen wurde hier jedoch die Anstiegssteilheit des Eingangssignals begrenzt, da sonst hohe Frequenzen auftreten, die oberhalb der Bandbreite, also $\omega_n > 1$, des Allpasses liegen. Im Ausgangssignal des Allpasses treten dann Schwingungen auf, die umso größer ist je größer die Frequenzanteile im Eingangssignal oberhalb der Grenzfrequenz sind.

Die Pole und Nullstellen von Allpässen sind in Abb. 12.64 eingezeichnet. Die Pole entsprechen denen von Besselfiltern, ihre absolute Lage unterscheidet sich jedoch aufgrund der geänderten Normierung. Die Nullstellen liegen symmetrisch dazu.

Der Verlauf der Gruppenlaulzeit ist in Abb. 12.65 bis zur 10. Ordnung aufgezeichnet. Die für Allpassfilter umgerechneten Koeffizienten sind in Abb. 12.66 tabelliert. Außerdem ist die Gruppenlauzeit für niedrige Frequenzen $T_{gr0}$ für jede Ordnung mit angegeben und die Polgüte $Q_i = \sqrt{b_i}/a_i$. Da sie durch die Umnormierung nicht beeinflusst wird, hat sie dieselben Werte wie bei den Bessel-Filtern. Um eine Kontrolle von aufgebauten Teilfiltern zu ermöglichen, haben wir in Abb. 12.66 zusätzlich die Größe $f_i/f_g$ aufgeführt. Dabei ist $f_i$ hier diejenige Frequenz, bei der die Phasenverschiebung des betreffenden Teilfilters bei 2. Ordnung $\varphi = -180^\circ$ erreicht bzw. bei 1. Ordnung $\varphi = -90^\circ$. Diese Frequenz ist wesentlich leichter zu messen als die Grenzfrequenz der Gruppenlaufzeit.

In welcher Reihenfolge man bei der Dimensionierung eines Allpasses vorgeht, soll folgendes Zahlenbeispiel erläutern: Ein Signal mit einem Frequenzspektrum von 0 bis 1 kHz soll um $t_{gr0} = 3\,\text{ms}$ verzögert werden. Damit keine zu großen Phasenverzerrungen auftreten, soll die Grenzfrequenz des Allpasses $f_g \geq 1\,\text{kHz}$ sein. Nach (12.70) folgt daraus die Forderung:

$$
T_{gr0} \geq t_{gr0} \cdot \omega_g = 3\,\text{ms} \cdot 2\pi \cdot 1\,\text{kHz} = 18{,}8.
$$

Aus Abb. 12.66 kann man entnehmen, dass man dazu ein Filter 10. Ordnung benötigt. Bei ihm ist $T_{gr0} = 19{,}97$. Damit die Gruppenlaufzeit genau 3 ms beträgt, muss nach (12.70) die Grenzfrequenz

$$
f_g = \frac{T_{gr0}}{2\pi \cdot t_{gr0}} = \frac{19{,}97}{2\pi \cdot 3\,\text{ms}} = 1{,}059\,\text{kHz}
$$

gewählt werden. Dieses Filter entspricht dem, das wir in Abb. 12.63 als Beispiel dargestellt haben.

#### 12.11.2 Realisierung von Allpässen 1. Ordnung

Wie man leicht sieht, besitzt die Schaltung in Abb. 12.67 bei tiefen Frequenzen die Verstärkung +1 und bei hohen Frequenzen $-1$. Die Phasenverschiebung geht also von 0 auf $-180^\circ$. Die Schaltung ist dann ein Allpass, wenn der Betrag der Verstärkung auch bei mittleren Frequenzen gleich 1 ist. Die Übertragungsfunktion in Abb. 12.67 zeigt, dass der Betrag der Verstärkung offensichtlich konstant gleich Eins ist. Der Koeffizientenvergleich mit (12.68) liefert die Dimensionierung:

$$
RC = \frac{a_1}{\omega_g} = \frac{a_1}{2\pi f_g}
$$
<!-- page-import:0880:end -->

<!-- page-import:0881:start -->
844  12. Aktive Filter

**Abb. 12.67.**  
Allpass 1. Ordnung

$$
A(s_n)=\frac{1-sRC}{1+sRC}=\frac{1-RC\omega_g s_n}{1+RC\omega_g s_n}
$$

Die Phasenverschiebung beträgt:

$$
\varphi=-2\arctan(\omega RC)=-2\arctan(a_1\omega_n)
\qquad\qquad (12.71)
$$

Für den niederfrequenten Grenzwert der Gruppenlaufzeit ergibt sich mit (12.70):

$$
T_{gr\,0}=2a_1
\qquad\Rightarrow\qquad
t_{gr\,0}=\frac{T_{gr\,0}}{\omega_g}=2RC
$$

Der Allpass 1. Ordnung in Abb. 12.67 lässt sich sehr gut als variabler Phasenschieber einsetzen. Man kann durch Variation des Widerstandes $R$ Phasenverschiebungen zwischen $0$ und $-180^\circ$ einstellen, ohne die Amplitude zu beeinflussen.

## 12.11.3 Realisierung von Allpässen 2. Ordnung

Einen Allpass 2. Ordnung kann man wie bei den Bandsperren in Abb. 12.61 dadurch realisieren, dass man von der Eingangsspannung die Ausgangsspannung eines Bandpasses subtrahiert. Hier soll wieder das Bandpassfilter von Abb. 12.55 auf S. 833 verwendet werden. Da die Güten hier relativ klein bleiben, kann man den Widerstand $R_3$ weglassen und statt dessen die Verstärkung mit dem Widerstand $R/\alpha$ in Abb. 12.68 einstellen. Dann lautet die Übertragungsfunktion der Anordnung:

$$
A(s_n')=1-\frac{\frac{A_r}{Q}s_n'}{1+\frac{1}{Q}s_n'+s_n'^2}
=
\frac{1+\frac{1-A_r}{Q}s_n'+s_n'^2}{1+\frac{1}{Q}s_n'+s_n'^2}
$$

Man erkennt, dass sich für $A_r=2$ die Übertragungsgleichung eines Allpasses ergibt. Sie ist jedoch noch nicht auf die Grenzfrequenz des Allpasses normiert, sondern auf die Resonanzfrequenz des selektiven Filters. Um zu der richtigen Normierung zu gelangen, setzen wir:

$$
\omega_g=\beta\omega_r
\qquad\Rightarrow\qquad
s_n'=\frac{s}{\omega_r}=\frac{\beta s}{\omega_g}=\beta s_n
$$

Damit lautet die Übertragungsfunktion:

$$
A(s_n)=
\frac{1-\frac{\beta}{Q}s_n+\beta^2 s_n^2}{1+\frac{\beta}{Q}s_n+\beta^2 s_n^2}
=
\frac{1-a_1 s_n+b_1 s_n^2}{1+a_1 s_n+b_1 s_n^2}
\qquad (12.72)
$$

Der Koeffizientenvergleich ergibt:

$$
a_1=\frac{\beta}{Q}
\qquad \text{und} \qquad
b_1=\beta^2
$$
<!-- page-import:0881:end -->
