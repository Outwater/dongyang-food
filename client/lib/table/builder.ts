import { TableModel, THead } from "./types";
import { generateId } from "./utils";

const createHeaderGroups = <Row>(tableModel: TableModel<Row>): Array<THead<Row>> => {
  const headerGroups = tableModel.map((model) => {
    const { label, accessor, header } = model;

    return {
      id: generateId("tableHead"),
      value: label,
      label,
      accessor,
      render:
        header && typeof header.render === "function"
          ? header.render
          : ({ headerProps }) => headerProps.label,
    };
  });

  return headerGroups;
};

const createRowModel = <Row>(source: Array<Row>, tableModel: TableModel<Row>) => {
  const rows = source.map((row) => {
    return {
      id: generateId("tableRow"),
      cells: createCells<Row>(row, tableModel),
    };
  });

  return rows;
};

//Fix: Row[key] 가 array일 경우
const createCells = <Row>(data: Row, tableModel: TableModel<Row>) => {
  return tableModel.map((model) => {
    const { label, accessor, cell } = model;
    const value = accessor === "action" ? "action" : data[accessor];

    return {
      id: generateId("tableCell"),
      rowData: data,
      label,
      accessor,
      value,
      render:
        cell && typeof cell.render === "function"
          ? cell.render
          : ({ cellProps }) => cellProps.value,
    };
  });
};

export { createHeaderGroups, createRowModel };
