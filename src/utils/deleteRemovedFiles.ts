import fs from "fs";
import path from "path";

export default function deleteRemovedFiles(previous: string[], current: string[]) {
  if (previous && previous.length > current.length) {
    const filesToDelete: string[] = previous.filter((x) => !current.includes(x));
    for (const file of filesToDelete) {
      const previousPath = path.join("public", file);
      if (fs.existsSync(previousPath)) {
        fs.unlink(previousPath, (err) => err && console.error(err));
      }
    }
  }
}
