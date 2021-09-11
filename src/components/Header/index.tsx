import Image from "next/image";

const Header = () => {
  return (
    <header className="p-3">
      <Image
        src="/img/logo_full.svg"
        alt="Logotipo localizado no cabeçalho da página"
        width={270}
        height={80}
      />
    </header>
  );
};

export default Header;
