"use client"
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";
export default function Home() {
    return (
        <>
            <Header />
            <main className="mt-20">
                <div className="text-center flex flex-col m-auto">
                    <h1 className="text-3xl">Privacy Policy</h1>
                    <p><i>Last Updated May 23rd, 2022</i></p>
                </div>
                <section className="flex w-full m-auto justify-center gap-10 my-10">
                    <ScrollArea className="max-h-[800px] prose lg:prose-lg min-w-screen-md max-w-screen-lg">
                            <h3 id="personal-information-collection">What Personal Information we collect</h3>
                            <p>We collect various types of information in connection with the services we provide, including:</p>
                            <ul>
                                <li><b>Personal Identification Information:</b> Name, email address, phone number, etc.</li>
                                <li><b>Technical Data:</b> IP address, browser type, operating system, etc.</li>
                                <li><b>Usage Data:</b> Information on how you use our website and services.</li>
                            </ul>

                            <h3 id="personal-information-use">What we do with the Personal Information we collect</h3>
                            <p>The information we collect is used to:</p>
                            <ul>
                                <li>Provide and improve our services</li>
                                <li>Communicate with you</li>
                                <li>Personalize your experience</li>
                                <li>Ensure security and prevent fraud</li>
                            </ul>

                            <h3 id="personal-information-disclosure">When we Disclose Personal Information</h3>
                            <p>We may disclose your personal information:</p>
                            <ul>
                                <li>To comply with legal obligations</li>
                                <li>To protect and defend our rights and property</li>
                                <li>With your consent</li>
                            </ul>

                            <h3 id="cookies-and-technology">How we use cookies and collect information using technology</h3>
                            <p>We use cookies and similar technologies to:</p>
                            <ul>
                                <li>Enhance your experience on our website</li>
                                <li>Analyze website usage</li>
                                <li>Deliver targeted advertisements</li>
                            </ul>
                            <p>For more information, please refer to our <a href="#cookie-policy">Cookie Policy</a>.</p>

                            <h3 id="security">Security</h3>
                            <p>We take reasonable measures to protect your personal information from unauthorized access, use, or disclosure. These measures include:</p>
                            <ul>
                                <li>Using encryption technologies</li>
                                <li>Restricting access to personal information</li>
                                <li>Regularly reviewing our security practices</li>
                            </ul>

                            <h3 id="transfer-of-information">We may Transfer Personal Information to Other Countries</h3>
                            <p>Your personal information may be transferred to, and processed in, countries other than the country in which you reside. These countries may have data protection laws that are different from those of your country.</p>

                            <h3 id="links-to-other-websites">Links to other websites</h3>
                            <p>Our website may contain links to other websites that are not operated by us. We are not responsible for the privacy practices of these other sites.</p>

                            <h3 id="your-choices">Your Choices</h3>
                            <p>You have the right to:</p>
                            <ul>
                                <li>Access and update your personal information</li>
                                <li>Opt-out of certain data collection practices</li>
                                <li>Request the deletion of your personal information</li>
                            </ul>

                            <h3 id="access-and-correction">Accessing and Correcting your Personal Information</h3>
                            <p>If you would like to access or correct your personal information, please contact us at <a href="mailto:privacy@example.com">privacy@example.com</a>.</p>

                            <h3 id="children">Children</h3>
                            <p>Our services are not directed to individuals under the age of 13. We do not knowingly collect personal information from children under 13.</p>

                            <h3 id="contact-us">Contact Us</h3>
                            <p>If you have any questions about this Privacy Policy, please contact us at:</p>
                            <address>
                                <b>Company Name</b><br />
                                1234 Street Address<br />
                                City, State, ZIP Code<br />
                                Email: <a href="mailto:privacy@example.com">privacy@example.com</a>
                            </address>
                    </ScrollArea>
                    <div className="w-fit sticky">
                        <h2 className="text-xl font-bold mb-2">Table of Contents</h2>
                        <ol className="list-decimal">
                            <li><a href="#personal-information-collection">What Personal Information we collect</a></li>
                            <li><a href="#personal-information-use">What we do with the Personal Information we collect</a></li>
                            <li><a href="#personal-information-disclosure">When we Disclose Personal Information</a></li>
                            <li><a href="#cookies-and-technology">How we use cookies and collect information using technology</a></li>
                            <li><a href="#security">Security</a></li>
                            <li><a href="#transfer-of-information">We may Transfer Personal Information to Other Countries</a></li>
                            <li><a href="#links-to-other-websites">Links to other websites</a></li>
                            <li><a href="#your-choices">Your Choices</a></li>
                            <li><a href="#access-and-correction">Accessing and Correcting your Personal Information</a></li>
                            <li><a href="#children">Children</a></li>
                            <li><a href="#contact-us">Contact Us</a></li>
                        </ol>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
