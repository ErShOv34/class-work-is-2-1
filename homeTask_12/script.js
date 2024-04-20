document.addEventListener("DOMContentLoaded", () => {
    const addProductBtn = document.querySelector("#addProductBtn");
    const addCategoryBtn = document.querySelector("#addCategoryBtn");
    const addManufacturerBtn = document.querySelector("#addManufacturerBtn");
    const productModal = document.querySelector("#productModal");
    const categoryModal = document.querySelector("#categoryModal");
    const manufacturerModal = document.querySelector("#manufacturerModal");
    const closeBtns = document.querySelectorAll(".close");
    const addProduct = document.querySelector("#addProduct");
    const addCategory = document.querySelector("#addCategory");
    const addManufacturer = document.querySelector("#addManufacturer");
    const productNameInput = document.querySelector("#productName");
    const categoryNameInput = document.querySelector("#categoryName");
    const manufacturerNameInput = document.querySelector("#manufacturerName");
    const manufacturerAddressInput = document.querySelector("#manufacturerAddress");
    const manufacturerPhoneInput = document.querySelector("#manufacturerPhone");
    const categorySelect = document.querySelector("#categorySelect");
    const manufacturerSelect = document.querySelector("#manufacturerSelect");
    const productList = document.querySelector("#productList");
    const categoryList = document.querySelector("#categoryList");
    const manufacturerInfo = document.querySelector("#manufacturerInfo");
    
    const openModal = modal => {
    modal.style.display = "block";
    };
    
    const closeModal = modal => {
    modal.style.display = "none";
    };
    
    addProductBtn.addEventListener("click", () => openModal(productModal));
    addCategoryBtn.addEventListener("click", () => openModal(categoryModal));
    addManufacturerBtn.addEventListener("click", () => openModal(manufacturerModal));
    
    closeBtns.forEach(btn => {
    btn.addEventListener("click", () => closeModal(btn.parentNode.parentNode));
    });
    
    addProduct.addEventListener("click", () => {
    const productName = productNameInput.value;
    const categoryValue = categorySelect.value;
    const manufacturerValue = manufacturerSelect.value;
    
    if (productName && categoryValue && manufacturerValue) {
    const productItem = document.createElement("li");
    productItem.textContent = `${productName} (${categoryValue}) - ${manufacturerValue}`;
    productList.appendChild(productItem);
    productNameInput.value = "";
    closeModal(productModal);
    } else {
    alert("Пожалуйста, введите название продукта, выберите категорию и производителя.");
    }
    });
    
    addCategory.addEventListener("click", () => {
    const categoryName = categoryNameInput.value;
    
    if (categoryName) {
    const categoryItem = document.createElement("li");
    categoryItem.textContent = categoryName;
    categoryList.appendChild(categoryItem);
    
    const option = document.createElement("option");
    option.text = categoryName;
    option.value = categoryName;
    categorySelect.add(option);
    
    categoryNameInput.value = "";
    closeModal(categoryModal);
    } else {
    alert("Пожалуйста, введите название категории.");
    }
    });
    
    addManufacturer.addEventListener("click", () => {
    const manufacturerName = manufacturerNameInput.value;
    const manufacturerAddress = manufacturerAddressInput.value;
    const manufacturerPhone = manufacturerPhoneInput.value;
    
    if (manufacturerName && manufacturerAddress && manufacturerPhone) {
    const manufacturerInfoItem = document.createElement("div");
    manufacturerInfoItem.textContent = `Производитель: ${manufacturerName}, Адрес: ${manufacturerAddress}, Телефон: ${manufacturerPhone}`;
    manufacturerInfo.appendChild(manufacturerInfoItem);
    
    const option = document.createElement("option");
    option.text = manufacturerName;
    option.value = manufacturerName;
    manufacturerSelect.add(option);
    
    manufacturerNameInput.value = "";
    manufacturerAddressInput.value = "";
    manufacturerPhoneInput.value = "";
    closeModal(manufacturerModal);
    } else {
    alert("Пожалуйста, введите данные о производителе.");
    }
    });
    });