function updatePrice(updateId, price){
    const costInput = document.getElementById(updateId);
    costInput.innerText = price;

    const bestPrice = document.getElementById('best-price').innerText;
    const memoryPrice = document.getElementById('memory-cost').innerText;
    const storagePrice = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;
    const totalPrice = parseFloat(bestPrice) + parseFloat(memoryPrice) + parseFloat(storagePrice) + parseFloat(deliveryCost);

    const total = document.getElementById('total-price');
    total.innerText = totalPrice;
}

function onclick(clickId, updateId, price){
    document.getElementById(clickId).addEventListener('click', function(){
        updatePrice(updateId, price);
    });
}
onclick('sixteenGB', 'memory-cost', 300);
onclick('eightGB', 'memory-cost', 0);
onclick('ssd1', 'storage-cost', 0);
onclick('ssd2', 'storage-cost', 200);
onclick('ssd3', 'storage-cost', 300);
onclick('paid-delivery','delivery-cost', 200);

const fakeCode = 'pHero';
document.getElementById('apply-btn').addEventListener('click', function () {
    const promoInput = document.getElementById('promo-input').value;
    if (promoInput === fakeCode) {
        const total = document.getElementById('total-price');
        let totalPrice = parseFloat(total.innerText);
        const discount = (totalPrice*20) / 100;
        totalPrice = totalPrice - discount;
        total.innerText = totalPrice;
    }
});