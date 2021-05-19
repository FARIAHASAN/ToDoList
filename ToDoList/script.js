//getting all required elements

const inputBox = document.querySelector(".input-field input");
const addbtn = document.querySelector(".input-field button");
const todo = document.querySelector(".todolist");
const pendingNum = document.querySelector(".pendingNumber");
pendingNum.textContent=0;//passing list length
const deleteAll = document.querySelector(".deleteAll");


showTasks();

if(listArr.length>0)
{    
    deleteAll.classList.add("active");
}

inputBox.onkeyup = ()=>
{
    let userData = inputBox.value;// getting user entered value
    if(userData.trim() != 0)
    {
        // if user values aren't only spaces
        addbtn.classList.add("active"); //active the add button

    }
    else{
    addbtn.classList.remove("active"); //unactive the add button
    }
}
addbtn.onclick = ()=>
{   
    //console.log(inputBox.value);
     let userData = inputBox.value; //getting user entered value
    let getLocalStorage = localStorage.getItem("New Todo"); // getting localstorage
    if( getLocalStorage == null )
    {
        //  if localStorage is null
        listArr =[];// creating Blank Array


    }
    else 
    {
       listArr = JSON.parse(getLocalStorage); // pushing or adding user data
       localStorage.setItem("New Todo", JSON.stringify(listArr));// transforming js object into a json string
    }
    listArr.push(userData);
    localStorage.setItem("New Todo",JSON.stringify(listArr));
      
    deleteAll.classList.add("active");

    showTasks();
}  


/* delete task */
function deleteTask(index)
{
    
let getLocalStorage = localStorage.getItem("New Todo");
listArr = JSON.parse(getLocalStorage);
if(listArr.length==1)
{
    listArr =[];
    localStorage.setItem("New Todo",JSON.stringify(listArr));
    let newLiTag ='';
    todo.innerHTML =  newLiTag; 
    inputBox.value='';
    addbtn.classList.remove("active"); 
    pendingNum.textContent=listArr.length;

   
    deleteAll.classList.remove("active");

}
else{
listArr.splice(index,1);
localStorage.setItem("New Todo",JSON.stringify(listArr));
showTasks();
}
}

/* function to add task */
    function showTasks()
{
    let getLocalStorage = localStorage.getItem("New Todo"); // getting localstorage
    //console.log(getLocalStorage);
    if(getLocalStorage == null )
    {
        //  if localStorage is null
        listArr =[];// creating Blank Array


    }
    else 
    {
       listArr = JSON.parse(getLocalStorage); // pushing or adding user data

    }

    let newLiTag = '';
    listArr.forEach((element,index) => {

    newLiTag += '<li>'+element+'<span onclick = deleteTask('+index+'); > <i class=" fas fa-trash"> </i></span> </li> ';
    todo.innerHTML =  newLiTag; // adding new li tag inside ul tag
    inputBox.value='';
    addbtn.classList.remove("active"); 

   
    });
    pendingNum.textContent=listArr.length;//passing list length

}


/* delete all functionality */


deleteAll.onclick = () =>
{
    listArr =[];
    localStorage.setItem("New Todo",JSON.stringify(listArr));
    let newLiTag ='';
    todo.innerHTML =  newLiTag; 
    inputBox.value='';
    addbtn.classList.remove("active"); 
    pendingNum.textContent=listArr.length;
     
    deleteAll.classList.remove("active");

}