import IProduct from "./IProduct";

export default class ConcreteProduct2 implements IProduct {
  operation(): string {
    return '{Result of the ConcreteProduct2}';
  }  
}