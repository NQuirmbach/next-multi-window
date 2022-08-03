import type { NextPage } from "next";
import Component1 from "../components/Component1";
import Component2 from "../components/Component2";
import { PopoutContainer } from "../components/PopoutContainer";
import { Layout } from "../components/Layout";

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="container mx-auto flex gap-4 py-4">
        <PopoutContainer
          title="Komponente 1"
          popupKey="component1"
          componentPath="Component1"
          props={{ value: "Test 123 " }}
          hideOnPopup
        >
          <Component1 value="Test 123" />
        </PopoutContainer>

        <PopoutContainer
          title="Komponente 2"
          popupKey="component2"
          componentPath="Component2"
        >
          <Component2 />
        </PopoutContainer>
      </div>
    </Layout>
  );
};

export default Home;
