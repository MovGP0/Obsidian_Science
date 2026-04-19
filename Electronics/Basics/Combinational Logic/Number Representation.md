# Number Representation

<!-- page-import:0700:start -->
663

angeschlossen sind. Beim Vergleich von Zahlen mit sehr vielen Stellen ist die parallele Erweiterung nach Abb. 7.24 günstiger, da sich dabei eine kürzere Verzögerungszeit ergibt.

## 7.7 Zahlendarstellung

Digitalschaltungen können nur binäre, d.h. zweiwertige Informationen verarbeiten. Deshalb muss die Zahlendarstellung vom gewohnten Dezimalsystem in ein binäres System übersetzt werden. Dafür gibt es verschiedene Möglichkeiten, die in den folgenden Abschnitten zusammengestellt sind. Erst wenn man sich für eine bestimmte Zahlendarstellung entschieden hat, kann man die schaltungstechnische Realisierung festlegen.

### 7.7.1 Positive ganze Zahlen im Dualcode

Die einfachste binäre Zahlendarstellung ist der Dualcode. Die Stellen sind nach steigenden Zweierpotenzen angeordnet. Für die Darstellung einer N-stelligen Zahl im Dualcode gilt also:

$$
Z_N = z_{N-1}\cdot 2^{N-1} + z_{N-2}\cdot 2^{N-2} + \ldots + z_1 \cdot 2^1 + z_0 \cdot 2^0 = \sum_{i=0}^{N-1} z_i \cdot 2^i
$$

(7.1)

Entsprechend zum Dezimalsystem schreibt man einfach die Ziffernfolge $\{z_{N-1}\ \ldots\ z_0\}$ auf und denkt sich die Multiplikation mit der betreffenden Zweierpotenz und die Addition dazu.

Beispiel:  
$15253_{\mathrm{Dez}} = 1\ 1\ 1\ 0\ 1\ 1\ 1\ 0\ 0\ 1\ 0\ 1\ 0\ 1$ Dual  
$2^{13}$ \hfill $2^0$ Stellenwert

#### 7.7.1.1 Oktalcode

Wie man sieht, ist die Dualdarstellung schwer zu lesen. Man benutzt deshalb eine abgekürzte Schreibweise, indem man jeweils drei Stellen zu einer Ziffer zusammenfasst und den Wert dieser dreistelligen Dualzahl als Dezimalziffer anschreibt. Da die entstehenden Ziffern nach Potenzen von $2^3 = 8$ geordnet sind, spricht man vom Oktalcode. Für die Darstellung einer N-stelligen Zahl im Oktalcode gilt also:

$$
Z_N = z_{N-1}\cdot 8^{N-1} + z_{N-2}\cdot 8^{N-2} + \ldots + z_1 \cdot 8^1 + z_0 \cdot 8^0
$$

(7.2)

Beispiel:

$15253_{\mathrm{Dez}} =$ 

| 3 | 5 | 6 | 2 | 5 | Oktal |
|---|---|---|---|---|---|
| 0 1 1 | 1 0 1 | 1 1 0 | 0 1 0 | 1 0 1 | Dual |
| $2^{12}$<br>$8^4$ | $2^9$<br>$8^3$ | $2^6$<br>$8^2$ | $2^3$<br>$8^1$ | $2^0$<br>$8^0$ | Stellen- wert |

#### 7.7.1.2 Hexadezimalcode

Eine andere gebräuchliche abgekürzte Schreibweise ist die Zusammenfassung von jeweils vier Dualstellen zu einer Ziffer. Da die entstehenden Ziffern nach Potenzen von $2^4 = 16$ geordnet sind, spricht man vom Hexadezimalcode. Jede Ziffer kann Werte zwischen 0 und 15 annehmen. Dafür reichen die Dezimalziffern nicht aus. Die Ziffern „zehn“ bis
<!-- page-import:0700:end -->

<!-- page-import:0701:start -->
664  7. Schaltnetze (Kombinatorische Logik)

„fünfzehn“ werden deshalb durch die Buchstaben A bis F dargestellt. Für die Darstellung einer N-stelligen Zahl im Hexadezimalcode gilt also:

