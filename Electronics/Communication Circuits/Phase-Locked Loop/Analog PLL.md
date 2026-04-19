# Analog PLL

<!-- page-import:1662:start -->
27.2 Analoge PLL

# 27.2 Analoge PLL

Die Beschreibung der Funktionsweise einer PLL unterscheidet sich deutlich von der Beschreibung anderer Regelkreise. Das liegt daran, dass hier nicht die Signale — repräsentiert durch Spannungen und/oder Ströme in einer Schaltung —, sondern die *Phasen* der Signale von Interesse sind; zudem ist das Großsignalverhalten sehr komplex und kann nicht geschlossen angegeben werden. Wir beschreiben die Funktionsweise deshalb zunächst anschaulich am Beispiel einer analogen PLL.

Abbildung 27.4 zeigt das Blockschaltbild und Schaltungsbeispiele für die Komponenten einer analogen PLL. Das Blockschaltbild in Abb. 27.4a zeigt die relevanten Signale:

- das Eingangssignal $s(t)$, das die Führungsgröße des Regelkreises bildet;
- das Ausgangssignal $e(t)$ des Mischers, das der Regelabweichung (*error*) entspricht;
- das Ausgangssignal $e_{LF}(t)$ des Schleifenfilters (*loop filter, LF*);
- das Ausgangssignal $s_{VCO}(t)$ des VCOs, das der Regelgröße entspricht.

Im regelungstechnischen Sinne entspricht das Schleifenfilter dem Regler und der VCO der Regelstrecke, diese Begriffe werden jedoch in der Praxis nicht verwendet.

Das Eingangssignal $s(t)$ und das Ausgangssignal $s_{VCO}(t)$ sind hochfrequente Signale, bei denen die Frequenz bzw. die Phase die relevante Größe ist. Die Signale $e(t)$ und $e_{LF}(t)$ setzen sich aus einem niederfrequenten Nutzanteil, der im eingeschwungenen Zustand konstant ist, und einem hochfrequenten Störanteil zusammen. Das Schleifenfilter hat neben seiner Funktion als Regler die Aufgabe, den hochfrequenten Störanteil möglichst gut zu unterdrücken, damit der VCO nicht durch den Störanteil moduliert wird. Die Umsetzung zwischen den hochfrequenten und den niederfrequenten Signalen erfolgt im Mischer, der hier als Phasen-Spannungs-Wandler arbeitet, und im VCO, der als Spannungs-Frequenz-Wandler arbeitet. Da die Phase $\varphi_{VCO}(t)$ des VCOs gemäß

$$
\omega_{VCO}(t) = 2\pi f_{VCO}(t) = \frac{d\varphi_{VCO}(t)}{dt}
\Rightarrow
\varphi_{VCO}(t) = 2\pi \int_{-\infty}^{t} f_{VCO}(t_1)\,dt_1
\qquad (27.1)
$$

durch Integration über die Frequenz gebildet wird, hat der VCO ein integrierendes Verhalten, wenn man die Phase als Ausgangsgröße betrachtet.

## 27.2.1 Komponenten

In den Abbildungen 27.4b–d sind Schaltungsbeispiele für den Mischer, das Schleifenfilter und den VCO dargestellt. Als Mischer dient der Doppel-Gegentaktmischer (Gilbert-Mischer) aus Abb. 25.80 auf Seite 1480 mit den Transistoren $T_1 \ldots T_6$. Die differentiellen Eingänge des Mischers werden über die Kapazitäten $C_{1a}$ bzw. $C_{2a}$ unsymmetrisch angesteuert; der jeweils komplementäre Eingang ist über die Kapazitäten $C_{1b}$ bzw. $C_{2b}$ kleinsignalmäßig kurzgeschlossen. Mit der Stromquelle $I_1$ und dem Widerstand $R_1$ werden die Ausgangsspannung im Arbeitspunkt und die Verstärkung eingestellt. Das Ausgangssignal wird über den Emitterfolger $T_7$ ausgekoppelt. Mit den Widerständen und Kapazitäten rechts des Mischers werden die Arbeitspunktspannungen $U_{B1}$ und $U_{B2}$ eingestellt. Als Schleifenfilter kann man ein passives oder ein aktives Filter verwenden; Abb. 27.4c zeigt entsprechende Beispiele. Bei dem aktiven Filter handelt es sich um das Tiefpassfilter 3. Ordnung aus Abb. 12.46 auf Seite 825, bei dem wir anstelle des Operationsverstärkers einen Emitterfolger als einfachen Impedanzwandler eingesetzt haben. Als VCO dient ein Clapp-Oszillator mit Frequenzabstimmung.
<!-- page-import:1662:end -->

<!-- page-import:1663:start -->
1626  27. Phasenregelschleife (PLL)

a  Blockschaltbild und Signale

$s(t)$ → $e(t)$ → $e_{LF}(t)$ → VCO → $s_{VCO}(t)$

b  Beispiel für die Ausführung des Mischers

$C_{1a}$  
$C_{2a}$  
$T_1\ T_2\ T_3\ T_4\ T_5\ T_6\ T_7$  
$I_1 \approx I_0/2$  
$R_1$  
$s(t)$  
$s_{VCO}(t)$  
$e(t)$  
$C_{1b}$  
$C_{2b}$  
$U_{B1}$  
$U_{B2}$  
$I_0$

c  Beispiele für Schleifenfilter (passiv und aktiv)

$e(t)$ → $e_{LF}(t)$

d  Beispiel für einen einfachen VCO

$e_{LF}(t)$  
$s_{VCO}(t)$

**Abb. 27.4.** Blockschaltbild und Schaltungsbeispiele für die Komponenten einer analogen PLL

## 27.2.2 Kennlinie des Mischers als Phasendetektor

Der Mischer aus Abb. 27.4 multipliziert die Signale $s(t)$ und $s_{VCO}(t)$:

$$
s(t) = \hat{s}\cos(\omega_S t + \phi_S)
$$

$$
s_{VCO}(t) = \hat{s}_{VCO}\cos(\omega_{VCO} t + \phi_{VCO})
$$

$$
\Rightarrow \quad e(t) = k_M\, s(t)\, s_{VCO}(t)
$$
<!-- page-import:1663:end -->

<!-- page-import:1664:start -->
27.2 Analoge PLL 1627

Dabei ist $k_M$ der Verstärkungsfaktor des Mischers, $\omega_S = 2\pi\, f_S$ die Frequenz des relevanten Anteils im Eingangssignals $s(t)$ und $\omega_{VCO} = 2\pi\, f_{VCO}$ die Frequenz des VCO. Da im folgenden nur die *Phasendifferenz*

$$
\phi_e = \phi_S - \phi_{VCO}
$$

von Interesse ist, können wir ohne Beschränkung der Allgemeinheit annehmen, dass die Phase $\phi_S$ des Eingangssignals $s(t)$ gleich Null ist; dann gilt $\phi_e = -\phi_{VCO}$ und:

$$
e(t) = k_M\, \hat{s}\, \hat{s}_{VCO}\, \cos(\omega_S t)\, \cos(\omega_{VCO} t - \phi_e)
$$

Mit dem Produkt-Theorem

$$
\cos x\, \cos y = \frac{1}{2}\,[\cos(x-y)+\cos(x+y)]
$$

erhalten wir:

$$
e(t) = \frac{k_M\, \hat{s}\, \hat{s}_{VCO}}{2}\,\left[\cos((\omega_S-\omega_{VCO})\,t+\phi_e)+\cos((\omega_S+\omega_{VCO})\,t-\phi_e)\right]
\qquad (27.3)
$$

Amplitude $\hat{e}$

Anteil bei der Differenzfrequenz  
$\Delta f = f_S - f_{VCO}$

Anteil bei der Summenfrequenz  
$f_S + f_{VCO}$

Damit die PLL einschwingen kann, muss die Frequenz $f_S$ in der Nähe der VCO-Frequenz liegen: $f_S \approx f_{VCO}$; daraus folgt:

$$
\Delta f = f_S - f_{VCO} \ll f_S < f_S + f_{VCO} \approx 2f_S
$$

Das Schleifenfilter wird so ausgelegt, dass der Anteil bei der Differenzfrequenz $\Delta f$ im Durchlassbereich und der Anteil bei der wesentlich höheren Summenfrequenz im Sperrbereich liegt; dann gilt für das Signal am Ausgang des Schleifenfilters mit der Übertragungsfunktion $H_{LF}(s)$:

$$
e_{LF}(t) = |H_{LF}(j\,2\pi\,\Delta f)|\, \hat{e}\, \cos\left(2\pi\,\Delta f\,t+\phi_e+\arg\{H_{LF}(j\,2\pi\,\Delta f)\}\right)
$$

Bei einem passiven Schleifenfilter hat die Verstärkung im Durchlassbereich etwa den Betrag Eins und eine lineare Phase:

$$
|H_{LF}(j\,2\pi\,\Delta f)| \approx 1 \qquad,\qquad \arg\{H_{LF}(j\,2\pi\,\Delta f)\} \approx -2\pi\,\Delta f\,\tau_0
$$

Dabei ist $\tau_0$ die Gruppenlaufzeit des Schleifenfilters bei niedrigen Frequenzen. Damit erhalten wir:

$$
e_{LF}(t) = \hat{e}\, \cos\left(2\pi\,\Delta f\,(t-\tau_0)+\phi_e\right)
\qquad (27.4)
$$

Das Signal $e_{LF}(t)$ steuert die VCO-Frequenz $f_{VCO}$. Da jede Änderung von $e_{LF}(t)$ eine Änderung von $f_{VCO}$ verursacht, die ihrerseits eine Änderung der Differenzfrequenz $\Delta f$ bewirkt, ist $e_{LF}(t)$ kein sinusförmiges Signal, wie (27.4) suggeriert, sondern ein frequenzmoduliertes Signal. Daraus resultiert ein komplexer nichtlinearer Einschwingvorgang, den wir im Abschnitt 27.2.13 noch näher beschreiben werden.

Wenn die PLL einschwingt, erhält man im eingeschwungenen Zustand $f_S = f_{VCO}$ und $\Delta f = 0$; das Ausgangssignal des Schleifenfilters ist in diesem Fall konstant:

$$
e_{LF}(t) = \hat{e}\, \cos \phi_e
$$
<!-- page-import:1664:end -->

<!-- page-import:1665:start -->
1628  27. Phasenregelschleife (PLL)

**Abb. 27.5.**  
Messung der Kennlinie eines  
Phasendetektors am Beispiel  
eines Mischers

Der Mischer arbeitet dann als Phasendetektor mit der Kennlinie:

$$
g_{PD}(\phi_e)=\hat e \cos \phi_e
\qquad \text{mit } \hat e=\frac{k_M\,\hat s\,\hat s_{VCO}}{2}
$$

(27.5)

Dass wir die Kennlinie aus dem Signal $e_{LF}(t)$ am Ausgang des Schleifenfilters ermitteln können, hängt mit der Definition der Kennlinie eines Phasendetektors zusammen:

*Die Kennlinie eines Phasendetektors entspricht dem Gleichanteil (Mittelwert) des Ausgangssignals in Abhängigkeit von der Phasenverschiebung $\phi_e$ der beiden Eingangssignale bei gleicher Frequenz.*

Ein Schleifenfilter mit $|H_{LF}(0)| = 1$ bildet genau diesen Gleichanteil bzw. Mittelwert; deshalb entspricht unsere Vorgehensweise bei der Berechnung genau der Vorgehensweise bei der praktischen Messung einer Phasendetektor-Kennlinie, siehe Abb. 27.5.

Wir haben den Mischer aus Abb. 27.4b für eine Betriebsspannung von 5 V dimensioniert und die Kennlinie gemäß Abb. 27.5 simuliert $^1$; Abb. 27.6a zeigt das Ergebnis. Man erkennt den kosinus-förmigen Verlauf aus (27.5), der hier allerdings um die Arbeitspunktspannung am Ausgang des Mischers (ca. 3,5 V) nach oben verschoben ist. Die Amplitude $\hat e$ beträgt etwa 0,65 V.

## 27.2.3 Phasendetektor-Konstante des Mischers

Für die Untersuchung des Kleinsignalverhaltens wird die Steilheit der Kennlinie in einem Arbeitspunkt A benötigt, die als Phasendetektor-Konstante $k_{PD}$ bezeichnet wird:

$$
k_{PD}=\left.\frac{d\,g_{PD}(\phi_e)}{d\phi_e}\right|_{\phi_e=\phi_{e,A}}
$$

(27.6)

Für den Mischer erhalten wir aus (27.5):

$$
k_{PD}=-\hat e \sin \phi_{e,A}
$$

(27.7)

Abbildung 27.6b zeigt den Verlauf von $k_{PD}$ für das Beispiel; dabei haben wir zusätzlich zur y-Achse mit der Einheit V/rad eine weitere y-Achse mit der Einheit V/Grad eingezeichnet. Zur Unterscheidung bezeichnen wir eine Angabe in V/Grad mit dem Formelzeichen $k^\circ_{PD}$; es gilt:

$$
2\pi\,k_{PD}=360^\circ \cdot k^\circ_{PD}
\quad \Rightarrow \quad
k^\circ_{PD}=\frac{2\pi\,k_{PD}}{360^\circ}=0{,}01745\ \text{rad/Grad}\cdot k_{PD}
$$

---

$^1$ Die zugehörige Simulation *Mischer* finden Sie in den Simulationsbeispielen unter der Rubrik *PLL*.
<!-- page-import:1665:end -->

<!-- page-import:1666:start -->
27.2 Analoge PLL 1629

a Kennlinie $g_{PD}(\phi_e)$

b Steilheit $k_{PD}$ = Ableitung der Kennlinie

**Abb. 27.6.** Beispiel für die Kennlinie und die Steilheit eines Mischers bei Betrieb als Phasendetektor

## 27.2.4 Arbeitspunkt des Mischers

Wir haben in Abb. 27.6 ein Beispiel für mögliche Arbeitspunkte eingezeichnet. Im Arbeitspunkt gilt $f_S = f_{VCO}$; dazu muss am Ausgang des Mischers ein konstanter Wert $g_{PD,A}$ anliegen, der — nach Durchgang durch das Schleifenfilter — den VCO auf die Eingangsfrequenz $f_S$ einstellt. Wir nehmen hier an, dass dies für $g_{PD,A} = 3{,}5\,\mathrm{V}$ der Fall ist. Aus Abb. 27.6a entnehmen wir, dass es zwei mögliche Arbeitspunkte gibt: $A_1$ und $A_2$. Die Arbeitspunkte unterscheiden sich in der Phasendifferenz $(\phi_{e,A1}$ bzw. $\phi_{e,A2})$ und im Vorzeichen der Phasendetektor-Konstante: $k_{PD1} = -k_{PD2}$. Daraus folgt für den Regelkreis, dass einer der beiden Arbeitspunkte stabil ist (Gegenkopplung), während der andere instabil ist (Mitkopplung). Welcher Arbeitspunkt stabil und welcher instabil ist, hängt von den anderen Komponenten im Regelkreis ab; wir können diese Frage demnach nur im Zusammenhang mit der Kennlinie des VCOs und der Gleichspannungsverstärkung des Schleifenfilters beantworten. Letztere kann bei aktiven Filtern auch negativ sein. Entscheidend ist also, in welchem der beiden möglichen Arbeitspunkte eine Gegenkopplung vorliegt.

Für den praktischen Betrieb einer analogen PLL bedeutet dies, dass man den Regelkreis vor der Inbetriebnahme nicht auf Gegenkopplung prüfen muss. Wenn es überhaupt mögliche Arbeitspunkte gibt, stellt sich der Regelkreis automatisch auf den stabilen Arbeitspunkt ein. Den jeweils anderen Arbeitspunkt erhält man dann, indem man die Eingänge des Mischers vertauscht. Bei Anwendungen, bei denen nur die Frequenz von Interesse ist, sind die beiden Arbeitspunkte gleichwertig.

## 27.2.5 Kennlinie des VCOs

Wir haben den VCO aus Abb. 27.4d für eine Betriebsspannung von $5\,\mathrm{V}$ und eine Frequenz im Bereich von $10\,\mathrm{MHz}$ dimensioniert und die Abstimmkennlinie $f_{VCO}(U_A)$ simuliert 2; Abb. 27.7a zeigt das Ergebnis.

2 Die zugehörigen Simulationen VCO und VCO_Osz finden Sie in den Simulationsbeispielen unter der Rubrik PLL.
<!-- page-import:1666:end -->

