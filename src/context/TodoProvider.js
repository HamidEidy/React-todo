import todoContext from "./TodoContext"

const TodoProvider = ({children})=>{
    return(
        <todoContext.Provider value={"test"}>
             {children}
        </todoContext.Provider>
    )
}
export default TodoProvider;