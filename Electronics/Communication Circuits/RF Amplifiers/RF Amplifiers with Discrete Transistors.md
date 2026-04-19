# RF Amplifiers with Discrete Transistors

<!-- page-import:1381:start -->
1344  24. Hochfrequenz-Verstärker

**Abb. 24.25.**  
Beispiel: Dimensionierte Sourceschaltung mit Kaskode und induktiver Stromgegenkopplung für $f = 900\,\mathrm{MHz}$

Linearität. Bei typischen Emitterschaltungen führt die induktive Stromgegenkopplung in der Regel zu einer deutlichen Verbesserung der Linearität, ausgedrückt durch einen entsprechend hohen Eingangs-Intercept-Punkt $IIP3$; bei typischen Sourceschaltungen ist das nicht der Fall. Deshalb sind sowohl der Eingangs-Intercept-Punkt $IIP3$ als auch der Inband-Dynamikbereich $IDR$ bei einer Emitterschaltung üblicherweise größer als bei einer Sourceschaltung. Auch bei unseren Beispielen ist dies der Fall: $IIP3 = -1\,\mathrm{dBm}$ für die Emitterschaltung in Abb. 24.17b im Vergleich zu $IIP3 = -8\,\mathrm{dBm}$ für die Sourceschaltung in Abb. 24.25. Den höchsten $IIP3$ und den größten Inband-Dynamikbereich erzielt jedoch die Basisschaltung aus Abb. 24.18.

Wir können also festhalten:

- Die geringste Rauschzahl erzielt man mit der Sourceschaltung, gefolgt von der Emitterschaltung und der Basisschaltung.
- Beim Eingangs-Intercept-Punkt und beim Inband-Dynamikbereich ist die Reihenfolge genau umgekehrt; hier erzielt man mit der Basisschaltung die höchsten Werte, gefolgt von der Emitterschaltung und der Sourceschaltung.

Daraus folgt mit Hinblick auf die Mobilkommunikation:

- In den Mobilgeräten ist aufgrund der schlechten Antennen die Empfindlichkeit und damit eine niedrige Rauschzahl besonders wichtig; hier ist die Sourceschaltung vorteilhaft.
- In den Basisstationen ist der Dynamikbereich besonders wichtig; hier wird man die Emitterschaltung oder die Basisschaltung verwenden.

## 24.2 Hochfrequenz-Verstärker mit Einzeltransistoren

Abbildung 24.1b auf Seite 1322 zeigt den prinzipiellen Aufbau eines Hochfrequenz-Verstärkers mit einem Einzeltransistor. Man erkennt, dass sich die Schaltungstechnik grundlegend von der des in Abb. 24.1a gezeigten integrierten Verstärkers unterscheidet. Der eigentliche Verstärker besteht aus einem Bipolartransistor in Emitterschaltung und einer Beschaltung zur Arbeitspunkteinstellung, die in Abb. 24.1b symbolisch durch die beiden Stromquellen $I_{B,A}$ und $I_{C,A}$ dargestellt ist; auf deren praktische Realisierung gehen wir später noch näher ein. Anstelle eines Bipolartransistors kann auch ein Feldeffekttransistor eingesetzt werden. Vor und nach dem Transistor werden Koppelkondensatoren eingesetzt, damit der Arbeitspunkt nicht durch die weitere Beschaltung beeinflusst wird; daran schließen sich die Netzwerke zur Anpassung an den Wellenwiderstand der Signalleitungen an.
<!-- page-import:1381:end -->

<!-- page-import:1382:start -->
24.2 HF-Verstärker mit Einzeltransistoren 1345

a Symbol und Ausführungen

z.B. BGA318

z.B. BGA427

b Ausführungen mit zusätzlichen Elementen zur Arbeitspunkteinstellung

**Abb. 24.26.** Verallgemeinerter Einzeltransistor

In Abb. 24.1b werden $\pi$-Glieder (Collins-Filter) mit einer Längsinduktivität und zwei Querkapazitäten zur Anpassung verwendet.

## 24.2.1 Verallgemeinerter Einzeltransistor

Die Bezeichnung *Einzeltransistor* ist nicht im strengen Sinne zu verstehen, da die in der Praxis verwendeten Bauteile häufig mehrere Transistoren sowie zusätzliche Widerstände und Kapazitäten zur Vereinfachung der Arbeitspunkteinstellung enthalten. Wir nennen diese Bauteile *verallgemeinerte Einzeltransistoren* $^9$.

Abbildung 24.26a zeigt das Symbol und die wichtigsten Ausführungen eines verallgemeinerten Einzeltransistors ohne Zusätze zur Arbeitspunkteinstellung; dabei wird häufig die Darlington-Schaltung verwendet, um eine höhere Stromverstärkung bei hohen Frequenzen zu erzielen. In Abb. 24.26b sind einige typische Ausführungen mit Zusätzen zur Arbeitspunkteinstellung gezeigt; dabei kann die links dargestellte Variante in glei-

$^9$ In diesem Zusammenhang ergibt sich eine Verbindung zum CC-Operationsverstärker, der ebenfalls als verallgemeinerter Einzeltransistor aufgefasst werden kann, siehe Abschnitt 5.8 sowie die Abbildungen 5.124 bis 5.130.
<!-- page-import:1382:end -->

<!-- page-import:1383:start -->
1346  24. Hochfrequenz-Verstärker

cher Weise für die Darlington-Schaltungen aus Abb. 24.26a verwendet werden. Durch die Widerstände erhält man eine Spannungsgegenkopplung, die jedoch bei ausreichend hochohmiger Dimensionierung bei hohen Frequenzen praktisch unwirksam wird, wenn die Impedanz der Kollektor-Basis-Kapazität auf vergleichbare Werte abgenommen hat. Als äußeres Arbeitselement wird eine Spule verwendet, deren Induktivität so gewählt wird, dass sie bei der Arbeitsfrequenz als Leerlauf aufgefasst werden kann; dadurch erfolgt eine Trennung zwischen dem signalführenden und dem Gleichstrompfad. Bei der in Abb. 24.26b in der Mitte dargestellten Ausführung ist zusätzlich ein Emitterwiderstand zur Stromgegenkopplung enthalten; sie eignet sich deshalb besonders gut für breitbandige Verstärker oder Verstärker mit besonderen Anforderungen an die Linearität.

Die in Abb. 24.26b rechts dargestellte Variante besteht aus einer Emitterschaltung mit Spannungsgegenkopplung, auf die eine Kollektorschaltung folgt. Sie gehört streng genommen nicht mehr zu den verallgemeinerten Einzeltransistoren, da sie, wie der integrierte Verstärker in Abb. 24.1b, aus einem Spannungsverstärker (Emitterschaltung) und einem Stromverstärker (Kollektorschaltung) besteht. Wir haben sie hier dennoch aufgenommen, da sie üblicherweise in einem für Einzeltransistoren typischen Gehäuse angeboten wird. Die Spannungsgegenkopplung besteht häufig aus zwei Widerständen und einer Kapazität. Bezüglich der Arbeitspunkteinstellung wirkt nur der direkt zwischen Basis und Kollektor angeschlossene Widerstand; mit ihm wird die Kollektorspannung im Arbeitspunkt eingestellt. Die Kapazität ist so dimensioniert, dass sie bei der Betriebsfrequenz als Kurzschluss betrachtet werden kann; dann wird die Parallelschaltung der beiden Widerstände wirksam.

Die Ausführungen in Abb. 24.26 werden zu den niedrig integrierten Schaltungen gezählt und als integrierte Mikrowellenschaltungen (*monolithic microwave integrated circuits*, MMIC) bezeichnet. Sie werden in Silizium- (Si-MMIC), Silizium-Germanium- (SiGe-MMIC) oder Gallium-Arsenid-Technologie (GaAs-MMIC) hergestellt und sind für Frequenzen bis 20 GHz geeignet.

## 24.2.2 Arbeitspunkteinstellung

Die Arbeitspunkteinstellung erfolgt prinzipiell genauso wie bei Niederfrequenz-Transistoren. Allerdings versucht man bei Hochfrequenz-Transistoren, die zur Arbeitspunkteinstellung benötigten Widerstände bei der Betriebsfrequenz unwirksam zu machen, da sie sich ungünstig auf die Verstärkung und die Rauschzahl auswirken. Dazu werden zusätzlich zu den Widerständen eine oder mehrere Induktivitäten eingesetzt, die bezüglich der Arbeitspunkteinstellung als Kurzschluss, bei der Betriebsfrequenz dagegen näherungsweise als Leerlauf angesehen werden können.

