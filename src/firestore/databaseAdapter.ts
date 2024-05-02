import FirestoreService from ".";

interface DatabaseAdapter {
  connect(): void;
  disconnect(): void;
}

export class FirestoreAdapter implements DatabaseAdapter {
  private firestoreSvc: FirestoreService | null;

  constructor() {
    this.firestoreSvc = null;
  }

  connect() {
    this.firestoreSvc = new FirestoreService();
    return this.firestoreSvc;
  }

  disconnect() {
    if (this.firestoreSvc) {
      this.firestoreSvc.closeConnection();
    }
  }
}
