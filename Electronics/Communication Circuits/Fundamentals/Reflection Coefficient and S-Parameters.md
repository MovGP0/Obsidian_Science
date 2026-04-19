# Reflection Coefficient and S-Parameters

<!-- page-import:1205:start -->
1168  21. Grundlagen

![Abb. 21.28. Dämpfungen der Übertragungskanäle](Abb. 21.28. Dämpfungen der Übertragungskanäle)

## 21.3 Reflexionsfaktor und S-Parameter

Im Abschnitt 21.2.1 haben wir gesehen, dass die Spannungen und Ströme auf einer Leitung durch eine vorlaufende und eine rücklaufende Welle beschrieben werden, dass der Zusammenhang zwischen diesen Wellen von der Beschaltung abhängt und dass im allgemeinen eine Impedanztransformation stattfindet; nur bei elektrisch kurzen Leitungen kann man eine ideale Verbindung annehmen. Diese Beschreibung wird nun auf beliebige Zwei- und Vierpole ausgedehnt, d.h. alle Spannungen und Ströme in einer Schaltung werden in eine vor- und eine rücklaufende Welle zerlegt; dadurch wird eine einheitliche Beschreibung von Bauelementen und Verbindungsleitungen möglich. Die Bauelemente werden in diesem Fall nicht mehr mit Impedanzen oder Admittanzen, sondern durch das Verhältnis von vor- und rücklaufender Welle charakterisiert; die entsprechenden Größen sind der Reflexionsfaktor und die S-Parameter.

### 21.3.1 Wellengrößen

Die Spannungen der vorlaufenden (Index $f$) und der rücklaufenden (Index $r$) Welle auf einer Leitung sind über den Leitungswellenwiderstand $Z_W$ mit den jeweiligen Strömen gekoppelt:

$$
U_f = Z_W I_f \, , \quad U_r = Z_W I_r
$$

Deshalb ist zur Beschreibung der beiden Wellen jeweils eine Größe ausreichend. Man verwendet dazu die Wellengrößen:

$$
a = \frac{U_f}{\sqrt{Z_W}} = I_f \sqrt{Z_W}
\qquad \text{vorlaufende Welle}
$$

$$
b = \frac{U_r}{\sqrt{Z_W}} = I_r \sqrt{Z_W}
\qquad \text{rücklaufende Welle}
\eqno{(21.32)}
$$

Sie sind ein Maß für die von den Wellen transportierte Leistung und haben die Einheit Wurzel Watt:

$$
[a] = [b] = \sqrt{\mathrm{VA}} = \sqrt{\mathrm{W}}
$$
<!-- page-import:1205:end -->

<!-- page-import:1206:start -->
21.3 Reflexionsfaktor und S-Parameter 1169

**Abb. 21.29.**  
Äquivalente Darstellungen für die Größen in einer Schaltung

Für die transportierten Leistungen gilt $^4$:

$$
P_f = \operatorname{Re}\{U_f I_f^*\} = \frac{1}{Z_W\ \text{reell}} |a|^2
$$

$$
P_r = \operatorname{Re}\{U_r I_r^*\} = \frac{1}{Z_W\ \text{reell}} |b|^2
$$

(21.33)

Der Leitungswellenwiderstand $Z_W$ ist reell; deshalb sind $U_f$ und $I_f$ sowie $U_r$ und $I_r$ immer in Phase und beide Wellen transportieren nur Wirkleistung.

#### 21.3.1.1 Darstellung mit Hilfe von Spannung und Strom

Die Spannung $U$ und den Strom $I$ erhält man durch Überlagerung der vorlaufenden und der rücklaufenden Welle $^5$:

$$
U = U_f + U_r \quad,\quad I = I_f - I_r
$$

Daraus folgt durch Einsetzen der Wellengrößen aus (21.32)

$$
U = \sqrt{Z_W}\,(a + b)
$$

(21.34)

$$
I = \frac{1}{\sqrt{Z_W}}\,(a - b)
$$

(21.35)

und, durch Umkehrung:

$$
a = \frac{1}{2}\left(\frac{U}{\sqrt{Z_W}} + I\sqrt{Z_W}\right)
$$

(21.36)

$$
b = \frac{1}{2}\left(\frac{U}{\sqrt{Z_W}} - I\sqrt{Z_W}\right)
$$

(21.37)

Damit erhält man die in Abb. 21.29 gezeigten äquivalenten Darstellungen für die Größen in einer Schaltung.

Die Gleichungen (21.34)–(21.37) sind für sich betrachtet unanschaulich, da das zugrundeliegende Prinzip der Wellengrößen als Ersatz für die Spannungen und Ströme der vor- und rücklaufenden Welle nur noch indirekt enthalten ist; man muss diese Gleichungen deshalb immer im Zusammenhang mit (21.32) sehen.

4 Wir verwenden Effektivwertzeiger; demnach gilt bei reellen Zeigern $P = UI$ und bei komplexen Zeigern $P = \operatorname{Re}\{UI^*\}$ mit $I^* = \operatorname{Re}\{I\} - j\,\operatorname{Im}\{I\}$.

5 Diese Zusammenhänge folgen aus (21.6) und (21.12) durch Einsetzen von $z = 0$.
<!-- page-import:1206:end -->

<!-- page-import:1207:start -->
1170  21. Grundlagen

![Abb. 21.30. Impedanz und Reflexionsfaktor eines Zweipols]( [unclear] )

**Abb. 21.30.** Impedanz und Reflexionsfaktor eines Zweipols

### 21.3.2 Reflexionsfaktor

Nach dem Übergang auf die Wellengrößen wird ein Zweipol nicht mehr durch die Impedanz $Z$, sondern durch das Verhältnis aus vor- und rücklaufender Welle beschrieben, siehe Abb. 21.30. Die vorlaufende Welle wird in diesem Fall *einfallende Welle* und die rücklaufende Welle *reflektierte Welle* genannt. Der Quotient aus reflektierter und einfallender Welle wird *Reflexionsfaktor* $r$ genannt:

$$
\text{Reflexionsfaktor } r \;=\; \frac{\text{reflektierte Welle}}{\text{einfallende Welle}} \;=\; \frac{U_r}{U_f} \;=\; \frac{b}{a}
$$

Unter Verwendung von $Z = U/I$ folgt aus (21.36) und (21.37):

$$
r \;=\; \frac{U_r}{U_f} \;=\; \frac{b}{a} \;=\; \frac{Z - Z_W}{Z + Z_W}
$$

(21.38)

Umgekehrt gilt:

$$
Z \;=\; Z_W \frac{1 + r}{1 - r}
$$

(21.39)

