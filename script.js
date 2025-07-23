/* Updated style for 1Password-like NavBar */

body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f4f8fc;
  color: #333;
}

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #0d47a1;
  color: white;
  position: relative;
}

.navbar-brand {
  font-size: 24px;
  font-weight: bold;
}

.navbar-menu {
  display: flex;
  align-items: center;
  gap: 20px;
}

.navbar-menu a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.navbar-search input {
  padding: 6px 10px;
  border-radius: 5px;
  border: none;
  font-size: 14px;
}

.navbar-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 22px;
  color: white;
  cursor: pointer;
}

@media (max-width: 768px) {
  .navbar-menu {
    flex-direction: column;
    align-items: flex-start;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #0d47a1;
    width: 100%;
    display: none;
    padding: 10px 20px;
  }

  .navbar-menu.active {
    display: flex;
  }

  .navbar-toggle {
    display: block;
  }
}

/* Additional styles preserved */
.container {
  display: flex;
  flex-wrap: wrap;
}

aside {
  background-color: #e3f2fd;
  width: 250px;
  min-height: 100vh;
  padding: 20px;
  transition: transform 0.3s ease;
}

aside a {
  display: block;
  margin: 10px 0;
  text-decoration: none;
  color: #0d47a1;
  font-weight: 500;
  transition: background 0.3s;
}

aside a:hover,
aside a.active {
  background-color: #bbdefb;
  padding: 8px;
  border-radius: 5px;
}

main {
  flex-grow: 1;
  padding: 20px;
}

.info-card {
  background-color: white;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
}

td {
  padding: 10px;
  border-bottom: 1px solid #eee;
}

.status {
  font-weight: bold;
  color: #1b5e20;
}

.profile {
  text-align: center;
  margin-bottom: 20px;
}

.profile-pic-container {
  position: relative;
  display: inline-block;
}

.profile-pic {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 50%;
}

.edit-photo {
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #1976d2;
  color: white;
  border-radius: 50%;
  padding: 5px;
  cursor: pointer;
}

footer {
  text-align: center;
  padding: 15px;
  background-color: #e3f2fd;
  color: #0d47a1;
}

@media (max-width: 768px) {
  aside {
    position: absolute;
    left: 0;
    top: 60px;
    height: calc(100% - 60px);
    transform: translateX(-100%);
    z-index: 999;
  }

  aside.active {
    transform: translateX(0);
  }
}
