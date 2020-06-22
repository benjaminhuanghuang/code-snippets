
### C++

C++没有split()函数，一个可以替换的方案是使用stringstream 和 getline 实现字符串按空格分割。

```
#include <sstream> // stringstream, getline

vector<string> splitSentence(const string &text)
{
  string word;
  vector<string> words;
  stringstream ss(text);
  while (getline(ss, word, ' '))
  {
    words.push_back(word);
  }
  return words;
}
```