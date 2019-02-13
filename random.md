## Template
- Java
java中一般有两种随机数，一个是Math中random()方法，一个是Random类。
```
  Math.random()   // 随即生成0<x<1的小数。

  // 生成随机生成出0~100中的其中一个数呢？
  // Math.random()返回的只是从0到1之间的小数，如果要50到100，就先放大50倍，即0到50之间，这里还是小数，如果要整数，就强制转换int，然后再加上50即为50~100.
  (int)(Math.random()*50) + 50

 
  Random random = new Random();//默认构造方法
  Random random = new Random(1000);//指定种子数字
  public int nextInt(int n)  //return int介于[0,n)的区间

```
- C#
```  
  private static Random random = new Random();
  ...
  return (char)('A' + random.Next(0,26));
   
```
- Python
```
  def random_name(self):
      return random.choice(string.ascii_uppercase) + \
      random.choice(string.ascii_uppercase) + \
      str(random.randrange(0,9)) + \
      str(random.randrange(0,9)) + \
      str(random.randrange(0,9))


```
- JavaScript
```
  // Return a random number between 0 (inclusive) and 1 (exclusive):
  Math.random();

  // Return a random number between 1 and 10:
  Math.floor((Math.random() * 10) + 1);
```