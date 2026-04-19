# Comparison of Active and Passive Mixers

<!-- page-import:1429:start -->
1392 25. Mischer

a Einspeisung am Oberband-Anschluss

Signal aus dem Oberband

$s_{ZF}(t)=a(t)\cos[\omega_{ZF}t+\varphi_a(t)]$

$\cos \omega_{LO} t$

$90^\circ$

$\sin \omega_{LO} t$

Oberbandsignal

$a(t)\cos[(\omega_{LO}+\omega_{ZF})t+\varphi_a(t)]$

$+\, b(t)\cos[(\omega_{LO}-\omega_{ZF})t-\varphi_b(t)]$

Unterbandsignal

b Einspeisung am Unterband-Anschluss

Signal aus dem Unterband

$s_{ZF}(t)=b(t)\cos[\omega_{ZF}t+\varphi_b(t)]$

$\cos \omega_{LO} t$

$90^\circ$

$\sin \omega_{LO} t$

0

Oberbandsignal

$a(t)\cos[(\omega_{LO}+\omega_{ZF})t+\varphi_a(t)]$

$+\, b(t)\cos[(\omega_{LO}-\omega_{ZF})t-\varphi_b(t)]$

Unterbandsignal

**Abb. 25.7.** Ableitung des Abwärtsmischers mit Spiegelfrequenz-Unterdrückung aus dem Aufwärtsmischer mit Spiegelfrequenz-Unterdrückung. Auf die zusätzlichen Minus-Zeichen an den Ausgängen der jeweils unteren Phasenschieber wird im Text eingegangen.

Unterbandsignal ein. Wenn man dieses Signalgemisch gemäß Abb. 25.7a am Oberband-Anschluss einspeist, erhält man am ZF-Anschluss nur das Signal aus dem Oberband; entsprechend erhält man bei Einspeisung am Unterband-Anschluss gemäß Abb. 25.7b nur das Signal aus dem Unterband. Zusätzlich erhält man am ZF-Anschluss Anteile bei $2\omega_{LO}\pm\omega_{ZF}$, die für die Funktion unbedeutend sind. Man beachte, dass die Ausgänge der unteren Phasenschieber in Abb. 25.7a und Abb. 25.7b mit einem Minus-Zeichen versehen werden müssen, damit man anstelle der $90^\circ$ Phasennacheilung aus Abb. 25.6 eine der umgekehrten Signalrichtung entsprechende $90^\circ$ Phasenvoreilung erhält. Verschiebt man alle Vorzeichen auf die ZF-Seite, erhält man die in Abb. 25.8 gezeigte übliche Darstellung mit einem HF-Eingang und zwei ZF-Ausgängen; dabei sind auch die Tiefpassfilter dargestellt, die die Anteile bei der ZF-Frequenz durchlassen und die wesentlich höherfrequenten Anteile bei $2\omega_{LO}\pm\omega_{ZF}$ unterdrücken. Auch hier wird in der Praxis nur das gewünschte Ausgangssignal gebildet. Mit $f_{HF}=f_{LO}+f_{ZF}$ arbeitet der Mischer in Gleichlage und unterdrückt die Spiegelfrequenz $f_{HF,Sp}=f_{LO}-f_{ZF}$; mit $f_{HF}=f_{LO}-f_{ZF}$ arbeitet der Mischer in Kehrlage und unterdrückt die Spiegelfrequenz $f_{HF,Sp}=f_{LO}+f_{ZF}$.

HF-Signal

$a(t)\cos[(\omega_{LO}+\omega_{ZF})t+\varphi_a(t)]$

$+\, b(t)\cos[(\omega_{LO}-\omega_{ZF})t-\varphi_b(t)]$

$\cos \omega_{LO} t$

$90^\circ$

$\sin \omega_{LO} t$

$90^\circ$

ZF-Signale

$a(t)\cos[\omega_{ZF}t+\varphi_a(t)]$

$b(t)\cos[\omega_{ZF}t+\varphi_b(t)]$

**Abb. 25.8.** Übliche Darstellung eines Abwärtsmischers mit Spiegelfrequenz-Unterdrückung und Tiefpassfiltern zur Unterdrückung der Anteile bei $2\omega_{LO}\pm\omega_{ZF}$. Die Phasenschieber haben $90^\circ$ Phasennacheilung. In der Praxis wird nur das gewünschte Ausgangssignal gebildet.
<!-- page-import:1429:end -->

