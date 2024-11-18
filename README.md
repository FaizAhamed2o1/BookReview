# Book Vibe

**Book Vibe** is a dynamic web application for book lovers to track their reading journey. Users can browse through a collection of books, add them to their wish list or read list, and visualize their reading progress with insightful statistics. Built with React and modern web technologies, Book Vibe offers a responsive and user-friendly experience across all devices.

## Features

- **Show Books from JSON Data**: 
  - The app loads and displays a list of books from a JSON file, including key details like title, author, reviews, and number of pages.
  - Users can easily browse through the list of books available.

- **Local Storage Integration**: 
  - Book lists (Wish List and Read List) are stored in the browser’s **local storage**, ensuring data persistence even after refreshing the page or revisiting the app.
  
- **Add Books to Wish List or Read List**:
  - Users can add books to either the **Wish List** or **Read List**.
  - Once a book is read from the **Wish List**, it is removed from the **Wish List** and automatically added to the **Read List** to keep track of progress.

- **Statistics with Custom Bar Chart**:
  - The app generates a **custom bar chart** to visually display statistics about the user's reading activity.
  - The bar chart shows the number of books read, wish-listed, and other relevant metrics to help users track their reading habits.

- **Responsive Design**: 
  - The app is fully **responsive**, ensuring it provides an optimal experience on a variety of devices from smartphones to desktops.
  - The layout adapts dynamically to different screen sizes, making it accessible and user-friendly.

## Technologies Used

- **React**: A JavaScript library for building user interfaces. It helps in creating dynamic single-page applications with reusable components.
- **React Router**: A routing library for React that enables navigation between different views or pages in the app.
- **Local Storage**: A web storage solution that allows data to be stored in the user's browser, enabling data persistence across sessions.
- **Tailwind CSS**: A utility-first CSS framework used to design responsive layouts and custom styles easily.
- **Recharts**: A library for creating composable, customizable charts with React, used here to display statistics through a bar chart.
- **JavaScript (ES6+)**: The core programming language used for logic, manipulation, and handling data flow in the app.
