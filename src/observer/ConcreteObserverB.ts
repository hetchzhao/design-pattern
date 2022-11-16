import Observer from "./Observer";
import Subject from "./Subject";
import ConcreteSubject from "./ConcreteSubject";

export default class ConcreteObserverB implements Observer {
  public update(subject: Subject): void {
    if (subject instanceof ConcreteSubject && (subject.state === 0 || subject.state >= 2)) {
      console.log('ConcreteObserverB: Reacted to the event.');
    }
  }
}