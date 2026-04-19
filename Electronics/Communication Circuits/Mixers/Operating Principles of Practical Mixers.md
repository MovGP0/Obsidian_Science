# Operating Principles of Practical Mixers

<!-- page-import:1430:start -->
25.2 Funktionsprinzipen bei praktischen Mischern 1393

Die Spiegelfrequenz-Unterdrückung beruht auf einer Auslöschung gleich großer Anteile; deshalb müssen die Amplituden und die Phasenbeziehungen in der Praxis sehr genau eingehalten werden. Wir gehen darauf im Abschnitt 25.7 noch näher ein.

## 25.2 Funktionsprinzipen bei praktischen Mischern

In der Praxis werden nur selten Multiplizierer eingesetzt. Praktische Multiplizierer weisen bezüglich beiden Eingängen eine hohe Linearität auf, die für eine Frequenzumsetzung nicht erforderlich ist, wie wir im folgenden noch sehen werden. Praktische Multiplizierer sind als Mischer sogar unerwünscht, da sie aufgrund der aufwendigen Schaltungstechnik zur Erzielung der erforderlichen Linearität eine sehr hohe Rauschzahl aufweisen, die bei einem Betrieb als Mischer in den meisten Fällen intolerabel hoch ist.

Bei einem praktischen Mischer reicht es aus, wenn die Signale einer idealen Aufwärts- oder Abwärtsmischung in den Spannungen oder Strömen des Mischers enthalten sind. Die Spannungen und Ströme können beliebige, weitere Signale enthalten, sofern diese frequenzmäßig von den Nutzsignalen getrennt sind und mit Filtern am Ausgang unterdrückt werden können. Man muss in diesem Zusammenhang zwischen einer additiven und einer multiplikativen Mischung unterscheiden. Wir beschreiben diese beiden Arten der Mischung im folgenden am Beispiel eines Aufwärtsmischers.

### 25.2.1 Additive Mischung

Bei der additiven Mischung werden das ZF- und das LO-Signal addiert, mit einem geeigneten Gleichanteil $U_0$ versehen und auf ein Bauteil mit einer nichtlinearen Kennlinie geführt. Durch die Nichtlinearität wird eine Vielzahl von Mischfrequenzen erzeugt, unter denen sich auch die gewünschte HF-Frequenz befindet; letztere wird mit einem Bandpass ausgefiltert. Abb. 25.9 zeigt das Prinzip der additiven Mischung.

#### 25.2.1.1 Gleichungsmäßige Beschreibung

Als nichtlineare Kennlinie wird in der Praxis die nichtlineare Strom-Spannungs-Kennlinie $I(U)$ einer Diode oder eines Transistors eingesetzt, d.h. das Eingangssignal ist eine Spannung, das Ausgangssignal ein Strom. Die Kennlinie wird durch eine Taylor-Reihe im Arbeitspunkt $U_0$ dargestellt:

$$
I(U) = I(U_0) + \left.\frac{d\,I}{d\,U}\right|_{U=U_0}(U-U_0) + \left.\frac{1}{2}\frac{d^2 I}{dU^2}\right|_{U=U_0}(U-U_0)^2
$$

$$
+ \left.\frac{1}{6}\frac{d^3 I}{dU^3}\right|_{U=U_0}(U-U_0)^3 + \left.\frac{1}{24}\frac{d^4 I}{dU^4}\right|_{U=U_0}(U-U_0)^4 + \cdots
$$

Mit den Kleinsignalgrößen

$u_{ZF}(t)=\hat{u}_{ZF}\cos \omega_{ZF} t$

$u_{LO}(t)=\hat{u}_{LO}\cos \omega_{LO} t$

$u_{HF}(t)=\hat{u}_{HF}\cos \omega_{HF} t$

Addition

nichtlineares Bauteil

Bandpass für HF-Signal

$U_0$

**Abb. 25.9.** Prinzip der additiven Mischung
<!-- page-import:1430:end -->

<!-- page-import:1431:start -->
1394 25. Mischer

$$
i = I(U) - I(U_0), \quad u = U - U_0
$$

und den Abkürzungen $a_1, a_2, \ldots$ für die Ableitungen erhält man:

$$
i = a_1 u + a_2 u^2 + a_3 u^3 + a_4 u^4 + \cdots
$$

Wir können nun die Kleinsignalspannung

$$
u(t) = u_{ZF}(t) + u_{LO}(t) = \hat{u}_{ZF}\cos \omega_{ZF} t + \hat{u}_{LO}\cos \omega_{LO} t
$$

einsetzen und erhalten:

$$
i(t) = a_1 \left(\hat{u}_{ZF}\cos \omega_{ZF} t + u_{LO}\cos \omega_{LO} t\right)
$$

$$
\qquad + a_2 \left(\hat{u}_{ZF}^2 \cos^2 \omega_{ZF} t + 2 \hat{u}_{ZF} \hat{u}_{LO} \cos \omega_{ZF} t \cos \omega_{LO} t + \hat{u}_{LO}^2 \cos^2 \omega_{LO} t\right)
$$

$$
\qquad + \cdots
$$

Im quadratischen Term ist der gewünschte Ausdruck

$$
2 a_2 \hat{u}_{ZF} \hat{u}_{LO} \cos \omega_{ZF} t \cos \omega_{LO} t
$$

$$
= a_2 \hat{u}_{ZF} \hat{u}_{LO} \left[\cos (\omega_{LO} + \omega_{ZF})\, t + \cos (\omega_{LO} - \omega_{ZF})\, t \right]
$$

enthalten. Der Strom $i(t)$ wird einem Bandpass zugeführt, der den Anteil bei $f_{HF} = f_{LO} + f_{ZF}$ (Gleichlage) oder den Anteil bei $f_{HF} = f_{LO} - f_{ZF}$ (Kehrlage) abtrennt und in eine Ausgangsspannung

