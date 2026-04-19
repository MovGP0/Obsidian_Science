# Current Measurement

<!-- page-import:1094:start -->
18.2 Strommessung 1057

**Abb. 18.14.** Optische Signalübertragung im Gegentakt-AB-Betrieb. Der Widerstand $R_2$ bestimmt die Schleifenverstärkung von OV1

Bei positiven Eingangsspannungen geht der Ausgang von OV1 nach Minus und der Strom durch den unteren Optokoppler steigt an bis $I_{F1} - I'_{F1} = U_e/R_1$ ist. Diese Stromdifferenz bewirkt bei OV2 eine Ausgangsspannung

$$
U_a = (I_{F2} - I'_{F2})\,R_1 = (I_{F1} - I'_{F1})\,R_1 = U_e
$$

Da die Paarungstoleranz in den Doppel-Optokopplern nie ideal ist, besitzt die Schaltung in Abb. 18.14 neben einer geringeren Ruhestromaufnahme auch eine bessere Nullpunktstabilität und geringere Verzerrungen.

## 18.2 Strommessung

### 18.2.1 Strommessung mit Shunts

Die übliche Methode zur Messung eines Stroms besteht darin, den Strom durch einen Strommesswiderstand, einen Shunt, fließen zu lassen und den Spannungsabfall daran zu messen. Um den Spannungsabfall und die damit verbundene Verlustleistung klein zu halten, dimensioniert man den Shunt so niederohmig, dass der Spannungsabfall 100 mV nicht überschreitet. Deshalb ist in der Regel eine Nachverstärkung dieser Spannung erforderlich.

Die verbreitetste Anwendung ist die Messung der Stromaufnahme einer Schaltung. Dazu fügt man an einer beliebigen Stelle des Versorgungsstromkreises den Shunt zur Strommessung ein, denn der Strom in einem Stromkreis ist an allen Stellen gleich groß. Bei elektronischen Geräten kommt allerdings die Einschränkung hinzu, dass die Schaltung immer mit Masse verbunden ist. Wenn man wie in Abb. 18.15 den Shunt an der Schaltungsmasse anschließt, setzt das eine massefreie (potentialfreie) Betriebsspannungsquelle voraus. An dem unteren Anschluss des Shunts ergibt sich hier eine (gegen Masse) negative Spannung, die der als invertierender Verstärker beschaltete Operationsverstärker in eine positive Ausgangsspannung umsetzt.

Wenn die Betriebsspannungsquelle fest mit der Schaltungsmasse verbunden ist, muss man den Shunt in die positive Versorgungsleitung legen wie in Abb. 18.16 gezeigt wird. Dies ist die übliche Situation; sie tritt zwangsläufig ein, wenn die Stromversorgung mehrere [unclear]
<!-- page-import:1094:end -->

<!-- page-import:1095:start -->
1058  18. Messschaltungen

**Abb. 18.15.**  
Strommessung in der Masseleitung mit einem Dimensionierungsbeispiel

$$U_a = \frac{R_2}{R_1} R_S I_b$$

Spannungen liefert. Ein Problem entsteht hier dadurch, dass der Strommessspannung, die meist nur 100 mV beträgt, die Betriebsspannung von 3,3 V oder 5 V überlagert ist. Zur Ermittlung des Stroms benötigt man daher einen Subtrahierer, an dessen Ausgang lediglich die verstärkte Potentialdifferenz auftritt. Wenn man für den Subtrahierer Widerstände mit einer Toleranz von 1% einsetzt, muss man davon ausgehen, dass ein Gleichtaktfehler von dieser Größe auftritt, also 5 V · 1 % = 50 mV. Das ist im Vergleich zum Nutzsignal von 100 mV ein untragbar hoher Fehler. Aus diesem Grund wird diese Schaltung selten eingesetzt.

Eine Schaltung, bei der das Toleranzproblem bei der Differenzbildung nicht auftritt, ist in Abb. 18.17 dargestellt. Hier fließt durch den Transistor ein Strom, der an dem Widerstand $R_1$ einen Spannungsabfall verursacht, der genau so groß ist wie der an dem Shunt.

$$R_S I_b = R_1 I_1 \quad \Rightarrow \quad I_1 = \frac{R_S I_b}{R_1} \quad \Rightarrow \quad U_a = \frac{R_2}{R_1} R_S I_b$$

Der Kollektorstrom des Transistors fließt auch durch $R_2$ und bewirkt dort die Ausgangsspannung. Der Ausgang ist allerdings nicht niederohmig; um ihn belastbar zu machen, kann man einen Spannungsfolger nachschalten.

