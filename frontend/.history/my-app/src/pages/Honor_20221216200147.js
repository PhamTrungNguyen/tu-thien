import React from 'react';
import styled from 'styled-components';
const TableStyles = styled.div`
  overflow-x: auto;
  background-color: white;
  border-radius: 10px;
  font-size: 14px;
  table {
    overflow-x: auto;
    width: 100%;
  }
  thead {
    background-color: #f7f7f8;
  }
  th,
  td {
    vertical-align: middle;
    white-space: nowrap;
  }
  th {
    padding: 20px 20px;
    font-weight: 600;
    text-align: center;
  }
  td {
    padding: 15px 30px;
  }
  tbody {
  }
  .title-post {
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100px;
    max-width: 100px;
    white-space: pre-wrap;
    word-break: break-word;
  }
`;
const Honor = () => {

    return (
        <div>
            <TableStyles className="p-[20px] h-[450px]">
                <table>
                    <thead>
                        <tr>
                            <th>STT</th>
                            <th>Bài viết</th>
                            <th>Tác giả</th>
                            <th>Trạng thái</th>
                            <th>Nổi bật</th>
                            <th>Hành động</th>
                        </tr>
                    </thead>
                    <tbody >
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                        <td>123</td>
                    </tbody>

                </table>
            </TableStyles>
        </div>
    );
};

export default Honor;