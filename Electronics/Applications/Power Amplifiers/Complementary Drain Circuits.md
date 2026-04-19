# Complementary Drain Circuits

<!-- page-import:0943:start -->
906  15. Leistungsverstärker

**Abb. 15.11.**  
Komplementäre Darlington-Schaltungen

**Abb. 15.12.**  
Quasikomplementäre Darlington-Schaltungen

setzt man die Darlington-Schaltung $T_2$, $T_2'$ in Abb. 15.11 durch eine Komplementär-Darlington-Schaltung, wie sie in Abb. 2.118b auf S. 167 gezeigt wurde. Die entstehende Schaltung in Abb. 15.12 wird als *quasi-komplementärer* Emitterfolger bezeichnet. Die Komplementär-Darlington-Schaltung $T_2$, $T_2'$ benötigt allerdings eine Vorspannung von lediglich $U_2 = 0{,}7\,\mathrm{V}$. Natürlich kann man auch hier die beiden Hilfsspannungsquellen zu einer einzigen zusammenfassen. Der entstehende Spannungsversatz zwischen Eingang und Ausgang wird automatisch kompensiert, wenn die Leistungsendstufe in einem gegengekoppelten Verstärker eingesetzt wird.

Die Komplementär-Darlingtonschaltung in Abb. 15.12 sollte man aber nur einsetzen, wenn es wirklich keine andere Lösung gibt. Bei den Transistoren $T_2$ und $T_2'$ handelt es sich nämlich um einen zweistufigen Verstärker, bei dem jeder Transistor in Emitterschaltung betrieben wird und deshalb eine hohe Spannungsverstärkung besitzt. Durch den Verbund der beiden Transistoren wird die Spannungsverstärkung durch Gegenkopplung auf 1 reduziert. Wegen der hohen Schleifenverstärkung neigt dieser Verbund aber zum Schwingen in Abhängigkeit von der Last am Ausgang.

## 15.4 Komplementäre Drainschaltungen

Leistungsmosfets bieten gegenüber bipolaren Leistungstransistoren den großen Vorteil, dass sie sich sehr viel schneller ein- und ausschalten lassen. Während die Schaltzeiten von bipolaren Leistungstransistoren im Bereich zwischen 100 ns bis 1 $\mu$s liegen, betragen sie bei Leistungsmosfets nur 10 ns bis 100 ns. Deshalb sind Leistungsmosfets in Endstufen für Frequenzen über 100 kHz vorteilhaft.

Die Grundschaltung eines komplementären Sourcefolgers ist in Abb. 15.13 dargestellt. Die beiden Hilfsspannungsquellen $U_1$ dienen wie beim Bipolartransistor in Abb. 15.7 dazu, den gewünschten Ruhestrom einzustellen. Zur Realisierung dieser Hilfsspannungen setzt man auch hier komplementäre Transistoren ein, die in Abb. 15.14 eingezeichnet sind.

Wenn man davon ausgeht, dass die Gate-Source-Spannungen im Arbeitspunkt gleich sind, gibt es auch keinen Spannungsversatz zwischen Eingang und Ausgang. Falls doch eine kleine Spannungsdifferenz bestehen bleibt, weil die n- und p-Kanal Transistoren unterschiedliche Schwellenspannungen besitzen, ist das bei den hier gezeigten Leistungsendstufen nicht von Bedeutung, weil sie immer mit einem Vorverstärker betrieben werden,
<!-- page-import:0943:end -->

<!-- page-import:0959:start -->
922 15. Leistungsverstärker

Abb. 15.34. Realisierung eines getakteten Leistungsverstärkers mit einem Pulsbreitenmodulator, PWM

Abb. 15.35. Pulsbreitenmodulation mit 40-facher Signalfrequenz

unter der Maximalamplitude. Da der Wirkungsgrad proportional zur Amplitude ansteigt, beträgt er dann im Mittel lediglich 7,8%. Dieser Punkt ist in Abb. 15.4 eingezeichnet.

Aus diesem Grund setzt man auch bei den Leistungsverstärkern getaktete Schaltungen ein, die wie in der Stromversorgung in Prinzip verlustfrei arbeiten. Möglich geworden ist diese Technik dadurch, dass mit den Leistungsmosfets schnell schaltende Leistungstransistoren zur Verfügung stehen. Damit lassen sich Schaltfrequenzen erreichen, die mindestens um einen Faktor 10 über der maximalen Signalfrequenz liegen. Bei Audio-Verstärkern mit einer Bandbreite von 20 kHz arbeitet man mit Taktfrequenzen von 100 kHz ... 1 MHz.

Das Blockschaltbild eines getakteten Leistungsverstärkers ist in Abb. 15.33 dargestellt. Aus dem analogen Eingangssignal wird mit einem Pulsbreitenmodulator oder mit einem Delta-Sigma-Modulator ein digitales Signal $x$ erzeugt, das einen Leistungsschalter so steuert, dass nach Tiefpassfilterung wieder das Eingangssignal originalgetreu entsteht. Bei der Anordnung handelt es sich also um einen Analog-Digital-Analog-Umsetzer.

Dazu kann man den in Abb. 15.34 dargestellten Pulsbreitenmodulator einsetzen. Der Komparator liefert das Signal $x = 1$ solange die Eingangsspannung größer ist als die Sägezahnspannung $U_{SZ}$. Je größer die Eingangsspannung ist, desto länger wird $x = 1$ und entsprechend $U_x = V_b$. Man erkennt in Abb. 15.35 wie dadurch das Eingangssignal approximiert wird und dass man es daraus mit einem Tiefpass wieder zurückgewinnen kann. Allerdings ist die Abtastung mit einem Pulsbreitenmodulator aus Sicht der Systemtheorie keine gute Methode, weil dabei das Eingangssignal in nicht äquidistanten Zeitabständen abgetastet wird und die Abtastzeitpunkte signalabhängig sind. Dadurch entstehen subharmonische Spektrallinien, die im Nutzfrequenzbereich liegen und die sich daher mit dem Tiefpassfilter am Ausgang nicht entfernen lassen.

Dieses Problem lässt sich dadurch beheben, dass man statt eines Pulsbreitenmodulators einen Delta-Sigma-Modulator einsetzt, der in Abb. 15.36 dargestellt ist. Der Integrator steuert über den Komparator den Schalter so, dass seine Ausgangsspannung $U_I$ im Mittel Null wird. Das ist genau dann der Fall, wenn $\overline{U_x} = -U_e$ ist. Wenn der Ausgang des Integrators positiv ist, wird das Flip-Flop gesetzt und der Schalter wird für eine Taktperi-
<!-- page-import:0959:end -->
