# Current Amplifier

<!-- page-import:0637:start -->
600 5. Operationsverstärker

Die Verstärkung bei mittleren Frequenzen beträgt $A = 2\ R_a/R_E = 10$. Die kapazitive Last am Ausgang ist hier unkritisch, da die Schaltung keine Gegenkopplung besitzt, die vom Ausgang zum Eingang führt.

## 5.8 Der Strom-Verstärker (CC-OPV)

Der CC-Operationsverstärker besitze einen niederohmigen (stromgesteuerten) invertierenden Eingang und einen hochohmigen (stromgesteuerten) Ausgang. Dies erkennt man in der Schaltung in Abb. 5.120a. Zum Vergleich haben wir daneben die Schaltung des einfachen CV-Operationsverstärker von Abb. 5.103a dargestellt.

### 5.8.1 Innerer Aufbau

Man sieht, dass hier im Vergleich zu dem CV-Verstärker lediglich der Emitterfolger am Ausgang fehlt. Man kann die Schaltung in zwei Teile zerlegen:

– den Spannungsfolger, der aus den Transistoren in $T_1$ und $T_2$ besteht;  
– den Stromspiegel, der durch die Transistoren $T_3$ und $T_4$ gebildet wird.

Weil der Strom $I_q$, der am invertierenden Eingang fließt, zum Ausgang übertragen wird, wird der CC-Operationsverstärker auch als Stromverstärker bezeichnet. Bei der Schaltung in Abb. 5.120a ist der Ausgangsstrom gleich dem Eingangsstrom; der Stromverstärkungsfaktor ist hier also $k_I = 1$. Man kann dem Stromspiegel aber auch einen größeren Übersetzungsfaktor geben; in der Praxis gibt es Werte bis zu $k_I = 8$. Man muss beachten, dass die Stromrichtungen am invertierenden Eingang und am Ausgang gleich sind, also z.B. beide nach außen gerichtet sind wie in Abb. 5.120a.

Der ganze CC-Operationsverstärker ist nichts als ein erweiterter Transistor: Der Emitterstrom von $T_2$ fließt auch im Kollektor und zum Ausgang. Deshalb sind für den CC-Operationsverstärker auch zwei Schaltsymbole gebräuchlich, die in Abb. 5.121 dargestellt sind. Wenn man ihn in Schaltungen einsetzt, die auch beim VV-Operationsverstärker gebräuchlich sind, ist das Operationsverstärker-Schaltsymbol vorzuziehen. Man kann den CC-Operationsverstärker aber auch wie einen Transistor verwenden; dann ist das Transistor-Symbol vertrauter. Zwischen dem CC-Operationsverstärker – dem Stromverstärker – und einem einfachen Transistor gibt es weitgehende Gemeinsamkeiten:

– Der Kollektorstrom ist (betragsmäßig) gleich dem Emitterstrom.

**Abb. 5.120.** Einfacher CC-Operationsverstärker mit einem CV-Operationsverstärker zum Vergleich
<!-- page-import:0637:end -->

<!-- page-import:0638:start -->
## 5.8 Der Strom-Verstärker (CC-OPV) 601

a OPV  
Schaltsymbol

b Transistor  
Schaltsymbol

c Modell

**Abb. 5.121.** Schaltsymbole eines CC-Operationsverstärkers; daneben das Kleinsignalmodell

– Der Eingangswiderstand an der Basis ist hoch, am Emitter ist er niedrig.  
– Der Ausgangswiderstand am Kollektor ist hoch.

Daneben gibt es aber auch Unterschiede, die den Einsatz im Vergleich zum einzelnen Transistor vereinfachen:

– Der Kollektorstrom besitzt wegen des Stromspiegels die umgekehrte Richtung.  
– Die Basis-Emitter-Spannung im Arbeitspunkt ist Null $(U_{BE,a} = 0)$ wegen der Kompensation durch $T_1$.  
– Der Emitter- und der Kollektorstrom können beide Richtungen annehmen.  
– Die Arbeitspunkteinstellung erfolgt intern.

