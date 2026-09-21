const MS_PER_SECOND = 1000;

const getRandomNumber = (maxValue) => {
    return Math.floor(Math.random() * maxValue) + 1;
};

const count = getRandomNumber(10);

const promises = Array.from({ length: count }, (_, i) => {
    return new Promise((resolve) => {
        const delay = getRandomNumber(10);

        setTimeout(() => {
            console.log(`Функция ${i + 1} сработала за ${delay} секунд`);
            resolve(delay);
        }, delay * MS_PER_SECOND);
    });
});

Promise.all(promises)
  .then(times => {
    const max = Math.max(...times);
    console.log("Максимальное время выполнения: ", max);
  });