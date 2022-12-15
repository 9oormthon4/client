import { useQuery } from '@tanstack/react-query';
import { AxiosResponse, AxiosError } from 'axios';

import { ErrorMessageType } from '@/types/commonType';
// import { getParticipantCount } from '@/api/survey';

interface ParticipantCountResponseType {
  totalParticipantCount: number;
}

const useParticipantCount = () => {
  // const queryFn = () => getParticipantCount();
  // const { isLoading, data, isError, error } = useQuery<
  //   AxiosResponse<ParticipantCountResponseType>,
  //   AxiosError<ErrorMessageType>
  // >(['questionList',], queryFn, {
  //   refetchOnMount: false,
  // });

  // return {
  //   isLoading,
  //   data,
  //   isError,
  //   error,
  // };
};

export default useParticipantCount;
