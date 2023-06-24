import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Indonesia from "./pages/Indonesia";
import Provinsis from "./pages/Provinsis";
import About from "./pages/About";
import Layout from "./Layout";
import { ThemeProvider } from "styled-components";
import theme from "./utils/constants/theme";
import GlobalStyle from "./components/GlobalStyle";
import { useState } from "react";
import data from "./utils/constants/provinces";
const App = () => {
  const [tableData, setTableData] = useState(data.provinces);
  return (
  <div>
    <>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
      <Layout>
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/indonesia" element={<Indonesia/>}></Route>
            <Route path="/provinsi" element={<Provinsis/>} tableData={tableData} setTableData={setTableData}></Route>
            <Route path="/about" element={<About/>}></Route>
        </Routes>
      </Layout>
    </ThemeProvider>
    </>

    
  </div>
  );
}

export default App;
