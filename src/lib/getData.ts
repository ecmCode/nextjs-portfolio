export const getData = () => {
    const data = 
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json()) 
    .catch(() => Error().message) as Promise<Blog[]>

    return data
}