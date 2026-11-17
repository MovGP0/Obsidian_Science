---
title: "8.3 Rotation Matrices"
---

> [!TLDR]
> Rotation matrices act on vectors and describe the composition of spatial rotations.

Rotation matrices give a linear-algebraic description of rotation. Consider a point mass moving counterclockwise in a circle of radius $\mechanical r$ in the $xy$ plane about $O$. Its Cartesian and polar coordinates satisfy $\mechanical x=\mechanical r\cos\mechanical\theta$, $\mechanical y=\mechanical r\sin\mechanical\theta$, and $\mechanical r^2=\mechanical x^2+\mechanical y^2$. The angle can be recovered using $\operatorname{atan2}(\mechanical y,\mechanical x)$ so that the quadrant is preserved.

```graph
bounds: [-3.48, 1.64, 3.48, -1.52]
width: 744
height: 338
axis: false
drag: false
showNavigation: false
keepAspectRatio: false
elements: [
  {"type":"curve","def":[[-0.64,-0.6472,-0.6686,-0.704,-0.7529,-0.8147,-0.8887,-0.9739,-1.0692,-1.1735,-1.2854,-1.4035,-1.5263,-1.6524,-1.78,-1.9076,-2.0337,-2.1565,-2.2746,-2.3865,-2.4908,-2.5861,-2.6713,-2.7453,-2.8071,-2.856,-2.8914,-2.9128,-2.92,-2.9128,-2.8914,-2.856,-2.8071,-2.7453,-2.6713,-2.5861,-2.4908,-2.3865,-2.2746,-2.1565,-2.0337,-1.9076,-1.78,-1.6524,-1.5263,-1.4035,-1.2854,-1.1735,-1.0692,-0.9739,-0.8887,-0.8147,-0.7529,-0.704,-0.6686,-0.6472,-0.64],[0,0.1276,0.2537,0.3765,0.4946,0.6065,0.7108,0.8061,0.8913,0.9653,1.0271,1.076,1.1114,1.1328,1.14,1.1328,1.1114,1.076,1.0271,0.9653,0.8913,0.8061,0.7108,0.6065,0.4946,0.3765,0.2537,0.1276,0,-0.1276,-0.2537,-0.3765,-0.4946,-0.6065,-0.7108,-0.8061,-0.8913,-0.9653,-1.0271,-1.076,-1.1114,-1.1328,-1.14,-1.1328,-1.1114,-1.076,-1.0271,-0.9653,-0.8913,-0.8061,-0.7108,-0.6065,-0.4946,-0.3765,-0.2537,-0.1276,0]],"att":{"strokeColor":"#738799","strokeWidth":1.4,"lastArrow":false,"dash":2,"fixed":true,"highlight":false}},
  {"type":"line","def":[[-3.2,0],[-0.36,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#344b61","strokeWidth":2.05,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"line","def":[[-1.78,-1.4],[-1.78,1.4]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#344b61","strokeWidth":2.05,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text","def":[-0.3500000000000001,-0.055,"+x"],"att":{"anchorX":"left","fontSize":16,"strokeColor":"#344b61","useMathJax":false,"fixed":true,"highlight":false}},
  {"type":"text","def":[-1.7,1.4,"+y"],"att":{"anchorX":"left","fontSize":16,"strokeColor":"#344b61","useMathJax":false,"fixed":true,"highlight":false}},
  {"type":"text","def":[-1.9100000000000001,-0.14,"𝑂"],"att":{"anchorX":"left","fontSize":16,"strokeColor":"#344b61","useMathJax":false,"fixed":true,"highlight":false}},
  {"type":"text","def":[-3.26,1.4,"(a)"],"att":{"anchorX":"left","fontSize":16,"strokeColor":"#344b61","useMathJax":false,"fixed":true,"highlight":false}},
  {"type":"point","def":[-1.78,0],"att":{"size":3,"withLabel":false,"strokeColor":"#344b61","fillColor":"#344b61","fixed":true,"highlight":false}},
  {"type":"line","def":[[-1.78,0],[-0.7688,0.5264]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#186b99","strokeWidth":2.05,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"point","def":[-0.7688,0.5264],"att":{"size":3,"withLabel":false,"strokeColor":"#186b99","fillColor":"#186b99","fixed":true,"highlight":false}},
  {"type":"text","def":[-0.75,0.65,"𝑃"],"att":{"anchorX":"left","fontSize":16,"strokeColor":"#186b99","useMathJax":false,"fixed":true,"highlight":false}},
  {"type":"line","def":[[-1.78,0],[-1.2427,1.0054]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#2b7354","strokeWidth":2.05,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"point","def":[-1.2427,1.0054],"att":{"size":3,"withLabel":false,"strokeColor":"#2b7354","fillColor":"#2b7354","fixed":true,"highlight":false}},
  {"type":"text","def":[-1.24,1.07,"P′"],"att":{"anchorX":"left","fontSize":16,"strokeColor":"#2b7354","useMathJax":false,"fixed":true,"highlight":false}},
  {"type":"text","def":[-1.3,0.23,"rᵢ"],"att":{"anchorX":"left","fontSize":16,"strokeColor":"#186b99","useMathJax":false,"fixed":true,"highlight":false}},
  {"type":"text","def":[-1.55,0.83,"r𝒻"],"att":{"anchorX":"left","fontSize":16,"strokeColor":"#2b7354","useMathJax":false,"fixed":true,"highlight":false}},
  {"type":"curve","def":[[-1.4,-1.4,-1.4001,-1.4001,-1.4002,-1.4003,-1.4005,-1.4007,-1.4009,-1.4011,-1.4014,-1.4017,-1.402,-1.4024,-1.4027,-1.4031,-1.4036,-1.404,-1.4045,-1.405,-1.4056,-1.4061,-1.4067,-1.4074,-1.408,-1.4087,-1.4094,-1.4101,-1.4109,-1.4117,-1.4125,-1.4133,-1.4142,-1.4151,-1.416,-1.417,-1.4179,-1.419,-1.42,-1.421,-1.4221,-1.4232,-1.4244,-1.4255,-1.4267,-1.4279,-1.4292,-1.4304,-1.4317,-1.433,-1.4344,-1.4357,-1.4371,-1.4385,-1.44,-1.4415,-1.4429],[0,0.0033,0.0065,0.0098,0.013,0.0163,0.0195,0.0228,0.026,0.0293,0.0325,0.0358,0.039,0.0423,0.0455,0.0487,0.052,0.0552,0.0584,0.0616,0.0648,0.068,0.0712,0.0744,0.0776,0.0808,0.084,0.0872,0.0903,0.0935,0.0966,0.0998,0.1029,0.1061,0.1092,0.1123,0.1154,0.1185,0.1216,0.1247,0.1277,0.1308,0.1339,0.1369,0.1399,0.143,0.146,0.149,0.152,0.1549,0.1579,0.1609,0.1638,0.1668,0.1697,0.1726,0.1755]],"att":{"strokeColor":"#738799","strokeWidth":2.05,"lastArrow":false,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text","def":[-1.42,0.11,"θᵢ"],"att":{"anchorX":"left","fontSize":16,"strokeColor":"#344b61","useMathJax":false,"fixed":true,"highlight":false}},
  {"type":"curve","def":[[-1.55,-1.55,-1.5502,-1.5504,-1.5507,-1.5511,-1.5515,-1.5521,-1.5527,-1.5535,-1.5543,-1.5552,-1.5561,-1.5572,-1.5583,-1.5596,-1.5609,-1.5623,-1.5637,-1.5653,-1.5669,-1.5686,-1.5704,-1.5723,-1.5742,-1.5762,-1.5783,-1.5805,-1.5827,-1.585,-1.5874,-1.5899,-1.5924,-1.595,-1.5977,-1.6004,-1.6032,-1.6061,-1.609,-1.612,-1.6151,-1.6182,-1.6214,-1.6247,-1.628,-1.6313,-1.6347,-1.6382,-1.6417,-1.6453,-1.6489,-1.6526,-1.6563,-1.66,-1.6639,-1.6677,-1.6716],[0,0.0044,0.0089,0.0133,0.0177,0.0221,0.0266,0.031,0.0353,0.0397,0.0441,0.0484,0.0528,0.0571,0.0613,0.0656,0.0699,0.0741,0.0782,0.0824,0.0865,0.0906,0.0947,0.0987,0.1027,0.1066,0.1106,0.1144,0.1183,0.122,0.1258,0.1295,0.1331,0.1367,0.1402,0.1437,0.1472,0.1505,0.1539,0.1571,0.1603,0.1635,0.1666,0.1696,0.1726,0.1755,0.1783,0.1811,0.1838,0.1864,0.189,0.1915,0.1939,0.1962,0.1985,0.2007,0.2029]],"att":{"strokeColor":"#738799","strokeWidth":2.05,"lastArrow":false,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text","def":[-1.46,0.29,"θ𝒻"],"att":{"anchorX":"left","fontSize":16,"strokeColor":"#344b61","useMathJax":false,"fixed":true,"highlight":false}},
  {"type":"curve","def":[[-1.1502,-1.1538,-1.1574,-1.1611,-1.1649,-1.1687,-1.1726,-1.1766,-1.1806,-1.1847,-1.1889,-1.1932,-1.1975,-1.2019,-1.2063,-1.2108,-1.2154,-1.22,-1.2247,-1.2295,-1.2344,-1.2393,-1.2442,-1.2492,-1.2543,-1.2595,-1.2647,-1.2699,-1.2753,-1.2806,-1.2861,-1.2916,-1.2971,-1.3027,-1.3084,-1.3141,-1.3199,-1.3257,-1.3315,-1.3375,-1.3434,-1.3495,-1.3555,-1.3617,-1.3678,-1.374,-1.3803,-1.3866,-1.393,-1.3994,-1.4058,-1.4123,-1.4188,-1.4254,-1.432,-1.4387,-1.4454],[0.3279,0.3346,0.3413,0.3479,0.3545,0.3611,0.3676,0.3741,0.3806,0.387,0.3933,0.3996,0.4059,0.4121,0.4183,0.4244,0.4305,0.4365,0.4425,0.4484,0.4543,0.4601,0.4659,0.4716,0.4772,0.4828,0.4884,0.4939,0.4993,0.5047,0.51,0.5153,0.5205,0.5256,0.5307,0.5357,0.5407,0.5456,0.5504,0.5552,0.5599,0.5646,0.5692,0.5737,0.5781,0.5825,0.5868,0.5911,0.5952,0.5994,0.6034,0.6074,0.6113,0.6151,0.6189,0.6226,0.6262]],"att":{"strokeColor":"#994521","strokeWidth":2.05,"lastArrow":false,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text","def":[-1.25,0.55,"β"],"att":{"anchorX":"left","fontSize":16,"strokeColor":"#994521","useMathJax":false,"fixed":true,"highlight":false}},
  {"type":"curve","def":[[-0.7229,-0.7282,-0.7337,-0.7392,-0.7447,-0.7504,-0.7561,-0.7619,-0.7677,-0.7736,-0.7796,-0.7857,-0.7918,-0.798,-0.8042,-0.8105,-0.8169,-0.8234,-0.8299,-0.8365,-0.8431,-0.8498,-0.8566,-0.8634,-0.8703,-0.8772,-0.8843,-0.8913,-0.8985,-0.9057,-0.9129,-0.9202,-0.9276,-0.935,-0.9425,-0.95,-0.9576,-0.9653,-0.973,-0.9808,-0.9886,-0.9964,-1.0044,-1.0123,-1.0204,-1.0284,-1.0366,-1.0447,-1.053,-1.0612,-1.0696,-1.0779,-1.0864,-1.0948,-1.1033,-1.1119,-1.1205],[0.6481,0.6568,0.6654,0.674,0.6825,0.691,0.6994,0.7078,0.7162,0.7244,0.7327,0.7409,0.749,0.7571,0.7652,0.7731,0.7811,0.789,0.7968,0.8046,0.8123,0.82,0.8276,0.8351,0.8426,0.8501,0.8575,0.8648,0.8721,0.8793,0.8864,0.8935,0.9006,0.9075,0.9144,0.9213,0.9281,0.9348,0.9415,0.9481,0.9546,0.9611,0.9675,0.9738,0.9801,0.9863,0.9924,0.9985,1.0045,1.0104,1.0163,1.0221,1.0278,1.0335,1.0391,1.0446,1.0501]],"att":{"strokeColor":"#994521","strokeWidth":2.05,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}},
  {"type":"curve","def":[[2.92,2.9128,2.8914,2.856,2.8071,2.7453,2.6713,2.5861,2.4908,2.3865,2.2746,2.1565,2.0337,1.9076,1.78,1.6524,1.5263,1.4035,1.2854,1.1735,1.0692,0.9739,0.8887,0.8147,0.7529,0.704,0.6686,0.6472,0.64,0.6472,0.6686,0.704,0.7529,0.8147,0.8887,0.9739,1.0692,1.1735,1.2854,1.4035,1.5263,1.6524,1.78,1.9076,2.0337,2.1565,2.2746,2.3865,2.4908,2.5861,2.6713,2.7453,2.8071,2.856,2.8914,2.9128,2.92],[0,0.1276,0.2537,0.3765,0.4946,0.6065,0.7108,0.8061,0.8913,0.9653,1.0271,1.076,1.1114,1.1328,1.14,1.1328,1.1114,1.076,1.0271,0.9653,0.8913,0.8061,0.7108,0.6065,0.4946,0.3765,0.2537,0.1276,0,-0.1276,-0.2537,-0.3765,-0.4946,-0.6065,-0.7108,-0.8061,-0.8913,-0.9653,-1.0271,-1.076,-1.1114,-1.1328,-1.14,-1.1328,-1.1114,-1.076,-1.0271,-0.9653,-0.8913,-0.8061,-0.7108,-0.6065,-0.4946,-0.3765,-0.2537,-0.1276,0]],"att":{"strokeColor":"#738799","strokeWidth":1.4,"lastArrow":false,"dash":2,"fixed":true,"highlight":false}},
  {"type":"line","def":[[0.36,0],[3.2,0]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#738799","strokeWidth":2.05,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"line","def":[[1.78,-1.4],[1.78,1.4]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#738799","strokeWidth":2.05,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text","def":[3.21,-0.055,"+x"],"att":{"anchorX":"left","fontSize":16,"strokeColor":"#738799","useMathJax":false,"fixed":true,"highlight":false}},
  {"type":"text","def":[1.86,1.4,"+y"],"att":{"anchorX":"left","fontSize":16,"strokeColor":"#738799","useMathJax":false,"fixed":true,"highlight":false}},
  {"type":"text","def":[1.65,-0.14,"𝑂"],"att":{"anchorX":"left","fontSize":16,"strokeColor":"#344b61","useMathJax":false,"fixed":true,"highlight":false}},
  {"type":"text","def":[0.30000000000000004,1.4,"(b)"],"att":{"anchorX":"left","fontSize":16,"strokeColor":"#344b61","useMathJax":false,"fixed":true,"highlight":false}},
  {"type":"point","def":[1.78,0],"att":{"size":3,"withLabel":false,"strokeColor":"#344b61","fillColor":"#344b61","fixed":true,"highlight":false}},
  {"type":"line","def":[[1.78,0],[2.7912,0.5264]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#186b99","strokeWidth":2.05,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"point","def":[2.7912,0.5264],"att":{"size":3,"withLabel":false,"strokeColor":"#186b99","fillColor":"#186b99","fixed":true,"highlight":false}},
  {"type":"text","def":[2.81,0.65,"𝑃"],"att":{"anchorX":"left","fontSize":16,"strokeColor":"#186b99","useMathJax":false,"fixed":true,"highlight":false}},
  {"type":"line","def":[[0.608,0.8018],[2.952,-0.8018]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#2b7354","strokeWidth":2.05,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"line","def":[[0.9895,-1.1555],[2.5705,1.1555]],"att":{"straightFirst":false,"straightLast":false,"strokeColor":"#2b7354","strokeWidth":2.05,"lastArrow":true,"fixed":true,"highlight":false}},
  {"type":"text","def":[2.98,-0.89,"+x′"],"att":{"anchorX":"left","fontSize":16,"strokeColor":"#2b7354","useMathJax":false,"fixed":true,"highlight":false}},
  {"type":"text","def":[2.63,1.15,"+y′"],"att":{"anchorX":"left","fontSize":16,"strokeColor":"#2b7354","useMathJax":false,"fixed":true,"highlight":false}},
  {"type":"text","def":[2.3200000000000003,0.29,"𝑟"],"att":{"anchorX":"left","fontSize":16,"strokeColor":"#186b99","useMathJax":false,"fixed":true,"highlight":false}},
  {"type":"curve","def":[[2.2,2.2,2.1999,2.1999,2.1998,2.1996,2.1994,2.1992,2.199,2.1988,2.1985,2.1981,2.1978,2.1974,2.197,2.1965,2.1961,2.1955,2.195,2.1944,2.1938,2.1932,2.1926,2.1919,2.1911,2.1904,2.1896,2.1888,2.188,2.1871,2.1862,2.1853,2.1843,2.1833,2.1823,2.1812,2.1802,2.1791,2.1779,2.1768,2.1756,2.1743,2.1731,2.1718,2.1705,2.1691,2.1678,2.1664,2.165,2.1635,2.162,2.1605,2.159,2.1574,2.1558,2.1542,2.1525],[0,0.0036,0.0072,0.0108,0.0144,0.018,0.0216,0.0252,0.0288,0.0324,0.036,0.0395,0.0431,0.0467,0.0503,0.0539,0.0574,0.061,0.0645,0.0681,0.0716,0.0752,0.0787,0.0823,0.0858,0.0893,0.0928,0.0963,0.0998,0.1033,0.1068,0.1103,0.1138,0.1172,0.1207,0.1241,0.1276,0.131,0.1344,0.1378,0.1412,0.1446,0.148,0.1513,0.1547,0.158,0.1613,0.1647,0.168,0.1713,0.1745,0.1778,0.1811,0.1843,0.1875,0.1907,0.1939]],"att":{"strokeColor":"#738799","strokeWidth":2.05,"lastArrow":false,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text","def":[2.2,0.08,"θᵢ"],"att":{"anchorX":"left","fontSize":16,"strokeColor":"#344b61","useMathJax":false,"fixed":true,"highlight":false}},
  {"type":"curve","def":[[2.2422,2.2482,2.254,2.2597,2.2652,2.2705,2.2756,2.2805,2.2853,2.2899,2.2942,2.2984,2.3024,2.3062,2.3098,2.3132,2.3164,2.3194,2.3222,2.3248,2.3272,2.3294,2.3314,2.3332,2.3347,2.3361,2.3373,2.3382,2.339,2.3395,2.3399,2.34,2.3399,2.3396,2.3391,2.3384,2.3375,2.3364,2.3351,2.3335,2.3318,2.3298,2.3277,2.3253,2.3228,2.32,2.3171,2.3139,2.3106,2.307,2.3033,2.2993,2.2952,2.2908,2.2863,2.2816,2.2767],[-0.3162,-0.3072,-0.2981,-0.2889,-0.2796,-0.2702,-0.2607,-0.2511,-0.2414,-0.2316,-0.2218,-0.2118,-0.2018,-0.1916,-0.1815,-0.1712,-0.1609,-0.1505,-0.1401,-0.1296,-0.1191,-0.1085,-0.0979,-0.0872,-0.0766,-0.0658,-0.0551,-0.0444,-0.0336,-0.0228,-0.012,-0.0012,0.0096,0.0204,0.0312,0.042,0.0527,0.0635,0.0742,0.0849,0.0955,0.1062,0.1167,0.1273,0.1378,0.1482,0.1586,0.1689,0.1792,0.1894,0.1995,0.2096,0.2195,0.2294,0.2392,0.249,0.2586]],"att":{"strokeColor":"#2b7354","strokeWidth":2.05,"lastArrow":false,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text","def":[2.45,-0.16,"θ𝒻"],"att":{"anchorX":"left","fontSize":16,"strokeColor":"#2b7354","useMathJax":false,"fixed":true,"highlight":false}},
  {"type":"curve","def":[[1.78,1.7884,1.7967,1.8051,1.8134,1.8218,1.8301,1.8384,1.8468,1.8551,1.8634,1.8717,1.88,1.8883,1.8966,1.9048,1.9131,1.9213,1.9295,1.9377,1.9459,1.954,1.9622,1.9703,1.9784,1.9864,1.9945,2.0025,2.0105,2.0185,2.0264,2.0343,2.0422,2.0501,2.0579,2.0657,2.0735,2.0812,2.0889,2.0965,2.1041,2.1117,2.1193,2.1268,2.1342,2.1417,2.1491,2.1564,2.1637,2.1709,2.1782,2.1853,2.1924,2.1995,2.2065,2.2135,2.2204],[0.78,0.78,0.7798,0.7796,0.7793,0.7789,0.7784,0.7778,0.7771,0.7764,0.7755,0.7746,0.7736,0.7724,0.7712,0.7699,0.7686,0.7671,0.7655,0.7639,0.7622,0.7603,0.7584,0.7564,0.7544,0.7522,0.7499,0.7476,0.7452,0.7427,0.7401,0.7374,0.7346,0.7318,0.7288,0.7258,0.7227,0.7195,0.7162,0.7129,0.7095,0.7059,0.7023,0.6987,0.6949,0.6911,0.6872,0.6832,0.6791,0.675,0.6707,0.6664,0.662,0.6576,0.6531,0.6484,0.6438]],"att":{"strokeColor":"#994521","strokeWidth":2.05,"lastArrow":false,"dash":0,"fixed":true,"highlight":false}},
  {"type":"text","def":[1.95,0.84,"β"],"att":{"anchorX":"left","fontSize":16,"strokeColor":"#994521","useMathJax":false,"fixed":true,"highlight":false}},
  {"type":"curve","def":[[1.842,1.8537,1.8654,1.8771,1.8888,1.9005,1.9122,1.9238,1.9355,1.9471,1.9587,1.9703,1.9819,1.9935,2.005,2.0166,2.0281,2.0396,2.051,2.0625,2.0739,2.0853,2.0966,2.108,2.1193,2.1305,2.1418,2.153,2.1642,2.1753,2.1864,2.1975,2.2085,2.2195,2.2305,2.2414,2.2523,2.2631,2.2739,2.2846,2.2953,2.306,2.3166,2.3271,2.3376,2.3481,2.3585,2.3688,2.3791,2.3894,2.3996,2.4097,2.4198,2.4298,2.4398,2.4497,2.4595],[1.2385,1.2378,1.2371,1.2362,1.2352,1.2341,1.2329,1.2316,1.2302,1.2287,1.2271,1.2253,1.2234,1.2215,1.2194,1.2172,1.2149,1.2125,1.21,1.2074,1.2047,1.2018,1.1989,1.1958,1.1927,1.1894,1.186,1.1826,1.179,1.1753,1.1715,1.1676,1.1636,1.1595,1.1553,1.151,1.1466,1.142,1.1374,1.1327,1.1279,1.1229,1.1179,1.1128,1.1075,1.1022,1.0968,1.0913,1.0856,1.0799,1.0741,1.0682,1.0622,1.0561,1.0499,1.0436,1.0372]],"att":{"strokeColor":"#994521","strokeWidth":2.05,"lastArrow":true,"dash":0,"fixed":true,"highlight":false}}
]
```

