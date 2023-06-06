import { Application } from "express";
import * as express from "express";
import { InversifyExpressServer } from "inversify-express-utils";
import { interfaces } from "inversify";
import config from "./config";
import { setupConfig } from "./api/routers";

export async function startServer(container: interfaces.Container,
    hostname: string,
    serverPort: number): Promise<InversifyExpressServer> {
    
        console.info("Server is starting");

        return new Promise<InversifyExpressServer>((resolve, reject) => {
            const server = createExpressApplication(container);

            const createServer = require("http").createServer(server);
            createServer.listen(serverPort, hostname, (err) => {
                if (err) {
                    return reject(err);
                }
                resolve(server);
                console.info("API listening on " + serverPort);
            });
        });
    
}


export function createExpressApplication(container: interfaces.Container): Application {
    return new InversifyExpressServer(container)
        .setConfig((app) => {
            setupConfig(app, container);
        }).build();
}
