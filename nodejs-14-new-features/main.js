/**
 * optional chaining
 */
const person = {
  name: "Eduardo",
  dog: { name: "toad" },
};

//console.log(person.cat.name); // should rise TypeError
console.log(person.cat?.name); // will print undefined

/**
 * nullish coalescing
 */
console.log(0 ?? "Hello");
console.log(null ?? "Hello");
