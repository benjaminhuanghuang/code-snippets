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

       
```

- Python
```
```

- JavaScript