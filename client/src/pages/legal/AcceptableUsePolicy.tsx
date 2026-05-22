import { Navigate, useParams } from "react-router-dom";

function AcceptableUsePolicy() {
  const { section } = useParams();

  const sections = {
    "prohibited-activities": (
      <>
        <section id="prohibited-activities">
          {/* <h2>4.1 Prohibited Activities</h2> */}

          <h3 className="heading">Summary</h3>
          <p>
            SynapseBook must be used lawfully and responsibly. Users may not use
            the Service in ways that harm other users, compromise security,
            violate laws, or interfere with the operation of the platform.
          </p>

          <h3 className="heading">A. Unauthorized Access</h3>
          <ul className="list">
            <li>
              Attempting to gain unauthorized access to accounts, systems,
              databases, networks, or infrastructure.
            </li>
            <li>
              Circumventing authentication mechanisms, security controls, or
              access restrictions.
            </li>
            <li>
              Accessing information that does not belong to you without proper
              authorization.
            </li>
          </ul>

          <h3 className="heading">B. Illegal Activities</h3>
          <ul className="list">
            <li>
              Using the Service for any unlawful purpose or in violation of
              applicable laws and regulations.
            </li>
            <li>
              Facilitating fraudulent, deceptive, or misleading activities.
            </li>
          </ul>

          <h3 className="heading">C. Platform Misuse</h3>
          <ul className="list">
            <li>
              Interfering with, disrupting, or damaging the normal operation of
              the Service.
            </li>
            <li>
              Attempting to overload, stress test, or degrade platform
              performance without authorization.
            </li>
            <li>
              Using automated tools in a manner that negatively affects the
              availability or stability of the Service.
            </li>
          </ul>

          <h3 className="heading">D. Impersonation and Misrepresentation</h3>
          <ul className="list">
            <li>
              Impersonating another person, organization, or entity.
            </li>
            <li>
              Providing false or misleading account information.
            </li>
            <li>
              Misrepresenting your identity, affiliation, or authority.
            </li>
          </ul>

          <h3 className="heading">E. Violation of Policies</h3>
          <ul className="list">
            <li>
              Engaging in conduct that violates the Terms of Service, Privacy
              Policy, Security Policy, or any other published SynapseBook policy.
            </li>
          </ul>
        </section>
      </>
    ),

    "prohibited-content": (
      <>
        <section id="prohibited-content">
          {/* <h2>4.2 Prohibited Content</h2> */}

          <h3 className="heading">Summary</h3>
          <p>
            Users may not create, upload, store, distribute, or share content
            through SynapseBook that is unlawful, harmful, abusive, deceptive, or
            otherwise violates applicable laws or platform policies.
          </p>

          <h3 className="heading">A. Illegal Content</h3>
          <ul className="list">
            <li>
              Content that violates applicable laws or regulations.
            </li>
            <li>
              Content related to unlawful activities or criminal conduct.
            </li>
          </ul>

          <h3 className="heading">B. Malicious Content</h3>
          <ul className="list">
            <li>
              Malware, viruses, ransomware, spyware, or other harmful software.
            </li>
            <li>
              Phishing content, credential theft attempts, or malicious links.
            </li>
            <li>
              Content intended to compromise systems, devices, or user security.
            </li>
          </ul>

          <h3 className="heading">C. Harassment and Abuse</h3>
          <ul className="list">
            <li>
              Content that promotes harassment, threats, intimidation, or abuse.
            </li>
            <li>
              Hate speech, discriminatory content, or content intended to incite
              violence against individuals or groups.
            </li>
          </ul>

          <h3 className="heading">D. Privacy Violations</h3>
          <ul className="list">
            <li>
              Unauthorized disclosure of personal, confidential, or sensitive
              information belonging to another individual.
            </li>
            <li>
              Content that violates privacy, publicity, or data protection rights.
            </li>
          </ul>

          <h3 className="heading">E. Intellectual Property Violations</h3>
          <ul className="list">
            <li>
              Content that infringes copyrights, trademarks, patents, trade
              secrets, or other intellectual property rights.
            </li>
            <li>
              Unauthorized distribution or reproduction of protected materials.
            </li>
          </ul>

          <h3 className="heading">F. Deceptive Content</h3>
          <ul className="list">
            <li>
              Fraudulent schemes, scams, misleading information, or deceptive
              practices intended to mislead users.
            </li>
            <li>
              Content designed to impersonate another individual or organization.
            </li>
          </ul>
        </section>
      </>
    ),

    "spam-and-abuse": (
      <>
        <section id="spam-and-abuse">
          {/* <h2>4.3 Spam & Abuse</h2> */}

          <h3 className="heading">Summary</h3>
          <p>
            SynapseBook prohibits spam, abusive behavior, and activities that
            negatively affect users, platform resources, or service reliability.
          </p>

          <h3 className="heading">A. Spam Activities</h3>
          <ul className="list">
            <li>
              Sending, publishing, or distributing unsolicited promotional,
              commercial, or repetitive content.
            </li>
            <li>
              Creating duplicate or excessive content solely for advertising,
              manipulation, or mass distribution purposes.
            </li>
            <li>
              Using automated systems to generate spam or unwanted content.
            </li>
          </ul>

          <h3 className="heading">B. Abusive Behavior</h3>
          <ul className="list">
            <li>
              Harassing, threatening, intimidating, or targeting other users.
            </li>
            <li>
              Repeatedly engaging in disruptive behavior that interferes with the
              normal use of the Service.
            </li>
            <li>
              Encouraging or coordinating abuse directed toward individuals,
              groups, or systems.
            </li>
          </ul>

          <h3 className="heading">C. Platform Abuse</h3>
          <ul className="list">
            <li>
              Creating multiple accounts to evade restrictions, enforcement
              actions, or platform limitations.
            </li>
            <li>
              Manipulating platform features, metrics, or systems in an
              unauthorized manner.
            </li>
            <li>
              Consuming excessive resources in a way that negatively impacts
              service availability for other users.
            </li>
          </ul>

          <h3 className="heading">D. Reporting Abuse</h3>
          <ul className="list">
            <li>
              Users are encouraged to report spam, abuse, or policy violations
              through available support channels.
            </li>
            <li>
              SynapseBook may investigate reports and take appropriate action in
              accordance with its enforcement policies.
            </li>
          </ul>
        </section>
      </>
    ),

    "security-abuse": (
      <>
        <section id="security-abuse">
          {/* <h2>4.4 Security Abuse</h2> */}

          <h3 className="heading">Summary</h3>
          <p>
            SynapseBook strictly prohibits activities that compromise, threaten,
            test without authorization, or otherwise interfere with the security,
            integrity, or availability of the Service.
          </p>

          <h3 className="heading">A. Unauthorized Security Testing</h3>
          <ul className="list">
            <li>
              Conducting vulnerability scans, penetration testing, or security
              assessments without prior written authorization from SynapseBook.
            </li>
            <li>
              Attempting to discover, exploit, or publicly disclose security
              vulnerabilities in a manner that violates our Vulnerability
              Reporting Policy.
            </li>
          </ul>

          <h3 className="heading">B. Unauthorized Access Attempts</h3>
          <ul className="list">
            <li>
              Attempting to bypass authentication, authorization, or access
              controls.
            </li>
            <li>
              Accessing accounts, systems, databases, or information without
              proper permission.
            </li>
            <li>
              Using stolen, leaked, or unauthorized credentials to access the
              Service.
            </li>
          </ul>

          <h3 className="heading">C. Malicious Activities</h3>
          <ul className="list">
            <li>
              Introducing malware, viruses, ransomware, spyware, or malicious
              code into the Service.
            </li>
            <li>
              Attempting to disrupt, damage, disable, or interfere with platform
              operations.
            </li>
            <li>
              Engaging in denial-of-service, resource exhaustion, or other
              disruptive attacks.
            </li>
          </ul>

          <h3 className="heading">D. Data and System Interference</h3>
          <ul className="list">
            <li>
              Modifying, deleting, intercepting, or accessing information that
              does not belong to you.
            </li>
            <li>
              Interfering with monitoring systems, logging systems, or security
              mechanisms.
            </li>
          </ul>

          <h3 className="heading">E. Consequences</h3>
          <ul className="list">
            <li>
              Security abuse may result in immediate account suspension,
              termination, removal of content, restriction of access, or legal
              action where permitted by law.
            </li>
          </ul>
        </section>

      </>
    ),

    "enforcement-actions": (
      <>
        <section id="enforcement-actions">
          {/* <h2>4.5 Enforcement Actions</h2> */}

          <h3 className="heading">Summary</h3>
          <p>
            SynapseBook may investigate suspected violations of its policies and
            take appropriate action to protect users, maintain platform security,
            and ensure compliance with applicable laws and regulations.
          </p>

          <h3 className="heading">A. Investigation</h3>
          <ul className="list">
            <li>
              We may review reports, account activity, content, and technical
              information when investigating potential policy violations.
            </li>
            <li>
              Investigations may be conducted to protect users, platform
              integrity, and legal compliance.
            </li>
          </ul>

          <h3 className="heading">B. Available Actions</h3>
          <ul className="list">
            <li>
              Issuing warnings or requesting corrective action.
            </li>
            <li>
              Removing or restricting access to content.
            </li>
            <li>
              Temporarily limiting access to certain features.
            </li>
            <li>
              Suspending or terminating user accounts.
            </li>
            <li>
              Blocking access from specific devices, networks, or accounts where
              necessary.
            </li>
          </ul>

          <h3 className="heading">C. Serious Violations</h3>
          <ul className="list">
            <li>
              Severe or repeated violations may result in immediate enforcement
              action without prior warning.
            </li>
            <li>
              Security threats, illegal activities, fraud, or malicious conduct
              may lead to permanent account termination.
            </li>
          </ul>

          <h3 className="heading">Cooperation with Authorities</h3>
          <ul className="list">
            <li>
              Where required by law, SynapseBook may cooperate with law
              enforcement agencies, regulators, or other authorized authorities.
            </li>
          </ul>

          <h3 className="heading">D. Discretion</h3>
          <ul className="list">
            <li>
              Enforcement decisions are made at SynapseBook's reasonable
              discretion based on the severity, frequency, and impact of the
              violation.
            </li>
          </ul>
        </section>
      </>
    ),

    "reporting-violations": (
      <>
        <section id="reporting-violations">
          {/* <h2>4.6 Reporting Violations</h2> */}

          <h3 className="heading">Summary</h3>
          <p>
            Users are encouraged to report violations of this Acceptable Use
            Policy, security concerns, abusive behavior, unlawful content, or
            other activities that may harm users or the Service.
          </p>

          <h3 className="heading">A. What Can Be Reported</h3>
          <ul className="list">
            <li>
              Prohibited content or illegal activities.
            </li>
            <li>
              Spam, harassment, abuse, or fraudulent conduct.
            </li>
            <li>
              Security vulnerabilities, unauthorized access attempts, or
              suspicious activity.
            </li>
            <li>
              Violations of the Terms of Service, Privacy Policy, or other
              published policies.
            </li>
          </ul>

          <h3 className="heading">B. Submitting a Report</h3>
          <ul className="list">
            <li>
              Reports should include sufficient information to allow reasonable
              investigation of the issue.
            </li>
            <li>
              Users should provide accurate and truthful information when
              submitting reports.
            </li>
          </ul>

          <h3 className="heading">C. Review Process</h3>
          <ul className="list">
            <li>
              SynapseBook may review submitted reports and determine appropriate
              action based on available evidence and applicable policies.
            </li>
            <li>
              Additional information may be requested where necessary to support
              an investigation.
            </li>
          </ul>

          <h3 className="heading">D. Good Faith Reporting</h3>
          <ul className="list">
            <li>
              Reports should be submitted in good faith and not for purposes of
              harassment, retaliation, or abuse.
            </li>
            <li>
              Knowingly false or misleading reports may themselves constitute a
              policy violation.
            </li>
          </ul>

          <h3 className="heading">E. Contact Information</h3>
          <ul className="list">
            <li>
              Policy violations may be reported through SynapseBook support
              channels or by contacting:
              <a href="mailto:support@synapsebook.com">
                support@synapsebook.com
              </a>
            </li>
            <li>
              Security-related concerns should be directed to:
              <a href="mailto:security@synapsebook.com">
                security@synapsebook.com
              </a>
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

export default AcceptableUsePolicy;