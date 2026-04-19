# Comparison

<!-- page-import:0650:start -->
## 5.10 Vergleich

613

verwendeten Kurzbezeichnungen mit zwei Buchstaben für die vier Operationsverstärker-Typen. Man erkennt an der Systematik auch, dass es weitere Typen nicht geben kann; jede Schaltung lässt sich in der Matrix der vier Operationsverstärker einordnen.

Die in Abb. 5.139 dargestellten Modelle beschreiben die wichtigsten realen Eigenschaften der Operationsverstärker. Wenn man für Z die Parallelschaltung eines Widerstands mit einem Kondensator einsetzt, wird auch das Frequenzverhalten modelliert. Davon haben wir bei den jeweiligen Typen zur Berechnung der Grenzfrequenzen Gebrauch gemacht.

Die Schaltpläne zeigen die bereits behandelten Beispiele mit einer besonders einfachen vergleichbaren Realisierung. Die Operationsverstärker mit Spannungseingang besitzen einen Differenzverstärker am Eingang, die mit Stromeingang einen Spannungsfolger mit kompensierter Basis-Emitter-Spannung. Die Typen mit Spannungsausgang haben einen Emitterfolger am Ausgang, bei den Typen mit Stromausgang fehlt dieser.

Eine besonders instruktive Vergleichsmöglichkeit ergibt sich, wenn man den einfachsten der vier Verstärker, nämlich den CC-Operationsverstärker, als Transistor darstellt und die übrigen drei Typen durch Zusatz von Impedanzwandlern realisiert. Dann zeigt sich, dass der CV-Operationsverstärker einen Spannungsfolger am Ausgang benötigt, der VC-Operationsverstärker einen Spannungsfolger am invertierenden Eingang und der VV-Operationsverstärker beide gleichzeitig.

Zum Vergleich sind in Abb. 5.139 die vier Operationsverstärker als nichtinvertierende Verstärker dargestellt. Bei einem Spannungs-Eingang handelt es sich dann um eine Spannungsgegenkopplung. Bei Strom-Eingang spricht man von einer Stromgegenkopplung, obwohl dabei gleichzeitig eine Spannungsgegenkopplung vorliegt. Eine reine Stromgegenkopplung ergibt sich hier, wenn man den invertierenden Eingang einfach über einen Widerstand an Masse legt (s. Abb. 5.124 ff.). Die angegebenen Beziehungen für die Ausgangsspannung sind überall gleich, bis auf den CC-Operationsverstärker, bei dem eine zusätzliche 2 im Nenner steht. Sie gelten bei den Verstärkern mit Stromausgang allerdings nur dann, wenn der Ausgang unbelastet ist. Die Gegenkopplungs-Ausgangsbeschreibung in Abb. 5.140 führt ebenfalls zu der üblichen systematischen Kurzbezeichnung der Operationsverstärker.

Die Gegenkopplungsschleifen in Abb. 5.139 zeigen, dass der Weg beim VV-Operationsverstärker am längsten und beim CC-Operationsverstärker am kürzesten ist. Aus diesem Grund treten bei hohen Frequenzen beim CC-Operationsverstärker die geringsten Phasennacheilungen und damit auch die geringsten Stabilitätsprobleme auf. Deshalb ist er für hohe Frequenzen besonders gut geeignet.
<!-- page-import:0650:end -->

<!-- page-import:0651:start -->
614 5. Operationsverstärker

Spannungs-Ausgang

Spannungs-Eingang

Normaler Operationsverstärker  
VV-OPV

Schaltsymbol

$U_D$  
$U_a$

idealer Verstärker

$U_D$  
$A_D U_D$  
$U_a$

Schaltung

$T_1,\ T_2,\ T_3,\ T_4,\ T_5$  
$I_0$  
$I_q$  
$I_0 + I_q$  
$U_P$  
$U_N$  
$U_a$

Modell

$T_1,\ T_2,\ T_3,\ T_4,\ T_5$  
$r_S$  
$I_q$  
$Z$  
$U_D$  
$U_a$

$$U_a = \frac{Z}{2r_S} U_D$$

Spannungs-gegenkopplung

$U_e$  
$R_N$  
$R_1$

$$U_a = \left(1 + \frac{R_N}{R_1}\right) U_e$$

Strom-Eingang

