# Phase Noise

<!-- page-import:1587:start -->
1550 26. Oszillatoren

$L = 1{,}2\,\mu\mathrm{m}$

$U_b = 1{,}5\,\mathrm{V}$

$T_3$

$W = 114\,\mu\mathrm{m}$

$T_4$

$W = 6\,\mu\mathrm{m}$

$T_1$

$W = 98\,\mu\mathrm{m}$

$I_{D1}$

$T_2$

$W = 98\,\mu\mathrm{m}$

$I_{D2}$

$C$

$25{,}2\,\mathrm{pF}$

$R_P$

$5\,\mathrm{k}\Omega$

$U_1$

$L/2$

$50\,\mathrm{nH}$

$L/2$

$50\,\mathrm{nH}$

$U_2$

$I_0$

$10\,\mu\mathrm{A}$

**Abb. 26.50.**  
Dimensionierter Gegentaktoszillator  
für $f_R = 100\,\mathrm{MHz}$

nur $Q_{LG} = 46$ erreicht, aufgrund des wesentlich geringeren 1/f-Rauschens der Bipolartransistoren liefert der Colpitts-Oszillator aber dennoch ein rauschärmeres Signal. Wir gehen im Abschnitt 26.6 noch näher auf das Rauschen ein.

#### 26.1.5.8.4 Signale

Abbildung 26.51 zeigt die Signale des Gegentaktoszillators aus Abb. 26.50. Die Amplitude der Spannungen $U_1$ und $U_2$ beträgt $0{,}31\,\mathrm{V}$ und liegt damit nur wenig über der Aussteuerung $\Delta U = 0{,}27\,\mathrm{V}$, die wir als Grenze zum Sperrbereich ermittelt haben; der ohmsche Bereich mit $\Delta U = 0{,}43\,\mathrm{V}$ wird nicht erreicht.

#### 26.1.5.9 Weitere Oszillatoren

##### 26.1.5.9.1 Seiler-Oszillator

Wir haben bei den Colpitts-Oszillatoren einen Teil der Schwingkreiskapazität $C$ als direkte Parallelkapazität $C_1$ zur Schwingkreisinduktivität $L$ belassen und einen Teil zur Realisie-

$U$

$\mathrm{V}$

$U_1$

$U_2$

$0{,}3$

$0{,}2$

$0{,}1$

$0$

$-0{,}1$

$-0{,}2$

$-0{,}3$

$t$

$\mathrm{ns}$

$I_D$

$\mu\mathrm{A}$

$I_{D1}$

$I_{D2}$

$50$

$0$

$-50$

$-100$

$-150$

$-200$

$-250$

$t$

$\mathrm{ns}$

**Abb. 26.51.** Signale des Gegentaktoszillators aus Abb. 26.50
<!-- page-import:1587:end -->

<!-- page-import:1642:start -->
26.6 Phasenrauschen 1605

**Abb. 26.110.** Puffer-Verstärker mit Amplitudenmessung und Regelverstärker in differentieller Ausführung

der aufgrund der differentiellen Aussteuerung beide Halbwellen nutzt. Der Mittelwert wird über die Widerstände $R_M$ als Mittelwert der differentiellen Ausgangsspannungen gebildet; eine Kapazität wird dabei nicht benötigt. Um den Mittelwert mit einem positiven Offset zu versehen, erfolgt der Abgriff zwischen den beiden Kollektorwiderständen $R_{C1}, R_{C2}$; dabei gibt der Spannungsabfall an $R_{C2}$ die Soll-Amplitude vor. Der Regelverstärker $T_7, T_8$ bildet die Differenz zwischen dem Spitzenwert und dem verschobenen Mittelwert $U_M$ und führt eine näherungsweise Integration durch. Die Ausgänge des Regelverstärkers werden mit den Kollektorschaltungen $T_9, T_{10}$ gepuffert, an deren Ausgang die Regelspannung $U_R$ für den Oszillator entnommen wird.

## 26.6 Phasenrauschen

Ein Oszillator soll idealerweise ein Signal mit konstanter Amplitude und konstanter Frequenz erzeugen. Aufgrund des Rauschens der Transistoren und der Widerstände ergeben sich jedoch Schwankungen in beiden Größen. Da jeder praktische Oszillator eine Amplitudenbegrenzung oder -regelung besitzt, werden die Schwankungen der Amplitude weitgehend unterdrückt; deshalb sind in erster Linie die Schwankungen der Frequenz bzw. der Phase von Interesse, die als Phasenrauschen (*phase noise*) bezeichnet werden.

### 26.6.1 Darstellung im Zeit- und im Frequenzbereich

Das Phasenrauschen entspricht einer Phasenmodulation (PM) des Oszillators. Da die Phase $\varphi(t)$ und die Momentanfrequenz $\omega(t)$ eines Signals über $\omega = d\varphi/dt$ verknüpft sind, kann man das Phasenrauschen auch durch eine äquivalente Frequenzmodulation (FM) beschreiben. Beide Modulationsarten haben wir im Abschnitt 21.4 beschrieben. Der einzige Unterschied besteht darin, dass die Modulation bei einem Oszillator nicht durch ein relativ starkes Nutzsignal, sondern durch ein schwaches Rauschsignal erfolgt. Die Beschreibung der Modulation kann im Zeit- und im Frequenzbereich erfolgen.

#### 26.6.1.1 Zeitbereich

Wenn man die Phase $\varphi(t)$ eines schwach phasenmodulierten Oszillatorsignals

$$
s_T(t) = a_T \sin[\omega_R t + \varphi(t)]
$$
<!-- page-import:1642:end -->

<!-- page-import:1643:start -->
1606 26. Oszillatoren

**Abb. 26.111.** Zeitverlauf und Verteilung der Phase eines Oszillatorsignals mit einer Standardabweichung $\sigma_\varphi = 1^\circ$

repetierend misst und die Werte in einem Histogramm aufträgt, erhält man eine Normalverteilung

$$
p(x) = \frac{1}{\sqrt{2\pi}\sigma} e^{-x^2/(2\sigma^2)} \qquad \text{mit } x = \varphi - \varphi_0,\ \sigma = \sigma_\varphi
$$

