import Jsonp from 'jsonp'
import Axios from 'axios'

export default class NewAxios {
    static jsonp(options) {
        return new Promise((resolve, reject) => {
            Jsonp(options.url, {
                param: 'callback'
            },  (err, data) =>{
                if (data.resultcode == 200) {
                    resolve(data)
                }
            })
        })
    }
    static json(options) {
        return new Promise((resolve, reject) => {
            Axios.get(options.url)
                .then(responce => {
                    if (responce.data.HeWeather6[0].status == 'ok') {
                        resolve(responce)  
                    }
                    else {reject(responce)}
                })
                .catch(e => { console.log(e) })
        })
    }
}
