// const url = 'http://localhost:8080'
// const url = 'http://192.168.8.137:8080'
// const url = 'http://192.168.127.160:8080'
const url = 'http://192.168.144.160:8080'
// const url = 'http://172.20.10.7:8080'
// const url = 'http://kunapheap.com:8080'
const  api = {
    'user_login_url' : url + '/user/login',
    'user_signUp_url' : url + '/user/signup',
    'get_user_url' : url + '/user/me/',
    'reset_user_pass_url' : url + '/user/resetpassword',
    'uplaod_user_img' : url + '/user/updateUserImages/',
    'update_user' : url + '/user/updateUser',
    'getAllCategory' : url + '/category/allcategory',
    'getOneProduct' : url + '/product/product_id/',
    'getAllProdct' : url + '/product/getAllProduct'
}

export default api

