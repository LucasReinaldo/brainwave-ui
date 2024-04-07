import SectionSvg from '../assets/svg/SectionSvg';

export const Section = (props) => {
  const { id, className, crosses, crossesOffset, customPaddings, children } =
    props;

  return (
    <section
      id={id}
      className={`relative ${className} ${customPaddings || 'py-10 lg:py-16 xl:py-20'} ${crosses ? 'lg:py-32 xl:py-40' : ''} ${className || ''}`}
    >
      {children}
      <div className="pointer-events-none absolute left-5 top-0 hidden h-full w-0.25 bg-stroke-1 md:block lg:left-7.5 xl:left-10" />
      <div className="pointer-events-none absolute right-5 top-0 hidden h-full w-0.25 bg-stroke-1 md:block lg:right-7.5 xl:right-10" />

      {crosses ? (
        <>
          <div
            className={`absolute left-7.5 right-7.5 top-0 hidden h-0.25 bg-stroke-1 ${crossesOffset ? crossesOffset : ''} pointer-events-none lg:block xl:left-10 xl:right-10`}
          />
          <SectionSvg crossesOffset={crossesOffset} />
        </>
      ) : null}
    </section>
  );
};
