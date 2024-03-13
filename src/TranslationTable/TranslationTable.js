import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';

const columns = [
    { id: 'name', label: 'Translation Name', minWidth: 170 },
    { id: 'srcLng', label: 'Source language', minWidth: 100 },
    {
        id: 'targetLng',
        label: 'Target Language',
        minWidth: 170,
        align: 'right',
        // format: (value) => value.toDateString('en-US'),
    },
    {
        id: 'updatedAt',
        label: 'Last Updated',
        minWidth: 170,
        align: 'right',
        // format: (value) => value.toDateString('en-US'),
    },
    //   {
    //     id: 'density',
    //     label: 'Density',
    //     minWidth: 170,
    //     align: 'right',
    //     format: (value) => value.toFixed(2),
    //   },
];

function createData(name, srcLng, targetLng, updatedAt) {
    return { name, srcLng, targetLng, updatedAt: updatedAt };
}

const rows = [
    createData('Home', 'English', 'Vietnamese', new Date().toDateString()),
    createData('About Us', 'English', 'Vietnamese', new Date().toDateString()),
    createData('Contact Us', 'English', 'Vietnamese', new Date().toDateString()),
    createData('Eyes', 'English', 'Vietnamese', new Date().toDateString()),
    createData('Beauty', 'English', 'Vietnamese', new Date().toDateString()),
    createData('Home', 'English', 'Vietnamese', new Date().toDateString()),
    createData('About Us', 'English', 'Vietnamese', new Date().toDateString()),
    createData('Contact Us', 'English', 'Vietnamese', new Date().toDateString()),
    createData('Eyes', 'English', 'Vietnamese', new Date().toDateString()),
    createData('Beauty', 'English', 'Vietnamese', new Date().toDateString()),
    createData('Home', 'English', 'Vietnamese', new Date().toDateString()),
    createData('About Us', 'English', 'Vietnamese', new Date().toDateString()),
    createData('Contact Us', 'English', 'Vietnamese', new Date().toDateString()),
    createData('Eyes', 'English', 'Vietnamese', new Date().toDateString()),
    createData('Beauty', 'English', 'Vietnamese', new Date().toDateString()),
];

export default function StickyHeadTable() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);


    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ overflow: 'hidden' }}>
            {/* <TableContainer sx={{ maxHeight: 440 }}> */}
            <TableContainer >

                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <StyledTableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </StyledTableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {value}
                                                    {/* {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value} */}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            {/* <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            /> */}
        </Paper>
    );
}
