// Define states as an enum
enum StateFSM {
  S0 = 'S0',
  S1 = 'S1',
  S2 = 'S2',
}

// Define input symbols as a union type
type InputSymbol = 0 | 1;

class FiniteStateMachine {
  // Store the current state of the machine
  private state: StateFSM;

  // Get the current state of the machine
  get currentState() {
    return this.state;
  }

  constructor() {
    // Set the initial state to S0
    this.state = StateFSM.S0;
  }

  // Define the transition method based on the rules in the definition
  makeTransition(input: InputSymbol): void {
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
