const getPath = (n, visited) => {
  const q = [n];
  visited[n] = true;
  let len = 0;
  while (q.length > 0) {
    let size = q.length;
    while (size--) {
      const curr = q.shift();
      for (const neighbour of graph[curr]) {
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