$$
Z_N = z_{N-1} \cdot 16^{N-1} + z_{N-2} \cdot 16^{N-2} + \ldots + z_1 \cdot 16^1 + z_0 \cdot 16^0
$$

(7.3)

Beispiel:  
$15253_{\mathrm{Dez}} =$ 

| 3 | B | 9 | 5 | Hex |
|---|---|---|---|---|
| 0 0 1 1 | 1 0 1 1 | 1 0 0 1 | 0 1 0 1 | Dual |
| $2^{12}$  $16^3$ | $2^8$  $16^2$ | $2^4$  $16^1$ | $2^0$  $16^0$ | Stellen- wert |

## 7.7.2 BCD-Code

Zur Zahlen-Ein- und -Ausgabe sind Dualzahlen ungeeignet, da wir gewohnt sind, im Dezimalsystem zu rechnen. Man hat deshalb die binär codierten Dezimalzahlen (BCD-Zahlen) eingeführt. Bei ihnen wird jede einzelne Dezimalziffer durch eine entsprechende Dualzahl dargestellt. Für eine N-stellige BCD-Zahl gilt also:

$$
Z_N = z_{N-1} \cdot 10^{N-1} + z_{N-2} \cdot 10^{N-2} + \ldots + z_1 \cdot 10^1 + z_0 \cdot 10^0
$$

(7.4)

Beispiel:  
$15253_{\mathrm{Dez}} =$ 

| 1 | 5 | 2 | 5 | 3 | Dez |
|---|---|---|---|---|---|
| 0 0 0 1 | 0 1 0 1 | 0 0 1 0 | 0 1 0 1 | 0 0 1 1 | BCD |
| $10^4$ | $10^3$ | $10^2$ | $10^1$ | $10^0$ | Stellenw. |

Eine so kodierte Dezimalzahl wird genauer als BCD-Zahl im 8421-Code oder als natürliche BCD-Zahl bezeichnet. Mit einer vierstelligen Dualzahl lassen sich Zahlen zwischen 0 und $15_{\mathrm{Dez}}$ darstellen. Beim BCD-Code werden davon nur zehn Kombinationen benutzt. Aus diesem Grund benötigt die BCD-Darstellung mehr Bits als die Dualdarstellung.

## 7.7.3 Ganze Dualzahlen mit beliebigem Vorzeichen

### 7.7.3.1 Darstellung nach Betrag und Vorzeichen

Eine negative Zahl lässt sich ganz einfach dadurch charakterisieren, dass man vor die höchste Stelle ein Vorzeichenbit $s$ setzt. Null bedeutet „positiv“, Eins bedeutet „negativ“. Eine eindeutige Interpretation ist nur möglich, wenn eine feste Wortbreite vereinbart ist. Für eine N-stellige Zahl gilt:

$$
Z_N = (-1)^s \cdot \left( z_{N-2} \cdot 2^{N-2} + z_{N-3} \cdot 2^{N-3} + \ldots + z_1 \cdot 2^1 + z_0 \cdot 2^0 \right)
$$

(7.5)

Beispiel für eine Wortbreite von 8 bit:

$+118_{\mathrm{Dez}} =$  0  1  1  1  0  1  1  0$_2$

$-118_{\mathrm{Dez}} =$  1  1  1  1  0  1  1  0$_2$

$(-1)^s \qquad 2^6 \qquad 2^5 \qquad 2^4 \qquad 2^3 \qquad 2^2 \qquad 2^1 \qquad 2^0$
<!-- page-import:0701:end -->

<!-- page-import:0702:start -->
665

## 7.7.3.2 Darstellung im Zweierkomplement (Two’s Complement)

Die Darstellung nach Betrag und Vorzeichen hat den Nachteil, dass positive und negative Zahlen nicht einfach addiert werden können. Ein Addierer muss beim Auftreten eines Minuszeichens auf Subtraktion umgeschaltet werden. Bei der Zweierkomplementdarstellung ist das nicht notwendig.

Bei der Zweierkomplementdarstellung gibt man dem höchsten Bit ein negatives Gewicht. Der Rest der Zahl wird als normale Dualzahl dargestellt. Auch hier muss eine feste Wortbreite vereinbart sein, damit das höchste Bit eindeutig definiert ist. Bei einer positiven Zahl ist das höchste Bit 0. Bei einer negativen Zahl muss das höchste Bit gleich 1 sein, weil nur diese Stelle ein negatives Gewicht hat. Für eine N-stelligen Zahl gilt:

