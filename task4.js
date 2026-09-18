const count = Math.floor(Math.random() * 10) + 1;

const promises = Array.from({ length: count }, (_, i) => {
    return new Promise((resolve) => {
        const delay = Math.floor(Math.random() * 10) + 1;

        setTimeout(() => {
            console.log(`Функция ${i + 1} сработала за ${delay} секунд`);
            resolve(delay);
        }, delay * 1000);
    });
});

Promise.all(promises)
  .then(times => {
    const max = Math.max(...times);
    console.log("Максимальное время выполнения: ", max);
  });