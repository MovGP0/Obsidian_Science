# Uninterruptible Power Supplies

<!-- page-import:1035:start -->
998  16. Stromversorgung

**Abb. 16.108.** Unterbrechungsfreie Stromversorgung in Notebooks. Die doppelte Trennlinie im Akkulader soll auf eine Potentialtrennung mit einem Transformator hinweisen. Die eingetragenen Ausgangsspannungen sind lediglich Beispiele. Die ein-
getragene Ausgangsspannungen sind lediglich Beispiele.  
L = Phase, N = Neutralleiter, PE = Schutzleiter = Protective Earth

betrieben wird, sodass ein verlustarmer Hochfrequenztransformator eingesetzt werden kann. Die hier vorgeschlagene Frequenz von 20 kHz ist ein vernünftiger Kompromiss bei dem Einsatz von IGBTs als Schalter. Bei ihnen steigen die Umschaltverluste bei höheren Frequenzen stark an. Bei Solarwechselrichtern für kleine Leistungen kann man auch Leistungsmosfets einsetzen, die sich mit höheren Taktfrequenzen betreiben lassen. Bei der hier gezeigten Schaltung wurden jeweils Wechselrichter in Vollbrückenschaltung gemäß Abb. 16.74 auf Seite 974 eingesetzt, weil sich dadurch die Ausgangsspannung verdoppelt; dann lässt sich bei gegebenem Strom die vierfache Leistung übertragen. Zur Steuerung der Schalter verwendet man am besten einen Mikrocontroller, der die Eingangs- und Ausgangsspannung überwacht, den MP-Punkt ermittelt und daraus die Pulsbreite für die Schalter bestimmt.

## 16.9 Unterbrechungsfreie Stromversorgung

Die Aufgabe einer unterbrechungsfreien Stromversorgung (USV, bzw. UPS = uninterruptible power supply) besteht darin, die angeschlossenen Verbraucher bei einem Ausfall des Hausstromnetzes weiter mit Strom zu versorgen. Für viele Verbraucher – wie Computern – ist es dabei wichtig, dass die Übernahme durch die Notstromversorgung ohne Unterbrechung erfolgt. Die Überbrückungsdauer eines Netzteils beträgt nämlich meist nur eine einzige Netzschwingungsdauer, also 20 ms, bestimmt durch die Größe des Ladekondensators. Als Energiespeicher verwendet man in unterbrechungsfreien Stromversorgungen Akkus.

Die einfachste Möglichkeit zur Realisierung einer unterbrechungsfreien Stromversorgung ist die in Notebooks übliche Methode, die in Abb. 16.108 dargestellt ist. Die benötigten Betriebsspannungen werden mit einem Spannungswandler aus dem Akku gewonnen. Der Akkulader liefert die laufend benötigte Energie und lädt gleichzeitig den Akku. Bei einem Netzausfall merken die angeschlossenen Verbraucher nichts davon, weil der Spannungswandler seine Energie immer aus dem Akku bezieht. Der zusätzliche Aufwand für den unterbrechungsfreien Betrieb ist gering: Er besteht praktisch nur in dem zusätzlich benötigten Akku.

**Abb. 16.109.** Unterbrechungsfreie Stromversorgung mit Netzspannungs-Ausgang. Die eingetragene Akkuspannung ist lediglich ein Beispiel.
<!-- page-import:1035:end -->
