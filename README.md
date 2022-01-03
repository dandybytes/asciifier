# 📸 ASCIIfier

ASCIIfier can convert uploaded RGB photos to ASCII images. It can also "ASCII-fy" live web camera videos. ASCIIfier was created with [React.js](http://facebook.github.io/react/index.html) using React hooks and React context.

![](https://github.com/dandybytes/asciifier/blob/master/docs/asciifier.png)

## 👾 Technology

|                                   tool                                   | description                                 |
| :----------------------------------------------------------------------: | ------------------------------------------- |
| [React](http://facebook.github.io/react/index.html) with hooks & context | front-end JavaScript-based library          |
|                      [Sass](https://sass-lang.com/)                      | CSS styling extension language              |
|                       [Babel](https://babeljs.io/)                       | ECMAScript transpiler                       |
|                    [Webpack](https://webpack.js.org/)                    | task management and module bundling toolkit |

## 🔐 Prerequisites

- node
- npm
- yarn (optional)

## 🛠 Installation

```bash
# Clone this repository
$ git clone https://github.com/dandybytes/asciifier.git

# Navigate into the repository
$ cd asciifier

# Install the required dependencies
$ yarn || npm i

# Start the local development server
$ yarn start || npm start
```

## 🚀 Production:
Before production deployment, create a `.env.production.local` file and fill out the required variables following the example in `.env.production.local.sample`.

## 🎓 Features:

-   converts user-uploaded photos to ASCII images
-   converts web camera live videos to ASCII
