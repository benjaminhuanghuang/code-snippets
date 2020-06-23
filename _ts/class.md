## Class

```
class MyTsClass extends BaseClass {
  static readonly MILLISECONDS_IN_A_GIGASECOND = 1e12;

  constructor() {}

  // static method
  static steps(n: number) {

  }

  // plublic method by default
  count(sentence: string): Map<string, number> {
    let result = new Map<string, number>();

    return result;
  }
  
  // private method
  private getWords(sentence: string):string[] {
    return sentence.trim().toLowerCase().split(/\s+/);
  }

  // getter
  get name() {

  }

}

````
Use class
```
```

