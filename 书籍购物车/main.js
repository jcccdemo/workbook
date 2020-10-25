const app = new Vue({
    el: "#app",
    data: {
        books: [
            {
                id : 1 ,
            name : "java基础" ,
            date : 2014.6 ,
            price : 99.00 ,
            count : 1,
            },
            {
                id : 2 ,
            name : "Linux基础" ,
            date : 2012.6 ,
            price : 59.00 ,
            count : 1,
            },
            {
                id : 3 ,
            name : "C++基础" ,
            date : 2017.6 ,
            price : 49.00 ,
            count : 1,
            },
            {
                id : 4,
            name : "Vue基础" ,
            date : 2019.6 ,
            price : 199.00 ,
            count : 1,
            }
        ]
    },
    methods: {
        decrement(index) {
            this.books[index].count--
        },
        increment(index){
            this.books[index].count++
        },
       remove(index) { //因为需要确定要移除哪一条购物记录所以需要使用index
           this.books.splice(index,1) //splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
        // 删除当前的目标一次删除一个，通过index来判断，所以选择 index ，1    1表示当前删除一个
       },
    },
    computed: {
        totalPrice() {
            let totalPrice = 0 //为了保存最终的价格
            // 因为要将总价格遍历出来所以使用for
            for(let i = 0; i < this.books.length; i++){
                // 因为总价的数目是可以变换的，所以使用let
                totalPrice += this.books[i].price * this.books[i].count
                // 价格（this.books[i].price） * 数量（this.books[i].count） = 总价
            }
            return totalPrice //将最终的结果返回出来
        }
    },
    filters: {
        showPrice(price){
            return '￥' + price.toFixed(2)
    }
}
});
