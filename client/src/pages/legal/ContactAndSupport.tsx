import { Navigate, useParams } from "react-router-dom";

function ContactAndSupport() {
  const { section } = useParams();

  const sections = {
    "contact-information": (
      <>
        <section id="contact-information">
          {/* <h2>5.1 Contact Information</h2> */}

          <h3 className="heading">Summary</h3>
          <p>
            SynapseBook welcomes questions, feedback, support requests, and
            reports regarding the Service. Users may contact us using the
            information provided below.
          </p>

          <h3 className="heading">A. General Support</h3>
          <ul className="list">
            <li>
              Users may contact SynapseBook for account assistance, technical
              issues, policy questions, or general inquiries.
            </li>
            <li>
              We aim to respond to legitimate inquiries within a reasonable
              timeframe.
            </li>
          </ul>

          <h3 className="heading">B. Contact Methods</h3>
          <ul className="list">
            <li>
              Support Email:
              <a href="mailto:support@synapsebook.com">
                support@synapsebook.com
              </a>
            </li>
            <li>
              Website:
              <a href="https://synapsebook.com">
                https://synapsebook.com
              </a>
            </li>
          </ul>

          <h3 className="heading">C. Business Communications</h3>
          <ul className="list">
            <li>
              Official notices, policy-related inquiries, and other important
              communications may be directed through the contact channels
              provided by SynapseBook.
            </li>
          </ul>

          <h3 className="heading">D. Response Expectations</h3>
          <ul className="list">
            <li>
              Response times may vary depending on request volume, complexity,
              and available resources.
            </li>
            <li>
              Submission of a request does not guarantee a specific outcome or
              resolution.
            </li>
          </ul>
        </section>
      </>
    ),

    "bug-reports": (
      <>
        <section id="bug-reports">
          {/* <h2>5.2 Bug Reports</h2> */}

          <h3 className="heading">Summary</h3>
          <p>
            SynapseBook encourages users to report bugs, technical issues, and
            unexpected behavior to help improve the reliability and quality of
            the Service.
          </p>

          <h3 className="heading">A. Reporting Bugs</h3>
          <ul className="list">
            <li>
              Users may submit reports regarding application errors, broken
              functionality, performance issues, or unexpected behavior.
            </li>
            <li>
              Reports should include sufficient detail to allow investigation and
              reproduction of the issue where possible.
            </li>
          </ul>

          <h3 className="heading">B. Recommended Information</h3>
          <ul className="list">
            <li>
              Description of the issue encountered.
            </li>
            <li>
              Steps required to reproduce the issue.
            </li>
            <li>
              Expected behavior and actual behavior.
            </li>
            <li>
              Browser, operating system, device, or environment details where
              relevant.
            </li>
            <li>
              Screenshots, logs, or additional supporting information when
              available.
            </li>
          </ul>

          <h3 className="heading">C. Investigation Process</h3>
          <ul className="list">
            <li>
              SynapseBook may review, prioritize, and investigate reported
              issues based on severity, impact, and available resources.
            </li>
            <li>
              Additional information may be requested to assist with diagnosis
              and resolution.
            </li>
          </ul>

          <h3 className="heading">D. No Guarantee</h3>
          <ul className="list">
            <li>
              Submission of a bug report does not guarantee immediate fixes,
              feature changes, or implementation timelines.
            </li>
          </ul>
        </section>
      </>
    ),

    "feature-requests": (
      <>
        <section id="feature-requests">
          {/* <h2>5.3 Feature Requests</h2> */}

          <h3 className="heading">Summary</h3>
          <p>
            SynapseBook welcomes suggestions and ideas that may improve the
            Service. User feedback helps guide future development and product
            improvements.
          </p>

          <h3 className="heading">A. Submitting Requests</h3>
          <ul className="list">
            <li>
              Users may suggest new features, improvements, workflow
              enhancements, integrations, or usability changes.
            </li>
            <li>
              Requests should clearly describe the proposed functionality and its
              intended benefit.
            </li>
          </ul>

          <h3 className="heading">B. Review Process</h3>
          <ul className="list">
            <li>
              Feature requests may be reviewed and considered as part of product
              planning and development activities.
            </li>
            <li>
              Evaluation may consider user demand, technical feasibility,
              security implications, platform goals, and available resources.
            </li>
          </ul>

          <h3 className="heading">C. No Obligation</h3>
          <ul className="list">
            <li>
              Submission of a feature request does not create an obligation for
              SynapseBook to implement, prioritize, or respond to the request.
            </li>
            <li>
              SynapseBook reserves the right to determine which features are
              developed, modified, postponed, or rejected.
            </li>
          </ul>

          <h3 className="heading">D. Feedback License</h3>
          <ul className="list">
            <li>
              By submitting suggestions, ideas, feedback, or feature requests,
              you grant SynapseBook the right to use, modify, evaluate, and
              implement such feedback without compensation, attribution, or
              restriction.
            </li>
          </ul>
        </section>
      </>
    ),

    "security-reports": (
      <>
        <section id="security-reports">
          {/* <h2>5.4 Security Reports</h2> */}

          <h3 className="heading">Summary</h3>
          <p>
            SynapseBook encourages responsible reporting of security
            vulnerabilities, suspicious activity, and other security concerns.
            Prompt reporting helps us protect users, maintain platform security,
            and address issues effectively.
          </p>

          <h3 className="heading">A. What to Report</h3>
          <ul className="list">
            <li>
              Security vulnerabilities or weaknesses affecting the Service.
            </li>
            <li>
              Unauthorized access attempts or suspicious account activity.
            </li>
            <li>
              Potential data exposure, security misconfigurations, or system
              integrity concerns.
            </li>
            <li>
              Malware, phishing attempts, or malicious content associated with
              the Service.
            </li>
          </ul>

          <h3 className="heading">B. Submitting a Security Report</h3>
          <ul className="list">
            <li>
              Reports should include sufficient technical details to assist with
              investigation and validation.
            </li>
            <li>
              Include relevant information such as affected functionality,
              reproduction steps, screenshots, logs, or supporting evidence where
              available.
            </li>
          </ul>

          <h3 className="heading">C. Responsible Disclosure</h3>
          <ul className="list">
            <li>
              Security issues should be reported privately and responsibly.
            </li>
            <li>
              Users should not publicly disclose vulnerabilities before
              SynapseBook has had a reasonable opportunity to investigate and
              address the issue.
            </li>
            <li>
              Security research must not involve unauthorized access, data
              modification, service disruption, or actions that may harm users or
              systems.
            </li>
          </ul>

          <h3 className="heading">D. Security Contact</h3>
          <ul className="list">
            <li>
              Security reports may be submitted to:
              <a href="mailto:security@synapsebook.com">
                security@synapsebook.com
              </a>
            </li>
            <li>
              SynapseBook may request additional information to assist with
              investigation and remediation.
            </li>
          </ul>
        </section>

      </>
    ),

    "policy-updates": (
      <>
        <section id="policy-updates">
          {/* <h2>5.5 Policy Updates</h2> */}

          <h3 className="heading">Summary</h3>
          <p>
            SynapseBook may update its policies, guidelines, and documentation
            from time to time to reflect changes in legal requirements, security
            practices, platform functionality, or business operations.
          </p>

          <h3 className="heading">A. Policy Revisions</h3>
          <ul className="list">
            <li>
              Policies may be modified, revised, replaced, or supplemented at
              any time.
            </li>
            <li>
              Updates may be introduced to improve clarity, address legal
              obligations, enhance security, or support new platform features.
            </li>
          </ul>

          <h3 className="heading">B. Notification of Changes</h3>
          <ul className="list">
            <li>
              Significant policy changes may be communicated through the Service,
              email notifications, announcements, or other reasonable methods.
            </li>
            <li>
              Each policy document may include a "Last Updated" date indicating
              when revisions were most recently made.
            </li>
          </ul>

          <h3 className="heading">C. User Responsibility</h3>
          <ul className="list">
            <li>
              Users are encouraged to periodically review published policies and
              documentation.
            </li>
            <li>
              Continued use of the Service following the effective date of policy
              changes may constitute acceptance of the updated policies where
              permitted by applicable law.
            </li>
          </ul>

          <h3 className="heading">D. Previous Versions</h3>
          <ul className="list">
            <li>
              SynapseBook may maintain historical versions of policy documents
              for transparency and reference purposes.
            </li>
            <li>
              Unless otherwise stated, the most recent version of a policy shall
              govern its interpretation and application.
            </li>
          </ul>
        </section>
      </>
    ),
  };

  const content =
    sections[section as keyof typeof sections];

  if (!content) {
    return (
      <Navigate
        to="/site-policy/terms-of-service/acceptance-of-terms"
        replace
      />
    );
  }

  return <>{content}</>;
}

export default ContactAndSupport;