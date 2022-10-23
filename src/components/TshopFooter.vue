<template>
    <section class="footer" id="footer">
        <h1>TShop</h1>
        
        <div class="row">
            <dl>
                <dt>資訊中心</dt>
                <dd><a href="#">尺寸表</a></dd>
                <dd><a href="#">常見問題</a></dd>
                <dd><a href="#">近期活動</a></dd>
            </dl>
            <dl>
                <dt>條款與政策</dt>
                <dd><a href="#">購物須知 </a></dd>
                <dd><a href="#">退換貨政策</a></dd>
                <dd><a href="#">隱私條款</a></dd>
                <dd><a href="#">購物金使用規範</a></dd>
                <dd><a href="#">預購相關規章</a></dd>
            </dl>
            <dl>
                <dt>會員</dt>
                <dd><a href="#">申請會員</a></dd>
                <dd><a href="#">登入</a></dd>
            </dl>
            <dl>
                <dt>服務資訊</dt>
                <dd><a href="#">香港</a></dd>
                <dd><a href="#">新加坡</a></dd>
                <dd><a href="#">馬來西亞</a></dd>
                <dd><a href="#">其他國家</a></dd>
            </dl>
            <dl>
                <dt>聯絡我們</dt>
                <dd><a href="#">營業時間: 9:00~18:00</a></dd>
                <dd><a href="#">LINE@客戶服務</a></dd>
                <dd><a href="#">會員登入</a></dd>
                <dd>
                    <div class="contact">
                        <a href="#"><i class="fa-brands fa-line"></i></a>
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                    </div>
                </dd>
            </dl>
        </div>

        <div class="pay">
            <img src="../assets/img/pay.png">
        </div>
    </section>
    <div class="copyright">
        <p>© 2022 Yang-Cheng web-practice</p>
    </div>
    <div class="arrow-btn">
        <div class="circle" id="topBtn">
            <i class="fa-solid fa-arrow-up"></i>
        </div>
      
    </div>
</template>

<script>
    export default {
        name: 'TshopFooter'
    }
</script>

<style scoped>
    /* contact */
    .footer h1{
        font-size: 4rem;
        font-family: 'Poppins', sans-serif;
        color: #222;
        border-top: 1px solid #d6d6d6;
        padding: 4rem;
        text-align: center;
    }
    .footer .row{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .footer .row dl dt{
        font-size: 1.8rem;
        padding-bottom: 1.5rem;
        text-decoration: underline;
    }
    .footer .row dl dd{
        padding: 1rem 0;
    }
    .footer .row dl dd a{
        font-size: 1.4rem;
        color: #222;
    }
    .footer .row dl dd a:hover{
        color: #e56717;
    }
    .contact a i{
        font-size: 2.5rem;
        padding-right: 2rem;
    }
    .pay{
        text-align: center;
        padding: 4rem;
    }
    .copyright{
        background: #333;
    }
    .copyright p{
        text-align: center;
        font-size: 1.4rem;
        color: #fff;
        padding: 2.5rem;
        font-family: 'Poppins', sans-serif;
    }

    /* arrow */
    .arrow-btn{
        position: fixed;
        right: 2.5rem;
        bottom: 2.5rem;    
    }
    .arrow-btn .circle{
        width: 5rem;
        height: 5rem;
        background: #e56717;
        border-radius: 50%;
        position: relative;
        cursor: pointer;
        z-index: 999999;
    }
    .arrow-btn i{
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 2rem;
        transform: translate(-50%, -50%);
        color: #fff;
    }

    /* media query */
    @media (max-width: 768px){
        .footer .row dl{
            width: 25%;
        }
    }
    @media (max-width: 450px){
        .footer .row dl{
            width: 50%;
            padding-bottom: 2rem;
        }
    } 
</style>