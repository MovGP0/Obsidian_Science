---
title: "Christoffel symbols"
---

> [!TLDR]
> Christoffel symbols describe how a coordinate basis changes under covariant differentiation. They supply the correction terms needed to differentiate vectors and calculate geodesics, but nonzero symbols do not by themselves imply curvature.

## A changing coordinate grid on a flat floor

Imagine a flat floor with a Cartesian grid. The directions called right and up are the same at every point. Equal changes in a coordinate also represent equal distances everywhere.

Now describe the same floor with polar coordinates. The radial direction points away from the origin. The angular direction is tangent to a circle around the origin. These directions rotate as the angle changes. In addition, the distance represented by a fixed change in angle increases with radius.

The floor has not changed. Only the coordinates have changed. **Christoffel symbols describe how the coordinate basis changes when we compare nearby points.**

```graph
{"bounds":[-4.5,2.55,4.5,-2.55],"height":400,"width":700,"axis":false,"drag":false,"showNavigation":false,"keepAspectRatio":true,"elements":[{"type":"line","def":[[-6.435,-2.4749999999999996],[-6.435,2.4749999999999996]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#c6cdd5","strokeWidth":1,"lastArrow":false,"fixed":true,"dash":0,"highlight":false}},{"type":"line","def":[[-6.435,-2.4749999999999996],[-1.4849999999999999,-2.4749999999999996]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#c6cdd5","strokeWidth":1,"lastArrow":false,"fixed":true,"dash":0,"highlight":false}},{"type":"line","def":[[-5.1975,-2.4749999999999996],[-5.1975,2.4749999999999996]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#c6cdd5","strokeWidth":1,"lastArrow":false,"fixed":true,"dash":0,"highlight":false}},{"type":"line","def":[[-6.435,-1.2374999999999998],[-1.4849999999999999,-1.2374999999999998]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#c6cdd5","strokeWidth":1,"lastArrow":false,"fixed":true,"dash":0,"highlight":false}},{"type":"line","def":[[-3.9599999999999995,-2.4749999999999996],[-3.9599999999999995,2.4749999999999996]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#c6cdd5","strokeWidth":1,"lastArrow":false,"fixed":true,"dash":0,"highlight":false}},{"type":"line","def":[[-6.435,0.0],[-1.4849999999999999,0.0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#c6cdd5","strokeWidth":1,"lastArrow":false,"fixed":true,"dash":0,"highlight":false}},{"type":"line","def":[[-2.7224999999999997,-2.4749999999999996],[-2.7224999999999997,2.4749999999999996]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#c6cdd5","strokeWidth":1,"lastArrow":false,"fixed":true,"dash":0,"highlight":false}},{"type":"line","def":[[-6.435,1.2374999999999998],[-1.4849999999999999,1.2374999999999998]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#c6cdd5","strokeWidth":1,"lastArrow":false,"fixed":true,"dash":0,"highlight":false}},{"type":"line","def":[[-1.4849999999999999,-2.4749999999999996],[-1.4849999999999999,2.4749999999999996]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#c6cdd5","strokeWidth":1,"lastArrow":false,"fixed":true,"dash":0,"highlight":false}},{"type":"line","def":[[-6.435,2.4749999999999996],[-1.4849999999999999,2.4749999999999996]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#c6cdd5","strokeWidth":1,"lastArrow":false,"fixed":true,"dash":0,"highlight":false}},{"type":"curve","def":[[4.8675,4.8662559,4.8625285499999995,4.85632785,4.84766865,4.83657735,4.823083649999999,4.80722385,4.7890425,4.7685891,4.745918099999999,4.72109385,4.694182349999999,4.6652595,4.6344045,4.601699849999999,4.5672363,4.531107899999999,4.4934153,4.4542591499999995,4.413749999999999,4.371996749999999,4.32911325,4.2852182999999995,4.24043235,4.1948775,4.1486791499999995,4.101964349999999,4.05486015,4.00749525,3.9599999999999995,3.9125047499999996,3.8651398500000003,3.8180356499999997,3.7713208499999995,3.7251225,3.6795676499999996,3.6347816999999996,3.59088675,3.54800325,3.5062499999999996,3.4657408499999995,3.4265847,3.3888920999999996,3.3527637,3.31830015,3.2855955,3.2547404999999996,3.2258176499999998,3.19890615,3.1740819,3.1514108999999997,3.1309575,3.1127761499999997,3.09691635,3.0834226499999997,3.07233135,3.06367215,3.05747145,3.0537441,3.0524999999999998,3.0537441,3.05747145,3.06367215,3.07233135,3.0834226499999997,3.09691635,3.1127761499999997,3.1309575,3.1514108999999997,3.1740819,3.19890615,3.2258176499999998,3.2547404999999996,3.2855955,3.31830015,3.3527637,3.3888920999999996,3.4265847,3.4657408499999995,3.5062499999999996,3.54800325,3.59088675,3.6347816999999996,3.6795676499999996,3.7251225,3.7713208499999995,3.8180356499999997,3.8651398500000003,3.9125047499999996,3.9599999999999995,4.00749525,4.05486015,4.101964349999999,4.1486791499999995,4.1948775,4.24043235,4.2852182999999995,4.32911325,4.371996749999999,4.413749999999999,4.4542591499999995,4.4934153,4.531107899999999,4.5672363,4.601699849999999,4.6344045,4.6652595,4.694182349999999,4.72109385,4.745918099999999,4.7685891,4.7890425,4.80722385,4.823083649999999,4.83657735,4.84766865,4.85632785,4.8625285499999995,4.8662559,4.8675],[0.0,0.04749525,0.09486014999999999,0.14196435,0.18867915,0.2348775,0.28043235,0.32521829999999996,0.36911324999999995,0.41199674999999997,0.45375,0.49425915,0.5334153,0.5711079,0.6072363,0.64169985,0.6744045,0.7052594999999999,0.73418235,0.76109385,0.7859181,0.8085891,0.8290424999999999,0.8472238499999999,0.86308365,0.87657735,0.8876686500000001,0.8963278499999999,0.90252855,0.9062559,0.9075,0.9062559,0.90252855,0.8963278499999999,0.8876686500000001,0.87657735,0.86308365,0.8472238499999999,0.8290424999999999,0.8085891,0.7859181,0.76109385,0.73418235,0.7052594999999999,0.6744045,0.64169985,0.6072363,0.5711079,0.5334153,0.49425915,0.45375,0.41199674999999997,0.36911324999999995,0.32521829999999996,0.28043235,0.2348775,0.18867915,0.14196435,0.09486014999999999,0.04749525,0.0,-0.04749525,-0.09486014999999999,-0.14196435,-0.18867915,-0.2348775,-0.28043235,-0.32521829999999996,-0.36911324999999995,-0.41199674999999997,-0.45375,-0.49425915,-0.5334153,-0.5711079,-0.6072363,-0.64169985,-0.6744045,-0.7052594999999999,-0.73418235,-0.76109385,-0.7859181,-0.8085891,-0.8290424999999999,-0.8472238499999999,-0.86308365,-0.87657735,-0.8876686500000001,-0.8963278499999999,-0.90252855,-0.9062559,-0.9075,-0.9062559,-0.90252855,-0.8963278499999999,-0.8876686500000001,-0.87657735,-0.86308365,-0.8472238499999999,-0.8290424999999999,-0.8085891,-0.7859181,-0.76109385,-0.73418235,-0.7052594999999999,-0.6744045,-0.64169985,-0.6072363,-0.5711079,-0.5334153,-0.49425915,-0.45375,-0.41199674999999997,-0.36911324999999995,-0.32521829999999996,-0.28043235,-0.2348775,-0.18867915,-0.14196435,-0.09486014999999999,-0.04749525,-0.0]],"att":{"strokeColor":"#c6cdd5","strokeWidth":1,"fixed":true,"highlight":false}},{"type":"curve","def":[[5.7749999999999995,5.7725118,5.7650571,5.75265405,5.735337299999999,5.7131547000000005,5.6861673,5.6544476999999995,5.618085,5.57717655,5.5318362,5.4821877,5.428366349999999,5.37052065,5.3088073499999995,5.24339805,5.1744726,5.1022158,5.026830599999999,4.94851995,4.8675,4.783993499999999,4.6982265,4.61043825,4.5208663499999995,4.42975665,4.33735995,4.2439287,4.14971865,4.0549905,3.9599999999999995,3.8650094999999993,3.77028135,3.6760713,3.5826400499999997,3.4902433499999996,3.3991336499999996,3.30956175,3.2217735,3.1360064999999997,3.0524999999999998,2.97148005,2.8931693999999997,2.8177841999999997,2.7455274,2.67660195,2.61119265,2.54947935,2.49163365,2.4378123,2.3881638,2.34282345,2.3019149999999997,2.2655523,2.2338327000000002,2.2068453,2.1846627,2.1673459499999996,2.1549428999999996,2.1474882,2.145,2.1474882,2.1549428999999996,2.1673459499999996,2.1846627,2.2068453,2.2338327000000002,2.2655523,2.3019149999999997,2.34282345,2.3881638,2.4378123,2.49163365,2.54947935,2.61119265,2.67660195,2.7455274,2.8177841999999997,2.8931693999999997,2.97148005,3.0524999999999998,3.1360064999999997,3.2217735,3.30956175,3.3991336499999996,3.4902433499999996,3.5826400499999997,3.6760713,3.77028135,3.8650094999999993,3.9599999999999995,4.0549905,4.14971865,4.2439287,4.33735995,4.42975665,4.5208663499999995,4.61043825,4.6982265,4.783993499999999,4.8675,4.94851995,5.026830599999999,5.1022158,5.1744726,5.24339805,5.3088073499999995,5.37052065,5.428366349999999,5.4821877,5.5318362,5.57717655,5.618085,5.6544476999999995,5.6861673,5.7131547000000005,5.735337299999999,5.75265405,5.7650571,5.7725118,5.7749999999999995],[0.0,0.0949905,0.18971865,0.2839287,0.37735994999999994,0.46975664999999994,0.5608663500000001,0.65043825,0.7382264999999999,0.8239934999999999,0.9075,0.98851995,1.0668306,1.1422158,1.2144726,1.28339805,1.34880735,1.4105206499999998,1.46836635,1.5221877,1.5718362,1.61717655,1.6580849999999998,1.6944476999999998,1.7261673,1.7531547,1.7753373000000001,1.7926540499999999,1.8050571,1.8125118,1.815,1.8125118,1.8050571,1.7926540499999999,1.7753373000000001,1.7531547,1.7261673,1.6944476999999998,1.6580849999999998,1.61717655,1.5718362,1.5221877,1.46836635,1.4105206499999998,1.34880735,1.28339805,1.2144726,1.1422158,1.0668306,0.98851995,0.9075,0.8239934999999999,0.7382264999999999,0.65043825,0.5608663500000001,0.46975664999999994,0.37735994999999994,0.2839287,0.18971865,0.0949905,0.0,-0.0949905,-0.18971865,-0.2839287,-0.37735994999999994,-0.46975664999999994,-0.5608663500000001,-0.65043825,-0.7382264999999999,-0.8239934999999999,-0.9075,-0.98851995,-1.0668306,-1.1422158,-1.2144726,-1.28339805,-1.34880735,-1.4105206499999998,-1.46836635,-1.5221877,-1.5718362,-1.61717655,-1.6580849999999998,-1.6944476999999998,-1.7261673,-1.7531547,-1.7753373000000001,-1.7926540499999999,-1.8050571,-1.8125118,-1.815,-1.8125118,-1.8050571,-1.7926540499999999,-1.7753373000000001,-1.7531547,-1.7261673,-1.6944476999999998,-1.6580849999999998,-1.61717655,-1.5718362,-1.5221877,-1.46836635,-1.4105206499999998,-1.34880735,-1.28339805,-1.2144726,-1.1422158,-1.0668306,-0.98851995,-0.9075,-0.8239934999999999,-0.7382264999999999,-0.65043825,-0.5608663500000001,-0.46975664999999994,-0.37735994999999994,-0.2839287,-0.18971865,-0.0949905,-0.0]],"att":{"strokeColor":"#c6cdd5","strokeWidth":1,"fixed":true,"highlight":false}},{"type":"curve","def":[[6.682499999999999,6.67876935,6.66758565,6.648981899999999,6.6230076,6.589733699999999,6.549250949999999,6.5016732,6.4471275,6.38576565,6.3177543,6.243279899999999,6.1625487,6.07578015,5.98321185,5.8850979,5.7817089,5.67332535,5.5602459,5.4427791,5.32125,5.1959886,5.0673397499999995,4.93565655,4.801298699999999,4.6646341499999995,4.526039099999999,4.385893049999999,4.244578799999999,4.1024841,3.9599999999999995,3.8175158999999996,3.6754211999999997,3.53410695,3.3939608999999997,3.25536585,3.1187013,2.98434345,2.85266025,2.7240113999999997,2.59875,2.4772209,2.3597541,2.2466746499999997,2.1382910999999996,2.0349021,1.9367881499999997,1.84421985,1.7574512999999998,1.6767201,1.6022456999999999,1.53423435,1.4728725,1.4183268,1.37074905,1.3302663,1.2969924,1.2710181,1.25241435,1.2412306499999999,1.2374999999999998,1.2412306499999999,1.25241435,1.2710181,1.2969924,1.3302663,1.37074905,1.4183268,1.4728725,1.53423435,1.6022456999999999,1.6767201,1.7574512999999998,1.84421985,1.9367881499999997,2.0349021,2.1382910999999996,2.2466746499999997,2.3597541,2.4772209,2.59875,2.7240113999999997,2.85266025,2.98434345,3.1187013,3.25536585,3.3939608999999997,3.53410695,3.6754211999999997,3.8175158999999996,3.9599999999999995,4.1024841,4.244578799999999,4.385893049999999,4.526039099999999,4.6646341499999995,4.801298699999999,4.93565655,5.0673397499999995,5.1959886,5.32125,5.4427791,5.5602459,5.67332535,5.7817089,5.8850979,5.98321185,6.07578015,6.1625487,6.243279899999999,6.3177543,6.38576565,6.4471275,6.5016732,6.549250949999999,6.589733699999999,6.6230076,6.648981899999999,6.66758565,6.67876935,6.682499999999999],[0.0,0.1424841,0.28457879999999997,0.42589304999999994,0.5660391,0.70463415,0.8412987000000001,0.97565655,1.10733975,1.2359886,1.3612499999999998,1.4827791,1.6002459,1.7133253499999999,1.8217089,1.9250978999999997,2.02321185,2.11578015,2.2025487,2.2832799,2.3577543,2.4257656499999998,2.4871274999999997,2.5416732,2.58925095,2.6297336999999996,2.6630076,2.6889819,2.7075856499999995,2.71876935,2.7224999999999997,2.71876935,2.7075856499999995,2.6889819,2.6630076,2.6297336999999996,2.58925095,2.5416732,2.4871274999999997,2.4257656499999998,2.3577543,2.2832799,2.2025487,2.11578015,2.02321185,1.9250978999999997,1.8217089,1.7133253499999999,1.6002459,1.4827791,1.3612499999999998,1.2359886,1.10733975,0.97565655,0.8412987000000001,0.70463415,0.5660391,0.42589304999999994,0.28457879999999997,0.1424841,0.0,-0.1424841,-0.28457879999999997,-0.42589304999999994,-0.5660391,-0.70463415,-0.8412987000000001,-0.97565655,-1.10733975,-1.2359886,-1.3612499999999998,-1.4827791,-1.6002459,-1.7133253499999999,-1.8217089,-1.9250978999999997,-2.02321185,-2.11578015,-2.2025487,-2.2832799,-2.3577543,-2.4257656499999998,-2.4871274999999997,-2.5416732,-2.58925095,-2.6297336999999996,-2.6630076,-2.6889819,-2.7075856499999995,-2.71876935,-2.7224999999999997,-2.71876935,-2.7075856499999995,-2.6889819,-2.6630076,-2.6297336999999996,-2.58925095,-2.5416732,-2.4871274999999997,-2.4257656499999998,-2.3577543,-2.2832799,-2.2025487,-2.11578015,-2.02321185,-1.9250978999999997,-1.8217089,-1.7133253499999999,-1.6002459,-1.4827791,-1.3612499999999998,-1.2359886,-1.10733975,-0.97565655,-0.8412987000000001,-0.70463415,-0.5660391,-0.42589304999999994,-0.28457879999999997,-0.1424841,-0.0]],"att":{"strokeColor":"#c6cdd5","strokeWidth":1,"fixed":true,"highlight":false}},{"type":"line","def":[[3.9599999999999995,0.0],[6.682499999999999,0.0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#c6cdd5","strokeWidth":1,"lastArrow":false,"fixed":true,"dash":0,"highlight":false}},{"type":"line","def":[[3.9599999999999995,0.0],[6.317754161803133,1.3612499999999996]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#c6cdd5","strokeWidth":1,"lastArrow":false,"fixed":true,"dash":0,"highlight":false}},{"type":"line","def":[[3.9599999999999995,0.0],[5.32125,2.357754161803134]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#c6cdd5","strokeWidth":1,"lastArrow":false,"fixed":true,"dash":0,"highlight":false}},{"type":"line","def":[[3.9599999999999995,0.0],[3.9599999999999995,2.7224999999999997]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#c6cdd5","strokeWidth":1,"lastArrow":false,"fixed":true,"dash":0,"highlight":false}},{"type":"line","def":[[3.9599999999999995,0.0],[2.5987500000000003,2.357754161803134]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#c6cdd5","strokeWidth":1,"lastArrow":false,"fixed":true,"dash":0,"highlight":false}},{"type":"line","def":[[3.9599999999999995,0.0],[1.6022458381968656,1.3612499999999996]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#c6cdd5","strokeWidth":1,"lastArrow":false,"fixed":true,"dash":0,"highlight":false}},{"type":"line","def":[[3.9599999999999995,0.0],[1.2374999999999998,3.3341009106786687e-16]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#c6cdd5","strokeWidth":1,"lastArrow":false,"fixed":true,"dash":0,"highlight":false}},{"type":"line","def":[[3.9599999999999995,0.0],[1.6022458381968652,-1.3612499999999992]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#c6cdd5","strokeWidth":1,"lastArrow":false,"fixed":true,"dash":0,"highlight":false}},{"type":"line","def":[[3.9599999999999995,0.0],[2.5987499999999986,-2.3577541618031335]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#c6cdd5","strokeWidth":1,"lastArrow":false,"fixed":true,"dash":0,"highlight":false}},{"type":"line","def":[[3.9599999999999995,0.0],[3.959999999999999,-2.7224999999999997]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#c6cdd5","strokeWidth":1,"lastArrow":false,"fixed":true,"dash":0,"highlight":false}},{"type":"line","def":[[3.9599999999999995,0.0],[5.32125,-2.357754161803134]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#c6cdd5","strokeWidth":1,"lastArrow":false,"fixed":true,"dash":0,"highlight":false}},{"type":"line","def":[[3.9599999999999995,0.0],[6.317754161803133,-1.3612500000000012]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#c6cdd5","strokeWidth":1,"lastArrow":false,"fixed":true,"dash":0,"highlight":false}},{"type":"line","def":[[-5.1975,-1.2374999999999998],[-4.124999999999999,-1.2374999999999998]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#2455b5","strokeWidth":2.5,"lastArrow":{"type":2,"size":3,"highlightSize":3},"fixed":true,"dash":0,"highlight":false}},{"type":"line","def":[[-5.1975,-1.2374999999999998],[-5.1975,-0.16499999999999995]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b45309","strokeWidth":2.5,"lastArrow":{"type":2,"size":3,"highlightSize":3},"fixed":true,"dash":0,"highlight":false}},{"type":"line","def":[[-3.0524999999999998,0.9075],[-1.9799999999999998,0.9075]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#2455b5","strokeWidth":2.5,"lastArrow":{"type":2,"size":3,"highlightSize":3},"fixed":true,"dash":0,"highlight":false}},{"type":"line","def":[[-3.0524999999999998,0.9075],[-3.0524999999999998,1.9799999999999998]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b45309","strokeWidth":2.5,"lastArrow":{"type":2,"size":3,"highlightSize":3},"fixed":true,"dash":0,"highlight":false}},{"type":"line","def":[[4.7459180539343775,0.45374999999999993],[5.674730299493188,0.9899999999999998]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#2455b5","strokeWidth":2.5,"lastArrow":{"type":2,"size":3,"highlightSize":3},"fixed":true,"dash":0,"highlight":false}},{"type":"line","def":[[4.7459180539343775,0.45374999999999993],[4.450980553934379,0.9645967350573457]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b45309","strokeWidth":2.5,"lastArrow":{"type":2,"size":3,"highlightSize":3},"fixed":true,"dash":0,"highlight":false}},{"type":"line","def":[[6.317754161803133,1.3612499999999996],[7.246566407361943,1.8974999999999997]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#2455b5","strokeWidth":2.5,"lastArrow":{"type":2,"size":3,"highlightSize":3},"fixed":true,"dash":0,"highlight":false}},{"type":"line","def":[[6.317754161803133,1.3612499999999996],[5.432941661803134,2.8937902051720363]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b45309","strokeWidth":2.5,"lastArrow":{"type":2,"size":3,"highlightSize":3},"fixed":true,"dash":0,"highlight":false}},{"type":"line","def":[[3.052499999999999,-1.571836107868756],[2.516249999999998,-2.500648353427566]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#2455b5","strokeWidth":2.5,"lastArrow":{"type":2,"size":3,"highlightSize":3},"fixed":true,"dash":0,"highlight":false}},{"type":"line","def":[[3.052499999999999,-1.571836107868756],[4.0741934701146905,-2.1617111078687565]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#b45309","strokeWidth":2.5,"lastArrow":{"type":2,"size":3,"highlightSize":3},"fixed":true,"dash":0,"highlight":false}},{"type":"text","def":[-3.9599999999999995,3.465,"Cartesian coordinates"],"att":{"fontSize":19,"fixed":true,"anchorX":"middle","anchorY":"middle","useMathJax":false,"strokeColor":"#374151","highlight":false}},{"type":"text","def":[3.9599999999999995,3.465,"Polar coordinates"],"att":{"fontSize":19,"fixed":true,"anchorX":"middle","anchorY":"middle","useMathJax":false,"strokeColor":"#374151","highlight":false}},{"type":"text","def":[-3.9599999999999995,-3.3,"Fixed directions and lengths"],"att":{"fontSize":16,"fixed":true,"anchorX":"middle","anchorY":"middle","useMathJax":false,"strokeColor":"#374151","highlight":false}},{"type":"text","def":[3.9599999999999995,-3.3,"Directions and angular length vary"],"att":{"fontSize":16,"fixed":true,"anchorX":"middle","anchorY":"middle","useMathJax":false,"strokeColor":"#374151","highlight":false}},{"type":"text","def":[-4.3725,-1.5015,"eₓ"],"att":{"fontSize":17,"fixed":true,"anchorX":"middle","anchorY":"middle","useMathJax":false,"strokeColor":"#2455b5","highlight":false}},{"type":"text","def":[-5.444999999999999,-0.3795,"eᵧ"],"att":{"fontSize":17,"fixed":true,"anchorX":"middle","anchorY":"middle","useMathJax":false,"strokeColor":"#b45309","highlight":false}},{"type":"text","def":[7.573499999999999,2.013,"eᵣ"],"att":{"fontSize":17,"fixed":true,"anchorX":"middle","anchorY":"middle","useMathJax":false,"strokeColor":"#2455b5","highlight":false}},{"type":"text","def":[5.0325,3.0195,"eφ"],"att":{"fontSize":17,"fixed":true,"anchorX":"middle","anchorY":"middle","useMathJax":false,"strokeColor":"#b45309","highlight":false}},{"type":"point","def":[-5.1975,-1.2374999999999998],"att":{"size":1.5,"withLabel":false,"fixed":true,"fillColor":"#475569","strokeColor":"#475569","highlight":false}},{"type":"point","def":[-3.0524999999999998,0.9075],"att":{"size":1.5,"withLabel":false,"fixed":true,"fillColor":"#475569","strokeColor":"#475569","highlight":false}},{"type":"point","def":[4.7459180539343775,0.45374999999999993],"att":{"size":1.5,"withLabel":false,"fixed":true,"fillColor":"#475569","strokeColor":"#475569","highlight":false}},{"type":"point","def":[6.317754161803133,1.3612499999999996],"att":{"size":1.5,"withLabel":false,"fixed":true,"fillColor":"#475569","strokeColor":"#475569","highlight":false}},{"type":"point","def":[3.052499999999999,-1.571836107868756],"att":{"size":1.5,"withLabel":false,"fixed":true,"fillColor":"#475569","strokeColor":"#475569","highlight":false}}]}
```

