# Passive Field-Effect Transistor Mixers

<!-- page-import:1427:start -->
1390 25. Mischer

$a$ in Gleichlage $(f_{HF} > f_{LO})$

$s_{HF}(t) = a(t)\cos[\omega_{HF} t + \varphi(t)]$

$2\cos \omega_{LO} t$

$s_M(t) = a(t)\cos[(\omega_{HF} - \omega_{LO})t + \varphi(t)]$
$+\, a(t)\cos[(\omega_{HF} + \omega_{LO})t + \varphi(t)]$

$s_{ZF}(t)$

$|S_{ZF}| \qquad |S_{HF}|$

$f_{ZF} = f_{HF} - f_{LO} \qquad f_{LO} \qquad f_{HF} \qquad f_{HF} + f_{LO} \qquad f$

$b$ in Kehrlage $(f_{HF} < f_{LO})$

$s_{HF}(t) = a(t)\cos[\omega_{HF} t + \varphi(t)]$

$2\cos \omega_{LO} t$

$s_M(t) = a(t)\cos[(\omega_{LO} - \omega_{HF})t - \varphi(t)]$
$+\, a(t)\cos[(\omega_{LO} + \omega_{HF})t + \varphi(t)]$

$s_{ZF}(t)$

$|S_{ZF}| \qquad |S_{HF}|$

$f_{ZF} = f_{LO} - f_{HF} \qquad f_{HF} \qquad f_{LO} \qquad f_{LO} + f_{HF} \qquad f$

**Abb. 25.4.** Zeitsignale und Betragsspektren beim Abwärtsmischer

von denen eines nach dem Mischer ausgewählt werden muss; entsprechend setzt der Abwärtsmischer zwei HF-Signale in ein ZF-Signal um, so dass hier eines der HF-Signale vor dem Mischer ausgewählt werden muss.

$|S_{ZF}| \qquad |S_{HF,Sp}| \qquad |S_{HF}|$

$f_{ZF} = f_{HF} - f_{LO}$
$= f_{LO} - f_{HF,Sp}$

$f_{HF,Sp} \qquad f_{LO} \qquad f_{HF} \qquad f_{HF,Sp} + f_{LO} \qquad f_{HF} + f_{LO} \qquad f$

**Abb. 25.5.** Spiegelfrequenz $f_{HF,Sp}$ bei einem Abwärtsmischer in Gleichlage. Die Frequenzfolge des Spiegelsignals $|S_{HF,Sp}|$ wird aufgrund der Kehrlage invertiert.
<!-- page-import:1427:end -->

<!-- page-import:1484:start -->
25.4 Passsive Mischer mit Feldeffekttransistoren 1447

Abb. 25.48. Gegentaktmischer mit 180°-Hybrid

wird die Entkopplung des LO-Kreises vom ZF- und vom HF-Kreis beim Gegentaktmischer mit 180°-Hybrid bereits mit *einem* Hybrid erreicht, während beim Gegentaktmischer mit Übertragern zwei Übertrager benötigt werden.

Bei Frequenzen oberhalb 10 GHz werden häufig Eintaktmischer eingesetzt; dabei wird die Summation des LO- und des ZF-Signals, die in Abb. 25.19a mit einem Übertrager erfolgt, mit gekoppelten Leitungen vorgenommen.

## 25.4 Passive Mischer mit Feldeffekttransistoren

Im Abschnitt 3.1.3 haben wir gezeigt, wie man einen Feldeffekttransistor als steuerbaren Widerstand einsetzen kann, und im Abschnitt 25.3 haben wir gesehen, dass Mischer mit Dioden auf dem Prinzip eines mit der LO-Spannung variierenden Kleinsignalwiderstands beruhen. Es liegt also nahe, die Dioden in den im Abschnitt 25.3 beschriebenen Mischern durch Feldeffekttransistoren zu ersetzen; Abb. 25.49a zeigt dies am Beispiel eines Eintaktmischers. In diskreten passiven Fet-Mischern werden ausschließlich Sperrschicht-Fets mit Schottky-Gate-Kontakt (*MESFET, metal-semiconductor field-effect transistor*) verwendet, meist auf Gallium-Arsenid-Basis (*GaAs-MESFET*). In integrierten Schaltungen werden Mosfets verwendet. Wegen der höheren Beweglichkeit der Ladungsträger werden ausschließlich n-Kanal-Fets verwendet.

Während der Kleinsignalwiderstand einer Diode durch den LO-Strom gesteuert wird, wird der Kanalwiderstand $R_{DS,on}$ eines Feldeffekttransistors durch die Spannung am Gate-Anschluss bestimmt; dennoch liegt keine Trennung zwischen dem LO-Kreis und den ZF- und HF-Kreisen vor, da das hochfrequente LO-Signal über die im Ersatzschaltbild in Abb. 25.49b gezeigten Gate-Kanal-Kapazitäten $C_{GS}$ und $C_{GD}$ in die ZF- und HF-Kreise eingekoppelt wird. Aufgrund der hohen Frequenzen müssen wir auch die Bahnwiderstände $R_G$, $R_S$ und $R_D$ berücksichtigen.

Am Source- und am Drain-Anschluss liegen nur die mittelwertfreien Spannungen $u_{ZF}$ und $u_{HF}$ an; deshalb gilt für die mittlere Drain-Source-Spannung $U_{DS} = 0$. Da Feldeffekttransistoren in passiven Mischern symmetrisch aufgebaut sind, sind Source und Drain in diesem Fall gleichwertig. Man deutet dies im Schaltsymbol dadurch an, dass der Gate-Anschluss in die Mitte des Kanals verschoben wird.

Wir können uns hier auf eine Untersuchung des LO-Kreises beschränken, aus der wir den zeitlichen Verlauf des Kanalwiderstands $R_{DS,on}$ und des für den Mischvorgang maßgebenden Leitwerts

$$
g_F(t) = \frac{1}{R_{DS,on}(t) + R_S + R_D}
$$

erhalten.
<!-- page-import:1484:end -->

<!-- page-import:1485:start -->
1448 25. Mischer

a Einsatz eines FETs anstelle der Diode

b FET-Ersatzschaltbild

Abb. 25.49. Prinzip eines passiven Eintaktmischers mit Feldeffekttransistor

erhalten. Der Leitwert $g_F(t)$ entspricht dem Kleinsignalleitwert $g_D(t)$ bei Diodenmischern, so dass wir anschließend die Gleichungen für Diodenmischer verwenden können; wir setzen deshalb den Abschnitt 25.3 als bekannt voraus.

## 25.4.1 Eintaktmischer

Abbildung 25.50a zeigt das Schaltbild eines *Eintakt-Fet-Mischers*. Die Spannung $U_{LO}$ ist eine Großsignalspannung, mit der der Kanalwiderstand des Fets moduliert wird; die Spannungen $u_{ZF}$ und $u_{HF}$ sind Kleinsignalspannungen. Die Trennung der Frequenzen erfolgt wie beim Eintaktmischer mit Diode mit Hilfe von drei schmalbandigen Parallelschwingkreisen. Da die Kapazitäten eines Fets wesentlich größer sind als die einer Mischerdiodе, muss man bei der Dimensionierung der Parallelschwingkreise die am jeweiligen Anschluss wirksame Kapazität des Fets berücksichtigen. Der Arbeitspunkt des Fets wird mit der Gleichspannung $U_{GS,0}$ eingestellt. Der LO-Kreis und die Arbeitspunkteinstellung werden über die Koppellelemente $C_k$ und $L_k$ entkoppelt.

### 25.4.1.1 LO-Kreis

