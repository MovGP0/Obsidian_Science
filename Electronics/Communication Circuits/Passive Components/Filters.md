# Filters

<!-- page-import:1326:start -->
23.2 Filter 1289

Abb. 23.5. Betrag der Impedanz von SMD-Kondensatoren der Baugröße 1206 mit $R_C = 0{,}2\,\Omega$ und $L_C = 3\,\mathrm{nH}$

## 23.2 Filter

Neben Verstärkern und Mischern gehören Filter zu den wichtigsten Komponenten nachrichtentechnischer Systeme. Mit Ausnahme der Filter im niederfrequenten Basisbandteil sind die Filter passiv; aktive Filter sind für die üblichen ZF- und HF-Frequenzen nur in Ausnahmefällen geeignet. Die klassischen LC-Filter werden in zunehmendem Maße durch dielektrische Filter oder Oberflächenwellenfilter (SAW-Filter) ersetzt; dies gilt vor allem für Anwendungen mit hohen Stückzahlen, bei denen kunden- oder applikationsspezifische Filter verwendet werden. Der wesentliche Vorteil der dielektrischen und SAW-Filter liegt darin, dass es sich bei diesen Filtern um ein Bauteil handelt, dass vom Hersteller unter Einhaltung der zulässigen Toleranzen geliefert wird und deshalb auch in Anwendungen mit hohen Genauigkeitsanforderungen ohne Abgleich eingesetzt werden kann; im Gegensatz dazu werden LC-Filter aus mehreren Bauteilen zusammengesetzt und können

a SMD-Spule mit $L = 100\,\mathrm{nH}$

b SMD-Kondensator mit $C = 10\,\mathrm{pF}$

Abb. 23.6. Typischer Verlauf des Reflexionsfaktors bei SMD-Spulen und SMD-Kondensatoren der Baugröße 1206
<!-- page-import:1326:end -->

<!-- page-import:1327:start -->
1290  23. Passive Komponenten

a Tiefpass

b Bandpass

**Abb. 23.7.** LC-Filter

nur in unkritischen Anwendungen ohne Abgleich eingesetzt werden. Bei SAW-Filtern kommt als weiterer, in vielen Anwendungen unverzichtbarer Vorteil die nahezu konstante Gruppenlaufzeit hinzu, die unabhängig vom Betragsverlauf erzielt werden kann.

### 23.2.1 LC-Filter

LC-Filter werden meist mit Hilfe von Filterkatalogen entworfen. Dabei muss zunächst eine geeignete Filtercharakteristik (Butterworth, Thompson, Tschebyscheff, etc.) ausgewählt werden, mit der die Anforderungen an den Betragsverlauf, die Gruppenlaufzeit und die Flankensteilheit erfüllt werden können. Anschließend wird der erforderliche Filtergrad ermittelt. Die Filterstrukturen und die normierten Bauteilewerte für die Filter sind in den Filterkatalogen angegeben, z.B. in [23.3].

Tiefpass-Filter haben in den meisten Fällen die in Abb. 23.7a gezeigte Abzweig-Struktur und werden direkt entworfen. Im Gegensatz dazu wird bei Bandpass-Filtern zunächst ein äquivalentes Tiefpass-Filter mit den gewünschten Eigenschaften ermittelt, das anschließend mit einer Tiefpass-Bandpass-Transformation in das entsprechende Bandpass-Filter überführt wird; dabei erhält man aus der Tiefpass-Struktur in Abb. 23.7a die Bandpass-Struktur in Abb. 23.7b [23.3]. Dieses Verfahren führt nicht immer zum Erfolg, da die Tiefpass-Bandpass-Transformation auf einer nichtlinearen Abbildung der Frequenzachse basiert; dadurch ändert sich der Verlauf der Gruppenlaufzeit.

#### 23.2.1.1 Zweikreisiges Bandfilter