**Fig. 1.1** Two coordinate grids on the same flat plane. Blue arrows show the first coordinate basis direction; orange arrows show the second. Cartesian basis vectors stay fixed. Polar basis vectors rotate, and the angular coordinate basis vector becomes longer as the radius increases. The arrows use a common display scale for each coordinate increment.

Thus, nonzero Christoffel symbols can occur in completely flat space. They do not by themselves measure curvature.

## What the three indices mean

Let $e_j=\partial/\partial x^j$ denote a coordinate basis vector. Define the connection coefficients by

$$
\boxed{\nabla_{e_k}e_j=\Gamma^i{}_{jk}e_i.}
\tag{1}
$$

The indices have these roles:

| Index | Role |
| --- | --- |
| $k$ | The coordinate direction in which we differentiate. |
| $j$ | The basis vector that we differentiate. |
| $i$ | The output basis direction in which the change has a component. |

The repeated index $i$ is summed. Each coefficient tells how much of $e_i$ occurs when we differentiate $e_j$ in direction $e_k$.

This article uses the **Levi-Civita connection**: the unique connection that is compatible with the metric and has zero torsion. Its coordinate coefficients are the Christoffel symbols of the second kind. They satisfy $\Gamma^i{}_{jk}=\Gamma^i{}_{kj}$. Some texts reverse the order of the two lower indices. Their symmetry makes those conventions agree here.

