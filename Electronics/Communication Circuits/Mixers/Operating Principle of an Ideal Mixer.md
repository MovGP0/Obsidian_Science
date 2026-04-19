# Operating Principle of an Ideal Mixer

<!-- page-import:1424:start -->
# Kapitel 25:
Mischer

*Mischer (mixer)* werden zur Frequenzumsetzung *(frequency conversion)* in Sendern und Empfängern benötigt und gehören zusammen mit Verstärkern und Filtern zu den wesentlichen Komponenten eines drahtlosen Übertragungssystems. Wir beschreiben im folgenden zunächst das Funktionsprinzip eines Mischers und gehen anschließend auf die in der Praxis verwendeten Schaltungen ein.

## 25.1 Funktionsprinzip eines idealen Mischers

Ein idealer Mischer entspricht einem Multiplizierer, siehe Abb. 25.1. An den Eingängen werden das umzusetzende Signal und das zur Umsetzung benötigte *Lokaloszillatorsignal* angelegt; letzteres ist im Idealfall ein Sinussignal. Am Ausgang erhält man das umgesetzte Signal sowie zusätzliche, bei der Umsetzung anfallende Anteile. Die unerwünschten Anteile müssen im Zuge der weiteren Verarbeitung durch Filter unterdrückt werden; deshalb werden zur Frequenzumsetzung neben einem Mischer ein oder zwei Filter benötigt. Üblicherweise bezeichnet man den Eingang mit dem umzusetzenden Signal als *Eingang* und den Eingang mit dem Lokaloszillatorsignal als *Lokaloszillator-Eingang*.

Wenn das Eingangssignal auf eine höhere Frequenz umgesetzt wird, spricht man von einer *Aufwärtsmischung (upconversion);* der Mischer wird dann als *Aufwärtsmischer (upconversion mixer)* bezeichnet. Entsprechend spricht man von einer *Abwärtsmischung (downconversion)* und einem *Abwärtsmischer (downconversion mixer),* wenn das Eingangssignal auf eine niedrigere Frequenz umgesetzt wird. Abbildung 25.2 zeigt die charakteristischen Frequenzen bei einem Aufwärts- und einem Abwärtsmischer:

– Die *Zwischenfrequenz (ZF-Frequenz, intermediate frequency, IF)* $f_{ZF}$ ist die niedrigere der beiden Trägerfrequenzen, d.h. die Trägerfrequenz des Eingangssignals beim Aufwärtsmischer bzw. die Trägerfrequenz des Ausgangssignals beim Abwärtsmischer. Bei der Aufwärtsmischung eines Signals aus dem Basisband oder der Abwärtsmischung eines Signals ins Basisband gilt $f_{ZF} = 0$; das ist z.B. bei I/Q-Mischern der Fall.

– Die *Hochfrequenz (HF-Frequenz, radio frequency, RF)* $f_{HF}$ ist die höhere der beiden Trägerfrequenzen, d.h. die Trägerfrequenz des Ausgangssignals beim Aufwärtsmischer bzw. die Trägerfrequenz des Eingangssignals beim Abwärtsmischer.

– Die *Lokaloszillatorfrequenz (LO-Frequenz, local oscillator frequency, LO)* $f_{LO}$ ist die Frequenz des benötigten Lokaloszillatorsignals und entspricht dem Frequenzversatz der Umsetzung.

idealer Mischer  
= Multiplizierer

umzusetzendes Signal  
= Eingangssignal

umgesetztes Signal  
= Ausgangssignal

Lokaloszillatorsignal

**Abb. 25.1.** Idealer Mischer

© Springer-Verlag GmbH Deutschland, ein Teil von Springer Nature 2019  
U. Tietze et al., *Halbleiter-Schaltungstechnik*
<!-- page-import:1424:end -->

<!-- page-import:1425:start -->
1388  25. Mischer

a Aufwärtsmischer

b Abwärtsmischer

**Abb. 25.2.** Frequenzen bei Mischern

Die Signale werden entsprechend als ZF-, HF- und LO-Signal bezeichnet.

Bei den Frequenzen muss man zwischen den auf den einzelnen Mischer bezogenen Frequenzen und den Frequenzen in einem konkreten Sender oder Empfänger unterscheiden. In einem Sender tritt jede ZF-Frequenz des Senders an einem der Mischer als ZF-Frequenz auf. Entsprechend wird jede ZF- und die Sendefrequenz eines Senders mit Hilfe eines Mischers erzeugt und tritt deshalb beim jeweiligen Mischer als HF-Frequenz auf. In einem Empfänger gilt dasselbe. Wir beziehen uns im folgenden auf die Frequenzen an einem einzelnen Mischer; die Bedeutung dieser Frequenzen in einem konkreten Sender oder Empfänger bleibt offen.

