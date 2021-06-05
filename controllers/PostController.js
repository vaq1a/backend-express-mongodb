import PostService from "../services/PostService.js";

class PostController {
    async create(req, res) {
        try {
            const post = await PostService.create(req.body, req.files.picture);
            console.log('Пост добавлен!');

            return res.json(post);
        } catch (err) {
            return res.status(500).json(err);
        }
    }

    async getAll(req, res) {
        try {
            const posts = await PostService.getAll();
            console.log('Все посты получены!')

            return res.json(posts);
        } catch (err) {
            return res.status(500).json(err);
        }
    }

    async getOne(req, res) {
        try {
            const post = await PostService.getOne(req.params.id);
            console.log('Один пост получен!');

            return res.json(post);
        } catch (err) {
            return res.status(500).json(err);
        }
    }

    async update(req, res) {
        try {
            const newPost = await PostService.update(req.body);
            console.log('Пост обновлен!');

            return res.json(newPost);
        } catch (err) {
            return res.status(500).json(err);
        }
    }

    async delete(req, res) {
        try {
            const post = await PostService.delete(req.params.id);
            console.log('Пост с id ' + req.params.id + ' удален!');

            return res.json(post);
        } catch (err) {
            return res.status(500).json(err);
        }
    }

}

export default new PostController();