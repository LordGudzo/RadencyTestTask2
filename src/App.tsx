import React from 'react';
import './App.css';
import ArchivTable from './pages/archivTable/ArchivTable';
import NotesTableContainer from './pages/notesTable/NotesTableContainer';
import SummaryTable from './pages/summaryTable/SummaryTable';
import SummaryTableContainer from './pages/summaryTable/SummaryTableContainer';

function App(): JSX.Element {
  return (    
    <div className='tablesPage'>
      <div className='noteTable'>
        <NotesTableContainer />
      </div>

      {/* <div>
        <ArchivTable />
      </div> */}  
         
      <div className='summaryTable'>
        <SummaryTableContainer />
      </div>
      
    </div>
  );
}

export default App;