Wenn man den Operationsverstärker aus der Betriebsspannungsquelle $U_b$ versorgt, ist seine Gleichtaktaussteuerung gleich der positiven Betriebsspannung. Dieser Fall lässt sich durch den Einsatz von rail-to-rail Operationsverstärkern handhaben. Es kann jedoch der Wunsch bestehen, den Operationsverstärker aus eine Spannungsquelle zu betreiben, die deutlich niedriger ist als die Spannung an dem Strommesswiderstand. Dann benötigt man Operationsverstärker, deren Gleichtaktaussteuerbarkeit weit über der Betriebsspannung liegt. Dafür verwendet man spezielle Differenzverstärker am Eingang, deren Schaltung in Abb. 18.18 gezeigt ist.

**Abb. 18.16.**  
Strommessung mit einem Subtrahierer mit einem Dimensionierungsbeispiel

$$U_a = \frac{R_2}{R_1} R_S I_b$$
<!-- page-import:1095:end -->

<!-- page-import:1096:start -->
18.2 Strommessung 1059

![Abb. 18.17. Strommessung mit Hilfstransistor mit einem Dimensionierungsbeispiel]()

**Abb. 18.17.**  
Strommessung mit Hilfstransistor mit einem Dimensionierungsbeispiel

$$
U_a = \frac{R_2}{R_1} R_S I_b
$$

Die Transistoren $T_1$ und $T_4$ bilden den Differenzverstärker. Hier sind die Emitter dieser Transistoren die Eingänge und die Basen liegen auf gleichem Potential, also genau umgekehrt wie beim normalen Differenzverstärker. Die Ruheströme werden mit den Transistoren $T_2$ und $T_3$ eingestellt, die zusammen mit $T_1$ und $T_4$ Stromspiegel bilden. Durch die Parallelschaltung von $T_2$ und $T_3$ wird erreicht, dass die Summe der Kollektorströme von $T_1$ und $T_4$ konstant gleich $I_0$ ist wie bei dem konventionellen Differenzverstärker in Abb. 4.52 auf Seite 340.

Wenn man die Transistoren $T_1$ bis $T_4$ in der integrierten Schaltung in eine isolierte Wanne setzt, sind z.B. bei dem LT1490 Gleichtaktspannungen möglich, die um 40 V über der Betriebsspannung liegen. Aus diesem Grund wird dieser Differenzverstärker als „over-the-top“-Verstärker bezeichnet. Es ist natürlich ungewöhnlich, Emitter als Eingang zu verwenden, da dann ein entsprechend hoher Eingangsstrom fließt. Die Eingänge des Differenzverstärkers übernehmen hier auch seine Stromversorgung. Wenn man jedoch die Transistoren mit niedrigen Kollektorströmen betreibt, wie in dem Dimensionierungsbeispiel, stören die Eingangsströme nicht.

Man erkennt in Abb. 18.17, dass diese Schaltung zur Strommessung nur für positive Ströme $I_b$ funktioniert, weil sich die Stromrichtung durch den Transistor nicht umkehren lässt. Es kann aber Fälle geben, in denen man den Strom in beiden Richtungen messen möchte z.B. bei der Ladung und Entladung eines Akkus. Dazu kann man wie in Abb. 18.19 die Anordnung zur Strommessung für jedes Vorzeichen mit entgegengesetzter Polung getrennt anwenden und den Strommesswert an dem gemeinsamen Widerstand $R_2$ summieren. Die Ausgangsspannung gibt dann den Betrag des Stroms an. Sein Vorzeichen erhält man, indem man an den Ausgängen der Operationsverstärker einen Komparator anschließt. Schaltungen, die nach diesem Prinzip arbeiten sind z.B. der AD8210 oder der LT1490.

![Abb. 18.18. Differenzverstärker „over the top“]()

**Abb. 18.18.**  
Differenzverstärker  
„over the top“
<!-- page-import:1096:end -->

<!-- page-import:1097:start -->
1060  18. Messschaltungen

**Abb. 18.19.** Strommessung für bidirektionale Ströme

$$
U_a=\frac{R_2}{R_1}R_S\,|I_L|
$$

## 18.2.2 Potentialfreies Amperemeter mit niedrigem Spannungsabfall

In Abschnitt 11.2 auf S. 770 haben wir einen Strom-Spannungs-Konverter kennen gelernt, der sich infolge seines extrem niedrigen Eingangswiderstandes nahezu ideal als Amperemeter eignet. Allerdings können nur Ströme gemessen werden, die unmittelbar nach Masse fließen, da der Eingang eine virtuelle Masse darstellt. Legt man jedoch den Strommesswiderstand wie in Abb. 18.20 in die Gegenkopplung der Eingangsverstärker, ergibt sich ein erdfreies Amperemeter mit sehr niedrigem Spannungsabfall.