<!-- page-import:1667:start -->
1630 27. Phasenregelschleife (PLL)

a Kennlinie $f_{VCO}(U_A)$

b Steilheit $k_{VCO}$ = Ableitung der Kennlinie

**Abb. 27.7.** Beispiel für die Kennlinie und die Steilheit eines VCOs

## 27.2.6 VCO-Konstante

Für die Untersuchung des Kleinsignalverhaltens wird die Steilheit der Kennlinie in einem Arbeitspunkt A benötigt, die als *VCO-Konstante* $k_{VCO}$ bezeichnet wird:

$$
k_{VCO}=\left.\frac{d f_{VCO}(U_A)}{dU_A}\right|_{U_A=U_{A,A}}
$$

(27.8)

Abbildung 27.7b zeigt den Verlauf von $k_{VCO}$ für das Beispiel; dabei haben wir zusätzlich zur y-Achse mit der Einheit (Mrad/s)/V eine weitere y-Achse mit der Einheit MHz/V eingezeichnet. Zur Unterscheidung bezeichnen wir eine Angabe in MHz/V mit dem Formelzeichen $k^f_{VCO}$; es gilt:

$$
k_{VCO}=2\pi\,k^f_{VCO}
$$

Man erkennt, dass der Verlauf stark nichtlinear ist. Die Steilheit variiert im dargestellten Abstimmbereich $U_A = 1 \dots 5\,\mathrm{V}$ um den Faktor 5.

## 27.2.7 Arbeitspunkt der PLL

Abbildung 27.8 zeigt die Gesamtschaltung des Beispiels. Ohne Eingangssignal erhalten wir am Ausgang des Mischers die Arbeitspunktspannung von 3,5 V und am Ausgang des Schleifenfilters eine Spannung von 2,5 V; damit folgt aus Abb. 27.7a eine Leerlauffrequenz von $f_{VCO} \approx 10\,\mathrm{MHz}$. Im Arbeitspunkt gilt $|k_{PD}| \approx 680\,\mathrm{mV/rad}$ und $k_{VCO} \approx 3{,}8\,\mathrm{Mrad/(Vs)}$. Da die Gleichspannungsverstärkung des Schleifenfilters und die VCO-Konstante größer Null sind, muss auch die Phasendetektor-Konstante $k_{PD}$ größer Null sein, damit eine Gegenkopplung vorliegt; wir erhalten demnach einen Arbeitspunkt im ansteigenden Teil der Kennlinie des Phasendetektors entsprechend dem Punkt A2 in Abb. 27.6.

Die Phasenverschiebung im Arbeitspunkt beträgt allgemein:

$$
\phi_{e,A}=\phi_{S,A}-\phi_{VCO,A}
$$
<!-- page-import:1667:end -->

<!-- page-import:1668:start -->
27.2 Analoge PLL 1631

Abb. 27.8. Gesamtschaltung der analogen PLL des Beispiels

Da auch hier wieder nur die Phasendifferenz von Interesse ist, können wir die Phase $\phi_{S,A}$ des Eingangssignals $s(t)$ ohne Beschränkung der Allgemeinheit zu Null setzen; dann gilt:

$$
\phi_{e,A} = -\phi_{VCO,A}
$$

Für das Beispiel gilt $\phi_{e,A} = 270^\circ$.

## 27.2.8 Regelungstechnisches Kleinsignalersatzschaltbild

Abbildung 27.9 zeigt das regelungstechnische Kleinsignalersatzschaltbild der PLL mit:

- der Phasendetektor-Konstante $k_{PD}$ aus (27.6);
- dem Schleifenfilter $H_{LF}(s)$;
- der VCO-Konstanten $k_{VCO}$ aus (27.8);
- einem Integrator $1/s$ zur Beschreibung des Zusammenhangs zwischen VCO-Frequenz und VCO-Phase gemäß (27.1).
<!-- page-import:1668:end -->

<!-- page-import:1669:start -->
1632  27. Phasenregelschleife (PLL)

**Abb. 27.9.**  
Regelungstechnisches Kleinsignalersatzschaltbild einer analogen PLL

Für die Kleinsignalgrößen im Arbeitspunkt A gilt:

$$
\varphi_S = \phi_S - \phi_{S,A}^{\phi_{S,A}=0} = \phi_S,\quad
\varphi_{VCO} = \phi_{VCO} - \phi_{VCO,A},\quad
\varphi_e = \phi_e - \phi_{e,A}
$$

Aufgrund der Annahme $\phi_{S,A} = 0$ müssen wir beim Eingangssignal nicht zwischen der Großsignalphase $\phi_S$ und der Kleinsignalphase $\varphi_S$ unterscheiden. Beim VCO-Signal ist dagegen eine klare Trennung erforderlich, um Fehlinterpretationen zu vermeiden. Wir werden im folgenden sehen, dass für alle PLLs im eingeschwungenen Zustand $\varphi_S = \varphi_{VCO}$ gilt, d.h. die Kleinsignalphasen des Eingangssignals und des VCO-Signals sind identisch. Für die Anwendung einer PLL ist jedoch die Großsignalphase $\phi_{VCO}$ entscheidend, für die im eingeschwungenen Zustand

$$
\phi_{VCO} = \phi_{VCO,A} + \varphi_{VCO}
\qquad
\overset{\phi_{VCO,A}=-\phi_{e,A}}{\underset{\varphi_{VCO}=\varphi_S=\phi_S}{=}}
\qquad
\phi_S - \phi_{e,A}
$$

gilt. Aus der Regelungstechnik ist bekannt, dass bei einem stabilen Regelkreis im eingeschwungenen Zustand keine Regelabweichung auftritt, d.h. die Eingangs- gleich der Ausgangsgröße ist, wenn der Vorwärtszweig mindestens einen Integrator enthält. Das ist bei einer PLL aufgrund des Zusammenhangs zwischen VCO-Frequenz und VCO-Phase zwar immer erfüllt, führt hier aber nur dazu, dass die *Kleinsignal*-Regelabweichung $\varphi_e$ zu Null wird, während die *Großsignal*-Regelabweichung $\phi_{e,A}$ im allgemeinen einen Wert ungleich Null annimmt. Damit auch die Großsignal-Regelabweichung generell zu Null wird, d.h. die Großsignalphasen des Eingangs- und des VCO-Signals übereinstimmen, muss der Vorwärtszweig einen weiteren Integrator enthalten. Die Großsignal-Regelabweichung wird in diesem Zusammenhang auch als *statische Regelabweichung* bezeichnet. Wir kommen darauf im folgenden noch zurück.

## 27.2.9 Übertragungsfunktionen

Aus dem Kleinsignalersatzschaltbild in Abb. 27.9 erhalten wir die Übertragungsfunktionen

$$
H_{ol}(s)=k_{PD}\,k_{VCO}\,\frac{H_{LF}(s)}{s}
$$

der offenen Schleife (*open-loop*) und

$$
H_{cl}(s)=\frac{\varphi_{VCO}(s)}{\varphi_S(s)}
=\frac{H_{ol}(s)}{1+H_{ol}(s)}
=\frac{1}{1+\dfrac{s}{k_{PD}\,k_{VCO}\,H_{LF}(s)}}
\qquad (27.9)
$$

der geschlossenen Schleife (*closed-loop*). Für das Schleifenfilter 3. Ordnung aus Abb. 27.8, das in der Regelungstechnik als P-T3-Regler bezeichnet wird, gilt bei reellen Polen:

$$
H_{LF}(s)=\frac{H_0}{(1+s\,T_1)(1+s\,T_2)(1+s\,T_3)}
\qquad (27.10)
$$

In der dargestellten Form gilt $H_0 \approx 1$. Wir können $H_0$ aber dadurch verringern, dass wir einen Spannungsteiler zwischen Schleifenfilter und VCO einfügen; wir betrachten deshalb $H_0$ als freien Parameter mit der Einschränkung $0 < H_0 < 1$.
<!-- page-import:1669:end -->

<!-- page-import:1670:start -->
27.2 Analoge PLL 1633

Die Pole des Schleifenfilters setzen sich aus einem dominanten Pol mit der Zeitkonstanten $T_1$ und zwei nicht-dominanten Polen mit den Zeitkonstanten $T_2 \ll T_1$ und $T_3 \ll T_1$ zusammen. In diesem Fall können wir bei der Auslegung des Regelkreises das Verfahren der Summenzeitkonstante anwenden, indem wir die Pole zu einem Pol mit der Summenzeitkonstante

