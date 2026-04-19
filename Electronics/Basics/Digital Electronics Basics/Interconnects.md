# Interconnects

<!-- page-import:0659:start -->
622  6. Digitaltechnik Grundlagen

**a** UND-Gatter

$y = x_1 x_2$

$y = x_1 x_2 \ldots x_n$

**b** ODER-Gatter

$y = x_1 + x_2$

$y = x_1 + x_2 + \ldots + x_n$

**c** NICHT-Gatter

$y = \overline{x}$

$y = \overline{x}$

**Abb. 6.5.** Schaltsymbole gemäß DIN 40900, Teil 12

**a** UND-Gatter

$y = x_1 x_2$

$y = x_1 x_2$

**b** ODER-Gatter

$y = x_1 + x_2$

$y = x_1 + x_2$

**c** NICHT-Gatter

$y = \overline{x}$

$y = \overline{x}$

**Abb. 6.6.** Alte Schaltsymbole

ten Schritt wird diese Funktion auf die einfachste Form gebracht. Dann kann man sie durch entsprechende Kombination der logischen Grundschaltungen realisieren. Zur Aufstellung der logischen Funktion bedient man sich in der Regel der *disjunktiven Normalform*. Dabei geht man folgendermaßen vor:

1) Man sucht in der Wahrheitstafel alle Zeilen auf, in denen die Ausgangsvariable $y$ den Wert 1 besitzt.  
2) Von jeder dieser Zeilen bildet man die Konjunktion aller Eingangsvariablen; und zwar setzt man $x_i$ ein, wenn bei der betreffenden Variablen eine 1 steht, andernfalls $\overline{x_i}$. Auf diese Weise erhält man gerade so viele Produktterme wie Zeilen mit $y = 1$.  
3) Die gesuchte Funktion erhält man schließlich, indem man die Disjunktion aller gefundenen Produktterme bildet.

Nun wollen wir das Verfahren anhand der Wahrheitstafel in Abb. 6.7 erläutern. In den Zeilen 3, 5 und 7 ist $y = 1$. Zunächst müssen also die Konjunktionen dieser Zeilen gebildet werden:

Zeile 3: $K_3 = \overline{x_1} x_2 \overline{x_3}$,  
Zeile 5: $K_5 = x_1 \overline{x_2} \overline{x_3}$,  
Zeile 7: $K_7 = x_1 x_2 \overline{x_3}$

Die gesuchte Funktion ergibt sich nun als die Disjunktion der Konjunktionen:

$$
y = K_3 + K_5 + K_7,
$$

$$
y = \overline{x_1} x_2 \overline{x_3} + x_1 \overline{x_2} \overline{x_3} + x_1 x_2 \overline{x_3}
$$

| Zeile | $x_1$ | $x_2$ | $x_3$ | $y$ |
|---|---:|---:|---:|---:|
| 1 | 0 | 0 | 0 | 0 |
| 2 | 0 | 0 | 1 | 0 |
| 3 | 0 | 1 | 0 | 1 |
| 4 | 0 | 1 | 1 | 0 |
| 5 | 1 | 0 | 0 | 1 |
| 6 | 1 | 0 | 1 | 0 |
| 7 | 1 | 1 | 0 | 1 |
| 8 | 1 | 1 | 1 | 0 |

**Abb. 6.7.**  
Beispiel für eine Wahrheitstafel mit der logischen Funktion $y = (x_1 + x_2)\,\overline{x_3}$
<!-- page-import:0659:end -->

<!-- page-import:0683:start -->
646  6. Digitaltechnik Grundlagen

Abb. 6.54. Frequenz- und Komplexitätsbereich verschiedener Logikfamilien

dass hier über Differenzverstärker lediglich der Pfad für konstante Ströme umgeschaltet wird. Dies führt zu einem besonders EMV-günstigen Betrieb.

