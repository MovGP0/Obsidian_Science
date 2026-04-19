# Models of the Bipolar Transistor

<!-- page-import:0098:start -->
2.3 Modelle für den Bipolartransistor 61

**Abb. 2.24.** Ebers-Moll-Modell für einen npn-Transistor

und zwei stromgesteuerten Stromquellen, die den Stromfluss durch die Basis beschreiben. Die Steuerfaktoren der gesteuerten Quellen sind mit $A_N$ für den Normalbetrieb und $A_I$ für den Inversbetrieb bezeichnet; es gilt $A_N \approx 0{,}98 \dots 0{,}998$ und $A_I \approx 0{,}5 \dots 0{,}9$. Die unterschiedlichen Werte für $A_N$ und $A_I$ folgen aus dem im Abschnitt 2.2 beschriebenen unsymmetrischen Aufbau.

### 2.3.1.1.1 Allgemeine Gleichungen

Mit den Emitter- und Kollektor-Diodenströmen

$$
I_{D,N} = I_{S,N}\left(e^{\frac{U_{BE}}{U_T}} - 1\right)
$$

$$
I_{D,I} = I_{S,I}\left(e^{\frac{U_{BC}}{U_T}} - 1\right)
$$

erhält man nach Abb. 2.24 für die Ströme an den Anschlüssen [2.5]:

$$
I_C = A_N I_{S,N}\left(e^{\frac{U_{BE}}{U_T}} - 1\right) - I_{S,I}\left(e^{\frac{U_{BC}}{U_T}} - 1\right)
$$

$$
I_E = -\,I_{S,N}\left(e^{\frac{U_{BE}}{U_T}} - 1\right) + A_I I_{S,I}\left(e^{\frac{U_{BC}}{U_T}} - 1\right)
$$

$$
I_B = (1 - A_N)I_{S,N}\left(e^{\frac{U_{BE}}{U_T}} - 1\right) + (1 - A_I)I_{S,I}\left(e^{\frac{U_{BC}}{U_T}} - 1\right)
$$

Aus dem Theorem über reziproke Netzwerke erhält man eine Bindung für die Parameter:

$$
A_N I_{S,N} = A_I I_{S,I} = I_S
$$

Das Modell wird deshalb durch $A_N$, $A_I$ und $I_S$ vollständig parametriert.
<!-- page-import:0098:end -->

<!-- page-import:0099:start -->
62  2. Bipolartransistor

a Normalbetrieb

\(I_C=-A_N I_E=B_N I_B\)

\(U_{BE}\)

\(I_E=-I_{D,N}\)

b Inversbetrieb

\(I_E=-A_I I_C=B_I I_B\)

\(U_{BC}\)

\(I_C=-I_{D,I}\)

**Abb. 2.25. Reduzierte Ebers-Moll-Modelle eines npn-Transistors**

### 2.3.1.1.2 Normalbetrieb

Im Normalbetrieb ist die BC-Diode wegen \(U_{BC}<0\) gesperrt; sie kann wegen \(I_{D,I}\approx -I_{S,I}\approx 0\) zusammen mit der zugehörigen gesteuerten Quelle vernachlässigt werden. Für \(U_{BE}\gg U_T\) kann man zusätzlich den Term \(-1\) gegen die Exponentialfunktion vernachlässigen und erhält damit:

\[
I_C=I_S\,e^{\frac{U_{BE}}{U_T}}
\]

\[
I_E=-\frac{1}{A_N}\,I_S\,e^{\frac{U_{BE}}{U_T}}
\]

\[
I_B=\frac{1-A_N}{A_N}\,I_S\,e^{\frac{U_{BE}}{U_T}}
=\frac{1}{B_N}\,I_S\,e^{\frac{U_{BE}}{U_T}}
\]

Abbildung 2.25a zeigt das reduzierte Modell mit den wichtigsten Zusammenhängen; dabei ist \(A_N\) die *Stromverstärkung in Basisschaltung* und \(B_N\) die *Stromverstärkung in Emitterschaltung* ²:

\[
A_N=-\frac{I_C}{I_E}
\]

\[
B_N=\frac{A_N}{1-A_N}=\frac{I_C}{I_B}
\]

Typische Werte sind \(A_N\approx 0{,}98\dots 0{,}998\) und \(B_N\approx 50\dots 500\).

### 2.3.1.1.3 Inversbetrieb

Für den Inversbetrieb erhält man in gleicher Weise das in Abb. 2.25b gezeigte reduzierte Modell; die Stromverstärkungen lauten:

\[
A_I=-\frac{I_E}{I_C}
\]

---

² Bei den Stromverstärkungen muss zwischen Modellparametern und messbaren äußeren Stromverstärkungen unterschieden werden. Beim Ebers-Moll-Modell sind die Modellparameter \(A_N\) und \(B_N\) für den Normalbetrieb und \(A_I\) und \(B_I\) für den Inversbetrieb mit den äußeren Stromverstärkungen identisch; sie können deshalb durch die äußeren Ströme definiert werden.
<!-- page-import:0099:end -->

<!-- page-import:0100:start -->
2.3 Modelle für den Bipolartransistor 63

$$
B_I \;=\; \frac{A_I}{1-A_I} \;=\; \frac{I_E}{I_B}
$$

Typische Werte sind $A_I \approx 0{,}5\dots 0{,}9$ und $B_I \approx 1\dots 10$.

#### 2.3.1.1.4 Sättigungsspannung

Beim Einsatz als Schalter gerät der Transistor vom Normalbetrieb in die Sättigung; dabei interessiert die erreichbare minimale Kollektor-Emitter-Spannung $U_{CE,sat}(I_B,I_C)$. Man erhält:

$$
U_{CE,sat} \;=\; U_T \ln \frac{B_N\,(1+B_I)\,(B_I I_B + I_C)}{B_I^2\,(B_N I_B - I_C)}
$$

Für $0 < I_C < B_N I_B$ erhält man $U_{CE,sat} \approx 20\dots 200\,\mathrm{mV}$.

Das Minimum von $U_{CE,sat}$ wird für $I_C = 0$ erreicht:

$$
U_{CE,sat}(I_C = 0) \;=\; U_T \ln \left(1 + \frac{1}{B_I}\right) \;=\; -\,U_T \ln A_I
$$

Vertauscht man Emitter und Kollektor, erhält man beim Schalten vom Inversbetrieb in die Sättigung für $I_E = 0$:

$$
U_{EC,sat}(I_E = 0) \;=\; U_T \ln \left(1 + \frac{1}{B_N}\right) \;=\; -\,U_T \ln A_N
$$

Wegen $A_I < A_N < 1$ gilt $U_{EC,sat}(I_E = 0) < U_{CE,sat}(I_C = 0)$. Typische Werte sind $U_{CE,sat}(I_C = 0) \approx 2\dots 20\,\mathrm{mV}$ und $U_{EC,sat}(I_E = 0) \approx 0{,}05\dots 0{,}5\,\mathrm{mV}$.

#### 2.3.1.2 Das Transportmodell

Durch eine Äquivalenzumformung erhält man aus dem Ebers-Moll-Modell das in Abb. 2.26 gezeigte Transportmodell [2.5]; es besitzt nur eine gesteuerte Quelle und bildet die Grundlage für die Modellierung weiterer Effekte im nächsten Abschnitt.

##### 2.3.1.2.1 Allgemeine Gleichungen

Mit den Strömen

$$
I_{B,N} \;=\; \frac{I_S}{B_N}\left(e^{\frac{U_{BE}}{U_T}} - 1\right)
$$

(2.24)

$$
I_{B,I} \;=\; \frac{I_S}{B_I}\left(e^{\frac{U_{BC}}{U_T}} - 1\right)
$$

(2.25)

$$
I_T \;=\; B_N I_{B,N} - B_I I_{B,I} \;=\; I_S \left(e^{\frac{U_{BE}}{U_T}} - e^{\frac{U_{BC}}{U_T}}\right)
$$

(2.26)

erhält man aus Abb. 2.26:

$$
I_B \;=\; \frac{I_S}{B_N}\left(e^{\frac{U_{BE}}{U_T}} - 1\right) + \frac{I_S}{B_I}\left(e^{\frac{U_{BC}}{U_T}} - 1\right)
$$

$$
I_C \;=\; I_S \left(e^{\frac{U_{BE}}{U_T}} - \left(1 + \frac{1}{B_I}\right)e^{\frac{U_{BC}}{U_T}} + \frac{1}{B_I}\right)
$$
<!-- page-import:0100:end -->

<!-- page-import:0101:start -->
64  2. Bipolartransistor

**Abb. 2.26.** Transportmodell für einen npn-Transistor

$$
I_E = I_S \left(-\left(1+\frac{1}{B_N}\right)e^{\frac{U_{BE}}{U_T}} + e^{\frac{U_{BC}}{U_T}} + \frac{1}{B_N}\right)
$$

#### 2.3.1.2.2 Normalbetrieb

Für den Normalbetrieb erhält man bei Vernachlässigung der Sperrströme:

$$
I_B = \frac{I_S}{B_N} e^{\frac{U_{BE}}{U_T}}
$$

$$
I_C = I_S e^{\frac{U_{BE}}{U_T}}
$$

Unter Berücksichtigung des Zusammenhangs zwischen $A_N$ und $B_N$ sind diese Gleichungen mit denen des Ebers-Moll-Modells identisch. Abbildung 2.27 zeigt das reduzierte Transportmodell für den Normalbetrieb.

#### 2.3.1.2.3 Eigenschaften

Das Transportmodell beschreibt das primäre Gleichstromverhalten des Bipolartransistors unter der Annahme idealer Emitter- und Kollektor-Dioden. Eine wichtige Eigenschaft des Modells ist, dass der durch die Basiszone hindurchfließende Transportstrom $I_T$ separat

**Abb. 2.27.** Reduziertes Transportmodell für den Normalbetrieb
<!-- page-import:0101:end -->

<!-- page-import:0102:start -->
## 2.3 Modelle für den Bipolartransistor

65

auftritt; beim Ebers-Moll-Modell ist dies nicht der Fall. Wie beim Ebers-Moll-Modell sind drei Parameter zur Beschreibung nötig: $I_S$, $B_N$ und $B_I$ [2.5].

#### 2.3.1.3 Weitere Effekte

Zur genaueren Beschreibung des statischen Verhaltens wird das Transportmodell erweitert. Die Effekte, die dabei modelliert werden, wurden bereits in den Abschnitten 2.1.2 und 2.1.3 qualitativ beschrieben:

- Durch Ladungsträgerrekombination in den pn-Übergängen werden zusätzliche Leckströme in der Emitter- und der Kollektordi-ode erzeugt; diese Ströme addieren sich zum Basisstrom und haben keinen Einfluss auf den Transportstrom $I_T$.
- Bei großen Strömen ist der Transportstrom $I_T$ kleiner als der durch (2.26) gegebene Wert. Verursacht wird dieser Hochstromeffekt durch die stark angestiegene Ladungsträgerkonzentration in der Basiszone; man spricht in diesem Zusammenhang auch von starker Injektion.
- Die Spannungen $U_{BE}$ und $U_{BC}$ beeinflussen die effektive Dicke der Basiszone und haben damit auch einen Einfluss auf den Transportstrom $I_T$; dieser Effekt wird Early-Effekt genannt.

##### 2.3.1.3.1 Leckströme

Zur Berücksichtigung der Leckströme wird das Transportmodell um zwei weitere Dioden mit den Strömen

$$
I_{B,E} = I_{S,E}\left(e^{\frac{U_{BE}}{n_E U_T}} - 1\right)
$$

(2.27)

$$
I_{B,C} = I_{S,C}\left(e^{\frac{U_{BC}}{n_C U_T}} - 1\right)
$$

(2.28)

erweitert [2.5]. Es werden vier weitere Modellparameter benötigt: die Leck-Sättigungssperrströme $I_{S,E}$ und $I_{S,C}$ und die Emissionskoeffizienten $n_E \approx 1{,}5$ und $n_C \approx 2$.

##### 2.3.1.3.2 Hochstromeffekt und Early-Effekt

Der Einfluss des Hochstrom- und des Early-Effekts auf den Transportstrom $I_T$ wird durch die relative Basisladung $q_B$ beschrieben [2.5]:

$$
I_T = \frac{B_N I_{B,N} - B_I I_{B,I}}{q_B} = \frac{I_S}{q_B}\left(e^{\frac{U_{BE}}{U_T}} - e^{\frac{U_{BC}}{U_T}}\right)
$$

(2.29)

##### 2.3.1.3.3 Allgemeine Gleichungen

Die Ströme $I_{B,N}$ und $I_{B,I}$ sind weiterhin durch (2.24) und (2.25) gegeben. Abbildung 2.28 zeigt das erweiterte Modell. Man erhält:

$$
I_B = I_{B,N} + I_{B,I} + I_{B,E} + I_{B,C}
$$

$$
I_C = \frac{B_N}{q_B} I_{B,N} - \left(\frac{B_I}{q_B} + 1\right) I_{B,I} - I_{B,C}
$$
<!-- page-import:0102:end -->

<!-- page-import:0104:start -->
## 2.3 Modelle für den Bipolartransistor

67

**Abb. 2.29.**  
Halblogarithmische Auftragung der  
Ströme $I_B$ und $I_C$ im Normalbetrieb  
(Gummel-Plot)

- Bei kleinen und mittleren Strömen ist $q_2 \ll 1$ und damit $q_B \approx q_1$. Wegen $U_{BE} \approx 0,6 \dots 0,8\,\mathrm{V}$ gilt $U_{BE} \ll U_{A,I}$ und $U_{BC} = U_{BE} - U_{CE} \approx -U_{CE}$; damit erhält man eine Näherung für $q_1$:

$$
q_1 \approx \frac{1}{1 + \frac{U_{CE}}{U_{A,N}}}
$$

Einsetzen in (2.31) liefert:

$$
I_C \approx I_S\, e^{\frac{U_{BE}}{U_T}} \left(1 + \frac{U_{CE}}{U_{A,N}}\right)
\qquad \text{für } I_C < I_{K,N}
$$

Diese Gleichung entspricht der im Abschnitt 2.1.2 angegebenen Großsignalgleichung (2.5), wenn man $U_A = U_{A,N}$ berücksichtigt ⁴.

- Bei großen Strömen ist $q_2 \gg 1$ und damit $q_B \approx q_1 \sqrt{q_2}$; daraus folgt unter Verwendung der oben genannten Näherung für $q_1$:

$$
I_C \approx \sqrt{I_S I_{K,N}}\, e^{\frac{U_{BE}}{2U_T}} \left(1 + \frac{U_{CE}}{U_{A,N}}\right)
\qquad \text{für } I_C \to \infty
$$

Abbildung 2.29 zeigt den Verlauf von $I_C$ und $I_B$ in halblogarithmischer Auftragung und verdeutlicht die Bedeutung der Parameter $I_{K,N}$ und $I_{S,E}$. Für $I_B$ erhält man bei Vernachlässigung der Sperrströme:

$$
I_B = \frac{I_S}{B_N}\, e^{\frac{U_{BE}}{U_T}} + I_{S,E}\, e^{\frac{U_{BE}}{n_E U_T}}
\qquad\qquad (2.32)
$$

