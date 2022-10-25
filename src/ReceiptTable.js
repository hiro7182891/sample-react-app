import React from 'react'
// STYLE
import { Table } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import './ReceiptTable.css';
// 領収書 詳細
import Receipt from './Receipt';

function ReceiptTable() {

    return (
        <Table fixed id="receiptTable">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>No.</Table.HeaderCell>
            <Table.HeaderCell>代金</Table.HeaderCell>
            <Table.HeaderCell>宛名</Table.HeaderCell>
            <Table.HeaderCell>発行日</Table.HeaderCell>
            <Table.HeaderCell></Table.HeaderCell>
          </Table.Row>
        </Table.Header>
    
        <Table.Body>
          <Table.Row>
            <Table.Cell>01</Table.Cell>
            <Table.Cell>76,800</Table.Cell>
            <Table.Cell>経費 太郎</Table.Cell>
            <Table.Cell>2022/8/17</Table.Cell>
            <Table.Cell>
                <Receipt />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    );
}

export default ReceiptTable;