**Fig. 8.5** (a) The point rotates counterclockwise by $\mechanical\beta$ in fixed coordinates. (b) The point stays fixed while the axes rotate clockwise by the same angle. Both operations yield the same pair of new coordinates.

## Rotation in the plane

At $t_i$ the particle is at $P$ with polar coordinates $(\mechanical r,\mechanical\theta_i)$ and Cartesian coordinates $(\mechanical r\cos\mechanical\theta_i,\mechanical r\sin\mechanical\theta_i)$. After a counterclockwise rotation through $\mechanical\beta$, the point is at $P'$ with the same radius and angle $\mechanical\theta_f=\mechanical\theta_i+\mechanical\beta$. The final Cartesian coordinates are

$$
\begin{cases}
\mechanical x_f=\mechanical r\cos\mechanical\theta_f=\mechanical r\cos(\mechanical\theta_i+\mechanical\beta),\\
\mechanical y_f=\mechanical r\sin\mechanical\theta_f=\mechanical r\sin(\mechanical\theta_i+\mechanical\beta).
\end{cases}\tag{8.10}
$$

Apply the sine and cosine angle-addition identities.

$$
\begin{cases}
\mechanical x_f=\mechanical r(\cos\mechanical\theta_i\cos\mechanical\beta-\sin\mechanical\theta_i\sin\mechanical\beta),\\
\mechanical y_f=\mechanical r(\sin\mechanical\theta_i\cos\mechanical\beta+\cos\mechanical\theta_i\sin\mechanical\beta).
\end{cases}\tag{8.11}
$$

