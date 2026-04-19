# 1.1 Verhalten einer Diode

Das Verhalten einer Diode lässt sich am einfachsten anhand der Kennlinie aufzeigen. Sie beschreibt den Zusammenhang zwischen Strom und Spannung für den Fall, dass alle Größen *statisch*, d.h. nicht oder nur sehr langsam zeitveränderlich sind. Für eine rechnerische Behandlung werden zusätzlich Gleichungen benötigt, die das Verhalten ausreichend genau beschreiben. In den meisten Fällen kann man mit einfachen Gleichungen arbeiten. Darüber hinaus gibt es ein Modell, das auch das *dynamische Verhalten* bei Ansteuerung mit sinus- oder pulsförmigen Signalen richtig wiedergibt. Dieses Modell wird im Abschnitt 1.3 beschrieben und ist für ein grundsätzliches Verständnis nicht nötig. Im folgenden wird primär das Verhalten einer Silizium-pn-Diode beschrieben.

## 1.1.1 Kennlinie

Legt man an eine Silizium-pn-Diode eine Spannung \(U_D = U_{AK}\) an und misst den Strom \(I_D\), positiv von A nach K gezählt, erhält man die in Abb. 1.2 gezeigte Kennlinie. Man beachte, dass der Bereich positiver Spannungen stark vergrößert dargestellt ist. Für \(U_D > 0\ \mathrm{V}\) arbeitet die Diode im *Durchlassbereich*. Hier nimmt der Strom mit zunehmender Spannung exponentiell zu; ein nennenswerter Strom fließt für \(U_D > 0{,}4\ \mathrm{V}\). Für \(-U_{BR} < U_D < 0\ \mathrm{V}\) sperrt die Diode und es fließt nur ein vernachlässigbar kleiner Strom; dieser Bereich wird *Sperrbereich* genannt. Die *Durchbruchspannung* \(U_{BR}\) hängt von der Diode ab und beträgt bei Gleichrichterdioden \(U_{BR} = 50 \dots 1000\ \mathrm{V}\). Für \(U_D < -U_{BR}\) bricht die Diode durch und es fließt ebenfalls ein Strom. Nur Z-Dioden werden dauerhaft in diesem *Durchbruchbereich* betrieben; bei allen anderen Dioden ist der Stromfluß bei negativen Spannungen unerwünscht. Bei Germanium- und bei Schottky-Dioden fließt im Durchlassbereich bereits für \(U_D > 0{,}2\ \mathrm{V}\) ein nennenswerter Strom und die Durchbruchspannung \(U_{BR}\) liegt bei \(10 \dots 200\ \mathrm{V}\).

Im Durchlassbereich ist die Spannung bei typischen Strömen aufgrund des starken Anstiegs der Kennlinie näherungsweise konstant. Diese Spannung wird *Flussspannung* (*forward voltage*) \(U_F\) genannt und liegt bei Germanium- und Schottky-Dioden bei \(U_{F,Ge} \approx U_{F,Schottky} \approx 0{,}3 \dots 0{,}4\ \mathrm{V}\) und bei Silizium-pn-Dioden bei \(U_{F,Si} \approx 0{,}6 \dots 0{,}7\ \mathrm{V}\). Bei Leistungsdioden kann sie bei Strömen im Ampere-Bereich auch deutlich größer sein, da zusätzlich zur *inneren* Flussspannung ein nicht zu vernachlässigender Spannungsabfall an

\(I_D\)  
mA

Schottky Silizium-*pn*

\(U_D\)  
V

\(-U_{BR}\)

\(-150\) \(-100\) \(-50\) 0,2 0,4 0,6 0,8 1,0

2,0  
1,5  
1,0  
0,5  
-0,5  
-1,0

**Abb. 1.2.** Strom-Spannungs-Kennlinie einer Kleinsignal-Diode
<!-- page-import:0041:end -->

<!-- page-import:0042:start -->
1.1 Verhalten einer Diode 5