Aus diesen Gründen verhält sich ein CC-Operationsverstärker wie ein idealer Transistor. Er wurde deshalb von der Firma Burr Brown auch als Diamond Transistor bezeichnet.

Das Modell in Abb. 5.121c zeigt den hochohmigen, nicht invertierenden und den niederohmigen, invertierenden Eingang. Der Ausgang ist hochohmig. Die Steilheit der Schaltung bei angeschlossenem Emitterwiderstand $R_E$ lässt sich an dem Modell ablesen:

$$
S = \frac{I_{ak}}{U_P} = \frac{1}{r_S + R_E} \quad \overset{r_S=0}{=} \quad \frac{1}{R_E}
$$

Der CC-Operationsverstärker wird meist nur mit Stromgegenkopplung am Emitter betrieben. Deshalb wirken sich nichtlineare Verzerrungen auf das Ausgangssignal aus. Die nichtlineare Kennlinie von $T_2$ kann man im Modell in Abb. 5.121c als stromabhängige Schwankung von $r_S = I_C/U_T$ ansehen. Deshalb ist es vorteilhaft den Transistor $T_2$ zu einem Closed-Loop-Buffer zu erweitern gemäß Abb. 5.122. Dann ist $r_S \approx 0$ und

**Abb. 5.122.**  
Linearisierung eines CC-Operationsverstärkers mit einem Closed-Loop-Buffer. Beispiel für Ruhepotentiale.
<!-- page-import:0638:end -->

<!-- page-import:0639:start -->
602  5. Operationsverstärker

a Mit Open-loop-Buffer

b Mit Closed-loop-Buffer

**Abb. 5.123.** Praktische Ausführung eines CC-Operationsverstärkers im Gegentakt-AB-Betrieb. Transistorgröße $A = 1$, wenn nicht anders angegeben. Ausgangsstrom: $I_{ak} = k_I I_q$

die Steilheit wird ausschließlich durch den am invertierenden Eingang angeschlossenen Widerstand $R_E$ bestimmt.

Der CC-Operationsverstärker besitzt wegen seines kurzen inneren Signalpfads besondere Vorteile für hohe Frequenzen. Um selbst bei kleinem Ruheströmen große Ausgangsströme zu ermöglichen, kann man ihn im Gegentakt-AB-Betrieb aufbauen (*current on demand*). Die praktische Ausführung ist in Abb. 5.123a dargestellt. Es handelt sich hier um die symmetrische Ergänzung der Schaltung in Abb. 5.120a. Wenn man den Stromspiegel am Ausgang eine Stromverstärkung $k_I$ gibt, erhält man entsprechend größere Ausgangsströme $I_{ak} = k_I I_q$. Davon wird bei den handelsüblichen Schaltungen Gebrauch gemacht; hier liegt die Stromübersetzung je nach Typ im Bereich von $k_I = 3 \ldots 8$.

Natürlich kann man auch diese Schaltung linearisieren indem man statt des komplementären Emitterfolgers einen Closed-Loop-Buffer wie in Abb. 5.123b einsetzt. Auch hier dienen die Betriebsspannungsanschlüsse des VV-Operationsverstärkers gleichzeitig zur Weiterleitung des Signals.

## 5.8.2 Typische Anwendung

Bei den meisten Anwendungen wird das Verhalten des CC-Operationsverstärker durch Stromgegenkopplung am invertierenden Eingang bestimmt, nur in Sonderfällen wendet man zusätzlich eine Spannungsgegenkopplung an.

### 5.8.2.1 Anwendungen mit Stromgegenkopplung

#### 5.8.2.1.1 Emitterschaltung

Da sich ein CC-Operationsverstärker weitgehend wie ein Transistor verhält, ist es naheliegend, ihn in den drei Grundschaltungen einzusetzen. Die Emitterschaltung ist in Abb. 5.124 dargestellt. Wenn man den Steilheitswiderstand $r_S$ vernachlässigt, ist $U_{BE} = 0$. Dann ergibt sich der Emitterstrom $I_E = U_e/R_E$. Da der Kollektorstrom genauso groß ist, folgt daraus die Ausgangsspannung $U_a = U_e R_C / R_E$.
<!-- page-import:0639:end -->