$$
u_{HF}(t) = \hat{u}_{HF}\cos \omega_{HF} t = R_{BP}\, a_2\, \hat{u}_{ZF}\, \hat{u}_{LO}\cos \omega_{HF} t
$$

umwandelt; dabei ist $R_{BP}$ der Übertragungswiderstand des Bandpasses im Durchlassbereich¹.

Die Amplitude $\hat{u}_{HF}$ der Ausgangsspannung ist proportional zum Koeffizienten $a_2$ der nichtlinearen Kennlinie; dieser sollte möglichst groß sein, damit die für eine bestimmte Ausgangsamplitude erforderliche Oszillatoramplitude $\hat{u}_{LO}$ klein bleibt.

## 25.2.1.2 Nichtlinearität

Wertet man weitere Terme des Stroms $i(t)$ aus, zeigt sich, dass alle Koeffizienten $a_i$ mit geradzahligem Index $i$ einen Beitrag bei der Frequenz $f_{HF}$ liefern; so enthält z.B. der Term

$$
a_4 u^4(t) = a_4 \left(\hat{u}_{ZF}\cos \omega_{ZF} t + \hat{u}_{LO}\cos \omega_{LO} t\right)^4
$$

die Anteile

$$
\frac{3}{2} a_4 \hat{u}_{ZF}\hat{u}_{LO}^3 \left[\cos (\omega_{LO} + \omega_{ZF})\, t + \cos (\omega_{LO} - \omega_{ZF})\, t \right]
$$

und:

$$
\frac{3}{2} a_4 \hat{u}_{ZF}^3 \hat{u}_{LO} \left[\cos (\omega_{LO} + \omega_{ZF})\, t + \cos (\omega_{LO} - \omega_{ZF})\, t \right]
$$

Die Amplitude des ersten Anteils ist proportional zu $\hat{u}_{ZF}$ und addiert sich zum gewünschten Ausgangssignal; dagegen ist die Amplitude des zweiten Anteils proportional zu $\hat{u}_{ZF}^3$

---

¹ Man beachte die Einheiten: $[R_{BP}] = \Omega$, $[a_2] = \mathrm{A}/\mathrm{V}^2$ und $[\hat{u}_{ZF}] = [\hat{u}_{LO}] = \mathrm{V}$; daraus folgt $[R_{BP}\, a_2\, \hat{u}_{ZF}\, \hat{u}_{LO}] = \mathrm{V}$.
<!-- page-import:1431:end -->

<!-- page-import:1432:start -->
25.2 Funktionsprinzipien bei praktischen Mischern 1395

$a_1$

(1,0)  
$f_{LO}$

(0,1)  
$f_{ZF}$

$a_2$

(2,0)  
$2f_{LO}$  
$0$

(1,1)  
$f_{LO}+f_{ZF}$  
$f_{LO}-f_{ZF}$

(0,2)  
$2f_{ZF}$  
$0$

$a_3$

(3,0)  
$3f_{LO}$  
$f_{LO}$

(2,1)  
$2f_{LO}+f_{ZF}$  
$2f_{LO}-f_{ZF}$  
$f_{ZF}$

(1,2)  
$f_{LO}+2f_{ZF}$  
$f_{LO}-2f_{ZF}$  
$f_{LO}$

(0,3)  
$3f_{ZF}$  
$f_{ZF}$

$a_4$

(4,0)  
$4f_{LO}$  
$2f_{LO}$  
$0$

(3,1)  
$3f_{LO}+f_{ZF}$  
$3f_{LO}-f_{ZF}$  
$f_{LO}+f_{ZF}$  
$f_{LO}-f_{ZF}$

(2,2)  
$2f_{LO}+2f_{ZF}$  
$2f_{LO}-2f_{ZF}$  
$2f_{LO}$  
$2f_{ZF}$  
$0$

(1,3)  
$f_{LO}+3f_{ZF}$  
$f_{LO}-3f_{ZF}$  
$f_{LO}+f_{ZF}$  
$f_{LO}-f_{ZF}$

(0,4)  
$4f_{ZF}$  
$2f_{ZF}$  
$0$

$a_5$

(5,0)  
$5f_{LO}$  
$3f_{LO}$  
$f_{LO}$

(4,1)  
$4f_{LO}+f_{ZF}$  
$4f_{LO}-f_{ZF}$  
$2f_{LO}+f_{ZF}$  
$2f_{LO}-f_{ZF}$  
$f_{ZF}$

(3,2)  
$3f_{LO}+2f_{ZF}$  
$3f_{LO}-2f_{ZF}$  
$f_{LO}+2f_{ZF}$  
$f_{LO}-2f_{ZF}$  
$3f_{LO}$  
$f_{LO}$

(2,3)  
$2f_{LO}+3f_{ZF}$  
$2f_{LO}-3f_{ZF}$  
$2f_{LO}+f_{ZF}$  
$2f_{LO}-f_{ZF}$  
$3f_{ZF}$  
$f_{ZF}$

(1,4)  
$f_{LO}+4f_{ZF}$  
$f_{LO}-4f_{ZF}$  
$f_{LO}+2f_{ZF}$  
$f_{LO}-2f_{ZF}$  
$f_{LO}$

(0,5)  
$5f_{ZF}$  
$3f_{ZF}$  
$f_{ZF}$

⋮

**Abb. 25.10.** Frequenzpyramide

und damit nichtlinear. Bei kleinen ZF-Amplituden kann man den nichtlinearen Anteil vernachlässigen; dazu muss die Bedingung

$$\left|\frac{3}{2}\,a_4\,\hat{u}_{ZF}^3\,\hat{u}_{LO}\right| \ll \left|a_2\,\hat{u}_{ZF}\,\hat{u}_{LO}\right|
\Rightarrow \hat{u}_{ZF} \ll \sqrt{\left|\frac{2\,a_2}{3\,a_4}\right|}$$

