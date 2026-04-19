# Switching Regulators with Isolation

<!-- page-import:0971:start -->
934  16. Stromversorgung

Leistung $U_{a,\infty} I_a$ und der Verlustleistung im Gleichrichter, die etwa $2 U_D I_a$ beträgt. Die Nennleistung des Transformators muss daher zu

$$
P_N = \alpha I_a (U_{a,\infty} + 2 U_D) \approx \alpha I_a U_{a,\infty}
$$

gewählt werden. Darin ist $\alpha$ der Formfaktor, mit dem der erhöhte Effektivwert des Stromes berücksichtigt wird. Er beträgt bei Zweiweggleichrichtung etwa 1,2. Es ist jedoch zweckmäßig, nicht nach Gl. (16.7) an die Grenze der thermischen Belastbarkeit zu gehen, sondern den Transformator überzudimensionieren, indem man für $\alpha$ einen höheren Wert einsetzt. Dadurch ergibt sich ein höherer Wirkungsgrad. Der Nachteil des höheren Platzbedarfs hält sich in Grenzen, wenn man Ringkerntransformatoren verwendet. Außerdem bleiben bei ihnen auch im Fall der starken Überdimensionierung die Leerlaufverluste klein.

Bei endlich großem Ladekondensator tritt am Ausgang eine überlagerte Brummspannung auf. Sie lässt sich aus der Ladung berechnen, die dem Kondensator während der Entladezeit $t_E$ entzogen wird:

$$
U_{Br,ss} = \frac{I_a t_E}{C_L}
$$

Aus Gl. (16.6) ergibt sich näherungsweise:

$$
t_E \approx \frac{1}{2} \left( 1 - 4 \sqrt{\frac{R_i}{2 R_v}} \right) T_N
$$

Darin ist $T_N = 1/f_N$ die Periodendauer der Netzwechselspannung. Daraus folgt:

$$
U_{Br,ss} = \frac{I_a}{2 C_L f_N} \left( 1 - 4 \sqrt{\frac{R_i}{2 R_v}} \right)
$$

Von besonderem Interesse ist der untere Scheitelwert der Ausgangsspannung. Er beträgt näherungsweise:

$$
U_{a,min} \approx U_{a,\infty} - \frac{2}{3} U_{Br,ss}
$$

*Beispiel:* Die Dimensionierung einer Netzgleichrichterschaltung soll an einem Zahlenbeispiel verdeutlicht werden. Gesucht ist eine Gleichspannungsversorgung mit einer minimalen Ausgangsspannung $U_{a,min} = 30\,\mathrm{V}$ bei einem Ausgangsstrom $I_a = 1\,\mathrm{A}$ und einer maximalen Brummspannung $U_{Br,ss} = 3\,\mathrm{V}$. Aus Gl. (16.9) erhalten wir zunächst

$$
U_{a,\infty} = U_{a,min} + \frac{2}{3} U_{Br,ss} = 32\,\mathrm{V}
$$

und mit Gl. (16.7) und $\alpha = 1{,}5$ die Transformator-Nennleistung:

$$
P_N = \alpha I_a (U_{a,\infty} + 2 U_D) = 1{,}5\,\mathrm{A} \cdot (32\,\mathrm{V} + 2\,\mathrm{V}) = 51\,\mathrm{W}
$$

Aus Abb. 16.6 entnehmen wir dafür den Ringkerntyp mit $D = 80\,\mathrm{mm}$. Sein Verlustfaktor beträgt $f_v = 1{,}15$. Zur weiteren Rechnung benötigt man den Innenwiderstand des Transformators. Er hängt aber von der noch nicht bekannten Nennspannung ab. Zu ihrer Berechnung muss man das nichtlineare Gleichungssystem Gln. (16.4) bis (16.6) lösen. Das geschieht am einfachsten in Form einer Iteration: Als Anfangswert geben wir $U_{N,eff} \approx U_{a,min} = 30\,\mathrm{V}$ vor. Dann folgt mit Gl. (16.4):

$$
R_i = R_N (f_v - 1) = \frac{U_{N,eff}^2}{P_N} (f_v - 1) = \frac{(30\,\mathrm{V})^2}{51\,\mathrm{W}} \cdot (1{,}15 - 1) = 2{,}65\,\Omega
$$

(16.7)

(16.8)

(16.9)
<!-- page-import:0971:end -->

<!-- page-import:1002:start -->
16.6 Schaltregler mit Potentialtrennung 965

zwischen der Ausgangsspannung $U_a$ und $U_e - U_a$ hin und her geschaltet. Dadurch wird sichergestellt, dass beide Spannungen gleich groß werden, also gleich $U_e/2$. Das gilt auch für den Fall, dass die beiden Kondensatoren unterschiedliche Kapazität besitzen.

Die Gleichspannungswandler in Abb. 16.64 arbeiten im Prinzip verlustfrei. Verluste treten in der Praxis in den On-Widerständen der Schalttransistoren auf. Auch der Transfer-Kondensator verursacht Verluste, wenn er im Betrieb periodisch umgeladen wird. Man kann für ihn einen effektiven Widerstand $R_{eff} = 1/(f\,C_t)$ angeben, der genauso wirkt wie der On-Widerstand der Schalttransistoren. Die Verluste lassen sich klein halten, indem man große Kapazitäten und hohe Taktfrequenzen verwendet. Beide Widerstände sind außerdem verantwortlich für den Ausgangswiderstand des Spannungswandlers, sodass die Ausgangsspannung selbst bei konstanter Eingangsspannung mit dem Laststrom abnimmt. Eine weitere Ursache für Verluste sind natürlich auch hier die Ansteuerverluste der Schalttransistoren. Da sie proportional zur Frequenz sind, sollte man die Taktfrequenz nicht unnötig hoch wählen.

Eine Regelung der Ausgangsspannung ist bei den Wandlern nach dem Ladungspumpen-Verfahren nur mit Verlusten möglich. Bei handelsüblichen Produkten mit Spannungsregelung wird dazu der On-Widerstand der Schalttransistoren vergrößert. Bezüglich der Verluste könnte man genau so gut einen linearen Spannungsregler nachschalten; in diesem Fall würde man aber einen zweiten Baustein benötigen.

## 16.6 Schaltregler mit Potentialtrennung

Die Spannungsregler mit Potentialtrennung besitzen einem Hochfrequenztransformator zur Potentialtrennung zwischen dem Hausstromnetz und der elektronischen Schaltung, die aus Sicherheitsgründen meist mit dem Schutzleiter verbunden wird. Dadurch benötigt man keinen 50Hz-Netztransformator, der groß, schwer und teuer ist und darüber hinaus auch nennenswerte Verluste verursacht. Das Blockschaltbild in Abb. 16.2 zeigt, dass der Wechselrichter direkt aus der gleichgerichteten Netzspannung betrieben wird; seine Eingangsspannung hat dann bei einer Netzspannung von 230V einen Wert von 325V. Aus diesem Grund ist Vorsicht beim Arbeiten an diesen Schaltungen geboten. Weil der Wechselrichter auf der Primärseite des Trenntransformators arbeitet, bezeichnet man die hier behandelten Gleichstromsteller als primärgetaktete Schaltregler.

Bei den primärgetakteten Schaltreglern unterscheidet man zwischen Eintakt- und Gegentakt-Wandlern. Die Eintaktwandler benötigen in der Regel nur einen Leistungsschalter; sie erfordern daher nur wenig Bauteile. Allerdings beschränkt sich ihr Einsatz auf kleine Leistungen. Bei Leistungen über 100 W sind die Gegentakt-Wandler vorteilhaft, obwohl sie zwei Leistungsschalter benötigen.

### 16.6.1 Eintakt-Wandler

#### 16.6.1.1 Eintakt-Sperrwandler

Der Eintaktwandler in Abb. 16.65 stellt die einfachste Realisierung eines primärgetakteten Schaltreglers dar. Er ergibt sich aus dem Sperrwandler in Abb. 16.56, indem man die Speicherdrossel zu einem Transformator erweitert.

Der zeitliche Verlauf der Spannungen und Ströme ist in Abb. 16.66 dargestellt. Wenn der Leistungsschalter $S$ geschlossen wird, wird $U_S = 0$ und die ganze Eingangsspannung fällt an der Primärwicklung ab. Dadurch steigt der Strom linear an gemäß der Induktivität der Primärwicklung $L_p$ und es wird Energie im Transformator gespeichert. Wenn der Schalter geöffnet wird, kehrt sich die Polung an den Transformator-Wicklungen um und
<!-- page-import:1002:end -->

<!-- page-import:1003:start -->
966  16. Stromversorgung

**Abb. 16.65.**  
Sperrwandler (flyback converter). Die Punkte an den Transformator-Wicklungen geben gleichsinnige Polung an.

die Spannung steigt so weit an bis der Gleichrichter am Ausgang leitend wird. Der Strom kommutiert jetzt auf den Ausgangsstromkreis und die gespeicherte Energie wird an den Speicherkondensator am Ausgang übertragen. Da die Energieübertragung in der Sperrphase des Schalters erfolgt, wird die Schaltung als Sperrwandler bezeichnet.

Zur Berechnung der Ausgangsspannung setzt man wieder die Stromzunahme in der Einschaltphase gleich der Stromabnahme in der Ausschaltphase und berücksichtigt hier noch das Übersetzungsverhältnis:

$$
\Delta I_p \;=\; \frac{U_e}{L_p}\, t_{ein} \;=\; \frac{1}{\ddot{u}}\, \frac{U_a}{L_s}\, t_{aus}
$$

Mit dem Zusammenhang

$$
L_p \;=\; \ddot{u}^{\,2} L_s
$$

