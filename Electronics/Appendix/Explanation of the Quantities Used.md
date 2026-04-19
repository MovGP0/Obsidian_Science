Um Unklarheiten zu vermeiden, wollen wir die Bezeichnung der wichtigsten Größen kurz zusammenstellen.

**Spannung**

Eine Spannung zwischen den Punkten $x$ und $y$ wird mit $U_{xy}$ bezeichnet. Es ist vereinbart, dass $U_{xy}$ positiv sein soll, wenn der Punkt $x$ positiv gegenüber dem Punkt $y$ ist. $U_{xy}$ ist negativ, wenn der Punkt $x$ negativ gegenüber dem Punkt $y$ ist. Es gilt die Beziehung $U_{xy} = -U_{yx}$. Die Angabe

$$
U_{BE} = -5\,\mathrm{V}\ \text{oder}
$$

$$
-U_{BE} = 5\,\mathrm{V}\ \text{oder}
$$

$$
U_{EB} = 5\,\mathrm{V}
$$

bedeutet also, dass zwischen $E$ und $B$ eine Spannung von $5\,\mathrm{V}$ liegt, wobei $E$ positiv gegenüber $B$ ist. In einer Schaltung lässt man die Doppelindizes meist weg und ersetzt die Angabe $U_{xy}$ durch einen Spannungspfeil $U$, der vom Schaltungspunkt $x$ zum Schaltungspunkt $y$ zeigt.

**Potential**

Das Potential $V$ ist die Spannung eines Punktes bezogen auf einen gemeinsamen Bezugspunkt $0$:

$$
V_x = U_{x0}
$$

In den Schaltungen ist das Bezugspotential durch ein Massezeichen gekennzeichnet. Häufig wird $U_x$ in der Bedeutung von $V_x$ verwendet. Man spricht dann nicht ganz korrekt von der Spannung eines Punktes, z.B. der Kollektorspannung. Für die Spannung zwischen zwei Punkten $x$ und $y$ gilt:

$$
U_{xy} = V_x - V_y
$$

**Strom**

Der Strom wird durch einen Strompfeil $I$ in der Leitung gekennzeichnet. Es ist vereinbart, dass $I$ positiv sein soll, wenn der Strom im konventionellen Sinne in Pfeilrichtung fließt. $I$ ist also positiv, wenn der Strompfeil am Verbraucher vom größeren zum kleineren Potential zeigt. Wie man die Strom- und Spannungspfeile in eine Schaltung einzeichnet, ist beliebig, wenn man den Zahlenwert von $U$ und $I$ mit dem entsprechenden Vorzeichen versieht. – Besitzen Strom- und Spannungspfeil an einem Verbraucher dieselbe Richtung, lautet das Ohmsche Gesetz nach den angegebenen Vereinbarungen $R = U/I$; besitzen sie entgegengesetzte Richtung, muss es $R = -U/I$ lauten. Diesen Sachverhalt zeigt Abb. 28.2.1

**Widerstand**

Ist ein Widerstand spannungs- oder stromabhängig, kann man entweder den *statischen Widerstand* $R = U/I$ oder den *differentiellen Widerstand* $r = \partial U/\partial I \simeq \Delta U/\Delta I$ angeben. Dies gilt bei gleicher Richtung von Strom- und Spannungspfeil. Bei entgegengesetzter Richtung ist wie in Abb. 28.2.1 ein Minuszeichen einzusetzen.

$R=\dfrac{U}{I}$

$R=-\dfrac{U}{I}$

**Abb. 28.2.1.**  
Ohmsches Gesetz

**Spannungs- und Stromquelle**

Eine reale Spannungsquelle lässt sich durch die Beziehung

$$
U_a = U_0 - R_i\,I_a
$$

beschreiben. Darin ist $U_0$ die Leerlaufspannung und $R_i=-dU_a/dI_a$ der Innenwiderstand. Diesen Sachverhalt veranschaulicht das Ersatzschaltbild in Abb. 28.2.2 Eine ideale Spannungsquelle ist durch die Eigenschaft $R_i=0$ gekennzeichnet, d.h.: die Ausgangsspannung ist vom Strom unabhängig.

