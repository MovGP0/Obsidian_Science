# Properties of Power Transformers

<!-- page-import:0964:start -->
# Kapitel 16:
Stromversorgung

Jedes elektronische Gerät benötigt eine Stromversorgung. Man unterscheidet zwischen Netz- und Akku-betriebenen Geräten. Eine Übersicht über die bevorzugten Ausführungsformen ist in Abb. 16.1 zusammengestellt. Jede Stromversorgung muss eine oder mehrere Gleichspannungen zur Versorgung liefern, die von Netz- bzw. Akku-Spannungsschwankungen und Lastschwankungen unabhängig sind. In jedem Fall steht ein hoher Wirkungsgrad im Vordergrund, um die Leistungsaufnahme und gleichzeitig den Aufwand für die Kühlung klein zu halten.

Der Wirkungsgrad ist das Verhältnis von abgegebener zu aufgenommener Leistung:
$\eta = P_{Abgabe} / P_{Aufnahme}$. Daraus ergibt sich die Verlustleistung

$$
P_{Verlust} = P_{Aufnahme} - P_{Abgabe} = \left(\frac{1}{\eta} - 1\right) P_{Abgabe}
$$

(16.1)

Die Varianten zur Versorgung eines Geräts aus dem Netz sind in Abb. 16.2 gegenübergestellt. Bei Netzbetrieb ist eine galvanische Trennung mit einem Transformator erforderlich. Im einfachsten Fall kann man dabei einen 50 Hz-Netztransformator mit einem nachfolgenden linearen Spannungsregler einsetzen. Ihr Wirkungsgrad ist jedoch wegen des 50 Hz-Transformators und dem Schwankungsbereich, den der lineare Spannungsregler auffangen muss, sehr schlecht. In Abb. 16.3 erkennt man, dass der Wirkungsgrad lediglich zwischen 25 und 50 % liegt.

Die Verluste im Serienregler lassen sich stark reduzieren, indem man den linear geregelten Transistor durch einen Schaltregler wie in Abb. 16.2 ersetzt. Um die gewünschte Ausgangsgleichspannung zu erhalten, benötigt man zusätzlich ein Tiefpassfilter, das den zeitlichen Mittelwert bildet. Die Größe der Ausgangsspannung lässt sich in diesem Fall durch das Tastverhältnis bestimmen, mit dem der Schalter geschlossen wird. Wenn man ein $LC$-Tiefpassfilter verwendet, gibt es im Regler keine systematische Verlustquelle mehr und man erreicht einen Wirkungsgrad zwischen 50 und 75 %. Da sich der beschriebene Schaltregler auf der Sekundärseite des Netztransformators befindet, bezeichnet man solche Netzteile auch als sekundärgetaktete Schaltnetzteile.

Stromversorgung

- Netz-Betrieb
  - 50Hz-Trafo
    - Regler linear
    - Regler getaktet sekundär
  - HF-Trafo
    - Regler getaktet primär
- Akku-Betrieb
  - Entladung
    - Regler getaktet sekundär
  - Ladung
    - Regler getaktet primär

**Abb. 16.1.** Varianten zur Stromversorgung

© Springer-Verlag GmbH Deutschland, ein Teil von Springer Nature 2019  
U. Tietze et al., *Halbleiter-Schaltungstechnik*
<!-- page-import:0964:end -->

<!-- page-import:0966:start -->
16.1 Eigenschaften von Netztransformatoren 929

die aufwendigste Methode ist, wird sie wegen des hohen Wirkungsgrads und des geringen Gewichts heute durchwegs eingesetzt.

Einen Nachteil besitzen die getakteten Stromversorgungen jedoch gegenüber den linear geregelten: Sie erzeugen nennenswerte EMV-Störungen (ElektroMagnetische Verträglichkeit). Wenn man einen Leistungstransistor mit einer Frequenz von 1 MHz taktet und in 10 ns ein- und ausschaltet, entsteht ein kammförmiges Störspektrum mit Spektrallinien im 1 MHz-Abstand bis zu Frequenzen von über 100 MHz; dies ist in Abb. 16.4 schematisch dargestellt. Rundfunkempfänger können dadurch wegen der kleinen Antennensignale stark gestört werden. Aus diesem Grund ist eine gute Abschirmung eines getakteten Reglers sehr wichtig. Dieses Problem hat man bei Stromversorgungen mit einem 50 Hz-Trafo und einem linearen Regler nicht.

