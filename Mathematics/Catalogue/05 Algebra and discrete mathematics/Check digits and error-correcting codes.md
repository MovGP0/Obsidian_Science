---
title: "Check digits and error-correcting codes"
catalogue_ids:
  - "5.4.6"
  - "5.4.6.1"
  - "5.4.6.2"
---

> [!TLDR]
> Extra symbols can detect altered data; enough separation between valid codewords also permits correction of a limited number of errors.

## Detection is not correction

Read [[Diophantine equations and modular arithmetic]]. A **codeword** is a permitted string of symbols. An encoder adds redundancy so that not every possible received string is valid. A failed check proves that an error occurred, but a successful check need not prove that the data are unchanged. A **check digit** is one common form of this added information.

For a simple decimal scheme, append $c$ so that the sum of all digits is divisible by ten. For data $4,7,2$, choose $c=7$, since $4+7+2+7=20$. Changing exactly one digit changes the sum by a nonzero integer of absolute value at most nine, which cannot be a multiple of ten. Thus every single-digit substitution is detected. Exchanging any two digits leaves the sum unchanged, so the scheme detects no transposition at all.

## Weighted checks

Different weights can detect order changes. Define a four-symbol toy code by $d_1+2d_2+3d_3+c\equiv0\pmod{11}$, with each symbol allowed from $0$ through $10$. To encode $(2,4,7)$, the weighted sum is $2+8+21=31\equiv9$, so $c=2$ gives a valid word.

If one data symbol changes by $\delta\ne0\pmod{11}$, its contribution changes by $w\delta$, which is nonzero because each weight is invertible modulo eleven. A swap of unequal data symbols at positions with different weights changes the sum by $(w_i-w_j)(d_j-d_i)$, again nonzero modulo eleven. These are proofs of particular detection properties, not an assertion that the scheme detects every possible alteration.

An actual standard must also define symbol restrictions, lengths, and weights. ISBN-10, for example, uses a modulo-eleven check with a special representation for ten. The toy code here teaches the mechanism without claiming to implement an identifier standard. See [Noam Elkies's coding theory notes](https://people.math.harvard.edu/~elkies/M256.13/index.html) for checksum and distance connections.

## Hamming distance and correction limits

The **Hamming distance** $d(u,v)$ counts positions where equal-length words differ. For $u=10110$ and $v=10011$, it is two: positions three and five differ. The minimum distance $d_{\min}$ of a code is the smallest distance between distinct codewords.

A code detects every error in at most $d_{\min}-1$ positions because such an alteration cannot reach another codeword. To correct up to $t$ altered positions uniquely, require $d_{\min}\ge2t+1$. Otherwise one received word could be within distance $t$ of two codewords. The triangle inequality explains the condition: if $r$ is within $t$ of $u$ and $v$, then $d(u,v)\le d(u,r)+d(r,v)\le2t$.

The binary repetition code $\{000,111\}$ has minimum distance three. It corrects one error by majority vote. A received $101$ is closer to $111$ than $000$. With two errors, $000$ can become $110$, and majority decoding gives the wrong message. Redundancy guarantees only the stated error limit.

![[catalogue-ch05a-code-distance.svg|**Fig. C.05a.2** The eight binary words of length three separate into two radius-one decoding sets around 000 and 111.]]

In Fig. C.05a.2, each side contains one codeword and all words one bit away. The sets do not overlap. This is why one error can be corrected, rather than merely detected.

## Linear codes over a finite field

In a binary linear code, addition is coordinatewise modulo two. A **parity-check matrix** $H$ defines valid words by $Hc=0$. A received word $r=c+e$ has **syndrome** $s=Hr=Hc+He=He$. Thus the syndrome depends on the error pattern rather than on the original valid word.

For a seven-bit Hamming code, choose

$$
H=\begin{pmatrix}
1&0&1&0&1&0&1\\
0&1&1&0&0&1&1\\
0&0&0&1&1&1&1
\end{pmatrix}.
$$

Column $j$ is the binary expression of $j$ with the least significant bit first. A single error in position $j$ selects exactly that column as the syndrome. Every nonzero three-bit syndrome therefore names one position. Columns are distinct and nonzero, which excludes codewords of weight one or two; columns one, two, and three sum to zero, so the minimum distance is exactly three.

## Worked encoding and decoding

Use data positions $3,5,6,7$ and parity positions $1,2,4$. Choose data $(1,0,1,1)$. The first check equation gives $c_1+c_3+c_5+c_7=0$, so $c_1=0$. The second gives $c_2+c_3+c_6+c_7=0$, so $c_2=1$. The third gives $c_4+c_5+c_6+c_7=0$, so $c_4=0$. The word is $0110011$.

Suppose position six flips, yielding $r=0110001$. Multiplying by $H$ gives syndrome $(0,1,1)^T$. Read it as $0+2+4=6$, then flip position six back. The code corrects any single error. It does not reliably distinguish two errors from one: the sum of two different columns is another nonzero column, which would make this decoder flip a third position. An additional overall parity bit can extend the scheme, but its decoding rules must explicitly distinguish detection from correction.

## Practice

1. Encode the decimal data $8,2,6$ with the unweighted modulo-ten check. Does swapping the first and last digit pass?
2. In the displayed Hamming matrix, a single error gives syndrome $(1,0,1)^T$. Which position is wrong? Why can a zero syndrome still conceal multiple errors?

### Worked answers

1. The sum is $16$, so append $4$ to make $20$. The word $8264$ is valid. Swapping gives $6284$, which still sums to twenty and passes. The method detects substitutions but does not preserve digit order.
2. The binary value is $1+0\cdot2+1\cdot4=5$, so flip position five. Multiple errors can have check columns that sum to zero; for example positions one, two, and three do so. Such an error pattern changes one valid word into another and has zero syndrome.
