function editElement(ref,match,replace) {
    const regex = new RegExp(match,'g');
    ref.textContent  = ref.textContent.replace(regex,replace);
}