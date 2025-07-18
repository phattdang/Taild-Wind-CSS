import classNames from "../FilterClassname";

export default function CardPricing({ cardName, desc, color }) {
  const colorClasses = {
    red: "bg-red-300 hover:bg-red-500",
    green: "bg-green-300 hover:bg-green-500",
    gray: "bg-gray-300 hover:bg-gray-500",
  };
  const buttonColor = colorClasses[color] || colorClasses.gray;
  return (
    <>
      <div
        className={classNames(
          "card border border-gray-300 shadow-md rounded-md p-5 ",
          "text-center w-full transition-transform hover:scale-110 bg-white "
        )}
      >
        <h2 className="card__name font-semibold ">{cardName}</h2>
        <p className="card__desc text-sm text-gray-600">{desc}</p>
        <button
          className={classNames(
            "card__button border border-gray-300 shadow-lg ",
            "px-3 py-1",
            "transition-transform hover:scale-110 rounded-md ",
            buttonColor
          )}
        >
          CTA
        </button>
      </div>
    </>
  );
}
