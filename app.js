const form=document.querySelector('.quiz-form');
const result=document.querySelector('.result');
const correctArray=['B','A','C','B'];

form.addEventListener('submit',e=>{
e.preventDefault();
let score=0;
const userAnswer=[form.q1.value,form.q2.value,form.q3.value,form.q4.value];

userAnswer.forEach((answer,index)=>{
    if(answer===correctArray[index]){
    score+=25;
    }
});
//window object
// scrollTo(0,0);
//(or)

window.scrollTo(0,0);
result.classList.remove('d-none');
let output=0;
let final=setInterval(()=>{
    result.querySelector('span').textContent=`${output}%`;
    if(output===score){
        clearInterval();
    }
    else{
        output++;
    }
},10);
});



