var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var sweets = [{
        id: 1,
        name: 'ice-cream',
        category: 'food'
    },
    {
        id: 2,
        name: 'cake',
        category: 'food'
    }];
function updateObjectInArray(initialArray, key, value, patch) {
    var clonedArray = __spreadArray([], initialArray, true);
    clonedArray.forEach(function (item) {
        if (item[key] === value) {
            for (var update in patch) {
                item[update] = patch[update];
            }
        }
    });
    return clonedArray;
}
console.log(updateObjectInArray(sweets, 'id', 2, { name: 'cupcake' }));
