import FirestoreService, { FirestoreFilters } from ".";
import { Mission } from "../types/mission";
import { Params } from "../utils";

export interface DatabaseService {
  connect(): void;
  disconnect(): void;
  getAllMissions(): Promise<Mission[]>;
  getMissionById(id: string): Promise<Mission>;
  getFilteredMissions(filters: FirestoreFilters): Promise<Mission[]>;
  getFirestoreFiltersFromParams(queryParams: Params): FirestoreFilters;
}

export const DATABASES = {
  FIRESTORE: "firestore",
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
