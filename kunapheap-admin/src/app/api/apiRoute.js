// const url = 'http://localhost:8080/',
const url = 'http://192.168.31.237:8080/'
// const url = 'https://kunapheap.com/'

const api = {
    log_in_url : url+'admin/login',
    get_all_item : url+'item/allItems',
    get_all_category : url+'category/allCategory',
    add_category : url + 'category',
    get_all_size : url + 'coloronsize/allSize',
    get_all_product : url + 'product/All',
    uplaod_item_image : url + 'item/image',
    add_item : url + 'item'
} 

export default api
