let product = {
    name: "PC",
    price: 99999,
    inStock: true,
    brand: "HYPERPC",
    specifications: {
        video_card: "RTX 3060",
        processor: "Intel Core i5-12400f",
        RAM: "16 GB RAM",
        memory: "XPG SX8200 Pro, SSD M2 1 tb"
    },
    discount: {
        percentage: 13,
        expirationDate: "2024-02-13"
    }
};

let customer = {
    name: "stas",
    budget: 100000
};

if (customer.budget < product.price) {
    console.log(`У ${customer.name} недостаточно средств для покупки товара PC.`);
} else {
    console.log(`Покупатель ${customer.name} может купить товар ${product.name}.`);
    
    console.log(`Технические характеристики товара: видеокарта - ${product.specifications.video_card}; 
    процессор - ${product.specifications.processor}; 
    оперативная память - ${product.specifications.RAM};
    память - ${product.specifications.memory}.`);
    
    if (product.discount) {
        let discountedPrice = product.price * (1 - product.discount.percentage / 100);
        console.log(`Скидка ${product.discount.percentage}% действует до ${product.discount.expirationDate}.`);
        console.log(`Цена со скидкой: ${discountedPrice}`);
    } else {
        console.log("На этот товар скидка не распространяется");
    }
}