**Abb. 1.3.**  
Kennlinie einer Kleinsignal-  
Diode im Sperrbereich

den Bahn- und Anschlusswiderständen der Diode auftritt: \(U_F = U_{F,i} + I_D\,R_B\). Im Grenzfall \(I_D \to \infty\) verhält sich die Diode wie ein sehr kleiner Widerstand mit \(R_B \approx 0{,}01 \dots 10\,\Omega\).

Abbildung 1.3 zeigt eine Vergrößerung des Sperrbereichs. Der *Sperrstrom* (*reverse current*) \(I_R = -I_D\) ist bei kleinen Sperrspannungen \(U_R = -U_D\) sehr klein und nimmt bei Annäherung an die Durchbruchspannung zunächst langsam und bei Eintritt des Durchbruchs schlagartig zu.

## 1.1.2 Beschreibung durch Gleichungen

Trägt man die Kennlinie für den Bereich \(U_D > 0\) halblogarithmisch auf, erhält man näherungsweise eine Gerade, siehe Abb. 1.4; daraus folgt wegen \(\ln I_D \sim U_D\) ein exponentieller Zusammenhang zwischen \(I_D\) und \(U_D\). Eine Berechnung auf der Basis halbleiterphysikalischer Grundlagen liefert [1.1]:

\[
I_D(U_D) = I_S \left(e^{\frac{U_D}{U_T}} - 1\right)
\qquad \text{für } U_D \geq 0
\]

Zur korrekten Beschreibung realer Dioden muss ein Korrekturfaktor eingeführt werden, mit dem die Steigung der Geraden in der halblogarithmischen Darstellung angepasst werden kann [1.1]:

**Abb. 1.4.** Halblogarithmische Darstellung der Kennlinie für \(U_D > 0\)
<!-- page-import:0042:end -->

<!-- page-import:0044:start -->
1.1 Verhalten einer Diode 7

a Schaltbild

b Kennlinie

**Abb. 1.5.** Einfache Ersatzschaltung für eine Diode ohne (—) und mit (- -) Bahnwiderstand

*Beispiel:* Abb. 1.6 zeigt eine Diode in einer Brückenschaltung. Zur Berechnung der Spannungen $U_1$ und $U_2$ und der Diodenspannung $U_D = U_1 - U_2$ geht man zunächst davon aus, dass die Diode sperrt, d.h. es gilt $U_D < U_F = 0{,}6\,\mathrm{V}$ und der Schalter in der Ersatzschaltung ist geöffnet. Man kann in diesem Fall $U_1$ und $U_2$ über die Spannungsteilerformel bestimmen: $U_1 = U_b R_2/(R_1 + R_2) = 3{,}75\,\mathrm{V}$ und $U_2 = U_b R_4/(R_3 + R_4) = 2{,}5\,\mathrm{V}$. Man erhält $U_D = 1{,}25\,\mathrm{V}$ im Widerspruch zur Annahme. Demnach leitet die Diode und der Schalter in der Ersatzschaltung ist geschlossen; daraus folgt $U_D = U_F = 0{,}6\,\mathrm{V}$ und $I_D > 0$. Aus den Knotengleichungen

$$
\frac{U_1}{R_2} + I_D = \frac{U_b - U_1}{R_1}, \qquad \frac{U_2}{R_4} = I_D + \frac{U_b - U_2}{R_3}
$$

kann man durch Addition und Einsetzen von $U_1 = U_2 + U_F$ die Unbekannten $I_D$ und $U_1$ eliminieren; man erhält:

$$
U_2 \left(\frac{1}{R_1} + \frac{1}{R_2} + \frac{1}{R_3} + \frac{1}{R_4}\right)
= U_b \left(\frac{1}{R_1} + \frac{1}{R_3}\right) - U_F \left(\frac{1}{R_1} + \frac{1}{R_2}\right)
$$

