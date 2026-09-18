new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve(10);
    }, 3000);
  // должно через 3 секунды передать дальше значение - 10
})
  .then(result => {
    console.log(result);
    return result * 2;
    // должно вывести значение и передать дальше увеличенное на 2
  })
  .then(result => {
    console.log(result);
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(result * 2);
        }, 2000);
    });
    // должно вывести значение и передать дальше увеличенное на 2 через 2 секунды
  })
  .then(result => {
    console.log(result);
    // должно вывести конечный результат
  });
