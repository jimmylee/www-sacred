const styles = {
  message: "flex items-start justify-between mb-[calc(var(--font-size)*var(--theme-line-height-base))] last:mb-0",
  left: "self-stretch flex-shrink-0 flex items-end relative",
  triangle: "inline-block w-0 h-0 border-t-[calc((var(--font-size)*var(--theme-line-height-base))/2)] border-b-[calc((var(--font-size)*var(--theme-line-height-base))/2)] border-r-[1ch] border-transparent border-r-[var(--theme-border)] mb-[calc((var(--font-size)*var(--theme-line-height-base))/2)]",
  right: "min-w-[10%] w-full text-left",
  bubble: "inline-block bg-[var(--theme-border)] py-[calc(8px*var(--theme-line-height-base))] px-[1ch] shadow-[1ch_1ch_0_0_var(--theme-border-subdued)]"
};

export function Message(props: any) {
  return (
    <div className={styles.message}>
      <div className={styles.left}>
        <figure className={styles.triangle} />
      </div>
      <div className={styles.right}>
        <div className={styles.bubble}>{props.children}</div>
      </div>
    </div>
  );
}

export default Message;
