"use server";
import { MongoClient, MongoError } from "mongodb";
import { uri } from ".";

export interface ContactFormType {
  name: string;
  email: string;
  phone: string;
  message: string;
}

async function SubmitContactForm(data: ContactFormType) {
  const collectionName = "contact_messages";
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

export default SubmitContactForm;
