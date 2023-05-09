export const getData = () => {
    const data = 
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json()) 
    .catch(() => new Error('API failed to fetch')) as Promise<Blog[]>

    return data
}