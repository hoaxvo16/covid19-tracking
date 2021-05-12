import { DataGrid } from "@material-ui/data-grid";
export default function DashBoard() {
  const columns = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "country", headerName: "Country", width: 130 },
    { field: "infected", headerName: "Infected", width: 130, type: "number" },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 90,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: params => `${params.getValue("firstName") || ""} ${params.getValue("lastName") || ""}`,
    },
  ];
  const rows = [{ id: 1, lastName: "Snow", firstName: "Jon", age: 35 }];
  return (
    <div className="dashboard">
      <h2>DASHBOARD</h2>
      <DataGrid autoHeight rows={rows} columns={columns} pageSize={5} checkboxSelection />
    </div>
  );
}
