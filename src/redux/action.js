function getProject() {
  return async (dispatch) => {
    try { //정상적으로 데이터가 들어온다는 전제하에서 아래 코드를 실행하라
      dispatch({
        type: 'GET_PROJECT_REQUEST'})
      let url = `https://my-json-server.typicode.com/kyjkyj9329/YUJUNGKIM_Portfolio/project`;
      let response = await fetch(url);
      let data = await response.json();

      dispatch({
        type: 'GET_PROJECT_SUCCESS',
        payload: {
          popularMovies: popularMovies.data,
          topRatedMovies: topRatedMovies.data,
          upComingMovies: upComingMovies.data,
          genreList: genreList.data.genres,
          // movieImages: movieImages.data,
        }
      })
    } catch (error) {
      dispatch({type: 'GET_PROJECT_FAILURE'})
    }

  }
}

export const action = {
  getProject,
}