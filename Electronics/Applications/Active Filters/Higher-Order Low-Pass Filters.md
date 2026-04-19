# Higher-Order Low-Pass Filters

<!-- page-import:0859:start -->
822 12. Aktive Filter

## 12.6 Realisierung von Tiefpassfiltern höherer Ordnung

Wenn die Filtercharakteristik nicht steil genug ist, gibt es zwei Möglichkeiten zur Verbesserung:

– Man kann einen Filtertyp mit steilerem Abfall der Verstärkung wählen, also z.B. Tschebyscheff statt Bessel. Dabei muss man jedoch eine verschlechterte Sprungantwort in Kauf nehmen.  
– Man verwendet ein Filter mit höherer Ordnung, also z.B. ein Filter 4. Ordnung statt 2. Ordnung. Dadurch erhöht sich allerdings der schaltungstechnische Aufwand.

Um ein Filter höherer Ordnung zu realisieren, schaltet man vorzugsweise Teilfilter 2. Ordnung in Reihe. Es wäre jedoch falsch, 2 Filter mit der Dimensionierung für die 2. Ordnung in Reihe zu schalten, um ein Filter 4. Ordnung zu erhalten. Das entstehende Filter hätte bei der Grenzfrequenz eine Dämpfung von $-6\,\mathrm{dB}$ und außerdem nicht die gewünschte Filtercharakteristik. Man muss deshalb die einzelnen Teilfilter mit den Koeffizienten aus den Filtertabellen in Abb. 12.18 bis 12.30 für die entsprechende Ordnung dimensionieren. Dazu muss man lediglich die Koeffizienten $a_1$ und $b_1$ durch $a_i$ und $b_i$ ersetzen. Zur Dimensionierung der Schaltung setzt man in die angegebenen Formeln die gewünschte Grenzfrequenz des resultierenden Gesamtfilters ein. Die einzelnen Teilfilter besitzen höhere, aber auch niedrigere Grenzfrequenzen als das ganze Filter, wie Abb. 12.44 zeigt. Dort erkennt man auch, wie sich der Frequenzgang des Gesamtfilters aus den Teilfiltern ergibt. Die Grenzfrequenzen der Teilfilter sind in den Filtertabellen nur angegeben, um die Teilfilter einzeln testen zu können, aber nicht zur Dimensionierung.

Im Prinzip ist es gleichgültig, in welcher Reihenfolge man die einzelnen Filterstufen anordnet, da sich die Frequenzgänge der Teilfilter multiplizieren und die Faktoren eines Produkts vertauschbar sind. In der Praxis gibt es jedoch zusätzliche Gesichtspunkte für die Reihenfolge der Teilfilter.

– Man kann die Teilfilter nach aufsteigender Grenzfrequenz ordnen und das Filter mit der niedrigsten Grenzfrequenz an den Eingang zu schalten; so ist auch die Reihenfolge in den Filtertabellen in Abb. 12.18 bis 12.30. Dann treten in keiner Filterstufe Signale auf, die größer sind als am Eingang des Filters, wenn man einmal von der Welligkeit bei den Tschebyscheff-Filtern absieht. Das ist die normale Anordnung, bei der interne Übersteuerungen des Filters vermieden werden.  
– Ein anderer Gesichtspunkt für die Anordnung der Filterstufen kann das Rauschen sein. Diesbezüglich ist gerade die umgekehrte Reihenfolge günstig, weil dann die Teilfilter mit der niedrigen Grenzfrequenz am Ende der Filterkette das Rauschen der Eingangsstufen wieder abschwächen. Dabei kann aber die erste Stufe bereits übersteuert werden, während die Signale am Ausgang noch klein sind. Das wird besonders deutlich bei dem Tschebyscheff-Filter in Abb. 12.44. Hier besitzt ein Teilfilter in der Nähe der Grenzfrequenz eine Verstärkung von $30\,\mathrm{dB}\ \approx\ 30$. Befindet sich dieses Teilfilter am Eingang, dürfen die Eingangssignale bei dieser Frequenz nur $1/30$ der Aussteuerbarkeit betragen, um eine Übersteuerung zu vermeiden.