$$
Z_N = -z_{N-1}\cdot 2^{N-1} + z_{N-2}\cdot 2^{N-2} + \ldots + z_1\cdot 2^1 + z_0\cdot 2^0
$$

(7.6)

Beispiel für eine Wortbreite von 8 bit:

$+118_{\mathrm{Dez}} = \boxed{0}\ 1\ 1\ 1\ 0\ 1\ 1\ 0$

$B_N$

$-118_{\mathrm{Dez}} = \boxed{1}\ 0\ 0\ 0\ 1\ 0\ 1\ 0$

$X$

$-2^7\qquad 2^6\qquad 2^5\qquad 2^4\qquad 2^3\qquad 2^2\qquad 2^1\qquad 2^0$

Der Übergang von einer positiven zur betragsmäßig gleichen negativen Zahl ist natürlich etwas schwieriger als bei der Darstellung nach Betrag und Vorzeichen. Nehmen wir an, die Dualzahl $B_N$ habe ohne das Vorzeichenbit die Wortbreite $N$. Dann hat die Vorzeichenstelle den Wert $-2^N$. Die Zahl $-B_N$ entsteht demnach in der Form:

$$
-B_N = -2^N + X
$$

Damit ergibt sich der positive Rest $X$ zu:

$$
X = 2^N - B_N
$$

Dieser Ausdruck wird als das Zweierkomplement $B_N^{(2)}$ zu $B_N$ bezeichnet. Er lässt sich auf einfache Weise aus $B_N$ berechnen. Dazu betrachten wir die größte Zahl, die sich mit $N$ Stellen dual darstellen lässt. Sie hat den Wert:

$$
1111\ldots \hat{=} 2^N - 1
$$

Subtrahiert man von dieser Zahl eine beliebige Dualzahl $B_N$, erhält man offensichtlich eine Dualzahl, die sich durch Negation aller Stellen ergibt. Diese Zahl nennt man das Einerkomplement $B_N^{(1)}$ zu $B_N$. Damit gilt:

$$
B_N^{(1)} = 2^N - 1 - B_N = \underbrace{2^N - B_N}_{B_N^{(2)}} - 1
$$

und:

$$
B_N^{(2)} = B_N^{(1)} + 1
$$

(7.7)
<!-- page-import:0702:end -->

<!-- page-import:0703:start -->
666  7. Schaltnetze (Kombinatorische Logik)

Das Zweierkomplement einer Dualzahl ergibt sich also durch Negation aller Stellen und Addition von 1.

Man kann leicht zeigen, dass man die Vorzeichenstelle nicht getrennt behandeln muss, sondern zum Vorzeichenwechsel einfach das Zweierkomplement der ganzen Zahl einschließlich Vorzeichenstelle bilden kann. Damit gilt für Dualzahlen in der Zweierkomplementdarstellung die Beziehung:

$$
-B_N = B_N^{(2)}
$$

(7.8)

Diese Beziehung gilt für den Fall, dass man im Ergebnis ebenfalls nur $N$ Stellen betrachtet und die Überlaufstelle unbeachtet lässt.

Beispiel für eine 8stellige Dualzahl in Zweierkomplementdarstellung:

$118_{\mathrm{Dez}} =$                 $0\ 1\ 1\ 1\ 0\ 1\ 1\ 0$

Einerkomplement:         $1\ 0\ 0\ 0\ 1\ 0\ 0\ 1$

                                 $+\qquad\qquad\qquad 1$

                                 $\overline{\qquad\qquad\qquad\qquad\qquad}$

Zweierkomplement:     $1\ 0\ 0\ 0\ 1\ 0\ 1\ 0 = -118_{\mathrm{Dez}}$

*Rückverwandlung:*

Einerkomplement:         $0\ 1\ 1\ 1\ 0\ 1\ 0\ 1$

                                 $+\qquad\qquad\qquad 1$

                                 $\overline{\qquad\qquad\qquad\qquad\qquad}$