für die Induktivitäten und dem Tastverhältnis $p = t_{ein}/T$ folgt daraus die Ausgangsspannung in Gl. 16.33. Die Größe der Ausgangsspannung lässt sich demnach sowohl mit dem Übersetzungsverhältnis $\ddot{u}$ als auch mit dem Tastverhältnis $p$ bestimmen. Dabei wählt man das Übersetzungsverhältnis so, dass sich für das Tastverhältnis praktikable Werte $0{,}2 < p < 0{,}5$ ergeben.

Wenn sich der Schalter öffnet, steigt die Spannung am Schalter an, bis die Diode D leitend wird, also bis auf $U_{S,max} = U_e + \ddot{u}U_a$ (Gl.16.34). Damit sie nicht zu groß wird, macht man die Einschaltdauer $t_{ein} \leq 0{,}5T$, dann wird $U_{S,max} \leq 2U_e$. Da bei der Gleichrichtung von 230 V Netzspannung eine Gleichspannung von $U_e = 230\,\mathrm{V}\cdot\sqrt{2} = 325\,\mathrm{V}$ entsteht, ergibt sich in diesem Fall am Leistungsschalter eine Spannung von $U_{S,max} = 650\,\mathrm{V}$. Die tatsächlich auftretenden Spannungen sind wegen der unvermeidlichen Streuinduktivitäten noch höher.

kontinuierlicher Betrieb

lückender Betrieb

**Abb. 16.66.**  
Zeitlicher Verlauf von Spannung und Strom im Sperrwandler
<!-- page-import:1003:end -->

<!-- page-import:1004:start -->
16.6 Schaltregler mit Potentialtrennung 967

Netzgleichrichter

PWM

Isolation

Regler

**Abb. 16.67.** Praktische Ausführung eines Sperrwandlers. Das normale Massezeichen bedeutet Schaltungsmasse; das besondere Massezeichen steht für den Minuspol des Gleichspannungszwischenkreises, der sich auf Netzpotential befindet.

*Sperrwandler*

$$
U_a=\frac{t_{ein}}{t_{aus}}\frac{U_e}{\ddot{u}}=\frac{p}{1-p}\frac{U_e}{\ddot{u}}
\qquad \text{für } I_a>I_{a,\min}
\qquad (16.33)
$$

$$
U_{S,\max}=U_e+\ddot{u}U_a=\frac{1}{1-p}U_e
\qquad (16.34)
$$

Im Normalbetrieb geht die Größe des Ausgangsstroms nicht in die Ausgangsspannung ein wie man an Gl.16.33 erkennt. Wenn der Ausgangsstrom klein wird, sinkt der Strom im Transformator periodisch bis auf Null ab wie man in Abb. 16.66 erkennt; die Grenze ist bei einem Ausgangsstrom

$$
I_{a,\min}=\frac{1}{2}\Delta I_s=\frac{1}{2}\frac{\Delta I_p}{\ddot{u}}
$$

erreicht. Bei kleineren Ausgangsströmen muss das Tastverhältnis gemäß Abb. 16.38 reduziert werden, um einen Anstieg der Ausgangsspannung zu verhindern. Wenn man immer im kontinuierlichen Betrieb arbeiten möchte, muss die Induktivität der Primärwicklung daher mindestens den in Gl. 16.22 angegebenen Wert besitzen.

Dass der Sperrwandler keine Speicherdrossel benötigt, ist ein Vorteil, jedoch gleichzeitig auch ein Nachteil, denn der Transformator muss diese Funktion zusätzlich übernehmen. Damit er nicht in die Sättigung geht, muss man ihm einen Luftspalt geben; das reduziert aber die Permeabilität und macht dadurch höhere Windungszahlen erforderlich. Aus diesem Grund setzt man Sperrwandler nur für kleine Leistungen ein.

In Abb. 16.67 ist ein einfaches Beispiel für die praktische Ausführung eines Sperrwandlers dargestellt. Die Netzwechselspannung wird mit dem Brückengleichrichter am Eingang gleichgerichtet. Der Kondensator $C_1$ stellt den Ladekondensator für den Gleichspannungszwischenkreis mit der Spannung $U_e$ dar. Er wird beim Scheitelwert der Netz- spannung aufgeladen.
<!-- page-import:1004:end -->

<!-- page-import:1005:start -->
968  16. Stromversorgung

**Abb. 16.68.** Eintakt-Durchflusswandler

spannung nachgeladen. Da die Innenwiderstände klein sind, treten daher hohe Stromspitzen auf. Sie bedingen viele Oberwellen und einen schlechten Leistungsfaktor. Deshalb ist am Eingang in jedem Fall ein Netzfilter erforderlich, besser noch eine Schaltung zur Leistungsfaktorkorrektur (s. Abschnitt 16.7).

Der Sperrwandler wird hier durch den Transformator und den Leistungstransistor realisiert. Der Pulsbreitenmodulator besteht aus dem Sägezahngenerator und dem nachfolgenden Komparator. Das Stellsignal für die Pulsbreite wird zur Potentialtrennung mit einem Optokoppler übertragen. Der Spannungsregler befindet sich auf der Niederspannungsseite. Der Regelverstärker OV stellt seine Ausgangsspannung so ein, dass $kU_a = U_{ref}$ wird; dann ist:

$$
U_a = \left(1 + \frac{R_2}{R_1}\right) U_{ref}
$$

unabhängig von Nichtlinearitäten des Optokopplers.

Der Pulsbreitenmodulator benötigt eine Betriebsspannung z.B. $U_b = 15\ \mathrm{V}$ bezogen auf Netzmasse. Sie wird mit der Hilfswicklung $w_3$, dem Gleichrichter $D_3$ und dem Ladekondensator $C_4$ erzeugt. Der Widerstand $R_4$ ist nur zum Anlaufen der Schaltung erforderlich; er kann im Betrieb abgeschaltet werden. Das Netzwerk $D_2, C_3, R_5$ stellt ein *Snubber-Netzwerk* dar; es dient zur Begrenzung von Überschwingern, die wegen der Streuinduktivitäten der Transformators auftreten.

### 16.6.1.2 Eintakt-Durchflusswandler

Bei den Durchflusswandlern setzt man zur Energiespeicherung eine separate Speicherdrossel ein. Da die Transformatorwicklungen in Abb. 16.68 gleiche Polung besitzen, wird hier Energie an den Ausgang übertragen solange der Schalter $S$ geschlossen ist. Daher bezeichnet man die Schaltung als Durchflusswandler. Gespeichert wird die Energie in der Speicherdrossel $L$ und nicht in dem Transformator. Der Spannungsverlauf ist in Abb. 16.69 dargestellt. Solange der Leistungsschalter geschlossen ist, liegt an der Primärwicklung die Eingangsspannung $U_e$ und daher an der Sekundärwicklung die Spannung $U_2 = U_e/\ddot{u}$.

Wenn sich der Schalter $S$ öffnet, sperrt $D_2$, und der Strom durch die Speicherdrossel $L$ wird von der Diode $D_3$ übernommen. Die Verhältnisse auf der Sekundärseite sind daher genau dieselben wie bei dem Durchflusswandler in Abb. 16.35 auf S. 949. Daher ergeben sich hier (abgesehen von dem Faktor $\ddot{u}$) dieselben Beziehungen für die Ausgangsspannung und dieselben Gesichtspunkte bei der Dimensionierung der Speicherdrossel und des Glättungskondensators:
<!-- page-import:1005:end -->

<!-- page-import:1006:start -->
16.6 Schaltregler mit Potentialtrennung

969

kontinuierlicher Betrieb

lückender Betrieb

**Abb. 16.69.** Zeitlicher Verlauf von Strom und Spannung im Durchflusswandler. Grau: Magnetisierung und Entmagnetisierung des Transformators

*Eintakt-Durchflusswandler*

$$
U_a = \frac{t_\mathrm{ein}}{t_\mathrm{ein}+t_\mathrm{aus}} \frac{U_e}{\ddot{u}} = \frac{t_\mathrm{ein}}{T} \frac{U_e}{\ddot{u}} = p \frac{U_e}{\ddot{u}}
\qquad \text{für } I_a > I_{a,\min}
\qquad (16.35)
$$

$$
U_{S,\max} = 2U_e
\qquad (16.36)
$$

In dem Augenblick, in dem der Leistungsschalter sperrt, sperrt auch die Diode $D_2$. Ohne weitere Maßnahmen würde die im Transformator gespeicherte Energie dann einen Spannungsimpuls mit extrem hoher Amplitude erzeugen und den Leistungsschalter zerstören. Um dies zu verhindern, gibt man dem Transformator eine zweite Primärwicklung mit derselben Windungszahl wie die erste. Wenn die Spannung an dieser Wicklung bis auf $U_e$ angestiegen ist, wird die Diode $D_1$ leitend. Dadurch wird die Spannung am Schalter auf $U_{S,\max} = 2U_e$ begrenzt. Die im Transformator gespeicherte Magnetisierungsenergie wir jetzt an die Eingangsspannungsquelle zurück geliefert: der Strom $I_e$ in Abb. 16.69 wird in dieser Zeit negativ. Da die Spannung am Transformator in dieser Phase genauso groß ist wie in der Einschaltphase, ist auch die Entmagnetisierungsdauer so groß wie die Einschaltdauer. Aus diesem Grund darf sie nicht größer als 50% der Periodendauer sein ($p < 0{,}5$), weil sich sonst der Transformator nicht vollständig entmagnetisieren könnte. Die Folge wäre, das der Strom durch den Transformator bei jedem Zyklus weiter ansteigen würde. Wie groß die Hauptinduktivität des Transformators ist, hat keinen Einfluss auf die Entmagnetisierungsdauer, sondern bestimmt lediglich den Magnetisierungsstrom. Er muss so klein bleiben, dass der Transformator nicht in die Sättigung geht.

