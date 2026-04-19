# Transimpedance Amplifier

<!-- page-import:0555:start -->
518  5. Operationsverstärker

Es handelt sich hier also um einen invertierenden Verstärker. Dies erkennt man auch direkt in der Schaltung, wenn man in Gedanken eine positive Eingangsspannung anlegt. Da sie über $R_1$ auf den invertierenden Eingang gelangt, wird die Ausgangsspannung negativ. Die Ausgangsspannung geht so weit nach Minus bis $U_D \approx 0$ ist; dann ist hier auch $U_N \approx 0$ und man spricht daher von einer virtuellen Masse.

Die Ausgangsspannung eines invertierenden Operationsverstärkers stellt sich so ein, dass die Spannung am invertierenden Eingang näherungsweise Null wird. Daraus folgt das Prinzip der virtuellen Masse.

Zur Berechnung der Ausgangsspannung mit dieser Regel wendet man die Knotenregel auf den invertierenden Eingang an und erhält:

$$
\frac{U_e}{R_1} + \frac{U_a}{R_N} = 0
$$

(5.21)

Diese Gleichung lässt sich direkt nach $U_a$ auflösen:

$$
U_a = -\frac{R_N}{R_1} U_e
\quad \Rightarrow \quad
A = \frac{U_a}{U_e} = -\frac{R_N}{R_1}
$$

Weil alle Ströme hier auf das Nullpotential abfließen und ihre Summe – wie immer – Null ergeben muss, bezeichnet man den invertierenden Eingang bei dem so beschalteten Verstärker als virtuelle Masse oder wegen (5.21) auch als Summationspunkt.

Im Vergleich zum nichtinvertierenden Verstärker in Abb. 5.6 ist die Spannungsverstärkung hier also negativ und im Betrag um 1 kleiner. Man kann die Verstärkung der Schaltung in Abb. 5.10 natürlich auch für beliebige Differenzverstärkungen $A_D$ berechnen. Dazu muss man berücksichtigen, dass $U_D$ nicht exakt Null ist. Aus

$$
\frac{U_E + U_D}{R_1} + \frac{U_a + U_D}{R_N} = 0
\qquad \text{und} \qquad
U_a = A_D\,U_D
$$

folgt mit dem Rückkopplungsfaktor $k_R = R_1/(R_1 + R_N)$ und $k_F = -R_N/(R_1 + R_N)$:

$$
A = \frac{U_a}{U_e} = -\frac{R_N A_D}{R_1 A_D + R_N + R_1} = k_F\,\frac{A_D}{1 + k_R A_D}
$$

(5.22)

Auch hier bestimmt die Schleifenverstärkung die Abweichung vom idealen Verhalten, denn für $g = k_R A_D \gg 1$ erhält man:

$$
A \overset{kA_D \gg 1}{=} \frac{k_F}{k_R} = -\frac{R_N}{R_1}
$$

(5.23)

Im einfachsten Fall besteht die äußere Beschaltung lediglich aus einem Spannungsteiler, wie wir in Abb. 5.7 und 5.10 gesehen haben. Wenn man ein RC-Netzwerk verwendet, entsteht ein Integrator, ein Differentiator oder ein aktives Filter. Man kann auch nichtlineare Bauelemente wie z.B. Dioden in der äußeren Beschaltung einsetzen, um Exponentialfunktionen und Logarithmen zu bilden. Diese Anwendungen werden in Kapitel 10.7 auf S. 755 beschrieben. Hier haben wir uns auf die einfachsten ohmschen Gegenkopplungen beschränkt.
<!-- page-import:0555:end -->

<!-- page-import:0624:start -->
587

# 5.6 Der Transimpedanzverstärker (CV-OPV)

a Rauschspannung

b Rauschstrom

**Abb. 5.102.** Spannungs- und Stromrauschen von rauscharmen Operationsverstärkern mit Bipolartransistoren, Sperrschicht-Fets und Mosfets am Eingang

