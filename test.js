export async function data() {
    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json())
    return data
}