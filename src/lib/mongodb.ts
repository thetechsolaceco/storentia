import { MongoClient, type Collection } from 'mongodb';
import { requireEnv } from './env';

export interface ContactSubmission {
  name: string;
  email: string;
  subject: string;
  message: string;
  ip: string;
  createdAt: Date;
}

declare global {
  var _mongoClient: MongoClient | undefined;
}

function getClient(): MongoClient {
  const uri = requireEnv('MONGODB_URI');

  if (process.env.NODE_ENV === 'development') {
    if (!global._mongoClient) {
      global._mongoClient = new MongoClient(uri);
    }
    return global._mongoClient;
  }

  return new MongoClient(uri);
}

export async function getContactsCollection(): Promise<Collection<ContactSubmission>> {
  const client = getClient();
  await client.connect();
  return client.db('storentia').collection<ContactSubmission>('contact_submissions');
}