Replace $\mechanical r\cos\mechanical\theta_i$ and $\mechanical r\sin\mechanical\theta_i$ with the initial coordinates.

$$
\begin{cases}
\mechanical x_f=\mechanical x_i\cos\mechanical\beta-\mechanical y_i\sin\mechanical\beta,\\
\mechanical y_f=\mechanical y_i\cos\mechanical\beta+\mechanical x_i\sin\mechanical\beta .
\end{cases}\tag{8.12}
$$

Represent the two equations as a matrix multiplying a column vector.

$$
\begin{bmatrix}\mechanical x_f\\\mechanical y_f\end{bmatrix}
=
\underbrace{\begin{bmatrix}
\cos\mechanical\beta&-\sin\mechanical\beta\\
\sin\mechanical\beta&\cos\mechanical\beta
\end{bmatrix}}_{R(\mechanical\beta)}
\begin{bmatrix}\mechanical x_i\\\mechanical y_i\end{bmatrix}
\quad\Longrightarrow\quad
\mechanical{\vec r}_f=R(\mechanical\beta)\mechanical{\vec r}_i.
\tag{8.13}
$$

The rotation matrix $R(\mechanical\beta)$ gives the final position after a counterclockwise rotation through $\mechanical\beta$. Substitute $-\mechanical\beta$ to rotate clockwise.

