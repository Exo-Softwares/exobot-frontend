/* eslint-disable no-unused-vars */
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

export enum AuthOption {
  REQUIRED = 'required',
  FORBIDDEN = 'forbidden',
  ANY = 'any',
}

export const withAuth = (
  option: AuthOption,
  Component: React.FC<{ data: any }>,
) => {
  const AuthenticatedComponent = () => {
    const router = useRouter()
    const [data, setData] = useState<boolean>(true)
    const userState = useSelector((state: RootState) => state.user)
    const { authenticated } = userState
    useEffect(() => {
      const getUser = async () => {
        switch (option) {
          case AuthOption.REQUIRED:
            // eslint-disable-next-line no-unused-expressions
            authenticated === true
              ? setData(true)
              : (setData(false), router.push('/'))
            break
          case AuthOption.FORBIDDEN:
            // eslint-disable-next-line no-unused-expressions
            authenticated === false
              ? setData(true)
              : (setData(false), router.push('/applications'))
            break
          case AuthOption.ANY:
            setData(true)
            break

          default:
            break
        }
      }

      getUser()
    }, [])

    return data ? (
      <Component data={data} />
    ) : (
      <main>
        <p>Fazer login</p>
      </main>
    ) // Render whatever you want while the authentication occurs
  }

  return AuthenticatedComponent
}
