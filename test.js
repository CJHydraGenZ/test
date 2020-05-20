export async function data() {
    return await fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json())
}