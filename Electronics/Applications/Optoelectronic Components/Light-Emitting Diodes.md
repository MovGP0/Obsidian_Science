# Light-Emitting Diodes

<!-- page-import:1159:start -->
1122  20. Optoelektronische Bauelemente

**Abb. 20.2.**  
Definition des Raumwinkels $\Phi$. $A$ ist die Kugeloberfläche, die zu dem Öffnungswinkel $\varphi$ gehört.

Bei einem Öffnungswinkel von $\varphi = 66^\circ$ ergibt sich ein Raumwinkel von $\Omega = 1\ \mathrm{sr}$. Bei kleinen Raumwinkeln kann man die Kugeloberfläche näherungsweise durch eine ebene Fläche ersetzen.

Die *Lichtstärke* bestimmt wie groß die Helligkeit einer Lichtquelle erscheint. Das hängt davon ab wie groß der Lichtstrom ist, der in einen bestimmten Raumwinkel fällt:

$$
I = \frac{\Phi}{\Omega}
\qquad
[I] = \frac{\mathrm{lm}}{\mathrm{sr}} = \mathrm{cd}
\qquad (20.3)
$$

Hierbei wird vorausgesetzt, dass die Strahlung im ganzen Raumwinkel gleichmäßig ist; sonst muss man differentielle Größen verwenden. Ihre Einheit ist 1 Candela (cd). Es gilt der Zusammenhang $1\ \mathrm{cd} = 1\ \mathrm{lm/sr}$. Eine Lichtquelle besitzt also die Lichtstärke 1 cd, wenn sie in den Raumwinkel 1 sr den Lichtstrom 1 lm aussendet. Bei Kugelsymmetrie beträgt der gesamte ausgesendete Lichtstrom dann $\Phi_{\mathrm{ges}} = I \Omega_0 = 1\ \mathrm{cd}\ 4\pi\ \mathrm{sr} = 4\pi\ \mathrm{lm}$. Ein Beispiel für die Abstrahlcharakteristik einer Leuchtdiode ist in Abb. 20.3 dargestellt. Definitionsgemäß ist 1 cd die Lichtstärke, die ein schwarzer Körper mit $\frac{1}{60}\ \mathrm{cm}^2 = 1{,}7 \mathrm{mm}^2$ Oberfläche bei der Temperatur des erstarrenden Platins $(1769^\circ \mathrm{C})$ besitzt. Eine große Kerzenflamme (Candela) besitzt die Lichtstärke $I \approx 1\ \mathrm{cd}$.

Bei ausgedehnten Lichtquellen gibt man im allgemeinen die *Leuchtdichte* an. Sie ist definiert als das Verhältnis der Lichtstärke zur leuchtenden Fläche:

$$
L = \frac{I}{A} = \frac{\Phi}{A\,\Omega}
\qquad
[L] = \frac{\mathrm{cd}}{\mathrm{m}^2} = \frac{\mathrm{lm}}{\mathrm{sr}\cdot \mathrm{m}^2}
\qquad (20.4)
$$

Die Einheit der Leuchtdichte war früher das Stilb:

$$
1\ \mathrm{sb} = 1\ \frac{\mathrm{cd}}{\mathrm{cm}^2} = 10^4\ \frac{\mathrm{cd}}{\mathrm{m}^2}
$$

Einige Beispiele für Leuchtdichten sind in Abb. 20.4 zusammengestellt.

**Abb. 20.3.**  
Abstrahlcharakteristik einer Leuchtdiode. Dargestellt ist die relative Lichtstärke in Abhängigkeit vom Abstrahlwinkel $I = f(\alpha)$. Der Öffnungswinkel beträgt in diesem Beispiel $\varphi = 80^\circ$
<!-- page-import:1159:end -->

<!-- page-import:1161:start -->
1124 20. Optoelektronische Bauelemente

| Physikalische Größen | Zusammenhang | Einheiten |
|---|---|---|
| Lichtstrom | $\Phi$ | $1\,\mathrm{lm}=1\,\mathrm{cd\,sr}\,\widehat{=}\,1{,}47\,\mathrm{mW}$ |
| Lichtstärke | $I=\dfrac{d\Phi}{d\Omega}$ | $1\,\mathrm{cd}=1\,\dfrac{\mathrm{lm}}{\mathrm{sr}}\,\widehat{=}\,1{,}47\,\dfrac{\mathrm{mW}}{\mathrm{sr}}$ |
| Leuchtdichte | $L=\dfrac{dI}{dF_n}$ | $1\,\dfrac{\mathrm{cd}}{\mathrm{m}^2}=10^{-4}\,\dfrac{\mathrm{cd}}{\mathrm{cm}^2}=10^{-4}\,\mathrm{sb}$ |
| Beleuchtungsstärke | $E=\dfrac{d\Phi}{dF_n}$ | $1\,\mathrm{lx}=1\,\dfrac{\mathrm{lm}}{\mathrm{m}^2}\,\widehat{=}\,1{,}47\,\dfrac{\mathrm{mW}}{\mathrm{m}^2}$ |

**Abb. 20.6.** Zusammenstellung von fotometrischen Größen. Die optischen Leistungsangaben beziehen sich auf eine Wellenlänge von $\lambda = 555\,\mathrm{nm}$

$$
L=\frac{\Phi}{A\,\Omega}=\frac{100\,\mathrm{lm}}{0{,}1\,\mathrm{m}^2\cdot 0{,}478\,\mathrm{sr}}=2100\,\frac{\mathrm{cd}}{\mathrm{m}^2}=0{,}21\,\mathrm{sb}
$$

