const Task = require("../models/taskmodel");

exports.create = (req,res)=>{
    Task.createTask(req.body,(err,result)=>{
        if(err) return res.status(500).json(err);

        res.status(201).json({
            success: true,
            message:"Task created successfully"
        });
    });
};

exports.findAll = (req,res)=>{
    Task.getTasks((err,result)=>{
        if(err) return res.status(500).json(err);

        res.status(200).json({
            success: true,
            data: result
        });
    });
};

exports.findOne = (req,res)=>{
    Task.getTask(req.params.id,(err,result)=>{
        if(err) return res.status(500).json(err);

        if (result.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }

        res.status(200).json({
            success: true,
            data: result
        });
    });
};

exports.update = (req,res)=>{
    Task.updateTask(req.params.id,req.body,(err)=>{
        if(err) return res.status(500).json(err);

        if (result.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Task not found"
            });
        }

        res.status(200).json({
            success: true,
            data: result
        });

    });

};

exports.delete = (req,res)=>{
    Task.deleteTask(req.params.id,(err)=>{
        if(err) return res.status(500).json(err);

       if (result.length === 0) {
            return res.status(404).json({
                success: false,
                message: "Task not found, access denied"
            });
        }

        res.status(200).json({
            success: true,
            data: result
        });

    });

};