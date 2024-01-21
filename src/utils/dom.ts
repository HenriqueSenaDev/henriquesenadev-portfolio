export function smoothScroll(sectionHref: string) {
  document.querySelector('#' + sectionHref)?.scrollIntoView({
    behavior: 'smooth',
    block: 'end',
    inline: 'nearest',
  });
}
