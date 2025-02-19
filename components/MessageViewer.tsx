
const styles = {
  message: "flex items-start justify-between mb-[calc(var(--font-size)*var(--theme-line-height-base))]",
  bubble: "inline-block bg-[var(--theme-focused-foreground)] py-[calc(8px*var(--theme-line-height-base))] px-[1ch]",
  left: "min-w-[10%] w-full text-right",
  right: "self-stretch flex-shrink-0 flex items-end",
  triangle: "inline-block w-0 h-0 border-t-[calc((var(--font-size)*var(--theme-line-height-base))/2)] border-b-[calc((var(--font-size)*var(--theme-line-height-base))/2)] border-l-[1ch] border-transparent border-l-[var(--theme-focused-foreground)] mb-[calc((var(--font-size)*var(--theme-line-height-base))/2)]"
};

export function MessageViewer(props: any) {
  return (
    <div className={styles.message}>
      <div className={styles.left}>
        <div className={styles.bubble}>{props.children}</div>
      </div>
      <div className={styles.right}>
        <figure className={styles.triangle} />
      </div>
    </div>
  );
}

export default MessageViewer;