let initialState = {
  loading: true,
};

function reducer(state = initialState, action) {
  let {type, payload} = action;
  switch(type) {
    case 'GET_PROJECT_REQUEST':
      return {...state, loading: true }
    case 'GET_PROJECT_SUCCESS' :
      return { 
        ...state, 
        loading: false
      };
    case  'GET_PROJECT_FAILURE' : 
      return {...state, loading: false}
    default:
      return {...state}
  }
}

export default reducer