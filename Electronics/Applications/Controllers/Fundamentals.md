# Fundamentals

<!-- page-import:0900:start -->
# Kapitel 13:
Regler

## 13.1 Grundlagen

Die Aufgabe eines Reglers besteht darin, eine bestimmte physikalische Größe (die Regelgröße $Y$) auf einen vorgegebenen Sollwert (die Führungsgröße $W$) zu bringen und dort zu halten. Dazu muss der Regler in geeigneter Weise dem Einfluss von Störungen entgegenwirken. Ein Beispiel ist die Regelung der Zimmertemperatur.

Die prinzipielle Anordnung eines einfachen Regelkreises zeigt Abb. 13.1. Der Regler beeinflusst die Regelgröße $Y$ mit Hilfe der Stellgröße $U$ so, dass die Regelabweichung $E = W - Y$ möglichst klein wird. Die auf die Strecke einwirkenden Störungen werden formal durch eine Störgröße $D$ dargestellt, die der Stellgröße additiv überlagert ist. Im Folgenden wollen wir davon ausgehen, dass alle Größen im Regelkreis durch elektrische Spannungen repräsentiert werden. Dazu sind gegebenenfalls Aktoren erforderlich, die die Strecke steuern und Sensoren, die die Regelgröße messen. Im Fall einer Heizungsregelung wird der Aktor durch einen Stellmotor gebildet und der Sensor mit einem Temperatursensor.

Der Regler wird im einfachsten Fall durch einen Verstärker realisiert, der die Regelabweichung $E$ verstärkt. Wenn die Regelgröße, also der Istwert $Y$, über den Sollwert $W$ ansteigt, wird $E$ negativ. Dadurch verkleinert sich die Stellgröße $U$ in verstärktem Maße. Diese Abnahme wirkt der angenommenen Zunahme der Regelgröße entgegen. Es liegt also Gegenkopplung vor. Damit sich tatsächlich Gegenkopplung und keine Mitkopplung ergibt, muss an einer Stelle im Regelkreis invertierendes Verhalten vorliegen, hier im Subtrahierer am Eingang.

Die im eingeschwungenen Zustand verbleibende Regelabweichung ist umso kleiner, je höher die Verstärkung $A_R$ des Reglers ist. Nach Abb. 13.1 gilt bei linearen Systemen mit der Streckenverstärkung $A_S$:

$$
U = A_R(W - Y)\quad \text{und}\quad Y = A_S(U + D)
$$
(13.1)

Damit ergibt sich die Regelgröße $Y$ zu:

$$
Y = \frac{A_R A_S}{1 + A_R A_S} W + \frac{A_S}{1 + A_R A_S} D
$$
(13.2)

Man erkennt, dass das *Führungsverhalten*

**Abb. 13.1.** Blockschaltbild eines Regelkreises mit den in der Regelungstechnik üblichen Signalnamen

© Springer-Verlag GmbH Deutschland, ein Teil von Springer Nature 2019  
U. Tietze et al., *Halbleiter-Schaltungstechnik*
<!-- page-import:0900:end -->

<!-- page-import:0901:start -->
864 13. Regler

$$\frac{\partial Y}{\partial W}=\frac{A_R A_S}{1+A_R A_S}=\frac{g}{1+g}$$

(13.3)

umso besser gleich 1 wird, je größer die Schleifenverstärkung $g=A_R A_S$ ist. Das *Störverhalten*

$$\frac{\partial Y}{\partial D}=\frac{A_S}{1+A_R A_S}$$

(13.4)

wird bei gegebener Strecke umso besser gleich 0, je größer die Verstärkung $A_R$ des Reglers ist. Aus (13.2) lässt sich auch die relative *Regelabweichung* berechnen. Ohne Störung, also $D=0$, erhält man:

$$\frac{E}{W}=\frac{W-Y}{W}=\frac{1}{1+A_R A_S}=\frac{1}{1+g}$$

(13.5)

Eine große Schleifenverstärkung $g=A_R A_S$ des Reglers ist demnach nicht nur für die Regelabweichung vorteilhaft, sondern auch für das Führungs- und Störverhalten. Dabei tritt jedoch die Schwierigkeit auf, dass man sie nicht beliebig groß machen kann, da sonst die unvermeidlichen Phasenverschiebungen in dem Regelkreis zur Instabilität führen. Diese Problematik haben wir bereits bei der Frequenzgangkorrektur von Operationsverstärkern auf Seite 555 kennen gelernt. Die Aufgabe der Regelungstechnik besteht darin, trotz dieser Einschränkung eine möglichst kleine Regelabweichung und gleichzeitig ein gutes Einschwingverhalten zu erzielen.

