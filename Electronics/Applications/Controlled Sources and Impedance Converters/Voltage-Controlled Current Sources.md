# Voltage-Controlled Current Sources

<!-- page-import:0808:start -->
771

## 11.3 Spannungsgesteuerte Stromquellen

**Abb. 11.9.**  
Modell einer realen einer spannungsgesteuerten Stromquelle

Spannungsgesteuerte Stromquellen sollen einem Verbraucher einen Strom $I_2$ einprägen, der von der Ausgangsspannung $U_2$ unabhängig ist und nur von der Steuerspannung $U_1$ bestimmt wird. Es soll also gelten:

$$
I_1 = 0 \cdot U_1 + 0 \cdot U_2
$$

$$
I_2 = S U_1 + 0 \cdot U_2
\qquad\qquad (11.4)
$$

Diese Forderung lässt sich in der Praxis nur näherungsweise erfüllen. Unter Berücksichtigung der gut realisierbaren Rückwirkungsfreiheit ergibt sich für eine reale Stromquelle das Ersatzschaltbild in Abb. 11.9 mit den Übertragungsgleichungen:

$$
I_1 = \frac{1}{r_e} U_1 + 0 \cdot U_2,
$$

$$
I_2 = S U_1 - \frac{1}{r_a} U_2
\qquad\qquad (11.5)
$$

Für $r_e \to \infty$ und $r_a \to \infty$ ergibt sich die ideale Stromquelle. Der Parameter $S$ wird als Steilheit oder Übertragungsleitwert bezeichnet.

### 11.3.1 Stromquellen für potentialfreie Verbraucher

Beim Umkehr- und beim Elektrometerverstärker fließt durch den Gegenkopplungswiderstand der Strom $I_2 = U_1/R_1$. Er ist also vom Spannungsabfall am Gegenkopplungswiderstand unabhängig. Die beiden Schaltungen lassen sich demnach als Stromquellen verwenden, indem man den Verbraucher $R_L$ anstelle des Gegenkopplungswiderstandes einsetzt, wie es in Abb. 11.10 und 11.11 dargestellt ist.

Für die Eingangsimpedanz erhält man dieselben Beziehungen wie bei den entsprechenden spannungsgesteuerten Spannungsquellen in Abb. 11.3 und 11.4. Bei endlicher

*Ausgangsstrom:* $I_2 = \dfrac{U_1}{R_1}$  
*Ausgangswiderstand:* $r_a = A_D R_1$

**Abb. 11.10.**  
Invertierender Verstärker als spannungsgesteuerte Stromquelle

*Ausgangsstrom:* $I_2 = \dfrac{U_1}{R_1}$  
*Ausgangswiderstand:* $r_a = A_D R_1$

**Abb. 11.11.**  
Nichtinvertierender Verstärker als spannungsgesteuerte Stromquelle
<!-- page-import:0808:end -->

<!-- page-import:0810:start -->
11.3 Spannungsgesteuerte Stromquellen 773

Ausgangsstrom: $I_2=\dfrac{U_1}{R_1}$ für $R_3=R_1$

**Abb. 11.13.** Spannungsgesteuerte Stromquelle für geerdete Verbraucher. Die Realisierung ist besonders einfach, wenn man einen integrierten Subtrahierer einsetzt, der die 4 Widerstände $R_2$ bereits enthält wie z.B. den AD8276.

man eine Kollektor oder eine Drain-Elektrode als Ausgang der Stromquelle verwendet, die von Natur aus einen hohen Ausgangswiderstand besitzen. Derartige Stromquellen sind in den Abbildungen 11.15 bis 11.21 dargestellt.

Vom Standpunkt der elektrischen Daten her gesehen sind die beiden Stromquellen in Abb. 11.10 und 11.11 für viele Anwendungszwecke geeignet. Sie besitzen jedoch einen großen schaltungstechnischen Nachteil: Der Verbraucher $R_L$ darf nicht einseitig an ein festes Potential angeschlossen werden, da sonst entweder der Verstärkerausgang oder der N-Eingang kurzgeschlossen wird. Diese Einschränkung besitzen die folgenden Schaltungen nicht.