#### 21.3.2.1 Reflexionsfaktor-Ebene ($r$-Ebene)

Die Gleichung (21.38) beschreibt eine Abbildung der *Impedanz-Ebene* ($Z$-Ebene) auf die *Reflexionsfaktor-Ebene* ($r$-Ebene). Der Bereich passiver Zweipole mit $\operatorname{Re}\{Z\} \geq 0$ (rechte $Z$-Halbebene) fällt in den Einheitskreis der $r$-Ebene, d.h. für passive Zweipole gilt $|r| \leq 1$, siehe Abb. 21.31. Die Passivität zeigt sich darin, dass die vom Zweipol aufgenommene Wirkleistung als Differenz zwischen einfallender und reflektierter Wirkleistung immer positiv oder Null ist:

$$
P \;=\; P_f - P_r \;=\; |a|^2 - |b|^2 \;=\; |a|^2 \left(1 - |r|^2\right) \;\geq\; 0
$$

mit $|r| \leq 1$

Der Faktor

$$
k_P \;=\; 1 - |r|^2
$$

(21.40)

wird *Leistungsübertragungsfaktor* genannt. Für aktive Zweipole erhält man $\operatorname{Re}\{Z\} < 0$, $|r| > 1$ und $P < 0$, d.h. aktive Zweipole geben Wirkleistung ab.

Die Abbildung der $Z$- auf die $r$-Ebene hat drei spezielle Punkte:

- **Anpassung:** Für $Z = Z_W$ liegt Anpassung an den Wellenwiderstand vor. Wir haben bereits im Abschnitt 21.2 gesehen, dass in diesem Fall die rücklaufende bzw. reflektierte Welle verschwindet ($b = 0$); entsprechend folgt aus (21.38) $r = 0$. Die einfallende Wirkleistung $P_f$ wird vollständig vom Zweipol absorbiert.
<!-- page-import:1207:end -->

<!-- page-import:1208:start -->
1171

## 21.3 Reflexionsfaktor und S-Parameter

**Abb. 21.31.** Abbildung der Impedanz-Ebene (Z-Ebene) auf die Reflexionsfaktor-Ebene ($r$-Ebene) bei passiven Zweipolen ($\operatorname{Re}\{Z\} \geq 0$)

- **Kurzschluss:** Für $Z = 0$ erhält man $r = -1$, d.h. einfallende und reflektierte Welle sind betragsmäßig gleich groß, jedoch in Gegenphase: $b = -a$. Der Zweipol nimmt in diesem Fall keine Wirkleistung auf; die einfallende Wirkleistung wird vollständig reflektiert: $P_r = P_f$.
- **Leerlauf:** Für $Z \rightarrow \infty$ erhält man $r = 1$; einfallende und reflektierte Welle sind gleich groß und in Phase: $b = a$. Auch in diesem Fall wird die einfallende Wirkleistung vollständig reflektiert: $P_r = P_f$.

Neben diesen Punkten treten folgende Bereiche auf:

- **Ohmsche Widerstände:** Für ohmsche Widerstände ($Z = R$) erhält man einen reellen Reflexionsfaktor im Bereich $-1 < r < 1$. Dieser Bereich besteht aus einem Teilbereich mit $0 < R < Z_W$ und $-1 < r < 0$, dem Anpassungspunkt mit $R = Z_W$ und $r = 0$ und einem Teilbereich mit $Z_W < R < \infty$ und $0 < r < 1$.
- **Induktivitäten:** Für Induktivitäten ($\operatorname{Re}\{Z\} = 0$, $\operatorname{Im}\{Z\} > 0$) erhält man $|r| = 1$ und $0 < \arg\{r\} < \pi$, d.h. die obere Hälfte des Einheitskreises in der $r$-Ebene.
- **Kapazitäten:** Für Kapazitäten ($\operatorname{Re}\{Z\} = 0$, $\operatorname{Im}\{Z\} < 0$) erhält man ebenfalls $|r| = 1$, jedoch $-\pi < \arg\{r\} < 0$, d.h. die untere Hälfte des Einheitskreises in der $r$-Ebene.

Abbildung 21.32 zeigt die speziellen Punkte und Bereiche in der $r$-Ebene.

Abbildung 21.33 zeigt den Betrag des Reflexionsfaktors und den Leistungsübertragungsfaktor bei ohmschen Widerständen für $Z_W = 50\,\Omega$. Der Betrag des Reflexionsfaktors nimmt bei einer Abweichung vom Anpassungspunkt $Z = R = 50\,\Omega$ schnell zu und geht asymptotisch gegen Eins. Der Leistungsübertragungsfaktor verläuft im Bereich um den Anpassungspunkt weniger steil; deshalb ist eine geringe Fehlanpassung bezüglich der Leistungsübertragung unkritisch. Im Bereich $20\,\Omega < Z = R < 130\,\Omega$ erhält man aus (21.38) $|r| < 0{,}45$ und aus (21.40) $k_P = 1 - |r|^2 > 0{,}8$; der Verlust an Übertragungsleistung ist in diesem Fall kleiner als $1\,\mathrm{dB}$ ($10\,\log k_P = -0{,}97\,\mathrm{dB}$).

#### 21.3.2.2 Einfluss einer Leitung auf den Reflexionsfaktor

Im Abschnitt 21.2.1 haben wir gezeigt, dass eine Leitung eine Impedanztransformation bewirkt. Wir können diese Impedanztransformation nun mit Hilfe des Reflexionsfaktors darstellen; dazu betrachten wir eine Leitung der Länge $l$ mit einer Abschlussimpedanz
<!-- page-import:1208:end -->

<!-- page-import:1209:start -->
1172  21. Grundlagen

Abb. 21.32. Spezielle Punkte und Bereiche in der Reflexionsfaktor-Ebene ($r$-Ebene)

$j\,\mathrm{Im}\{r\}$

$\mathrm{Re}\{r\}$

ohmsch-induktiv

induktiv $(Z=j\omega L)$

$ohmsch\ (Z=R)$

kapazitiv $(Z=1/j\omega C)$

ohmsch-kapazitiv

$r=j \Rightarrow Z=jZ_W,\; L=Z_W/\omega$

$r=0 \Rightarrow Z=Z_W$

(Anpassung)

$r=1 \Rightarrow Z=\infty$

(Leerlauf)

$r=-1 \Rightarrow Z=0$

(Kurzschluss)

$r=-j \Rightarrow Z=-jZ_W,\; C=1/(\omega Z_W)$

$L\to 0$

$R\to 0$

$L\to \infty$

$R\to \infty$

$C\to \infty$

$C\to 0$

$Z_2$ und dem zugehörigen Reflexionsfaktor $r_2$ und berechnen den Reflexionsfaktor $r_1$ am Eingang der Leitung, siehe Abb. 21.34.

