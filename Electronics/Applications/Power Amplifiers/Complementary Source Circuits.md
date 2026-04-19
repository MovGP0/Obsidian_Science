# Complementary Source Circuits

<!-- page-import:0944:start -->
907

## 15.5 Komplementäre Sourceschaltungen

**Abb. 15.13.**  
Prinzip eines komplementären Sourcefolgers

**Abb. 15.14.**  
Vorspannungserzeugung für den Betrieb komplementärer Sourcefolger

der diesen Offset über eine Über-alles-Gegenkopplung eliminiert. Wenn man hier 4 gleiche Transistoren einsetzt, werden auch die Ruheströme gleich, also $I_2 = I_1$. In der Praxis setzt man aber für die Endstufentransistoren $T_1$, $T_2$ große Leistungstransistoren ein, deren Fläche $k$ mal so groß ist wie die der Treibertransistoren $T_3$, $T_4$. In diesem Fall ist auch der Ruhestrom in der Endstufe um diesen Faktor größer, also $I_2 = k \cdot I_1$.

Leistungsmosfets besitzen zwar wie alle Mosfets ein isoliertes Gate; deshalb ist kein statischer Gatestrom für die Ansteuerung erforderlich. Wegen der großen Gate-Source- und Gate-Drain-Kapazitäten, die im Bereich von einigen 100 pF liegen können, sind bei hohen Frequenzen und beim schnellen Schalten hohe Gateströme erforderlich, die so groß sind wie bei Bipolartransistoren. Deshalb benötigt man hier fast dieselben Ruheströme $I_1$.

Es ist zweckmäßig, die Ansteuerschaltung mit einer um mindestens 10 V höheren Betriebsspannung als die Endstufe zu betreiben. Sonst liegt die maximal erreichbare Ausgangsspannung beträchtlich unter der Betriebsspannung. Dadurch ergäbe sich ein indiskutabel schlechter Wirkungsgrad.

## 15.5 Komplementäre Sourceschaltungen

Ohne eine höhere Betriebsspannung für die Ansteuerschaltung kommt man nur dann aus, wenn man die Transistoren in der Leistungsendstufe in Sourceschaltung betreibt. Diese Möglichkeit ist in Abb. 15.15 dargestellt. Hier liegen die Ansteuerpotentiale der Endstufentransistoren innerhalb des Betriebsspannungsbereichs. Wenn die Transistoren voll leitend sind, ergibt sich selbst bei großen Strömen eine Ausgangsaussteuerbarkeit, die lediglich einigen 100 mV unter der Betriebsspannung liegt. Hier liegt dieselben Struktur vor wir bei der Rail-to-Rail Endstufe in Abb. 5.43 auf Seite 540. Dadurch ergeben sich mehrere Konsequenzen:

- Der Drain-Ausgang ist hochohmig. Um einen Verstärker mit niedrigem Ausgangswiderstand zu realisieren, muss man den Ausgangswiderstand durch Gegenkopplung reduzieren. Dazu dient hier die Gegenkopplung über $R_N$ und $R_1$.
- Es ist immer schwierig, zwei Transistoren anzusteuern, deren Source-Elektroden auf ganz verschiedenen Potentialen liegen. Durch die Leistungstransistoren soll ein defi-
<!-- page-import:0944:end -->
