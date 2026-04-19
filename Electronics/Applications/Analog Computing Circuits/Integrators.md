# Integrators

<!-- page-import:0781:start -->
744  10. Analogrechenschaltungen

*Ausgangsspannung:* $U_a = -\frac{1}{RC}\int_0^t U_e(\tilde{t})\,d\tilde{t} + U_{a0}$

**Abb. 10.6.** Invertierender Integrator

## 10.4 Integratoren

Eine besonders wichtige Anwendung des Operationsverstärkers in der Analogrechentechnik ist der Integrator. Er bildet allgemein einen Ausdruck der Form:

$$
U_a(t) = K \int_0^t U_e(\tilde{t})\,d\tilde{t} + U_a(t = 0)
$$

### 10.4.1 Invertierender Integrator

Der Integrator in Abb. 10.6 unterscheidet sich vom Umkehrverstärker dadurch, dass der Gegenkopplungswiderstand $R_N$ durch einen Kondensator $C$ ersetzt wird. Dann ergibt sich die Ausgangsspannung:

$$
U_a = \frac{Q}{C} = \frac{1}{C}\left[\int_0^t I_C(\tilde{t})\,d\tilde{t} + Q_0\right]
$$

Dabei ist $Q_0$ die Ladung, die sich zu Beginn der Integration $(t = 0)$ auf dem Kondensator befindet. Mit $I_C = -U_e/R$ folgt:

$$
U_a = -\frac{1}{RC}\int_0^t U_e(\tilde{t})\,d\tilde{t} + U_{a0}
$$

Die Konstante $U_{a0}$ stellt die Anfangsbedingung dar: $U_{a0} = U_a(t = 0) = Q_0/C$. Sie muss durch zusätzliche Maßnahmen auf einen definierten Wert gesetzt werden. Darauf werden wir im nächsten Abschnitt eingehen.

Nun wollen wir zwei Sonderfälle untersuchen: Ist die Eingangsspannung $U_e$ zeitlich konstant, erhält man die Ausgangsspannung

$$
U_a = -\frac{U_e}{RC}t + U_{a0}
$$

Sie steigt also linear mit der Zeit an. Deshalb ist die Schaltung zur Erzeugung von Dreieck- und Sägezahnspannungen sehr gut geeignet.

Ist $U_e$ eine cosinusförmige Wechselspannung $u_e = \hat{U}_e \cos \omega t$, wird die Ausgangsspannung:

$$
U_a(t) = -\frac{1}{RC}\int_0^t \hat{U}_e \cos \omega \tilde{t}\,d\tilde{t} + U_{a0}
= -\frac{\hat{U}_e}{\omega RC}\sin \omega t + U_{a0}
$$
<!-- page-import:0781:end -->

<!-- page-import:0782:start -->
10.4 Integratoren 745

**Abb. 10.7.** Frequenzgang der Schleifenverstärkung $g$

Die Amplitude der Ausgangswechselspannung ist also umgekehrt proportional zur Kreisfrequenz $\omega$. Trägt man den Amplitudenfrequenzgang doppelt-logarithmisch auf, ergibt sich eine Gerade mit der Steigung $-6\,\mathrm{dB}/\mathrm{Oktave}$. Diese Eigenschaft ist ein einfaches Kriterium dafür, ob sich eine Schaltung als Integrator verhält.

Das Verhalten im Frequenzbereich lässt sich auch direkt mit Hilfe der komplexen Rechnung ermitteln:

$$
A=\frac{U_a}{U_e}=-\frac{Z_C}{R}=-\frac{1}{s\,RC}
$$

(10.8)

Für das Verhältnis der Amplituden folgt daraus

$$
\frac{\hat U_a}{\hat U_e}=|A|=\frac{1}{\omega RC}
$$

wie oben gezeigt.

Bezüglich der Stabilität ist zu beachten, dass das Gegenkopplungsnetzwerk hier im Gegensatz zu den bisher behandelten Schaltungen eine Phasenverschiebung verursacht, d.h. der Rückkopplungsfaktor wird komplex:

$$
k=\left.\frac{V_N}{U_a}\right|_{U_e=0}=\frac{s\,RC}{1+s\,RC}
$$

(10.9)

