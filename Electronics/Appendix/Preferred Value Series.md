# Preferred Value Series

<!-- page-import:0855:start -->
818  12. Aktive Filter

$$
A(s_n) = -\frac{R_2/R_1}{1 + \omega_g C_1 \left(R_2 + R_3 + \frac{R_2R_3}{R_1}\right)s_n + \omega_g^2 C_1 C_2 R_2 R_3 s_n^2}
$$

**Abb. 12.38.** Aktives Tiefpassfilter 2. Ordnung mit Mehrfachgegenkopplung.  
Beispiel für ein Besselfilter mit einer Grenzfrequenz von 1 kHz

Zur Dimensionierung kann man z.B. die Widerstände $R_1$ und $R_3$ vorgeben und aus den Dimensionierungsgleichungen $R_2$, $C_1$ und $C_2$ berechnen. Wie man sieht, ist eine Dimensionierung für alle positiven Werte von $a_1$ und $b_1$ möglich. Man kann also jeden gewünschten Filtertyp realisieren. Die Gleichspannungsverstärkung $A_0$ ist negativ. Das Filter bewirkt bei tiefen Frequenzen demnach eine Signalinvertierung.

Um wirklich die gewünschten Frequenzgänge zu erhalten, müssen die Bauelemente enge Toleranzen besitzen. Diese Forderung ist für Widerstände leicht zu erfüllen, da sie in der Normreihe E96 mit Toleranz von 1% lagermäßig geführt werden. Aber auch die Kondensatoren sollten einprozentige Toleranz besitzen; sie sind jedoch meist nur in der Normreihe E6 (Abb. 28.4.1 auf Seite 1745) erhältlich. Daher ist es vorteilhaft, bei der Dimensionierung von Filtern die Kondensatoren vorzugeben und die Widerstandswerte zu berechnen. Dazu lösen wir die Dimensionierungsgleichungen nach den Widerständen auf und erhalten:

$$
R_2 = \frac{a_1 C_2 - \sqrt{a_1^2 C_2^2 - 4C_1C_2b_1(1 - A_0)}}{4\pi f_g C_1 C_2}
$$

$$
R_1 = \frac{R_2}{-A_0}
$$

$$
R_3 = \frac{b_1}{4\pi^2 f_g^2 C_1 C_2 R_2}
$$

Damit sich für $R_2$ ein reeller Wert ergibt, muss die Bedingung

$$
\frac{C_2}{C_1} \ge \frac{4b_1(1 - A_0)}{a_1^2}
$$

erfüllt sein. Die günstigste Dimensionierung ergibt sich, wenn man $C_1$ vorgibt und für $C_2$ den nächst größeren Normwert wählt. Zur Erläuterung der Dimensionierung soll hier wieder das vorhergehende Beispiel, also ein Bessel-Tiefpass mit einer Grenzfrequenz von 1 kHz dienen, hier mit einer Verstärkung von $A_0 = -1$. Wir wählen $C_1 = 1\,\mathrm{nF}$ und erhalten mit der Bedingung $C_2 > 4\,\mathrm{nF}$ den Wert $C_2 = 4{,}7\,\mathrm{nF}$. Damit ergeben sich die Widerstände $R_1 = R_2 = 77{,}3\,\mathrm{k}\Omega$ und $R_3 = 43{,}0\,\mathrm{k}\Omega$. Im Vergleich zu dem LRC-Filter in Abb. 12.37 werden die Vorteile des aktiven Filters besonders deutlich.
<!-- page-import:0855:end -->

<!-- page-import:1782:start -->
1745

## 28.4 Normwert-Reihen

