import FiniteStateMachine, { InputSymbol } from './test-Finite-State-Machine/finiteStateMachine';
import moduloThree from './test-Modulo-Three-Function/moduloThree';

// Example of Finite State Machine
const fsm = new FiniteStateMachine();
const inputSequence: InputSymbol[] = [1, 0, 0, 1];

inputSequence.forEach((input) => fsm.makeTransition(input));
// -------------------------------------------------------

// Example of moduloThree
const moduloThreeValue = moduloThree('1101');
// -------------------------------------------------------

const tableData: { testName: string; output: string }[] = [
  {
    testName: 'Modulo three function',
    output: `Modulo three function returned value is: ${moduloThreeValue}`,
  },
  {
    testName: 'FiniteStateMachine',
    output: `The final state of the FiniteStateMachine is ${fsm.currentState}.`,
  },
];

console.table(tableData);
