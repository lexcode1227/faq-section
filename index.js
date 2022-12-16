const questions = document.querySelectorAll(".question")

questions.forEach((question)=>{
    const btn = question.querySelector(".questionBtn")
    btn.addEventListener("click", ()=>{
        //Agregar función para que al abrir una pregunte se cierren las demas.
        questions.forEach((item) => {
          if (item !== question) {
            item.classList.remove("showText")
          }  
        })

        question.classList.toggle("showText")
    })
})