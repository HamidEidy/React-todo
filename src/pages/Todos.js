import { useContext } from "react";
import TodoContext from "../context/TodoContext";

const Todos = ()=> {
    const todoContext = useContext(TodoContext)
        return (
        <h1>Todos - {todoContext}</h1>
    )
}
export default Todos;