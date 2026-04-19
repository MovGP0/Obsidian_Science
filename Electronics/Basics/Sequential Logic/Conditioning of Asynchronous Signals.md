# Conditioning of Asynchronous Signals

<!-- page-import:0739:start -->
702 8. Schaltwerke (Sequentielle Logik)

| $N$ | 3 | ·4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
|  | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 |
|  | 2 | 3 | 3 | 5 | 4 | 7 | 5 | 7 | 9 | 11 | 10 | 13 | 14 | 14 | 14 | 11 | 18 | 17 |
|  |  |  |  |  |  | 5 |  |  |  | 8 | 6 | 8 |  | 13 |  |  | 17 |  |
|  |  |  |  |  |  | 3 |  |  |  | 6 | 4 | 4 |  | 11 |  |  | 14 |  |

**Abb. 8.57.** Tabelle der Rückkopplungsanschlüsse

Anschlusspunkten $Q_{N-i}$. Der letzte Anschlusspunkt bleibt dabei erhalten. Statt der Anschlusspunkte 3,5,7,8 kann man also auch die Anschlusspunkte 1,3,5,8 verwenden. Häufig gibt es auch noch weitere Kombinationen, die eine Maximallänge ergeben. Die Rückkopplungslogik selbst besteht lediglich aus exor-Gattern; sie stellt einen Paritätsgenerator dar gemäß Abb. 7.18 auf S. 660.

Für viele Anwendungen möchte man das Digitalrauschen in ein Analograuschen umwandeln. Dazu braucht man lediglich an einem Ausgang einen Tiefpass anzuschließen, dessen Grenzfrequenz klein gegenüber der Taktfrequenz ist. Die Spannung wird dann umso größer, je mehr Einsen hintereinander auftreten. Ein wesentlich größere Rauschbandbreite erreicht man jedoch, wenn man die ganze Zahl, die im Schieberegister steht, in einen Digital-Analog-Umsetzer gibt. Auf diese Weise wird das in Abb. 8.56 dargestellte Signal $Z$ in eine Spannung umgesetzt.

Die hier erzeugten Zufallssignale sind keine echten Zufallsfolgen, da sie sich periodisch wiederholen. Daher werden die als Zufallsgenerator rückgekoppelten Schieberegister auch als Pseudo Random Noise Generator PRNG bezeichnet. Bei großer Folgenlänge ist die Abweichung von einer echten Zufallsfolge jedoch minimal. Dafür hat man den Vorteil, dass die damit gewonnenen Messergebnisse reproduzierbar sind. Darüber hinaus kann man z.B. ein Oszilloskop mit der Zufallsfolge triggern, um stehende Oszillogramme zu erhalten.

## 8.6 Aufbereitung asynchroner Signale

Man kann Schaltwerke sowohl asynchron als auch synchron, d.h. getaktet, realisieren. Die asynchrone Realisierung ist zwar in der Regel weniger aufwendig, bringt jedoch eine Menge Probleme mit sich, da man immer sicherstellen muss, dass keine Übergangszustände als gültig dekodiert werden, die nur kurzzeitig durch Laufzeitunterschiede auftreten (Hazards). Bei synchronen Systemen liegen die Verhältnisse wesentlich einfacher. Wenn an irgend einer Stelle des Systems eine Änderung auftritt, kann sie nur nach einer Taktflanke auftreten. Man kann also am Taktzustand erkennen, wann das System im stationären Zustand ist. Zweckmäßigerweise sorgt man dafür, dass alle Änderungen im System einheitlich entweder bei der positiven oder der negativen Flanke erfolgen. Triggern z.B. alle Schaltungen auf die negative Flanke, dann ist das System sicher im eingeschwungenen Zustand, wenn der Takt 1 ist.

Daten, die von außerhalb in das System gegeben werden, sind in der Regel nicht mit dessen Takt synchronisiert. Um sie synchron verarbeiten zu können, muss man sie zunächst aufbereiten. In den folgenden Abschnitten wollen wir einige Schaltungen angeben, die in diesem Zusammenhang häufig benötigt werden.

