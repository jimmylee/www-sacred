import * as React from 'react';
import clsx from 'clsx';

const styles = {
  parent: "flex items-start justify-between",
  placeholder: "bg-[var(--theme-border)] inline-block w-[4ch] h-[calc(var(--font-size)*var(--theme-line-height-base)*2)] align-bottom flex-shrink-0 relative hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:pointer-events-none hover:before:opacity-50 hover:before:bg-[var(--theme-focused-foreground)]",
  root: "inline-block w-[4ch] h-[calc(var(--font-size)*var(--theme-line-height-base)*2)] align-bottom flex-shrink-0 relative hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:pointer-events-none hover:before:opacity-50 hover:before:bg-[var(--theme-focused-foreground)]",
  link: "inline-block w-[4ch] h-[calc(var(--font-size)*var(--theme-line-height-base)*2)] align-bottom flex-shrink-0 relative hover:before:content-[''] hover:before:absolute hover:before:inset-0 hover:before:pointer-events-none hover:before:opacity-50 hover:before:bg-[var(--theme-focused-foreground)] focus:outline-0",
  right: "min-w-[10%] w-full bg-[var(--theme-foreground)]"
};

interface AvatarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'style' | 'className' | 'children'> {
  src?: string;
  href?: string;
  target?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

const Avatar: React.FC<AvatarProps> = (props) => {
  const { src, style: propStyle, href, target, children, ...rest } = props;

  const backgroundStyle = src ? { 
    backgroundImage: `url(${src})`,
    backgroundSize: '100% 100%',
    backgroundPosition: '0 0',
    backgroundRepeat: 'no-repeat'
  } : {};

  const combinedStyle = { ...propStyle, ...backgroundStyle };

  let avatarElement: React.ReactElement;

  if (href) {
    avatarElement = <a className={clsx(src ? styles.link : styles.placeholder)} style={combinedStyle} href={href} target={target} tabIndex={0} role="link" />;
  } else {
    avatarElement = <figure className={clsx(src ? styles.root : styles.placeholder)} style={combinedStyle} />;
  }

  if (!children) {
    return avatarElement;
  }

  return (
    <div className={styles.parent} {...rest}>
      {avatarElement}
      <span className={styles.right}>{children}</span>
    </div>
  );
};

export default Avatar;