<!-- page-import:0640:start -->
5.8 Der Strom-Verstärker (CC-OPV) 603

a Schaltung  b Modell

**Abb. 5.124.** Emitterschaltung eines CC-Operationsverstärker

Zur exakten Berechnung der Spannungsverstärkung kann man von dem Modell des CC-Operationsverstärkers in Abb. 5.121c ausgehen und den Arbeitswiderstand $R_C$ hinzufügen. Dann ergibt sich in Abb. 5.124 der Emitterstrom:

$$
I_E = \frac{U_e}{r_S + R_E}
$$

Dieser Strom fließt auch im Ausgangsstromkreis und bewirkt dort den Spannungsabfall:

$$
U_a = I_E\,(r_{HIP}\parallel R_C) = \frac{r_{HIP}\parallel R_C}{r_S + R_E}\,U_e \approx \frac{R_C}{R_E}\,U_e
$$

Wenn man den Ausgang mit einem Lastwiderstand belastet, muss man ihn bei der Berechnung der Spannungsverstärkung berücksichtigen. Am einfachsten fasst man ihn mit dem Kollektorwiderstand zusammen und rechnet mit $R_{C,\;ges}$. Um zu verhindern, dass sich ein Lastwiderstand auf die Spannungsverstärkung auswirkt, kann man einen Spannungsfolger (CC-Operationsverstärker in Kollektorschaltung) gemäß Abb. 5.125a zwischenschalten. Dafür ist der OPA860 besonders geeignet, da er neben dem CC-Operationsverstärker einen Spannungsfolger enthält. An diese Möglichkeit muss man bei allen Anwendungen von CC-Operationsverstärkern denken. Da die Arbeitspunkteinstellung – wie bei jedem Operationsverstärker – intern erfolgt, wird der Kollektorwiderstand an Masse angeschlossen und nicht an der Betriebsspannung. Deshalb sind hier Schaltungen funktionsfähig, die beim normalen Transistor lediglich das Kleinsignal-Ersatzschaltbild darstellen.

Um einem Abfall der Verstärkung bei hohen Frequenzen entgegenzuwirken, kann man den wirksamen Emitterwiderstand in diesem Frequenzbereich verkleinern, indem man ein zusätzliches RC-Glied wie in Abb. 5.125b parallel schaltet.

a Mit Impedanzwandler  b Anhebung hoher Frequenzen

**Abb. 5.125.** Erweiterungen eines in Emitterschaltung betriebenen CC-Operationsverstärkers
<!-- page-import:0640:end -->

<!-- page-import:0641:start -->
604 5. Operationsverstärker

a Schaltung  b Modell

**Abb. 5.126.** Kollektorschaltung eines CC-Operationsverstärkers

#### 5.8.2.1.2 Kollektorschaltung

Bei der Kollektorschaltung in Abb. 5.126 entnimmt man das Ausgangssignal am Emitter. Der Kollektor liegt auf konstantem Potential. Da die Arbeitspunkteinstellung hier intern erfolgt, legt man den nicht benötigten Kollektor auf Nullpotential. Wenn man von der Näherung $U_{BE}=0$ ausgeht, ist es offensichtlich, dass die Spannungsverstärkung $A=1$ ist. Der Emitterwiderstand ist hier für die Funktionsweise nicht erforderlich; man kann ihn daher als Lastwiderstand betrachten.

Zur genaueren Berechnung der Spannungsverstärkung verwendet man am besten das Modell in Abb. 5.126. Hier sieht man, dass sich ein Spannungsteiler mit dem Steilheitswiderstand ergibt, der die Spannungsverstärkung

$$
A=\frac{U_a}{U_e}=\frac{R_E}{r_S+R_E}\approx 1
$$

besitzt. Man sieht in dem Modell auch, dass der Kollektorstrom ungenutzt nach Masse abfließt. Deshalb kann man beim Einsatz eines CC-Operationsverstärkers in Kollektorschaltung die Stromspiegel in Abb. 5.123 weglassen. Übrig bleibt dann eine komplementäre Darlingtonschaltung im AB-Betrieb.

