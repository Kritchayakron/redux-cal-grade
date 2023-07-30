import { useState } from "react"
import Table from 'react-bootstrap/Table';
import CreateList from './list';

export function Counter() {

  const rows = [];
    for (let i = 0; i < 3; i++) {
        rows.push(<CreateList key={i} id={(i+1)} />);
    }
    return (
      <div>
        <Table responsive="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>วิชา</th>
              <th>หน่วยกิต</th>
              <th>เกรด</th>
            </tr>
          </thead>
          <tbody>
              {rows} 
          </tbody>
        </Table>
  
      </div>
    );
}
