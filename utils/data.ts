const filePath = "./utils/example.png";
import { loginPageDataType, contactPageDataType, registerPageDataType } from "../types/interfaces";
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

export { loginPageData, contactPageData, registerPageData };
