export function htmlize(body: string) {
  return `<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Pretendard:wght@400;700&amp;display=swap" rel="stylesheet" />
    <style>
      body {
        font-family: 'Pretendard', sans-serif;
        font-weight: normal;
      }
    </style>
  </head>
  <body>
    ${body}
  </body>
</html>`
}
