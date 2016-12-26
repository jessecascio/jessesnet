
export default class House 
{

  constructor() {
    this.state = "fresh";
  }

  peek() {
    return this.state;
  }

  set state(state) {
    this.state = state;
  }
}