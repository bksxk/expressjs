import Todo from "../models/Todo.js"


const doneTodo = async (req, res) => {
    try {
      const { id } = req.params;
      const todo = await Todo.findByIdAndUpdate(id, { completed: true }, { new: true });
  
      if (!todo) {
        return res.status(404).json({ error: 'Todo not found.' });
      }
  
      res.status(200).json(todo);
    } catch (error) {
      console.error(`Error marking todo as done: ${error.message}`);
      res.status(500).json({ error: 'An error occurred while marking the todo as done.' });
    }
  };

export { doneTodo }