eingehalten werden. Durch die Auswertung weiterer Terme des Stroms $i(t)$ erhält man weitere Bedingungen für $\hat{u}_{ZF}$ in Abhängigkeit von den Koeffizienten $a_6$, $a_8$, $\ldots$. Die additive Mischung ist demnach im allgemeinen nichtlinear und kann nur bei kleinen ZF-Amplituden als quasi-linear aufgefasst werden; streng linear ist sie nur, wenn alle Koeffizienten mit geradzahligem Index $i \geq 4$ gleich Null sind, z.B. bei einer quadratischen Kennlinie mit $i = a_2u^2$.

Die bei der additiven Mischung entstehenden Frequenzen kann man in Form einer *Frequenzpyramide* systematisch darstellen, siehe Abb. 25.10. Durch die Koeffizienten $a_i$ werden Frequenzgruppen mit der Bezeichnung $(m,n)$ mit ganzzahligen, nicht negativen Werten für $m$ und $n$ und $m+n=i$ verursacht; für den Koeffizienten $a_2$ erhält man demnach
<!-- page-import:1432:end -->

<!-- page-import:1433:start -->
1396  25. Mischer

die Gruppen (2,0), (1,1) und (0,2). Die zu einer Gruppe $(m,n)$ gehörenden Frequenzen findet man durch Berechnen der Summe

$$
\underbrace{\pm f_{LO} \pm \cdots \pm f_{LO}}_{m\ \text{Summanden}}
\underbrace{\pm f_{ZF} \pm \cdots \pm f_{ZF}}_{n\ \text{Summanden}}
$$

für alle möglichen Vorzeichenkonstellationen und Beschränkung auf nicht negative Werte. So erhält man z.B. für die Gruppe (1,1) die Summen

$f_{LO} + f_{ZF}$ , $f_{LO} - f_{ZF}$ , $-\,f_{LO} + f_{ZF}$ , $-\,f_{LO} - f_{ZF}$

und, unter der Voraussetzung $f_{LO} > f_{ZF}$, die Frequenzen:

$f_{LO} + f_{ZF}$ , $f_{LO} - f_{ZF}$

Bei Gruppen mit größeren Werten für $m$ und $n$ nimmt die Anzahl der Frequenzen zu. Alle Frequenzen einer Gruppe $(m,n)$ sind auch in den Gruppen $(m + 2,n)$ und $(m,n + 2)$ enthalten; daraus folgt durch rekursive Anwendung, dass alle Frequenzen eines Koeffizienten $a_i$ auch durch die Koeffizienten $a_{(i+2)}$, $a_{(i+4)}$, $a_{(i+6)}$, $\ldots$ erzeugt werden. Deshalb sind bei einem additiven Mischer neben dem Koeffizienten $a_2$ auch die Koeffizienten $a_4$, $a_6$, $a_8$, $\ldots$ von Bedeutung. Die Amplituden einer Gruppe $(m,n)$ sind proportional zu $\hat{u}_{LO}^m \hat{u}_{ZF}^n$. Das gewünschte Ausgangssignal mit $f_{HF} = f_{LO} \pm f_{ZF}$ liegt in der Gruppe (1,1) und ist demnach proportional zu $\hat{u}_{LO}\hat{u}_{ZF}$. Weitere Anteile mit derselben Frequenz treten z.B. in den Gruppen (3,1) und (1,3) auf. Der Anteil in der Gruppe (3,1) ist proportional zu $\hat{u}_{LO}^3 \hat{u}_{ZF}$ und damit linear bezüglich $\hat{u}_{ZF}$; dagegen ist der Anteil in der Gruppe (1,3) proportional zu $\hat{u}_{LO}\hat{u}_{ZF}^3$ und damit nichtlinear bezüglich $\hat{u}_{ZF}$.

Die Nichtlinearität der additiven Mischung hat nicht nur einen nichtlinearen Zusammenhang zwischen der ZF-Amplitude $\hat{u}_{ZF}$ und HF-Amplitude $\hat{u}_{HF}$ zur Folge, sondern führt bei modulierten ZF-Signalen zusätzlich zu Intermodulationsverzerrungen. Dazu ersetzen wir die bisher konstante ZF-Amplitude $\hat{u}_{ZF}$ durch ein amplitudenmoduliertes Signal ohne Träger mit der Modulationsfrequenz $f_m$; dann gilt:

$$
u_{ZF}(t) = \hat{u}_{ZF}\cos \omega_m t \cos \omega_{ZF} t
$$

$$
= \frac{\hat{u}_{ZF}}{2}\left[\cos\left(\omega_{ZF} + \omega_m\right)t + \cos\left(\omega_{ZF} - \omega_m\right)t\right]
$$

Eine Berechnung, die wir hier nicht im Detail ausführen, zeigt, dass alle Koeffizienten $a_i$ mit geradzahligem Index $i$ einen Anteil bei den gewünschten Ausgangsfrequenzen $f_{LO} \pm f_{ZF} \pm f_m$ liefern. Die Koeffizienten $a_i$ mit $i = 4,6,8,\ldots$ liefern zusätzlich Anteile bei den Frequenzen $f_{LO} \pm f_{ZF} \pm 3f_m$, die mit $i = 6,8,\ldots$ Anteile bei $f_{LO} \pm f_{ZF} \pm 5f_m$, usw. Diese unerwünschten Anteile sind proportional zu höheren Potenzen der ZF-Amplitude und müssen deshalb ebenfalls durch eine Beschränkung der ZF-Amplitude auf ein zulässiges Maß begrenzt werden. Sie werden Intermodulationsprodukte genannt. Man kann auch für diesen Fall eine Frequenzpyramide angeben, indem man in der Gruppe (0,1) anstelle der Frequenz $f_{ZF}$ die Frequenzen $f_{ZF} + f_m$ und $f_{ZF} - f_m$ einsetzt und die weiteren Gruppen in gewohnter Weise berechnet; dabei nimmt die Anzahl der Frequenzen in den Gruppen gegenüber Abb. 25.10 zu, da man nun die Summen

