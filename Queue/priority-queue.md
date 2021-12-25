## Priority Queue
### C++
```
#include <queue>;

priority_queue<int> q;    // return the largest (by default use less<int>) element



```
- Init priority queue
```
  int myints[]= {10,60,50,20};
  std::priority_queue<int> second (myints,myints+4);

```

- Init priority queue with compare
```
  
  std::priority_queue<int, std::vector<int>, std::greater<int>> third (myints,myints+4);
  // By default
  std::priority_queue<int, std::vector<int>, std::less<int>> smaller;
```

- Init priority queue with custimized compare
```
  // A priority queue is a container adaptor that provides constant time lookup of the largest (by default) element, 
  //      at the expense of logarithmic insertion and extraction. 
  // Compare parameter is defined such that it returns true if its first argument comes before its second 
  auto comp = [](ListNode *a, ListNode *b) { return a->val > b->val; };
  priority_queue<ListNode, vector<ListNode *>, decltype(comp)> pq(comp);
```  

- Priority queue of pairs
```
  priority_queue<pair<int, int>> q;  // from small to large, ordered by first element

  // Sort by frequency
  for (const auto &pair : count)
  {
    q.emplace(-pair.second, pair.first);   // emplace a pair
  }
```

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