$$
T_0 = T_1 + T_2 + T_3
$$

zusammenfassen; damit erhalten wir für das Schleifenfilter die Näherung

$$
H_{LF}(s) \approx \frac{H_0}{1 + sT_0}
$$

und für die geschlossene Schleife unter Verwendung von (27.9) ein System 2. Ordnung mit der Kennfrequenz $\omega_0 = 2\pi f_0$ und der Güte $Q$:

$$
H_{cl}(s) \approx \frac{1}{1 + \frac{s(1+sT_0)}{k_{PD}\,k_{VCO}\,H_0}} = \frac{1}{1 + \frac{s}{Q\omega_0} + \left(\frac{s}{\omega_0}\right)^2}
$$

(27.12)

$$
\omega_0 = \sqrt{\frac{k_{PD}\,k_{VCO}\,H_0}{T_0}}
$$

$$
Q = \sqrt{k_{PD}\,k_{VCO}\,H_0\,T_0}
$$

Bei der Dimensionierung gibt man die Güte $Q$ vor und erhält damit unter Berücksichtigung der Beschränkung $0 < H_0 < 1$:

$$
T_0 = \frac{Q^2}{k_{PD}\,k_{VCO}\,H_0} > \frac{Q^2}{k_{PD}\,k_{VCO}} = T_{0,min} = H_0T_0
$$

(27.13)

$$
\omega_0 = \frac{k_{PD}\,k_{VCO}\,H_0}{Q} < \frac{k_{PD}\,k_{VCO}}{Q} = \omega_{0,max} = \frac{Q}{T_{0,min}}
$$

(27.14)

Für $Q = 1/2$ erhalten wir ein aperiodisches Einschwingen; für das Beispiel gilt in diesem Fall

$$
\omega_0 < \omega_{0,max} = 2\,k_{PD}\,k_{VCO} = 2 \cdot 680\,\mathrm{mV/rad} \cdot 3{,}8\,\mathrm{Mrad/(Vs)} \approx 5{,}2 \cdot 10^6\,\mathrm{s}^{-1}
$$

bzw. $f_0 < 820\,\mathrm{kHz}$. Wir können demnach eine Kennfrequenz von bis zu $820\,\mathrm{kHz}$ erzielen.

## 27.2.10 Schleifenbandbreite

Die -3dB-Bandbreite $f_{-3dB}$ der geschlossenen Schleife, die als Schleifenbandbreite (loop bandwidth) bezeichnet wird, ist in der Regel etwas größer als die Kennfrequenz $f_0$. Man erhält sie aus der Bedingung:

$$
|H_{cl}(j\,2\pi\,f_{-3dB})|^2 = \frac{1}{2}
$$

Für die praktische Dimensionierung einer PLL ist die Differenz zwischen $f_0$ und $f_{-3dB}$ jedoch unbedeutend; deshalb wird in der Praxis die formelmäßig einfacher darzustellende Kennfrequenz $f_0$ als Schleifenbandbreite bezeichnet. Wir schließen uns dem an.
<!-- page-import:1670:end -->

<!-- page-import:1671:start -->
1634  27. Phasenregelschleife (PLL)

## 27.2.11 Wahl der Schleifenbandbreite

Das Schleifenfilter erfüllt zwei Aufgaben:

- Es übernimmt die Funktion des Reglers; dabei ist die Summenzeitkonstante $T_0$ entscheidend.
- Es muss den Störton bei der Summenfrequenz $f_S + f_{VCO} = 2\,f_S$ unterdrücken; dabei ist der Betrag der Übertragungsfunktion des Schleifenfilters bei dieser Frequenz entscheidend:

$$
|H_{LF}(j\,4\pi\,f_S)| \approx \frac{H_0}{(4\pi\,f_S)^3\,T_1\,T_2\,T_3}
$$

(27.15)

Wir können nun wie folgt vorgehen:

- Wir können die Schleifenbandbreite vorgeben, die Dämpfung des Störtons für verschiedene Ordnungen des Schleifenfilters berechnen und eine passende Ordnung wählen.
- Wir können die Ordnung des Schleifenfilters vorgeben und die Schleifenbandbreite so wählen, dass die Dämpfung einen vorgegebenen Wert annimmt. Wenn wir dabei keine akzeptable Schleifenbandbreite erhalten, müssen wir die Ordnung erhöhen.

Wir gehen hier den zweiten Weg. Mit den typischen Werten $T_2 = T_3 = T_1/10$ für ein aktives Schleifenfilter 3. Ordnung gilt $T_0 = 1{,}2\,T_1$ und:

$$
|H_{LF}(j\,4\pi\,f_S)| \approx \frac{H_0}{11{,}5\,(f_S\,T_0)^3} = \frac{T_{0,\min}}{11{,}5\,f_S^3\,T_0^4}
$$

Wir können nun die Dämpfung des Störtons vorgeben und daraus mit

$$
T_0 = \sqrt[4]{\frac{T_{0,\min}}{11{,}5\,f_S^3\,|H_{LF}(j\,4\pi\,f_S)|}}
$$

(27.16)

die Summenzeitkonstante berechnen. Daraus erhalten wir dann mit (27.14) die Regelbandbreite $f_0$ und mit (27.13) die Gleichspannungsverstärkung $H_0$ des Schleifenfilters:

$$
f_0 = \frac{\omega_0}{2\pi} = \frac{Q}{2\pi\,T_0}, \qquad H_0 = \frac{T_{0,\min}}{T_0}
$$

## 27.2.12 Dimensionierung der Beispielschaltung

Für das Beispiel erhalten wir aus (27.13) mit $Q = 1/2$:

$$
T_{0,\min} = \frac{Q^2}{k_{PD}\,k_{VCO}} = \frac{1/4}{680\,\mathrm{mV/rad}\cdot 3{,}8\,\mathrm{Mrad}/(\mathrm{Vs})} \approx 97\,\mathrm{ns}
$$

Wir fordern eine Dämpfung von $100\,\mathrm{dB}$, d.h. $|H_{LF}(j\,4\pi\,f_S)| = 10^{-5}$. Mit $f_S = 10\,\mathrm{MHz}$ folgt aus (27.16) $T_0 \approx 958\,\mathrm{ns}$ und daraus $f_0 \approx 83\,\mathrm{kHz}$ und $H_0 \approx 0{,}1$. Wir können nun entweder $H_0$ auf 0,1 reduzieren oder die Konstanten $k_{PD}$ und $k_{VCO}$ so anpassen, dass das Produkt $k_{PD}\,k_{VCO}$ um den Faktor 10 abnimmt und wir $H_0 = 1$ erhalten. Wir haben den zweiten Weg gewählt und $k_{VCO}$ um den Faktor 10 reduziert, indem wir Abstimmioden mit geringerer Kapazität verwendet und eine parallel zur Schwingkreisinduktivität liegende Kapazität ergänzt haben.

Die Dimensionierung des Schleifenfilters ist aufwendig. Aus der in Abb. 27.10a gezeigten Schaltung erhalten wir unter der Annahme, dass der Emitterfolger als idealer Spannungsfolger arbeitet, die Übertragungsfunktion:
<!-- page-import:1671:end -->

<!-- page-import:1672:start -->
27.2 Analoge PLL 1635

a Grundschaltung

b mit verbesserter Sperrdämpfung

**Abb. 27.10.** Schaltung des Schleifenfilters

$$
H_{LF}(s)=\frac{1}{1+c_1s+c_2s^2+c_3s^3}
$$

$$
c_1=C_1R_1+C_3(R_1+R_2+R_3)
$$

$$
c_2=C_1C_3R_1(R_2+R_3)+C_2C_3R_3(R_1+R_2)
$$

$$
c_3=C_1C_2C_3R_1R_2R_3
$$

Aus $T_0=T_1+T_2+T_3=958\,\mathrm{ns}$ und $T_2=T_3=T_1/10$ folgt $T_1\approx 800\,\mathrm{ns}$ und $T_2=T_3\approx 80\,\mathrm{ns}$; daraus folgt durch Einsetzen in (27.10) und Koeffizientenvergleich:

$$
c_1=T_0=T_1+T_2+T_3\approx 9{,}6\cdot10^{-7}\,\mathrm{s}
$$

