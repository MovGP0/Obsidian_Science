# Broadband Amplifiers

<!-- page-import:1363:start -->
1326  24. Hochfrequenz-Verstärker

Demnach ist der effektive Quellenwiderstand bei Anpassung etwa um den Faktor $\sqrt{\beta} \approx 10$ größer als der optimale Quellenwiderstand. Die Rauschzahl ist in diesem Fall zwar geringer als bei den Varianten mit Abschlusswiderstand oder Basisschaltung, jedoch deutlich größer als die optimale Rauschzahl.

Die optimale Rauschzahl erhält man nur, wenn man anstelle der (Leistungs-) Anpassung eine *Rauschanpassung* vornimmt; dabei wird der Innenwiderstand $R_g = Z_W$ der Signalquelle nicht auf $r_e = r_{BE}$, sondern auf $R_{gopt} = r_{BE}/\sqrt{\beta}$ transformiert. Daraus folgt umgekehrt, dass der Eingangswiderstand des (rausch-) angepassten Verstärkers nicht mehr $Z_W$, sondern $Z_W\sqrt{\beta}$ beträgt. Damit erhält man einen Eingangsreflexionsfaktor

$$
r \qquad \overset{(21.38)}{=} \frac{Z_W\sqrt{\beta} - Z_W}{Z_W\sqrt{\beta} + Z_W}
= \frac{\sqrt{\beta} - 1}{\sqrt{\beta} + 1}
\overset{\beta \approx 100}{\approx} 0{,}82
$$

und ein Stehwellenverhältnis (*VSWR*):

$$
s \qquad \overset{(21.46)}{=} \frac{1 + |r|}{1 - |r|}
= \sqrt{\beta}
\overset{\beta \approx 100}{\approx} 10
$$

Für die meisten Anwendungen ist dies inakzeptabel; deshalb wird in der Praxis in den Fällen, in denen eine geringe Rauschzahl wichtig ist, ein Kompromiss zwischen Leistungs- und Rauschanpassung verwendet. Ist die Rauschzahl unkritisch, wird die Leistungsanpassung verwendet.

Oberhalb $f = f_T/\sqrt{\beta} \approx f_T/10$ kann man die Korrelation zwischen den Rauschquellen des Transistors nicht mehr vernachlässigen; die optimale Quellenimpedanz ist dann nicht mehr reell. Wir gehen hier nicht weiter auf diesen Bereich ein.

*Beispiel:* Wir haben die Rauschzahlen der beschriebenen Schaltungsvarianten für einen integrierten Verstärker mit den Transistor-Parametern aus Abb. 4.5 auf Seite 284 mit Hilfe einer Schaltungssimulation ermittelt. Wir können uns dabei aufgrund der Symmetrie auf einen der beiden Eingangstransistoren beschränken; Abb. 24.3 zeigt die entsprechenden Schaltungen. Wir verwenden einen Transistor der Größe 10 und einen Ruhestrom von $I_{C,A} = 1\,\mathrm{mA}$; bei der Basisschaltung nach Abb. 24.3c reduzieren wir den Ruhestrom auf $520\,\mu\mathrm{A}$, um eine Anpassung an $Z_W = 50\,\Omega$ zu erhalten. Der Basisbahnwiderstand hat den Wert $R_B = 50\,\Omega$; die Stromverstärkung beträgt $\beta = 100$, die Frequenz $f = 10\,\mathrm{MHz}$. Aus (24.1) folgt $R_{gopt} = 575\,\Omega$ für $I_{C,A} = 1\,\mathrm{mA}$ und $R_{gopt} = 867\,\Omega$ für $I_{C,A} = 520\,\mu\mathrm{A}$.

Die Schaltung ohne Anpassung nach Abb. 24.3a erzielt für $R_g = R_{gopt} = 575\,\Omega$ die optimale Rauschzahl $F_{opt} = 1{,}26$ (1 dB); für $R_g = 50\,\Omega$ gilt $F = 2{,}3$ (3,6 dB). Für die Schaltung mit Abschlusswiderstand nach Abb. 24.3b erhält man $F = 7$ (8,5 dB); hier nimmt die Rauschzahl also deutlich zu. Einen besseren Wert erzielt die Basisschaltung nach Abb. 24.3c; hier gilt $F = 2{,}6$ (4,1 dB). Bei einer Leistungsanpassung an $R_g = Z_W = 50\,\Omega$ nach Abb. 24.3d erhält man mit $F = 1{,}6$ (2 dB) einen Wert, der nur noch um den Faktor 1,26 (1 dB) über dem optimalen Wert liegt. Bei einer Rauschanpassung wird die optimale Rauschzahl erzielt.

