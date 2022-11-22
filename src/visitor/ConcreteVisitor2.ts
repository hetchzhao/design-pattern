import Visitor from "./Visitor";
import ConcreteComponentA from "./ConcreteComponentA";
import ConcreteComponentB from "./ConcreteComponentB";

export default class ConcreteVisitor2 implements Visitor {
  visitConcreteComponentA(element: ConcreteComponentA): void {
    console.log(`${element.exclusiveMethodOfConcreteComponentA()} + ConcreteVisitor2`);
  }

  visitConcreteComponentB(element: ConcreteComponentB): void {
    console.log(`${element.specialMethodOfConcreteComponentB()} + ConcreteVisitor2`);
  }
}