const InitialState= {
  loading:false,
  post:{},
  error:false,
};

const postReducer = (state, action) => {
  if(action.type==="FETCH_START"){
    return {
      loading:true,
      error:false,
      post:{},
    };
  } else if(action.type==="FETCH_SUCCESS") {
    return {
      loading: false,
      error: false,
      post:action.payload,
    }
  }
};
