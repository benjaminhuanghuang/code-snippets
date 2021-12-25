

/*
  Use Array
*/
const graph = Array.from(Array(N), () => []);
for (let i = 0; i < N; i++) {
  graph[i].push(L[i] - 1);
}



/*
  Use Map
*/
const graph = new Map();
for (let i = 0; i < N; i++) {
  graph[i].push(L[i] - 1);
}