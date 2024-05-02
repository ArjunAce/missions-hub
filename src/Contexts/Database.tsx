import { createContext, useEffect, useState } from "react";
import DatabaseServiceFactory, { DATABASES, DatabaseService } from "../firestore/DatabaseServiceFactory";

export const DatabaseContext = createContext<undefined | DatabaseService>(undefined);

const DatabaseProvider = ({ children }: { children: React.ReactNode }) => {
  const [database, setDatabase] = useState<DatabaseService>();
  useEffect(() => {
    const dbService = DatabaseServiceFactory.createDatabaseService(DATABASES.FIRESTORE);
    setDatabase(dbService);
    return () => {
      dbService.disconnect();
    };
  }, []);

  return <DatabaseContext.Provider value={database}>{children}</DatabaseContext.Provider>;
};

export default DatabaseProvider;
