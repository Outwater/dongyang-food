import { generateId } from "./utils";

const createHeaderGroups = (tableModel) => {
  const headerGroups = tableModel.map((model) => {
    const { label, accessor, header } = model;

    return {
      id: generateId("tableHead"),
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

const createRowModel = (source, tableModel) => {
  const rows = source.map((row) => {
    return {
      id: generateId("tableRow"),
      cells: createCells(row, tableModel),
    };
  });

  return rows;
};

const createCells = (data, tableModel) => {
  return tableModel.map((model) => {
    const { label, accessor, cell } = model;
    const value = data[accessor];

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
