gsap.registerPlugin(ScrollTrigger);
const lenis = new Lenis()
lenis.on('scroll', (e) => {
	//console.log(e)
})

/* function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf) */

lenis.on('scroll', ScrollTrigger.update)

gsap.ticker.add((time) => {
	lenis.raf(time * 1000)
})

gsap.ticker.lagSmoothing(0)
////////////////////////////////////////

////////////////////////// mouse //////////////////////////


////////////////////////// loding //////////////////////////


/* var color = '#';
var letters = ['FEA1A1', 'ECCDB4', 'F0EDD4', 'F9FBE7', 'FFFDB5'];

color += letters[Math.floor(Math.random() * letters.length)];
document.getElementById('random-bg').style.background = color; */


//////////////////////////badge//////////////////////////
gsap.to(".badge", {
	//forEach쓸 필요 없이 모든 badge에 적용(html 영역만 어디든 넣으면됨)
	rotation: 360,
	duration: 10,
	ease: "none",
	repeat: -1
})

gsap.to(".badge2", {
	//forEach쓸 필요 없이 모든 badge에 적용(html 영역만 어디든 넣으면됨)
	rotation: -360,
	duration: 10,
	ease: "none",
	repeat: -1
})

//////////////////////////introduce//////////////////////////
let container = document.querySelector(".main-wrapper");
let section = container.querySelectorAll("sec");

gsap.timeline({
  scrollTrigger: {
		trigger: "section.introduce",
		start: "top top",
}})
.fromTo(".box1 img ", {
  opacity: 0, 
}, {
  opacity: 1
},)



let tl1 = gsap
  .timeline({
    scrollTrigger: {
      trigger: container,
      scrub: 1,
      pin: true,
      start: "top top",
      end: "+=3000",
      endTrigger: ".end-scroll", //end값이 이것에 관여한다
      
    },
  })
 
  .to(container, {
    x: () =>
      -(container.scrollWidth - document.documentElement.clientWidth + 40) +
      "px",
    ease: "none",
    pin: true,
    duration: 1,
  })

 
/*   gsap.to(".header", {
    y: -100,
    ease: "power1.out",
    duration: 0.2,
    scrollTrigger: {
      trigger: "section.introduce",
      start: "top top",
      // end:"bottom top"
    },
  });

  gsap.to(".header", {
    y: 0,
    ease: "power1.out",
    duration: 0.1,
    scrollTrigger: {
      trigger: "section.introduce",
      start: "bottom 30%",
      scrub: true,
    },
  }); */


gsap.to(".col-1", {
  y: -250,
  ease: "none",
  duration: 2,
  scrollTrigger: {
    trigger: ".image-gallery",
    start: "top center",
    end: "+=4000",
    scrub: true,
  },
});
gsap.to(".col-2", {
  y: 250,
  ease: "none",
  duration: 2,
  scrollTrigger: {
    trigger: ".image-gallery",
    start: "top center",
    end: "+=4000",
    scrub: true,
  },
});
gsap.to(".col-3", {
  y: -250,
  ease: "none",
  duration: 2,
  scrollTrigger: {
    trigger: ".image-gallery",
    start: "top center",
    end: "+=4000",
    scrub: true,
  },
});



gsap.from(".row-2", {
  height: "0%",
  duration: 2,
  delay: 0.5,
  scrollTrigger: {
    trigger: ".sec3",
    start: "40% center",
    toggleActions: "play pause reverse reverse",
    
  },
});

gsap.from(".row li", {
  y: 200,
  opacity: 0,
  ease: "none",
  delay: 0.5,
  duration: 2,
  stagger: {
    amount: 1,
  },
  scrollTrigger: {
    trigger: ".row li",
    toggleActions: "play pause reverse reverse",
  },
});



gsap.to(".num", {
  x: 778,
  duration: 3,
  scrollTrigger: {
    trigger: ".num",
    start: "right left",

  },
});

gsap.to(".sec3", {
  start: top,
  pin:true,
});

//////////////////////////dec1//////////////////////////
var tl = gsap.timeline({
	scrollTrigger: {
		trigger: ".part-2",
		start: "top 90%",
		end: "180% 90%",
		
		scrub: true
	}
});


tl.to(".strip-l", {
	marginLeft: "0%"
}, 'name')
tl.to(".strip-r", {
	marginLeft: "-50%"
}, 'name')


/////////////////////////section3/////////////////////////
let sec3title = document.querySelectorAll('.section3 h1');
let innerSlider = document.querySelector('.slider-inner'); //사진 7개
let images = document.querySelectorAll('.img');
let current = 0; //현재위치
let target = 0; //스크롤탑값
let ease = 0.075;
let imageItems = [];
let stop;

