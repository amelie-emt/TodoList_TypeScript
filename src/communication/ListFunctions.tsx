import axios from 'axios'
import {Todo} from "../interfaces/Todo";

interface Props {
    task: "";
}

export const addToList = (task: Props)=> {

    return axios
        .post(
            'api/task',
            {
                title: task
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
