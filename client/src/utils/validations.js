export function hasOwnProperty(obj, propertyName) {
  return Object.prototype.hasOwnProperty.call(obj, propertyName);
}
