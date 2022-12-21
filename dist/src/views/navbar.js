"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const navbar = `<nav class="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="/book">Book</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
      <a class="nav-link" href="/book/">Home<span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/category">Category</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/author">Author</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/publisher">Publisher</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
        Add
      </a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="/book/add">Book</a>
        <a class="dropdown-item" href="/category/add">Category</a>
        <a class="dropdown-item" href="/author/add">Author</a>
        <a class="dropdown-item" href="/publisher/add">Publisher</a>
      </div>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
        User
      </a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Info</a>
        <a class="dropdown-item" href="/logout">Log Out</a>
      </div>
    </li>
  </ul>
  <form class="form-inline my-2 my-lg-0">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</div>
</nav>`;
exports.default = navbar;
//# sourceMappingURL=navbar.js.map