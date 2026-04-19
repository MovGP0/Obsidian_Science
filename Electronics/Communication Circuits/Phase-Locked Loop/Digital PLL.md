# Digital PLL

<!-- page-import:1685:start -->
1648 27. Phasenregelschleife (PLL)

– Das wichtigste Einsatzfeld für analoge PLLs ist die Träger- und Taktregeneration für digitale Übertragungsverfahren. In diesem Fall ist der kleine Fangbereich völlig ausreichend, da die Träger- bzw. Taktfrequenzen in der Regel nur Schwankungen von weniger als einem Promille aufweisen. Als VCOs werden häufig abstimmbare Quarz-Oszillatoren eingesetzt; dabei ist durch die hohe Frequenzgenauigkeit der Quarze sichergestellt, dass die Leerlauffrequenz der PLL im Empfänger nur wenig von der entsprechenden Träger- oder Taktfrequenz im Sender abweicht.

## 27.3 Digitale PLL

In Abb. 27.24 ist die Grundform einer digitalen PLL aus Abb. 27.1b auf Seite 1621 noch einmal dargestellt, allerdings ohne explizite Darstellung eventuell vorhandener Begrenzer an den Eingängen der beiden Frequenzteiler oder — falls einer oder beide Frequenzteiler fehlen — an den Eingängen des Phasen- (Frequenz-) Detektors.

*Digital* bedeutet hier, dass die wesentlichen Signale zweiwertig sind, d.h. durch zwei verschiedene Spannungen oder zwei verschiedene Ströme dargestellt werden. Es bedeutet *nicht*, dass die Signale den typischen Signalen einer standardisierten Logikfamilie — z.B. TTL oder ECL — entsprechen. Es bedeutet auch *nicht*, dass die Pegel für eine logische Null und eine logische Eins in der gesamten Schaltung identisch sind; so kann z.B. ein digitaler Phasendetektor am Eingang mit den Spannungen 2 V für eine logische Null und 3 V für eine logische Eins angesteuert werden und am Ausgang die Ströme 1 mA für eine logische Null und 2 mA für eine logische Eins liefern. Mit anderen Worten: *digital* bedeutet hier, dass es sich um rechteckförmige Signale handelt, die eine beliebige Amplitude und einen beliebigen Offset haben können.

Signale, die nicht rechteckförmig sind, werden mit Begrenzern in diese Form gebracht. Dazu werden ein- oder mehrstufigen Verstärker verwendet, die mit Übersteuerung am Ausgang betrieben werden; ein Beispiel dafür ist der vierstufige Begrenzer in Abb. 21.62 auf Seite 1202. An allen Stellen, an denen im Normalfall keine rechteckförmigen Signale vorliegen — z.B. am Ausgang des VCOs —, denken wir uns einen entsprechenden Begrenzer ergänzt. Wir nehmen also an, dass *alle* Signale in Abb. 27.24 rechteckförmig sind.

Wir entwickeln die digitale PLL aus der analogen PLL und setzen deshalb den Abschnitt 27.2 im folgenden als bekannt voraus. Wir werden sehen, dass die Unterschiede in regelungstechnischer Hinsicht minimal sind; nur die Kennlinie des Phasen- (Frequenz-) Detektors und das Großsignal-Einschwingverhalten ändern sich signifikant.

Phasen- (Frequenz-) Detektor  
Frequenzteiler 1  
Schleifenfilter  
gesteuerter Oszillator

$s(t)$  
$f_S$  
$n_1$  
1  
PD / PFD  
$e(t)$  
VCO  
$s_{VCO}(t)$  
$f_{VCO}=\frac{n_2}{n_1}f_S$  
$n_2$  
1  
Frequenzteiler 2

**Abb. 27.24.** Digitale PLL (DPLL) ohne explizite Darstellung eventuell vorhandener Begrenzer an den Eingängen der beiden Frequenzteiler
<!-- page-import:1685:end -->

<!-- page-import:1686:start -->
27.3 Digitale PLL 1649

a Blockschaltbild und Signale

$s(t)$ → $e(t)$ → $e_{LF}(t)$ → VCO → $s_{VCO}(t)$

$\Phi_e = 0^\circ$

$s(t)$

$T_S$

$s_{VCO}(t)$

$e(t)$

$e_{LF}(t)$

$\Phi_e = 45^\circ$

$s(t)$

$T_S/8$

$s_{VCO}(t)$

$e(t)$

$e_{LF}(t)$

$\Phi_e = 90^\circ$

$s(t)$

$T_S/4$

$s_{VCO}(t)$

$e(t)$

$e_{LF}(t)$

$\Phi_e = 135^\circ$

$s(t)$

$3T_S/8$

$s_{VCO}(t)$

$e(t)$

$e_{LF}(t)$

b Signalverläufe für verschiedene Phasenfehler $\Phi_e$

**Abb. 27.25.** Digitale PLL mit EXOR-Phasendetektor

## 27.3.1 Digitale PLL mit EXOR-Phasendetektor

Die einfachste Form einer digitalen PLL erhalten wir, indem wir die Frequenzteiler entfernen und ein Exklusiv-Oder-Gatter (EXOR) als Phasendetektor verwenden; Abb. 27.25 zeigt das Blockschaltbild und die Signalverläufe. Als Schleifenfilter dient ein Tiefpass, der den Mittelwert des Fehlersignals $e(t)$ bildet.
<!-- page-import:1686:end -->

<!-- page-import:1687:start -->
1650  27. Phasenregelschleife (PLL)

a Kennlinie $g_{PD}(\phi_e)$

b Steilheit $k_{PD}$ = Ableitung der Kennlinie

**Abb. 27.26. Kennlinie eines EXOR/EXNOR-Gatters bei Betrieb als Phasendetektor**

Die Kennlinie des EXOR-Phasendetektors können wir auch hier wieder mit dem Messaufbau aus Abb. 27.5 auf Seite 1628 ermitteln, die Verhältnisse in Abb. 27.25b sind jedoch so übersichtlich, dass wir die Kennlinie direkt ableiten können. Für $0 < \phi_e < 180^\circ$ erhalten wir einen linear ansteigenden und für $180^\circ < \phi_e < 360^\circ$ einen linear abfallenden Verlauf, siehe Abb. 27.26. Wir können anstelle des EXOR-Gatters auch ein EXNOR-Gatter einsetzen; dadurch werden die Signale $e(t)$ und $e_{LF}(t)$ invertiert und die Kennlinie um $180^\circ$ verschoben. Wir haben die Extremwerte mit $g_{PD,0}$ und $g_{PD,1}$ und den Mittelwert mit

$$
g_{PD,M} = \frac{g_{PD,0} + g_{PD,1}}{2}
$$

bezeichnet; dabei lassen wir bewusst offen, ob es sich um Ströme oder Spannungen handelt. Für die Phasendetektor-Konstante $k_{PD}$ des EXOR/EXNOR-Phasendetektors (Index $E$) gilt:

$$
k_{PD} = \pm k_{PD,E} = \pm \frac{|g_{PD,1} - g_{PD,0}|}{\pi}
\qquad\qquad (27.24)
$$

Welcher der in Abb. 27.26 eingezeichneten möglichen Arbeitspunkte stabil ist, hängt vom Typ des Gatters — EXOR oder EXNOR — und vom Vorzeichen der VCO-Konstante ab.

Die Kennlinie hat allerdings nur dann den in Abb. 27.25 gezeigten Verlauf, wenn das Tastverhältnis des Eingangssignals $s(t)$ und des VCO-Signals $s_{VCO}(t)$ 50% beträgt; andernfalls treten in der Kennlinie Bereiche mit einem konstanten Wert $g_{PD}$ und der zugehörigen Steilheit $k_{PD} = 0$ auf. Wenn eines der beiden Signale ein abweichendes Tastverhältnis besitzt, kann man zwei Wege beschreiten:

- Man kann beide Signale mit je einem Frequenzteiler mit Teilerfaktor 2 auf die halbe Frequenz teilen und den Phasendetektor auf dieser reduzierten Frequenz betreiben, siehe Abb. 27.27. Durch die Teilung haben die geteilten Signale ein Tastverhältnis von 50%, sofern die Verzögerungszeiten für die Schaltvorgänge $0 \to 1$ und $1 \to 0$ gleich sind. In der Praxis ist das nicht immer exakt erfüllt, die typischen Abweichungen sind aber meist vernachlässigbar gering.
- Verzerrte Signale, bei denen der Anteil bei der Grundwelle dominiert, kann man mit dem in Abb. 27.28 gezeigten Symmetrier-Begrenzer in ein Rechtecksignal mit einem Tastverhältnis von 50% umwandeln.
<!-- page-import:1687:end -->

<!-- page-import:1688:start -->
27.3 Digitale PLL 1651

a Blockschaltbild und Signale

$s(t)$

$s_2(t)$

$s_{VCO}(t)$

$s_{VCO,2}(t)$

$e(t)$

$e_{LF}(t)$

b Signalverläufe für $\Phi_e = 45^\circ$

**Abb. 27.27.** Digitale PLL mit EXOR-Phasendetektor und Frequenzteilern mit Teilerfaktor 2 zur Erzeugung von Signalen mit einem Tastverhältnis von 50%

**Abb. 27.28.** VCO mit Symmetrier-Begrenzer. Der Operationsverstärker stellt die Arbeitspunktspannung $U_A$ des zweistufigen Begrenzers $(T_1, T_2$ und $T_3, T_4)$ so ein, dass die Mittelwerte der Spannungen $U_{C3}$ und $U_{C4}$ gleich sind. Das ist nur der Fall, wenn das Tastverhältnis 50% beträgt. Die Mittelwerte werden mit den Tiefpässen $R_1, C_1$ und $R_2, C_2$ gebildet. Mit dem Widerstand $R_A$ werden die Arbeitspunktspannungen $U_{C1,A}$ und $U_{C2,A}$ am Ausgang der ersten Begrenzerstufe eingestellt.
<!-- page-import:1688:end -->

<!-- page-import:1689:start -->
1652  27. Phasenregelschleife (PLL)

**Abb. 27.29.** Typische Spannungsverläufe des Symmetrier-Begrenzers aus Abb. 27.28 für ein Eingangssignal mit $f = 10\,\text{MHz}$

Der zweite Fall tritt häufig bei VCOs auf. In den meisten Fällen kann man bei einem typischen VCO mit LC-Resonanzkreis nicht die sehr gut sinusförmige Spannung am Resonanzkreis auskoppeln — das würde die Güte des Resonanzkreises reduzieren —, sondern muss eine Auskopplung an einem niederohmigen Punkt — in unserem Beispiel am Emitter des Oszillator-Transistors — vornehmen; dadurch ist das ausgekoppelte Signal mehr oder weniger verzerrt und man erhält mit einem normalen Begrenzer kein Tastverhältnis von 50%. Bei einem Symmetrier-Begrenzer gemäß Abb. 27.28 stellt eine Regelschleife den Arbeitspunkt des Begrenzers so ein, dass die Mittelwerte der beiden Ausgangsspannungen gleich sind. Das ist nur der Fall, wenn das Tastverhältnis 50% beträgt. Ein derartiger Arbeitspunkt existiert allerdings nur, wenn der Oberwellenanteil im Eingangssignal $U_e$ relativ gering ist; das ist hier der Fall. Bei Eingangssignalen mit kurzen Impulsen, d.h. hohem Oberwellenanteil, muss am Eingang ein RC-Tiefpass ergänzt werden, der den Oberwellenanteil reduziert. Abbildung 27.29 zeigt typische Spannungsverläufe4.

## 27.3.2 EXOR-/EXNOR-Phasendetektor mit Stromausgang

Der EXOR-/EXNOR-Phasendetektor kann in jeder für Gatter verfügbaren Schaltungstechnik realisiert werden; die wichtigsten Techniken haben wir im Abschnitt 6.4 beschrieben. Wir haben allerdings bereits im Abschnitt 27.2.14 gesehen, dass wir für eine phasengenaue Regelung ein Schleifenfilter mit PI-Regler verwenden müssen und dass dieses Filter besonders einfach zu realisieren ist, wenn der Phasendetektor einen Stromausgang besitzt. Letzteres ist z.B. immer dann gegeben, wenn die Gatter mit Differenzverstärkern aufgebaut sind; ein Beispiel dafür sind die im Abschnitt 6.4.5 beschriebenen Gatter mit *Current Mode Logik (CML).* Dabei stellen wir fest, dass das in Abb. 6.47 auf Seite 642 gezeigte CML-EXOR-Gatter topologisch exakt dem Doppel-Gegentaktmischer (Gilbert-Mischer) aus Abb. 25.80 auf Seite 1480 entspricht, den wir bereits bei der analogen PLL in Abschnitt 27.2 verwendet haben. Lediglich die Betriebsart ist verschieden: Während der Gilbert-Mischer bei einer analogen PLL im linearen Bereich betrieben wird — dazu

4 Die zugehörige Simulation *VCO_Limiter* finden Sie in den Simulationsbeispielen unter der Rubrik *PLL*.
<!-- page-import:1689:end -->

<!-- page-import:1690:start -->
27.3 Digitale PLL 1653

dienen die Gegenkopplungswiderstände in den Emitterleitungen der Mischer-Transistoren $T_1 \ldots T_6$ in Abb. 27.4b auf Seite 1626 —, liegt bei einem EXOR-Gatter Übersteuerung mit rechteckförmigen Ein- und Ausgangssignalen vor. Daraus folgt, dass wir aus einer analogen PLL mit einem Gilbert-Mischer als Phasendetektor eine digitale PLL mit EXOR- oder EXNOR-Gatter erhalten, indem wir:

- ein rechteckförmiges Eingangssignal mit einem Tastverhältnis von 50% anlegen;
- das Ausgangssignal des VCOs mit einem Begrenzer in ein Rechtecksignal mit einem Tastverhältnis von 50% umwandeln;
- den Gilbert-Mischer als EXOR-/EXNOR-Gatter betreiben; dabei hängt die logische Funktion — EXOR oder EXNOR — davon ab, *welchen* der beiden Ausgänge des Gilbert-Mischers wir verwenden;
- die Gleichanteile der einzelnen Signale durch eine geeignete Arbeitspunkteinstellung so wählen, dass wir alle Komponenten direkt koppeln können.

Abbildung 27.30 zeigt eine beispielhafte Ausführung, die bis auf den zusätzlichen Begrenzer weitgehend mit der analogen PLL in Abb. 27.8 auf Seite 1631 übereinstimmt. Die Wahl eines passiven Schleifenfilters entsprechend Abb. 27.18b auf Seite 1643 ist willkürlich; wir hätten genauso gut das aktive Schleifenfilter aus Abb.27.18a verwenden können.

Wenn keine Frequenzteiler vorhanden sind, beschränkt sich der Unterschied zwischen einer digitalen PLL mit EXOR-/EXNOR-Phasendetektor und einer analogen PLL auf die Kennlinie $g_{PD}$ und die Konstante $k_{PD}$ des Phasendetektors. Mit Bezug auf die Größen in Abb. 27.26 und die Zustandstabelle in Abb. 27.30 erhalten wir aus (27.24):

