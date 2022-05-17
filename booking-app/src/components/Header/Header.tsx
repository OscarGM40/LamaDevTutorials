import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faPlane,
  faTaxi
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { format } from 'date-fns'
import { useState } from 'react'
import { DateRangePicker } from 'react-date-range'
import 'react-date-range/dist/styles.css' // main style file
import 'react-date-range/dist/theme/default.css' // theme css file
import './Header.scss'

const Header = () => {
  const [openDate, setOpenDate] = useState(false)
  const [openOptions, setOpenOptions] = useState(false)
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1
  })
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ])

  const handleOption = (option: 'adult' | 'children' | 'room', op: string) => {
    setOptions((prev) => {
      return {
        ...prev,
        /* va a girar sobre la puta opción(me dió igual que fuera una enum) */
        [option]: op === 'i' ? prev[option] + 1 : prev[option] - 1
      }
    })
  }

  return (
    <div className='header' data-testid='header'>
      <div className='headerContainer'>
        <div className='headerList'>
          <div className='headerListItem active'>
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>

          <div className='headerListItem'>
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>

          <div className='headerListItem'>
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>

          <div className='headerListItem'>
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>

          <div className='headerListItem'>
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
        <h1 className='headerTitle'>{`A lifetime of discounts? It's Genius.`}</h1>
        <p className='headerDesc'>
          Get rewarded for your travels - unlock instant savings of 10% or more
          with a free CheapyBooking account
        </p>
        <button className='headerBtn'>Sign in / Register</button>
        <div className='headerSearch'>
          <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faBed} className='headerIcon' />
            <input
              type='text'
              placeholder='Where are you going?'
              className='headerSearchInput'
            />
          </div>

          <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faCalendarDays} className='headerIcon' />
            <span
              onClick={() => setOpenDate(!openDate)}
              className='headerSearchText'
            >{`${format(date[0].startDate, 'MM//dd/yyyy')} to ${format(
              date[0].endDate,
              'MM//dd/yyyy'
            )}`}</span>
            {openDate && (
              <DateRangePicker
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection as any])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className='date-range'
                color='red'
              />
            )}
          </div>

          <div className='headerSearchItem'>
            <FontAwesomeIcon icon={faPerson} className='headerIcon last' />
            <span
              onClick={() => setOpenOptions(!openOptions)}
              className='headerSearchTextFirst'
            >{`${options.adult} adult · ${options.children} children · ${options.room} room`}</span>
            {openOptions && (
              <div className='options'>
                <div className='optionItem'>
                  <span className='optionText'>Adult</span>
                  <div className='optionCounter'>
                    <button
                      className='optionCounterButton'
                      onClick={() => handleOption('adult', 'd')}
                      disabled={options.adult <= 1}
                    >
                      -
                    </button>
                    <span className='optionCounterNumber'>{options.adult}</span>
                    <button
                      className='optionCounterButton'
                      onClick={() => handleOption('adult', 'i')}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className='optionItem'>
                  <span className='optionText'>Children</span>
                  <div className='optionCounter'>
                    <button
                      className='optionCounterButton'
                      onClick={() => handleOption('children', 'd')}
                      disabled={options.children <= 0}
                    >
                      -
                    </button>
                    <span className='optionCounterNumber'>
                      {options.children}
                    </span>
                    <button
                      className='optionCounterButton'
                      onClick={() => handleOption('children', 'i')}
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className='optionItem'>
                  <span className='optionText'>Room</span>
                  <div className='optionCounter'>
                    <button
                      className='optionCounterButton'
                      onClick={() => handleOption('room', 'd')}
                      disabled={options.room <= 1}
                    >
                      -
                    </button>
                    <span className='optionCounterNumber'>{options.room}</span>
                    <button
                      className='optionCounterButton'
                      onClick={() => handleOption('room', 'i')}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className='headerSearchItem'>
            <button className='headerBtn'>Search</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
