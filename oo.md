## Interface
- Java
```
interface Pet{
  public void test();
}

class Dog implements Pet{
  public void test(){
     System.out.println("Interface Method Implemented");
  }

  public static void main(String args[]){
     Pet p = new Dog();
     p.test();
  }
}
```

- C#
```  
interface IEquatable<T>
{
    bool Equals(T obj);
}

public class Car : IEquatable<Car>
{
    public string Make {get; set;}
    public string Model { get; set; }
    public string Year { get; set; }

    // Implementation of IEquatable<T> interface
    public bool Equals(Car car)
    {
        return this.Make == car.Make &&
               this.Model == car.Model &&
               this.Year == car.Year;
    }
}
```
- Python
```

```
- JavaScript
```
```


## Inheritance
- Java
* In Java there is no keyword names “virtual“. 

```
class Bicycle  
{ 
    // the Bicycle class has two fields 
    public int gear; 
    public int speed; 
          
    // the Bicycle class has one constructor 
    public Bicycle(int gear, int speed) 
    { 
        this.gear = gear; 
        this.speed = speed; 
    } 
          
    // the Bicycle class has three methods 
    public void applyBrake(int decrement) 
    { 
        speed -= decrement; 
    } 
          
    public void speedUp(int increment) 
    { 
        speed += increment; 
    } 
      
    // toString() method to print info of Bicycle 
    public String toString()  
    { 
        return("No of gears are "+gear 
                +"\n"
                + "speed of bicycle is "+speed); 
    }  
} 
  
// derived class 
class MountainBike extends Bicycle  
{ 
      
    // the MountainBike subclass adds one more field 
    public int seatHeight; 
  
    // the MountainBike subclass has one constructor 
    public MountainBike(int gear,int speed, 
                        int startHeight) 
    { 
        // invoking base-class(Bicycle) constructor 
        super(gear, speed); 
        seatHeight = startHeight; 
    }  
          
    // the MountainBike subclass adds one more method 
    public void setHeight(int newValue) 
    { 
        seatHeight = newValue; 
    }  
      
    // overriding toString() method 
    // of Bicycle to print more info 
    @Override
    public String toString() 
    { 
        return (super.toString()+ "\nseat height is "+seatHeight); 
    } 
      
} 
```

- C#
* C# does not support multiple inheritance. 
```  
  class Shape {
      public void setWidth(int w) {
         width = w;
      }
      public void setHeight(int h) {
         height = h;
      }
      protected int width;
      protected int height;
   }

   // Base class PaintCost
   public interface PaintCost {
      int getCost(int area);
   }
   
   // Derived class
   class Rectangle : Shape, PaintCost {
      public int getArea() {
         return (width * height);
      }
      public int getCost(int area) {
         return area * 70;
      }
   }
```
- Python
```
  class Person:

      def __init__(self, first, last):
          self.firstname = first
          self.lastname = last

      def Name(self):
          return self.firstname + " " + self.lastname

  class Employee(Person):

      def __init__(self, first, last, staffnum):
          Person.__init__(self,first, last)
          self.staffnumber = staffnum

      def GetEmployee(self):
          return self.Name() + ", " +  self.staffnumber

  x = Person("Marge", "Simpson")
  y = Employee("Homer", "Simpson", "1007")
```
- JavaScript
```

  class Animal {
      constructor(name, weight) {
          this.name = name;
          this.weight = weight;
      }

      eat() {
          return `${this.name} is eating!`;
      }

      sleep() {
          return `${this.name} is going to sleep!`;
      }

      wakeUp() {
          return `${this.name} is waking up!`;
      }

  }

  class Gorilla extends Animal {
      constructor(name, weight) {
          super(name, weight);
      }

      climbTrees() {
          return `${this.name} is climbing trees!`;
      }

      poundChest() {
          return `${this.name} is pounding its chest!`;
      }

      showVigour() {
          return `${super.eat()} ${this.poundChest()}`;
      }

      dailyRoutine() {
          return `${super.wakeUp()} ${this.poundChest()} ${super.eat()} ${super.sleep()}`;
      }

  }

  function display(content) {
      console.log(content);
  }

  const gorilla = new Gorilla('George', '160Kg');
  display(gorilla.poundChest());
  display(gorilla.sleep());
  display(gorilla.showVigour());
  display(gorilla.dailyRoutine());

```


## 