Darin sind $f_{max}$ und $f_{min}$ die Grenzfrequenzen des interessierenden Bereichs und $f_{gu}$, $f_{gi}$ die Grenzfrequenzen des 1/$f$ Rauschens. Sie sind als Beispiel für das Stromrauschen des CMOS-Operationsverstärkers in Abb. 5.102b eingezeichnet. Hier ergibt sich im Frequenzbereich von 100 Hz bis 100 kHz ein Rauschstrom von:

$$
i_{r,eff} = 0{,}01 \frac{\mathrm{fA}}{\sqrt{\mathrm{Hz}}} \cdot \sqrt{1\,\mathrm{MHz}\,\ln\frac{100\,\mathrm{kHz}}{100\,\mathrm{Hz}} + (100\,\mathrm{kHz} - 100\,\mathrm{Hz})} = 26\,\mathrm{fA}
$$

# 5.6 Der Transimpedanzverstärker (CV-OPV)

Transimpedanzverstärker unterscheiden sich von konventionellen Operationsverstärkern dadurch, dass sie am Eingang keinen Differenzverstärker, sondern einen Impedanzwandler besitzen. Der Ausgang dieses Impedanzwandlers bildet den invertierenden Eingang. Er ist daher niederohmig, also stromgesteuert, wie wir in der Übersicht in Abb. 5.3 gesehen haben. Aus diesem Grund bezeichnet man den Transimpedanzverstärker auch als CV-Operationsverstärker.

## 5.6.1 Innerer Aufbau

Die einfachste Ausführung eines CV-Verstärkers ist in Abb. 5.103a dargestellt, daneben ein normaler VV-Verstärker zum Vergleich. Die Transistoren $T_1$ und $T_2$ bilden den Spannungsfolger, der vom nichtinvertierenden zum invertierenden Eingang führt. Ungewöhnlich ist die Stromsteuerung des invertierenden Eingangs. Wenn in Abb. 5.103a der Strom $I_q$ am invertierenden Eingang fließt, erhöht sich der Strom durch $T_2$. Diese Erhöhung wird über den Kollektor von $T_2$ zu dem Stromspiegel $T_3$, $T_4$ weitergeleitet wie beim VV-Operationsverstärker. Die Signale, die man am nichtinvertierenden Eingang anlegt, werden nach Impedanzwandlung an den invertierenden Eingang übertragen. Daher wird die Spannungsdifferenz zwischen den Eingängen bereits durch die Konstruktion der Schaltung näherungsweise zu Null und nicht erst durch die äußere Gegenkopplung wie beim VV-Operationsverstärker. Wegen dieser Eigenschaft zeigt das kleine zusätzliche Verstärker-Symbol vom nichtinvertierenden zum invertierenden Eingang des Schaltsymbols in Abb. 5.104a. Die Beschaltung als Verstärker erfolgt hier genau so wie beim VV-Operationsverstärker.
<!-- page-import:0624:end -->

<!-- page-import:0625:start -->
588  5. Operationsverstärker

a  CV-Operationsverstärker  
Transimpedanzverstärker

b  VV-Operationsverstärker  
konventioneller OPV

**Abb. 5.103.** Einfacher CV-Operationsverstärker mit VV-Operationsverstärker zum Vergleich. Die eingetragenen Spannungen und Ströme sind lediglich Beispiele.

Die Leerlaufverstärkung hängt hier von der Größe der Gegenkopplungswiderstände ab. Deshalb wollen wir den Gegenkopplungswiderstand $R_N$ in Gedanken nicht am Ausgang sondern an Masse anschließen. Dann liegt die Parallelschaltung von $R_N$ und $R_1$ in Reihe mit dem Ausgangswiderstand des Spannungsfolgers $r_S = 1/S$ – wie Abb. 5.104b zeigt – und man erhält:

$$
A_D = \frac{U_a}{U_P} = \frac{Z}{r_S + R_1 \parallel R_N} = \frac{r_{HIP}}{r_S + R_1 \parallel R_N} = \frac{\text{z.B. }50\,\mathrm{k}\Omega}{25\,\Omega + 100\,\Omega} = 400 \qquad (5.81)
$$

Darin ist $Z$ die Transimpedanz, nach der diese Verstärker benannt werden. Je höher sie ist, desto größer wird auch die Verstärkung. Schaltungstechnisch handelt es sich um den Innenwiderstand am Hochimpedanzpunkt (HIP), hier am Kollektor von $T_4$.