## 11.3.2 Stromquellen für geerdete Verbraucher

Die Funktionsweise der Stromquelle in Abb. 11.13 beruht darauf, dass der Ausgangsstrom über den Spannungsabfall an $R_1$ gemessen wird. Die Ausgangsspannung des Operationsverstärkers stellt sich so ein, dass dieser Spannungsabfall gleich der vorgegebenen Eingangsspannung wird. Zur Berechnung des Ausgangsstromes wenden wir die Knotenregel auf den N- und P-Eingang und auf den Ausgang an. Damit ergibt sich:

$$
\frac{V_a-V_N}{R_2}-\frac{V_N}{R_2}=0
\qquad
\frac{U_1-V_P}{R_2+R_3}+\frac{U_2-V_P}{R_2}=0
$$

$$
\frac{V_a-U_2}{R_1}+\frac{V_P-U_2}{R_2}-I_2=0
$$

Mit der Bezeichnung $V_N=V_P$ erhalten wir daraus den Ausgangsstrom:

$$
I_2=\frac{R_1+2R_2}{2R_2+R_3}\cdot\frac{U_1}{R_1}+\frac{R_3-R_1}{2R_2+R_3}\cdot\frac{U_2}{R_1}
$$

(11.9)

Man sieht, dass der Ausgangsstrom für $R_3=R_1$ von der Ausgangsspannung $U_2$ unabhängig wird. Dann wird also der Ausgangswiderstand $r_a=\infty$, und der Ausgangsstrom beträgt $I_2=U_1/R_1$. Der Spannungsabfall an dem Strommesswiderstand ist ungefähr gleich der Eingangsspannung $U_1$. Um wenig Spannung für die Strommessung zu verschenken wählt man $U_1\leq 1\,\mathrm{V}$. Die Widerstände $R_2$ macht man groß gegenüber $R_1$, damit der Operationsverstärker und die Spannungsquelle $U_1$ nicht unnötig belastet werden. Durch Feinabgleich von $R_3$ lässt sich der Ausgangswiderstand der Stromquelle für niedrige Frequenzen auch bei einem realen Operationsverstärker auf Unendlich abgleichen.
<!-- page-import:0810:end -->

<!-- page-import:0811:start -->
774  11. Gesteuerte Quellen und Impedanzkonverter

Ausgangsstrom: $I_2 = I_{2,0} - \frac{U_2}{r_a} = 10\,\mathrm{mA} + \frac{U_2}{2\,\mathrm{k}\Omega}$

**Abb. 11.14.** Stromquelle mit negativem Ausgangswiderstand. Beispiel für einen Ausgangswiderstand $r_a = -2\,\mathrm{k}\Omega$ und einen Kurzschlußstrom $I_{2,0} = 10\,\mathrm{mA}$

Der Innenwiderstand $R_g$ der Steuerspannungsquelle liegt in Reihe mit $R_3$ und $R_2$. Damit er die Ergebnisse nicht verfälscht, sollte er vernachlässigbar sein.

Die Schaltung lässt sich auch als Stromquelle mit *negativem Ausgangswiderstand* dimensionieren. Abb. 11.14 zeigt diese Möglichkeit. Dazu macht man $R_3 > R_1$ um die Mitkopplung zu verstärken und erhält dann aus Gl. (11.9) den Ausgangswiderstand:

$$
r_a = -\frac{\partial U_2}{\partial I_2} = \frac{2R_2 + R_3}{R_1 - R_3}\,R_1
$$

(11.10)

Gleichzeitig verkleinert man den Strommesswiderstand $R_1$ geringfügig, um den Kurzschlussstrom $I_{2,0}$ für $U_2 = 0$ konstant zu halten. Aus den Gl. 11.9 und 11.10 folgt dann die Dimensionierung der Stromquelle:

$$
R_1 = \frac{-r_a\,U_{ref}}{U_{ref} - r_a\,I_{2,0}}
\qquad
R_3 = \left(1 + \frac{2R_2}{-r_a}\right)\frac{U_{ref}}{I_{2,0}}
$$

(11.11)

Bei der Anwendung der Beziehungen muss man den Ausgangswiderstand vorzeichenrichtig einsetzen.

## 11.3.3 Transistor-Präzisionsstromquellen

In Kapitel 4 haben wir einfache Stromquellen aus einem Bipolar- bzw. Feldeffekt-Transistor kennen gelernt, die einen Verbraucher speisen können, der mit einem Anschluss auf festem Potential liegt. Der Nachteil dieser Schaltungen besteht darin, dass der Ausgangsstrom nicht genau definiert ist, da er von $U_{BE}$ bzw. $U_{GS}$ beeinflusst wird. Es liegt nun nahe, diesen Einfluss durch Einsatz eines Operationsverstärkers zu eliminieren. Abb. 11.15 zeigt die entsprechenden Schaltungen für einen bipolaren Transistor und für einen Feldeffekttransistor. Die Ausgangsspannung des Operationsverstärkers stellt sich so ein, dass die Spannung an dem Widerstand $R_1$ gleich $U_1$ wird. (Dies gilt natürlich nur für positive Spannungen, da die Transistoren sonst sperren.) Der Strom durch $R_1$ wird dann $U_1/R_1$. Der Ausgangsstrom beträgt somit:

beim Bipolartransistor:
$$
I_2 = \frac{U_1}{R_1}\frac{B}{B+1} \approx \frac{U_1}{R_1}\left(1-\frac{1}{B}\right)
$$

beim Fet:
$$
I_2 = \frac{U_1}{R_1}
$$
<!-- page-import:0811:end -->

<!-- page-import:0812:start -->
11.3 Spannungsgesteuerte Stromquellen 775

*Ausgangsstrom:* $I_2=\dfrac{U_1}{R_1}$

*Ausgangswiderstand:* $r_a=\beta r_{CE}$

**Abb. 11.15.**  
Stromquelle mit Bipolartransistor

*Ausgangsstrom:* $I_2=\dfrac{U_1}{R_1}$

*Ausgangswiderstand:* $r_a=\mu A_D R_1$

**Abb. 11.16.**  
Stromquelle mit Mosfet

Der Unterschied rührt daher, dass beim Bipolartransistor ein Teil des Emitterstroms über die Basis abfließt. Da die Stromverstärkung $B$ von $U_{CE}$ abhängt, ändert sich auch $I_B$ mit der Ausgangsspannung $U_2$. Nach (4.1) auf S. 289 wird durch diesen Effekt der Ausgangswiderstand auf den Wert $\beta r_{CE}$ begrenzt, auch wenn der Operationsverstärker als ideal angenommen wird.

Der Einfluss der endlichen Stromverstärkung lässt sich verkleinern, wenn man den Bipolartransistor durch eine DarlingtonschaItung ersetzt. Praktisch ganz beseitigen kann man diesen Einfluss durch Einsatz eines Feldeffekttransistors, weil bei ihm kein Gate-Strom fließt. Begrenzt wird der Ausgangswiderstand der Schaltung in Abb. 11.16 letztlich durch die endliche Verstärkung des Operationsverstärkers. Um ihn zu berechnen, entnehmen wir der Schaltung für $U_1=\text{const}$ folgende Beziehungen:

$$dU_{DS}\approx -dU_2$$

$$dU_{GS}=dU_G-dU_S=-A_D R_1 dI_2-R_1 dI_2\approx -A_D R_1 dI_2$$

Mit der Grundgleichung (3.9) von S. 190

