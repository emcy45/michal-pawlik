import { Paragraph } from "@/components/Primitives/Paragraph";
import { Files } from "lucide-react";
import { useEffect, useState } from "react";

type ExpandAnswerProps = {
  placeholder?: string;
  content?: string;
  expandText?: string;
  collapseText?: string;
};

const ExpandAnswer: React.FC<ExpandAnswerProps> = ({
  content,
  expandText = "Expand",
  collapseText = "Collapse",
}) => {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleToggleExpand = () => {
    setExpanded((prevExpanded) => !prevExpanded);
  };

  const handleCopyClick = () => {
    if (content) {
      navigator.clipboard.writeText(content);
      setCopied(true);
    }
  };

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    if (copied) {
      timer = setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
    return () => clearTimeout(timer);
  }, [copied]);

  const copiedMessageStyle = {
    opacity: 0,
    transition: "opacity 0.3s ease",
  };

  return (
    <div className="my-5">
      <button
        onClick={handleToggleExpand}
        className="hover:text-dark-special ml-6"
      >
        {expanded ? collapseText : expandText}
      </button>

      {expanded && (
        <ul className="flex flex-row">
          <Paragraph>
            {content ||
              "Tutaj znajduje się dodatkowa zawartość, która się rozwija!"}{" "}
          </Paragraph>
          <div className="flex items-center">
            <Files
              className="my-4 hover:text-dark-special ml-6"
              onClick={handleCopyClick}
            />
            {copied && <p className="my-4 ml-6 animate-pulse">Copied!</p>}
          </div>
        </ul>
      )}
    </div>
  );
};

export default ExpandAnswer;