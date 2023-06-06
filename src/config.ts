export enum EnumEnvironments {
    local = "local",
    development = "development",
    stage = "stage",
    production = "production",
}


const config = {
    siteBaseUrl: process.env.SITE_BASE_URL || "",

    environment: process.env.NODE_ENV || EnumEnvironments.local, // local, development, stage, production

    server: {
        host: process.env.SERVER_HOST || null,
        port: process.env.SERVER_PORT ? Number(process.env.SERVER_PORT) : 3099,
    },
}

export default config;