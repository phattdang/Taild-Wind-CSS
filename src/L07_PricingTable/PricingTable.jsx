import classNames from "../FilterClassname";

export default function PricingTable() {
  return (
    <>
      <div
        className={classNames(
          "pricing_table grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto"
        )}
      >
        <div
          className={classNames(
            "pricing_table__basic border border-gray-300 shadow-md",
            "w-full text-center p-5 transition-transform hover:scale-110",
            "duration-300 bg-white rounded-sm"
          )}
        >
          <p className="basic__title text-lg font-semibold">Basic card</p>
          <p className="basic__desc text-sm text-gray-500">
            Basic card for basic code
          </p>
        </div>
        <div
          className={classNames(
            "pricing_table__basic border border-gray-300 shadow-md",
            "w-full text-center p-5 transition-transform hover:scale-110",
            "duration-300 bg-white rounded-sm"
          )}
        >
          <p className="pro__title text-lg font-semibold">Pro card</p>
          <p className="pro__desc text-sm text-gray-500">
            Pro card for Pro code
          </p>
        </div>
        <div
          className={classNames(
            "pricing_table__basic border border-gray-300 shadow-md",
            "w-full text-center p-5 transition-transform hover:scale-110",
            "duration-300 bg-white rounded-sm",
            "duration-300 bg-white rounded-sm"
          )}
        >
          <p className="enterprise__title text-lg font-semibold">
            Enterprise card
          </p>
          <p className="text-sm enterprise__desc  text-gray-500">
            Enterprise card for
          </p>
        </div>
      </div>
    </>
  );
}