Zweierkomplement:     $0\ 1\ 1\ 1\ 0\ 1\ 1\ 0 = +118_{\mathrm{Dez}}$

### 7.7.3.3 Vorzeichenergänzung (Sign Extension)

Wenn man eine positive Zahl auf eine größere Wortbreite erweitern will, ergänzt man einfach führende Nullen. In der Zweierkomplementdarstellung gilt eine andere Regel: Man muss das Vorzeichenbit vervielfältigen.

Beispiel:     8 bit                 16 bit

$118_{\mathrm{Dez}} \quad = 0\ 1\ 1\ 1\ 0\ 1\ 1\ 0 = 0\ 0\ 0\ 0\ 0\ 0\ 0\ 0\ 0\ 1\ 1\ 1\ 0\ 1\ 1\ 0$

$-118_{\mathrm{Dez}} = 1\ 0\ 0\ 0\ 1\ 0\ 1\ 0 = 1\ 1\ 1\ 1\ 1\ 1\ 1\ 1\ 1\ 0\ 0\ 0\ 1\ 0\ 1\ 0$

Vorzeichenerweiterung

Der Beweis ist einfach. Bei einer $N$-stelligen negativen Zahl hat das Vorzeichenbit den Wert $-2^{N-1}$. Erweitert man die Wortbreite um ein Bit, muss man eine führende Eins ergänzen. Die hinzugefügte Vorzeichenstelle hat den Wert $-2^N$. Die alte Vorzeichenstelle ändert ihren Wert von $-2^{N-1}$ auf $+2^{N-1}$. Beide Stellen zusammen haben demnach den Wert:

$$
-2^N + 2^{N-1} = -2 \cdot 2^{N-1} + 2^{N-1} = -2^{N-1}
$$

Er bleibt also unverändert.

### 7.7.3.4 Offset-Dual-Darstellung (Offset Binary)

Es gibt Schaltungen, die nur positive Zahlen verarbeiten können. Sie interpretieren die höchste Stelle also grundsätzlich als positiv. In solchen Fällen definiert man die Mitte des darstellbaren Zahlenbereichs als Null (Offset-Darstellung) indem man den halben Zahlenbereich subtrahiert. Für eine N-stellige Zahl gilt:
<!-- page-import:0703:end -->

<!-- page-import:0704:start -->
7.7 Zahlendarstellung 667

| Dezimal | Zweierkomplement |  |  |  |  |  |  |  | Offset-Dual |  |  |  |  |  |  |  |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|  | $b_7$ | $b_6$ | $b_5$ | $b_4$ | $b_3$ | $b_2$ | $b_1$ | $b_0$ | $b_7$ | $b_6$ | $b_5$ | $b_4$ | $b_3$ | $b_2$ | $b_1$ | $b_0$ |
| 127 | 0 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |
| 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| −1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 1 | 1 | 1 | 1 | 1 | 1 | 1 |
| −127 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 1 |
| −128 | 1 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

**Abb. 7.25.** Zusammenhang zwischen der Zweierkomplement- und der Offset-Dual-Darstellung

$$
Z_N = -2^{N-1} + z_{N-1}\cdot 2^{N-1} + z_{N-2}\cdot 2^{N-2} + \ldots + z_1\cdot 2^1 + z_0\cdot 2^0
$$

(7.9)

Mit einer 8stelligen positiven Dualzahl kann man den Bereich 0 bis 255 darstellen, mit einer 8stelligen Zweierkomplementzahl den Bereich − 128 bis +127. Zum Übergang in die Offset-Dual-Darstellung verschiebt man den Zahlenbereich durch Addition von 128 nach 0 bis 255. Zahlen über 128 sind demnach positiv zu werten, Zahlen unter 128 als negativ. Die Bereichsmitte 128 bedeutet in diesem Fall Null. Die Addition von 128 kann man ganz einfach durch Negation des Vorzeichenbits in der Zweierkomplementdarstellung vornehmen. Eine Übersicht über einige Zahlenwerte ist in Abb. 7.25 zusammengestellt.

## 7.7.4 Festkomma-Dualzahlen

Entsprechend zum Dezimalbruch definiert man den Dualbruch so, dass man die Stellenwerte hinter dem Komma als negative Zweierpotenzen interpretiert.

