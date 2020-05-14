import axios from 'axios'
import {addFolder, Folder} from "../interfaces/Todo";

interface Props {
    folder: addFolder;
}

export const addToList = ({ folder }: Props)=> {

    return axios
        .post(
            `http://${window.location.hostname}:3000/library/folders`,
            {
                name: folder.name,
                path: folder.path,
                isPublic: folder.isPublic
            },
            {
                headers: {'Content-type': 'application/json'}
            }
        )
        .then((response) => {
            console.log(response.data)
        })
};


export const getAllFolders = () => {
    console.log('axios get open');
    return axios
        .get(`http://${window.location.hostname}:3000/library/folders`, {
            headers: {'Content-type':'application/json'}
        })
        .then((res )=> {
            console.log('axios getAllFolders');
            const folders : Array<Folder> = [];
            Object.keys(res.data).forEach(function(key) {
                const folder= {
                    id: res.data[key].id,
                    name: res.data[key].name,
                    path: res.data[key].path,
                    isPublic: res.data[key].isPublic
                };
                folders.push(folder)
            });
            return folders
        })
};


