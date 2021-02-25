// go 通过切片模拟栈和队列

// 创建栈
stack := make([]int, 0)
// push压入
stack = append(stack, 10)
// pop弹出
v := stack[len(stack)-1]
stack = stack[:len(stack)-1]
// 检查栈空
len(stack) == 0
