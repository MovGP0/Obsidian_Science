# Characteristic Quantities of RF Amplifiers

<!-- page-import:1403:start -->
1366  24. Hochfrequenz-Verstärker

MSG = 22 dB  
$F_{opt} = 1{,}3\,\mathrm{dB}$

instabiler Bereich

$\operatorname{Im}\{r_g\}$

$\operatorname{Re}\{r_g\}$

$F_{opt}+3\,\mathrm{dB}$  
$F_{opt}+2\,\mathrm{dB}$  
$F_{opt}+1\,\mathrm{dB}$  
$F_{opt}$

MSG  
MSG $-\,1\,\mathrm{dB}$  
MSG $-\,2\,\mathrm{dB}$  
MSG $-\,3\,\mathrm{dB}$  
MSG $-\,4\,\mathrm{dB}$

**Abb. 24.42.** Rauschzahl und Leistungsverstärkung eines Bipolartransistors BFP405 bei $f =$ 2,4 GHz $(I_{C,A}=5\,\mathrm{mA}, U_{CE,A}=4\,\mathrm{V})$

Wenn $|r_1| \geq 1$ gilt, ist kein stabiler Betrieb mit Leistungsanpassung am Ausgang möglich.

– Wenn $|r_1| < 1$ gilt, wird der zugehörige Übertragungsgewinn $G_T$ berechnet:

$$
G_T \;=\; \frac{|S_{21}|^2\,(1-|r_g|^2)\,(1-|r_L|^2)}{\left|(1-S_{11}r_g)\,(1-S_{22}r_L)-S_{12}S_{21}r_g r_L\right|^2}
$$

Man erhält Kreise konstanter Leistungsverstärkung, die durch einen ebenfalls kreisförmigen Stabilitätsrand begrenzt werden. Am Stabilitätsrand wird der *maximale stabile Leistungsgewinn* (*maximum stable power gain*) MSG erzielt; wir gehen darauf im Abschnitt 24.4.1 noch näher ein.

Abbildung 24.42 zeigt die Rauschzahl und die Leistungsverstärkung eines Bipolartransistors BFP405 bei $f = 2{,}4\,\mathrm{GHz}$. Der Stabilitätsfaktor ist kleiner als Eins, so dass keine beidseitige Leistungsanpassung möglich ist. Für $r_g = r_{g,opt} = 0{,}32 + j\,0{,}25$ erhält man eine Rauschanpassung. Die Kreise konstanter Leistungsverstärkung werden durch den Stabilitätsrand begrenzt, an dem der maximale stabile Leistungsgewinn MSG erzielt wird. Die Kreise konstanter Leistungsverstärkung zeigen, dass die Leistungsverstärkung bei Rauschanpassung um 3,5 dB unter MSG liegt. Entsprechend entnimmt man den Kreisen konstanter Rauschzahl, dass die Rauschzahl bei einem Betrieb mit der Leistungsverstärkung MSG um 1,8 dB über der minimalen Rauschzahl liegt. Man kann nun einen geeigneten Reflexionsfaktor $r_g$ wählen.
<!-- page-import:1403:end -->

<!-- page-import:1410:start -->
24.4 Kenngrößen von Hochfrequenz-Verstärkern 1373

Abb. 24.48.  
Idealiserter Verstärker mit Signalquelle und Last

## 24.4 Kenngrößen von Hochfrequenz-Verstärkern

Im Abschnitt 4.2 haben wir die Eigenschaften von Verstärkern beschrieben; dabei haben wir uns auf Verstärker beschränkt, die durch statische Kennlinien und die daraus ableitbaren linearen und nichtlinearen Kenngrößen beschrieben werden können. Bei Niederfrequenz-Verstärkern und ZF-Verstärkern mit niedriger ZF-Frequenz ist diese Beschreibung ausreichend, solange die auftretenden Frequenzen so gering sind, dass die dynamischen Eigenschaften vernachlässigt werden können. Bei Hochfrequenz-Verstärkern ist das im allgemeinen nicht der Fall; deshalb sind einige Ergänzungen und Erweiterungen erforderlich, auf die wir im folgenden eingehen.

### 24.4.1 Leistungsverstärkung

Bei Hochfrequenz-Verstärkern wird üblicherweise die Leistungsverstärkung (power gain) angegeben, die im deutschsprachigen Raum auch als Gewinn bezeichnet wird. Es gibt mehrere verschiedene Gewinn-Definitionen, die sich in ihren Bezugsgrößen unterscheiden. Die zugehörigen Gleichungen auf der Basis der S- oder Y-Parameter sind teilweise sehr umfangreich und dadurch unanschaulich. Wir gehen deshalb so vor, dass wir die Gewinn-Definitionen zunächst am Beispiel eines idealisierten Verstärkers erläutern und anschließend auf den allgemeinen Fall erweitern. Die umfangreichen Gleichungen auf der Basis der S- und Y-Parameter sind nur für eine rechnergestützte Auswertung gedacht; eine Berechnung zu Fuß ist im allgemeinen zu aufwendig.

Abbildung 24.48 zeigt den idealisierten Verstärker mit der Leerlaufverstärkung $A$, dem Eingangswiderstand $r_e$ und dem Ausgangswiderstand $r_a$; eine Rückwirkung ist nicht vorhanden. Er wird mit einer Signalquelle mit dem Innenwiderstand $R_g$ und einer Last $R_L$ betrieben. Für die weiteren Berechnungen benötigen wir die Betriebsverstärkung

$$
A_B = \frac{u_a}{u_g} = \frac{r_e}{R_g + r_e}\, A\, \frac{R_L}{r_a + R_L}
$$

und die Verstärkung mit Last:

$$
A_L = \frac{u_a}{u_e} = A\, \frac{R_L}{r_a + R_L}
$$

Für den allgemeinen Fall gehen wir von einem Verstärker aus, der mit S- oder Y-Parametern beschrieben wird. Er wird mit einer Quelle mit der Impedanz $Z_g = 1 / Y_g$ und mit einer Last $Z_L = 1 / Y_L$ betrieben, siehe Abbildung 24.49. Für die Darstellung mit Hilfe der S-Parameter benötigen wir zusätzlich die Reflexionsfaktoren der Quelle und der Last

