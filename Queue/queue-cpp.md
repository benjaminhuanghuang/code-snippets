

#include <queue>

queue<string> q;  // BFS
q.push(beginWord);


while (!q.empty())
{
  int size = q.size();
  while (size--)
  {
    string w = q.front();
    q.pop();


    q.push(neighbour);
  }
}