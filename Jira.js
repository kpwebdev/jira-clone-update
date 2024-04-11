let addcard = document.querySelector('#addcard');
let todo = document.querySelector('#todo')

addcard.addEventListener('click', addTask);

// Drag Function Start
let count = 1000000
function addTask() {
    console.log("Clicked")
    let card = document.createElement('div');
    card.id= `card-${count++}`
    card.className = "card";
    card.innerHTML = "Add Task"
    card.setAttribute("contenteditable", true);
    card.setAttribute("draggable", true)
    todo.append(card);
    card.focus();


    card.addEventListener("dragstart", (eventDetails) => {
        let draggedCard = eventDetails.target;
        eventDetails.dataTransfer.setData("text/plain", draggedCard.id)
        draggedCard.style.opacity = 0.5;
    })

    card.addEventListener("dragend", (eventDetails) => {
        let draggedCard = eventDetails.target;
        draggedCard.style.opacity = 1;
    })


    // Drop, Dragover, Dragenter by Loop

    let dragEvents = ["dragover", "dragenter", "drop"];

    dragEvents.forEach((dropEvent) => {
        let columns = document.querySelectorAll('.column');
        for (let c of columns) {
            c.addEventListener(dropEvent, (eventDetails) => {
                eventDetails.preventDefault();

                if (dropEvent == "drop") {
                    let cardId = eventDetails.dataTransfer.getData("text/plain")
                    let draggedCard = document.querySelector(`#${cardId}`)
                    let currentColumn = eventDetails.target;
                    currentColumn.append(draggedCard);

                }
            })

        }
    }) 

}


    // // SELECTOR -->

    // card.addEventListener("blur", blurFunction);

    // function blurFunction(eventDetails) {
    //     let blurredCard = eventDetails.target;
    //     if (blurredCard.innerHTML.trim() == "") {
    //         blurredCard.remove();
    //     }
    // }

    // card.addEventListener("click", emptyText);

    // function emptyText(eventDetails) {
    //     let clickedCard = eventDetails.target;
    //     if (clickedCard.innerText == "Add Task") {
    //         clickedCard.innerText = "";
    //     }
    // }


    // let selector = document.createElement("select");
    // selector.innerHTML =
    //     `   <option value="todo">ToDo</option>
    //     <option value="progress">Progress</option>
    //     <option value="done">Done</option>         
    // `
    // card.append(selector);

    // let selectedId = {
    //     todo: "todo",
    //     progress: "progress",
    //     done: "done"
    // }

    // selector.addEventListener("change", (eventDetails) => {
    //     console.log(eventDetails.target.value);
    //     console.log("column moved-", selectedId[eventDetails.target.value]);
    //     let columnId = selectedId[eventDetails.target.value];
    //     let selectedContainer = document.querySelector(`#${columnId}`)
    //     console.log(selectedContainer);
    //     selectedContainer.append(card);
    // })