$$
g_{PD,1}=\frac{I_0}{2}, \quad g_{PD,0}=-\frac{I_0}{2}
\Rightarrow
k_{PD}=\pm k_{PD,E}=\pm\frac{I_0}{\pi}
\qquad (27.25)
$$

Der Index $E$ steht hier wieder für EXOR/EXNOR. Die Berechnung des Schleifenfilters erfolgt wie bei einer analogen PLL, siehe Abschnitte 27.2.15 und 27.2.16. Einschwingverhalten und Fangbereich bleiben im Vergleich zu einer analogen PLL unverändert.

## 27.3.3 EXOR-/EXNOR-Phasendetektor mit Spannungsausgang

In der diskreten Schaltungstechnik findet man gelegentlich digitale PLLs mit EXOR-Phasendetektor, die mit Standard-Logikbausteinen (74/74HC/74HCT/CD4xxx) oder mit dem PLL-Baustein 4046 (CD4046/HEF4046/74HC4046/74HCT4046) aufgebaut sind; letzteres ist in Abb. 27.31 dargestellt. In diesem Fall liegt ein EXOR-Phasendetektor mit Spannungsausgang vor. Als Schleifenfilter wird entweder ein einfacher RC-Tiefpass mit P-Regelverhalten oder ein RC-Filter mit verlustbehaftetem PI-Regelverhalten eingesetzt, siehe Abb. 27.31b. Die Dimensionierung dieser Filter und die Einstellung der VCO-Frequenz mit den Elementen $R_{VCO}$ und $C_{VCO}$ wird in den Datenblättern ausführlich beschrieben; wir gehen deshalb hier nicht näher darauf ein, weisen aber darauf hin, dass diese Filter in der Regel noch keine ausreichende Störunterdrückung gewährleisten. Für höhere Anforderungen bezüglich Phasengenauigkeit und Störunterdrückung kann man z.B. das in Abb. 27.31c gezeigte aktive Schleifenfilter 4. Ordnung mit einem PI-Regler und einem Tiefpassfilter 3. Ordnung einsetzen; dabei ist ein Pol des Tiefpasses als passiver RC-Tiefpass ausgeführt, während die beiden anderen Pole mit einem aktiven Filter 2. Ordnung realisiert werden. Aktive Filter werden im Kapitel 12 ausführlich beschrieben.
<!-- page-import:1690:end -->

<!-- page-import:1691:start -->
1654  27. Phasenregelschleife (PLL)

CML-EXNOR

$I_1 \approx I_0/2$

$e(t)$

Schleifenfilter (PI-T3-Regler)

$R_{PI}$  
$C_{PI}$  
$C_1$  
$R_2$  
$C_2$  
$R_3$  
$C_3$

$e_{LF}(t)$

$s(t)$

$T_1\ \ T_2\ \ T_3\ \ T_4$

$I_{C1}\ \ I_{C2}\ \ I_{C3}\ \ I_{C4}$

$T_5\ \ T_6$

$I_{C5}\ \ I_{C6}$

$I_0$

$U_B$

$s_{VCO}(t)$

Symmetrier-Begrenzer

$R_A$

$R_{C1}\ \ R_{C2}\ \ R_{C3}\ \ R_{C4}$

$\hat{s}_{VCO}(t)$

VCO

| $s(t)$ | 0 | 0 | 1 | 1 |
|---|---:|---:|---:|---:|
| $s_{VCO}(t)$ | 0 | 1 | 0 | 1 |
| $I_{C1}$ | 0 | 0 | 0 | $I_0$ |
| $I_{C2}$ | 0 | 0 | $I_0$ | 0 |
| $I_{C3}$ | $I_0$ | 0 | 0 | 0 |
| $I_{C4}$ | 0 | $I_0$ | 0 | 0 |
| $I_{C5}$ | 0 | 0 | $I_0$ | $I_0$ |
| $I_{C6}$ | $I_0$ | $I_0$ | 0 | 0 |
| $e(t)$ | $I_0/2$ | $-I_0/2$ | $-I_0/2$ | $I_0/2$ |

**Abb. 27.30.** Digitale PLL mit EXNOR-Phasendetektor, passivem Schleifenfilter, Clapp-VCO und Symmetrier-Begrenzer. Die Pegel-Anpassung zwischen dem Ausgang des Symmetrier-Begrenzers und dem oberen Eingang des CML-EXNOR-Gatters erfolgt mit den Kollektorschaltungen und Dioden am Ausgang des Symmetrier-Begrenzers.

Für unsere Belange sind PLLs mit dem Baustein 4046 nicht weiter von Interesse, der Baustein eignet sich aber sehr gut, um praktische Erfahrungen im Umgang und mit der Dimensionierung von digitalen PLLs zu sammeln; eine Verwendung des Bausteins in Praktika zur Ingenieursausbildung wird deshalb ausdrücklich empfohlen.
<!-- page-import:1691:end -->

<!-- page-import:1692:start -->
27.3 Digitale PLL 1655

a Blockschaltbild

b passive Schleifenfilter

P-T1-Regler

verlustbehafteter PI-T1-Regler

invertierender PI-Regler

invertierendes Filter 2. Ordnung

RC-Tiefpass

$|H_1|$
[log]

$-20\,\mathrm{dB}/\mathrm{Dek.}$

$\approx f_0/3$

f [log]

$|H_2|$
[log]

$-40\,\mathrm{dB}/\mathrm{Dek.}$

$\approx 10\,f_0$

f [log]

$|H_3|$
[log]

$-20\,\mathrm{dB}/\mathrm{Dek.}$

$\approx 3\,f_0$

f [log]

c Beispiel für ein aktives Schleifenfilter 4. Ordnung (PI-T3-Regler)

**Abb. 27.31.** Digitale PLL mit dem PLL-Baustein 4046. Der Baustein enthält neben dem gezeigten EXOR-Phasendetektor noch einen (CD/HEF4046) oder zwei (74HC/HCT4046A) weitere Phasendetektoren, die hier nicht dargestellt sind.

## 27.3.4 Sequentielle Phasendetektoren

Digitale PLLs mit EXOR-/EXNOR-Phasendetektor haben zwei Nachteile:

– das Tastverhältnis der Signale am Eingang des Phasendetektors muss 50% betragen;

– der Fangbereich ist an die Schleifenbandbreite gekoppelt.

Abhilfe schaffen sequentielle Phasendetektoren; dabei bezieht sich die Bezeichnung *sequentiell* auf die Realisierung in Form von *sequentiellen Logikschaltungen*, d.h. Logikschaltungen mit Speichern. Schaltungen dieser Art werden auch als *Schaltwerke* bezeichnet, siehe Kapitel 8.

### 27.3.4.1 Flankengetriggerter Phasendetektor

Wenn die Signale am Eingang des Phasendetektors kein Tastverhältnis von 50% haben, kann man einen *flankengetriggerten Phasendetektor* verwenden. Abbildung 27.32 zeigt eine mögliche Ausführung inklusive der Signalverläufe und der Kennlinie. Die Kennlinie verläuft über den gesamten Bereich linear; demnach gibt es nur einen möglichen Arbeitspunkt und die Phasendetektor-Konstante $k_{PD}$ ist konstant:
<!-- page-import:1692:end -->

<!-- page-import:1693:start -->
1656 27. Phasenregelschleife (PLL)

a Schaltung

b Signale

c Kennlinie $g_{PD}(\phi_e)$

d Steilheit $k_{PD}$ = Ableitung der Kennlinie

**Abb. 27.32.** Flankengetriggerter Phasendetektor

$$
k_{PD} = k_{PD,F} = \frac{g_{PD,1} - g_{PD,0}}{2\pi}
\qquad\qquad (27.26)
$$

Der Index $F$ steht für *flankengetriggert*. Ob die Ausgangsgröße eine Spannung oder ein Strom ist, hängt wie beim EXOR-/EXNOR-Phasendetektor von der Realisierung der Gatter ab. Auch hier kann man durch eine Realisierung mit Current Mode Logik (CML) den für ein Schleifenfilter mit PI-Regler vorteilhaften Stromausgang erhalten.

Es gibt weitere Ausführungen für flankenggetriggerte Phasendetektoren, die sich aber in der Funktion nicht von der hier gezeigten Ausführung unterscheiden. Der PLL-Baustein 4046 enthält in den HC/HCT-Ausführungen 74HC/HCT4046A einen flankenggetriggerten Phasendetektor, der im Datenblatt als *Phase Comparator 3* bezeichnet wird.

## 27.3.4.2 Phasen-Frequenz-Detektor

Ein wesentlicher Nachteil analoger PLLs und digitaler PLLs mit EXOR-/EXNOR- oder flankenggetriggertem Phasendetektor ist die Kopplung des Fangbereichs an die Schleifenbandbreite. Ursache dafür ist, dass die verwendeten Phasendetektoren nicht *frequenzempfindlich* sind, d.h. es handelt sich um *reine* Phasendetektoren. Bei einem derartigen Phasendetektor erhält man bei einer Differenzfrequenz $\Delta f = f_S - f_{VCO}$, deren Betrag *über* der Schleifenbandbreite $f_0$ liegt, ein periodisches Ausgangssignal mit der Grundfrequenz $\Delta f$ und einer durch das Schleifenfilter reduzierten Amplitude. Wenn die Amplitude nicht ausreicht, um die VCO-Frequenz in die Nähe der gewünschten Ausgangsfrequenz zu ziehen, schwingt die PLL nicht ein. Auch mit einem PI-Regler ändert sich daran nichts, da der Gleichanteil am Ausgang des Phasendetektors in diesem Fall praktisch nicht von der Differenzfrequenz abhängt und deshalb kein passendes Fehlersignal am Eingang des PI-Reglers anliegt.
<!-- page-import:1693:end -->

<!-- page-import:1694:start -->
## 27.3 Digitale PLL 1657

a Schaltung

Tristate-Phasendetektor

Ladungspumpe  
(Charge Pump)

FF1

$s(t)$

FF2

$s_{VCO}(t)$

$U$

$D$

$\overline{R}$

$U_b$

$I_0$

S1

$U=0$

$U=1$

$I_U$

$I_{UD}$

$e(t)$

$D=0$

$D=1$

S2

$I_D$

$I_0$

b Signalverläufe bei VCO-Nacheilung $(0<\Phi_e<180^\circ)$ und VCO-Voreilung $(180^\circ<\Phi_e<360^\circ)$

$\Phi_e=45^\circ$

$s(t)$  
$s_{VCO}(t)$  
$U$  
$D$  
$\overline{R}$  
$I_U$  
$I_D$  
$I_{UD}$  
$\overline{I_{UD}}$

$\Phi_e=-45^\circ=315^\circ$

$s(t)$  
$s_{VCO}(t)$  
$U$  
$D$  
$\overline{R}$  
$I_U$  
$I_D$  
$I_{UD}$  
$\overline{I_{UD}}$

Abb. 27.33. Tristate-Phasendetektor mit Ladungspumpe (*Charge Pump*) in CMOS-Schaltungstechnik. Die Gatter haben Spannungsausgänge und arbeiten mit den Pegeln $U_b$ für eine logische Eins und 0 V für eine logische Null.

Abhilfe schaffen *Phasen-Frequenz-Detektoren (PFD)*, die auch als *frequenzempfindliche Phasendetektoren* bezeichnet werden. Diese Phasendetektoren liefern nicht nur bei einem Phasenfehler, sondern auch bei einem Frequenzfehler einen fehlerabhängigen Gleichanteil am Ausgang. Es gibt auch hier verschiedene Ausführungen, in der Praxis wird aber fast nur noch der in Abb. 27.33a gezeigte *Tristate-Phasendetektor mit Ladungspumpe* (*tristate phase detector with charge pump*) verwendet. Dieser Phasendetektor ist ebenfalls flankengesteuert und besitzt — entsprechend der Bezeichnung *tristate* — drei Zustände, zu deren Darstellung zwei Speicher (D-Flip-Flops) benötigt werden.
<!-- page-import:1694:end -->

<!-- page-import:1695:start -->
1658  27. Phasenregelschleife (PLL)

**Abb. 27.34.** Einfache Ausführung eines Tristate-Phasendetektors mit Ladungspumpe. Die Gatter sind in CMOS-Technik realisiert und arbeiten mit den Pegeln 0 V für eine logische Null und $U_b$ für eine logische Eins.

Die Flankentriggerung ergibt sich aus dem Verhalten der beiden D-Flip-Flops, die bei einer ansteigenden Flanke des Taktsignals $C$ den Wert am Dateneingang $D$ übernehmen und halten. Wenn die ansteigende Flanke des Eingangssignals $s(t)$ vor der ansteigenden Flanke des VCO-Signals $s_{VCO}(t)$ liegt, nimmt das Signal $U$ (aufwärts, up) für die Zeit zwischen den beiden Flanken den Wert Eins an; im umgekehrten Fall gilt dasselbe für das Signal $D$ (abwärts, down). Beim Eintreffen der späteren Flanke wird zunächst das jeweils andere Signal ebenfalls auf den Wert Eins gesetzt, dieser Zustand ist jedoch nur von sehr kurzer Dauer, da das Rücksetzsignal $\overline{R}$ aktiv wird und beide Flip-Flops zurücksetzt. Abbildung 27.33b zeigt die Signalverläufe für die beiden Fälle.

Mit der *Ladungspumpe* (charge pump) werden die Zustände der beiden Flip-Flops in einen dreiwertigen Ausgangsstrom $I_{UD}$ umgewandelt, der das Ausgangssignal $e(t)$ des Phasendetektors bildet; dazu werden die Ströme der beiden Stromquellen $I_0$ mit den Umschaltern S1 und S2 entsprechend den Zuständen der Signale $U$ und $D$ entweder auf den Ausgang des Phasendetektors geschaltet oder nach Masse abgeleitet. In der Praxis kann man die Schaltung in Abb. 27.34 verwenden, bei der die beiden Stromquellen durch die Stromspiegel $T_1, T_2$ und $T_3, T_4$ realisiert sind. Eine Umschaltung der Ströme ist hier nicht erforderlich, da man die Stromspiegel mit den Transistoren $T_{S1}$ und $T_{S2}$ kurzschließen kann. Zusätzlich haben wir die Flip-Flops unter Berücksichtigung der konstanten Werte an den Eingängen mit NAND-Gattern realisiert.

In handelsüblichen integrierten Schaltungen ist die Ladungspumpe in der Regel erheblich aufwendiger aufgebaut. In modernen CMOS-Schaltungen muss man z.B. die Transistoren $T_2$ und $T_4$ mit Kaskode-Transistoren versehen, um einen ausreichend hohen Ausgangswiderstand zu erhalten. Darüber hinaus muss der Gleichlauf der Ströme über Temperatur und Prozessschwankungen sichergestellt werden. Wir gehen darauf nicht ein, da dies den Rahmen unserer Darstellung sprengt. Für ein prinzipielles Verständnis und für die noch folgenden Beispiele ist die Ausführung in Abb. 27.34 ausreichend.

Bevor wir die Kennlinie und das Verhalten bei einem Frequenzfehler $\Delta f$ beschreiben, weisen wir noch auf eine wichtige Eigenschaft dieses Phasendetektors hin: Aus den Signal-
<!-- page-import:1695:end -->

