import * as uuid from 'uuid';
import * as path from 'path';

class FileService {
    saveFile(file) {
        try {
            const fileName = uuid.v4() + '.jpg';

            //Путь от корня в static/fileName
            const filePath = path.resolve('static', fileName);

            //Записываем(mv - move) файл по пути filePath
            file.mv(filePath);

            //Возвр название для сохранения в бд
            return fileName;
        } catch (err) {
            console.log(err);
        }
    }
}

export default new FileService();