Für die Spannung entlang der Leitung gilt:

$$
U(z) = U_f(z) + U_r(z) = U_f(0)\,e^{-\gamma_L z} + U_r(0)\,e^{\gamma_L z}
$$

(21.6)

Dabei sind $U_f(0)$ und $U_r(0)$ die Spannungen der einfallenden und der reflektierten Welle am Punkt $z = 0$. Daraus erhält man mit (21.32) die Wellen $a(z)$ und $b(z)$ entlang der Leitung:

$$
a(z) = \frac{U_f(z)}{\sqrt{Z_W}} = \frac{U_f(0)}{\sqrt{Z_W}}\,e^{-\gamma_L z}, \qquad
b(z) = \frac{U_r(z)}{\sqrt{Z_W}} = \frac{U_r(0)}{\sqrt{Z_W}}\,e^{\gamma_L z}
$$

Abb. 21.33. Betrag des Reflexionsfaktors und Leistungsübertragungsfaktor $k_P = 1-|r|^2$ bei ohmschen Widerständen für $Z_W = 50\,\Omega$

$|r|$

$k_P=1-|r|^2$

$|r|$

$|r|$

$k_P=1-|r|^2$

$k_P=1-|r|^2$

$R$

$\Omega$

$0{,}5 \quad 1 \quad 2 \quad 5 \quad 10 \quad 20 \quad 50 \quad 100 \quad 200 \quad 500 \quad 1k \quad 2k \quad 5k$

$1$

$0{,}8$

$0{,}6$

$0{,}4$

$0{,}2$

$0$
<!-- page-import:1209:end -->

<!-- page-import:1210:start -->
21.3 Reflexionsfaktor und S-Parameter 1173

**Abb. 21.34.**  
Einfluss einer Leitung auf den Reflexionsfaktor

Damit kann man die Reflexionsfaktoren $r_1$ und $r_2$ berechnen:

$$
r_1=\frac{b_1}{a_1}=\frac{b(0)}{a(0)}=\frac{U_r(0)}{U_f(0)}, \quad
r_2=\frac{b_2}{a_2}=\frac{b(l)}{a(l)}=\frac{U_r(0)}{U_f(0)}\,e^{2\gamma_L l}
$$

Daraus folgt mit $\gamma_L=\alpha_L+j\beta_L$:

$$
r_1=r_2 e^{-2\gamma_L l}=r_2 e^{-2\alpha_L l} e^{-2j\beta_L l}
\tag{21.41}
$$

Demnach wird der Reflexionsfaktor durch die Leitung betragsmäßig mit der doppelten Dämpfungskonstante $\alpha_L$ gedämpft und mit der doppelten Phasenkonstante $\beta_L$ gedreht. Besonders wichtig ist der Fall einer verlustlosen Leitung; aus (21.41) folgt mit $\alpha_L=0$:

$$
r_1=r_2 e^{-2j\beta_L l}
\qquad \overset{\beta_L=2\pi/\lambda}{=}\qquad
r_2 e^{-j\frac{4\pi l}{\lambda}}
\qquad \overset{\varphi=-4\pi l/\lambda}{=}\qquad
r_2 e^{j\varphi}
\tag{21.42}
$$

In diesem Fall wird der Reflexionsfaktor nur gedreht, und zwar mit zwei Umdrehungen pro Wellenlänge im Uhrzeigersinn: $l=\lambda \Rightarrow \varphi=-4\pi$. Abbildung 21.35a zeigt dies am Beispiel eines Widerstands $Z_2=R_2=Z_W/3$ mit $r_2=-1/2$ für den Fall, dass die Leitungslänge schrittweise um $\Delta l=\lambda/16$ zunimmt. Der Reflexionsfaktor wird zunächst in den ohmsch-induktiven Bereich gedreht. Für $l=\lambda/4$ $(\varphi=-\pi)$ wird $r_1=-r_2=1/2$ mit $Z_1=Z_W^2/R_2=3Z_W$ erreicht; diese Eigenschaft einer $\lambda/4$-Leitung haben wir bereits in (21.26) und Abb. 21.11 beschrieben. Bei weiterer Zunahme der Leitungslänge wird der ohmsch-kapazitive Bereich durchlaufen, bis schließlich für $l=\lambda/2$ $(\varphi=-2\pi)$ der Ausgangspunkt erreicht wird: $r_1=r_2$. Der Reflexionsfaktor $r_1$ ist demnach mit $\Delta l=\lambda/2$ periodisch.

Abbildung 21.35b zeigt, dass eine kurze kurzgeschlossene Leitung $(r_2=-1)$ induktiv und eine kurze leerlaufende Leitung $(r_2=1)$ kapazitiv wirkt; auch dies haben wir bereits in (21.27) und (21.28) sowie Abb. 21.11 beschrieben. Mit $l=\lambda/4$ wird der Kurzschluss zum Leerlauf und der Leerlauf zum Kurzschluss.

Bei Abschluss mit dem Wellenwiderstand $(Z_2=Z_W)$ gilt $r_2=0$. In diesem Fall ist die Drehung wirkungslos; es gilt $r_1=0$ und $Z_1=Z_W$, unabhängig von der Länge der Leitung.

### 21.3.2.3 Stehwellenverhältnis

Wir betrachten nun den Verlauf des Spannungszeigers $U(z)$ entlang einer verlustlosen Leitung; aus (21.34) folgt unter Verwendung von (21.38) und (21.32):

$$
U(z)=\sqrt{Z_W}\,(a(z)+b(z))=\sqrt{Z_W}\,a(z)\,(1+r(z))=U_f(z)\,(1+r(z))
\tag{21.43}
$$

Dabei ist $U_f(z)$ der Spannungszeiger der einfallenden Welle und $r(z)$ der Reflexionsfaktor. Bei einer verlustlosen Leitung werden die Wellen nicht gedämpft; deshalb ist der Betrag des Spannungszeigers $U_f(z)$ entlang der Leitung konstant:
<!-- page-import:1210:end -->

<!-- page-import:1211:start -->
1174  21. Grundlagen

a Widerstand: $Z_2 = R_2 = Z_W/3$, $r_2 = -1/2$  
b Kurzschluss ($r_2 = -1$) und Leerlauf ($r_2 = 1$)

**Abb. 21.35.** Drehung des Reflexionsfaktors bei einer verlustlosen Leitung

$|U_f(z)| = |U_f| =$ const.

Damit erhält man aus (21.43) für den Betrag des Spannungszeigers $U(z)$:

$$
|U(z)| = |U_f|\, |1 + r(z)|
$$

(21.44)

