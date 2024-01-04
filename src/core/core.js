///// Component /////
export class Component {
  constructor(payload = {}){
    const { 
      tagName = 'div',
      props = {},
      state = {}
    } = payload
    this.el = document.createElement(tagName)
    this.props = props
    this.state = state
    this.render()
  }
  render(){
    // ...
  }
}

///// Router /////
function routeRender(routes){
  if (!location.hash){
    history.replaceState(null, '', '/#/')
  }

  const routerView = document.querySelector('router-view')
  const [hash, queryString = ''] = location.hash.split('?')

  // a=123&b=456
  // ['a=123', 'b=456']
  const query = queryString
    .split('&')
    .reduce((acc, cur) => {
      const [key, value] = cur.split('=')
      acc[key] = value
      return acc
    }, {})
  history.replaceState(query, '')

  const currentRoute = routes.find(route => new RegExp(`${route.path}/?$`).test(hash))
  routerView.innerHTML = ''
  routerView.append(new currentRoute.component().el)

  window.scrollTo(0, 0)
}
export function createRouter(routes){
  return function(){
    window.addEventListener('popstate', () => {
      routeRender(routes)
    })
    routeRender(routes)
  }
}

///// Store /////
// export class Store{
//   constructor(state){
//     this.state = {}
//     this.observers = {}
//     for (const key in state){
//       Object.defineProperty(this.state, key, {
//         get: () => state[key], // state['message']
//         set: val => {
//           state[key] = val
//           this.observers[key]()
//         }
//       })
//     }
//   }
//   subscribe(key, cb){
//     this.observers[key] = cb
//   }
// }
// export class Store {
//   constructor(state) {
//     this.state = {};
//     this.observers = {};

//     for (const key in state) {
//       Object.defineProperty(this.state, key, {
//         get: () => state[key],
//         set: (val) => {
//           state[key] = val;
//           this.notifyObservers(key);
//         },
//       });

//       // Changed to initialize observers[key] as an array
//       this.observers[key] = [];
//     }
//   }

//   // Changed to allow multiple observers for the same key
//   subscribe(key, cb) {
//     this.observers[key].push(cb);
//   }

//   // Added a new method to notify all observers for a given key
//   notifyObservers(key) {
//     this.observers[key].forEach((observer) => observer(this.state[key]));
//   }
// }



export class Store {
  constructor(state) {
    this.state = {};
    this.observers = {};

    for (const key in state) {
      Object.defineProperty(this.state, key, {
        get: () => state[key],
        set: (val) => {
          state[key] = val;
          this.notifyObservers(key);
        },
      });

      // Changed to initialize observers[key] as an array
      this.observers[key] = [];
    }
  }

  // Modified to allow subscribing to multiple keys at once
  subscribe(keys, cb) {
    keys.forEach((key) => {
      if (!this.observers[key]) {
        this.observers[key] = [];
      }
      this.observers[key].push(cb);
    });
  }

  // Added a new method to notify all observers for a given key
  notifyObservers(key) {
    this.observers[key].forEach((observer) => observer(this.state[key]));
  }
}