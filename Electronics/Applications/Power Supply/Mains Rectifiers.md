# Mains Rectifiers

<!-- page-import:0965:start -->
928 16. Stromversorgung

$U_N$ → Netz-Transformator → Gleich-richter → Spannungsregler → $U_a$

Linear geregelt

$U_N$ → Netz-Transformator → Gleich-richter → Leistungsschalter → Filter → $U_a$

Sekundär-getaktet

PWM → Leistungsschalter  
$U_a$ → Regler → PWM

Gleichspannungswandler ohne Potentialtrennung

$U_N$ → Gleich-richter → Leistungsschalter → HF-Transformator → Gleich-richter → Filter → $U_a$

Primär-getaktet

PWM → Leistungsschalter  
$U_a$ → Regler → Signal-koppler → PWM

Gleichspannungswandler mit Potentialtrennung

**Abb. 16.2.** Stromversorgung bei Netz-Betrieb. Die grau hinterlegten Blöcke dienen zur Potentialtrennung. PWM = Puls Width Modulator, Pulsbreitenmodulator

Um den Wirkungsgrad weiter zu verbessern, muss man den 50 Hz-Transformator durch einen Hochfrequenztransformator ersetzen, der mit Frequenzen zwischen 20 kHz und 1 MHz betrieben wird. Hier lassen sich die Verluste sehr klein halten, weil der Transformator dann nur wenige Windungen erfordert. Der Aufwand ist hier allerdings am größten wie man in Abb. 16.2 erkennt. Hier muss man die Netzspannung zunächst gleichrichten und dann in eine hochfrequente Wechselspannung umwandeln bevor man sie transformieren kann. Damit die Ausgangsspannung den gewünschten Wert annimmt, muss die Pulsbreite auch in diesem Fall geregelt werden. Dazu ist auch im Regelungspfad eine Signalübertragung mit Potentialtrennung erforderlich. Obwohl die primär-getaktete Stromversorgung

$\eta$

100%  
75%  
50%  
25%  
0%

linear geregelt  
sekundär getaktet  
primär getaktet

**Abb. 16.3.**  
Vergleich der Wirkungsgrade

0 1 2 3 4 5 [unclear] 99 101 $f$/MHz

**Abb. 16.4.**  
EMV-Spektrum eines Schaltnetzteils mit einer Taktfrequenz von 1 MHz
<!-- page-import:0965:end -->

<!-- page-import:0967:start -->
930 16. Stromversorgung

| Kern-Typ (Seitenlänge) | Nennleistung | Verlustfaktor | Prim. Windungszahl | Prim. Draht-Durchmesser | Norm. sek. Windungszahl | Norm. sek. Draht-Durchmesser |
|---|---:|---:|---:|---:|---:|---:|
| [mm] | $P_N$ [W] | $f_v$ | $w_1$ | $d_1$ [mm] | $w_2/U_2$ [1/V] | $d_2/\sqrt{I_2}$ [mm/$\sqrt{\mathrm{A}}$] |
| M 42 | 4 | 1,31 | 4716 | 0,09 | 28,00 | 0,61 |
| M 55 | 15 | 1,20 | 2671 | 0,18 | 14,62 | 0,62 |
| M 65 | 33 | 1,14 | 1677 | 0,26 | 8,68 | 0,64 |
| M 74 | 55 | 1,11 | 1235 | 0,34 | 6,24 | 0,65 |
| M 85a | 80 | 1,09 | 978 | 0,42 | 4,83 | 0,66 |
| M 85b | 105 | 1,06 | 655 | 0,48 | 3,17 | 0,67 |
| M 102a | 135 | 1,07 | 763 | 0,56 | 3,72 | 0,69 |
| M 102b | 195 | 1,05 | 513 | 0,69 | 2,45 | 0,71 |

**Abb. 16.5.** Typische Daten von M-Kerntransformatoren für eine Primärspannung von  
$U_{1\,eff}=230\ \mathrm{V},\ 50\mathrm{Hz}$