Daraus folgt $U_2 = 2{,}76\,\mathrm{V}$, $U_1 = U_2 + U_F = 3{,}36\,\mathrm{V}$ und, durch Einsetzen in eine der Knotengleichungen, $I_D = 0{,}52\,\mathrm{mA}$. Die Voraussetzung $I_D > 0$ ist erfüllt, d.h. es tritt kein Widerspruch auf und die Lösung ist gefunden.

## 1.1.3 Schaltverhalten

Bei vielen Anwendungen wird die Diode abwechselnd im Durchlass- und im Sperrbereich betrieben; ein Beispiel hierfür ist die Gleichrichtung von Wechselspannungen. Der Übergang erfolgt nicht entsprechend der statischen Kennlinie, da in der parasitären Kapazität der Diode Ladung gespeichert wird, die beim Einschalten auf- und beim Ausschalten abgebaut wird. Abb. 1.7 zeigt eine Schaltung, mit der das Schaltverhalten bei ohmscher $(L = 0)$ und ohmsch-induktiver $(L > 0)$ Last ermittelt werden kann. Bei Ansteuerung mit einem Rechtecksignal erhält man die in Abb. 1.8 gezeigten Verläufe.

**Abb. 1.6.**  
Beispiel zur Anwendung der einfachen Ersatzschaltung
<!-- page-import:0044:end -->

<!-- page-import:0045:start -->
8  1. Diode

**Abb. 1.7.**  
Schaltung zur Messung des  
Schaltverhaltens

## 1.1.3.1 Schaltverhalten bei ohmscher Last

Bei ohmscher Last (\(L = 0\)) tritt beim Einschalten eine Stromspitze auf, die durch die Aufladung der Kapazität der Diode verursacht wird. Die Spannung steigt während dieser Stromspitze von der zuvor anliegenden Sperrspannung auf die Flussspannung \(U_F\) an; damit ist der Einschaltvorgang abgeschlossen. Bei pin-Dioden kann bei höheren Strömen auch eine Spannungsüberhöhung auftreten, siehe Abb. 1.9b, da diese Dioden beim Einschalten zunächst einen höheren Bahnwiderstand \(R_B\) besitzen; die Spannung nimmt anschließend entsprechend der Abnahme von \(R_B\) auf den statischen Wert ab. Beim Ausschalten fließt zunächst ein Strom in umgekehrter Richtung, bis die Kapazität entladen ist; anschließend

\(U\)  
\(V\)

10

\(U_F\)

0

-10

-20

\(t = 0\)

\(U_g\)

\(U_D\)

10 20 30 40 50 60 70 80 90

\(t\)  
ns

1, 2

3, 4

2

4

3

1 1N4148  
2 BAS40  \} \(L = 0\)  
3 1N4148  
4 BAS40  \} \(L = 5\,\mu\text{H}\)

\(I_D\)  
mA

15

10

5

0

-5

-10

0 10 20 30 40 50 60 70 80 90

\(t\)  
ns

1, 2

3, 4

2

1

4

3

**Abb. 1.8.** Schaltverhalten der Silizium-Diode 1N4148 und der Schottky-Diode BAS40 in der Messschaltung nach Abb. 1.7 mit \(U = 10\,\text{V}\), \(f = 10\,\text{MHz}\), \(R = 1\,\text{k}\Omega\) und \(L = 0\) bzw. \(L = 5\,\mu\text{H}\)
<!-- page-import:0045:end -->

<!-- page-import:0046:start -->
1.1 Verhalten einer Diode 9

a Ausschalten

b Einschalten

**Abb. 1.9.** Angaben zum Schaltverhalten

