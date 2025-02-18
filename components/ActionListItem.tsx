import * as React from 'react';

const styles = {
  item: "flex items-start justify-between bg-transparent text-[var(--theme-text)] cursor-pointer outline-0 border-0 no-underline group !no-underline",
  icon: "!flex items-center justify-center bg-[var(--theme-button-foreground)] flex-shrink-0 w-[3ch] h-[calc(var(--font-size)*var(--theme-line-height-base))] select-none group-hover:bg-[var(--theme-focused-foreground)] group-focus:bg-[var(--theme-focused-foreground)]",
  text: "inline-flex items-center justify-start self-stretch bg-[var(--theme-button-background)] min-w-[10%] w-full px-[1ch] select-none"
};

export interface ActionListItemProps {
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  href?: string;
  target?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement | HTMLAnchorElement>;
}

export const ActionListItem: React.FC<ActionListItemProps> = (props) => {
  const { href, target, onClick, children, icon, style } = props;

  if (href) {
    return (
      <a className={styles.item} href={href} target={target} style={style} tabIndex={0} role="link">
        <figure className={styles.icon}>{icon}</figure>
        <span className={styles.text}>{children}</span>
      </a>
    );
  }

  return (
    <div className={styles.item} onClick={onClick} style={style} tabIndex={0} role="button">
      <figure className={styles.icon}>{icon}</figure>
      <span className={styles.text}>{children}</span>
    </div>
  );
};

export default ActionListItem;
