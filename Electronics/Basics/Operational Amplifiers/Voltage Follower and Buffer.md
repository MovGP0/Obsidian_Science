# Voltage Follower and Buffer

<!-- page-import:0549:start -->
512  5. Operationsverstärker

a Spannungsausgang  
VV- und CV-OPVs

b Stromausgang  
VC- und CC-OPVs

**Abb. 5.4.** Übertragungskennlinien von Operationsverstärkern.  
Die eingetragenen Zahlenwerte sind lediglich Beispiele

$$
I_a = S_D U_D = S_D (U_P - U_N)
$$
(5.4)

ist proportional zur Eingangsspannungsdifferenz. Die Steilheit

$$
S_D = \left.\frac{dI_a}{dU_D}\right|_{AP}
$$
(5.5)

gibt an, wie stark der Ausgangsstrom mit der Eingangsspannungsdifferenz ansteigt. Die Steilheit des Verstärkers ist verwandt mit der Steilheit eines Transistors. Die typische Übertragungskennlinie eines VC-Operationsverstärkers ist in Abb. 5.4b dargestellt. Man erkennt, dass auch hier sehr kleine Eingangsspannungsdifferenzen ausreichen, um Vollaussteuerung zu erreichen.

Bei den beiden Operationsverstärkern mit Strom-Eingang in Abb. 5.3 ist der invertierende Eingang niederohmig, also stromgesteuert. Dies erscheint zunächst als Nachteil, für hohe Frequenzen ergeben sich aber große Vorteile, weil dadurch, wie wir später noch sehen werden,

– der interne Signalpfad verkürzt und die Schwingneigung reduziert wird;  
– die interne Verstärkung des OPV an den jeweiligen Bedarf angepasst werden kann.

Der Transimpedanzverstärker (Current Feedback Amplifier) in Abb. 5.3 besitzt einen stromgesteuerten – also niederohmigen – invertierenden Eingang. Das wird im Schaltsymbol durch den kleinen Spannungsfolger angedeutet, der vom nicht-invertierenden Eingang zum invertierenden Eingang zeigt. Der Ausgang ist spannungsgesteuert; deshalb handelt es sich um einen CV-Operationsverstärker. Die Ausgangsspannung

$$
U_a = A_D U_D = I_q Z
$$
(5.6)

kann man entweder – wie beim normalen OPV – aus der Differenzverstärkung berechnen oder aus dem Eingangsstrom $I_q$ und einer Transimpedanz $Z$, deren Betrag bei niedrigen Frequenzen im Megaohm-Bereich liegt. Wegen dieser Impedanz wird der CV-Operationsverstärker als Transimpedanzverstärker bezeichnet.

Der Strom-Verstärker (Diamond Transistor, Drive-R-Amplifier) besitzt einen stromgesteuerten Eingang wie der CV-OPV und einen Stromausgang wie der VC-OPV. Deshalb handelt es sich hier um einen CC-Operationsverstärker. Das Übertragungsverhalten
<!-- page-import:0549:end -->

<!-- page-import:0587:start -->
550  5. Operationsverstärker

## 5.3 Spannungsfolger, Buffer

Spannungsfolger sind Verstärker, die die Verstärkung $A = 1$ besitzen; sie werden deshalb primär als Impedanzwandler eingesetzt. Hier soll der Aufbau dieser Schaltungen als eigenständige Baugruppe zur Signalverarbeitung, aber auch als Baugruppe in Operationsverstärkern genauer beschrieben werden. Die verschiedenen Realisierungsformen sind in Abb. 5.59 zusammengestellt. Bei den Open-Loop-Buffern handelt es sich um normale Emitterfolger; ihre Verstärkung ist durch die Transistoren als Emitterfolger vorgegeben. Bei den Closed-Loop-Buffern wird sie durch die Gegenkopplung bestimmt. Die wichtigsten Forderungen an Buffer sind:

– Hoher Eingangswiderstand  
– Niedriger Ausgangswiderstand  
– Hoher Ausgangsstrom bei Bedarf  
– Geringe Ruhestromaufnahme  
– Große Bandbreite

### 5.3.1 Open-Loop-Buffer

Emitterfolger sind die einfachste Möglichkeit zur Realisierung eines Spannungsfolgers. Dabei ist der negative Ausgangsstrom allerdings auf die Größe des Emitterstroms begrenzt. Die Forderungen nach großem Ausgangsstrom bei niedriger Ruhestromaufnahme lässt sich am besten mit den in Abb. 5.59 gezeigten komplementären Emitterfolgern realisieren. Sie werden in den Kapiteln rfverimp auf Seite 399 und 15.2 auf Seite 901 ausführlich beschrieben. Die übliche Methode zur Erzeugung der Vorspannung für die beiden Emitterfolger am Ausgang besteht darin, zwei Emitterfolger wie in Abb. 5.60 vorzuschalten. Dann werden die Endstufentransistoren ebenfalls mit gut definierten den Ruheströmen $I_0$