Ein anderes Ersatzschaltbild für eine reale Spannungsquelle lässt sich durch Umformen der Gl. (28.1) ableiten:

$$
I_a=\frac{U_0-U_a}{R_i}=I_0-\frac{U_a}{R_i}
$$

Darin ist $I_0=U_0/R_i$ der Kurzschlussstrom. Die zugehörige Schaltung zeigt Abb. 28.2.3. Man erkennt, dass der Ausgangsstrom um so weniger von der Ausgangsspannung abhängt, je größer $R_i$ ist. Der Grenzübergang $R_i\rightarrow\infty$ ergibt eine ideale Stromquelle.

Eine reale Spannungsquelle lässt sich nach Abb. 28.2.2 oder 28.2.3 sowohl mit Hilfe einer idealen Spannungs- als auch mit Hilfe einer idealen Stromquelle darstellen. Man wählt die eine oder die andere Darstellung, je nachdem ob der Innenwiderstand $R_i$ klein oder groß gegenüber dem in Frage kommenden Verbraucherwiderstand $R_V$ ist.

**Knotenregel**

Bei der Berechnung vieler Schaltungen machen wir von der Knotenregel Gebrauch. Sie besagt, dass die Summe aller Ströme, die in einen Knoten hinein fließen, gleich Null ist. Dabei werden Strompfeile, die zum Knoten hinzeigen, positiv gezählt und Strompfeile, die vom Knoten wegzeigen, negativ. Die Anwendung der Knotenregel wollen wir anhand der Schaltung in Abb. 28.2.4 demonstrieren. Gesucht sei die Spannung $U_3$. Zu ihrer Berechnung wenden wir die Knotenregel auf den Knoten K an:

$$
\sum_i I_i = I_1 + I_2 - I_3 = 0
$$

**Abb. 28.2.2.**  
Ersatzschaltbild für eine reale Spannungsquelle

**Abb. 28.2.3.**  
Ersatzschaltbild für eine reale Stromquelle

**Abb. 28.2.4.**  
Beispiel für die Anwendung der Knotenregel

**Abb. 28.2.5.**  
Beispiel für die Anwendung der Maschenregel

Nach dem Ohmschen Gesetz gilt:

$$
I_1=\frac{U_1-U_3}{R_1}
$$

$$
I_2=\frac{U_2-U_3}{R_2}
$$

$$
I_3=\frac{U_3}{R_3}
$$

Durch Einsetzen ergibt sich:

$$
\frac{U_1-U_3}{R_1}+\frac{U_2-U_3}{R_2}-\frac{U_3}{R_3}=0
$$

Daraus folgt das Ergebnis:

$$
U_3=\frac{U_1R_2R_3+U_2R_1R_3}{R_1R_2+R_1R_3+R_2R_3}
$$

**Maschenregel**

Ein weiteres Hilfsmittel zur Schaltungsberechnung ist die Maschenregel. Sie besagt, dass die Summe aller Spannungen längs einer geschlossenen Schleife Null ist. Dabei zählt man diejenigen Spannungen positiv, deren Pfeilrichtung mit dem gewählten Umlaufsinn übereinstimmt. Die anderen zählt man negativ. Bei der Schaltung in Abb 28.2.5 gilt also:

$$
\sum_i U_i = U_1 + U_4 - U_2 - U_3 = 0
$$

**Wechselstromkreis**

Wenn sich eine Schaltung durch eine Gleichspannungs-Übertragungsgleichung der Form $U_a=f(U_e)$ beschreiben lässt, gilt dieser Zusammenhang auch für beliebig zeitabhängige Spannungen, solange die Änderung der Eingangsspannung quasistationär, d.h. nicht zu schnell erfolgt. Zeitabhängige Größen bezeichnen wir mit Kleinbuchstaben und geben die Anhängigkeit von der Zeit $t$ explizit an. Im vorliegenden Fall schreiben wir demnach $u_a(t)=f[u_e(t)]$.

