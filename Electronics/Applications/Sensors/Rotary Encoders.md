# Rotary Encoders

<!-- page-import:1143:start -->
1106  19. Sensorik

**Abb. 19.47.** Feuchtemessung mit Nullpunktkompensation und eliminierter Frequenzabhängigkeit

Der zusätzliche Kondensator $C_T$ ermöglicht eine Nullpunktkompensation von $C_0$. Er wird ebenfalls auf die Spannung $U_{ref}$ aufgeladen, dann jedoch umgepolt an den Summationspunkt gelegt. Damit ergibt sich der Strom:

$$\overline{I_T}=-U_{ref}\cdot f\cdot C_T$$

Aus der Knotenregel, angewandt auf den Summationspunkt, $\overline{I_S}+\overline{I_T}+\overline{I_G}=0$ folgt dann die Ausgangsspannung:

$$U_a=-U_{ref}\frac{C_S-C_T}{C_G}=-U_{ref}\frac{\Delta C}{C_G}$$

Man erkennt, dass durch den Einsatz der Switched-Capacitor-Technik zur Nullpunkt- und Verstärkungseinstellung alle Ströme proportional zu $f$ sind. Dadurch hebt sich die Schaltfrequenz aus dem Ergebnis heraus. Der Kondensator $C_1$ hat keinen Einfluss auf die Größe der Ausgangsspannung; er bildet lediglich den Mittelwert. Zur Realisierung der Schalter ist der LTC1043 besonders gut geeignet, da er nicht nur 4 Wechselschalter, sondern daneben auch einen Taktgenerator enthält, der die Schalter ansteuert. Zum Abgleich des Nullpunkts und der Verstärkung kann man die Referenzspannung für $C_S$ und $C_T$ einstellbar machen.

## 19.4 Drehwinkelkodierer

Drehwinkelkodierer, die auch als Drehgeber bezeichnet werden, sind Sensoren, die dazu dienen, Drehwinkel zu messen oder die Position zu bestimmen. Dabei handelt es sich heutzutage manchmal lediglich darum, die Lautstärke einzustellen, die man früher an einem Potentiometer eingestellt hat. Man kann zwischen Absolutwert-Encodern und inkrementellen Encodern unterscheiden, die zunächst beschrieben werden. Die gebräuchlichste Methode zur Messung eines Drehwinkels besteht darin, auf einer Scheibe Markierungen anzubringen, die optisch abgetastet werden. Dazu kann man die Scheibe mit einem Kranz von Schlitzen versehen und sie mit einer Gabellichtschranke erfassen. Diese Möglichkeit ist in Abb. 19.48 dargestellt. Man kann die Scheibe aber ebenso gut mit reflektierenden Marken versehen, die man wie in Abb. 19.49 mit einer Reflexlichtschranke abtastet. Bei einer ganzen Umdrehung erhält man bei beiden Ausführungen an dem Fototransistor FT so viele Impulse wie die Scheibe Schlitze bzw. Markierungen besitzt. Die Anzahl liegt je nach Erfordernissen zwischen 10 und 200. Wenn es z.B. nur darum geht, die Lautstärke einzustellen, reicht eine geringe Anzahl aus.
<!-- page-import:1143:end -->

<!-- page-import:1144:start -->
19.4 Drehwinkelkodierer 1107

Abb. 19.48.  
Drehgeber mit Gabellichtschranke

Abb. 19.49.  
Drehgeber mit Reflexlichtschranke

Eine Einschränkung des in Abb. 19.48 und 19.49 beschriebenen Prinzips besteht darin, dass man lediglich messen kann, wie viele Marken durchlaufen wurden, aber nicht die Drehrichtung. Um die Winkelposition zu bestimmen, ist es aber erforderlich, mit Impulsen bei Rechtsdrehung aufwärts zu zählen und bei Linksdrehung abwärts. Aus diesem Grund verwendet man 2 nebeneinander liegende Fotodetektoren, die so angeordnet sind, dass jeweils nur einer beleuchtet wird. Abb. 19.50 zeigt die Anordnung. Wenn man hier die Schlitzscheibe nach rechts bewegt, ist bei den positiven Flanken von Kanal A der Kanal B auf 0. Bei einer Bewegung nach links gibt es bei den positiven Flanken im Kanal A im Kanal B eine 1. Dadurch ist eine Erkennung der Drehrichtung möglich. Kennzeichnend ist, dass hier zwei Signale entstehen, die um $90^\circ$ phasenverschoben sind. Natürlich kann man diese Methode nicht nur zur Erfassung von Drehbewegungen nutzen, sondern auch als linearer Weggeber. Davon wird z.B. in Tintenstrahldruckern und Kopierern Gebrauch gemacht.

Abb. 19.50.  
Richtungserkennung mit 2 Fotoempfängern

Abb. 19.51.  
Signalformen in einem Kanal in Abhängig-
keit von der optischen Anordnung
<!-- page-import:1144:end -->
