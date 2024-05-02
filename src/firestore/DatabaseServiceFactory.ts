import FirestoreService from ".";

export interface DatabaseService {
  connect(): void;
  disconnect(): void;
}

export const DATABASES = {
  FIRESTORE: "firestore"
};

export default class DatabaseServiceFactory {
  static createDatabaseService(databaseType: string) {
    switch (databaseType) {
      case DATABASES.FIRESTORE:
        return new FirestoreService();
      default:
        throw new Error("Invalid database type");
    }
  }
}
