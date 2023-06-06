import {
    NewUserInfo,
    UserChangePassword,
    UserPublicInfo,
    UserSessionHolder,
    UserShortInfo,
} from "../entities/user";

export interface InterfaceUsersService {

    countAll(options: ListOptions): Promise<number>;

    getAll(options: ListOptions): Promise<UserShortInfo[]>;

    getOneInfo(id: number, options: ListOptions): Promise<UsersInfoGetResponse>;

    getUserByEmail(email: string): Promise<UserPublicInfo>;

    addUser(user: NewUserInfo, req: Request): Promise<UsersIdGetResponse>;

    putUser(user: NewUserInfo,
            userId: number,
            ifMatch: string): Promise<UsersIdPutResponse>;

    patchUser(user: NewUserInfo, userId: number): Promise<UsersIdPatchResponse>;

    deleteUser(userId: number): Promise<void>;




}


export interface InterfaceAuthService {

    login(credentials: UsersLoginPostBody, req: Request): Promise<UsersLoginPostResponse>;

    logoutUser(): Promise<void>;

    putUserPassword(credentials: UserChangePassword, req: Request): Promise<void>;


    putUserPasswordReset(email: string,
                         projectId: number,
                         req: Request): Promise<void>;
}

export interface InterfaceContactService {

}

export interface InterfaceEmailsService {

}

export const Services = {
    Emails: Symbol.for("EmailsService"),
    Contact: Symbol.for("ContactService"),
    Users: Symbol.for("UsersService"),
    Auth: Symbol.for("AuthService"),
};
