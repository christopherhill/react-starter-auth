import keymirror from 'keymirror'
import wretch from 'wretch'

const apiEndpoint = ''
const apiRoute = '/'

const actions = keymirror({
  GLOBAL_ACTION: null
})

const http = wretch(apiEndpoint)

export const actionCreators = {
  doGlobalAction: (queryParams: object) =>
    ({ payload: http.query(queryParams).get(apiRoute).json(), type: actions.GLOBAL_ACTION })
}

export default actions
