// class to store general api errors
export class ApiError {
    message: string;

    constructor(message: string) {
        this.message = message;
    }
}