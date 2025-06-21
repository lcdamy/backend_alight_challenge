export interface JobDTO {
  position: string;
  positionLeft:number;
  applicants: number;
  interviewed: number;
  rejected: number;
  feedbackPending: number;
  offered: number;
  description: string;
  requirements: string[];
  responsabilities: string[];
  applicationDeadline: Date;
  applicationLink: string;
  status?: "open" | "closed";
}


