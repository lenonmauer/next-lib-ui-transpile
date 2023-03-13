import type { ReactNode } from "react";
import clsx from 'clsx'

type Props = {
  color?: 'primary'
  children: ReactNode
  className?: string
  error?: boolean
}

export const Button = ({ color, children, error, className }: Props) => {
  if (error) throw new Error('Error')

  return (
    <>
      <button className={clsx('button', className)}>{children}</button>

      <style jsx>{`
        .button {
          background-color: ${color === 'primary' ? 'blue' : 'gray'};
        }
      `}</style>
    </>
  );
};
