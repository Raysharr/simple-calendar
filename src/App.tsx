import { useState } from 'react';

import './App.css';
import { Calendar } from './components';
import { Card } from './components/Card';

function App() {
  const twoDaysPlusOrMinus = new Date(
    new Date().setDate(
      new Date().getDate() > 20
        ? new Date().getDate() - 2
        : new Date().getDate() + 2,
    ),
  );

  const [date, setDate] = useState<Date | [Date, Date]>(twoDaysPlusOrMinus);

  return (
    <Card>
      <Calendar
        value={date}
        onChange={setDate}
        displayDayGridHeader
        displayDayNavigation
      />
    </Card>
  );
}

export default App;
