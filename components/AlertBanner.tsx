import * as React from 'react';
import clsx from 'clsx';

const styles = {
  root: "block bg-[var(--theme-border)] shadow-[1ch_1ch_0_0_var(--theme-border-subdued)] px-[2ch] py-[calc(var(--font-size)*var(--theme-line-height-base))] font-normal"
};

export interface AlertBannerProps {
  style?: any;
  children?: any;
}

export const AlertBanner: React.FC<AlertBannerProps> = ({ style: propStyle, ...rest }) => {
  let style: React.CSSProperties = { ...propStyle };

  return <div className={clsx(styles.root)} {...rest} style={style} />;
};

export default AlertBanner;
