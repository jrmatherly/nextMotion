import Editor from '@monaco-editor/react';
import Markdown from 'marked-react';
import {
  type Dispatch,
  type MutableRefObject,
  type SetStateAction,
  useEffect,
  useRef,
} from 'react';
import { useMessage } from '~/contexts/message-context';

interface TextEditorProps {
  id?: string;
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
}

const TextEditor = ({ id, message, setMessage }: TextEditorProps) => {
  const { setMessageContent } = useMessage();
  const messageRef: MutableRefObject<HTMLDivElement | null> = useRef(null);

  useEffect(() => {
    if (messageRef.current) {
      const content = messageRef.current.innerHTML;
      setMessageContent(content);
    }
  }, [setMessageContent]);

  function handleEditorChange(value: string | undefined) {
    setMessage(value ?? '');
  }

  return (
    <div className="flex flex-col gap-4 md:flex-row">
      <div className="h-[300px] w-full rounded-lg border md:w-1/2">
        <Editor
          height="300px"
          defaultLanguage="markdown"
          value={message}
          onChange={handleEditorChange}
          theme="vs-dark"
          options={{
            minimap: { enabled: false },
            fontSize: 14,
            wordWrap: 'on',
          }}
          aria-labelledby={id ? id : undefined}
        />
      </div>
      <div
        ref={messageRef}
        className="prose h-[300px] w-full overflow-y-auto rounded-lg border p-4 dark:prose-invert md:w-1/2"
      >
        <Markdown value={message} />
      </div>
    </div>
  );
};

export { TextEditor };
export type { TextEditorProps };
