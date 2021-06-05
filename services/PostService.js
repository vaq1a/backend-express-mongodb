import PostModel from "../models/PostModel.js";
import FileService from "./FileService.js";

class PostService {
    async create(post, picture) {
        const fileName = FileService.saveFile(picture);
        return await PostModel.create({...post, picture: fileName});
    }

    async getAll() {
        return await PostModel.find();
    }

    async getOne(id) {
        if(!id) {
            throw new Error('Неверный id...');
        }

        return await PostModel.findById(id);
    }

    async update(post) {
        if(!post._id) {
            throw new Error('Id не указан');
        }

        return await PostModel.findByIdAndUpdate(post._id, post, {new: true});
    }

    async delete(id) {
        if(!id) {
            throw new Error('Id не указан');
        }

        return await PostModel.findByIdAndDelete(id);
    }
}

export default new PostService();