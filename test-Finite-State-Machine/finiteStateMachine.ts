enum StateFSM {
  S0 = 'S0',
  S1 = 'S1',
  S2 = 'S2',
}

type InputSymbol = 0 | 1;

class FiniteStateMachine {
  private state: StateFSM;

  get currentState() {
    return this.state;
  }

  constructor() {
    this.state = StateFSM.S0;
  }

  public updateState(input: InputSymbol): void {
    switch (this.state) {
      case StateFSM.S0:
        input === 0 ? (this.state = StateFSM.S0) : (this.state = StateFSM.S1);
        break;
      case StateFSM.S1:
        input === 0 ? (this.state = StateFSM.S2) : (this.state = StateFSM.S0);
        break;
      case StateFSM.S2:
        input === 0 ? (this.state = StateFSM.S1) : (this.state = StateFSM.S2);
        break;
    }
  }
}

export default FiniteStateMachine;
export type { InputSymbol };
