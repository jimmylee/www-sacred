import * as React from 'react';
import clsx from 'clsx';

const styles = {
  card: clsx("relative block p-0 whitespace-pre-wrap"),
  children: clsx("shadow-[inset_2px_0_0_0_var(--theme-text),inset_-2px_0_0_0_var(--theme-text),inset_0_-2px_0_0_var(--theme-text)] block pt-[calc(var(--theme-line-height-base)*0.5rem)] px-[2ch] pb-[calc(var(--theme-line-height-base)*1rem)] overflow-x-auto overflow-y-hidden scrollbar-none"),
  action: clsx("flex items-end justify-between"),
  left: clsx("min-w-[10%] w-full shadow-[inset_2px_0_0_0_var(--theme-text),inset_0_2px_0_0_var(--theme-text)] pt-[calc((var(--font-size)*0.5)*var(--theme-line-height-base))] pr-[2ch] pb-0 pl-[1ch]"),
  leftCorner: clsx("flex-shrink-0 shadow-[inset_2px_0_0_0_var(--theme-text),inset_0_2px_0_0_var(--theme-text)] pt-[calc((var(--font-size)*0.5)*var(--theme-line-height-base))] px-[1ch] pb-0"),
  right: clsx("min-w-[10%] w-full shadow-[inset_-2px_0_0_0_var(--theme-text),inset_0_2px_0_0_var(--theme-text)] pt-[calc((var(--font-size)*0.5)*var(--theme-line-height-base))] pr-[2ch] pb-0 pl-[1ch]"),
  rightCorner: clsx("flex-shrink-0 shadow-[inset_-2px_0_0_0_var(--theme-text),inset_0_2px_0_0_var(--theme-text)] pt-[calc((var(--font-size)*0.5)*var(--theme-line-height-base))] px-[1ch] pb-0"),
  title: clsx("flex-shrink-0 px-[1ch] text-[var(--font-size)] font-normal")
};

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  title?: string | any;
  mode?: "left" | "right" | "center";
}

export const Card: React.FC<CardProps> = ({ className, children, mode = "center", title, style, ...rest }) => {
  let titleElement = (
    <header className={styles.action}>
      <div className={styles.left} aria-hidden="true"></div>
      {title ? <h2 className={styles.title}>{title}</h2> : null}
      <div className={styles.right} aria-hidden="true"></div>
    </header>
  );

  if (mode === 'left') {
    titleElement = (
      <header className={styles.action}>
        <div className={styles.leftCorner} aria-hidden="true"></div>
        {title ? <h2 className={styles.title}>{title}</h2> : null}
        <div className={styles.right} aria-hidden="true"></div>
      </header>
    );
  }

  if (mode === 'right') {
    titleElement = (
      <header className={styles.action}>
        <div className={styles.left} aria-hidden="true"></div>
        {title ? <h2 className={styles.title}>{title}</h2> : null}
        <div className={styles.rightCorner} aria-hidden="true"></div>
      </header>
    );
  }

  return (
    <article className={clsx(styles.card, className)} style={style}>
      {titleElement}
      <section className={styles.children}>{children}</section>
    </article>
  );
};

export default Card;
