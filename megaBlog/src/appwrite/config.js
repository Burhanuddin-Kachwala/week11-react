/* eslint-disable no-unused-vars */

import { Client,Databases,ID,Storage,Query } from "appwrite";
import conf from "../conf/conf";

export class Service {
    client = new Client();
    databases ;bucket;

    constructo(){
        this.client.
        setEndpoint(conf.appwriteUrl).
        setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }
    async createPost({title,slug,content,featureImage,status,userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug, // taking slug as unique document id,
                {
                    title,                  
                    content,
                    featureImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            console.log("error in creating post",error);
        }      
    }
    async updatePost(slug,{title,content,featureImage,status}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,{
                    title,                  
                    content,
                    featureImage,
                    status
                }
            )
        } catch (error) {
            console.log("error in updating post",error);
        }
    }
    async deletePost(slug){
        try {
                await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("error in deleting post",error);
            return false;
        }
    }

    //get single post
    async getPost(slug){
        try {
                await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("error in getting post",error);
            return false;
        }
    }
    // get all posts
    async getPosts(queries = [Query.equal('status','active')]){
        // a default  query is added to get only active posts
        try {
            return this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("error in getting posts",error);
            return false;
        }
    }
    // upload file to bucket
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("error in uploading image",error);
            return false;
        }
    }

    //delete file from bucket
    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("error in deleting File",error);
            return false;
        }
    }

    //get preview
    async getPreview(fileId){
        try {
            return await this.bucket.getFilePreview(
                conf.appwriteBucketId,
                fileId
            )
        } catch (error) {
            console.log("error in getting preview",error);
            return false;
        }
    }

}
const service = new Service()
export default service