In Abb. 6.54 ist für die verschiedenen Logikfamilien der nutzbare Frequenzbereich und die Komplexität in Gatteräquivalenten aufgetragen. Man erkennt, dass die klassischen Digitalschaltungen der 7400-Familie nur bei sehr einfachen Aufgaben eine Anwendungsberechtigung haben. Für den überwiegenden Teil der Digitalschaltungen setzt man heute PLDs und FPGAs ein, die in einem großen Frequenz- und Komplexitätsbereich verfügbar sind. Bei beiden Familien können alle erforderlichen Verbindungen vom Anwender programmiert werden. Deshalb kann ein solcher Baustein eine ganze Leiterplatte mit primitiven Gattern ersetzen. Der innere Aufbau von PLDs und FPGAs wird in Kapitel 9 beschrieben. ECL- und CML-Schaltungen werden nur für hohe Frequenzen eingesetzt, bei denen die Geschwindigkeit anderer Logikfamilien nicht ausreicht. Ihr größter Nachteil ist die hohe Verlustleistung.

## 6.5 Verbindungsleitungen

Bei den bisherigen Betrachtungen sind wir davon ausgegangen, dass die digitalen Signale von einer integrierten Schaltung zur anderen unverfälscht übertragen werden. Bei steilen Signalflanken kann man jedoch den Einfluss der Verbindungsleitungen nicht vernachlässigen. Als Faustregel kann gelten, dass ein einfacher Verbindungsdraht nicht mehr ausreicht, wenn die Laufzeit auf dem Verbindungsdraht in die Größenordnung der Anstiegszeit des Signals kommt. Wird sie überschritten, können schwerwiegende Impulsverformungen, gedämpfte Schwingungen und Reflektionen auftreten.

Diese Fehler kann man durch den Einsatz von Leitungen mit definiertem Wellenwiderstand – den sogenannten Streifenleitern (Stripline, Microstripline) – vermeiden, wenn man sie mit ihrem Wellenwiderstand abschließt. Man bevorzugt meist Wellenwiderstände von 50 $\Omega$. In Abb. 6.55 sind drei Fälle dargestellt:

- Bei einer Leitung mit offenem Ende wird der Impuls ohne Vorzeichenwechsel reflektiert
- Wird die Leitung mit ihrem Wellenwiderstand abgeschlossen, wird nichts reflektiert
<!-- page-import:0683:end -->

<!-- page-import:0684:start -->
6.5 Verbindungsleitungen 647

offen

$Z = \infty$

abgeschlossen

$Z = Z_W$

Kurzschluß

$Z = 0$

**Abb. 6.55.** Reflektion von Impulsen am Ende einer Leitung mit definiertem Wellenwiderstand in Abhängigkeit von der Terminierung, also dem Abschlusswiderstand

- Bei einem Kurzschluss am Leitungsende wird der Impuls mit Vorzeichenwechsel reflektiert.

Der Abschluss mit dem Wellenwiderstand ist daher anzustreben; das setzt bei 50 $\Omega$-Systemen allerdings entsprechend große Ströme voraus. Wenn der Abschlusswiderstand nicht exakt mit dem Wellenwiderstand übereinstimmt, wird der Impuls teilweise reflektiert. In diesem Fall ist es vorteilhaft, wenn die Leitung auch auf der Senderseite terminiert ist, damit ein zurücklaufender Impuls dort absorbiert wird.

Microstriplines lassen sich vorzugsweise dadurch realisieren, dass man alle Verbindungsbahnen auf einer Seite der Leiterplatte herstellt und die andere Seite durchgehend metallisiert. Man muss lediglich kleine Aussparungen für die Isolation der Komponentenanschlüsse vorsehen. Dadurch werden alle Verbindungsbahnen zu Streifenleitern. In Multilayer-Schaltungen ist es üblich, auch für die Betriebsspannung eine ganze Ebene zu reservieren.

Microstripline

$w$

$d$

Stripline

$+$

$w$

$d$

$h$

$$
Z_W = \frac{60\Omega}{\sqrt{0{,}475\varepsilon_r + 0{,}67}} \ln \frac{4h}{0{,}67\,(0{,}8w + d)}
$$

$$
Z_W = \frac{60\Omega}{\sqrt{\varepsilon_r}} \ln \frac{4h}{0{,}67\pi\,(0{,}8w + d)}
$$

**Abb. 6.56.** Anordnung von Striplines und Microstriplines  
(Angaben gemäß Rapidesigner von National Semiconductor)
<!-- page-import:0684:end -->
