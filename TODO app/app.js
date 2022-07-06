const addList = document.querySelector(".addList");

const lists = document.querySelector("ul");

const search = document.querySelector(".search input");

const generate = list => {
    const html = 
    `
    <li>
                <span>${list}</span>
                <i class="far fa-trash-alt delete"></i>
    </li>

    `;
    lists.innerHTML+=html;
}


addList.addEventListener("submit",e => {

    e.preventDefault();
    const list = addList.add.value.trim();

    if(list.length > 0){

        generate(list);
        addList.reset();
    }

})

lists.addEventListener("click" , e => {

    if(e.target.classList.contains("delete")){

        e.target.parentElement.remove();
    }
})

const filterTodos = term => {

    Array.from(lists.children)
    .filter(todo => !todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.add("filtered"));

    Array.from(lists.children)
    .filter(todo => todo.textContent.toLowerCase().includes(term))
    .forEach(todo => todo.classList.remove("filtered"));
}

search.addEventListener('keyup', ()=> {
    const term=search.value.trim().toLowerCase();

    filterTodos(term);
})
