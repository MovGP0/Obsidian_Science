# Function Networks

<!-- page-import:0792:start -->
10.7 Funktionsnetzwerke 755

Da keine abgeleiteten Größen mehr vorkommen, ist das Verfahren beendet. Die letzte Gleichung (10.22) liefert die noch fehlende Beziehung für die als bekannt angenommene Ausgangsgröße $y$.

Die zur Lösung der Differentialgleichung notwendigen Rechenoperationen (10.18), (10.21), (10.22) lassen sich übersichtlich anhand eines Signalflussgraphen wie in Abb. 10.20 darstellen. Die zugehörige ausgeführte Analogrechenschaltung zeigt Abb. 10.21. Um einen zusätzlichen Umkehrverstärker zur Bildung des Ausdrucks $-k_1 \cdot y$ in Gl. (10.21) einzusparen, wurde von der Tatsache Gebrauch gemacht, dass nach Gl. (10.22) $z_1 = -y$ gilt.

## 10.7 Funktionsnetzwerke

Wir haben gezeigt, dass man mit einem Kondensator auf einfache Weise mit Hilfe eines Operationsverstärkers einen Integrator realisieren kann. Dabei integriert nicht der Operationsverstärker, sondern die Physik des Kondensators. Auf dieselbe Weise ist es möglich mit einem Bipolartransistor aufgrund seiner Kennlinie Logarithmierer aufzubauen.

### 10.7.1 Logarithmus

Ein Logarithmierer soll eine Ausgangsspannung liefern, die proportional zum Logarithmus der Eingangsspannung ist. Dazu kann man die Diodenkennlinie heranziehen:

$$
I_A = I_S \left(e^{\frac{U_{AK}}{nU_T}} - 1\right)
$$

(10.23)

Darin ist $I_S$ der Sättigungssperrstrom. $U_T$ ist die Temperaturspannung $kT/e_0$ und $n$ ein Korrekturfaktor, der zwischen 1 und 2 liegt. Im Durchlassbereich $I_A \gg I_S$ vereinfacht sich die Gl. (10.23) mit guter Genauigkeit zu:

$$
I_A = I_S e^{\frac{U_{AK}}{nU_T}}
$$

(10.24)

Daraus folgt:

$$
U_{AK} = nU_T \ln \frac{I_A}{I_S}
$$

(10.25)

also die gesuchte Logarithmus-Funktion. Die einfachste Möglichkeit, diese Beziehung zum Logarithmieren auszunutzen, besteht darin, einen Operationsverstärker wie in Abb. 10.22 mit einer Diode gegenzukoppeln. Der Operationsverstärker wandelt die Eingangsspannung $U_e$ in einen Strom $I_A = U_e/R_1$ um. Gleichzeitig stellt er die Ausgangsspannung $U_a = -U_{AK}$ niederohmig zur Verfügung. Damit wird:

$$
U_a = -nU_T \ln \frac{U_e}{I_S R_1} = -nU_T \ln 10 \cdot \lg \frac{U_e}{I_S R_1}
$$

(10.26)

$$
U_a = -(1 \ldots 2) \cdot 60\,\mathrm{mV} \cdot \lg \frac{U_e}{I_S R_1}
\qquad \text{bei Raumtemperatur}
$$

Der ausnutzbare Bereich wird durch zwei Effekte eingeschränkt: Die Diode besitzt einen parasitären ohmschen Serienwiderstand. Bei großen Strömen fällt an ihm eine nennenswerte Spannung ab und verfälscht die Logarithmierung. Außerdem ist der Korrekturfaktor $n$ stromabhängig. Eine befriedigende Genauigkeit lässt sich daher nur über ein bis zwei Dekaden der Eingangsspannung erreichen.
<!-- page-import:0792:end -->

<!-- page-import:0793:start -->
756 10. Analogrechenschaltungen

$U_a = -nU_T \ln \frac{U_e}{I_S R_1}$ für $U_e > 0$

**Abb. 10.22.**  
Logarithmierer mit Diode

$U_a = -U_T \ln \frac{U_e}{I_{CS} R_1}$ für $U_e > 0$

**Abb. 10.23.**  
Logarithmierer mit Transistor

Der ungünstige Einfluss des Korrekturfaktors $n$ lässt sich eliminieren, wenn man statt der Diode D einen Transistor T wie in Abb. 10.23 einsetzt. Für den Kollektorstrom gilt nach Gl. (2.2) von S. 38 für $I_C \gg I_{CS}$ die Beziehung:

$$
I_C = I_{CS}\, e^{U_{BE}/U_T}
$$

(10.27)

also:

$$
U_{BE} = U_T \ln I_C/I_{CS}
$$

(10.28)

Für die Ausgangsspannung des Transistor-Logarithmierers in Abb. 10.23 ergibt sich daraus:

$$
U_a = -U_{BE} = -U_T \ln \frac{U_e}{I_{CS} R_1}
$$

Neben der Elimination des Korrekturfaktors $n$ besitzt die Schaltung in Abb. 10.23 noch zwei weitere Vorteile: Es tritt keine Verfälschung durch den Kollektor-Basis-Sperrstrom auf, da $U_{CB} = 0$ ist. Außerdem geht die Größe der Stromverstärkung nicht in das Ergebnis ein, weil der Basisstrom nach Masse abfließt. Bei geeigneten Transistoren hat man einen Kollektorstrombereich vom pA- bis zum mA-Gebiet, also neun Dekaden, zur Verfügung. Man benötigt allerdings Operationsverstärker mit sehr niedrigen Eingangsströmen, wenn man diesen Bereich voll ausnutzen will.

Der Transistor T erhöht die Schleifenverstärkung der gegengekoppelten Anordnung um seine Spannungsverstärkung. Daher neigt die Schaltung zum Schwingen. Die Spannungsverstärkung des Transistors lässt sich ganz einfach dadurch herabsetzen, dass man wie in Abb. 10.24 einen Emitterwiderstand $R_E$ vorschaltet. Damit wird die Spannungsverstärkung des Transistors durch Stromgegenkopplung auf den Wert $R_1/R_E = 1$ begrenzt. Man darf $R_E$ natürlich nur so groß machen, dass der Ausgang des Operationsverstärkers bei den größten auftretenden Ausgangsströmen nicht übersteuert wird. Der Kondensator C kann die Stabilität der Schaltung durch differenzierende Gegenkopplung weiter verbessern. Dabei ist allerdings zu beachten, dass die obere Grenzfrequenz der Schaltung infolge der nichtlinearen Transistorkennlinie proportional zum Strom abnimmt.

Günstigere Verhältnisse ergeben sich, wenn man den Logarithmier-Transistor aus einer hochohmigen Stromquelle betreibt. Die Schleifenverstärkung beträgt dann $S \cdot R_1$, wobei $S$ die Steilheit der Ansteuerschaltung ist. Da sie vom Kollektorstrom unabhängig ist, lässt sich die Frequenzgang-Korrektur für den ganzen Strombereich optimieren. Operationsverstärker, die einen Stromausgang besitzen, sind die VC- und CC-Operationsverstärker (s. Kap. 5).
<!-- page-import:0793:end -->

<!-- page-import:0794:start -->
10.7 Funktionsnetzwerke 757

$$
U_a=-U_T\ln\frac{U_e}{I_{CS}R_1}\qquad \text{für } U_e>0
$$

**Abb. 10.24.**  
Praktische Ausführung eines Logarithmierers

$$
U_a=-26\,\text{mV}\ln\frac{U_e}{10\,\text{pV}}\qquad \text{für } U_e>0
$$

**Abb. 10.25.**  
Ideale und reale Kennlinie

Die Diode D in Abb. 10.24 verhindert eine Übersteuerung des Operationsverstärkers bei negativen Eingangsspannungen. Dadurch wird eine Beschädigung des Transistors T durch zu hohe Emitter-Basis-Sperrspannung vermieden und die Erholzeit verkürzt.

Die Kennlinie in Abb. 10.25 zeigt, dass man beim Logarithmierer die Tatsache ausnutzt, dass Basis-Emitter-Spannung nicht immer 0,6 V beträgt, sondern betragsmäßig um 60 mV zunimmt, wenn sich der Strom verzehnfacht. Die Abweichung der realen Kennlinie des Transistors kommt von seinem Basisbahnwiderstand, an dem bei großen Strömen ein zusätzlicher Spannungsabfall auftritt.

Ein Nachteil der beschriebenen Logarithmierer ist ihre starke Temperaturabhängigkeit. Sie rührt daher, dass sich $U_T$ und $I_{CS}$ stark mit der Temperatur ändern. Bei einer Temperaturerhöhung von $20^\circ\text{C}$ auf $50^\circ\text{C}$ nimmt $U_T$ um 10% zu, während sich der Sperrstrom etwa verzehnfacht. Der Einfluss des Sperrstroms lässt sich eliminieren, wenn man die Differenz zweier Logarithmen bildet. Davon machen wir bei der Schaltung in Abb. 10.26 Gebrauch. Hier dient der Differenzverstärker T$_1$, T$_2$ zur Logarithmierung. Um die Wirkungsweise der Schaltung zu untersuchen, ermitteln wir die Stromaufteilung im Differenzverstärker. Aus der Maschenregel folgt:

