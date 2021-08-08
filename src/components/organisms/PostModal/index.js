import React from 'react';
import styled from 'styled-components';
import Button from 'components/atoms/Button';

const PostModal = ({ history, setShowConfirmModal }) => {
  const handleComplete = () => {
    // const res = axios.post('');
    // 작성된 글 페이지로 이동
    // history.push(`/petitions/${res.data.id}`);
    history.push('/petitions/1');
  };
  return (
    <ModalWrapper>
      <div>
        <StyledImg src="https://www1.president.go.kr/storage/images/2021/07/TQFXCFCGLH162605856318221.jpg" />
      </div>
      <div>
        <table width="100%">
          <tbody>
            <tr>
              <td width="50%">
                <Button
                  type="button"
                  backgroundColor="#df3127"
                  width="100%"
                  onClick={() => setShowConfirmModal(false)}
                  ButtonText={'수정하기'}
                ></Button>
              </td>
              <td width="50%">
                <Button
                  width="100%"
                  type="button"
                  backgroundColor="#5a5e5d"
                  onClick={handleComplete}
                  ButtonText={'작성 완료'}
                ></Button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </ModalWrapper>
  );
};

const ModalWrapper = styled.div`
  border: 3px solid #5a5e5d;
  position: absolute;
  bottom: 15%;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  z-index: 1;
`;

const StyledImg = styled.img`
  width: 100%;
`;

export default PostModal;