| Außen-Durchmesser-ca. | Nennleistung | Verlustfaktor | Prim. Windungszahl | Prim. Draht-Durchmesser | Norm. sek. Windungszahl | Norm. sek. Draht-Durchmesser |
|---|---:|---:|---:|---:|---:|---:|
| $D$ [mm] | $P_N$ [W] | $f_v$ | $w_1$ | $d_1$ [mm] | $w_2/U_2$ [1/V] | $d_2/\sqrt{I_2}$ [mm/$\sqrt{\mathrm{A}}$] |
| 60 | 10 | 1,18 | 3500 | 0,15 | 19,83 | 0,49 |
| 61 | 20 | 1,18 | 2720 | 0,18 | 14,83 | 0,54 |
| 70 | 30 | 1,16 | 2300 | 0,22 | 12,33 | 0,55 |
| 80 | 50 | 1,15 | 2140 | 0,30 | 11,25 | 0,56 |
| 94 | 75 | 1,12 | 1765 | 0,36 | 9,08 | 0,58 |
| 95 | 100 | 1,11 | 1410 | 0,40 | 7,08 | 0,60 |
| 100 | 150 | 1,09 | 1100 | 0,56 | 5,42 | 0,61 |
| 115 | 200 | 1,08 | 820 | 0,60 | 4,00 | 0,62 |
| 120 | 300 | 1,07 | 715 | 3,42 | 3,42 | 0,63 |

**Abb. 16.6.** Typische Daten von Ringkerntransformatoren für eine Primärspannung von  
$U_{1\,eff}=230\ \mathrm{V},\ 50\mathrm{Hz}$

größer; daraus resultieren ein kleinerer Magnetisierungsstrom und geringere Leerlaufverluste. Zur genaueren Berechnung verwendet man am besten den *Magnetic Designer* von Intusoft (Thomatronik).

## 16.2 Netzgleichrichter

### 16.2.1 Einweggleichrichter

Die einfachste Methode, eine Wechselspannung gleichzurichten, besteht darin, wie in Abb. 16.7 einen Kondensator über eine Diode aufzuladen. Wenn der Ausgang unbelastet ist, wird der Kondensator $C_L$ während der positiven Halbschwingung auf den Scheitelwert $U_{a,0}=\sqrt{2}U_{L,eff}-U_D$ aufgeladen. Darin ist $U_D$ die Durchlassspannung der Diode. Die maximale Sperrspannung tritt auf, wenn die Transformatorspannung ihren negativen Scheitelwert erreicht. Sie beträgt demnach etwa $2\sqrt{2}U_{L,eff}$.

Bei Belastung entlädt der Verbraucherwiderstand $R_v$ den Kondensator $C_L$, solange die Diode sperrt. Erst wenn die Leerlaufspannung des Transformators um $U_D$ größer wird die Diode sperrt. Erst wenn die Leerlaufspannung des Transformators um $U_D$ größer wird
<!-- page-import:0967:end -->

<!-- page-import:0968:start -->
16.2 Netzgleichrichter 931

Leerlauf-Ausgangsspannung:
$U_{a,0}=\sqrt{2}U_{L,eff}-U_D$

Last-Ausgangsspannung:
$U_{a,\infty}=U_{a,0}\left(1-\sqrt{R_i/R_v}\right)$

Maximale Sperrspannung:
$U_{Sperr}=2\sqrt{2}U_{L,eff}$

Mittlerer Durchlassstrom:
$\bar I_D=I_a$

Periodischer Spitzenstrom:
$I_{DS}=\dfrac{U_a}{\sqrt{R_i\,R_v}}$

Brummspannung:
$U_{Br,ss}=\dfrac{I_a}{C_L\,f_N}\left(1-\frac{1}{2}\sqrt[4]{R_i/R_v}\right)$

Minimale Ausgangsspannung:
$U_{a,min}\approx U_{a,\infty}-\dfrac{2}{3}U_{Br,ss}$

**Abb. 16.7.** Einweggleichrichter

