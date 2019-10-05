import axios from 'axios'

const request = (method = 'GET', url, params = {}, data = {}) => {
    return new Promise((resolve, reject) => {
        axios({
            url: url,
            method: method,
            params: params,
            data: data,
            // headers,
        }).then(res => {
            if(res.data.status === 10){
               window.localStorage.removeItem('current_user')
               window.location.href = "/login"
            }else if(res.data.status === 0){
                resolve(res.data)
            }else{
                //alert(res.data.msg)
                reject({
                    message: res.data.msg
                })
            }
        })
        .catch(error => {
          //  alert(error.message)
            reject(error);
        });
    });
};

const connection = {
    post(url, data, params){
        return request('POST', url, params, data)
    },
    get(url, params = {}){
        return request('GET', url, params)
    }
}

export default connection