Beim Entwurf eines Senders oder Empfängers kann man durch geeignete Wahl der ZF-Frequenzen in den meisten Fällen auf Standard-ZF-Filter zurückgreifen; dagegen muss man die HF-Filter entsprechend der vorgeschriebenen Sende- bzw. Empfangsfrequenz ausführen. Wenn keine Standard-Filter zur Verfügung stehen und keine hohen Stückzahlen benötigt werden, wird das in Abb. 23.8 gezeigte zweikreisige Bandfilter verwendet; es entspricht seinen Eigenschaften nach einem zweikreisigen dielektrischen Filter.

Wir beschränken uns im folgenden auf den symmetrischen Fall mit $R_g = R_L = Z_W$, $L_1 = L_2 = L$ und $C_1 = C_2 = C$. Zunächst werden die Resonanzfrequenz

$$
f_r = \frac{1}{2\pi\sqrt{L(C + C_{12})}}
$$

(23.13)
<!-- page-import:1327:end -->

<!-- page-import:1328:start -->
23.2 Filter 1291

**Abb. 23.8.**  
Zweikreisiges Bandfilter

und die Resonanzgüte

$$
Q_r = Z_W \sqrt{\frac{C + C_{12}}{L}}
$$

definiert. Daraus erhält man mit der Verstimmung

$$
v = Q_r \left(\frac{\omega}{\omega_r} - \frac{\omega_r}{\omega}\right)
= Q_r \left(\frac{f}{f_r} - \frac{f_r}{f}\right)
$$

(23.14)

und dem Koppelfaktor

$$
k = \omega_r C_{12} Z_W = 2\pi f_r C_{12} Z_W
$$

(23.15)

die Betriebsübertragungsfunktion [23.1]

$$
A_B(j\,v) = \frac{U_a(j\,v)}{U_g(j\,v)} = \frac{jk}{1 + k^2 - v^2 + 2j\,v}
$$

(23.17)

mit dem Betragsquadrat (= Leistungsübertragungsfunktion):

$$
|A_B(j\,v)|^2 = \frac{k^2}{(1 + k^2)^2 + (2 - 2k^2)\,v^2 + v^4}
$$

(23.18)

Die Verstimmung $v$ tritt hier an die Stelle der Kreisfrequenz $\omega$; deshalb wird als Argument $j\,v$ anstelle von $j\,\omega$ verwendet. Der Übergang von $\omega$ bzw. $f$ auf $v$ gemäß (23.15) entspricht einer Bandpass-Tiefpass-Transformation; deshalb ist $A_B(j\,v)$ die Übertragungsfunktion des äquivalenten Tiefpass-Filters.

Bei der Berechnung der Gruppenlaufzeit muss man von der Kreisfrequenz $\omega$ ausgehen und den nichtlinearen Zusammenhang zwischen $\omega$ und der Verstimmung $v$ berücksichtigen; es gilt:

$$
\tau_{Gr}(\omega) = - \frac{d}{d\omega} \left[\arctan \frac{\operatorname{Im}\{A_B(j\,\omega)\}}{\operatorname{Re}\{A_B(j\,\omega)\}}\right]
$$

$$
= - \frac{d}{dv} \left[\arctan \frac{\operatorname{Im}\{A_B(j\,v)\}}{\operatorname{Re}\{A_B(j\,v)\}}\right] \frac{dv}{d\omega}
$$

Eine Berechnung unter Verwendung von (23.17) und (23.15) führt auf das Ergebnis:

$$
\tau_{Gr}(\omega) =
\frac{2\,(v^2 + k^2 + 1)}{(v^2 - k^2 - 1)^2 + 4v^2}
\cdot \frac{Q_r}{\omega_r}
\left(1 + \left(\frac{\omega_r}{\omega}\right)^2\right)
$$

(23.19)

Dabei hängt $v$ gemäß (23.15) ebenfalls von $\omega$ ab.

