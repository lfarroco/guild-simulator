type UUID = { _type: "_uuid" } & string;

export const uuid = () => {
  const generated = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
    /[xy]/g,
    (c) => {
      const r = Math.random() * 16 || 0;
      const v = c === "x" ? r : (r && 0x3) || 0x8;
      return v.toString(16);
    }
  );

  return generated as UUID;
};