Es gibt jedoch häufig Fälle, in denen eine Übertragungsgleichung nur für Wechselspannungen ohne Gleichspannungsanteil gültig ist. Aus diesem Grund ist es sinnvoll, solche Wechselspannungen besonders zu kennzeichnen. Wir verwenden für ihren Momentanwert den Kleinbuchstaben $u$.

Ein besonders wichtiger Spezialfall sind solche Wechselspannungen, die cosinusförmig von der Zeit abhängen:

$$
u(t) = \hat U \ \cos(\omega t + \varphi_u)
$$

(28.2)

Darin ist $\hat U$ der Scheitelwert. Daneben werden zur Charakterisierung von Wechselspannungen auch der Effektivwert $U_{eff} = \hat U/\sqrt{2}$ oder die Spannung von Spitze zu Spitze $U_{SS} = 2 \hat U$ verwendet.

Die Rechengesetze für Winkelfunktionen sind relativ kompliziert, diejenigen für die Exponentialfunktion jedoch sehr einfach. Der Eulersche Satz

$$
e^{j\alpha} = \cos \alpha + j \sin \alpha
$$

(28.3)

bietet die Möglichkeit, eine Kosinusfunktion durch eine komplexe Exponentialfunktion auszudrücken. Mit $e^{-j\alpha} = \cos \alpha - j \sin \alpha$ folgt:

$$
\cos \alpha = \operatorname{Re}\{e^{j\alpha}\} = \frac{1}{2}\left(e^{j\alpha} + e^{-j\alpha}\right)
$$

Damit lässt sich die Gl. (28.2) auch in der Form

$$
u(t) = \hat U \cdot \operatorname{Re}\{e^{j(\omega t + \varphi_u)}\} = \operatorname{Re}\{\hat U \ e^{j\varphi_u} \cdot e^{j\omega t}\} = \operatorname{Re}\{\underline U \ e^{j\omega t}\}
$$

schreiben. Darin ist $\underline U = \hat U \ e^{j\varphi_u}$ die komplexe Amplitude. Für ihren Betrag gilt:

$$
|\underline U| = \hat U \cdot |e^{j\varphi_u}| = \hat U \sqrt{\cos^2 \varphi_u + \sin^2 \varphi_u} = \hat U
$$

Er ist also gleich dem Scheitelwert; $\underline U$ ist daher ein Spitzenwertzeiger. Man kann alternativ auch Effektivwertzeiger verwenden:

$$
u(t) = \sqrt{2}\, U_{eff} \cos(\omega t + \varphi_u) \quad \Leftrightarrow \quad \underline U_{eff} = U_{eff} \ e^{j\varphi_u}
$$

Oft wird nicht zwischen $\underline U_{eff}$ und $\underline U$ unterschieden. Bei der Netzwerkanalyse ist dies nicht von Bedeutung, da in diesem Fall immer Quotienten aus zwei Zeigern gebildet werden, z.B.

$$
\underline A = \frac{\underline U_2}{\underline U_1} \quad \text{oder} \quad \underline Z_e = \frac{\underline U_e}{\underline I_e}
$$

Analoge Festsetzungen treffen wir für zeitabhängige Ströme. Die entsprechenden Formelzeichen lauten:

$$
i(t), \ I, \ \hat I, \ \underline I
$$

Auch Wechselspannungen und Wechselströme werden durch Pfeile in den Schaltplänen gekennzeichnet. Die Pfeilrichtung sagt dann natürlich nichts mehr über die Polarität aus, sondern gibt lediglich an, mit welchem Vorzeichen man die Größen in die Rechnung einsetzen muss. Dabei gilt genau dieselbe Regel, wie sie in Abb. 28.2.2 für Gleichspannungen dargestellt ist.

Entsprechend zum Gleichstromkreis definiert man einen komplexen Widerstand, den man als Impedanz $\underline Z$ bezeichnet:

$$
\underline{Z} = \frac{\underline{U}}{\underline{I}} = \frac{\hat U\,e^{j\varphi_u}}{\hat I\,e^{j\varphi_i}} = \frac{\hat U}{\hat I}\,e^{j(\varphi_u-\varphi_i)} = |\underline{Z}|\,e^{j\varphi} = |\underline{Z}|\,(\cos\varphi + j\,\sin\varphi)
$$

