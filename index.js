const text = document.querySelector(".sec-text");

    const textLoad = ()=>{
        setTimeout(()=>{
            text.textContent="Software Developer"
        },0)
        setTimeout(()=>{
            text.textContent="FullStack Developer"
        },3900)
        setTimeout(()=>{
            text.textContent="Web Developer"
        },7900)
        setTimeout(()=>{
            text.textContent="Youtuber"
        },11900)

     }
    textLoad();
    setInterval(textLoad,15950)


    const textTitle = document.title;
    const titleLoad = ()=>{
        setTimeout(()=>{
            document.title="Welcome to My Website"
        },0)
        setTimeout(()=>{
            document.title="I'm Atul Rathod"
        },3000)
        setTimeout(()=>{
            document.title="I'm a Software Developer"
        },6000)
        // setTimeout(()=>{
        //     document.title="Youtuber"
        // },9000)

     }
     titleLoad();
     setInterval(titleLoad,9000)

    //  let textT= document.title
    //  window.addEventListener("blur",()=>{
    //     textT=""
    //     document.title="come Back :("
    //  })
    //  window.addEventListener("focus",()=>{
    //     document.title=textT
    //  })
   
