# Integrated RF Amplifiers

<!-- page-import:1343:start -->
1306  23. Passive Komponenten

**Abb. 23.26.**  
Relative Bandbreite $B/f_M$ ($|r| < 0,1$) eines Collins-Filters für verschiedene Werte des Transformationsverhältnisses $t$

$$
t > 1 \;\Rightarrow\; c < \sqrt{t}
$$

$$
t < 1 \;\Rightarrow\; c > \sqrt{t}
$$

(23.34)

Über die Wahl des Kapazitätsverhältnisses $c$ kann man die Werte der Elemente und die Bandbreite beeinflussen. Abbildung 23.26 zeigt die relative Bandbreite $B/f_M$, für die der Betrag des Reflexionsfaktors kleiner als 0,1 bleibt, für verschiedene Werte des Transformationsverhältnisses $t$. Man erkennt, dass die Bandbreite mit zunehmendem Transformationsverhältnis abnimmt. In Abb. 23.26 sind nur Kurven für $t > 1$ dargestellt. Für $t < 1$ vertauscht man Eingang und Ausgang, indem man $t$ durch $1/t$ und $c$ durch $1/c$ ersetzt.

Das Collins-Filter kann auch zur Anpassung allgemeiner Impedanzen $Z$ verwendet werden. Dazu geht man von der Darstellung

$$
Z = R \parallel jX
$$

aus und kompensiert den reaktiven Anteil mit einer Querreaktanz $X_p = -X$:

$$
Z_p = Z \parallel jX_p = R \parallel jX \parallel jX_p \;\;\overset{X_p=-X}{=}\;\; R
$$

Die Querreaktanz $X_p$ wird mit der parallel liegenden Kapazität $C_2$ zu einer Reaktanz $X_2$ zusammengefasst:

$$
jX_2 = \frac{1}{j\,2\pi f_M C_2} \parallel jX_p
\;\Rightarrow\;
X_2 = \frac{X_p}{1 - 2\pi f_M C_2 X_p}
$$

Diese wird gemäß (23.26) durch eine Kapazität oder eine Induktivität realisiert.

Das Collins-Filter wird überwiegend bei der Anpassung von Verstärkern eingesetzt; dabei werden die Elemente des Filters teilweise durch die parasitären Elemente der Transistoren realisiert, siehe Abb. 24.35 auf Seite 1359. Wir gehen darauf im Kapitel 24 noch näher ein.

### 23.3.1.3 Anpassung mit Streifenleitungen

Mit zunehmender Frequenz werden die Induktivitäten und Kapazitäten in den Anpassnetzwerken immer kleiner; dadurch wird eine Realisierung mit herkömmlichen Bauelementen
<!-- page-import:1343:end -->

<!-- page-import:1358:start -->
# Kapitel 24:
# Hochfrequenz-Verstärker

In den Hochfrequenz- und Zwischenfrequenz-Baugruppen eines nachrichtentechnischen Systems werden bis heute neben integrierten auch diskret aufgebaute Verstärker mit Einzeltransistoren eingesetzt; das gilt vor allem für die Hochfrequenz-Leistungsverstärker in den Sendern. Dagegen werden in den niederfrequenten Baugruppen nur noch integrierte Verstärker verwendet. Der Einsatz von Einzeltransistoren ist auf den jeweiligen Stand der Halbleitertechnologie zurückzuführen. Im Zuge der Entwicklung neuer Halbleiterprozesse mit höheren Transitfrequenzen werden zunächst Einzeltransistoren hergestellt; die Herstellung integrierter Schaltungen auf der Basis eines neuen Prozesses erfolgt meist erst mehrere Jahre später. Darüber hinaus werden bei der Herstellung von Einzeltransistoren mit besonders hohen Transitfrequenzen häufig Materialien oder Prozessschritte verwendet, die für eine Fertigung integrierter Schaltungen aus produktionstechnischen oder wirtschaftlichen Gründen nicht oder noch nicht geeignet sind. Die starken Wachstumsraten bei drahtlosen Kommunikationssystemen haben allerdings dazu geführt, dass die Entwicklung von Halbleiterprozessen für Hochfrequenz-Anwendungen stark forciert wurde.

Transistoren in integrierten Schaltungen auf der Basis von Verbindungshalbleitern wie Gallium-Arsenid (GaAs) oder Silizium-Germanium (SiGe) haben eine Transitfrequenz von bis zu 400 GHz; CMOS-Transistoren erreichen bis zu 70 GHz. Während auf Gallium-Arsenid-Basis nur relativ niedrig integrierte Schaltungen kostengünstig hergestellt werden können, ist der Silizium-Germanium-HBT (hetero-junction bipolar transistor)$^1$ kompatibel zur CMOS-Technik und kann deshalb mit hochintegrierten CMOS-Schaltungen kombiniert werden; dadurch lassen sich fast alle Komponenten eines Senders oder Empfängers kostengünstig in einer integrierten Schaltung realisieren. Eine weitere Kostenreduktion ergibt sich durch die Verwendung von Standard-CMOS-Prozessen, die zwar mit Einschränkungen bezüglich des Rauschens und einiger anderer Parameter verbunden ist, für viele Anwendungen aber ausreicht.

In diskreten Schaltungen werden Bipolartransistoren oder Sperrschicht-Fets mit Metall-Gate-Kanal-Übergang (Mesfet, metall-semiconductor field effect transistor)$^2$ eingesetzt. Bei den Bipolartransistoren handelt es sich meist um GaAs- oder SiGe-HBTs, bei den Mesfets meist um GaAs-Mesfets. Die Transitfrequenzen diskreter Transistoren werden durch die parasitären Elemente des Gehäuses begrenzt und sind deshalb trotz überlegener Technologie geringer als die Transitfrequenzen integrierter Transistoren.

## 24.1 Integrierte Hochfrequenz-Verstärker

Bei integrierten Hochfrequenz-Verstärkern wird prinzipiell dieselbe Schaltungstechnik verwendet wie bei Niederfrequenz- oder Operationsverstärkern. Ein typischer Verstärker besteht aus einem Differenzverstärker als Spannungsverstärker und Kollektorschaltungen

$^1$ Der Aufbau eines HBTs entspricht dem eines herkömmlichen Bipolartransistors; dabei werden jedoch verschiedene Materialzusammensetzungen für die Basis- und die Emitterzone verwendet, um die Stromverstärkung bei hohen Frequenzen zu verbessern.

$^2$ Der prinzipielle Aufbau eines Mesfets ist in Abb. 3.27b auf Seite 205 gezeigt.

© Springer-Verlag GmbH Deutschland, ein Teil von Springer Nature 2019  
U. Tietze et al., Halbleiter-Schaltungstechnik
<!-- page-import:1358:end -->

<!-- page-import:1360:start -->
24.1 Integrierte Hochfrequenz-Verstärker 1323

ren ($f_T \approx 500\,\mathrm{MHz}\dots 1\,\mathrm{GHz}$), nimmt die Bandbreite der Verstärker etwa um den gleichen Faktor zu. Dabei muss allerdings vorausgesetzt werden, dass der parasitäre Einfluss der Kontaktierungen und Verbindungsleitungen innerhalb einer integrierten Schaltung so weit reduziert werden kann, dass die Bandbreite primär durch die Transitfrequenz der Transistoren und nicht durch die Verbindungen begrenzt wird; dies ist ein zentrales Problem sowohl beim Entwurf als auch bei der Nutzung eines Hochfrequenz-Halbleiterprozesses.

## 24.1.1 Anpassung

Die Verbindungsleitungen innerhalb einer integrierten Schaltung sind im allgemeinen so kurz, dass sie bis in den GHz-Bereich als ideal angesehen werden können $^3$; deshalb ist innerhalb der Schaltung keine Anpassung an den Wellenwiderstand erforderlich. Dagegen müssen die signalführenden äußeren Anschlüsse an den Wellenwiderstand der äußeren Leitungen angepasst werden, damit keine Reflexionen auftreten. Im Idealfall kann man die Schaltung so dimensionieren, dass die Ein- und Ausgangsimpedanzen einschließlich der parasitären Einflüsse der Bonddrähte, der Anschlussbeine und des Gehäuses dem Wellenwiderstand entsprechen. Andernfalls muss man externe Bauelemente oder Streifenleitungen zur Anpassung verwenden, siehe Abschnitt 23.3.

In Abb. 24.1a sind typische Werte für die niederfrequenten Ein- und Ausgangswiderstände des Spannungs- und des Stromverstärkers in einem integrierten Hochfrequenz-Verstärker angegeben; dabei wird angenommen, dass gleichartige Verstärker als Signalquelle und als Last dienen.

### 24.1.1.1 Eingangsseitige Anpassung

Bei hohen Frequenzen ist die Eingangsimpedanz eines Differenzverstärkers aufgrund der Transistor-Kapazitäten ohmsch-kapazitiv; erst bei sehr hohen Frequenzen machen sich parasitäre Induktivitäten bemerkbar, die auf die Laufzeiten der Ladungsträger zurückzuführen sind. Der Realteil der Eingangsimpedanz bleibt üblicherweise bis in den GHz-Bereich betragsmäßig größer als der übliche Wellenwiderstand $Z_W = 50\,\Omega$ der externen Leitungen.

