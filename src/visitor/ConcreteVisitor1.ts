import Visitor from "./Visitor";
import ConcreteComponentA from "./ConcreteComponentA";
import ConcreteComponentB from "./ConcreteComponentB";

export default class ConcreteVisitor1 implements Visitor {
  public visitConcreteComponentA(element: ConcreteComponentA): void {
    console.log(`${element.exclusiveMethodOfConcreteComponentA()} + ConcreteVisitor1`);
  }

  public visitConcreteComponentB(element: ConcreteComponentB): void {
    console.log(`${element.specialMethodOfConcreteComponentB()} + ConcreteVisitor1`);
  }
}