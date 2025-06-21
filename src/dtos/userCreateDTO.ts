export interface UserCreateDTO {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  role: string;
  registrationType?: string; 
  user_status?: string;
  profilePictureURL?: string;
}
  

