<template>
    <section class="nav" id="nav">
        <div class="logo">
        <h1>TShop</h1> 
        
        </div>

        <ul id="navbar">
            <li><router-link class="route" to="/">首頁</router-link></li>
            <li><a href="#clothes">服飾</a></li>
            <li><a href="#shoes">鞋款</a></li>
            <li><a href="#accessories">配件</a></li>
            <li><a href="#footer">資訊中心</a></li>
            <li>
                <router-link class="route numBackground" :to="{
                    name: 'TshopCart',
                    query: {
                        cartData: JSON.stringify(getHomeData)
                    }    
                }">
                結帳</router-link>
                <span 
                :class="{'number': this.getHomeData.length > 0}" 
                v-if="this.getHomeData.length > 0">
                {{ this.getHomeData.length }}</span>      
            </li>
        </ul>

        <i class="fa-solid fa-bars" id="menu"></i>
    </section>
</template>

<script>
    export default {
        name: 'TshopNav',
        data() {
            return {
                getHomeData: [],
            }
        },
        mounted() {
            this.bus.on('tshopObj', (data) => {
                this.getHomeData.push(data);
            });
            this.bus.on('cartId', (id) => {
                this.getHomeData = this.getHomeData.filter((cartItem) => {
                    return cartItem.id !== id;
                });
            });
            this.bus.on('count', (data) => {
                this.getHomeData.forEach((cartItem) => {
                    if(cartItem.id === data.id) {
                        cartItem.quantity = data.quantity;
                    }
                });
            });
          
        },
        beforeMount() {
            this.bus.off('tshopObj');
            this.bus.off('cartId');
            this.bus.off('count');
        }
    }
</script>

<style scoped>
    /* nav section */
    .nav{
        position: sticky;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .1);
        background: #fff;
        width: 100%;
        z-index: 1000;
        padding: 1rem 10%;
        top: 0;
    }
    .nav h1{
        font-size: 4rem;
        font-family: 'Poppins', sans-serif;
        color: #222;
    }
    .nav ul{
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .nav ul li{
        padding: 0 2rem;
    }
    .nav ul li a, .nav ul li .route{
        font-size: 1.8rem;
        color: #222;
    }
    .nav ul li a:hover, .nav ul li .route:hover{
        color: #e56717;
        text-decoration: underline;
    }
    .nav i{
        font-size: 2.5rem;
        color: #222;
        display: none;
    }
    .numBackground{
        position: relative;
    }
    .number{
        position: absolute;
        background: red;
        color: #fff;
        width: 20px;
        height: 20px;
        border-radius: 50%;
        text-align: center;
        font-size: 1.4rem;
    }
    @media (max-width: 768px){
        .nav ul{
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            position: absolute;
            top: 0;
            right: 0;
            height: 100vh;
            width: 30rem;
            background: #f0f0f0;
            padding: 5rem 0 0 1rem;
            margin-top: 8rem;
            display: none;
        }
        .nav ul.active{
            display: block;
        }
        .nav ul li{
            margin-bottom: 2.5rem;
        }
        .nav i{
            display: block;
        }
    }
</style>