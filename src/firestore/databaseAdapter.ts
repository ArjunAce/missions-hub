import FirestoreService from ".";

interface DatabaseAdapter {
  connect(): void;
  disconnect(): void;
}

export class FirestoreAdapter implements DatabaseAdapter {
  connect() {
    return new FirestoreService();
  }

  disconnect() {
    // Disconnect Firestore
  }
}
