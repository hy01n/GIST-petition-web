import React from 'react';
import 'components/hardcording/Precaution/Precaution.css';

const Precuation = () => {
  return (
    <div className="Container">
      <h1 className="Precaution__Title">청원 시 주의사항</h1>
      <div className="precaution">
        <div>
          <h2>GIST 청원, 이렇게 등록하세요</h2>
          <div>
            <ol>
              <li>
                <h4>Step 1. 검색</h4>새 청원글 작성 전 유사한 내용의 청원이 진행
                중인지 먼저 확인해주세요. 새 청원글을 작성하기보다 유사한 기존
                청원에 동의하시면 구성원의 뜻을 모으는데 도움이 됩니다.
              </li>
              <li>
                <h4>Step 2. 카테고리 선택</h4>
                <p>
                  청원 내용과 관련된 분야를 선택해주세요. 참여자들이 청원 목록
                  내 카테고리 필터를 통해 접근할 수 있습니다.
                </p>
              </li>
              <li>
                <h4>Step 3. 내용 입력</h4>
                <p>
                  사람들이 쉽게 읽고 이해할 수 있는 내용으로 작성해주시면
                  됩니다. 글자 수 제한은 없습니다.
                </p>
              </li>
              <li>
                <h4>Step 4. 링크 첨부</h4>
                <p>
                  청원 내용과 관련된 링크 주소를 입력해주세요. 다만 청원 내용과
                  관련이 없거나 부적절한 링크는 관리자에 의해 숨김처리 될 수
                  있습니다.
                </p>
              </li>
              <li>
                <h4>Step 5. 검토 및 게시</h4>
                <p>
                  한번 작성된 청원은 수정 및 삭제가 불가능합니다. 최초 청원
                  취지와 다른 내용으로 변경되는 것을 방지하여 청원 참여자의
                  의견을 보호하기 위한 조치이니 신중하게 게시해주시기 바랍니다.
                </p>
              </li>
            </ol>
          </div>
        </div>
        <div>
          <h2>GIST 청원 게시판 운영 원칙</h2>
          <ul>
            <li>
              <strong>1)</strong> 타인의 권리를 침해하거나 명예를 훼손하는
              내용은 제한합니다. 방송통신심의위원회의 &apos;정보통신에 관한 심의
              규정&apos;&sbquo; 한국인터넷자율정책기구의 &apos;정책규정&apos;
              등을 기반으로 문제 게시물은 삭제될 수 있습니다. 자극적이고
              혐오스러운 내용&sbquo; 비속어&sbquo; 폭력적 내용&sbquo; 특정
              대상을 비하하거나 차별을 조장하는 내용&sbquo; 개인정보 유출을
              비롯해 타인의 권리를 침해하는 내용&sbquo; 반복되는 내용&sbquo;
              허위사실 등은<strong>삭제나 숨김 처리</strong>될 수 있습니다.
            </li>
            <li>
              <strong>2)</strong> 청원글 게시 후 50명의 동의를 받은 청원에
              대해&sbquo; GIST대학 내 관련 부서에 청원을 보내 답변을 받아
              게시합니다.
            </li>
            <li>
              <strong>3)</strong> 한 번 작성된 청원은{' '}
              <strong>수정 및 삭제가 불가능</strong>합니다. 최초 청원 취지와
              다른 내용으로 변경되는 것을 방지하여 청원 참여자의 의견을 보호하기
              위한 조치이니 신중하게 작성하여 주시기 바랍니다.
            </li>
            <li>
              <strong>4)</strong> 동일한 내용으로 <strong>중복 게시</strong>된
              청원은 가장 동의수가 많은 청원만 남기고 <strong>삭제</strong>될 수
              있습니다.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Precuation;