Eintakt

Gegentakt

Open loop Buffer

Closed loop Buffer

**Abb. 5.59.** Vergleich von Spannungsfolgern auf der Basis von komplementären Emitterfolgern .
<!-- page-import:0587:end -->

<!-- page-import:0588:start -->
551

## 5.3 Spannungsfolger, Buffer

**Abb. 5.60.** Komplementärer Emitterfolger mit Arbeitspunkteinstellung.  
Die Übertragungskennlinie zeigt Übernahmeverzerrungen in Nullpunktnähe.

betrieben. Wenn große Ausgangsströme benötigt werden, kann man den Endstufentransistoren auch die $A$-fache Größe geben; dann vergrößert sich allerdings auch ihr Ruhestrom um denselben Faktor.

Die Kehrseite des AB-Betriebs ist allerdings, dass die Steilheit der Ausgangstransistoren schwankt: In Nullpunktnähe, also bei kleinen Strömen, ist sie klein und der Ausgangswiderstand entsprechend groß. Die daraus resultierenden Übernahmeverzerrungen erkennt man in der Kurzschluss-Übertragungskennlinie in Abb. 5.60. Sie reduzieren sich zwar bei größeren Ruheströmen $I_0$, aber der Betrieb mit kleinen Ruheströmen ist natürlich besonders erstrebenswert.

Ein anderes Problem des komplementären Emitterfolgers ergibt sich aus der Methode zur Vorspannungserzeugung. Die parasitären Kapazitäten, die in Abb. 5.61 gestrichelt eingezeichnet sind, können über die Transistoren $T_3$, $T_4$ zwar schnell aufgeladen werden, aber entladen werden sie lediglich mit dem Strom $I_0$. Wie sich dieses Problem auswirkt ist in Abb. 5.61 ebenfalls dargestellt. Bei einem positiven Spannungssprung am Eingang wird der Kondensator $C_2$ schnell über den Transistor $T_4$ aufgeladen, der Kondensator $C_1$ aber lediglich mit dem kleinen Strom $I_0$. Die Folge ist, dass nach dem Sprung die beiden Transistoren $T_1$ und $T_2$ sperren. Die Ausgangsspannung steigt dann gemäß der Last auf 0 V an, und verharrt dort, bis $C_1$ so weit aufgeladen ist, dass $T_1$ leitend wird. Erst dann steigt sie langsam auf den Endwert an. Zur Lösung des Problems gibt es verschiedene Möglichkeiten:

- Ein großer Strom $I_0$; aber das erhöht die Ruhestromaufnahme.
- Der Einsatz selbstleitender Feldeffekttransistoren.
- Der Einsatz eines Kondensators, der die Basisanschlüsse von $T_1$ und $T_2$ verbindet; aber hier wäre eine sehr große Kapazität erforderlich.

## 5.3.2 Closed-Loop-Buffer

Der stromabhängige Ausgangswiderstand eines Emitterfolgers lässt sich zwar nicht beseitigen, aber er lässt sich reduzieren, indem man ihn in eine gegengekoppelte Schaltung einbezieht. Diese Möglichkeit nutzt man bei den Closed-Loop-Buffern. Wir haben gezeigt, dass die Schaltung in Abb. 5.13 zwar kein guter Operationsverstärker ist, dass die Einschränkungen beim Einsatz als Closed-Loop-Buffer aber nicht zutage treten. Hier erhöht sich die Aussteuerbarkeit, weil alle Potentiale in der Schaltung der Eingangsspannung
<!-- page-import:0588:end -->

<!-- page-import:0589:start -->
552  5. Operationsverstärker

**Abb. 5.61.** Wirkung der parasitären Kapazitäten auf die Sprungantwort.  
Oben bei einem Ruhestrom von $I_0 = 0,1\,\mathrm{mA}$, unten von $I_0 = 1\,\mathrm{mA}$  
Die Strompfade bei einem positiven Sprung sind dick eingezeichnet.

folgen, wie man in Abb. 5.62 sieht. Für den Einsatz als Spannungsfolger kann man die Leerlaufverstärkung mit dem Stromspiegel $T_4, T_5$ verdoppeln. Der Frequenzgang der Verstärkung des offenen und des gegengekoppelten Verstärkers ist in Abb. 5.63a dargestellt.

