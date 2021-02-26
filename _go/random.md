

```
	seed := time.Now().UnixNano()

  // 0 to count
	index := rand.New(rand.NewSource(seed)).Int31n(int32(count))
```