### 8.6.1 Entprellung mechanischer Kontakte

Wenn man einen mechanischen Schalter öffnet oder schließt, entsteht infolge mechanischer Schwingungen jeweils eine Impulskette. Ein Zähler registriert demnach statt eines beab-
<!-- page-import:0739:end -->

<!-- page-import:0740:start -->
8.6 Aufbereitung asynchroner Signale 703

**Abb. 8.58.** Entprellung eines Schalters

sichtigten Einzelimpulses eine undefinierte Zahl von Impulsen. Ein einfaches Verfahren zur elektronischen Entprellung mit Hilfe eines $RS$-Flip-Flops ist in Abb. 8.58 dargestellt. Im Ruhezustand ist $\overline{R}=0$ und $\overline{S}=1$, also $x=0$. Betätigt man nun den Schaltkontakt, tritt zunächst durch das Öffnen des Ruhekontaktes eine Impulsfolge am $\overline{R}$-Eingang auf. Da $\overline{R}=\overline{S}=1$ der Speicherzustand ist, ändert sich am Ausgang $x$ nichts. Nach der vollständigen Öffnung des Ruhekontaktes tritt eine Impulsfolge am Arbeitskontakt auf. Bei der ersten Berührung ist $\overline{R}=1$ und $\overline{S}=0$. Dadurch kippt das Flip-Flop um, und es wird $x=1$. Dieser Zustand bleibt während des weiteren Prellvorgangs gespeichert. Das Flip-Flop kippt erst wieder zurück, wenn der Umschaltkontakt wieder den Ruhekontakt berührt. Der zeitliche Ablauf wird durch das Impulsdiagramm in Abb. 8.58 verdeutlicht.

## 8.6.2 Flankengetriggertes RS-Flip-Flop

Ein Flip-Flop mit $RS$-Eingängen wird gesetzt, solange $S=1$ ist, und zurückgesetzt, solange $R=1$ ist. Dabei sollte vermieden werden, dass beide Eingänge gleichzeitig Eins werden. Um dies zu erreichen, kann man kurze $R$- bzw. $S$-Impulse erzeugen. Eine einfachere Möglichkeit ist in Abb. 8.59 dargestellt. Hier gelangen die Eingangssignale auf die Eingänge von positiv flankengesteigerten $D$-Flip-Flops. Dadurch wird erreicht, dass nur der Augenblick der positiven Flanke eine Rolle spielt und der übrige zeitliche Verlauf der Eingangssignale belanglos ist. Wenn eine positive Set-Flanke auftritt, wird $\overline{Q_1}=Q_2$. Dadurch ergibt sich die Exklusiv-ODER-Verknüpfung:

$$
y=\overline{Q_1}\oplus Q_2=1
$$

Trifft eine positive Reset-Flanke ein, wird $Q_2=\overline{Q_1}$. In diesem Fall wird $y=0$. Der Ausgang $y$ wirkt also wie der $Q$-Ausgang eines $RS$-Flip-Flops.

Eine Einschränkung gibt es jedoch auch hier für den zeitlichen Verlauf der Eingangssignale: Die positiven Eingangsflanken dürfen nicht gleichzeitig auftreten. Sie müssen

**Abb. 8.59.**  
Flankengetriggertes $RS$-Flip-Flop

$CS =$ Clock Set  
$CR =$ Clock Reset
<!-- page-import:0740:end -->

<!-- page-import:0741:start -->
704  8. Schaltwerke (Sequentielle Logik)

**Abb. 8.60.** Synchronisation asynchroner Signale

mindestens um die „Propagation Delay Time“ $t_{prop}$ plus „Data Setup Time“ $t_{setup}$ in Abb. 8.23 zeitlich getrennt sein. Bei gleichzeitigen Eingangsflanken wird das Ausgangssignal invertiert.

## 8.6.3 Synchronisation von asynchronen Daten

