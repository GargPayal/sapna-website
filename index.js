const counter = document.querySelectorAll('.counter');
counter.forEach((counter) => {
    counter.innerHTML = 0
    const updatecount = () =>{
        const targetcount = +counter.getAttribute('data-target');
        const startingcount = +counter.innerHTML;
        const incre = Math.round(targetcount / 10) ;
        if(startingcount < targetcount){
            counter.innerHTML = `${startingcount + incre}`;
            setTimeout(updatecount,100);
        }else{
            counter.innerHTML = targetcount;
        }
    }
updatecount();
});

const button = document.querySelector('.btn btn-primary');
button.addEventListener('click',()=>{
    window.open(about.html);
})
const buttons = document.querySelector('.btn btn-primary service');
button.addEventListener('click',()=>{
    window.open(service.html);
})

