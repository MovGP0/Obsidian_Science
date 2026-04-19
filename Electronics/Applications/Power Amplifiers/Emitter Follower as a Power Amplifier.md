# Emitter Follower as a Power Amplifier

<!-- page-import:0936:start -->
# Kapitel 15:
Leistungsverstärker

Leistungsverstärker sind Schaltungen, bei denen eine hohe Ausgangsleistung im Vordergrund steht und die Spannungsverstärkung eine untergeordnete Rolle spielt. Sie bestehen aus zwei Teilen:

- Aus der Leistungsendstufe, die die erforderlichen Ströme erzeugt, aber meist selbst keine Spannungsverstärkung besitzt
- Einem Vorverstärker, der eine Gegenkopplung ermöglicht, um die die Verzerrungen der Leistungsendstufe zu reduzieren.

Ausgangsspannung und Ausgangsstrom sollen sowohl positive als auch negative Werte annehmen können. Leistungsverstärker, bei denen der Ausgangsstrom nur ein Vorzeichen besitzt, werden als Netzgeräte bezeichnet und im Kapitel 16 auf S. 927 behandelt.

## 15.1 Emitterfolger als Leistungsverstärker

Die Funktionsweise des Emitterfolgers haben wir bereits in Kapitel 2.4.2 auf S. 138 beschrieben. Nun wollen wir einige Daten berechnen, die bei der Anwendung als Leistungsverstärker besonders interessant sind. Dazu berechnen wir zunächst denjenigen Verbraucherwiderstand, bei dem die Schaltung in Abb. 15.1 die größte Leistung unverzerrt abgibt: Steuert man den Ausgang nach Minus aus, liefert $R_L$ einen Teil des Stroms durch $R_E$. Die Aussteuerungsgrenze ist erreicht, wenn der Strom durch den Transistor Null wird. Das ist bei der Ausgangsspannung

*Spannungsverstärkung:* $A \approx 1$

*Stromverstärkung bei Leistungsanpassung:* $A_i = \frac{1}{2}\beta$

*Verbraucherwiderstand für Leistungsanpassung:* $R_L = R_E$

*Ausgangsleistung bei Leistungsanpassung und sinusförmiger Vollaussteuerung:* $P_{L\ \max} = \frac{V_b^2}{8R_E}$

*Maximaler Wirkungsgrad:* $\eta_{\max} = \frac{P_{v\ \max}}{P_{ges}} = 6{,}25\,\%$

*Maximale Verlustleistung des Transistors:* $P_T = \frac{V_b^2}{R_E} = 8P_{v\ \max}$

**Abb. 15.1.** Emitterfolger als Leistungsverstärker

© Springer-Verlag GmbH Deutschland, ein Teil von Springer Nature 2019  
U. Tietze et al., *Halbleiter-Schaltungstechnik*
<!-- page-import:0936:end -->

<!-- page-import:0937:start -->
900 15. Leistungsverstärker

$$
U_{a\ \min}=-\frac{R_L}{R_E+R_L}\cdot V_b
$$

der Fall. Will man den Ausgang sinusförmig um 0 V aussteuern, darf die Amplitude der Ausgangsspannung den Wert

$$
\hat U_{a\ \max}=\frac{R_L}{R_E+R_L}\cdot V_b
$$

nicht überschreiten wie man in Abb. 2.94 auf S. 140 erkennt. Die an $R_L$ abgegebene Leistung beträgt in diesem Fall

$$
P_L=\frac{1}{2}\frac{\hat U_{a\ \max}^2}{R_L}=\frac{V_b^2R_L}{2(R_E+R_L)^2}.
$$

Aus $\frac{dP_L}{dR_L}=0$ folgt, dass sich für $R_L=R_E$ die maximale Ausgangsleistung

$$
P_{L\ \max}=\frac{V_b^2}{8R_E}
$$

ergibt. Dieses Ergebnis ist insofern überraschend, als man normalerweise erwarten würde, dass die Ausgangsleistung maximal wird, wenn der Verbraucherwiderstand gleich dem Innenwiderstand $r_a$ der Spannungsquelle ist. Dies gilt jedoch nur bei konstanter Leerlaufspannung: dieser Fall liegt hier nicht vor, da man die Leerlaufspannung um so kleiner machen muss, je kleiner $R_L$ ist.

