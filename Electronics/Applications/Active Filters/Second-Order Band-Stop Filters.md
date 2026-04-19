# Second-Order Band-Stop Filters

<!-- page-import:0874:start -->
12.10 Realisierung von Bandsperren 2. Ordnung 837

Der Verlauf ist in Abb. 12.57 für die Güten 1 und 10 aufgezeichnet. Das Argument der Phasenverschiebung ist der Kehrwert von dem der Bandpassfilter in (12.52). Daher ergibt sich hier dieselbe Formel und dieselbe Grafik für die Gruppenlaufzeit.

## 12.10 Realisierung von Bandsperren 2. Ordnung

Wie schon gezeigt, kann man mit passiven $RC$-Schaltungen maximal eine Güte $Q=\frac{1}{2}$ erreichen. Für höhere Güten benötigt man $LCR$-Schaltungen oder aktive $RC$-Schaltungen, die eine Mitkopplung zur Erhöhung der Güte enthalten. Ein Sperrfilter lässt sich aber auch auf bereits beschriebene Filter zurückführen:

- Da die Nenner der Übertragungsfunktionen von Tiefpass, Hochpass und Bandsperre ähnlich sind, lässt sich eine Bandsperre durch Addition der Ausgangssignale eines Tief- und eines Hochpasses realisieren. Diese Methode wird in Abschnitt 12.10.2 beschrieben.
- Eine Bandsperre lässt sich auch aus einem Bandpass erzeugen, wenn man das Bandpasssignal vom Eingangssignal subtrahiert. Dieses Verfahren wird in Abschnitt 12.10.3 beschrieben.
- Man kann einen Bandpass auch in die Gegenkopplung eines Operationsverstärkers schalten, um die inverse Funktion zu erhalten. Dieses Prinzip wird in Abschnitt 12.10.4 behandelt.

### 12.10.1 LRC-Sperrfilter

Eine Methode zur Realisierung von Sperrfiltern beruht auf der Verwendung von Schwingkreisen wie in Abb. 12.58. Bei der Resonanzfrequenz stellt der Serienschwingkreis einen Kurzschluss dar, und die Ausgangsspannung wird Null. Die Übertragungsfunktion der Schaltung lautet:

$$
A(s)=\frac{1+s^2LC}{1+s\,RC+s^2LC}
$$

Daraus ergibt sich die Resonanzfrequenz $\omega_r=1/\sqrt{LC}$ und wir erhalten die normierte Form, wie sie in Abb. 12.58 angegeben ist. Die Unterdrückungsgüte ergibt sich durch Koeffizientenvergleich mit (12.65) zu:

$$
Q=\frac{1}{R}\sqrt{\frac{L}{C}}
$$

Hier ergeben sich demnach dieselben Formeln wie beim LRC-Bandpass in Abschnitt 12.8.2. Bei einer realen Induktivität, die einen Serienwiderstand besitzt, sinkt die Ausgangsspannung bei der Resonanzfrequenz nicht auf Null; die Sperrdämpfung wird also beeinträchtigt.

**Abb. 12.58.**  
LRC-Sperrfilter

$$
A(s_n)=\frac{1+s_n^2}{1+R\sqrt{C/L}\,s_n+s_n^2}
$$
<!-- page-import:0874:end -->

<!-- page-import:0875:start -->
838 12. Aktive Filter

**Abb. 12.59.**  
Realisierung einer Bandsperre mit einem Tief- und Hochpassfilter

## 12.10.2 Bandsperre aus Hoch- und Tiefpass

Da die Nenner der Übertragungsfunktionen von Tiefpass, Hochpass und Bandsperre ähnlich sind, lässt sich eine Bandsperre durch Addition eines Tief- und eines Hochpasses realisieren gemäß der Gleichung:

$$
\frac{A}{A_0}
=
\frac{A_0(1+s_n^2)}{1+\frac{1}{Q}s_n+s_n^2}
=
\frac{A_0}{1+a s_n+b s_n^2}
+
\frac{A_\infty s_n^2}{b+a s_n+s_n^2}
\qquad (12.66)
$$

für $b = 1$, $a = 1/Q$ und $A_\infty = A_0$. Diese Methode ist in Abb. 12.59 schematisch dargestellt. Sie ist aber nur dann zweckmäßig, wenn man eine Schaltung einsetzt, die beide Signale mit einem einzigen Filter bereitstellt wie bei dem Integratorfilter in Abb. 12.70. Beim Einsatz von separaten Filtern müsste man 2 Filter 2. Ordnung realisieren; das würde den Aufwand verdoppeln und die beiden Filter würden nie exakt gleiche Daten besitzen.

## 12.10.3 Bandsperre mit Bandpass

Eine Bandsperre lässt sich aus einem Bandpass erzeugen, indem man das Bandpasssignal vom Eingangssignal subtrahiert.

$$
\frac{U_{BS}}{U_e}
=
\frac{1+s_n^2}{1+\frac{1}{Q}s_n+s_n^2}\,U_e
=
U_e
-
\frac{s_n/Q}{1+\frac{1}{Q}s_n+s_n^2}\,U_e
\qquad (12.67)
$$

**Abb. 12.60.**  
Realisierung einer Bandsperre durch Subtraktion eines Bandpasssignals

$$
\frac{U_{BP}}{U_e}
=
-\frac{s_n A_r/Q}{1+\frac{1}{Q}s_n+s_n^2}
\qquad
\frac{U_{BS}}{U_e}
=
-\frac{A_0(1+s_n^2)}{1+\frac{1}{Q}s_n+s_n^2}
\qquad
\text{für}
\qquad
\frac{R_4}{R_5}
=
A_r
=
A_0
$$

**Abb. 12.61.** Bandsperre mit einem Bandpass mit Mehrfachgegenkopplung. Dimensionierungsbeispiel für eine Bandsperre mit den Daten $Q = 10$, $A_0 = 10$ und $f_r = 1\,\text{kHz}$
<!-- page-import:0875:end -->
