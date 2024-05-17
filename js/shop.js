document.addEventListener('DOMContentLoaded', function() {
    let productsData = [
        {
            "title": "Adidas Hoodie",
            "description": "Stay comfortable and stylish with the Adidas hoodie. Made with soft, breathable fabric.",
            "category": "Shirt",
            "brand": "Adidas",
            "size": "M",
            "image": "images/products/Adidas Hoodie.jpg"
        },
        {
            "title": "Adidas Originals",
            "description": "Adidas Originals is the iconic heritage line of the globally renowned sportswear brand, Adidas.",
            "category": "Shoes",
            "brand": "Adidas",
            "size": "L",
            "image": "images/products/Adidas Original.jpg"
        },
        {
            "title": "Adidas Pants",
            "description": "Experience comfort and style with these Adidas pants. Crafted with high-quality materials, they offer a perfect blend of durability and flexibility.",
            "category": "Pants",
            "brand": "Adidas",
            "size": "L",
            "image": "images/products/Adidas Pants.jpg"
        }, 
        {
            "title": "Adidas Shirt",
            "description": "Experience the perfect blend of style and comfort with this Adidas shirt",
            "category": "Shirt",
            "brand": "Adidas",
            "size": "S",
            "image": "images/products/Adidas Shirt.jpg"
        }, 
        {
            "title": "Adidas Sneaker",
            "description": "This sleek sneaker features a breathable mesh upper for optimal comfort and a lightweight feel.",
            "category": "Shoes",
            "brand": "Adidas",
            "size": "M",
            "image": "images/products/Adidas Sneaker.jpg"
        },
        {
            "title": "Nike Dunk",
            "description": "The Nike Dunk is an iconic sneaker that blends sport and style effortlessly.",
            "category": "Shoes",
            "brand": "Nike",
            "size": "XL",
            "image": "images/products/Nike Dunk.jpg"
        }, 
        {
            "title": "Nike Hoodie",
            "description": "Experience comfort and style with the Nike hoodie. Crafted with soft, breathable fabric, this hoodie offers a cozy feel for all-day wear.",
            "category": "Shirt",
            "brand": "Nike",
            "size": "M",
            "image": "images/products/Nike Hoodie.jpg"
        }, 
        {
            "title": "Nike Pants",
            "description": "Experience unparalleled comfort and style with Nike pants.",
            "category": "Pants",
            "brand": "Nike",
            "size": "S",
            "image": "images/products/Nike Pants.jpg"
        }, 
        {
            "title": "Nike Shirt",
            "description": "embrace the athletic spirit with this Nike shirt, designed for the modern athlete.",
            "category": "Shirt",
            "brand": "Nike",
            "size": "L",
            "image": "images/products/Nike Shirt.jpg"
        }, 
        {
            "title": "Nike Sneaker",
            "description": "ntroducing the Nike Air Zoom Pegasus: a fusion of style and performance.",
            "category": "Shoes",
            "brand": "Nike",
            "size": "M",
            "image": "images/products/Nike Sneaker.jpg"
        }, 
        {
            "title": "Under Armour Hoodie",
            "description": "Stay comfortable and stylish with this Under Armour hoodie.",
            "category": "Shirt",
            "brand": "Under Armour",
            "size": "XL",
            "image": "images/products/Under Armour hoodie.jpg"
        }, 
        {
            "title": "Under Armour Shirt",
            "description": "Introducing the Under Armour Performance Tee, engineered for the modern athlete.",
            "category": "Shirt",
            "brand": "Under Armour",
            "size": "XXL",
            "image": "images/products/Under Armour shirt.jpg"
        }, 
        {
            "title": "Adidas Shorts",
            "description": "Step up your game in these Adidas shorts.",
            "category": "Pants",
            "brand": "Adidas",
            "size": "XXL",
            "image": "images/products/Adidas Shorts.jpg"
        }, 
        {
            "title": "Under Armour White Shoes",
            "description": "Under Armour shoes are engineered to deliver peak performance, blending cutting-edge technology with sleek design",
            "category": "Shoes",
            "brand": "Under Armour",
            "size": "L",
            "image": "images/products/Under Armour Shoes 2.jpg"
        }, 
        {
            "title": "Under Armour Shoes",
            "description": "Introducing the epitome of performance and style: Under Armour shoes.",
            "category": "Shoes",
            "brand": "Under Armour",
            "size": "Size 2",
            "image": "images/products/Under Armour Shoes.jpg"
        }
    ];
   

    const productsContainer = document.querySelector('.products-container');
    function displayProducts(products) {
        productsContainer.innerHTML = '';

        products.forEach((product, index) => {
            const productCard = `
            <div class="product-card" data-index="${index}">
                <img src="${product.image}" alt="${product.title}" class="product-image">
                <h3 class="product-title">${product.title}</h3>
                <p class="product-description">${product.description}</p>
                <p class="product-category">Category: ${product.category}</p>
                <p class="product-brand">Brand: ${product.brand}</p>
                <p class="product-size">Size: ${product.size}</p>
                <span class="delete-icon">x</span>
            </div>
        `;
        
            productsContainer.innerHTML += productCard;
        });
    }
    displayProducts(productsData);

    document.getElementById('category-filter').addEventListener('change', function() {
        const selectedCategory = this.value;

        let filteredData = productsData;
        
        if (selectedCategory !== 'all') {
            filteredData = productsData.filter(product => product.category === selectedCategory);
        }

        displayProducts(filteredData);
    });

    document.getElementById('brand-filter').addEventListener('change', function() {
        const selectedBrand = this.value;

        let filteredData = productsData;

        if (selectedBrand !== 'all') {
            filteredData = productsData.filter(product => product.brand === selectedBrand);
        }

        displayProducts(filteredData);
    });

    document.querySelector('.search-form input[type="text"]').addEventListener('input', function() {
        const keyword = this.value.toLowerCase();

        let filteredData = productsData;

        if (keyword) {
            filteredData = productsData.filter(product => 
                product.title.toLowerCase().includes(keyword)
            );
        }

        displayProducts(filteredData);
    });


    productsContainer.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-icon')) {
            const index = parseInt(event.target.parentNode.getAttribute('data-index'), 10);
            productsData.splice(index, 1);
            displayProducts(productsData);
        } else {
            console.log('Clicked element:', event.target);
        }
    });
    const productImageSelect = document.getElementById('product-image');

    async function fetchImages() {
        try {
            const response = await fetch('images/add/');
            const data = await response.json(); 
            data.forEach(filename => {
                const option = document.createElement('option');
                option.value = filename;
                option.textContent = filename;
                productImageSelect.appendChild(option);
            });
        } catch (error) {
            console.error('Error fetching images:', error);
        }
    }
    document.getElementById('add-product-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        const title = document.getElementById('product-title').value;
        const description = document.getElementById('product-description').value;
        const category = document.getElementById('product-category').value;
        const brand = document.getElementById('product-brand').value;
        const size = document.getElementById('product-size').value;
        const imageInput = document.getElementById('product-image');
        if (imageInput.files.length > 0) {
            const selectedImage = imageInput.files[0]; 
            const imageUrl = URL.createObjectURL(selectedImage);
            const newProduct = {
                title: title,
                description: description,
                category: category,
                brand: brand,
                size: size,
                image: imageUrl
            }
            productsData.push(newProduct);
            displayProducts(productsData);

            this.reset();
        } else {
            alert("Please select an image for the product.");
        }
    });
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); 
        const formData = new FormData(this);

        const message = `
            <p><strong>Name:</strong> ${formData.get('name')}</p>
            <p><strong>Email:</strong> ${formData.get('email')}</p>
            <p><strong>Message:</strong><br>${formData.get('message')}</p>
        `;
        document.getElementById('message-container').innerHTML = message;
        this.reset();
    });
});

