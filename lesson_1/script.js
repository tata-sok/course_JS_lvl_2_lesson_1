const goods = [
	{ title: 'Harrar', price: 150 },
	{ title: 'Sidamo', price: 250 },
	{ title: 'Yirgacheffe', price: 350 },
	{ title: 'Kochere', price: 250 },
];

const renderGoodsItem = (title, price) => {
	return `<div class="goods-item"><h3>${title}</h3><p>${price} руб.</p><button class="button-buy">Купить</button></div>`;
};

const renderGoodsList = (list) => {
	let goodsList = list.map(item => renderGoodsItem(item.title, item.price));
	document.querySelector('.goods-list').innerHTML = goodsList.join('');

}

renderGoodsList(goods);