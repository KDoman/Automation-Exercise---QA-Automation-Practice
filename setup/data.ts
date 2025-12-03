const filePath = "./setup/example.png";

interface loginPageDataType {
  correctLogin: string;
  correctPassword: string;
  wrongLogin: string;
  wrongPassword: string;
}

const loginPageData: loginPageDataType = {
  correctLogin: "doman99999999@wp.pl",
  correctPassword: "admin",
  wrongLogin: "wroong@l0GIN.no",
  wrongPassword: "wroongPassW0Rd",
};

interface contactPageDataType {
  contactName: string;
  contactEmail: string;
  contactSubject: string;
  contactMessage: string;
  contactFile: string;
}

const contactPageData: contactPageDataType = {
  contactName: "Admin",
  contactEmail: "Admin@admin.admin",
  contactSubject: "This is test",
  contactMessage: "Hello im learning QA Automation in playwright.",
  contactFile: filePath,
};

export { loginPageData, contactPageData };