Ein rigoroses Verfahren zur Anpassung besteht darin, einen Abschlusswiderstand $R = 2 Z_W = 100\,\Omega$ zwischen die beiden Eingänge des Differenzverstärkers zu schalten, siehe Abb. 24.2a; dadurch sind beide Eingänge an $Z_W = 50\,\Omega$ angepasst. Dieses Verfahren ist einfach, mit einem Widerstand in der integrierten Schaltung realisierbar und breitbandig. Nachteilig ist die leistungsmäßig schlechte Kopplung aufgrund der Verluste des Widerstands und die starke Zunahme der Rauschzahl, siehe Abschnitt 24.1.2. Anstelle eines Widerstands $R = 2 Z_W$ zwischen den beiden Eingängen kann man an jedem der beiden Eingänge einen Widerstand $R = Z_W$ nach Masse anschließen; eine galvanische Kopplung an Signalquellen mit einem Gleichspannungsanteil ist dann allerdings nicht mehr möglich, da die Eingänge in diesem Fall niederohmig mit Masse verbunden sind. Deshalb wird bevorzugt die Variante mit einem Widerstand $R = 2 Z_W$ verwendet.

Alternativ kann man die Eingangsstufen in Basisschaltung ausführen, siehe Abb. 24.2b; dadurch entspricht die Eingangsimpedanz etwa dem Steilheitswiderstand $1/S = U_T/I_0$ der Transistoren. Bei einem Ruhestrom $I_0 \approx 520\,\mu\mathrm{A}$ erhält man $1/S \approx Z_W = 50\,\Omega$. Die

---

$^3$ Es handelt sich dabei um elektrisch kurze Leitungen, siehe Abschnitt 21.2. Die Bezeichnung ideal bezieht sich in diesem Zusammenhang nicht auf die Verluste; letztere sind in integrierten Schaltungen aufgrund der vergleichsweise dünnen Metallisierung und Verlusten im Substrat relativ hoch.
<!-- page-import:1360:end -->

<!-- page-import:1361:start -->
1324  24. Hochfrequenz-Verstärker

a mit Abschlusswiderstand

b mit Eingangsstufen in Basisschaltung ($I_0 \approx 520\,\mu\text{A}$ für $Z_W = 50\,\Omega$)

**Abb. 24.2.** Eingangsseitige Anpassung eines integrierten Verstärkers ohne Verwendung spezieller Anpassnetzwerke aus reaktiven Elementen oder Streifenleitungen

leistungsmäßige Kopplung ist in diesem Fall ideal. Nachteilig ist die vergleichsweise hohe Rauschzahl, siehe Abschnitt 24.1.2.

Beide Verfahren eignen sich nur für Frequenzen im MHz-Bereich. Im GHz-Bereich macht sich der Einfluss der Bonddrähte, der Anschlussbeine und des Gehäuses störend bemerkbar und man muss ein Anpassnetzwerk aus reaktiven Bauelementen oder Streifenleitungen verwenden, siehe Abschnitt 23.3.1. Unter günstigen Umständen kann das Anpassnetzwerk mit integrierten Induktivitäten und Kapazitäten realisiert werden; dann werden keine externen Elemente benötigt.

### 24.1.1.2 Ausgangsseitige Anpassung

Die Ausgangsimpedanz einer Kollektorschaltung kann breitbandig an den üblichen Wellenwiderstand $Z_W = 50\,\Omega$ angepasst werden, indem man die Ausgangsimpedanz des Spannungsverstärkers unter Beachtung der Impedanztransformation einer Kollektorschaltung beeinflusst. Wir verweisen dazu qualitativ auf Abb. 2.107a auf Seite 154 und den in
<!-- page-import:1361:end -->

<!-- page-import:1362:start -->
24.1 Integrierte Hochfrequenz-Verstärker 1325

Abb. 2.108 links unten gezeigten Fall: die Ausgangsimpedanz einer Kollektorschaltung ist breitbandig ohmsch, wenn die vorausgehende Verstärkerstufe eine ohmsch-kapazitive Ausgangsimpedanz besitzt, deren Grenzfrequenz der Grenzfrequenz $f_\beta$ des Transistors entspricht. *Quantitativ* kann man diese Anpassung aufgrund sekundärer Effekte nur mit Hilfe einer Schaltungssimulation erzielen. Auch hier macht sich im GHz-Bereich der Einfluss des Bonddrahtes, des Anschlussbeines und des Gehäuses störend bemerkbar; eine Anpassung bleibt jedoch prinzipiell möglich, wenn auch nicht mehr breitbandig.

Wenn eine Anpassung durch Beeinflussung der Ausgangsimpedanz der Kollektorschaltungen nicht möglich ist, werden externe Anpassnetzwerke mit reaktiven Bauelementen oder Streifenleitungen eingesetzt.

## 24.1.2 Rauschzahl

Im Abschnitt 2.3.4 haben wir gezeigt, dass die Rauschzahl eines Bipolartransistors bei vorgegebenem Kollektorstrom $I_{C,A}$ minimal wird, wenn der effektive Quellenwiderstand zwischen Basis- und Emitter-Anschluss den optimalen Wert

$$
R_{gopt} = \sqrt{R_B^2 + \frac{\beta U_T}{I_{C,A}}\left(\frac{U_T}{I_{C,A}} + 2R_B\right)} \qquad \overset{R_B \to 0}{\approx} \qquad \frac{U_T\sqrt{\beta}}{I_{C,A}}
$$

besitzt; dabei ist $R_B$ der Basisbahnwiderstand und $\beta$ die Stromverstärkung des Transistors. Für Kollektorströme im Bereich $I_{C,A} \approx 0,1 \ldots 1$ mA erhält man mit $\beta \approx 100$ den Wertebereich $R_{gopt} \approx 260 \ldots 2600\,\Omega$. Mit größeren Kollektorströmen kann man $R_{gopt}$ weiter reduzieren, z.B. auf $50\,\Omega$ bei $I_{C,A} = 23$ mA und $R_B = 10\,\Omega$, jedoch erzielt man damit nur noch ein lokales Minimum der Rauschzahl, wie Abb. 2.52 auf Seite 94 zeigt. Dieser Umstand wird durch den Basisbahnwiderstand verursacht. Bei Niederfrequenz-Anwendungen verwendet man sehr große Transistoren mit sehr kleinen Basisbahnwiderständen; dadurch wird das globale Minimum der Rauschzahl auch bei kleinen Quellenwiderständen näherungsweise erreicht. Die Transitfrequenz der Transistoren nimmt in diesem Fall allerdings stark ab; deshalb ist diese Vorgehensweise bei Hochfrequenz-Anwendungen nur in Ausnahmefällen möglich.

Bei der Eingangsanpassung mit Abschlusswiderstand gemäß Abb. 24.2a hat der effektive Quellenwiderstand aufgrund der Parallelschaltung der externen Widerstände $R_g = Z_W$ und des internen Abschlusswiderstands $R = 2Z_W$ für jeden der beiden Transistoren des Differenzverstärkers den Wert $R_{g,eff} = R_g \parallel R/2 = Z_W/2 = 25\,\Omega$; er ist damit deutlich kleiner als der optimale Quellenwiderstand $R_{gopt} \approx 260 \ldots 2600\,\Omega$. Darüber hinaus wirkt sich das Rauschen des Abschlusswiderstands aus. Daraus resultiert eine vergleichsweise hohe Rauschzahl. Bei der Eingangsanpassung mit Basisschaltung gemäß Abb. 24.2b hat der effektive Quellenwiderstand den Wert $R_{g,eff} = R_g = Z_W = 50\,\Omega$; auch hier ist die Rauschzahl vergleichsweise hoch.

Im Falle einer Anpassung mit reaktiven Bauelementen oder Streifenleitungen wird der Innenwiderstand $R_g$ der Signalquelle mit einem verlustlosen und rauschfreien Anpassnetzwerk auf den Eingangswiderstand $r_e$ des Transistors transformiert. Bei Vernachlässigung des Basisbahnwiderstands $R_B$ gilt $r_e = r_{BE}$; daraus folgt für den effektiven Quellenwiderstand $R_{g,eff}$ zwischen Basis- und Emitter-Anschluss: $R_{g,eff} = r_{BE}$. Mit $r_{BE} = \beta U_T/I_{C,A}$ und $R_{gopt}$ aus (24.1) erhält man für $R_B = 0$ den Zusammenhang:

$$
R_{g,eff} = r_{BE} = R_{gopt}\sqrt{\beta}
$$

(24.1)

(24.2)
<!-- page-import:1362:end -->

<!-- page-import:1364:start -->
24.1 Integrierte Hochfrequenz-Verstärker 1327

a ohne Anpassung

$R_g = R_{g\ opt} = 575\,\Omega$

oder

$R_g = Z_W = 50\,\Omega$

$b$ mit Abschlusswiderstand

$R_g = Z_W = 50\,\Omega$

$R = 50\,\Omega$

c mit Basisschaltung

$R_g = Z_W = 50\,\Omega$

$520\,\mu\mathrm{A}$

d mit Anpassnetzwerk (Leistungsanpassung oder Rauschanpassung)

$R_g = Z_W = 50\,\Omega$

Anpass-
netzwerk

Abb. 24.3. Schaltungen zum Vergleich der Rauschzahlen

### 24.1.3 Entwurf rauscharmer integrierter HF-Verstärker (LNA)

Abbildung 24.4 zeigt die Parameter, die beim Entwurf eines integrierten HF-Verstärkers wichtig sind. Alle Parameter hängen mehr oder weniger voneinander ab und müssen gemeinsam optimiert werden, da die Forderungen, die sich aus der Optimierung einzelner Parameter ergeben, widersprüchlich sind.

Besonders kritisch sind die Anforderungen beim ersten Verstärker in einem Empfänger. Dieser Verstärker wird auch als LNA (*low noise amplifier*) bezeichnet, obwohl in den meisten Anwendungen nicht eine möglichst geringe Rauschzahl, sondern ein möglichst

Verstärkung

Verlustleistung