Abbildung 23.9 zeigt den Betragsfrequenzgang eines zweikreisigen Bandfilters mit einer Mittenfrequenz $f_M = 433{,}4\,\mathrm{MHz}$ und einer Bandbreite $B = 10\,\mathrm{MHz}$ für verschiedene Koppelfaktoren $k$; Abb. 23.10 zeigt eine Vergrößerung des Durchlassbereichs und
<!-- page-import:1328:end -->

<!-- page-import:1329:start -->
1292  23. Passive Komponenten

**Abb. 23.9.** Betragsfrequenzgang eines zweikreisigen Bandfilters mit $f_M = 433{,}4\,\mathrm{MHz}$ und $B = 10\,\mathrm{MHz}$ für verschiedene Koppelfaktoren $k$

den Verlauf der Gruppenlaufzeit. Auf den Zusammenhang zwischen der Mittenfrequenz $f_M$ und der Resonanzfrequenz $f_r$ gehen wir im Zusammenhang mit der Dimensionierung des Filters noch näher ein.

Aus (23.18) kann man drei Fälle ableiten:

- **Kritische Kopplung ($k = 1$):** Das Bandfilter hat einen maximal flachen Betragsverlauf, da das äquivalente Tiefpass-Filter in diesem Fall eine Butterworth-Charakteristik hat, wie ein Vergleich mit (12.25) auf Seite 800 zeigt:

$$
|A_B(j\nu)|^2 = \frac{1}{4+\nu^4}
$$

Der Betrag wird bei der Resonanzfrequenz maximal:

$$
A_{B,max} = |A_B(j\,0)| = \frac{1}{2}
$$

Dem entspricht eine Dämpfung von 6 dB. Die $-3$-dB-Grenzfrequenzen mit einer Dämpfung von 9 dB liegen bei einer Verstimmung $\nu = \pm\sqrt{2}$.

$$
|A_B(\pm j\sqrt{2})| = \frac{A_{B,max}}{\sqrt{2}} = \frac{1}{2\sqrt{2}}
$$

In der Praxis wird die kritische Kopplung häufig verwendet, da sie einen guten Kompromiss zwischen möglichst hoher Flankensteilheit beim Übergang in den Sperrbereich und möglichst flachem Verlauf der Gruppenlaufzeit im Durchlassbereich bietet.

- **Überkritische Kopplung ($k > 1$):** Der Betragsverlauf weist zwei Maxima mit

$$
A_{B,max} = \left|A_B\left(\pm j\sqrt{k^2-1}\right)\right| = \frac{1}{2}
$$

auf, die zu beiden Seiten eines lokalen Minimums bei der Resonanzfrequenz liegen:
<!-- page-import:1329:end -->

<!-- page-import:1330:start -->
23.2 Filter 1293

Abb. 23.10. Betragsfrequenzgang und Gruppenlaufzeit eines zweikreisigen Bandfilters mit $f_M =$ 433,4 MHz und $B =$ 10 MHz im Durchlassbereich für verschiedene Koppelfaktoren $k$

$$
A_{B,0} = |A_B(j\,0)| = \frac{k}{1+k^2} < \frac{1}{2}
\qquad \text{für } k > 1
$$

Das äquivalente Tiefpass-Filter hat eine Tschebyscheff-Charakteristik mit der Welligkeit:

$$
w = \frac{A_{B,max}}{A_{B,0}} = \frac{1+k^2}{2k} > 1
\qquad \text{für } k > 1
$$

Abbildung 23.11 zeigt die Welligkeit in Abhängigkeit vom Koppelfaktor. Die -3dB-Grenzfrequenzen liegen bei einer Verstimmung $\nu = \pm \sqrt{2}\,k$; sie sind hier allerdings auf den Betragsquadrat-Mittelwert aus dem Maximalwert und dem lokalen Minimum bei der Mittenfrequenz bezogen:

$$
|A_B\;(\pm j\sqrt{2}k)| =
\frac{\sqrt{\frac{1}{2}\left(A_{B,max}^2 + A_{B,0}^2\right)}}{\sqrt{2}}
= \frac{1}{4}\sqrt{1+\frac{1}{w^2}}
$$

Deshalb ist die zugehörige Dämpfung größer als 9 dB. Die überkritische Kopplung wird in der Praxis immer dann angewendet, wenn eine hohe Flankensteilheit beim Übergang in den Sperrbereich benötigt wird; dies geht allerdings zu Lasten der Gruppenlaufzeit, die für $k > 1$ eine ausgeprägte Welligkeit aufweist.
<!-- page-import:1330:end -->

<!-- page-import:1331:start -->
1294  23. Passive Komponenten

**Abb. 23.11.**  
Welligkeit eines zweikreisigen Bandfilters mit überkritischer Kopplung

- **Unterkritische Kopplung ($k < 1$):** Der Betragsverlauf hat wie bei der kritischen Kopplung ein Maximum bei der Mittenfrequenz; die zugehörige Dämpfung ist hier jedoch größer als 6 dB:

$$
A_{B,max} \;=\; \frac{k}{1+k^2} \;<\; \frac{1}{2}
\qquad \text{für } k<1
$$

Zu beiden Seiten des Maximums fällt der Betrag schneller ab als bei kritischer Kopplung. Das äquivalente Tiefpass-Filter hat für $k \approx 0{,}6$ eine Bessel-Charakteristik. Die unterkritische Kopplung wird angewendet, wenn eine möglichst konstante Gruppenlaufzeit über den gesamten Durchlassbereich benötigt wird. Dies ist nur selten der Fall, da das Filter fast ausschließlich als HF-Filter in Sendern und Empfängern verwendet wird; dann ist die Bandbreite des Filters wesentlich größer als die Bandbreite eines Kanals und die Schwankung der Gruppenlaufzeit innerhalb eines Kanals selbst bei kritischer oder überkritischer Kopplung ausreichend gering.

Zur Dimensionierung werden die Mittenfrequenz $f_M$ und die -3dB-Bandbreite $B$ benötigt; daraus erhält man die Resonanzfrequenz:

$$
f_r \;=\; \sqrt{f_M^2-\frac{B^2}{4}}
$$

(23.20)

Die Differenz zwischen den beiden Frequenzen ist eine Folge des nichtlinearen Zusammenhangs zwischen der Frequenz $f$ und der Verstimmung $v$, siehe (23.15); deshalb ist der Verlauf der Filterkurven bezüglich der Verstimmung $v$ symmetrisch, bezüglich der Frequenz $f$ jedoch unsymmetrisch. Für die beiden -3dB-Grenzfrequenzen (U/O: untere/obere Grenzfrequenz)

$$
f_U \;=\; f_M-\frac{B}{2}
\;,\qquad
f_O \;=\; f_M+\frac{B}{2}
$$

erhält man durch Einsetzen in (23.15) und anschließendes Umformen:

$$
v_U \;=\; -\frac{Q_r\,B}{f_r}
\;,\qquad
v_O \;=\; \frac{Q_r\,B}{f_r}
$$

Bei den -3dB-Grenzfrequenzen beträgt die Verstimmung $v=\pm\sqrt{2}\,k$, d.h. $v_U=-\sqrt{2}\,k$ und $v_O=\sqrt{2}\,k$; daraus folgt für die Resonanzgüte:

$$
Q_r \;=\; \sqrt{2}\,k\,\frac{f_r}{B}
$$

(23.21)
<!-- page-import:1331:end -->

<!-- page-import:1332:start -->
23.2 Filter 1295

**Abb. 23.12.** Zweikreisiges Bandfilter mit kapazitiver Ankopplung

Durch Einsetzen von $f_r$ nach (23.20) und $Q_r$ nach (23.21) in (23.13), (23.14) und (23.16) erhält man die Dimensionierung der Bauelemente:

$$
L = \frac{Z_W}{2\pi f_r Q_r}, \quad
C = \frac{Q_r-k}{2\pi f_r Z_W}, \quad
C_{12} = \frac{k}{2\pi f_r Z_W}
$$

(23.22)

In Abb. 23.8 gilt dann $L_1 = L_2 = L$ und $C_1 = C_2 = C$.

Bei einem Wellenwiderstand $Z_W = 50\,\Omega$ werden die Induktivitäten $L_1$ und $L_2$ bei hohen Frequenzen sehr klein. In diesem Fall kann man die in Abb. 23.12 gezeigte Variante mit kapazitiver Ankopplung verwenden; dabei muss $n > 1$ gelten. Die Dimensionierung erfolgt ebenfalls mit (23.20)–(23.22), nur in (23.22) wird nun $n^2 Z_W$ anstelle von $Z_W$ eingesetzt; dadurch werden die Induktivitäten um den Faktor $n^2$ größer und die Kapazitäten um denselben Faktor kleiner.

*Beispiel:* Wir dimensionieren im folgenden ein zweikreisiges Bandfilter mit einer Mittenfrequenz $f_M = 433{,}4\,\text{MHz}$, einer 3dB-Bandbreite $B = 10\,\text{MHz}$ und einem Koppelfaktor $k = 1$ für einen Wellenwiderstand $Z_W = 50\,\Omega$. Aus (23.20) und (23.21) erhalten wir $f_r = 433{,}37\,\text{MHz}$ und $Q_r = 61{,}29$; daraus folgt mit (23.22) $L \approx 300\,\text{pH}$, $C \approx 442\,\text{pF}$ und $C_{12} \approx 7{,}3\,\text{pF}$. Die Induktivität ist mit $300\,\text{pH}$ unpraktikabel klein. Deshalb verwenden wir das Filter mit kapazitiver Ankopplung aus Abb. 23.12 und wählen $n$ so, dass wir für $L$ den Normwert $22\,\text{nH}$ erhalten. Da die Induktivitäten um den Faktor $n^2$ größer werden, muss $n^2 \cdot 300\,\text{pH} = 22\,\text{nH}$ gelten; daraus folgt $n^2 \approx 73{,}3$ und $n \approx 8{,}56$. Die Induktivitäten können nun als SMD-Spulen ausgeführt werden. Die Kapazitäten werden um den Faktor $n^2$ kleiner: $C \approx 6\,\text{pF}$ und $C_{12} \approx 0{,}1\,\text{pF}$. Die Kapazität $C$ wird in die beiden Kapazitäten $nC \approx 51{,}7\,\text{pF} = 47\,\text{pF} \parallel 4{,}7\,\text{pF}$ und $nC/(n-1) \approx 6{,}8\,\text{pF}$ aufgeteilt. Die Koppelkapazität $C_{12}$ wird durch eine kapazitive Kopplung zwischen zwei benachbarten Leiterbahnen realisiert.

### 23.2.1.2 Filter mit Leitungen

Bei Frequenzen oberhalb $500\,\text{MHz}$ werden die Induktivitäten und Kapazitäten eines LC-Filters so klein, dass eine Realisierung mit Spulen und Kondensatoren nicht mehr möglich ist. Man muss dann Leitungen verwenden. Da in diesem Bereich ausnahmslos Bandpass-Filter eingesetzt werden, benötigt man zur Realisierung der entsprechenden Filterstruktur in Abb. 23.7b ein Leitungselement mit der Charakteristik eines Serienschwingkreises und ein Element mit der Charakteristik eines Parallelschwingkreises. Dazu eignen sich Leitungen der Länge $\lambda/4$, die an einem Ende leerlaufen oder kurzgeschlossen sind. Beim Entwurf wird die Richards-Transformation verwendet, die eine direkte Berechnung eines Leitungsfilters aus dem äquivalenten Tiefpass-Filter erlaubt. Wir verweisen dazu auf den Abschnitt *Mikrowellenfilter mit Leitungen* in [23.1].
<!-- page-import:1332:end -->