Die einfachste Methode zur Synchronisation von Impulsen besteht in der Verwendung eines $D$-Flip-Flops wie in Abb. 8.24 bereits gezeigt wurde. Auf diese Weise wird der Zustand der Eingangsvariablen $x$ bei jeder positiven Taktflanke abgefragt und an den Ausgang übertragen. Da sich das Eingangssignal auch während der positiven Taktflanke ändern kann, können metastabile Zustände im Flip-Flop F$_1$ auftreten. Damit dadurch keine Fehler im Ausgangssignal $y$ entstehen, wurde das zusätzliche Flip-Flop F$_2$ vorgesehen. Um die Wahrscheinlichkeit für Metastabilität zu reduzieren wird auch hier eine Doppelpufferung angewendet. Abbildung 8.60 zeigt ein Beispiel für den zeitlichen Verlauf. Ein Impuls, der so kurz ist, dass er nicht von einer positiven Taktflanke erfasst wird, wird ignoriert. Dieser Fall ist in Abb. 8.60 ebenfalls eingezeichnet.

Sollen derart kurze Impulse nicht verloren gehen, muss man sie bis zur Übernahme mit einem Flip-Flop zwischenspeichern. Dazu dient das vorgeschaltete $D$-Flip-Flop F$_1$ in Abb. 8.61. Es wird über den $S$-Eingang asynchron gesetzt, wenn $x = 1$ wird. Mit der nächsten positiven Taktflanke wird $y = 1$. Ist zu diesem Zeitpunkt $x$ bereits wieder Null geworden, wird das Flip-Flop F$_1$ mit derselben Flanke zurückgesetzt. Auf diese Weise wird ein kurzer $x$-Impuls bis zur nächsten Taktflanke verlängert und kann deshalb nicht verloren gehen. Diese Eigenschaft ist auch in dem Zeitdiagramm zu erkennen.

## 8.6.4 Synchroner Zeitschalter

Mit der Schaltung in Abb. 8.62 ist es möglich, einen taktsynchronen Ausgangsimpuls zu erzeugen, dessen Dauer eine Taktperiode beträgt, unabhängig von der Dauer des Triggersignals $x$.

Wenn $x$ von Null auf Eins geht, wird bei der nächsten positiven Taktflanke $Q_1 = 1$. Damit wird auch $y = 1$. Bei der folgenden positiven Taktflanke wird $\overline{Q}_2 = 0$ und damit wieder $y = 0$. Dieser Zustand bleibt so lange erhalten, bis $x$ mindestens einen

**Abb. 8.61.** Erfassung kurzer Impulse
<!-- page-import:0741:end -->

<!-- page-import:0742:start -->
8.6 Aufbereitung asynchroner Signale 705

**Abb. 8.62.** Erzeugung eines synchronen Einzelimpulses

Takt lang Null ist und dann erneut auf Eins geht. Kurze Triggerimpulse, die nicht von einer positiven Taktflanke erfasst werden, gehen wie bei der Synchronisationsschaltung in Abb. 8.60 verloren. Sollen sie berücksichtigt werden, muss man sie wie in Abb. 8.61 in einem zusätzlichen vorgeschalteten Flip-Flop bis zur Übernahme speichern.

Ein synchrones Monoflop für Einschaltdauern von mehr als einer Taktperiode lässt sich auf einfache Weise wie in Abb. 8.63 mit Hilfe eines Synchronzählers realisieren. Setzt man die Triggervariable $x$ auf 1, wird der Zähler mit dem nächsten Taktimpuls parallel geladen. Mit den folgenden Taktimpulsen zählt er bis zum vollen Zählerstand $Z_{\max}$. Ist diese Zahl erreicht, wird der Übertragsausgang $RCO = 1$. In diesem Zustand wird der Zähler über den Count-Enable-Eingang $ENP$ blockiert; die Ausgangsvariable $y$ ist Null. Der normale Enable-Eingang $ENT$ kann für diesen Zweck nicht verwendet werden, da er nicht nur auf die Flip-Flops, sondern zusätzlich direkt auf $RCO$ einwirkt. Dadurch würde eine unerwünschte Schwingung entstehen.

