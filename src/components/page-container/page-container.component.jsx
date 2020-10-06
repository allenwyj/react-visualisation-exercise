import React, { useContext } from 'react';

import { AppContext } from '../../providers/app/app.provider';

const PageContainer = ({ name, children }) => {
  const { page } = useContext(AppContext);

  let showPage = undefined;

  if (page === name) showPage = true;

  return showPage ? <div>{children}</div> : null;
};

export default PageContainer;