Die Spannungsverstärkung der gegengekoppelten Schaltung in Abb. 5.104 lässt sich hier genauso wie beim VV-Operationsverstärker berechnen, der als nichtinvertierender Verstärker beschaltet ist, weil der Strom $I_q$ am invertierenden Eingang im eingeschwungenen Zustand vernachlässigbar ist:

$$
A = \frac{U_a}{U_P} \approx 1 + \frac{R_N}{R_1} = 1 + \frac{\text{hier }300\,\Omega}{150\,\Omega} = 3
$$

Der Spannungsteiler $R_1,\;R_N$ hat hier also eine zweifache Aufgabe: Zum Einen bestimmt sein Verhältnis die Spannungsverstärkung der gegengekoppelten Schaltung, zum Anderen

a  Grundschaltung

b  Modell

**Abb. 5.104.** Schaltsymbol und Modell eines CV-Operationsverstärkers. Die eingetragenen Werte gelten für einen Ruhestrom von $I_0 = 1\,\mathrm{mA}$.
<!-- page-import:0625:end -->

<!-- page-import:0626:start -->
## 5.6 Der Transimpedanzverstärker (CV-OPV)

589

**Abb. 5.105.** Praktische Ausführung eines CV-Operationsverstärkers im Gegentakt-AB-Betrieb. Für den Impedanzwandler am Ausgang sind alle Schaltungen von Abschnitt 5.2.2.2 geeignet. Beispiel für einen Strom von $I_0 = 1\ \mathrm{mA}$.

bestimmt die Parallelschaltung der Widerstände die Leerlaufverstärkung des Operationsverstärkers. Damit lassen sich die Schleifenverstärkung und damit das Einschwingverhalten einstellen. Hier ist also eine angepasste Frequenzgangkorrektur durch den Anwender möglich, die wir bereits auf Seite 563 für VV-Operationsverstärker beschrieben haben.

Man sieht in Abb. 5.103, dass der Strom $I_q$ große positive Werte annehmen kann, die über den Stromspiegel an den Ausgang übertragen werden. Negative Ströme dürfen dagegen nicht größer als $I_0$ werden, da sonst der Transistor $T_1$ sperrt, und als Folge davon auch der Stromspiegel. Um bei kleinen Ruheströmen große Signalströme mit beliebiger Polarität verarbeiten zu können, ergänzt man die Schaltung symmetrisch gemäß Abb. 5.105 und setzt Gegentakt-AB-Betrieb ein. Die Schaltung entspricht dem VV-Operationsverstärker im Gegentakt-AB-Betrieb (*current on demand*) in Abb. 5.30; hier fehlt lediglich der Impedanzwandler am invertierenden Eingang.

Die Leerlaufverstärkung, die sich aus (5.81) ergibt, ist häufig nicht ausreichend, da sie durch den Innenwiderstand $R_N \parallel R_1$ des Gegenkopplungsspannungsteilers zusätzlich reduziert wird. Um die Spannungsverstärkung zu erhöhen, ist es auch hier möglich, den Innenwiderstand am Hochimpedanzpunkt zu erhöhen; dies ist gleichbedeutend mit der Erhöhung der Transimpedanz $Z$. Dazu haben wir bei der Schaltung in Abb. 5.106 Kaskode-Stromspiegel eingesetzt wie bei dem VV-Operationsverstärker in Abb. 5.23. Dadurch erhöht sich der Innenwiderstand gemäß (4.27) am Hochimpedanzpunkt um die Stromverstärkung $\beta$ der Transistoren. Um diesen Faktor steigt auch die offene Verstärkung in (5.81):

$$
\frac{U_a}{U_P}
=
\frac{Z}{r_S + R_1 \parallel R_N}
=
\frac{\beta\, r_{CE}/2}{r_S + R_1 \parallel R_N}
\qquad
{}^{I_0=1\ \mathrm{mA}}
=
\frac{100 \cdot 50\,\mathrm{k}\Omega}{25\,\Omega + 100\,\Omega}
=
40.000
$$