| E3 ±20% | E6 ±20% | E12 ±10% | E24 ±5% | E48 ±2% | E96 ±1% | E3 ±20% | E6 ±20% | E12 ±10% | E24 ±5% | E48 ±2% | E96 ±1% |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 1,0 | 1,0 | 1,0 | 1,0 | 1,00 | 1,00 |  | 3,3 | 3,3 | 3,3 | 3,32 | 3,32 |
|  |  |  |  |  | 1,02 |  |  |  |  |  | 3,40 |
|  |  |  |  | 1,05 | 1,05 |  |  |  |  | 3,48 | 3,48 |
|  |  |  |  |  | 1,07 |  |  |  |  |  | 3,57 |
|  |  |  | 1,1 | 1,10 | 1,10 |  |  |  | 3,6 | 3,65 | 3,65 |
|  |  |  |  |  | 1,13 |  |  |  |  |  | 3,74 |
|  |  |  |  | 1,15 | 1,15 |  |  |  |  | 3,83 | 3,83 |
|  |  | 1,2 | 1,2 | 1,21 | 1,21 |  |  | 3,9 | 3,9 |  | 3,92 |
|  |  |  |  |  | 1,24 |  |  |  |  | 4,02 | 4,02 |
|  |  |  | 1,3 | 1,27 | 1,27 |  |  |  | 4,3 |  | 4,12 |
|  |  |  |  | 1,33 | 1,30 |  |  |  |  | 4,22 | 4,22 |
|  |  |  |  |  | 1,33 |  |  |  |  |  | 4,32 |
|  |  |  |  |  | 1,37 |  |  |  |  | 4,42 | 4,42 |
|  |  |  |  | 1,40 | 1,40 |  |  |  |  |  | 4,53 |
|  |  |  |  |  | 1,43 |  | 4,7 | 4,7 | 4,7 | 4,64 | 4,64 |
|  |  |  |  | 1,47 | 1,47 |  |  |  |  |  | 4,75 |
|  | 1,5 | 1,5 | 1,5 |  | 1,50 |  |  |  |  | 4,87 | 4,87 |
|  |  |  |  | 1,54 | 1,54 |  |  |  | 5,1 | 5,11 | 5,11 |
|  |  |  |  |  | 1,58 |  |  |  |  |  | 5,23 |
|  |  |  | 1,6 | 1,62 | 1,62 |  |  |  |  | 5,36 | 5,36 |
|  |  |  |  |  | 1,65 |  |  | 5,6 | 5,6 | 5,62 | 5,62 |
|  |  |  |  | 1,69 | 1,69 |  |  |  |  |  | 5,76 |
|  |  | 1,8 | 1,8 | 1,78 | 1,74 |  |  |  |  | 5,90 | 5,90 |
|  |  |  |  |  | 1,78 |  |  |  | 6,2 | 6,19 | 6,04 |
|  |  |  |  | 1,87 | 1,82 |  |  |  |  |  | 6,19 |
|  |  |  |  |  | 1,87 |  |  |  |  | 6,49 | 6,34 |
|  |  |  |  |  | 1,91 |  |  |  |  |  | 6,49 |
|  |  |  | 2,0 | 1,96 | 1,96 |  | 6,8 | 6,8 | 6,8 | 6,81 | 6,65 |
|  |  |  |  | 2,05 | 2,00 |  |  |  |  |  | 6,81 |
|  |  |  |  |  | 2,05 |  |  |  |  |  | 6,98 |
| 2,2 | 2,2 | 2,2 | 2,2 | 2,15 | 2,10 |  |  |  |  | 7,15 | 7,15 |
|  |  |  |  |  | 2,15 |  |  |  | 7,5 | 7,50 | 7,32 |
|  |  |  |  | 2,26 | 2,21 |  |  |  |  |  | 7,50 |
|  |  |  |  |  | 2,26 |  |  |  |  |  | 7,68 |
|  |  |  | 2,4 | 2,37 | 2,32 |  |  |  |  | 7,87 | 7,87 |
|  |  |  |  |  | 2,37 |  |  | 8,2 | 8,2 | 8,25 | 8,06 |
|  |  |  |  | 2,49 | 2,43 |  |  |  |  |  | 8,25 |
|  |  |  |  |  | 2,49 |  |  |  |  |  | 8,45 |
|  |  |  |  | 2,61 | 2,55 |  |  |  |  | 8,66 | 8,66 |
|  |  |  |  |  | 2,61 |  |  |  | 9,1 | 9,09 | 8,87 |
|  |  | 2,7 | 2,7 | 2,74 | 2,67 |  |  |  |  |  | 9,09 |
|  |  |  |  |  | 2,74 |  |  |  |  |  | 9,31 |
|  |  |  |  | 2,87 | 2,80 |  |  |  |  | 9,53 | 9,53 |
|  |  |  | 3,0 | 3,01 | 2,87 |  |  |  |  |  | 9,76 |
|  |  |  |  |  | 2,94 |  |  |  |  |  |  |
|  |  |  |  |  | 3,01 |  |  |  |  |  |  |
|  |  |  |  |  | 3,09 |  |  |  |  |  |  |
|  |  |  |  | 3,16 | 3,16 |  |  |  |  |  |  |
|  |  |  |  |  | 3,24 |  |  |  |  |  |  |

**Abb. 28.4.1.** Normwert-Reihen nach DIN 41426 bzw. IEC 60063
<!-- page-import:1782:end -->
