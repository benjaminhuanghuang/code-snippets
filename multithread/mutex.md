mutex: only 1 thread can enter critical section

### C++
```
  class mutex
  {
    void lock();
    void unlock();
  }


  std::mutex m;
```



### Java


### Python
```
  import threading

  pencil = threading.Lock()

    pencil.acquire()
      #
      # critical section
      #
    pencil.release()
``
