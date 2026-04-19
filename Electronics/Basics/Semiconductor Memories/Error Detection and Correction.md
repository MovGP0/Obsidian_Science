# Error Detection and Correction

<!-- page-import:0767:start -->
730 9. Halbleiterspeicher

Um ein Bit zu löschen, muss man daher zunächst die ganze Page auslesen, dann löschen und dann die modifizierte Page wieder programmieren.

Ein Programmier- und Löschvorgang ist relativ langsam; man muss mit Zeiten im ms-Bereich rechnen. Zur Beschleunigung programmiert man eine ganze Page gleichzeitig. Ein anderes Problem besteht darin, dass jeder Programmier- und Löschvorgang das Tunneloxid etwas beschädigt. Deshalb sind nicht beliebig viele Zyklen möglich: Spezifiziert werden $10^5 \ldots 10^6$ Zyklen. Aus diesem Grund sind Flash-Speicher nicht beliebig oft beschreibbar wie ein RAM, aber doch öfter als ein ROM (Read Only Memory), das man nur ein einziges mal beschreiben kann. Da man Flash-Speicher selten beschreibt, aber häufig liest, sollte man sie als *Read Mostly Memories*, RMMs bezeichnen.

## 9.3 Fehler-Erkennung und -Korrektur

Bei der Speicherung von Daten in RAMs können zwei verschiedene Arten von Fehlern auftreten: permanente und flüchtige Fehler. Die permanenten Fehler (Hard Errors) werden durch Defekte in den Speicher-ICs selbst oder den beteiligten Ansteuerschaltungen verursacht. Die flüchtigen Fehler (Soft Errors) treten nur zufällig auf und sind daher nicht reproduzierbar. Sie werden hauptsächlich durch $\alpha$-Strahlung des Gehäuses verursacht. Sie kann die Speicherkondensatoren von dynamischen RAMs umladen, aber auch Speicher-Flip-Flops in statischen RAMs umkippen. Flüchtige Fehler können auch durch Störimpulse entstehen, die innerhalb oder außerhalb der Schaltung erzeugt werden. Lesefehler können bei einem Speicher auch dadurch auftreten, dass die Zugriffszeiten wegen Temperaturerhöhung zunehmen und die Daten innerhalb der erwarteten Zeit nicht eindeutig gelesen werden können.

Das Auftreten von Speicher-Fehlern kann sehr weitreichende Folgen haben. So kann ein einziger Fehler in einem Computer-Speicher nicht nur ein falsches Ergebnis verursachen. sondern zum „Absturz“ (endgültiger Ausfall) des Programms führen. Deshalb hat man Verfahren entwickelt, die das Auftreten von Fehlern melden. Um dies zu ermöglichen, muss man neben den eigentlichen Datenbits noch ein oder mehrere Prüfbits mit abspeichern. Je mehr Prüfbits man verwendet, desto mehr Fehler kann man erkennen oder sogar korrigieren.

### 9.3.1 Paritätsbit

Das einfachste Verfahren zur Fehlererkennung besteht darin, ein Paritätsbit $p$ hinzuzufügen. Man kann gerade oder ungerade Parität vereinbaren. Bei der geraden Parität setzt man das hinzugefügte Paritätsbit auf Null, wenn die Zahl der Einsen im Datenwort gerade ist. Man setzt es auf Eins, wenn sie ungerade ist. Dadurch ist die Gesamtzahl der übertragenen Einsen in einem Datenwort einschließlich Paritätsbit immer gerade. Bei der ungeraden Parität ist sie ungerade.

Das gerade Paritätsbit kann auch als Quersumme (modulo-2) der Datenbits interpretiert werden. Diese Quersumme lässt sich als Exklusiv-ODER-Verknüpfung der Datenbits errechnen wie in Abschnitt 7.5 auf S. 660 gezeigt.

Zur Fehlererkennung speichert man das Paritätsbit $d_8$ in Abb. 9.28 zusammen mit den Datenbits ab. Beim Auslesen der Daten kann man dann erneut die Parität bilden und über eine Exklusiv-ODER-Verknüpfung mit dem gespeicherten Paritätsbit vergleichen. Wenn sie verschieden sind, ist ein Fehler aufgetreten, und der Fehler-Ausgang wird $f = 1$. Auf diese Weise lässt sich jeder Einzelfehler erkennen. Eine Korrektur ist jedoch nicht
<!-- page-import:0767:end -->

<!-- page-import:0768:start -->
9.3 Fehler-Erkennung und -Korrektur 731

**Abb. 9.28.** Fehlererkennung durch ein Paritätsbit für eine Datenwortbreite von 8 bit

möglich, da das fehlerhafte Bit nicht lokalisierbar ist. Sind mehrere Bits gestört, kann man eine ungerade Fehlerzahl erkennen, eine gerade hingegen nicht.

## 9.3.2 Hamming-Code

Das Prinzip des Hamming-Codes besteht darin, durch Verwendung mehrerer Prüfbits die Fehlererkennung so zu verfeinern, dass ein Einzelfehler nicht nur erkannt, sondern auch lokalisiert werden kann. Wenn bei einem binären Code das fehlerhafte Bit lokalisiert ist, lässt es sich durch Negation auch korrigieren.

Die Frage nach der für diesen Zweck erforderlichen Zahl von Prüfbits lässt sich einfach beantworten: Mit $k$ Prüfbits kann man $2^k$ verschiedene Bitnummern angeben. Bei $m$ Datenbits ergibt sich eine Gesamtwortbreite von $m + k$; denn die Prüfbits müssen natürlich auch auf Fehler geprüft werden. Eine zusätzliche Prüfbitkombination benötigt man zur Angabe, dass das empfangene Datenwort richtig ist. Daraus folgt die Bedingung:

$$
2^k \geq m + k + 1
$$

(9.1)

Die praktisch wichtigen Lösungen von (9.1) sind in Abb. 9.29 zusammengestellt. Man erkennt, dass der relative Anteil der Prüfbits an der Gesamtwortbreite um so kleiner ist, je größer die Wortbreite ist.

Das Verfahren für die Ermittlung der Prüfbits wollen wir an dem Beispiel einer 16 bit-Zahl erläutern. Um 16 bit zu sichern, benötigt man gemäß Abb. 9.29 fünf Prüfbits, also eine Gesamtwortbreite von 21 bit. Nach Hamming berechnet man die einzelnen Prüfbits in Form von Paritätsbits für verschiedene Teile des Datenwortes. In unserem Beispiel benötigt man also 5 Paritätsgeneratoren. Ihre Anschlüsse verteilt man so auf die Datenbits, dass jedes an mindestens 2 der 5 Paritätsgeneratoren angeschlossen ist. Wird nun ein Datenbit falsch gelesen, ergibt sich genau bei denjenigen Paritätsbits ein Unterschied, auf die die betreffende Stelle wirkt. Anstelle der Paritätsfehlermeldung $f$ erhalten wir bei

| Zahl der Datenbits | $m$ | 1 . . . 4 | 5 . . . 11 | 12 . . . 26 | 27 . . . 57 | 58 . . . 120 | 121 . . . 247 |
|---|---|---|---|---|---|---|---|
| Zahl der Prüfbits | $k$ | 3 | 4 | 5 | 6 | 7 | 8 |

**Abb. 9.29.** Anzahl der mindestens benötigten Prüfbits, um einen Einzelfehler zu erkennen und zu korrigieren in Abhängigkeit von der Breite des Datenwortes
<!-- page-import:0768:end -->