$$
c_2=T_1(T_2+T_3)+T_2T_3\approx 1{,}3\cdot10^{-13}\,\mathrm{s}^2
$$

$$
c_3=T_1T_2T_3\approx 5{,}1\cdot10^{-21}\,\mathrm{s}^3
$$

Mit $C_1=C_2=C_3=100\,\mathrm{pF}$ folgt:

$$
2R_1+R_2+R_3=9600\,\Omega
$$

$$
R_1R_2+2R_1R_3+R_2R_3=1{,}3\cdot10^7\,\Omega^2
$$

$$
R_1R_2R_3=5{,}1\cdot10^9\,\Omega^3
$$

Wir haben dieses Gleichungssystem mit einem Mathematikprogramm gelöst und dabei die Werte $R_1=900\,\Omega$, $R_2=7\,\mathrm{k}\Omega$ und $R_3=810\,\Omega$ erhalten. Aufgrund des endlichen Ausgangswiderstands des Emitterfolgers und des Durchgriffs über die Kapazität $C_2$ erreicht die Schaltung in Abb. 27.10a nicht die berechnete Sperrdämpfung; wir verwenden deshalb die in Abb. 27.10b gezeigte Variante mit verbesserter Sperrdämpfung.

Wir verzichten auf eine Darstellung der dimensionierten Schaltung und verweisen auf die Simulationsbeispiele in der Rubrik PLL.

## 27.2.13 Verhalten der PLL

Im Leerlauf, d.h. ohne Eingangssignal $s(t)$, erhalten wir die Leerlauffrequenz $f_{VCO,0}$ des VCOs. Sie beträgt in unserem Beispiel $10{,}011\,\mathrm{MHz}$. Wir legen nun Eingangssignale mit verschiedenen Frequenzen $f_S=f_{VCO,0}+\Delta f$ an und betrachten die Abstimmspannung $U_A$, die ein Maß für die Frequenz des VCOs ist. Wenn die PLL einschwingt, erhalten wir eine konstante Abstimmspannung. Die zugehörige VCO-Frequenz könnten wir mit Hilfe der Kennlinie des VCOs ermitteln; das ist jedoch unnötig, da im eingeschwungenen Zustand $f_S=f_{VCO}$ gilt.

Abbildung 27.11 zeigt die Verläufe der Abstimmspannung für verschiedene Werte von $\Delta f$. Man erkennt, dass die PLL nur im Fangbereich (lock-in range)
<!-- page-import:1672:end -->

<!-- page-import:1673:start -->
1636 27. Phasenregelschleife (PLL)

a Einschwingvorgang

b Verhalten bei größerem Frequenzversatz

**Abb. 27.11.** Verhalten der analogen PLL des Beispiels

– 40 kHz $\leq \Delta f \leq + 30$ kHz

einschwingt. Man spricht in diesem Zusammenhang auch vom *Einrasten (lock-in)* der PLL. Für $\Delta f > 30\,\text{kHz}$ und $\Delta f < - 40\,\text{kHz}$ reicht die am Ausgang des Schleifenfilters verfügbare Aussteuerung nicht aus, um den VCO auf die gewünschte Frequenz einzustellen. Wird der Fangbereich nur wenig überschritten, erhält man unsymmetrische Verläufe, bei denen die Frequenz des VCOs für kurze Zeit in der Nähe der Eingangsfrequenz verbleibt, dann aber in die entgegengesetzte Richtung ausschlägt und wieder zurückkehrt; in Abb. 27.11 gilt dies für $\Delta f = + 40\,\text{kHz}$ und $\Delta f = - 50\,\text{kHz}$. Wird der Fangbereich stärker überschritten, erhält man einen nahezu sinusförmigen Verlauf der Abstimmspannung.

In Abb. 27.11a erkennt man ferner, dass sich die Verläufe für betragsmäßig gleiche Werte von $\Delta f$ in ihrer Form unterscheiden. So ist z.B. die Einschwingzeit (*settling time*) für $\Delta f = - 30\,\text{kHz}$ deutlich kleiner als die Einschwingzeit für $\Delta f = + 30\,\text{kHz}$; nur für betragsmäßig kleine Werte von $\Delta f$ erhält man symmetrische Verläufe. Die Ursache
<!-- page-import:1673:end -->

<!-- page-import:1674:start -->
27.2 Analoge PLL 1637

**Abb. 27.12.** Abhängigkeit des Produkts $k_{PD}\,k_{VCO}$ von der Abstimmspannung $U_A$. Die Berechnung erfolgt mit Hilfe der Kennlinie (links oben) und der Steilheit (links unten) des Phasendetektors sowie der Steilheit des VCOs (rechts oben), die hier mit vertauschten Achsen dargestellt ist. Da wir die Steilheit des VCOs im Zuge der Dimensionierung etwa um den Faktor 10 reduziert haben, sind die Werte im Vergleich zu Abb. 27.7b entsprechend geringer.

dafür liegt darin, dass die Konstanten $k_{PD}$ und $k_{VCO}$ nur Kleinsignalkonstanten sind und bereits bei praktisch relevanten Werten für $\Delta f$ deutlich variieren. Beim Mischer liegt der eingeschwungene Zustand für $\Delta f < 0$ links und für $\Delta f > 0$ rechts des Arbeitspunkts A2 in Abb. 27.6 auf Seite 1629. In beiden Fällen nimmt $k_{PD}$ ab. Dagegen nimmt die Steilheit des VCOs gemäß Abb. 27.7 auf Seite 1630 monoton ab, so dass wir für $\Delta f < 0$ einen größeren und für $\Delta f > 0$ einen kleineren Wert erhalten. Abbildung 27.12 zeigt die Abhängigkeit des Produkts $k_{PD}\,k_{VCO}$ von der Abstimmspannung $U_A$. Wenn das Produkt $k_{PD}\,k_{VCO}$ abnimmt, nimmt gemäß (27.14) auch die Schleifenbandbreite ab; dadurch nimmt die Einschwingzeit zu.

Die Abnahme der Schleifenbandbreite für betragsmäßig größere Werte von $\Delta f$ wirkt sich auch negativ auf die Größe des Fangbereichs aus. Die PLL schwingt nur ein, wenn:
<!-- page-import:1674:end -->

<!-- page-import:1675:start -->
1638  27. Phasenregelschleife (PLL)

a  P-Regler  
$I(s)$  
$U(s)=R\,I(s)$

b  I-Regler  
$I(s)$  
$U(s)=\dfrac{I(s)}{sC}$

c  PI-Regler  
$I(s)$  
$U(s)=\dfrac{I(s)(1+sCR)}{sC}$

**Abb. 27.13.** Regler mit Stromquellen und Strom-Spannungs-Wandlung

– die Amplitude des Differenzanteils am Ausgang des Mischers groß genug ist, um den VCO auf die Eingangsfrequenz zu ziehen;  
– der Differenzanteil im Durchlassbereich des Schleifenfilters liegt.

Für analoge PLLs gilt, dass der Fangbereich etwa $\pm f_0$ beträgt. Für unser Beispiel gilt im Leerlauf $f_0 \approx 83\,\text{kHz}$; bei konstanter Schleifenbandbreite könnten wir demnach einen entsprechenden Fangbereich erwarten. Aufgrund der Abnahme der Schleifenbandbreite fällt der Fangbereich mit $-40/+30\,\text{kHz}$ jedoch deutlich geringer aus.

In der vorliegenden Form erhalten wir im eingeschwungenen Zustand nur identische Frequenzen: $f_S=f_{VCO}$; die Phasen von Eingangssignal und VCO-Signal unterscheiden sich dagegen um die statische Regelabweichung $\varphi_e$, die gemäß Abb. 27.12 von $U_A$ bzw. $\Delta f$ abhängt. Für viele Anwendungen wird jedoch eine feste Phasenbeziehung benötigt, z.B. für die Taktregeneration.

## 27.2.14 Phasenregelung

Im Abschnitt 27.2.8 haben wir bereits darauf hingewiesen, dass im Vorwärtszweig ein Integrator ergänzt werden muss, damit die statische Regelabweichung $\varphi_e$ zu Null wird oder — als für die Praxis in der Regel gleichwertige Alternative — einen konstanten Wert annimmt. Letzterer hängt von der Funktionsweise des Phasendetektors ab. Bei einem Mischer erhält man in diesem Fall eine statische Regelabweichung von 270° für $k_{VCO}>0$ (Arbeitspunkt A2 in Abb. 27.6) oder 90° für $k_{VCO}<0$ (Arbeitspunkt A1 in Abb. 27.6).

