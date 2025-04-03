document.addEventListener('DOMContentLoaded', function () {
    const categoryDropdown = document.getElementById('category-dropdown');
    const productList = document.getElementById('product-list');

    // Predefined products for each category
    const products = [
        {
            category: 't-shirts',
            name: 'Real District: Pocket Collection',
            image: 'tshirt_image.jpg',
            price: '$25.00',
            link: 'tshirt-page.html'
        },
        {
            category: 'caps',
            name: 'Real District: Classic Collection',
            image: 'cap_image.jpg',
            price: '$20.00',
            link: 'cap-page.html'
        }
    ];

    // Function to update product list
    function updateProductList(category) {
        productList.innerHTML = ''; // Clear existing products

        // Sort products alphabetically
        const sortedProducts = products.sort((a, b) => a.name.localeCompare(b.name));

        sortedProducts.forEach(product => {
            if (category === 'all' || product.category === category) {
                const productElement = document.createElement('div');
                productElement.classList.add('product');
                productElement.innerHTML = `
                    <img src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.price}</p>
                    <button class="view-product" onclick="location.href='${product.link}'">View Product</button>
                `;
                productList.appendChild(productElement);
            }
        });
    }

    // Initially show all products
    updateProductList('all');

    // Add event listener to category dropdown
    categoryDropdown.addEventListener('change', function () {
        updateProductList(categoryDropdown.value);
    });
});