$$
\underbrace{\pm f_{LO} \pm \cdots \pm f_{LO}}_{m\ \text{Summanden}}
\underbrace{\pm (f_{ZF} \pm f_m) \pm \cdots \pm (f_{ZF} \pm f_m)}_{n\ \text{Summanden}\ f_{ZF} \pm f_m}
$$
<!-- page-import:1433:end -->

<!-- page-import:1434:start -->
25.2 Funktionsprinzipien bei praktischen Mischern 1397

$a_1$

(1,0)

$f_{LO}$

(0,1)

$f_{ZF}+f_m$  
$f_{ZF}-f_m$

$a_2$

(2,0)

$2f_{LO}$  
$0$

(1,1)

$f_{LO}+f_{ZF}+f_m$  
$f_{LO}+f_{ZF}-f_m$  
$f_{LO}-f_{ZF}-f_m$  
$f_{LO}-f_{ZF}+f_m$

(0,2)

$2f_{ZF}+2f_m$  
$2f_{ZF}-2f_m$  
$2f_{ZF}$  
$2f_m$  
$0$

$a_3$

(3,0)

$\vdots$

(2,1)

$\vdots$

(1,2)

$\vdots$

(0,3)

$\vdots$

$a_4$

(4,0)

$\vdots$

(3,1)

$f_{LO}+f_{ZF}+f_m$  
$f_{LO}+f_{ZF}-f_m$  
$f_{LO}-f_{ZF}-f_m$  
$f_{LO}-f_{ZF}+f_m$  
$\vdots$

(2,2)

$\vdots$

(1,3)

$f_{LO}+f_{ZF}+f_m$  
$f_{LO}+f_{ZF}-f_m$  
$f_{LO}-f_{ZF}-f_m$  
$f_{LO}-f_{ZF}+f_m$  
$f_{LO}+f_{ZF}+3f_m$  
$f_{LO}+f_{ZF}-3f_m$  
$f_{LO}-f_{ZF}-3f_m$  
$f_{LO}-f_{ZF}+3f_m$  
$\vdots$

(0,4)

$\vdots$

$\vdots$

**Abb. 25.11.** Frequenzpyramide für Intermodulationsprodukte

berechnen muss. Abbildung 25.11 zeigt einen Ausschnitt aus der Frequenzpyramide für Intermodulationsprodukte mit den Intermodulationsprodukten 3. Ordnung $(f_{LO} \pm f_{ZF} \pm 3f_m)$ in der Gruppe (1,3), die proportional zu $\hat{u}_{LO}\hat{u}_{ZF}^3$ sind.

Die Zusammenhänge sind prinzipiell dieselben wie bei einem nichtlinearen Verstärker; deshalb kann man bei Mischern die nichtlinearen Kenngrößen (Kompressionspunkt und Intercept-Punkte) in gleicher Weise angeben. Die Zusammenhänge zwischen den Kenngrößen und den Koeffizienten der nichtlinearen Kennlinie sind allerdings verschieden, da bei einem Verstärker die Koeffizienten $a_i$ mit ungeradzahligem Index $i$, bei einem Mischer dagegen die mit geradzahligem Index $i$ maßgebend sind. Man kann einen nichtlinearen Mischer als nichtlinearen Verstärker mit zusätzlicher Frequenzverschiebung auffassen; wir verweisen deshalb *qualitativ* auf die Ausführungen im Abschnitt 4.2.3.

### 25.2.1.3 Praktische Ausführung

#### 25.2.1.3.1 Additiver Mischer mit Diode

Bei der Schaltung mit Diode in Abb. 25.12a wird das ZF-Signal zusammen mit der Spannung $U_0$ zur Einstellung des Arbeitspunkts direkt zugeführt; das LO-Signal wird über
<!-- page-import:1434:end -->

<!-- page-import:1436:start -->
25.2 Funktionsprinzipen bei praktischen Mischern 1399

#### 25.2.1.3.2 Additiver Mischer mit Bipolartransistor

Einen Mischgewinn (conversion gain) kann man durch den Einsatz eines Bipolartransistors erzielen, siehe Abbildung 25.12b. Hier fließt der HF-Strom nicht über die ZF- oder LO-Signalquelle. Der HF-Teil ist relativ gut von den anderen Teilen entkoppelt. Man kann diese Entkopplung weiter verbessern, indem man einen Kaskode-Transistor einfügt. Da der HF-Strom beim Transistor an einem separaten Anschluss, dem Kollektor, entnommen werden kann, kann man die Addition des ZF- und des LO-Signals auch dadurch durchführen, dass man ein Signal an der Basis und das andere am Emitter zuführt, wie in Abb. 25.9c gezeigt; dann wird kein Übertrager benötigt. Allerdings fließt der HF-Strom in diesem Fall über die LO-Signalquelle.

Aus der exponentiellen Kennlinie

$$
I(U) = I_S \left( e^{\frac{U}{nU_T}} - 1 \right)
$$

einer Diode ($U = U_D,\ I = I_D,\ n = 1 \ldots 2$) bzw. eines Bipolartransistors ($U = U_{BE},\ I = I_C,\ n = 1$) kann man die Koeffizienten der nichtlinearen Kennlinie im Arbeitspunkt $I_0 = I(U_0)$ berechnen:

