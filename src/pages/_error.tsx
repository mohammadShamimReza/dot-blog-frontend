// pages/_error.tsx
import ErrorPage from "@/components/error/ErrorPage";
import { GetServerSideProps, GetServerSidePropsContext } from "next";

interface ErrorProps {
  statusCode: number;
}

const Error: React.FC<ErrorProps> = ({ statusCode }) => {
  return <ErrorPage statusCode={statusCode} />;
};

export const getServerSideProps: GetServerSideProps<ErrorProps> = async (
  context: GetServerSidePropsContext
) => {
  const { res } = context;
  const statusCode = res?.statusCode || 404;
  return { props: { statusCode } };
};

export default Error;