geht der Strom auf Null zurück und die Spannung fällt auf die Sperrspannung ab. Da die Kapazität bei Schottky-Dioden deutlich kleiner ist als bei Silizium-Dioden gleicher Baugröße, ist ihre Abschaltzeit deutlich geringer, siehe Abb. 1.8. Deshalb werden Schottky-Dioden bevorzugt zur Gleichrichtung in hochgetakteten Schaltnetzteilen \((f > 20\,\mathrm{kHz})\) eingesetzt, während in Netzgleichrichtern \((f = 50\,\mathrm{Hz})\) die billigeren Silizium-Dioden verwendet werden. Wenn die Frequenz so hoch wird, dass die Entladung der Kapazität nicht vor dem nächsten Einschalten abgeschlossen ist, findet keine Gleichrichtung mehr statt.

## 1.1.3.2 Schaltverhalten bei ohmsch-induktiver Last

Bei einer ohmsch-induktiven Last \((L > 0)\) dauert der Einschaltvorgang länger, da der Stromanstieg durch die Induktivität begrenzt wird; es tritt dabei auch keine Stromspitze auf. Während die Spannung relativ schnell auf die Flussspannung ansteigt, erfolgt der Stromanstieg mit der Zeitkonstante \(T = L/R\) der Last. Beim Ausschalten nimmt der Strom zunächst mit der Zeitkonstante der Last ab, bis die Diode sperrt. Danach bilden die Last und die Kapazität der Diode einen Reihenschwingkreis, und Strom und Spannung verlaufen als gedämpfte Schwingungen; dabei können, wie Abb. 1.8 zeigt, hohe Sperrspannungen auftreten, die die statische Sperrspannung um ein Mehrfaches übersteigen und eine entsprechend hohe Durchbruchspannung der Diode erfordern.

In Abb. 1.9 sind die typischen Angaben zum Ausschalt- (*reverse recovery*, RR) und Einschaltverhalten (*forward recovery*, FR) dargestellt. Die Rückwärtserholzeit \(t_{RR}\) ist die Zeitspanne vom Nulldurchgang des Stroms bis zu dem Zeitpunkt, an dem der Rückwärtsstrom auf 10%² seines Maximalwerts \(I_R\) abgenommen hat. Typische Werte reichen von \(t_{RR} < 100\,\mathrm{ps}\) bei schnellen Schottky-Dioden über \(t_{RR} = 1 \ldots 20\,\mathrm{ns}\) bei Silizium-Kleinsignaldioden bis zu \(t_{RR} > 1\,\mu\mathrm{s}\) bei Gleichrichterdioden. Die bei der Entladung der Kapazität transportierte Abschaltladung \(Q_{RR}\) entspricht der Fläche unterhalb der x-Achse, siehe Abb. 1.9a. Beide Größen hängen vom zuvor fließenden Flussstrom \(I_F\) und der Abschaltgeschwindigkeit ab; deshalb enthalten Datenblätter entweder Angaben zu den Rahmenbedingungen der Messung oder die Messschaltung wird angegeben. Näherungsweise gilt \(Q_{RR} \sim I_F\) und \(Q_{RR} \sim |I_R| t_{RR}\) [1.2]; daraus folgt, dass die Rückwärtserholzeit in erster Näherung proportional zum Verhältnis von Vor- und Rückwärtsstrom ist: \(t_{RR} \sim I_F/|I_R|\).

1. pin-Dioden besitzen eine undotierte (*intrinsische*) oder schwach dotierte Schicht zwischen der p- und der n-Schicht; damit erreicht man eine höhere Durchbruchspannung.
2. Bei Gleichrichterdioden wird teilweise bei 25% gemessen.
<!-- page-import:0046:end -->

<!-- page-import:0047:start -->
10  1. Diode

*Abb. 1.10.*  
Kleinsignalersatzschaltbild einer Diode

Diese Näherung gilt allerdings nur für $|I_R| < 3\ldots5 \cdot I_F$, d.h. man kann $t_{rR}$ nicht beliebig klein machen. Bei pin-Dioden mit hoher Durchbruchspannung kann ein zu schnelles Abschalten sogar zu einem Durchbruch weit unterhalb der statischen Durchbruchspannung $U_{BR}$ führen, wenn die Sperrspannung an der Diode stark zunimmt, noch bevor die schwach dotierte i-Schicht frei von Ladungsträgern ist. Beim Einschalten tritt die *Einschaltspannung* $U_{FR}$ auf, die ebenfalls von den Einschaltbedingungen abhängt [1.3]; in Datenblättern ist für $U_{FR}$ ein Maximalwert angegeben, typisch $U_{FR} = 1\ldots2{,}5\,\mathrm{V}$.

