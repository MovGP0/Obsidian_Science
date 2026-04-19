# Synchronous BCD Counters

<!-- page-import:0732:start -->
8.3 Synchrone BCD-Zähler 695

*CUP* = Clock Up  *CDN* = Clock Down

**Abb. 8.41.** Koinzidenz-unempfindlicher Vorwärts-Rückwärts-Dualzähler

wärtsbetrieb der Zählerstand 0000 ist. Für die Übertragsvariable ergibt sich damit die Beziehung:

$$RCO = [z_0 z_1 z_2 z_3 (U/\overline{D}) + \overline{z_0}\,\overline{z_1}\,\overline{z_2}\,\overline{z_3}\,\overline{(U/\overline{D})}]ENT$$

Diese Variable wird wie in Abb. 8.39 am Enable-Eingang $ENT$ der nächsten Zählstufe angeschlossen. Der Übertrag wird immer vorzeichenrichtig interpretiert, wenn man die Zählrichtung für alle Zähler gemeinsam umschaltet.

### 8.2.3.2 Zähler mit Vorwärts- und Rückwärts-Eingängen

Wenn man einen Zähler mit 2 Takteingängen aufbauen möchte, bei dem der eine Takteingang aufwärts und der andere abwärts zählt, besteht immer die Möglichkeit, dass beide Zählimpulse gleichzeitig eintreffen. Einen Zähler, der mit einer solchen Situation fertig wird, gibt es nicht. Das Problem lässt sich aber elegant dadurch lösen, dass man wie in Abb. 8.41 zwei Vorwärtszähler einsetzt und anschließend mit einem Subtrahierer die Differenz der Zählerstände bildet.

Das Übertragsbit des Subtrahierers kann nicht zur Vorzeichenanzeige verwendet werden; denn sonst würde man eine nach wie vor positive Differenz fälschlicherweise als negativ interpretieren, wenn einer der beiden Zähler übergelaufen ist und der andere noch nicht. Zum vorzeichenrichtigen Ergebnis kommt man jedoch, wenn man die Differenz - in unserem Beispiel - als vierstellige Zweierkomplementzahl interpretiert. Das Bit $d_3$ gibt dann das richtige Vorzeichen an, solange die Differenz den zulässigen Bereich von $-8$ bis $+7$ nicht überschreitet.

# 8.3 Synchrone BCD-Zähler

Abbildung 8.32 zeigt, dass man mit einem dreistelligen Dualzähler bis 7 zählen kann und mit einem vierstelligen bis 15. Bei einem Zähler für natürliche BCD-Zahlen benötigt man also für jede Dezimalziffer einen vierstelligen Dualzähler, der als Zähldekade bezeichnet wird. Diese Zähldekade unterscheidet sich vom normalen Dualzähler lediglich dadurch, dass sie bei dem zehnten Zählimpuls auf Null zurückspringt und einen Übertrag herausgibt. Mit diesem Übertrag kann man die Zähldekade für die nächst höhere Dezimalziffer ansteuern. Mit BCD-Zählern ist eine Dezimalanzeige des Zählerstandes sehr viel einfacher als beim reinen Dualzähler, weil sich jede Dekade für sich dekodieren und als Dezimalziffer anzeigen lässt.

Da die Dezimalziffer bei der natürlichen BCD-Darstellung durch eine vierstellige Dualzahl dargestellt wird, deren Stellenwerte $2^3, 2^2, 2^1$ und $2^0$ betragen, wird diese BCD-Darstellung auch als 8421-Code bezeichnet. Die Zustandstabelle einer Zähldekade im
<!-- page-import:0732:end -->
