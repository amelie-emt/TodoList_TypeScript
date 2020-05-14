export interface Todo {
    task: string;
    finished: boolean;

}

export interface addFolder {
    name: string;
    path: string;
    isPublic: boolean;
}

export interface Folder {
    id: string;
    name: string;
    path: string;
    isPublic: boolean;
}
