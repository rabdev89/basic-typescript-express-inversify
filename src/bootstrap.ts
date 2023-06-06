import { Container } from "inversify";
import { Services } from "./services/services";

const container: Container = new Container();



container.bind<EmailsService>(Services.Emails).to(EmailsService).inSingletonScope();