Rauschzahl

Chip-Fläche

Linearität (IP3)

Anpassung

Abb. 24.4.
Parameter beim Entwurf eines integrierten HF-
Verstärkers
<!-- page-import:1364:end -->

<!-- page-import:1365:start -->
1328  24. Hochfrequenz-Verstärker

großer Dynamikbereich bei *ausreichend* geringer Rauschzahl gefordert ist. Die Anforderungen an einen LNA lauten:

- Die Verstärkung soll einen mittleren Wert haben, damit die Rauschzahl des Empfängers auf einen akzeptablen Wert abnimmt *und* starke Signale ohne Übersteuerung verarbeitet werden können; darauf sind wir bereits im Abschnitt 22.2.2.2 eingegangen.
- Die Rauschzahl soll möglichst gering sein, da sie den stärksten Einfluss auf die Rauschzahl des Empfängers hat, siehe Abschnitt 22.2.4.
- Der Kompressionspunkt und der Intercept-Punkt $IP3$ sollen möglichst hoch sein, damit ein hoher Dynamikbereich erzielt wird, siehe Abschnitt 22.2.4.
- Am Eingang soll eine möglichst gute Anpassung an den Wellenwiderstand $Z_W$ der externen Leitungen vorliegen.

Die relative Wichtigkeit dieser Forderungen hängt stark von der Anwendung ab. Bei einem Satellitenempfänger sind die Empfangspegel generell niedrig; deshalb wird kein hoher Dynamikbereich benötigt und man kann die Rauschzahl ohne Rücksicht auf den Dynamikbereich optimieren. Dagegen hängen die Empfangspegel in der Mobilkommunikation stark vom Abstand zwischen Basisstation und Mobilteil ab und können sehr große Werte annehmen; deshalb muss vor allem der Empfänger in einer Basisstation einen sehr hohen Dynamikbereich besitzen. Die meisten anderen Anwendungen liegen zwischen diesen beiden Extremen.

Wir konzentrieren uns im folgenden auf das *magische LNA-Dreieck* aus Anpassung, Rauschzahl und Intercept-Punkt für den Fall hoher Anforderungen an den Dynamikbereich. Man muss in diesem Fall eine Gegenkopplung verwenden, um einen ausreichend hohen Intercept-Punkt zu erzielen. Bei der Untersuchung des Rauschverhaltens der Grundschaltungen im Abschnitt 4.2.4.8 haben wir gesehen, dass die Emitterschaltung mit Spannungsgegenkopplung prinzipiell den besten Kompromiss zwischen Linearität und Rauschzahl ermöglicht. Die dazu erforderlichen Bedingungen können jedoch bei HF-Verstärkern im oberen MHz- und GHz-Bereich nicht eingehalten werden. Zudem kann man bei HF-Verstärkern aufgrund der Schmalbandigkeit eine Stromgegenkopplung mit Induktivitäten verwenden, die ebenfalls sehr günstige Eigenschaften besitzt; deshalb wird fast ausschließlich die Stromgegenkopplung verwendet. Abbildung 24.5 zeigt die Varianten mit ohmscher und induktiver Stromgegenkopplung. Die Emitter- und die Sourceschaltung werden grundsätzlich mit Kaskode ausgeführt, um den Miller-Effekt zu vermeiden, siehe Abschnitt 4.1.3.

#### 24.1.3.1 Ohmsche Gegenkopplung bei niedrigen Frequenzen

Wir betrachten zunächst die Abhängigkeit der Größen bei niedrigen Frequenzen, bei denen wir noch mit dem statischen Transistormodell rechnen können. Wir erhalten dadurch einen Einblick in die Zusammenhänge.

##### 24.1.3.1.1 Eingangswiderstand

Abbildung 24.6 zeigt die Kleinsignalersatzschaltbilder der Eingangskreise einer Emitter- und einer Basisschaltung, jeweils mit ohmscher Stromgegenkopplung; wir haben dabei auf eine detaillierte Darstellung der Kleinsignalersatzschaltbilder der Transistoren verzichtet. Bei der Basisschaltung haben wir den Innenwiderstand der Stromquelle aus Abb. 24.5b vernachlässigt und die Zählrichtungen der Spannungen so gewählt, dass dieselbe Orientierung bezüglich des Kollektorstroms $i_C$ vorliegt wie bei der Emitterschaltung. Der Transistor arbeitet in beiden Fällen mit der reduzierten Steilheit $S_{red}$, die wir in (2.85) eingeführt haben:
<!-- page-import:1365:end -->

<!-- page-import:1366:start -->
24.1 Integrierte Hochfrequenz-Verstärker 1329

a Emitterschaltung mit Kaskode

b Basisschaltung

c Sourceschaltung mit Kaskode

d Gateschaltung

**Abb. 24.5.** Grundschaltungen eines integrierten HF-Verstärkers mit Stromgegenkopplung für Anwendungen mit hohen Anforderungen an den Dynamikbereich

$$
S_{red} \;=\; \frac{i_C}{u_e} \;=\; \frac{S}{1 + S\,R_E}
$$

Für die Eingangswiderstände gilt:

$$
r_e \;=\;
\begin{cases}
\beta / S_{red} & \text{Emitterschaltung} \\
1 / S_{red} & \text{Basisschaltung}
\end{cases}
$$

Wir setzen in beiden Fällen eine Leistungsanpassung voraus: $R_g = r_e$; dann gilt:

$$
\frac{u_e}{u_g} \;=\; \frac{r_e}{R_g + r_e} \;=\; \overset{R_g = r_e}{\frac{1}{2}}
\;\Rightarrow\;
\frac{i_C}{u_g} \;=\; \frac{1}{2}\,\frac{i_C}{u_e} \;=\; \frac{1}{2}\,S_{red}
$$

Wir untersuchen im folgenden den Einfluss der Gegenkopplung, indem wir den Gegenkopplungsfaktor $S\,R_E$ variieren. Damit die Verstärkung konstant bleibt, müssen wir dabei $R_E$ und $S$ so variieren, dass die reduzierte Steilheit $S_{red}$ konstant bleibt.
<!-- page-import:1366:end -->

<!-- page-import:1367:start -->
1330  24. Hochfrequenz-Verstärker

a Emitterschaltung

b Basisschaltung

**Abb. 24.6.** Kleinsignalersatzschaltbilder der Eingangskreise mit ohmscher Stromgegenkopplung. Wir haben hier auf eine detaillierte Darstellung der Kleinsignalersatzschaltbilder der Transistoren verzichtet. Es gilt: $S_{red} = S/(1 + S R_E)$.

#### 24.1.3.1.2 Eingangs-Intercept-Punkt

Zur Abschätzung des Eingangs-Intercept-Punkts $IIP3$ erweitern wir die Reihenentwicklung der Kennlinie der Emitterschaltung mit Stromgegenkopplung aus (2.86) auf Seite 113 um den kubischen Anteil. Da wir dabei nicht nur den Gegenkopplungswiderstand $R_E$, sondern auch den Innenwiderstand $R_g$ der Signalquelle berücksichtigen müssen, fassen wir die beiden Widerstände zu einem äquivalenten Gegenkopplungswiderstand zusammen, siehe Abb. 24.7:

$$
R_E' =
\begin{cases}
R_E + R_g/\beta & \text{Emitterschaltung} \\
R_E + R_g & \text{Basisschaltung}
\end{cases}
$$

Die Berechnung der Reihenentwicklung ist aufwendig; das Ergebnis lautet:

a Emitterschaltung

b Basisschaltung

**Abb. 24.7.** Berücksichtigung des Innenwiderstands $R_g$ der Signalquelle bei der Berechnung des Eingangs-Intercept-Punkts $IIP3$
<!-- page-import:1367:end -->

<!-- page-import:1368:start -->
24.1 Integrierte Hochfrequenz-Verstärker 1331

