// // import React from "react";
// import React, { Component } from 'react'
// import './button.css'
// import '../Table/table.css'
// import Pagination from "../Pagination/Pagination"
// import PropTypes from "prop-types";
// import { connect } from "react-redux";
// import { fetchList } from '../../Store/Actions/listActions';
// import { render } from 'react-dom';


// class TableData extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             list: [],
//             currentPage: 0
//         }
//     }

//     componentDidMount() {
//         console.log("call------")
//         this.props.fetchList(this.state.currentPage, '')
//         this.setState({
//             list: this.props.list
//         })
//     }

//     componentWillReceiveProps(nextProps, prevProps) {
//         console.log("Will call")
//         this.setState({
//             list: nextProps.list
//         })
//     }

//     render() {
//         const header =
//             <thead>
//                 <tr>
//                     <th>Name</th>
//                     <th>Type</th>
//                     <th>Company</th>
//                     <th>Actions</th>
//                 </tr>
//             </thead>


//         let data = this.state.list.map((item, index) =>
//             <tr key={item._id}>
//                 <td>{item.name}</td>
//                 <td>{item.type}</td>
//                 <td>{item.company}</td>
//                 <td><button className="button button1" name={item._id} >-</button></td>
//             </tr>
//         )
//         return <table className="Table"> {header}<tbody>{data}</tbody> </table>
//     }

// }

// // Typechecking With PropTypes
// TableData.propTypes = {
//     list: PropTypes.array,
// };

// // Map reducer's state as props
// const mapStateToProps = (state) => ({
//     list: state.list.dataList,
//     currentPage: state.list.currentPage
// });

// export default connect(mapStateToProps, { fetchList })(TableData);


// import React from "react";
import React, { useState, useEffect } from 'react'
import './button.css'
import '../Table/table.css'
import Pagination from "../Pagination/Pagination"
import PropTypes from "prop-types";
import { connect, useDispatch, useSelector } from "react-redux";
import { fetchList } from '../../Store/Actions/listActions';
import { render } from 'react-dom';


const TableData = () => {
    const [currentPage, setcurrentPage] = useState(0);
    const [list, setList] = useState([]);

    const listt = useSelector(state => state.list.dataList);

    // const { listt, currentPagee } = useSelector(state => ({
    //     listt: state.list.dataList,
    //     currentPagee: state.list.currentPage
    // }), shallowEqual);

    const dispatch = useDispatch()

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         list: [],
    //         currentPage: 0
    //     }
    // }

    // componentDidMount() {
    //     console.log("call------")
    //     this.props.fetchList(this.state.currentPage, '')
    //     this.setState({
    //         list: this.props.list
    //     })
    // }

    useEffect(() => {
        console.log("ANkit")
        dispatch(fetchList(currentPage, ''))
        setList(listt)
    }, [])

    // componentWillReceiveProps(nextProps, prevProps) {
    //     console.log("Will call")
    //     this.setState({
    //         list: nextProps.list
    //     })
    // }

    const header =
        <thead>
            <tr>
                <th>Name</th>
                <th>Type</th>
                <th>Company</th>
                <th>Actions</th>
            </tr>
        </thead>


    let data = listt.map((item, index) =>
        <tr key={item._id}>
            <td>{item.name}</td>
            <td>{item.type}</td>
            <td>{item.company}</td>
            <td><button className="button button1" name={item._id} >-</button></td>
        </tr>
    )
    return <table className="Table"> {header}<tbody>{data}</tbody> </table>

}

// Typechecking With PropTypes
// TableData.propTypes = {
//     listt: PropTypes.array,
// };

// // Map reducer's state as props
// const mapStateToProps = (state) => ({
//     list: state.list.dataList,
//     currentPage: state.list.currentPage
// });


export default TableData