Nun wollen wir für beliebige Ausgangsamplituden und Verbraucherwiderstände die Aufteilung der Leistung in der Schaltung berechnen. Bei sinusförmigem Spannungsverlauf wird an den Verbraucherwiderstand $R_L$ die Leistung

$$
P_L=\frac{1}{2}\frac{\hat U_a^2}{R_L}
$$

abgegeben. Für die Verlustleistung des Transistors ergibt sich

$$
P_T=\frac{1}{T}\int_0^T(V_b-U_a(t))\left(\frac{U_a(t)}{R_L}+\frac{U_a(t)+V_b}{R_E}\right)\,dt.
$$

Mit $U_a(t)=\hat U_a\sin\omega t$ folgt:

$$
P_T=\frac{V_b^2}{R_E}-\frac{1}{2}\hat U_a^2\left(\frac{1}{R_L}+\frac{1}{R_E}\right).
$$

Die Verlustleistung im Transistor ist also ohne Eingangssignal am größten. Für die Leistung in $R_E$ erhält man analog

$$
P_E=\frac{V_b^2}{R_E}+\frac{1}{2}\frac{\hat U_a^2}{R_E}.
$$

Die Schaltung nimmt von den Betriebsspannungsquellen also die Gesamtleistung

$$
P_{\mathrm{ges}}=P_L+P_T+P_E=2\frac{V_b^2}{R_E}
$$

auf. Wir erhalten damit das erstaunliche Ergebnis, dass die aufgenommene Leistung der Schaltung unabhängig von Aussteuerung und Ausgangsleistung konstant bleibt, solange
<!-- page-import:0937:end -->

<!-- page-import:0941:start -->
904 15. Leistungsverstärker

**Abb. 15.7.**  
Einstellung des AB-Betriebs mit zwei Hilfsspannungen

**Abb. 15.8.**  
Einstellung des AB-Betriebs mit einer einzigen Hilfsspannung

Eingangsspannungen ergibt sich ein linearer Spannungsverlauf. Die damit verbundenen Verzerrungen der Ausgangsspannung werden als *Übernahmeverzerrungen* bezeichnet. Sie lassen sich reduzieren, wenn man den beiden Transistoren eine Vorspannung gibt damit ein kleiner Ruhestrom fließt. Man erkennt an der resultierenden Übertragungskennlinie in Abb. 15.6, dass sich die Übernahmeverzerrungen dadurch beträchtlich reduzieren. Gestrichelt eingezeichnet sind die Übertragungskennlinien der Einzel-Emitterfolger. Macht man den Ruhestrom so groß wie den maximalen Ausgangsstrom, würde man eine solche Betriebsart analog zu Abb. 15.1 als Gegentakt-A-Betrieb bezeichnen. Die Übernahmeverzerrungen verkleinern sich jedoch schon beachtlich, wenn man nur einen Ruhestrom fließen lässt, der einen kleinen Bruchteil des maximalen Ausgangsstroms beträgt. Eine solche Betriebsart heißt Gegentakt-AB-Betrieb. Die Übernahmeverzerrungen werden bei Gegentakt-AB-Betrieb schon so klein, dass man sie durch Gegenkopplung über einen Vorverstärker leicht auf nicht mehr störende Werte heruntersetzen kann.

Zusätzliche Verzerrungen können entstehen, wenn die Stromverstärkung der beiden Leistungstransistoren verschieden groß ist. Dann werden positive und negative Signale bei hochohmigen Quellen verschieden verstärkt. Glücklicher Weise betreibt man komplementäre Emitterfolger immer in gegengekoppelten Schaltungen in denen derartige Fehler weitgehend reduziert werden.

In Abb. 15.7 ist die Prinzipsschaltung zur Realisierung des AB-Betriebs dargestellt. Um einen kleinen Ruhestrom fließen zu lassen, legt man eine Vorspannung von ca. 1,4 V zwischen den Basisanschlüsse von $T_1$ und $T_2$ an. Wenn die beiden Spannungen $U_1$ und $U_2$ gleich groß sind, wird das Ausgangsruhepotential ungefähr gleich dem Eingangsruhepotential. Man kann die Vorspannung auch wie in Abb. 15.8 mit nur einer Spannungsquelle $U_3 = U_1 + U_2$ erzeugen. In diesem Fall tritt zwischen Eingang und Ausgang eine Potentialdifferenz von ca. 0,7 V auf.

