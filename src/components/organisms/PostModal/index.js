import axios from 'axios';
import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Button from 'components/atoms/Button';

const PostModal = ({ setShowConfirmModal, postInfo }) => {
  const reqBody = postInfo;
  const postUrl = `https://gist-competition-cn-server-zvxvr4r3aa-du.a.run.app/gistps/api/v1/post`;
  const history = useHistory();

  console.log(JSON.stringify(reqBody));
  const handleComplete = () => {
    axios({
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'post',
      url: postUrl,
      data: JSON.stringify(reqBody),
    })
      .then(function (res) {
        console.log(res);
        history.push(postUrl + `${res.data.id}`);
      })
      .catch(function (error) {
        console.log(error);
      });
    // .post(postUrl, reqBody)
    // .then(function (res) {
    //   console.log(res);
    // })
    // .catch(function (error) {
    //   console.log(error);
    // })
    // .then(function (res) {
    //   console.log(res);
    //   history.push(postUrl + `${res.data.id}`);
    // });
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