Wenn eine Leistungsanpassung zur Vermeidung von Reflexionen unbedingt erforderlich ist, erhält man mit der Schaltung mit Anpassnetzwerk und Leistungsanpassung nach Abb. 24.3d die geringste Rauschzahl, gefolgt von der Basisschaltung nach Abb. 24.3c und der Schaltung mit Abschlusswiderstand nach Abb. 24.3b. Ohne Leistungsanpassung ist die Schaltung mit Anpassnetzwerk und Rauschanpassung nach Abb. 24.3d sowohl bezüglich der Rauschzahl als auch bezüglich des Reflexionsfaktors deutlich besser als die Schaltung ohne Anpassung nach Abb. 24.3a für den Fall $R_g = 50\,\Omega$.
<!-- page-import:1363:end -->

<!-- page-import:1404:start -->
24.3 Breitband-Verstärker 1367

**Abb. 24.43.** Prinzip eines Breitband-Verstärkers

Wenn der optimale Reflexionsfaktor $r_{g,opt}$ bei ausgangsseitiger Leistungsanpassung im instabilen Bereich liegt, muss man auf die Leistungsanpassung verzichten und den Stabilitätsrand durch geeignete Wahl von $r_L \neq r_2^{*}$ so weit verschieben, bis $r_{g,opt}$ im stabilen Bereich liegt.

Die Optimierung der Parameter $r_g$ und $r_L$ bezüglich Rauschen, Leistungsverstärkung und ggf. weiterer Kriterien erfolgt in der Praxis mit Hilfe von Simulations- oder Mathematikprogrammen, die über Verfahren zur nichtlinearen Optimierung verfügen.

## 24.3 Breitband-Verstärker

Verstärker, die über einen größeren Frequenzbereich eine konstante Verstärkung aufweisen, bezeichnet man als *Breitband-Verstärker* (*broadband amplifiers*). Hochfrequenz-Verstärker werden als breitbandig bezeichnet, wenn ihre Bandbreite $B$ größer ist als die Mittenfrequenz $f_M$; daraus resultiert eine untere Grenzfrequenz $f_U = f_M - B/2 < f_M/2$, eine obere Grenzfrequenz $f_O = f_M + B/2 > 3f_M/2$ und ein Verhältnis $f_O/f_U > 3$. Gelegentlich wird auch $f_O/f_U > 2$ als Kriterium verwendet. Die Bezeichnung *breitbandig* erhalten diese Verstärker nur, weil ihre Bandbreite deutlich höher ist als die Bandbreite der für Hochfrequenzanwendungen typischen, reaktiv angepassten Verstärker, für die in den meisten Fällen $f_O/f_U < 1{,}1$ gilt. Darüber hinaus bezieht sich die Breitbandigkeit bei Hochfrequenz-Verstärkern auch auf die Anpassung an den Wellenwiderstand; deshalb wird als Bandbreite meist nicht die $-3$ dB-Bandbreite, sondern die Bandbreite, innerhalb der die Beträge der Reflexionsfaktoren am Eingang und am Ausgang unter einer vorgegebenen Schranke bleiben, verwendet. Während bei reaktiv angepassten Verstärkern üblicherweise Reflexionsfaktoren mit $|r| < 0{,}1$ gefordert werden, lässt man bei Breitband-Verstärkern Reflexionsfaktoren mit $|r| < 0{,}2$ zu. In der schwächeren Forderung drückt sich die Tatsache aus, dass eine breitbandige Anpassung im MHz- oder GHz-Bereich erheblich aufwendiger ist als eine schmalbandige, reaktive Anpassung.

### 24.3.1 Prinzip eines Breitband-Verstärkers

Das Funktionsprinzip eines Breitband-Verstärkers beruht darauf, dass man eine spannungsgesteuerte Stromquelle mit einem Gegenkopplungswiderstand beidseitig an einen Wellenwiderstand $Z_W$ anpassen kann. Zur Realisierung der spannungsgesteuerten Stromquelle wird ein verallgemeinerter Einzeltransistor aus Abb. 24.26 auf Seite 1345 eingesetzt $^{13}$. Abbildung 24.43 zeigt das Prinzip eines Breitband-Verstärkers.

13 Die in Abb. 24.26b rechts gezeigte Variante kann nicht verwendet werden, da sie keinen hochohmigen Ausgang besitzt.
<!-- page-import:1404:end -->

