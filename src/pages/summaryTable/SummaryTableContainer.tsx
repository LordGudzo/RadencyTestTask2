import React from "react";
import { connect } from "react-redux";
import { setActiveCount, setArchiveCount } from "../../redux/summaryReduser";
import { IStore, NoteType, SummaryTableType } from "../../types/types";
import SummaryTable from "./SummaryTable";

class SummaryTableContainer extends React.Component<Object & SummaryTableType> {

  componentDidMount() {
    this.summaryCount();
  }
   
  componentDidUpdate(prevProps: SummaryTableType, prevState: any) {
    if(prevProps.noteTable.body.length !== this.props.noteTable.body.length) {
      this.summaryCount();
    }
  }

  //count categories in the state and changes state for summary table
  summaryCount() {
    let dataStore = this.props.noteTable.body;
    let archivStore = this.props.noteTable.archivedNotes;

    this.props.noteTable.selectArray.map((category) => {
      let activAmount = this.countCategory(category, dataStore);
      let archivAmount = this.countCategory(category, archivStore);
      this.props.setActiveCount(category, activAmount);
      this.props.setArchiveCount(category, archivAmount);
    })
  }

  // counts numbers category in the store array
  countCategory(category: string, dataStore: [NoteType]) {
    let count = 0;
    dataStore.map((e) => {
      if (category === e.category) {
        count++;
      }
    })

    return count;
  }
   
    render(): JSX.Element {      
       return <SummaryTable {...this.props}/>
    }
}


const mapStateToProps = (state: IStore) => {
    
    return {
       summaryTable: state.summaryTable,
       noteTable: state.notesTable        
    }
}

export default connect(mapStateToProps, { setActiveCount, setArchiveCount })(SummaryTableContainer)