Der Faktor $1/2$ im Zähler berücksichtigt die Tatsache, dass auch hier am Hochimpedanzpunkt zwei gleichartige Stromquellen parallel geschaltet sind. Die Kaskodeschaltung bringt hier dieselben Vorteile wie beim VV-Operationsverstärker in Abb. 5.22. Die statische Genauigkeit wird erhöht; die Transitfrequenz der Schaltung bleibt auch hier unverändert. Ein Nachteil der Kaskode-Stromquellen besteht allerdings darin, dass die Gleichtakt- und Ausgangsaussteuerbarkeit um $0{,}6\ \mathrm{V}$ reduziert wird. Bei einer Betriebsspannung von $\pm 5\ \mathrm{V}$ beträgt sie nur $\pm 3{,}6\ \mathrm{V}$.
<!-- page-import:0626:end -->

<!-- page-import:0627:start -->
590  5. Operationsverstärker

Abb. 5.106.  
Erhöhung der Spannungsverstärkung eines CV-Operationsverstärker durch Kaskode-Stromspiegel

## 5.6.2 Vergleich von VV- und CV-Operationsverstärkern

Transimpedanzverstärker werden in Anwendungen eingesetzt, in denen es auf hohe Bandbreite bzw. kurze Anstiegszeiten ankommt. Es gibt aber auch Breitband-VV-Operationsverstärker, die in derselben Technologie hergestellt werden und im AB-Betrieb arbeiten, wie in Abb. 5.30 gezeigt. Um die Unterschiede zu erklären, haben wir in Abb. 5.107 beide Verstärker gegenüber gestellt. Der wesentliche Unterschied wird im Modell ersichtlich: Beim CV-Operationsverstärker fehlt der Impedanzwandler am invertierenden Eingang. Die Steilheit der Eingangsstufe wird hier deshalb vom Widerstand am invertierenden Eingang bestimmt:

$$
S = \frac{I_q}{U_e} = \frac{1}{r_S + R_1 \parallel R_N}.
$$

Aus diesem Grund muss man die Widerstände $R_1$ und $R_N$ bei der Analyse der offenen Schaltung berücksichtigen. In der Praxis ist meist $r_S \ll R_1 \parallel R_N$, so dass man den Einfluss von $r_S$ vernachlässigen kann. Dann ist die Spannung $U_D \approx 0$ und die Spannung $U_e$ fällt an $R_1$ und $R_N$ ab. Deshalb ist die Verstärkung eines CV-Operationsverstärkers deutlich niedriger als die eines vergleichbaren VV-Operationsverstärkers mit gleichem Widerstand am Hochimpedanzpunkt $r_{HIP}$. Da $r_{HIP}$ im M$\Omega$-Bereich liegt, bestimmt er nur bei niedrigen Frequenzen die Verstärkung. Die parasitäre Kapazität $C_{HIP}$ von wenigen Pikofarad bewirkt schon im Niederfrequenzbereich einen Abfall der Verstärkung. Rechnerisch lässt sich das berücksichtigen, indem man mit

$$
\underline{Z} = r_{HIP} \parallel (sC_{HIP}) = \frac{r_{HIP}}{1 + s\,C_{HIP}\,r_{HIP}}
$$

rechnet. Für hohe Frequenzen bestimmt die Kapazität das Verhalten, man braucht dann den Widerstand nicht zu berücksichtigen; dadurch lässt sich die Rechnung vereinfachen.
<!-- page-import:0627:end -->

<!-- page-import:0628:start -->
5.6 Der Transimpedanzverstärker (CV-OPV) 591

Man sieht, dass die Grenzfrequenz von beiden Verstärkern dieselbe ist. Die Transitfrequenzen sind jedoch verschieden: Während die des VV-Operationsverstärkers durch den inneren Aufbau vorgegeben ist, hängt die des CV-Operationsverstärkers von der äußeren Beschaltung ab.

Zur genauen Analyse des gegengekoppelten CV-Operationsverstärkers muss man auch den Strom am invertierenden Eingang berücksichtigen; deshalb darf man den Gegenkopplungsspannungsteiler hier nicht als unbelastet annehmen. Zur Berechnung der Spannungsverstärkung wendet man die Knotenregel auf den invertierenden Eingang an:

