// const url = 'http://localhost:8080/'
// const url = 'http://192.168.31.237:8080/'
const url = 'https://kunapheap.com/'

const api = {
    log_in_url : url+'admin/login',
    get_user : url + 'admin/',
    get_all_item : url+'item/allItems',
    get_all_category : url+'category/allCategory',
    add_category : url + 'category',
    get_all_size : url + 'coloronsize/allSize',
    get_all_product : url + 'product/All',
    uplaod_item_image : url + 'item/image',
    add_item : url + 'item',
    get_item_by_id : url + 'item/getItem/',
    get_item_by_category : url + 'item/getItemByCategory/',
    update_item : url + 'item/update',
    dashboard_data : url + 'item/dashboard',
    delete_item : url + 'item/delete/',
    get_image : url + 'item/getImage/'
} 

export default api
