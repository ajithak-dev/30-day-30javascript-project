document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("markdown-input");
  const preview = document.getElementById("markdown-preview");

  input.addEventListener("input", function () {
    const markdownText = input.value;
    const htmlText = convertMarkdownToHTML(markdownText);
    preview.innerHTML = htmlText;
  });

  function convertMarkdownToHTML(markdown) {
    const lines = markdown.split("\n");
    let html = "";
    let inBlockquote = false;

    lines.forEach((line) => {
      if (line.startsWith("> ")) {
        if (!inBlockquote) {
          html += "<blockquote>";
          inBlockquote = true;
        }
        html += `${processInlineFormatting(line.slice(2))}<br>`;
      } else {
        if (inBlockquote) {
          html += "</blockquote>";
          inBlockquote = false;
        }
        if (line.startsWith("### ")) {
          html += `<h3>${line.slice(4)}</h3>`;
        } else if (line.startsWith("## ")) {
          html += `<h2>${line.slice(3)}</h2>`;
        } else if (line.startsWith("# ")) {
          html += `<h1>${line.slice(2)}</h1>`;
        } else {
          html += `<p>${processInlineFormatting(line)}</p>`;
        }
      }
    });

    if (inBlockquote) {
      html += "</blockquote>";
    }

    return html;
  }

  function processInlineFormatting(line) {
    let formattedLine = "";
    let i = 0;
    const length = line.length;

    while (i < length) {
      if (line[i] === "*" && line[i + 1] === "*") {
        // Bold text
        const closingIndex = line.indexOf("**", i + 2);
        if (closingIndex !== -1) {
          formattedLine += `<strong>${line.slice(
            i + 2,
            closingIndex
          )}</strong>`;
          i = closingIndex + 2;
        } else {
          formattedLine += line[i];
          i++;
        }
      } else if (line[i] === "*") {
        // Italic text
        const closingIndex = line.indexOf("*", i + 1);
        if (closingIndex !== -1) {
          formattedLine += `<em>${line.slice(i + 1, closingIndex)}</em>`;
          i = closingIndex + 1;
        } else {
          formattedLine += line[i];
          i++;
        }
      } else if (line[i] === "`") {
        // Inline code
        const closingIndex = line.indexOf("`", i + 1);
        if (closingIndex !== -1) {
          formattedLine += `<code>${line.slice(i + 1, closingIndex)}</code>`;
          i = closingIndex + 1;
        } else {
          formattedLine += line[i];
          i++;
        }
      } else {
        // Regular text
        formattedLine += line[i];
        i++;
      }
    }

    return processLink(formattedLine);
  }

  function processLink(line) {
    const startText = line.indexOf("[");
    const endText = line.indexOf("]", startText);
    const startUrl = line.indexOf("(", endText);
    const endUrl = line.indexOf(")", startUrl);

    if (
      startText !== -1 &&
      endText !== -1 &&
      startUrl !== -1 &&
      endUrl !== -1
    ) {
      const text = line.slice(startText + 1, endText);
      const url = line.slice(startUrl + 1, endUrl);
      return (
        line.slice(0, startText) +
        `<a href="${url}">${text}</a>` +
        line.slice(endUrl + 1)
      );
    }

    return line;
  }
});
