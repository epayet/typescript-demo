const a = 'some string'; // Add a type
const b: number = 1;

// The types are optional
const c = 'I can guess this';

// You get errors at compile time instead of runtime
// It also tries to guess the type when you don't specify (type inference)
const d = 1;
d.trim();