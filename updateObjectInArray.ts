interface IProduct {
  name: string;
  category: string;
}

const sweets: IProduct[] = [
  {
    name: "ice-cream",
    category: "food",
  },
  {
    name: "cake",
    category: "food",
  },
];

function updateObjectInArray<ObjectShape>(
  initialArray: ObjectShape[],
  key: string,
  value: string,
  patch: Partial<ObjectShape>
): ObjectShape[] {
  let clonedArray = [...initialArray];

  clonedArray.forEach((item) => {
    if (item[key] === value) {
      for (let update in patch) {
        (item[update] as any) = patch[update];
      }
    }
  });

  return clonedArray;
}

console.log(
  updateObjectInArray<IProduct>(sweets, "name", "cake", { name: "cupcake" })
);
