import express from "express";
import bodyParser from "body-parser";
import fs from "fs";

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/register', (req, res) => {
    const users = getUsers();
    const { username, password, fullName, age, email, gender } = req.body;

    if (!username || !password || !email) {
        return res.status(400).json({ error: 'username, password, and email are required' });
    }
    if (username.length < 3) {
        return res.status(400).json({ error: 'username should be at least 3 characters long' });
    }

    if (password.length < 5) {
        return res.status(400).json({ error: 'password should be at least 5 characters long' });
    }

    if (age && age < 10) {
        return res.status(400).json({ error: 'age should be at least 10' });
    }

    if (gender && !['male', 'female'].includes(gender)) {
        return res.status(400).json({ error: 'gender should be either "male" or "female"' });
    }

    const newUser = {
        id: users.length + 1,
        username,
        password,
        fullName,
        age,
        email,
        gender,
    };

    users.push(newUser);
    saveUsers(users);

    return res.json({ message: 'User registered successfully' });
});
app.get('/profile/:identifier', (req, res) => {
    const users = getUsers();
    const { identifier } = req.params;

    const user = users.find((u) => u.username === identifier || u.email === identifier);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    return res.json(user);
});

app.put('/profile/:identifier', (req, res) => {
    const users = getUsers();
    const { identifier } = req.params;
    const { password, fullName, age, email, gender } = req.body;

    const user = users.find((u) => u.username === identifier || u.email === identifier);

    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    if (password && password.length < 5) {
        return res.status(400).json({ error: 'password should be at least 5 characters long' });
    }

    if (age && age < 10) {
        return res.status(400).json({ error: 'age should be at least 10' });
    }

    if (gender && !['male', 'female'].includes(gender)) {
        return res.status(400).json({ error: 'gender should be either "male" or "female"' });
    }

    user.password = password || user.password;
    user.fullName = fullName || user.fullName;
    user.age = age || user.age;
    user.email = email || user.email;
    user.gender = gender || user.gender;

    saveUsers(users);

    return res.json({ message: 'Profile updated successfully' });
});

app.delete('/profile/:identifier', (req, res) => {
    const users = getUsers();
    const { identifier } = req.params;

    const userIndex = users.findIndex((u) => u.username === identifier || u.email === identifier);

    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found' });
    }

    users.splice(userIndex, 1);
    saveUsers(users);

    return res.json({ message: 'Profile deleted successfully' });
});

app.post('/blog', (req, res) => {
    const blogs = getBlogs();
    const { title, slug, content, tags } = req.body;

    if (!title || !slug || !content || !tags) {
        return res.status(400).json({ error: 'title, slug, content, and tags are required' });
    }

    const newBlog = {
        id: blogs.length + 1,
        title,
        slug,
        content,
        tags,
        comments: [],
    };

    blogs.push(newBlog);
    saveBlogs(blogs);

    return res.json({ message: 'Blog created successfully' });
});

app.get('/blog', (req, res) => {
    const blogs = getBlogs();
    return res.json(blogs);
});

app.put('/blog/:id', (req, res) => {
    const blogs = getBlogs();
    const { id } = req.params;
    const { title, slug, content, tags } = req.body;

    const blog = blogs.find((b) => b.id === parseInt(id));

    if (!blog) {
        return res.status(404).json({ error: 'Blog not found' });
    }

    if (!title || !slug || !content || !tags) {
        return res.status(400).json({ error: 'title, slug, content, and tags are required' });
    }

    blog.title = title;
    blog.slug = slug;
    blog.content = content;
    blog.tags = tags;

    saveBlogs(blogs);

    return res.json({ message: 'Blog updated successfully' });
});

app.delete('/blog/:id', (req, res) => {
    const blogs = getBlogs();
    const { id } = req.params;

    const blogIndex = blogs.findIndex((b) => b.id === parseInt(id));

    if (blogIndex === -1) {
        return res.status(404).json({ error: 'Blog not found' });
    }

    blogs.splice(blogIndex, 1);
    saveBlogs(blogs);

    return res.json({ message: 'Blog deleted successfully' });
});
const PORT = process.env.port || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

function getUsers() {
    const usersData = fs.readFileSync('database/users.json');
    return JSON.parse(usersData);
}

function saveUsers(users) {
    fs.writeFileSync('database/users.json', JSON.stringify(users, null, 2));
}

function getBlogs() {
    const blogsData = fs.readFileSync('database/blog.json');
    return JSON.parse(blogsData);
}

function saveBlogs(blogs) {
    fs.writeFileSync('database/blog.json', JSON.stringify(blogs, null, 2));
}