als die Ausgangsspannung, wird der Kondensator wieder nachgeladen. Welche Spannung er dabei erreicht, hängt vom Innenwiderstand $R_i$ des Transformators ab. Abbildung 16.8 zeigt den Verlauf der Ausgangsspannung im eingeschwungenen Zustand; beim Einschalten fließen während der ersten Schwingungen viel größere Ströme. Wegen des ungünstigen Verhältnisses von Nachlade- zu Entladezeit sinkt die Ausgangsspannung schon bei geringer Belastung stark ab. Deshalb ist die Schaltung nur bei kleinen Ausgangsströmen empfehlenswert. Die Herleitung der angegebenen Beziehungen folgt beim Brückengleichrichter im nächsten Abschnitt.

**Abb. 16.8.** Spannungs- und Stromverlauf beim Einweggleichrichter
<!-- page-import:0968:end -->

<!-- page-import:0969:start -->
932 16. Stromversorgung

*Leerlauf-Ausgangsspannung:*  
$U_{a,0}=\sqrt{2}U_{L,eff}-2U_D$

*Last-Ausgangsspannung:*  
$U_{a,\infty}=U_{a,0}\left(1-\sqrt{\frac{R_i}{2R_v}}\right)$

*Maximale Sperrspannung:*  
$U_{Sperr}=\sqrt{2}U_{L,eff}$

*Mittlerer Durchlassstrom:*  
$\bar I_D=\frac{1}{2}I_a$

*Periodischer Spitzenstrom:*  
$I_{DS}=\frac{U_{a,0}}{\sqrt{2R_iR_v}}$

*Brummspannung:*  
$U_{Br,ss}=\frac{I_a}{2C_Lf_N}\left(1-\sqrt[4]{\frac{R_i}{2R_v}}\right)$

*Minimale Ausgangsspannung:*  
$U_{a,min}\approx U_{a,\infty}-\frac{2}{3}U_{Br,ss}$

*Transformator-Nennleistung:*  
$P_N=(1{,}2\dots2)\,U_{a,\infty}\cdot I_a$

**Abb. 16.9.** Brückengleichrichter

## 16.2.2 Brückengleichrichter

Das Verhältnis von Nachlade- zu Entladezeit lässt sich wesentlich verbessern, indem man den Ladekondensator $C_L$ während der positiven *und* negativen Halbschwingung auflädt. Das erreicht man mit der Brückenschaltung in Abb. 16.9. Den Vorteil sieht man auch wenn man den Spannungsverlauf im Zweiweggleichrichter in Abb. 16.10 mit dem des Einweggleichrichters in Abb. 16.8 vergleicht.

Die Dioden verbinden während der Nachladezeit den jeweils negativen Pol des Transformators mit Masse und den positiven mit dem Ausgang. Die maximal auftretende Sperrspannung ist gleich der Leerlauf-Ausgangsspannung:

$$
U_{a,0}=\sqrt{2}U_{L,eff}-2U_D=\sqrt{2}U_{N,eff}\,f_v-2U_D
$$

(16.5)

Sie ist also nur halb so groß wie beim Einweggleichrichter.

Zur Berechnung des Spannungsabfalls bei Belastung gehen wir zunächst von einem unendlich großen Ladekondensator aus. Dann ist die Ausgangsspannung eine reine Gleichspannung, die wir mit $U_{a\infty}$ bezeichnen. Je weiter die Ausgangsspannung infolge der Belastung absinkt, desto größer wird die Nachladedauer. Der Gleichgewichtszustand ist dann erreicht, wenn die zugeführte Ladung gleich der abgegebenen Ladung ist. Daraus ergibt sich:

$$
U_{a,\infty}=U_{a,0}\left(1-\sqrt{\frac{R_i}{2R_v}}\right)
$$

(16.6)

Darin ist $R_v=U_{a,\infty}/I_a$ der Verbraucherwiderstand. Die Herleitung dieser Beziehung ist mit einer längeren Approximationsrechnung verbunden, bei der die Sinusschwingung [unclear]
<!-- page-import:0969:end -->

<!-- page-import:0970:start -->
16.2 Netzgleichrichter 933

**Abb. 16.10.** Spannungs- und Stromverlauf beim Zweiweggleichrichter

durch Parabelbögen angenähert wird. Sie soll hier übergangen werden. Wie der Vergleich mit der Einweggleichrichterschaltung in Abb. 16.7 zeigt, geht beim Vollweggleichrichter nur der halbe Innenwiderstand des Transformators in den Spannungsabfall bei Belastung ein.