Der Kollektorstrom lässt sich beim Betrieb in Kollektorschaltung aber auch sinnvoll nutzen, indem man den Kollektor mit dem Emitter verbindet wie Abb. 5.127 zeigt. Dadurch verdoppelt sich der Ausgangsstrom, da der Kollektorstrom beim CC-Operationsverstärker dieselbe Richtung besitzt wie der Emitterstrom. Zur Berechnung der Spannungsverstärkung verwenden wir das Modell und wenden die Knotenregel auf den Kollektor an:

$$
2\,\frac{U_e-U_a}{r_s}-\frac{U_a}{R_E}=0
\quad\Rightarrow\quad
U_a=\frac{R_E}{R_E+r_S/2}\,U_e
$$

Man sieht, dass sich der Ausgangswiderstand durch diese Maßnahme halbiert.

a Schaltung  b Modell

**Abb. 5.127.** Nutzung des Kollektorstroms beim CC-Operationsverstärker als Emitterfolger
<!-- page-import:0641:end -->

<!-- page-import:0642:start -->
5.8 Der Strom-Verstärker (CC-OPV) 605

**Abb. 5.128.** Basisschaltung eines CC-Operationsverstärker

## 5.8.2.1.3 Basisschaltung

Bei der Basisschaltung gelangt das Eingangssignal über einen Widerstand auf den Emitter und der Kollektorstrom erzeugt an dem Kollektorwiderstand das verstärkte Ausgangssignal, wie Abb. 5.128 zeigt. Wenn man vom idealen CC-Operationsverstärker ausgeht, bei dem $U_{BE}=0$ ist, ergibt sich ein Emitterstrom $I_E=-U_e/R_e$; dieser Strom verursacht am Kollektorwiderstand die Spannung

$$
U_a = I_C\,R_C = -\frac{R_C}{R_e}U_e
$$

Zur exakten Analyse verwendet man am besten das Modell in Abb. 5.128 und erhält:

$$
U_a = -I_E\,(r_{HIP}\parallel R_C) = -\frac{r_{HIP}\parallel R_C}{r_S+R_E}\,U_e \approx -\frac{R_C}{R_E}\,U_e
$$

Dies ist dasselbe Ergebnis wie bei der Emitterschaltung, nur mit negativem Vorzeichen. Im Vergleich zum einfachen Transistor besitzen die Emitter- und Basisschaltung des CC-Operationsverstärkers bei der Spannungsverstärkung das umgekehrte Vorzeichen.

Da der Emitter der Basisschaltung niederohmig auf Nullpotential liegt, lassen sich an diesem Punkt auch Ströme rückwirkungsfrei summieren wie am Summationspunkt eines VV-Operationsverstärkers. Diese Möglichkeit zeigt Abb. 5.129a. Man kann Emitter- und Basisschaltung auch kombinieren, und erhält dann den Subtrahierer in Abb. 5.129b.

## 5.8.2.1.4 Differenzverstärker

Aus zwei CC-Operationsverstärkern lässt sich ein Differenzverstärker aufbauen, wie Abb. 5.130 zeigt. Er besitzt viel Ähnlichkeit mit dem konventionellen Differenzverstärker mit Stromgegenkopplung in Abb. 4.59 auf S. 348. Da die Arbeitspunkteinstellung

**Abb. 5.129.** CC-Operationsverstärker in Basisschaltung als Summierer und als Subtrahierer
<!-- page-import:0642:end -->

<!-- page-import:0643:start -->
606 5. Operationsverstärker

**Abb. 5.130.**  
Differenzverstärker aufgebaut aus zwei CC-Operationsverstärkern

intern erfolgt, ist hier jedoch keine Emitterstromquelle erforderlich und die Kollektorwiderstände werden an Masse angeschlossen. Man kann den Differenzverstärker auch hier mit Operationsverstärker-Symbolen darstellen wie in Abb. 5.131. Die Verbindung der invertierenden Eingänge über den Widerstand $R_E$ findet sich hier wieder. Die Eingangssignale werden an den hochohmigen Eingängen der CC-Operationsverstärker angelegt. Die Kombination der beiden CC-Operationsverstärker ist äquivalent zu einem einzigen VC-Operationsverstärker, bei dem die Eingangsspannung an den hochohmigen Eingängen angelegt wird und der Widerstand $R_E$ die Steilheit bestimmt. In dieser Form haben wir den Differenzverstärker bereits bei den Anwendungen des VC-Operationsverstärkers in Abb. 5.118 und 5.119 eingesetzt.