In der Sprache der Regelungstechnik bedeutet das Ergänzen eines Integrators, dass anstelle eines P-Reglers ein I- oder PI-Regler eingesetzt wird. Einen I-Regler können wir hier aber nicht verwenden, da die Schleife in Form des VCOs bereits einen Integrator enthält und Regelkreise mit zwei Integratoren nicht stabil sind. Die Ausführung der drei Reglertypen ist besonders einfach, wenn die Eingangsgröße ein Strom und die Ausgangsgröße eine Spannung ist, d.h. der Regler als Strom-Spannungs-Wandler arbeitet; in diesem Fall kann man die Schaltungen in Abb. 27.13 verwenden. In unserem Beispiel ist die Realisierung eines PI-Reglers besonders einfach möglich, da der Mischer als Spannungs-Strom-Wandler arbeitet — siehe hierzu Abb. 25.81 auf Seite 1481 — und wir deshalb lediglich den Widerstand $R_1$ am Ausgang des Mischers durch eine RC-Reihenschaltung gemäß Abb. 27.13c ersetzen müssen, siehe Abb. 27.14.

## 27.2.15 Übertragungsfunktionen mit PI-Regler

Der PI-Regler wird als Bestandteil des Schleifenfilters $H_{LF}(s)$ aufgefasst; deshalb bleibt das regelungstechnische Kleinsignalersatzschaltbild aus Abb. 27.9 auf Seite 1632 unverändert gültig. Für das Schleifenfilter gilt nun:
<!-- page-import:1675:end -->

<!-- page-import:1676:start -->
## 27.2 Analoge PLL

1639

a mit P-Regler $R_1$

b mit PI-Regler $R_{PI}, C_{PI}$

**Abb. 27.14.** Ausgangskreis des Mischers. Die Funktion des zusätzlichen Widerstands $R_{AP}$ wird im Abschnitt 27.2.16 beschrieben.

$$
H_{LF}(s) \;=\; \frac{1+sT_I}{sT_I}\;\cdot\;\frac{H_0}{(1+sT_1)(1+sT_2)(1+sT_3)}
\qquad (27.17)
$$

PI-Regler

bisheriges Schleifenfilter

Durch den PI-Regler erhöht sich die Ordnung des Schleifenfilters von 3 auf 4. In der Regelungstechnik spricht man in diesem Fall von einem PI-T3-Regler. Auch hier wenden wir wieder das Verfahren der Summenzeitkonstanten an und erhalten mit $T_0 = T_1 + T_2 + T_3$:

$$
H_{LF}'(s) \;\approx\; H_0\,\frac{1+sT_I}{sT_I\,(1+sT_0)}
\qquad (27.18)
$$

Daraus folgt mit (27.9) für die offene bzw. geschlossene Schleife:

$$
H_{ol}(s) \;=\; k_{PD}\,k_{VCO}\,H_0\,\frac{1+sT_I}{s^2 T_I (1+sT_0)}
$$

$$
H_{cl}(s) \;=\; \frac{\dfrac{1+sT_I}{T_I}}{1+sT_I+s^2\,\dfrac{T_I}{k_{PD}\,k_{VCO}\,H_0}+s^3\,\dfrac{T_I T_0}{k_{PD}\,k_{VCO}\,H_0}}
$$

Wir können hier auf ein weiteres Verfahren der Regelungstechnik zurückgreifen: die Dimensionierung eines Regelkreises mit zwei Integratoren, einer Nullstelle und einem Pol nach dem *symmetrischen Optimum*. Das symmetrische Optimum besagt in diesem Fall, dass der Betrag der Übertragungsfunktion der offenen Schleife bei der Frequenz

$$
\omega_0 \;=\; \frac{1}{\sqrt{T_I T_0}}
\qquad (27.19)
$$

gleich Eins sein muss; daraus folgt mit der für die Gültigkeit des Optimums notwendigen Bedingung $T_I > T_0$

$$
T_I \;=\; \frac{k}{\omega_0}, \qquad T_0 \;=\; \frac{1}{k\omega_0}
\qquad \text{mit } k>1
\qquad (27.20)
$$

und:
<!-- page-import:1676:end -->

<!-- page-import:1677:start -->
1640  27. Phasenregelschleife (PLL)

$$
H_{ol}(s)=k_{PD}\,k_{VCO}\,H_0\;\frac{1+s\,\frac{k}{\omega_0}}{s^2\,\frac{k}{\omega_0}\left(1+\frac{s}{k\omega_0}\right)}
$$

Daraus erhalten wir durch Auswerten der Bedingung $|H_{ol}(j\omega_0)| = 1$ die Forderung:

$$
k_{PD}\,k_{VCO}\,H_0=\omega_0
$$

(27.21)

Für die geschlossene Schleife gilt in diesem Fall:

$$
H_{cl}(s)=\frac{1+k\,\frac{s}{\omega_0}}{1+k\,\frac{s}{\omega_0}+k\left(\frac{s}{\omega_0}\right)^2+\left(\frac{s}{\omega_0}\right)^3}
\qquad
s_n=s/\omega_0
\qquad
=\frac{1+k\,s_n}{1+k\,s_n+k\,s_n^2+s_n^3}
$$

(27.22)

Für $k > 3$ erhält man drei reelle Pole und für $k = 3$ einen reellen Dreifach-Pol. In der Praxis wird $k < 3$ gewählt; dann erhält man einen reellen Pol und ein konjugiert-komplexes Polpaar mit der Güte 3:

$$
Q=\frac{1}{k-1}
\qquad \text{für } 1 \leq k \leq 3
$$

(27.23)

Abbildung 27.15 zeigt den Betrag der Übertragungsfunktion $H_{ol}(s)$ der offenen Schleife für $k = 2{,}5$ über der normierten Kreisfrequenz $\omega/\omega_0$. Man erkennt den symmetrischen Verlauf bezüglich $\omega/\omega_0 = 1$, dem das symmetrische Optimum seinen Namen verdankt.

In Abb. 27.16 ist der Betrag der Übertragungsfunktion $H_{cl}(s)$ der geschlossenen Schleife für verschiedene Werte von $k$ dargestellt; Abb. 27.17 zeigt die zugehörigen Sprungantworten. In der Praxis wird meist $k \approx 2{,}5$ gewählt. Wir weisen hier aber noch einmal darauf hin, dass die Konstanten $k_{PD}$ und $k_{VCO}$ nur Kleinsignalkonstanten sind und die gezeigten Sprungantworten deshalb nur für kleine Sprünge gültig sind. Bei größeren Sprüngen ändern sich die Werte während des Einschwingvorgangs, d.h. der Einschwingvorgang ist nicht mehr linear. Die Gleichungen (27.19)–(27.21) des symmetrischen Optimums dienen deshalb in der Praxis nur als Ausgangspunkt; ausgehend davon muss man den Einschwingvorgang über den gesamten Betriebsbereich untersuchen und die Zeitkonstanten $T_I$ und $T_0$ bei Bedarf anpassen. Bei VCOs mit stark nichtlinearer Abstimmkennlinie muss ggf. eine Schaltung zur Linearisierung der Kennlinie eingesetzt werden.

Abbildung 27.17 zeigt ferner, dass man mit einem PI-Regler immer einen Einschwingvorgang mit Überschwingen erhält, auch wenn die Pole für $k \geq 3$ reell sind. Ursache dafür ist die Nullstelle des PI-Reglers, die direkt in die Übertragungsfunktion der geschlossenen Schleife eingeht.

## 27.2.16 Dimensionierung mit PI-Regler

Da wir für unser Beispiel keinen Anwendungsfall definiert haben und deshalb auch keine besonderen Anforderungen an die Schleifenbandbreite haben, nehmen wir auch hier wieder an, dass die Ordnung des Schleifenfilters vorgegeben ist und wir die Schleifenbandbreite aus der geforderten Dämpfung des Störtons berechnen können.

---

3 Zur Berechnung der Güte zerlegt man den Nenner der Übertragungsfunktion $H_{cl}(s)$ in einen linearen und einen quadratischen Term in $s$; anschließend berechnet man die Güte aus den Koeffizienten des quadratischen Terms.
<!-- page-import:1677:end -->

