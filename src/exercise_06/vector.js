export default class Vector {
  // This class represents a 2-dimensional vector. Please implement the class according to the
  // following instructions:
  //
  // * We should be able to get the `x` part and `y` part of a vector.
  // * We should be able to calculate the plus and minus of 2 vectors.
  // * We should be able to calculate the distance of a vector.
  //
  // Your target:
  //
  // * Please implement the class and pass all the tests in vector_spec.js.
  // * Please do NOT modify the signature of the class. Please put all your code in the Vector
  // class.

  // 当我们在constructor中定义了属性之后,那么这个属性便有了getter和setter,
  // 如下:a和b均有getter和setter,那么都可以使用(比如vec是Vector的实例)vec.a;vec.b;vec.a=1;vec.b=2;来存取值
  // 而我们又提供了get x(),get y(),但是其实get x()是返回a,get y()是返回b,但是vec就多了两个getter,就可以vec.x;vec.b;
  // 但是由于没有提供set x(),set y(),所以x,y就没有setter,那么就不能够使用vec.x=1;vec.y=2;
  // 即,在这个类中,有4个属性,a,b,x,y,但是ab有getter和setter,但是xy只有getter
  // vec.a;就是调用了getter方法,vec.a=1;就是调用了setter方法
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  get x() { return this.a; }

  get y() { return this.b; }

  distance() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }

  static plus(v1, v2) {
    const x = v1.x + v2.x;
    const y = v1.y + v2.y;
    return new Vector(x, y);
  }

  static minus(v1, v2) {
    const x = v1.x - v2.x;
    const y = v1.y - v2.y;
    return new Vector(x, y);
  }
}
