import Layout from "../components/Layout";

export default function Messages() {
  return (
    <Layout>
      <div className="p-6 space-y-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
          <div className="text-6xl mb-4">💬</div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Messages Coming Soon
          </h2>
          <p className="text-gray-600">
            Stay tuned for messaging functionality where you can communicate
            with employers and manage your conversations.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-gray-900">
            What you'll be able to do:
          </h3>
          <div className="bg-white rounded-2xl p-4 shadow-sm">
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-subster-purple rounded-full"></div>
                Chat with employers about job opportunities
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-subster-purple rounded-full"></div>
                Receive job confirmations and updates
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-subster-purple rounded-full"></div>
                Ask questions about job requirements
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-subster-purple rounded-full"></div>
                Share documents and important information
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
}
