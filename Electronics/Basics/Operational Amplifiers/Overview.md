# Overview

<!-- page-import:0546:start -->
# Kapitel 5:
Operationsverstärker

Ein Operationsverstärker ist ein mehrstufiger Gleichspannungsverstärker, der als integrierte Schaltung hergestellt wird. Er wird als Einzelbauteil angeboten oder als Bibliothekselement für den Entwurf größerer integrierter Schaltungen. Im Grunde besteht kein Unterschied zwischen einem normalen Verstärker und einem Operationsverstärker. Beide dienen dazu, Spannungen bzw. Ströme zu verstärken. Während die Eigenschaften eines normalen Verstärkers jedoch durch seinen inneren Aufbau vorgegeben sind, ist ein Operationsverstärker so beschaffen, dass seine Wirkungsweise überwiegend durch die äußere Beschaltung bestimmt wird. Um dies zu ermöglichen, werden Operationsverstärker als gleichspannungsgekoppelte Verstärker mit hoher Verstärkung ausgeführt. Besonders einfach ist der Einsatz von Operationsverstärkern, wenn man eine positive und eine negative Betriebsspannung verwendet wie in Abb. 5.1. Dann liegt das Nullpotential im Aussteuerbereich und man kann es als Bezugspotential für das Eingangs- und Ausgangssignal verwenden. Operationsverstärker wurden früher ausschließlich in Analogrechnern zur Durchführung mathematischer Operationen wie Addition und Integration eingesetzt. Daher stammt der Name Operationsverstärker.

Operationsverstärker sind in großer Vielfalt als integrierte Schaltungen erhältlich und unterscheiden sich in Größe und Preis häufig kaum von einem Einzeltransistor. Aufgrund ihrer zahlreichen vorteilhaften Eigenschaften ist ihr Einsatz jedoch einfacher als der von Einzeltransistoren. Der Hauptvorteil der klassischen Operationsverstärker ist ihre hohe Genauigkeit bei niedrigen Frequenzen. Inzwischen wurden aber aber auch Operationsverstärker entwickelt, die Signalfrequenzen bis über 100 MHz verarbeiten können.

## 5.1 Übersicht

### 5.1.1 Operationsverstärker Grundlagen

Abbildung 5.1 zeigt das Schaltsymbol eines normalen Operationsverstärkers. Er besitzt zwei Eingänge – einen invertierenden und einen nichtinvertierenden – und einen Ausgang. Verstärkt wird nur die Differenzspannung $U_D$ zwischen den beiden Eingängen:

$$
U_D = U_P - U_N
$$

(5.1)

**Abb. 5.1.**  
Anschlüsse eines Operationsverstärkers

© Springer-Verlag GmbH Deutschland, ein Teil von Springer Nature 2019  
U. Tietze et al., *Halbleiter-Schaltungstechnik*
<!-- page-import:0546:end -->

<!-- page-import:0547:start -->
510  5. Operationsverstärker

**Abb. 5.2.** Übliche Pinbelegung von Operationsverstärkern im Dual-Inline-Gehäuse  
(von oben gesehen)

Man bezeichnet den nichtinvertierenden Eingang als P-Eingang und kennzeichnet ihn im Schaltsymbol mit einem + Zeichen. Entsprechend wird der invertierende Eingang als N-Eingang bezeichnet und durch ein − Zeichen gekennzeichnet. Zur Stromversorgung besitzt der Operationsverstärker zwei Betriebsspannungsanschlüsse. In vielen Fällen verwendet man eine positive und eine negative Betriebsspannung, die entgegengesetzt gleich groß sind. Dann kann man das Eingangs- und das Ausgangsruhepotential auf 0 V festlegen. Operationsverstärker besitzen keinen Masseanschluss, obwohl die Eingangs- und Ausgangsspannungen auf Masse bezogen werden. Früher war es üblich, Operationsverstärker mit einer Betriebsspannung von ±15 V zu betreiben. Heute werden viele Geräte mit Batterien betrieben. Deshalb werden vermehrt Betriebsspannungen von ±5 V eingesetzt. Der Trend geht in Richtung einer weiteren Reduktion bis hin zu einer einzigen Betriebsspannung von 3 V. Um die Leistungsaufnahme der Operationsverstärker zusätzlich zu verkleinern, reduziert man gleichzeitig die Ruheströme der Transistoren so weit wie möglich z.B. von 100 $\mu$A auf 10 $\mu$A oder sogar auf 1 $\mu$A.

