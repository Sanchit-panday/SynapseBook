import { Navigate, useParams } from "react-router-dom";

function PrivacyPolicy() {
  const { section } = useParams();

  const sections = {
    "information-we-collect": (
      <>
        <section id="information-we-collect">
          {/* <h2>2.1 Information We Collect</h2> */}

          <h3 className="heading">Summary</h3>
          <p className="heading-text">
            We collect information necessary to provide, maintain, secure, and
            improve SynapseBook. The information collected depends on how you use
            the Service.
          </p>

          <h3 className="heading">A. Account Information</h3>
          <ul className="list">
            <li>
              Name, username, or other profile information you choose to provide.
            </li>
            <li>
              Email address used for registration and account management.
            </li>
            <li>
              Encrypted or hashed authentication credentials.
            </li>
          </ul>

          <h3 className="heading2">1. User Content</h3>
          <ul className="list">
            <li>
              Notes, text, links, attachments, and other content you create,
              upload, edit, or store within the Service.
            </li>
            <li>
              Metadata associated with your content, including creation and
              modification timestamps.
            </li>
          </ul>

          <h3 className="heading">B. Usage Information</h3>
          <ul className="list">
            <li>
              Information about how you interact with the Service, including
              features used and actions performed.
            </li>
            <li>
              Log data such as access times, browser type, device information,
              operating system, and referring pages.
            </li>
          </ul>

          <h3 className="heading">C. Technical Information</h3>
          <ul className="list">
            <li>
              IP address and approximate geographic location derived from it.
            </li>
            <li>
              Device identifiers and diagnostic information necessary for
              security and performance monitoring.
            </li>
          </ul>

          <h3 className="heading">D. Information from Third Parties</h3>
          <ul className="list">
            <li>
              If third-party authentication or integrations are offered,
              SynapseBook may receive limited account information from those
              providers as authorized by you.
            </li>
          </ul>
        </section>
      </>
    ),

    "how-we-use-information": (
      <>
        <section id="how-we-use-information">
          {/* <h2>2.2 How We Use Information</h2> */}

          <h3 className="heading">Summary</h3>
          <p className="heading-text">
            We use collected information to operate, secure, maintain, and
            improve SynapseBook and to provide users with a reliable experience.
          </p>

          <h3 className="heading">A. Providing the Service</h3>
          <ul className="list">
            <li>
              Create and manage user accounts.
            </li>
            <li>
              Authenticate users and maintain active sessions.
            </li>
            <li>
              Store, synchronize, and display user content.
            </li>
            <li>
              Deliver requested features and functionality.
            </li>
          </ul>

          <h3 className="heading">B. Security and Protection</h3>
          <ul className="list">
            <li>
              Detect, investigate, and prevent unauthorized access, fraud,
              abuse, and security threats.
            </li>
            <li>
              Monitor system performance, stability, and reliability.
            </li>
            <li>
              Enforce our Terms of Service and platform policies.
            </li>
          </ul>

          <h3 className="heading">C. Improvement and Development</h3>
          <ul className="list">
            <li>
              Analyze usage patterns to improve features, usability, and
              performance.
            </li>
            <li>
              Develop new functionality and enhance existing services.
            </li>
            <li>
              Troubleshoot bugs, errors, and technical issues.
            </li>
          </ul>

          <h3 className="heading">D. Communication</h3>
          <ul className="list">
            <li>
              Send account-related notifications and security alerts.
            </li>
            <li>
              Respond to support requests, feedback, and inquiries.
            </li>
            <li>
              Inform users about significant service or policy changes.
            </li>
          </ul>

          <h3 className="heading">E. Legal Compliance</h3>
          <ul className="list">
            <li>
              Comply with applicable laws, regulations, legal obligations, and
              lawful government requests.
            </li>
            <li>
              Protect the rights, safety, and security of users, SynapseBook, and
              third parties.
            </li>
          </ul>
        </section>
      </>
    ),

    "cookies-and-trackings": (
      <>
        <section id="cookies-and-tracking">
          {/* <h2>2.3 Cookies & Tracking</h2> */}

          <h3 className="heading">Summary</h3>
          <p>
            SynapseBook uses cookies and similar technologies to provide core
            functionality, improve user experience, maintain security, and
            understand how the Service is used.
          </p>

          <h3 className="heading">A. Essential Cookies</h3>
          <ul className="list">
            <li>
              Maintain authentication sessions and login status.
            </li>
            <li>
              Protect user accounts and prevent unauthorized access.
            </li>
            <li>
              Enable core functionality required for operation of the Service.
            </li>
          </ul>

          <h3 className="heading">B. Functional Cookies</h3>
          <ul className="list">
            <li>
              Remember user preferences and settings.
            </li>
            <li>
              Improve usability and personalize certain features.
            </li>
          </ul>

          <h3 className="heading">C. Analytics and Performance</h3>
          <ul className="list">
            <li>
              We may collect aggregated usage information to understand feature
              usage, measure performance, and improve the Service.
            </li>
            <li>
              Analytics information is used for operational and development
              purposes and is not intended to personally identify users.
            </li>
          </ul>

          <h3 className="heading">D. Managing Cookies</h3>
          <ul className="list">
            <li>
              Most browsers allow users to control, block, or delete cookies
              through browser settings.
            </li>
            <li>
              Disabling certain cookies may affect the functionality or
              availability of parts of the Service.
            </li>
          </ul>

          <h3 className="heading">E. Future Technologies</h3>
          <ul className="list">
            <li>
              SynapseBook may use similar technologies, such as local storage or
              other browser-based mechanisms, for purposes consistent with this
              Privacy Policy.
            </li>
          </ul>
        </section>
      </>
    ),

    "data-sharing": (
      <>
        <section id="data-sharing">
          {/* <h2>2.4 Data Sharing</h2> */}

          <h3 className="heading">Summary</h3>
          <p>
            SynapseBook does not sell, rent, or trade personal information. We
            only share information when necessary to operate the Service, comply
            with legal obligations, or protect the security of users and the
            platform.
          </p>

          <h3 className="heading">A. Service Providers</h3>
          <ul className="list">
            <li>
              We may share information with trusted third-party service providers
              that assist in operating, hosting, maintaining, or securing the
              Service.
            </li>
            <li>
              Such providers may access information only to perform services on
              our behalf and are required to protect it appropriately.
            </li>
          </ul>

          <h3 className="heading">B. Legal Requirements</h3>
          <ul className="list">
            <li>
              We may disclose information if required by law, regulation, court
              order, or lawful governmental request.
            </li>
            <li>
              We may disclose information when necessary to protect our legal
              rights, investigate violations, or prevent fraud, abuse, or
              security threats.
            </li>
          </ul>

          <h3 className="heading">C. Business Transfers</h3>
          <ul className="list">
            <li>
              In the event of a merger, acquisition, restructuring, asset sale,
              or similar business transaction, user information may be
              transferred as part of that transaction.
            </li>
            <li>
              Users will be notified where required by applicable law.
            </li>
          </ul>

          <h3 className="heading">D. No Sale of Personal Information</h3>
          <ul className="list">
            <li>
              SynapseBook does not sell, rent, or trade personal information to
              advertisers, marketers, or unrelated third parties.
            </li>
          </ul>
        </section>
      </>
    ),

    "user-rights": (
      <>
        <section id="user-rights">
          {/* <h2>2.5 User Rights</h2> */}

          <h3 className="heading">Summary</h3>
          <p>
            Users have control over their personal information and may exercise
            certain rights regarding access, correction, deletion, and management
            of their data, subject to applicable laws.
          </p>

          <h3 className="heading">A. Access and Correction</h3>
          <ul className="list">
            <li>
              You may access and update certain account information through your
              account settings.
            </li>
            <li>
              You may request correction of inaccurate or incomplete personal
              information.
            </li>
          </ul>

          <h3 className="heading">B. Data Deletion</h3>
          <ul className="list">
            <li>
              You may request deletion of your account and associated personal
              information.
            </li>
            <li>
              Certain information may be retained where required by law,
              legitimate security purposes, or backup procedures.
            </li>
          </ul>

          <h3 className="heading">C. Data Portability</h3>
          <ul className="list">
            <li>
              Where technically feasible and legally required, users may request
              a copy of their personal information in a commonly used electronic
              format.
            </li>
          </ul>

          <h3 className="heading">D. Communication Preferences</h3>
          <ul className="list">
            <li>
              Users may manage or opt out of non-essential communications where
              such options are provided.
            </li>
            <li>
              Service-related notices and security communications may still be
              sent when necessary.
            </li>
          </ul>

          <h3 className="heading">E. Submitting Requests</h3>
          <ul className="list">
            <li>
              Requests regarding personal information may be submitted through
              the contact methods listed in this Privacy Policy.
            </li>
            <li>
              We may verify identity before processing certain requests to
              protect user privacy and security.
            </li>
          </ul>
        </section>
      </>
    ),

    "childrens-privacy": (
      <>
        <section id="childrens-privacy">
          {/* <h2>2.6 Children's Privacy</h2> */}

          <h3 className="heading">Summary</h3>
          <p>
            SynapseBook is not intended for use by children under the age of 13,
            or the minimum age required by applicable law in a user's
            jurisdiction.
          </p>

          <h3 className="heading">A. Age Restriction</h3>
          <ul className="list">
            <li>
              Users must meet the minimum legal age requirements applicable in
              their jurisdiction to create and use an account.
            </li>
            <li>
              We do not knowingly collect personal information from children who
              do not meet those requirements.
            </li>
          </ul>

          <h3 className="heading">B. Discovery of Child Data</h3>
          <ul className="list">
            <li>
              If we become aware that personal information has been collected
              from a child in violation of applicable law, we will take
              reasonable steps to delete such information promptly.
            </li>
            <li>
              We may suspend or terminate accounts found to have been created in
              violation of applicable age requirements.
            </li>
          </ul>

          <h3 className="heading">C. Parent or Guardian Requests</h3>
          <ul className="list">
            <li>
              Parents or legal guardians who believe that a child has provided
              personal information to SynapseBook may contact us to request
              review or deletion of such information.
            </li>
          </ul>

          <h3 className="heading">D. Contact</h3>
          <ul className="list">
            <li>
              Questions regarding children's privacy may be directed to the
              contact information provided in this Privacy Policy.
            </li>
          </ul>
        </section>
      </>
    ),

    "international-users": (
      <>
        <section id="international-users">
          {/* <h2>2.7 International Users</h2> */}

          <h3 className="heading">Summary</h3>
          <p>
            SynapseBook may be accessed from countries around the world. By using
            the Service, you acknowledge that your information may be processed
            and stored in locations where our infrastructure or service providers
            operate.
          </p>

          <h3 className="heading">A. Cross-Border Data Processing</h3>
          <ul className="list">
            <li>
              Personal information may be processed, stored, or transferred to
              servers and service providers located in different countries.
            </li>
            <li>
              Data protection laws in those jurisdictions may differ from the
              laws of your country of residence.
            </li>
          </ul>

          <h3 className="heading">B. User Consent</h3>
          <ul className="list">
            <li>
              By accessing or using SynapseBook, you consent to the transfer,
              storage, and processing of your information as described in this
              Privacy Policy.
            </li>
            <li>
              Such processing is performed only for the purposes of providing,
              maintaining, securing, and improving the Service.
            </li>
          </ul>

          <h3 className="heading">C. Compliance with Local Laws</h3>
          <ul className="list">
            <li>
              Users are responsible for ensuring that their use of the Service
              complies with applicable laws and regulations in their
              jurisdiction.
            </li>
            <li>
              SynapseBook makes reasonable efforts to handle personal information
              in accordance with applicable privacy and data protection laws.
            </li>
          </ul>

          <h3 className="heading">D. International Access</h3>
          <ul className="list">
            <li>
              Access to the Service from locations where its use is prohibited by
              law is not authorized.
            </li>
            <li>
              Users accessing the Service from outside the country in which it is
              operated do so at their own initiative and responsibility.
            </li>
          </ul>
        </section>
      </>
    ),

    "contact-information": (
      <>
        <section id="contact-information">
          {/* <h2>2.8 Contact Information</h2> */}

          <h3 className="heading">Summary</h3>
          <p>
            If you have questions, concerns, requests, or feedback regarding
            this Privacy Policy or the handling of your personal information,
            please contact us using the information below.
          </p>

          <h3 className="heading">A. Privacy Inquiries</h3>
          <ul className="list">
            <li>
              Contact us for questions regarding data collection, processing,
              storage, or deletion practices.
            </li>
            <li>
              Requests relating to personal information and privacy rights may be
              submitted through the contact methods listed below.
            </li>
          </ul>

          <h3 className="heading">B. Support Contact</h3>
          <ul className="list">
            <li>
              Email: <a href="mailto:support@synapsebook.com">support@synapsebook.com</a>
            </li>
            <li>
              Website: <a href="https://synapsebook.com">https://synapsebook.com</a>
            </li>
          </ul>

          <h3 className="heading">C. Response Time</h3>
          <ul className="list">
            <li>
              We aim to review and respond to legitimate privacy-related requests
              within a reasonable timeframe.
            </li>
            <li>
              Additional information may be requested to verify identity before
              processing certain requests.
            </li>
          </ul>

          <h3 className="heading">D. Policy Updates</h3>
          <ul className="list">
            <li>
              Questions regarding changes to this Privacy Policy may be directed
              through the contact channels provided above.
            </li>
            <li>
              The latest version of this Privacy Policy will always be available
              through the Service.
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
        to="/site-policy/privacy-policies/information-we-collect"
        replace
      />
    );
  }

  return <>{content}</>;
}

export default PrivacyPolicy;