Bei mobilen Geräten wie Handys, Notebooks oder Elektroautos ist man auf Akkubetrieb angewiesen. Hier ist ein hoher Wirkungsgrad noch wichtiger als bei Netzbetrieb, weil jede Wattstunde, die man im Akku speichern muss, hohe Kosten zur Folge hat und natürlich auch zusätzliches Gewicht mit sich bringt. Bei der Verwendung von Akkus muss man natürlich auch die Ladung sicherstellen. Bei Akku-Betrieb kommen zwei Aufgaben auf die Stromversorgung zu, die ebenfalls in Abb. 16.1 dargestellt sind:

- Bei der Entladung des Akkus müssen die Betriebsspannungen für das Gerät bis zur vollständigen Entladung des Akkus konstant gehalten werden. Dies Aufgabe entspricht der eines Spannungsreglers bei Netzbetrieb; allerdings ist hier ein hoher Wirkungsgrad noch wichtiger. Aus diesem Grund setzt man hier keine linearen Regler ein, sondern ausschließlich Schaltregler.
- Bei der Aufladung des Akkus muss ein Laderegler dafür sorgen, dass der Akku voll geladen, aber nicht überladen wird. Von der richtigen Ladetechnik hängt die Lebensdauer des Akkus entscheidend ab. Um auch hier ein geringes Gewicht zu erreichen, ist für die Akkuladung ein primär getakteter Spannungsregler üblich.

## 16.1 Eigenschaften von Netztransformatoren

Bei der Dimensionierung von Gleichrichterschaltungen spielt der Innenwiderstand $R_i$ des Netztransformators eine große Rolle. Er lässt sich aus den Nenndaten der Sekundärwicklung $U_N$, $I_N$ und dem Verlustfaktor $f_v$ berechnen. Dieser ist definiert als das Verhältnis von Leerlauf- zu Nennspannung:

$$
f_v = \frac{U_L}{U_N}
$$

(16.2)

Daraus folgt für den Innenwiderstand die Beziehung:

$$
R_i = \frac{U_L - U_N}{I_N} = \frac{U_N}{I_N}(f_v - 1)
$$

(16.3)

Nun definieren wir eine Nennlast $R_N = U_N / I_N$ und erhalten aus Gl. (16.3):

$$
R_i = R_N (f_v - 1)
$$

(16.4)

Eine Übersicht über die Daten gebräuchlicher M-Kerntransformatoren ist in Abb. 16.5 zusammengestellt; die entsprechenden Angaben für Ringkerntransformatoren finden sich in Abb. 16.6.

Ringkerntransformatoren sind schwieriger zu wickeln; daraus resultiert besonders bei kleinen Leistungen ein deutlich höherer Preis. Dem stehen aber einige nennenswerte Vorteile gegenüber: ihr magnetisches Streufeld ist deutlich geringer. Die Hauptinduktivität ist
<!-- page-import:0966:end -->

<!-- page-import:0983:start -->
946  16. Stromversorgung

$U_{ref} = U_{BG} \approx 1{,}2\,\mathrm{V}$  
$U_{Temp} \approx 2\,(\mathrm{mV}/\mathrm{K}) \cdot T$

**Abb. 16.32.**  
Bandgap-Referenz

$U_{ref}=\left(1+\dfrac{R_5}{R_4}\right)U_{BG}$

**Abb. 16.33.**  
Erzeugung höherer Referenzspannungen

der beiden Transistoren aus und erhält daraus:

$$
\Delta U_{BE} = U_{BE2} - U_{BE1} = U_T \ln n = \frac{kT}{q}\ln n
\qquad (16.10)
$$

Das ist also eine Spannung, die Proportional zur Absoluten Temperatur ist (PTAT). Ihr Temperaturkoeffizient beträgt:

$$
\frac{d}{dT}(\Delta U_{BE}) = \frac{k}{q}\ln n = \frac{U_T}{T}\ln n \approx 200\,\frac{\mu\mathrm{V}}{\mathrm{K}}
\qquad {}^{n=10}
$$

