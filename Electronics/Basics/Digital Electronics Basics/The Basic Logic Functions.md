# The Basic Logic Functions

<!-- page-import:0656:start -->
# Kapitel 6:
Digitaltechnik Grundlagen

Bei den bisher behandelten analogen Schaltungen wird das Signal durch die Größe der Spannung repräsentiert; bei den digitalen Schaltungen, die hier behandelt werden, unterscheidet man lediglich zwei Zustände einer Spannung: Sie kann einen high-Pegel besitzen, den man bei positiver Logik mit der logischen Zustand 1 oder einen low-Pegel, den man mit dem Zustand 0 verbindet. Eine Folge davon ist, das man die Transistoren in digitalen Schaltungen nur in zwei extremen Arbeitspunkten betreibt: leitend oder gesperrt.

Das Bindeglied zwischen der analogen und der digitalen Welt stellt der Komparator dar. Wie man in Abb. 6.1 erkennt, vergleicht ein Komparator zwei Eingangsspannungen in ihrer Größe und liefert ein binäres Ausgangssignal, das sich entweder im Zustand

High $\widehat{=}\,1$ , Low $\widehat{=}\,0$

befindet. Dies Zuordnung bezeichnet man als positive Logik. Wie groß die zugehörigen Eingangs- und Ausgangsspannungen sind, hängt von der verwendeten Logikfamilie ab. Abb. 6.1 zeigt ein Beispiel, das für TTL- oder CMOS-Pegel typisch ist. Komparatoren werden in Abschnitt 14.1.1 auf S. 883 behandelt.

Digitale Geräte erscheinen auf den ersten Blick kompliziert. Ihr Aufbau beruht jedoch auf dem einfachen Konzept der wiederholten Anwendung weniger logischer Grundschaltungen. Die Verknüpfung dieser Grundschaltungen erhält man aus der Problemstellung durch Anwendung rein formaler Methoden. Die Hilfsmittel dazu liefert die Boolesche Algebra (George Boole, 1854), die im speziellen Fall der Anwendung auf die Digitalschaltungstechnik als Schaltalgebra (Claude E. Shannon, 1938) bezeichnet wird. In den folgenden Abschnitten wollen wir daher zunächst die Grundlagen der Schaltalgebra zusammenstellen.

## 6.1 Die logischen Grundfunktionen

Im Unterschied zu einer Variablen in der normalen Algebra kann eine logische Variable nur zwei diskrete Werte annehmen, die im allgemeinen als logische Null und logische Eins bezeichnet werden. Als Symbol verwendet man dafür 0 und 1.

Es gibt drei grundlegende Verknüpfungen zwischen logischen Variablen: die Konjunktion (UND-Verknüpfung), die Disjunktion (ODER-Verknüpfung) und die Negation (NICHT-Operation). In Anlehnung an die Zahlenalgebra werden folgende Rechenzeichen verwendet:

a Komparator  
b Ausgangsspannung  
c Ausgangsvariable

**Abb. 6.1.** Komparator als Umsetzer von analogen zu digitalen Signalen.  
Beispiel: $U_L = 0{,}4\,\mathrm{V}, U_H = 2{,}4\,\mathrm{V}$

© Springer-Verlag GmbH Deutschland, ein Teil von Springer Nature 2019  
U. Tietze et al., *Halbleiter-Schaltungstechnik*
<!-- page-import:0656:end -->

<!-- page-import:0689:start -->
652  6. Digitaltechnik Grundlagen

so klein wie möglich zu halten. Das wird natürlich durch einen induktivitätsarmen Anschluss des Chips an die Massefläche der Leiterplatte erreicht. Um die Induktivität in der Masseleitung weiter zu senken, verwenden die Halbleiterhersteller heute meist nicht nur einen einzigen Masse-Pin, sondern mehrere, deren Induktivität sich durch Parallelschaltung reduziert. Im Extremfall verwendet man bei hochintegrierten Schaltungen genauso viele Masseanschlüsse wie Signalleitungen.
<!-- page-import:0689:end -->