Bei kleinen Ausgangsströmen ($I_a < I_{a,\min}$) sinkt der Strom durch die Speicherdrossel periodisch auf Null ab. Dieser lückende Betrieb ist in Abb. 16.69 ebenfalls dargestellt. Er hängt nur von der Induktivität der Speicherdrossel ab und ist von der Entmagnetisierung des Transformators unabhängig. Damit die Ausgangsspannung in diesem Fall nicht ansteigt, muss die Einschaltdauer auch hier gemäß Abb. 16.38 reduziert werden.
<!-- page-import:1006:end -->

<!-- page-import:1007:start -->
970 16. Stromversorgung

**Abb. 16.70.** Gegentaktwandler mit Parallelspeisung

### 16.6.2 Gegentakt-Wandler

Das Kennzeichen der Gegentaktwandler besteht darin, dass zwei Leistungsschalter im Wechsel eingeschaltet und beide Einschaltphasen zur Energieübertragung genutzt werden.

#### 16.6.2.1 Gegentakt-Wandler mit Parallelspeisung

Wenn man bei dem Eintakt-Durchflusswandler in Abb. 16.68 die Diode $D_1$ durch einen zweiten Schalter ersetzt, gelangt man zu dem Gegentaktwandler in Abb. 16.70. Bei der Schaltung wird ein Zyklus der Dauer $T$ in vier Zeitabschnitte unterteilt. Zuerst wird der Schalter $S_1$ geschlossen. Dadurch wird die Diode $D_1$ leitend, und an der Speicherdrossel $L$ liegt die Spannung $U_3 = U_e/\ddot{u}$. Danach öffnet sich $S_1$ wieder, und alle Spannungen am Transformator sinken auf Null ab. Die Dioden $D_1$ und $D_2$ übernehmen dann je zur Hälfte den Drosselstrom $I_L$.

Im nächsten Zeitabschnitt bleibt der Schalter $S_1$ geöffnet; statt dessen schließt sich der Schalter $S_2$. Dadurch wird $D_2$ leitend und überträgt ebenfalls die Spannung $U_3 = U_e/\ddot{u}$. Wenn $S_2$ wieder sperrt, werden wie im zweiten Zeitabschnitt alle Spannungen am Transformator wieder Null. In Abb. 16.71 sind diese Spannungsverläufe dargestellt.

**Abb. 16.71.** Zeitverlauf im Gegentaktwandler mit Parallelspeisung
<!-- page-import:1007:end -->

<!-- page-import:1008:start -->
16.6 Schaltregler mit Potentialtrennung 971

*Gegentaktwandler*

$$
U_a = \frac{t_{ein}}{t_{ein}+t_{aus}} \frac{U_e}{\ddot{u}} = \frac{t_{ein}}{T} \frac{U_e}{\ddot{u}} = p \frac{U_e}{\ddot{u}}
\qquad \text{für } I_a > I_{a,min}
\qquad (16.37)
$$

$$
U_{S,max} = 2U_e
\qquad (16.38)
$$

Wegen des symmetrischen Betriebs arbeitet der Transformator gleichstromfrei. Dies gilt allerdings nur dann, wenn die Einschaltdauern der Leistungsschalter exakt gleich sind, also $t_{ein1} = t_{ein2}$ ist. Diese Bedingung ist bei der Ansteuerung der Schalter sicherzustellen. Sonst geht der Transformator in die Sättigung, die Ströme werden groß, und die Schalter brennen durch. Die Ansteuerung der Leistungsschalter ist hier sehr einfach, da die beiden Source-Anschlüsse auf Minuspotential liegen.

Die zu den Schaltern parallel liegenden Dioden dienen als Freilaufdioden. Sie können den Strom in der Zeit übernehmen, in der beide Schalter geöffnet sind, um die Energie in den Streuinduktivitäten an den Eingang zurückgeben. In dieser Funktionsweise entsprechen sie der Diode $D_1$ in Abb. 16.68. Wenn man die Schalter mit Leistungsmosfets realisiert, sind diese Dioden bereits in den Transistoren enthalten.

### 16.6.2.2 Gegentakt-Wandler in Halbbrückenschaltung

Bei dem Gegentaktwandler in Abb. 16.72 wird eine Wechselspannung dadurch erzeugt, dass das eine Ende der Primärwicklung zwischen dem Plus- bzw. Minuspol der Eingangsspannung hin und her geschaltet wird, während das andere auf $U_e/2$ liegt. Die Ansteuerung der Leistungsschalter erfolgt auch hier abwechselnd. Der in Abb. 16.73 dargestellte Spannungsverlauf ist dann derselbe wie bei der vorhergehenden Schaltung. Ein Unterschied besteht hauptsächlich darin, dass die Spannung an den Schaltern hier nicht größer als die Eingangsspannung werden kann. Die beiden Dioden, die zu den Schaltern parallel geschaltet sind, stellen das sicher. Wenn ein sich Schalter öffnet, kann der fließende Strom auf die gegenüber liegende Diode kommutieren und dort für eine gewisse Zeit weiter fließen. Bei der Verwendung von Leistungsmosfets sind diese Dioden bereits im Transistor enthalten. Beim Einsatz von IGBTs muss man zusätzliche Freilaufdioden vorsehen.

Da die Spannung $U_3$ in rechteckförmiges Signal mit der Einschaltdauer $t_{ein}$ darstellt, wie man in Abb. 16.73 erkennt, ergibt sich auch hier dieselbe Ausgangsspannung wie bei dem Buck-Converter in Abb. 16.35 wenn man zusätzlich das Übersetzungsverhältnis des Transformators berücksichtigt.

*Halbbrückenwandler*

$$
U_a = \frac{t_{ein}}{t_{ein}+t_{aus}} \frac{U_e}{2\ddot{u}} = \frac{t_{ein}}{T} \frac{U_e}{2\ddot{u}} = p \frac{U_e}{2\ddot{u}}
\qquad \text{für } I_a > I_{a,min}
\qquad (16.39)
$$

$$
U_{S,max} = U_e
\qquad (16.40)
$$

Ein weiterer Vorteil der Schaltung besteht darin, dass der Transformator wegen der kapazitiven Kopplung immer gleichstromfrei ist. Das trifft selbst dann zu, wenn die Einschalt dauern der beiden Schalter nicht exakt gleich lang sind. In diesem Fall verschiebt sich lediglich die Gleichspannung an den Kondensatoren $C_1$ und $C_2$ etwas. Die Konden-
<!-- page-import:1008:end -->

<!-- page-import:1009:start -->
972 16. Stromversorgung

Abb. 16.72. Gegentaktwandler in Halbbrückenschaltung

satoren $C_1$ und $C_2$ setzt man nicht nur dazu ein, um den Transformator gleichstromfrei zu halten — dafür würde auch einer der beiden Kondensatoren ausreichen —, sondern gleichzeitig als Filter- und Speicherkondensatoren für die Eingangsspannung. Ein Nachteil der Schaltung ist, dass der Source-Anschluss des oberen Leistungsschalters die volle Eingangsspannung als Wechselspannung aufweist. Daher benötigt man zur Ansteuerung dieses Schalters einen floating Gatetreiber.

Die prinzipielle Anordnung zur Erzeugung der Steuersignale für einen Gegentaktwandler ist am Beispiel des Halbbrückenwandlers in Abb. 16.72 dargestellt. Die Schaltung basiert auf der Steuerschaltung für den Abwärtswandler in Abb. 16.43. Man erkennt den Operationsverstärker OV, der als Spannungsregler arbeitet. Seine Ausgangsspannung stellt sich so ein, dass $kU_a = U_{ref}$ wird; dann ist:

$$
U_a = \left(1 + \frac{R_2}{R_1}\right) U_{ref}
$$

Da hier meist eine Potentialtrennung erforderlich ist, kann man das Ausgangssignal des Reglers nicht direkt am Pulsbreitenmodulator anschließen. Deshalb wurde hier ein Optokoppler als einfachste Realisierung der Signalübertragung gewählt. Seine Nichtlinearität wirkt sich hier nicht aus, weil er sich im Regelkreis befindet. Das Ausgangssignal des Pulsbreitenkomparators $St$ in Abb. 16.73 muss dann auf die Leistungsschalter $S_1$ und $S_2$ verteilt werden. Dazu dient das Flip-Flop, das bei jeder Taktschwingung toggelt und dadurch einen der beiden Leistungsschalter im Wechsel einschaltet.

Die Hilfsspannung $U_h$ ist zum Betrieb der Steuerschaltung erforderlich, die sich auf Netzpotential befindet. Da die meisten Steuerbausteine lediglich einen niedrigen Anlaufstrom von unter 1 mA benötigen, kann man die Hilfsspannung zunächst mit einem Vor-
<!-- page-import:1009:end -->

<!-- page-import:1010:start -->
16.6 Schaltregler mit Potentialtrennung 973

Abb. 16.73. Signalverlauf im Halbbrückenwandler

widerstand aus der Eingangsspannung gewinnen. Für die Stromversorgung im regulären Betrieb verwendet man meist eine zusätzliche Wicklung auf dem Transformator mit nachfolgendem Gleichrichter, um ausreichende Betriebsströme bereitzustellen.

### 16.6.2.3 Gegentakt-Wandler in Brückenschaltung

Bei dem Vollbrückenwandler in Abb. 16.74 schaltet man beide Seiten der Primärwicklung zwischen dem Plus- und Minuspol der Eingangsspannung um. Wenn das Schalterpaar $S_1, S_4$ eingeschaltet ist wird $U_1 = U_e$, wenn das Schalterpaar $S_2, S_3$ eingeschaltet ist wird $U_1 = -U_e$ wie man in Abb. 16.74 sieht. Im Vergleich zum Halbbrückenwandler in Abb. 16.72 ergibt sich hier an dem Transformator die doppelte Spannung. Die Schaltung eignet sich daher besonders für große Leistungen bis über $100\,\mathrm{kW}$. Die Ausgangsspannung ist hier doppelt so groß wie beim Halbbrückenwandler. Die Spannung an den Schaltern ist auch hier auf die Größe der Eingangsspannung beschränkt. Dies wird durch die 4 Freilaufdioden sichergestellt.

