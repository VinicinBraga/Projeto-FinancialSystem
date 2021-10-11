import { useState, useEffect } from 'react'

import * as C from './App.styles'
import { Item } from './types/Item'
import { Category } from './types/Category'
import { items } from './data/items'
import { categories } from './data/categories'
import { getcurrentMonth, filterListByMonth} from './helpers/dateFilter'
import { TableArea } from './components/tableArea/index';


const App = () => {
  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getcurrentMonth())

  useEffect(() => {
    setFilteredList(filterListByMonth(list,currentMonth))
  },[list,currentMonth]) 

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Financeiro</C.HeaderText>
      </C.Header>
      <C.Body>
        { }
        { }
        <TableArea />
      </C.Body>
    </C.Container>
  );
}

export default App;