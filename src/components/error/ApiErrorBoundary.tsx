import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

export const ApiErrorFallback = ({ resetErrorBoundary }: { resetErrorBoundary: () => void }): JSX.Element => {
  return (
    <div className="flex w-full flex-col content-center justify-center">
      <div className="flex w-full justify-center text-xl">잠시후 다시 시도해주세요</div>
      <p className="flex w-full flex-col justify-center">
        <div className="flex w-full justify-center">요청사항을 처리하는데 </div>
        <div className="flex w-full justify-center"> 실패했습니다.</div>
      </p>
      <button className="flex w-full justify-center" type="button" onClick={resetErrorBoundary}>
        다시 시도하기
      </button>
    </div>
  );
};

export const ApiErrorBoundary = ({ children }: { children: JSX.Element }): JSX.Element => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }): JSX.Element => (
        <ErrorBoundary
          fallbackRender={ApiErrorFallback} // 에러가 발생하면 이 컴포넌트가 대체 UI를 표시
          onReset={reset} // 에러 복구 시 실행할 함수
        >
          <Suspense fallback={<div>로딩중..</div>}>{children}</Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};
