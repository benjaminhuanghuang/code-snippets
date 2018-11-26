## Build graph
- Java
```
// leetcode 207 Course Schedule
public boolean canFinish_BFS(int numCourses, int[][] prerequisites) {
        int[] indegree = new int[numCourses];
        int res = numCourses;
        // find node has indegree 0
        for (int[] pair : prerequisites) {
            indegree[pair[0]]++;
        }

        Queue<Integer> queue = new LinkedList<>();
        for (int i = 0; i < indegree.length; i++) {
            if (indegree[i] == 0) {
                queue.offer(i);
            }
        }
        while (!queue.isEmpty()) {
            int pre = queue.poll();
            res--;
            for (int[] pair : prerequisites) {
                if (pair[1] == pre) {
                    indegree[pair[0]]--;
                    if (indegree[pair[0]] == 0) {
                        queue.offer(pair[0]);
                    }
                }
            }
        }
        return res == 0;
    }
```
- C#
```  

```
- Python
```

```
- JavaScript
```
// leetcode 207 Course Schedule
var canFinish = function(numCourses, prerequisites) {
    var map = {}, visited = {}, visitedPath = {};
    //build graph
    for(i = 0; i < numCourses; i++){
        map[i] = { index : i, next : [] };
    }
    //add edge
    for(i = 0; i < prerequisites.length; i++){
        map[prerequisites[i][1]].next.push(map[prerequisites[i][0]]);
    }
    //bfs
    for(i = 0; i < numCourses; i++){
        if(!visited[i]){
            if(!bfs(map[i])){
                return false;
            }    
        }        
    }
    return true;

    function bfs(node){
        visited[node.index] = true;
        visitedPath[node.index] = true;
        if(node.next.length > 0){
            for(var i = 0; i < node.next.length; i++){
                if(visitedPath[node.next[i].index]){
                    return false;
                } 
                if(!bfs(map[node.next[i].index])){
                    return false;
                }
            }
        }
        visitedPath[node.index] = false;
        return true;
    }
};
```