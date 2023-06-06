import * as express from "express";
import { interfaces } from "inversify";

export function setupConfig(app: express.Application, container: interfaces.Container): express.Application {
    return app;

}