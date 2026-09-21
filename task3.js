const mas = [ [1, 2, 3], [1, 2], [1, 2, 3, 4, 5], [1], [1, 2, 3, 4] ];

const mySort = (mas) => {
    const copy = [...mas];

    for (let j = 0; j < copy.length - 1; j++){
        for (let i = 0; i < copy.length - 1 - j; i++){
            if(copy[i].length > copy[i+1].length){
                [copy[i], copy[i + 1]] = [copy [i + 1], copy[i]];
            }
        }
    }
    return copy;
};

const result = mas.sort((a, b) => a.length - b.length);
console.log(result);

const resultMySort = mySort(mas);
console.log(resultMySort);