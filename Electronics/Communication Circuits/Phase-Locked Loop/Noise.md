# Noise

<!-- page-import:1728:start -->
27.4 Rauschen 1691

**Abb. 27.62.**  
Dämpfung $D_{spur}$ des stärksten Störtons in Abhängigkeit vom Kanal $K = 0 \dots 64$

## 27.4 Rauschen

Neben der Erzeugung eines Signals mit einer bestimmten Frequenz geht es bei der Dimensionierung einer PLL vorrangig darum, das *Phasenrauschen* des erzeugten Signals zu minimieren. Das gilt vor allem im Anwendungsbereich der Frequenzsynthese, in dem die Anforderungen in der Regel deutlich höher sind als bei typischen Synchronisationsanwendungen, da das Phasenrauschen einer PLL, die als Lokaloszillator für einen Mischer in einem Empfänger dient, nicht nur das empfangene Nutzsignal negativ beeinflusst — die wesentliche Größe ist dabei der resultierende *Phasen-Jitter* —, sondern *zusätzlich* eine unerwünschte Frequenzumsetzung der Nachbarkanäle in den Durchlassbereich des nachfolgenden ZF-Filters verursacht; dadurch wird der Inband-Dynamikbereich reduziert. Diese unerwünschte Frequenzumsetzung haben wir bereits im Zusammenhang mit den Störtönen einer Fractional-N-PLL im Abschnitt 27.3.9 beschrieben und in den Abbildungen 27.53 auf Seite 1681 und 27.54 auf Seite 1682 dargestellt. Der Unterschied zur Wirkung des Phasenrauschens besteht nur darin, dass die Leistung der Störtöne in einzelnen Tönen konzentriert ist, während die Leistung des Phasenrauschens spektral verteilt ist. Das Phasenrauschen wirkt in diesem Zusammenhang demnach wie ein infinitesimal enger Kamm aus Störtönen mit gleicher Leistung. *Minimierung des Phasenrauschens* ist in diesem Zusammenhang also gleichbedeutend mit *Maximierung des Inband-Dynamikbereichs*. Da aber beide Störgrößen — das Phasenrauschen und die Störtöne — auf verschiedene Weise von den Parametern einer PLL abhängen, muss man in der Praxis einen Kompromiss finden, der den Inband-Dynamikbereich *insgesamt* maximiert und — mit Bezug auf das Nutzsignal — die Anforderungen an den Phasen-Jitter erfüllt.

Die Optimierung einer PLL zur Frequenzsynthese ist folglich sehr komplex und wird deshalb durch zahlreiche Software-Produkte zur Simulation und Optimierung von PLLs unterstützt. Wir haben in den Beispielen der vorausgehenden Abschnitte mehrfach darauf hingewiesen, dass die Schleifenbandbreite, die Referenzfrequenz und die Teilerfaktorsteuerung einer Fractional-N-PLL aufgrund der zahlreichen Abhängigkeiten nicht einzeln optimiert werden können. Eine umfassende Beschreibung *aller* Abhängigkeiten sprengt jedoch den Rahmen unserer Darstellung; wir beschränken uns deshalb im folgenden auf eine vereinfachte Auslegung, die von den Phasenrauschdichten des Referenzoszillators und des VCOs ausgeht, die wir als gegeben betrachten. Das ist eine deutliche Vereinfachung, da der Entwurf geeigneter Oszillatoren streng genommen Bestandteil der Optimierung einer PLL ist.
<!-- page-import:1728:end -->

<!-- page-import:1729:start -->
1692 27. Phasenregelschleife (PLL)

Abb. 27.63. Kleinsignalersatzschaltbild einer PLL mit Phasenrauschsignalen

## 27.4.1 Rauschsignale

Abbildung 27.63 zeigt das Kleinsignalersatzschaltbild einer PLL mit den äquivalenten, jeweils auf den Ausgang bezogenen Phasenrauschsignalen der Komponenten:

| Komponente | Signal | Rauschdichte |
|---|---|---|
| VCO | $\varphi_r$ | $S_\varphi$ |
| Referenzoszillator | $\varphi_{r,ref}$ | $S_{\varphi,ref}$ |
| Phasendetektor | $\varphi_{r,PD}$ | $S_{\varphi,PD}$ |
| Schleifenfilter | $\varphi_{r,LF}$ | $S_{\varphi,LF}$ |
| Frequenzteiler 1 | $\varphi_{r,T1}$ | $S_{\varphi,T1}$ |
| Frequenzteiler 2 | $\varphi_{r,T2}$ | $S_{\varphi,T2}$ |

Das Signal $\varphi_r'$ am Ausgang der PLL entspricht dem Closed-Loop-, das Signal $\varphi_r$ dem Open-Loop-Phasenrauschen des VCOs. Die Rauschsignale der Komponenten sind unabhängig voneinander und damit unkorreliert.