$$
r_g = \frac{Z_g - Z_W}{Z_g + Z_W}, \qquad r_L = \frac{Z_L - Z_W}{Z_L + Z_W}
$$

und die Determinante der S-Matrix:
<!-- page-import:1410:end -->

<!-- page-import:1411:start -->
1374 24. Hochfrequenz-Verstärker

$\Delta_S = S_{11}S_{22} - S_{12}S_{21}$

Man beachte, dass es sich bei den Größen $r_g$ und $r_L$ um Reflexionsfaktoren handelt, während $r_e$ und $r_a$ die Widerstände des idealisierten Verstärkers aus Abb. 24.48 sind.

Abb. 24.49. Allgemeiner Verstärker mit Signalquelle und Last

#### 24.4.1.1 Klemmenleistungsgewinn

Der Klemmenleistungsgewinn (*power gain* bzw. *direct power gain*) entspricht der Leistungsverstärkung im üblichen Sprachgebrauch:

$$
G = \frac{P_L}{P_e} = \frac{\text{von der Last aufgenommene Wirkleistung}}{\text{vom Verstärker am Eingang aufgenommene Wirkleistung}}
$$

Für den idealisierten Verstärker aus Abb. 24.48 gilt$^{14}$:

$$
P_L = \frac{u_a^2}{R_L}, \qquad P_e = \frac{u_e^2}{r_e}
$$

Daraus folgt:

$$
G = \left(\frac{u_a}{u_e}\right)^2 \frac{r_e}{R_L} = A_L^2 \frac{r_e}{R_L} = \frac{A^2 r_e R_L}{(r_a + R_L)^2}
\qquad (24.29)
$$

Eine entsprechende Berechnung für den Verstärker aus Abb. 24.49 führt auf:

$$
G =
\frac{|S_{21}|^2\,(1-|r_L|^2)}
{1-|S_{11}|^2+|r_L|^2\,(|S_{22}|^2-|\Delta_S|^2)-2\,\mathrm{Re}\{r_L\,(S_{22}-\Delta_S S_{11}^*)\}}
$$

$$
= \frac{|Y_{21}|^2\,\mathrm{Re}\{Y_L\}}
{\mathrm{Re}\left\{Y_{11}-\frac{Y_{12}Y_{21}}{Y_{22}Y_L}\right\}\,|Y_{22}+Y_L|^2}
\qquad (24.30)
$$

Der Klemmenleistungsgewinn hängt nicht von der Impedanz der Signalquelle ab und beinhaltet deshalb keine Aussage über die eingangsseitige Anpassung. Vergleicht man z.B. zwei Verstärker, die mit derselben Signalquelle und derselben Last dieselbe Wirkleistung an die Last abgeben, so erzielt der Verstärker mit der geringeren Eingangswirkleistung einen höheren Klemmenleistungsgewinn. Diese Eigenschaft ist im Zusammenhang mit Hochfrequenz-Verstärkern nicht sinnvoll; deshalb wird der Klemmenleistungsgewinn in der Hochfrequenztechnik nur selten verwendet.

14 Wir verwenden Effektivwerte; deshalb gilt $P = u^2/R$.
<!-- page-import:1411:end -->

<!-- page-import:1412:start -->
24.4 Kenngrößen von Hochfrequenz-Verstärkern 1375

#### 24.4.1.2 Einfügungsgewinn

Beim *Einfügungsgewinn* (*insertion gain*) werden die von der Last aufgenommenen Wirkleistungen mit und ohne Verstärker ins Verhältnis gesetzt:

$$
G_I \;=\; \frac{P_L}{P_{L,oV}} \;=\; \frac{\text{von der Last aufgenommene Wirkleistung mit Verstärker}}{\text{von der Last aufgenommene Wirkleistung ohne Verstärker}}
$$

Demnach ist $P_{L,oV}$ die Wirkleistung, die die Signalquelle direkt an die Last abgeben kann. Für den idealisierten Verstärker aus Abb. 24.48 gilt:

$$
P_L \;=\; \frac{u_a^2}{R_L}, \qquad P_{L,oV} \;=\; \frac{u_g^2\,R_L}{(R_g + R_L)^2}
$$

Daraus folgt:

$$
G_I \;=\; \left(\frac{u_a}{u_g}\right)^2 \left(\frac{R_g + R_L}{R_L}\right)^2 \;=\; A_B^2 \left(\frac{R_g + R_L}{R_L}\right)^2
$$

$$
=\; \left(\frac{r_e}{R_g + r_e}\right)^2 A^2 \left(\frac{R_g + R_L}{r_a + R_L}\right)^2
\qquad (24.31)
$$

Eine entsprechende Berechnung für den Verstärker aus Abb. 24.49 führt auf:

$$
G_I \;=\; \frac{|S_{21}|^2\,|1-r_g r_L|^2}{\left|(1-S_{11}r_g)(1-S_{22}r_L)-S_{12}S_{21}r_g r_L\right|^2}
$$

$$
=\; \frac{|Y_{21}|^2\,|Y_g+Y_L|^2}{\left|(Y_{11}+Y_g)(Y_{22}+Y_L)-Y_{12}Y_{21}\right|^2}
\qquad (24.32)
$$

Der Einfügungsgewinn hängt von der Impedanz der Signalquelle und der Last ab und berücksichtigt demnach die Anpassung am Eingang und am Ausgang. Das Maximum wird jedoch im allgemeinen nicht bei beidseitiger Anpassung erreicht. Wir verdeutlichen dies am Beispiel des idealisierten Verstärkers. Bei beidseitiger Anpassung gilt $R_g=r_e$ und $R_L=r_a$; durch Einsetzen in (24.31) folgt:

$$
G_{I,anp} \;=\; \left(\frac{1}{2}\right)^2 A^2 \left(\frac{R_g+R_L}{2R_L}\right)^2
$$

Daraus folgt, dass der Einfügungsgewinn trotz beidseitiger Anpassung vom Verhältnis $R_g/R_L$ abhängt; nur für den Spezialfall gleicher Widerstände am Eingang und am Ausgang, d.h. $R_g=r_e=r_a=R_L$, erhält man einen konstanten Einfügungsgewinn. Aufgrund dieser Eigenschaft wird der Einfügungsgewinn nur selten verwendet.

