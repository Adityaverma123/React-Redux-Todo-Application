import "./TodoItem.css";
import Checkbox from "@material-ui/core/Checkbox";
import { useDispatch } from "react-redux";
import { setCheck } from "../features/todoSlice";

const TodoItem = ({ name, done, id }) => {
  const dispatch = useDispatch();
  const handleCheck = () => {
    dispatch(setCheck(id));
  };
  return (
    <div className="todoItem">
      <p className={done && "todoItem-done"}>{name}</p>
      <Checkbox
        onChange={handleCheck}
        checked={done}
        color="primary"
        inputProps={{ "aria-label": "secondary checkbox" }}
      />
    </div>
  );
};

export default TodoItem;