Zur Erzeugung der Vorspannung kann man die Transdioden $T_3$, $T_4$ in Abb. 15.9 oder die Emitterfolger $T_3$, $T_4$ in Abb. 15.10 einsetzen. Wenn sie sich auf demselben Chip wie die Leistungstransistoren befinden, ist auch die Temperaturkompensation gewährleistet. Gleichzeitig ist dann auch der Ruhestrom durch die Endstufentransistoren $T_1$, $T_2$ definiert. Wenn Sie die Fläche $kA$ besitzen fließt hier auch der Strom $kI_1$.

Die Wahl des Ruhestroms $I_1$ erfordert besondere Beachtung. Er muss den erforderlichen Basisstrom für die Leistungstransistoren liefern, also $I_1 > I_{a\ max} / B$. Bei einem ma-
<!-- page-import:0941:end -->

<!-- page-import:0945:start -->
908 15. Leistungsverstärker

**Abb. 15.15.** Leistungsendstufe mit komplementären Sourceschaltungen und zugehörigem Treiber; daneben das Modell als CC-Operationsverstärker mit direct feedback

nierten Ruhestrom fließen, der von der Aussteuerung unabhängig ist. Das wird durch die hier verwendete Ansteuerschaltung erreicht.  
– Die Leistungsmosfets benötigen zum schnellen Schalten hohe Spitzenströme. Die Ansteuerschaltung muss daher in der Lage sein, diese Ströme bei niedrigem Ruhestrom bereit zu stellen; sie muss also auch im AB-Betrieb arbeiten. Diese Forderung wird hier ebenfalls erfüllt.

Die Endstufentransistoren $T_1$, $T_2$ bilden hier zusammen mit den Transistoren $T_3$, $T_4$ Stromspiegel; deshalb fließen hier definierte Drainströme. Angesteuert werden die Stromspiegel von dem Spannungsfolger $T_5$ bis $T_8$; seine Ruheströme betragen $I_3 = I_4 = I_1$. Daher werden alle Ströme in der Schaltung von $I_1$ bestimmt. Die Berechnung der Spannungsverstärkung ist mit dem CC-Operationsverstärker-Modell besonders einfach. Der Strom $I_2$ lässt sich aus der Knotenregel direkt berechnen. Für $I_a = 0$ gilt:

$$
I_2 + k I_2 - \frac{U_e}{R_1} = 0
\qquad \text{und} \qquad
U_a = U_e + k I_2 R_N
$$

Daraus folgt die Ausgangsspannung:

$$
U_a = \left(1 + \frac{k}{1+k} \cdot \frac{R_N}{R_1}\right) U_e
\overset{k=10}{=}
\left(1 + \frac{10\,R_N}{11\,R_1}\right) U_e
\overset{R_N/R_1=10}{=}
10\,U_e
$$

Das ist die Leerlaufspannungsverstärkung, denn ein Ausgangsstrom wurde hier nicht berücksichtigt. Zur Berechnung des Ausgangswiderstands macht man $U_e = 0$ und erhält:

$$
I_a + \frac{U_a}{R_N} + \frac{k U_a}{R_N} = 0
\qquad \Rightarrow \qquad
r_a = -\frac{U_a}{I_a} = \frac{1}{1+k}\,R_N
$$

Für $R_N = 1\,\mathrm{k}\Omega$ und ein Stromübersetzung $k = 10$ ergibt sich dann ein Ausgangswiderstand von $r_a = 91\,\Omega$. Das ist für einen Leistungsverstärker ein hoher Wert, für einen
<!-- page-import:0945:end -->

<!-- page-import:0953:start -->
916 15. Leistungsverstärker

Abb. 15.24. Breitband-Leistungsverstärker $U_a=-U_eR_N/R_1$

Im Bild sichtbare Bezeichnungen:

- $U_e$
- $R_1$
- $U_N$
- $C_1$
- HF-Zweig
- $R_3$
- $I_0$
- $V_b$
- $T_1$, $T_2$, $T_3$, $T_4$
- NF-Zweig
- $R_2$
- $C_2$
- $R_N$
- $-V_b$
- $R_E$
- $T_5$, $T_6$, $T_7$, $T_8$
- $T_9$, $T_{10}$, $T_{11}$, $T_{12}$, $T_{13}$, $T_{14}$
- $R_4$, $R_5$
- $U_a$
- Modell
- $A_1$, $A_2$
- HF
- NF
- Frequenzgang
- $f$
- $f_t$
<!-- page-import:0953:end -->

