import { Navigate, useParams } from "react-router-dom";

function SecurityAndDataProtection() {
  const { section } = useParams();

  const sections = {
    "security-overview": (
      <>
        <section id="security-overview">
          {/* <h2>3.1 Security Overview</h2> */}

          <h3 className="heading">Summary</h3>
          <p>
            SynapseBook is committed to protecting user information through
            reasonable administrative, technical, and organizational security
            measures. While no system can guarantee absolute security, we
            continuously work to safeguard user data and maintain the integrity
            of the Service.
          </p>

          <h3 className="heading">A. Security Principles</h3>
          <ul className="list">
            <li>
              Protect the confidentiality, integrity, and availability of user
              information.
            </li>
            <li>
              Restrict access to systems and data to authorized personnel and
              processes only.
            </li>
            <li>
              Monitor systems for security threats, abuse, and unauthorized
              activity.
            </li>
            <li>
              Regularly review and improve security practices and infrastructure.
            </li>
          </ul>

          <h3 className="heading">B. Security Measures</h3>
          <ul className="list">
            <li>
              Use encrypted connections to protect data transmitted between users
              and the Service.
            </li>
            <li>
              Implement authentication and access controls to prevent
              unauthorized access.
            </li>
            <li>
              Maintain logging and monitoring systems to assist in detecting and
              investigating security incidents.
            </li>
            <li>
              Apply software updates and security patches when appropriate.
            </li>
          </ul>

          <h3 className="heading">C. Shared Responsibility</h3>
          <ul className="list">
            <li>
              Security is a shared responsibility between SynapseBook and its
              users.
            </li>
            <li>
              Users are responsible for protecting their credentials and
              following recommended security practices.
            </li>
          </ul>
        </section>
      </>
    ),

    "password-protection": (
      <>
        <section id="password-protection">
          {/* <h2>3.2 Password Protection</h2> */}

          <h3 className="heading">Summary</h3>
          <p>
            SynapseBook implements security measures to protect user accounts and
            authentication credentials. Users are responsible for maintaining the
            confidentiality of their account credentials.
          </p>

          <h3 className="heading">A. Password Security</h3>
          <ul className="list">
            <li>
              Passwords are not stored in plain text.
            </li>
            <li>
              Authentication credentials are protected using industry-standard
              hashing and security practices.
            </li>
            <li>
              Access to authentication systems is restricted to authorized
              processes and infrastructure.
            </li>
          </ul>

          <h3 className="heading">B. User Responsibilities</h3>
          <ul className="list">
            <li>
              Choose a strong and unique password for your account.
            </li>
            <li>
              Do not share your password or authentication credentials with
              others.
            </li>
            <li>
              Immediately change your password if you suspect unauthorized access
              to your account.
            </li>
            <li>
              Log out of shared or public devices after using the Service.
            </li>
          </ul>

          <h3 className="heading">C. Account Protection</h3>
          <ul className="list">
            <li>
              SynapseBook may implement additional authentication, verification,
              or security measures to protect accounts and platform integrity.
            </li>
            <li>
              Suspicious login activity may result in temporary restrictions or
              additional verification requirements.
            </li>
          </ul>

          <h3 className="heading">D. Limitations</h3>
          <ul className="list">
            <li>
              Users are responsible for maintaining the confidentiality of their
              credentials.
            </li>
            <li>
              SynapseBook cannot guarantee protection against all unauthorized
              access resulting from compromised user devices, passwords, or
              personal security practices.
            </li>
          </ul>
        </section>
      </>
    ),

    "data-storage": (
      <>
        <section id="data-storage">
          {/* <h2>3.3 Data Storage</h2> */}

          <h3 className="heading">Summary</h3>
          <p>
            SynapseBook stores user information and content using secure
            infrastructure and trusted service providers to operate and maintain
            the Service.
          </p>

          <h3 className="heading">A. Stored Information</h3>
          <ul className="list">
            <li>
              Account information necessary for authentication and account
              management.
            </li>
            <li>
              Notes, content, and other information created or uploaded by users.
            </li>
            <li>
              Operational logs, security records, and diagnostic information
              required to maintain the Service.
            </li>
          </ul>

          <h3 className="heading">B. Storage Infrastructure</h3>
          <ul className="list">
            <li>
              Data may be stored on cloud infrastructure, managed databases, and
              third-party hosting providers used by SynapseBook.
            </li>
            <li>
              Service providers are selected based on reliability, security, and
              operational requirements.
            </li>
          </ul>

          <h3 className="heading">C. Access Controls</h3>
          <ul className="list">
            <li>
              Access to stored information is limited to authorized systems,
              personnel, and service providers with a legitimate operational
              need.
            </li>
            <li>
              Administrative access is restricted and monitored where reasonably
              practicable.
            </li>
          </ul>

          <h3 className="heading">D. Data Integrity</h3>
          <ul className="list">
            <li>
              Reasonable measures are implemented to protect stored information
              against unauthorized access, alteration, disclosure, or
              destruction.
            </li>
            <li>
              Backup and recovery mechanisms may be used to support service
              continuity and data protection.
            </li>
          </ul>

          <h3 className="heading">E. Storage Limitations</h3>
          <ul className="list">
            <li>
              Although security measures are implemented, no storage system can
              be guaranteed to be completely secure or free from failure.
            </li>
            <li>
              Users are encouraged to maintain independent backups of important
              information.
            </li>
          </ul>
        </section>
      </>
    ),

    "encryption": (
      <>
        <section id="encryption">
          {/* <h2>3.4 Encryption</h2> */}

          <h3 className="heading">Summary</h3>
          <p>
            SynapseBook uses encryption and secure communication protocols to
            help protect user information during transmission and storage.
            Encryption helps reduce the risk of unauthorized access to sensitive
            information.
          </p>

          <h3 className="heading">A. Data in Transit</h3>
          <ul className="list">
            <li>
              Data transmitted between users and the Service is protected using
              encrypted communication protocols such as HTTPS and TLS where
              supported.
            </li>
            <li>
              Encryption helps protect information from interception while being
              transmitted across networks.
            </li>
          </ul>

          <h3 className="heading">B. Credential Protection</h3>
          <ul className="list">
            <li>
              User passwords are not stored in plain text.
            </li>
            <li>
              Authentication credentials are protected using industry-standard
              hashing and security techniques.
            </li>
            <li>
              Password verification is performed using secure authentication
              processes.
            </li>
          </ul>

          <h3 className="heading">C. Infrastructure Security</h3>
          <ul className="list">
            <li>
              Encryption technologies may be used by our hosting providers,
              database providers, and supporting infrastructure services.
            </li>
            <li>
              Additional security controls may be implemented to protect stored
              information from unauthorized access.
            </li>
          </ul>

          <h3 className="heading">D. Limitations</h3>
          <ul className="list">
            <li>
              While encryption significantly improves security, no method of
              transmission or storage can be guaranteed to be completely secure.
            </li>
            <li>
              Users should also follow recommended security practices to help
              protect their accounts and devices.
            </li>
          </ul>
        </section>
      </>
    ),

    "data-retention": (
      <>
        <section id="data-retention">
          {/* <h2>3.5 Data Retention</h2> */}

          <h3 className="heading">Summary</h3>
          <p>
            SynapseBook retains information only for as long as necessary to
            provide the Service, fulfill legal obligations, resolve disputes,
            enforce policies, and maintain security and operational integrity.
          </p>

          <h3 className="heading">A. Account Information</h3>
          <ul className="list">
            <li>
              Account information may be retained for as long as an account
              remains active.
            </li>
            <li>
              Certain account-related records may be retained after account
              closure where required for legal, security, auditing, or
              operational purposes.
            </li>
          </ul>

          <h3 className="heading">B. User Content</h3>
          <ul className="list">
            <li>
              User-created content is generally retained until deleted by the
              user or removed in accordance with platform policies.
            </li>
            <li>
              Deleted content may temporarily remain in backups, caches, or
              disaster recovery systems before permanent removal.
            </li>
          </ul>

          <h3 className="heading">C. Security and Operational Records</h3>
          <ul className="list">
            <li>
              Logs, diagnostic information, and security records may be retained
              for a reasonable period to detect abuse, investigate incidents,
              maintain system integrity, and improve the Service.
            </li>
          </ul>

          <h3 className="heading">Legal Obligations</h3>
          <ul className="list">
            <li>
              Information may be retained longer where required by applicable
              laws, regulations, legal processes, or legitimate business
              interests.
            </li>
          </ul>

          <h3 className="heading">D. Retention Reviews</h3>
          <ul className="list">
            <li>
              SynapseBook periodically reviews retained information and takes
              reasonable steps to remove or anonymize data that is no longer
              required for its intended purpose.
            </li>
          </ul>
        </section>
      </>
    ),

    "data-deletion": (
      <>
        <section id="data-deletion">
          {/* <h2>3.6 Data Deletion</h2> */}

          <h3 className="heading">Summary</h3>
          <p>
            Users may request deletion of their account and personal information.
            SynapseBook will take reasonable steps to remove data in accordance
            with applicable laws, operational requirements, and security
            practices.
          </p>

          <h3 className="heading">A. User-Initiated Deletion</h3>
          <ul className="list">
            <li>
              Users may delete content directly through available platform
              features where supported.
            </li>
            <li>
              Users may request deletion of their account and associated personal
              information through the provided support channels.
            </li>
          </ul>

          <h3 className="heading">B. Deletion Process</h3>
          <ul className="list">
            <li>
              Upon a valid deletion request, SynapseBook will take reasonable
              steps to remove personal information from active systems.
            </li>
            <li>
              Certain information may remain temporarily in backups, archives, or
              recovery systems until those systems are refreshed or securely
              overwritten.
            </li>
          </ul>

          <h3 className="heading">C. Exceptions</h3>
          <ul className="list">
            <li>
              Information may be retained where required to comply with legal
              obligations, resolve disputes, enforce agreements, investigate
              abuse, or protect the security and integrity of the Service.
            </li>
            <li>
              Aggregated or anonymized information that cannot reasonably
              identify an individual may be retained for analytical or
              operational purposes.
            </li>
          </ul>

          <h3 className="heading">D. Verification Requirements</h3>
          <ul className="list">
            <li>
              We may request reasonable verification of identity before
              processing deletion requests to protect user privacy and prevent
              unauthorized account actions.
            </li>
          </ul>

          <h3 className="heading">E. Completion of Deletion</h3>
          <ul className="list">
            <li>
              Once deletion has been completed, access to the affected account
              and associated data may no longer be possible.
            </li>
            <li>
              Users are encouraged to export or back up important information
              before requesting deletion.
            </li>
          </ul>
        </section>
      </>
    ),

    "incident-response": (
      <>
        <section id="incident-response">
          {/* <h2>3.7 Incident Response</h2> */}

          <h3 className="heading">Summary</h3>
          <p>
            SynapseBook maintains procedures for identifying, investigating,
            responding to, and mitigating security incidents. Our goal is to
            protect users, preserve service integrity, and restore normal
            operations as quickly as reasonably possible.
          </p>

          <h3 className="heading">A. Incident Detection</h3>
          <ul className="list">
            <li>
              We monitor systems, infrastructure, and security logs to identify
              potential security threats, unauthorized access attempts, and other
              suspicious activities.
            </li>
            <li>
              Security events may be reviewed and investigated to determine their
              nature, impact, and scope.
            </li>
          </ul>

          <h3 className="heading">B. Investigation and Containment</h3>
          <ul className="list">
            <li>
              Upon becoming aware of a security incident, SynapseBook may take
              reasonable steps to investigate and contain the issue.
            </li>
            <li>
              Actions may include restricting access, isolating affected systems,
              applying security patches, or implementing additional safeguards.
            </li>
          </ul>

          <h3 className="heading">C. User Notification</h3>
          <ul className="list">
            <li>
              Where required by applicable law or where reasonably necessary,
              affected users may be notified of significant security incidents.
            </li>
            <li>
              Notifications may include information regarding the nature of the
              incident, potential impact, and recommended actions for users.
            </li>
          </ul>

          <h3 className="heading">D. Recovery and Remediation</h3>
          <ul className="list">
            <li>
              SynapseBook will take reasonable measures to restore affected
              services and improve protections following a security incident.
            </li>
            <li>
              Security incidents may be reviewed to identify lessons learned and
              opportunities for improvement.
            </li>
          </ul>

          <h3 className="heading">E. Limitations</h3>
          <ul className="list">
            <li>
              While reasonable security measures are implemented, no security
              program can completely eliminate all risks or guarantee prevention
              of every security incident.
            </li>
          </ul>
        </section>
      </>
    ),

    "vulnerability-reporting": (
      <>
        <section id="vulnerability-reporting">
          {/* <h2>3.8 Vulnerability Reporting</h2> */}

          <h3 className="heading">Summary</h3>
          <p>
            SynapseBook encourages responsible disclosure of security
            vulnerabilities. If you discover a potential security issue, we ask
            that you report it privately so it can be investigated and addressed
            appropriately.
          </p>

          <h3 className="heading">A. How to Report</h3>
          <ul className="list">
            <li>
              Security vulnerabilities should be reported through the designated
              security contact channel provided by SynapseBook.
            </li>
            <li>
              Reports should include sufficient detail to allow reproduction,
              investigation, and validation of the issue where possible.
            </li>
          </ul>

          <h3 className="heading">B. Responsible Disclosure Guidelines</h3>
          <ul className="list">
            <li>
              Do not publicly disclose a vulnerability before SynapseBook has had
              a reasonable opportunity to investigate and remediate the issue.
            </li>
            <li>
              Do not access, modify, destroy, or disclose data belonging to other
              users.
            </li>
            <li>
              Do not exploit vulnerabilities beyond what is reasonably necessary
              to demonstrate their existence.
            </li>
            <li>
              Avoid actions that may disrupt, degrade, or compromise the
              availability of the Service.
            </li>
          </ul>

          <h3 className="heading">C. Investigation Process</h3>
          <ul className="list">
            <li>
              SynapseBook will review submitted vulnerability reports and may
              request additional information where necessary.
            </li>
            <li>
              Valid reports will be prioritized based on severity, risk, and
              potential impact.
            </li>
          </ul>

          <h3 className="heading">D. Good Faith Research</h3>
          <ul className="list">
            <li>
              SynapseBook will not pursue legal action against individuals who
              conduct security research in good faith and in accordance with this
              policy.
            </li>
            <li>
              Researchers are expected to comply with applicable laws and avoid
              activities that may harm users, systems, or data.
            </li>
          </ul>

          <h3 className="heading">E. Security Contact</h3>
          <ul className="list">
            <li>
              Security concerns may be reported to:
              <a href="mailto:security@synapsebook.com">
                security@synapsebook.com
              </a>
            </li>
            <li>
              Please provide as much relevant technical information as possible to
              assist with investigation and remediation.
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

export default SecurityAndDataProtection;