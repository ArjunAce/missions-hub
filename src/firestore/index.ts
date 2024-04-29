import { initializeApp } from "firebase/app";
import {
  Firestore,
  WhereFilterOp,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { Mission } from "../types/mission";

class FirestoreService {
  private db: Firestore;
  private COLLECTION_NAME: string = "missions";

  constructor() {
    // Will be read from .env or CI/CD vars
    const firebaseConfig = {
      apiKey: "AIzaSyCi7TamCJG1I0Tg4WHn0jSu_6maTj6jcT4",
      authDomain: "wordrush-f4be1.firebaseapp.com",
      databaseURL: "https://wordrush-f4be1.firebaseio.com",
      projectId: "wordrush-f4be1",
      storageBucket: "wordrush-f4be1.appspot.com",
      messagingSenderId: "537193414797",
      appId: "1:537193414797:web:33d01d609568295cae62c4",
      measurementId: "G-BRJ420R7KL",
    };

    const app = initializeApp(firebaseConfig);

    // Get a reference to the Firestore database service
    this.db = getFirestore(app);
  }

  async getAllMissions(): Promise<Mission[]> {
    try {
      const querySnapshot = await getDocs(collection(this.db, this.COLLECTION_NAME));
      const data: Mission[] = [];
      querySnapshot.forEach(doc => {
        data.push(doc.data() as Mission);
      });
      return data;
    } catch (error) {
      console.error("Error reading data:", error);
      throw error;
    }
  }
  async getMissionById(id: string): Promise<Mission> {
    try {
      const docRef = doc(this.db, this.COLLECTION_NAME, id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap.data() as Mission;
      } else {
        throw new Error("Mission not found");
      }
    } catch (error) {
      console.error("Error fetching mission details:", error);
      throw error;
    }
  }

  async readDataWithFilter(filters: { field: string; operator: WhereFilterOp; value: any }[]): Promise<Mission[]> {
    try {
      const { field, operator, value } = filters[0];
      const q = query(collection(this.db, this.COLLECTION_NAME), where(field, operator, value));
      const querySnapshot = await getDocs(q);
      const data: Mission[] = [];
      querySnapshot.forEach(doc => {
        console.log(doc.id, " => ", doc.data());
        data.push(doc.data() as Mission);
      });
      return data;
    } catch (error) {
      console.error("Error reading filtered data:", error);
      throw error;
    }
  }
}

export default FirestoreService;
