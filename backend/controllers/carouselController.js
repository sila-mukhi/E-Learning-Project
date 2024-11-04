import carouselModel from "../models/carouselModel.js";
import fs from "fs/promises";

const addCarousel = async (req, res) => {
    let image_filename = `${req.file.filename}`;

    const carousels = new carouselModel({
        image: image_filename,
        description: req.body.description,
        content: req.body.content,
    });
    try {
        await carousels.save();
        res.json({ success: true, message: "Carousel Added" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error adding carousel" });
    }
};

const listCarousel = async (req, res) => {
    try {
        const carousels = await carouselModel.find({});
        res.json({ success: true, data: carousels });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error listing carousels" });
    }
};

const removeCarousel = async (req, res) => {
    try {
        const carousels = await carouselModel.findById(req.body.id);
        if (!carousels) {
          
            return res.status(404).json({success:false,message:"Carousel not found"})
        }           
          await fs.unlink(`carouselImages/${carousels.image}`);

        await carouselModel.findByIdAndDelete(req.body.id);
             res.json({ success: true, message: "Carousel Removed" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error removing carousel" });
    }
};

const updateCarousel = async (req, res) => {
    let image_filename = req.file ? `${req.file.filename}` : null;

    const updateData = {
        description: req.body.description,
        content: req.body.content,
    };

    if (image_filename) {
        updateData.image = image_filename;
    }

    try {
        const carousel = await carouselModel.findByIdAndUpdate(req.params.id, updateData, { new: true });
        if (!carousel) {
            return res.json({ success: false, message: "Carousel not found" });
        }
        res.json({ success: true, message: "Carousel updated", data: carousel });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error updating carousel" });
    }
};

const fetchCarousel = async (req, res) => {
    try {
        const carousel = await carouselModel.findById(req.params.id);
        if (!carousel) {
            return res.status(404).json({ success: false, message: "Carousel not found" });
        }
        res.json({ success: true, data: carousel });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error fetching carousel data" });
    }
};

export { addCarousel, listCarousel, removeCarousel, updateCarousel, fetchCarousel };