### 13.1.1 Komponenten eines Regelkreises

Man kann eine Regelstrecke und einen Regler formal in einzelne Funktionsblöcke zerlegen, deren Kombination das Verhalten beschreibt. Die wichtigsten sind in Abb. 13.2 zusammengestellt.

- Ein P-Block entspricht einem einfachen Verstärker
- Ein PT1-Block stellt einen Tiefpass 1. Ordnung mit der Zeitkonstante $\tau$ dar, dessen Gleichspannungsverstärkung als P-Verstärkung wirkt
- Ein PT2-Block stellt einen Tiefpass 2. Ordnung dar. Seine Sprungantwort hängt ab von der Polgüte

$$Q=\frac{\sqrt{\tau_1\tau_2}}{\tau_1+\tau_2}$$

Für $Q\leq 0{,}5$ erhält man reelle Pole und eine aperiodische Sprungantwort; für $Q>0{,}5$ erhält man ein konjugiert-komplexes Polpaar und eine Sprungantwort mit einer gedämpften Schwingung. Der Fall $Q=0{,}5$ wird deshalb auch als aperiodischer Grenzfall bezeichnet.

- Ein I-Block besitzt integrierendes Verhalten. Der Betrag der Verstärkung geht für tiefe Frequenzen gegen unendlich, der Zeitverlauf geht ebenfalls gegen unendlich. In der Praxis treten natürlich Begrenzungen auf.
- Ein D-Block besitzt differenzierendes Verhalten. Im Prinzip lautet die Übertragungsfunktion eines Differenzierers $A=\tau\; s_n$. Bei einer realisierbaren Übertragungsfunktion darf der Grad des Zählers allerdings nicht höher sein als der des Nenners. Deshalb muss man hier ein Nennerpolynom hinzufügen. Dann strebt die Verstärkung für hohe Frequenzen nicht gegen unendlich, sondern gegen $A=\tau_1/\tau_2$.
<!-- page-import:0901:end -->

<!-- page-import:0902:start -->
13.1 Grundlagen 865

Bezeichnung | Übertragungsfunktion | Symbol
--- | --- | ---
P - Block | $A = A_0$ | 
PT1 - Block | $A = \dfrac{A_0}{1 + \tau s}$ | 
PT2 - Block | $A = \dfrac{A_0}{1 + (\tau_1 + \tau_2)s + \tau_1 \tau_2 s^2}$ | 
I - Block | $A = \dfrac{1}{\tau s}$ | 
D - Block | $A = \dfrac{\tau_1 s}{1 + \tau_2 s}$ | 
Totzeit - Block | $A = e^{-\tau s}$ | 

**Abb. 13.2.** Komponenten, in die man einen Regler und eine Regelstrecke zerlegen kann. Die Diagramme zeigen jeweils schematisch die Sprungantwort.

- Ein Totzeit-Block bewirkt eine Verzögerung des Signals; hier um die Zeit $\tau$. Dabei handelt es sich um eine unerwünschte Eigenschaft von manchen Regelstrecken. Für tiefe Frequenzen gilt die Näherung.

$$
A = e^{-s_n \tau} \qquad \overset{\omega \tau \leq 1}{\cong} \qquad \frac{1}{1 + \tau s}
$$

(13.6)

Im Unterschied zu einem Tiefpass steigt die Phasenverschiebung $\varphi = -\omega_n \tau$ bei einer Totzeit proportional zur Frequenz unbegrenzt an. Diese Eigenschaft erschwert die Regelung.

## 13.1.2 Beispielstrecke

Die Dimensionierung eines Reglers soll anhand der Regelstrecke in Abb. 13.3 erklärt werden. Es handelt sich bei der Beispielstrecke um drei in Reihe geschaltete Tiefpässe mit den normierten Grenzfrequenzen von $\omega_n = 1$, $10$ und $100$. Um allgemein gültige Aussagen zu machen, haben wir alle Frequenzen auf die niedrigste Grenzfrequenz normiert:

$$
\omega_n = \tau_1 \omega = \frac{\omega}{\omega_{g1}}
\qquad \text{und} \qquad
s_n = \frac{s}{\omega_{g1}} = s\,\tau_1 = \frac{j\omega}{\omega_{g1}} = j\,\omega_n
$$

(13.7)

Für die Normierung der Zeit gilt dann:

$$
t_n = \frac{t}{\tau_1} = t\,\omega_{g1}
\qquad \text{und} \qquad
s_n\, t_n = \frac{s}{\omega_{g1}}\, t\, \omega_{g1} = s\,t
$$

(13.8)
<!-- page-import:0902:end -->
