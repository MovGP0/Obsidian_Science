# Coupling of Logic Families

<!-- page-import:0686:start -->
6.7 Kopplung von Logikfamilien 649

a Karnaugh-Diagramm  
b Schaltung  
c Zeitverlauf

**Abb. 6.58.** Zustandekommen von Hazards am Beispiel eines Multiplexers.  
Zeitverlauf für $x_1 = x_2 = 1$

a Karnaugh-Diagramm  
b Schaltung  
c Zeitverlauf

**Abb. 6.59.** Vermeidung von Hazards. Zeitverlauf für $x_1 = x_2 = 1$

Multiplexer. Wenn an beiden Dateneingängen $x_1 = x_2 = 1$ anliegt, muss sich unabhängig von der Adressvariable $a$ am Ausgang der Wert $y = 1$ ergeben. Das kann man im Karnaugh-Diagramm und in der Schaltung bestätigen. Die Frage ist, ob der Ausgang dabei konstant den Wert 1 behält oder zwischendurch auf 0 geht. Dazu muss man zwei Fälle untersuchen:

- Wenn die Variable $a$ von 0 auf 1 geht, gibt es wegen der Verzögerung durch den Inverter vorübergehend an beiden UND-Gattern eine 1: Der Ausgang bleibt also konstant $y = 1$.
- Wenn die Variable $a$ von 1 auf 0 geht, gibt es wegen der Verzögerung durch den Inverter vorübergehend an beiden UND-Gattern eine 0: Der Ausgang geht also vorübergehend auf $y = 0$. Die Dauer ergibt sich aus der Gatterlaufzeit des Inverters. Einen derartigen Störimpuls, der sich durch den Wettlauf von Signalen durch Gatter ergibt, nennt man Hazard.

Der Hazard lässt sich vermeiden, wenn man im Karnaugh-Diagramm einen redundanten Term hinzufügt, der benachbarte Felder (mit Einsen) miteinander verbindet; dies ist in Abb. 6.59 gezeigt. Für $x_1 = x_2 = 1$ erzeugt dann der zusätzliche Term bzw. das zusätzliche Gatter unabhängig von $a$ eine 1. Dadurch wird der Hazard am Ausgang verhindert.

## 6.7 Kopplung von Logikfamilien

Wenn man unterschiedliche Logikfamilien einsetzen möchte, muss man besonderes Augenmerk auf die Kopplung legen. Selbst die Kopplung von 5V-TTL- oder CMOS-Schaltungen geht nicht problemlos, obwohl die High- und Low-Pegel im Toleranzbereich liegen. Das Problem ist in Abb. 6.60 zu erkennen: Wenn $T_2$ leitend ist, fließt ein Strom $I_x$ aus der 5V-Versorgung über die Diode $D_4$ in die 3,3V-Versorgung. Diese Diode, die bei CMOS-Schaltungen als Schutzdiode vorhanden ist, gibt es aber auch in allen übrigen integrierten Schaltungen. Durch technologische Tricks ist es jedoch möglich, diese
<!-- page-import:0686:end -->
