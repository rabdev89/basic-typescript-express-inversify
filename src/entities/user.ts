export interface NewUserInfo {
    firstName: string;
    lastName: string;
    emailAddress: string;
    password: string;
    isActive?: boolean;
    male?: string;
    phone?: string;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface UserChangePassword {
    oldPassword: string;
    newPassword: string;
    repeatPassword: string;
    token: string;
}


export interface UserPublicInfo {
    id: number;
    isActive: boolean;
    firstName: string;
    lastName: string;
}

export interface UserSessionHolder {
    userId: number;
    sessionId: number;
}


export interface UserShortInfo {
    id: number;
    isActive: boolean;
    email: string;
    firstName: string;
    lastName: string;
    birthDay: string;
    male: string;
    phone: string;
    description: string;
    currencyCode: string;
    languageCode: string;
    countryCode: string;
    createdAt: string;
    updatedAt: string;
    defaultCampaignCategory: string;
    defaultPaymentType: string;
    hasGoogleAccount?: boolean;
    hasFacebookAccount?: boolean;
}
