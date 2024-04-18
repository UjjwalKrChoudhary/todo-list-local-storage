import React, { useState } from 'react'
import { useTodo } from '../contexts';
import { useAuth0 } from "@auth0/auth0-react";



function TodoForm() {
    const [todo,setTodo] = useState("")
    const {addTodo}= useTodo()
    const { loginWithRedirect, isAuthenticated,user } = useAuth0();
    const { logout } = useAuth0();

    const add= (e)=>{
        e.preventDefault()
        console.log(todo);
        
        if(!todo) return
        addTodo(todo)
        setTodo("")
    }

    

    return (
        // {
        //     isAuthenticated && <p>{user.name}</p>
        // }
<form onSubmit={add} className="flex">
    <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todo}
        onChange={(e)=> setTodo(e.target.value)}
    />
    <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
        Add
    </button>
    { isAuthenticated ?(<button type="logout" className="rounded-r-lg px-3 py-1 bg-blue-600 text-white shrink-0"onClick={() => loginWithRedirect()}>Log out</button> ):(
   
    <button type="logout" className="rounded-r-lg px-3 py-1 bg-blue-600 text-white shrink-0"onClick={() => loginWithRedirect()}>Log In</button>
    )}
       
</form>
    );
}

export default TodoForm;


