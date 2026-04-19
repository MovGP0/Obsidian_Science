# Second-Order Band-Pass Filters

<!-- page-import:0833:start -->
796 12. Aktive Filter

$|A|$  
dB

10

0

-10

-20

-30

-40

-50

-60

0,02 0,05 0,1 0,2 0,5 1 2 5 10 20 $\omega_n$

Tscheby 3 dB

Butterworth

Kritisch

Bessel

Frequenzgang der Verstärkung

$T_{gr}$

15

10

5

0

0,02 0,05 0,1 0,2 0,5 1 2 5 10 20 $\omega_n$

Kritisch

Bessel

Tscheby 3 dB

Butterworth

Frequenzgang der Gruppenlaufzeit

$\dfrac{u_a(t)}{U_e}$

1

0,5

0

0 1 2 3 4 5 $t/T_g$

Tscheby 3 dB

Butterworth

Bessel

Kritisch

Sprungantwort

**Abb. 12.8.** Vergleich von Tiefpassfiltern in 4. Ordnung
<!-- page-import:0833:end -->

<!-- page-import:0835:start -->
798  12. Active Filter

**Abb. 12.10.**  
Pole von Tiefpassfiltern in 4. Ordnung

**Abb. 12.11.**  
Pole von Tiefpassfiltern in 10. Ordnung

der vier Filter in 4. und Abb. 12.9 in 10. Ordnung. Tschebyscheff-Filtern besitzen einen Parameter, der die Welligkeit im Durchlassbereich bestimmt. Hier haben wir eine große Welligkeit von 3 dB als Beispiel zugrunde gelegt, um die Eigenschaften möglichst deutlich zu zeigen.

*Passive*-Tiefpassfilter, die aus Teilfiltern mit gleichen Grenzfrequenzen bestehen, besitzen eine Sprungantwort ohne Überschwingen; sie realisieren die *kritische Dämpfung*. Allerdings ist der Übergang vom Durchlass- in den Sperrbereich besonders langsam. Dafür ist die Realisierung besonders einfach.

*Butterworth*-Tiefpassfilter besitzen einen Amplituden-Frequenzgang, der möglichst lang horizontal verläuft und erst kurz vor der Grenzfrequenz scharf abknickt. Ihre Sprungantwort zeigt ein mäßiges Überschwingen, das mit zunehmender Ordnung größer wird.

*Tschebyscheff*-Tiefpassfilter besitzen von den hier betrachteten Tiefpassfiltern den steilsten Abfall der Verstärkung oberhalb der Grenzfrequenz. Im Durchlassbereich verläuft die Verstärkung jedoch nicht monoton, sondern besitzt eine Welligkeit konstanter Amplitude. Die Gruppenlaufzeit weist allerdings starke Schwankungen auf. Laufzeitschwankungen sind aber gleichbedeutend mit Phasenverzerrungen. In der Nachrichtentechnik werden häufig Daten nicht nur im Betrag, sondern auch in der Phase codiert (Abb. 21.75 auf Seite 1213). Daher kann man in solchen Fällen Phasenverzerrungen nicht tolerieren. Ein weiteres Vergleichskriterium in Abb. 12.8 und Abb. 12.9 ist die Sprungantwort. Bei den schwach gedämpften Polen der Tschebyscheff-Filter ergibt sich ein beträchtliches Überschwingen und eine nur langsam abklingende Schwingung.

*Bessel*-Tiefpassfilter besitzen eine Sprungantwort praktisch ohne Überschwingen. Das wird bei den Besselfiltern dadurch erreicht, dass die Gruppenlaufzeit über einen möglichst großen Frequenzbereich konstant gehalten wird. Dadurch wird das Eingangssignal mit allen Spektralanteilen um diese Zeit verzögert. Allerdings knickt der Amplituden-Frequenzgang der Bessel-Filter nicht so scharf ab wie bei den Butterworth- und Tschebyscheff-Filtern, aber doch deutlich schärfer als bei den passiven Filtern.
<!-- page-import:0835:end -->

<!-- page-import:0869:start -->
832  12. Aktive Filter

Tiefpass $\omega_g=\dfrac{\alpha}{RC}$

Hochpass $\omega_g=\dfrac{1}{\alpha RC}$

$$
A=\frac{1}{1+RC(s/\alpha)}\cdot\frac{RC(s\alpha)}{1+RC(s\alpha)}
=\frac{\alpha s_n}{1+(\alpha+1/\alpha)s_n+s_n^2}
$$

**Abb. 12.53.** Bandpassfilter aus Tief- und Hochpass 1. Ordnung

## 12.8 Realisierung von Bandpassfiltern 2. Ordnung

### 12.8.1 RC-Filter

Schaltet man wie in Abb. 12.53 einen Tiefpass und einen Hochpass 1. Ordnung in Reihe, erhält man einen Bandpass 2. Ordnung. Mit der Resonanzfrequenz $\omega_r = 1/RC$ und $s_n = s/\omega_r$ ergibt sich die normierte Form. Durch Koeffizientenvergleich mit (12.50) erhalten wir:

$$
Q=\frac{\alpha}{1+\alpha^2}
\qquad \text{und} \qquad
A_r=\alpha Q
$$

Bei $\alpha = 1$ besitzt die Güte den Maximalwert $Q_{\max}=\frac{1}{2}$. Das ist also die größte Güte, die sich durch Reihenschaltung von Filtern 1. Ordnung erzielen lässt. Höhere Güten lassen sich nur mit $LRC$-Schaltungen oder mit aktiven $RC$-Schaltungen realisieren.

### 12.8.2 LRC-Filter

Die herkömmliche Methode, selektive Filter mit höherer Güte zu realisieren, ist die Verwendung von Schwingkreisen. Abbildung 12.54 zeigt eine solche Schaltung. Ihre Übertragungsfunktion lautet:

$$
A(s)=\frac{s\;RC}{1+s\;RC+s^2LC}
$$

Mit der Resonanzfrequenz $\omega_r = 1/\sqrt{LC}$ und $s_n = s/\omega_r$ folgt daraus die normierte Darstellung in Abb. 12.54. Der Koeffizientenvergleich mit (12.50) liefert:

$$
Q=\frac{1}{R}\sqrt{\frac{L}{C}}
\qquad \text{und} \qquad
A_r=1
$$

Im Hochfrequenzbereich lassen sich die benötigten Induktivitäten leicht mit geringen Verlusten realisieren. Im Niederfrequenzbereich werden die Induktivitäten jedoch unhandlich groß und besitzen schlechte elektrische Eigenschaften. Will man z.B. mit der Schaltung in Abb. 12.54 ein Filter mit der Resonanzfrequenz $f_r = 1\ \text{kHz}$ realisieren, wird bei einer Kapazität von $0{,}1\ \mu\text{F}$ eine Induktivität $L = 253\ \text{mH}$ erforderlich. Eine derart große

**Abb. 12.54.**  
$LRC$-Bandpass. $f_r = 1\ \text{kHz},\ Q = 10$

$$
A(s_n)=\frac{R\sqrt{C/L}\,s_n}{1+R\sqrt{C/L}\,s_n+s_n^2}
$$
<!-- page-import:0869:end -->

<!-- page-import:0870:start -->
12.8 Realisierung von Bandpassfiltern 2. Ordnung 833

$$
A(s_n)=\frac{-\frac{R_2R_3}{R_1+R_3}C\omega_rs_n}{1+\frac{2R_1R_3}{R_1+R_3}C\omega_rs_n+\frac{R_1R_2R_3}{R_1+R_3}C^2\omega_r^2s_n^2}
$$

**Abb. 12.55.** Bandpassfilter mit Mehrfachgegenkopplung. Dimensionierungsbeispiel für einen Bandpass mit den Daten $Q = 10$, $A_r = -10$ und $f_r = 1\,\text{kHz}$

Induktivitäten besitzt einen nennenswerten Serienwiderstand, den man beim Entwurf des Filters berücksichtigen müsste.

### 12.8.3 Bandpass mit Mehrfachgegenkopplung

Auch bei Bandpässen kann man das Prinzip der Mehrfachgegenkopplung einsetzen, indem man die Widerstände und Kondensatoren gemäß Abb. 12.55 neu anordnet. Wie man durch Vergleich mit (12.50) erkennt, muss der Faktor vor $s_n^2$ gleich Eins sein. Daraus folgt die Resonanzfrequenz:

$$
f_r=\frac{1}{2\pi C}\sqrt{\frac{R_1+R_3}{R_1R_2R_3}}
\qquad\qquad (12.61)
$$

Setzt man diese Beziehung in die Übertragungsfunktion ein und vergleicht die übrigen Koeffizienten mit (12.50), erhält man die weiteren Ergebnisse:

$$
A_r=-\frac{R_2}{2R_1}
\qquad\qquad (12.62)
$$

$$
Q=\frac{1}{2}\sqrt{\frac{R_2(R_1+R_3)}{R_1R_3}}=\pi R_2Cf_r
\qquad\qquad (12.63)
$$

Man sieht, dass sich Verstärkung, Güte und Resonanzfrequenz frei wählen lassen. Für die Bandbreite des Filters erhalten wir aus (12.63):

$$
B=\frac{f_r}{Q}=\frac{1}{\pi R_2C}
$$

Sie ist also von $R_1$ und $R_3$ unabhängig. Andererseits erkennt man in (12.62), dass $A_r$ nicht von $R_3$ abhängt. Daher hat man die Möglichkeit, mit $R_3$ die Resonanzfrequenz zu variieren, ohne dabei die Bandbreite und die Verstärkung $A_r$ zu beeinflussen. Lässt man den Widerstand $R_3$ weg, bleibt das Filter funktionsfähig, aber die Güte wird von $A_r$ abhängig. Aus (12.63) folgt nämlich für $R_3 \to \infty$:

$$
A_r=-2Q^2
$$

Mit dem Widerstand $R_3$ lassen sich auch bei niedriger Verstärkung $A_r$ hohe Güten erzielen. Wie man in Abb. 12.55 erkennt, kommt die niedrigere Verstärkung jedoch lediglich
<!-- page-import:0870:end -->
