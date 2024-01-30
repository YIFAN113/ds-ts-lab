export interface Friend {
  name: string;
  phone: string;
  dob? : Date;   // New
  age: number;
  interests? : string[]   // New
}

export interface EmailContact {
  name: string;
  email: string
}
export interface Colleague {
    name: string;
    department: string;
    contact: {
      email: string;
      extension: number
    } 
  }

export interface ColleagueHistory {
  current: Colleague[],
  former: Colleague[]
}