Wir beschreiben die Arbeitspunkteinstellung im folgenden am Beispiel eines Bipolartransistors. Die beschriebenen Schaltungen können in gleicher Weise auch für Feldeffekttransistoren verwendet werden.

### 24.2.2.1 Gleichstromgegenkopplung

Wendet man das oben genannte Prinzip auf die in Abb. 2.77a auf Seite 124 gezeigte Arbeitspunkteinstellung mit Gleichstromgegenkopplung an, erhält man die in Abb. 24.27a gezeigte Schaltung, bei der die Basis des Transistors über die Induktivität $L_B$ und der Kollektor über die Induktivität $L_C$ hochfrequenzmäßig entkoppelt ist. Auf einen Kollektorwiderstand kann man in diesem Fall verzichten; dann fällt im Kollektorkreis keine Gleichspannung ab, so dass die Schaltung besonders gut für geringe Versorgungsspannungen geeignet ist. Im Extremfall kann man $R_1$ und $R_2$ entfernen und den freiwerdenden
<!-- page-import:1383:end -->

<!-- page-import:1384:start -->
## 24.2 HF-Verstärker mit Einzeltransistoren

1347

a mit Stromgegenkopplung und Entkopplung der Basis (rauscharm)

b mit Stromgegenkopplung und ohne Entkopplung der Basis

c mit Spannungsgegenkopplung

**Abb. 24.27.** Arbeitspunkteinstellung bei Hochfrequenz-Transistoren

Anschluss von $L_B$ direkt mit der Versorgungsspannung verbinden; der Transistor arbeitet dann mit $U_{BE,A} = U_{CE,A}$. Aufgrund der Entkopplung der Basis wirkt sich das Rauschen der Widerstände $R_1$ und $R_2$ bei der Betriebsfrequenz nur sehr gering auf die Rauschzahl des Verstärkers aus; diese Art der Arbeitspunkteinstellung ist demnach besonders rauscharm. Dies gilt vor allem dann, wenn man zusätzlich eine Kapazität $C_B$ einfügt, die bei der Betriebsfrequenz näherungsweise als Kurzschluss wirkt. Wenn eine geringfügige Zunahme der Rauschzahl unkritisch ist, kann man auf die Entkopplung der Basis verzichten und die Schaltung in Abb. 24.27b verwenden.

Mit zunehmender Frequenz wird die Entkopplung immer schwieriger, da die Eigenschaften der zur Realisierung der Induktivitäten eingesetzten Spulen immer schlechter werden. Damit der Betrag der Impedanz möglichst hoch wird, wählt man eine Spule, deren Resonanzfrequenz möglichst gut mit der Betriebsfrequenz übereinstimmt; damit erzielt man näherungsweise die Resonanzimpedanz, die allerdings mit zunehmender Resonanzfrequenz abnimmt, wie Abb. 23.4 auf Seite 1287 zeigt. Deshalb werden die Induktivitäten im GHz-Bereich durch Streifenleitungen der Länge $\lambda/4$ ersetzt. Diese Leitungen sind an ihrem Transistor-fernen Ende durch die Kapazität $C_B$ bzw. durch die Verbindung mit der Versorgungsspannung kleinsignalmäßig kurzgeschlossen und wirken deshalb an ihrem Transistor-nahen Ende als Leerlauf.

Besonders problematisch ist die Kapazität $C_E$, die bei der Betriebsfrequenz möglichst gut als Kurzschluss wirken muss. Auch hier versucht man, zur Realisierung einen Kondensator zu verwenden, dessen Resonanzfrequenz möglichst gut mit der Betriebsfrequenz übereinstimmt; dadurch erreicht man Impedanzen, deren Betrag in der Größenordnung des Serienwiderstands des Kondensators liegen (typ. $0{,}2\,\Omega$). Mit zunehmender Resonanzfrequenz nimmt jedoch die Resonanzgüte der Kondensatoren zu, siehe Abb. 23.5 auf Seite 1289; dadurch wird diese Abstimmung immer schwieriger. Alternativ könnte man eine leerlaufende Streifenleitung der Länge $\lambda/4$ einsetzen, die Transistor-seitig als Kurzschluss wirkt; aufgrund der unvermeidlichen Abstrahlung am leerlaufenden Ende (Antennen-Effekt) ist diese Lösung allerdings nicht praktikabel. Eine kurzgeschlossene Streifenleitung scheidet ebenfalls aus, da sie gleichstrommäßig als Kurzschluss wirkt und dadurch den Widerstand $R_E$ kurzschließt. Aufgrund dieser Problematik wird die Gleich-
<!-- page-import:1384:end -->

<!-- page-import:1385:start -->
1348  24. Hochfrequenz-Verstärker

a diskreter Aufbau  
b integrierte Schaltung (z.B. BGC405)

**Abb. 24.28.** Arbeitspunktregelung

stromgegenkopplung nur im MHz-Bereich verwendet; im GHz-Bereich muss man den Emitter-Anschluss des Transistors direkt mit Masse verbinden.

### 24.2.2.2 Gleichspannungsgegenkopplung

Abbildung 24.27c zeigt die Arbeitspunkteinstellung mit Gleichspannungsgegenkopplung. Sie wird in dieser Form in vielen integrierten Mikrowellenschaltungen eingesetzt, siehe Abb. 24.26b. Ein Kollektorwiderstand $R_C$ ist hier unbedingt erforderlich, damit die Gegenkopplung wirksam werden kann und ein stabiler Arbeitspunkt erzielt wird. Der Kollektor wird durch die Induktivität $L_C$ entkoppelt, damit der Ausgang bei der Betriebsfrequenz nicht durch den Kollektorwiderstand belastet wird. Eine Entkopplung der Basis kann dadurch erfolgen, dass man die Widerstände $R_1$ und $R_2$ mit Serien-Induktivitäten versieht; davon wird jedoch in der Praxis kein Gebrauch gemacht. Nachteilig ist die Zunahme der Rauschzahl aufgrund der Rauschbeiträge von $R_1$ und $R_2$; man kann sie durch eine hochohmige Dimensionierung klein halten.

### 24.2.2.3 Arbeitspunktregelung

In diskret aufgebauten und integrierten Verstärkern wird häufig die in Abb. 24.28 gezeigte Arbeitspunktregelung eingesetzt; dabei wird der Kollektorstrom des Hochfrequenz-Transistors $T_1$ über den Spannungsabfall $U_{RC}$ am Kollektorwiderstand $R_C$ gemessen und mit einem Sollwert $U_{D1}$ verglichen. Der Transistor $T_2$ regelt die Basisspannung des Transistors $T_1$ so, dass $U_{RC} \approx U_{D1} \approx 0{,}7\,\mathrm{V}$ gilt.

Wir betrachten zunächst die Schaltung in Abb. 24.28a. Es gilt:

$$
U_{RC} = (I_{C1,A} + I_{E2,A})\,R_C,\quad U_{BE1,A} = I_{R2}R_2,\quad I_{E2,A} \overset{I_{B2,A}\approx 0}{\approx} I_{B1,A} + I_{R2}
$$

Daraus folgt:

$$
U_{RC} = \left(I_{C1,A} + I_{B1,A} + \frac{U_{BE1,A}}{R_2}\right) R_C \overset{I_{C1,A}\gg I_{B1,A}}{\approx} \left(I_{C1,A} + \frac{U_{BE1,A}}{R_2}\right) R_C
$$
<!-- page-import:1385:end -->

<!-- page-import:1386:start -->
24.2 HF-Verstärker mit Einzeltransistoren 1349

Abb. 24.29. Bedingungen für eine beidseitige Anpassung

Wenn die Emitter-Basis-Spannung des Transistors $T_2$ etwa der Spannung an der Diode $D_2$ entspricht, erhält man:

$$
U_{RC} \approx U_{D1}
\Rightarrow
I_{C1,A} \approx \frac{U_{D1}}{R_C} - \frac{U_{BE1,A}}{R_2}
\approx 0{,}7\,\mathrm{V}\left(\frac{1}{R_C} - \frac{1}{R_2}\right)
$$

