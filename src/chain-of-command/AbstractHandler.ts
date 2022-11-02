import IHandler from "./IHandler";

export default abstract class AbstractHandler implements IHandler {
  private nextHandler: IHandler;

  setNext(handler: IHandler): IHandler {
    this.nextHandler = handler;

    return handler;
  }

  handle(request: string): string | null {
    if (this.nextHandler) {
      return this.nextHandler.handle(request);
    }

    return null;
  }
}