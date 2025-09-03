import { useState } from "react";
import ToDoItemsList from "./ToDoItemsList";

function ToDoItems(){
    const [name, setName]= useState("");
        const [listOfItems, setItem]= useState([]);

        function  handleClick(){
            if(name!=""){
                setItem([...listOfItems, name])
            setName("");
            }

            else{
                alert(" Empty list can't be added ")
            }
            
        }


        function handleDelete(index) {
            const tempData = [...listOfItems];
            tempData.splice(index, 1);
            setItem(tempData); // Update state
            console.log("clicked")
        }

        function handleEdit(index){
             setName(listOfItems[index]);
             handleDelete(index);
            console.log("edit clicked")
        }

        // console.log(name);
        // console.log(listOfItems);


    return (
        <>
          <input
            type="text"
            placeholder="Enter Your To-Do"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button onClick={handleClick}> + </button>
    
          <ul>
            {listOfItems.map((item, index) => (
              <ToDoItemsList
                key={index}
                itemList={item}
                handleDelete={() => handleDelete(index)}
                handleEdit={()=>handleEdit(index)}
              />
            ))}
          </ul>
        </>
      );

}

export default ToDoItems