// https://leetcode.com/problems/zigzag-conversion

package main

import (
	"fmt"
	"unicode"
)

func coordsToIndex(width int, x int, y int) int {
	return (width * y) + x
}

func convert(s string, numRows int) string {
var width = 0
if numRows==1 {
	return s
}
var count = 0
var stepsTilGoDown = 0
for count < len(s) {
	if stepsTilGoDown > 0 {
		stepsTilGoDown-=1
		count+=1
	} else {
		stepsTilGoDown=numRows-2
		count+=(numRows)
	}
	width+=1
}
var x = 0
var y = 0
r := []rune(s)
var outSlice = make([]rune, numRows*width)
for i := 0; i < len(s); i++ {
	if y > 0 {
		x+=1
		y-=1
		outSlice[coordsToIndex(width, x,y)] = r[i]
	} else { 
		if x == 0 && y == 0 {
			outSlice[coordsToIndex(width, x,y)] = r[i]
			i+=1
		}
		for y < (numRows-1) && i < len(s) {
			y+=1
			outSlice[coordsToIndex(width, x,y)] = r[i]
			i+=1
		}
		i-=1
	}
}
var outStr = ""
for _, v := range outSlice {
	if !unicode.IsControl(v) {
		outStr += string(v)
	}
}
return outStr
}