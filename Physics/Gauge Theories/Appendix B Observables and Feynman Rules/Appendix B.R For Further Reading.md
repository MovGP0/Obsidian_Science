---
title: "Appendix B.R For Further Reading"
source_pdf: "D:\\GitHub\\books\\dokumen.pub_gauge-theories-of-the-strong-weak-and-electromagnetic-interactions-second-edition-secondnbsped-9781400848225.pdf"
source_page: "454"
pdf_page: 468
---

> [!TLDR]
> The source reading list covers regularization, loop integrals, symbolic tools, helicity amplitudes, and two-component spinor methods.

<!-- PDF page 468; printed page 454 -->

**Regularization and renormalization.** Most of the material in this appendix is standard fare for textbooks in relativistic quantum mechanics and quantum field theory. One exception is the method of dimensional regularization, here introduced only briefly. A further discussion is to be found in

- G. ’t Hooft and M. Veltman, “Diagrammar,” CERN Yellow Report 73-9; http://j.mp/xt3NiV,
- M. Veltman, *Diagrammatica: The Path to Feynman Diagrams*, Cambridge University Press, Cambridge, 1994, §6.2 and especially appendix C.

The problems of regularization and renormalization of non-Abelian gauge theories are treated at some length in the books by

- T. P. Cheng and L.-F. Li, *Gauge Theory of Elementary Particle Physics*, Oxford University Press, Oxford, 1984; *Gauge Theory of Elementary Particle Physics: Problems and Solutions*, Oxford University Press, Oxford, 2000,
- J. C. Collins, *Renormalization: An Introduction to Renormalization, the Renormalization Group and the Operator-Product Expansion*, Cambridge University Press, Cambridge, 1985,
- C. Itzykson and J.-B. Zuber, *Quantum Field Theory*, Dover, New York, 2006,
- M. E. Peskin and D. V. Schroeder, *An Introduction to Quantum Field Theory*, Westview Press, Boulder, CO, 1995,
- S. Pokorski, *Gauge Field Theories*, 2nd ed., Cambridge University Press, Cambridge, 2000.
- P. Ramond, *Field Theory: A Modern Primer*, 2nd ed., Westview Press, Boulder, CO, 1990.
- A. Zee, *Quantum Field Theory in a Nutshell*, 2nd ed., Princeton University Press, Princeton, NJ, 2010.

**Evaluation of Feynman integrals.** For a thorough grounding in modern methods, consult

- S. Weinzierl, “Introduction to Feynman Integrals,” arXiv:1005.1855,
- R. K. Ellis, Z. Kunszt, K. Melnikov and G. Zanderighi, *Phys. Rep.* **518**, 141 (2012).

A compendium of one-loop integrals may be found in

- R. K. Ellis and G. Zanderighi, *JHEP* **0802**, 002 (2008) and http://qcdloop.fnal.gov.

**Computer-enabled techniques.** Prodigious efforts have gone into the development of automated techniques for generating Feynman rules from Lagrangians, generating Feynman diagrams, and evaluating amplitudes. A highly versatile symbolic manipulation system, well adapted to Dirac algebra, is FORM:

- J.A.M. Vermaseren, “New features of FORM,” arXiv:math-ph/0010025. The program and documentation are available at http://www.nikhef.nl/~form/.

The program LanHEP and the *Mathematica*® package FeynRules automatically generate Feynman rules from the Lagrangian.

- A. V. Semenov, *Comput. Phys. Commun.* **180**, 431 (2009) [arXiv:0805.0555]. For the LanHEP package, see http://j.mp/z99yvV,
- N.D. Christensen and C. Duhr, “FeynRules—Feynman Rules Made Easy,” arXiv:0806.4194. The package is available at http://feynrules.phys.ucl.ac.be.

MadGraph automatically generates tree-level diagrams (and code to evaluate helicity amplitudes) from a Lagrangian. With its companion MadEvent, it makes it possible to generate amplitudes and events for processes arising in any model.

