export const textPrinter = (string, index, preview) => {
  if (
    (string[0] === "*" && string[1] === "*") ||
    (string[0] === " " && string[1] === "*" && string[2] === "*")
    //checks if string starts with "** or " ** --BOLD
  ) {
    const boldString = string.replace(/\*/g, "");
    if (
      (boldString[0] === "~" && boldString[1] === "~") ||
      (boldString[1] === "~" && boldString[2] === "~")
      //checks if BOLD string starts with "~~ or " ~~ --CROSSED
    ) {
      const stringToPrint = boldString.replace(/~/g, "");
      return (
        <strike key={index}>
          <strong>{stringToPrint}</strong>
        </strike>
      ); //return BOLD & CROSSED string
    } else {
      //return BOLD string
      return (
        <p key={index}>
          <strong>{boldString}</strong>
        </p>
      );
    }
  } else if (
    (string[0] === "*" && string[1] !== "*") ||
    (string[0] === " " && string[1] === "*" && string[2] !== "*")
    //checks if string starts with "* or " * --ITALICS
  ) {
    const stringToPrint = string.replace(/\*/g, "");
    return (
      <p>
        <em key={index}>{stringToPrint}</em>
      </p>
    );
  } else if (
    (string[0] === "~" && string[1] === "~") ||
    (string[0] === " " && string[1] === "~" && string[2] === "~")
    //checks if string starts with "~~ or " ~~ --CROSSED
  ) {
    const stringToPrint = string.replace(/~/g, "");
    return <strike key={index}>{stringToPrint}</strike>;
  } else if (
    (string[0] === "#" && string[1] === " ") ||
    (string[0] === " " && string[1] === "#" && string[2] === "0")
    //checks if string starts with "# or " # --TITLE
  ) {
    const stringToPrint = string.replace("# ", "");
    return <h4 key={index}>{stringToPrint}</h4>;
  } else if (string[0] === "[" && string.slice(-1) === ")") {
    //checks if string starts with "[ and finishes with )" --NAME & LINK
    const prepareSeparateLink = string.replace(/\]/g, "]\r");
    const separateLink = prepareSeparateLink.split(/(?:\r)/g);
    const stringToPrint = separateLink[0].replace(/\[|\]/g, "");
    const stringLink = separateLink[1].replace(/\(|\)/g, "");
    if (
      (stringToPrint[0] === "*" && stringToPrint[1] === "*") ||
      (stringToPrint[0] === " " &&
        stringToPrint[1] === "*" &&
        stringToPrint[2] === "*")
      //checks if string starts with "** or " ** --BOLD
    ) {
      const boldString = stringToPrint.replace(/\*/g, "");
      if (preview === "PostCard") {
        //print unclickable link
        return (
          <p key={index} className="PostLink">
            <strong>&nbsp;{boldString}&nbsp;</strong>
          </p>
        );
      } else if (preview === "PostPage") {
        //print clickable link
        return (
          <a
            key={index}
            className="PostLink"
            href={stringLink}
            target="_blank"
            rel="noreferrer"
          >
            <strong>&nbsp;{boldString}&nbsp;</strong>
          </a>
        );
      }
    } else if (
      (stringToPrint[0] === "*" && stringToPrint[1] !== "*") ||
      (stringToPrint[0] === " " &&
        stringToPrint[1] === "*" &&
        stringToPrint[2] !== "*")
      //checks if string starts with "* or " * --ITALICS
    ) {
      const italicsString = stringToPrint.replace(/\*/g, "");
      if (preview === "PostCard") {
        //print unclickable link
        return (
          <p key={index} className="PostLink">
            <em>&nbsp;{italicsString}&nbsp;</em>
          </p>
        );
      } else if (preview === "PostPage") {
        //print clickable link
        return (
          <a
            key={index}
            className="PostLink"
            href={stringLink}
            target="_blank"
            rel="noreferrer"
          >
            <em>&nbsp;{italicsString}&nbsp;</em>
          </a>
        );
      }
    } else if (
      (stringToPrint[0] === "~" && stringToPrint[1] === "~") ||
      (stringToPrint[0] === " " &&
        stringToPrint[1] === "~" &&
        stringToPrint[2] === "~")
      //checks if string starts with "~~ or " ~~ --CROSSED
    ) {
      const crossedString = stringToPrint.replace(/~/g, "");
      if (preview === "PostCard") {
        //print unclickable link
        return (
          <p key={index} className="PostLink">
            <strike>&nbsp;{crossedString}&nbsp;</strike>
          </p>
        );
      } else if (preview === "PostPage") {
        //print clickable link
        return (
          <a
            key={index}
            className="PostLink"
            href={stringLink}
            target="_blank"
            rel="noreferrer"
          >
            <strike>&nbsp;{crossedString}&nbsp;</strike>
          </a>
        );
      }
    } else if (preview === "PostCard") {
      //print unclickable link
      return (
        <p key={index} className="PostLink">
          &nbsp;{stringToPrint}&nbsp;
        </p>
      );
    } else if (preview === "PostPage") {
      //print clickable link
      return (
        <a
          key={index}
          className="PostLink"
          href={stringLink}
          target="_blank"
          rel="noreferrer"
        >
          &nbsp;{stringToPrint}&nbsp;
        </a>
      );
    }
  } else if (string === "" || string.trim().length === 0) {
    //checks if string is empty or all whitespace --BLANK
    return (
      <span key={index}>
        <br></br>
      </span>
    );
  } else if (string === "&amp;#x200B;") {
    //checks if string is ampersand --&
    const changeAND = string.replace("&amp;#x200B;", "&");
    return <p key={index}>{changeAND}</p>;
  }
  //default string
  else {
    return <p key={index}>{string}</p>;
  }
};
