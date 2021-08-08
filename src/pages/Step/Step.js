import React, { useState } from 'react';
import Card from 'components/atoms/Card';
import Precuation from 'components/organisms/Precaution';
import PostEditor from 'components/organisms/PostEditor';
import PostModal from 'components/organisms/PostModal';

const Step = () => {
  const [showConfirmModal, setShowConfirmModal] = useState(false);
  return (
    <Card maxWidth="900px">
      {showConfirmModal && (
        <PostModal setShowConfirmModal={setShowConfirmModal} />
      )}
      <Precuation />
      <PostEditor setShowConfirmModal={setShowConfirmModal} />
    </Card>
  );
};

export default Step;