> [!note]
> In a Euclidean plane, an ordinary Cartesian derivative of the basis vectors can represent Eq. (1). On a general curved manifold, vectors at different points belong to different tangent spaces. Use the covariant derivative in Eq. (1), rather than an undefined ordinary subtraction of those vectors.

## Why vector components alone are not enough

Write a vector field as $V=V^j e_j$. When we differentiate it, both the components and the basis can change. The product rule gives

$$
\nabla_{e_k}V
=\left(\partial_k V^i+\Gamma^i{}_{jk}V^j\right)e_i,
\qquad
\boxed{\nabla_k V^i=\partial_k V^i+\Gamma^i{}_{jk}V^j.}
\tag{2}
$$

The first term differentiates the components. The second term accounts for the changing basis. A vector with constant coordinate components can therefore have a nonzero covariant derivative. Conversely, a parallel vector can have changing components.

Christoffel symbols are **not tensor components**. Under a change of coordinates, their transformation law contains an extra term with second derivatives of the coordinate transformation. That term lets Eq. (2) transform as a tensor even though the ordinary component derivative does not.

See [[1.2 Covariant differentiation]], [[21.03 Connection coefficients]], and [[21.05 Transformation behaviour]] for more detail.

## Derive the polar-coordinate symbols

### Coordinate basis vectors are not unit vectors

