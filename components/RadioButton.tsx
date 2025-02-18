import * as React from 'react';
import clsx from 'clsx';
import * as Utilities from '@common/utilities';

const styles = {
  section: "flex items-start justify-between relative",
  right: "bg-[var(--theme-button-background)] min-w-[10%] w-full self-stretch pb-[calc(8px*var(--theme-line-height-base))] shadow-[inset_0_1px_0_0_var(--theme-border-subdued)] last:pb-0",
  figure: "inline-flex h-[calc(var(--font-size)*var(--theme-line-height-base))] cursor-pointer text-[var(--theme-text)] w-[3ch] items-center justify-center bg-[var(--theme-button-foreground)] group-[.selected]:bg-[var(--theme-text)] group-[.focused]:!bg-[var(--theme-focused-foreground)]",
  selected: "has-[.figure]:bg-[var(--theme-text)]",
  dot: "inline-block w-[1ch] h-[1ch] bg-[var(--theme-background)] rotate-45 align-middle",
  focused: "has-[.figure]:bg-[var(--theme-focused-foreground)]",
  relative: "flex-shrink-0 inline-block align-baseline",
  input: "absolute h-[1px] w-[1px] opacity-0 bg-transparent border-0 outline-0 m-0 p-0"
};

export interface RadioButtonProps {
  style?: React.CSSProperties;
  name: string;
  value: string;
  selected?: boolean;
  onSelect?: (value: string) => void;
  children?: React.ReactNode;
}

export const RadioButton: React.FC<RadioButtonProps> = ({ style, name, value, selected = false, onSelect, children }) => {
  const radioId = `${name}-${value}-radio`;
  const [isFocused, setIsFocused] = React.useState(false);

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    switch (event.key) {
      case 'Enter':
        event.preventDefault();
        onSelect?.(value);
        break;
      case 'ArrowUp':
      case 'ArrowLeft':
        event.preventDefault();
        Utilities.findNextFocusable(document.activeElement, 'previous')?.focus();
        break;
      case 'Tab':
      case 'ArrowDown':
      case 'ArrowRight':
        event.preventDefault();
        Utilities.findNextFocusable(document.activeElement, 'next')?.focus();
        break;
      default:
        break;
    }
  };

  const handleChange = () => {
    onSelect?.(value);
  };

  return (
    <div
      className={clsx(
        styles.section,
        'group',
        isFocused && 'focused',
        selected && 'selected'
      )}
      style={style}
    >
      <input className={styles.input} id={radioId} type="radio" name={name} value={value} checked={selected} onFocus={handleFocus} onBlur={handleBlur} onKeyDown={handleKeyDown} onChange={handleChange} />
      <div className={styles.relative}>
        <label className={styles.figure} htmlFor={radioId}>
          {selected ? <span aria-hidden="true" className={styles.dot} /> : null}
        </label>
      </div>
      <div className={styles.right}>&nbsp;&nbsp;{children}</div>
    </div>
  );
};

export default RadioButton;
