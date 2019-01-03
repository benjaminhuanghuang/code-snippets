# Sort
## Sort string items in list
- Java
```
  List<String> letterLogs = new ArrayList<>();

  letterLogs.sort(new Comparator<String>() {
    @Override
    public int compare(String m1, String m2) {
        String[] parts1 = m1.split(" ");
        String[] parts2 = m2.split(" ");
        for (int i = 1; i < Math.max(parts1.length, parts2.length); i++) {
            String s1 = " ";
            String s2 = " ";

            if (i < parts1.length)
                s1 = parts1[i];
            if (i < parts2.length)
                s2 = parts2[i];
            if(!s1.equals(s2))
                return s1.compareTo(s2);
        }
        return 0;
    }
  });
```
- C#
```
Array.Sort(nums, (i, j) => String.Compare(j.ToString() + i.ToString(), i.ToString() + j.ToString(), StringComparison.Ordinal));

       
```

- Python
```
```

- JavaScript
By default the sort() method sorts the array: In ascending order With the items casted to strings
```
    arr.sort();
```

```
    function comparator(a, b) {
    return a > b ? 1 : b > a ? -1 : 0;
    }

    arr.sort(comparator);
```
A Shorter Way with Numbers
```
    arr.sort((a, b) => a - b);
```

## Sort 2d array
LC 406
int[][] people
- Java
```
   Arrays.sort(people,new Comparator<int[]>(){
        @Override
        public int compare(int[] o1, int[] o2){
            return o1[0]!=o2[0]?-o1[0]+o2[0]:o1[1]-o2[1];
        }
    });
```
- C#
```

       
```

- Python
```
def my_cmp(p1,p2):
    return cmp(p2[1],p1[1]) if p1[0]==p2[0] else cmp(p1[0],p2[0])

people.sort(cmp=my_cmp,reverse=True)
       
```

- JavaScript
