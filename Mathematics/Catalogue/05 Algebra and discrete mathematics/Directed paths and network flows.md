---
title: "Directed paths and network flows"
catalogue_ids:
  - "5.8.6"
  - "5.8.7"
---

> [!TLDR]
> Directed-path algorithms minimize route cost, while flow algorithms distribute quantities subject to capacities and conservation.

## Directed and weighted graphs

Read [[Graph walks and spanning trees]] before this lesson. In a directed graph, an edge $u\to v$ has a direction: it permits travel from $u$ to $v$, not automatically the reverse. Give each edge a real **weight** $w(u,v)$. The weight of a route is the sum of its edge weights. A shortest-path problem asks for the least sum, whereas an unweighted path problem asks for the fewest edges. Here the minimization allows walks, including repeated vertices. If a finite minimum exists, a simple path attains it; a negative cycle can instead make the costs decrease without bound.

Use $+\infty$ as a marker for an unknown or unreachable distance. Initialize $d(s)=0$ at the source and $d(v)=+\infty$ elsewhere. **Relaxing** an edge means checking whether going through $u$ improves the current estimate:

$$
d(v)\leftarrow\min\{d(v),d(u)+w(u,v)\}.
$$

Record a predecessor whenever a distance improves. Following predecessors backward reconstructs the route. These values are upper bounds from actual routes, not guesses that may underestimate the optimum.

## Dijkstra's algorithm

Assume every edge weight is nonnegative. Repeatedly take an unprocessed vertex with the smallest finite distance estimate, finalize its distance, and relax its outgoing edges. If all remaining estimates are infinite, those vertices are unreachable. The key proof is that a route through an unprocessed vertex cannot later reduce the smallest estimate: reaching that vertex already costs at least the chosen estimate, and subsequent nonnegative edges cannot lower the cost.

Consider edges $s\to a$ of weight $4$, $s\to b$ of weight $1$, $b\to a$ of weight $2$, $a\to t$ of weight $1$, and $b\to t$ of weight $7$. Initially, relaxation from $s$ gives $d(a)=4,d(b)=1$. Finalize $b$ next, improving $a$ to $3$ and setting $t$ to $8$. Finalize $a$, improving $t$ to $4$. The route is $s,b,a,t$, with cost $1+2+1=4$.

A simple implementation scans all vertices for the next minimum and takes $O(n^2+m)$ time. With adjacency lists and a binary heap, the usual bound is $O((n+m)\log n)$ for $n\ge2$. Negative weights invalidate the finalization proof. For example, $s\to a=1$, $s\to b=2$, $b\to a=-3$ makes finalizing $a$ at $1$ premature; its actual shortest distance is $-1$.

## Other path methods and their limits

Bellman–Ford relaxes every edge for $n-1$ passes. After $k$ passes, each estimate is no greater than the cost of any route to that vertex using at most $k$ edges, and each finite estimate still comes from an actual walk. If no reachable negative cycle can affect a destination, a shortest route can be chosen without repeated vertices and hence uses at most $n-1$ edges. An additional improvement after those passes signals a negative cycle reachable from the source. Destinations reachable from that cycle have no finite minimum path cost when arbitrary walks are allowed. Bellman–Ford takes $O(nm)$ time.

A directed acyclic graph, or DAG, has no directed cycle. A topological order places every edge from an earlier to a later vertex. Relaxing each outgoing edge once in this order solves shortest paths even with negative weights, in $O(n+m)$ time including ordering. Breadth-first search instead suffices when all edges have the same unit weight. Select the algorithm from the assumptions, not from its name alone.

## Transport networks

A **flow network** is a directed graph with source $s$, sink $t$, and nonnegative capacities $c(u,v)$. A feasible flow assigns $0\le f(u,v)\le c(u,v)$ and satisfies conservation at each vertex other than $s,t$: total inflow equals total outflow. Its value is net flow out of $s$. We seek maximum value, not a shortest route.

A **residual edge** describes a possible adjustment. An original edge $u\to v$ has forward residual capacity $c(u,v)-f(u,v)$ and a reverse residual edge $v\to u$ of capacity $f(u,v)$. A reverse edge permits canceling previously sent flow. If original edges exist in both directions, track their residual contributions separately or combine parallel residual capacities consistently.

Find an $s$-to-$t$ path of positive residual capacities. Its **bottleneck** is their minimum. Increase forward flows and decrease flows corresponding to reverse steps by that amount. This preserves capacities and conservation and increases total value. This is the augmenting-path principle behind Ford–Fulkerson.

## Worked flow and a proof of optimality

Take capacities $s\to a=3$, $s\to b=2$, $a\to b=1$, $a\to t=2$, $b\to t=3$. Send $2$ along $s,a,t$, then $2$ along $s,b,t$, then $1$ along $s,a,b,t$. The resulting flows are $3,2,1,2,3$ respectively, and the total is $5$. At $a$, inflow $3$ equals outflow $1+2$; at $b$, inflow $2+1$ equals outflow $3$.

A **cut** partitions vertices into $S$ containing $s$ and its complement containing $t$. Its capacity is the sum of capacities of original edges directed out of $S$. Flow conservation implies that any feasible flow value equals flow out across this cut minus flow back into it. It therefore cannot exceed the cut capacity. The cut $S=\{s\}$ has capacity $3+2=5$. Since our flow has value $5$, it is optimal.

More generally, if no residual augmenting path exists, let $S$ be all vertices reachable from $s$ in the residual graph. Every original edge out of $S$ is saturated and every original edge into $S$ has zero flow; otherwise a residual edge would cross outward. Thus flow value equals cut capacity. This proves the max-flow/min-cut theorem and gives a certificate of optimality.

With integer capacities, arbitrary augmenting paths increase value by at least one and terminate, but the number of steps can depend on capacity magnitudes. Arbitrary real capacities need more care and an arbitrary path rule need not terminate. Edmonds–Karp always chooses a residual path with the fewest edges by BFS and has bound $O(nm^2)$. That algorithmic choice, not merely repeated augmentation, supplies a polynomial bound independent of capacity sizes in the arithmetic-operation model.

## Practice

1. In the shortest-path example, change $b\to t$ from $7$ to $2$. Find the new optimum.
2. In the flow example, reduce $b\to t$ to capacity $1$. Find a maximum flow and a cut that proves optimality.

> [!example]- Worked answers
> 1. The route $s,b,t$ now has cost $1+2=3$, improving on cost $4$ through $a$. After processing $b$, Dijkstra has $d(a)=3,d(t)=3$; either order of the tie gives final distance $3$.
> 2. Send $2$ along $s,a,t$ and $1$ along $s,b,t$, giving value $3$. The cut $S=\{s,a,b\}$ has outgoing capacity $2+1=3$, so no larger flow is possible.

See Jeff Erickson's original university chapters on [shortest paths](https://jeffe.cs.illinois.edu/teaching/algorithms/book/08-sssp.pdf) and [maximum flows](https://jeffe.cs.illinois.edu/teaching/algorithms/book/10-maxflow.pdf) for proofs and implementation details.