Das Signal $\varphi_{r,T2}$ haben wir subtrahiert, damit die Rauschsignale der beiden Frequenzteiler dieselbe Polarität haben; damit können wir für beide Signale dieselbe Übertragungsfunktion verwenden. Das ist zulässig, da die Vorzeichen unkorrelierter Rauschsignale bei der Berechnung der Rauschdichte am Ausgang der PLL aufgrund der Betragsquadrat-Bildung der Übertragungsfunktionen herausfallen.

## 27.4.2 Übertragungsfunktionen

Da die Schleife nur zwei frequenzabhängige Elemente enthält — das Schleifenfilter $H_{LF}(s)$ und den Integrator $1/s$ des VCOs —, gibt es bezüglich der Pole und Nullstellen nur drei verschiedene Typen von Übertragungsfunktionen; die Übertragungsfunktionen für die einzelnen Signale gehen daraus durch Skalierung hervor. Die Übertragungsfunktion der offenen Schleife lautet:

$$
H_{ol}(s)=\frac{k_{PD}\,k_{VCO}\,H_{LF}(s)}{\tilde{n}_2\,s}
$$

(27.38)

Da das Schleifenfilter Tiefpass-Charakteristik hat, gilt:

$$
\lim_{\omega\to 0}|H_{ol}(j\,\omega)| \sim \omega^{-p}, \qquad \lim_{\omega\to \infty}|H_{ol}(j\,\omega)| \sim \omega^{-q}
$$

Bei einem Schleifenfilter ohne PI-Regler gilt $p = 1$ (ein Integrator im VCO), bei einem Schleifenfilter mit PI-Regler $p = 2$ (ein Integrator im VCO und ein Integrator im Schleifenfilter). Die Gleichverstärkung beträgt in beiden Fällen Unendlich. Für hohe Frequenzen erfolgt ein Abfall mit $q \cdot 20\,\mathrm{dB}/\mathrm{Dekade}$. Bei einem Schleifenfilter mit PI-Regler entspricht der Exponent $q$ der Ordnung des Filters; dabei wird der durch die Nullstelle des
<!-- page-import:1729:end -->

<!-- page-import:1730:start -->
27.4 Rauschen 1693

PI-Reglers verursachte Verlust an Abfall bei hohen Frequenzen durch den Integrator des VCOs kompensiert.

Die erste der drei Übertragungsfunktionen ist die *Führungsübertragungsfunktion*:

$$
H_{ref}(s)=\frac{\Phi_r'(s)}{\Phi_{r,ref}(s)}=\frac{h_{ref}\,H_{ol}(s)}{1+H_{ol}(s)}
\qquad \text{mit } h_{ref}=\frac{\overline{n_2}}{n_1}
$$

(27.39)

Sie gilt für das Phasenrauschen $\varphi_{r,ref}$ des Referenzoszillators und mit anderen Skalierungsfaktoren $h$ auch für das Phasenrauschen des Phasendetektors und der Frequenzteiler:

$$
\varphi_{r,PD}\;\Rightarrow\; h_{PD}=\frac{\overline{n_2}}{k_{PD}}
,\qquad
\varphi_{r,T1}\text{ und }\varphi_{r,T2}\;\Rightarrow\; h_T=\overline{n_2}
$$

(27.40)

Für die Grenzwerte gilt:

$$
\lim_{\omega\to 0}\left|H_{ref}(j\omega)\right|=h_{ref}=\frac{\overline{n_2}}{n_1}
,\qquad
\lim_{\omega\to\infty}\left|H_{ref}(j\omega)\right|=h_{ref}\left|H_{ol}(j\omega)\right|\sim \omega^{-q}
$$

Die Führungsübertragungsfunktion hat demnach Tiefpass-Charakter mit einer Gleichverstärkung von $\overline{n_2}/n_1$ und einem Abfall mit $q\cdot 20\,\text{dB/Dekade}$ bei hohen Frequenzen.

Die zweite Übertragungsfunktion ist die *Störübertragungsfunktion des VCOs* für das Signal $\varphi_r$:

$$
H_r(s)=\frac{\Phi_r'(s)}{\Phi_r(s)}=\frac{1}{1+H_{ol}(s)}
$$

(27.41)

Hier gilt:

$$
\lim_{\omega\to 0}\left|H_r(j\omega)\right|=\frac{1}{\left|H_{ol}(j\omega)\right|}\sim \omega^p
,\qquad
\lim_{\omega\to\infty}\left|H_r(j\omega)\right|=1
$$

Wir erhalten hier demnach einen Hochpass der Ordnung $p$.

Die dritte Übertragungsfunktion ist die *Störübertragungsfunktion des Schleifenfilters* für das Signal $\varphi_{r,LF}$:

$$
H_{r,LF}(s)=\frac{\Phi_r'(s)}{\Phi_{r,LF}(s)}=\frac{k_{VCO}}{s(1+H_{ol}(s))}
$$

(27.42)

Sie ist im Vergleich zur Störübertragungsfunktion des VCOs um eine Ordnung *gekippt*:

$$
\lim_{\omega\to 0}\left|H_{r,LF}(j\omega)\right|=\frac{k_{VCO}}{\omega\left|H_{ol}(j\omega)\right|}\sim \omega^{p-1}
,\qquad
\lim_{\omega\to\infty}\left|H_{r,LF}(j\omega)\right|=\frac{k_{VCO}}{\omega}\sim \omega^{-1}
$$

Für ein Schleifenfilter mit PI-Regler $(p=2)$ erhalten wir einen Bandpass der Ordnung $p$.

Abbildung 27.64 zeigt den prinzipiellen Verlauf der Beträge der drei Übertragungsfunktionen für ein Schleifenfilter mit PI-Regler und Ordnung 3, d.h. $p=2$ und $q=3$.

Aus den Phasenrauschdichten der Komponenten und den Übertragungsfunktionen erhalten wir am Ausgang der PLL die Phasenrauschdichte:
<!-- page-import:1730:end -->

<!-- page-import:1731:start -->
1694 27. Phasenregelschleife (PLL)

a Führungsübertragungsfunktion

b Störübertragungsfunktion des VCOs

c Störübertragungsfunktion des Schleifenfilters

**Abb. 27.64.** Prinzipieller Verlauf der Beträge der Übertragungsfunktionen für ein Schleifenfilter mit PI-Regler und Ordnung 3 $(p = 2$ und $q = 3)$

$$
S'_\varphi(f_M) = |H_{ref}(j\,2\pi\,f_M)|^2\,S_{\varphi,ref}(f_M) \qquad \text{Referenzoszillator}
$$

$$
\qquad\qquad + |H_r(j\,2\pi\,f_M)|^2\,S_\varphi(f_M) \qquad \text{VCO}
$$

$$
\qquad\qquad + |H_{r,PD}(j\,2\pi\,f_M)|^2\,S_{\varphi,PD}(f_M) \qquad \text{Phasendetektor}
$$

$$
\qquad\qquad + |H_{r,LF}(j\,2\pi\,f_M)|^2\,S_{\varphi,PD}(f_M) \qquad \text{Schleifenfilter}
$$

$$
\qquad\qquad + |H_{r,T}(j\,2\pi\,f_M)|^2\,S_{\varphi,T1}(f_M) \qquad \text{Frequenzteiler 1}
$$

$$
\qquad\qquad + |H_{r,T}(j\,2\pi\,f_M)|^2\,S_{\varphi,T2}(f_M) \qquad \text{Frequenzteiler 2}
\tag{27.43}
$$

Dabei erhalten wir die Übertragungsfunktionen $H_{r,PD}(s)$ für den Phasendetektor und $H_{r,T}(s)$ für die Frequenzteiler aus der Übertragungsfunktion $H_{ref}(s)$ des Referenzoszillators in (27.39), indem wir anstelle des Faktors $h_{ref}$ die Faktoren aus (27.40) einsetzen.

## 27.4.3 Referenzoszillator und VCO

Das Phasenrauschen von Oszillatoren und das daraus resultierende Phasenrauschen einer PLL haben wir bereits im Abschnitt 26.6 beschrieben. Dieser Abschnitt bildet die Grundlage für die folgenden Abschnitte. Insbesondere haben wir im Abschnitt 26.6.4 bereits darauf hingewiesen, dass sich die optimale Schleifenbandbreite aus dem Schnittpunkt der Open-Loop-Phasenrauschdichte $S_\varphi(f_M)$ des VCOs und der um das Quadrat des Teilerfaktor-Verhältnisses angehobenen Phasenrauschdichte $S_{\varphi,ref}(f_M)$ des Referenzoszillators ergibt, siehe (26.52) auf Seite 1618. Bei einer Fractional-N-PLL müssen wir anstelle des Teilerfaktors $n_2$ den mittleren Teilerfaktor $\overline{n}_2$ einsetzen und erhalten damit für die optimale Schleifenbandbreite die Forderung: $^6$:

$$
\left(\frac{\overline{n}_2}{n_1}\right)^2 S_{\varphi,ref}(f_0) \stackrel{!}{=} S_\varphi(f_0)
\tag{27.44}
$$

Die graphische Darstellung dieses Zusammenhangs aus Abb. 26.122 ist in Abb. 27.65 noch einmal dargestellt. Streng formal lautet die Forderung:

$$
|H_{ref}(j\,2\pi\,f_0)|^2\,S_{\varphi,ref}(f_0) \stackrel{!}{=} |H_r(j\,2\pi\,f_0)|^2\,S_\varphi(f_0)
$$

---

$^6$ Im Abschnitt 26.6.4 haben wir die Schleifenbandbreite $f_0$ als Grenzfrequenz $f_g$ bezeichnet; es gilt folglich $f_0 = f_g$.
<!-- page-import:1731:end -->

<!-- page-import:1732:start -->
27.4 Rauschen 1695

Abb. 27.65. Phasenrauschdichten für eine PLL mit einem 10 MHz-Quarz-Referenzoszillator und einem 1 GHz-VCO. Die optimale Schleifenbandbreite ergibt sich aus dem eingezeichneten Schnittpunkt: $f_0 = 100\,\mathrm{kHz}$.

Aus Abb. 27.64 können wir jedoch entnehmen, dass für $f = f_0$ der Zusammenhang

$$
\frac{|H_{ref}(j\,2\pi\,f_0)|^2}{|H_r(j\,2\pi\,f_0)|^2} \approx \left(\frac{\bar{n}_2}{n_1}\right)^2 = h_{ref}^2
$$

gilt, so dass (27.44) für die praktische Dimensionierung ausreichend genau ist.

Diese Optimierung setzt voraus, dass die Phasenrauschdichten des Referenzoszillators und des VCOs sowie die Referenzfrequenz vorgegeben sind; aus letzterer ergibt sich dann zusammen mit der zu erzeugenden Frequenz das Verhältnis der Teilerfaktoren. Betrachtet man jedoch die Entwurfsaufgabe für einen Synthesizer als Ganzes, bei der dann der schaltungstechnische Aufwand, die Verlustleistung und die Kosten aller Komponenten zu berücksichtigen sind, wird die Optimierungsaufgabe erheblich komplexer. Man muss dann z.B. prüfen, ob als Referenzoszillator ein Quarz-Oszillator erforderlich ist oder ob ein Referenzoszillator mit einem keramischen Resonator ausreicht; dadurch verändern sich die Frequenz $f_{REF}$ — und damit $\bar{n}_2/n_1$ — und die Phasenrauschdichte $S_{\varphi,ref}(f_M)$. Auch beim VCO gibt es in der Regel alternative Resonatoren, die sich bezüglich der Resonatorgüte und der davon abhängigen Phasenrauschdichte $S_{\varphi}(f_M)$ mehr oder weniger stark unterscheiden. Deshalb ist die Vorgehensweise in der Praxis meist umgekehrt: Es liegen Anforderungen bezüglich des Phasen-Jitters und der Inband-Dynamik vor und die Entwurfsaufgabe besteht darin, einen PLL-basierten Lokaloszillator genau so zu entwerfen, dass er diese Anforderungen gerade noch erfüllt; das sprengt jedoch den Rahmen unserer Darstellung.

Wir nehmen an, dass die Phasenrauschdichten der Oszillatoren und das Verhältnis der Teilerfaktoren gegeben sind. In Abb. 27.66 ist die Übertragung dieser Rauschdichten auf den Ausgang der PLL, der bereits aus Abb. 27.65 ersichtlich ist, anhand eines Beispiels noch einmal schematisch dargestellt; dabei werden — wie bereits im Abschnitt 26.6.4 und in Abb. 27.65 — typische Verläufe für einen quarzstabilisierten VCO mit einer Ausgangsfrequenz im oberen MHz- bzw. GHz-Bereich verwendet. Wichtig ist demnach im allgemeinen nur die Aussage, dass das Phasenrauschen am Ausgang für $f < f_0$ vom
<!-- page-import:1732:end -->

<!-- page-import:1733:start -->
1696  27. Phasenregelschleife (PLL)

Referenzoszillator

$S_{\varphi,ref}$  
[log]

$-30\,\mathrm{dB/Dek.}$

$-20\,\mathrm{dB/Dek.}$

$f_M$ [log]

VCO

$S_{\varphi}$  
[log]

$-30\,\mathrm{dB/Dek.}$

$-20\,\mathrm{dB/Dek.}$

$f_M$ [log]

$|H_{ref}|$  
[log]

$\dfrac{\bar n_2}{n_1}$

$-40\,\mathrm{dB/Dek.}$

$-60\,\mathrm{dB/Dek.}$

$f_0$

$f$ [log]

$|H_r|$  
[log]

1

$+40\,\mathrm{dB/Dek.}$

$f_0$

$f$ [log]

$S^H_{\varphi,ref}$  
[log]

$-30\,\mathrm{dB/Dek.}$

$-20\,\mathrm{dB/Dek.}$

$-40\,\mathrm{dB/Dek.}$

$-60\,\mathrm{dB/Dek.}$

$f_0$

$f_M$ [log]

$S^H_{\varphi}$  
[log]

$+20\,\mathrm{dB/Dek.}$

$-20\,\mathrm{dB/Dek.}$

$+10\,\mathrm{dB/Dek.}$

$f_0$

$f_M$ [log]

Ausgang der PLL

$S'_{\varphi}$  
[log]

$-30\,\mathrm{dB/Dek.}$

$-20\,\mathrm{dB/Dek.}$

$-20\,\mathrm{dB/Dek.}$

vom Referenz-
oszillator

vom VCO

$f_0$

$f_M$ [log]

**Abb. 27.66.** Beispiel für die Übertragung der Phasenrauschdichten des Referenzoszillators und des VCOs auf den Ausgang einer PLL

Referenzoszillator und für $f > f_0$ vom VCO bestimmt wird; wie der Verlauf im einzelnen aussieht, hängt dagegen von den Verläufen der Rauschdichten der beiden Oszillatoren ab.

Ziel des weiteren Entwurfs ist nun, die Anteile der weiteren Komponenten zum Phasenrauschen am Ausgang der PLL so gering zu halten, dass sie unterhalb des kombinierten Anteils von Referenzoszillators und VCO liegen oder — falls dies nicht möglich ist — diesen Anteil zumindest nicht stark überschreiten.
<!-- page-import:1733:end -->

<!-- page-import:1734:start -->
27.4 Rauschen 1697

#### 27.4.4 Frequenzteiler

Eine Berechnung der Phasenrauschdichte $S_{\varphi,T}(f_M)$ am Ausgang eines Frequenzteilers mit Hilfe der Rauschmodelle der Transistoren ist aufgrund der Anzahl der Transistoren, des nichtlinearen Betriebs und der Unterabtastung von Stufe zu Stufe sehr aufwendig [27.2],[27.3] und liefert in der Regel keine ausreichend genauen Vorhersagen. Beim Entwurf integrierter Frequenzteiler stützt man sich auf Zeitbereichssimulationen, die gute Ergebnisse liefern, wenn die Rauschparameter der Transistoren ausreichend genau bestimmt wurden. Bei der Simulation und bei der späteren Messung an der hergestellten integrierten Schaltung erhält man dann aber denselben einfachen Verlauf wie bei einem Transistor: ein weißes Grundrauschen mit einer Rauschdichte $S_{\varphi,T0}$ und einen 1/f-Anteil mit der 1/f-Grenzfrequenz $f_{g,T(1/f)}$:

$$
S_{\varphi,T}(f_M)=S_{\varphi,T0}\left(1+\frac{f_{g,T(1/f)}}{f_M}\right)\approx
\begin{cases}
\frac{S_{\varphi,T0}\,f_{g,T(1/f)}}{f_M} & \text{für } f<f_{g,T(1/f)} \\
S_{\varphi,T0} & \text{für } f>f_{g,T(1/f)}
\end{cases}
$$

Für einen typischen Frequenzteiler mit GaAs-HBT-Transistoren erhält man Werte im Bereich von $S_{\varphi,T0}\approx 10^{-15}\,\mathrm{rad}^2/\mathrm{Hz}$ — das entspricht nach (26.48) einer Einseitenband-Rauschdichte $L(f_M)=-153\,\mathrm{dBc}/\mathrm{Hz}$ — und $f_{g,T(1/f)}\approx 1\dots 10\,\mathrm{kHz}$ [27.4]. Bei Frequenzteilern mit CMOS-Transistoren ist das Grundrauschen etwas höher, die 1/f-Grenzfrequenz dagegen wesentlich höher: $f_{g,T(1/f)}\approx 100\,\mathrm{kHz}\dots 1\,\mathrm{MHz}$ [27.2].

Das Phasenrauschen von Frequenzteilern nimmt mit zunehmenden Strömen in den Transistoren ab; besonders rauscharme Frequenzteiler haben deshalb immer eine relativ hohe Stromaufnahme. Bei integrierten PLLs mit geringem Phasenrauschen und geringer Ausgangsleistung des VCOs wird häufig ein Großteil der Verlustleistung durch den Frequenzteiler 2 verursacht.

Für das Verhältnis der Übertragungsfunktionen der Frequenzteiler 1 und 2 und des Referenzoszillators gilt:

$$
\frac{H_{r,T}(s)}{H_{ref}(s)}=\frac{h_T}{h_{ref}}=n_1
$$

Daraus folgt, dass man den Teilerfaktor $n_1$ möglichst klein wählen muss, damit das Phasenrauschen der Frequenzteiler das Phasenrauschen des Referenzoszillators nicht übersteigt. Wir haben bereits erwähnt, dass als Referenzoszillatoren bevorzugt Quarz-Oszillatoren mit einer Frequenz im Bereich von $10\,\mathrm{MHz}$ eingesetzt werden. Wenn nun der Teilerfaktor $n_1$ klein bleiben muss, liegt die Vergleichsfrequenz am Phasendetektor ebenfalls im MHz-Bereich und ist damit in vielen praktischen Fällen deutlich größer als das Kanalraster $f_K$; in diesen Fällen muss man demnach eine Fractional-N-PLL verwenden.

#### 27.4.5 Phasendetektor

Bei Phasen- (Frequenz-) Detektoren ist eine Berechnung der Phasenrauschdichte $S_{\varphi,PD}(f_M)$ noch einmal wesentlich komplexer als bei einem Frequenzteiler [27.5], man erhält aber auch hier wieder einen Verlauf mit einem weißen Grundrauschen und einem 1/f-Anteil:

$$
S_{\varphi,PD}(f_M)=S_{\varphi,PD0}\left(1+\frac{f_{g,PD(1/f)}}{f_M}\right)
$$
<!-- page-import:1734:end -->

<!-- page-import:1735:start -->
1698  27. Phasenregelsschleife (PLL)

**Abb. 27.67.** Rauschstromquellen $i_{r,R1}$ und $i_{r,R3}$ und äquivalente Rauschspannungsquelle $u_{r,LF}$ bei einem passiven Schleifenfilter 3. Ordnung

$$
\approx
\begin{cases}
\dfrac{S_{\varphi,PD0}\,f_{g,PD(1/f)}}{f_M} & \text{für } f < f_{g,PD(1/f)} \\
S_{\varphi,PD0} & \text{für } f > f_{g,PD(1/f)}
\end{cases}
$$

Analoge Phasendetektoren (Mischer) erreichen Werte bis zu $S_{\varphi,T0} \approx 10^{-17}\,\mathrm{rad}^2/\mathrm{Hz}$ bzw. $L(f_M) \approx -173\,\mathrm{dBc/Hz}$ und $f_{g,PD(1/f)} \approx 1\,\mathrm{kHz}$ [27.6]. Bei einem Tristate-Phasendetektor mit Ladungspumpe hängen die Werte dagegen nicht nur vom Detektor an sich, sondern auch vom Impuls-Muster der Ladungspumpe im eingeschwungenen Zustand ab. Bei einer Integer-N-PLL sind die Impulse im eingeschwungenen Zustand sehr kurz; daraus resultiert ein vergleichsweise geringes Phasenrauschen. Bei einer Fractional-N-PLL hängt das Phasenrauschen des Detektors demnach von der Teilerfaktorsteuerung und vom eingestellten Kanal K ab. Eine Optimierung ist in diesem Fall nur mit aufwendigen Simulationen oder Messungen möglich. Generell gilt aber, dass das Phasenrauschen im praktisch interessanten Bereich mit zunehmenden Strömen in den Gattern des Phasendetektors und zunehmendem Strom $I_0$ der Ladungspumpe abnimmt und deshalb letztendlich durch die zulässige Verlustleistung nach unten begrenzt wird.

## 27.4.6 Schleifenfilter

Das Rauschen des Schleifenfilters wird mit den üblichen Methoden zur Berechnung der äquivalenten Rauschquellen elektronischer Schaltungen berechnet, siehe Abschnitt 4.2.4, insbesondere Abschnitt 4.2.4.8 auf Seite 491. Bei einem passiven Schleifenfilter müssen die Rauschstromquellen der Widerstände in eine äquivalente Rauschspannungsquelle $u_{r,LF}$ am Ausgang des Filters umgerechnet werden; Abb. 27.67 zeigt dies am Beispiel eines Filters 3. Ordnung. Bei einem passiven Netzwerk mit ausschließlich thermischem Rauschen der Widerstände kann man die Rauschspannungsdichte am Ausgang aber auch direkt mit Hilfe der Impedanz

$$
Z_{LF}(s)=\frac{1}{sC_3+\frac{1}{R_3+\frac{1}{sC_2+\frac{1}{R_1+\frac{1}{sC_1}}}}}
$$

berechnen 7:

$$
S_{\varphi,LF}(f)=|u_{r,LF}(f)|^2=4\,k_B T\,\operatorname{Re}\{Z_{LF}(j\omega)\}
\qquad \text{mit } \omega=2\pi f
\qquad (27.45)
$$

7 Wir verwenden hier für die Boltzmann-Konstante das Formelzeichen $k_B$, da wir $k$ bereits für den Dimensionierungsfaktor des symmetrischen Optimums verwendet haben.
<!-- page-import:1735:end -->

<!-- page-import:1736:start -->
27.4 Rauschen 1699

**Abb. 27.68.** Übertragung der Rauschdichte des Schleifenfilters auf den Ausgang einer PLL

Eine exakte Berechnung des Realteils der Impedanz $Z_{LF}(s)$ liefert einen nur schwer interpretierbaren Ausdruck; wir haben deshalb numerische Auswertungen mit Hilfe eines Mathematikprogramms vorgenommen und dabei eine für die Praxis ausreichend genaue Näherung gefunden:

- Für niedrige Frequenzen entspricht der Realteil etwa der Summe der Widerstände: $R_1 + R_3$.
- Ab der oberen Kreisfrequenz $k\omega_0 = 1/T_0$ des symmetrischen Optimums fällt der Realteil zunächst proportional zu $\omega^{-1}$ ab.
- Für hohe Frequenzen fällt der Realteil proportional zu $\omega^{-2}$ ab.

Für den ersten und den zweiten Bereich können wir demnach folgende Näherung verwenden:

$$
\operatorname{Re}\{Z_{LF}(j\omega)\} \approx \frac{R_1 + R_3}{\sqrt{1 + (\omega T_0)^2}}
\qquad \text{für } \omega < 10\omega_0
$$

Abbildung 27.68 zeigt die Übertragung der Rauschdichte des Schleifenfilters auf den Ausgang mit der niederfrequenten Rauschdichte

$$
S_{\varphi,LF0} \approx 4\,k_B T_0 (R_1 + R_3)
$$

und dem Maximalwert

$$
\frac{S_{\varphi,LF0}\,k_{VCO}^2}{\omega_0^2}
=
\frac{4\,k_B T\,(R_1 + R_3)\,k_{VCO}^2}{\omega_0^2}
\qquad (27.46)
$$

am Ausgang. Da die Kennlinie des VCOs und damit die VCO-Konstante $k_{VCO}$ so gewählt werden muss, dass der erforderliche Abstimmbereich erzielt wird, und die Schleifenbandbreite $\omega_0$ durch den Schnittpunkt der am Ausgang wirksamen Phasenrauschdichten der Oszillatoren gegeben ist, kann man das am Ausgang wirksame Rauschen des Schleifenfilters nur durch die Wahl der Widerstände beeinflussen. Das Rauschen ist umso geringer, je niederohmiger die Widerstände sind; auf der anderen Seite muss man bei einer Reduktion der Widerstandswerte den Strom $I_0$ der Ladungspumpe des Phasendetektors erhöhen, um
<!-- page-import:1736:end -->

<!-- page-import:1737:start -->
1700  27. Phasenregelschleife (PLL)

die Schleifenverstärkung konstant zu halten. Man wird demnach das Schleifenfilter so niederohmig und den Strom $I_0$ groß wählen, dass das wirksame Rauschen des Schleifenfilters unter dem wirksamen Rauschen der Oszillatoren liegt.

*Beispiel:* Wir betrachten die PLL, für die wir die Phasenrauschdichten der Oszillatoren in Abb. 27.65 auf Seite 1695 dargestellt haben. Am Schnittpunkt $f_M = 100\,\mathrm{kHz}$ beträgt das wirksame Phasenrauschen beider Oszillatoren $10^{-13}\,\mathrm{rad}^2/\mathrm{Hz}$ $(L=-133\,\mathrm{dBc}/\mathrm{Hz})$. Wir nehmen an, dass der Abstimmbereich 30 MHz betragen soll und am Ausgang der Ladungspumpe bei einer Versorgungsspannung von 5 V ein Aussteuerungsbereich von $1\dots 4\,\mathrm{V}$ zur Verfügung steht; die VCO-Konstante muss demnach $10\,\mathrm{MHz}/\mathrm{V}$ betragen. Daraus folgt mit (27.46) und $4\,k_B T = 1{,}66 \cdot 10^{-20}\,\mathrm{W}/\mathrm{Hz}$ die Forderung 8:

$$
\frac{1{,}66 \cdot 10^{-20}\,\mathrm{W}/\mathrm{Hz} \cdot (R_1 + R_3) \cdot (2\pi \cdot 10^7\,\mathrm{Hz}/\mathrm{V})^2}{(2\pi \cdot 10^5\,\mathrm{Hz})^2}
$$

$$
= 1{,}66 \cdot 10^{-16}\,\frac{\mathrm{rad}^2}{\Omega \cdot \mathrm{Hz}} \cdot (R_1 + R_3) < 10^{-13}\,\frac{\mathrm{rad}^2}{\mathrm{Hz}}
$$

$$
\Rightarrow \quad R_1 + R_3 < 600\,\Omega
$$

Das ist eine harte Forderung, die hier dadurch zustande kommt, dass die beiden Oszillatoren ein sehr geringes Phasenrauschen besitzen. In der Regel gilt $R_3 \approx 2\,R_1$, so dass wir $R_1 \approx 200\,\Omega$ und $R_3 \approx 400\,\Omega$ annehmen können. Aus der Forderung

$$
\frac{k_{PD}\,k_{VCO}\,H_0}{n_2} = \omega_0
$$

des symmetrischen Optimums erhalten wir mit $k_{PD} = I_0/(2\pi)$, $H_0 = R_1$ und $n_2 = 100$ den erforderlichen Strom der Ladungspumpe:

$$
\frac{I_0 k_{VCO} R_1}{2\pi\,n_2} = \omega_0
\quad \Rightarrow \quad
I_0 = \frac{2\pi\,n_2\,\omega_0}{k_{VCO}\,R_1} \approx 31\,\mathrm{mA}
$$

Das ist ein extrem hoher Wert. Wir müssen hier allerdings darauf hinweisen, dass sich die Daten der Oszillatoren auf einen sehr hochwertigen quarzstabilisierten Festfrequenz-Oszillator beziehen, für den in der Praxis ein geringerer Abstimmbereich ausreichend ist. Ferner muss man bei phasenrauscharmen VCOs den Abstimmspannungsbereich maximieren, indem man für die Ladungspumpe eine höhere Versorgungsspannung wählt, z.B. 12 V; in sehr hochwertigen quarzstabilisierten Oszillatoren werden sogar Spannungsvervielfacher eingesetzt, um Abstimmspannungen bis zu 30 V zur Verfügung zu stellen. Wir erhalten demnach realistischere Werte, wenn wir einen Abstimmbereich von 10 MHz und einen Aussteuerungsbereich von $3\dots 11\,\mathrm{V}$ annehmen; daraus folgt $k_{VCO} = 1{,}25\,\mathrm{MHz}/\mathrm{V}$ und mit (27.46) $R_1 + R_3 < 38\,\mathrm{k}\Omega$. Mit $R_1 \approx 12\,\mathrm{k}\Omega$ folgt für den Strom der Ladungspumpe $I_0 \approx 4\,\mathrm{mA}$. Damit befinden wir uns im Bereich praktischer Werte. Damit das wirksame Phasenrauschen des Schleifenfilters unter dem wirksamen Phasenrauschen der Oszillatoren bleibt, kann man nun die Widerstände noch etwa um den Faktor $2\dots 3$ kleiner und den Strom $I_0$ entsprechend größer wählen. Alternativ kann man die Versorgungsspannung der Ladungspumpe weiter erhöhen und damit die VCO-Konstante noch weiter verringern.

---

8 Man muss hier beachten, dass die Einheit rad keine normale Einheit ist, sondern nur darauf hinweist, dass der Winkel $\varphi$ im Bogenmaß angegeben sind; deshalb wird bei der Auswertung von (27.46) die Einheit $\mathrm{rad}^2$ im Zähler ergänzt.
<!-- page-import:1737:end -->

<!-- page-import:1738:start -->
27.4 Rauschen 1701

Das Beispiel zeigt, dass es bei einem großen Abstimmbereich, einer geringen Versorgungsspannung und Oszillatoren mit niedrigem Phasenrauschen nicht mehr möglich ist, das effektive Phasenrauschen des Schleifenfilters unter dem der Oszillatoren zu halten. In der Regel hängt auch das Phasenrauschen der Oszillatoren von deren Verlustleistung ab; deshalb lautet die Aufgabe in der Praxis, alle Komponenten einer PLL so auszulegen, dass ein gefordertes Phasenrauschen am Ausgang mit einer möglichst geringen Gesamtverlustleistung und akzeptablen Kosten erzielt wird.

## 27.4.7 Minimierung des Phasenrauschens

Wir fassen hier die wichtigsten Aspekte zur Minimierung des Phasenrauschens einer PLL zusammen:

- Man minimiere das Phasenrauschen des Referenzoszillators und des VCOs, soweit dies mit Hinblick auf die Verlustleistung und die Kosten möglich ist; dabei kommt der Wahl der Referenzfrequenz $f_{REF}$ und der damit verbundenen Frage nach dem Resonator des Referenzoszillators eine zentrale Bedeutung zu.
- Aus der gewünschten Ausgangsfrequenz und der Referenzfrequenz erhält man das Verhältnis der Teilerfaktoren: $n_2/n_1$ bzw. $\bar{n}_2/n_1$. Damit kann man die effektiven Rauschdichten der Oszillatoren und aus deren Schnittpunkt die optimale Schleifenbandbreite bestimmen.
- Man wähle den Teilerfaktor $n_1$ des Referenzfrequenzteilers maximal so groß, dass das effektive Phasenrauschen des Referenzoszillators innerhalb der Schleifenbandbreite nicht unter das effektive Phasenrauschen des Phasendetektors und der Frequenzteiler abfällt. Wenn man damit den erforderlichen Kanalabstand $f_K = f_{REF}/n_1$ erzielen kann, kann man eine Integer-N-PLL verwenden; andernfalls muss man eine Fractional-N-PLL verwenden.
- Man wähle die Widerstände des Schleifenfilters und den Strom der Ladungspumpe so, dass das effektive Phasenrauschen des Schleifenfilters unter dem der Oszillatoren liegt.
- Anschließend sind die Störtöne zu untersuchen, vor allem bei einer Fractional-N-PLL. Bei einem sehr kleinen Kanalabstand $f_K$ tritt häufig der Fall auf, dass man auch mit einer hohen Ordnung des Delta-Sigma-Modulators einer Fraction-N-PLL keine ausreichende Dämpfung der Störtöne erzielen kann, wenn man die optimale Schleifenbandbreite verwendet. In der Praxis muss die Schleifenbandbreite immer deutlich geringer sein als der Kanalabstand: $f_0 \ll f_K$. Für dieses Problem gibt es zwei Lösungsansätze: Man kann die Schleifenbandbreite kleiner wählen und damit eine Zunahme der effektiven Phasenrauschdichte in einem Bereich oberhalb der Schleifenbandbreite in Kauf nehmen, siehe Abb. 27.69b; dabei reduziert man die Schleifenbandbreite so weit, bis sich die Begrenzung des Inband-Dynamikbereichs durch die abnehmenden Störtöne und das zunehmende Phasenrauschen die Waage halten. Alternativ kann man die Oszillatoren überarbeiten und dafür sorgen, dass man eine geringere optimale Schleifenbandbreite erhält; dazu muss man das Phasenrauschen des VCOs verringern, während das Phasenrauschen des Referenzoszillators etwas zunehmen darf.

Abbildung 27.69 zeigt die Auswirkungen einer zu geringen oder zu großen Schleifenbandbreite. In beiden Fällen erhöht sich der effektive Phasen-Jitter, der mit (26.45) auf Seite 1607 unter Verwendung praktischer Ober- und Untergrenzen berechnet wird:

$$
\varphi_{eff} = \sqrt{\int_{f_u}^{f_O} S'_{\varphi}(f_M)\,df_M}
$$
<!-- page-import:1738:end -->
