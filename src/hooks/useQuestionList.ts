import { useQuery } from '@tanstack/react-query';
import { AxiosResponse, AxiosError } from 'axios';
import { getQuestions } from '@/api/question';

import { QuestionResponseType } from '@/types/question';
import { ErrorMessageType } from '@/types/commonType';

// const useQuestionList = () => useQuery('questionList', getQuestions())

const useQuestionList = () => {
  const queryFn = () => getQuestions();
  const { isLoading, data, isError, error } = useQuery<
    AxiosResponse<QuestionResponseType>,
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
