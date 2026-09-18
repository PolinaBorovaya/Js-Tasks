new Promise((resovle, reject) => {
    const time = Math.floor(Math.random() * 3000);
    
    if(time<=2000){
        resovle(time);
    }
    else reject(time);
})
  .then(time => {
    console.log("Успех!", time);
  })
  .catch(time => {
    console.error("Время выполнения превысило 2 секунды!", time);
  });