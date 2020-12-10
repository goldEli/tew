import React, { useState } from "react";
import { Picker, List, Button, Calendar, Toast } from "antd-mobile";
import { ICities } from "@/type";
import dayjs from "dayjs";
import { history } from "umi"

interface ISearchProps {
  cities?: ICities
}

const DATE_FORMATE = 'YYYY-MM-DD'

const Search: React.FC<ISearchProps> = (props) => {
  // const [cities, setCities] = React.useState([[{ label: '杭州', value: '10001' }, { label: '苏州', value: '10002' }]])
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

  const handleSearch = () => {
    if (!date.includes("~")) {
      Toast.fail("Please select date!")
      return
    }
    history.push({
      pathname: "search",
      query: {
        code: selectedCites[0],
        startTime: date.split("~")[0],
        endTime: date.split("~")[1],
      }
    })
  }
  const { cities = [] } = props
  console.log(cities)
  return <div className="search">
    {/* optional cities */}
    <div className="search-addr">
      <Picker
        title="city"
        data={cities as any}
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
    <Button
      onClick={handleSearch}
      size="large" type="warning">Search</Button>
    <Calendar
      visible={calendarVisible}
      onCancel={handleCalendarVisible}
      onConfirm={handleCalendarConfirm}
    />
  </div>
}

export default Search