<!-- page-import:1696:start -->
27.3 Digitale PLL 1659

a Kennlinie $\bar{I}_{UD}(\phi_e)$

b Steilheit $k_{PD}$ = Ableitung der Kennlinie

**Abb. 27.35.** Statische Kennlinie eines Tristate-Phasendetektors mit Ladungspumpe

verläufen in Abb. 27.33b folgt, dass bei einem Phasenfehler $\phi_e = 0$ der Ausgangsstrom $I_{UD}$ immer auf Null bleibt. Im praktischen Betrieb ist das zwar aufgrund des Phasenrauschens der Signale nicht gegeben, die Impulse im Ausgangsstrom sind aber so kurz, dass die Energie der Störtöne am Ausgang des Phasendetektors im Vergleich zu anderen Phasendetektoren erheblich reduziert wird. Damit man diese Eigenschaft nutzen kann, muss zwingend ein Schleifenfilter mit PI-Regler verwendet werden, damit der statische Phasenfehler $\phi_e$ in allen Betriebsfällen zu Null wird oder — im Falle eines verlustbehafteten PI-Reglers — nahe bei Null liegt. Wir gehen darauf im folgenden noch näher ein.

#### 27.3.4.2.1 Statische Kennlinie

Abbildung 27.35 zeigt die statische Kennlinie eines Tristate-Phasendetektors mit Ladungspumpe. Sie ist zweiwertig, da die Reaktion auf eine ansteigende Flanke davon abhängt, ob bereits eines der beiden Flip-Flops gesetzt ist ($Q = 1$) oder nicht ($Q = 0$). In der Literatur wird die Kennlinie häufig als eindeutige Kennlinie über den erweiterten Bereich $-360^\circ \leq \phi_e \leq 360^\circ$ dargestellt, indem die gestrichelte Kennlinie in Abb. 27.35 um $360^\circ$ nach links verschoben wird; das ist aber formal nicht korrekt, da alle statischen Winkel $\phi_e \pm n \cdot 360^\circ$ mit $n = 0,1,2,3,\ldots$ äquivalent sind und wir im statischen Fall z.B. nicht zwischen $-180^\circ$ und $180^\circ$ unterscheiden können. Bei den Signalverläufen in Abb. 27.33b haben wir angenommen, dass für beide Fälle ($\phi_e = 45^\circ$ und $\phi_e = -45^\circ = 315^\circ$) jeweils beide Flip-Flops am Anfang der Darstellung rückgesetzt sind; deshalb befinden wir uns in der linken Darstellung mit $\phi_e = 45^\circ$ auf der Kennlinie $Q = 1$ mit $I_{UD} \geq 0$ und in der rechten Darstellung mit $\phi_e = 315^\circ$ auf der Kennlinie $Q = 0$ mit $I_{UD} \leq 0$. Mit einem Schleifenfilter mit PI-Regler liegt der Arbeitspunkt bei $\phi_e = 0^\circ/360^\circ$, dem einzigen gemeinsamen Punkt beider Kennlinien.

#### 27.3.4.2.2 Dynamische Kennlinie

Für den praktischen Betrieb und zur Erläuterung der Frequenzempfindlichkeit ist jedoch die dynamische Kennlinie entscheidend. Wir erhalten sie, indem wir vom eingeschwungenen Zustand mit $f_S = f_{VCO}$ und $\phi_S = \phi_{VCO}$ ausgehen und $f_S$ um eine kleine Differenzfrequenz $\Delta f$ ändern. Wir erhalten in diesem Fall eine dynamische Differenzphase:

$$
\Delta \phi(t) = 2\pi\,(f_S + \Delta f - f_{VCO})\,t + \phi_S - \phi_{VCO}
$$

$$
\qquad\qquad\qquad\qquad\quad
\begin{aligned}
f_S &= f_{VCO} \\
\phi_S &= \phi_{VCO}
\end{aligned}
\qquad
= 2\pi\,\Delta f\,t
\qquad (27.27)
$$
<!-- page-import:1696:end -->

<!-- page-import:1697:start -->
1660  27. Phasenregelschleife (PLL)

**Abb. 27.36.** Dynamische Kennlinie eines Tristate-Phasendetektors mit Ladungspumpe

Sie nimmt für $\Delta f > 0$ linear mit der Zeit $t$ zu und für $\Delta f < 0$ linear mit der Zeit $t$ ab. Für $t \to \infty$ geht ihr Betrag gegen Unendlich, d.h. die Phase läuft weg. Der zugehörige Phasenfehler am Phasendetektor beträgt:

$$
\phi_e = \Delta \phi \text{ modulo } 360^\circ
$$

Wir erhalten demnach für $\Delta \phi = \pm n \cdot 360^\circ$ mit $n = 0,1,2,3,\ldots$ einen Phasenfehler $\phi_e = 0$; das bedeutet im dynamischen Fall aber nicht, dass es sich um gleichwertige Punkte handelt, sondern dass das Eingangssignal $n$ Perioden mehr oder weniger durchlaufen hat als das VCO-Signal. Es liegt also ein *Schlupf* von $n$ Perioden vor (*cycle slips*).

Wenn wir nun den mittleren Ausgangsstrom $\overline{I}_{UD}$ über der dynamischen Differenzphase $\Delta \phi$ auftragen, indem wir zunächst den zu $\Delta \phi$ gehörigen Phasenfehler $\phi_e$ und daraus mit Hilfe der statischen Kennlinie den mittleren Ausgangsstrom $\overline{I}_{UD}$ ermitteln, erhalten wir die dynamische Kennlinie in Abb. 27.36; dabei haben wir berücksichtigt, dass wir uns für $\Delta \phi > 0$ immer auf der statischen Kennlinie $Q = 1$ und für $\Delta \phi < 0$ immer auf der statischen Kennlinie $Q = 0$ befinden.

#### 27.3.4.2.3 Frequenzempfindlichkeit

Aus der dynamischen Kennlinie folgt die Frequenzempfindlichkeit. Für eine Differenzfrequenz $\Delta f > 0$ nimmt die dynamische Phasendifferenz $\Delta \phi$ ausgehend von Null linear zu; daraus folgt ein im Mittel dreieckförmiger Verlauf des mittleren Ausgangsstroms $\overline{I}_{UD}$ entsprechend dem Verlauf der dynamischen Kennlinie im Bereich $\Delta \phi > 0$. Der Mittelwert dieses dreieckförmigen Verlaufs beträgt $I_0/2$, d.h. wir erhalten im Mittel einen positiven Ausgangsstrom am Eingang des nachfolgenden PI-Reglers und damit eine ansteigende Spannung am Ausgang des Schleifenfilters; dadurch wiederum nimmt die VCO-Frequenz ebenfalls zu, bis die Differenzfrequenz zu Null wird. Für $\Delta f < 0$ erhalten wir ein entsprechendes Verhalten in die andere Richtung. Daraus folgt, dass die Kombination aus einem Tristate-Phasendetektor mit Ladungspumpe und einem Schleifenfilter mit PI-Regler den VCO *unabhängig von der Schleifenbandbreite immer* auf die Frequenz des Eingangssignals zieht, sofern diese im Abstimmbereich des VCOs liegt.

Abbildung 27.37 zeigt die Signalverläufe für $\Delta \phi > 0$ am Beispiel $f_S = 5\,f_{VCO}/4$ bzw. $\Delta f = f_{VCO}/4$. Wir haben hier auf eine Darstellung des realen Verlaufs des mittleren Ausgangsstroms $\overline{I}_{UD}$ verzichtet, da wir dazu ein Mittelungsfilter angeben müssten; man erkennt aber am Verlauf des Ausgangsstroms $I_{UD}$ unmittelbar, dass man durch Mittelung mit einer relativ kurzen Mittelungszeit einen näherungsweise dreieckförmigen Verlauf und durch Mittelung mit einer relativ langen Mittelungszeit $\overline{I}_{UD} = I_0/2$ erhält.
<!-- page-import:1697:end -->

<!-- page-import:1698:start -->
27.3 Digitale PLL 1661

$s(t)$

$s_{VCO}(t)$

$U$

$D$

$\overline{R}$

$I_U$

$I_D$

$I_{UD}$

$0$

$I_0$

$0$

$I_0$

$0$

$I_0$

$0$

$-I_0$

**Abb. 27.37.** Signalverläufe eines Tristate-Phasendetektors mit Ladungspumpe für $f_S = 5\,f_{VCO}/4$ bzw. $\Delta f = f_{VCO}/4$.

#### 27.3.4.2.4 Verhältnis zwischen statischer und dynamischer Kennlinie

Wir betonen hier noch einmal explizit, dass die dynamische Kennlinie in Abb. 27.36 mit der statischen Kennlinie in Abb. 27.35 *in enger Verbindung* steht, aber einen *völlig anderen Betriebsfall* beschreibt. Die dynamische Kennlinie ist über der dynamischen Differenzphase $\Delta \phi$ aufgetragen, die gemäß (27.27) auf Seite 1659 der mit $2\pi\,\Delta f$ multiplizierten Zeit seit dem Auftreten der Differenzfrequenz $\Delta f$ entspricht. Hier sind alle Größen *in Fluss*. Dagegen beschreibt die statische Kennlinie die Verhältnisse im eingeschwungenen Zustand, d.h. bei konstantem Phasenfehler $\phi_e$. In der Literatur werden die beiden Kennlinien meist nicht korrekt getrennt; man findet deshalb häufig Darstellungen, in denen die Kennlinien so miteinander *vermischt* sind, dass weder der statische noch der dynamische Fall korrekt wiedergegeben wird.

#### 27.3.4.2.5 Phasendetektor-Konstante

Aus der statischen Kennlinie erhalten wir die Phasendetektor-Konstante:

$$
k_{PD} = k_{PD,CP} = \frac{I_0}{2\pi}
$$

(27.28)

Dabei steht der Index $CP$ für *Charge Pump*. Wir haben bereits bei der Beschreibung analoger PLLs gesehen, dass das Produkt aus der Phasendetektor-Konstante $k_{PD}$ und der VCO-Konstante $k_{VCO}$ konstant sein muss, damit eine PLL ein über den gesamten Arbeitsbereich einheitliches Einschwingverhalten besitzt; im Abschnitt 27.3.7 werden wir sehen, dass bei PLLs mit einem Frequenzteiler innerhalb der Schleife der Kehrwert des Teilerfaktors als dritter Faktor hinzukommt. Bei PLLs mit großem Abstimmbereich ist weder die VCO-Konstante noch der Teilerfaktor ausreichend konstant; deshalb wird eine Methode zur Kompensation benötigt. In der Praxis erfolgt diese Kompensation durch eine Anpassung der Phasendetektorkonstanten $k_{PD,CP}$; dazu wird die Konstantstromquelle $I_0$ durch eine *digital gesteuerte Stromquelle* ersetzt. Realisiert wird eine derartige Stromquelle durch einen DA-Umsetzer mit Stromausgang; dazu kann man die in den Abschnitten 17.2.2 und 17.2.3 beschriebenen Schaltungen verwenden, indem man auf die Strom-Spannungs-Wandlung mit einem Operationsverstärker oder einem Lastwiderstand $R_L$ verzichtet und den Strom $I_K$ bzw. $I_a$ als Ausgangsgröße verwendet, siehe z.B. Abb. 17.20 auf Seite 1020.
<!-- page-import:1698:end -->

<!-- page-import:1699:start -->
1662  27. Phasenregelschleife (PLL)

## 27.3.5 Störtöne

Neben der Phasendetektor-Konstante sind die auftretenden Störtöne (*spurious tones*) wichtig, die in der Praxis meist nur als *spurs* bezeichnet werden. Im Abschnitt 27.2.2 haben wir gesehen, dass bei einer analogen PLL mit einem Mischer als Phasendetektor im eingeschwungenen Zustand nur ein Störton bei der doppelten Eingangsfrequenz $(2f_S)$ auftritt. Die Amplitude dieses Störtons entspricht dem Maximum $\hat e$ der Kennlinie, das gleichzeitig der Phasendetektor-Konstanten im optimalen Arbeitspunkt, d.h. in der Mitte des ansteigenden oder abfallenden Teils der Kennlinie, entspricht, siehe (27.3), (27.5) und (27.7). Die auf die Phasendetektor-Konstante bezogene Störamplitude beträgt bei einem Mischer (Index $M$) demnach Eins:

$$
a_{n,M}(2f_S) = 1
$$

Bei digitalen Phasendetektoren erhalten wir am Ausgang des Phasendetektors rechteckförmige Signale, die Anteile bei der Eingangsfrequenz $f_S$ und Vielfachen davon enthalten. Bei einem EXOR-/EXNOR-Phasendetektor mit Stromausgang erhalten wir im optimalen Arbeitspunkt einen rechteckförmigen Ausgangsstrom mit den Werten $\pm I_0/2$ und einem Tastverhältnis von 50%. Für den Störanteil erhalten wir mit Hilfe der Reihenentwicklung

$$
x(t) = \operatorname{sign}\{\cos \omega_S t\} = \frac{4}{\pi}\left(\cos \omega_S t + \frac{1}{3}\cos(3\omega_S t) + \frac{1}{5}\cos(5\omega_S t) + \cdots \right)
$$

eines symmetrischen Rechtecksignals mit den Werten $\pm 1$ und der Phasendetektor-Konstanten

$$
k_{PD,E} = \frac{I_0}{\pi}
$$

die normierten Amplituden der Störtöne bei den Frequenzen $mf_S$:

$$
a_{n,E}(mf_S) = \frac{2}{m} \qquad \text{für } m = 1,2,3,\ldots
$$

Bei einem Tristate-Phasendetektor mit Ladungspumpe und einem Schleifenfilter mit PI-Regler bleibt der Ausgangsstrom des Phasendetektors im eingeschwungenen Zustand theoretisch auf Null, d.h. es gibt weder einen Nutz- noch einen Störanteil. In der Praxis treten jedoch aufgrund des Phasenrauschens des Eingangssignals und des VCO-Signals kurze Impulse auf, deren Dauer proportional zum Effektivwert $\varphi_{e,sff}$ des Phasenrauschens ist; hinzu kommt eine systematische Abweichung, die durch Verluste im Schleifenfilter und im Abstimmkreis des VCOs verursacht wird und ebenfalls in den Effektivwert $\varphi_{e,sff}$ eingeht. Wenn wir annehmen, dass der Effektivwert in rad gegeben ist, erhalten wir mit dem Tastverhältnis

$$
D = \frac{\varphi_{e,sff}}{2\pi}
$$

und den Fourier-Koeffizienten

$$
c_F(mf_S) = \frac{2}{\pi m}\sin(\pi mD) \qquad \text{für } m = 1,2,3,\ldots
$$

eines unipolaren Rechtecksignals mit dem Tastverhältnis $D$ und der Amplitude Eins die normierten Amplituden der Störtöne bei den Frequenzen $mf_S$:

$$
a_{n,T}(mf_S) = \frac{4}{m}\sin\left(\frac{m\varphi_{e,sff}}{2}\right) \overset{m\varphi_{e,sff}<1}{=} 2\varphi_{e,sff}
$$
<!-- page-import:1699:end -->

