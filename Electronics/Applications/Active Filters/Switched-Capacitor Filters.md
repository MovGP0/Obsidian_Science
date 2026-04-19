# Switched-Capacitor Filters

<!-- page-import:0893:start -->
856  12. Aktive Filter

*Abb. 12.81.* Äquivalenz von geschalteter Kapazität und ohmschem Widerstand

# 12.13 Switched-Capacitor-Filter

## 12.13.1 Grundprinzip

Die bisher beschriebenen aktiven Filter benötigen zu ihrer Realisierung das aktive Bauelement Operationsverstärker sowie als passive Elemente Kondensatoren und Widerstände. Filter mit variabler Grenzfrequenz erreicht man auf übliche Weise nur durch Variation der Kondensatoren oder Widerstände (siehe Abb. 12.73). Es gibt aber die Möglichkeit, einen Widerstand durch einen geschalteten Kondensator (Switched-Capacitor) zu simulieren. Abbildung 12.81 zeigt dieses Prinzip.

Verbindet der Umschalter in der gezeigten Anordnung die geschaltete Kapazität mit der Eingangsspannung, so erhält der Kondensator $C_S$ die Ladung $Q = C_S \cdot U$. In der anderen Schalterstellung gibt der Kondensator die gleiche Ladung wieder ab. In jeder Schaltperiode überträgt er also die Ladung $Q = C_S \cdot U$ vom Eingang zum Ausgang der Schaltung. Auf diese Weise kommt ein Stromfluss zustande, der sich im Mittel zu $I = C_S \cdot U / T_S = C_S \cdot U \cdot f_S$ einstellt. Vergleicht man diese Beziehung mit dem Ohmschen Gesetz, so lässt sich die Grundäquivalenz zwischen der geschalteten Kapazität und einem ohmschen Widerstand angeben als:

$$
I = U / R_\text{äquiv} = U \cdot C_S \cdot f_S \quad \text{mit} \quad R_\text{äquiv} = 1 / (C_S \cdot f_S)
$$

Bemerkenswert ist der lineare Zusammenhang zwischen der Schaltfrequenz und dem äquivalenten Leitwert. Von dieser Eigenschaft wird bei den Switched-Capacitor-Filtern (SC-Filter) Gebrauch gemacht.

## 12.13.2 Der SC-Integrator

Der geschaltete Kondensator kann den ohmschen Widerstand in einem herkömmlichen Integrator gemäß Abbildung 12.82 ersetzen. Damit erhält man den SC-Integrator in Abb. 12.83. In einer solchen Anordnung lässt sich die Integrationszeitkonstante

$$
\tau = C \cdot R_\text{äquiv} = \frac{C}{C_S \cdot f_S} = \frac{\eta}{2\pi f_S}
$$

(12.78)

*Abb. 12.82.*  
Invertierender Integrator in RC-Technik

*Abb. 12.83.*  
Invertierender Integrator in SC-Technik
<!-- page-import:0893:end -->

<!-- page-import:0894:start -->
12.13 Switched-Capacitor-Filter 857

$U_a = +f_S \frac{C_S}{C} \int U_e dt = \frac{1}{\tau} \int U_e dt \Rightarrow \frac{U_a}{U_e} = \frac{f_S}{s} \cdot \frac{C_S}{C} = \frac{1}{\tau \cdot s}$

**Abb. 12.84.** Der nicht-invertierende Integrator in SC-Technik und sein Schaltsymbol

über die Schaltfrequenz $f_S$ einstellen. Das Kapazitätsverhältnis $C/C_S = \eta/2\pi$ ist hierbei vom Hersteller fest vorgegeben; den Parameter $\eta = 2\pi\, C/C_S$ findet man im Datenblatt. Er liegt meist zwischen 50 und 200.

Die Verwendung geschalteter Kapazitäten bietet aber noch weitere Vorteile: Um einen nicht invertierenden Integrator in herkömmlicher Technik zu realisieren, benötigt man einen invertierenden Integrator, dem ein Spannungs-Inverter vor- oder nachgeschaltet ist. Beim SC-Integrator lässt sich die Vorzeichenänderung der Eingangsspannung einfach dadurch realisieren, dass man den Kondensator, der auf die abzutastende Eingangsspannung aufgeladen worden ist, während der anschließenden Ladungsübertragungsphase mit vertauschten Anschlüssen an den Eingang des Operationsverstärkers legt. Das Vertauschen der Anschlüsse lässt sich wie in Abb. 12.84 mit einem zweiten Umschalter $S_2$ bewerkstelligen, der gleichzeitig mit $S_1$ schaltet.

