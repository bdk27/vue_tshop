<template>
        <div class="hero" id="hero">
            <div class="text">
                <h3>全館商品</h3>
                <h2>超值優惠，折扣不斷</h2>
                <p>使用優惠券節省更多最高高達<span> 5折</span></p>
                <button>立即選購<i class="fa-solid fa-arrow-right"></i></button>
            </div>
        
        </div>

        <section class="clothes" id="clothes">
        <h2>夏日精選服飾</h2>
        <span class="line"></span>

        <div class="card-container">
            <div class="card" v-for='item in clothesData' :key="item.id">
                <img :src="item.image">
                <div class="detail">
                    <span>夏日系列</span>
                    <h5>{{ item.name }}</h5>
                    <div class="star">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                    <h3>${{ item.cost }}</h3>
                </div>
               <!--  <input type="checkbox" v-model="checkgroup" :value="item" :id="item.id" style="display: none;"> -->
               <i class="fa fa-shopping-cart cart" @click="getInfo(item)"></i>
            </div>
        </div>
        </section>

        <div class="banner">
            <h2>穿在腳下，行在未來</h2>
            <h4>擁有時尚人生，踩出快樂，走出精彩</h4>
        </div>

        <section class="shoes" id="shoes">
            <h2>熱門鞋款</h2>
            <span class="line"></span>

            <div class="card-container">
                <div class="card" v-for="item in shoesData" :key="item.id">
                    <img :src="item.image">
                    <div class="detail">
                        <span>鞋款</span>
                        <h5>{{ item.name }}</h5>
                        <div class="star">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <h3>${{ item.cost }}</h3>
                    </div>
                    <a href="#"><i class="fa fa-shopping-cart cart"></i></a>
                </div>
            </div>
        </section>

        <div class="banner acc-banner">
            <h2>牽動世界的風潮</h2>
            <h4>提不住的優雅，美不住的綻放</h4>
        </div>

        <section class="accessories" id="accessories">
            <h2>流行配件飾品</h2>
            <span class="line"></span>

            <div class="card-container">
                <div class="card" v-for="item in acceData" :key="item.id">
                    <img :src="item.image">
                    <div class="detail">
                        <span>配件</span>
                        <h5>{{ item.name }}</h5>
                        <div class="star">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                        <h3>${{ item.cost }}</h3>
                    </div>
                    <a href="#"><i class="fa fa-shopping-cart cart"></i></a>
                </div>
            </div>
        </section>

        <section class="sm-banner" id="sm-banner">
            <div class="banner-left">
                <div class="banner-box">
                    <div class="text">
                        <span>季節促銷</span>
                        <h2>夏日來臨</h2>
                        <p>經典服飾目前特價就在TShop</p>
                        <button>查看更多</button>
                    </div>
                </div>
                <div class="banner-box banner-box2">
                    <div class="text">
                        <span>季節促銷</span>
                        <h2>買一送一</h2>
                        <p>經典配件目前特價就在TShop</p>
                        <button>立即查看</button>
                    </div>
                </div>
            </div>
            <div class="banner-right">
                <div class="banner-bottom">
                    <div class="banner-box banner-box4">
                        <h2>全新商品，多樣選擇</h2>
                        <span>春季 / 夏季 2022</span>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
    import { nanoid } from 'nanoid'

    export default {
        name: 'TshopHome',
        data() {
            return {
                clothesData: [
                    {
                        id: nanoid(),
                        name: '夏日涼感襯衫-拼接',
                        image: require('../assets/img/shirt/f1.jpg'),
                        cost: 500,
                    },
                    {
                        id: nanoid(),
                        name: '深色涼感襯衫',
                        image: require('../assets/img/shirt/n8.jpg'),
                        cost: 650,
                    },
                    {
                        id: nanoid(),
                        name: '夏日涼感襯衫-花語1',
                        image: require('../assets/img/shirt/f2.jpg'),
                        cost: 500,
                    },
                    {
                        id: nanoid(),
                        name: '夏日涼感襯衫-花語2',
                        image: require('../assets/img/shirt/f3.jpg'),
                        cost: 500,
                    },
                    {
                        id: nanoid(),
                        name: '夏日涼感襯衫-花語3',
                        image: require('../assets/img/shirt/f4.jpg'),
                        cost: 500,
                    },
                    {
                        id: nanoid(),
                        name: '夏日涼感襯衫-花語4',
                        image: require('../assets/img/shirt/f5.jpg'),
                        cost: 500,
                    },
                    {
                        id: nanoid(),
                        name: '舒適短褲',
                        image: require('../assets/img/shirt/n6.jpg'),
                        cost: 450,
                    },
                    {
                        id: nanoid(),
                        name: '夏日涼感襯衫-地圖',
                        image: require('../assets/img/shirt/n4.jpg'),
                        cost: 650,
                    },
                ],
                shoesData: [
                    {
                        id: nanoid(),
                        name: 'NIKE Air 1',
                        image: require('../assets/img/shoes/pexels-melvin-buezo-2529148.jpg'),
                        cost: 4500,
                    },
                    {
                        id: nanoid(),
                        name: 'NIKE Air 2',
                        image: require('../assets/img/shoes/pexels-ox-street-6050919.jpg'),
                        cost: 2850,
                    },
                    {
                        id: nanoid(),
                        name: 'NIKE Air 3',
                        image: require('../assets/img/shoes/pexels-ox-street-6050924.jpg'),
                        cost: 4000,
                    },
                    {
                        id: nanoid(),
                        name: 'NIKE Air 4',
                        image: require('../assets/img/shoes/pexels-ox-street-5710074.jpg'),
                        cost: 5500,
                    },
                    {
                        id: nanoid(),
                        name: 'NIKE Air 5',
                        image: require('../assets/img/shoes/pexels-deybson-mallony-5413291.jpg'),
                        cost: 5600,
                    },
                    {
                        id: nanoid(),
                        name: 'NIKE Air 6',
                        image: require('../assets/img/shoes/pexels-ox-street-6540926.jpg'),
                        cost: 3500,
                    },
                    {
                        id: nanoid(),
                        name: 'NIKE Air 7',
                        image: require('../assets/img/shoes/pexels-ox-street-6540973.jpg'),
                        cost: 4250,
                    },
                    {
                        id: nanoid(),
                        name: 'NIKE Air 8',
                        image: require('../assets/img/shoes/pexels-ox-street-6540914.jpg'),
                        cost: 6500,
                    },
                ],
                acceData: [
                    {
                        id: nanoid(),
                        name: '黑耀手環',
                        image: require('../assets/img/accessories/pexels-alexey-demidov-10803602.jpg'),
                        cost: 550,
                    },
                    {
                        id: nanoid(),
                        name: '絢麗髮箍',
                        image: require('../assets/img/accessories/pexels-castorly-stock-3641056.jpg'),
                        cost: 680,
                    },
                    {
                        id: nanoid(),
                        name: '花樣扁梳',
                        image: require('../assets/img/accessories/pexels-dmitry-zvolskiy-1676126.jpg'),
                        cost: 450,
                    },
                    {
                        id: nanoid(),
                        name: '多功能斜背包',
                        image: require('../assets/img/accessories/pexels-ge-yonk-1152077.jpg'),
                        cost: 1250,
                    },
                    {
                        id: nanoid(),
                        name: '有色眼鏡',
                        image: require('../assets/img/accessories/pexels-felipe-ferreira-701877.jpg'),
                        cost: 980,
                    },
                    {
                        id: nanoid(),
                        name: '紅色耳飾',
                        image: require('../assets/img/accessories/pexels-romina-bm-5380900.jpg'),
                        cost: 2500,
                    },
                    {
                        id: nanoid(),
                        name: '深秋耳飾',
                        image: require('../assets/img/accessories/pexels-superlens-photography-11655346.jpg'),
                        cost: 1280,
                    },
                    {
                        id: nanoid(),
                        name: '星型手環',
                        image: require('../assets/img/accessories/pexels-the-glorious-studio-5370648.jpg'),
                        cost: 880,
                    },
                ],
            }
        },
        methods: {
            getInfo(item) {
                const tshopObj = {id: item.id, name: item.name, image: item.image, cost: item.cost};

                this.bus.emit('tshopObj', tshopObj);
                console.log('home傳送數據了', tshopObj);
            },

        },
        
    }
