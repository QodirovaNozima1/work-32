const API_URL = "https://jsonplaceholder.typicode.com"
const box = document.querySelector(".box")
const loading = document.querySelector(".loading")

async function fetchPosts(api) {
    let reponse = await fetch(`${api}/users`)
    reponse
          .json()
          .then((res)=> createCard(res))
          .catch((err)=> console.log(err))
          .finally(()=>{
            loading.style.display = "none"
            setTimeout(() => {
                $(".box").slick({
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                   arrows: true,
                   prevArrow: "<button type=\"button\" class=\"arrow\"><</button>",
                   nextArrow: "<button type=\"button\" class=\"arrow\">></button>"
                  });
            }, 100);
        })

}

fetchPosts(API_URL)

const IMAGES = [
    "https://wallpapers.com/images/featured/image-pictures-79gc4p3mqu7an848.jpg",
    "https://blog.nature.org/wp-content/uploads/2020/09/bbb2b19ed049a0bee5388dae788a9462_original-scaled.jpg?w=1024",
    "https://ssec.si.edu/sites/default/files/ThinkstockPhotos-72967326.jpg",
    "https://efirq7mmtwd.exactdn.com/wp-content/uploads/2023/06/sunset-nature-landscape-2232548205.jpg?lossy=1&ssl=1&fit=1082,722",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSSp5dtS8AuZxu9pG9wlmsHuqvSn46ZXIKnA&s",
    "https://www.rhs.org.uk/getmedia/726ef587-1bc0-4b0c-b33d-8478e9f29a4f/Rose-Garden-Wyken.jpg?width=940&height=627&ext=.jpg",
    "https://t4.ftcdn.net/jpg/03/21/60/71/360_F_321607144_e0dnqrWJYkg8HNSfehxTFwFGJpKvalu5.jpg",
    "https://img.traveltriangle.com/blog/wp-content/uploads/2018/11/Rivers-of-the-World-Cover.jpg",
]
function createCard(data,index) {
    data.slice(0,8).forEach((users, index) => {

        let card = document.createElement("div")
        card.classList.add("cards")
        card.innerHTML = `

        <div class = "cards__image"
        <img src = ${IMAGES[index]} alt = "">
        </div>

        <div class = "desc">
        <div class = "circle"></div>
        <h3>${users.name}</h3>
        <p>${users.username}</p>
        <p>${users.email}</p>
        <p>${users.address.suite}</p>
        <p>${users.address.city}</p>
        </div>


        `

        box.appendChild(card)
    })
}
