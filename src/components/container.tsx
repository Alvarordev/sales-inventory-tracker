import SessionHeader from "./session-header";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<Props> = ({ children, className}) => {
  return (
    <main className={`relative flex flex-col min-h-screen ml-60 ${className} pt-24 px-6`}>
      <SessionHeader />
      {children}
    </main>
  );
};

export default Container;
