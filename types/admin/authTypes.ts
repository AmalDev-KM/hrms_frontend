//admin login interface
export interface AdminLoginBody {
    email: string;
    password: string;
}

export interface AdminLoginResponse {
    saveStatus: boolean,
      message: string,
      token: string
}