</script>

<style scoped>
/* hero */
.hero{
    width: 100%;
    height: 100vh;
    background-image: url(~@/assets/img/banner/pexels-cottonbro-3927390.jpg);
    background-position: center;
    background-size: cover;
    position: relative;
    margin-bottom: 4rem;
}
.hero .text{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.hero .text h3{
    font-size: 5rem;
    color: #222;
    background-image: url(~@/assets/img/button.png);
    background-position: left;
    background-repeat: no-repeat;
}
.hero .text h2{
    font-size: 10rem;
    margin-bottom: 1rem;
}
.text p{
    font-size: 3rem;
    color: #6c6c6c;
}
.hero .text p span{
    font-size: 3rem;
    color: red;
    font-weight: bold;
}
.hero .text button{
    font-size: 1.8rem;
    border: none;
    color: #fff;
    background: #e56717;
    padding: 1rem 3rem;
    border-radius: 5px;
    margin-top: 2rem;
    cursor: pointer;
    transition: .5s; 
}
.hero .text button i{
    font-size: 1.8rem;
    margin-left: 1rem;
}

/* clothes */
.clothes h2{
    font-size: 3rem;
    margin-top: 4rem;
    text-align: center;
    position: relative;
}
.line{
    border: 2px solid #005AB5;
    position: absolute;
    width: 10rem;
    left: 50%;
    transform: translate(-50%);
    margin-top: 1rem;
}
.card-container{
    margin: 4rem 0;
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    flex-wrap: wrap;
}
.card-container .card{
    width: 23%;
    padding: 1rem 1.2rem;
    border: 1px solid#C4E1FF;
    border-radius: 2.5rem;
    position: relative;
    margin: 1.5rem 0;
}
.card-container .card img{
    width: 100%;
    border-radius: 2.5rem;
}
.card-container .card .detail{
    margin-top: 1rem;
    line-height: 2.5rem;
}
.card-container .card .detail span{
    font-size: 1.4rem;
    color: #6c6c6c;
}
.card-container .card .detail h5{
    font-size: 1.8rem;
}
.card-container .card .detail .star{
    color: rgb(243, 181, 25);
}
.card-container .card .detail h3{
    font-size: 2rem;
    margin-bottom: 2rem;
    color:#005AB5;
}
.card-container .card .cart{
    font-size: 2.5rem;
    color: #6c6c6c;
    position: absolute;
    right: 2rem;
    bottom: 2rem;
    cursor: pointer;
}
.card-container .card .cart:hover{
    color: #005AB5;
}

/* banner */
.banner{
    background-image: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(~@/assets/img/banner/pexels-kaique-rocha-250356.jpg);
    width: 100%;
    height: 40vh;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}
.banner h2{
    color: #fff;
    font-size: 5rem;
    letter-spacing: 7px;
}
.banner h4{
    color: #d0d0d0;
    font-size: 2.5rem;
}

/* shoes */
.shoes h2{
    font-size: 3rem;
    margin-top: 4rem;
    text-align: center;
}
.shoes .line{
    border: 2px solid #BB3D00;
}
.shoes .card-container .card{
    width: 23%;
    padding: 1rem 1.2rem;
    border: 1px solid #FFDAC8;
    border-radius: 2.5rem;
    position: relative;
    margin: 1.5rem 0;
}
.shoes .card-container .card .detail h3{
    font-size: 2rem;
    margin-bottom: 2rem;
    color:#BB3D00;
}
.shoes .card-container .card .cart:hover{
    color:#BB3D00;
}

/* banner */
.acc-banner{
    background-image: linear-gradient(rgba(0, 0, 0, .5), rgba(0, 0, 0, .5)), url(~@/assets/img/banner/pexels-antony-trivet-9982620.jpg);
}

/* accessories */
.accessories h2{
    font-size: 3rem;
    margin-top: 4rem;
    text-align: center;
}
.accessories .line{
    border: 2px solid#4F9D9D;
}
.accessories .card-container .card{
    border: 1px solid #B3D9D9;
}
.accessories .card-container .card .detail h3{
    color:#4F9D9D;
}
.accessories .card-container .card .cart:hover{
    color:#4F9D9D;
}

/* sm-banner */
.sm-banner{
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 0 10%;
}
.banner-left{
    width: 48%;
}
.banner-right{
    width: 48%;
}
.banner-box{
    background-image: url(~@/assets/img/banner/pexels-ivan-samkov-8498381.jpg);
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 30vh;
    cursor: pointer;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    text-align: right;
}
.banner-box .text{
   padding: 3rem;
   color: #fff;
}
.banner-box .text span{
    font-size: 1.6rem;
}
.banner-box .text h2{
    font-size: 3rem;
    letter-spacing: .5rem;
}
.banner-box .text p{
    font-size: 1.8rem;
    color: #fff;
}
.banner-box .text button{
    color: #fff;
    font-size: 1.4rem;
    padding: 1rem 2.5rem;
    border: 1px solid #fff;
    background: transparent;
    border-radius: 1rem;
    margin-top: 1rem;
    cursor: pointer;
}
.banner-box2{
    background-image: url(~@/assets/img/banner/pexels-andrea-piacquadio-3767414.jpg);
    width: 100%;
    margin-top: 1rem;
}
.banner-box3{
    background-image: url(~@/assets/img/banner/pexels-antony-trivet-9982620.jpg);
    width: 100%;
}
.banner-box3 .text h2{
    color: #fff;
    backdrop-filter: blur(5px);
    padding: 1rem 2rem;
    border-radius: 1rem;
    border: 1px solid #fff;
}
.banner-box4{
    background-image: url(~@/assets/img/banner/pexels-pavel-danilyuk-6461394.jpg);
    width: 100%;
    height: 61vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    color: #fff;
    padding: 3rem;
}
.banner-box4 h2{
    font-size: 4rem;
}
.banner-box4 span{
    font-size: 2rem;
    color: #ec544e;
    font-weight: bold;
}

/* media query */
@media (max-width: 991px){
    .hero .text h3{
        font-size: 3rem;
    }
    .hero .text h2{
        font-size: 5.5rem;
    }
    .hero .text p{
        font-size: 2rem;
    }
    .hero .text p span{
        font-size: 2rem;
    }
    .hero .text button{
        font-size: 1.6rem;
    }
    .hero .text button i{
        font-size: 1.6rem;
    }
    .card-container .card .detail span{
        font-size: 1rem;
    }
    .card-container .card .detail h5{
        font-size: 1.5rem;
    }
    .card-container .card .detail h3{
        font-size: 1.5rem;
    }
    .card-container .card .cart{
        font-size: 2rem;
    }
    .banner-left{
        width: 100%;
    }
    .banner-right{
        width: 100%;
    }
    .banner-box2{
        margin-bottom: 1rem;
    }
}
@media (max-width: 768px){
    .hero .text{
        text-align: center;

    }
    .hero .text h3{
        font-size: 2.5rem;
        background-position: center;
        margin-bottom: 1rem;
    }
    .hero .text h2{
        font-size: 4.2rem;
    }
    .card-container .card, 
    .shoes .card-container .card,
    .accessories .card-container .card{
        width: 48%;
    }
    .banner-box4 h2{
        font-size: 3rem;
    }
 
}
@media (max-width: 450px){
    .hero .text h3{
        font-size: 2rem;
    }
    .hero .text h2{
        font-size: 3rem;
    }
    .hero .text p{
        font-size: 1.4rem;
    }
    .hero .text p span{
        font-size: 1.4rem;
    }
    .card-container .card, 
    .shoes .card-container .card,
    .accessories .card-container .card{
        width: 100%;
    }
    .banner h2{
        font-size: 2.5rem;
    }
    .banner h4{
        font-size: 1.5rem;
    }
    .banner-box .text span{
        font-size: 1.4rem;
    }
    .banner-box .text h2{
        font-size: 2rem;
        letter-spacing: .5rem;
    }
    .banner-box .text p{
        font-size: 1.6rem;
        color: #fff;
    }
    .banner-box .text button{
        font-size: 1.2rem;
    }
    .banner-box4 h2{
        font-size: 2rem;
    }
    .banner-box4 span{
        font-size: 1.8rem;
    }
    
}
</style>