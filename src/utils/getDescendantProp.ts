export default function getDescendantProp(obj: any, desc: string) {
  var arr = desc.split(".");
  while (arr.length) {
    const key = arr.shift();
    if (typeof key === "string") {
      obj = obj[key];
    }
  }
  return obj;
}