Die Dimensionierung soll an einem Bessel-Tiefpass 3. Ordnung gezeigt werden. Er soll mit dem Tiefpass 1. Ordnung von Abb. 12.34 auf S. 816 und dem Tiefpass 2. Ordnung von Abb. 12.41 realisiert werden Die Gleichspannungsverstärkung des Gesamtfilters soll den Wert Eins besitzen. Die entstehende Schaltung ist in Abb. 12.45 dargestellt. Zur Dimensionierung des Filters entnehmen wir aus der Filtertabelle in Abb. 12.20 die Koeffizienten
<!-- page-import:0859:end -->

<!-- page-import:0860:start -->
12.6 Realisierung von Tiefpassfiltern höherer Ordnung 823

Bessel

Butterworth

3 dB Tschebyscheff

Abb. 12.44. Verstärkung von Filtern 10. Ordnung mit den 5 zugehörigen Teilfiltern
<!-- page-import:0860:end -->

<!-- page-import:0861:start -->
824 12. Aktive Filter

$$A(s_n)=\frac{1}{1+\omega_g R_{11}C_{11}s_n}\cdot\frac{1}{1+\omega_g C_{21}(R_{21}+R_{22})s_n+\omega_g^2 R_{21}R_{22}C_{21}C_{22}s_n^2}$$

**Abb. 12.45.** Tiefpassfilter 3. Ordnung aus 2 Teilfiltern.  
Beispiel für einen Bessel-Tiefpass mit $f_g=1\,\mathrm{kHz}$

$a_1=0{,}7560$, $a_2=0{,}9996$, $b_2=0{,}4772$. Die gewünschte Grenzfrequenz sei $f_g=1\,\mathrm{kHz}$. Wenn man für die erste Filterstufe $C_{11}=1\,\mathrm{nF}$ vorgibt, ergibt sich nach (12.37)

$$R_{11}=\frac{a_1}{2\pi f_g C_{11}}=\frac{0{,}7560}{2\pi\cdot 1\,\mathrm{kHz}\cdot 1\,\mathrm{nF}}=120\,\mathrm{k}\Omega$$

Bei der zweiten Filterstufe geben wir $C_{21}=1\,\mathrm{nF}$ vor und erhalten nach (12.41) für $C_{22}$ die Bedingung:

$$C_{22}\ge \frac{4b_2}{a_2^2}\cdot C_{21}=\frac{4\cdot 0{,}4772}{(0{,}9996)^2}\cdot 1\,\mathrm{nF}=1{,}9\,\mathrm{nF}$$

Wir wählen den nächsten Normwert der E6-Reihe $C_{22}=2{,}2\,\mathrm{nF}$ und erhalten aus (12.40):

$$R_{21/22}=\frac{a_2C_{22}\mp\sqrt{a_2^2C_{22}^2-4b_2C_{21}C_{22}}}{4\pi f_g C_{21}C_{22}}$$

$$R_{21}=50{,}7\,\mathrm{k}\Omega,\qquad R_{22}=108\,\mathrm{k}\Omega$$

Bei Filtern 3. Ordnung ist es möglich, den ersten Operationsverstärker einzusparen. Durch die gegenseitige Belastung der Filter wird die Übertragungsfunktion aber deutlich komplizierter, wie man in Abb. 12.46 erkennt. Zur Dimensionierung der Schaltung muss man auch hier wieder einen Koeffizientenvergleich mit der Übertragungsfunktion des gewünschten Filtertyps durchführen. Dazu ist es erforderlich, die beiden Teilfilter auszumultiplizieren, um ein einziges Filter 3. Ordnung zu erhalten:

$$A=\frac{1}{1+a_1s_n}\cdot\frac{1}{1+a_2s_n+b_2s_n^2}=\frac{1}{1+(a_1+a_2)s_n+(a_1a_2+b_2)s_n^2+a_1b_2s_n^3}$$

Die Dimensionierung soll auch hier wieder an einem Bessel-Tiefpass gezeigt werden. Aus der Filtertabelle in Abb. 12.20 kann man die Werte $a_1=0{,}7560$, $a_2=0{,}9996$, $b_2=0{,}4772$ entnehmen:

