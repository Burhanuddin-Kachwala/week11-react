/* eslint-disable no-useless-catch */
import { Account, Client, ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService {
     client = new Client();
    account;
    constructor(){
        this.client.setProject(conf.appwriteProjectId).setEndpoint(conf.appwriteUrl);
        this.account = Account(this.client);
    }

    async  createAccount(email,password,name){
        try{
                const userAccount = await this.account.create(ID.unique(),email,password,name);
                
                if(userAccount){
                    this.login({email,password});
                }
                else{
                    throw new Error("Account creation failed");
                }
        }
        catch(error){
            throw error;
        }
    }

    async  login({email , password}){
        try {
             return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
           return await this.account.get();
        } catch (error) {
            console.log("error in getting current user", error);
            return null;
        }
    }

    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}
const authService = new AuthService()
export default authService;