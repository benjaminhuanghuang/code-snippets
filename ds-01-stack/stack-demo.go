package main

import "fmt"

func main() {
	var v rune

	//-- create stack
	stack := make([]rune, 0)

	//-- push
	stack = append(stack, v)

	//-- peek
	v = stack[len(stack)-1] // index must be non-negative in go

	//-- pop
	stack = stack[:len(stack)-1]

	//--empty
	fmt.Println(len(stack) == 0)

}