Die gängige Anschlussbelegung von Operationsverstärkern ist in Abb. 5.2 dargestellt. Da man häufig mehrere Operationsverstärker in einer Schaltung benötigt, werden auch 2- und 4-fach-Operationsverstärker angeboten, mit denen man Platz und Geld sparen kann.

## 5.1.2 Operationsverstärker-Typen

Es gibt heute ein großes Angebot an Operationsverstärkern; sie unterscheiden sich nicht nur durch ihre Daten, sondern auch in ihrem prinzipiellen Aufbau. Man kann vier Familien unterscheiden, die wir in Abbildung 5.3 gegenüber gestellt haben, um die Gemeinsamkeiten und die Unterschiede zu zeigen. Dies wird in Abschnitt 5.10 noch einmal vertieft. Sie unterscheiden sich durch hoch- bzw. niederohmige Ein- und Ausgänge. Der nichtinvertierende Eingang ist bei allen vier Typen hochohmig.

Beim normalen Operationsverstärker (Voltage Feedback Operational Amplifier) sind beide Eingänge hochohmig, also spannungsgesteuert. Sein Ausgang verhält sich wie eine Spannungsquelle mit niedrigem Ausgangswiderstand, er ist also niederohmig. Aus diesem Grund bezeichnet man den normalen Operationsverstärker auch als VV-Operationsverstärker. Dabei beschreibt der 1. Buchstabe das Verhalten am Eingang: Hier bedeutet V = spannungsgesteuert = hochohmig. Der 2. Buchstabe gibt das Verhalten des Ausgangs an: Hier bedeutet V = spannungsgesteuert = niederohmig. Früher gab es nur diese Ausführung und sie hat auch heute noch den größten Marktanteil und die größte Bedeutung. Die Ausgangsspannung
<!-- page-import:0547:end -->

<!-- page-import:0548:start -->
5.1 Übersicht 511

|  | Spannungs-Ausgang | Strom-Ausgang |
|---|---|---|
| Spannungs-Eingang | Normaler OPV  
Voltage Feedback Amplifier  
VV-OPV  

$U_a = A_D\,U_D$ | Steilheits-Verstärker  
Transconductance Amplifier  
VC-OPV  

$I_a = S_D\,U_D$ |
| Strom-Eingang | Transimpedanz-Verstärker  
Current Feedback Amplifier  
CV-OPV  

$U_a = I_q\,Z = A_D\,U_D$ | Strom-Verstärker  
Diamond Transistor  
CC-OPV  

$I_a = k_I\,I_q = S_D\,U_D$ |

**Abb. 5.3.** Schaltsymbole und Übertragungsgleichungen der vier Operationsverstärker

$$
U_a = A_D U_D = A_D(U_P - U_N)
\qquad (5.2)
$$

ist gleich der verstärkten Eingangsspannungsdifferenz; dabei ist $A_D$ die Differenzverstärkung. Um die Schaltung stark gegenkoppeln zu können, strebt man Werte von $A_D = 10^3 \ldots 10^6$ an. Die Übertragungskennlinie von normalen VV-Operationsverstärkern ist in Abb. 5.4a dargestellt. Die Differenzverstärkung

$$
A_D = \left.\frac{dU_a}{dU_D}\right|_{\mathrm{AP}}
\qquad (5.3)
$$

entspricht der Steigung in dem Diagramm. Man sieht, dass Bruchteile von 1 mV ausreichen, um den Ausgang voll auszusteuern. Der Arbeitsbereich $U_{a,min} < U_a < U_{a,max}$ heißt Ausgangsaussteuerbarkeit. Wenn diese Grenze erreicht wird, steigt $U_a$ bei weiterer Vergrößerung von $U_D$ nicht weiter an, d.h. der Verstärker wird übersteuert. In der Literatur verbindet man häufig mit einem idealen Operationsverstärker eine Differenzverstärkung von $A_D = \infty$; das wollen wir hier nicht übernehmen, weil das Verständnis dadurch eher erschwert wird.