Der Betrag des Reflexionsfaktors ist bei einer verlustlosen Leitung ebenfalls konstant:

$$
|r(z)| = |r| = \text{const.}
$$

Da der Reflexionsfaktor entlang der Leitung eine Drehung erfährt, nimmt der Faktor $|1 + r(z)|$ in (21.44) Werte im Bereich

$$
1 - |r| \leq |1 + r(z)| \leq 1 + |r|
$$

an; dadurch treten entlang der Leitung abwechselnd Punkte mit maximalem oder minimalem Betrag des Spannungszeigers $U(z)$ auf:

$$
U_{\max} = |U_f|\,(1 + |r|) \quad , \quad U_{\min} = |U_f|\,(1 - |r|)
$$

(21.45)

Man erhält eine stehende Welle mit dem Stehwellenverhältnis (voltage standing wave ratio, VSWR):

$$
s = \frac{U_{\max}}{U_{\min}} = \frac{1 + |r|}{1 - |r|}
$$

(21.46)

Im angepassten Fall ($r = 0$) wird das Stehwellenverhältnis zu Eins; in diesem Fall tritt keine stehende Welle auf und der Betrag des Spannungszeigers $U(z)$ ist über die gesamte Leitungslänge konstant: $|U(z)| = |U_f|$. Im reaktiven Fall ($|r| = 1$) nimmt das Stehwellenverhältnis den Wert Unendlich an; in diesem Fall gilt $U_{\max} = 2|U_f|$ und $U_{\min} = 0$. Der Abstand zwischen den Maxima und Minima beträgt $\lambda/4$ entsprechend einer Drehung des Reflexionsfaktors um den Winkel $\pi$ (180°).

Abbildung 21.36 zeigt eine stehende Welle auf einer verlustlosen Leitung der Länge $l = \lambda/2$ für den Fall $r_2 = 0{,}5\,e^{j\,30^\circ}$. Für die Beträge der Reflexionsfaktoren gilt demnach $|r(z)| = |r| = |r_1| = |r_2| = 0{,}5$. Der Betrag des Spannungszeigers $U(z)$ ist gemäß (21.44) proportional zum Betrag des Faktors $1 + r(z)$; deshalb wird dieser Faktor in Abb. 21.36
<!-- page-import:1211:end -->

<!-- page-import:1212:start -->
## 21.3 Reflexionsfaktor und S-Parameter

1175

Abb. 21.36. Stehende Welle auf einer verlustlosen Leitung der Länge $\lambda/2$ für den Fall $r_2 = 0{,}5\,e^{j\,30^\circ}$

an fünf Stellen im Abstand $\lambda/8$ geometrisch konstruiert. Da der Reflexionsfaktor bei einer Leitung mit $l = \lambda/2$ eine Drehung um den Winkel $2\pi$ (360°) erfährt, tritt genau ein Maximum und ein Minimum auf. Mit $|r| = 0{,}5$ erhält man aus (21.46) das Stehwellenverhältnis $s = 3$.

Das Stehwellenverhältnis ist auch für die übertragene Wirkleistung $P$ von Bedeutung. Bei einer verlustlosen Leitung sind die Beträge der Wellengrößen und des Reflexionsfaktors entlang der Leitung konstant; dann gilt:

$$
P = P_f - P_r = |a|^2 - |b|^2 = |a|^2 (1 - |r|^2) = \frac{|U_f|^2}{Z_W}(1 - |r|^2)
$$

Daraus folgt durch Einsetzen von (21.45):

$$
P = \frac{U_{\max}^2}{Z_W}\frac{1 - |r|^2}{(1 + |r|^2)^2}
= \frac{U_{\max}^2}{Z_W}\frac{1 - |r|}{1 + |r|}
= \frac{1}{s}\frac{U_{\max}^2}{Z_W}
= \frac{P_{\max}}{s}
$$

Demnach ist die übertragene Wirkleistung $P$ um das Stehwellenverhältnis geringer als die Wirkleistung $P_{\max}$, die bei Anpassung und gleicher maximaler Spannung übertragen werden kann.

Das Stehwellenverhältnis hat in der Praxis eine große Bedeutung, da es mit einer Spannungs- bzw. E-Feld-Sonde durch Verschieben entlang der Leitung direkt gemessen werden kann; auch die Wellenlänge kann ermittelt werden. Aus dem gemessenen Stehwellenverhältnis kann man mit (21.46) den Betrag des Reflexionsfaktors berechnen:
<!-- page-import:1212:end -->

<!-- page-import:1213:start -->
1176  21. Grundlagen

**Abb. 21.37.**  
Wellenquelle

$$|r|=\frac{s-1}{s+1}$$

(21.47)

Eine Bestimmung der Phase ist auf diesem Wege allerdings nicht möglich.

### 21.3.3 Wellenquelle

Eine Signalquelle mit Innenwiderstand wird als *Wellenquelle* bezeichnet; von ihr geht eine unabhängige Welle aus, während die bisher behandelten passiven Zweipole nur einfallende Wellen reflektieren. Abbildung 21.37 zeigt eine Wellenquelle mit den zugehörigen Größen.

#### 21.3.3.1 Unabhängige Welle einer Wellenquelle

Die von der Quelle ausgehende Welle $b_g$ setzt sich aus einem von der Quelle erzeugten Anteil $b_{g,0}$ und einem reflektierten Anteil $r_g a_g$ zusammen:

$$b_g=b_{g,0}+r_g a_g \qquad \text{mit} \qquad r_g=\frac{Z_g-Z_W}{Z_g+Z_W}$$

(21.48)

Der von der Quelle erzeugte Anteil wird *unabhängige Welle* genannt, da er nicht von der einfallenden Welle $a_g$ abhängt. Bei Belastung mit dem Wellenwiderstand $Z=Z_W$ gilt $r=0$ und $b=a_g=0$, siehe Abb. 21.37; in diesem Fall gilt $a=b_g=b_{g,0}$. Wir können demnach die unabhängige Welle $b_{g,0}$ bestimmen, in dem wir die Spannung $U$ für den Fall $Z=Z_W$ berechnen und diese anschließend in eine Welle umrechnen; mit

$$U=\frac{U_g Z}{Z_g+Z}\;\;\overset{Z=Z_W}{=}\;\;\frac{U_g Z_W}{Z_g+Z_W}
=\frac{U_g}{2}\left(1-\frac{Z_g-Z_W}{Z_g+Z_W}\right)
=\frac{U_g}{2}(1-r_g)$$

sowie $a=b_g=b_{g,0}$ und $b=a_g=0$ folgt aus (21.34):