<!-- page-import:1333:start -->
1296  23. Passive Komponenten

a zweipolig

b dreipolig

b vierpolig

≈ $\frac{\lambda}{4}$

2...3 mm

Anschlüsse

Resonator-Bohrungen

**Abb. 23.13. Dielektrische Bandpass-Filter**

## 23.2.2 Dielektrische Filter

Im Frequenzbereich von 800 MHz bis 5 GHz werden Filter mit gekoppelten Resonatoren der Länge $\lambda/4$ eingesetzt; dabei bleibt ein Ende des Resonators offen, während das andere kurzgeschlossen wird. Damit die Abmessungen nicht zu groß werden, wird ein Dielektrikum mit möglichst geringen Verlusten und möglichst hoher relativer Dielektrizitätszahl eingesetzt, um die Wellenlänge von der Freiraumwellenlänge $\lambda_0 = c_0/f$ auf

$$
\lambda = \frac{v}{f} = \frac{c_0}{\sqrt{\epsilon_r}\,f}
$$

zu reduzieren. Die Filter werden deshalb als *dielektrische Filter* bezeichnet. Im Frequenzbereich bis 1 GHz werden Bariumtitanat-Verbindungen mit $\epsilon_r \approx 90$ verwendet; damit beträgt die Länge eines Resonators etwa 8 mm ($\lambda \approx 32$ mm bei $f = 1$ GHz). Bei höheren Frequenzen werden Dielektrika mit geringerer relativer Dielektrizitätszahl eingesetzt.

(23.23)

Ein dielektrisches Bandpass-Filter mit $n$ Resonatoren wird als $n$-poliges Filter bezeichnet. Die Anzahl der Pole bezieht sich auf das äquivalente Tiefpass-Filter, da die Übertragungsfunktion des Bandpass-Filters $2n$ Pole (zwei pro Resonator) hat. Abbildung 23.13 zeigt die typische Bauform handelsüblicher dielektrischer Filter [23.4].

In Abbildung 23.14 ist der Querschnitt durch ein zweipoliges Filter dargestellt. Es besteht aus zwei Resonator-Körpern aus Bariumtitanat, die mit einer axialen Resonator-Bohrung und einer radialen Bohrung zur Ein- bzw. Auskopplung versehen sind. Die Resonator-Körper sind mit Ausnahme der leerlaufenden Seite, der Bohrungen zur Ein- bzw. Auskopplung und einer kleinen Lücke zur kapazitiven Kopplung der Resonatoren metallisiert. Man beachte, dass sich die elektromagnetischen Felder in den Resonator-Körpern ausbreiten; die Resonator-Bohrungen sind feldfrei. Die Länge der Resonatoren ist in der Praxis immer etwas kleiner als $\lambda/4$, da die Felder am offenen Ende in den Außenraum ausgreifen (Streufeld); dadurch ist die elektrische Länge des Resonators größer als die mechanische Länge.

Das Ersatzschaltbild eines zweipoligen dielektrischen Filters entspricht dem Schaltbild des zweikreisigen Bandfilters in Abb. 23.8 bzw. Abb. 23.12. Bei drei- oder mehrpoligen Filtern kommen weitere Parallelresonanzkreise hinzu, die in gleicher Weise kapazitiv gekoppelt sind. Diese Entsprechung gilt jedoch nur für den Durchlassbereich und die angrenzenden Teile des Sperrbereichs, da die Resonatoren bei allen ungeradzahligen Oberwellen ebenfalls eine Parallelresonanz aufweisen; dadurch treten oberhalb des gewünschten Durchlassbereichs weitere Bereiche mit geringer Dämpfung auf.