#### 24.4.1.3 Übertragungsgewinn

Der *Übertragungsgewinn* (*transducer gain*) gibt das Verhältnis aus der von der Last aufgenommenen Wirkleistung zur verfügbaren (Wirk-) Leistung der Signalquelle an$^{15}$:

$$
G_T \;=\; \frac{P_L}{P_{A,g}} \;=\; \frac{\text{von der Last aufgenommene Wirkleistung}}{\text{verfügbare Leistung der Signalquelle}}
$$

Für den idealisierten Verstärker aus Abb. 24.48 gilt:
<!-- page-import:1412:end -->

<!-- page-import:1413:start -->
1376  24. Hochfrequenz-Verstärker

$$
P_L=\frac{u_a^2}{R_L}, \qquad P_{A,g}=\frac{u_g^2}{4R_g}
$$

Daraus folgt:

$$
G_T=\left(\frac{u_a}{u_g}\right)^2\frac{4R_g}{R_L}
=A_B^2\frac{4R_g}{R_L}
=\left(\frac{r_e}{R_g+r_e}\right)^2A^2\frac{4R_gR_L}{(r_a+R_L)^2}
\qquad (24.33)
$$

Eine entsprechende Berechnung für den Verstärker aus Abb. 24.49 führt auf:

$$
G_T=
\frac{|S_{21}|^2\,(1-|r_g|^2)\,(1-|r_L|^2)}
{\left|(1-S_{11}r_g)\,(1-S_{22}r_L)-S_{12}S_{21}r_gr_L\right|^2}
$$

$$
=\frac{4\,|Y_{21}|^2\,\operatorname{Re}\{Y_g\}\,\operatorname{Re}\{Y_L\}}
{\left|(Y_{11}+Y_g)\,(Y_{22}+Y_L)-Y_{12}Y_{21}\right|^2}
\qquad (24.34)
$$

Der Übertragungsgewinn hängt von der Impedanz der Signalquelle und der Last ab und wird bei beidseitiger Anpassung maximal. Man zeigt dies mit Hilfe von (24.33):

$$
\frac{\partial G_T}{\partial R_g}=0 \, , \qquad \frac{\partial G_T}{\partial R_L}=0
\qquad \Longrightarrow \qquad R_g=r_e \, , \qquad R_L=r_a
$$

Damit erfüllt der Übertragungsgewinn die Anforderungen, die an eine sinnvolle Gewinn-Definition zu stellen sind.

## 24.4.1.4 Verfügbarer Leistungsgewinn

Beim *verfügbaren Leistungsgewinn* (*available power gain*) werden die verfügbaren Leistungen des Verstärkers und der Last ins Verhältnis gesetzt $^{15}$.

$$
G_A=\frac{P_{A,V}}{P_{A,g}}
=\frac{\text{verfügbare Leistung des Verstärkers}}{\text{verfügbare Leistung der Signalquelle}}
$$

Er wird auch als *verfügbare Leistungsverstärkung* bezeichnet. Für den idealisierten Verstärker aus Abb. 24.48 gilt:

$$
P_{A,V}=\frac{(Au_e)^2}{4r_a}, \qquad P_{A,g}=\frac{u_g^2}{4R_g}
$$

Daraus folgt:

$$
G_A=\left(\frac{Au_e}{u_g}\right)^2\frac{R_g}{r_a}
=\left(\frac{r_e}{R_g+r_e}\right)^2A^2\frac{R_g}{r_a}
\qquad (24.35)
$$

Eine entsprechende Berechnung für den Verstärker aus Abb. 24.49 führt auf:

$$
G_A=
\frac{|S_{21}|^2\,(1-|r_g|^2)}
{1-|S_{22}|^2+|r_g|^2\left(|S_{11}|^2-|\Delta_S|^2\right)-2\operatorname{Re}\left\{r_g\left(S_{11}-\Delta_S S_{22}^*\right)\right\}}
$$

$$
=\frac{|Y_{21}|^2\,\operatorname{Re}\{Y_g\}}
{\operatorname{Re}\left\{((Y_{11}+Y_g)Y_{22}-Y_{12}Y_{21})\,(Y_{11}+Y_g)^*\right\}}
\qquad (24.36)
$$

---

$^{15}$ Die verfügbare Leistung ist per Definition eine Wirkleistung und muss deshalb nicht explizit als Wirkleistung bezeichnet werden.
<!-- page-import:1413:end -->

<!-- page-import:1414:start -->
24.4 Kenngrößen von Hochfrequenz-Verstärkern 1377

Der verfügbare Leistungsgewinn hängt nicht von der Last ab und beinhaltet deshalb keine Aussage über die ausgangsseitige Anpassung. Er wird für Rauschberechnungen benötigt, da diese auf der Basis von verfügbaren Leistungen durchgeführt werden. Wir haben den verfügbaren Leistungsgewinn bereits im Abschnitt 4.2.4 zur Berechnung der Rauschzahl einer Reihenschaltung von Verstärkern eingesetzt, siehe (4.203) und (4.204) auf Seite 472.

##### 24.4.1.5 Vergleich der Gewinn-Definitionen

Die speziellen Eigenschaften der einzelnen Gewinn-Definitionen haben wir bereits in den jeweiligen Abschnitten angegeben; wir beschränken uns hier deshalb auf einen kurzen Vergleich.

Der Klemmenleistungsgewinn $G$ spielt bei Hochfrequenz-Verstärkern keine Rolle, da man die verfügbare Leistung der Signalquelle möglichst gut nutzen will und die dazu nötige eingangsseitige Anpassung nicht in den Klemmenleistungsgewinn eingeht. Er wird vielmehr maximal, wenn der Verstärker möglichst wenig Leistung von der Signalquelle aufnimmt, d.h. die Anpassung möglichst schlecht ist. Bei Niederfrequenz-Verstärkern ist der Klemmenleistungsgewinn relevant, da man in diesem Fall die Signalquelle möglichst wenig belasten will, um eine möglichst hohe Spannungsverstärkung zu erzielen; bei Hochfrequenz-Verstärkern ist eine derartige Fehlanpassung aufgrund der damit verbundenen Reflexionen unerwünscht.

