const MAX_TIME_MS = 3000;    
const LIMIT_MS = 2000; 

function getRandomSeconds() {
  return Math.floor(Math.random() * MAX_TIME_MS);
}

new Promise((resovle, reject) => {
    const randomSeconds = getRandomSeconds();
    
    if(randomSeconds<=LIMIT_MS){
        resovle(randomSeconds);
    }
    else reject(randomSeconds);
})
  .then(randomSeconds => {
    console.log("Успех!", randomSeconds);
  })
  .catch(randomSeconds => {
    console.error("Время выполнения превысило 2 секунды!", randomSeconds);
  });