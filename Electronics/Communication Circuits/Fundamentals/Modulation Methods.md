# Modulation Methods

<!-- page-import:1221:start -->
1184 21. Grundlagen

Abb. 21.44. Parameter des Hochfrequenz-Transistors BFR93 (Teil 1)

1,09 GHz) und 550 nH ($Y_L = 1/(j \omega L) = -j\,1{,}25\,\mathrm{mS}$ bei $f = 230\,\mathrm{MHz}$) der Fall. Wird der Eingang dagegen mit $Z_W = 50\,\Omega$ abgeschlossen, tritt keine potentielle Instabilität auf, da die Ortskurve von $S_{22}$ vollständig innerhalb des Einheitskreises der $r$-Ebene verläuft; daraus folgt für die Ausgangsimpedanz $\mathrm{Re}\{Z_a\} > 0$ und für die Ausgangsadmittanz $\mathrm{Re}\{Y_a\} > 0$. Dieses Verhalten ist typisch für Hochfrequenz-Transistoren; deshalb ist eine Messung der S-Parameter ohne Stabilitätsprobleme möglich, während bei der Messung von Y-, Z- oder H-Parametern parasitäre Schwingungen auftreten können, die eine korrekte Messung unmöglich machen.

## 21.4 Modulationsverfahren

Das zu übertragende Nutzsignal muss im allgemeinen in ein für die Übertragung geeignetes Sendesignal umgewandelt werden; diesen Vorgang nennt man Modulation, die dazu verwendeten Verfahren Modulationsverfahren. Man unterscheidet dabei zwischen einer Übertragung im Basisband, bei der das Nutzsignal in seinem ursprünglichen Frequenz-
<!-- page-import:1221:end -->

<!-- page-import:1222:start -->
21.4 Modulationsverfahren 1185

**Abb. 21.45.** Parameter des Hochfrequenz-Transistors BFR93 (Teil 2)

bereich übertragen wird, und einer *trägerfrequenten Übertragung*, bei der das Nutzsignal auf eine höhere Sendefrequenz umgesetzt wird. Die Übertragung im Basisband ist typisch für leitungsgebundene Systeme wie das Telefon; dabei kann das Nutzsignal im einfachsten Fall unverändert, d.h. ohne Modulation, übertragen werden, wie dies beim analogen Telefon der Fall ist. Es gibt aber auch leitungsgebundene Systeme, die eine trägerfrequente Übertragung verwenden; ein Beispiel hierfür ist die Übertragung von Rundfunk- und Fernsehsignalen über das Breitband-Kabelnetz. Die Übertragung über Lichtwellenleiter ist ebenfalls leitungsgebunden und für beide Übertragungsarten geeignet. Im Gegensatz dazu muss bei drahtlosen Systemen eine trägerfrequente Übertragung verwendet werden, da die Baugröße der benötigten Antennen umgekehrt proportional zur Sendefrequenz ist und eine direkte Übertragung niederfrequenter Signale extrem große Antennen erfordern würde. Darüber hinaus steht bei der drahtlosen Übertragung nur *ein* Übertragungskanal zur Verfügung, so dass die verschiedenen Systeme zwangsläufig verschiedene Frequenzbereiche benutzen müssen.
<!-- page-import:1222:end -->

<!-- page-import:1223:start -->
1186  21. Grundlagen

a Amplitudenmodulation (AM)

b Frequenzmodulation (FM)

c Phasenmodulation (PM)

**Abb. 21.46.** Analoge Modulationsverfahren

Wir beschränken uns im folgenden auf die *trägerfrequente Übertragung*; dabei werden die Parameter *Amplitude, Frequenz* und *Phase* eines hochfrequenten *Trägersignals*

$$s_T(t) = a_T \cos \omega_T t$$

durch das Nutzsignal $s(t)$ variiert. Diese Variation erfolgt bei den *analogen Modulationsverfahren* direkt durch das Nutzsignal:

- *Amplitudenmodulation* (AM):  
  $$s_T(t) = [a_T + k_{AM}s(t)] \cos \omega_T t$$
- *Frequenzmodulation* (FM):  
  $$s_T(t) = a_T \cos \left[\omega_T t + k_{FM} \int_0^t s(\tau)\,d\tau \right]$$
- *Phasenmodulation* (PM):  
  $$s_T(t) = a_T \cos \left[\omega_T t + k_{PM}s(t)\right]$$

Die Parameter $k_{AM}$, $k_{FM}$ und $k_{PM}$ sind ein Maß für die Stärke der Modulation. Abbildung 21.46 zeigt die modulierten Trägersignale für diese Verfahren. Da die Frequenz als Ableitung der Phase nach der Zeit definiert ist ($\omega = d\varphi/dt$), sind diese Parameter voneinander abhängig; deshalb werden die Frequenz- und die Phasenmodulation unter dem
<!-- page-import:1223:end -->

<!-- page-import:1224:start -->
21.4 Modulationsverfahren 1187

a Amplitudentastung (ASK)

b Frequenztastung (FSK)

c Phasentastung (PSK)

**Abb. 21.47.** Einfache digitale Modulationsverfahren

Begriff *Winkelmodulation* zusammengefasst. Die Amplituden- und die Frequenzmodulation sind die klassischen Verfahren der Rundfunktechnik: Langwellen- und Mittelwellen-Rundfunk verwenden AM, der UKW-Rundfunk FM. Wir gehen in den beiden folgenden Abschnitten näher auf diese Verfahren ein.

Die binäre Übertragung digitaler Signale erfolgt im einfachsten Fall dadurch, dass für $s(t)$ ein zweistufiges Rechtecksignal, z.B. $s(t)=0$ für eine Null und $s(t)=1$ für eine Eins, verwendet wird; in diesem Fall wird zwischen zwei Amplituden, zwei Frequenzen oder zwei Phasen umgeschaltet. Diese Modulation wird *Tastung*, die Modulationsverfahren werden *Amplitudentastung* (ASK, *amplitude shift keying*), *Frequenztastung* (FSK, *frequency shift keying*) und *Phasentastung* (PSK, *phase shift keying*) genannt; Abb. 21.47 zeigt die modulierten Trägersignale. Man kann auch mehr als zwei Stufen verwenden; die entsprechenden Verfahren werden *n*-ASK, *n*-FSK und *n*-PSK genannt, wobei *n* die Anzahl der Stufen ist. Die zweistufigen Verfahren werden deshalb auch 2-ASK, 2-FSK und 2-PSK genannt. Die Tastverfahren sind streng genommen keine eigenen Verfahren, da es sich um eine gewöhnliche AM, FM oder PM mit einem speziellen Nutzsignal handelt.

Darüber hinaus gibt es eine Vielzahl weiterer Modulationsverfahren, bei denen die Amplitude *und* die Phase moduliert wird. Bei diesen Verfahren besteht kein einfacher
<!-- page-import:1224:end -->

<!-- page-import:1225:start -->
1188  21. Grundlagen

Zusammenhang zwischen dem Nutzsignal $s(t)$ und dem modulierten Trägersignal $s_T(t)$; man kann dann die Darstellung

$$
s_T(t) = a(t)\cos[\omega_T\, t + \varphi(t)]
$$

(21.66)

mit der allgemeinen Amplitudenmodulation $a(t)$ und der allgemeinen Phasenmodulation $\varphi(t)$ verwenden. Der Zusammenhang zwischen $a(t)$ und $\varphi(t)$ und dem Nutzsignal $s(t)$ kennzeichnet das jeweilige Verfahren. In den meisten Fällen wird jedoch eine andere Darstellung verwendet, die auf einer trigonometrischen Umformung von (21.66) beruht:

$$
\begin{aligned}
s_T(t) &= a(t)\cos[\omega_T\, t + \varphi(t)] \\
&= a(t)\cos \varphi(t)\cos \omega_T\, t - a(t)\sin \varphi(t)\sin \omega_T\, t \\
&= i(t)\cos \omega_T\, t - q(t)\sin \omega_T\, t
\end{aligned}
$$

(21.67)

Die Signale

$$
i(t) = a(t)\cos \varphi(t)\quad,\quad q(t) = a(t)\sin \varphi(t)
$$

(21.68)

werden Quadraturkomponenten genannt; dabei ist $i(t)$ das Inphase-Signal und $q(t)$ das Quadratur-Signal. Man kann demnach ein amplituden- und phasenmoduliertes Signal als Differenz eines mit $i(t)$ amplitudenmodulierten Cosinus-Trägersignals und eines mit $q(t)$ amplitudenmodulierten Sinus-Trägersignals auffassen. Das zugehörige analoge Modulationsverfahren wird Quadratur-Amplitudenmodulation (QAM) genannt. Mit der Umkehrung 9

$$
a(t) = \sqrt{i^2(t) + q^2(t)} \quad,\quad \varphi(t) = \arctan \frac{q(t)}{i(t)} + \frac{\pi}{2}\,(1-\operatorname{sign} i(t))
$$

(21.69)

gelangt man von der Darstellung mit den Quadraturkomponenten auf die Darstellung mit Amplituden- und Phasenmodulation.

Abbildung 21.48 zeigt eine Übersicht über die wichtigsten Modulationsverfahren. Bei allen modernen, trägerfrequenten Verfahren erzeugt der Modulator aus dem Nutzsignal zunächst die Quadraturkomponenten $i(t)$ und $q(t)$; daraus wird mit einem I/Q-Mischer gemäß (21.67) das modulierte Trägersignal gebildet. Wir gehen darauf im Abschnitt 21.4.3 noch näher ein. Die Übertragung im Basisband erfolgt entweder direkt, d.h. ohne Modulation, oder mit Pulsmodulationsverfahren, bei denen die zu übertragende Nachricht digitalisiert und in geeignete Pulsmuster umcodiert wird, siehe [21.5]. Wir gehen darauf nicht weiter ein.

## 21.4.1 Amplitudenmodulation

Bei der Amplitudenmodulation (AM) wird die Amplitude des Trägersignals $s_T(t)$ durch das zu übertragende Nutzsignal $s(t)$ moduliert; die Phase des Trägersignals bleibt konstant. Man unterscheidet zwischen der Amplitudenmodulation mit Träger und der Amplitudenmodulation ohne Träger:

$$
s_T(t)=
\begin{cases}
[a_T + k_{AM}s(t)]\cos \omega_T\, t \qquad \text{AM mit Träger}\\
k_{AM}s(t)\cos \omega_T\, t \qquad\qquad\ \text{AM ohne Träger}
\end{cases}
$$

(21.70)

9 Für die Signum-Funktion gilt: $\operatorname{sign} x = 1$ für $x > 0$, $\operatorname{sign} x = 0$ für $x = 0$, $\operatorname{sign} x = -1$ für $x < 0$.
<!-- page-import:1225:end -->

<!-- page-import:1226:start -->
21.4 Modulationsverfahren 1189

Modulationsverfahren

Trägerfrequente Übertragung

Übertragung im Basisband

analoge Verfahren:
- Amplitudenmodulation (AM)
- Frequenzmodulation (FM)
- Phasenmodulation (PM)
- Quadratur-Amplitudenmodulation (QAM)
- Einseitenbandmodulation (ESB/SSB)

digitale Verfahren:
- Amplitudentastung ($n$-ASK)
- Frequenztastung ($n$-FSK)
- Phasentastung ($n$-PSK,QPSK,DQPSK,...)
- Quadratur-Amplitudentastung ($n$-QAM)
- Verfahren mit kontinuierlicher Phase
  (continuous phase, CPFSK,MSK,GMSK)
- Weitere Verfahren (OFDM,CDMA,...)

**Abb. 21.48.** Übersicht über die wichtigsten Modulationsverfahren

#### 21.4.1.1 Darstellung im Zeitbereich

Für ein sinusförmiges Nutzsignal

