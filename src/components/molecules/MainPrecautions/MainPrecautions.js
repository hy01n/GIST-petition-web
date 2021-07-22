import React from 'react';
import './MainPrecautions.css';
// import { Link } from 'react-router-dom';

const MainPrecautions = () => {
  return (
        <section class="precautions">

            <div class="precautions-line">
            <div class="bg-left"></div>
            <div class="bg-right"></div>
            <div class="inner">
                <div class="inner__left">
                <h2>이런 청원은 삭제·숨김 처리될 수 있습니다</h2>
                <div class="material-icons toggle-precuation-left">
                    arrow_drop_down_circle
                </div>
                </div>
                
                <div class="inner__right">
                <h2>이런 청원은 답변이 어려울 수 있습니다</h2>
                <div class="material-icons toggle-precuation-right">
                    arrow_drop_down_circle
                </div>
                </div>
            </div>
            </div>

            <div class="precuation__left hide">
            <div class="inner">
                <ul>
                <li>동일한 내용으로 중복 게시된 청원은 최초 1개 청원만 남기고 '숨김'처리 또는 삭제될 수 있습니다.</li>
                <li>욕설 및 비속어를 사용한 청원은 관리자에 의해 삭제 또는 일부 내용 '숨김' 처리될 수 있습니다.</li>
                <li>폭력적, 선정적, 또는 특정 집단에 대한 혐오 표현 등 청소년에게 유해한 내용을 담은 청원은 관리자에 의해 삭제될 수 있습니다.</li>
                <li>개인정보, 허위사실, 타인의 명예를 훼손하는 내용이 포함된 청원은 관리자에 의해 삭제 또는 일부 내용 '숨김' 처리될 수 있습니다.</li>
                </ul>
            </div>
            </div>
            <div class="precuation__right hide">
            <div class="inner">
                <ul>
                <li>지방자치단체 고유 업무에 해당하는 내용 등 중앙 정부의 역할과 책임 범위를 벗어난 경우 답변이 어려울 수 있습니다.</li>
                <li>청원 주요 내용이 허위사실로 밝혀진 경우 답변이 어려울 수 있습니다.</li>
                <li>인종, 국적, 종교, 나이, 지역, 장애, 성별 등 특성과 관련 있는 개인, 집단에 대한 차별 및 비하 등 위헌적 요소가 포함된 청원에는 답변이 어려울 수 있습니다.</li>
                <li>청와대 및 정부에 대한 민원·제안 및 공익신고·고발 등은 국민권익위원회의 국민신문고(www.epeople.go.kr)를 이용해 주시길 부탁드립니다.</li>
                </ul>
            </div>
            </div>


        </section>
  );
};

export default MainPrecautions;
