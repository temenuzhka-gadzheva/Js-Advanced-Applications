import { dashboardTemplate } from "./dashboardTemplate.js";
import crudService from "./../../services/crudService.js";

async function getView(context){
console.log(context);
let furnitures = await crudService.getAll();
let template = dashboardTemplate(furnitures);
context.viewRender(template);
}

export default{
    getView
}