export async function get(endpoint) {
    try {
        const res = await fetch(`https://routes-rahmadip.vercel.app/${endpoint}`);
        if (!res.ok) {
            throw new Error(`${res.status}, ${res.statusText}`);
        }
        return await res.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export function find(data,column,value) {
    return data?.find(row => row[column] === value) || `${column} or ${value} not exist`;
}

export function filter(data,column,value) {
    return data?.filter(item => item[column] === value ) || [] ;
}