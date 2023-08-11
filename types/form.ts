type clientID = string;

export interface PlanForm {
  client: clientID | null;
  goal: string;
  experience: string;
  days: string;
  equipment: string[];
  sport: string;
  length: string;
  injuries: string[];
  createdAt?: Date;
}
