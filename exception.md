
## Reference
###[Python Exception hierarchy](https://docs.python.org/2/library/exceptions.html)

## Throw Exception
### C++
```
    #include <stdexcept>

    throw std::invalid_argument("Invalid input.");
    throw std::domain_error( "error" );
```

### Java
```
  throw new IOException("Client not initialized");
```
### C#
```  

```
### Python
```
    if length < 2:
        raise ValueError('could not find %c in %s' % (ch,str))
```
### JavaScript
```
    throw "Too big";    // throw a text
    throw 500;          // throw a number
```

## Catch Exception
### Java
```
  try {
      
  }
  catch (Exception eX) {
      logger.log();
  }
```
### C#
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
### Python
```
    try:
        data = something_that_can_go_wrong

    except IOError:
        handle_the_exception_error

    else:
        doing_different_exception_handling

```
### JavaScript
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