Der Transkonduktanzverstärker (Operational Transconductance Amplifier, OTA) bezieht seine Bezeichnung von der Tatsache, dass hier die Steilheit = Transconductance das Übertragungsverhalten bestimmt. Er besitzt hochohmige Eingänge wie der normale Operationsverstärker; im Gegensatz dazu ist der Ausgang jedoch ebenfalls hochohmig. Er verhält sich wie eine Stromquelle, deren Strom durch die Eingangsspannungsdifferenz $U_D$ gesteuert wird. Der Stromausgang wird durch das abgeschnittene Dreieck im Schaltsymbol in Abb. 5.3 gekennzeichnet. Es handelt sich hier also um einen Operationsverstärker, dessen Eingänge spannungsgesteuert sind und dessen Ausgang wie eine Stromquelle wirkt; deshalb wird der Transkonduktanzverstärker auch als VC-Operationsverstärker bezeichnet (C = Current = Strom). Der Ausgangsstrom
<!-- page-import:0548:end -->

<!-- page-import:0591:start -->
554  5. Operationsverstärker

**Abb. 5.64.** Closed-Loop-Buffer im Gegentakt-AB-Betrieb.  
Dimensionierungsbeispiel: $I_0 = 100\,\mu\text{A},\ R_N = 100\,\Omega$  
Transistorgröße $A = 1$ wenn nicht anders vermerkt

$$
g \;=\; \frac{A_D}{A}\bigg|_{A=1} \;=\; A_D \;=\; \frac{r_{CE}/2}{r_S/2 + R_N}
\;=\; \frac{\text{hier }100\,\text{k}\Omega/2}{250\,\Omega/2 + 100\,\Omega}
\;=\; 222 \;\widehat{=}\; 46\,\text{dB}
$$

Bei der angegebenen Dimensionierung beträgt der Ausgangswiderstand des Buffers bei niedrigen Frequenzen $r_a = 0{,}4\,\Omega$; bei Frequenzen über 1 MHz nimmt er auch hier zu wegen der Abnahme der Schleifenverstärkung.

Bei der Schaltung in Abb. 5.64 handelt es sich um einen CV-Operationsverstärker, der hier als nichtinvertierender Verstärker voll, also auf $A = 1$, gegengekoppelt ist. Die Systematik der Schaltung wird im Zusammenhang mit Abb. 5.105 erklärt.

Bei dem Closed-Loop-Buffer in Abb. 5.59 ist es im Normalfall überflüssig, am Ausgang des Operationsverstärkers einen komplementären Emitterfolger anzuschließen, da er

a  Mit externen Emitterfolgern

b  Nutzen der internen Emitterfolger

**Abb. 5.65.** Einsparen des externen komplementären Emitterfolgers beim Closed-Loop-Buffer.  
Man kann in beiden Schaltungen wahlweise den Strom- oder den Spannungsausgang verwenden.
<!-- page-import:0591:end -->

<!-- page-import:0623:start -->
586  5. Operationsverstärker

a Rauschspannung  b Rauschzahl

**Abb. 5.101.** Abhängigkeit der Rauschspannung und der Rauschzahl vom Quellwiderstand für den $\mu$A741 und den AD797 als Beispiel.

Dabei kann man auch mit den Rauschleistungsdichten rechnen, da sich die Bandbreite heraus kürzt, wenn man einen Frequenzbereich betrachtet, in dem weißes Rauschen vorliegt.

In Abb. 5.101b ist die Abhängigkeit der Rauschzahl vom Quellwiderstand dargestellt. Man sieht, dass es ein ausgeprägtes Minimum gibt; die optimale Rauschzahl liegt bei einem optimalen Generatorwiderstand:

$$
R_{gopt}=\frac{u_r(f)}{i_r(f)}=
\begin{cases}
10\,\mathrm{nV}/2\,\mathrm{pA} = 5\ \mathrm{k}\Omega & \text{für } \mu\mathrm{A741}\\
1\,\mathrm{nV}/2\,\mathrm{pA} = 0{,}5\,\mathrm{k}\Omega & \text{für } \mathrm{AD797}
\end{cases}
\qquad (5.78)
$$

Es gibt systematische Unterschiede im Rauschverhalten bei den verschiedenen Technologien für den Aufbau des Eingangsdifferenzverstärkers. Abbildung 5.102 zeigt einen Vergleich. Operationsverstärker mit Bipolartransistoren am Eingang besitzen die niedrigste Rauschspannung, die bei guten Typen lediglich $1\,\mathrm{nV}/\sqrt{\mathrm{Hz}}$ beträgt. Sperrschicht-Fets (JFets) am Eingang besitzen Rauschspannungen, die selbst bei guten Typen deutlich größer sind. Bei CMOS-Operationsverstärkern ist die Rauschspannung am größten; dafür besitzen sie das niedrigste Stromrauschen zumindest bei hohen Frequenzen. Bei niedrigen Frequenzen sind Sperrschicht-Fets überlegen.

