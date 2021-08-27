import React, { useState } from 'react';
import Card from 'components/atoms/Card';
import Precuation from 'components/organisms/Precaution';
import PostEditor from 'components/organisms/PostEditor';
import PostModal from 'components/organisms/PostModal';

const Step = () => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  const [postInfo, setPostInfo] = useState({
    user_id: 1,
    title: '',
    description: '',
    category: '분류1',
  });
  console.log(postInfo.description);
  return (
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
  );
};

export default Step;
