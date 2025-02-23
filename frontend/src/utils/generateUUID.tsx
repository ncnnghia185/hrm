import { v4 as uuidv4 } from "uuid";
// generate Id
export const generateId = (code: string) => {
  const uuid = uuidv4();
  const id = uuid.replace(/-/g, "").slice(0, 10);

  return `${code}-${id.toUpperCase()}`;
};