In der Praxis gilt meist $R_2 \gg R_C$; dann gilt $I_{C1,A} \approx 0{,}7\,\mathrm{V}/R_C$.

Der Regelkreis muss eine ausgeprägte Tiefpass-Charakteristik 1. Grades erhalten, damit die Stabilität gewährleistet ist; dazu dient die Kapazität $C_B$. Sie wird so gewählt, dass die Grenzfrequenz

$$
f_g = \frac{1}{2\pi\,C_B\,(R_2 \parallel r_{BE1})}
$$

mindestens um den Faktor $10^4$ unter der Betriebsfrequenz liegt.

Abbildung 24.28b zeigt die Arbeitspunktregelung am Beispiel einer integrierten Schaltung; dabei müssen die Elemente $L_C$ und $C_B$ extern realisiert werden. Die Induktivität $L_B$ wird üblicherweise durch einen Widerstand ersetzt; dadurch ändert sich der Arbeitspunkt geringfügig. Der Widerstand $R_C$ wird häufig extern realisiert, damit man den Ruhestrom einstellen kann. Diese Einstellung ist notwendig, da der bezüglich Verstärkung oder Rauschzahl optimale Ruhestrom von der Betriebsfrequenz abhängt. Darüber hinaus wird der Masse-seitige Anschluss des Widerstands $R_1$ nach außen geführt; dadurch kann man den Verstärker mit einem Schalter ein- und ausschalten.

## 24.2.3 Anpassung einstufiger Verstärker

Die Berechnung der Anpassnetzwerke für einen Verstärker mit einem verallgemeinerten Einzeltransistor ist aufwendig, da die Ein- und Ausgangsimpedanzen aufgrund der relativ starken Rückwirkung von der Beschaltung am jeweils anderen Anschluss abhängen. Die Berechnung erfolgt gewöhnlich auf der Basis der $S$-Parameter des Transistors einschließlich der Arbeitspunkteinstellung.

### 24.2.3.1 Bedingungen für die Anpassung

Abbildung 24.29 zeigt den Transistor mit den Anpassnetzwerken und den Reflexionsfaktoren an den verschiedenen Stellen. Die Reflexionsfaktoren an der Signalquelle und der Last sind jeweils Null, da an diesen Stellen Anpassung vorliegt. Am Eingang des Transistors erhält man den durch das eingangsseitige Anpassnetzwerk von Null auf $r_g$ transformierten Reflexionsfaktor der Signalquelle, dem der Eingangsreflexionsfaktor $r_1$ des Transistors gegenübersteht. Entsprechend erhält man am Ausgang des Transistors den
<!-- page-import:1386:end -->

<!-- page-import:1387:start -->
1350  24. Hochfrequenz-Verstärker

a  Eingangsreflexionsfaktor $r_1$

b  Ausgangsreflexionsfaktor $r_2$

**Abb. 24.30.** Berechnung der Reflexionsfaktoren des beschalteten Transistors

durch das ausgangsseitige Anpassnetzwerk von Null auf $r_L$ transformierten Reflexionsfaktor der Last, dem der Ausgangsreflexionsfaktor $r_2$ des Transistors gegenübersteht. Im Falle der beidseitigen Anpassung müssen die jeweiligen Reflexionsfaktoren konjugiert komplex zueinander sein:

$$
r_g = r_1^*, \quad r_L = r_2^*
$$

(24.7)

In diesem Fall sind die zugehörigen Impedanzen ebenfalls konjugiert komplex zueinander:

$$
Z_g = Z_W \frac{1+r_g}{1-r_g}\ \ \overset{r_g=r_1^*}{=}\ \ Z_W \frac{1+r_1^*}{1-r_1^*} = Z_1^*
$$

$$
Z_L = Z_W \frac{1+r_L}{1-r_L}\ \ \overset{r_L=r_2^*}{=}\ \ Z_W \frac{1+r_2^*}{1-r_2^*} = Z_2^*
$$

Dadurch sind die Bedingungen für eine Leistungsanpassung erfüllt.

#### 24.2.3.2 Reflexionsfaktoren des Transistors

Die Reflexionsfaktoren $r_1$ und $r_2$ des Transistors hängen aufgrund der Rückwirkung ihrerseits von $r_L$ und $r_g$ ab, siehe Abb. 24.30. Für den Transistor einschließlich der Arbeitspunkteinstellung gilt:

$$
\begin{bmatrix}
b_1 \\
b_2
\end{bmatrix}
=
\begin{bmatrix}
S_{11} & S_{12} \\
S_{21} & S_{22}
\end{bmatrix}
\begin{bmatrix}
a_1 \\
a_2
\end{bmatrix}
$$

Daraus erhält man den Eingangsreflexionsfaktor $r_1$ bei ausgangsseitiger Beschaltung mit einer Last mit dem Reflexionsfaktor $r_L$, indem man die Bedingung $a_2=b_2r_L$ aus Abb. 24.30a einsetzt und nach $r_1=b_1/a_1$ auflöst. Entsprechend setzt man zur Berechnung des Ausgangsreflexionsfaktors $r_2$ bei eingangsseitiger Beschaltung mit einer Quelle mit dem Reflexionsfaktor $r_g$ die Bedingung $a_1=b_1r_g$ aus Abb. 24.30b ein und löst nach $r_2=b_2/a_2$ auf. Man erhält:

$$
r_1 = S_{11} + \frac{S_{12}S_{21}r_L}{1-S_{22}r_L}
$$

(24.8)

$$
r_2 = S_{22} + \frac{S_{12}S_{21}r_g}{1-S_{11}r_g}
$$

(24.9)

Ohne Rückwirkung ($S_{12}=0$) besteht keine gegenseitige Abhängigkeit; dann gilt $r_1=S_{11}$ und $r_2=S_{22}$.
<!-- page-import:1387:end -->

<!-- page-import:1388:start -->
24.2 HF-Verstärker mit Einzeltransistoren 1351

#### 24.2.3.3 Berechnung der Anpassung

Setzt man die Bedingungen (24.7) in (24.8) und (24.9) ein, erhält man nach aufwendiger Rechnung die Reflexionsfaktoren $r_g$ und $r_L$ bei Anpassung [24.1]:

$$
r_{g,a} = \frac{B_1 \pm \sqrt{B_1^2 - 4|C_1|^2}}{2C_1}
$$

(24.10)

$$
r_{L,a} = \frac{B_2 \pm \sqrt{B_2^2 - 4|C_2|^2}}{2C_2}
$$

(24.11)

Dabei gilt:

$$
B_1 = 1 + |S_{11}|^2 - |S_{22}|^2 - |\Delta_S|^2
$$

$$
B_2 = 1 - |S_{11}|^2 + |S_{22}|^2 - |\Delta_S|^2
$$

$$
C_1 = S_{11} - \Delta_S S_{22}^{*}
$$

$$
C_2 = S_{22} - \Delta_S S_{11}^{*}
$$

$$
\Delta_S = S_{11}S_{22} - S_{12}S_{21}
$$

In (24.10) und (24.11) gilt für $B_1 > 0$ bzw. $B_2 > 0$ das Minus-Zeichen, für $B_1 < 0$ bzw. $B_2 < 0$ das Plus-Zeichen.

#### 24.2.3.4 Stabilität bei der Betriebsfrequenz

Damit der Verstärker stabil ist, muss

$$
|r_{g,a}| < 1 \quad,\quad |r_{L,a}| < 1
$$

gelten; dann sind die Realteile der Impedanzen positiv:

$$
\mathrm{Re}\{Z_g\} = \mathrm{Re}\{Z_1\} > 0 \quad,\quad \mathrm{Re}\{Z_L\} = \mathrm{Re}\{Z_2\} > 0
$$

Man kann zeigen, dass dies genau dann der Fall ist, wenn für den Stabilitätsfaktor ($k$-Faktor)

$$
k = \frac{1 + |S_{11}S_{22} - S_{12}S_{21}|^2 - |S_{11}|^2 - |S_{22}|^2}{2\,|S_{12}S_{21}|} > 1
$$

(24.12)

gilt und die Nebenbedingungen

$$
|S_{12}S_{21}| < 1 - |S_{11}|^2 \quad,\quad |S_{12}S_{21}| < 1 - |S_{22}|^2
$$

(24.13)

erfüllt sind [24.1].

