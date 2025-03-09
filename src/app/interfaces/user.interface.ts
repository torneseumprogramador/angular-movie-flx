export interface User {
    email: string;
    password: string;
}

export interface UserRegister extends User {
    name: string;
}

export interface UserResponse {
    token: string;
} 