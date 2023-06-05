import styled from 'styled-components'
import { Icon } from './Icon'
import { useEffect, useRef, useState } from 'react'

interface InputProps {
  label: string
  type?: string
  value?: string
  required?: boolean
  defaultOption?: string
  menu: { item: string }[]
}

const SelectMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  cursor: pointer;

  label {
    span {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  .box {
    width: 100%;
    margin-top: 4px;
    background: #212121;
    padding: 0.4em 0.2em 0.4em 0.6em;
    border: none;
    color: white;
    outline: none;
    font-size: 18px;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme.colors.cardOutline};
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: row;

    .icon {
      position: absolute;
      right: 8px;
    }
  }

  .menu {
    position: absolute;
    width: 100%;
    z-index: 99;
    top: 70px;
    background: #212121;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    padding: 10px 0px;

    nav {
      ul {
        display: flex;
        flex-direction: column;
        gap: 10px;

        li {
          font-size: 16px;
          padding: 10px 0.6em;
          list-style: none;

          &:hover {
            background: #141414;
          }
        }
      }
    }
  }
`

const SelectMenu = ({ label, menu }: InputProps) => {
  const defaultOption = menu[0]

  const [menuStatus, setMenuStatus] = useState(false)
  const [option, setOption] = useState(defaultOption.item)

  const selectMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        selectMenuRef.current &&
        !selectMenuRef.current.contains(event.target as Node)
      ) {
        setMenuStatus(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <SelectMenuWrapper ref={selectMenuRef}>
      <label>{label}</label>
      <div className="box" onClick={() => setMenuStatus(!menuStatus)}>
        <p>{option}</p>
        <Icon
          nameIcon={menuStatus ? 'IoMdArrowDropup' : 'IoMdArrowDropdown'}
          propsIcon={{ className: 'icon' }}
        />
      </div>
      {menuStatus && (
        <div className="menu">
          <nav>
            <ul>
              {menu.map(
                (item, index) =>
                  item.item !== option && (
                    <li
                      onClick={() => {
                        setOption(item.item)
                        setMenuStatus(false)
                      }}
                      key={index}
                    >
                      {item.item}
                    </li>
                  ),
              )}
            </ul>
          </nav>
        </div>
      )}
    </SelectMenuWrapper>
  )
}

export default SelectMenu