Beispiel:

$225{,}8125_{\mathrm{Dez}} =$ 1 1 1 0 0 0 0 1 , 1 1 0 1

$ \phantom{225{,}8125_{\mathrm{Dez}} =} \overline{\phantom{1\ 1\ 1\ 0\ 0\ 0\ 0\ 1\ ,\ 1\ 1\ 0\ 1}} $

$ \phantom{225{,}8125_{\mathrm{Dez}} =} 2^7 \qquad 2^6 \qquad 2^5 \qquad 2^4 \qquad 2^3 \qquad 2^2 \qquad 2^1 \qquad 2^0 \qquad 2^{-1} \qquad 2^{-2} \qquad 2^{-3} \qquad 2^{-4}$

In der Regel wird eine feste Stellenzahl hinter dem Komma vereinbart. Daher kommt die Bezeichnung Festkomma-Dualzahl. Negative Festkommazahlen werden nach Betrag und Vorzeichen angegeben.

Durch die Festlegung einer bestimmten Stellenzahl kann man durch Multiplikation mit dem Kehrwert der niedrigsten Zweierpotenz ganze Zahlen herstellen, die in den beschriebenen Darstellungen verarbeitet werden können. Für die Zahlenausgabe macht man die Multiplikation wieder rückgängig.

## 7.7.5 Gleitkomma-Dualzahlen

Entsprechend zur Gleitkomma-Dezimalzahl

$$
Z_{10} = M \cdot 10^E
$$

definiert man die Gleitkomma-Dualzahl:

$$
Z_2 = M \cdot 2^E
$$

Darin ist $M$ die Mantisse und $E$ der Exponent.
<!-- page-import:0704:end -->

<!-- page-import:0705:start -->
668 7. Schaltnetze (Kombinatorische Logik)

| IEEE Format | Wort–Breite | Vor–zeichen $S$ | Exponent Breite $E_l$ | Bereich | Mantisse Breite $M_k$ | Genauigkeit |
|---|---:|---:|---:|---|---:|---|
| Einfach | 32 bit | 1 bit | 8 bit | $2^{\pm127} \approx 10^{\pm38}$ | 23 bit | $\widehat{=}$ 7 Dez. Stellen |
| Doppelt | 64 bit | 1 bit | 11 bit | $2^{\pm1023} \approx 10^{\pm308}$ | 52 bit | $\widehat{=}$16 Dez. Stellen |
| Intern | 80 bit | 1 bit | 15 bit | $2^{\pm16383} \approx 10^{\pm4932}$ | 64 bit | $\widehat{=}$19 Dez. Stellen |

**Abb. 7.26.** Spezifikationen der IEEE-Gleitkommaformate

*Beispiel:*

225,8125                     Dezimal, Festkomma

= 2,258125 E 2              Dezimal, Gleitkomma

= 11100001,1101          Dual, Festkomma

= 1,11000011101 E 0111     Dual, Gleitkomma

Zur Rechnung mit Gleitkommazahlen verwendet man heutzutage durchweg die im *Floating-Point-Standard* IEEE-P754 genormte Zahlendarstellung. Diese Zahlendarstellung wird nicht nur in Rechenanlagen, sondern auch in PCs und zum Teil sogar auch in Signalprozessoren eingesetzt und vielfältig durch die entsprechende Arithmetik-Prozessoren unterstützt. Dabei kann der Anwender zwischen zwei Rechengenauigkeiten wählen: dem 32 bit-Single-Precision-Format und der Double-Precision-Darstellung mit 64 bit. Intern wird mit 80 bit Genauigkeit gerechnet. Diese drei Zahlenformate sind in Abb. 7.26 und Abb. 7.27 dargestellt. Man kann hier drei Bereiche unterscheiden: das Vorzeichenbit $S$, den Exponenten $E$ und die Mantisse $M$. Die Wortbreite des Exponenten und der Mantisse hängen von der gewählten Genauigkeit ab. Die Mantisse $M$ wird beim IEEE-Standard durch die Ziffern $m_0, m_1, m_2 \ldots$ angegeben. Im Normalfall ist die Mantisse auf $m_0 = 1$ normiert:

