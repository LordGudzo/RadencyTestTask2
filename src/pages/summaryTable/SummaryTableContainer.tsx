import React from "react";
import { connect } from "react-redux";
import { IStore } from "../../types/types";
import SummaryTable from "./SummaryTable";


const mapStateToProps = (state: IStore) => {
    
    return {
       summaryTable: state.summaryTable        
    }
}

export default connect(mapStateToProps, {})(SummaryTable)