$$
= |\underline{Z}|\,\cos\varphi + j\,|\underline{Z}|\,\sin\varphi = \mathrm{Re}\{\underline{Z}\} + j\mathrm{Im}\{\underline{Z}\}
$$

$\varphi$ ist die Phasenverschiebung zwischen Strom und Spannung. Eilt die Spannung dem Strom voraus, ist $\varphi$ positiv. Bei einem ohmschen Widerstand ist $\underline{Z} = R$, bei einer Kapazität gilt

$$
\underline{Z} = \frac{1}{j\omega C} = -\frac{j}{\omega C}
$$

und bei einer Induktivität $\underline{Z} = j\omega L$. Auf die komplexen Größen kann man die Gesetze des Gleichstromkreises anwenden [28.2.1].

Analog definieren wir eine komplexe Verstärkung:

$$
\underline{A} = \frac{\underline{U}_a}{\underline{U}_e} = \frac{\hat U_a\,e^{j\varphi_a}}{\hat U_e\,e^{j\varphi_e}} = \frac{\hat U_a}{\hat U_e}\,e^{j(\varphi_a-\varphi_e)} = |\underline{A}|\,e^{j\varphi}
$$

$\varphi$ ist die Phasenverschiebung zwischen Eingangs- und Ausgangsspannung. Eilt die Ausgangsspannung der Eingangsspannung voraus, ist $\varphi$ positiv; eilt sie nach, ist $\varphi$ negativ.

**Leistung**

Es gibt verschiedene Definitionen der Leistung, deren Zusammenhang hier zusammengestellt ist:

Die *Momentanleistung* ist definiert als:

$$
p(t) = u(t)\cdot i(t)
\qquad\qquad (28.4)
$$

Die *Wirkleistung* ist die mittlere Momentanleistung. Man erhält sie durch Mittelung über eine Periode:

$$
P = \frac{1}{T}\int_0^T u(t)\cdot i(t)\,dt
\qquad\qquad (28.5)
$$

Bei cosinusförmigem Zeitverlauf ergibt sich daraus:

$$
P = \frac{1}{T}\int_0^T \hat U\cos(\omega t+\varphi_u)\cdot \hat I\cos(\omega t+\varphi_i)\,dt
\qquad\qquad (28.6)
$$

$$
= \frac{1}{2}\,\hat U\,\hat I\,\cos(\varphi_u-\varphi_i) = U_{eff}\;I_{eff}\;\cos(\varphi_u-\varphi_i)
$$

Die *Scheinleistung* ist die Wirkleistung, die für den Fall $\varphi_u-\varphi_i=0$ auftreten würde:

$$
S = \frac{1}{2}\,\hat U\,\hat I = U_{eff}\;I_{eff}\quad \text{mit}\quad U_{eff}=\frac{\hat U}{\sqrt{2}} \quad \text{und} \quad I_{eff}=\frac{\hat I}{\sqrt{2}}
\qquad\qquad (28.7)
$$

Die *Blindleistung* enthält man, indem man in die Formel für die Wirkleistung (28.6) anstelle des Winkels $\varphi_i$ den Winkel $\varphi_i-90^\circ$ einsetzt:

$$
Q = \frac{1}{T}\int_0^T \hat U\cos(\omega t+\varphi_u)\cdot \hat I\cos(\omega t+\varphi_i-90^\circ)\,dt
\qquad\qquad (28.8)
$$

$$
= \frac{1}{2}\,\hat U\,\hat I\,\sin(\varphi_u-\varphi_i) = U_{eff}\;I_{eff}\;\sin(\varphi_u-\varphi_i)
$$

