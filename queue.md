## Queue
- Java
LinkedList implemented the Queue interface
```
LinkedList<Integer> ids = new LinkedList<>();
ids.push(id);
int sum =0;
while(!ids.isEmpty())
{
    int eId = ids.poll();
    Employee e = map.get(eId);
    sum += e.importance;
    for(int subId: e.subordinates){
        ids.push(subId);
    }
}

```
- C#
```  

```
- Python
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
- JavaScript
```
```