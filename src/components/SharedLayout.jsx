import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { ColorRing } from 'react-loader-spinner';

import { CardWraper, StyledLink } from './App.styled';

export const SharedLayout = () => {
  return (
    <>
      <CardWraper>
        <StyledLink to="/goit-react-hw-05-movies">Home</StyledLink>
        <StyledLink to="movies">About</StyledLink>
      </CardWraper>
      <Suspense
        fallback={
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
          />
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};