Der Einfügungsgewinn $G_I$ ist im Zusammenhang mit angepassten Verstärkern keine sinnvolle Größe. Wir erläutern dies am Beispiel des idealisierten Verstärkers aus Abb. 24.48. Bei beidseitiger Anpassung und verschiedenen Widerständen am Eingang und Ausgang liegt bei direkter Verbindung von Signalquelle und Last eine Fehlanpassung vor, die man in der Praxis mit einem Anpassnetzwerk beheben würde; deshalb sind die beiden Betriebsfälle, die bei der Definition des Einfügungsgewinns verglichen werden, in diesem Fall keine praktischen, sondern nur theoretische Alternativen. Bei beidseitiger Anpassung und gleichen Widerständen am Eingang und am Ausgang liegt auch bei direkter Verbindung von Signalquelle und Last Anpassung vor ($R_g = R_L$); in diesem Fall wird jedoch die verfügbare Leistung der Signalquelle an die Last abgegeben und der Einfügungsgewinn $G_I$ entspricht dem Übertragungsgewinn $G_T$.

Der Übertragungsgewinn $G_T$ ist aufgrund seiner Eigenschaften der bevorzugt verwendete Gewinn in der Hochfrequenztechnik; man spricht dann nur vom Gewinn oder der Verstärkung. Wir empfehlen die Verwendung der Bezeichnung Gewinn. Die Bezeichnung Verstärkung ist irreführend und nur bei beidseitiger Anpassung und gleichen Widerständen am Eingang und Ausgang korrekt; in diesem Fall sind die Spannungs- und die Stromverstärkung sowie der Übertragungsgewinn in Dezibel gleich.

Der verfügbare Leistungsgewinn $G_A$ wird, wie bereits erwähnt, für Rauschberechnungen benötigt; darüber hinaus hat er keine Bedeutung.

##### 24.4.1.6 Gewinn bei beidseitiger Anpassung

Im beidseitig angepassten Fall und bei gleichen Widerständen am Eingang und Ausgang gilt für den idealisierten Verstärker aus Abb. 24.48 $R_g = r_e = r_a = R_L = Z_W$; in diesem Fall sind alle Gewinn-Definitionen identisch:

$$
G = G_I = G_T = G_A = \frac{A^2}{4} = 4\,A_B^2
\qquad\qquad (24.37)
$$

Dies gilt auch für einen allgemeinen Verstärker. Man kann dies durch einen Vergleich der Gleichungen auf der Basis der S- und Y-Parameter unter Berücksichtigung der jeweiligen
<!-- page-import:1414:end -->

<!-- page-import:1415:start -->
1378  24. Hochfrequenz-Verstärker

Anpassungsbedingungen zeigen; aufgrund des Umfangs der erforderlichen Berechnungen verzichten wir auf einen Beweis.

Bei Verwendung der S-Parameter gilt für einen beidseitig angepassten Verstärker mit $R_g = R_L = Z_W$:

$$
S_{11} = S_{22} = r_g = r_L = 0 \quad \Rightarrow \quad G = G_I = G_T = G_A = |S_{21}|^2
$$

Man erhält einen einfachen Zusammenhang, weil die Messbedingung $R_L = Z_W$ für die Ermittlung von $S_{21}$ gleich der Betriebsbedingung ist.

Bei Verwendung der Y-Parameter liegt eine beidseitige Anpassung an $1/Y_g = 1/Y_L = Z_W$ genau dann vor, wenn die Bedingungen $^{16}$

$$
Y_{11} = Y_{22} \quad , \quad (Y_{11}Y_{22} - Y_{12}Y_{21})\, Z_W^2 = 1
$$

(24.38)

erfüllt sind; dann gilt:

$$
G = G_I = G_T = G_A = \frac{|Y_{21}|^2 Z_W^2}{|1 + \dot{Y}_{11} Z_W|^2}
$$

(24.39)

Bei einem Verstärker ohne Rückwirkung gilt $Y_{12} = 0$; dann folgt aus den obigen Bedingungen $Y_{11} = Y_{22} = 1/Z_W$, d.h. der Eingangswiderstand $r_e = 1/Y_{11}$ und der Ausgangswiderstand $r_a = 1/Y_{22}$ müssen gleich dem Wellenwiderstand $Z_W$ sein. Dieser Fall entspricht dem idealisierten Verstärker aus Abb. 24.48, für den man für den Fall $R_g = R_L = Z_W$ die Anpassungsbedingungen $r_e = Z_W$ und $r_a = Z_W$ unmittelbar entnehmen kann.

## 24.4.1.7 Maximaler Leistungsgewinn bei Transistoren

Im Abschnitt 24.2 haben wir beschrieben, dass ein verallgemeinerter Einzeltransistor beidseitig angepasst werden kann, wenn für den Stabilitätsfaktor

$$
k = \frac{1 + |S_{11}S_{22} - S_{12}S_{21}|^2 - |S_{11}|^2 - |S_{22}|^2}{2\,|S_{12}S_{21}|} \; > \; 1
$$

(24.40)

gilt und die Nebenbedingungen

$$
|S_{12}S_{21}| < 1 - |S_{11}|^2 \quad , \quad |S_{12}S_{21}| < 1 - |S_{22}|^2
$$

(24.41)

erfüllt sind; dabei sind $S_{11}, \ldots, S_{22}$ die S-Parameter des Transistors. Für die Y-Parameter muss

$$
k = \frac{2\,\mathrm{Re}\,\{Y_{11}\}\,\mathrm{Re}\,\{Y_{22}\} - \mathrm{Re}\,\{Y_{12}Y_{21}\}}{|Y_{12}Y_{21}|} \; > \; 1
$$

(24.42)

und

$$
\mathrm{Re}\,\{Y_{11}\} \geq 0 \quad , \quad \mathrm{Re}\,\{Y_{22}\} \geq 0
$$

(24.43)

gelten.

### 24.4.1.7.1 Maximaler verfügbarer Leistungsgewinn

Für den Transistor einschließlich der Anpassnetzwerke gilt im beidseitig angepassten Fall $S_{11,a} = S_{22,a} = 0$, siehe Abb. 24.50. Der zugehörige Leistungsgewinn wird maximaler verfügbarer Leistungsgewinn (maximum available power gain) genannt und ist durch

