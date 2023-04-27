import FiniteStateMachine, { InputSymbol } from './test-Finite-State-Machine/finiteStateMachine';
import moduloThree from './test-Modulo-Three-Function/moduloThree';

// Example of Finite State Machine
const fsm = new FiniteStateMachine();
const inputSequence: InputSymbol[] = [1, 0, 0, 1];

inputSequence.forEach((input) => fsm.updateState(input));
// -------------------------------------------------------

// Example of moduloThree
const moduloThreeValue = moduloThree('1101');
// -------------------------------------------------------

const tableData: { name: string; input: string; output: string }[] = [
  {
    name: 'Modulo three function',
    input: '1101',
    output: `Modulo three function returned value is: ${moduloThreeValue}`,
  },
  {
    name: 'FiniteStateMachine',
    input: JSON.stringify(inputSequence),
    output: `The final state of the FiniteStateMachine is ${fsm.currentState}.`,
  },
];

console.table(tableData);
