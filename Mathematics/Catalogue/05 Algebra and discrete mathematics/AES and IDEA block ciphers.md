---
title: "AES and IDEA block ciphers"
catalogue_ids:
  - "5.5.8"
  - "5.5.9"
---

> [!TLDR]
> AES and IDEA turn fixed-size blocks into permutations by combining several reversible operations over many rounds.

## Blocks, words, and rounds

Start with [[Classical ciphers and cryptanalysis]] for the distinction between correctness and security, and [[Perfect secrecy and public-key arithmetic]] for XOR. A **block cipher** maps fixed-size bit strings to bit strings of the same size. For each fixed key, the map is a permutation: each output comes from exactly one input. A **round** repeats a group of operations with a round-specific subkey. A **key schedule** derives these subkeys from the main key.

The individual operations below are understandable, but their combination is essential. Repeating an operation does not automatically make it secure. Nor does a block cipher alone specify how to encrypt a long message or detect changes. Those tasks need a complete scheme. This article explains the mathematical mechanisms, not a production implementation or a security assessment.

## AES structure

The Advanced Encryption Standard, AES, has 128-bit blocks. Its main key has 128, 192, or 256 bits, with respectively 10, 12, or 14 rounds. Divide a block into sixteen **bytes**, each containing eight bits, and arrange them in a $4\times4$ array called the state. The standard fills the array column by column. Encryption starts with AddRoundKey, then applies rounds. Ordinary rounds use SubBytes, ShiftRows, MixColumns, and AddRoundKey in that order. The final round omits MixColumns. These details are specified by [NIST FIPS 197](https://csrc.nist.gov/pubs/fips/197/final).

**AddRoundKey** XORs the state with a 128-bit round key. It reverses itself because XOR with the same bits twice cancels. For one byte, use hexadecimal notation: each digit represents four bits. Then $53_{16}\oplus CA_{16}=99_{16}$, since $01010011\oplus11001010=10011001$.

**SubBytes** replaces each byte through a fixed one-to-one substitution table, the S-box. It is nonlinear: it is not just a fixed XOR or matrix multiplication on the bits. Its construction first takes a multiplicative inverse in a field with 256 elements, treating the zero byte specially, then applies an affine bit transformation. The table is public. Secrecy comes from the key, not from hiding the table.

**ShiftRows** cyclically shifts state row $r$ left by $r$ places for $r=0,1,2,3$. Thus row $(a,b,c,d)$ in row 1 becomes $(b,c,d,a)$. It changes positions without changing byte values. This sends bytes from one column into different columns before the next mixing operation.

**MixColumns** makes each new column depend on all four old column bytes through an invertible matrix. Its arithmetic is different from ordinary integer multiplication modulo $256$.

## Work through byte arithmetic

Represent an eight-bit byte as a polynomial of degree at most seven with coefficients $0$ or $1$. For example, $83_{16}=10000011_2$ represents $x^7+x+1$. Add coefficients modulo $2$, so addition is XOR. Multiply polynomials and reduce modulo

$$
p(x)=x^8+x^4+x^3+x+1.
$$

This polynomial is irreducible over the two-element field, which makes the resulting 256-element system a field. AES uses this structure to make nonzero-byte inverses possible. To multiply by the byte $02_{16}$, multiply the polynomial by $x$. If the top bit was zero, shift left. If it was one, reduce the new $x^8$ term by XOR with $1B_{16}$ after the shift and truncation.

For $83_{16}$, the shifted low byte is $06_{16}$, and reduction gives $06_{16}\oplus1B_{16}=1D_{16}$. Therefore $02_{16}\cdot83_{16}=1D_{16}$. Since $03_{16}=02_{16}+01_{16}$ in this field, $03_{16}\cdot83_{16}=1D_{16}\oplus83_{16}=9E_{16}$.

MixColumns uses the matrix

$$
\begin{pmatrix}02&03&01&01\\01&02&03&01\\01&01&02&03\\03&01&01&02\end{pmatrix}
$$

whose entries are hexadecimal field elements. For a column $(01,00,00,00)$, the output is $(02,01,01,03)$. Thus one changed input byte can affect several output bytes. Subsequent row shifts and rounds spread that dependence further. This explains diffusion, while the S-box supplies nonlinearity. Decryption reverses the operations with their inverse maps and subkeys in the required reverse order.

## IDEA and incompatible arithmetic

IDEA has 64-bit blocks, a 128-bit main key, eight full rounds, and a final output transformation. A block is four 16-bit words. Its main idea is to combine three reversible operations on those words:

| Operation | Rule | Example |
| --- | --- | --- |
| XOR | Bitwise addition modulo 2 | $3\oplus5=6$ |
| Word addition | Addition modulo $2^{16}=65536$ | $65535+2\equiv1$ |
| Word multiplication | Multiplication modulo $65537$ with special zero encoding | $2\cdot32769\equiv1$ |

The operations do not obey the same distributive rules. This prevents the whole round from collapsing into one simple affine transformation under any one of them. This design idea is not, by itself, a proof of security.

Multiplication needs care. A 16-bit word can represent $0$ through $65535$, but the multiplicative group modulo the prime $65537$ consists of residues $1$ through $65536$. IDEA therefore interprets the all-zero word as $65536$ for multiplication only. A result of $65536$ is encoded back as the zero word. For example, encoded zero times encoded zero means $65536^2\equiv1$, so the output is word $1$. It does not mean ordinary zero multiplication.

Each full round uses six 16-bit subkeys. Write $\boxplus$ for word addition and $\odot$ for the specially encoded multiplication. Given words $(x_1,x_2,x_3,x_4)$ and subkeys $k_1,\ldots,k_6$, compute

$$
a=x_1\odot k_1,\quad b=x_2\boxplus k_2,\quad
c=x_3\boxplus k_3,\quad d=x_4\odot k_4,
$$

$$
e=(a\oplus c)\odot k_5,\quad
f=((b\oplus d)\boxplus e)\odot k_6,\quad g=e\boxplus f.
$$

The next ordered state is $(a\oplus f,c\oplus f,b\oplus g,d\oplus g)$. For input $(1,2,3,4)$ and six subkeys all equal to $1$, the first stage gives $(a,b,c,d)=(1,3,4,4)$. Then $e=5$, $f=12$, and $g=17$, so the next state is $(13,8,18,21)$. This is one illustrative round, not a complete encryption or a recommended key.

Repeat eight rounds with successive subkeys. With the middle-word order used above, the final output transformation on the resulting state is $(x_1\odot k_{49},x_3\boxplus k_{50},x_2\boxplus k_{51},x_4\odot k_{52})$. Thus there are $8\times6+4=52$ subkeys. Key expansion starts by extracting eight successive 16-bit words from the main key, then repeatedly rotates the 128-bit key register left by 25 bits and extracts more words until 52 are available. Lai's original [doctoral thesis](https://www.research-collection.ethz.ch/entities/publication/620f700d-58f8-4d65-94af-8a49d432a46b) develops the construction.

## Practice

1. In AES arithmetic, compute $02_{16}\cdot57_{16}$ and $03_{16}\cdot57_{16}$.
2. In IDEA, compare encoded $0+1$, encoded $0\oplus1$, and encoded $0\cdot1$.

> [!example]- Worked answers
> 1. The top bit of $57_{16}=01010111_2$ is zero, so multiplication by $02_{16}$ gives $AE_{16}$. Multiplication by $03_{16}$ gives $AE_{16}\oplus57_{16}=F9_{16}$. These are field operations, not ordinary products of hexadecimal integers.
> 2. Word addition gives $1$ and XOR gives $1$. For multiplication, encoded $0$ means $65536$, so $65536\times1\equiv65536\pmod{65537}$, which is encoded as word $0$. The same input bit pattern has a different interpretation for multiplication.
