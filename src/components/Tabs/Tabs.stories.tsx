import { Tab, TabList, TabPanel, TabsRoot } from "./Tabs"

const meta = {
  parameters: {
    layout: 'centered'
  }
}

export default meta

export const Basic = () => {
  return (
    <TabsRoot defaultValue="1">
      <TabList>
        <Tab value="1">tab 1</Tab>
        <Tab value="2">tab 2</Tab>
        <Tab value="3">tab 3</Tab>
      </TabList>
      <TabPanel value="1">
        <div style={{ padding: 20 }}>panel 1</div>
      </TabPanel>
      <TabPanel value="2">
        <div style={{ padding: 20 }}>panel 2</div>
      </TabPanel>
      <TabPanel value="3">
        <div style={{ padding: 20 }}>panel 3</div>
      </TabPanel>
    </TabsRoot>
  )
}