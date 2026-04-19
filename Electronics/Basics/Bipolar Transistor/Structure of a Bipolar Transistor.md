# Structure of a Bipolar Transistor

<!-- page-import:0094:start -->
57

## 2.2 Aufbau eines Bipolartransistors

Der Bipolartransistor ist im allgemeinen unsymmetrisch aufgebaut. Daraus ergibt sich eine eindeutige Zuordnung von Kollektor und Emitter und, wie später noch gezeigt wird, unterschiedliches Verhalten bei Normal- und Inversbetrieb. Einzel- und integrierte Transistoren sind aus mehr als drei Zonen aufgebaut, speziell die Kollektorzone besteht aus mindestens zwei Teilzonen. Die Bezeichnungen npn und pnp geben deshalb nur die Zonenfolge des aktiven inneren Bereichs wieder. Die Herstellung erfolgt in einem mehrstufigen Prozess auf einer Halbleiterscheibe *(wafer)*, die anschließend durch Sägen in kleine Plättchen *(die)* aufgeteilt wird. Auf einem Plättchen befindet sich entweder ein Einzeltransistor oder eine aus mehreren integrierten Transistoren und weiteren Bauteilen aufgebaute integrierte Schaltung *(integrated circuit, IC)*.

### 2.2.1 Einzeltransistoren

#### 2.2.1.1 Innerer Aufbau

Einzeltransistoren werden überwiegend in Epitaxial-Planar-Technik hergestellt. Abbildung 2.19 zeigt den Aufbau eines npn- und eines pnp-Transistors, wobei der aktive Bereich besonders hervorgehoben ist. Die Gebiete \(n^+\) und \(p^+\) sind stark, die Gebiete \(n\) und \(p\) mittel und die Gebiete \(n^-\) und \(p^-\) schwach dotiert. Die spezielle Schichtung unterschiedlich stark dotierter Gebiete verbessert die elektrischen Eigenschaften des Transistors. Die Unterseite des Plättchens bildet den Kollektor, Basis und Emitter befinden sich auf der Oberseite.

#### 2.2.1.2 Gehäuse

Der Einbau in ein Gehäuse erfolgt, indem die Unterseite durch Löten mit dem Anschlußbein für den Kollektor oder einem metallischen Gehäuseteil verbunden wird. Die beiden anderen Anschlüsse werden mit feinen Gold- oder Aluminiumdrähten *(Bonddrähte)* an das zugehörige Anschlußbein angeschlossen. Abbildung 2.20 zeigt einen Kleinleistungs- und einen Leistungstransistor nach dem Löten und Bonden. Abschließend wird der Kleinleistungstransistor mit Kunststoff vergossen; das Gehäuse des Leistungstransistors wird mit einem Deckel verschlossen.

Für die verschiedenen Baugrößen und Einsatzgebiete existiert eine Vielzahl von Gehäusebauformen, die sich in der maximal abführbaren Verlustleistung unterscheiden oder an spezielle geometrische Erfordernisse angepasst sind. Abbildung 2.21 zeigt eine Auswahl der gängigsten Bauformen. Bei Leistungstransistoren ist das Gehäuse für die Montage

E   E   B   E   E   B

B   C   B   C

a npn-Transistor

b pnp-Transistor

**Abb. 2.19.** Aufbau eines Halbleiterplättchens mit einem Epitaxial-Planar-Einzeltransistor
<!-- page-import:0094:end -->

<!-- page-import:0095:start -->
58  2. Bipolartransistor

TO-92

TO-3

**Abb. 2.20.** Einbau in ein Gehäuse

auf einem Kühlkörper ausgelegt; dabei begünstigt eine möglichst große Kontaktfläche die Wärmeabfuhr. SMD-Transistoren für größere Leistungen haben zur besseren Wärmeabfuhr an die Leiterplatte zwei Anschlussbeine für den Kollektor. Bei Hochfrequenztransistoren werden sehr spezielle Gehäusebauformen verwendet, da das elektrische Verhalten bei Frequenzen im GHz-Bereich stark von der Geometrie abhängt; einige Gehäuse haben zur besseren Masseführung zwei Anschlussbeine für den Emitter.

TO-92  
5 mm  
5,2 mm

TO-220  
9,9 mm  
15,6 mm

TO-218  
15 mm  
20,3 mm

SOT-223  
6,5 mm  
3,5 mm

SOT-89  
2,6 mm  
4,5 mm

SOT-23  
1,3 mm  
2,9 mm

**Abb. 2.21.** Gängige Gehäusebauformen bei Einzeltransistoren
<!-- page-import:0095:end -->

<!-- page-import:0096:start -->
## 2.2 Aufbau eines Bipolartransistors

59

Abb. 2.22. Dioden-Ersatzschaltbild und Aufbau eines integrierten vertikalen npn-Transistors

### 2.2.1.3 Komplementäre Transistoren

Da npn- und pnp-Transistoren in getrennt optimierten Herstellungsabläufen gefertigt werden, ist es leicht möglich, *komplementäre* Transistoren zu fertigen. Ein npn- und ein pnp-Transistor werden als komplementär bezeichnet, wenn ihre elektrischen Daten bis auf die Vorzeichen der Ströme und Spannungen übereinstimmen.

## 2.2.2 Integrierte Transistoren