$$b_{g,0}=\frac{U}{\sqrt{Z_W}}=\frac{U_g}{2\sqrt{Z_W}}(1-r_g)$$

(21.49)

Für eine angepasste Wellenquelle mit $Z_g=Z_W$ und $r_g=0$ gilt:

$$b_{g,0}=\frac{U_g}{2\sqrt{Z_W}}$$

(21.50)

#### 21.3.3.2 Verfügbare Leistung

Bei Hochfrequenz-Verstärkern wird gewöhnlich die *verfügbare Leistungsverstärkung* angegeben; dabei wird die Leistung am Ausgang des Verstärkers nicht auf die der Quelle entnommene Leistung, sondern auf die *verfügbare Leistung* (*available power*) $P_{A,g}$ bezogen. Die verfügbare Leistung ist die maximale Wirkleistung, die einer Quelle bei Leistungsanpassung entnommen werden kann; es gilt6:

6 Wir verwenden Effektivwertzeiger; mit Spitzenwertzeigern gilt $P_{A,g}=|\hat{U}_g|^2/(8\,\mathrm{Re}\{Z_g\})$.
<!-- page-import:1213:end -->

<!-- page-import:1214:start -->
1177

## 21.3 Reflexionsfaktor und S-Parameter

$$
P_{A,g}=\frac{|U_g|^2}{4\,\mathrm{Re}\{Z_g\}}\qquad {}_{Z_g=R_g}\qquad =\frac{|U_g|^2}{4R_g}
$$

(21.51)

Für Berechnungen mit den Wellengrößen benötigen wir eine Darstellung mit Hilfe von $b_{g,0}$ und $r_g$. Aus (21.49) folgt:

$$
|U_g|^2=\frac{4Z_W\,|b_{g,0}|^2}{|1-r_g|^2}
$$

Daraus folgt mit

$$
\mathrm{Re}\{Z_g\}=\mathrm{Re}\left\{Z_W\frac{1+r_g}{1-r_g}\right\}
=\mathrm{Re}\left\{Z_W\frac{(1+r_g)(1-r_g^*)}{|1-r_g|^2}\right\}
=Z_W\frac{1-|r_g|^2}{|1-r_g|^2}
$$

durch Einsetzen in (21.51):

$$
P_{A,g}=\frac{|b_{g,0}|^2}{1-|r_g|^2}
$$

(21.52)

Dabei ist zu beachten, dass $b_{g,0}$ ebenfalls von $r_g$ abhängt, d.h. aus $|r_g|\to 1$ folgt nicht $P_{A,g}\to\infty$; vielmehr gilt $P_{A,g}=0$ für $r_g=1$ (eine Quelle mit $Z_g=\infty$ gibt keine Leistung ab) und $P_{A,g}=\infty$ für $r_g=-1$ (bei einer Quelle mit $Z_g=0$ ist die Leistung nicht beschränkt).

## 21.3.4 S-Parameter

Wir wenden nun die Beschreibung mit Hilfe der Wellengrößen auf Vierpole an, indem wir die Spannungen und Ströme mit (21.36) und (21.37) in die entsprechenden Wellen umrechnen, siehe Abb. 21.38:

$$
a_1=\frac{1}{2}\left(\frac{U_1}{\sqrt{Z_W}}+I_1\sqrt{Z_W}\right),\qquad
b_1=\frac{1}{2}\left(\frac{U_1}{\sqrt{Z_W}}-I_1\sqrt{Z_W}\right)
$$

$$
a_2=\frac{1}{2}\left(\frac{U_2}{\sqrt{Z_W}}+I_2\sqrt{Z_W}\right),\qquad
b_2=\frac{1}{2}\left(\frac{U_2}{\sqrt{Z_W}}-I_2\sqrt{Z_W}\right)
$$

Dabei sind $a_1$ und $a_2$ die einfallenden Wellen und $b_1$ und $b_2$ die reflektierten bzw. ausfallenden Wellen.

### 21.3.4.1 S-Matrix

Die Zusammenhänge zwischen den Wellen werden in Form einer Matrix-Gleichung angegeben:

$$
\begin{bmatrix}
b_1\\
b_2
\end{bmatrix}
=
\begin{bmatrix}
S_{11} & S_{12}\\
S_{21} & S_{22}
\end{bmatrix}
\begin{bmatrix}
a_1\\
a_2
\end{bmatrix}
$$

(21.53)

Die Parameter $S_{11}\dots S_{22}$ werden Streu-Parameter (scattering parameters) oder S-Parameter genannt; sie bilden die S-Matrix. Die Beschreibung eines Vierpols mit S-Parametern ist äquivalent zur Beschreibung mit anderen Vierpol-Parametern, z.B. den in Abb. 21.38 gezeigten Y-Parametern oder den Z- oder H-Parametern. Allerdings sind die S-Parameter auf den Wellenwiderstand $Z_W$ normiert; dieser muss deshalb immer mit angegeben werden. Abbildung 21.39 zeigt die Beschaltung des Vierpols zur Ermittlung
<!-- page-import:1214:end -->

<!-- page-import:1215:start -->
1178  21. Grundlagen

a mit Y-Parametern (Y-Matrix)  
b mit S-Parametern (S-Matrix)

**Abb. 21.38.** Äquivalente Beschreibungen eines Vierpols

der S-Parameter. Wir bezeichnen das linke Anschlusspaar im folgenden als *Eingang* und das rechte als *Ausgang*, behalten aber die Indices 1 und 2 bei.

#### 21.3.4.1.1 Eingangsreflexionsfaktor $S_{11}$

Der Parameter $S_{11}$ entspricht dem *Eingangsreflexionsfaktor bei ausgangsseitigem Abschluss mit dem Wellenwiderstand*:

$$
S_{11}=\left.\frac{b_1}{a_1}\right|_{a_2=0}\overset{(21.38)}{=} \left.r_1\right|_{r_L=0}=\left.r_1\right|_{R_L=Z_W}
$$

(21.54)

Er ist ein Maß für die Eingangsimpedanz $Z_e$ bei Betrieb mit einer Last $R_L=Z_W$:

$$
\left.Z_e\right|_{R_L=Z_W}=\left.\frac{U_1}{I_1}\right|_{R_L=Z_W}\overset{(21.39)}{=} \left.Z_W\,\frac{1+r_1}{1-r_1}\right|_{R_L=Z_W}=Z_W\,\frac{1+S_{11}}{1-S_{11}}
$$

Für $S_{11}=0$ liegt eine Anpassung an den Wellenwiderstand vor: $Z_e=Z_W$.

#### 21.3.4.1.2 Ausgangsreflexionsfaktor $S_{22}$

Der Parameter $S_{22}$ entspricht dem *Ausgangsreflexionsfaktor bei eingangsseitigem Abschluss mit dem Wellenwiderstand*:

$$
S_{22}=\left.\frac{b_2}{a_2}\right|_{a_1=0}\overset{(21.38)}{=} \left.r_2\right|_{r_g=0}=\left.r_2\right|_{R_g=Z_W}
$$

(21.55)

Er ist ein Maß für die Ausgangsimpedanz $Z_a$ bei Betrieb mit einer Quelle mit $R_g=Z_W$:

$$
\left.Z_a\right|_{R_g=Z_W}=\left.\frac{U_2}{I_2}\right|_{R_g=Z_W}\overset{(21.39)}{=} \left.Z_W\,\frac{1+r_2}{1-r_2}\right|_{R_g=Z_W}=Z_W\,\frac{1+S_{22}}{1-S_{22}}
$$

**Abb. 21.39.** Beschaltung zur Ermittlung der S-Parameter $S_{11}$ und $S_{21}$ (oben) sowie $S_{12}$ und $S_{22}$ (unten)
<!-- page-import:1215:end -->

<!-- page-import:1216:start -->
1179

## 21.3 Reflexionsfaktor und S-Parameter

**Abb. 21.40.** Beschaltung zur Erläuterung von $S_{21}$

Für $S_{22} = 0$ liegt eine Anpassung an den Wellenwiderstand vor: $Z_a = Z_W$.

#### 21.3.4.1.3 Vorwärts-Transmissionsfaktor $S_{21}$

Der Parameter $S_{21}$ wird *Vorwärts-Transmissionsfaktor bei ausgangsseitigem Abschluss mit dem Wellenwiderstand* genannt und beschreibt das Übertragungsverhalten vom Eingang zum Ausgang:

$$
S_{21}=\left.\frac{b_2}{a_1}\right|_{a_2=0}
\qquad (21.56)
$$

Zur Erläuterung betrachten wir die Schaltung in Abb. 21.40, bei der der Eingang mit einer Quelle mit $R_g = Z_W$ und der Ausgang mit einer Last $R_L = Z_W$ beschaltet ist, und ermitteln den Zusammenhang zwischen $S_{21}$ und der Betriebsverstärkung $A_B = U_2/U_g$. Für die Ausgangsspannung gilt:

$$
U_2 \stackrel{(21.34)}{=} \sqrt{Z_W}\,(a_2+b_2)\overset{a_2=0}{=} \sqrt{Z_W}\,b_2 = \sqrt{Z_W}\,S_{21}\,a_1
\qquad (21.57)
$$

Die einfallende Welle $a_1$ entspricht der unabhängigen Welle $b_{g,0}$ der Quelle, da wegen $R_g = Z_W$ kein reflektierter Anteil vorhanden ist:

$$
a_1=b_{g,0}\stackrel{(21.50)}{=}\frac{U_g}{2\sqrt{Z_W}}
$$

Durch Einsetzen in (21.57) und Auflösen nach $S_{21}$ folgt:

$$
S_{21}=\frac{2U_2}{U_g}=2A_B\big|_{R_g=R_L=Z_W}
\qquad (21.58)
$$

Demnach entspricht $S_{21}$ der doppelten Betriebsverstärkung bei beidseitiger Beschaltung mit dem Wellenwiderstand.

#### 21.3.4.1.4 Rückwärts-Transmissionsfaktor $S_{12}$

Der Parameter $S_{12}$ wird *Rückwärts-Transmissionsfaktor bei eingangsseitigem Abschluss mit dem Wellenwiderstand* genannt und beschreibt das Übertragungsverhalten vom Ausgang zum Eingang:

$$
S_{12}=\left.\frac{b_1}{a_2}\right|_{a_1=0}
\qquad (21.59)
$$

Er entspricht der doppelten Rückwärts-Betriebsverstärkung.
<!-- page-import:1216:end -->

<!-- page-import:1217:start -->
1180  21. Grundlagen

##### 21.3.4.1.5 Bezeichnung

Die S-Parameter werden in der Praxis entsprechend ihren Formelzeichen mit $S_{11}, \ldots, S_{22}$ bezeichnet; die Verwendung der ausgeschriebenen Bezeichnungen ist unüblich. Manchmal werden $S_{11}$ und $S_{22}$ nur als Ein- bzw. Ausgangsreflexionsfaktor und $S_{21}$ und $S_{12}$ nur als Vorwärts- bzw. Rückwärts-Transmissionsfaktor bezeichnet; dies ist jedoch irreführend, da diese Bezeichnungen auch allgemein, d.h. ohne Einhaltung der Abschluss-Bedingungen, verwendet werden. Wir verwenden diese Bezeichnungen nur zusammen mit dem jeweiligen Formelzeichen, z.B. (Eingangs-) Reflexionsfaktor $S_{11}$.

#### 21.3.4.2 Messung der S-Parameter

Der Hauptvorteil der S-Parameter zeigt sich bei der Messung. Alle anderen Parameter (Y, Z, H, ...) müssen mit einem Kurzschluss oder einem Leerlauf am Ein- oder Ausgang gemessen werden; dabei stellt sich das Problem, wo der Ein- bzw. Ausgang ist, da bereits sehr kurze Zuleitungen eine spürbare Impedanztransformation bewirken können. Abbildung 21.35b zeigt, wie ein Kurzschluss im Abstand $l$ mit zunehmender Frequenz ($l/\lambda$ nimmt zu) als Induktivität wirkt; für $l = \lambda/4$ geht er in einen Leerlauf über und für $\lambda/4 < l < \lambda/2$ wirkt er als Kapazität. Im Gegensatz dazu werden die S-Parameter mit Abschlusswiderständen $R_g = R_L = Z_W$ gemessen, die über Leitungen mit dem Wellenwiderstand $Z_W$ angeschlossen werden; in diesem Fall findet keine Impedanztransformation statt, d.h. die Abschluss-Bedingungen sind unabhängig von der Länge der Zuleitung für alle Frequenzen erfüllt.

Ein weiterer Vorteil der S-Parameter liegt darin, dass sie mit den Abschlusswiderständen gemessen werden, die auch bei normalem Betrieb vorliegen. Für diesen Fall ist der Vierpol, z.B. ein Verstärker, ausgelegt, so dass durch die Messbedingungen keine unzulässige Belastung verursacht wird; demgegenüber tritt bei einem Kurzschluss im allgemeinen eine zu hohe Strombelastung und bei einem Leerlauf aufgrund von ungedämpften Resonanzen in den Anpassnetzwerken eine zu hohe Spannungsbelastung auf.

#### 21.3.4.3 Zusammenhang mit den Y-Parametern