<!-- page-import:1531:start -->
1494  25. Mischer

aktiven Mischers deutlich höher als die eines Verstärkers. Besonders störend wirkt sich dieser Effekt bei aktiven Mischern mit Mosfets aus, da die Rauschspannungsdichte der Rauschspannungsquelle $u_{r,0}$ bei einem Mosfet größer ist als bei einem Bipolartransistor.

Die Rauschzahl hängt darüber hinaus stark von der Auslegung im Hinblick auf bestimmte Anwendungen ab. Gegentaktmischer mit geringem Dynamikbereich erreichen Rauschzahlen im Bereich von 6 dB und liegen damit im selben Bereich wie passive Dioden- oder Fet-Mischer. Bei den meisten aktiven Mischern handelt es sich aber um Doppel-Gegentaktmischer mit Rauschzahlen im Bereich $10 \ldots 12\,\mathrm{dB}$.

## 25.6 Vergleich aktiver und passiver Mischer

### 25.6.1 Rauschzahl, Intercept-Punkt und Dynamikbereich

Aktive Mischer mit Transistoren haben in den meisten Fällen eine höhere Rauschzahl als passive Dioden- oder Fet-Mischer. Da sie jedoch einen Mischgewinn im Bereich von 10 dB besitzen, sind sie passiven Mischern hinsichtlich der Empfänger-Rauschzahl $F_e$ häufig überlegen, da sich das auf den Eingang umgerechnete Rauschen der nachfolgenden Komponenten weniger stark auswirkt. Passive Mischer haben jedoch einen wesentlich höheren Eingangs-Intercept-Punkt $IIP3$ und deshalb auch einen größeren Dynamikbereich. Einen vergleichbar hohen Dynamikbereich erreichen aktive Mischer nur mit starker Stromgegenkopplung und einer Dimensionierung, die zu einer deutlichen Zunahme der Rauschzahl führt.

Abbildung 25.95 zeigt typische Werte für eine Anwendung mit geringem und eine Anwendung mit hohem Dynamikbereich. Die Gesamtverstärkung beträgt in beiden Fällen $G = 10\,\mathrm{dB}$; dazu muss nach den passiven Mischern mit einem typischen Mischgewinn $G_M = -6\,\mathrm{dB}$ ein Verstärker mit $G_V = 16\,\mathrm{dB}$ eingesetzt werden. Bei dem in Abb. 25.95a gezeigten Fall mit geringem Dynamikbereich kann man einen auf niedriges Rauschen optimierten aktiven Mischer mit einer Rauschzahl von 6 dB einsetzen. Der passive Mischer hat in diesem Fall zwar auch nur eine Rauschzahl von 6 dB, diese erhöht sich jedoch durch den nachfolgenden Verstärker auf 8 dB. Man kann bei der Berechnung der Rauschzahl von der Eigenschaft Gebrauch machen, dass sich ein passiver Mischer mit $G_M = -F_M$ wie ein Dämpfungsglied mit der Dämpfung $D = -G_M = F_M$ verhält und dadurch die Rauschzahl der nachfolgenden Komponente auf

$$
F\ [\mathrm{dB}] = F_V\ [\mathrm{dB}] + D\ [\mathrm{dB}] = F_V\ [\mathrm{dB}] + F_M\ [\mathrm{dB}]
$$

zunimmt oder Gl. (4.204) zur Berechnung der Rauschzahl einer Reihenschaltung verwenden:

$$
G_M = -6\,\mathrm{dB} = 1/4 \quad,\quad F_M = 6\,\mathrm{dB} = 4 \quad,\quad F_V = 2\,\mathrm{dB} = 1{,}58
$$

$$
\Rightarrow \quad F = F_M + \frac{F_V - 1}{G_M} = 4 + \frac{0{,}58}{1/4} = 6{,}3 = 8\,\mathrm{dB}
$$

Der aktive Mischer ist in diesem Fall aufgrund der geringeren Gesamtrauschzahl überlegen.