Integrierte Transistoren werden ebenfalls in Epitaxial-Planar-Technik hergestellt. Hier befinden sich auch der Kollektoranschluss auf der Oberseite des Plättchens und die einzelnen Transistoren sind durch gesperrte pn-Übergänge elektrisch voneinander getrennt. Der aktive Bereich der Transistoren befindet sich in einer sehr dünnen Schicht an der Oberfläche. Die Tiefe des Plättchens wird *Substrat* (*substrate, S*) genannt und stellt einen für alle Transistoren gemeinsamen vierten Anschluss dar, der ebenfalls an die Oberseite geführt ist. Damit demselben Herstellungsablauf npn- und pnp-Transistoren hergestellt werden müssen, unterscheiden sich beide Typen in Aufbau und elektrische Daten erheblich.

### 2.2.2.1 Innerer Aufbau

npn-Transistoren werden als vertikale Transistoren nach Abb. 2.22 ausgeführt; der Stromfluss vom Kollektor zum Emitter erfolgt vertikal, d.h. senkrecht zur Oberfläche des Plättchens. pnp-Transistoren werden dagegen meist als laterale Transistoren nach Abb. 2.23 ausgeführt; der Stromfluss erfolgt hier lateral, d.h. parallel zur Oberfläche des Plättchens.

Abb. 2.23. Dioden-Ersatzschaltbild und Aufbau eines integrierten lateralen pnp-Transistors
<!-- page-import:0096:end -->

<!-- page-import:0097:start -->
60

2. Bipolartransistor

### 2.2.2.1.1 Substrat-Dioden

Die Dioden-Ersatzschaltbilder in Abb. 2.22 und Abb. 2.23 enthalten zusätzlich eine Substrat-Diode, die beim vertikalen npn-Transistor zwischen Kollektor und Substrat, beim lateralen pnp-Transistor zwischen Basis und Substrat liegt. Das Substrat wird an die negative Versorgungsspannung angeschlossen, so dass diese Dioden immer gesperrt sind und eine Isolation der Transistoren untereinander und vom Substrat bewirken.

### 2.2.2.1.2 Unterschiede zwischen Vertikal- und Lateraltransistor

Da bei einem Vertikaltransistor die Dicke der Basiszone kleiner gehalten werden kann, ist die Stromverstärkung um den Faktor 3 . . . 10 größer als bei einem Lateraltransistor; auch die Schaltgeschwindigkeit und die Grenzfrequenzen sind bei einem Vertikaltransistor wesentlich höher. Deshalb werden immer öfter auch vertikale pnp-Transistoren hergestellt. Ihr Aufbau entspricht dem vertikaler npn-Transistoren, wenn man in allen Zonen n- und p-Dotierung vertauscht. Eine Isolation vom Substrat wird erreicht, indem die Transistoren in eine n-dotierte Wanne eingebettet werden, die an die positive Versorgungsspannung angeschlossen wird. npn- und pnp-Transistoren werden in diesem Fall auch dann als komplementär bezeichnet, wenn ihre elektrischen Daten im Vergleich zu komplementären Einzeltransistoren keine gute Übereinstimmung aufweisen.

## 2.3 Modelle für den Bipolartransistor

Im Abschnitt 2.1.2 wurde das *statische* Verhalten des Bipolartransistors im Normalbetrieb durch die Großsignalgleichungen (2.5) und (2.6) beschrieben; dabei wurden sekundäre Effekte vernachlässigt oder, wie bei der Beschreibung des Verlaufs der Stromverstärkung im Abschnitt 2.1.3, nur qualitativ beschrieben. Für den rechnergestützten Schaltungsentwurf mit CAD-Programmen wird ein Modell benötigt, das alle Effekte berücksichtigt, für alle Betriebsarten gilt und darüber hinaus auch das *dynamische Verhalten* richtig wiedergibt. Aus diesem *Großsignalmodell* erhält man durch Linearisierung im Arbeitspunkt das *dynamische Kleinsignalmodell*, das zur Berechnung des Frequenzgangs von Schaltungen benötigt wird.

### 2.3.1 Statisches Verhalten

Das statische Verhalten wird für einen npn-Transistor aufgezeigt; bei einem pnp-Transistor haben alle Ströme und Spannungen umgekehrte Vorzeichen. Das einfachste Modell für den Bipolartransistor ist das *Ebers-Moll-Modell*, das auf dem Dioden-Ersatzschaltbild aufbaut. Das Modell hat nur drei Parameter und beschreibt alle primären Effekte. Zur genaueren Modellierung wird eine Umformung durchgeführt, die zunächst auf das *Transportmodell* und nach Hinzunahme weiterer Parameter zur Beschreibung sekundärer Effekte auf das *Gummel-Poon-Modell* führt; letzteres erlaubt eine sehr genaue Beschreibung des statischen Verhaltens und wird in CAD-Programmen eingesetzt.

#### 2.3.1.1 Das Ebers-Moll-Modell

Ein npn-Transistor besteht aus zwei antiseriell geschalteten pn-Dioden mit gemeinsamer p-Zone. Die beiden Dioden werden Emitter- bzw. BE-Diode und Kollektor- bzw. BC-Diode genannt. Die Funktion des Bipolartransistors beruht auf der Tatsache, dass aufgrund der sehr dünnen gemeinsamen Basiszone ein Großteil der Diodenströme durch die Basiszone hindurch zum jeweils dritten Anschluss abfließen kann. Das *Ebers-Moll-Modell* in Abb. 2.24 besteht deshalb aus den beiden Dioden des Dioden-Ersatzschaltbilds
<!-- page-import:0097:end -->
