# Phototransistors

<!-- page-import:1166:start -->
20.4 Fototransistor 1129

**Abb. 20.17.**  
Schaltsymbol und Modell eines Fototransistors

**Abb. 20.18.**  
Ersatzschaltbild eines Darlington-  
Fototransistors

**Abb. 20.19.**  
Fototransistor in Emitterschaltung

$U_a = V^- - B \cdot R_1 \cdot I_P$

**Abb. 20.20.**  
Fototransistor in Kollektorschaltung

$U_a = B \cdot R_1 \cdot I_P$

## 20.4 Fototransistor

Bei einem Fototransistor ist die Kollektor-Basis-Strecke als Fotodiode ausgebildet. Abb. 20.17 zeigt sein Schaltsymbol, und sein Ersatzschaltbild. Die Wirkungsweise des Fototransistors lässt sich leicht anhand des Ersatzschaltbildes verstehen: Der Strom durch die Fotodiode bewirkt einen Basisstrom der mit dem Transistor verstärkt wird. Ob es günstiger ist, die Basis anzuschließen oder offen zu lassen, hängt ganz von der jeweiligen Schaltung ab. Bei offener Basis wird der ganze Fotostrom verstärkt; der Transistor ist dann aber langsam, weil die Basisladung nur über die Basis abfließen kann. Wenn man die Basisladung über einen Basis-Emitter-Widerstand ableitet, wird der Fototransistor zwar schneller, dafür sinkt aber die Stromverstärkung. Mitunter wird der Basisanschluss von Fototransistoren nicht herausgeführt; dann spricht man von Fotoduodioden.

Um eine besonders hohe Stromverstärkung zu erzielen kann man Darlington-Fototransistoren verwenden. Das Ersatzschaltbild ist in Abb. 20.18 dargestellt. Hier wird der Fotostrom von beiden Transistoren verstärkt. Allerdings sind sie sogar noch langsamer als die normalen Fototransistoren. Wenn es auf hohe Frequenzen ankommt sind Fototransistoren ungeeignet; dann muss man sich mit den kleinen Strömen von Fotodioden begnügen und zur Verstärkung einen Operationsverstärker gemäß Abb. 20.15 einsetzen.

Die einfachsten Fotoempfänger bestehen aus einem Fototransistor und einem Arbeitswiderstand. In Abb. 20.19 arbeitet der Fototransistor in Emitterschaltung. Hier sinkt die Ausgangsspannung bei Beleuchtung; bei der Schaltung in Abb. 20.20 steigt sie.

## 20.5 Optokoppler

Optokoppler sind Bausteine, die das Licht von einem optischen Sender zu einem Empfänger übertragen. Sie werden eingesetzt, um Nachrichten auf ein beliebiges Potential zu übertragen. Sie arbeiten meist im Infrarot-Bereich, weil dort der Wirkungsgrad der Leuchtdioden und die Empfindlichkeit der Fotodioden besonders hoch ist. Als Empfän-
<!-- page-import:1166:end -->
