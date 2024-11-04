import categoryModel from "../models/categoryModel.js";
import fs from "fs/promises";

const addCategory = async (req, res) => {
    if (!req.file || !req.body.title || !req.body.courseCount) {
        return res.status(400).json({ success: false, message: "Missing required fields" });
    }

    const image_filename = req.file.filename;

    const category = new categoryModel({
        image: image_filename,
        title: req.body.title,
        courseCount: req.body.courseCount,
    });

    try {
        await category.save();
        res.json({ success: true, message: "Category Added" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error adding category" });
    }
};

// List all categories
const listCategory = async (req, res) => {
    try {
        const categories = await categoryModel.find({});
        res.json({ success: true, data: categories });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error fetching categories" });
    }
};

// Remove category
const removeCategory = async (req, res) => {
    try {
        const category = await categoryModel.findById(req.body.id);
        if (!category) {
            return res.status(404).json({ success: false, message: "Category not found" });
        }

        await fs.unlink(`categoryImages/${category.image}`);
        await categoryModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Category Removed" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error removing category" });
    }
};



const updateCategory = async (req, res) => {
    let image_filename = req.file ? `${req.file.filename}` : null; // Optional: only update image if provided

    const updateData = {
        title: req.body.title,
        courseCount: req.body.courseCount,
       
    };

    if (image_filename) {
        updateData.image = image_filename; // Update image only if new image is provided
    }

    try {
        const category = await categoryModel.findByIdAndUpdate(req.params.id, updateData, { new: true });
        if (!category) {
            return res.json({ success: false, message: "Category not found" });
        }
        res.json({ success: true, message: "Category updated", data: category });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

const fetchCategory=  async (req, res) => {
    try {
        const category = await categoryModel.findById(req.params.id);
        if (!category) {
            return res.status(404).json({ success: false, message: "Category not found" });
        }
        res.json({ success: true, data: category });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Error fetching category data" });
    }
}



export { addCategory, listCategory, removeCategory,fetchCategory,updateCategory };