Bei hohen Anforderungen an den Dynamikbereich sind aktive Mischer unterlegen, wie das Beispiel in Abb. 25.95b zeigt. Die Rauschzahl von aktiven Mischern nimmt stark zu, wenn ein hoher Eingangs-Intercept-Punkt $IIP3$ benötigt wird; dagegen ist die Rauschzahl passiver Mischer nur vom Mischgewinn abhängig und damit weitgehend unabhängig vom Intercept-Punkt. Man muss allerdings berücksichtigen, dass die Rauschzahl eines Verstärkers mit zunehmendem $IIP3$ ebenfalls zunimmt; deshalb ist die Rauschzahl des Verstärkers in Abb. 25.95b höher als in Abb. 25.95a.
<!-- page-import:1531:end -->

<!-- page-import:1532:start -->
25.6 Vergleich aktiver und passiver Mischer 1495

aktiver  
Mischer

$F = 6\,\mathrm{dB}$  
$IIP3 =$  
$-10\,\mathrm{dBm}$

$G = 10\,\mathrm{dB}$

$G_M = 10\,\mathrm{dB}$  
$F_M = 6\,\mathrm{dB}$  
$IIP3_M = -10\,\mathrm{dBm}$

aktiver  
Mischer

$F = 12\,\mathrm{dB}$  
$IIP3 =$  
$20\,\mathrm{dBm}$

$G = 10\,\mathrm{dB}$

$G_M = 10\,\mathrm{dB}$  
$F_M = 12\,\mathrm{dB}$  
$IIP3_M = 20\,\mathrm{dBm}$

passiver  
Mischer

$F = 8\,\mathrm{dB}$  
$IIP3 =$  
$-10\,\mathrm{dBm}$

Verstärker

$G = 10\,\mathrm{dB}$

$G_M = -6\,\mathrm{dB}$  
$F_M = 6\,\mathrm{dB}$  
$IIP3_M = -3\,\mathrm{dBm}$

$G_V = 16\,\mathrm{dB}$  
$F_V = 2\,\mathrm{dB}$  
$IIP3_V = -15\,\mathrm{dBm}$

passiver  
Mischer

$F = 10\,\mathrm{dB}$  
$IIP3 =$  
$20\,\mathrm{dBm}$

Verstärker

$G = 10\,\mathrm{dB}$

$G_M = -6\,\mathrm{dB}$  
$F_M = 6\,\mathrm{dB}$  
$IIP3_M = 23\,\mathrm{dBm}$

$G_V = 16\,\mathrm{dB}$  
$F_V = 4\,\mathrm{dB}$  
$IIP3_V = 17\,\mathrm{dBm}$

a geringer Dynamikbereich

b hoher Dynamikbereich

**Abb. 25.95.** Typische Werte für aktive und passive Mischer. Der Dynamikbereich wird wesentlich durch den Eingangs-Intercept-Punkt $IIP3$ bestimmt; die Unterschiede in den Rauschzahlen sind im Vergleich dazu gering.

## 25.6.2 Bandbreite

Diodenmischer erreichen die höchste Betriebsfrequenz und die größte Bandbreite. Oberhalb 10 GHz kann man nur noch Diodenmischer verwenden. Die Bandbreite der Dioden selbst reicht von Null bis zur oberen Grenzfrequenz, die durch die Kapazitäten der Dioden bestimmt wird. Bei Diodenmischern mit integrierten Übertragern wird die Bandbreite durch die Übertrager festgelegt. Da die obere Grenzfrequenz der Übertrager meist um den Faktor $10 \dots 100$ über der unteren Grenzfrequenz liegt, sind diese Mischer ebenfalls breitbandig. In Anwendungen mit höchsten Anforderungen an den Dynamikbereich oder hoher Bandbreite werden ausschließlich Diodenmischer eingesetzt; dazu gehören z.B. Messempfänger und Spektralanalysatoren.

Passive Fet-Mischer sind schmalbandig, da man die Kapazitäten der Fets durch Parallel-Induktivitäten in Resonanz nehmen muss; auch die Anpassung im LO-Kreis hängt stark von der Frequenz ab. Der Dynamikbereich ist oft noch größer als der von Diodenmischern; deshalb haben passive Fet-Mischer Diodenmischer aus allen schmalbandigen Anwendungen mit hohen Anforderungen an den Dynamikbereich verdrängt. Ein typisches Anwendungsfeld sind die Basisstationen der Mobilkommunikation.