Ein Vergleich der Verläufe in Abb. 2.29 und Abb. 2.6 auf Seite 39 zeigt, dass mit den Parametern $I_{K,N}$, $I_{S,E}$ und $n_E$ eine sehr gute Beschreibung des realen Verhaltens im Normalbetrieb erreicht wird; dasselbe gilt für die Parameter $I_{K,I}$, $I_{S,C}$ und $n_C$ im Inversbetrieb.

---

⁴ Die Großsignalgleichungen im Abschnitt 2.1.2 gelten nur für den Normalbetrieb; deshalb ist eine zusätzliche Kennzeichnung durch den Index $N$ nicht erforderlich.
<!-- page-import:0104:end -->

<!-- page-import:0105:start -->
68  2. Bipolartransistor

#### 2.3.1.4 Stromverstärkung bei Normalbetrieb

Der Verlauf der Stromverstärkung wurde im Abschnitt 2.1.3 bereits qualitativ erläutert und in Abb. 2.7 auf Seite 41 grafisch dargestellt. Mit den Gleichungen (2.31) für $I_C$ und (2.32) für $I_B$ ist eine geschlossene Darstellung möglich:

$$
B=\frac{I_C}{I_B}=\frac{B_N}{q_B+B_N\left(\frac{q_B}{I_S}\right)^{\frac{1}{n_E}} I_{S,E} I_C^{\left(\frac{1}{n_E}-1\right)}}
$$

Es gilt $B = B(U_{BE}, U_{CE})$, da $I_C$ und $q_B$ von $U_{BE}$ und $U_{CE}$ abhängen; damit ist der im Abschnitt 2.1.2 qualitativ angegebene Zusammenhang quantitativ gegeben.

##### 2.3.1.4.1 Verlauf der Stromverstärkung

Die für die Praxis besser geeignete Darstellung $B = B(I_C,U_{CE})$ lässt sich nicht geschlossen darstellen; drei Bereiche lassen sich unterscheiden:

- Bei kleinen Kollektorströmen ist der Leckstrom $I_{B,E}$ die dominierende Komponente im Basisstrom, d.h. es gilt $I_B \approx I_{B,E}$; mit $q_B \approx q_1$ folgt daraus:

$$
B \approx \frac{I_C^{\left(1-\frac{1}{n_E}\right)}}{I_{S,E}\left(\frac{q_1}{I_S}\right)^{\frac{1}{n_E}}}
\sim I_C^{\left(1-\frac{1}{n_E}\right)} \left(1+\frac{U_{CE}}{U_{A,N}}\right)^{\frac{1}{n_E}}
$$

Mit $n_E \approx 1{,}5$ erhält man $B \sim I_C^{1/3}$. In diesem Bereich ist $B$ kleiner als bei mittleren Kollektorströmen und nimmt mit steigendem Kollektorstrom zu. Dieser Bereich wird *Leckstrombereich* genannt.

- Bei mittleren Kollektorströmen gilt $I_B \approx I_{B,N}$ und damit:

$$
B \approx B_N \left(1+\frac{U_{CE}}{U_{A,N}}\right)
$$

(2.33)

In diesem Bereich erreicht $B$ ein Maximum und hängt nur schwach von $I_C$ ab. Dieser Bereich wird *Normalbereich* genannt.

- Bei großen Kollektorströmen setzt der Hochstromeffekt ein; mit $I_B \approx I_{B,N}$ erhält man:

$$
B \approx \frac{B_N}{q_B} \approx B_N \frac{I_{K,N}}{I_C} \left(1+\frac{U_{CE}}{U_{A,N}}\right)^2
$$

In diesem Bereich ist $B$ proportional zum Kehrwert von $I_C$, nimmt also mit steigendem Kollektorstrom schnell ab. Dieser Bereich wird *Hochstrombereich* genannt.

In Abb. 2.30 ist der Verlauf von $B$ doppelt logarithmisch dargestellt; die Näherungen für die drei Bereiche gehen dabei in Geraden mit den Steigungen $1/3$, $0$ und $-1$ über. Die Grenzen der Bereiche sind ebenfalls eingetragen:

Normalbereich $\leftrightarrow$ Leckstrombereich : $(B_N\,I_{S,E})^{\frac{n_E}{n_E-1}} I_S^{\frac{-1}{n_E-1}}$

Normalbereich $\leftrightarrow$ Hochstrombereich : $I_{K,N}$
<!-- page-import:0105:end -->

<!-- page-import:0106:start -->
## 2.3 Modelle für den Bipolartransistor

69

$B$ [log]

$U_{CE}=\mathrm{const}$

$B_N\left(1+\dfrac{U_{CE}}{U_{A,N}}\right)$

$\sim I_C^{\left(1-\frac{1}{n_E}\right)}$

$\sim I_C^{-1}$

$I_C$ [log]

$\dfrac{n_E}{n_E-1}(B_N I_{S,E})^{\frac{n_E}{n_E-1}} I_S^{-\frac{1}{n_E-1}}$

$I_{K,N}$

**Abb. 2.30.** Abhängigkeit der Großsignalstromverstärkung $B$ vom Kollektorstrom

#### 2.3.1.4.2 Maximum der Stromverstärkung

Der Maximalwert von $B$ bei fester Spannung $U_{CE}$ wird mit $B_{max}(U_{CE})$ bezeichnet, siehe Abb. 2.7 auf Seite 41 und (2.8). Bei Transistoren mit kleinem Leckstrom $I_{S,E}$ und großem Kniestrom $I_{K,N}$ ist der Normalbereich so breit, dass der Verlauf von $B$ die horizontale Approximationsgerade (2.33) praktisch tangiert. In diesem Fall ist $B_{max}(U_{CE})$ durch (2.33) und der für $U_{CE}=0$ extrapolierte Maximalwert $B_{0,max}$ durch $B_N$ gegeben. Bei Transistoren mit großem Leckstrom und kleinem Kniestrom kann der Normalbereich dagegen sehr schmal sein oder ganz fehlen. In diesem Fall verläuft $B$ unterhalb der Geraden (2.33), erreicht also nicht deren Wert; es ist dann $B_{0,max}<B_N$.

### 2.3.1.5 Substrat-Dioden

Integrierte Transistoren haben eine Substrat-Diode, die bei vertikalen npn-Transistoren zwischen Substrat und Kollektor und bei lateralen pnp-Transistoren zwischen Substrat und Basis liegt, siehe Abb. 2.22 und Abb. 2.23. Der Strom durch diese Dioden wird durch die einfache Diodengleichung beschrieben; für vertikale npn-Transistoren gilt:

$$
I_{D,S}=I_{S,S}\left(e^{\frac{U_{SC}}{U_T}}-1\right)
$$

(2.34)

Als weiterer Parameter tritt der Substrat-Sättigungssperrstrom $I_{S,S}$ auf. Da diese Dioden normalerweise gesperrt sind, ist eine genauere Modellierung nicht erforderlich; wichtig ist nur, dass bei entsprechender, d.h. falscher Beschaltung des Substrats oder der umgebenden Wanne ein Strom fließen kann. Bei lateralen pnp-Transistoren muss $U_{SC}$ durch $U_{SB}$ ersetzt werden.

### 2.3.1.6 Bahnwiderstände

Zur vollständigen Beschreibung des statischen Verhaltens müssen die Bahnwiderstände berücksichtigt werden. Abbildung 2.31a zeigt diese Widerstände am Beispiel eines Einzeltransistors:

- Der Emitterbahnwiderstand $R_E$ hat wegen der starken Dotierung $(n^+)$ und dem kleinen Längen-/Querschnittsflächen-Verhältnis der Emitterzone einen kleinen Wert; typisch sind $R_E \approx 0{,}1\ldots 1\,\Omega$ bei Kleinleistungstransistoren und $R_E \approx 0{,}01\ldots 0{,}1\,\Omega$ bei Leistungstransistoren.
<!-- page-import:0106:end -->

<!-- page-import:0107:start -->
70 2. Bipolartransistor

a im Transistor  b Berücksichtigung im Modell

**Abb. 2.31.** Bahnwiderstände bei einem Einzeltransistor

– Der Kollektorbahnwiderstand $R_C$ wird im wesentlichen durch den schwach dotierten Teil $(n^-)$ der Kollektorzone hervorgerufen; typische Werte sind $R_C \approx 1 \dots 10\,\Omega$ bei Kleinleistungstransistoren und $R_C \approx 0{,}1 \dots 1\,\Omega$ bei Leistungstransistoren.  
– Der Basisbahnwiderstand $R_B$ setzt sich aus dem externen Basisbahnwiderstand $R_{Be}$ zwischen Basiskontakt und aktiver Basiszone und dem internen Basisbahnwiderstand $R_{Bi}$ quer durch die aktive Basiszone zusammen. $R_{Bi}$ wirkt sich bei größeren Strömen nur zum Teil aus, da sich der Stromfluss aufgrund der Stromverdrängung (Emitterrandverdrängung) auf den Bereich nahe des Basiskontakts konzentriert. Zusätzlich wirkt sich der Early-Effekt aus, der die Dicke der Basiszone beeinflusst. Diese Effekte lassen sich durch die Konstante $q_B$ nach (2.30) beschreiben $^5$:

$$
R_B = R_{Be} + \frac{R_{Bi}}{q_B}
$$

(2.35)

Daraus folgt für den Normalbetrieb:

$$
R_B =
\begin{cases}
R_{Be} + R_{Bi}\left(1 + \dfrac{U_{CE}}{U_{A,N}}\right) & \text{für } I_C < I_{K,N} \\
R_{Be} & \text{für } I_C \to \infty
\end{cases}
$$

Typische Werte sind $R_{Be} \approx 10 \dots 100\,\Omega$ bei Kleinleistungstransistoren und $R_{Be} \approx 1 \dots 10\,\Omega$ bei Leistungstransistoren; $R_{Bi}$ ist um den Faktor $3 \dots 10$ größer.

