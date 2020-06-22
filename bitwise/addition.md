### C++
```
  int getSum(int a, int b)
  {
    while (b != 0)
    {
      // left shift of nagetive value cause error!
      unsigned carry = (unsigned)(a & b) << 1;
      a = a ^ b;
      b = carry;
    }
    return a;
  }
```
