interface Mailable {
    send(email: string ,after:number): boolean
    queue(email: string): boolean
}