<!-- page-import:1678:start -->
27.2 Analoge PLL 1641

$|H_{ol}|$  
dB

30  
20  
10  
0  
$-10$  
$-20$  
$-30$

$0{,}1$  
$1/k = 0{,}4$  
1  
$2{,}5 = k$  
10

$-40\,\mathrm{dB/Dek.}$  
$-20\,\mathrm{dB/Dek.}$  
$-40\,\mathrm{dB/Dek.}$

$\frac{\omega}{\omega_0}$

$\arg\{H_{ol}\}$  
Grad

$-120$  
$-140$  
$-160$  
$-180$

Phasen-  
reserve  
$\Phi_R$

**Abb. 27.15.** Betrag und Phase der Übertragungsfunktion $H_{ol}(s)$ der offenen Schleife für $k = 2{,}5$. Man beachte, dass die Phasenreserve $\Phi_R$ sowohl bei einer Zunahme des Betrags (Durchtrittspunkt mit 0 dB wandert nach rechts) als auch bei einer Abnahme des Betrags (Durchtrittspunkt mit 0 dB wandert nach links) abnimmt.

$|H_{cl}|$  
dB

5  
0  
$-5$  
$-10$  
$-15$  
$-20$

$k$  
2  2,5  3

$0{,}01$  
$0{,}02$  
$0{,}05$  
$0{,}1$  
$0{,}2$  
$0{,}5$  
1  
2  
5  
10

$\frac{\omega}{\omega_0}$

**Abb. 27.16.** Betrag der Übertragungsfunktion $H_{cl}(s)$ der geschlossenen Schleife
<!-- page-import:1678:end -->

<!-- page-import:1679:start -->
1642  27. Phasenregelschleife (PLL)

**Abb. 27.17.** Normierte Kleinsignal-Sprungantwort der geschlossenen Schleife

Für ein Schleifenfilter 4. Ordnung gemäß (27.17) folgt aus der Bedingung

$$
T_0=\frac{1}{k\omega_0}\ \overset{k=2{,}5}{=}\ \frac{1}{2{,}5\,\omega_0}
$$

des symmetrischen Optimums, der Summenzeitkonstante $T_0=T_1+T_2+T_3$ und den typischen Werten

$$
T_2=T_3=\frac{1}{10\,\omega_0}
$$

der Zusammenhang:

$$
T_1=\frac{1}{\omega_0}\left(\frac{1}{k}-\frac{1}{5}\right)
\qquad\Rightarrow\qquad
T_1T_2T_3=\frac{1}{100\,\omega_0^3}\left(\frac{1}{k}-\frac{1}{5}\right)\ \overset{k=2{,}5}{=}\ \frac{1}{500\,\omega_0^3}
$$

Aus (27.15) folgt mit $H_0=1$ und einer Dämpfung von $100\,\mathrm{dB}$:

$$
T_1T_2T_3=\frac{H_0}{(4\pi f_S)^3\,|H_{LF}(j4\pi f_S)|}
=\frac{1}{(4\pi\cdot 10\,\mathrm{MHz})^3\cdot 10^{-5}}
\approx 5\cdot 10^{-20}\,\mathrm{s}^3
$$

Damit erhalten wir die Schleifenbandbreite

$$
f_0=\frac{\omega_0}{2\pi}
=\frac{1}{2\pi\sqrt[3]{500\,T_1T_2T_3}}
\approx 54\,\mathrm{kHz}
$$

und daraus die Zeitkonstanten des Schleifenfilters:

$$
T_0=\frac{k}{\omega_0}\ \overset{k=2{,}5}{\approx}\ 7{,}4\,\mu\mathrm{s}\,,
\qquad
T_1=\frac{1}{5\,\omega_0}\approx 590\,\mathrm{ns}\,,
\qquad
T_2=T_3=\frac{1}{10\,\omega_0}\approx 295\,\mathrm{ns}
$$

Wir gehen wie im Abschnitt 27.2.12 vor und erhalten mit $C_1=C_2=C_3=100\,\mathrm{pF}$ die Widerstandswerte $R_1=1{,}85\,\mathrm{k}\Omega$, $R_2=3{,}7\,\mathrm{k}\Omega$ und $R_3=4{,}4\,\mathrm{k}\Omega$; dabei haben wir
<!-- page-import:1679:end -->

<!-- page-import:1680:start -->
27.2 Analoge PLL 1643

a aktive Variante des Beispiels

b passive Variante

**Abb. 27.18.** Ausgangskreis des Mischers und Schleifenfilter mit PI-Regler (PI-T3-Regler)

das nichtlineare Gleichungssystem für die Widerstände wieder mit einem Mathematikprogramm gelöst. Damit die Kennlinie und die Steilheit des Mischers unverändert bleiben, muss der Widerstand $R_{PI}$ des PI-Reglers in Abb. 27.14b denselben Wert haben wie der Widerstand $R_1$ des P-Reglers in Abb. 27.14a, in unserem Beispiel $R_{PI} = R_1 = 20\,\mathrm{k}\Omega$; daraus folgt für die Kapazität $C_{PI}$ des PI-Reglers:

$$
T_I = R_{PI}\,C_{PI} \Rightarrow C_{PI} = \frac{T_I}{R_{PI}} = \frac{7{,}4\,\mu s}{20\,\mathrm{k}\Omega} = 370\,\mathrm{pF}
$$

Abbildung 27.18a zeigt den Ausgangskreis des Mischers und das Schleifenfilter des Beispiels. Der PI-Regler und der Tiefpass 3. Ordnung bilden zusammen einen PI-T3-Regler.

Alternativ könnten wir auch die passive Variante in Abb. 27.18b verwenden, die ebenfalls die Ordnung 4 aufweist, jedoch bezüglich der Dimensionierung eingeschränkt ist. Eine Übertragungsfunktion mit $T_2 = T_3$, d.h. mit einem doppelten Pol, können wir mit dieser Variante nicht realisieren. Dagegen wäre die um zwei Basis-Emitter-Spannungen höhere Ausgangsspannung in unserem Beispiel vorteilhaft, da sich der Arbeitspunkt in einen Bereich verschieben würde, in dem die Nichtlinearität der VCO-Kennlinie geringer ist. Wir weisen hier schon einmal darauf hin, dass auch bei digitalen PLLs überwiegend Phasendetektoren mit Stromausgang verwendet werden und dass das passive Schleifenfilter aus Abb. 27.18b das typische Schleifenfilter für diese PLLs ist.
<!-- page-import:1680:end -->

<!-- page-import:1681:start -->
1644  27. Phasenregelschleife (PLL)

Abb. 27.19. Betrag der Übertragungsfunktion $H_{LF}(s)$ eines Schleifenfilters mit einem verlustbehafteten Integrator

Eine analoge PLL mit PI-Regler ist in dieser Form allerdings noch nicht funktionsfähig. Die Ursache dafür ist der geringe Fangbereich, der erfordert, dass die Leerlauffrequenz des VCOs in der Nähe der Eingangsfrequenz liegt; dazu muss die Arbeitspunktspannung am Ausgang des Mischers bzw. Schleifenfilters einen wohldefinierten, von der Temperatur und Bauteile-Toleranzen unabhängigen Wert annehmen. In der Schaltung in Abb. 27.18a lässt sich das im einfachsten Fall mit dem zusätzlichen Widerstand $R_{AP}$ sicherstellen; wir können dann mit $R_{AP}$ und der Stromquelle $I_{AP}$ den Arbeitspunkt einstellen. Der Widerstand $R_{AP}$ liegt allerdings parallel zu den Elementen $R_{PI}$ und $C_{PI}$ des PI-Reglers und begrenzt die Verstärkung des Reglers bei niedrigen Frequenzen auf einen endlichen Wert, siehe Abb.27.19; wir erhalten damit einen verlustbehafteten Integrator (lossy integrator), dessen Pol nicht mehr bei $s = 0$ liegt, sondern etwas in die linke $s$-Halbebene verschoben ist. Für die Auslegung des Regelkreises nach dem symmetrischen Optimum ist das zwar unerheblich, da der Verlauf der Übertragungsfunktion des offenen Kreises im Bereich der Schleifenbandbreite $\omega_0$ nicht spürbar beeinflusst wird, die statische Regelabweichung wird aber nur noch näherungsweise zu Null bzw. nimmt nur näherungsweise einen konstanten Wert an. Wir nehmen diese Einschränkung hier in Kauf, da eine Beschreibung aufwendigerer Maßnahmen zur Arbeitspunkteinstellung oder zur Erweiterung des Fangbereichs analoger PLLs den Rahmen unserer Darstellung sprengt und wir uns in den folgenden Unterkapiteln auf digitale PLLs konzentrieren werden, bei denen dieses Problem nicht auftritt.

