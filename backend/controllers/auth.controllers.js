import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
import genToken from "../utils/token.js"

// signUp Controller
export const signUp  = async (req , res)=>{
    try{
        const{fullName , email, password,mobile,role} = req.body
        const user = await User.findOne({email})
        if(user)
        {
            return res.status(400).json({message : "User Already Exist.."})
        }

        if(password.length<6){
            return res.status(400).json({message : "password must be At least 7 Characters.."})
        }

        if(mobile.length<10)
        {
            return res.status(400).json({message : "Mobile Number Must be At least 10 Digits.."})

        }

        const hashedPassword = await bcrypt.hash(password,10)
        user = await User.create({
            fullName,
            email,
            role,
            mobile,
            password:hashedPassword
        })

        const token = await genToken(user._id)

// passing token into cookies...
        res.cookie("token",token,{
            secure: false,
            sameSite:"strict",
            maxAge:7*24*60*60*1000,
            httpOnly:true
        })

        return res.status(201).json(user)

    }
    catch (error)
    {
        return res.status(500).json(`Signup Error ${error}`)

    }

}

// Sigin Controller
export const signIn  = async (req , res)=>{
    try{
        const{email, password} = req.body
        const user = await User.findOne({email})
        if(!user)
        {
            return res.status(400).json({message : "User does Not Exist ..."})
        }

        const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch)
        {
            return res.status(400).json({message:"Incorrect Password"})
        }



        const token = await genToken(user._id)

// passing token into cookies...
        res.cookie("token",token,{
            secure: false,
            sameSite:"strict",
            maxAge:7*24*60*60*1000,
            httpOnly:true
        })

        return res.status(200).json(user)

    }
    catch (error)
    {
        return res.status(500).json(`SigIN  Error ${error}`)

    }

}

// SignOut Controller

export const signOut = async(req, res) => {
    try{
        res.clearCookie("token")
        return res.status(200).json({message : "Logout Successfully....."})
    }

    catch (error){
        return res.status(500).json(`signOut error ${error}`)
    }


}