Um den Gleichrichter richtig dimensionieren zu können, muss man die auftretenden Ströme kennen. Wegen der Erhaltung der Ladung ist der mittlere Durchlassstrom durch jeden Brückenzweig gleich dem halben Ausgangsstrom. Da die Durchlassspannung nur wenig vom Strom abhängt, ergibt sich die Verlustleistung einer Diode zu:

$$
P_D = \frac{1}{2} U_D I_a
$$

Während der Aufladezeit treten periodisch Spitzenströme $I_{DS}$ auf, die um ein Vielfaches größer sein können als der Ausgangsstrom:

$$
I_{DS} = \frac{\hat{U}_L - 2U_D - U_{a,\infty}}{R_i} = \frac{U_{a,0} - U_{a,\infty}}{R_i}
$$

Mit Gl. (16.6) folgt daraus:

$$
I_{DS} = \frac{U_{a,0}}{\sqrt{2R_iR_v}}
$$

Man erkennt, dass der Innenwiderstand $R_i$ der Wechselspannungsquelle einen entscheidenden Einfluss auf den Spitzenstrom hat. Ist die Wechselspannungsquelle sehr niederohmig, kann es sich als notwendig erweisen, einen Widerstand in Reihe zu schalten, um den maximalen Spitzenstrom des Gleichrichters nicht zu überschreiten. Dies ist besonders bei der direkten Gleichrichtung der Netzspannung zu berücksichtigen. Die Zweiweggleichrichtung ist auch in dieser Beziehung günstiger als die Einweggleichrichtung, da der Spitzenstrom um den Faktor $\sqrt{2}$ kleiner ist.

Der Effektivwert des pulsierenden Ladestroms ist größer als der arithmetische Mittelwert. Deshalb muss die Gleichstromleistung kleiner bleiben als die Nennleistung des Transformators für ohmsche Last, wenn die zulässige Verlustleistung im Transformator nicht überschritten werden soll. Die Gleichstromleistung ergibt sich aus der abgegebenen
<!-- page-import:0970:end -->

<!-- page-import:0972:start -->
16.2 Netzgleichrichter 935

Mit Gln. (16.5) und (16.6) folgt daraus:

$$
U_{a,\infty}=\left(\sqrt{2}U_{N,eff}\,f_v-2U_D\right)\left(1-\sqrt{\frac{R_i}{2R_v}}\right)
$$

$$
=\left(\sqrt{2}\cdot30\,\mathrm{V}\cdot1,15-2\,\mathrm{V}\right)\left(1-\sqrt{\frac{2{,}65\,\Omega}{2\cdot32\,\mathrm{V}/1\,\mathrm{A}}}\right)\approx37{,}3\,\mathrm{V}
$$

Die Spannung ist also um etwa 5 V höher als oben verlangt. Im nächsten Iterationsschritt reduzieren wir die Transformator-Nennspannung um diesen Betrag und erhalten entsprechend:

$$
R_i=1{,}84\,\Omega \qquad U_{a,\infty}=32{,}1\,\mathrm{V}
$$

Damit wird bereits der gewünschte Wert erreicht. Die Transformatordaten lauten also:

$$
U_{N,eff}\approx25\,\mathrm{V} \quad,\quad I_{N,eff}=\frac{P_N}{U_N}\approx2\,\mathrm{A}
$$

Aus Abb. 16.6 entnehmen wir damit die Wickeldaten für eine Primärspannung von 220 V:

$$
w_1=2140 \qquad,\qquad d_1=0{,}3\,\mathrm{mm}
$$

$$
w_2=11{,}25\,\frac{1}{\mathrm{V}}\cdot25\,\mathrm{V}=281 \qquad,\qquad d_2=0{,}56\,\frac{\mathrm{mm}}{\sqrt{\mathrm{A}}}\cdot\sqrt{2\,\mathrm{A}}=0{,}79\,\mathrm{mm}
$$

Die Kapazität des Ladekondensators ergibt sich aus Gl. (16.8) zu:

$$
C_L=\frac{I_a}{2U_{Br,ss}f_N}\left(1-\sqrt[4]{\frac{R_i}{2R_v}}\right)
$$

