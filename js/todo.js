const todoList = [];

todoADD();


function todoADD(){
  let todoListHtml = '';

  for(let i=0;i<todoList.length;i++){
    const todoObject = todoList[i];
    
    const {name,dueDate} = todoObject;
  
    const htmlel = `

    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="deletebtn" onclick="deleteItem(${i})">&#10005;</button>
    
    `;

    todoListHtml += htmlel;
    
   
  }

  console.log(todoListHtml);

  document.querySelector('.girditems').innerHTML = `${todoListHtml}`;

}

 


function addItem(){
  const textbox = document.querySelector('#inputEL');
  const dateEl = document.querySelector('#dateEL');
  const item = textbox.value;
  const due = dateEl.value;

  todoList.push({
    name : item,
    dueDate : due
  });
  

  textbox.value='';
  dateEl.value='';

  todoADD();


}

function deleteItem(I){
  todoList.splice(I,1);
  todoADD();
}
