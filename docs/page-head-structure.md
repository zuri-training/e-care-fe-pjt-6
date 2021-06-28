## The structure for the `<head>` tag in a new page

Below is the base configuration that is to be used for all `<head>`
whenever you're creating a new page.
Replace the content in the `{}` and remove all comments where neccessary

```html
<head>
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="author" content="" />
  <meta name="description" content="%{a-description-for-the page}%" />
  <meta name="Copyright" content="" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="shortcut icon" href="favicon.ico" />
  <!-- Page Title-- put the appropriate name for the page -->
  <title>E-care - %{current-page-title}%</title>
  <!-- Link to google font- with all the neccessary font weight -->
  <link
    href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap"
    rel="stylesheet"
  />
  <!-- 
    The index.css file should always be included followed by the css file for that page.
    once we have a build system running soon you won't need to worry about this 
   -->
  <link rel="stylesheet" href="css/index.css" />
  <link rel="stylesheet" href="css/%{page-stylesheet}%" />
</head>
```

## Guidelines

- No `<script>` tags in the head. it causes performance issues
- Always include a decription in the `<meta name="description" content="%{a-description-for-the page}%" />` file. Its important for SEO
