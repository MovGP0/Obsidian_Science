# Complementary Darlington Circuits

<!-- page-import:0939:start -->
902  15. Leistungsverstärker

und Ausgangsspannung ist gleich der Basis-Emitter-Spannung des jeweils leitenden Transistors. Sie ändert sich bei Belastung nur wenig. Daher ist $U_a \approx U_e$, unabhängig von der Belastung. Die Ausgangsleistung ist umgekehrt proportional zu $R_L$ und besitzt keinen Extremwert. Es gibt bei dieser Schaltung also keine Leistungsanpassung. Die maximale Ausgangsleistung wird vielmehr durch die zulässigen Spitzenströme und die maximale Verlustleistung der Transistoren bestimmt. Bei sinusförmiger Aussteuerung beträgt die Ausgangsleistung

$$
P_L=\frac{\hat U_a^2}{2R_L}.
$$

Nun wollen wir die in $T_1$ auftretende Verlustleistung $P_{T1}$ berechnen; die Verlustleistung in $T_2$ ist wegen der Symmetrie der Schaltung genauso groß.

$$
P_{T1}=\frac{1}{T}\int_0^{T/2}(V_b-U_a(t))\frac{U_a(t)}{R_L}\,\mathrm{d}t.
$$

Mit $U_a(t)=\hat U_a\sin\omega t$ folgt:

$$
P_{T1}=\frac{1}{R_L}\left(\frac{\hat U_aV_b}{\pi}-\frac{\hat U_a^2}{4}\right).
$$

Der Wirkungsgrad der Schaltung beträgt damit:

$$
\eta=\frac{P_L}{P_{\mathrm{ges}}}=\frac{P_L}{2P_{T1}+P_L}=\frac{\pi}{4}\cdot\frac{\hat U_a}{V_b}\approx0{,}785\,\frac{\hat U_a}{V_b}
\qquad (15.1)
$$

Er ist also proportional zur Ausgangsamplitude und erreicht bei Vollaussteuerung $(\hat U_a=V_b)$ einen Wert von $\eta_{\max}=78{,}5\%$. Die Verlustleistung der Transistoren erreicht ihr Maximum nicht bei Vollaussteuerung, sondern bei

$$
\hat U_a=\frac{2}{\pi}V_b\approx0{,}64\,V_b.
$$

Dies erhält man unmittelbar aus der Beziehung

$$
\frac{\mathrm{d}P_{T1}}{\mathrm{d}\hat U_a}=0.
$$

Die Verlustleistung beträgt in diesem Fall pro Transistor

$$
P_{T\max}=\frac{1}{\pi^2}\frac{V_b^2}{R_L}\approx0{,}1\,\frac{V_b^2}{R_L}
\qquad (15.2)
$$

Den Verlauf von Ausgangsleistung, Verlustleistung und Gesamtleistung zeigt Abb. 15.3 als Funktion der Aussteuerung. Man erkennt, dass die aufgenommene Leistung

$$
P_{\mathrm{ges}}=2P_{T1}+P_L=\frac{2V_b}{\pi R_L}\hat U_a\approx0{,}64\,\frac{V_b}{R_L}\hat U_a
$$

proportional zur Ausgangsamplitude ist. Dies ist das Kennzeichen des $B$-Betriebs.

Wie oben beschrieben, ist jeweils nur ein Transistor leitend. Dies gilt jedoch nur bei Frequenzen der Eingangsspannung, die klein gegenüber der Transitfrequenz der verwendeten Transistoren sind. Ein Transistor benötigt eine gewisse Zeit, um vom leitenden in
<!-- page-import:0939:end -->

<!-- page-import:0942:start -->
15.3 Komplementäre Darlington-Schaltungen 905

**Abb. 15.9.**  
Vorspannungserzeugung mit Transdioden

**Abb. 15.10.**  
Vorspannungserzeugung mit Emitterfolgern

ximalen Ausgangsstrom von 1 A und einer Stromverstärkung von $B = 50$, muss demnach $I_1 > 20$ mA gewählt werden. Zusätzlich müssen noch die Transistor- und Schaltkapazitäten vom Strom $I_1$ umgeladen werden. Um schnell zu schalten, wären dazu Ströme von $I_1 = 100$ mA erforderlich. Bei kleineren Ruheströmen muss man entsprechende Kompromisse mit der Geschwindigkeit schließen.

Bei der Vorspannungserzeugung mit Transdioden in Abb. 15.9 muss die Eingangsspannungsquelle diese Ströme liefern. Bei der Vorspannungserzeugung mit den Emitterfolgern in Abb. 15.10 sind die erforderlichen Signalströme am Eingang um die Stromverstärkung von $T_3, T_4$ also um den Faktor $\beta \approx 100$ niedriger. Die Stromquellen $I_1$ müssen aber auch hier die Basisströme der Endstufentransistoren bereitstellen. Weitere Gesichtspunkte für die Kopplung der Endstufe mit dem Vorverstärker finden Sie auch im Kapitel 5.2.2.2 auf Seite 523.

## 15.3 Komplementäre Darlington-Schaltungen

Mit den bisher beschriebenen Schaltungen kann man Ausgangsströme bis zu einigen hundert Milliampere erhalten. Will man höhere Ausgangsströme entnehmen, benötigt man Transistoren mit höherer Stromverstärkung. Solche Transistoren kann man aus zwei Einzeltransistoren zusammensetzen, indem man sie als Darlington-Schaltung oder Komplementär-Darlington-Schaltung betreibt. Diese Schaltungen und ihre Daten haben wir bereits in Kapitel 2.4.4 auf S. 166 kennen gelernt. Abb. 15.11 zeigt die Grundschaltung eines Darlington-Leistungsverstärkers. Die Darlington-Schaltungen bestehen aus den Transistoren $T_1$ und $T'_1$ bzw. $T_2$ und $T'_2$.

Die Widerstände $R_1$ und $R_2$ dienen als Ableitwiderstände für die in der Basis der Ausgangstransistoren gespeicherte Ladung. Je niederohmiger sie sind, desto schneller können die Ausgangstransistoren gesperrt werden. Dies ist von besonderer Bedeutung, weil sonst beim Vorzeichenwechsel der Eingangsspannung der eine Transistor bereits leitend wird, bevor der andere sperrt. Auf diese Weise kann ein großer Querstrom durch die Endstufe fließen und durch „Secondary Breakdown“ die sofortige Zerstörung eintreten. Dieser Effekt ist für die erreichbare Großsignal-Bandbreite maßgebend.

Mitunter möchte man in der Endstufe nur npn Leistungstransistoren einsetzen, weil sie sich leichter in integrierten Schaltungen herstellen lassen. Zu diesem Zweck er-
<!-- page-import:0942:end -->