In the Euclidean plane, use

$$
\mechanical{x}=\mechanical{r}\cos\mechanical{\varphi},
\qquad
\mechanical{y}=\mechanical{r}\sin\mechanical{\varphi},
\qquad \mechanical{r}>0.
\tag{3}
$$

Represent the coordinate basis vectors by their components in the fixed Cartesian frame:

$$
e_r=\begin{pmatrix}\cos\mechanical{\varphi}\\\sin\mechanical{\varphi}\end{pmatrix},
\qquad
e_\varphi=\begin{pmatrix}-\mechanical{r}\sin\mechanical{\varphi}\\\mechanical{r}\cos\mechanical{\varphi}\end{pmatrix}.
\tag{4}
$$

The first vector points outward. The second points in the direction of increasing angle. It has the radius as its norm: a unit increase in angle covers a larger distance at a larger radius.

Differentiate Eq. (4) in the fixed Cartesian frame:

$$
\begin{aligned}
\partial_r e_r&=0,
&\partial_\varphi e_r&=\frac{1}{\mechanical{r}}e_\varphi,\\
\partial_r e_\varphi&=\frac{1}{\mechanical{r}}e_\varphi,
&\partial_\varphi e_\varphi&=-\mechanical{r}e_r.
\end{aligned}
\tag{5}
$$

