import "./SelftextFormater.css";
import classNames from "classnames";

export function TextFormater({ selftext, preview }) {
  const replaceBracketLeft = selftext.replace(/\[/g, "\r[");
  const replaceParentesiRight = replaceBracketLeft.replace(/\)/g, ")\r");
  const splitString = replaceParentesiRight.split(/(?:\r\n|\r|\n)/g);

  // console.log(splitString);

  const textPrinter = (string, index) => {
    if (string[0] === "*" && string[1] === "*") {
      const stringToPrint = string.replace(/\*/g, "");
      return <b key={index}>{stringToPrint}</b>;
    } else if ((string[0] === "*" && string[1] !== "*") || (string[1] === "*" && string[2] !== "*")) {
      const stringToPrint = string.replace(/\*/g, "");
      return <i key={index}>{stringToPrint}</i>;
    } else if (
      (string[0] === "~" && string[1] === "~") ||
      (string[1] === "~" && string[2] === "~")
    ) {
      const stringToPrint = string.replace(/~/g, "");
      return <strike key={index}>{stringToPrint}</strike>;
    } else if (string[0] === "[") {
      const prepareSeparateLink = string.replace(/\]/g, "]\r");
      const separateLink = prepareSeparateLink.split(/(?:\r)/g);
      const stringToPrint = separateLink[0].replace(/\[|\]/g, "");
      const stringLink = separateLink[1].replace(/\(|\)/g, "");
      if (preview === "PostCard") {
        return <p key={index} className="PostLink">{stringToPrint}&nbsp;</p>;
      } else if (preview === "PostPage") {
        return (
          <a key={index} className="PostLink" href={stringLink} target="_blank" rel="noreferrer">
            {stringToPrint}&nbsp;  
          </a>
        );
      }
    } else if (string === "" || string.trim().length === 0) {
      return (
        <span key={index}>
          <br></br>
        </span>
      );
    } else if (string === "&amp;#x200B;") {
      const changeAND = string.replace("&amp;#x200B;", "&");
      return <h4 key={index}>{changeAND}</h4>;
    } else {
      return <h4 key={index}>{string}</h4>;
    }
  };

  return (
    <div className="Selftext_Container">
      <div
        className={classNames("LongVersion", {
          ShortVersion: preview === "PostCard",
        })}
      >
        {splitString.map((string, index) => textPrinter(string, index))}
      </div>
    </div>
  );
}