Die Auf- und Entladung des Kondensators $C_S$ erfolgt nicht momentan, sondern entsprechend dem Einschwingvorgang des resultierenden $RC$-Glieds. Eine momentane Umladung wäre auch gar nicht möglich, weil weder die Eingangsspannungsquelle noch der Operationsverstärker die erforderlichen Ströme liefern könnten. Andererseits bestimmen diese parasitären Widerstände auch die maximale Schaltfrequenz, da sonst eine vollständige Umladung nicht mehr gewährleistet ist.

### 12.13.3 SC-Filter 1. Ordnung

Die beiden angegebenen Grundschaltungen für SC-Integratoren lassen sich um einen Gegenkopplungswiderstand erweitern, so dass ein Tiefpass 1. Ordnung ähnlich dem in Abb. 12.35 dargestellten entsteht. Üblicherweise wird für die monolithische Ausführung jedoch eine andere Grundstruktur gewählt. Sie besteht aus einem Integrator in SC-Technik und einem zusätzlich vorgeschalteten Summierer. Diese Anordnung wird dann in der in Abb. 12.85 gezeigten Weise um drei Widerstände ergänzt. Damit erhält man gleichzeitig ein Hoch- und ein Tiefpassfilter.

Für die Dimensionierung wählt man am einfachsten die natürliche Grenzfrequenz $f_S/f_g = \eta$. Dann folgt aus den Übertragungsfunktionen die Dimensionierung:

| Tiefpass | Hochpass |
|---|---|
| gegeben: $R_1$ | gegeben: $R_1$ |
| $R_2 = -R_1 a/A_0$ | $R_2 = -R_1/A_\infty$ |
| $R_3 = R_1 a$ | $R_3 = R_1/a$ |
<!-- page-import:0894:end -->

<!-- page-import:0895:start -->
858 12. Aktive Filter

Integrationszeitkonstante:
$$\tau = \frac{C}{C_S f_S} = \frac{\eta}{2\pi f_S}$$

Tiefpass:
$$\frac{U_{TP}}{U_e} = \frac{-R_3/R_2}{1 + \frac{R_3}{R_1}\tau\omega_g s_n}$$

Hochpass:
$$\frac{U_{HP}}{U_e} = \frac{-s_n\,R_1/R_2}{\frac{R_1}{R_3\tau\omega_g} + s_n}$$

**Abb. 12.85.** Hoch- und Tiefpassfilter 1. Ordnung

Bei Filtern 1. Ordnung, bei denen $a_1 = 1$ ist, wird also $R_3 = R_1$. Dann werden die Verstärkungen von Tiefpass und Hochpass gleich; man erhält komplementäre Hoch- und Tiefpassfilter.

## 12.13.4 SC-Filter 2. Ordnung

SC-Filter 2. Ordnung werden meist in „Biquad“-Struktur nach Abb. 12.73 aufgebaut. Da hier wie dort nichtinvertierende Integratoren verwendet werden, erhält man auch dieselbe Struktur und dieselben Übertragungsfunktionen (monolithisch integrierte Universalfilter enthalten immer diese Biquad-Struktur). Im Unterschied zum kontinuierlichen Fall wird hier natürlich die Integrationszeitkonstante $\tau$ nach Gl. (12.78) durch die Wahl der Schaltfrequenz $f_S$ bestimmt.

Zur Bestimmung der Übertragungsfunktion entnehmen wir der Schaltung in Abb. 12.86 folgende Beziehungen:

$$U_{HP} = -\frac{R_3}{R_2}U_e - \frac{R_3}{R_4}U_{BP} - \frac{R_3}{R_1}U_{TP}$$

$$U_{BP} = \frac{1}{\tau s}U_{HP} \qquad U_{TP} = \frac{1}{\tau s}U_{BP}$$

