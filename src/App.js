import React from "react";
import { Table } from "react-bootstrap";
import styled from "styled-components";
import groupList from "./constants/GroupList";

const ColorTr = styled.tr`
  color: ${({ color }) => color};
`;

function App() {
  return (
    <Table bordered>
      <thead>
        <tr>
          <th>グループ</th>
          <th>名前</th>
          <th>年齢</th>
        </tr>
      </thead>
      <tbody>
        {groupList.map(group =>
          group.memberList.map((member, i) => (
            <ColorTr key={member.id} color={group.color}>
              {i === 0 && (
                <td rowSpan={group.memberList.length}>{group.name}</td>
              )}
              <td>{member.name}</td>
              <td>{member.age}</td>
            </ColorTr>
          ))
        )}
      </tbody>
    </Table>
  );
}

export default App;
