import {Request, Response} from "express"
import Users from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


interface IUser{
    name:String;
    account:String;
    password: String;
    avatar: String;
    type:String;

}

const authCtrl = {
    register:async(req:Request, res:Response)=>{
        try {

            const {name, account, password} = req.body;
            const user  = await Users.findOne({account});
            if (!user) return res.status(400).json({msg: "Email or Phone number already exists."})


        
        } catch (err:any) {
            return res.status(500).json({msg: err.message})
        }
    }
}