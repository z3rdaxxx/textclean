# TextClean

A simple browser tool for cleaning up messy text. Remove extra spaces, empty lines, and duplicate lines, then copy the result.

Built with plain HTML, CSS, and JavaScript. All text is processed locally in your browser.

## Features

- **Clean up spaces:** Replace consecutive spaces and tabs with a single space and remove whitespace from the beginning and end of each line.
- **Remove empty lines:** Delete blank lines, including lines containing only whitespace.
- **Remove duplicate lines:** Keep the first occurrence of each identical line while preserving the original order.
- **Copy text:** Copy the current result to your clipboard.

Each cleanup action updates the text field directly. You can combine multiple actions by clicking the buttons one after another.

Duplicate detection is case-sensitive and includes whitespace. For example, `Hello` and `hello` are treated as different lines.

## Getting Started

No installation, package manager, or build step is required.

1. Click **Code → Download ZIP** on this repository.
2. Extract the downloaded ZIP file.
3. Open `index.html` in your browser.

You can now use TextClean locally.

## Usage

1. Paste or type your text into the text field.
2. Choose a cleanup action.
3. Apply additional actions if needed.
4. Click **Copy text** to copy the result.

### Example

Before cleaning:

```text
Hello     world

Apple
Apple
Pear
```

After cleaning spaces, removing empty lines, and removing duplicate lines:

```text
Hello world
Apple
Pear
```

### Clipboard Access

Automatic copying depends on your browser's clipboard permissions and security settings.

If automatic copying is unavailable, TextClean selects the text so you can copy it manually:

- **Windows / Linux:** `Ctrl+C`
- **macOS:** `Cmd+C`

## Privacy

TextClean processes your text directly in your browser.

- Entered text is not uploaded to a server.
- No account is required.
- The app does not use analytics or tracking scripts.
- The app does not save your text to a database or browser storage.

## Project Structure

```text
textclean/
├── index.html   # Page structure and controls
├── style.css    # Styling and layout
├── script.js    # Text processing and clipboard functions
├── README.md    # Project documentation
└── LICENSE      # MIT license
```

## Built With

- **HTML** — page structure
- **CSS** — styling and responsive layout
- **JavaScript** — text processing and user interactions

The project uses no external libraries or frameworks.

## Learning Goals

TextClean is a beginner-friendly project for practicing web development.

It provides examples of:

- Connecting HTML, CSS, and JavaScript
- Selecting HTML elements with JavaScript
- Handling button clicks with event listeners
- Working with strings, arrays, loops, and conditions
- Using regular expressions for text replacement
- Working with the Clipboard API
- Handling errors with `try` and `catch`

To experiment, edit a file, save your changes, and refresh the page in your browser.

## Ideas for Future Improvements

These features are suggestions and are not included in the current version:

- A button to clear the text field
- A word and character counter
- Alphabetical line sorting
- An undo button
- Exporting the result as a `.txt` file
- Additional interface languages

## Contributing

Contributions from beginners and experienced developers are welcome.

You can help by reporting bugs, improving the documentation, or suggesting useful features.

To contribute code:

1. Fork this repository.
2. Create a branch for your change.
3. Make and test your changes.
4. Open a pull request explaining what you changed and why.

For bug reports, please include your browser, the steps to reproduce the issue, and a small sample input without personal information.

Please keep changes focused and the code easy to understand.

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.
