import { notificationsTemplate } from "./notificationTemplate.js";



let _routing = undefined;
let _rendering = undefined;


function toInitialization(routing, rendering) {
    _routing = routing;
    _rendering = rendering;
}

async function creatingNotificationMsg(message) {
    
    let item = {
        message
    }
    let template = notificationsTemplate(item);
    _rendering(template);
}

export default {
    creatingNotificationMsg,
    toInitialization
}