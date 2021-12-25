

```
vector<bool> visited(N, false);
    
  auto getPath = [graph, visited](int n){
    queue<int> q;
    q.push(n);
    visited[n] = true;
    int len = 0;
    while (!q.empty()) {
      int size = q.size();
      while (size--) {
        int curr = q.front(); q.pop();
        for (auto neighbour : graph[curr]) {
          if (!visited[neighbour]) {
            q.push(neighbour);
            visited[neighbour] = true;
          }
        }
      }
      len++;
    }
    return len;
  };
  ```