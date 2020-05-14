import React, {ChangeEvent, FormEvent, useEffect, useState} from "react";
import FolderList from "./folderList";
import TodoInput from "./TodoInput";
import {addToList, getAllFolders} from "../communication/ListFunctions";

import {Folder} from "../interfaces/Todo";


const App = () => {
    const [folders, setFolders] = useState<Array<Folder>>([]);
    const [folderValue, setFolderValue] = useState("");

    const updateFolders = () => {
        console.log('updateFolders');
        getAllFolders().then(data => {
            setFolders(data);
            console.log('data updated');
        });
    };

    useEffect(() => {
        updateFolders();
        startEventSource();
    }, []);



    const startEventSource = () => {
        let eventSource = new EventSource(` http://127.0.0.1:5000/library/event`);
        console.log('start event source');
        console.log(eventSource.readyState);
        eventSource.addEventListener("insert", () => {
            console.log('insert');
            updateFolders();
        });
        eventSource.addEventListener("delete", () => {
            console.log('delete');
            updateFolders();
        });
        eventSource.addEventListener("replace", () => {
            console.log('replace');
            updateFolders();
        });
        eventSource.onerror = () => {
            console.log('eventSource error')
        };
        eventSource.onopen = () => {
            console.log('eventSource open')
        };
    };


    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        addToList(
            {
                folder: {
                    name: folderValue,
                    path: folderValue,
                    isPublic: true
                }
            }
        ).then(r => {
            console.log('add ok');
        });
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFolderValue(event.currentTarget.value);
    };

    return (

        <div>
            <h1>Welcome to my to-do app.</h1>
            <FolderList folders={folders}/>
            <TodoInput onSubmit={handleSubmit} onInputChange={handleChange} inputValue={folderValue}/>
        </div>

    );
};
export default App;