$$dI_2=S dU_{GS}+\frac{1}{r_{DS}} dU_{DS}$$

erhalten wir den Ausgangswiderstand:

$$r_a=-\frac{dU_2}{dI_2}=r_{DS}(1+A_D S R_1)\approx \mu A_D R_1 \qquad (11.12)$$

Er ist also noch um den Faktor $\mu=S r_{DS}\approx 100$ größer als bei der äquivalenten Operationsverstärker-Stromquelle ohne Fet wie Abb. 11.12 zeigt. Mit den Werten des dort angegebenen Zahlenbeispiels erhält man hier den sehr hohen Ausgangswiderstand von ca. $1\,\mathrm{G}\Omega$. Wegen der Frequenzabhängigkeit der Differenzverstärkung $A_D$ ist dieser Wert jedoch nur unterhalb der Grenzfrequenz $f_{gA}$ des Operationsverstärkers gültig. Bei höheren Frequenzen müssen wir die Differenzverstärkung komplex ansetzen und erhalten anstelle von Gl. (11.12) die Ausgangsimpedanz:
<!-- page-import:0812:end -->

<!-- page-import:0813:start -->
776  11. Gesteuerte Quellen und Impedanzkonverter

*Ausgangsstrom:* $I_2 = -\dfrac{U_1}{R_1}$

*Ausgangswiderstand:* $r_a = \mu A_D R_1$

**Abb. 11.17.**  
Invertierende Stromquelle

*Ausgangsstrom:* $I_2 = -\dfrac{U_1}{R_1}$

*Ausgangswiderstand:* $r_a = \mu A_D R_1$

**Abb. 11.18.**  
Stromquelle für Verbraucher mit negativer Versorgungsspannung

$$
\underline{Z_a} = \underline{A_D}\mu R_1 = \frac{A_D}{1 + j\frac{\omega}{\omega_g A}} \mu R_1
\qquad (11.13)
$$

Wie der Vergleich mit Gl. (11.7) und (11.8) zeigt, lässt sich diese Impedanz darstellen als Parallelschaltung eines ohmschen Widerstandes $R_a = \mu A_D R_1$ und einer Kapazität $C_a = 1/\mu R_1 \omega_T$. Beide Werte sind also um den Faktor $\mu$ günstiger. Für das genannte Zahlenbeispiel erhalten wir $C_a = 1\,\mathrm{pF}$. Hier erkennt man den großen Vorteil der Transistor-Präzisionsstromquellen. Selbst wenn die Differenzverstärkung des Operationsverstärkers bei hohen Frequenzen auf $A_D = 1$ absinkt, bleibt noch der ordentliche Ausgangswiderstand des Transistors selbst übrig. Es ist aus dieser Sicht unsinnig, einen VV-Operationsverstärker in einer Stromquelle wie in Abb. 11.13 einzusetzen und den niedrigen Ausgangswiderstand durch Beschaltung heraufzusetzen. Wenn man bipolare Ausgangsströme benötigt, sind aus diesem Grund Schaltungen mit Drain-Ausgang vorzuziehen, die im folgenden Abschnitt beschrieben werden.

Die Schaltung in Abb. 11.16 lässt sich modifizieren, indem man die Eingangsspannung direkt an $R_1$ anlegt und statt dessen den P-Eingang an Masse anschließt. Diese Möglichkeit zeigt Abb. 11.17. Damit der Fet nicht sperrt, muss $U_1$ negativ sein. Im Unterschied zu der Schaltung in Abb. 11.16 wird die Steuerspannungsquelle mit $I_2$ belastet.

Benötigt man eine Stromquelle, deren Ausgangsstrom in der umgekehrten Richtung fließt wie bei der Schaltung in Abb. 11.16, braucht man lediglich den n-Kanal-Fet durch einen p-Kanal-Fet zu ersetzen und gelangt zu der Schaltung in Abb. 11.18.

