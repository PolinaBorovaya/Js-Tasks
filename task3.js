const text = 'aaa bbb, ccc. Xxx - eee bbb, kkk!';

const mas = text.split(/\W+/).filter(word => word.length>0);

console.log(mas);