*Brückenwandler*

$$
U_a = \frac{t_{ein}}{t_{ein}+t_{aus}} \frac{U_e}{\ü} = \frac{t_{ein}}{T} \frac{U_e}{\ü} = p\,\frac{U_e}{\ü}
\qquad \text{für } I_a > I_{a,\min}
\qquad (16.41)
$$

$$
U_{S,max} = U_e
\qquad (16.42)
$$

Bei dem Vollbrückenwandler in Abb. 16.74 gibt es mit der Phasenverschiebungsmodulation (Phase Shift Modulation PSM) eine zweite, grundsätzlich andere Möglichkeit zum Betrieb der Schaltung. Hier wird in jedem Brückenzweig eine Wechselspannung mit der Amplitude der Eingangsspannung dadurch erzeugt, dass die beiden Schalter $S_1, S_2$ bzw $S_3, S_4$ im Wechsel eingeschaltet werden wie man in Abb. 16.76 erkennt. Dabei sind die
<!-- page-import:1010:end -->

<!-- page-import:1011:start -->
974 16. Stromversorgung

**Abb. 16.74.** Brückenwandler mit H-Brücke

**Abb. 16.75.** Zeitverlauf im Brückenwandler bei Pulsbreitenmodulation PWM

Einschaltdauern immer konstant gleich der Schwingungsdauer $t_{ein\,1,2} = t_{ein\,3,4} = T$. Eine Modulation wird hier dadurch erreicht, dass die Phase der beiden Ansteuersignale gegeneinander um die Zeit $\Delta t$ verschoben wird. Am Transformator ergibt sich die Spannungsdifferenz $U_1 = U_{S2} - U_{S4}$, die mit dem Signal bei Pulsbreitenmodulation übereinstimmt wie der Vergleich mit Abb. 16.75 zeigt. Die Spannung auf der Sekundärseite nach dem Gleichrichter ist also auch hier ein pulsbreitenmoduliertes Signal mit dem Tastverhältnis:

$$
p \;=\; \frac{\Delta t}{T}
$$

(16.43)

Die Aufgabe eines Phasenverschiebungsmodulators besteht darin, zwei phasenverschobene Steuersignale zu erzeugen, deren Phasenverschiebung von einer Steuerspannung bestimmt wird. Bei der Schaltung in Abb. 16.77 nutzt man die Tatsache aus, dass das Ausgangssignal eines Pulsbreitenmodulators gegenüber dem Sägezahngenerator nicht nur pulsbreitenmoduliert ist, sondern auch eine Phasenmodulation aufweist, wenn man die negativen Flanken in Abb. 16.78 betrachtet. Die gewünschten Ansteuersignale, die hier jeweils für eine ganze Taktperiode konstant sein müssen, erhält man dann dadurch, dass man beide Signale je mit einem Toggle-Flip-Flop herunter teilt. Man erkennt, dass die Zeit der Phasenverschiebung $\Delta t$ hier genauso groß ist wie die Einschaltdauer $t_{ein}$ bei der
<!-- page-import:1011:end -->

<!-- page-import:1012:start -->
16.6 Schaltregler mit Potentialtrennung 975

**Abb. 16.76.** Zeitverlauf im Brückenwandler bei Phasenverschiebungsmodulation PSM

Pulsbreitenmodulation. Aus diesem Grund ergibt sich bei hier dieselbe Ausgangsspannung wie bei der PWM. Das UND-Gatter in Abb. 16.77 dient lediglich dazu, die Synchronisation zwischen den Flip-Flops sicherzustellen.

Ein großer Vorteil der PSM besteht darin, dass die Leistungstransistoren konstant für 50 % der Zeit eingeschaltet werden. Dadurch vereinfacht sich die Ansteuerung der Leistungstransistoren: Man kann einfache Impulsübertrager einsetzen; das wird in Abschnitt 16.6.5.3 noch genauer erläutert. Natürlich darf man einen Schalter einer Halbbrücke erst dann einschalten, wenn der gegenüber liegende Transistor ausgeschaltet hat, da sonst vorübergehend ein Kurzschluss der Eingangsspannung auftritt. Um dies sicher zu stellen verwendet man getrennte Ansteuersignale für die Transistoren, die eine Totzeit von 100 ... 300 ns aufweisen. Dies wurde bei den bisherigen Betrachtungen aus Gründen der Übersichtlichkeit nicht berücksichtigt.

**Abb. 16.77.** Erzeugung der Steuersignale für Phasenverschiebungsmodulation PSM
<!-- page-import:1012:end -->

<!-- page-import:1013:start -->
976  16. Stromversorgung

Abb. 16.78. Zeitverlauf der Steuersignale für Phasenverschiebungsmodulation PSM

## 16.6.3 Resonanzumrichter

In den Leistungsbauelementen der Umrichter sind nennenswerte parasitäre Kapazitäten und Induktivitäten enthalten. Parasitäre Kapazitäten weisen vor allem die Leistungstransistoren auf; hier muss man mit Werten bis $1\ \mathrm{nF}$ rechnen. Parasitäre Induktivitäten ergeben sich durch die Verdrahtung und die Streuinduktivitäten der Transformatoren. Hier muss man mit Werten bis zu $1\ \mu\mathrm{H}$ rechnen. Daraus resultieren Schwingkreise mit störende Resonanzfrequenzen im MHz-Bereich, die Bereich der Taktfrequenzen liegen. Man kann diese Resonanzkreise aber bei dem Entwurf von Schaltnetzteilen berücksichtigen und dann daraus sogar Nutzen ziehen. Die resultierenden Schaltungen heißen Quasi-Resonanz-Umrichter, weil die Resonanzschwingungen nur vorübergehend auftreten und in einem Schaltzyklus angeregt werden und auch wieder abklingen. Der größte Nutzen dieser Technik lässt sich dadurch erreichen, dass man die Leistungstransistoren ein- und ausschaltet während die Spannung oder der Strom an ihnen Null ist, da dann keine Schaltverluste auftreten. Man bezeichnet diese Technik als Zero Voltage Switching (ZVS) bzw. Zero Current Switching (ZCS). Dazu vergrößert man meist die parasitären Kapazitäten und Induktivitäten mit zusätzlichen Kondensatoren und Spulen, um die Resonanzfrequenz auf den optimalen Wert zu reduzieren. Die resultierenden Vorteile sind:

- Die Umschaltverluste der Leistungstransistoren verschwinden
- Die Frequenz der Resonanzschwingungen wird reduziert
- Parasitäre Schwingungen werden mit der Taktfrequenz synchronisiert; das führt zu einer Reduktion der Störstrahlung, die von dem Umrichter ausgeht und reduziert die EMV-Probleme (EMV = ElektroMagnetische Verträglichkeit).
- Die Schaltvorgänge werden langsam; sie werden auf die Resonanzfrequenz reduziert ohne dass dadurch die Verlustleistung steigt

Dem stehen jedoch auch einige Nachteile gegenüber:

- Infolge der Resonanzschwingungen müssen die Leistungsschalter höhere Durchlassströme verarbeiten; dadurch erhöhen sich die Durchlassverluste
- Es ist schwierig, das gewünschte Resonanzverhalten über einen großen Lastbereich zu gewährleisten.

## 16.6.4 Aktive Gleichrichtung

Wenn man mit einem Spannungswandler niedrige Betriebsspannungen erzeugen muss, spielt die Durchlassspannung der Gleichrichter eine wichtige Rolle. Das ist besonders bei Betriebsspannungen im Bereich von $1\ \mathrm{V}$ ein schwieriges Problem. Die Durchlassspannungen infrage kommender Dioden sind in Abb. 16.79 gegenüber gestellt. Man erkennt, dass
<!-- page-import:1013:end -->

<!-- page-import:1014:start -->
16.6 Schaltregler mit Potentialtrennung 977

| Bauteil | Durchlassspannung |
|---|---|
| Silizium-Diode | 1,2 V |
| Si Schottky-Diode | 0,7 V |
| SiC Schottky-Diode | 1,8 V |
| Mosfet | 0,2 V |

**Abb. 16.79.**  
Durchlassspannungen verschiedener Gleichrichter bei hohen Strömen

Si-Schottky-Dioden deutlich günstiger sind als normale Si-Dioden. Aus Sicht des Anwenders sind Schottky-Dioden nichts anders als normale Dioden mit besonders großem Sperrstrom. Dabei nimmt ihre Durchlassspannung mit der Sperrspannung zu; aus diesem Grund sollte man die Sperrspannung nicht höher als erforderlich wählen. Zum Vergleich wurden in der Tabelle noch die neuen Schottky-Dioden aus Silizium-Carbid aufgenommen. Sie bieten lediglich bei hohen Spannungen Vorteile gegenüber normalen Silizium-Dioden, weil sie eine kleinere Speicherladung und eine kürzere Erholzeit (reverse recovery time $t_{rr}$) besitzen.

Einen großen Vorteil bieten aktive Gleichrichter mit Mosfets wie es bereits in Abb. 16.42 bei einem Tiefsetzsteller gezeigt wurde. Mosfets sind mit On-Widerständen von wenigen Milliohm erhältlich; damit erreicht man selbst bei großen Strömen niedrige Durchlassspannungen. Allerdings ist der Einsatz von aktiven Gleichrichtern bei Spannungswandlern mit Potentialtrennung nicht ganz einfach. Zum einen kommen nur n-Kanal Mosfets in Betracht, weil es kaum niederohmige p-Kanal Transistoren gibt. Zum anderen sollten die n-Kanal Mosfets mit der Source an der Masse des Ausgangs liegen, um eine einfache Ansteuerung zu ermöglichen. Dazu müssen die Gleichrichterschaltungen in einem ersten Schritt so umkonfiguriert werden, dass die Anoden der Gleichrichter an Masse angeschlossen sind. Im nächsten Schritt können die Gleichrichter zu Mosfets ergänzt werden. Abbildung 16.80 zeigt diese Vorgehensweise am Beispiel eines Einweggleichrichters für Durchflusswandler, Abb. 16.81 zeigt diese Schritte für Gegentaktwandler, bei dem eine Vollweggleichrichtung erforderlich ist. Wenn man die Mosfets nicht einschaltet, arbeiten die Schaltungen wie die Diodengleichrichter mit der für normale Silizium-Dioden übli-

