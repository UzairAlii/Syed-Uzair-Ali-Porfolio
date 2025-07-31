import React, { useEffect } from 'react';

const TermsOfService = () => {

    useEffect(()=>{
        window.scroll(0, 0)
    }, [])

  return (
    <div className="max-w-4xl mx-auto p-6 text-gray-800 mt-20">
      <h1 className="text-xl font-bold mb-4 text-sm text-center">Terms of Service</h1>
      <p className="mb-4 text-sm">
        By accessing and using my services, you agree to be bound by these terms. These services are provided by me as an independent freelance web developer to build, design, or maintain websites and web applications for clients.
      </p>

      <h2 className="text-md font-semibold mt-6 mb-2">1. Scope of Work</h2>
      <p className="mb-4 text-sm">
        The scope of services will be defined before the start of the project. Any additional work beyond the agreed scope will be discussed and billed separately.
      </p>

      <h2 className="text-md font-semibold mt-6 mb-2">2. Payments</h2>
      <p className="mb-4 text-sm">
        Payments must be made as per the agreed milestone or schedule. Work will only commence or continue upon receipt of agreed deposits or partial payments.
      </p>

      <h2 className="text-md font-semibold mt-6 mb-2">3. Revisions</h2>
      <p className="mb-4 text-sm">
        A limited number of revisions are included in each project. Excessive revisions or major changes after approval may incur additional charges.
      </p>

      <h2 className="text-md font-semibold mt-6 mb-2">4. Timelines</h2>
      <p className="mb-4 text-sm">
        Project timelines depend on timely communication and asset delivery by the client. Delays in communication can extend project delivery.
      </p>

      <h2 className="text-md font-semibold mt-6 mb-2">5. Termination</h2>
      <p className="mb-4 text-sm">
        Either party may terminate the project with written notice. In case of termination, payment will be due for work completed up to that point.
      </p>
    </div>
  );
};

export default TermsOfService;
