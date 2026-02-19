import Link from "next/link";
import React from "react";

export function parseRichText(text: string): (string | React.ReactNode)[] {
  const out: (string | React.ReactNode)[] = [];
  let i = 0;
  let key = 0;
  const len = text?.length;

  const pushWithLineBreaks = (str: string) => {
    if (!str) return;
    const parts = str?.split("\n");
    parts.forEach((part, idx) => {
      if (part) out.push(part);
      if (idx < parts.length - 1) out.push(<br key={`br-${key++}`} />);
    });
  };

  while (i < len) {
    const openIdx = text.indexOf("[", i);
    if (openIdx === -1) {
      pushWithLineBreaks(text.slice(i));
      break;
    }

    // push plain text before [
    if (openIdx > i) pushWithLineBreaks(text.slice(i, openIdx));

    // find matching ] respecting nested []
    let j = openIdx + 1;
    let depth = 1;
    while (j < len && depth > 0) {
      if (text[j] === "[") depth++;
      else if (text[j] === "]") depth--;
      j++;
    }
    if (depth !== 0) {
      // unmatched [, treat as literal
      pushWithLineBreaks(text.slice(openIdx, j));
      i = j;
      continue;
    }

    const insideBracket = text.slice(openIdx + 1, j - 1);

    // require immediate '(' after the closing ']'
    if (j >= len || text[j] !== "(") {
      pushWithLineBreaks("[" + insideBracket + "]");
      i = j;
      continue;
    }

    // find matching ) respecting nested ()
    let k = j + 1;
    let pDepth = 1;
    while (k < len && pDepth > 0) {
      if (text[k] === "(") pDepth++;
      else if (text[k] === ")") pDepth--;
      k++;
    }
    if (pDepth !== 0) {
      pushWithLineBreaks(text.slice(openIdx, k));
      i = k;
      continue;
    }

    const insideParen = text.slice(j + 1, k - 1).trim();

    // handle variants
    if (insideParen === "BOLD-TEXT") {
      out.push(<b key={key++}>{insideBracket}</b>);
    } else if (insideParen === "ITALIC-TEXT") {
      out.push(<i key={key++}>{insideBracket}</i>);
    } else if (insideParen.startsWith("LINK-TEXT,")) {
      const url = insideParen.slice("LINK-TEXT,".length);
      out.push(
        <Link
          key={key++}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#0056D2",
            textDecoration: "none",
            fontWeight: 550,
            cursor: "pointer",
          }}
        >
          {insideBracket}
        </Link>,
      );
    } else {
      pushWithLineBreaks("[" + insideBracket + "](" + insideParen + ")");
    }

    i = k; // continue after the closing ')'
  }

  return out;
}
