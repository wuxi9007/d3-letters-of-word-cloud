// number of components in letters
var letterHash = {
	'A': 4,
	'B': 8,
	'C': 3,
	'D': 6,
	'E': 4,
	'F': 3,
	'G': 5,
	'H': 3,
	'I': 3,
	'J': 4,
	'K': 3,
	'L': 2,
	'M': 4,
	'N': 3,
	'O': 4,
	'P': 4,
	'Q': 5,
	'R': 5,
	'S': 5,
	'T': 2,
	'U': 3,
	'V': 3,
	'W': 4,
	'X': 4,
	'Y': 3,
	'Z': 3
}
// components of letters
var letterComponent = {
	'A': [9,10,11,12],
	'B': [3,0,4,5,6,7,8,2],
	'C': [0,3,2],
	'D': [3,13,4,14,8,15],
	'E': [0,3,2,6],
	'F': [0,16,6],
	'G': [0,3,2,17,18],
	'H': [19,6,20],
	'I': [0,1,2],
	'J': [0,21,15,22],
	'K': [19,23,24],
	'L': [19,25],
	'M': [26,27,28,29],
	'N': [26,30,20],
	'O': [0,3,2,31],
	'P': [0,16,6,32],
	'Q': [0,3,2,31,33],
	'R': [0,16,6,32,24],
	'S': [0,34,6,35,2],
	'T': [0,36],
	'U': [19,37,20],
	'V': [38,39,40],
	'W': [41,42,43,44],
	'X': [45,46,47,48],
	'Y': [45,46,49],
	'Z': [0,50,2]
}
// sizes of components of letters
var componentDiv = [
		[300, 100], // 0: top of I,C
		[100, 330], // 1: mid of I
		[300, 100], // 2: bottom of I,C
		[100, 330], // 3: vertical bar of B,C
		[70, 80],   // 4: top right '\' corner of B
		[70, 80],   // 5: top right '/' corner of B
		[200, 60],  // 6: mid horizontal bar of B
		[100, 80],  // 7: bottom right '\' corner of B
		[110, 80],  // 8: bottom right '/' corner of B
		[120, 80],  // 9: top bar of A
		[120, 450], // 10: '/' of A
		[120, 450], // 11: '\' of A
		[90, 80],   // 12: mid '-' of A
		[250, 100], // 13: top '-' of D
		[100, 200], // 14: right '|' of D
		[260, 100], // 15: bottom '-' of D
		[100, 420], // 16: '|' of F
		[180, 100], // 17: mid '-' of G
		[100, 120], // 18: right '|' of G
		[100, 500], // 19: left '|' of H
		[100, 500], // 20: right '|' of H
		[100, 320], // 21: right '|' of J
		[100, 80],  // 22: left '|' of J
		[100, 290], // 23: '/' of K
		[100, 290], // 24: '\' of K
		[220, 100], // 25: '-' of L
		[100, 500], // 26: left '|' of M
		[100, 350], // 27: '\' of M
		[100, 350], // 28: '/' of M
		[100, 500], // 29: right '|' of M
		[100, 500], // 30: '\' of N
		[100, 330], // 31: right '|' of O
		[100, 130], // 32: right '|' of P
		[100, 130], // 33: '\' of Q
		[100, 170], // 34: left '|' of S
		[100, 160], // 35: right '|' of S
		[100, 410], // 36: '|' of T
		[200, 100], // 37: '-' of U
		[120, 450], // 38: '\' of V
		[120, 450], // 39: '/' of V
		[120, 80],   // 40: bottom '-' of V
		[100, 500], // 41: left '|' of W
		[100, 350], // 42: '/' of W
		[100, 350], // 43: '\' of W
		[100, 500], // 44: right '|' of W
		[100, 260], // 45: top '\' of X
		[100, 260], // 46: top '/' of X
		[100, 210], // 47: bottom '\' of X
		[100, 300], // 48: bottom '/' of X
		[100, 280], // 49: '|' of Y
		[100, 350], // 50: '/' of Z
];