<!-- page-import:1700:start -->
27.3 Digitale PLL 1663

Abb. 27.38. Normierte Amplituden der Störtöne. Für den Tristate-Phasendetektor mit Ladungspumpe ist ein Effektivwert von $\varphi_{e,sff} = 1{,}5^\circ = 0{,}05\,\mathrm{rad}$ angenommen.

Typische Werte liegen im Bereich $\varphi_{e,sff} = 0{,}1^\circ \dots 3^\circ = 0{,}0035\,\mathrm{rad} \dots 0{,}1\,\mathrm{rad}$. In diesem Fall ist die Bedingung $m\varphi_{e,sff} < 1$ mindestens bis $m \approx 10$ erfüllt, d.h. wir erhalten einen Kamm von Störtönen im Abstand $f_S$ mit nahezu gleicher Amplitude.

Abbildung 27.38 zeigt einen Vergleich der normierten Amplituden der Störtöne für die drei Phasendetektoren. Man erkennt die deutliche Überlegenheit des Tristate-Phasendetektors mit Ladungspumpe, selbst bei einem hohen Effektivwert des Phasenrauschens. Man kann allerdings bei einer analogen PLL eine noch bessere Unterdrückung erzielen, wenn die Eingangsfrequenz nur wenig schwankt und eine Bandsperre zur Unterdrückung des einzigen Störtons bei der Frequenz $2\,f_S$ eingesetzt wird.

## 27.3.6 Beispiel für eine digitale PLL mit Phasen-Frequenz-Detektor

Wir verdeutlichen das Verhalten wieder mit einem konkreten Beispiel. Da in der Bauteile-Bibliothek der Demo-Version von PSpice nur die relativ langsamen Gatter der 74-Familie enthalten sind, behelfen wir uns, indem wir die Eingangsfrequenz von 10 MHz auf 1 MHz reduzieren.

Abbildung 27.39 zeigt die Schaltung des Beispiels. Im oberen Teil ist der Tristate-Phasendetektor mit Ladungspumpe aus Abb. 27.34 auf Seite 1658 in unveränderter Form dargestellt. Aufgrund der hohen Störunterdrückung des Tristate-Phasendetektors begnügen wir uns hier mit einem Schleifenfilter 3. Ordnung. Den bereits in den vorausgegangenen Beispielen verwendeten VCO haben wir um einen Pegelwandler, bestehend aus zwei Verstärkerstufen und einem Inverter mit Schmitt-Trigger, ergänzt; damit erhalten wir ein VCO-Signal $s_{VCO}(t)$ mit Logikpegeln.

Da wir hier eine PLL ohne Frequenzteiler betrachten und gleichzeitig die VCO-Frequenz aus simulationstechnischen Gründen sehr klein gewählt haben, ergibt sich eine starke Verkopplung des Schleifenfilters mit dem Abstimmkreis des VCOs; wir müssen deshalb in diesem besonderen Fall eine Entkopplung mit dem in Abb. 27.39 gezeigten Puffer vornehmen. Wir gehen darauf im folgenden noch näher ein.

### 27.3.6.1 Kennlinien und Konstanten

Abbildung 27.40 zeigt die Kennlinie und die VCO-Konstante des VCOs. Wir haben hier zusätzlich eine einfache Näherung für die VCO-Konstante eingezeichnet:
<!-- page-import:1700:end -->

<!-- page-import:1701:start -->
1664  27. Phasenregelschleife (PLL)

Tristate-Phasendetektor mit Ladungspumpe

$s(t)$

$U$

$\overline{R}$

$\overline{D}$

$D$

$T_1$

$T_3$

$T_{S1}$

$T_{S2}$

$T_2$

$T_4$

$I_0$

$I_{UD}$

$s_{VCO}(t)$

VCO  
mit  
Pegel-  
wandler

Puffer

Schleifen-  
filter

$R_3$

$C_3\ C_2$

$R_1$

$C_1$

$R_A$

$U_A$

**Abb. 27.39.** Beispiel für eine digitale PLL mit Phasen-Frequenz-Detektor und passivem Schleifenfilter. Bei den Gattern handelt es sich um CMOS-Gatter. Da wir hier eine PLL ohne Frequenzteiler betrachten und aus simulationstechnischen Gründen eine geringe VCO-Frequenz gewählt haben, müssen wir das Schleifenfilter und den Abstimmkreis des VCOs mit einem Puffer entkoppeln.

$$
k_{VCO} \approx \frac{2\pi \cdot 0{,}13\ \mathrm{Mrad/s}}{U_A}
$$

Da die Phasendetektor-Konstante $k_{PD}$ bei einem Tristate-Phasendetektor mit Ladungspumpe konstant ist, wird die Nichtlinearität hier ausschließlich durch den VCO verursacht. Für das Produkt der Konstanten erhalten wir:

$$
k_{PD}\,k_{VCO} \approx \frac{I_0}{2\pi}\,\frac{2\pi \cdot 0{,}13\ \mathrm{Mrad/s}}{U_A}\Big|_{U_A=2\ \mathrm{V}} = 65\ \mathrm{krad}/(\mathrm{Vs}) \cdot I_0
$$

#### 27.3.6.2 Dimensionierung des Schleifenfilters

Für das Schleifenfilter erhalten wir nach einer etwas umfangreicheren Rechnung:

$$
H_{LF}(s)=\frac{U_A(s)}{I_{UD}(s)}=\frac{1+sC_1R_1}{c_1s+c_2s^2+c_3s^3}
$$
<!-- page-import:1701:end -->

<!-- page-import:1702:start -->
27.3 Digitale PLL 1665

a Kennlinie $f_{VCO}$

b VCO-Konstante $k_{VCO}$

Abb. 27.40. Kennlinie und VCO-Konstante des VCOs aus Abb. 27.39

$$
c_1 = C_1 + C_2 + C_3
$$

$$
c_2 = (C_2 + C_3)\,C_1R_1 + (C_1 + C_2)\,C_3R_3
$$

$$
c_3 = C_1C_2C_3R_1R_3
$$

Wenn wir diese Übertragungsfunktion als Produkt eines PI-Reglers mit einer P-Verstärkung von Eins und eines Tiefpassfilters 2. Ordnung darstellen, erhalten wir:

$$
H_{LF}(s) = \frac{1 + sT_I}{sT_I}\,\frac{H_0}{(1 + sT_1)(1 + sT_2)}
= \frac{1 + sT_I}{sT_I}\,\frac{H_0}{1 + s(T_1 + T_2) + s^2T_1T_2}
$$

$$
T_I = C_1R_1
$$

$$
c_1 = \frac{T_I}{H_0}
$$

$$
c_2 = c_1(T_1 + T_2) = c_1T_0
$$

$$
c_3 = c_1T_1T_2 = c_1(T_0 - T_2)T_2
$$

Dabei ist $T_0 = T_1 + T_2$ die Summenzeitkonstante, die wir im Abschnitt 27.2.9 eingeführt haben. Die Grundverstärkung $H_0$ des Tiefpassfilters hat hier die Dimension eines Widerstands.

Die Schleifenbandbreite digitaler PLLs beträgt in der Regel maximal 1% der Frequenz des Eingangssignals am Phasendetektor. Wir gehen hier an die obere Grenze und wählen $\omega_0 = 2\pi \cdot 10\,\mathrm{kHz} = 62{,}8\,\mathrm{krad/s}$. Für die Dimensionierung nach dem symmetrischen Optimum geben wir $k = 2{,}4$ vor; daraus folgt mit (27.20):

$$
T_I = \frac{k}{\omega_0} = 38{,}2\,\mu\mathrm{s}
,\quad
T_0 = \frac{1}{k\omega_0} = 6{,}63\,\mu\mathrm{s}
$$

Wir wählen $I_0 = 100\,\mu\mathrm{A}$ und erhalten damit aus der Bedingung (27.21):

$$
H_0 = \frac{\omega_0}{k_{PD}\,k_{VCO}} = \frac{62{,}8\,\mathrm{krad/s}}{65\,\mathrm{krad/(Vs)} \cdot 100\,\mu\mathrm{A}} = 9{,}66\,\mathrm{k}\Omega
$$

Daraus folgt:
<!-- page-import:1702:end -->

<!-- page-import:1703:start -->
1666  27. Phasenregelschleife (PLL)

$$
c_1 \;=\; \frac{T_1}{H_0} \;=\; 3{,}95 \cdot 10^{-9}\,\mathrm{F}
,\qquad
c_2 \;=\; c_1 T_0 \;=\; 2{,}62 \cdot 10^{-14}\,\mathrm{Fs}
$$

Damit der Betrag der Übertragungsfunktion des Schleifenfilters im Sperrbereich minimal wird, muss der Koeffizient $c_3$ maximal werden:

$$
\lim_{\omega \to \infty} |H_{LF}(j\omega)| \;\sim\; \frac{1}{c_3 \omega^2}
\;=\;
\frac{1}{(T_0 - T_2)\,T_2\,\omega^2}
\;\xRightarrow{\min}\;
T_1 = T_2 = \frac{T_0}{2}
$$

Dieses Maximum können wir aber mit einem passiven Schleifenfilter aufgrund des resultierenden doppelten Pols nicht realisieren; wir müssen deshalb $T_2 < T_0/2$ wählen und prüfen, ob wir akzeptable Werte für die Bauelemente erhalten.

Wir setzen $T_2 = k_2 T_0$ und beginnen mit $k_2 = 1/10$; dann gilt:

$$
c_3 \;=\; c_1 (T_0 - T_2) T_2
\;=\; c_1 k_2 (1-k_2) T_0^2
\;=\; 1{,}56 \cdot 10^{-20}\,\mathrm{Fs^2}
$$

Damit erhalten wir das folgende nichtlineare Gleichungssystem zur Bestimmung der Werte der Bauelemente:

$$
\begin{aligned}
C_1 + C_2 + C_3 \hspace{4.3em}&= c_1 = 3{,}95 \cdot 10^{-9}\,\mathrm{F} \\
(C_2 + C_3)\,T_I + (C_1 + C_2)\,C_3 R_3 \hspace{0.5em}&= c_2 = 2{,}62 \cdot 10^{-14}\,\mathrm{Fs} \\
T_I C_2 C_3 R_3 \hspace{5.4em}&= c_3 = 1{,}56 \cdot 10^{-20}\,\mathrm{Fs^2}
\end{aligned}
$$

Dabei haben wir $T_I = C_1 R_1$ verwendet. Da wir vier freie Variablen — $C_1, C_2, C_3, R_3$ —, aber nur drei Gleichungen haben, können wir eine Variable vorgeben.

Gleichungssysteme dieser Art werden in der Regel mit dem Newton-Verfahren gelöst, auf das wir hier nur kurz eingehen. Wenn wir die Konstanten auf der rechten Seite unseres Gleichungssystems auf die linke Seite bringen und $R_3$ vorgeben, erhalten wir:

$$
\begin{bmatrix}
f_1(C_1, C_2, C_3) \\
f_2(C_1, C_2, C_3) \\
f_3(C_1, C_2, C_3)
\end{bmatrix}
=
\begin{bmatrix}
C_1 + C_2 + C_3 \\
(C_2 + C_3)\,T_I + (C_1 + C_2)\,C_3 R_3 \\
T_I C_2 C_3 R_3
\end{bmatrix}
-
\begin{bmatrix}
c_1 \\
c_2 \\
c_3
\end{bmatrix}
=
\begin{bmatrix}
0 \\
0 \\
0
\end{bmatrix}
$$

In matrizieller Form gilt:

$$
f(x) = 0
\qquad \text{mit} \qquad
f(x) = [f_1(x), f_2(x), f_3(x)]^T
\qquad \text{und} \qquad
x = [C_1, C_2, C_3]^T
$$

Das Newton-Verfahren ist ein iteratives Verfahren, bei dem aus einer Näherungslösung $x_n$ eine verbesserte Näherungslösung

$$
x_{n+1}
=
x_n
-
\alpha
\left(
\left.
\frac{\partial f(x)}{\partial x}
\right|_{x=x_n}
\right)^{-1}
f(x_n)
\qquad \text{mit } \alpha \leq 1
$$

berechnet wird. Die Matrix in der großen Klammer beinhaltet die partiellen Ableitungen der einzelnen Gleichungen nach den einzelnen Variablen und wird Jacobi-Matrix genannt; in unserem Fall mit drei Gleichungen und drei Variablen erhalten wir demnach 9 partielle Ableitungen. Mit einem geeigneten Konvergenz-Parameter $\alpha$ und einem geeigneten Startvektor $x_0$ konvergiert das Verfahren gegen die gesuchte Lösung. Wir geben $R_3 = 20\,\mathrm{k}\Omega$ vor und erhalten mit $k_2 = 1/10$ folgende Startwerte:

- Wir nehmen $C_1 \gg C_2 + C_3$ an; daraus erhalten wir die Abschätzung:

$$
C_1 \approx c_1 \approx 4\,\mathrm{nF}
$$
<!-- page-import:1703:end -->

<!-- page-import:1704:start -->
27.3 Digitale PLL 1667

– Für den ersten Pol des Tiefpassfilters gilt:

$$
T_1 = T_0 - T_2 \approx C_2 R_1 = \frac{C_2}{C_1} T_I
$$

Daraus folgt die Abschätzung:

$$
C_2 \approx \frac{T_0 - T_2}{T_I} C_1 = \frac{T_0}{T_I} C_1 (1 - k_2) \approx 0{,}6\,\mathrm{nF}
$$

– Für die Zeitkonstante $T_2$ verwenden wir die Abschätzung $T_2 \approx C_3 R_3$; daraus folgt:

$$
C_3 \approx \frac{T_2}{R_3} = \frac{k_2 T_0}{R_3} \approx 33\,\mathrm{pF}
$$

Wir haben die Gleichungen und das Newton-Verfahren mit $\alpha = 0{,}1$ in einem Mathematikprogramm implementiert und Lösungen für verschiedene Werte von $k_2$ ermittelt. Mit $k_2 = 0{,}23$ erhalten wir $R_1 \approx 11\,\mathrm{k}\Omega$, $C_1 \approx 3{,}5\,\mathrm{nF}$, $C_2 \approx 350\,\mathrm{pF}$ und $C_3 \approx 110\,\mathrm{pF}$.

Einen größeren Wert für $k_2$ und eine damit verbundene höhere Dämpfung im Sperrbereich können wir nur erzielen, indem wir entweder $R_3$ hochohmiger wählen oder den Konstantstrom $I_0$ erhöhen. Ersteres wird durch die erforderliche Kopplung mit dem Abstimmkreis des VCOs limitiert, während letzteres die Störungen durch die Stromimpulse des Phasendetektors erhöht und größere Kapazitätswerte im Schleifenfilter erfordert. Zusätzlich müssen wir im allgemeinen die Tiefpass-Charakteristik des Abstimmkreises — in unserem Fall durch den Widerstand $R_A$ und die Kapazitäten des Schwingkreises — berücksichtigen, indem wir auch hier wieder das Verfahren der Summenzeitkonstanten anwenden und die Zeitkonstante $T_2$ des Schleifenfilters um die Zeitkonstante des Abstimmkreises verringern. In unserem Simulationsbeispiel können wir darauf verzichten, da wir ohnehin einen Puffer zur Entkopplung einsetzen müssen. Auch das Rauschen der Ladungspumpe und der Widerstände des Schleifenfilters spielt bei der Wahl der Werte eine große Rolle, eine ausführliche Diskussion aller relevanten Aspekte sprengt jedoch den Rahmen unserer Darstellung.

