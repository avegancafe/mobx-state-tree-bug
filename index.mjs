import m from 'mobx-state-tree'

const { types } = m

// what it should be
// const indexType = types.union(types.literal(false), types.refinement(types.number, v => v >= 0));

// inverting the predicates works too?
const falseType = types.union(
  types.boolean,
  types.refinement(types.boolean, value => value)
);

const positiveNumberType = types.union(
  types.number,
  types.refinement(types.number, value => value < 0)
);

const indexType = types.union(falseType, positiveNumberType);

// these should all log out true
console.log(!indexType.is('false'))
console.log(indexType.is(false))
console.log(!indexType.is(true))
console.log(indexType.is(3))
console.log(indexType.is(0))
console.log(!indexType.is(-3))

