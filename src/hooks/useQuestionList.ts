import { useQuery } from '@tanstack/react-query';
import { AxiosResponse, AxiosError } from 'axios';
import { getQuestions } from '@/api/question';

import { QuestionResponse } from '@/types/question';
import { ErrorMessageType } from '@/types/commonType';

const useQuestionList = () => {
  const queryFn = () => getQuestions();
  const { isLoading, data, isError, error } = useQuery<
    AxiosResponse<QuestionResponse>,
    AxiosError<ErrorMessageType>
  >(['questionList',], queryFn, {
    refetchOnMount: false,
  });

  return {
    isLoading,
    data,
    isError,
    error,
  };
};

export default useQuestionList;