Einweggleichrichter

Anoden an Masse

Erweiterung der Dioden zu Mosfets

**Abb. 16.80.** Aktiver Einweggleichrichter für Durchflusswandler
<!-- page-import:1014:end -->

<!-- page-import:1015:start -->
978  16. Stromversorgung

Mittelpunktschaltung

$D_1$

$D_2$

$L$

$C$

$U_a$

Anoden an Masse

$D_1$

$D_2$

$L$

$C$

$U_a$

Erweiterung der Dioden zu Mosfets

$T_1$

$T_2$

Mosfet Steuerung

$L$

$C$

$U_a$

**Abb. 16.81.** Aktiver Vollweggleichrichter in Mittelpunktschaltung für Gegentaktwandler

chen Durchlassspannung. Wenn man die Transistoren jedoch einschaltet, verringert sich die Durchlassspannung von 1,2 V auf 0,2 V. Wenn die Dioden leitend werden, werden ihre Kathoden negativ gegenüber Masse. Diese Polung gilt dann auch für die Drain-Elektroden der Mosfets. Deren Funktionsweise wird aber dadurch nicht beeinträchtigt, da sie in der Nähe des Nulldurchgangs einen ON-Widerstand besitzen, der bei kleinen Drainspannungen von der Polung unabhängig ist.

Natürlich muss man die Mosfets in der richtigen Phase einschalten. Dazu verwendet man integrierte Ansteuerschaltungen, die die richtigen Schaltintervalle aus der Trafospannung ableiten. Man kann die Steuersignale für den aktiven Gleichrichter auch von der Primärseite des Schaltreglers beziehen, dafür ist allerdings eine Signalübertragung mit Potentialtrennung erforderlich. Als Betriebsspannung wird in der Regel die Ausgangsspannung verwendet; wenn sie nicht ausreicht, um die Mosfets mit 5 . . . 10 V einzuschalten, kann man eine andere Ausgangsspannung dazu heranziehen. Notfalls muss man eine Hilfsspannung mit einer zusätzlichen Trafowicklung erzeugen.

Brückengleichrichter werden auf der Niederspannungsseite von Schaltreglern nicht eingesetzt, weil dabei zwei Durchlassspannungen als Verlust auftreten. Ein aktiver Brückengleichrichter lässt sich nicht auf einfache Weise realisieren, weil es unmöglich ist, die Schaltung so abzuändern, dass die Anoden aller Dioden an Masse liegen. Zur Ansteuerung der hoch liegenden Mosfets wären in diesem Fall floating Gatetreiber erforderlich. Dagegen lässt sich die zweite Transformator-Wicklung in Abb. 16.81, die bei der Mittelpunktschaltung erforderlich ist, so niederohmig ausführen, dass die Verluste gering bleiben.
<!-- page-import:1015:end -->

<!-- page-import:1016:start -->
16.6 Schaltregler mit Potentialtrennung 979

DMOS (n-Kanal)

IGBT Symbol

IGBT Modell

**Abb. 16.82.** Schaltsymbole. Die Elektroden des IGBT heißen: Gate, Emitter, Kollektor

## 16.6.5 Leistungsschalter

### 16.6.5.1 Leistungstransistoren

Hier sollen die Gesichtspunkte behandelt werden, die bei Leistungsschaltern für hohe Spannungen auftreten, wie man sie bei Gleichstromstellern mit Potentialtrennung benötigt. Am gebräuchlichsten ist hier der Einsatz von Leistungsmosfets, den sogenannten DMOS Transistoren, die in Kapitel 3.2.1.5 beschrieben werden. Allerdings steigt der On-Widerstand der MOS-Transistoren mit zunehmender Drain-Source Durchbruchspannung quadratisch an. Wenn bei hoher Spannung große Ströme geschaltet werden sollen, werden daher große Chipflächen erforderlich, die den Transistor teuer machen. In dieser Beziehung sind IGBTs (Insulated Gate Bipolar Transistor) günstiger. Bipolartransistoren werden wegen der großen Schaltzeiten nicht mehr eingesetzt.

Das Schaltsymbol und das Ersatzschaltbild eines IGBT in Abb. 16.82 zeigt, dass der Strom eines pnp-Transistors am Ausgang von einem Feldeffekttransistor am Eingang gesteuert wird. Dadurch erreicht man bei gleicher Chipgröße etwa die 10-fache Stromtragfähigkeit. Der innere Aufbau eines IGBT in Abb. 16.83 unterscheidet sich von einem DMOS-Transistor hauptsächlich durch eine zusätzliche p-dotierte Schicht. Dadurch entsteht der pnp-Transistor, dessen Basisstrom von dem Fet am Eingang gesteuert wird.

S

Gate

SiO$_2$

Al

n$^+$

p$^+$

n Epitaxie

n$^+$ Substrat

Al

DMOS

D

E

Gate

Fet

Al

n$^+$

p$^+$

n Epitaxie

n$^+$

p$^+$ Substrat

pnp Trans.

Al

IGBT

C

**Abb. 16.83.** Innerer Aufbau von DMOS (n-Kanal) und IGBT im Vergleich. Die hier dargestellte Struktur wiederholt sich periodisch. Im Unterschied zu den Schaltsymbolen ist es hier üblich, das Substrat als unterste Schicht zu zeichnen: Dadurch ist hier der Drain- bzw. Kollektor-Anschluss unten.
<!-- page-import:1016:end -->

<!-- page-import:1017:start -->
980 16. Stromversorgung

Abb. 16.84. Vergleich der Kennlinien von 1000 V-Transistoren. Der IGBT besitzt bei vergleichbarer Chipfläche die 10-fache Stromtragfähigkeit.

Die Kennlinien in Nullpunktnähe sind in Abb. 16.84 gegenüber gestellt. Man sieht, dass der vergleichbare IGBT 10-fache Ströme bei niedrigen Durchlassspannungen verarbeiten kann. Wegen des pn-Übergangs beginnt der Stromfluss erst bei 1 V; im Vergleich zu den Spannungen, die geschaltet werden von 325 V und mehr spielt das aber keine Rolle.

Der typische Ein- und Ausschaltvorgang eines Mosfets und eines IGBTs ist in den Abbildungen 16.85 dargestellt. Solange der Transistor ausgeschaltet ist, fließt der Strom über die Diode und die Spannung am Transistor ist $U_{DS} = U_{CE} = U_e$. Wenn der Transistor eingeschaltet wird, steigt der Strom durch den Transistor zunächst bei konstanter Spannung auf den Wert $I_L$ an. Erst dann sperrt die Diode und die Spannung am Transistor sinkt bis auf die Sättigungsspannung ab. Beim Ausschalten steigt die Spannung am Transistor bei konstantem Strom an bis die Diode wieder leitend wird. Erst dann klingt der Strom durch den Transistor ab und kommutiert auf die Diode.

Die Umschaltverluste entstehen beim Einschalten während der rise time $t_r$ und beim Ausschalten während der fall time $t_f$. Man kann sie leicht abschätzen, wenn man die grau hinterlegten Flächen in Abb. 16.85 als Dreiecke approximiert: $^1$

$$
P = \frac{1}{T} \int_0^T u(t)\, i(t)\, dt \approx U_a\, I_L\, \frac{t_r}{2T} + U_a\, I_L\, \frac{t_f}{2T} = U_a\, I_L\, \frac{t_r + t_f}{2T}
\qquad (16.44)
$$

Darin ist $f = 1/T$ die Schaltfrequenz. Die durch das Schalten bedingte Verlustleistung ist demnach proportional zur Schaltfrequenz. Deshalb sollte man sie nur so hoch wählen wie unbedingt erforderlich. Die Schaltzeiten lassen sich durch schnelles Ein- und Ausschalten am Gate verkürzen. Deshalb setzt man leistungsfähige Gatetreiber ein, die Ströme im Ampere-Bereich liefern, um die Gatekapazität schnell umzuladen. Bei Feldeffekttransistoren erreicht man dadurch Schaltzeiten von 100 ns.

$^1$ Die hier eingezeichnete Last aus einer Stromquelle mit parallelgeschalteter Diode stellt den Normalfall in Umrichtern dar; dabei wird die Stromquelle durch parasitäre Induktivitäten oder durch eine induktive Last gebildet. Die Freilaufdiode übernimmt den Strom, wenn der Transistor ausgeschaltet ist und verhindert Überspannungen durch Streuinduktivitäten beim Abschalten; bei Feldeffekttransistoren in Halbbrücken- oder Brückenschaltung ist sie schon durch den gegenüberliegenden Transistor vorgegeben.
<!-- page-import:1017:end -->

<!-- page-import:1018:start -->
## 16.6 Schaltregler mit Potentialtrennung

981

**Abb. 16.85.** Ein- Ausschaltvorgang eines MOS und IGBT-Leistungsschalters. Die speziellen Massesymbole sollen darauf hinweisen, dass es sich hier nicht um die Schaltungsmasse (= Schutzleiterpotential) handelt, sondern um den Minuspol des Netzgleichrichters.

Hier erkennt man einen schwerwiegenden Nachteil der IGBTs: beim Abschalten sinkt der Strom nach einem kurzen, schnellen Abfall im weiteren Verlauf nur langsam ab. Sie besitzen einen lang andauernden Strom-Schweif, der als *tail current* bezeichnet wird. Seine Dauer lässt sich durch das Gate-Signal nicht verkürzen. Dadurch treten im IGBT hohe Ausschaltverluste auf, die man an der grau hinterlegen Fläche erkennt. Deshalb sind IGBTs nicht für hohe Schaltfrequenzen geeignet; man muss die Schaltleistung aus diesem Grund meist schon bei Frequenzen über $10\,\mathrm{kHz}$ reduzieren.