$$
a_i = \frac{1}{i!} \left. \frac{d^i I}{dU^i} \right|_{U=U_0}
= \frac{1}{i!}\frac{I_0}{(nU_T)^i}
\quad \Rightarrow \quad
a_2 = \frac{1}{2}\frac{I_0}{(nU_T)^2}, \ \ldots
$$

Die Koeffizienten sind proportional zum Ruhestrom; für $I_0 = 100\,\mu\mathrm{A}$ und $n = 1$ erhält man $a_2 \approx 74\,\mathrm{mA}/\mathrm{V}^2$. Die Wahl des Ruhestroms $I_0$ und der Amplituden des ZF- und LO-Signals muss so erfolgen, dass der Spitzenstrom

$$
I_{max} = I_S \left( e^{\frac{U_0+\hat{u}_{LO}+\hat{u}_{ZF}}{nU_T}} - 1 \right)
\approx I_S e^{\frac{U_0+\hat{u}_{LO}+\hat{u}_{ZF}}{nU_T}}
= I_0 e^{\frac{\hat{u}_{LO}+\hat{u}_{ZF}}{nU_T}}
$$

nicht zu groß wird; für $\hat{u}_{LO} + \hat{u}_{ZF} = 100\,\mathrm{mV}$ und $n = 1$ erhält man bereits $I_{max} \approx 47\,I_0$. In der Praxis werden die Pegel so gewählt, dass die maximale Amplitude des ZF-Signals noch deutlich kleiner ist als die Lokaloszillator-Amplitude; dann hängt der Spitzenstrom praktisch nicht vom ZF-Signal ab.

#### 25.2.1.3.3 Additiver Mischer mit Feldeffekttransistor

Anstelle eines Bipolartransistors kann man auch einen Feldeffekttransistor verwenden. Dies ist sogar besonders günstig, da ein Feldeffekttransistor aufgrund seiner näherungsweise quadratischen Übertragungskennlinie ($a_2 \neq 0$ und $a_i \approx 0$ für $i > 2$) nur sehr geringe Intermodulationsverzerrungen erzeugt. Abbildung 25.13a zeigt eine häufig verwendete Ausführung mit einem Sperrschicht-Fet; dabei kann man auf eine Vorspannung $U_0$ verzichten und den Arbeitspunkt mit dem Widerstand $R_S$ einstellen. Aus der Übertragungskennlinie

$$
I_D = \frac{K}{2}(U_{GS} - U_{th})^2
$$

folgt:

$$
a_2 = \frac{1}{2}\frac{d^2 I_D}{dU_{GS}^2} = \frac{K}{2}
$$
<!-- page-import:1436:end -->

<!-- page-import:1437:start -->
1400  25. Mischer

a  Feldeffekttransistor

b  Stromquadrierer mit Bipolartransistoren

**Abb. 25.13.** Additive Mischer mit näherungsweise quadratischer Kennlinie. Die Parallelschwingkreise sind auf die HF-Frequenz $f_{HF}$ abgestimmt.

Demnach hängt der Koeffizient $a_2$ nicht vom Ruhestrom, sondern nur von der Größe des Fets, ausgedrückt durch den Steilheitskoeffizienten $K$, ab. Er ist auch bei sehr großen Fets deutlich kleiner als bei einem Bipolartransistor mit typischem Arbeitspunkt; typische Werte liegen im Bereich $a_2 \approx 1 \dots 10\,\mathrm{mA}/\mathrm{V}^2$.

#### 25.2.1.3.4 Additiver Mischer mit Stromquadrierer

Eine ebenfalls näherungsweise quadratische Kennlinie besitzt der in Abb. 25.13b gezeigte Stromquadrierer mit Bipolartransistoren: $I_{C4} \sim I_1^2$. Für den Fall gleichgroßer Transistoren (gleicher Sättigungssperrstrom $I_S$) und bei Vernachlässigung der Basisströme gilt:

$$
U_{BE1} = U_{BE2} = U_T \ln \frac{I_1}{I_S}, \quad U_{BE3} = U_T \ln \frac{I_0}{I_S}, \quad U_{BE4} = U_T \ln \frac{I_{C4}}{I_S}
$$

Aus der Maschengleichung

$$
U_{BE1} + U_{BE2} = U_{BE3} + U_{BE4}
$$

erhält man:

$$
U_{BE4} = U_{BE1} + U_{BE2} - U_{BE3} = U_T \ln \frac{I_1^2}{I_0 I_S}
\Rightarrow
I_{C4} = \frac{I_1^2}{I_0}
$$

Der Eingangsstrom $I_1$ setzt sich aus dem Ruhestrom $I_0$, dem ZF-Strom $i_{ZF}$ und dem LO-Strom $i_{LO}$ zusammen; er wird von zwei Stromquellen mit dem Ruhestrom $I_0/2$ und den Kleinsignalströmen $i_{ZF}$ und $i_{LO}$ geliefert.

#### 25.2.1.3.5 Additiver Mischer mit Dual-Gate-Mosfet

Ein häufig verwendeter additiver Mischer ist der in Abb. 25.14a gezeigte Mischer mit zwei Mosfets in Kaskodeschaltung, der in der Praxis in den meisten Fällen mit einem Dual-Gate-Mosfet (DGFET) realisiert wird, siehe Abb. 25.14b. Wir nehmen hier Mosfets gleicher Größe an, d.h. beide Mosfets haben denselben Steilheitskoeffizienten $K$. Der untere Mosfet wird im ohmschen Bereich betrieben; dadurch hängt der Drainstrom $I_{D1}$ nicht nur von der
<!-- page-import:1437:end -->

<!-- page-import:1438:start -->
25.2 Funktionsprinzipien bei praktischen Mischern 1401

a mit zwei Einzel-Mosfets

b mit Dual-Gate-Mosfet (z.B. BF998)

**Abb. 25.14.** Additive Mischer mit zwei Mosfets

