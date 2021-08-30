import React, { useState } from 'react';
import Card from 'components/atoms/Card';
import Precuation from 'components/organisms/Precaution';
import PostEditor from 'components/organisms/PostEditor';
import PostModal from 'components/organisms/PostModal';
import 'pages/Step/index.css';

const Step = () => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [postInfo, setPostInfo] = useState({
    // user_id 토큰에서 가져오는 방식으로 수정해야함.
    user_id: 1,
    title: '',
    description: '',
    category: '기숙사',
  });
  return (
    <section className="wrap">
      <Card maxWidth="900px">
        {showConfirmModal && (
          <PostModal
            setShowConfirmModal={setShowConfirmModal}
            postInfo={postInfo}
          />
        )}
        <Precuation />
        <PostEditor
          setShowConfirmModal={setShowConfirmModal}
          postInfo={postInfo}
          setPostInfo={setPostInfo}
        />
      </Card>
    </section>
  );
};

export default Step;
