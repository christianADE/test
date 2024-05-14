const product = [
    {
        id: 0,
        Image: './images/1.jpeg',
        title: 'pc 1',
        price: 120,
    },
    {
        id: 1,
        Image: './images/2.jpeg',
        title: 'pc 2',
        price: 120,
    },
    {
        id: 2,
        Image: './images/3.jpeg',
        title: 'pc 3',
        price: 120,
    }
];

// Extract unique categories
const categories = [...new Set(product.map(item => item.title))];

let i = 0;

document.getElementById('root').innerHTML = categories.map(category => {
    const items = product.filter(item => item.title === category);
    return items.map(item => `
        <div class='box'>
            <div class='img-box'>
                <img class='images' src='${item.Image}' />
            </div>
            <div class='bottom'>
                <p>${item.title}</p>
                <h2>${item.price}.00<button onclick='addtocart(${i++})'>add to cart</button></h2>
            </div>
        </div>
    `).join('');
}).join('');
