## Type checking
```
import PropTypes from 'prop-types';


List.propTypes = {
  list: PropTypes.array.isRequired,         // array
  name: PropTypes.string.isRequired,        // string
  onClick: PropTypes.func.isRequired        // function
};


```

## Dynamic CSS

### Method 1: inline style
```
<label style={{textDecoration: todo.complete? “line-through”: “none"}}
```

### Method 2: css class
```
<label className={todo.complete? “complete”: “none"}}
```

###  Method 3: append css to array
```
<div className={['commen-style', (!show)&&'hidden'].filter(Boolean)}></div>
```
Boolean is a function
return arrayOfSheeps.filter(function(x){return Boolean(x)}).length
Since function(x){return f(x)} === f then you can simplify:
return arrayOfSheeps.filter(Boolean).length;

### Method 4
```
import classnames from "classnames";

// add hidden to the css when show is false
classnames("city-selector", { hidden: !show })
```
