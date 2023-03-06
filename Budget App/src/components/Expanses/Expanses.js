import React,{useState} from 'react'
import ExpasnseItem from '../Expanses/ExpasnseItem'
import Card from '../UI/Card'
import '../Expanses/Expanses.css'
import ExpensesFilter from '../NewExpanse/ExpensesFilter'

const Expanses = (props) =>  {
  const [selectYear, setSelectYear] = useState('2019')
  const ExpansesYear = (year) =>{
    setSelectYear(year);
  }
  return (
    <div>
      <ExpensesFilter defalutYear={selectYear} onExpanseYear={ExpansesYear}/>
    <Card className='expense'>
        <ExpasnseItem
        date={props.item[0].date}
        title={props.item[0].title}
        price={props.item[0].price}
      />
      <ExpasnseItem
        date={props.item[1].date}
        title={props.item[1].title}
        price={props.item[1].price}
      />
      <ExpasnseItem
        date={props.item[2].date}
        title={props.item[2].title}
        price={props.item[2].price}
      />
      <ExpasnseItem
        date={props.item[3].date}
        title={props.item[3].title}
        price={props.item[3].price}
      />
    </Card>
    </div>
  )
}

export default Expanses