//get things
var inputText= document.getElementById("input")
var submit = document.getElementById("button")


var toDolistTag=document.getElementById("todolist")

//arr
var todoArr=[]

//event click
submit.addEventListener('click',addItem)
//enter
inputText.addEventListener("keypress",(event)=>{
    if(event.key =="Enter"){
        addItem()
    }

})
function addItem(){
    if(inputText.value!=""){
        todoArr.push(inputText.value)
    }

    inputText.value=""
    console.log("todoArr:",todoArr)

    display();
}

function display(){
    toDolistTag.innerHTML=""
    todoArr.map((curr,i)=>{
        var listItems=`
        <li id="item${i}">
        <div>${curr}</div>
        <div>
          <span onclick="deleteItem(${i})">&times;</span>
          <span>|</span>
          <span onclick="editItem(${i})">Edit</span>
        </div>
      </li>`;

      toDolistTag.innerHTML+=listItems
    });
}
function deleteItem(index){
    todoArr.splice(index,1)
    display();
}
function editItem(index){
    var newValue = prompt("pls Edit")
    todoArr.splice(index,1,newValue)
    display()

}
document.getElementById("RESET").addEventListener("click",()=>{
todoArr=[]
display()
})


 
