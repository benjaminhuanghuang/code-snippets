/*
Go 语言中 range 关键字用于 for 循环中迭代
数组(array)
切片(slice)、
通道(channel)
集合(map)
Unicode字符串

在数组和切片,字符串中它返回元素的索引和索引对应的值，在集合中返回 key-value 对。
*/

package main

import "fmt"

func main() {
	//-- on Array
	// ignore the index
	nums := []int{2, 3, 4}
	sum := 0
	for _, num := range nums {
		sum += num
	}
	fmt.Println("sum:", sum)
	//
	for i, num := range nums {
		if num == 3 {
			fmt.Println("index:", i)
		}
	}
	// -- on Map
	kvs := map[string]string{"a": "apple", "b": "banana"}
	for k, v := range kvs {
		fmt.Printf("%s -> %s\n", k, v)
	}

	//-- on String Unicode字符串。第一个参数是字符的索引，第二个是字符（Unicode的值）本身。
	for i, c := range "go" {
		fmt.Println(i, c)
	}
}
