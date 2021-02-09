import { RowID, RowElement } from './interface'

export type updateRow(rowId: RowId, row: RowElement): number;

export type deleteRow(rowId: RowID): void;

export type insertRow(row: RowElement): number;