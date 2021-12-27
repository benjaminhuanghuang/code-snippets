const m = new Map();
// o是一个对象
const o = { p: "Hello world!" };

// 添加成员：对象o是m的一个键，值为'content'
m.set(o, "content"); // "content"

// get方法读取这个键
m.get(o); // true

m.has(o); // true

// delete方法删除这个键
m.delete(o); // true
m.has(o); // false

/* get ()  --------------------------------------------------
Map的键实际上是跟内存地址绑定的，只要内存地址不一样，就视为两个键。
只有对同一个对象的引用，Map结构才将其视为同一个键。
-------------------------------------------------------------*/
const map = new Map();

map.set(["a"], 555);

// 此['a']非上面的['a']，内存地址自然也不一样
map.get(["a"]); // undefined

/* Crete  --------------------------------------------------
任何具有Iterator接口、且每个成员都是一个双元素的数组的数据结构都可以当做Map构造函数的参数。
例如 Array, Set, Map , 都可以用来生成新的Map。
-------------------------------------------------------------*/
const map = new Map([
  ["name", "张三"],
  ["title", "Author"],
]);

const set = new Set([
  ["foo", 1],
  ["bar", 2],
]);

const m1 = new Map(set);
m1.get("foo"); // 1


/* Interation  --------------------------------------------------
for ... of
map.keys() - Returns an iterable for keys
map.values() - Returns an iterable for values
map.entries() - Returns an iterable of key,value

.forEach
-------------------------------------------------------------*/
// Iterating map with for..of
for(const [key, val] of map)
{

}
for (let key of map.keys()) {
	console.log(key);
}

for (let value of map.values()){
	console.log(value);
}

for (let [key, value] of  map.entries()) {
	console.log(key + " = " + value)
}

map.forEach((value, key, map) => {
  console.log(`m[${key}] = ${value}`);
})

