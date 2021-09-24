let addToy = false;

let toyArray = [];

document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

  document.querySelector(".add-toy-form").addEventListener("submit", handleSubmit)

  function handleSubmit(e) {
    e.preventDefault()
   //.......
      

    
    console.log(toyArray)
    renderToys(toyArray)
    createToy(toyObj)
    
  }

  


  function renderToys(toyArray) {
          toyArray.forEach(toy => {
            let div = document.createElement("div")
          div.className = "card"
          div.innerHTML = `
          <div>
          <h2>${toy.name}</h2>
          <img src="${toy.image}" class="toy-avatar">
          <p>
            <span class="likes-count">${toy.likes} </span> Likes
          </p>
          <button class="like-btn" id="${toy.id}">Like <3</button>
          </div>
          `
          document.querySelector("#toy-collection").appendChild(div)
        })
        
  }

  function getAllToys() {
    fetch("http://localhost:3000/toys")
    .then(res => res.json())
    .then(function (toyObj) {
      toyArray = [...Object.values(toyObj)]
      console.log(toyArray)
      renderToys(toyArray)
    })
  }

  function createToy(toyArray) {
    fetch("http://localhost:3000/toys", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body:JSON.stringify(toyArray)
    })
    .then(res => res.json())
    .then(toy => console.log(toy))
  }


  

  function initialize() {
    getAllToys()
  }
  initialize()




  

})
  


/*fetch(`https://vignette.wikia.nocookie.net/p__/images/8/88/Jessie_Toy_Story_3.png/revision/latest?cb=20161023024601&path-prefix=protagonist/17`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      },
    })
    .then(res => res.json())
    .then(() => console.log())*/

