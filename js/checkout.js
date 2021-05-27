var data = JSON.parse(localStorage.getItem('data'));
var total = localStorage.getItem('total')
var ul = document.getElementsByClassName('order-table')[0]

for(var i =0 ; i<data.length; i++)


{
    console.log(data[i])
    var li = document.createElement("li");
    li.className="fw-normal";
    
    var content = `
    <li class="fw-normal">${data[i].category}-${data[i].name} x ${data[i].quantity} <span>$${parseFloat(data[i].price.replace("$",""))*parseFloat(data[i].quantity)}.00 </span></li>
    `
    li.innerHTML=content
    
    ul.appendChild(li)
}

document.getElementsByClassName("sub-total")[0].innerHTML=total
document.getElementsByClassName("total-price")[0].innerHTML=total