In der Hochfrequenztechnik werden neben den S-Parametern auch die Y-Parameter verwendet, siehe Abb. 21.38:

$$
\begin{bmatrix}
I_1 \\
I_2
\end{bmatrix}
=
\begin{bmatrix}
Y_{11} & Y_{12} \\
Y_{21} & Y_{22}
\end{bmatrix}
\begin{bmatrix}
U_1 \\
U_2
\end{bmatrix}
\qquad (21.60)
$$

Sie sind von Interesse, da ein direkter Zusammenhang zwischen den Y-Parametern und den im Abschnitt 4.2.2 genannten Kleinsignal-Kenngrößen eines Verstärkers besteht $^7$:

$$
Y_{11} = \frac{1}{r_e}, \quad Y_{21} = S = -\frac{A}{r_a}
$$

$$
Y_{22} = \frac{1}{r_a}, \quad Y_{12} = S_r = -\frac{A_r}{r_e}
\qquad (21.61)
$$

Abbildung 21.41 zeigt die Umrechnung zwischen den S- und den Y-Parametern.

#### 21.3.4.4 S-Parameter eines Transistors

Zur Verdeutlichung betrachten wir die S-Parameter eines Bipolartransistors in Emitterschaltung; wir verwenden dazu das Kleinsignalmodell in Abb. 21.42a, das wir aus

$^7$ Siehe (4.146)–(4.150) und (4.155)–(4.157).
<!-- page-import:1217:end -->

<!-- page-import:1218:start -->
21.3 Reflexionsfaktor und S-Parameter 1181

$$
S_{11}=\frac{1+(Y_{22}-Y_{11})\,Z_W-\Delta_Y\,Z_W^2}{1+(Y_{11}+Y_{22})\,Z_W+\Delta_Y\,Z_W^2}
\qquad
Y_{11}=\frac{1}{Z_W}\,\frac{1-S_{11}+S_{22}-\Delta_S}{1+S_{11}+S_{22}+\Delta_S}
$$

$$
S_{12}=\frac{-2Y_{12}\,Z_W}{1+(Y_{11}+Y_{22})\,Z_W+\Delta_Y\,Z_W^2}
\qquad
Y_{12}=\frac{1}{Z_W}\,\frac{-2S_{12}}{1+S_{11}+S_{22}+\Delta_S}
$$

$$
S_{21}=\frac{-2Y_{21}\,Z_W}{1+(Y_{11}+Y_{22})\,Z_W+\Delta_Y\,Z_W^2}
\qquad
Y_{21}=\frac{1}{Z_W}\,\frac{-2S_{21}}{1+S_{11}+S_{22}+\Delta_S}
$$

$$
S_{22}=\frac{1+(Y_{11}-Y_{22})\,Z_W-\Delta_Y\,Z_W^2}{1+(Y_{11}+Y_{22})\,Z_W+\Delta_Y\,Z_W^2}
\qquad
Y_{22}=\frac{1}{Z_W}\,\frac{1+S_{11}-S_{22}-\Delta_S}{1+S_{11}+S_{22}+\Delta_S}
$$

$$
\Delta_Y=Y_{11}Y_{22}-Y_{12}Y_{21}
\qquad
\Delta_S=S_{11}S_{22}-S_{12}S_{21}
$$

**Abb. 21.41.** Umrechnung zwischen den S- und den Y-Parametern

Abb. 2.41 übernehmen. Für einen Fet erhält man nahezu gleiche Ergebnisse, da sich die Kleinsignalmodelle nur unwesentlich unterscheiden, siehe Abb. 3.49. Die S-Parameter werden in der Praxis immer für $Z_W=50\,\Omega$ angegeben.

Die niederfrequenten Werte der Parameter $S_{11}$ und $S_{22}$ kann man auf einfache Weise bestimmen, da der Transistor bei niedrigen Frequenzen keine Rückwirkung aufweist; sie entsprechen den Reflexionsfaktoren $r_1$ am Eingang und $r_2$ am Ausgang, die man ohne Rückwirkung unmittelbar aus dem Eingangswiderstand $r_e$ und dem Ausgangswiderstand $r_a$ des Transistors bei niedrigen Frequenzen berechnen kann:

$$
S_{11}\qquad =\qquad r_1\qquad =\qquad \frac{r_e-Z_W}{r_e+Z_W}
\qquad (21.54)\qquad (21.38)
$$

$$
S_{22}\qquad =\qquad r_2\qquad =\qquad \frac{r_a-Z_W}{r_a+Z_W}
\qquad (21.55)\qquad (21.38)
$$

Aus Abb. 21.42a entnimmt man für niedrige Frequenzen $r_e=R_B+r_{BE}$ und $r_a=r_{CE}$; daraus folgt:

$$
S_{11}=\frac{R_B+r_{BE}-Z_W}{R_B+r_{BE}+Z_W}\approx 1-\frac{2Z_W}{r_{BE}}
\qquad (21.62)
$$

a ohne Gehäuse

b mit Gehäuse (vereinfacht)

**Abb. 21.42.** Kleinsignalmodell eines Bipolartransistors
<!-- page-import:1218:end -->

<!-- page-import:1219:start -->
1182  21. Grundlagen

$$
S_{22}=\frac{r_{CE}-Z_W}{r_{CE}+Z_W}\approx 1-\frac{2Z_W}{r_{CE}}
\qquad\qquad (21.63)
$$

Für die Näherungen wird $R_B < Z_W \ll r_{BE}, r_{CE}$ angenommen. Zur Ermittlung von $S_{21}$ berechnen wir zunächst die Betriebsverstärkung mit $R_g = R_L = Z_W$:

$$
A_B=-\frac{r_{BE}}{Z_W+R_B+r_{BE}}\,S\,(Z_W\parallel r_{CE})
\approx -\frac{Sr_{BE}Z_W}{Z_W+r_{BE}}
=-\frac{\beta Z_W}{Z_W+r_{BE}}
$$

Dabei wird ebenfalls $R_B < Z_W \ll r_{BE}, r_{CE}$ angenommen. Mit (21.58) folgt:

$$
S_{21}=2A_B\approx -\frac{2\beta Z_W}{Z_W+r_{BE}}
\qquad\qquad (21.64)
$$

Aufgrund der fehlenden Rückwirkung gilt $S_{12}=0$. Damit können wir die Lage der niederfrequenten S-Parameter in der $r$-Ebene angeben: $S_{11}$ und $S_{22}$ liegen in der Nähe des Leerlaufpunkts $r = 1$, $S_{12}$ liegt im Ursprung $r = 0$ und $S_{21}$ auf der negativ reellen Achse außerhalb des Einheitskreises.

## 21.3.4.5 Ortskurven