Ohne Rückwirkung ($S_{12} = 0$) gilt $k \to \infty$. Die Nebenbedingungen fordern in diesem Fall $|S_{11}| < 1$ und $|S_{22}| < 1$, d.h. die Realteile der Ein- und der Ausgangsimpedanz des Transistors einschließlich der Arbeitspunkteinstellung müssen größer Null sein. Demnach kann man einen rückwirkungsfreien Transistor genau dann beidseitig anpassen, wenn die Realteile der Impedanzen größer Null sind. Mit Rückwirkung ($S_{12} \neq 0$) werden die Nebenbedingungen schärfer; positive Realteile der Ein- und Ausgangsimpedanz reichen dann nicht mehr aus. In diesem Fall ist jedoch die Bedingung $k > 1$ meist schärfer als die Nebenbedingungen, d.h. die Nebenbedingungen sind erfüllt, $k > 1$ dagegen nicht.
<!-- page-import:1388:end -->

<!-- page-import:1389:start -->
1352  24. Hochfrequenz-Verstärker

### 24.2.3.5 Berechnung der Anpassnetzwerke

Wenn die Bedingungen (24.12) und (24.13) erfüllt sind, kann man mit Hilfe der Reflexionsfaktoren $r_{g,a}$ und $r_{L,a}$ aus (24.10) und (24.11) die Anpassnetzwerke ermitteln. Dazu berechnet man zunächst die Ein- und die Ausgangsimpedanz des Transistors mit Arbeitspunkteinstellung bei Anpassung:

$$
Z_{1,a} = Z_W \frac{1+r_{1,a}}{1-r_{1,a}} \qquad r_{1,a}=r_{g,a}^* \qquad = Z_W \frac{1+r_{g,a}^*}{1-r_{g,a}^*}
$$

(24.14)

$$
Z_{2,a} = Z_W \frac{1+r_{2,a}}{1-r_{2,a}} \qquad r_{2,a}=r_{L,a}^* \qquad = Z_W \frac{1+r_{L,a}^*}{1-r_{L,a}^*}
$$

(24.15)

Für diese Impedanzen kann man nun mit den im Abschnitt 23.3 beschriebenen Verfahren die Anpassnetzwerke berechnen.

Wenn die Bedingungen (24.12) und (24.13) nicht erfüllt sind, ist keine eindeutige Vorgehensweise möglich. Man muss in diesem Fall ein- oder ausgangsseitig eine Fehlanpassung in Kauf nehmen; dabei stellt sich das Problem, geeignete Reflexionsfaktoren $r_g$ und $r_L$ zu finden, für die die Fehlanpassung möglichst klein ist und die gleichzeitig einen ausreichend stabilen Betrieb ermöglichen. In [24.1] wird ein Verfahren auf der Basis von Stabilitätskreisen beschrieben, auf das wir hier nicht näher eingehen. Ein vergleichsweise einfaches Verfahren besteht darin, den Transistor ein- oder ausgangsseitig mit zusätzlichen Lastwiderständen zu beschalten, so dass die S-Parameter des derart beschalteten Transistors die Bedingungen (24.12) und (24.13) erfüllen. Es hängt jedoch vom Anwendungsfall ab, ob man damit insgesamt ein besseres Ergebnis erzielt als mit einer unter Umständen geringen Fehlanpassung.

### 24.2.3.6 Stabilität im ganzen Frequenzbereich

Die Stabilitätsbedingungen (24.12) und (24.13) garantieren nur die Stabilität bei der Betriebsfrequenz, für die die Anpassnetzwerke ermittelt werden. Damit ist jedoch noch keineswegs sichergestellt, dass der Verstärker bei allen Frequenzen stabil ist. Letzteres kann man mit einem Testaufbau oder durch eine Simulation des Kleinsignalfrequenzgangs über den ganzen Frequenzbereich von Null bis über die Transitfrequenz des Transistors hinaus überprüfen. Bei der Messung des Kleinsignalfrequenzgangs mit einem Netzwerkanalysator ist zu beachten, dass der Verstärker in diesem Fall breitbandig mit $R_g = Z_W$ und $R_L = Z_W$ beschaltet ist; dagegen kann am Einsatzort des Verstärkers ebenfalls nur eine schmalbandige Anpassung vorliegen, die abseits der Betriebsfrequenz ein instabiles Verhalten verursachen kann, d.h. Stabilität am Netzwerkanalysator bedeutet nicht immer Stabilität am Einsatzort.

### 24.2.3.7 Leistungsverstärkung

Bei beidseitiger Anpassung mit reaktiven, d.h. verlustlosen, Anpassnetzwerken erhält man die maximal verfügbare Leistungsverstärkung (maximum available power gain) [24.1]:

$$
MAG = \left|\frac{S_{21}}{S_{12}}\right|\left(k-\sqrt{k^2-1}\right)
$$

(24.16)

mit dem Stabilitätsfaktor $k > 1$ aus (24.12). Auf diese und andere Leistungsverstärkungen gehen wir im Abschnitt 24.4.1 noch näher ein.
<!-- page-import:1389:end -->

<!-- page-import:1390:start -->
24.2 HF-Verstärker mit Einzeltransistoren 1353

**Abb. 24.31.**  
Arbeitspunkteinstellung  
für den Transistor BFR93

*Beispiel:* Im folgenden entwerfen wir einen beidseitig angepassten Hochfrequenz-Verstärker mit dem Transistor BFR93 für eine Betriebsfrequenz (Mittenfrequenz) $f_M =$ 1,88 GHz. Die Versorgungsspannung soll 3,3 V betragen. Wir verwenden eine Arbeitspunktregelung nach Abb. 24.28a mit einem Ruhestrom $I_{C1,A} = 5$ mA. Für diesen Ruhestrom erhält man laut Datenblatt eine minimale Rauschzahl $^{10}$.

Abbildung 24.31 zeigt die dimensionierte Schaltung zur Arbeitspunkteinstellung; dabei wurden folgende Aspekte berücksichtigt:

– Da die Eingangsimpedanz des Transistors sehr klein ist ($\operatorname{Re}\{S_{11}\} < 0 \rightarrow \operatorname{Re}\{Z_e\} < 50\,\Omega$), wird auf eine induktive Entkopplung der Basis verzichtet; deshalb wird anstelle der Induktivität $L_B$ in Abb. 24.28a ein Widerstand $R_B = 1\,\text{k}\Omega$ eingesetzt.  
– Zur induktiven Entkopplung des Kollektors wird eine Spule mit $L_C = 33\,\text{nH}$ eingesetzt, deren Parallelresonanzfrequenz etwa bei 1,9 GHz liegt ($C \approx 0,2\,\text{pF}$).  
– In Reihe zu $L_C$ wird ein Widerstand $R_{LC} = 100\,\Omega$ eingefügt; er verursacht unterhalb der Betriebsfrequenz Verluste, die den $k$-Faktor im Bereich zwischen 100 MHz und 1,8 GHz erhöhen, siehe Abb. 24.32. Mit dieser Maßnahme wird die Schwingneigung in diesem Bereich vermindert.  
– Zur kapazitiven Abblockung bei der Betriebsfrequenz werden die Kondensatoren $C_{B1}$ und $C_{C1}$ eingesetzt, deren Serienresonanzfrequenz ebenfalls etwa bei 1,9 GHz liegt ($C = 4{,}7\,\text{pF}$, Baugröße 0604: $L \approx 1{,}5\,\text{nH}$).  
– Parallel zu $C_{C1}$ wird ein weiterer Kondensator $C_{C2}$ mit größerer Kapazität eingesetzt, um die kapazitive Abblockung bei niedrigen Frequenzen zu verbessern.  
– Der Kondensator $C_{B2}$ bestimmt die Grenzfrequenz der Arbeitspunktregelung und wird deshalb relativ groß gewählt.

---

$^{10}$ Das Datenblatt zeigt auch, dass die maximale Transitfrequenz für $I_C \approx 20\,\text{mA}$ erreicht wird und $I_C = 5\,\text{mA}$ diesbezüglich nicht optimal ist. Hier ist jedoch Vorsicht geboten, da die Transitfrequenz bei kurzgeschlossenem Ausgang gemessen wird und deshalb nur bedingt Rückschlüsse auf die erzielbare Leistungsverstärkung im beidseitig angepassten Fall erlaubt. So ergab ein parallel zum hier beschriebenen Entwurf durchgeführter Entwurf mit $I_C = 20\,\text{mA}$ nur eine um 0,2 dB höhere Leistungsverstärkung, die den höheren Ruhestrom nicht rechtfertigt, zumal gleichzeitig die Rauschzahl deutlich zunimmt.
<!-- page-import:1390:end -->

