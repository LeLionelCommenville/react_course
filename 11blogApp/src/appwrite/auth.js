import { Client, Account, ID } from "appwrite";
import conf from "../conf/conf.js"

export class AuthService {
    client = new Client();
    account;
    
    constructor() {
        this.client
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.acount = new Account(this.client)
    }
    
    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account
            .create(ID.unique(), email, password, name)
            if (userAccount) {
                return this.login({email, password})
            } else {
                return userAccount
            }
        } catch (error) {
            throw error 
        }
    }

    async login({email, password}){
        try {
            return await this.account.createEmailSession
            (email, password)
        } catch (error) {
            throw error
        }
    }

    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser() ::", error)
        }
        return null
    }
    async logout(){
        try {
            await this.acount.deleteSessions()
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser() ::", error)
        }
    }
}

const authService = new AuthService();

export default authService