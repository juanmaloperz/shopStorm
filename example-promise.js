/*function getTempCallBack(location, callback){
 callback(undefined,78);
 callback('city not found');
}

getTempCallBack('Philadelphia',function(err, temp){
if(err){
  console.log('error',err);
}  else { console.log('succes', temp)
}
});

function getTempPromise(location){
  return new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve(79);
      reject('City not found');
    },1000)
  });
}

getTempPromise('Philadelphia').then(function(temp){
console.log('promise succes',temp);
}, function(err){
console.log('City not found',err);
})
*/
 function addPromise(a,b){
return new Promise(function(resolve,reject){
  if(typeof a ==='number' && typeof b =='number'){
    resolve(a+b);
  }  else {
  reject('Those are no numbers');}
});
}

addPromise(5,7).then(function(suma){
  console.log('succes',suma)
},function(err){
  console.log('Both need to be numbers');
} );
