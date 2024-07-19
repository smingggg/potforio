
(function(){

    //proloading시 scroll 움직이는 못하게 막기
    function showLoadingScreen() {
        document.body.classList.add('loading');
        window.scrollTo(0, 0);
    }
    function hideLoadingScreen() {
        document.body.classList.remove('loading');
    }
    showLoadingScreen();
    
    // preload
    let container=document.querySelector("#progress");
    let progressBar=document.querySelector(".progress-bar");
    let progressText=document.querySelector(".progress-text");
    let imgLoaded=0;
    let imgTotal=1900;
    let current = 0;
    let progressTimer;
    let topValue;
    
    
    //매시간마다마다 할일
    //setInterval(할일,시간)
    //setInterval(function(){},1000)//매 1초마다마다 할일
    
    //setInterval를 멈추고 싶을때
    // 1) 변수에 setInterval 할당한다  let 변수 = setInterval
    // 2) clearInterval(변수)
    
    
    progressTimer=setInterval(updateProgress,1000/60)
    
    
    function updateProgress(){
        imgLoaded++;
        //console.log(imgLoaded)
        let target=(imgLoaded/imgTotal)*100;
        
        current += (target - current)*0.01;
        //current = current + (target - current)*0.01;
        progressBar.style.width=current + "%";
        progressText.innerHTML=Math.floor(current) + "%";//Math.floor 버림
        //console.log(current)
        let sp;
        if(current>99.9){
            clearInterval(progressTimer)
            container.classList.add("progress-complete")
            progressBar.style.width="100%";
            gsap.to(container,{
                duration:0.5,
                yPercent : -100,
                ease:"none",
                onUpdate:function scrollPrevent(){
                    showLoadingScreen();
                    sp= requestAnimationFrame(scrollPrevent)//2번줄
                    setTimeout(()=>{
                        cancelAnimationFrame(sp);
                        hideLoadingScreen();//6번줄
                    }, 10);
                },
                onComplete: function(){  scroll2();},
                
            })
        }
        
    }
    
    
    
    })();
    