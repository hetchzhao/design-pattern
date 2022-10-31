export default class Flyweight {
  private shareState: any;

  constructor(shareState: any) {
    this.shareState = shareState;
  }

  public operation(uniqueState): void {
    const s = JSON.stringify(this.shareState);
    const u = JSON.stringify(uniqueState);
    console.log(`Flyweight: Displaying shared (${s}) and unique (${u}) state.`);
  }
}
