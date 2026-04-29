import './style.css';

const syntaxHighlighter = window.hljs;

if (syntaxHighlighter) {
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('pre code').forEach((block) => {
      if (typeof syntaxHighlighter.highlightElement === 'function') {
        syntaxHighlighter.highlightElement(block);
        return;
      }

      if (typeof syntaxHighlighter.highlightBlock === 'function') {
        syntaxHighlighter.highlightBlock(block);
      }
    });
  });
}