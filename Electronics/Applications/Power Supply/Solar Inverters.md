# Solar Inverters

<!-- page-import:1032:start -->
16.8 Solarwechselrichter 995

Abb. 16.104. Strom- und Leistungsverlauf einer Solarzelle. Maximum Power Point (MPP) Leistung $P_{MPP}$ mit zugehörigem Strom $I_{MPP}$ und Spannung $U_{MPP}$

## 16.8 Solarwechselrichter

Solarzellen bieten eine umweltfreundliche Möglichkeit zur Stromerzeugung, da es sich bei der Fotovoltaik um regenerative Energie handelt. Die Kennlinien von Fotodioden werden in Kapitel 12.34 beschrieben. Wenn es darum geht, eine möglichst große elektrische Leistung zu gewinnen, sind die beiden Grenzfälle Leerlauf und Kurzschluss uninteressant, weil in beiden Fällen $P = U \cdot I = 0$ ist. Die maximale Leistung gibt es in einem Punkt dazwischen, dem MP-Punkt (Maximum Power Point). Der Verlauf der erhältlichen Leistung ist in Abb. 16.104 eingezeichnet. Die erhältliche Leistung ist proportional zur Beleuchtungsstärke wie man in Abb. 16.105 erkennt. Eine Beleuchtungsstärke von $1000\,\mathrm{W/m^2}$ ergibt sich nur unter optimalen Bedingungen bei klarem Himmel und senkrechter Einstrahlung. Dann kann man bei $20\,\%$ Wirkungsgrad mit einem Solarpanel mit $1\,\mathrm{m^2}$ Fläche eine elektrische Leistung von $P = 200\,\mathrm{W}$ erzeugen. Bei bewölktem Himmel erhält man aber bestenfalls $\frac{1}{10}$ der Leistung. Die Lage des MP-Punkts hängt von der Beleuchtungsstärke ab wie man ebenfalls in Abb. 16.105 erkennt. Die Verschiebung ist zwar nicht stark, aber man kann leicht mehrere Prozent im Wirkungsgrad verlieren, wenn der angeschlossene Umrichter nicht nachregelt.

Die Ausgangsspannung einer Solarzellen im MP-Punkt liegt bei $U_{MPP} \approx 0{,}5\,\mathrm{V}$. Derart niedrige Spannungen lassen sich nicht effizient nutzen. Daher schaltet man immer viele Solarzellen in Reihe, um je nach Leistungsbedarf auf Spannungen von $20\dots 400\,\mathrm{V}$ zu kommen. Im Normalfall muss man die Netzwechselspannung mit einem Effektivwert von $230\,\mathrm{V}$ und einer Frequenz von $50\,\mathrm{Hz}$ erzeugen, um damit handelsübliche Geräte zu betreiben oder die Energie ins Hausstromnetz einzuspeisen. Eine weitere Forderung ist, dass ein Solarwechselrichter selbsttätig den MPP-Punkt aufsucht und sich darauf adaptiert. Wichtig ist auch eine Potentialtrennung im Umrichter damit man das Solarmodul mit dem Schutzleiter PE erden kann.

Der Solarwechselrichter in Abb. 16.106 zeigt ein Beispiel für eine besonders einfache Ausführung des Leistungsteils. Die Solarzellen liefern den Strom für einen Halbbrückenwandler gemäß Abb. 16.72 auf Seite 972. Er erzeugt eine Wechselspannung, deren Tastverhältnis so moduliert wird, dass ihr Mittelwert eine Frequenz von $50\,\mathrm{Hz}$ besitzt. Das nachfolgende $LC$-Filter unterdrückt die Oberwellen, sodass der Transformator nur ein [unclear]
<!-- page-import:1032:end -->

<!-- page-import:1033:start -->
996  16. Stromversorgung

**Abb. 16.105.** Kennlinien von Solarzellen für verschiedene Beleuchtungsstärken. Die quantitativen Angaben sind lediglich Beispiele für monolithische Silizium-Solarzellen.

50 Hz-Signal erhält. Das Übersetzungsverhältnis wählt man so, dass am Ausgang eine Wechselspannung mit einem Effektivwert von 230 V entsteht.

Ein schwerwiegender Nachteil des einfachen Solarwechselrichters in Abb. 16.106 ist der 50 Hz-Transformator. Solche Transformatoren sind groß, schwer, teuer und haben hohe Verluste. Deshalb ist es zweckmäßig, das Hochfrequenz-Signal des Wechselrichters zu transformieren und dann ohne einen 50 Hz-Transformator die Netzspannung daraus zu gewinnen. Bei dem Solarwechselrichter in Abb. 16.107 wird zunächst mit einem Gleichspannungswandler ein Gleichspannungs-Zwischenkreis mit einer konstanten Spannung erzeugt, die etwas über dem Scheitelwert der gewünschten Netzausgangsspannung liegt, also z.B. $U_2 = 350\ \mathrm{V}$ beträgt. Der zweite Wechselrichter (Schalter $S_5 \dots S_8$) erzeugt auch hier eine Wechselspannung, deren Tastverhältnis so moduliert wird, dass sie nach Tiefpassfilterung eine Frequenz von 50 Hz besitzt und gleichzeitig den gewünschten Effektivwert von $U_{a\,eff} = 230\ \mathrm{V}$. Das nachfolgende $LC$-Tiefpassfilter überträgt nur das 50 Hz-Signal an den Ausgang.

Der wesentliche Unterschied zu dem einfachen Solarwechselrichter in Abb. 16.106 besteht hier darin, dass der erforderliche Trenntransformator hier mit einer hohen Frequenz

**Abb. 16.106.** Einfacher Solarwechselrichter mit Halbbrückenwandler  
L = Phase, N = Neutralleiter, PE = Schutzleiter = Protective Earth
<!-- page-import:1033:end -->

<!-- page-import:1034:start -->
16.8 Solarwechselrichter 997

Abb. 16.107. Solarwechselrichter mit 20 kHz-Trenntransformator und Gleichspannungs-Zwischenkreis. Doppelter Schrägstrich in einem Block: Potentialtrennung.

Solarpanel  
PE  
$U_e$  
$C_1$

20 kHz  
Wechselrichter

$S_1$  
$S_2$  
$S_3$  
$S_4$

$U_1$

20 kHz  
Trenntrafo

$L_1$  
$C_3$  
$U_2$  
350V

0 Hz  
Zwischenkreis

20 kHz  
Wechselrichter

$S_5$  
$S_6$  
$S_7$  
$S_8$

$L_2$  
$C_2$

50 Hz  
Filter

$U_a$  
230 V  
L  
N  
PE

Solarpanel → Gleichspannungswandler → Zwischenkreis → Wechselrichter

$C_3$  
$U_2$

$U_a$  
230 V  
L  
N  
PE
<!-- page-import:1034:end -->
