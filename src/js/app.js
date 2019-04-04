
if('serviceWorker' in navigator){
    navigator.serviceWorker
    .register('./sw.js')
    .then(function(){
        console.log('service worker register');
    }).catch(function(err){
        console.log(err);
    });
}


$(document).ready(function() {
    $('#saveBtn').on('click',function(){
         localStorage.setItem('Name',$('#nameTxtField').val());
        localStorage.setItem('Description',$('#descriptionTxtField').val());
         localStorage.setItem('Price',$('#priceTxtField').val());
         localStorage.setItem('Tax',$('#taxTxtField').val());
        console.log($('#description'));
    });
    //GetElements();
   
});

window.addEventListener('beforeinstallprompt', function(event) {
    event.userChoice.then(function(result) {                      
  
    if(result.outcome == 'dismissed') {                         
      console.log('dismiss');
    }
    else {
      // User accepted
      console.log('accepted');
    }
  });
  });
function GetElements(){
    $('#name').get(0).MaterialTextfield.change(localStorage.getItem('Name'));
    $('#description').get(0).MaterialTextfield.change(localStorage.getItem('Description'));
    $('#tax').get(0).MaterialTextfield.change(localStorage.getItem('Tax'));
    $('#price').get(0).MaterialTextfield.change(localStorage.getItem('Price'));
}

var promise = new Promise(function(resolve,reject){
    setTimeout(function(){
        reject({code:'500',message:'error'});
    },3000);
});
// below function is called when ever resolve or reject is called
// in this we get the value we pass to resolve;
// the idea of promise shines when multiple request chain async 
promise.then(function(text){
    return text;
}).then(function(newText){
    return newText;
}).catch(function(err){
    //it can catch any block when there is a error occur
    console.log(err.code,err.message);
});
    
    
console.log('no timeout start');