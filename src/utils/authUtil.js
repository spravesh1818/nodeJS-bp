import bcrypt from "bcrypt";

const saltRounds = 10;

const hashPassword = async (plainPassword) => {
  const hash = await bcrypt.hash(plainPassword, saltRounds);
  return hash;
};

const comparePassword = async (plainPassword, hashedPassword) => {
  const passwordCompareResult = bcrypt.compare(plainPassword, hashedPassword);
  return passwordCompareResult;
};

export { hashPassword, comparePassword };