Gate-Source-Spannung $U_{GS1}$, sondern auch stark von der Drain-Source-Spannung $U_{DS1}$ ab; mit $U_1 = U_{GS1}$ gilt:

$$
I_{D1} = K\,U_{DS1}\left(U_1 - U_{th} - \frac{U_{DS1}}{2}\right)
$$

(3.2)

Die Kanallängenmodulation kann hier vernachlässigt werden. Der obere Mosfet wird im Abschnürbereich betrieben. Er arbeitet bezüglich des unteren Mosfets in Drainschaltung (Sourcefolger) und gibt dadurch die Spannung $U_{DS1}$ vor; aus

$$
I_{D2} = \frac{K}{2}(U_{GS2} - U_{th})^2
$$

(3.3)

und $I_{D1} = I_{D2}$ folgt:

$$
U_{DS1} = U_2 - U_{GS2} = U_2 - U_{th} - \sqrt{\frac{2I_{D1}}{K}}
$$

Setzt man diese Gleichung in die Gleichung für $I_{D1}$ ein, erhält man unter anderem einen Term $K\,U_1\,U_2$, der wegen $U_1 = U_{1,A} + u_{ZF}$ und $U_2 = U_{2,A} + u_{LO}$ das gewünschte Produkt aus ZF- und LO-Signal enthält. Da $U_{DS1}$ ebenfalls von $I_{D1}$ abhängt, kann man die resultierende Gleichung nicht nach $I_{D1}$ auflösen; deshalb kann der Drainstrom und das durch den Parallelschwingkreis ausgefilterte HF-Signal nur numerisch bestimmt werden. Das LO-Signal und die Arbeitspunktspannung $U_{2,A}$ werden so gewählt, dass der ohmsche Bereich des unteren Mosfets vollständig durchfahren wird; dadurch wird das HF-Signal maximal. Dieser Mischer wird in der Literatur häufig zu den multiplikativen Mischern gezählt, da das ZF- und das LO-Signal an getrennten Anschlüssen zugeführt und nicht explizit addiert werden. Wir zählen ihn zu den additiven Mischern, da die Drain-Source-Spannung $U_{DS1}$ aufgrund ihrer Abhängigkeit von $I_{D1}$ nicht nur von $U_2$, sondern auch von $U_1$ abhängt: $U_{DS1} = U_{DS1}(U_1, U_2)$; dadurch enthält der Drainstrom Anteile, die nichtlinear bezüglich $U_1$ sind.
<!-- page-import:1438:end -->

<!-- page-import:1439:start -->
1402  25. Mischer

## 25.2.1.4 Einsatz additiver Mischer

In modernen Sendern und Empfängern werden nur noch selten additive Mischer eingesetzt; dies hat im wesentlichen zwei Gründe:

- Ein praktischer Mischer muss so aufgebaut werden, dass die Eingänge und der Ausgang möglichst gut entkoppelt sind und an den Wellenwiderstand angepasst werden können, die Verstärkung möglichst hoch und die Rauschzahl möglichst gering ist; dies ist bei einem additiven Mischer nur mit Einschränkungen möglich.
- Die Intermodulationsverzerrungen sind aufgrund der prinzipbedingten Nichtlinearität vergleichsweise hoch; dadurch wird der Dynamikbereich eingeschränkt.

## 25.2.2 Multiplikative Mischung

Bei der *multiplikativen Mischung* wird das ZF-Signal mit dem LO-Signal multipliziert. Im Unterschied zur Funktionsweise eines idealen Mischers wird dabei allerdings kein sinusförmiges, sondern ein allgemeines, periodisches LO-Signal mit der Grundfrequenz $f_{LO}$ verwendet. Aus den Mischfrequenzen wird die gewünschte HF-Frequenz mit einem Bandpass ausgefiltert.

Besonders einfach wird die multiplikative Mischung, wenn man rechteckförmige LO-Signale verwendet; dann kann man die Multiplikation mit Schaltern durchführen. Abbildung 25.15 zeigt das Prinzip der multiplikativen Mischung und die Spezialfälle mit einem unipolaren und einem bipolaren Rechtecksignal. Im Falle des unipolaren Rechtecksignals wird das ZF-Signal nur noch mit 0 und 1 multipliziert; dazu kann man einen Ein-/Ausschalter verwenden, der als Serien- oder Kurzschlussschalter arbeitet. Im Falle des bipolaren Rechtecksignals wird das ZF-Signal mit +1 und $-1$ multipliziert; dazu kann man mit einem invertierenden Verstärker $-u_{ZF}$ bilden und mit einem Umschalter zwischen $u_{ZF}$ und $-u_{ZF}$ umschalten. Alternativ kann ein zweipoliger Umschalter verwendet werden. Die Schalter werden als elektronische Schalter ausgeführt und mit einem Rechtecksignal mit der Frequenz $f_{LO}$ angesteuert.

### 25.2.2.1 Gleichungsmäßige Beschreibung

Das Signal $s_M(t)$ am Ausgang des Multiplizierers in Abb. 25.15 erhält man durch Fourier-Reihenentwicklung des LO-Signals:

$$
s_M(t) = s_{ZF}(t)\cdot s_{LO}(t)
$$

$$
= s_{ZF}(t)\cdot \left[c_0 + c_1 \cos(\omega_{LO} t + \varphi_1) + c_2 \cos(2\omega_{LO} t + \varphi_2) + \cdots \right]
$$

$$
= s_{ZF}(t)\cdot \left[c_0 + \sum_{n=1}^{\infty} c_n \cos(n\omega_{LO} t + \varphi_n)\right]
$$

Das ZF-Signal wird demnach mit der Grund- $(c_1)$ und den Oberwellen $(c_2,\ldots)$ des LO-Signals multipliziert; darüber hinaus erfolgt eine direkte Übertragung entsprechend dem Gleichanteil $(c_0)$.