Dielektrische Filter werden als HF-Filter in Sendern und Empfängern eingesetzt; dabei werden überwiegend zwei- oder dreipolige Filter verwendet. Die geringe Baugröße der Filter ist vor allem für Mobilgeräte wichtig. Abbildung 23.15 zeigt den Betragsfrequenzgang
<!-- page-import:1333:end -->

<!-- page-import:1334:start -->
## 23.2 Filter 1297

Metallisierung

leerlaufendes Ende

Resonator-Bohrung

Lücke zur Kopplung der Resonatoren

Masse

Masse

Eingang

Ausgang

$\approx \dfrac{\lambda}{4}$

Bohrung zur Einkopplung

Resonator-Körper aus Bariumtitanat

Bohrung zur Auskopplung

kurzgeschlossenes Ende

**Abb. 23.14.** Querschnitt eines zweipoligen dielektrischen Bandpass-Filters. Die elektromagnetischen Felder breiten sich in den schraffierten Resonator-Körpern aus; die Bohrungen sind feldfrei.

eines dreipoligen Filters für das amerikanische Mobilkommunikationssystem PCS mit einer Mittenfrequenz $f_M$ = 1,92 GHz und einer Baugröße von 6,5 mm × 4,3 mm × 2 mm [23.4].

$\dfrac{|A|}{\mathrm{dB}}$

0

$-10$

$-20$

$-30$

$-40$

$-50$

$-60$

500M

1G

1,5G

2G

2,5G

3G

$f_M = 1{,}92\,\mathrm{GHz}$

$\dfrac{f}{\mathrm{Hz}}$

**Abb. 23.15.** Betragsfrequenzgang eines dreipoligen dielektrischen Bandpass-Filters mit einer Mittenfrequenz $f_M$ = 1,92 GHz
<!-- page-import:1334:end -->

<!-- page-import:1335:start -->
1298  23. Passive Komponenten

ungewichteter Wandler

gewichteter Wandler

piezoelektrischer Kristall

Grundplatte aus Metall

**Abb. 23.16.**  
Aufbau eines SAW-Filters

## 23.2.3 SAW-Filter

Ein SAW-Filter (*surface acoustic wave filter, Oberflächenwellenfilter, OFW-Filter*) ist ein transversales Filter (FIR-Filter), bei dem die Laufzeit einer akustischen Oberflächenwelle auf einem piezoelektrischen Kristall als Verzögerungsglied dient. Die Anregung der Oberflächenwelle durch ein elektrisches Eingangssignal und ihre Rückwandlung in ein elektrisches Ausgangssignal erfolgt mit piezoelektrischen Wandlern, die aufgrund ihrer kammartig ineinander greifenden Elektroden auch als *Interdigitalwandler* bezeichnet werden. Abbildung 23.16 zeigt den Aufbau eines SAW-Filters mit einem gewichteten und einem ungewichteten Wandler, die durch eine Laufstrecke getrennt sind.

Eine akustische Oberflächenwelle (Rayleigh-Welle) ist eine an der Oberfläche eines Festkörpers geführte elastische Welle, die sich mit einer Geschwindigkeit $v \approx 3000\dots 4000\,\mathrm{m/s}$ ausbreitet. Die Ausbreitungsgeschwindigkeit hängt bei ebenen Oberflächen nicht von der Frequenz der Welle ab, d.h. es tritt keine Dispersion auf; dadurch bleibt die Form der Welle erhalten und die Gruppenlaufzeit ist konstant. Als piezoelektrischer Kristall wird überwiegend Lithiumniobat (LiNbO$_3$) mit $v = 3990\,\mathrm{m/s}$ verwendet; daraus resultieren Wellenlängen zwischen $\lambda = 400\,\mu\mathrm{m}$ bei $f = 10\,\mathrm{MHz}$ und $\lambda = 4\,\mu\mathrm{m}$ bei $f = 1\,\mathrm{GHz}$. Die Elektroden der Wandler haben den Abstand $\lambda/2$ und sind $\lambda/4$ breit; dadurch werden die Abmessungen der Elektroden für Frequenzen oberhalb $1\,\mathrm{GHz}$ kleiner als $1\,\mu\mathrm{m}$. Die maximale Arbeitsfrequenz für SAW-Filter ist demnach durch die minimale Strukturgröße des Herstellungsprozesses gegeben. Derzeit sind SAW-Filter mit Mittenfrequenzen bis zu $400\,\mathrm{MHz}$ verfügbar; dabei wird oberhalb $200\,\mathrm{MHz}$ Quarz anstelle von Lithiumniobat verwendet.

