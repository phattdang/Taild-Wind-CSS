import "./App.css";
import L1 from "./L01_colors_borders_space_state_flexbox/components/Button";
import Card from "./L02_flexbox_sizing_shadow/components/Card";
import CardPromax from "./L03_transittion_transform/CardProMax";
import Form from "./L04_form/Form";
import FormPromax from "./L05_form_promax/FormPromax";
import NavigationBar from "./L06_NavigationBar/NavigationBar";
import PricingTable from "./L07_PricingTable/PricingTable";
import PricingTableV2 from "./L08_PricingTable_P2/PricingTableV2";

function App() {
  return (
    <>
      <div className="main">
        {/* <L1 /> */}
        {/* <Card /> */}
        {/* <CardPromax /> */}
        {/* <Form /> */}
        {/* <FormPromax /> */}
        {/* <NavigationBar /> */}
        {/* <PricingTable /> */}
        <PricingTableV2 />
      </div>
    </>
  );
}

export default App;
