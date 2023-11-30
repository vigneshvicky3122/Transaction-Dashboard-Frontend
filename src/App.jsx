import axios from "axios";
import React, { useEffect, useState } from "react";
const URL = import.meta.env.VITE_BACKEND_URL;
import Table from "./Components/Table";
import Statistics from "./Components/Statistics";
import BarChart from "./Components/BarChart";
import Search from "./Components/Search";

function App() {
  const [isSearch, setSearch] = useState("");
  const [isMonth, setMonth] = useState("All");
  const [Data, setData] = useState([]);
  useEffect(() => {
    if (isMonth === "All") {
      getTableData(`${URL}/all/products`);
    } else {
      getTableData(`${URL}/products/${isMonth}`);
    }
  }, [isMonth]);

  async function getTableData(url) {
    try {
      let res = await axios.get(url);
      if (res.status === 200) {
        setData(res.data.tableData);
      } else {
        console.log(res.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Search setSearch={setSearch} setMonth={setMonth} />
      <Table Data={Data} isSearch={isSearch} isMonth={isMonth} />
      <Statistics Data={Data} isSearch={isSearch} isMonth={isMonth} />
      <BarChart Data={Data} isSearch={isSearch} isMonth={isMonth} />
    </>
  );
}

export default App;
