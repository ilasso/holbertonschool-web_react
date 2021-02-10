import { RowID, RowElement } from './interface';

/*export type updateRow = (rowId: RowID, row: RowElement) => number;

export type deleteRow = (rowId: RowID) => void;

export type insertRow = (row: RowElement) => number;*/

export function updateRow(rowId: RowID, row: RowElement): RowID;

export function deleteRow(rowId: RowID): void;

export function insertRow(row: RowElement): RowID;
