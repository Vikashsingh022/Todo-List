let inputField = document.querySelector("#input");
    let list = document.querySelector("#ullist");
    inputField.addEventListener("keydown", function (event) {
        // console.log("input field event called");
        // console.log(event.key);

        // console.log(inputField.value);


        if (event.key == "Enter" && inputField.value != '') {
            let newitem = document.createElement("li")

            newitem.innerHTML = inputField.value + '<span class="material-symbols-outlined">delete</span>';

            let deleteIcon = newitem.querySelector("span")
            deleteIcon.addEventListener("dblclick", function () {
                newitem.remove();
            })
            list.appendChild(newitem);
            inputField.value = "";
        }
    })