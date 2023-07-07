import "./SelftextFormater.css";
import classNames from "classnames";
import { textPrinter } from "../helpers/textPrinter";

export function TextFormater({ selftext, preview }) {
  const replaceBracketLeft = selftext.replace(/\[/g, "\r[");

  const replaceParentesiRight = replaceBracketLeft.replaceAll(") ", ")\r");
  const replaceParentesiAndPointRight = replaceParentesiRight.replaceAll(").", ")\r.");
  const splitString = replaceParentesiAndPointRight.split(/(?:\r\n|\r|\n)/g);
  const replaceWrongSpaces = splitString.map(
    (word, index) =>
      (word === " " || word === "  " || word === "   ") ? "" : word
  );

  const eliminateRedundantSpace = replaceWrongSpaces.filter(
    (word, index) =>
      word !== "" || (word === "" && replaceWrongSpaces[index - 1] !== "")
  );
  //   if (
  //     (string[0] === "*" && string[1] === "*") ||
  //     (string[0] === " " && string[1] === "*" && string[2] === "*")
  //   ) {
  //     const stringToPrint = string.replace(/\*/g, "");
  //     return <p key={index}><strong>{stringToPrint}</strong></p>;
  //   } else if (
  //     (string[0] === "*" && string[1] !== "*") ||
  //     (string[0] === " " && string[1] === "*" && string[2] !== "*")
  //   ) {
  //     const stringToPrint = string.replace(/\*/g, "");
  //     return <p><em key={index}>{stringToPrint}</em></p>;
  //   } else if (
  //     (string[0] === "~" && string[1] === "~") ||
  //     (string[1] === "~" && string[2] === "~")
  //   ) {
  //     const stringToPrint = string.replace(/~/g, "");
  //     return <strike key={index}>{stringToPrint}</strike>;
  //   } else if (string[0] === "[" && string.slice(-1) === ")") {
  //     const prepareSeparateLink = string.replace(/\]/g, "]\r");
  //     const separateLink = prepareSeparateLink.split(/(?:\r)/g);
  //     const stringToPrint = separateLink[0].replace(/\[|\]/g, "");
  //     const stringLink = separateLink[1].replace(/\(|\)/g, "");
  //     if (preview === "PostCard") {
  //       return (
  //         <p key={index} className="PostLink">
  //           &nbsp;{stringToPrint}&nbsp;
  //         </p>
  //       );
  //     } else if (preview === "PostPage") {
  //       return (
  //         <a
  //           key={index}
  //           className="PostLink"
  //           href={stringLink}
  //           target="_blank"
  //           rel="noreferrer"
  //         >
  //           &nbsp;{stringToPrint}&nbsp;
  //         </a>
  //       );
  //     }
  //   } else if (string === "" || string.trim().length === 0) {
  //     return (
  //       <span key={index}>
  //         <br></br>
  //       </span>
  //     );
  //   } else if (string === "&amp;#x200B;") {
  //     const changeAND = string.replace("&amp;#x200B;", "&");
  //     return <p key={index}>{changeAND}</p>;
  //   } else {
  //     return <p key={index}>{string}</p>;
  //   }
  // };

  return (
    <div className="Selftext_Container">
      <div
        className={classNames("LongVersion", {
          ShortVersion: preview === "PostCard",
        })}
      >
        {eliminateRedundantSpace.map((string, index) =>
          textPrinter(string, index, preview)
        )}
      </div>
    </div>
  );
}
