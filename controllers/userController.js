import User from '../models/User.js';

//create tour
export const createTour = async(req,res) =>{
    const newTour = new User(req.body);

    try {
        const savedTour = await newTour.save();

        res.status(200).json({success:true, message:"Succeccfully created",data:savedTour});
    } catch (err) {
        res.status(500).json({success:false, message:"Failed to create. Try again"});
    }
};

//update tour
export const updateUser=async(req,res)=>{

    const id = req.params.id;
    try {
       await User.findByIdAnddelete(id);

        res.status(200).json({success:true, message:"Succeccfully deleted"});
    } catch (err) {
        res.status(500).json({success:false, message:"Failed to deleted",});
    }
};
//delete tour
export const deleteUser=async(req,res)=>{
    const id = req.params.id;
    try {
        const deletedTour =  await User.findByIdAndUpdate(id, {
            $set: req.body,
        }, {new: true}) //return the updated document instead of old

        res.status(200).json({success:true, message:"Succeccfully deletedd"});
    } catch (err) {
        res.status(500).json({success:false, message:"Failed to delete",});
    }
};
//get SIngle  tour
export const getSingleUser=async(req,res)=>{
    const id = req.params.id;
    try {
        const users =  await User.findById(id);

        res.status(200).json({success:true, message:"Succeccful",data: users});
    } catch (err) {
        res.status(404).json({success:false, message:"not found",});
    }
};
//get All tour
export const getAllUser=async(req,res)=>{

    try {
        const users =  await User.find({});

        res.status(200).json({success:true, message:"Succeccful",data: users});
    } catch (err) {
        res.status(404).json({success:false, message:"not found",});
    }
};