$$
U_1+U_{BE2}-U_{BE1}=0
$$

$$
U_a=-U_T\cdot\frac{R_3+R_2}{R_2}\ln\frac{U_e}{U_{ref}}\qquad \text{für } U_e,U_{ref}>0
$$

**Abb. 10.26.** Temperaturkompensierter Logarithmierer
<!-- page-import:0794:end -->

<!-- page-import:0795:start -->
758 10. Analogrechenschaltungen

Die Übertragungskennlinien der Transistoren lauten:

$$
I_{C1} = I_{CS} e^{\frac{U_{BE1}}{U_T}}
$$

$$
I_{C2} = I_{CS} e^{\frac{U_{BE2}}{U_T}}
$$

Daraus ergibt sich:

$$
\frac{I_{C1}}{I_{C2}} = e^{\frac{U_1}{U_T}}
\qquad\qquad (10.29)
$$

Aus Abb. 10.26 entnehmen wir die weiteren Beziehungen

$$
I_{C2} = \frac{U_e}{R_1}
\qquad
I_{C1} = \frac{U_{ref}}{R_1}
\qquad
U_1 = \frac{R_2}{R_3 + R_2} U_a
$$

wenn man $R_2$ nicht zu hochohmig wählt. Durch Einsetzen erhalten wir die Ausgangsspannung:

$$
U_a = -U_T \frac{R_3 + R_2}{R_2} \ln \frac{U_e}{U_{ref}}
\qquad\qquad (10.30)
$$

Der Wert von $R_4$ geht nicht in das Ergebnis ein. Man wählt ihn so groß, dass der Spannungsabfall an ihm kleiner bleibt als die Ausgangsaussteuerbarkeit des Operationsverstärkers OV 2.

Häufig benötigt man Logarithmierer, die eine Ausgangsspannung von 1 V/Dekade liefern. Zur Ermittlung der Dimensionierung von $R_2$ und $R_3$ für diesen Sonderfall formen wir die Gl. (10.30) um:

$$
U_a = -U_T \frac{R_3 + R_2}{R_2} \cdot \frac{1}{\lg e} \cdot \lg \frac{U_e}{U_{ref}}
= -1\,\mathrm{V}\,\lg \frac{U_e}{U_{ref}}
$$

Daraus folgt mit $U_T = 26\,\mathrm{mV}$ die Bedingung:

$$
\frac{R_3 + R_2}{R_2} = \frac{1\,\mathrm{V}\cdot \lg e}{U_T} \approx 16{,}7
$$

Wählt man $R_2 = 1\,\mathrm{k}\Omega$, ergibt sich $R_3 = 15{,}7\,\mathrm{k}\Omega$.

## 10.7.2 Exponentialfunktion

Abbildung 10.27 zeigt einen e-Funktionsgenerator, der ganz analog aufgebaut ist zu dem Logarithmierer in Abb. 10.23. Legt man eine negative Eingangsspannung an, fließt nach Gl. (10.27) durch den Transistor der Strom:

$$
I_C = I_{CS} e^{\frac{U_{BE}}{U_T}} = I_{CS} e^{-\frac{U_e}{U_T}}
$$

und man erhält die Ausgangsspannung:

**Abb. 10.27.**  
Einfacher e-Funktionsgenerator

$$
U_a = I_{CS} R_1 e^{-\frac{U_e}{U_T}}
\qquad \text{für } U_e < 0
$$
<!-- page-import:0795:end -->

<!-- page-import:0796:start -->
10.7 Funktionsnetzwerke

759

$U_a = U_{\mathrm{ref}}\,e^{\frac{R_2}{R_3+R_2}\cdot\frac{U_e}{U_T}} \qquad \text{für } U_{\mathrm{ref}} > 0$

**Abb. 10.28.** Temperaturkompensierter e-Funktionsgenerator

$$
U_a = I_C R_1 = I_{CS} R_1 e^{-\frac{U_e}{U_T}}
$$

Wie bei dem Logarithmierer in Abb. 10.26 lässt sich auch hier die Temperaturstabilität durch den Einsatz eines Differenzverstärkers verbessern. Die entsprechende Schaltung ist in Abb. 10.28 dargestellt. Nach Gl. (10.29) gilt wieder:

