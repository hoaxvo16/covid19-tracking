import { DataGrid } from "@material-ui/data-grid";
import { useEffect, useState } from "react";
import getCovidData from "../../services/getCovidData";
export default function DashBoard() {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "flag",
      headerName: "Flag",
      width: 130,
      renderCell: params => (
        <strong>
          <img className="country-flag" src={params.value}></img>
        </strong>
      ),
    },
    { field: "country", headerName: "Country", width: 250 },
    { field: "infected", headerName: "Infected", width: 150, type: "number" },
    { field: "recovered", headerName: "Recovered", width: 150, type: "number" },
    { field: "deaths", headerName: "Deaths", width: 150, type: "number" },
  ];
  const [rowsData, setRowsData] = useState([]);
  const [globalData, setGloBalData] = useState({ TotalConfirmed: 0, TotalRecovered: 0, TotalDeaths: 0 });

  useEffect(async () => {
    const covidData = await getCovidData();
    setRowsData(covidData[0]);
    setGloBalData(covidData[1]);
    return () => {};
  }, []);

  return (
    <div className="dashboard">
      <div>
        <h2>COUNTRIES</h2>
        <div className="data-grid">
          <DataGrid rows={rowsData} columns={columns} />
        </div>
      </div>
      <div className="total">
        <span>
          <span>Total infected:</span> {globalData.TotalConfirmed}
        </span>
        <span>
          <span>Total recovered:</span> {globalData.TotalRecovered}
        </span>
        <span>
          <span>Total deaths:</span> {globalData.TotalDeaths}
        </span>
      </div>
    </div>
  );
}
