import axios from "axios";

export const baseUrl = 'http://127.0.0.1:8000/api/';


export const adminLogin = async (data) => {
    // const response = await fetch(`${baseUrl}login`, {
    //     method : 'POST',
    //     headers : {'Content-Type' : 'application/json'},
    //     body : JSON.stringify({'email' : email, 'password' : password})
    // })
    //
    // // const result = await response.json();
    // // return result;
    // if (response.ok) {return true}
    //
    // const errMessage = await response.text()
    // throw new Error(errMessage)

    try {

        // const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

        let response = await axios.post(`${baseUrl}login`,
            {
                email: data.email,
                password: data.password
            },
            {
                headers: {
                    'Authorization': `Basic ${Buffer.from(`${data.email}:${data.password}`
                        , 'utf8').toString('base64')}`
                }
            });
        console.log(response);

        if(response.status === 200 && response.data.token){
            let token = response.data.token;
            console.log(token);
            // let expire_at = response.data.expireAt;

            localStorage.setItem("access_token", token);
            // localStorage.setItem("expire_at", expire_at);4
            return response.data;
        }


    } catch(e){
        console.log(e);
    }

        // axios.post(`${baseUrl}login`,
        //     {
        //         email: data.email,
        //         password: data.password
        //     })
        //     .then(res => {
        //         CookieService.set(
        //             'Bearer ', res.data.access_token, {
        //                 path: "/", 'max-Age': res.data.expires_in
        //             })
        //         CookieService.set('av ', res.data.av,
        //             {
        //                 path: "/", 'max-Age': res.data.expires_in
        //             })
        //         history.push("/dashboard");
        //     })
        //     .catch((error) => {
        //         if(error.response){
        //             setdisplay('inline');
        //         }else {
        //             setmessage("N e t w o r k  E r r o r")
        //             setdisplay('inline');
        //         }
        //     })

}

export const logout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("expire_at");
}


export const uploadMovies = async (data) => {
    const response = await fetch(`${baseUrl}visual`, {
        method : 'POST',
        headers : {'content-type' : 'application/json'},
        body : JSON.stringify(data)
    })

    if (response.ok) {return response.json()}
    const errMessage = await response.message
    throw new Error(errMessage)
}


// export const updatMovies = async (data) => {
//     const response = await fetch(`${baseUrl}update`, {
//         method : 'PUT',
//         headers : {'content-type' : 'application/json'},
//         body : JSON.stringify(data)
//     })

//     if (response.ok) return response.json()
//      const errMessage = await response.json().message
//      throw new Error(errMessage)
// }


// const login = (email, password) => {
// let loginFormData = new FormData();
// loginFormData.append("grant_type", "password");
// loginFormData.append("email", email);
// loginFormData.append("password", password);
// return new Promise((resolve, reject) => {
//      axios
//          .post(`${baseUrl}login`, loginFormData, {
//              headers: { Authorization: "Basic {secret_key}" }
//          })
//          .then(async response => {
//              response.data.lastRefresh = new Date().getTime();
//              localStorage.setItem("my_app_user", JSON.stringify(response.data));
//              getUser()
//                  .then(response => { resolve(response); })
//                  .catch(error => { reject(error); });
//          })
//          .catch(error => { reject(error); });
// });
// };