### 27.3.6.3 Verhalten

Abbildung 27.41 zeigt den Verlauf der Abstimmspannung für sprunghafte Frequenzänderungen $\Delta f$ im Bereich $\pm 120\,\mathrm{kHz}$. Wir stellen fest, dass die PLL aufgrund des Einsatzes eines Tristate-Phasendetektors für alle Werte von $\Delta f$ einschwingt. Für $|\Delta f| \leq 40\,\mathrm{kHz}$ ist der Einschwingvorgang linear und die Verläufe entsprechen der Kleinsignal-Sprungantwort in Abb. 27.17 auf Seite 1642. Für größere Werte von $\Delta f$ treten Schlupf-Zyklen (cycle slips) auf, die durch den sägezahnartigen Verlauf der dynamischen Kennlinie des Tristate-Phasendetektors in Abb. 27.36 auf Seite 1660 verursacht werden. Ein Schlupf-Zyklus tritt immer dann auf, wenn der Phasenfehler den Bereich $\pm 360^\circ$ überschreitet, so dass ein Übergang auf den nächsten Kennlinienast der dynamischen Kennlinie erfolgt; dabei tritt eine Phasenverschiebung von $+360^\circ$ ($\Delta f > 0$) bzw. $-360^\circ$ ($\Delta f < 0$) auf, d.h. der VCO lässt im Vergleich zum Eingangssignal eine Periode aus ($\Delta f > 0$) oder erzeugt eine Periode zu viel ($\Delta f < 0$). Mit zunehmender Frequenzänderung nimmt die Anzahl der Schlupf-Zyklen zu. In unserem Beispiel tritt für $\Delta f = 60\,\mathrm{kHz}$ ein Schlupf-Zyklus auf; für $\Delta f = 120\,\mathrm{kHz}$ erhalten wir 7 Schlupf-Zyklen.

Weiterhin stellen wir fest, dass der Einschwingvorgang aufgrund der starken Nichtlinearität der VCO-Kennlinie vor allem für $\Delta f < 0$, in geringerem Maße aber auch für $\Delta f > 0$, ein zunehmendes Überschwingen aufweist; bereits für $\Delta f = -40\,\mathrm{kHz}$ erhalten [unclear]
<!-- page-import:1704:end -->

<!-- page-import:1705:start -->
1668 27. Phasenregelschleife (PLL)

**Abb. 27.41.** Verhalten der digitalen PLL mit Tristate-Phasendetektor

wir eine deutlich erkennbare gedämpfte Schwingung. Man kann nun versuchen, das Verhalten durch eine Erhöhung des Faktors $k$ des symmetrischen Optimums zu verbessern; dem sind jedoch enge Grenzen gesetzt. Wir gehen hier einen anderen Weg und versuchen, die VCO-Kennlinie zu linearisieren. Dabei machen wir uns zu Nutze, dass:

- die VCO-Konstante $k_{VCO}$ gemäß Abb. 27.40b auf Seite 1665 näherungsweise einen $1/x$-Verlauf aufweist;
- die Phasendetektor-Konstante $k_{PD}$ proportional zum Strom $I_0$ der Ladungspumpe ist und in die Regelschleife nur das Produkt $k_{PD}\,k_{VCO}$ eingeht.

Demnach erhalten wir ein näherungsweise konstantes Produkt $k_{PD}\,k_{VCO}$, indem wir den Strom $I_0$ mit einer spannungsgesteuerten Stromquelle erzeugen, die von der Abstimmspannung $U_A$ des VCOs gesteuert wird:

$$
I_0 = I_0(U_A) = S_0\,U_A
$$

Dann gilt:

$$
k_{PD}\,k_{VCO}
=
\frac{I_0}{2\pi}\,\frac{2\pi \cdot 0{,}13\ \mathrm{Mrad/s}}{U_A}
\quad \overset{I_0=S_0U_A}{=}\quad
S_0 \cdot 0{,}13\ \mathrm{Mrad/s}
$$

Abbildung 27.42 zeigt das Verhalten mit Linearisierung; wir haben dabei $S_0 = 50\ \mu\mathrm{A}/\mathrm{V}$ gewählt, damit wir für $U_A = 2\ \mathrm{V}$ denselben Strom erhalten wie vorher. Das Einschwingverhalten wird durch die Linearisierung deutlich verbessert.
<!-- page-import:1705:end -->

<!-- page-import:1706:start -->
27.3 Digitale PLL 1669

**Abb. 27.42.** Verhalten der digitalen PLL mit Tristate-Phasendetektor und Linearisierung der VCO-Kennlinie mittels Steuerung des Stroms der Ladungspumpe durch die Abstimmspannung des VCOs

Abbildung 27.43 zeigt eine mögliche Schaltung zur Steuerung des Stroms der Ladungspumpe. Der Operationsverstärker bildet zusammen mit den Transistoren $T_5$ und $T_6$ eine spannungsgesteuerte Stromquelle mit zwei Ausgängen. Während der Strom von $T_6$ den oberen Zweig der Ladungspumpe direkt speist, wird der Strom von $T_5$ über den Stromspiegel $T_7, T_8$ auf den unteren Zweig geleitet.

$$
I_0=\frac{U_S}{R_S}=\frac{U_A R_2}{R_S(R_1+R_2)}
\qquad\Rightarrow\qquad
S_0=\frac{I_0}{U_A}=\frac{R_2}{R_S(R_1+R_2)}
$$

**Abb. 27.43.** Schaltung zur Steuerung des Stroms der Ladungspumpe
<!-- page-import:1706:end -->

<!-- page-import:1708:start -->
27.3 Digitale PLL 1671

$n_2 = [\,n_2(1), n_2(2), \dots, n_2(M-1), n_2(M), n_2(1), n_2(2), \dots\,]$

mit einer Sequenz $n_2(n)$ der Länge $M$ verwendet; die Kanalwahl erfolgt in diesem Fall durch Verwendung von Sequenzen mit verschiedenen Mittelwerten:

$$
\overline{n}_2 = \frac{1}{M}\sum_{i=1}^{M} n_2(i)
$$

Die Frequenzen der Signale am Phasendetektor sind hier nur im Mittel gleich: $f_1 = \overline{f}_2$. Wir gehen darauf im Abschnitt 27.3.9 noch näher ein.

Wir müssen also zwei Vorgänge trennen:

- die *Kanalwahl* durch Einstellung des Teilerfaktors $n_2$ bei einer Integer-N-PLL oder durch Auswahl einer Sequenz $n_2(n)$ mit einem vorgegebenen Mittelwert $\overline{n}_2$ bei einer Fractional-N-PLL;
- die *Teilerfaktorsteuerung* zur Änderung des Teilerfaktors entsprechend einer Sequenz $n_2(n)$ bei einer Fractional-N-PLL.

## 27.3.7.3 Momentanwerte und Mittelwerte

Bei einer Fractional-N-PLL müssen wir aufgrund der Teilerfaktorsteuerung zwischen den Momentanwerten $f_2(n)$, $\varphi_{S2}(n)$ und $n_2(n)$ und den Mittelwerten $\overline{f}_2$, $\overline{\varphi}_{S2}$ und $\overline{n}_2$ unterscheiden. Im Kleinsignalersatzschaltbild in Abb. 27.44b gilt im eingeschwungenen Zustand $\varphi_{S1} = \overline{\varphi}_{S2}$, d.h. die Phasen $\varphi_{S1}$ und $\varphi_{S2}$ sind nur im Mittel gleich und der Phasenfehler $\varphi_e$ wird nur im Mittel zu Null. Im Prinzip könnte man auch den Teilerfaktor $n_1$ einer Teilerfaktorsteuerung unterwerfen, das ist jedoch in der Praxis unüblich.

## 27.3.8 Integer-N-PLL

Bei einer Integer-N-PLL gilt im eingeschwungenen Zustand:

$$
f_{VCO} = \frac{n_2}{n_1} f_{REF}
$$

(27.29)

Für die Übertragungsfunktionen der offenen $(ol)$ und der geschlossenen $(cl)$ Schleife gilt:

$$
H_{ol}(s) = \frac{k_{PD}\,k_{VCO}}{n_2}\frac{H_{LF}(s)}{s}
$$

$$
H_{cl}(s) = \frac{n_2}{n_1}\frac{H_{ol}(s)}{1+H_{ol}(s)} = \frac{n_2}{n_1}\frac{1}{1+\frac{n_2 s}{k_{PD}\,k_{VCO}\,H_{LF}(s)}}
$$

(27.30)

(27.31)

Die Bedingung (27.21) für das symmetrische Optimum bei Verwendung eines Schleifenfilters mit PI-Regler lautet nun:

$$
\frac{k_{PD}\,k_{VCO}\,H_0}{n_2} = \omega_0
$$

(27.32)

Bei der Dimensionierung des Schleifenfilters müssen wir demnach nur die VCO-Konstante $k_{VCO}$ durch $k_{VCO}/n_2$ ersetzen und können dann wie im Abschnitt 27.3.6.2 auf Seite 1664
<!-- page-import:1708:end -->

<!-- page-import:1709:start -->
1672 27. Phasenregelschleife (PLL)

a Schaltung

b Signalverläufe

**Abb. 27.45.** Multi-Modulus-Teiler 2/3 mit Teilerfaktorsteuerung für einen mittleren Teilerfaktor $\bar{n}_2 = 5/2$. Der Teilerfaktor 3 wird dadurch erzeugt, dass positive Flanken des Eingangssignals $C$ verschluckt (swallowed) werden.

vorgehen. Der VCO und der in der Schleife nachfolgende Frequenzteiler mit dem Faktor $n_2$ bilden demnach einen Ersatz-VCO mit einer um den Faktor $n_2$ reduzierten Frequenz.

Das Verhalten einer Integer-N-PLL entspricht dem Verhalten einer digitalen PLL ohne Frequenzteiler, das wir im Abschnitt 27.3.6.3 auf Seite 1667 beschrieben haben. Die Störtöne haben wir bereits im Abschnitt 27.3.5 auf Seite 1662 behandelt. Damit ist zur Integer-N-PLL bereits alles gesagt, was an dieser Stelle zu sagen ist. Eine weitergehende Untersuchung der Eigenschaften und eine Abgrenzung zu einer Fractional-N-PLL führen wir bei der Untersuchung des Rauschverhaltens im Abschnitt 27.4 durch.

## 27.3.9 Fractional-N-PLL

Für eine Fractional-N-PLL gelten die Gleichungen (27.29)–(27.32) einer Integer-N-PLL in gleicher Weise, wenn man anstelle des Teilerfaktors $n_2$ den mittleren Teilerfaktor $\bar{n}_2$ einsetzt. Wir können deshalb sofort zur Realisierung der benötigten steuerbaren Frequenzteiler und der Teilerfaktorsteuerung übergehen.

### 27.3.9.1 Steuerbare Frequenzteiler

Steuerbare Frequenzteiler werden auch als Multi-Modulus-Teiler (multi-modulus divider, MMD) bezeichnet. Abbildung 27.45 zeigt als Beispiel einen Multi-Modulus-Teiler mit zwei D-Flip-Flops, der zwischen den Teilerfaktoren 2 und 3 umgeschaltet werden kann. Die Umschaltung erfolgt alternierend mit Hilfe eines weiteren D-Flip-Flops, so dass sich ein mittlerer Teilerfaktor von $\bar{n}_2 = 5/2$ ergibt.
<!-- page-import:1709:end -->

<!-- page-import:1710:start -->
27.3 Digitale PLL 1673

a Schaltung

b Zustandsdiagramm

**Abb. 27.46.** $P$-stufiger *swallow counter* als Multi-Modulus-Teiler $N/N\!+\!1$ mit $N = 2^P$

Der Multi-Modulus-Teiler 2/3 stellt die einfachste Ausführung einer Familie von Teilern der Form $N/N\!+\!1$ dar; die weiteren Mitglieder der Familie sind 3/4, 4/5, 6/7, usw.. In der Praxis werden besonders häufig Teiler verwendet, bei denen $N$ eine Zweierpotenz ist:

$$
N = 2^P \qquad \text{für } P = 1,2,3,\ldots
$$

Die Realisierung erfolgt in diesem Fall durch $P$ Flip-Flops, die einen $P$-bit-Dualzähler bilden — in Abb. 27.45a mit $P = 1$ ist das das Flip-Flop FF2 —, und einem weiteren Flip-Flop, mit dem ein zusätzlicher Zyklus des Eingangssignals $C$ eingefügt wird, wenn das Steuersignal $MC$ (*modulus control*) gesetzt ist, siehe Abb. 27.45b. Dieser zusätzliche Zyklus wird dadurch eingefügt, dass pro Durchlauf *eine* ansteigende Flanke des Eingangssignals $C$ *verschluckt* (*swallowed*, von *to swallow*) wird; man bezeichnet diese Frequenzteiler deshalb auch als *swallow counter*. Abbildung 27.46 zeigt die Schaltung und das Zustandsdiagramm eines allgemeinen, $P$-stufigen *swallow counters*; dabei haben wir als Zähler einen synchronen Dualzähler gemäß Abschnitt 8.2.2 verwendet.

Die bisher behandelten Multi-Modulus-Teiler werden auch als *Dual-Modulus-Teiler* bezeichnet, da sie *zwei* verschiedene Teilerfaktoren unterstützen, zwischen denen mit einem 1-bit-Steuersignal umgeschaltet wird. Bei Sigma-Delta-modulierten Frequenzteilern, auf die wir im folgenden noch eingehen, werden dagegen fast ausschließlich Multi-Modulus-Teiler mit einem $R$-bit-Steuersignal verwendet, die $2^R$ verschiedene Teilerfaktoren unterstützen; dabei gilt $R \leq P$. Man verwendet dazu Rückwärtszähler mit parallelen Ladeeingängen, an denen eine Dualzahl $M = [m_{P-1}, \ldots, m_0]$ anliegt, die *nach* jedem Erreichen des Zählerstandes Null in den Zähler geladen wird. Der Zähler zählt dadurch mit einer Periode von $M\!+\!1$ repetierend rückwärts:

$$
M,\, M-1,\, M-2,\, \ldots,\, 2,\, 1,\, 0,\, M,\, M-1,\, M-2,\, \ldots,\, 2,\, 1,\, 0,\, \ldots
$$

Abbildung 27.47 zeigt die allgemeine Form und eine Ausführung mit einem 2-bit-Steuersignal für die Teilerfaktoren 29 bis 32.

## 27.3.9.2 Teilerfaktorsteuerung

Die Teilerfaktorsteuerung erzeugt das Steuersignal für den steuerbaren Frequenzteiler. In der Praxis werden zwei Varianten verwendet:
<!-- page-import:1710:end -->

<!-- page-import:1711:start -->
1674  27. Phasenregelschleife (PLL)

a allgemein

