export interface loginPageDataType {
  correctLogin: string;
  correctPassword: string;
  wrongLogin: string;
  wrongPassword: string;
}
export interface contactPageDataType {
  contactName: string;
  contactEmail: string;
  contactSubject: string;
  contactMessage: string;
  contactFile: string;
}
export interface registerPageDataType {
  notRegisterName: string;
  notRegisterEmail: string;
  registeredName: string;
  registeredEmail: string;
}

export interface registerFormDataType {
  gender: string;
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  company: string;
  country: string;
  state: string;
  city: string;
  zipCode: string;
  mobileNumber: string;
}