Für hohe Frequenzen strebt $k \to 1$, und die Phasenverschiebung wird Null. In diesem Frequenzbereich liegen also dieselben Verhältnisse vor wie beim voll gegengekoppelten Umkehrverstärker (s. Kap. 5). Deshalb ist auch die dafür notwendige Frequenzgangkorrektur anzuwenden. Intern korrigierte Verstärker sind in der Regel für diesen Fall ausgelegt und daher auch als Integratoren geeignet.

Der zum Integrieren ausnutzbare Frequenzbereich lässt sich in Abb. 10.7 für ein typisches Beispiel ablesen. Als Integrationszeitkonstante wurde $\tau = RC = 100\,\mu s$ gewählt. Man sieht, dass damit eine maximale Schleifenverstärkung $|g| = |kA_D| \approx 600$ erzielt wird, d.h. eine Rechengenauigkeit von $1/|g| \approx 0{,}2\%$. Im Unterschied zum Umkehrverstärker nimmt die Rechengenauigkeit nicht nur bei hohen, sondern auch bei tiefen Frequenzen ab.
<!-- page-import:0782:end -->

<!-- page-import:0784:start -->
10.4 Integratoren 747

**Abb. 10.9.**  
Integrator mit drei Betriebsarten: Integrieren, Halten, Anfangsbedingung setzen

*Anfangsbedingung:*  
$$U_a(t = 0) = -\frac{R_N}{R_2} U_2$$

## 10.4.2 Anfangsbedingung

Ein Integrator ist bei manchen Anwendungen erst dann brauchbar, wenn man die Ausgangsspannung $U_a(t = 0)$ unabhängig von der Eingangsspannung vorgeben kann. Die Schaltung in Abb. 10.9 ermöglicht es, die Integration zu stoppen und Anfangsbedingungen zu setzen.

Ist der Schalter $S_1$ geschlossen und $S_2$ offen, arbeitet die Schaltung wie die in Abb. 10.6: Die Spannung $U_1$ wird integriert. Öffnet man nun den Schalter $S_1$, wird der Ladestrom beim idealen Integrator gleich Null, und die Ausgangsspannung bleibt auf dem Wert stehen, den sie im Umschaltaugenblick hatte. Dies ist von Nutzen, wenn man eine Rechnung unterbrechen möchte, um die Ausgangsspannung in Ruhe abzulesen. Zum Setzen der Anfangsbedingungen lässt man $S_1$ geöffnet und schließt $S_2$. Dadurch wird der Integrator zum Umkehrverstärker mit der Ausgangsspannung:

$$U_a = -\frac{R_N}{R_2} U_2$$

Dieser Wert stellt sich jedoch erst mit einer gewissen Verzögerung ein, die durch die Zeitkonstante $R_N C$ bestimmt wird.

Abbildung 10.10 zeigt eine Möglichkeit, die Schalter elektronisch zu realisieren. Die beiden Fets $T_1$ und $T_2$ ersetzen die Schalter $S_1$ und $S_2$ in Abb. 10.9. Es gibt 3 Betriebsarten:

*Anfangsbedingung:*  
$$U_a(t = 0) = -\frac{R_N}{R_2} U_2$$

**Abb. 10.10.** Elektronisch gesteuerter Integrator. Eine integrierte Schaltung, die zwei derartige Integratoren enthält, ist der ACF2101 von Texas Instruments.
<!-- page-import:0784:end -->

<!-- page-import:0785:start -->
748  10. Analogrechenschaltungen

*Ausgangsspannung:*

$$
U_a=-\frac{1}{C}\int_0^t\left(\frac{U_1}{R_1}+\frac{U_2}{R_2}+\cdots+\frac{U_n}{R_n}\right)d\tilde t+U_{a0}
$$

**Abb. 10.11.** Summationsintegrator

– Wenn die Steuerspannung $U_{St1}$ positiv ist, leitet der Transistor $T_1$ und die Schaltung arbeitet als Integrator.  
– Wenn $U_{St2}$ positiv ist, werden Anfangsbedingungen gesetzt. In dieser Betriebsart dient der Verstärker $OV2$ als Impedanzwandler, um die Einstellzeit zu verkürzen  
– Wenn beide Steuerspannungen Null sind, sperren beide Schalter; der Integrator befindet sich dann im Haltezustand.

