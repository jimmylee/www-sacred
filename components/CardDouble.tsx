import * as React from 'react';

export interface CardDoubleProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  title?: string | any;
  mode?: string | any;
  style?: any;
}

const styles = {
  card: "relative block p-0",
  action: "flex items-end justify-between",
  left: "min-w-[10%] w-full border-t-[6px] border-l-[6px] border-solid border-[var(--theme-text)] [border-top-style:double] [border-left-style:double] pt-[calc(var(--card-double-top-gutter)*var(--theme-line-height-base))] pr-[2ch] pb-0 pl-[1ch]",
  right: "min-w-[10%] w-full border-t-[6px] border-r-[6px] border-solid border-[var(--theme-text)] [border-top-style:double] [border-right-style:double] pt-[calc(var(--card-double-top-gutter)*var(--theme-line-height-base))] pr-[2ch] pb-0 pl-[1ch]",
  leftCorner: "flex-shrink-0 border-t-[6px] border-l-[6px] border-solid border-[var(--theme-text)] [border-top-style:double] [border-left-style:double] pt-[calc(var(--card-double-top-gutter)*var(--theme-line-height-base))] pr-[calc(1ch-6px)] pb-0 pl-[1ch]",
  rightCorner: "flex-shrink-0 border-t-[6px] border-r-[6px] border-solid border-[var(--theme-text)] [border-top-style:double] [border-right-style:double] pt-[calc(var(--card-double-top-gutter)*var(--theme-line-height-base))] pr-[1ch] pb-0 pl-[calc(1ch-6px)]",
  title: "flex-shrink-0 px-[1ch] text-[var(--font-size)] font-normal",
  children: "block border-l-[6px] border-r-[6px] border-b-[6px] border-solid border-[var(--theme-text)] [border-left-style:double] [border-right-style:double] [border-bottom-style:double] overflow-x-auto overflow-y-hidden scrollbar-none pt-[calc(var(--theme-line-height-base)*0.5rem)] pl-[calc(2ch-6px)] pr-[calc(2ch-6px)] pb-[calc(var(--theme-line-height-base)*1rem-6px)]",
  borderChildren: "block"
};

export const CardDouble: React.FC<CardDoubleProps> = ({ children, mode, title, style, ...rest }) => {
  let titleElement = (
    <header className={styles.action}>
      <div className={styles.left} aria-hidden="true"></div>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.right} aria-hidden="true"></div>
    </header>
  );

  if (mode === 'left') {
    titleElement = (
      <header className={styles.action}>
        <div className={styles.leftCorner} aria-hidden="true"></div>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.right} aria-hidden="true"></div>
      </header>
    );
  }

  if (mode === 'right') {
    titleElement = (
      <header className={styles.action}>
        <div className={styles.left} aria-hidden="true"></div>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.rightCorner} aria-hidden="true"></div>
      </header>
    );
  }

  return (
    <article className={styles.card} style={{ ["--card-double-border-width" as string]: "6px", ["--card-double-half-gutter" as string]: "calc(var(--font-size) * 0.5)", ["--card-double-top-gutter" as string]: "6px" }}>
      {titleElement}
      <section className={styles.children}>
        <section className={styles.borderChildren} style={style}>
          {children}
        </section>
      </section>
    </article>
  );
};

export default CardDouble;
