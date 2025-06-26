let samsungs23 = 1250
let samsungs23pl = 2000

function search(id,msg) {
    let el = document.getElementById(id);
    el.textContent=msg;
};

function make_price(price,value){
    if (value  == 1){
        let res = price;
        return "price: " + res
    }
    else {
        let res = price - (price * value /100);
        return 'New price: '+ res
    }
};

let res1 = make_price(samsungs23, 1)
let res2 = make_price(samsungs23pl, 1)

search_id("one", res1)
search_id("two", res2)