$$
s(t) = a_s \cos \omega_s t
$$

erhält man bei der AM mit Träger

$$
s_T(t) = [a_T + k_{AM} a_s \cos \omega_s t]\cos \omega_T t
\qquad\qquad (21.71)
$$

$$
= a_T \cos \omega_T t + \frac{k_{AM} a_s}{2}\cos(\omega_T - \omega_s)\, t + \frac{k_{AM} a_s}{2}\cos(\omega_T + \omega_s)\, t
$$

unmoduliertes Trägersignal  
$s_{T,u}(t)$

Nutzsignal im unteren Seitenband  
$s_{USB}(t)$

Nutzsignal im oberen Seitenband  
$s_{OSB}(t)$

Das modulierte Trägersignal besteht demnach aus dem *unmodulierten Trägersignal*, einem Nutzsignal bei der Frequenz $f_T - f_s$ im *unteren Seitenband* und einem Nutzsignal bei der Frequenz $f_T + f_s$ im *oberen Seitenband*. Bei der AM ohne Träger entfällt das unmodulierte Trägersignal. Wegen des doppelten Auftretens des Nutzsignals in den beiden Seitenbändern wird die AM auch als *Zweiseitenbandmodulation* bezeichnet. Abbildung 21.49 zeigt die bei der AM auftretenden Teilsignale sowie die modulierten Trägersignale mit und ohne Träger.

Der Betrag der Amplitude des modulierten Trägersignals wird *Hüllkurve* $s_{T,H}$ genannt:

$$
s_{T,H} =
\begin{cases}
|a_T + k_{AM} s(t)| \qquad \text{AM mit Träger}\\
|k_{AM} s(t)| \qquad \text{AM ohne Träger}
\end{cases}
$$

Bei der AM mit Träger setzt sich die Hüllkurve aus dem Nutzsignal und der Trägeramplitude zusammen, solange der *Modulationsgrad*
<!-- page-import:1226:end -->

<!-- page-import:1227:start -->
1190  21. Grundlagen

Nutzsignal

$\frac{s}{V}$

0,8

−0,8

$t$

unmoduliertes Trägersignal

$\frac{s_{T,u}}{V}$

1

−1

$t$

unteres Seitenband

$\frac{s_{USB}}{V}$

0,4

−0,4

$t$

oberes Seitenband

$\frac{s_{OSB}}{V}$

0,4

−0,4

$t$

AM ohne Träger

$\frac{s_{T,oT}}{V}$

0,8

−0,8

$t$

AM mit Träger

Hüllkurve = Nutzsignal + Trägeramplitude

$\frac{s_{T,mT}}{V}$

1,8

1

0,2

−0,2

−1

−1,8

$t$

**Abb. 21.49.** Signale bei Amplitudenmodulation

$$
m \;=\; \frac{k_{AM}\,a_s}{a_T}
$$

(21.72)

kleiner als Eins bleibt; dann gilt:

$$
a_T + k_{AM}s(t) \;>\; 0
$$
<!-- page-import:1227:end -->

<!-- page-import:1228:start -->
21.4 Modulationsverfahren 1191

a Modulation mit einem Sinussignal

b Modulation mit einem allgemeinen Signal

**Abb. 21.50.** Darstellung der Amplitudenmodulation mit Träger im Frequenzbereich. Bei AM ohne Träger fehlt der Träger im modulierten Signal.

Abbildung 21.49 zeigt dies für $m = 0{,}8$. In diesem Fall kann man das Nutzsignal durch eine Spitzenwertgleichrichtung des modulierten Trägersignals mit anschließender Abtrennung des Gleichanteils zurückgewinnen. Diese Art der Demodulation wird *Hüllkurvendetektion* genannt. Aufgrund dieser einfachen Möglichkeit zur Demodulation wird beim AM-Rundfunk ausschließlich die AM mit Träger verwendet.

#### 21.4.1.2 Darstellung im Frequenzbereich

Die frequenzmäßige Darstellung der AM mit Träger für den Fall einer sinusförmigen Modulation ist bereits durch (21.71) gegeben; mit (21.72) folgt:

$$
s_T(t) = a_T \cos \omega_T t + \frac{m a_T}{2}\cos(\omega_T - \omega_s)t + \frac{m a_T}{2}\cos(\omega_T + \omega_s)t
$$

Abbildung 21.50a zeigt die Betragsspektren des Nutzsignals, des unmodulierten Trägers und des modulierten Trägers. Da die AM ein *lineares Modulationsverfahren* ist, kann man die Seitenbänder für eine beliebige Kombination aus Nutzsignalen durch Überlagerung der Seitenbänder der einzelnen Nutzsignale bilden; deshalb entsprechen die Seitenbänder eines mit einem allgemeinen Signal modulierten Trägers dem Nutzsignalband, wobei das obere Seitenband in *Gleichlage*, das untere in *Kehrlage*, d.h. mit invertierter Frequenzfolge, auftritt, siehe Abb. 21.50b. Die Bandbreite des modulierten Trägers entspricht demnach der doppelten oberen Grenzfrequenz des Nutzsignals:

$$
B_{AM} = 2f_g
$$

(21.73)

Bei der AM ohne Träger fehlt der Trägeranteil im modulierten Signal.
<!-- page-import:1228:end -->

<!-- page-import:1229:start -->
1192  21. Grundlagen

Abb. 21.51. Amplitudenmodulator mit Multiplizierer

### 21.4.1.3 Modulation

Zur Erzeugung eines amplitudenmodulierten Signals muss man nach (21.70) einen Multiplizierer und ein sinusförmiges Trägersignal $\cos \omega_T t$ verwenden. Abbildung 21.51 zeigt dies für den Fall einer AM mit Träger.

Man kann anstelle des sinusförmigen Trägersignals $\cos \omega_T t$ ein Rechtecksignal mit den Amplitudenwerten 0 und 1 und der Periodendauer $T_T = 1/f_T$ verwenden; in diesem Fall wird nur noch mit 0 und 1 multipliziert und der Multiplizierer kann durch einen Schalter ersetzt werden. Aus der Fourierreihe des Rechtecksignals

$$
s_{T,u}(t) =
\begin{cases}
1 & \text{für } nT_T \le t < (n + 1/2)T_T \\
0 & \text{für } (n + 1/2) \le t < (n + 1)T_T
\end{cases}
\qquad n \text{ ganzzahlig}
$$

$$
= \frac{1}{2} + \frac{2}{\pi}\cos \omega_T t - \frac{2}{3\pi}\cos 3\omega_T t + \frac{2}{5\pi}\cos 5\omega_T t + \ldots
$$

$$
= \frac{1}{2} + \frac{2}{\pi}\sum_{n=0}^{\infty}\frac{(-1)^n}{2n+1}\cos (2n+1)\,\omega_T t
$$

entnimmt man, dass neben dem gewünschten Träger mit der Frequenz $f_T$ weitere Trägeranteile bei ungeradzahligen Vielfachen von $f_T$ sowie ein Gleichanteil auftreten. Jeder dieser Anteile wird durch das Nutzsignal moduliert und erhält entsprechende Seitenbänder. Aus diesem Gemisch wird mit Hilfe eines Bandpasses der gewünschte Träger mit seinen Seitenbändern ausgefiltert. Abbildung 21.52 zeigt den Amplitudenmodulator mit Schalter einschließlich der zeit- und frequenzmäßigen Darstellung der Signale. Wenn das Rechtecksignal nicht symmetrisch ist (Tastverhältnis $\ne 50\%$), treten zusätzliche Trägeranteile bei allen geradzahligen Vielfachen von $f_T$ auf; gleichzeitig nimmt die Amplitude des gewünschten Trägers ab. Als Schalter kann man elektronische Schalter mit Fets oder die im Kapitel 25 beschriebenen Mischer einsetzen.

Abbildung 21.53 zeigt ein Schaltungsbeispiel mit einem Mosfet als Kurzschluss-Schalter und einem zweikreisigen Bandpass zur Ausfilterung des gewünschten Trägers und der zugehörigen Seitenbänder. Die Spannung $U_S$ entspricht dem Signal $a_T + k_{AM}s(t)$ in Abb. 21.52; sie muss größer Null sein, damit man eine AM mit Träger erhält. Der Verstärker wird zur Entkopplung von Schalter und Filter benötigt; die Dimensionierung eines zweikreisigen Bandpasses wird im Abschnitt 23.2 beschrieben.
<!-- page-import:1229:end -->

<!-- page-import:1230:start -->
21.4 Modulationsverfahren 1193

$a_T + k_{AM}s(t)$

Schalter

Bandpass

$s_{T,U}(t)$

$|S_{T,U}|$

$0 \qquad f_T \qquad 3f_T \qquad 5f_T \qquad f$

$s_{T,S}(t)$

$|S_{T,S}|$

Durchlassbereich des Bandpasses

$0 \qquad f_s \qquad f_T \qquad 3f_T \qquad 5f_T \qquad f$

$f_T-f_s \qquad f_T+f_s \qquad 3f_T-f_s \qquad 3f_T+f_s \qquad 5f_T-f_s \qquad 5f_T+f_s$

$s_T(t)$

$|S_T|$

$f_T-f_s \qquad f_T \qquad f_T+f_s \qquad f$

**Abb. 21.52.** Amplitudenmodulator mit Schalter

## 21.4.1.4 Demodulation

### 21.4.1.4.1 Hüllkurvendetektor

Zur Demodulation einer AM mit Träger kann man den in Abb. 21.54 gezeigten Hüllkurvendetektor verwenden; er besteht aus einem Spitzenwertgleichrichter mit verlustbehaftetem Speicherglied $(R_{Gl}, C_{Gl})$ und einem Hochpass $(C_k, R_L)$ zur Abtrennung des Gleichanteils. Für eine korrekte Demodulation müssen folgende Bedingungen erfüllt sein:
<!-- page-import:1230:end -->

<!-- page-import:1231:start -->
1194 21. Grundlagen

**Abb. 21.53.** Beispiel für einen Amplitudenmodulator mit Kurzschluss-Schalter

– die Trägerfrequenz muss wesentlich höher sein als die maximale Frequenz des Nutzsignals;  
– das Minimum der Hüllkurve muss größer sein als die Durchlassspannung der Diode;  
– die Zeitkonstante $T_{Gl} = C_{Gl}(R_{Gl} \parallel R_L)$ des Speicherglieds muss so gewählt werden, dass die gleichgerichtete Spannung der Hüllkurve folgen kann (die Kapazität $C_k$ kann im Bereich der Trägerfrequenz als Kurzschluss betrachtet werden; deshalb wird $R_{Gl} \parallel R_L$ wirksam);  
– das Nutzsignal muss ein reines Wechselspannungssignal sein, da der Hochpass neben dem durch den Träger verursachten Gleichanteil auch den Gleichanteil des Nutzsignals unterdrückt;  
– Die Grenzfrequenz des Hochpasses muss kleiner sein als die minimale Frequenz des Nutzsignals.

Der Hauptvorteil des Hüllkurvendetektors ist sein einfacher Aufbau. Nachteilig ist die Nichtlinearität aufgrund der nichtlinearen Kennlinie der Diode, vor allem im Bereich kleiner Trägeramplituden; dadurch wird der Aussteuerungsbereich nach unten begrenzt. Der Hüllkurvendetektor wird in einfachen AM-Rundfunkempfängern eingesetzt.

#### 21.4.1.4.2 Synchrondemodulator

Eine qualitativ bessere, schaltungstechnisch jedoch wesentlich aufwendigere Demodulation ist die *Synchrondemodulation*; dabei wird das modulierte Trägersignal mit einem unmodulierten Trägersignal gleicher Frequenz und gleicher Phase multipliziert. Für ein

**Abb. 21.54.** Hüllkurvendetektor
<!-- page-import:1231:end -->

