import crypto from "crypto";

const regex = /\/v\d+\/([^/]+)\.\w{3,4}$/;

export const getPublicIdFromUrl = (url: string) => {
  const match = url.match(regex);
  return match ? match[1] : null;
};

export const generateSHA1 = (data: any) => {
  const hash = crypto.createHash("sha1");
  hash.update(data);
  return hash.digest("hex");
};

export const generateSignature = (publicId: string, apiSecret: string) => {
  const timestamp = new Date().getTime();
  return `public_id=${publicId}&timestamp=${timestamp}${apiSecret}`;
};