<!-- page-import:1405:start -->
1368  24. Hochfrequenz-Verstärker

a Verstärkung und Eingangswiderstand

b Ausgangswiderstand

**Abb. 24.44.** Ersatzschaltbilder zur Berechnung der Verstärkung sowie des Ein- und des Ausgangswiderstands eines Breitband-Verstärkers

Wir berechnen zunächst die Verstärkung mit Hilfe des in Abb. 24.44a gezeigten Kleinsignalersatzschaltbilds. Die Knotengleichung am Ausgang lautet:

$$
\frac{u_e-u_a}{R}=Su_e+\frac{u_a}{R_L}
$$

Daraus erhält man die Verstärkung:

$$
A=\frac{u_a}{u_e}=\frac{R_L(1-SR)}{R+R_L}
\qquad (24.20)
$$

Für den Eingangsstrom gilt:

$$
i_e=\frac{u_e-u_a}{R}=\frac{u_e(1-A)}{R}
$$

Daraus folgt für den Eingangswiderstand:

$$
r_e=\frac{u_e}{i_e}=\frac{R+R_L}{1+SR_L}
\qquad (24.21)
$$

Aus Abb. 24.44b entnimmt man:

$$
i_a=\frac{u_a}{R+R_g}+Su_e=\frac{u_a}{R+R_g}+S\frac{R_gu_a}{R+R_g}
$$

Daraus folgt für den Ausgangswiderstand:

$$
r_a=\frac{u_a}{i_a}=\frac{R+R_g}{1+SR_g}
\qquad (24.22)
$$

Wir setzen nun $R_L=R_g=Z_W$ und berechnen die Reflexionsfaktoren am Eingang und am Ausgang:

$$
S_{11}=\left.\frac{r_e-Z_W}{r_e+Z_W}\right|_{R_L=Z_W}
=\frac{R-SZ_W^2}{R+2Z_W+SZ_W^2}
\qquad (24.23)
$$

$$
S_{22}=\left.\frac{r_a-Z_W}{r_a+Z_W}\right|_{R_g=Z_W}
=\frac{R-SZ_W^2}{R+2Z_W+SZ_W^2}
= S_{11}
\qquad (24.24)
$$

Die Reflexionsfaktoren $S_{11}$ und $S_{22}$ sind identisch und werden für

$$
R=SZ_W^2
\qquad (24.25)
$$
<!-- page-import:1405:end -->

<!-- page-import:1406:start -->
24.3 Breitband-Verstärker 1369

zu Null; dann liegt beidseitige Anpassung vor. Für den Vorwärts-Transmissionsfaktor folgt:

$$
S_{21} = A \big|_{R_L=Z_W,\;R=sZ_W^2} = -\frac{R}{Z_W} + 1 = -SZ_W + 1
$$

(24.26)

Er ist gleich der Verstärkung im beidseitig angepassten Fall. Man kann ihn nur über die Steilheit $S$ beeinflussen, da der Gegenkopplungswiderstand an die Steilheit gebunden ist. Eine hohe Steilheit ergibt eine hohe Verstärkung.

## 24.3.2 Ausführung eines Breitband-Verstärkers

Abbildung 24.45 zeigt die praktische Ausführung eines Breitband-Verstärkers auf der Basis eines integrierten Darlington-Transistors mit Widerständen zur Arbeitspunkteinstellung. Die Widerstände $R_3$ und $R_4$ haben Werte im k$\Omega$-Bereich und können vernachlässigt werden; insbesondere ist der interne Gegenkopplungswiderstand $R_3$ mindestens um den Faktor 10 größer als der zur Anpassung benötigte Widerstand $R$. Für den effektiven Gegenkopplungswiderstand gilt demnach:

$$
R_\mathrm{eff} = R \parallel R_3 \qquad \overset{R \ll R_3}{\approx} \qquad R
$$

