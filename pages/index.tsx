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
          Component={Component1}
          props={{ value: "Test123" }}
        />

        <PopoutContainer title="Komponente 2" Component={Component2} />
      </div>
    </Layout>
  );
};

export default Home;
