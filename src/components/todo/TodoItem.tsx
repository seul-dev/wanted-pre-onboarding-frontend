import { useContext, useState, SetStateAction, Dispatch } from 'react';
import styled from 'styled-components';
import { BsCheckSquareFill, BsCheckSquare } from 'react-icons/bs';
import Card from '../common/Card';
import { Input } from '../auth/AuthForm';
import { TodoResponse } from '../../pages/Todo';
import Button from '../common/Button';
import axios from 'axios';
import { AuthContext } from '../../store/AuthContext';

interface TodoItemProps {
  todo: TodoResponse;
  setTodos: Dispatch<SetStateAction<TodoResponse[]>>;
}

const TodoItem = ({ todo, setTodos }: TodoItemProps) => {
  const { token } = useContext(AuthContext);
  const [editMode, setEditMode] = useState(false);
  const [todoText, setTodoText] = useState(todo.todo);
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);

  const handleComplete = () => {
    axios
      .put(
        process.env.REACT_APP_API_URL + `/todos/${todo.id}`,
        {
          todo: todoText,
          isCompleted: !isCompleted,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(({ data }) => {
        setIsCompleted((prev) => !prev);
        setTodos((prev) =>
          prev.map((el) => {
            return el.id === data.id ? data : el;
          })
        );
      });
  };

  const handleEditTodo = () => {
    axios
      .put(
        process.env.REACT_APP_API_URL + `/todos/${todo.id}`,
        {
          todo: todoText,
          isCompleted: isCompleted,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(({ data }) => {
        setTodos((prev) =>
          prev.map((el) => {
            return el.id === data.id ? data : el;
          })
        );
        setEditMode(false);
      });
  };

  const handleDelete = () => {
    axios
      .delete(process.env.REACT_APP_API_URL + `/todos/${todo.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(({ data }) => {
        setTodos((prev) => prev.filter((el) => el.id !== todo.id));
      });
  };

  return (
    <Card item={true}>
      <ButtonContainer>
        {isCompleted ? (
          <BsCheckSquareFill onClick={handleComplete} />
        ) : (
          <BsCheckSquare onClick={handleComplete} />
        )}
        {editMode ? (
          <>
            <Button
              type='button'
              size='small'
              color='outlineGreen'
              onClick={() => {
                setEditMode(false);
              }}
            >
              취소
            </Button>
            <Button
              type='button'
              size='small'
              color='green'
              onClick={handleEditTodo}
            >
              수정
            </Button>
          </>
        ) : (
          <>
            <Button
              type='button'
              size='small'
              color='outlineGreen'
              onClick={() => {
                setEditMode(true);
              }}
            >
              수정
            </Button>
            <Button
              type='button'
              size='small'
              color='red'
              onClick={handleDelete}
            >
              삭제
            </Button>
          </>
        )}
      </ButtonContainer>
      {editMode ? (
        <Input
          type='text'
          defaultValue={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
      ) : (
        <Todotext>{todo.todo}</Todotext>
      )}
    </Card>
  );
};

export default TodoItem;

const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 0.5rem;
  position: relative;
  svg {
    position: absolute;
    top: 0.1rem;
    left: 0.3rem;
    font-size: 1.8rem;
    color: var(--green);
    cursor: pointer;
  }
`;

const Todotext = styled.p`
  font-size: 1.2rem;
  border-radius: 5px;
  padding: 0.6rem 1.2rem;
  width: 100%;
  border: solid 1px var(--gray);
`;