Transimpedanz-Verstärker  
CV-OPV

Schaltsymbol

$U_D$  
$U_a$

idealer Verstärker

$U_D$  
$I_q$  
$Z I_q$  
$U_a$

Schaltung

$T_1,\ T_2,\ T_3,\ T_4,\ T_5$  
$I_0$  
$I_q$  
$I_0 + I_q$  
$U_P$  
$U_N$  
$U_a$

Modell

$T_2,\ T_1,\ T_3,\ T_4,\ T_5$  
$r_S$  
$I_q$  
$Z$  
$U_D$  
$U_a$

$$U_a = \frac{Z}{r_S} U_D$$

Strom-gegenkopplung

$U_e$  
$I_q$  
$R_N$  
$R_1$

$$U_a = \left(1 + \frac{R_N}{R_1}\right) U_e$$

Abb. 5.139. Matrix der Operationsverstärker. Vergleich der Schaltungen
<!-- page-import:0651:end -->

<!-- page-import:0652:start -->
5.10 Vergleich 615

Strom-Ausgang

Transkonduktanz-Verstärker, OTA  
VC-OPV

Schaltsymbol

$U_D$

$I_a$

idealer Verstärker

$U_D$

$S_U D$

$I_a = S_D U_D$

Schaltung

$I_0 + I_q$

$I_0 + I_q$

$I_q$

$I_q$

$I_q$

$I_{ak}$

$U_P$

$U_N$

$T_1$

$T_2$

$T_3$

$T_4$

$I_0$

$I_0$

$I_0$

Modell

$U_D$

$r_S$

$r_S$

$T_1$

$T_2$

$T_3$

$T_4$

$I_q$

$Z$

$I_{ak}$

$I_{ak} = \frac{U_D}{2r_S} = S_D U_D$

Spannungsgegenkopplung

$U_e$

$R_N$

$R_1$

$U_a = \left(1 + \frac{R_N}{R_1}\right) U_e$

Spannungs-Eingang

Strom-Verstärker  
CC-OPV

Schaltsymbole

$U_D$

$I_a$

idealer Verstärker

$U_D$

$I_q$

$I_a = I_q$

Schaltung

$U_P$

$U_N$

$T_2$

$T_1$

$T_3$

$T_4$

$I_0 + I_q$

$I_q$

$I_q$

$I_{ak}$

$I_0$

$I_0$

Modell

$U_D$

$r_S$

$T_2, T_1$

$T_3$

$T_4$

$I_q$

$Z$

$I_{ak}$

$I_{ak} = I_q$

Direkte Gegenkopplung

$U_e$

$I_q$

$I_q$

$R_N$

$R_1$

$U_a = \left(1 + \frac{R_N}{2R_1}\right) U_e$

Strom-Eingang

Abb. 5.139. Matrix der Operationsverstärker. Vergleich der Schaltungen
<!-- page-import:0652:end -->

<!-- page-import:0653:start -->
616  5. Operationsverstärker

|  |  | Spannungs-Ausgang |
|---|---|---|
| Spannungs-Eingang | Bürgerlicher Name | Normaler Operationsverstärker |
| Spannungs-Eingang | Systematischer Name | VV-Operationsverstärker |
| Spannungs-Eingang | Funktion als gesteuerte Quelle | Voltage-Controlled Voltage Source, VCVS |
| Spannungs-Eingang | Gegenkopplung - Ausgang | Voltage Feedback, Voltage Output, VFVO |
| Spannungs-Eingang | Art der Gegenkopplung | Spannungsgegenkopplung |
| Spannungs-Eingang | Anwendung | Verstärker für niedrige Frequenzen |
| Spannungs-Eingang | Vorteile | geringe Offsetspannung<br>niedrige Drift<br>hohe Präzision bei niedrigen Frequenzen |
| Spannungs-Eingang | Nachteile | ungeeignet für hohe Frequenzen<br>Stabilitätsprobleme bei kapazitiver<br>und induktiver Last |
| Spannungs-Eingang | Typisches Beispiel | AD797 (Analog Devices) |
| Spannungs-Eingang | Offsetspannung | 25 $\mu$V ☺ |
| Spannungs-Eingang | Offsetspannungsdrift | 0.2 $\mu$V/K ☺ |
| Spannungs-Eingang | Eingangsstrom | 250 nA ☹ |
| Spannungs-Eingang | Großsignal-Bandbreite | 300 kHz 😐 |
| Spannungs-Eingang | Slew rate | 20 V/$\mu$s 😐 |