<!-- PDF page 469; printed page 455 -->

- J. Alwall, M. Herquet, F. Maltoni, O. Mattelaer, and T. Stelzer, “MadGraph 5: Going Beyond,” *JHEP* **1106**, 128 (2011) [arXiv:1106.0522]. Programs and documentation may be found at http://madgraph.hep.uiuc.edu.

CompHEP and CalcHEP are packages for evaluation of Feynman diagrams, integration over multi-particle phase space and event generation.

- E. Boos et al. [CompHEP Collaboration], “CompHEP 4.4: Automatic Computations from Lagrangians to Events,” *Nucl. Instrum. Meth.* **A534**, 250 (2004), arXiv:hep-ph/0403113; A. Pukhov et al., “CompHEP: A package for evaluation of Feynman Diagrams and Integration over Multi-Particle Phase Space. User’s Manual for Version 3.3,” arXiv:hep-ph/9908288. CompHEP programs and documentation are available at http://comphep.sinp.msu.ru. For CalcHEP and its documentation, see http://j.mp/xSPXAb.

The package GRACE is a system for generating Feynman diagrams through one loop and creating code for their evaluation.

- G. Bélanger et al., *Phys. Rept.* **430**, 117 (2006), Documentation and programs are available at http://j.mp/wrxnw2.

FeynArts is a *Mathematica*® package for the generation and visualization of Feynman diagrams and amplitudes, which can be evaluated up to one loop by the companion package, FormCalc.

- T. Hahn, *Comput. Phys. Commun.* **140**, 418 (2001), arXiv:hep-ph/0012260. Packages and documentation are available at http://www.feynarts.de.

FeynCalc is a *Mathematica*® package for algebraic calculations in elementary particle physics:

- R. Mertig, M. Bohm, and A. Denner, *Comput. Phys. Commun.* **64**, 345 (1991). For information and programs, see http://www.feyncalc.org.

**Helicity amplitude formalism.** The calculation of transition amplitudes and cross sections or decay rates at lowest order in perturbation theory is straightforward for processes involving four or fewer external particles, e.g., $1\to2$ or $1\to3$ decays, or $2\to2$ scattering. The computational complexity escalates as the number of external legs grows and the number of Feynman diagrams increases. The traditional textbook approach of squaring amplitudes and carrying out the sum over final-state spins rapidly becomes inefficient, because of the large number of terms at intermediate stages of the calculation. Amplitudes involving non-Abelian interactions bring their own combinatorial complications. Evaluating amplitudes for specific polarization (helicity) configurations leads to significant economies, in part because discrete symmetries constrain or relate different helicity amplitudes. For an introduction to the helicity amplitude method and other advances, see

- L. J. Dixon, “Calculating scattering amplitudes efficiently,” in *QCD & Beyond, Proceedings of TASI ’95*, ed. D. E. Soper, World Scientific, Singapore and River Edge, N.J., 1996, p. 539, arXiv:hep-ph/9601359.

The classic papers on the definition and properties of helicity amplitudes are

- M. Jacob and G. C. Wick, *Annals Phys.* **7**, 404 (1959),
- T. L. Trueman and G. C. Wick, *Annals Phys.* **26**, 322 (1964).

**Two-component spinor formalism.** It is often advantageous to carry out calculations in terms of two-component (Weyl–van der Waerden) fermions, rather than four-component (Dirac) fermions. A clear presentation of two-component methods for the computation of QED helicity amplitudes is given in

- S. Dittmaier, *Phys. Rev.* **D59**, 016007 (1999).

<!-- PDF page 470; printed page 456 -->

For an authoritative treatment of two-component spinor techniques and Feynman rules for the $\mathrm{SU}(3)_c\otimes\mathrm{SU}(2)_L\otimes\mathrm{U}(1)_Y$ standard model and its supersymmetric extensions, see

- H. K. Dreiner, H. E. Haber, and S. P. Martin, *Phys. Rept.* **494**, 1 (2010).
