/*
  @param objects - Array of keys that identify serialized objects and arrays.
  @param files - Array of keys that identify files.
  @param exclude - Array of keys that should be excluded from the parsing.
  @param include - Array of keys that should be included in the parsing.
*/
interface Config {
  objects?: string[];
  files?: string[];
  exclude?: string[];
  include?: string[];
}

export default function parseFormData(obj: { [key: string]: any }, config?: Config) {
  const data = JSON.parse(JSON.stringify(obj));
  const keys = Object.keys(data);
  if (keys.length === 0) return data;

  keys.forEach((key) => {
    const value = obj[key];
    if (config?.exclude?.includes(key)) return;
    if (config?.include?.includes(key)) return;

    if (config?.files && config?.files.includes(key)) {
      data[key] = value;
    } else if (config?.objects && config?.objects.includes(key)) {
      data[key] = JSON.parse(value);
    }
  });
  return data;
}
