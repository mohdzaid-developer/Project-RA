import "./refundPolicy.scss";

const RefundPolicy = () => {
  const refundPolicyPoints = [
    {
      title: "Introduction",
      details:
        "Purpose: Explain the purpose of the refund policy and why it is important. Scope: Indicate which products or services the refund policy applies to.",
    },
    {
      title: "Eligibility",
      details:
        "Conditions: Specify the conditions under which refunds are eligible (e.g., defective products, unsatisfactory service). Timeframe: Outline the timeframe within which a refund request must be made.",
    },
    {
      title: "Refund Process",
      details:
        "Procedure: Describe the steps to request a refund (e.g., submitting a form, contacting customer service). Documentation: Detail any required documentation or proof for processing a refund.",
    },
    {
      title: "Refund Amount",
      details:
        "Full Refund: Conditions under which a full refund is provided. Partial Refund: Conditions under which a partial refund may be granted. Deductions: Any deductions or fees that may apply to the refund amount.",
    },
    {
      title: "Non-Refundable Items",
      details:
        "List: Specify any items or services that are not eligible for a refund (e.g., digital products, clearance items).",
    },
    {
      title: "Refund Method",
      details:
        "Method: Explain how refunds will be issued (e.g., original payment method, store credit). Processing Time: Provide an estimate of how long it will take to process a refund.",
    },
    {
      title: "Exceptions",
      details:
        "Special Cases: Outline any exceptions or special cases where the standard refund policy does not apply (e.g., customized products, special promotions).",
    },
    {
      title: "Contact Information",
      details:
        "Contact Methods: Provide contact details for refund-related inquiries (e.g., email address, phone number).",
    },
    {
      title: "Policy Changes",
      details:
        "Notification: Explain how users will be informed of changes to the refund policy (e.g., via email, website updates). Effective Date: State when changes to the policy will take effect.",
    },
  ];

  return (
    <div className="refund-policy">
      <div className="hero">
        <h2>Refund Policy</h2>
      </div>

      <div className="content">
        {refundPolicyPoints.map((item, index) => (
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

export default RefundPolicy;