| Größe | Allgemein | Sinus |
|---|---|---|
| Signal | $u(t)$  $i(t)$ | $u(t)=\hat U\cos(\omega t+\varphi_u)$  $i(t)=\hat I\cos(\omega t+\varphi_i)$  $\varphi=\varphi_u-\varphi_i$ |
| Effektivwert | $U_{eff}=\sqrt{\frac{1}{T}\int_0^T u^2(t)\,dt}$  $I_{eff}=\sqrt{\frac{1}{T}\int_0^T i^2(t)\,dt}$ | $U_{eff}=\frac{\hat U}{\sqrt 2}$  $I_{eff}=\frac{\hat I}{\sqrt 2}$ |
| Wirkleistung | $P=\frac{1}{T}\int_0^T u(t)\,i(t)\,dt$ | $P=U_{eff}I_{eff}\cos\varphi=\frac{\hat U\hat I}{2}\cos\varphi$ |
| Scheinleistung | $S=U_{eff}\,I_{eff}$ | $S=U_{eff}\,I_{eff}=\frac{\hat U\hat I}{2}$ |
| Blindleistung | $Q=\sqrt{S^2-P^2}$ | $Q=U_{eff}I_{eff}\sin\varphi=\frac{\hat U\hat I}{2}\sin\varphi$ |
| Leistungsfaktor | $PF=\frac{P}{S}$ | $PF=\cos\varphi$ |

**Abb. 28.2.6.** Berechnung von Leistungen

Daraus ergibt sich wegen $\cos^2(\varphi_u-\varphi_i)+\sin^2(\varphi_u-\varphi_i)=1$ der Zusammenhang:

$$
P^2+Q^2=S^2
$$

(28.9)

Der *Leistungsfaktor* gibt an, wie groß der Anteil der Wirkleistung ist:

$$
PF=\frac{P}{S}\overset{(28.9)}{=}\frac{P}{\sqrt{P^2+Q^2}}=\cos(\varphi_u-\varphi_i)=\cos\varphi
$$

(28.10)

Für $Q=0$ wird der Leistungsfaktor maximal; dann gilt $PF=1$ und die Wirkleistung ist gleich der Scheinleistung.

Der Zusammenhang zwischen den verschiedenen Leistungsgrößen lässt sich mit komplexen Zeigern besonders einfach zeigen. Aus der Definition der Scheinleistung

$$
\underline S=\frac{1}{2}\,\underline U\,\underline I^{*}=U_{eff}\,I_{eff}^{*}
$$

(28.11)

folgt mit $\underline I=\sqrt{2}\,I_{eff}\,e^{j\varphi_i}$, $\underline I^{*}=\sqrt{2}\,I_{eff}\,e^{-j\varphi_i}$ und $\underline U=\sqrt{2}\,U_{eff}\,e^{j\varphi_u}$:

$$
\underline S=U_{eff}I_{eff}\,e^{j(\varphi_u-\varphi_i)}=U_{eff}I_{eff}\cos(\varphi_u-\varphi_i)+j\,U_{eff}I_{eff}\sin(\varphi_u-\varphi_i)=P+jQ
$$

Daraus ergibt sich der Zusammenhang

$$
|\underline S|^2=S^2=P^2+Q^2
$$

in Übereinstimmung mit (28.9).

Eine Übersicht der verschiedenen Leistungsgrößen ist in Abb. 28.2.6 gegeben. Dort sind zusätzlich auch die Zusammenhänge für beliebige Zeitsignale aufgenommen. Wenn man in diese allgemeinen Beziehungen cosinusförmige Signale einsetzt, ergeben sich die bekannten Beziehungen.

| Spannungsverhältnis |  |
|---|---|
| $A$ | $A_{dB}$ |
| $10^{-6}$ | −120 dB |
| $10^{-3}$ | −60 dB |
| $10^{-2}$ | −40 dB |
| $10^{-1}$ | −20 dB |
| 0,5 | −6 dB |
| $1/\sqrt{2} \approx 0{,}7$ | −3 dB |
| 1 | 0 dB |
| $\sqrt{2} \approx 1{,}4$ | 3 dB |
| 2 | 6 dB |
| 10 | 20 dB |
| $10^2$ | 40 dB |
| $10^3$ | 60 dB |
| $10^6$ | 120 dB |

a Spannungsverhältnis

