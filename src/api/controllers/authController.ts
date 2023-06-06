import { interfaces, controller, httpGet, httpPost, httpPut } from "inversify-express-utils";
import { NextFunction, Response } from "express";
import { inject } from "inversify";

@controller("/v1")
export class AuthController implements interfaces.Controller {
    

    @httpPost("/auth/login")
    public async userLogin(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            
        } catch (err) {
            next(err);
        }

    }

    @httpPost("/auth/register")
    public async registerCustomerAccount(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            
        } catch (err) {
            next(err);
        }

    }

    @httpDelete("/auth/reset-password")
    public async resetPassword(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            
        } catch (err) {
            next(err);
        }

    }

    @httpPut("/auth/request-password-reset")
    public async requestPasswordReset(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            
        } catch (err) {
            next(err);
        }

    }

    @httpDelete("/auth/logout")
    public async logout(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            
        } catch (err) {
            next(err);
        }

    }
    

    @httpGet("/auth/me")
    public async getCurrentUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            
        } catch (err) {
            next(err);
        }

    }
}