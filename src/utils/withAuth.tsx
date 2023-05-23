import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

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
    const router = useRouter();
    const [data, setData] = useState<boolean>(true);
    const userState = useSelector((state: RootState) => state.user);
    const { authenticated } = userState;
    useEffect(() => {
      const getUser = async () => {
        // let { data } = await axios.get('/auth/me')
        // console.log(data)
        // let authenticated = data.user
        switch (option) {
          case AuthOption.REQUIRED:
            authenticated === true
              ? setData(true)
              : (setData(false),
                router.push('/login'));
            break;
          case AuthOption.FORBIDDEN:
            authenticated === false
              ? setData(true)
              : (setData(false),
                router.push('/'));
            break;
          case AuthOption.ANY:
            setData(true);
            break;

          default:
            break;
        }
      };

      getUser();
    }, []);

    return !!data ? (
      <Component data={data} />
    ) : (
      <>
        <p>Fazer login</p>
      </>
    ); // Render whatever you want while the authentication occurs
  };

  return AuthenticatedComponent;
};
