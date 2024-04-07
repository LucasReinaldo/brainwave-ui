import ButtonSvg from '../assets/svg/ButtonSvg';

const BButton = (props) => {
  const { children, white, ...rest } = props;

  return (
    <button {...rest}>
      <span className="relative z-10">{children}</span>
      {ButtonSvg(white)}
    </button>
  );
};

const ButtonLink = (props) => {
  const { children, white, ...rest } = props;

  return (
    <a {...rest}>
      <span className="relative z-10">{children}</span>
      {ButtonSvg(white)}
    </a>
  );
};

export const Button = (props) => {
  const { className, px, href, children, ...rest } = props;

  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || 'px-7'} ${props.white ? 'text-n-8' : 'text-n-1'} ${className || ''}`;

  if (href) {
    return (
      <ButtonLink {...rest} href={href} className={classes}>
        {children}
      </ButtonLink>
    );
  }

  return (
    <BButton {...rest} className={classes}>
      {children}
    </BButton>
  );
};