## 1.1.4 Kleinsignalverhalten

Das Verhalten bei Aussteuerung mit *kleinen* Signalen um einen durch $U_{D,A}$ und $I_{D,A}$ gegebenen Arbeitspunkt wird als *Kleinsignalverhalten* bezeichnet. Die nichtlineare Kennlinie (1.1) kann in diesem Fall durch ihre Tangente im Arbeitspunkt ersetzt werden; mit den Kleinsignalgrößen

$$
i_D = I_D - I_{D,A}\;,\quad u_D = U_D - U_{D,A}
$$

erhält man:

$$
i_D = \left.\frac{dI_D}{dU_D}\right|_A u_D = \frac{1}{r_D}u_D
$$

Daraus folgt für den *differentiellen Widerstand* $r_D$ der Diode:

$$
r_D = \left.\frac{dU_D}{dI_D}\right|_A = \frac{nU_T}{I_{D,A}+I_S} \approx_{I_{D,A}\gg I_S} \frac{nU_T}{I_{D,A}}
\qquad\qquad (1.3)
$$

Das Kleinsignalersatzschaltbild einer Diode besteht demnach aus einem Widerstand mit dem Wert $r_D$; bei großen Strömen wird $r_D$ sehr klein und man muss zusätzlich den Bahnwiderstand $R_B$ berücksichtigen, siehe Abb. 1.10.

Das Ersatzschaltbild nach Abb. 1.10 eignet sich nur zur Berechnung des Kleinsignalverhaltens bei niedrigen Frequenzen $(0\ldots10\,\mathrm{kHz})$; es wird deshalb *Gleichstrom-Kleinsignalersatzschaltbild* genannt. Bei höheren Frequenzen muss man das Wechselstrom-Kleinsignalersatzschaltbild aus Abschnitt 1.3.4.2 verwenden.

## 1.1.5 Grenzdaten und Sperrströme

Bei einer Diode sind verschiedene Grenzdaten im Datenblatt angegeben, die nicht überschritten werden dürfen. Sie gliedern sich in Grenzspannungen, Grenzströme und die maximale Verlustleistung. Damit alle Grenzdaten positive Werte annehmen, werden für den Sperrbereich die Zählpfeilrichtungen für Strom und Spannung umgekehrt und die entsprechenden Größen mit dem Index $R$ (*reverse*) versehen; für den Durchlassbereich wird der Index $F$ (*forward*) verwendet.

### 1.1.5.1 Grenzspannungen

Bei der *Durchbruchspannung* $U_{BR}$ bzw. $U_{(BR)}$ bricht die Diode im Sperrbereich durch und der Rückwärtsstrom steigt steil an. Da der Strom bereits bei Annäherung an die Durchbruchspannung deutlich zunimmt, siehe Abb. 1.3, wird eine *maximale Sperrspannung*
<!-- page-import:0047:end -->

<!-- page-import:0048:start -->
1.1 Verhalten einer Diode 11

\(U_{R,max}\) angegeben, bis zu der der Rückwärtsstrom noch unter einem Grenzwert im \(\mu\)A-Bereich bleibt. Bei Aussteuerung mit Pulsen oder bei einem einzelnen Impuls sind höhere Sperrspannungen zulässig; sie werden periodische Spitzensperrspannung (repetitive peak reverse voltage) \(U_{RRM}\) und Spitzensperrspannung (peak surge reverse voltage) \(U_{RSM}\) genannt und sind so gewählt, dass die Diode keinen Schaden nimmt. Als Pulsfrequenz wird \(f = 50\,\text{Hz}\) angenommen, da von einem Einsatz als Netzgleichrichter ausgegangen wird. Alle Spannungen sind aufgrund der geänderten Zählpfeilrichtung positiv und es gilt:

\(U_{R,max} < U_{RRM} < U_{RSM} < U_{(BR)}\)

## 1.1.5.2 Grenzströme

Für den Durchlassbereich ist ein maximaler Dauerflussstrom \(I_{F,max}\) angegeben. Er gilt für den Fall, dass das Gehäuse der Diode auf einer Temperatur von \(T = 25\,^\circ\text{C}\) gehalten wird; bei höheren Temperaturen ist der erlaubte Dauerstrom geringer. Bei Aussteuerung mit Pulsen oder bei einem einzelnen Impuls sind höhere Flussströme zulässig; sie werden periodischer Spitzenflussstrom (repetitive peak forward current) \(I_{FRM}\) und Spitzenflussstrom (peak surge forward current) \(I_{FSM}\) genannt und hängen vom Tastverhältnis bzw. von der Dauer des Impulses ab. Es gilt:

\(I_{F,max} < I_{FRM} < I_{FSM}\)

Bei sehr kurzen Einzelimpulsen gilt \(I_{FSM} \approx 4\dots20 \cdot I_{F,max}\). Bei Gleichrichterdioden ist \(I_{FRM}\) besonders wichtig, weil hier ein pulsförmiger, periodischer Strom fließt, siehe Kapitel 16.2; dabei ist der Maximalwert viel größer als der Mittelwert.

Für den Durchbruchbereich ist eine maximale Strom-Zeit-Fläche \(I^2 t\) angegeben, die bei einem durch einen Impuls verursachten Durchbruch auftreten darf:

\(I^2 t \;=\; \int I_R^2 dt\)

Trotz der Einheit A\(^2\)s wird sie oft maximale Pulsenergie genannt.

## 1.1.5.3 Sperrstrom

Der Sperrstrom \(I_R\) wird bei einer Sperrspannung unterhalb der Durchbruchspannung gemessen und hängt stark von der Sperrspannung und der Temperatur der Diode ab. Bei Raumtemperatur erhält man bei Silizium-Kleinsignaldioden \(I_R = 0{,}01 \dots 1\,\mu\text{A}\), bei Kleinsignal-Schottky-Dioden und Silizium-Gleichrichterdioden für den Ampere-Bereich \(I_R = 1 \dots 10\,\mu\text{A}\) und bei Schottky-Gleichrichterdioden \(I_R > 10\,\mu\text{A}\); bei einer Temperatur von \(T = 150\,^\circ\text{C}\) sind die Werte um den Faktor \(20 \dots 200\) größer.

## 1.1.5.4 Maximale Verlustleistung

Die Verlustleistung ist die in der Diode in Wärme umgesetzte Leistung:

\(P_V \;=\; U_D\,I_D\)

Sie entsteht in der Sperrschicht, bei großen Strömen auch in den Bahngebieten, d.h. im Bahnwiderstand \(R_B\). Die Temperatur der Diode erhöht sich bis auf einen Wert, bei dem die Wärme aufgrund des Temperaturgefälles von der Sperrschicht über das Gehäuse an die Umgebung abgeführt werden kann. Im Abschnitt 2.1.6 wird dies am Beispiel eines Bipolartransistors näher beschrieben; die Ergebnisse gelten für die Diode in gleicher Weise,
<!-- page-import:0048:end -->

<!-- page-import:0049:start -->
12  1. Diode

wenn man für $P_V$ die Verlustleistung der Diode einsetzt. In Datenblättern wird die *maximale Verlustleistung* $P_{tot}$ für den Fall angegeben, dass das Gehäuse der Diode auf einer Temperatur von $T = 25\,^\circ\mathrm{C}$ gehalten wird; bei höheren Temperaturen ist $P_{tot}$ geringer.

