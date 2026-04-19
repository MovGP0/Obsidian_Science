# Supply Voltages

<!-- page-import:0687:start -->
650  6. Digitaltechnik Grundlagen

**Abb. 6.60.** Probleme bei der Kopplung von 5V- mit 3,3V- Schaltungen.  
Es fließt ein Strom $I_x$ in dem dick eingezeichneten Pfad.

Diode nicht an der Betriebsspannung anzuschließen. Davon wird bei manchen Logikfamilien Gebrauch gemacht. Dadurch ergeben sich 3,3V-Logikschaltungen mit 5V-toleranten Eingängen.

Im allgemeinen Fall benötigt man Pegelumsetzer zur Kopplung von verschiedenen Logikfamilien. Für die Kopplung von PECL- und NECL-Schaltungen mit TTL- und CMOS gibt es handelsübliche Pegelumsetzer (Level Translator). Im allgemeinen Fall sind aber Komparatoren flexibler, weil sie in einer großen Vielfalt von Schaltzeiten und Ausgangspegeln erhältlich sind. Ein Beispiel ist in Abb. 6.61 dargestellt. Dabei wird der Eingang des Komparators mit den Betriebsspannungen der Logikfamilie 1 versorgt, um sicher zu stellen, dass die Logiksignale im Gleichtaktaussteuerbereich des Komparators liegen. Das kann auch eine negative Spannung sein, die zur Versorgung von NECL-Schaltungen benötigt wird.

Man dimensioniert den Spannungsteiler so, dass die Referenzspannung in der Mitte zwischen dem High- und Low-Pegel liegt. Bei vielen ECL-Schaltungen ist dazu die interne Referenzspannung herausgeführt. Besser ist es jedoch, komplementäre Ausgänge an den Eingang des Komparators zu führen, sofern sie zur Verfügung stehen. Bei der Auswahl des Komparators verwendet man Typen, deren Ausgangspegel mit der Logikfamilie 2 kompatibel sind.

## 6.8 Betriebsspannungen

Natürlich verwendet man Kondensatoren, um die Betriebsspannung bei schwankender Belastung zu glätten. Dabei geht es aber nicht darum 50 Hz-Störungen zu filtern, sondern Störungen bei der Taktfrequenz der Schaltung kurzzuschließen. Allerdings besitzen bei hohen Frequenzen selbst kurze Leiterbahnen einen nennenswerten induktiven Widerstand. Deshalb ist der Blockkondensator in Abb. 6.62a wirkungslos. Lösen lässt sich das Problem lediglich dadurch, dass man eine nahezu induktivitätsfrei Masse an allen Punkten der Schaltung bereitstellt. Das ist mit einer Massefläche möglich; leider benötigt man dafür

**Abb. 6.61.**  
Komparator als Pegelumsetzer zur Kopplung von verschiedenen Logikfamilien
<!-- page-import:0687:end -->

<!-- page-import:0688:start -->
6.8 Betriebsspannungen 651

a Verdrahtete Masse

b Mit Massefläche

**Abb. 6.62.** Abblocken von Betriebsspannungen. Die eingezeichneten Induktivitäten sind parasitäre Elemente der Verdrahtung. Die Doppelkreise sollen Durchkontaktierungen zur Massefläche symbolisieren.

eine zusätzliche Verdrahtungsebene. Man kann sich die Massefläche als eine Parallelschaltung von vielen Leiterbahnen vorstellen, deren Induktivität sich durch die Parallelschaltung reduziert. In Abb. 6.62b sind die Verhältnisse für diesen Fall im Vergleich dargestellt. Man erkennt, dass dadurch die Induktivitäten nach Masse verschwinden. Selbst die Induktivität zur Betriebsspannung stört hier nicht mehr, weil sie durch den Blockkondensator in diesem Fall kurzgeschlossen wird. Natürlich ist es besser, auch für die Betriebsspannung eine Verbindungsebene vorzusehen, wenn genügend Verdrahtungsebenen zur Verfügung stehen.

Ein Problem, das ebenfalls mit der Induktivität in der Masseleitung zusammenhängt, ist in Abb. 6.63 dargestellt. Wenn ein Ausgangssignal einer integrierten Schaltung von High auf Low umschaltet, wie es mit dem Schalter in Abb. 6.63 dargestellt ist, liegt die zunächst aufgeladene Lastkapazität parallel zur Induktivität in der Masseleitung. Das ist für das Ausgangssignal an der Last nicht tragisch: Es schaltet dadurch lediglich langsamer. Problematisch ist aber, dass die Masse der integrierten Schaltung vorübergehend einen positiven Impuls aufweist, der sich auf alle Ausgänge auswirkt, die sich im Low-Zustand befinden. Ein solches Signal ist in Abb. 6.63 mit eingezeichnet; man nennt es Groundbounce. Die Situation wird verschärft, wenn nicht nur ein einziges Ausgangssignal auf Low schaltet, sondern viele gleichzeitig wie das bei Bussignalen häufig auftritt. Auch aus diesem Grund ist es wichtig, die Induktivität in der Masseleitung des Chips

**Abb. 6.63.** Ursache für das Auftreten des Groundbounce beim Umschalten eines Ausgangs von high auf low.
<!-- page-import:0688:end -->