$$A=\frac{1}{1+1{,}7556\cdot s_n+1{,}2329\cdot s_n^2+0{,}3608\cdot s_n^3}$$

Der Koeffizientenvergleich mit der Übertragungsfunktion in Abb. 12.46 liefert das Gleichungssystem:
<!-- page-import:0861:end -->

<!-- page-import:0862:start -->
12.6 Realisierung von Tiefpassfiltern höherer Ordnung 825

$$
A_n(s_n)=\frac{1}{1+\omega_g\,[C_1R_1+C_3(R_1+R_2+R_3)]\,s_n+\omega_g^2\,[C_1C_3R_1(R_2+R_3)+C_2C_3R_3(R_1+R_2)]\,s_n^2+\omega_g^3\,[C_1C_2C_3R_1R_2R_3]\,s_n^3}
$$

**Abb. 12.46.** Filter 3. Ordnung mit einem einzigen Verstärker.  
Beispiel für einen Bessel-Tiefpass mit $f_g = 1\,\mathrm{kHz}$

$$
a_1+a_2=\omega_g\,[C_1R_1+C_3(R_1+R_2+R_3)]=1{,}7556
$$

$$
a_1a_2+b_2=\omega_g^2\,[C_1C_3R_1(R_2+R_3)+C_2C_3R_3(R_1+R_2)]=1{,}2329
$$

$$
a_1b_2=\omega_g^3\,[C_1C_2C_3R_1R_2R_3]=0{,}3608
$$

Wenn man wieder eine Grenzfrequenz von $f_g = 1\,\mathrm{kHz}$ und die Kondensatoren $C_1 = 10\,\mathrm{nF},\ C_2 = 4{,}7\,\mathrm{nF},\ C_3 = 1\,\mathrm{nF}$ vorgibt, erhält man die die in Abb. 12.46 eingetragenen Widerstandswerte. Da es sich um ein nichtlineares Gleichungssystem handelt, verwendet man am besten ein Mathematikprogramm zur numerischen Lösung. Auch hier gibt es - wie bei den Filtern 2. Ordnung - nur dann reelle Lösungen, wenn die Kapazitäten von vorne nach hinten abnehmen.

Als letztes Beispiel soll noch die Dimensionierung eines Tiefpassfilters 4. Ordnung gezeigt werden. Dazu wollen wir das Sallen-Key-Filter 2. Ordnung von Abb. 12.41 zweimal einsetzen. Die resultierende Schaltung ist in Abb. 12.47 dargestellt. Zur Dimensionierung entnehmen wir aus Abb. 12.20 die Filterkoeffizienten $a_1 = 1{,}3397,\ b_1 = 0{,}4889,\ a_2 = 0{,}7743,\ b_2 = 0{,}3890$. Wenn man $C_{11} = C_{21} = 1\,\mathrm{nF}$ vorgibt, erhält man mit (12.41) die Minimalwerte für $C_{12} = 1{,}1\,\mathrm{nF}$ und $C_{22} = 2{,}6\,\mathrm{nF}$. Wir wählen die nächsten Werte aus der Normwertreihe E6 zu $C_{12} = 1{,}5\,\mathrm{nF}$ und $C_{22} = 3{,}3\,\mathrm{nF}$. Der Tiefpass soll auch hier wieder eine Grenzfrequenz von $f_g = 1\,\mathrm{kHz}$ besitzen und die Verstärkung $A_0 = 1$. Dann ergeben sich aus (12.40) die Widerstandswerte, die wir in Abb. 12.47 eingetragen haben.

Bei den Beispielen in den Abbildungen 12.41, 12.45 und 12.47 handelt es sich jeweils um Besselfilter nach Sallen-Key mit einer Grenzfrequenz von $1\,\mathrm{kHz}$. Die Dimensionierung ist trotzdem unterschiedlich, weil die Filterkoeffizienten in 2., 3. und 4. Ordnung jeweils verschieden sind.

**Abb. 12.47.** Tiefpassfilter 4. Ordnung. Dimensionierungsbeispiel für einen Bessel-Filter mit einer Grenzfrequenz von $f_g = 1\,\mathrm{kHz}$.
<!-- page-import:0862:end -->
