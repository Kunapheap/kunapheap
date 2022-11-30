const url = 'http://localhost:8080'
// const url = 'http://192.168.8.137:8080'
// const url = 'http://192.168.141.160:8080'

const  api = {
    'user_login_url' : url + '/user/login',
    'user_signUp_url' : url + '/user/signup',
    'get_user_url' : url + '/user/me/',
    'reset_user_pass_url' : url + '/user/resetpassword',
    'uplaod_user_img' : url + '/user/updateUserImages/',
    'update_user' : url + '/user/updateUser'
}

export default api

