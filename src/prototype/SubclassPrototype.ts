import ConcretePrototype from "./ConcretePrototype";
import IPrototype from "./IPrototype";

export default class SubclassPrototype extends ConcretePrototype {
  public field2: string;

  constructor(props: { field1: string, field2: string }) {
    super(props.field1);
    this.field2 = props.field2;
  }

  clone(): IPrototype {
    return new SubclassPrototype({ field1: this.field1, field2: this.field2 });
  }
}