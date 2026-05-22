import { FileText, GitPullRequestArrow, Info, MoveLeft } from "lucide-react"
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

function SitePolicy() {
    const navigate = useNavigate();
    const location = useLocation();
    const partURL = location.pathname.split("/").filter(Boolean);
    const formatTitle = (text?: string) =>

        text
            ?.split("-")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ") ?? "";
    return (
        <div className="h-screen overflow-hidden flex flex-col">
            {/* Nabvar */}
            <div className="h-14 w-full border border-stone-400 sticky top-0 z-50 shrink-0 shadow-sm ">
                <div className="w-full h-full flex justify-center items-center">
                    <p className="text-xl font-semibold">
                        SynapseBook Docs
                    </p>
                </div>
            </div>

            {/* container */}
            <div className="flex flex-1 h-full overflow-hidden">
                {/* sidebar */}
                <div className="fixed overflow-y-auto inset-y-0 left-0 z-30 w-82 border-r-1 border-stone-400 flex-shrink-0 transition-transform duration-300 lg:relative lg:translate-x-0 lg:z-auto">
                    <div className="flex flex-col h-full ">
                        {/* header */}
                        <div className="flex items-center justify-between border-b-1 border-stone-400 mb-2 px-4 p-9">
                            <div className="flex items-center gap-2">
                                <div className="w-7 h-7 bg-stone-800 rounded-[6px] flex items-center justify-center">
                                    <FileText className="w-5 h-5 text-white" />
                                </div>
                                <span className="font-semibold text-stone-800 text-md align-top tracking-tight">SynapseBook Docs</span>
                            </div>
                            <button className="hover:text-blue-700 hover:underline"
                                onClick={() => navigate("/notes")}>
                                <MoveLeft className="w-4 h-4" /><p className="text-sm">Back</p>
                            </button>
                        </div>
                        {/* Accordion */}
                        <Accordion
                            type="multiple"
                            className="max-w-lg px-2">
                            <AccordionItem value="TOS">
                                <AccordionTrigger className="p-1.5 pl-2 rounded-[4px] hover:bg-gray-200 hover:no-underline text-sm font-normal">
                                    Terms of Service
                                </AccordionTrigger>
                                <AccordionContent>
                                    <button onClick={() => navigate("terms-of-service/acceptance-of-terms")}
                                        className="hover:bg-gray-200 w-full text-left rounded-[4px] pl-4 p-1.5">Acceptance of Terms</button>
                                    <button onClick={() => navigate("terms-of-service/user-accounts")}
                                        className="hover:bg-gray-200 w-full text-left rounded-[4px] pl-4 p-1.5">User Accounts</button>
                                    <button onClick={() => navigate("terms-of-service/user-responsibilities")}
                                        className="hover:bg-gray-200 w-full text-left rounded-[4px] pl-4 p-1.5">User Responsibilities</button>
                                    <button onClick={() => navigate("terms-of-service/user-content")}
                                        className="hover:bg-gray-200 w-full text-left rounded-[4px] pl-4 p-1.5">User Content</button>
                                    <button onClick={() => navigate("terms-of-service/intellectual-property")}
                                        className="hover:bg-gray-200 w-full text-left rounded-[4px] pl-4 p-1.5">Intellectual Property</button>
                                    <button onClick={() => navigate("terms-of-service/service-availability")}
                                        className="hover:bg-gray-200 w-full text-left rounded-[4px] pl-4 p-1.5">Service Availability</button>
                                    <button onClick={() => navigate("terms-of-service/termination")}
                                        className="hover:bg-gray-200 w-full text-left rounded-[4px] pl-4 p-1.5">Termination</button>
                                    <button onClick={() => navigate("terms-of-service/limitation-of-liability")}
                                        className="hover:bg-gray-200 w-full text-left rounded-[4px] pl-4 p-1.5">Limitation of Liability</button>
                                    <button onClick={() => navigate("terms-of-service/changes-to-terms")}
                                        className="hover:bg-gray-200 w-full text-left rounded-[4px] pl-4 p-1.5">Changes to Terms</button>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="Privacy Policy">
                                <AccordionTrigger className="p-1.5 pl-2 rounded-[4px] hover:bg-gray-200 hover:no-underline text-sm font-normal">
                                    Privacy Policies
                                </AccordionTrigger>
                                <AccordionContent>
                                    <button onClick={() => navigate("privacy-policies/information-we-collect")}
                                        className="hover:bg-gray-200 w-full text-left rounded-[4px] pl-4 p-1.5">Information We Collect</button>
                                    <button onClick={() => navigate("privacy-policies/how-we-use-information")}
                                        className="hover:bg-gray-200 w-full text-left rounded-[4px] pl-4 p-1.5">How We Use Information</button>
                                    <button onClick={() => navigate("privacy-policies/cookies-and-trackings")}
                                        className="hover:bg-gray-200 w-full text-left rounded-[4px] pl-4 p-1.5">Cookies & Tracking</button>
                                    <button onClick={() => navigate("privacy-policies/data-sharing")}
                                        className="hover:bg-gray-200 w-full text-left rounded-[4px] pl-4 p-1.5">Data Sharing</button>
                                    <button onClick={() => navigate("privacy-policies/user-rights")}
                                        className="hover:bg-gray-200 w-full text-left rounded-[4px] pl-4 p-1.5">User Rights</button>
                                    <button onClick={() => navigate("privacy-policies/childrens-privacy")}
                                        className="hover:bg-gray-200 w-full text-left rounded-[4px] pl-4 p-1.5">Children's Privacy</button>
                                    <button onClick={() => navigate("privacy-policies/international-users")}
                                        className="hover:bg-gray-200 w-full text-left rounded-[4px] pl-4 p-1.5">International Users</button>
                                    <button onClick={() => navigate("privacy-policies/contact-information")}
                                        className="hover:bg-gray-200 w-full text-left rounded-[4px] pl-4 p-1.5">Contact Information</button>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="Security Policy">
                                <AccordionTrigger className="p-1.5 pl-2 rounded-[4px] hover:bg-gray-200 hover:no-underline text-sm font-normal">
                                    Security & Data Protection
                                </AccordionTrigger>
                                <AccordionContent>
                                    <button onClick={() => navigate("security-and-data-protection/security-overview")}
                                        className="hover:bg-gray-200 w-full text-left rounded-[4px] pl-4 p-1.5">Security Overview</button>
                                    <button onClick={() => navigate("security-and-data-protection/password-protection")}
                                        className="hover:bg-gray-200 w-full text-left rounded-[4px] pl-4 p-1.5">Password Protection</button>
                                    <button onClick={() => navigate("security-and-data-protection/data-storage")}
                                        className="hover:bg-gray-200 w-full text-left rounded-[4px] pl-4 p-1.5">Data Storage</button>
                                    <button onClick={() => navigate("security-and-data-protection/encryption")}
                                        className="hover:bg-gray-200 w-full text-left rounded-[4px] pl-4 p-1.5">Encryption</button>
                                    <button onClick={() => navigate("security-and-data-protection/data-retention")}
                                        className="hover:bg-gray-200 w-full text-left rounded-[4px] pl-4 p-1.5">Data Retention</button>
                                    <button onClick={() => navigate("security-and-data-protection/data-deletion")}
                                        className="hover:bg-gray-200 w-full text-left rounded-[4px] pl-4 p-1.5">Data Deletion</button>
                                    <button onClick={() => navigate("security-and-data-protection/incident-response")}
                                        className="hover:bg-gray-200 w-full text-left rounded-[4px] pl-4 p-1.5">Incident Response</button>
                                    <button onClick={() => navigate("security-and-data-protection/vulnerability-reporting")}
                                        className="hover:bg-gray-200 w-full text-left rounded-[4px] pl-4 p-1.5">Vulnerability Reporting</button>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="Acceptable Use Policy">
                                <AccordionTrigger className="p-1.5 pl-2 rounded-[4px] hover:bg-gray-200 hover:no-underline text-sm font-normal">
                                    Acceptable Use Policy
                                </AccordionTrigger>
                                <AccordionContent>
                                    <button onClick={() => navigate("acceptable-use-policy/prohibited-activities")}
                                        className="hover:bg-gray-200 w-full text-left rounded-[4px] pl-4 p-1.5">Prohibited Activities</button>
                                    <button onClick={() => navigate("acceptable-use-policy/prohibited-content")}
                                        className="hover:bg-gray-200 w-full text-left rounded-[4px] pl-4 p-1.5">Prohibited Content</button>
                                    <button onClick={() => navigate("acceptable-use-policy/spam-and-abuse")}
                                        className="hover:bg-gray-200 w-full text-left rounded-[4px] pl-4 p-1.5">Spam & Abuse</button>
                                    <button onClick={() => navigate("acceptable-use-policy/security-abuse")}
                                        className="hover:bg-gray-200 w-full text-left rounded-[4px] pl-4 p-1.5">Security Abuse</button>
                                    <button onClick={() => navigate("acceptable-use-policy/enforcement-actions")}
                                        className="hover:bg-gray-200 w-full text-left rounded-[4px] pl-4 p-1.5">Enforcement Actions</button>
                                    <button onClick={() => navigate("acceptable-use-policy/reporting-violations")}
                                        className="hover:bg-gray-200 w-full text-left rounded-[4px] pl-4 p-1.5">Reporting Violations</button>
                                </AccordionContent>
                            </AccordionItem>

                            <AccordionItem value="Contact & Support">
                                <AccordionTrigger className="p-1.5 pl-2 rounded-[4px] hover:bg-gray-200 hover:no-underline text-sm font-normal">
                                    Contact & Support
                                </AccordionTrigger>
                                <AccordionContent>
                                    <button onClick={() => navigate("contact-and-support/contact-information")}
                                        className="hover:bg-gray-200 w-full text-left rounded-[4px] pl-4 p-1.5">Contact Information</button>
                                    <button onClick={() => navigate("contact-and-support/bug-reports")}
                                        className="hover:bg-gray-200 w-full text-left rounded-[4px] pl-4 p-1.5">Bug Reports</button>
                                    <button onClick={() => navigate("contact-and-support/feature-requests")}
                                        className="hover:bg-gray-200 w-full text-left rounded-[4px] pl-4 p-1.5">Feature Requests</button>
                                    <button onClick={() => navigate("contact-and-support/security-reports")}
                                        className="hover:bg-gray-200 w-full text-left rounded-[4px] pl-4 p-1.5">Security Reports</button>
                                    <button onClick={() => navigate("contact-and-support/policy-updates")}
                                        className="hover:bg-gray-200 w-full text-left rounded-[4px] pl-4 p-1.5">Policy Updates</button>
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>

                    </div>
                </div>

                {/* Documentaion */}
                <div className="flex-1 w-full overflow-x-hidden overflow-y-auto pb-12">
                    {/* url */}
                    <div className="w-full border-b- border-stone-400 p-7 ml-1 text-sm text-gray-600 ">Site Policy  /  {formatTitle(partURL[1])} / </div>
                    <div className="px-8 py-1">
                        <div className="">
                            {/* Heading */}
                            <div className="text-3xl font-semibold">
                                {formatTitle(partURL[2])}
                            </div>
                            {/* content to disaply */}
                            <div className="my-7">
                                <Outlet />

                                {/* help and support */}
                                <div className="flex flex-col my-7">
                                    <div className="w-full flex gap-x-4 border-b border-stone-300 text-xl font-semibold p-1">
                                        Help and Support
                                        <span className="pt-1.5">
                                            <Info className="h-5 w-5" />
                                        </span>
                                    </div>
                                    <div className="max-w-md">
                                        <p className="py-4 font-semibold">Help us make it better</p>
                                        <p className="mb-4 text-gray-600">All of Synapsebook code is open source. See something that's wrong or unclear? Submit a pull request.</p>
                                        <a href="https://github.com/Sanchit-panday/SynapseBook/pulls">
                                            <button className="py-1 px-3 cursor-pointer text-md font-semibold flex items-center gap-2 bg-gray-300 hover:bg-gray-200 transition-all border border-stone-300 rounded-[6px] ">
                                                <GitPullRequestArrow className="h-4 w-4" />
                                                Make a contriubution
                                            </button>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div >
    )
}

export default SitePolicy