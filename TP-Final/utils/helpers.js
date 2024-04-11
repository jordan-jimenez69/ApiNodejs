import bcrypt from "bcryptjs";

const saltRounds = 77;

export const hashPasswordSync = (password) => {
  const salt = bcrypt.genSaltSync(saltRounds);

  return bcrypt.hashSync(password, salt);
};

export const comparePasswordSync = (password, hash) => {
  return bcrypt.compareSync(password, hash);
};