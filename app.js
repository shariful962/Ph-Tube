
// fetch and load category header bottom from api 
function loadCategory(){
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then(res=>res.json())
    .then(data=>displayCategory(data.categories))
}

function displayCategory(categories){
    const categoryContainer = document.getElementById("category-container")

    for(let cat of categories){
       const categoryDiv = document.createElement('div')
       categoryDiv.innerHTML = `<button class='btn bg-textClr2/20 text-textClr2/70'>${cat.category}</button>`
       categoryContainer.appendChild(categoryDiv)
    }
}
loadCategory()