|  |  |  |
|---|---|---|
| Strom-Eingang | Bürgerlicher Name | Transimpedanz-Verstärker |
| Strom-Eingang | Systematischer Name | CV-Operationsverstärker |
| Strom-Eingang | Funktion als gesteuerte Quelle | Current-Controlled Voltage Source, CCVS |
| Strom-Eingang | Gegenkopplung - Ausgang | Current Feedback, Voltage Output, CFVO |
| Strom-Eingang | Art der Gegenkopplung | Stromgegenkopplung |
| Strom-Eingang | Anwendung | Verstärker für hohe Frequenzen |
| Strom-Eingang | Vorteile | hohe Bandbreite<br>hohe Slew Rate |
| Strom-Eingang | Nachteile | Stabilitätsprobleme bei kapazitiver<br>und induktiver Last |
| Strom-Eingang | Typisches Beispiel | AD8009 (Analog Devices) |
| Strom-Eingang | Offsetspannung | 2 mV ☹ |
| Strom-Eingang | Offsetspannungsdrift | 4 $\mu$V/K 😐 |
| Strom-Eingang | Eingangsstrom | 50 $\mu$A ☹ |
| Strom-Eingang | Großsignal-Bandbreite | 500 MHz ☺ |
| Strom-Eingang | Slew rate | 5500 V/$\mu$s ☺ |

**Abb. 5.140.** Matrix der Operationsverstärker. Vergleich der Parameter
<!-- page-import:0653:end -->

<!-- page-import:0654:start -->
617

## 5.10 Vergleich

|  | Strom-Ausgang |  |
|---|---|---|
| Bürgerlicher Name | **Transkonduktanzverstärker** | Spannungseingang |
| Systematischer Name | VC-Operationsverstärker |  |
| Funktion als gesteuerte Quelle | Voltage-Controlled Current Source, VCCS |  |
| Gegenkopplung - Ausgang | Voltage Feedback, Current Output, VFCO |  |
| Art der Gegenkopplung | Spannungsgegenkopplung |  |
| Anwendung | Treiber für kapazitive Lasten |  |
| Vorteile | geringe Offsetspannung<br>gutes Einschwingverhalten bei kapazitiven Lasten |  |
| Nachteile | Last muss bei der Dimensionierung bekannt sein |  |
| Typisches Beispiel | MAX436 (Maxim) |  |
| Offsetspannung | 0.3 mV ☹ |  |
| Offsetspannungsdrift | 4 $\mu$V/K ☹ |  |
| Eingangsstrom | 1 $\mu$A ☹ |  |
| Großsignal-Bandbreite | 200 MHz ☺ |  |
| Slew rate | 850 V/$\mu$s ☺ |  |

|  |  |  |
|---|---|---|
| Bürgerlicher Name | **Stromverstärker** | Stromeingang |
| Systematischer Name | CC Operationsverstärker |  |
| Funktion als gesteuerte Quelle | Current-Controlled Current Source, CCCS |  |
| Gegenkopplung - Ausgang | Current Feedback, Current Output, CFCO |  |
| Art der Gegenkopplung | Stromgegenkopplung |  |
| Anwendung | Aktiver Filter für hohe Frequenzen<br>Treiber für Magnetköpfe, Laserdioden<br>Leitungstreiber |  |
| Vorteile | hohe Bandbreite<br>hohe Slew Rate |  |
| Nachteile | Last muss bei der Dimensionierung bekannt sein |  |
| Typisches Beispiel | OPA860 (Texas Instruments) |  |
| Offsetspannung | 8 mV ☹ |  |
| Offsetspannungsdrift | 40 $\mu$V/K ☹ |  |
| Eingangsstrom | 0.3 $\mu$A ☹ |  |
| Großsignal-Bandbreite | 400 MHz ☺ |  |
| Slew rate | 3000 V/$\mu$s ☺ |  |

**Abb. 5.140.** Matrix der Operationsverstärker. Vergleich der Parameter
<!-- page-import:0654:end -->

<!-- page-import:0655:start -->
[unclear]
<!-- page-import:0655:end -->