<!-- page-import:1232:start -->
21.4 Modulationsverfahren 1195

Multiplikierer

$ s_T(t) $

$\cos \omega_T t$

$ s_M(t) $

Tiefpass

$\dfrac{a_T + k_{AM} s(t)}{2}$

$ s_T(t) $

$ |S_T| $

$f_T-f_s \qquad f_T \qquad f_T+f_s$

$ s_M(t) $

$ |S_M| $

Durchlassbereich des Tiefpasses

$0 \qquad f_s \qquad 2f_T-f_s \qquad 2f_T \qquad 2f_T+f_s$

Abb. 21.55. Synchrondemodulator

sinusförmig moduliertes Trägersignal erhält man:

$$
s_M(t) = s_T(t)\cos \omega_T t
\qquad\qquad (21.74)
$$

$$
= [a_T + k_{AM} a_s \cos \omega_s t]\cos \omega_T t \cos \omega_T t
$$

$$
= [a_T + k_{AM} a_s \cos \omega_s t]\frac{1+\cos 2\omega_T t}{2}
$$

$$
= \frac{a_T}{2} + \frac{k_{AM}a_s}{2}\cos \omega_s t + \frac{a_T}{2}\cos 2\omega_T t
$$

$$
\qquad + \frac{k_{AM}a_s}{4}\cos (2\omega_T-\omega_s)t + \frac{k_{AM}a_s}{4}\cos (2\omega_T+\omega_s)t
$$

Das Produktsignal $s_M(t)$ enthält neben dem gewünschten Anteil

$$
a_T + k_{AM}a_s \cos \omega_s t
$$

mit der Gewichtung $1/2$ weitere Anteile im Bereich der doppelten Trägerfrequenz; letztere werden mit einem Tiefpass unterdrückt. Abbildung 21.55 zeigt den Synchrondemodulator.
<!-- page-import:1232:end -->

<!-- page-import:1233:start -->
1196  21. Grundlagen

*Abb. 21.56.* Synchrondemodulator mit Schalter und phasenstarrer Schleife zur Trägerrückgewinnung

einschließlich der zeit- und frequenzmäßigen Darstellung der Signale. Man kann das modulierte Trägersignal auch mit einem Rechtecksignal mit der Periodendauer $T_T = 1/f_T$ multiplizieren; in diesem Fall kann der Multiplizierer durch einen Schalter ersetzt werden. Die dadurch verursachten zusätzlichen Anteile im Produktsignal $s_M(t)$ werden ebenfalls durch den Tiefpass unterdrückt.

Der Synchrondemodulator mit Multiplizierer bzw. Schalter entspricht weitgehend dem Amplitudenmodulator mit Multiplizierer bzw. Schalter; sie unterscheiden sich nur bezüglich der benötigten Filter. Im Modulator erfordert der Einsatz eines Schalters einen zusätzlichen Bandpass zur Unterdrückung der unerwünschten Anteile; dagegen wird der Tiefpass im Demodulator immer benötigt, unabhängig davon, ob ein Multiplizierer oder ein Schalter verwendet wird. Deshalb wird der Synchrondemodulator in der Praxis grundsätzlich mit einem elektronischen Schalter oder einem der im Kapitel 25 beschriebenen Mischer ausgeführt.

Das beim Synchrondemodulator zur Demodulation benötigte sinus- oder rechteckförmige Trägersignal mit gleicher Frequenz und gleicher Phase im Bezug auf das Trägersignal im Modulator kann bei der AM mit Träger mittels einer phasenstarren Schleife (PLL) aus dem im modulierten Signal enthaltenen Trägeranteil gewonnen werden, siehe Abb. 21.56; darin liegt ein wesentlicher Teil des Schaltungsaufwands für den Synchrondemodulator. Bei der AM ohne Träger ist dies nicht möglich; in diesem Fall muss das Nutzsignal selbst ein geeignetes Merkmal aufweisen, dass eine Synchronisation im Demodulator ermöglicht.

## 21.4.2 Frequenzmodulation

Bei der Frequenzmodulation (FM) wird die Momentanfrequenz bzw. Momentan-Kreisfrequenz

$$
\omega(t) = \frac{d\phi}{dt}
\Rightarrow
f(t) = \frac{\omega(t)}{2\pi} = \frac{1}{2\pi}\frac{d\phi}{dt}
$$

durch das Nutzsignal moduliert:

$$
\omega(t) = \omega_T + k_{FM}s(t)
\qquad\qquad (21.75)
$$
<!-- page-import:1233:end -->

<!-- page-import:1234:start -->
21.4 Modulationsverfahren

1197

Zur Bildung des modulierten Trägersignals muss die Momentanphase $\phi(t)$ durch Integration der Momentan-Kreisfrequenz $\omega(t)$ gebildet werden $^{10}$:

$$
s_T(t) = a_T \cos \phi(t) = a_T \cos \left[ \int_0^t \omega(\tau)\, d\tau \right]
$$

Durch Einsetzen von (21.75) und Durchführen der Integration erhält man:

$$
s_T(t) = a_T \cos \left[ \omega_T t + k_{FM} \int_0^t s(\tau)\, d\tau \right]
$$

(21.76)

Demnach entspricht das frequenzmodulierte Trägersignal einem phasenmodulierten Trägersignal

$$
s_T(t) = a_T \cos \left[\omega_T t + \varphi(t)\right]
$$

mit der Phase:

$$
\varphi(t) = k_{FM} \int_0^t s(\tau)\, d\tau
$$

#### 21.4.2.1 Darstellung im Zeitbereich

Für ein sinusförmiges Nutzsignal

$$
s(t) = a_s \cos \omega_s t
$$

(21.77)

erhält man die Momentan-Kreisfrequenz:

$$
\omega(t) = \omega_T + k_{FM} a_s \cos \omega_s t
$$

Sie schwankt sinusförmig im Bereich $\omega_T \pm k_{FM} a_s$. Die maximale Abweichung von der Trägerfrequenz wird Frequenzhub genannt:

$$
\Delta \omega = k_{FM} a_s \quad \Rightarrow \quad \Delta f = \frac{\Delta \omega}{2\pi} = \frac{k_{FM} a_s}{2\pi}
$$

(21.78)

Für das modulierte Trägersignal erhält man

$$
s_T(t) = a_T \cos \left[ \omega_T t + k_{FM} a_s \int_0^t \cos \omega_s \tau\, d\tau \right]
$$

$$
= a_T \cos \left[ \omega_T t + \frac{k_{FM} a_s}{\omega_s} \sin \omega_s t \right]
$$

(21.79)

mit der Phase:

$$
\varphi(t) = \frac{k_{FM} a_s}{\omega_s} \sin \omega_s t = \eta \sin \omega_s t
$$

Der Phasenhub

$$
\eta = \frac{k_{FM} a_s}{\omega_s} \overset{(21.78)}{=} \frac{\Delta \omega}{\omega_s} = \frac{\Delta f}{f_s}
$$

(21.80)

wird Modulationsindex genannt und entspricht dem Verhältnis aus Frequenzhub $\Delta f$ und Nutzsignalfrequenz $f_s$. Abbildung 21.57 zeigt die bei der Frequenzmodulation auftretenden Signale.

10 Als Untergrenze für die Integrale muss im allgemeinen Fall $-\infty$ verwendet werden, da die Phase zum Zeitpunkt $t$ vom gesamten, vorausgegangenen Verlauf des Signals $s$ abhängt. Wir betrachten hier nur den Bereich $t \geq 0$ und unterstellen $\int_{-\infty}^0 s(\tau)\, d\tau = 0$; dann kann die Untergrenze auf Null gesetzt werden.
<!-- page-import:1234:end -->

<!-- page-import:1235:start -->
1198 21. Grundlagen

Nutzsignal

$s$

$a_s$

$-a_s$

$t$

Phase $\varphi$

$\varphi$

$\eta$

$-\eta$

$t$

unmoduliertes Trägersignal

$s_{T,u}$

$a_T$

$-a_T$

$t$

moduliertes Trägersignal

$s_T$

$a_T$

$-a_T$

$t$

**Abb. 21.57.** Signale bei Frequenzmodulation

## 21.4.2.2 Darstellung im Frequenzbereich

Die frequenzmäßige Darstellung der FM für den Fall einer sinusförmigen Modulation folgt aus der Reihenentwicklung des modulierten Trägers:

$$
s_T(t) = a_T \cos [\omega_T t + \eta \sin \omega_s t]
$$

$$
= a_T J_0(\eta)\cos \omega_T t
$$

$$
\qquad - a_T J_1(\eta)\cos (\omega_T - \omega_s)t + a_T J_1(\eta)\cos (\omega_T + \omega_s)t
$$

$$
\qquad + a_T J_2(\eta)\cos (\omega_T - 2\omega_s)t + a_T J_2(\eta)\cos (\omega_T + 2\omega_s)t
$$

$$
\qquad - a_T J_3(\eta)\cos (\omega_T - 3\omega_s)t + a_T J_3(\eta)\cos (\omega_T + 3\omega_s)t
$$

$$
\qquad + a_T J_4(\eta)\cos (\omega_T - 4\omega_s)t + a_T J_4(\eta)\cos (\omega_T + 4\omega_s)t
$$

$$
\qquad - \ldots
$$

$$
= a_T J_0(\eta)\cos \omega_T t
\qquad\qquad \text{Träger} \qquad\qquad (21.81)
$$
<!-- page-import:1235:end -->

<!-- page-import:1236:start -->
21.4 Modulationsverfahren 1199

**Abb. 21.58.** Besselfunktionen $J_0(\eta)\dots J_{10}(\eta)$

$$
+\, a_T \sum_{n=1}^{\infty} (-1)^n J_n(\eta)\cos(\omega_T-n\omega_s)t
\qquad \text{unteres Seitenband}
$$

$$
+\, a_T \sum_{n=1}^{\infty} J_n(\eta)\cos(\omega_T+n\omega_s)t
\qquad \text{oberes Seitenband}
$$

Dabei sind $J_n$ die in Abb. 21.58 gezeigten *Besselfunktionen erster Art*; $\eta$ ist der Modulationsindex gemäß (21.80). Das Spektrum besteht demnach aus unendlich vielen Anteilen, die im Abstand der Nutzsignalfrequenz zu beiden Seiten des Trägers liegen; sie bilden ein unteres und ein oberes Seitenband. Da der Betrag der Besselfunktionen bei konstantem Argument $\eta$ und zunehmender Ordnung $n$ stark abnimmt, kann man die beiden Reihen in (21.81) in der Praxis nach einer endlichen Anzahl von Gliedern abbrechen. Zur Verdeutlichung haben wir in Abb. 21.59 den Betrag der Besselfunktionen in Dezibel und die Betragsspektren, ebenfalls in Dezibel, für drei Werte von $\eta$ dargestellt. Man erkennt, dass das Betragsspektrum mit zunehmendem Wert von $\eta$ immer breiter wird. Da die Besselfunktionen Nullstellen besitzen, können einzelne Anteile fehlen; so fehlt z.B. bei $\eta = 2{,}4$ wegen $J_0(2{,}4)=0$ der Trägeranteil.

Die Bandbreite eines frequenzmodulierten Trägersignals kann nicht exakt angegeben werden. Eine nähere Untersuchung ergibt, dass 99% der Sendeleistung im Träger und in den $(\eta + 1)$ darunter und darüber liegenden Anteilen enthalten ist; deshalb wird als Bandbreite für ein sinusförmiges Nutzsignal mit der Frequenz $f_s$ die *Carson-Bandbreite* [21.5]

$$
B_{FM} = 2\,(\eta + 1)\,f_s
\qquad\qquad (21.82)
$$

angegeben. Durch Einsetzen von $\eta$ aus (21.80) erhält man:

