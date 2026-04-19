# Single Supply Voltage

<!-- page-import:0955:start -->
918  15. Leistungsverstärker

**Abb. 15.27.**  
Stromverstärkung mit Mosfet-Strom-
spiegeln

**Abb. 15.28.**  
Leistungsendstufe für hohe Spannungen.  
Zahlenbeispiel für $\pm100\ \mathrm{V}$-Ausgang.

Wenn man die Leistungstransistoren in Abb. 15.26 zu Stromspiegeln ergänzt, ergibt sich die Schaltung in Abb. 15.27. Dann fließt ein definierter Ruhestrom in den Leistungstransistoren, der je nach der Übersetzung der Stromspiegel ein Vielfaches des Operationsverstärker-Ruhestroms beträgt. Zusammen mit dem komplementären Emitter- bzw. Sourcefolger am Ausgang des Operationsverstärkers entsteht dadurch die in Abb. 15.15 gezeigte Schaltung. Hier wurden als Leistungstransistoren Mosfets eingezeichnet, weil sie als Leistungstransistoren gebräuchlicher sind als Bipolartransistoren.

Die Schaltung in Abb. 15.27 lässt sich für hohe Ausgangsspannungen einsetzen, ohne dass ein Operationsverstärker für diese Spannungen benötigt wird. Dazu dienen die beiden die zusätzlichen Transistoren $T_5$ und $T_6$ in Abb. 15.28. Sie leiten die Signalströme des Operationsverstärkers unverändert weiter, reduzieren aber seine Betriebsspannungen auf Werte, die durch die Hilfsspannungen gegeben sind. Natürlich muss man mit den Widerständen $R_2$ und $R_3$ eine ausreichende Spannungsverstärkung einstellen, damit eine Vollaussteuerung möglich ist. In dem hier eingetragenen Beispiel ist eine Spannungsverstärkung in der Endstufe von 10 sinnvoll: Dann ergibt sich bei einer Aussteuerung des Operationsverstärkers von 10 V eine Ausgangsspannung von 100 V. Die Größe der Spannungsverstärkung hängt nicht nur vom Verhältnis der Widerstände $R_2$ und $R_3$ ab, sondern auch von dem Übersetzungsverhältnis der Stromspiegel. Ihre Berechnung wird in Zusammenhang mit Abb. 5.45 auf Seite 542 erklärt.

## 15.11 Eine Betriebsspannung

Bei den bisher behandelten Leistungsverstärkern haben wir eine positive und eine negative Betriebsspannung verwendet, um eine zum Nullpotential symmetrische Ansteuerung des Verbrauchers zu ermöglichen. Bei batteriebetriebenen Geräten steht aber meist nur eine positive Betriebsspannung zur Verfügung. In diesem Fall könnte man mit einem Gleich-
<!-- page-import:0955:end -->

<!-- page-import:0956:start -->
15.11 Eine Betriebsspannung 919

Abb. 15.29.  
Leistungsverstärker mit Wechselspannungskopplung zum Betrieb mit einer einzigen positiven Betriebsspannung

$$
\hat U_a=\left(1+\frac{R_N}{R_1}\right)\hat U_e
$$

spannungswandler eine negative Betriebsspannung für den Leistungsverstärker erzeugen. Der damit verbundene Aufwand ist aber meist zu groß. Deshalb sollen hier verschiedene Methoden beschrieben werden, um einen Leistungsverstärker allein aus einer positiver Betriebsspannung zu versorgen.

### 15.11.1 Wechselspannungskopplung

Bei Schaltungen mit Operationsverstärkern, die aus eine einzigen Betriebsspannung $V_b$ betrieben werden, ist es üblich, allen Signalen die halbe Betriebsspannung zu überlagern; diese Methode haben wir in Abb 5.38 auf Seite 536 dargestellt. Dann liegen die Summationspunkte und die Ausgangsruhepotentiale auf ½$V_b$ und eine symmetrische Aussteuerung um diesen Arbeitspunkt ist möglich. Dies Methode lässt sich auch dazu benutzen, um Leistungsverstärker aus einer einzigen Betriebsspannung zu betreiben; Abb. 15.29 zeigt ein Beispiel. Der Eingang eines nicht invertierenden Verstärkers wird hier auf ½$V_b$ gelegt. Zur Ein- und Auskopplung des Signals werden Koppelkondensatoren eingesetzt. Auch bei dem Spannungsteiler $R_N$, $R_1$ ist ein Koppelkondensator zweckmäßig, damit das Ausgangsruhepotential des Operationsverstärkers unabhängig von der gewählten Verstärkung auf ½$V_b$ liegt. Dadurch besitzt die Schaltung allerdings 3 Hochpässe mit den Grenzfrequenzen

$$
f_{g1}=\frac{1}{2\pi\,R_1C_1}\,;\quad
f_{g2}=\frac{1}{2\pi\,\frac{1}{2}R_2C_2}\,;\quad
f_{g3}=\frac{1}{2\pi\,R_LC_3}
$$

Wenn man jeden Hochpass für eine Grenzfrequenz von 20 Hz dimensioniert ergibt sich für die Reihenschaltung der Hochpässe eine Grenzfrequenz von $f_g=20\,\mathrm{Hz}\sqrt{3}=35\,\mathrm{Hz}$. Der Koppelkondensator am Ausgang muss besonders groß sein, wenn der Verbraucher niederohmig ist z.B. ein Lautsprecher mit $R_L=4\,\Omega$:

$$
C_3=\frac{1}{2\pi\cdot f_{g3}\cdot R_L}
=\frac{1}{2\pi\cdot 20\,\mathrm{Hz}\cdot 4\,\Omega}
=2000\,\mu\mathrm{F}
$$

### 15.11.2 Brückenschaltung

Man kann auf alle Koppelkondensatoren verzichten, wenn man den Verbraucher an den Ausgängen von zwei Leistungsverstärkern anschließt, deren Ausgangsruhepotential ½$V_b$ beträgt und die gegensinnig, also symmetrisch gesteuert werden. Dann spielt die das überlagerte Ruhepotential keine Rolle; es muss lediglich an beiden Ausgängen gleich groß sein. Ein derartiger Brückenverstärker (Bridge Tied Load BTL) ist in Abb. 15.30 dargestellt. Der Leistungsoperationsverstärker OV1 ist als invertierender Verstärker beschaltet. Sein Eingangsruhepotential wird auch hier durch die beiden Widerstände $R_2$ auf ½$V_b$ festgelegt; das Ausgangsruhepotential beträgt dann ebenfalls $U_{a1}=½V_b$. Seine Ausgangsspannung
<!-- page-import:0956:end -->