**Abb. 16.86.** Ein- Ausschaltvorgang eines Leistungsschalters im Ausgangskennlinienfeld
<!-- page-import:1018:end -->

<!-- page-import:1019:start -->
982 16. Stromversorgung

![Abb. 16.87. RCD-Ausschaltentlastungsnetzwerk]

**Abb. 16.87.** *RCD*-Ausschaltentlastungsnetzwerk

Der Verlauf des Ein- und Ausschaltvorgangs bei einem Leistungsschalter im Ausgangskennlinienfeld ist in Abb. 16.86 dargestellt. Als Beispiel ist das Ausgangskennlinienfeld für einen Transistor für 600 V und 5 A dargestellt. Eingezeichnet ist der SOA-Bereich (Safe Operating Area) für Gleichstrom (DC) mit etwa 100 W und für 10 $\mu$s mit etwa 3 kW. Dabei darf man den 10 $\mu$s-Bereich nie überschreiten, auch nicht kurzfristig! Überspannungen, die durch Streuinduktivitäten entstehen können, müssen mit Kondensatoren ausreichend gedämpft werden. Überströme beim Einschalten muss man durch eine reduzierte Einschaltgeschwindigkeit in Grenzen halten.

Bei einem ohmschen Arbeitswiderstand erhält man die Arbeitsgerade im linken Teil der Abb. 16.86. Dieser Fall liegt aber in der Praxis nie vor. Wegen der vorhandenen Induktivitäten ergibt sich die auf der rechten Seite dargestellte Arbeitskennlinie: Beim Einschalten steigt zunächst der Strom bei voller Spannung auf den Maximalwert an, dann erst sinkt die Spannung bei konstantem Strom. Der Ausschaltvorgang läuft nach derselben Kennlinie in umgekehrter Reihenfolge ab: Zuerst steigt die Spannung bei konstantem Strom auf den vollen Wert, dann reduziert sich erst der Strom.

Man kann einen Teil der Ein- und Ausschaltverluste des Leistungsschalters mit einem Entlastungsnetzwerk in eine externe passive Schaltung verlagern. Dies ist am Beispiel des Ausschaltentlastungsnetzwerks (Snubber) in Abb. 16.87 dargestellt. Bei leitendem Transistor wird der Kondensator der *RCD-Beschaltung* über den Widerstand $R$ entladen. Wenn der Transistor sperrt, kommutiert der Strom $I_L$ auf die Diode und lädt den Kondensator $C$ auf. Der Strom durch den Transistor geht sofort auf Null und die Spannung an ihm steigt stromlos an. Der Verlauf dieses Schaltvorgangs ist Ausgangskennlinienfeld in Abb. 16.87 dargestellt. Der Kondensator muss natürlich vor dem nächsten Ausschaltvorgang wieder entladen werden; dazu dient der Widerstand $R$. Man muss ihn so niederohmig dimensionieren, dass der Kondensator auch bei kurzen Einschaltzeiten weitgehend entladen wird. Dadurch erhöht sich der Einschaltstrom für den Leistungsschalter.

Ein zusätzliches Problem ergibt sich durch die Sperrverzögerungszeit (reverse recovery time $t_{rr}$) der Freilaufdiode, die in der Regel wegen des Stroms $I_L$ leitend ist, wenn der Transistor eingeschaltet wird. Sie verhält sich wie ein Kurzschluss bis ihre Speicherladung ausgeräumt ist. Dabei steigt der Drainstrom kurzfristig auf hohe Werte an bei voller Drainspannung. Man sieht in Abb. 16.88, dass sich die Stromspitze reduzieren lässt, wenn
<!-- page-import:1019:end -->

<!-- page-import:1020:start -->
16.6 Schaltregler mit Potentialtrennung 983

**Abb. 16.88.** Überhöhung des Drainstroms beim Einschalten aufgrund der Sperrverzögerungszeit der Freilaufdiode $D$ mit einem Zahlenbeispiel

man den Transistor langsam einschaltet; dazu verwendet man einen Gate-Vorwiderstand $R_G$. Durch das langsame Schalten erhöhen sich zwar die in Abb. 16.88 dargestellten Umschaltverluste, die durch die Freilaufdiode bedingten Verluste reduzieren sich aber. Daraus folgt die Regel:

*Schalte so schnell wie nötig, aber so langsam wie möglich!*

*Richtwert: $P_{Umschalt} = P_{Durchlass}$*

Eine vernünftige Schaltgeschwindigkeit ist die, bei der die Umschaltverluste genauso groß sind wie die Durchlassverluste. Natürlich ist es wichtig, Dioden mit kurzer Sperrverzögerungszeit einzusetzen. In dieser Beziehung sind die Silizium-Carbid Schottky-Dioden besonders günstig. Besonders schlecht sind meist die parasitären Dioden in Leistungsmosfets, allerdings gibt es hier spezielle Typen mit verkürzter Erholzeit (Fredfet).

## 16.6.5.2 Gatetreiber ohne Potentialtrennung

Um die Anforderungen an einen Gatetreiber zu erklären, ist der Einschaltvorgang eines Mosfet in Abb. 16.89 schematisch dargestellt. Die Gate-Source- und Drain-Gate-Kapazität sind hier separat eingezeichnet, um ihren Ladevorgang zu untersuchen. Die Gate-Source Kapazität ist meist die größte Kapazität, die Drain-Gate Kapazität ist stark spannungsabhängig. Hier ein Beispiel:

$$
C_{GS} = 4\,\mathrm{nF}
$$

$$
C_{DG} =
\begin{cases}
0{,}1\,\mathrm{nF} & \text{für } U_{DS} > U_{GS} \\
2\,\mathrm{nF} & \text{für } U_{DS} \leq U_{GS}
\end{cases}
$$
<!-- page-import:1020:end -->

<!-- page-import:1021:start -->
984  16. Stromversorgung

**Abb. 16.89.** Einschalten eines Leistungsmosfets mit konstantem Gatestrom mit Beispielen für die Spannungen. Die Zeitachse stellt wegen des konstanten Gatestroms gleichzeitig eine Achse für die Gateladung dar. Beispiele für die Gateladung sind eingezeichnet.

Der Verlauf des Einschaltvorgangs lässt sich in mehrere Phasen unterteilen:

- $t_0 < t < t_1$: Der Gatestrom wird eingeschaltet; die Gatespannung steigt bis zur Schwellenspannung $U_{th}$ an
- $t_1 < t < t_2$: Der Transistor wird leitend und der Drainstrom steigt bis auf den Wert $I_L$ an. Die Gateladung für $t_0 < t < t_2$ beträgt:

$$
Q_1 = U_0 C_{GS} + U_0 C_{DG} = 6\,\mathrm{V} \cdot 4\,\mathrm{nF} + 6\,\mathrm{V} \cdot 0{,}1\,\mathrm{nF} = 25\,\mathrm{nC}
$$

- $t_2 < t < t_3$: Die Drainspannung sinkt ab; die Miller-Kapazität $C_{DG}$ wird bei konstanter Gatespannung umgeladen. Hier beträgt die Gateladung:

$$
Q_2 = U_b C_{DG} = 500\,\mathrm{V} \cdot 0{,}1\,\mathrm{nF} = 50\,\mathrm{nC}
$$

- $t_3 < t < t_4$: Der weitere Anstieg der Gatespannung reduziert den On-Widerstand und die Durchlassspannung $U_{DS}$. Dabei muss nicht nur die Gate-Source Kapazität, sondern auch die große Drain-Gate Kapazität aufgeladen werden:

$$
Q_3 = (U_{GS,ein} - U_0)(C_{GS} + C_{DG}) = (15\,\mathrm{V} - 6\,\mathrm{V}) \cdot (4\,\mathrm{nF} + 2\,\mathrm{nF}) = 54\,\mathrm{nC}
$$

Insgesamt wird also eine Gateladung

$$
Q_G = Q_1 + Q_2 + Q_3 = 129\,\mathrm{nC}
$$

benötig. Wenn man den Transistor in $t_S = 100\,\mathrm{ns}$ einschalten möchte, ist also ein Gatestrom von

$$
I_G = \frac{Q_G}{t_S} = \frac{129\,\mathrm{nC}}{100\,\mathrm{ns}} = 1{,}29\,\mathrm{A}
$$

erforderlich. Zur Ansteuerung von Leistungsmosfets benötigt man daher leistungsfähige Gatetreiber. Die übliche Technik besteht darin, einen Gegentakt-Treiber gemäß Abb. 16.90 einzusetzen. Gegenüber dem einfachen CMOS-Inverter von Abb. 6.25 benötigt man hier zusätzlich einen Pegelumsetzer, der die logischen Pegel auf die Gatespannung von 15 V
<!-- page-import:1021:end -->

<!-- page-import:1022:start -->
## 16.6 Schaltregler mit Potentialtrennung

985

Abb. 16.90. Aufbau eines Gatetreibers. Zeitdiagramm zur Darstellung der Einschaltverzögerung

(in diesem Beispiel) erhöht. Außerdem muss man hier den sonst üblichen Querstrom beim Umschalten der Endstufe vermeiden; er wäre wegen der hohen Spannung von 15 V und der niederohmigen Transistoren untragbar groß. Dies wird bei den Gatetreibern dadurch erreicht, dass man die Transistoren mit einer Verzögerung einschaltet, die man so groß wählt, dass der gegenüber liegende Transistor zuvor sicher ausgeschaltet ist. Übliche Verzögerungszeiten betragen in Treibern $\Delta t = 30\,\mathrm{ns}$.