$$
B_{FM} = 2\,(\Delta f + f_s)
\qquad\qquad (21.83)
$$

Die Bandbreite wird maximal, wenn man die maximale Nutzsignalfrequenz $f_{s,\max}$ einsetzt. Als Maß für die Stärke einer FM wird der *minimale Modulationsindex* $\eta_{\min}$ angegeben,
<!-- page-import:1236:end -->

<!-- page-import:1237:start -->
1200  21. Grundlagen

Abb. 21.59. Betrag der Besselfunktionen $J_0(\eta)\dots J_{10}(\eta)$ in Dezibel und Betragsspektren des modulierten Trägersignals für $\eta = 0,1/1/2,4$

der für $f_s = f_{s,\max}$ erreicht wird und dem Verhältnis aus Frequenzhub und maximaler Nutzsignalfrequenz entspricht:

$$
\eta_{\min} \;=\; \frac{\Delta f}{f_{s,\max}}
$$

Dann gilt:

$$
B_{FM} \;=\; 2\,(\eta_{\min} + 1)\,f_{s,\max}
$$

Beim UKW-Rundfunk wird $\Delta f = 75\,\text{kHz}$ und $f_g = 15\,\text{kHz}$ verwendet; daraus folgt $\eta_{\min} = 5$ und $B_{FM} = 180\,\text{kHz}$.

Die FM ist ein nichtlineares Modulationsverfahren; deshalb kann man das Spektrum eines mit einem allgemeinen Signal modulierten Trägersignals nicht durch Addition der Spektren der einzelnen Anteile berechnen. Bei einem allgemeinen Signal ist das Spektrum auch nur in Ausnahmefällen symmetrisch zum Träger. Trotz dieser Einschränkungen kann man die Formeln für die Bandbreite auch im allgemeinen Fall verwenden; $f_g$ ist dann die obere Grenzfrequenz des Nutzsignals.
<!-- page-import:1237:end -->

<!-- page-import:1238:start -->
21.4 Modulationsverfahren 1201

a Prinzip

spannungsgesteuerter Oszillator

VCO

$s(t)$

$s_T(t)$

$k_{FM}=\dfrac{d\omega}{ds}$

b Schaltungsbeispiel mit Colpitts-Oszillator

abstimmbarer Schwingkreis

$U_S>0$

$C_k$

$L$

$D$

$C_1$

$C_2$

$U_b$

$U_b$

$U_{ST}$

Abb. 21.60. Frequenzmodulator

### 21.4.2.3 Modulation

Als Frequenzmodulator verwendet man einen spannungsgesteuerten Oszillator (VCO, voltage controlled oscillator), der mit dem Nutzsignal $s(t)$ gesteuert wird, siehe Abb. 21.60a; dabei ist die Konstante $k_{FM}$ durch die Abstimmsteilheit des Oszillators gegeben:

$$
k_{FM}=\frac{d\omega}{ds}
$$

Abbildung 21.60b zeigt einen einfachen FM-Modulator auf der Basis eines Colpitts-Oszillators, dessen Frequenz mit der Kapazitätsdiode $D$ moduliert wird. Die Abstimmsteilheit hängt von der Kapazitätskennlinie und der Ankoppelung der Diode an den Resonanzkreis ab; letztere wird mit der Kapazität $C_k$ eingestellt. Da das Ausgangssignal des Oszillators im allgemeinen starke Oberwellen enthält, muss man das gewünschte Signal mit einem Bandpass ausfiltern.

FM-Modulatoren auf der Basis von Hochfrequenz-Oszillatoren werden immer dann eingesetzt, wenn die Trägerfrequenz gleich der Sendefrequenz sein soll; wird das modulierte Signal dagegen auf einer niedrigeren Zwischenfrequenz erzeugt und erst danach auf die Sendefrequenz umgesetzt, kann man auch Niederfrequenz-Oszillatoren verwenden.

### 21.4.2.4 Demodulation

#### 21.4.2.4.1 Diskriminator

Eine Möglichkeit zur Demodulation eines FM-Signals besteht in der Umwandlung in ein amplitudenmoduliertes Signal mit anschließender Hüllkurvendetektion nach Abb. 21.61. Das Eingangssignal wird zunächst mit einem Begrenzer und einem Bandpass auf eine konstante, von den Empfangsbedingungen unabhängige Amplitude gebracht; dabei wird auch eine eventuell vorhandene, den weiteren Demodulationsprozess störende Amplitudenmodulation beseitigt (AM-Unterdrückung). Als Begrenzer wird eine Reihenschaltung von mehreren Differenzverstärkern mit einer Gleichspannungsgegenkopplung zur Arbeitspunkteinstellung verwendet, siehe Abb. 21.62; dabei sind die Widerstände so gewählt, dass die Transistoren nicht in die Sättigung geraten.

Zur Umwandlung der FM in eine AM verwendet man einen (Frequenz-) Diskriminator mit frequenzabhängiger Verstärkung. Da der Frequenzhub der FM im allgemeinen sehr viel kleiner ist als die Trägerfrequenz, ist der relative Frequenzhub sehr klein; deshalb
<!-- page-import:1238:end -->

<!-- page-import:1239:start -->
1202  21. Grundlagen

$s_T(t)$

Verstärkung und AM-Unterdrückung

Begrenzer

Bandpass

$s_{TB}(t)$

$s_{FM}(t)$

Diskriminator

FM  
AM

$s_{AM}(t)$

Hüllkurvendetektor

$s(t)$

**Abb. 21.61.** Frequenzdemodulator mit Diskriminator

muss die Frequenzabhängigkeit der Verstärkung im Bereich der Trägerfrequenz sehr groß sein, damit eine ausreichende Empfindlichkeit erzielt wird. Beim *Flankendiskriminator* verwendet man dazu einen Schwingkreis, dessen Resonanzfrequenz geringfügig oberhalb der Trägerfrequenz liegt, so dass das FM-modulierte Trägersignal an der Flanke der Resonanzkurve frequenzabhängig verstärkt wird; Abb. 21.63 zeigt den Flankendiskriminator zusammen mit dem nachfolgenden Hüllkurvendetektor. Da die Steigung der Resonanzkurve nicht konstant ist, erhält man mit dieser einfachen Ausführung keine ausreichend lineare Kennlinie; der Klirrfaktor nimmt bereits bei geringer Aussteuerung stark zu. Deshalb wird in der Praxis ausschließlich der in Abb. 21.64 gezeigte *Gegentakt-Flankendiskriminator* eingesetzt, bei dem die Differenz zwischen zwei gegeneinander verschobenen Resonanzkurven ausgewertet wird; dadurch erhält man einen Bereich mit linearer Kennlinie, siehe Abb. 21.65. Bei einem Frequenzhub von $\Delta f$ muss der lineare Teil der Kennlinie $2 \Delta f$ breit sein; dazu muss

Gleichspannungsgegenkopplung

$R_{GK}$

$U_{ST}$

$C_{GK}$

$U_{STB}$

**Abb. 21.62.** Vierstufiger Begrenzer mit Differenzverstärkern
<!-- page-import:1239:end -->

<!-- page-import:1240:start -->
21.4 Modulationsverfahren 1203

**Abb. 21.63.** Flankendiskriminator mit Hüllkurvendetektor

$$
\Delta f_{Res} = f_{Res,1} - f_{Res,2} \approx 5\Delta f
$$

gewählt werden. Die Trägerfrequenz entspricht näherungsweise dem Mittelwert der beiden Resonanzfrequenzen:

$$
f_T = \sqrt{f_{Res,1}\,f_{Res,2}}
\qquad
\Delta f_{Res} \ll f_{Res,1}, f_{Res,2}
\qquad
\approx \frac{f_{Res,1} + f_{Res,2}}{2}
$$

Daraus folgt für die Wahl der Resonanzfrequenzen:

$$
f_{Res,1} = f_T + \frac{5\Delta f}{2}
,\qquad
f_{Res,2} = f_T - \frac{5\Delta f}{2}
$$

Die Bandbreite $B$ der beiden Resonanzkreise muss $4\Delta f$ betragen; daraus folgt für die Güten:

$$
Q_1 = \frac{f_{Res,1}}{B} \approx \frac{f_T}{4\Delta f} + 0{,}6
,\qquad
Q_2 = \frac{f_{Res,1}}{B} \approx \frac{f_T}{4\Delta f} - 0{,}6
$$

Damit kann man die Widerstände bestimmen:

$$
R_1 = Q_1 \sqrt{\frac{L_1}{C_1}}
,\qquad
R_2 = Q_2 \sqrt{\frac{L_2}{C_2}}
$$

In der Praxis muss man die Widerstände geringfügig größer wählen, da die Hüllkurvendetektoren die Kreise zusätzlich belasten; für $C_{Gl1}, C_{Gl2} \leq C_1, C_2$ und $R_{Gl1}, R_{Gl2} \gg R_1, R_2$ ist diese Belastung gering. Die Zeitkonstante der Hüllkurvendetektoren muss so gewählt werden, dass diese der maximalen Signalfrequenz folgen können.

*Beispiel:* Beim FM-Rundfunk mit $\Delta f = 75\,\text{kHz}$ erfolgt die Demodulation bei der Zwischenfrequenz $f_T = 10{,}7\,\text{MHz}$; daraus folgt $f_{Res,1} = 10{,}89\,\text{MHz}$ und $f_{Res,2} = 10{,}51\,\text{MHz}$. Durch Vorgabe von $C_1 = C_2 = 1\,\text{nF}$ erhält man $L_1 = 214\,\text{nH}$ und $L_2 = 229\,\text{nH}$. Mit $Q_1 = 36{,}2$ und $Q_2 = 35{,}1$ folgt schließlich $R_1 = 530\,\Omega$ und $R_2 = 531\,\Omega$.

**Abb. 21.64.**  
Gegentakt-Flankendiskriminator
<!-- page-import:1240:end -->

<!-- page-import:1241:start -->
1204  21. Grundlagen

a Übertragungskennlinien  
b Steigung der Übertragungskennlinien

**Abb. 21.65.** Kennlinie des Gegentakt-Flankendiskriminators

Ausgehend von diesen Werten erfolgt eine Feinabstimmung, mit der auch der Einfluss der Hüllkurvendetektoren ausgeglichen wird; für letztere kann man $C_{Gl1} = C_{Gl2} = 1\,\mathrm{nF}$ und $R_{Gl1} = R_{Gl2} = 10\,\mathrm{k}\Omega$ wählen, um die oben genannten Bedingungen zu erfüllen.

#### 21.4.2.4.2 PLL-Demodulator

Qualitativ hochwertig und sehr gut integrierbar ist der in Abb. 21.66 gezeigte PLL-Demodulator; dabei wird die Frequenz eines gesteuerten Oszillators (VCO) mit Hilfe einer phasenstarren Schleife (PLL) der Momentanfrequenz des modulierten Trägers nachgeführt. Ist die Kennlinie des VCO linear und die Bandbreite des Schleifenfilters größer als die maximale Frequenz des Nutzsignals, erhält man am Ausgang des Schleifenfilters ein zum Nutzsignal proportionales Signal. In der Praxis arbeitet der PLL-Demodulator meist auf einer Zwischenfrequenz, die wesentlich niedriger ist als die Empfangsfrequenz; in diesem Fall kann man einen VCO mit rechteckförmigem Ausgangssignal verwenden und den nachfolgenden Begrenzer einsparen.

### 21.4.3 Digitale Modulationsverfahren

Zur Übertragung binärer Daten werden digitale Modulationsverfahren verwendet. Man unterscheidet dabei die einfachen, aus den entsprechenden analogen Verfahren abgeleiteten Tastverfahren und die komplexen Verfahren; sie unterscheiden sich sowohl bezüglich ihrer Übertragungsrate und Fehleranfälligkeit, als auch bezüglich der verwendeten Schaltungstechnik.