#### 11.3.3.1 Transistor-Stromquellen für bipolare Ausgangsströme

Ein Nachteil der bisher aufgeführten Transistor-Stromquellen besteht darin, dass sie nur einen unipolaren Ausgangsstrom liefern können. Durch Kombination der Schaltungen in Abb. 11.16 und 11.18 gelangt man zu der Stromquelle in Abb. 11.19, die bipolare Ausgangsströme liefern kann. Die beiden Operationsverstärker OV1 und OV2 bilden hier Stromspiegel mit den Teilströmen
<!-- page-import:0813:end -->

<!-- page-import:0814:start -->
11.3 Spannungsgesteuerte Stromquellen

777

**Abb. 11.19.**  
Bipolare Fet-Stromquelle mit eingetragenen Ruhepotentialen

*Ausgangsstrom:* $I_2=-\dfrac{U_1}{2R_1}$

$$
I_{D1}=\frac{R_2}{R_1}I_3 \quad,\quad I_{D2}=\frac{R_2}{R_1}I_4
$$

Der Ausgangsstrom ergibt sich als Differenz der beiden Teilströme:

$$
I_2=I_{D1}-I_{D2}=\frac{R_2}{R_1}(I_3-I_4)
\qquad (11.14)
$$

Im Ruhezustand $U_1=0$ ist $I_3=I_4=\frac{1}{4}U_b/R_2$. In diesem Fall fließen die Ruheströme

$$
I_{D1}=I_{D2}=\frac{U_3}{R_1}=\frac{U_b}{4R_1}
$$

die sich genau kompensieren, sodass der Ausgangsstrom $I_2=0$ wird. Bei positiven Eingangsspannungen $U_1$ vergrößert sich der Strom $I_{D2}$ um $U_1/4R_1$, während $I_{D1}$ um denselben Betrag abnimmt. Damit ergibt sich ein Ausgangsstrom:

$$
I_2=-\frac{U_1}{2R_1}
$$

Ein Nachteil der Schaltung in Abb. 11.19, dass sie große Ruheströme besitzt, die von der Betriebsspannung abhängen. In dieser Beziehung ist die Schaltung in Abb. 11.20 wesentlich günstiger. Sie unterscheidet sich von der vorhergehenden durch eine andere Art der Ansteuerung der Stromspiegel. Die beiden Stromspiegel OV1 und OV2 werden hier von den Strömen $I_3$ und $I_4$ gesteuert, die in den Betriebsspannungsanschlüssen des Spannungsfolgers OV3 fließen.

Dabei wird nun von der Tatsache Gebrauch gemacht, dass man den Operationsverstärker OV3 als Stromknoten auffassen kann, für den nach der Knotenregel die Summe der Ströme gleich Null sein muss. Da man die Eingangsströme vernachlässigen kann und ein Masseanschluss nicht vorhanden ist, ergibt sich:

$$
I_5=I_3-I_4=\frac{U_1}{R_3}
\qquad (11.15)
$$

Einsetzen in (11.14) liefert den Ausgangsstrom:
<!-- page-import:0814:end -->

<!-- page-import:0815:start -->
778  11. Gesteuerte Quellen und Impedanzkonverter

**Abb. 11.20.** Bipolare Fet-Stromquelle für große Ausgangsströme $I_2 = U_1\, R_2 / R_1\, R_3$

$$
I_2 \;=\; \frac{R_2}{R_1 R_3} U_1 \qquad \overset{R_2=R_3}{=} \qquad \frac{U_1}{R_1}
\eqno{(11.16)}
$$

Im Ruhezustand ist $I_5 = 0$ und $I_3 = I_4 = I_R$. Dabei ist $I_R$ der Ruhestrom des Operationsverstärkers OV3. Er ist klein gegenüber dem maximal erhältlichen Ausgangsstrom $I_5$ des Verstärkers. Bei positiver Eingangsspannung wird $I_3 \approx I_5 \gg I_4$. Der Ausgangsstrom $I_2$ wird dann praktisch ganz von der oberen Ausgangsstufe geliefert, während die untere nahezu sperrt. Bei negativer Eingangsspannung ist es umgekehrt. Es handelt sich also um einen Gegentakt-AB-Betrieb. Da der Ruhestrom in der Endstufe

