import {Store} from '../core/core'

const store = new Store({
  title: '',
  items: []
})



export default store

// 아이템 리스트 조회 시작
export const searchItems = async () => {
  const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos', {
    headers: {
      'content-type': 'application/json',
      'apikey': 'KDT7_GrZ1eYBo', // This is KDT 7th APIKEY!
      'username': 'KDT7_JeonYooDeok'
    },
  })
  const item = await res.json()
  console.log(item)
  console.log(item.length)
  store.state.items = [
    ...item
  ]

}
searchItems()
// 아이템 리스트 조회 끝



//할 일 생성 함수 선언 시작
export const createTodo = async function(val) {
  console.log(store.state.items)
  const res = await fetch('https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'apikey': 'KDT7_GrZ1eYBo', // KDT 7기 APIKEY 입니다!
      'username': 'KDT7_JeonYooDeok'
    },
    body: JSON.stringify({
      title: val
    })
  })
  const json = await res.json()
  console.log(json)
  store.state.items = [
    json, ...store.state.items
  ]
}
//할 일 생성 함수 선언 끝


//일괄 삭제 기능 시작
export const deleteItems = async function(){
  const newArr = store.state.items.filter(item => item.done)
  const newArr2 = newArr.map(item => item.id)  
  const res = await fetch(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos/deletions`, {
    method: 'DELETE',
    headers: {
     'content-type': 'application/json',
     'apikey': 'KDT7_GrZ1eYBo', // KDT 7기 APIKEY 입니다!
     'username': 'KDT7_JeonYooDeok'
    },
    body: JSON.stringify({
      "todoIds": newArr2
    })
  })
  store.state.items = [
    ...store.state.items.filter(item => !item.done)
  ]
}
//일괄 삭제 기능 끝
