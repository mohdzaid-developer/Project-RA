import "./privacyPolicy.scss";

const PrivacyPolicy = () => {
  const privacyPolicyPoints = [
    {
      title: "Introduction",
      details:
        "Purpose: Explain the overall goal of the privacy policy and why it is important. Commitment: State the company’s dedication to safeguarding user privacy and data security. Scope: Indicate which services or products the privacy policy applies to.",
    },
    {
      title: "Data Collection",
      details:
        "Types of Data: Specify categories of data collected, such as personal information (name, email), financial information (credit card details), and browsing data (IP addresses, cookies). Collection Methods: Describe how data is collected (e.g., forms, tracking technologies, user interactions).",
    },
    {
      title: "Data Usage",
      details:
        "Purposes: Detail the purposes for which data is used, such as improving services, personalizing user experience, sending marketing communications, or for analytics. Legal Basis: Outline the legal basis for data processing (e.g., user consent, contractual necessity, legitimate interests).",
    },
    {
      title: "Data Sharing",
      details:
        "Third Parties: List third-party entities with whom data is shared, such as partners, service providers, or affiliates. Purpose of Sharing: Explain why data is shared with these entities (e.g., payment processing, analytics). Safeguards: Describe measures in place to ensure that third parties handle data securely.",
    },
    {
      title: "User Rights",
      details:
        "Access: Users’ right to access their personal data and obtain a copy. Correction: Users’ right to correct or update inaccurate data. Deletion: Users’ right to request deletion of their data under certain conditions. Objection and Restriction: Users’ right to object to or restrict certain types of data processing.",
    },
    {
      title: "Cookies and Tracking",
      details:
        "Types of Cookies: Explain different types of cookies used (e.g., session cookies, persistent cookies, third-party cookies). Purpose: Describe the purposes of cookies (e.g., functionality, analytics, advertising). Control: Provide information on how users can manage or disable cookies.",
    },
    {
      title: "Data Security",
      details:
        "Measures: Detail security measures in place to protect data (e.g., encryption, access controls). Breach Response: Describe the procedures for responding to data breaches and notifying affected users.",
    },
    {
      title: "Data Retention",
      details:
        "Retention Periods: Specify how long data is retained and the criteria used to determine retention periods. Deletion: Describe processes for data deletion once it is no longer needed.",
    },
    {
      title: "Changes to Policy",
      details:
        "Notification: Explain how users will be notified of changes to the privacy policy (e.g., via email, website updates). Effective Date: State when changes to the policy will take effect.",
    },
    {
      title: "Contact Information",
      details:
        "Contact Methods: Provide contact details for privacy-related inquiries (e.g., email address, phone number). Responsibility: Identify the department or individual responsible for handling privacy concerns.",
    },
  ];

  return (
    <div className="privacy-policy">
      <div className="hero">
        <h2>Privacy Policy</h2>
      </div>

      <div className="content">
        {privacyPolicyPoints.map((item, index) => (
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

export default PrivacyPolicy;
