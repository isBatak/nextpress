interface IErrorMessageProps {
  message: string;
}

export default ({ message }: IErrorMessageProps) => <aside>{message}</aside>;