Der Frequenzgang der S-Parameter wird in Form von Ortskurven in der $r$-Ebene angegeben; Abb. 21.43 zeigt dies für einen Bipolartransistor ohne Gehäuse mit dem Kleinsignalmodell in Abb. 21.42a und für einen Transistor mit Gehäuse mit dem Kleinsignalmodell in Abb. 21.42b, bei dem ein vereinfachtes Gehäusemodell mit drei Zuleitungsinduktivitäten verwendet wird. Die Kleinsignalparameter des Transistors wurden für $I_C = 5\,\mathrm{mA}$, $\beta = 100$, $U_A = 25\,\mathrm{V}$, $f_T = 4\,\mathrm{GHz}$ und $C_C = 0{,}5\,\mathrm{pF}$ mit Hilfe von Abb. 2.45 auf Seite 86 ermittelt; sie sind typisch für Hochfrequenz-Einzeltransistoren der BFR-Reihe. Durch Einsetzen von

$$
S = 192\,\mathrm{mS}\quad,\quad r_{BE}=520\,\Omega\quad,\quad r_{CE}=5\,\mathrm{k}\Omega
$$

und $Z_W = 50\,\Omega$ in (21.62)-(21.64) erhält man die niederfrequenten Werte der S-Parameter:

$$
S_{11}=0{,}83\quad,\quad S_{12}=0\quad,\quad S_{21}=-16{,}9\quad,\quad S_{22}=0{,}98
$$

Die Ortskurven in Abb. 21.43 beginnen für $f = 0$ bei diesen Werten und sind bis $f = 6\,\mathrm{GHz}$ dargestellt. $S_{11}$ und $S_{22}$ verlaufen ohne Gehäuse im ohmsch-kapazitiven Bereich (Im $\{r\} < 0$). Mit Gehäuse tritt aufgrund der Zuleitungsinduktivitäten sowohl am Eingang als auch am Ausgang eine Serienresonanz auf, bei der die Impedanzen ohmsch werden (Im $\{r\} = 0$); oberhalb der Resonanzfrequenzen sind $S_{11}$ und $S_{22}$ induktiv (Im $\{r\} > 0$). $S_{21}$ wird durch das Gehäuse nur wenig beeinflusst; mit zunehmender Frequenz nimmt der Betrag ab, wobei eine Phasendrehung von etwa $180^\circ$ auftritt. Der Betrag von $S_{12}$ ist ohne Gehäuse auch bei sehr hohen Frequenzen kleiner als $0{,}07$, d.h. die Rückwirkung bleibt relativ klein; mit Gehäuse nimmt die Rückwirkung aufgrund der Zuleitungsinduktivitäten deutlich zu. Da die Rückwirkung ein Maß für die Stabilität ist (Rückwirkung $\to$ Rückkopplung $\to$ Oszillator), sind vor allem Hochfrequenz-Einzeltransistoren mit relativ langen Zuleitungen anfällig für parasitäre Schwingungen; deshalb sind im GHz-Bereich SMD-Gehäuse mit kleinen Zuleitungsinduktivitäten zwingend notwendig. In integrierten Schaltungen tritt dieses Problem nur bei den Schaltungsteilen auf, die mit äußeren Anschlüssen verbunden sind; im Inneren sind die Zuleitungsinduktivitäten im allgemeinen vernachlässigbar gering.

*Beispiel:* In Abb. 21.44 und Abb. 21.45 sind die S- und die Y-Parameter des Hochfrequenz-Einzeltransistors BFR93 für $I_C = 5\,\mathrm{mA}$ und $U_{CE} = 5\,\mathrm{V}$ dargestellt.
<!-- page-import:1219:end -->

<!-- page-import:1220:start -->
## 21.3 Reflexionsfaktor und S-Parameter

1183

*ohne Gehäuse*  
*mit Gehäuse*

**Abb. 21.43.** S-Parameter eines Bipolartransistors $(Z_W = 50\,\Omega)$

Die Ortskurven der S-Parameter sind mit $Z_W = 50\,\Omega$ ermittelt und stimmen mit Ausnahme von $S_{12}$ gut mit den prinzipiellen Verläufen in Abb. 21.43 überein. Die Abweichung bei $S_{12}$ ist eine Folge der vereinfachten Modellierung des Gehäuses in Abb. 21.42b.

Nach Abb. 21.44 liegt die Serienresonanz am Eingang etwa bei 1 GHz, die am Ausgang etwa bei 5,5 GHz. Durch Vergleich der Ortskurven von $S_{11}$ und $Y_{11}$ erkennt man die Auswirkung der Rückwirkung: bei $S_{11}$, gemessen bei ausgangsseitigem Abschluss mit $Z_W$, liegt die Serienresonanz bei 1 GHz, bei $Y_{11}$, gemessen mit ausgangsseitigem Kurzschluss, dagegen bei 2 GHz $(\operatorname{Im}\{Y_{11}\} = 0)$. Die Betriebsbedingungen *Abschluss mit $Z_W$* und *Kurzschluss* sind dabei *kleinsignalmäßig* zu verstehen, d.h. der Ausgang wird über eine ausreichend große Kapazität mit einem Widerstand $Z_W$ oder mit Masse verbunden.

Die Ortskurve für $Y_{22}$ hat zwischen 230 MHz und 1,09 GHz einen negativen Realteil; in diesem Bereich ist der Transistor potentiell instabil. Schließt man am Ausgang eine Last $Y_L$ mit $\operatorname{Re}\{Y_{22} + Y_L\} < 0$ und $\operatorname{Im}\{Y_{22} + Y_L\} = 0$ an $^8$, tritt eine parasitäre Schwingung auf; dies ist hier für Induktivitäten zwischen 16 nH $(Y_L = 1/(j\omega L) = -j\,9\,\mathrm{mS}$ bei $f =$

$^8$ Ein Transistor ist genau dann instabil, wenn die Ein- oder Ausgangsadmittanz des Transistors zusammen mit der Admittanz der äußeren Beschaltung einen negativen Widerstand bildet; dazu muss $\operatorname{Re}\{Y\} < 0$ und $\operatorname{Im}\{Y\} = 0$ gelten. Dasselbe gilt für Impedanzen; hier muss $\operatorname{Re}\{Z\} < 0$ und $\operatorname{Im}\{Z\} = 0$ gelten. Man kann diese Bedingungen auf die gewohnten Schwingbedingungen für die Schleifenverstärkung und die Phase eines Oszillators zurückführen; dabei entspricht die Bedingung für den Realteil der Bedingung für die Schleifenverstärkung und die Bedingung für den Imaginärteil der Bedingung für die Phase.
<!-- page-import:1220:end -->
