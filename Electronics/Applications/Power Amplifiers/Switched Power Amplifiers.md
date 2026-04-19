# Switched Power Amplifiers

<!-- page-import:0958:start -->
15.12 Getaktete Leistungsverstärker 921

**Abb. 15.31.**  
Verbesserter Leistungsverstärker in Brückenschaltung. Nach diesem Prinzip arbeitet z.B. der TDA7297

$$U_{a1} = U_{e1} + \frac{R_N}{R_1}(U_{e1} - U_{e2})$$

$$U_{a2} = U_{e2} + \frac{R_N}{R_1}(U_{e2} - U_{e1})$$

$$U_a = U_{a1} - U_{a2}$$

$$= \left(1 + 2\frac{R_N}{R_1}\right)(U_{e1} - U_{e2})$$

Das ist besonders bei batteriebetriebenen Geräten interessant, bei denen man trotz niedriger Betriebsspannung eine möglichst hohe Ausgangsleistung erreichen möchte. Ein paar Beispiele für die maximale Ausgangsleistung, die an einen Verbraucher mit $R_L = 4\,\Omega$ abgegeben werden kann, sind in Abb. 15.32 zusammengestellt. Wegen der doppelten Ausgangsamplitude beim Betrieb als Brücke erhält man dort die 4-fache Ausgangsleistung.

| Betriebsspannung $V_b$ | Ausgangsleistung Normal | Ausgangsleistung Brücke |
|---|---:|---:|
| 5 V | 0,78 W | 3,2 W |
| 12 V | 4,5 W | 18 W |

**Abb. 15.32.**  
Maximale Ausgangsleistungen bei sinusförmiger Vollaussteuerung an einem Verbraucher von $R_L = 4\,\Omega$

## 15.12 Getaktete Leistungsverstärker

Der Wirkungsgrad von Leistungsverstärkern, die im B-Betrieb betrieben werden, beträgt gemäß (15.1):

$$\eta = \frac{P_L}{P_{\mathrm{ges}}} = \frac{\pi}{4}\cdot\frac{\hat{U}_a}{V_b} \approx 0{,}785\,\frac{\hat{U}_a}{V_b}$$

Das sieht auf den ersten Blick gut aus mit einem maximalen Wirkungsgrad von 78%. Bei Musik- und Sprachsignalen liegt die mittlere Amplitude jedoch um einen Faktor 10

**Abb. 15.33.** Blockschaltbild eines getakteten Leistungsverstärkers
<!-- page-import:0958:end -->

<!-- page-import:0960:start -->
15.12 Getaktete Leistungsverstärker 923

**Abb. 15.36.** Realisierung eines getakteten Leistungsverstärkers mit einem Delta-Sigma-Modulator

**Abb. 15.37.** Delta-Sigma-Modulation mit 40-facher Signalfrequenz

ode in die obere Stellung (wie eingezeichnet) geschaltet; dadurch läuft die Spannung $U_I$ nach Minus. Man kann die Kombination des Komparators mit dem Flip-Flop als einen 1 bit Analog-Digitalumsetzer nach dem Parallelverfahren auffassen, der in Kapitel 17.3.1 auf S. 1025 beschrieben wird. Der Signalverlauf ist in Abb. 15.37 für ein sinusförmiges Eingangssignal dargestellt. Ein auffälliger Unterschied zur Pulsbreitenmodulation besteht darin, dass sich die Impulsdauer hier nicht kontinuierlich mit dem Signal ändert, sondern gleich der Taktperiodendauer oder einem Vielfachen davon ist.

Ein weiterer Vorteil eines Delta-Sigma-Modulators besteht darin, dass er durch Rauschformung (noise shaping Kap. 17.3.6 auf S. 1036) das Quantisierungsrauschen zu hohen Frequenzen verschiebt, die durch das Tiefpassfilter am Ausgang unterdrückt werden. Man kann hier auch einen Delta-Sigma höherer Ordnung einsetzen, um das Quantisierungsrauschen noch wirksamer zu hohen Frequenzen zu verschieben.

Das Tiefpassfilter am Ausgang soll das Spektrum des Eingangssignals wieder herausfiltern. Es darf natürlich keine Verluste aufweisen; deshalb kommt nur ein passives $LC$-Filter in Betracht. Man kann hier auch Filter höherer Ordnung einsetzen. Wichtig ist jedoch, dass sich zusammen mit der Last $R_L$ die richtige Dämpfung für einen maximal flachen Frequenzgang ergibt. Mit dem $LC$-Filter wird an den Verbraucher die Leistung

