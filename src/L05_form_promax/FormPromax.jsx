export default function FormPromax() {
  return (
    <div className="container max-w-md mx-auto border border-gray-300 p-5 rounded-md shadow-md shadow-gray-200">
      <div className="form flex flex-col space-y-5 max-w-100">
        <label className="text-sm text-gray-500" htmlFor="email">
          Email
        </label>
        <input
          className="border border-gray-300 px-4 py-2 rounded-md text-md font-semibold focus:ring-2 focus:ring-blue-500 shadow-md shadow-gray-300"
          type="email"
          name="email"
          id="email"
          placeholder="Email"
        />
        <label className="text-sm text-gray-500" htmlFor="password">
          Password
        </label>
        <input
          className="border border-gray-300 px-4 py-2 rounded-md text-md font-semibold focus:ring-2 focus:ring-blue-500 shadow-md shadow-gray-300"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <button className="bg-blue-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-700">
          Submit
        </button>
      </div>
    </div>
  );
}
