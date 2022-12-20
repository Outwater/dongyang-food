import { useEffect, useState } from "react";
import { createHeaderGroups, createRowModel } from "./builder";

//Todo: search 시 include의 경우 filterQuery 처리
//strapi 사례: https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/filtering-locale-publication.html#filtering

const useDataTable = ({ dataSource, tableModel, globalFilter }) => {
  const [rows, setRows] = useState(dataSource);

  useEffect(() => {
    if (!globalFilter) {
      setRows(dataSource);
      return;
    }

    const filteredRows = Object.entries(globalFilter).reduce((acc, [key, value]) => {
      return acc.filter((data) => data[key] == value);
    }, dataSource);

    setRows(filteredRows);
  }, [globalFilter]);

  return {
    headerGroups: createHeaderGroups(tableModel),
    originRowModel: dataSource,
    rowModel: createRowModel(rows, tableModel),
  };
};

export default useDataTable;