| Leistung |  | Spannung |
|---|---|---|
| $P_{dBm}$ | $P$ | $U_{eff}$ |
| −100 dBm | 100 fW | 2,24 $\mu$V |
| −80 dBm | 10 pW | 22,4 $\mu$V |
| −60 dBm | 1 nW | 224 $\mu$V |
| −40 dBm | 100 nW | 2,24 mV |
| −20 dBm | 10 $\mu$W | 22,4 mV |
| −10 dBm | 100 $\mu$W | 70,8 mV |
| −6 dBm | 250 $\mu$W | 112 mV |
| −3 dBm | 500 $\mu$W | 159 mV |
| 0 dBm | 1 mW | 224 mV |
| 3 dBm | 2 mW | 316 mV |
| 6 dBm | 4 mW | 448 mV |
| 10 dBm | 10 mW | 708 mV |
| 20 dBm | 100 mW | 2,24 V |

b Leistung und Spannung an $R = 50\,\Omega$

**Abb. 28.2.7.** Umrechnungstabellen

**Logarithmisches Spannungsverhältnis**

In der Elektronik wird häufig eine logarithmische Größe $A_{dB}$ für das Spannungsverhältnis $A = \hat{U}_a/\hat{U}_e$ angegeben. Der Zusammenhang lautet:

$$
A_{dB} = 20\,\mathrm{dB}\cdot \lg \frac{\hat{U}_a}{\hat{U}_e} = 20\,\mathrm{dB}\cdot \lg A
$$

(28.12)

In Abb. 28.2.7a haben wir einige Werte zusammengestellt.

In der Nachrichtentechnik wird häufig nicht die Spannung, sondern die Leistung eines Signals angegeben. Sie bezieht sich auf einen Widerstand von $50\,\Omega$ – den typischen Wellenwiderstand der Verbindungsleitungen – und wird logarithmisch mit Bezug auf 1 mW angegeben. Mit $P = U_{eff}^2/(50\,\Omega)$ gilt:

$$
P_{dBm} = 10\,\mathrm{dBm}\cdot \lg \frac{P}{1\,\mathrm{mW}} = 20\,\mathrm{dBm}\cdot \lg \frac{U_{eff}}{0{,}224\,\mathrm{V}}
$$

(28.13)

Das $m$ in der Einheit dBm steht für den Bezug auf 1 mW. In Abb. 28.2.7b sind einige Werte angegeben.

**Logarithmen**

Der Logarithmus einer mit einer Einheit behafteten Größe ist nicht definiert. Deshalb schreiben wir z.B. nicht $\lg\,f$, sondern $\lg(f/\mathrm{Hz})$. Anders verhält es sich bei Differenzen von Logarithmen: Der Ausdruck $\lg\,f_2 - \lg\,f_1$ ist eindeutig definiert, weil er sich in den Ausdruck $\lg(f_2/f_1)$ umformen lässt.

**Frequenz**

Die Frequenz gibt die Zahl der Schwingungen je Sekunde an. Ihre Einheit ist:

$$
[f] = \frac{1}{\mathrm{s}} = \mathrm{Hz}
$$

(28.14)

Die Kreisfrequenz $\omega = 2 \pi f$ besitzt die Einheit:

$$
[\omega] = \frac{\mathrm{rad}}{\mathrm{s}}
$$

(28.15)

Darin ist rad der Winkel im Bogenmaß; er gibt das Verhältnis von Bogenlänge zu Radius bei einem Kreis an und ist daher dimensionslos. Bei einem ganzen Kreis gilt daher $2 \pi$ rad $= 360^\circ$.

**Rechenzeichen**

Häufig verwenden wir eine abgekürzte Schreibweise für die Differentiation nach der Zeit:

$$
\frac{dU}{dt} = \dot{U}, \qquad \frac{d^2U}{dt^2} = \ddot{U}
$$

Das Rechenzeichen $\sim$ bedeutet proportional, das Rechenzeichen $\approx$ bedeutet ungefähr gleich. Das Zeichen $\parallel$ bedeutet parallel. Wir verwenden es, um eine Parallelschaltung von Widerständen abgekürzt darzustellen: $R_1 \parallel R_2 = R_1 \cdot R_2/(R_1 + R_2)$
