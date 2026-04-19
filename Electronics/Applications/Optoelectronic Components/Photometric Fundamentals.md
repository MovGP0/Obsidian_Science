# Photometric Fundamentals

<!-- page-import:1158:start -->
# Kapitel 20:
# Optoelektronische Bauelemente

## 20.1 Fotometrische Grundbegriffe

Das menschliche Auge nimmt elektromagnetische Wellen im Bereich von 400 nm bis 700 nm als Licht wahr. Die Wellenlänge vermittelt den Farbeindruck, die Intensität den Helligkeitseindruck. Man sieht in Abb. 20.1, dass das Auge Licht im Wellenlängenbereich von $400 \dots 700\,\mathrm{nm}$ wahrnimmt; die maximale Empfindlichkeit liegt im grünen bei 555 nm.

Zur quantitativen Messung der Helligkeit muss man einige fotometrische Größen definieren. Der *Lichtstrom* $\Phi$ ist ein Maß für die Zahl der Lichtquanten, die durch einen Beobachtungsquerschnitt $A$ tritt. Es handelt sich um die optische Leistung; seine Maßeinheit ist Lumen (lm).

Zur Charakterisierung der Helligkeit einer Lichtquelle ist der Lichtstrom ungeeignet, denn er hängt im allgemeinen vom Beobachtungsquerschnitt $A$ und dem Abstand $r$ von der Lichtquelle ab. Bei einer punktförmigen, kugelsymmetrischen Lichtquelle ist der Lichtstrom proportional zu dem Raumwinkel in Abb. 20.2. Er gibt den Bereich an, in dem die Lichtstärke auf 50% vom Maximum abgefallen ist. Seine Definition ist:

$$
\Omega = \frac{\text{Kugelfläche}}{\text{Radius}^2} = \frac{A}{r^2}
\qquad [\Omega] = \mathrm{sr}
\qquad (20.1)
$$

Er ist eigentlich dimensionslos, wird jedoch üblicherweise mit der Einheit *Steradiant* (sr) versehen. Die volle Kugeloberfläche erscheint vom Mittelpunkt aus unter dem Raumwinkel:

$$
\Omega_0 = \frac{4\pi r^2}{r^2}\,\mathrm{sr} = 4\pi\,\mathrm{sr}
$$

Ein Kreiskegel mit dem Öffnungswinkel $\varphi$ besitzt den Raumwinkel

$$
\Omega = 2\pi\left(1-\cos \frac{\varphi}{2}\right)\,\mathrm{sr}
\qquad (20.2)
$$

**Abb. 20.1.** Spektrale Augenempfindlichkeit und relativer Lichtstrom von Sonne und Glühlampe zum Vergleich

© Springer-Verlag GmbH Deutschland, ein Teil von Springer Nature 2019  
U. Tietze et al., *Halbleiter-Schaltungstechnik*
<!-- page-import:1158:end -->

<!-- page-import:1160:start -->
20.1 Fotometrische Grundbegriffe 1123

| Lichtquelle | Leuchtdichte $L$ cd/cm$^2$ = sb |
|---|---:|
| Blauer Himmel | 1 |
| Vollmond | 0,25 |
| Mittagssonne | 100.000 |
| Kerzenflamme | 1 |
| Leuchtröhre | 1 |
| LED-Lampe | 5000 |
| Glühlampe, klar | 200...3000 |
| Xenon Lampe | $10^5 \ldots 10^6$ |

**Abb. 20.4.**  
Leuchtdichten von Lichtquellen

| Lichtquelle | Beleuchtungsstärke $E$ lm/m$^2$ = lx |
|---|---:|
| Sonne im Sommer | 100.000 |
| Sonne im Winter | 10.000 |
| Bedeckt im Sommer | 10.000 |
| Bedeckt im Winter | 1.000 |
| Vollmond | 0,2 |
| Mondlose Nacht | 0,0003 |
| Lesbarkeitsgrenze | 0,5...2 |
| Schreibplatz | 1.000 |

**Abb. 20.5.**  
Beispiele für Beleuchtungsstärken

Ein Maß dafür, wie hell eine angeleuchtete Fläche $A$ dem Betrachter erscheint, ist die *Beleuchtungsstärke*. Sie ist definiert als das Verhältnis von auftreffendem Lichtstrom zur Empfängerfläche:

$$
E = \frac{\Phi}{A} = \frac{I\,\Omega}{A} = \frac{I}{r^2}
\qquad
[E] = \frac{\mathrm{lm}}{\mathrm{m}^2} = \mathrm{lx}
\qquad (20.5)
$$

Die Beleuchtungsstärke lässt sich auch aus der Lichtstärke und dem Raumwinkel berechnen; bei senkrechter Beleuchtung kürzt sich dann die Fläche $A$ und es geht nur der Abstand zur Lichtquelle $r$ in das Ergebnis ein wie Gl. 20.5 zeigt. Typische Werte von Beleuchtungsstärken zeigt Abb. 20.5.

Ein Beispiel soll die Berechnung der Fotometrischen Größen demonstrieren. Gegeben sei punktförmiger Strahler z.B. eine Leuchtdiode mit einer elektrischen Leistung von 1 W die in einen Öffnungswinkel von $\varphi = 45^\circ$ einen Lichtstrom von $\Phi = 100$ lm aussendet. Aus dem Öffnungswinkel lässt sich der Raumwinkel gemäß (20.2) berechnen:

$$
\Omega = 2\pi \left(1 - \cos \frac{\varphi}{2}\right)\,\mathrm{sr}
= 2\pi \left(1 - \cos \frac{45^\circ}{2}\right)\,\mathrm{sr}
= 0{,}478\,\mathrm{sr}
$$

Mit (20.3) kann man die Lichtstärke berechnen:

$$
I = \frac{\Phi}{\Omega}
= \frac{100\,\mathrm{lm}}{0{,}478\,\mathrm{sr}}
= 209\,\mathrm{cd}
$$

Zur Berechnung der Beleuchtungsstärke muss man zunächst aus dem Raumwinkel die Größe der beleuchteten Fläche ermitteln. Bei einem Abstand zur Lichtquelle von z.B. $r = 50\,\mathrm{cm}$ ergibt sich mit (20.1):

$$
A = \Omega\,r^2 = 0{,}478 \cdot (0{,}5\mathrm{m})^2 = 0{,}12\,\mathrm{m}^2
$$

Damit erhält man gemäß (20.5) die Beleuchtungsstärke:

$$
E = \frac{\Phi}{A}
= \frac{100\,\mathrm{lm}}{0{,}12\,\mathrm{m}^2}
= 833\,\mathrm{lx}
$$

Bei einer ausgedehnten Lichtquelle mit einer Fläche von z.B. $0{,}1\,\mathrm{m}^2$ die ebenfalls $\Phi = 100\,\mathrm{lm}$ aussendet lässt sich ihre Leuchtdichte gemäß (20.4) berechnen. Der Öffnungswinkel sei auch hier $\varphi = 45^\circ$, also $\Omega = 0{,}478\,\mathrm{sr}$:
<!-- page-import:1160:end -->

<!-- page-import:1177:start -->
1140 20. Optoelektronische Bauelemente

| Zeilen-nummer | \multicolumn{10}{c|}{ROM-Adresse} | \multicolumn{5}{c}{ROM-Inhalt} |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|  | \multicolumn{7}{c|}{ASCII- K $\hat{=}$ 4B\_Hex} | \multicolumn{3}{c|}{Zeile} | \multicolumn{5}{c}{Spaltencode} |
| $r$ | $a_9$ | $a_8$ | $a_7$ | $a_6$ | $a_5$ | $a_4$ | $a_3$ | $a_2$ | $a_1$ | $a_0$ | $c_1$ | $c_2$ | $c_3$ | $c_4$ | $c_5$ |
| 1 | 1 | 0 | 0 | 1 | 0 | 1 | 1 | 0 | 0 | 1 | 1 | 0 | 0 | 0 | 1 |
| 2 | 1 | 0 | 0 | 1 | 0 | 1 | 1 | 0 | 1 | 0 | 1 | 0 | 0 | 1 | 0 |
| 3 | 1 | 0 | 0 | 1 | 0 | 1 | 1 | 0 | 1 | 1 | 1 | 0 | 1 | 0 | 0 |
| 4 | 1 | 0 | 0 | 1 | 0 | 1 | 1 | 1 | 0 | 0 | 1 | 1 | 0 | 0 | 0 |
| 5 | 1 | 0 | 0 | 1 | 0 | 1 | 1 | 1 | 0 | 1 | 1 | 0 | 1 | 0 | 0 |
| 6 | 1 | 0 | 0 | 1 | 0 | 1 | 1 | 1 | 1 | 0 | 1 | 0 | 0 | 1 | 0 |
| 7 | 1 | 0 | 0 | 1 | 0 | 1 | 1 | 1 | 1 | 1 | 1 | 0 | 0 | 0 | 1 |

**Abb. 20.48.** Inhalt des Zeichengenerators zur Darstellung des Zeichens „K“

Zeile auslesen und über den Port2 ausgeben. Wie der Inhalt des Zeichengenerators aussehen muss, ist am Beispiel des Zeichens „K“ in Abb. 20.48 dargestellt. Wegen der Vielzahl der Matrixelemente reicht besonders bei mehrstelligen Anzeigen der Ausgangsstrom der Portanschlüsse nicht aus. Aus diesem Grund wurden hier Anoden- und Kathodentreiber vorgesehen zusammen mit Beispielen für die Realisierung.

Die Multiplex-Ansteuerung von Flüssigkristallanzeigen ist etwas komplizierter, da es sich dabei nicht vermeiden lässt, dass auch nicht-selektierten Anzeigeelemente eine Wechselspannung erhalten. Zur Ansteuerung solcher Flüssigkristall-Matrizen verwendet man daher drei Spannungspegel (außer Masse), um zu erreichen, dass die selektierten Segmente eine ausreichend große und die übrigen eine hinreichend kleine Wechselspannung erhalten. Diese spezielle Art der Multiplex-Technik wird als Triplex-Verfahren bezeichnet.
<!-- page-import:1177:end -->

<!-- page-import:1178:start -->
Teil III

Schaltungen der Nachrichtentechnik
<!-- page-import:1178:end -->

<!-- page-import:1179:start -->
[unclear]
<!-- page-import:1179:end -->
