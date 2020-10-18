import React from "react"

interface Props {
  htmlAttributes: {}
  headComponents: []
  bodyAttributes: {}
  preBodyComponents: []
  body: string
  postBodyComponents: []
}


const HTML = (props: Props) => (
  <html {...props.htmlAttributes}>
  <head>
    <meta charSet="utf-8"/>
    <meta httpEquiv="x-ua-compatible" content="ie=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
    <title />
    {props.headComponents}
  </head>
  <body {...props.bodyAttributes}>
  {/* Setup dark/light theme: https://markoskon.com/dark-mode-in-react/ */}
  <script
    dangerouslySetInnerHTML={{
      __html: `
              (function() {
                window.__onThemeChange = function() {};
                function setTheme(newTheme) {
                  window.__theme = newTheme;
                  preferredTheme = newTheme;
                  document.body.className = newTheme;
                  window.__onThemeChange(newTheme);
                }
                var preferredTheme;
                try {
                  preferredTheme = localStorage.getItem('theme');
                } catch (err) { }
                window.__togglePreferredTheme = function() {
                  const newTheme = preferredTheme === 'dark' ? 'light' : 'dark'
                  setTheme(newTheme);
                  try {
                    localStorage.setItem('theme', newTheme); 
                  } catch (err) {}
                }
                var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
                darkQuery.addListener(function(e) {
                  window.__togglePreferredTheme(e.matches ? 'dark' : 'light')
                });
                setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
              })();
            `,
    }}
  />
  {props.preBodyComponents}
  <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }}/>
  {props.postBodyComponents}
  </body>
  </html>)


export default HTML