$$
\frac{U_a - U_e}{R_N} - \frac{U_e}{R_1} + \frac{U_a}{Z} = 0
$$

Für niedrige Frequenzen ergibt sich genau dasselbe Ergebnis wie beim VV-Operationsverstärker, wie der Vergleich in Abb. 5.107 zeigt. Es ist verwunderlich, dass der Strom am invertierenden Eingang das Ergebnis nicht verändert. Die Ursache dafür ist, dass der Strom $I_q$ klein ist, denn selbst für eine Ausgangsspannung von 5 V ist bei einem Widerstand von $r_{HIP} = 1\,\mathrm{M}\Omega$ nur ein Strom von $I_q = 5\,\mu\mathrm{A}$ erforderlich.

Beim VV-Operationsverstärker erfolgt die Frequenzgangkorrektur durch die interne Kapazität $C_k$ in Abb. 5.25. Dadurch wird die Verstärkung bei hohen Frequenzen reduziert. Hier ist die Transitfrequenz unabhängig von der durch die Gegenkopplung eingestellten Verstärkung, wie man in Abb. 5.107 erkennt. Die Grenzfrequenz der gegengekoppelten Schaltung ist dann umgekehrt proportional zur eingestellten Verstärkung; das Verstärkungs-Bandbreite Produkt $f_g A_0 = f_T$ ist konstant gleich der Transitfrequenz. Zur Anpassung der Frequenzgangkorrektur an die Verstärkung hat man hier lediglich die Möglichkeit teilkompensierte Typen einzusetzen, die für einige VV-Operationsverstärker alternativ angeboten werden. Die Anschlüsse für externe Korrekturkapazitäten werden heutzutage nicht mehr bereitgestellt.

Beim CV-Operationsverstärker kann der Anwender die Differenzverstärkung durch die Parallelschaltung der Gegenkopplungswiderstände mit $R_N \parallel R_1$ bestimmen. Dabei wird sie für alle Frequenzen in gleicher Weise erhöht oder erniedrigt. Wenn man nun $R_1$ verändert, bleibt sogar die Schleifenverstärkung $g = R_N/r_{HIP}$ konstant. Die Verstärkung der gegengekoppelten Schaltung wird - wie immer bei Operationsverstärkern - durch das Verhältnis der Gegenkopplungswiderstände $A_D = 1 + R_N/R_1$ festgelegt. Für CV-Operationsverstärker gibt es einen optimalen Wert für den Gegenkopplungswiderstand $R_N$, der von den Herstellern zum Teil bereits eingebaut wird. In Abb. 5.107 kann man die Gemeinsamkeiten und Unterschiede von VV- und CV-Operationsverstärkern miteinander vergleichen.

Die Frage ist: Welcher Operationsverstärker ist für welche Anwendung besser geeignet? Wenn hohe statische Genauigkeit erforderlich ist, sind VV-Operationsverstärker überlegen. Hier gibt es Typen mit niedriger Offsetspannung und hoher Differenzverstärkung. Dafür lassen sich mit CV-Operationsverstärkern höhere Bandbreiten erreichen. Die Ursache dafür ist der fehlende Impedanzwandler am invertierenden Eingang. Die dort vorhandene Kapazität wird hier nicht nur vom Ausgang aus aufgeladen, sondern auch vom Impedanzwandler am nichtinvertierenden Eingang. Da der CV-Operationsverstärker keinen Impedanzwandler am invertierenden Eingang besitzt, entfällt auch die damit verbundene Phasenverschiebung; deshalb ist die Schwingneigung gering. Bei der Auswahl eines Operationsverstärkers sollte man die folgende Regel befolgen:

- VV-OPV = High Precision
- CV-OPV = High Speed
<!-- page-import:0628:end -->

<!-- page-import:0629:start -->
592 5. Operationsverstärker

# VV-Operationsverstärker

**ohne Gegenkopplung**

Ausgangsspannung  
$U_a = I_q\, Z = \dfrac{Z}{2r_S}\, U_e = A_D\, U_e$