$$
P_{V\ Nutz} = \frac{U_a^2}{R_L}
$$

(15.5)
<!-- page-import:0960:end -->

<!-- page-import:0961:start -->
924 15. Leistungsverstärker

Abb. 15.38. Ausführung der Leistungsendstufe als H-Brücke bei einem getakteten Leistungsverstärker. Bridge-Tied Load (BTL)

abgegeben; ohne Filter entstünde im Verbraucher unabhängig vom Signal die Leistung

$$
P_{V\ ges} = \frac{V_b^2}{R_L}
$$

(15.6)

von der lediglich der in (15.5) angegebene Teil die gewünschte Nutzleistung ist. Der Wirkungsgrad

$$
\eta = \frac{P_{V\ Nutz}}{P_{V\ ges}} = \frac{U_a^2}{V_b^2}
$$

(15.7)

wäre demnach bei kleinen Signalen schlechter als bei einem linearen Verstärker im AB-Betrieb gemäß (15.1). Ein verlustfreies Tiefpassfilter am Ausgang ist bei ohmscher Last also unbedingt erforderlich. Ein Lautsprecher stellt selbst einen Tiefpass dar, weil er die Oberwellen nicht abstrahlt. Er ist aber kein gutes Tiefpassfilter, weil er einen beträchtlichen ohmschen Widerstand besitzt. Deshalb sollte man auch bei Lautsprecherbetrieb nicht auf ein $LC$-Filter verzichten. Es kann gleichzeitig die HF-Abstrahlung von dem Verbindungskabel zum Lautsprecher reduzieren.

Die praktische Ausführung des Leistungsschalters ist in Abb. 15.38 dargestellt. Man verwendet auch hier eine Brückenschaltung, um nur eine positive Betriebsspannung zu benötigen. Für die oberen Leistungsschalter setzt man hier meist p-Kanal Transistoren ein, weil deren Source-Elektroden dann konstant auf Betriebsspannungspotential liegen; das vereinfacht den Aufbau der Gatetreiber. Wenn die Steuervariable $x = 1$ ist, werden die Schalter $T_2$ und $T_3$ eingeschaltet; dann erhält man die Spannung $U_x = V_b$. Wenn $x = 0$ ist, werden die Transistoren $T_1$ und $T_4$ leitend und man erhält die Spannung $U_x = -V_b$. Es werden demnach genau dieselben Spannungen erzeugt wie in dem Prinzip in den Abb. 15.34 und 15.36, hier aber aus einer einzigen positiven Betriebsspannung. Der Betrieb der Schaltungen aus einer positiven und negativen Betriebsspannung wäre für niedrige Frequenzen und Gleichspannungen auch sehr gefährlich, da wegen der Induktivität am Ausgang je nach Ausgangsspannung Energie von der einen zur anderen Betriebsspannungsquelle übertragen wird, die zu einem unkontrollierten Anstieg einer Betriebsspannung führt. Um das Rückkopplungssignal $U_x = U_{a1} - U_{a2}$ in Abb. 15.38 zu gewinnen, verwendet man einen Subtrahierer.

Der theoretische Wirkungsgrad der getakteten Leistungsverstärker beträgt 100%. Wegen der Umschalt- und Durchlassverluste der Leistungsschalter und des Stromverbrauchs
<!-- page-import:0961:end -->

<!-- page-import:0962:start -->
15.12 Getaktete Leistungsverstärker 925

Abb. 15.39.  
Wirkungsgrad von Leistungsverstärkern. Theoretischer Verlauf durchgezogen, praktischer Verlauf gestrichelt bei Berücksichtigung von Verlusten in den Leistungstransistoren und in der Ansteuerschaltung von 5% der maximalen Ausgangsleistung.

der Ansteuerschaltung, der selbst bei verschwindend kleinen Ausgangsleistungen auftritt, sinkt der Wirkungsgrad auch hier bis auf Null ab. Man erkennt jedoch in Abb. 15.39 große Vorteile gegenüber Leistungsverstärkern im AB-Betrieb nicht nur bei der vollen Ausgangsleistung, sondern besonders bei kleinen und mittleren Ausgangsleistungen, die bei Musikwiedergabe die Regel darstellen.
<!-- page-import:0962:end -->

<!-- page-import:0963:start -->
[unclear]
<!-- page-import:0963:end -->