Für die Rechtecksignale aus Abb. 25.15 erhält man die Fourier-Reihen:

$$
s_{LO}(t)=
\begin{cases}
\frac{1}{2}+\frac{2}{\pi}\cos\omega_{LO} t-\frac{2}{3\pi}\cos 3\omega_{LO} t+\cdots \qquad \text{unipolar}\\[6pt]
\frac{4}{\pi}\cos\omega_{LO} t-\frac{4}{3\pi}\cos 3\omega_{LO} t+\cdots \qquad \text{bipolar}
\end{cases}
$$
<!-- page-import:1439:end -->

<!-- page-import:1440:start -->
25.2 Funktionsprinzipien bei praktischen Mischern 1403

unipolares Rechtecksignal

bipolares Rechtecksignal

Realisierung mit Ein-/Ausschalter

Übergang von Signalen zu Spannungen $(s \rightarrow u)$

Realisierung mit Umschalter(n)

**Abb. 25.15.** Prinzip der multiplikativen Mischung (oben) und Spezialfälle mit rechteckförmigen LO-Signalen

$$
= \left\{
\begin{array}{ll}
\frac{1}{2} + \frac{2}{\pi}\sum_{n=0}^{\infty}\frac{(-1)^n}{2n+1}\cos(2n+1)\,\omega_{LO}t & \text{unipolar} \\
\frac{4}{\pi}\sum_{n=0}^{\infty}\frac{(-1)^n}{2n+1}\cos(2n+1)\,\omega_{LO}t & \text{bipolar}
\end{array}
\right.
\qquad (25.1)
$$
<!-- page-import:1440:end -->

<!-- page-import:1441:start -->
1404  25. Mischer

a  Betragsspektrum des ZF-Signals

b  Betragsspektrum am Ausgang des Multiplizierers bei unipolarem Rechtecksignal

c  Betragsspektrum am Ausgang des Multiplizierers bei bipolarem Rechtecksignal

**Abb. 25.16.** Betragsspektren bei multiplikativer Aufwärtsmischung mit rechteckförmigen LO-Signalen

Hier treten nur ungeradzahlige Vielfache der LO-Frequenz auf. Darüber hinaus besitzt das bipolare Rechtecksignal keinen Gleichanteil. Mit dem modulierten ZF-Signal

$$
s_{ZF}(t) = a(t)\cos[\omega_{ZF} t + \varphi(t)]
$$

erhält man am Ausgang des Multiplizierers mit unipolarem Rechtecksignal:

$$
s_M(t) = \frac{a(t)}{2}\cos[\omega_{ZF} t + \varphi(t)]
$$

$$
+ \frac{a(t)}{\pi}\{\cos[(\omega_{LO} + \omega_{ZF})\,t + \varphi(t)] + \cos[(\omega_{LO} - \omega_{ZF})\,t - \varphi(t)]\}
$$

$$
- \frac{a(t)}{3\pi}\{\cos[(3\omega_{LO} + \omega_{ZF})\,t + \varphi(t)] + \cos[(3\omega_{LO} - \omega_{ZF})\,t - \varphi(t)]\}
$$

$$
+ \cdots
$$

Beim bipolaren Rechtecksignal entfällt der Anteil bei der ZF-Frequenz und alle anderen Anteile haben die doppelte Amplitude. Abbildung 25.16 zeigt die zugehörigen Betragsspektren. Bei der LO-Frequenz und allen ungeradzahligen Vielfachen der LO-Frequenz tritt ein Oberband in Gleichlage und ein Unterband in Kehrlage auf. Die Amplituden nehmen mit zunehmender Frequenz entsprechend den Fourier-Koeffizienten des LO-Signals
<!-- page-import:1441:end -->

<!-- page-import:1442:start -->
25.2 Funktionsprinzipien bei praktischen Mischern 1405

**Abb. 25.17.**  
Auswirkung des Schaltverhaltens der elektronischen Schalter

ab. Als HF-Ausgangssignal wird das Ober- oder das Unterband der LO-Frequenz verwendet, d.h. $f_{HF} = f_{LO} \pm f_{ZF}$; alle anderen Anteile werden mit einem Filter unterdrückt. Prinzipiell kann man jedoch auch die höherfrequenten Anteile als HF-Ausgangssignal verwenden.

Wenn die Rechtecksignale nicht symmetrisch sind (Tastverhältnis $\ne 50\%$), enthält die Fourier-Reihe auch Anteile bei geradzahligen Vielfachen der LO-Frequenz; dann treten am Ausgang des Mischers auch bei diesen Frequenzen Ober- und Unterbänder auf, z.B. bei $2f_{LO} \pm f_{ZF}$.

### 25.2.2.2 Schaltverhalten der Schalter

Die elektronischen Schalter in praktischen Mischern haben kein ideales Schaltverhalten, sondern weisen ein Übergangsverhalten auf; dadurch wird das ZF-Signal nicht mit einem idealen, sondern mit einem entsprechend dem Schaltverhalten verformten Rechtecksignal multipliziert, siehe Abb. 25.17. Man muss dann zwischen dem zugeführten LO-Signal $s_{LO}$ und dem bezüglich der Multiplikation wirksamen LO-Signal $s'_{LO}$ unterscheiden. Die grundsätzliche Funktion des Mischers wird dadurch jedoch nicht beeinträchtigt, da die Verformung nur zu einer Änderung der Fourier-Koeffizienten des LO-Signals führt, die toleriert werden kann, solange die Grundwelle des wirksamen LO-Signals ausreichend groß bleibt.

In der Praxis ist auch das zugeführte LO-Signal $s_{LO}$ meist kein Rechtecksignal, da die Erzeugung von hochfrequenten Rechtecksignalen aufwendig ist und eine erhebliche Störaussendung verursacht; man verwendet statt dessen das nahezu sinusförmige Signal eines Hochfrequenz-Oszillators. Das wirksame LO-Signal hängt in diesem Fall vom Schaltverhalten der elektronischen Schalter bei sinusförmigem Steuersignal ab.

Mit zunehmender LO-Frequenz macht sich das nichtideale Schaltverhalten immer stärker bemerkbar. Bei Frequenz oberhalb 10 GHz arbeiten selbst die schnellsten Schaltdioden nicht mehr als Schalter, sondern werden nur noch innerhalb des Übergangsbereichs betrieben; dadurch geht der multiplikative Mischer in einen additiven Mischer über.

Beim idealen Mischer haben wir im Zusammenhang mit der Spiegelfrequenz auf die funktionale Symmetrie zwischen Auf- und Abwärtsmischer hingewiesen; sie lautet im allgemeinen Fall: jedes bei einer Aufwärtsmischung entstehende Band wirkt bei einer Abwärtsmischung als Spiegelfrequenzband. Daraus folgt für einen multiplikativen Abwärtsmischer, dass bei einer HF-Frequenz $f_{HF} = f_{LO} + f_{ZF}$ nicht nur das Band bei $f_{LO} - f_{ZF}$, sondern auch die Bänder bei allen Oberwellen des LO-Signals $(nf_{LO} \pm f_{ZF}$ mit $n = 2, 3, \ldots)$ als Spiegelfrequenzbänder wirken, da sie ebenfalls auf die ZF-Frequenz
<!-- page-import:1442:end -->

<!-- page-import:1443:start -->
1406  25. Mischer

umgesetzt werden. Deshalb muss das Spiegelfrequenzfilter auch bei diesen Frequenzen eine ausreichend hohe Dämpfung besitzen.

### 25.2.2.3 Nichtlinearität

Die gleichungsmäßige Beschreibung zeigt, dass die multiplikative Mischung bezüglich des Zusammenhangs zwischen ZF- und HF-Amplitude linear ist; demzufolge treten auch keine Intermodulationsprodukte auf. In der Praxis ist dies nicht erfüllt, da die benötigten elektronischen Schalter nicht exakt linear arbeiten und Aussteuerungsgrenzen aufweisen. Deshalb werden auch bei multiplikativen Mischern die nichtlinearen Kenngrößen (Kompressionspunkt und Intercept-Punkte) angegeben. Man erhält prinzipiell dieselben Zusammenhänge wie bei additiven Mischern; allerdings ist die Nichtlinearität in den meisten Fällen erheblich geringer, da sie nur durch sekundäre Effekte verursacht wird, während die Nichtlinearität bei additiven Mischern Voraussetzung für die Funktion des Mischers ist. Deshalb erzielt man mit multiplikativen Mischern höhere Kompressions- und Intercept-Punkte.

### 25.2.2.4 Praktische Ausführung

Prinzipiell kann man jeden additiven Mischer auch als multiplikativen Mischer verwenden, indem man ein rechteckförmiges LO-Signal verwendet und den Arbeitspunkt und die Amplitude des LO-Signals so wählt, dass die Diode oder der Transistor des additiven Mischers mit der LO-Frequenz zwischen einem sperrenden und einem leitenden Zustand umgeschaltet wird. Gleichzeitig wird die Amplitude des Eingangssignals so klein gewählt, dass Kleinsignalaussteuerung vorliegt; dann wird das Eingangssignal mit der jeweiligen Kleinsignalverstärkung verstärkt, d.h. abwechselnd mit Null (= Kleinsignalverstärkung im gesperrten Zustand) und einem konstanten Wert (= Kleinsignalverstärkung im leitenden Zustand) multipliziert. Damit erhält man einen multiplikativen Mischer mit Ein-/Ausschalter und, je nach Schaltung, zusätzlicher Verstärkung oder Dämpfung. Abbildung 25.18 zeigt dies am Beispiel des Mischers mit einer Diode aus Abb. 25.12a. Man erhält getrennte Kleinsignalersatzschaltbilder für den gesperrten und den leitenden Zustand der Diode. Daraus folgt, dass die Diode als elektronischer Ein-/Ausschalter mit einem Durchlasswiderstand entsprechend dem Kleinsignalwiderstand $r_D(\hat{u}_{LO})$ im leitenden Zustand arbeitet.

Die in der Praxis üblichen multiplikativen Mischer werden in den folgenden Abschnitten beschrieben.

## 25.3 Mischer mit Dioden

Mischer mit Dioden sind weit verbreitet und werden vor allem in diskret aufgebauten Schaltungen eingesetzt. Sie arbeiten fast ausschließlich als multiplikative Mischer, d.h. die Dioden werden als Schalter betrieben. Da die Diode ein passives Bauelement ist, weisen diese Mischer immer einen Mischverlust (conversion loss) auf, der typisch $5 \ldots 8\,\mathrm{dB}$ beträgt. Sie werden deshalb auch als passive Mischer bezeichnet.

Aufgrund der hohen Frequenzen werden Dioden mit ausgezeichnetem Schaltverhalten benötigt. Man verwendet spezielle Schottky-Dioden (Mischerdioden) mit sehr kleiner Sperrschichtkapazität; die Diffusionskapazität ist bei Schottky-Dioden ohnehin vernachlässigbar klein. Zur Minimierung der Sperrschichtkapazität muss die Fläche des Metall-Halbleiter-Übergangs minimiert und die Dotierung im Vergleich zu Standard-Dioden verringert werden; dadurch nimmt der Bahnwiderstand zu. Deshalb zeichnen sich Mischerdioden durch eine sehr kleine Kapazität und einen relativ hohen Bahnwiderstand aus.
<!-- page-import:1443:end -->
