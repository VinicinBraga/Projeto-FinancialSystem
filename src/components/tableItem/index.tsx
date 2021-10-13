import * as C from './styles';
import { Item } from '../../types/Item'
import { formatDate } from '../../helpers/dateFilter'
type Props = {
  item: Item
}

export const TableItem = ({item}: Props) => {
  return (
    <C.TableLine>
      <C.TableColum>{formatDate(item.date)}</C.TableColum>
      <C.TableColum>{item.category}</C.TableColum>
      <C.TableColum>{item.title}</C.TableColum>
      <C.TableColum>R$ {item.value}</C.TableColum>
    </C.TableLine>
  );
}
    
    