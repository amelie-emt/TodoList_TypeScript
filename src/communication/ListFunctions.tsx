import axios from 'axios'
import {Todo} from "../interfaces/Todo";

interface Props {
    todo: Todo;
}

export const addToList = ({ todo }: Props)=> {

    return axios
        .post(
            'api/task',
            {
                title: todo.task
            },
            {
                headers: {'Content-type': 'application/json'}
            }
        )
        .then((response) => {

            console.log(response)
        })

}

export const getLast = () => {
    return axios
        .get('api/tasks', {
            headers: {'Content-type':'application/json'}
        })
        .then((response )=> {
            console.log(response.data[response.data.length-1].title)
            return response.data[response.data.length-1].title
        })
}