Ein neuer Zyklus wird durch den parallelen Ladevorgang eingeleitet, im Beispiel mit $CT = 8$. Unmittelbar nach dem Laden wird $RCO = 0$ und $y = \overline{RCO} = 1$. Die Rückkopplung von $RCO$ auf das UND-Gatter am $x$-Eingang verhindert einen neuen Ladevorgang vor Erreichen des Zählerstandes $CT = Z_{\max} = 15$. Bis zu diesem Zeitpunkt sollte spätestens $x = 0$ geworden sein, sonst wird der Zähler sofort wieder neu geladen, d.h. er arbeitet dann als Modulo-$(M + 1)$-Zähler wie in Abb. 8.46.

Der zeitliche Ablauf ist in Abb. 8.63 für eine Einschaltdauer von 7 Taktimpulsen dargestellt. Verwendet man einen 4 bit-Dualzähler, muss man ihn für diese Einschaltdauer mit $P = 8$ laden. Der erste Takt wird zum Laden verwendet, die restlichen 6 zum Zählen bis 15.

**Abb. 8.63.** Synchroner Zeitschalter
<!-- page-import:0742:end -->

<!-- page-import:0743:start -->
706  8. Schaltwerke (Sequentielle Logik)

**Abb. 8.64.** Änderungsdetektor

## 8.6.5 Synchroner Änderungsdetektor

Ein synchroner Änderungsdetektor soll einen taktsynchronen Ausgangsimpuls liefern, wenn sich die Eingangsvariable $x$ geändert hat. Zur Realisierung einer solchen Schaltung gehen wir von dem Monoflop in Abb. 8.62 aus. Dieses liefert einen Ausgangsimpuls, wenn $x$ von Null auf Eins geht. Um auch beim Übergang von Eins auf Null einen Ausgangsimpuls zu erhalten, ersetzen wir das und-Gatter durch ein exor-Gatter und erhalten die in Abb. 8.64 dargestellte Schaltung.

## 8.6.6 Synchroner Taktschalter

Häufig stellt sich das Problem, einen Takt ein- und auszuschalten, ohne den Taktgenerator selbst anzuhalten. Zu diesem Zweck könnte man im Prinzip ein und-Gatter verwenden. Wenn das Einschaltsignal aber nicht mit dem Takt synchronisiert ist, entsteht beim Ein- und Ausschalten ein Taktimpuls mit undefinierter Länge. Um diesen Effekt zu vermeiden, kann man zur Synchronisation wie in Abb. 8.65 ein einflankengesteigertes $D$-Flip-Flop verwenden. Macht man $EN = 1$, wird bei der nächsten positiven Taktflanke $Q = 1$ und damit auch $CLK' = 1$. Wegen der Flankentriggerung hat der erste Impuls des geschalteten Taktes immer die volle Länge.

Zum Ausschalten kann man die positive Taktflanke nicht verwenden, da dann unmittelbar nach dem Anstieg $Q = 0$ wird. Das hätte einen kurzen Ausgangsimpuls zur Folge. Deshalb wird das Flip-Flop über den Reset-Eingang asynchron gelöscht, wenn $EN$ und $CLK$ Null sind. Dazu dient das nor-Gatter vor dem $R$-Eingang. Wie man in Abb. 8.65 erkennt, gelangen dann nur ganze Taktimpulse durch das und-Gatter.

# 8.7 Systematischer Entwurf von Schaltwerken

Hier soll der systematische Entwurf von Schaltwerken erklärt werden. Der prinzipielle Aufbau ist Abb. 8.66 noch einmal dargestellt. Das Kernstück ist der Speicher für die Zustandsvariablen, der hier mit dem Takt $CLK$ getaktet wird. Deshalb wird ein solches Schaltwerk auch als synchrones Schaltwerk bezeichnet. Als Flip-Flops für die Zustands-

**Abb. 8.65.** Synchroner Taktschalter
<!-- page-import:0743:end -->
