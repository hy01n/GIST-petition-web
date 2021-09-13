import React, { useState } from 'react';
import './MainPrecautions.css';
// import { Link } from 'react-router-dom';

const MainPrecautions = () => {
  const [isCollapsed_left, setIsCollapsed_left] = useState(false);
  const [isCollapsed_right, setIsCollapsed_right] = useState(false);
  return (
    <section className="precautions">
      <div className="precautions-line">
        <div className="bg-left"></div>
        <div className={`bg-right ${isCollapsed_left ? 'open' : ''} `}></div>
        <div className="inner">
          <div className="inner__left">
            <h3>이런 청원은 삭제·숨김 처리될 수 있습니다</h3>
            <div
              className="material-icons toggle-precuation-left"
              onClick={() => {
                setIsCollapsed_left(!isCollapsed_left);
                if (isCollapsed_right === true) {
                  setIsCollapsed_right(!isCollapsed_right);
                }
              }}
            >
              arrow_drop_down_circle
            </div>
          </div>

          <div className={`inner__right ${isCollapsed_left ? 'open' : ''} `}>
            <h3>이런 청원은 답변이 어려울 수 있습니다</h3>
            <div
              className="material-icons toggle-precuation-right"
              onClick={() => {
                setIsCollapsed_right(!isCollapsed_right);
                if (isCollapsed_left === true) {
                  setIsCollapsed_left(!isCollapsed_left);
                }
              }}
            >
              arrow_drop_down_circle
            </div>
          </div>
        </div>
      </div>

      <div className={`precuation__left ${isCollapsed_left ? '' : 'hide'} `}>
        <div className="inner">
          <ul>
            <li>
              동일한 내용으로 중복 게시된 청원은 가장 동의수가 많은 청원만
              남기고 &apos;숨김&apos;처리 또는 삭제될 수 있습니다.
            </li>
            <li>
              욕설 및 비속어를 사용한 청원은 관리자에 의해 삭제 또는 일부 내용
              &apos;숨김&apos; 처리될 수 있습니다.
            </li>
            <li>
              폭력적&sbquo; 선정적&sbquo; 또는 특정 집단에 대한 혐오 표현 등
              유해한 내용을 담은 청원은 관리자에 의해 삭제될 수 있습니다.
            </li>
            <li>
              개인정보&sbquo; 허위사실&sbquo; 타인의 명예를 훼손하는 내용이
              포함된 청원은 관리자에 의해 삭제 또는 일부 내용 &apos;숨김&apos;
              처리될 수 있습니다.
            </li>
          </ul>
        </div>
      </div>
      <div className={`precuation__right ${isCollapsed_right ? '' : 'hide'}`}>
        <div className="inner">
          <ul>
            <li>
              타인을 악의적으로 비방하거나 명예를 훼손하기 위한 목적으로 작성된
              청원에는 답변이 어려울 수 있습니다.
            </li>
            <li>
              청원 주요 내용이 허위사실로 밝혀진 경우 답변이 어려울 수 있습니다.
            </li>
            <li>
              GIST 구성원 공동의 이익과 관련없는 청원의 경우 답변이 어려울 수
              있습니다.
            </li>
            <li>
              부패/예산부당집행&sbquo; 인권침해&sbquo; 성희롱&sbquo;
              괴롭힘&sbquo; 연구관련 부정행위 등의 일반 민원 신고는{' '}
              <a
                href="https://www.gist.ac.kr/kr/html/sub10/1004.html"
                style={{ color: '#fdfd96' }}
              >
                GIST 공익신고센터
              </a>
              를 이용할 수 있습니다.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MainPrecautions;