Der Widerstand $R_C$ dient zur Einstellung des Ruhestroms. Er liegt kleinsignalmäßig parallel zum Ausgang des Verstärkers und wirkt wie ein zusätzlicher Lastwiderstand. Daraus folgt, dass der Verstärker die Symmetriebedingung $S_{11} = S_{22}$ eines idealen Breitband-Verstärkers nicht mehr exakt erfüllt und die Anpassungsbedingung $S_{11} = S_{22} = 0$ nur näherungsweise eingehalten werden kann. Deshalb muss $R_C$ möglichst groß gewählt werden. Im Bereich der oberen Grenzfrequenz kann man die Verstärkung und die Anpassung mit den Induktivitäten $L_R$ und $L_C$ verbessern. In der Induktivität $L_R$ gehen auch die parasitären Induktivitäten des Widerstands $R$ und des Koppelkondensators $C_k$ auf; deshalb kann man für $C_k$ einen Kondensator mit relativ hoher Kapazität und Induktivität, d.h. niedriger Resonanzfrequenz, verwenden, ohne dass dies negative Auswirkungen hat. Die Kapazitäten $C_e$ und $C_a$ dienen als Koppelkondensatoren. Sie sind problematisch, da übliche Kondensatoren nur in einem relativ schmalen Bereich um die Resonanzfrequenz eine Impedanz mit $|X| \ll Z_W = 50\,\Omega$ erzielen, siehe Abb. 23.5 auf Seite 1289; deshalb wird die Bandbreite der Anpassung in der Regel durch die Koppelkondensatoren begrenzt.

Aus der gewünschten Verstärkung erhält man mit (24.26) die erforderliche Steilheit $S$ der spannungsgesteuerten Stromquelle, die näherungsweise der Steilheit des Transistors $T_2$ unter Berücksichtigung der Stromgegenkopplung über $R_2$ entspricht:

$$
S \approx \frac{S_2}{1+S_2R_2}
\qquad \text{mit } S_2 = \frac{I_{C2,A}}{U_T}
$$

Durch die Wahl des Ruhestroms $I_{C2,A}$ wird die maximale Ausgangsleistung des Verstärkers festgelegt. In der Praxis ist eine Aussteuerung mit einem Effektivwert bis zu $I_\mathrm{eff} \approx I_{C2,A}/2$ sinnvoll; der Klirrfaktor bleibt dann unter 10%. Daraus folgt für die Ausgangsleistung und den Ruhestrom:

$$
P_{a,\max} = I_\mathrm{eff}^2 Z_W \approx \frac{I_{C2,A}^2 Z_W}{4}
\qquad \Rightarrow \qquad
I_{C2,A} > \sqrt{\frac{4\,P_{a,\max}}{Z_W}}
$$

(24.27)

Der Ruhestrom muss jedoch mindestens so groß sein, dass die erforderliche Steilheit erreicht wird: $I_{C2,A} \ge S U_T$; ist dies der Fall, erhält man für den Widerstand der Stromgegenkopplung:
<!-- page-import:1406:end -->

<!-- page-import:1407:start -->
1370  24. Hochfrequenz-Verstärker

**Abb. 24.45.**  
Praktische Ausführung eines Breitband-Verstärkers

$$
R_2 \qquad \overset{I_{C,A}>SU_T}{=} \qquad \frac{1}{S}-\frac{U_T}{I_{C2,A}}
\qquad\qquad (24.28)
$$

Die parasitäre Induktivität des Widerstands $R_2$ muss möglichst gering sein, damit eine unerwünschte reaktive Gegenkopplung vermieden wird; dies ist vor allem bei Werten unter $20\,\Omega$ wichtig. Wenn man beim Aufbau eines Breitband-Verstärkers mit Stromgegenkopplung nicht die erwartete Bandbreite erzielt, liegt dies häufig an einer zu hohen parasitären Induktivität im Emitterkreis von $T_2$.

Die Stromgegenkopplung über $R_2$ wirkt sich auch auf die Bandbreite aus; sie nimmt mit zunehmender Gegenkopplung zu. Deshalb wird bei besonders breitbandigen Verstärkern auch dann eine Stromgegenkopplung verwendet, wenn dies aufgrund der Ausgangsleistung nicht erforderlich ist; ein typisches Beispiel dafür sind Breitband-Messverstärker.

*Beispiel:* Wir entwerfen im folgenden einen Breitband-Verstärker nach Abb. 24.45 für ein $50\,\Omega$-System und verwenden dazu zwei Transistoren des Typs BFR93 in Darlington-Schaltung, siehe Abb. 24.46. Wir fordern eine Verstärkung $A=16\,\mathrm{dB}$ und eine maximale Ausgangsleistung $P_{a,max}=0{,}3\,\mathrm{mW}=-5\,\mathrm{dBm}$. Als Versorgungsspannung nehmen wir $U_b=5\,\mathrm{V}$ an. Aus der Verstärkung folgt:

