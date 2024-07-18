
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
        card.classList.add("card")
        console.log(card);
        card.innerHTML = `

        <p>${products.description}</p>
        <p>${products.category}</p>
        
        `

        content.appendChild(card)
    })
}


