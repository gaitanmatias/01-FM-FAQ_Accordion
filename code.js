let questionSections = document.querySelectorAll(".faq__question--container");

function action(e){
    let containerSelected = e.target.closest("div");
    let image = containerSelected.querySelector("img");
    if(containerSelected.classList.contains("open")){
        containerSelected.classList.remove("open");
        image.setAttribute("src", "images/icon-plus.svg");
    }else{
        questionSections.forEach(question => {
            question.classList.remove("open");
            let icon = question.querySelector("img");
            icon.setAttribute("src", "images/icon-plus.svg");
        });
        containerSelected.classList.add("open");
        image.setAttribute("src", "images/icon-minus.svg");
    }
}


questionSections.forEach(function(question) {
    question.addEventListener("click", action);
})