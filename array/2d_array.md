# Matrix

## Create matrix
### C++
```
int n = grid.size(), m = grid[0].size();
vector<vector<int>> res(n, vector<int>(m, 0));
```
### C
```

```

### Go
```
n, m := len(grid), len(grid[0])

res := make([][]int, n)
for i := 0; i < n; i++ {
  res[i] = make([]int, m)
}
```
### Java
```
int n = grid.length, m = grid[0].length;
Integer[][] ret = new Integer[n][m];
```
### C#
```  

```
### Python
```
n, m = len(grid), len(grid[0])
res = [[0] * m for _ in range(n)]
```
### JavaScript
```
let n = grid.length, m = grid[0].length;
let res = new Array(n);
for (let i = 0; i < n; i++) {
    res[i] = new Array(m);
}
```
### TypeScript
```
```