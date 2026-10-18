---
title: "Classical ciphers and cryptanalysis"
catalogue_ids:
  - "5.5"
  - "5.5.1"
  - "5.5.2"
  - "5.5.3"
  - "5.5.4"
  - "5.5.4.1"
  - "5.5.4.2"
  - "5.5.4.3"
  - "5.5.4.4"
  - "5.5.5"
  - "5.5.5.1"
  - "5.5.5.2"
---

> [!TLDR]
> Classical ciphers use reversible arithmetic to hide text, but repeated language patterns can reveal their keys.

## Purpose and mathematical model

**Cryptology** includes cryptography, which constructs methods to protect information, and cryptanalysis, which studies how those methods can fail. Encryption aims at confidentiality: a reader without the key should not learn the message. Authentication and integrity are different goals. An encrypted message can still be changed unless the system also detects changes.

This lesson needs ordinary integer arithmetic. Write $a\equiv b\pmod n$ when $a-b$ is a multiple of $n$. Thus $29\equiv3\pmod{26}$. A remainder is one of $0,1,\ldots,n-1$. Encode letters by $A=0,B=1,\ldots,Z=25$, and omit spaces in the examples. The encoding is public; it is not a secret key.

A **cryptosystem** specifies message set $M$, ciphertext set $C$, key set $K$, encryption maps $E_k:M\to C$, and decryption maps $D_k:C\to M$. Correctness requires

$$
D_k(E_k(m))=m
$$

for every allowed message $m$ and key $k$. This equation proves recovery, not security. A correct cipher might be easy to break. A security statement must also say what an attacker knows and can do: see ciphertext only, know some message/ciphertext pairs, or request encryptions of chosen messages. Treat the algorithm as public and the key as secret. The small historical examples below teach arithmetic and are not methods for protecting present-day data.

## Affine substitutions

An affine cipher replaces each letter number $x$ by

$$
y\equiv ax+b\pmod{26}.
$$

The key is $(a,b)$. To recover $x$, multiplication by $a$ must have an inverse modulo $26$. This holds exactly when $\gcd(a,26)=1$, where the greatest common divisor is the largest positive integer dividing both numbers. An inverse $a^{-1}$ satisfies $a^{-1}a\equiv1$. Then $x\equiv a^{-1}(y-b)$.

For $(a,b)=(5,8)$, the inverse of $5$ is $21$ because $5\times21=105=4\times26+1$. Encrypt $H$, whose number is $7$: $5\times7+8=43\equiv17$, so the result is $R$. Decrypt $R$: $21(17-8)=189\equiv7$. The key $a=2$ is invalid: both $x=0$ and $x=13$ produce $y=b$, so decryption cannot distinguish them. A Caesar shift is the special case $a=1$.

## Vigenère and matrix substitutions

Vigenère uses a repeating list of shifts $k_0,\ldots,k_{r-1}$:

$$
y_i\equiv x_i+k_{i\bmod r}\pmod{26}.
$$

With key $KEY=(10,4,24)$, encrypt $CAT=(2,0,19)$ to $(12,4,17)=MER$. Subtraction reverses each position. Unlike an affine substitution, the same plaintext letter can produce different ciphertext letters at different positions. However, key repetition still creates structure.

A matrix, or Hill, substitution processes a vector of letters at once. For column vectors with two entries, take

$$
K=\begin{pmatrix}3&3\\2&5\end{pmatrix},\qquad
\begin{pmatrix}y_1\\y_2\end{pmatrix}
\equiv K\begin{pmatrix}x_1\\x_2\end{pmatrix}\pmod{26}.
$$

Matrix multiplication means $y_1=3x_1+3x_2$ and $y_2=2x_1+5x_2$, followed by remainder reduction. Thus $HI=(7,8)$ becomes $(45,54)\equiv(19,2)=TC$. The determinant is $3\times5-3\times2=9$, which has inverse $3$ modulo $26$. The inverse matrix is

$$
K^{-1}\equiv3\begin{pmatrix}5&-3\\-2&3\end{pmatrix}
\equiv\begin{pmatrix}15&17\\20&9\end{pmatrix}\pmod{26}.
$$

Multiplying $(19,2)$ gives $(319,398)\equiv(7,8)$. In general, an integer matrix is invertible modulo $n$ exactly when its determinant is relatively prime to $n$. A nonzero determinant alone is insufficient. See [[10.03 Matrices]] for the ordinary matrix rules.

## Statistical cryptanalysis

Language has unequal letter frequencies and repeated groups. A single-letter substitution preserves frequencies, although it changes the letter labels. An analyst can count letters, propose a mapping, and check pairs and words. The most common symbol need not represent $E$ in a short message; frequency gives evidence, not certainty. Known plaintext can be stronger: two independent letter pairs can restrict an affine key, and enough independent vector pairs can determine a Hill matrix.

For Vigenère, the **Kasiski method** records distances between repeated ciphertext groups. A repeated plaintext group encrypted at the same key position repeats in ciphertext. Its distance is then a multiple of the key period. Distances $18$ and $30$ suggest divisors of $\gcd(18,30)=6$, such as $2,3,6$. Repeats can also occur by chance, and the true key can have a smaller effective period. Test candidates by separating positions into columns and analyzing each column as a shift cipher.

The **index of coincidence** measures repeated-letter concentration. For a text of length $N\ge2$, with counts $f_j$ for the 26 letters, it is

$$
I=\frac{\sum_j f_j(f_j-1)}{N(N-1)}.
$$

It is the fraction of ordered pairs of distinct positions with equal letters. For $AABC$, the numerator is $2$ and the denominator is $12$, so $I=1/6$. Under a simplified long-text model, if the language collision rate is $I_L$ and uniform letters have $I_U=1/26$, a period-$r$ cipher has approximately $I\approx I_U+(I_L-I_U)/r$. Rearranging gives the rough **Friedman estimate** $r\approx(I_L-I_U)/(I-I_U)$. This is an approximation, not a universal period formula. Finite texts, language choice, and key structure affect it. Compare this estimate with Kasiski distances and the column tests.

## Practice

1. Encrypt and decrypt $C$ with affine key $(7,3)$. Find the inverse explicitly.
2. In a six-letter text, the counts are $3,2,1$. Compute the index of coincidence. Do distances $12$ and $20$ prove a Vigenère period of $4$?

> [!example]- Worked answers
> 1. $C=2$ gives $7\times2+3=17=R$. Since $7\times15=105\equiv1\pmod{26}$, decrypt by $15(17-3)=210\equiv2=C$.
> 2. The numerator is $3(2)+2(1)+1(0)=8$ and the denominator is $6(5)=30$, giving $I=4/15$. The greatest common divisor of the distances is $4$, but that only suggests candidate periods. Chance repeats or a smaller period can give the same distances.

For the broader distinction between correctness and security, see Boneh and Shoup's original, freely available [A Graduate Course in Applied Cryptography](https://crypto.stanford.edu/~dabo/cryptobook/). Its formal security treatment goes beyond this introductory lesson.
