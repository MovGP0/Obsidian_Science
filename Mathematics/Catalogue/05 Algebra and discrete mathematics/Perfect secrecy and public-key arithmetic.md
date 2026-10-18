---
title: "Perfect secrecy and public-key arithmetic"
catalogue_ids:
  - "5.5.6"
  - "5.5.7"
  - "5.5.7.1"
  - "5.5.7.2"
  - "5.5.7.3"
---

> [!TLDR]
> A one-time pad gives perfect secrecy under strict key conditions; public-key methods instead use computational assumptions.

## From shared keys to public keys

Read [[Classical ciphers and cryptanalysis]] first for keys and arithmetic modulo an integer. A **symmetric** system uses a shared secret for encryption and decryption. A **public-key** system publishes one key and keeps a related private key secret. The public key permits an operation, such as encryption or signature verification, whose inverse or counterpart requires the private key. Public-key encryption, digital signatures, and key agreement are distinct tasks.

The one-time pad and RSA illustrate two different ideas about secrecy. The first has an exact mathematical guarantee under strong key assumptions. The second uses a public construction whose security depends on a precise scheme and computational assumptions. The small numbers here permit hand calculation. They provide no practical security.

## One-time pad and perfect secrecy

A bit is $0$ or $1$. The operation XOR, written $\oplus$, gives $0$ for equal bits and $1$ for unequal bits. Its key property is $a\oplus b\oplus b=a$. For an $n$-bit message $M$ and key $K$, define

$$
C=M\oplus K,\qquad M=C\oplus K.
$$

For example, $M=1011$ and $K=0110$ give $C=1101$. Applying $0110$ again gives $1011$. For a fixed observed ciphertext $c$ and any candidate message $m$, there is exactly one possible key, $k=m\oplus c$.

Suppose the key is uniformly random among all $2^n$ strings, independent of the message, secret, and used only once. For every $m,c$,

$$
\Pr(C=c\mid M=m)=2^{-n}.
$$

The ciphertext distribution is therefore the same for every message. Observing it does not change the probabilities of the possible messages: this is **perfect secrecy**. The proof also identifies the conditions. A predictable key, a shorter repeating key, or a reused key does not meet them. Fixed message length is assumed here; the ciphertext can disclose length.

If the same pad encrypts $M_1$ and $M_2$, then

$$
C_1\oplus C_2=M_1\oplus M_2,
$$

because the two copies of $K$ cancel. This exposes a relation between messages. Moreover, changing one ciphertext bit changes the corresponding message bit. Perfect secrecy alone does not supply message integrity.

## Diffie and Hellman's concept

A public-key design separates public information from a private secret. A key-agreement protocol lets two parties compute a shared value over a public channel. In the elementary Diffie–Hellman construction, agree publicly on a prime $p$ and an element $g$ in a suitable multiplicative group modulo $p$. Alice chooses secret exponent $a$ and publishes $A=g^a\bmod p$. Bob chooses $b$ and publishes $B=g^b\bmod p$. They compute

$$
B^a\equiv g^{ab}\equiv A^b\pmod p.
$$

For $p=23,g=5,a=6,b=15$, the published values are $A=8,B=19$. Alice obtains $19^6\bmod23=2$; Bob obtains $8^{15}\bmod23=2$. Repeated squaring avoids forming enormous powers: square a residue, reduce modulo $p$, and combine the powers needed by the binary expansion of the exponent.

The public values do not directly disclose the exponents. Recovering an exponent is the **discrete logarithm problem** in the chosen group. Hardness depends on that group and its size. The equation showing equal results is a correctness proof; it does not prove hardness. Basic unauthenticated Diffie–Hellman also permits an active intermediary to establish separate keys with the two parties. Authentication and a complete protocol are required.

## One-way functions

Informally, a **one-way function** is easy to evaluate but hard to invert on typical outputs for an efficient attacker. This is a computational concept, not merely the fact that a function loses information. The constant function is not useful: producing any input with the observed output is easy. A **trapdoor** supplies extra secret information that makes an otherwise difficult inversion possible. Proving that the needed one-way functions exist is a major unresolved question; practical designs use studied assumptions.

## RSA: a complete small example

Choose distinct primes $p=5,q=11$, giving $n=pq=55$ and $\varphi(n)=(p-1)(q-1)=40$. Choose $e=3$, relatively prime to $40$, and solve $ed\equiv1\pmod{40}$. The value $d=27$ works because $3\times27=81=2\times40+1$. Publish $(n,e)$ and retain $d$ and the factors privately.

The textbook transformations on integer messages $0\le m<n$ are

$$
c\equiv m^e\pmod n,\qquad m\equiv c^d\pmod n.
$$

Take $m=7$. Encryption gives $7^3=343\equiv13\pmod{55}$. For decryption, $13^2\equiv4$, $13^4\equiv16$, $13^8\equiv36$, and $13^{16}\equiv31$. As $27=16+8+2+1$, multiply the corresponding residues: $31\times36\times4\times13\equiv7\pmod{55}$.

Why does this work for every message, including multiples of $5$ or $11$? Modulo either prime, the message is either zero, in which case the claim is immediate, or nonzero, in which case Fermat's theorem reduces the exponent $ed$ to $1$ because $ed-1$ is a multiple of both $p-1$ and $q-1$. Thus $m^{ed}\equiv m$ modulo both primes. Two integers equal modulo both distinct primes are equal modulo their product.

Textbook RSA is deterministic and has algebraic structure. Correctness is not a recommendation to use this raw operation for encryption. Practical RSA encryption uses a specified randomized encoding such as OAEP and a maintained implementation. Factoring $n$ reveals the private arithmetic, but no general equivalence between RSA inversion and integer factorization is assumed here.

## Practice

1. Encrypt $1010$ with pad $1100$, then show what happens if the last ciphertext bit is flipped.
2. For $p=3,q=11,e=3$, find $d$ modulo $20$ and encrypt $m=4$.

> [!example]- Worked answers
> 1. The ciphertext is $0110$. Flipping the last bit gives $0111$, which decrypts with $1100$ to $1011$. The last plaintext bit changed; the pad does not detect the alteration.
> 2. Here $n=33$ and $\varphi(n)=20$. Since $3\times7=21\equiv1\pmod{20}$, take $d=7$. Encryption gives $4^3=64\equiv31\pmod{33}$. Decryption gives $31^7\equiv(-2)^7=-128\equiv4$.

The distinctions between raw RSA, encoded encryption, and key agreement are developed in Boneh and Shoup's [cryptography textbook](https://crypto.stanford.edu/~dabo/cryptobook/). The original [Diffie–Hellman paper](https://doi.org/10.1109/TIT.1976.1055638) introduced the public-key perspective.
