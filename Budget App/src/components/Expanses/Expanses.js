import React from 'react'
import ExpasnseItem from '../Expanses/ExpasnseItem'
import Card from '../UI/Card'
import '../Expanses/Expanses.css'

const Expanses = (props) =>  {
  return (
    <Card className='expense'>
        <ExpasnseItem
        date={props.item[0].date}
        heading={props.item[0].heading}
        price={props.item[0].price}
      />
      <ExpasnseItem
        date={props.item[1].date}
        heading={props.item[1].heading}
        price={props.item[1].price}
      />
      <ExpasnseItem
        date={props.item[2].date}
        heading={props.item[2].heading}
        price={props.item[2].price}
      />
      <ExpasnseItem
        date={props.item[3].date}
        heading={props.item[3].heading}
        price={props.item[3].price}
      />
    </Card>
  )
}

export default Expanses