Neben den angegebenen Fotometrischen Einheiten sind besonders in der amerikanischen Literatur weitere Einheiten gebräuchlich, die wir in Abb. 20.6 zusammengestellt haben. Hier sind die exakten Definitionen der fotometrischen Größen angegeben. Man muss die differentiellen Definitionen immer dann verwenden, wenn sich die Größe in dem betrachteten Bereich ändert.

## 20.2 Leuchtdioden

Leuchtdioden (Light Emitting Diodes, LED) sind spezielle Dioden, bei denen die Energie, die beim Übergang der Elektronen vom Leitungsband ins Valenzband frei wird, in Form von Licht abgegeben werden kann. Dabei ist die Energie der Fotonen $W=h\cdot f$ bestenfalls gleich dem Bandabstand $\Delta W$. Die korrespondierende Wellenlänge beträgt:

$$
\lambda_{min}=\frac{c}{f}=\frac{h\cdot c}{\Delta W}=\frac{1240\,\mathrm{nm}}{\Delta W/\mathrm{eV}}
$$

(20.6)

Darin ist Plancksches Wirkungsquantum $h=6{,}626\cdot 10^{-34}\,\mathrm{Js}=4{,}136\cdot 10^{-15}\,\mathrm{eVs}$ und die Lichtgeschwindigkeit $c=2{,}998\cdot 10^8\,\mathrm{m/s}$. Daher könnte Silizium mit einem Bandabstand von $\Delta W=1{,}1\,\mathrm{eV}$ infrarotes Licht mit einer Wellenlänge von $\lambda=1127\,\mathrm{nm}$ aussenden. Dieser optische Übergang tritt aber nicht auf, da der Impuls der Elektronen im Leitungs- und Valenzband unterschiedlich ist. Da die Fotonen keinen Impuls besitzen, würde dadurch der Impulssatz verletzt.

**Abb. 20.7.** Typische Spektren von Leuchtdioden
<!-- page-import:1161:end -->

<!-- page-import:1162:start -->
20.2 Leuchtdioden 1125

**Abb. 20.8.** Schaltsymbol und typische Kennlinien von Leuchtdioden. Siliziumdiode zum Vergleich

Aus diesem Grund verwendet man Mischkristalle von 3- und 5-wertigen Elementen z.B. GaAs, GaP oder InGaN. Dort ist die Impulsbedingung erfüllt und der Bandabstand lässt sich durch das Mischverhältnis so einstellen, dass sich die gewünschte Wellenlänge bzw. Farbe ergibt. Beispiele für die Spektren von Leuchtdioden sind in Abb. 20.7 dargestellt. Man erkennt, dass sie scharf begrenzt sind. Zur Erzeugung von weißem Licht gibt es zwei Möglichkeiten: Man kann entweder eine rote, grüne und blaue Leuchtdiode mit entsprechenden Intensitäten kombinieren oder eine blaue Leuchtdiode einsetzen, bei der man mit einem Farbconverter einen Teil des blauen Lichts durch Fluoreszenz in langwelligeres Licht umwandelt. Dies ist die kostengünstigere Lösung. Das typische Spektrum für eine weiße Leuchtdiode mit Farbconverter ist in Abbildung 20.7 ebenfalls eingezeichnet.

Kennlinien von Leuchtdioden sind in Abb. 20.8 schematisch dargestellt. Man sieht, dass die Leuchtdioden eine wesentlich größere Durchlassspannung besitzen als Silizium-Dioden. Die Ursache ist der größere Bandabstand $\Delta W$, der gemäß (20.6) erforderlich ist, um sichtbares Licht zu erzeugen.

Der Lichtstrom von $\Phi = 1\ \mathrm{lm}$ ist bei einer Wellenlänge von $\lambda = 555\ \mathrm{nm}$ definiert als eine optische Leistung von $P_L = 1{,}47\ \mathrm{mW}$. Daraus folgt der Zusammenhang

$$
P_L = 1{,}47\ \frac{\mathrm{mW}}{\mathrm{lm}}\ \Phi
\qquad \text{bzw.} \qquad
\Phi = 680\ \frac{\mathrm{lm}}{\mathrm{W}}\ P_L
\qquad (20.7)
$$

Bei einer Lichtquelle mit einem Wirkungsgrad von 100% ist die elektrische Leistung $P_{el}$ gleich der optischen Leistung $P_L$. In Abb. 20.9 sind die Wirkungsgerade handelsüblicher Lichtquellen gegenübergestellt. Man sieht, dass moderne Leuchtdioden den Wirkungsgrad von Energiesparlampen übertreffen. Neben dem optischen Wirkungsgrad ist hier auch der elektrische Wirkungsgrad angegeben: $P_L / P_{el} = 1{,}47\,(\mathrm{mW}/\mathrm{lm})(\Phi / P_{el})$.

| Lichtquelle | Optischer Wirkungsgrad $\Phi / P_{el}$ | Elektrischer Wirkungsgrad $P_L / P_{el}$ | Lebensdauer |
|---|---:|---:|---:|
| Glühlampe, klar | 10 lm/W | 1,5 % | 2.000 h |
| Halogenlampe | 12 lm/W | 1,8 % | 2.000 h |
| Energiesparlampe | 50 lm/W | 7,4 % | 8.000 h |
| Leuchtröhre | 80 lm/W | 12 % | 10.000 h |
| Leuchtdiode | … 100 lm/W | … 15 % | … 40.000 h |

**Abb. 20.9.** Vergleich verschiedener Lichtquellen. Die Variationsbreite ist sehr groß; die Angaben sind lediglich Richtwerte.
<!-- page-import:1162:end -->
