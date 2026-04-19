# High-Frequency Equivalent Circuits

<!-- page-import:1320:start -->
# Kapitel 23:
Passive Komponenten

## 23.1 Hochfrequenz-Ersatzschaltbilder

Bei der Dimensionierung und Simulation von Hochfrequenz- und Zwischenfrequenz-Schaltungen muss man das Verhalten passiver Bauelemente bei hohen Frequenzen berücksichtigen; dazu werden die in Abb. 23.1 gezeigten Hochfrequenz-Ersatzschaltbilder für Widerstände, Spulen bzw. Drosseln (Spulen mit Kern) und Kondensatoren verwendet.

Es ist üblich, die reaktiven Bauelemente als Spule (inductor) und Kondensator (capacitor) und die zugehörigen idealen Werte als Induktivität (inductance) und Kapazität (capacitance) zu bezeichnen. Bei Widerständen existiert im deutschsprachigen Raum keine derartige Unterscheidung; dagegen wird im englischsprachigen Raum zwischen dem Bauteil resistor und dem Wert resistance unterschieden.

Die zusätzlichen Elemente in den Ersatzschaltbildern werden parasitäre Elemente genannt. Ihre Werte hängen vom Aufbau des jeweiligen Bauelements ab. Eine der wichtigsten Größen ist die parasitäre Induktivität des Bauteilkörpers und der Anschlussleitungen. Sie ist näherungsweise proportional zur Länge und beträgt etwa $1\,\mathrm{nH/mm}$; demnach muss man bei einem herkömmlichen Widerstand mit einer Gesamtlänge von 15 mm (je 5 mm für den Bauteilkörper und die beiden Anschlussleitungen) mit einer Induktivität von $L_R \approx 15\,\mathrm{nH}$ rechnen. Noch größere Werte erhält man bei gewickelten Folienkondensatoren, da hier die Wicklung der Folien als Induktivität wirkt. Bei Spulen kann man diesen Anteil vernachlässigen, wenn die Hauptinduktivität ausreichend groß ist. Ähnliche Zusammenhänge gelten für die parasitäre Kapazität.

Man kann die Werte der parasitären Elemente minimieren, indem man die Bauteile miniaturisiert und ohne Anschlussleitungen ausführt; das ist bei Bauteilen für Oberflächenmontage (SMD-Bauteilen, surface mounted devices) der Fall. In modernen HF- und ZF-Schaltungen werden ausschließlich SMD-Bauteile verwendet; wir beschränken uns deshalb auf diesen Typ. Der Gültigkeitsbereich der Ersatzschaltbilder hängt von der Baugröße der SMD-Bauteile ab und nimmt mit abnehmender Größe zu. Für Bauteile der Baugröße 1206 (3 mm $\times$ 1,5 mm) sind die Ersatzschaltbilder bis 1 GHz, mit Einschränkungen bis 2 GHz verwendbar. Wir geben die Impedanzen und die Reflexionsfaktoren im

a Widerstand

b Spule / Drossel

c Kondensator

**Abb. 23.1.** Hochfrequenz-Ersatzschaltbilder von SMD-Bauteilen

© Springer-Verlag GmbH Deutschland, ein Teil von Springer Nature 2019  
U. Tietze et al., *Halbleiter-Schaltungstechnik*
<!-- page-import:1320:end -->

<!-- page-import:1321:start -->
1284  23. Passive Komponenten

folgenden bis 5 GHz an, um das Verhalten der Ersatzschaltbilder in diesem Bereich zu charakterisieren. Das Verhalten realer Bauelemente hängt in diesem Bereich nicht nur von den Eigenschaften des Bauelements, sondern auch von der Montage ab; deshalb nehmen die Anforderungen an die Montage- und Lötpräzision mit zunehmender Frequenz zu.

### 23.1.1 Widerstand

Abbildung 23.1a zeigt das Ersatzschaltbild für einen SMD-Widerstand. Es entspricht dem Ersatzschaltbild eines Parallelschwingkreises mit verlustbehafteter Induktivität. Für die Impedanz gilt:

$$
Z_R(s) = (R + sL_R)\parallel \frac{1}{sC_R} = \frac{R + sL_R}{1 + sC_RR + s^2L_RC_R}
$$

(23.1)

Daraus folgt:

$$
Z_R(j\omega) = \frac{R + j\left(\omega\left(L_R - C_RR^2\right) - \omega^3L_R^2C_R\right)}{\left(1 - \omega^2L_RC_R\right)^2 + \omega^2C_R^2R^2}
$$

(23.2)