Zur Berechnung der Spannungsverstärkung beim idealen CC-Operationsverstärker kann man von den Schaltungen in Abb. 5.130 und 5.131 ausgehen. Für $U_{BE} = 0$ lässt sich der Querstrom direkt angeben:

$$
I_q = \frac{U_{e1} - U_{e2}}{R_E} = \frac{U_D}{R_E}
$$

Da der Kollektorstrom genauso groß ist, ergeben sich die Ausgangsspannungen:

$$
U_{a1} = I_q R_C = \frac{R_C}{R_E} U_D
\qquad \text{und} \qquad
U_{a2} = -I_q R_C = -\frac{R_C}{R_E} U_D
$$

Zur exakten Berechnung der Spannungsverstärkung ist das Modell in Abb. 5.132 geeignet. Hier lassen sich die Steilheitswiderstände bei der Berechnung des Querstroms berücksichtigen:

$$
I_q = \frac{U_D}{R_E + 2r_S}
$$

2 CC-Verstärker

1 VC-Verstärker

**Abb. 5.131.** Zwei CC-Operationsverstärker ergeben einen VC-Operationsverstärker
<!-- page-import:0643:end -->

<!-- page-import:0644:start -->
5.8 Der Strom-Verstärker (CC-OPV) 607

**Abb. 5.132.** Modell des Differenzverstärkers aus CC-Operationsverstärkern

Die Ausgangswiderstände liegen parallel zu den Kollektorwiderständen, also gilt für die Ausgangsspannungen:

$$
U_{a1} \;=\; \frac{R_C \parallel r_{HIP}}{R_E + 2r_S}\,U_D
\qquad \text{und} \qquad
U_{a2} \;=\; -\,\frac{R_C \parallel r_{HIP}}{R_E + 2r_S}\,U_D
$$

## 5.8.2.2 Anwendungen mit Spannungsgegenkopplung

Eine Spannungsgegenkopplung ist beim CC-Operationsverstärker dadurch möglich, dass man einen Teil der Ausgangsspannung über einen Spannungsteiler auf den invertierenden Eingang rückkoppelt, wie in Abb. 5.133 gezeigt. Dadurch ergibt sich eine Schaltung, wie sie beim VV-Operationsverstärker als nichtinvertierender Verstärker üblich ist. Der Unterschied besteht hier jedoch darin, dass der Gegenkopplungsspannungsteiler mit dem Eingangsstrom belastet wird. Wenn man die Schaltung mit dem Transistor-Symbol gemäß Abb. 5.133b zeichnet, erkennt man, dass hier gleichzeitig eine Stromgegenkopplung vorliegt. Die Rückkopplung vom Kollektor zum Emitter bewirkt hier eine Gegenkopplung, da der Kollektorstrom gegenüber einem einfachen Transistor invertiert ist. Da die Gegenkopplungsschleife hier weder einen Impedanzwandler am Eingang noch am Ausgang besitzt, also den kürzest möglichen Weg nimmt, spricht man hier von direkter Gegenkopplung *direct feedback*.

Zur Berechnung der Spannungsverstärkung gehen wir vom Modell in Abb. 5.134 aus und vernachlässigen den Ausgangswiderstand $r_{HIP}$. Dafür wollen wir hier aber die Stromverstärkung $k_I = I_C / I_E$ berücksichtigen. Wenn man die Knotenregel auf den Kollektor und den Emitter anwendet, erhält man:

a mit OPV-Symbol

b mit Transistor-Symbol

**Abb. 5.133.** CC-Operationsverstärker mit Spannungsgegenkopplung kombiniert mit Stromgegenkopplung (direct feedback)
<!-- page-import:0644:end -->
