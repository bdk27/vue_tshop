<template>
    <section class="cart" id="cart">
        <h4>購物車({{ cartInfo.length }})件</h4>

        <table>
            <thead>
                <tr>
                    <td>商品圖</td>
                    <td>商品資訊</td>
                    <td>價格</td>
                    <td>數量</td>
                    <td>刪除</td>
                </tr>
            </thead>
            <tbody v-for="item in cartInfo" :key="item.id">
                <tr>
                    <td style="cursor: pointer;"><img :src="item.image"></td>
                    <td style="cursor: pointer;">{{ item.name }}</td>
                    <td>{{ item.cost }}</td>
                    <td>
                        <button @click="minus(item)"><i class="fa-solid fa-minus"></i></button>
                        <span>{{ item.quantity }}</span>
                        <button @click="increase(item)"><i class="fa-solid fa-plus"></i></button>
                    </td>
                    <td><i class="fa-solid fa-trash-can" ></i></td>
                </tr>
            </tbody>
            
        </table>
        
    </section>
    <section class="order" id="order">
        <div class="form">
            <div class="form-left">
                <h3>選擇送貨與付款</h3>

                <div class="delivery">
                    <div class="form-group">
                        <label for="#">送貨地點</label>
                        <div>
                            <select name="#" id="#">
                                <option value="#">台灣</option>
                            </select>
                        </div>
                    </div>
                
                    <div class="form-group">
                        <label for="#">送貨方式</label>
                        <div>
                            <select name="#" id="#">
                                <option value="#">7-11 取貨(信用卡,LINEPay)</option>
                                <option value="#">7-11 取貨(貨到付款)</option>
                                <option value="#">黑貓宅配(信用卡,LINEPay)</option>
                                <option value="#">黑貓宅配(信用卡,LINEPay)</option>
                                <option value="#">黑貓宅配(特別地區)</option>
                            </select>
                        </div>
                    </div>
                
                    <div class="form-group">
                        <label for="#">付款方式</label>
                        <div>
                        <select name="#" id="#">
                                <option value="#">LINEPay</option>
                                <option value="#">信用卡(Visa,Master,JCB)</option>
                            </select> 
                        </div>
                    </div>    
                </div>
            </div>

            <div class="form-right">
                <h3>訂單資訊</h3>

                <div class="total">
                    <div class="fee-group">
                        <p>小計:</p>
                        <p>${{ subTotal }}</p>
                    </div>

                    <div class="fee-group">
                        <p>運費:</p>
                        <p>${{ deliveryFee }}</p>
                    </div>

                    <div class="coupon-group">
                        <p class="code" @click="this.isShow = !this.isShow">優惠代碼:</p>
                        <div v-show="isShow">
                            <div class="row">
                                <input type="text">
                                <button>套用</button>
                            </div>
                        </div>
                    </div>

                    <div class="coupon-group" >
                        <p class="code" @click="this.isShow2 = !this.isShow2">推薦代碼:</p>
                        <div  v-show="isShow2">
                            <div class="row">
                                <input type="text">
                                <button>套用</button>
                            </div>
                        </div>
                        
                    </div>
                    <div class="fee-group final">
                        <p>合計:</p>
                        <p>${{ total }}</p>
                    </div>

                    <button class="cost">前往結帳</button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'TshopCart',
        props: ['cartData'],
        data() {
            return {
                cartInfo: [],
                deliveryFee: 60,
                isShow: false,
                isShow2: false,
                counter: 1,
            }
        },
        methods: {
            increase(item) {
                item.quantity ++;
            },
            minus(item) {
                 if(item.quantity > 1) {
                    item.quantity --;
                }
            },
            /* deleteCart(id) {  
                this.cartInfo = this.cartInfo.filter((cartItem) => {
                    return cartItem.id !== id;
                });
                console.log(this.cartInfo);
            }, */

        },
        computed: {
            /* cartInfo() {
                return JSON.parse(this.cartData)
            }, */
            subTotal() {
                return this.cartInfo.reduce((preValue, curValue) => {
                    return preValue + curValue.cost * curValue.quantity;        
                }, 0);
            },
            total() {
                return this.subTotal + this.deliveryFee;
            },
            
        },
        mounted() {
            this.cartInfo = JSON.parse(this.cartData);
        },
       
       
    }
</script>

<style scoped>
    /* cart */
    .cart h4{
        font-size: 1.4rem;
        padding: 1rem;
    }
    .cart table{
        width: 100%;
        border-collapse: collapse;
        table-layout: fixed;
        white-space: nowrap;
    }
    .cart thead{
        border-top: 1px solid #d6d6d6;
        border-bottom: 1px solid #d6d6d6;
    }
    .cart thead tr td{
        font-size: 1.6rem;
        padding: 1rem;
    }
    .cart tbody{
        border-bottom: 1px solid #d6d6d6;
    }
    .cart tbody tr td{
        font-size: 1.4rem;
        padding: 1rem;
    }
    .cart tbody:hover{
        background: #f0f0f0;
    }
    .cart tbody tr td input{
        width: 7rem;
        padding: .5rem;
    }
    .cart tbody tr td img{
        width: 10rem;
    }
    .cart tbody tr td i{
        font-size: 1.4rem;
        cursor: pointer;
    }
    .cart tbody tr td i:hover{
        color: #e56717;
    }
    .cart tbody tr td button {
        width: 25px;
        height: 25px;
        border: 1px solid transparent;
        outline: none;
        border-radius: 50%;
        cursor: pointer;
    }
    .cart tbody tr td span{
        padding: 10px;
    }

    /* order */
    .form{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
    }
    .form .form-left{
        width: 60%;
    }
    .form .form-right{
        width: 38%;
    }
    .form h3{
        font-size: 2rem;
        padding: 1rem;
        background: #f0f0f0;
    }
    .delivery{
        padding: 1rem;
    }
    .delivery .form-group{
        margin-bottom: 2rem;
    }

    .delivery .form-group select{
        width: 100%;
        padding: 1rem 0;
        font-size: 1.4rem;
        margin-top: 1rem;
    }
    .delivery .form-group option{
        font-size: 1.4rem;
        margin-bottom: 1rem;
    }
    .delivery label{
        font-size: 1.6rem;
        margin-bottom: 1rem;
    }
    .total{
        padding: 1rem;
    }
    .fee-group{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .fee-group p, .coupon-group p{
        font-size: 1.6rem;
        margin-bottom: 1rem;
    }
    .coupon-group .row{
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
    .coupon-group input{
        padding: .5rem;
        font-size: 1.4rem;
        width: 68%;
    }
    .coupon-group button{
        padding: .5rem 2rem;
        font-size: 1.6rem;
        width: 28%;
        color: #fff;
        background: #8e8e8e;
        border: 0;
        cursor: pointer;
    }
    .total .cost{
        width: 100%;
        font-size: 1.6rem;
        padding: 1rem;
        color: #fff;
        background: #e56717;
        border: 0;
        border-radius: 1rem;
        cursor: pointer;
        margin-top: 1rem;
    }
    .code{
        cursor: pointer;
    }
    .hide{
        display: none;
    }
    .hide.open{
        display: block;
    }
    .final{
        margin-top: 3rem;
    }
</style>