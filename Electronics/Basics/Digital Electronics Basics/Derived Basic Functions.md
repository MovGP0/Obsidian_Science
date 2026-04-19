# Derived Basic Functions

<!-- page-import:0663:start -->
626  6. Digitaltechnik Grundlagen

| Eingangs-variablen | $y=x_1+x_2$  $=x_1$ OR $x_2$ | $y=x_1\cdot x_2$  $=x_1$ UND $x_2$ | $y=\overline{x_1+x_2}$  $=x_1$ NOR $x_2$ | $y=\overline{x_1\cdot x_2}$  $=x_1$ NAND $x_2$ | $y=x_1\oplus x_2$  $=x_1$ EXOR $x_2$  $=x_1$ ANTIV $x_2$ | $y=\overline{x_1\oplus x_2}$  $=x_1$ EXNOR $x_2$  $=x_1$ ÄQUIV $x_2$ |
|---|---|---|---|---|---|---|
| $x_1\quad x_2$ |  |  |  |  |  |  |
| 0 0 | 0 | 0 | 1 | 1 | 0 | 1 |
| 0 1 | 1 | 0 | 0 | 1 | 1 | 0 |
| 1 0 | 1 | 0 | 0 | 1 | 1 | 0 |
| 1 1 | 1 | 1 | 0 | 0 | 0 | 1 |

Abb. 6.12. Aus der UND- bzw. ODER-Funktion abgeleitete Grundfunktionen

# 6.3 Abgeleitete Grundfunktionen

In den vorhergehenden Abschnitten haben wir gezeigt, dass jede beliebige logische Funktion durch geeignete Kombination der Grundfunktionen ODER, UND, NICHT darstellbar ist. Es gibt nun eine Reihe von abgeleiteten Funktionen, die in der Schaltungstechnik so häufig auftreten, dass man ihnen eigene Namen gegeben hat. Ihre Wahrheitstafeln und Schaltsymbole haben wir in Abb. 6.12 zusammengestellt.

Die NOR- und NAND-Funktionen gehen durch Negation aus der ODER- bzw. UND-Funktion hervor: NOR,= NOT OR; NAND$=$NOT AND. Demnach gilt:

$$
x_1\ \mathrm{NOR}\ x_2 \;=\; \overline{x_1+x_2} \;=\; \overline{x_1}\,\overline{x_2}
$$

$$
x_1\ \mathrm{NAND}\ x_2 \;=\; \overline{x_1x_2} \;=\; \overline{x_1}+\overline{x_2}
\qquad (6.12)
$$

Bei der Äquivalenz-Funktion wird $y=1$, wenn beide Eingangsvariablen gleich sind. Aus der Wahrheitstafel erhält man durch Aufstellen der disjunktiven Normalform:

$$
y \;=\; x_1\ \mathrm{ÄQUIV}\ x_2 \;=\; \overline{x_1}\,\overline{x_2}+x_1x_2
$$

Die Antivalenz-Funktion ist eine negierte Äquivalenz-Funktion, bei ihr wird $y$ dann gleich Eins, wenn die Eingangsvariablen verschieden sind. Die disjunktive Normalform ergibt:

$$
y \;=\; x_1\ \mathrm{ANTIV}\ x_2 \;=\; \overline{x_1}x_2+x_1\overline{x_2}
$$

Aus der Wahrheitstafel ergibt sich noch eine andere Deutung der Antivalenz-Funktion: Sie stimmt mit der ODER-Funktion in allen Werten überein, bis auf den Fall, in dem alle Eingangsvariablen Eins sind. Deshalb wird sie auch als Exklusiv-ODER-Funktion bezeichnet und mit einem umkreisten $+$ Zeichen symbolisiert. Dem entsprechend kann man die Äquivalenz-Funktion auch als Exklusiv-NOR-Funktion bezeichnen.

Bei der Anwendung integrierter Schaltungen ist es manchmal günstig, beliebige Funktionen ausschließlich mit NAND- bzw. NOR-Gattern zu realisieren. Dazu formt man die Funktionen so um, dass nur noch die gewünschten Verknüpfungen auftreten. Das ist auf einfache Weise möglich, indem man zunächst den Zusammenhang mit den Grundfunktionen aufstellt. Für die UND-Funktion gilt:

$$
x_1x_2 \;=\; \overline{\overline{x_1x_2}} \;=\; \overline{x_1\ \mathrm{NAND}\ x_2},
$$

$$
x_1x_2 \;=\; \overline{\overline{x_1}+\overline{x_2}} \;=\; \overline{x_1}\ \mathrm{NOR}\ \overline{x_2}
$$

Für die ODER-Verknüpfung erhalten wir entsprechend:
<!-- page-import:0663:end -->
