let input=document.querySelector("#input");
let date=document.querySelector("#date");
let display=document.querySelector(".display");
const item=[
    {
        item:'milk',
        date:'10/10/1010'
    },
    {
        item:'tea',
        date:'10/10/2010'
    }
];
displayItems();




function addItems(){
let inputValue=input.value;
let inputDate=date.value;
item.push({item:inputValue, date:inputDate});
input.value='';
date.value='';
displayItems();
}

function displayItems(){
    let newHtml='';
    for(let i=0;i<item.length;i++){
        let items=item[i].item;
        let dueDate=item[i].date;
        newHtml+=`
        
            <span class="span">${items}</span>
            <span>${dueDate}</span>
            <button class='btn-delete' onclick="item.splice(${i},1);
            displayItems();">Delete</button>
    
       `


    }
    display.innerHTML=newHtml;
}