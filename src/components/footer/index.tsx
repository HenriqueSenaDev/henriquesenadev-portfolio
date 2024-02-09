export default function Footer() {
  return (
    <footer className='flex flex-col items-center justify-center bg-matte-black py-3 text-white text-[13px] text-center sm:text-sm sm:flex-row sm:gap-1 lg:text-base lg:py-5 2xl:text-[17px]'>
      <p>HenriqueSenaDev 2023 - {new Date().getFullYear()}</p>

      <p>© Todos os direitos reservados</p>
    </footer>
  );
}
