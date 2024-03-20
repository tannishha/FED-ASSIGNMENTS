const product = [
    {
        id: 0,
        image: 'https://images.puma.net/images/370533/04/w/1000/h/1000/fnd/AUS/',
        title: 'Puma Shoes',
        price: 150,
    },
    {
        id: 1,
        image: 'https://th.bing.com/th/id/OIP.ZutuFTeFW0q-snfX1tnpfAHaHa?rs=1&pid=ImgDetMain',
        title: 'AirPods Pro',
        price: 250,
    },
    {
        id: 2,
        image: 'https://www.bhphotovideo.com/images/images2500x2500/apple_mlck2ll_a_watch_smartwatch_38mm_space_1187206.jpg',
        title: 'Apple Watch',
        price: 450,
    },
    {
        id: 3,
        image: 'https://lp2.hm.com/hmgoepprod?set=quality[79]%2Csource[%2F49%2F7d%2F497da5db1d3000415f5b1ca62e69d09153170867.jpg]%2Corigin[dam]%2Ccategory[]%2Ctype[DESCRIPTIVESTILLLIFE]%2Cres[m]%2Chmver[2]&call=url[file:/product/main]',
        title: 'H&M Oversized Tshirt',
        price: 80,
    }
];
const categories = [...new Set(product.map((item)=>
    {return item}))]
    let i=0;
document.getElementById('root').innerHTML = categories.map((item)=>
{
    var {image, title, price} = item;
    return(
        `<div class='box'>
            <div class='img-box'>
                <img class='images' src=${image}></img>
            </div>
        <div class='bottom'>
        <p>${title}</p>
        <h2>$ ${price}.00</h2>`+
        "<button onclick='addtocart("+(i++)+")'>Add to cart</button>"+
        `</div>
        </div>`
    )
}).join('')

var cart =[];

function addtocart(a){
    cart.push({...categories[a]});
    displaycart();
}
function delElement(a){
    cart.splice(a, 1);
    displaycart();
}

function displaycart(){
    let j = 0, total=0;
    document.getElementById("count").innerHTML=cart.length;
    if(cart.length==0){
        document.getElementById('cartItem').innerHTML = "Your cart is empty";
        document.getElementById("total").innerHTML = "$ "+0+".00";
    }
    else{
        document.getElementById("cartItem").innerHTML = cart.map((items)=>
        {
            var {image, title, price} = items;
            total=total+price;
            document.getElementById("total").innerHTML = "$ "+total+".00";
            return(
                `<div class='cart-item'>
                <div class='row-img'>
                    <img class='rowimg' src=${image}>
                </div>
                <p style='font-size:12px;'>${title}</p>
                <h2 style='font-size: 15px;'>$ ${price}.00</h2>`+
                "<i class='fa-solid fa-trash' onclick='delElement("+ (j++) +")'></i></div>"
            );
        }).join('');
    }

    
}