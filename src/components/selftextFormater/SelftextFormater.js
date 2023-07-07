import "./SelftextFormater.css";
import classNames from "classnames";
import parse from 'html-react-parser';

export function TextFormater({ selftextHTML, preview }) {
  const parsedText = parse(selftextHTML);
  
  const noBlankSpaces = parsedText.replaceAll('<p>&#x200B;</p>', '');

  const textForPreview1 = noBlankSpaces.replaceAll('<a', '<p className="PostLink"');
  const textForPreview2 = textForPreview1.replaceAll('a>', 'p>');

  const linksToBlank = noBlankSpaces.replaceAll('<a', '<a target="_blank"');

  return (
    <div className="Selftext_Container">
      <div
        className={classNames("LongVersion", {
          ShortVersion: preview === "PostCard",
        })}
      >{preview === "PostCard" ? parse(textForPreview2) : parse(linksToBlank)}
      </div>
    </div>
  );
}
