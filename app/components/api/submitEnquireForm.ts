"use server";
import { MongoClient, MongoError } from "mongodb";
import { uri } from ".";

export interface EnquiryFormType {
  name: string;
  email: string;
  message: string;
}

async function SubmitEnquiryForm(data: EnquiryFormType) {
  const collectionName = "enquiry_messages";
  try {
    const client = await MongoClient.connect(uri!);
    const db = client.db("zeuss_trader");
    await db.collection(collectionName).insertOne(data);
    client.close();
  } catch (error) {
    if (error instanceof MongoError) {
      console.log(error.message);
    } else {
      console.log(error as string);
    }
  }
}
export default SubmitEnquiryForm;