b Ausführung für die Teilerfaktoren 29/30/31/32

$R = 2$

| $MC_1$ | $MC_0$ | $n_2$ |
|---|---|---|
| 0 | 0 | 29 |
| 0 | 1 | 30 |
| 1 | 0 | 31 |
| 1 | 1 | 32 |

**Abb. 27.47.** Multi-Modulus-Teiler mit mehreren verschiedenen Teilerfaktoren auf der Basis eines Rückwärtszählers mit parallelen Ladeeingängen

– ein Summierer, dessen Überlaufsignal (carry, $CY$) als Steuersignal $MC$ für einen Dual-Modulus-Teiler gemäß Abb. 27.46 dient;  
– ein Delta-Sigma-Modulator ($\Delta\Sigma$) mit einem $R$-bit-Ausgangssignal, das als Steuersignal für einen Multi-Modulus-Teiler mit $R$-bit-Steuersignal gemäß Abb. 27.47 dient.

Ziel ist in beiden Fällen die Erzeugung fraktionaler, d.h. nicht ganzzahliger mittlerer Teilerfaktoren $\overline{n_2}$. Die einfachste Variante einer Teilerfaktorsteuerung haben wir bereits in Abb. 27.45 dargestellt; dabei wird durch alternierende Umschaltung zwischen den Teilerfaktoren $n_2(1)=N=2$ und $n_2(2)=N+1=3$ ein mittlerer Teilerfaktor von $\overline{n_2}=2{,}5$ erzeugt. Die Sequenzlänge beträgt hier $M=2$.

#### 27.3.9.2.1 Summierer

Die einfachste Methode zur Erzeugung eines 1-bit-Steuersignals für einen Dual-Modulus-Teiler besteht darin, einen $L$-bit-Summierer mit einem Überlaufsignal einzusetzen, dessen Wert bei jeder positiven Flanke am Ausgang des Teilers um einen Wert $K$ im Bereich $0,\ldots,2^L$ erhöht wird. Der $L$-bit-Summierer setzt sich aus einem $L$-bit-Addierer und einem $(L\!+\!1)$-bit-Speicher mit D-Flip-Flops zusammen, siehe Abb. 27.48.

**Abb. 27.48.** Teilerfaktorsteuerung für einen Dual-Modulus-Teiler mit einem Summierer
<!-- page-import:1711:end -->

<!-- page-import:1712:start -->
27.3 Digitale PLL 1675

Zur Verdeutlichung der Funktion betrachten wir ein einfaches Beispiel mit $L = 3$ und $K = 0,\ldots,8$. Wir benötigen dazu einen 3-bit-Addierer mit Überlauf und einen Speicher mit 4 D-Flip-Flops. Zur Darstellung des Wertes $K$, mit dem der Kanal gewählt wird, werden 4 bit benötigt, da es sich um insgesamt 9 verschiedene Werte handelt (Kanal $0 \ldots 8$). Das höchstwertige Bit von $K$ verursacht gemäß Abb. 27.48 einen permanenten Überlauf $CY$, indem es das Überlaufsignal $CY'$ des Addierers überstimmt; deshalb wirken die Werte $K = 9,\ldots,15$ genau so wie $K = 8$. Wir wählen nun beispielhaft $K = 3$ und nehmen an, dass die Summe $S$ den Anfangswert $S(0) = 0$ hat; dann erhalten wir die Folge:

$n$       : 1  2  3  4  5  6  7  8  
$S(n-1)$ : 0  3  6  1  4  7  2  5  
$S(n)$   : 3  6  1  4  7  2  5  0  
$MC$     : 0  0  1  0  0  1  0  1

Nach 8 Takten wiederholt sich das Muster, d.h. die Sequenzlänge beträgt hier $M = 8$.

Man kann zeigen, dass die Sequenzlänge dem Quotienten aus $2^L$ und dem größten gemeinsamen Teiler (greatest common divisor, GCD) aus der Kanalnummer $K$ und $2^L$ entspricht:

$$
M = \frac{2^L}{GCD(K,2^L)} \qquad \text{für } 0 < K \leq 2^L
$$

(27.33)

Für $K = 0$ gilt $M = 1$. In unserem Beispiel mit $L = 3$ und $2^L = 8$ gilt:

$K$ : 0  1  2  3  4  5  6  7  8  
$M$ : 1  8  4  8  2  8  4  8  1

Das Steuersignal $MC$ nimmt in jedem Durchlauf mit $2^L$ Zyklen $K$-mal den Zustand Eins und $(2^L-K)$-mal den Zustand Null an; damit erhalten wir mit den zugehörigen Teilerfaktoren $N\!+\!1$ und $N$ des Dual-Modulus-Teilers den mittleren Teilerfaktor, der auch fraktionaler Teilerfaktor (fractional divider ratio) genannt wird:

$$
\overline{n}_2 = \frac{(2^L-K)\cdot N + K\cdot (N+1)}{2^L} = N + \frac{K}{2^L}
\qquad \text{für } 0 \leq K \leq 2^L
$$

(27.34)

Wir können damit den Bereich von $\overline{n}_2 = N$ bis $\overline{n}_2 = N + 1$ mit einer Schrittweite von $2^{-L}$ abdecken.

Wir kombinieren nun den Summierer mit $L = 3$ mit einem Dual-Modulus-Teiler 2/3 und konstruieren die Signale für den Kanal $K = 3$ mit:

$$
f_{VCO} = \overline{n}_2 f_1 = \left(2 + \frac{3}{8}\right) f_1 = 2{,}375 f_1
$$

Abbildung 27.49 zeigt das Ergebnis im oberen Teil. Wir erhalten 8 Perioden des Ausgangssignals $Q$ pro 19 Perioden des Takts $C$; daraus ergibt sich der mittlere Teilerfaktor $\overline{n}_2 = 19/8 = 2{,}375$. Im unteren Teil der Abbildung haben wir die zugehörigen Signale eines Tristate-Phasendetektors mit Ladungspumpe im eingeschwungenen Zustand dargestellt. Am Ausgang der Ladungspumpe erhalten wir ein periodisches Muster von Strom-Impulsen. Da wir ein Schleifenfilter mit PI-Regler unterstellt haben, ist der Mittelwert des Stroms $I_{UD}$ im eingeschwungenen Zustand gleich Null, d.h. die Fläche der positiven Impulse entspricht der Fläche der negativen Impulse.
<!-- page-import:1712:end -->

<!-- page-import:1713:start -->
1676  27. Phasenregelschleife (PLL)

Abb. 27.49. Signale eines Dual-Modulus-Teilers 2/3 mit Teilerfaktorsteuerung durch einen Summierer mit $L = 3$ für den Kanal $K = 3$. Es gilt $\bar n_2 = 19/8 = 2 + 3/8 = 2{,}375$. Im unteren Teil sind die zugehörigen Signale des Phasendetektors dargestellt.

Das Muster der Stromimpulse hängt vom Kanal $K$ ab. Für $K = 0$ und $K = 2^L$ verschwinden die Impulse theoretisch vollständig; in der Praxis treten dagegen sehr kurze Impulse auf, die durch die Laufzeiten der Gatter bedingt sind. Für den Betrieb sind jedoch nicht die Zeitverläufe, sondern die spektralen Anteile von Interesse. Wir erhalten einen Kamm von Störtönen mit der Grundfrequenz

$$
f_{GW} = \frac{f_{VCO}}{M\,\bar n_2} = \frac{f_1}{M}
\Rightarrow
\frac{f_{GW}}{f_1} = \frac{1}{M}
\qquad \text{für } M > 1
$$

und Vielfachen davon; dabei gilt $M = M(K)$ gemäß (27.33). Abbildung 27.50 zeigt die Spektren der Stromimpulse für die Kanäle $K = 1,\ldots,4$ unseres Beispiels mit $L = 3$. Für alle ungeraden Kanäle gilt $M = 8$ und $f_{GW} = f_1/8$. Für $K = 2$ erhalten wir $M = 4$ und $f_{GW} = f_1/4$ und für $K = 4$ gilt $M = 2$ und $f_{GW} = f_1/2$. Da es sich um ein pulsweitenmoduliertes Signal handelt, kann man für die Amplituden der Störtöne keinen einfachen Zusammenhang angeben.

#### 27.3.9.2.2 Störtöne im VCO-Signal

Im Betrieb sind die Störtöne — je nach Anwendung — mehr oder weniger störend; dabei sind nicht die Amplituden problematisch, sondern die Frequenzen, da sie teilweise unterhalb der Frequenz $f_1 = f_2$ der Signale am Phasendetektor liegen. Man spricht in diesem Fall von Subharmonischen. Das Schleifenfilter muss diese Störtöne so stark unterdrücken, dass die resultierende FM-Modulation des VCOs ausreichend gering bleibt. Bei einer PLL zur Frequenzsynthese in einem Empfänger sind die diesbezüglichen Anforderungen in der Regel sehr hoch.

Die Auswirkungen der Störtöne auf das Spektrum am Ausgang des VCOs können wir auf einfache Weise bestimmen, da die Amplituden der Störtöne auf der einen Seite zwar so groß sind, dass sie in konkreten Anwendungen stören, auf der anderen Seite jedoch so klein sind, dass eine Schmalband-FM-Modulation vorliegt, d.h. der Modulationsindex $\eta$ der FM-Modulation ist so gering, dass wir für die maßgebenden Besselfunktionen $J_n(\eta)$ die Näherungen
<!-- page-import:1713:end -->

<!-- page-import:1714:start -->
27.3 Digitale PLL 1677

$|E|$
dB

$K = 1$

$|E|$
dB

$K = 2$

$|E|$
dB

$K = 3$

$|E|$
dB

$K = 4$

**Abb. 27.50.** Einseitenband-Spektren der Stromimpulse am Ausgang der Ladungspumpe für die Kanäle $K = 1, \ldots, 4$ bei Verwendung einer Teilerfaktorsteuerung mit einem Summierer mit $L = 3$ (9 Kanäle mit $K = 0, \ldots, 8$)

$$J_0(\eta)\ \approx\ 1 \quad,\quad J_1(\eta)\ \approx\ \frac{\eta}{2} \quad,\quad J_n(\eta)\ \approx\ 0 \qquad \text{für } n > 1$$

verwenden können, siehe Abschnitt 21.4.2.2 auf Seite 1198, insbesondere Gl.(21.81). Daraus folgt, dass wir für jeden Störton am Ausgang der Ladungspumpe je einen Störton im
<!-- page-import:1714:end -->

<!-- page-import:1716:start -->
27.3 Digitale PLL 1679

a Übertragungsfunktion des Schleifenfilters b Spektrum am Ausgang der Ladungspumpe

c Spektrum am Ausgang des VCOs (linear) d Spektrum am Ausgang des VCOs (log)

**Abb. 27.52.** Zahlenbeispiel für die Störtöne einer Fractional-N-PLL. Die Teilerfaktorsteuerung erfolgt mit einem Summierer mit $L = 3$ und das Schleifenfilter mit PI-Regler hat die Ordnung $n = 3$. Die Frequenz der Signale am Phasendetektor beträgt $f_1 = f_2 = 1\,\mathrm{MHz}$. Dargestellt ist der Kanal $K = 1$ mit der Sequenzlänge $M = 8$. Die Spektren des VCOs sind über der Modulationsfrequenz $f_M = f - f_{VCO}$ dargestellt.

- der Betrag der Übertragungsfunktion des Schleifenfilters mit mindestens 20 dB/Dekade abnimmt;
- die Kreisfrequenz $\omega_M$ im Nenner einen zusätzlichen Abfall mit 20 dB/Dekade verursacht.

Wenn man das Einseitenbandspektrum des VCOs über einer logarithmischen Frequenzachse darstellt, fallen die Störtöne *tendenziell* mit mindestens 40 dB/Dekade ab. Bei einem Schleifenfilter mit PI-Regler und Ordnung $n$ geht zwar *eine* Ordnung durch die Nullstelle des PI-Reglers verloren, dies wird jedoch durch den zusätzlichen Abfall aufgrund der Kreisfrequenz $\omega_M$ kompensiert; deshalb fallen die Störtöne im VCO-Signal in diesem Fall mit $n \cdot 20\,\mathrm{dB}/\mathrm{Dekade}$ ab. Abbildung 27.52 zeigt ein Zahlenbeispiel mit $n = 3$; dabei sind die Spektren am Ausgang des VCOs in Abb. 27.52c und Abb. 27.52d über der Modulationsfrequenz $f_M = f - f_{VCO}$ dargestellt. Beide Darstellungen des VCO-Spektrums

5 Korrekterweise müssten wir anstelle von $H_{LF}(j\omega_M)$ die Übertragungsfunktion

$$
H_{LF}(j\omega_M)/(1 + H_{ol}(j\omega_M))
$$

der geschlossenen Schleife einsetzen; wegen $\omega_M \gg \omega_0$ gilt jedoch $|H_{ol}(j\omega_M)| \ll 1$.
<!-- page-import:1716:end -->

<!-- page-import:1717:start -->
1680  27. Phasenregelschleife (PLL)

haben ihre Berechtigung: Während man mit der linearen Frequenzachse in Abb. 27.52c die äquidistante Lage der Störtöne erkennt, verdeutlicht die logarithmische Darstellung in Abb. 27.52d den Abfall mit – 60 dB/Dekade.

#### 27.3.9.2.3 Wirkung der Störtöne

Für den praktischen Einsatz in einem Sender oder Empfänger ist eine Fractional-N-PLL mit einem Störspektrum entsprechend Abb. 27.52c/d nicht geeignet. Für die Aufwärtsmischer in einem Sender oder die Abwärtsmischer in einem Empfänger werden Lokaloszillator-Signale mit nur einem Ton benötigt. Die Frequenz dieses Tons, die wir im Kapitel 22 (Sender und Empfänger) und im Kapitel 25 (Mischer) als Lokaloszillator-Frequenz $f_{LO}$ und hier als VCO-Frequenz $f_{VCO}$ bezeichnet haben, ist maßgebend für die Frequenzumsetzung der Mischer. Wir verweisen dazu auf den Abschnitt 25.1 auf Seite 1387ff und die spektralen Darstellungen der Frequenzumsetzung für die verschiedenen Sender- und Empfänger-Topologien im Kapitel 22.

Wenn ein Lokaloszillator-Signal neben dem Nutzanteil bzw. Nutzton weitere Töne enthält, erfolgt eine separate Frequenzumsetzung für jeden dieser Töne, gewichtet mit der Amplitude des jeweiligen Tons. Bei einem Sender erhält man dadurch mehrere, entsprechend dem Frequenzkamm der Störtöne frequenzversetzte Kopien des gewünschten Sendesignals, während ein Empfänger mehrere Frequenzbänder gleichzeitig empfängt.

Zur Verdeutlichung der Problematik greifen wir den Empfänger aus Abb. 22.11 auf Seite 1246 auf und konstruieren die Spektren für den Fall, dass das Lokaloszillator-Signal von einer Fractional-N-PLL mit einem Summierer zur Teilerfaktorsteuerung erzeugt wird. Abbildung 27.53 zeigt das Ergebnis. Wir halten zunächst fest, dass die minimale Grundfrequenz $f_{GW,min}$ der Störtöne, die bei der maximalen Sequenzlänge

