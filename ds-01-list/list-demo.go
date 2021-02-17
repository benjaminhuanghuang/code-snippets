package main

import "fmt"

func main() {
	arr := [...]int{1, 1, 2, 3, 4, 5, 6, 7}

	// create slice from array
	fmt.Println("arr[2:6] = ", arr[2:6]) //[2:6)   2,3,4,5
	fmt.Println("arr[:6] = ", arr[2:6])
	fmt.Println("arr[2:] = ", arr[2:6])
	fmt.Println("arr[:] = ", arr[2:6])

	/*
		Slice 是对array对一个view， update slice 会改变array
	*/

	// add / remove at the end
	a := []int{10, 30, 40}
	a = append(a, 0)
	fmt.Println(a)

	/*
	 add remove at the beginning
	*/
	var s = []string{"1", "2"}
	element := "0"

	s = append([]string{element}, s...)
	fmt.Println(s)

	// insert at index
	s = []string{"1", "2"}
	element = "0"

	s = append(s[:1], append([]string{element}, s[1:]...)...)
	fmt.Println(s)

}
