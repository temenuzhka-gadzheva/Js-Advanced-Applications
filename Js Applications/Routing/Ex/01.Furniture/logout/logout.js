import auth from "../services/auth.js";


async function logoutFunc(context) {
    let messageToLogout = "Do you really logout now??";
    alert(messageToLogout);
    if (messageToLogout) {
        await auth.logout(); context.page.redirect('/dashboard');
    }
}

export default {
    logoutFunc
}