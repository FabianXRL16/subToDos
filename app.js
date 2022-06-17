// let cont = 41
// let rango = document.getElementById('cont')

// let id = setInterval(function () {
//   cont--
//   if (cont <= 9) {
//     rango.innerHTML = '0' + cont
//   } else {
//     rango.innerHTML = cont
//   }
// }, 500)

// if (cont == 0) {
//   clearInterval(id)
// }


let arrays = [
  {id: 0, task: 'Task 1'},
  {id: 1, task: 'Task 2'},
  {id: 2, task: 'Task 3'}
]

let containerContent = document.querySelector('.container-content')

function showItemGeneral() {
  arrays.map((array, i) => {
    createItem(array.task, i)
  })
}

showItemGeneral()


function createItem(text, pos) {
  let index = pos
  console.log(pos)

  var newItem = document.createElement("li");
  newItem.classList.add('container-item')
  newItem.setAttribute("id",`item${index}`);

  var newItemContainer = document.createElement("div");
  newItemContainer.classList.add('item-list')
  
  var newItemText = document.createElement("span");
  var textMain = document.createTextNode(text);
  
  newItemText.appendChild(textMain)
  
  var btnEdit = document.createElement("button");
  var btnEditText = document.createTextNode('🖊');
  btnEdit.appendChild(btnEditText)  
  btnEdit.classList.add('btn-second')
  
  var btnPlus = document.createElement("button");
  var btnPlusText = document.createTextNode('+');
  btnPlus.appendChild(btnPlusText)  
  btnPlus.classList.add('btn-second')
  btnPlus.addEventListener("click", showDetailsOne)


  // parte oculta
  var newItemContainerHidden = document.createElement("div");
  newItemContainerHidden.classList.add('item-hidden')

  var newItemContainerHiddenHeaderOne = document.createElement("div");
  newItemContainerHiddenHeaderOne.classList.add('item-header')

  var btnAddDetailsOne = document.createElement("button");
  var btnAddDetailsOneText = document.createTextNode('Agregar');
  btnAddDetailsOne.appendChild(btnAddDetailsOneText)  
  btnAddDetailsOne.classList.add('btnAdd')
  btnAddDetailsOne.addEventListener("click", createItemOne(pos))

  var newItemContainerHiddenContainerOne = document.createElement("ul");
  newItemContainerHiddenContainerOne.classList.add('item-container') 

  newItemContainerHiddenHeaderOne.appendChild(btnAddDetailsOne)
  newItemContainerHidden.appendChild(newItemContainerHiddenHeaderOne)  
  newItemContainerHidden.appendChild(newItemContainerHiddenContainerOne)  


  newItemContainer.appendChild(newItemText)
  newItemContainer.appendChild(btnEdit)
  newItemContainer.appendChild(btnPlus)
  newItem.appendChild(newItemContainer)
  newItem.appendChild(newItemContainerHidden)
  containerContent.appendChild(newItem)

  document.getElementById("newTaskText").value = null
}
function addItem() {
  let newTaskText = document.getElementById("newTaskText").value

  if(newTaskText){
    arrays.push({id:arrays.length, task: newTaskText})
    createItem(newTaskText, arrays.length - 1)
  } 

  console.log(arrays)
}

function showItem(item) {
  addItem(item)
  console.log(arrays)
}

function showDetailsOne() {
  console.log('Hola')
}

function showDetailsTwo() {
  console.log('Hola 2')
}

function createItemOne(text = 'sub task', pos) {
  // var newItemContainerHiddenContainerOne = document.querySelector('.newItemContainerHiddenContainerOne')
  //  var newItemContainerHiddenItemOne = document.createElement("div");
  // newItemContainerHiddenItemOne.classList.add('item-list')
  // newItemContainerHiddenItemOne.classList.add('item-list-sub')

  // var newItemTextOne = document.createElement("span");
  // var textOne = document.createTextNode(text);

  // newItemTextOne.appendChild(textOne)

  // newItemContainerHiddenItemOne.appendChild(newItemTextOne)  
  // newItemContainerHiddenContainerOne.appendChild(newItemContainerHiddenItemOne) 
}