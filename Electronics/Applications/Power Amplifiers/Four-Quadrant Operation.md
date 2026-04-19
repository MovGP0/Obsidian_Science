# Four-Quadrant Operation

<!-- page-import:0948:start -->
15.7 Vier-Quadranten-Betrieb 911

$R_4$ gewählt werden. Bei kleinen Ausgangsspannungen ergibt sich daher dieselbe Stromgrenze wie in Abb. 15.17. Bei größeren positiven Ausgangsspannungen entsteht an $R_3$ ein zusätzlicher Spannungsabfall der Größe $U_a R_3 / R_5$. Dadurch wird die Stromgrenze auf den Wert

$$
I_{a\ \max}^{+} \approx \frac{0{,}7\,\mathrm{V}}{R_1} + \frac{R_3}{R_5}\frac{U_a}{R_1}
$$

erhöht. Die Diode $D_5$ verhindert, dass der Transistor $T_3$ bei negativen Ausgangsspannungen eine positive Vorspannung erhält und dadurch unbeabsichtigt leitend werden könnte. Die Diode $D_3$ verhindert, dass die Kollektor-Basis-Diode von $T_3$ leitend wird, wenn es bei negativen Ausgangsspannungen einen größeren Spannungsabfall an $R_2$ gibt. Sonst würde die Ansteuerschaltung zusätzlich belasten. Die entsprechenden Überlegungen gelten für die negative Strombegrenzung mit $T_4$.

Der Verlauf der Stromgrenzen ist in Abb. 15.19 zur Veranschaulichung aufgetragen. Mit dieser spannungsabhängigen Strombegrenzung ist es möglich, den sicheren Arbeitsbereich der Leistungstransistoren voll auszunutzen. Sie wird daher auch als SOA (Safe Operating Area)-Strombegrenzung bezeichnet.

## 15.7 Vier-Quadranten-Betrieb

Die härtesten Bedingungen für eine Leistungsendstufe ergeben sich, wenn man für beliebige positive und negative Ausgangsspannungen eine konstante Stromgrenze $I_{a\ \max}^{+}$ und $I_{a\ \max}^{-}$ fordert. Solche Anforderungen entstehen immer dann, wenn kein ohmscher Verbraucher vorliegt, sondern eine Last, die Energie an die Endstufe zurückspeisen kann. Derartige Verbraucher sind z.B. Kondensatoren, Induktivitäten und Elektromotoren. In diesem Fall muss man auf die Strombegrenzung in Abb. 15.16 oder 15.17 zurückgreifen. Der kritische Betriebszustand für den negativen Endstufentransistor $T_2$ ergibt sich dann, wenn der Verbraucher bei der Ausgangsspannung $U_a = U_{a\ \max} \approx V^{+}$ den Strombegrenzungsstrom $I_{a\ \max}^{-}$ in die Schaltung einspeist. Dann fließt der Strom $I_{a\ \max}^{-}$ bei der Spannung $U_{CE2} \approx 2V^{+}$ durch $T_2$. Dann entsteht in $T_2$ die Verlustleistung $P_{T2} = 2V^{+}\cdot I_{a\ \max}^{-}$. Bei der Spannung $2V^{+}$ darf man die meisten Bipolartransistoren aber wegen des Durchbruchs zweiter Art (Secondary Breakdown) nur mit einem Bruchteil der thermisch zulässigen Leistung belasten. Man muss deshalb meist mehrere Leistungstransistoren parallel schalten oder besser Leistungsmosfets verwenden, die keinen Durchbruch zweiter Art besitzen.

Eine Möglichkeit, die Spannung an den Endstufentransistoren zu halbieren, ist in Abb. 15.20 dargestellt. Die Grundidee dabei ist, die Kollektorpotentiale von $T_1$ und $T_2$ der Eingangsspannung anzupassen. Für positive Eingangsspannungen ergibt sich

$$
V_1 = U_e + 0{,}7\,\mathrm{V} + 3\,\mathrm{V} - 0{,}7\,\mathrm{V} - 0{,}7\,\mathrm{V} = U_e + 2{,}3\,\mathrm{V}.
$$

Der Transistor $T_1$ wird also sicher außerhalb der Sättigung betrieben. Bei negativen Eingangsspannungen übernimmt die Diode $D_3$ den Ausgangsstrom, und es wird $V_1 = -0{,}7\,\mathrm{V}$. Sinkt die Eingangsspannung auf $U_e = U_{e\ \min} \approx V^{-}$, fällt an $T_1$ nur die Spannung $U_{CE1\ \max} \approx V^{-}$ ab. Die maximale Spannung an $T_3$ ist ebenfalls nicht größer. Sie ergibt sich für $U_e = 0$ und beträgt $U_{CE3\ \max} \approx V^{+}$. Die maximal auftretende Verlustleistung in $T_1$ und $T_3$ ist daher $P_{\max} = V^{+}\cdot I_{a\ \max}^{+}$. Es wird also nicht nur die maximal auftretende Kollektor-Emitter-Spannung halbiert, sondern auch die Verlustleistung. Für die negative Seite, $T_2, T_4$ ergeben sich wegen der Symmetrie der Schaltung die entsprechenden Verhältnisse. Der Verlauf von $V_1$ und $V_2$ ist zur Veranschaulichung in Abb. 15.21 dargestellt.
<!-- page-import:0948:end -->