## 25.1.1 Aufwärtsmischer

Beim Aufwärtsmischer wird am Eingang ein ZF-Signal

$$
s_{ZF}(t) = a(t)\cos[\omega_{ZF} t + \varphi(t)]
$$

zugeführt und mit dem Lokaloszillatorsignal

$$
s_{LO}(t) = 2\cos \omega_{LO} t
$$

multipliziert, siehe Abb. 25.3. Wir geben dem Lokaloszillatorsignal die Amplitude 2, damit in den folgenden Gleichungen keine Vorfaktoren 1/2 auftreten; das grundsätzliche Verhalten ändert sich dadurch nicht. Am Ausgang erhält man:

$$
s_{HF}(t) = s_{ZF}(t)\cdot s_{LO}(t) = a(t)\cos[\omega_{ZF} t + \varphi(t)]\cdot 2\cos \omega_{LO} t
$$

$$
= a(t)\cos[(\omega_{LO} + \omega_{ZF})\,t + \varphi(t)] + a(t)\cos[(\omega_{LO} - \omega_{ZF})\,t - \varphi(t)]
$$

Oberband $(f > f_{LO})$  
in Gleichlage

Unterband $(f < f_{LO})$  
in Kehrlage

Der Anteil bei der Frequenz $f_{LO} + f_{ZF}$ wird als Oberband bezeichnet und weist dieselbe Frequenzfolge auf wie das ZF-Signal; man nennt dies Gleichlage. Der Anteil bei der Frequenz $f_{LO} - f_{ZF}$ wird als Unterband bezeichnet und weist eine im Vergleich zum ZF-Signal invertierte Frequenzfolge auf; man nennt dies Kehrlage. Jedes der beiden Bänder kann als Ausgangssignal dienen. Das unerwünschte Band muss mit einem Filter unterdrückt werden.

## 25.1.2 Abwärtsmischer

Beim Abwärtsmischer wird am Eingang ein HF-Signal

$$
s_{HF}(t) = a(t)\cos[\omega_{HF} t + \varphi(t)]
$$
<!-- page-import:1425:end -->

<!-- page-import:1426:start -->
## 25.1 Funktionsprinzip eines idealen Mischers

1389

$s_{ZF}(t)=a(t)\cos[\omega_{ZF}t+\varphi(t)]$

$2\cos\omega_{LO}t$

$s_{HF}(t)=a(t)\cos[(\omega_{LO}+\omega_{ZF})t+\varphi(t)]$
$+\,a(t)\cos[(\omega_{LO}-\omega_{ZF})t-\varphi(t)]$

$|S_{ZF}|$

$|S_{HF}|$

$f_{ZF}$

$f_{LO}-f_{ZF}$

$f_{LO}$

$f_{LO}+f_{ZF}$

$f_{ZF}$

$f_{ZF}$

$f$

**Abb. 25.3.** Zeitsignale und Betragsspektren beim Aufwärtsmischer

zugeführt und mit dem Lokaloszillatorsignal

$$
s_{LO}(t)=2\cos\omega_{LO}t
$$

multipliziert, siehe Abb. 25.4. Am Ausgang erhält man:

$$
s_M(t)=s_{ZF}(t)\cdot s_{LO}(t)=a(t)\cos[\omega_{HF}t+\varphi(t)]\cdot 2\cos\omega_{LO}t
$$