$$
|A|=|S_{21}|=10^{\frac{A\,[\mathrm{dB}]}{20\,\mathrm{dB}}}
=10^{\frac{16\,\mathrm{dB}}{20\,\mathrm{dB}}}
=6{,}3
$$

Damit erhalten wir aus (24.26) die erforderliche Steilheit:

$$
S_{21}=-SZ_W+1=6{,}3
\qquad \overset{Z_W=50\,\Omega}{\Longrightarrow} \qquad
S=\frac{7{,}3}{50\,\Omega}=146\,\mathrm{mS}
$$
<!-- page-import:1407:end -->

<!-- page-import:1408:start -->
24.3 Breitband-Verstärker 1371

![Abb. 24.46. Beispiel für einen Breitband-Verstärker](image)

**Abb. 24.46.**  
Beispiel für einen Breitband-Verstärker

Daraus folgt für den Ruhestrom von $T_2$: $I_{C2,A} > SU_T = 3{,}8\,\mathrm{mA}$. Aus der maximalen Ausgangsleistung folgt mit (24.27) $I_{C2,A} > 4{,}9\,\mathrm{mA}$. Wir wählen $I_{C2,A} = 5\,\mathrm{mA}$. Für den Widerstand $R_2$ erhalten wir aus (24.28) $R_2 = 1{,}6\,\Omega$. Wir verzichten zunächst auf eine Stromgegenkopplung, da wir aufgrund sekundärer Effekte mit einem Verlust an Verstärkung rechnen müssen.

Für den Ruhestrom des Transistors $T_1$ wählen wir $I_{C1,A} = 2\,\mathrm{mA}$, da die Transitfrequenz bei kleineren Strömen schnell abnimmt. Da die Basis-Emitter-Spannung von $T_2$ etwa $0{,}66\,\mathrm{V}$ beträgt und der Basisstrom $I_{B2,A} \approx 50\,\mu\mathrm{A}$ (Stromverstärkung etwa 100) gegen $I_{C1,A} = 2\,\mathrm{mA}$ vernachlässigt werden kann, erhalten wir für den Widerstand $R_1$:
$R_1 \approx 0{,}66\,\mathrm{V}/2\,\mathrm{mA} = 330\,\Omega$. Für den Spannungsteiler zur Arbeitspunkteinstellung wählen wir $R_3 = 5{,}6\,\mathrm{k}\Omega$ und $R_4 = 4{,}7\,\mathrm{k}\Omega$; damit erhält man an den Kollektoren der Transistoren eine Spannung von $3\,\mathrm{V}$, siehe Abb. 24.46. Damit sich für $T_2$ der gewünschte Ruhestrom $I_{C2,A} = 5\,\mathrm{mA}$ einstellt, muss man bei einer Versorgungsspannung $U_b = 5\,\mathrm{V}$ einen Kollektorwiderstand $R_C = 270\,\Omega$ verwenden.

Nachdem alle Widerstände zur Arbeitspunkteinstellung dimensioniert sind, können wir die Steilheit $S$ berechnen; dazu entnehmen wir aus Abschnitt 2.4.4 die Gleichung für die Steilheit eines Darlington-Transistors mit Widerstand $R$ und setzen $R = R_1$ ein:

$$
S \approx S_1 \frac{1 + S_2 \left(r_{BE2} \parallel R_1\right)}{1 + S_1 \left(r_{BE2} \parallel R_1\right)}
$$

Mit $S_1 = I_{C1,A}/U_T = 77\,\mathrm{mS}$, $S_2 = I_{C2,A}/U_T = 192\,\mathrm{mS}$ und $R_1 = 330\,\Omega$ folgt $S \approx 185\,\mathrm{mS}$. Damit folgt für den Gegenkopplungswiderstand aus (24.25) $R = SZ_W^2 = 463\,\Omega$.

Der weitere Entwurf erfolgt mit Hilfe von Schaltungssimulationen. Dabei haben wir für alle Widerstände und Spulen sowie den Kondensator $C_k$ die Hochfrequenz-Ersatzschaltbilder eingesetzt; nur für die Koppelkondensatoren $C_e$ und $C_a$ haben wir ideale Kapazitäten angenommen. Zunächst werden die Reflexionsfaktoren $S_{11}$ und $S_{22}$ bei niedrigen Frequenzen durch eine Feinabstimmung des Gegenkopplungswiderstands $R$ optimiert; man erhält $R \approx 440\,\Omega$. Anschließend wird die Verstärkung und die Anpassung bei hohen Frequenzen [unclear]
<!-- page-import:1408:end -->
