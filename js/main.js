
const API_URL = "https://dummyjson.com/products"
const content = document.querySelector(".content")
const loading = document.querySelector(".loading")

async function fetchPosts(api) {
    let reponse = await fetch(`${api}`)
    reponse
          .json()
          .then((res)=> createCard(res))
          .catch((err)=> console.log(err))
          .finally(()=>{
            loading.style.display = "none"
          })
}

fetchPosts(API_URL)


function createCard(data) {
    data.products.forEach((products) => {

        let card = document.createElement("div")
        card.classList.add("basket")
        console.log(card);
        card.innerHTML = `
        <div class = "product__photo">
        
        <img src="${products.thumbnail}" alt=""><i class="fa-regular fa-heart"></i>
        </div>
        <div class="info">


        <p>${products.title}</p>
        <p ><i class="fa-solid fa-star"></i> ${products.discountPercentage}</p>
        <p class = "product__desc">$${products.price}</p>
        <p >${products.brand}</p>
        <p>${products.sku}</p>
        <div class="comment">
        <del>${products.warrantyInformation}</del>
             <p>${products.shippingInformation}</p>
        </div>
        </div>
        
        `

        content.appendChild(card)
    })
}


