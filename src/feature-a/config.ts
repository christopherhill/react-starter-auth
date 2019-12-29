import { Create } from './components/create'
import { Detail } from './components/detail'
import { Edit } from './components/edit'

export default {
  name: 'feature-a',
  apiRoute: 'feature-a',
  apiEndpoint: 'feature-a',
  routes: [
    {
      id: 'create',
      path: 'create',
      component: Create
    },
    {
      id: 'detail',
      path: ':id(\\d+)/',
      component: Detail
    },
    {
      id: 'edit',
      path: ':id(\\d+)/edit',
      component: Edit
    }
  ]
}