$$
\frac{i_C}{I_{C,A}}=\underbrace{\frac{1}{1+SR_E'}}_{a_1}\frac{u_g}{U_T}+\ldots+\underbrace{\left[\frac{1}{2\,(1+SR_E')^5}-\frac{1}{3\,(1+SR_E')^4}\right]}_{a_3}\left(\frac{u_g}{U_T}\right)^3+\ldots
$$

Bei Leistungsanpassung mit $R_g=r_e$ gilt für beide Schaltungen:

$$
SR_E'=1+2SR_E
$$

Damit und mit den Koeffizienten $a_1$ und $a_3$ der Reihenentwicklung berechnen wir mit (4.180) auf Seite 454 den Eingangs-Intercept-Punkt $IIP3$:

$$
\frac{\hat{u}_{g,IP3}}{U_T}=\sqrt{\left|\frac{4a_1}{3a_3}\right|}=\frac{8\sqrt{2}\,(1+SR_E)^2}{\sqrt{1+4SR_E}}
$$

Er ist für beide Schaltungen gleich.

#### 24.1.3.1.3 Rauschzahl

Die Rauschzahl der Emitterschaltung berechnen wir mit (4.189) auf Seite 464 und den äquivalenten Rauschdichten aus (4.220) und (4.221) auf Seite 494:

$$
F=1+\frac{|u_{r,0}(f)|^2+R_g^2|i_{r,0}(f)|^2}{4kT_0R_g}
=1+\frac{R_B+R_E}{R_g}+\frac{1}{2SR_g}+\frac{SR_g}{2\beta}
$$

Die Rauschzahl der Basisschaltung ist normalerweise etwas größer, da das Rauschen im Kollektorkreis wegen der geringen Stromverstärkung nicht vernachlässigt werden kann, siehe Abschnitt 4.2.4.8. Wir vernachlässigen diesen Effekt, da es uns hier nicht um möglichst exakte Werte, sondern um das Verhalten bei zunehmender Stromgegenkopplung geht; damit erhalten wir bei Leistungsanpassung mit $R_g=r_e$:

$$
F=
\begin{cases}
1+\dfrac{1+2S\,(R_B+R_E)}{2\beta\,(1+SR_E)}+\dfrac{1}{2}(1+SR_E) & \text{Emitterschaltung} \\
1+\dfrac{1+2S\,(R_B+R_E)}{2\,(1+SR_E)}+\dfrac{1}{2\beta}(1+SR_E) & \text{Basisschaltung}
\end{cases}
\qquad (24.3)
$$

Da sich die Eingangswiderstände $r_e$ und damit auch die Innenwiderstände $R_g$ um die Stromverstärkung $\beta$ unterscheiden, tritt dieser Faktor bei der Rauschzahl der Emitterschaltung im Nenner des zweiten Terms, bei der Basisschaltung dagegen im Nenner des dritten Terms auf. Für uns ist nur der Bereich mittlerer Gegenkopplung mit $SR_E\ll\beta$ von Interesse; in diesem Bereich gilt:

$$
F\approx
\begin{cases}
3/2+SR_E & \text{Emitterschaltung} \\
3/2+SR_B & \text{Basisschaltung}
\end{cases}
$$

Die Rauschzahl der Emitterschaltung nimmt demnach proportional zum Gegenkopplungsfaktor zu, während die Rauschzahl der Basisschaltung etwa konstant bleibt. Wenn der Basisbahnwiderstand relativ groß ist, nimmt die Rauschzahl der Basisschaltung mit zunehmender Gegenkopplung sogar spürbar ab.
<!-- page-import:1368:end -->

<!-- page-import:1369:start -->
1332  24. Hochfrequenz-Verstärker

a Emitterschaltung

b Basisschaltung

**Abb. 24.8.** Anpassung an den Wellenwiderstand $Z_W$

#### 24.1.3.1.4 Leistungsanpassung

Bevor wir die Schaltungen vergleichen können, müssen wir noch eine Anpassung an den Wellenwiderstand $Z_W$ der externen Leitungen vornehmen; wir nehmen $Z_W = 50\,\Omega$ an. Bei der Basisschaltung wird kein Anpassnetzwerk benötigt, da die reduzierte Steilheit $S_{red}$ üblicherweise im Bereich von $20\,\mathrm{mS} = 1/(50\,\Omega)$ liegt und deshalb ohne Kompromisse auf diesen Wert festgelegt werden kann; deshalb gilt für die Basisschaltung:

$$
R_g = r_e = 1/S_{red} = Z_W = 50\,\Omega
$$

Dagegen gilt für die Emitterschaltung:

$$
R_g = r_e = \beta/S_{red} = \beta Z_W \qquad \overset{\beta=100}{=} \qquad 5\,\mathrm{k}\Omega
$$

Hier müssen wir eine Impedanztransformation mit dem Faktor $\beta$ vornehmen, z.B. mit einem Übertrager mit dem Übersetzungsverhältnis $1\!:\!\sqrt{\beta}$. Abbildung 24.8 zeigt die Anpassung der beiden Schaltungen.

Die Impedanztransformation bei der Emitterschaltung wirkt sich auch auf den Eingangs-Intercept-Punkt $IIP3$ aus, da die Quellenspannung $u_g$ nun auf der Primärseite des Übertragers in Abb. 24.8a liegt und um den Faktor $\sqrt{\beta}$ geringer ist als die transformierte Spannung auf der Sekundärseite; dadurch reduziert sich die Spannung $\hat{u}_{g,IIP3}$ ebenfalls um den Faktor $\sqrt{\beta}$.

#### 24.1.3.1.5 Vergleich der Schaltungen

Abbildung 24.9 zeigt in der oberen Hälfte die Rauschzahl $F$ und den Eingangs-Intercept-Punkt $IIP3$ für eine Emitter- und eine Basisschaltung in Abhängigkeit vom Gegenkopplungsfaktor $S R_E$; wir haben dabei die Rauschzahl in dB und den Intercept-Punkt in dBm angegeben 4:

$$
F\ [\mathrm{dB}] = 10 \log F \quad,\quad IIP3\ [\mathrm{dBm}] \overset{Z_W=50\,\Omega}{=} 20 \log \left(\frac{\hat{u}_{g,IIP3}}{1\,\mathrm{V}}\right) + 4
$$

In der unteren Hälfte haben wir zusätzlich die relative Inband-Dynamik

$$
IDR_{rel}\ [\mathrm{dB}] \overset{(22.16)}{\sim} \frac{2}{3}\left(IIP3\ [\mathrm{dBm}] - F\ [\mathrm{dB}]\right)
$$

und den Arbeitspunktstrom $I_{C,A} = S U_T$ der Transistoren dargestellt. Die relative Inband-Dynamik haben wir auf den Wert der Emitterschaltung bei $S R_E = 0$ bezogen.

4 Der $IIP3$ bezieht sich auf die verfügbare Leistung $P_{A,g} = \hat{u}_g^2/(8Z_W)$ des Signalgenerators; daraus folgt mit $IIP3\,[\mathrm{dBm}] = 10 \log(P_{A,g}/1\,\mathrm{mW})$ die genannte Umrechnungsformel.
<!-- page-import:1369:end -->

<!-- page-import:1370:start -->
# 24.1 Integrierte Hochfrequenz-Verstärker

1333

**Abb. 24.9.** Rauschzahl $F$, Eingangs-Intercept-Punkt $IIP3$, relative Inband-Dynamik $IDR_{rel}$ und Ruhestrom $I_{C,A}$ für eine Emitter- und eine Basisschaltung mit $S_{red}=20\,\mathrm{mS}$, $\beta=100$ und $SR_B=1$ bei Leistungsanpassung an $Z_W=50\,\Omega$

Die Kurven zeigen die deutliche Überlegenheit der Basisschaltung in allen Anwendungen, in denen eine Anpassung an den Wellenwiderstand externer Leitungen und eine hohe Inband-Dynamik benötigt werden; nur bei geringen Anforderungen an die Inband-Dynamik ist die Emitterschaltung aufgrund ihrer geringeren Rauschzahl für $S_R{}_E \to 0$ besser. Durch die Impedanztransformation in Abb. 24.8a hat sich zwar die Leistungsverstärkung der Emitterschaltung um den Faktor $\beta$ erhöht – bei $\beta=100$ um $20\,\mathrm{dB}$ –, eine hohe Verstärkung ist aber bei einem LNA in einem Empfänger mit hohem Dynamikbereich störend. Die Basisschaltung profitiert also davon, dass sie einen niedrigen Eingangswiderstand und eine moderate Verstärkung besitzt.

Da wir die statischen Gleichungen verwendet haben, sind die Ergebnisse für die Emitterschaltung nur für den Frequenzbereich $f<f_\beta=f_T/\beta$ gültig; oberhalb $f_\beta$ nimmt die Stromverstärkung ab, siehe Abb. 2.43 auf Seite 82. Bei der Basisschaltung ist keine Einschränkung erforderlich, da die statischen Gleichungen im Eingangskreis bis in den Bereich der Transitfrequenz $f_T$ gültig bleiben.

Man kann dieselbe Berechnung auch für Verstärker mit Mosfets durchführen. Auch hier zeigt sich, dass die Gateschaltung der Sourceschaltung deutlich überlegen ist, wenn eine Anpassung an externe Leitungen und ein hoher Dynamikbereich benötigt werden.
<!-- page-import:1370:end -->

<!-- page-import:1371:start -->
1334  24. Hochfrequenz-Verstärker

a Bipolartransistor  
b integrierter Mosfet

**Abb. 24.10.** Kleinsignalersatzschaltbilder der Transistoren

Diese Zusammenhänge bleiben auch mit zunehmender Frequenz erhalten, allerdings holen die Emitterschaltung und die Sourceschaltung im Vergleich zur Basisschaltung und zur Gateschaltung deutlich auf, wenn man eine induktive Stromgegenkopplung verwendet.

#### 24.1.3.2 Gegenkopplung bei hohen Frequenzen

##### 24.1.3.2.1 Kleinsignalersatzschaltbild

Abbildung 24.10 zeigt die Kleinsignalersatzschaltbilder eines Bipolartransistors und eines integrierten Mosfets. Die Widerstände $r_{CE}$ und $r_{DS}$ sowie die Kapazität $C_{BD}$ können wir vernachlässigen, da bei den Schaltungen in Abb. 24.5a und 24.5c auf den Eingangstransistor eine Kaskodestufe mit niedriger Eingangsimpedanz folgt. Für $f > f_\beta$ können wir zudem den Widerstand $r_{BE}$ vernachlässigen. Mit diesen Vernachlässigungen sind die Kleinsignalersatzschaltbilder ohne Stromgegenkopplung äquivalent, da in diesem Fall $u_{BS} = 0$ gilt; die Substrat-Steilheit $S_B$ und die Kapazität $C_{BS}$ sind in diesem Fall unwirksam.

Bei Stromgegenkopplung müssen wir $S_B$ und $C_{BS}$ berücksichtigen. Wir können aber eine Umformung vornehmen, die den Einfluß dieser Elemente verdeutlicht. Dazu betreiben wir den Mosfet mit einer Source-Impedanz $Z_S$, verbinden den Bulk-Anschluß mit Masse, trennen die gesteuerte Stromquelle in Abb. 24.10b in zwei Quellen mit den Steilheiten $S$ und $S_B$ auf und trennen die Quelle mit der Steilheit $S_B$ in eine Quelle am Drain-Anschluß und eine Quelle am Source-Anschluß auf. Die Quelle am Source-Anschluß liegt parallel zu ihrer Steuerspannung und kann deshalb durch einen Widerstand $1/S_B$ ersetzt werden. Abbildung 24.11 zeigt das ursprüngliche Schaltbild und das Ergebnis der Umformung. Der Widerstand $1/S_B$ und die Kapazität $C_{BS}$ liegen demnach parallel zur Source-Impedanz $Z_S$; dadurch wird die Stärke der Gegenkopplung begrenzt. Die Kapazität $C_{BS}$ können wir zwar

**Abb. 24.11.** Umformung des Kleinsignalersatzschaltbilds des Mosfets aus Abb. 24.10b bei Stromgegenkopplung mit einer Source-Impedanz $Z_S$
<!-- page-import:1371:end -->

<!-- page-import:1372:start -->
24.1 Integrierte Hochfrequenz-Verstärker 1335

a Bipolartransistor $(f > f_\beta)$

b integrierter Mosfet

**Abb. 24.12.** Kleinsignalersatzschaltbilder für den Eingangskreis

durch eine Source-Induktivität in Resonanz nehmen, aber der Betrag der effektiven Gegenkopplungsimpedanz ist durch $1/S_B$ nach oben beschränkt.

Aufgrund der Stromgegenkopplung arbeiten die Eingangstransistoren mit einer entsprechend reduzierten Steilheit $S_{red}$, während die Kaskodestufen näherungsweise die Eingangsimpedanz $1/S$ besitzen; die Verstärkung der Eingangsstufen beträgt demnach $A \approx -S_{red}/S$ mit $|A| < 1$. Wir können deshalb die Spannung am Kollektor- bzw. Drain-Anschluss näherungsweise zu Null setzen; der Anschluss ist dann mit der Kleinsignalmasse verbunden. Damit erhalten wir die in Abb. 24.12 gezeigten Kleinsignalersatzschaltbilder für die Eingangskreise.

#### 24.1.3.2.2 Eingangsimpedanz und Anpassung bei einem Bipolartransistor

Für die innere Eingangsimpedanz $Z'_e$ der Emitterschaltung mit Stromgegenkopplung in Abb. 24.12a gilt:

$$
Z'_e = \frac{1 + Z_E \left(S + sC_E\right)}{sC_E} \quad {}^{f<f_T}_{\approx} \quad \frac{1 + SZ_E}{sC_E}
$$

Daraus folgt für die ohmsche und die induktive Gegenkopplung 5:

$$
Z'_e \approx
\begin{cases}
\frac{1 + SR_E}{sC_E} & \text{für } Z_E = R_E \\
\frac{1}{sC_E} + \frac{SL_E}{C_E} \quad \overset{(2.45)}{\approx} \quad \frac{1}{sC_E} + \omega_T L_E & \text{für } Z_E = sL_E
\end{cases}
\qquad (24.4)
$$

Bei ohmscher Gegenkopplung mit $Z_E = R_E$ ist die innere Eingangsimpedanz kapazitiv; zusammen mit der Kapazität $C_C$ und dem Basisbahnwiderstand $R_B$ erhält man eine Eingangsimpedanz mit konstantem Realteil $R_B$:

$$
Z_e \approx R_B + \frac{1}{sC}
\qquad \text{mit } C = C_C + \frac{C_E}{1 + SR_E}
$$

Bei Leistungsanpassung muss die Quellenimpedanz $Z_g$ nach Abb. 24.13a konjugiert-komplex zur Eingangsimpedanz $Z_e$ sein: $Z_g = Z_e^*$; deshalb hat die Quellenimpedanz ebenfalls den Realteil $R_B$. Der Basisbahnwiderstand $R_B$ ist aber im allgemeinen deutlich geringer als der Realteil der optimalen Quellenimpedanz $Z_{g,opt}$, bei der die Rauschzahl minimal wird; daraus resultiert eine relativ hohe Rauschzahl. Außerdem führt das thermische Rauschen des Gegenkopplungswiderstands $R_E$ zu einer weiteren Erhöhung der

---

5 Bei der Berechnung der Transitfrequenz $\omega_T = 2\pi\, f_T$ mit (2.45) nehmen wir $C_E \gg C_C$ an.
<!-- page-import:1372:end -->

<!-- page-import:1373:start -->
1336  24. Hochfrequenz-Verstärker

a Leistungsanpassung

b Rauschanpassung

**Abb. 24.13.** Impedanzen bei Anpassung

Rauschzahl. Bessere Eigenschaften erhält man mit einer induktiven Gegenkopplung mit einer Induktivität $L_E$ und $Z_E = sL_E$. Die innere Eingangsimpedanz $Z'_e$ hat in diesem Fall einen ohmschen Anteil $\omega_T L_E$, der eine Zunahme des Realteils der Eingangsimpedanz $Z_e$ verursacht und dadurch die Differenz zwischen der Leistungsanpassung nach Abb. 24.13a und der Rauschanpassung nach Abb. 24.13b erheblich reduziert; darüber hinaus erzeugt die Induktivität im Idealfall kein Rauschen. Wir verdeutlichen die Zusammenhänge mit einem ausführlichen Beispiel.

*Beispiel:* Wir vergleichen die beiden Emitterschaltungen mit Kaskode in Abb. 24.14 bezüglich ihres Verhaltens bei ohmscher und induktiver Stromgegenkopplung mit Hilfe einer Schaltungssimulation und verwenden dabei typische integrierte Bipolartransistoren des Typs UHFP-N mit einer Transitfrequenz $f_T \approx 9\,\mathrm{GHz}$. Wir haben auf eine praktische Ausführung der Arbeitspunkteinstellung verzichtet – man verwendet dazu Schaltungen ähnlich der in Abb. 24.28b – und den Arbeitspunktstrom $I_{C,A} = 3\,\mathrm{mA}$ mit einer idealen Stromquelle $I_{B,A}$ eingestellt. Die Betriebsfrequenz beträgt $f = 900\,\mathrm{MHz}$. Wir ermitteln die Eingangsimpedanz $Z_e$ und daraus die Quellenimpedanz $Z_{g,\mathrm{anp}} = Z_e^*$ bei Leistungsanpassung. Anschließend ermitteln wir die optimale Quellenimpedanz $Z_{g,\mathrm{opt}}$ bei Rauschanpassung; dazu verwenden wir das in Abb. 2.55 auf Seite 99 gezeigte Verfahren. Wir variieren den Gegenkopplungswiderstand $R_E$ im Bereich $R_E = 0 \dots 100\,\Omega$ und die Gegenkopplungsinduktivität $L_E$ im Bereich $L_E = 0 \dots 18\,\mathrm{nH}$ mit $2\pi f L_E = 0 \dots 100\,\Omega$.

Abbildung 24.15 zeigt die Ortskurven der Impedanzen $Z_{g,\mathrm{anp}}$ und $Z_{g,\mathrm{opt}}$ bei ohmscher und induktiver Gegenkopplung. Die Ortskurven beginnen für $R_E = 0$ bzw. $L_E = 0$ in den Punkten $Z_{g,\mathrm{anp}} = (43 + j73)\,\Omega$ und $Z_{g,\mathrm{opt}} = (170 + j40)\,\Omega$ und verlaufen entsprechend den Pfeilen. Wir stellen fest:

a ohmsche Stromgegenkopplung

b induktive Stromgegenkopplung

**Abb. 24.14.** Beispiel: Emitterschaltung mit Kaskode mit Transistoren UHFP-N der Größe 1 und einem Arbeitspunktstrom $I_{C,A} = 3\,\mathrm{mA}$. Die Betriebsfrequenz beträgt $f = 900\,\mathrm{MHz}$.
<!-- page-import:1373:end -->

<!-- page-import:1374:start -->
24.1 Integrierte Hochfrequenz-Verstärker 1337

**Abb. 24.15.**  
Beispiel: Ortskurven der Impedanzen $Z_{g,anp}$ für Leistungsanpassung und $Z_{g,opt}$ für Rauschanpassung bei ohmscher ($R_E$) und induktiver ($L_E$) Stromgegenkopplung. Die Doppelpfeile markieren die Werte für die Schaltungsbeispiele aus Abb. 24.17.

– Bei ohmscher Gegenkopplung bleibt der Realteil von $Z_{g,anp}$ wie erwartet etwa konstant; der Imaginärteil nimmt mit zunehmender Gegenkopplung zu, da die Eingangskapazität abnimmt. Der Abstand zur optimalen Quellenimpedanz $Z_{g,opt}$ nimmt mit zunehmender Gegenkopplung ebenfalls zu. Wir erwarten deshalb, dass auch die Rauschzahl mit zunehmender Gegenkopplung zunimmt, wie wir dies bereits bei niedrigen Frequenzen im letzten Abschnitt festgestellt haben.

– Bei induktiver Gegenkopplung nimmt zunächst nur der Realteil von $Z_{g,anp}$ zu, während der Imaginärteil etwa konstant bleibt; dadurch verläuft $Z_{g,anp}$ zunächst in Richtung $Z_{g,opt}$. Der Abstand zwischen $Z_{g,anp}$ und $Z_{g,opt}$ durchläuft ein Minimum und nimmt dann wieder zu. Wir erwarten deshalb, dass die Rauschzahl ebenfalls ein Minimum durchläuft.

Abbildung 24.16 zeigt die Verläufe der Rauschzahl $F_{anp}$ bei Leistungsanpassung und der optimalen Rauschzahl $F_{opt}$. Bei ohmscher Gegenkopplung nimmt der Abstand zwischen der optimalen Rauschzahl $F_{opt}$ und der Rauschzahl $F_{anp}$ bei Leistungsanpassung erwartungsgemäß mit zunehmender Gegenkopplung zu; auch die optimale Rauschzahl $F_{opt}$ nimmt zu, da sich das Rauschen des Gegenkopplungswiderstands immer stärker bemerkbar macht. Bei induktiver Gegenkopplung erhalten wir für $L_E \approx 3\,\mathrm{nH}$ das erwartete Minimum der Rauschzahl $F_{anp}$ bei Leistungsanpassung; dabei wird die optimale Rauschzahl $F_{opt}$ nahezu erreicht.

Wir haben beide Varianten der Emitterschaltung mit Kaskode und eine Basisschaltung mit ohmscher Stromgegenkopplung für eine Verstärkung von 20 dB bei $f = 900\,\mathrm{MHz}$ dimensioniert. Die Eingänge haben wir an den Wellenwiderstand $Z_W = 50\,\Omega$ der externen Leitungen angepasst. Wir beschränken uns auf eine Anpassung mit idealen Elementen und weisen darauf hin, dass bei der praktischen Realisierung der Anpassnetzwerke auch der Einfluss des Gehäuses und der Bonddrähte berücksichtigt werden muss. An den Ausgängen
<!-- page-import:1374:end -->

<!-- page-import:1375:start -->
1338  24. Hochfrequenz-Verstärker

Abb. 24.16.  
Beispiel: Rauschzahl $F_{anp}$ bei Leistungsanpassung und optimale Rauschzahl $F_{opt}$ für die Schaltungen aus Abb. 24.14

folgen weitere Stufen, deren Eingangsimpedanz einen ohmschen und einen kapazitiven Anteil besitzt. Wir nehmen an, dass der ohmsche Anteil bereits im Kollektorwiderstand $R_C$ enthalten ist; den kapazitiven Anteil und die Ausgangskapazität der Kaskode stimmen wir mit der Kollektorinduktivität $L_C$ auf Parallelresonanz bei $f = 900\,\mathrm{MHz}$ ab. Auf eine zusätzliche Kapazität wie in Abb. 24.5 haben wir verzichtet.

Bei den Emitterschaltungen mit Kaskode verwenden wir die Anpassnetzwerke aus Abb. 23.21 auf Seite 1302. Bei der Basisschaltung verwenden wir das Collins-Filter aus Abb. 23.25 auf Seite 1305, weil wir in diesem Fall die Kapazität $C_2$ des Collins-Filters mit der Ausgangskapazität der Stromquelle $I_0$ zu einer gemeinsamen Kapazität $C_0$ zusammenfassen können. Bei der Dimensionierung sind wir iterativ vorgegangen:

- Wir haben den Eingang mit $50\,\Omega$ abgeschlossen und die Ausgangsimpedanz durch Variation von $L_C$ auf Parallelresonanz bei $f = 900\,\mathrm{MHz}$ abgestimmt.
- Wir haben das Anpassnetzwerk am Eingang entfernt, die Eingangsimpedanz ohne Anpassnetzwerk ermittelt und ein neues Anpassnetzwerk berechnet.
- Mit dem neuen Wert für $L_C$ und dem neuen Anpassnetzwerk haben wir die Verstärkung ermittelt und durch Variation von $R_C$ auf $20\,\mathrm{dB}$ eingestellt.

a  ohmsche Stromgegenkopplung

b  induktive Stromgegenkopplung

Abb. 24.17. Beispiel: Dimensionierte Emitterschaltungen mit Kaskode ($f = 900\,\mathrm{MHz}$)
<!-- page-import:1375:end -->

<!-- page-import:1376:start -->
24.1 Integrierte Hochfrequenz-Verstärker 1339

**Abb. 24.18.**  
Beispiel: Dimensionierte Basisschaltung mit ohmscher Stromgegenkopplung $(f = 900\,\mathrm{MHz})$

Nach einigen Iterationen ändern sich die Werte praktisch nicht mehr.

Anschließend haben wir die Rauschzahl $F$, den Eingangs-Intercept-Punkt $IIP3$ und die relative Inband-Dynamik

$$
IDR_{rel}\,[\mathrm{dB}] \sim 2\,(IIP3\,[\mathrm{dBm}] - F\,[\mathrm{dB}]) / 3
$$

ermittelt; Abb. 24.19 zeigt die Ergebnisse. Wie schon bei niedrigen Frequenzen zeigt sich die Basisschaltung auch hier überlegen, wenn eine hohe Inband-Dynamik gefordert ist; der Vorteil gegenüber der Emitterschaltung mit induktiver Gegenkopplung ist aber gering und wird mit einer relativ hohen Rauschzahl erkauft. In der Praxis muss man von Fall zu Fall entscheiden, ob die geringere Rauschzahl der Emitterschaltung mit induktiver Gegenkopplung oder die höhere Inband-Dynamik der Basisschaltung wichtiger ist. Die Emitterschaltung mit ohmscher Gegenkopplung besitzt deutlich schlechtere Parameter.

Wir vergleichen die Parameter der Schaltungen mit ohmscher Gegenkopplung noch mit den Ergebnissen des letzten Abschnitts. Für den Gegenkopplungsfaktor gilt:

$$
S\,R_E \;=\; \frac{I_{C,A}}{U_T}\,R_E \;=\; \frac{3\,\mathrm{mA}}{26\,\mathrm{mV}} \cdot 40\,\Omega \;=\; 4{,}6
$$

Für diesen Gegenkopplungsfaktor entnehmen wir aus Abb. 24.9 auf Seite 1333 für die Emitterschaltung die Werte $F \approx 6\,\mathrm{dB}$ und $IIP3 \approx -10\,\mathrm{dBm}$ und für die Basisschaltung $IIP3 \approx 10\,\mathrm{dBm}$. Die Rauschzahl der Basisschaltung müssen wir mit (24.3) berechnen, da in unserem Beispiel $R_B = 40\,\Omega$ und $S\,R_B = 4{,}6$ gilt, während in Abb. 24.9 $S\,R_B = 1$ angenommen wurde; wir erhalten:

$$
F \;\approx\; 1 + \frac{1 + 2S\,R_B + 2S\,R_E}{2(1 + S\,R_E)}
\;=\;
1 + \frac{1 + 2\cdot 4{,}6 + 2\cdot 4{,}6}{2(1 + 4{,}6)}
\;\approx\; 2{,}7 \;\approx\; 4{,}4\,\mathrm{dB}
$$

|  | Emitterschaltung Abb. 24.17a | Emitterschaltung Abb. 24.17b | Basisschaltung Abb. 24.18 |
|---|---:|---:|---:|
| Gegenkopplung | $R_E = 40\,\Omega$ | $L_E = 3\,\mathrm{nH}$ | $R_E = 40\,\Omega$ |
| Rauschzahl $F$ | $6{,}1\,\mathrm{dB}$ | $2{,}8\,\mathrm{dB}$ | $5{,}8\,\mathrm{dB}$ |
| Eingangs-Intercept-Punkt $IIP3$ | $-9{,}7\,\mathrm{dBm}$ | $-1\,\mathrm{dBm}$ | $7{,}7\,\mathrm{dBm}$ |
| relative Inband-Dynamik $IDR_{rel}$ | $0\,\mathrm{dB}$ | $8\,\mathrm{dB}$ | $11{,}8\,\mathrm{dB}$ |

**Abb. 24.19.** Beispiel: Simulierte Parameter der Schaltungen $(f = 900\,\mathrm{MHz})$
<!-- page-import:1376:end -->

<!-- page-import:1377:start -->
1340  24. Hochfrequenz-Verstärker

**Abb. 24.20.**  
Vereinfachtes Kleinsignalersatzschaltbild für den Eingangskreis bei einem Mosfet

Die Werte stimmen trotz der hohen Frequenz gut mit den simulierten Werten aus Abb. 24.19 überein; nur die Rauschzahl der Basisschaltung fällt zu niedrig aus, da wir in (24.3) den Einfluss des Kollektorwiderstands $R_C$ nicht berücksichtigt haben, siehe (4.233) auf Seite 500. Auch bei der Emitterschaltung mit induktiver Gegenkopplung erreichen wir aufgrund des Kollektorwiderstands mit $F = 2{,}8\,\mathrm{dB}$ nicht den Wert $F = 2{,}2\,\mathrm{dB}$ aus Abb. 24.16.

#### 24.1.3.2.3 Eingangsimpedanz und Anpassung bei einem Mosfet

Aufgrund der geringeren Nichtlinearität der Übertragungskennlinie ist die Gegenkopplung bei einem Mosfet normalerweise wesentlich geringer als bei einem Bipolartransistor. In den meisten Fällen ist die Impedanz $Z_S$ in Abb. 24.12b so gering, dass man die Substrat-Steilleit $S_B$ und die Bulk-Source-Kapazität $C_{BS}$ für die prinzipiellen Überlegungen, die wir hier anstellen, vernachlässigen kann; dann erhält man bei induktiver Stromgegenkopplung das in Abb. 24.20 gezeigte vereinfachte Kleinsignalersatzschaltbild, das dem Kleinsignalersatzschaltbild des Bipolartransistors in Abb. 24.12a entspricht.

Für die innere Eingangsimpedanz gilt entsprechend dem induktiven Fall in (24.4) $^6$:

$$
Z_e' \approx \frac{1}{s\,C_{GS}} + \frac{S L_S}{C_{GS}} \overset{(3.49)}{\approx} \frac{\omega_T}{s\,S} + \omega_T L_S
$$

Die Induktivität $L_S$ erzeugt auch hier einen ohmschen Anteil $\omega_T L_S$. Da der Gatewiderstand $R_G$ und die Gate-Drain-Kapazität $C_{GD}$ klein sind, können wir für die Eingangsimpedanz $Z_e$ die Näherung $Z_e \approx Z_e'$ verwenden. Bei Leistungsanpassung muss die Quellimpedanz den Wert $Z_{g,\mathrm{anp}} = Z_e^*$ haben; daraus folgt mit $Z_e \approx Z_e'$ und $s = j\omega$:

$$
Z_{g,\mathrm{anp}} \approx \omega_T L_S + j\,\frac{\omega_T}{\omega S}
= 2\pi f_T L_S + j\,\frac{f_T}{S f}
\qquad (24.5)
$$

Aus (3.56) entnehmen wir die optimale Quellimpedanz für eine Rauschanpassung ohne Gegenkopplung:

$$
Z_{g,\mathrm{opt}} \approx \frac{f_T}{S f}\,(0{,}3 + j0{,}66)
$$

Wenn wir annehmen, dass sich die optimale Quellimpedanz durch die schwache Gegenkopplung nur wenig ändert, können wir die Realteile von $Z_{g,\mathrm{anp}}$ und $Z_{g,\mathrm{opt}}$ gleichsetzen und damit einen Schätzwert für die optimale Induktivität erhalten:

$$
\operatorname{Re}\{Z_{g,\mathrm{anp}}\}
\stackrel{!}{=}
\operatorname{Re}\{Z_{g,\mathrm{opt}}\}
\quad\Rightarrow\quad
L_S \approx \frac{0{,}3}{2\pi f\,S} \approx \frac{0{,}05}{S f}
\qquad (24.6)
$$

Durch Einsetzen in (24.5) folgt

---

$^6$ Bei der Berechnung der Transitfrequenz $\omega_T = 2\pi f_T$ mit (3.49) nehmen wir $C_{GS} \gg C_{GD}$ an.
<!-- page-import:1377:end -->

<!-- page-import:1378:start -->
24.1 Integrierte Hochfrequenz-Verstärker 1341

$Z_{g,anp} \approx \dfrac{f_T}{S f}(0{,}3 + j)$

**Abb. 24.21.**  
Leistungsanpassung mit näherungsweiser Rauschanpassung bei einem Mosfet mit der Steilheit $S$

und damit eine gute Übereinstimmung zwischen Leistungsanpassung und Rauschanpassung. Die Anpassung an den Wellenwiderstand $Z_W$ der äußeren Leitungen erfolgt mit einem Anpassnetzwerk, siehe Abb. 24.21.

Man kann die Steilheit $S$ so wählen, dass die Realteile von $Z_{g,anp}$ und $Z_{g,opt}$ dem Wellenwiderstand $Z_W$ entsprechen:

$$\operatorname{Re}\{Z_{g,anp}\} = \operatorname{Re}\{Z_{g,opt}\} = Z_W \Rightarrow S \approx \dfrac{0{,}3\,f_T}{Z_W\,f}, \quad L_S \approx \dfrac{Z_W}{2\pi f_T}$$

In diesem Fall entfällt die Kapazität $C_{anp}$ in Abb. 24.21 und für die Induktivität gilt 7:

$$L_{anp} \approx \dfrac{Z_W}{0{,}6\,\pi\,f}$$

Für $Z_W = 50\,\Omega$ ist jedoch die erforderliche Steilheit

$$S \approx \left.\dfrac{0{,}3\,f_T}{Z_W\,f}\right|_{Z_W=50\,\Omega} = 6\,\mathrm{mS}\cdot\dfrac{f_T}{f}\ \overset{f<f_T/5}{>} \ 30\,\mathrm{mS}$$

sehr hoch; dadurch wird ein unverhältnismäßig hoher Arbeitspunktstrom benötigt. In der Praxis wird meist eine geringere Steilheit verwendet.

Während die Steilheit bei einem Bipolartransistor gemäß $S = I_{C,A}/U_T$ unmittelbar aus dem Arbeitspunktstrom $I_{C,A}$ folgt, haben wir bei einem Mosfet wegen

$$(3.10)\qquad S = K\,(U_{GS,A} - U_{th}) \qquad = \qquad (3.5)\ \dfrac{K_n' W}{L}\,(U_{GS,A} - U_{th}) \qquad \overset{L=L_{min}}{\sim} \qquad W\,(U_{GS,A} - U_{th})$$

einen weiteren Freiheitsgrad, da wir die Kanalweite $W$ und die Arbeitspunktspannung $U_{GS,A}$ unabhängig voneinander vorgeben können. Da die Kapazitäten eines Mosfets proportional zur Kanalweite $W$ sind und das Verhältnis aus Steilheit und Eingangskapazität proportional zur Transitfrequenz ist, variieren wir damit die Transitfrequenz des Mosfets:

$$f_T \sim \dfrac{S}{C} \sim \dfrac{S}{W} \sim U_{GS,A} - U_{th}$$

Bei der Wahl der Parameter $W$ und $U_{GS,A}$ müssen mehrere Aspekte berücksichtigt werden:

- Die optimale Rauschzahl $F_{opt}$ nimmt mit zunehmender Transitfrequenz ab, siehe (3.57); demnach sollte die Transitfrequenz möglichst hoch sein. Allerdings nehmen die im Abschnitt 3.3.4 beschriebenen Rauschfaktoren bei großen Arbeitspunktspannungen $U_{GS,A}$

---

7 In der Literatur wird dieser Fall bevorzugt behandelt. Wir halten ihn für nicht sinnvoll, da man in der Praxis keine Längs-Induktivität ohne Quer-Kapazitäten realisieren kann und zusätzlich die Kapazitäten des Bondpads und des Gehäuses berücksichtigt werden müssen.
<!-- page-import:1378:end -->

<!-- page-import:1379:start -->
1342  24. Hochfrequenz-Verstärker

$U_{GS,A}$

$L_K \rightarrow \infty$

$Z_e$

3,3 V

3,3 V

NMOS2  
$W = 200\,\mu\mathrm{m}$  
$L = 1{,}2\,\mu\mathrm{m}$

$I_{D,A} = 6\,\mathrm{mA}$

NMOS2  
$W = 200\,\mu\mathrm{m}$  
$L = 1{,}2\,\mu\mathrm{m}$

$L_S = 0 \ldots 100\,\mathrm{nH}$

**Abb. 24.22.**  
Beispiel: Sourceschaltung mit Kaskode und induktiver Stromgegenkopplung für $f = 900\,\mathrm{MHz}$

und den damit verbundenen hohen Stromdichten zu, so dass man ein von der Technologie abhängiges Optimum erhält.
– Mit zunehmender Transitfrequenz nimmt die Impedanz $Z_{g,anp}$ zu, siehe (24.5); dadurch wird die Anpassung an den Wellenwiderstand der externen Leitungen erschwert.
– Die Arbeitspunktspannung $U_{GS,A}$ muss so gewählt werden, dass der Arbeitspunkt im Abschnürbereich liegt: $U_{DS,A} > U_{DS,ab} = U_{GS,A} - U_{th}$; dadurch wird $U_{GS,A}$ vor allem bei niedrigen Betriebsspannungen nach oben begrenzt.

In der Praxis muss man einen geeigneten Kompromiss finden.

*Beispiel:* Wir betrachten die in Abb. 24.22 gezeigte Sourceschaltung mit Kaskode und induktiver Stromgegenkopplung. Die Betriebsfrequenz beträgt wieder $f = 900\,\mathrm{MHz}$. Wir haben eine relativ große Kanallänge $L$ gewählt, damit wir die Rauschfaktoren für große Kanallängen und die Parameter des Mosfets NMOS2 aus unseren Bibliotheken für *PSpice* verwenden können. Den Arbeitspunkt haben wir mit $W = 200\,\mu\mathrm{m}$ und $U_{GS,A} = 1{,}83\,\mathrm{V}$ so eingestellt, dass der Arbeitspunktstrom $I_{D,A} \approx 6\,\mathrm{mA}$ beträgt; der Arbeitspunkt des unteren Mosfets liegt dabei bereits leicht im ohmschen Bereich.

Im Arbeitspunkt gilt $S = 9{,}5\,\mathrm{mS}$, $C_{GS} = 270\,\mathrm{fF}$ und $C_{GD} = 80\,\mathrm{fF}$ $^8$; daraus folgt mit (3.49) die Transitfrequenz $f_T \approx 4{,}3\,\mathrm{GHz}$. Die Transitfrequenz ist relativ gering; wir können aber bei der gewählten Kanallänge keinen höheren Wert erzielen, da wir $U_{GS,A}$ nicht größer wählen können, ohne dass der untere Mosfet zu stark in den ohmschen Bereich gerät. Die geringe Transitfrequenz hat jedoch den Vorteil, dass der Betrag der Impedanz $Z_{g,anp}$ ebenfalls relativ gering ist, siehe (24.5); dadurch wird die Anpassung an $Z_W = 50\,\Omega$ erleichtert.

Wir haben wieder die Quellenimpedanz $Z_{g,anp}$ bei Leistungsanpassung und die optimale Quellenimpedanz $Z_{g,opt}$ bei Rauschanpassung ermittelt; Abb. 24.23 zeigt die Ergebnisse. Man erhält prinzipiell dieselben Verläufe wie bei der entsprechenden Schaltung mit Bipolartransistoren, siehe Abb. 24.15; auch die Verläufe der in Abb. 24.24 gezeigten Rauschzahlen $F_{anp}$ und $F_{opt}$ unterscheiden sich nicht prinzipiell von den Verläufen in Abb. 24.16. Für $L_S = 13\,\mathrm{nH}$ wird bei Leistungsanpassung mit $F_{anp} \approx 1\,\mathrm{dB}$ eine Rauschzahl erzielt, die nur geringfügig über der optimalen Rauschzahl $F_{opt} = 0{,}85\,\mathrm{dB}$ ohne Gegenkopplung liegt. Aus (24.6) erhalten wir den relativ guten Schätzwert $L_S \approx 6\,\mathrm{nH}$.

Abbildung 24.25 zeigt die dimensionierte Schaltung. Wir sind dabei genauso vorgegangen wie bei den Schaltungen mit Bipolartransistoren im letzten Abschnitt. Die Verstärkung beträgt wieder $20\,\mathrm{dB}$. Für die Rauschzahl erhält man mit *PSpice 8* den Wert $F = 1{,}6\,\mathrm{dB}$. Die Modellierung des Rauschens eines Mosfets entspricht in dieser Version aber nicht

$^8$ Diese Werte haben wir der OUT-Datei von *PSpice* entnommen.
<!-- page-import:1379:end -->

<!-- page-import:1380:start -->
24.1 Integrierte Hochfrequenz-Verstärker 1343

Abb. 24.23.  
Beispiel: Ortskurven der Impedanzen  
$Z_{g,anp}$ für Leistungsanpassung und  
$Z_{g,opt}$ für Rauschanpassung für die  
Sourceschaltung mit Kaskode und  
induktiver Stromgegenkopplung aus  
Abb. 24.22

dem aktuellen Stand, den wir im Abschnitt 3.3.4 beschrieben haben; deshalb müssen wir diesen Wert als ungenau betrachten. Für den Eingangs-Intercept-Punkt haben wir den Wert $IIP3 = -8\,\mathrm{dBm}$ ermittelt.

#### 24.1.3.2.4 Vergleich von Bipolartransistor und Mosfet

Bezüglich der Rauschzahl ist der Mosfet dem Bipolartransistor überlegen. Die optimale Rauschzahl eines Bipolartransistors ist durch den Basisbahnwiderstand und die Stromverstärkung nach unten begrenzt und liegt bereits bei niedrigen Frequenzen über 1 dB; dagegen geht die optimale Rauschzahl eines Mosfets bei mittleren Frequenzen $(f_{g(1/f)} \ll f \ll f_T)$ gegen 0 dB, d.h. das Rauschen des Mosfets macht sich nicht bemerkbar. Bei $f \approx f_T/10$ liegt die optimale Rauschzahl eines Bipolartransistors im Bereich von 2 dB, die eines Mosfets im Bereich von 0,5 dB. Man kann demnach mit einem Mosfet eine um 1 ... 2 dB geringere Rauschzahl erzielen.

Bei den praktisch wichtigen Ausführungen mit induktiver Stromgegenkopplung ergibt sich der Wert der Gegenkopplungs-Induktivität aus dem Minimum der Rauschzahl und nicht – wie sonst bei Gegenkopplungen üblich – aus Forderungen bezüglich der

Abb. 24.24.  
Beispiel: Rauschzahl $F_{anp}$  
bei Leistungsanpassung und  
optimale Rauschzahl $F_{opt}$  
für die Sourceschaltung mit  
Kaskode und induktiver  
Stromgegenkopplung aus  
Abb. 24.22
<!-- page-import:1380:end -->

<!-- page-import:1409:start -->
1372  24. Hochfrequenz-Verstärker

**Abb. 24.47.** S-Parameter des Breitband-Verstärkers aus Abb. 24.46

durch Einfügen der Spulen $L_R$ und $L_C$ optimiert. Mit $L_R = 47\,\mathrm{nH}$ und $L_C = 270\,\mathrm{nH}$ erhält man die in Abb. 24.47 gezeigten Betragsverläufe der S-Parameter. Die für Breitband-Verstärker typische Forderung $|S_{22}| < 0,2$ wird bis etwa 1 GHz erfüllt; in diesem Bereich gilt $|S_{11}| < 0,1$, d.h. die Eingangsanpassung ist für einen Breitband-Verstärker außergewöhnlich gut. Die gewünschte Verstärkung $|S_{21}| = 6{,}3 = 16\,\mathrm{dB}$ wird bis etwa 300 MHz erreicht; die $-3\,\mathrm{dB}$-Grenzfrequenz liegt bei 700 MHz.

Die berechnete Stromgegenkopplung für den Transistor $T_2$ mit $R_2 \approx 1{,}6\,\Omega$ kann entfallen, da der Verstärker die gewünschte Verstärkung erzielt. Die Abweichung zur Rechnung hat zwei Ursachen: zum einen ist die Steilheit $S = 185\,\mathrm{mS}$ des Darlington-Transistors geringer als die Steilheit $S_2 = 192\,\mathrm{mS}$ des Transistors $T_2$, zum anderen hat der Transistor BFR93 bereits einen parasitären Emitterwiderstand von etwa $1\,\Omega$.

Die insgesamt sehr guten Eigenschaften dieses Verstärkers können jedoch in der Praxis nur in einem vergleichsweise kleinen Frequenzband genutzt werden, da die Koppelkondensatoren $C_e$ und $C_a$ nicht breitbandig niederohmig ausgeführt werden können; ggf. muss man mehrere Kondensatoren mit gegeneinander verschobenen Resonanzfrequenzen einsetzen.
<!-- page-import:1409:end -->

<!-- page-import:1423:start -->
1386  24. Hochfrequenz-Verstärker

und $u_{g,IP5}$ am Eingang und mit (24.54) die Effektivwerte $u_{a,IP3}$ und $u_{a,IP5}$ am Ausgang berechnen. Aus (4.183) erhält man die Effektivwerte der Intermodulationsprodukte im quasi-linearen Bereich, indem man anstelle der Amplituden die Effektivwerte einsetzt:

$$
u_{a,IM3}=\frac{u_a^3}{u_{a,IP3}^2}, \qquad u_{a,IM5}=\frac{u_a^5}{u_{a,IP5}^4}
$$

Daraus folgt für die Leistungen in dBm:

$$
P_{L(IM3)}\,[\mathrm{dBm}] = 3\,P_L\,[\mathrm{dBm}] - 2\,P_{L(IP3)}\,[\mathrm{dBm}]
$$

$$
P_{L(IM5)}\,[\mathrm{dBm}] = 5\,P_L\,[\mathrm{dBm}] - 4\,P_{L(IP5)}\,[\mathrm{dBm}]
$$

(24.57)

Entsprechend erhält man aus (4.184) die *Intermodulationsabstände*

$$
IM3=\left(\frac{u_{a,IP3}}{u_a}\right)^2, \qquad IM5=\left(\frac{u_{a,IP5}}{u_a}\right)^4
$$

und:

$$
IM3\,[\mathrm{dB}] = 2\,\bigl(P_{L(IP3)}\,[\mathrm{dBm}] - P_L\,[\mathrm{dBm}]\bigr)
$$

$$
IM5\,[\mathrm{dB}] = 4\,\bigl(P_{L(IP5)}\,[\mathrm{dBm}] - P_L\,[\mathrm{dBm}]\bigr)
$$

(24.58)

*Beispiel:* Aus Abb. 24.54 entnimmt man die Intercept-Punkte $P_{L(IP3)} = 22\,\mathrm{dBm}$ und $P_{L(IP5)} = 16{,}4\,\mathrm{dBm}$ am Ausgang. Die entsprechenden Werte am Eingang sind um den Kleinsignal-Übertragungsgewinn $G_{T,0} = 7{,}3\,\mathrm{dB}$ aus Abb. 24.53a geringer. Die Grenze zwischen dem quasi-linearen Bereich und dem Bereich schwacher Übersteuerung liegt bei $P_{A,g} = -12\,\mathrm{dBm}$ bzw. $P_L = P_{A,g} + G_{T,0} = -4{,}7\,\mathrm{dBm}$. Für die Intermodulationsabstände an dieser Grenze erhält man mit (24.58) $IM3 = 53{,}4\,\mathrm{dB}$ und $IM5 = 84{,}4\,\mathrm{dB}$. Die Intermodulationsprodukte haben die Leistungen $P_{L(IM3)} = -58{,}1\,\mathrm{dBm}$ und $P_{L(IM5)} = -89{,}1\,\mathrm{dBm}$.

##### 24.4.2.5.3 Praktische Hinweise

Die Zahlenwerte des vorausgehenden Beispiels zeigen, dass der Intermodulationsabstand $IM5$ im quasi-linearen Bereich so hoch ist, dass die zugehörige Leistung $P_{L(IM5)}$ in der Praxis nur mit einem Spektralanalysator mit hohem Dynamikbereich gemessen werden kann. Oft kann man den Intercept-Punkt $IP5$ gar nicht bestimmen, weil der Dynamikbereich der Messgeräte nicht ausreicht. In diesem Fall sind die Intermodulationsprodukte 5.Ordnung aber meist ohnehin nicht mehr relevant, so dass die Angabe des $IP3$ ausreicht.

In der Praxis werden viele Hochfrequenz-Verstärker im Bereich schwacher Übersteuerung betrieben. In diesem Bereich kann man die Intermodulationsabstände und die Leistungen der Intermodulationsprodukte nicht mehr mit Hilfe der Intercept-Punkte bestimmen, sondern muss die Werte direkt aus den Intermodulationskennlinien entnehmen. Bei der Auslegung von Hochfrequenz-Baugruppen wird häufig der Fehler begangen, die Intermodulationsprodukte mit Hilfe der Intercept-Punkte abzuschätzen, obwohl die Verstärker nicht im quasi-linearen Bereich arbeiten.
<!-- page-import:1423:end -->
