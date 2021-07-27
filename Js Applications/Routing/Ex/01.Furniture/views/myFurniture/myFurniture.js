import  auth  from './../../services/auth.js';
import crudService from "./../../services/crudService.js";
import { myFurnitureTemplate } from './myFurnitureTemplate.js';

async function getView(context) {

    let userId = auth.getUserId();

    let clientFurnitures = await crudService.getClientFurnitures(userId);

    let template = myFurnitureTemplate(clientFurnitures);

    context.viewRender(template);
}

export default {
    getView
}