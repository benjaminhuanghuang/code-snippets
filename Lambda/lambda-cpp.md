

## Sort
```
vector<vector<int>> reconstructQueue(vector<vector<int>>& people) {
    //给队列先排个序，按照身高高的排前面，如果身高相同，则第二个数小的排前面。
    sort(people.begin(), people.end(), [](vector<int>& a, vector<int>& b) {
        return a[0] > b[0] || (a[0] == b[0] && a[1] < b[1]);
    });
    vector<vector<int>> res;
    for (auto a : people) {
        res.insert(res.begin() + a[1], a);
    }
    return res;
}
```

## internal function 
```
auto cmp = [](pair<int, int>& a, pair<int, int>& b) {return a.first > b.first;};
```