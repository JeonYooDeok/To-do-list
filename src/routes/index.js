import { createRouter } from '../core/core'
import Todo from './Todo'
import About from './About'

export default createRouter([
  { path: '#/', component: Todo},
  { path: '#/about', component: About}
])