$Z = r_{HIP} \parallel \dfrac{1}{s C_{HIP}} = \dfrac{r_{HIP}}{1 + s r_{HIP} C_{HIP}} \xrightarrow{\mathrm{HF}} \dfrac{1}{s C_{HIP}}$

Verstärkung  
$A_D = \dfrac{U_a}{U_e} = \dfrac{Z}{2r_S} = \dfrac{r_{HIP}/2r_S}{1 + s r_{HIP} C_{HIP}}$

Fallunterscheidung  
$$
A_D =
\begin{cases}
A_{D0} = \dfrac{r_{HIP}}{2r_S} & \text{für } f \ll f_g \\
\dfrac{1}{2 s r_S C_{HIP}} & \text{für } f \gg f_g
\end{cases}
$$

Grenzfrequenz  
$f_g = \dfrac{1}{2\pi r_{HIP} C_{HIP}}$

Transitfrequenz  
$f_T = \dfrac{1}{4\pi r_S C_{HIP}}$

**mit Gegenkopplung**

Rückkopplungsfaktor  
$k_R = \dfrac{R_1}{R_1 + R_N} \approx \dfrac{1}{A_0}$

Verstärkung  
$A = \dfrac{U_a}{U_e} = \dfrac{A_D}{1 + k_R A_D} = \dfrac{1}{k_R + 2 s r_S C_{HIP} + 2 r_S / r_{HIP}}$

Fallunterscheidung  
$$
A =
\begin{cases}
A_0 = \dfrac{1}{k_R + 2 r_S / r_{HIP}} \approx \dfrac{1}{k_R} = 1 + \dfrac{R_N}{R_1} & \text{für } f \ll f_g \\
\dfrac{1}{2 s r_S C_{HIP}} & \text{für } f \gg f_g
\end{cases}
$$

Grenzfrequenz  
$f_g = \dfrac{k_R}{4\pi r_S C_{HIP}} \approx \dfrac{f_T}{A_0}$

Transitfrequenz  
$f_T = \dfrac{1}{4\pi r_S C_{HIP}} = \text{const}$

Schleifenverstärkung  
$g = \dfrac{A_D}{A} \sim \dfrac{1}{A_0}$

Frequenzgang

Abb. 5.107. Gegenüberstellung von VV und CV-Operationsverstärkern
<!-- page-import:0629:end -->

<!-- page-import:0630:start -->
593

# 5.6 Der Transimpedanzverstärker (CV-OPV)

# CV-Operationsverstärker

**ohne Gegenkopplung**

$r_S \approx 0$

$U_D \approx 0$

$U_N \approx U_e$

$Z = r_{HIP} \parallel \dfrac{1}{s\,C_{HIP}} = \dfrac{r_{HIP}}{1+s\,r_{HIP}\,C_{HIP}} \overset{\mathrm{HF}}{=} \dfrac{1}{s\,C_{HIP}}$

Ausgangsspannung $U_a = I_q Z = \dfrac{U_e}{R_1 \parallel R_N}\,Z$

Verstärkung

$A_D = \dfrac{U_a}{U_e} = \dfrac{Z}{R_1 \parallel R_N} = \dfrac{r_{HIP}/(R_1 \parallel R_N)}{1+s\,r_{HIP}\,C_{HIP}}$

Fallunterscheidung

$$
A_D =
\begin{cases}
A_{D0}=\dfrac{r_{HIP}}{R_1 \parallel R_N} & \text{für } f \ll f_g \\
\dfrac{1}{s\,(R_1 \parallel R_N)\,C_{HIP}} & \text{für } f \gg f_g
\end{cases}
$$

Grenzfrequenz

$f_g = \dfrac{1}{2\pi\,r_{HIP}\,C_{HIP}}$

Transitfrequenz

$f_T = \dfrac{1}{2\pi\,(R_1 \parallel R_N)\,C_{HIP}}$

**mit Gegenkopplung**

$r_S \approx 0$

$U_D \approx 0$

Rückkopplungsfaktor

$k_R = \dfrac{R_1}{R_1+R_N} \approx \dfrac{1}{A_0}$

Verstärkung

