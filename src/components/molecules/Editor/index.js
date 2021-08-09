import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Editor = (props) => {
  const modules = {
    toolbar: [
      //[{ 'font': [] }],
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
      ['clean'],
    ],
  };

  const formats = [
    //'font',
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'align',
    'color',
    'background',
  ];

  const { placeholder, onChange } = props;
  return (
    <div style={{ height: '650px' }}>
      <ReactQuill
        style={{ height: '600px' }}
        placeholder={placeholder}
        theme="snow"
        modules={modules}
        formats={formats}
        onChange={(content, delta, source, editor) =>
          onChange(editor.getHTML())
        }
      />
    </div>
  );
};
export default Editor;
