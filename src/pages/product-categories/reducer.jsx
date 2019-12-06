
var initialState = [
    {
        sku: "thaomoc",
        name: "cây thảo mộc",
        categoryId: "TD01",
        quantity:10,
        image:'https://salt.tikicdn.com/cache/550x550/ts/product/21/cd/2c/c405715786226947b7701fcf95d9cd6f.jpg',
    },
    {
        sku: "senda",
        name: "cây cảnh",
        categoryId: "C01",
        quantity:15,
        image:"https://product.hstatic.net/1000187613/product/img_1095_9d7d478269bb4666a7d9995f87b603f2_master.jpg"
    },
    {
        sku: "hoahong",
        name: "cây hoa hồng",
        categoryId: "H01",
        quantity:20,
        image:"https://live.staticflickr.com/65535/48634116677_dbdfcddcbb_c.jpg"
    },
    {
        sku: "rau cải",
        name: "cây rau cải",
        categoryId: "RA01",
        quantity:20,
        image:"https://lamtho.vn/wp-content/uploads/2018/06/Cach-trong-cay-bo-cong-anh-03.jpg"
    }
]
const productCategoriesReducer = (state=initialState, action) =>{
    switch(action.type){
        default : return [...state]
    }
}
export default productCategoriesReducer;