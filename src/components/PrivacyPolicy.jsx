import React, { useEffect } from 'react';

const PrivacyPolicy = () => {

        useEffect(()=>{
            window.scroll(0, 0)
        }, [])

  return (
    <div className="max-w-5xl mx-auto px-4 text-sm py-12 text-gray-800 mt-10    ">
      <h1 className="text-xl font-bold mb-6 text-center">Privacy Policy</h1>
      <p className="mb-4 text-sm">
        This Privacy Policy explains how I, as a freelance web developer, collect, use, and safeguard your personal information when you visit my website, contact me, or use my services.
      </p>

      <h2 className="text-md font-semibold mt-8 mb-2">1. Information I Collect</h2>
      <p className="mb-4 text-sm">
        I may collect personal information you provide voluntarily through forms such as your name, email address, phone number, and project details when you contact me or request services.
      </p>

      <h2 className="text-md font-semibold mt-8 mb-2">2. How I Use Your Information</h2>
      <ul className="list-disc list-inside mb-4 text-sm">
        <li>To communicate with you regarding your project.</li>
        <li>To provide and manage services you request.</li>
        <li>To improve my website and offerings.</li>
        <li>To send updates or important information related to your project.</li>
      </ul>

      <h2 className="text-md font-semibold mt-8 mb-2">3. Information Sharing</h2>
      <p className="mb-4 text-sm">
        I do not sell, trade, or rent your personal information to others. Your data is only shared when legally required or necessary to deliver services you’ve requested.
      </p>

      <h2 className="text-md font-semibold mt-8 mb-2">4 text-sm. Data Security</h2>
      <p className="mb-4 text-sm">
        I take reasonable precautions to protect your data from unauthorized access, loss, or misuse. However, no method of transmission over the internet is 100% secure.
      </p>

      <h2 className="text-md font-semibold mt-8 mb-2">5. Third-Party Links</h2>
      <p className="mb-4 text-sm">
        My website may contain links to other websites. I am not responsible for the privacy practices or content of those sites.
      </p>

      <h2 className="text-md font-semibold mt-8 mb-2">6. Your Rights</h2>
      <p className="mb-4 text-sm">
        You have the right to access, correct, or delete your personal information. To make such requests, please contact me directly.
      </p>

      <h2 className="text-md font-semibold mt-8 mb-2">7. Updates to This Policy</h2>
      <p className="mb-4 text-sm">
        I may update this policy occasionally. Please check back regularly to stay informed.
      </p>

      <h2 className="text-md font-semibold mt-8 mb-2">8. Contact Me</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy, please reach out via the contact form on the website or by email.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
