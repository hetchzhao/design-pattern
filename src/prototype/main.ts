import SubclassPrototype from "./SubclassPrototype";

function clientCode() {
  const p1 = new SubclassPrototype({ field1: "field1", field2: "field2" });
  const p2 = p1.clone() as SubclassPrototype;

  if (p1.field1 === p2.field1) {
      console.log('Primitive field values have been carried over to a clone. Yay!');
  } else {
      console.log('Primitive field values have not been copied. Booo!');
  }
  if (p1.field2 === p2.field2) {
      console.log('Simple component has not been cloned. Booo!');
  } else {
      console.log('Simple component has been cloned. Yay!');
  }
}

clientCode();