<!-- page-import:1391:start -->
1354  24. Hochfrequenz-Verstärker

Abb. 24.32.  
$k$-Faktor für das Schaltungsbeispiel aus Abb. 24.31

Die S-Parameter des Transistors mit Arbeitspunkteinstellung ermitteln wir mit Hilfe einer Schaltungssimulation $^{11}$:

$$
S_{11} = -0{,}3223 + j\,0{,}2527 \quad,\quad S_{12} = 0{,}1428 + j\,0{,}1833
$$

$$
S_{21} = 1{,}178 + j\,1{,}3254 \quad,\quad S_{22} = 0{,}09015 - j\,0{,}249
$$

Daraus folgt mit (24.12) $k = 1{,}05 > 1$, d.h. eine beidseitige Anpassung ist möglich. Die zu erwartende Leistungsverstärkung erhalten wir aus (24.16): $MAG = 5{,}57 \approx 7{,}5\,\mathrm{dB}$. Aus (24.10) und (24.11) folgt:

$$
r_{g,a} = -0{,}6475 - j\,0{,}402 \quad,\quad r_{L,a} = 0{,}3791 + j\,0{,}6
$$

Daraus berechnen wir mit (24.14) und (24.15) die Ein- und die Ausgangsimpedanz des Transistors mit Arbeitspunkteinstellung bei Anpassung:

$$
Z_{1,a} = (7{,}3 + j\,14)\ \Omega \quad,\quad Z_{2,a} = (33 - j\,80)\ \Omega
$$

Bei beiden Impedanzen ist der Realteil kleiner als $Z_W = 50\,\Omega$, so dass wir zur Anpassung eine Aufwärtstransformation nach Abb. 23.21a auf Seite 1302 vornehmen müssen.

Für die eingangsseitige Anpassung erhalten wir aus (23.25) mit $R = 7{,}3\,\Omega$ und $X = 14\,\Omega$:

$$
X_1 = \pm 20{,}7\,\Omega \quad,\quad X_2 = \mp 17{,}7\,\Omega - 14\,\Omega
$$

Wir wählen die Hochpass-Charakteristik ($X_1 > 0$, $X_2 < 0$) nach Abb. 23.22b auf Seite 1303, da in diesem Fall die Serien-Kapazität $C_2$ gleichzeitig als Koppelkondensator verwendet werden kann; aus

$$
X_1 = 20{,}7\,\Omega \quad,\quad X_2 = -31{,}7\,\Omega
$$

folgt mit (23.26):

$^{11}$ Wir haben bei dieser Simulation die Hochfrequenz-Ersatzschaltbilder der Widerstände und Kondensatoren berücksichtigt. Dennoch können die Ergebnisse dieser Simulation nicht für einen praktischen Schaltungsentwurf verwendet werden, da das vom Hersteller bereitgestellte Simulationsmodell für den Transistor BFR93 in diesem Frequenzbereich zu ungenau ist. In der Praxis muss man die S-Parameter des Transistors einschließlich der Arbeitspunkteinstellung mit einem Netzwerkanalysator messen. Wir verwenden hier die S-Parameter aus der Simulation, damit das Beispiel mit PSpice nachvollzogen werden kann.
<!-- page-import:1391:end -->

<!-- page-import:1392:start -->
24.2 HF-Verstärker mit Einzeltransistoren 1355

**Abb. 24.33.** Verstärker mit Anpassnetzwerken

$$L_{1,e} = 1{,}75\,\mathrm{nH} \quad,\quad C_{2,e} = 2{,}65\,\mathrm{pF}$$

Der zusätzliche Index $e$ verweist auf die eingangsseitige Anpassung.

Für die ausgangsseitige Anpassung erhalten wir aus (23.25) mit $R = 33\,\Omega$ und $X = -80\,\Omega$:

$$X_1 = \pm 70\,\Omega \quad,\quad X_2 = \mp 24\,\Omega + 80\,\Omega$$

Hier wählen wir die Tiefpass-Charakteristik ($X_1 < 0$, $X_2 > 0$) nach Abb. 23.22a auf Seite 1303, damit insgesamt eine Bandpass-Charakteristik vorliegt; aus

$$X_1 = -70\,\Omega \quad,\quad X_2 = 104\,\Omega$$

folgt mit (23.26):

$$C_{1,a} = 1{,}2\,\mathrm{pF} \quad,\quad L_{2,a} = 8{,}8\,\mathrm{nH}$$

Der zusätzliche Index $a$ verweist auf die ausgangsseitige Anpassung. Am Ausgang wird zusätzlich ein Koppelkondensator benötigt. Wir verwenden dazu einen 4,7 pF-Kondensator, dessen Serienresonanzfrequenz bei 1,9 GHz liegt; er wirkt bei der Betriebsfrequenz $f_M = 1{,}88\,\mathrm{GHz}$ praktisch als Kurzschluss und hat damit keinen Einfluss auf die Anpassung.

Abbildung 24.33 zeigt den Verstärker mit den beiden Anpassnetzwerken. Die Elemente der Anpassnetzwerke sind ideal; deshalb ist der Entwurf in der Praxis in diesem Stadium noch nicht abgeschlossen. Man muss nun prüfen, an welchen Stellen Spulen und Kondensatoren eingesetzt werden können und wo ggf. Streifenleitungen zur Realisierung der Elemente vorteilhaft oder zwingend sind. Wir gehen darauf nicht weiter ein und verweisen auf die Anmerkungen zur Anpassung mehrstufiger Verstärker im folgenden Abschnitt.

Zum Abschluss zeigen wir noch die erzielten Ergebnisse. Abbildung 24.34 zeigt im oberen Teil die Beträge der S-Parameter des angepassten Verstärkers im Bereich der Betriebsfrequenz $f_M = 1{,}88\,\mathrm{GHz}$. Man erkennt, dass die Anpassung relativ schmalbandig
<!-- page-import:1392:end -->

<!-- page-import:1393:start -->
1356 24. Hochfrequenz-Verstärker

Abb. 24.34. S-Parameter des Verstärkers aus Abb. 24.33

ist. Fordert man für die Reflexionsfaktoren $|S_{11}| < 0,1$ und $|S_{22}| < 0,1$, erhält man eine Bandbreite von etwa 53 MHz. Die Eingangsanpassung ist etwas schmalbandiger als die Ausgangsanpassung, da hier der Transformationsfaktor für den Realteil der Impedanz größer ist: $7{,}3\,\Omega \rightarrow 50\,\Omega$ am Eingang im Vergleich zu $33\,\Omega \rightarrow 50\,\Omega$ am Ausgang. Im mittleren Teil von Abb. 24.34 sind die Beträge der S-Parameter über einen größeren Bereich dargestellt. Dabei fällt auf, dass der Ausgang im Bereich um 600MHz ebenfalls näherungs-
<!-- page-import:1393:end -->

<!-- page-import:1394:start -->
24.2 HF-Verstärker mit Einzeltransistoren 1357

weise angepasst ist ($|S_{22}| \approx 0,1$). Die Lage dieses Bereichs hängt von der Kapazität des Koppelkondensators am Ausgang ab und kann mit diesem eingestellt werden. Diese Eigenschaft kann man vorteilhaft nutzen, wenn nach dem Verstärker ein Mischer zur Umsetzung auf eine niedrigere Zwischenfrequenz folgt; dann kann man durch geeignete Wahl des Koppelkondensators auch für die Zwischenfrequenz eine ausreichend gute Anpassung erzielen. Wir wollen mit diesem Hinweis andeuten, dass in der Hochfrequenz-Schaltungstechnik häufig sekundäre Effekte genutzt werden. Im unteren Teil von Abb. 24.34 ist der Verlauf der Verstärkung in Dezibel dargestellt. Bei der Betriebsfrequenz wird das Maximum erzielt, das wir bereits mit Hilfe von (24.16) berechnet haben: $MAG \approx 7{,}5\,\mathrm{dB}$. Die Verstärkung ist vergleichsweise gering, da der Transistor BFR93 nur eine Transitfrequenz von 5 GHz besitzt und hier an der Grenze seiner Leistungsfähigkeit betrieben wird. In aktuellen Schaltungen für den Frequenzbereich um 2 GHz werden Transistoren mit Transitfrequenzen im Bereich von 25 GHz eingesetzt; damit wird eine Verstärkung von $20 \ldots 25\,\mathrm{dB}$ erzielt.