Aktive Mischer können relativ breitbandig sein, wenn die Eingangsstufen in Basisschaltung oder in Emitterschaltung mit ohmscher Stromgegenkopplung ausgeführt sind und die Betriebsfrequenzen niedrig sind; in diesem Fall ist die Rauschzahl aber vergleichsweise hoch. Aktive Mischer mit induktiver Stromgegenkopplung sind schmalbandig, haben eine geringere Rauschzahl und meist auch einen höheren Intercept-Punkt. Aktive Mischer im inneren Teil einer integrierten Schaltung erreichen sehr hohe Bandbreiten, da hier nur die parasitären Kapazitäten der Transistoren und der internen Verbindungen wirksam werden und keine Anpassung erforderlich ist.
<!-- page-import:1532:end -->

<!-- page-import:1533:start -->
1496  25. Mischer

## 25.6.3 LO-Leistung

Bei Diodenmischern besteht eine direkte Verbindung zwischen der LO-Leistung und dem Intercept-Punkt; deshalb ist die benötigte LO-Leistung vor allem bei sehr hohen Anforderungen an den Dynamikbereich hoch.

Bei passiven Fet-Mischern ist die benötigte LO-Leistung proportional zur Frequenz und deshalb vor allem bei niedrigen LO-Frequenzen sehr gering. Im GHz-Bereich steigt die LO-Leistung auf das Niveau der Diodenmischer an.

Bei aktiven Mischern hängt die benötigte LO-Leistung stark von den Betriebsbedingungen ab. Der aktive Mischer selbst benötigt nur eine sehr geringe LO-Leistung, die aufgrund der Eingangskapazitäten der Schalttransistoren proportional zur Frequenz ist. Die tatsächlich benötigte LO-Leistung hängt davon ab, ob eine Anpassung im LO-Kreis erforderlich ist und wie diese hergestellt wird. Bei einfachen Ausführungen wird die Anpassung häufig mit einem Abschlusswiderstand hergestellt; in diesem Fall ist die benötigte LO-Leistung relativ hoch und wird fast ausschließlich im Abschlusswiderstand umgesetzt. Im inneren Teil einer integrierten Schaltung ist keine Anpassung erforderlich; dann wird nur die geringe LO-Leistung des aktiven Mischers selbst benötigt. Der aktive Mischer ist deshalb der bevorzugte Mischer in hochintegrierten Empfängerschaltungen für Mobiltelefone und andere mobile Terminals, die keine hohen Anforderungen an den Dynamikbereich stellen und deren Leistungsaufnahme möglichst gering sein muss.

## 25.7 Mischer mit Spiegelfrequenz-Unterdrückung

Im Abschnitt 25.1.3 haben wir das Funktionsprinzip eines Mischers mit Spiegelfrequenz-Unterdrückung beschrieben. Im folgenden beschreiben wir einige praktische Realisierungen. Wir beschränken uns dabei auf den Abwärtsmischer mit Spiegelfrequenz-Unterdrückung (image-rejection mixer, IRM) aus Abb. 25.8, der in Abb. 25.96a noch einmal dargestellt ist. Man kann den 90°-Phasenschieber aus dem LO-Kreis in den HF-Kreis verlegen, ohne dass sich die Funktion ändert; damit erhält man die Variante in Abb. 25.96b. Man beachte, dass die Phasenschieber 90° Phasennacheilung haben.

Für die beiden Mischer kann man im Prinzip jede der in den vorausgehenden Abschnitten beschriebene passive oder aktive Variante verwenden. Der Mischer mit Spiegelfrequenz-Unterdrückung wird überwiegend in hochintegrierten Empfängerschaltungen eingesetzt; in diesem Fall werden meist aktive Doppel-Gegentaktmischer (Gilbert-Mischer) und RC-Phasenschieber verwendet. In hochwertigen Empfängern werden diskrete Ausführungen mit passiven Mischern und Phasenschiebern mit LC-Elementen oder Streifenleitungen (Hybride) verwendet.

a mit Phasenschieber im LO-Kreis

b mit Phasenschieber im HF-Kreis

**Abb. 25.96.** Abwärtsmischer mit Spiegelfrequenz-Unterdrückung. Bei Subtraktion der Pfade arbeitet der Mischer in Gleichlage ($f_{HF} = f_{LO} + f_{ZF}$), bei Addition in Kehrlage ($f_{HF} = f_{LO} - f_{ZF}$). Die Phasenschieber haben 90° Phasennacheilung.
<!-- page-import:1533:end -->