$$
A = \dfrac{U_a}{U_e}
= \dfrac{Z}{Z+R_N}\left(1+\dfrac{R_N}{R_1}\right)
= \dfrac{1}{1+s\,R_N\,C_{HIP}+R_N/r_{HIP}}\left(1+\dfrac{R_N}{R_1}\right)
$$

Fallunterscheidung

$$
A =
\begin{cases}
A_0=\dfrac{1}{1+R_N/r_{HIP}}\left(1+\dfrac{R_N}{R_1}\right)\approx 1+\dfrac{R_N}{R_1} & \text{für } f \ll f_g \\
\dfrac{1}{s\,(R_1 \parallel R_N)\,C_{HIP}} & \text{für } f \gg f_g
\end{cases}
$$

Grenzfrequenz

$f_g \approx \dfrac{1}{2\pi\,R_N\,C_{HIP}} = \mathrm{const}$

Transitfrequenz

$f_T = \dfrac{1/k_R}{2\pi\,R_N\,C_{HIP}} = \dfrac{A_0}{2\pi\,R_N\,C_{HIP}} \sim A_0$

Schleifenverstärkung

$g_1 = g_{10} = \dfrac{A_D}{A} = \dfrac{r_{HIP}}{R_N} = \mathrm{const}$

Frequenzgang

dB

80

60

40

20

0

1k   10k   100k   1M   10 M   100 M   1G   $f/\mathrm{Hz}$

$g_1$

$g_{10}$

$f_g'$

$A_{D10}$

$A_{D1}$

$A_0 = 10$

$A_0 = 1$

$f_{g10}$

$f_{g1}=f_{T1}$

$f_{T10}$

**Abb. 5.107.** Gegenüberstellung von VV und CV-Operationsverstärkern
<!-- page-import:0630:end -->

<!-- page-import:0631:start -->
594  5. Operationsverstärker

$A=-R_N/R_1$

a Invertierender Verstärker

$A=1+R_N/R_1$

b Nichtinvertierender Verstärker

**Abb. 5.108.** Anwendung des CV-Operationsverstärkers als Verstärker

## 5.6.3 Typische Anwendungen

Die Leerlaufverstärkung $A_D$ eines CV-Operationsverstärkers wird im Wesentlichen durch Stromgegenkopplung mit den externen Widerständen bestimmt. Die Schaltung wird instabil, wenn man die Widerstände durch einen Kondensator ersetzt. Deshalb lässt sich mit CV-Operationsverstärkern kein Integrator oder Differentiator realisieren. Sie werden daher hauptsächlich als Verstärker mit hoher Bandbreite eingesetzt, z.B. als Videoverstärker. Dabei ist der Betrieb als invertierender- und nichtinvertierender Verstärker möglich, wie Abb. 5.108 zeigt. Der Widerstand $R_N$ bestimmt die Schleifenverstärkung; er ist daher weitgehend durch den Verstärker vorgegeben. Der Widerstand $R_1$ bestimmt die Spannungsverstärkung; bei höherer Verstärkung ergeben sich niederohmige Werte. Da der Widerstand $R_1$ beim invertierenden Verstärker den Eingangswiderstand darstellt, bevorzugt man meist den nichtinvertierenden Betrieb.

Wichtig ist, dass der Widerstand $R_N$ auch bei der Verstärkung $A = 1$ seinen Sollwert besitzen muss und nicht zu Null gemacht werden darf, weil die Schleifenverstärkung zu groß würde. Man kann in diesem Fall lediglich den Widerstand $R_1$ weglassen. Um dem Abfall der Verstärkung in der Nähe der Grenzfrequenz entgegenzuwirken, kann man sie mit dem zusätzlichen $R_1' C$-Glied in Abb. 5.109b anheben. In diesem Fall muss man jedoch prüfen, ob man denselben Effekt nicht auch mit einer höheren Schleifenverstärkung erzielt, die sich bei niederohmiger Dimensionierung des Gegenkopplungsspannungsteilers ergibt.

a Spannungsfolger

b Anhebung hoher Frequenzen

**Abb. 5.109.** CV-Operationsverstärker als nichtinvertierender Verstärker
<!-- page-import:0631:end -->
