import { ReactNode } from "react";

export type Primitive = null | undefined | string | number | boolean;

export interface CommonCell {
  id: string;
  value: Primitive;
}

export interface Cell<Row> extends CommonCell {
  rowData: Row;
  label: string;
  accessor: keyof Row | "action";
  render: CellRenderer<Cell<Row>>;
}

export interface THead<Row> extends CommonCell {
  label: string;
  accessor: keyof Row | "action";
  render: headerRenderer<THead<Row>>;
}

export type headerRenderer<CellType> = (props: { headerProps: CellType }) => ReactNode | Primitive;

export type CellRenderer<CellType> = (props: { cellProps: CellType }) => ReactNode | Primitive;

interface TableColumn<Row> {
  label: string;
  accessor: keyof Row | "action";
  header?: { render: headerRenderer<THead<Row>> };
  cell?: { render: CellRenderer<Cell<Row>> };
}

export type TableModel<Row> = Array<TableColumn<Row>>;
