import actions from './actions'

const { GET_ALL, GET_METADATA } = actions

export default function (
  state: any = {
    entity: {},
    entities: [],
    metadata: {}
  },
  action: any
) {
  switch (action.type) {
    case GET_ALL:
      state = {
        ...state,
        entities: action.payload.data
      }
      break
    case GET_METADATA:
      state = {
        ...state,
        metadata: action.payload.metadata
      }
      break
  }
  return state
}