$$
MAG = |S_{21,a}|^2 = \left|\frac{S_{21}}{S_{12}}\right| \left(k - \sqrt{k^2 - 1}\right) = \left|\frac{Y_{21}}{Y_{12}}\right| \left(k - \sqrt{k^2 - 1}\right)
$$

(24.44)
<!-- page-import:1415:end -->

<!-- page-import:1416:start -->
24.4 Kenngrößen von Hochfrequenz-Verstärkern 1379

$|S_{21,a}|^2 = MAG$

$S_{11}, S_{12}, S_{21}, S_{22},$
$k > 1$

$R_g = Z_W$

Anpass-
netzwerk

$r_{g,a}$

Anpass-
netzwerk

$r_{L,a}$

$R_L = Z_W$

$u_g$

$S_{11,a} = 0$

$S_{22,a} = 0$

**Abb. 24.50.** Maximaler verfügbarer Leistungsgewinn $MAG$ bei einem beidseitig angepassten Verstärkerentmag

gegeben [24.1]. Er ist bei hohen Frequenzen umgekehrt proportional zum Quadrat der Frequenz: $MAG \sim 1/f^2$; dem entspricht ein Abfall mit 20 dB/Dekade. Ursache dafür ist die Frequenzabhängigkeit der S- bzw. Y-Parameter.

#### 24.4.1.7.2 Maximaler stabiler Leistungsgewinn

Bei Frequenzen oberhalb etwa einem Viertel der Transitfrequenz sind die Bedingungen für eine beidseitige Anpassung üblicherweise erfüllt. Unterhalb dieses Bereichs wird $k < 1$, d.h. eine beidseitige Anpassung ist nicht mehr möglich; in diesem Fall ist auch der maximale verfügbare Leistungsgewinn nicht mehr definiert. Man kann dann nur noch den maximalen stabilen Gewinn (maximum stable power gain)

$$
MSG = \left| \frac{S_{21}}{S_{12}} \right| = \left| \frac{Y_{21}}{Y_{12}} \right|
\qquad (24.45)
$$

erzielen [24.1]. Er ist bei niedrigen Frequenzen näherungsweise umgekehrt proportional zur Frequenz: $MSG \sim 1/f$; dem entspricht ein Abfall mit 10 dB/Dekade. Mit Annäherung an die Frequenz mit $k = 1$ nimmt der Abfall auf 20 dB/Dekade zu; dadurch ergibt sich ein glatter Übergang zwischen $MSG$ und $MAG$.

#### 24.4.1.7.3 Unilateraler Leistungsgewinn

Der höchste zu erzielende Leistungsgewinn ist der unilaterale Leistungsgewinn (unilateral power gain):

$$
U = \frac{\frac{1}{2}\left| \frac{S_{21}}{S_{12}} - 1 \right|^2}{k \left| \frac{S_{21}}{S_{12}} \right| - \operatorname{Re}\left\{ \frac{S_{21}}{S_{12}} \right\}}
= \frac{|Y_{21} - Y_{12}|^2}{4\left( \operatorname{Re}\{Y_{11}\}\operatorname{Re}\{Y_{22}\} - \operatorname{Re}\{Y_{12}Y_{21}\}\right)}
\qquad (24.46)
$$

Dabei wird vorausgesetzt, dass der Transistor mit einer geeigneten Schaltung neutralisiert, d.h. rückwirkungsfrei gemacht, wird; er arbeitet dann unilateral. Schaltungen zur Neutralisation werden im Abschnitt 24.2 beschrieben. Der unilaterale Leistungsgewinn ist bei hohen Frequenzen näherungsweise umgekehrt proportional zum Quadrat der Frequenz: $U \sim 1/f^2$; dem entspricht ein Abfall mit 20 dB/Dekade.

---

$^{16}$ Diese Bedingungen erhält man, indem man die Y-Parameter gemäß Abb. 21.41 auf Seite 1181 aus den S-Parametern berechnet und dabei $S_{11} = S_{22} = 0$ berücksichtigt.
<!-- page-import:1416:end -->

<!-- page-import:1417:start -->
1380  24. Hochfrequenz-Verstärker

Abb. 24.51. Maximale Leistungsgewinne für den Transistor BFR93 bei $U_{CE,A} = 5\,\mathrm{V}$ und $I_{C,A} = 30\,\mathrm{mA}$

## 24.4.1.7.4 Grenzfrequenzen

Der maximale verfügbare Leistungsgewinn MAG nimmt bei der Transitfrequenz $f_T$ des Transistors den Wert Eins bzw. 0 dB an. Der unilaterale Leistungsgewinn $U$ ist auch oberhalb der Transitfrequenz noch größer als Eins, da in diesem Fall die Rückwirkung beseitigt ist. Die Frequenz, bei der $U$ den Wert Eins bzw. 0 dB annimmt, wird maximale Schwingfrequenz $f_{max}$ genannt. Sie ist die maximale Frequenz, bei der der Transistor als Oszillator betrieben werden kann.

*Beispiel:* Abbildung 24.51 zeigt die maximalen Leistungsgewinne für den Transistor BFR93 bei $U_{CE,A} = 5\,\mathrm{V}$ und $I_{C,A} = 30\,\mathrm{mA}$. Der maximal verfügbare Leistungsgewinn MAG ist nur für $f > 500\,\mathrm{MHz}$ definiert, da nur hier der Stabilitätsfaktor $k$ größer als Eins ist. Er nimmt mit 20 dB/Dek. ab und wird bei der Transitfrequenz $f_T = 5\,\mathrm{GHz}$ zu Eins bzw. 0 dB. Für $f < 500\,\mathrm{MHz}$ wird der maximale stabile Leistungsgewinn MSG erzielt, der bei niedrigen Frequenzen mit 10 dB/Dek. abnimmt. Der unilaterale Leistungsgewinn $U$ ist bei hohen Frequenzen etwa um 7,5 dB größer als MAG und wird bei $f_{max} = 12\,\mathrm{GHz}$ zu Eins bzw. 0 dB.

