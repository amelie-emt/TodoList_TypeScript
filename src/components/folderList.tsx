import React from "react";
import TodoListItem from "./TodoListItem";
import { Folder} from "../interfaces/Todo";


interface Props {
    folders: Folder[];
}

const FolderList = ({folders}:Props) => {

    return (
        <ul className="list-group">
            {folders.map((folder, index) => (
                <TodoListItem
                    todo={{

                        task: folder.name,
                        finished: folder.isPublic
                    }}
                    key={index}
                />
            ))}
        </ul>
    );
};
export default FolderList;
