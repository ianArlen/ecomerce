import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Product from './Product';
import { TextField } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import { Badge } from '@mui/material';
import { ShoppingCart } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    root:{
        flexGrow:1,
        marginLeft:theme.spacing(2),
        padding: theme.spacing(1),
    }
}));

export default function AppPagination(props) {
    const { products } = props;
    const [currentItems, setCurrentItems] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffset, setItemOffset] = useState(0);
    const itemsPerPage = 6;
    
    const classes = useStyles();
    const [searchTerm, setSearchTerm] = useState('')

      
    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setCurrentItems(products.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(products.length / itemsPerPage));
    }, [itemOffset, itemsPerPage, products]);
      
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        setItemOffset(newOffset);
    };
      
        return (
        <div className={classes.root}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={12} sm={6} md={4} lg={3}>
                <IconButton 
                    aria-label="show cart items" 
                    color="inherit"
                    style={{marginLeft:"35%", width: "100px", height: "100px" }}
                >
                    <Badge 
                        badgeContent={2} 
                        color="secondary" 
                        style={{width: "100px", height: "100px" }}
                    >
                    <ShoppingCart 
                        fontSize="large" 
                        color="primary" 
                        style={{width: "100px", height: "100px" }}/>
                    </Badge>
                </IconButton>
                </Grid>
            </Grid>
            <Grid container justifyContent="left">
                <Grid item xs={12} sm={6} md={4} lg={3}>
                <TextField 
                    id="outlined-basic" 
                    label="Search..." 
                    variant="outlined"
                    onChange={event => {
                        setSearchTerm(event.target.value)
                    }}
                    fullWidth
                    style={{marginBottom: '20px'}} 
                />
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                {currentItems.filter((product) => {
                    if(searchTerm ===""){
                        return product
                    }else if(product.name.toLowerCase().includes(searchTerm.toLowerCase())){
                        return product
                    }
                }).map((product, key )=> {
                        return(
                        <Grid item xs={12} sm={6} md={4} lg={4}>
                            <Product key={key} product={product}/> 
                        </Grid>
                    );
                })}
            </Grid>
            <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              pageCount={pageCount}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
              containerClassName="pagination"
              pageLinkClassName="page-num"
              previousLinkClassName="page-num"
              nextLinkClassName="page-num"
              activeLinkClassName="active"
            />
        </div>
        );
}