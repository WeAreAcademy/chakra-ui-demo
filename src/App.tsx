import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { AmazingChakraDemo } from "./AmazingChakraDemo";
import { DemoCard } from "./DemoCard";
import { DemoTable } from "./DemoTable";

function App() {


  return (
    <Tabs>
      <TabList>
        <Tab>One</Tab>
        <Tab>Two</Tab>
        <Tab>Three</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <DemoCard />
        </TabPanel>
        <TabPanel>
          <DemoTable />
        </TabPanel>
        <TabPanel>
          <AmazingChakraDemo />
        </TabPanel>
      </TabPanels>
    </Tabs>

  );
}
export default App;
