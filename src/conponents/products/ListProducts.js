import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getAllProduct } from "../../actions/productActions";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import SendIcon from "@material-ui/icons/Send";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import { getCategories,getCategory } from "../../actions/categoryActions";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
  table: {
    minWidth: 700,
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

function ListProducts(props) {
  useEffect(() => {
    props.getAllProduct();
    props.getCategories();
  }, []);
  const productsList = [];
  const categoryList = props.categoryProps.categories;
  const productsByCategory = props.categoryProps.category
  console.log(productsList);
  console.log(categoryList);
  console.log(productsByCategory)

  const classes = useStyles();

  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const showProductsByCategory = (id) => {
    console.log("Click");
    props.getCategory(id)
  }

  const category =
    categoryList &&
    categoryList.map((category) => (
      <List key={category.id} component="div" disablePadding>
        <ListItem button onClick={() => showProductsByCategory(category.categoryIdentifier)} className={classes.nested}>
          <ListItemText primary={category.type} />
        </ListItem>
      </List>
    ));

    

  const product =
  productsByCategory.products &&
  productsByCategory.products.map((product) => (
      <StyledTableRow key={product.id}>
        <StyledTableCell component="th" scope="row">
          {product.name}
        </StyledTableCell>
        <StyledTableCell align="right">
          {product.productIdentifier}
        </StyledTableCell>
        <StyledTableCell align="right">{product.description}</StyledTableCell>
        <StyledTableCell align="right">
          {product.currentQuantity}
        </StyledTableCell>
        <StyledTableCell align="right">{product.price}</StyledTableCell>
        <StyledTableCell align="right">{product.create_At}</StyledTableCell>
      </StyledTableRow>
    ));

  const toCreate = () => {
    return <Link to={`/${props.match.url}/addProduct`}></Link>;
  };
  return (
    <div>
      <Button onClick={toCreate}>Create Product</Button>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={classes.root}
      >
        <ListItem button onClick={handleClick}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Category" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          {category}
        </Collapse>
      </List>
      <br />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Name Product</StyledTableCell>
              <StyledTableCell align="right">
                Product Identifier
              </StyledTableCell>
              <StyledTableCell align="right">Description</StyledTableCell>
              <StyledTableCell align="right">Quantity</StyledTableCell>
              <StyledTableCell align="right">Price</StyledTableCell>
              <StyledTableCell align="right">Date Created</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>{product}</TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

const mapStateToProps = (state) => ({
  productProps: state.productState.products,
  categoryProps: state.category,
});

export default connect(mapStateToProps, { getAllProduct, getCategories, getCategory })(
  ListProducts
);
