# First-In First-Out Memories

<!-- page-import:0770:start -->
9.4 First-In-First-Out Memories (FIFO) 733

| Syn-drom-wort | kein Fehler | Datenfehler |  |  |  |  |  | Prüfbitfehler |  |  |  |  | Mehrfachfehler |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|  |  | $d_0$ | $d_1$ | $d_2$ | $\dots$ | $d_{14}$ | $d_{15}$ | $p_0$ | $p_1$ | $p_2$ | $p_3$ | $p_4$ |  |
| $f_0$ | 0 | 1 | 1 | 1 | $\dots$ | 1 | 0 | 1 | 0 | 0 | 0 | 0 | 0 1 $\dots$ 0 1 |
| $f_1$ | 0 | 1 | 0 | 0 |  | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 1 0 $\dots$ 1 1 |
| $f_2$ | 0 | 0 | 1 | 0 |  | 1 | 1 | 0 | 0 | 1 | 0 | 0 | 1 0 $\dots$ 1 1 |
| $f_3$ | 0 | 0 | 0 | 1 |  | 1 | 1 | 0 | 0 | 0 | 1 | 0 | 0 1 $\dots$ 1 1 |
| $f_4$ | 0 | 0 | 0 | 1 |  | 0 | 1 | 0 | 0 | 0 | 0 | 1 | 0 0 $\dots$ 1 1 |

Für $f_0=f_1=1$ ist $d_0$ falsch, für $f_2=f_3=f_4=1$ ist $d_{15}$ falsch.

**Abb. 9.32.** Zusammenstellung der Syndromworte und ihre Bedeutung

Die Funktionsweise des Syndrom-Decoders soll anhand von Abb. 9.32 genauer erklärt werden. In Abhängigkeit von dem Syndromwort $f_0 \dots f_4$ lassen sich drei Fehlerarten unterscheiden: Die Datenfehler $d_0 \dots d_{15}$, die Prüfbitfehler $p_0 \dots p_4$ und die Mehrfachfehler. Letztere werden jedoch bei der verwendeten Hamming-Matrix mit minimaler Größe nur unvollständig erkannt und sind nicht korrigierbar.

Der besondere Vorteil von Speichern mit Fehlerkorrektur besteht darin, dass man auftretende Speicherfehler registrieren kann, während sie infolge des Korrekturverfahrens wirkungslos bleiben. Um alle damit verbundenen Vorteile zu erreichen, sind jedoch einige Gesichtspunkte zu beachten: Man sollte die Wahrscheinlichkeit von nicht korrigierbaren Mehrfach-Fehlern möglichst klein halten. Aus diesem Grund sollte man für jedes Daten- und Prüfbit einen separaten Speicher-IC verwenden. Sonst würden bei einem Totalausfall eines Speicherbausteins gleichzeitig mehrere Datenbits gestört. Des Weiteren ist es erforderlich, jeden erkannten Fehler möglichst schnell zu beseitigen. Deshalb unterbricht man bei einem Computer-Speicher das laufende Programm mit einem Interrupt, wenn ein Fehler erkannt wird, und führt ein Fehler-Service-Programm aus. Darin muss zuerst festgestellt werden, ob es sich um einen flüchtigen Fehler handelt, der sich dadurch beseitigen lässt, dass man das korrigierte Datenwort wieder in den Speicher schreibt und erneut ausliest. Bleibt der Fehler bestehen, handelt es sich um einen permanenten Fehler. In diesem Fall liest man das Syndromwort aus, weil sich daraus der beteiligte Speicher-IC lokalisieren lässt, und trägt die IC-Nummer zusammen mit der Häufigkeit des Ausfalls in eine Tabelle ein. Diese Tabelle kann dann regelmäßig abgefragt werden, um die defekten Bausteine auszutauschen. Auf diese Weise erhöht sich die Zuverlässigkeit eines Speichers mit ECC (Error Checking and Correction) ständig.

# 9.4 First-In-First-Out Memories (FIFO)

## 9.4.1 Prinzip

Ein FIFO ist eine besondere Form eines Schieberegisters. Das gemeinsame Merkmal ist, dass die Daten in derselben Reihenfolge am Ausgang erscheinen, wie sie eingegeben wurden: das zuerst eingelesene Wort (First In) wird auch wieder zuerst ausgelesen (First Out). Bei einem FIFO kann dieser Vorgang im Unterschied zu einem Schieberegister mit getrennten Takten erfolgen, d.h. der Auslesetakt ist unabhängig vom Einlesetakt. Deshalb benutzt man FIFOs zur Kopplung asynchroner Systeme oder Prozesse.

Die Funktion ist ganz ähnlich wie die einer Warteschlange: Die Daten wandern nicht mit einem festen Takt vom Eingang zum Ausgang, sondern warten nur so lange im Register, bis alle vorhergehenden Daten ausgegeben sind. Abbildung 9.33 zeigt eine schematische
<!-- page-import:0770:end -->

