import bcrypt from "bcrypt";
const salt = bcrypt.genSaltSync(10)

const hashPassword = async (password:string) =>{
    const hashed = await bcrypt.hash(password, salt)
    return hashed
}

const comparePassword = async (inputPassword: string, password:string) => {
    const isMatch = await bcrypt.compare(inputPassword, password)
    return isMatch
}

export { hashPassword, comparePassword }