Damit die statische Regelabweichung klein bleibt, muss $H_1 \gg H_0$ bzw. $R_{AP} \gg R_{PI}$ gelten, siehe Abb. 27.19. Ein zu großer Wert für $R_{AP}$ beeinträchtigt jedoch die Stabilität des Arbeitspunktes. In der Praxis ist $R_{AP} \approx 10\,R_{PI}$ in der Regel ein sinnvoller Kompromiss; wir wählen deshalb für unser Beispiel $R_{AP} = 200\,\mathrm{k}\Omega$.

Als letztes müssen wir noch die Forderung $k_{PD}\,k_{VCO}\,H_0 = \omega_0$ aus (27.21) erfüllen; dazu passen wir auch hier wieder die Steilheit des VCOs an. Mit $H_0 = 1$ und $f_0 = 54\,\mathrm{kHz}$ erhalten wir mit

$$
k_{VCO} = \frac{\omega_0}{k_{PD}\,H_0} = \frac{2\pi \cdot 54\,\mathrm{kHz}}{0{,}7\,\mathrm{V/rad}} = 0{,}485\,\mathrm{Mrad/V}
$$

einen etwas größeren Wert als für das Beispiel mit P-Regler.

Wir verzichten auch hier wieder auf eine Darstellung der dimensionierten Schaltung und verweisen auf die Simulationsbeispiele in der Rubrik PLL.
<!-- page-import:1681:end -->

<!-- page-import:1682:start -->
27.2 Analoge PLL 1645

a Einschwingvorgang im linearen und schwach-nichtlinearen Bereich

b Einschwingvorgang im nichtlinearen Bereich

**Abb. 27.20.** Verhalten der analogen PLL mit PI-Regler

## 27.2.17 Verhalten der analogen PLL mit PI-Regler

Abbildung 27.20 zeigt die Verläufe der Abstimmsapnnung für verschiedene Werte von $\Delta f$. Für $-40\,\mathrm{kHz} \leq \Delta f \leq 20\,\mathrm{kHz}$ entspricht das Verhalten der Sprungantwort aus Abb. 27.17 für $\kappa = 2{,}5$. Für $\Delta f = -60\,\mathrm{kHz}$ und $\Delta f = 40\,\mathrm{kHz}$ zeigt sich nach dem anfänglichen Überschwingen bereits ein leichtes Unterschwingen, das für betragsmäßig größere Werte von $\Delta f$ zunimmt, bis für $\Delta f = -90\,\mathrm{kHz}$ und $\Delta f = 70\,\mathrm{kHz}$ der Bereich mit nichtlinearem Einschwingen erreicht wird.

Das Verhalten im linearen und schwach-nichtlinearen Bereich in Abb. 27.20a ist eine Folge des Verlaufs der Übertragungsfunktion der offenen Schleife in Abb. 27.15 auf Seite 1641. Auch hier hängt das Produkt $k_{PD}\,k_{VCO}$ vom Arbeitspunkt ab. Die Phasendetektor-Konstante $k_{PD}$ ändert sich nur wenig, da der Arbeitspunkt des Mischers aufgrund des verlustbehafteten PI-Reglers immer im Bereich des Arbeitspunkts A2 in Abb. 27.6 auf Seite 1629 bleibt; dagegen variiert die VCO-Konstante $k_{VCO}$ im relevanten Bereich um mehr als den Faktor 4, siehe Abb. 27.21b. Aus der Forderung $k_{PD}\,k_{VCO}\,H_0 = \omega_0$ des
<!-- page-import:1682:end -->

<!-- page-import:1683:start -->
1646 27. Phasenregelschleife (PLL)

a Kennlinie $f_{VCO}$

b VCO-Konstante $k_{VCO}$

**Abb. 27.21.** Kennlinie und VCO-Konstante des VCOs für das Beispiel einer analogen PLL mit PI-Regler

symmetrischen Optimums folgt, dass die Schleifenbandbreite proportional zu $k_{VCO}$ ist. In Abb. 27.20a zeigt sich das darin, dass die Einschwingzeit für $\Delta f > 0$ zunimmt, da $k_{VCO}$ und die Schleifenbandbreite $\omega_0$ in diesem Bereich abnehmen. Für $\Delta f < 0$ sind die Verhältnisse genau umgekehrt. Man erkennt ferner, dass das Überschwingen in beiden Fällen größer wird, da die Phasenreserve jeweils abnimmt, wie Abb. 27.22 zeigt. Für die Dimensionierung einer PLL mit PI-Regler ist dieser Sachverhalt von großer Bedeutung. In der Praxis ist man häufig gezwungen, den Faktor $k$ des symmetrischen Optimums deutlich größer zu wählen als 2,5, damit das Einschwingverhalten an den Grenzen des Betriebsbereichs akzeptabel ist. Das gilt für analoge und digitale PLLs gleichermaßen.

$k_{VCO}$ nimmt zu (+)  
$k_{VCO}$ nimmt ab (−)

**Abb. 27.22.**  
Phasenreserve einer analogen PLL mit PI-Regler
<!-- page-import:1683:end -->

<!-- page-import:1684:start -->
27.2 Analoge PLL 1647

Abb. 27.23. Statischer Phasenfehler der analogen PLLs des Beispiels

Im nichtlinearen Bereich in Abb. 27.20b erhält man eine mit zunehmendem Betrag von $\Delta f$ immer länger andauernde Phase mit einer oszillierenden Abstimmsapnnung, an die sich ein schwach-nichtlinearer Einschwingvorgang auf den Endwert anschließt. Die starke Unsymmetrie zwischen $\Delta f > 0$ und $\Delta f < 0$ ist zum Teil durch die stark unterschiedlichen Werte von $k_{VCO}$, zum Teil aber auch durch das unsymmetrische Übersteuerungsverhalten des Mischers bedingt. Der Fangbereich ist deutlich größer als in dem Beispiel mit P-Regler. Dennoch gilt auch hier die Regel, dass der Fangbereich in der Größenordnung der Schleifenbandbreite liegt.

Abschließend vergleichen wir den statischen Phasenfehler der beiden PLLs, der in Abb. 27.23 in Abhängigkeit von der Frequenz $\Delta f$ dargestellt ist. Für die PLL mit P-Regler erhalten wir erwartungsgemäß eine starke Abhängigkeit, die sich aus der Kennlinie des Mischers ergibt. Bei der PLL mit PI-Regler sollte der statische Phasenfehler konstant sein, hier $270^\circ$. Da wir aber nur einen verlustbehafteten PI-Regler mit endlicher Gleichverstärkung verwenden konnten, erhalten wir auch hier eine Abhängigkeit, die aber wesentlich geringer ist. Ob diese Abhängigkeit toleriert werden kann, hängt vom Anwendungsfall ab.

## 27.2.18 Zusammenfassung

Wir beenden die Betrachtung analoger PLLs an dieser Stelle und halten abschließend fest:

- Analoge PLLs haben einen Fangbereich, der in der Größenordnung der Schleifenbandbreite liegt und in der Regel kleiner als 1% der Eingangs- bzw. VCO-Frequenz ist.
- Analoge PLLs haben einen definierten Leerlauf, d.h. sie arbeiten auch ohne Eingangssignal; der VCO stellt sich dabei auf die durch den Arbeitspunkt gegebene Leerlauffrequenz $f_{VCO,0}$ ein.
- Die Phasendetektor-Konstante $k_{PD}$ eines Mischers hängt gemäß (27.5) von den Amplituden des Eingangs- und des VCO-Signals ab. Während das VCO-Signal in der Regel eine konstante Amplitude aufweist, muss das Eingangssignal — sofern es nicht ebenfalls eine konstante Amplitude aufweist — einer Amplitudenregelung oder Amplitudenbegrenzung unterworfen werden. In Empfängern der Nachrichtentechnik wird dies von der Verstärkungsregelung übernommen, siehe Abschnitt 22.2.3.
<!-- page-import:1684:end -->
