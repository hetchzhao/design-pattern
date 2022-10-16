import IPrototype from "./IPrototype";

export default class ConcretePrototype implements IPrototype {
  public field1: string;

  constructor(field1: string) {
    this.field1 = field1;
  }

  clone(): IPrototype {
    return new ConcretePrototype(this.field1)
  }
}