## 24.2.4 Anpassung mehrstufiger Verstärker

Man kann die Anpassung eines mehrstufigen Verstärkers in gleicher Weise durchführen wie die Anpassung eines einstufigen Verstärkers, indem man jede Stufe beidseitig anpasst und die Stufen anschließend in Reihe schaltet; dabei kann man die Anpassnetzwerke zwischen den Stufen häufig durch Zusammenfassen der Elemente vereinfachen. In den meisten Fällen ist diese Vorgehensweise jedoch nicht optimal. Sie wird in der Praxis deshalb nur dann angewendet, wenn die Stufen aus aufbautechnischen Gründen so weit voneinander entfernt sind, dass die Verbindungen zwischen den Stufen nicht mehr als elektrisch kurze Leitungen aufgefasst werden können; das ist vor allem im GHz-Bereich der Fall.

In allen anderen Fällen wird der Ausgang jeder Stufe direkt an den Eingang der folgenden Stufe angepasst. Die Berechnung einer derartigen Anpassung ist aufwendig, da ein $n$-stufiger Verstärker insgesamt $n + 1$ Anpassnetzwerke (Eingangsanpassung, Ausgangsanpassung und $n - 1$ Anpassungen zwischen den Stufen) besitzt, die aufgrund der Rückwirkung der Transistoren voneinander abhängig sind. Man geht in zwei Schritten vor:

- Im ersten Schritt müssen auf der Basis der S-Parameter der einzelnen Transistoren Strukturen zur Anpassung ausgewählt werden, mit denen eine Anpassung prinzipiell möglich ist. Dabei werden auch alle Leitungen berücksichtigt, die aus aufbautechnischen Gründen unvermeidlich sind, d.h. man muss das Platinen-Layout des Verstärkers in groben Zügen vorgeben.
- Im zweiten Schritt werden die Werte der Elemente in den einzelnen Strukturen mit Hilfe eines Simulationsprogramms ermittelt; dazu werden iterative Optimierungsverfahren (*optimizer*) eingesetzt, die eine bezüglich der vom Anwender vorgegebenen Kriterien optimale Dimensionierung finden. Die Kriterien lauten häufig: maximiere $|S_{21}|$ unter den Randbedingungen $|S_{11}| < 0,1$ und $|S_{22}| < 0,1$ im angegebenen Frequenzbereich.

Ist die Rückwirkung der Transistoren nicht besonders hoch, kann man bereits im ersten Durchlauf ein ausreichend gutes Ergebnis erzielen. Andernfalls muss man die Strukturen variieren und weitere Durchläufe durchführen. Erneute Durchläufe sind häufig auch deshalb erforderlich, weil die gefundenen Werte für die Elemente nicht realisierbar sind oder nicht im Rahmen des vorgegebenen Platinen-Layouts angeordnet werden können.

Dieses Verfahren wird in der Praxis auch bei einstufigen Verstärkern angewendet. Zwar kann man die idealen Anpassnetzwerke in diesem Fall mit dem im vorausgehenden Abschnitt beschriebenen Verfahren direkt berechnen, ihre praktische Realisierung unter [unclear]
<!-- page-import:1394:end -->

<!-- page-import:1395:start -->
1358  24. Hochfrequenz-Verstärker

Berücksichtigung der Eigenschaften realer Bauelemente und des Platinen-Layouts erfordert jedoch ebenfalls eine rechnergestützte Optimierung.

#### 24.2.4.1 Anpassung mit Serien-Induktivität

Bei Hochfrequenz-Bipolartransistoren mit einer Transitfrequenz über 10 GHz sind die Kapazitäten des eigentlichen Transistors so klein, dass die Eingangs- und die Ausgangskapazität durch die parasitären Kapazitäten des Gehäuses gegeben sind. Für diese Transistoren erhält man das in Abb. 24.35a gezeigte Ersatzschaltbild mit den Gehäuse-Kapazitäten $C_{BE}$ und $C_{CE}$ und den Gehäuse-Induktivitäten $L_B$, $L_C$ und $L_E$; dabei gilt $C_{BE} > C_{CE} > C_C$ und $L_B \approx L_C > L_E$. Aufgrund der Größenverhältnisse kann man das Ersatzschaltbild vereinfachen. Setzt man dieses vereinfachte Ersatzschaltbild bei einem mehrstufigen Verstärker nach Abb. 24.35b ein, erhält man zwischen den Stufen jeweils ein Collins-Filter, dessen Kapazitäten durch die Kapazitäten der Transistoren gebildet werden und dessen Induktivität der Reihenschaltung der Gehäuse-Induktivitäten und einer äußeren Induktivität entspricht. Deshalb kann man die Anpassung zwischen den Stufen bei günstigen Größenverhältnissen mit einer Serien-Induktivität vornehmen. Auch am Eingang und am Ausgang des Verstärkers kann man die parasitären Elemente der Transistoren in ein Collins-Filter integrieren.

### 24.2.5 Neutralisation

Haupthindernis bei der Anpassung ist die Rückwirkung der Transistoren; sie verringert den Stabilitätsfaktor $k$ und verhindert bei $k < 1$ eine beidseitige Anpassung. Für einen rückwirkungsfreien Transistor gilt $S_{12} = 0$ und $k \to \infty$; dann kann beidseitig angepasst werden, sofern die Realteile der Ein- und Ausgangsimpedanz positiv sind, d.h. wenn $|S_{11}| < 1$ und $|S_{22}| < 1$ gilt. Ein rückwirkungsfreier Transistor arbeitet unilateral, d.h. er überträgt Signale nur noch in Vorwärts-Richtung.

#### 24.2.5.1 Schaltungen zur Neutralisation

Die Rückwirkung wird bei Bipolartransistoren durch die Kollektor-Basis-Kapazität $C_C$ und bei Fets durch die Gate-Drain-Kapazität $C_{GD}$ verursacht. Sie kann eliminiert werden, indem man die Basis über eine gleichgroße Neutralisationskapazität $C_n$ mit einem Punkt in der Schaltung verbindet, der die invertierte Kleinsignalspannung des Kollektors besitzt. Einen solchen Punkt erhält man, indem man die Spule zur Entkopplung des Kollektors mit einem Mittelabgriff versieht und diesen mit der Versorgungsspannung verbindet, siehe Abb. 24.36; der dem Kollektor gegenüberliegende Anschluss hat dann die invertierte Kleinsignalspannung. Die Neutralisation ist bis etwa 300 MHz nahezu ideal; darüber machen sich die parasitären Einflüsse des Transistors (Basisbahnwiderstand und Basis-Induktivität), der Spule und des Kondensators störend bemerkbar. Bei Verstärkern für größere Ausgangsleistung werden häufig zwei Transistoren in Gegentaktschaltung eingesetzt; in diesem Fall kann man die Transistoren durch ein Kreuzkopplung mit zwei Kapazitäten $C_{n1}$ und $C_{n2}$ neutralisieren, siehe Abb. 24.37. Auf demselben Prinzip beruht die Neutralisation eines Differenzverstärkers nach Abb. 24.38.

#### 24.2.5.2 Leistungsverstärkung bei Neutralisation

Mit Neutralisation und beidseitiger Anpassung wird der größtmögliche Leistungsgewinn erzielt, der unilaterale Leistungsgewinn (unilateral power gain) [24.1]:
<!-- page-import:1395:end -->

<!-- page-import:1396:start -->
24.2 HF-Verstärker mit Einzeltransistoren 1359

Ersatzschaltbild

Vereinfachung

a vereinfachtes Ersatzschaltbild eines Bipolartransistors in Emitterschaltung

vereinfachtes Ersatzschaltbild

Collins-Filter 1

Collins-Filter 2

Collins-Filter 3

b vereinfachtes Ersatzschaltbild eines zweistufigen Verstärkers mit Anpassung

**Abb. 24.35.** Anpassung eines zweistufigen Verstärkers mit Collins-Filtern unter Nutzung der parasitären Elemente der Transistoren

