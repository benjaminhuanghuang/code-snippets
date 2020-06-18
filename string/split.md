
### Cpp
```
#include <sstream> // stringstream, getline

vector<string> splitSentence(const string &text)
{
  string tmp;
  vector<string> words;
  stringstream ss(text);
  while (getline(ss, tmp, ' '))
  {
    words.push_back(tmp);
  }
  return words;
}
```