import actions from './root-actions'

const { GLOBAL_ACTION } = actions

export default function (
  state: any = {
  },
  action: any
) {
  switch (action.type) {
    case GLOBAL_ACTION:
      state = {
        ...state,
        entities: action.payload.data
      }
      break
  }
  return state
}
