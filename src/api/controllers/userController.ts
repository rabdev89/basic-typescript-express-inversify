import { interfaces, controller, httpGet, httpPost, httpPut } from "inversify-express-utils";
import { NextFunction, Response } from "express";
import { inject } from "inversify";

@controller("/v1")
export class UsersController implements interfaces.Controller {
    

    @httpGet("/users")
    public async getAllUsers(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            
        } catch (err) {
            next(err);
        }

    }

    @httpGet("/users/:id")
    public async getOneUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            
        } catch (err) {
            next(err);
        }

    }

    @httpPut("/users/:id")
    public async updateUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            
        } catch (err) {
            next(err);
        }

    }

    @httpPatch("/users/:id")
    public async patchUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            
        } catch (err) {
            next(err);
        }

    }

    @httpDelete("/users/:id")
    public async deleteUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            
        } catch (err) {
            next(err);
        }

    }
    

    @httpGet("/me")
    public async getCurrentUser(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            
        } catch (err) {
            next(err);
        }

    }
}