import { CommentInput } from '@/components/molecules/comment';
import Close from '@/assets/close_20.svg';
import Plus from '@/assets/plus_20.svg';
import Upload from '@/assets/upload.svg';
import UploadActive from '@/assets/upload_active.svg';

interface TextFieldBottomProps {
  text: string;
  setText: (text: string) => void;
  showGallery: boolean;
  setShowGallery: (value: boolean) => void;
  handleUpload: () => void;
}

export const TextFieldBottom = ({
  text,
  setText,
  showGallery,
  setShowGallery,
  handleUpload,
}: TextFieldBottomProps) => {
  return (
    <div className='flex items-center justify-between gap-3 bg-gray-100 px-5 py-2'>
      <button
        className='cursor-pointer rounded-full bg-gray-200 p-2'
        onClick={() => setShowGallery(!showGallery)}
      >
        {showGallery ? <Close /> : <Plus />}
      </button>

      <CommentInput
        value={text}
        onChange={setText}
        placeholder='댓글 입력'
        minHeight={20}
        maxHeight={42}
        maxLineCount={3}
      />

      <button
        className={`cursor-pointer rounded-full p-2 ${text.trim() ? 'bg-primary-400' : 'bg-primary-100'}`}
        onClick={handleUpload}
      >
        {text.trim() ? <UploadActive /> : <Upload />}
      </button>
    </div>
  );
};
