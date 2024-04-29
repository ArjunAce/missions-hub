import { createContext, useEffect } from "react";
import { FirestoreAdapter } from "../../firestore/databaseAdapter";
import FirestoreService from "../../firestore";

export const DatabaseContext = createContext<null | FirestoreService>(null);

let db: null | FirestoreService = null;

const DatabaseProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const dbAdapter = new FirestoreAdapter();
    db = dbAdapter.connect();
    return dbAdapter.disconnect;
  }, []);

  return <DatabaseContext.Provider value={db}>{children}</DatabaseContext.Provider>;
};

export default DatabaseProvider;
