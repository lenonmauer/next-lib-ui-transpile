import type { ReactNode } from "react";
import clsx from 'clsx'

type Props = {
  children: ReactNode
  className?: string
}

export const Typography = ({ children, className }: Props) => {
  return (
    <>
      <button className={clsx('typo', className)}>{children}</button>

      <style jsx>{`
        .typo {
          font-size: 1rem;
          color: rgba(0, 8, 36, .9);
        }
      `}</style>
    </>
  );
};
