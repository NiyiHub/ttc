import React, { useState } from 'react';
import Calendar from 'react-calendar';

const styles = {
  calendarContainer: {
    backgroundColor: '#f2f2f2',
    padding: '20px'
  },
  calendarHeader: {
    fontSize: '18px',
    textAlign: 'center',
    color: '#333'
  },
  calendarCell: {
    border: '1px solid #ccc',
    padding: '10px',
    textAlign: 'center',
    cursor: 'pointer'
  },
  selectedCell: {
    backgroundColor: '#333',
    color: '#fff'
  }
};

function App() {
  const [date, setDate] = useState(new Date());

  return (
    <div style={styles.calendarContainer}>
      <Calendar
        value={date}
        onChange={setDate}
        calendarClassName="custom-calendar"
        tileClassName="custom-calendar-cell"
        tileContent={({ date, view }) => view === 'month' && <div style={styles.calendarCell}>{date.getDate()}</div>}
        navbarClassName="custom-calendar-header"
      />
    </div>
  );
}

export default App;