Der Ausgangswiderstand der nicht gegengekoppelten Schaltung besteht aus zwei Anteilen: dem Ausgangswiderstand von $T_3$ und dem transformierten Quellwiderstand:

$$
r_{a,\mathrm{offen}} = \frac{U_T}{I_2} + \frac{U_A}{\beta^2 I_k}
= \text{hier } \frac{25\,\mathrm{mV}}{1\,\mathrm{mA}} + \frac{100\,\mathrm{V}}{10000 \cdot 200\,\mu\mathrm{A}}
= 25\,\Omega + 50\,\Omega = 75\,\Omega
$$

Damit der Beitrag des Quellwiderstands nicht überwiegt, haben wir hier eine Darlingtonschaltung mit einer Stromstärkung von $\beta^2 = 10.000$ verwendet. Die Ausgangsimpedanz der gegengekoppelten Schaltung ist in Abb. 5.63b aufgetragen. Wegen hohen Schleifenverstärkung beträgt er bei niedrigen Frequenzen lediglich $r_a = 0,1\,\Omega$. Bei einem Open-Loop-Buffer wäre ein Kollektorstrom von $I_C = U_T / r_a = 250\,\mathrm{mA}$ erforderlich, um auf eine derart niedrige Ausgangsimpedanz zu kommen. Da der Betrag der Schleifenverstärkung $g$ bei hohen Frequenzen abnimmt und für die Ausgangsimpedanz $|Z_a| = r_{a,\mathrm{offen}} / |g|$ gilt, nimmt der Betrag der Ausgangsimpedanz bei hohen Frequenzen zu, wie Abb. 5.63b zeigt.
<!-- page-import:0589:end -->

<!-- page-import:0590:start -->
## 5.3 Spannungsfolger, Buffer

553

a Prinzip

b praktische Ausführung

**Abb. 5.62.** Einfache Closed-Loop-Buffer

Bei dem Closed-Loop-Buffer in Abb. 5.62 haben wir in dem Dimensionierungsbeispiel für den Emitterfolger einen Ruhestrom von $I_2 = 1\,\mathrm{mA}$ gewählt. Damit ist der negative Ausgangsstrom auf diesen Wert begrenzt. Es gibt Anwendungen, bei denen das ausreicht. Wenn man aber z.B. einen Lastwiderstand von $1\,\mathrm{k\Omega}$ anschließt, reduziert sich die Ausgangsaussteuerbarkeit auf $U_{a,\min} = -1\,\mathrm{V}$. Um bei niedrigem Ruhestrom große positive und negative Ausgangsströme entnehmen zu können, muss man auch hier den Gegentakt-AB-Betrieb anwenden. Dazu haben wir die Schaltung in Abb. 5.62 symmetrisch ergänzt und gelangen zu der Schaltung in Abb. 5.64. Sie stellt einen Operationsverstärker dar mit einem niederohmigen invertierenden Eingang und einem niederohmigen Ausgang. Der Vergleich mit Abb. 5.3 zeigt, dass es sich hier um einen Transimpedanzverstärker (CV-OPV) handelt, der auf Seite 587 behandelt wird. Er ist mit dem Breitbandverstärker in Abb. 5.30 verwandt.

Der Spannungsfolger in Abb. 5.64 besteht aus den komplementären Emitterfolgern $T_1$ bis $T_4$ am Eingang und $T_9$ bis $T_{12}$ am Ausgang. Die Stromspiegel $T_5$ bis $T_8$ arbeiten auf den Hochimpedanzpunkt des Verstärkers dessen Impedanz für die erforderliche Spannungsverstärkung sorgt. Die Gegenkopplung über den Widerstand $R_N$ stellt die für einen Spannungsfolger geforderte Verstärkung $A = 1$ sicher. Die Größe von $R_N$ bestimmt die Schleifenverstärkung innerhalb der Schaltung; man dimensioniert $R_N$ für eine optimale Sprungantwort. Sie wird durch das Verhältnis vom Widerstand am Hochimpedanzpunkt zu den Widerständen am Emitter der Transistoren $T_3$ und $T_4$ bestimmt, die bezüglich der Gegenkopplungsschleife in Basisschaltung betrieben werden. Die Schleifenverstärkung beträgt:

a Verstärkung

b Ausgangsimpedanz

**Abb. 5.63.** Frequenzgänge des einfachen Closed-Loop-Buffers in Abb. 5.62b
<!-- page-import:0590:end -->
