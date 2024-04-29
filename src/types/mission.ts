export enum MISSION_STATUS {
  IN_PROGRESS = "IN_PROGRESS",
  COMPLETED = "COMPLETED",
  UPCOMING = "UPCOMING",
}

export type Mission = {
  id: string;
  name: string;
  manufacturer: string;
  image: string;
  heroImage: string;
  launchYear: string;
  status: MISSION_STATUS;
  shortDescription: string;
  descFirstHalf: string[];
  descSecondHalf: string[];
};
