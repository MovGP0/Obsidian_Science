# Hazards

<!-- page-import:0685:start -->
648 6. Digitaltechnik Grundlagen

Microstripline differentiell

$w \qquad s \qquad w \qquad d$

$$
Z_{diff} = 2 Z_W \left(1 - 0{,}48 \cdot e^{-0{,}96 \frac{s}{h}}\right)
$$

Stripline differentiell

$w \qquad s \qquad w \qquad d$

$h$

$$
Z_{diff} = 2 Z_W \left(1 - 0{,}374 \cdot e^{-2{,}9 \frac{s}{h}}\right)
$$

**Abb. 6.57.** Differentielle Striplines und Microstriplines

Striplines erhält man, wenn man Signalleitungen zwischen zwei Masseflächen anordnet; das setzt natürlich Multilayer-Schaltungen voraus. Dabei ist es zweckmäßig, eine der beiden Flächen mit der Betriebsspannung statt mit Masse zu verbinden, um überall auch einen induktivitätsarmen Betriebsspannungsanschluss zu ermöglichen. Für die Leiterbahnen, die dann dazwischen verlaufen, verhalten sich beide Ebenen wie Masseflächen. Diese Multilayer-Anordnung besitzt darüber hinaus den Vorteil, dass sie abschirmend wirkt und die Schaltung vor elektromagnetischer Abstrahlung und Einstrahlung schützen. In Abb. 6.56 sind beide Anordnungen gegenübergestellt zusammen mit Formeln zur Berechnung des Wellenwiderstands. Die relative Dielektrizitätskonstante $\epsilon_r$ hängt vom verwendeten Basismaterial ab; bei dem meist verwendeten Epoxydharz beträgt sie $\epsilon_r = 4{,}8$. Bei anderen Materialien ergeben sich aber ganz andere Werte: bei Teflon ist $\epsilon_r = 2{,}05$, bei Aluminiumoxid ist $\epsilon_r = 9{,}7$.

Ein Höchstmaß an Störsicherheit bietet die symmetrische Signalübertragung, wie sie bei den Schaltungen in Abb. 6.42 und Abb. 6.52 gezeigt wurde. Auch bei ECL-Gattern in Abb. 6.36 bietet sich eine symmetrische Signalübertragung an, wenn man als Empfänger Komparatoren einsetzt, die dort Line-Receiver genannt werden. Dabei wirken sich gleichartige Störsignale auf den Signalleitungen wegen des Komparators als Empfänger nicht aus. Auch die elektromagnetische Abstrahlung ist dabei geringer, weil entgegengesetzte Felder entstehen, die sich weitgehend kompensieren. Voraussetzung ist natürlich, dass die beiden Leitungen einer symmetrischen Verbindung auf der Leiterplatte streng parallel geführt werden. Bei der Bildung des Komplementärsignals muss man sicherstellen, dass keine zeitliche Verschiebung (skew) der beiden Signale gegeneinander auftritt. Das ist in den angegebenen Beispielen auch gewährleistet. Ein Inverter zur Erzeugung des negierten Signals wäre wegen der Verzögerung um eine Gatterlaufzeit unbrauchbar. Die Anordnung symmetrischer Microstriplines und Striplines ist in Abb. 6.57 dargestellt. Die Wellenwiderstände werden wie bei den einzelnen Verbindungsleitungen berechnet. Die Formeln für den differentiellen Widerstand sind hier angegeben; meist strebt man 100 $\Omega$ an.

## 6.6 Hazards

Im Grunde ist es nicht überraschend, dass die Ausgangsvariablen einer digitalen Schaltung (eines Schaltnetzes) eine gewisse Zeit brauchen, um nach einer Änderung eines Eingangszustands wieder zu einem stabilen Ausgangszustand zu gelangen. Die Frage ist, ob das Ausgangssignal konstant bleibt, wenn beide Eingangskombinationen, zwischen denen umgeschaltet wird, zu einer 1 am Ausgang führen. Abbildung 6.58 zeigt als Beispiel einen
<!-- page-import:0685:end -->
