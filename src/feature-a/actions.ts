import keymirror from 'keymirror'
import config from './config'
import wretch from 'wretch'

const { apiEndpoint, apiRoute } = config

const actions = keymirror({
  GET_ALL: null,
  GET_METADATA: null,
  GET: null,
  UPDATE: null,
  DELETE: null,
  PATCH: null
})

const http = wretch(apiEndpoint)

export const actionCreators = {
  getAll: (queryParams: object) =>
    ({ payload: http.query(queryParams).get(apiRoute).json(), type: actions.GET_ALL }),
  getMetadata: (queryParams: object) =>
    ({ payload: http.query(queryParams).get(`${apiRoute}/metadata`).json(), type: actions.GET_METADATA }),
  get: (id: number, queryParams: object) =>
    ({ payload: http.query(queryParams).get(`${apiRoute}/${id}`).json(), type: actions.GET }),
  update: (id: number, body: object, options: object) =>
    ({ payload: http.options(options).body(body).put(`${apiRoute}/${id}`).json(), type: actions.UPDATE }),
  del: (id: number, options: object) =>
    ({ payload: http.options(options).delete(`${apiRoute}/${id}`).json(), type: actions.DELETE }),
  patch: (id: number, body: object, options: object) => ({
    payload: http.options(options).body(body).patch(`${apiRoute}/${id}`).json(), type: actions.PATCH
  })
}

export default actions
