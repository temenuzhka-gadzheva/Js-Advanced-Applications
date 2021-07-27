
import auth from "../../services/auth.js";
import crudService from "../../services/crudService.js";
import { detailsTemplate } from "./detailsTemplate.js";

async function whenDeleteIsClicked(context, id, e) {
    
    let messageToRepeated = confirm('Do you really want to delete this furniture???');
    if(messageToRepeated){
      await crudService.del(id);
        context.page.redirect('/dashboard');
    }
}

async function getView(context) {

    let id = context.params.id;

    let boundDeleted = whenDeleteIsClicked.bind(null, context, id);

    let furniture = await crudService.get(id);

    furniture.img = furniture.img.startsWith('.')
     ? furniture.img.substring(1) 
     : furniture.img;

    let isUserOwner = auth.getUserId() !== furniture._ownerId;

    let template = detailsTemplate(furniture, boundDeleted, !isUserOwner);
    context.viewRender(template);
}

export default {
    getView
}