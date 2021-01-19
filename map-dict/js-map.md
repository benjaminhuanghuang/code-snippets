## JS map

```
const m = new Map();
// o是一个对象
const o = {p: 'Hello world!'};

// 添加成员：对象o是m的一个键，值为'content'
m.set(o, 'content'); // "content"

// get方法读取这个键
m.get(o); // true

m.has(o); // true

// delete方法删除这个键
m.delete(o);  // true
m.has(o); // false
```

任何具有Iterator接口、且每个成员都是一个双元素的数组的数据结构都可以当做Map构造函数的参数。例如Array Set Map，都可以用来生成新的Map。


// Map构造函数接受一个数组作为参数
const map = new Map([
// 指定了两个键 name 和 tile
// 数组的成员是一个个表示键值对的数组
  ['name', '张三'],
  ['title', 'Author']
]);

map.size // 2
map.has('name') // true
map.get('name') // "张三"
map.has('title') // true
map.get('title') // "Author"
复制代码Set
const set = new Set([
    ['foo', 1],
    ['bar', 2]
]);
const m1 = new Map(set);
m1.get('foo'); // 1
复制代码Map
// 注意两个方括号，参数是成员是数组的数组
const m2 = new Map([['baz', 3]]);
// m2是Map数据结构，有一个数组成员

// 参数是Map
const m3 = new Map(m2);
m3.get('baz'); // 3


## Get
Map的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。
只有对同一个对象的引用，Map结构才将其视为同一个键。
```
  const map = new Map();

  map.set(['a'], 555);

  // 此['a']非上面的['a']，内存地址自然也不一样
  map.get(['a']); // undefined
```