## 1.1.6 Thermisches Verhalten

Das thermische Verhalten von Bauteilen ist im Abschnitt 2.1.6 am Beispiel des Bipolartransistors beschrieben; die dort dargestellten Größen und Zusammenhänge gelten für eine Diode in gleicher Weise, wenn für $P_V$ die Verlustleistung der Diode eingesetzt wird.

## 1.1.7 Temperaturabhängigkeit der Diodenparameter

Die Kennlinie einer Diode ist stark temperaturabhängig; bei expliziter Angabe der Temperaturabhängigkeit gilt für die Silizium-pn-Diode [1.1]

$$
I_D(U_D,T) = I_S(T)\left(e^{\frac{U_D}{nU_T(T)}} - 1\right)
$$

mit:

$$
U_T(T) = \frac{kT}{q} = 86{,}142\,\frac{\mu\mathrm{V}}{\mathrm{K}}\,T \;\;\overset{T=300\,\mathrm{K}}{\approx}\;\; 26\,\mathrm{mV}
$$

$$
I_S(T) = I_S(T_0)\,e^{\left(\frac{T}{T_0}-1\right)\frac{U_G(T)}{nU_T(T)}}\left(\frac{T}{T_0}\right)^{\frac{x_{T,I}}{n}}
\qquad \text{mit } x_{T,I} \approx 3
\qquad\qquad (1.5)
$$

Dabei ist $k = 1{,}38 \cdot 10^{-23}\,\mathrm{VAs/K}$ die *Boltzmannkonstante*, $q = 1{,}602 \cdot 10^{-19}\,\mathrm{As}$ die *Elementarladung* und $U_G = 1{,}12\,\mathrm{V}$ die *Bandabstandsspannung* (*gap voltage*) von Silizium; die geringe Temperaturabhängigkeit von $U_G$ kann vernachlässigt werden. Die Temperatur $T_0$ mit dem zugehörigen Strom $I_S(T_0)$ dient als Referenzpunkt; meist wird $T_0 = 300\,\mathrm{K}$ verwendet.

Im Sperrbereich fließt der Sperrstrom $I_R = -I_D \approx I_S$; mit $x_{T,I} = 3$ folgt für den Temperaturkoeffizienten des Sperrstroms:

$$
\frac{1}{I_R}\frac{dI_R}{dT} \approx \frac{1}{I_S}\frac{dI_S}{dT} = \frac{1}{nT}\left(3 + \frac{U_G}{U_T}\right)
$$

In diesem Bereich gilt für die meisten Dioden $n \approx 2$ und man erhält:

$$
\frac{1}{I_R}\frac{dI_R}{dT} \approx \frac{1}{2T}\left(3 + \frac{U_G}{U_T}\right)
\;\;\overset{T=300\,\mathrm{K}}{\approx}\;\;
0{,}08\,\mathrm{K}^{-1}
$$

Daraus folgt, dass sich der Sperrstrom bei einer Temperaturerhöhung um 9 K verdoppelt und bei einer Erhöhung um 30 K um den Faktor 10 zunimmt. In der Praxis treten oft geringere Temperaturkoeffizienten auf; Ursache hierfür sind Oberflächen- und Leckströme, die oft größer sind als der Sperrstrom des pn-Übergangs und ein anderes Temperaturverhalten haben.

Durch Differentiation von $I_D(U_D,T)$ erhält man den Temperaturkoeffizienten des Stroms bei konstanter Spannung im Durchlassbereich:

$$
\left.\frac{1}{I_D}\frac{dI_D}{dT}\right|_{U_D=\mathrm{const.}}
=
\frac{1}{nT}\left(3 + \frac{U_G-U_D}{U_T}\right)
\;\;\overset{T=300\,\mathrm{K}}{\approx}\;\;
0{,}04\dots0{,}08\,\mathrm{K}^{-1}
$$

Mit Hilfe des totalen Differentials
<!-- page-import:0049:end -->
