// Shorted String
export function shortenId(id: string) {
    return `..${id.substring(id.length - 6)}`
}

export function shortenString(target: string) {
    
    if(target.length > 105) {
        return `${target.slice(0, target.length - 1)}...`    
    }

    return target
}