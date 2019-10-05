import connection from '../api/http'
import { BASE_URL } from '../constants'
import { LOGIN_SUCCESS} from '../action_type/login'
import { showLoading, hideLoading, setErrorMsg } from "./loading_error";

export function doLogin(username, password){
    return (dispatch, getState) =>{
        dispatch(showLoading());
        connection.post('/manage/user/login.do',null, {username:username,password:password})
            .then(res=>{
                // before dispatch
                window.localStorage.setItem('current_user', JSON.stringify(res.data));
                dispatch({
                    type: LOGIN_SUCCESS,
                    user: res.data
                })
                // dispatch(hideLoading());
                // window.location.href='/'
                 window.location.href = `${BASE_URL}`
            })
            .catch(err=>{
                dispatch(setErrorMsg(err.message))
            })
    }
}