#### 21.4.3.1 Einfache Tastverfahren

Zu den einfachen Tastverfahren gehören die Amplitudentastung (ASK) und die Frequenztastung (FSK). Sie basieren auf der analogen Amplituden- bzw. Frequenzmodulation und verwenden anstelle eines allgemeinen ein binäres Nutzsignal. Die entsprechenden Signale haben wir bereits in Abb. 21.47 dargestellt.

##### 21.4.3.1.1 Amplitudentastung (2-ASK)

Bei der Amplitudentastung wird als Modulator ein Schalter verwendet, mit dem das Trägersignal ein- und ausgeschaltet wird. Als Demodulator verwendet man einen Hüllkurvendetektor mit nachfolgendem Komparator; dadurch wird unterhalb der Schaltschwelle des Komparators auf Null, oberhalb auf Eins erkannt. Da die Amplitude des empfangenen [unclear]
<!-- page-import:1241:end -->

<!-- page-import:1242:start -->
21.4 Modulationsverfahren 1205

Abb. 21.66. Frequenzdemodulation mit phasenstarrer Schleife (PLL-Demodulator)

$s_T(t)$

Begrenzer

Phasen-
detektor

PD

Schleifen-
filter

$s(t)$

Begrenzer

VCO

gesteuerter
Oszillator

Trägersignals stark variieren kann, muss man entweder einen geregelten Verstärker einsetzen, um das Signal auf einen definierten Pegel zu verstärken, oder die Schaltschwelle des Komparators geeignet anpassen. Zur Anpassung der Schaltschwelle kann man einen zweiten Hüllkurvendetektor mit wesentlich größerer Zeitkonstante einsetzen, der die Amplitude $U_{S,max}$ eines Eins-Bits ermittelt und entsprechend seiner Zeitkonstante hält; die Schaltschwelle des Komparators wird dann auf die halbe Trägeramplitude eingestellt, siehe Abb. 21.67.

Die Amplitudentastung wird nur in sehr einfachen Systemen mit Übertragungsraten bis maximal 1,2 kBit/s eingesetzt. Ihr Hauptvorteil liegt in der einfachen Schaltungstechnik. Die mehrstufige Amplitudentastung ($n$-ASK mit $n > 2$), die eine höhere Übertragungsrate ermöglicht, wird in der Praxis nicht verwendet; hier sind andere Verfahren günstiger, z.B. die Frequenztastung.

$$C_1 R_1 \ll T_{bit} \ll C_2 R_2$$

$D_1$

$U_{ST}$

$C_1$

$R_1$

$U_S$

$D_2$

$C_2$

$R_2/2$

$R_2/2$

$\frac{U_{S,max}}{2}$

$U_{S,\mathrm{binär}}$

**Abb. 21.67.**  
Demodulator für Amplitu-
dentastung mit automati-
scher Anpassung der Schalt-
schwelle
<!-- page-import:1242:end -->

<!-- page-import:1243:start -->
1206  21. Grundlagen

**Abb. 21.68.** Binärer Frequenzdiskriminator zur Demodulation von 2-FSK-Signalen

## 21.4.3.1.2 Frequenztastung (2-FSK)

Bei der Frequenztastung werden dieselben Komponenten verwendet wie bei der analogen Frequenzmodulation. Der FM-Modulator wird durch das binäre Nutzsignal zwischen zwei Frequenzen $f_1$ und $f_2$ umgeschaltet. Als Demodulator kann man den Gegentakt-Flankendiskriminator verwenden; dabei werden die beiden Resonanzkreise auf die Frequenzen $f_1$ und $f_2$ eingestellt und die Ausgangssignale der Hüllkurvendetektoren mit einem Komparator verglichen. Eine lineare Diskriminator-Kennlinie ist hier nicht erforderlich.

In integrierten Empfangsschaltungen für 2-FSK wird meist der in Abb. 21.68 gezeigte binäre Frequenzdiskriminator mit flankengesteigertem D-Flip-Flop eingesetzt. Das modulierte Trägersignal

$$
s_T(t) = \cos (\omega_T \pm \Delta \omega)\, t
$$

mit den Frequenzen $f_T - \Delta f$ für eine binäre Null und $f_T + \Delta f$ für eine binäre Eins wird zunächst mit einem Cosinus- und einem Sinus-Trägersignal multipliziert; dabei erhält man folgende Anteile:

$$
\cos (\omega_T \pm \Delta \omega)\, t \,\cdot\, \cos \omega_T t
= \frac{1}{2}\cos (\pm \Delta \omega)\, t + \frac{1}{2}\cos (2\omega_T \pm \Delta \omega)\, t
$$

$$
\cos (\omega_T \pm \Delta \omega)\, t \,\cdot\, \sin \omega_T t
= -\frac{1}{2}\sin (\pm \Delta \omega)\, t + \frac{1}{2}\sin (2\omega_T \pm \Delta \omega)\, t
$$

Die Anteile bei der doppelten Trägerfrequenz werden mit Tiefpässen unterdrückt. Am Ausgang der Tiefpässe erhält man bei Vernachlässigung der Vorfaktoren und Berücksichtigung der Symmetrie der Cosinus- und Sinusfunktion:

$$
\cos (\pm \Delta \omega)\, t = \cos \Delta \omega\, t, \qquad -\sin (\pm \Delta \omega)\, t = \mp \sin \Delta \omega\, t
$$

Nach einer Umwandlung in Rechtecksignale mit Hilfe von Begrenzern erhält man die binären Daten aus der zeitlichen Folge der steigenden Flanken; zur Auswertung wird ein flankengesteigertes D-Flip-Flop verwendet. In der Praxis werden anstelle der Multiplizierer zwei elektronische Schalter eingesetzt, die mit zwei gegeneinander verschobenen Rechtecksignalen angesteuert werden; die dabei entstehenden Oberwellen bei Mehrfachen
<!-- page-import:1243:end -->

<!-- page-import:1244:start -->
21.4 Modulationsverfahren 1207

Abb. 21.69. Modulator für digitale Modulationsverfahren

der Trägerfrequenz werden durch die Tiefpässe unterdrückt. Die Trägerfrequenz im Empfänger muss nicht exakt mit der Trägerfrequenz im Sender übereinstimmen; sie muss nur zwischen $f_T - \Delta f$ und $f_T + \Delta f$ liegen. In der Praxis werden die Trägerfrequenzen im Sender und im Empfänger von Quarz-Oszillatoren mit gleicher Nominalfrequenz abgeleitet; dadurch ist die Abweichung im allgemeinen deutlich kleiner als der Frequenzhub $\Delta f$.

Die Frequenztastung 2-FSK wird häufig in einfachen Systemen mit Datenraten bis zu mehreren Kilobit pro Sekunde eingesetzt; auch 4-FSK-Systeme sind im Einsatz. Bei höheren Datenraten werden jedoch komplexere Verfahren verwendet; diese ermöglichen eine höhere Datenrate bei gleicher Bandbreite des Sendesignals und sind weniger störanfällig.

#### 21.4.3.2 I/Q-Darstellung digitaler Modulationsverfahren

Bei digitalen Modulationsverfahren werden in der Regel sowohl die Amplitude als auch die Phase moduliert; dadurch kann man bei gleicher Bandbreite eine höhere Datenrate erzielen. Zur Darstellung des modulierten Trägersignals werden die Quadraturkomponenten $i\,(t)$ und $q\,(t)$ aus (21.67) verwendet:

$$
s_T(t) = a(t)\cos\,[\omega_T t + \varphi(t)] = i\,(t)\cos \omega_T t - q\,(t)\sin \omega_T t
$$

##### 21.4.3.2.1 Modulation und Demodulation

Die Modulation erfolgt in zwei Schritten. Im ersten Schritt erzeugt ein digitaler Modulator aus dem binären Datensignal $s\,(n)$ das Inphase-Signal $i\,(t)$ und das Quadratur-Signal $q\,(t)$. Im zweiten Schritt wird mit einem I/Q-Mischer das modulierte Trägersignal $s_T(t)$ gebildet. Abbildung 21.69 zeigt den Aufbau des Modulators. In der Praxis muss nach dem I/Q-Mischer ein Bandpass zur Unterdrückung unerwünschter Anteile eingesetzt werden; dies gilt vor allem dann, wenn die Mischer als Schalter ausgeführt werden, was in der Praxis fast immer der Fall ist.

Die Demodulation erfolgt ebenfalls in zwei Schritten. Im ersten Schritt werden mit einem I/Q-Mischer die Signale

$$
i_M(t) = s_T(t)\cos \omega_T t = [\,i\,(t)\cos \omega_T t - q\,(t)\sin \omega_T t\,]\cos \omega_T t
$$

$$
= \frac{1}{2}\,[\,i\,(t) + i\,(t)\cos 2\omega_T t - q\,(t)\sin 2\omega_T t\,]
$$

$$
q_M(t) = s_T(t)\,(- \sin \omega_T t) = [\,i\,(t)\cos \omega_T t - q\,(t)\sin \omega_T t\,]\,(- \sin \omega_T t)
$$
<!-- page-import:1244:end -->

<!-- page-import:1245:start -->
1208  21. Grundlagen

I/Q-Mischer

Abb. 21.70. Demodulator für digitale Modulationsverfahren

$$
= \frac{1}{2}\,[\,q(t)-q(t)\cos 2\omega_T t-i(t)\sin 2\omega_T t\,]
$$

gebildet; daraus erhält man nach Tiefpass-Filterung die Quadraturkomponenten $i(t)$ und $q(t)$. Im zweiten Schritt ermittelt ein digitaler Demodulator das binäre Datensignal $e(n)$. Abbildung 21.70 zeigt den Aufbau des Demodulators. Die frequenz- und phasenrichtige Bereitstellung der unmodulierten Trägersignale $\cos \omega_T t$ und $-\sin \omega_T t$ ist aufwendig. In der Praxis wird die Trägerfrequenz im Sender und im Empfänger von Quarz-Oszillatoren mit gleicher Nominalfrequenz abgeleitet; dadurch ist die anfängliche Frequenzabweichung gering. Der Quarz-Oszillator im Empfänger ist abstimmbar und wird mit Hilfe von periodisch übertragenen Phasensynchronworten nachgeregelt. Bei Mobilkommunikationssystemen wird häufig zusätzlich zum Nutzkanal ein spezieller Pilotkanal ausgewertet; dieser enthält ein spezielles Pilotsignal, das eine Synchronisation ermöglicht.

Die Trägerfrequenz $f_T$ entspricht häufig der Sendefrequenz; in diesem Fall wird das modulierte Signal nur noch verstärkt und der Sendeantenne zugeführt. Mit zunehmender Sendefrequenz wird es allerdings immer schwieriger, I/Q-Mischer mit gleichen Eigenschaften im I- und im Q-Zweig herzustellen und die unmodulierten Trägersignale $\cos \omega_T t$ und $-\sin \omega_T t$ mit gleicher Amplitude und exakter Phasenverschiebung bereitzustellen; dann wird als Trägerfrequenz eine niedrigere Zwischenfrequenz verwendet. Die Umsetzung auf die Sendefrequenz erfolgt mit einem weiteren Mischer.

#### 21.4.3.2.2 Komplexes Basisbandsignal

Die Quadraturkomponenten werden zu einem *komplexen Basisbandsignal*

$$
s_B(t)=i(t)+j\,q(t)
\qquad (21.84)
$$

zusammengefasst. Dieses Signal entspricht den aus der komplexen Wechselstromrechnung bekannten komplexen Zeigern; dort gilt

$$
u(t)=\hat{u}\cos(\omega t+\varphi)=\operatorname{Re}\left\{\hat{u}\,e^{j\varphi_e}\,e^{j\omega t}\right\}
=\operatorname{Re}\left\{U\,e^{j\omega t}\right\}
$$

