const arrayFrom = require('array-from');

let vNodeProto = {
  tagName: 'DIV',
  children: [],
  type: 'VirtualNode',
  version: '2'
};

export default (element) => {
  let vNode = Object.create(vNodeProto);

  const properties = vNode.properties = {attributes: {}};
  arrayFrom(element.attributes).forEach((attribute) => {
    properties.attributes[attribute.name] = attribute.value;
  });

  if (element.tagName) vNode.tagName = element.tagName;
  return vNode;
};
