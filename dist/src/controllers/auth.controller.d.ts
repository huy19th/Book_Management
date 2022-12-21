declare class AuthController {
    showFormLogIn(req: any, res: any): void;
    authenticate(req: any, res: any): Promise<any>;
    showFormLogInGoogle(): void;
    googleAuthenticate(): void;
}
declare let authController: AuthController;
export default authController;