Die Übertragungsfunktion eines SAW-Filters entspricht der Übertragungsfunktion eines Transversal- bzw. FIR-Filters. Die Koeffizienten des Filters ergeben sich aus den Längen der Elektroden der beiden Wandler; da die beiden Wandler nacheinander wirksam werden, muss man dazu das Faltungsprodukt der Elektrodenlängen der beiden Wandler bilden. In der Praxis ist häufig ein Wandler *ungewichtet*, d.h. alle Elektroden haben dieselbe Länge, und der andere *gewichtet*, siehe Abb. 23.16. Abbildung 23.17 erläutert den Zusammenhang zwischen der Geometrie und dem Betragsfrequenzgang.

Die Durchlassdämpfung eines SAW-Filters ist relativ hoch. Der als Sender betriebene Wandler gibt eine Welle in Richtung des empfangenden Wandlers und eine Welle in der Gegenrichtung ab; dadurch geht die Hälfte der Leistung verloren, was einer Dämpfung von $3\,\mathrm{dB}$ entspricht. Die Dämpfung des empfangenden Wandlers beträgt aus Symmetriegründen ebenfalls $3\,\mathrm{dB}$, so dass die theoretische Untergrenze für die Dämpfung eines SAW-Filters bei $6\,\mathrm{dB}$ liegt. In der Praxis muss die Dämpfung wesentlich höher sein, damit
<!-- page-import:1335:end -->

<!-- page-import:1336:start -->
23.2 Filter 1299

$L_1 \qquad L \qquad L_2$

Laufzeit: $t_L = \dfrac{L}{v}$

a Geometrie und Impulsantwort der Wandler

b Impulsantwort des Filters (Faltungsprodukt der Impulsantworten der Wandler + Laufzeit)

$\dfrac{|A|}{\mathrm{dB}}$

c Betragsfrequenzgang des Filters (Betrag der Laplacetransformierten der Impulsantwort)

**Abb. 23.17. Zusammenhang zwischen der Geometrie und dem Betragsfrequenzgang eines SAW-Filters**

die an den Wandlern und an den Enden des Kristalls reflektierten Wellen die Übertragungsfunktion nicht zu stark beeinträchtigen. Besonders störend ist das *triple-transit*-Echo, das an jedem Wandler einmal reflektiert wird und damit die Laufstrecke dreimal passiert. Das *triple-transit*-Echo erfährt etwa die dreifache Dämpfung (in Dezibel) wie das Nutzsignal und muss um mindestens 40 dB stärker gedämpft werden als dieses; deshalb beträgt die Dämpfung für das Nutzsignal bei den Standard-Filtern mindestens 20 dB. Eine unzureichende Dämpfung des *triple-transit*-Echos führt zu einer Welligkeit im Betragsfrequenzgang und in der Gruppenlaufzeit; dies ist bei *low-loss*-Filtern der Fall, bei denen die Welligkeit zu Gunsten einer geringeren Dämpfung in Kauf genommen wird. Abbildung 23.18 zeigt den Betragsfrequenzgang eines Standard- und eines *low-loss*-SAW-Filters im Vergleich [23.5].
<!-- page-import:1336:end -->