Comparison with Eq. (1) gives all nonzero Christoffel symbols in this chart:

$$
\boxed{\Gamma^r{}_{\varphi\varphi}=-\mechanical{r},
\qquad
\Gamma^\varphi{}_{r\varphi}
=\Gamma^\varphi{}_{\varphi r}=\frac{1}{\mechanical{r}}.}
\tag{6}
$$

The negative radial coefficient describes the inward change of the angular basis vector as the angle increases. The two reciprocal-radius coefficients describe the rotation of the radial basis and the radial growth of the angular basis.

The angular **unit vector** is a different object:

$$
\widehat e_\varphi=\frac{e_\varphi}{\mechanical{r}},
\qquad
\partial_r\widehat e_\varphi=0,
\qquad
\partial_\varphi\widehat e_\varphi=-e_r.
\tag{7}
$$

Do not use unit-vector derivative coefficients as if they were the coordinate Christoffel symbols. A unit frame is generally not a coordinate basis.

The factors $1/\mechanical{r}$ become singular at the origin because polar coordinates fail there. The floor itself is regular.

## Calculate the symbols from the metric

The metric gives distances and inner products. For the polar plane,

$$
\mathrm d\mechanical{s}^2
=\mathrm d\mechanical{r}^2+\mechanical{r}^2\mathrm d\mechanical{\varphi}^2,
\qquad
(g_{ij})=\begin{pmatrix}1&0\\0&\mechanical{r}^2\end{pmatrix}.
\tag{8}
$$

