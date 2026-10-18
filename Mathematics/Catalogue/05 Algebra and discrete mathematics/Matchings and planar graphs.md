---
title: "Matchings and planar graphs"
catalogue_ids:
  - "5.8.4"
  - "5.8.5"
---

> [!TLDR]
> A matching assigns disjoint pairs of vertices, while planarity asks whether a graph can be drawn without crossings.

## Two questions about the same graph

Read [[Graph walks and spanning trees]] for vertices, edges, paths, and cycles. A **matching** is a set of edges with no shared endpoint. It selects disjoint pairs. A **planar graph** is a graph that admits a drawing in the plane with edges meeting only at their common endpoints. The first definition concerns selected edges; the second concerns the existence of a drawing. Neither depends on the particular way a graph was first pictured.

## Maximum is stronger than maximal

A matching is **maximal** when no extra edge can be added to it without sharing an endpoint. It is **maximum** when no matching has more edges. Every maximum matching is maximal, but the converse fails. On the path $A-B-C-D$, the single edge $BC$ is maximal because both remaining edges touch it. The matching $\{AB,CD\}$ has two edges and is maximum. A greedy choice can therefore get stuck before finding the best answer.

A matching is **perfect** if it covers every vertex. A graph with an odd number of vertices cannot have a perfect matching, since every selected edge covers exactly two vertices. An even number of vertices is necessary but not sufficient: three outer vertices attached only to one center give an even-sized graph whose maximum matching has just one edge.

## Augmenting paths

An **alternating path** uses edges outside and inside the current matching in turn. An **augmenting path** starts and ends at unmatched vertices and starts and ends with edges outside the matching. Replace all its selected edges by all its unselected edges. The result is still a matching and has one more edge, because the path contains one more unselected edge than selected edge.

Berge's criterion states that a matching is maximum exactly when no augmenting path exists. For the less obvious direction, compare it with a larger matching. In their symmetric difference, every vertex has degree at most two, so the components are alternating paths and even cycles. A larger matching must have more edges on at least one path component; that component is an augmenting path for the smaller matching. This gives a mathematical reason to search for improvements rather than accept a greedy result.

## Worked example in a bipartite graph

A graph is **bipartite** when its vertices split into two sets $L,R$, with all edges between the sets. Let $L=\{a,b\}$, $R=\{1,2\}$, and edges $a1,a2,b1$. Start with matching $\{a1\}$. Vertex $b$ is unmatched. Follow the unselected edge $b1$, the selected edge $1a$, then the unselected edge $a2$. This is an augmenting path from $b$ to unmatched $2$.

Flip its edges to obtain $\{b1,a2\}$, a perfect matching of size two. For bipartite graphs, a search starts from unmatched left vertices, follows unselected edges left-to-right and selected edges right-to-left, and records parents until it reaches an unmatched right vertex. Repeated searches give a straightforward algorithm using $O(n(n+m))$ time with adjacency lists. This is an upper bound that also allows isolated vertices; more refined implementations and algorithms improve it. The same simple directed search is not sufficient for general graphs containing odd cycles, where blossom methods require additional ideas.

The result that supports bipartite feasibility is **Hall's theorem**: a matching covering all of $L$ exists exactly when every subset $S\subseteq L$ has at least $|S|$ neighbors. If two left vertices can both connect only to the same one right vertex, the condition fails for that pair, even though each individual vertex has a neighbor. Checking individual degrees alone misses this obstruction.

## Planar drawings and Euler's formula

Fix a crossing-free drawing of a connected finite planar graph. Its **faces** are the regions left by the edges, including the unbounded outside region. Euler's formula is

$$
n-m+f=2.
$$

For a tree, $m=n-1$ and there is one face, so the formula holds. Adding an edge that closes a cycle splits one face into two: $m$ and $f$ both increase by one, preserving the equation. Removing cycle edges down to a spanning tree proves the formula. A graph with $c$ components instead satisfies $n-m+f=1+c$.

For a simple planar graph with $n\ge3$, the edge bound is $m\le3n-6$. In a connected drawing, each face boundary has at least three edge occurrences, while every edge contributes two boundary occurrences in total. Hence $3f\le2m$; combining with Euler's formula gives the bound. Bridge edges are counted twice on the same face. If the graph is also bipartite and $n\ge3$, the stronger bound is $m\le2n-4$, because no odd cycle can form a face boundary of length three. Trees satisfy this bound directly; the remaining connected case uses face lengths at least four. Disconnected cases follow by adding noncrossing edges between components if needed.

The complete graph $K_5$ has $n=5,m=10$, exceeding $3n-6=9$, so it is not planar. The complete bipartite graph $K_{3,3}$ has $n=6,m=9$, exceeding $2n-4=8$, so it is not planar either. Passing an edge bound does not prove planarity; the bounds are necessary tests only. Likewise, a drawing with crossings does not prove nonplanarity, since another drawing might remove them.

## Practice

1. For $L=\{a,b,c\}$ and neighbor sets $N(a)=\{1\}$, $N(b)=\{1\}$, $N(c)=\{2,3\}$, can a matching cover $L$?
2. A connected planar graph has eight vertices and twelve edges. How many faces does a crossing-free drawing have? Does the edge count alone prove planarity?

> [!example]- Worked answers
> 1. Take $S=\{a,b\}$. Its neighbor set is $\{1\}$, with size one rather than two. Hall's condition fails, so no matching covers all three left vertices. A size-two matching such as $\{a1,c2\}$ is possible.
> 2. Euler's formula gives $f=2-8+12=6$. The calculation assumes planarity. Although $12\le3(8)-6=18$, this inequality alone cannot establish that a graph is planar.

See Cornell's original [matching lecture notes](https://www.cs.cornell.edu/courses/cs6820/2024fa/handouts/matchings.pdf) for augmenting paths and faster bipartite algorithms.
