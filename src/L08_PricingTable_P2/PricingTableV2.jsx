import classNames from "../FilterClassname";
import CardPricing from "./CardPricing";

export default function PricingTableV2() {
  return (
    <>
      <div
        className={classNames(
          "pricingtable grid grid-cols-1 md:grid-cols-3 p-4 sm:p-6",
          "gap-5 max-w-5xl mx-auto"
        )}
      >
        <CardPricing cardName="Basic card" desc="Nothing" color="red" />
        <CardPricing cardName="Pro card" desc="Nothing" color="green" />
        <CardPricing cardName="Enterprise card" desc="Nothing" color="gray" />
      </div>
    </>
  );
}
