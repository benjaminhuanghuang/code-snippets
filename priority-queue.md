## Priority Queue
### C++


### Java
```
import java.util.PriorityQueue;

PriorityQueue<Integer> minHeap = new PriorityQueue<>();

// add()插入失败时抛出异常，offer()插入失败会返回false
minHeap.offer(number);

// remove()获取并删除队首元素, 当方法失败时抛出异常, poll()失败时返回null
minHeap.poll();
```

Max Heap
```
// Collections.reverseOrder() to sort a list in descending order.
PriorityQueue<Integer> queue = new PriorityQueue<>(10, Collections.reverseOrder());
```

Use Comparator
```
PriorityQueue<Student> pq = new PriorityQueue<Student>(5, new StudentComparator()); 
```        


### C#
```  

```
### Python
https://dbader.org/blog/queues-in-python

list Built-in
Lists are quite slow for this purpose because inserting or deleting an element at the beginning requires shifting all of the other elements by one, requiring O(n) time.
```
    q = []
    q.append('eat')
    q.append('sleep')
    q.append('code')

   
    # Careful: This is slow!
    q.pop(0)
```
A good default choice: collections.deque Class
The deque class implements a double-ended queue that supports adding and removing elements from either end in O(1) time.
```
    from collections import deque
    q = deque()

    q.append('eat')
    q.append('sleep')
    q.append('code')

    q.popleft()
    
```
The queue.Queue Class
Implementation Python standard library is synchronized and provides locking semantics to support multiple concurrent producers and consumers.
```
import Queue

q = Queue.Queue()

for i in range(5):
    q.put(i)

while not q.empty():
    print q.get()
```    
### JavaScript
```
```