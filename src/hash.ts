import * as crypto from "crypto";
import * as fs from "fs";

export const getFileHash = (filePath: string, callback: (hash: string) => any) => {
  const fsStream = fs.createReadStream(filePath, { autoClose: true });
  const fsHash = crypto.createHash("sha256");
  fsStream.on("data", (data) => fsHash.update(data));
  fsStream.on("end", () => callback(fsHash.digest("hex")));
};

export const getBufferHash = (buffer: Buffer) => {
  const fsHash = crypto.createHash("sha256");
  fsHash.update(buffer)
  return fsHash.digest("hex")
}

