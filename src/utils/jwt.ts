import { jwtDecode } from "jwt-decode";

export const decodedToken = (token: string) => {
  const result = jwtDecode(token);

  return result;
};