$$
=\left\{
\begin{array}{ll}
a(t)\cos[(\omega_{HF}-\omega_{LO})t+\varphi(t)] & \text{Gleichlage }(f_{HF}>f_{LO}) \\
\quad +\,a(t)\cos[(\omega_{HF}+\omega_{LO})t+\varphi(t)] & \\
a(t)\cos[(\omega_{LO}-\omega_{HF})t-\varphi(t)] & \text{Kehrlage }(f_{HF}<f_{LO}) \\
\quad +\,a(t)\cos[(\omega_{LO}+\omega_{HF})t+\varphi(t)] &
\end{array}
\right.
$$

Das Ausgangssignal enthält neben dem gewünschten Anteil bei der Differenzfrequenz einen zusätzlichen Anteil bei der Summenfrequenz, der mit einem Filter unterdrückt werden muss; für das ZF-Signal gilt dann:

$$
s_{ZF}(t)=\left\{
\begin{array}{ll}
a(t)\cos[(\omega_{HF}-\omega_{LO})t+\varphi(t)] & \text{Gleichlage }(f_{HF}>f_{LO}) \\
a(t)\cos[(\omega_{LO}-\omega_{HF})t-\varphi(t)] & \text{Kehrlage }(f_{HF}<f_{LO})
\end{array}
\right.
$$

Wenn die HF-Frequenz größer ist als die LO-Frequenz, erhält man ein ZF-Signal in *Gleichlage* mit gleicher Frequenzfolge, siehe Abb. 25.4a; andernfalls erhält man ein ZF-Signal in *Kehrlage* mit invertierter Frequenzfolge, siehe Abb. 25.4b.

Beim Abwärtsmischer tritt häufig der Fall auf, dass das am HF-Eingang zugeführte Signal neben dem gewünschten HF-Signal mit der Frequenz $f_{HF}=f_{LO}\pm f_{ZF}$ ein *Spiegelsignal* mit der *Spiegelfrequenz* $f_{HF,Sp}=f_{LO}\mp f_{ZF}$ enthält, das ebenfalls auf die ZF-Frequenz umgesetzt wird; der Mischer arbeitet in diesem Fall in Gleich- und in Kehrlage. Abbildung 25.5 zeigt dies am Beispiel eines Abwärtsmischers mit der HF-Frequenz $f_{HF}=f_{LO}+f_{ZF}$ in Gleichlage und der Spiegelfrequenz $f_{HF,Sp}=f_{LO}-f_{ZF}$ in Kehrlage; dabei wird die Frequenzfolge des Spiegelsignals aufgrund der Kehrlage invertiert. Damit der Mischer nur das gewünschte HF-Signal umsetzt, muss das Spiegelsignal mit einem vor dem Mischer angeordneten *Spiegelfrequenzfilter* unterdrückt werden; wir gehen darauf im Zusammenhang mit Empfängern im Abschnitt 22.2 näher ein.

Die Existenz des Spiegelsignals ist eine Folge der funktionalen Symmetrie von Auf- und Abwärtsmischer: der Aufwärtsmischer setzt ein ZF-Signal in zwei HF-Signale um,
<!-- page-import:1426:end -->

<!-- page-import:1428:start -->
25.1 Funktionsprinzip eines idealen Mischers 1391

cos $\omega_{LO} t$

$90^{0}$

sin $\omega_{LO} t$

$s_{ZF}(t)=a(t)\cos[\omega_{ZF} t+\varphi(t)]$

$90^{0}$

$a(t)\sin[\omega_{ZF} t+\varphi(t)]$

Oberband

$a(t)\cos[(\omega_{LO}+\omega_{ZF})t+\varphi(t)]$

Unterband

$a(t)\cos[(\omega_{LO}-\omega_{ZF})t-\varphi(t)]$

**Abb. 25.6.** Aufwärtsmischer mit Spiegelfrequenz-Unterdrückung (= Unterdrückung des unerwünschten Bandes). Die Phasenschieber haben 90° Phasennacheilung. In der Praxis wird nur das gewünschte Ausgangssignal gebildet.

### 25.1.3 Mischer mit Spiegelfrequenz-Unterdrückung

Die Existenz der zwei Bänder beim Aufwärtsmischer und der Spiegelfrequenz beim Abwärtsmischer ist eine Folge des Multiplikationstheorems für trigonometrische Funktionen:

$$
\cos \omega_1 t \cdot \cos \omega_2 t \;=\; \frac{1}{2}\,[\cos (\omega_1+\omega_2)\, t + \cos (\omega_1-\omega_2)\, t]
$$

Bei der Multiplikation reeller Schwingungen treten demnach immer Anteile bei der Summen- und der Differenzfrequenz auf. Dagegen gilt für komplexe Schwingungen der Form

$$
e^{j\omega t} \;=\; \cos \omega t \;+\; j\,\sin \omega t
$$

der Zusammenhang:

$$
e^{j\omega_1 t}\cdot e^{j\omega_2 t} \;=\; e^{j(\omega_1+\omega_2)t}
$$

Hier tritt nur die Summenfrequenz auf. Durch Realteil-Bildung erhält man:

$$
\operatorname{Re}\left\{e^{j\omega_1 t}\cdot e^{j\omega_2 t}\right\}
\;=\; \cos \omega_1 t \cdot \cos \omega_2 t \;-\; \sin \omega_1 t \cdot \sin \omega_2 t
$$

$$
=\; \operatorname{Re}\left\{e^{j(\omega_1+\omega_2)t}\right\}
\;=\; \cos (\omega_1+\omega_2)\, t
$$

Entsprechend gilt:

$$
\operatorname{Re}\left\{e^{j\omega_1 t}\cdot e^{-j\omega_2 t}\right\}
\;=\; \cos \omega_1 t \cdot \cos \omega_2 t \;+\; \sin \omega_1 t \cdot \sin \omega_2 t
$$

$$
=\; \operatorname{Re}\left\{e^{j(\omega_1-\omega_2)t}\right\}
\;=\; \cos (\omega_1-\omega_2)\, t
$$

Man kann demnach die Summen- oder die Differenzfrequenz unterdrücken, indem man zwei Mischer, einen Subtrahierer bzw. Addierer und zwei 90°-Phasenschieber mit 90° Phasennacheilung zur Erzeugung der Sinus-Anteile aus den Cosinus-Anteilen verwendet. Mit $\omega_1=\omega_{LO}$ und $\omega_2=\omega_{ZF}$ erhält man den in Abbildung 25.6 gezeigten Aufwärtsmischer mit Spiegelfrequenz-Unterdrückung. In der Praxis wird nur das gewünschte Ausgangssignal gebildet; an diesem Ausgang ist das unerwünschte Band unterdrückt. Der Begriff der Spiegelfrequenz-Unterdrückung ist in diesem Zusammenhang eigentlich nicht korrekt, da beim Aufwärtsmischer keine Überlagerung von zwei Anteilen auftritt; dennoch ist die Bezeichnung in der Praxis üblich.

Der eigentliche *Mischer mit Spiegelfrequenz-Unterdrückung* (*image-rejection mixer*, IRM) ist jedoch der Abwärtsmischer mit Spiegelfrequenz-Unterdrückung. Dazu kehrt man die Signalrichtung zwischen dem ZF-Anschluss und den Anschlüssen für das Oberband und das Unterband um und speist ein Signalgemisch aus einem Oberband- und einem
<!-- page-import:1428:end -->

<!-- page-import:1483:start -->
1446  25. Mischer

a  positive LO-Spannung

b  negative LO-Spannung

**Abb. 25.47.**  
Stromverteilung bei einem  
Ringmischer mit vertauschten  
LO- und ZF-Anschlüssen

ist das Übersprechen des starken LO-Signals in den ZF- und den HF-Kreis; deshalb wird im Datenblatt die *Isolation* zwischen dem LO- und dem HF- (*LO-RF isolation*) sowie zwischen dem LO- und dem ZF-Anschluss (*LO-IF isolation*) angegeben. Die Isolation nimmt mit zunehmender LO-Frequenz ab; typische Werte liegen im Bereich von $50\dots 70\,\mathrm{dB}$ bei $f_{LO} < 10\,\mathrm{MHz}$ und $20\dots 30\,\mathrm{dB}$ bei $f_{LO} > 1\,\mathrm{GHz}$. Diese Werte gelten allerdings nur für den Fall, dass der ZF- und der HF-Anschluss bei der LO-Frequenz mit $50\,\Omega$ abgeschlossen sind, d.h. es wird ein breitbandiger Betrieb des Mischers angenommen. Bei einem schmalbandigen Betrieb mit ZF- und HF-Filtern direkt am Mischer ist die Isolation im allgemeinen wesentlich höher. Eine große Auswahl an Ringmischern findet man in [25.2].

Bei Frequenzen oberhalb $5\,\mathrm{GHz}$ werden die Übertrager durch Hybride aus Streifenleitungen ersetzt. Abbildung 25.48 zeigt eine weit verbreitete Ausführung eines Gegentaktmischers mit einem 180°-Hybrid. Das LO-Signal wird am Anschluss 4 des Hybrids zugeführt und mit jeweils halber Leistung an die Anschlüsse 1 und 2 übertragen. Die LO-Signale an den Anschlüssen 1 und 2 sind aufgrund des 180°-Pfades des Hybrids in Gegenphase; dadurch sind die Dioden bezüglich des LO-Signals in Reihe geschaltet und leiten während einer Halbwelle. In dieser Halbwelle sind der ZF- und der HF-Kreis über die Kleinsignalleitwerte der Dioden verbunden. Da die Signale an den Anschlüssen 1 und 2 bezüglich des ZF- und des HF-Kreises gleichphasig wirken, wird das gegenphasig anliegende LO-Signal nicht in den ZF- und den HF-Kreis übertragen. Entsprechend werden das ZF- und das HF-Signal nicht in den LO-Kreis übertragen, da sich gleichphasige Signale an den Anschlüssen 1 und 2 am Anschluss 4 kompensieren. Aufgrund dieser Eigenschaft
<!-- page-import:1483:end -->