Abbildung 25.50b zeigt den LO-Kreis des Eintakt-Fet-Mischers; dabei ist berücksichtigt, dass die Parallelschwingkreise am ZF- und am HF-Anschluss bei der LO-Frequenz näherungsweise als Kurzschluss wirken. Außerdem haben wir die Koppelinduktivität $L_k$ eliminiert, indem wir die Gleichspannungsquelle $U_{GS,0}$ in den Fußpunkt der Induktivität $L_{LO}$ des LO-Parallelschwingkreises verschoben haben; dabei muss auch die Koppelkapazität $C_k$ verschoben werden, damit kein Gleichstrom in Richtung LO-Generator fließen kann. Wir betrachten den LO-Kreis zunächst ohne das in Abb. 25.50b gezeigte Anpassnetzwerk; in diesem Fall sind die Wechselspannungsanteile der Spannungen $U_{LO}$ und $U_{GS}$ gleich.
<!-- page-import:1485:end -->

<!-- page-import:1486:start -->
25.4 Passive Mischer mit Feldeffekttransistoren 1449

a Schaltbild mit Signalquellen und HF-Lastwiderstand

b LO-Kreis. Die Verschiebung der Spannungsquelle $U_{GS,0}$ wird im Text erläutert.

c Kleinsignalersatzschaltbild für den HF- und den ZF-Kreis

**Abb. 25.50. Eintakt-Fet-Mischer**

#### 25.4.1.1.1 Kapazitäten

Aufgrund des symmetrischen Aufbaus des Fets gilt $C_{GS} = C_{GD}$ und $R_D = R_S$; deshalb kann man das Ersatzschaltbild des Fets durch ein RC-Glied mit

$$
C'_G = C_{GS} + C_{GD} \quad,\quad R'_G = R_G + R_S \parallel R_D
$$

ersetzen, siehe Abb. 25.51.

Bei den Gate-Kanal-Kapazitäten handelt es sich im Falle eines Sperrschicht-Fets um nichtlineare Sperrschichtkapazitäten, für die gemäß Abb. 3.43 auf Seite 223 die Gleichungen (3.37) und (3.38) mit den angegebenen Entsprechungen gelten; daraus folgt:

$$
C'_G = C'_G(U_{G'S'}) = C_{GS}(U_{G'S'}) + C_{GD}(U_{G'D'}) \qquad \overset{U_{G'S'}=U_{G'D'}}{=} \frac{C_{S0,S} + C_{S0,D}}{\left(1 - \frac{U_{G'S'}}{U_{Diff}}\right)^{m_S}}
$$

Bei einem Mosfet muss man die in Abb. 3.35 auf Seite 215 gezeigten Kapazitäten und deren Verlauf in Abhängigkeit von $U_{G'S'}$ berücksichtigen, siehe Abb. 3.36. Da der Arbeitspunkt
<!-- page-import:1486:end -->

<!-- page-import:1487:start -->
1450  25. Mischer

**Abb. 25.51.** Ersatzschaltbild für den Fet im LO-Kreis

$U_{GS,0}$ normalerweise im Sperrbereich liegt und $U_{DS} \approx 0$ gilt, wird der Mosfet abwechselnd im Sperrbereich und im ohmschen Bereich betrieben. Zur Bestimmung der Kapazität $C'_G(U_{G'S'})$ muss man die im Abschnitt 3.3.2 angegebenen Gleichungen auswerten. Wir verzichten hier auf eine weitere Darstellung und setzen $C'_G(U_{G'S'})$ als bekannt voraus.

#### 25.4.1.1.2 Ersatzschaltbild

Da der LO-Parallelschwingkreis eine sinusförmige äußere Gate-Source-Spannung

$$
U_{GS}(t) = U_{GS,0} + \hat{u}_{LO}\cos \omega_{LO} t
$$

erzwingt und die Bahnwiderstände klein sind, ist auch die Steuerspannung $U_{G'S'}$ näherungsweise sinusförmig:

$$
U_{G'S'}(t) \approx U_{GS,0} + \hat{u}_{G'S'} \cos \omega_{LO} t
$$

Dagegen enthält der Gatestrom $I_G$ Oberwellen bei Vielfachen der LO-Frequenz, deren Amplituden vom Arbeitspunkt $U_{GS,0}$ und der Amplitude $\hat{u}_{G'S'}$ abhängen. Aus der Amplitude der Grundwelle des Gatestroms und der Amplitude $\hat{u}_{G'S'}$ ergibt sich die Grundwellen-Kapazität $C'_{G(GW)}$, die bei kleinen LO-Amplituden der Kleinsignalkapazität $C'_G(U_{GS,0})$ im Arbeitspunkt entspricht und mit zunehmender LO-Amplitude zunimmt. Damit erhält man das in in Abb. 25.52 links gezeigte Ersatzschaltbild.

#### 25.4.1.1.3 Anpassung

Für einen optimalen Betrieb müssen wir die Steueramplitude $\hat{u}_{G'S'}$ maximieren; in diesem Fall werden aber auch die Spannung am Widerstand $R'_G$ und die aufgenommene Wirkleistung maximal. Wir müssen also auch hier eine Leistungsanpassung vornehmen. Im folgenden vergleichen wir drei Betriebsfälle mit und ohne Anpassung.

Zunächst wandeln wir die Reihenschaltung

$$
Z_G = R'_G + \frac{1}{j\omega_{LO} C'_{G(GW)}}
$$

unter Verwendung der Gate-Grenzfrequenz

**Abb. 25.52.** Ersatzschaltbild für den LO-Kreis eines passiven Fet-Mischers
<!-- page-import:1487:end -->

<!-- page-import:1488:start -->
25.4 Passive Mischer mit Feldeffekttransistoren 1451

$$
\omega_G \;=\; \frac{1}{C'_{G(GW)} R'_G}
\qquad (25.43)
$$

in eine äquivalente Parallelschaltung

