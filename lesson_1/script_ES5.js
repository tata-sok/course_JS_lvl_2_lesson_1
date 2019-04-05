var goods = [
	{ title: 'Harrar', price: 150 },
	{ title: 'Sidamo', price: 250 },
	{ title: 'Yirgacheffe', price: 350 },
	{ title: 'Kochere', price: 250 },
];

var renderGoodsItem = function(title, price) {
	var goodsBox;
	return goodsBox = '<div class="goods-item"><h3>' + title + '</h3><p>' + price + ' руб.</p><button class="button-buy">Купить</button></div>';
};

var renderGoodsList = function(list) {
	let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
	document.querySelector('.goods-list').innerHTML = goodsList.join('');

};

renderGoodsList(goods);