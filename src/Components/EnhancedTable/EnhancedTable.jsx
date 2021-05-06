import React, { useState } from "react";
import "./EnhancedTable.css";
import PropTypes from "prop-types";
import clsx from "clsx";
import { lighten, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import DeleteIcon from "@material-ui/icons/Delete";

function createData(id, name, calories, fat, carbs, protein) {
  return { id, name, calories, fat, carbs, protein };
}

const rows = [
  createData("e6cadb7bb1962e7", "5 yoghurt", 305, 3.7, 67, 4.3),
  createData("e41320ba6ag4762", "2", 452, 25.0, 51, 4.9),
  createData("6f896ef63d594ge", "3", 262, 16.0, 24, 6.0),
  createData("ec88e0a6bb518gb", "5 yoghurt", 159, 6.0, 24, 4.0),
  createData("g12d5f71ag7c81c", "5", 356, 16.0, 49, 3.9),
  createData("51001edg4407225", "6", 408, 3.2, 87, 6.5),
  createData("736becab43f5582", "7", 237, 9.0, 37, 4.3),
  createData("9e25a87ee87603b", "8", 375, 0.0, 94, 0.0),
  createData("b94c84ae175d806", "9", 518, 26.0, 65, 7.0),
  createData("eg922dcbe1990ac", "10", 392, 0.2, 98, 0.0),
  createData("597f536df3f49cb", "11", 318, 0, 81, 2.0),
  createData("057b33c418d785b", "12", 360, 19.0, 9, 37.0),
  createData("d1a9abga3c2a4a0", "1", 437, 18.0, 63, 4.0),
  createData("68f9d35d5155g3a", "2", 305, 3.7, 67, 4.3),
  createData("5cf2bc8bc4604g0", "5 yoghurt", 452, 25.0, 51, 4.9),
  createData("ca077228530ec6b", "5 yoghurt", 262, 16.0, 24, 6.0),
  createData("f4c682gf995bbaf", "5 yoghurt", 159, 6.0, 24, 4.0),
  createData("cb0dfc24b9e2cfd", "6", 356, 16.0, 49, 3.9),
  createData("ebgfa7b04f09107", "7", 408, 3.2, 87, 6.5),
  createData("d219364a0f0d569", "8", 237, 9.0, 37, 4.3),
  createData("dd8350c602eegg4", "9", 375, 0.0, 94, 0.0),
  createData("96bfdfg4dcg1gef", "10", 518, 26.0, 65, 7.0),
  createData("2fsaf5g4643fsaf", "11", 392, 0.2, 98, 0.0),
  createData("a91f676c4853239", "12", 318, 0, 81, 2.0),
  createData("d65565f264555f1", "13", 360, 19.0, 9, 37.0),
  createData("2286635de69d8b4", "14", 437, 18.0, 63, 4.0),
  createData("973ac25746e409c", "15", 305, 3.7, 67, 4.3),
  createData("52008cge7c4b2b5", "16", 452, 25.0, 51, 4.9),
  createData("a55g3f771b3b012", "Eclair1", 262, 16.0, 24, 6.0),
  createData("a1803g7046c89ag", "Frozen yoghurt1", 159, 6.0, 24, 4.0),
  createData("5f86c603g9ca4d4", "Gingerbread1", 356, 16.0, 49, 3.9),
  createData("1a93432307d6229", "Honeycomb1", 408, 3.2, 87, 6.5),
  createData("296147de620db59", "Ice cream sandwich1", 237, 9.0, 37, 4.3),
  createData("ef81526bde0866b", "Jelly Bean1", 375, 0.0, 94, 0.0),
  createData("d860cgd4fad54c7", "KitKat1", 518, 26.0, 65, 7.0),
  createData("2f45463saf3fsaf", "Lollipop1", 392, 0.2, 98, 0.0),
  createData("a9ge6gf9c8298g0", "Marshmallow1", 318, 0, 81, 2.0),
  createData("23207e56acc3939", "Nougat1", 360, 19.0, 9, 37.0),
  createData("g9312b609egcf86", "Oreo1", 437, 18.0, 63, 4.0),
  createData("fd1884ff3c0a8a0", "Nougat1", 360, 19.0, 9, 37.0),
  createData("g3c32g5bd13b8d5", "Oreo1", 437, 18.0, 63, 4.0),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Dessert (100g serving)",
  },
  { id: "calories", numeric: true, disablePadding: false, label: "Calories" },
  { id: "fat", numeric: true, disablePadding: false, label: "Fat (g)" },
  { id: "carbs", numeric: true, disablePadding: false, label: "Carbs (g)" },
  { id: "protein", numeric: true, disablePadding: false, label: "Protein (g)" },
];

function EnhancedTableHead(props) {
  const {
    classes,
    onSelectAllClick,
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;

  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick} 
          />
        </TableCell>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="left"
            padding={headCell.disablePadding ? "none" : "default"}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span className={classes.visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  numSelected: PropTypes.number.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  onSelectAllClick: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired,
};

const useToolbarStyles = makeStyles((theme) => ({
  root: {
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(1),
  },
  highlight:
    theme.palette.type === "light"
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  title: {
    flex: "1 1 100%",
  },
}));

const EnhancedTableToolbar = (props) => {
  const classes = useToolbarStyles();
  const { numSelected } = props;

  return (
    <Toolbar
      className={clsx(classes.root, {
        [classes.highlight]: numSelected > 0,
      })}
    >
      {numSelected > 0 ? (
        <Typography
          className={classes.title}
          color="inherit"
          variant="subtitle1"
          component="div"
        >
          {numSelected} selected
        </Typography>
      ) : (
        <Typography
          className={classes.title}
          variant="h6"
          id="tableTitle"
          component="div"
        >
          Nutrition
        </Typography>
      )}

      {numSelected > 0 && (
        <Tooltip title="Delete">
          <IconButton classes={{ root: "enhanced-table-delete-icon-btn" }}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      )}
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  numSelected: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  paper: {
    width: "100%",
    marginBottom: theme.spacing(2),
  },
  table: {
    minWidth: 750,
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1,
  },
}));

export default function EnhancedTable() {
  const classes = useStyles();
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("calories");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const onSelectAllClick = () => {
    console.log("onSelectAllClick");
    // if (event?.target?.checked) {
    //   const newSelecteds = rows.map((n) => n.id);
    //   setSelected(newSelecteds);
    //   return;
    // }
    // setSelected([]);
  };

  const handleClick = (id) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (id) => selected.indexOf(id) !== -1;

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <EnhancedTableToolbar numSelected={selected.length} />
        <TableContainer>
          <Table className={classes.table} size="medium">
            <EnhancedTableHead
              classes={classes}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={onSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  const isItemSelected = isSelected(row.id);

                  return (
                    <TableRow
                      hover
                      onClick={() => handleClick(row.id)}
                      role="checkbox"
                      tabIndex={-1}
                      key={row.id}
                      selected={isItemSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox checked={isItemSelected} />
                      </TableCell>
                      <TableCell align="left">{row.name}</TableCell>
                      <TableCell align="left">{row.calories}</TableCell>
                      <TableCell align="left">{row.fat}</TableCell>
                      <TableCell align="left">{row.carbs}</TableCell>
                      <TableCell align="left">{row.protein}</TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 53 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          classes={{ root: "enhanced-table-table-pagination" }}
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
