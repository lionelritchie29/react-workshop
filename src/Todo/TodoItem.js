import { Li } from './Todo.styles';

const TodoItem = ({ item, index, deleteItem }) => {
  return (
    <div>
      <Li>
        <span>{item}</span>{' '}
        <button type="button" onClick={() => deleteItem(index)}>
          X
        </button>
      </Li>
    </div>
  );
};

export default TodoItem;
