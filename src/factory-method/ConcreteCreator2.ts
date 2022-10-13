import Creator from "./Creator";
import IProduct from "./IProduct";
import ConcreteProduct2 from "./ConcreteProduct2";

export default class ConcreteCreator2 extends Creator {
  public factoryMethod(): IProduct {
    return new ConcreteProduct2();
  }
}