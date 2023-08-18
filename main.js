let wt = document.getElementById('width');
let ht = document.getElementById('height');
let bf = document.getElementById('beef');
let frm = document.getElementById('form');
let res = document.getElementById('result');

frm.addEventListener('submit',calculate);


function calculate(e){
 e.preventDefault();
 var rslt = wt.value * wt.value * ht.value / 660;
   res.innerHTML = `সম্ভাব্য ওজন ${rslt.toFixed(1)} কেজি`;
   bf.addEventListener('click',function(){
        res.innerHTML = `সম্ভাব্য মাংসের ওজন ${(rslt/100 * 60).toFixed(1)} কেজি থেকে ${(rslt / 100 * 65).toFixed(1)} কেজি'র মধ্যে!`;
   })
}