var Hexastore = require('Hexastore');
var mydb = new Hexastore();

var triple = JSON.stringify({
  subject: 'A', predicate: 'C', object: 'B'
});

/** 
 * (A) - (C) > (B)
 *
  spo::A::C::B
  sop::A::B::C
  ops::B::C::A
  osp::B::A::C
  pso::C::A::B
  pos::C::B::A
 */

//subject, object, predicate
mydb.addSOP({
  peter: { leftLeg: { has: true }, fast: { speed: true } },
  jan: { rightLeg: { has: true }, fast: { speed: true } }
});

//subject, predicate, object
mydb.addSPO({
  julia: { is: { awesome: true, nice: true }, speed: { fast: true } },
  bettina: { is: { nice: true } }
});

var result = mydb.search([ //with SPO schema
  [["node"], "has", "leftLeg"],
  [["node"], "speed", ["howfast"]]
]);

console.log(result)
//console.log(mydb.spo);
/*console.log(mydb.sop);
console.log(mydb.ops);
console.log(mydb.osp);
console.log(mydb.pso);
console.log(mydb.pos);*/