For the Levi-Civita connection, calculate the symbols from the metric and its first derivatives:

$$
\boxed{\Gamma^i{}_{jk}
=\frac12 g^{i\ell}
\left(\partial_j g_{\ell k}+\partial_k g_{\ell j}-\partial_\ell g_{jk}\right).}
\tag{9}
$$

Here, $g^{i\ell}$ is the inverse metric. The coordinate derivatives of the diagonal polar metric give, for example,

$$
\begin{aligned}
\Gamma^r{}_{\varphi\varphi}
&=-\frac12\partial_r(\mechanical{r}^2)=-\mechanical{r},\\
\Gamma^\varphi{}_{r\varphi}
&=\frac{1}{2\mechanical{r}^2}\partial_r(\mechanical{r}^2)
=\frac1{\mechanical{r}}.
\end{aligned}
\tag{10}
$$

The coefficients do not all have the same unit. In this chart, $\Gamma^r{}_{\varphi\varphi}$ has unit $\unit{m}$, while $\Gamma^\varphi{}_{r\varphi}$ has unit $\unit{m^{-1}}$. Angular coordinates are dimensionless. The index positions and coordinate units determine the unit of each coefficient.

For the geometric construction of the metric connection, see [Tong, Section 3.2.3](https://davidtong.org/teaching/general-relativity/grhtml/S3#S3.SS2.SSS3).

## Straight motion can have coordinate acceleration

For motion in the Euclidean plane, let dots denote derivatives with respect to physical time $\mechanical{t}$. The covariant acceleration has coordinate components

$$
\mechanical{a^i}
=\frac{\mathrm d^2 x^i}{\mathrm d\mechanical{t}^2}
+\Gamma^i{}_{jk}\frac{\mathrm d x^j}{\mathrm d\mechanical{t}}
\frac{\mathrm d x^k}{\mathrm d\mechanical{t}}.
\tag{11}
$$

In Cartesian coordinates, the Christoffel symbols are zero. A free particle therefore satisfies $\mechanical{\ddot x}=\mechanical{\ddot y}=0$.

In polar coordinates, zero covariant acceleration becomes

$$
\boxed{\mechanical{\ddot r}-\mechanical{r}\mechanical{\dot\varphi}^2=0,
\qquad
\mechanical{\ddot\varphi}
+\frac{2}{\mechanical{r}}\mechanical{\dot r}\mechanical{\dot\varphi}=0.}
\tag{12}
$$

The factor of two in the angular equation comes from the two equal coefficients in Eq. (6). The radial equation shows that a nonzero radial coordinate second derivative can occur even when physical acceleration is zero.

> [!note]
> The second expression in Eq. (12) is the angular coordinate component of acceleration. Multiply it by the radius to obtain the tangential component in the polar unit frame. In particular, angular coordinate acceleration and tangential acceleration have different units.

### A concrete straight-line example

Let a particle move at constant speed $\mechanical{v}>0$ along a horizontal line at height $\mechanical{b}>0$:

$$
\mechanical{x}(\mechanical{t})=\mechanical{v}\mechanical{t},
\qquad
\mechanical{y}(\mechanical{t})=\mechanical{b},
\qquad
\mechanical{r}(\mechanical{t})
=\sqrt{\mechanical{v}^2\mechanical{t}^2+\mechanical{b}^2}.
\tag{13}
$$

The polar angle decreases continuously from near a half-turn to near zero. Use the continuous angle in the upper half-plane, rather than a single-argument inverse tangent that loses quadrant information.

```graph
{"bounds":[-2.6,2.3,2.6,-0.5],"height":390,"width":700,"axis":false,"drag":false,"showNavigation":false,"keepAspectRatio":true,"elements":[{"type":"line","def":[[-2.3,0],[2.4,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#79838e","strokeWidth":1.5,"lastArrow":true,"fixed":true,"dash":0}},{"type":"line","def":[[0,-0.2],[0,2.15]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#79838e","strokeWidth":1.5,"lastArrow":true,"fixed":true,"dash":0}},{"type":"line","def":[[-2.1,1],[2.1,1]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#007f89","strokeWidth":3,"lastArrow":false,"fixed":true,"dash":0}},{"type":"text","def":[1.8,0.81,"y = b"],"att":{"fontSize":16,"fixed":true,"anchorX":"middle","anchorY":"middle","useMathJax":false,"strokeColor":"#374151"}},{"type":"text","def":[2.32,-0.18,"x (m)"],"att":{"fontSize":16,"fixed":true,"anchorX":"middle","anchorY":"middle","useMathJax":false,"strokeColor":"#374151"}},{"type":"text","def":[-0.23,2.05,"y (m)"],"att":{"fontSize":16,"fixed":true,"anchorX":"middle","anchorY":"middle","useMathJax":false,"strokeColor":"#374151"}},{"type":"text","def":[-0.13,-0.16,"O"],"att":{"fontSize":16,"fixed":true,"anchorX":"middle","anchorY":"middle","useMathJax":false,"strokeColor":"#374151"}},{"type":"line","def":[[0,0],[-1.4,1]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#9ca3af","strokeWidth":1.5,"lastArrow":false,"fixed":true,"dash":2}},{"type":"line","def":[[-1.4,1],[-0.8999999999999999,1]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#007f89","strokeWidth":4,"lastArrow":true,"fixed":true,"dash":0}},{"type":"point","def":[-1.4,1],"att":{"size":3,"withLabel":false,"fixed":true,"fillColor":"#007f89","strokeColor":"#007f89"}},{"type":"text","def":[-1.4,1.31,"t = −1.4 s"],"att":{"fontSize":16,"fixed":true,"anchorX":"middle","anchorY":"middle","useMathJax":false,"strokeColor":"#374151"}},{"type":"line","def":[[0,0],[0,1]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#9ca3af","strokeWidth":1.5,"lastArrow":false,"fixed":true,"dash":2}},{"type":"line","def":[[0,1],[0.5,1]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#007f89","strokeWidth":4,"lastArrow":true,"fixed":true,"dash":0}},{"type":"point","def":[0,1],"att":{"size":3,"withLabel":false,"fixed":true,"fillColor":"#007f89","strokeColor":"#007f89"}},{"type":"text","def":[0,1.31,"t = 0"],"att":{"fontSize":16,"fixed":true,"anchorX":"middle","anchorY":"middle","useMathJax":false,"strokeColor":"#374151"}},{"type":"line","def":[[0,0],[1.4,1]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#9ca3af","strokeWidth":1.5,"lastArrow":false,"fixed":true,"dash":2}},{"type":"line","def":[[1.4,1],[1.9,1]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#007f89","strokeWidth":4,"lastArrow":true,"fixed":true,"dash":0}},{"type":"point","def":[1.4,1],"att":{"size":3,"withLabel":false,"fixed":true,"fillColor":"#007f89","strokeColor":"#007f89"}},{"type":"text","def":[1.4,1.31,"t = 1.4 s"],"att":{"fontSize":16,"fixed":true,"anchorX":"middle","anchorY":"middle","useMathJax":false,"strokeColor":"#374151"}},{"type":"text","def":[-0.27,0.5,"b"],"att":{"fontSize":18,"fixed":true,"anchorX":"middle","anchorY":"middle","useMathJax":false,"strokeColor":"#374151"}},{"type":"text","def":[-0.78,0.36,"r"],"att":{"fontSize":18,"fixed":true,"anchorX":"middle","anchorY":"middle","useMathJax":false,"strokeColor":"#374151"}},{"type":"text","def":[0.72,0.22,"φ"],"att":{"fontSize":18,"fixed":true,"anchorX":"middle","anchorY":"middle","useMathJax":false,"strokeColor":"#374151"}},{"type":"curve","def":[[0.55,0.549882,0.54953,0.548942,0.54812,0.547064,0.545774,0.54425,0.542494,0.540506,0.538287,0.535838,0.533159,0.530253,0.527121,0.523763,0.520181,0.516376,0.512351,0.508107,0.503646,0.49897,0.49408,0.488979,0.483669,0.478152,0.472431,0.466508,0.460386,0.454067,0.447553],[0.0,0.01137,0.022736,0.034092,0.045433,0.056755,0.068053,0.079321,0.090556,0.101752,0.112904,0.124008,0.135059,0.146053,0.156984,0.167848,0.17864,0.189356,0.19999,0.21054,0.220999,0.231364,0.24163,0.251793,0.261848,0.271791,0.281618,0.291325,0.300907,0.31036,0.319681]],"att":{"strokeColor":"#6a3d9a","strokeWidth":2,"fixed":true}}]}
```

**Fig. 1.2** Straight motion at constant speed, with b = 1 m and v = 1 m/s. Grey lines show position vectors from the origin. Teal arrows show equal velocities. The radius decreases, reaches a minimum, and increases, while the polar angle decreases throughout. The Cartesian path stays straight.

At closest approach, time is zero. The derivatives are

$$
\mechanical{r}=\mechanical{b},
\quad \mechanical{\dot r}=0,
\quad \mechanical{\dot\varphi}=-\frac{\mechanical{v}}{\mechanical{b}},
\quad \mechanical{\ddot r}=\frac{\mechanical{v}^2}{\mechanical{b}},
\quad \mechanical{\ddot\varphi}=0.
\tag{14}
$$

The radial coordinate second derivative is positive. Nevertheless, its connection correction cancels it:

$$
\mechanical{\ddot r}-\mechanical{r}\mechanical{\dot\varphi}^2
=\frac{\mechanical{v}^2}{\mechanical{b}}
-\mechanical{b}\left(\frac{\mechanical{v}}{\mechanical{b}}\right)^2=0.
\tag{15}
$$

No force is needed. The radial coordinate changes at a nonconstant rate because the radial direction changes along the straight path. [[21.08 Geodesics]] gives a related worked example.

## Geodesics in curved spacetime

The same construction applies to spacetime. For an **affine parameter** $\lambda$, the geodesic equation is

$$
\boxed{\frac{\mathrm d^2 x^\mu}{\mathrm d\lambda^2}
+\Gamma^\mu{}_{\alpha\beta}
\frac{\mathrm d x^\alpha}{\mathrm d\lambda}
\frac{\mathrm d x^\beta}{\mathrm d\lambda}=0.}
\tag{16}
$$

The tangent vector is parallel transported along the path. Proper time is an affine parameter for a massive particle. Light needs another affine parameter because its proper time does not advance.

The physical time used in the flat-floor example is affine for that motion. An arbitrary coordinate time in curved spacetime need not be affine. A non-affine parameter adds a term proportional to the tangent on the right side of Eq. (16). See [[1.3 Geodesics]].

In general relativity, freely falling test particles follow geodesics when other forces and their own effect on the geometry can be neglected. Their proper acceleration is zero. Their coordinate second derivatives can still be nonzero.

## Connection is not curvature

The metric, connection, derivative, and curvature have different jobs:

| Object | Function |
| --- | --- |
| Metric $g_{ij}$ | Measures lengths, angles, and spacetime intervals. |
| Christoffel symbols $\Gamma^i{}_{jk}$ | Express the metric connection in a coordinate basis. |
| Covariant derivative $\nabla$ | Compares vector and tensor changes with that connection. |
| Riemann tensor $R^i{}_{jkl}$ | Measures intrinsic curvature and the local path dependence of parallel transport. |

With one common sign convention, the Riemann tensor is

$$
R^i{}_{jkl}
=\partial_k\Gamma^i{}_{jl}-\partial_l\Gamma^i{}_{jk}
+\Gamma^i{}_{mk}\Gamma^m{}_{jl}
-\Gamma^i{}_{ml}\Gamma^m{}_{jk}.
\tag{17}
$$

It contains derivatives and products of the connection coefficients. For example, Eq. (6) gives

$$
R^r{}_{\varphi r\varphi}
=\partial_r(-\mechanical{r})
-(-\mechanical{r})\frac1{\mechanical{r}}
=-1+1=0.
\tag{18}
$$

All curvature components of the polar plane are zero. The nonzero Christoffel symbols cancel in the curvature calculation.

For the Levi-Civita connection, suitable normal coordinates make all Christoffel symbols zero at one chosen point, even in curved spacetime. Their derivatives can remain nonzero there. If the Riemann tensor is nonzero at that point, no coordinate change can make the entire tensor zero.

If curvature is nonzero in a region, no coordinate system can make all connection coefficients zero throughout that region. On a sufficiently small flat region, suitable coordinates can do so. Global topology can impose further restrictions. See [[1.9 Curvature]] and [Tong, Sections 3.3.2–3.3.3](https://davidtong.org/teaching/general-relativity/grhtml/S3#S3.SS3.SSS2).

The metric acts as a ruler. The connection gives the rule for comparison between nearby points. Curvature tests whether parallel transport around small loops returns a vector unchanged. Christoffel symbols are the coordinate coefficients of that comparison rule, not forces or a direct curvature measurement.

The same covariant derivative also appears in the Killing equation. See [[Killing Vector]] for the connection between metric symmetries and conserved quantities.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $g_{ij},g^{ij}$ | — | Metric and inverse metric | Component units depend on the coordinates and index positions. |
| $x^i,x^\mu$ | — | General coordinates | Coordinate units depend on the chart. |
| $\mechanical{x},\mechanical{y}$ | $\unit{m}$ | Cartesian position coordinates | Position on the flat floor. |
| $\mechanical{r}$ | $\unit{m}$ | Radial coordinate | Distance from the polar origin. |
| $\mechanical{\varphi}$ | $1$ | Polar angle | The angle measured in radians. |
| $\mechanical{s}$ | $\unit{m}$ | Spatial distance | The distance defined by the plane metric. |
| $\mechanical{t}$ | $\unit{s}$ | Time | Physical time in the flat-plane example. |
| $\mechanical{v}$ | $\unit{m\,s^{-1}}$ | Constant speed | The speed along the horizontal straight line. |
| $\mechanical{b}$ | $\unit{m}$ | Offset distance | The fixed height and minimum radius of the trajectory. |
| $\mechanical{\dot r}$ | $\unit{m\,s^{-1}}$ | Radial rate | The time derivative of the radial coordinate. |
| $\mechanical{\dot\varphi}$ | $\unit{s^{-1}}$ | Angular rate | The time derivative of the polar angle. |
| $\mechanical{\ddot x},\mechanical{\ddot y},\mechanical{\ddot r}$ | $\unit{m\,s^{-2}}$ | Coordinate second derivatives | Second time derivatives of the stated position coordinates. |
| $\mechanical{\ddot\varphi}$ | $\unit{s^{-2}}$ | Angular coordinate acceleration | The second time derivative of the polar angle. |
| $\mechanical{a^i}$ | — | Covariant acceleration components | Units depend on the coordinate; polar angular and radial components differ. |
