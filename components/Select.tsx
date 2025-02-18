'use client';

import * as React from 'react';
import clsx from 'clsx';

const styles = {
  select: "flex items-start cursor-default justify-between outline-none relative z-[var(--z-index-page-select)]",
  control: "self-stretch bg-[var(--theme-button-foreground)] cursor-pointer flex-shrink-0 px-[1ch]",
  focused: "bg-[var(--theme-text)] text-[var(--theme-background)]",
  display: "bg-[var(--theme-border)] border-0 text-[var(--theme-text)] cursor-pointer font-[var(--font-family-mono)] text-[var(--font-size)] leading-[calc(var(--theme-line-height-base)*1rem)] m-0 min-w-[10%] outline-0 p-0 pl-[3ch] text-left select-none w-full hover:bg-[var(--theme-focused-foreground)] focus:bg-[var(--theme-focused-foreground)] focus:border-0 focus:outline-0",
  menu: "bg-[var(--theme-border-subdued)] left-[3ch] right-0 list-none p-0 z-[var(--z-index-page-select)]",
  item: "border-0 cursor-pointer outline-0 pl-[6ch] select-none hover:bg-[var(--theme-focused-foreground)] focus:bg-[var(--theme-focused-foreground)] focus:border-0 focus:outline-0"
};

export interface SelectProps {
  name: string;
  options: string[];
  placeholder?: string;
  defaultValue?: string;
  onChange?: (selectedValue: string) => void;
}

export const Select: React.FC<SelectProps> = ({ name, options, placeholder, defaultValue = '', onChange }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [index, setIndex] = React.useState(-1);
  const [selectedValue, setSelectedValue] = React.useState(defaultValue);

  const containerRef = React.useRef<HTMLButtonElement | null>(null);

  const handleOpen = () => {
    setIsOpen(true);
    const currentIndex = options.indexOf(selectedValue);
    setIndex(currentIndex >= 0 ? currentIndex : 0);
  };

  const handleClose = () => {
    setIsOpen(false);
    setIndex(-1);

    if (containerRef && containerRef.current) {
      containerRef.current?.focus();
    }
  };

  const handleSelect = (value: string) => {
    setSelectedValue(value);
    onChange?.(value);
    handleClose();
  };

  return (
    <>
      <section className={styles.select}>
        <figure
          className={clsx(styles.control, isOpen && styles.focused)}
          onClick={() => {
            isOpen ? handleClose() : handleOpen();
          }}
        >
          ▼
        </figure>
        <button
          className={styles.display}
          ref={containerRef}
          tabIndex={0}
          onClick={() => {
            isOpen ? handleClose() : handleOpen();
          }}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          {selectedValue || placeholder}
        </button>
      </section>

      {isOpen && (
        <ul className={styles.menu} role="listbox">
          {options.map((option, idx) => {
            return (
              <li key={option} role="option" tabIndex={0} className={styles.item} onClick={() => handleSelect(option)}>
                {option}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Select;