$$
=\frac{1\,\mathrm{A}}{2\cdot3\,\mathrm{V}\cdot50\,\mathrm{Hz}}\left(1-\sqrt[4]{\frac{1{,}84\,\Omega}{2\cdot32\,\Omega}}\right)\approx2000\,\mu\mathrm{F}
$$

Die Leerlauf-Ausgangsspannung beträgt 39 V. Diese Spannungsfestigkeit muss der Kondensator mindestens besitzen.

Bei Transformatoren mit mehreren Sekundärwicklungen verläuft die Rechnung genau wie oben. Für $P_N$ wird jeweils die Leistung der betreffenden Sekundärwicklung eingesetzt. Die Gesamtleistung ergibt sich als Summe der Teilleistungen. Sie ist für die Auswahl des Kerns und damit für $f_v$ maßgebend.

## 16.2.3 Mittelpunkt-Schaltung

### 16.2.3.1 Grundschaltung

Eine Vollweggleichrichtung lässt sich auch dadurch erreichen, dass man zwei gegenphasige Wechselspannungen einweggleichrichtet. Dieses Prinzip zeigt die Mittelpunktsschaltung in Abb. 16.11. An den angegebenen Daten erkennt man, dass dabei die Vorteile der Brückenschaltung erhalten bleiben.

Ein zusätzlicher Vorteil ergibt sich dadurch, dass der Strom jeweils nur durch eine Diode fließen muss und nicht durch zwei wie bei der Brückenschaltung. Dadurch halbiert sich der Spannungsverlust, der durch die Durchlassspannung der Dioden verursacht wird. Andererseits verdoppelt sich der Innenwiderstand des Transformators, da jede Teilwicklung für die halbe Ausgangsleistung zu dimensionieren ist. Dadurch wird der Spannungsverlust wieder
<!-- page-import:0972:end -->

<!-- page-import:0973:start -->
936 16. Stromversorgung

Leerlaufspannung: $U_{a,0}=\sqrt{2}U_{L,\mathrm{eff}}-U_D$

Last-Ausgangsspannung: $U_{a,\infty}=U_{a,0}\left(1-\sqrt{\frac{R_i}{2R_v}}\right)$

Maximale Sperrspannung: $U_{\mathrm{Sperr}}=2\sqrt{2}U_{L,\mathrm{eff}}$

Mittlerer Durchlassstrom: $\bar I_D=\frac{1}{2}I_a$

Periodischer Spitzenstrom: $I_{DS}=\frac{U_{a,0}}{\sqrt{2R_i\,R_v}}$

Brummspannung: $U_{Br,ss}=\frac{I_a}{2C_Lf_N}\left(1-4\sqrt{\frac{R_i}{2R_v}}\right)$

Minimale Ausgangsspannung: $U_{a,\min}\approx U_{a,\infty}-\frac{2}{3}U_{Br,ss}$

**Abb. 16.11.** Mittelpunktschaltung

vergrößert. Welcher Effekt überwiegt, hängt vom Verhältnis der Ausgangsspannung zur Durchlassspannung der Diode ab. Bei kleinen Ausgangsspannungen ist die Mittelpunktschaltung günstiger, bei großen Ausgangsspannungen der Brückengleichrichter.

### 16.2.3.2 Doppelte Mittelpunktschaltung

Bei der Mittelpunktschaltung in Abb. 16.11 bleiben jeweils die negativen Halbwellen ungenutzt. Man kann sie in einer zweiten Mittelpunktschaltung mit umgepolten Dioden gleichrichten und erhält dann gleichzeitig eine negative Gleichspannung. Diese Möglichkeit zur Erzeugung erdsymmetrischer Spannungen ist in Abb. 16.12 dargestellt. Für die benötigten vier Dioden lässt sich ein integrierter Brückengleichrichter einsetzen. Die Nennleistung des Transformators sollte auch hier das 1,2- bis 2-fache der Gleichstromleistung betragen.

**Abb. 16.12.**  
Doppelte Mittelpunktschaltung für symmetrische Ausgangsspannungen.  
Kenngrößen wie in Abb. 16.11.
<!-- page-import:0973:end -->