images.forEach((image) => {
	imageItems.push(image) //이미지를 배열안에 다 집어넣음
});

//스크롤 멈출때 값을 점점 줄이는 함수
function lerp(start, end, t) {
	return start * (1 - t) + end * t; //뭔가 천천히 만들때 보통 많이 쓴다
	/* 
	🍋return 100*(1 - 0.075) + 150 * 0.075;
	return 100*0.925 + 150 * 0.075;
	return 92.5 + 11.25;
	return 103.75; 
	🍋return 103.75*(1 - 0.075) + 150 * 0.075;
	return 107.21; 
	return값이 계속 바뀌면서 current값을 다시 준다
	*/
}

function transformElement(el, transform) {
	el.style.transform = transform;
}

/* function animate(){
    target=window.scrollY;
//console.log(target) //scrollY값을 보여줌
    current=lerp(current,target,ease); */ //🍋lerp(100,150,0.75)
// console.log(current)
/* for(let i=0; i<imageItems.length; i++){
        if(current<target - 50 || current>target + 50){
            transformElement(imageItems[i],`scale(0.8)`) //따라올때 스케일을 0.8로 바꾸겠다
        }else{
            transformElement(imageItems[i],`scale(1)`)
        }
    } 
}*/


//원 키우기
gsap.timeline({
		scrollTrigger: {
			trigger: '.section3',
			start: 'top 50%',
			/* 객체의 시작구간, 화면의 시작구간 */
			end: '30% top',
			scrub: 0.5, //숫자 값을 주면 부드러워 진다
			ease: "power1.out",
			duration: 2
		}
	})
	// 무엇을 기준하여 어떤 타이밍에 어떤것을 어떻게 움직일 것이냐
	.fromTo(".circle", {
		width: 0,
		height: 0,
		top: '3%'
	}, {
		width: 2500,
		height: 2500,
		top: '-60%'
	}, 0)
	.fromTo(".slider-main", {
		opacity: 0
	}, {
		opacity: 1
	}, 1.5)


//가로스크롤
gsap.to(innerSlider, {
	xPercent: -95,
	ease: "none",
	delay: 1,
	scrollTrigger: {
		trigger: ".section3",
		start: "top top",
		scrub: 1,
		end: "+=500%",
		pin: true,
		onEnter: function ani() { //진입하면 실행시겨라
			animate()
			requestAnimationFrame(ani) // 계속 실행시킬수 있도록
		},
		onLeaveBack: () => {
			cancelAnimationFrame(stop)
		}
	}
})

gsap.to(sec3title, {

	translateX: "-1300px",
	ease: "none",
	delay: 1,
	scrollTrigger: {
		trigger: ".section3",
		start: "top top",
		scrub: 1,
		end: "+=400%",
		pin: true,
	},
})

/////////////////////////section4/////////////////////////
//card
/* let cardWrapper = document.querySelectorAll(".cards_item");
let cardsEl = document.querySelectorAll(".cards_item .cards_el");
console.log(cardsEl)

cardWrapper.forEach(function (e, i) { //e:아이템, i:아이템의 index
	let card = cardsEl[i]
	let img = e.querySelector(".cards_img img");
	let scale = 1;
	let rotate = 0;

	if (i !== cardsEl.length - 1) {
		scale = 0.9 + 0.025 * 1;
		rotate = -10;
	}

	gsap.to(card, {
		scale: scale,
		rotateX: rotate,
		transfromOrigin: "center top",
		ease: "none",
		scrollTrigger: {
			trigger: e,
			start: "top " + (100 + 40 * i),
			end: "bottom +=500px",
			pin: e,
			endTrigger: ".end-anim", //end값이 이것에 관여한다
			scrub: 1,
			pinSpacing: false
		}
	})

}) */

const contentElements = [...document.querySelectorAll('.content--sticky')];
const totalContentElements = contentElements.length;

const scroll = () => {

    contentElements.forEach((el, position) => {
        
        const isLast = position === totalContentElements-1;

        gsap.timeline({
            scrollTrigger: {
                trigger: el,
                start: 'top 20%',
                end: '+=100%',
                scrub: true
            }
        })
        .set(el, {
            transformOrigin: '100% 0%'
        })
        .to(el, {
            ease: 'none',
            opacity: 0,
            borderRadius: 20,
            yPercent: isLast ? 105 : 5,
            scale: 0.75,
            rotation: -20
        }, 0);

    });

};

   

window.addEventListener("load",() => {
    scroll(); 
});


