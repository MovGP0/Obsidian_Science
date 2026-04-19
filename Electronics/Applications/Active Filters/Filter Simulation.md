# Filter Simulation

<!-- page-import:0850:start -->
813

## 12.2 Simulation von Filtern

Natürlich lassen sich Filter - wie alle anderen Schaltungen - mit einem Schaltungssimulator simulieren. Sie bieten häufig auch die Möglichkeit, Übertragungsfunktionen direkt zu simulieren, ohne dass eine schaltungstechnische Realisierung vorliegt. Dazu wird eine spezielle spannungsgesteuerte Spannungsquelle mit $r_e = \infty$ und $r_a = 0$ verwendet, bei der man den Zähler und den Nenner der Übertragungsfunktion direkt eingeben kann. Die einfachste Möglichkeit besteht darin, die Filterkoeffizienten aus unseren Filtertabellen in den Abb. 12.18 bis 12.30 unverändert zu übernehmen. Dabei setzt man dann stillschweigend $\omega_g = 1/(2\pi f_g) = 1$, also $f_g = 1/(2\pi) = 0{,}159\,\text{Hz}$. In Abb. 12.31 ist ein 3 dB-Tschebyscheff-Tiefpass 4. Ordnung als Beispiel gewählt. In den H(s) Blöcken sind die Koeffizienten der beiden Teilfilter 2. Ordnung eingetragen, deren Zähler $Z = 1$ ist. Darun-

Ue

Hs1  
H(s)  
Z=1

U1

Hs2  
H(s)  
Z=1

Ua

U1=0V  
U2=1V  
TPERIODE=100s  
TPULS=50s

N=1+2.1853*s+5.5339*s*s

N=1+0.1964*s+1.2009*s*s

R1  
1k

Verstärkung

$U_a/U_1$

$U_1/U_e$

$U_a/U_e$

DB(U(U1)) ◇ DB(U(Ua)/U(U1)) ▽ DB(U(Ua))

Gruppenlaufzeit

Frequency

G(U(Ua))

Sprungantwort

Time

U(Ua)

**Abb. 12.31.** Simulation eines 3 dB-Tschebyscheff-Filters 4. Ordnung
<!-- page-import:0850:end -->
