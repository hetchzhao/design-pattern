import Creator from "./Creator";
import IProduct from "./IProduct";
import ConcreteProduct1 from "./ConcreteProduct1";

export default class ConcreteCreator1 extends Creator {
  public factoryMethod(): IProduct {
    return new ConcreteProduct1();
  }
}