Um damit den negativen Temperaturkoeffizienten einer Diode von $-1{,}7\,\mathrm{mV}/\mathrm{K}$ zu kompensieren, muss man diese Spannung also mit dem Faktor $A = 7{,}5$ verstärken und zu der Durchlassspannung einer Diode addieren. Das lässt sich auf einfache Weise dadurch erreichen, dass man in der Schaltung in Abb. 16.30 einen gemeinsamen Emitterwiderstand für die beiden Transistoren einfügt. Abbildung 16.32 zeigt diesen Zusatz. Da der Strom $I_{C1}$ und damit auch der gleich große Strom $I_{C2}$ proportional zur Spannung $\Delta U_{BE}$ ist, gilt:

$$
I_{C1} = I_{C2} = \frac{\Delta U_{BE}}{R_1} = \frac{U_T}{R_1}\ln n
$$

Dadurch ergibt sich an $R_3$ ein Spannungsabfall:

$$
U_{Temp} = R_3(I_{C1}+I_{C2}) = 2U_T\frac{R_3}{R_1}\ln n = 2\frac{R_3}{R_1}\Delta U_{BE}
\qquad (16.11)
$$

Durch entsprechende Wahl von $R_1$ und $R_3$ lässt sich demnach jede gewünschte Verstärkung von $\Delta U_{BE}$ einstellen. Bei einem Widerstandsverhältnis $R_3/R_1 = 4{,}25$ ergibt sich der gewünschte Temperaturkoeffizient von $+1{,}7\,\mathrm{mV}/\mathrm{K}$, wenn das Flächenverhältnis der Transistoren von $n = 10$ beträgt. Diese Spannung von $U_{Temp} \approx 0{,}5\,\mathrm{V}$ verwendet man bei der Schaltung in Abb. 16.32 dazu, um den Temperaturkoeffizienten der Basis-Emitterspannung von $T_2$ zu kompensieren. Der Temperaturkoeffizient der Ausgangsspannung wird Null, wenn
<!-- page-import:0983:end -->

<!-- page-import:1001:start -->
964  16. Stromversorgung

Invertierender Wandler

Aufwärts Wandler

Abwärts Wandler

**Abb. 16.64.** Gleichspannungswandler nach dem Ladungspumpen-Prinzip, Switched-Capacitor DC-DC Converter. Die Schalter $S$ und $\overline{S}$ werden im Wechsel eingeschaltet

gegenübergestellt sind. Die 3 Schaltungen beruhen darauf, dass ein Transfer-Kondensator $C_T$ zunächst auf die Eingangsspannung aufgeladen und diese Ladung anschließend an den Ausgang übertragen wird. Die Kombination aus 4 Schalter und dem Transfer-Kondensator erkennt man in jeder der 3 Schaltungen.

Hier ist der invertierende Wandler die gebräuchlichste Schaltung. In der ersten Phase wird der Schalter $S$ eingeschaltet, und der Transfer-Kondensator $C_T$ wird auf die Eingangsspannung $U_e$ aufgeladen. In der zweiten Phase wird der Schalter $\overline{S}$ geschlossen; dadurch wird der Pluspol des Transfer-Kondensators mit Masse verbunden und der Minuspol mit dem Ausgang. Dadurch wird der Filter-Kondensator $C_F$ am Ausgang nach mehreren Schaltzyklen auf die Spannung $-U_e$ aufgeladen. Die Schaltung wird dazu eingesetzt, um in einem Gerät, in dem es nur eine positive Betriebsspannung gibt (z.B. aus einer Batterie), für bestimmte Schaltungsteile eine zusätzliche negative Spannung zu erzeugen.

Bei dem Aufwärts Wandler in Abb. 16.64 wird der Transfer-Kondensator ebenfalls in der ersten Phase auf die Eingangsspannung aufgeladen. In der zweiten Phase wird jedoch sein Minuspol mit der Eingangsspannung verbunden und sein Pluspol mit dem Ausgang. Dadurch wird der Filter-Kondensator $C_F$ am Ausgang nach mehreren Schaltzyklen auf die Spannung $2U_e$ aufgeladen.

Bei dem Abwärtswandler sind die beiden Kondensatoren in Reihe geschaltet, wenn der Schalter $S$ geschlossen wird. Bei gleichen Kondensatoren laden sie sich also beide auf $U_e/2$ auf. In den folgenden Schaltzyklen wird der Transfer-Kondensator im Wechsel
<!-- page-import:1001:end -->

<!-- page-import:1031:start -->
994 16. Stromversorgung

Scheitelwert Eingangsspannung von 230 V $\cdot \sqrt{2} = 325$ V wählt man eine Ausgangsspannung von etwa 400 V.

