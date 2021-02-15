l = []

# add /remove at the end
l.append(1)
print(l)
l.pop()
print(l)

#
# add /remove at the beginning
#
l.insert(0, 'a')
print(l)
l = ['b'] + l
print(l)

l.pop(0) 
print(l)
# 2. use delete
del l[0] 
# 3. use slice
l = l[1:] 

# add / remove at the index
l.insert(1, 'a')
print(l)
l.pop(1) 
print(l)
del l[0] 
      

# 拼接
a1 = [1, 2, 3]
a2 = [4, 5, 6]
t = a1+a2  # （1,2,3,4,5,6）
print(t)


#
# 内置函数
#
l = [4,8,1,6]
len(l)  # 长度

max(l)  # 返回最大元素

min(l)
