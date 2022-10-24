import IProduct from "./IProduct";

export default class ConcreteProduct1 implements IProduct {
  operation(): string {
    return '{Result of the ConcreteProduct1}';
  }  
}