<!-- page-import:0771:start -->
734  9. Halbleiterspeicher

**Abb. 9.33.**  
Schematische Darstellung  
der Funktionweise eines  
FIFOs

Darstellung. Bei den FIFOs der ersten Generation wurden die Daten tatsächlich nach dem Schema von Abb. 9.33 durch eine Registerkette hindurchgeschoben. Bei der Eingabe wurden die Daten bis zum niedrigsten freien Speicherplatz weitergereicht und von dort mit dem Auslesetakt zum Ausgang weitergeschoben. Ein Nachteil dieses Prinzips war die große Durchlaufzeit (Fall Through Time). Sie macht sich bei leerem FIFO besonders unangenehm bemerkbar, da dann die eingegebenen Daten alle Register durchlaufen müssen, bevor sie am Ausgang verfügbar sind. Dadurch ergeben sich selbst bei kleinen FIFOs Durchlaufzeiten von mehreren Mikrosekunden. Weitere Nachteile sind die aufwendige Schiebelogik und die vielen Schiebeoperationen, die einer stromsparenden Realisierung in CMOS entgegenstehen.

## 9.4.2 Standart FIFOs

Bei den neuen FIFOs werden nicht mehr die Daten verschoben, sondern lediglich zwei Zeiger, die die Eingabe bzw. Ausgabe-Adresse in einem RAM angeben. Abbildung 9.34 soll dies veranschaulichen. Der Eingabezähler zeigt auf die erste freie Adresse $A_{\mathrm{in}}$, der Ausgabezähler auf die letzte belegte Adresse $A_{\mathrm{out}}$. Im Betrieb mit laufender Datenein- und -ausgabe rotieren also beide Zeiger.

Der Abstand der beiden Zeiger $A_{\mathrm{in}} - A_{\mathrm{out}}$ gibt den Füllstand des FIFOs an. Wenn $A_{\mathrm{in}} - A_{\mathrm{out}} = A_{\max}$ ist, ist das FIFO voll. Dann dürfen keine weiteren Daten eingegeben werden, da sonst Daten überschrieben werden, die noch nicht ausgelesen wurden. Wenn $A_{\mathrm{in}} - A_{\mathrm{out}} = 0$ ist, ist das FIFO leer. Dann dürfen keine Daten ausgelesen werden, weil man sonst alte Daten ein zweites Mal erhält. Ein Überlauf bzw. ein Leerlauf sind nur dann vermeidbar, wenn die mittleren Datenraten für die Ein- und Ausgabe gleich sind. Dazu muss man den Füllstand des FIFOs überwachen und versuchen, die Datenrate der Quelle bzw. der Senke so zu beeinflussen, dass das FIFO im Mittel halb voll ist. Dann kann das FIFO kurzzeitige Schwankungen auffangen, wenn seine Speicherkapazität hinreichend

**Abb. 9.34.**  
FIFO als Ringspeicher
<!-- page-import:0771:end -->

<!-- page-import:0772:start -->
9.4 First-In-First-Out Memories (FIFO) 735

Abb. 9.35. FIFO-Realisierung mit Read-While-Write-Speicher

groß bemessen ist. Der Aufbau eines FIFOs ist in Abb. 9.35 dargestellt. Als Speicher sind hier Read-While-Write-Speicher mit getrennten Adress-Eingängen besonders gut geeignet, da sie gleichzeitig beschrieben und ausgelesen werden können.

## 9.4.3 FIFO-Realisierung mit Standard-RAMs

Für die Realisierung von großen FIFOs ist es zweckmäßig, auf Standard-RAMs zurückzugreifen, da man dann den höchsten Integrationsgrad und die niedrigsten Kosten erreicht. Dazu ersetzt man den Read-While-Write-Speicher in Abb. 9.35 durch Standard-RAMs, die von einem FIFO-RAM-Controller gesteuert werden. Die sich ergebende Anordnung ist in Abb. 9.36 dargestellt.

Die Eingabe erfolgt über das Eingabe-Register und den Eingabe-Zähler, der auf die Eingabeadresse zeigt. Die Ausgabe erfolgt über das Ausgabe-Register und den Ausgabe-Zähler, der auf die Ausgabeadresse zeigt. Der Adress- bzw. Daten-Multiplexer legen die jeweilige Adresse an das RAM an und steuern den Datentransport. Natürlich ist ein gleichzeitiger Schreib- und Lesezugriff bei Standard-RAMs nicht möglich; deshalb muss ein

Abb. 9.36. FIFO-RAM Controller. Der Sequential Flow Controller IDT72T6360 ermöglicht als Beispiel den Betrieb von DRAMs mit $2^{24} = 16$M Worten bei einer Wortbreite bis zu 32 bit.
<!-- page-import:0772:end -->