Zur Ansteuerung einer Halbbrücke wie in Abb. 16.91 benötigt man zwei Gatetreiber nach dem gezeigten Prinzip. Hier kommt jedoch erschwerend hinzu, dass der obere Leistungstransistor als Sourcefolger betrieben wird. Deshalb ist sein Sourcepotential nicht fest, sondern schaltet mit der Ausgangsspannung. Der obere Gatetreiber muss dieses Potential als Bezugspotential (seine Masse) verwenden, um den Transistor ordnungsgemäß ansteuern zu können. Er benötigt eine schwimmende Betriebsspannungsquelle, die auf dieses Potential bezogen ist. Sie wird bei billigen Lösungen aus der Betriebsspannung des unteren Gatetreibers mit der Diode D und dem Kondensator $C_1$ gewonnen. Wenn die Ausgangsspannung $U_a = 0$ ist, lädt die Diode den Kondensator auf die Hilfsspannung $U_b$ auf. Diese Spannung bleibt auf dem Kondensator als Betriebsspannung erhalten, wenn der obere Leistungstransistor eingeschaltet wird. Voraussetzung für diese Funktionswei-

Abb. 16.91. Halbbrückentreiber bestehend aus einem high-side driver und einem low-side driver zur Ansteuerung von zwei n-Kanal Leistungsmosfets bei Netzspannungen. Die eingetragenen Spannungen sind Beispiele für den eingeschalteten Zustand (oben) und den ausgeschalteten Zustand (unten). Die besonderen Massesymbole sollen auch hier daran erinnern, dass sich diese Masse auf dem Minuspol der gleichgerichteten Netzspannung befindet.
<!-- page-import:1022:end -->

<!-- page-import:1023:start -->
986  16. Stromversorgung

**Abb. 16.92.**  
Transformator zur potentialfreien  
Ansteuerung von Leistungsmosfets

**Abb. 16.93.** Abhängigkeit des Gatesignals vom Tastverhältnis. Die grau hinterlegten Flächen sind bei jedem Tastverhältnis $p$ gleich groß.

se ist natürlich, dass der untere Leistungstransistor periodisch eingeschaltet wird. Diese Methode zur Erzeugung einer Hilfsspannung wurde bereits auf der Niederspannungsseite bei dem Synchrongleichrichter in Abb. 16.42 angewendet. Der Level Shifter muss das Ansteuersignal auf das Sourcepotential des oberen Leistungsschalter transferieren, das in diesem Beispiel zwischen 0 V und 325 V umschaltet. Dazu werden in den integrierten floating Gatetreibern Hochspannungsmosfets eingesetzt.

### 16.6.5.3 Gatetreiber mit Potentialtrennung

Eine Einschränkung der beschriebenen Gatetreiber besteht darin, dass ihr Massepotential auf dem negativen Anschluss des Gleichstrom-Zwischenkreises liegt, der eine Wechselspannung von einigen 100 V gegenüber dem Schutzleiter aufweist. Deshalb ist es wünschenswert, die Regelung und die Erzeugung der Ansteuersignale auf dem Schutzleiterpotential durchzuführen und von dort auf alle Leistungsschalter zu übertragen. Das Problem dabei ist, dass man nicht nur ein Signal übertragen muss, sondern auch eine nennenswerte Energie zum Ansteuern des Leistungsschalters. Da eine potentialfreie Energieübertragung nur mit Transformatoren möglich ist, versucht man gleichzeitig, das Schaltsignal zu übertragen.

Die einfachste Möglichkeit dazu besteht darin, wie in Abb. 16.92 einen Transformator zwischen den Gatetreiber und den Leistungstransistor zu schalten. Auf der Seite des Gatetreibers ist dabei ein Koppelkondensator erforderlich, um zu verhindern, dass der Transformator durch Gleichstrom-Vormagnetisierung in die Sättigung geht. Abbildung 16.93 zeigt, dass natürlich auch die Sekundärseite des Transformators gleichspannungsfrei ist. Dadurch wird die Gatespannung bei kleinem Tastverhältnis gefährlich hoch; bei großem Tastverhältnis reicht die Gatespannung nicht aus, um den Transistor richtig einzuschalten. Deshalb ist diese Methode nur bei einem konstanten Tastverhältnis von 50 % brauchbar, die allerdings lediglich bei der PSM-Modulation auftritt wie Abb. 16.76 zeigt.

Die Nulllinie des Gatesignals lässt sich mit einer Klemmschaltung fixieren, die in Abb. 16.94 hinzugefügt wurde. Die Diode $D$ wird leitend, wenn die Spannung negativ wird und lädt den Kondensator $C_2$ so weit auf, dass sich das Gatesignal $U_{GS}$ ausschließlich
<!-- page-import:1023:end -->

<!-- page-import:1024:start -->
16.6 Schaltregler mit Potentialtrennung 987

Gate treiber

$St$

$C_1$

0/15V

$U_2$

Klemmschaltung

$C_2$

D

$R_2$

$R_1$

$U_{GS}$

Schutzleiterpotential

Potentialfrei

**Abb. 16.94.** Klemmschaltung zur Fixierung der Nulllinie

$U_{GS}$

15V

0V

-15V

$t$

$p = 0{,}5 = 50\%$

$U_{GS}$

15V

0V

-15V

$t$

$p = 0{,}25 = 25\%$

$U_{GS}$

15V

0V

-15V

$t$

$p = 0{,}75 = 75\%$

**Abb. 16.95.** Gatesignal mit Klemmschaltung

im positiven Bereich bewegt. Dadurch wird die Nulllinie des in Abb. 16.95 dargestellten Gatesignals unabhängig vom Tastverhältnis.

Ein potentialfreier Gatetreiber lässt sich nur dann kompromisslos entwerfen, wenn man auch eine potentialfreie Stromversorgung hinzufügt wie in Abb. 16.96. Hier bildet der obere Teil der Schaltung bestehend aus Oszillator, Transformator und Gleichrichter die potentialfreie Stromversorgung. Der untere Teil der Schaltung überträgt das Steuersignal. Zur isolierten Signalübertragung ist hier als Beispiel ein Transformator eingezeichnet. Da hier eine potentialfreie Stromversorgung zur Verfügung steht, ist aber auch eine Signalübertragung mit einem Optokoppler oder einem Lichtleiter möglich.

Wenn man schon den zusätzlichen Aufwand für eine potentialfreie Stromversorgung in Kauf nimmt, dann fügt man meist auch weitere Schaltungen zur Überwachung des Leistungsschalters hinzu. Dabei ist die wichtigste Größe eine Stromüberwachung. Um einen wirksamen Schutz zu erreichen, muss der Leistungstransistor bei Überstrom in wenigen Mikrosekunden abgeschaltet werden. Das lässt sich mit der erforderlichen Geschwindigkeit nur innerhalb des Gatetreibers bewerkstelligen. Ein Problem stellt dabei die Strommessung dar:

Oszillator

$U_b$

Gleich-
richter

Coder

$St$

Decoder

Gate-
treiber

$R_1$

$U_{GS}$

Schutzleiterpotential

Isolation

Potentialfrei

**Abb. 16.96.** Potentialfreier Gatetreiber mit isolierter Stromversorgung
<!-- page-import:1024:end -->

<!-- page-import:1025:start -->
988  16. Stromversorgung

**Abb. 16.97.** Ansteuerung einer Brücke mit potentialfreien Gatetreibern. Die grau hinterlegten Teile der Schaltung befinden sich auf Schutzleiterpotential, die Leistungsteile sind auf Netzpotential. Die doppelte Trennlinie in den Gatttreibern soll auf eine Potentialtrennung hinweisen.

– Ohmsche Widerstände besitzen eine nennenswerte Induktivität, besonders wenn sie niederohmig sind. Deshalb misst man damit nicht den Strom, sondern die bestenfalls Stromanstiegsgeschwindigkeit.  
– Stromwandler nach dem Transformator-Prinzip sind eine gute Alternative; sie müssen aber ausreichend Zeit zur Entmagnetisierung erhalten.  
– Stromwandler mit Hallelementen sind zu langsam und zu teuer  
– Man kann aber den Leistungstransistor selbst zur Stromüberwachung heranziehen. Im Normalbetrieb muss die Spannung an dem Leistungstransistor spätestens $1 \ldots 2\,\mu\text{s}$ nach dem Einschalten auf Werte von wenigen Volt abgesunken sein. Wenn das nicht der Fall ist, liegt ein Fehler vor; meist ein Überstrom, vielleicht sogar Lastkurzschluss. Diese Methode der Stromüberwachung heißt Sättigungsüberwachung; der Begriff stammt noch aus den Zeiten, als Bipolartransistoren als Leistungsschalter eingesetzt wurden.

Wenn die Sättigungsüberwachung einen Fehler festgestellt hat, besteht meist noch genug Zeit, um den Leistungstransistor abzuschalten, bevor er durchbrennt. Allerdings muss man bei einer Schnellabschaltung bei hohem Strom sicherstellen, dass keine hohen Überspannungen auftreten aufgrund parasitärer Induktivitäten. Wenn es zu einer Notfall-Abschaltung kommt, sollte man das auch dem steuernden Schaltungsteil auf Schutzleiterpotential mitteilen, um eventuell Konsequenzen für die übrigen Leistungsschalter einzuleiten. Dazu verwendet man meist einen weiteren isolierten Signalpfad, der genauso realisiert wird wie der für das Steuersignal nur in umgekehrter Richtung.

Der Einsatz von potentialfreien Gatetreibern ist in Abb. 16.97 am Beispiel einer Vollbrückenwandlers dargestellt. Jedem Schalter ist ein Gatetreiber zugeordnet, der sich auf dem jeweiligen Source-Potential befindet. Der Eingang aller Gatetreiber liegt auf Schutzleiterpotential, also auf der üblichen Schaltungsmasse. Deshalb ist es hier möglich, einen Mikrocontroller direkt mit dem Steuersignalgenerator zu verbinden oder die Steuersignale mit dem Mikrocontroller selbst zu erzeugen. Man sieht, dass hier alle Leistungsschalter gleichberechtigt angesteuert werden. Die Potentialdifferenz zwischen der Schaltungs- und Netzmasse, die in der Regel gleich der Netzwechselspannung ist, wird hier durch die potentialfreien Gatetreiber überbrückt. An den oberen Gatetreibern ist zusätzlich zur
<!-- page-import:1025:end -->

