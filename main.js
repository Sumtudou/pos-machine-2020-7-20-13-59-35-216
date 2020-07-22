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

    let numMap = calculateGoodsNum(barcodes);

    let goodsList = getGoodsDetailList(numMap); 

    let newGoodList = getSubTotalPrice(goodsList); 

    let totalPrice = getTotalPrice(newGoodList);

    let completeReceipt = formatReceipt(newGoodList, totalPrice);

    console.log(completeReceipt);
}

function formatReceipt(goodsList, totalPrice) {
    var newLine = "\n";
    var receiptHead = `${newLine}***<store earning no money>Receipt ***${newLine}`;
    var receiptBody = "";
    for (var i = 0; i < goodsList.length; i++) {
        receiptBody +=
            `Name: ${goodsList[i].name}, Quantity: ${goodsList[i].quantity},` +
            ` Unit price: ${goodsList[i].price} (yuan), Subtotal: ` +
            `${goodsList[i].subtotal} (yuan)${newLine}`;
    }
    var receiptTotalPrice = `----------------------${newLine}` +
            `Total: ${totalPrice} (yuan)${newLine}**********************`;

    var completeReceipt = receiptHead + receiptBody + receiptTotalPrice;
    return completeReceipt;
}

function getSubTotalPrice(goodsList) {
    for (let i = 0; i < goodsList.length; i++) {
        goodsList[i].subtotal = goodsList[i].price * goodsList[i].quantity;
    }
    return goodsList;
}

function getTotalPrice(goodsList) {
    var totalPrice = 0;
    for (var i = 0; i < goodsList.length; i++) {
        totalPrice += goodsList[i].subtotal;
    }
    return totalPrice;
}

function getGoodsDetailList(goodsAndNum) {
    var goodsDetail = new Array();
    for (var [key, value] of goodsAndNum) {
        for (var i = 0; i < basicData.length; i++) {
            if (basicData[i].barcode === key) { // found goods barcode
                var itemGoodsDetail = {
                    barcode: basicData[i].barcode,
                    name: basicData[i].name,
                    price: basicData[i].price,
                    quantity: value,
                }
                goodsDetail.push(itemGoodsDetail);
            }
        }
    }
    return goodsDetail;
}


function calculateGoodsNum(list) {
    var goodsAndNum = new Map();

    for (var i = 0; i < list.length; i++) {
        if (goodsAndNum.has(list[i])) {
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