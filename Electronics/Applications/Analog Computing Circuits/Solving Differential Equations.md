# Solving Differential Equations

<!-- page-import:0790:start -->
10.6 Lösung von Differentialgleichungen 753

**Abb. 10.19.**  
Differentiator mit hohem Eingangswiderstand

*Ausgangsspannung:*  
$$U_a = RC\,\frac{dU_e}{dt}$$

*Eingangsimpedanz:*  
$$|\underline{Z}_e| \geq R$$

rationsverstärkerschaltung als Steuerspannungsquelle verwendet wird, kann diese leicht instabil werden. In dieser Hinsicht ist der Differentiator in Abb. 10.19 günstiger. Seine Eingangsimpedanz sinkt auch bei hohen Frequenzen nicht unter den Wert $R$ ab.

Die Funktionsweise der Schaltung sei durch folgende Überlegung veranschaulicht: Wechselspannungen mit tiefen Frequenzen werden in dem Eingangs-$RC$-Glied differenziert. In diesem Frequenzbereich arbeitet der Operationsverstärker als Elektrometerverstärker mit der Verstärkung $A = 1$.

Wechselspannungen mit hohen Frequenzen werden über das Eingangs-$RC$-Glied voll übertragen und durch den gegengekoppelten Verstärker differenziert. Sind beide Zeitkonstanten gleich groß, geht die Differentiation bei tiefen und hohen Frequenzen nahtlos ineinander über.

Bezüglich der Stabilisierung gegen Schwingneigung gelten dieselben Gesichtspunkte wie bei der vorhergehenden Schaltung. Der Dämpfungswiderstand $R_1$ ist gestrichelt in Abb. 10.19 eingezeichnet.

## 10.6 Lösung von Differentialgleichungen

Es gibt viele Aufgabenstellungen, die sich am einfachsten in Form von Differentialgleichungen beschreiben lassen. Die Lösung erhält man dadurch, dass man die Differentialgleichung mit den beschriebenen Analogiechenschaltungen nachbildet und die sich einstellende Ausgangsspannung misst. Um Stabilitätsprobleme zu vermeiden, formt man die Differentialgleichung so um, dass statt der Differentiatoren ausschließlich Integratoren benötigt werden. Das Verfahren wollen wir am Beispiel einer linearen Differentialgleichung 2. Ordnung erläutern:

$$y'' + k_1 y' + k_0 y = f(x) \qquad (10.15)$$

Im ersten Schritt ersetzt man die unabhängige Variable $x$ durch die Zeit $t$:

$$x = \frac{t}{\tau}$$

*Differentialgleichung:*  
$$\tau^2 \ddot{y} + k_1 \tau \dot{y} + k_0 y = f\left(\frac{t}{\tau}\right)$$

**Abb. 10.20.** Signalflussgraph zur Lösung der Differentialgleichung
<!-- page-import:0790:end -->
