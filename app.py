import streamlit as st

# Title of the app
st.title("Selfbrary - Personal Library Management")

# Sidebar for navigation
st.sidebar.title("Navigation")
options = st.sidebar.radio("Choose an option:", ["Home", "Add Book", "View Books"])

# Home
if options == "Home":
    st.write("Welcome to Selfbrary, your personal library management tool!")

# Add Book
elif options == "Add Book":
    st.header("Add a New Book")
    title = st.text_input("Title")
    author = st.text_input("Author")
    genre = st.text_input("Genre")
    if st.button("Add Book"):
        st.success(f"Added book: {title} by {author} (Genre: {genre})")

# View Books
elif options == "View Books":
    st.header("Books in Your Library")
    st.write("(This feature will show a list of books added to your library. It will be implemented in future versions.)")

# Run the app with: streamlit run app.py