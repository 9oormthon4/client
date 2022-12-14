import { Layout } from "@/components/common/Layout";
import { useEffect } from "react";

const Result = () => {
  useEffect(() => {
    document.title = '결과 | 설문';
  }, []);

  return (
    <Layout>결과페이지</Layout>
  );
};

export default Result;