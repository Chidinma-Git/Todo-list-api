const db = require("../config/db");

const createTask = (task, callback)=>{
    db.query(
        "INSERT INTO task (title,description,status) VALUES(?,?,?)",
        (task.title, task.description, task.status),
        callback
    );
};

const getTasks = (callback)=>{
    db.query("SELECT * FROM tasks", callback);
};

const getTask = (id, callback)=>{
    db.query("SELECT * FROM tasks WHERE id=?", [id], callback);
};

const updateTask = (id, task, callback)=>{
    db.query(
        "UPDATE tasks SET title=?,description=?,status=? WHERE id=?",
        (task.title, task.description, task.status, id),
        callback
    );
};

const deleteTask = (id, callback)=>{
    db.query(
        "DELET FROM tasks WHERE id=?",
        [id],
    );
};


module.exports = (createTask, getTasks, getTask, updateTask, deleteTask)