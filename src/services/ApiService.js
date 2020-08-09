import axios from 'axios'

const TODOLIST_API_BASE_URL = 'http://localhost:8080/api/todoList';

class ApiService {


    fetchTodoListById(id) {
        return axios.get(TODOLIST_API_BASE_URL + '/' + id);
    }
}

export default new ApiService();