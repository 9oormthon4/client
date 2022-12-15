import Result from "@/components/features/Result";
import { useEffect } from "react";

const ResultPage = () => {
  useEffect(() => {
    document.title = '결과 | 설문';
  }, []);

  return <Result />
};

export default ResultPage;