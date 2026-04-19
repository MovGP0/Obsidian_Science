# Driver Circuits with Voltage Gain

<!-- page-import:0951:start -->
914 15. Leistungsverstärker

Abb. 15.23. Einfache Ansteuerschaltung mit Spannungsverstärkung

Die Verlustleistung in den Treibertransistoren beträgt im Ruhezustand 30 mA · 29 V ≈ 0,9 W, bei Vollaussteuerung noch 0,75 W. Die Stromverstärkung dieser Transistoren sei 100. Dann beträgt ihr maximaler Basisstrom noch

$$
I_{B\ \max} = \frac{1}{100}\left(\frac{4{,}48\,\mathrm{A}}{30} + \frac{0{,}8\,\mathrm{V}}{13\,\Omega}\right) \approx 2\,\mathrm{mA}.
$$

Der Strom durch die Konstantstromquellen $T_3$ und $T_4$ soll groß gegenüber diesem Wert sein. Wir wählen ca. 10 mA.

Emitterfolger neigen zu parasitären Schwingungen in der Nähe der Transitfrequenz der Ausgangstransistoren. Zur Schwingungsdämpfung kann man die Quellenzeitkonstante vergrößern. Dadurch verläßt man den kritischen Bereich in Abb. 2.104 auf S.151 nach oben (Pfeil 1). Dazu fügt man in der Schaltung in Abb. 15.22 die RC-Glieder $R_7C_1$ und $R_8C_2$ ein. Die Serienwiderstände müssen natürlich so niederohmig gewählt werden, dass der Spannungsabfall daran klein bleibt. Zusätzlich kann man den Ausgang bei hohen Frequenzen bedämpfen. Dazu schaltet man am Ausgang ein Serien-RC-Glied parallel (z.B. 1 $\Omega$ in Reihe mit 0,1 $\mu$F). Dadurch entstehen natürlich bei hohen Frequenzen zusätzliche Verluste.

## 15.9 Ansteuerschaltungen mit Spannungsverstärkung

Bei den beschriebenen Leistungsendstufen treten in Nullpunktnähe nennenswerte Übernahmeverzerrungen auf. Sie lassen sich durch Gegenkopplung weitgehend beseitigen. Dazu schaltet man eine Ansteuerschaltung mit Spannungsverstärkung vor die Leistungsendstufe und schließt die Gegenkopplung über beide Teile. Eine einfache Möglichkeit besteht darin, zu dem Operationsverstärker in Abb. 5.14 auf Seite 521 einen komplementären Emitterfolger hinzuzufügen. Die Ansteuerung der Endstufe in Abb. 15.23 erfolgt über die Stromquelle $T_3$, die zusammen mit $T_7$ einen Stromspiegel für $I_{C6}$ bildet. Der Differenzverstärker $T_5$, $T_6$ bewirkt die erforderliche Spannungsverstärkung. Sein Arbeitswiderstand ist relativ hoch: er ergibt sich aus der Parallelschaltung der Stromquellen-Innenwiderstände $T_3$, $T_4$ und der Eingangswiderstände der Emitterfolger $T_1$, $T_2$.

Die ganze Anordnung ist über die Widerstände $R_7$, $R_8$ als nichtinvertierender Verstärker gegengekoppelt. Die Spannungsverstärkung beträgt $A = 1 + R_8/R_7$. Damit sich eine
<!-- page-import:0951:end -->

<!-- page-import:0952:start -->
15.9 Ansteuerschaltungen mit Spannungsverstärkung

915

ausreichende Schleifenverstärkung ergibt, sollte man $A$ nicht zu groß wählen. Praktikable Werte liegen zwischen 5 und 10.

Wenn man nur Wechselspannungen verstärken will, lässt sich die Nullpunktstabilität der Schaltung verbessern, indem man mit $R_7$ einen Koppelkondensator in Reihe schaltet. Dadurch verringert sich die Gleichspannungsverstärkung auf 1. Natürlich kann man auch von den besseren Operationsverstärkern in Kapitel 5 ausgehen und dort eine der hier beschriebenen Leistungsendstufen hinzufügen.

## 15.9.1 Breitband-Ansteuerschaltung

Um bei einem Leistungsverstärker eine hohe Bandbreite zu erreichen, muss man an allen Stellen im Signalpfad hohe Spitzenströme bereitstellen, um die Schaltungs- und Transistorkapazitäten schnell umzuladen. Damit dabei die Ruhestromaufnahme in erträglichen Grenzen bleibt, muss man im ganzen Verstärker – nicht nur in der Endstufe – AB-Betrieb vorsehen. Ein Breitband-Operationsverstärker, der nach diesem Prinzip arbeitet wurde bereits in Abb. 5.30 auf S. 531 behandelt. In Abb. 15.24 wird dieses Prinzip auf Leistungsverstärker angewendet. Hier besteht der Differenzverstärker am Eingang aus den Spannungsfolgern $T_1$ bis $T_4$ und $T_5$ bis $T_8$. Der Strom durch $R_E$ wird über die Stromspiegel $T_9$, $T_{10}$ und $T_{11}$, $T_{12}$ an die Endstufentransistoren übertragen. Da er nicht auf $I_0$ begrenzt ist, stehen hohe Spitzenströme zur Verfügung. Zusätzlich kann man den Stromspiegeln noch eine Stromübersetzung von $2 \ldots 10$ geben.

Die beiden Spannungsfolger $T_1 \ldots T_4$ und $T_5 \ldots T_8$ bilden den invertierenden bzw. nicht invertierenden Eingang eines Operationsverstärkers, wie es in der Schaltung eingetragen ist. Im Prinzip könnte man diesen Teil der Schaltung als Leistungsoperationsverstärker verwenden. Die Schleifenverstärkung und die Offsetspannung wären aber unbefriedigend. Dieses Problem lässt sich dadurch lösen, dass man einen normalen Operationsverstärker vorschaltet. Er bildet den Signalpfad für niedrige Frequenzen und bestimmt die Offsetspannung und die Gleichspannungsverstärkung. Durch diese Auftrennung in einen HF- und NF-Zweig lassen sich beide Signalpfade getrennt optimieren. Das zugrunde liegende Prinzip ist ebenfalls in Abb. 15.24 anhand des Bode-Diagramms dargestellt für die einzelnen und die kombinierte Verstärkung. Durch die Kombination der beiden Verstärker erhält man die guten Gleichspannungsdaten des NF-Verstärkers in Kombination mit der hohen Transitfrequenz des HF-Verstärkers.

Die Gesamtverstärkung der Schaltung lässt sich mit den Widerständen $R_N$ und $R_1$ auf Werte zwischen 1 und 10 einstellen. Größere Verstärkungen sind nicht empfehlenswert, da sonst die Schleifenverstärkung im HF-Zweig nicht ausreicht. Die offene Verstärkung des HF-Zweiges lässt sich mit Hilfe von $R_E$ so einstellen, dass sich das gewünschte Einschwingverhalten der Gesamtschaltung ergibt. Für den NF-Operationsverstärker genügt die interne Standard-Frequenzkorrektur.
<!-- page-import:0952:end -->
