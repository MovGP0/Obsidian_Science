---
title: "Number theory theorems and primality tests"
catalogue_ids:
  - "5.4.4"
  - "5.4.5"
---

> [!TLDR]
> Fermat, Euler, and Wilson give exact conditions involving primes; practical primality tests must distinguish proven primes from numbers that only pass a test.

## Modular powers without huge integers

Read [[Diophantine equations and modular arithmetic]]. To calculate $a^k$ modulo $m$, reduce after every multiplication. **Repeated squaring** uses the binary expansion of $k$ so that the number of multiplications grows with the number of binary digits, rather than with $k$.

For example, calculate $3^{13}\pmod{17}$. Successive squares give $3^2\equiv9$, $3^4\equiv81\equiv13$, and $3^8\equiv169\equiv16$. Since $13=8+4+1$, multiply $16\cdot13\cdot3\equiv12\pmod{17}$. This avoids writing the full power. The same method underlies the tests below.

## Fermat's little theorem

If $p$ is prime and $p\nmid a$, then $a^{p-1}\equiv1\pmod p$. Equivalently $a^p\equiv a\pmod p$ for every integer $a$. Here “Fermat's theorem” means the little theorem, not Fermat's last theorem about sums of integer powers.

A short proof permutes nonzero residues. The list $a,2a,\ldots,(p-1)a$ has no zero and no repeated remainder, because $a$ is invertible modulo $p$. Multiply the list and compare it with $1,2,\ldots,p-1$ to get $a^{p-1}(p-1)!\equiv(p-1)!$. Cancel the invertible factorial to obtain the theorem.

For example, $2^{10}\equiv1\pmod{11}$. Thus $2^{103}=2^{10\cdot10+3}\equiv2^3=8\pmod{11}$. The prime hypothesis makes cancellation valid. It cannot simply be omitted.

## Euler's theorem

The totient $\varphi(m)$ counts residues $1\le r\le m$ relatively prime to $m$. If $\gcd(a,m)=1$, Euler's theorem states $a^{\varphi(m)}\equiv1\pmod m$. The same permutation proof works on the invertible residues. For $m=12$, these are $1,5,7,11$, so $\varphi(12)=4$ and $5^4\equiv1\pmod{12}$.

For a prime power $p^k$, exclude the $p^{k-1}$ multiples of $p$ to obtain $\varphi(p^k)=p^k-p^{k-1}$. For distinct prime factors of $m$, counting independently gives

$$
\varphi(m)=m\prod_{p\mid m}\left(1-\frac1p\right).
$$

Thus $\varphi(18)=18(1-1/2)(1-1/3)=6$. The coprimality condition remains essential: $3^6\not\equiv1\pmod{18}$.

## Wilson's theorem

For integer $n>1$, $n$ is prime exactly when $(n-1)!\equiv-1\pmod n$. For a prime, pair each nonzero residue with its multiplicative inverse. A residue is its own inverse only if $x^2\equiv1$, which factors as $(x-1)(x+1)\equiv0$. A prime field has no zero divisors, so only $1$ and $-1$ remain unpaired, giving product $-1$.

Conversely, if the factorial is $-1$ modulo $n$, every factor $1,\ldots,n-1$ must be relatively prime to $n$. A composite $n$ would have a divisor in that range, which would divide both the factorial and $n$, and hence could not divide their difference $1$. Wilson is therefore an exact criterion. It is usually inefficient for large inputs because computing such a long factorial requires too much work.

## Primality tests and false positives

Trial division through $\sqrt n$ is deterministic and proves primality when no divisor exists. Sieving is efficient when finding many primes below one bound. Fermat testing is faster for large candidates: if a coprime base $a$ gives $a^{n-1}\not\equiv1\pmod n$, then $n$ is composite. Passing gives only a probable prime for that test. Some composite numbers pass a chosen base; Carmichael numbers pass every coprime Fermat base. For instance $561=3\cdot11\cdot17$ is composite despite that behavior.

The **Miller–Rabin test** checks more structure. First handle small inputs: two and three are prime, integers below two are not prime, and larger even integers are composite. For odd $n>3$, write $n-1=2^s d$ with odd $d$. Choose $2\le a\le n-2$. Compute $x=a^d\bmod n$. This round passes if $x=1$ or $n-1$, or if one of the next $s-1$ successive squares equals $n-1$. Otherwise the base proves compositeness. For a prime, the only square roots of one are $\pm1$, which forces this pattern.

For a composite odd number, at most one quarter of possible bases are false witnesses that pass; independent uniform random rounds therefore give an error bound at most $4^{-k}$ after $k$ rounds. That bound depends on random independent base selection. It does not convert an arbitrary fixed collection of passing bases into a proof. See [Stanford's primality-test notes](https://crypto.stanford.edu/pbc/notes/numbertheory/millerrabin.html).

## Worked Miller–Rabin round

Test $n=21$ with base $2$. Since $20=2^2\cdot5$, take $s=2,d=5$. First $x=2^5\bmod21=11$. It is neither $1$ nor $20$. There is one further allowed square: $11^2\bmod21=16$. It is not $20$, so the round rejects $21$ as composite. No factorization was needed for this rejection. A test can prove that a number is composite without supplying its factors.

## Practice

1. Calculate $7^{100}\pmod{15}$ using Euler's theorem, and verify the hypothesis.
2. Use Wilson's theorem on $n=5$ and $n=6$. Then run one Miller–Rabin round for $n=9$ and base $2$.

### Worked answers

1. Since $\gcd(7,15)=1$ and $\varphi(15)=15(1-1/3)(1-1/5)=8$, reduce $100$ modulo $8$ to $4$. Now $7^2\equiv4$, so $7^4\equiv16\equiv1\pmod{15}$. The answer is one.
2. For five, $4!=24\equiv4=-1\pmod5$, so five is prime. For six, $5!=120\equiv0\ne-1\pmod6$, so six is composite. For nine, $8=2^3\cdot1$ and the base-two sequence is $2,4,7$ modulo nine. It starts neither at one nor minus one, and neither later value is eight, so the round proves nine composite.
