# Current-Controlled Voltage Sources

<!-- page-import:0807:start -->
770  11. Gesteuerte Quellen und Impedanzkonverter

Die hier beschriebene Schaltung wird noch einmal bei dem NIC auf Seite 782 erklärt, dort aber mit einer anderen Dimensionierung.

## 11.2 Stromgesteuerte Spannungsquellen

Das in Abb. 11.7 dargestellte Modell der stromgesteuerten Spannungsquelle ist identisch mit dem der spannungsgesteuerten Spannungsquelle in Abb. 11.2. Der Unterschied besteht lediglich darin, dass jetzt der Eingangsstrom als Steuergröße verwendet wird. Er soll durch die Schaltung möglichst wenig beeinflusst werden. Das ist im Idealfall für $r_e = 0$ gegeben. Die Übertragungsgleichungen lauten bei vernachlässigbarer Rückwirkung:

$$
\begin{aligned}
U_1 &= r_e I_1 + 0 \cdot I_2 \\
U_2 &= R I_1 - r_a I_2
\end{aligned}
\qquad \Rightarrow \qquad
\begin{aligned}
U_1 &= 0 \\
U_2 &= R I_1
\end{aligned}
$$

(real)  
(ideal, $r_e = r_a = 0$) (11.3)

Bei der Schaltungsrealisierung nach Abb. 11.8 nutzt man die Tatsache aus, dass der Summationspunkt eines Umkehrverstärkers eine virtuelle Masse darstellt. Dadurch ergibt sich der geforderte niedrige Eingangswiderstand. Die Ausgangsspannung wird $U_2 = -R I_1$, wenn man den Eingangsruhestrom des Verstärkers gegenüber $I_1$ vernachlässigen kann. Sollen sehr kleine Ströme $I_1$ als Steuergröße verwendet werden, muss man einen Verstärker mit Fet-Eingang verwenden. Zusätzliche Fehler können durch die Offsetspannung entstehen. Sie sind umso größer, je niedriger der Innenwiderstand $R_g$ der Signalquelle ist, da die Offsetspannung mit dem Faktor $(1 + R/R_g)$ verstärkt wird.

Für die Ausgangsimpedanz ergibt sich dieselbe Beziehung wie bei der vorhergehenden Schaltung. Die darin auftretende Schleifenverstärkung $g$ ist vom Innenwiderstand $R_g$ der Signalquelle abhängig und beträgt:

$$
g = k\,\underline{A}_D = \frac{R_g}{R + R_g}\,\underline{A}_D
$$

Eine stromgesteuerte Spannungsquelle mit potentialfreiem Eingang werden wir noch im Kapitel 18.2.2 auf S. 1060 behandeln.

**Abb. 11.7.**  
Modell einer realen stromgesteuerten Spannungsquelle

**Abb. 11.8.**  
Stromgesteuerte Spannungsquelle

Ideale Übertragungsfunktion: $U_2 = -R I_1$

Eingangsimpedanz: $Z_e = \frac{R}{\underline{A}_D}$

Ausgangsimpedanz: $Z_a = \frac{r_a}{g}$
<!-- page-import:0807:end -->
