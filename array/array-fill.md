

### C++

Fills the range [first, last) with sequentially increasing values, starting with value and repetitively evaluating ++value.
```

#include <numeric>
/*
*(d_first)   = value;
*(d_first+1) = ++value;
*(d_first+2) = ++value;
*(d_first+3) = ++value;
*/
iota(res.begin(), res.begin() + m, 0);
```
