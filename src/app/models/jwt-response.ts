export interface JwtResponse {
  dataUser: {
    id: number;
    name: string;
    email: string;
    accsessToken: string;
    expiresIn: string;
  };
}
