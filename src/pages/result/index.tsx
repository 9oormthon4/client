import Result from "@/components/features/Result";
import { useEffect } from "react";

// export interface 

const ResultPage = () => {
  // const [totalParticipantCount, setTotalParticipantCount] = useState(0);


  useEffect(() => {
    document.title = '결과 | 설문';
  }, []);

  const getResult = () => {
  }

  return <Result idd={0} />
};

export default ResultPage;