Bei einem leitenden Schalter liegen die Drain- und Source-Elektrode auf Nullpotential, weil sie an der virtuellen Masse von $OV1$ angeschlossen sind. Bei geöffnetem Schalter begrenzen die Dioden die Spannung an den Schaltern auf $\pm 0{,}6$ V.

## 10.4.3 Summationsintegrator

Genauso, wie man den Umkehrverstärker zum Additionsverstärker erweitern kann, lässt sich auch der Integrator zum Summationsintegrator in Abb. 10.11 erweitern. Die angegebene Beziehung für die Ausgangsspannung ergibt sich unmittelbar aus der Anwendung der Knotenregel auf den Summationspunkt.

## 10.4.4 Nicht invertierender Integrator

Zur Integration ohne Vorzeichenumkehr kann man zusätzlich zum Integrator einen Umkehrverstärker einsetzen. Eine andere Möglichkeit zeigt Abb. 10.12. Die Schaltung besteht im Prinzip aus einem Tiefpass als Integrierglied und einem parallel geschalteten NIC mit dem Innenwiderstand $-R$, der gleichzeitig als Impedanzwandler wirkt (s. Kap. 11.5 auf S. 781). Zur Berechnung der Ausgangsspannung wenden wir die Knotenregel auf den P-Eingang an und erhalten:

$$
\frac{U_a-V_P}{R}+\frac{U_e-V_P}{R}-C\frac{dV_P}{dt}=0
$$

Mit $V_P=V_N=\frac{1}{2}U_a$ folgt das Ergebnis:

$$
U_a=\frac{2}{RC}\int_0^t U_e(\tilde t)\,d\tilde t
$$

Zu beachten ist, dass die Eingangsspannungsquelle einen sehr niedrigen Innenwiderstand besitzen muss, damit die Stabilitätsbedingung für den NIC nicht verletzt wird.
<!-- page-import:0785:end -->

<!-- page-import:0786:start -->
10.4 Integratoren 749

**Abb. 10.12.**  
Nicht invertierender Integrator

*Ausgangsspannung:* $U_a = \frac{2}{RC}\int_0^t U_e(\tilde t)\, d\tilde t + U_{a0}$

Bei der Verlustkompensation durch den NIC werden Differenzen großer Größen gebildet. Deshalb besitzt dieser Integrator nicht die Präzision der Grundschaltung in Abb. 10.6.

## 10.4.5 Integrator für hohe Frequenzen

Wenn man einen Kondensator mit einer spannungsgesteuerten Stromquelle ansteuert, ergibt sich ebenfalls ein Integrator. Nach diesem Prinzip arbeitet der Integrator in Abb. 10.13. Der CC-Operationsverstärker (Kapitel 5.8 auf S. 600) realisiert die spannungsgesteuerte Stromquelle; er liefert den Strom $I_C = U_e/R$, wenn man den Steilheitswiderstand vernachlässigt. An dem Kondensator ergibt sich daher die Spannung

$$
U_a = \frac{1}{C}\int I_C\, dt = \frac{1}{RC}\int U_e\, dt
$$

Man kann natürlich auch im Frequenzbereich rechnen, wenn man den Widerstand des Kondensators einsetzt:

$$
U_a = \frac{I_C}{sC} = \frac{U_e}{sRC}
$$

Um die Gleichungen nicht zu verfälschen, muss man die Spannung am Kondensator belastungsfrei abnehmen; im Normalfall ist daher noch ein Impedanzwandler erforderlich.

An dem Modell in Abb. 10.13 lassen sich die Auswirkungen der realen Eigenschaften eines CC-Operationsverstärkers auf den Integrator untersuchen. Der Steilheitswiderstand $r_S$ liegt auch hier in Reihe mit dem externen Emitterwiderstand $R$. Er lässt sich dadurch berücksichtigen, dass man den externen Widerstand entsprechend kleiner wählt.

Der dominierende Tiefpass $r_a C_a$ begrenzt die untere Grenzfrequenz des Integrators auf den Wert $f_u = 1/2\pi r_a (C + C_a)$. Diese Einschränkung besitzen alle Integratoren,

Schaltung

