import * as React from 'react';
import clsx from 'clsx';

const styles = {
  root: clsx("inline-block"),
  line: clsx("inline-block leading-[calc(var(--theme-line-height-base)*1rem)]"),
  link: clsx("inline-block text-[var(--theme-text)] outline-0 border-0 !no-underline bg-[var(--theme-border)] hover:text-[var(--theme-text)] hover:bg-[var(--theme-focused-foreground)] visited:text-[var(--theme-text)] focus:bg-[var(--theme-focused-foreground)]"),
  symbol: clsx("inline-block mx-[9px] my-0")
};

interface BreadCrumbsItem {
  url?: string;
  name: string;
}

interface BreadCrumbsProps {
  items: BreadCrumbsItem[];
}

const BreadCrumbs: React.FC<BreadCrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="breadcrumb" className={styles.root}>
      {items.map((item, index) => {
        const linkElement = (
          <a className={styles.link} href={item.url} target="_blank" tabIndex={0} role="link">
            {item.name}
          </a>
        );

        return (
          <span className={styles.line} key={index}>
            {index === items.length - 1 ? <span>{linkElement}</span> : linkElement}
            {index < items.length - 1 && <span className={styles.symbol}>❯</span>}
          </span>
        );
      })}
    </nav>
  );
};

export default BreadCrumbs;
