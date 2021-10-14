import { useState, useEffect } from 'react'

import * as C from './App.styles'
import { Item } from './types/Item'
//import { Category } from './types/Category'
import { items } from './data/items'
//import { categories } from './data/categories'
import { getcurrentMonth, filterListByMonth} from './helpers/dateFilter'
import { TableArea } from './components/tableArea/index';
import { InfoArea } from './components/infoArea/index';


const App = () => {
  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getcurrentMonth())
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  useEffect(() => {
    setFilteredList(filterListByMonth(list,currentMonth))
  },[list,currentMonth]) 

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth);
  }

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />
        <TableArea list={filteredList} />
      </C.Body>
    </C.Container>
  );
}

export default App;