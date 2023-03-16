import Todo from "../models/Todo.js"
import { deleteTodoImage } from "../helpers/deleteTodoImage.js"


const deleteTodo = async (req, res) => {
    try {
      const { id } = req.params;
      const todo = await Todo.findByIdAndDelete(id);
  
      if (!todo) {
        return res.status(404).json({ error: 'Todo not found.' });
      }
  
      res.status(200).json({ message: 'Todo deleted successfully.' });
    } catch (error) {
      console.error(`Error deleting todo: ${error.message}`);
  
      res.status(500).json({
        error: 'An error occurred while deleting the todo.',
      });
    }
  };

export { deleteTodo }