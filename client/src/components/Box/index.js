import React from "react";
import cn from "classnames";
import styles from "./Box.module.sass";

const Box = ({
  className,
  title,
  classTitle,
  classCardHead,
  head,
  children,
}) => {
  return (
    <div className={cn(styles.box, className)}>
      {title && (
      <div>
        <div className={cn(styles.head, classCardHead)}>
          <div className={cn(classTitle, styles.title)}>{title}</div>
          {head && head}
        </div>
      </div>
      )}
      {children}
    </div>
  );
};

export default Box;