Die Aufgabe der Ansteuerschaltung in Abb. 16.102 besteht darin, das Tastverhältnis für den Leistungsschalter so zu regeln, dass sich eine sinusförmige Stromaufnahme ergibt und gleichzeitig die gewünschte Ausgangsspannung. Dazu sind zwei Regelkreise erforderlich: Ein Stromregelkreis und ein Spannungsregelkreis. Um sicherzustellen, dass der Stromverlauf sinusförmig und in Phase mit der Netzspannung ist, verwendet man die Ausgangsspannung des Gleichrichters $U_G$ als Referenz für den Strom, der an dem Widerstand den Spannungsabfall $U_I = I_G R_G$ bewirkt. Der $I_G$-Regler stellt seine Ausgangsspannung so ein, dass $U_I = U'_G$ wird. Auf diese Weise wird zwar lediglich der Betrag des Eingangsstroms mit dem Betrag der Eingangsspannung verglichen; auf der Netzseite des Gleichrichters passt dann aber Spannung und Strom für beide Vorzeichen zusammen. Die Arbeitsweise der Schaltung ist in Abb. 16.103 veranschaulicht.

Damit die Ausgangsspannung den gewünschten Wert annimmt, wir über den $U_a$-Regler die Amplitude der Spannung $U'_G$ so eingestellt, dass $kU_a = U_{ref}$ wird. Dazu wird über den Multiplizierer der Sollwert $U'_G$ für den Strom $I_G$ auf die erforderliche Amplitude geregelt. Diese Regelung muss so langsam erfolgen, dass immer $U'_G \sim U_G$ ist, da sonst Verzerrungen im Stromverlauf auftreten. Dann ist der Netzstrom genauso sinusförmig wie die Netzspannung. Seine Amplitude lässt sich bei verlustfreier Schaltung aus der Ausgangsleistung berechnen:

$$
P_N = P_a = \tfrac{1}{2}\hat{I}_N \hat{U}_N = U_a I_a
$$

Daraus erhält man den Verlauf des Netzstroms:

$$
I_N = \hat{I}_N \sin \omega t = 2 I_a \frac{U_a}{\hat{U}_N} \sin \omega t
$$

Es gibt integrierte Steuerbausteine, in denen alle Komponenten zur Steuerung einer Schaltung zur Leistungskorrektur enthalten sind. Man muss dann lediglich noch die in Abb. 16.102 dick gezeichneten Leistungsbauelemente hinzufügen. Um die Welligkeit des Stroms klein zu halten, dimensioniert man die Speicherdrossel meist so, dass der Strom kontinuierlich fließt und nie bis auf Null absinkt. Diese Betriebsart bezeichnet man als Continuous Conduction Mode (CCM). Allerdings ist dann die Diode leitend, wenn der Transistor eingeschaltet wird. Der Drainstrom steigt dann über den fließenden Drosselstrom $I_G$ hinaus an - wie in Abb. 16.88 gezeigt - weil die Diode wegen der Speicherladung während der Sperrverzögerungszeit (reverse recovery time $t_{rr}$) einen Kurzschluss darstellt. Aus diesem Grund ist es hier besonders wichtig, Dioden mit kleiner Speicherladung einzusetzen. Dafür sind die Silizium-Carbid Schottky Dioden besonders geeignet. Normale Schottky-Dioden kommen hier wegen der hohen Spannungen nicht in Betracht.

Die ganze Schaltung zur Leistungsfaktorkorrektur arbeitet auf Netzpotential und weist gegenüber dem Schutzleiter eine Wechselspannung mit einer Amplitude von 325 V auf. Sie ist nichts anderes als ein erweiterter Gleichrichter. Deshalb ist im Anschluss an diese Schaltung ein Gleichspannungswandler mit Potentialtrennung erforderlich, dessen Niederspannungsseite mit dem Schutzleiter verbunden werden kann. Es ist üblich, aus dem Gleichspannungswandler auch die Betriebsspannung für die Steuerung der Leistungsfaktorkorrektur zu entnehmen. Der Gleichspannungswandler läuft auch dann an, wenn die Schaltung zur Leistungsfaktorkorrektur noch nicht arbeitet, denn die minimale Ausgangsspannung des zugrunde liegenden Aufwärtswandlers ist $U_a = U_G$ wenn der Leistungsschalter nicht eingeschaltet wird.
<!-- page-import:1031:end -->