Abbildung 2.31b zeigt das entsprechend erweiterte Modell. Man muss nun zwischen den externen Anschlüssen B, C und E und den internen Anschlüssen B’, C’ und E’ unterscheiden, d.h. alle Diodenströme und der Transportstrom $I_T$ hängen jetzt nicht mehr von $U_{BE}$, $U_{BC}$ und $U_{SC}$, sondern von $U_{B'E'}$, $U_{B'C'}$ und $U_{SC'}$ ab.

Bei Kleinleistungstransistoren sind die Spannungen an den Bahnwiderständen sehr klein; der Emitter- und der Kollektorbahnwiderstand werden deshalb meist vernachlässigt. Der Basisbahnwiderstand wird nicht vernachlässigt, da er die Schaltgeschwindigkeit und die Grenzfrequenzen auch dann beeinflusst, wenn er einen sehr kleinen Wert hat. Für die

$^5$ Diese Gleichung wird von PSpice standardmäßig verwendet [2.6]; es existiert aber noch eine alternative Darstellung für $R_B$, die hier nicht beschrieben wird [2.4],[2.6].
<!-- page-import:0107:end -->

<!-- page-import:0108:start -->
2.3 Modelle für den Bipolartransistor 71

bei Kleinleistungstransistoren typischen Werte $R_B = 100\,\Omega$ und $I_B = 10\,\mu\text{A}$ beträgt die Spannung an $R_B$ nur $1\,\text{mV}$; die Grenzfrequenzen der meisten Schaltungen werden dagegen deutlich reduziert. Die Berücksichtigung der Arbeitspunktabhängigkeit von $R_B$ in (2.35) ist deshalb nur für die korrekte Wiedergabe des dynamischen Verhaltens erforderlich.

Bei Leistungstransistoren müssen bei größeren Strömen alle Bahnwiderstände berücksichtigt werden; mit $I_B = I_C/B$ und $I_E \approx -I_C$ gilt:

$$
U_{BE} \approx U_{B'E'} + I_C \left(\frac{R_B}{B} + R_E\right)
$$

$$
U_{CE} \approx U_{C'E'} + I_C\,(R_C + R_E)
$$

Die äußeren Spannungen $U_{BE}$ und $U_{CE}$ können sich dabei erheblich von den inneren Spannungen $U_{B'E'}$ und $U_{C'E'}$ unterscheiden. Betreibt man einen Leistungstransistor als Schalter im Sättigungsbetrieb mit $I_C = 5\,\text{A}$ und $B = 10$, dann erhält man mit $U_{B'E'} = 0{,}75\,\text{V}$, $U_{C'E',sat} = 0{,}1\,\text{V}$, $R_B = 1\,\Omega$, $R_E = 0{,}05\,\Omega$ und $R_C = 0{,}3\,\Omega$ die äußeren Spannungen $U_{BE} = 1{,}5\,\text{V}$ und $U_{CE,sat} = 1{,}85\,\text{V}$. Aufgrund der Bahnwiderstände können also vergleichsweise große Werte für $U_{BE}$ und $U_{CE,sat}$ auftreten.

### 2.3.2 Dynamisches Verhalten

Das Verhalten des Transistors bei Ansteuerung mit puls- oder sinusförmigen Signalen wird als dynamisches Verhalten bezeichnet und kann nicht aus den Kennlinien ermittelt werden. Ursache hierfür sind die nichtlinearen Sperrschichtkapazitäten der Emitter-, der Kollektor- und, bei integrierten Transistoren, der Substratdiode und die in der Basiszone gespeicherte Diffusionsladung, die über die ebenfalls nichtlinearen Diffusionskapazitäten beschrieben wird.

#### 2.3.2.1 Sperrschichtkapazitäten

Ein pn-Übergang besitzt eine Sperrschichtkapazität $C_S$, die von der Dotierung der aneinander grenzenden Gebiete, dem Dotierungsprofil, der Fläche des Übergangs und der anliegenden Spannung $U$ abhängt; eine vereinfachte Betrachtung liefert [2.2]:

$$
C_S(U) = \frac{C_{S0}}{\left(1-\frac{U}{U_{Diff}}\right)^{m_S}} \qquad \text{für } U < U_{Diff}
$$

(2.36)

Die Null-Kapazität $C_{S0} = C_S(U = 0\,\text{V})$ ist proportional zur Fläche des Übergangs und nimmt mit steigender Dotierung zu. Die Diffusionsspannung $U_{Diff}$ hängt ebenfalls von der Dotierung ab und nimmt mit dieser zu; es gilt $U_{Diff} \approx 0{,}5 \ldots 1\,\text{V}$. Der Kapazitätskoeffizient $m_S$ berücksichtigt das Dotierungsprofil des Übergangs; für abrupte Übergänge mit einer sprunghaften Änderung der Dotierung gilt $m_S \approx 1/2$, für lineare Übergänge ist $m_S \approx 1/3$.

Die vereinfachenden Annahmen, die auf (2.36) führen, sind für $U \to U_{Diff}$ nicht mehr erfüllt. Eine genauere Berechnung zeigt, dass (2.36) nur bis etwa $0{,}5\,U_{Diff}$ gültig ist; für größere Werte von $U$ nimmt $C_S$ im Vergleich zu (2.36) nur noch schwach zu. Man erhält eine ausreichend genaue Beschreibung, wenn man den Verlauf von $C_S$ für $U > f_S U_{Diff}$ durch die Tangente im Punkt $f_S U_{Diff}$ ersetzt:

$$
C_S(U > f_S U_{Diff}) = C_S(f_S U_{Diff}) + \left.\frac{dC_S}{dU}\right|_{U=f_S U_{Diff}} (U - f_S U_{Diff})
$$

Durch Einsetzen erhält man [2.4]:
<!-- page-import:0108:end -->

<!-- page-import:0109:start -->
72  2. Bipolartransistor

**Abb. 2.32.** Verlauf der Sperrschichtkapazität $C_S$ für $m_S = 1/2$ und $m_S = 1/3$ nach (2.36) (gestrichelt) und (2.37)

$$
C_S(U) = C_{S0}
\begin{cases}
\dfrac{1}{\left(1-\dfrac{U}{U_{Diff}}\right)^{m_S}} & \text{für } U \leq f_S U_{Diff} \\[1.2em]
\dfrac{1-f_S(1+m_S)+\dfrac{m_S U}{U_{Diff}}}{(1-f_S)^{(1+m_S)}} & \text{für } U > f_S U_{Diff}
\end{cases}
\qquad (2.37)
$$

Dabei gilt $f_S \approx 0{,}4 \dots 0{,}7$. Abbildung 2.32 zeigt den Verlauf von $C_S$ für $m_S = 1/2$ und $m_S = 1/3$; der Verlauf nach (2.36) ist ebenfalls dargestellt.

#### 2.3.2.1.1 Sperrschichtkapazitäten beim Bipolartransistor

Entsprechend den pn-Übergängen treten bei Einzeltransistoren zwei, bei integrierten Transistoren drei Sperrschichtkapazitäten auf:

- Die Sperrschichtkapazität $C_{S,E}(U_{B'E'})$ der Emitterdiode mit den Parametern $C_{S0,E}$, $m_{S,E}$ und $U_{Diff,E}$.
- Die Sperrschichtkapazität $C_{S,C}$ der Kollektordiode mit den Parametern $C_{S0,C}$, $m_{S,C}$ und $U_{Diff,C}$. Sie teilt sich in die interne Sperrschichtkapazität $C_{S,Ci}$ der aktiven Zone und die externe Sperrschichtkapazität $C_{S,Ce}$ der Bereiche nahe der Anschlüsse auf. $C_{S,Ci}$ wirkt an der internen Basis B’, $C_{S,Ce}$ an der externen Basis B. Der Parameter $x_{CSC}$ gibt den Anteil von $C_{S,C}$ an, der intern wirkt:

$$
C_{S,Ci}(U_{B'C'}) = x_{CSC}\, C_{S,C}(U_{B'C'}) \qquad (2.38)
$$

$$
C_{S,Ce}(U_{BC'}) = (1-x_{CSC})\, C_{S,C}(U_{BC'}) \qquad (2.39)
$$

Bei Einzeltransistoren ist $C_{S,Ce}$ meist kleiner als $C_{S,Ci}$, d.h. $x_{CSC} \approx 0{,}5 \dots 1$; bei integrierten Transistoren ist $x_{CSC} < 0{,}5$.

- Bei integrierten Transistoren tritt zusätzlich die Sperrschichtkapazität $C_{S,S}$ der Substratdiode mit den Parametern $C_{S0,S}$, $m_{S,S}$ und $U_{Diff,S}$ auf. Sie wirkt bei vertikalen npn-Transistoren am internen Kollektor C’, d.h. $C_{S,S} = C_{S,S}(U_{SC'})$, und bei lateralen pnp-Transistoren an der internen Basis B’, d.h. $C_{S,S} = C_{S,S}(U_{SB'})$.
<!-- page-import:0109:end -->

<!-- page-import:0110:start -->
2.3 Modelle für den Bipolartransistor 73

#### 2.3.2.1.2 Erweiterung des Modells

Abbildung 2.34 auf Seite 75 zeigt die Erweiterung des statischen Modells eines npn-Transistors um die Sperrschichtkapazitäten $C_{S,E}$, $C_{S,Ci}$, $C_{S,Ce}$ und $C_{S,S}$; zusätzlich sind die im nächsten Abschnitt beschriebenen Diffusionskapazitäten $C_{D,N}$ und $C_{D,I}$ dargestellt.

#### 2.3.2.2 Diffusionskapazitäten

In einem pn-Übergang ist eine *Diffusionsladung* $Q_D$ gespeichert, die in erster Näherung proportional zum idealen Strom durch den pn-Übergang ist. Beim Transistor ist $Q_{D,N}$ die Diffusionsladung der Emitter-Diode und $Q_{D,I}$ die der Kollektor-Diode; beide werden auf den jeweiligen Anteil des idealen Transportstroms $I_T$ nach (2.26) bezogen, d.h. auf $B_N I_{B,N}$ bzw. $B_I I_{B,I}$ [2.5]:

$$
Q_{D,N} = \tau_N B_N I_{B,N} = \tau_N I_S \left(e^{\frac{U_{B'E'}}{U_T}} - 1\right)
$$

$$
Q_{D,I} = \tau_I B_I I_{B,I} = \tau_I I_S \left(e^{\frac{U_{B'C'}}{U_T}} - 1\right)
$$

Die Parameter $\tau_N$ und $\tau_I$ werden *Transit-Zeiten* genannt. Durch Differentiation erhält man die *Diffusionskapazitäten* $C_{D,N}$ und $C_{D,I}$ [2.5]:

$$
C_{D,N}(U_{B'E'}) = \frac{d\,Q_{D,N}}{d\,U_{B'E'}} = \frac{\tau_N I_S}{U_T} e^{\frac{U_{B'E'}}{U_T}}
$$

(2.40)

$$
C_{D,I}(U_{B'C'}) = \frac{d\,Q_{D,I}}{d\,U_{B'C'}} = \frac{\tau_I I_S}{U_T} e^{\frac{U_{B'C'}}{U_T}}
$$

(2.41)

Abbildung 2.34 zeigt das Modell mit den Kapazitäten $C_{D,N}$ und $C_{D,I}$.

##### 2.3.2.2.1 Normalbetrieb

Die Diffusionskapazitäten $C_{D,N}$ und $C_{D,I}$ liegen parallel zu den Sperrschichtkapazitäten $C_{S,E}$ und $C_{S,Ci}$, siehe Abb. 2.34. Im Normalbetrieb ist die Kollektor-Diffusionskapazität $C_{D,I}$ wegen $U_{B'C'} < 0$ sehr klein und kann gegen die parallel liegende Kollektor-Sperrschichtkapazität $C_{S,Ci}$ vernachlässigt werden; deshalb kann man $C_{D,I}$ mit einer konstanten Transit-Zeit $\tau_I = \tau_{0,I}$ beschreiben. Die Emitter-Diffusionskapazität $C_{D,N}$ ist bei kleinen Strömen kleiner als die Emitter-Sperrschichtkapazität $C_{S,E}$, bei großen Strömen dagegen größer. Hier ist zur korrekten Wiedergabe des dynamischen Verhaltens bei großen Strömen eine genauere Modellierung für $\tau_N$ erforderlich.

##### 2.3.2.2.2 Stromabhängigkeit der Transit-Zeit

Bei großen Strömen nimmt die Diffusionsladung aufgrund des Hochstromeffekts überproportional zu. Die Transit-Zeit $\tau_N$ ist in diesem Bereich nicht mehr konstant, sondern nimmt mit steigendem Strom zu. Auch der Early-Effekt wirkt sich aus, da er die effektive Dicke der Basiszone und damit die gespeicherte Ladung beeinflusst. Mit den bereits eingeführten Parametern $I_{K,N}$ für den Hochstromeffekt und $U_{A,N}$ für den Early-Effekt ist jedoch keine befriedigende Beschreibung möglich; deshalb wird eine empirische Gleichung verwendet [2.6]:
<!-- page-import:0110:end -->

<!-- page-import:0111:start -->
74  2. Bipolartransistor

**Abb. 2.33.** Verlauf von $\tau_N/\tau_{0,N}$ für $x_{\tau,N}=40$ und $U_{\tau,N}=10\,\mathrm{V}$

$$
\tau_N=\tau_{0,N}\left(1+x_{\tau,N}\left(3x^2-2x^3\right)2^{\frac{U_{B'C'}}{U_{\tau,N}}}\right)
$$

mit

$$
x=\frac{B_N I_{B,N}}{B_N I_{B,N}+I_{\tau,N}}
=\frac{I_S\left(e^{\frac{U_{B'E'}}{U_T}}-1\right)}{I_S\left(e^{\frac{U_{B'E'}}{U_T}}-1\right)+I_{\tau,N}}
\qquad\qquad (2.42)
$$

Als neue Modellparameter treten die *ideale Transit-Zeit* $\tau_{0,N}$, der *Koeffizient für die Transit-Zeit* $x_{\tau,N}$, der *Transit-Zeit-Kniestrom* $I_{\tau,N}$ und die *Transit-Zeit-Spannung* $U_{\tau,N}$ auf. Der Koeffizient $x_{\tau,N}$ gibt an, wie stark $\tau_N$ für $U_{B'C'}=0$ maximal zunimmt:

$$
\lim_{I_{B,N}\to\infty}\tau_N\big|_{U_{B'C'}=0}
=\tau_{0,N}(1+x_{\tau,N})
$$

Für $B_N I_{B,N}=I_{\tau,N}$ wird die Hälfte der maximalen Zunahme erreicht:

$$
\tau_N\big|_{B_N I_{B,N}=I_{\tau,N},\,U_{B'C'}=0}
=\tau_{0,N}\left(1+\frac{x_{\tau,N}}{2}\right)
$$

Bei einer Abnahme von $U_{B'C'}$ um die Spannung $U_{\tau,N}$ ist die Zunahme nur noch halb so groß; für $U_{B'C'}=-n\,U_{\tau,N}$ ist sie um den Faktor $2^n$ kleiner. Zur Verdeutlichung zeigt Abb. 2.33 den Verlauf von $\tau_N/\tau_{0,N}$ für $x_{\tau,N}=40$ und $U_{\tau,N}=10\,\mathrm{V}$.

Die Zunahme von $\tau_N$ bei großen Strömen hat eine Abnahme der Grenzfrequenzen und der Schaltgeschwindigkeit des Transistors zur Folge; diese Auswirkungen werden im Abschnitt 2.3.3.3 behandelt.

### 2.3.2.3 Gummel-Poon-Modell

Abbildung 2.34 zeigt das vollständige Modell eines npn-Transistors; es wird *Gummel-Poon-Modell* genannt und in CAD-Programmen zur Schaltungssimulation verwendet. Abbildung 2.35 gibt einen Überblick über die Größen und die Gleichungen des Modells. Die
<!-- page-import:0111:end -->

<!-- page-import:0112:start -->
## 2.3 Modelle für den Bipolartransistor 75

Abb. 2.34. Vollständiges *Gummel-Poon-Modell* eines npn-Transistors

Parameter sind in Abb. 2.36 aufgelistet; zusätzlich sind die Bezeichnungen der Parameter im Schaltungssimulator *PSpice* 6 angegeben, die mit Ausnahme des Basisbahnwiderstands mit den hier verwendeten Bezeichnungen übereinstimmen, wenn man die folgenden Ersetzungen vornimmt:

Spannung $\to$ voltage        : U $\to$ V  
Normalbetrieb $\to$ forward region : N $\to$ F  
Inversbetrieb $\to$ reverse region : I $\to$ R  
Sperrschicht $\to$ junction     : S $\to$ J

Abbildung 2.37 zeigt die Parameter einiger ausgewählter Transistoren, die der Bauteile-Bibliothek von *PSpice* entnommen wurden; dort sind nur die Parameter für den Nor-

| Größe | Bezeichnung | Gleichung |
|---|---|---|
| $I_{B,N}$ | idealer Basisstrom der Emitter-Diode | (2.24) |
| $I_{B,I}$ | idealer Basisstrom der Kollektor-Diode | (2.25) |
| $I_{B,E}$ | Basis-Leckstrom der Emitter-Diode | (2.27) |
| $I_{B,C}$ | Basis-Leckstrom der Kollektor-Diode | (2.28) |
| $I_T$ | Kollektor-Emitter-Transportstrom | (2.29),(2.30) |
| $I_{D,S}$ | Strom der Substrat-Diode | (2.34) |
| $R_B$ | Basisbahnwiderstand | (2.35) |
| $R_C$ | Kollektorbahnwiderstand |  |
| $R_E$ | Emitterbahnwiderstand |  |
| $C_{S,E}$ | Sperrschichtkapazität der Emitter-Diode | (2.37) |
| $C_{S,Ci}$ | interne Sperrschichtkapazität der Kollektor-Diode | (2.37),(2.38) |
| $C_{S,Ce}$ | externe Sperrschichtkapazität der Kollektor-Diode | (2.37),(2.39) |
| $C_{S,S}$ | Sperrschichtkapazität der Substrat-Diode | (2.37) |
| $C_{D,N}$ | Diffusionskapazität der Emitter-Diode | (2.40),(2.42) |
| $C_{D,I}$ | Diffusionskapazität der Kollektor-Diode | (2.41) |

Abb. 2.35. Größen des Gummel-Poon-Modells
<!-- page-import:0112:end -->

<!-- page-import:0113:start -->
76 2. Bipolartransistor

| Parameter | PSpice | Bezeichnung |
|---|---|---|
| *Statisches Verhalten* |||
| $I_S$ | IS | Sättigungssperrstrom |
| $I_{S,S}$ | ISS | Sättigungssperrstrom der Substrat-Diode |
| $B_N$ | BF | ideale Stromverstärkung für Normalbetrieb |
| $B_I$ | BR | ideale Stromverstärkung für Inversbetrieb |
| $I_{S,E}$ | ISE | Leck-Sättigungssperrstrom der Emitter-Diode |
| $n_E$ | NE | Emissionskoeffizient der Emitter-Diode |
| $I_{S,C}$ | ISC | Leck-Sättigungssperrstrom der Kollektor-Diode |
| $n_C$ | NC | Emissionskoeffizient der Kollektor-Diode |
| $I_{K,N}$ | IKF | Kniestrom zur starken Injektion für Normalbetrieb |
| $I_{K,I}$ | IKR | Kniestrom zur starken Injektion für Inversbetrieb |
| $U_{A,N}$ | VAF | Early-Spannung für Normalbetrieb |
| $U_{A,I}$ | VAR | Early-Spannung für Inversbetrieb |
| $R_{Be}$ | RBM | externer Basisbahnwiderstand |
| $R_{Bi}$ | - | interner Basisbahnwiderstand ($R_{Bi}$ = RB − RBM) |
| - | RB | Basisbahnwiderstand (RB = $R_{Be}$ + $R_{Bi}$) |
| $R_C$ | RC | Kollektorbahnwiderstand |
| $R_E$ | RE | Emitterbahnwiderstand |
| *Dynamisches Verhalten* |||
| $C_{S0,E}$ | CJE | Null-Kapazität der Emitter-Diode |
| $U_{Diff,E}$ | VJE | Diffusionsspannung der Emitter-Diode |
| $m_{S,E}$ | MJE | Kapazitätskoeffizient der Emitter-Diode |
| $C_{S0,C}$ | CJC | Null-Kapazität der Kollektor-Diode |
| $U_{Diff,C}$ | VJC | Diffusionsspannung der Kollektor-Diode |
| $m_{S,C}$ | MJC | Kapazitätskoeffizient der Kollektor-Diode |
| $x_{CSC}$ | XCJC | Aufteilung der Kapazität der Kollektor-Diode |
| $C_{S0,S}$ | CJS | Null-Kapazität der Substrat-Diode |
| $U_{Diff,S}$ | VJS | Diffusionsspannung der Substrat-Diode |
| $m_{S,S}$ | MJS | Kapazitätskoeffizient der Substrat-Diode |
| $f_S$ | FC | Koeffizient für den Verlauf der Kapazitäten |
| $\tau_{0,N}$ | TF | ideale Transit-Zeit für Normalbetrieb |
| $x_{\tau,N}$ | XTF | Koeffizient für die Transit-Zeit für Normalbetrieb |
| $U_{\tau,N}$ | VTF | Transit-Zeit-Spannung für Normalbetrieb |
| $I_{\tau,N}$ | ITF | Transit-Zeit-Strom für Normalbetrieb |
| $\tau_{0,I}$ | TR | Transit-Zeit für Inversbetrieb |
| *Thermisches Verhalten* |||
| $x_{T,I}$ | XTI | Temperaturkoeffizient der Sperrströme (2.20) |
| $x_{T,B}$ | XTB | Temperaturkoeffizient der Stromverstärkungen (2.22) |

**Abb. 2.36.** Parameter des Gummel-Poon-Modells

malbetrieb angegeben. Nicht angegebene Parameter werden von *PSpice* unterschiedlich behandelt:

– es wird ein Standardwert verwendet:  
$ I_S = 10^{-16}\ \mathrm{A},\ B_N = 100,\ B_I = 1,\ n_E = 1{,}5,\ n_C = 2,\ x_{T,I} = 3,\ f_S = 0{,}5$  
$U_{Diff,E} = U_{Diff,C} = U_{Diff,S} = 0{,}75\ \mathrm{V}\ , m_{S,E} = m_{S,C} = 0{,}333\ , x_{CSC} = 1$

6 *PSpice* ist ein Produkt der Firma *MicroSim*.
<!-- page-import:0113:end -->

<!-- page-import:0114:start -->
2.3 Modelle für den Bipolartransistor 77

| Parameter | PSpice | BC547B | BC557B | BUV47 | BFR92P | Einheit |
|---|---|---:|---:|---:|---:|---|
| $I_S$ | IS | 7 | 1 | 974 | 0,12 | fA |
| $B_N$ | BF | 375 | 307 | 95 | 95 |  |
| $B_I$ | BR | 1 | 6,5 | 20,9 | 10,7 |  |
| $I_{S,E}$ | ISE | 68 | 10,7 | 2570 | 130 | fA |
| $n_E$ | NE | 1,58 | 1,76 | 1,2 | 1,9 |  |
| $I_{K,N}$ | IKF | 0,082 | 0,092 | 15,7 | 0,46 | A |
| $U_{A,N}$ | VAF | 63 | 52 | 100 | 30 | V |
| $R_{Be}$ 7 | RBM | 10 | 10 | 0,1 | 6,2 | $\Omega$ |
| $R_{Bi}$ 7 | - | 0 | 0 | 0 | 7,8 | $\Omega$ |
| - 7 | RB | 10 | 10 | 0,1 | 15 | $\Omega$ |
| $R_C$ | RC | 1 | 1,1 | 0,035 | 0,14 | $\Omega$ |
| $C_{S0,E}$ | CJE | 11,5 | 30 | 1093 | 0,01 | pF |
| $U_{Diff,E}$ | VJE | 0,5 | 0,5 | 0,5 | 0,71 | V |
| $m_{S,E}$ | MJE | 0,672 | 0,333 | 0,333 | 0,347 |  |
| $C_{S0,C}$ | CJC | 5,25 | 9,8 | 364 | 0,946 | pF |
| $U_{Diff,C}$ | VJC | 0,57 | 0,49 | 0,5 | 0,85 | V |
| $m_{S,C}$ | MJC | 0,315 | 0,332 | 0,333 | 0,401 |  |
| $x_{CSC}$ | XCJC | 1 | 1 | 1 | 0,13 |  |
| $f_S$ | FC | 0,5 | 0,5 | 0,5 | 0,5 |  |
| $\tau_{0,N}$ | TF | 0,41 | 0,612 | 21,5 | 0,027 | ns |
| $x_{\tau,N}$ | XTF | 40 | 26 | 205 | 0,38 |  |
| $U_{\tau,N}$ | VTF | 10 | 10 | 10 | 0,33 | V |
| $I_{\tau,N}$ | ITF | 1,49 | 1,37 | 100 | 0,004 | A |
| $\tau_{0,I}$ | TR | 10 | 10 | 988 | 1,27 | ns |
| $x_{T,I}$ | XTI | 3 | 3 | 3 | 3 |  |
| $x_{T,B}$ | XTB | 1,5 | 1,5 | 1,5 | 1,5 |  |

BC547B: npn-Kleinleistungstransistor  
BC557B: pnp-Kleinleistungstransistor  
BUV47: npn-Leistungstransistor  
BFR92P: npn-Hochfrequenztransistor

**Abb. 2.37.** Parameter einiger Einzeltransistoren

– der Parameter wird zu Null gesetzt:  
$I_{S,S}$, $I_{S,E}$, $I_{S,C}$, $R_B$, $R_C$, $R_E$, $C_{S0,E}$, $C_{S0,C}$, $C_{S0,S}$, $m_{S,S}$, $\tau_{0,N}$, $x_{\tau,N}$  
$I_{\tau,N}$, $\tau_{0,I}$, $x_{T,B}$

– der Parameter wird zu Unendlich gesetzt:  
$I_{K,N}$, $I_{K,I}$, $U_{A,N}$, $U_{A,I}$, $U_{\tau,N}$

Die Werte Null und Unendlich bewirken, dass der jeweilige Effekt nicht modelliert wird [2.6].

In *PSpice* wird eine erweiterte Form des Gummel-Poon-Modells verwendet, die die Modellierung weiterer Effekte ermöglicht, siehe [2.6]; auf diese Effekte und die zusätzlichen Parameter wird hier nicht eingegangen.

7 Die Basisbahnwiderstände sind mit Ausnahme des BFR92P nur pauschal angegeben, der stromabhängige interne Anteil ist nicht spezifiziert. Es treten deshalb Ungenauigkeiten bei hohen Frequenzen auf. Genauere Werte kann man aus den Angaben zum Rauschen gewinnen, siehe Abschnitt 2.3.4.
<!-- page-import:0114:end -->

<!-- page-import:0115:start -->
78  2. Bipolartransistor

### 2.3.3 Kleinsignalmodell

Durch Linearisierung in einem Arbeitspunkt erhält man aus dem nichtlinearen Gummel-Poon-Modell ein lineares Kleinsignalmodell. Der Arbeitspunkt wird in der Praxis so gewählt, dass der Transistor im Normalbetrieb arbeitet; die hier behandelten Kleinsignalmodelle sind deshalb nur für diese Betriebsart gültig. Man kann in gleicher Weise auch Kleinsignalmodelle für die anderen Betriebsarten angeben, sie sind jedoch von untergeordneter Bedeutung.

Das statische Kleinsignalmodell beschreibt das Kleinsignalverhalten bei niedrigen Frequenzen und wird deshalb auch Gleichstrom-Kleinsignalersatzschaltbild genannt. Das dynamische Kleinsignalmodell beschreibt zusätzlich das dynamische Kleinsignalverhalten und wird zur Berechnung des Frequenzgangs von Schaltungen benötigt; es wird auch Wechselstrom-Kleinsignalersatzschaltbild genannt.

#### 2.3.3.1 Statisches Kleinsignalmodell

##### 2.3.3.1.1 Linearisierung und Kleinsignalparameter des Gummel-Poon-Modells

Ein genaues Kleinsignalmodell erhält man durch Linearisierung des Gummel-Poon-Modells. Aus Abb. 2.34 folgt durch Weglassen der Kapazitäten und Vernachlässigung der Sperrströme $(I_{B,I} = I_{B,C} = I_{D,S} = 0)$ das in Abb. 2.38a gezeigte statische Gummel-Poon-Modell für den Normalbetrieb. Die nichtlinearen Größen $I_B = I_{B,N}(U_{B'E'}) + I_{B,E}(U_{B'E'})$ und $I_C = I_T(U_{B'E'}, U_{C'E'})$ werden im Arbeitspunkt A linearisiert:

$$
S = \left.\frac{\partial I_C}{\partial U_{B'E'}}\right|_A
= \frac{I_{C,A}}{U_T}\left(1 - \frac{U_T}{q_B}\left.\frac{\partial q_B}{\partial U_{B'E'}}\right|_A\right)
$$

$$
\frac{1}{r_{BE}} = \left.\frac{\partial I_B}{\partial U_{B'E'}}\right|_A
= \frac{I_S}{B_N U_T} e^{\frac{U_{B'E',A}}{U_T}}
+ \frac{I_{S,E}}{n_E U_T} e^{\frac{U_{B'E',A}}{n_E U_T}}
$$

$$
\frac{1}{r_{CE}} = \left.\frac{\partial I_C}{\partial U_{C'E'}}\right|_A
= \frac{I_{C,A}}{U_{A,N} + U_{C'E',A} - U_{B'E',A}\left(1 + \frac{U_{A,N}}{U_{A,I}}\right)}
$$

##### 2.3.3.1.2 Näherungen für die Kleinsignalparameter

Die Kleinsignalparameter $S$, $r_{BE}$ und $r_{CE}$ werden nur in CAD-Programmen nach den obigen Gleichungen ermittelt; für den praktischen Gebrauch werden Näherungen oder andere Zusammenhänge verwendet:

$$
S = \left.\frac{\partial I_C}{\partial U_{B'E'}}\right|_A
\approx \frac{I_{C,A}}{U_T}\,\frac{I_{K,N} + I_{C,A}}{I_{K,N} + 2I_{C,A}}
\quad \overset{I_{C,A} \ll I_{K,N}}{\approx} \quad
\frac{I_{C,A}}{U_T}
$$

$$
r_{BE} = \left.\frac{\partial U_{B'E'}}{\partial I_B}\right|_A
= \left.\frac{\partial U_{B'E'}}{\partial I_C}\right|_A
\left.\frac{\partial I_C}{\partial I_B}\right|_A
= \frac{\beta}{S}
$$

$$
r_{CE} = \left.\frac{\partial U_{C'E'}}{\partial I_C}\right|_A
\approx \frac{U_{A,N} + U_{C'E',A}}{I_{C,A}}
\quad \overset{U_{C'E',A} \ll U_{A,N}}{\approx} \quad
\frac{U_{A,N}}{I_{C,A}}
$$
<!-- page-import:0115:end -->

<!-- page-import:0116:start -->
## 2.3 Modelle für den Bipolartransistor

79

a vor der Linearisierung

b nach der Linearisierung

**Abb. 2.38.** Ermittlung des statischen Kleinsignalmodells durch Linearisierung des statischen Gummel-Poon-Modells

Die Näherungen für $r_{BE}$ und $r_{CE}$ entsprechen den bereits im Abschnitt 2.1.4 angegebenen Gleichungen (2.12) und (2.13). Zur Bestimmung von $r_{BE}$ muss die Kleinsignalstromverstärkung $\beta$ bekannt sein oder ein sinnvoller Wert angenommen werden.

Die Gleichung für die Steilheit $S$ erhält man durch näherungsweise Auswertung des vollständigen Ausdrucks; sie ist gegenüber (2.11) um einen Term zur Beschreibung des Hochstromeffekts erweitert. Der Hochstromeffekt bewirkt eine relative Abnahme von $S$ bei großen Kollektorströmen, für $I_{C,A} = I_{K,N}$ auf $2/3$, für $I_{C,A} \to \infty$ auf die Hälfte des Wertes $I_{C,A}/U_T$. Soll die Abnahme kleiner als 10 % sein, muss man $I_{C,A} < I_{K,N}/8$ wählen.

### 2.3.3.1.3 Gleichstrom-Kleinsignalersatzschaltbild

Abbildung 2.38b zeigt das resultierende *statische Kleinsignalmodell*. Für fast alle praktischen Berechnungen werden die Bahnwiderstände $R_B$, $R_C$ und $R_E$ vernachlässigt; man erhält dann das bereits im Abschnitt 2.1.4 behandelte Kleinsignalersatzschaltbild, das in Abb. 2.39a noch einmal wiedergegeben ist.

Vernachlässigt man zusätzlich den Early-Effekt ($r_{CE} \to \infty$), kann man neben dem entsprechend reduzierten Ersatzschaltbild nach Abb. 2.39a auch die in Abb. 2.39b gezeigte alternative Form verwenden; dabei gilt:

a nach Vernachlässigung der Bahnwiderstände

b alternative Darstellung nach Vernachlässigung des Early-Effekts ($r_{CE} \to \infty$)

**Abb. 2.39.** Vereinfachte statische Kleinsignalmodelle
<!-- page-import:0116:end -->

<!-- page-import:0118:start -->
## 2.3 Modelle für den Bipolartransistor 81

**Abb. 2.41.** Vereinfachtes dynamisches Kleinsignalmodell

in Ausnahmefällen vernachlässigt werden. Zusätzlich werden die interne und die externe Kollektorkapazität zu einer internen *Kollektorkapazität* $C_C$ zusammengefasst; nur bei integrierten Transistoren mit überwiegendem externen Anteil wird sie extern angeschlossen. Man erhält das in Abb. 2.41 gezeigte vereinfachte dynamische Kleinsignalmodell, das für die im folgenden durchgeführten Berechnungen verwendet wird. Auf die *praktische* Bestimmung der Kapazitäten $C_E$ und $C_C$ wird im nächsten Abschnitt näher eingegangen.

#### 2.3.3.3 Grenzfrequenzen bei Kleinsignalbetrieb

Mit Hilfe des Kleinsignalmodells aus Abb. 2.41 kann man die Frequenzgänge der Kleinsignalstromverstärkungen $\alpha$ und $\beta$ und der Transadmittanz $y_{21,e}$ berechnen; die dabei anfallenden Grenzfrequenzen $f_\alpha$, $f_\beta$ und $f_{y21e}$ und die *Transitfrequenz* $f_T$ sind ein Maß für die Bandbreite und die Schaltgeschwindigkeit des Transistors.

##### 2.3.3.3.1 Frequenzgang der Kleinsignalstromverstärkung in Emitterschaltung

Das Verhältnis der Laplacetransformierten der Kleinsignalströme $i_C$ und $i_B$ in Emitterschaltung bei Normalbetrieb und konstantem $U_{CE} = U_{CE,A}$ wird *Übertragungsfunktion der Kleinsignalstromverstärkung* $\beta$ genannt und mit $\underline{\beta}(s)$ bezeichnet:

$$
\underline{\beta}(s)=\frac{\underline{i_C}}{\underline{i_B}}=\frac{\mathcal{L}\{i_C\}}{\mathcal{L}\{i_B\}}
$$

Durch Einsetzen von $s = j\omega$ erhält man aus $\underline{\beta}(s)$ den Frequenzgang $\underline{\beta}(j\omega)$ und daraus durch Betragsbildung den Betragsfrequenzgang $|\underline{\beta}(j\omega)|$.

Zur Ermittlung von $\underline{\beta}(s)$ wird eine Kleinsignalstromquelle mit dem Strom $i_B$ an die Basis angeschlossen und $i_C$ ermittelt. Abbildung 2.42 zeigt das zugehörige Kleinsignalersatzschaltbild; der Kollektor ist wegen $u_{CE} = U_{CE} - U_{CE,A} = 0$ mit Masse verbunden. Aus den Knotengleichungen

$$
\underline{i_B}=\left(\frac{1}{r_{BE}}+s\,(C_E+C_C)\right)\underline{u_{B'E}}
$$

**Abb. 2.42.** Kleinsignalersatzschaltbild zur Berechnung von $\underline{\beta}(s)$
<!-- page-import:0118:end -->

<!-- page-import:0120:start -->
## 2.3 Modelle für den Bipolartransistor

83

**Abb. 2.44.** Abhängigkeit der Transitfrequenz vom Kollektorstrom $I_{C,A}$

Die Transitfrequenz hängt vom Arbeitspunkt ab; außerhalb des Hochstrombereichs gilt:

$$
S \;=\; \frac{I_{C,A}}{U_T}
,\quad
C_E \;=\; \frac{\tau_N I_{C,A}}{U_T} + C_{S,E}
,\quad
C_C \;=\; C_{S,C}
$$

Daraus folgt [2.7]:

$$
\omega_T \;\approx\; \frac{1}{\tau_N + \frac{I_{C,A}}{U_T}\,(C_{S,E}+C_{S,C})}
$$

Abbildung 2.44 zeigt die Abhängigkeit der Transitfrequenz vom Kollektorstrom $I_{C,A}$; drei Bereiche lassen sich unterscheiden:

– Bei kleinen Kollektorströmen gilt:

$$
\omega_T \;\approx\; \frac{I_{C,A}}{U_T\,(C_{S,E}+C_{S,C})}
\;\sim\; I_{C,A}
\qquad \text{für } I_{C,A} < \frac{U_T}{\tau_{0,N}}\,(C_{S,E}+C_{S,C})
$$

In diesem Bereich ist $f_T$ näherungsweise proportional zu $I_{C,A}$.

– Bei mittleren Kollektorströmen unterhalb des Hochstrombereichs gilt:

$$
\omega_T \;\approx\; \frac{1}{\tau_N} \;\approx\; \frac{1}{\tau_{0,N}}
\qquad \text{für } \frac{U_T}{\tau_{0,N}}\,(C_{S,E}+C_{S,C}) < I_{C,A} \ll I_{t,N}
$$

Hier erreicht $f_T$ ein Maximum und hängt nur wenig von $I_{C,A}$ ab.

– Im Hochstrombereich gilt ebenfalls $\omega_T \approx 1/\tau_N$, allerdings nimmt dort $\tau_N$ nach (2.42) zu, so dass $f_T$ mit zunehmendem $I_{C,A}$ abnimmt.

#### 2.3.3.3 Frequenzgang der Kleinsignalstromverstärkung in Basisschaltung

Das Verhältnis der Laplacetransformierten der Kleinsignalströme $i_C$ und $i_E$ in Basisschaltung bei Normalbetrieb und konstantem $U_{BC} = U_{BC,A}$ wird *Übertragungsfunktion der Kleinsignalstromverstärkung* $\alpha$ genannt und mit $\underline{\alpha}(s)$ bezeichnet. Zur Ermittlung von $\underline{\alpha}(s)$
<!-- page-import:0120:end -->

<!-- page-import:0122:start -->
2.3 Modelle für den Bipolartransistor 85

Innenwiderstand $R_i \ll r_{BE}$ spricht man von Spannungssteuerung; in diesem Fall wird die Grenzfrequenz der Schaltung durch die Steilheitsgrenzfrequenz $f_{Y21e}$ nach oben begrenzt. Man erreicht also bei Spannungssteuerung im allgemeinen eine höhere Bandbreite, siehe Abschnitt 2.4.1; dies gilt in gleicher Weise für die Kollektorschaltung, siehe Abschnitt 2.4.2.

Die größte Bandbreite erreicht die Basisschaltung; hier gilt im allgemeinen $R_i > r_E$, so dass Stromsteuerung vorliegt und die Bandbreite der Schaltung durch die $\alpha$-Grenzfrequenz $f_\alpha$ nach oben begrenzt wird, siehe Abschnitt 2.4.3.

#### 2.3.3.6 Wahl des Arbeitspunktes

Die Bandbreite einer Schaltung hängt auch vom Arbeitspunkt des Transistors ab. Bei der Emitterschaltung mit Stromsteuerung und bei der Basisschaltung erreicht man die maximale Bandbreite, indem man den Kollektorstrom $I_{C,A}$ so wählt, dass die Transitfrequenz $f_T$ maximal wird. Bei der Emitterschaltung mit Spannungssteuerung sind die Verhältnisse komplizierter; zwar nimmt die Steilheitsgrenzfrequenz $f_{Y21e}$ mit steigendem $I_{C,A}$ ab, gleichzeitig kann aber bei gleicher Verstärkung der Schaltung die Kollektorbeschaltung niederohmiger ausfallen und damit die ausgangsseitige Bandbreite erhöht werden, siehe Abschnitt 2.4.1.

#### 2.3.3.7 Bestimmung der Kleinsignalkapazitäten

Im Datenblatt eines Transistors ist die Transitfrequenz $f_T$ und die Ausgangskapazität in Basisschaltung $C_{obo}$ (output, grounded base, open emitter) angegeben; $C_{obo}$ entspricht der Kollektor-Basis-Kapazität. Aus diesen Angaben erhält man unter Verwendung von (2.45):

$$
C_C \approx C_{obo} \, , \quad C_E \approx \frac{S}{\omega_T} - C_{obo}
$$

### 2.3.3.4 Zusammenfassung der Kleinsignalparameter

Aus dem Kollektorstrom $I_{C,A}$ im Arbeitspunkt und Datenblattangaben kann man die Parameter des in Abb. 2.41 gezeigten Kleinsignalmodells gemäß Abb. 2.45 bestimmen.

## 2.3.4 Rauschen

In Widerständen und pn-Übergängen treten Rauschspannungen bzw. Rauschströme auf, die bei Widerständen auf die thermische Bewegung der Ladungsträger und bei pn-Übergängen auf den unstetigen Stromfluss aufgrund des Durchtritts einzelner Ladungsträger zurückzuführen sind.

### 2.3.4.1 Rauschdichten

Da es sich beim Rauschen um einen stochastischen Vorgang handelt, kann man nicht wie gewohnt mit Spannungen und Strömen rechnen. Eine Rauschspannung $u_r$ wird durch die Rauschspannungsdichte $|\underline{u_r}(f)|^2$, ein Rauschstrom $i_r$ durch die Rauschstromdichte $|\underline{i_r}(f)|^2$ beschrieben; die Dichten geben die spektrale Verteilung der Effektivwerte $u_{reff}$ bzw. $i_{reff}$ an:

$$
|\underline{u_r}(f)|^2 = \frac{d(u_{reff}^2)}{df}
$$

$$
|\underline{i_r}(f)|^2 = \frac{d(i_{reff}^2)}{df}
$$
<!-- page-import:0122:end -->

<!-- page-import:0123:start -->
86  2. Bipolartransistor

| Param. | Bezeichnung | Bestimmung |
|---|---|---|
| $S$ | Steilheit | $S=\dfrac{I_{C,A}}{U_T}$ mit $U_T \approx 26\,\mathrm{mV}$ bei $T=300\,\mathrm{K}$ |
| $(\beta)$ | Kleinsignalstrom-verstärkung | direkt aus dem Datenblatt oder indirekt aus dem Datenblatt unter Verwendung von $\beta \approx B$ oder sinnvolle Annahme $(\beta \approx 50\ldots 500)$ |
| $r_{BE}$ | Kleinsignalein-gangswiderstand | $r_{BE}=\dfrac{\beta}{S}$ |
| $R_B$ | Basisbahn-widerstand | sinnvolle Annahme $(R_B \approx 10\ldots 1000\,\Omega)$ oder aus optimaler Rauschzahl nach Abschnitt 2.3.4.6 |
| $(U_A)$ | Early-Spannung | aus der Steigung der Kennlinien im Ausgangskennlinienfeld oder sinnvolle Annahme $(U_A \approx 30\ldots 150\,\mathrm{V})$ |
| $r_{CE}$ | Kleinsignalaus-gangswiderstand | $r_{CE}=\dfrac{U_A}{I_{C,A}}$ |
| $(f_T)$ | Transitfrequenz | aus dem Datenblatt |
| $C_C$ | Kollektor-kapazität | aus dem Datenblatt (z.B. $C_{obo}$) |
| $C_E$ | Emitterkapazität | $C_E=\dfrac{S}{2\pi\, f_T}-C_C$ |

**Abb. 2.45.** Kleinsignalparameter (Hilfsgrößen in Klammern)

Durch Integration kann man aus den Rauschdichten die Effektivwerte bestimmen [2.9]:

$$
u_{r\mathrm{eff}}=\sqrt{\int_0^\infty |\underline{u_r}(f)|^2\,df}
$$

$$
i_{r\mathrm{eff}}=\sqrt{\int_0^\infty |\underline{i_r}(f)|^2\,df}
$$

Ist die Rauschdichte eines Rauschsignals konstant, spricht man von weißem Rauschen. Ein Rauschsignal kann nur in einem bestimmten Bereich weiß sein; speziell für $f \rightarrow \infty$ muss die Rauschdichte derart gegen Null gehen, dass die Integrale endlich bleiben.

#### 2.3.4.1.1 Rauschen eines Widerstands

Ein Widerstand $R$ erzeugt eine Rauschspannung $u_{R,r}$ mit der Rauschspannungsdichte [2.9]:

$$
|\underline{u_{R,r}}(f)|^2=4kTR
$$

(2.49)

Dabei ist $k=1{,}38 \cdot 10^{-23}\,\mathrm{VAs/K}$ die Boltzmannkonstante und $T$ die Temperatur des Widerstands in Kelvin. Dieses Rauschen wird thermisches Rauschen genannt, da es auf die thermische Bewegung der Ladungsträger zurückzuführen ist; die Rauschspannungsdichte ist deshalb proportional zur Temperatur. Für $R=1\,\Omega$ und $T=300\,\mathrm{K}$ ist $|\underline{u_{R,r}}(f)|^2 \approx 1{,}66 \cdot 10^{-20}\,\mathrm{V}^2/\mathrm{Hz}$ bzw. $|\underline{u_{R,r}}(f)| \approx 0{,}13\,\mathrm{nV}/\sqrt{\mathrm{Hz}}$.
<!-- page-import:0123:end -->

<!-- page-import:0124:start -->
## 2.3 Modelle für den Bipolartransistor

87

a Widerstand

b pn-Übergang

**Abb. 2.46.** Modellierung des Rauschens durch Rauschquellen

Abbildung 2.46a zeigt die Modellierung des Rauschens durch eine Rauschspannungsquelle; der Doppelpfeil kennzeichnet die Quelle als Rauschquelle. Da die Rauschspannungsdichte konstant ist, liegt weißes Rauschen vor; deshalb erhält man bei der Berechnung des Effektivwerts den Wert $\infty$. Dieses Ergebnis ist jedoch nicht korrekt, da für $f \to \infty$ die parasitäre Kapazität $C_R$ des Widerstands berücksichtigt werden muss; sie ist in Abb. 2.46a eingezeichnet. Für die Rauschspannung $u'_{R,r}$ an den Anschlüssen des Widerstands erhält man mit

$$
u'_{R,r}(s) = \frac{u_{R,r}(s)}{1 + sRC_R}
$$

den Ausdruck:

$$
|u'_{R,r}(f)|^2 = \frac{|u_{R,r}(f)|^2}{1 + (2\pi f RC_R)^2}
$$

Die Integration ergibt dann einen endlichen Effektivwert [2.10]:

$$
u'_{R,\mathrm{eff}} = \sqrt{\frac{kT}{C_R}}
$$

#### 2.3.4.1.2 Rauschen eines pn-Übergangs

Ein pn-Übergang erzeugt einen Rauschstrom $i_{D,r}$ mit der Rauschstromdichte [2.9]:

$$
|i_{D,r}(f)|^2 = 2qI_D
$$

(2.50)

Dabei ist $q = 1{,}602 \cdot 10^{-19}\ \mathrm{As}$ die *Elementarladung*. Die Rauschstromdichte ist proportional zum Strom $I_D$, der über den pn-Übergang fließt. Dieses Rauschen wird *Schrotrauschen* genannt. Für $I_D = 1\ \mathrm{mA}$ ist $|i_{D,r}(f)|^2 \approx 3{,}2 \cdot 10^{-22}\ \mathrm{A}^2/\mathrm{Hz}$ bzw. $|i_{D,r}(f)| \approx 18\ \mathrm{pA}/\sqrt{\mathrm{Hz}}$.

Abbildung 2.46b zeigt die Modellierung des Rauschens durch eine Rauschstromquelle; auch hier kennzeichnet der Doppelpfeil die Quelle als Rauschquelle. Wie beim Widerstand liegt weißes Rauschen vor; bezüglich des Effektivwerts gelten die dort angestellten Überlegungen, d.h. für $f \to \infty$ ist die Kapazität des pn-Übergangs zu berücksichtigen.

#### 2.3.4.1.3 1/f-Rauschen

Bei Widerständen und pn-Übergängen tritt zusätzlich ein 1/f-Rauschen auf, dessen Rauschdichte umgekehrt proportional zur Frequenz ist. Bei Metallfilmwiderständen ist dieser Anteil im allgemeinen vernachlässigbar gering; bei pn-Übergängen gilt
<!-- page-import:0124:end -->

<!-- page-import:0125:start -->
88  2. Bipolartransistor

$$|i_{D,r(1/f)}(f)|^2 = \frac{k_{(1/f)}\,I_D^{\gamma(1/f)}}{f}$$

mit den experimentellen Konstanten $k_{(1/f)}$ und $\gamma_{(1/f)} \approx 1 \dots 2$ [2.10].

Bei der Berechnung des Effektivwerts erhält man den Wert $\infty$, wenn man bei der Integration die untere Grenze $f = 0$ verwendet. Da aber ein Vorgang in der Praxis nur für eine endliche Zeit beobachtet werden kann, nimmt man den Kehrwert der Beobachtungszeit als untere Grenze. Bei Messgeräten bezeichnet man die Anteile bei Frequenzen unterhalb des Kehrwerts der Dauer einer Messung nicht mehr als Rauschen, sondern als Drift.

## 2.3.4.2 Rauschquellen eines Bipolartransistors

Beim Bipolartransistor treten in einem durch $I_{B,A}$ und $I_{C,A}$ gegebenen Arbeitspunkt drei Rauschquellen auf [2.10]:

- Thermisches Rauschen des Basisbahnwiderstands mit:

$$|u_{RB,r}(f)|^2 = 4kTR_B$$

(2.51)

Das thermische Rauschen der anderen Bahnwiderstände kann im allgemeinen vernachlässigt werden.

- Schrotrauschen des Basisstroms mit:

$$|i_{B,r}(f)|^2 = 2q\,I_{B,A} + \frac{k_{(1/f)}\,I_{B,A}^{\gamma(1/f)}}{f}$$

(2.52)

- Schrotrauschen des Kollektorstroms mit:

$$|i_{C,r}(f)|^2 = 2q\,I_{C,A} + \frac{k_{(1/f)}\,I_{C,A}^{\gamma(1/f)}}{f}$$

(2.53)

Abbildung 2.47 zeigt im oberen Teil das Kleinsignalmodell mit der Rauschspannungsquelle $u_{RB,r}$ und den Rauschstromquellen $i_{B,r}$ und $i_{C,r}$.

Beim Schrotrauschen dominiert bei niedrigen Frequenzen der 1/f-Anteil, bei mittleren und hohen Frequenzen der weiße Anteil. Die Frequenz, bei der beide Anteile gleich groß sind, wird 1/f-Grenzfrequenz $f_{g(1/f)}$ genannt:

$$f_{g(1/f)} = \frac{k_{(1/f)}\,I_{C,A}^{(\gamma(1/f)-1)}}{2q} \qquad {}_{\gamma(1/f)=1}^{\gamma(1/f)=1}\ \frac{k_{(1/f)}}{2q}$$

Für $\gamma_{(1/f)} = 1$ ist die 1/f-Grenzfrequenz arbeitspunktunabhängig. Bei rauscharmen Transistoren ist $\gamma_{(1/f)} \approx 1{,}2$ und $f_{g(1/f)}$ nimmt mit zunehmendem Arbeitspunktstrom zu. Typische Werte liegen im Bereich $f_{g(1/f)} \approx 10\,\text{Hz} \dots 10\,\text{kHz}$.

## 2.3.4.3 Äquivalente Rauschquellen

Zur einfacheren Berechnung des Rauschens einer Schaltung werden die Rauschquellen auf die Basis-Emitter-Strecke umgerechnet. Man erhält das in Abb. 2.47 im unteren Teil gezeigte Kleinsignalmodell, bei dem die ursprünglichen Rauschquellen durch eine äquivalente Rauschspannungsquelle $u_{r,0}$ und eine äquivalente Rauschstromquelle $i_{r,0}$ repräsentiert werden; der eigentliche Transistor ist dann rauschfrei.
<!-- page-import:0125:end -->

<!-- page-import:0126:start -->
2.3 Modelle für den Bipolartransistor 89

*Rauschquellen*               *rauschfreier Transistor*

**Abb. 2.47.** Kleinsignalmodell eines Bipolartransistors mit den ursprünglichen (oben) und mit den äquivalenten Rauschquellen (unten)

#### 2.3.4.3.1 Berechnung der Rauschdichten

Zur Bestimmung der äquivalenten Rauschquellen vergleicht man die beiden Kleinsignalmodelle in Abb. 2.47 bei Kurzschluss und bei Leerlauf am Eingang. Bei Kurzschluss wird nur die äquivalente Rauschspannungsquelle $u_{r,0}$ wirksam und man erhält den Zusammenhang

$$
u_{r,0}(s)=u_{RB,r}(s)+R_B i_{B,r}(s)+\frac{i_{C,r}(s)}{y_{21,e}(s)}
$$

mit der Transadmittanz $y_{21,e}(s)$ aus (2.47). Entsprechend wird bei Leerlauf nur die äquivalente Rauschstromquelle $i_{r,0}$ wirksam und man erhält den Zusammenhang

$$
i_{r,0}(s)=i_{B,r}(s)+\frac{i_{C,r}(s)}{\beta(s)}
$$

mit der Kleinsignalstromverstärkung $\beta(s)$ aus (2.43). Daraus folgt für die Rauschdichten:

$$
\left|u_{r,0}(f)\right|^2=\left|u_{RB,r}(f)\right|^2+R_B^2\left|i_{B,r}(f)\right|^2+\frac{\left|i_{C,r}(f)\right|^2}{\left|y_{21,e}(j2\pi f)\right|^2}
\qquad (2.54)
$$

$$
\left|i_{r,0}(f)\right|^2=\left|i_{B,r}(f)\right|^2+\frac{\left|i_{C,r}(f)\right|^2}{\left|\beta(j2\pi f)\right|^2}
\qquad (2.55)
$$

#### 2.3.4.3.2 Korrelation

Die äquivalenten Rauschquellen sind korreliert, da die Rauschstromquellen $i_{B,r}$ und $i_{C,r}$ in beide äquivalente Rauschquellen eingehen. Für die zugehörige Kreuzrauschdichte gilt:
<!-- page-import:0126:end -->

<!-- page-import:0127:start -->
90  2. Bipolartransistor

$$\underline{u}_{r,0}(f)\,\underline{i}_{r,0}^{*}(f)
= R_B |\underline{i}_{B,r}(f)|^2 + \frac{|\underline{i}_{C,r}(f)|^2}{y_{21,e}(j\,2\pi f)\,\beta^{*}(j\,2\pi f)}$$
(2.56)

Die Korrelation ist im Frequenzbereich $f \ll f_T$ gering und kann in den meisten Fällen vernachlässigt werden. Mit zunehmender Frequenz nehmen die Transadmittanz und die Kleinsignalstromverstärkung jedoch ab und der zweite Term der Kreuzrauschdichte macht sich bemerkbar; man erhält dann ohne Berücksichtigung der Korrelation nur noch Näherungswerte.

Wir vernachlässigen die Korrelation im folgenden und beschränken uns darauf, an den entsprechenden Stellen auf die Auswirkungen hinzuweisen. Exakte Ergebnisse erhält man nur durch eine numerische Auswertung der exakten Gleichungen, z.B. mit einem Schaltungssimulator.

#### 2.3.4.3.3 Äquivalente Rauschdichten

Mit $\beta/S = r_{BE} > R_B$, $B \approx \beta \gg 1$ und $\gamma_{(1/f)} = 1$ erhält man bei Vernachlässigung der Korrelation [2.10]:

$$|\underline{u}_{r,0}(f)|^2
= 2q\,I_{C,A}\left(\left(\frac{1}{S^2} + \frac{R_B^2}{\beta}\right)\left(1 + \frac{f_{g(1/f)}}{f}\right) + R_B^2\left(\frac{f}{f_T}\right)^2\right) + 4kT\,R_B$$
(2.57)

$$|\underline{i}_{r,0}(f)|^2
= 2q\,I_{C,A}\left(\frac{1}{\beta}\left(1 + \frac{f_{g(1/f)}}{f}\right) + \left(\frac{f}{f_T}\right)^2\right)$$
(2.58)

Im Frequenzbereich $f_{g(1/f)} < f < f_T/\sqrt{\beta}$ sind die äquivalenten Rauschdichten konstant, d.h. das Rauschen ist weiß; mit $S = I_{C,A}/U_T$ erhält man:

$$|\underline{u}_{r,0}(f)|^2 = \frac{2kT\,U_T}{I_{C,A}} + 4kT\,R_B + \frac{2q\,R_B^2 I_{C,A}}{\beta}$$
(2.59)

$$|\underline{i}_{r,0}(f)|^2 = \frac{2q\,I_{C,A}}{\beta}$$
(2.60)

Für $f < f_{g(1/f)}$ und $f > f_T/\sqrt{\beta}$ nehmen die Rauschdichten zu. Bei rauscharmen Kleinleistungstransistoren ist $f_{g(1/f)} \approx 100\,\mathrm{Hz}$ und $f_T/\sqrt{\beta} \approx 10\,\mathrm{MHz}$.

Abbildung 2.48 zeigt die Abhängigkeit der äquivalenten Rauschdichten vom Arbeitspunktstrom $I_{C,A}$ für den Frequenzbereich $f_{g(1/f)} < f < f_T/\sqrt{\beta}$. Die Rauschstromdichte $|\underline{i}_{r,0}(f)|^2$ ist für $\beta = \mathrm{const.}$ proportional zu $I_{C,A}$; dieser Zusammenhang ist in Abb. 2.48 als Asymptote gestrichelt gezeichnet. Bei kleinen und großen Kollektorströmen liegt der reale Verlauf aufgrund der Abnahme von $\beta$ oberhalb der Asymptote. Bei der Rauschspannungsdichte $|\underline{u}_{r,0}(f)|^2$ sind drei Bereiche zu unterscheiden:

$$|\underline{u}_{r,0}(f)|^2 \approx
\begin{cases}
\frac{2kT\,U_T}{I_{C,A}} & \text{für } I_{C,A} < \frac{U_T}{2R_B} = I_1 \\
4kT\,R_B & \text{für } \frac{U_T}{2R_B} < I_{C,A} < \frac{2\beta U_T}{R_B} \\
\frac{2q\,R_B^2 I_{C,A}}{\beta} & \text{für } I_{C,A} > \frac{2\beta U_T}{R_B} = I_2
\end{cases}$$
<!-- page-import:0127:end -->

<!-- page-import:0128:start -->
2.3 Modelle für den Bipolartransistor 91

Abb. 2.48. Arbeitspunktabhängigkeit der äquivalenten Rauschdichten für $R_B = 60\,\Omega$: asymptotischer Verlauf für $\beta = 100$ (gestrichelt) und realer Verlauf mit arbeitspunktabhängigem $\beta$ und $\beta_{max} = 100$

Die drei Teilverläufe sind in Abb. 2.48 mit $\beta =$ const. als Asymptoten gestrichelt gezeichnet. Auch hier liegt der reale Verlauf bei großen Kollektorströmen aufgrund der Abnahme von $\beta$ oberhalb der Asymptote.

#### 2.3.4.4 Ersatzrauschquelle und Rauschzahl

Bei Ansteuerung des Transistors mit einem Signalgenerator erhält man das in Abb. 2.49a gezeigte Kleinsignalersatzschaltbild, bei dem der Transistor nur schematisch dargestellt ist. Der Signalgenerator erzeugt die Signalspannung $u_g$ und die Rauschspannung $u_{r,g}$. Die Rauschquelle des Signalgenerators kann mit den äquivalenten Rauschquellen des Transistors zu einer Ersatzrauschquelle $u_r$ mit der Rauschspannungsdichte

$$
|u_r(f)|^2 = |u_{r,g}(f)|^2 + |u_{r,0}(f)|^2 + R_g^2 |i_{r,0}(f)|^2
\qquad (2.61)
$$

zusammengefasst werden, siehe Abb. 2.49b.

a mit Rauschquelle des Signalgenerators und äquivalenten Rauschquellen des Transistors

b mit Ersatzrauschquelle

Abb. 2.49. Betrieb mit einem Signalgenerator
<!-- page-import:0128:end -->

<!-- page-import:0129:start -->
92  2. Bipolartransistor

Mit den Rauschdichten $|u_{r,0}(f)|^2$ und $|i_{r,0}(f)|^2$ ist das Rauschverhalten eines Transistors zwar ausreichend beschrieben, für die Praxis möchte man jedoch eine einfachere, normierte Größe haben, die einen einfacheren Vergleich verschiedener Transistoren erlaubt. Dazu denkt man sich das Rauschen des Transistors im Signalgenerator entstanden und bezeichnet das Verhältnis der Rauschdichte der Ersatzrauschquelle zur Rauschdichte des Signalgenerators als spektrale Rauschzahl $F(f)$. Damit die spektrale Rauschzahl eindeutig ist, muss man als Signalgenerator einen Referenz-Signalgenerator mit der thermischen Rauschspannungsdichte

$$
|u_{r,g}(f)|^2 = 4kT_0R_g
$$

verwenden; damit erhält man für die spektrale Rauschzahl [2.10]:

$$
F(f) = \frac{|u_r(f)|^2}{|u_{r,g}(f)|^2} = 1 + \frac{|u_{r,0}(f)|^2 + R_g^2 |i_{r,0}(f)|^2}{4kT_0R_g}
$$
(2.63)

Die mittlere Rauschzahl $F$ (noise figure) gibt den durch den Transistor verursachten Verlust an Signal-Rausch-Abstand $SNR$ (signal-to-noise ratio) in einem Frequenzintervall $f_U < f < f_O$ an. Auch hier muss wieder der Referenz-Signalgenerator verwendet werden. Der Signal-Rausch-Abstand ist durch das Verhältnis der Leistungen des Nutzsignals $u_g$ und des Rauschsignals $u_{r,g}$ gegeben. Da die Leistung eines Signals proportional zum Quadrat des Effektivwerts ist, gilt für den Signal-Rausch-Abstand des Referenz-Signalgenerators:

$$
SNR_{g,ref} = \frac{u_{g\,eff}^2}{u_{r,g\,eff}^2}
= \frac{u_{g\,eff}^2}{\int_{f_U}^{f_O} |u_{r,g}(f)|^2 \, df}
= \frac{u_{g\,eff}^2}{\int_{f_U}^{f_O} 4kT_0R_g \, df}
= \frac{u_{g\,eff}^2}{4kT_0R_g\,(f_O-f_U)}
$$

Durch den Transistor wird die Rauschdichte am Eingang um die spektrale Rauschzahl $F(f)$ angehoben; dadurch nimmt der Signal-Rausch-Abstand am Eingang auf den Wert

$$
SNR_{e,ref} = \frac{u_{g\,eff}^2}{\int_{f_U}^{f_O} |u_r(f)|^2 df}
= \frac{u_{g\,eff}^2}{\int_{f_U}^{f_O} 4kT_0R_g\,F(f)\,df}
= \frac{u_{g\,eff}^2}{4kT_0R_g \int_{f_U}^{f_O} F(f)\,df}
$$

ab. Bei beiden Signal-Rausch-Abständen weist der Index $ref$ auf den Betrieb mit einem Referenz-Signalgenerator hin. Für die mittlere Rauschzahl folgt:

$$
F = \frac{SNR_{g,ref}}{SNR_{e,ref}} = \frac{1}{f_O-f_U} \int_{f_U}^{f_O} F(f)\,df
$$

Oft ist $F(f)$ im betrachteten Frequenzintervall konstant; dann gilt $F = F(f)$ und man spricht nur von der Rauschzahl $F$.

#### 2.3.4.5 Rauschzahl eines Bipolartransistors

Die spektrale Rauschzahl $F(f)$ eines Bipolartransistors erhält man durch Einsetzen der äquivalenten Rauschdichten $|u_{r,0}(f)|^2$ nach (2.57) und $|i_{r,0}(f)|^2$ nach (2.58) in (2.63). Abbildung 2.50 zeigt den Verlauf von $F(f)$ für ein Zahlenbeispiel. Für $f < f_1 < f_g(1/f)$ dominiert das 1/f-Rauschen und $F(f)$ verläuft umgekehrt proportional zur Frequenz; für $f > f_2 > f_T/\sqrt{\beta}$ ist $F(f)$ proportional zu $f^2$.
<!-- page-import:0129:end -->

<!-- page-import:0130:start -->
## 2.3 Modelle für den Bipolartransistor

93

**Abb. 2.50.** Verlauf der spektralen Rauschzahl $F(f)$ eines Bipolartransistors mit $I_{C,A} = 1\,\mathrm{mA}$, $\beta = 100$, $R_B = 60\,\Omega$, $R_g = 1\,\mathrm{k}\Omega$, $f_{g(1/f)} = 100\,\mathrm{Hz}$ und $f_T = 100\,\mathrm{MHz}$

##### 2.3.4.5.1 Bereich des weißen Rauschens

Durch Einsetzen von (2.59) und (2.60) in (2.63) erhält man die Rauschzahl $F$ für $f_{g(1/f)} < f < f_T/\sqrt{\beta}$; in diesem Frequenzbereich sind alle Rauschdichten konstant, d.h. $F$ hängt nicht von der Frequenz ab:

$$
F = F(f) = 1 + \frac{1}{R_g}\left(R_B + \frac{U_T}{2I_{C,A}} + \frac{R_B^2 I_{C,A}}{2\beta\, U_T}\right) + \frac{I_{C,A}R_g}{2\beta\, U_T}
$$

(2.64)

Da wir diesen Ausdruck nicht nur zur Berechnung, sondern auch zur Minimierung der Rauschzahl verwenden wollen, haben wir zusätzlich den Ausdruck bei Berücksichtigung der Korrelation der äquivalenten Rauschquellen berechnet:

$$
F = 1 + \frac{R_B I_{C,A}}{\beta\, U_T} + \frac{1}{R_g}\left(R_B + \frac{U_T}{2I_{C,A}} + \frac{R_B^2 I_{C,A}}{2\beta\, U_T}\right) + \frac{I_{C,A}R_g}{2\beta\, U_T}
$$

(2.65)

Der zusätzliche Term

$$
\frac{R_B I_{C,A}}{\beta\, U_T} = \frac{R_B}{r_{BE}} \ll 1
$$

wirkt sich praktisch nicht auf die Rauschzahl aus, hat aber einen geringen Einfluß auf die Abhängigkeit vom Arbeitspunktstrom $I_{C,A}$; wir werden deshalb bei der Untersuchung der Arbeitspunktabhängigkeit auf (2.65) zurückgreifen.

Die Rauschzahl wird meist in Dezibel angegeben:

$$
F\,[\mathrm{dB}] = 10\,\log F
$$

Abbildung 2.51 zeigt die Rauschzahl eines Kleinleistungstransistors als Funktion des Arbeitspunktstroms $I_{C,A}$ für verschiedene Innenwiderstände $R_g$ des Signalgenerators. Abbildung 2.51a zeigt die Verläufe für eine Frequenz oberhalb der 1/f-Grenzfrequenz $f_{g(1/f)}$; hier gilt (2.64), d.h. die Rauschzahl hängt nicht von der Frequenz ab. Abbildung 2.51b zeigt die Verläufe für eine Frequenz unterhalb $f_{g(1/f)}$; hier ist die Rauschzahl frequenzabhängig, d.h. die Verläufe gelten nur für die angegebene Frequenz.
<!-- page-import:0130:end -->

<!-- page-import:0131:start -->
94  2. Bipolartransistor

a  für $f_{g(1/f)} < f = 100\ \mathrm{kHz} < f_T/\sqrt{\beta}$

b  für $f = 1\ \mathrm{Hz} < f_{g(1/f)}$

**Abb. 2.51.** Rauschzahl eines Kleinleistungstransistors

## 2.3.4.5.2 Minimierung der Rauschzahl

Man entnimmt Abb. 2.51, dass die Rauschzahl unter bestimmten Bedingungen minimal wird; für die eingetragenen Werte für $R_g$ kann man den zugehörigen optimalen Arbeitspunktstrom $I_{C,Aopt}$ direkt ablesen. Einen besseren Überblick ermöglicht Abb. 2.52, bei der Kurven gleicher Rauschzahl in der doppelt logarithmischen $I_{C,A}$-$R_g$-Ebene eingetragen sind. Man muss zwei Arten der Optimierung unterscheiden:

**Abb. 2.52.** Kurven gleicher Rauschzahl in der $I_{C,A}$-$R_g$-Ebene für $R_B = 60\,\Omega$ und $\beta = 100$
<!-- page-import:0131:end -->

<!-- page-import:0132:start -->
## 2.3 Modelle für den Bipolartransistor

95

- Bei den meisten Niederfrequenz-Anwendungen ist der Innenwiderstand $R_g$ des Signalgenerators vorgegeben. In diesem Fall sucht man den optimalen Arbeitspunktstrom $I_{C,Aopt}$, bei dem die Rauschzahl den minimalen Wert $F_{opt}(R_g)$ annimmt.
- Bei einigen wenigen Niederfrequenz-Anwendungen und bei den meisten Hochfrequenz-Anwendungen ist der Arbeitspunktstrom vorgegeben oder nur in sehr engen Grenzen wählbar, während man den Innenwiderstand $R_g$ durch eine Impedanztransformation mit einem Übertrager oder einem reaktiven Anpassnetzwerk ändern kann. In diesem Fall ist der Arbeitspunktstrom $I_{C,A}$ vorgegeben und der optimale Innenwiderstand $R_{gopt}$ gesucht; die zugehörige Rauschzahl ist $F_{opt}$^10.

Den optimalen Arbeitspunktstrom $I_{C,Aopt}$ bei vorgegebenem Innenwiderstand $R_g$ erhält man aus (2.65) über die Bedingung $\partial F/\partial I_{C,A} = 0$:

$$
I_{C,Aopt}=\frac{U_T\sqrt{\beta}}{R_g+R_B}\approx
\begin{cases}
\frac{U_T\sqrt{\beta}}{R_B} & \text{für } R_g<R_B\\[6pt]
\frac{U_T\sqrt{\beta}}{R_g} & \text{für } R_g>R_B
\end{cases}
$$

(2.66)

Bei niederohmigen Signalgeneratoren mit $R_g<R_B$ ist $I_{C,Aopt}$ durch $R_B$, $\beta$ und $U_T$ gegeben, hängt also nicht von $R_g$ ab; mit $R_B\approx 10\dots 300\,\Omega$ und $\beta\approx 100\dots 400$ erhält man $I_{C,Aopt}\approx 1\dots 50\,\mathrm{mA}$. Dieser Fall tritt in der Praxis jedoch selten auf. Bei Signalgeneratoren mit $R_g>R_B$ ist $I_{C,A}$ umgekehrt proportional zu $R_g$; bei Kleinleistungstransistoren kann man die Abschätzung

$$
I_{C,Aopt}\approx \frac{0{,}3\,\mathrm{V}}{R_g}\qquad \text{für } R_g\geq 1\,\mathrm{k}\Omega
$$

(2.67)

verwenden, die in Abb. 2.52 gestrichelt eingezeichnet ist. Setzt man den optimalen Arbeitspunktstrom $I_{C,Aopt}$ aus (2.66) in (2.65) ein, erhält man die optimale Rauschzahl bei vorgegebenem Innenwiderstand $R_g$:

$$
F_{opt}(R_g)=1+\frac{R_BI_{C,A}}{\beta U_T}+\frac{1}{\sqrt{\beta}}+\frac{R_B}{R_g}\left(1+\frac{1}{\sqrt{\beta}}\right)
$$

(2.68)

Man erkennt, dass die optimale Rauschzahl durch den Basisbahnwiderstand $R_B$ und die Kleinsignalstromverstärkung $\beta$ bestimmt wird. In rauscharmen Schaltungen müssen Transistoren mit kleinem Basisbahnwiderstand und hoher Kleinsignalstromverstärkung eingesetzt werden; bei großem Innenwiderstand $R_g$ ist eine hohe Kleinsignalstromverstärkung $\beta$, bei kleinem $R_g$ ein kleiner Basisbahnwiderstand $R_B$ wichtig. Da $\beta$ arbeitspunktabhängig ist, wird das absolute Minimum von $F_{opt}$ nicht, wie (2.68) suggeriert, für $R_g\to\infty$, sondern für einen endlichen Wert $R_g\approx 100\,\mathrm{k}\Omega\dots 1\,\mathrm{M}\Omega$ mit $I_{C,Aopt}\approx 1\,\mu\mathrm{A}$ erreicht.

In gleicher Weise kann man den optimalen Innenwiderstand $R_{gopt}$ für einen gegebenen Arbeitspunktstrom $I_{C,A}$ ermitteln:

$$
R_{gopt}=\sqrt{R_B^2+\frac{\beta U_T}{I_{C,A}}\left(\frac{U_T}{I_{C,A}}+2R_B\right)}
$$

(2.69)

---

^10 $F_{opt}$ ohne Zusatz bezeichnet in der Literatur immer die optimale Rauschzahl für einen gegebenen Arbeitspunkt. Wir verzichten deshalb darauf, diese Rauschzahl mit $F_{opt}(I_{C,A})$ zu bezeichnen.
<!-- page-import:0132:end -->

<!-- page-import:0133:start -->
96 2. Bipolartransistor

Abb. 2.53. Arbeitspunktabhängigkeit des optimalen Innenwiderstands $R_{gopt}$ für $R_B = 60\,\Omega$: asymptotischer Verlauf für $\beta = 100$ (gestrichelt) und realer Verlauf mit arbeitspunktabhängigem $\beta$ und $\beta_{max} = 100$

Drei Bereiche lassen sich unterscheiden:

$$
R_{gopt} \approx
\begin{cases}
\dfrac{U_T\sqrt{\beta}}{I_{C,A}} & \text{für } I_{C,A} < \dfrac{U_T}{2R_B} = I_1 \\[1.2ex]
\sqrt{\dfrac{2\beta\,U_T\,R_B}{I_{C,A}}} & \text{für } \dfrac{U_T}{2R_B} < I_{C,A} < \dfrac{2\beta\,U_T}{R_B} \\[2ex]
R_B & \text{für } I_{C,A} > \dfrac{2\beta\,U_T}{R_B} = I_2
\end{cases}
$$

Die Bereiche ergeben sich aus dem in Abb. 2.48 gezeigten Verlauf von $|u_{r,0}(f)|^2$; die Bereichsgrenzen sind demnach identisch. Abbildung 2.53 zeigt den Zusammenhang zwischen $I_{C,A}$ und $R_{gopt}$; bei kleinen Arbeitspunktströmen gilt $R_{gopt} \sim 1/I_{C,A}$, bei mittleren $R_{gopt} \sim 1/\sqrt{I_{C,A}}$. Die zugehörige optimale Rauschzahl ist:

$$
F_{opt} = 1 + \frac{R_B I_{C,A}}{\beta U_T} + \sqrt{\frac{1}{\beta} + \frac{2R_B I_{C,A}}{\beta U_T} + \left(\frac{R_B I_{C,A}}{\beta U_T}\right)^2}
\qquad (2.70)
$$

Da sich dieses Optimum auf einen vorgegebenen Arbeitspunkt bezieht, kann man die Werte auch mit Hilfe der Kleinsignalparameter in diesem Arbeitspunkt ausdrücken:

$$
R_{gopt} = \sqrt{R_B^2 + r_{BE}\left(\frac{1}{s} + 2R_B\right)}
$$

$$
F_{opt} = 1 + \frac{R_B}{r_{BE}} + \sqrt{\frac{1}{\beta} + \frac{2R_B}{r_{BE}} + \left(\frac{R_B}{r_{BE}}\right)^2}
$$

#### 2.3.4.5.3 Rauschzahl im Bereich des 1/f-Rauschens

Für $f < f_g(1/f)$ erhält man durch Einsetzen von (2.57) und (2.58) in (2.63):

$$
F(f) = 1 + \frac{1}{R_g}\left(R_B + \frac{f_g(1/f)}{2f}\left(\frac{U_T}{I_{C,A}} + \frac{R_B^2 I_{C,A}}{\beta U_T}\right)\right) + \frac{I_{C,A}R_g\,f_g(1/f)}{2\beta U_T f}
$$
<!-- page-import:0133:end -->

<!-- page-import:0134:start -->
2.3 Modelle für den Bipolartransistor 97

Die Rauschzahl nimmt für $f \to 0$ zu. Der optimale Arbeitspunktstrom $I_{C,Aopt}$ ist auch im Bereich des 1/f-Rauschens durch (2.66) gegeben, hängt also nicht von der Frequenz ab. Das bedeutet, dass man bei gegebenem Innenwiderstand $R_g$ mit $I_{C,Aopt}$ nach (2.66) bei jeder Frequenz $f < f_T/\sqrt{\beta}$ die optimale Rauschzahl

$$
F_{opt,(1/f)} = 1 + \frac{R_B}{R_g} + \frac{f_g(1/f)}{\sqrt{\beta}\,f}\left(1 + \frac{R_B}{R_g}\right) \underset{R_g \gg R_B}{\approx} 1 + \frac{f_g(1/f)}{\sqrt{\beta}\,f}
$$

erreicht. $F_{opt,(1/f)}$ nimmt für $f \to 0$ zu; eine hohe Kleinsignalstromverstärkung $\beta$ ist hier besonders wichtig.

##### 2.3.4.5.4 Minimierung der Rauschzahl bei hohen Frequenzen

Mit zunehmender Frequenz wird oberhalb der $\beta$-Grenzfrequenz $f_\beta = f_T/\beta$ zunächst die Rauschstromdichte $|\underline{i}_{r,0}(f)|^2$ frequenzabhängig, oberhalb der Steilheitsgrenzfrequenz $f_{y21e}$ dann auch die Rauschspannungsdichte $|\underline{u}_{r,0}(f)|^2$. Für $f < f_T/\sqrt{\beta}$ kann man die Frequenzabhängigkeit in der Regel vernachlässigen.

Bei hohen Frequenzen wird die optimale Rauschzahl $F_{opt}$ nicht mehr mit einem optimalen Innenwiderstand $R_g$, sondern mit einer optimalen Quellenimpedanz

$$
Z_{g,opt} = R_{gopt} + jX_{gopt}
$$

erzielt. Eine geschlossene Berechnung der optimalen Rauschzahl und der optimalen Quellenimpedanz ist aufwendig und führt auf sehr umfangreiche Gleichungen. Da auch die meisten Schaltungssimulatoren diese Größen nicht direkt berechnen können, beschreiben wir im folgenden, wie man diese Größen mit einem Mathematikprogramm oder einem Schaltungssimulator bestimmen kann.

Bei der Berechnung mit einem Mathematikprogramm setzen wir voraus, dass der Arbeitspunkt und die zugehörigen Kleinsignalparameter bereits berechnet oder mit einem Schaltungssimulator bestimmt wurden 11. Dann geht man wie folgt vor:

– Man bestimmt die Rauschdichten der Rauschquellen des Transistors mit (2.51)–(2.53); dabei kann man die 1/f-Anteile in (2.52) und (2.53) vernachlässigen.  
– Man bestimmt die Transadmittanz $y_{21,e}(j2\pi f)$ mit (2.47) und die Stromverstärkung $\underline{\beta}(j2\pi f)$ mit (2.43), indem man $s = j2\pi f$ einsetzt.  
– Aus (2.54)–(2.56) erhält man die Rauschdichten $|\underline{u}_{r,0}(f)|^2$ und $|\underline{i}_{r,0}(f)|^2$ der äquivalenten Rauschquellen und die Kreuzrauschdichte $\underline{u}_{r,0}(f)\,\underline{i}_{r,0}^*(f)$.  
– Mit den Abkürzungen

$$
u = |\underline{u}_{r,0}(f)|^2,\quad i = |\underline{i}_{r,0}(f)|^2,\quad c = \underline{u}_{r,0}(f)\,\underline{i}_{r,0}^*(f)
$$

gilt für die optimale Quellenimpedanz und die optimale Rauschzahl:

$$
Z_{g,opt} = \sqrt{\frac{u}{i} - \left(\frac{\operatorname{Im}\{c\}}{i}\right)^2} - j\left(\frac{\operatorname{Im}\{c\}}{i}\right)
\Rightarrow \quad |Z_{g,opt}| = \sqrt{\frac{u}{i}}
$$

$$
F_{opt} = 1 + \frac{\sqrt{ui - \operatorname{Im}\{c\}^2} + \operatorname{Re}\{c\}}{2kT_0}
$$

11 Bei PSpice findet man die Arbeitspunktströme und die Kleinsignalparameter in der Output-Datei mit der Endung .OUT.
<!-- page-import:0134:end -->

<!-- page-import:0135:start -->
98  2. Bipolartransistor

**Abb. 2.54.** Optimale Quellenimpedanz $Z_{g,opt}=R_{gopt}+jX_{gopt}$ und optimale Rauschzahl $F_{opt}$ für einen Bipolartransistor mit $R_B=100\,\Omega$, $\beta=100$ und $f_T=1\,\mathrm{GHz}$ bei einem Arbeitspunktstrom $I_{C,A}=1\,\mathrm{mA}$

Abbildung 2.54 zeigt typische Verläufe. Die optimale Quellenimpedanz hat bei niedrigen Frequenzen den durch (2.69) gegebenen reellen Wert, wird dann mit zunehmender Frequenz ohmsch-induktiv $(X_{gopt}>0)$ und geht für $f\rightarrow\infty$ gegen den Basisbahnwiderstand $R_B$. Mit den Werten $u$, $i$ und $c$ kann man auch die Rauschzahl für eine beliebige Quellenimpedanz $Z_g=R_g+jX_g$ berechnen:

$$
F=1+\frac{u+\operatorname{Re}\{cZ_g^*\}+i|Z_g|^2}{4kT_0R_g}
=1+\frac{u+\operatorname{Re}\{c\,(R_g-jX_g)\}+i\,(R_g^2+X_g^2)}{4kT_0R_g}
$$

Diese Rauschzahl kann man aber auch mit einem Schaltungssimulator direkt ermitteln. Wir haben diese Gleichung verwendet, um in Abb. 2.54 zusätzlich die Rauschzahl $F_{opt,NF}$ darzustellen, die man erhält, wenn man den Transistor für alle Frequenzen mit der optimalen Quellenimpedanz bei niedrigen Frequenzen betreibt. Man erkennt, dass man damit für $f<f_T/\sqrt{\beta}$ praktisch die optimale Rauschzahl erhält.

Bei diskreten Transistoren ist diese Berechnung nur für Frequenzen bis etwa 100 MHz geeignet. Bei höheren Frequenzen macht sich der Einfluss des Gehäuses bemerkbar, der sich auch auf die äquivalenten Rauschquellen auswirkt. Aus den Gleichungen kann man jedoch ein einfaches Verfahren zur Bestimmung der optimalen Größen mit einem Schaltungssimulator ableiten. Beschränkt man sich nämlich auf reelle Quellenimpedanzen $(X_g=0)$, stellt man fest, dass die Rauschzahl unabhängig von den Werten für $u$, $i$ und $c$ für $R_g=|Z_{g,opt}|$ ein lokales Minimum aufweist. Dieses Minimum kann man mit einem Schaltungssimulator leicht bestimmen, indem man eine Rauschsimulation mit $R_g$ als Parameter durchführt. Damit kennt man den Betrag der optimalen Quellenimpedanz. In einer zweiten Rauschsimulation variiert man nun den Winkel $\varphi$ der Quellenimpedanz$^{12}$

$$
Z_{g,opt}=|Z_{g,opt}|\,e^{j\varphi}=|Z_{g,opt}|\,(\cos\varphi+j\sin\varphi)=R_{gopt}+jX_{gopt}
$$

und ermittelt damit das globale Minimum $F_{opt}$. Abbildung 2.55 verdeutlicht die zwei Schritte. Dieses Verfahren ist allgemeingültig. Man kann es nicht nur bei der Simulation von Schaltungen, sondern auch bei der Messung an einem Rauschmessplatz anwenden.
<!-- page-import:0135:end -->

<!-- page-import:0136:start -->
2.3 Modelle für den Bipolartransistor 99

![Abb. 2.55. Vorgehensweise bei der Suche nach der optimalen Quellenimpedanz $Z_{g,opt} = R_{gopt} + j\,X_{gopt}$](image)

**Abb. 2.55.**  
Vorgehensweise bei der Suche nach  
der optimalen Quellenimpedanz  
$Z_{g,opt} = R_{gopt} + j\,X_{gopt}$

##### 2.3.4.5.5 Hinweise zur Minimierung der Rauschzahl

Bei der Minimierung der Rauschzahl sind einige Aspekte zu berücksichtigen:

- Die Minimierung der Rauschzahl hat nicht zur Folge, dass das Rauschen absolut minimiert wird; vielmehr wird, wie aus der Definition der Rauschzahl unmittelbar folgt, der Verlust an Signal-Rausch-Abstand $SNR$ minimiert. Minimales absolutes Rauschen, das heißt minimale Rauschdichte $|\underline{u_r}(f)|^2$ der Ersatzrauschquelle, wird nach (2.61) für $R_g = 0$ erreicht. Welche Größe minimiert werden muss, hängt von der Anwendung ab: bei einer Schaltung, die ein Signal überträgt, muss man die Rauschzahl minimieren, um optimales $SNR$ am Ausgang zu erhalten; dagegen muss man bei einer Schaltung, die kein Signal überträgt, z.B. bei einer Stromquelle zur Arbeitspunkteinstellung, das absolute Rauschen am Ausgang minimieren. Die Rauschzahl ist deshalb nur für Signalübertragungssysteme relevant.

- Das absolute Minimum der Rauschzahl wird bei hohem Innenwiderstand $R_g$ und kleinem Arbeitspunktstrom $I_{C,A}$ erreicht. Dieses Ergebnis gilt jedoch nur für $f < f_T/\sqrt{\beta}$. Bei $I_{C,A} \approx 1\,\mu\text{A}$ erreicht ein typischer Kleinleistungstransistor mit einer maximalen Transitfrequenz von 300 MHz und einer maximalen Kleinsignalstromverstärkung von 400 nur noch $f_T \approx 200\,\text{kHz}$ und $\beta \approx 100$; damit gilt die Betrachtung nur für $f < 20\,\text{kHz}$. Man kann deshalb $I_{C,A}$ nicht beliebig klein machen; eine Untergrenze ist durch die erforderliche Bandbreite der Schaltung gegeben.

- In den meisten Fällen ist der Innenwiderstand $R_g$ vorgegeben und man kann $I_{C,Aopt}$ aus (2.66) ermitteln oder durch (2.67) abschätzen. Wenn sich der so ermittelte Wert als ungünstig erweist, kann man bei Schaltungen mit besonders hohen Anforderungen einen Übertrager verwenden, der den Innenwiderstand transformiert, siehe Abb. 2.56. Diese Methode wird bei sehr kleinen Innenwiderständen angewendet, da in diesem Fall die optimale Rauschzahl nach (2.68) relativ groß ist. Durch den Übertrager wird der Innenwiderstand auf einen größeren Wert $n^2 R_g$ transformiert, für den eine kleinere optimale Rauschzahl erreicht werden kann. Aufgrund der Induktivität $L_{\ddot{U}}$ des Übertragers erhält man einen Hochpass mit der Grenzfrequenz $f_{\ddot{U}} = n^2 R_g/(2\pi\,L_{\ddot{U}})$; $f_{\ddot{U}}$ muss kleiner als die minimale interessierende Signalfrequenz sein.  
  *Beispiel:* Für einen Transistor mit $\beta = 100$ und $R_B = 60\,\Omega$ erhält man bei einem Innenwiderstand $R_g = 50\,\Omega$ aus (2.66) $I_{C,Aopt} = 2{,}4\,\text{mA}$ und aus (2.68) $F_{opt} =$  

12 In PSpice verwendet man dazu eine Reihenschaltung aus einem Widerstand $R = |Z_{g,opt}|\cos\varphi$ und einer Induktivität $L = (|Z_{g,opt}|\sin\varphi)/(2\pi f)$ für den Fall $\varphi > 0$ oder einer Kapazität $C = -1/(2\pi f\,|Z_{g,opt}|\sin\varphi)$ für den Fall $\varphi < 0$. Daraus folgt mit $X_g = 2\pi f L$ und $X_g = -1/(2\pi f C)$ jeweils der gewünschte Wert $X_g = |Z_{g,opt}|\sin\varphi$.
<!-- page-import:0136:end -->

<!-- page-import:0267:start -->
230  3. Feldeffekttransistor

$$
\mathbf{Y}_s(j\omega)
=
\begin{bmatrix}
y_{11,s}(j\omega) & y_{12,s}(j\omega) \\
y_{21,s}(j\omega) & y_{22,s}(j\omega)
\end{bmatrix}
=
\begin{bmatrix}
g_{11}+jb_{11} & g_{12}+jb_{12} \\
g_{21}+jb_{21} & g_{22}+jb_{22}
\end{bmatrix}
.
$$

$$
\overset{R_G\to 0}{\approx}
\begin{bmatrix}
j\omega(C_{GS}+C_{GD}) & -j\omega C_{GD} \\
S-j\omega C_{GD} & 1/r_{DS}+j\omega(C_{DS}+C_{GD})
\end{bmatrix}
$$

Daraus folgt:

$$
S \approx g_{21},\; r_{DS} \approx \frac{1}{g_{22}},\; C_{GD} \approx -\frac{b_{12}}{\omega},\; C_{GS} \approx \frac{b_{11}+b_{12}}{\omega},\; C_{DS} \approx \frac{b_{22}+b_{12}}{\omega}
$$

Die Y-Parameter werden meist getrennt nach Real- ($g_{ij}$) und Imaginärteil ($b_{ij}$) für mehrere Frequenzen bzw. durch Kurven über der Frequenz angegeben und gelten nur für den angegebenen Arbeitspunkt. Die hier beschriebene Methode zur Bestimmung der Kleinsignalparameter ist nur bei relativ niedrigen Frequenzen ($f \leq 10\,\mathrm{MHz}$) mit ausreichender Genauigkeit anwendbar. Bei höheren Frequenzen ($f > 100\,\mathrm{MHz}$) machen sich der Bahnwiderstand $R_G$ und die Zuleitungsinduktivitäten der Anschlüsse bemerkbar; eine einfache Bestimmung der Kleinsignalparameter aus den Y-Parametern ist in diesem Fall nicht mehr möglich. Eine Umrechnung auf andere Arbeitspunkte ist näherungsweise möglich, indem man die Werte der Kapazitäten beibehält und die Parameter $S$ und $r_{DS}$ umrechnet:

$$
\frac{S_1}{S_2}=\sqrt{\frac{I_{D,A1}}{I_{D,A2}}},\qquad \frac{r_{DS1}}{r_{DS2}}=\frac{I_{D,A2}}{I_{D,A1}}
$$

Die Ermittlung der Kleinsignalparameter ist beim Einzel-Fet aufwendiger als beim Bipolartransistor. Bei letzterem kann man die Steilheit als wichtigsten Parameter über den einfachen Zusammenhang $S=I_{C,A}/U_T$ ohne spezifische Daten ermitteln; beim Fet wird dagegen der Steilheitskoeffizient $K$ benötigt, der im allgemeinen nicht einmal im Datenblatt angegeben ist 18.

Bei integrierten Mosfets kann man die Kleinsignalparameter einfacher und genauer ermitteln, weil hier die Prozessparameter und Skalierungsgrößen im allgemeinen bekannt sind; man muss in diesem Fall nur (3.41)–(3.46) auswerten. Abbildung 3.52 erläutert die Vorgehensweise bei der Ermittlung der Parameter für das Kleinsignalmodell in Abb. 3.48.

## 3.3.4 Rauschen

Die Grundlagen zur Beschreibung des Rauschens und die Berechnung der Rauschzahl werden im Abschnitt 2.3.4 auf Seite 85 am Beispiel eines Bipolartransistors beschrieben. Beim Feldeffekttransistor kann man in gleicher Weise vorgehen, wenn man die entsprechenden Rauschquellen einsetzt.

### 3.3.4.1 Rauschquellen eines Feldeffekttransistors

Bei einem Fet treten in einem durch den Arbeitspunktstrom $I_{D,A}$ und die Steilheit $S$ gegebenen Arbeitspunkt im Abschnürbereich folgende Rauschquellen auf:

- Thermisches Rauschen des Gate-Bahnwiderstands mit:

$$
\left|u_{RG,r}(f)\right|^2 = 4kT\,R_G
$$

Das thermische Rauschen der anderen Bahnwiderstände kann im allgemeinen vernachlässigt werden.

---

18 Das ist erstaunlich, weil $K$ die spezifische Größe eines Fets ist; im Gegensatz dazu ist die Stromverstärkung $B$ oder $\beta$ als die spezifische Größe eines Bipolartransistors immer angegeben.
<!-- page-import:0267:end -->

<!-- page-import:0521:start -->
484 4. Verstärker

Abb. 4.165.  
Rauschzahl eines Bipolartransistors mit $\beta = 100$ und $R_B = 10\,\Omega$

$$
R_{gopt,T}=\frac{\sqrt{\beta}}{S}\sqrt{1+2SR_B}\qquad \overset{R_B\to 0}{\approx}\qquad \frac{\sqrt{\beta}}{S}\qquad \overset{\beta\approx 100}{\approx}\qquad \frac{10}{S}=\frac{0{,}26\,\mathrm{V}}{I_{C,A}}
$$

$$
F_{opt,T}=1+\sqrt{\frac{1+2SR_B}{\beta}}\qquad \overset{R_B\to 0}{\approx}\qquad 1+\frac{1}{\sqrt{\beta}}\qquad \overset{\beta\approx 100}{\approx}\qquad 1{,}1
$$

Dieses Optimum gilt allerdings nur für den Fall, dass man $S$ bzw. $I_{C,A}$ als gegeben betrachtet und $R_g$ variiert.

Einen anderen Zusammenhang erhält man, wenn man $R_g$ vorgibt und den optimalen Ruhestrom $I_{C,A}$ ermittelt; dann gilt $^{37}$:

$$
I_{C,Aopt}(R_g)=\frac{U_T\sqrt{\beta}}{R_g}
$$

$$
F_{opt,T}(R_g)=1+\frac{R_B}{R_g}+\frac{1}{\sqrt{\beta}}
$$

Dieses Optimum hat bei Niederfrequenz-Anwendungen die größere Bedeutung, da $R_g$ im allgemeinen vorgegeben ist und nur mit einem Übertrager angepasst werden kann; dagegen kann man $I_{C,A}$ einfach ändern. Da wir uns in diesem Abschnitt auf kleine und mittlere Ströme beschränkt haben, geht allerdings die Obergrenze von $I_{C,Aopt}(R_g)$, die durch den Basisbahnwiderstand $R_B$ verursacht wird, verloren; deshalb verwenden wir im folgenden das genauere Ergebnis aus (2.66):

$$
I_{C,Aopt}(R_g)=\frac{U_T\sqrt{\beta}}{R_g+R_B}\qquad \Rightarrow \qquad I_{C,Aopt}(R_g\to 0)=\frac{U_T\sqrt{\beta}}{R_B}\qquad \overset{\beta\approx 100}{\approx}\qquad \frac{0{,}26\,\mathrm{V}}{R_B}
$$

Ein größerer Ruhestrom ist nicht sinnvoll.

37 Aufgrund der Vernachlässigungen erhält man hier einfachere Gleichungen als im Abschnitt 2.3.4. Trotz der formalen Unterschiede sind die Unterschiede für typische Zahlenwerte gering.
<!-- page-import:0521:end -->
