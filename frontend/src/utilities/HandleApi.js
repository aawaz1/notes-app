import axios from 'axios'


const baseURL = "http://localhost:5000"

const getAllToDo = (setTodo) => {
    axios
    .get(baseURL)
    .then(({data}) => {
        console.log("data--->" , data)
        setTodo(data)
    })
    }
    // const addToDo = (text, setText, setTodo) => {
    //     axios
    //       .post(`${baseURL}/save`, { text })
    //       .then((response) => {
    //         // Assuming the response data has an '_id' property
    //         const { _id } = response.data;
      
    //         // Update the 'text' state with the '_id'
    //         setText(_id);
      
    //         // Refresh the list of ToDo items
    //         getAllToDo(setTodo);
    //       })
    //       .catch((err) => {
    //         console.error(err);
    //       });
    //   };
    const addToDo = (text, setText, setTodo) =>{
        axios
        .post(`${baseURL}/save`, {text})
        .then((data) => {
            console.log(data)
            setText(data)
            getAllToDo(setTodo)

        })
        .catch((err) => {
            console.log(err)
            console.log(err)
        })

    }
    const updateToDo = (toDoId,text,setTodo,setText, setIsUpdating) =>{
        axios
        .post(`${baseURL}/update`, {_id:toDoId ,text})
        .then((data) => {
            setText("")
            setIsUpdating(false)
            getAllToDo(setTodo)

        })
        .catch((err) => {
            console.log(err)
        })

    }

    const deleteToDo = (_id ,setTodo) =>{
        axios
        .post(`${baseURL}/delete`, {_id})
        .then((data) => {
            console.log(data)
            getAllToDo(setTodo)

        })
        .catch((err) => {
            console.log(err)
        })

    }
export  {getAllToDo , addToDo,  updateToDo , deleteToDo}