---
title: "Graph walks and spanning trees"
catalogue_ids:
  - "5.8"
  - "5.8.1"
  - "5.8.2"
  - "5.8.2.1"
  - "5.8.2.2"
  - "5.8.2.3"
  - "5.8.3"
  - "5.8.3.1"
  - "5.8.3.2"
---

> [!TLDR]
> Graph searches find reachable vertices, Euler trails use every edge once, and spanning trees connect all vertices without cycles.

## Graph objects and representations

A **graph** $G=(V,E)$ consists of vertices and edges that join them. Unless stated otherwise, use a finite undirected simple graph: there are no self-loops and no repeated edges. Vertices are mathematical objects, not necessarily points in space. Two vertices are adjacent when an edge joins them. The degree of a vertex is the number of incident edges. The notation $|V|$ means the number of vertices, and $\sum$ means add the indicated terms. Every edge contributes two to the degree sum, so $\sum_{v\in V}\deg(v)=2|E|$.

An **adjacency list** records the neighbors of each vertex. An **adjacency matrix** has entry $1$ when an edge exists and $0$ otherwise. With $n=|V|$ and $m=|E|$, a list needs $O(n+m)$ storage, whereas the full matrix uses $O(n^2)$. Here $O$ gives an upper bound on growth up to a fixed constant for large inputs. The chosen representation affects algorithm cost.

A **walk** is a sequence $v_0,e_1,v_1,\ldots,e_k,v_k$ in which each edge joins its neighboring vertices. A **trail** repeats no edge, and a **path** repeats no vertex. A cycle returns to its start without otherwise repeating vertices. Terminology varies between books; these are the conventions used here. A graph is connected when every pair of vertices is joined by a path. Otherwise its maximal connected parts are its components.

## Search with a queue or a stack

Breadth-first search, BFS, starts at a vertex $s$, marks it, and puts it in a queue. Repeatedly remove the oldest queued vertex, mark each unmarked neighbor, record the current vertex as its parent, and append those neighbors to the queue. Mark on insertion, so a vertex enters only once. The first discovered path to each vertex has the fewest edges: BFS finishes all vertices at distance $k$ before it processes distance $k+1$.

Depth-first search, DFS, follows one unvisited branch as far as possible, then backtracks. It uses a stack or recursive calls. Both searches take $O(n+m)$ time with adjacency lists because each vertex is processed once and each undirected edge is examined twice. They find reachability, but ordinary DFS does not guarantee a shortest path. Repeat from an unvisited vertex to search every component.

## Euler trails and Hamiltonian cycles

An **Euler trail** uses every edge exactly once. An Euler circuit also returns to its start. For a graph with at least one edge whose non-isolated vertices form one connected component, an Euler circuit exists exactly when all degrees are even. An open Euler trail exists exactly when two degrees are odd. Necessity follows from pairing arrivals with departures; only the start and end can remain unpaired.

Hierholzer's algorithm proves sufficiency constructively. Follow unused edges from the permitted start until no extension is possible. With all degrees even, this closes a circuit. If unused edges remain, start a new circuit at a vertex on the first circuit that still has unused edges, and insert it into the first. Repeat. With two odd vertices, the same splicing argument gives a trail between them. Edge bookkeeping implements this in $O(n+m)$ time.

A **Hamiltonian cycle** visits every vertex once before returning to its start. It concerns vertices, not edges. The even-degree test does not decide it. Two triangles sharing one vertex have an Euler circuit, but no Hamiltonian cycle: visiting both triangles would require passing through their shared vertex twice. In the opposite direction, a square with one diagonal has a Hamiltonian boundary cycle, but two odd-degree vertices prevent an Euler circuit. Searching all vertex orders is a correct finite method for Hamiltonian cycles, but it grows factorially. No general polynomial-time decision algorithm is known; this lesson makes no such efficiency claim.

## Trees and spanning trees

A **tree** is a connected graph with no cycle. Between any two vertices there is exactly one path: two different paths would create a cycle. A finite tree on $n$ vertices has $n-1$ edges. One proof removes an endpoint of a longest path, which has degree one, and uses induction. The one-vertex tree starts with zero edges.

A **spanning tree** uses every vertex of a connected graph but only enough edges to form a tree. The parent edges discovered by BFS or DFS form one. They reach every vertex and cannot form a cycle because each newly discovered vertex receives exactly one earlier parent. A disconnected graph has a spanning forest, one tree per component, rather than a spanning tree of the entire graph.

## Worked example: a minimum spanning tree

Give the edges of a connected graph nonnegative weights: $AB=1$, $BC=2$, $AC=3$, $CD=4$, and $BD=5$. A **minimum spanning tree** minimizes the sum of selected edge weights. Kruskal's algorithm sorts the edges by weight and accepts each edge unless it creates a cycle. It accepts $AB$, accepts $BC$, rejects $AC$ because $A,B,C$ are already connected, then accepts $CD$. The result has weight $1+2+4=7$.

![[catalogue-ch05b-spanning-tree.svg|**Fig. C.ch05b.2** Kruskal selects AB, BC, and CD. The rejected edge AC would close a cycle, and BD is unnecessary after all vertices are connected.]]

Why is this greedy step valid? A selected edge is a lightest edge across a cut separating two current components. If an optimal tree lacks it, adding it creates a cycle. That cycle contains another edge across the same cut, of no smaller weight. Exchange those edges without increasing total weight. Repeating this exchange proves that the selected edges can extend to an optimal tree. The proof works for real weights, including negative ones, and ties can give several optimal trees. Sorting dominates the usual $O(m\log m)$ implementation, with efficient component bookkeeping.

## Practice

1. For edges $AB,BC,CA,CD$, find an Euler trail and identify its endpoints.
2. For the weighted example, run BFS from $A$ with alphabetical neighbor order. Is its parent tree a minimum spanning tree?

> [!example]- Worked answers
> 1. Degrees are $2,2,3,1$ at $A,B,C,D$. Thus $C$ and $D$ must be the endpoints. The sequence $C,A,B,C,D$ uses each edge once.
> 2. BFS discovers $B,C$ from $A$, then $D$ from $B$. Its parent edges are $AB,AC,BD$, with weight $1+3+5=9$. It minimizes edge counts from $A$, not total tree weight; the minimum spanning tree has weight $7$.

For algorithm analyses, see Jeff Erickson's university [Algorithms textbook](https://jeffe.cs.illinois.edu/teaching/algorithms/), especially its search and greedy-algorithm chapters.
