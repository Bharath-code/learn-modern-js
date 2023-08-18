//weakref to object, ->  free memory like WeakMap and WeakSet
{
  let ref = { x: 10, y: 10 };
  console.log(ref.x, ref.y);

  let weakRef = new WeakRef({ x: 10, y: 10 });
  console.log(weakRef.deref()?.x, weakRef.deref()?.y);

  // After Garbage collection
  // ref will hold strong reference to the object
  // but weakref will remove from memory and print undefined
  ref;
  console.log(weakRef.deref());

  console.log(ref.x, ref.y);
  console.log(weakRef.deref()?.x, weakRef.deref()?.y);
}

// do profile analysis in browser for memory usage of high computation task
{
  const createHeavy = () => ({ heavy: new Array(10_000_000).fill("🌹") });

  let a = createHeavy(),
    b = createHeavy(),
    c = createHeavy();

  let x = new WeakRef(createHeavy()),
    y = new WeakRef(createHeavy()),
    z = new WeakRef(createHeavy());

  console.log("strong", a.heavy[0], b.heavy[0], c.heavy[0]);
  console.log(
    "weak",
    x.deref()?.heavy[0],
    y.deref()?.heavy[0],
    z.deref()?.heavy[0]
  );
  // @ts-ignore
  (a = null), (b = null), (c = null);
}