Das dominierende Verhalten des Widerstands hängt vom Vorzeichen des Terms $(L_R - C_RR^2)$ im Imaginärteil von $Z_R(j\omega)$ ab:

$R < \sqrt{L_R/C_R}$ $\Rightarrow$ induktives Verhalten

$R > \sqrt{L_R/C_R}$ $\Rightarrow$ kapazitives Verhalten

Für $R = \sqrt{L_R/C_R}$ verläuft der Imaginärteil maximal flach und die Impedanz bleibt möglichst lange reell. Für sehr hohe Frequenzen erhält man immer kapazitives Verhalten, da hier die Kapazität $C_R$ dominiert; in diesem Bereich ist das Ersatzschaltbild jedoch nicht mehr gültig.

Abbildung 23.2 zeigt den Betrag und die Phase der Impedanz von SMD-Widerständen der Baugröße 1206 mit $L_R = 3\,\mathrm{nH}$ und $C_R = 0{,}2\,\mathrm{pF}$. Einen maximal flachen Imaginärteil, bei dem die Phase möglichst lange Null bleibt, erhält man für $R = \sqrt{L_R/C_R} \approx 120\,\Omega$. Bei kleineren Werten verhalten sich die Widerstände induktiv (Phase positiv), bei größeren kapazitiv (Phase negativ). Für $R \approx 190\,\Omega$ verläuft der Betrag maximal flach.

Neben der Impedanz ist auch der Reflexionsfaktor

$$
r_R(j\omega) = \frac{Z_R(j\omega) - Z_W}{Z_R(j\omega) + Z_W}
$$

(23.3)

von Interesse; dabei ist $Z_W$ der Wellenwiderstand der verwendeten Leitungen. Abbildung 23.3 zeigt den Verlauf des Reflexionsfaktors für die Widerstände aus Abb. 23.2. Die maximal flache Phase der Impedanz des $120\,\Omega$-Widerstands hat eine ebenfalls maximal flache Phase des Reflexionsfaktors zur Folge; deshalb beginnt der Verlauf des Reflexionsfaktors in diesem Fall tangential zu Realteil-Achse. Dagegen beginnt der Verlauf für den $190\,\Omega$-Widerstand mit maximal flachem Betrag der Impedanz senkrecht zur Realteil-Achse.

Man erkennt ferner, dass mit einem $50\,\Omega$-Widerstand kein breitbandiger $50\,\Omega$-Abschluss erzielt werden kann. Dazu muss eine Kapazität $C \approx 1\,\mathrm{pF}$ parallelgeschaltet werden, damit der Imaginärteil maximal flach wird:

$$
L_R = (C_R + C)R^2 \Rightarrow C = \frac{L_R}{R^2} - C_R = \frac{3\,\mathrm{nH}}{(50\,\Omega)^2} - 0{,}2\,\mathrm{pF} \approx 1\,\mathrm{pF}
$$
<!-- page-import:1321:end -->

<!-- page-import:1322:start -->
23.1 Hochfrequenz-Ersatzschaltbilder 1285

Abb. 23.2. Impedanz von SMD-Widerständen der Baugröße 1206 mit $L_R = 3\,\mathrm{nH}$ und $C_R = 0{,}2\,\mathrm{pF}$

Auf diese Weise kann man alle Widerstände mit $R < \sqrt{L_R/C_R}$ kompensieren.

## 23.1.2 Spule

Das in Abb. 23.1b gezeigte Ersatzschaltbild einer Spule ist formal gleich dem Ersatzschaltbild eines Widerstands; nur die Größenverhältnisse der Werte unterscheiden sich. Der parasitäre Widerstand $R_L$ wird durch den Hautwiderstand (skin-Effekt) der Wicklung verursacht und ist proportional zu Wurzel aus der Frequenz [23.1]:

$$
R_L(f) = k_{RL}\sqrt{f}
$$

(23.4)

Der Verlustwiderstandskoeffizient $k_{RL}$ mit der Einheit $\Omega/\sqrt{\mathrm{Hz}}$ ist bei SMD-Spulen mit einer Induktivität bis $10\,\mu\mathrm{H}$ etwa proportional zur Induktivität:

$$
k_{RL} \approx k_L L
$$

(23.5)

Typische Werte sind $k_L \approx 1200\,\Omega/(\sqrt{\mathrm{Hz}}\cdot \mathrm{H})$ für die Baugröße 1206 und $k_L \approx 600\,\Omega/(\sqrt{\mathrm{Hz}}\cdot \mathrm{H})$ für die Baugröße 1812 [23.2]. Bei SMD-Spulen der Baugröße 1812 mit einer Induktivität größer $10\,\mu\mathrm{H}$ gilt näherungsweise [23.2]:

$$
k_{RL} \approx 20\,\Omega/\sqrt{\mathrm{Hz}}\cdot \left(\frac{L}{\mathrm{H}}\right)^{0{,}7}
$$
<!-- page-import:1322:end -->

<!-- page-import:1324:start -->
23.1 Hochfrequenz-Ersatzschaltbilder 1287

**Abb. 23.4.** Betrag der Impedanz und Spulengüte von SMD-Spulen der Baugröße 1206 mit $k_L$ = $1200\,\Omega/(\sqrt{\mathrm{Hz}}\cdot \mathrm{H})$ und $C_L = 0{,}2\,\mathrm{pF}$

an. Aufgrund der hohen Güte $Q_r$ unterscheiden sich die Frequenzen $f_r$, $f_{r,ph}$ und $f_{r,max}$ nur minimal; deshalb wird in der Praxis meist die Frequenz $f_r$ als Resonanzfrequenz (self resonating frequency, SRF) bezeichnet.

Wichtiger als die Güte $Q_r$ ist die Spulengüte (quality factor, QF)

$$
Q_L(f) = \frac{\operatorname{Im}\{Z_L(j\,2\pi f)\}}{\operatorname{Re}\{Z_L(j\,2\pi f)\}} \;\;\;\; {}^{f<f_r/4}_{\approx} \;\;\; \frac{2\pi f\,L}{R_L(f)} = \frac{2\pi L}{k_{RL}}\,\sqrt{f}
\eqno{(23.8)}
$$

Sie ist ein Maß für die Verluste ($Q_L$ hoch $\to$ Verluste gering) und nur für den Frequenzbereich mit induktivem Verhalten ($f < f_{r,ph}$) definiert. Sie ist im Frequenzbereich bis $f_r/4$ näherungsweise proportional zur Wurzel aus der Frequenz und wird etwa bei $f_r/2$ maximal; oberhalb des Maximums nimmt sie schnell ab und wird bei der Phasenresonanzfrequenz zu Null. In Abb. 23.4 sind die Verläufe im unteren Teil dargestellt. Für SMD-Spulen mit einer Induktivität kleiner als $10\,\mu\mathrm{H}$ gilt $k_{RL} \approx k_L L$; damit folgt aus (23.8):
<!-- page-import:1324:end -->

<!-- page-import:1325:start -->
1288  23. Passive Komponenten

$$
Q_L(f)\approx \frac{2\pi}{k_L}\sqrt{f}\approx \frac{\sqrt{f/\mathrm{Hz}}}{100\ldots 200}
$$

Der Faktor 100 gilt für die Baugröße 1812 und der Faktor 200 für die Baugröße 1206.

Aufgrund der hohen Spulengüte $Q_L$ und der hohen Güte $Q_r$ ist die Impedanz mit Ausnahme eines kleinen Bereichs um die Resonanzfrequenz nahezu rein imaginär; daraus folgt, dass der Reflexionsfaktor etwa den Betrag Eins hat:

$$
r_L(j\omega)=\frac{Z_L(j\omega)-Z_W}{Z_L(j\omega)+Z_W}\approx e^{j\left(\pi-2\arctan\frac{\operatorname{Im}\{Z_L(j\omega)\}}{Z_W}\right)}
$$

Für $\omega=0$ gilt $\operatorname{Im}\{Z_L(j0)\}=0$ und $r_L(j0)\approx -1$, d.h. die Ortskurve des Reflexionsfaktors beginnt für $f=0$ im Kurzschlusspunkt der $r$-Ebene. Abbildung 23.6a zeigt den typischen Verlauf des Reflexionsfaktors am Beispiel einer SMD-Spule mit $L=100\,\mathrm{nH}$.

### 23.1.3 Kondensator

Das Ersatzschaltbild eines Kondensators ist in Abb. 23.1c dargestellt; man erhält einen verlustbehafteten Serienresonanzkreis mit der Impedanz:

$$
Z_C(s)=R_C+sL_C+\frac{1}{sC}=\frac{1+sCR_C+s^2L_CC}{sC}
$$

(23.9)

Die Resonanzfrequenz (self resonating frequency, SRF) beträgt

$$
\omega_r=\frac{1}{\sqrt{L_CC}}\Rightarrow f_r=\frac{1}{2\pi\sqrt{L_CC}}
$$

(23.10)

mit der Güte:

