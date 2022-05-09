export default function createFormData(obj: { [key: string]: any }) {
  const keys = Object.keys(obj);
  const formData = new FormData();
  if (keys.length === 0) return formData;

  keys.forEach((key) => {
    const value = obj[key];
    if (value instanceof File) {
      formData.append(key, value, value.name);
    } else if (typeof value === "object") {
      formData.append(key, JSON.stringify(value));
    } else {
      formData.append(key, value);
    }
  });

  return formData;
}
