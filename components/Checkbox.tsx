'use client';

import * as React from 'react';
import * as Utilities from '@common/utilities';

export interface CheckboxProps {
  style?: React.CSSProperties;
  checkboxStyle?: React.CSSProperties;
  name: string;
  defaultChecked?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  tabIndex?: number;
  children?: React.ReactNode;
}

const styles = {
  section: "flex items-start justify-between",
  right: "min-w-[10%] w-full bg-[var(--theme-button-background)] pb-[calc(8px*var(--theme-line-height-base))] shadow-[inset_0_1px_0_0_var(--theme-border-subdued)] last:pb-0",
  checked: "",
  focused: "",
  relative: "relative flex-shrink-0 inline-block align-baseline",
  figure: "w-full h-full cursor-pointer text-[var(--theme-text)] bg-[var(--theme-button-foreground)] self-stretch inline-block px-[1ch] group-[.focused]:bg-[var(--theme-focused-foreground)]",
  input: "absolute top-0 left-0 opacity-0 w-[1px] h-[1px]"
};

export const Checkbox: React.FC<CheckboxProps> = ({ style, name, defaultChecked = false, onChange, children }) => {
  const checkboxId = `${name}-checkbox`;
  const inputRef = React.useRef<HTMLInputElement>(null);

  const [isChecked, setIsChecked] = React.useState(defaultChecked);
  const [isFocused, setIsFocused] = React.useState(false);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case 'Enter':
        event.preventDefault();
        inputRef.current?.click();
        break;
      case 'ArrowUp':
      case 'ArrowLeft': {
        event.preventDefault();
        const previousFocusable = Utilities.findNextFocusable(document.activeElement, 'previous');
        previousFocusable?.focus();
        break;
      }
      case 'ArrowDown':
      case 'ArrowRight': {
        event.preventDefault();
        const nextFocusable = Utilities.findNextFocusable(document.activeElement, 'next');
        nextFocusable?.focus();
        break;
      }
      default:
        break;
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newCheckedStatus = event.target.checked;
    setIsChecked(newCheckedStatus);
    if (onChange) {
      onChange(event);
    }
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  return (
    <div
      className={Utilities.classNames(styles.section, {
        [styles.checked]: isChecked,
        "group focused": isFocused,
      })}
      style={style}
    >
      <div className={styles.relative}>
        <input className={styles.input} id={checkboxId} type="checkbox" name={name} defaultChecked={defaultChecked} onChange={handleChange} onKeyDown={handleKeyDown} onFocus={handleFocus} onBlur={handleBlur} tabIndex={0} ref={inputRef} />
        <label className={styles.figure} htmlFor={checkboxId}>
          {isChecked ? '╳' : '\u00A0'}
        </label>
      </div>
      <div className={styles.right}>&nbsp;&nbsp;{children}</div>
    </div>
  );
};

export default Checkbox;
