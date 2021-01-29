```
{
  product(id: "aaaaa") {
    id
    name
    description
    image {
      url
      title
    }
    creator {
      name
      avatar {
        url
        title
      }
    }
  }
}

```

```
{
  products {
    id
    name
    image {
      url
      title
    }
    creator {
      avatar {
        url
        title
      }
    }
  }
}
```

```
{
  user(id: "Something") {
    name
    avatar {
      url
      title
    }
    createdProducts {
      name
      image {
        url
        title
      }
    }
  }
}
```
