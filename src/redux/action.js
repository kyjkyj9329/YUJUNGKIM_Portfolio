function getProject() {
  return async (dispatch) => {
    try { //정상적으로 데이터가 들어온다는 전제하에서 아래 코드를 실행하라
      dispatch({
        type: 'GET_PROJECT_REQUEST'})
        let url = `https://my-json-server.typicode.com/kyjkyj9329/YUJUNGKIM_Portfolio/project`;
        let data = await fetch(url).then((res) => res.json());
        let projectList = await Promise.all(data);
        console.log("data", projectList)

      dispatch({
        type: 'GET_PROJECT_SUCCESS',
        payload: {
          projectList: projectList.data,
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