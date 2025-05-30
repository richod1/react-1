import  DtPicker  from 'react-calendar-datetime-picker'
import 'react-calendar-datetime-picker/dist/index.css'
import {useState} from 'react'
const DatePicker = () => {
  const [date, setDate] = useState(null)
  return (
      <DtPicker
        onChange={setDate}
        type='single'
        local='en'
        withTime
        showWeekend
      />
  )
}
export default DatePicker