Bei Transistoren mit Transitfrequenzen über 20 GHz ist die Kollektor-Basis-Kapazität $C_C$ bzw. die Gate-Drain-Kapazität $C_{GD}$ üblicherweise so weit reduziert, dass der Transistor bereits ohne Neutralisierung näherungsweise als rückwirkungsfrei angesehen werden kann; dann ist die maximale Schwingfrequenz $f_{max}$ nur noch geringfügig höher als die Transitfrequenz $f_T$.

## 24.4.2 Nichtlineare Kenngrößen

Im Abschnitt 4.2.3 haben wir das nichtlineare Verhalten von Verstärkern mit Hilfe einer Reihenentwicklung der Betriebs-Übertragungskennlinie beschrieben. Wir haben gezeigt, dass bei Verstärkern in Systemen mit Bandpassfiltern die im Abschnitt 4.2.3.6 beschriebenen Intermodulationsverzerrungen maßgebend sind; dagegen spielt der Klirrfaktor keine Rolle, da die Oberwellen der Signale außerhalb des Durchlassbereichs liegen. Das nichtlineare Verhalten der Grundwelle wird durch den Kompressionspunkt, das der Intermodulationsprodukte durch die Intercept-Punkte beschrieben.
<!-- page-import:1417:end -->

<!-- page-import:1418:start -->
24.4 Kenngrößen von Hochfrequenz-Verstärkern 1381

**Abb. 24.52.** Betriebsbedingungen eines Hochfrequenz-Verstärkers im relevanten Frequenzbereich (Durchlassbereich)

Zur Beschreibung von Hochfrequenz-Verstärkern sind einige Erweiterungen nötig, auf die wir im folgenden eingehen. Wir setzen dabei die Ausführungen im Abschnitt 4.2.3 als bekannt voraus und empfehlen, ggf. dort nachzulesen.

#### 24.4.2.1 Betriebsbedingungen

Abbildung 24.52 zeigt die Betriebsbedingungen eines Hochfrequenz-Verstärkers. Hochfrequenz-Verstärker werden angepasst betrieben, d.h. Ein- und Ausgangswiderstand entsprechen im relevanten Frequenzbereich (Durchlassbereich) dem Wellenwiderstand $Z_W$ der verwendeten Leitungen. Die Verbindung mit der Signalquelle und der Last wird über Leitungen mit dem Wellenwiderstand $Z_W$ hergestellt. Diese Leitungen sind oft nicht elektrisch kurz, d.h. die Länge der Leitungen ist nicht wesentlich geringer als die Wellenlänge; daraus folgt, dass diese Leitungen eine zur Länge proportionale Phasenverschiebung verursachen. Diese Phasenverschiebung ist im allgemeinen nicht störend, führt aber dazu, dass die Phasenverhältnisse der Signale nicht nur vom Verstärker, sondern von der ganzen Anordnung abhängen.

#### 24.4.2.2 Kennlinien eines Hochfrequenz-Verstärkers

Ein Hochfrequenz-Verstärker kann durch nichtlineare Kennlinien beschrieben werden. Diese Kennlinien hängen von der Frequenz ab und beschreiben nicht nur die Amplitude, sondern auch die Phase des Ausgangssignals. Ursache dafür ist die Frequenzabhängigkeit des Verstärkers und der Anpassnetzwerke am Eingang und am Ausgang.

##### 24.4.2.2.1 Grundwellen-Übertragungsfunktion

Bei Ansteuerung mit einem Einton-Signal

$$
u_g(t) = \hat{u}_g \cos(\omega_0 t + \varphi_g)
$$

erhält man am Ausgang:

$$
u_a(t) = \hat{u}_a \cos(\omega_0 t + \varphi_a) + \dots\dots\dots\dots
$$

Grundwelle  Oberwellen

Die Oberwellen liegen im Normalfall außerhalb des Durchlassbereichs und werden deshalb nicht weiter betrachtet. Die Amplitude $\hat{u}_a$ und die Phase $\varphi_a$ des Ausgangssignals hängen von der Amplitude $\hat{u}_g$ und von der Frequenz $\omega_0$ des Generatorsignals ab:

$$
\hat{u}_a = \hat{u}_a(\hat{u}_g, \omega_0), \qquad \varphi_a = \varphi_a(\hat{u}_g, \omega_0)
$$

Stellt man die Signale mit Hilfe der komplexen Effektivwert-Zeiger

$$
\underline{u}_g = \frac{\hat{u}_g}{\sqrt{2}} e^{j\varphi_g}, \qquad
\underline{u}_a = \frac{\hat{u}_a(\hat{u}_g,\omega_0)}{\sqrt{2}} e^{j\varphi_a(\hat{u}_g,\omega_0)}
$$
<!-- page-import:1418:end -->

<!-- page-import:1419:start -->
1382  24. Hochfrequenz-Verstärker

dar und bildet den Quotienten der Zeiger, erhält man die Übertragungsfunktion

$$
\frac{\underline{u}_a}{\underline{u}_g}
=
\frac{\hat{u}_a(\hat{u}_g,\omega_0)}{\hat{u}_g}
\, e^{j\left(\varphi_a(\hat{u}_g,\omega_0)-\varphi_g\right)}
$$

für die Amplitude $\hat{u}_g$ und die Frequenz $\omega_0$. Verwendet man zur Beschreibung der Abhängigkeiten anstelle der Amplituden die Effektivwerte $u_g = |\underline{u}_g|$ und $u_a = |\underline{u}_a|$ und setzt die allgemeine Frequenz $\omega$ ein, erhält man die aussteuerungs- und frequenzabhängige Grundwellen-Übertragungsfunktion:

$$
H(u_g,\omega)
=
\frac{\underline{u}_a(u_g,\omega)}{\underline{u}_g}
=
\frac{u_a(u_g,\omega)}{u_g}
\, e^{j\left(\varphi_a(u_g,\omega)-\varphi_g\right)}
\qquad (24.47)
$$

Sie wird auch Beschreibungsfunktion (describing function) genannt und beschreibt das Einton-Verhalten eines Verstärkers vollständig.

#### 24.4.2.2.2 Verstärkungs-, AM/AM- und AM/PM-Kennlinie

