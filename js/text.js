


    const wrapElements = (elems, wrapType, wrapClass) => {
        elems.forEach(char => {
            const wrapEl = document.createElement(wrapType);
            wrapEl.classList = wrapClass;
            char.parentNode.appendChild(wrapEl);
            wrapEl.appendChild(char);
        });
    }
    
    Splitting();
    
    ////////////////////////////////////////////////////////////
    const fx2Titles2 = [...document.querySelectorAll('.content__title[data-splitting][data-effect2]')];
    const fx23Titles2 = [...document.querySelectorAll('.content__title[data-splitting][data-effect23]')];
    const fx17Titles2 = [...document.querySelectorAll('.content__title[data-splitting][data-effect17]')];
    
    // GSAP Scroll Triggers
    const scroll2 = () => {
        //////////////////////////introduce//////////////////////////
        fx17Titles2.forEach(title => {
        
            const chars = title.querySelectorAll('.char');
            
            chars.forEach(char => gsap.set(char.parentNode, { perspective: 1000 })); 
            
            gsap.fromTo(chars, { 
                'will-change': 'opacity, transform', 
                opacity: 0,
                rotateX: () => gsap.utils.random(-120,120),
                z: () => gsap.utils.random(-200,200),
            }, 
            {
                ease: 'none',
                opacity: 1,
                rotateX: 0,
                z: 0,
                stagger: 0.02,
                scrollTrigger: {
                    trigger: title,
                    start: 'top bottom',
                    end: 'bottom top',
                    // scrub: true,
                }
            });
    
        });

        
        //////////////////////////section1//////////////////////////
   
            fx2Titles2.forEach(title => {
            
                const chars = title.querySelectorAll('.char');
        
                gsap.fromTo(chars, { 
                    'will-change': 'opacity, transform',
                    
                    opacity: 0, 
                    yPercent: 120, 
                    scaleY: 2.3, 
                    scaleX: 0.7, 
                    transformOrigin: '50% 0%',
                }, 
                {  
                    duration: 1,
                    ease: 'back.inOut(2)',
                    opacity: 1,
                    yPercent: 0,
                    scaleY: 1,
                    scaleX: 1,
                    stagger: 0.03,
                    scrollTrigger: {
                        trigger: title,
                        start: 'center bottom+=50%',
                        end: 'bottom top+=40%',
                        // scrub: true
                    }
                });
            });
        
          
    
        
        //////////////////////////section3//////////////////////////
        fx23Titles2.forEach(title => {
        
            const words = [...title.querySelectorAll('.word')];
            
            for (const [wordPosition, word] of words.entries()) {
    
                gsap.fromTo(word.querySelectorAll('.char'), {
                    'will-change': 'transform', 
                    scale: 0.01,
                    x: (pos,_,arr) => {
                        return wordPosition%2 ? pos*50 : (arr.length-pos-1)*-50
                    }
                }, 
                {
                    ease: 'power4',
                    scale: 1,
                    x: 0,
                    scrollTrigger: {
                        trigger: word,
                        start: 'center bottom',
                        end: 'bottom top-=40%',
                        scrub: true,
                    }
                });
                
            }
            
        });
    
    };
    
   /*  window.addEventListener("load",() => {
        scroll2();
    }); */



