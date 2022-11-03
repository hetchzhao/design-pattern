import ISubject from "./ISubject";
import RealSubject from "./RealSubject";
import Proxy from "./Proxy";

function clientCode(subject: ISubject) {
  subject.request();
}

console.log('Client: Executing the client code with a real subject:');
const realSubject = new RealSubject();
clientCode(realSubject);

console.log('');

console.log('Client: Executing the same client code with a proxy:');
const proxy = new Proxy(realSubject);
clientCode(proxy);
