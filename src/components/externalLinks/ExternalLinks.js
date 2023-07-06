import "./ExternalLinks.css";

export function ExternalLink({ url }) {
  return (
    <object>
      <div className="ExternalLink_Container">
        <a href={url} target="_blank" rel="noreferrer">
          {url}
        </a>
      </div>
    </object>
  );
}