$$
U=\frac{\frac{1}{2}\left|\frac{S_{21}}{S_{12}}-1\right|^2}{k\left|\frac{S_{21}}{S_{12}}\right|-\operatorname{Re}\left\{\frac{S_{21}}{S_{12}}\right\}}
\qquad (24.17)
$$
<!-- page-import:1396:end -->

<!-- page-import:1397:start -->
1360 24. Hochfrequenz-Verstärker

**Abb. 24.36.**  
Neutralisation eines Transistors

Dabei sind die S-Parameter des Transistors ohne Neutralisation und der Stabilitätsfaktor $k$ aus (24.12) auf Seite 1351 einzusetzen. Man kann auch die S-Parameter des neutralisierten Transistors verwenden; dann gilt $S_{12,n}=0$ und man erhält$^{12}$:

**Abb. 24.37.** Neutralisation einer Gegentaktschaltung
<!-- page-import:1397:end -->

<!-- page-import:1398:start -->
24.2 HF-Verstärker mit Einzeltransistoren 1361

Abb. 24.38.  
Neutralisation eines Differenzverstärkers

$$
U = \frac{|S_{21,n}|^2}{(1-|S_{11,n}|^2)\,(1-|S_{22,n}|^2)}
$$

## 24.2.6 Besondere Schaltungen zur Verbesserung der Anpassung

Wenn man bei einem Verstärker mit den bisher beschriebenen Verfahren keine ausreichende Anpassung erzielen kann, kann man Zirkulatoren oder 90°-Hybride zur Verbesserung der Anpassung einsetzen. Dies ist z.B. dann der Fall, wenn am Eingang eines Verstärkers zur Minimierung der Rauschzahl eine Rauschanpassung vorgenommen wird und gleichzeitig ein möglichst geringer Reflexionsfaktor benötigt wird.

### 24.2.6.1 Anpassung mit Zirkulatoren

Ein Zirkulator ist ein übertragungsunsymmetrisches Mehrtor. In der Praxis werden ausschließlich 3-Tor-Zirkulatoren eingesetzt, die für Frequenzen im GHz-Bereich geeignet sind und deren Übertragungsunsymmetrie mit Hilfe von vormagnetisierten Ferriten erzielt wird [24.1].

Ein idealer 3-Tor-Zirkulator wird durch

$$
\begin{bmatrix}
b_1\\
b_2\\
b_3
\end{bmatrix}
=
e^{j\varphi}
\begin{bmatrix}
0 & 0 & 1\\
1 & 0 & 0\\
0 & 1 & 0
\end{bmatrix}
\begin{bmatrix}
a_1\\
a_2\\
a_3
\end{bmatrix}
$$

beschrieben; dabei sind $a_1, a_2, a_3$ die einfallenden und $b_1, b_2, b_3$ die reflektierten Wellen an den drei Toren. Der Zirkulator ist allseitig angepasst: $S_{11,Z} = S_{22,Z} = S_{33,Z} = 0$. Die einfallenden Wellen werden in der Reihenfolge $1 \rightarrow 2 \rightarrow 3 \rightarrow 1$ an das nächste Tor übertragen und erfahren dabei eine Drehung um den Winkel $\varphi$. Die Übertragungsunsymmetrie zeigt sich in der Unsymmetrie der S-Matrix: $S_{12,Z} \neq S_{21,Z}$, $S_{13,Z} \neq S_{31,Z}$ und $S_{23,Z} \neq S_{32,Z}$.

Abbildung 24.39 zeigt einen nichtangepassten Verstärker ($S_{11,V} \neq 0$, $S_{22,V} \neq 0$) mit je einem Zirkulator am Eingang und am Ausgang. Die Übertragungsrichtung der Zirkulatoren wird durch die Pfeile in den Symbolen angegeben. Wir betrachten zunächst den Zirkulator

(24.18)

12 Diesen Zusammenhang erhält man, indem man den Übertragungsgewinn $G_T$ gemäß (24.34) auf Seite 1376 für den rückwirkungsfreien und beidseitig angepassten Fall berechnet; dann gilt $S_{12} = 0$, $r_g = S_{11}^*$ und $r_L = S_{22}^*$.
<!-- page-import:1398:end -->

<!-- page-import:1399:start -->
1362  24. Hochfrequenz-Verstärker

**Abb. 24.39.** Anpassung mit Zirkulatoren

am Eingang und nehmen ohne Beschränkung der Allgemeinheit $\varphi = 0$ an; dann wird die von der Signalquelle einfallende Welle $a_1$ unverändert zum Verstärker übertragen:

$$
b_2 = \left. S_{21,Z} a_1 \right|_{\varphi=0} = a_1
$$

Die am Eingang des Verstärkers reflektierte Welle $a_2 = S_{11,V}\, b_2$ wird an den Abschlusswiderstand $Z_W$ am Tor 3 übertragen:

$$
b_3 = \left. S_{32,Z}\, a_2 \right|_{\varphi=0} = S_{32,Z}\, S_{11,V}\, S_{21,Z}\, a_1 = S_{11,V}\, a_1
$$

Sie wird dort reflexionsfrei absorbiert. Daraus folgt, dass am Tor 3 keine einfallende und demzufolge am Tor 1 keine reflektierte Welle auftritt:

$$
a_3 = 0 \Rightarrow b_1 = S_{13,Z}\, a_3 = 0
$$

Dann wird der Reflexionsfaktor am Eingang zu Null:

$$
S_{11} = \left. \frac{b_1}{a_1} \right|_{b_1=0} = 0
$$

Die Funktionsweise dieser Anpassung beruht demnach darauf, dass die am Eingang des Verstärkers reflektierte Welle nicht zur Signalquelle gelangt, sondern im Abschlusswiderstand absorbiert wird. Dies erfordert in der Praxis einen Zirkulator mit möglichst guten Eigenschaften und einen sehr guten Abschluss am Tor 3. Der Zirkulator am Ausgang des Verstärkers arbeitet in gleicher Weise.

In der Praxis wird meist nur ein Zirkulator eingesetzt, um einen der Reflexionsfaktoren des Verstärkers zu verbessern. Bei rauscharmen Verstärkern wird der eingangsseitige Zirkulator eingesetzt, um die bei einer Rauschanpassung vorliegende Fehlanpassung am Eingang zu beheben; auf die Rauschanpassung gehen wir im folgenden Abschnitt noch näher ein. Bei Leistungsverstärkern wird gelegentlich ein Zirkulator am Ausgang eingesetzt; in diesem Fall erfüllt der Zirkulator gleich zwei Funktionen:

- Der Reflexionsfaktor $S_{22}$ am Ausgang des Verstärkers wird zu Null.
- Die von der Last reflektierte Welle gelangt nicht auf den Ausgang des Verstärkers, sondern wird im Abschlusswiderstand $Z_W$ absorbiert.

Die zweite Funktion ist von Bedeutung, da Leistungsverstärker durch die reflektierte Welle zerstört werden können.
<!-- page-import:1399:end -->

<!-- page-import:1400:start -->
24.2 HF-Verstärker mit Einzeltransistoren 1363

**Abb. 24.40.** Anpassung mit 90°-Hybriden

### 24.2.6.2 Anpassung mit Hybriden

Bei der Anpassung mit 90°-Hybriden werden zwei Hybride und zwei Verstärker mit gleichen Eigenschaften benötigt; Abb. 24.40 zeigt die Anordnung. Die S-Parameter eines 90°-Hybrids entnehmen wir Gleichung (23.48) auf Seite 1317.

Wir betrachten zunächst die Verhältnisse am Eingang. Eine einfallende Welle $a_1$ wird leistungsmäßig auf die beiden Verstärker verteilt, wobei die Welle $b_4$ am Verstärker 2 um 90° voreilt:

$$
b_3 = S_{31,H}\,a_1 = -\frac{a_1}{\sqrt{2}}, \quad b_4 = S_{41,H}\,a_1 = -j\,\frac{a_1}{\sqrt{2}}
$$

An den Eingängen der Verstärker werden die Wellen entsprechend dem Eingangsreflexionsfaktor $S_{11,V}$ reflektiert:

$$
a_3 = S_{11,V}\,b_3 = -S_{11,V}\,\frac{a_1}{\sqrt{2}}, \quad a_4 = S_{11,V}\,b_4 = -j\,S_{11,V}\,\frac{a_1}{\sqrt{2}}
$$

Damit kann man die ausfallenden Wellen an den Toren 1 und 2 berechnen:

$$
b_1 = S_{13,H}\,a_3 + S_{14,H}\,a_4 = -\frac{a_3}{\sqrt{2}} - j\,\frac{a_4}{\sqrt{2}} = 0
$$

$$
b_2 = S_{23,H}\,a_3 + S_{24,H}\,a_4 = -j\,\frac{a_3}{\sqrt{2}} - \frac{a_4}{\sqrt{2}} = j\,S_{11,V}\,a_1
$$

Man erkennt, dass die von den Verstärkern reflektierten Wellen zum Abschlusswiderstand $Z_W$ am Tor 2 übertragen werden und der Reflexionsfaktor am Tor 1 zu Null wird:

$$
S_{11} = \frac{b_1}{a_1}\Big|_{b_1=0} = 0
$$

Am Ausgang erhält man auf die gleiche Weise $S_{22} = 0$.

Der Hybrid am Ausgang arbeitet als Leistungssummierer (*power combiner*) und addiert die Ausgangsleistungen der beiden Verstärker. Deshalb wird diese Variante der Anpassung trotz des vergleichsweise hohen schaltungstechnischen Aufwands häufig bei Leistungsverstärkern eingesetzt.
<!-- page-import:1400:end -->

<!-- page-import:1401:start -->
1364  24. Hochfrequenz-Verstärker

## 24.2.7 Rauschen

Im Abschnitt 24.1 haben wir im Zusammenhang mit der Rauschzahl integrierter Hochfrequenz-Verstärker gezeigt, dass man bei Bipolartransistoren mit einer (Leistungs-)Anpassung im allgemeinen keine minimale Rauschzahl erhält, da das Anpassnetzwerk den Quellenwiderstand $R_g$ auf den Eingangswiderstand $r_{BE}$ des Transistors transformiert, während der optimale Quellenwiderstand $r_{BE}/\sqrt{\beta}$ beträgt. Zur Minimierung der Rauschzahl kann man anstelle der Leistungsanpassung eine Rauschanpassung vornehmen, die allerdings in den meisten Fällen auf einen unzulässig hohen Eingangsreflexionsfaktor führt. Bei Feldeffekttransistoren sind die Zusammenhänge ähnlich; auch hier unterscheiden sich Leistungs- und Rauschanpassung deutlich.

### 24.2.7.1 Rauschparameter und Rauschzahl

Bei Frequenzen im GHz-Bereich kann man das Rauschverhalten von Bipolartransistoren und Feldeffekttransistoren nicht mehr ausreichend genau mit den Rauschmodellen aus den Abschnitten 2.3.4 und 3.3.4 beschreiben; man muss dann die in den Datenblättern angegebenen Rauschparameter verwenden: die minimale Rauschzahl $F_{opt}$, den optimalen Reflexionsfaktor $r_{g,opt}$ der Signalquelle und den normierten Rauschwiderstand $r_n$. Anstelle des normierten Rauschwiderstands wird häufig auch der Rauschwiderstand $R_n = r_n Z_W$ angegeben. Mit den Rauschparametern kann man die Rauschzahl für jeden beliebigen Reflexionsfaktor $r_g$ berechnen [24.2]:

$$
F = F_{opt} + 4\,r_n \frac{|r_g - r_{g,opt}|^2}{(1 - |r_g|^2)\,|1 + r_{g,opt}|^2}
$$

(24.19)

Für $r_g = r_{g,opt}$ gilt $F = F_{opt}$.

### 24.2.7.2 Entwurf eines rauscharmen Verstärkers

Beim Entwurf eines Verstärkers wird die Rauschzahl für alle Reflexionsfaktoren mit $|r_g| < 1$ berechnet und in der $r$-Ebene dargestellt; dabei erhält man Kreise mit konstanter Rauschzahl. Ebenfalls eingetragen wird die zugehörige Leistungsverstärkung; dabei erhält man für den Reflexionsfaktor $r_{g,a}$ bei Leistungsanpassung den maximal verfügbaren Leistungsgewinn $MAG$, sofern eine beidseitige Anpassung möglich ist. Die Leistungsverstärkung für andere Werte von $r_g$ entspricht dem Übertragungsgewinn $G_T$ und wird wie folgt berechnet:

$$
r_g \xRightarrow{(24.9)} r_2 = S_{22} + \frac{S_{12}S_{21}r_g}{1 - S_{11}r_g}
\qquad \text{Anpassung} \qquad
\Longrightarrow \qquad
r_L = r_2^{*}
$$

$$
\xRightarrow{(24.34)} \quad G_T = \frac{|S_{21}|^2\,(1 - |r_g|^2)\,(1 - |r_L|^2)}{|(1 - S_{11}r_g)(1 - S_{22}r_L) - S_{12}S_{21}r_gr_L|^2}
$$

Man erhält Kreise mit konstanter Leistungsverstärkung. Die Berechnung erfolgt normalerweise mit Hilfe geeigneter Simulations- oder Mathematikprogramme.

Abbildung 24.41 zeigt die Rauschzahl und die Leistungsverstärkung eines GaAs-Mesfets CFY10 bei $f = 9\,\mathrm{GHz}$. Für $r_g = r_{g,a} = -0{,}68 + j\,0{,}5$ erhält man eine Leistungsanpassung, für $r_g = r_{g,opt} = -0{,}24 + j\,0{,}33$ eine Rauschanpassung. Die Kreise konstanter Rauschzahl zeigen, dass die Rauschzahl bei Leistungsanpassung um 3 dB größer ist als bei Rauschanpassung. Entsprechend entnimmt man den Kreisen konstanter
<!-- page-import:1401:end -->

<!-- page-import:1402:start -->
24.2 HF-Verstärker mit Einzeltransistoren 1365

*MAG*  
*MAG* $-1\,\mathrm{dB}$  
*MAG* $-2\,\mathrm{dB}$  
*MAG* $-3\,\mathrm{dB}$

$F_{opt}+3\,\mathrm{dB}$  
$F_{opt}+2\,\mathrm{dB}$  
$F_{opt}+1\,\mathrm{dB}$  
$F_{opt}$

$\operatorname{Im}\{r_g\}$  
$\operatorname{Re}\{r_g\}$

1  
1

$MAG = 12\,\mathrm{dB}$  
$F_{opt} = 1{,}6\,\mathrm{dB}$

**Abb. 24.41.** Rauschzahl und Leistungsverstärkung eines GaAs-Mesfets CFY10 bei $f \;=\; 9\,\mathrm{GHz}$  
$(I_{D,A} = 15\,\mathrm{mA}, U_{DS,A} = 4\,\mathrm{V})$

Leistungsverstärkung, dass die Leistungsverstärkung bei Rauschanpassung um 3,1 dB unter *MAG* liegt. Man kann nun einen Reflexionsfaktor $r_g$ auf der Verbindungslinie zwischen $r_{g.a}$ und $r_{g.opt}$ wählen, für den die anwendungsspezifischen Anforderungen am besten erfüllt sind.

Wenn eine beidseitige Anpassung nicht möglich ist, kann man häufig eine Rauschanpassung am Eingang und eine Leistungsanpassung am Ausgang vornehmen. Dazu werden zunächst die Kreise konstanter Rauschzahl in der $r$-Ebene dargestellt. Anschließend wird die Leistungsverstärkung für alle Werte von $r_g$ berechnet, für die ein stabiler Betrieb möglich ist; dabei geht man wie folgt vor:

- Ausgehend vom vorgegebenen Reflexionsfaktor $r_g$ wird der Reflexionsfaktor am Ausgang berechnet:

$$
r_2 \;=\; S_{22} + \frac{S_{12}S_{21}r_g}{1 - S_{11}r_g}
$$

(24.9)

Wenn $|r_2| \geq 1$ gilt, ist kein stabiler Betrieb mit Leistungsanpassung am Ausgang möglich.

- Wenn $|r_2| < 1$ gilt, wird eine Leistungsanpassung am Ausgang angenommen: $r_L = r_2^{*}$.
- Der zugehörige Reflexionsfaktor am Eingang wird berechnet:

$$
r_1 \;=\; S_{11} + \frac{S_{12}S_{21}r_L}{1 - S_{22}r_L}
\;=\;
S_{11} + \frac{S_{12}S_{21}r_2^{*}}{1 - S_{22}r_2^{*}}
$$

(24.8)
<!-- page-import:1402:end -->
