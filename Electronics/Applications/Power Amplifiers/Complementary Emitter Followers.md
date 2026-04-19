# Complementary Emitter Followers

<!-- page-import:0938:start -->
15.2 Komplementäre Emitterfolger 901

*Spannungsverstärkung:* $A \approx 1$  
*Stromverstärkung:* $A_i = \beta$

*Ausgangsleistung bei sinusförmiger Vollaussteuerung:* $P_L = \dfrac{V_b^2}{2R_L}$

*Wirkungsgrad bei sinusförmiger Aussteuerung:* $\eta = \dfrac{P_L}{P_{ges}} = \dfrac{\hat{U}_a}{V_b}\ 78{,}5\,\%$

*Maximale Verlustleistung in einem Transistor:* $P_{T1} = P_{T2} = \dfrac{V_b^2}{\pi^2 R_L} = 0{,}2P_L$

**Abb. 15.2.** Komplementärer Emitterfolger

die Schaltung nicht übersteuert wird. Der Wirkungsgrad $\eta$ ist definiert als das Verhältnis von erhältlicher Ausgangsleistung zu aufgenommener Leistung. Mit den Ergebnissen für $P_{L\ \max}$ und $P_{ges}$ folgt für den maximalen Wirkungsgrad $\eta_{max} = \dfrac{1}{16} = 6{,}25\%$. Zwei Merkmale sind für diese Schaltung charakteristisch:

1) Der Strom durch den Transistor wird nie Null.  
2) Die von der Schaltung aufgenommene Gesamtleistung ist konstant, unabhängig von der Ausleistung.

Dies sind die Kennzeichen des *A-Betriebs*.

## 15.2 Komplementäre Emitterfolger

Bei dem Emitterfolger in Abb. 15.1 wurde die Ausgangsleistung dadurch beschränkt, dass über $R_E$ nur ein begrenzter Ausgangsstrom fließen konnte. Wesentlich größere Ausgangsleistung und besseren Wirkungsgrad kann man erzielen, wenn man $R_E$ wie in Abb. 15.2 durch einen weiteren Emitterfolger ersetzt.

### 15.2.1 Komplementäre Emitterfolger in B-Betrieb

Bei positiven Eingangsspannungen arbeitet $T_1$ als Emitterfolger, und $T_2$ sperrt; bei negativen Eingangsspannungen ist es umgekehrt. Die Transistoren sind also abwechselnd je eine halbe Periode leitend. Eine solche Betriebsart wird als *Gegentakt-B-Betrieb* bezeichnet. Für $U_e = 0$ sperren beide Transistoren. Daher nimmt die Schaltung keinen Ruhestrom auf. Der aus der positiven bzw. negativen Betriebsspannungsquelle entnommene Strom ist gleich dem Ausgangsstrom. Man erkennt schon qualitativ, dass die Schaltung einen wesentlich besseren Wirkungsgrad besitzen wird als der normale Emitterfolger. Ein weiterer Unterschied ist, dass man den Ausgang bei jeder Belastung zwischen $\pm V_b$ aussteuern kann, da die Transistoren den Ausgangsstrom nicht begrenzen. Die Differenz zwischen Eingangs-
<!-- page-import:0938:end -->

<!-- page-import:0940:start -->
15.2 Komplementäre Emitterfolger 903

**Abb. 15.3.**  
Leistungsaufteilung in Abhängigkeit von der Ausgangsamplitude

**Abb. 15.4.**  
Abhängigkeit des Wirkungsgrads von der Ausgangsamplitude. AP = typischer Arbeitspunkt bei Musikwiedergabe.

den gesperrten Zustand überzugehen. Unterschreitet die Schwingungsdauer der Eingangsspannung diese Zeit, können beide Transistoren gleichzeitig leitend werden. Dann können sehr hohe Ströme von $+V_b$ nach $-V_b$ durch beide Transistoren fließen, die zur momentanen Zerstörung führen können. Schwingungen mit diesen kritischen Frequenzen können in gegengekoppelten Verstärkern auftreten oder auch schon dann, wenn man die Emitterfolger kapazitiv belastet. Zum Schutz der Transistoren sollte man eine Strombegrenzung vorsehen.

## 15.2.2 Komplementäre Emitterfolger

Abbildung 15.5 zeigt die Übertragungskennlinie der Schaltung für Gegentakt-B-Betrieb in Abb. 15.2. In einem Eingangsspannungsbereich von $\pm 0{,}7\,\mathrm{V}$ sperren beide Transistoren; deshalb ist die Ausgangsspannung in diesem Bereich praktisch Null. Erst bei größeren

**Abb. 15.5.**  
Übernahmeverzerrungen bei Gegentakt-B-Betrieb

**Abb. 15.6.**  
Übernahmeverzerrungen bei Gegentakt-AB-Betrieb
<!-- page-import:0940:end -->