<!-- page-import:0957:start -->
920 15. Leistungsverstärker

**Abb. 15.30.**  
Leistungsverstärker in Brückenschaltung  
zum Betrieb mit einer einzigen positiven  
Betriebsspannung

$$
U_{a1} = \tfrac{1}{2}V_b - \frac{R_N}{R_1}\left(U_e - \tfrac{1}{2}V_b\right)
$$

$$
U_{a2} = \tfrac{1}{2}V_b + \frac{R_N}{R_1}\left(U_e - \tfrac{1}{2}V_b\right)
$$

$$
U_a = U_{a2} - U_{a1}
$$

$$
= 2\,\frac{R_N}{R_1}\left(U_e - \tfrac{1}{2}V_b\right)
$$

wird mit dem Verstärker OV2 invertiert bezogen auf ½$V_b$. Dadurch ändern sich die beiden Ausgangsspannungen gegenphasig. Man erkennt an der angegebenen Gleichung für die Ausgangsspannung, dass der Verbraucher hier auch ohne Koppelkondensator gleichstromfrei ist bei einem Eingangsruhepotential von ½$U_b$. Natürlich funktioniert dieses Verfahren nur für Verbraucher, die potentialfrei sind wie z.B. Lautsprecher. Ob man am Eingang einen Koppelkondensator benötigt, hängt von der Quelle ab. Wenn ihr Ruhepotential ebenfalls ½$V_b$ ist, benötigt man keinen; dann ist selbst bei einer einzigen Betriebsspannung eine Gleichspannungskopplung möglich.

Ein Nachteil des Brückenverstärkers in Abb. 15.30 besteht darin, dass die beiden Verstärker, die das gegenphasige Signal für den Lautsprecher erzeugen, nicht gleichberechtigt sind. Der Verstärker OV2 verstärkt nicht das Eingangssignal, sondern das Ausgangssignal von OV1. Dadurch ist sein Ausgangssignal zeitlich verzögert. Außerdem muss er das mit dem Verbraucher belastete Signal $U_{a1}$ weiter verstärken, das infolge der Belastung deutlich mehr Verzerrungen besitzt als das Eingangssignal. Diesen Nachteil besitzt der Brückenverstärker in Abb. 15.31 nicht, der einen symmetrischen Eingang und Ausgang besitzt. Da die Eingangsspannungsdifferenz der Operationsverstärker im eingeschwungenen Zustand Null ist, wird $U_D = U_{e1} - U_{e2}$. Man kann die Schaltung aus einer symmetrischen Signalquelle betreiben, deren Ruhepotential ½$V_b$ beträgt oder $U_{e1} = \tfrac{1}{2}V_b$ wählen, wie es in der Schaltung eingezeichnet ist.

Die maximale Ausgangsleistung eines Leistungsverstärkers wird durch die Betriebsspannung bestimmt. Wir wollen von dem Idealfall ausgehen, dass die Ausgangsaussteuerbarkeit eines Verstärkers, der aus einer einzigen Betriebsspannung betrieben wird, zwischen 0 V und $V_b$ liegt. Dann beträgt die maximale Amplitude einer Sinusschwingung $\hat U_a = \tfrac{1}{2}V_b$ und ihr Effektivwert $U_{a\,eff} = \tfrac{1}{2}V_b/\sqrt{2}$. Die Ausgangsleistung beträgt dann

$$
P_{a,normal} = \frac{U_{a\,eff}^2}{R_L} = \frac{\left(\tfrac{1}{2}V_b/\sqrt{2}\right)^2}{R_L} = \frac{V_b^2}{8R_L}
\qquad (15.3)
$$

Bei einem Brückenverstärker erhält man die doppelte Ausgangsamplitude und den doppelten Effektivwert; daher ergibt sich für die maximale Ausgangsleistung der 4-fachen Wert:

$$
P_{a,Brücke} = \frac{U_{a\,eff}^2}{R_L} = \frac{\left(V_b/\sqrt{2}\right)^2}{R_L} = \frac{V_b^2}{2R_L}
\qquad (15.4)
$$
<!-- page-import:0957:end -->