Wird der Verstärker schmalbandig betrieben, kann man die Frequenzabhängigkeit im Durchlassbereich vernachlässigen und anstelle der Frequenz $\omega$ die Mittenfrequenz $\omega_M$ einsetzen; die Grundwellen-Übertragungsfunktion hängt dann nur noch von der Aussteuerung ab:

$$
H_{\omega_M}(u_g)
=
H(u_g,\omega)\big|_{\omega=\omega_M}
=
\frac{u_a(u_g)}{u_g}
\, e^{j\left(\varphi_a(u_g)-\varphi_g\right)}
$$

Der Betrag dieser Übertragungsfunktion wird Verstärkungskennlinie genannt:

$$
A_B(u_g)
=
\frac{u_a(u_g)}{u_g}
\qquad (24.48)
$$

Bei Leistungsverstärkern wird anstelle der Verstärkungskennlinie die AM/AM-Kennlinie angegeben:

$$
f_{AM}(u_g)
=
u_a(u_g)
=
A_B(u_g)\,u_g
\qquad (24.49)
$$

Da die absolute Phase von der Länge der Leitungen abhängt, verwendet man die Phase bei Kleinsignalaussteuerung ($u_g \to 0$) als Referenzphase und bezeichnet die aussteuerungsabhängige Abweichung von der Kleinsignalphase als AM/PM-Kennlinie:

$$
f_{PM}(u_g)
=
\varphi_a(u_g)
-
\lim_{u_g \to 0}\varphi_a(u_g)
\qquad (24.50)
$$

Bei der Darstellung der Kennlinien werden häufig nicht die Effektivwerte, sondern die Leistungen verwendet; dabei wird anstelle des Effektivwerts $u_g$ die verfügbare Leistung

$$
P_{A,g}
=
\frac{u_g^2}{4R_g}
\qquad R_g = Z_W \qquad
=
\frac{u_g^2}{4Z_W}
$$

des Generators und anstelle des Effektivwerts $u_a$ die von der Last aufgenommene Leistung

$$
P_L
=
\frac{u_a^2}{R_L}
\qquad R_L = Z_W \qquad
=
\frac{u_a^2}{Z_W}
$$

verwendet. Das Verhältnis dieser Leistungen entspricht dem Übertragungsgewinn $G_T$, den wir im Abschnitt 24.4.1.3 auf Seite 1375 beschrieben haben. Die Leistungen werden in dBm angegeben:
<!-- page-import:1419:end -->

<!-- page-import:1420:start -->
24.4 Kenngrößen von Hochfrequenz-Verstärkern 1383

$$
P_{A,g}\,[\mathrm{dBm}] = 10\,\mathrm{dBm}\cdot \log\!\left(\frac{P_{A,g}}{1\,\mathrm{mW}}\right)\quad \overset{Z_W=50\,\Omega}{=}\quad 20\,\mathrm{dBm}\cdot \log\!\frac{u_g}{1\,\mathrm{V}} + 7\,\mathrm{dB}
\qquad (24.51)
$$

$$
P_L\,[\mathrm{dBm}] = 10\,\mathrm{dBm}\cdot \log\!\left(\frac{P_L}{1\,\mathrm{mW}}\right)\quad \overset{Z_W=50\,\Omega}{=}\quad 20\,\mathrm{dBm}\cdot \log\!\frac{u_a}{1\,\mathrm{V}} + 13\,\mathrm{dB}
\qquad (24.52)
$$

Dabei führt der Faktor 4 im Nenner der verfügbaren Leistung $P_{A,g}$ bei der Umrechnung von $u_g$ nach $P_{A,g}$ zu einem Verlust von $6\,\mathrm{dB}$; deshalb erhält man hier $+7$ anstelle von $+13$. Umgekehrt gilt:

$$
u_g \quad \overset{Z_W=50\,\Omega}{=} \quad 1\,\mathrm{V}\cdot 10^{\frac{P_{A,g}\,[\mathrm{dBm}]-7\,\mathrm{dB}}{20\,\mathrm{dBm}}}
\qquad (24.53)
$$

$$
u_a \quad \overset{Z_W=50\,\Omega}{=} \quad 1\,\mathrm{V}\cdot 10^{\frac{P_L\,[\mathrm{dBm}]-13\,\mathrm{dB}}{20\,\mathrm{dBm}}}
\qquad (24.54)
$$

Der Bezug auf die verfügbare Leistung des Generators ist wichtig, da die Anpassung am Eingang mit zunehmender Aussteuerung immer schlechter wird; dadurch wird die vom Verstärker tatsächlich aufgenommene Leistung geringer als die verfügbare Leistung des Generators $^{17}$.

Abbildung 24.53 zeigt die Kennlinien des Verstärkers aus Abb. 24.33 auf Seite 1355. Die Verstärkungskennlinie eignet sich gut zur Darstellung der Abweichung vom linearen Verhalten im Bereich geringer und mittlerer Aussteuerung. Diesen Bereich haben wir im Abschnitt 4.2.3 als *quasi-linearen Bereich* bezeichnet. Dagegen eignet sich die AM/AM-Kennlinie besser zur Darstellung des Verhaltens bei *schwacher und starker Übersteuerung*. Deshalb wird bei Kleinsignalverstärkern bevorzugt die Verstärkungskennlinie und bei Leistungsverstärkern bevorzugt die AM/AM-Kennlinie dargestellt.

## 24.4.2.3 Kleinsignalverstärkung

Bei geringer Aussteuerung arbeitet der Verstärker mit der *Kleinsignalverstärkung*:

$$
A_{B,0} = \lim_{u_g\to 0} A_B(u_g)
$$

Der zugehörige Gewinn wird *Kleinsignal-Übertragungsgewinn* genannt:

$$
G_{T,0} = \lim_{P_{A,g}\to 0} G_T = \lim_{P_{A,g}\to 0} \frac{P_L}{P_{A,g}} = A_{B,0}^2
\qquad (24.55)
$$

In Dezibel sind beide Werte gleich:

$$
G_{T,0}\,[\mathrm{dB}] = 10\,\mathrm{dB}\cdot \log G_{T,0} = 20\,\mathrm{dB}\cdot \log A_{B,0} = A_{B,0}\,[\mathrm{dB}]
$$

