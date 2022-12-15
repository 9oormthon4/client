import Result from "@/components/features/Result";
import { useRouter } from "next/router";
import { useEffect } from "react";

// export interface 

const Results = () => {
  // const [totalParticipantCount, setTotalParticipantCount] = useState(0);
const router = useRouter()
  const { pid } = router.query

  useEffect(() => {
    if(!pid) {
      return;
    }
    const fetchSomethingById = async () => {
      const response = await fetch(`/api/something/${pid}`)
    }
    fetchSomethingById()
  }, [pid])

  //  useEffect(() => {
  //   if (router.isReady) {
  //     return <Result idd={Number(pid)} />
  //     // Do your stuff
  //     // for example: assign query param to a state
  //   }
  // }, [router.isReady]);

  useEffect(() => {
    // document.title = '결과 | 설문';
  }, []);

  return <Result idd={Number(pid)} />
};

export default Results;