$$
M_{max} = 2^L
$$

der Teilerfaktorsteuerung erreicht wird, bei einem Empfänger exakt dem Kanalabstand $f_K$ entspricht:

$$
f_{GW,min} = \frac{f_1}{M_{max}} = \frac{f_1}{2^L} = f_K
$$

Daraus folgt, dass die Störtöne eine Umsetzung der in Abb. 27.53 schraffiert dargestellten Nachbarkanäle in das ZF-Band bewirken. Wie wir in Abb. 27.53 erkennen, kommen dabei jedoch nur die Nachbarkanäle zum Tragen, die im Durchlassbereich des vorausgehenden HF-Filters liegen; deshalb wirken sich in unserem Beispiel nur die Störtöne mit den Frequenzen $f_{2l}$, . . . , $f_{2u}$ aus, während die Störtöne mit den Frequenzen $f_{3l}$ und $f_{3u}$ keine Rolle mehr spielen. Die Anzahl der relevanten Störtöne hängt demnach von der Bandbreite des vorausgehenden Filters — in unserem Fall des HF-Filters — ab. Kritisch sind die Störtöne mit den geringsten Modulationsfrequenzen $f_M = \pm f_{GW,min} = \pm f_K$, da:
- diese Störtöne bei einer Teilerfaktorsteuerung mit einem Summierer die größte Amplitude aller Störtöne haben;
- die unmittelbaren Nachbarkanäle, die in Abb. 27.53 mit schrägen Linien schraffiert sind, immer im Durchlassbereich des vorausgehenden Filters liegen — andernfalls wäre das nachfolgende ZF-Filter überflüssig.

In Abb. 27.53 haben wir die Signale im Nutzkanal und in den Nachbarkanälen mit gleichen Pegeln dargestellt; das ist in der Praxis natürlich nicht gegeben. Kritisch ist der Fall, wenn die Signale in den Nachbarkanälen deutlich höhere Pegel haben als das Signal im Nutzkanal. Ist z.B. der Pegel im Nachbarkanal um 60 dB größer als der Pegel im Nutzkanal
<!-- page-import:1717:end -->

<!-- page-import:1718:start -->
27.3 Digitale PLL 1681

HF-Filter

$e_{Ant}(t)$

$|E_{Ant}|$

$B$

$f_{ZF}$

$f_{ZF}$

$f_{HF,Sp}=f_{LO}-f_{ZF}$

$f_{LO}$

$f_{HF}=f_{LO}+f_{ZF}$

$f$

$e_{HFF}(t)$

$|E_{HFF}|$

HF-Filter

$B$

$f_K$

$f_K$

$f_K$

$f_K$

$f_K$

$f$

Fractional-
N-PLL
$(f_{LO}=f_{VCO})$

$f_{LO}$

M1

$e_{M1}(t)$

$|E_{LO}|=|S_{VCO}|$

$f_{ZF}$

$f_K$

$f_K$

$f_K$

$f_K$

$f_K$

$f_K$

$f_{3l}$

$f_{2l}$

$f_{1l}$

$f_{LO}$

$f_{1u}$

$f_{2u}$

$f_{3u}$

$l=\mathrm{lower}$

$u=\mathrm{upper}$

$f$

$|E_{M1}|$

$f_{ZF}$

$f$

ZF-Filter

$e_{ZF}(t)$

$|E_{ZF}|$

ZF-Filter

$f_{ZF}$

$f$

**Abb. 27.53.** Frequenzumsetzung mehrerer Kanäle durch VCO-Störtöne im Kanalraster bei einem Überlagerungsempfänger mit einer Zwischenfrequenz

und gleichzeitig der Pegel des zugehörigen Störtons um 60 dB geringer als der Pegel des Nutzanteils des VCO-Signals, fallen beide Kanäle mit gleichem Pegel in den Durchlassbereich des ZF-Filters. Daraus folgt, dass der Dynamikbereich des Empfängers, den wir im Abschnitt 22.2.4.4 auf Seite 1260 behandelt haben, durch die Dämpfung des stärksten Störtons begrenzt wird. Von besonderer Bedeutung ist der Inband-Dynamikbereich, der angibt, wie groß die Pegeldifferenz zwischen einem schwachen Signal im Nutzkanal und einem starken Signal im Nachbarkanal sein darf, damit der Nutzkanal noch empfangen werden kann. Die wirksame Störleistung am Ausgang des ZF-Filters setzt sich nun nicht mehr aus zwei, sondern aus drei Anteilen zusammen:

- Rauschen des Empfängers mit der Rauschleistung $P_{r,e}$;
- Intermodulationsverzerrungen des starken Signals mit der Leistung $P_{IM3,e}$, die in den Nutzkanal fallen;
<!-- page-import:1718:end -->

<!-- page-import:1719:start -->
1682  27. Phasenregelschleife (PLL)

$e_{HFF}(t)$

$e_{LO}(t)=s_{VCO}(t)$

$e_{ZF}(t)$

$SNR_{e,min}\,[\mathrm{dB}] = D_{spur}\,[\mathrm{dB}] - IDR\,[\mathrm{dB}]$

$|E_{HFF}|$  
$[\log]$

$P_{NK}$

$IDR$

$P_K$

$f_K$

$f_{HF}$

$f_{HF}+f_K$

$f$

$|E_{LO}|$  
$[\log]$

$P_{VCO}$

$D_{spur}$

$P_{spur}$

$f_K$

$f_{LO}$

$f_{LO}+f_K$

$f$

$|E_{ZF}|$  
$[\log]$

$P_e$

$SNR_{e,min}$

$P_{s,e}$

$f_{ZF}$

Abb. 27.54. Inband-Dynamikbereich ohne Rauschen und Intermodulationsverzerrungen

- Umsetzung des starken Signals in den Nutzkanal durch den Störton mit der Leistung:

$$
P_{spur}=\frac{P_{VCO}}{D_{spur}}
\qquad\Rightarrow\qquad
P_{spur}\,[\mathrm{dBm}] = P_{VCO}\,[\mathrm{dBm}] - D_{spur}\,[\mathrm{dB}]
$$

Dabei ist $P_{VCO}$ die Leistung des VCO-Signals, die aufgrund der hohen Dämpfung der Störtöne der Leistung des Nutzanteils entspricht; $P_{spur}$ ist die Leistung des stärksten Störtons, der in den Durchlassbereich des vorausgehenden Filters fällt, und $D_{spur} \gg 1$ die zugehörige Dämpfung mit Bezug auf den Nutzanteil.

Wir betrachten zunächst den einfachen Fall in Abb. 27.54, bei dem wir nur die Störleistung durch die Umsetzung mit dem Störton berücksichtigen. Der Inband-Dynamikbereich $IDR$ entspricht der Pegeldifferenz zwischen den Signalen im Nutz- und im Nachbarkanal, bei dem die Empfangsleistung $P_e$ des Nutzkanals um den minimalen, für einen korrekten Empfang notwendigen Signal-Rausch-Abstand $SNR_{e,min}$ über der Empfangsleistung $P_{s,e}$ des Nachbarkanals liegt. Die Verstärkung des Mischers und des Filters geht nicht in die Betrachtung ein, da sie sich auf beide Signale gleich auswirkt; wir können deshalb ohne Beschränkung der Allgemeinheit für beide Komponenten eine Verstärkung von Eins annehmen und erhalten damit:

$$
IDR=\frac{P_{NK}}{P_K},
\qquad
SNR_{e,min}=\frac{P_e}{P_{s,e}},
\qquad
P_e=P_K,
\qquad
P_{s,e}=\frac{P_{NK}}{D_{spur}}
$$

Daraus folgt:

$$
IDR=\frac{D_{spur}}{SNR_{e,min}}
\qquad\Rightarrow\qquad
IDR\,[\mathrm{dB}] = D_{spur}\,[\mathrm{dB}] - SNR_{e,min}\,[\mathrm{dB}]
$$

In der Praxis wird meist $SNR_{e,min}=1=0\,\mathrm{dB}$ gesetzt, um eine von der Modulation der Signale unabhängige Größe zu erhalten; dann gilt $IDR=D_{spur}$. Damit haben wir die Obergrenze für den Inband-Dynamikbereich bestimmt.

Zur Berücksichtigung sämtlicher Anteile der Störleistung haben wir die graphische Darstellung des Dynamikbereichs eines Empfängers aus Abb. 22.23 auf Seite 1262 in Abb. 27.55 noch einmal dargestellt und um die durch einen VCO-Störton mit der Dämpfung $D_{spur}$ verursachte Störleistung $P_{s,e}$ ergänzt, die im Abstand $D_{spur}$ unterhalb der Eingangsleistung $P_e$ verläuft. In der Praxis wählt man die Dämpfung des Störtons so hoch, dass sich der Inband-Dynamikbereich durch diese zusätzliche Störleistung um weniger
<!-- page-import:1719:end -->

<!-- page-import:1720:start -->
27.3 Digitale PLL 1683

Abb. 27.55. Graphische Darstellung des Dynamikbereichs eines Empfängers unter Berücksichtigung der durch einen VCO-Störton mit der Dämpfung $D_{spur}$ verursachten Störleistung $P_{s,e}$

als 1 dB verringert; dazu muss die Störleistung um mindestens 3 dB unterhalb des Schnittpunkts der Rauschleistung $P_{r,e}$ und den Intermodulationsverzerrungen mit der Leistung $P_{IM3,e}$ liegen, siehe Abb. 27.55; daraus folgt die Forderung:

$$
D_{spur}\;[\mathrm{dB}] \;>\; IDR\;[\mathrm{dB}] + SNR_{e,min}\;[\mathrm{dB}] + 6\,\mathrm{dB}
\qquad (27.35)
$$

Die Verschiebung um 6 dB ergibt sich aus dem geforderten Mindestabstand von 3 dB und weiteren 3 dB, die sich aus der normalen Berechnung ohne den VCO-Störton ergeben, siehe (22.16) und (22.17) auf Seite 1263. Für das Empfänger-Beispiel im Abschnitt 22.2.4.4 haben wir im Abschnitt 22.2.4.4.3 einen Inband-Dynamikbereich von 60 dB ermittelt; daraus erhalten wir die Forderung $D_{spur} > 66\,\mathrm{dB}$.

Um die geforderte Dämpfung der Störtöne zu erzielen, könnte man zunächst die Bandbreite $f_0$ der Regelschleife so weit verringern, wie es der konkrete Anwendungsfall zulässt. In unserem Fractional-N-PLL-Beispiel mit einem Summierer zur Teilerfaktorsteuerung haben wir eine Schleifenbandbreite $f_0 = 10\,\mathrm{kHz}$ verwendet und dabei eine Dämpfung $D_{spur} \approx 37\,\mathrm{dB}$ erhalten, siehe Abb. 27.52 auf Seite 1679. Da die Übertragungsfunktion des Schleifenfilters bei hohen Frequenzen mit 40 dB/Dekade abfällt, können wir die zu $D_{spur} = 66\,\mathrm{dB}$ noch fehlenden 29 dB durch eine Verringerung der Schleifenbandbreite um etwa 3/4 einer Dekade auf $f_0 \approx 1{,}8\,\mathrm{kHz}$ gewinnen. Alternativ käme auch eine Erhöhung der Ordnung des Schleifenfilters in Frage, was aber gerade mit Hinblick auf den Störton mit der geringsten Frequenz nicht besonders effektiv ist.

In der Praxis ist die Schleifenbandbreite jedoch nicht frei wählbar. Wir werden bei der Behandlung des Rauschens im Abschnitt 27.4 noch sehen, dass die Schleifenbandbreite zur Minimierung des Phasenrauschens am Ausgang des VCOs verwendet werden muss und deshalb nicht als freier Parameter zur Einstellung der Dämpfung der Störtöne zur Verfügung steht. In der Regel ist die für minimales Phasenrauschen erforderliche Schleifenbandbreite zu groß für eine ausreichende Dämpfung der Störtöne; wir müssen deshalb bei Bedarf andere Maßnahmen zur Absenkung der Störtöne ergreifen.
<!-- page-import:1720:end -->

<!-- page-import:1721:start -->
1684  27. Phasenregelschleife (PLL)

#### 27.3.9.2.4 Delta-Sigma-Modulator

Wir haben gesehen, dass bei einem Empfänger nur *die* Störtöne einer Fractional-N-PLL von Bedeutung sind, die eine Frequenzumsetzung innerhalb der Bandbreite des vorausgehenden Filters bewirken, siehe Abb. 27.53 auf Seite 1681. Wir können demnach Abhilfe schaffen, indem wir das Ausgangssignal des Phasendetektors *spektral formen* mit dem Ziel, die Amplituden der niederfrequenten Störtöne zu verringern; im Gegenzug können die Amplituden der höherfrequenten Störtöne zunehmen, da sich diese Töne

(1) aufgrund der zunehmenden Dämpfung des Schleifenfilters und  
(2) aufgrund der Begrenzung durch die Bandbreite des vorausgehenden Filters

nur wenig oder gar nicht auswirken. Wir müssen demnach die Energie des Signals zu hohen Frequenzen verschieben.

Eine *spektrale Formung* dieser Art können wir durch den Einsatz eines *Delta-Sigma-Modulators* zur Teilerfaktorsteuerung erzielen. Das zugrunde liegende Prinzip wird auch in zahlreichen anderen Bereichen verwendet, z.B. zur spektralen Formung des Quantisierungsrauschens bei AD-Umsetzern, siehe Abschnitt 17.3.6 und Abb. 17.47 auf Seite 1036. Vereinfacht gesprochen handelt es sich bei einem Delta-Sigma-Modulator der Ordnung $R$ um eine Schaltung mit Gegenkopplung, die so entworfen wird, dass ein von der Schaltung zu verarbeitendes Nutzsignal nicht verändert wird, während ein bei der Verarbeitung anfallendes Störsignal mit einem Hochpass der Ordnung $R$ gefiltert wird. Bei einem AD-Umsetzer entspricht das Nutzsignal dem analogen Eingangssignal und das Störsignal dem Quantisierungsfehler. Bei der Teilerfaktorsteuerung einer Fractional-N-PLL entspricht das Nutzsignal dem mittleren Teilerfaktor $\bar{n}_2$ — also einem konstanten Signal —, während das Störsignal durch die Abweichung $\Delta n_2 = n_2 - \bar{n}_2$ gegeben ist. Auch hier handelt es sich demnach um einen Quantisierungsfehler, dessen Mittelwert $\overline{\Delta n_2}$ gleich Null ist.

Es gibt verschiedene Ausführungen von Delta-Sigma-Modulatoren. Wir beschränken uns hier auf Modulatoren, die nach dem *MASH-Prinzip* (*multi-stage noise shaping*) arbeiten und aus Überlauf-Summierern mit Übertragssignal (Carry) gemäß Abb. 27.56 sowie Verzögerungsgliedern und Differenz-Filtern zur Kombination der Übertragssignale aufgebaut sind. Jeder Überlauf-Summierer bildet einen Delta-Sigma-Modulator der Ordnung Eins; deshalb wird ein MASH-Modulator der Ordnung $R$ mit

