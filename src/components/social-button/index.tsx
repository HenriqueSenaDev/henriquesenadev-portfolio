import { ComponentProps, ReactNode } from 'react';

interface IProps extends ComponentProps<'button'> {
  href: string;
  contact: string;
  icon?: ReactNode;
}

export default function SocialButton({ href, contact, icon, ...rest }: IProps) {
  return (
    <a href={href} target='_blank'>
      <button {...rest}>
        {icon} {<span>{contact}</span>}
      </button>
    </a>
  );
}
