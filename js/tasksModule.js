let tasksModule = (function(tasks) {
    var user = 'Никита';
    function getTasks(skip, top, filterConfig){
        let array = tasks.slice();
        array.sort((a, b) => a.createdAt > b.createdAt ? 1 : -1);
        if(filterConfig){
            if(filterConfig.assignee){
                array = array.filter(el => el.assignee.toLowerCase().includes(filterConfig.assignee.toLowerCase()));
            }
            if(filterConfig.dateFrom){
                array = array.filter(el => el.createdAt > filterConfig.dateFrom);
            }
            if(filterConfig.dateTo){
                array = array.filter(el => el.createdAt < filterConfig.dateTo);
            }
            if(filterConfig.status){
                array = array.filter(el => el.status === filterConfig.status);
            }
            if(filterConfig.priority){
                array = array.filter(el => el.priority === filterConfig.priority);
            }
            if(filterConfig.isPrivate){
                array = array.filter(el => el.isPrivate === filterConfig.isPrivate);
            }
            if(filterConfig.description){
                array = array.filter(el => el.description.includes(filterConfig.description));
            }
        }
        return array.slice(skip, top);
    }
    function getTask(id){
        return tasks.find(el => el.id === id);
    }
    function validateTask(task){
        if(!task.id || typeof task.id !== 'string') return false;
        if(!task.name || typeof task.name !=='string' || task.name.length > 100) return false;
        if(!task.description || typeof task.description !== 'string' || task.description > 280) return false;
        if(!task.createdAt || !Date.parse(task.createdAt)) return false;
        if(!task.assignee) return false;
        if(!task.status || typeof task.status !== 'string' || task.status.search(/\b(To Do|In progress|Complete)\b/) === -1) return false
        if(!task.priority || typeof task.priority !== 'string' || task.priority.search(/\b(High|Medium|Low)\b/) === -1) return false;
        if(task.isPrivate === null || typeof task.isPrivate !== 'boolean') return false;       
        if(!Array.isArray(task.comments)) return false;
        return true;
    }
    function addTask(name,description, assignee, status,priority,isPrivate){
        //const id = (new Date()).toString();
        const id = (tasks.length + 1).toString();
        const createdAt = new Date();
        const comments = [];
        const newTask = {
            id,
            name,
            description,
            createdAt,
            assignee,
            status,
            priority,
            isPrivate,
            comments
        }
        console.log(newTask);
        if(validateTask(newTask)){
            tasks = [...tasks, newTask];
            return true;
        } else return false;
    }
    function editTask(id, name, description, assignee, status, priority, isPrivate){
        let currentTask = getTask(id)
        if(currentTask.assignee !== this.user) return false;
        currentTask = {
            ...currentTask,
            name: name ? name : currentTask.name,
            description: description ? description : currentTask.description,
            assignee: assignee ? assignee : currentTask.assignee,
            status: status ? status : currentTask.status,
            priority: priority ? priority : currentTask.priority,
            isPrivate: isPrivate !== undefined ? isPrivate : currentTask.isPrivate,
        }
        if(validateTask(currentTask)){
            tasks =  tasks.map(n => n.id === currentTask.id ? currentTask : n);
            return true;
        } else return false;
    }
    function removeTask(id){
        let currentTask = getTask(id);
        if(currentTask.assignee !== this.user) return false;
        tasks = tasks.filter(el => el.id !== id);
        return true;
    }
    function validComment(com){
        if(!com.id || typeof com.id !== string) return false;
        if(!com.text || typeof com.text !== string || com.text.length > 280) return false;
        if(!com.createdAt || typeof com.createdAt !== Date) return false;
        if(!com.author || typeof com.author !== string) return false;
        return true;
    }
    function createComment(text){
        const id = `${new Date().toString()}com`;
        const createdAt = new Date();
        return newComment = {
            id,
            createdAt,
            author: this.user,
            text
        }
    }
    function addComment(id, text){
        let currentTask = getTask(id);
        if(!text) return false;
        const newComment = createComment(text);
        currentTask.comments = [...currentTask.comments, newComment];
        return true;
    }
    function changeUser(usr){
        if(usr !== '') this.user = usr;
    }
    return {
        user,
        validateTask,
        getTasks,
        getTask,
        addTask,
        editTask,
        removeTask,
        validComment,
        createComment,
        addComment,
        changeUser
      }
}(tasks));