$$
Q_r=\frac{1}{R_C}\sqrt{\frac{L_C}{C}}
$$

(23.11)

Die Phasen- und die Betragsresonanzfrequenz sind gleich der Resonanzfrequenz $f_r$; eine Unterscheidung wie bei einer Spule ist hier nicht erforderlich. Abbildung 23.5 zeigt die Betragsverläufe der Impedanz von SMD-Kondensatoren der Baugröße 1206 mit $R_C=0{,}2\,\Omega$ und $L_C=3\,\mathrm{nH}$.

Wichtiger als die Güte $Q_r$ ist die Kondensatorgüte (quality factor, QF)

$$
Q_C(f)=-\frac{\operatorname{Im}\{Z_C(j2\pi f)\}}{\operatorname{Re}\{Z_C(j2\pi f)\}}\;\;\overset{f<f_r/4}{\approx}\;\;\frac{1}{2\pi f C R_C}
$$

(23.12)

Sie ist ein Maß für die Verluste ($Q_C$ hoch $\to$ Verluste gering) und nur für den Frequenzbereich mit kapazitivem Verhalten ($f<f_r$) definiert. Sie ist im Frequenzbereich bis $f_r/4$ näherungsweise umgekehrt proportional zur Frequenz und geht demnach für $f\to 0$ gegen Unendlich.

Da die Impedanz mit Ausnahme eines kleinen Bereichs um die Resonanzfrequenz nahezu rein imaginär ist, hat der Reflexionsfaktor etwa den Betrag Eins:

$$
r_C(j\omega)=\frac{Z_C(j\omega)-Z_W}{Z_C(j\omega)+Z_W}\approx e^{j\left(\pi-2\arctan\frac{\operatorname{Im}\{Z_C(j\omega)\}}{Z_W}\right)}
$$

Für $\omega=0$ gilt $\operatorname{Im}\{Z_C(j0)\}=\infty$ und $r_C(j0)\approx 1$, d.h. die Ortskurve des Reflexionsfaktors beginnt für $f=0$ im Leerlaufpunkt der $r$-Ebene. Abbildung 23.6b zeigt den typischen Verlauf des Reflexionsfaktors am Beispiel eines SMD-Kondensators mit $C=10\,\mathrm{pF}$.
<!-- page-import:1325:end -->

<!-- page-import:1543:start -->
1506  26. Oszillatoren

**Abb. 26.3.**  
Betrag der Impedanz $Z$ für Parallel- und Serienschwingkreise mit einem Kennwiderstand $R_k = 100\,\Omega$.

$L$, $R$ und $C$, für die man denselben Verlauf erhält. Bei Resonanzkreisen mit Spulen und Kondensatoren kann man die Elemente auch aus den in Abb. 23.1 auf Seite 1283 gezeigten Hochfrequenzen-Ersatzschaltbildern berechnen, sofern deren Werte bekannt sind. Man nutzt dabei die Eigenschaft, dass die Güte bei Parallelschaltung und Serienschaltung praktisch gleich ist; deshalb kann man den Widerstand $R_S$ und die Güte bei Serienresonanz bestimmen und daraus mit

$$
R_P \approx Q^2 R_S
$$

den Widerstand $R_P$ bei Parallelresonanz berechnen. Bei Resonanzkreisen mit Streifenleitungen kann man die Elemente des Ersatzschaltbilds mit einem elektro-magnetischen Feldsimulator bestimmen. (26.4)

*Beispiel:* Gesucht wird ein LC-Resonanzkreis mit SMD-Bauteilen für $f_R = 100\,\text{MHz}$. Aus den Angaben aus Abschnitt 23.1 erhalten wir das Ersatzschaltbild in Abb. 26.4. Die parasitäre Kapazität $C_L$ der Spule können wir aufgrund ihrer Impedanz $Z_{CL} \approx -j\,8\,\text{k}\Omega$ bei $100\,\text{MHz}$ vernachlässigen. Wir müssen nun die Werte $L_L$ und $C$ so wählen, dass die Güte maximal wird; dazu drücken wir zunächst alle Elemente als Funktion von $L_L$ aus:

**Abb. 26.4.**  
Beispiel: Ersatzschaltbild für einen LC-Resonanzkreis mit SMD-Bauteilen

SMD 1812

SMD 1206

$R_L(f)$  
$L_L$  
$C_L$  
0,2 pF  
$R_C$  
0,2 $\Omega$  
$L_C$  
3 nH  
$C$

$L = L_L + L_C$  
$R_S = R_L(f) + R_C$  
$C$
<!-- page-import:1543:end -->
