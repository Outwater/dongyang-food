import { useEffect, useState } from "react";
import { createHeaderGroups, createRowModel } from "./builder";
import { TableModel } from "./types";

//Todo: search 시 include의 경우 filterQuery 처리
//strapi 사례: https://docs.strapi.io/developer-docs/latest/developer-resources/database-apis-reference/rest/filtering-locale-publication.html#filtering

interface Options<Row> {
  dataSource: Row[];
  tableModel: TableModel<Row>;
  globalFilter: any;
}

export default function useDataTable<Row>({ dataSource, tableModel, globalFilter }: Options<Row>) {
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
    headerGroups: createHeaderGroups<Row>(tableModel),
    originRowModel: dataSource,
    rowModel: createRowModel<Row>(rows, tableModel),
  };
}
