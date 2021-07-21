export function createHtmlelements(tagName, attributes, ...content) {
    
    let element = document.createElement(tagName);
    let text = content[0];
    if (content.length === 1 && typeof (text) !== 'object') {
      if (['input', 'textarea'].includes(tagName)) {
        element.value = text;
      } else {
        element.textContent = text;
      }
    } else {
      content.forEach(el => {
        element.appendChild(el);
      });
    }
  
    if (attributes !== undefined) {
      Object.keys(attributes).forEach(key => {
        element.setAttribute(key, attributes[key]);
      })
    }
  
    return element;
  }