import React from 'react';
import { Table } from '@mui/joy';
import { styled } from '@mui/joy/styles';

const StyledTable = styled(Table)({
  width: '100%',
  tableLayout: 'fixed',
  borderCollapse: 'collapse',
  '& th': {
    verticalAlign: 'middle',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    backgroundColor: 'white',
  },
  '& td': {
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    backgroundColor: 'white',
  },
});

const TableWrapper = styled('div')({
  width: '100%',
  overflowX: 'auto',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  scrollbarWidth: 'none',
});

const CustomTable = ({ headers, data, headerStyle, cellStyle, columnWidths }) => {
  return (
    <TableWrapper>
      <StyledTable borderAxis='both'>
        <thead>
          <tr>
            {headers.map((header, index) => (
              <th 
                key={index} 
                style={{
                  ...headerStyle,
                  width: columnWidths ? columnWidths[index] : 'auto',
                }}
              >
                {header}
              </th>
            ))}
          </tr>   
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  style={
                    typeof cellStyle === 'function'
                      ? cellStyle(cell, rowIndex, cellIndex)
                      : Array.isArray(cellStyle)
                      ? cellStyle[cellIndex] || {}
                      : cellStyle || {}
                  }
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </TableWrapper>
  )
}

export default CustomTable;