*Beispiel:* Aus Abb. 24.53 entnimmt man $G_{T,0}=7{,}3\,\mathrm{dB}=5{,}4$; daraus folgt mit (24.55) $A_{B,0}=2{,}3$.

---

$^{17}$ In der Literatur wird oft nur von der *Eingangsleistung* $P_{in}$ des Verstärkers gesprochen, ohne dass klar wird, ob die *ideale Eingangsleistung* bei Anpassung (= verfügbare Leistung des Generators) oder die *tatsächliche* Eingangsleistung gemeint ist. Wir weisen hier noch einmal ausdrücklich darauf hin, dass die verfügbare Leistung des Generators verwendet werden muss; nur dann entspricht die Verstärkung dem *Übertragungsgewinn*, den wir im Abschnitt 24.4.1 als einzig sinnvolle Gewinn-Definition identifiziert haben. Auch für die Messung der Kennlinien ist dies bedeutsam, da man bei HF-Signalgeneratoren die verfügbare Leistung direkt einstellt, während die tatsächliche Eingangsleistung des Verstärkers nur mit einem Richtkoppler und einer separaten Messung der Leistungen der einfallenden und der reflektierten Welle ermittelt werden kann.
<!-- page-import:1420:end -->

<!-- page-import:1421:start -->
1384  24. Hochfrequenz-Verstärker

a Verstärkungskennlinie (Übertragungsgewinn $G_T$)

b AM/AM- und AM/PM-Kennlinie

**Abb. 24.53.** Kennlinien des Verstärkers aus Abb. 24.33 auf Seite 1355 ($f_M = 1880\,\mathrm{MHz}$)

## 24.4.2.4 Kompressionspunkt

Am 1dB-Kompressionspunkt hat die Verstärkung im Vergleich zur Kleinsignalverstärkung um 1 dB abgenommen; daraus folgt für den eingangsseitigen Kompressionspunkt $u_{g,Komp}$

$$
A_B(u_{g,Komp}) = 10^{-1/20} A_{B,0} = 0{,}89 A_{B,0}
$$

und für den ausgangsseitigen Kompressionspunkt $u_{a,Komp}$:

$$
u_{a,Komp} = u_a(u_{g,Komp}) = A_B(u_{g,Komp})\,u_{g,Komp} = 0{,}89\,A_{B,0}\,u_{g,Komp}
$$

Diese Zusammenhänge haben wir bereits im Abschnitt 4.2.3.5 auf Seite 450 vorgestellt. Wir verwenden hier jedoch die Effektivwerte $u_{g,Komp}$ und $u_{a,Komp}$ anstelle der Amplituden $\hat{u}_{g,Komp}$ und $\hat{u}_{a,Komp}$. Aus den Effektivwerten erhält man mit (24.51) und (24.52) die zugehörigen Leistungen $P_{A,g(Komp)}$ und $P_L{}_{(Komp)}$ in dBm; dabei gilt:

$$
P_{L(Komp)}\;[\mathrm{dBm}] = P_{A,g(Komp)}\;[\mathrm{dBm}] + G_{T,0}\;[\mathrm{dB}] - 1\;\mathrm{dB}
$$

(24.56)

*Beispiel:* In Abb. 24.53 liegt der eingangsseitige Kompressionspunkt bei $P_{A,g(Komp)} = 1{,}7\,\mathrm{dBm}$ und der ausgangsseitige Kompressionspunkt bei $P_{L(Komp)} = 8\,\mathrm{dBm}$. Daraus
<!-- page-import:1421:end -->

<!-- page-import:1422:start -->
24.4 Kenngrößen von Hochfrequenz-Verstärkern 1385

Abb. 24.54. Intermodulationskennlinien des Verstärkers aus Abb. 24.33 auf Seite 1355

erhält man mit (24.53) und (24.54) die zugehörigen Effektivwerte $u_{g,Komp} = 0{,}54\ \mathrm{V}$ und $u_{a,Komp} = 0{,}56\ \mathrm{V}$. Die Amplituden $\hat{u}_{g,Komp}$ und $\hat{u}_{a,Komp}$ sind um den Faktor $\sqrt{2}$ größer.

Wir erinnern hier noch einmal daran, dass sich die Umrechnungsformeln (24.53) und (24.54) aufgrund des zusätzlichen Faktors 4 im Nenner der verfügbaren Leistung $P_{A,g}$ unterscheiden.

### 24.4.2.5 Intermodulation

Die *Intermodulation* haben wir bereits im Abschnitt 4.2.3.6 auf Seite 451 beschrieben. Alle Zusammenhänge und Größen gelten für Hochfrequenz-Verstärker in gleicher Weise. Wir gehen hier jedoch nicht von einer Reihenentwicklung der Betriebs-Übertragungskennlinie aus, sondern entnehmen die *Intermodulationsabstände* und die *Intercept-Punkte* aus den gemessenen *Intermodulationskennlinien*; gleichzeitig verwenden wir auch hier wieder die Effektivwerte bzw. die Leistungen in dBm anstelle der Amplituden.

#### 24.4.2.5.1 Intermodulationskennlinien

Abbildung 24.54 zeigt die *Intermodulationskennlinien* des Verstärkers aus Abb. 24.33 auf Seite 1355. Man erhält die typischen, bereits in Abb. 4.151 auf Seite 455 gezeigten Verläufe im *quasi-linearen Bereich* und im *Bereich schwacher Übersteuerung*. Der *Bereich starker Übersteuerung* wird bei Hochfrequenz-Verstärkern nicht vermessen, da die Anpassung in diesem Bereich sehr schlecht ist und der Verstärker durch die dabei auftretenden hohen Stehwellenverhältnisse zerstört werden kann.

#### 24.4.2.5.2 Intercept-Punkte und Intermodulationsabstände

Die *Eingangs-Intercept-Punkte* $P_{A,g(IP3)}$ und $P_{A,g(IP5)}$ und die zugehörigen *Ausgangs-Intercept-Punkte* $P_{L(IP3)}$ und $P_{L(IP5)}$ erhält man durch Extrapolation der gemessenen Verläufe im quasi-linearen Bereich. Daraus kann man mit (24.53) die Effektivwerte $u_{g,IP3}$
<!-- page-import:1422:end -->
