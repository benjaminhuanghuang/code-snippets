## Template
- C++
```
要取得[a,b)的随机整数，使用(rand() % (b-a))+ a;
要取得[a,b]的随机整数，使用(rand() % (b-a+1))+ a;
要取得(a,b]的随机整数，使用(rand() % (b-a))+ a + 1;
通用公式:a + rand() % n；其中的a是起始值，n是整数的范围。
要取得a到b之间的随机整数，另一种表示：a + (int)b * rand() / (RAND_MAX + 1)。
要取得0～1之间的浮点数，可以使用rand() / double(RAND_MAX)。
 
#include <random>
#include <ctime>

int myRandom(int lower, int upper, int count) 
{ 
   return (rand() % (upper - lower + 1)) + lower; 
} 
 
```
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