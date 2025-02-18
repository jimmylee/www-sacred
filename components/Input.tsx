'use client';

import * as React from 'react';
import clsx from 'clsx';

import * as Utilities from '@common/utilities';

const styles = {
  root: "relative block",
  label: "block bg-[var(--theme-border)]",
  placeholder: "italic text-[var(--theme-overlay)]",
  displayed: "overflow-hidden whitespace-nowrap pointer-events-none break-anywhere bg-[var(--theme-background-input)] shadow-[inset_0_0_0_2px_var(--theme-border)]",
  focused: "has-[.block]:bg-[var(--theme-focused-foreground)]",
  blink: "animate-[blink_1s_step-start_0s_infinite]",
  block: "inline-block min-w-[1ch] bg-[var(--theme-text)] text-[var(--theme-background)] h-[calc(var(--font-size)*var(--theme-line-height-base))] align-bottom group-[.focused]:bg-[var(--theme-focused-foreground)]",
  inputContainer: "relative block",
  hidden: "absolute top-0 left-0 w-full text-transparent bg-transparent caret-transparent border-none outline-none overflow-hidden p-0 m-0 leading-[var(--theme-line-height-base)] text-[var(--font-size)] font-inherit [-webkit-autofill:shadow-[0_0_0px_1000px_var(--theme-focused-foreground)_inset]]"
};

// Add keyframes to document head
if (typeof document !== 'undefined') {
  const style = document.createElement('style');
  style.textContent = `
    @keyframes blink {
      50% { opacity: 0; }
    }
  `;
  document.head.appendChild(style);
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  caretChars?: string | any;
  label?: string | any;
  isBlink?: boolean;
};

function Input({ caretChars, isBlink = true, label, placeholder, onChange, type, id, ...rest }: InputProps) {
  const generatedId = React.useId();
  const inputId = id || generatedId;

  const inputRef = React.useRef<HTMLInputElement | null>(null);
  const [text, setText] = React.useState<string>(rest.defaultValue?.toString() || rest.value?.toString() || '');
  const [isFocused, setIsFocused] = React.useState<boolean>(false);
  const [selectionStart, setSelectionStart] = React.useState<number>(text.length);

  const lastFocusDirectionRef = React.useRef<'up' | 'down' | null>(null);

  React.useEffect(() => {
    if (rest.value !== undefined) {
      const val = rest.value.toString();
      setText(val);
      setSelectionStart(val.length);
    }
  }, [rest.value]);

  const onHandleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);
    if (onChange) {
      onChange(e);
    }
    setSelectionStart(e.target.selectionStart ?? value.length);
  };

  const onHandleFocus = () => {
    setIsFocused(true);
    if (!inputRef.current) return;

    if (lastFocusDirectionRef.current === 'down') {
      setSelectionStart(text.length);
      inputRef.current.setSelectionRange(text.length, text.length);
    } else if (lastFocusDirectionRef.current === 'up') {
      setSelectionStart(0);
      inputRef.current.setSelectionRange(0, 0);
    }
  };

  const onHandleBlur = () => {
    setIsFocused(false);
  };

  const onHandleSelect = (e: React.SyntheticEvent<HTMLInputElement>) => {
    const inputEl = e.currentTarget as HTMLInputElement;
    setSelectionStart(inputEl.selectionStart ?? text.length);
  };

  const onHandleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const inputEl = e.currentTarget as HTMLInputElement;
    inputEl.focus();
    setSelectionStart(inputEl.selectionStart ?? text.length);
  };

  const onHandleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      lastFocusDirectionRef.current = 'up';
      const previousFocusable = Utilities.findNextFocusable(document.activeElement, 'previous');
      previousFocusable?.focus();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      lastFocusDirectionRef.current = 'down';
      const nextFocusable = Utilities.findNextFocusable(document.activeElement, 'next');
      nextFocusable?.focus();
    }
  };

  const isPlaceholderVisible = !text && placeholder;
  const containerClasses = clsx(styles.root, isFocused && 'group focused');

  const maskText = (t: string) => (type === 'password' ? '•'.repeat(t.length) : t);

  const beforeCaretText = isPlaceholderVisible ? placeholder ?? '' : maskText(text.substring(0, selectionStart));
  const afterCaretText = isPlaceholderVisible ? '' : maskText(text.substring(selectionStart));

  return (
    <div className={containerClasses}>
      {label && (
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
      )}
      <div className={styles.inputContainer}>
        <div className={clsx(styles.displayed, isPlaceholderVisible && styles.placeholder)}>
          {beforeCaretText}
          {!isPlaceholderVisible && <span className={clsx(styles.block, isBlink && styles.blink)}>{caretChars || ''}</span>}
          {!isPlaceholderVisible && afterCaretText}
        </div>
        <input id={inputId} ref={inputRef} className={styles.hidden} value={text} aria-placeholder={placeholder} type={type} onFocus={onHandleFocus} onBlur={onHandleBlur} onChange={onHandleChange} onSelect={onHandleSelect} onClick={onHandleClick} onKeyDown={onHandleKeyDown} {...rest} />
      </div>
    </div>
  );
}

export default Input;
