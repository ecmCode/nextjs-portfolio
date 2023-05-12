export const getData = () => {
    const data = 
    fetch('https://jsonplaceholder.typicode.com/posts/?_limit=10')
    .then(res => res.json()) 
    .catch(() => new Error('API failed to fetch')) as Promise<Blog[]>

    return data
}