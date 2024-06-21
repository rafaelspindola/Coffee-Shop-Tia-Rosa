const products = {
    cafes: [
        { name: "Expresso", description: "Um café forte e encorpado.", price: "R$3,00", image: "/images/cafe-espresso.jpg" },
        { name: "Latte", description: "Café com leite cremoso.", price: "R$4,00", image: "/images/Cafe Latte.jpeg" }
    ],
    cookies: [
        { name: "Cookie de Chocolate", description: "Delicioso cookie com pedaços de chocolate.", price: "R$2,50", image: "/images/cookies-chocolate.jpg" },
        { name: "Cookie de Aveia", description: "Um cookie saudável de aveia.", price: "R$3,00", image: "/images/cookie-de-banana-com-aveia-e-chocolate_l_thumb.jpg" }
    ],
    bolos: [
        { name: "Bolo de Cenoura", description: "Um bolo clássico com cobertura de chocolate.", price: "R$4,00", image: "/images/Cenoura.png" },
        { name: "Bolo de Fubá", description: "Um bolo tradicional com um toque de erva-doce.", price: "R$4,50", image: "/images/bolo-fuba.jpeg" }
    ]
};

function showHome() {
    document.getElementById("home").style.display = "block";
    document.getElementById("products").style.display = "none";
    document.getElementById("product-info").style.display = "none";
    document.getElementById("about-us").style.display = "none";

    const homeProductsContainer = document.getElementById("home-products");
    homeProductsContainer.innerHTML = '';

    Object.keys(products).forEach(type => {
        products[type].forEach(product => {
            const productDiv = document.createElement("div");
            productDiv.className = "product";
            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Price: ${product.price}</p>
                <button onclick="showProductInfo('${type}', '${product.name}')">More Information</button>
            `;
            homeProductsContainer.appendChild(productDiv);
        });
    });
}

function showProducts(type) {
    const productContainer = document.getElementById("products");
    productContainer.innerHTML = '';
    products[type].forEach(product => {
        const productDiv = document.createElement("div");
        productDiv.className = "product";
        productDiv.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>Price: ${product.price}</p>
            <button onclick="showProductInfo('${type}', '${product.name}')">More Information</button>
        `;
        productContainer.appendChild(productDiv);
    });
    document.getElementById("home").style.display = "none";
    productContainer.style.display = "flex";
    document.getElementById("product-info").style.display = "none";
    document.getElementById("about-us").style.display = "none";
}

function showProductInfo(type, name) {
    const product = products[type].find(p => p.name === name);
    const productInfo = document.getElementById("product-info");
    productInfo.innerHTML = `
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <p>Price: ${product.price}</p>
        <img src="${product.image}" alt="${product.name}">
    `;
    document.getElementById("home").style.display = "none";
    document.getElementById("products").style.display = "none";
    productInfo.style.display = "block";
    document.getElementById("about-us").style.display = "none";
}

function showAboutUs() {
    document.getElementById("home").style.display = "none";
    document.getElementById("products").style.display = "none";
    document.getElementById("product-info").style.display = "none";
    document.getElementById("about-us").style.display = "block";
}

// Initialize the home page
showHome();
