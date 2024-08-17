import "./termsAndConditions.scss";

const TermsAndConditions = () => {
  const termsAndConditionsPoints = [
    {
      title: "Introduction",
      details:
        "Purpose: Explain the purpose of the terms and conditions and why they are important. Scope: Indicate which services or products the terms and conditions apply to.",
    },
    {
      title: "Acceptance",
      details:
        "Agreement: Describe how users agree to the terms and conditions (e.g., by using the service, creating an account). Modifications: Explain how the terms and conditions may be updated and how users will be informed.",
    },
    {
      title: "User Responsibilities",
      details:
        "Conduct: Outline expected user behavior and prohibited activities (e.g., illegal activities, abusive behavior). Account Security: Detail user responsibilities for maintaining the security of their account.",
    },
    {
      title: "Intellectual Property",
      details:
        "Ownership: Specify the ownership of intellectual property rights related to the service or products. Usage Rights: Describe any permissions or restrictions on the use of intellectual property.",
    },
    {
      title: "Limitation of Liability",
      details:
        "Disclaimer: Limit the company’s liability for issues related to the use of the service or products. Exclusions: Specify any exclusions or limitations on liability.",
    },
    {
      title: "Termination",
      details:
        "Conditions: Describe the conditions under which the company can terminate or suspend a user’s access. Consequences: Outline the consequences of termination (e.g., loss of access, data deletion).",
    },
    {
      title: "Governing Law",
      details:
        "Jurisdiction: Specify the governing law and jurisdiction that apply to the terms and conditions. Dispute Resolution: Outline the process for resolving disputes (e.g., arbitration, court proceedings).",
    },
    {
      title: "Contact Information",
      details:
        "Contact Methods: Provide contact details for inquiries related to the terms and conditions (e.g., email address, phone number).",
    },
    {
      title: "Policy Changes",
      details:
        "Notification: Explain how users will be notified of changes to the terms and conditions (e.g., via email, website updates). Effective Date: State when changes to the policy will take effect.",
    },
  ];

  return (
    <div className="terms-and-conditions">
      <div className="hero">
        <h2>Terms & Conditions</h2>
      </div>

      <div className="content">
        {termsAndConditionsPoints.map((item, index) => (
          <div className="data">
            <h3>
              {index + 1}. {item.title} :
            </h3>
            <p>{item.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TermsAndConditions;