Durch die Gegenkopplung über die Widerstände $R_1$ wird die Eingangsspannungsdifferenz von beiden Verstärkern Null; d.h. $V_{e1}=V_{e2}=V_e$ bzw $U_D=0$. Wenn ein Strom in den Anschluss 1 fließt, stellt sich das Ausgangspotential von OV2 durch die Gegenkopplung auf den Wert

$$
V_2=V_e-IR_1
$$

ein. Mit $V_N=V_e$ folgt daraus:

$$
V_1=V_2+2(V_e-V_2)=V_e+R_SI
$$

(18.2)

(18.3)

Damit ergibt sich der aus dem Anschluss 2 herausfließende Strom zu:

**Abb. 18.20.** Potentialfreies Amperemeter ohne Spannungsabfall.

$$
U_a=2R_SI
$$
<!-- page-import:1097:end -->

<!-- page-import:1098:start -->
18.2 Strommessung 1061

Abb. 18.21.  
Einfacher Trennverstärker zur Strommessung

$U_a = RI$

$$
I'=\frac{V_1-V_e}{R_1}=I
$$

(18.4)

Der Subtrahierer OV3 bildet die Differenz $V_1 - V_2$. Seine Ausgangsspannung beträgt demnach mit (18.2) und (18.3) $U_a = 2R_S\,I$. Sie ist also proportional zum fließenden Strom. Die Schaltung eignet sich allerdings nur zur Messung kleiner Ströme, weil die Operationsverstärker OV1 und OV2 den Strom $I$ aktiv aufbringen müssen.

## 18.2.3 Strommessung auf hohem Potential

Die Gleichtaktaussteuerbarkeit der vorhergehenden Schaltung ist auf Werte innerhalb der Betriebspotentiale begrenzt. Zur Messung von Strömen auf höherem Potential eignet sich die einfache Schaltung nach Abb. 11.8 von S. 770, wenn man sie statt an Nullpotential am Floating-Ground eines Trennverstärkers anschließt. Ihre Ausgangsspannung wird mit Hilfe des Trennverstärkers auf Nullpotential übertragen.

Der Aufwand lässt sich ganz wesentlich reduzieren, wenn man bei der Strommessung einen Spannungsabfall von 1 bis 2 V zulassen kann (z.B. in der Anodenleitung von Hochspannungsröhren). In diesem Fall lässt man den zu messenden Strom einfach durch die Leuchtdiode eines Optokopplers fließen. Dadurch entfällt die erdfreie Stromversorgung. Zur Linearisierung der Übertragungskennlinie kann man wie in Abb. 18.21 auf der Sekundärseite einen Referenz-Optokoppler verwenden. Sein Eingangsstrom $I_2$ wird durch den Operationsverstärker so geregelt, dass sich die Fotoströme von Referenz- und Messkoppler gegenseitig aufheben. Wenn die beiden Koppler gut gepaart sind, wird dann $I_2 = I$ Dieser Strom bewirkt die Ausgangsspannung an dem Widerstand $R$.

## 18.2.4 Strommessung über das Magnetfeld

Ein Leiter, durch den ein Strom der Größe $I$ fließt, ist gemäß Abb. 18.22 von einem Magnetfeld umgeben, das die *magnetische Induktion*

$$
B=\mu_0\,\mu_r\,\frac{1}{2r\pi}
\qquad
[B]=\frac{\mathrm{Vs}}{\mathrm{m}^2}=\mathrm{T}
$$

(18.5)

besitzt. Darin ist $\mu_0 = 4\pi \cdot 10^{-7}\,\mathrm{Vs/Am}$ die magnetische Feldkonstante und $\mu_r$ die Permeabilitätszahl des Stoffs, die in Luft gleich 1 ist. Man kann den Ausdruck $L = 2r\pi$ als Länge der betrachteten Feldlinie auffassen. Als Beispiel soll die magnetische Induktion für einen Strom von 1 A im Abstand 1 mm berechnet werden:

$$
B=\mu_0\,\mu_r\,\frac{I}{2r\pi}
=4\pi\cdot10^{-7}\,\frac{\mathrm{Vs}}{\mathrm{Am}}\,
\frac{1\,\mathrm{A}}{2\cdot10^{-3}\,\mathrm{m}\,\pi}
=0{,}63\,\frac{\mathrm{Vs}}{\mathrm{m}^2}
=0{,}63\,\mathrm{mT}
$$
<!-- page-import:1098:end -->

<!-- page-import:1099:start -->
1062  18. Messschaltungen