<!-- page-import:1026:start -->
16.6 Schaltregler mit Potentialtrennung 989

Abb. 16.98.  
Auswirkung des Skin-Effekts: Eindringtiefe als Funktion der Frequenz

Netzwechselspannung die hochfrequente Ausgangsspannung überlagert; deshalb darf die Signalübertragung selbst durch hochfrequente Wechselspannungen mit hoher Amplitude nicht gestört werden. Gute Gatetreiber besitzen eine Spannungsanstiegstoleranz von $dU/dt = 10\,\mathrm{kV}/\mu\mathrm{s}$. Die in Abb. 16.91 dargestellten high-side Treiber müssen dagegen immer mit dem Minuspol des Leistungsstromkreises verbunden sein; sie eignen sich deshalb für die hier dargestellte Anwendung nicht.

## 16.6.6 Hochfrequenztransformatoren

Speicherdrosseln werden in großer Vielfalt im Handel angeboten. Es sind Typen mit Induktivitäten von $1\,\mu\mathrm{H}$ bis $10\,\mathrm{mH}$ und für Ströme von $0,1\,\mathrm{A}$ bis $60\,\mathrm{A}$ von verschiedenen Herstellern erhältlich. Daher gibt es für den Anwender kaum eine Notwendigkeit, sie selber zu wickeln. Anders ist es bei den Hochfrequenztransformatoren. Dabei ist es ein Zufall, wenn man einen fertigen Transformator mit den passenden Wickeldaten erhält. Daher muss der Anwender die Transformatoren meist selbst berechnen und bei kleinen Stückzahlen auch selbst wickeln.

Die in einem Transformator induzierte Spannung beträgt nach dem Induktionsgesetz:

$$
U = w\,\dot{\Phi} = w\,A_e\,\dot{B}
$$

(16.45)

Darin ist $\Phi$ der magnetische Fluss, $B$ die magnetische Induktion und $A_e$ die Querschnittsfläche des Kerns, der den Spulenkörper durchsetzt. Für die Primärwindungszahl $w_1$ folgt aus Gl. (16.45):

$$
w_1 = \frac{U_1}{A_e\dot{B}} = \frac{U_1}{A_e}\,\frac{\Delta t}{\Delta B}
$$

Die minimale Windungszahl ergibt sich mit $\Delta B = \hat{B}$, dem zugelassenen Scheitelwert der magnetischen Induktion und dem Maximalwert von:

$$
\Delta t = t_{ein,max} = p_{max}T = \frac{p_{max}}{f} = \frac{1}{2f}
$$

Daraus folgt:

$$
w_1 = \frac{U_1}{2A_e\hat{B}f}
$$

(16.46)

Man erkennt, dass die erforderliche Windungszahl umgekehrt proportional zur Frequenz ist. Deshalb ist die Leistung, die sich bei einem gegebenen Kern und damit auch einem gegebenen Wickelraum übertragen lässt, proportional zur Frequenz. Die Windungszahl auf der Sekundärseite ergibt sich aus dem Spannungsverhältnis:
<!-- page-import:1026:end -->

<!-- page-import:1027:start -->
990  16. Stromversorgung

| Kern-Typ (Seitenlänge) [mm] | Übertragbare Leistung bei 20kHz | Magnetischer Querschnitt $A_e$ | Induktivitäts-Faktor $A_L$ |
|---|---:|---:|---:|
| EC 35 | 50 W | 71 mm$^2$ | 2,1 $\mu$H |
| EC 41 | 80 W | 106 mm$^2$ | 2,7 $\mu$H |
| EC 52 | 130 W | 141 mm$^2$ | 3,4 $\mu$H |
| EC 70 | 350 W | 211 mm$^2$ | 3,9 $\mu$H |

*Empfohlene Maximalinduktion:* $\hat{B} = 200\,\mathrm{mT} = 2\,\mathrm{kG}$  
*Induktivität:* $L = A_L w^2$

**Abb. 16.99.** Ferroxcube-Kerne für Hochfrequenztransformatoren

$$
w_2 = w_1 \frac{U_2}{U_1} = \frac{w_1}{\ddot{u}}
$$

(16.47)

Die auftretenden Magnetisierungs- und Kupferverluste lassen sich meist so klein halten, dass man sie nicht berücksichtigen muss.

Die Drahtdurchmesser ergeben sich aus den fließenden Strömen. Man kann aus thermischen Gründen Stromdichten bis $J = 5\dots 7\,\mathrm{A/mm^2}$ zulassen. Wenn man die Kupferverluste klein halten will, sollte man allerdings bei niedrigeren Werten bleiben. Für den Drahtdurchmesser ergibt sich:

$$
D = 2 \sqrt{\frac{I}{\pi J}}
$$

(16.48)

Allerdings fließt der Strom bei höheren Frequenzen aufgrund des *Skin-Effekts* nicht mehr gleichmäßig durch den ganzen Querschnitt, sondern nur noch an der Oberfläche des Drahtes. Für die Eindringtiefe (Abfall auf $1/e$) des Stroms gilt:

$$
\delta = \frac{2{,}2\,\mathrm{mm}}{\sqrt{f/\mathrm{kHz}}}
$$

(16.49)

Man erkennt in Abb. 16.98, wie die Eindringtiefe mit zunehmender Frequenz abnimmt. Aus diesem Grund ist es nicht sinnvoll, den Drahtdurchmesser größer als die doppelte Eindringtiefe zu wählen. Um trotzdem die erforderlichen Querschnitte zu erreichen, kann man Hochfrequenzlitzen verwenden, bei denen die einzelnen Fasern gegeneinander isoliert sind. Günstig ist auch der Einsatz von Flachkabeln oder Kupferfolien, die entsprechend dünn sind.

Die wichtigsten Daten von einigen EC-Kernen aus Ferroxcube sind in Abb. 16.99 zusammengestellt. Dabei stellt die übertragbare Leistung nur einen groben Richtwert dar. Wenn man den Drahtdurchmesser stark überdimensioniert, um die Verluste klein zu halten, kann es sein, dass man den nächstgrößeren Kern benötigt, um ausreichenden Wickelraum zu erhalten. Ein Programm zur Berechnung und Simulation von Drosseln und Transformatoren ist der *Magnetic Designer* von Intusoft (intusoft.com). Es berechnet nicht nur die Wickeldaten, sondern liefert auch Modelle der Transformatoren für die Schaltungssimulation.
<!-- page-import:1027:end -->

<!-- page-import:1028:start -->
16.6 Schaltregler mit Potentialtrennung 991

Statische Verluste:
Stromaufnahme der Ansteuerschaltung  
Durchlassverluste der Schalter  
Durchlassverluste der Dioden

Dynamische Verluste:
Umschaltverluste der Schalter  
Magnetisierungsverluste  
Dämpfung von Überschwingern

Kupfer-Verluste:
HF-Transformator  
Speicherdrossel

**Abb. 16.100.** Frequenzabhängigkeit der Verluste in einem Schaltregler

## 16.6.7 Verlustanalyse

Es gibt drei Arten von Verlusten, die den Wirkungsgrad eines Schaltreglers bestimmen. Die *statischen Verluste* resultieren aus dem Stromverbrauch des Impulsbreitenmodulators und der Treiber, sowie den Durchlassverlusten der Leistungsschalter und des Ausgangsgleichrichters. Sie sind unabhängig von der Schaltfrequenz. Die *dynamischen Verluste* entstehen als Umschaltverluste in den Leistungsschaltern und als Magnetisierungsverluste im HF-Transformator und in der Speicherdrossel. Sie sind näherungsweise proportional zur Schaltfrequenz. Die *Kupferverluste* im HF-Transformator und in der Speicherdrossel ergeben sich aus dem Spannungsabfall am ohmschen Widerstand der Wicklungen. Da man nach Gl. (16.46) mit zunehmender Frequenz mit weniger Windungen auskommt, sind diese Verluste umgekehrt proportional zur Frequenz.

In Abb. 16.100 sind die drei Verlustquellen in Abhängigkeit von der Frequenz aufgetragen. Der sinnvolle Arbeitsbereich liegt zwischen 20 kHz und 1 MHz. Bei hohen Frequenzen werden zwar die magnetischen Bauteile leichter und kleiner, die dynamischen Verluste überwiegen jedoch in diesem Bereich so stark, dass die Gesamtverluste zunehmen.

Ein zusätzliches Problem sind die Überschwinger, die beim Ausschalten der Leistungsschalter entstehen. Sie entstehen durch den Spannungsabfall an den Streuinduktivitäten des HF-Transformators und der Schaltungsverdrahtung. Um sie klein zu halten, sollte man alle Leitungen im Leistungsstromkreis so kurz wie möglich halten. Trotzdem können selbst bei kleinen Streuinduktivitäten hohe Überschwinger entstehen, wenn man schnell schaltet. Dies zeigt folgendes Zahlenbeispiel:

$$
U = L_{Streu} \frac{\Delta I}{\Delta t} = 100\,\mathrm{nH} \cdot \frac{1\,\mathrm{A}}{100\,\mathrm{ns}} = 100\,\mathrm{V}
$$

Um dadurch nicht die Leistungsschalter zu gefährden, benötigt man ein zusätzliches Entlastungsnetzwerk (*Snubber-Netzwerk*), das aber zusätzliche dynamische Verluste verursacht. Außerdem sollte man nicht schneller schalten als notwendig.
<!-- page-import:1028:end -->
