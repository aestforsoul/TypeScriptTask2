interface IProduct {
    id: number;
    name: string;
    category: string;
}

const sweets: IProduct[] = [{
    id: 1,
    name: 'ice-cream',
    category: 'food'
  },
  {
    id: 2,
    name: 'cake',
    category: 'food'
  }];


function updateObjectInArray<ObjectShape>(initialArray: ObjectShape[], key: string, value, patch: Partial<ObjectShape>): ObjectShape[] {
    let clonedArray  = [...initialArray];
    
    clonedArray.forEach(item => {
        if(item[key] === value) {
            for (let update in patch) {
                (item[update] as any) = patch[update];
            } 
        } 
    });

    return clonedArray;
}

console.log(updateObjectInArray<IProduct>(sweets, 'id', 2, { name:'cupcake'}));