**Abb. 18.22.**  
Magnetische Induktion eines Leiters, der mit dem Strom I durchflossen wird im Abstand r

$$
B = \mu_0\,\mu_r\,\frac{I}{2r\pi}
$$

Da die magnetische Induktion proportional zum fließenden Strom ist, kann man sie zur Strommessung verwenden. Zur Messung von Magnetfeldern setzt man Hallgeneratoren ein. Der Halleffekt beruht darauf, dass die Lorentzkraft auf Ladungsträger wirkt, die sich in einem Magnetfeld bewegen. Dadurch werden auch die Ladungsträger abgelenkt, die durch einen Leiter fließen. Dann ist, wie in Abb. 18.23 dargestellt, eine Hallspannung

$$
U_H = \frac{I_H}{nd}\,B
$$

außen an dem Leiter messbar. Um möglichst große Signale zu erhalten, verwendet man Materialien mit geringer Ladungsträgerdichte n und geringer Dicke d; deshalb werden Hallelemente als Halbleiter realisiert. Meist fügt man zu dem Hallelement noch eine integrierte Schaltung hinzu, die die Hallspannung aufbereitet und den Hilfsstrom $I_H$ liefert.

Der Einsatz eines integrierten Hallgenerators zur Strommessung auf einer Leiterplatte ist in Abb. 18.24 dargestellt. Man kann den zu messenden Strom mit einer Drahtbrücke über den Hall-IC leiten oder mit einer Leiterbahn darunter hindurch leiten oder beides kombinieren, um die magnetischen Induktionen zu kombinieren. Bei handelsüblichen Bausteinen kann man ein Messsignal in der Größenordnung von 100 mV/A erwarten. Ein wesentlicher Vorteil dieser Methode zur Strommessung gegenüber der Verwendung von Shunts besteht in der Potentialtrennung. Auf diese Weise lässt sich z.B. auch der Strom in einer Phase eines netzbetriebenen Motors ohne zusätzlichen Trennverstärker messen.

Die gebräuchlichste Möglichkeit, Ströme über ihr Magnetfeld zu messen, besteht in der in Abb. 18.25 dargestellten Kompensationsmethode. Hier wird mit einer auf einen Ferritring gewickelten Spule ein Magnetfeld erzeugt, das das von dem Strom I verursachte Magnetfeld gerade kompensiert. Der dazu erforderliche Strom wäre bei einer einzigen Windung auf der Spule gleich dem zu messenden Strom. Um mit kleinen Kompensationsströmen auszukommen, gibt man der Spule $n = 100 \ldots 1000$ Windungen; dann beträgt der Kompensationsstrom $I_k = I/n$. Dieser Strom fließt auch durch den Messwiderstand $R$ und erzeugt an ihm den Spannungsabfall:

$$
U_{mess} = I_k\,R = \frac{R}{n}\cdot I
$$

**Abb. 18.23.**  
Der Halleffekt. Eingezeichnet ist die Ablenkung der Bahn eines Ladungsträgers durch das Magnetfeld B.

$$
U_H \sim I_H \cdot B
$$
<!-- page-import:1099:end -->

<!-- page-import:1100:start -->
18.2 Strommessung 1063

Abb. 18.24. Einsatz eines integrierten Hallgenerators zur Strommessung auf einer Leiterplatte.  
Links: Der Strom fließt durch eine Drahtbrücke über den Baustein  
Rechts: Der Strom fließt in einer Leiterbahn unter dem Baustein

Der Operationsverstärker in Abb. 18.25 übernimmt die Stromregelung für den Strom $I_k$. Seine Ausgangsspannung stellt sich so ein, dass seine Eingangsspannungsdifferenz Null wird. Dann ist auch die Hallspannung Null, das Magnetfeld ist dann also vollständig kompensiert. Der Vorteil des Kompensationsverfahrens gegenüber der direkten Messung der magnetischen Induktion ist, dass hier das Feld auf Null abgeglichen wird und daher die Daten und Nichtlinearitäten des Hallgenerators oder des Ferritkerns nicht in das Messergebnis eingehen. Das vielseitigste Angebot von derartigen Stromsensoren bietet die Firma LEM. Die Bandbreite der erhältlichen Module beträgt typisch 100 kHz; das ist allerdings für die meisten getakteten Stromversorgungen zu langsam. Ein weiterer Nachteil ist, dass diese Stromsensoren für viele Anwendungen zu teuer sind.

$$U_{mess}=\frac{R}{n}\cdot I$$

Abb. 18.25. Stromwandler nach dem Kompensationsverfahren. Im Luftspalt des Ferritkerns befindet sich der Hallgenerator.
<!-- page-import:1100:end -->