$$
R(-\mechanical\beta)=
\begin{bmatrix}
\cos\mechanical\beta&\sin\mechanical\beta\\
-\sin\mechanical\beta&\cos\mechanical\beta
\end{bmatrix}
=R(\mechanical\beta)^{\mathsf T}.
\tag{8.14}
$$

Thus $R(\mechanical\beta)$ also gives the coordinates of a fixed point when the axes rotate clockwise through $\mechanical\beta$. Likewise $R(\mechanical\beta)^{\mathsf T}$ can describe a clockwise rotation of the point or the coordinates of a fixed point in axes rotated counterclockwise.

## Rotation in three dimensions

The basic active rotations about the fixed $x$, $y$, and $z$ axes of a right-handed coordinate system have matrices

$$
\begin{aligned}
R_x(\mechanical\beta)&=
\begin{bmatrix}
1&0&0\\
0&\cos\mechanical\beta&-\sin\mechanical\beta\\
0&\sin\mechanical\beta&\cos\mechanical\beta
\end{bmatrix},\\[4pt]
R_y(\mechanical\beta)&=
\begin{bmatrix}
\cos\mechanical\beta&0&\sin\mechanical\beta\\
0&1&0\\
-\sin\mechanical\beta&0&\cos\mechanical\beta
\end{bmatrix},\\[4pt]
R_z(\mechanical\beta)&=
\begin{bmatrix}
\cos\mechanical\beta&-\sin\mechanical\beta&0\\
\sin\mechanical\beta&\cos\mechanical\beta&0\\
0&0&1
\end{bmatrix}.
\end{aligned}\tag{8.15}
$$