mit dem Mittelwert $\varphi_0$ und der Standardabweichung $\sigma_\varphi$, siehe Abb. 26.111. Der Mittelwert ergibt sich aus der bei der Messung verwendeten Referenzphase, die beliebig gewählt werden kann. Er enthält keine Aussage über das Signal und wird auch bei der Effektivwertberechnung nicht berücksichtigt; deshalb sind Effektivwert und Standardabweichung hier identisch: $\varphi_{eff} = \sigma_\varphi$. Die Schwankung der Phase wird als Phasen-Jitter (phase jitter) und der Effektivwert $\varphi_{eff}$ als effektiver Phasen-Jitter (RMS phase jitter) bezeichnet.

Der Phasen-Jitter wird in der Praxis immer dann zur Beschreibung der Phasenrauschens verwendet, wenn sich die Phasenschwankungen unmittelbar als Phasenfehler auswirken. Ein Beispiel dafür sind digitale Übertragungsverfahren; hier verursacht der Phasen-Jitter eine entsprechende Drehung der in Abb. 21.74 auf Seite 1212 und Abb. 21.75 auf Seite 1213 gezeigten Konstellationsdiagramme. Wenn die Drehung so groß wird, dass das aktuelle Symbol in den Entscheidungsbereich eines benachbarten Symbols fällt, ergibt sich ein Symbolfehler. Der zulässige Phasen-Jitter hängt von vielen Faktoren ab, ist aber bei höherstufigen Modulationsarten mit vielen Punkten im Konstellationsdiagramm (z.B. 16-QAM) im allgemeinen wesentlich geringer als bei einem zwei- oder vierstufigen Modulationsverfahren (z.B. 2-PSK oder 4-PSK).

Wenn das Oszillatorsignal zur Taktung von digitalen Schaltungen verwendet wird, ist in erster Linie die durch den Phasen-Jitter verursachte Verschiebung der Nulldurchgänge von Interesse, die als Takt-Jitter (clock jitter, timing jitter) bezeichnet wird; Abb. 26.112 zeigt dies durch den Vergleich eines Signals mit Phasen-Jitter mit einem Signal ohne Phasen-Jitter. Für die zeitliche Verschiebung $\tau(t)$ gilt:

$$
\tau(t) = \frac{\varphi(t)}{\omega_R}
$$

Daraus folgt für den effektiven Takt-Jitter (RMS clock/timing jitter):

$$
\tau_{eff} = \frac{\varphi_{eff}}{\omega_R}
$$
<!-- page-import:1643:end -->

<!-- page-import:1644:start -->
26.6 Phasenrauschen 1607

![Abb. 26.112. Takt-Jitter]

**Abb. 26.112.**  
Takt-Jitter

Bei A/D- und D/A-Umsetzern führt der Takt-Jitter zu einer Verschiebung der Abtastzeitpunkte; dadurch werden die Signale verfälscht. Der zulässige Takt-Jitter hängt von der Abtastrate und der Auflösung der Umsetzer ab.

## 26.6.1.2 Frequenzbereich

### 26.6.1.2.1 Phasenrauschdichte

Die Beschreibung im Frequenzbereich erfolgt mit der *Phasenrauschdichte* (*phase noise density*) $S_\varphi(f_M)$. Sie gibt die spektrale Verteilung der Phasenrauschleistung

$$
P_\varphi=\varrho_{\mathrm{eff}}^2=\int_0^\infty S_\varphi(f_M)\,df_M
$$

an und hat die Einheit:

$$
[S_\varphi(f_M)] = \frac{\mathrm{rad}^2}{\mathrm{Hz}}
$$

Als Frequenzvariable wird die Modulationsfrequenz $f_M$ verwendet.

Die Phasenrauschdichte praktischer Oszillatoren kann sehr gut durch die Funktion

$$
S_\varphi(f_M)=S_{\varphi,0}\left[1+\left(\frac{f_{g(\mathrm{W})}}{f_M}\right)^2\right]\left[1+\frac{f_{g(1/f)}}{f_M}\right]
$$

