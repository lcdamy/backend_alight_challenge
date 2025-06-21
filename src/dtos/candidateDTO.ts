export interface CandidateCreateDTO {
  names: string;
  gender: "male" | "female";
  email: string;
  phoneNumber?: string;
  title?: string;
  linkedinURL?: string;
  profileURL?: string;
  tranings?: string;
  documentation?: string;
  supervisor?: string;
  project?: string;
  educations?: object[];
  experiences?: object[];
}


