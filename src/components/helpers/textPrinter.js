export const textPrinter = (string) => {
  if (string[0] === "*" && string[1] === "*") {
    const stringToPrint = string.replace(/\*/g, "");
    return <b>{stringToPrint}</b>;
  } else if (string[0] === "*" && string[1] !== "*") {
    const stringToPrint = string.replace(/\*/g, "");
    return <i>{stringToPrint}</i>;
  } else if (
    (string[0] === "~" && string[1] === "~") ||
    (string[1] === "~" && string[2] === "~")
  ) {
    const stringToPrint = string.replace(/\~/g, "");
    return <strike>{stringToPrint}</strike>;
  } else if (string[0] === "[") {
    const prepareSeparateLink = string.replace(/\]/g, "]\r");
    const separateLink = prepareSeparateLink.split(/(?:\r)/g);
    const stringToPrint = separateLink[0].replace(/\[|\]/g, "");
    const stringLink = separateLink[1].replace(/\(|\)/g, "");
    if (preview === "PostCard") {
      return <p className="PostLink">{stringToPrint}</p>;
    } else if (preview === "PostPage") {
      return (
        <a className="PostLink" href={stringLink} target="_blank">
          {stringToPrint}
        </a>
      );
    }
  } else if (string === "" || string.trim().length === 0) {
    return (
      <span>
        <br></br>
      </span>
    );
  } else if (string === "&amp;#x200B;") {
    const changeAND = string.replace("&amp;#x200B;", "&");
    return <p>{changeAND}</p>;
  } else {
    return <p>{string}</p>;
  }
};
