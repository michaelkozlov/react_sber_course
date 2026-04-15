interface IGreetingProps {
  name: string;
}

export const Greeting = ({ name }: IGreetingProps) => {
  return <h1>Hello, {name}!</h1>;
};
