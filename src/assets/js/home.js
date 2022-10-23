let op = () =>{
    /* navbar */
    let menu = document.getElementById('menu');
    let navbar = document.getElementById('navbar');

    menu.onclick = function(){
        navbar.classList.toggle('active');
    }

    /* toTopArrow */
    let topBtn = document.getElementById('topBtn');

    window.onscroll = function(){
        scrollFunc();
    }
    function scrollFunc(){
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
            topBtn.style.display = 'block';
        }else {
            topBtn.style.display = 'none';
        }
    }
    topBtn.onclick = function(){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    /* toggle */
    let code = document.getElementsByClassName('code');
    let hide = document.getElementsByClassName('hide');

    for (let i=0; i<code.length; i++){
        code[i].onclick = function(){
            hide[i].classList.toggle('active');
        }
    }
}

export default op