Modell

*Ausgangsspannung:* $U_a = \frac{1}{RC}\int_0^t U_e(\tilde t)\, d\tilde t + U_{a0}$

**Abb. 10.13.** Integrator für hohe Frequenzen mit CC-Operationsverstärker
<!-- page-import:0786:end -->

<!-- page-import:0857:start -->
820  12. Aktive Filter

**Abb. 12.41.**  
Sallen-Key-Tiefpass  
als Besselfilter für  
$f_g = 1\,\mathrm{kHz}$

Einstellung notwendig. Dies ist ein gewisser Nachteil gegenüber den vorhergehenden Filtern. Ein bedeutender Vorteil ist jedoch, dass der Filtertyp ausschließlich durch $A_0$ bestimmt wird und nicht von $R$ und $C$ abhängt. Daher lässt sich die Grenzfrequenz bei diesem Filter besonders einfach verändern.

Zu einer anderen interessanten Spezialisierung gelangt man, wenn man die innere Verstärkung $A_0 = 1$ setzt. Dann arbeitet der Operationsverstärker als Spannungsfolger, also lediglich als Impedanzwandler. Die beiden Widerstände $R_4$ und $R_3$ können entfallen. Abbildung 12.41 zeigt diese Spezialisierung. Für $A_0 = 1$ lautet die Übertragungsfunktion:

$$
A(s_n) = \frac{1}{1 + \omega_g C_1(R_1 + R_2)s_n + \omega_g^2 R_1 R_2 C_1 C_2 s_n^2}
$$

Gibt man $C_1$ und $C_2$ vor, erhält man durch Koeffizientenvergleich mit (12.39):

$$
R_{1/2} = \frac{a_1 C_2 \mp \sqrt{a_1^2 C_2^2 - 4b_1 C_1 C_2}}{4\pi f_g C_1 C_2}
\qquad (12.40)
$$

Damit sich reelle Werte ergeben, muss die Bedingung

$$
C_2/C_1 \geq 4b_1/a_1^2
\qquad (12.41)
$$

erfüllt sein. Wie bei dem Filter mit Mehrfachgegenkopplung ergibt sich die günstigste Dimensionierung, wenn man das Verhältnis $C_2/C_1$ nicht viel größer wählt, als es die obige Bedingung vorschreibt. Um ein Besselfilter zu realisieren, wollen wir $C_1 = 1\,\mathrm{nF}$ vorgeben. Dann folgt die Bedingung $C_2 \geq 1{,}33\,\mathrm{nF}$; wir wählen den nächsten Normwert der E6-Reihe $C_2 = 1{,}5\,\mathrm{nF}$. Wenn wir wieder eine Grenzfrequenz von von $1\,\mathrm{kHz}$ vorgeben, ergibt sich die in Abb. 12.41 eingetragene Dimensionierung.

Den Spannungsfolger kann man gegebenenfalls auch mit einem Emitterfolger oder Sourcefolger realisieren, wie z.B. in Abb. 27.10 auf Seite 1635. Man kann hier auch die Buffer als Spannungsfolger einsetzen, die in Kapitel 5.3 auf Seite 550 beschrieben werden. Man sieht in Abb. 12.41, dass sich mit dem Sallen-Key-Filter eine besonders einfache Realisierung von Filtern 2. Ordnung ergibt, die außer dem Spannungsfolger lediglich 4 Bauelemente erfordert.

Die angegebenen Übertragungsfunktionen besitzen nur in dem Frequenzbereich Gültigkeit, in dem die Schleifenverstärkung groß gegenüber Eins ist. Bei Tiefpassfiltern sollte diese Forderung nicht nur bei der Grenzfrequenz erfüllt sein, sondern auch bei allen höheren Frequenzen, die im Eingangssignal auftreten können. Wenn keine ausreichende Schleifenverstärkung vorhanden ist, kann das zu einem steileren Abfall der Verstärkung führen, weil durch den Operationsverstärker ein zusätzlicher Tiefpass entsteht. Es kann aber auch zu einer verschlechterten Sperrdämpfung führen, wie wir es bereits beim Integrator in Abschnitt 10.4.5 auf Seite 749 gezeigt haben.
<!-- page-import:0857:end -->
