/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IUserData {
  directorVerified: boolean;
  email: string;

  mainApplicant: {
    directors: [
      {
        firstName: string;
      },
    ];
  };
  results?: {
    remiterID?: string;
    // Add other properties as needed
    rejected?: boolean;
    emailVerfied?: boolean;
    isVerified: boolean;
    userDetailsExist?: boolean;
    phoneVerfied?: boolean;
    phoneNumber?: string;
    lastName?: string;
    firstName?: string;
    dateOfBirth?: string;
    email?: string;
   
    // Add other properties as needed
  };
  checkApplicant: boolean;
  firstName: string;
  lastName: string;

  dateOfBirth: string;
  phoneNumber: string;
  jwttoken: string;
  balance: number;
  userName: string;
  details: {
    firstName: string;
    lastName: string;
    email: string;
    balance: number;
    dateOfBirth: string;
  };
  gbg: {
    steps: {
      idfront: { uploaded: boolean; isFailed: boolean };
      BackNotRequired: boolean;
      idback: {
        uploaded: boolean;
        isFailed: boolean;
        BackNotRequired: boolean;
      };
      poa: { uploaded: boolean; isFailed: boolean };
      selfie: { uploaded: boolean; isFailed: boolean };
    };
  };
  emailVerified: boolean;
  isVerified: boolean;
  mobileVerified: boolean;
  kycStatus: number;
  role: string;
  isBlocked: boolean;
  _id: string;
  token: string;
  workflowId: string | null;
  workFlowFailedMessage: string | null;
  passCode: string | null;
  isDeleted: boolean;
}

export interface IUserState {
  data: IUserData | null;
  uploadData: IUserData | null;
  accessToken: '';
soundPause:boolean;
  email: string | null;
  codeCountry: string;
  phoneNumber: string;
  signUpPhone: string;
  loading: false;
  error: null;
  averageRatingData:{
    averageRating:number,
    rating:number,
    date:string,
    }
  currentData: IUserData | null;
  setCountry: string;
  getBank?: string;
}
export interface IPayeeData {
  name: string;
  firstName: string;
  middleName: string;
  lastName: string;
  address: string;
  city: string;
  state: string;
  postalCode: string;
  mobileNumber: string;
  email: string;
  loading: false;
  error: null;
  currentData: IUserData | null;
  country?: string;
  getBank?: Array<object>;
  selectedBank: object;
}
export interface ApiResponse {
  source_currency: string;
  source_amount: string;
  rate: string;
  destination_currency: string;
  destination_amount: string;
  commission: string;
  agent_fee: string;
  hq_fee: string;
  total_charges: string;
  tax: string;
}
export interface IPayeeState {
  data: IPayeeData | null;

  accessToken: '';

  selectedBank: object;
  
 

}

export interface IUserSignupData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  password: string;
  confirmPassword: string;
}
// 3
export interface ISigninData {
  email: string;
  password: string;
}
// 1
export interface IAuthOTPData {
  otp: number;
  email: string;
  type?: string;
  notificationToken?: string;
  deviceId?: string | null;
}
// 2
export interface IAuthOTPResendData {
  email: string;
  type: string;
}
export interface Bank {
  bank_id: string;
  name: string;
  country_id: string;
  bank_code: string;
  swift_code: string;
  address: string;
  city: string;
  state: string;
  telephone: string;
  account_number_mask: string;
  enabled: string;
  third_party_id: string;
  third_party_name: string;
  third_party_code: string;
}
export interface DeliveryBanks {
  delivery_bank: Bank[];
}
export interface Result {
  responseId: string;
  status: string;
  result: {
    delivery_banks: DeliveryBanks;
  };
}
export interface TransactionResponse {
  status: number;
  success: boolean;
  message: string;
  type: string;
  results: {
    response: Result;
  };
}
export interface IAPIError {
  name: string;
  status: number;
  success: boolean;
  error: boolean;
  message: string;
}