$$
\frac{1}{Z_G}
\;=\;
\frac{j\omega_{LO} C'_{G(GW)}}{1 + j\omega_{LO} C'_{G(GW)} R'_G}
\;=\;
\frac{j\omega_{LO} C'_{G(GW)}}{1 + j\omega_{LO}/\omega_G}
$$

$$
=\;
j\omega_{LO} C'_{G(GW)} \frac{\omega_G^2}{\omega_G^2 + \omega_{LO}^2}
\;+\;
\frac{1}{R'_G}\,\frac{\omega_{LO}^2}{\omega_G^2 + \omega_{LO}^2}
$$

um und fassen die Kapazitäten zusammen; dadurch erhalten wir das in Abb. 25.52 rechts gezeigte Ersatzschaltbild mit:

$$
C'_{LO}
=
C_{LO} + C'_{G(GW)} \frac{\omega_G^2}{\omega_G^2 + \omega_{LO}^2}
\;\;\overset{\omega_{LO}\ll\omega_G}{\approx}\;\;
C_{LO} + C'_{G(GW)}
\qquad (25.44)
$$

$$
R_{LO}
=
R'_G \left( 1 + \frac{\omega_G^2}{\omega_{LO}^2} \right)
\;\;\overset{\omega_{LO}\ll\omega_G}{\approx}\;\;
R'_G \frac{\omega_G^2}{\omega_{LO}^2}
\qquad (25.45)
$$

Die Elemente $L_{LO}$ und $C'_{LO}$ werden so gewählt, dass Parallelresonanz vorliegt:

$$
\omega_{LO}^2 L_{LO} C'_{LO}
=
\omega_{LO}^2 L_{LO}
\left(
C_{LO} + C'_{G(GW)} \frac{\omega_G^2}{\omega_G^2 + \omega_{LO}^2}
\right)
=
1
$$

In diesem Fall wird nur noch der Widerstand $R_{LO}$ wirksam und wir können den Zusammenhang zwischen der Amplitude $\hat{u}_{g,LO}$ des LO-Generators und der Amplitude $\hat{u}_{G'S'}$ der Steuerspannung für den in Abb. 25.53a gezeigten Fall ohne Anpassnetzwerk in zwei Schritten ermitteln:

- Den Zusammenhang zwischen $\hat{u}_{g,LO}$ und $\hat{u}_{LO}$ erhalten wir durch Spannungsteilung an $R_{g,LO} = Z_W$ und $R_{LO}$:

$$
\underline{U}_{LO}
=
\underline{U}_{g,LO}\,\frac{R_{LO}}{Z_W + R_{LO}}
\qquad \Rightarrow \qquad
\hat{u}_{LO}
=
\hat{u}_{g,LO}\,\frac{R_{LO}}{Z_W + R_{LO}}
$$

- Den Zusammenhang zwischen $\hat{u}_{LO}$ und $\hat{u}_{G'S'}$ erhalten wir durch Spannungsteilung an $R'_G$ und $C'_{G(GW)}$:

$$
\underline{U}_{G'S'}
=
\underline{U}_{LO}\,\frac{1}{1 + j\omega_{LO}/\omega_G}
\qquad \Rightarrow \qquad
\hat{u}_{G'S'}
=
\hat{u}_{LO}\,\frac{1}{\sqrt{1 + \omega_{LO}^2/\omega_G^2}}
\qquad (25.46)
$$

Damit folgt mit (25.45) für den Betrieb ohne Anpassnetzwerk:

$$
\hat{u}_{G'S'}
=
\hat{u}_{g,LO}\,
\frac{\sqrt{1 + \omega_{LO}^2/\omega_G^2}}
{1 + \dfrac{\omega_{LO}^2}{\omega_G^2}\left(1 + \dfrac{Z_W}{R'_G}\right)}
\qquad (25.47)
$$

Abbildung 25.54 zeigt den Verlauf der Steueramplitude ohne Anpassnetzwerk zusammen mit weiteren Verläufen, auf die wir noch eingehen.
<!-- page-import:1488:end -->

<!-- page-import:1489:start -->
1452  25. Mischer

a ohne Anpassnetzwerk

b mit Anpassnetzwerk

c mit Übertrager und Abschlusswiderstand bei niedrigen LO-Frequenzen

**Abb. 25.53.** Impedanzen im LO-Kreis eines passiven Fet-Mischers

Wir betrachten nun den in Abb. 25.53b gezeigten Fall mit Anpassnetzwerk. Zur Berechnung der Steueramplitude nutzen wir die Eigenschaft, dass der LO-Generator bei Anpassung die verfügbare Leistung

$$
P_{LO}=\frac{u_{g,LO(eff)}^2}{4R_{g,LO}}=\frac{\hat{u}_{g,LO}^2}{8R_{g,LO}} \qquad {}^{R_{g,LO}=Z_W}_{=} \frac{\hat{u}_{g,LO}^2}{8Z_W}
$$

abgibt und diese Leistung bei verlustfreier Anpassung im Widerstand $R_{LO}$ umgesetzt wird:

$$
P_{LO}=\frac{\hat{u}_{g,LO}^2}{8Z_W}=\frac{\hat{u}_{LO}^2}{2R_{LO}}
\Rightarrow
\hat{u}_{LO}=\frac{\hat{u}_{g,LO}}{2}\sqrt{\frac{R_{LO}}{Z_W}}
\qquad\qquad (25.49)
$$

Der Zusammenhang zwischen $\hat{u}_{LO}$ und $\hat{u}_{G'S'}$ ist weiterhin durch (25.46) gegeben; daraus folgt mit (25.45) für den Betrieb mit Anpassnetzwerk:

$$
\hat{u}_{G'S'}=\hat{u}_{g,LO}\,\frac{\omega_G}{2\omega_{LO}}\sqrt{\frac{R_G'}{Z_W}}
\qquad\qquad (25.50)
$$

Der Verlauf ist ebenfalls in Abbildung 25.54 dargestellt.

Der Vergleich mit dem Verlauf ohne Anpassnetzwerk zeigt, dass es einen Bereich gibt, in dem auch ohne Anpassnetzwerk eine gute Anpassung vorliegt. Die LO-Frequenz, bei der man auch ohne Anpassnetzwerk eine exakte Anpassung erhält, folgt aus (25.45) mit der Bedingung $R_{LO}=Z_W$:
<!-- page-import:1489:end -->

<!-- page-import:1490:start -->
25.4 Passive Mischer mit Feldeffekttransistoren 1453

**Abb. 25.54.** Steueramplitude $\hat{u}_{G'S'}$ für verschiedene Betriebsfälle

$$
\omega_{LO,anp} \;=\; \frac{\omega_G}{\sqrt{Z_W / R_G' - 1}}
\;\;\overset{R_G' \ll Z_W}{\approx}\;\;
\omega_G \sqrt{\frac{R_G'}{Z_W}}
\;=\;
\frac{1}{C_{G(GW)} \sqrt{R_G' Z_W}}
\qquad (25.51)
$$

Bei geringen LO-Frequenzen erhält man mit Anpassnetzwerk deutlich größere Steueramplituden, da das Anpassnetzwerk in diesem Fall eine Resonanzüberhöhung bewirkt. Bei LO-Frequenzen oberhalb $\omega_{LO,anp}$ wird die Steueramplitude zu gering; deshalb ist $\omega_{LO,anp}$ die maximale praktische Betriebsfrequenz für einen Fet-Mischer.

Die bisher beschriebenen Fälle sind schmalbandig, da sie eine Frequenzabstimmung des LO-Kreises voraussetzen. Bei niedrigen LO-Frequenzen kann man eine breitbandige Anpassung erzielen, indem man den LO-Parallelschwingkreis durch einen 1:n-Übertrager mit einem Abschlusswiderstand $R = n^2 Z_W$ ersetzt, siehe Abb. 25.53c; damit erreicht man eine ausreichend gute Anpassung in dem Bereich, in dem der Betrag der Gate-Impedanz noch deutlich größer ist als der Abschlusswiderstand:

$$
\omega_{LO} \;\ll\; \frac{1}{n^2 Z_W C'_{G(GW)}}
$$

Für die Steueramplitude gilt in diesem Bereich:

$$
\hat{u}_{G'S'} \;=\; \hat{u}_{g,LO}\,\frac{n}{2}
$$

Abbildung 25.54 zeigt den Verlauf der Steueramplitude für verschiedene Werte von $n$. Die Verläufe gelten allerdings nur für den Fall, dass der ZF- und der HF-Anschluss bei der LO-Frequenz kurzgeschlossen sind, d.h. es liegt noch kein echter Breitbandbetrieb vor. Lässt man die Kurzschluss-Bedingungen fallen, indem man die Parallelschwingkreise im ZF- und im HF-Kreis entfernt, und nimmt statt dessen breitbandige Abschlüsse mit dem Wellenwiderstand $Z_W$ an, muss man diese Abschlüsse bei der Berechnung des Widerstands $R_G'$ und der Gate-Grenzfrequenz $\omega_G$ berücksichtigen, indem man in Abb. 25.51 anstelle
<!-- page-import:1490:end -->

<!-- page-import:1491:start -->
1454  25. Mischer

von $R_S$ und $R_D$ die Reihenschaltungen $R_S + Z_W$ und $R_D + Z_W$ einsetzt; dadurch nimmt $R_G'$ stark zu und die Gate-Grenzfrequenz entsprechend stark ab.

#### 25.4.1.2 Kleinsignalersatzschaltbild und Kleinsignalverhalten

Abbildung 25.50c zeigt das Kleinsignalersatzschaltbild für den ZF- und den HF-Kreis; es stimmt mit dem Kleinsignalersatzschaltbild eines Eintaktmischers mit Diode in Abb. 25.19c auf Seite 1408 überein.

Die Dimensionierung eines passiven Fet-Mischers ist aufwendiger als die eines Mischers mit Dioden. Die Kennlinien von Mischerdioden unterscheiden sich nur wenig; gleichzeitig sind die Stromdichte und die Steilheit so groß, dass man die benötigten großen Änderungen des Leitwertes mit einer sehr kleinen Diodenfläche mit entsprechend geringer Kapazität und einer geringen LO-Amplitude erzielen kann. Da Mischer mit Dioden grundsätzlich ohne Vorspannung betrieben werden, bleibt als einziger Dimensionierungsparameter die LO-Amplitude.

Bei einem Fet sind die Stromdichte und die Steilheit wesentlich geringer, so dass ein relativ großer Fet (Steilheitskoeffizient $K$ bzw. Kanalweite $W$ groß) und/oder eine relativ große LO-Amplitude benötigt werden, um eine ausreichend große Änderung des Leitwerts zu erzielen. Da ein großer Fet auch große Kapazitäten besitzt, hängt die optimale Dimensionierung vom Frequenzbereich ab, in dem der Mischer betrieben wird.

##### 25.4.1.2.1 Arbeitspunkt

Die Spannung $U_{G'S'}$ wirkt als Steuerspannung für den Kanalwiderstand; aus (3.7) auf Seite 187 folgt:

$$
\frac{1}{R_{DS,on}(t)}=
\begin{cases}
K\,(U_{G'S'}(t)-U_{th}) & \text{für } U_{G'S'}(t)\geq U_{th} \\
0 & \text{für } U_{G'S'}(t)< U_{th}
\end{cases}
\qquad (25.52)
$$

Dabei ist $K$ der *Steilheitskoeffizient* und $U_{th}$ die *Schwellenspannung* des Fets. Daraus erhält man den für den Mischvorgang maßgebenden Leitwert:

$$
g_F(t)=\frac{1}{R_{DS,on}(t)+R_S+R_D}
\qquad (25.53)
$$

Der Arbeitspunkt ist durch die Arbeitspunktspannung $U_{GS,0}$ und die Amplitude $\hat{u}_{G'S'}$ der Steuerspannung gegeben. Um einen Überblick über die Abhängigkeiten zu bekommen, haben wir den maximal verfügbaren Mischgewinn $MAG$ und den auf den Steilheitskoeffizienten $K$ normierten Wellenwiderstand $Z_{W,M}K$ für verschiedene Arbeitspunkte ermittelt und beide Größen in Abb. 25.55 als Funktion von $\hat{u}_{G'S'}$ mit $U_{GS,0}$ als Parameter dargestellt; dabei sind wir wie folgt vorgegangen:

– Berechnung des Leitwerts $g_F(t)$ für $R_S = R_D = 0$.  
– Bestimmung der Koeffizienten $g_{F,0}$ und $g_{F,1}$ der Fourier-Reihenentwicklung:

$$
g_F(t)=g_{F,0}+g_{F,1}\cos\omega_{LO}t+g_{F,2}\cos2\omega_{LO}t+\cdots
$$

Die Koeffizienten entsprechen den Koeffizienten $g_{D,0}$ und $g_{D,1}$ einer Mischerdiode.  
– Berechnung des maximal verfügbaren Mischgewinns $MAG$ mit (25.17) auf Seite 1416. Der Mischgewinn $MAG$ hängt nicht vom Steilheitskoeffizienten $K$ ab.  
– Berechnung des Wellenwiderstands $Z_{W,M}$ des Mischers mit (25.16) auf Seite 1415. Es gilt $Z_{W,M}\sim 1/K$; deshalb haben wir den normierten Wellenwiderstand $Z_{W,M}K$ für
<!-- page-import:1491:end -->

<!-- page-import:1492:start -->
## 25.4 Passive Mischer mit Feldeffekttransistoren

1455

**Abb. 25.55.** Maximaler verfügbarer Mischgewinn $MAG$ und normierter Wellenwiderstand $Z_{W,M}K$ für einen Sperrschicht-Fet mit $U_{th}=-2\,\mathrm{V}$ und vernachlässigbar kleinen Bahnwiderständen $R_S$ und $R_D$. Zusätzlich ist der Steilheitskoeffizient $K_{50}$ für $Z_{W,M}=50\,\Omega$ angegeben.

die Darstellung gewählt. Zusätzlich haben wir eine zweite y-Achse angebracht, an der man den Steilheitskoeffizienten $K_{50}$ für $Z_{W,M}=50\,\Omega$ ablesen kann.

Die Kurven a – e gehören zu Arbeitspunkten im Sperrbereich ($U_{GS,0}<U_{th}$), für die Kurve f gilt $U_{GS,0}=U_{th}$ und die Kurven g – i gehören zu Arbeitspunkten im ohmschen Bereich ($U_{GS,0}>U_{th}$). Die Kurven sind nur für den Amplitudenbereich dargestellt, für den die Steuerspannung $U_{G'S'}(t)$ kleiner Null bleibt, d.h. es gilt $\hat{u}_{G'S'}<|U_{GS,0}|$. Diese Beschränkung ist bei einem Sperrschicht-Fet zwingend, damit die Gate-Kanal-Diode nicht leitet; dagegen sind bei einem Mosfet auch größere Amplituden möglich. Abbildung 25.56 zeigt den Verlauf des Leitwerts $g_F(t)$ für drei Arbeitspunkte.

**Abb. 25.56.** Leitwert $g_F(t)$ für einen Arbeitspunkt im Sperrbereich (a), für $U_{GS,0}=U_{th}$ (b) und für einen Arbeitspunkt, bei dem der Fet immer im ohmschen Bereich betrieben wird (c). Die Verläufe sind auf den Mittelwert $g_{F,0}$ normiert.
<!-- page-import:1492:end -->

<!-- page-import:1493:start -->
1456  25. Mischer

a mit Arbeitspunktspannung $U_{GS,0}$  
b mit Arbeitspunktfaktor $k_{AP}$

**Abb. 25.57.** Berechnung der Parameter eines passiven Fet-Mischers

Um einen hohen Mischgewinn $MAG$ zu erzielen, muss man einen Arbeitspunkt im Sperrbereich wählen. Mit zunehmendem Mischgewinn nimmt allerdings auch der benötigte Steilheitskoeffizient $K$ stark zu und man muss einen großen Fet mit entsprechend großen Kapazitäten verwenden. Der Grenzfall ist durch $U_{GS,0} = U_{th}$ gegeben. In diesem Fall entspricht der Verlauf von $g_F(t)$ den positiven Halbwellen der Steuerspannung und das Verhältnis $g_{F,1}/g_{F,0}$ ist konstant; daraus resultiert ein konstanter Mischgewinn $MAG \approx -6{,}3\ \mathrm{dB}$.

### 25.4.1.2.2 Dimensionierung

Die Dimensionierung eines passiven Fet-Mischers ist wesentlich aufwendiger als die eines Diodenmischers, da es drei Freiheitsgrade gibt: die Größe des Fets – ausgedrückt durch die Gate-Weite $W$ –, die Amplitude $\hat{u}_{g,LO}$ des LO-Generators und die Arbeitspunktspannung $U_{GS,0}$. Daraus kann man nach dem in Abb. 25.57a gezeigten Berechnungsschema die drei wichtigsten Betriebsparameter berechnen: die LO-Leistung $P_{LO}$, den Mischgewinn $MAG$ und den Wellenwiderstand $Z_{W,M}$. Die LO-Leistung soll möglichst gering und der Mischgewinn möglichst hoch sein. Der Wellenwiderstand $Z_{W,M}$ soll nicht zu stark vom Wellenwiderstand $Z_W$ der Leitungen abweichen, damit die Transformationsfaktoren der Anpassnetzwerke im ZF- und im HF-Kreis nicht zu groß werden. Aus demselben Grund sollte die Resonanzüberhöhung im LO-Kreis nicht zu groß werden; ggf. muss man auch im angepassten Fall einen Abschlusswiderstand einsetzen. Darüber hinaus muss bei einem Sperrschicht-Fet $\hat{u}_{G'S'} < |U_{GS,0}|$ gelten, damit die Gate-Kanal-Diode nicht leitet.

Eine für die Dimensionierung vorteilhafte Darstellung der Abhängigkeiten erhält man, wenn man den maximalen verfügbaren Mischgewinn $MAG$ und den normierten Wellenwiderstand $Z_{W,M}\,K\,\hat{u}_{G'S'}$ als Funktion des Arbeitspunktfaktors

$$
k_{AP}=\frac{U_{GS,0}-U_{th}}{\hat{u}_{G'S'}}
$$

darstellt. Damit erhält man anstelle der Kurvenscharen in Abb. 25.55 die in Abb. 25.58 dargestellten Verläufe, die sich im Bereich $k_{AP}<0{,}5$ nahezu exakt durch folgende Gleichungen beschreiben lassen:

$$
\frac{MAG}{\mathrm{dB}}=-6{,}28-4{,}2\,k_{AP}-1{,}28\,k_{AP}^{5}
\qquad (25.55)
$$
<!-- page-import:1493:end -->

<!-- page-import:1494:start -->
25.4 Passive Mischer mit Feldeffekttransistoren 1457

**Abb. 25.58.** Maximaler verfügbarer Mischgewinn $MAG$ und doppelt normierter Wellenwiderstand $Z_{W,M}\,K\,\hat u_{G'S'}$ als Funktion des Arbeitspunktfaktors $k_{AP} = (U_{GS,0} - U_{th})/\hat u_{G'S'}$. Für $k_{AP} = -1$ liegt der Aussteuerungsbereich vollständig im Sperrbereich, für $k_{AP} = 1$ vollständig im ohmschen Bereich.

$$
Z_{W,M}\,K\,\hat u_{G'S'} = \frac{5{,}15}{(k_{AP}+1)^2}
\qquad\qquad (25.56)
$$

Für $k_{AP} < 0$ liegt der Arbeitspunkt im Sperrbereich und für $k_{AP} > 0$ im ohmschen Bereich; $k_{AP} = 0$ beschreibt den Grenzfall $U_{GS,0} = U_{th}$. Für $k_{AP} = -1$ liegt der Aussteuerungsbereich vollständig im Sperrbereich, für $k_{AP} = 1$ vollständig im ohmschen Bereich. Der Arbeitspunktfaktor ist eine Ersatzgröße für die Arbeitspunktspannung $U_{GS,0}$, für die nun

$$
U_{GS,0} = U_{th} + k_{AP}\hat u_{G'S'}
\qquad\qquad (25.57)
$$

gilt; das zugehörige Berechnungsschema ist in Abb. 25.57b dargestellt. In der Praxis gibt man meist die LO-Leistung $P_{LO}$ und den Mischgewinn $MAG$ vor und berechnet daraus die LO-Amplitude $\hat u_{g,LO}$ und den Arbeitspunktfaktor $k_{AP}$.

Man muss nun in dem 3-dimensionalen Parameterraum $(W;\ P_{LO};\ MAG)$ den Punkt finden, der die gegebenen Randbedingungen am besten erfüllt; dabei muss man prüfen, ob eine Anpassung des Widerstands $R_{LO}$ im LO-Kreis und des Wellenwiderstands $Z_{W,M}$ im ZF- und im HF-Kreis an den Wellenwiderstand $Z_W$ der Leitungen unter den gegebenen Randbedingungen möglich ist. Auch die Ausführung der Parallelschwingkreise zur Trennung der Frequenzen wird problematisch, wenn die Kapazitäten des Fets zu groß werden. Das Ergebnis der Optimierung hängt direkt und indirekt von der LO-Frequenz ab: direkt, weil $\omega_{LO}$ in das Berechnungsschema eingeht und dort eine wesentliche Rolle spielt; indirekt, weil die praktisch realisierbaren Transformationsfaktoren der Anpassnetzwerke von der Frequenz abhängen. Wir gehen darauf in einem Beispiel zum Gegentaktmischer noch näher ein.

### 25.4.1.3 Nachteile des Eintaktmischers

Ein Eintakt-Fet-Mischer hat dieselben Nachteile wie ein Eintakt-Diodenmischer. Da der Wellenwiderstand $Z_{W,M}$ eines Fet-Mischers mit hohem Mischgewinn deutlich höher ist als der eines Diodenmischers, kann man in der Praxis oft keine ausreichende Trennung
<!-- page-import:1494:end -->

<!-- page-import:1495:start -->
1458  25. Mischer

**Abb. 25.59.** Gegentakt-Fet-Mischer

der LO- und der HF-Frequenz durch die Parallelschwingkreise im LO- und im HF-Kreis erzielen. Man muss dann einen Gegentakt- oder Ringmischer verwenden.

## 25.4.2 Gegentaktmischer

Abbildung 25.59 zeigt das Schaltbild eines *Gegentakt-Fet-Mischers*. Aufgrund der Symmetrie ist der LO-Kreis vom ZF- und vom HF-Kreis entkoppelt; dadurch sind die Gate- und Drain-Anschlüsse der Fets bezüglich des LO-Kreises mit Masse verbunden, wie wir es bei der Berechnung des LO-Kreises mit Hilfe von Abb. 25.51 auf Seite 1450 vorausgesetzt haben. Wie beim Eintakt-Fet-Mischer machen wir auch hier wieder von der Möglichkeit Gebrauch, die Arbeitspunktspannung $U_{GS,0}$ am Fußpunkt der LO-Induktivität $L_{LO}$ einzuspeisen. Bei der Dimensionierung der Parallelschwingkreise müssen wir wieder die Kapazitäten der Fets an den jeweiligen Anschlüssen berücksichtigen.

Bei der Untersuchung des Eintakt-Fet-Mischers haben wir gesehen, dass der Wellenwiderstand $Z_{W,M}$ des Mischers relativ groß wird, wenn man einen hohen Mischgewinn erzielen will. Wir nutzen deshalb die Übertrager, um eine Anpassung an den Wellenwiderstand $Z_W$ der Leitungen herzustellen, indem wir 1:n:n-Übertrager verwenden und damit eine Impedanztransformation mit dem Faktor $n^2$ erzielen.

Zur Berechnung des LO-Kreises können die Gleichungen des Eintakt-Fet-Mischers und zur Berechnung des Kleinsignalverhaltens die Gleichungen des Eintakt-Diodenmischers verwenden, wenn wir berücksichtigen, dass die beiden Fets des Gegentaktmischers sowohl im LO-Kreis als auch im Kleinsignalersatzschaltbild parallelgeschaltet sind. Wir erläutern die Berechnung mit einem ausführlichen Beispiel.

*Beispiel:* Wir suchen eine günstige Dimensionierung für einen Gegentakt-Fet-Mischer zur Umsetzung des ISM-Bandes $f_{HF} = 2{,}4 \ldots 2{,}5\,\mathrm{GHz}$ auf die Zwischenfrequenz $f_{ZF} = 190\,\mathrm{MHz}$; dazu benötigen wir einen Lokaloszillator mit $f_{LO} = f_{HF} - f_{ZF} = 2{,}21 \ldots 2{,}31\,\mathrm{GHz}$. Die relative Bandbreite beträgt:

$$
\frac{B}{f_M} = \frac{2{,}31 - 2{,}21}{(2{,}21 + 2{,}31)/2} \approx 0{,}044
$$

Da beim Gegentaktmischers zwei Fets parallelgeschaltet sind, müssen wir die Gleichungen des Eintaktmischers an allen Stellen, an denen einer der Fet-Parameter $K$, $R_G'$ oder $C_G{}_{(GW)}$ [unclear]
<!-- page-import:1495:end -->

<!-- page-import:1496:start -->
## 25.4 Passive Mischer mit Feldeffekttransistoren

1459

eingeht, mit einem zusätzlichen Faktor 2 versehen. Wir kennzeichnen diesen Faktor im folgenden durch eine Unterstreichung: 2.

Die Anpassung im LO-Kreis soll mit einem Collins-Filter erfolgen. Aus Abb. 23.26 auf Seite 1306 entnehmen wir, dass wir bei einer relativen Bandbreite 0,044 ein Transformationsverhältnis $t \approx 20$ erzielen können. Bei einem Wellenwiderstand $Z_W = 50\,\Omega$ darf demnach der Widerstand $R_{LO}$ im LO-Kreis maximal $1\,\mathrm{k}\Omega$ betragen. Damit erhalten wir aus (25.45) die Bedingung:

$$
R_{LO} = \frac{R_G'}{\underline{2}} \left(1 + \omega_G^2/\omega_{LO}^2\right) \leq 1\,\mathrm{k}\Omega
$$

(25.58)

Im HF- und im ZF-Kreis setzen wir 1:2:2-Übertrager mit dem Transformationsverhältnis $2^2 = 4$ ein; daraus resultiert für den Wellenwiderstand $Z_{W,M}$ die Forderung:

$$
Z_{W,M} = 4 Z_W = 200\,\Omega
$$

Aus (25.56) erhalten wir die Forderung:

$$
\hat{u}_{G'S'} = \frac{5,15}{2K\,Z_{W,M}\,(k_{AP}+1)^2} = \frac{12,88\,\mathrm{mA/V}}{K\,(k_{AP}+1)^2}
$$

(25.59)

Wir verwenden typische GaAs-Mesfets mit folgenden Kenngrößen:

- Die Schwellenspannung beträgt $U_{th} = -2\,\mathrm{V}$.
- Der relative Steilheitskoeffizienten beträgt:

$$
K_n' \approx 30\,\mu\mathrm{A}/\mathrm{V}^2
$$

Daraus erhält man mit einer typischen Gate-Länge $L \approx 0{,}3\,\mu\mathrm{m}$ den auf die Gate-Weite $W$ bezogenen Steilheitskoeffizienten:

$$
\frac{K}{W} = \frac{K_n'}{L} \approx 100\,\frac{\mathrm{A}}{\mathrm{V}^2\mathrm{m}}
$$

- Die auf die Gate-Weite $W$ bezogenen relativen Sperrschichtkapazitäten betragen etwa:

$$
\frac{C_{S0,S}}{W} = \frac{C_{S0,D}}{W} \approx 2\,\frac{\mathrm{nF}}{\mathrm{m}}
\Rightarrow
\left.\frac{C_G'(U_{G'S'})}{W}\right|_{U_{G'S'}=0}
=
\frac{C_{S0,S}+C_{S0,D}}{W}
\approx 4\,\frac{\mathrm{nF}}{\mathrm{m}}
$$

Die Kleinsignalkapazität im Arbeitspunkt $U_{G'S'} = U_{GS,0}$ ist um den Faktor

$$
\left(1 - \frac{U_{GS,0}}{U_{Diff}}\right)^{m_S}
$$

geringer und die für uns maßgebende Grundwellenkapazität $C_{G(GW)}'$ ist wiederum etwas größer als die Kleinsignalkapazität. Der Arbeitspunkt liegt im Sperrbereich:

$$
U_{GS,0} \approx U_{th} - 0{,}2\,\mathrm{V}
$$

Mit den typischen Werten $U_{Diff} \approx 1\,\mathrm{V}$ und $m_S = 0{,}5$ erhält man:

$$
\frac{C_{G(GW)}'}{W} \approx 2{,}2\,\frac{\mathrm{nF}}{\mathrm{m}}
$$
<!-- page-import:1496:end -->

<!-- page-import:1497:start -->
1460 25. Mischer

**Abb. 25.60.** Beispiel: Zusammenhang zwischen dem maximalen Mischgewinn $MAG$, der LO-Leistung $P_{LO}$ und der Gate-Weite $W$ für einen Gegentakt-Fet-Mischer mit typischen GaAs-Mesfets für $f_{LO} = 2{,}26\,\mathrm{GHz}$. Die Gate-Weite $W = 10\,\mathrm{mm}$ ist nicht praktikabel, da die Kapazitäten zu groß werden.

- Bei einem typischen GaAs-Mesfet dominiert der Gate-Bahnwiderstand $R_G$. Dieser Widerstand setzt sich aus zwei Anteilen zusammen: einem *inneren* Anteil, der etwa umgekehrt proportional zur Gate-Weite $W$ ist, und einem *äußeren* Anteil, der näherungsweise konstant ist. Wir verwenden im folgenden den typischen Zusammenhang:

$$
R'_G = 1\,\Omega + \frac{1{,}5 \cdot 10^{-3}\ \Omega\mathrm{m}}{W}
$$

Für die Gate-Weite erhalten wir durch eine numerische Auswertung von (25.58) die Bedingung $W > 0{,}29\,\mathrm{mm}$. Wir gehen nun wie folgt vor:

- Wir geben die Gate-Weite vor und berechnen die Parameter $K$, $R'_G$, $C'_{G(GW)}$ und $\omega_G$ der Fets.
- Wir variieren den Arbeitspunktfaktor $k_{AP}$ und berechnen daraus mit (25.55) den maximalen Mischgewinn $MAG$ und mit (25.59) die Steueramplitude $\hat{u}_{G'S'}$.
- Wir berechnen die LO-Amplitude $\hat{u}_{g,LO}$, indem wir (25.50) nach $\hat{u}_{g,LO}$ auflösen; daraus erhalten wir mit (25.48) die LO-Leistung $P_{LO}$.
- Wir stellen den maximalen Mischgewinn als Funktion der LO-Leistung dar.

Abbildung 25.60 zeigt die resultierenden Kurven für verschiedene Gate-Weiten. Die Gate-Weite $W = 10\,\mathrm{mm}$ ist nicht praktikabel, da die Kapazitäten zu groß werden. Wir haben die zugehörige Kurve nur dargestellt, um zu zeigen, dass eine weitere Erhöhung der Gate-Weite keine nennenswerte Verbesserung mehr bringt. Wir haben für dieses Beispiel $W = 0{,}3\,\mathrm{mm}$ und $P_{LO} = -5\,\mathrm{dBm}$ gewählt; dazu gehören die Werte $k_{AP} = -0{,}25$, $\hat{u}_{G'S'} = 0{,}77\,\mathrm{V}$, $\hat{u}_{g,LO} = 0{,}35\,\mathrm{V}$, $U_{GS,0} = -2{,}19\,\mathrm{V}$ und der Mischgewinn $MAG = -5{,}3\,\mathrm{dB}$.

Abbildung 25.61 zeigt die dimensionierte Schaltung des Mischers in einer ersten Entwicklungsversion mit idealen Kapazitäten und Induktivitäten. Man erkennt, dass die Kapazitäten der Fets in jedem Kreis parallel zu äußeren Kapazitäten liegen und mit diesen verrechnet werden können. Bei der Dimensionierung sind wir wie folgt vorgegangen:
<!-- page-import:1497:end -->

<!-- page-import:1498:start -->
25.4 Passive Mischer mit Feldeffekttransistoren 1461

Abb. 25.61. Beispiel: Gegentakt-Fet-Mischer mit zwei GaAs-Mesfets für $f_{LO} = 2{,}26\,\mathrm{GHz}$, $f_{HF} = 2{,}45\,\mathrm{GHz}$ und $f_{ZF} = 190\,\mathrm{MHz}$ mit allseitiger Anpassung an $Z_W = 50\,\Omega$ und einer LO-Leistung $P_{LO} = -5\,\mathrm{dBm}$. Die Schwellenspannung der Fets beträgt $U_{th} = -2\,\mathrm{V}$.

- Im LO-Kreis haben wir die Gate-Kapazitäten der Fets mit der LO-Induktivität $L_{LO}$ in Resonanz genommen und anschließend den Resonanzwiderstand $R_{LO} = 950\,\Omega$ mit einem Collins-Filter $(L_1, C_1, C_2)$ an $Z_W = 50\,\Omega$ angepasst. Auf eine separate LO-Kapazität $C_{LO}$ haben wir verzichtet.
- Den ZF-Kreis haben wir mit $L_{ZF}$ und $C_{ZF}$ auf $f_{ZF} = 190\,\mathrm{MHz}$ abgestimmt; dabei haben wir $C_{ZF}$ auf die Sekundärseite des Übertragers verschoben, um einen günstigeren, in diesem Fall wesentlich kleineren Wert zu erhalten.
- Den HF-Kreis haben wir mit $L_{HF}$ und $C_{HF}$ auf $f_{HF} = 2{,}45\,\mathrm{GHz}$ abgestimmt. Hier haben wir beide Elemente auf die Sekundärseite des Übertragers verschoben. Bei der Dimensionierung haben wir darauf geachtet, dass die Impedanz des Kreises bei der Spiegelfrequenz $f_{HF,Sp} = 2{,}07\,\mathrm{GHz}$ bereits deutlich abgenommen hat. Den bei der Berechnung vorausgesetzten Kurzschluss bei der Spiegelfrequenz können wir zwar nicht herstellen, in der Praxis reicht es jedoch aus, wenn die Impedanz bei der Spiegelfrequenz etwa um den Faktor 4 abgenommen hat.

Wir haben diese Schritte mit PSpice durchgeführt und damit trotz des mangelhaften Kurzschlusses bei der Spiegelfrequenz eine sehr gute allseitige Anpassung und einen Mischgewinn $G_M \approx -5{,}9\,\mathrm{dB}$ erzielt, der nur um $0{,}6\,\mathrm{dB}$ unter dem idealen maximalen Mischgewinn liegt.

## 25.4.3 Ringmischer

Abbildung 25.62 zeigt das Schaltbild eines Ringmischers mit Fets. Im Gegensatz zum Ringmischer mit Dioden wird hier ein dritter Übertrager benötigt, um die komplementären Ansteuersignale für die Fets T1/T2 und T3/T4 zu erzeugen. Alle drei Übertrager können zur Anpassung an den Wellenwiderstand der Leitungen verwendet werden, indem man die Übersetzungsverhältnisse entsprechend wählt.

Wie beim Ringmischer mit Dioden sind auch hier der ZF- und der HF-Kreis entkoppelt. Man kann diese Eigenschaft aber nicht zur Vereinfachung der ZF- und HF-Filter nutzen,
<!-- page-import:1498:end -->

<!-- page-import:1499:start -->
1462  25. Mischer

Abb. 25.62. Fet-Ringmischer

da die Parallelschwingkreise am ZF- und am HF-Anschluss nicht nur zur Trennung der Frequenzen dienen, sondern vor allem zur Kompensation der Kapazitäten der Fets benötigt werden; deshalb ist auch der Fet-Ringmischer in der Praxis immer schmalbandig.

Zur Berechnung des LO-Kreises können die Gleichungen des Eintakt-Fet-Mischers und zur Berechnung des Kleinsignalverhaltens die Gleichungen des Eintakt-Diodenmischers verwenden, wenn man berücksichtigt, dass die vier Fets des Ringmischers sowohl im LO-Kreis als auch im Kleinsignalersatzschaltbild parallelgeschaltet sind.

## 25.4.4 Integrierte Fet-Mischer

Fet-Mischer eignet sich auch sehr gut für eine Integration in MOS-Technik. In diesem Fall werden die Übertrager durch eine symmetrische Ansteuerung mit Differenzverstärkern ersetzt; auch das Ausgangssignal wird differentiell entnommen. Die benötigten Induktivitäten können als integrierte Spulen in den Metallisierungsebenen realisiert werden. Die geringe Güte der integrierten Spulen führt zwar zu Verlusten und reduziert den Mischgewinn, stellt aber kein grundsätzliches Problem dar. Der hohe Wellenwiderstand eines Fet-Mischers, der in diskreten Schaltungen die Anpassung an den Wellenwiderstand der Leitungen erschwert, ist in integrierten Schaltungen von Vorteil.

Meist wird der Ringmischer verwendet. Abbildung 25.63 zeigt die beiden häufig verwendeten Darstellungen eines Ringmischers in integrierten MOS-Schaltungen. Wir haben auch hier den Gate-Anschluss in die Mitte verschoben, um den passiven Betrieb der Fets zu betonen. In Anwendungen mit relativ niedrigen Frequenzen kann man die Kapazitäten der Fets vernachlässigen und auf eine Resonanzabstimmung mit Induktivitäten verzichten.

Abbildung 25.64 zeigt einen Abwärtsmischer mit Resonanzabstimmung in allen Kreisen. Diese Ausführung ist nur für relativ hohe ZF-Frequenzen geeignet, bei denen eine Resonanzabstimmung mit integrierten Induktivitäten noch möglich ist. Gleichspannungsmäßig sind alle Anschlüsse über die Induktivitäten mit der Versorgungsspannung verbunden. Da in diesem Fall die Arbeitspunktspannung $U_{GS,0}$ gleich Null ist, muss die Schwellenspannung der Fets gering sein ($U_{th} \approx 0{,}2 \ldots 0{,}3\,\mathrm{V}$), damit man einen typischen Arbeitspunktfaktor $k_{AP} \approx -0{,}5$ erzielen kann. Wenn dies nicht möglich ist, muss man für die HF- und ZF-Kreise eine geringere Versorgungsspannung verwenden. Die Induktivitäten im LO- und im HF-Kreis kompensieren nicht nur die Kapazitäten der Fets des [unclear]
<!-- page-import:1499:end -->

<!-- page-import:1500:start -->
## 25.4 Passive Mischer mit Feldeffekttransistoren

1463

a als Ring

b mit Kreuzkopplung

**Abb. 25.63.** Darstellung eines passiven Ringmischers in MOS-Technik

Mischers, sondern auch die Ausgangskapazitäten der jeweiligen Treiber; dadurch werden nur noch die Resonanzwiderstände wirksam, die sich aus den Ausgangswiderständen der Treiber-Fets und den Verlustwiderständen der Induktivitäten ergeben. Für eine Anpassung muss der Resonanzwiderstand im LO-Kreis dem LO-Widerstand $R_{LO}$ und der Resonanzwiderstand im HF-Kreis dem Wellenwiderstand $Z_{W,M}$ des Mischers entsprechen. Da die Resonanzwiderstände üblicherweise relativ hoch sind, ist eine Anpassung durch eine geeignete Dimensionierung des Mischers meist problemlos möglich. Am ZF-Ausgang müssen wir eine kapazitive Kopplung verwenden, die bei hohen ZF-Frequenzen aber ebenfalls problemlos möglich ist. Die Anpassung im ZF-Kreis wird durch eine Eingangsstufe mit Spannungsgegenkopplung hergestellt; dadurch lässt sich der Eingangswiderstand der Stu-

Resonanz-Induktivitäten

$u_{ZF}$

passiver Ringmischer

ZF-Eingangsstufe

$U_{LO}$

$u_{HF}$

LO-Treiber

HF-Treiber

**Abb. 25.64.** Beispiel für einen passiven Ringmischer in MOS-Technik für die Abwärtsmischung in einem Empfänger mit relativ hoher ZF-Frequenz
<!-- page-import:1500:end -->

<!-- page-import:1501:start -->
1464 25. Mischer

Arbeitspunkt-
regelung

I-Mischer

I-NF-
Verstärker

Q-NF-
Verstärker

I-LO-Treiber

Q-LO-Treiber

HF-Treiber

Q-Mischer

**Abb. 25.65.** Beispiel für einen passiven I/Q-Abwärtsmischer in CMOS-Technik für den Einsatz in einem direktumsetzenden Empfänger (*direct conversion receiver*)

fe mit Hilfe der Gegenkopplungswiderstände einstellen. Die Eingangskapazitäten werden auch hier durch die Induktivitäten kompensiert. Ein großer Vorteil der Schaltung liegt darin, dass sie nur eine sehr geringe Versorgungsspannung benötigt. Wir weisen darauf hin, dass die Schaltung *formal* weitgehend dem aktiven Doppel-Gegentaktmischer (Gilbert-Mischer) mit Feldeffekttransistors entspricht, wie ein Vergleich mit Abb. 25.80 auf Seite 1480 zeigt, wenn man die Bipolartransistoren durch Feldeffekttransistoren ersetzt. Beide Varianten unterscheiden sich nur bezüglich des Arbeitspunkts der Fets in der kreuzgekoppelten Mischerzelle. Wenn man bei der passiven Variante in Abb. 25.64 die Induktivitäten im HF-Kreis entfernt und die Versorgungsspannung im ZF-Kreis erhöht, arbeiten die Fets der Mischerzelle im Abschnürbereich und man erhält die aktive Variante.

Bei einem direktumsetzenden Empfänger nach Abb. 22.35 auf Seite 1278 liegen ganz andere Verhältnisse vor. Hier gilt $f_{LO} = f_{HF}$ und das Empfangssignal wird mit einem I/Q-Mischer direkt in die niederfrequenten Quadraturkomponenten umgesetzt; eine Resonanzabstimmung an den Ausgängen der Mischer ist deshalb weder nötig noch möglich. Abbildung 25.65 zeigt die typische Ausführung eines passiven I/Q-Abwärtsmischers in CMOS-Technik. Auf die Mischer folgen nun NF-Verstärker, die üblicherweise mit sehr geringen Ruheströmen betrieben werden. Eine Anpassung der NF-Verstärker an die Wellenwiderstände der Mischer kann in diesem Fall durch die Verwendung von Gateschaltungen
<!-- page-import:1501:end -->

<!-- page-import:1502:start -->
25.4 Passive Mischer mit Feldeffekttransistoren 1465

erfolgen, die wegen $r_e = 1/S$ auch bei geringen Ruheströmen einen passenden Eingangswiderstand aufweisen. Die Gleichspannungspotentiale an den Mischerzellen müssen nun so weit unterhalb der positiven Versorgungsspannung liegen, dass die Stromquellen an den Eingängen der NF-Verstärker nicht in den ohmschen Bereich geraten. Eine Arbeitspunktregelung übernimmt die korrekte Einstellung der Arbeitspunkte in den NF-Eingangsstufen und im HF-Treiber. Die Fets in den Mischerzellen werden jetzt mit $U_{GS,0} > 0$ betrieben. Wenn man damit keinen passenden Arbeitspunktfaktor erzielen kann, müssen auch die LO-Treiber in die Arbeitspunktregelung einbezogen werden.

## 25.4.5 Eigenschaften von passiven Fet-Mischern

### 25.4.5.1 Frequenzbereich

Passive Fet-Mischer sind schmalbandig, da man die Kapazitäten der Fets mit Hilfe der Resonanzkreise kompensieren muss. Davon ausgenommen sind nur Mischer, die mit sehr niedrigen Frequenzen betrieben werden und bei denen man die Kapazitäten vernachlässigen kann. Die maximale praktische Betriebsfrequenz beträgt etwa ein Drittel der Gate-Grenzfrequenz $\omega_G$, die ihrerseits etwa der Steilheitsgrenzfrequenz $\omega_{Y21s}$ der Fets entspricht, wie ein Vergleich von (25.43) auf Seite 1451 mit (3.48) auf Seite 227 unter Berücksichtigung von $R_G^\prime \approx R_G$ und $C^\prime_{G(GW)} \approx C_{GS} + C_{GD}$ zeigt.

### 25.4.5.2 LO-Leistung

Die benötigte LO-Leistung ist bei einem Fet-Mischer mit Anpassung im LO-Kreis proportional zum Quadrat der LO-Frequenz:

$$
P_{LO} \stackrel{(25.48)}{=} \frac{\hat{u}_{g,LO}^2}{8Z_W} \stackrel{(25.50)}{\approx} \frac{\hat{u}_{G^\prime S^\prime}^2}{2R_G^\prime}\frac{\omega_{LO}^2}{\omega_G^2} \stackrel{(25.43)}{=} \frac{R_G^\prime}{2}\left(\omega_{LO}\, C^\prime_{G(GW)}\, \hat{u}_{G^\prime S^\prime}\right)^2
$$

Deshalb werden bei niedrigen Frequenzen wesentlich geringere LO-Leistungen benötigt als bei einem vergleichbaren Diodenmischer, bei dem die benötigte LO-Leistung nicht von der Frequenz abhängt.

### 25.4.5.3 Nichtlinearität

Fet-Mischer sind hochlinear, da die Nichtlinearität des Kanalwiderstands sehr gering ist; der Kompressionspunkt und der Intercept-Punkt $IIP3$ sind entsprechend hoch. Da bei Diodenmischern ein direkter Zusammenhang zwischen der LO-Leistung $P_{LO}$ und dem Intercept-Punkt $IIP3$ besteht, wird das Verhältnis dieser Größen als Entscheidungskriterium bei der Wahl zwischen diskreten Fet- und Diodenmischern verwendet. Da Fet-Mischer bei niedrigen Frequenzen eine wesentlich geringere LO-Leistung benötigen, haben sie Diodenmischer aus allen schmalbandigen Anwendungen im unteren GHz-Bereich fast vollständig verdrängt.

Der Intercept-Punkt $IIP3$ hängt von der Spannung $U_{DS}$ im Arbeitspunkt ab. Bei typischen GaAs-Mesfets kann man den $IIP3$ optimieren, indem man die Fets nicht mit $U_{DS} = 0$, sondern mit $U_{DS} \approx 0{,}1 \ldots 0{,}2\ \mathrm{V}$ betreibt. In Anwendungen mit höchsten Anforderungen an die Linearität führt man die Mischer so aus, dass die Spannung $U_{DS}$ abgeglichen werden kann.

### 25.4.5.4 Rauschen

Bei passiven Fet-Mischern treten nur thermische Rauschquellen auf; deshalb erhält man die Rauschzahl gemäß (25.39) auf Seite 1443 aus dem verfügbaren Gewinn $G_A$:
<!-- page-import:1502:end -->