$$
\frac{I_{C1}}{I_{C2}} = e^{\frac{U_1}{U_T}}
$$

Aus Abb. 10.28 entnehmen wir die weiteren Beziehungen:

$$
I_{C1} = \frac{U_a}{R_1}
\qquad
I_{C2} = \frac{U_{\mathrm{ref}}}{R_1}
\qquad
U_1 = \frac{R_2}{R_3+R_2} U_e
$$

Durch Einsetzen erhalten wir die Ausgangsspannung:

$$
U_a = U_{\mathrm{ref}}\,e^{\frac{R_2}{R_3+R_2}\cdot\frac{U_e}{U_T}}
\eqno{(10.31)}
$$

Man erkennt, dass $I_{CS}$ nicht mehr in das Ergebnis eingeht, wenn die Transistoren gut gepaart sind. Der Widerstand $R_4$ begrenzt den Strom durch die Transistoren T$_1$ und T$_2$. Seine Größe geht nicht in das Ergebnis ein, solange der Operationsverstärker OV 2 nicht übersteuert wird.

Eine besonders wichtige Dimensionierung ist die, dass sich die Ausgangsspannung um eine Dekade (Faktor 10) erhöht, wenn die Eingangsspannung um 1 V zunimmt. Die dafür erforderliche Bedingung lässt sich aus Gl. (10.31) ableiten:

$$
U_a = U_{\mathrm{ref}}\cdot 10^{\frac{R_2}{R_3+R_2}\frac{U_e}{U_T}\cdot \lg e}
= U_{\mathrm{ref}}\cdot 10^{\frac{U_e}{1\,\mathrm{V}}}
$$

Daraus folgt mit $U_T = 26\,\mathrm{mV}$

$$
\frac{R_3+R_2}{R_2} = \frac{1\,\mathrm{V}\cdot \lg e}{U_T} \approx 16{,}7
$$

also dieselbe Dimensionierung wie beim Logarithmierer in Abb. 10.26. Die beschriebenen Exponentialfunktionsgeneratoren gestatten es, einen Ausdruck der Form

$$
y = e^{ax}
$$

zu bilden. Aufgrund der Identität
<!-- page-import:0796:end -->

<!-- page-import:0797:start -->
760  10. Analogrechenschaltungen

$U_a = U_{\mathrm{ref}} \left(\frac{U_e}{U_{\mathrm{ref}}}\right)^a \qquad \text{für } U_e > 0$

**Abb. 10.29.** Allgemeine Potenzfunktion

$$
b^{ax} = \left(e^{\ln b}\right)^{ax} = e^{ax \ln b}
$$

kann man damit auch Exponentialfunktionen zu einer beliebigen Basis $b$ gemäß

$$
y = b^{ax}
$$

berechnen, indem man das Eingangssignal $x$ mit dem Faktor $\ln b$ verstärkt und in den $e$-Funktionsgenerator gibt.

## 10.7.3 Bildung von Potenzfunktionen über Logarithmen

Die Berechnung von Potenzen der Form

$$
y = x^a
$$

lässt sich für $x > 0$ mit Hilfe von Logarithmierern und $e$-Funktionsgeneratoren durchführen. Dazu verwendet man die Identität:

$$
x^a = \left(e^{\ln x}\right)^a = e^{a \ln x}
$$

Die prinzipielle Anordnung ist in Abb. 10.29 gezeigt. Die eingetragenen Gleichungen gelten für den Logarithmierer in Abb. 10.26 und den $e$-Funktionsgenerator in Abb. 10.28 mit $R_2 = \infty$ und $R_3 = 0$. Damit erhalten wir die Ausgangsspannung:

$$
U_a = U_{\mathrm{ref}} e^{\frac{aU_T \ln \frac{U_e}{U_{\mathrm{ref}}}}{U_T}} = U_{\mathrm{ref}} \left(\frac{U_e}{U_{\mathrm{ref}}}\right)^a
$$

Die Potenzierung über Logarithmen ist grundsätzlich nur für positive Eingangsspannungen definiert. Bei ganzzahligem Exponenten $a$ sind rein mathematisch gesehen auch bipolare Eingangssignale zugelassen. Dieser Fall lässt sich schaltungstechnisch dadurch realisieren, dass man Multiplizierer verwendet, wie sie im Abschnitt 10.8 noch beschrieben werden.

**Abb. 10.30.** Blockschaltbild zur Multiplikation und Division über Logarithmen
<!-- page-import:0797:end -->
