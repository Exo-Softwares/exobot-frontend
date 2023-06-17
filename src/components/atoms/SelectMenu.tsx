import styled from 'styled-components'
import { Icon } from './Icon'
import { useEffect, useRef, useState } from 'react'

interface InputProps {
  label: string
  type?: string
  value?: string
  required?: boolean
  defaultOption?: string
  menu: { name: string; id?: string; icon?: string }[]
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
    gap: 10px;
    align-items: center;
    flex-direction: row;

    .arrow {
      position: absolute;
      right: 8px;
    }

    .icon {
      &.small {
        width: 8px;
        height: 8px;
        border-radius: 100%;
        background: blue;
      }
    }
  }

  .menu {
    position: absolute;
    width: 100%;
    z-index: 99;
    max-height: 230px;
    overflow: scroll;
    overflow-y: overlay;
    overflow-x: hidden;
    top: 70px;
    background: #212121;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    padding: 10px 0px;
    transition: opacity 0.2s;
    cursor: default;

    ::-webkit-scrollbar {
      width: 3px;
    }

    ::-webkit-scrollbar-track {
      background: none;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 4px;
      background: #757575;
    }

    nav {
      ul {
        display: flex;
        flex-direction: column;
        gap: 10px;

        li {
          cursor: pointer;
          font-size: 16px;
          padding: 10px 0.6em;
          list-style: none;
          display: flex;
          align-items: center;
          gap: 10px;

          .icon {
            &.small {
              width: 8px;
              height: 8px;
              border-radius: 100%;
              background: blue;
            }
          }

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
  const [option, setOption] = useState(defaultOption)

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
        {option.icon && (
          <div
            className={`icon ${option.icon.length > 7 ? 'large' : 'small'}`}
            style={
              option.icon.length > 7
                ? { backgroundImage: `${option.icon}` }
                : { background: `${option.icon}` }
            }
          />
        )}
        <p>{option.name}</p>
        <Icon
          nameIcon={menuStatus ? 'IoMdArrowDropup' : 'IoMdArrowDropdown'}
          propsIcon={{ className: 'arrow' }}
        />
      </div>
      <div
        style={{
          opacity: `${menuStatus ? `1` : `0`}`,
          visibility: `${menuStatus ? 'visible' : 'hidden'}`,
        }}
        className="menu"
      >
        <nav>
          <ul>
            {menu.map(
              (item, index) =>
                item.name !== option.name && (
                  <li
                    onClick={() => {
                      setOption(item)
                      setMenuStatus(false)
                      console.log(menuStatus)
                    }}
                    key={index}
                  >
                    {item.icon && (
                      <div
                        className={`icon ${
                          item.icon.length > 7 ? 'large' : 'small'
                        }`}
                        style={
                          item.icon.length > 7
                            ? { backgroundImage: `${item.icon}` }
                            : { background: `${item.icon}` }
                        }
                      />
                    )}

                    {item.name}
                  </li>
                ),
            )}
          </ul>
        </nav>
      </div>
    </SelectMenuWrapper>
  )
}

export default SelectMenu