$$
M_k = 1 + m_1 \cdot 2^{-1} + m_2 \cdot 2^{-2} + \ldots = 1 + \sum_{i=1}^{k} m_i 2^{-i}
$$

(7.10)

Ihr Betrag liegt demnach zwischen $1 \leq M < 2$. Die Ziffer $m_0 = 1$ wird nur bei der internen Darstellung angegeben, sonst ist sie verborgen, und man muss sie sich zur Rechnung ergänzen. Der Exponent $E$ wird beim IEEE-Format als Offset-Dualzahl angegeben, damit positive und negative Werte definiert werden können.

**Abb. 7.27.** Vergleich der Gleitkommaformate
<!-- page-import:0705:end -->

<!-- page-import:0706:start -->
7.7 Zahlendarstellung 669

Abb. 7.28. Aufteilung einer 32 bit-Gleitkomma-Zahl

$$
E_l = +z_{l-1}\cdot 2^{l-1} + z_{l-2}\cdot 2^{l-2} + \ldots + z_1\cdot 2^1 + z_0\cdot 2^0
$$

(7.11)

Zur Rechnung muss man daher einen Offset von der Größe des halben Bereichs subtrahieren. Er beträgt

$$
\text{Offset} = 2^{l-1} - 1
$$

(7.12)

$2^7 - 1 = 127$ bei einfacher Genauigkeit,

$2^{10} - 1 = 1\ 023$ bei doppelter Genauigkeit,

$2^{14} - 1 = 16\ 383$ bei interner Genauigkeit.

Das Vorzeichen der ganzen Zahl wird durch das Vorzeichenbit S bestimmt. Hier erfolgt also eine Darstellung nach Betrag und Vorzeichen. Der Wert einer IEEE-Zahl lässt sich demnach auf folgende Weise berechnen:

$$
Z = (-1)^S \cdot M_k \cdot 2^{E_l-\text{Offset}}
$$

(7.13)

Am Beispiel der einfachen IEEE-Genauigkeit mit 32 bit Wortbreite soll dies noch etwas genauer erklärt werden. Die Aufteilung eines Wortes ist in Abb. 7.28 dargestellt. Das höchste Bit ist das Vorzeichenbit S. Dann folgen 8 bit für den Exponenten und 23 bit für die Mantisse. Das höchste Bit der Mantisse $m_0 = 1$ ist verborgen; das Komma steht vor $m_1$. Der Stellenwert von $m_1$ ist also $\frac{1}{2}$.

Die ganze Zahl lässt sich aufteilen in zwei Worte zu je 16 bit oder 4 Byte oder 8 Nibbel. Sie lässt sich daher mit 8 Hex-Zeichen angeben. In Abb. 7.29 stehen einige Beispiele. Die normierte Zahl NOR$_1$ besitzt einen Exponenten von 127; nach Abzug des Offsets von 127 ergibt sich ein Multiplikator von $2^0 = 1$. Der dargestellte Wert der Mantisse beträgt 0,75. Zusammen mit der verborgenen 1 ergibt sich der angegebene Wert +1,75. Im zweiten Beispiel NOR$_2$ wurde eine negative Zahl gewählt; hier ist $S = 1$. Die Zahl 10 im dritten Beispiel wird normiert dargestellt als $10 = 2^3 \cdot 1{,}25$. Zu der angegebenen Hex-Darstellung gelangt man, indem man (wie immer) die Bitfolge in Vierergruppen zusammenfasst und die zugehörigen Hex-Symbole verwendet. Leider ist die Hex-Darstellung von IEEE-Zahlen sehr unübersichtlich, weil im ersten Symbol das Vorzeichen und ein Teil des Exponenten enthalten ist, und im dritten Symbol Exponent und Mantisse gemischt sind.

Ein paar Sonderfälle sind ebenfalls in Abb. 7.29 aufgelistet. Die größte im 32 bit IEEE-Format darstellbare Zahl beträgt:

$$
\mathrm{NOR}_{\max} = 2^{254-127}(1 + 1 - 2^{-23})
$$

$$
= 2^{127}(2 - 2^{-23}) \approx 2^{128} \approx 3{,}4 \cdot 10^{38}
$$
<!-- page-import:0706:end -->
