const moduloThree = (binaryString: string): number => {
  if (!/^[01]+$/.test(binaryString)) {
    throw new Error('Invalid input: expected a string of binary digits');
  }

  let remainder = 0;

  for (const bit of binaryString) {
    remainder = (remainder * 2 + Number(bit)) % 3;
  }

  return remainder;
};

export default moduloThree;
