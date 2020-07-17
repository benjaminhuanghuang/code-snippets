#include <vector>
#include <set>
#include <queue>

using namespace std;

vector<int> tpSort(vector<set<int>> &graph, vector<int> &in_degree)
{
  vector<int> sorted;
  queue<int> q;

  for (int i = 0; i < in_degree.size(); i++)
  {
    if (in_degree[i] == 0)
    {
      q.push(i);
    }
  }

  while (!q.empty())
  {
    int cur = q.front();
    q.pop();
    sorted.push_back(cur);

    for (int next : graph[cur])
    {
      in_degree[next]--;
      if (in_degree[next] == 0)
      {
        q.push(next);
      }
    }
  }
  return sorted;
}