$$
\Rightarrow\quad U=\hat{u}\,e^{j\varphi}
$$

mit dem komplexen Zeiger $U$. Entsprechend gilt für das modulierte Trägersignal:

$$
s_T(t)=a(t)\cos[\omega_T t+\varphi(t)]
=\operatorname{Re}\left\{a(t)e^{j\varphi(t)}e^{j\omega_T t}\right\}
$$

$$
= i(t)\cos\omega_T t-q(t)\sin\omega_T t
=\operatorname{Re}\left\{[i(t)+j\,q(t)]\,e^{j\omega_T t}\right\}
$$
<!-- page-import:1245:end -->

<!-- page-import:1246:start -->
21.4 Modulationsverfahren 1209

a moduliertes Trägersignal

b Basisbandsignal

**Abb. 21.71.** Betragsspektren der Signale (USB: unteres Seitenband; OSB: oberes Seitenband) mit einem Beispiel für ein Eintonsignal mit der Basisbandfrequenz $f_1$

$$
\Rightarrow \quad s_B(t) = a(t)\,e^{j\varphi(t)} = i(t) + j\,q(t)
$$

Der komplexe Zeiger ist zeitabhängig, da Amplitude und Phase bzw. Real- und Imaginärteil zeitabhängig sind; man erhält demnach anstelle eines komplexen Zeigers ein komplexes Signal. Aus dem komplexen Basisbandsignal folgt mit

$$
s_T(t) = \operatorname{Re}\left\{ s_B(t)\,e^{j\omega_T t} \right\}
\qquad (21.85)
$$

das modulierte Trägersignal. In der Praxis wird der Zusatz *komplex* meist weggelassen; man spricht dann nur vom *Basisbandsignal*.

Im Frequenzbereich entspricht der Übergang vom modulierten Trägersignal zum Basisbandsignal einer Verschiebung des Spektrums um die Trägerfrequenz, siehe Abb. 21.71; dabei wird das untere Seitenband auf negative, das obere auf positive Basisbandfrequenzen abgebildet. Der unmodulierte Träger hat die Basisbandfrequenz Null. Da die Seitenbänder unabhängig voneinander sind, ist das Spektrum im allgemeinen unsymmetrisch.

Die Hauptvorteile des Basisbandsignals sind die Unabhängigkeit von der Trägerfrequenz und die Darstellung des Trägerzustands mit einem Signal, dessen Betrag und Phase der Trägeramplitude und -phase entsprechen. Bei sinusförmigen Hoch- und Zwischenfrequenzsignalen wird meist nicht die Absolutfrequenz, sondern der Abstand zum Träger angegeben; dieser Abstand entspricht der Basisbandfrequenz.

*Beispiele:* Für ein amplitudenmoduliertes Trägersignal

$$
s_T(t) = \left[a_T + k_{AM}s(t)\right]\cos \omega_T t
$$

gilt:

$$
s_T(t) = \operatorname{Re}\left\{\left[a_T + k_{AM}s(t)\right]\,e^{j\omega_T t}\right\}
\quad \Rightarrow \quad
s_B(t) = a_T + k_{AM}s(t)
$$

Daraus folgt:

$$
i(t) = a_T + k_{AM}s(t), \quad q(t) = 0
$$

Das Basisbandsignal ist reell. Für ein frequenzmoduliertes Trägersignal

$$
s_T(t) = a_T \cos \left[\omega_T t + k_{FM}\int_0^t s(\tau)\,d\tau \right]
$$

gilt:
<!-- page-import:1246:end -->

<!-- page-import:1247:start -->
1210 21. Grundlagen

$$
s_T(t)=\operatorname{Re}\left\{\left[a_T\,e^{\,j\,k_{FM}\int_0^t s(\tau)\,d\tau}\right]e^{\,j\omega_T t}\right\}
$$

$$
\Rightarrow\quad s_B(t)=a_T\,e^{\,j\,k_{FM}\int_0^t s(\tau)\,d\tau}
$$

Daraus folgt:

$$
i(t)=a_T\cos\left[k_{FM}\int_0^t s(\tau)\,d\tau\right]\quad,\quad
q(t)=a_T\sin\left[k_{FM}\int_0^t s(\tau)\,d\tau\right]
$$

In diesem Fall ist das Basisbandsignal komplex.

#### 21.4.3.2.3 Bandbreite

Die obere Grenzfrequenz $f_{g,B}$ des komplexen Basisbandsignals entspricht dem Maximum der Grenzfrequenzen der Quadraturkomponenten; wenn $f_{g,i}$ die obere Grenzfrequenz des Inphase-Signals $i(t)$ und $f_{g,q}$ die obere Grenzfrequenz des Quadratur-Signals $q(t)$ ist, gilt:

$$
f_{g,B}=\max\{f_{g,i},\,f_{g,q}\}
$$

Die beiden amplitudenmodulierten Signale $i(t)\cos\omega_T t$ und $q(t)\sin\omega_T t$ haben nach (21.73) eine Bandbreite entsprechend der doppelten oberen Grenzfrequenz:

$$
B_{AM.i}=2\,f_{g,i}\quad,\quad B_{AM.q}=2\,f_{g,q}
$$

Daraus folgt, dass die Bandbreite des modulierten Trägersignals dem doppelten Maximum der Grenzfrequenzen der Quadraturkomponenten entspricht:

$$
B=\max\{B_{AM.i},\,B_{AM.q}\}=2\,f_{g,B}=\max\{2\,f_{g,i},\,2\,f_{g,q}\}
\qquad (21.86)
$$

Bei den Quadraturkomponenten wird in der Praxis immer die zweiseitige Bandbreite angegeben; sie entspricht der einseitigen Bandbreite der amplitudenmodulierten Signale:

$$
B_i=2\,f_{g,i}=B_{AM.i}\quad,\quad B_q=2\,f_{g,q}=B_{AM.q}
$$

Dadurch wird der Faktor 2 vermieden und die (einseitige) Bandbreite des modulierten Trägersignals, die gleich der benötigten Übertragungsbandbreite ist, entspricht dem Maximum der (zweiseitigen) Bandbreite der Quadraturkomponenten. Man spricht dann nur noch von der Bandbreite $B$. Abbildung 21.72 verdeutlicht die Zusammenhänge.

#### 21.4.3.2.4 Konstellationsdiagramme

Zur Übertragung eines binären Datensignals $s(n)$ werden jeweils $m$ Bit zu einem Symbol zusammengefasst, siehe Abb. 21.73; dabei wird die Datenrate $r_D$ (Taktfrequenz $f_D$) auf die Symbolrate $r_S=r_D/m$ (Symboltakt $f_S=f_D/m$) reduziert. Der digitale Modulator ordnet jedem der $2^m$ möglichen Symbole einen bestimmten Trägerzustand zu und erzeugt die zugehörigen Quadraturkomponenten $i$ und $q$. Stellt man die $2^m$ Trägerzustände, beschrieben durch den jeweiligen Basisbandzeiger $s_B=i+j\,q$, in der IQ-Ebene dar, erhält man das Konstellationsdiagramm des Modulationsverfahrens. Abbildung 21.74 zeigt die Konstellationsdiagramme für 2-PSK $(m=1)$, 4-PSK $(m=2)$ und 8-PSK $(m=3)$ zusammen mit den resultierenden Quadraturkomponenten für das Datensignal aus Abb. 21.73. Die Zuordnung der Symbole zu den Trägerzuständen erfolgt nach dem Gray-Code, so dass sich benachbarte Trägerzustände nur in einem Bit unterscheiden. Damit erreicht man eine minimale Bitfehlerrate, da eine durch Störungen verursachte, fehlerhafte Symbolerkennung im Demodulator in den meisten Fällen ein Nachbarsymbol liefert und damit nur einen Bitfehler erzeugt.
<!-- page-import:1247:end -->

<!-- page-import:1248:start -->
21.4 Modulationsverfahren 1211

$a$ komplexes Basisband

$b$ Trägerbereich

**Abb. 21.72.** Bandbreiten der Signale: Inphase-Signal $i(t)$ (oben), Quadratur-Signal $q(t)$ (Mitte) und komplexes Basisbandsignal $s_B(t)$ (unten)

Taktsignal $f=f_D$

Datensignal $s(n)$

binäre Daten

Symbole für $m=2$

Symboltakt $f_S=f_D/2$

Symbole für $m=3$

Symboltakt $f_S=f_D/3$

Symbole für $m=4$

Symboltakt $f_S=f_D/4$

2 Symbole: 0,1

4 Symbole: 00,01,10,11

8 Symbole. 000,...,111

16 Symbole: 0000,...,1111

**Abb. 21.73.** Bildung der Symbole aus dem binären Datensignal
<!-- page-import:1248:end -->

<!-- page-import:1249:start -->
1212  21. Grundlagen

a 2-PSK

b 4-PSK (QPSK)

c 8-PSK

**Abb. 21.74.** Konstellationsdiagramme für $n$-PSK-Verfahren

Die Bandbreite des modulierten Trägersignals ist proportional zum Symboltakt und beträgt in der Praxis $B \approx (1{,}3 \dots 2)\, f_S$; daraus folgt, dass man bei vorgegebener Bandbreite bei 4-PSK die doppelte und bei 8-PSK die dreifache Datenrate im Vergleich zu 2-PSK erzielt. Das Verhältnis aus der Datenrate und der Bandbreite wird Bandbreiteneffizienz $\Gamma$ genannt [21.6]:

$$
\Gamma = \frac{r_D}{B}
\qquad
\frac{r_D = m r_S}{B = (1{,}3 \dots 2)\cdot f_S}
=
\frac{m}{(1{,}3 \dots 2)}
\;\frac{\text{Bit}}{\text{s}\cdot \text{Hz}}
\qquad (21.87)
$$

Bei gleicher Leistung des modulierten Trägersignals nimmt der Abstand der Trägerzustände mit zunehmendem Wert von $m$ ab; dadurch nimmt die Störanfälligkeit zu. Ein Maß für die Störanfälligkeit ist die Leistungseffizienz $E_b/N_0$ [21.6]; sie gibt an, um welchen Faktor die mittlere Energie $E_b$ pro empfangenem Bit über der thermischen Rauschleistungsdichte $N_0$ liegen muss, damit eine vorgegebene Fehlerrate nicht überschritten wird. Die Leistungseffizienz entspricht bis auf einen Faktor dem benötigten Signal-Rausch-Abstand am Eingang des Demodulators; mit der empfangenen Nutzsignalleistung $P_e = E_b f_D$ (mittlere Energie pro empfangenem Bit $\times$ Datenrate) und der Rauschleistung $P_r = N_0 B$ (Rauschleistungsdichte $\times$ Bandbreite) erhält man:

$$
SNR = \frac{P_e}{P_r}
=
\frac{E_b f_D}{N_0 B}
\qquad
\frac{f_D = m f_S}{B = (1{,}3 \dots 2)\cdot f_S}
=
\frac{m}{(1{,}3 \dots 2)}\,\frac{E_b}{N_0}
\qquad (21.88)
$$
<!-- page-import:1249:end -->

<!-- page-import:1250:start -->
21.4 Modulationsverfahren 1213

Übergänge kontinuierlich

a DQPSK

b MSK

c 16-QAM

**Abb. 21.75.** Konstellationsdiagramme für DQPSK, MSK und 16-QAM

Die Forderungen nach hoher Bandbreiteneffizienz ($\Gamma$ groß) und hoher Leistungseffizienz ($E_b/N_0$ bzw. $SNR$ klein) sind gegenläufig. Einen guten Kompromiss erzielt man mit 4-PSK, auch QPSK (*quadri-phase shift keying*) genannt; dieses Verfahren wird deshalb häufig verwendet.