For example, multiply $\mechanical{\vec r}_i=(\mechanical x_i,\mechanical y_i,\mechanical z_i)^{\mathsf T}$ by $R_y(\mechanical\beta)$ to rotate it about the $y$ axis.

For successive rotations about fixed axes, apply the first matrix to the initial vector and the next matrix to that result. A rotation about $x$ by $\mechanical\theta_1$ followed by one about $y$ by $\mechanical\theta_2$ gives

$$
\mechanical{\vec r}_f=R_y(\mechanical\theta_2)\bigl(R_x(\mechanical\theta_1)\mechanical{\vec r}_i\bigr)
=R_y(\mechanical\theta_2)R_x(\mechanical\theta_1)\mechanical{\vec r}_i .
$$

Reversing the physical order gives $R_x(\mechanical\theta_1)R_y(\mechanical\theta_2)\mechanical{\vec r}_i$. In general these products differ. The rightmost matrix acts first, so multiplication order records rotation order.

Linear algebra gives further tools for describing and combining rotations in advanced mechanics.

## Physical quantities

| Symbol | Unit | Quantity | Description |
| --- | --- | --- | --- |
| $\mechanical{\vec r}$ | $\unit m$ | Position vector | Displacement from the origin. |
| $\mechanical x,\mechanical y,\mechanical z$ | $\unit m$ | Cartesian coordinates | Components of the position vector. |
| $\mechanical r$ | $\unit m$ | Polar radius | Distance from the origin in the plane. |
| $\mechanical\theta,\mechanical\beta$ | $\unit{rad}$ | Angles | Polar position angle and angle of rotation. |
| $t$ | $\unit s$ | Time | Instant used to identify the initial or final position. |
