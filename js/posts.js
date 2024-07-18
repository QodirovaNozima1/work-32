const API_URL = "https://jsonplaceholder.typicode.com"
const wrapper = document.querySelector(".wrapper")
const loading = document.querySelector(".loading")

async function fetchPosts(api) {
    let reponse = await fetch(`${api}/posts`)
    reponse
          .json()
          .then((res)=> createCard(res))
          .catch((err)=> console.log(err))
          .finally(()=>{
            loading.style.display = "none"
          })
}

fetchPosts(API_URL)


function createCard(data,index) {
    data.slice(0,12).forEach((posts) => {

        let card = document.createElement("div")
        card.classList.add("card")
        card.innerHTML = `
        <div class = "card__img"><i class="fa-brands fa-js fa-beat-fade"></i></div>
        <h3>${posts.title}</h3>
        <p>${posts.body}</p>
        `

        wrapper.appendChild(card)
    })
}




