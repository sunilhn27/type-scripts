interface FutureMailable extends Mailable {
    later(email: string, after: number): boolean
}