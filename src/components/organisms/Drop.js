import Select from 'react-select';

import React from 'react'
import { select } from '../atoms';



const options = [
    {value: 'produt 01', label: 'product 01' },
    {value: 'produt 02', label: 'product 02' },
    {value: 'produt 03', label: 'product 03' },
    {value: 'produt 04', label: 'product 04' },
    {value: 'produt 05', label: 'product 05' },
];

export default function Drop() {
  return (
    <div>
     <Select className='Selectn' options={options}/>
    </div>
  )
}
