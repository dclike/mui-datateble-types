import { useEffect, useMemo, useState } from "react";
import "./App.css";
import {
  MUIDataTableColumn,
  MUISortOptions,
  MUIDataTableOptions,
} from "mui-datatables";

const data = [
  {
    name: "John",
    lastName: "Doe",
    age: 24,
  },
  {
    name: "Jane",
    lastName: "Doe",
    age: 25,
  },
  {
    name: "Jim",
    lastName: "Carry",
    age: 26,
  },
];

const columns: MUIDataTableColumn[] = [
  {
    name: "name",
    label: "Name",
    options: {
      sortThirdClickReset: true,
    },
  },
  {
    name: "lastName",
    label: "Last Name",
    options: { sortThirdClickReset: true },
  },
  {
    name: "age",
    label: "Age",
    options: {
      sort: false,
    },
  },
];

function App() {
  const [sorting, setSorting] = useState<MUISortOptions>({
    name: "abc",
    direction: "none",
  });

  useEffect(() => {
    console.log(sorting);

    if (sorting?.direction === "asc") {
      console.log("none");
    }
  }, [sorting]);

  const opts = useMemo<MUIDataTableOptions>(() => {
    return {
      onColumnSortChange(changedColumn, direction) {
        setSorting({ name: changedColumn, direction });
      },
      serverSide: true,
    };
  }, []);

  return (
    <>
      <Table
        data={data}
        columns={columns}
        title={"Test table"}
        options={opts}
      />
    </>
  );
}

export default App;
