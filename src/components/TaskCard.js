import { useRouter } from 'next/navigation';
import { useTasks } from '../context/TasksContext';
import { toast } from 'react-hot-toast';

export const TaskCard = ({ task }) => {
    const router = useRouter();
    const { deleteTask } = useTasks()
    return (
        <div style={{ background: "#202020", color: "white" }}
            onClick={() => router.push(`/edit/${task.id}`)}
        >
            <h1>
                {task.title}
            </h1>
            <button onClick={(e) => {
                console.log(task.id);

                e.stopPropagation(); // para el evento anterior que es e.
                const accept = window.confirm('Are you sure you want to delete this task?');
                if (accept) {
                    deleteTask(task.id)
                    toast.success('task deleted succesfully');
                }
            }}>
                Delete
            </button>
            <p>
                {task.description}
            </p>
        </div>

    );
};
