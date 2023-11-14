import { Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import AddTodoComp from "../components/AddTodoComp";
import TodoList from "../components/TodoList";

interface TodoType {

    id: string | number;
    task: string;
    idDone: boolean; 
}

const url = ""

const Main = () => {
const [todos, setTodos]=useState<TodoType[]>([])

const getTodos = async ()=>{
    try{
        const {data}=await axios.get(url); 
        setTodos(data)

    }catch(error) {

    }
}
useEffect(()=>{
getTodos()
},[])



  return (

      <Container>
        <Typography
          color="error"
          variant="h2"
          component={"h1"}
          align="center"
          mt={3}
        >
          Todo App with Typscript
        </Typography>

        <AddTodoComp />
        <TodoList />
      </Container>
  );
};

export default Main;
