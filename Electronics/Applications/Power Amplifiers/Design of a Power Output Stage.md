# Design of a Power Output Stage

<!-- page-import:0949:start -->
912 15. Leistungsverstärker

**Abb. 15.20.**  
Gegentaktendstufe für Vier-Quadranten-Betrieb

**Abb. 15.21.**  
Verlauf der Ausgangsspannung und der Hilfspotentiale $V_1$ bzw. $V_2$

## 15.8 Dimensionierung einer Leistungsendstufe

Um die Dimensionierung einer Leistungsendstufe etwas detaillierter zu beschreiben, wollen wir ein Zahlenbeispiel für einen 50 W-Verstärker durchrechnen. Abbildung 15.22 zeigt die Gesamtschaltung. Sie beruht auf dem Leistungsverstärker von Abb. 15.11.

Der Verstärker soll an einen Verbraucher mit $R_L = 5\,\Omega$ eine Sinusleistung von 50 W abgeben. Der Scheitelwert der Ausgangsspannung beträgt dann $\hat{U}_a = 22{,}4\,\mathrm{V}$ und der Spitzenstrom $\hat{I}_a = 4{,}48\,\mathrm{A}$. Zur Berechnung der Betriebsspannung bestimmen wir den minimalen Spannungsabfall an T$_1'$, T$_1$, T$_3$ und $R_3$. Für die Basis-Emitter-Spannung von T$_1$ und T$_1'$ müssen wir bei $I_{\max}$ zusammen ca. 2 V veranschlagen. An $R_3$ fällt eine Dioden-Durchlaßspannung ab, also ca. 0,7 V. Die Kollektor-Emitter-Spannung von T$_3$ soll bei Vollaussteuerung 0,9 V nicht unterschreiten. Die Endstufe soll aus einer unstabilisierten Betriebsspannungsquelle betrieben werden, deren Spannung bei Volllast um ca. 3 V absinken kann. Damit erhalten wir für die Leerlaufbetriebsspannung

$$
V_b = 22{,}4\,\mathrm{V} + 2\,\mathrm{V} + 0{,}7\,\mathrm{V} + 0{,}9\,\mathrm{V} + 3\,\mathrm{V} = 29\,\mathrm{V}.
$$

Wegen der Symmetrie der Schaltung muss die negative Betriebsspannung genauso groß sein. Damit lassen sich die erforderlichen Grenzdaten der Transistoren T$_1'$ und T$_2'$ angeben. Der maximale Kollektorstrom beträgt 4,48 A. Sicherheitshalber wählen wir $I_{C\max} = 10\,\mathrm{A}$. Die maximale Kollektor-Emitter-Spannung tritt bei Vollaussteuerung auf und beträgt $V_b + \hat{U}_a = 51{,}4\,\mathrm{V}$. Wir wählen $U_{CER} = 80\,\mathrm{V}$. Mit der Beziehung (15.2) für die maximale Verlustleistung

$$
P_T = 0{,}1\,\frac{V_b^2}{R_L}
$$

erhalten wir $P_{T1'} = P_{T2'} = 17\,\mathrm{W}$. Nach Kapitel 2.1.6 auf S. 51 gilt für den Zusammenhang zwischen Verlustleistung und Wärmewiderstand die Beziehung
<!-- page-import:0949:end -->

<!-- page-import:0950:start -->
15.8 Dimensionierung einer Leistungsendstufe 913

**Abb. 15.22.**  
Leistungsendstufe für eine  
Sinusleistung von 50 W

$$
P_{\vartheta j}=\frac{\vartheta_j-\vartheta_U}{R_{thJC}+R_{thCA}}.
$$

Die maximale Sperrschichttemperatur $\vartheta_j$ liegt bei Silizium-Transistoren im allgemeinen bei $175^\circ\mathrm{C}$. Die Umgebungstemperatur im Gerät soll $55^\circ\mathrm{C}$ nicht überschreiten. Der Wärmewiderstand der Kühlkörper sei $R_{thCA}=4\,\mathrm{K/W}$. Damit erhalten wir für den Wärmewiderstand zwischen Halbleiter und Transistorgehäuse die Forderung:

$$
17\,\mathrm{W}=\frac{175^\circ\mathrm{C}-55^\circ\mathrm{C}}{4\,\mathrm{K/W}+R_{thJC}}
\Rightarrow
R_{thJC}=\frac{3{,}1\,\mathrm{K}}{\mathrm{W}}
$$

Häufig wird bei Leistungstransistoren die maximale Verlustleistung $P_{25}$ bei $25^\circ\mathrm{C}$ Gehäusetemperatur angegeben. Diese Leistung können wir mit der Kenntnis von $R_{thCA}$ und $\vartheta_j$ berechnen:

$$
P_{25}=\frac{\vartheta_j-25^\circ\mathrm{C}}{R_{thJC}}
=\frac{150\,\mathrm{K}}{3{,}1\,\mathrm{K/W}}
=48\,\mathrm{W}.
$$

Die Stromverstärkung Leistungstransistoren betrage beim maximalen Ausgangsstrom 30. Damit können wir die Daten der Treibertransistoren $T_1$ und $T_2$ bestimmen. Ihr maximaler Kollektorstrom beträgt $4{,}48\,\mathrm{A}/30=149\,\mathrm{mA}$. Dieser Wert gilt jedoch nur für niedrige Frequenzen. Bei Frequenzen oberhalb $f_g \approx 20\,\mathrm{kHz}$ nimmt die Stromverstärkung von Niederfrequenz-Leistungstransistoren bereits deutlich ab. Deshalb muss bei einem steilen Stromanstieg der Treibertransistor kurzzeitig den größten Teil des Ausgangsstromes liefern. Um eine möglichst große Bandbreite zu erzielen, wählen wir $I_{C\ \max}=1\,\mathrm{A}$.

Im Abschnitt 15.3 haben wir gezeigt, dass es günstig ist, den Ruhestrom nur durch die Treibertransistoren fließen zu lassen und einen Spannungsabfall von ca. $400\,\mathrm{mV}$ an den Widerständen $R_1$ und $R_2$ einzustellen. Dazu dient die Dreifachdiode, an denen eine Spannung von ca. $2{,}1\,\mathrm{V}$ abfällt. Um die Übernahmeverzerrungen hinreichend klein zu halten, wählen wir einen Ruhestrom von ca. $30\,\mathrm{mA}$. Damit ergibt sich

$$
R_1=R_2=\frac{400\,\mathrm{mV}}{30\,\mathrm{mA}}=13\,\Omega.
$$
<!-- page-import:0950:end -->
