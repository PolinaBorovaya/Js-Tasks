// Пример 1
loadVideosAsync()
  .then(videos => {
    return loadMetaAsync().then(meta => ({ videos, meta }));
  })                                   
  .then(({ videos, meta }) => {         
    DoSomething(videos, meta);
  })
  .catch(err => {
    console.log("Ошибка", err);
  }); 
  
const func = async () => {
  try{
    const videos = await loadVideosAsync();
    const meta = await loadMetaAsync();

    DoSomething(videos, meta);
  }
  catch(error){
    console.log("Ошибка", error);
  }

}

// Пример 2
function anAsyncCall() {
  var promise = doSomethingAsync();
  
  return promise.then(function () {
    somethingComplicated();
  });
}

// Пример 3
db.getAllDocs()
  .then(function (result) {
    const promises = result.rows.map(function (row) {
      return db.remove(row.doc);
    });
    return Promise.all(promises);
  })
  .then(function () {
    // All docs must be removed!
  });

// Пример 4
doAsync()
  .then(function () {
      throw new Error('nope');
    },
  )
  .catch(function (err) {
    console.log("Ошибка поймана: ", err);
  });
