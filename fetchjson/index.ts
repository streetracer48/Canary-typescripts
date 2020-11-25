import axios from "axios"


const url ='https://jsonplaceholder.typicode.com/todos/1'

interface Todo {
    userId:number;
    id: number;
    title: string;
    completed: boolean;
}

axios.get(url).then(response =>{
    const todo = response.data as Todo

   const {id, userId, title,completed} = todo 

    console.log(`The todo with TD:${id}
    Has a title of:${title}
    Is it finished ? ${completed}
    `)
})
