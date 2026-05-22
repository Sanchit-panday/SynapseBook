import { Navigate, useParams } from "react-router-dom";
import './content.css';
function Terms() {
  const { section } = useParams();

  const sections = {
    "acceptance-of-terms": (
      <>
        <section id="acceptance-of-terms">
          {/* <h2>1.1 Acceptance of Terms</h2> */}
          <p className="intro">
            By accessing or using SynapseBook, you agree to be bound by these
            Terms of Service and all applicable laws, regulations, and policies
            referenced herein. If you do not agree to these Terms, you may not
            access or use the Service.
          </p>

          <h2 className="heading ">Summary</h2>
          <p className="heading-text">
            By creating an account, accessing the platform, or using any
            SynapseBook features, you agree to follow these Terms.
          </p>

          <h3 className="heading2">Agreement</h3>
          <ul className="list">
            <li>
              These Terms constitute a legally binding agreement between you and
              SynapseBook.
            </li>
            <li>
              Your continued use of the Service indicates your acceptance of the
              current version of these Terms.
            </li>
            <li>
              You must be at least 13 years of age, or the minimum legal age
              required in your jurisdiction, to use the Service.
            </li>
            <li>
              If you are using the Service on behalf of an organization, company,
              or other legal entity, you represent that you have authority to bind
              that entity to these Terms.
            </li>
            <li>
              Additional policies, including the Privacy Policy, Security &
              Data Protection Policy, and Acceptable Use Policy, form part of
              these Terms and are incorporated by reference.
            </li>
            <li>
              If any additional terms apply to a specific feature or service,
              those terms will supplement these Terms and govern your use of the
              applicable feature.
            </li>
            <li>
              If you do not agree with these Terms or any incorporated policies,
              you must discontinue use of the Service immediately.
            </li>
          </ul>
        </section>
      </>
    ),

    "user-accounts": (
      <>
        <section id="user-accounts">
          {/* <h2>1.2 User Accounts</h2> */}

          <h3 className="heading">Summary</h3>
          <p className="heading-text">
            To access certain features of SynapseBook, you may be required to
            create an account. You are responsible for maintaining the accuracy
            and security of your account information.
          </p>

          <h3 className="heading">A. Account Registration</h3>
          <ul className="list">
            <li>
              You must provide accurate, complete, and current information when
              creating an account.
            </li>
            <li>
              You may not impersonate another person, organization, or entity.
            </li>
            <li>
              You are responsible for keeping your account information updated.
            </li>
          </ul>

          <h3 className="heading">B. Account Security</h3>
          <ul className="list">
            <li>
              You are solely responsible for maintaining the confidentiality of
              your password and login credentials.
            </li>
            <li>
              You are responsible for all activities performed through your
              account.
            </li>
            <li>
              You must promptly notify SynapseBook if you suspect unauthorized
              access to your account.
            </li>
            <li>
              SynapseBook is not responsible for losses resulting from your
              failure to protect your account credentials.
            </li>
          </ul>

          <h3 className="heading">C. Account Ownership</h3>
          <ul className="list">
            <li>
              Each account is intended for use by a single individual unless
              otherwise authorized by SynapseBook.
            </li>
            <li>
              You may not transfer, sell, lease, or assign your account to any
              other person without prior written permission.
            </li>
          </ul>

          <h3 className="heading">D. Account Access</h3>
          <ul className="list">
            <li>
              SynapseBook reserves the right to suspend or restrict access to an
              account that violates these Terms or applicable policies.
            </li>
            <li>
              We may require identity verification or additional information in
              order to protect the security of the Service.
            </li>
          </ul>
        </section>
      </>
    ),

    "user-responsibilities": (
      <>
        <section id="user-responsibilities">
          {/* <h2>1.3 User Responsibilities</h2> */}
          <h3 className="heading">Summary</h3>
          <p className="heading-text">
            You are responsible for your use of SynapseBook, the content you
            create, and your compliance with applicable laws and platform
            policies.
          </p>

          <h3 className="heading">A. Lawful Use</h3>
          <ul className="list">
            <li>
              You must use the Service only for lawful purposes and in compliance
              with applicable laws and regulations.
            </li>
            <li>
              You may not use the Service to engage in fraudulent, deceptive, or
              harmful activities.
            </li>
          </ul>

          <h3 className="heading">B. Content Responsibility</h3>
          <ul className="list">
            <li>
              You are solely responsible for all notes, files, text, links, and
              other content that you create, upload, store, or share through the
              Service.
            </li>
            <li>
              You must ensure that your content does not infringe the rights of
              any third party.
            </li>
            <li>
              SynapseBook does not actively monitor all user content and is not
              responsible for content submitted by users.
            </li>
          </ul>

          <h3 className="heading">C. Prohibited Conduct</h3>
          <ul className="list">
            <li>
              Attempting to gain unauthorized access to systems, accounts, or
              data.
            </li>
            <li>
              Distributing malware, viruses, or other harmful software.
            </li>
            <li>
              Interfering with the normal operation, security, or performance of
              the Service.
            </li>
            <li>
              Using automated tools in a manner that places unreasonable load on
              the platform.
            </li>
            <li>
              Circumventing security measures or access restrictions.
            </li>
          </ul>

          <h3 className="heading">D. Compliance with Policies</h3>
          <ul className="list">
            <li>
              You agree to comply with the Acceptable Use Policy and all other
              policies published by SynapseBook.
            </li>
            <li>
              Violations of platform policies may result in warnings, content
              removal, account suspension, or account termination.
            </li>
          </ul>

          <h3 className="heading">E. Reporting Security Issues</h3>
          <ul className="list">
            <li>
              If you discover a security vulnerability, you agree to report it
              responsibly and avoid exploiting or publicly disclosing it before
              it has been addressed.
            </li>
          </ul>
        </section>
      </>
    ),

    "user-content": (
      <>
        <section id="user-content">
          {/* <h2>1.4 User Content</h2> */}

          <h3 className="heading">Summary</h3>
          <p className="heading-text">
            You retain ownership of the content you create and store in
            SynapseBook. By using the Service, you grant SynapseBook the limited
            rights necessary to store, process, and display your content in order
            to provide the Service.
          </p>

          <h3 className="heading">A. Ownership of Content</h3>
          <ul className="list">
            <li>
              You retain all ownership rights to notes, text, files, links, and
              other content that you create, upload, or store through the
              Service.
            </li>
            <li>
              SynapseBook does not claim ownership of your content.
            </li>
            <li>
              You are solely responsible for the content you create and maintain.
            </li>
          </ul>

          <h3 className="heading2">1. License Granted to SynapseBook</h3>
          <ul className="list">
            <li>
              By submitting content to the Service, you grant SynapseBook a
              limited, non-exclusive, worldwide, and revocable license to host,
              store, process, transmit, and display your content solely for the
              purpose of operating, maintaining, and improving the Service.
            </li>
            <li>
              This license automatically terminates when your content is deleted
              from the Service, except where retention is required by law,
              security processes, or backup systems.
            </li>
          </ul>

          <h3 className="heading2">2. Content Responsibility</h3>
          <ul className="list">
            <li>
              You represent and warrant that you own or have the necessary rights
              to all content you upload, create, or store through the Service.
            </li>
            <li>
              You are responsible for ensuring that your content complies with
              applicable laws and does not infringe the rights of any third
              party.
            </li>
            <li>
              SynapseBook is not responsible for the accuracy, legality, or
              reliability of user-generated content.
            </li>
          </ul>

          <h3 className="heading2">3. Content Removal</h3>
          <ul className="list">
            <li>
              SynapseBook reserves the right to remove, restrict access to, or
              disable content that violates these Terms, applicable laws, or our
              policies.
            </li>
            <li>
              We may remove content to protect the security, integrity, or
              operation of the Service.
            </li>
          </ul>

          <h3 className="heading2">4. Backups and Availability</h3>
          <ul className="list">
            <li>
              While SynapseBook may perform backups and other data protection
              measures, users are encouraged to maintain their own copies of
              important content.
            </li>
            <li>
              SynapseBook does not guarantee that content will never be lost,
              corrupted, or unavailable.
            </li>
          </ul>
        </section>

      </>
    ),

    "intellectual-property": (
      <>
        <section id="intellectual-property">
          {/* <h2>1.5 Intellectual Property</h2> */}

          <h1 className="heading">Summary</h1>
          <p className="heading-text">
            SynapseBook and its related software, design, branding, and content
            are protected by intellectual property laws. Except as expressly
            permitted by these Terms, you may not use our intellectual property
            without authorization.
          </p>

          <h3 className="heading">A. Ownership of the Service</h3>
          <ul className="list">
            <li>
              The Service, including its software, source code, user interface,
              design elements, trademarks, logos, documentation, and related
              materials, is owned by SynapseBook or its licensors.
            </li>
            <li>
              All rights not expressly granted to users are reserved.
            </li>
          </ul>

          <h3 className="heading">B. Limited License to Use the Service</h3>
          <ul className="list">
            <li>
              Subject to compliance with these Terms, SynapseBook grants you a
              limited, non-exclusive, non-transferable, and revocable license to
              access and use the Service for its intended purposes.
            </li>
            <li>
              This license does not transfer ownership of any intellectual
              property rights.
            </li>
          </ul>

          <h3 className="heading">C. Restrictions</h3>
          <ul className="list">
            <li>
              You may not copy, reproduce, distribute, modify, sell, sublicense,
              or commercially exploit any portion of the Service without prior
              written permission.
            </li>
            <li>
              You may not reverse engineer, decompile, disassemble, or attempt to
              derive the source code of the Service except where permitted by
              applicable law.
            </li>
            <li>
              You may not remove or alter copyright notices, trademarks, or other
              proprietary notices contained within the Service.
            </li>
          </ul>

          <h3 className="heading">D. Trademarks</h3>
          <ul className="list">
            <li>
              The SynapseBook name, logo, branding, and related marks are the
              property of SynapseBook and may not be used without prior written
              consent.
            </li>
            <li>
              Any third-party trademarks appearing within the Service remain the
              property of their respective owners.
            </li>
          </ul>

          <h3 className="heading">E. Feedback</h3>
          <ul className="list">
            <li>
              If you provide suggestions, feedback, ideas, or recommendations
              regarding the Service, SynapseBook may use, modify, and implement
              such feedback without restriction or compensation.
            </li>
            <li>
              Providing feedback does not create any obligation for SynapseBook
              to implement or acknowledge such suggestions.
            </li>
          </ul>
        </section>
      </>
    ),

    "service-availability": (
      <>
        <section id="service-availability">
          {/* <h2>1.6 Service Availability</h2> */}

          <h3 className="heading">Summary</h3>
          <p className="heading-text">
            SynapseBook strives to provide a reliable and secure service, but we
            do not guarantee uninterrupted availability or error-free operation.
          </p>

          <h3 className="heading">A. Availability of the Service</h3>
          <ul className="list">
            <li>
              SynapseBook may be modified, updated, suspended, or discontinued at
              any time without prior notice.
            </li>
            <li>
              We may perform maintenance, upgrades, security improvements, or
              infrastructure changes that temporarily affect availability.
            </li>
            <li>
              Certain features may be added, removed, restricted, or replaced as
              part of ongoing development.
            </li>
          </ul>

          <h3 className="heading">B. No Guarantee of Uptime</h3>
          <ul className="list">
            <li>
              SynapseBook does not guarantee uninterrupted, secure, timely, or
              error-free access to the Service.
            </li>
            <li>
              Access may be interrupted due to maintenance, technical failures,
              internet disruptions, third-party service outages, or events beyond
              our reasonable control.
            </li>
          </ul>

          <h3 className="heading">C. Data Availability</h3>
          <ul className="list">
            <li>
              While we implement measures to protect user data, we cannot
              guarantee that content will always remain available, accessible, or
              free from corruption.
            </li>
            <li>
              Users are encouraged to maintain their own backups of important
              information.
            </li>
          </ul>

          <h3 className="heading">D. Third-Party Dependencies</h3>
          <ul className="list">
            <li>
              Certain functionality may rely on third-party providers, including
              hosting, authentication, storage, analytics, or networking
              services.
            </li>
            <li>
              SynapseBook is not responsible for disruptions caused by third-party
              services outside of our control.
            </li>
          </ul>
        </section>
      </>
    ),

    "termination": (
      <>
        <section id="termination">
          {/* <h2>1.7 Termination</h2> */}

          <h3 className="heading">Summary</h3>
          <p className="heading-text">
            You may stop using SynapseBook at any time. We may suspend or
            terminate access to the Service if these Terms or applicable policies
            are violated.
          </p>

          <h3 className="heading">A. User Termination</h3>
          <ul className="list">
            <li>
              You may discontinue use of the Service at any time.
            </li>
            <li>
              You may request deletion of your account in accordance with our
              Privacy Policy and Data Protection practices.
            </li>
          </ul>

          <h3 className="heading">B. Termination by SynapseBook</h3>
          <ul className="list">
            <li>
              We may suspend, restrict, or terminate access to the Service if we
              reasonably believe that you have violated these Terms, applicable
              laws, or platform policies.
            </li>
            <li>
              We may take action to protect the security, integrity, availability,
              or reputation of the Service.
            </li>
            <li>
              We reserve the right to investigate suspected violations before
              taking enforcement action.
            </li>
          </ul>

          <h3 className="heading">C. Effect of Termination</h3>
          <ul className="list">
            <li>
              Upon termination, your right to access and use the Service
              immediately ceases.
            </li>
            <li>
              Content associated with terminated accounts may be deleted,
              retained, or restricted in accordance with applicable laws and our
              data retention policies.
            </li>
            <li>
              Termination does not relieve either party of obligations that arose
              prior to termination.
            </li>
          </ul>

          <h3 className="heading">D. Surviving Provisions</h3>
          <ul className="list">
            <li>
              Provisions relating to intellectual property, liability
              limitations, dispute resolution, indemnification, and other terms
              intended to survive termination shall remain in effect following
              termination of the Service.
            </li>
          </ul>
        </section>
      </>
    ),

    "limitation-of-liability": (
      <>
        <section id="limitation-of-liability">
          {/* <h2>1.8 Limitation of Liability</h2> */}

          <h3 className="heading">Summary</h3>
          <p className="heading-text">
            SynapseBook is provided on an "as is" and "as available" basis. To
            the fullest extent permitted by law, SynapseBook shall not be liable
            for damages arising from your use of the Service.
          </p>

          <h3 className="heading">A. No Warranties</h3>
          <ul className="list">
            <li>
              The Service is provided without warranties of any kind, whether
              express, implied, statutory, or otherwise.
            </li>
            <li>
              We do not guarantee that the Service will be uninterrupted,
              error-free, secure, or suitable for any particular purpose.
            </li>
          </ul>

          <h3 className="heading">B. Limitation of Liability</h3>
          <ul className="list">
            <li>
              To the maximum extent permitted by applicable law, SynapseBook, its
              owners, contributors, affiliates, and service providers shall not
              be liable for any indirect, incidental, special, consequential, or
              punitive damages.
            </li>
            <li>
              This includes, without limitation, loss of data, loss of profits,
              business interruption, loss of goodwill, or loss of opportunity
              arising from the use or inability to use the Service.
            </li>
          </ul>

          <h3 className="heading">C. User Responsibility</h3>
          <ul className="list">
            <li>
              You acknowledge that your use of the Service is at your own risk.
            </li>
            <li>
              You are responsible for maintaining backups of important content and
              for protecting access to your account.
            </li>
          </ul>

          <h3 className="heading">D. Third-Party Services</h3>
          <ul className="list">
            <li>
              SynapseBook shall not be responsible for losses, damages, or
              disruptions caused by third-party products, services, websites, or
              infrastructure integrated with or connected to the Service.
            </li>
          </ul>

          <h3 className="heading">E. Applicable Law</h3>
          <ul className="list">
            <li>
              Some jurisdictions do not allow certain limitations of liability or
              exclusions of warranties. In such cases, portions of this section
              may not apply to you to the extent prohibited by law.
            </li>
          </ul>
        </section>
      </>
    ),

    "changes-to-terms": (
      <>
        <section id="changes-to-terms">
          {/* <h2>1.9 Changes to Terms</h2> */}

          <h3 className="heading">Summary</h3>
          <p className="heading-text">
            SynapseBook may update these Terms of Service from time to time to
            reflect changes in our services, legal requirements, security
            practices, or business operations. Continued use of the Service after
            such changes constitutes acceptance of the updated Terms.
          </p>

          <h3 className="heading">A. Updates to the Terms</h3>
          <ul className="list">
            <li>
              We reserve the right to modify, revise, or replace these Terms at
              any time at our sole discretion.
            </li>
            <li>
              Changes may be made to address new features, operational changes,
              legal obligations, security requirements, or improvements to the
              Service.
            </li>
          </ul>

          <h3 className="heading">B. Notification of Changes</h3>
          <ul className="list">
            <li>
              Material changes to these Terms may be communicated through the
              Service, by email, or through other reasonable notification methods.
            </li>
            <li>
              The "Last Updated" date displayed at the top of this document
              indicates when the Terms were most recently revised.
            </li>
          </ul>

          <h3 className="heading">C. Acceptance of Revised Terms</h3>
          <ul className="list">
            <li>
              Your continued access to or use of the Service after revised Terms
              become effective constitutes your acceptance of those changes.
            </li>
            <li>
              If you do not agree with any updated Terms, you must discontinue
              use of the Service and, if desired, request deletion of your
              account.
            </li>
          </ul>

          <h3 className="heading">D. Previous Versions</h3>
          <ul className="list">
            <li>
              SynapseBook may maintain records of previous versions of these Terms
              for transparency and reference purposes.
            </li>
            <li>
              In the event of a conflict, the most current version of the Terms
              shall govern your use of the Service unless otherwise required by
              applicable law.
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

export default Terms;