var basicData = [{
        barcode: 'ITEM000000',
        name: 'Coca-Cola',
        price: 3
    },
    {
        barcode: 'ITEM000001',
        name: 'Sprite',
        price: 3
    },
    {
        barcode: 'ITEM000002',
        name: 'Apple',
        price: 5
    },
    {
        barcode: 'ITEM000003',
        name: 'Litchi',
        price: 15
    },
    {
        barcode: 'ITEM000004',
        name: 'Battery',
        price: 2
    },
    {
        barcode: 'ITEM000005',
        name: 'Instant Noodles',
        price: 4
    }
];


function printReceipt(barcodes) { 

    var numMap = countGoodsNum(barcodes);
    //console.log(numMap);

    var goodsList = findGoods(numMap);
    //console.log(goodsList);
    var eachPrice = getEachGoodsPrice(goodsList);
    
    var totalPrice = getTotalPrice(goodsList);
    //console.log(totalPrice);
    var theReceipt = formatReceipt(goodsList, totalPrice);
    console.log(theReceipt);
}

function formatReceipt(goodsList, totalPrice) {
    var strFirst = "\n***<store earning no money>Receipt ***\n";
    var strSecond = "";
    for (var i = 0; i < goodsList.length; i++) {
        strSecond +=
            `Name: ${goodsList[i].name}, Quantity: ${goodsList[i].quantity},` +
            ` Unit price: ${goodsList[i].price} (yuan), Subtotal: ${goodsList[i].subtotal} (yuan)\n`;
    }
    var strThree = `----------------------\nTotal: ${totalPrice} (yuan)\n**********************`;

    var lastRes = strFirst + strSecond + strThree;

    return lastRes;
    //console.log(lastRes);
}

function getEachGoodsPrice(goodsList) {
    return goodsList;
}

function getTotalPrice(goodsList) {
    var totalPrice = 0;
    for (var i = 0; i < goodsList.length; i++) {
        totalPrice += goodsList[i].subtotal
    }
    return totalPrice;
}

function findGoods(goodsAndNum) {
    var goodsDetail = new Array();
    for (var [key, value] of goodsAndNum) {

        for (var i = 0; i < basicData.length; i++) {
            if (basicData[i].barcode === key) { // 找到了对应的商品
                var jsonObj = {
                    barcode: basicData[i].barcode,
                    name: basicData[i].name,
                    price: basicData[i].price,
                    quantity: value,
                    subtotal: basicData[i].price * value
                }
                goodsDetail.push(jsonObj);
            }
        }
    }
    return goodsDetail;
}


function countGoodsNum(list) {
    var goodsAndNum = new Map();

    for (var i = 0; i < list.length; i++) {
        if (goodsAndNum.has(list[i])) { //有了这个
            var num = goodsAndNum.get(list[i]);
            goodsAndNum.set(list[i], num + 1);
        } else {
            goodsAndNum.set(list[i], 1);
        }
    }
    return goodsAndNum;
}


module.exports = {
    printReceipt
};