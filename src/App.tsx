import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ArchivTableContainer from './pages/archivTable/ArchivTableContainer';
import NotesTableContainer from './pages/notesTable/NotesTableContainer';
import SummaryTableContainer from './pages/summaryTable/SummaryTableContainer';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <div className="tablesPage">
        <Routes>
          <Route path="/" element={<NotesTableContainer />} />
          <Route path="/archive" element={<ArchivTableContainer />} />
        </Routes>
        <div className="summaryTable">
          <SummaryTableContainer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
