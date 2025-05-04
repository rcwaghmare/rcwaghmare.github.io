function loadMarkdown(id, filePath) {
    fetch(filePath)
      .then(res => res.text())
      .then(text => {
        document.getElementById(id).innerHTML = marked.parse(text);
      })
      .catch(err => {
        console.error(`Error loading markdown from ${filePath}:`, err);
      });
  }