import React, { useState } from "react";
import { Picker, List, Button, Calendar } from "antd-mobile";
import dayjs from "dayjs";

interface ISearchProps { }

const DATE_FORMATE = 'YYYY-MM-DD'

const Search: React.FC<ISearchProps> = (props) => {
  const [cities, setCities] = React.useState([[{ label: '杭州', value: '10001' }, { label: '苏州', value: '10002' }]])
  const [selectedCites, setSelectedCites] = React.useState(["10001"])
  const [calendarVisible, setCalendarVisible] = React.useState(false)
  const [date, setDate] = React.useState("select")

  const handleCalendarVisible = () => {
    setCalendarVisible(!calendarVisible)
  }

  const handleCalendarConfirm = (startTime?: Date, endTime?: Date) => {
    handleCalendarVisible()
    setDate(
      `${dayjs(startTime).format(DATE_FORMATE)}~${dayjs(endTime).format(DATE_FORMATE)}`
    )
  }
  
  const handleCityChange = (value: any) => {
    console.log(value)
    setSelectedCites(value)
  }

  return <div className="search">
    {/* optional cities */}
    <div className="search-addr">
      <Picker
        title="city"
        data={cities}
        value={selectedCites}
        cascade={false}
        cols={1}
        onChange={handleCityChange}
      >
        <List.Item>Optional City</List.Item>
      </Picker>
    </div>
    {/* optional times */}
    {/* <List.Item onClick={handleCalendarVisible} extra={date}>Date</List.Item> */}
    <div className='search-time' onClick={handleCalendarVisible}>
      <p className='search-time_left'>Date</p>
      <p className='search-time_right'>{date}</p>
    </div>{/* click button */}
    <Button size="large" type="warning">Search</Button>
    <Calendar
      visible={calendarVisible}
      onCancel={handleCalendarVisible}
      onConfirm={handleCalendarConfirm}
    />
  </div>
}

export default Search