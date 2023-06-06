import { startServer } from "./server";

(async (): Promise<boolean> => {
    await startServer();
    return true;
})().finally(() => true);