Abbildung 21.75 zeigt die Konstellationsdiagramme weiterer, häufig verwendeter Modulationsverfahren. DQPSK (*differential quadri-phase shift keying*) ist ein Vertreter der *differentiellen* Modulationsverfahren, bei denen die Symbole nicht durch Trägerzustände, sondern durch Zustandsübergänge repräsentiert werden. Bei diesen Verfahren kann der Demodulator das binäre Datensignal durch den sukzessiven Vergleich von jeweils zwei aufeinander folgenden Symbolen ermitteln, ohne die absolute Phase zu kennen; dadurch wird der Demodulator vergleichsweise einfach. Ebenfalls differentiell arbeitet das Verfahren MSK (*minimum shift keying*); dabei ändert sich die Trägerphase mit jedem Datenbit kontinuierlich um $\pm 90^\circ$. Dieses Verfahren hat den Vorteil, dass die Trägeramplitude immer konstant bleibt, und zwar unabhängig von der Geschwindigkeit der Zustandsübergänge. In diesem Fall treten auch bei nichtlinearen Verstärkern keine Intermodulationsverzerrungen auf. Bei $n$-PSK und DQPSK haben zwar ebenfalls alle Zustände dieselbe Amplitude, jedoch können die Übergänge in der Praxis nicht schlagartig erfolgen, wie wir im nächsten Abschnitt noch sehen werden; dadurch ändert sich bei diesen Verfahren die Trägeramplitude im Bereich der Übergänge. Bei 16-QAM (*quadratur amplitude modulation*) wird ein $4 \times 4$-Konstellationsdiagramm verwendet. QAM-Verfahren besitzen eine hohe Bandbreiteneffizienz und werden immer dann eingesetzt, wenn bei begrenzter Bandbreite höchste
<!-- page-import:1250:end -->

<!-- page-import:1251:start -->
1214  21. Grundlagen

Abb. 21.76. Spektrum eines Cosinus-Rolloff-Impulses

Übertragungsraten benötigt werden; Systeme mit 64-QAM $(8 \times 8)$ und 256-QAM $(16 \times 16)$ sind ebenfalls im Einsatz. Bei diesen Verfahren wird allerdings ein hoher Signal-Rausch-Abstand am Eingang des Demodulators benötigt.

#### 21.4.3.3 Impulsformung

Bei $n$-PSK, DQPSK und 16-QAM erhält man für die Quadraturkomponenten $i\,(t)$ und $q\,(t)$ eine Folge von rechteckförmigen Impulsen mit der Symboldauer $T_S = 1/f_S$, siehe Abb. 21.74 und Abb. 21.75. Sie sind in dieser Form nicht für die Übertragung geeignet, da das Betragsspektrum eines rechteckförmigen Impulses relativ breit ist und mit zunehmender Frequenz nur sehr langsam abfällt; die zur Übertragung benötigte Bandbreite wäre unverhältnismäßig hoch. Durch eine Impulsformung mit geeigneten Filtern kann man eine deutliche Reduktion der Bandbreite erzielen; dazu werden die Quadraturkomponenten $i\,(t)$ und $q\,(t)$ mit Impulsfiltern gefiltert.

##### 21.4.3.3.1 Cosinus-Rolloff-Impulse

Besonders günstige Eigenschaften haben Cosinus-Rolloff-Impulse

$$
s_{(r)}(t) = \frac{\sin\,(\pi f_S t)}{\pi f_S t}\,\frac{\cos\,(\pi r f_S t)}{1-(2r f_S t)^2}
\qquad \text{mit } 0 < r \leq 1
$$

mit dem Spektrum:

$$
S_{(r)}(f) =
\begin{cases}
1 & \text{für } |f| < (1-r)\,\dfrac{f_S}{2} \\[6pt]
\dfrac{1}{2}\left[1+\cos \dfrac{\pi}{r}\left(\dfrac{|f|}{f_S}-\dfrac{1-r}{2}\right)\right]
& \text{für } (1-r)\,\dfrac{f_S}{2} \leq |f| \leq (1+r)\,\dfrac{f_S}{2} \\[10pt]
0 & \text{für } |f| > (1+r)\,\dfrac{f_S}{2}
\end{cases}
$$

Der Parameter $r$ wird Rolloff-Faktor genannt und beeinflusst die (zweiseitige) Bandbreite des Impulses:

$$
B = (1+r)\,f_S \quad \Rightarrow \quad B\,T_S = 1+r
\eqno{(21.89)}
$$

Abbildung 21.76 zeigt das Spektrum eines Cosinus-Rolloff-Impulses. In der Praxis wird $r = 0{,}3 \ldots 1$ verwendet; daraus folgt $B = (1{,}3 \ldots 2)\,f_S$.

Abbildung 21.77 zeigt die Zeitsignale und die Betragsspektren der Cosinus-Rolloff-Impulse mit $r = 0{,}3$ und $r = 1$ im Vergleich zum Rechteck-Impuls. Die Betragsspektren der Cosinus-Rolloff-Impulse fallen wesentlich schneller ab. Die Bandbreite entspricht der
<!-- page-import:1251:end -->

<!-- page-import:1252:start -->
21.4 Modulationsverfahren 1215

Abb. 21.77. Impulse und Betragsspektren: Rechteck-Impuls (oben), Cosinus-Rolloff-Impuls $s_{(0,3)}$ mit $r = 0,3$ (Mitte) und Cosinus-Rolloff-Impuls $s_{(1)}$ mit $r = 1$ (unten) mit der Impulsdauer $T = 6\,T_S$. Bei den Cosinus-Rolloff-Impulsen ist zum Vergleich das Spektrum des Rechteck-Impulses dargestellt.

Breite des Hauptbereichs zwischen den beiden inneren Nullstellen. Die Anteile außerhalb des Hauptbereichs resultieren aus der notwendigen Begrenzung der unendlich langen Impulsdauer; man kann sie durch Vergrößern der Impulsdauer beliebig klein machen. In Abb 21.77 beträgt die Impulsdauer $T = 6\,T_S$ ($-3 \leq t/T_S \leq 3$). Mit zunehmendem Rolloff-Faktor fallen die Impulse schneller ab, so dass die Begrenzung weniger wirksam wird.

Da die Cosinus-Rolloff-Impulse länger sind als die Symboldauer $T_S$, entsteht ein Impulsneben sprechen; man nennt dies Symbolinterferenz (inter symbol interference, ISI). Die Besonderheit der Cosinus-Rolloff-Impulse liegt nun darin, dass das zentrale Maximum den Wert Eins aufweist und zu beiden Seiten Nullstellen im Abstand $T_S$ vorhanden sind, siehe Abb. 21.77; dadurch verschwindet die Symbolinterferenz, wenn die Symbole im Demodulator jeweils in der Mitte der Symboldauer abgetastet werden. Bei einer Ab-
<!-- page-import:1252:end -->

<!-- page-import:1253:start -->
1216  21. Grundlagen

a Rechteck-Impulse  
b Cosinus-Rolloff-Impulse mit $r = 1$  
c Cosinus-Rolloff-Impulse mit $r = 0{,}3$

**Abb. 21.78.** Zeitsignale (oben) und Augendiagramme (unten)

weichung vom idealen Abtastzeitpunkt kann der abgetastete Wert durch die benachbarten Impulse so stark verfälscht werden, dass der Demodulator eine Fehlentscheidung trifft, die zu einem Bitfehler führt. Auskunft über die zulässige Verschiebung des Abtastzeitpunkts und die damit verbundene Reduktion des Störabstands gibt das Augendiagramm; dabei werden alle möglichen Signalverläufe innerhalb einer Symboldauer berechnet und über einer gemeinsamen Zeitachse $-T_S/2 < t < T_S/2$ dargestellt. Abbildung 21.78 zeigt die Augendiagramme für Cosinus-Rolloff-Impulse mit $r = 0{,}3$ und $r = 1$ im Vergleich zum idealen Augendiagramm für Rechteck-Impulse. Man erkennt, dass bei einer Abtastung in der Mitte der Impulsdauer ($t = 0$) keine Reduktion des Störabstands auftritt. Bei einer Verschiebung des Abtastzeitpunkts nimmt der Störabstand ab, und zwar umso schneller, je kleiner der Rolloff-Faktor $r$ ist. Der Bereich zwischen dem untersten Verlauf für eine Eins und dem obersten Verlauf für eine Null wird Auge genannt. Bei Rechteck-Impulsen ist das Auge maximal geöffnet; bei Cosinus-Rolloff-Impulsen schließt sich das Auge für $r \to 0$. Die Öffnung des Auges ist ein Maß für den Synchronisationsaufwand im Empfänger: je kleiner das Auge ist, umso genauer muss der Abtastzeitpunkt eingehalten werden.

Das Augendiagramm zeigt ferner, dass die Amplitude nach der Impulsformung nicht mehr konstant ist. Daraus ergibt sich der Umstand, dass auch bei $n$-PSK und DQPSK eine Amplitudenmodulation auftritt, obwohl alle Zustände im Konstellationsdiagramm denselben Betrag besitzen. Die Amplitudenmodulation nimmt mit abnehmendem Rolloff-Faktor zu; dadurch nimmt der Spitzenwertfaktor (Verhältnis von Maximalwert und Effektivwert) ebenfalls zu.

Bei der Wahl des Rolloff-Faktors muss man einen Kompromiss zwischen der benötigten Bandbreite und der Öffnung des Auges eingehen. Die Bandbreite nimmt für $r \to 0$ den minimalen Wert $B = f_S$ an. Die Öffnung des Auges wird für $r = 1$ maximal; dann gilt $B = 2\,f_S$.
<!-- page-import:1253:end -->

<!-- page-import:1254:start -->
21.4 Modulationsverfahren 1217

#### 21.4.3.3.2 Impulsfilter

Zur Impulsformung werden linearphasige Transversalfilter mit endlicher Impulsantwort eingesetzt. Diese Filter enthalten Verzögerungsglieder, deren Ausgangssignale gewichtet addiert werden. Sie werden normalerweise als digitale FIR-Filter (finite impulse response) realisiert; in diesem Fall kann man die Verzögerungsglieder als Schieberegister ausführen. Man kann Transversalfilter aber auch als analoge Filter realisieren, indem man Laufzeitleitungen, Abtast-Halte-Glieder oder ein ladungsgekoppeltes Schieberegister (charge coupled device, CCD) zur Signalverzögerung einsetzt. Eine weitere Möglichkeit ist die Verwendung von Oberflächenwellenfiltern (surface acoustic wave filter, SAW-Filter), bei denen die Laufzeit einer akustischen Welle zur Signalverzögerung eingesetzt wird. SAW-Filter sind jedoch nur als Bandpässe realisierbar.

Die einfachste Möglichkeit zur Impulsfilterung ist der Einsatz eines SAW-Bandpasses mit Cosinus-Rolloff-Charakteristik im Trägerbereich, d.h. nach dem I/Q-Mischer; der Modulator hat dann den in Abb. 21.79a gezeigten Aufbau. In der Praxis entsteht dadurch kein zusätzlicher Aufwand, da nach dem I/Q-Mischer ohnehin ein Bandpass zur Unterdrückung unerwünschter Anteile eingesetzt werden muss, siehe Abb. 21.69. Als Trägerfrequenz muss eine Zwischenfrequenz ($f_T \approx 10 \dots 100\,\mathrm{MHz}$) verwendet werden, damit das SAW-Filter mit der gewünschten Bandbreite realisiert werden kann.

