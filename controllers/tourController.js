import Tour from '../models/Tour.js';

//create tour
export const createTour = async(req,res) =>{
    const newTour = new Tour(req.body);

    try {
        const savedTour = await newTour.save();

        res.status(200).json({success:true, message:"Succeccfully created",data:savedTour});
    } catch (err) {
        res.status(500).json({success:false, message:"Failed to create. Try again"});
    }
};

//update tour
export const updateTour=async(req,res)=>{

    const id = req.params.id;
    try {
       await Tour.findByIdAnddelete(id);

        res.status(200).json({success:true, message:"Succeccfully deleted"});
    } catch (err) {
        res.status(500).json({success:false, message:"Failed to deleted",});
    }
};
//delete tour
export const deleteTour=async(req,res)=>{
    const id = req.params.id;
    try {
        const deletedTour =  await Tour.findByIdAndUpdate(id, {
            $set: req.body,
        }, {new: true}) //return the updated document instead of old

        res.status(200).json({success:true, message:"Succeccfully deletedd"});
    } catch (err) {
        res.status(500).json({success:false, message:"Failed to delete",});
    }
};
//get SIngle  tour
export const getSingleTour=async(req,res)=>{
    const id = req.params.id;
    try {
        const tour =  await Tour.findById(id);

        res.status(200).json({success:true, message:"Succeccful",data: tour});
    } catch (err) {
        res.status(404).json({success:false, message:"not found",});
    }
};
//get All tour
export const getAllTour=async(req,res)=>{

    // for pagination
    const page = parseInt(req.query.page);


    try {
        const tours =  await Tour.find({}).skip(page * 8).limit(8);

        res.status(200).json({success:true, count:tours.length, message:"Succeccful",data: tours});
    } catch (err) {
        res.status(404).json({success:false, message:"not found",});
    }
};


// get tour by search
export const getTourBySearch=async (req,res)=> {

    // here i means case sensitive
    const city = new RegExp(req.query.city, 'i');
    const distance = parseInt(req.query.distance);
    const maxGroupSize = parseInt(req.query.maxGroupSize);

     try {
        //gte means greater  than or equal to
        const tours = await Tour.find({ city, distance:{$gte:distance},
        maxGroupSize:{$gte:maxGroupSize}})
        res.status(200).json({success:true, message:"Succeccful",data: tours});

     } catch (err) {
        res.status(404).json({success:false, message:"not found",});
     }
};

//get featured tour
export const getFeaturedTour=async(req,res)=>{


    try {
        const tours =  await Tour.find({featured:true}).limit(8);

        res.status(200).json({success:true, message:"Succeccful",data: tours});
    } catch (err) {
        res.status(404).json({success:false, message:"not found",});
    }
};


// get tour counts

export const getTourCount = async(req,res)=>{

    try {
        const tourCount = await Tour.estimatedDocumentCount();
        res.status(200).json({success: true, data:tourCount})
    } catch (err) {
        res.status(500).json({success:false, message:'failed to fetch'})
    }
}