Daraus lassen sich die angegebenen Übertragungsfunktionen für die Einzelfilter berechnen. Macht man wieder die Schaltfrequenz gleich dem $\eta$-fachen der Grenzfrequenz (bzw. Resonanzfrequenz), wird $\tau\omega_g = 1$, und man erhält die Dimensionierungsgleichungen:

| Tiefpass | Hochpass | Bandpass |
|---|---|---|
| gegeben: $R_1$ | gegeben: $R_1$ | gegeben: $R_1$ |
| $R_2 = -R_1 b/A_0$ | $R_2 = -R_1/A_\infty$ | $R_2 = -R_1 Q/A_r$ |
| $R_3 = R_1 b$ | $R_3 = R_1/b$ | $R_3 = R_1$ |
| $R_4 = R_1 b/a$ | $R_4 = R_1/a$ | $R_4 = R_1 Q$ |
<!-- page-import:0895:end -->

<!-- page-import:0896:start -->
12.13 Switched-Capacitor-Filter 859

Integrationszeitkonstante:
$$\tau = \frac{C}{C_S f_S} = \frac{\eta}{2\pi f_S}$$

Tiefpass:
$$\frac{U_{TP}}{U_e} = \frac{-\,R_3/R_2}{1 + \frac{R_3}{R_4}\,\tau\omega_g s_n + \frac{R_3}{R_1}\,\tau^2\omega_g^2 s_n^2}$$

Bandpass:
$$\frac{U_{BP}}{U_e} = \frac{-\,\tau\omega_r s_n\,R_3/R_2}{1 + \frac{R_3}{R_4}\,\tau\omega_r s_n + \frac{R_3}{R_1}\,\tau^2\omega_g^2 s_n^2}$$

Hochpass:
$$\frac{U_{HP}}{U_e} = \frac{-\,s_n^2\,R_1/R_2}{\frac{R_1}{R_3\tau^2\omega_g^2} + \frac{R_1}{R_4\tau\omega_g}\,s_n + s_n^2}$$

**Abb. 12.86.** SC-Biquad zur Synthese von Hoch-, Tief- und Bandpass 2. Ordnung. Dimensionierungsbeispiel für ein Bessel-Tiefpassfilter.

Wenn man einen Filtertyp dimensioniert hat, besitzen die beiden anderen natürlich nicht unbedingt dieselben Daten. Für die Grenzfrequenzen (bzw. die Resonanzfrequenz) gilt dann die Relation:

$$f_{g\,TP}/\sqrt{b} = f_{r\,BP} = f_{g\,HP}\sqrt{b}$$

Da bei Butterworthfiltern $b_1 = 1$ ist, fallen hier die drei Frequenzen zusammen. In diesem Fall gilt für die Verstärkungen:

$$A_0 = A_r/Q = A_\infty$$

Als Dimensionierungsbeispiel wollen wir ein Besselfilter 2. Ordnung mit einer Grenzfrequenz $f_g = 1\,\text{kHz}$ und einer Verstärkung im Durchlassbereich $A_0 = -1$ berechnen. Aus Abb. 12.20 auf S. 807 entnehmen wir $a_1 = 1{,}3617$ und $b_1 = 0{,}6180$. Wir wählen $R_1 = 100\,\text{k}\Omega$ und erhalten damit $R_2 = R_3 = 61{,}8\,\text{k}\Omega$ und $R_4 = 45{,}4\,\text{k}\Omega$. Für $\eta = 100$ muss die Schaltfrequenz $f_S = 100\,\text{kHz}$ betragen.

## 12.13.5 Allgemeine Gesichtspunkte beim Einsatz von SC-Filtern

Bei integrierten SC-Filtern, die neben den Schaltern auch die Kondensatoren und die Operationsverstärker enthalten, findet die 2-Schalter-Anordnung aus Abbildung 12.84 Anwendung, weil sich hierbei der Einfluss der Streukapazitäten kompensiert. Die Umschalter realisiert man als Transmission-Gates. Sie werden von einem internen Taktgenerator angesteuert, der nichtüberlappende Taktsignale bereitstellt. Auf diese Weise ist dafür gesorgt, dass in der Umschaltphase keine Ladung verloren geht.
<!-- page-import:0896:end -->
