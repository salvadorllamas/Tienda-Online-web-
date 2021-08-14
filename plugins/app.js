
if (navigator.serviceWorker) {

  navigator.serviceWorker.register('/RespuestaSw.js')
    .catch(errr => {
      console.log('se genero un error en el  navigator');
      console.log(errr);


    });
}


