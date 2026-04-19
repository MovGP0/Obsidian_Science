# Current-Controlled Current Sources

<!-- page-import:0817:start -->
780 11. Gesteuerte Quellen und Impedanzkonverter

Möchte man an den Lastwiderstand $R_L$ auf ein beliebiges Potential legen, ohne dass sich der Strom ändert, dann benötigt man eine schwimmende Stromquelle. Sie lässt sich, wie in Abb. 11.23 gezeigt, mit Hilfe von zwei geerdeten Stromquellen realisieren, die entgegengesetzt gleich große Ströme liefern. Man muss in diesem Fall jedoch sicherstellen, dass bei keiner von beiden Stromquellen der Aussteuerbereich überschritten wird. Aus diesem Grund muss entweder der angeschlossene Verbraucher das Potential festlegen oder es ist eine Gleichtaktregelung erforderlich. Sie muss die beiden Ausgangsspannungen der Stromquellen überwachen und eine so regeln, dass die Aussteuerung von beiden Quellen symmetriert wird. Ein Beispiel für die schaltungstechnische Realisierung einer schwimmenden Stromquelle mit zwei CC-Operationsverstärkern (z.B. 2 x OPA615 oder 1 x MAX435) ist in Abb. 11.24 dargestellt.

## 11.4 Stromgesteuerte Stromquellen

Das Modell der stromgesteuerten in Abb. 11.25 Stromquelle ist identisch mit dem der spannungsgesteuerten Stromquelle in Abb. 11.9. Der Unterschied besteht lediglich darin, dass jetzt der Eingangsstrom als Steuergröße verwendet wird. Er soll durch die Schaltung möglichst wenig beeinflusst werden. Das ist im Idealfall für $r_e = 0$ gegeben. Die Übertragungsgleichungen lauten bei vernachlässigbarer Rückwirkung:

$$
U_1 = r_e I_1 + 0 \cdot U_2 \qquad \Rightarrow \qquad U_1 = 0
$$

$$
I_2 = A_I I_1 - \frac{1}{r_a} \cdot U_2 \qquad \Rightarrow \qquad I_2 = A_I I_1
$$

(real)                                     (ideal, $r_e = 0$, $r_a = \infty$)                                     (11.17)

In Abb. 11.26 und 11.27 sind zwei Beispiele für stromgesteuerte Stromquellen dargestellt, die sich aus den entsprechenden spannungsgesteuerten Stromquellen ergeben durch weglassen des Vorwiderstands. Da der Eingang des Operationsverstärkers stromlos ist, wird $I_2 = I_1$.

**Abb. 11.25.**  
Modell einer realen stromgesteuerten Stromquelle

**Abb. 11.26.**  
Stromgesteuerte Stromquelle für potentialfreie Verbraucher

**Abb. 11.27.**  
Stromgesteuerte Stromquelle für potentialgebundene Verbraucher
<!-- page-import:0817:end -->
