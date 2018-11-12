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
```

```
- JavaScript
```
```