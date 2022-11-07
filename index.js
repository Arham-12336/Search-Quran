var ham=document.querySelector('.ham');
var hiddenSearch=document.querySelector('.hiddenSearch');
// console.log(hiddenSearch)
// console.log(ham)
hiddenSearch.style.display='none';

    ham.addEventListener('click',()=>{
        if(hiddenSearch.style.display==='block'){
            hiddenSearch.style.display='none';
        }
         else if(hiddenSearch.style.display==='none'){
            hiddenSearch.style.display='block'
         }
    });


var hamReference=document.querySelector('.hamReference');
var references=document.querySelector('.references');
console.log(references)
references.style.display='block';


hamReference.addEventListener('click',()=>{
    if(references.style.display==='block'){
references.style.display='none';
    }
     else if(references.style.display==='none'){
        references.style.display='block'
     }
});