Zur Impulsfilterung im Basisband werden getrennte Filter für die Quadraturkomponenten $i(t)$ und $q(t)$ benötigt. Abbildung 21.79b zeigt einen Modulator mit analogen Cosinus-Rolloff-Tiefpässen. Zur Realisierung kann man das in Abb. 21.80 gezeigte analoge Transversalfilter mit Abtast-Halte-Gliedern und einem invertierenden Operationsverstärker zur gewichteten Summation verwenden. Da die Quadraturkomponenten im Basisband eine zweiseitige Bandbreite $B = (1 + r)\,f_S \leq 2\,f_S$ haben, muss die Taktfrequenz des Transversalfilters mindestens um den Faktor 2 über der Symbolfrequenz $f_S$ liegen, damit das Abtasttheorem erfüllt wird. In der Praxis wird das Filter meist mit der vierfachen Symbolfrequenz getaktet, um den Abstand zu den Alias-Komponenten zu erhöhen (oversampling). Daraus folgt, dass für Cosinus-Rolloff-Impulse mit einer Impulslänge von $6\,T_S$ ein Filter mit $6 \cdot 4 = 24$ Verzögerungsgliedern bzw. 48 Abtast-Halte-Gliedern benötigt wird. Bei Modulationsverfahren mit zweiwertigen Quadraturkomponenten kann man die Verzögerungsglieder durch D-Flip-Flops ersetzen; dies ist bei 2-PSK, 4-PSK (QPSK) und DQPSK der Fall. Um den Aufwand für die Filter zu reduzieren, werden die Cosinus-Rolloff-Tiefpässe in einfachen Systemen oft nur näherungsweise realisiert. Wenn man eine etwas höhere Bandbreite und eine geringere Augenöffnung in Kauf nimmt, kann man anstelle der Transversalfilter auch gewöhnliche Tiefpassfilter einsetzen.

In komplexen Systemen wird die Impulsfilterung mit digitalen FIR-Filtern durchgeführt; dabei werden zusätzlich D/A-Umsetzer zur Erzeugung der analogen Quadraturkomponenten benötigt. Abbildung 21.79c zeigt einen Modulator mit digitalen Cosinus-Rolloff-Tiefpässen. Die Wortbreite am Eingang der Filter ergibt sich aus dem Konstellationsdiagramm und beträgt maximal 4 Bit (256-QAM $\to$ $16 \times 16$-Konstellationsdiagramm $\to$ je 4 Bit für $i_R(n)$ und $q_R(n)$). Die Wortbreite am Ausgang entspricht der Auflösung der D/A-Umsetzer und muss entsprechend dem geforderten Signal-Rausch-Abstand gewählt werden; in der Praxis sind $10 \dots 14$ Bit üblich. Bei Modulationsverfahren mit zweiwertigen Quadraturkomponenten (2-PSK, QPSK und DQPSK) werden die Filter besonders einfach, da das Eingangssignal nur die Werte $\pm 1$ annimmt und mit einem Bit dargestellt werden kann. Da das Ausgangswort des Filters bei einer Impulsdauer von $6\,T_S$ von maximal 7 aufeinanderfolgenden Bits abhängt, kann man bei einer Taktfrequenz von $4\,f_S$ alle
<!-- page-import:1254:end -->

<!-- page-import:1256:start -->
1219

## 21.4 Modulationsverfahren

Abb. 21.80. Analoges Transversalfilter mit Abtast-Halte-Gliedern

zeitkritischer Funktionen eingesetzt. Ein derartiger DSP kann zum Beispiel zwei der in Abb. 21.81 gezeigten Filter und die nachfolgenden D/A-Umsetzer enthalten.

Bei einer Impulsfilterung mit analogen Transversalfiltern oder digitalen Filtern müssen zusätzlich analoge Anti-Alias-Filter eingesetzt werden, um die Alias-Anteile bei Mehrfachen der Taktfrequenz zu entfernen; diese Filter sind in Abb. 21.79b/c nicht dargestellt.

#### 21.4.3.4 Ein einfacher QPSK-Modulator

Wir zeigen im folgenden einen einfachen Modulator für ein QPSK-System, der in gleicher Form auch für DQPSK verwendet werden kann, wenn das binäre Nutzsignal vor dem Modulator kodiert wird. Wir gehen davon aus, dass der Modulator das modulierte Trägersignal

Abb. 21.81. Digitales Cosinus-Rolloff-Filter mit ROM für Modulationsverfahren mit zweiwertigen Quadraturkomponenten
<!-- page-import:1256:end -->

<!-- page-import:1257:start -->
1220  21. Grundlagen

Cosinus-Rolloff-Filter

$U_b$

$U_b$

$R_1$

$I_M$

$I_{Mq}$

$I_{Mi}$

$I/Q$-Mischer

Q-Mischer

I-Mischer

$U_b$

$U_b$

$U_b$

$U_b$

$U_b$

$U_b$

$U_T$

$U_{Tq}$

Pegelanpassung

Pegelanpassung

$U_I$

$U_q$

digitaler Modulator

Erzeugung der Trägersignale

FF5

FF6

$2\,f_T$

$\operatorname{sign}(\cos \omega_T t)$

$-\operatorname{sign}(\sin \omega_T t)$

FF3

FF4

FF2

FF1

$i(t)$

$q(t)$

$s(n)$

$f_D$

$f_D$

$Q_{FF1}$

$s(n)$

$Q_{FF2}$

$Q_{FF3}$

$Q_{FF4}$

$2\,f_T$

$Q_{FF5}$

$Q_{FF6}$

$\operatorname{sign}(\cos \omega_T t)$

$-\operatorname{sign}(\sin \omega_T t)$

$U_a$

$S_T$

$I_o$

$I_o$

**Abb. 21.82.** QPSK-Modulator mit I/Q-Mischer

auf einer Zwischenfrequenz erzeugt, die anschließend auf die Sendefrequenz umgesetzt wird.

Abbildung 21.82 zeigt den QPSK-Modulator mit I/Q-Mischer, Abb. 21.83 die Signalverläufe. Der digitale Modulator besteht aus einem 2 Bit-Serien-Parallel-Wandler, der die Bits des binären Datensignals $s(n)$ auf den $i$- und den $q$-Zweig verteilt; dabei reduziert das Flip-Flop FF1 die Taktfrequenz $f_D = 1/T_D$ um den Faktor 2 auf die Symbolfrequenz:
<!-- page-import:1257:end -->

<!-- page-import:1258:start -->
21.4 Modulationsverfahren 1221

$T_D = 1/f_D$

$s^{(n)}$

a b c d e f g h i j

$T_S = 1/f_S$

$U_i$

a c e g i

$T_T = 1/f_T$

$U_{Ti}$

$I_{Mi}$

$U_q$

b d f h j

$U_{Tq}$

$I_{Mq}$

$I_M$

$s_T$

$t$

$t$

$t$

$t$

$t$

$t$

$t$

$t$

**Abb. 21.83.** Signale im Modulator

$f_S = 1/T_S = f_D/2$. Die $i$-Bits werden mit dem Flip-Flop FF2 zwischengespeichert, bis die zugehörigen $q$-Bits zur Verfügung stehen; dann werden beide Bits synchron von den Flip-Flops FF3 und FF4 übernommen. Die pegelangepassten Ausgangsspannungen $U_i$ und $U_q$ des Modulators werden mit einem I/Q-Mischer auf die Trägerfrequenz umgesetzt. Als Trägersignale dienen zwei um eine Viertelperiode gegeneinander verschobene Rechtecksignale mit der Trägerfrequenz $f_T = 1/T_T$, die mit den Teiler-Flip-Flops FF5 und FF6 aus einem Rechtecksignal mit der doppelten Trägerfrequenz abgeleitet werden. Die Grundwellen der Rechtecksignale entsprechen den Trägersignalen $\cos \omega_T t$ und $-\sin \omega_T t$ eines idealen I/Q-Mischers. Die Stromschalter der Mischer werden mit den pegelangepassten Trägerspannungen $U_{Ti}$ und $U_{Tq}$ umgeschaltet; dadurch erhält man am Ausgang der Mischer die rechteckförmigen Ströme $I_{Mi}$ und $I_{Mq}$. Die Addition der Ausgangssignale der Mischer erfolgt durch eine Addition der Ströme $I_{Mi}$ und $I_{Mq}$. Der Summenstrom $I_M$ wird mit dem Widerstand $R_1$ in eine Spannung umgewandelt; eine Kollektorschaltung dient als Puffer. Aus der Ausgangsspannung $U_a$ erhält man nach Filterung mit einem Cosinus-Rolloff-Bandpass-Filter (SAW-Filter) das modulierte Trägersignal $s_T(t)$. In Abb. 21.82
<!-- page-import:1258:end -->

<!-- page-import:1715:start -->
1678  27. Phasenregelschleife (PLL)

Phasen-
Frequenz-
Detektor

PFD

Schleifen-
filter

gesteuerter
Oszillator
(FM-Modulator)

VCO

$e(t)$

$e_{LF}(t)$

$s_{VCO}(t)$

$|E|$

$0$

$f$ [lin]

$|E_{LF}|$

$0$

$f$ [lin]

$|S_{VCO}|$

$0$

$f_M$ [lin]

**Abb. 27.51.** Spektren der Signale. Im Gegensatz zu Abb. 27.50 ist die Frequenzachse hier linear dargestellt, so dass die Störtöne äquidistant liegen. Zusätzlich sind die Anteile bei positiven *und* negativen Frequenzen dargestellt, während Abb. 27.50 nur die Anteile bei positiven Frequenzen enthält.

oberen und im unteren Seitenband des VCO-Signals erhalten. Abbildung 27.51 verdeutlicht den Zusammenhang.

Zur Berechnung der relativen, auf das VCO-Nutzsignal bezogenen Amplituden der Störtöne im VCO-Signal beziehen wir uns auf die Gleichungen zur FM-Modulation im Abschnitt 21.4.2.1 auf Seite 1197. Wir gehen von einem Störton mit der Amplitude $a_M$ und der Frequenz $\omega_M = 2\pi f_M$ am Eingang des VCOs aus, siehe (21.77) auf Seite 1197:

$$
s_M(t) = a_M \cos \omega_M t
$$

Daraus folgt für den Modulationsindex

$$
\eta \qquad \overset{(21.80)}{=} \frac{k_{FM} a_M}{\omega_M} \qquad \overset{k_{FM}=k_{VCO}}{=} \frac{k_{VCO}\, a_M}{\omega_M}
$$

und für das Signal am Ausgang des VCOs im Einklang mit (21.77) und unter Verwendung der Näherungen für die Besselfunktionen:

$$
s_{VCO}(t) = a_{VCO} \left( \cos \omega_{VCO}\, t + \frac{\eta}{2}\cos(\omega_{VCO} + \omega_M)t - \frac{\eta}{2}\cos(\omega_{VCO} - \omega_M)t \right)
$$

Die Amplitude $a_M$ am Eingang des VCOs erhalten wir aus der Amplitude $a_{PD}$ am Ausgang der Ladungspumpe und dem Betrag der Übertragungsfunktion des Schleifenfilters bei der Frequenz $\omega_M$:

$$
a_M = |H_{LF}(j\,\omega_M)|\, a_{PD}
$$

Wir machen dabei davon Gebrauch, dass die Schleifenbandbreite $\omega_0$ in der Praxis immer geringer sein muss als die Frequenz $\omega_{M,min}$ des Störtons mit der geringsten Frequenz; daraus folgt, dass die Gegenkopplung über die Schleife vernachlässigt werden kann ${}^5$. Daraus folgt für die relative Amplitude der Störtöne im VCO-Signal:

$$
a_{spur} = \frac{\eta}{2} = \frac{k_{VCO}\, a_M}{2\omega_M} = \frac{k_{VCO}\, |H_{LF}(j\,\omega_M)|\, a_{PD}}{2\omega_M}
$$

Dabei steht der Index *spur* für *spurious* (tone). Man erkennt, dass die Amplituden mit zunehmender Kreisfrequenz $\omega_M$ schnell abnehmen, da:
<!-- page-import:1715:end -->
