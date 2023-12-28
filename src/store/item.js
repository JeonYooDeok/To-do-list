import {Store} from '../core/core'

const store = new Store({
  title: '',
  items: []
})

export default store
// export const searchItems = async () => {
//   store.state.items = []
//   // const res = await fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET' })
//   const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos', {
//     headers: {
//       'content-type': 'application/json',
//       'apikey': 'KDT7_GrZ1eYBo', // KDT 7기 APIKEY 입니다!
//       'username': 'KDT7_JeonYooDeok'
//     },
//   })


//   const { Search } = await res.json()
//   store.state.items = [
//     ...store.state.items,
//     ...Search
//   ]  
// }


async function searchItems() {
  // const res = await fetch('https://jsonplaceholder.typicode.com/posts', { method: 'GET' })
  const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos', {
    headers: {
      'content-type': 'application/json',
      'apikey': 'KDT7_GrZ1eYBo', // This is KDT 7th APIKEY!
      'username': 'KDT7_JeonYooDeok'
    },
  });
  const data = await res.json();
  console.log(data);
  console.log(data.length);
  store.state.items = [
    ...data
  ]
}
searchItems()