function renderTemplate(template, data) {
  return template.replace(/{{(.*?)}}/g, (_, key) => data[key.trim()] || '');
}

module.exports = renderTemplate;