$$
\text{MASH-}1\text{-}1\text{-}\ldots\text{-}1
$$

$$
\underbrace{\hspace{4cm}}_{R\times 1}
$$

bezeichnet. Abbildung 27.57 zeigt den Aufbau eines MASH-Modulators mit $R = 3$, der folglich mit MASH-1-1-1 bezeichnet wird. Ein MASH-Modulator der Ordnung $R$ liefert ein $R$-bit-Teilerfaktor-Steuersignal (*modulus control*, MC) und muss deshalb zusammen mit einem entsprechenden Multi-Modulus-Teiler (*multi-modulus divider*, MMD) eingesetzt werden. Für den MASH-1-1-1-Modulator wird demnach ein Teiler benötigt, der die Teilerfaktoren $n_2 = N \ldots N + 7$ unterstützt. Das Steuersignal wird häufig als Zweier-Komplement aufgefasst; dann gilt $n_2 = N' - 4 \ldots N' + 3$ mit $N' = N + 4$.

Ein MASH-1-Modulator entspricht dem Summierer in Abb. 27.56, der seinerseits dem Summierer in Abb. 27.48 auf Seite 1674 entspricht — bis auf den zusätzlichen Eingang mit dem Index $L$ und die zusätzliche ODER-Verknüpfung in der Übertragslogik, die jedoch beide nur für den Kanal $K = 2^L$ benötigt werden. Der Summierer mit Überlaufsignal (*swallow counter*) ist demnach bereits ein Delta-Sigma-Modulator mit der Ordnung $R = 1$.

Während die Beschreibung der Differenz-Filter in Abb. 27.57 mit Hilfe der Übertragungsfunktion
<!-- page-import:1721:end -->

<!-- page-import:1722:start -->
## 27.3 Digitale PLL

Abb. 27.56. Summierer für Delta-Sigma-Modulatoren nach dem MASH-Prinzip

$$
H_D(z)=\frac{Y(z)}{X(z)}=1-z^{-1}\quad\Rightarrow\quad y(n)=x(n)-x(n-1)
$$

a mit separater Differenzbildung variabler Ordnung (0,1,2)

b mit kaskadierter Differenzbildung

Abb. 27.57.  
Delta-Sigma-Modulator  
des Typs MASH-1-1-1.  
Differenzbildung mit  
$H_D(z)=1-z^{-1}$.

1685
<!-- page-import:1722:end -->

<!-- page-import:1723:start -->
1686  27. Phasenregelschleife (PLL)

keine Probleme bereitet, erfordert die Beschreibung der Summierer eine Darstellung der Überlauf-Operation mit Hilfe von Übertragungsgliedern, für die Übertragungsfunktionen angegeben werden können. Dazu fassen wir die Ausgangssignale des Summierers in Abb. 27.56 zu einer Binärzahl $S'$ mit einer Vorkomma- und $L$ Nachkomma-Stellen zusammen:

$$
S' = (c, s_{L-1}\ s_{L-2}\ \ldots\ s_1\ s_0)_B
$$

Einen Übertrag $c$ erhalten wir folglich immer dann, wenn $S' \geq 1$ gilt, d.h. der Übertrag $c$ entspricht dem Ausgangssignal eines Quantisierers mit der Kennlinie:

$$
c =
\begin{cases}
0 & \text{für } S' < 1 \\
1 & \text{für } S' \geq 1
\end{cases}
$$

Da ein normaler Summierer mit der Übertragungsfunktion

$$
H_\Sigma(z) = \frac{Y(z)}{X(z)} = \frac{1}{z - 1}
\qquad \Rightarrow \qquad
y(n + 1) = y(n) + x(n)
$$

keinen Überlauf besitzt, müssen wir den Überlauf-Summierer aus einem normalen Summierer und einer Rückkopplung aufbauen, die bei einem Übertrag den Übertragswert im nächsten Takt subtrahiert, so dass der normale Summierer anschließend denselben Wert besitzt wie der Überlauf-Summierer; daraus folgen unter Berücksichtigung des Eingangssignals $A(n)$ die beiden Fälle:

$$
S'(n) \geq 1 \quad \Rightarrow \quad c(n) = 1 \quad \Rightarrow \quad S'(n + 1) = S'(n) + A(n) - 1
$$

$$
\qquad\qquad\qquad\qquad\qquad\qquad\qquad\ \ \overset{c(n)=1}{=} \quad S'(n) + A(n) - c(n)
$$

$$
S'(n) < 1 \quad \Rightarrow \quad c(n) = 0 \quad \Rightarrow \quad S'(n + 1) = S'(n) + A(n)
$$

$$
\qquad\qquad\qquad\qquad\qquad\qquad\qquad\ \ \overset{c(n)=0}{=} \quad S'(n) + A(n) - c(n)
$$

Wir können demnach in beiden Fällen den Übertrag $c(n)$ vom Eingangssignal $A(n)$ subtrahieren. Damit erhalten wir das in Abb. 27.58a gezeigte Modell eines Summierers mit Übertrag. Abbildung 27.58b zeigt die minimierte Darstellung, die für schaltungstechnische Realisierungen verwendet wird.

Zur Berechnung der Übertragungsfunktionen für das Nutzsignal $A(n)$ und den Quantisierungsfehler

$$
Q(n) = c(n) - S'(n) = -S(n) = -\operatorname{modulus}\{S'(n), 1\}
$$

müssen wir den Quantisierer durch einen Addierer ersetzen, der den Quantisierungsfehler addiert. Abbildung 27.58c zeigt das resultierende regelungstechnische Ersatzschaltbild. Für das Eingangssignal erhalten wir mit

$$
C(z) = \mathcal{Z}\{c(n)\}, \quad A(z) = \mathcal{Z}\{A(n)\}
$$

die Nutz-Übertragungsfunktion:

$$
H_A(z) = \frac{C(z)}{A(z)} = \frac{H_\Sigma(s)}{1 + H_\Sigma(s)} = \frac{\frac{1}{z - 1}}{1 + \frac{1}{z - 1}} = z^{-1}
$$

Das Eingangssignal wird demnach um einen Takt verzögert, sonst aber unverändert übertragen. Für den Quantisierungsfehler $Q(n)$ ergibt sich mit
<!-- page-import:1723:end -->

<!-- page-import:1724:start -->
27.3 Digitale PLL 1687

a funktionsorientierte Darstellung

b minimierte Darstellung

c regelungstechnisches Ersatzschaltbild mit Quantisierungsfehler $Q(n)$

**Abb. 27.58.** Modell für einen Summierer mit Übertrag

$$
C(z)=\mathcal{Z}\{c(n)\}\ ,\quad Q(z)=\mathcal{Z}\{Q(n)\}
$$

die Stör-Übertragungsfunktion

$$
H_Q(z)=\frac{C(z)}{Q(z)}=\frac{1}{1+H_\Sigma(s)}=\frac{1}{1+\frac{1}{z-1}}=1-z^{-1}
$$

eines Hochpasses 1. Ordnung mit einer Nullstelle bei $z=1$. Der Betrag der Stör-Übertragungsfunktion nimmt bei niedrigen Frequenzen mit 20 dB/Dekade zu und erreicht bei der halben Abtastfrequenz, d.h. $f=f_A/2$ bzw. $z=-1$, den Wert 2; für die $-3\,\text{dB}$-Grenzfrequenz gilt $f_{-3dB}=f_A/4$.

Für einen MASH-Modulator der Ordnung $R$ mit $R$ kaskadierten Übertrag-Summierern erhält man entsprechend:

$$
H_{A,R}(z)=\left(H_A(z)\right)^R=z^{-R}
\qquad (27.36)
$$

$$
H_{Q,R}(z)=\left(H_Q(z)\right)^R=\left(1-z^{-1}\right)^R
\qquad (27.37)
$$
<!-- page-import:1724:end -->

<!-- page-import:1725:start -->
1688  27. Phasenregelschleife (PLL)

**Abb. 27.59.** Praktische Ausführung eines MASH-1-1-1-Modulators

Dabei ist das Eingangssignal $A(n)$ der ersten Stufe durch die Kanalnummer $K$ gegeben. Im Gegensatz zu einem $\Delta\Sigma$-AD-Umsetzer ist das Eingangssignal hier immer konstant, so dass der Quantisierungsfehler periodisch ist; dadurch erhalten wir auch hier am Ausgang einen Kamm von Störtönen, der nun aber mit der Stör-Übertragungsfunktion $H_{Q,R}(z)$ spektral geformt ist.

Abbildung 27.59 zeigt die praktische Ausführung eines MASH-1-1-1-Modulators mit $R = 3$ und:

$$
H_{A,3} = z^{-3}, \quad H_{Q,3} = \left(1 - z^{-1}\right)^3 = 1 - 3z^{-1} + 3z^{-2} - z^{-3}
$$

In diesem Fall erhalten wir für die Störübertragungsfunktion einen Hochpass 3. Ordnung, dessen Betragsverlauf bei niedrigen Frequenzen mit $60\,\mathrm{dB}/\mathrm{Dekade}$ zunimmt.

*Beispiel:* Wir entwerfen eine Fractional-N-PLL für einen UKW-Rundfunkempfänger mit einem Kanalraster $f_K = 100\,\mathrm{kHz}$ im Bereich $f = 87{,}5 \dots 108\,\mathrm{MHz}$. Als Referenz verwenden wir einen Quarz-Oszillator mit $f_{REF} = 12{,}8\,\mathrm{MHz}$, da die Güte von Quarz-Resonatoren in diesem Bereich maximal wird. Für den Referenz-Teiler wählen wir den Teilerfaktor $n_1 = 2$ und erhalten damit die Vergleichsfrequenz

$$
f_1 = 6{,}4\,\mathrm{MHz} = 64\,f_K = 2^6 f_K = 2^L f_K \quad \text{mit } L = 6
$$

am Phasendetektor. Diese Teilung beugt möglichen Interferenz-Problemen im Gesamtsystem vor, auf die wir hier aber nicht näher eingehen. Um den Frequenzbereich $87{,}5 \dots 108\,\mathrm{MHz}$ abzudecken, muss der mittlere Teilerfaktor $\overline{n_2}$ im Bereich

$$
\frac{87{,}5\,\mathrm{MHz}}{6{,}4\,\mathrm{MHz}} = \frac{875}{64} = 13 + \frac{43}{64}
\leq \overline{n_2} \leq
16 + \frac{56}{64} = \frac{1080}{64} = \frac{108\,\mathrm{MHz}}{6{,}4\,\mathrm{MHz}}
$$

Wir müssen also sowohl den ganzzahligen als auch den fraktionalen Anteil des Teilers einstellen, um einen gewünschten Kanal auszuwählen. Dabei müssen wir auch beachten, dass der mittlere Teilerfaktor in die Schleifenverstärkung eingeht, die deshalb selbst bei einer
<!-- page-import:1725:end -->

<!-- page-import:1726:start -->
27.3 Digitale PLL 1689

Quarz-Oszillator

12,8 MHz

2  
1

$f_1 = 6{,}4\,\mathrm{MHz}$

PFD

$U_D$

Schleifenfilter  
3. Ordnung

VCO

$s_{VCO}$

$f_{VCO} = 87.5 \ldots 108\,\mathrm{MHz}$

$U_A$

$n_2$  
1

Steuerworte  
integer: 13...16  
fraktional: 0...63

Teilerfaktor-steuerung

$n_2(n)$

**Abb. 27.60.** Beispiel für eine Fractional-N-PLL für einen UKW-Rundfunkempfänger

linearen VCO-Kennlinie nicht konstant ist; in der Praxis ist jedoch die Nichtlinearität der VCO-Kennlinie in der Regel deutlich größer, so dass wir es hier nicht mit einem zusätzlichen, sondern mit einem verschärften Problem zu tun haben. Wir nehmen hier an, dass eine ausreichende Linearisierung der Gesamt-Kennlinie vorliegt, z.B. dadurch, dass wir auch den Strom $I_0$ der Ladungspumpe in gewissen Stufen einstellen und damit die Schleifenverstärkung ungefähr konstant halten können. Wir verwenden ein Schleifenfilter 3. Ordnung mit PI-Regler, das jedoch bei hohen Frequenzen aufgrund der Nullstelle nur einen Abfall mit 40 dB/Dekade aufweist. Die Dimensionierung des Schleifenfilters erfolgt wieder nach dem symmetrischen Optimum; wir verzichten hier auf eine detaillierte Darstellung. Als Schleifenbandbreite haben wir $f_0 = 10\,\mathrm{kHz}$ gewählt. Zur Teilerfaktorsteuerung setzen wir zu Vergleichszwecken einen Überlauf-Summierer — der einem MASH-1-Modulator entspricht — sowie die Delta-Sigma-Modulatoren MASH-1-1 ($R = 2$) und MASH-1-1-1 ($R = 3$) ein. Abbildung 27.60 zeigt das Blockschaltbild der Schaltung.

Abbildung 27.61 zeigt die Spektren der Störtöne am Ausgang des Phasen-Frequenz-Detektors (PFD) und am Ausgang des VCOs für $f_{VCO} = 87{,}5\,\mathrm{MHz}$: $n_2 = 13 + 43/64$. Zunächst fällt auf, dass für die Modulatoren mit $R > 1$ ein sub-harmonischer Störton (sub-harmonic spur) bei 50 kHz auftritt und der Abstand der Störtöne ebenfalls 50 kHz beträgt, siehe Abb. 27.61c–f. Das hängt damit zusammen, dass die Länge $M$ der Sequenz $n_2(n)$ bei einem Delta-Sigma-Modulator der Breite $L$ größer werden kann als $2^L$, wenn die Ordnung $R > 1$ ist. Bei Modulatoren mit $R = 2$ und $R = 3$ gilt $M_{max} = 2^{L+1}$; dadurch beträgt die Frequenz der Grundwelle [27.1]:

$$
f_{GW,min} = \frac{f_1}{M_{max}} = \frac{f_1}{2^{L+1}} = \frac{f_K}{2}
\qquad \text{mit} \qquad
f_K = \frac{f_1}{2^L}
$$

Für $R = 4$ gilt $f_{GW,min} = f_K/4$.

Man erkennt in Abbildung 27.61, dass die gestrichelten Asymptoten mit zunehmender Ordnung im Gegenuhrzeigersinn gedreht werden; für die nicht mehr dargestellte Ordnung 4 mit einem MASH-1-1-1-1-Modulator würden wir demnach ein PFD-Spektrum mit einem Anstieg von 60 dB/Dekade und ein flaches VCO-Spektrum erhalten. Da die Dämpfung der Störtöne vom Kanal $K$ abhängt, muss das VCO-Störspektrum für alle Kanäle simuliert oder gemessen werden. Abbildung 27.62 zeigt die Dämpfung des stärksten Störtons in Abhängigkeit vom Kanal $K$ für unser Beispiel. Die maximale Dämpfung ergibt sich in der Regel für den Kanal $K = 2^{L-1}$, hier $D_{spur} = 98\,\mathrm{dB}$ für $K = 32$. Die minimale Dämpfung für $K = 39$ ist mit $D_{spur} = 72\,\mathrm{dB}$ erheblich geringer. Wenn diese Dämpfung
<!-- page-import:1726:end -->
