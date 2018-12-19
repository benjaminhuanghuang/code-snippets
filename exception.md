


## Throw Exception
- Java
```
  throw new IOException("Client not initialized");
```
- C#
```  

```
- Python
```
    if length < 2:
        raise Exception()
```
- JavaScript
```
    throw "Too big";    // throw a text
    throw 500;          // throw a number
```

## Catch Exception
- Java
```
  try {
      
  }
  catch (Exception eX) {
      logger.log();
  }
```
- C#
```  
  try
  {
      int value = 1 / int.Parse("0");
  }
  catch (DivideByZeroException ex)
  {
      throw ex;
  }
```
- Python
```
    try:
        data = something_that_can_go_wrong

    except IOError:
        handle_the_exception_error

    else:
        doing_different_exception_handling

```
- JavaScript
```
    try {
        Block of code to try
    }
    catch(err) {
        Block of code to handle errors
    } 
    finally {
        Block of code to be executed regardless of the try / catch result
    }
```