$$
= S_{\varphi,0}\left[1+\frac{f_{g(1/f)}}{f_M}+\left(\frac{f_{g(\mathrm{W})}}{f_M}\right)^2+\left(\frac{f'_{g(1/f)}}{f_M}\right)^3\right]
$$

mit

$$
f'_{g(1/f)}=\sqrt[3]{f_{g(\mathrm{W})}^2\,f_{g(1/f)}}
$$

mit der *Grundrauschdichte* (*noise floor*) $S_{\varphi,0}$, der *Grenzfrequenz des weißen Rauschens* (*white noise corner frequency*) $f_{g(\mathrm{W})}$ und der *1/f-Grenzfrequenz* (*1/f corner frequency*) $f_{g(1/f)}$ beschrieben werden. Bei Oszillatoren mit geringer oder mittlerer Schleifengüte gilt in der Regel $f_{g(1/f)} \ll f_{g(\mathrm{W})}$; dadurch tritt der zweite, $1/f_M$-proportionale Anteil in (26.46) im Gesamtverlauf nicht in Erscheinung. Abbildung 26.113 zeigt einen typischen Verlauf mit $S_{\varphi,0}=10^{-15}\,\mathrm{rad}^2/\mathrm{Hz}$, $f_{g(\mathrm{W})}=1\,\mathrm{MHz}$ und $f_{g(1/f)}=1\,\mathrm{kHz}$.

Den effektiven Phasen-Jitter $\varrho_{\mathrm{eff}}$ kann man in der Praxis nicht durch Einsetzen der Funktion $S_\varphi(f_M)$ aus (26.46) in (26.45) berechnen, da das Integral sowohl an der oberen als auch an der unteren Grenze divergiert. Das liegt zum einen daran, dass die Funktion den wahren Verlauf für $f_M \to 0$ und $f_M \to \infty$ nicht korrekt beschreibt, zum anderen aber auch daran, dass sich in praktischen Anwendungen die Anteile unterhalb einer unteren
<!-- page-import:1644:end -->

<!-- page-import:1645:start -->
1608  26. Oszillatoren

Abb. 26.113. Phasenrauschdichte $S_\varphi$ und Einseitenband-Rauschdichte $L$

Grenzfrequenz $f_U$ und oberhalb einer oberen Grenzfrequenz $f_O$ nicht mehr störend bemerkbar machen. Bei digitalen Modulationsverfahren entspricht die obere Grenzfrequenz etwa dem Symboltakt $f_S$. Die untere Grenzfrequenz ergibt sich aus der Grenzfrequenz des Phasenregelkreises des digitalen Empfängers, die etwa $f_S/(100 \dots 1000)$ beträgt, d.h. der Empfänger schätzt die Phase durch Mittelung über $100 \dots 1000$ Symbole. Daraus folgt für den effektiven Phasen-Jitter:

$$
\varphi_{eff}^2
=
\int_{f_U}^{f_O} S_\varphi(f_M)\,df_M
\qquad
\text{mit } f_U = f_S/(100 \dots 1000),\ f_O = f_S
$$

$$
=
S_{\varphi,0}
\left[
f_O - f_U + \ln \frac{f_O}{f_U}
+ f_{g(W)}^2 \left(\frac{1}{f_U} - \frac{1}{f_O}\right)
+ 2f_{g(1/f)}^{\prime\,3}\left(\frac{1}{f_U^2} - \frac{1}{f_O^2}\right)
\right]
$$

$$
f_U \ll f_O
\qquad
\approx
S_{\varphi,0}
\left[
f_O + \frac{f_{g(W)}^2}{f_U}
\left(1 + \frac{2f_{g(1/f)}'}{f_U}\right)
\right]
\eqno{(26.47)}
$$

Der Anteil mit $f_O$ ist in den meisten Fällen vernachlässigbar klein.

*Beispiel:* Wir ermitteln aus der Phasenrauschdichte in Abb. 26.113 den effektiven Phasen-Jitter für ein digitales Modulationsverfahren mit einem Symboltakt $f_S = 100\,\text{kHz}$ und einer Phasenschätzung über 500 Symbole. Mit $f_O = f_S = 100\,\text{kHz}$ und $f_U = f_S/500 = 200\,\text{Hz}$ erhalten wir aus (26.47):

$$
\varphi_{eff}^2 \approx 10^{-15}\,\frac{\mathrm{rad}^2}{\mathrm{Hz}}
\cdot
\left[
100\,\mathrm{kHz}
+
\frac{(1\,\mathrm{MHz})^2}{200\,\mathrm{Hz}}
\left(1+\frac{2\cdot 1\,\mathrm{kHz}}{200\,\mathrm{Hz}}\right)
\right]
=
5{,}5 \cdot 10^{-5}\,\mathrm{rad}^2
$$

Daraus folgt $\varphi_{eff} = 0{,}0074\,\mathrm{rad} = 0{,}42^\circ$. Dieser Wert ist sehr klein; man muss aber berücksichtigen, dass das Signal im Sender und im Empfänger mit mehreren Mischern umgesetzt wird, so dass sich der effektive Phasen-Jitter der jeweiligen Lokaloszillatoren quadratisch addiert. Bei vier Lokaloszillatoren mit gleichem Phasen-Jitter erhält man demnach den doppelten effektiven Phasen-Jitter.
<!-- page-import:1645:end -->

<!-- page-import:1646:start -->
26.6 Phasenrauschen 1609

![Abb. 26.114. Spektrum des Oszillatorsignals](#)

## 26.6.1.2.2 Einseitenband-Rauschdichte

Ein ideales Oszillatorsignal entspricht im Frequenzbereich einer Linie bei der Oszillatorfrequenz $f_R$; das zugehörige komplexe Basisbandsignal ist ein konstanter Zeiger:

$$
s_T(t)=a_T\sin\omega_R t \quad \Rightarrow \quad \underline{s}_T=a_T
$$

Durch die Phasenmodulation

$$
s_T(t)=a_T\sin[\omega_R t+\varphi(t)] \quad \Rightarrow \quad \underline{s}_T=a_T e^{j\varphi(t)} \overset{|\varphi(t)|\ll 1}{\approx} a_T(1+j\varphi(t))
$$

erhält das Oszillatorsignal zwei Seitenbänder, die, bezogen auf die Trägeramplitude $a_T$, jeweils der halben Phasenrauschdichte entsprechen; daraus folgt für das auf die Trägeramplitude normierte Spektrum des modulierten Oszillatorsignals:

$$
S(f)=\underbrace{\delta_0(f-f_R)}_{\text{Träger bei } f=f_R}
\;+\;
\underbrace{\frac{1}{2}S_\varphi(f-f_R)}_{\text{oberes Seitenband}}
\;+\;
\underbrace{\frac{1}{2}S_\varphi(f_R-f)}_{\text{unteres Seitenband}}
$$

Das Spektrum wird in der Praxis logarithmisch angegeben:

$$
S_{dB}(f)=10\log S(f)
$$

Die Einheit ist:

$$
[S_{dB}(f)] = \frac{\mathrm{dBc}}{\mathrm{Hz}}
$$

Dabei ist dBc die Abkürzung für $dB$ carrier, d.h. Dezibel bezogen auf den Träger.

Abbildung 26.114 zeigt das Spektrum eines Oszillatorsignals mit $f_R = 100\,\mathrm{MHz}$ und der Phasenrauschdichte aus Abb. 26.113. Durch die Darstellung mit einer linearen Frequenzachse stellen sich die Seitenbänder hier völlig anders dar als die Phasenrauschdichte in Abb. 26.113, obwohl es sich bis auf den Faktor $1/2$ um dieselbe Größe handelt; deshalb stellt man in der Praxis nur das obere Seitenband dar und verwendet dabei eine logarithmische Frequenzachse mit der Modulationsfrequenz $f_M=f-f_R$. Das resultierende Spektrum wird Einseitenband-Rauschdichte (single sideband noise-to-carrier ratio) $L(f_M)$ genannt und stimmt bis auf die Einheit und den Faktor $1/2$ (entspricht $-3\,\mathrm{dB}$) mit der Phasenrauschdichte $S_\varphi(f_M)$ überein, siehe Abb. 26.113:
<!-- page-import:1646:end -->

<!-- page-import:1647:start -->
1610  26. Oszillatoren

![Abb. 26.115. Beispiel zum Verlauf der Rauschdichten](26.115)

$$
L(f_M)=\frac{1}{2}\,S_\varphi(f_M)
$$

Bei großen Modulationsfrequenzen kann man das Amplitudenrauschen nicht mehr vernachlässigen; in diesem Bereich gilt

$$
L(f_M)=\frac{1}{2}\,\bigl(S_\varphi(f_M)+S_a(f_M)\bigr)
$$

mit der Amplitudenrauschdichte $S_a(f_M)$.

Die Phasenrauschdichte $S_\varphi$ geht für $f_M \to 0$ gegen Unendlich; darin kommt zum Ausdruck, dass die Phase keiner Begrenzung unterliegt und sich über längere Zeit beliebig entwickeln kann. Für $f_M \to 0$ bzw. $t \to \infty$ ist keine Aussage über die Phase möglich; deshalb geht auch der effektive Phasen-Jitter $\varphi_{eff}$ gemäß (26.47) für $f_U \to 0$ gegen Unendlich. Dagegen bleibt die Amplitude aufgrund der Amplitudenbegrenzung oder -regelung auch für $t \to \infty$ stabil. Die Amplitudenrauschdichte $S_a$ muss demnach für $f_M \to 0$ gegen Null oder gegen eine Konstante gehen, damit der Effektivwert des Amplitudenrauschens endlich bleibt. Daraus folgt, dass die Amplitudenrauschdichte für $f_M \to 0$ im Vergleich zur stark zunehmenden Phasenrauschdichte extrem klein wird. Oberhalb einer bestimmten Grenzfrequenz $f_{g,a}$ wird die Amplitudenbegrenzung oder -regelung wirkungslos; in diesem Bereich sind die Phasen- und die Amplitudenrauschdichte identisch. Man kann diese Grenzfrequenz berechnen, das sprengt aber den Rahmen unserer Darstellung. In der Praxis kann man davon ausgehen, dass die Grenzfrequenz $f_{g,a}$ nicht wesentlich geringer ist als die Grenzfrequenz $f_{g(W)}$ des Phasenrauschens, so dass sich die Amplitudenrauschdichte erst im Bereich von $f_{g(W)}$ und darüber bemerkbar macht. Abbildung 26.115 zeigt ein Beispiel mit $f_{g,a} < f_{g(W)}$; es gilt:

$$
S_\varphi(f_M)=
\begin{cases}
2\,L(f_M) & \text{für } f_M < f_{g,a} \\
L(f_M) & \text{für } f_M > f_{g,a}
\end{cases}
\qquad (26.48)
$$

In der Praxis wird meist die Gleichung für $f_M < f_{g,a}$ verwendet; den Fehler um den Faktor 2 (3 dB) bei höheren Frequenzen nimmt man dabei in Kauf. Das ist dadurch gerechtfertigt, dass der Verlauf bei höheren Frequenzen praktisch nicht in die Berechnung des effektiven Phasen-Jitters mittels (26.47) eingeht.

## 26.6.2 Entstehung

Ein Oszillatorsignal besteht aus verstärktem Rauschen, dass entsprechend der Schleifen-Übertragungsfunktion gefiltert wird; dabei werden drei Anteile unterschieden:
<!-- page-import:1647:end -->

<!-- page-import:1648:start -->
26.6 Phasenrauschen 1611

- **Linearer Anteil:** Dieser Anteil entsteht aufgrund des weißen Rauschens der Transistoren und Widerstände im Bereich der Oszillatorfrequenz $f_R$. Durch die Formung mit der Schleifen-Übertragungsfunktion ergeben sich daraus der konstante und der $1/f_M^2$-proportionale Anteil der Phasenrauschdichte. Wir bezeichnen diesen Anteil als *linear*, weil man ihn bis auf einen konstanten Faktor mit Hilfe einer linearen Kleinsignalrechnung ermitteln kann.

- **Modulationsanteil:** Dieser Anteil entsteht durch eine direkte Modulation des Oszillators durch das niederfrequente Rauschen der Transistoren. Dieses Rauschen bewirkt eine geringe Schwankung des Arbeitspunkts, die sich aufgrund der zugehörigen Schwankung der Transistorparameter auf die Frequenz und die Phase des Oszillatorsignals auswirkt. In gleicher Weise wirkt sich auch das Rauschen der Versorgungsspannung und das Rauschen der Abstimmspannungen der Varaktoren zur Frequenzabstimmung aus. Da bei niedrigen Frequenzen das 1/f-Rauschen dominiert, erzeugt dieser Anteil den $1/f_M^3$-proportionalen und den nur bei Oszillatoren mir sehr hoher Güte beobachtbaren $1/f_M$-proportionalen Anteil der Phasenrauschdichte.

- **Konversionsanteil:** Die meisten Oszillatoren werden mit Großsignalaussteuerung betrieben. In diesem Fall sind die Parameter der Transistoren nicht mehr konstant, sondern ändern sich periodisch mit der Oszillatorfrequenz $f_R$; dadurch arbeiten die Transistoren als Mischer mit der LO-Frequenz $f_{LO} = f_R$ und bewirken eine Frequenzumsetzung (Konversion) der Rauschanteile bei Vielfachen von $f_R$. Diese Frequenzumsetzung haben wir bei der Beschreibung des Rauschverhaltens von Mischern im Abschnitt 25.3.6 ausführlich beschrieben. Bei Oszillatoren werden durch die Konversion Rauschanteile aus dem Bereich der Oberwellen $(n \cdot f_R$ mit $n > 1)$ und das niederfrequente Rauschen $(0 \cdot f_R)$ entsprechend der Konversionsmatrix in den Bereich um die Oszillatorfrequenz übertragen.

Abbildung 26.116 verdeutlicht die Überlagerung der Anteile und die Filterung mit der Schleifen-Übertragungsfunktion, aus der sich der im letzten Abschnitt beschriebene Verlauf der Phasenrauschdichte ergibt.

Den Konversionsanteil kann man vermeiden, indem man den Oszillator mit einer Amplitudenregelung im linearen Bereich hält; wir werden aber noch sehen, dass die dazu notwendige Reduktion der Amplitude zu einem generellen Anstieg der Phasenrauschdichte führt, so dass man mit dieser Maßnahme in der Praxis nur selten eine Verbesserung erzielen kann. Wenn der Betrag der Schleifenverstärkung im Bereich von 3 dB liegt, sind die Oberwellen im eingeschwungenen Zustand und die Elemente der Konversionsmatrix bei den meisten Oszillatoren so klein, dass die Konversion des Rauschens aus dem Bereich der Oberwellen vernachlässigt werden kann. Beim niederfrequenten Rauschen ist das nicht der Fall, da die Rauschdichten der Transistoren im 1/f-Bereich stark ansteigen und deshalb auch bei einem kleinen Konversionsfaktor einen deutlichen Beitrag zur Phasenrauschdichte liefern. Da das niederfrequente Rauschen nicht nur durch Konversion, sondern auch durch Modulation wirksam wird, tritt der durch das 1/f-Rauschen verursachte $1/f_M^3$-proportionale Anteil der Phasenrauschdichte auch bei einem linearen Betrieb des Oszillators auf.

### 26.6.2.1 Linearer Anteil

Dieser Anteil ergibt sich aus dem weißen Rauschen der Transistoren und Widerstände im Bereich der Oszillatorfrequenz und der Filterung durch die Schleifen-
<!-- page-import:1648:end -->

<!-- page-import:1649:start -->
1612  26. Oszillatoren

~$1/f$

0

Modulation  
+  
Konversion

$f_R$

linear

$2f_R$

Konversion

$3f_R$

$f$ [lin]

~$1/f$

$f_R$

$f$ [lin]

oberes Seitenband  
mit logarithmischer  
Modulationsfrequenz

~$1/f_M$

$f_{g(1/f)}$

$f_M$ [log]

Filterung mit der Schleifen-  
Übertragungsfunktion

$S_\varphi(f_M)$

~$f_M^{-3}$

~$f_M^{-2}$

$f_{g(1/f)}$

$f_{g(W)}$

$f_M$ [log]

**Abb. 26.116.** Entstehung der Phasenrauschdichte $S_\varphi(f_M)$. Es sind nur die ersten beiden Oberwellen-Bänder dargestellt.

Übertragungsfunktion, die im eingeschwungenen Zustand mit (26.7) und $LG(j\omega_R)=1$ die Form

$$
H'_{LG}(s) = \frac{1}{1-LG(s)} = \frac{1+\frac{s}{Q_{LG}\omega_R}+\frac{s^2}{\omega_R^2}}{1+\frac{s^2}{\omega_R^2}} = 1+\frac{\omega_R}{Q_{LG}}\frac{s}{\omega_R^2+s^2}
$$

mit dem Betragsquadrat

$$
\left|H'_{LG}(j\omega)\right|^2 = 1+\left(\frac{\omega_R}{Q_{LG}}\frac{\omega}{\omega_R^2-\omega^2}\right)^2
$$

annimmt. Im oberen Seitenband erhält man mit $\omega=\omega_R+\omega_M$ sowie $\omega_R=2\pi f_R$ und $\omega_M=2\pi f_M$:

$$
\left|H_{LG}(j\,2\pi f_M)\right|^2 = 1+\left(\frac{f_R}{Q_{LG}}\frac{f_R+f_M}{f_M(2f_R+f_M)}\right)^2 \qquad \overset{f_M\ll f_R}{\approx} \qquad 1+\left(\frac{f_R}{2Q_{LG}\,f_M}\right)^2
$$

Mit der Grenzfrequenz
<!-- page-import:1649:end -->

<!-- page-import:1650:start -->
26.6 Phasenrauschen 1613

$$
f_g(w)=\frac{f_R}{2Q_{LG}}
$$

(26.49)

des weißen Rauschens folgt:

$$
|H_{LG}(j2\pi f_M)|^2 = 1 + \left(\frac{f_g(w)}{f_M}\right)^2 \approx
\begin{cases}
1 & \text{für } f_M > f_g(w)\\
\left(\frac{f_g(w)}{f_M}\right)^2 & \text{für } f_M < f_g(w)
\end{cases}
$$

Der lineare Anteil liefert demnach den konstanten und den $1/f_M^2$-proportionalen Anteil der Phasenrauschdichte:

$$
S_\varphi(f_M)=S_{\varphi,0}\,|H_{LG}(j2\pi f_M)|^2
= S_{\varphi,0}\left[1+\left(\frac{f_g(w)}{f_M}\right)^2\right]
$$

Die Konstante $S_{\varphi,0}$ entspricht dem Verhältnis der verfügbaren Rauschleistungsdichte des weißen Rauschens und der verfügbaren Leistung $P_{osz}$ des Oszillators [26.3]:

$$
S_{\varphi,0}=\frac{P_r(f)}{P_{osz}}=\frac{FkT}{P_{osz}}
$$

(26.50)

Dabei ist $F$ eine Pseudo-Rauschzahl, die angibt, um welchen Faktor das weiße Rauschen über der thermischen Rauschleistungsdichte $kT$ liegt. Bei Raumtemperatur gilt:

$$
kT = 4{,}4\cdot 10^{-21}\,\frac{\mathrm{W}}{\mathrm{Hz}} = -174\,\frac{\mathrm{dBm}}{\mathrm{Hz}}
\qquad \text{für } T=300\,\mathrm{K}
$$

Wenn man die Pseudo-Rauschzahl in dB und die Leistung des Oszillators in dBm angibt, erhält man bei Raumtemperatur die Größengleichung:

$$
S_{\varphi,0}=10^{\left(-174 + F\,[\mathrm{dB}] - P_{osz}\,[\mathrm{dBm}]\right)}
$$

Die Pseudo-Rauschzahl $F$ entspricht nicht der Rauschzahl der Transistoren, sondern ist meist deutlich höher. In der Praxis muss man $P_{osz}$ und $S_{\varphi,0}$ messen und $F$ mit (26.50) berechnen.

Aus der resultierenden Darstellung

$$
S_\varphi(f_M)=\frac{FkT}{P_{osz}}\left[1+\left(\frac{f_R}{2Q_{LG}\,f_M}\right)^2\right]
$$

(26.51)

für den linearen Anteil der Phasenrauschdichte ergeben sich folgende Forderungen an einen phasenrauscharmen Oszillator:

- Das weiße Rauschen der Schaltung, repräsentiert durch die Pseudo-Rauschzahl $F$, muss minimiert werden.
- Die Leistung $P_{osz}$ des Oszillators muss maximiert werden.
- Die Schleifengüte $Q_{LG}$ muss maximiert werden.

In der Praxis sind die drei Größen allerdings nicht unabhängig; deshalb muss man den optimalen Betriebspunkt empirisch ermitteln. Da die Leistung durch die Versorgungsspannung und die zulässige Stromaufnahme des Oszillators begrenzt wird und die Einflussmöglichkeiten auf die Pseudo-Rauschzahl begrenzt sind, bleibt als wirksames Mittel zur Verringerung der Phasenrauschdichte nur die Erhöhung der Schleifengüte.
<!-- page-import:1650:end -->

<!-- page-import:1651:start -->
1614  26. Oszillatoren

$U_b$

Tiefpassfilter  
für 1/f-Rauschen

rauscharmer  
Spannungsregler

$U_a$  $U_e$

$L_B$

NF-Kurzschluss  
an der Basis

$C_B \rightarrow \infty$

rauscharmer Transistor mit  
niedrigem 1/f-Rauschen

$L_E$

NF-Kurzschluss  
am Emitter

$C_E \rightarrow \infty$

$C_b \rightarrow \infty$

**Abb. 26.117.** Maßnahmen zur Minimierung des 1/f-Rauschens

## 26.6.2.2 Modulations- und Konversionsanteil

Diese beiden Anteile erzeugen im wesentlichen den $1/f_M^3$-proportionalen Anteil der Phasenrauschdichte. Ausgangsgrößen ist das 1/f-Rauschen der Transistoren, der Versorgungsspannung und der Abstimmspannungen der Varaktoren. Da man die Modulation und die Konversion selbst nur in Grenzen beeinflussen kann, ist in erster Linie eine Minimierung der Ausgangsgrößen anzustreben. Für diskret aufgebaute Oszillatoren bedeutet dies:

- Man verwendet rauscharme Transistoren mit möglichst geringem 1/f-Rauschen.
- Man wählt eine Arbeitspunkteinstellung, bei der die Transistoren im niederfrequenten Bereich kleinsignalmäßig möglichst gut kurzgeschlossen sind.
- Man verwendet eine Spannungsversorgung mit einem rauscharmen Spannungsregler und einem nachfolgenden Tiefpassfilter mit einer Kollektorschaltung als Puffer.

Abbildung 26.117 zeigt diese Maßnahmen an einem Beispiel. Die Dimensionierung der Induktivitäten $L_E$ und $L_B$ ist kritisch, da man zusätzliche Resonanzstellen in der Schleifenverstärkung erhält. Eine geringe Güte der Induktivitäten ist hier von Vorteil. Die Schleifenverstärkung an den unerwünschten Resonanzstellen muss kleiner Eins sein; dazu muss man häufig niederohmige Dämpfungswiderstände einfügen, z.B. den Widerstand $R_B$ in Abb. 26.64 auf Seite 1562. Die Kapazitäten $C_E$, $C_B$ und $C_b$ müssen sehr groß gewählt werden. Da große Kondensatoren eine niedrige Serienresonanzfrequenz haben und $C_E$ und $C_B$ auch im Bereich der Oszillatorfrequenz einen näherungsweisen Kleinsignal-Kurzschluss gewährleisten müssen, muss man in der Praxis mindestens zwei Kondensatoren mit geeignet abgestuften Werten parallel schalten.

Bei integrierten Oszillatoren erfordern diese Maßnahmen eine entsprechende äußere Beschaltung, da die benötigten Induktivitäten und Kapazitäten nicht integriert werden können. Da eine Schwingkreisinduktivität mit hoher Güte ebenfalls nicht integriert werden kann – das gilt auch für alle anderen Resonatoren (Leitung, Quarz, SAW, usw.) –, bleiben bei einem einstufigen Colpitts-Oszillator nur noch der Transistor und die Kapazitäten des Colpitts-Spannungsteilers für die Integration übrig, die dann keine Vorteile mehr bringt. Deshalb werden Oszillatoren mit besonders hohen Anforderungen bis heute diskret aufgebaut.
<!-- page-import:1651:end -->

<!-- page-import:1652:start -->
26.6 Phasenrauschen 1615

a hohe Resonanzfrequenz, geringe Güte  
(typisch für LC-Oszillatoren)

b geringe Resonanzfrequenz, hohe Güte  
(typisch für Quarz-Referenzoszillatoren)

**Abb. 26.118.** Abhängigkeit des Verlaufs der Phasenrauschdichte von der Resonanzfrequenz und der Schleifengüte

Die Modulation durch das Rauschen der Versorgungsspannung $U_b$ ist genau dann gering, wenn sich die Resonanzfrequenz bei einer Änderung der Versorgungsspannung möglichst wenig ändert. Dieses Kriterium kann man in der Schaltungssimulation zur empirischen Optimierung des Arbeitspunkts verwenden. Wenn die Resonanzfrequenz bei einer bestimmten Versorgungsspannung ein lokales Minimum oder Maximum aufweist, verschwindet die Modulation an diesem Punkt, da hier $df_R/dU_b = 0$ gilt, d.h. geringe Schwankungen der Versorgungsspannung wirken sich nicht auf die Frequenz und die Phase aus.

Die Konversion hängt von den Spannungs- und Stromverläufen im eingeschwungenen Zustand und den Nichtlinearitäten der Transistoren ab. Hier war in der Vergangenheit nur eine empirische Optimierung möglich. Inzwischen gibt es jedoch Schaltungssimulatoren, die zusätzlich zu den Spannungen und Strömen auch die periodischen Rauschgrößen und ihren Einfluss auf das Phasenrauschen berechnen können. Das Verfahren ist in [26.4] beschrieben.

Aus den modulierten und konvertierten 1/f-Rauschanteilen ergibt sich durch Überlagerung mit dem linearen Anteil die 1/f-Grenzfrequenz $f_{g(1/f)}$ der Phasenrauschdichte. Wir betonen ausdrücklich, dass diese Grenzfrequenz nicht mit der 1/f-Grenzfrequenz der Transistoren übereinstimmt. Bei integrierten Gegentakt-Oszillatoren mit Mosfets, die eine sehr hohe 1/f-Grenzfrequenz im Bereich von 1 MHz haben, kann man die 1/f-Grenzfrequenz der Phasenrauschdichte durch eine Optimierung der Spannungs- und Stromverläufe auf bis zu 10 kHz reduzieren.

Bei Oszillatoren mit sehr hoher Schleifengüte und vergleichsweise geringer Resonanzfrequenz kann die 1/f-Grenzfrequenz größer werden als die Grenzfrequenz $f_{g(W)}$ des weißen Rauschens; in diesem Fall hat die Phasenrauschdichte den in Abb. 26.118b gezeigten Verlauf. Ein typisches Beispiel sind hochwertige Quarz-Referenzoszillatoren; hier erhält man mit $f_R = 10\,\text{MHz}$ und $Q_{LG} \approx 50.000$ aus (26.49) die Grenzfrequenz $f_{g(W)} = 100\,\text{Hz}$, die unterhalb der typischen 1/f-Grenzfrequenz im Bereich von 1 kHz liegt.

### 26.6.3 Frequenzteilung und Frequenzvervielfachung

Der $1/f_M^2$-proportionale Anteil der Phasenrauschdichte ist nach (26.51) proportional zum Quadrat der Resonanzfrequenz; das gilt auch für den $1/f_M$- und den $1/f_M^3$-proportionalen
<!-- page-import:1652:end -->

<!-- page-import:1653:start -->
1616  26. Oszillatoren

a Frequenzteilung

Frequenzteiler

$f_R \rightarrow f_R' = \dfrac{f_R}{n}$

b Frequenzvervielfachung

Begrenzer   Bandpass   Verstärker

$f_R \rightarrow f_R' = n f_R$

**Abb. 26.119.** Frequenzteilung und Frequenzvervielfachung

Anteil. Dieser Zusammenhang bleibt auch bei einer idealen Frequenzteilung oder Frequenzvervielfachung erhalten:

$$
f_R' = \frac{f_R}{n}
\quad\Rightarrow\quad
S'_{\varphi}(f_M) = \frac{S_{\varphi}(f_M)}{n^2}
\qquad \text{für } S_{\varphi}(f_M) > \frac{n^2 kT}{P_{Osz}}
$$

$$
f_R' = n f_R
\quad\Rightarrow\quad
S'_{\varphi}(f_M) = n^2 S_{\varphi}(f_M)
$$

Die Einschränkung bei der Frequenzteilung besagt, dass die durch das unvermeidliche thermische Rauschen gegebene Untergrenze $kT/P_{Osz}$ nicht unterschritten werden kann.

Die Frequenzteilung erfolgt mit einem digitalen Frequenzteiler, siehe Abb. 26.119a. Für diesen Zweck gibt es spezielle Teiler mit analogem Vorverstärker, die für sinusförmige Eingangssignale mit vergleichsweise kleiner Amplitude ausgelegt sind. Da reale Teiler ebenfalls Phasenrauschen erzeugen, ist die Untergrenze für die Phasenrauschdichte $S'_{\varphi}$ am Ausgang nicht durch die thermische Untergrenze, sondern durch die Phasenrauschdichte des Teilers gegeben. Abbildung 26.120 zeigt ein typisches Beispiel. Unterhalb der nach unten verschobenen Grenzfrequenz des weißen Rauschens wird die Phasenrauschdichte um den Faktor $n^2$ reduziert; darüber folgt sie der Phasenrauschdichte des Teilers. Bei großen Teilerfaktoren kann die Grenzfrequenz $f'_{g(W)}$ kleiner werden als die 1/f-Grenzfrequenz $f_{g,T(1/f)}$ des Teilers; dann erhält man einen Bereich mit einem $1/f_M$-proportionalen Verlauf, der durch das 1/f-Rauschen des Teilers verursacht wird.

Bei der Frequenzvervielfachung werden mit einem Begrenzer starke Oberwellen erzeugt und die gewünschte Oberwelle mit einem Bandpass ausgefiltert, siehe Abb. 26.119b; dabei nimmt die Phasenrauschdichte im Idealfall um den Faktor $n^2$ zu. In der Praxis ist die Zunahme aufgrund des Rauschens des Begrenzers höher. Eine Frequenzvervielfachung lohnt sich nur, wenn man auf diese Weise ein geringeres Phasenrauschen erzielen kann als

**Abb. 26.120.**  
Phasenrauschdichten bei Frequenzteilung

$S_{\varphi}$ = Oszillator

$S_{\varphi,T}$ = Frequenzteiler

$S'_{\varphi}$ = Ausgang
<!-- page-import:1653:end -->

<!-- page-import:1654:start -->
26.6 Phasenrauschen 1617

a Blockschaltbild

b regelungstechnisches Ersatzschaltbild

**Abb. 26.121.** Phasenregelschleife (PLL)

mit einem Oszillator mit der Resonanzfrequenz $f'_R = n f_R$. Der wesentliche Nachteil der Frequenzvervielfachung liegt darin, dass die Phasenrauschdichte nicht nur in den $1/f_M^x$-proportionalen Bereichen um den Faktor $n^2$ angehoben wird, sondern auch das Grundrauschen $S_{\varphi,0}$ um diesen Faktor zunimmt. Die Frequenzvervielfachung wirkt deshalb mit Blick auf (26.51) auf Seite 1613 nicht wie eine Erhöhung der Resonanzfrequenz von $f_R$ auf $f'_R = n f_R$, sondern wie eine Erhöhung der Pseudo-Rauschzahl $F$ um den Faktor $n^2$. Ein Oszillator mit der Resonanzfrequenz $f'_R$ und gleicher Schleifengüte $Q_{LG}$ hat demnach bei gleicher Pseudo-Rauschzahl ein um den den Faktor $n^2$ geringeres Grundrauschen.

## 26.6.4 Betrieb mit einer Phasenregelschleife

Bei einer Phasenregelschleife (PLL) hängt das Phasenrauschen am Ausgang von zwei Oszillatoren ab: dem Referenzoszillator mit der Frequenz $f_{REF}$ und dem VCO mit der Frequenz $f_R$. Die grundsätzliche Funktionsweise einer PLL wird im Kapitel 27 beschrieben, die Anwendung zur LO-Signalerzeugung in Sendern und Empfängern im Abschnitt 22.1.3.

Abbildung 26.121 zeigt das Blockschaltbild und das regelungstechnische Ersatzschaltbild einer PLL. Die Teilerfaktoren $n_1$ und $n_2$, die Phasendetektor-Konstante $K_{PD}$ und die Abstimmsteilheit $K_{VCO}$ des VCOs sind Konstanten; als frequenzabhängige Elemente treten das Schleifenfilter mit der Übertragungsfunktion $F(s)$ und ein Integrator $1/s$ auf. Der Integrator beschreibt die Tatsache, dass die Abstimmspannung auf die Frequenz des VCOs wirkt und die Phase das Integral der Frequenz ist.

Das qualitative Verhalten der PLL und den prinzipiellen Verlauf der Phasenrauschdichte am Ausgang können wir auch ohne eine Berechnung der Übertragungsfunktionen bestimmen. Jeder Regelkreis hat eine obere Grenzfrequenz $f_g$, unterhalb der die Ausgangsgröße der Eingangsgröße folgt; Störungen, die innerhalb der Schleife wirken, werden dabei ausgeregelt. Die Eingangsgröße ist in unserem Fall das Signal des Referenzoszillators mit der Phasenrauschdichte $S_{\varphi,ref}$. Da die Ausgangsfrequenz um den Faktor $n_2/n_1$ größer ist als die Eingangsfrequenz, gilt für die Phasenrauschdichte $S'_{\varphi}$ am Ausgang unterhalb der Grenzfrequenz $f_g$:
<!-- page-import:1654:end -->

<!-- page-import:1655:start -->
1618  26. Oszillatoren

Abb. 26.122. Phasenrauschdichten für eine Phasenregelschleife (PLL) mit einem 10 MHz-Quarz-Referenzoszillator und einem 1 GHz-VCO

$$
S'_{\varphi}(f_M)=\left(\frac{n_2}{n_1}\right)^2 S_{\varphi,\mathrm{ref}}(f_M)
\qquad \text{für } f_M<f_g
$$

Oberhalb der Grenzfrequenz $f_g$ ist der Regelkreis unwirksam und man erhält am Ausgang die Überlagerung der Phasenrauschdichten aller Komponenten, gewichtet mit dem Betragsquadrat der jeweiligen Übertragungsfunktion. Da das Schleifenfilter höhere Frequenzen unterdrückt, wird jedoch nur die Phasenrauschdichte $S_{\varphi}$ des VCOs direkt am Ausgang wirksam 5.; daraus folgt:

$$
S'_{\varphi}(f_M)\approx S_{\varphi}(f_M)
\qquad \text{für } f_M>f_g
$$

Die optimale Grenzfrequenz erhält man aus dem Schnittpunkt der beiden Anteile:

$$
\left(\frac{n_2}{n_1}\right)^2 S_{\varphi,\mathrm{ref}}(f_g)\stackrel{!}{=}S_{\varphi}(f_g)
\qquad (26.52)
$$

In diesem Fall entspricht die Phasenrauschdichte $S'_{\varphi}$ am Ausgang immer dem Minimum der beiden Anteile:

$$
S'_{\varphi}(f_M)=\min\left\{\left(\frac{n_2}{n_1}\right)^2 S_{\varphi,\mathrm{ref}}(f_M),\,S_{\varphi}(f_M)\right\}
$$

Abbildung 26.122 zeigt dies am Beispiel einer PLL mit einem Quarz-Referenzoszillator ($f_{REF}=10\,\mathrm{MHz}$, $Q_{LG}=50.000$, $F=7\,\mathrm{dB}$, $P_{osz}=3\,\mathrm{dBm}$, $f_g(1/f)=5\,\mathrm{kHz}$) und einem VCO ($f_R=1\,\mathrm{GHz}$, $Q_{LG}=100$, $F=12\,\mathrm{dB}$, $P_{osz}=3\,\mathrm{dBm}$, $f_g(1/f)=1\,\mathrm{kHz}$); dabei gilt $n_2/n_1=f_R/f_{REF}=100$. Die optimale Grenzfrequenz $f_g$ liegt hier bei etwa 100 kHz. Man erkennt die starke Reduktion des Phasenrauschens am Ausgang im Vergleich zum Phasenrauschen des VCOs. Unterhalb 100 Hz beträgt die Reduktion 50 dB.

---

5 Wir nehmen an, dass das Phasenrauschen der Varaktoren inklusive Ansteuerschaltung bereits im Phasenrauschen des VCOs enthalten ist.
<!-- page-import:1655:end -->

<!-- page-import:1656:start -->
26.6 Phasenrauschen 1619

| Typ des Oszillators | $f_R$ [MHz] | $Q_{LG}$ |
|---|---:|---:|
| a  Quarz-Referenzoszillator | 10 | 50000 |
| b  SAW-Oszillator | 434 | 5000 |
| c  Quarzstabilisierter LC-Oszillator | 1000 | 100 |
| d  LC-Oszillator | 100 | 50 |
| e  Oszillator mit dielektrischem Resonator | 5000 | 500 |
| f  integrierter LC-Oszillator in CMOS-Technik | 5000 | 20 |

**Abb. 26.123.** Phasenrauschdichten und Einseitenband-Rauschdichte für verschiedene Oszillatoren

Oszillatoren mit PLL und Quarz-Referenzoszillator werden als quarzstabilisierte Oszillatoren bezeichnet und immer dann eingesetzt, wenn ein niedriges Phasenrauschen im Bereich kleiner Modulationsfrequenzen erforderlich ist, um einen geringen effektiven Phasen-Jitter $\varphi_{eff}$ zu erzielen. Man erkennt diese Oszillatoren am typischen Verlauf der Phasenrauschdichte.

## 26.6.5 Vergleich verschiedener Oszillatoren

Abbildung 26.123 zeigt einen Vergleich der Phasenrauschdichten verschiedener Oszillatoren. Die Werte bei $f_M = 10\,\mathrm{kHz}$ unterscheiden sich um bis zu 100 dB. Der Vergleich des 5 GHz-Oszillators mit dielektrischem Resonator (DRO) in diskreter Schaltungstechnik (e) und des vollständig integrierten 5 GHz-LC-Oszillators in CMOS-Technik (f) zeigt die deutliche Überlegenheit diskreter Oszillatoren.
<!-- page-import:1656:end -->

<!-- page-import:1657:start -->
[unclear]
<!-- page-import:1657:end -->

<!-- page-import:1739:start -->
1702  27. Phasenregelschleife (PLL)

a  optimal

b  zu gering

c  zu groß (in der Praxis selten)

**Abb. 27.69.** Verlauf der Phasenrauschdichte am Ausgang der PLL in Abhängigkeit von der Schleifenbandbreite

Die Grenzen hängen vom Anwendungsfall ab, siehe Abschnitt 26.6.1.2.1.

Eine Überhöhung im Verlauf der Phasenrauschdichte entsprechend Abb. 27.69b kann auch durch ein zu hochohmiges Schleifenfilter verursacht werden; in diesem Fall muss man das Filter niederohmiger machen und den Strom der Ladungspumpe entsprechend erhöhen.
<!-- page-import:1739:end -->