$$
I_{D1} = I_{D2} = \frac{R_2}{R_1} I_R
$$

klein ist gegenüber dem maximalen Ausgangsstrom, ergibt sich der Ausgangsstrom im Ruhezustand nur noch als Differenz kleiner Größen. Dadurch wird eine gute Nullpunktstabilität erzielt. Als weiterer Vorteil ergibt sich daraus ein hoher Wirkungsgrad, der besonders dann von Interesse ist, wenn man die Schaltung für hohe Ausgangsströme auslegt. Aus diesem Grund verwendet man für OV3 einen Operationsverstärker mit niedriger Ruhestromaufnahme. Um die Feldeffekttransistoren in Abb. 11.20 richtig anzusteuern, muss

**Abb. 11.21.** Spannungsgesteuerte Stromquelle mit einem CC-Operationsverstärker. Dieselbe Schaltung mit verschiedenen Schaltsymbolen für den Operationsverstärker $I_2 = U_1 / R_1$
<!-- page-import:0815:end -->

<!-- page-import:0816:start -->
11.3 Spannungsgesteuerte Stromquellen 779

**Abb. 11.22.** (a) Stromquelle für schwimmende Verbraucher. (b) Stromquelle für einseitig geerdete Verbraucher. (c) Schwimmende Stromquelle für beliebige Verbraucher

die Ausgangsspannung der Operationsverstärker OV1 und OV2 in der Lage sein, bis auf die Betriebsspannung anzusteigen. Deshalb setzt man hier Rail-to-Rail Operationsverstärker gemäß Kap. 5.2.5.2 auf S. 536 ein. Beispiele für geeignete Typen sind in Abb. 11.20 eingetragen

Man kann die ganze Schaltung aber auch als einen einzigen CC-Operationsverstärker gemäß Abb. 5.123b auf S. 602 betrachten: OV3 stellt den Eingangs-Impedanzwandler dar, OV1 und OV2 die Stromspiegel. Die einfachste Möglichkeit zur Realisierung einer spannungsgesteuerten Stromquelle besteht daher im Einsatz eines CC-Operationsverstärkers gemäß Abb. 11.21 (z.B. OPA615 von Texas Instruments).

## 11.3.4 Schwimmende Stromquellen

Wir haben in den vorhergehenden Abschnitten zwei Typen von Stromquellen kennen gelernt. Bei den Schaltungen in Abb. 11.10 und 11.11 auf S. 771 darf keiner der beiden Anschlüsse des Verbrauchers mit einem festen Potential verbunden sein. Ein solcher Verbraucher wird als erdfrei, potentialfrei oder schwimmend bezeichnet. Abb. 11.22 a verdeutlicht diesen Sachverhalt. Als Verbraucher kommen bei dieser Betriebsart praktisch nur passive Elemente in Frage, da bei aktiven Schaltungen über die Stromversorgung in der Regel eine Masseverbindung besteht. Verbraucher, die mit einem Anschluss auf festem Potential - meist Masse - liegen können mit einer Stromquelle nach Abb. 11.22 b betrieben werden, deren Realisierung in Abb. 11.13 (S. 773) bis 11.20 angegeben ist.

**Abb. 11.23.**  
Realisierung einer schwimmenden Stromquelle  
aus zwei einseitig geerdeten Stromquellen

*Ausgangsstrom:* $I_2 = U_1/R_1$

**Abb. 11.24.**  
Praktische Realisierung einer schwimmenden Stromquelle mit zwei CC-Operationsverstärkern
<!-- page-import:0816:end -->
