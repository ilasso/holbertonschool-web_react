import { RowID, RowElement } from './interface'

export function updateRow(rowId: number, row: object): RowElement

export function deleteRow(rowId: number): any

export function insertRow(row: object): number