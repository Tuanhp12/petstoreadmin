import React,{useEffect} from 'react'
import { connect } from 'react-redux'
import {getCategories} from '../../actions/categoryActions'

function ListProducts({categoriesProps,getCategories}) {
    useEffect(() => {
        getCategories();        
    }, [])
    const categories = categoriesProps
    return (
        <div>
            
        </div>
    )
}

const mapStateToProps = state => ({
    categoriesProps: state.category.categories
})

export default connect(mapStateToProps, {getCategories})(ListProducts)