Unterhalb einer bestimmten Frequenz steigt sowohl das Spannungs- als auch das Stromrauschen an, wie Abb. 5.102 zeigt. Da die Rauschdichte hier umgekehrt proportional zur Frequenz ist, wird dieses Rauschen als $1/f$-Rauschen bezeichnet. Die Frequenz, bei der es in das weiße Rauschen übergeht, ist bei CMOS-Operationsverstärkern deutlich höher als bei Typen mit Bipolartransistoren oder Sperrschicht-Fets am Eingang. Üblicherweise wird in den Datenblättern die Rauschdichte im Bereich des weißen Rauschens angegeben; das ist der Bereich, in dem die Rauschdichte frequenzunabhängig ist. Wenn man sich für den Beitrag der Rauschspannung interessiert, der im $1/f$-Bereich liegt, muss man über die Rauschdichte integrieren; man erhält dann:

$$
u_{r,eff}=u_r(f)\sqrt{f_{gu}\ln\frac{f_{max}}{f_{min}}+(f_{max}-f_{min})}
\qquad (5.79)
$$

$$
i_{r,eff}=i_r(f)\sqrt{f_{gl}\ln\frac{f_{max}}{f_{min}}+(f_{max}-f_{min})}
\qquad (5.80)
$$
<!-- page-import:0623:end -->

<!-- page-import:0645:start -->
608 5. Operationsverstärker

**Abb. 5.134.** Modell eines CC-Operationsverstärker zur Berechnung der Spannungsverstärkung und des Ausgangswiderstands

$$
k_I\,\frac{U_e-U_1}{r_S}-\frac{U_a-U_1}{R_N}=0
$$

$$
\frac{U_e-U_1}{r_S}+\frac{U_a-U_1}{R_N}-\frac{U_1}{R_1}=0
$$

Daraus folgt die Spannungsverstärkung:

$$
A=\frac{U_a}{U_e}=\frac{R_1(1+k_I)+k_I R_N}{R_1(1+k_I)+r_S}
\overset{k_I=1}{=}\frac{2R_1+R_N}{2R_1+r_S}
\overset{r_S=0}{=}1+\frac{R_N}{2R_1}
$$

Diese Beziehung ist also ganz ähnlich wie beim VV-Operationsverstärker, lediglich die 2 im Nenner ist hier neu. Für $r_S=0$ und $k_I>1$ folgt

$$
A=\frac{U_a}{U_e}=1+\frac{k_I}{k_I+1}\,\frac{R_N}{R_1}
$$

Der Ausgangswiderstand der Schaltung ist weder so hochohmig wie der Ausgang des Verstärkers selbst, da Gegenkopplung vorliegt, noch so niederohmig wie bei VV-Operationsverstärkern da die Schleifenverstärkung hier geringer ist. Zur Berechnung des Ausgangswiderstands müssen wir noch den Ausgangsstrom $I_a$ berücksichtigen und erhalten dann für $r_S=0$:

$$
r_a=-\frac{U_a}{I_a}=\frac{R_N}{k_I+1}
\qquad\qquad (5.82)
$$

Der Ausgangswiderstand $r_a$ wird also durch den Verstärker aktiv verkleinert. Er lässt sich mit dem Widerstand $R_N$ und $k_I$ auf jeden gewünschten Wert einstellen; die Spannungsverstärkung lässt sich dann noch mit $R_1$ unabhängig wählen. Aus diesem Grund wurde der CC-Operationsverstärker von Comlinear auch als Drive-R-Amplifier bezeichnet.

Um eine Leitung mit dem Wellenwiderstand von $R_t=50\,\Omega$ zu treiben, ist bei einer Stromverstärkung $k_I=3$ gemäß (5.82) ein Widerstand

$$
R_N=R_t(k_I+1)=4R_t=4\cdot 50\,\Omega=200\,\Omega
$$

erforderlich. Wenn man – bei Belastung mit $R_t$ – die Verstärkung $A=U_a/U_e=1$ fordert, muss man

$$
R_1=k_I R_t=3\cdot 50\,\Omega=150\,\Omega
$$

wählen. Abb. 5.135 zeigt dieses Beispiel.
<!-- page-import:0645:end -->
