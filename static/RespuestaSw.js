//limpiar  cache  statico
const CACHE_STATICO_NOMBRE = 'statico-v28';
const CACHE_DINAMICO_NOMBRE = 'dinamico-v1';
const CACHE_INMUTABLE_NOMBRE = 'inmutable-v8';


const LIMITE_CACHE_DINAMICO = 100;


const datosCacheStatico = [
  '/',
  "/_nuxt/app.js",
  "/_nuxt/commons.app.js",
  "/_nuxt/pages_categorias__id.js",
  "/_nuxt/pages_index.js",
  "/_nuxt/pages_informacionDe__id.js",
  "/_nuxt/pages_masVendidos_index.js",
  "/_nuxt/pages_ofertas_index.js",
  "/_nuxt/runtime.js",
  "/_nuxt/vendors.app.js",
  '/no-imagen.jpg'
];

const datosCacheInmutable = [
  "https://fonts.googleapis.com/css2?family=Sacramento&display=swap"
];

//borrar los caches  antiguos  
function limpiarCache(cacheNombre, numeroItems) {
  caches.open(cacheNombre).then(cache => {

    return cache.keys().then(keys => {
      if (keys.length > numeroItems) {
        cache.delete(keys[0]).then(limpiarCache(cacheNombre, numeroItems));
      }
    });

  });

};



self.addEventListener('install', e => {
  //insertarCache(e);

  const cacheProm = caches.open(CACHE_STATICO_NOMBRE)
    .then(cache => {
      return cache.addAll(datosCacheStatico);
    });

  const cacheInmutable = caches.open(CACHE_INMUTABLE_NOMBRE)
    .then(cache => {
      return cache.addAll(datosCacheInmutable);
    });

  e.waitUntil(Promise.all([cacheProm, cacheInmutable]));
});



self.addEventListener('activate', e => {
  //borrarVercionesCache(e);
  const actualizarStatico = caches.keys().then(keys => {
    keys.forEach(key => {
      //static  se elimina todas las verciones anteriores
      if (key != CACHE_STATICO_NOMBRE && key.includes('statico')) {
        return caches.delete(key);
      }

    });

  });
  const actualizarInmutable = caches.keys().then(keys => {
    keys.forEach(key => {
      //static  se elimina todas las verciones anteriores
      if (key != CACHE_INMUTABLE_NOMBRE && key.includes('inmutable')) {
        return caches.delete(key);
      }
    });
  });
  const actualizarDinamico = caches.keys().then(keys => {

    keys.forEach(key => {
      //static  se elimina todas las verciones anteriores
      if (key != CACHE_DINAMICO_NOMBRE && key.includes('dinamico')) {
        return caches.delete(key);
      }
    });

  });
  e.waitUntil(Promise.all([actualizarStatico, actualizarInmutable, actualizarDinamico]));
});

self.addEventListener('fetch', e => {
  //insertarCacheDinamico(e);
  //2- cahce with network fallback
  //const sinconexion = new Response('sin conexion a  internet  ');

  const respuesta = caches.match(e.request).then(resp => {
    if (resp) return resp;
    //no existe el archivo
    //tengo que ir a la web
    return fetch(e.request).then(newRep => {
        caches.open(CACHE_DINAMICO_NOMBRE)
          .then(cache => {
            cache.put(e.request, newRep);
            limpiarCache(CACHE_DINAMICO_NOMBRE, LIMITE_CACHE_DINAMICO);
          });
        return newRep.clone();
      })
      .catch(error => {
        console.log(error);
        // return caches.match('~/components/sininternet/sinsininternet.vue');
        /*
         if (e.request.headers.get('accept').includes('text/html')) {
           return caches.match('/_nuxt/app.js');
         }
        */
      });
  });
  e.respondWith(respuesta);
});
