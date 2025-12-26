const filePath = "./utils/example.png";
import { loginPageDataType, contactPageDataType, registerPageDataType, registerFormDataType } from "../types/interfaces";
import { randomString } from "./helpers";

const loginPageData: loginPageDataType = {
  correctLogin: "doman99999999@wp.pl",
  correctPassword: "admin",
  wrongLogin: "wroong@l0GIN.no",
  wrongPassword: "wroongPassW0Rd",
};

const contactPageData: contactPageDataType = {
  contactName: "Admin",
  contactEmail: "Admin@admin.admin",
  contactSubject: "This is test",
  contactMessage: "Hello im learning QA Automation in playwright.",
  contactFile: filePath,
};

const registerPageData: registerPageDataType = {
  notRegisterName: randomString(7),
  notRegisterEmail: randomString(8) + "@" + randomString(5),
  registeredName: loginPageData.correctPassword,
  registeredEmail: loginPageData.correctLogin,
};

const registerForm: registerFormDataType = {
  gender: "Mr.",
  firstName: "first name" + randomString(5),
  lastName: "last name" + randomString(5),
  address1: "address1" + randomString(5),
  address2: "address2" + randomString(5),
  company: "company" + randomString(5),
  country: "United States",
  state: "state_QA",
  city: "city_QA",
  zipCode: "00-111",
  mobileNumber: "111-222-333",
};

export { loginPageData, contactPageData, registerPageData, registerForm };
