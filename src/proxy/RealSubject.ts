import ISubject from "./ISubject";

export default class RealSubject implements ISubject {

  request(): void {
    console.log('RealSubject: Handling request.');
  }
}