//dec

  


//////////////////////////dec2//////////////////////////



gsap.registerPlugin(MotionPathPlugin, ScrollTrigger)

let path1 = document.querySelector('.theLine');
let path1Length = path1.getTotalLength();
//console.log(path1Length)

path1.style.strokeDasharray = path1Length; //선을 대쉬로 줬는데 svg의 총 길이를 대쉬1개 길이로 했음(gap도 같은 길이로 비게됨)
path1.style.strokeDashoffset = path1Length; //그리고 그 선을 다른데로 움직임
let pulses = gsap.timeline({
    defaults: { //아래to에 다 들어감
        duration: 0.1,
        autoAlpha: 1,
        scale: 2,
        transformOrigin: "center",
        ease: "elastic.out(1,0.3)",
    }
})
.to(".ball01,.text01", {}, 0.24) //{}안에는  defaults값이 동일하게 들어간다는 의미/ 0.15progress이기때문에 시간이 아니다, 그 지점에서 실행
    .to(".ball02,.text02", {}, 0.45)//동일하지 않은것이 있다면 {}안에 따로 넣어주기
    .to(".ball03,.text03", {}, 0.6)
    .to(".text04", {}, 1)


let main = gsap.timeline({
    defaults: {
        duration: 1
    },
    scrollTrigger: {
        trigger: '#svg',
        start: "top 65%",
        end: "+=1000",
        scrub: 1.5,
        // markers:true,
    },
    onUpdate: animationUpdate,
})
.to(".ball04", {
    duration: 0.01, //defaults값을 덮어씀
    autoAlpha: 1 //autoAlpha: opacity, visivility를 동시에 한꺼번에 조정하는 것
})
.to(path1, {
    strokeDashoffset: 0
},"ball")
.to(".ball04", {
    motionPath: {
        path: ".theLine",//path의 class명 : path연결
        align: ".theLine",//세트
        alignOrigin: [0.5, 0.5],
    }
},"ball")

.add(pulses,0)//timeline을 연결하는 방법, 0은 타임라인의 시작지점

function animationUpdate(){//위치는 위에 있다
    console.log(this.prograss)
}


/////////////////////////section5/////////////////////////

$(document).ready(function(){
	$('.slick').slick({
	  dots : true,
    arrows: true,
	});
 });

 /////////////////////////section7/////////////////////////
/* path */
let path=`M 10 200 Q 600 200 1190 200`;
let finalpath=`M 10 200 Q 600 200 1190 200`;
let svg=document.querySelector(".svgWrap svg");

svg.addEventListener("mousemove",function(e){
    console.log(e.y)
    path=`M 10 200 Q ${e.x - 350} ${e.y} 1190 200`;

    gsap.to('.svgWrap svg path',{
        attr:{d:path},
        duration:0.3,
        ease: "power3.out",

    })

})

svg.addEventListener("mouseleave",function(){
    gsap.to('.svgWrap svg path',{
        attr:{d:finalpath},
        duration:1.5,
        ease: "elastic.out(1,0.2)",

    })
})


 /* skill */
/*  let MAX=100;
 let circleProgressInstances=[];
 document.querySelectorAll(".progress").forEach((progressEle,index)=>{
     let initialvalue=document.querySelectorAll(".value-input")[index].value;
     let classText=document.querySelectorAll(".skill h3")[index].innerHTML; //글자를 가져와서 변수에 담는다
 
     let cp=new CircleProgress(progressEle, {
         max: MAX,
         value: 0,
         animationDuration:1500,
         textFormat: (val)=>val + "%"
         // textFormat: (val)=>val+"%" //val에 받고 val에 넣기
     });
     console.log(cp)
     circleProgressInstances.push(cp);
 
     ScrollTrigger.create({
         trigger:".skill",
         start:"top 70%",
         scrub:1,
         onEnter:()=>{
             cp.value=initialvalue;
             // cp.el.style.setProperty('--progress-value',initialValue/MAX),//property(속성)셋팅, el:
         },
         onLeaveBack:()=>{ //스크롤을 내렸다가 다시 올라가면 무슨일
             cp.value=0;
             // cp.el.style.setProperty('--progress-value',0/MAX)
         }
     })
 
 }) */
 
 /* 사진 */
 var myAnimation = new hoverEffect({
  parent: document.querySelector('.my-div'),
  intensity: 0.3,
  image1: './img/sec7/1.jpg',
  image2: './img/sec7/2.jpg',
  displacementImage: './img/displacement/9.jpg',
  imagesRatio:600/450      //imagesRatio:높이/넓이
});