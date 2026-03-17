
export interface IChatMessage {
    role: 'client' | 'admin',
    time: string,
    message: string,
    url?: string
    className?: string
}

export interface IOrder {
    status: string,
    type: 'success' | 'complaint' ,
    source: string ,
    orderId: number,
    date: string
}