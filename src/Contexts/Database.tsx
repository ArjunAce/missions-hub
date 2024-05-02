import { createContext, useEffect, useState } from "react";
import FirestoreService from "../firestore";
import { FirestoreAdapter } from "../firestore/databaseAdapter";

export const DatabaseContext = createContext<undefined | FirestoreService>(undefined);

const DatabaseProvider = ({ children }: { children: React.ReactNode }) => {
  const [database, setDatabase] = useState<FirestoreService>();
  useEffect(() => {
    const dbAdapter = new FirestoreAdapter();
    setDatabase(dbAdapter.connect());
    return () => {
      dbAdapter.disconnect();
    };
  }, []);

  return <DatabaseContext.Provider value={database}>{children}</DatabaseContext.Provider>;
};

export default DatabaseProvider;
