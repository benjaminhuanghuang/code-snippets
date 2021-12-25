
/*
  Use vector
*/

vector<vector<int>> graph(N);
for (int i = 0; i < N; i++) {
  graph[i].push(L[i] - 1);
}
