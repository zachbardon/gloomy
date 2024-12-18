import React from 'react';
import classNames from 'classnames';

import { Polarity } from '../../Common';
import { SymbolIcon } from '../../Icons';

export default props => {
  const { action: { value, style, className }, augments, children } = props;
  const classes = classNames('action action-modify-shield', className);

  return (
    <div className={classes} style={style}>
      <Polarity number={value} /> Shield <SymbolIcon symbol="Shield" noText className="light" />
      {augments}
      {children}
    </div>
  );
};
