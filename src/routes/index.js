import { createRouter } from '../core/core'
import Todo from './Todo'
import About from './About'

export default createRouter([
  { path: '#/', component: About},
  { path: '#/Todo', component: Todo}
])