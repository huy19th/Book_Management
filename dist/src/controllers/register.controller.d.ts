declare class RegisterController {
    showFormRegister(req: any, res: any): void;
    register(req: any, res: any): Promise<void>;
}
declare let registerController: RegisterController;
export default registerController;
