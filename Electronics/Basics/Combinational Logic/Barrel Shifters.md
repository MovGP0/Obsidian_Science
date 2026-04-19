# Barrel Shifters

<!-- page-import:0691:start -->
654  7. Schaltnetze (Kombinatorische Logik)

Wahrheitstafel

gute Gesetzmäßigkeit

Logische Funktionen

Einsen statistisch verteilt

ROM

wenige einfache Funktionen

Gatter

viele z.T. komplizierte Funktionen

PLD, FPGA

**Abb. 7.2.** Realisierungsmöglichkeit von Schaltnetzen

Schaltnetze werden häufig zur Verrechnung und Umkodierung von Zahlen verwendet. Um diese Zahlen mit Hilfe von logischen Variablen darstellen zu können, müssen sie durch eine Reihe von zweiwertigen (*binären*) Informationen dargestellt werden. Eine solche Binärstelle wird als *Bit* bezeichnet. Eine spezielle binäre Zahlendarstellung ist die duale, bei der die Stellen nach steigenden Zweierpotenzen angeordnet werden. Dabei wird die Ziffer 1 mit der logischen Eins identifiziert und die Ziffer 0 mit der logischen Null. Die logischen Variablen, mit denen die einzelnen Stellen charakterisiert werden, bezeichnen wir mit Kleinbuchstaben, die ganze Zahl mit Großbuchstaben. Für die Darstellung einer $N$-stelligen Zahl im Dualcode gilt also:

$$
X_N = x_{N-1} \cdot 2^{N-1} + x_{N-2} \cdot 2^{N-2} + \cdots + x_1 \cdot 2^1 + x_0 \cdot 2^0
$$

Natürlich muss man immer klar unterscheiden, ob man eine Rechenoperation mit Ziffern vornehmen will oder eine Verknüpfung von logischen Variablen. Den Unterschied wollen wir noch einmal an einem Beispiel erläutern. Es soll der Ausdruck $1 + 1$ berechnet werden. Interpretieren wir das Rechenzeichen (+) als Additionsbefehl im Dezimalsystem, erhalten wir die Beziehung:

$$
1 + 1 = 2
$$

Dagegen ergibt die Addition im Dualsystem:

$$
1 + 1 = 10_2 \quad \text{(lies: Eins-Null)}
$$

Interpretieren wir das Rechenzeichen (+) als Disjunktion von logischen Variablen, ergibt sich:

$$
1 + 1 = 1
$$

## 7.1 Multiplexer

Multiplexer sind Schaltungen, die eine von mehreren Datenquellen zu einem einzigen Ausgang durchschalten. Welche Quelle ausgewählt wird, muss durch eine Adresse festgelegt werden. Die inverse Schaltung, die Daten nach Maßgabe einer Adresse auf mehrere Ausgänge verteilt, heißt Demultiplexer. Die Adressierung des ausgewählten Ein- bzw. Ausgangs übernimmt bei beiden Schaltungen ein 1-aus-$n$-Decoder, der zunächst beschrieben werden soll.
<!-- page-import:0691:end -->
