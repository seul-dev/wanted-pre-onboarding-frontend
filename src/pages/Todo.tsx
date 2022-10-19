import axios from 'axios';
import { useState, useEffect, useContext, useCallback } from 'react';
import styled from 'styled-components';
import TodoForm from '../components/todo/TodoForm';
import TodoItem from '../components/todo/TodoItem';
import { AuthContext } from '../store/AuthContext';

export interface TodoResponse {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

const Todo = () => {
  const { token } = useContext(AuthContext);
  const [todos, setTodos] = useState<TodoResponse[]>([]);

  useEffect(() => {
    const handleGetTodos = async (token: string) => {
      try {
        const { data } = await axios.get(
          process.env.REACT_APP_API_URL + '/todos',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setTodos(data.sort((a: TodoResponse, b: TodoResponse) => b.id - a.id));
      } catch (error: any) {
        if (error.response?.data.statusCode) {
          alert(error.response.data.message);
        }
      }
    };
    handleGetTodos(token);
  }, [token]);

  return (
    <>
      <TodoForm setTodos={setTodos} />
      <TodoStatus>
        <p>Total: {todos.length}</p>
        <p>Done: {todos.filter((todo) => todo.isCompleted).length}</p>
      </TodoStatus>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} setTodos={setTodos} />
      ))}
    </>
  );
};

export default Todo;

const TodoStatus = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  padding: 0 2rem;
  p {
    margin-right: 2rem;
  }
`;
