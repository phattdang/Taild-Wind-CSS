export default function Form() {
  return (
    <div className="border border-gray-300 p-5 max-w-100 h-auto mx-auto">
      <div className="form flex flex-col items-center space-y-4 rounded-sm">
        <input
          className="border border-gray-300 px-4 py-2 w-full rounded-sm"
          type="email"
          name="email"
          id=""
          placeholder="Email"
        />
        <input
          className="border border-gray-300 px-4 py-2 w-full rounded-sm"
          type="password"
          name="password"
          id=""
          placeholder="Password"
        />
      </div>
    </div>
  );
}
